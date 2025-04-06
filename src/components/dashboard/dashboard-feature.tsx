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
    "j6NNSE8bdVGhb4T8vXqD9snUzaQnpwTx1cugaChBTqm4rz4afFU489LEVvzcckCFFJzi9idTDbuZzsMWf5AscaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DpaTmyzP6hXERRnQGri1mwG89v6WF3soiKzDgV8aChnRQQ9KFs7hYeJ1epUxhGz1HGjVYKz4EiELUD1DMS6S39A",
  "key1": "3D5vNt5qj4BgaSCuWY56FF5rGHZWcPSWuGZES7rFpad8xZREib1kVb8F8jojPCsFgpuZXEqXSDGYunYYcVcDEZ78",
  "key2": "5SkyGetkZdRWjiE2DKUpmiyYRH4sK6TZeEh5DynGE4jA5s3t6v5xeKTeJ3KFePfeknBmkyQ9a2z1MtXbDREFZvwU",
  "key3": "4pQDmqZ3jLTy52Fj7ZcJARMBw6AYVkqkTFUkR9Z3MUnCWZpFDdeK2sKtCQY5S93XiNZmi9zQz6S19pAg9wYWCYHX",
  "key4": "23bJTiKF3peUy86XWVx5KfYK6tofD1V2pSUwexQkTX2j8uChAQdqhdmPV8QtpPNJMFJViA3MJgfyT8chmi8P7Cyt",
  "key5": "2Rp4mSbCmjWu2eFtSUHrzBmH1A7RBE8DAaXUu9mFpMpxXTE6kDs89u7YCgWQhhFUmYnh9snxJkhXAsNp9WnofhCi",
  "key6": "4kfRtWMtSWby6WzGCWXcBYoRXjajGanFhjbFewFZt5igLSoRPSV3DnqYha67u9mMX3fvNY1YFSVCULSihoZ3QkLS",
  "key7": "2nm9sfDCzNgkTQJegAoGGPioQoo8SBDDmiXmQZ231YLvSBevyCy844dFVhfLGs9ogFgjykxLTCi4gmbSLux9XmuD",
  "key8": "4DwQQnzTRUb2dpe7LJQW1bdaY9aJUrKjseX37tWMH4ad6UzA3fVokveMiV1LWPXbnGBAVUDYkvbQ69y1b8L6piV1",
  "key9": "2TcNVajYy8PWosaT5n166cHRQwyCqy8XXocVu6Xh8C6LExhLtac1mKbcEjhqWEiJMgh6z5Gu87tJstroii6ug5tD",
  "key10": "3UJniLeyid7qx7yJXbFupRMb4kGBe9PaPUb4bi3EVVAXdUn4r31YjMytc5TbDkUx33x7duDGDZkUebrcmfzQ22T9",
  "key11": "44edv9VoHzGcW144gmK58HwNv61M1GFWhu51rfe8huyKEgJA1Yy7hXp6d1hYdDgCrgME8oLJ8suiV8DK49PXXgkC",
  "key12": "XABr1woFeBArRuH48k4N9cRVVq7XVXqFfkmuNZqZDcUW4uNBwRWLzTzvZcE51aDbafVM9EHY4THq5tCY1ZnaffA",
  "key13": "qNjEp59gUWGRd5g9gBXcL5M55fiTDSGA1p5vh7y21eKKTTkZozKrHWsbUNhcutNDm3FG6jJxWoY1m5RVSKoBed9",
  "key14": "5oXvahwu7PxiUswjvc4KkgV4VcnrLZkF9LbjC1YnVwxYmveMC1yzzqtHuH7Hc7H51W2qGJ6FyzuqMg7Ut7TmgNdQ",
  "key15": "2hseMCDS1BEbrBoaBcZXJzQFdqdxDDqjRh6vYjNJZGD9rAsmJp6owvx6mysysA1QhRUevWW5ehABhxZN1wWvvdYS",
  "key16": "2ouJ5EySKNogwKjbvTiAp5k1ant2gWd7qEd5nrnsyu7eQMbfJGF75ypn4ED9zymAYjDGMUWwc6zYfoq5Byxfu1FM",
  "key17": "3yzNmmxsKDhXR471tMci6NJAKhqfoM8pWuz7um65fqZCwxFV1PdRD1ALoxKJJDB49dcdzferRX3HsuXMKWLoYv42",
  "key18": "5Ah72StxcFhCYjqS7yXR6wArakssmtwjioSw4fyqJ5HoreV4cksRW7J2uuU2EsyRQuUeNPW3HdZyGpJA7r2UpBLW",
  "key19": "22vLSH84MoZNHok6duGVJrQ4UnuLi5tVzGQADHavoMJU8PcbYfbvqqpPB5V2duLxd4rnNcJ56wwnXwb81CDwb7mx",
  "key20": "3EBudEMbvN7WKbJaBjHpqwK5hsNGFCbuq8y68yBg2X3zq4Z3xzjm3ztMfqwmKCCX7QeA3YNVtXNEqeNyqoGmqNvz",
  "key21": "2PmZwzYAhjEgnN1vTNN3DdwokYyMXtL8w25Cbgp3prGo7BV5uGGv3u7MbFk8MgX5PUiyQBmHkME1LPaTmS1miCyR",
  "key22": "5xTnzyuSxRDX9VdzfcKM9Sttcfny1zXaHoy4RAND4vjYXmc8TRYUz9JbwDj38LzKcMTuwT8w1TKkLuPMJ6R7h8Pr",
  "key23": "5kifj23Kk4YVdpRVpnocV4usYWvWXvnkhUa2xY4SHgdBojabnJfPiWSqCVkszCqNVUxubR5rq1476LFdJmja3nXR",
  "key24": "5xzaBiHCHXduZxdnx2TYogmLCQCX6u7CzVoVsJDqpW6gDPNdkwQFBfWWtPc6XpZV92NjeZVmjRZ4jqLpnDiBysBD",
  "key25": "4GNdt5q4ZtUD7bC8XMDjfv6LQphUBnk2LmYQdRcC9WWDmtKenXQzgV963SHodjbWoYDyKV8QezSbsCDwP9nm5Rdh",
  "key26": "2Lj9s3v3vC5bp5YWTPAwuKZSV3dyMXvGag5GRbPDagQq4Ux7pe1X28u3tSfSTzRRkU8t1cWZTUfciHVyUVdgTuvM",
  "key27": "KUFq53C9YKDnCR6i6utsxbUZthhFEMCSGBVVLLkREcX5kg1C257K4TTXFMM9SyLQy3NH3c8jBrnmaAEZbud97UX",
  "key28": "37FWjqhgL5vXpHN3LPHuYQeNEq7M5yvTaN6uxupWqw5ECSHFkLYmj7KkBeQXaoXr5wCuCExLZJN8Ufk8vE44KZ48",
  "key29": "2Vf18F3vgjDKtP7xZPnmne85AnSVTuL1VcCRR7uckPDZirdJmpe7LGMorXVTJuQ5bBAXuPjH8dz8uMdmLkicKHer",
  "key30": "5HqXXwxQUnDDvTTVWUd8V46NMCMdEKF6ohzzB1Qnqpc2ST42jFg7CXdU2cDuanrBM8Az3mtL18dGQvsqwMhUtjXC",
  "key31": "3abydt3eSrCkhMDjqAPV1R5Ve3ZnMP3DZNqFkASXcH3krgDy4Rd3QUU3PuCJWhEnFFLrxdfn967o4SNueWcygYEo"
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
