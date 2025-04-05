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
    "5DcgvzfW5xLDFJBQ4TQZ5ccvEj96mty4KzWfWhSkkXKKaShwTDpqcu5JMTVSyCJ5r8gHDjdxyswojPBA4vnWL9Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32r2b5vUpPWp8KXb7ud8BMn5kYLLXgwpGNuPmJkBzjZ5pGc3nbaVjon2KpcTopQB4jstFn8XUU3qhBthqbx68TD",
  "key1": "4DvUQ5GwVztWkgHUyjqDQUowoQqfomzVfpuCDNFhNz8EuWBa1wjerRKbeYL72rmUUVhJsQCGv8Yeb68VJ8VJHM3n",
  "key2": "288QDUFpRRTkEessHTAwvRnhTY6uxg9TsM87hNGsiGbnr5k73vTnnDyviAztRjgQAqjUTRDhDDobEBoa5uqHxGQD",
  "key3": "2WwuHkrGe9NGBczwr1GbZdP2ZuQN5mP4gUM5wr3zdoh19NyrYpgLykXDusEqzJ3r2PWyaYQPoE2orSPTW1r83NR2",
  "key4": "3gMVJyEmjYNaMkjsgZzV3ASSr1EtbAPLqngZbHUUQYa51snc8vn1x3Hh93orepaQeqeqFZMVPXKjmD9SgS4Sn2z1",
  "key5": "Z8hf7m3pYDnRHiP7k4aSxyyQVRmsYFm7MRPF9RKHGK2J4QgWt14d4CJGT8rrqqofyEkoikYX55gjdf8p4dVM4MC",
  "key6": "4Kw615EWApRxkJsxf2xt2ZsLteRjWfMgEcUrFbwVqBq2TkaSfjSxWJk3tuJgHM7472on9yAYAZddW9c6iToeUYSC",
  "key7": "38AJGudr7zzM9HQr1Gnaxg3XanEHwVUx44GCXiSZ59528eJMcgbs4hvtj5GFf2Kye6ykzQYFgSJXFRGWtZJLpEpq",
  "key8": "3SXh39mAPioAy8gFVNR5wvCvAttJAa7Y1ep3Rt3KtYtBHxgs78xtC3hNQnnNgWziLnxA1uVa1cRg23PNZw2rLhZp",
  "key9": "duVaCxUekgP93k44goyGVmivn8a9Tfze8244NrXgVMo7swXK6uc3hdeUD4gf8AKthqTxHPCB7cWUGQMbn2siFgN",
  "key10": "8UPMDeCuTsvntC1hBuCLg2FS5TZBmsghcCQdJufdhLV21BxReZtAdngQCqsBWdGqKZhqzKq6osSjBzPbdJdoTkg",
  "key11": "4Re6fV3ivP1ZgCeoQ4iwXm3i2TY4UfUCNucxED5eHvMeBw4KvVK6ivvpzu4J87Ann4UVkcegaq4yzmLR5912Kvk3",
  "key12": "37q93qsUQJB5w9wBSeAWhqQ7Wgj9NKu9BqPZLqcg6ov41PAcV6WAvQfuqgS53EFjEiNzDjyj2jXS6nrgcEaprNu1",
  "key13": "2exsrH9zxXfBcQbYysUNugYudwjMUUm1h5UL5WijdeCVEiYtJjk9QxUEZAdQahGbvV3EGZatoLntKNUNvkVjJNUy",
  "key14": "3cN7b6srD67xm5ya46sifYp6QHoQVZYnJD6ayAsyAaspBDUGEVKCzquGEuCwLB6wJ9W8eKBhpFmsL1bZmvDTRu8x",
  "key15": "wceU45PQXNLPWdwT5aUdkXSYT33FLf42GaCdzNHHmPCTAYToGRtKckABt1zeUxy8tekmpwy7mtStksu53b8dTr5",
  "key16": "3gWvLD664VaUiq6HGhg7CUKdEy5vs2wECzqdqGkzqhmeBe4fJfTgr8cGZWkPoXmB4qfn6kSBDBbbXLfNSVX5Nxuc",
  "key17": "4znRq3DhLKiU9f3ukh94pdjrvHmSRoquRqWjuew7UNMKouwds6SBrLDDFEv9jpzacyUEVMKyKe6etTanvgD1St1P",
  "key18": "5bvfkvMZHriiqbLX3ZtVsikBfwmUZMKjwRQn5oQmsW3uBhf9J9f7t8MgSqEfuVKqJWCna8eqXXR1ityP6YHPR9W6",
  "key19": "5LjX32mb6G4UbA5shrrymj7W5XGPijtNMuBNXk21Zr7Nw337anSazM2cUgUWnNSokoXK4N8KFBPbPqmEa8D36DhM",
  "key20": "3aqiWDzQMyjdUv9w2NWLD4S3yHnGhNbCDY7RDV9WGC7cTRa69rNsv38s71WL5Qo6V3nFqDh3768f7GLmG3tLrEpm",
  "key21": "41iHPQB4nTQrwdB8BDHCiNV1c3KZxYK8fpkFSFep6Ys5n37Xj6tbKPBQr2msx5jM8ruKdHtsdad87rzBRSfeYHAm",
  "key22": "5nknv2iXc4iFBBY2kX9odRAns7v54hK54EtgD7LXSg9jWMkgEWHEXpszhoLFaE5Hwt7yb8xb8WENdyLz79CAnpKm",
  "key23": "4m3C7KLkz1UC7xq5Y3Dd4V2CUgnnLsRUsjPrjiwfxFqbWBZDPxQaB6WgFv2aFjfD9hAvSAGpa4y7Sdr8fQJEcQzN",
  "key24": "2sRSvfqP1YyKtLLXvLWoLoAoKDquGrYKoPjCGb4oVRXydUSWL9eiZdv44EB6K6Jj5mjrMdVRBAjTpkRyakfHfaJ8",
  "key25": "75mCXjh6rAEsN36KAqUAitCeKDbvBy7gdMSJn8g2uRtJoQ8PYjcji63C35HekE1s7D9TcHb1fvrSck4PfZAMG9A"
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
