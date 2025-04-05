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
    "KXNbpZB2GhqhJZJ6NYgybKQ5tE7D9euSQbjoa8LYK4FgP169qAwWgBLuWkaoXA3gCa6pAhADkyMfWdwcPdnyWnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V1VJBTRhPhCSTWoPwnabo2Diq7EJMTPKma8n9gKcq5Xf5sQ68MbEP39XDnDJnH5wJE8Pdw83GHSg9oeH6t5zPSd",
  "key1": "5pccgLeeujhrdyCAFFssbaFWJP4ii7HHNr8WDdioLf8gnLtPj3fBGgUTijHD9G7fVLmrwgrSjRy3B2sand8ajYgU",
  "key2": "2P73vxZKk2tnM92LCm2bFZgCwTpDu4fK15G49K7BQ9juLh7axCHPjYdWNgCAJYJRspSXV71FpRFNb6JEuDM3eyHL",
  "key3": "64TY5HJJm19LkuxE8KZGsYzZg87dh6R8sVoKyxnSKXYz8MRXf8XEoUqoCK4WRLC1nQx9Yg1WmGNjivrTsDrNPMBF",
  "key4": "iK72t23jeNLXs46fhPjuwSV5onovSybqgUhmCVUaZHnDRDysLXGzVzy88ppp5cdB3mu5qv2gtR21DU6G1aKR32r",
  "key5": "4xdMRPW61n96LxdEoaHdbzFiL5VNbMfBjXsX7aV8DdrTTk4H43UANDAWJLoMxXRXKsLw9eARFkfHSbTaatAKyV4B",
  "key6": "4XUQDMansL1nKxet2GAZFbuggL2ixTvza5QdB6D7MyCTw8NV1H6D9oMtVSzVx9GKkKsG35zdEY2SZrHmSzMTXbq3",
  "key7": "2cGRcbVFdanXphZkfV9aRcJopqXcpCWftGBz7ThaBefnPTLvmLt9XeUZv48p6gfPgY2bbwU198sVc7dk82bFq8Rz",
  "key8": "2XhCcLsTqRvMZmxAQTB4ic7C9D3rCtoG45vNhKr2y1m7TyTNfj2GboPW3gruu1brMUgAbSBPPPp9NeBntXxnjkyD",
  "key9": "4R1WKfvfFVjLm49LYEgop8eusNQp1RnXY8Yv2QAehS9iwEVgE4aSb2nnEnu1iK39NAwRfpGuHGNojJnwb4AC1po5",
  "key10": "54hrpDASHtiAT34jykf2D17LMQvJKUxmzq4iBbvnDnEQs8CpSDRaYCEsxqucaz5uzVMQ9CrsEpXNe2bxcUMDMFBs",
  "key11": "TMHFkZ9cE8fg6kPfczwDsQquZWMQcq3wejmWBByWvzqco9m515pYXXTRccSTC3nakSDdANHmo4khQzXxcHXLgo9",
  "key12": "x7rSz8AFdqiy8UiqtcDbci5iCuBD9mYaMb7jBaTSkvRg71RDKwNSq4mzTCrmc3iSdWagRwWL9msdnHm5AMfiLbg",
  "key13": "nFZ6nGeRLEzrcpg52Fe2HVmLdxG8vCLD7UB7Qqs6EJHvjGo3cE55PsvMNNeS1V9wRxmkyi5oCWxHww66YP7fqWM",
  "key14": "9UE7FsGe8WkWYVJ1hzFsKJMQjkQWgzL27oosxdtHdRmv9MM9i1hKif6VSt7gTdbTgzEHzaiKG3KQBrFdHtbtbBf",
  "key15": "j36d1bmUsA1BHMMLJUCg1qpb3stUJTFscz8tg3Jf4AT1i8qT1HDgnadqR336b8BeroJhAnHL6tHJju4PcYK3Lh3",
  "key16": "sToac1mpGLxd53xVniAWT9BHQ95U4mBmDqHbKFdMTRXkaLJvAx9rbBRiwaREGm9yihdcR8CorCQZKqHN3rwES6H",
  "key17": "56QRkUpa27YiXPrWMPf6VtXKwpFoS4SPxo3XUCb1JdGTWNyU3KNLA25VVcU8ixgbPbcsTZuAgoMz23cYGL5Z4jye",
  "key18": "3dJfARJFw9wJ7dcwcJ8cwUqDVwCi3kr4m83GNiPh5rqeRKrBzABGsFDtdJH5RrpqbZ2Zv7fW5yD7SDZATFiaZPq8",
  "key19": "4sfv55A9ro4MDsP3zx7Bmq3iqWRhE3PNVnttm1RstWBcWfyvZL4EpkdazsrX8yP4imwhmRjyVyaD2k8ctZUS9R7U",
  "key20": "3NbAvMma4zjmPATukBpQPhS9c6Zx8faGaHFwVyYzDSGndNzRedhyaMyKAvsgYfN2FWpVDh6PHcxVDjgeVCEKcmz8",
  "key21": "34FQP9t1bWuRaNg2JzTitcZhxrfYunRh32PQDX6bbe2aCjGoh7PxHM6NYXvQXWc5fLt1qmJJ2eCcSVPYTXhVDB6L",
  "key22": "58eEgdhSBEMBMpR72Jwnz3hX7uoiFhyWzVCKqhfC8FY4uCg1w15HmWSQviDZRWJNX2xe27jowWeKQ1DYjQb7NNBN",
  "key23": "YASe8fAi9xT5ZvXtjJ3B3qNusvRbKqxW4hTjsmPrUD79rQTWBujR44aRRHuT7PrbkxpfRvFEgzLpSf5NzTYceVS",
  "key24": "5ozmr1twD8YiNkTUQpb3u29uAhcUzZq6c6dMd8gAtmpJCmJqAHwk8ULCoYThNtYir1RwTt31wkxae1TojpKn6y1R",
  "key25": "XFVkrYNrtRTnVmjXwHmBFvmAJSexU1CkgbrJ5SrndRRige1K2CGMnnVGoU2s6AABJ4pk516C6A6gE9Z24CvvfU5",
  "key26": "6Di9n2H7kwqzaBw4vHav3vJ3bsZ3FxqKWa7yb4j9W4wzZG3uWZ363CRWCEVgWa83BtR3oaYKD6GgxpLL1pX8aoN",
  "key27": "4i1cYDJ8TzshMcwEnHXtCN2MLd1J7jW8WgAfFTzEAEoKxnU1YLJgXcp3g8VuLcF1H8qTrozGaX7dQjogcmNVU7FU",
  "key28": "3BmreDDDzuxtH7S71DpSN9o8GJQpcv7LwKmqFGnLiEnkUBVG28U5Ev48Hh93FERGCpqY12YAeStgQ3QZRM7vqet8",
  "key29": "4x6Lhroc4mzupH7aS5Lx4fCHYwSUigN18riZMtkTTdasaG7Ax8hd4PvRYCme68j5m97MqExa5j7ubGhvTuyozhCr"
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
