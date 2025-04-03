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
    "37pyQaf9VvaPiZHb19AkSMGydYfSFrpuhTyF3tbT11G8G7EhqKhAXCZNzxcUaRv9rnbR3xBerTSt76jHUcwW6udm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tEhqKrs8YKBZM6BgTnivFa5uic9uGgnH68Fqf3N82UfxyVc61z1tPQyfDPXCrnjYXx7afYq8DJ4xQS61qx2BX3M",
  "key1": "2aJi9mWP7Q1iXHqHdCWZmnjYreiymMBW2cvq2msdYDvqqzHtwii4Z2NNvRxAWo4h39phtRRrigxxDUqsrjLHjf31",
  "key2": "46QRaGE9iwFtLtMiFAPJTsaFTBxb9djFr8PkHicmsByAA69AwxXbCv5g4ZifTdsVp1en1QzFWmoUVA9u1HrKhDJG",
  "key3": "293LMYBJLCmyeQiERfEbA7opBgixVBw3DVTcjG62eAnhC2RutgSaCP8Va9jg1EKrcbzx9V8KZAN6erS1B5MwaV44",
  "key4": "3Q4krj5DP9ZAYfRagxZrcTEAhSqQyq8DG2xrdepMqUYKvW829UkkohmUiXammJ5of9YsRtPQKTB63ufhm48pSVc9",
  "key5": "3b6AKxrqBzTL1JavwRSg87qdSC5yu24k9tEEF39XEWNrDCj5Dq9FRMHKkshaRWAFp5usiCCVmC38hWhHcY4Dm1tX",
  "key6": "drCyG5AcSsbAUzHpvHSXaBdoY2ANw8MaX6TxxGw4MZVptsEoWw94K3Zm42mrbVpF7MPisYdXFZMpUy2Myu5oEKQ",
  "key7": "2HYBmBSASW8tRoxkontTKLwyTaHTdQTTS86HhCg5iYZwoL3RE4F4vkJq7k4Ax4X5CMayknabyA3XiGasFLQEbrHv",
  "key8": "3E15xrJXNrPGyFMRNfmNod2zhVsscWxq32cy5pGNtuD3NHjBd1Ruo9bV2omiWhtbRAqiXyAZhf54h2MwSFAZ6UtF",
  "key9": "CWwV7DLQYr159jcLyT21gB7CwTFAwNq1hoTFbsZwDSfyo9gapegYibzf8u5fiurXU7QgUTiqWBsGGrVALAVrKqG",
  "key10": "5UiRCDFtwrmdMasLnvkeKs1tzFaFRnG192px5STPvYCwS3VBpuWPTwHfLbTSjRjdMzfBpzqqkXcAPUGbeAJP1wSA",
  "key11": "2W5d8WPWGR9Ta8kW7AS3PX2t8snDJDi8yMQsz5oUk9hZoHVSPaZvz2ek8UA91qanmdf958FnZmRRxJx34aFQZ92Q",
  "key12": "oNofB4AqjHi6BQcAv5AjPqxNK5QnR8SCZFkzwiWEqMUoqtXJeUUKrhNRAV5cHs2EGUoMXSAFsZWuUPxBegQ5h8r",
  "key13": "52tpPVi2Spq1HhY3iSRKHMFLsqq7yrhy8HxVB9esYQNqtHDR6bzz5KLAS5errjJBsU6j5W4R9WrMAKMJw9bPtTDW",
  "key14": "jzNPdMBhDAPkdySdR8SitFp1ZyHFiT6wcxgDf8GDiKmuyoE1iGtADXnfUAkCTqJe3JZRCuE2muii2eJ9aMyYvD3",
  "key15": "5PC1ALZuTMCsB28jTMJQ5pmRAd3W7ZxsPaGZKFbffuNfNKmtgpjbjnmDLkYAv1qekXC3X8fH1n8CqWpvFXTafp8f",
  "key16": "4BHAHNQymAp6PLTwr958MDLNpj3bDQdgvAbPsE6vhungavrGsU7QK9VQKiTKrwr9ezsowfGWPX9SgJHr4nVLWge5",
  "key17": "3vM8ZmSTw4MhXV9XUN32zguq2TRCNwwZ5eNPSTqx7qBpXiWs6VYKihKqsZwbnYxY1cQ4YmXBuxqfa4RzpTJdprUD",
  "key18": "5erXzN3wkTMbGtsPoNbgoS6Hndi436KRjdXLstV2AbgQHT3Uf9raoZGmtkvJx7RQzxK34As59ySPeMTMd7eUNX7r",
  "key19": "3FcwSo8wt7ugp8da9t87vPGWvabVoDhQALNUdQ1QDFaBqpSYo3o2siFzntRouiisYS83JUcAGBtKNU4RLXv8djcR",
  "key20": "5rFsGoRXWhACGT6YjXaCo4pajAWhoSsw6qKXEJS6boNUkD3TZKB1oV5W6fUCoPmry9J7YpD7dAeuo3kSGD3X9N9N",
  "key21": "2XDwtgMdxRcyYxneZjKEotww2qEbDLTE8kYDQ1oQqDSShbzURbkhAvMSLT1EBU31xgvqyuz2dHTybCxNRFq1hx8Q",
  "key22": "XZpTNM2hGJd4mw1w1BN3a7VgSwPNEeUoFwgECfeDinAvM3Ckg7VcbXL8k53hLSYx7YwvXX65hMahdV65sfHCAG3",
  "key23": "4AwAGTrDSGSGNP5rrYoXyS8ZaxiiXQUabA4NaDzExReRfvJzeJAkobNC3gQmzHmyPB6LutvmjzSWtQGVqPjK6AdH",
  "key24": "eDAk78Hr7QLE9htsvgnhxZ9dto6aWmqDZKieND3879EWTvZUwPf8haAxxuynUnMF4zV6MKsAi8NWQSc9eo59h4b",
  "key25": "5b2HqaA3nRAivfe2gAckNaL1igz2eoH86QLQrNYMJYXmaETWdSdX3FFPAAetcPScoAfkQpLWVfZpAC7qJnkA7egE",
  "key26": "45R5LSMRKVdQGz4m6YiwfZgNZSVBK65vJGeLdm7iiCRZDpB6HB47To8aC7ufhAPRzFsg4HDaeJPLBwiZEnDWFFaS",
  "key27": "2XvHzw1pNmEuzrgxinD2aYJDQgT5KvUWNFTKGBvJik5nirfQybejteA7UUCVJeDQo7B1p8jm6URv72AMR1xEc25a",
  "key28": "3ppjSKXQZtWVZp4hc3boGV4Q2e2tyZdefbSeGP4bfugmZuXoZNUvMVV5xHPDVKb9LZ6rsbHNdwYE57mMD6xJdYZK",
  "key29": "5mWVdQwfzJNCLxzcFj8Az1tTDLZMhotNRg7uSmqYsARutJGoek7Z7VjDm6fgAwLwFqoHXaTfmqNcXFHXG7hbLxsy",
  "key30": "4Ama5GB2iAVnaHtAHwerny36jCMKz5KQaqqECT9Hrhje3hJ8e2avrvTArqC7LZki3waq1mWMNK5fGTUoDto9X47F",
  "key31": "2mpfse1RBe1G8Sr4FES9vkqj2Xv9AJ85GSb2555Kn6zxdM8sGwiVX7xu13iJfKjFBxvWiU5XCgkRZouDy4mDpveS",
  "key32": "41bnX1bg1eEVSVDxr4aDmBKRDsAhfmvgBSDjH2nMe4dEEZdzMfzUukFVFMnWEgoZM2RZhJcfxDmnS9tFeS2w9dqA",
  "key33": "6pXheRZW56iJMrmqGKxXLonjSxeQJAWDn2FzPQg67DpJqHhGwVP33ArRfTENXvoRKuRuvXLZFNj7TBN9SuHQNfh",
  "key34": "3D7uWC7NDuAG5iCE2eTYeS2nJYhUNaADA96559rYh5VKsUgt7akTGZNbhBEryx9TdPpJkRNdRGAEWD53r1Rg6Daq",
  "key35": "5spxFai69kgUEmSrDpVbbi634ATZMtSTMZDvLPcpUAqx2B7D2Nddco9zN7kYndhk3pFj4XVrY5VBvorE52GZjC9",
  "key36": "5EqXxhe6uRDnKwfF6PpKcfzJQG1gqi9WQNa26L2t4RMwWDTkJYePhuYucvbUNYYR4bxVZf4gyrFxdarHdsUiJYEp",
  "key37": "2ojK37PFjVMhC5vAJYmCUCkApEJ2cHpTRHSzZgRpi83LdQrqrab8Taw1hAuvi9HP68p9cjoyEurbuFDUfDHMrLm7",
  "key38": "T2M9D65snXZsyiybnmDeATzXndNepAqSm3rSRYPPw2Nzjf1th2RVJEv7SqRHnZ1QxrQM7jHpEXpeqt58R7oNs1b",
  "key39": "4wp5XAxgkbLYw2wVM3XXymhM6uZ5BjM1w6XjM3fKGZRcTcF3owghNpwqEJvne3s34ny8dhEmNRHDSU6TDDgSquDR",
  "key40": "2E4prMvnwNHdt2YDPgCgY2q4k6ep5DnPnJzkau8Ppta99WK1M9TKDqf9GkqXdquxYP7B7fxxF4662ZYjx9DmTZHB",
  "key41": "4AACmUXgXdZGf5zp1Cp4E5G4pXJLvAWPytPPxAdUc4NqjfsapPKWkgzSZcNZYpBSDadUy1jdVbKWLcKwzMaDUqpV",
  "key42": "2yh1xXC7cYxsPckheCGeYE3DpGVjCe3J9twt81Gn29UTRxhQjSFUFuskAi1UQARLU1FR7uAK7uuXxnEfciw7v95y",
  "key43": "QZ7yBymmxu1Bojz3vXfqbsw5CdoKbVGJ9oNKA86QpfCYfpo3NN9kdtVB8Gt3JohkgfeNpMybG799BqYnuA7DrJG",
  "key44": "2hRiZvD3VWwPZHyXjQDH58zYv89wK3ySRHGUPU9zXgRHZJHQJLhhoUirjSM5RQ363MdFgHjaBxtGUSsrxV7fqSaG",
  "key45": "3vYTYbvgRprBwGSbSFAwp4LfirLGhmqxJ3udBNpCamDZasKC4NnUay59TSf7hUWchbeBdk9kD5R6ARuU6ZFUmQgY",
  "key46": "4j76P9vMazVg9PAP8nMRBqDYTGLEwwPR4LQ75uGEahhNdHxF4MUzANiyTqoe98H6s9cZCrstWt2rRj8B2SRubBPe",
  "key47": "P6EaAKAp1jY5qe3cyKSra5hMn494bjytK4VeHnquXarbQjMWpN8V2rZfNZbYq1K2QxtGGXBMiPJpgnQRaMqX1bd",
  "key48": "4HMvugkKKY4LqufsbAuWJBSEYF6uPTjDRN1uqBftWpNV2nU7skgSRpfP371ixQPHZdTdKtwC8PTHui3LPTjgVr5T"
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
