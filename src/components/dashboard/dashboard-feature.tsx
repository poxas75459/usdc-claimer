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
    "2qgHxqhNUpG4FkfCqeAqecpsk3j8XFBoS2tv6RqnPMEPJxpK9CttWoJjwtj85GgiFaXWL9m3FWiKYvDefSKVmuqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m3vsMzNqtzxDsniaKxv8CWa28atF4K94PYWX4z7UhmYwuRtQCrXChphBmZBREumksHLyubb4tqGKXRmFPxevsae",
  "key1": "5jL32BQKF68AgYRtuZ5jDaL5i9JV57WRgid8VHGv4EFmneqSz2E4DPoi4TPuyPbWVKk3kcLBVtU48VbY4dZx7oSi",
  "key2": "3V3wVmFuMN38tHiNJjMvwzncGVPhg7qtNzqKN4DjtvL75kpoCeDDtSysrH6xRXXjeQXXX4rdvgMKNfedPpAyMAvJ",
  "key3": "4JPTNVZeypx7QhCMrS3MXgyPY18SHJyqMkTv7K3pmuMcdhBGVuactTHQ6HJqfhjTUw9Y5A3g6CLgSEVDD897axTE",
  "key4": "48HH93PiEt9fJtvYpD1Q2AsdQhHKgsnGePoQBkLMbQ4y4oU4mvmrrnunAHXYNjWUPy4LmDWniQGE9hSoKu7PNvjB",
  "key5": "4HHDGTPqRmeRstFCEDafphQWWcoAez49sKdZJBsczG4Q4M2r5Tz3YBUo7RTpzzLwq1nNRzQmFC1zrXTttPJ6wRYe",
  "key6": "5ZpHLz9onYE31RXYozivqZWxk67XMEsaTQ2FsoivrFbYNJ9Ec7vg32BG3eak1Et3zg8eEkGC5YMZFtnT97vwK7VQ",
  "key7": "224SKhZs4gaAz6AkrykNft7cLfVLitBaMjWzMrXcDGghZGGAbuzZCabhxa9wG4Nr7pgSdFiX28Tj2prZc7kVkVNu",
  "key8": "65KbSdUfLqpfEtUTrUdLka8BV2rTATWGxpeLT2zFMW4NCs3XBhXVQ2ar5buLxQpustT4rWp1vz1gY8Ds1BB3PVUf",
  "key9": "3bDUA3KNUH9pxEj6F2UfRAB33XXdNyqqxnRNBBiSEbhs1Gc7ULK8FZgry8cL4MuhkyHxeyb7o9imDGCbWQdMPgii",
  "key10": "SMaPiKppPTt9VV1KijMwFq6mbbZqNc7b3h5bGo3ZEA5NdJTJoojKQ6RJ1msV7gLbUVZaodyZESw17TJ4sU2R5V6",
  "key11": "fVBnsCrWMMJrNTRxhraMEavPaGQBNsRSSHNRWh3QfahC3GxYpRb8vy1bjYcsZoAi6wMkqS4g26BGpnRqFwcJEP2",
  "key12": "2KLhauRiDTQXfEckWpSPaWEoJMw9u2SAFJ7RXeVRdwjqn4u3fNAHkHa9UzmyPRe59fPzeTBBQxCFWBQiQS8tJfur",
  "key13": "5zsZuJe8J7jkq8FrHfFuNhVQ3F5HMtejbAYCnY4fjaTPt27TLDtcWQq2uAUxpR5ZP5p47SkSPTtkaopLhScA1HfE",
  "key14": "4skZUspsNM6rMtrDdmaNgpBK4v51Bfw1bqq2U5Xcv2vxvb2AJxcP37ybMDoQkpJGuSdLKw5QeHC65oQapoCxJeTD",
  "key15": "2XtBqztWfeuYnMDogxB2it58ydADawGHGhVFqTAJE3JoRdQu4xhNH2tTDBtYupfpHuKrWyno9931SWivB8myzK8f",
  "key16": "61PoKpe4BHj2r9KJ21yoHW6dj2HXjRYcFLxocXCCQNj7xV17ezAMb64vBX19dq5ABSh3JGbdaFK9EDd8RkNUZYc5",
  "key17": "4X8WLF3LVprhnpQVVPyc1apYtQW8YDs9cwLoo6Xe7yRGpVA7mfPgcggEJx7MjH45yzs2fCruJmqz8kfwTQemy4rt",
  "key18": "4TmxpWrnaxuVRBfxbWEdnqFXa5LZ3YbKNtLZRysiXNdLJ5DjkPccE8UWqApUg6ACH4pd8YBsTd4bukoucmPt4QSV",
  "key19": "2e3jzAXp2exrFnbGLk9MwZFZNBLQoNmP1bqAtWArYnabDeFW3m6UbsyPFbQhS1N7YkQnrKts2zGXQVjDerZSYx6R",
  "key20": "DVwBNq5Yc8Lecf1DMmuCrr1Tn71uamz4hs2w84CUc4WC3W21kmz57ogkLMxDLyuY1oqCfKyBLWyf2oRsuiRnien",
  "key21": "GmhEBqAa2NA8eqodeUWPLQswYUdjcppNXuZtomnWHWFTya5LsGJ8VBgf3mmvYSyfCxADkUEuUFFiqi9zQgUYnYz",
  "key22": "4yt3czyDh7LMPr5mhBRHfMLZDxYcnfDWmz8xnDMPeE1q8B22naSkqKV2fvczvrpLZwwGJfsAt1qrqsADj6RWCevn",
  "key23": "2t36jZWipyvFBHY123a8LFZBhdrLjCYMYsvPsxqnkcrpZg8w5cMYvZoHPuwmPsG6QarPV3ik2osxWYnQBALqZ3Bg",
  "key24": "cWgS9Z1zDfLv9M24PptwAvRSCqSsC7X1Mbsq9hhqgF78d2B1zpJojHHMKEumZcDhub191x7HS4rpvR1QJAFi5Zm",
  "key25": "cZDG74veNLk7kDhEJfoZVomAhqtCKmGHopGmWDMcbjT4Ksp5EGhRVgfaXq57xzZPZZ1xeD2wbRXzCMmDyYGFWn8",
  "key26": "2yJgXVY5UFGwAqrN5ULFuSSsxhFP6EDDC2ZdgQqpT8wbT3nvwKRu3JSn7Pr7GHtBHse5NhLsQ7ZK2GrWeVBmCUkk"
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
