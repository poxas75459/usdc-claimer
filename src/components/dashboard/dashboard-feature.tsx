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
    "4QDKHppeQNoVXs1B3A7ytqZqquFLibA2idEpG1LUTbaREmPN6exPTj6hrgKV7pZiSS5wQViem1UEY7kp4Ezwss5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNuWpmfLRGAKQ43QecA1PLwnvHb2kkZEfeLuUvsQ7PYShXJhSoZEeVwzRCpZqW5oTEyHody67pQ1U3HtasofzyT",
  "key1": "3ancJcDFzSyAboEiwnfzapZdGbiUEfUtK8axQ6Y4TSfMJ3a6s8s5wZbLp6sXCC2PrxwmCSbSKLSXkfzHB7MjNXsa",
  "key2": "5bhpxGAdmx7EPWDMthVrs3i1zHNroHiS4fL3W6i7VrwcRGR5c1VYoRevLxsYTbq55ygJyuVaEU4xrx1fF7EFUYwa",
  "key3": "4kZpxjUEZKtvU4WSUJxtotPgQRPLJFCbvK2Eiii91AFuAym4jcxf6UiiGq8Hse37YwNnbBeL9MARz6U82ZhBXDj6",
  "key4": "gsueRKCAG7ppHqPw29DC7jGTFGBMdhY3ZUa9rgoveeCboZWYssuFpUB8mi2QDLhjBPdJoLht5xvrpKwJj9niuH5",
  "key5": "4nfQYpGyqUuvKT8abAktfcCSJEvXhr6ZRJTZ4JkYCcNYyxWKtxYFoHQkP28sGz2mZWFWSBDz6mFxs4w64EpfEMpu",
  "key6": "huQzYAVoyqnz8aCLYyHCJC2sJ6XFgvfBoUQBfv5vr546DiGqsmirZg4ZTXEYqgzNDWjpP6rmfGeTrTzpDbPLk2G",
  "key7": "57x1wEUoMwi1oRoCZ5sAtAY19ATJ7d3LXVzZZ6jTKTaofFywYhXZX7F1LnRe8rMAkyTn1xE8FteZVed14ZBuvYNm",
  "key8": "4gcGB927zGquxgLm2W4w8oZpmuKABqNNdLTJ5ig1tPWo3CwrRigPYv4PCyxodLLnmmyR4hqrUBH63uZeGrgAdEn",
  "key9": "EjxZScK8AuEzPbYf2avU1Wjx32janCqgwZMZZG5SU5b3ZrKG8TaEustmMh5owbGmFPP4QQG3sfsW7Bus1LKfVWi",
  "key10": "4xyQLZzpQTmdc4Z4HpnKKoWDnWKQMsEaHtaXwM3qhuHwCpmtRgruFRVLb9FBPdbYWEHAXmDf2hs5U7uBhXdhBXTa",
  "key11": "3S9Wg5zgC7jybBpUxMjgv7UbKL7Mgdgrb6zdqAy6CGWrV31C3EnSfNF4bN5fqMz4NnRCCG5oBkRCH7gH3Am2Rp9S",
  "key12": "NXFMnFUpBGhmHCDwDbDWcG7gga5fxivY1fGdtsWC4V9pBnTnVcMWAv8P1bHBU9bDRrD128pRMCsFig3w7vsn4k4",
  "key13": "25eYE2znDDEbVxyjQ6HszXvVsdHV7HmNC4XHHecP3atJgG568LzhQqJ4yCTJxAgNz936H36XicpFzhLSiZHuUjex",
  "key14": "4EYN91QMxwj3v2AUeWjMSrXb8UAwgXLJEpgVN139mqbJ7dz53DxAazBXLqE5AMwomkshxAi4fX8gjiaqHcEUQhpT",
  "key15": "4YLRnTYwCoyjRibZheD9FmSQDh7KU3jhdAPbPPveoX23XZtJiWqJaD4V83LeszdLwdo4ZuCD8WARbZQ7NRokJWVz",
  "key16": "2PVaStcmVPQ5TJBdC3cBre1WgqsRGkfiHuwFSiigwxymio3chfJA392VYSev5E2UXfuZuHnPf8VxhHBnMFJ77SCc",
  "key17": "3HFEokce77eCiNbwMd3Yu2inFmJxDYgfpzarqJRYJXpgcdTsFTYPdLFKrE8a6J93EmQAmVJ5XF1fRmVm51cYoQMR",
  "key18": "5ieshVp2LChj8z7izw4N2QPmdQeHgZ7rFyBE8mCscH5vky67RL9JQQ2iWp7BW622zqDXKRgBZkmAybqXePJ6xFXa",
  "key19": "3daSXaigoda7CJBqg65HabeijyztG8Ue6VytUvebCGzV83SJz59ApV2sDmPVkTEpkmW5Mpz5wUuvETFFEPrUUPtZ",
  "key20": "5RL8bbuBNe5mx4aevRfq1daG2BZBJP7zZwntdSGCMbiCpft3ERhRGrowv1amKM1R3mxXzeE2dv4v7MkxEE7qEbNd",
  "key21": "66KzoWEDChzDt5E1qckL5rsAWPRJpb18cM9vxavfiP21JnWa1Ktb4XmNAQMakqirjbZsQMVBmwdQnuSWZfVkN61B",
  "key22": "65F8qAozf1dSrMsbLMwhJZx27Ubpsw8Pxm8faH4nLAMK4ezFgEMdCNSKZYi2P5QaQCbDR61MFNsnTpxgDqdUhtdr",
  "key23": "37NxKo1REW6jgqREeQy9qFGpNgPZ9C6bYceD3yJdoHj45FjUTGDA8h5eWdZE4r1dPK63cCHwRLQNGfddsapx4Bhc",
  "key24": "5qL5TSWu6PM18hKJcCvvhmimkcAiouFAuu7VvHyEKGtxrtSapncEe9iD9JHo8YiZymk16vDBvsVRDkYqJ53yw5gn",
  "key25": "3cn9w6CF1AanMRDbDLzbdyaXrvkcWkGfdxPDwxCbLjaECwJx8PRKdNriFvqxRgGDGes7tG6gAGVU5KqnUhazFhwi",
  "key26": "3FpcG6632MaeSrtMwub9AHvnk4k7YyERa2fkriyQPPs6WpQLEgzodfS6b8vc3MVbhyjwjWKngH9r7iirGBHtt95G"
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
