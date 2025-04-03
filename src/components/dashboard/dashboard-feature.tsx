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
    "3LcXj3c7K5Hqi6DAGhqQL5i2eVpqTUQhXXNJbKF2mZPbYacQkjnKdrYh5qb7z4MVVUq2KYD2pc5YfLLsMXEu8Rnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ex1NPm9F5GQSu56MqG9ntPB5kQoccjiUFFc3cnSdyTWwqGgyxJnYT5tw1s9w11YgadGXryX7VS5dbGhHspj4Y3N",
  "key1": "2m7sXdGmaucvqAMSNQWwh5h7UBmMWNBGN2U2C73qPtAsrcJuUNecPniL6N3G5tpErqwKzTYoeunASnQkeJ4xA7uL",
  "key2": "2eKQKEHZWLC4HSbnCUbAsLXWGZZmQq99QZ4KpAePHcPe6vDEReC9byFFfyxRSQs2pPnDxx2cuU3i8pmnnmkHrg55",
  "key3": "3o6aQux5HTetyWcvDm3Gtj8rH2LnZNcNvcfLVK1TFPLHpwPuaEgMNkZrMDKhJBxwZ5ezDpecGadVsuR5ghQw2431",
  "key4": "5nbdwFNFm2dtiMgcUYpnYzMaU6oEBqBSzTGasJDuaCsDVDcW8EqbM5f9VccNH4X38yTPmTjqEkGfbHe4kpZ4nZxk",
  "key5": "4UaT4jgvmwzfgAGtwx47LUSHJi1kci2qnJHjnKfMMZx7K3kT4aXpZf5oTb9pvTbc9mRRXcydrunXRJeS8wqcJcQH",
  "key6": "4aXzFgpJ6f2rEYkPfr2kU6ZBb77rR7d4tSyfr14UBRsV8Mk2JRL9NhRcusS5HdwbXkLhdaR8ikc18NN6SWahTBhE",
  "key7": "62LATPC7bVpG4dJnGgJUagUGzr5kjVAyzBJDxvYMpUmo7yo8xTRKJdCmw4U4nn2nEBm9yxKXrvHikpqPTEsfkVmY",
  "key8": "27pvQPVdXydiohTgakwxkoXr5bFxpKoWFnUBtSFbeHsEkzMQnFuAiQTpXzAVikHA2bPusQKsmdBvvA8t5G2eLWUt",
  "key9": "39np9aAdzTHRZ2rY6x3UNjNjidriS3gDrx4sHChs6v156c9Ba5YaY1g5QGesdhYu69yNEjAhAas1W6oD1oin8dDL",
  "key10": "5ikPdXk3QTUM1rEjHDa3hGq3NYWLW19PsUtk73QEaY9C5qQEFfzJEHLGTarZUjQVEES8ZK2nfJpDXqTEMCDbHWCh",
  "key11": "5B2wdZahptezHAhkGXbHaxGvdkvWQc1hJgXR2irMLL6ECmZcGKZzcNER75Jr4Zq7CQ8CN2dEMot4FLU3TJqSdEoV",
  "key12": "3c2RxxPfVh2cnwmQSDGYmCEEPqi33ntLznt3Eogyko1PZsyCvr2NsADRj5NfCC2jcdgn9hD2u8tCP9C6n7jKcVx5",
  "key13": "3bSc8Cm1ZV3pJoFjagzVDJkMWrzeBJLDLznov3W66T8oVbP8h58YaiffV4LcQGYrgUS1ysYUvTXmMLA3a6fdtjCc",
  "key14": "4D74BgDiQWypKQj6MdAbkLm5oqTYixN5PPYFfyMq2A5S8wLLMvLYyVqvZ2kNtbqFkD52cx5qLaduva8AvHBSd9Hs",
  "key15": "4mtRfkENHHmHNGnXSrFLHCy2UwTKR6H1Nx7V8RNUwp7rCqcBGxgUz9mqRB9bgMwVy6EiVpcYL7C9sVCorcdkCbzK",
  "key16": "oGAtRvGxMnN4fCFkuzLjBmLmEHkh36uT4dXQQm9k9Dv3oAs9oPnAra6kSsfC2Ap1UJczViJp7K1Uwq9HdQDaDrr",
  "key17": "3nUL9SArwpAU4HtenvaU9pB1EVWsuELNPNM97Nc2PbUe7RhXybHtK8aLdbdkET6YMNQCj5mqnbL2jrVPAZWaueFQ",
  "key18": "2yaD7F4pUsriKYCgQLBVNJDAcg6Mnap7Pbq25ZxP7gF8EgTizgfwt8GXY2bdWpbBw8ktpc3Wyx3632dLMBCpsAzM",
  "key19": "63epPAuHpqSvVZ41Ma5qjUK6G4tR7UdSvXy8kYFYaGrj5TgTVSJ7HBNqrHrtzNvcxrNvp5zUadreiASDrnpkgKhv",
  "key20": "2XDpwFzFAJNdBTX4myWeGWkbjoV3tEuoscytwhux7GMDbs8AnUiNgtR1hs5bWvXZXcAupGWmSVXGxWN7v3NgzSmY",
  "key21": "35kft7obZwMeEwbqYsv6ddetFd9d6CNbp9ZPBiK1FNeAB1e5LqkmPhHELdHKcLiU2G1YzugQDR8b2kvrSN78gsfT",
  "key22": "ERrrJRpyTZVXLv1qC3KTYTTFrFSwX95vAm2T2HfPa55ANvSzdoVbLiY5LMtpdxWHJwwMJmS2S8ZRUXe9sA8midm",
  "key23": "hEHxttsgu91TTmNHitD2bJGiKURxM6WoRyajMfPQe8Drd3qqEF8CLn1j6gv3rbEtmRy89RrokPASggNoLUUxDK1",
  "key24": "2CUBY4D5jz2MG4H1MwYownB76AmF1JtjbNU22TDngDAnKZyPLyuAJJZT9bAQAJW7iGVrQ18xTZDhJWtwrzihahFq",
  "key25": "3CFXXYZADGM5n2uQX3zLYQ9UMTiZR7SmbchwRHQEjfe44gNVndQDvnfPpeodvFc3H3NihLY2tA7Kn9qZasod31XD",
  "key26": "3ubCrLWRSDNUEPvQfo8r361AHbZfWWGGSbqwsQnYgKMrPHwf6HuGa6rAH8ddUo5hRfbUChXzc66BP5m79dD5bXoF",
  "key27": "5TkAmFyJwtqDcYM4iEcdRRrcNFFi6FNsyGE4AwR3KzpVTVrn7sF8CjHvGrHpGGzC42jXWhJRkxnCWpzMUGJ6Wjge",
  "key28": "65yUSm2jGGP7wzRA7apbKHwtzgRmhSeWyC9zavRwJFvGtiHWATr2dgd9WYGzu7bKFytKrpyX9woFr2RocXqEJppq",
  "key29": "3nZ6uFHxniWcf7yKi6tXJHVUQmupNTCveamDJ6dd7VTPpAzLDivRVdL9jDYq9mb5e1vTvhBrYTahdu5C8nnPQPe",
  "key30": "382AWG9PCWm5n2ZebLoojjtQa1eA4ggKpB3GtKQySTtgnkaL4yanqKmRgL74BXC8YNvoyUn9E927v8oCCPSuHLn8",
  "key31": "634WFv2ADRn38C92YetKEV2FHpSaf3FHFq3Ad1mV38KBz4jrD4b9Y4p5zKHULezXMiZqJ28snoZX3FWRfAaAHFJK",
  "key32": "3p8CXpoCM4fyvctBp4ZWuopKk1HSuwvwrhWQKmPH3Kbzkwo4hfdRfFyM8jE8bfw65BEZMFa3Yxhp48J3AYysYLVu"
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
