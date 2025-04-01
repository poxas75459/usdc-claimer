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
    "3Ctf8i5y5PPkm56QWLcSFwiyB1ZyiteKBFgU4sMtoJFrawxQb389isyoEKX31qAXfNmmbcNamUBFGkaq3MBtcseQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dum3MfWPbnyVr4HCrUGNZYnDosQMR7tSuUTS54Bu4BSt9kHD1fdDGxYWsMCV1fpuVFfjDLf7qUJffHWDN7X4dTH",
  "key1": "xm7WiEoYdHJ7R4AXEDWkNeujeneesgZ9m321ch7C7Jgux6fN6woHmAfLYDg6bLbMVjTiRh7EbUui9KuCPqJWT8T",
  "key2": "3CZotvTSgdZacuWUSgp2vkZivyRo5L8Lani9LUgeVarPpcBQgUAnuZzdjvXvmBUA7FZQKn97QHZKymuXPg2Mm2qt",
  "key3": "rvQwGuo1MEt1aKppg3Jei16CYTghFAhypnyo5s6274mWnzrBhPva2vvU6bss7BhSeeRnMtzhgZK9WRoCEXYFoVC",
  "key4": "2ZahWPi69AkSBuRpcHT1WfCd1HxzKBqPZtVfo5mBPSojBJfmQQuvTB1NzKpbBS7MJnFyC6epp6KtTFBCD1vCLq7w",
  "key5": "446mnRXg8CvjigJcdMPJCbgLf8AtKjMJCEXmp9JBksWTHLrmH3ShjqHCCRDdwG5dbneHCqCHVMoSfR7FgpqJNKco",
  "key6": "2eVCPJJrV8Vrwfj1sop7g7dNoViTvUnSRpi9ytyUATdk2bzF1nBQJWv6BqcyyAVvkKGFNx1qAWME3BcSLbDGJFYB",
  "key7": "66DwddQXfwKVpLyEYu4LXjuooH5q52siNJ5qots8n3ahD87R94LZefVhJ1ReY2gD9ibaT6ZGAiMTNupYgz5ERuAr",
  "key8": "4sh7yD8CVP37utdsj4vCsK765AHLT4n9H9onQBnWqn5pe784LeFRpnhAXAys1m3ev9p9mKtFYAT8V3Cp1bTY1ua3",
  "key9": "5twVew3gDp1U1xT7bKesTPiq5aTkrkzRrfbhkxJN4mAd5BbV2RBiHVDewCGDAqgdtUBrnzKgTNUHhSx1z1ywT2TE",
  "key10": "eMSfxqxtFdDi2j9J65gV8kZrayh9Pm55ZycLayCP9sZdtj4g3ii1RUsrNuFq3GBQ4MsZRpMzwvrsYGQcoGZAo3N",
  "key11": "4Sy7LQ2xYVZZP65NxyoCAWfTriqDUfSvG88H85BFFPrxkKkYTKRLU7h12wCXoHgcxWbLU9qC5hvMtPD6HDrg3SLq",
  "key12": "48SBGvQBh6BcMeqRKRsumNVCCBiHBp6hLoHdXuDSEfyPJ4LenLtEXNB7CWfeV5mwjdSsjHrhkagUQSb2i14gnZ6n",
  "key13": "2FG9iNWWFuLwnRs8yLeKQzPHNHqkBk8bWvAjT7iZdCC1Y6PXYazqv4jERd8bFJPmSaqAmB1h3wBhCS9CntS21AsF",
  "key14": "3r7iemRUTL7qh6gLGwtRPw2NtNSLGpRYGRPTJwrSRrXQdq3DnAx3JWfXitVKJTqH753gy6G2jvCEe69xzUWqEmQ5",
  "key15": "Yg9De46UD1xm1Bj1QVCkUS2fWfsbZu8vkP9FfnPkxDuZpyUmgsEaGwzPWyPrqk1MordjtZArm7FPDgr1pyFg4f7",
  "key16": "38gBdNFccYMMrKzkPKqLViciTwtprsR1SqCzYYzVhNi1KqRUJ9AZerLhCZ3EUGwgZBVsvFztWHxFD9bfYsL2cqDn",
  "key17": "h1VD2j1Ma4rAtHFUjNrq8fcfTwD8Y9eY7DiUm3m4cmmMvKk8UpQsUpDgbu2h8H8KiYkxPtaMhF2paFx4mNfwsZv",
  "key18": "2EWvBYxjiuPq2z8ZwpcRj5ZbHc9wqq8yBuXj1dR2X6ihg3hVWYC8oignn76Px95PonJw2vbsPENVeqeHsRkSqN83",
  "key19": "2HWKMZF1JX62UxvcncKohoi6ridp3Csny4Yab4Upq8GhFReUt7izVZ3DrZzF8opvdVTWdU9ZpfBzyC5cwTMQCgEY",
  "key20": "4faAxF2wuHUQyjaJJ9kWpQZvnr4NFxipoHYF35WaAoHFhtGioPqxyHRu8uQDfr88hzN8ue8m2Y8H5rcRycrYnpL",
  "key21": "5RdYNVJiUt8oSu7zJnHRJ1EMAux3g2wWLSoKLjosADdyUmWhWuzrHqTUDm9M6KNvDEJtxWPVAYXFGrJzDqRUUjqn",
  "key22": "3XNiR3jQkLjBjTUJyWZPbSfwuBMYDdRFqzXHybMfPtjMStNAJ6o1ZCevGozu2zQ592TYRAencrALDCkGw5bbSevT",
  "key23": "ZDf7E8XQcfpNLmjufDfbPvRvLjyVqpx2RnCuLVQQTuGsfzy4Z9kdybZuduLh5XdFyPMwxDhmMLNvCAtb21Un4ef",
  "key24": "25vbJocYgyzFcuoppxt8ytnnmRNNJpKSh6zJ8K7mghTmCZYtbpnYf4kSjHuxFVXpynT6xPKLkwzNR98bEHVVSgYd",
  "key25": "36JGqA2ESpQJvPHqYfmUEAdHU6uq2aRMoKonKvqgu2Nhr6GRVC2RSjpZ6RqdWhituxEcLGtjp42U5k6K9WAKSbeX",
  "key26": "22oHrodDngeydWg2kg27V1TrJSJEpL16a9sZS9NUv3swtswh1PVzcGN1mhwQ3YNhxpmeaH9dnvcsmqxca6iDy5Jn",
  "key27": "3QQK7g9Uv1hT8WLMzqTzhGNtE7hRWPGxQkSAnK1WNsDtaWU5rtksyZBtmC9qsdXNPJ63RfSUuSQR39eKPoY2UUav",
  "key28": "5Y6FSeKTcty4VZTnbeS3R5pzoCw6bLYwa8VjzUqTB7KdXgVT4hLop6wNqoZu8jFA4zBQ5PvHPVMVU8AddPz6aTpC",
  "key29": "5HEdYxeBDcr5cJAS4HAeS4ECBvhSwjm3CLtKT9snDDYCxgE6XVhrsqyd1Hksy4qUh9FuttkF2s42HnwJzJbquMLg",
  "key30": "4UVKYm4Azkiszc85iQ8RTKs6SAsRxaaDV7Z57cfyxvhZ1Gt6h1fNDmS2rooEddosCThQZJT5gvvES4iRH97JLwC1",
  "key31": "5BkmGFigSwhCrxVSc6AwYVG3d5yMe9WctveChGnkCpuDhj9LHKdV3v4coGE2EkecPHyv3zw61QkgPRzL8p8LJkeE",
  "key32": "ep3Ptr8r3f347JoxS67dQTVHuM264VYvzWaqoX89bTdvkRmqMSdg2K7eG2JHxDfCoYhoFRNnbnCjmwXGfV6wH86",
  "key33": "3LSnMgxYBJxbvD57F9qyGwNt4mWuyYWjAVg19fhDSTfKVZroTvfdRDdqRQ5fXkPJtbzA9dRrN6sqMe6oYyUYn1Nt"
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
