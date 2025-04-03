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
    "2GJtBpxYFgEFqDdDUASBkCdj5rdYfmF9WYGY14HLRJvQb4xA5o3Bm1N36jrcaUHMWL3ZLPZuvA35MMJnNZWMyqwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eSyCNkd8YVop8yWtvUZsinAJs9qfFbez3g4o1KuGXRxCzBbh6NKfbfyDoHAnAhGG36eGXmLZKzrWE6Zddt6zxNH",
  "key1": "4ZGW69EiWTCu5uER9zdtHy3tAxfRxpkBtQnpWDYGj2xMFaWcGvssyRrd3e7ktmGVvCDhF1fFG5bNQbSaDjyM7uNU",
  "key2": "2b8X65XVjpzUsCuZBsX23gzaYbnHnpqWSACrTk8B2nRz2Mrk8gsirXWqpQcCVNacVxoF6K4LKBRjPdpWSic1cX27",
  "key3": "3aFKypi1b5zcRAAmbKWaZ1oEdLuL8tJFaN584bhGmVw3YVEmgBWWWEppt615K3x7UJi1uZbhGt5GqvZfLS46ttnY",
  "key4": "5CoB81HYbQNZNU7W73Wq7Dnt4maNrXpFECsgQn5heAZdV1pU7qSWMRuktWsAhQisxAerTubgsRKfVLzHyJGJt4yV",
  "key5": "5W6NAvhFq3htEu1qTeJuzRnHqTwnWSRGsvAgH4Zz88hi9eVtUtD8RJ7Md48HWR8VRoDxiF6odLq6neR2tf1oDKh1",
  "key6": "8ZogHcFvhZXsbD4GnLdjTBqkQSjzRYHPeFRpSzD7vfEXBv1B3viaW5tGhZ3XVzr8bFuPAsXt1KXgF1W1KT9ddvj",
  "key7": "3upZLuQa164iAstDhmMmVQvbA5ey13Yoajv22PUtAC55qvn1adV2FuH8JA96VxK5vBSfJ4ShQcPFqRoFGAL2m1H",
  "key8": "59RKQrKMsMyeN6s6ApPNraSkuJVqRhgG6rP2iFse3D3fwGZDzwf28i6JCafJroksAbwWbd2NgUggqqsTDAqu4UG1",
  "key9": "4s9rU6iEPSkrf6169iHpza7xtXWfQS1SxXdZGMSkkK6jA64upeqjkw5scmp5gVRxwqTviLVx5R2mc2BCYPo8cd8H",
  "key10": "32SR8mGimwHjH1cWduoQQKGGN2rQoyYYTksPapSDGiDvCfA5EyEgm1uJfGw3PCho1pT2jzr1sdgbM4eVPC9RTkGD",
  "key11": "2GZqtpcVadV6b1CkGoNTnXSuzSBq6otUM1U1tdQFErFLGaKNRR2DmRJ5hw4Uomo3KKhCRzKeMwtr5CXHMswBZuGV",
  "key12": "47AfWY3tbpPmwm77giw4G2Jy9qub64u8LqQHawEbzDknn7yoWGmnBP5tjuN5VnVyLC96wb88sZ1NfpFHg7UTYHh3",
  "key13": "5cVY4HZmTZhW3r8Ye6rdd9UVwfwvbFM63sSLGDXPbTFq2eZrJVG9VXEfq6J68yVJzqvEYYiy3gmWighjxtM2hcDd",
  "key14": "2TxuAjPWZqQAtT81x1kJ7H74qYRmvVMPwXoCHbE82cdRPy2rJficY51Z9NgFkmrWwqrAGJDq6hJd1iwqK8NQQqYS",
  "key15": "3M7yTJFgu95wkLL22hurw3nHsgrgyT7ar6DcZSvWVSAx1ydEKW3UYBFcUWkM4EdNjHKq9GoBnkjZNSNxy2Wg33mk",
  "key16": "43gAXuyJuUToa9ECxRvEZhZE4RDm5LHn26xiYqsBEP9iwtNWNaCXAmHETg3kWj8UJpeiWmsAHbdAbpGLpgzaesFr",
  "key17": "3YBR3MuyuZUWWRW4yf8EfCCJLvauajbT1nhfRrutjmiYVcgcS8darE4BMd9kb6f3NCPmXRKvEwRyDojMg4xCKo2D",
  "key18": "273fDabBEniYKK9EAsePa94bZVJvjgrqcfjvbdZYoAHAarLb4Zt58rhDkq2uaRsv4SQLC4j7zthA1v4383XMPFgv",
  "key19": "4jzs3ci3WfT9JdXCnNe5ZrH1ybBgY4vcrcf1kfSi8h6K1u8vvDQuqMHXD6qVYAaykwpT6HTNKS2aHBKnVac5ak6k",
  "key20": "3XWosQQ6XE7W5udTDtUGebqJ75EuemvjbzXyuhKqaEH3eN7Miokov1zMXH9X8DThPGkZpP5jYhK18f4ZvpirpeAv",
  "key21": "5RywJ7CecqSbsfsB7p2yVFuzqeUwwnWvtkphWR3Z9cynuJcWrRgWtv7aQgxM38zDmVwxH2XSA2sJ8HcW8TWBgEHT",
  "key22": "4DHQ9M8DbxBqiswayseXXCvXZfeoMgdyKM5tzwqu6JHBM3qMVrppPwuMpWW5C6PNLo4fhwy4hoPyFJpQsxwkw6ES",
  "key23": "5DneEsDayFD15rjYfYUTVfg8nSoKhvv73HRWE1god9ZTADxLhoTTSMXL6csqBypr1xwhNPDdVSPFwHYuFPspfqks",
  "key24": "4eBsmgapykQDCEX2SnwYhD6BnbD4tx4ZMCippZ7C4NutPgSfXA2iDC956WvZS7YoZ7nx8wvuQEDwQWagEaDfAVNw",
  "key25": "2DS9VfWtX1LdCfn4EoLNi6ce6KHNYHZGz6tksMTbedPuRVeM5xuYJw4CccSqpaK85wEAyC6FomVRbh1iQdNeJ8Ep",
  "key26": "RutzQcDxTvxhMchhhgsDYpcJzUBFCd9H7MPdB2pNp5FQAyYcJAjfznMwWdTmDYZ5dkFkMQLcsxcd8pQEo12Cnej",
  "key27": "5TaC1iEwTBpJ79NdCPjgjVuSmtkVqVAoEpNxmF93c6BrU4UbRQPnPbHB98TjMAgCo3sh5gxCWcaz38Mkc47A7n7Z",
  "key28": "44GL2zaUHLwF3ypwcKDRQgFL6F8KbHzN5bDUJGqz6x7XPtJpS5xFs7Jhf3wEK5j1J6fnc7t8L5gdEXXDAmjckFdk",
  "key29": "51Lm636CaBnw377RBks4dqWD5NQQWozcnhXGAg7RTFE3p6Envj6yah1U4MxLg3McBKXg6sWzm8RgHthXDzPDZMmt",
  "key30": "53gJDBC38Zhfh5VPe6qa3NzRyt6MbkDL9r4bxuVgKUYnL5RoWc8ZHE9PGS6doRJ1uRjCDX3GuNA8msuzFE74DhKC",
  "key31": "3X824mkShCgvpYS2BBib3EmU7MmqEr5mY6USkaRk3Z7QD6qeUHaF9Tj3jwmKJZpjw83nNiwYdzDCdXwYV2Gy6ieT",
  "key32": "3d43Xnj6PTvF1E8BJ3ujbuXTB457KD1Mo6TqaGbyPveD2CprKGWoD64GSmegWkU2K9FN1sB7NNUqFWDcxEYnX1NV"
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
