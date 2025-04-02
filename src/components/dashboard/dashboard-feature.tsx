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
    "4vso2ndLnnbbQwHzoceNFEzJwfs7iss7vuu2225BoSfaxfrj5mSb1fjit1vdpqGtCwW2UtoWi7Px669LDVShXiMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4piqoeKSuWWyeuYRmVrowVWwVLMV5WsWqhuU4aLvAZ7B2GPnSYwoaBnVzp8Ag6YxQDrBTJwPF3m5A9c1t1s91TJQ",
  "key1": "2prsgihZ58Z9fpTymMbLdWSSMwCnvKDqzA6AYe3sCACzxqp5Vs57939Ab7Rd3YF3iSD6wjC12DGXgFWiD9jX6j41",
  "key2": "pfiSJxyqcf9QRSKjoKWST5fYMy3RQdYwCoKuNHf9wmrhP6oBzKt2WmSRKd1BjX62TLfmNyFnmVdhV6Raiu9VaiV",
  "key3": "2xSkB2tWUjanHMSDSsZkduszQWZ1vRGysszpMSr1JpoEiacoue6rcmP2QdVvut6nQXJ3BnmgCqjEEaSDrLsj1LoS",
  "key4": "5Tv9irNTkT8uas5VT9h7j1SyRURdwhtVSu6LVajq8XaB51gTeYxrKXrJNduu1xbHr7cBSYniHoiShE6tdnr4FFNr",
  "key5": "5yaMzxQm28EGeMhYZFY4v9Gvg7auaUu8grvAULkgbQUPUxX5RX1DeBnfYNa2KWML3san9dc6uuEdMtGcAGSUc9cH",
  "key6": "3PqC2zrwKLvxDXuNR4KXY8Bfs5MVVAw7cH6vVp7rWmQwGSUWWzP3FdrtQydmUZUWwjxNjfV9BxMusGC2g5uSgMZu",
  "key7": "2UJYtPwqjbKZ8q7vPjcjKpjbQe45FwQh3Z5sfqnyMosQML285VSRy34KqrPjmG1j4ZUWAdBAJxGmz8Q8jM5mTC8Y",
  "key8": "3Hzr7hjjmRDJDdBpq3on7BAHKhetmtEcuSXtBZSd8XFFVm5uKawejNa8Z5C7S5dfJEhZHsLW1Hm4FVxdU4CSqgKd",
  "key9": "5BmbEihYyPjfuLJZ4BfH4HqhyKhEm5NohMY87XpuagetYpBBJnb2j3e3uX9pvRSwpZSsTaVWdftFR9rYLePbGVcm",
  "key10": "zRPUAyn7jhR8YaVWbVAVNHFMeP9Lf48e7uemAmTUsF22SQ2RVV5QacN9Y933d5RAScQqsf5dCHUHfCNb4b6sRde",
  "key11": "2coZHksJTcSvAMyJLgdXj8hP5S1VPJbrsjS8JL4qDLuZVUsBdaFVhXmcjGVz2j8hmRcNvbgMbKesLD1TjktnibLk",
  "key12": "2HcYadPtcvotfj4ZfhJe8s6rmHMVWuUF7tXFrYQ1Bova5vTxydfry55r9yLuKTWCX7vs9ERMBDYDDSQTMbghnCg",
  "key13": "2qBDDKvEQw9qweP4a8PohEpoGsVW6itNFJWEGkFDvFic5ygehuc6G2XAeXvG3AVQHDZn2z7nwdvjvHa6LL5RNp2D",
  "key14": "smouT7u6codD74pVZbup9gezM9SFRuw8Uf3WpEAcKVh7a8uaRzCuHY5UjkmLHUUmoKAeeqabZTQ1r23jt4MhtXW",
  "key15": "YtoDpwmuV25DT2kSeyAUFfsMsMGNNCAarB2sRetdkEzKgRbt2DTqG2Y1ex3tKHxA7JBS52Qy4LyU6EwR51Xv6bT",
  "key16": "2qERc9e2LySPbTDp7PeBiBopGvW3vxXkfpF4VMgX8QHJQzKw8qDjpnKDQ5yuaJK8duaLbKXZ9zf3WK6X9fJ3dc88",
  "key17": "2MjQ4btnWvtmY6fN1roeyHKZ3APK1gm9PNsEdpwkRxH1eXTBG1eSzPy4zpgmJ7YP9LTHdQoz9vuVzpqL27DDwvK3",
  "key18": "3dcXHwF2EYUsyL4HEBiT1Xd6PorAzikvPCRKijLNS3KHzpxFQ873Rp6CH1pCMkcWaJZpVLM1urYtDPrTrvXatw2i",
  "key19": "5qNqwQjpVLdPvpB1xEYC8Gft8ZLzniePdmtk3Y6PnCKEed2WDfYWdSGfZFUaoEZdgv8puSZ2qGMgCbRJ2dLT7Z2K",
  "key20": "3GBN6ruTti3iaHbaHA8GRAWUiJvfvLiMNoh1VdA7Kgqko9j3eUdP2GcDr8rD6jDeXaABrAYZhprPiKz3P6yyavzi",
  "key21": "D2XbdmbN3vXC7LCEbb7gVEVe2ghCaEsGLz3xVFqQqdrc9u7xFu62xqBMSsQxXPPntMuCMJVuG9MHCUoTsoP6xhq",
  "key22": "3gpQR8ZyJfiapnHpH2Vkuxbq4L93xk3SPPvSdef41HoUi9XwdprVabwerH95HQ9qFwonj9q1BKKe5Abb4TisxNnU",
  "key23": "4z6T8cjnuzb8oQvUdTxtoMPgrY4BKrUcaQ4CSNxATyBRTWqhiBsbYbKiDbxC7Bmdi3bsXYu5e2Nn4LrEqGy7Ke3g",
  "key24": "267ihq7Gh7BWy8ESB5Cwd85Xwehk62oNCGq3s5e8RopEfrpSrenxP4FSwgjXpR8xCJXf8xX6UUFayvcFxf7dMySw",
  "key25": "4gE6hFg9vyQi5k15wQHtHxXhcqU61jknLS8wpic7NoSAAD2AGEoHbe88Betx3fzepZdJCmCSfw59g8r46DcjGpiJ",
  "key26": "fsE3VbJn5Wv9hHUaqy3fmfm62vWm76tGWxMjbARwkM3s2K9is5Kti6JF6MwifPCfep1ifZ27PAWBaGVGwPHRdTy",
  "key27": "5bc9qioXUwSie8t6TFdrok5saDYsmtPqfRUgMjchK3biBNwc2cutvt54cK5MGni6FeKJP73Rc1xEF1qDRehXcXUS"
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
