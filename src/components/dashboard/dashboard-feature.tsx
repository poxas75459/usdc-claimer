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
    "58nC5fb8uXipWdFXxTbgDR8D6VTsyjWmXrPNbQg6txJhuSPyMUzdPtq8XcjETryR4QU45asKe3MmD5RLgNddu9Aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zh2y7q7PSCGwC9Azzjr7MVvadpA6nKYCePDzv5KQGWCq9uXwuTFZA1NPHuA4GgKGqADZrpkqLSB3ZyNuTVAXtrX",
  "key1": "56LgVuYKGeaGSyxCGjxyUY6fwbaTLb3WBhravQnwUpYUZkbgh18DXxroC7Ndn9jojZc5JFzprdyYQzEWztXNe85V",
  "key2": "5WkTeRbgek89jhUVt1HSMMss5WGz4a7DqPRdfyfJ8h1mPMLUra7ptEHsFTLKZXso97qYyMuh2Hrf7JCvmh5i5qrf",
  "key3": "4nNjxg7SUMYaDcDcZYR3X3FgMzcR3gegSkN1atjZZQ4tgse9kNx3HpTzezd8raUj4JkRu8Z21uxiubUbRaYnKXme",
  "key4": "3J6KFf6n68CTC5bWywpjjkJHM2ZXfrr7s27wc1d2qTSS1bMVC1B9YdScxWx8xsrqJY8ngvN8UWhmDkGdQQib1Vwy",
  "key5": "3FyyFffEECp9jmRayCgxpoCKGkS1nBafexAsJHKt7GN7YrNB56AuaFZDrVtkVMqLcrGHJ8C8ZoJqGNrvBgV2qVR9",
  "key6": "gZkg4P8yfHH5Eb8yRZ7k9EEuM1bVwNUE4Yw8koMt5dZdzeTZhVtV4jCRFW5bi1ELWWCXGuX9v5khtYWMUutXViG",
  "key7": "4PNeP6rqWKAE341MXXYssUvF6FGNmoqBR3DdoPLpiT4bdjx1NVBRyA1iQFeZXvYf9RveSnYqjaM316gfknB351aJ",
  "key8": "RTN5D6C5yLt2m4hbgaBEzptq4NmghgaPg3BCDfDJ9izEXk1u6gxMvBc9AmojMdUGDFhyjYzJ9HkWB1izeFj3UN6",
  "key9": "4z3HDy5a7R47DSKtb6FDeiq8xBKiXQyGRuSHQciPyETk1vRHdPtrosMxx5ghj48HGyjes7YuAYzw1tgVnLKuGKN8",
  "key10": "5TkZoPzJaFNvDgBAMuQfB85go936z76PPe12YTZELutVuLc2wATXxFjESz9Q8uWXAS3w7FLeBFXiY8skEyMDyjF",
  "key11": "5eTeVzauQeU9B5XN2AiMnDiabDwSMMKUwitoYADP15FLixMZCMZiqTge8JUqzj4YAbiSzjrbUc5wYv9pki3uAv7N",
  "key12": "377fGaPtQbBnQb4dATSBCAzwzyD8Yd9amuXFeptjKYX8f6jhUUbgtMMDme34kVqgZV1LuZrm8R4UwY9t4veJUrnT",
  "key13": "5seSkCfeMVmRxRcLZkfuevaKZevLkbg78y8wHcNGKwP3tDeXjAfT8yHxUydxv3Mt5oKGTjRxn4MRGmjEqTJoDX4X",
  "key14": "22dCEpn6J6KKfJpCHbBuWnXcReRh5tUaJDwcUcjpTEkWpjAybGZXfNwu9mzN4cvznR1eey5sDehYqjH2YdbokU4a",
  "key15": "5k2BgBfX9dumN4L9zWV1yyDWVtxsdittJNq7WniqMxbMKBr8JgpiZ9pjwRENs2DRqZTVmXLXxBT6pXwRL6rMNBjD",
  "key16": "2hctNCGrarC7dRqYBBGgBsNvvf8Yi2vUiiK63nKzDVBYmR64i1kTudBad1DU6yXZDEo6C4udqLMyQxXiJaVYmKrX",
  "key17": "QDRKHmG7GQjBR1YRCifa3LZ2ok4zab1H6v5LLT869SWtnMM6r4H37RLwzMmNHqq9cj1ub7i7F8FGDMovSNj8ZDo",
  "key18": "3osvnspboBPNqReW8yYvmWndpTU8NQrpHHBrciRqMbsSZJZakKm49qK3wMxKTr76aWXAzxEMoCYdW31Cf6WYDzEx",
  "key19": "67LjLaXyw1sYSeznQ8mHp8GiARtXYCuhpQM3yFszLUczB4akLrrePd83TbgFt2iVARhHb26hXmidaYt34qqWyWph",
  "key20": "4DfAhFNBh9SCnjvkZWMWteRqzdtC7ZqrCU7nvnkRNH7fZ4XLrBu2inPoV9g1ciotRXGSo6vrz5ooYJsuMYgAHdcg",
  "key21": "4FWbk5KpsCgNufo4apz8MSb854m85JR8wRodkefgX4Af8bW6z3iPyRz2SLTC1z7inbHBxY78ertLRLge3e2jtzyc",
  "key22": "4UPW1TfGq13GXjGJNyCqYidfSqdkMSUFqCUJtjyDr9QmmKihtSpFxWgeeHm1xpQ7mJqz22zAtFqeM7KQduJu6RZ3",
  "key23": "1avZKzd9C1v4f7EPiQQqcdxF8wmD9CGyqkNaPgX3ZpoJtnrj89EtdSAkZc9gqGvLsb9MuQ5FEPbfL3QJNMDVR4z",
  "key24": "4EHbJgfuZbL5hBzizLL9rRGdZr6VekxcsZL7ktmPUNEztSML2yPDfHNdeg6CxU2NwFhaw1mL6xheqR41CvMT9a46",
  "key25": "5RCJi1dEAm5dKspvy6gzYvB2B3xtKy6ciwcDL5GWxWAMhGL7aJcFdyfmDCABFnUm73DXbj8eA2WBmNCLV8ossxvL",
  "key26": "2zHACup4kq7YifB6h1ixi5cXc64nVhhUF3fir7qT3eMyMgYt5cwVjyFPpifReEmkbRhPaefuony3pNmXg5fnxXk1",
  "key27": "3aCzeMHZB3oDsFxkKTY5LyEkEPyxMtJdHAMkfWY4NBQ8HjsoYVc5VB4PkQqHSTJesKHZSMxiVb1gJtiuEZcgaKbJ",
  "key28": "sQ1jKNtHsSF1qbmYJDqFGg8QFenhTULfSmGesEvHzuUUGGtm77G242u3VQtLvBAmuVe1hWH4A5gPuEj1CYrEzkg",
  "key29": "CzXL5mN2VRv2cERDKeef9ERAEwNHcbcuWHn4kPbhZPmSnfjhWaL9vCDGTJPPz75qLYsixTKAJAX7ZqvHBWPK7Zt",
  "key30": "4h4kwJ1n47UzuQrBD4nUyweD4CimkbTkuC8EnRNqSEiaTy6ukyEqbDxd4dHtELF4WsKT2h9VW7L7pQRCsRBCGjLy",
  "key31": "3PUFaikGgpupvtSbRq2mooh3oyS2fmjYo4E3M2rARk8hL8q6o6Es2Uw4v8QV8R962NtDLHbxHrQcestvf6ozM8v",
  "key32": "57VssFmi8P58jqtqUJp1GrebBXGXMKSkvYrdQ3mEmMsiWSuiwP3HoKYyeVfHgur9KJGRAJB423e5SFuSRgiFWDTp",
  "key33": "2gHMV6Ze9RfrFDUXox5NPjA6N9roHYwt6AY7Y1XLP4PVadp5P9UABU3NAN1zcpW5ZdsfD9TRuihugtGTcQuVMqv9",
  "key34": "5iwJGF5BPtSKwUUQj2DXnrf2i6WyuCpxZwkRRC1LabwLQJqXDNTgvdEXm1sLXq6msGDxZe5P2eVTpSffcJb6ybFP",
  "key35": "5Ck36cwY99kpGf1WW1bzMRYgFi4B7gBB2xREaGPBfxGTBUpP1F1yv99WrPcXSj6ThqQ8uWjuse62VSeqrSuYsxZf",
  "key36": "4iQ791QjioByGw7jUp78gEpe2Vgk3FdHX8gWHapknBXxSv3g4xNK4qJ4VEFpdbM33dL9RGs2WC9yNKPtmHqp8WiL",
  "key37": "638NYyupFsuD1umdJgBBEVAmEq8Hes324fAvB9jL1ZnzrhMYWUmWoEBU22HGAusdXUQLL5uXNFNXmf4TZkgPZHp9",
  "key38": "isPXpByXKnGbUGL1GPLvYFW6wrQRRL6MibWRUzdSrdgDqdi6ZWvSe6PSc1ohxz2peCex6uZS6y465MbqipBe4MZ",
  "key39": "5VuqbvX7Mvxy4kuedDbTVdU3Mdf1BG4Tutdkm7fUTREAercvtfjpeNKigjUXEm1KtU85YFAvS5oBqD5gTLPEs5f",
  "key40": "2HPuofMDtf8Ma1XF6Ec8qou1ZpgzQ8DQAxMzdSYmvWS6qfP5FXeFMFctKPjHooR5A6ncn5UGDF4PbjFiCkkEa83T"
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
