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
    "51H9fzrLg69iF65VugYcfsRDLKk793LubY5BG7p6sbyLp73ft4xwxJ76a86gkbKgXowozgUadZ5ZCNdHqvFfdnJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ktk5HDw8JEqGjcNUGiQbBF1yKXqSENxnAeNygXSAvVf3jXEHMK1vWdJLBRfzibbWCRo7hFa1AXUgwxzdjk4aGnB",
  "key1": "38ncshCU4B8QiZaozRBKACHTidBoxxuXT6SoSf5dcEHuUhYTNA9KKVwNeizx4o4HyqAZt3vCUGqeawEq8UzGvvfb",
  "key2": "5McpX4rv7QKX8Aq6WSzzuRq6n8rwSVYJehqX9R4id1BR81Uv4w2CCDKWP8zvLLBgJpuySRuk7FAuz9HFXQqmqr9A",
  "key3": "5nNGXiTGEVypssEiLF4cKaQuByNDW2eqNqx1f4k73UVfyybAxJ39b1mstvHeF5w7RdJPW1bW6fGcoWb6MDMZdPJT",
  "key4": "2i2yPw4hAvwLmv4d2J8J3byGEYFFDF1YCcWn1f5fpN79wQE1nY8fADxpG9CWyBcmCdL3R8YqdpCdfEf4W63F7BT4",
  "key5": "5fkkfFCCedhov4SD5s9zQPPs4hcGJ5ToE2cQqYFAqsmThYEtF1rXRyzQZyZP76jjB7RJVPtHM6x1DYkDa3dbV9ur",
  "key6": "4PzjPoJDFxwZnoaDALCnSBCHzX5uyiFyZ5NxZy5RCYr3A3S2HzdbBCr1hxaAG6fXozAZpVWJ6V3erFSDuaQybcHJ",
  "key7": "ZvyPGWbeBBbaRsLqkUprWHU7vY6GVjt47xjtTAbxv2WA2hcMQUDa4LNdMGYUh5F4G6QV97pkT1SvzcTRTYr949W",
  "key8": "6Pb744MbMPw5X7fRYEpKs51UkW21x6mMx9qftx4wg5GywQ1tvQcVcgGQaoxwLkJZ1ZnQinAJZswUZVMdocsBXZg",
  "key9": "379ofBzQS2mx9BSp4nZ3bjR6NPqoxkREJ56bzs9532XRQzh6MZnfk43yGaBUtKtcBtZrqfiwM42RP8p4He6wtFuZ",
  "key10": "4W1YUUrGFfDeB1Qq8arkKKvz68fonDsxtgBsh966LA2mi1KUModahSKaCCfs2AjvoDQHwqLDH1KgF4fypYAkUvT4",
  "key11": "KAbQQpJR755BkFkFuzA4v6jYVYoA5WdScdko3MnojczG36X3kETzfmsCsVHBRjkFvX2Qg9FiY2TDRnukhoYcmiS",
  "key12": "2Kivw9arB3awfCb6N7q6nEXcZdJChMeSPpTepP7Czh38WNyQSnGa1jgouGvU1HtQxwSZSkM1RFwGbtX69xsJVKfn",
  "key13": "WavyjisTjyUBURHkVA85EZ8pPM3qh5NbLitgoDk8SsDRf4fNxz78oJMxAiEDGv63BwLR2YPsp6UvmaGuDc12KTJ",
  "key14": "3L1Yq6D1Kpah6yja1prTX3999V2rgyKXRjRdudk31XLxS1YYFzG1CTrbNzu8QLzc3btf189LC5KtkGB5dfu1c5N1",
  "key15": "j1ib6AMcKjUHsBszSM6sa4VgrUUdCjH6nPfMhLgNA3CL93TYgeo6JgVgKF4YqCnfzjcgZcfu4eiVnjGvBPcLuSU",
  "key16": "5DGNYkdx9pKkgBosm4Y8YWpfK7WYM8Eexkey5rgmHuCpxjsfSAfAFqmPAR81qnXjaLRirgWKr6nV642Xs71XmJKv",
  "key17": "3KoytohoG5K6NjhJRZfuk4GzT214WPca4Sf2HNh2BCqqjbfArdHFeyK5ZE2y9WzuBvrdarKwomCY8E1M6vUnVeyQ",
  "key18": "5BkBAxuREjgf56KVhvHPMGv9docUuKN6qK3UYa9BNCYkbgpRhVXYWdPpmKVsXuQqNXKMPbD5GsRs22CuiRhrBjPY",
  "key19": "W6X2vpvUFwp4JhohggfagRkzRXhwXjFHMcRNjLBXDoRt2o7oF2VVjF6XJMdi7acFKUiXyihvW1EGaehNGJroBsT",
  "key20": "4xCVDTffqLKTyCP46MCjhnn8MkVYpipvhxKp8e57Qa1X886yUHKsb11936rytykfTPd7satVk9Vo9ppFNWe35AWw",
  "key21": "3GDuajLEiCtKtGdKvztowg9rPnHCqXpX98qMPFEVrMFhLYexUaMNNuRFzi1864BwMNUgMWBeaXNpHeXN8sdGvBNR",
  "key22": "29aDWAAJLQ2MiuV8upmNyEaoebmthMpNtpr8VW6bJ8MJFCtWerKDRxGXYU2NDXfGqMrW7dgfV8tLPdb4LmqjRw7w",
  "key23": "1FQqBnXFAu9CBKCcWSEdmu4tnUJ9s9246dbEP77jaLTR2wKpjj5uBkiCxjgJosABUHfXEjbJaKsqCwmcAtwJ451",
  "key24": "2vvWcegEmhyb8Bu5tqnGdS96Up2c9dRbh58Ap32N8XjrDjo4fkkeW6ED32h1Y1ZrNo5f2ADqfd6xUr54xeoNjXPL",
  "key25": "2H3G17YjAMmYmJejpBpCaPyhv4JTF1BW2JeeNPB9xPNcHhrHPvzd5TWBLgZ2FPbWmM6bYWBy63Uu9Ttw87VhttyC",
  "key26": "122JWcGzLstcitmQEkN2xnYHwCx7bUDGRG9Yt7zndh3jfiAppPSLFhL1UqUGaYTHf4WjQDgaZKM5LpcwMRXFZyap",
  "key27": "66ogrsUKYCL3ULtSJzXXkRvxLgNrnxGwxRX6sZvq2q6jGHJWqsPt3Qc9C2hn2RsRRbL5PFGLXgaBNPEryrpMY2uG",
  "key28": "2fRjkN7zcXJwqjo74ABykk7YmTkjG6NxEp7cuJjQSHrJfejh1E6jejGjHMJLtW6HqRCzn786bzUiW9vimtRBrMrE"
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
