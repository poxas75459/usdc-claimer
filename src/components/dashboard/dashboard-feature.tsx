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
    "3Y3GRQhf7S2MgjncaCgkJG3RqWdV2C1xCTpWSRso6T7iYe4iAf76vxEQfM2q7Dc3bYaaQuovn4XBKEch3po6jvdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MazGQDVWjb4WaUqXRXtTXDsp72NHqDm7LbLMszbyewk5RcKak3DQm3h3bBwcpfSzxyQocaXPHDB4rbRBo2rj5YV",
  "key1": "ag3KhLBEotwSNUwkY91dKA4WtfSFBWfVH2ML1GKiQhxXwQQVqDN1xjDcGzcAnQNh9cmMTc1qXTmUQh2SRzKBaM3",
  "key2": "4YxeUqSz3X4FAKbKNUBr592ZtgDYb6M51i3hGbpLB2ndUxASFdTUwWbugtofbfKu5ySoPYrFBz99g3KMRNo13Mob",
  "key3": "5ShTCLHrULBsMwcb6RjDhEyiANqHCTLr8hTHSVgJwPsPPeXMYX7QtySV9i6KMvbNCr6AjiCmCWzcNXUBRTXrUunw",
  "key4": "2EDiSF2tHMoNnnEn2bBehHZUixFKexXzoqPGfXLuiRRMQBUy6t2UxQqhdsQdpL4AXs3xYXgMCDWRRKBC476kMrWQ",
  "key5": "22JsAgawcp2Kpd5hZXTfY8GxU4CQNLpwVRoTo6ksFb5y8Uyju6pEDji5JznMTnnpAiVZiGkYfwJiyrxWuyi2VVV7",
  "key6": "2pD4j2ckTrAkUzjMKMzDhqrbDHa78KrjGpuwdTXjRs2Gj9M3JxG4J8WvgopP6zcXH9FFsPYXkbeCLL9ZZNGFbjS4",
  "key7": "24n5Jtk9mHVMo2iKpnW6PG8ayY11EwC9DHMhcL4hFTB1TgcarwD6dEQmN5gLCgc35scpoGu3MSQQQ5p6CC2tKbNy",
  "key8": "s7cAonQPFprRWxt8b7KJLZ3kkBbpSKxa5fSisSf5itCLCMaq7p7BejRtzBjhg24UnSz5GKfQeEMnG3QEKeDoPFD",
  "key9": "5wDS8NHY17fMmPSCiRzmHobpTMVvPguuEhexzwBjWEgYmZndMGBptBwbt8e7t35943RNH5vExciLfdE9Q9gCTZCM",
  "key10": "574sMnZCqPxZbV6o1JymJVuhuXAWJjZzf49MVWiLp45a2rerW6nshqeSYSzmG9RnsDfgokFyg5acX4qdb1SeSXfj",
  "key11": "5fZGzJEWZnyX6FrTERW5r4qvjFMNkdVoKrbj2Swo9hLYieeq8rHCTNgaaSB13iz8XacRdr8jGSc45SrmwBb5JsMV",
  "key12": "5yxU6bhAGZMWiyKQGpwRju3GRQHLk9fZ2KESomSH6BzVdBb5fZu4MBvr33T7szKiCs1jsr82Dzv7akoJ6UUkCuBL",
  "key13": "3LMhYMUZLSgNFVHRZ8BKDCu7zgVnSmMarxAuqNmLMmfv2KV4sJd4P35jKsvcdWvJP6orVN6LzEDQCsqUt8H73Tfe",
  "key14": "2YH13Zc2M8Qu23tpXEErn7MBmVrD9KHsQWL9CqCgiHV1KyufsKFSuGRP4Y3HGdj13hVu6WKV7MBdUijxWv4DbhvV",
  "key15": "3CWmws77HGxw5zm7w1a7E53ErABn6Dav7EEYFNyWgBjHEZZKobaoATqqccnTRodtN936k3NWaECdaQVnhceb8NcN",
  "key16": "3msPXMrEtoUxH2GjvUcGh4UGXyVsFUALMPcrMCw9CFkgDtCg7BUYaANTrAkWph7AAVsHpBaAHnGgvtXQt9YpWem",
  "key17": "4PNTE84zEkJ2qKYhsWQ3bMayprHZz8RhqwNhup419ExZsvLFuHtBjrh97qBPonHFrJUo4WAxmcSWj4gKs9KhDve2",
  "key18": "45hJHADSc1gmkavzo3PRfHiGTxhAZPagEEQpShaLW9VmEqb1HymZwiwVa3JWY1mjjgX76ZrPZ46sDEwUeGwbeeoS",
  "key19": "48N3z2e4rex4NhksCdvgUJwiTr72QjSgCPyBUQg6DiDMEmpGL7nkCDd43CmPkGPFQ3LkBQpsf7Z3avvsEDzAbwAs",
  "key20": "31CjHEYadhqLfjPAfTA21YtMwjrHoyBvKTaWgjvvNowhVju4ryfihQc2n7ShxkoXu7eGx75EdpAdyaYtDjV3MZWm",
  "key21": "5XDZNg1J91qw86XZ98rULqmHohmoN8V8TwLYRxYK4W4CrW2fGPYoQkTdyKZkfgH4SpQdFqUK1AouNf735mjzwSnn",
  "key22": "4MXAw1b5aYh3JUmHjKjzcW3vB7arZNWoAiQ7M7bfCRsfvrceHr87V4j7mZWC55CuNovj5i9L82fF79tY1FQDBUPL",
  "key23": "5RfCJoLdkYSKGj8xzgzEQsLQPFNhbXa6UVvScb8P3L9KDrffgeungdxqb2Ru3UYN9pa7qDL7wLsRwQKjdvgYZjcz",
  "key24": "5LCbduN62CULbpAoTQYfLRfvbCwpihy1v3awnez9BpsnBesyqvBNxrgMM7qjmuGLPBkQ83H759yys7KQ7h9h9zKN",
  "key25": "3XwM8Fg6ANdP6zDuiVF1SzM7fR4Akxt4rR3sgqqKSey1UigjS8Y5SsTfNnXuMytu8j2Ub1Wu17hKkeMeMKaN99Sy",
  "key26": "65yBrZZihFu7dd4PouuPo1oVoTGyXwUVLwVvH44kCWx1fyamBpHviMzx3ep7HXNeLY2Gc7HAeq4Wo5XY5aDnotNW",
  "key27": "3PnkD7XHFRUdUxDXyy5Bo49j3Kysro77ABNauCf57Swu7gyZMGeiXGxi64BYNPZ5rUTSzTg4xFiq2KkfKjEGt6Rj",
  "key28": "Mt2S9kqqUHrPokSJNtniuTkxkfaizDxktRoYkwNkEyukPaSENtVsAqWhnRQrCiJnyUXMZyuZ2Uxh9oCi1FRRKMm",
  "key29": "67jQbk1cZiPcrMBF593cFq9ST2F94zWMmdHkKwznvwwbFHTZrREMrwtPhW9xP9DN3C11oc5v8SFd4Vhkpgvv4mCJ"
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
