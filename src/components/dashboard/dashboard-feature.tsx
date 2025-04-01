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
    "3aZrfajkT3fwLrEruK5FafFmA7VN2KHphxNqwEWB5KWo78v6VqnzcURWa69Ws74fz92su3FmfQivbJgvmowg7Ltp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkdsE6q69Kv9X8oSKA9KCDhFF4bKhCv965U4kEYuHdUiZERwbZaVc7Wt1TQmMaKVfm45GRxqh6aRGzqvFfMZpdv",
  "key1": "5GAf2i4h4hh6J8V27pBXaT5SHjK1dftBgFoKN5bS24KQfMxEo2DLmMgwD3rYSfHnvmtVtzj51pyWTZMgjLusg2Q6",
  "key2": "2ruxhRuaQyKDShnuHkWumwKW9tkvyVqDXcUxFq92t9nCK2h5zMJyJTVEZig17psdhNngFm1k6h5EfBFWVpUcEjz5",
  "key3": "5qWPcvSuKHahfVG9Q114jaJVnWj1TFZEqXcNH4A4yfegFj1w3xqsH8r5xR83AFC6Pr7KSpdFTEe9Ax2i2BzVD9Zv",
  "key4": "5sEKYonVoLeRE7skb2GP3mQDkM89L2BnKVWAebD2DzujsXUvWMKtfQSw2rgwMFeNYHuPaTqg23mAE2BNXaoWyqWn",
  "key5": "mTrH9hac4dUeTaDVyYyhVpRNN1joptbuPoc8V5VVwzkXSdFzERjL8cSGLho8soG24rytngGbQcTn4Jtkc14diDD",
  "key6": "4awfMFhveK1yiH6VF2GrCPe5FaJcDThQCJHhvqKSXkXcLTVoYnvvqAk49V87TJFzHiFpsPFESxKaceq914v59zo7",
  "key7": "8eB71nZrGkz95ECJhADTSrc5FiqHrfHyGjr8T7XkHGa9Fm33fAZjT7UHoftbqEmvdYVwxmDD7ha7yjEQYDfUKmM",
  "key8": "5JJhRHPjJ8GmdQwDKK8NrY2EramDdHXkhD9DuS4KuZQTpgqxg5iMitQUCUCS9GY6dPZRFBgxEpCAXLcgoKhKHdPY",
  "key9": "4HsDr8mshsAajeuo2RBmSfUVU9hmQfhogJ8gkV5Z7s2dVLaWzPoZmMRL5krAQqWSh35TpPVvaL1ASH8YQo45yLLD",
  "key10": "4wf1ffxDJaMhdCSAbYcyMbMvKFNb2r2X9WP4G45kPpc8SaUU7EHQ1EwkVMWCFhNE7R11Eya7em8rHPZZnz9s2H7G",
  "key11": "4V52pa86vrk4TuQgnghREfyMHnYUgebHkMTzuyvqBihvAqTeJwMr5qM5eLDk9XqwWmgQTb452K16kGCt74t4RmPk",
  "key12": "28pGRiS7dcCHAnCgoJEp6VMqyrp7EyJSgyHrEwYpGL4x9S346MKkAtbbwDaPVsEDbNdk8KoujKbMXxRVcS4eENGd",
  "key13": "UB7hRmFphFdTzoyrCVXj8kGqGJvcrCoq4Ef2fabU2ftaBcgvisU1CsvUnQcJ3gyhD424sCD9QqMiM7FgtbHdU35",
  "key14": "2VAKY4JbnN9koKGSruWs7wAMjND3PyaR4AGrAKwbF4MvHzxDNCB6NCkp6MsdZ8Gj8jA88Z5qcahN1hgeLBeioAvz",
  "key15": "2DEvuW2iVZ5vxnCz61pxvk7nc7abogzL4HKfZqTtjwpBKZdggp8QedhUyhab4NGypfKwMhuw8Hq79CKxzotFQ3oZ",
  "key16": "2fHt5fsv7s5nPLAKyGnhtE3Qg8f2rckj2uRKgr54uKRG3pEck46qcBbYnYra4Cf3d5J27rijiAB2SzLAhimrTDJY",
  "key17": "67dgWMNS98LLQMcbv3dgNC2s17RiS5t23vsqvioajq3HDtPzYTdec3xzfDZBE3qYmnhyNT5fJufwdLuhF9HQ2hWd",
  "key18": "5GQtkv7tYp5QeSFCcFFDpSD9d1Tm7mAHqr2VuUQS9EDXRccmCtFrd8WVXu32nwEVjAU3tZRXkuxpn6Mj9WY9q2wT",
  "key19": "4t1hiVZx5A3PnfYtk7jpXMFQBQZtPYC9UpBL19qVye3H1Kz6D123NqPzzdq1iQXNubzcxRamY9XE2vS5ufj2Qogt",
  "key20": "5TaDaYEKZ81huRgp9kXKC5EvJvreM5CVjtYPQqKjUqsJenegq4h2woeoRfMRKzybeEXrmmmEoiwUSny1tYgZVZfX",
  "key21": "BzShRwSNzUqGusbbYYyipN5dR47ko6Fbxhfb9FguCdpLj4UgWUG5A7UFRgpGqMqZU9eWsJrrnzrsYCBv51J5j38",
  "key22": "5ygG1ta7cUxSDPYbtKdjWDnGKjo1j1uVGQH47bkWHn5Es4QUNPz6wv6o9CX59q6zonYoV55qUfjB7NoqYLjQSvab",
  "key23": "4fo912vch2FVe8q7BLAhqKjV8ACEFKn5p7kmCGs49chLSzj4YFPpnbpsyK8PbCLJ22orVezgKUPD8S5vrF2RSTd5",
  "key24": "59EKs9ELqotRbU4MPQNKBRCZhbE9ZAAnFQn82GQT9PujkWuKPQehBqiWJtHWqgy3iicuffzE1c32NcqVqCBvVjZB"
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
