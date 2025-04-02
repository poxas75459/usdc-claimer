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
    "53M5FZtjMRprP8JHAYYJJYyKKNwyQ77dAJAFNijjyoMN9CXuWa1sBQUtCyQcBxevFeEuqaVAv7F8c7UpynD9vVLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xqZfDdu4BWJP7xix3yVyd18iZRnF8mf3zA8Xz31mkNDhoT3KBivbmr6JbxDrawmaAFxpTwtGCBT7QnGYWGHb3LJ",
  "key1": "mkiU1RQYU9MknQQhv1c4JSzjeDg3itm8F7P4Sv74LA3ePP381zHNiRRU1uFnByoov6GM5GWA3ZoVczyaCtSbHJU",
  "key2": "21cXdduxpLyDyWLMHW8LDD9HdSTGPgHoc8C8i7XcrH4YvAm2oLFh8LTZ2W3GwcMpviW4J1fhHVKgrAwgC53Nhdd8",
  "key3": "3y3M5QwiPDpGedGoozVomQpfSCixQmo9DXX6MRug9EiqEZAKyrYjLtxxnbQLmaeENUhS9De3kLGoamN4uAP6pYjG",
  "key4": "3wSx8XLqRyTfjdJYt2vt3KmH58H1DzYxs9qRhErT7f4Zt7NZyiQbH96FXpC9PRGVRac3gTGkn7JwJQueWmheiFYC",
  "key5": "BW9umYXctHrxGQjGE1AUp8ZMQsEhxt39VaJYpXiKCRcJcHEk1GVzw3qNGaPG8qmurPh8TAvX92Phsp2fDfYdPAo",
  "key6": "qASB1a7mzxsXQisxzMueZAAtmatUSBraPEiACGXzpaGhV5k8bRKcSa6THZe32tCuHq6KS4CRyg7w5nywWo1tBpU",
  "key7": "5iW6pkQEYg9qZ6Z2Ar9m45pHaVyygC44YRtR7qY6rW4RKWpwPtfY7PyNHmz7ZNuteCHsdpZuzvshnFrHSutATG8Y",
  "key8": "2qZ7ZTQevTA4BzA8CFhUB6M3yDm2acTvwo2Q7EQ4axYTYQ47jjves2zm5SAG6mjAVr3orHCmHXXHXZCRyN21ofhM",
  "key9": "46YdkXx5qSJHAdpJSZAmnEzRbXfKzRrXLyi1h68FoULnQoyhAVbV8wozSsa72XNgr4vNsN4jjMYFbQRSgkkg5RjH",
  "key10": "3MZarmXSNY26cpecL67TXzL9eK2uMx8MELNE3ptYop9UzHWNvcsgDqpBVeqFeH9y1TjBJcU1kAKB6XeHrSgDGPCv",
  "key11": "2V83gaesvRscGFcz9DcrEHVkN1hMppnu87uMmAT6yxvtQhnDmdtc9XGKsEwe232qJKATYbsYUhitBKfUe3B6s6dp",
  "key12": "37MePsZtkjzJyVEzGqPk5uxNYvxWpaKfGaGfxo8zu8PdcY9bQMFbNkxMpUcDZsjyVhJJK8LZVauaK7zb3FBjuYL7",
  "key13": "5QvCVqbKVRdiY1Ss1WC9Ee4Gu2mtYDvnGPRVNKkkRmMaF1w66BKWugyjoGxbgkda2vBdPGyfo1kRt1o3W67Vsz9i",
  "key14": "4icApupu8WBXR6nduu4eZfjrpXF4cHrWmgJhkvMVUuooACpXK8cS4HwXWxFP7wGAEaQ4Rn437HhKQ7YMwkcVKbu7",
  "key15": "3yWwgvNTzed9ftxYmxTRbFabeJ2EwSiixrw8X9AehJfUz8VN5THfHgThw88FS7fNRptJNH7GXATZCD6Wc6o7Zbdq",
  "key16": "63JmWcK7TDCBZHgfTb4jC2xMNStQwdECg6MW91q6yHmXTmoidGZjfjUvEwwa9pLzADEjMXdpSnAnrKzUiGb8L2sM",
  "key17": "265d6qzcDfZKodP9TUjXwJMYfjSLMZMVRCS9BQG4fTarJzwENE65srjC9J5GA4oFWqkvpi8GgcvJHv17JaXBFbzD",
  "key18": "4Dxi9xFMFyEgENB4d8jYFweUPdeUU2SMNjvQqk9HcgJVBk5vWjj3RrW68w6QBAD8Yxb7ksJQKgMKaPFqf5u4fAYp",
  "key19": "2jtNB2ZcLJjCmPyHjPJWw7Bs6WfZLmEP7HS3QeVLgHBRrFzkkQ9TF5F8vm2ENzXJ7nLrBUPgaYGPCyNizra5HB71",
  "key20": "5etxPH1YDZLQJfES6nVTsgpG71ygdv66mYnQCe4dP7YL8y3XGxzQvyMd7cZFAXarvtq9pquPVxRBhx2g4uDVBz14",
  "key21": "36TuJrtrWnYuHhatKgGt32avxe8vBsPwfBN8mNyB2bvV9xSP5aCxYpNMvpLJ2aPMum56QGwMXuPnfXKGWRukVKEQ",
  "key22": "2pXhnwHir47irEbgkXwHytAnopismHYwszR5oBEG2rJAV6VnD1ysJhMvqDpYrSkobZuvbEhwQ6GcrJoS5WmtB34d",
  "key23": "2HbXrEtYTa74u5PSeeLLg2qrTZDXSZybSdjXtN3jamFsWhhJc1itRGuPzGcpRbhALZ3GJs4VfRFn5r8QVFPxbthZ",
  "key24": "5boUYX5Ju7v3Y7Bfg5F5ckh2g1N7tFFB3cKD6AjPmEgtbQesUy8wBLjPS8GfwAR75aWqxrhPHFHhm3aQS8rfsbD",
  "key25": "5ogFFETri2miMggywMuqxbm9mr5S6n3mV3zygmEgfnLGcyn28TuDqfVs63XRRp24ijpZcQE9mLZMYFRP4cPgkJLH",
  "key26": "2izLksgSYe9Aqi64MxqQCoyJ8eHNEDny4xDgMWiE2KKf6fTzGUV6E3C4BtVeEoMj8hnwcJfWQdmLrgcGFHVCRb6e",
  "key27": "4M5syDKFhduoRpM2q14zXwxWPxx3h89EcY5QqE9B8Ur63Br5dnmYPAgmQVaCj6gTHmM2LwtgSpGKPS5DXtX8jmx4",
  "key28": "2yb3nACaSDNaEBW98wDkPNdbqm8CrXPUgEoWGQRcjJ78VWVbVTcByC1NPNdPargJagZnACyX8VVisUw2DEvhCgnz",
  "key29": "2nXkXPwEivysWHtxGekTEfTBWKiearsJesnrKeVjR4nQnukQ4TrDan2eBuSN7xQiZssaGW3sgUQxNhwfsaGSk95V",
  "key30": "4QCQbmqnPEsq1KXX3eGJWKLJA81SSdTa1w4nB8ZDa11fwhaTJRkn7dRLAeTqvszkhTupfw2JD2uxd2pBaWCwwyDj",
  "key31": "5imKaW2W2sF7mk1gpQoMbxHNXeCGqwZUbwibuneBo1xLkBrdHxiFpQeXqPRF6JfTQzRb5hcNeyxn8mJ4qh6MJsXD",
  "key32": "2fXv8yQRS6C1WyV2mHkkEeZkdrEcnYK7ML9vb7siTEJVa1ovgt67S9usTgNL3s8nVGU2pFMkFAK5qxw1K7Wc3ynZ",
  "key33": "54SFwJ7Ss8ktFqXb4sS2HftyaGVSgx2dRLoet3j7AbAii53Kd9tEn1BexzCr3rkPTFiGkxAZg4YHCsHesmjg9KPp",
  "key34": "5GLS42iGppRtpqo2nstuw9G3Crg3qcMn5t1zNVqkS3MsR7Gavws4STzvzx1zrLJ2x4wW2VNskAVpDN3wrH4uu8XH",
  "key35": "4f1cmKiP2V9cUtR7vuHKGMdCMrtJn6un8oXTjb2Mi8BfFP4mg26RoYXsy4UkYiqm3cWrTkkUXAgVFgdryZt7XLaq",
  "key36": "51S5u4cF4CDB1fF72f2sLuDFmeBFbMicovy5btpMSbnhVzfY5N8S6gx647vWsYdvqfGynVe9YvsJ2gryNtXsTKjf",
  "key37": "3HRK7xvCcCX32ZAQ9y5TeNaH1P4HECmJMT6pp6kuvef7f2DVTdMxyad3Bd8k6kyGgLx5KrkJ7sN4u7Uzu1DDttG7"
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
