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
    "3Fi1wZKqKuMfc3p6KeBa1KRTpum5F2CyNZ9omPhjENBxfhpGk7Y5Reb2RG7HoMC8VA2WCccTAatnrxv7qwAibrhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCgzg7GXXSyPg6GH1srhXPBozEm6oaUC5UykJmpQhYpnqKX3bEYFyj5pucECfhXYtKFkiDsB1vLeb2vJBGauCfp",
  "key1": "3t7Y6adQfJvKidcokhv7rE2GrThPWDz2FyLMeC4LHsuX4wbSbsTMQaL4CHfoTExVnKFnsxVUzmPSaV1e8rwsdhW4",
  "key2": "5NgarBKQBMiddhSeQHgvRzRb3UDQz3N3qBobKqiFKe5bP9pN1nvAyVsMkRm3AYS8YfrGyiT8pUCi6xeoCMGkD3Xm",
  "key3": "3NwUMJkMn5wvgnkbq5NDj9zzGwUpXDnaZ3dexP5dxiGZPVpuUWm9KS4Qx6xDsC1QBiKYw9jb4GaNUzZitYTT4T91",
  "key4": "5jACVfVafTWzEU2dL5WsojsJnjV9uAG5Kohp6yy8iNNpbtsFg2mQnMvnF63p2vNecoPUEQyN4xPXrdXscehnXBmh",
  "key5": "3unqVFpkLM8jvJ6uFp85ecduKtkyMiiGkm7YR4A5P2XtYKUwZ2D1E5TJegYfmznG9JTjn9WZs7q9u5wRucC1bFcq",
  "key6": "3a6LzPjiKNLDAsgbGpaXbvSh8pqmFb1QZzrTNasgZW17VNoUkRVer84uJcvGAwmMhvmgJUd5AJ1dhetnVd5wAWo1",
  "key7": "neBLCJBw5ydwggCtnxudnQf1hBHn54SViyQ1TENuewKEsKt8mzZY3Hj47ALMGAuNEJjSU5Zkz5s8wDcoihzdwYt",
  "key8": "2nDNBWd7FWFCDj7wXx3yVnXkNFG6GRx5rranzQLng44gCFSDc7pPhg3k9PzK3uJcUBKY2euybuu9STdGd1f1gW91",
  "key9": "4uJtKZPY6Dr2Cp7iD3wgeaNpxGGgG2RAgSjYCigujkqGuMQEv7NU8qDd2wUamfbex8hXKbA9LbdXUvQbJNbKUfWB",
  "key10": "5LgLyqKEDc7rtDMoGLHfLK5deUEEzp9i3TJLrnkepFXkfUhRxgsSRrUJotjG36XF2c5DLPXvp5P77GmYGCQXqHKZ",
  "key11": "2vnB7ZmdGqVDYUMjp2S7D4M55eHNj2YZKCJeFu4ivTJwPMopxVpBvGpp1y4fDFh6tRuztD66bWZvWWNx5cno4E41",
  "key12": "5PXELnc6p4j2xsL5zzXQDb3Y1aYjeegAXRaj6kZCxRipbhAV4Tz2rTjLejLDdHiTuhaUCu5ZcFdFx7YNFJaMq17y",
  "key13": "3KbzjNm5QW69iMZcQ16jbLjSKQbm1YwVGuhPpJDACEEBNYcNAH5K6tTsx4yqN3gx1UCG8ru2zsA94Bw2QmyiDNjs",
  "key14": "55TeBUZJcpseiedeugQeVJyGLfS44bDzDdchkf5BmMyJjD78AWxipUhNSUEJf1LCKCBHhV8d2H2Zwc9Q7Q4Qc9EK",
  "key15": "2q9gaXcsX575L79ffrqgNNp4aCKVt6ichTpvfWDS82gAhiyipvxNhSTJbryfz3D93zTVRonpnpjQKnU9a6yh2iDY",
  "key16": "uixB7isyLiVucYhfbPYJQCSrF9aFR7UB7ZzpxjQ3u1GZs7naFZMBD49oebVQRYx9zpm3KPKGYpQ6D57w3pxyeZA",
  "key17": "5wUYccZU8rDYL9XYxjkp5NANuavnttCzD7F4Rm1fbUXTxKuGStMswbZFzEAcg2rFMwiD8r97s4ffLLZx4eLCNqLD",
  "key18": "66hoGR5yzJqxgn8ZoPLuYEPoQZsWtnZC7hhLTFWid9Ddqk57JsGU8xZqV36SXdHXL3BB3yvsejpi3iMMF69vnLHx",
  "key19": "N51BKhx4VZXacXnEiifCNnrUVtN1tVfkUzDNyvtWqRm3wKqrmRTtkVH8tj9aJmcNBLCUV6i8VffGghtU157wbMn",
  "key20": "2o4GYQxFUvdHVMmPub9FfJLhH18QWTxDGbwjmWk1KHRvofZ5yon9kKqnjFdmkEsJx93dRUJoqK3VJ5r1Z95AR7NK",
  "key21": "sL37syaE7NBsuVeMQoTU8LE3FQdWTcavwhk5igF3MdMvsLnPdNELMUHyuzt8RLMo1EGmbLZDSC4TC5VRrEHH1or",
  "key22": "NkG5ZBrFWgPAvtpCaFq61q1qX9XVBieZC8yxm4d7uS814cH9Xkv25tLeED22jo7RgZQU4pssRzGyZAesW3zJU9J",
  "key23": "2zVXn2zDvFwy4yJAEyBZJEWMU1se9kedeRNfZ9jMrxx4bgvptQ8E64CXoMWtyNB2pZmFakJRgr3DcB6tvR3wFitX",
  "key24": "3Bd1qavSNT8Wi1erSDfFDr5BBwcKQGzQF8hMnbGF8ezTUAgezsCJJHWKndax5bC1TKbhgXPhx9CMQS2cWpuqzaqD",
  "key25": "52FjofWBxsYW36upGi7kNWCkbsXRZ7iotihG18y6GUU7bpTH61TqdADrZkyEECVhPpCEUoGZgYMjHffeRveQH4u7",
  "key26": "3NNPwNdK2F1NyRu9stVtY2P46nYBC7MprcYYLmnMK2bgj67CCjw6YtrcHZGRkcWmFQQiAg4JTNLk7esz5Vhx4E4o",
  "key27": "62wqvXF7npBCZkUvSRcSsdyB3qTeYHGTocb59NWcVXPUpwDcW1diiDeVgwsV5QbXmB3Bj5UhH2F6TJ6cUoKrua7k",
  "key28": "SZw7QdUBa1qXJtUQhUy8wP45KpVx1TkHw2fWTi1ejanjASv6TuxZZGDT7xSQmG28iy8wduRs1KDP5PDXFjpdhcj",
  "key29": "3T87fiXuDPV697JSVUG6Q7BzYLByDAQf91QnsGf3mWnoFjfcCVTdmw6SD6gtUH2begB7adUhjN8APWwQbDHQ3juB",
  "key30": "4hDUw3ckevRyKAz321gZJjhuTVwxG5NnwHEHDkMaGZAP9ZoyL6VgwAJLDLmAcNkBbNTd9XhL8cvNFP14XLRU7D1J",
  "key31": "4XADoh2WLQePZTT9pgfD6iZwLHL7v9wMUVFhZAYbGGD5AoLMGsZD8JxndCb5Xg55HEFuEws5BmjkVe5hKvh98vPD",
  "key32": "2MStRELJDLZSrwHFLxTQcfbPViFL78ZM8XRvx2b1tgpeDBK6gYnD4wEJhsA2N1ketp24TQCJTwXbQhCqDAQ3zj1X",
  "key33": "3TucCFPkhRWdGi2hYMHT4XiyAwKbHGCaWv4ZzRdESfiBNobr5htQ28tH8E6Vrfkm9SvvRYV4FJPh8TUQUJQFgiVN",
  "key34": "E2jQxrPFbQMYd1xrfMqrZkeHnjd3gWRSLa5QxSHmMWufkwHobYh4X5s8kCfXugiW4nf5D8c1CXqUpKcvvUXop1C",
  "key35": "4j3FxLoZkshMdxaV2k7C436hUE5bqFDfDoueUZxTqonZjagjVrAsHUQee5qMHp96ZrxDnX2nWAiawEBVhctA8pDc",
  "key36": "2QDeEk39Qc2vAVVLVYrmrTf2X5Lkem5GAg2H27R3piDxCFkfJP6RK1pY1xz473HMVHeyEJ9jwvkGHsJfp52MscZJ"
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
