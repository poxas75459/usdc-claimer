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
    "3msdnkXRouDdNYpzfQ7d7qtDk59Gg6PYqrodyvtR5G68HBtbJj5SGPMm4CSnYLeAZ4eC4MoUrqYWtQVwBVhW7WhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jEetLnbCoJkf6H4ScB9cdLMh9DhuG2MH4hPDfFRdwGQvVH4SV8hamCEneJDssXFi9o5uMtEATrGc4pgkhJ6iU5X",
  "key1": "2uaZx4DyYP4czDbAqPhuSFfyMmt8YBaJ7gWEGQkj9EGug8xJH6g68w28ETbiqUGzypwEYtwbiKHoYa5haZ6BGgUU",
  "key2": "2r4wFoqvPYVPdzP5a1PDEwsc3g8HTpsH2gEvfzEWBPFPEUFtrB8dDHkKZDYfoPwH1a53iFHhGaedYLhQZHG5e44n",
  "key3": "5P4kAqZQbhcFGwZFAYJiunfWsEtpopH1sutezwvfjM7D58DXowMXvvdhsmPgq1n3rKYY3HT6hH2BmQXVbjtNEv4G",
  "key4": "47nKUtpFTntSsnJ37dv4vfyT254YE2gkSPWbuNzD3YkgdSVXdTc6uJT866dqczuzjd5JNDLt2j37nQ1Pvcn55ZoN",
  "key5": "3y74kAv1CaLQKavZgxA3QdGSL5bmjk78WSjs9wktDxA9PuBbspm2czQcm8nQmERbuzdrXKchKFMxzfgbt9tb1kL2",
  "key6": "4d4kKw5ahUghWsLT72adke3XWPhYfZvkZMyDTXkttZM4Ah9D8mMLh394wBsc3M7v5EiErXF67dJRv1ixa3bLxWXi",
  "key7": "3ndJtCgLup8RjURffBMRLnLHctE4RNMrpBAacFKv7p8oYNmyWeN1tFfu3eTauXwjF1zg1JLmmhUqavyHSTbRgPYQ",
  "key8": "25K7SjrfigQApLpmiZUZfcUGw6zPMB846cQpdyLWBQjjkWD8BYizcuD2ff5RvyKHeXjQrDn2RVrRetWrQqwnzZLJ",
  "key9": "3FLsj8QFyodXXE49Kmyg9uqxzqJiGvbqUnspP84qBR7jtc8bcFXB4vP98aLMVxagCrYouBNYBcXnSTKTQJzQUX9j",
  "key10": "3KKSwgztFpMuuoudRSU6LXYoXSA1Tze8h7DAteYRbEXsw6cPqagxAjVUSEnETBhFYcUMgetLCmjq1w4pHYP6Es3B",
  "key11": "Lbi42MeRUYsS2DSFBuUW2p5Q51GqFHK5U7uWkjWTowL3AhKGuDam5o89E6bKMq98jFmhDQKWEJ41kwasE3ZuK11",
  "key12": "4pGbqzupbk6GZHBhHCC78Z4yQBVFsjxurB22uTUCfL6aCtKZXDjTeMtS6Vh1rTZ5r2CuGK5yc8BiAgZ764qRBwJf",
  "key13": "3D8JM1uyxYe1sNqDBkPzwHiCQGy7wDk4siJNM2M9pzhRTP7ChzR5mdG3z9MeS7uY8c6QZKbxPYwBXezxpjRWwFp7",
  "key14": "29RXJ8JrRNDnZFMEUWh6eECfmKtEaCEwdjSo6WaYvKEzt7tK412QqQpXGA2WRPjQV7zndDwfpHgHNrYqwPFt1E3g",
  "key15": "biGjqUe46jxjeWK23A2PpM5hJwppfkLBeTzX6ppDNyzgZXhKoDSYgyjg95YUHMwnXDjym4bBLMVjgvD4G6yoLJP",
  "key16": "3jkiKgjhAi7KcAucv2xCkT1YN7qABwT2PghtbQaz3K3WiQCE2a7Gzfy6Dix8m3nkdgE4xBDhrd2mfRRhxog9FR2e",
  "key17": "3Bm3DhuoJ1fkJHW5mKc1ijdTLPizx79kHPKVd3UebF2bHbwhLERF5nMJje1yTrMdSmahJXtCH5PcjMbfmHeU5Ww1",
  "key18": "21hbv1Ty5347ub5w9V8drDqbpywStGEU6kis7E2DEdN6UrXsjcCeCAqK6yfhe9aKfrhqHnvZQw3SKNH3ivPikDe6",
  "key19": "4Nr6qk9ikt3KQiHLN2hLDnr1UeVaJzWMfKAemFETQ6aLrqT6pqDVDA3yDxk9LrDJfzgNzwyDb3bUmWNJf5d6SAnm",
  "key20": "TZYJcQnsS3d9UUCKK3XJmsckxNPT8A2ahQYzhyXHSYTCMycR7sf36tMjAULKZVH4T8utqEFFUJ4ymDthmMrhwCw",
  "key21": "4X9Bi8xTtxVxEUNQq56bHajMVgpWHkSNYUYeSf6TQnuSsXdzMaX6V7wKFZvV6XGozRvx8CBRjrreeUeKNj6csavB",
  "key22": "5cHbZPQmfi9w9Fik8VAcU8MAXAH7DK8pYihTLpx3eFup6oo4SVTicSsQVdnB93RGjtJMNtx8mDcea38dXpr9ozMi",
  "key23": "58Dr2Z7VHmfBXpoZqAGNPDqnUogEXFm1PaQrgji5asyTmYBdpJxmHFAVugYb27zh5SwivM9WqhHF9aDDsY1eqXKz",
  "key24": "3kMR2Q1KjxMKk6wSJAgK2cKW8EMK4LP2XC2EhyaxJrMHhbWDWodyNsLdTgE9vnso6u2iDqG8vhdL6aqAfhJBZGwJ",
  "key25": "65aimFRZJraLs164pJ1cadyoPcw6XzR6wyXXyovJgx9wHzUxWGfWaJEvHvBVmJNXHZy2Z9UvkymVu1gqBgcEow9e",
  "key26": "4YEQ6Luwq1ZST1VkX8N3akZ5bkKJxsWpgX7JEZoVQaKxCd3tRfZ67F2oWhUpoub6NkqLEarSGvnv4YieZij1oX6H",
  "key27": "2irvmT8sYcpuj34CVSfJmQxP2fFGNyvxmumAdHcCrGwisxvHMWZrDLMh2LoQWkVMgDKo5soJ6UXHkJ167GBMsurp",
  "key28": "4xqoBbfKdNAsMwbYW4UynoUn6UoEhPRM5SLakWmQDGioaXoRUPGnuzyzC65Z5FcWWB3L341Sb5piBgiRWSsNBSff",
  "key29": "PZbfBgypKakqnSn3wqVWgZ8tPc9fQFYCBHv8joxSaK862LuFuf4tJy4CnMLTik21AdLWhyMKtugZDhjbEssXqkG",
  "key30": "sFmLEiUba9Ja3xhx9x19gkb1BRgDrkWjxFar76MC3X169S7ik6JZQWETzk67emRT8KgemgzhBTRCQ71Wa2ARRkj",
  "key31": "3aUpg5UpHjQMzeZr1B58HyQwDdQq9T9GY1gRAS25cWmRtSEqvpgSWZcoxmkN1mqWKAR5yvabGHaHVC4yiA3rUhAg",
  "key32": "24xgrByoae1D7JGS7oTb137XsGg9eFKGRtPqLMr2h7Lg9GJLTTHV31v9kRZpNjtpvUvfrA3qeFeXTQ5Ga6Q4wVLA",
  "key33": "d5rzHmHbNgE1dfrwF9SUHY2W4LDLCuRwekM9hyVqDu5EY1m7QSgaNQXxirSCzZg6ZLFDpbKXcVvSJNEuJRL89HQ",
  "key34": "hEvcKyhsrqnWJ6obCkE6VT28GgKGSwV5QqVHCxTuigcHVBthSxYXd189MmFDvJEMfLuVSJKhwwFowUs2nwzfqzS",
  "key35": "2PBdy4Xw2odaGRV2bKuhuMWMA8gs78N7EzJNLFRs3C6iUetVdtN3kqc5mCjbANAcjPTqhixgv4rJAnvKTunLfEH6"
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
