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
    "A7z2fx6CJqQmceEqvoo91dNdcgDfZtdjALDmnYiYXLb4ccbtoK5nHqeVyKbJM1CXPFA4AcAZaBH2vVZgPjKeWX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BTkNd51Jc5L6aWZg196jqRrp3GDB1zVvq7vuuefB6sFykhbrYSjMnNXLrfbE9tWYbEM6qm4vGB9LQRJ3mWZuKiF",
  "key1": "3BFy4dZyub6JYE47qvTfJzzi49XDbPzUUGMRoL3VZfT4Xn631hf9VvPANqs5CXae5VxxYxf4Kk3UiVq5zWuLeJha",
  "key2": "WiqZY4UopzVmqd5kELCYGrgH63QDnq34X1mEg2P2M86ohy4sNh6QnquaWoGcyDK2h6ynq1oySRzUJXt89HsDHyu",
  "key3": "5e8XUsvDR1hX4KVodZqfx1KUftuBe5qU5bcxsrQGqqxhZYrPjfypsVAaVUm8k98aJ4RARtEjYwGhsWeS2gnoSuvg",
  "key4": "2D5WXEBdvkZ2xtXebRWYJC3H2QSWexp2MwFuHcjS7KSGembGsfSJ4B88RdKJ9YQfcd63T4yWFyZjF8Q1ZuUSwAiC",
  "key5": "2VWUCj89isGYpCcdS1ee9pQdCRqdeaCcJe6cWACpqVNXYFc2iNkS82hP7rUT429QCW22neSa7ZZ7Fw9mWiJ4siHC",
  "key6": "5HLzRSM6M6MF6yGAiEAwkoP6q77uw1Y8kTvRQQ6kWXmiJz6ji9W8YBzQVNwV1gcZJbvaCSM8Nqs2TwDanVczFtz6",
  "key7": "3ys3UpSb8tEqnRfvWCw3T9A9CDQDHgNHahM9qNaAKrw7mnTcCbe7b1AETT3zTk7aYNyT7qbZUKsD7D6b5ZVZUL2v",
  "key8": "2Dto785WBzJrvvaWESYL1jEGaiQTkmEtU1qgDyQsfd2HqTGmZcHpo97yz6HvXvxifAyTJCKj1ia6EbU1NUzbHEoJ",
  "key9": "4Vhh2stgRumPEyxMnChGFin69aprBLHvdGYoUbtFfDZsdzfUwXZUBKNvmVNnXbBXBRGyfMQPjPZNu69CfpZaTTN7",
  "key10": "3CR3VVU5hxEGcbo8j76uUkHgQezgHQe5KeTiHPHwSiRyp8LkJusLk2KM2hAf48rxSVRaf5Yj7zTZS5R4hP6LS3ff",
  "key11": "dyFyppdV81M4YeV7rcxMAY4XxbxmopfQrU5uFDtvQvsXXYBJJqpRvDTffSbbWTVX1bYUkgGN7gnhwBVjR5bXkR1",
  "key12": "4iYjJ3XzbvzodcCLfmbBj5D8tRfiMJypwBgdsjwJcP1YcarjSyan5mMBXg2MXqokKm5iSNwHLsR5SinyFv7x3AM4",
  "key13": "4rc6UnyshWxDMk86DULhM2csPJHzcw8SRzt6LBamMcH1Ss7tbWPaqRGKrvSyZ8zJo7rDbL5gBcbCtVSRHMVCvzLu",
  "key14": "Swh7XDWLAyMcJ8PAu3xKPcTAUeJ4Z7BtVx3xaie8vcPWPj5rmQBJkvuzBrUXjv6aQx3XZaKWWZoofKrUQeREHJZ",
  "key15": "4Jk4zZF5cMC8PUUmVeLsC5bTkBNssKDwfH79RKdmz3akyYzoNQCkqq3GTAUoW6gBo1PzDogoac129S68HEokEgvr",
  "key16": "4wtStHELaoxmeV3TVtrA4P91K9LfkrYaszAZ5dmNPsfycMnaFM9JjZeetet2pMZtYrBev4DggXQjiq6PTDS6Z7D4",
  "key17": "2cfXf44WfZgkNK1S9MVP5ESBBwj5kP3748r8vddsnpTEy1VCvmr7hheKXrrEcJnXQ6fkmhvK1n1gXLDCFoA48agy",
  "key18": "5YoZM7ApTTz7A1eyb7raRXagopd2tWnbDBKTVAfFXMPKpCL4YgWBUoL7AFpLTjtKTjeeKop4bjjL15woWnioefvy",
  "key19": "pguS5kznAPncUbNCKBeJPhxfwiKT32iTiNiKCVrjEmp6zJhfwabm2eBKQ3DqwTkHsXKVEmJA1SNXJ8D9PAyCtie",
  "key20": "4k6AzpvfuE2Bpo6PcyGLgLFcSZFy6ZxFikyTMp3ehjrkV48Hb4LDgS6eeok7mcA35WSAkfJmS75DBgeW4YU9atAq",
  "key21": "4q7fLMFgNZJm2YzPfmb16E396cta3EwULBFH5bM6znSyXt8G3dyrnGdsvrGNZToAYaDh8BUnH3VGAoCF12PYJwEG",
  "key22": "hMkF7QLdfoHY426rRWX5zHyRuqiLFh1HdTXkcAff1g2tw4eChgfhKCAPai1PMAH6RGyZM124pkvKYkydSJ9zHHV",
  "key23": "4S58RdxyCG5kzy14DqxSK34LnvKGKQokwDCANqX8yK74w41fGoGKmm913x8fTG7HkMf7WwTJhixR4WemNpRwqFZo",
  "key24": "2p5uMmhcgf8CxTb3BDiJfYV5BKfjkWbf983RkXFjr6hrY5VYxDCn7Kc6HGP7uT9fCrBjg7dncbVGHZJwZQAsL1UZ",
  "key25": "4Gm4qJk7tVG3pEAWQt32w2WTEzHFVbdqQtrqKdoBqYb3fgvewv9jLCE4Bs7Sj5Viz6BvYJ1qkErnDUNwvWjwksVg",
  "key26": "63UDZkyPHhfGiTGq4CwM8YgM4qr6wBr5671az6Xu1ujmNyHV8dWLSV5ZgWAWi5Jsq83QPd4UmQ3Su8u7kRrxyx3e",
  "key27": "4nNcjSNhUhVUnbuqDduB971QBoABvd22tLpjsix39ZzaZ41kmNNxbm9BVodmrWUeWgP4QvNjP1utiTkpuG3VD4F2",
  "key28": "56Gn3nwgTzjQZfTfytju81gXwaUQsJzbYLqtDQoT9huqwv52CPXiooJgvDHne2DfSkx6mdtaneYAvjqjHuczjd7G",
  "key29": "4fkysFHy9CFZay8zNESUEZHJo4QhKDN3Nio3uV9ozHCpJg4NRuiBDWELp9zQeZLccYtGPF3D26oV7JNKHFeBoA7W",
  "key30": "2pcsewyfk6uFfLyvNmwhFJFLpatsf8j2gctZoMKBuh4GHLgaJ6BsszDgF1KrxsNCoMkuRVR65GAqyq1f8KVUwNe5",
  "key31": "3LZi7D5ebGWXpkA2jAeosZDkXZoH27jasZUAdzeb4mpaHa19MGuji2ykE3wAAu2fdGhHr7NAADBjS1KviEerdfZt",
  "key32": "2UpzLsAxefvxahQLJCpPdJTwWp9BDQHFsbSMQWkmLPrnXJqKFBDdnDfVD8HwvR3M5E71xndP7gsdqDQtyLjszsqV",
  "key33": "2eXrzSat3Jgtmf7L5bVGq7ZmSiijqZCS7Qeq6KfHkCVtqzQgHf7QJ6JLEZpmGCVVDbXyPfsGtfnRWBxLVY1mLC4w",
  "key34": "3kyCRWngJU2fZ7Kt7rE1No2tTXuWTPfBpzcfmD8gq9gszTQLF3XfQapKdooZsEb9uukf6J8VhFgCrSpk6viHm8Tk",
  "key35": "3EhMWdAVerddYDmW9eeK2rJTC3PRXFkc6ggdGQFAywCMEXbUD5Gqfv83ACnXAg9GgM1mJ5wGmv3vbeecdyZzCNYW",
  "key36": "5zGSpfbHgqvYrV2Y2QBiqNXhpdrx2UwCRBJduiejmE8UrThY6BviZL4uiBUirGjS2y7SJRRn3pXV3LwTNg8an4qg",
  "key37": "42Hf2ZNfVpRyc8jJ7hYaUTYPGnFDPk77k6xChmY9McgrChfyvCb2YHn6rECAxYnNTdRvPYmqvrSsiUL5gU4UHcP6",
  "key38": "iMQNpeRBoTUBgNovpYKkZLixvXjLioWPtiuD5RhKkx9FgySjHRL7BWfAfjekiGLpAKpiCJXPf658sebEoH99i9V",
  "key39": "CSxyn6AKEdJnrvghcV1z6WYyza86aziTiRPDRB9ut3GAZhMqJCcJW5yBe6B1Kx9AEk3UqXcJGgdhj2D5QTpDQst",
  "key40": "62DiAXX2bPU4dVR7QxDjvqJozDDDRrpgP7ZgbavWCtCGTbUzdHd3XaHw88KmkjFDF8w4qWUYfa6kbaGSnhvKYAq3",
  "key41": "5UWe6wP8jEqP7XGMLsgJBsMWNCfNhjmwnofrzg5GykTQ9KeC6eX6nk1V9SrhaT8CuhRtQ7TzKcQ7hyWrtc5ddb8J",
  "key42": "38FqDK2TibKnmJHfZ9Q2JsEqeKJrUdRwKRbQnJepxSoqKRUCFo5joGzUC5mhKPwiNtSjFD9J2LNQyrnUcLrEiyfx",
  "key43": "4dUygMH6GFhJjrsgiP6jZQrrme1bwCtbvqDwRPHiEark4JEuLiuJ9zjT43WyceApqgdadBZEaipjt42N8nUxpRta",
  "key44": "2hkXbKo26nh7ziQNcFaxKqD2uBCnUKUx5TJVoGcXpJLH96Ui7mKJ2kDc9CaiHDf7fyjrsrqFGWZ5LkXvtgCfGTCa",
  "key45": "5cAuT2W3Fog7F6GHdntE55LyvGDyD12YTxQ6buzC1QgpHYQGye91srUrym17nzPXSqHcTibWtruQtuwC4JyGTTmf",
  "key46": "3PBZgm7NP85JH9QykiaWf7h7qSfg43VnQiR5pjmfxMKTxineaoMG5D7N1Jym4Tz2pDAAQ1DRqkg7qYGf1paYiVr4"
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
