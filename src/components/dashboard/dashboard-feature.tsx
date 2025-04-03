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
    "5AQF8rJsVZgK7eHdoNWZgJD575LLP23VyS67sU4ubRUsiKutDxHxy2Kxa4T9578HDKCN1tnT4zmv6m9XJrpaMVTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "giU5k5myVvQ7AzAmY2RQYMUPdvsDWvma8j4iuvSdbxcKJi1xAVehceymZK7UrFs8eX79UYW1Khk6wtD59LXvKzz",
  "key1": "3NrptaKHEK4mBeDE8G2j4Ds5GSDDhrkqPqs757M7XwRN8jZPQQqk8KhgARkJrCYiotts187fJTeSFGNY9fy6MwMS",
  "key2": "5DRdEWtDSjWtZ8YU8tHt4Uhr1HrEvVb2oNNMzjdSgnwH2354fDjDK1GEbRhubyEUDazhri8KD7vbQ5wmN3DdRwDu",
  "key3": "2Nvp6eCxckBGezy9dNvQ4Unt25JGWdkKGBi98d5qAdmsRL6MfajjXMCGhBm2vXeRvFgtxaqR62oMC5y59Bu9s41M",
  "key4": "3wXjKogJa9bCpdjndR4127CcXxgq5uttsKFTmcUnPs4RqogXtGdQ2GaxkYvMAZsxrb444kBTYwQgkeL2T4jgCB6v",
  "key5": "34P6ZDsuMbqHjAWQUzube5bVRPfbDJNVrR54mqNvmkxyism7okgUZ8ctCvmcrAyoTDd7f3D2ddg6p1EzU31vcRFP",
  "key6": "5YnEFCZfHUyvd8KJDmT2vKnF4dX5zK36S27MfNgYz1Q62UEKTEtNj13ceJcFxpwwmwrhoh67VbGQxVjzgn4mjfKh",
  "key7": "4FVq2uCcy6tV7vht1ybpx5Sch3Kv3v7cdH2QmRJmAxUJbKW8JSNFjyeY15Jshsby5Gfyhn1CXuaXnYeN8214chok",
  "key8": "4V3eC97u75aBZ9yhj6fps7p6xRFpSVzm1pHR4UtAvt9Q223S1KR7WCyeCPczT6XucRbhmk5v59rdKTCGWWuqRPgz",
  "key9": "4QKGSJG52iXhHYmqguT9FuZ6rCo2aZm3ng9q3yLKpPKZoF2kiVnfdhWhagYGiVZEuKqTqzGo6or4RpqC83NSinhf",
  "key10": "2qjzYJRzPTwcrbi8rugSCh7eJazmzLwsw1KrxahE2WX53jt4m27BszBUvBuyyKjeNGGnVt1fjvMaX8JMeJ1CqXox",
  "key11": "5p6932qhHyQcBhYbeE2DZ43WQ74HYdcr2t6bHnEwWrWjW6ELVyiigs4TLHL1pi6g3aUy8GE7REgzneobKDUAKhXX",
  "key12": "2EDgRvK7eS8W5pPeVy4Ng2UFEkpuLXmn97ue2AdkmEzBv9iu7ntL7LP5PaTrB32L4JXyBHDHNc7xm1ccWFWvRioM",
  "key13": "Sm5UVoaeeG1yqiad3BN4JRY3omQubA88Aua7YhVPgxtqW1K8BoXzEw4fpBkZ3kR4m2Q4qRM1FzFy5Dwoq3EoeJ8",
  "key14": "2rMG2brzSEyh4TTfwnxaotfa2EyuXey4RmV4KzogETPHyzPFNaejjENmjngymbRsn5XkNFTHnZvAnbzbakLJQ8HU",
  "key15": "UvKJbBAfYSFw6Ei8c7QPE16aMDr7ojNi3F8RVPWg9SGfDU2unesx42Ay8cJT6kwcwchMtfJwHgfpaNYTe4hrVxh",
  "key16": "2fi3xKECzfuCgTLRaQGfTY1mhcDiRrKdygj4GTLszVfckxSjzYLhBHMb4cc3U9hwysbpX4VMq9RaDnXEzqkcswwi",
  "key17": "4gn3GnshZoZHaBFK7GwapZuJr8Qp1DnPcPw4mxf9YBthnRXgWXzFGoj9e1VszhcJoSCexJDdMJTNxQac6JCsBGSv",
  "key18": "4Y7eQC5vj4T2wFQFGCXNSYhBZ4TKuQxnpJyP7VkMHAVYNjCZoXTEbwPb93QZ1RCikhMkvYB9GuxBt6DVWtYv4CgV",
  "key19": "3orvVTFj6UbTVQUg85x3LtyQon1um6PVE7oFzMG6T7hVBmmtHqXu4KTTz9AN3P5uRbF3KoCoaJ8CjR4u9P6juxfk",
  "key20": "26uTAYiJAUZAbizUnzwDQpq1g7dnRoWsJTC7WrbzdcWGiF1XdxmYFybiwgRfEzHi18n1nUVjfk5pBKDmK56guNKL",
  "key21": "3fbrA21FPh74JyXUmedEhbTmHyPCDPHYtoFSaRXFbnEoerLotMUpjzvLjHxuVHLnL8hM8pHq4AGkYx26SY8uktyK",
  "key22": "5WX9kc9Unmce8g9XG54e82n7METrCro9ng6QQYyP8uv38VnfHaD4NUkGGTBUHSztyrUZxncbxFFT7HDzEhd3giWD",
  "key23": "382XvxkauUeKhB89pSfhdCeXpgyZxqc3rn7NZpYgo3pfTU3s66WDaDTufDASL14BiG17avszHu2LoHivgAhpcXFV",
  "key24": "4ymQqfzuz7VMkGYc2AaHbi46qxu2SL1AVwuPDgw5ZxU6fGe42b1zEnPe2LdGtEqMytJiG8RjJSecvyfUoKojJ4uk",
  "key25": "3kJNnc7VHUMNCNCuxbihHDRPnyYYohxGEcEE4BGJmFzk6hwYfWfso7CTWZcPuVio8f3gbg3th3QP31vnfLRof1dB",
  "key26": "3nPhQ4wEq6mbAXzqRzFLWrGiu6yBoG5n6dpRCVJVAmPtnMaRd7S3KDf7jyQTJRPWGgpnw33VG7Uqa771DZqT6pQV",
  "key27": "uRYLbWr81ULEB5Xhu3d318aiYPN1ETizHsr1PPYPSKBpzVGFvhJbQjCbG4ZYzzLqD4PiBAzhAJsZyjcCxmCLZyk",
  "key28": "3KMQH9CEaR16vCwEXC45d4qjcYFSxFdwXcwvWqh4t3yYhMdTVPf3gBQjkbL88vXcE7bqbNj8SjHieMQKUq56wbWo"
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
