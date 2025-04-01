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
    "3MdQkoi7FcXuQPLCTpgogFFWeiwV76N9ku9CbjB3XrDKRGU5Ea9M2RaHvfg2AmnACJqtxMDMPdm7dyqVD97w7yJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XwrBeJnqB5tCAbeayyzruK6U7RSpaEx4TMciJ8e9rnxDdKssru4CPt5JzTNoha3LfZ8GecFmYe1yR1rpgPP6AWV",
  "key1": "RvRGTEqHNLv7vvVkKaiJ47cB8kLqafbCVnUPDhrx8LC73SPuB1RGEzZxBDD9WueaXatg66fksgPmRvLCk3ZR1aR",
  "key2": "aWUWju65nzCXGVMXEecj8NVr4eJtib4GRMEqBgug2wvNhqbv6PAhFyNGoXwETcvEDQgVmm42vi5vVyRAqiKpFJ6",
  "key3": "EqEjToeC2TmoKzQxawE8SKSNR3AaJuWGAxWtsaTNHFzAmQLFbSB7c2hnRcnxK5mWZWtgEo5jnjmCviCgk4yHZcR",
  "key4": "J59GTr61zbmNZUVTZAWBLPoN3WhaATS68VEy7RnQdPNh9At6htnS7Hr4JbiAt8KMY4jMYbsYMqXgvhvsuZe1kgU",
  "key5": "3uNJ38GCwANswFcfzctFNJ4ZPGbE3nNZv23H2nXqrSxGU5nHDBYMthATyLKR7RvtfwiQH2Jix77rmMt4JZF1DF5w",
  "key6": "kvpiJAEfrciat1EmTrrXrVeE5oX7Ge7NZV7CT1g8kwatHtLEGV7CBtrFQtAhHaNuR14E9iA2HZteJEuwpiZ66rJ",
  "key7": "5cYysk7tyR1zgd6LnfzLnNeR56P87JqaF4KZy9SZE8EBPLk3G1MUuNMcCkrAQw7o5tsfEiZ7x6gbwBhhQwxU9Exw",
  "key8": "2x56wZNx61c8YEGAbndFuhHAq5QCt2gmYPRD1bPvAEyL1N2yfbEsXJZ77zcenAW1LZ8VCBq3XuAP32P4vynTk4n4",
  "key9": "48MKYjyZedSQkckdrDdLiMFaxYWJyQPdWok4ALMHckn2TSCLJ5SbU1JZeZWh7HtEf8StHyoqqA9RGixh1vFChUE7",
  "key10": "2KQPguCXvAgMWUt4t6VRNYMvEqmpwbL9dhnq8VckFwFQyMxQjTCDuF6Lpa4r8vnAuubcUvVJFHVsCtCaMhHeBcfJ",
  "key11": "4yZMhquzTiMdwqij2NHjWxq9wp9ikAn9XpEek1pEoSpSEczu35oBP1dKvMjsAXbq7xq1jZdnMVmYQ43Cyt4ufMtL",
  "key12": "5Rvz6bSBmmNzedTFFLEXcCCv8NUi1i1AG8e3ZqArdW5UHLRWNCUD7r9MhsCjQkC3US4s5KfrCM9KxuY8GxqW52CW",
  "key13": "63XaviQh15gGohK1MBTFa5BDyBFPQ8jqJmNKKFBz9iQ46ghPBv1NNQMGumCNYhjbmQUpGJZhFDStwu6nS2dDcJ4w",
  "key14": "3DinFGjTwNVEDKCuz59eb4kh3pGGNjK88N8smxqr4inYU7ucLPUnnNRx52hb4h12gaEmuRqb5C563ykJdvCsprsg",
  "key15": "aCCG8LQVGY3cCL8WdY7ES9FzcmQsZHK2kvoQVEiBaDACwS3pF8aBnNXT3Areqj2fzA6A5MvDe968mQxpzEfTXjN",
  "key16": "NXFQjXMV1Fw8pWWGYHibsVSQ6pjYR6WuVV5SkVSL6MWhwTW2fm38afAEZWKXaZKyzMtuuES68P6VEJMBXrEx7hc",
  "key17": "3PuU3zQf6tqfxDvYYxBjfX4geySmUmPJEuAu7nrtKyHDf1HG4DtJxTZG75StUntV9s5pNG71xu7ZuEw24TkxAsJK",
  "key18": "3JTUD4uPt5VY46KL1iL9Pu1DDgDEQTPbA1JnneRLTA3DUfgVbPZkqfesZSUL7m7ZJnsZQdJcx1w7VsbQZ4XsWLh",
  "key19": "3zCWTeHRukxokdhPh1UE8CKSmbM4AMUhkEE7GdbHxzPj7GnhydkBAfdsikNiQkiCNFKF5nVASmTYPwwGm6ki2bY8",
  "key20": "2anpgxxk7UfbhBytwEwysZrpKH9hCXAteJWMkqEbV1kzjkDsg1MumcBpGGAsdDHBBs7eXum7egv8YWvZ7Y564AkE",
  "key21": "3gCLaLmozx6qBzUiTU7C6aN3KsKR7PZryJEhHxfvhd3rZ8YPevnrwB5mqSFMQgpfj5iqXwmkivEqKcwQ8nv7JA5H",
  "key22": "g9QJiMgEtXgJaB2jzwja5kSkSeR1ZRfmgvsjD3LUyXLywtGia35hmBEZG7n9w1NcQfNUEsrGbvMgupkd6gWaVnz",
  "key23": "3WroEUTbgvCWxndR614feagkmf6doiLoJriD1PpW4qxvQXy3SKkYiYDyiTVrTUuMZXvC26MX5wdwtNjbJ9DYwq5g",
  "key24": "54u9786hTEXu4v1q8F4NhLAofwDA5MoojrS81m8sCck7U2oHq3DZ9DUjg1Fky36dDP77RViCVUeb3sDLk8apA7Lj",
  "key25": "2NYure72n3EysZBvd8cqXRSkMWbUJ4fqvQtkTyZitoZG8Ji6aTgBKTUPHEwrpvyEtKutP6ouog4FhbrYR8dDfviX",
  "key26": "5MYfkQQwcoouHcHf3CSQw6WyZB7tQLyrRq8r8MoUYYH1r4ppgDDWVT3ZbyRmoZnjy8bbY53gnKgNX4w8VW1WcDGe",
  "key27": "4a9qdX4ua2NDp9zoxQrzrj7TmbibMZzBUu833ZpXCRKbcQrpjb4L1XDJeWvCLMRnqapR9VCxqBe4sXjxsJyXdKGt",
  "key28": "2BTsiDkTwVXNhbm6RD3PnU4KbHKifMuB5ZTUqxDHU5va47QWz9zTjQDYKTj5JSUsBTPGjffBnQkrS2KpcoYu3xbW"
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
