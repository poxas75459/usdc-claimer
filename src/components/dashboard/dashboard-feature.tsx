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
    "2enjiZEm4oGc8buoUGDBcB1u4QZSVP8XPimWUeX6poLWjTA8udXUEmwdR3XPU5oVN68Z5aTAxs7u5JYh2tRpwbuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fG8c1s672VMBFqERFKvWt7uv5tShRT9uuAajU21gaW4yb2CQbLMtiWV8Ns7pBPXFT79N1aEmT4Aur9cBhm7CLqF",
  "key1": "5JMeD9LxrzUcfszNXgq7oKupDcH9BNXNtu2cf5jYuLhpbAkuNeEEzoiecx6V9SujUggDKWz9bxS9nDxsr975xLCA",
  "key2": "wp64gxkoBgnkpB3mLUkuNj5RbFAEJMUHYMAPa8VpE9tgk3fcpgNJNSxLig2fMeuMprnNcfikgsJrW59Bs5xn8qR",
  "key3": "2A2pLqLdrJVwfkDrRp4QK8WkHL1n2hLPHBkSQiUcYREmURkokup6Y7jNyAUDYepJoUSuFrX7aMeBtnh3fXyqa1h8",
  "key4": "wvFjCwSaLhGxxF59eym5bfRfY6oWnHBTFKBVoEVouSiZFwBU8sPVYRhqNx8V2xGAx4A6aQMjjRmPhiWAVVLQTq8",
  "key5": "3Pahhh3LhckDLNNcWgZnkq8arvFi7hE76bADFi34EK2xAJU9e3WmwzBQ4BirZMB7PrPExm9QBa65FEQ6eFwWr9Jj",
  "key6": "4kYUpjhjs7XGGPdP6aUgvEH57zjGPwP397NVqUWUzvdy1G6p89k3cLtYHTLZHg7GVbJZJ7sYSjwuw74Q3HprTcqC",
  "key7": "4kRhW7KMQcp4csoeMnKsu5ndycs4fFHk8Pd6wncii3xc78mdZSqJbwHNXogpLng3oTSUkDMdVpajZXE7k9KeSYhX",
  "key8": "29uzqyhuaLfb6xCHhJE51QisdBpAgF1xC3jyKUyE8NaYaPvNhqw557PqJS1Qy3vnF8a7Uo4gvwMLB4D4pPNsbQfx",
  "key9": "5nmKa64bJzuvTt2CrPUBUXR9CEjb3jyjKXHaxvmkJnxzKtYP7CWgSehDn1wEqmTvLdyagiVLC33dEctg1C9nRAkE",
  "key10": "2uG6b7se6DjH8eu32HZrWwMryx6spmbiGqC2XHkesou1WVa6itFYHUPiVDYQxdTEJitEhSxuHhC5e9PKvqsBwFib",
  "key11": "45QCZTJJevL5KypVZXJ98iChqmsE2AoqNHV3Ug9zhzgJrZixbtMgx5zBaiVciZCDJbWruUgGuzteJfYspJJ9EQJQ",
  "key12": "3RNhRb7ygALwtTFVZkRtaHX71y4mS2TfCqqyXt2H9WYR38sNtDVU6C7yJHuZWfz7vW3nkSuQeUr6XobXD1dDajGj",
  "key13": "NPb9VEqwhz1wh7UP4xrDmDiYDP4udLurinopM7wXXbsEjfApzMj7wH92g8kyhJwfVvcDCGSGaUvRVXBC76sKoqi",
  "key14": "oeeJgLVjXgkaJ1AQzDmUyZpbGzbXc1TqSQhVRczvCapgfcigUsT13GeUbZ2wJzPAs7oDJLJJiKX1RR9Z9NUPjwJ",
  "key15": "2m5hFKsH68pZz94qxtDKbkPFZyfVeu2JBzwG8bttgC6h9C7q4mH9DpnaDtDUAESGrenMCPUpSaALYAuHssiArQf8",
  "key16": "5qPwH3VztwSMSYVV1y1aUubxcfLRKuUu3asMyiU9HFbWjkmJa3v8q5cSPRLAgzpGbY2iScDMyJJzkTQuqTt6EZif",
  "key17": "28H6PmnRJYKniVwa6SakqPgm5CCpbAf8s9FwKTEd7YbAvifzJyenxVQyhJR5zRWQgX53DXGZsnE9ZrjggA71UhYe",
  "key18": "njhHWfx8RpahmgbhZA9RfE5cMoxDjheczLLD8uPwjVJzk6DcrNKkytzx9kG1mGtvAFhf6x7t14EQ5v2cTEiVWFu",
  "key19": "2g4H7gf7gbLyP9DoRHfEejpoKe1xepxRG5PHkzbQQ6XxdjG2rT3hMozmfg28p59KJhMdZouPPFU3MbQEhRXbjxSf",
  "key20": "4hefnx1dxfRDy5XKv62nxNCm7DxjGevqp5ddUaJRbBCkaKvotWMCbxfVBWv9qLHBKeH2JgBiYKRDeE1RvPavQtvG",
  "key21": "5WfkNGzTNJvUgmZ1mqwPG295j8Vt5aSdJ3egq7tG551Wyd3pGUd1BfMv6r4Ni5QuiqhWtdR3B8YabEFvirqejtLK",
  "key22": "3hLcBNYU6y5w4WsfD8XBSGHUthofHSgyTmDacHpqdYRpiwXycvZP6nkyMkxpBDczuEsRebiUdk7FTY8qakSoA3jh",
  "key23": "4iRc2XzuTqYzw7148aw1Ne386AwW3gpTJ6emM35e7sqrkmb4pRuUpvYmZD1TeHEhsLT1qJtnFF94Ej1m3SLcwd37",
  "key24": "3afozcN6AVr2G4WeA8WL3GekECtDg2nnkWNcoFE3Ln5uJHjp1LgFxehA4M6M593wQMALvJftfmqVJSB9VhCeNicq",
  "key25": "3w4PQNzRcbkb3ouskvDemWrDoWUmioz4sRy2YKHipJ7mvJn9UFmaaEVvGYqRJyEZVZLNUa7GwXgsnp3QZDZveyF6",
  "key26": "418xko8w1CkMEtbsxd3HPc7jPYRA5k7cktaxAwWuchiS5MVdhN3zvSS9hEU7LR4TZyDUJtg5CyHbUCht5DSgu9Gk",
  "key27": "63EMjPY58vZ5e8AnKcXZeFAhkcoFAcZezNvCUoAYRAKtupF7vRrfxXYcoUDfkgQFqAod4dUFxsmA9hrQmqaDHxsD",
  "key28": "b4uRTiHdAvW1qowmso1aVjEMsLfADT5mVVvQ3fyu746Nhi8TE3uo4rMrqpi8TeHQu2Y1uktnwwxJzVfMSp55mne",
  "key29": "4fEUsY273VcFCjRmMWirphnT9cxZ1u7W4EQegm2PiRCgLdyJS5zi4QEYDQJuy9WkLmAgaSRGqswLddeSGTAKddqY",
  "key30": "2xeD4qncuNGFoGp6uoNes7raj8pcvnyP6CabdZgvtKazFzYKjq3DeV4pfapn6Q4jpBc7DFCrD34mukDzBib8Ujid",
  "key31": "39VvVMyMSVhvg85E6ZLjdPp4EogqC87um4NkdWAwhY3jkKeHcX4RnwACuuc2szHzRhWRUnpPkW5Skve8BaAdjQVf",
  "key32": "C2XCjNNyhBWLiJjKBnYpGz7cr2CP7Hz7rFUfaDyCqYHAJ3DKPWyFUdi2Vsuqs6EHuyUXqqKrbSPmXs2kkDjKFdS",
  "key33": "2DMurKgV1HRA4n6253WxTb2EL4SeDPyRDXKLC8Ed1F3YKCW18eib4jxvCtwS2U8vyTpjjY8H3njEELULCPsBmVGT"
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
