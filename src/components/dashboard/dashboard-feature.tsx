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
    "3kcucDCXxkAnTH6Vc3CKfwuHo51Gn7pqQEeBZ1EBSPHzkXktBLnuaoVBvDPK7BukwTMkhbjJKg1QUxKcTjEDF4Lc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLLy3rzcNRr3Zb3sRzqpytqF11cACtLSM7qd8TPty43hicEKHvQxJFwj1i5gBW6S33pJ2HsKQBX11PRTqSjD4tF",
  "key1": "5sLg98tYGPNxNTsSoGcKwP2kBW8irCuLKe2pBM31Ggp6qysvxyDuc3HBNMQuTVgNGJrg2GQ5d73s2aTZXorgATvY",
  "key2": "59TQqdHbKbzDPmMLf9s6x22mwZuMMog4D9RPnxZG19zHiK7ziM3sF65gUcBRpEhUQ1wVnRPMh8QDYd9tYXiKjWw4",
  "key3": "pxbi2wVB9UHgFi12RR636s7q2oMPyKhdezBHZcGfrm2tjEKLvNFbXeGW9sqDayMkgk7WELgu3gWtutHyeZuaMgZ",
  "key4": "5pL34ApsMdfwBrDKYWyDSFhEjZ248a5Jo4CG65JZN5yXQv8DUGQvw8pgToQpNd3EweTwARgzcsMQdFHfnkz2DGNE",
  "key5": "61t4yg4tP99bh65rhcFnoCEb99CNbEdzbz7ZTVmBPK4KW5MhpDMR5msbCEemv5bhgtvhSZDyCV2tZDWcnYrkjuii",
  "key6": "3mXZcQQLFXDv3ifKHJUcMf8JwbMPKWNMZU9PFMUyiMiVnoPQdDz5RrhZ6DXurEkeLMDkAubHVNPJqWrZgpMy4Kzs",
  "key7": "2yRUpJogF1ceSg2JZxkGhAAqGBVvTiwwqPCMpx6SzJqTPET88VaRGQmL517zZt4eTiA6WyVEUBsEotishVfKMoL4",
  "key8": "2mwDwr2puUymNRspakYmCSm9GaJXBDdVS15eCvDYSieyCpkpgDnsN8quraV17FzwzYiPxUabMd1bB6GTeLqfxkjp",
  "key9": "23rXWc284USriHCQopArkYSirK8CyFdtxnNWFPbjRAx9XfXmh6ZVJ3gPrrD2kaxFLCbYEYxsWUD2ntmcMNJfzo7P",
  "key10": "Vgah6oJsTVoBYh8gpH7umTFD9zZLiAobxW8vPhhZrEa9XSK2XJktgHHiRrEj7eP5c9bU6UJ84wZruFKPdy6zkTX",
  "key11": "5G2H4C4N6e5UmRrbMNjLDU8sX8iRHYMMYH71jykNPs7ndKvuLe7cmHf2aJKxA2LwNYTWfgYoLsSLny1JTMCtLgnP",
  "key12": "2Xp4rFhW9xwG1mygVLWzvJCgWY6jyfjXwcQ4xFLAeqQYihBHJVZmvKP3MUQJckHz8TV9ov33ehu3NPRkcb6evn2Z",
  "key13": "2CfBTsgDmGjG6qSsYSLqokq9vq9VgNZBsaje1zwzPkzYLPbdKKre6Hp1X73kQLsnLfDTzKXD4nAW51ZZUn1d8BXg",
  "key14": "3aPZPKXPcFK2H7KCoUhiZJpghQ2MuXZJKJffAFV1AvEDdTDm9c6UtH8NMthSLx7Ez7bYZiS2NVCiow2gYgg2Tw2g",
  "key15": "4xn4A9waccBGionuwoP3V4BwGdeav7txfMd3exYJfSSTBq3fJBn1y3wMzG1xHSf3M5u1sRPsuRZH9HGfGNEQ5899",
  "key16": "M9awY5d6Z5nbvSXXaHFBL2AVG3fP6PDZQcFwaqAsrTRVP4RgDWSUc6B5bJHC5LSkovEsjNSBTvsFFUT3YCctksu",
  "key17": "4TnZ2Av9iBoVaSLWwKzL4J5FbGY5TMcJT2rV3zwTjqrtXT61HDPT1XzYLH8FQtNBX27FdGYGoLZki7QLt6Xn7ZSR",
  "key18": "2WGAErkonx4Y89fSf639VLd4Gbgxgw1CW43MpDac38Bj4WJAwToAADxwqnQ3ud37PCmLRfkNDwLjwHiWDnNRt7kt",
  "key19": "4LmqjmTW9nnYo4Zk9CyxvckLG4YQF6P5x6zWRZHL2eM5De9i8pCt69pnrA6cd8RCNvhzy4Fxt9mEnrZYEFs1vGdG",
  "key20": "51j426rohe7vMviDTeG22AEff1yCHoAhkXqAXdZstd7aQ9YhbR2iRW5iGSNqEZyvEw8jNJW91kCHL7jTsFBAJCzV",
  "key21": "5cdjpt15JKHnTSxkeAAcnJxdbK2tXu28qB9NoKxym74nj3r16okLSU6kRmUF7v1BzcupCA7sEWdpiVm2w6xEqpuD",
  "key22": "2dzqZB3V2iHpvo8cxzEonkUVqYZ8mG4husZ4Auju2Kh5yMjGp9kbhUi2xJyeRs4oSKHQQP95s1atzmAhC6qHVd3P",
  "key23": "5fcvHxHrUSW2FijFj3KQhNhKonhFLHVrUsFfHcBbGJPTyLH3xaueZhMJuUhXRJsgjaJUdT6G2wCDUXj9idnjoz77",
  "key24": "4bMGbFj2ma6B2jhx2otomgxfwwweqzMMtquN69gEfBEaYEShHq8b3VJAqFHZCCQRskjofTX936M4V7hTbYk2KRDH",
  "key25": "4KpraB9cirZu21xkVJp7y8H6bbbfSpm2Yb2zzw79QmnjDkui1Kifih4PKWWtVkWQrQUoH47dijwbkRvpyjwwUbyX",
  "key26": "5z7KYRims5Nbn2WSswnTiRmvUS83BfuWFe5QhH2RkyHoTfwHFSCEBYmTMfw2kAG65dszSKj8F5Wgv7BAWD951pm4",
  "key27": "4b3qHVCiDFAfyhJdqfbcH9DbHSSME1atUHFCuAaNRWrGAJhSwiNkUawWXAvQHkDhLF5U6sgVA5H1w6n5nWbPjBV9",
  "key28": "3qSS8BgNUAAzk3afzQ9DuU8z9zfwNLi1mbBjDNNghCukyUnXpiQCbzz9MQW2LiyRLyAs65cRUDw4SeRABPqPcSS5",
  "key29": "3bxTRo3RF9jF8Lnjke4FSGVgEo7bcMa2dJJSYoTwDjBrrMwSu9E1EEif7kELxPUpgCHC5BoRiFbqeUPASfwqyjc5"
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
