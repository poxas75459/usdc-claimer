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
    "3NAbzwGM5ukY97nNLNjLBq3Mz2wJdDLcGoYdBoFBDqsvgs3d2c7SPcTXiLRzXbveWPXvYANPpSuPi3wZa4iAixGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ojqk1QXqn1DjjzmK15sxVZTS8Pmfm3UsHRPbssRTYqXktd2QFHzUhJcAszQQxBdaH7CXbQerrnCp2D1Na4y46sq",
  "key1": "56Bqyuh1AeHvuDH2BeH2gc1XtuCgRbJnbNKpAGdtbLP5vU2pw537mQ9ZEVC3Y5AsCwqeZ6ZboZPwumBvTaEd3bRp",
  "key2": "sVq4gN72oF4ydfYtBc9W56KMPEhc4RQkevXypYQMcdwithiub4p5hi1x4AkXLRb6qnWGNE2C7vwrkSp8NTPMXiB",
  "key3": "4oWuqDHraB1pB9ivYK3K3xcck8QgXYt5FysetaHwY74yj8fdi6q9HbZYZhJ6riyKQ8oDmVcJ7YANcaZoHz9KaWoD",
  "key4": "3EA6fbPNdYmbDaTeD4idnjrmxv9W3pkgXE65vyEGugXgV5xcSwWuQcbmqS6do77TmcmCoUL5PukavYDhwD5Qd8Hc",
  "key5": "3por81wm8aTXqfttmsmBKcijicUD9NLHuZw5eq8f23gXooobXEm9A7aXuVgm3PtSHNLGqsoMmypPMBAimxe75wcw",
  "key6": "JhuL6A4ogX9X8isonD5uH7UV4C1ipYtiSXQYPfmcoL9fow6K39GevvstA5K165qSdqkt6LKrzrdXkS7bYDTrFPW",
  "key7": "wUPANuUdU2ibRDiR51MRcYVB4mC25GVofRoZjYKdpu3j7YggDDgsfpvVLHj3yAwXpbg7gbkx9tyEMQSBjsTHZK1",
  "key8": "3sPoNaKEdrLxPCu5wva7UVkh8gGS4fFTtM3vTM5bEsFNLWa7VHq7v3JiYbqCFGX2MZSmZQaQArVZFBxGEzrEhHoo",
  "key9": "34qVdqr7CnzvA6hJtkPKhJLAWNFykA65ZKPukh3B5GjWh9DSu2uQ8pJgWhmTuaC42kWhUrQjWakhKUEehvG4mnhq",
  "key10": "3we4KDuSZ1WvS5tspLomeKTTTXH4AKpPFLJv8SaTvcAabQVXBY7B2vuna1hHqzFcFaGU27QaAAbHmr3zvYWCbKK6",
  "key11": "38vSZ4zJLdYWZohgAzLCu2P79drzYcrD4FrFvtw1ijqgSHDSWuKqU4T9YTs8gfJPetDeFwQuvwa5GcnViWB5hpeP",
  "key12": "5tHzDESaKSmUisHZYGR7SwFsmTRZD8MA5DD77oUxAWkeerEAcaw4zM8qMhfWr6nfEAiJ4VNCHxWKvMiHhuQitgrB",
  "key13": "38rzg546kyM9rxLZZ85MS6hBqyBtA5j2r7uf15qwmpe536CK14qEtZdjUVTbaFBs1PSf8rxUtYwm1h78PoTBvgvm",
  "key14": "4GMXnTvyvqZBAZiVhWW9QiJJjwsUz5usjfrsmfGDL3SuUH8Do7aMhvZTP8ZcGK8JoPMcPCVDcANqUYCY54qjFivR",
  "key15": "5XsTs4gecXZ1VAhXMMzzbGZ37Er3XRsArEP3BrTsXCpFr1q37DsogmASSU4vXSF5Knr9pw4kMLoqhy28PHkdHnwF",
  "key16": "2f5CVpxw3vkaD8NpLT9ayMYgs8pdxLgYt9XieqmLhifD7Ev3Dz3GrziPKzm6Cvi4ukS2323Xxq7D6dZzA55mqJZ4",
  "key17": "PoJy8fHbravyzbBd5mb5LYGqWQ5pnZn3ic17Bka66oic2x3gSiyASef5wmZkUeroxmMvFfTpe14k4hJwXScEGzK",
  "key18": "4QMCvghdSwLWFBXktfPxfEyfY6p7JUyhUaxkWrjMqZFmFeFRYSTwGDcq39pGiU7WGRpayvmchVmBEtkZxxcnb5Nb",
  "key19": "3QvB4Yva5AUSZH95gy6j72DFSjVEtNnjh2qviur3ht5M72VQb1JbdSVi219SKv7sf1xKKQ9zbqHQ3nHitJQbdBxT",
  "key20": "5WzF3HrB6QfTmfmTQnSxJYmk6HUG4ff8nRXfj8zDoR6Ue5hrSFpxF8iE6ER1bLXfQ8837jLXhweJprEK7d9zGo9H",
  "key21": "2JwJr3h59FJmivFMP3hExN9MXvrzqbV2i26BUunoPEdTW2GSbwDW2qtR9fytsLydRDtDsjqsNV5raxkrxMN985oB",
  "key22": "22di7eUskPJRT1kPoPR78FMwaW8Aqe8CUXHdqndD87japfrmHBSFi8wCduYX8354eccSA4DvgRxEW4xGndbHnJDg",
  "key23": "48KtBavbQYXyZQGt4dmRtgjNpEBXszW6stYtdUKuX2b79h19VZSatyLdjJbJjRuft8tvKWz8dyoy4q7QeEPnsTok",
  "key24": "4dcPcv8JzK7DLvx6h1xpZ1suoTQoaCgUGF2q8azi6TTkmNmPro9HiR6932RjuKt5kaa2M6UuGtBTMUE4gvWVbBQy",
  "key25": "3U8tzfz11DpfSc64nbRhhHyedCxLxPfGUw55YH9MHcwZh69sgG1SBC4czLUe98e3cB8RF2abMRmMKhhWTtDox7HY",
  "key26": "3rrZaFD32zoEuCg8BPvEHW8TnUthj3x5bSLKRhesGfiGSqGKNqRNcttH3rSAEAGJeA9CScFvBgv6KXrAHwhfpwf4",
  "key27": "56vF26z61Li9kZnQ3EdFshRwZnoXntWz5wrsQpXfvL5TQvUJgRMdRLCALz6PaFNAamSjYJhyHLGNT2ZqCns5qkeh",
  "key28": "4e2ECSWpA2XSoJCWbd4dRHWRL5g4WSumv14wtaayuQRRBhiiSvrcEsXf84umL79BrrUqLtDZXC8y8cBBdJtdQgRN",
  "key29": "3Pv4rHGvmDT7NyS9PeWgnLnKsm3JobUmuWTJXLA7endVW1BDKXr3pm8v3VU95bfkUnYN9tw2bGYHLEXSCJPwcoiW",
  "key30": "3pFtRSNpHF7XLAkknXz1jgRiFPdfN3UN3Pu33aA4dW3Pmi6muXpEApT4SdafjkMThbUh5WArgMpbpsfFZ1g1n7TP",
  "key31": "Dr9fvPFc3pwoL7pcLYmfzvHpu9YZ65ecadYX398WWj5TAoRpBuDZxzKt1d6J7wdzFEdbryJP73b9VwV3uiGRbcv",
  "key32": "3arehha8yRb7pzmmHgpLYaWCmCeJdmENrFxCPXdyEVmvBC5zXh9ERvHULNYiwruuce9VktvzjmxjPuN9feutKsGu",
  "key33": "2YDQUp2nyMmnXfi8uX9JZuTdG82UVxW3Ef3BTHzrBFMB3hNAg89u1UnKvX3vsY3rBkjEeyUgmG6L5QeCS3ftkxtB",
  "key34": "3MsWQpB4dwdnu2tRdrzvy2xzE1qrJXVbhPFy8RAZ39x532JJUt2UtnBSviPicpQEXNoSxHrLbZNRq3x2YHHw8mD9",
  "key35": "5cANNNZz6CycJXDyxNkJGjGAaNx75JW1YKopPJGNZMmMmKfoo8XGDEkhE4yaP5b6jCHdYgPLsj2Vbsu7oa9riogB",
  "key36": "4aw3LnR4yXSgbPVVQxKENk9R8ZNCnXBKy8764JKKQoBDEuV899cxpSus7NhqDq5DT5Bhvax7B3kVN7rrxmMkq9vk",
  "key37": "59jPxV3YHLtPK45aVypUDcGbvFCBsNuzghkGxm2Egbf6hKX83S433AmfJR4A7ipJ2DZzQYo1Ack4RC4UAAWj5DSs",
  "key38": "4CG5qsuemBzhfQZsmX1rDCVuti72X3fL3etKvxxhtCzyc6PMuU4YNbH91CnYFU33XJB2WvrmY5VDCaVhuAXXQ3j4",
  "key39": "2ZvV2YjBpfqddkrHBwzJ1TykuAYosHF9sD7ujJNkKJG2Y6YS7nV2YSLd8LUgyc3fVjDuPSLZZJLnhVbbWKu1mXv2",
  "key40": "jRfeifGqrAt5cbqYw3in8QQXGDDt6mcXoh1ER1L3UcViZKckLftAVC7uP3XRPnrbu6MuRR2RrMeGZtrc54d2XmD",
  "key41": "2dZaAGqo3ySsBb383t7BswWqiA7q27KSn3BtRKdSBKoNx9AWtdzgKb5wERe1P7Xdw7Aj7tS65wc3nTeLxqC87Vpc",
  "key42": "5GzJXBSdEzFFzC6SshdoiN38TGA5woXj9T6ize5XF4UeqfsnTjAFcdSTTPAhLtHEVhcBkGtU3TvdPf29CY18zmC5",
  "key43": "58j34PJAbyVQsHVMKTSrWRGg6wMng1BC6XZ6NNHMwvvLws1rXcGhFNw3cejDZgiEUDmfGjPc1YNXFtwNZvxw1MFG",
  "key44": "3SYrjynVUL1gNJRVYk2x4LPEoyAW6KCJsq2gvKJXDsQLSHZcQcEu2ZW6gVhrxuvYt67i5tczennezJpQZeZ2kHSd",
  "key45": "4kXmeFUL2UUftJX8K7YZyrbVr5cfm4PJQLFa7QTNfzoxoXzXJnWCwg1Fr2HRCn5GvejfFdUvNvPpAHG4unvcmi7J",
  "key46": "4MjbCnCPjqVTacTsvgaA7jLcG7f3eFzX9o8Fp5C2wQyL9GNBPPedkC6LwbjYjyPkpowo4dbqiZhoNPf15eAbQ7Vx",
  "key47": "sn7Jq3w6fyHttwgk6enAiX1UPwB6nKQuC4oDxzEx5B14FEp6jL9TX4gRwHFDPsnXTMzdzg7RZ5tCeNxqCqMJyt4",
  "key48": "VcAeAhJRtr9QjacjTFyxqFUL47Sa7NZujvdNcbZPxbiugD7DdNt7K3sfM3foSwG1tM8JLbEXf7jBD5AHr4Z7Hn1"
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
