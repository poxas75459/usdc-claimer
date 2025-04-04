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
    "2bmGAVhiX2QMYCt6c7PWRTMGimfzBXxPNgHgC7RtFfxyftov6FEXyWvF19hLVieiV9DFXNGzuSwZSoZhhfH7odMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLVZxWV6hsmpEDwoZUzZiFivYQh357PeewxzpuG4upD7AJ4tT7yynpKjrdJufbQZr9Y85XCzbjkmAK983M1bf7u",
  "key1": "53Mp9326g7DeFKePwDs8BjmD56f4cvHA9dvsA83XecZwHqQWdmzkASHb9MEMhRiA4NGfCkSQ9myEJKrQV48wVT8W",
  "key2": "4mgLjgLT1BvuEzwZFssJK8fJUhiRcUWeCwbABcCnitACKg3a3evzf3HhyFiZVqZtpoQc1hrMpbsfu82MkbKvpFT8",
  "key3": "292MkduJbZpzxe6vwmZAkdzPzJRm9DRvqLA1JoNnQ6UwVFmsj5DSvfQreGTENH1V8PvFRsB2oSijB5orUBCHFU9Z",
  "key4": "3ZCWNQ1tsYsFVW4J3LEL5hTRu6Vy1kbRYZawh1AtbaBsac74WWLPCmKZGdkEqRg5CzbM98S8YSe9F8iLGjchDa8t",
  "key5": "xZZLiQRq1QHnEBBA6HorXP7jhn79EuBh99jGUYq5Xx5psfANLVXVfQqHjtvA4e94Lo4PBPTRofK2suQj7Uqhd9j",
  "key6": "5Griw6agKfi6CrqXqDrMyMgLYNqtkJ2vJKMCDuKTUgR8HH8acsoegsTE3aRkDTVZY66NhyT9RZFcrGGjESJj75A5",
  "key7": "52LZsd29wW1xUAj4NJxnbJ1yY443KYiEdeZnfJzymeVvXWGDLhS2QEXN4ggcDBP7yiPrQNof7Jq3hc9e3B3TS73h",
  "key8": "4ZSzBgVBCQR3iuUK8t2kft3p6xC1CGUfLrzbELN29dx4u4QbpDG9fR5YRhYXCgAphCV3TmZij15PxuwLSQ5YbmUz",
  "key9": "3gKaywDQ931e2Ha25mDWpSm4C2owyUSVdFRRSXT4ArTH3c1uYtRTtY2WJufmSWMDqTqmrXBanD6FFLS5TnS5NCPf",
  "key10": "3EA8jXesgRHxDcsP1WRbPSaszL7jUnKxpS2FDLsnK6eskFeYFce2kL9YH3JLFxtsBt3rbkQqausz8yKFqP5KmY9r",
  "key11": "5ujxDdsKhLuCKXArUW6KzZnVx8y2zMz7TPyLGNVS6zUhEz1yWgJp3TCuP2ZGpDcNJdHhpNFRuLQGmJkFZoiGoGQT",
  "key12": "KX6rSUyYbG21oDXhGsLRzM13ErZnTzcoZCanHJugnhPZf9z2LE2SNcJQ19Q8SUYmbz2TYAvVF6oKZzqituBk3BR",
  "key13": "5ihQN32egGkv5QpUPnKtq1Qaf4R4LbpBhWLcDazLd6jK8BYQi2WmYR2qdVCT2okyHi9623Gqke77drnTccokQXCD",
  "key14": "2yKNJCxR1dqkmfRiVJaReHxauACARX7rA9T9VPRebBeLpiBF8hV9MXS3nVxVERrFhHg25qJtdnrLNP1HRy8LE1Cm",
  "key15": "2XgsvbDm4Yx3TTT1rVTmnE3fD21msY38DXgq5gzyhTFWHLVUEP7M32C5LWh4qhYXXyhbhYwKyqswpNZk58gzJ33N",
  "key16": "3vMqUbaL7Xv1RUpX2dwTfqR9qA7NeyAvyAnZeckbH6he67km7RXrFuMAJNLTXAgiLRzvi9NQhAZ83CT61f5kCacN",
  "key17": "2hhqzhAYZUjMex6rPJQfMsxvpuagNvhWFoHGGM4tjcz9rKVg66vsCk8LoPCPSbrUgEoFYkU6cTb5N4QuW9bbBAEo",
  "key18": "2bBPhZyReiyJ1zNfw6Wj5Zhho1rFTfcEiFXmuv3MwVDv67cDJypTDcty9MjGEJc2Q9iqvime54VHCzEQwDPfeoLw",
  "key19": "3WD4jmGcoUpMXzGFV66Hg9NEUBjp6P525ZqunRaQFN6AhZn2p5C3Zw3txXvAEt5QWMCjMGQmWSzhDYn27vgfkiME",
  "key20": "2yub8DHpQ7cjTbdzgn7BxYyPYC24JFaQ87jDgxGV4AzG2irKgPgW3cgiUAAkHHRXahD1vLThQE1NPNSyMEsVXT9c",
  "key21": "UBtSdW2KWvcJrMFE48z6nduMFwoUEK2vtk3SJ798qujQdN4LiYkq7Ji3brX55zQ9EzLBgKhKFtnTbP11K8sFxFg",
  "key22": "55fcVQoaMmagtfmb2Tp7GV5BsQMpiMK2F68nTiSg83dEtVCoymK74MWupggDJhuKqgMR1MEKUXEbwuSCUHBt8X5V",
  "key23": "3xZHUCyFdPL3JV1tc6Sq6wmiGALfrsaF1ZaLsRJwqGSUcp61Mc5ExybbZFZ9ubswuMDZ2dufZGLj8Y1k1g9ubpm5",
  "key24": "5h7BkN5kmDmDVMt8cPjAYwx6Ef5hFMEKBnyKbRe27RtqjPxbZUDjo6Kfwy52VDZq75WEk8Uw1g4RZddgzYSKHnzi",
  "key25": "4ABsuE7eovTiciv9BJtSqeedxoiWFZA95HvtHMgZBP8hnhqLgmEdiCU8DfuTFZ5JQQnWSbrodtQSFiFLqTBvH2Ur",
  "key26": "5Acdyu14zZKtspFqdtKihccU9tvfd6GfnKWY2ucof1EsEgNXdGtndp4H6m7ZmQL7UwUAcM6wJE8h9QijsMsrPc6S",
  "key27": "3B6anGym49FctcS47wiYYDHyBRsU3wzAHwhW6KSppCmP9dZHD6ncC4sZE4EK4aHVyWuweXskufGYirf1seS5GpvM",
  "key28": "3xCf2HaEaQ5Cfb8ebmZ81pGscoGyv4wEnGQbuVQpnJWw5h4RK54AnPeDHTH9zBP3vh9pdCL9zcNVoDLp3xN6pRgY",
  "key29": "4rZzMQFF2wSDgXKCqkHvbjrBS7BVogdJyhPzeaGM8K5RdVKkaNeJ87ZeXtM95H3DLeWLTQnxZPeu6HnC8nt4wLKS",
  "key30": "22mzqYyZaZNwoamT6dGMbsFQSSzcPNGrhgnBjrcR4GNeJLCK2wV4kUvLY3Pc5ZtE7peDS3npqRqd69JF2FzaXSzc",
  "key31": "5V2wjbyC58LgocznzyFR7TdaoJftDFmBVMmPSWJCa64t54dqnoEJEgBUVQtZZqXcv6x3BBuUJmFdcSjt7JekeJE5",
  "key32": "4tZGRTqGVdY9B9V5rbWq9UhwfVkHbX7MVD8TTJMezXJ5zL13kF2jcJVDZzxDrkgZUfMyVL8JJA4JPxhMfxZ4VjsE",
  "key33": "3tCVLuz38wB7T87pE6zkCy5N3m6Ped3TnYKzgkgZvUNXxER5vAKFsAG7Gfwrnhsxz87NeRS1sww21q1i12J4QrVq",
  "key34": "4ocz1w1wU2o8fVVYGFmT7cLtAyZw5bCt4woWphDMtoanDrbe2zqse9WSFfrc1yUbnpMVEMmJF9hwh84gnFsBcbyn",
  "key35": "64Thsk1uCiUnYH7HfyKzLGVjCcHBPenZCBscYh973iub1JWPD3wLihpQAwomsydB742bvzajbuDwCCxy28cpiCCG"
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
