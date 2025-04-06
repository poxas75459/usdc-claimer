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
    "4r4LhNww8cRRcxKeuPDHxaoiZyfBPuL9sDRHzwkRJNb4gm7pF7wwPMddzkVP7mieQbWQfdzMfuEyKHQzUTnaVPje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADUKjNurPtiRP5meUWLJ8SX4vd3VoCMtbBwwWMrUzyq8w4Nnc4HKxC3xDEt6bhZyHgoCkNJPAxDGXWguH7ifSFL",
  "key1": "2UGGXaLqT8Tj1DUxDap2w5SvFdcprVk8E9espePerVVqbRTXsdMS4yTiMncjqNNPmCCNaJnoZyDdGDV3WGUJ6dUJ",
  "key2": "5ku4ofW46A2bUUu9dQdzr34vANgE5TPzX7eD6VBuzjzcWBXvRi9TcXkZzNUZtMesjLU8stC3DVxxNPb2Dwn3G9Vd",
  "key3": "2rQRNnQzQED3WFbCLvHPAifHMPVu9AttdX5Ct9JK5KQ4H9r5EqdgXbMXc1eiQMELcuHTMWMroPsZgYJie3YnBNk1",
  "key4": "3Sj8idCua7tUtdoGdiUNbKoRMikxLJoKKxSvjJQc7NEEThL3hSiKm1XzAgKrYQbUQVggK7QdMVkvdqPMK5RUMenw",
  "key5": "3ep9CDCdtUGcxnU5sdrm5oUwGSWMDSLuSwwNEFRu7wbCrS5XXVxou3B2bamrdXsDizKW6E6fskzM5DoLWWHp3ubs",
  "key6": "5xxYTnTXiW27JMYNntSrd5txV8QV4fpHyimMiZQictJGLw75XEPSt8XLGjTQwvmJzNUniAVV4M4taNyYzbm1jWr3",
  "key7": "1NCe9AKWYdCxsnGcpCBRVh7QzqeXdD2fJpx1KTWpMeVsPYiFG9eH2BxpHzWqH89X9aEHsip1kRaJ7JbKQ8DJtrT",
  "key8": "41dc3s4PDo9zE5uWV3vqgnMWEV7QgaKSHbBXBGdmWhyXCVeUMPU8rVbHPLj8gj7bhYHRRKgjgSS7mrvCun7HjexG",
  "key9": "yWqMZwL5VH8n6B14v86hWtyN413yg6jQC5a9nMgJ7EMm6arGFGoX7k7g6Es37MDu8wPg884yHyGNYqBRSFcAgML",
  "key10": "3RD8LhCKonWu3Z8YdVuSDqqTYmCRGZVANoxCNaQ6P1r1az9A1eE9SUhzvMEJFEs8pXEPLXtVhNLPshAfmMTN3VvB",
  "key11": "29so6h5D6tLkEBFYjkg4D2vJ4HPri7frLHuFRsk4YQ46zzyxAMYcgT4taqRSHSsH8DPLxx1exUMMZSTPZuB2Azvz",
  "key12": "3vgwoBKRLksHEtCAgxut4TKybwxEKdWxhfy7FiT8cEa4F6i1ffGz3sEbCNDMm7YHpGDA2minRnvfPyLAbGFc4EGR",
  "key13": "2s7MV9CbLV2ZPhr5HFkUDCAUJAivnJMBFaJWQuih7RPZHc9DF1GLtTqUbiXFXg3w4KpgpeFBPZZXmMPJkjUXEFVM",
  "key14": "5zatwrTxC8VHyi4vduxsixwkowF12ncJpxqh51wYkjVCymzSD6chcfKZM6cm4chgZkZmzGatXLbdfPJ6LUQT3fbw",
  "key15": "5mxjynZCRP2J4LpUikQadHe6C4SttS4idTCfHTZUx2A51k3LtARo35QfoBCrWDsqN4ro3LBYeh5Vvwin1P4nmYAz",
  "key16": "9sKkBmbE2bCoQFi5gM1EmU2xTDoZcgvCoHZs3kBU33LoJqv3MHNtRXLr2KLsmChxeYCQPrAgxRZgEUtqt5hfTyZ",
  "key17": "4sPa34UB9mEhxVcAwcXkF3vKJyAmUM4kLEQvfMEPhioRNpSursDYYvaYknwkX2ChTtGgNjCq2RjRQ5veKWCSqqiJ",
  "key18": "53jVWKqqGzzAvH6nH2ABpAfmms4kbrbuUkd8YpNA7ydbsmXDu2dAa6hSGyJF2YHiuoKWMLVWggGo3yqvfSxf3cy2",
  "key19": "5v9Be7KourRuDxceBbU14FWn4QB6cbb3duDzXi7QCHxBjkNtR9JbE1jcEfgj4DwRTtT6hM2EwvwVi1Tb3rRjpPse",
  "key20": "3eWHFX1D48D36SymLxxUvSyCDxjGJNG9JVbDM7bW81CyDYgWoToCvFEh5h6VYfuHFrH6DkhGQN58YAw3fBUcAott",
  "key21": "3W8aR7AkYY7Rw6S1DV37zgCReM3VCwfAiyKhQVJcazMm99cYhwVU2uGDnNxEcbo52brhDBwaKNfrTmBGdL4mZeDd",
  "key22": "ntUs19NbX1VwibXHs2Seowi8iLKxBfDQbHL5rZ9AmWfJ9jJMtYGpEEjFbv3ZZ64pVodhhcSDDh9DCGU1rLUaXpm",
  "key23": "62HRdGZ5FqUnbp3R6bAaphyfGBQ8MHdu1qH3gaft3NJiisC7wrcbVBMfnYwCy8VmFmm7Zm2dD8Vz9xqKZjg68JTF",
  "key24": "4q8XUVYeQUFj2c29DswKgX9KPBVVmiDZyVRXpBHdVtRnkNsc5XAsLAbLwbWKJ4cVJscsmJscNEFQ3zZghczxakYG",
  "key25": "5znvn3uvn4jWv8giSZWvrwpF825Z67Vp2xtk8LfzZVvbXohErLGyNuPuQEd7qbrJLaLy9N7BCyG8ZD1F6y5YEY9z",
  "key26": "4d1boE4g16jWZK2R7Eazg8YPNeRUnK68syU5ja5okzMKZT4YkHG6phC4psvPwLLNvd68tCGd7Sr84wSnjrQ6oygX",
  "key27": "5GrHxYty3SyKrrcT7bZWY6BGhbndve5hyEKe545uVbjw9Y2mh1FeGKBphxNd36EZk3Yu3FxmxCpM1rWba9LrLhKK",
  "key28": "5qxrLvsECABuUV8Ng8XKozi8bA6dquqJWXoZ4nsn5AmFHtmii9obXQXLz5a6qWmGL7MtPNjwfGgYkCg291SaPXse",
  "key29": "61JcZoq9MkJwDRy1xhhtZZFe592HJ2UNqfxVKKVgGVUqxGmECRbb4kwHNY5tMBPcyWncHMGUsbwgyV4KsoAGBcYF",
  "key30": "5FnqE1i71BnXtMx3YiDZPR1JeJpU3pdYdwupU9YMbKSaaGyXjZ3tjWTspKRwFQi8nqXzbXMKKppYvSTEvYZUUMbt",
  "key31": "7Vu4Rtdtk6a8AND8aQRLmZJRTpyNeqh7sy2XkspK8gdKb22ruUiwgqa8msXtxNnQBqHpKX5YUttBaCF3wsNogLj",
  "key32": "4Tt9jPuD7t9RHvYmHZgEAjprP8dB8FRDeZXuCCaydEva83REkLiECir3xodW2uxRQSw8Qor6mFYzaVibvqb47oQn",
  "key33": "4gp294BgaYPquUfzPCc2j53w2hpnVZHh75pz2dMui1cdVmoz9B8teLd3xEmJg4AGTZdxaPe8xXLGCXC1cWKvRyVr",
  "key34": "3wAo7tbvmDvPQXNVS6syoUvYYYhwKkh9yk97qnkdj3FiRA6gA69ERs6QAMbdaJypSWbmVax4AzTzmPbKCh7LyFR9",
  "key35": "3rw92sirsJoDZpFZzE46YhsBaMwUnCGP82QkL1K7aM5zSe3qyQkWQhGfXxLVtt19MTYUuid18rkotKZKDo7mTgJs",
  "key36": "rk9VKtmu89QPxuNBoenFR7qed7XoXGoKoEvUf9DWTBUpsfMwCCm5TiLKxV1AHYixFW3djHNWjwB897NUz7bcJFi",
  "key37": "3vVrye1fyZMZ6CSdRBJNKwCMsKjMZn4bCzJve7cscbcZabpeQ73bjQFhLzeFCE11Dpe6eDrKqNbtWs7mUFt2PaPs",
  "key38": "5UwyZYyMFA4ZUgF1kp9sRFqY6jSx6uU9fjzwSFCmS3tMkicUJ3CDefWzsGHc53LQMJDERCMLnfiCmWpygX4tkTwS",
  "key39": "2zxmowEWqtwaUrn9GtVAyb2KSQgtPuBSdAssTGG3Thj25EqhFsmYeKGxvHXpUAvoptUZpHQ5HF7PAPJCw3djbjZE",
  "key40": "3XvVpxksLr4ytjcMbX1aJyTKqFKQuuEY4xX5ih5R4R7gkRhhzVAV3iaamBX3pFtpktztRRAtBP5YUe6xYChz231T"
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
