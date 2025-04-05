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
    "TryC4ahdCECmBVQW3hf84SocaU2jgaPRN3Wm43Ssw6cdhWG9wvya3gJDAbibmsGLt3X8bHGYLg96xjWuP2aHmHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRnzVEF5N2pYh3BsC5o7PMGtaz15KYp1geXGqFTSwHgLQjxmCg3bbZgyBES77ABx1kockwtM3DUybKXvirEVjhe",
  "key1": "2tBRwWxpFFpSWEhL1fPUSwzFx64ehaubmyV8GKsM2uykqmjGHC2n4gyD6EGBkiwzsy9NdkDEyQBbZkSDqfJXkuR8",
  "key2": "3iw36EVFuuV19WLjcyD4KqKqstLA7XTEoXhPScb5FxE3MoY5XyssxQg71PTasXDc5cAcjkadZHGSoRDNwxu6KvJa",
  "key3": "4zuMbqAcvMqo1GiTGKqpnn9YmL4rpMstiZPN6gMxKLiBRa2H58SFj5TYvEyejtTBChYYD4qo69W9g7pHJGqh7LRN",
  "key4": "Amd6JLJQyW9FHvwY5htcsmFaV2PZv4EKBhPgsjQ8MqkNGiBSpntvAyFH1B6RAepaW3YQ6ZCMD8X4MhrMTxVpvwQ",
  "key5": "4XyGSZMbvRGjB232vkD6h91BtbEYRN2tjh3kte12ZGMbSzZBaGVv3EUkWNAAd4iX9LHZpU1nX1HtkkbSHLuKs4EL",
  "key6": "2ro4uKYznPHuUNNHKgtRunpW2FKwEmRM4ZxS2eBMSWeLSVTBZyzFAmDz4ZY7VfZDKh7GALAiKenZma8MEzMt7KVw",
  "key7": "3Hghej8dooxrSVEyS4tcpDVqPA1GjE6fni7M9cytK52gDhEHmREufK6qUW2uGHT5vgzUCWEoGktk1ocFhUtY5DWJ",
  "key8": "4hDtAz6hGJNq2nSLmiuLudbsZ5RV3z7Yn5NfH83rv68F8EinB71Muie6SJ44Ponc9GRtHFM2yfM7upoZnerWSxr",
  "key9": "4sQD7xDEjXqLta9MrPoTLadKsBaiWqG9zsHjTWG3aFye8bcwkVMg3qXvZm2gge4YX2NHkUikgSFe5se9wutKSwNJ",
  "key10": "38Sam27RwTjesm1JYVakvJjhejYn3okoxNuD2A7YvfdAJZgrm1JKoT7edgMbb3sw6ovw41LPEJRHBunBCx71grM2",
  "key11": "2vXAsqftkmjNuPRaR2wdYzx7BUnQdPfj9QcEXUA4r63kPKja8DbQWfYYA18Uc3Kn9MK4pJfWw17Pgm52FANEBYe3",
  "key12": "4pYueaZWxzMkUoHZd6U7upF9xKNS24aYRWUjsoNYMkFFeHXapRsUEKTsRdMhvDwZNyH9ocyhVEsXP9WnSdGQZuVG",
  "key13": "tLRgT1xLNcwUb4zbJAxmRieZFn4dMFGkmQSu5V4XNEG8tM8V6WYyLMi5VjhqxT6Bz999DFUg2Fr6qkK9h1VdC9N",
  "key14": "GYJWVcYXTAeosypC3VM4uPJd4uoU36TK9LQNkWGko6mSe16iQ7Ew67SMxX7phxcihRSiinEunUzpwEh6PVAKdW6",
  "key15": "5KBiW4K3WyzBRtiRKKtxFCbMSeJpFpur2GEM8pqYpiRHj19RhaTvKaMMUwj67yiUq1hGCpZNzREkKLrC5EzGqHg1",
  "key16": "4mXSc7gftG3HNo3KaEK3HCUUHiX3QBVShT3kh5syddyHERFssdrYPVhb9uPiab9fkbZVNom2EU4NdtrCbT2arRqb",
  "key17": "3t6w25mhDfo7HzczeriRsppYQUQ3jxYg88tt1NLf1VPzzCsnD6JFHyHhqNLVqoKTexfgSzr313TdADSaCmiAiQkw",
  "key18": "52XuStkAVBTZJqyGhoLjXaAYrPwcQC4hsUfEvyVgkbJjHRPZSGxv8TnrpgfFPFDem23UJrqZzp2B8GqcPwBqUQQX",
  "key19": "5S7V3samgvBufSbq9e1dJC5V4tjjZiimiBydfQegYBtgk8mS1MPZSuQa17K5NdktrDNEypvkrtkUFYTdXF5Zw1mB",
  "key20": "VX4xwPnQQBqeqZwmQbcDSRAQGwcp4rn9XePJom7JLbqsCygA18dgPm65q1X4ofeQAaUxTGxiCvU7ksFG6fBtKPx",
  "key21": "46MDEFhLY6TZMUcFTAxt5DdhRwWFj37k6B5GLdHTcM6weCAbuoRdgEouDSRHidP8Ug1EuPdnDF395Jt3jKHKeLzV",
  "key22": "2UJa9RmgkG51zuPy5hA2s2BqYhnDt33gPLmzz6rpunirasMnz2dSdVh5wEp2Et8qNDa35M4Ghch1QW4Z6YK8BToz",
  "key23": "CNiG45Bouj3ELnHQM5Wvc1mrnUwDBmVoz2rSDHPwNr12A5ELhZvawQY9nJwdHDzUFKjbY7yzGwDr19fNvQBzAj9",
  "key24": "2oxWJniqH85oRzvih8eJ58ZFu7XT5QApb2GRQqcCa8qZtK6LBoFBTB7pDoVjC8JRnmkFstvKpKQRxSyMbVP8Q1B4",
  "key25": "QBjdpyNfcLMJWt87qksdvnAwyuxJwzvDBNqN5Co6sZVpbHNhZyD6AV8oKPZJzRUYhrQp58pyyVPBxH7Cujxvt4f",
  "key26": "5sDNi59eyPitwB8dJJAQhFytw99fVtrw57cKszRuRqMRFuh3s3dE2HiL4dZ4KaHFoABXTyEzgHX4UShihUbwwyKQ"
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
