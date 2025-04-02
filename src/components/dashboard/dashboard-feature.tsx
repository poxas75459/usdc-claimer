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
    "2eDQvUCqFjomVDVX3sF1SoZKUvoRGArjd2TEyKS4wz7mKHyPzNFb7WZWrCKL2pMh2zScMxENw46MjoJCh7ba7MKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvaXdsD197Jr99CQDJWHmZEogrXvVw9zcKjKujakDcX4x2vMGbCvf9rpiLyFe6zVvqFtbVznCCCT8sdT6fWtpAP",
  "key1": "2rx63EX7VLFj7G8KH3YAtJqXcc78wNfrvMFbjSRM7A2acBKWSyFRPZbFH38ikjSc2FXPENVTJyVvggr1MoZ9YXM9",
  "key2": "4S9baQAgB2K18GnpBdyFiDS85SGcDNTiU4kz7Uq9TtVX3R5xiB9uSmjRaS9EPSLhe8PvZugXjsFcBwRV7BzXPL2L",
  "key3": "2SR6zwiRDKPEDRUuFpZdXVHPKJCe1VcD5dTmPU3U1wtK3UDAhQL6T3n6KnHcADKk9gg3mvH1mL5BU6egNUb3FQhk",
  "key4": "3RKCwik1smXHncvmpnqQLxRVRTrQwFagHMAg7Yv7UhMc8n8e9ib7ZYtptSCDkQAgZXzVuozEPPFBaRVvZXs7ZMoC",
  "key5": "29fjaV3kHPXm4cKV2zTzcqW3zgup9F761MfvdMfSSfF4ve5Lnc9pBHpxNMU3zueXVHDcWhYH6VeNTAt1h7MGepwz",
  "key6": "43qyDAhwfWjMhgqb18phANxA2yzHcSbo3HDsi78TucMLMRqAoTPfT58D2F1SZYuCvZmRgaaXiwbFq98XEg5pSKEV",
  "key7": "3WBDPryzEJdTh8G1YcGysTttWJRnpLoB87Th2xgtnecuLb7TqtwuHYVS93tBscsDyxYdN2tda2a4PPkxwpmuEQFX",
  "key8": "gWMfCgfm362nt9e2uyhnZw9TXVqMMssfFc6iAF7u2MBZndu1e9KKiYkFU4mqeTggcFVkLZpUibsfAgZzokz3r9j",
  "key9": "3Vjr6K1QWzZNxHtqM1kqsW8Z5qEy6m1yzDBbHb7j52d7DFTUycGNJCMBsUZdpsh9P3Scmxzfzq8t7rpF7KhCJUJM",
  "key10": "4h3KJbJSFFT5DETiYtbTjHU6ExDhMHUiQddn6Qe2Ed8oeMih9kVtBN8S2HgddKxC3FZ6AhPr7AKb15jkSZ5zA7XB",
  "key11": "2tdscxxMzspiMdQhWMBK6mLM1QAXLMzPu72jHWFC9MeS8CAxQ5KZSgas5UpBV26awFGRdyY5vhLWRkAyFvbXBhKX",
  "key12": "f8uFFY7VnmPN5mCAEtHMzEEWWygcqEW3Tf7QLnkonBB4Ut99K88nTqpNmQg2u7vECPhyXtbr6Mj2S8CEHRm9ZKA",
  "key13": "2Z9VuFzJXDmS5vBD8sGwdqsJfq2QXrgtzfadv46dWrKUe2x8xko7wRMewUpGPFmneuf1VyfyQnSY7btAwFu72iUC",
  "key14": "213NHCnvmoiwuC1Gq2uMppbaZNF54U8zk4HxWVKCuiVQ17ybq12iMpbMejsEDmAHDVTvTWMDCnKTmNAqqt7SzPYN",
  "key15": "9vbvxjKLCxVP5vbYcakPiZ1pqzKWnMafqQWv3o8diw1948JQxCFJm26N8cWiDrys6uEkHu1QgWp1mnQw4JqEnjJ",
  "key16": "3mYXBLEX4CezWb6YjDtnD5ZWgxg7Er7iXkzhqr4drWZtw214wjhM87gSx17ogjj9JxDtkTd3538XoST4cLSQtWM8",
  "key17": "4gANj8z6T4zqDu6U1wRP9xZqUGbhqLqD7oKQNZ8uEgra1GLq91PD8fpcT8Twyw3tyA2ipTbEHBRer6cwfL6ahUPN",
  "key18": "5WWu4JQNxDsc6ZGVfhSewM7Kbd4HTsRkaVhNS8KhnT8a2CA5KRErJBwFbNAN21QHiUqHpVz6xTVc68XC4kCcGVVg",
  "key19": "26YzQJ4kFQaMXJofd3FhQQpmADbJamAnqNcjDphDPKsJu2K2phC5ks4gpVSD6X5miHzkvMczcvPDzxr7SeikN7DK",
  "key20": "uaf4JMcJFE2eExHVu2BqX5nQVbBAWn9nGsP6GaD42ZeMAaKPQvrWuVtHGJJjP1btt5ypQVbeB6t8cBL4XwRP4Yh",
  "key21": "2RtDx69jeMPbf1qzgoEw9DMVxZX3moWBaYZBF3JkNsQ5to8pG9HeAWsbADqbJ9CKkxsPaH8XjJtwNteLHj776QB7",
  "key22": "5JCVTh9MDMRbFff223sAvPjdiaTkFaUQaXvJprpy3jbi9fQXzEuSoKTYTgrwdGKJX6ppP8AQi3pukpyH76CArPhf",
  "key23": "QXemieD7eJUXMQPJaY8bZ1mB7SwkzL9Secy398Vg9mgtnZstR9iHwBPetNmh3vr7ihre9VRuDB5Xcg5v6VxU6jj",
  "key24": "5FPumkQge4BprPB67gnp2xR9QzRdMhk4NxqqZ3mDCE6ssrsKHs9acPajtnjZeojAdheoYPCoMnPAjceDo5BK3Zdh"
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
