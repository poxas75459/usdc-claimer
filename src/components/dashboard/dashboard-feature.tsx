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
    "Nytmqpu5yuwCpoaYQ6mjAmDnt2aNFYPiNdDKopcK8uQ5KabhvteHDk7ejFZqM5GVTtkCK7nJrxVhwAxFASQuXER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oPUznTaL12ZezgxLdn7zAjexLrVfaLBUPU3BHxZ7mnSgNByEvpYoJT26p5Y4uoBAXUGcPat6zDL2WTp4xJgm3oM",
  "key1": "2HoETHmwauP4aRdJW1AVX8Qym2CqEg5AQfQamqa6afsVxy73SLuPgh2QEKdAPfWVmcsjBQjm6MhtabyjF4mVGNwf",
  "key2": "3hzXWHTubdswNnwTQSZsw5GCZjS5q87oVAnmvghgyiKuWzQmh6fDjDtXfKs6UQTwiSaPtKUzN8RDQqskx33kLkVB",
  "key3": "4Wqh9cDdahUwPDbbQDx6mkw5EjSk2LYNsKhuRzvdrsgAWWvsLwZTVboP8kjdkMsRMcFMPssk3nUEuBmG299FFBsp",
  "key4": "66rfVRw1cDjm1KFUBJvgMQkPdQihK76HF3BWwi5xgyVzv2cRF5Q1zPwGLGcVpbszitGGrFyUgnN8XX7rSPgwb452",
  "key5": "4t2HZbNzt1nQznMpLJqEGXzD1eFmdwGMWstYgaMNCH7FEoqZAEQbFfJnppDSwtpzoCg3eYYzMYjZSGKJ14xihXD2",
  "key6": "4HCY6XCdTYhaABTahpwDJtRqtXZpXkWz8xm3H9cAnMwJ1TEW8S5q4zcyUEkUJPfGxdxJqPVPS6qPMTitwf4uiV2j",
  "key7": "2UVDQH754fMgxusCcNbDS8zyYScUNAkVsKApCdiYucN6Cm6ME522yhns1B1zASRzw7BW41yMVrZLKEpu5GGsCDNi",
  "key8": "CCbKynUcpSS8UFi6ihk8uGmpKpcaRnTanTFsC6Ss4pTzh7esSyKA75e8sJVeBwXoARonuBD7MWDZzRFfZdCd6Si",
  "key9": "4hPpm2CXDNi5FsJYvaeP2qdsKjK6zGzZodETthZXAzez1o6ry2HiifRqvxMQ9VXmefgqk8L1uWL3pyUxBUCmRL8R",
  "key10": "5pcFQV26YDKfEhiqpfDGxVkcZT6Mbr2FVYG5UJ6DCz8xFsXusCP8DXKF1uPfn7f8WptrCXNF4QXBdxcTJLQ7eZpD",
  "key11": "4wq3p3f2ehCG6dBBRMAcgMXNWy4Po82Vdn2neBTi6APcMZYSgwJJRHeitQWjRVzGRkfYRVNn2NUbhTGYNSmCko9y",
  "key12": "2v4Zd7gsaFoy4eAij8SWibGXH6buMxmXgzdqxq9H78u7xrnRsUEWcdjU11EH22ZXW2ovYvDhwtR3qETAf5H5eHn3",
  "key13": "2CjbbcbAWhe4ggCbeBN2cU9cJKpwFcytXNi27o9Uuk1RswFa4vRsmC89kigEF6fvGwaz9HJLV38My3jVYEug4gZF",
  "key14": "51j6p9rExC8tp2XquWUcypB2qTSv7FoMK2sjtZb8W2sEbcTTn5RVyHFYSpFWetN2s2XdSDfquY9fHbaFEeQjadcN",
  "key15": "2EDkt58b6i2p15DFsFR92ZiyLfrrwEwNEN4dd6fdjK6t1LYC5S9fLDV21pBg8rG1HgtDLL7ch4xr66KwXJNHBA5P",
  "key16": "2MnqKzsDyW53HwT4K6WP43Qq3qLS1tgr6z96AhgYhSXGMvpdkKLenFP4QNhjB9GY7MrfvtWP2mDoX9EAc2Dd1mpv",
  "key17": "NH4sSV1ppDwYEADca8BNTLcoLCannKBFAuGZF1KRxb7NwjfiXtGe51wQL2DNTRdZ4sNVoqnhFTYLyTYAw3utoCU",
  "key18": "3hFJ1qt6VCrFFT172HCZ9NuwiBN6NyiUhwziKBGCfuQEQmR3LoSgrtQo3y92JSU9YijYLTbQCAyWtH1qfpwhGmEa",
  "key19": "3jE6XrJ9zRv3RCdbVhby3Rk4mXfvP4TttdTKMQuz3kdRFpy482YP3PKqeKYNVfWVqNdr4AbCZQvEDdJQwKCMuXr8",
  "key20": "3KdwUuqKCZNooCHyiYXiFX8aXtmyJq7KfjKQPJLNBWLtyoWbi2uTYxqBmkaSqTvgXEetBm3mULRh4zphLR7w4nS7",
  "key21": "5ryMeSfjAEHfk46wnW5VZ8EeFnQFR8WGnd32JNKA4cC3D5jwCxJvwLqfdbmY211SDRM5NTXJVwBDuEWJfLrSeS6G",
  "key22": "3ZV4hcEF6KG646Rmo9ygocCGbvMZmqZFdhdzvy1GRB1vwiqZs5PgMLQKmA1GXJQjUc5wdbX4fBbTNRMAKn2D6LJo",
  "key23": "35DANYH4TwoqxjMERDNpo4q2cidHKLsZfcUC9W48DfuF5zGYWwiZEcYG9MVKo4dtiq3s32JmDByzzXp6n4hDSp5z",
  "key24": "3tdvuxHGuoKTMWXmmEJzCsX15LjyZWYgwcGCJae4T2Gwwo7W9cB9YXMRMg4NkLJxD2Ro59Rz9iLski9zdkXVKrms",
  "key25": "jZ93v5BDe4skx1PNympaNVagjbXbKnWJNvGDNZdWZBRUJtJuDzs88ctzWYWX8d9Q2znwRUDoy1E2YuNCfturStk",
  "key26": "NMa1Hmp9Cbo7PzcmGgfsm3EHfbGVnZUBcM2wPMd42uwbwJKrUfpPWVjpW4o2sgTjVwyd64Kxbx8JECg4zSmKXAx",
  "key27": "gLRetVJugXmceNudmexF299SA63HwDWSBmAZTTAZ58g4mv6L7roMir48jMxKfRf5DKvpt1eKFYozZwPQbHLztnH",
  "key28": "3doBo4xqMoi787K7fKFgKdDW2j1BrC3HhoNxduEWTktqzAjHydXwKqqbWa1jNCJvbyTwWLy4tiWRqMWPMf9Jw4tZ",
  "key29": "5SvNG6HoHsxYsFe2MMuP7tos8dyJZo9g1rzUjSXyRQsFc6T1xRGA8m3BxoCUjTdA1jLYbNEsf1e31VG8xZr8f2aR",
  "key30": "4d1ceKzJhfjJEPPFzGmwAaYYv18ZCc2GLU9WdtgKfiid51G9beKzAnK7ho7XBV6JKWBmFTQnzZ4UESbdLGTx5Fo4",
  "key31": "3pUjoPehLMaFith8eTXRey8CL3XLdJmXBmoDSCQ3jB4KYcQm1YanyXpGY958sZEz9P5MrDBskEx6QxFR2UTMEiqe",
  "key32": "FRv5meUBLxgnFJf7naXUk6FeGXgkNShCWL1r4kg2Uuk4rg6n7ocoqNNLFf5Y8WjrPCmWePhfPMXQ5boMvSLgPta",
  "key33": "5rcMsKnE47XrckVuoKKV8zmftmifmygr8nKDxtHki3WpB8pBrFgR3jTLUG73Lm3NDXYySTsW7DSsd3w73BKbdyTw",
  "key34": "4vnkwj5Z8aBHw556J4oho89g362wpkjJD5dumNs8FGCQeE9cbGsW6CTUp3HcCVx4kKWSph3uNoySphjEu1GSiXT9",
  "key35": "2rcqKQEXUsD4m8L3XsW5NCoXU6iKQgFWYzRkUxXp8xnW7QGbEbhtbHUCnyr57m9u9DxyiAwVqLJYtvmZVfdEY4hn",
  "key36": "3tiy15Pn8XTPMG5eczMNK49guwCRstap8AjAyTrDCPpmtKeURjip28XCN3CDMn4mAYf6RDxY945KDujxHDQV8MRQ",
  "key37": "3UN4oRz52GxZkEvPuHRqLGq1nfVcYkywHvXHKMJHL9CCXJZMVtrRRTsAAasyXoK9FS7RA53Ah8VGToAMkfy4HyK3",
  "key38": "5Fg8mHuG4kaAL96ATZN3YvVAvG8EvKAqQJMgpgradYct72qK3bT4euoJjZKmTTR4JhGPXCzLUso5edH1Zg5EsykU",
  "key39": "GLnwhTdZCDndC7hheECiyEPPFBnNubbPqBZfFTmyXGRPsVoh5yuqLTaybkuEHngwTj4oWwTPA2Vv9kKPvT2fFQo",
  "key40": "24VRHDS8TcDr1UGbPLM7qQ62YMFyw8RYwRZmyKF3X4XNxM11rCwmPx15CRmzBz9MYcTqtnnBTsWkCyrPnn2HVZ5S",
  "key41": "iDbcbP8hNH8LAUBmTWrxHY2CrJsWVXqDkFMadH6tkbyXGDxcVdWFHwFU2sDG4aHXNXxQUGCr2p9Ea6VdAmuPwVp",
  "key42": "5tdKpPy1PzMkF3BuGCxpY8dQGTHzL3uNLEi64fP7VnBzY5QS1bd1ALTNipZ3roz2P5F7BUEYDFVMAka93JEzV5TV"
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
