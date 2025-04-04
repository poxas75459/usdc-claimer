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
    "41i2SjYp2EHWDKo6GkwtN74b2L7Q2b5LaixndKnZuMgy9zRpx4Zuzd7Rv8oRmgnGt7GZZ1y9TmoNxyPEJGMjAzXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sor7biQK4NQXiMppeDmZApMFzzgeUXQYHYHH4Mf6ykoaW8wcjHbujS63WSzzcVTcferoniu8r4dySsAFeAd2W29",
  "key1": "2uaypdTeNTTpKnDoKBze6GbmQFqPXtskH3wtboKfjS4gDUKp4VB9Hq1UQUknh4bLQcZjuJTZrqi2f1R83Hj4Mki7",
  "key2": "5xKQ9LP9fc3Hw2u3t6QwgV6mv8iSnVYgS6VC253ZDLbVxJefMH645mnDkZ3Gjay16aCvLNH4ZVUB5tiTGd6nTmm4",
  "key3": "2uKSR32Uoi6hc3KfXXCvgvdv1uN9xiyHaovsBX18jgz1cgR3wp5QTigRTpzzDWhbJUUg5hDKuBpW93SYwAFpPMPc",
  "key4": "587BmgjMtivMT2ugrS7tioWKodFQswJgs9yrFGawe3uQBaWdGJRkVbibymcBkN3xGsGS6qPnXyx9fz8CbwiQsm7A",
  "key5": "m6zaMQmtog7g3qiBpoFL8fdv8wtKrhNPLW9HhKGL3R8ZPeCVQddHfQtJCUV5Ax9qhK6Jr7s5vnaV19gfTsztmPw",
  "key6": "25xsJKwp9ZKeDfeUQ18VbAkJ76r2mRiU6Uc5HmVWdNPEEcXJag2DzwKGGFzUccrtuJYMHTA49NRsJuwdo1nzXzMS",
  "key7": "3GjXceDhBNy6K5CUMZaY7cbwHv1gmELppD546egdxC8pnStrUbYf8pd611enjM8MVPTjNosUQgFETq34ZnLNcE2E",
  "key8": "4bWL3Aiot6hqDxKv2g9ynRW41NKHx41f2Uxmtp3pCAVDCiFuNLAh4V1Hot1Utyi1T8nhfboX5nwDhzg2LdMHJnLu",
  "key9": "2m56fabmGELWtL9kg7sWXjGXP3BUgVXG2ozQ11auBVZUnMjHaHne8QH4mpN17zx3HamLG3961wreQ2NeY8p5L1jB",
  "key10": "yw5gugxxtcW3PpMd5YuntFr9pMxQFKfJxPi2nhr5BD9Z5B4djUfF5ccC1yTQ6JKzRJzmHmdXqXTaf99W76RMj2E",
  "key11": "2BGEiSbf2ibp3szydJp45rLymTLR8F7kEpr71jPv57Ci4bC2MzNdimZrAtL1hwBRZxRGCadVqK7HuF9tLCGTE6hx",
  "key12": "4g3bFMzHjdWAkXjyb9cPe7cdaL3ySAopjXYsFDjVBrNd4ZAW578ReKQDc22QCLkfXizfiZLEFxGBoSK2Cwvk9oCc",
  "key13": "227KDKeqQ99T5ZwM9KKcLx6YisywjUTfNtjinn4nEtWJptjhJX8kLFX6NBgVj2z7smnoxoexXUhJWPznLa4oF4Ju",
  "key14": "21eYtB6ztvsfhgvv2FDi6ABe8vfP5Vmapj8fsYazv5Yu7NURTFABMod1MF4w76KXAL5EHr6FTmZnbmPYFcJPqJpZ",
  "key15": "2YVGr9v9eRRV6waA9EdRNY1p2iYcY5cwuXj68ghpLYgLcWwoqPZV975hZAh4gGdh6h8T5pq2yCjLoMPyuQfhjrBQ",
  "key16": "2zYoMWKw2L19J8oqdz72e5wEjnD1E954oA258qKoktZDZ5p1fCPwszxPMpjUtXPx4RZGUDu4gtEG1GCxDqiShENR",
  "key17": "3jKBcTjFdyRMApsQvSZsLwBZvnceiMRH1dUdpeDcn9XPmf32PHLDqRB4jnqqGYYJGQmsDgRC2uFaP8K6xhYHKYLL",
  "key18": "2mqwW1V4gsbkPFkPG4xvEyXJd6NJgw8iX6NkHr8SzXJ7MkLGUKokCVbWnGoDooojbT2z3e2HN55WQtEfL4VzuQmL",
  "key19": "34XhvXSuw6MfJGX3cgkP6yjG7j3af18ghRYPL8rQNT2WB5frBD4WMqSi4Hv7ezsH1sCoQ2jPuAncMwLSBt6VXDaY",
  "key20": "3NsLWk2JYqJscibvQ1LfZAkn6pHTS1HedGjeN4CfPa92rH7jAV3J7Yww9f9SKN2sT7HGMe7PfGaeJpu7BGuYdFMp",
  "key21": "3U2pBD5PQAu1Aa53xiBK6FdvUPorTDejJ2ApAY5kySd2ydru8j1vc5jgwvpgQUGfG1Za7sw7t1BbYRV3A9J17F8F",
  "key22": "23E8zPYaE8iZmj5UsEnXkLMt8W59R8xYF5URD1fjHzY7pVLJCEYpGuMK8VdfEacKpvSST8mWQynxRLcisWeAWLLc",
  "key23": "4dHA3JssZNFrpYYhe3ZHNsHewhCoeyrzu2LgCHW2cLfzSkJFTfs9tvb7LQ6yMYipicCrNc6evZiUvDLCcro9jVnp",
  "key24": "2SdHiVxUaSVhCSsGoReQKAHyYx4RBvTg8mncr9Es3erj1MhxXRE1HsuhpPrzH9xarHg2cinobykQjE3QJVJBiXzd"
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
