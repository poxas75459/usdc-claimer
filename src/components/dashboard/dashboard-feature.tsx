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
    "wNuzteqJUHybieL5m4ZXu6ddmdPvFVAqQGqYJVte3Y3PTsmsnLoufNxfis37F2YwSSToJttbqzLAB6XDQGgWWZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P1eVd9tC5TJgFw1vbs6B9Dy3uKArTs8qjw6dKyvkZR2ES6JxtQq2SDtjr9sAHdohJ8vMEQDQjAQazMGDk8W9Dkv",
  "key1": "4DAb4LL6BSfGwJqhNeqC7Y1D43VMzw13E7YCDBToC2eiMFVQhvg9PGz9ZGKmkhwrfkN56ZLEN1SDryuefvVUBDkf",
  "key2": "3KqAFf4ycbgoGg2nDVfhKBY2VKHCkTbaiDckhehnzLJsHJbDkLxEqburssELzeUay8Tc9GWnFTyPZeLQtGbxuQvd",
  "key3": "4UL8DUkprMs1B72QAHNkPBseYabC8zCBCtmsT2zRtfRb9G4nPVnzgTm46jdFTaGcTTtHRSvhWay4WTph7FU18RZt",
  "key4": "5J2o7j7w4GLbrhac2SUkywqvTtMY26mwwPChKPPWL78j4VCnF5uJmnkBLtmXGA6W9J5BsMVwTWhWTtVDSmBgYBuj",
  "key5": "3vU4gCwg5naNCAeC4h718L3DhTxyVJWh9J3dS8AfzEqPCWm4SUF9NXizS73cm1TtuHP8qw6fToi8aYaZsbMdRHCL",
  "key6": "5WJShtvpNKAf3ALjNYbtB9AEZXu47gSfYM6DShZEtmEWGWrup51hzzoZyjSeBJjPu2ydvB32rL2wFVhmAqsbyRpX",
  "key7": "3T8UbddxM1X5Z95kkHwygusHffFQf8ZZ9gTWnj2f3xtiww58XgnDXsDFsBrp1tnP8Tm4R65MbGiGuvzTtuJZpGLM",
  "key8": "4BTN5gLj7w51ze1W7owAR64iU3hiX4sZqaKeB8spLD1hNev4EPrbTDHdCBbh7WQ7BbB77ngEsFWF2Rbg3Y3tgPhR",
  "key9": "jeKJgytpV8a5Tod2y3TLFaxU6ubGRcV9WUGReeZNBP77nHSCUdNWaUww8Jk41amcey17idXHrLJTEUQtWqzL9Z1",
  "key10": "3eevN7dCMyJ8BrVwVrXWTt5UX83PXkqA53jCGwxQ6LExccL7w6s6ML6Fj9ZuQeWZxppyw2XaXuwV84Uf6szQ8o2p",
  "key11": "5vx8bjh1ULSZVWQ67J73bQH2qnRy8wKooxP9WH3mPtyQZWsLHyR1dJgDtkSyKEMf2y3gdx9mHxqx1hc8w8Zb1HMv",
  "key12": "2o4KWnMrhAhKXtJNmPEwAz3NsAAnFmaK5rfRkzKyqVUp9EkH66PB1Ls8Dtwc5Mi8vSEcJ4dhbCrbtAcaKBE9Mvco",
  "key13": "4Hq5BxjmM7Xj6sHzrTSXGvSibNakDN3TKkRskt76gkH5v7i6uJs6s6GG5UhYEoJp8xKErgFRrGCr9LbfSh9faiRy",
  "key14": "2h5G49HCKNoVry9BduqgX1tgtApy3TmR82hFRwNYXjePUTmLpTpjERNhgSUvr7QQFFucT19DBAPPvSyvYSDwVz7F",
  "key15": "63FYcSgQS2M7DXYMxdTHUaPHJYujyT5wJnawdR9bvZk3cCQeCM8umXNTG6SapyGcRMm47iTm7f9B5MNvEGA1UgcG",
  "key16": "41kGWBj2E2vqgj5XaXuXZB4UyVCcUPEZESxNPSjftFQd6aWjQCQSyJ1Ytyr96GXmJ9m6CPNSXSVvxCWxaMotpsRf",
  "key17": "5uBBHoS7V5P2m8DVAHpVZ18kiMdnYCRwwVbF3xNYeUqwtpyAC3Sog6sJmBYVW9ja6jJmXvcrpuqqWrSbi6DC6UAu",
  "key18": "2yxiMsiVhnMTfBGpNCAcB6Z1q6YwuWdW7Tm9Q5cGJQhcPTSFK3H6XhfhT2TZ97HpZH94cu38YE6R31iQS5JNL5rg",
  "key19": "57VfVkaXZRYK6DbQqeZrAe1aD6TVQmfZsR68mHRT2Rf4ZJEfcS1xc3JQeKSKmT52pK24aLDwDzGmgPBEicbMJbbH",
  "key20": "44bqfZwe4ArkhFhHGchpFE8dWnnzvYTJtZemGFQpverdkMUpg62jyaQr5jySmFm2JsJ9toGh6Tuzen36SdeGZQ7Q",
  "key21": "63YZ3hoT1sMFw4GV2nwB6WUJCDs1f6gDrxbubfeduJ6p5i91YWVAebFpXw6En3ZgoW9jH7Jbfh6dBvaMZAd8LHu9",
  "key22": "3up5q8LMzNUyvturG7SjktDFEc3LDtV8dNaMG5aS41y74S2DGs5UntyLDsHmt8dFHLzQX8spcPriGJrLiJoFvs6t",
  "key23": "5vhL2D8BvDzhsYazgVULVRPJb7XXxeBb7t5FoJGnCjs58d7FDZJXYcNGHniFyTSxEuhVvbbw3fj82MHxgPyJGw66",
  "key24": "2XkeQKWsY5TCBFquktEYgVtLda7cG9WLqK3vfDoTbsnP4xZ1cwcPHxm4nQENpDw6NebvsL78FQ8C3jTy3CzNsTm",
  "key25": "5KAE2DZyZyvJw4hMPSVVB9CkCFEwUJN56TgHWebNPTkVfPNxUGmvukCHRpqnNSUeByztR45FyVEJFmCcQYK8ezPT",
  "key26": "2wZtfkNgwQbsBcFBqyBVwpkvWuNaRziWazjZhc23yToVJZd5Z1ywrGzMvzYybgRjQgsP4gdK8hJyA4wqMWJYgsMb",
  "key27": "2VRpkxefLN2uzVXjXysbAiis8b6oz3kUZ5y6p5FJixXwtLwrwG82KjjBdqGKuFC9jRqmGXHeHqW18UQ2k8qbYgjw",
  "key28": "2BX8tRPYG6A7Fp7EwuViZXguRTyJyJk9d7XrJnAn8XyofPLhuPyXmoxFaVZyWgA7EZWrCkNs8Jw6MhGgjtEDgAa8"
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
