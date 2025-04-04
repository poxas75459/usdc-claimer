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
    "28mYi9F9Mnc9ToG9xvpgDoFDJNt9yiH8Q4bToKh7T6fzx838uLVoFW2QYDGkC3SigRqRbEx6ijVW3THANnAzps7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cfYubLG6Cb3YonsPiT6pHkvFuCekEvYyynnst6R7yZjCXyYT4poiuC8AAdkMenkfT8NxX27EvyA8UiQFfjcTN37",
  "key1": "4sdPWZHar5eHH4HEZtw4fzDwvm6Z2cXmxZF3xUBQJKFt29jmb5ZgTzo46FMGzPbjZnnBm5p7e853jourejqv5uzv",
  "key2": "64f6oyA9ga1F6qjwdyLQ1PAnMdPHQFCiAY3hZmvDgZoF2f8TfpnrCgtCeTWRzP43qb79Sm6xXGtirkCuHKZXNuUh",
  "key3": "4nuqzoCvWpFGMrhbsJeW35rFixdEx58tM2nEthpa6GM2eaJTXEWgLt3PMLH5ShVCxF1nLWtE5FYSBLvTY4CTWtZb",
  "key4": "52u6ovYjjafUB21K2tg1AUgcaHN75kBGHhQdqCHiEaEfmT6mucETPakTz2oLmp2fLZTPWktnAtsvijZwfwW5b3SQ",
  "key5": "5JMq71PcBS3H8SM98V7KgnMweg1JiUCU59NMDEwcYnRLutnRU3qNUHGuqWMyHoxypaorDsSoV1F69J7wYUSWkJpC",
  "key6": "3oxhh7hLtZJXeQPvfNEkuPTxZo6zW8M47gpDVX3nfeVmKg1RaFAntJx9uEEWxhpNBfqxbSMqkSRXyzJAcVjoCgG2",
  "key7": "4k4En77FLuv1Gtf6AwXn8pDjMYXrbAeX4JdYUmQdd7uYq1jhDzEhXKVQgcHCvKWG4ZSnKFqqD6TLWT8dXjqfDUvU",
  "key8": "5qxULcF3Mu8EB24hN1S7xfjK9HCuR8xpTPnd4w22zb4rKWXGUCkkKQUy85FxTDdHFpaQy4cxkNWLrbMhxPKzYG5V",
  "key9": "3vr4f7yt95G4Lmf6UgrD1JnQaHc5kmN1DDQYEUHhfvE7xYo7j1pacKV5k8fmEKKEUhqgzeksEgWcoxjfjMeiEZZE",
  "key10": "PBAqukNq7kt2iWUpm4KwYEqsvXZTDuRazRkyhkazChpDYqC5qsPCox8yyt1Yj95VcdeHDRdzV6qPJg7VBg41k3a",
  "key11": "2TCUK1cW8RAVQXCHqBR94A7nvuoTGAMeN3AMoPWH7YaWa2RgGrE1aDbYy69dinqd2SzTuaxu58qaMAipVNwWnHvz",
  "key12": "3moxyYQqreSz478QCwyi7ygcPFkBTDE9VvnzC6EvMDSRYrMiaASnanXpFJCHyrUY68y1r9zxwZh6VPVdSJtqsmEQ",
  "key13": "WEXndTc4t166HLz5unAP8fDhxHC7v44JAwY1SgbSsFULWg8M65V8oZzxTDwgEAu2HmUAeQGDbTnyAEfqWZrxBAT",
  "key14": "3MB9vfoaL72btY6Zj3q2PnAYqLwFFjzk84sBXcc8mEA9irTVsXdYYZ3H84XCL5E3z2Ne6kbSono8NdTE7bgayuD9",
  "key15": "57YbpxrywjF8XEvgSuqWuqebzJpacYtBWiYjwxU5kr5rkGWAuD9Khz4NNhgAsQZTQve3Fn9kzEoY6BCideV51GNC",
  "key16": "4PbbgJs8VXqppqqq2GMwMRaECBWEVtCSu9t7fgT9p23fC46aL83Envg9wm1DaUYKR2zUR5gAMXHdfZF6hEXsVWuy",
  "key17": "2qnrjDtbGt3de6sZCbZ7fwktShLgfhYqs4H5TWS6pBpo7zkc6g5FPYwVjGKy4mNtmYa6fs4idq3SbQjhP69xVRNb",
  "key18": "4zS5sd8KQwAGZ5iHYRHsGA3cLv967tFXx4U5Wh7ujveqCQAPu6feHqXA9dJwaR4JNvS6914RQzo1uM5VMwd4ZB5y",
  "key19": "axkuJCWjhwSAauV2oTKRuhqHaYP97MCQuTkxfuFC1Z4g6aDbEbPcTfEqCRWhaDedV2sstfmWwhDHbgfqSb5Vpbc",
  "key20": "4vjGuj2maGXe7GE1HCRSmgQXod1FEstR3dbFL9dX2rAQYtumoJEVdGG7xHiSNzauqkbkkGFGHApXLoXW93wHxRzx",
  "key21": "2nSwpdorHdK6DPeBnMQdF63QTBLAEpXX2Sjia8VgZKYpJj3rLtJwUmEu7MKKZbnsXCWak82K26jFREeAgPGdQZ8h",
  "key22": "3GWEPFWUS2oyszDfWJnLcPTRcd5qgNzoAoZRtgG5p5bvwX5V94j4ET84t23KvFBXujF2jFV3X1sg6fKW2GBSDtvD",
  "key23": "5UE35oc9iAvGxQLPu3yHHzaxTeeyv3QKcU46V4g1MBSWyaezixhLABEDZzVCrBJ7DRQ68R3Jc8SHFFK5rPH22wSa",
  "key24": "WRPqcLhsN7jDNWqM9ZGm726mdaLpFDUzZ1WsFemse1bjqXBc3DZeWQC8cS1xiCP31DKqQDVXdDb5gR2dspTFZJR",
  "key25": "5xvBq7PYhA4GgX4CmSkdiJUvg96wa2J2Ss1hyu6HFtcRMAA32N5Uf2cXWkZcuUNYeysA4xqPCRyY5zyxtMvwfHg7",
  "key26": "T2W8MukzGf8Wof7qwLK8QPTEvtxjwytFBZJoXioPYcwFd4KP1vi83zMFzZ7Kve5qtGfvg4CUeQBEPnRsR4cWaGX",
  "key27": "bAQx7sXsvgbdkGjrQhfGro6koPJ1Wxu1AMvTRoQAzwnsL97zTuTcpV8bN49qWU7A4rJxAd7otYPWn17Nc3nxhx7"
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
