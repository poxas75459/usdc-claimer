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
    "4PhhpP6onx5WbVsWxHnNnH9YFpwBr46uyyoyyxMS6tEQRgyn3VdeJ1JMNZjx3g3km8YdTwQauFWA78mLbUnPJo1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bfz8U25miUFSyo9kEcwCPCiTejUtqJrK1e8Vtw2TqaoK9s4VbttrUaCK8oCwZTQzm1ZZ7kkWM3MiTeoskYPk9wR",
  "key1": "4UAgQdca2zsh8son5oRKWyb94FKvJrsBNsStgbx45CxbBbypMMLJhbRNqeQY42tTaAz7CvJT1QjJxj9987TyvVmA",
  "key2": "5hfRsnFsSHYdJvHjwQagcwp5FPFBAVTih7UYu14pQChuANu9W1Pq9GcCCxuGt8eAawnV8wWK3FhLmnc29JCf6v7t",
  "key3": "4Z2oUjJrDvQcSuBmTij55oNx97CudVQKa1pqQoeuvPLB1vqG9QZFikmzQVZLcSCg2NqcF64wFimyf2y7k1i4GPZw",
  "key4": "2wtwJt7GoTcmKoq3ya4Yad3SJZiDjXJau2px7DL21k2B3avAjoi4kz8zypaE14v5gXMSobm4STxQHR6znZfVrRnJ",
  "key5": "4VZKvkY5TDoeHGumzrJp65weMLZcwt751oiVFpSUhbfqoujn2mPiAmPeMD11zQSNAKHGPBVSq3WDYCNAGBUJdXp8",
  "key6": "2EeSriWvG9Yyc89DtQUcYs2Qp7FvG8ayieFQjzX3TVST1TXTZbw4hLPYdXDdRTLnmWwKf6AxBER7h3tSJaeimR5U",
  "key7": "y4BFGo2oCS9ngANUBQ491s6mhAnXSCQ514KM3jjrNDCZ9UwZw2kPGQxwNYvMHVs7hFR1pGgZTAMJDDRcxSYD2MZ",
  "key8": "2tgjii1Wf4jEvjwmExiVQBJrz5sk24wU78V3JPNdwT2DBuFayHHFipnHJvvnWVoYsBfJFQVJ4AxhVM7f7bJUpiEv",
  "key9": "2AjWL21ZVAi5eVCd3avmJGUmNidXx6pLX5pf5J9hL6G32VPKpvttB3NnG3mS5LAvvQjGUgi5YodQQT9MwZpXuzNH",
  "key10": "5HZjnNbWecegyAQ4BrVKvL8bJLxeS168xEczSAfNsWux9Mdv7yWeMyDz5hhrKMcNw4Hf9zYUaeFUEyRRQCbXfCQB",
  "key11": "22p5ZvWGGgnHbdtupeV4LrdmqmNqGzb5FAhZ7VGdKdVx6uLiuC1wwx8w6MvrvpgfcUBemXYAgiM9CY2N9agAurtk",
  "key12": "3UYwqdpvd2BdJPnijjhCDw7ztpAeL2zWVpKU5qQ8FrmLVyZLE36HyxeZQoamMiq5nr118W6hCEfe3T1s1j1rTDMT",
  "key13": "5XKkAGvTUZ1HjMj2ChTwzVHf84nh4nkKAwP1sCrVK3dSkLrisKZuRQSmNSo8r9zREE4Nhndbfy5ErimoeKCPcFss",
  "key14": "A43hFwAUhRNBcX9MBPt5UKZ5ARBimXocaMSjBL4725zhsSUwcx1RTcaSeXoYf8FatfseUDmr9z2yY3qnbybMnHe",
  "key15": "586e2FApedSdPmPcJgtuPdB8CHpXH1uP9cgkBKRzNNhc3kP16Ju2oy6qy7PDVkR7UZDevVcGxREW4m2G1T7FqSb9",
  "key16": "MbBzTsWGAgMRNgNHzycCvFd3dL69YLaCkZHmbuRz3ovB7dmTdRUheyhSSPcn2d28nj4xs7346ph76U34PA1wn73",
  "key17": "2ckNMXeguPycrouvNP3rSAQnNPdjvk8j2GH4dMGjeXJF6xbdjTmXzLNdgF65ZYHPzddG4csUctF82KFwKXtbUuh",
  "key18": "59fBPqtcjwRE3FA1KgiWr2o6nigYNrCLekb589bhBFXTTbtkrytqxFFqxA1zX4vFhM9PP8rmdGjGF2XEKBJ8Ah7Y",
  "key19": "5GVeg4KSSpvC6k5KpfgWi4UcKc2A17raLVqU69Nr6uDnhp3qopy7gxzFxJLyt1o35aWbHBVFGN8au5YcbqF8KhYc",
  "key20": "2dxRyx3BnJUVq7AcVEepBkC5DcAKcEmYYTNaprENZzqw1gw64ZYYBKHwHc25G9Hr6dKNvB7XDKxnFu5YFhKYet1T",
  "key21": "5GkJx8eFuREQs2RhCvHiAmZLTYDQ8Y3QWa4EUrjeFVh7opoBE3Lopr4ThKzZHsQdxLigLeuAPb6aUpKwJMok213D",
  "key22": "2XPsw33V9JB7ChavANbFnRtJ72ogcf1j9EVeq7CRQbgr3CkCDtypej1PkY8jbKpLwQX3aWMHP3PtpeibYTovUZ8o",
  "key23": "3EGixCt5HKo3Eawu9it142ND1doxYxP9SFffAQMtFg443zL8WvX8c6azfk9yVtywPYxmr8VmtYx1yCw7u5wErcu",
  "key24": "4pYRa16ZCvobhube6EvR3BqVMqgP38YCWCgRzdXTFBSfn8Gwni9t39Mpp3PGMQErjULYBpcqEBGRtTbLcHFuhHbC",
  "key25": "53JaQyRXajwHxvudkbyiUEmcoRci4gt4KkrjF8qYcCDNdnsUAQWQ4yN5pZkpUtfPLJhU7KpVerH2oPUw9ome66Lz",
  "key26": "DuVBBZXRdQ85SkQgJhQieMTsE662fyHzUaUwbHNNvYzL9HZF2sT6zGwzcMDSRfvMmToUmnf14A41jadYK6522uz",
  "key27": "323USFXB5isAgyFUeunDcW7SqSJq7jucT9fBRfL2QpSCqKgLw4qc94LbiggH7CndVtWZAcBkFG5dzd3eYHUJmwyy",
  "key28": "47AZM3nm5jFdGfqsYDbhVg2ByiNJH25oCHM4LfbtuqTAP6ncCwuqoySpkHHcZiNoob1RMz1nLS56uhu6J7cxZQYR",
  "key29": "3edfvYduCEFFqMcvMtPkZRE8iAv1zvuV6Vi68pvT1U921rUtah18B6rQsRNkwx2wCnzNfg23SUvSHaN8cp1DevCw",
  "key30": "NjNGJokfDmK1ojg76AVg17dMoFXtsmWKqE5FxiKV2ziS2GBXGnN2ZCa1qW1BKgQzJKqoR1FAjFWzvJaKnHQ3iYa",
  "key31": "2pbRQkVNyjaJQXwToa6SdduXmS47M2Ra9rYPSPeL1C9xSXEWLHh3usoAvDq1yhZQB5Xh9G4RgG21GoWMsgoqdhgt",
  "key32": "4cva3ofW1K8YBbTBe93Nx6VgHQmv7qXteN5rWcnvMMeM4RxrKVJs88tpaMPSL43ipASP2huRev18ch5Dxdsd2Qs1",
  "key33": "445tF6krSnWnEoNeMdoKfmpQh37cJk2xDka5Ti1bpwoiHyGyt8qQLNsfuGgny2bHLMZAGUqGviYCtZK2mvYWyykp",
  "key34": "5ks3Ug8ZhHTYfXGsaED6SvWUSvRPK8Pp5NyxGoW9Ff9yzBLgZwvc5h8qSQCSubGysJDvRvxa5yjw8Cacjrxha5V",
  "key35": "5bTobYRNrmSfnLyrG4FjC5CNGfyFCBtA8wktGtLNPdAFYECMhi2PbqYVt5UZ9DzyBDv7Xg9yMqEJUWesV55VRaRv",
  "key36": "5pKLd75onLu7MPMQi2a8vdSDV9zUjGTjDqKXz1DcD3gX7RjKhLvDUpYPvQ9J9s4gbbM4dAC7pabvyjwhnps9sLSV",
  "key37": "CVQjnW2uNxyuHZchsrqF6R195pCrj6EvwT78MMmY3ML5y8PVQrgX8yzwiKBeUSy61ZWHZMP5jkZRNWoS7vaMb29",
  "key38": "fR3p2EseAsnaNUekAc9gLvSK3yxf77rmMEbPEENFo6LTe1juqNPaNRuxnKZoZVgff64FKxmQQSMfwFfnaU4Ec16",
  "key39": "3F4yAthC3XsqvKp1x8ZXzeWphV4skjC1gHsH1FqEsoNXetwH85nXuMKZ9dqYNgYHfi7ZWcTrGvxDxiqzjsXKm4Cq",
  "key40": "2ds64vFf5iLvLaxmBrHTAc7EvGckgG6h6bs3SyJ33jf9upCkHcPtiY4G4SEKxUnkUC4PqGY1yAKEk1MURjJbTBMV"
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
