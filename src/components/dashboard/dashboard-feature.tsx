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
    "4i86n9dd4Db2SrTXK8RDxAKDFjZ624oWY1yZLQJ4Q8qzf95D6tZ4eMutoDXWZwxU4TxG4iYaV8aWugTwryjFDQXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xx1yxUU4DmtomT243fULmgFCiG9ECRGWXj1M3readgFF8ZekjMGPGLA15TnncDNRwLVwghMpX5myehPz5ELoa73",
  "key1": "Wm6PV1tK9d5HZX9jwQi1eUsnFWbM7ifL9kHbCQzuh4GwxSedXnuLkwSXFh4W9DfCXaLkvgt243bcFEKDJvMVAKA",
  "key2": "3qDis7ofWVHZgMQNSEkDWZ6BnKxknVnMbsYtuVzSy4EsUcst7hxzTeynefMAgtKDDZ6fwYTq4Rb9z3kyDgau4vEJ",
  "key3": "aJZS2ry5PPPbH4Y4HyyjtqxhuzgJB4dYs3muGNR71r8tNR2n6mrznhVxb6Lg4MBYuWbsxctcTVcfrow1iUF4K6Q",
  "key4": "5LGMYjfWe25djFo6SpG5FXoDGReggdmBywyqGbiEUNX6Xuc25wRczRGpmiuxaktHQ74CobGZHyugvxq6UcF5vvxg",
  "key5": "QRKiiwNsNAq2Jjs5ThefsfAbvvxAF79H8pY4KwLWtEfTNtE9pcFkNM8J1Yzuc3oTQUqEGayUuUQRVh5QdUXaiGa",
  "key6": "3J8xvdd8ak6E4scFjeNQXiJZE2rCWAMKAQq3SNjbFUcpwyasqnKnvE5TKWSANBDLhjF1Nkz7T3V95e2vF5QvaHJ9",
  "key7": "2CpzRk3bZwdsPB9a6AUBAyqfiFMQvxzb36vcAMUYbnQtEMzfdwEQMLrpxnqWY259y2mR4uqp9JSU1fwFdWUK2sf4",
  "key8": "63hAEdtW3ERmctG1j6EigpRKsuYd7W1V3DQkBNUWFPByn9jv2QR7KLoyxf1b8ADsABVMe9psLyz7HpCc2Lo57FGs",
  "key9": "4b25bYJcGCBaadA3yZUxSWd7HKu2WCMLQHK3iexdtk2UnEsy8fBJGPbf9LrZD29hGuDmJGGeRDxWgBYHJ188wUnL",
  "key10": "2fQY7JXsz21MshWdDeNbftCXAJja6k8NLgvw1QtC3Ai3weGJqgqS7Ab97vmjVicyDjztR9VHiWpGo4kchPL63bc9",
  "key11": "4iXE4Cg4UEL6e8hD392QXUUHkZqRkyaDGwoTGe9YwHxJ8K4ts2ULmhdUXsAx17WsW5nekcinoicnDwkw53GE1Wi9",
  "key12": "6HoGVDiawv4hQWKanKYbRr5LddQgMPu3p1fmbHuts4HEKNWsspenSC51xZvVCLbJDWS5URsPU6jkWHEEdBoQDAv",
  "key13": "5dtNZrgi5ASR8uYnPx6D1mwGHSsd4F6TnygtkocovBZuFqFu51zGiMtMcFgvyjLf8TSC5bUFFXpMpzBUrvkhV1ck",
  "key14": "cTod2cW9emJRAZP4fap1gXtqWQ8hEjSwNMmbPN3cDBoeiczjJthpLRWWLVbYKMrsJFAT46J2KRJBoPruwxJA5dc",
  "key15": "3Vgy5G3TLtoGcZ61XCfVt8SToc2zdMayoFuKLtHgQkRLbmWbMx2Nh1iTHRF5QfxQVqBo5L5rnb2ZGt7v8iR7Qgyo",
  "key16": "4JM9yPxYoHnaRp9X8CynpdPXi1z4RChjXFMyE5Puz1EZnFwChrnESTzbjUjRcTHkHe8Ekc9wuY26oG5dG8uxZJfX",
  "key17": "3FzmsKEq8XHPwj7n9ZmEEy5twcC92vMfK8FidqHg6yGdzKvtWK2VJQXyREz2pbpHRpMNwK29CJbznoHQhGcRrgfh",
  "key18": "BC8v9oq4mujo2fEvsD8W4Ji8xWT7BMdwYMsoNFpNUJ6wNzXD3M2VB89omQRRN8Wtioy7WtCXyGuPyMwRZLVBpPD",
  "key19": "wAdQobb6iHM78LqAxKBnotXmHHQZSct7WB1ZBKbHBhSmFJvR5Q6Yt41x5wNcaMEc4AUFC6c22HMTWbo9VNpD18k",
  "key20": "5m1a47eXHPGxDBqBySZw2daZ5M7PFkwed6758k9zTFxitkm6fB2FuZuiP6ptPeWkjATuJbg2mAKZT1VS8PgEbHry",
  "key21": "3Zu31rRqJjz4hxPXWzPb8FgJQ9FfgGY19ZWfNg9rGEFdRYj2czU1Dk3otoPaqcou8Lzt98z1ECo4bQY7rGnoZZLv",
  "key22": "5g1SZqVRqQvpn8cqGgQceuk9YZu2BWxoqXbbsp7DVJEzP186LpHx1PjXM5HuwTb3YVFRJW2SyNR9XVxKngp5ipAd",
  "key23": "5xBQUPoQytYDJbTJuETgBrYn6xz7qm9SgTq3hmHmKYb35b2apZ3MZ1D4DKgRJNjR7qjjATTUfP1uigKsHWQFyPbM",
  "key24": "4tnGJSPgRxD4Jh2Z1sGtWYKWiA72QnQmejmEFqS3b6E4NPdPM2Z7rCLRNaDb8ak3xa1HHJqyoR76AEA81cUiudr7",
  "key25": "2Yk1HNjELCeH8YdZWqouV7KpYeiGY2X8dw9Qj4dFVk1oCpyP3QrfWiudxrHNez5Ta9RsS9RjJnrYeTwQQg2YmXPL",
  "key26": "4m5163qAbWA3egq8RFFRBi6gtCXjQhNyzre5QxeYswrGuEEF7tqPMr37iewUjTb1kozYCB7FvyuJca1SsMbDsKom"
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
