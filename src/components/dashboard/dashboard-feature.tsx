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
    "25LYiezDSe5BzBUHTFvA7ZtZW4BEjWPZvmFUQF9YHgb3nXaEKiHHHqDqc2N89obexVzet9FmsMYQBmFYVfka4VQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7KS8wCeJffxxwRYAHmDQ5jMcigjYbq8hpBhKXk9Dq3RTQfZAPYuSBoNEs9zjxtXp69t9nfzKAsDcHVBXeNgjoH",
  "key1": "2bF8XPtoxaKAqpfjnk71cNxALTwa16YD8N1wn2vhQj8BhnUfnYMmYz5SYTZxeMGb5KRZ8Bj5YEAAKaU9CE6EuQVb",
  "key2": "3HnTf8qYv59F9pL3KZ9VHgtbeaS4ptNqUAn8x43S4yhk9rgVBLzjbBcfujhxUY59LXc4S6NUBFQWbUSu6356rE5Q",
  "key3": "4pyddzeZNMUrNpPv7k1kGzUJ75hd1eMRZVE5gXawWP61kyoqctnsLX2jeaGAXynUvVDoDbPbuiokZyY2zQSgXrGq",
  "key4": "3WUFUNhoiYWTxAcrxjPEJ7uJ7XRM6ZM3XhX4m2vQAzzxQnvxUzDJJQfLRiAjBGM5uM2qTqDXA7acRCpYV8yqUNK",
  "key5": "2mJhXuUXyccwAS1utVQhQtg6zvwBgPcCHW4FhBqQz946jgWGDDJQTqqayA6t4NgtEkyKzL2irRDc67qjbxwgmEtK",
  "key6": "2iAAD3fvNWwmCNTEaxbt2smvGvwMwZJxGXEJBmLsvsB9d3GKdJSZWwf9AYMCmwLMFN55jVHpJtzaYGSRcrcxkbCM",
  "key7": "3xUpSHdoKEobEKG5jYG5AVBA2yw27ZVZgdrb1Kh6fV2JPiUHcUJ3y9p2EgBT1KgvfBhUPXA6mxJEbD3KqKBAB7mU",
  "key8": "2AzPh7KNxMx954HTKEH27DDrRgMz8DZVFStz1ZRxwLYnsScvzE8TjGgmrSGJTaWC6t9zvVkDVwNcm8QbLhdxYhJg",
  "key9": "4NRLnAgFpSamYhaY3GVJ4W4ig19SMdzFPNCrT7ocwY2vsorPsHFSYPZy2uKZRYqVSDQuXQ6ggNTgRoZyq9QdUyWi",
  "key10": "2gQa3aKMbDLM2VknS9qyq1LCS9GBE7gkDFTtxq6p7imU7HFCBtKAQSzdUakJj2jRS8LiTEuQFahe5di3gHifCy52",
  "key11": "H5vbNh3ZmW6Y8rcDUYqPVZ5y6CsUhYZasC2LQZjQ6DBgTyg23XJ2zAgpYa5HZ28yvvnMzHq6AR8h55SRnLmpnrb",
  "key12": "Vv66pwiNpf4C5J93hm4vwmmf8mSUvgy4oEkz7kAfvKwSvjUz62ahMYLVnEhvkYdtD7vq8dhaumgwnB52Nobqz1W",
  "key13": "2oGM7szhAx8vFzrYDk5yoZmESvzt3JXG52gTCoGM9VqtATgGicGCapsnZktSAVGNcHiEUm5S7vKaPpHYPyZaMxaX",
  "key14": "5wjDiUUKHXzKByQ6h5u7VwB39QwDkRWWJQLZcBDcuNHtQUt65Q19Yzux8Xt88JtiEu9SMXa48Gz32DDYZDGYFnvg",
  "key15": "7BZ1V8fdmXPrMbAKtQV4rpRRC8aPB7thgDXpTsxHfSEPyQXaQrryDpi63Eg5PtPEggNFpsncq7y5hfNHSRGJuyj",
  "key16": "26E9gx4b1Y8cwGL91pZnuqzaTS8uoVTqHY9heWfgiojaS1WDNsDUwUG7i8i96jq9N5w7JkD6brq73anY3CiKLC4C",
  "key17": "4cSWmb8ukPXV8Qrj8LCUjs7X98tcxBRQdDpPyzbek4ovfx6Mw41wt1c8LWtNiYB1fjWkE8M9dqQzovoEWMZDA8tK",
  "key18": "2KQFSWLnFikWNxbU1aaB9CiDSg34cAppfQ5UPHbJxYdcETrCFn9Mu9i3ZtYUYReCp8LcWPGxrdzonAKPhuZQemKX",
  "key19": "48SMQrpBC5mPjjw4uCEvCQLEY43F4WqwSxR7khjYm4PVAnHoPyPZbh1BpW3zkKjwisWsQLZ8JrUhV3thwdheJ1BM",
  "key20": "Y1Hadh7K7PwaejP5Wftq7kJ2kFU3rwn88tBifNwQHnW5bPykoowQD4MubA65s9D83CM4hD2n7QKMF1A1FgUg69a",
  "key21": "4A1upfc6cAX5x2HYjRUc3dqPk8rPE5CzG3GNfJQVoyG5KY4kdwvn3UznYjuooHqDaUGpvdNXhqge9R2uPMEkPDLZ",
  "key22": "2uVrJxy1VeJzLcd7qfQDauR6MPahkKyRqcv1q95eckkPNfQ4Kq3JRxeft63aEhcVczmAUFuiSmwGUYnVGWCkYK4W",
  "key23": "3XQMwbHbB6M8sCPDANx2J5hFvQxLNB5Ck6fVge5LzkSSWoRGbzP7dfSLJdoNLaC2NDNCGr5kit5MEh5ehJVUkgMa",
  "key24": "25UyxPvCq1CEEsSTsD9fQuc7YY5Em1WXwG61u3hpuwSKQeNGor9wQvSkpvHXtA5ioVuiCLKTqpAvY4PXjSPfH9TR",
  "key25": "3dhZScedjmrGwnV6N91wTo1cZ4vyCmB7ujCcsiXTsfg2tqUNNMaXK2jvb49BJEuchtgKNAaPUEftm4YWo2XbPNqs",
  "key26": "3DaozhzF8VP2YSkAm7LiPcD4RXAh8LcWAtb8xFPL2nf5jwh3H9FpFT2rfe9vV65WffF3BTQG8Lwb3D9uBTsLvXHR"
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
