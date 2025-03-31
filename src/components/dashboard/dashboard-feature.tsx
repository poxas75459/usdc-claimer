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
    "2FSC8HFh5yRi3tarWpESnpsfdpLFYCaCb5WNG7eBgDgTizh4no7etDzh8HwX2NnVvt1sz9jGNUBUGcvcgEveVibw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fecfNpu3b1o4hKvQhtVH3iW6wQytxUTErRZVMXVwqfdN61oQ5Fwpd9nPfV4piQ88nxXuSvtPCszjJ6K6NTnbmci",
  "key1": "3XieRV6qdcCxZE7G6aeYYisp389iDtDKtntfCUW6pGQ6uAXQ3qjEdjZVqrw5Dd3GwcABvjVgiLDndeWGS92sgyfM",
  "key2": "4PJZepQRdiJjcv3EDYU9daDVQTpzvKMKxbssHYyRWXt5b2dSuiXxjggeuD8iEESCNafzP5osqMZyVhnVjTny1MZZ",
  "key3": "4Q3ViLZxwVxb2QNapUqJFfi7i4FWaSi4cKoDKsn9WhiTxaZKYfYsWRJzy3o3BiwHNqsLH7voUUb8tFm1sVfWNYtK",
  "key4": "2QLPV69wFVRh3dWsayNpkSFRBoKqXennmgdnhkXXaKuEQKUeymsSwMmtYtaM1bfTAvmsKPJZgEbwUP6Uvn2zYt6",
  "key5": "3p5QtT3b5dJ48151GMSKU4yAbF1AuBpu3ZUFtvbjcMUNobCKQsn88DdeTTuYwVFjAPgyTExDcdogiFMBW9Nk1YLa",
  "key6": "ikP58yex7wTQ7V7eitu3LRRCcXNkfAbu6Lq2ESps5sY6NADu3kX3N1XefXjdGM1vDzBkLbM5wua1oJjNzjf6Gqq",
  "key7": "AXP2JgTxrxkWBX7T6soADwtsUSpwmokTYtsCJ14bJiygLRAUKdSspdJ6bxayyo9osHQPNuuztgmeKJgK97izxne",
  "key8": "FryC2gGC6HMvyEcRKATC2iYE2PsaAtudEXCWQd11uJMbugJyENpzBcYPcn2NFNsjFSKB6nwFYTUxWKF8QQ8o5cT",
  "key9": "2HJ3KeJ7BFWqNW2FZoZDhRAkHiaL5MLNJEKxREYp1BwzdaLmRhvX9XwkbK67c6jdySaUbjiiL43Nu6xQHRHzF5xD",
  "key10": "3GGXZS9tcmo6yxfcR42sFnhHnnod2LQq75ptyYzYZoVx7UaNwSdA7Xze2Jr79PKFxvZwHvmgxrXxYwyZiEDVcGgf",
  "key11": "4HHugxdVXDAb6MsY4rtGpZQZUxRNTQwkro3meDiQoxh5uZEVnDde2m8128JLbB6bFTsbwZmkrVy7hxahGs56ZwMT",
  "key12": "37SaPu7eeSjP7m4axjJvd79C5XgekYW8ZkRVLwkgcDFyaJVy9jmkCmQtKm7bfy7McQveLygNEDSxdUGmnUFbKsiN",
  "key13": "47ufyFbFGoYE39vmHt4bFxsUVKzU1ce8V2gLgy9Yo7mhW7GXQFunxV398AmciLMeRnxPduvU2SPFcjWuqoht39Bw",
  "key14": "CUH8Gtt1bdPSEufgTfRVGBWsGj64ue8aSTCLLBZhigMnA2Z8ANL7K6kk7MJyPdm1NzS9CyptB1NXxKTJdQ7D6vV",
  "key15": "2bFYCrG9jAYruXL4r7mVGxqQ82QkRJ1wVhEVfyHQTf8ZGoC2nWkxPD2GRJmjSdw7nFHeQTk9HSQQPiBCVFdPPHkQ",
  "key16": "4frG4sayFrEBoduK8ipBp6gwQJfc2V94K1x6b4XVDXjcatqBfj88NinqQ3v211MiS49kixFBW9M7XkPixgNSAHdJ",
  "key17": "ydjejKRMzunZ6zMhpubnQxFk8DxMxBnQV9aDSDZQnUdBRpwqrSrkppmhQBWVQbMgjqbrpHUd2uxMdHhYouWbbk1",
  "key18": "5oetTwi5iLc8RcXSiz3sN3V2rzZNNbKbNJVN6aTQMgkHNT2KHhb24XxU8DNRJnz1JcZX8h2XyQzSLR6a4BJQPUYV",
  "key19": "2EZqpCHZ5awTK8pF6ynL5AZdkEtwUuui5FSmJoxCxBoq5GuHTeAL1DwFakXzR77UimmHRVc7bDTY6a4JST1VXGTn",
  "key20": "2b22ekQHs1aQy3b8kpKJJDj3LJuAc5fLwF861dTnQ77BLPuYqcnKwrETqjKQQyG7u28GV3tZfDnhwTWauiFnLyDm",
  "key21": "2X89WFCt9KqwW44H1JEQKxshtfVBkHkMSZWHhdMdzFPNXZF3BBa8sXoGAKnWghdKmoLUTqHf9vuQdp1qL7hBS92N",
  "key22": "3GgvhuNUGo1ckf7B4Ly7BtAdgndfZWZksJYb6qS1TLvqcf2X8F47mHJkwQD6P8MgNcWBYY7GEMbMp5hyFdNxscEB",
  "key23": "2KtkgECJbiSu9BdAWxWPdEKPju7EAK79a46aJaVCmDJRJVYrQhUHyLCCYwzvAnL7b8acsska8bHFxbmBmDLSGT5W",
  "key24": "Lm1wbizaJtzzV2ebV9Y4p7gMuTcTx8fRnd4YQXBNX2cvRmQ1ShGWEuGyEkNbNnYuxrNmogrx3ZNcRb47XEAiEPW",
  "key25": "475ATyQykn7euxwXz3LEHBwfPShumxRzfvv5Fg7A6kg92YDzvuvaJyCrQLeqgdHhU8s9QGUv1qndmStt1Bps3fmD",
  "key26": "3bcJx7hAwVDhkYok5gYGQPXC3vQt7mmyHiDEw8DLn1WG1yZb9kJseACpje1XjeUvUxEUdn8HtaTgmwfD4tNjiVYQ",
  "key27": "4tJpJ4ahvkLbb2fTsUUVjgp6xu5G5UPd9U4NagymYSH4aRfh7FqdU2AUebjeD1yxehtNFcqzyvJGYoiZS15yooXa",
  "key28": "4B9C7k8SB3D75edW7YyByASvBTjXhUdmWdhbxr96p79cEPFQQoXccta3MP2qCe7Xr4VzWna9Sa4tGKQnpPxzznMq",
  "key29": "5mc4RnjQsXe2DtGumsVFuwiXext2bP2dCWvYs6AL29dF7g53crSAiBn9VSXHPTpnRyh1PigArFKnCPhEfXCA9V8Y",
  "key30": "576fipXPoGqmGWFqarTCavtkHxUC5Gq3VUgxjvFA9z5mXFKLfrpfq7zqEYpGBg3hsEc1gspSvjuQ9fbNcoXLN9VM",
  "key31": "BZZiBmNJNqgLeex2apSqtWZ7HGvHAHgwy7xe21m3SvQiHM6y8QppcUN3zanibzpQHGkAJcBtxWLA74u5Q8AwmFa",
  "key32": "2Wr1VA8aBfE3jqLS35MfRevUptHBAeukhNYa2Qb5ca4nQSJm3guRc5h5YR2UjSQbvZomD44hcAqPEDEJ26GzsvLC",
  "key33": "4Gw1XgpieQMjpfkcZjY66eBpACDoiVfLVcXw5Fhn4UVsKDdjruew2UesMPVfoapbp7moEwHy8UEFHBhCRPbPzq79",
  "key34": "268K5M6qq7VnVQVZ9uhR5WyxqgGsq1E277rsYChRCuYkFYEjMmkZogkyWrfu3xrp728nStnrWGByvswpkG4EU9gU",
  "key35": "4aA5MqT1Q4phycknUDCMEZUZFcFtp2BNWyoscHFBvgGAtpgvxDfT6rpSU9DFKyy8uNew7HpntcmSM481Bxqx2VCM",
  "key36": "67kNCD6c4B3PnKAVLbQdSJKBVK7d8csgYdLg3gWaXdHEVSnFLGyHeCwRXRBKr9hfdY8ns9diccz2rtfsgMW61L27",
  "key37": "w2Xh1wrz8g2NVNpYpxEGKX3fDhysbx5DVfjkdo9c3E4XyFFzzrgW3y4DQ5F8QGB6nqyhoXax6jj5AicMUM7euRi",
  "key38": "GcxQm9VKjQtnPcqmP7p8sv89cpsr2mZNHyE9V5yPbbpDyp3Xzu6pRni7FT5dS98oSQTqQhqGfRRdwVDAZhSmrbC"
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
