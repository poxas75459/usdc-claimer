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
    "2BRnFVya3yb3LbtXLSQQGCH5AEFQnpJXnd4A6E2DxS5yEyxPZ8GEpvZNq4UmoiK5eW51m8BjSABKQ8eRxZxUVGe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ymfzz7mSoWDpLsF8p3BCoFTaCF3i5i8eoaYVgmbDRifV8Q1LCufntHLuC1aFddDext9HgnSAi3L8wr9aAekeNcu",
  "key1": "2qNjNMVTzjBrMfVqfkrXi3R3ZXgBbLB6sRMTq6vYyZX3PVsV5SfbNvjEQTGAqjjvip3W7tVFnDH7ivwVVvwzgpUU",
  "key2": "5NWhwApuTK5fWc54ukgTgxJnF2jnBZgZLdNDp6ZUKkTXLNopwjAbhL9vud6gk5wfxcJ58dRwLTB9zjYJoLSRFVzk",
  "key3": "5ihqnw7uyDAxJ9y31KKRrDKreGrJofCAMzf6nrBe3FJaini8LPnToo58uUh1CGsTDKYuAXVDQ3WPWtcUazVX8Te9",
  "key4": "3Y3PKa2Gp9mxefT1L16enzUipnCypgdCgBpftNdxdwJXtcWnhvtY2nzwx8qbGFAffwE2X24bHmz6uHBozoATQLyq",
  "key5": "zbzm6izZZ2pETMfmCvB3pQGcZ3bjQgSMHCQCp7KahVNrDfoDUzMbsom32tWCr8yPD596aaxxj5X8vRg5pgPcM86",
  "key6": "2izNPSV2E7snYyPD3fLniJDDnxzvPVLzm8PDXJVhApz3SkZfBK2ttMszUrhbUdiKqSihWgwavXVxRFMVtt2BEqVV",
  "key7": "EkujHv6kypxB53uVXiarsdJSKieqc6ne3qFmdbgzut4ot2abKP4G9WymGZBgH1e1cz2u8NeL7DQ76WRR6mRaYsy",
  "key8": "55jq7gkjGV1AaGezeBhrKDkJ5U3iWMT1gFzrxj3XBU4BTeZ7jPUVzNy9CpaUC1XXdirzhM5jeG8TLZ67QU7MUXCq",
  "key9": "n48nErP1VAV1X3cFtL3mi3v95eGGY5qK4yboctWYxyAqezbmvo1KACz8UqDbkfwR9i2iazGbZYMR2M4RnYJhrGu",
  "key10": "2S7Q2bZXscUBeqS18uwaiTtrWMaUBVNJ1UacwksZKVurHbDy4ZrFnchGhBK695kDPyVR5t3B2zP9yGLSSSgbs6YK",
  "key11": "4aVmy4XjgA5UrCEwfKqtnMVQTPYvgaW2Rkv4ToDZvbbKTRED7yG59jAT7qjV85bR4uHowtff5hGbd9j6LAJWy9qD",
  "key12": "5i7q8srVoX1GrVoD6oVtrzbRjNm5D7GJ295wX2MEuhCPNja9DPe17f5NA255qiDS93qEDQxnCX5SkVEFkP2kwqSZ",
  "key13": "39ABx5XznHfTry4gLLH65mg9YrhLAvdfheCGptij4MrFsmiLtbqghiKDZYc3ZzuPWsFBEheSdpnHeykXFoyrvLVX",
  "key14": "4quy4yNdpvANFkgD2B9gLPs6qivUZkhtX9pLAhfJDRUjriMJf2sKfdJpL8jNi3urFMqDPY6bsgiXMhmMyXwW94nA",
  "key15": "3wwRcbKEurmZEJEu4NXHjfsjFtizRXvbqk2BTW5C3DCgQH1uF9N6EVZMSy8Vqkw5fBkvu11hnyPp8GyavEP5WJBj",
  "key16": "5hJhD7iWcb46vsFk4CJxF7o7fSGPAynmBxLbMFRigpsiWuQPSB3LaPoJgHGBjmkFYsgNLSLkxnqtQAetnASpt6qf",
  "key17": "35r8o2t5wFChpkXxbpXtGUac9au7vzoazmcsVVymCEqGwDLqoq6VWu99oPgZCkfDrTL91QAWT4yUp8XoGetDG2bC",
  "key18": "2NkdfMye7uXp8XDMJfR3ZhgdiyaNzPk6RQHGr7rUhhpcUiPAdLwRYow6f9cYuQ9sxE4Z931Txma4yzFsN9uvN6Qm",
  "key19": "veUMCtS6Ukk5SQ4GJpd9H7Ssv9uNnfxEe9i8ENNuFonCUrGVbhQcGJnhCqnZebUtEAdBgFogwR5Nrdzcwm2NdtM",
  "key20": "3CSVnon3cNmcR62QxxUfoUKG6CEsyLudBMP6QLJ7AV1Uyk2wbapJ548cuDHaqDqsnYFy7JtZsZjZFSVR9X1xtgrL",
  "key21": "3yd5hRcfB77BAzYymDug22RemuR1jCA87BidJ4trFSc2ovGeYn4Luv2aeB6N3qQEQ9ECd4wtJYnqWEX1tUq4cmNT",
  "key22": "mxT8wpxeXFNryRp7MkRBnCdPdZCSXrdpQvEMPqT5BzNN6a499eYnAJSkxthPDFbHNPLXbgQVqDWfDQQPDJnHUMs",
  "key23": "2ZzW52Y6EXSnHxuSbet1aPXY1LetafNL1LU59i519MS4Vjmbo5XAJhrP6RuGYZ7Dt8rq5e4Py78LkSSGa9rGRbYQ",
  "key24": "4dmxQWfnK6buKsVMXEuSP2sxdM9w1VYYgFXJTrcW8s8G6AEhiG6jUqcLF2UYHG4EghgWZrnZQVR22fgxQyAxxJM3"
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
