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
    "4m8RiW4FgVPwKKdxHWh6vVNX7SHB9cBY6cRFzkoRmGtM4At1geKFUCu8vxXEChPaKis2LWyMf6oRbYkUK9oBcBTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hyedLxCBaH9rvB3epZbG9PTYbnsEWUaW58VVKHCaGFXtYRnNA8zEDz38RWRExT1p9uoQyS2pf5UKowYaSh956yY",
  "key1": "4SWpUStMAHmH2f7VAUK2GStNEbugMymxkPTvarmgMqUnUJBrtoSdKRLyUZoohDqHTpn8yyafJG3hG7L9pnwNRsdh",
  "key2": "5129wK37aFtxmuRAp44ad7UsbDPYfPG5xnL9HgjX7wMNW7Zb84rrt34786hTsMR3ZDaSEVEQY7PwqDYNn8MLjpHS",
  "key3": "3jgdEe1SPDyGwr8WqJdxUvXFfrSB7b6mmpYX3KPaLDrB35rAvrDogy9srtUbHn57Wyup6hZtJggZ1bFq8myF1WD9",
  "key4": "5QukRASDYV69wEkHRMJ5Hc5oYfnq9wNV7eq8MPnHxTFFY5pRLe5CQ7sgbZZpYor1r62FuxrH3z2yEVCbnqwrPMyb",
  "key5": "3RVX8F8nXerJRByHNu4rU6DTGy1uXXxuobdo6EWuwHf6aL29SfwjshALssBusjEM4sEeyen1UQaomuNhkLB6jwu3",
  "key6": "YCz3gbNvXW1TuGAgCvSidbNqkyeVL5TM6dNhH4XhG4ABh4kuNcLovJ7r3gV5HyS6uHy8xbqDkgaEDAiwrvXRCwp",
  "key7": "31D6J6Z5wh59L8iFZgp4BQmHK3C2zRmqHAixnnh1Xp6kK18G59zZGCtCf63aS773S9Uc3nxWWFQTHg9bPwPaiiKA",
  "key8": "4sDPfC1YiDzvLyAEhWxJenjF1D6s86cQUGBHz7qgwrHsrF25ALyDayb3VDZLZU7YzcRTPXKmY4S9ECGCPMjJWAXR",
  "key9": "5eizFvKhtNzxYJwmBHHGafvnTZm76KxvmNDjUYGMnjAHHeqz3snawF4W1foDkU9CqVTPvhY7Duj5EXp3ncGKMgJA",
  "key10": "3gv2Fqj3ygdfzmvpAfaQ63Qs8AuypXEXDtLp7JrcymTMxN8YCb9ST5u6rZ63j4hjm3CH87LfwU2CnLva4CQ6mzbJ",
  "key11": "2MNxcie8TQs7s4hnzqsH1pFmxtACA1CNRtP1cVA6iLjtwnEeVjSnXqgFSDzc7Uu7z8NxtzfKsVcvnLTEWNHGyL18",
  "key12": "3opbU7rFbBP82YxqUsvbUspV4q8ugZ7BB4iaF78M6KeuHr13fzpBi2XxRpvDwZmGBe4munneZnGft7e8DfP5QjRN",
  "key13": "64RKydP3Y4Wp1X1Xsdid9g3xcaodnKJ4dbhkxVRvctyJwMZXqfC5p1pXHvTKqBrdjuPyH99pV3FCA6E6crvmc6Pi",
  "key14": "5vP6QmTNpknSoaHUFy7iCNEH6jK2saDyvURiF6i6dtBQZYKKyHcy3fH8zbw6sKacfaV55249mgw2Pnynz3Fax6dq",
  "key15": "fbMuue3W5X8qq9Foyp6tdhuKLw2d3kQBK5MYDKyAzd1kjbpHjxKkh7NuTC7u535DceWcW67j8hShmWYgnmsoTQe",
  "key16": "2tnoRofJRMibK8KtGH8HhSY5oydPG3dc7JwdoG5ftEt1MmoTTHJpH8kjNP26gEn8XxALr9Rnw2GvGWPZNQ5eBZ6C",
  "key17": "2fGynpay79yyrCoaCWEkr8Emwz41gacZdHBhc1r2LQ94yzZvthCkDT6ZYbcVmUP7wZapE2UA4351QST1uuov7Xbf",
  "key18": "5t6g5hVWSvztx3o1pfCQV8tNsFDiUX9y2WRHg5hnANmUfVMSLvAshV2ZK6LsFzdLMUFso74k8tdjgEWhXisxrVbr",
  "key19": "5tXPGgxkDtPEQdG89XesKBioxtrFmgtwNdWUQLKEfvdFJsjZNy17JtaE454duEr2i7ncp3xgomf9DqV1yHv3CCA",
  "key20": "5pyYN4RvGQN8tQAMZvetyrFd3Vxv2625piaWRBDPm6LTkYJGq2tJUDC7rW5BitXYm3cHq7KQfseTEx3xTp7uim3g",
  "key21": "2L7ZHonXR8emwAf4SYnLumAp46MGoPX5CmiHYKogc1HDvegandGwc1fShtmv6sSaDg9Npdq6y5kEjRcHncyup1vY",
  "key22": "2vvZSzJwUzanUTjgTWeMY25S7f7g5SraKwYwMDmPZXrXhh3zLvUnmVgt9HjsE7wcgPFH4rV41Bok6ar68ybzUk7t",
  "key23": "2LwugX3UQenEnDVtvTQzkJZUn9AgfxPXFbn4MXUZAwQMHjJNCaLoEm7sZJ5vgFro55nBPMBNs5EQ7vLgBDT1x627",
  "key24": "3gTNJbf6v5DJtqtbq67ffRi6JWGgpiUCPZjBwqTPzYAjRuXuJVJCmYbpxFjExJdKZYCLK4ZuUQXE5AVAQrQoSrgm",
  "key25": "5tWiMvuuVqUXxfDWFgUpzmvg7Ui8AwJd1rXEuP1DtdKsJCXN1oEXDGfC9ac8yFuuq3n1D8ne3eGiRruuwdEFymaV",
  "key26": "vWkj423LNB1kMpU6dLCyNZPXhtGVjBZiRvMRKmofzn6Hm1UHQDjp3ky81ZedAfSU6NdrqLSrtiUD6HQZ2EVkR9a",
  "key27": "3ffwKA19VKUmAxBDGQ3TDWSJGvDYvFgdsBA22BsQSKUPqmsDGk581veaybq1zCVYB94pmayXWbJf7kgtpdCreK1i",
  "key28": "7qwvFDFBFVFnRXFzv5r2snANrsrHZ1TTWdL1fnxN44Tt5wfxvqWUtT1iYALvZG9Ax7DyLR93UehfUnsUDF1fwLw",
  "key29": "2wt8Y9KEck9e1Vb4GknxCnuRK78DDnFfPKhfaD8zUHRNUH7EPkEmZJYx1YArot4Lp21uCgzrgRQ55XzYTbRA44bS"
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
