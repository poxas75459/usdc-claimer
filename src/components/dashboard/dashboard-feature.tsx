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
    "9bcfbycKu1jyYdqoWLdg8XPRaZiRA16XnFQG8iywchLZFn1A9oEZKpLgj4HxHHrPsHzmCfYeJq14ietHakbX5sq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x471ByowurT1BQjatKg1x2bXCSbMPuZWbBvnQc2s72xdkKsG5BgpR49yw1CSKYDCj2ssQ1Uy48juLjsuMpercrZ",
  "key1": "3UsQYVdbRvCpUEVCU7VJg1Je4RgjLpzeL3gQcChSWzBLF6xwJfu9Us5xtZnvBwCSojEifqhJSM1vyQRHRMhocmgT",
  "key2": "3GGJVyNQcZWt41L5tJsm3dgb4GohjgjMbGGc4G3pfpTabvetbxWgH6974BwvaXEF1bxEHivzLHcYxKY4HScgjHvE",
  "key3": "2jRtoXmJeQJkSjqeHSBkY3GQk5eFA8e6Ydtsb7baTGFBkpsWVzScwXsi7sFFom4ScXJiA7CgdBt5XLx1zFkEW8Cp",
  "key4": "AdcUhXNS2rYqNMAUo4UXKhWrZSk4NeJL2FGtfQk8WKHVg9z7RJyvaLMnCxr1uoFMBv2Pdhq7qvs883Z9nJCrKtZ",
  "key5": "MN34uF5DejpbYTwGcz7gMy39ziTCFfVA3KvhxQSaNXi1ixtS8R1oAHM6TN1UYHxgKnccjN8w3wK219ayEB7AUuC",
  "key6": "5mgpVxr4rU8AuxE2NYHb3pDw8rWLUf9d7hnCwistaje4HHBNpGwwYRYr29U3Mnc9Ue11RAWPk6C24YQE5xaiTW2B",
  "key7": "R8Np3nYGxEb5VnKTk93jRhcDM4CXUFP55WwsvWhN9goK2oD72Cfp5SdvsKBpiEf7MTi69w6W3UVyd5sKD98penE",
  "key8": "2fUMPdcCNG1mUB1D79TvbSp1FeybuzPB3LyiTB8y5paErFduEAzBPHDqrW7qYJ3aXWHRAfdQKiRfArZZ4RfXf9EV",
  "key9": "4WA8rTYmen6fC6mVGoy75cUQfn3bozeKTHXKGXichV49cWCgBdVCxin6SK9CSLXfENPQ4w3Le4BU53JELpei2Vw4",
  "key10": "5yW6cw1oquk7gZE2yfTK85UqBfgskPAhaoGrGGoCSFYLWDg4UaFSVBBc6Ewkgpu2UDbePjxDc2BNWFMiGynMFMFv",
  "key11": "2EKYUCTKB5EZVBP2YFgwLrqBwMLC3b5798a96WRSubCr9wCnf9AB8R11P3wuCn9ESg7oph94jwpb2tqP5GTyDJ3F",
  "key12": "4vf9X1iwthSxkWCRQ7AUdPNghYosMgxg7paeWeE4Q2ksNLDyuUhqEcjA3hawNLhWx2D83HznT1fFQbBiJWFSEKT8",
  "key13": "4aeR78X4owuYzBP6HgzZZ5tsGVxLeLBPpwZ1ZFR4eQjZTYAaFp5Cgs96q5P9WiNydfJmx9hd8VrWQAnVuY1orp7b",
  "key14": "4SQydDyPYestHciwyUBaxEvtMPDkvGqmNQiBGyfx4Cbzjzhd47FxWcTfZk45iGJNVwAsSK7HVfaAAWiipJDtR9Cr",
  "key15": "5SVxLfwsqRF78CuqDxEbBXMnWA3BvHgoV7oZGs118URWthusRYk6vhKJRSuRBGa6HWS7KstRQDbrwWsTdEwjm6cc",
  "key16": "5dDbrT2meBRUx2x9KtL8pdTbGkb1UgiiBEJfZ83QHzRVnsrXPY3eJPndwnqk2jXwGuUuqZfZDvGtMgEi8n8kFsu2",
  "key17": "4LYFPDQVXLJ5oz1qkt4vk54iSejadnXBGRbo4A9pgdZvLLQPQ58HcYgb1YKZYARqhSxLNs56QTdKVKFktXR1n67W",
  "key18": "2hE4CLeY4kgjzn9sdppNgytiK6BAsGJugqCR47tEitDaxwnMCdjfJWAWts5NhwP3cpm5Jx5e88RRF8iAZgoQZ3ru",
  "key19": "3Fjp58jEZaMM3jtZ4vyDBP1LgG7f5Dr1oiRznHLihbeHyMLHjmrTnR3UqB4pMtV23Qbkjo9KS3fBFmpo4FNirnAF",
  "key20": "5cQ59V5mgpseAJx4FXzxNtxyEyGeEqb2SrWpMDzRpoeHxWLKD4po1Y2X53nNe1KbE9nhAV25cnoBPW8StCasuEjr",
  "key21": "3fjDpo5jGZH79DNZXskvt6JonMtVVMLMsGfefuByeWHfusTRrddVxUhzkrTsjGeFyfsCSZLfpS42ChkMUnX8yvyF",
  "key22": "3fJ4zXQUnD4D3aaBV7zQ1X9bKtFEUo1PMuYMEnD38L78pcJhyhrUS7cH1FgeMM5iG8QVjZ7SEAoESJ1RrhDcBFzL",
  "key23": "Kige3QJbKzsj3QmkcwVjb31XJNxYgTVdi77P6eQvQmBNgbxg6QYTB97Tfe7fbybqLya32gxj8j2QZRQKLRmjyLT",
  "key24": "3naWqpyo62eGSyESY9f3PBYUTLJUh2QpQgmwZKAoq228q5UL8Vv4PfBsZKvvEayDZcd5oFv6K7MN2RQPPzLJBoaC",
  "key25": "vVAsAJneSQbgdcKz4RppQ8CSt9dCBihJy2Lcy15Ls2TiJb5eB8Ee4nSWjqbs5dRkhp3EaJ8WCSgKETco42SGLgN",
  "key26": "4zQxkr2SaaqZxi1NxPHLgV7JXxoKtbu3mmKi9YovTVzmpeZVEs84zY2XboQRfzTZ7aTPVSQ3ChCFUGkiwREcPpFK",
  "key27": "4t3mPZsnCCCQrxS1ik4i4ufw4PHvHvMwnp83PpvLx47WFJ8J4n7qyUxWsdK9vqcjnLZZ1jGaveR6mknsYCmAhi7E",
  "key28": "4MroB6KosAcHU9WHepKLbZJzUoHec7EUXjM5UHehdVUNKTDttPP5BcuGCksZipycGVoWki6KPgWhLdNrkgxrQGug",
  "key29": "45PpBSVgevTGxVQPg2YdoR4pCvmy3tiXH9RZ7KAui6YygGzTVEViscTDfLtMKfdTXJHYkyyKgw3YAC388n7qaqfH",
  "key30": "5TzhtGYEfK68QahGji681otEE7JfScNGRyH92SARs7sLwHcrjw3DKX4VXe5TYGsPdge45KCouqPbQg5gxSxgAV8N",
  "key31": "2MamaH665MmZhRhAneA5ecFqMSEqBg3DRqAqKRHz6MhQ1EW74FDXxzgrQaXyW6vticw3b6XGAAVTVYnDh9T2FNkE",
  "key32": "3MMQRtToLMBxazBxJBY5b1arC7uqQHK8xMhNQey7B4e6vMcS7NWgQxn5L1zSjHJxD7Jnw939MgWFRikNRYsEbVzD",
  "key33": "txjqduRybLLa6kf1FAC7zHJfx3M6eeF1LhrT1kjqvbinqoNVJjxbGvPMBAw4vbWExYEmHNpd8AwKDEW3363A32m",
  "key34": "4TCHVQgy9KxFt35Fc45S9HEJaaWzwERf5K8PcD3K8dBzqYJvATQuPLReGfUyY6Y6e7QuySHmhSpfoKWNdagfai5m",
  "key35": "2CRdVzVW3xtfrZDBUCFiTc9WSskzEXotsMUGRQQj7Xw6PFbpuAjmc1RKVsGr9Xxc2LRzHuANm1FSXB3xXKDFY1To",
  "key36": "5jqJkitJUgo8gknLCS3fxEQPw5w1GW2tFsnAmkpQ2UhEgZdiQoSshVCPEQys1HwV6HfsFXao9LVmt7Ls5U8poHoa",
  "key37": "5Cz47652rMDrhErURAu1v6W7bCo7LNVcsBgZiyKWtLBbCHXjpi5vzotBoxS6aMdLDUPErM5u6c7VdaQzUn8FXzpX",
  "key38": "33UPwjj5FUhG5iyn5jmSu646Q5YSwwMMFQN8go465eJYT7pNCWnCzigSJPYEbaKLoBLscFo9ren1PRjs6oQfQzxg",
  "key39": "4UX2vPG6x6XN2Lfy6ZXcnt8BebniyLrbsuoPGw9z8BotfMgNARaX6VgAvoHRmcWbqJdkaC1z7YB7MhB1Cp6YqG8h",
  "key40": "2mt9BCGa7T75j2TcQMkKwRYLj6x6Wi3eNqrGki3jB3YLb15qaifRfVKW6BhYmSvxebhTzUnQYTrjrmfsSxEekTVJ"
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
