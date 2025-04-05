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
    "Pi6VdMckEm8PmpxQBoTbnCPbjEcrDByrGqNTRLzJ9p9UuzJqmrL636Cbh2PQz8722ADKKJV3aqyYPQ24ZFQVRk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eRu3QGA2f9GALtspA6vnpS1iJ2ZoQv3mFdPimn2DDo65Qfxh1GAwsstFvVLpXnvP7ZTWHrYEz9KpMnQGLwtQ884",
  "key1": "RFgbXPr3rhMWSBi2CxkRnMDWpHygbFgEo39NrzxbDWr8owdtK89zmXMBM5PDoDLpWRKcwB3x49E7Xi2EQevdf5u",
  "key2": "51frpvnYHcKE9ByA82bAyqWkdjiTonyYQRYyDVwVGy93kTq5QotNu3ywbW8qscTMiMaUNkbkz6Y5daMzDM7rNj79",
  "key3": "5ykdemDVfozasJY5oLhEtmEKDygsh76beGpgGzMnZ5xnGvy8yVb8iJ2C416yRv28TBToaAswkbX6BRXhhafaS7cz",
  "key4": "4bW2vSMriKk55L9Zk6T2yzanm18AaVcmEMwWqdxre94RpbZk97DyT4mAVWRfgjTyJRbigp95m8xEpCCZvFyeQ4to",
  "key5": "2Bj8uXUUVH6g9YbHgNnGRfvt88cXz3uYfi4G5rBbTv9GTDeU5zb4D3tTvF3mpYqDjc2KS8PEUvLo8BYmZRAauHhh",
  "key6": "2szMy8ztpCT6VWn5JGSegQFFp2mh4SubjdekGAPsSkMhbKvEwL2ojuCmfQTpnt9stbaNrDxzEQfdBqLxj8zHEFiX",
  "key7": "28vhRJv5HExLYWJnAK3PjD1tkR36Rpj4AMpdQajyvNcQBEWRJ4LE82XCzeQQxr2Kqw3V6WbRYkhn4TUr35TD5hKM",
  "key8": "63mKEb2Q9WZkpBhwSYnJ41X52GF9ZQCy8UTbHPTFUnN2F9awQkd5WNuoxEcQWtqggTKgXswvZqwjcNSrvofvYUAv",
  "key9": "61wQvvTdmEwny3MBu1cu3fSvWkeZgZ8SkKhoKkHvyCFEwmk94Bd24pnDvvLomd2d2JnsXQAVhvNeB8u6oCAA2VbV",
  "key10": "4G2iMCNQG18Npy8yWdidRejb4nmeBxWsW9kkwucsDnS118YEasK71tULEbj85LSGQWkn14wm5WsnPZrcLdqXWm5U",
  "key11": "5W42ch7d2BDEsiVTdzbNqyPUcbQXw18DXk3S1VcsVW5hfyFBUmWQepoCNVDaMigTUzNNCdPWbn7fALZxuLe7YvTd",
  "key12": "615TYcdDk3M7UgdakXK9odgKtV4sACbR1Ew4KqZ5eYSH97BLpBvRvbxJTXUN2ubtY2Ltp3bQHQZzhZVL6zGEq8na",
  "key13": "3KEnJmAGVL7dkMCM7Q1PbW3DJUWE3KJW32sRRcq9vChCBVxAckdoZtZi6pHHES2f8ohtVqPuvUrfPRsMh56n82oq",
  "key14": "5hkGJTNH7QFZWX3JA9K4J34bHmApdrgVucQkZBr1ekmyP4QnTwdxgAmhevEMRrjgX1x2cS5EHd1GfffHfiML34xe",
  "key15": "43yZiTYTnQ5Kgb1ecJWUtthyJ8f6AcA4dQ5gTBhoSXqtXs26n8sLbpVSqjRdXTJVT8G1EPuwz49NLjcqWFeVBqCy",
  "key16": "3vcu6bdshvydGZiCQV3gqphrd8NpooTjpKJsHcW3u65pKWkzUgjS7XVav41pTdAEbuMEuyTPScKxQh41v58RYPe2",
  "key17": "DT7n6eNjiCvtvu1dRE98nm9gEXrHtQF3yWZsboDG1CzVFCoBVpp51WgEtvJQXYBvf9fyProGurTgCYQPdKrG38q",
  "key18": "2tEUe2Btuyv5m8syLkqZdeRhfUXTZg1wMJFYFuzhSVXG5PKh7K3s6S9WG3qTTTeaL4d1Lic4Z7XB1dGLfeg8aMi4",
  "key19": "2A6XXpxJP5LR3VbFhuNDNkiytKuLfSidtSKVpyPHSYaPBqcKxVLr8L84iYBDygcnjPXXq4bBnbebfXJBVoqmwtPB",
  "key20": "64VcyrTdc4BQEaBnyxn3C5WfF6qg6M561JNnjuydjRX3asNkj4JVPK2vN438ko1daie5eNRX2VDFdu8Un4cEBDzF",
  "key21": "4pF5nunLV4bmpaPnzpuNPw3LtFteCp7xrjAJCUG2FLLqQVm78XKfT4yuPLovqraeooxpVfCyxwoytnPVLjsN3jRN",
  "key22": "5KYicTNQgwtj397ThpGTXk4vAQ7HS5RMuqx66zAYXtBWguy1AwjcEGFdYt8VVuwobReowzKkKNVEXervkhPuN8oe",
  "key23": "3duLCACAnrLmm28yFAULAYYs7pDLrATirfcVvbGb1WHeGLsgnB69RwPRncosWp4CFbybcYq9qrZugqThPAmvtZNd",
  "key24": "3cEq91xHPhjnbUGSWCDHJ9pnW321pnxqVuxCmFS8mJcU1a6pYNtAKuVvBMtXCyGw9Gej5xWzA62h5FkmBosSTnJw",
  "key25": "5EfH8dUjoig8mKm8pYDh6YGpfyjqryCuhr6T8GVESwFbdE5Bw3xRLSjwRstxy24Dmq5WRQyhyoY27s4kUp95Fvbv",
  "key26": "5sxUZc88Tc2nE7YASD9mFVhCDx1grDLcYfvvWS1gr1fnPTef8XbVRRzrDu8EMkM2dzFkafKPpGsJibf6HqT7evDe",
  "key27": "2uZCZp9PizANuGJNxD9Gir2UqPPuZXw41mF8VRU33HFWeHM7YFCV4s5Lm3ny7ie8pDyorEpzUtddMHR1jw4jD6ML",
  "key28": "5KB9AbrrRepLENqxYpoTAV4zAS2T5yeut93Nb5quxjBW3esDCZ3dagDXX9ph1rw2mkU7ZD2Fosca9FQDaqWn2S5s",
  "key29": "4sNLKZHCYgoDcXSyf6FMoUohweXKaU4ce6rXSsJvWnk1EhJyd3AmsL46HED7BWpkG9TUCU1uJYdUYrrX1fXWmgvd",
  "key30": "QdP71Y3szHdxK89H3EMtFHSEx6KSEPBJi2wRfBLdhzXog6uzws1iaSQVYoGzySqumVapnLA6FTWvGjKPvfEs2SG",
  "key31": "64FVPThp2iipjwEvL7pqQKX6MpcS8JEtUmo1Ts42DLPu1gSars7T4qmZu1PrqqMGToX8jwNoEazmHzDGPTZatc3S",
  "key32": "3reCU7qYQRvmXmdb1jNU748vtpbNmn8iERTZTnD99PgL4js8zxYsidfPkaXBpLJxWeEyYpHb5MWsNG4RT4MTLcxU",
  "key33": "GdRdfFnpDAqYLC5DZPNSBavPhpWjrfUyMzHp111N55KSoiPrigPGGZzZAXL4xTUYH9yvCPdCURM2CtNucB98nb5",
  "key34": "3sq1WJBGiWYRCkDtAXhPkE7hnigszEzFxvELv4eXS5fwUKbcbrQBnF4aRpXviHdRqK1voZ5aSzXbSmeN3Tpt1KKc",
  "key35": "5tsMjQhCNv2Vv8jQFBRHwsDBLhZWNHXpq1jThR5oQKLKFerLTRkXo9YLG3Vz8GPKD3GMXjTuoUyvy77fHUwgX9Lb",
  "key36": "2sAaBo1e3hvEXVMyhSSyMcExqNucFGEwcwngyV4of93vGFja97RzN3Pc7tu7KwjxJQaDgfVVcGvedarPt284snjg",
  "key37": "4qg1QWAHWQCaMWV5z25tFDw6F6bnUor5gN2u1CwLYmw4NGzSoPad1XniS7LdPUCNrY1y71nvJJWDmYWmWcd94vDR",
  "key38": "5PfvFjz3sBqurtDb1p6TUWHEEymLWKspEXgGwHJNNgvKTrAc7AuCfTZfY4XBwPxECGpBAWbE19PJeLtnYeLRQsqY",
  "key39": "2pLpvLyahqzg3GoBCZHyykkCq2dR7GKBHABsDG9tmpaw3PndnWhPs4Fu6YaQAaDMCmrMTCr5wsvYSDvBRyuWZnLc",
  "key40": "JEiM6ZqBrymRx3y8W4B9xZYP5VVkqATxKug1yrZVtScgpe153Qe3TYP1D4858YnDUCVRdDf7ygoG3KXZzJGAKCr",
  "key41": "4m2pt7zaiqzGSWXnv4RTdHcGbe3S5C7uLRRxdwkKHyhtvc6EBaZHbWgV8hv3DZqDUzBuv9g9FL3cTTFMMH7GyAqc",
  "key42": "4uuXFTndc5AYHsU19KnazFm6f1eCYv6Jaci2zTZy2kyTPmH3peckkm2Wa441NVZN43yZTLQ1bhgpXD1GbD6gr9RR",
  "key43": "49R6Jjcet96KiGamFFVuvgKjJSAeHBhqiEQMn8hi1kYEn6Hpz9j3zDLx47WMK2JNjAh4kfGE1n7zgc5NFBFJchPJ",
  "key44": "cxGgDY5ouRnG4bTAmNdEALz3hktUG4jhPfPB3EBtmNhp88ALZi48fseCrxTWEomhXjFK6VHRCYAkLLdUkTStQ17",
  "key45": "4Ng4N1L16BonCYvaLakDxxBvCsLddkrJKSs7aGkcMDZ5KAkjEy3n1GNCoDvpBqFLQK3xXFR2siHCtdokK52A2HvE",
  "key46": "3baTscho4obvzcTHbFWPcLF7EYVPpz3C3LjbBGaJ43xBwLuiXMeCGK9RCLSKH7HtzEQEgYj7gdVr7JKSGnZQkWnt",
  "key47": "4Rvg3xcYBRAryV1iGVJqoFjE2YQCh7AayJb9m7VHnpsYPukE2sumqfbQvgU4jMXdNUvbEx7ceiadgL5MtXm6xAVa"
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
