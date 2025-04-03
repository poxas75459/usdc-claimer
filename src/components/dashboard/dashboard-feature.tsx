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
    "3EctgfqqS5XAU4qXY5tDjCNUSg84Wq4wYMR8DNSQUf9rcqLohaFyXkX6RsiT2UAK7VuD4pHmFxPGKdJa5WEqfLCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78GwNWHXUeuDaeZyz24HcUrwVGyrmBJJznofWFJXJ9DF1Tq9mqt3KCC4SKp83Q9YNUxeKf5eufnfpKyfeaL8BeD",
  "key1": "59otfa264T3fZmN6svBQFFCiosDkfyngymohHo58ZVLzBPThtNDomRLfApTgXgjpYRN4Rc9HDz7btR3MNFLJP83p",
  "key2": "4j8WwsT8zX7J136txCLUhctD9RxeCpuqnvgwEb4F4RuHmTkjP9wHbfMMmaWkEJcvveyppDkeKzLMaHNM1NX89gcP",
  "key3": "5UEApsH1hSPLDBJNVmFUTJTSkdPXemNsCLX3AUpWPcbTvoYPBikw1PPYFE1ShE2ff4p5J3YLGQ6dYsP5jMn1nNY1",
  "key4": "5Jj3bBhPZfQQSNV2WTTo3TH9HLpDH58wYszGi7L3R3EVpEHiR5YA88JziiAdSEZcgVBPdQ3KRJxswPpq4tLZHFm5",
  "key5": "3GoDutPfVSbYm1FN363Sj8MbwNTcbX5W81BCS7ethCrzu7k3xScLari3j7CWEniKNLUusnvbxEiSyBZoGxqBpdct",
  "key6": "5EQDdoYowHJbwT7zVxkDc4YBoxPdcLawSwxq59VVWJSK3XVrGmuSVkZqCCXyVRgPYuAgAEN58rmyTKUTMUsFa9ku",
  "key7": "5bW83QG7H9caEocYUS4ES1akfLfQinTMiHebVZq36HxySchBs3zri5rWLzqKepGkkxjZR7Gjiz6iRsHQiotVZmh8",
  "key8": "nq7GUFkLwCoZFG5i5LA5mKDxTzywSRLGpJ8sHbBCqoKCjoNJKrQ6D2tMGPdqANxNQLLD3Ze4LP6ns6RLYCxK2qs",
  "key9": "BbRnN4tiLhbMT6tzHtL4WDo4i5mKdk7NxKfpPPhmGbaw9f71ttW2X5DaD2tG96z8bzEgMPggq9iudqSFpgdmXd2",
  "key10": "2LrVwLrUxFLRaPPWnH5gwtuV8waWBBwa86BszZShRKTQGPkeDKKZ6EZRiPEVZbNDhkqMQTkTvfmbtsb4na74VzEh",
  "key11": "4i6SubqKqxiiLGwYmLKYbewczDvLQmkgvtKNuZ9p6qg8W7qoxTNQdcahF7fLuv3uFdUqmG1e3qTPvgct3BqBxDzQ",
  "key12": "5gK4uFtixJQSHnzPReh279hDPChWWFgRom9NxEADWid8wrMae4ZvmZrsUEScAogRTdeKm3HcobL6WS38LjHxNhtF",
  "key13": "5Va4PTn2Xris1bD8DsuG7oPgEYCdQHWoygSnpXHTwz2BYqwQRkVcFCPmkCzgKj6M2g5nwEE1RjiPUiC7QtbE2JUY",
  "key14": "3imQywKdmkzc8h1MixQ9xzzEZu3T3MU7UvkzgDfffgjznYWfTV9iBJdSyLZ5wn6CnhX2a8hH9RF4Ad7UEBK3Kw1N",
  "key15": "4TvLUnic6nnepxh7WZpsZBccrKLHVeqsPtHS4TPbbCrhDE3oq6QjBtg1zk61CVxLCoE4yapBcTX3vo1hKp1nr2TJ",
  "key16": "ihjY7MHjeyev9m6hKGFc19Snu9tNV4yhF9x4UvD9GQbnDsBjP8JP1YNXAc3EbeVFWgcPLpePaha2J2AcVr9nX88",
  "key17": "5bNMbMiUAS2yWf9r6pKtRD3xd4tqdJ2rSxkwjaj5JAMfQJ1gWqiv1vTH1VmZ4fkYWKWGKmQhqXocQgvGDjVa8Lk4",
  "key18": "4QkwVwtTjwbbmrhPdgPVQ8KGFPDHKnDTv7S5JDLE2Na3oa4JBGdm2XKqK2EdByQrRxreUWNc4J1LmcAPwhmDYkoR",
  "key19": "4sdu3wuCRgyHxyFHW2M9KB3a9RWU3A9ASowoucyMfdUqeMRb14AioFcffS2RWnR6ZQx1ZTHyKa5AdcL7bdDgjTrZ",
  "key20": "3s4gb3FyNAjKDJWPBhHt9Zxo59yXYffmBgk1yFaHh4UbsjP7MEr1aPR3PZj1NParucrb64N9rJgnESaiYZ11Cu8V",
  "key21": "2jmh1ptSPiMhzmcwVHBBZV7CbRWx1WPLxPBJ72fpoRzXZ5axVL8orgo35pntoCbUFnL2vEmudq1CjMk9xrfpduiZ",
  "key22": "HT4SjG6dvfoPQr9tps9uDKm8xxHtykEdpoSVBusJAa1RKWs3AuCmzierBcmRyJYQZfDX77CGHsDrgvhkdxjDsNL",
  "key23": "EzxjCGUU1hjCHnPbhXUbSoDJfLtnkzgd7h7hcGEBJ6wjEx4dgA31cFMwHGxEytSCCDT3ys1cLuw7vnVnRzK8emq",
  "key24": "4L99GQ6TpFbsNbZEY2RzHwT1AU3WGYHkmd88TFtkUiA7n2bPy5ZcPj6o6EA33NnusXu4xSJGrccRVvMMKrWVVZtj",
  "key25": "2guyKiLswVKfpiCXF8tarrekhsbeDrV9eLdpXDErPW3YC7pLZKULxwMnWeBXw51NNDFS8tT223KXnh46EPupAjyi",
  "key26": "3JVB8J3hymjoCjshVoXAgvd1a3DsfdMvVknpY5hgMX4Upqq55LNrds1jTZHPFtr7p3yi4GPXFiQ8fzLzZLyrxn8g",
  "key27": "4yVoe3fzg6oCaAmQSsGh8LFki2reQn2CKq76KtRfrMCWPhqAJdouYyMieQs7TD9CUE2wH7nyUZrREXHfp8oJutrS",
  "key28": "3HTBDKjVDBVBFzW5pJY3sPjKeNFFvuN4TdZGBhbYGFDp5N6zh5xsNEdxPydRoDVjmKc3PYc99NVQcsmH1xNxzofp",
  "key29": "xqGNpmSXz6mVQdxY5C88eFrDoG9bhf5BuqQ9jRZjgn2w6mMGxqRSS38g86xTh7AVHZewUFcX17KcFeCu5YVjvAk"
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
