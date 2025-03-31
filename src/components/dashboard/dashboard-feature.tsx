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
    "EEBDcYvdAcvuhF8YWxRWWxCkTV8gwBam3gR5HGZEUhEU6ajx9EVqEfNTe7ZBZBs1AzXUuuAo6nfkV6KqgYdpATZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yyq8aPqR6pBejKEietwqod6g2QMfsAGfhrEQFDnXFdtCRxsWQZA4PXwvYVEAK7aBiWBcdtP6bro4DhNc5rP59Aj",
  "key1": "4emWEpdABHjGbLJSSv4ZSKFvE4iFCVTZ3XstuCcaUvPwbCCMHcXCWCt92iB66WKik1oFTZh2STS9Sidm1abmYWB1",
  "key2": "35KHiaJ9Hu84bHPGqzyK6H61Gg3kJCW3rj1WgE78ZfJ2MQqA5wzT5kdhdRQMZ7VMYY28jG7qQdjMxcnEyEBKF7eV",
  "key3": "5WA3gMSx7hVdXVjVbtjVgZmWzi3xPhHTjXWkuLZUsRM1FDgdDr2ajoh6mJj6RknJimyeQfnHJ8CHWmxRggyXijJm",
  "key4": "2R3ij6XabjadURFEGpYKSk41X7Zpe4rbB7Fny2rQhYoyiei8pa97oAZXiMN42n4Qs59xSSbBwYcsC1qfWQbPKhE1",
  "key5": "3unauGYvdy3BYxKCoin2TxSFLtDehCU7i9yQVpKYskJr5ZLr5jh4rRGsdUBLKrBHSmGfs5R39UmCArE4vDnqCp5b",
  "key6": "M1zKS1puUyvfVm7o1G4JocCBgX4eHKU2C9xxXZxe9Gbw1ZKa3hADZufbfvLkbNdC3PTZ1oosFyyXSp8znUCZx8x",
  "key7": "5R6CtDiL9s7yuDZeKeneWiP3SRnAzd1Ychg3BLaBvw12QAeaGLTgiFgBudN2ev55JYg3vQJnXShZkhuRTVuYtfKk",
  "key8": "4VPjpHgxZuVUfpV3EGKxzUGfagCsy7mbBuV2G3QKvYmu3WFC5Yc2Vcb2kvZkPe9U6cRrM8NLbvtk3cWfjTu1X5qU",
  "key9": "5ixDjoC77tj5rjojcRAg7MnWUEUzp3JgJazth6ZznmHfaH5JGGo5KdMngNxMq2uJudiw296oXLNVZ36MSD1MHYvE",
  "key10": "46wj4N4XJ3UqTDeSFnnnm5inm9gVCfjf9iJgvkEBNcTtYu2v24m75Y9QtA1S3rG4jU2cfbZqFJi4FNqJt2bbRzgE",
  "key11": "2cz12BgTCo9EprqcYKZMBYE5oVNrqF6rifS5z6Hk6TECnq8YNmbcsyjGaF5biMwmPRNBe9ytMjaNcsE3kBwAnuXP",
  "key12": "45LSyiEQHKue2Xi7z3BShwEGFkPuZERuFrixgEamJxZeHzfWo2hWLAL5ivXFYJLw1jsyQsuyXDftimkpiMSM2owK",
  "key13": "5mzcv6ZYvcvCpL7n1owNEaU1t1uvDSapctkfhZqTnXVB5rgg1GJQ6vnTkvsRfFppUyKp3kFXWrTsVuVodyHFgow4",
  "key14": "5yYbvCd9YiQDgo2SN34pYbpdYf2DN61FresgLco7XYokU18Dntj2QWq54ZWTgniPUwZtDymqpG81mUAG4nTARCU8",
  "key15": "55tjqHRBMC9QyNNWukNSSQRp1KejFnG9F3Ksg93DP9ZXegiZqCo6Z1SBfvKffsrd72qcQL3KvhFHGtd5xjnm35i5",
  "key16": "2PF7UsDmETQa3xNHq69ojvvgZ3ceCxRKt2NvSwKPQz9RezK5vF791DA4FHWmkMPCGG1sTWv423Xwzsx1HFsJpTqZ",
  "key17": "wg1v8LKGw96JRrdJLMeEKhQyEARCsx99rmayBda6jBzTJ7hQpM2tLGBq8KNpaZe1ksxCcMvHdRbgHPiWJnSMVi8",
  "key18": "3Mr86J5vPUGkTxPztSUJJ12Wr4WsNjejksuYFFrMrwHg1QnEQ34AhEX3tys1jVPiMXVG9DpvBrXB6TTYc4yBJ5yj",
  "key19": "3BpZknopWuXQbPBjSzbS5N2ffEc6m5GmaorrRovXjjVyJYyt75ucyNEBneSGRqM5xz7Qf7rtMcaQA7bGEhnw1eXk",
  "key20": "2hx32aa6xTMkYtJcYbcd7jaZTgTzG2FKX9a9TGA6kbkkhEgkyrpcJXS3QW63zhBcwrezaNvfVx1XLQzj7qppWo2s",
  "key21": "3X1sFtHEU2RX1qtHJHftUPZ1CDXWBsPoVvkcun4nsT5LyzqJSdJPAfS7qLU4XC5riKovMDvQouPyo8pas2nhn2Lf",
  "key22": "3WRrYPQrrQY3RfBdEAzg3hPPG1ss8SonB1uJRq9UWSCqWjwipEE2vRJMLmzFiJMN38QUkPk3RUttrdCWmTmGxscj",
  "key23": "5wLX91oTLwzVYFcSJyyYBZMb213Tig2yYafBHLejXDYqkPgtxaYjGsJR2W8YB5sSbDMj8X4cZo5YhYZCCCbkcXXn",
  "key24": "28YEqR5tRMRNdn1dmU3aUeMw52yEYoRaQuC2HS99WbmMkNvdUbkxpXt9AzZJppTfyF5h7mzth86FShcQhURHMAns",
  "key25": "2H1qsgqMNyG3vDXqrMnDJE89enrWrQ5HcNBdF39HdvrPjmuCsTyJw4S6SsC5qNhwY6anRX6hn8uy6wJdYkPc1M4K",
  "key26": "5rjKrUaZiv5LadfUqfgN38Uja5g1boX41zEv1xydGHnNYUiqtxr9xWab45NGAqTqewexCmrZVqAahFc6Rc1z1rZi",
  "key27": "uF7drGbEe583nxPUjzs8Z9hV6zcc1ruzMhuAECQ22L2b6NidceVjFRTjfx5vbBoFeagD8Pd1YWEja9jRjckMT5P",
  "key28": "5HzUfP3sEspU1dz2hwG2D59txTkj3ZoYn37gLWFNmEStf4SDV2oMxsNbsNhuPFybrZzLTqBvbhsd2rKC7qUtdZuv",
  "key29": "4p7BL1MuUzhzxx6CfyDefSNdTFkM7U5hBmU76JprPp2NXnFEb9hqdy6Nm1ffMidQ6sMtp72RBcLaAiS76SV98Tdm",
  "key30": "3X3A3PS4gZ6RPMMK3ixLzjKKV4hkyxT8c9oB7Mg6qaYpxwzf4iZp1hvNpcMwyb6eEN76wvfLXauFUb86nEwnGRfW",
  "key31": "XABaspeEhbx5qDPL87PXBatN682an1gwEr6sgYiZZpL1R1mb3XV6341kxhsNVxm2fPDTazrZejp5qk8PD47PAhf",
  "key32": "54EemiDZNgNq26SSxiJZx8qnXKNBiMH5sX2Kcxmen8RwVskReRHFbR67Svvm4sbwPGe8UESKAhq18yef4uQHAJ7K",
  "key33": "gbdmhWCyqDxj219vb5z1HwQymVmrGxSkjvAfUvTk8EhnpSbi1Y9yATjXRWm2hKSibSnjSpKFMjdy4ABZfsNJmcD",
  "key34": "3NA2tAa6CmWFobzBxR9QrnamfVof3HXY4VH1GRFL53LLg4u7cPLxNMdECGQkYhZDQqsSAyccQ9V9Q7dNpQeMMADY",
  "key35": "TY99MgZkckmGsAGaFtgjBth6FfUd9MFFqxZGVQ743zPJC4dLAkwrWUeZyWcXejRqM4Mvb7HfAPRyRXiAzXxfawp",
  "key36": "27qMybqb8XDZ94mj6aB6ostWtZV8qeUfPfUghH2stjhVjeTFKjrBjBzsQaWRiYvaQ7seumK6dvxrxAQ6JUMhDapR",
  "key37": "65NY3jywWV9uLENi3Xjyu42CWrz1WRnjAL2F7LppVXnfNncMq1n4fKw9QeKgGsQaRZJg7k6rWrMHg2N5yYkrp1Hb",
  "key38": "2PsckfcAkhMBuQT9WCcPTPGUQdc6DpaVi8dAq3YPHwZZJvJ7TnRU4bb6Kpg3a6NsJSzJ635P2zFLnrZSxrFP6sKP",
  "key39": "2aJDVdeKBeBEJ8563WLRQKkbipBCF4tHgRQRRNvTZN3weTfHVygQnBfohYZZoE7NGmMfP3wfiQLaf96kMeoXwQe",
  "key40": "3k7D8baw7RVeeHSSsHmoswvp2qiuK5Zyyb5DTvgX7d5f6kaq9x43QWcfGpzf62EAcSQQnWzELL7hwYyBzRzw9MrM",
  "key41": "3FGXFbm8EAG8V3Zrn7B77sMbxGQrsYzNeqVkagA8iHCRd9WHaN8TC4DjWfY2XuRX3mwe1unKEKUMH7Ar1roXAJgi",
  "key42": "zpJaxVJbLej3KB66gRTL1vEHwf36xsW3q94ddWM8uZZ55e7ttbs3HtvQrbQicWM4oAR4Gir5ibem6GLE1m6dtMK",
  "key43": "4en89G3Z249nzqMS7U8RwpxJzvAW9KrcWfqHxf8kpyJeHCrxVVUp2VEeWxwZVr8BJMb3NrawRqrYE9fcx3Co2bnt",
  "key44": "291SdEnezdZ6p46Jt9MVjvhTVc3ZrR2PxVydWEvMDo6whn9zLw1rkUcocgkEdsVJ2X1QoiEmQxragn4kiyM7KUTL",
  "key45": "BEV2XF9LDKb7gEQYZtcRTcY6qzGMRjMZGcTgbB2JvrYAnLJthrw7n8RmUaVEfZpsXuye2adGRUPFspJvPbURqqM",
  "key46": "4bGcNTbKFjAJR2C2Vj5v8trXzkespBz3qjJSaAmTVa8ymrN4AVLQFeZuJDFdfw2RN8Nf4eEDfcg9fhd9nwTT85P5",
  "key47": "5omFkY6TyiRfEuWD2e8TkeKKrPVEGXVzQ2tNNJUVkCKnn5uMro9kh47WGXzkSij9r3Y2CfgyPv2FqTxVBoGggymy"
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
