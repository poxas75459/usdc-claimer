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
    "2zeh4Xw2NP1h6js85CBZQhiCzafQjHAYKCna3uHMaJm2TfuRdNAfV5DaT2ZruTMYjbyRYuc84gArNzZduQimFaS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xsv1sx15aR5uVRVmgqS2E1wHiu5RkL1YKLxiNKzyQ3MyKJdifVbwfD9RGyj4Fn35NaaTJeqmQZn2raVX3ofdRck",
  "key1": "5mqrFm8pcfB5LEhB3kQJA2AzcyGp48gpkpq1k1Qk9YQoT2V28Ka7jxTgq2Tu16HcnYztL4FDzLPhHvWx3qfG2kgz",
  "key2": "N6FbHbd43cqJvH1u8cDczgypJmdou2BRm3BdVxu2ouZu4r76hgUvFEH3xmPQHhEy4Buu6axf72CuvCJvZ1Mqq9j",
  "key3": "5qyTiuCrFD2n367RjRAGaM7LBQUSA95UyC5rQKJ82cKyQxXnFXfHeurUBiKCsJrsc7gYLhpP7dAAL3qt648KEpef",
  "key4": "352aswtyTGL86XvdSeWtEDSCEwnvw7hq4hsM3a2TaFiMA5AHK7LbkTZP8UHpK5cmYAHvv5ApyKd5Gmty9dNP6Cu3",
  "key5": "7W33DZJMPUSqUYBb6ri7KtLMnT18Bb1JB45JpKRtYn8YXV5zMKR3uDDjWis3GW59YyZ7M3A1vsgjhmtV4mzAxPZ",
  "key6": "3cqAeusv1apUWCF5dHbr7rXXxkWTfHypW3aHgsTo5hRa1Y9muTzRhwLo8Cjtn4hqa5auJRzG6Wps1Acm7zrWX2RC",
  "key7": "2Fmr7kFDuDU8sQMSJebZNLDZhpmTzTwh1A4f1yE7jsTkun7vUMXMP8vugfgcrshBq2vJPyuKUjZXUBEE2BAmntuA",
  "key8": "7v7ZvQS2cEYEzbXiJi5XuXNGRHHq7CUbKEhE5uooiuZPFfBK7vSCa8Epb9Pvw5MBKLGrLJmrqwCxwWUsRTUAjhU",
  "key9": "4is4Gd968cnWdwgHWrXfFyNwaZuLEiP5YK1yPDfEgBJVdiURjkpdTRRJ8b1F59aZ9uhza7hABZ3H2FKz5nRafiks",
  "key10": "2HBCceepjoCrXej6XxXsQv9F4r1GnnhVKWGdbcxriR9nHaJmTRruNPnzSLAFBm6dWygAd5AugU8SWDb9EnJYRgof",
  "key11": "2LpRhpPRWB8bB8KEhXEnE8uPE1BoyqJajCyyC1u2zaTBQYasdg5QM86aiaBYPDyNKDxHtv4v3YHbzZB1fX57vFjd",
  "key12": "2RryBoSisiVQ752UoSXbwjAMMgsrCzCPoKBfdR4LXmNKRZfD5kUBQeRn8cxd5zDyjXKNQJEu29xAeiRuEMYi8e1x",
  "key13": "4WQj5z8SuZ5Qf3tmiSnjsWXZmCxm1QrbCtQNZEU8Ve3vB6FH8Edw8gEoAbPwsWiNPYLezFvb7vFCLMyYXLpyVx9p",
  "key14": "3UZSxjweGzkKMkwB57618seynVUw5v3SYRJZCNpkZSvaSLYUEh1FU2sNLK7VDXHH6txYHCErUMMRGTYyKZa36Lpb",
  "key15": "2vxT8dkseHqqxjpWbfowUupx9XpYDcMh4AWKWMgbtafGGt8z2gJ5feEWXV11uUdCx2NN8xXribJ4XDRgjGADo85Q",
  "key16": "2wp16tL7ooDAbud4sjhwn6LBCAiJFy95SED6AvwHpzmVSgYusmXyCoU5jfG8QD843WyWAYkHqsJ5qqhoYShwU5dy",
  "key17": "3b8ytZsBQGYZ3En2bFV2cZKuJDJhboEznH3YquPYUGsWxyCbewiAYxNdvAS9XJEZJpxMEqE84M2jaeLSNr24onB6",
  "key18": "RYMqHUH7MisBvNbVZ6dUKq6Ef6emL1fTp535s11kZv6s2GrhjhPjKVx3DxAvsecnTQtbVcktb1tReWVY2KHdwT1",
  "key19": "3Bm1MMUVSvZ6BSAL3xbPSBLgdTLXDfmdyq2tkgiKPaTW1Au9uEzAFJSsGSvB1RMCfiQCGPF8tnZU1KJ6Zb58XSY7",
  "key20": "xWyhwjGPMAAnsJh5NK5LMmVR4KHRcaXPzASz43tTXCBT3AEoQmnWgJPedbvvkerLns6aVAsDDpjdZ5bksxYZaa2",
  "key21": "5ViPSWk5NAL6X2PKNqD3rHiw8gE6NE7KRT9zknWhuJYuUPF74Wb3cnVXyLBZZy1gyXQ3oVBZLnrqLviZsFZKHG34",
  "key22": "5dNyVW7qKyJxc5yoxYdk4KY6BwwdDDotLsHUaFSoxVQMoSxVxXQKKm1qHBvB4KbcLGmBJeQ78uA7vQt3hBga9qU3",
  "key23": "425LuY84SHuitNrhL683NrbzhreT6QkqCQ8tYtLDiJY8TWQPmBsbujgXhB7uZcJwn3rBfgLVycdpnh2mgAbDA3CC",
  "key24": "bJnrJRiSfNuHhHHU2eW3khrVGg7BzMKCcyBzz9KfuaHpkeBLs83VNuYYD1R1sEY8mJ4rXkWWx7EZL3BfdYG9ZT5",
  "key25": "3JPEfNcSpcaAmdV5EQYXSdtHBfha7FUZSPCaZVEK4y5mkpWzZ3NPGsC3FHe9XQnAftGN1R8oKxnz1YSMFt1T1wZw",
  "key26": "3EQTaguL3TTR44wmeLmzeT43VQz9mCc9DkZePDgGRyf7Vj2DT9GwRa9gxPbF55dVvGSa2rkXQpFAV4jgMK23yJv5",
  "key27": "2UonsbEyaZ7LuvKvaPRZ1kZiWLg6FGuNbydvsv2ANYQxTAJ9JAMnGxyc2FMW8KMV1za2BPfzpbNFfpnJx8KiX5ss",
  "key28": "66gpmyRbzKheMZb6534HKxqUdhEwuLA34NSo9QpgHz6ANUCJ4RfExnPQLC8EF8BxgdsqSJpGw7ds5dTEFTwK5BYs",
  "key29": "5oDwDStfGZU8UV3WA3fnctDRzozMA1Lft4DKtcWif9ZYKk8AMqQa2sV4ENbY48pofPhzBHDCA2nm8RHGdgMFVw4e",
  "key30": "2PPxtQE4frs5HwXy3XXPT1epTuuL2WuNA2kZkZYJ2JU8h8S3kBZPDqLy9BaQQLcDMAMVNpHeSQTgqdGMZThDHozV",
  "key31": "RBGd2SB3mxSASzRNQVtPCQRLGz4PnuiaAc22X4Cf1r4XMke5AEmtVJ7C3knUSwZnn8yCjDuCwYgwwGLxN6UQn8a",
  "key32": "43kW3SKwLkiEsYsADyRbH7n4fjaxLjUXgMoDDL633XS2U8E8Pqq5KGQtug5Huqk7YZ7igUbVB9fqohXxQzyfMKL8",
  "key33": "2kNbLmEVzuaejp8vJN6Ane4J74guXxZY464JFg9GdY1nZwng7W37pHgjiPwXYeytqk5ScP3kCRPLLA3rbPWD4k9V",
  "key34": "4F3CHdWrV2M1zaUqLY11Q77qcYsVfkTkK5RrDksNUX7HggLLuzNveptzoHBmiNnxY5WEDNuQsRqMWYhZUStTmh3z",
  "key35": "4ebsRLxHi1RztscuPnNjc917kUBWv4p1G4fKXmtW1vBHJYxcAwo2jjkJNRARFaQGEhE7YTTXba4peMYyCynmQec4",
  "key36": "vVtqSjPfLHoHDjDfhS4zkd67HAHf4pNBc2oFJWtGQhyKqDHJYsC8iTFNt2Ph8wpgFKTcQwARjH3JNbaKpPdYoCT",
  "key37": "t5qSW7568DSw74BMNQzdWqjrgHW2ToxFNmHLj5HEU22BbH14M22cwpZUoNhL4XDRXpJtG6gnSJ8GLeTjeScPHpc"
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
