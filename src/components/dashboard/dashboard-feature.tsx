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
    "42Bkj5Noc4fpxKB8e5tduJWkNYZdYEeeovFFTdQffqfSufmpQmYwHoBBNdBiTHmLFJYMyjZnbP5NcWKujH6sUncQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNyaX9wG6hfHisC6SWBc4dnRZF5Hrto6MVdHkXmG4cAB2vNmTtvCoZhWdPhz4CFdJEGzUVA7q1i3YpzCnFC7vRK",
  "key1": "W2S4R9TieLcsRiUBwj9ZWQ7aUB9UQXhhxH2MKN9cFbrFXkmb4aezhLNyqPbq4JFPCkrd6MYKw4pJvXBS22a54Sz",
  "key2": "3mRZZmmD6zPdu8M1PnXn7i1iwtZH6VrquY8yRf6zEsEdzKpubyFfaTwHJzZx87v1FNgXjNr6yQZzmcYDkcS3q9bW",
  "key3": "P5b9b2SGeDyUJoa39tSJHw6nxtRUhP2Mh3jTBQNrT6YuAJPdsdVGfbSBdDzZma7QLP5aKqKbkTvVhzgbzPfWvc7",
  "key4": "5hSU8AbT9DkLzJckkHbVXUegaUeUjnieS72Ti5mVotSoSQ31bWpr4pdGtfazqnygpd9aGYXpaGcs96BDg595Efzf",
  "key5": "3ngcNYSvFtGut2FXq2V3y5bJJ8AzFUYHo9quY68d2Tc67csrgyk6czKriqhLVVUQcmwSLG6LnnhPyrRMNW5gxwh9",
  "key6": "517R3cKASxBzdGBiW3nL1JCrVE2P6stcsXgU2T9UbKXRWtPJJ4NdoBCVitgbTd4686vQKhbjrWtVKAQnqfYrVLa3",
  "key7": "5YeCYbj8HSUE6nZGWjytS2FGehS864W8tMu4Mz1do83WTDQWkP5i5aGbUmntkuw8mcXnc9ECYYNF4aZSQ9G4Bj7s",
  "key8": "43vyhtaj6pp5Twt9NkVoHMenJtEPi4rWZfEWjt87urrtd1ooF3spcUgynP7ZVeN7zPaK5Y2aWQKRGdz7hXvpfTuc",
  "key9": "397Fj69cMPS8dQ3aTTReLT1qUnWmxoaqhgQnGNR9JKSpnwX9a4BgxGmmC91WvEjsb1dpKmjhJy7ECXHWnEFBTD2F",
  "key10": "4BabZmeBfMpr5JyPpFm3S4mP2DdACreTNfWeeUxr1B1522Ga3tsxmYS1CEVsQZ1w8kfkgq6XvvTMPdXiDVZWWUi7",
  "key11": "5cdMsy8Xb4VZ6CrnBKrA2nKbCFdGdPjjQKMLZBhsgM1GCbsgraVqy9QCxFzWnEMG5nSmvUq3qNTZ5jCpKCGiWxN",
  "key12": "5X8PGv8caeg28EAzDAGQamLtJdYJATkYPZgyg9HpFS8UqNK28Kp5q7CZmpmdxhj3iPNxUfoiFVHyWAjga4VrEnNb",
  "key13": "4pq9rWpqZnsCZsxjpuimdzesNBcjtXUAkjVXjhCyvZrb2TNNUE92ykvW8CKw4AbfThZX9984xmtPAg46gw5aMT81",
  "key14": "u7mePDB5h39V78WoHPVsKvbVZGaRK7ZkBrK36qaHviWKuJk7ZfRLWwxZ1AgyrK3zG2QBKyve2KqscPSWMukas5x",
  "key15": "5t8nbNB6Mur7SKzQS2dZbBtqP3fMA89ZbbVTbZqmGmoZcyWtJhXAtW9kjThmGyJUunFpEVwScc76h7jHg6qEoYYW",
  "key16": "5Ep3zuyHbwe5uTiPNmNx2ZnryRuP6j9hFfovdgesj26RX4JWEurmipnNoFVPsezjzmEBDAeHsta6MVjHbKRSD2d4",
  "key17": "358B1cda88YZQMCPsAa1EvWw5MSLbVHLd8sDbLAXpzvRcnLnL2mrfnH4my5wFfVkJbWkYnQd5dFj9jyVkkuqzqjn",
  "key18": "5bSrTSbuBGkBGo3aB25jwaDfgkskmUKnx7CcKVYDUvxM6dPRZNWRoUBCyVn4Jnh5XjmafyyJ7sWJVT7QYHLmj25p",
  "key19": "5qjzuWQ23JqPwCJVYs3HJVYLK6yLSyPpPBmBiJggNwjVMwqvubMp9Q6K7ze4Ht9fa3uFdPBw7o8fHD6gif9RTJam",
  "key20": "KguXb6F8581KiGuRz785jpSisc8kQUkUb4kVbz1PGj711Ag77XjREXVGhfCQbfCgHNfVY2k9osi72aQKHxjaLTC",
  "key21": "ZryjTdaDCbd5wVpwAHTvgh2spBRY1JgGo19UcySHRvXhE5ynyDiiCq15iPAtD4KTkkDXJzFfMKBxAHeAZS92DNq",
  "key22": "5xB8hZVEeoob6SXj93FncvPhURMCqKoGBKTPwmqofwPAJUXhgzdmjZDeUSKNztLsgojTBgzb6R4kQinEauyY4fUh",
  "key23": "5P5Fdu3S2b1k4seaJ1N6bwpL2ivBBrAnE5zDC6kA9udvN36rYXP5UZZp3XhQWHGCZiwnPcPjzKdvnEm2z1gSQEGr",
  "key24": "3QkGNxVWo1KdJNS1wa1wUECka7QNFSgX7gZdcgSBLxCCyys6gDj26LuCjhX71Anc4XrtT2xXdyF6dDZerUXr6zVE",
  "key25": "489q7174CMMQM7Avfu7uhNtf5pgT3gAdQvzVXmnZswDGirKtejjBkhPn5HNknmkDMiXN77pFiH4RNABMSm1EDeCX",
  "key26": "44wgwnFwnaVCsW6AdBA4KMshww1a5PikX9eGFMjFiiv8DTun3muM2hW7nfvSvfomPoDysxz5pvKzMQW31ZVmTf9T",
  "key27": "3RAxRg1TvrPiFAsUTwWf7NrUsFuwKQNfcWkL2vsmPKevgtbdnLCUgSc13AFh46kSzY4riJZzmVLEPz5WJ1BFhYEd",
  "key28": "63jH19pANF4hfT15QB2P5HTdHf2d16WbMTkKr5E8AwYMQdYTxqYZEd32W8DEEVSXHRbaszEzij43SvpVdjRszR28",
  "key29": "64xXPCwkEzXZuqGjY671sJykERdn7uHEFPmbmnoJnjPir5XjrNoyWoWPdkSJEpgKkGc967Hme3Swk9hnEzj3qUsr",
  "key30": "4oG5kR61YTgUVSPmPAzHFDvGHWjNrAEy6u7sfNYoDqQb6UzFzNDcvxtfDeki6wPAXbSLZR1xWNowMPfC51wnnynf",
  "key31": "4KufWm5suqmGwLArLoXDWdH1y97JAhTFhkfgz13LEXK3QqhsqrPExUM9SraWXFfZyUnMUrk1oKpTKMy5NCTu47mQ",
  "key32": "AbS1XWB6YKeGQQ2mKvQAWm7dwyNxGNk1c4np1eXCfvrVBBc6NNCcp6XMVBdmx1qadSFo5wLbUxpKqqgzQy3U4C8",
  "key33": "3zHeVSSuGAazM1WKxbNpecDKVaoGkAAGp3qNcvMV9cBf3yykMEatyeAQ4D91eZjBJCDM4j8Qeyjinerf7cJaRuUe",
  "key34": "65VDz63ZYotm1xSxNbqBDNpmetiVKFhVHHBRkE9yWLgtcUxWzxQUVJUDcpv2bQ68Dz9xkyfcnFuAVht8f7Sy22qW",
  "key35": "3EVn9cA3onjM6B28u5rKBeqmjqZz5jPVY6YZF9ydWFMjgBT1TZDsg5HrTq89xBHxP1ZMD2ifxDmFvLgd1rdGiyXw",
  "key36": "x4HTuzhwkMthY8nitMNiwgSjj7ojhDRGJiC7EcrVnMGeEGnd3wu67QsEQnNM9Mv9mvfEArdockz5PJddNfF9ekw",
  "key37": "Bw6jn99xNDcW2ybtWaJnfwL2UicBeXXhGvMhEiyFzqg77dafZYCahsEfpSDjKAtzVcqePkuTYimZGq1T8QFUfZX",
  "key38": "4LHbV6ChAMJkGgn4UksdKpx3cJDFbRTUTXZgGXSHD26wE7Y2DKvKiaH5tPqZN9dypJ1Wsq1EV12257sHcGiU3Cdv",
  "key39": "4e1p28TDSAZVJz2VAbGiL6vYSpZqkXD58AWUJTG9fah7284yAcFeT58Wm1QNz4QN3JCyV9tfZvVCDabzi18p5TeR",
  "key40": "46Eu72e9yfnkxcU1x3W44Gr7LYD3wEd72WmKUHeE47LGcWwrPSri4GEUKH4qKUYKLTj6yDsShJarKaiDG1TtuNCX",
  "key41": "b1UkrkhAdyWWSPa1sz5DjVh9gSjtxjvZpHNd4rLmCy8F1oWDKMDGvGnt8viSzJXattUbnGKZen45CsZ9dm7U9To",
  "key42": "3eK1PZzkwz7rWK8DtVThVQxhbNXuNmH34q6Jjt9TjzG4zVrNbXMiCAzXoTkF7FbuCYM7fPg6h8SCS8GN9tN7ZBdG"
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
