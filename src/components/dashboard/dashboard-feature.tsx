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
    "3kEAQXbbyPDtDRuFPNEKL8N1svcQ8vru5rTN766VbZAhZFccZcxj5vzDGdB6HX92j79meddu6Z2VFh3KxqSgxBzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hDQ9iF3YSEf5W66jnrTkhqDPnRA1LJecHaqrfnCZ5mcFTkzq1hPW4F6EUxJxdimi1QneH3c7GgZWoBkyPDNBbjR",
  "key1": "Pdc4tqe2SgCJXtKGBCHHD3GUaRQq3pxcjufKcKFTs34BudkLNbiVYiQwATxTjYTwAZb5n64sbWNCC5uUFwSa16F",
  "key2": "4VrCQe4U1KT5Ppf71Kcxf7bd345afpE1JdUM9xedNmmmNAwp62XBVPxFBmCved7gGeAihdiE64EZFXqdhvWow2e4",
  "key3": "5k6ctwFncFFhDdbithe58QPkY8uz3F8KkKhBe5gsU7R79N2m5eC1x5uJtPJQdYf29NPZx6ttQ8bhFgvPpMAwfpoq",
  "key4": "2fs3J6RA8SJAnorGt9A1mrtCUBrUmpG1EdgEPD8psVa65eAV18qABzUZBnWrxZtj65DE4o6NpaEzvureBGHFSDR6",
  "key5": "5VSUCRsnaWoyTwcxxc427zydh9GrEiDSGCCv3nP9jH1F4gpigsFyWF25AbTM15iTjCkdmDvVsMnpU6d7nhinaCAe",
  "key6": "3Z1nvRfsNmFkFSCRzXRYwS3dwunHcdT91QN5CK5xLW3SsGy3gyZLbzxvaMF43sWtH3s7r4HmXDvCL3SpLQ4G9m7A",
  "key7": "F98zvoJn8EPhvZJS4qBGwMWCQBoLEg8ok4upUMoM9KwKAxhECt7N7j77hwJ7bv4KspQ7iSxp4Axi3YaLr3Fb83v",
  "key8": "4KChCadL4dmtrgQJfBKyxyE8DTGWF3THADiUm9Tah7H8MJQQ6xsjVsTXwaaRFVUydRUPU5ycQi7XneBnJhc8Bwfs",
  "key9": "DxL4tYTwtoD934AzeqXeV6q4JpsHXAhj7Wrti1hdCvfKwAtBjSPaqdyziBhoVf4ygkdcyxzhXBh7ai3oBe9t7Tz",
  "key10": "3kJBapWMCeg8uShLy5bBQquRfP9WcJt9jeXSmhRrEXCYrLABARW5Fo3tVD5PUcwGt6mrQWUnd1ti1DvsPUWZ2xrx",
  "key11": "58BAR2PSkAEjED5m9VGWiYFuq1nx3TTsoyhmjxp7i24kJ5zPdzJd1PRW76uspgkUaiWjETTAHR9jL3Gm9KgVjbSp",
  "key12": "3AKBTN9EVvXqbuHSYeaoCf2cQSLQwnH3HD35cth8bthmNh9Rf4SYSqf6Qo5sm3TAAKxVnaHfAiqAT9EdJcY2Ai8M",
  "key13": "3Yn3ecdKWozucZrYMChvySPhEXGVBgcwyZ8ELcVAgqfZudXhFe7AG6CBuG6iTYoaLNfvQswA4UKTE4JqUsJLrqUt",
  "key14": "54UXb3Dx7cFMoctFdz4LySQVyCdngxoUNgjUnbdMWkT5JkTqgZdT2X6eY1mDZbcLhMNaukF1TLBMFzNzQ4LEyWQV",
  "key15": "5ingC7zDsy53CgHo5JsQJH8ePVVSaUCMgqq3zkqgCz3xcVaCTPyE4BbGxXN17WTPxrRGgzH7Yq6ezFkiXB7knX9c",
  "key16": "39cNeMi8GELEYDAwigibrbvEWvpkTkcxsRDR9cHjXiqq2Qveg6vgAmKrTRGR3dTNEXnAF5vmqriYmrehy8jpKzTG",
  "key17": "2Zt64zJiKoGZwi5fdGiwvwHHyAkJpjAmiZQGsuvPGkLnU8ScEFin2VL7dZu6CFsBJvuh1NbynCKMQtQtAnQ6vD8A",
  "key18": "g7JRzAp9o9pUvtsLC4ojc3KXA4CXdPhL4ZufYN1pS4PiXsHo8F7rFD85YQ4AH62gAz4udWWoxT4L6vtNCue2ZTK",
  "key19": "sRHVsnWNZ7jUAgSPrbaR3hRxk4bxvzvj64vQUNQ726vt5EADGgEBr9KiaAYGuXms1WWPoWuBvSGCCPEY8oau7YJ",
  "key20": "3LgpYSjgY2z2vGeuDpbGDdYXKQqY5FjoX6t7Fy8R3ncNXxKB9ZWLAiYyzK3wbjr1EXTKpr3GqX1wEnnHUwzfgAJS",
  "key21": "4HGvpjgpsn9f67drPxEyto4Dhk9o5K3SBkAN3VhCvsfrErujUm8KpL26aFWBPGskSuucbAnNpBUgTespAKmo5Qpq",
  "key22": "4CgkHEZ9R6FwiRbuMLkqTpMqzydf8pxYj6sHaRqtDySHMqsCFx5wo33js6bCQsNJBqEyBGhnUDDR7JZEtnQ7UtsZ",
  "key23": "3D2wmXtXvdBsYum94MAgfw8dDaRCkYXecWHsmLax5kGobRg2EcUzBGAyDfWjcM6NgphSBWeL4osmNwof6HwQGLDE",
  "key24": "4HdSapa1z7Fzdaq12sw52LrKDKX8gVV7SmUWgKu6oTEqLEHUnMysNtdkF9NCFZmpa36u8NSmjz9AQvvrqpH9G2R3",
  "key25": "4v8VN6cVAHkrXUSjUXh5n5vqr1JzTirM8ef9mXEtye91pLpZFUgpNMGx7uHSnY8YPGpTR4VYZozyfKiCoTCo3Yqg",
  "key26": "46sTpMnA737tBcGE2zLuiwfVDM3Uz7zzZ8q74rYe8kzxbmaqQH8gHchDChZ4Ef1mGEXeRrW6j2YubhAZ2GGvRqF6",
  "key27": "8Hd2xJvuXYy834ERSCUCM4T9tb9bn5rW1PLRs7D9ZhbHagvMRqp4CYAstaEWvZrRp9iGc42HnrLik3oPbvCrZ94",
  "key28": "4jDjdSNNWcfFRB2EUjhcurgaPXNpBzhj7fxwLBXUZgKR6ynFcbF5zaMYV7Ych8zYEz75pN8Ymr3Vd3t1EyzWkAz3",
  "key29": "2Q6y2JtBUAfaXyVj5qoN69QfBYi8ksFwTc5QbrozGRpJeEStAhkiPs6Jk6ktjFMzuFWKd7aBc2xvtQmW3JA7AQb9",
  "key30": "yAjXapuWF2Yw3xDWJ6U4j4iaTfLqnYBvGyZQ82mG23nA15EobeAjkpucKDqbXhBzrpQsdRwUHuEoQLpREKKwrpo"
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
