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
    "3jomL7iMFS17WG3Ei3FpuLNa2J1H4jNuWFqTk9aTLKjtvkXJ6FYgvivRnshEcbY5Wh5M7pAequCyBts3jZ4P828w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gxoVtfjnnbXJiA56sdJGoCsnhKFkspAgAnh1jtQFXA2K883J7a78Xeh81b6fuhjfZvgXLqjpVvged29UpN1Ff5Q",
  "key1": "afzy3SCFT8mwHjH9Zh7prATJCACuCkpYX7AB4eBtGQRt8LAn4GJB6ZwzxQahNTRZsLa6mctkkMDEU4iGPyRWizd",
  "key2": "63Hc8MXUNRt7ehYckU3BqGtE4HY2gSF168x9enPX9xzyRb7CvLqBFCJgAZg3CCJcSHKohukfxMs48GnagNLoDgpo",
  "key3": "UrpS8guMFkr7ynd9TAY8iSyRmcRaGR9goZQBuXbMXkMSYrfxw8NSR1B2BYXZ937afBEZeEENQUvFbRPyVLnsc2c",
  "key4": "mgDTim1UXGcdAibs13mT9eDWbnqk4pXq6CBXBYbz72DSh2VxFXVYywePpBB7uTUasbevy5Qxm4G6cagCJgpQqqS",
  "key5": "3MScAUtgCUDWhmfyAoAoVHoCME5hjoakaf2Wpm7hVLTueh13Q6RHvxGSZBKTZm9jdWSV6qfjp5kKHeDC4tjZxh3g",
  "key6": "2LNrjm7MM7R6krDFg6JmYFnuYtgQf5aUYz7kVWYQTF8nMWAycmSTX4zNWmxcBJKSPon7JFkcaZS4ChKFGh5MvY3b",
  "key7": "67KopscS5Lz3L8JP1LML3PDWjD4im6m1eX6rmFwDHjdn5hjXdAymVAnaDHfRsD5cqgP8qFqKbXF4Jwxi9yiprbn6",
  "key8": "5Ex3Ag3zQqtEcsjpBhWurEZ5Sicp3aJKLwCthz95rsxhfdjJVLWZDNNbo4RApFFb3Yy97sDJ7mCpMmDSvtHhUQqE",
  "key9": "4sXosMpBsxa7M9Qa52NdaaKpasuRLEGd83gcF5Y951HZVL8wwjBBH11VReePcK1qi5qVJDFrhq49gGAwP8pcYDcu",
  "key10": "p3Qv7SnzZJyYBjn4omroF3JBL2FBMZFmoZw9aUez6Vn51QqsPXktqLHMTLAExdZA6XnLFgpJpKVZtrDnqjtpKoq",
  "key11": "54Fft4SSoPThMmYtGhwrePRiXgVdQoNTHG2LLG32N57tFrd1cCondEjRtPhPExzagaTeexgMaTDLf5nEuhxF9djc",
  "key12": "tY3AiqGCYhF6vHt3yHzyinL2fqsAWQB2Ho6EpyK7MKS6CR73C3nnfHNngRfrurqLtcEgWhFz9hBp46xi4A3HqQp",
  "key13": "2EHp2Mhsc35dqhGRzMtEhbpx1f6E6XKuu7cmYaeXQegN5KzvkUSfL64kRhsUra6KvKa4ynDc9zXPGWCXBeeuMT5U",
  "key14": "2vgq9h143PC9msFcAUBCjyB7oPXWvNTtVp1XBQtGJmLFRuNxQ3pUkNC5MrrpbtfqcguvGt332xbgjm1QUJJk3zjU",
  "key15": "qzJ9fxNNicDzpVmpsSKmJ5DKGyM97CDmKjbGvpU7ZQN6o7By8FeU8UwUbLrfHgc9UVVkb9JYBpKhx3iiD3jNeDx",
  "key16": "59h8y1WdfL83d8rg6peFXzxXvBp5dmamHKxZbXminczY6NAw1c1LHQjRE3UFy7UbeUqeiLjqcm7tpewtS8b1QPDs",
  "key17": "3m1kFzLsx1dpJAoys4UFVLnYvPCe2QR6v9rnVbN4rz9Jeyuok9iJHqKdfHxQd8kDpGzTE6tb1mu5uDjeDHCgDKnE",
  "key18": "3huqs95hZEpxf18aoQHr4ZrnngzrzAPPwTuNujJKxoHX5JicjxudzMov6gFfEyEDLhk68yZP11q9k74zJywX1upq",
  "key19": "2uWmbnvXj6HVAnQyrnNwQbQhTRP6P7cGmMEkWEfQXVcjFMKJmN9eCfBxFCkbLUXAxdfUSrzx1rR8d6or5rungQ3H",
  "key20": "5KfMtoym9er3XfnwEzeVb1y4ZuFSJc7wkUoXHF91pjCvQ3C3wuoTTh5gnxD2F4Vwqor2kmXM4Rtkkh6VuwQ9ydQA",
  "key21": "5UeRzrtHn4DkSYJZ6JB7yzqMMGjHgJLikDSKCf7riGAFi6ETKbET8X2CFeNYFUc3Mv4nF3G1pQEJPTQeVKdrUhQD",
  "key22": "4soooChk3PJQ52ReUaJQ6RZqaYP1sTfq89pniooe6JK6cV9urPbD9hF5aevgQfJw3m2w6ymC3yCDrzYKyksGWiS5",
  "key23": "sEKgAPgcyosPdBCcTHppdHH8aH7ECR9mRoiJX1N8F5FR1mw2gpQ9SfwdmgbWsCbMrnQf9Q6fkJSHddVx2xwBzk4",
  "key24": "s5fKSP9znGabq29gPmzjXpA5TfJxUtF1pnLfmw5vMLAaJXVNoNQSXCPLUrP79A1C3gwgvh395fHzLPeHoDVYV13"
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
