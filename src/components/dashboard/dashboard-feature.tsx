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
    "bY67KK6vAciZXmqBZBA3RLNGoSFGAKZ4tecYbGaXhmktRNpQMZwpBsnysfaP2VsTPRAACwPccHm9gcn7WEopXzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vMgsGwKMdv7yt3xghtzcuGnF9zGjsesGQtmjFLBCvKC1uGkbYqv9dAoZgffci9u83kWPXXHVvKpRKFLx6NBNUjj",
  "key1": "33QDi5FHo76Y9HpPimBEF7dBey1AQWUKFZrtLvBD7Acq1yWKFo73aaaYyr4z4uRZwgXno59qFQ5qhzQNHQ1eoVhY",
  "key2": "3QKu4jGAMGnKeam1JNTcCBqKs55bmHgcviHwYowr12vb16mhDpzxpaSxqgMDb7VE2xZpMYMdqLriA5KTNCATX4wQ",
  "key3": "G1nyy6asUtmZB7zek6GHxPEWvqTp15D2YaVxm5Go66DgWE39v1tA1MUmx6H41ShUt4jEQ1wVkXvmUgU9Gs7p77t",
  "key4": "4vSEPY7iW8iGu3FrrckdYMx6XEaxaqr52PiHha3YPkp87kmAJ8mw51EsNVktL8hvTBZFV6dhaFwAyG2nZ4bYnkG1",
  "key5": "4aeSdthRUJaJrYRVAZjcQKqSnnaoETcfLiSDhnUitmaqkSgJXMsS8ohGcAsM474fu6s29i36ekJEHE1SygGGi9eu",
  "key6": "4FALnAVQVbo6HLsFd3e65utgeWkLWizNFa7nddBiN48PmWrne1RpijWszJD7SEdvx8YpuDYBR7ncvAQxdsVjzhov",
  "key7": "HoX7LLvUG7AAsGfpqjMz4yaFi2vbyxVd2ajfyEXdEqJgf23U1F2PdTEE6x61Ci6zDX2Sx7rFEH73k1E1MHUSK33",
  "key8": "4A5gLTMDXgFuqiAkC98nnH54YPR2HNV2Vab4tk6yZing3EeM5X3DeVNA859M2CFTXpqauzWRipxgQ1NMV5r8KDWh",
  "key9": "5NRT73fZd7mMhYwtzYxNJdDkgFyTEXyFqhdGY1HvyiB6BCt3Av6RsfAEW5befQ8AghWpQZFNu3FRvXN3AAumMGt",
  "key10": "5rytCxSEAwcKiRJtz6s9StHpLY4cGwXRPBFPVL9qnPruH94DykwYqjYhvtrcVgz9fvmrK9K2bdFy6YJ8pGfcADwz",
  "key11": "4NTGCXexXwUgYAR1nmUNEvUR44Xfb6CJEi5yhWxBrttqg7MA2NAzsaxPomMUAzREAse6aJtRNbF6qEAoJDNQAcnx",
  "key12": "PLSXizDegGvEZzEh9NBHBHs8rXBizsoubtsSsJszoEn4svBrh41q2zuF69HAfSFRnHVWjTR6yjfFRFfHRseKzYD",
  "key13": "65SZswPKBgcfsUqQvw3jAQDmQpA1h4kLpdftTiHigBKxvoZ5JbS4wsJf9W8r51C16vcJiKegnDgKZgTFaQR5UBhk",
  "key14": "XnjC4YBXUbytwwWCejwDjZRGLZjxyQXVENa5tJi3iDSwGdoXiubQvC6wmwGcBkMbNpnJ6vF1uUHdt6uF8CuRZd6",
  "key15": "3RAf6QnWPWFFtUrewBRcdrJFmVJA2syLsDnZ3S2z23g8PDLGcJS2Uw8BcT4We3LwpU1acCoQNpW7Zmp4oTfES7sF",
  "key16": "3bLqWXCBqEuuapdK1gUmaUrNhbx7xBbBJAW5ycGCTgUrbggSGYNAKsPyoJpsxiTsereKKtVi7X9vKQe6TgFDYgPW",
  "key17": "3vCUeJjwMGTLRDErRvwp6m1Zw5A2Vmxd3byZ9nSBu5W66QVLjn8bugyjSKyxseGsyWRnf9hauJBtJXJpmpc53m9P",
  "key18": "4cdfpByWRp5Fq2V3j1p5uyZGvM9oiyS9Y6Zh7gT8GhA5uJM9HVGgVzdPuk46hq9jvPMYW8nY7Kq4xARRfWY6G5V1",
  "key19": "YZcsS2RrDRE1x8k9TDLhu4A5JaB376YhCJHosAqbKy1dSMpm6vQTPZ9GTFKSkhLTwiidYEB5yrx5vfxgszgb6fv",
  "key20": "5fm5qT2AfD3voy4151r1LmC1zQLvCxKn2UrVUgyapmMcsTm5viEG1qSuSHUdMC18PpzxjCYz4Q2RPLNs2UmB9mS4",
  "key21": "Ny7sdQk5dte4WBeLTGVctFCeJq3yKXY1MHmJvCJLANZ5BUreu4DPqbcbzo64jX4KwrnePWit2XP2mzXos7rwyff",
  "key22": "5KB49oA5qCDmWstXqkqKPvcyh22yBphAQYsTVEpN2tAMFzTrryuCHEyvgFFoCkp2LGG2vdxDYgzxnr2HTL5DGPPy",
  "key23": "263rEQDDLQbnaRTWrKetrrfpCDpkZVVX36qUghxSzTXUveDqoWkBirLUDg32J1QtB5MwKfjHK8weynApxeAT4ZJM",
  "key24": "43bxHBdt5vPcyfrh1ncLLYPDVZvLgbUP9Fz9c5aNf6Y3iLu2yzuLRnePVMhBuBwKrKhh8KHTmnAJFvavmePf91xF",
  "key25": "5WeQ3DA766Am37LNX1kDPg9qd9Lr856vwiigLPeqzzvv7671mFb2daC6scya8NFfsSC86ayvpk1siXGQRiaRgdY2",
  "key26": "3uxQ2FC8ATJh2C2t3xxP5HhSrrmjXx7t1C4XeUXowXqha7FFzTa3jmBz33wtp8zHiuLQnVKZQELQGsTpXFLYfbjq",
  "key27": "TLwLpKgJNqErLbdumDjRL9axpyNxUftxCXi58NRbajiwehBHKEh1cSf7wWog5LD3Zz76JoV5LpfuXxQDoreXZ3c",
  "key28": "4hz4Y8BA47zfeRzp9quzkzzHe8aeir6pT6ZtunYKGSwNs5bi8opNTbM9Nprfi4N2jpdf8sayLQC8rTkQR6jeibx3",
  "key29": "5mieNhLJw5iyy9cehcYDpwApyUXhDBnT4RQk3DM4rAPmPYS4qL6wNoyoYZTVvVc6zRh7ZLPGqTtji1nWBSAKMfrT",
  "key30": "5XR4nnBP7Cvrm1Qr9kQ7gBfakoFWx9pFgAykJgRL3geras1BVoTzyRtqbSwJbAroYjLjJaraXfHD6grnAa41Wnky",
  "key31": "47j2fzXXm4R47NMUrcMBQJsrMhQgmRcJMqBdP24QEobPLdqrSRU8RxZmWq6HQkpWSCgrFcqtTfs8GTZe9G7ABUJQ",
  "key32": "2uNqYHuRS3Sv6qPus4hXwAbPmDJAd6cGRzUxPvnJD7PuUysc3aj5A1x5hDGeB8taky5bB8uqMZe5XztRC7dt6jdn",
  "key33": "3APDF3Kn5L5usPBuJAbeN9ZyfRzA6h3tFdxWg7TcQoGyyyELm4U2PwG5kx4R7L1zmQCCduDmeSquEE2QeZePoDce",
  "key34": "5tR4bxeYdNq171mGuwxpAVV4WPjQrP5Z5PEaAPqPx9oNGKNJemWKvFs7Qqqh14pBdp4C4vxRKuKg2hnPVpFhXT2t",
  "key35": "5SfpXu8U9jQiJHvpoMkJYn5Ramx2vj8kzVhzaaboejAXrJJVW6g9f93pzYZyTSY3s88BDBWTGLpjw7tggirNyKFX",
  "key36": "d1jtFWW5fum7fMPYiY8Ef57pvng5fcYmVWqnVVFgxAaaEFwxmSZQSTnmh8wLR72uetiJALBW5w3ZGjYBzyDrebs",
  "key37": "2B4B2cgTa6gCdttSk8A5YDGArwfbnv4ar69hhoYD1drka2HBZ7rhLAgbMJZPuCsgBqtYPCR5AH1tYxqpZJEZ3yb4",
  "key38": "2TxfFacCpkgE6QBuE3GmtGDFQkBwMai1x2jTQmW7DNst5mWS7L92Wngy7uTqJkMHp5kX5nMhSk78WkBkjReThhpp",
  "key39": "4W1QJeQWXEkJXVXSGVBhMxxrTye6dQhQdu3zSKtfDwbB74SzgMNJFZ7YpGVHuVLd5vRTu81hYRqwhysuoQbcYGuc",
  "key40": "4RzbXqtPpFgJSCCMexTpjYoR94cmvJM5H9qduX6pU1CsAZSfZMUgK3HCUye1bmDErEG2VVcw9vXvVgY7hx5chD8Y",
  "key41": "4DG6QzQhYJpZzbqpuB9EA6xhM8cGHBVyDMYE8dgF4jhGtzSPXQ2UarvhoriARa3scfR5HU6KXtkoUqHKyjAHdx8n",
  "key42": "5tHN3qUDVSCmEoAoJWTku6WS4UydAnfGesRViqthEdiMf6VQWMZavHCPvpWhcCaxTxKAWSEQ1jqstAsobkwxtGBt",
  "key43": "5knagGLc53sUxk6r2uStYazeRYRwVrxx7StYJ7fyj9DsEcf4r4JnqJR28r6A1HhUyNrPLWn7BXokyfcoFcZPH4ro",
  "key44": "3Y4viJTsGvw98PvC2Kf5WDuuPwc4Kzufxkom6MMdVP8yo1mLmYoQ2M6z7jxqzYrCKc3h7iXZeE6WmpMkG62UF1Tm",
  "key45": "4CKrXSH3GsrSG1z5XGjgmjv6j1BnQeyA1zVTXqjvzJrjnS8tgxhUE4Q6js7SCegoSofZjKinNNBuxmkUnfNeTYHD",
  "key46": "5bKqbpwqNAr3xjSPrnSapvfr8kyuiDndEGk8vVsgRCNqAHp9hD2bSDaxhn5bZUzE34JL7GPEVHU8C5ETzpkDsgr",
  "key47": "42d6hmD4kBgD6NXvpoqVh2Bsg1okFrhyAEWguYVoC6H8kCLTc2gpzCekM2xtox1PkoAKec2JZFNX5XPvUMn6byKv"
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
