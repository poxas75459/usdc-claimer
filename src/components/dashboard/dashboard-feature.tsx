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
    "5WfUTd1mHN4XTdtyMQNoiSotExK9mVZHKm174YFTAu6b5aJJwkQEC3ei8hdb7xuAZ5wpbPLBkdzd8aESCPfmPHKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hLJt5QkVbv1UDygdUb2o1XnUoMkuJK21wJoKjoAdsQpkVTLLHVnzUSk8WbSs187cHzzqoACX7xG5efRiYNiku9K",
  "key1": "1PYaHmzh5VGhf8KQ6NrkBTFJdhhosWFRQzHFaRgUoeutH14mrEEYcNumzpp5m7sxMgZgrDtDVkem9rJoRSeKdwb",
  "key2": "JzttjVXPrU3mQzKuAQg3wq9XapS11UJi7Te5LQRnL986q5hyWMLeLPmehFmSVjhNU68Bxz83mF5kYWrybEPDUva",
  "key3": "39QyPwkggZpdtheptWCnqXDhFGJPKdXfKC6xH29YfRyvXhPsbihYSCcGVC4ReUHmYrdmJG8TfMHiy2A1Y4sCZceL",
  "key4": "5ok7pzQb6PxK3Tg6jC8bpxgbbj8hztjMw1drqo4Y8TSvYPknrtoJsUsuNVdmZPh1wdVVpijsmv4tdUZGNbTF1zEn",
  "key5": "Tg8mWGytkjoFQSUFwvpfkgzpSAzuwWMKgsHfLduVDikTgxtfimtuN3HzhLDtZikex1xR1YBxtYYbzz6uJagpR6Y",
  "key6": "4i6bnMCiMSD5HZZrhzKgaNuhfkkPBwH6ebzXCHdHzmNxa9heoveooHeYJ7WFZ8j4AGToRz8QeHU47x45RBhmFxAu",
  "key7": "2kktLDfQLRGZg5UBp5m4PnuZBgfj7imQtVmHhTf7DhPgHDSsHvJ4bqeNJyTsJ1sL6AW5Egka9nTMFZM52YubAouV",
  "key8": "3Pn6EpXnSz4SDE3z4LZd24ijAdKpyKE96HYnVuVNUq97PkF9GqPQYH3imPZ9PbJcxFxj1gSowvZ4h4HvPVzhKQhL",
  "key9": "4JWhyxn9mRjy2MDxpjgJWjvUDuFLENwjK35gQwEC2Z7Gs5NZgrKYjufYAjCpqnrBpJG1GGCV7h56N2tzs1pD5bFz",
  "key10": "4DCHmB21sMXb83jFzSbYkNT1u6SzTMWmMKmxq4N38HbdZzF9Q8YSyiqn7MbBsjRoHDW3aefFrJ3dx4WWXeySPEMm",
  "key11": "4DPnQEiZuf91CV6vYmEHJMyqJhGYTt72bgJZ8E4gy98nbVDk3eKMYtPcbU3BY2rotwq6TNMfEFoabm7zqEp33FrY",
  "key12": "56iXFmpzvKYhtUXx51av8jbGK1HbaER2WGvTMsESyhrkq223ucLauPGoKtCPXdKhnb9BSQBBuvihd2sKA9QkGS5R",
  "key13": "VWhPY3gkQBFm3SoLCVjvF2s2ohncsf7TpF8EnvA7b4jhber7okXJfnnFrsxoiighSGoXRKez3Q2yd1BwhCoiWpU",
  "key14": "f4xVdhR6EnhfqDSwJef9cfatZdSy2ouyDuQJPKMECPb39T23yDPVZzMjNPRN4FU4cdd85VemhKeTwDT3ZPpLyrm",
  "key15": "55feD9FZpwoiWQcwJkAo9b4qt42AtMsVN77SgR1hjgZCMQEHWKcFQbJ2wspbMzsr1Qs89zcL1uCDgQhPQHqXKCU7",
  "key16": "XAusTFiHY81hxBWdzzAmsa3MwVtE5jUXN7LhUgzRWLuU8GHuqWtHfhNpp5Zvagb49NSkWXM1E1Ruh52ESMpxNa1",
  "key17": "2jp9d3hHg8Nk8Fhkq94qpJjyUiaAPZFQo7y9RN2d2SNAFrNDoKJScc9SCaQVcHwcPENrQyJBGH2gn8VqyKAocNuv",
  "key18": "23tAYwvtdGY32YrpQY1wmYSjKQhi2LR2fk9wgb7Dw2GF3vMFYqWfAa1Yzv84er9VTGf2zsZDuYKgvmB3vDgG8n62",
  "key19": "2RJxfdNvAPcAaBuimaaFbGu8VUtgGPBJDbcE4ckLgqdrYQU5StvzMV128iGefDFUuk9NSrtY5EeyYEY5XZdCzpeH",
  "key20": "y9KhENVXNpTuS6ZqFmfuYftHBk3bjwdkichsxBNrt7B2WcnVedXXpahbXvuSoy7s6GkBMFeEHQLdpVWrLAUKuQD",
  "key21": "5bxFjjmdchFv82rQzHyPhrxJWmS5wDG3zGFHLL4ypQF7uyQW7vXTGhqB714Lc4zvySqAo1Fyhtkh14ubkGxRyjzc",
  "key22": "2atgtrnvNoqpVQwu9Gnc4Wf86qjq48sJzjgbegZ7Sp3DHg7HiuLjqrPmh6ZLgD24682UShRFcQCFtdphSWYfF5pB",
  "key23": "5R1JqRtD5GmezrF8a3pZegy8ei4JcB5cpG7yQ4LDAyuGaF1G7Wg4th1if3Nqud2tFVuFo57ZBiEiDQ3DnZJGfXZh",
  "key24": "5T3ty7LcwCxVVQkNq3viudT7yQ6S6WoEAcfiPixuPBDLwHvL7Fby2CFV4ZjcvqhC6brx18me92z6rAGLr8zMmSMT",
  "key25": "4wcAEEJPohFUQ13sp925jAGZoAzKtKqiDLRdTPNL1AkKsZuumxwE3iBXHYWCkcnbkRVmxeXfuaagH9N3Z7UfPyXd",
  "key26": "3scPBNWuN4kkyxBKqNLyyJrXGe8R4fUPjxXaZGFsZZERxPdaafhj5nPyrawNJaErqFJEv95uhhUZff3myvhrxmAF",
  "key27": "vvBZMRhz58ZWX2Gu1u6aahEPD6ZoqN5Z813mkqnjut2A1WaLyUHtsrU8DUyx2ZkaPgrw3aTPybUMe8kEZkiEF8R",
  "key28": "4KW5bXyYiCRviVjpotWun6rtSye9pvaePweGYx6Tdjr8YHNfTfxHbx1yCS6sVoxJ1gHEA1PQHStHD6JEGeCpASEg",
  "key29": "3z2y689wTYLKvFjXzyuwD2ESN53D7So3bsq7dbiF3v6xXq7ye1h5rdpDmpVVDo1VGPudeUrKUcabxbviY88VGqDm",
  "key30": "2sAHigaoWVNmqKM822cgyzxnxTyxduygbEWURczJBTRnHpz2kAXtvMrdz3yRxCJvrU7rEHSJJs7yFtCjc1AWqd55",
  "key31": "47DexqgANgo5giWXBZEpmcEQ9iPraKBymBtPC4Y6Zgkt8bJS3t375e8Dtd55HYp39X66RbV61Ks1FdVu1DM5FFqu"
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
