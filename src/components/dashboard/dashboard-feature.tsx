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
    "5foeEy23bTuHHgjay31GuJY7yX2GTBeZuyF4V9Z1KcF1gPYQt31AWXNXFB43AxyCn2wyMfebQ9FovAXd7frBcjEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFmJMoCPjkqZK7UzUXe6eUB93m6RyJXqyFW5CBW9NqbdwZZmVftr23QYxvFbdATGxTnbQQVxg7U2s5SCifVXwkw",
  "key1": "2E8b2U5a5cEeVMAw6gP9LRAMR68nQgnU5zXT1kKfXoUtXR87mzTwbjYqMtS5SUgZ16qrfSkJNXRSXtxRCsXnvBBT",
  "key2": "5os1wq3UPNyZS3zjEHvUTayofEy6sE2JHCQXszDWffhtnoqkQLGdMa1P7VAGYB2TELubMuetyiq7SwkmcnV74sZd",
  "key3": "5FqXH2aaYsVzXvqsWZp7hcMErTJ2ZyX3g9k7zBn9WcTjLRPVWgUTCfYFeX7KfhEErKAAqHFDiEAt3iu8if8zzNJR",
  "key4": "5MnQL4trPCvBY5gAV3XmBDbUGNCArvZuN7iGyt2aWK4ZxKcYQ4ckSG8aTAjiuwLNJpb3iEoL3mCYudLzK5MSrt3s",
  "key5": "3hRM5Lm7cc7LtpBY68PvRnjn1ygPAGCdSGDETYZeGNKPef7kJasD7QXgFcGbT6crFMWkFgGjBk1mzxnV4rJf7Vhb",
  "key6": "5ZkRYDu9hqbNykyYgSWvf2NMaHCSSy9g6YpV4XQdWESSq3t4ztKSWtBSDD4UpYy6cUJG6FKnxCbtMN7jXanZpb1h",
  "key7": "4i9UgGZ2GUhttasD5dMcJ9dL7ytzdHLSqYfknBiPbsDipRPtdH4Wm67vr79uPYKRC3y5DhEiJdk1LtG8fQJTmBVh",
  "key8": "GxRzwgvHVkPhEh33dwd2px7wx428gM9chakZVcsU1CdCZnXKp6VBDLs4xMgaR4DaFHXV9gqgrPYbYSwnutE8MxE",
  "key9": "5HuU1uB181GcmZt7aCuUUFGGLhUfgzHmKfpxvRsgcWxYM43ZTyEfs5Hpt21zUvVw4neAHEFwDmBsuduWcxMtk6mV",
  "key10": "4kVUgXvFhehPDrg58YonSoWyBe8kPJNM54kyRoc5ZvWVSqaoUVGZDfj73dLXjr3NhB6CJrjiVJGwwuLAQxGg5ZiN",
  "key11": "4DqiYiSf2iHgaV4ocsmCvfVVWh6VnfiiNT8YF2qwYx41VMjS4v1tGVyrAsWhpJ1Y4vK2hmpXccdZ7TYAqJU5C4ZP",
  "key12": "5bB3snBB3zx3gCyrcaAGqRjzZ25DfEd4rHEwRY2qtju7be1vUf5auTJbAPucwzXZ2UapFtonTmibeSFc69Ypqyye",
  "key13": "a59MezrXMzjwHuEDFwEMxnkgbzSgw91NEaRUrAfDgjmbKBobmHxCBeMPdjvT6eoJ3j6pj9aqb9k4hCZJUt7ebZf",
  "key14": "5pkUdKAZ81QJnBHACe4ym1u6yxDsbnF7NbmLnRVsryrPo9sEn21PdCAAcVkZgqKiTfjKsQ2yvtK9eFppqCsXLLi4",
  "key15": "5VEJhxk6uJwmoLcYK9u9iLu1kJNQ1s3HXYuNo4HsQWA1SWCM51D13ohQTkV1CZpy4FUNnf3edoRykyyXa8MTVR2r",
  "key16": "32d7c2RJV8HQxp34kEHk6uQi8gXmoxQgdmZjWq2SGHqBEzRoFiZ7JSLipDRbnhgeTG39iznaBcY1JLUhmcRwK411",
  "key17": "5wFwe97n1nMAUMm3BSHxdWeBzDuXu8QbuDYoaTbfxSJRsJffmW83e4BFXoaKuW9zVUQECH7fjML2cn7uTh9WKHcB",
  "key18": "KGZdBJgekzj2gjT3zLA5yLQHHFgp4RphrPYpkhTSsHRTmwhmsh2WVZKkJ2VVurXfy1fqrmK23zLzeXPFVFv6zfC",
  "key19": "3aFr7zth33QBN7eeMYfNyzBZ8XhTKhc8pyw1zuXPX7zJLLMyPuq5eq9fZYSvwZVG117WGEbbcHLz7unE7DQgDYB",
  "key20": "4RphT2AGwU5SFFbZeL1RD4JfevkA7tT2mKubQPT7L1DQio44RakcgwVEov77VQKTn1gACFSpL5Qr8UCx4SoCbJAm",
  "key21": "37jWE8zfvR6DNCHuA4Yg66kUVgXhSAxHSki9Zfdsb7gaPLpCPcE65ufeKGa8jcR5wghHervzPGd1bsXgAaQn9Sgo",
  "key22": "2gQbnBkugJChCva5xBhXEqUY5JHYqZi3BQVTgvPeUZ6FUd57vFpARnQTW5redT8ErThYEwutg56vgh8zSqogb7tY",
  "key23": "3SiHgPPg9qiSSKTsj7mguKPPN8CnHRvWRKhseRX5Q87itBSw7D6Prxar4KzguqKn7jrqscbNQMS81uHmErwgQtH5",
  "key24": "2qvcbbRzmvj3YvDKcFA7SQjByCdkTDRF4tkDXM1tX1iSy1HbW5xYMZPQSSqUB2jFLS9iVFNkXXt4PssLYJxg3uhP",
  "key25": "3QiQ5T9MgievuSa2yjJDuPhV5Ffiz7fyLncFxVwMd1XJxTFqJbErzn1KUNb6tp6tUNz7gV6JR2bwobeKNVwsyqyx",
  "key26": "3VUV3zVUQhKXo7eiVRxbvCfny2CDZJdLXijdQ948zUt4B2RVw2fCvQuQCHrWoDLBS7FQ4JFEZiUU6XYkp2TnpbAk",
  "key27": "39RyoCAPy6dadbpFakJPnebQhRYMgAdBJ4HMB9fn6pstoVac7F1ithohPvrVbUXx5kRG9cYtdTKEWUuhJAFRuvdm",
  "key28": "xKvdfERjVDinoz4zGzV6cGbRKEium9LJg3Ebxj1peyUvK7m82JD5hfgUt7piP7Ur9v1JGfjuqsbKqUBVyVAgF6V",
  "key29": "FTexbuAkx4UhvpTUHQ93vMnCx1SgK5L3YDXWvba6CqaXLArUBZSVYzSZSjDzmbBRDAoPmL2yqM2HidT4Nsypa1n"
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
