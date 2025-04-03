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
    "2Mc7WrBGx7xWZuEsd6RsTTwACtNEZYrhSCU6ukmnTjuQzZ8zB19w8Q4zAd9Knh3rDRoknPF47x7DChZQ2758pF9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nb9QED5JFtBu1rk3CquzFLxu9K1cH47kDHu1jKM9CmLhaJV1qxvaDX9KHwvUts3inHRpxXY1uWmmvcnyjUdHRRS",
  "key1": "4jabQHMQDronqi95c5WpTnhbkpmXqWpikwtBiGy5ysZttryQHqTheWcRVjbyD11EtBMM3rv12e8ECW1seGf5iK8x",
  "key2": "4X28uJyqUZeAbFcw1bwUmtdt4ponshvuZoDf3L6bbeNnWzZspZiPHd33rQtLWNw319RcHjPHS8V4vvyhfnkw9rfY",
  "key3": "56HBSSizayimEFnhgnisZoZXNN9pGNGJrBdF7BzxxQq6HNBL5rp8cLiTq5cWYJeiEvjvyuoZMD9UCGL52H4EVhDP",
  "key4": "5p9brByj1qoYsu9i2N87xXYyMU4MVWbTqsSfFwRM6FDemz9vye4WqAnr5YmJAEQBDAETcbx8rnYvfegrWXVER6NM",
  "key5": "2JZqNSGhbaZhKdt5g9x2BokgyiwbMrKytSzZsCtdoWRfDchJLesvEwhgTWpdoaz96sKPy7YgzAiSGKrfhrHvPDab",
  "key6": "zt8zaCfQgouyk5gTEYYcjEkuf4xf3QmQtm6PWMy8osZ99ptTGZZS5jkSKyaygLH11UhrHbyL14PcT4SoNZCprbq",
  "key7": "2VHD6csKeTefiQaFtBJkdiRMyrjzJB7ZcR5Eef9iCMwf49gpUcdxiNanXENNAcef8qcHABqk1JeUp9WKVooUYsmM",
  "key8": "4xzn7xvuDPAAxQLZYkdqzv4kriEQonPWFGvAeJf52YLwB3aYkJaEHEUt9oidzm1bzG5jScwq33PYPYg1zJnYD5aY",
  "key9": "5YSUZKvxFKgLKsv18HYHZ5ERMgbkYTgHTkSkRiStX2aNQGyskaGek8Mo8QkcCxGoEnasE5eNUXH4iUGc9vM8TozV",
  "key10": "2L5eYC9bn3LQrwhFePdL4o3ZZ7McfDurcdxVgykHUSC1tcPsjLkh7YqtFJBZJbDMA6DQc4wGPbZnxfKd6f52NiwD",
  "key11": "5KJoYu8izT57rpG8ddDDatk3u2KnujMhDgyYHGsgHBDY11iYMc7Nwtpj5MwnVDYaxPuv3XDmkRky6sYhKj5YL5St",
  "key12": "4q92YswgqhFojE92N8rBDPAKg6j7f44KFJc3wqqanqpuJqbxtrTdsFEV5x5aicAxKk6TXcxLdmuDLji2TyEnp3AY",
  "key13": "51t7RY3eMDrGp4SY2her9n5aeU4myV4g1GT7SD3s4eZpHSwpH1bA52oGvkenYHuaxFwu2rYix38jP1LQX952c7XS",
  "key14": "4QfFE47xrjJ8tjBJ1V23FYj425dR3h6Bfbbk6KPDUccLKQLfb1uvVwc4SYHiz87JsdF8aYG9KvuJ5jbchTcJpy8T",
  "key15": "4Czby5kuxCvMDQSDWBnxyiE7hscTuMwktZ5HZT2XscF7mVDVvQERQfP8KYiQGezf8CBYAQMJJnMYXsVkuqjbTqSh",
  "key16": "5sgS3hXD5tMrUc952E9JGmmpC59yEtYhxBWH3znMeWFJy2LVReqTXMA7cUqZa4phBmW9EGiWyT7gna2c7FkkDkMR",
  "key17": "U9dBkWrVvCsrYKMwVoZVAuz5wf7pWMMm4Wt7r64WGi4v2212WFenDzk81ZtrEZr8pEQZdNRLYDrCT8Dg1fKtH3d",
  "key18": "37gydztovjf3J6z6Xr9BxwRZsB8xZ2nGp9yQnxzeRj77QeZZg59grePMq3pNM64aYwmyApuu7nEfmrn6LppHVWsS",
  "key19": "hkkJjrbMQTMkyjEVzDaRVUEMSA6Xk5jLt8BtWE325XmXwxBGkMRMhthTHoVrLvisfwhioHyRscmEWtaD8pXHQh6",
  "key20": "4YcgSVrf9MZc1kguHoNqyQrMtBAYXUDsFMoQ35AkVAkteGe7rp2bg9rmY6pyBFNupRS1FGGuvBLjX5iacx7enDNN",
  "key21": "3PZxm4PzaLURcaW9tErfMs5LQ111rksUnV3Gznt1nzPzDY41bA7HPzsWJU7EqS6hUF8gJBhWYpnxN9vqbdEUqr9c",
  "key22": "63LrYZKC2jyxhY8opVRH91uNPqiYe5kNYSakYGbn6k6iNPm6H1KRmdnPRYKScgtQoccRYjNqQz2DeyQRttkzAKb5",
  "key23": "4rLf3NLmF4FEnAL9E9Zf9KHSNbj8HLAi9GxCnVSEWPmDnYSuqs5D6QXQa4Bu2TLS1huHmJAsiww2Z1gh8Uat3KoZ",
  "key24": "4LKzbpFtLsNaoS5g3FxS1sZowhq5zoDMQYffTPhLXwNxkrw4jECpk7FHxRvn5prnZbpzV84aPEMgXMe4APeTwf6o",
  "key25": "29UqNgiSkzZdZjGoYWRNYVY64UTZnoyNQeYhzuRX1NKNxmcxxrJRp94Bd3vVb11s9x7hXxDxPHF4YYb2B97eYo7U",
  "key26": "3kooezs7ahtqDLMvCUznoVWsYWWFV4EBysz3BW9LH3NywzFZL8Nd5342jQcZ7UdzMKWtfdxMoxsw8k8p2tLvj1oV"
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
