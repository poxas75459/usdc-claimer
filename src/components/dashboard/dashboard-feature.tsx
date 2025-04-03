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
    "5DbVBanRtdSjTvb7XoAM79uWDSs8STYtua21RxhQTXUmp3QC2CTYW5i1PF2sqc4tvZ2LjufaBPgxeZVaJeRMqVxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFmyNp3Jx3zttFM6PycW131QyWSimJ4RYXF23SEDoD22yq3xL6Hm97anVnjgEBj4QhFyBLGfcDq2Pk7qHZb1Xgq",
  "key1": "2vYEnB7jTdhNzxmYaNqkpgpWNP153ipmcNhsDaohZ6EMyoxWXMTK9VkYNXd9Evq9CiVopC89XmjjDUdA2FKbe6ab",
  "key2": "581VDAruxjArGDWMaM7KkvtEe5D4HLPVzGMxNjuuPYrihSrxmhXFkuFtzuTUe2nm4xFtismQVnAqVjAoC6Lety5X",
  "key3": "38VggC9JCfHoJMYz5xUwrGAQk6iEiymciAi6K2VhyKajiE2mSJkMExfB3M6g8noFWonKerdazAMXz59HabZGbTDx",
  "key4": "2DKAQkWzGEshAoiwqsL9m5knJvEvgY6BQjptS2smvqWG5jN1xo4G18xpuLsjC42WRXHk9yAGbcBEmVtn5asahaTw",
  "key5": "5J6vR3qF1xL2hzEoNetQSCpT6nXXGJSkvtQs558cC4H1uvQgocskhp8pXnjiX4r5unFV3h9GoLndqW2nQV9jgpJg",
  "key6": "4mLCCkXKn7J2zGCTUgZy9GcFpi85nKyk34sUCAjK42zZhanqTcg2buTTuPh4SnQmVChp869Y7V3H54ZpBvp5mx7J",
  "key7": "N5sNTjjcTaQBvFumVZbP8f1Ze13adU8WuCY1g9dpzkfcA9mNAbufKNEYDn3JAx8EvkyRKSL2W1zwE1GN643JuEt",
  "key8": "48DvA1L1BUDJno4NuXb2LthxtdvKVSEBppbNvBt5AV7rAg4NTjxwyyvAvxmcvCpvefQqQmGsmnGmtrpawBLT8GpR",
  "key9": "5NyivDfiT25K7vKmC83TqXgqF25UdWxLrJGg9A1VkiThLx7Yu8PopokN4SABoBz7xdeE6jJFt5EfFTiAM49sbjmN",
  "key10": "5bcxrJmgEXqJvrX7eks5iFeF21JgXwzaixZKYd1nQnLrQQNwsmxs9npiHZfHL3cbC2s6KcQ2Mhm7iLM2iUsEpxHu",
  "key11": "2HNoFz5qq8GfcVyKNtMM88qS1h7PRRqcAGNRKXq1h5EZfe8HktCubw5hwhsABBKAUzR6TYr7yzDP3eAvvvTLP7yh",
  "key12": "5U8gKTJbXzZMnpjaU14mQvqRk4VbocD2VMfWNPgfFoNfMzM9EsNw1mNwaAf7TPH1yZjieFkc3ESVARANnVURfEmS",
  "key13": "28oXPudJsoi1fWvN59tVMKw6z1o8eAB6wUvf9HWq5yeWch9pp5e5vm5ZeRwacShPdFgf8EnHKVvjafgqQCpxq6Dq",
  "key14": "5scrqyujPec2xE3cTVhXjBSw3YvyxBsNy395Cgn5EmmxeNFtnwansVXGGcYBYm4d1wShXT6DHVnV19xMzSjFp3pw",
  "key15": "4BtqTT8TaEjnrDsSUoSXR16XH3stC7UPnSuB59Tq4qpJEZpg9BRw5LoWWsT2DfbU8QBg4vaaSTBum4WHnHf7TMid",
  "key16": "m2BMYD95Snox42XiwSLC5rDkYxJnQLsc8RR7bgnsYr5zu96EFCcm3wZauYXnESoaEyUbjXFVe3TjaEnotSGVFoR",
  "key17": "3SJ4tFNSGCSpq2k91n1KHg7DvZKoTXFvFG8fgzEhLcDX789Hn5txrnzLtF8qJdeVMt8bk2APaZQG6c92uzUvirdL",
  "key18": "4dM6Pu6HNcjN1Bh47WqzRK18wd5etwYyJS5WU24biQgwbZsAVqfmM9rvhhgzR5DDcChsoSoYnA4SLnLzVRrxyA6V",
  "key19": "4aCtbJkQU2vJSBkUP4xtpzr6tUhHr5PhzXgzM9k523xFThpaCgHTWQj5bzuvoxDgyQMV6EL1pvBGZR5VYpwj2qjR",
  "key20": "57KzyTf8mvfytV87PQTDanUi87e1ALEoMqcj9Doy1GRAgRXGC5Us1yKsvhMVAeJRDaWMFzwSDZMnZuBkd8umA6mi",
  "key21": "Wdk7N7dQTkeLFmxDsxCviDRmvKCG8VUkaxazb783iZueb8bnTBnNvFBPQi5RES5KvN9XxeFe1mA3XRyCtpQybf6",
  "key22": "3ShQco8ASBfh4PQyrD9Nh2eCEHU79YjjsKwaRdJnSbzZJVCq18dFjN4e99ZGSmmcwHqisP9VB2o4oVYszLXAvurN",
  "key23": "eZvgqDyA9FbhB4p6KdsZuxcgsf1wemWm6NEcgmsbHtTdU15LNFRX5dm8NgL5cELYbujQv1uAd7a9KnpmCevrprL",
  "key24": "54wFTMoPkKc72V4ncynkZkokpg67S75cRqTiZcTyLv1Vv1PzSZ9azwVp8ZYt8ahewMu97hMWpZisx148aFQJMZij",
  "key25": "2NXRS4Ms6GYoRx4igqZ2oMdW8LJjG931T4AncUfqsbKT6fdt7Jqt1dzCmBM9Hd72X4vhrhNRi2BuK5sUDtmeSKfd",
  "key26": "37mQFdi71MifWqfpFK7zzjMzCUnVhVUzyTpCsS6rr2chrZx1KYp7Nny5LogAjMcBsFK4Jkt396EnKVoZBRWKnuLq",
  "key27": "5cTLqnxzGtu5LuX9jh9wX8gf4KEdnitDUtssUSJrVpcjjN3ZUhHiDBLVdzBde4JYuHUisiJSJgWzKSvY9MGokeUP",
  "key28": "3rfLpLkYvHCqzpgtJ5GrAwRsntYqAYHedJzg2gUg7EzkJ3PZRwoUgZFfm8j3DmgaTPoPcU4i4LgDdkegFizKdGch",
  "key29": "4jKz1xMjrrfy7pmQrCy6dTqnCkbxyp8hEC7z2iN65xUJoMukcauVzcqDxdFcb2V6gpMzuHPF4htMVjum6C2DcxXS",
  "key30": "2V3CrgUcKanQNxcaJ481fDy7uJcgLQSjSxiqFJf1gvsmbaH25Dk8WmRZPPA9K7cViBfp7QKZDffKGLJgFw1bXYr8",
  "key31": "3AskVEA1iEvzgHhtJDr5FGqSbBGVa2aTHVMCHaWuG4ZsV8nJmJ8rQXjTK4uYwgEJhvJNnd1byf3SiGkp4e4Kzp6s",
  "key32": "2ae3FHrvG9DQhXhW9YwQ64YfdLnzzhRDtHBYquwCeBS1DJ8XNWrB1SwGfwFqdQjR4jJidpcMTiy1nPJ4omJsw7rz",
  "key33": "nTn7WsM3FQwpdJt8nvZwcMFB6T1DqNP75Neo4NidEMpg9rZ9BZ9voNaiAHWPGBBMKxGYd59PqZuSuHLDeoMP7Js",
  "key34": "4MpLnrqLh9ULkNpMCPLRvQY43wcevu9ZaibnziBNMnWtFi6cwUtWozxn4RRFTviaaVZEMVbvEpTeMJ4LZEaSrjq3",
  "key35": "4rEczh8Uj856zRQREvdLAJabmkjMsHGD6e4peLeVwgNmR2fX2Na24LEzUaQWfEEfU779fx7qfYNUWo1QV9eQTZS6",
  "key36": "3Vf4KmRBDqt3BUh3dsPFtpYdHFhFLF8McUbuj5o2tFPoXDiZMBecrfKCorCWhk8mHjHyHyd3mpHXMRCYPhQzAMxJ",
  "key37": "4DezRmEc49NA3G7nvLb7iroHEgNQQ77Q3gpye5oCvYeLeYvz3qDpUjMXcSJ4VDXpBXxELzX2hAVq4yYKPhWE6sXU"
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
