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
    "TD7Nny8Y13VhEQrbNHxSG451eUHYPLwabANNQEw1p5k2KAavRLRxr74AjUta6GjXU1sq3URjzT3kc8u1QwkzXGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DU4mfKwVKqBjdj4sJbqTkWSYGiaoZKnbTGU4d6HDDRdm7N8Zys34bJdKR4aU6fZE9Xt9PnUU3vBJF4yAuuqCRjw",
  "key1": "34jno2d7NXcZMLtaoahME6akJ18QSwsTAfSRQDq5wRaWbdTVw8rXMs1HVxCX9q1rZUGCjfFjnNBZty17eBD3NG41",
  "key2": "22FMfMWDb1Vc91WEyEqyHcKiEzbjRsaLoj48WTk9c73jstG5LUamw8L8EtyrmX9dmsxUb8z9ey2o8msJwX62HUz8",
  "key3": "3vHrXqCB52kqU2Hy6gFm5zbjg6Bz2WTVgZaVQkaQMMtt2KeieZKnXb13M8cyfJsZ1G433fhkMzvnqsXcQ2zAUx6i",
  "key4": "65ELH2ey6ZZpBaL3zcMQg1PwZbz3KFuZgAk1mCXm89GfyRHhHL6SyQX1AMps4rLodxPQTN5tCCswT32X82BBdzUZ",
  "key5": "5JK29sN1kmtR9yMLCPp5HjnLaAdQj2BzxcAYaZ5FgjQ8sebAvfJEKNHEHnihQtCY9iwnZvGb45a6QoLphNUbeVqH",
  "key6": "47t8FGob6CVv4fuew8d95JJkECisgpQ1Y9rxm6AuHoDYBasZH6jg1QGfy83anGrKpgDxJPhEzXqC64aqZ6ATxs2P",
  "key7": "aFpMkCMMzKU2DywSYd84omEngykH13io9kof25oVWYKvzJknrFLZ7X2fwskVQk7AsFBQqnjYhaemxSriLFv1d6q",
  "key8": "34bNU7fw8qEdtGBTfQEKaruGuVFb9zCWHjuF52Ac2sDRaLgn2smHNN3TumvBscEuj33tYE7b4omQAENxoTXs9AwG",
  "key9": "5wLTDyDL672jmjinyFsNrfEVb1TkWaopdSeJKPcyfpBpzDXVFkXE3wSDritht59MeXWJi6d428DehTtR4EC1BUhQ",
  "key10": "5HsosTwfe31Di6DkJDU4EdZtFN8r2T4VyV6BcpEhe4RcvpyawJpvaYHmKE3yYmzBQTRTght3844VxUv32N7Qfu7w",
  "key11": "wiGTtwG6yLqJHHsCcHqfK3KSLrDL7SVZZK7PrkWpmxNs3VnFs1cTUxfsTyVE71EPd1ynVHDJ2X3hCgJR2BU8s6i",
  "key12": "2DJJ5WN7VzZn4CrU2kFPpSFL6nrDiAUnetmVknjzn49Qkvz8ciPBummWYQshckz8gyxJP8vGvgJNa8x9dUr8dQpF",
  "key13": "3rq73Z1vGSU8yxVMGQkf1Lh24BgLgUmiFwaPJVcyGdvBsxRF1CrTUa5vJASuRgdToGrvBHTyBkHeWW99ckULTRC3",
  "key14": "qtRjrX5xs2aHb8Rp1id4stDSExVcPJxibfwsrnBaxJzFKCPR3ncvL8nqcqEaSw7pMdHw7pwY7qk48Ziy9QXavu4",
  "key15": "43tKATqeMzRroCCkH1L5A9kCu8Af5ErF9U9Gsa66EHiE2UtZ3xUKiGsR8HpRPA4SwTSsozfaX6DJ5jWxQLLCvVeE",
  "key16": "2ZojeA3p9E1zjgjoq6mHRbzmzBfDWnD1gh4esWtYW3eZjfwaYuLpTJrLb6JzkfWiPDLqBTezs5s9Q1zwHAVZfADZ",
  "key17": "3WMJqyfrLjpsj5XMP2xdgV8maKdHAQDMCvRud3J7jXsagTVBYsZFbyanzjEZKDR42rKqbsvAnSoN9BgXzhVBBSYp",
  "key18": "4E3uQg3uxVtZNZB6tffcJW1275xd78uM846QSeHRups9e7MhsjUFtSTX9ViYv71TFNSZWJdTymWzoV3NRiEsKitt",
  "key19": "Q6f73vhP7bVSaDk6xjMAT3qw4mF8VLiyoTQy3YUMx5ZgmqSFYyoXbW8dS8Rd53Kg1U6cR7jT4J11ys6qJTFJmNR",
  "key20": "3UkuUTeDqpETysWp7tGuKhWd8WTAU93adFHysi3qRipxE4zbq6Mp92CmNCie4T4wv8DorT3SPKLNiUjxFk5k7VEh",
  "key21": "39KbGeQ9Y8TXrndrxiSfqRr2uHst312oTYMwaCKzVhFrKh5JwzRLCSeTzxBpbrA76aQVVQNG6HGyA1oZA2JyBPHo",
  "key22": "58y8SaseYgTXxAPT3XsdvmYUgk2yt78pevqXyekW1rEq7RE2kpcpZphFFyJksANBbzLQU4tkKqwPQy9abUYU8T5w",
  "key23": "5W8mrAo9EfZGBANmbcM7KqbTt4FbdND3hYvittWnp5wxKycBwfLrpMLMSzHVgvRSQURTAeY8zkKS9jh5fAu5dEjT",
  "key24": "Awwh6n5qfyUfEZ6ZMpvg7sxmyCPDTf9xip1htXTuuPURRR5xVC3BoP8saMkrB5VKz9CDe1nSZeJcXUCNzz7Mxcr",
  "key25": "3VmjAhHBmZNYShZuZdHXNH4Rzqu9kDrpPtR3K6MRFDJCB5TFUCTscULMWhx26qK3aqug1PuhG8y5jEzcT7749zLf",
  "key26": "Ci63R7rM3wkBniz8nEqeFpGJLFy59NAeLQ7pEtWeWvaB78TppUyM64R4UqjvaJDxf1Dg3Xob37NZ4hTrvwxmTwt",
  "key27": "4SrTuPn65ttiEhFNCXAZzNTonfFSkqpjJ5eTBrcNQUavjsiwU71SsrP4kCDjz366CmgVJ7wy9At1v9Lq3tXr1Krz"
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
