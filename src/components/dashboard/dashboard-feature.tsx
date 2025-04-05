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
    "5mQ2MDiaJLrDHZ8f4At8P8DJzzpvfEPkqqCDLqyPw5Y4P19hisPYmSfWc51MYTh1vKChibuYBovdj4L5UkgBWbQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUaX8Fawdqnfa53p4KiyP1HteKuURfsYc5EKeMaySAAyXpx4cEtdff2a8Fp4oixgWbzRNyvrkx9X3nHNT8YUy1M",
  "key1": "44iK2V9pb2m6yY6iSxTpcEqCTx2ktiC1prLvhNwQHJkgowc4sHg9M8kBQDKFPBCWk7Mc6ufqHcSpXJzyW62ecR2N",
  "key2": "mCxbhx3614NfwXawN1Xc3rYrjGzSwBJcVHqjMyn5UsjP8mGxzX6MUWQWg9rkaTJe6PHUL3HgpCbP1jkz76pbvia",
  "key3": "53BGFEuqLUzm7EtaMwrquydkrvwz9K8LgrSghae3DfiYXJnSyRwadY1mqfbwWThHs1HAyTfCszWsnKRApTXBy6jK",
  "key4": "5cnhp2HRPv47VSypogmG2WkgntA1mjwkvyK1QtjQGhUQwnRs1yGyzHEHoKJDrt1hA14phouVXhC3xAA2pFu5VVfC",
  "key5": "xyGv2uL2HwEkQBpiy7iRSqJ9iqWwvYzD5QwjV2nuWnZzRpENG51agnUamx43FeCwLNJxrvQi9zA8uewoZeDXffG",
  "key6": "5DRcPzVvWzKk3RvDdQWRjoPaLy39xa62UqR18RGVzyMD3fcYVHUnJMbgM36LzRTYfHUMadMgnzbmVoDCaKgsaLmX",
  "key7": "4cV2Avwzza4p6sLeKsAB1JZtT5t6dJGfH1EgNSCxtAFajBH4v5r72rvMpeov4VWoVbGpAweXZrREixQBt2sxFirC",
  "key8": "3AhHq8QiVi6D7ZaUWN3mYRbfbrCPbpmM2upybtSxUAavGhmqG7jt2fdow2kN2YTaUiuEDHNv6w2yhU2tCWxjQabF",
  "key9": "2YkB348NnskidcufAjTXdXWmU72nFodebXZCj7rsSxqUpgwsELNG3uFteVXaTZcQPMLdq1VHNetnofCCTr4yH5cU",
  "key10": "3wX3irZD3Fi2tg8fxK8DhyTf1TKTqxeHfGzbeVRtPgTArqQABcrh9EP4m5RiqBoRTqpf6UCSJaeY264Gh3ErpeSW",
  "key11": "56snhSjofpcpBHDcZXFJiBTdsf7Wyqmt9ce59eD5oWut5GRTwhvj54ZnWMZYQ6GyWETwbUQTPpUHK7VHp9NWtjyg",
  "key12": "2akbpELpo9s6GYspphpiupFX2HCJXpYJPDYs7KtV962y7iMedy6M197KCjDwLjdydQGhcfqQXniWeHR1G5DiMvAa",
  "key13": "3dxy7zXPDa8cVVXJ2iAVrULsoCK9HUDmihsqsMFaMhZczDniD6dHCxUdUex5Kn7vUw5jiXoX2UoS1hCqPwywi8id",
  "key14": "4MjUSehiBcdgZkZog4cncT9dNVREyaeHensKg7TgfkWQJ4HjTV3EpzP4mNp5Q3LH93JjdJkyp1zWZyf5iWrXqrfN",
  "key15": "2D7hBj8hKYjwyUMiJdjPh51u8hw2oSRoV5UxKi7VxNGNWhxfom2RqUENYPPpXfRzoA4fbVGuaZJfLPJ1mCaL9iYt",
  "key16": "5JMXyF2u88gABw76Mm9y3PFrtvrZhaXFv9cdSDeDFH9A3PDdkPNAijUY5eikUNycvaYwAKZtTqHYoMRjPtpq5kh2",
  "key17": "2kPhQsyRbkUAJPchf9YuK2PTAZZG4mRXEdU9wZb3iLG48XQzzAR6zfWJdevEk5myUHwaYYur8fEybzmT1vVuqaTN",
  "key18": "4Tj1tt93vNqVuNLaovaDHSPBRzd1Np3kiGVPxuQ7SQm3iv3X1RyU7TdW6zjMh4EZoCLFiWmbDQyuX6pkwWb7xjhV",
  "key19": "LjBs1aCeobdaQgPQ2s3pcbMc5X8vjhQXcHgYNLF21qHiPr32NQJ5tXyw8CDV421mnW8FaU6jrCY3nPGWPqFpQrk",
  "key20": "9Dfkz7HFh9XwRCJkAQuD5yRX55PH8X8BVQfp59F6WQo15Emn9EdGs5HL8tVtv6gkxsczXJXBQSqwCFC1GDsQhxn",
  "key21": "2hR4BvWY8tMPezze6pco61Gy2egJmCHySbnbWmm3uteCMWoohH4WLtt68kiEZVKNLwzgUaEmD9JZKAkVpCEAr2PX",
  "key22": "4r7qUJ7aLT8ASECt3su1Yrddjp8Pt4nrHHbVtLSwDhVAspz44vUs5dqDvQug8vaptMGFSAPEDmszBdZgJmmSFFX7",
  "key23": "59q4JNrMhPHxfjCgPNAbkWji37X4UuZDNiJuW1DFRDSt2FCpWWVAq8bh3o7UGMdHn6Zu8tuZD7SQvNRc1jYiLPwT",
  "key24": "nSx8cASVgDWn1hRtbF7X25QqvxmRanePCqRGPqAtkiEqQhb1ApgevQ8RJPGiMV6197WMZSD5RNdUAPhFQUUoBSC",
  "key25": "2P21sbx9CvJp2R99yu3i2SkeEAYnQd8AS1L3CxvvGLzMe1h9Z3miYeRn1Gjq3ogtXZFJtZstUDzPGC2WmLnDZuSQ",
  "key26": "4JwooSsLh2tkfJnV7ES9sXYcZkUPLgq1bZe1sF1okpQLHcg5Suv3q7GczzfhHtTgjKMRZ4PECGY5vq4R7j1py7vE",
  "key27": "dYXZ55z76u7BkTbjhT5ibg8iPch4po7JpMjwxDY4KZ6BB5rq1aiZxLVxv1f46bKbDo1A689yoENBh5FLzsz9Qgh",
  "key28": "G8r8PbH5otJ1hpK6WWw33n1Qc6zV35sEzw8ifsnDETwTnKLhGCoFvKFgdKpuGrAZsa5zpbZ56rX91dYk4caFjgE",
  "key29": "F9Bzf1Nmwo9UgzNjwxtNEJUndF4Qd7s6WVVHRcnwn9tB8gicahsqbfoTX9WwyqxrpHaShV9yALwPyc2ZkDutrbn",
  "key30": "ZY3PYeWjYeTFrBbFphLQhne8FCA2dV7EAyQCj3yWrvasFf2abzkWYrskX5ifc9avntogthBgVj4i6EuJm2xc7TL",
  "key31": "2HrthTqgUHLvRWZG7C84EVQxXQ8CUrYuknSQo6yKLSkRXp3vkAwhu4ncwb2QkHXEs6GqhXMpC5Dw6fhwvvJ5dAZo",
  "key32": "c7BAH82fYSdrgi8f3g8wY22WyQWLSNV2bwWGaMeGpin2YJinXDbNbDW2XrHPhE2WQ1hvJmWs5viXgPjSFwUX1FV",
  "key33": "Pm4Vm2Eb2Brwdvq3ZB3XnXFSQ7Nu5QHZXYABxpeygZWwuA9fd3YKimmLXS56RuEC5WUinj92TvY4KBc7YjEEcTY",
  "key34": "5oAc1L6d6bZrTsdDq9WxMxJqYTcYZD5c4t3EDus2TaoHeJ5EoJE7YSzaMUDKyvX6wiSFB4HmQFDBm27XkCZ9nYYf",
  "key35": "3dKd32yN7cNDmycki8pnm9gyv1jWjz7mvU1D4VPPo6YkYhzFFx74e3TnDfSkRuFVwczzdFkrZErDxmgqi3NrwSp2",
  "key36": "61bwo9AwieEF6dcw8UczRkdfjaVKbi7AGxFDAbYvK1sJFA6p4nFiHqw1cNUeBzqKYLrBY3imf5n43qZW2HTdpqZG",
  "key37": "4bhvTUfCwXSSdbA27qu3YqSduaZyGBVYoKFRXs42H6QZ79VzY1dMHZBdvcuFjhzmSSpd5hgwUnPFXsDyE2rb7J8",
  "key38": "3ged9h6GAc81nEvqDDXhZC49nhgm9KV6M232TvzAEWrQFW38gbib6VscJpCwznok3eBPe8MmMeq8ukFvBf6UNkTH",
  "key39": "367LG1VdApyPyjrGjQPSgTtUEHJp1vnwgPU8Nm298BaZs1p7gX4561BUuRD52kgpJYxUvkyCM2n86ug9A4aMgQJE",
  "key40": "5uSrmgvbrz5Gtz1nAfM3SYGNbpTCgnfciPJnfAgxFuwHMA4WqB95XF6tngEkHehEYEwKUxEyR5uGweYSpH5rMEbp",
  "key41": "5TuB1RTg81GQWCsvD5HTkiUMduxEuY9iWdC3MfGi38Kfro4cwhuXk4QfA8jdDQPNsEyd7jC3QPkgN6asXBTuAsaL"
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
