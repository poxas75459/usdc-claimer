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
    "4FGduGN9aDFR4L11g169p7TuZ3V3mTjoLWBfK3c25TWUketJdLp6K7PpBH5iHjDZ5M5exKsUZwgkb5JFkMMTzzjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eBkPtjdwyZEky9MvTXucU9DTysYJzZBTW5eq2FrmvRBFBRYDXC1D5igdVhKf6L3N28upthEhThviwES4783tX7h",
  "key1": "4FAkDPr7CHR8bYcb7N3wPLfbqjb8y5y84ySStHcdpATB8Eo4m27CLQqsoMHBN6jEVbzZKL6ZQsZeU6HPEtmhop6y",
  "key2": "4xMuNY7quyuwCG55Z8VNTTQHAomL4tiLG1VEEYQ7AF79Fg64qkfuDYGNNSHriyw8Vd8wAdxURZVF4gN19JT2RPAf",
  "key3": "4e3oDdvMhDBkR9xKMSJhGBFNVaQZASD4rgHWCAT5SYmPSjXwQaBi672YfKQajzKLipnvncB4Emr68y35kGJnhVVg",
  "key4": "2jFLuG1URBFTEviL8uXZHSzSadoECTiR6AD5UyVZL3CHf2LfE7U1sPRV5gZr7k4WN9ZAMVkvwC3WX99NKhyjB2Gy",
  "key5": "3wmdYdN2ytEanV17qGVovQtbqmqgtJQu3osxAQeW4TpGJFdFxHWmTJdEya2T7AprLPedvhVkeftvnEdebcmx5CvV",
  "key6": "dHLuid5Spb3imfhvEVjCRqXut7Si6wuFu8ZLuMBmqXTxLiZcPuMVM3roL7HFMCk6JY6opgY29ct377sbHGxFeCf",
  "key7": "2E9Q3y3kKQXQ1v8HHPehDa33QRk3smtt1wAyKgC55bWFLRvv7h7GS5g7Q12xx3A7u6Ua2Pz3z5Be6VgairgcfW3k",
  "key8": "2QPRQqNAs9qTaYuwza9ozv274BXidtdgH1REExhDBP3HXMwuMC1te4eTjvgJYJr93PAqVWavFLzxH2kRVQJSZ7V4",
  "key9": "4ZedadSoWjsjCeKhYuatMFiPvT117ydVP6LJCPEFUwrpsjcDcrZC7p9Vz5Eg4hbm1Du5bwvzHxkkhuZTkhjFz3PG",
  "key10": "2TBDP82koUJ4NPGwZxJ6sTsmj3L5HvFQFNR61jKSRRXpjh36xn3auw7FAByhyLjtyYroUEzMRqXKbC7ywJ7Hu69R",
  "key11": "2zj6XcHSJkXnG55rq4LU1w6ooPssANWyvMSjwZ7vaQUxwtAhrqaDNBJuYrZCvEsw8EDRPRqeiuj7W8baPbzSuamp",
  "key12": "5cCnqkxW3fbR2VjG6GCSp3VnTatf74ddTnpeQ5HsTfgYCGjshFdRZ1UcKxhgQtccZXZMfL9A5p6BfUW5irvVrCe4",
  "key13": "5pveCc36L2ki8TywCVj8mDS9eK4jSa1K9rdDQeyVao2SzPDGVJ14XzFtSu2ohHyXpLzwAwqvALnMeuGH2wVazjAa",
  "key14": "3cLYtgftmEwWVS3HSApB2Fhz6gsQLzp6ha699ngnE9ce4XFnv7gfTF66kGk5WPbJAYu52zQMAZxY3SkCGxiVS7ur",
  "key15": "4BSaKPCb3TaLXGUf9YoVR1Y3iKxVmXdHc1jL21TxfyvNSHgnE1Xu4iGr5btF7tScDWYLRodk32Z7hE1h1be2Hgqc",
  "key16": "5kncbbK7kf8RFggB4NXxx6DtgpCL4WggHNP5Yhmo7bjDkeJZBcroRcRHDCEoSq4ESrMHtbMAxn2ryP4dcg4F9AE1",
  "key17": "4NX2Y9cKYmP2dHxJ5htSxNtrmDpxSufja15d2XsnF9KtonMmuiYCA8Knb37h3fpLQKuUcRY6avTu2oJ934EboGwS",
  "key18": "3tDBJj3m39CGyh7AfsohGDkd4dHVeZgteXeRaeZQ9nP9KSCjY7AN2FodDLU9qX6fMhZEN7d63cktjCL7ug3ZQcKt",
  "key19": "3wKLJgLbn1vuNeii5SXvYPDgdFN6RU5VVs93mpgJdQEZQMCe6FHKsjy3Ax7w7hQsbQRG9Pp6Ws3vvoTCdNVKcVdb",
  "key20": "21W6MYhGzd7449bQcJoPV3Wk2zH7CcnrxHTddoG5fZ2L7mDPN95jsdvx4yXqotTJ37Hqur7cb8razUtgzUDuiqmm",
  "key21": "W2j3uDJByj5jopsgbpy6Y2jhsarUSAFHGzjToJEGHqJfSfWTPAhwYgWscJDx7dJ1puvC9Qn6YnNGJrog7K3bT1E",
  "key22": "5WNBMBXf6xujEG9sTyaL3Sr3cNN6Wam4n1ChrWBLq2MZZp9qg9zqwHPjaYwNhWdE8uBSJwvPgKA18nJi39LnF8mN",
  "key23": "4VgqnHCaefx3yqvykhDqUwuPUzhQFbdbmJHgVSDvULzrYZGatzpcDuCULorNC6YrqmB9KMKDusc8Cje5BH43jrav",
  "key24": "2FVmw6odVHed7Nt3qgW2nG6a5irYcYrBmDS1fwf9nmvJcoZ76ykt7MuJtyqQ4NfdAPXtjXmVgVdDLLpyJNdRtDhn",
  "key25": "3g5Chbx9rFFnt81e6kdeW4x9niegdSBkfgmvP7sTwHArEKT6kT4vw3VTrWaVe3Mvj2YLBZbXFJdzimhMzwy8uhxL",
  "key26": "4E4zTMd2txDphwKpuoDxciKgAHJnAJzaZbCU9CvAxHwgXHxBnYxVpBUnYz5oER9uYxmxFDEn2JE9sfZUqPa5P5aS",
  "key27": "VuRSH9M92dFNzKc6yh2aqRR7Y6BwcSqDmHoewof174h1kaCPFKtDySvj3zHHngLLskJifrSqzRr4sxsxDRx4J3i",
  "key28": "61eztnDWcTThn5dL2XrKxTBcdpFcAhozGgfSwkBoJUn6feonZWEUpbb7AnfMrAhJeFosbJ5z6uJVg2sLmLu9uK6q",
  "key29": "3MjuiSCRbEU49XmcBpcJzJtJvv7W2EvrhVAWRRrbeL4zJWebrNkgCTRjQa2CWjgBjqTo85JfErtWFYfYK6UUA7aC",
  "key30": "2UWzqK3JWWvd2crMga7DgQ9AKRaQazgAZ63XboMvWmKrYKPe9vLrC6fmZDvM2a56XjoqzeNV1NkXNkoZCLth7Z46",
  "key31": "2uQqU59W6p89TUkbPFPCCy3V7PAq4FoT7UAJQe59bZT4PrNFsXBidNqFSxMjexter9wFaLCn1DvZfR6BwAuRDz9Y",
  "key32": "FjizgBUnksHdHbTpUBV1Dcm5fLUEv5ej9U9nL82sfCpCjx3jtQpYNgyYxiCNZkb1BJv2ZUGH6hbkTh5hiJoXMmz",
  "key33": "5E61W1EGjAKE2mzStfauLf8P2jYthsRiKMag6RXPw74G9cqdJTqVCbhnoVzhdtCEmmdW89aF3GWxtXefFY1vwhMG",
  "key34": "53rDsGmqYXZ6rDb6d1pqM2eYwGyxZ9T57dVJtQ3eVp1NaX4QWbZGsnxnVQWMAYmhDprsapnq8BwcdhL8U5hndABn",
  "key35": "3c72ZHJhbF5U1zosqxN2TgTXDtbv7jDPazb6HendSvvJrgr7ECFgmG1dZAPWtNEeVbeLp8Y17XbBjLeXcUi7LbH6",
  "key36": "3DG5ocWMjWNvgL7kkLpF4KhNKvhzL3tTC4VZeskHq2L4TSbMwxBdRfyTBUNMgWmvW5FDZDXyEkDXvLsCzJDox3xp",
  "key37": "u6BYRsHJSy15zAvymXRPwrqqNHs7pJNajvJJzMEq8wo5UcUUTNRDXjXCXqTvKymQcfyfX5AcBYMCPyfwBSTZk1p"
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
