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
    "3KMjiG89KDXU2LiCUpr2389fXHyaGdTug8Zu2nWrFXNbNyWiiCEx8Y1hyQZ3prGFiMePRVzcvpg4rTReYScS1SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbh9ZU7nnXrggGK5c7GoheqZ8LXgayi342DajQjkwUs4xUKQJj9jkAjAsLBedwcm7kAbnKtsgJarJB5hcE9Vjim",
  "key1": "678uc68nnHaWPYkxY88oQCL9ZahgC3tJ4L1mdEju4MLPa8bPCyjuTRdd3godad9mufDEak4xVDdwp3kUbJnociif",
  "key2": "2q2t3svezq9ukQsUUuRdh16FkFD3JUuD4CkwNVTkEfpW3sxwkKZC6i8zQNB7ZuX4RsdBuibuvwuwu8SV8d27NzS8",
  "key3": "4bQg428ammGQEuZRLid9sdQRwH1hVv2qCmH9XmEGf8dySCtoJM9t114qhDKFsUvYV3hKygkKCzMgzVhTxCGDSVCB",
  "key4": "QicGQgeJDhtbjddh7BoxxNPA9LT4i5svy1kkHAHx6peWtnDJ6Xo3ENEB3dnRv6ciXo67wazvbsW3187PfcRsbEj",
  "key5": "2C4xtfi1Mrja2vZZaZCofcR8d86PvAHiXevfVTTN8MUzFzGkvAfDqZLbXYzYB8Lj2SBUiTzkJnBRt2v9x6w7jXkU",
  "key6": "44v9ZrTzG2Yu5wzveBahz9URUPWJT6DdY3BXqtLSVfZzydUNuXqZNse9Xp6qwNtvSQpW5Eg2pf2a7PdEqdkHW3Dj",
  "key7": "28ZfPnU7DpBM9p1nfx5DWU32brL9QjfKmKW59G7vvLr1UCueogFnBz1CNnSc7HXoiJWbF76sQ2Ue9sTBQ34KD4hd",
  "key8": "2B7cEmaWgfUQgBUWLwJbchBr4vgjZW5ucB6gPheZk2hPWhLgk8gYmHQijoH5Mna1U7a1gr5joCCp2WHGZVDVXZ36",
  "key9": "mqRfc4adTgiE8LszTiCsawznMJFFMXkhZQexNEm48n4r2uRAotn3epcc5BXq5MTYzmXhrYTHS6Ana9WSZvWoudF",
  "key10": "2iFhae5Bms8bJKgXKy5kt55DN53DbgTJGhSMax7U4pCwE1cMrRFAn6obZY776b3fFkWS4qfxRu4pcPpKqR7j6MXp",
  "key11": "2JYQ4inG8nw9imafEXK1NcrvVbudnwx9gs62ZSbVUmJuuDt83HGhhSAswQfUJ8nkL8zVHBXwSszqi9w7VjKxnvbU",
  "key12": "3bxeuXffd2qR2HGANQgHFEaHyL6UnDQ3UoP73hJdUk5sy3AvBm23Zb8Muts6Psm2A7q1BMREDCymADGcvFhJBrTr",
  "key13": "3Po2MR9EnEW6U5rJPCGK7JYoUcHrkmZ81WHcz7MmeFi7nvrpi39FjUqjcznD8PbEt5vKxGYUgeMrXcejXcQjcg2Y",
  "key14": "5otugneWks5QVrAVk8QhQgGLKQY3a1XhwG7sbyuJRY7UDc3KHofocHiEDbR1h6Q9vfLVEZRg6ctHovfaMo4rB4QX",
  "key15": "5QCCAH8Rn9Fc5PLR4hwfUweUPKd1oBJt1RduHTa8qtW6ESduyT2BTRaPXU3NPaoe9ur5fZHbp8BadFpXpp4mLed7",
  "key16": "4jLX8PoJsjiQE3WfSB9dgWuReNn5apKAbFcpT5dWWGW5MQojsQYAfArJdTJcgjWUtznh9sehz2c7LW4PyVhCWR3w",
  "key17": "41ztkCyYRgeJhwV8iBUmZmtLXDy1qHqYbwWkWChPktSx8uifSm36xeWqLYpewy1sWyt1k5uChVPwk4YtcPLaTsmQ",
  "key18": "3AmCwqgfQMk8hUmAzaNzzjJqpdSmXC3QZydNvX6kqrVSds636yhsT3bjtg93chWtKcxeiGZBWK7L2nRGAmzQoWTb",
  "key19": "Z8NJNXtdPPrUn1bhtSv8yBnxUteJSkLw7cVS2i8FqdvCW5tsXnXBLeaWmPBiWcVScvNytfTdHLynv7GBQKujyDb",
  "key20": "262oQAEE6hLntn6hv3md13geb9zvvKipHwoAk3uBy4Ff1w43ymTGhaFRSRMgHomJKAHogWUyfhotrTV3jWeanJ1r",
  "key21": "4XnZLYWbXC948JNXxzojpJuZkAFFbskSQHqYQvVbMHQ9UP9PZrfR6UizvrsJsgnFcH4WeHF3GnHshTv2AV9Kb6qJ",
  "key22": "31aG84iC39QcvmgRBE2k6rvrFtCreFiCFs9FLxjjb5sAYXrME4Uufjv8yefhmP6shec42MC9vqmeKjLADWd5F82V",
  "key23": "2BCoNYNudan35JYxPgTdTDCDTHmQ2sBWQKN1eRCjxt1pBWe9YoRpYBdc2BAxB7PWrA9cyJujSoxtncs5V7rwMFsf",
  "key24": "4petfvDnZhQb76QuFji5EDtcuKTKfCeH1Q8AFm5N975PJTQZ5yMmarBpcw24vwbTKEvRoZh3WHoWF6KwMQtNJWme",
  "key25": "kYP3HNGwf9PQ753xZ1ZrRz5SkdmJeMRtt6Mc7hmrXCgSEJgFUa1VzVDHy3ZqUSuNgmrJdoo52NZ5poEBS1WWNAW",
  "key26": "2eWzADLPjARsUbZhXJjGzJf5cdhcCSzXL4MjW2PQpni2cnPsdjhEHormk27r3TMbv4S55a4j5fgZ2fwywnVktDyz",
  "key27": "4sffpVidJjwD9btnXq28pZQRXgepb9WSizsypUDo2JNLmpbwheuovVnbPBrpL7j1ajQV9EeEXqhJw4zeZQnJhKDq",
  "key28": "3MyYvh4BvykeHECzezsogpW4QTiWAm84iBLeqR6sHjdw86Ygct759AWErSxdboA5UYeq2r9PLq8RjLdjLJvjtE6J",
  "key29": "46W5d4KmbSZYHvLanigqsF5h8cSydtqRtTxyuhG71M3XthiJ6pVZjXWk8RUobKo8peWdkV9Q8qK4HTJGqVmNiSVs",
  "key30": "3Nn9MNMK6tb16QbsM5G267Ri7DBFMPQwuDCY7uE3scfkrSZE1CPGzQfYhcqMwbg4TbfJREvy65mpvb6MSiTB1oCH",
  "key31": "66Fg4CAeW6vbHKQ3GAsAjGj6bQ39jbLJVATdk6GRVcXicP4x8w8Znjsd94sdcMvY8PcHXVX8am9EFMcbmKBqoPPt",
  "key32": "2cubPvw8uqGozZw1y46eF4HR5zjVkVXzKkPyZreDPYSJ4NXxaSvWJtpWBg9W1uNG7StXixrWKtjyun1gSRxAB9ih",
  "key33": "4DpZdv1h82Z35ju4PxstHmBjRTM4Kar5T1bhJzQj12XMzG9FtxgyNSBV593WuMxwAQ8XqZYb3GZFBzoVGB6p7sUr",
  "key34": "4RpyAQ8hjVHRkQpeZdwYaMfYBiYK9nRUm5dvtvu69AayLMVv3af1LbY3x8kwMUJexUtw72eTF3fg8gXwaT81i7MM",
  "key35": "4Aowq8m4rKyY2qVmji7VwecfjjPG9anX71fVLAm6kUT9JbFxQLXjCaUcS4r5Kjwf1sFPmbDjvEtY1ZtyuXttRvZ9",
  "key36": "2avdJAiSPkXB8zSzCb8dnZcmzj4kEPChtz2eTSotKngKqeN7vE7E7VSXov5GiPQVYX18WsfxXmXoQ9FRMVtjFuwv",
  "key37": "3wV6qMww3hf1TPMGEE1NcuWqH5gV6kvyoFSWuEu9e1ejRGcFeMPFUjKjC2R4kbHNMTTqRQGNSuT5LARgP76ASrSh",
  "key38": "jd4n5afd8hEw8UvUzRSiutEJrVro6hKyXaiW6MpVMAzZVDmpUPFcNmS9zpCtEyM3fr1412j82H6b3AskH7i4JtM"
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
