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
    "3VXVsi3UzrAxbjmqwWeVs1D6pH4NhSVW5DHXGqvPBr7ixFds2Hub1NrgZ4TXKDaurXcdKQfkYr5bRhkfZ6fKrUzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9yt3w98gKQEg8KeEiq2AYWgCQGQHwPdKtxzThPWoUfnne7zecz3FjTJEkzuHsY1sy7pE9W4ahReGdpdLm6z82xV",
  "key1": "3S1h9YPbcWNhNWsN1EbmN5Upjsykz7McissoDXtNUVxp26xHyt76PtV45k7QjsNVQhX4hhGChVrraJmU6V5RhNGm",
  "key2": "2AgH6iFGeVGj4HKQ67eko2xicKk2KFoJvtVdwuCDb5KMHUELwrK98Wsig2Qe1ABqYbNkFpdyGJsVW3NujSfZUYqU",
  "key3": "2vKEZuy73EEgAMS2qfBLA2R4pwRet8KzGNZ1LFr7NCRWNtKicg3foFXYvuQbKzp3ve5cQp3oUftppjVYKskZiVCF",
  "key4": "3ZBnYEDqJ886paa2tpzcET9BiCVRJT3ddgvcRvnrggvh9fncihwVuCh8yzU1AXBGn8UMvzaQzpoSQXWiX1E5A3jP",
  "key5": "3VShDRGX1Xdamx6Ec6AFDktuW2BXJMee8Qw3TGkdfYgRgwDY6E7G72DwNQsSYcfgAM7Ca6FQFdMhZsRLZuin5Q1",
  "key6": "5iKX1AKVwGG3rkG7bK6czAyrcbqLnuAL8RkrEhj1MwuCR3tPjtnNjzrnzLDV4JJf2jAcgcAd43KR89YoMVT5zGbW",
  "key7": "3Tg1ggWmmeNebS8ePymqmK4pCdpuvwXm3ZhRmUGWWxVipWi5yCJ3KMfLPDJrRvGKCqhtVThMm2hp2E8zQs61dP4v",
  "key8": "5PRYDKMscSrSRNSUPkG5cLix1BNkv39Jg3eMEwvWwwZG5cYV8TKSsEixnCgCrcnVag4WtJ2seUFju5egFBaQU6qf",
  "key9": "TuT6YmvHQujJZCEiEtqdBrEcxSpfkkWzWaEZwbXr4WkjBQohKroLanJmafxzfNj8JN84vzUrH9sHGuxvg3gqmT6",
  "key10": "2n9Gc8TwgUgmmXrJDGDSW8axefEDWkSKKH9xyKnZWRhu9tXgPS3xns5inEMb178nE7mXCRbTBttu5tAJBgGQpqgW",
  "key11": "2xsE7FckPp6JzwdzUDY2QBEdws1Y9L4damsA3YPJ2nbMfqHZAcApCHSoGo6aFwMdUbvm2LPQyvVbb2TjcQN9s28p",
  "key12": "2YoGFZmUGWAvUA3XUf88XgNXWMccnJajc21mEbR7ieXfLKGFimjbY2W3UqbPKRce2KkpLPu1xbeSqkgMVwjk2MRS",
  "key13": "3PcxkxfYTXkaWsX9VC5wfN7vtnJ8gLxiapTUTgj4vy4HQt3VKkUMK8fq5QrC5ePLzYzK1ehGMfCkWzsTeFEmyr6Y",
  "key14": "WaUeBtgTdZvEH6UxzHC7Kh474EYK1sc65jbvCWUVJ512TjqY5JgHTCWaraf4WxYBd7Q2RUemW7zNzJMk19F2fUP",
  "key15": "3VBNhhNWa6vn7m2HbmuC8Nyr6RXw6Evp8eV7ecMTibw9ADo7wrc2b21g4b9b2bjQux87kzpLcsqhUzXLijNkDU8f",
  "key16": "4Lh1PVZUiSy7HH16d9sePvpHb1X5Yiz1A5RF2AGmajhS5EZ1SaYYsca84xa12DpQfpjdNGnzkrhk5rpho2WphMdX",
  "key17": "21u4hzFC1CNAyDaxyiNKns9613RBkzE1deJxdbSsjDN9edHNwjXHKkRY9PdAQwDgtpZi87MxBFRZyW2eLbAJJdat",
  "key18": "3D5YgfP1Nc7yPdXJUU2iYSCwDLM4T2gUzXrg5EcQMZ4ByxNiC1K7uPda3G1v7RwS6PTSpAjtmfEUjDszQxe8s82B",
  "key19": "5kKEEhHNogc5Sj24nAQJGZJqWQe9CTuxUQk8fF8fwz3ybguoyFQnW564QLbMnqmpUmRa9DXQyF4oPrjSpWkJgZ1m",
  "key20": "3rXxCzfDaTJSvVkpjZWwimpjhfmqtU8AM7KSwecFmTUp5zKvpuk5JnDKZFgLMj1P9RRJTe85ycZN63e6PZay3hFw",
  "key21": "3ZLTPXixzdABQEfqMugcFDkNgjqj5BkvDp3twfd3cNWZRj2p7ZAv69kPoCmGfTsLHKNJRVV6Tkdq7oSxNPXBSgkp",
  "key22": "3f2GiSFwXvETD7h7CAsmSBNaA3yPxaNjapZDHuju1AVxJAXBLSTvgCyM27b7mg8SJX3B9XCPCiNjMtWnLcdHGxTp",
  "key23": "3ytikMAoYhrC2NRoVcmcia3p9iHSidisExw8HZ7UHCDQC6r5J7DnNXPjVwmBecXL2bRDCoZu6a3x3ZcrPG5Xzijc",
  "key24": "2Ffxsr7hGAX662HNcrXWfndSfrq6Y5BjZF3ey8BpdTWk9ejnSJZ8Y9yZJTiC79j1YNNxwZxPngDg5YPymGyHTa48",
  "key25": "2STTeHRzCn1kGv4hXJPKhNqxhQjmmX8cDbWukoxLeNAdKhi2wCFBb23q3a83rEJKGzEE4Zkp3NrduuBz5LvwM8PJ",
  "key26": "4AzZgi8f8ehCjZ8LRHKwUxgTaCQg94bTKwMbowyL6ejsH8unpxzQ7nowMC6KEZm235bquqbWRUAfijnQTVsDWWhY",
  "key27": "5kYBivXucS8sL9TVEFwmbcLhkUZNC5KBWQtLugLH7VFS2XgToBtJuRsBnL1Bc72QhoWNFaW3ENSUwc6H23GJTMgL",
  "key28": "64EUJ4UuVsZP4BCo4wHg5MxWn9GPWqDJCiVmb2Dzmrhqs6VEC48pz318yvzAZ7Q7MYeXcqUr2M8RfXPPqiR9HjRx",
  "key29": "2p815Gda3jP3eRyvngqhqe4eoGnEGPAyimghHXQYJttNrfkYfzHzJkP9JJcEP3A7P7eMsmrJ1WwvQmRzu951WT7a",
  "key30": "3ejzz98VbmzNrK4K56V8m95r46PFy1oeFEbQg5usDG45AuseksQyzvss7rKMXNbzGVBGJgbBqKq2eQQx95UF4TCE",
  "key31": "4QdNy7vosuAka5TC2wgibCeN1WTp1ha2DxPzLeLzeJnaXBnbXii6w2o5bbecPzFYUWGzfMYWzhNWGc6d4z59yGw6"
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
