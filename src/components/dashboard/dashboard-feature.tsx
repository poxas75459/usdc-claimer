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
    "3qzydVXJ754WXHZsy4sD85Q9LLfJ7w5jZRKRQo313ErvLm5td4Jp3w4hDx8YxmgRQdbwztrjh1jVXkLFnWtQ44HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TaPxb4VSKvRYvFHve75vEHqE9FPDTDdyK8xgx3Qz9WPLVpNYZsEV7wMNF2kTmh5jvak9pDRGw9y7uxEfawCmA5Z",
  "key1": "mfSpGsEdnwbM2YkzitVveQGTjB8GkC3et28jpjRvQZ9AV8smS6DeiVE2HqbdhQY1UyoRFcj3dfx6YWewQrosh3X",
  "key2": "5Jf7nkNywreCi71fXAB7HHu1exQRsqejMMnnp1f5rLoERXHM3yUeCWP5Qayb1cDqS6vtPEWLi1QAnsrLJizoB3ow",
  "key3": "3xHimetifS6Y9YEksRn2GCMKhC8ZiPKJ1LjakxrFdQtxd6HqemnSoQTw8CzaH1hqNxwAL3b78XK1UsKVYLo7PAX3",
  "key4": "2phrokrVzGPQkT4zvzNeR297yFFJi4GnphdsZXQtmVM9WBE2DhR82cZ9DH6rxrY4zmPNBq87gfSf6HBdbMbgAZbc",
  "key5": "zatbFBiY4XpE5sXvFMKdmSKE36jtWQk5K4pPggjXeod4QXpcrfbP2nauGQjRfutPUfhtjjMQL7tEtJZHM7jxLNx",
  "key6": "3EKAytRPT6Ms9Aj46waEmdaBjQjwYgVKBnKwrZaRY2p1T8BiDnd8y8P9GtYKcGzWBF3W3Bce1CnxSarb7QpSFfyJ",
  "key7": "veytFt9A249BQw8QUFRhMkErLkWvXmUDeRLGo4x5vtorRiJCWQHaNSXPek993LN3vDW9R6BNujdiSMug2RMPTYv",
  "key8": "5uVzTcRz9XUnvAREnbmsGiQgRJfH9dpt5M4Pa6sZVDdYHfaghvF8K7vy3hkh6WXepj8mvP2HfAA8Y9jeMsNtP9Sq",
  "key9": "1DpXo36VF2nYVX7h6CN5ySnVzCLLd6bETMRQQxt1fXySiAyNt3MWmEj3hMFcEoyb6AeMiTPpibrZTJ4Wz7n8w9o",
  "key10": "jFzt3qhdcCLCF3zdTtSPDxyjn4gTSUpxeFjqz7eLzjtBhU7nmKTzMe4BgPWspSuo9twQtUmC8jVQskeCQNjeohi",
  "key11": "3pzE5WhgLHRfoWYGNtCjkuePXZnP8jGuZC52AqBbpHUXnwh78eHDQm9xWXdr3VdusY41QUBjaKsMUKtR9SyFcaXD",
  "key12": "DSvWzxt3k4BkwA468CuxWHcJDPt7MgL7VkEncdqcZEzo8eDF8NcusdckLbPJ2DmGp2cdJ6BR4ea9AyA5LJDnLbo",
  "key13": "45CJXGFqWPicQz22yX68er9T6HaXAui7SmZvVv2mMViV3tNdF2mtL7VXYsNDDw12UEdmJufA3erchSt3SeCiTEh4",
  "key14": "3Uci1pPaGbE1mZ6wDJamHs19ihcHGw8eV8aerQUAtCVP7p3jnsz1whhkLtcjc7cbNsHup4Zoxh8nNCkBEY4fPcNr",
  "key15": "3ZoHeRe4ZRiryTqBb3aX7Wx5VjuscPhsAns3k61UwhmJM4nbUdfcBQo2JhhYcNP3qBzXpZNdTD25disPcHR32jYQ",
  "key16": "4LHefBaVx6NMbZG1yoV678HPryC8vMbTTdVrAFy8Sdiv7HogxVyNvDRVcccAjQLpRhVP7HxXM2yZpp7tPPA6kVC4",
  "key17": "35jW5cQQinNhcUtSU5w7YR78AT5Yzh3kFVoQrCGwHPpTTJojkMVPoob9bLA8DfNT8msQPagdQXexCH3TfuapQdA1",
  "key18": "U6hVPRDo2HgZuX8jUGW1AiHvBwNKjRRxDKjeezDofSJiEZbCgSytX8JfBbXgwdU6jKkogCBumgotu6kqBeSVUhw",
  "key19": "58hsMB2c23aQfyTMfaDyVjSv72TdrufnyY5dSBKzGvJNHxY8otgipaNr61eETv88BHkX164foZe6taTNA5ViXfwV",
  "key20": "5CEw3bkMd7JX1Shfeg6csurno7GqQnMsU6K172NbJtpTH1GGPvTQSiznjy7E6TEQSJG2QuvnW7KiCWTVDqhbRjVW",
  "key21": "5FWVk1SGdP7xaj6mZQBmoq5yzrshszyH7TD6GRvi4dQVHSVHDQjez7hFDWukvdu8W8vYL6YCVzeM9zvUhcVRB7SA",
  "key22": "3PSfTY7WbhY6tX2wtoVibuNtkLoF69oAkbBtemaJmetEaDMnZJAUHYNr4CRumyeMWanY8XRHx4iMbRsnsvhjCBaU",
  "key23": "LNfKbMVdffFrfU3oEfWrtM5Zg7qxHpqKYfJSGHqvmy8SgBtS8ZQVDPeLBZFc6gWWLhXxw8KVhHjDNtp4mtz5wDX",
  "key24": "2p3afdTUzyEg9jzoM1Emf4WrUnS5CEJ1ALs7vdwgtsPhtz5jrKUf3HRArdVaSpWaNjdN1BAsSfmcLo6cPMXwpGrZ",
  "key25": "3nFS1EKLxSvVDKxi6jnUA7GRHg1p7u9dgv2sCmMZwgHKSPWmBKjB3DvTr2VmTzEWcKnN28xgbBzQeEHhNoQh99Cq",
  "key26": "2Mud5uWqCur5wQmWKnToGoE3nUBCKhVt5FChDW3rP4N8STLwX9U6HrhMpDLGYSFfqhtA29cWUf6mvixSvD3NnWp3"
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
