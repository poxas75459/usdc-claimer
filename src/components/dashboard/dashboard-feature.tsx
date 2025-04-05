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
    "5o32jeJWw37PWuYxrnUoM5fgkptPZRPcoFPwaPG4CnpdHa6a3fH6stL9WR7MtJbaa5U6X6hJjtXMEF5LfJ5qf7bv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oVPvu362HPZ1BTuCHhhcscDrLhJhfzxDfCgQ5tBdGkMxCoc77e9ZYkpgYiJmFAthxyJaF1itoJPdgp2Yz1JXDF",
  "key1": "7aQut483dosG3KS371cwUaKMYNQBm5MpNUnyDQagBc8MdZiKXoHeSX1PUW88gfTG6s4EYhpv5MPfYjiBPQjVfRB",
  "key2": "1H4J9WGVmdhKSY5VqXCmaMKvNm6f1CRSPBJu2S5Vmvoe7hRbPEYjLtueb2i8fKbU8AHReM3hQfzAphDzADqxSSH",
  "key3": "4JWWByEcX4Xq1F4RKCn7QMzvRcgxQPcPhtEbTqVwtqsMvAYTSj2dLrFozcCJm4pud1Bph6GkXevvB5X7ZoaM6iE",
  "key4": "3a91unD3Mtxf6EJhSKnbozqWQ3QxUH2V9rE8YqrGhT6wK296wDFYBbhLXUTeVHsaCMPsuk3scw2WCb6eC5p2N5gU",
  "key5": "3nGQ4KgsCEtmPFAfRJxHxDHHVFWxXupv5riSPFUv35p7tu1WZKdfPoRPWhANx3TEmFUfBogY8dy2mogHmnjTH3QQ",
  "key6": "5k349MJM7bJQQsjhkuMBUF257db6bx5MzNsVxeft7UdakYarNyoCG46S9XYMbk9cRoww6r4GLBn6PNdXFaGw59Pw",
  "key7": "3v8ZRUvdNpvLXSvvErYCL9Wgik8eFwaYnw9gtMotU5YnHKU81SARiDthecmNjeofnkrvEQwAixHMhs4M6tfzAW26",
  "key8": "3QwoChwzLeQducZ1F72eoUF6w2eGWDyt6moSgqbrzKjpiiGZZM8XiwHpDsRyK7xeXWu44QnFHe7ZAZqZHBX7uaHg",
  "key9": "63BdRHScgEVFzyXhsH1h9bF1nsarE7tvswN31A58MXPPF4nPJWceTkuZ1cmkoXq8zi1oGkH4yi19RUHUzQAWURsX",
  "key10": "5cMhVaJavsdcuyR2ym2tmqAgW9H8uUaWwcyRxF5XFqZnVRWcGyqjcM3zisbfaB7JxnHraA7s1n4WFGAqvsVAGuvS",
  "key11": "tWGmnN48H7YwgAmWGJXJndQ64HhZsVkC4PZ9UWKbrkG4t3Z1rnhfnbE6TtmxWa2DoxUeABZJvZcY1AzYEdYEcpC",
  "key12": "zeiht2ehSzqEJA9XVAPKfkosY5EDhz8vdT3DziUWF2pk5NLKFHQS7Mnwj5EgCNJP3dKexeHcaonGUQgPb37ah34",
  "key13": "437vuuJPbj7nrVbJ9P3JjdrEFj5RNkcgpKyvmCtScqVcf4VDrixqaqV6K2aQKAYHZsps7RwwXAHPUGMNsr75yyXk",
  "key14": "3HGiPnStwL1ckPYciSYuKCrBKpYjd6BjUqzWb9nfu85wmavkpQbquRZSBZfJt3vgEPNJ6Gh9TvNdd4xckwBYDEKt",
  "key15": "5C9qR8XqdkxojtBmSv3Vj2yL3hAK1i3NmhQ8JnaayAriMDHpfEmriKYwsfS2sKrPowBXF6qNiQhZ81ira1R1iinh",
  "key16": "5t2UzA1yt3TQ3QbciPnaD5Jwr37EpZHfVEP8LvYSXP1zJHk3DASa8HGKStaZQHTDJMyvFVEeeVYLbeLq1dYxrYeB",
  "key17": "fwh6WtpHEkuvDENBTF2R3T3jwvdtFyWiu3yYAxYn3JNVNGtvQ7xV8nXwhLhsL7KVsxzxtxTurdVK4tkCLC5LyKH",
  "key18": "3PAAzDTRg9CLWKMEFLXUt38h4CjPV93QuCxPWZE1Jp4DCYxPhccu87zd5qJ2wjPVQMjSnKZQJvcQMc2h2EHKgPrF",
  "key19": "29RWGngmEbd3h8GX22637toPJyTLmQt3xX3fHvWM4HnTCwft1rrerfH5P8HRLnmqhMt8KfoXGfZqkDPvQDKaMrWC",
  "key20": "66TaaT7WaKeeBiENxWVZbFHujtNhHjQA9ursMdGRBsU5chrNBSxq4DWxTPobHyqav5pVdV98vjsZxzZZXdqBS8vZ",
  "key21": "5N1qPspAtGoDrsx77vFCWWBg37hzbaC5R6GwffEyqyeCHDrfgWt1KM8M6UJeL3N9VkWnHN3vXByfRN4J74y5GoAy",
  "key22": "Hapdayn3CcKnkuCMWBmKbDjAvSWatKwhjjr2qwnzdTFjTyYLdmotPzUR3M1XZF9NVTqbRGAkWsnjDPbncqNcfrh",
  "key23": "4QXVN1Lrpy1TaHY3BxwEsRV3k9iNB8JsBV4TF99P2HdsCTHRh8wve6EzPGP5FYuqp33DKdy8Q2JCcoXyQQ5Fh5JM",
  "key24": "9WkWe9erzeW9yvs5UF4YxanC8WpT7kcJKzUBS8XeWjxoeuqbuKzZxL8SLySYmURuskeEDwresbxug92qYtVTPpJ",
  "key25": "2azroRzvjKSpsZY2sXnbz5uDh6n9iAJkPCViHb5pzKqkpynUgoVcf7JYPYvM8myPtodWEwpwSTZ7isHSB6hjw1do"
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
