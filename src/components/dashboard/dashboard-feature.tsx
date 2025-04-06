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
    "2PH1bLT6rYEQ3Zqao9SkHvF7GhosQb851yrXHcfk3D6UjipEBCDS9Wm5dWfxkwRkkUgr5zrrbWyfKArVowRkWgsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TBfznTp5vjNdAWBrYwLPRDTG3KTkXtzVfJS5PkdJvH7T84FjF7P5NMfpzw8rzmNs4Ej6pPeEaUpm6tN79htPqWC",
  "key1": "3q7JiPF5BjPbrppWSo9eHTZtNmi4q5G1te76wqwQbDdzb1riVpWmaKsLGKTRdne1CYr9ffSBVjJpUqnwbHmwfFFr",
  "key2": "4FsXH9D3RnsgEUisbw4dWrgTcHZRGyhoQE1u8UsX52zF7eFXXgGhq9vTMGjsjtkjJxh5RSnhAJd2fvPxAjtBtEa3",
  "key3": "5J4noQPQ9yE1URRsh1BKKaNSPUm816rsXRBsXyd24TMTFfzeraqLiwPbW3Tk4newJGxX2GhUe2nNStkeJx24mjDS",
  "key4": "2VkzQiqdCbkJ9Usn8iCyPquhc1CL8ppBjCfKracpT7yjZGh3xVLaVQzNkykHrssKS8VQACwvdpemtbFLfTb5z2o7",
  "key5": "3qbBPVheDiLx3BYeUBHg2UhRiu9jzT88tZyytYC53RCD9gQ8En84aavToX9xnVxbEEZorXKfxQmK8kaVP7jBk3jN",
  "key6": "3LCsSzWkubeqMR1HCiq1Xatn5UDm94rfxL7XauYBxCogN5WJv4JwVW2xjRJ3hHqhmjp3ir769d6m3SH8uifcePU1",
  "key7": "3k7wQiuKymrkSUNBG3nUXiGu2nAyBSvDNJetWy4SwZrResRSe7uH8E9Bv84kATtavAtnNd8fde7vgw4CZ1Viq2U8",
  "key8": "2bqpjx3othTnQ8CMS2D34RnR9VMKr4HvoAsXAw7jYdFZRf6ij3S4GZVjzfRZ36bZTvMHY2agmpjttPEuaSnuNJac",
  "key9": "3QF7pmLmnaW1w3aqinYSxQzSWtbc5sP7YpqoALCxt9KVTxcoWQznuT8N8dx7xiRxeubP1hFFzFSfwCTT8KKqnbzV",
  "key10": "34HwCx9Po9wedYt41cvxGkWL6iSrh7NJUZ3gK9FXNu6wZQmdsbRawi7791VboLpzsKRE8qG4KFUXyMfgKG15fSwN",
  "key11": "5UcM7L8G4UNWphfCvWEdwtBgjHX1kAM2enDKjt245eiCH5uTvXngKjwhzcwgxvbJ9vRfhW6nMLj9hF8sW4cf8p3F",
  "key12": "3WM9EP3vD7GY6tt3uphj3fqLmDqibXVDqUynEps2YhRb3Kf3a6rTEFKG5QHdTQo2vrmrwRtCiV1jxYwuKctMnQgz",
  "key13": "3BFDbottrKxTgmfvqdyaG3pjMYwHf2814rc2r3ZCyvaXR2F7XaE4iWkXDuyXA6We38kkTyfyofrU6ACqywuH6nGZ",
  "key14": "9nuACARrd729K81ar16fDWk3kteQVUAd9A2neq5qqZJdcEk6mtuCLziFUra1uWakN6X5mVboRNkwtJhx62BjuU2",
  "key15": "4bBsFbzfGN3D96HHW2RGJvhM7hbhRqq6uJ67UyQBEpX3CCEdyJ7aPcmW9ApnuSEQe1mMQpC7D1XPGpg9K2699QSF",
  "key16": "36UhmC5BwPDozRCup7bUmXea5CpdfpxmxnR9TKFyGXgZZL4NXmaSvWGW8WfXi3XrN4mEugKPYShfjxvPek1r4wRG",
  "key17": "5inamzxruHGxZ8vzaTPkWCb9Rp4B8tR4XVZKMSKmQNPpdgn8WMKcXme2Tfu2qGcSTQvCEaDkfrgTHM7hD4xozFz3",
  "key18": "2TBrGdpKgRiWvpsgFzPiZqSUsDmBSyyBLDy67rotfStFKR78dZFP1kvBFYCqXwJnWtURo6U6wSVyAsiR7G1xXZAF",
  "key19": "4n2oBNsUTb3Q5EFAbC3VjpCtpMWSJnfXymVV7PY8N7Fh3PqWNdbvnHAVn17MdwnoLkiLE5jwcj4QbmhrdH3YNywf",
  "key20": "2NPcjDKYtDDZKPrDxfejRkdDhBgNQei3UAFuXnHd45bPTesZMXe68h1ZqSsmPJnV24AzWc17pVHHYNrksCpjgogs",
  "key21": "KfrVqETx52HHQ1oXfv8pfQqXJPTED6AGqsfqkAVsKDH7FMNXfGKUtpbFUZZBiaTGpD8psDiWGaj2Gre2JAjn62e",
  "key22": "3qCvY81RSb5FiYo68djD6YRe7hbCwuUG3MkbDXTn8mrKX8CJrW9oECJFaqKfapuTL87SX2ZFqJAmoGTNrUMMj4je",
  "key23": "xvHGpwxVun9HHuSiFi34xknHvwCMpTguw9psAJVYFamULEThMENpaQLAvXn8SVW6c7xn9WJN2DzyawSB5Mqz4tc",
  "key24": "3wftc6NagypEwYYMoWefZ9fsiqqPdX7aJ8fB8xd2mN1rE4L6vZs3GqAFKmQ7UPQJGRv9169AK1jGvF4B1oHJQ1aA",
  "key25": "2w2Murfjuf6opfpR5GP9ig1NwDfprCVzcHk33rwBrXVCAfLv5zXarBLcJGNQsWgq8FJjAUuWXhFLgsPxEUiRe3GD",
  "key26": "3NP9dnog2e3uwv8r7Z82eg2ZMuaiw8rByySEeMu13dYmokDJ4HXiGgGC77YLtJ7BESDqwDBfrEVU5QazwZqq49wT",
  "key27": "5PE57gqT9CQKcm64FF2Hyy4Xgsy6kR9ebPQwV2Bu3dNK887CXCdx2EcPGmbtgsFn3n2zbxDoz3VBhHgp6H66TpcN",
  "key28": "cNBWZdLRV1Mcowi3kv7BZAxn5oFLaY1pDjNRmAbCemSAgYhdVKv6A4VrY8GyuaCWqpcchZrpT9Wjne5tKLrMgbe",
  "key29": "5is5U5VYxsi4Y7dpAYgJxSpAVfiP3YnMGLo85XXGgkbbNpNmkGZo6Y9TFKtsgdp1BjAUdgQRfARtg9SVqQZiiLM8",
  "key30": "62v2WYmkPPDteyPSZQFoRf3WwioQw1TSnE6386wg3UqHWr84irtF5Y8CMUjhAGHkM6kgCpR5ThXt5WwBsgTErXpC",
  "key31": "47pc3CzCHGzHvz22gMmC2EcRRjM22DwEFKu52ftEK7vWxGRZsNrcufbmZoyJvhuu6SbMvXYzJZUDz8FDAB5q7215",
  "key32": "3LTdDMZTCdWFkEEqXLstWyVqGEK54yMpG4RHVGeGgwfqZkvNw9yK2QbkBUt3TZvmN34nNCzoNVnw5ywGG6CwGgjC",
  "key33": "4HbBrwSnk9Qeow4ncM4WqvvFnuuzQMo6AiYSeAuhX9d6jTvKWHQr4dYFRXbPiLSAGXtHAg6CqDNBKfpstQRUJyNU",
  "key34": "54ZMoqqzQBaBdQdjuqEmxAV5RraWbwmK8sZVTQr7mH1ddDgg57uizkNjrjUpH7AsBTSSy7A7J3RvmoRS7nhwtETB",
  "key35": "2neoyejPKp7pv1tmtxmy4X17yK9T1TZdeJ94zTrQVxiUJNaLm9Nmfy6Uchvfem7yXTvygguLFHTudsVytypYTSVr",
  "key36": "iBHWQj7TGFyFNpwbqM4wHWdGffH7BtexsGvzZTiXrd1abfamWgHX9ACJJ3ZCdE4pzRd3okWtnESJNXWZYBWqu2Y"
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
