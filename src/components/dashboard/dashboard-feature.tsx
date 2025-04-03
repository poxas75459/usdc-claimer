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
    "3mZpywfDrs5dvW6QR7yJvEcoztiBpFNLW8Qrb99FhHRUku5xRrMcyNmuuZyKi24AV7hdMmX3rD3zkTH58K6zCnS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3DCLyM1vGrCsQ3MH1nJF28iyJ993nHfzMWi3oJAEFN5c3yUaWCYDPPVcRW9yqMCDhYtJwiNfAVtAzUuiKpyUsf",
  "key1": "1deA6E9Z5cWBNjFH2Xg24LPnS2gDRhuzAUg2aFRsQKEthZ8YKNoGwNzESUdq4c4kzssKH11gqg3H4qqUcxjCshD",
  "key2": "2RuBWCTNJKwwCqUE5qvbr3X7Mu3LuWPBrFDpijqxNcWqXkuRNb84H3N7CryJx53eptfbY9tgZHTjCxPWnbzJbTEg",
  "key3": "5UxBhpTj1pzKcDZSdBCm1JysXKivLJGeDzYM87UbcHxEf8k1QsXjH3Xpbu8XG44nGGmktbq1ST5DEk3kBo45PJDV",
  "key4": "31KHuTusbxGXtwYvemvGQ7m4ay2DMqEnXZN5c6WbcnSi7ehGBx3Pm9Ed8XnHpja5aq3tbqvMDsVRq3gwMcoHtmT5",
  "key5": "42DNPQEpEBtuQtD18a5zM3VyprFwT5KyyWqfsBK4RRqpEn14Fc8tzd4vHCrwqU3N4tPmmhmx2r2N3SCqRa5qZAxQ",
  "key6": "3o6PMbMMK5CJMveXaheh2RKszUa84qebx1k97MFMQeKyqbQSKrZmq5Sdz87v6mjtPajqXBcYtHgKsnfZupCyDk23",
  "key7": "29Sw15Ta6VByokHRHhVY51Fy7JEjyqzCAgMwjViC7nihptUNC9tJdCemoxwTgxRnvd6wbV2CYmuK7W71BGj2EMS6",
  "key8": "53KeoSKN5LZmXLWg8niGrG2DZCWdsMXJZrNJfJZb2AAdqUEhWjJNj37cgByd1BY3uQ3CtGH3k8RarHZ6emXx11BN",
  "key9": "3HpfxkL4bxdbXucwDt5HfpyVDDN9szn2b1agYPPERwTrHTsytcdFyxrt4TEdxgvGFkk9xyKGEwjfLUwR1gazvK71",
  "key10": "2r49SVS8poeNqp6ZFkxWiaD6nXoriekdf3ChtFUy7xkDJ33mpiTSqvJ9syxJnudPWjdDXbFEtQc7PNnpqf2DFg4y",
  "key11": "3uoovboCWGnQSAvfn9Pcr32hu9ss8WeBsoQG6sTbDzCfXXVtWMFsXYzAzA1JfdSTk86LEEU7UQGpNPBSEdv8yBsX",
  "key12": "2rXqwrQu8VGLBWxcHAKwEXigw6BBys8RsLL9FyJQunyvnPwu6G7kxFHn2gXB17dKDH9J8EVQ1xeDVWKtooP7HTGA",
  "key13": "ZcmJTUP41rEjsrgp7cjam9HSUktsN4ky27KAguRSqtAgu43rbjxLepryZYbzE7bnWrkHhXbqR9G2iEaKF7vwe25",
  "key14": "2VDAVsKfsbSBxgCQ6nshCpuiRxoCLFyp4XS8fGFHRQYCEtUqU9BWwK6zRq8tsvcqQnnh9xSXXeLXbsenwfiisbgu",
  "key15": "53iZ2k1EPVCMWuLTmt2jRVypCGtNCE8XL6Zh7z4PsxsFGk4BXMgWHhc57bQFZP3mS1NubuKUMUivHd3k12tRqgNj",
  "key16": "2778MytHHQhNs8ez36sjKS1wQnJ2smudu2woYBPbJRicZanWvv3RyzE2aKtaHsULFjh9qYq2AN9FTC9pKrAX1C2S",
  "key17": "2XDLUGPFA8uTqpg1wUG4AmhKevDcPqxvnoV6AfHB2NjqPEn1KW472TbMvTLMKZ7toKuGB6iSPspmjVWgtTKuxs2J",
  "key18": "5GgtXnqXZVM7rvkxSrGKmdT3VVQBsN9g4bCBM6HD6Cejc7Dr8czVSpEgxE8sbpfoD7V5Uwd4nkvFvKR9gEc1Ezgj",
  "key19": "3eBNE2nBXn2j9rjvrvxHk1ueAYaZaWugYH2BH6hV6Q9qMRsnwWrwkMaPXSZzmp9qG9Jr1vAxLSMZqAxu6DuGAH4U",
  "key20": "3gx3AcEwKvjeLwuoaYAqRx1F48rURyp3YUibr5M1NVPDbowRwTKu2TTLSNT5EM2T7YFX2WY6SZzt4cJWwVr3Pb5j",
  "key21": "46DJxsJdZ6oHaNNtWBR8ZkTuyDy7GxsWx1cPDRFUEYcpLGNfKdR7Jk9aGvcjeDV2VnFgR6kAkrZeDsns9J7w5dJe",
  "key22": "2ctS1XCjdC4zj3qZcrQHj1rzGcw9ajHrzHmEnK9qeVbTqtphsuSZwQgvgPnQEfvAyr4FpGeTrQWJe9HtPc1t6eqL",
  "key23": "5Kvma5io9F6LVyTeQJkuiyfJRevhzzF53fo6G6diAgdQ7RmNUSQsSAVTapVn5pxyTUdBP26LvMKzCiuSEZCAfTqU",
  "key24": "5osxLP6T9tpzvYtg5K5FjZdF3ZUn8jPB2hEhFf7iuFPsjEPY1kNJDi3vUW2DF5QSrsPtBf7aG9AzFocqY6mqmz7M",
  "key25": "4K8ssnqqdWq9hJwngmYf8Zj7YsasF9naDoDbzSYUugD99517Hx5xQrsrHnwbhJung8tMYKySmEJAE6VMHsGshJJq",
  "key26": "3rvAeoXtCUE2hZoTwq9CsMDzoQoo55z2EKyigvJmoTAqtmr2XJqLg8cHtrfZJeceMuLrS88VBRnbahnpdhFioPFP",
  "key27": "4PrfqVFQurUFgC1Fb1jxiYEPUm96fxmydHawA3YGHrhLJgrqdQNJ16dx3uNefyJfMrpf43YgVEMD8SQujXUzh3Hy",
  "key28": "4CogHNtTeoQDS2GaQkuVgcdVTp2FHLknR2nFiZErG9zUxtduKCSLx95tt4WVe9ytbxKDAxzeC4qrfLxpuTTBSZNs",
  "key29": "36K7xBZQ3AKvNj7ZQqB132tcRq6JsXz98NxjQvw7k2KvZmW9TjcfRrAZ9vzfnkanZzett5focB3RPiSUjPpRUXxU",
  "key30": "64aAawVKLaeYKSj85sPqwCeQXrwJsCWXqcFQp7wApfEvrfAByJuWzVoG5g33CH2MMetsBW8NLAK8M1AjeQvurewy",
  "key31": "5Rje25XCTNASr9PamZeXvpoPp6R5gT9QohxvJmVX9A7aiWhw4TDJiaDa5QQaZsvNgL4BuVmiaaHjin7jFzTg7MUQ",
  "key32": "4mBPQHdu5U7vrJ8yQTux1SSKhrAxcZVXxmE95zR42u5zX7HBeUgSGaRZc6Zched4MtWBmiKHj8GcG7eNt26joMcW",
  "key33": "HGCyiq3LtyXACByAeUV7adSXUheoM3BZrr6W23TjUrGvMJy2Q7JkU87vxf89SmssZ8qT5JiDr1at7M77PPYiEh5",
  "key34": "4Raw7xesARuzzxKEPHBsxhPY66uHVHswc6vxZrd4yMPzEKaKc3sayD8Hmmak91MTNT2XCwfzmHmYGMcGQvRQpUXh",
  "key35": "xbCNUjqZnvUgSnQvMUekWWft5C7u35XeMbEaqL9Ca34jBX1rEcJDtD4xTKX194dvDjb8efJ6t4NEXjjAqRgubz3",
  "key36": "tE2SikjS2agVSFBUBCXxk2JB8n2Pmr7uPjQAQgvPDVikxCxVe6kD2Sie1q6TVJtguuaJQYvJMBiYE2dLWR8kbsd",
  "key37": "5oEG8PbC7pjdVrh2s3T5Y9y15u8ApySVZY9dwT65S8mmi4AEFi4Fn7f7D8HEMCqDP7mGDsh9Xu9oWpBv1uQdGbH7",
  "key38": "5vdKjf8gMHZ57wiGiF4kngef3PuuGG6wJ3dJmW1ysX7om1PnosQgL63xnB9Jhm4Z9PS6afkSJ4EDNwMBT5fXzYi3",
  "key39": "P4uknA6kQAxfajJsdo7ebM6bTzLt8K6sEqc6M1ATuBQedmNAMw6w1wzgiC8wTeReFf8bSukswQhrFSpm4F6bgjw",
  "key40": "5NJ4weLj4UZ1mnUMeTsjogUPvZupkvKWubMCxRXjuUKPf4DvpdLJpUEcTXNWTpYKbkMDf73fD8Z1Q7tSpjTKdrjR",
  "key41": "hne7LTYY4Tmqa4ns8TfWE1RFYgvnhMRw628puJ9eYccM4DwSDXTber2W5jGuVAxmtEwrMBpRow3naD5U9xSTPue",
  "key42": "2C7VbpDg25BYTjnJRoGZaV69zAn27AyPcVNetuM3c8EoNKsqmfaRNwDAJmg61uhgyE697f6FKrGFxzAfqXkdisEQ",
  "key43": "4UmvMyrKJ8yu5sP8Ks1nG3GTSDJgDe7M6c7r7T8PEB7kkPUukeUFgo8izdQJdUydw4hwZ15vCSDHPVY1jvUsiQ1Z",
  "key44": "4kh7SkR3kShmYgW7BZHJ8M8JJvWjUdsKbwJAiR75hBDLpLp4o1ob6YhoTGh8sGsXTfez7D7oNVzCj57BbdvrNgRJ",
  "key45": "4sutqfAwuSiUNRd4YrL1KP4vAUWg8RCFnBLUaQybfjLvGfRCVq9JFFjAMdMFYBMySi2vza4BVCJC3Xuu4RksSfUT"
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
