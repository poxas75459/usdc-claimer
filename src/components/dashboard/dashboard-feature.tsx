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
    "2PzAMfbWJyvdNsPG8FWfWzENM3EE1nhMGroU3FW7bqDRC2wtjewqnrhMA6yKMpC62Zbh1qm5j7ovQEL2JHEYhAqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwAKhsTmcSeovJzPzhPZbub5fbgbuQ2HTzRGJwA587Hu4DhNBAmYungtK36S4GsSrvLunywdmo9BV71hUV36GWu",
  "key1": "2oqeWWsL5RCP9PF2XMRkT6BQZ3Nbob2RhzrFajS55Nth8wMWFFbBed1DLbkr14rgH7hcrvEVzi814w3cxTitXWyx",
  "key2": "3aWbgFMA98aamarFFxkGTgmqmEmjqrzoZNAHRL3wHq4myYSNtkxtqDbHi8GuwozCVMr7raSMpzC4B81r9zzt2tSJ",
  "key3": "3DmSsCeyBs9QC3vUDbVouVnUKGm87geSiScoqn5acqjm8sd4cGXpCtyGn72QumZSzJaVYpicFFvsKfiVtU8MQLEy",
  "key4": "5KTN38Z3KBtgmGHD5N5qQFXPsxDWjeJP9SkFTqguGEHTKPbFnryRPaZyCNkURio921WNWn3W66o8MAdrP64sYosm",
  "key5": "4hnvEDrEz8vcqRqDSkcurUefu1UwiHvqdrS1CChGJieZwzrLY5WUXpuBgTecJn76tu9JyCaoah4Fx7CfSgF4esrm",
  "key6": "7N9EaRZYZoVEcExNuDFT7eiCFk1NZsRUiN1Upw8omtzCiT169o5dQadM4Y7JTqBE9zaiztcTwJ1RB34mnyw9Y3E",
  "key7": "5jZHZfiENufu3t8HaMjVUvqLKReSaCssUMbMr2rsk89AiqaEX6GuemTkisEhA4JrbwZ6eAHystf6ZDcyCT27yiyg",
  "key8": "3DqU1pXidBWhJ79QbJAJzEWUUN7rMxNL66RCJBktPz93aQoeEjVdufNkEJHspscfiMzyt2g4GquwFGG5MQmjGVWc",
  "key9": "sfo7PD7mYcfeGH9U3HuN3YthodYumVofRGUg6Xc7LKkih9TkhKVqsSfgXGMPRH1Pte5RnSPJFcruiZY2M6ak8t6",
  "key10": "Maf89b2bSFVDRLZmgszNFchik8ZXF9mwQhD9C86j5SFrgdnC3hVHqvK7bo1omfxmiA83P2f8cEKf9JGBr9uK95r",
  "key11": "4PUU3jPV4qYroowZthL8WAnqTKmR7XGRi1RkJXbkGDLrBBV6nzmuK9bsqBBJ2FMztxp93zA2PXoK2vJtqTgXzpQA",
  "key12": "fUwPhEA1Mn91vsZkExyW5x4hzRqmnZhZ3eL6hqMohbdDKxGoevuxqy8NWFGYpSQdrtjZSH9L49pKRCFHAs7h7M6",
  "key13": "2WMccPY72yPc6zBCNdoAq4uAPexpBsyysFhY2cuYaRpLgUT19Pnsg8QmoN3mQA21tVwQiZueAUHshqi5UZKGU2e6",
  "key14": "3TAgqDkT8A6UuxMjmTfs859WPbBh4zrZhYdvB1Bx2d7JcrBUiUophMWmRqADZhbQXU6syeGMeJdeFwH4UGBkjCHU",
  "key15": "4tGyFSgFq4ng95LNU21pkRpnnFSimj8FqeFkMwYeJ91nUqbvjhk6QEmMxDjFZPFhtw7R85pcwKpq8QUXmRg2hPMe",
  "key16": "3nMTSenujTmJ4KaAD6AMe8D79TtSLMuwdTCP1uFKBXyCWAeEfTepsoqfibLsXirwL4r2GiDhC5DUvMdzZWf6244u",
  "key17": "66mVK7PEXSZekPV9VNYCQGYfH7HugBYEs3b1Q2AGXT1Fo8RvbbXBe2t7qeMMRwK5MD9nfomWoAmoEJHTWaehih8c",
  "key18": "64gh8ZGV5jymMSk3oYDc6bQFqCUCSLYfiwy8cDSGauTHGdq4odrUhoz4z4yf9tz16ew1BsJvdXadddQGKLiWt1U9",
  "key19": "RFNx7ordVUiyyiupUzp6PxKHrrrAnK6kUFLJt7nA2qp52vdLx7zGSMUWb6QmA8HurpFZvAviHbdgMvj1nDgRFZb",
  "key20": "28p2pC2rLaKcMtaF9D6hZt8jzBGc18dzn9DNzN8VQue1eJ86RsdFCetQDwT3dYVuha3kwyFx9rtse3XCSKbsv4RH",
  "key21": "2ch9kvEv8yGHvCGWfHFUkqhB82DKKfNh8FZ2njr8DaKUastRHvZDWg5rM3tsC4tyH4yFeYYh4Hz6FLNEoyNQCCA",
  "key22": "grabdCiXL2qzchyWWZMVWKsRnDfwaFdXnxLizRptmza1gUWDVxfwudGC1CY7vDRhgbSrzKEqMBZ1tu8dbHuV1db",
  "key23": "4tbbmcMbCf5orXq5mrB4CTFFeSsfEcDosxjSCEzht1gFYwq3xAf2xPVZ4a4G8hwJ69tGvMz3vaC8aqrRgEVj1DEx",
  "key24": "34pyDiNzF7dmPTJxkzN3ovfaAvATsZWY2yLBBz5VXvPHpTnXHqVWKFfuJCZnbZU1PLBYQx2nZNVUQLHzL7hKSgqB",
  "key25": "52hk7jghkmX471xi6BPNVnTdreBUCkv3CFCEX4m1YEEXjhgATznsaggAbuBb54ELHkAapP1oiwSRi9hyaJvwDdN",
  "key26": "uZdDWkhPpetEUHnBzeQFk7d63M1odzJK7SDpYjpgkZ9FMbsV7umwcjmavsYnWrHtietN7NhkB2H5JUBa2NhEW68",
  "key27": "5MCgtY73Mot7kjM6EEF6miUQqZCa6PByXjqpTgTEjcvrwtVdu3zPEpnDCD1yzFRUHxfnZvGs5pn9TretfwqWQznw",
  "key28": "2SMfGdUSTJCvmbZfXQBvnb23xWMUHBEoYNL2NCkULSQqcK4ZiHRCikxdQ9c61GghQXHBfEbKQT9YJsizYcMtkX8d",
  "key29": "327RAktsiwem3CSAd4RXhdwv17h2Wb9N452riAoQtirdkec1ZZnJwNVuJrYcUGLqWo2wZexof5BCX4P39CWoyZUr",
  "key30": "X6pgPQVCW5bu4K3kTuarsuCpzx336gsU6DhM2L89WKZMmWEd1G9Saj8bEJDGH6X3LCCSLY27CW5NVPBBsq6AKXf",
  "key31": "h5pjr4wRbThDU5LJ6bLCAX5fcpwdzV5L7JgRxG7eEwWGEn5eTAEuzSiVQ6YtuvwYTjmP8riLBPPNgr81PYcFQhU",
  "key32": "35EQRdP2UKYZgyju9BjqjyJnKrVwF1gVMdY63BxbQWdhi5hAnjwPzX6vLSkWoB2eFd64opu4r6biTgSWW5MAbswt",
  "key33": "5mEkUnuwybw35sYh1ezaLBRdx5ENmBVcwJomPp976H1uzJ77vVCVak8c6CS3XCS8ptAg5iG2epmoJhV2RBY8icGR",
  "key34": "375w7XxvFELomvWrGeGvJP6sAB1ce37bcipFvoroqNk6CFuzs6Y2yRofVW7NAyoB943GrZDFtgYRtf2PVMW4YES1",
  "key35": "5C8fppiKQvQ24VdYmLxbSszXYJ5EseaF1XGZ1jAQoh6P3TXDnxgSs5rUsFwpPpGWLYvwxK914TkxfG99V9q3wNo6",
  "key36": "375UovbviA9MaiD6jrLwZ4757Re5rWMsS58ykeF3vo3hJDseX4EemVVMuwGAorPYPE9WQ3DzHAzAGhKD3vCmQ11g",
  "key37": "5cKHkiCyz2RVRyCjPwRfqrcrkZvpKkgwu48RWu2wejxAitFRQcv1MuBAfEXp6Zv89PAp4y2gdPUWq7EPSW93oy6U",
  "key38": "3nJssFxTmt4fd6A9fjJVWo1LA8GEMXrHr37NLWkHBGgVi8SXC8Prhvw89Lx75EsUjpEHVWQ9E84jQaAKbzPqXzuo",
  "key39": "4QUnGc3HRyGyAK847DvyT4sSTytWarBFUUW6iEvBRvijSgzns3FSoMzbM2CegemVVXoixCetD7DKGZrm58s2pq9V",
  "key40": "53NVKcZrvtQGifLTmQLTdg8v3JSZMQYG1Cc36o2bFotFvMEKGrqriHg5tQyNAEoucEyd73fufBx7V9JvJLoYSH7K",
  "key41": "2qvXsG8ABrpvNZfVaVDyHUnESy2DjuM4ug5gBg4J7BcmxEG1KfFpqXcFxrqxFTSwFBShp4ocedWV9h9GeMEh2CF9",
  "key42": "3kr5Bgmefc8U5pUBZpKJzGT3XvaiHpBZwefWJbZrznABxN4fvFkv4V6BUWHL9T6o7VhEsSnbNFQqMRRT69aDv9BZ",
  "key43": "2r8VtLQ4VdDJ7cnt6NacgeCzifxWNDAKmjpEKcc3Hf5u6op2MoBhiNCjoWaLqAjEsCcmhCqFhuPB4VW5xPR7k1y1",
  "key44": "4JzDaHfB4SGV1ayk8DD1AUa8T6waBKvoTgzDH4AUyv3E52eeD7YwnS4kxncytaiecxRgADJo5wmMXD61tKzLjVUt",
  "key45": "4jU87Jhbx8NEHA9vQXhbSB4P28r941N2YQXSQuDDt792MgHd2osBVGYD36dqVFm1yJvWhBokCYxf42TZGECDhA1e",
  "key46": "2ajETWvMq98e1FYiyMgRKFxK1xRRp5x8oSyimNYbJMnHzfNqjUDBU24TtkMAzhY4mjphq1dykCqvAK5936FvM7wQ",
  "key47": "3pQmSTWwgwxjoKpr8GU13FXbB4KiV27fuN8jexJ6dAtMaZ9ZbLguadUSNNHvcECksXYCpYay3U6gaVn8iciFy7Uh"
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
