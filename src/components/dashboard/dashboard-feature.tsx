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
    "52LPnLuXG3QGdYMGVqtVxbEwQ57Z4w5Nt4e5cVwsMzfVMcU9dcLa5yiiT1DRaFtyimfXXKzgJVwwXXAoSJWFRG66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55jvCwa8rEUexwcAaR2AwX8ARuNknRMxraJWjwudDvVp4JGj5YQjxQqnkBcmCyKyxsc3jS5DjkysRrT9VzkGLnco",
  "key1": "3kR5grjHVGhAVMEphvTShmzgVgw7TtUN5Qx3g4FKDKaknMjmGD8x3Z2WRbUZh6hoTyCt7MWMXW1XnNqi56PTHTp7",
  "key2": "42RRHYHFYvPSGFxiBSC5CXMoNouUBRokNGup1jtZcPmxPE9buqJQaQDLpq2kw6WPpSdhKYWjW1APZ3tXMqq55eEG",
  "key3": "2nPTwDFQfb8zB4S55gjpRKWkSw4P6ZgaPreyDfacij2eGydwix3sGz1FqKAXSwXdGd8J8wgxtdqQbR3d4xS1sAPk",
  "key4": "5Rc22EfyEY3EMzuXwSJS25GmPJqWetTkGTkoFUChufX3ySAiNrCAwkbfbqxoAdxX45Sgcro2WZuU5ycVL2fawvCQ",
  "key5": "DaK1Zsa22aSNmSrpkPzqZPeenitZekWYUN11imTcpcbbjL1ocjE1wfbAMw3p6rqNFeEu8M9LH5ZKW5HRjMsNwZK",
  "key6": "3ZJYLG9dZf6tgE2idq8ANutofEpw6ScNgbrjZNL2MjmPMo6e4gSTe3sqwkJ7of5TyvwXL5ABj5gTWvku7mzqcC42",
  "key7": "4cu9FJDAALo4mR39vwveFED4ZTrje4GUqmn8AEUwpgfqs76QMwRm7zjoceZPwBcY1h7r66oVu4vTpXAcnrDYnUoa",
  "key8": "2TZnY8w5dy5TuubrCaQjtDeVDEYEXVuZB2LvNLM88MmXGbpKR22AavjUv5oScawKEaH2mTBxwbtiw9YpDARaXVvF",
  "key9": "5PceDUyZd7gmuLQiTJgRgyuY5AEt34EFenQPURxJUhZKRJcfM35fnMASV6axiPSPj8PjFM43X2abXWWkqCMQSHs5",
  "key10": "2dgAMSmggUb7R7P2rviNQyaW7BYKYshYnXQTu3a95Stz7DjR6WMBP9pqaLgm1He9fbg85QVu55au994fLoWV2nFb",
  "key11": "2JCHKxnpNCTtH6GszykkpKDMU1e3ybXzwsAnwN6ZfD61Cc9q9wSh3nuX6N96SU3VUNzZS9rkDS6unP6kS5B7Eqee",
  "key12": "55nWMLJCyjcepxTnc4yrRxsTB8qcBWdDT632AbhPTiwyTTznbpex47TPm6NqRP1xqGLH9RZCbKdg71RuUJapFhFx",
  "key13": "5PUgPzXZLvEq7ouD8DWcc28isKNKCYqFB2vMCR3pdsZDnSaTBUg2EAxzGUkcXuRTraCtweYaiyCPPFEY6D2yCCS",
  "key14": "21c2pjA37D9NtP5WxBBnHg7EFruuJujGw3jRUW22mXgX9nfTYBc5S6zudSenWDofQZSWvWtjp9ejDw8GAPzeqcdD",
  "key15": "24Q2LrGP9BwUo8cRDQGXrZRz6U4rLHU32ZNH9xzqntHcQyVE7itiLvNTczQb4SZ1XajnKQ6HxGBipZx6KCHZHnhs",
  "key16": "4JSrogiB8nigTsxVrqkfCutfrv3LBcyMK7qeXHCD4ED74bae5X257qrWopoX3JXkPUaj23aouqDpjKzvaoo94adH",
  "key17": "4zaNQMyjKjejtkPeeRyU4HDX4oTuX1Pa4AWX21FMmm6hgnNkQAwBN39QT82poziFQmw4NsVJaH9b9aYna3RwENUH",
  "key18": "4MsrrxfUwzuznN9ZYSNAt79KgsEwR1UAtqUhgh92UpTnU9vYsGgJF2GBU4wSVLDLsiabbYt73q2s38HuvmSEubqf",
  "key19": "3sqJWrXYTa7V94MKie3jC6NDj5HznwTAxn6nw1G5d7KYFXkEvzJJET8CsUCv7vb3MDDWUYSBicke3aJLtnMrWnLc",
  "key20": "VW6Q553fFjvdpQwCEVyRAQay5jRyHqY13V7EdGYU9Z3scwnhzd93FPsrUJBuQTqPph9VgQZJYQGy76hZif7ZqWz",
  "key21": "5V669SdBrcBhUGaGsNFwZ6BWksuXmVJzMfJsm8EoAPbbgT7nRUPze6DBeWnvmBaSamG93XdsWXobd5KrbD2tCxYq",
  "key22": "3zWUj8xvo6VgXyX9LwQF9ybcnGyzXDw21wskVckNWJT7bcVPNrAQ8NMGcSUKYwDMMqSVE8GZmt1mEevmfK3VawSQ",
  "key23": "vT18tMoXcmiZUWHZeRJnYAvBPT2jJfkEK8sZdofedQjg8vCFkDosRnh3esUYfcLJkisWZiEuQjuiifU7oifHdMp",
  "key24": "3rg6bWpgYWmjVCmTiz7M6ZxpCWzwCwRjemLV5K43dv9yJs95Q4ViWquf7CFJ9EDr1hw9FHNYinKk1rwU9Xg7AkyY",
  "key25": "5Mndm6rKDoQqTyaLPBAESQhd21aXHXZ6HBpASYRFSfp46E2Aq13vnqtKbrjta3XfAydVbYimnc46HNYzWj6XagLH",
  "key26": "sbtxqs714ThCRkfiDxT6p4noGFkKtUjtcinwXCtN5cpscge9K1GvQAG9YwwGASCiCXMoFTWTbeWM7mV71QXnKXr",
  "key27": "2Ywc23651SmMJN3yV17L8ao4TeMyPUTW2qabW78m9pKhjnbEDRbTqB8uW9yebZR83JzcX1UeHMEsjmwZhxe1kvkq",
  "key28": "58fYQPmmPvUN4RAoZNog8Mhhbrt12itVmGLCAh1DaUz2Fzr6RQMGNJtLK5FS9nw8PTHCPkYY3NqKzaECVv3ie1Gu",
  "key29": "3x3diYVdrN52TJ9BH5DrTCduGSaQCWP7k1A7deD2ns1DywxxgmysLh3ApKMsZ8hBw87wBhqpuPNYLxdwEeWTXS6Z"
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
