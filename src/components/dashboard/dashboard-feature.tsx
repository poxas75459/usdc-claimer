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
    "2q9dHH9w7pZ7gyALLadLG6vnbuQEi9tA1vGj8pdRUu2n7GbiXqHuTGWWwaUaouMLRWj4UuyAZ2m2veJeh1mBRQfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rUjwCUBqc5wF6Kpdwmo3SbpVLNDnKpFxmTC8D5qhsbUerhNNNkZZB4NmJFErS8F1cWnBMFsMEjP2Nj2XJoB8G81",
  "key1": "658sK8R6xnMrQLJviSW6Rkq7USrm7aLyfDSBCfJnxMKauZU5TRt8TMYDSLLfnAut52RZGvqTZWMY1fsJrMdQgbMW",
  "key2": "2EXLpszmAX5kvYb2yVxAGv2fh9Udu2ZgUfiBitw344r21puPWeXWMPshPu72TbdkJKFf7SE1GSeAY4B2GMLgZjMX",
  "key3": "kQCLggE9nPPU9Xiz2pLarMML2nd78S9vTaSPpc64xjTEt9ehU2SMtoYfy8aeEGJhuT1qRfgZvnNPr569EcHBNuU",
  "key4": "2K65EUH54C1rqDhhfLjEevTUEQ1zteTMsXMNs6H1DWrtxP3H6V4E5ZdwnaUvSbbrygjw7UVKwJWC7ZaPHWzbztKJ",
  "key5": "3XUEDGRCjzdyGzKTo7o34kFUkSevv5xfjtzRPPwwaj9Ed4unouML38X5iigsVmr1m84V9TSu5DQ3QT9RY6SN8yuf",
  "key6": "B6ZBxKi5fyntTUuFT1EiKZBcRdmwaH5sYc4gDgV9QEdqxDnCPNgNiy96XaBf9Fxx8zFgw9J8SWtdWLwt22hKocX",
  "key7": "49jSF4cCqqk7WD935UP27PnTXyJzYvAsJam6vHD5vvhD1SK9qEtwT43StUa7B1BHcdX9Shve7K9T1zsRzWzjofpT",
  "key8": "4ZJvejmhrxu7Fwp5XtLfhRfxtXXcxKqM1vZqehDNy83zTPLanvoEzxPMe9xqbYYtmzrwF4preK4oadMx9rcnVygo",
  "key9": "2fBU6YvQTiFWZ4X6mqoVFkw5pe45S7who29YvqppzfHCx7Sd9gohVq4bnMGWUgnX9kWykhKyUTrhjfK7ioWdcPYb",
  "key10": "mvBmj7L66BeW1e74AqXsmkDtLSWqFivZYswxMK34MKSXrGzjNfKxbU7NLyYBQH2HrZuPFueFwPNPvczrjsjNHXx",
  "key11": "22AYrHu8C3FRkHK1rLMEvnCTWvBym9qcCS2xhxzQy3GzQ7AhGbtEEt57cs32ubVq3N6kRJGXQcLRUqtG62PRkRRc",
  "key12": "4S1BhcTMvMjqXAY4kpJk64C7Jbua5Nkq1F6KU8vwksKo7sYhuF3zAfJugN3fFoyWpouswiJPGVsmnyz7oikvYHCL",
  "key13": "3vPFndgYxrsqGuebgURJddbejjEZENWWPb4N3vktBVYiKHgG3f2s8RVEDd45rr9qgZVzLzoSYy4gYJWFiBhR3BkH",
  "key14": "pKCXaGSVwgNYozhJzdbGcX4TgcA5t2deAW2FpciQLNPszFZeyy5YJmKAgp4PbRtL7dbtTrawDxkMQ3DdSc3nNH9",
  "key15": "53iPj7NuhSdQP9SryjzwQMYz1s2ATJPhrR1kaFDYLRSaHgRThvx2gbbTNKNz2UQ8swPa83co5Hcp2kp1M1Utt5Rr",
  "key16": "c7HNJXWMn53vpR7Q76HFkS8RhcFX9Mco5wRsmxNW6mZp5mmCvsSjWwebBrbj343D1YPWawauy123ovDrYeScLQn",
  "key17": "2RaXBd5FpPumBDqqz5TygBXw64TmCBXk3Dp3KuGvACb8AdRXbkxofic4HhkV8ovFibuXBcUhAykEFL9RDWKHDyES",
  "key18": "4rWASZM1giyq1RpEjCXcsaZ7gJPJTTRd1KL8gkH5FLaTCJgnzGkgk5Hny5ATyhYe346GXzkoWGGe2N7p6b7z6xMG",
  "key19": "3M9pfkkG9TnqRFzPqvCAynkndnj5uLqnv27dr5nnoZaLbjQPNJKBHkbSh6HgNbAfaerVn6ETHxmkoqvkauY5MTSj",
  "key20": "4mSGpLpxR6oVKJqw23K1TCzTx81u6nCvic5ynKJKg452CFURCpHKQrTWHV5bKzSUW8r3QiQUALZzshpHhME23uu9",
  "key21": "5YHBuMRwdhc92UF5jYz3z8atbm28HRaACQMvs8gak3YPzh6ewtddV3Si1B3MwSj4QD747yf2YqJgoxsH6m3Rurxr",
  "key22": "3Pad7NTwdZ9DuBf6Z1Hi1kRHJsVjgBtcrLzbxCh6eb5Z1r9D4JNnuBz4nEpn7A5c7RGqAroyaps4jtTbXD97KWgu",
  "key23": "54ibHGwAJBhiKULbheH4QDQVV5toTKfNKFXvjBkMyb2ppZVDxcc4jt9B2vRnBLtBakSR4jo7X7aCYsQu3DmtAaue",
  "key24": "5aWK9aTkEHKim5poiZuPXqeTnhSnyf2fNFsC4XWMtmfZgdekyWNkJRgYq2zjZBU1yosjWKUBpZKvFV99DLBddqCP",
  "key25": "5bUfJ6rLSYf7N78UxojNAhMZefBUWggFXdZZmijVVsUr5EHKA4tSXqzRy5qihbKXrNFhPrgc6MyqEkPW9TH7eq2L",
  "key26": "3weUg2tUXGJ5WPkwsx4SXeyGTBHRvxpgVeDB61HTci4xoCmbiYwH72LNQp3Udp9z4LmXvTGhwfgRFvpKCZ42FUtC",
  "key27": "671LfXahmsss3biKpDx5bAoXYa14X5BD1W22pkfyxt1xhdACUjMtvX8ZAed5nWusJafzRsJ6sJfRvjTdjiFMoHAA",
  "key28": "RyKE1nC3YXNkimXmWxFpfbvqBC71SdguHt8p9khpRvzFzHq6yawEFyJsFuEjTNtagdAiSk4NkGUbqmM4aWw3Csw"
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
