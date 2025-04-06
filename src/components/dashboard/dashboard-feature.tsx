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
    "UCf8iaojax9CgseoBGfa5uatp3UQRx1wHiJgPTfWmipGEo5EGzonyWErDPpfnzShrvsDLpNQG5KRjaFwVZtVxhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LXMgUV2Torwdzm37PVKB9EtQPfFSXXbMBYtCQqnLnrE7q7X4hLiDyExjXMnv1RGnfEqStec3w1mGJdGvwYbv7h4",
  "key1": "4qeVPAKKa7vFQnmwh3ijwoSDtbATJgUpu5Y9KMsUC1HG4MGPpMUDWnVPtPVhTDVibxwMLGAm3uiQVu1HGFviQBMu",
  "key2": "5o29brSiMmtBH5tgvU7R81XS3cPdCWMWY4K6PpQ2ruNPBTQ1bwdEsRWWKoKBWprqnnYzLKtKuDxmUuQnuxdqEvwv",
  "key3": "5dCz2VDUDvVzhfRakqYfYzRpbeE4cwfMeCHdK8ij8HXzyX6mRwJ3FebCEpJ9s3vA4NLNaKZHDHu56r8iDB3cmFZ5",
  "key4": "5vFR1PZMVQVcu2XDzpb3kqSP9XiokFrzpjRA3vuZRAoH1Qtr3ZBg7NQxYFbzeuV9RD93w14bioUmuBTMsQK4m2e5",
  "key5": "ktYtybxPrVSngqwdnJZDmeRfffQKP8ycRRbUT531TZkyEjY7YeLNDBDyLr64qxDH3BEV2tRwV9ppqnQyVsJY3Az",
  "key6": "3A2WrnL3Am9eZtju3uBTNvJ56fwSPZaP2aJtmjMMx4tiMBpt8bpn1rWp2EEi5Zc5BsMktB2aWazS3nvkeGncg9w3",
  "key7": "5PjGuk3zMtML35H8QDBBq8vN2ry2gKuUjAJtPVZY2LatXtzVYpP8yUcCA6nFP3EdqxA8ECDjWas4RjqkVk5E35Go",
  "key8": "4UwpvFFotmKrmAdzh6Nh2kZ13gkpnQ5xVETSUFJwB87pWHd9ddtovNJJnL5QcBKgVYMNUubBxuVEEg4DeGofmjAD",
  "key9": "5gg16g6bP3ctLji3GMgLPqr9UVnmByDkeBzSq197iCJ6e3Kh9mJPkf7cfNzottc6vpcN6wK46Zv2kaprr81wsEBp",
  "key10": "5r9hAkYWAgckD6hzFa2Drpnw5PfieJV98n8rronsrc6t8pzs4uk2nQjfv8MXjBhKxqYCD1dJvM4YPfQ8EhVpwGCZ",
  "key11": "4Vk6uBUyC9Zt2KFNXEYDHp1PtHY9qagSx42hW4CT6j4dDWYDJ3tvctHaqHK1eZ78X2GwG4bo1PSgqurkCseeTPdK",
  "key12": "49CXxBxwkiVDt4jd9hFsHtZXPH1C9oQ4RUjVpyHg9enrow1demxtKNUgr7KCSyWa41KzSDpQTeNG1GV3JNBKJQNk",
  "key13": "TwcRmj6P1tkeaXSx8WZaaY3wtvFF4hjZiQGdFVCtt8wvKGPQ6RDtXbkU2jotv5BDgdu9xvKhPgZ7Wm3gUHjDwuu",
  "key14": "5mC8mCLpxX9CpYPGgh9yy8JMfg9dNtZqUccXDqtf21vvr7rAQitbvpVosoYzaWiTfyhQUGd8429eTEAKpNfNZ6Wa",
  "key15": "311CQRAHwJKh5izcDqpF7V5PBqCA3qUSKcn4KrYyBhubrFeB79H1woxQitijvQhiRGJsxJcRni4Fuvkwdqe53WVF",
  "key16": "5okUNfLYG7Ww4YR5bQWdjVvUUdHR4YTm4arhPktgpQQ8ySEGWnPJuN5PyUrw8AS53mtGFCvBcHuTDu5RZQMnw2NW",
  "key17": "275nEVoVeqqfyvGuFzRNiYwU98DftxDEcKVCKBfEaJCd7dA7L2b8ft1ncjbUozqmuQfwKxttsBFxbsGtmznyMAgi",
  "key18": "2FG1VjpsST1dgjrDNVKeFempiuzPRrXqbLE6KhY6M2EXikaGtcVTtp74M5wv1bBXSTMo85GAZKfJGsjbgL39fzM3",
  "key19": "5q3YFeBE6LcDscybqtJpwgiGe2Q1amFnjk8No2S142NTHj6FdhsMLdwDSAaP9oALc5KtngHidbLgfkqDuGHTw9NE",
  "key20": "5zU19TjmZXMZDb7jhP3s3zq2M7rVbCVVTLzsWMwDVSMxGr1yRSKeGkH1vVKZHMs2WqmQd14n8xkAGpd3HNHcbMFV",
  "key21": "4bB1hVPGNRmVJR1AAeBAku7MkmW2BTDHXnXgS2aiEdFefXohtq3VihzwYfs6zMehd6gNrFJo9RnwEuqbVcEJPN39",
  "key22": "3dmdiHsxkNJRtzdwPi3HyB1sV98mgnBf2B3a2qj9vmHRDxFXKsBkfjaxQwKEkKB2kHYg997JyDssFZZFgStYJ3WQ",
  "key23": "5Q71J8nA4yWqdjs7SBTKxkiWqDxu9af6QSMVfEseU9Pf4z6gecGohvwy3GJAVPRcd14rVAqTegrSzpvEYPSaVqfs",
  "key24": "5e7hvsByjeeJG6Doef4YA7C8Ho8zHRxtYGm5gRngmfDVvcVSkaSLxNv8xQnXyamj4LFkmzZdbT13yjoUWk77HspD",
  "key25": "b6LVMUhoifDG8gx9KaUDkJSj4QNb6PfW7M9MKg6npqpY4sMkDR1DnwTeHayeogXqE42xS44CpcJVHRzEZHwXKFM",
  "key26": "3mr2j23juu7pAbE8mFJbe63QTFvNqjvrJ5spJ8jGqax8hqj5zWemo3EQxHjS2jS9AsZ5pRh6d7Mcs83wWTzCzR9B",
  "key27": "63eZ35ViogxF37s21PSRgGbAw4kndMSitsZ8F6JQKTdW1YZkAK2bjxNJXMEnKXNL3TBgKCjrPBiAyPYcUxtEDzEg"
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
