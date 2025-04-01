/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2XvPKTBcEQ4kWfWDqLufUZyfJCaUvRncbCVfuNnjijrgZxSkYC2nomoBGuHzZTFwckUwxdTgg79nomaXim7WC6aP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wcQLL6rX5EtLWo3G5dmKrMKdYb9EirffBceiuUynJ6kDEmAD6XnoFGYFB7HLBFgCrkB2xQCZNajdwmJQ7jxPA3f",
  "key1": "5WQZSNtt4yBu7Fc9Ybkc3jMoYqCmNv3U9XD4zmfTfpQBZvKAcCwXDxsNWDpGV56z9NTGCnZ4WY6ZV8LLWutuFNiB",
  "key2": "2SL59ub42iHSL48SZB8aSafP77iCdXvRZwzKa9xr9NH8zex5oBDkgM3FF7qAoa3TLfJHrHBdnHwTj7UsVCXHCJN9",
  "key3": "3aT3spbwHMFKnKfzVSHS35PKgeHFgK3FmanL1o9BEZWXeXSVndHQLiZBo9B9FRRvGDVLZgt4nFoXzjDeMrNDiYQJ",
  "key4": "621CEBzuf8m5YUEM7MgGzehPm2zchzQvpaSu2mYKBKvvH3XNhbygiE7nEDo3A5sf4YeWxC9RZiduAQXkFMRjwYKi",
  "key5": "3rm7mdnFzZuCk5P29iKzfWbVasMzbpTJ6TFLAGxb4Xa2hLDC7Fk1wCGhTjpvbu5RBJsafL7eAsHY38d8SVN4b8FR",
  "key6": "3Aru785rBcURqFH5QeKhcq6cBgykC4W9wnoWz1ZuLT3Hr8UXnHxqCqAQSktnFpVL7zC2xJSV6u6dkv6EG17N7Tah",
  "key7": "diGaFwy3LvU1ZAXNxFeAJTyNc38WbJ2rkJiTRvEj7GH9oZgS5KQDAPt4skwzwtZiiEaoX87nKp8AMj27xHb3Q2j",
  "key8": "4oNk6g2z6SgwC4RrRiZJnkgT2wa8b1DYNTkPfPwNmVnkESHnZYFSK2gUnXW3mesCo2ai1sqn1q1JmBYrJXueF4Hb",
  "key9": "3qkPSChfp9QhWCdCPhA2UrotyZEdHEAnYiMC99wAjKQiqHg8zRvfQacQfJi278uyhsrZpZoGKBk8wmLA4mmgDDUS",
  "key10": "56JhizooYUK9AKRaWaD7yg5TdHeter81vb5jXAYEPKag5pYbFh5HJQqWs2HWTDfKh7VGoee35mY9fDf9LuvTyuBn",
  "key11": "5HdeqZXvzqR9WCxGvxE9VN1vxVxdmQYGaUAL1Hcnuj385MeaEVUBUqeZXUZPeCuTV9sUFWUbpKeyuwY4GCcAvn1k",
  "key12": "24ZyaztCpG9W6ubjhL88ztfQYYmHcF7ofboEen8sSjJ6Qs841QhSXfYRN74wCEEZh5duMap12G31PqyPQr4LKDfm",
  "key13": "3bVj7yQSfdBAd2ettYrdEcMQFwghGgmdgz7XvVUGWxR3UAQH2qHD5X7esfH1NDk3fcxn51aa7MjSiAazaiueFrmY",
  "key14": "4H7id68cx5pQs9zxfEQ9T9Nhv3sL2gTLkbN9qC4tC8djcfqRsNvcgbGcZCvQTX7Yyt6TorhfJB1iubEk2bFPLrTq",
  "key15": "anq8oUW9bxuiYGD54CxzhoYG6AxVysiBT3Eo7tyqRCF4oDqMHGcAc2emtVfqoyqXxPqTfWv6LbRfsSTFai8dP2u",
  "key16": "44po2AGJApFE4eCndV7URfn2VsY4QFJwAPjyTRoE5D91Cmo7n9LZVo9HTbufqqTZrnbAcFQbwn2BezBSdgkBnC6S",
  "key17": "3DD5FNuP1N59NHsniEQsocfrR8pkavYGLTGdajXtQZLMUYpdaUguAKsQ9NgV6RdJMWbBAhibAbotLm9dDgkWmbvZ",
  "key18": "b81NEigiWA8pxjusPQkVzQW2vjtQ7q6kgLqK9QgcYpRBe67DYhDJcTtUCJb2vfTUTBZ7zz5hkvMgLzMtXbgnd7g",
  "key19": "3kM7bKFtx9LjV6geerNZCMFzrsEcskNuqtgLnEwPmSujP7CYorgZZ64CyDK6Q4oMa3XUY2Ki313oXnswpKzwRuqm",
  "key20": "AqPasJm22NXvf2Jh5BdC82VhqEQm6VvV78jeBrTEe4RH5EyRSfK17TtUKXPvPiGnjNBAE99iKiTjhpPNucVuGqx",
  "key21": "5u71WPA5gZ284yJ2ZjEgMRAzRHuhy72ds6JaKaSsnQUcU3T3T9kHoePEujyt5trz3Rrjg1qwi8gRFRPKYReQmY5e",
  "key22": "2XfJtMZxJjdcqaeQyQo8YU2o92MxynFpq7B5Dtxi6Wk5UkZZDLgcLCkaGT523ycErJv6gAGTHUpyAKKFtApYoUQG",
  "key23": "2fhxqF6XbQK5pH86ZbaESLneJRWnbH9z5j7YMvs9Jp5bjkyEcaFemVjULV3iiyfQoagqfWCTtTuQqGbNAiv3mLm8",
  "key24": "8wLBV4gVtngzvtYv5rs1EF4Ao2ariuVABTYt7p6GeJrvavZ6EQbYS7X51byDdBYkH3WWZebyGiS6NpcEKtxYSXo",
  "key25": "3oGTEHPKwkB3EiPrqbuvVQRskhdEHJ8idnoEH1pTT9cVWdGd79ChtdJoEYSYomWcraVsjGKEAHSZaX6XUQj2zEeX",
  "key26": "2V9Jb5uHLQdgrQnsXSWEZvReLR12hpRJuTpx12PSBMGpQA81ejuNXCXP4JrmccUwjcoteqenj3a6y9dABpDW5VgH",
  "key27": "2yvw4eP522cPPTW97SgiEGpsqan9ue8xwWzuToVmcHacKjScwkSCz1qDeuACk4hbvc7KYDJB9Ycsn1BoHbp2Kf69",
  "key28": "4wneB71ZF4XB8skaV4UaM3RH8VBJdzu261ZKaje4tEyKzY8xtjc7mLaaxoEuA1jXS6ygVv2yX2Rn2fd7budu8ZuH",
  "key29": "35iXfLDn2DRru3gzZXhxSMoB3ZMocQVkwD1WHwTF5H8DWQAxWHHRt5kC3NJ7Bv25c3ayXY6WLC4s7JUk7eWFftTZ"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
