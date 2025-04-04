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
    "56oBggWdLJptNcyV9fFaM6f5QiLFyXdEk7Z7w6V2kzstcGDqHjqnnZXt11Wt1QgvZVortQKAanZdAjX1WdmfekgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quZK9pksor18qTkB6XVcs7GhKrCdtgpHSu2uzJS6ttH68Hg8jW3SgUeW6jd5EnkBQ1AZAnZHivNn13jph32fEic",
  "key1": "3Y64KZkRyeKeC1cU88CxZxeTvVmzSZiJzA8mMQDCJiGptdrtrggW33Ev7Qk4YL1biTTxqTH1yBVXTjTRFmHMEfF2",
  "key2": "5FLYadc5Ar5Ecc6HZxEg5to2q8XzK8HWNn9ygH3uPUd7iZbDBXfc9gtaZ7scMFFnVoLy4g2xkR94KfHGRbsYh6g4",
  "key3": "5wA3JzyADi4k46eRh8bvoXhpK7fzmXhdNw1Ps2atrfBja6GhThxvugdn3dYgLXoKc47r4z6X7LZdm3jgg9EBedPj",
  "key4": "3yqAaMRi1ZbRLHzN5yViBcZRAGnXqfMBjCjMtZWAhVcjpYSGRxJ5MEDqJz4Ti5m2BrwkGDbfbL8EXHvhxwLPmUr8",
  "key5": "3iuhkkPGsy8TgM6k7pnSdNhJzmDzwrcopvcHDxVXaKsW8Y7Vpoznc9Ld5RxQBoJ4m8h86FQCkbnaWbYK7RFHptbu",
  "key6": "tyxM6kMr4hHG9uZjTpREDkfJYjCkMt5XQwwyMNjabGCTd7aMx6bFi45mMRQhxXBdZKYH62SZUX5eaSF58KSec9h",
  "key7": "sVbRT273uEa9WLizK4MMkQS4fGHSiQJ2Ux8x99aFGtsRzmoTayEf13JwG1FRgRRBa5dgY532oWNE2prG7PgAN2s",
  "key8": "5maNgbeyXsMV9mP8qLXkpYzgB2MTa9uXY7Zyck4opNYDTY9eqrnKYMJV2Cztq3UPFW53afZiRzE2roChXwmPNfAV",
  "key9": "318JSjGo9myyzVBwnqH7LqUeaZjoB8sUq8Zknh5RVbE7RYLW3dYxTpnLvv7o7596YQQdWhCQKnuDecPXjDwtmHPe",
  "key10": "297aLKwaB8SwG474tpE6KMoyZyFqZroMegmM5pnADXD6AJVjWWVYSWAwicVcygp7UbzdKkNmpiFhDT1yGMm6Kk7T",
  "key11": "5CSzieUiJgo82aDYSpPwqK3khm7zoSMhuvCApDc6oM4gzv2vWc1XZE4FStMyY34yUgBmtJqB7yF9miFsAx9DfFbJ",
  "key12": "4CMcYXhcGtWMtAAEYe3WCzqaQtnQHoUUfdSAxmv2pw7HvPJwz4pkyyKtQwh58ucYtWcQosgBkz64CdtLGx24VCD",
  "key13": "3TsjNQ2EhZs6XRxmMhkTykhnyyBihrvcZdaHREvjCE5JYjYkiMN1h7nAauoBKhG3RSqtJhEv8NNDCW28GrQTkTyF",
  "key14": "65t3ECdyfyJGYF5ci2XUQT7YoMbwGsbrGrMwGsWejV4Y35nTnK7a475mbLirvGSZ3cTMLpZtm2AH6sVNNoJYhkEe",
  "key15": "urXxGmSE8Sgz6VNb45ebUttXui9h39qmVqUQNLM1755hMEgFJfufL1rcr34vTv8PZL4jj9Z6k72gvAPFrZFNq22",
  "key16": "3NCJVHxkmd32auZSGXaNP6ab18xJT3axsbRRKU9cZsXV9duq9daaS5pcAmwvt5tAhD6PqKCRy9e2xv3ytnkhmAQC",
  "key17": "54uCREbo6C8Q2ZcTZ5ragBXCxUaC8A3EGVe95SBEPkvQ4w2CdhAXpih57gQsFzHzgvct2RzcqufWXBhEjHfM9xUv",
  "key18": "VigbQ2z95rVy9vg9Q9CGnpWNACU89rho7y7Z9jGDBfyqpBkREhw7SjxVD2FZRnkZ1w2CdKKDLFcyJ5pSWY8Uax8",
  "key19": "z184nyADz7tKuBcMpKYXXy1sG86eqhW6WBPmViMM6TDoF5NaW83ivKyZqKM8PSKE616FpFCszigxgyiiay2zWpr",
  "key20": "NNtY6mfG1XqkpgVbZRA2GHWL8sFyM1LMKVsn5VwkMcAX4yHrwR6FYGNwdhUsc7i4tw3XKgcohwjJkcQQJszqmDb",
  "key21": "5u5yvnuQPKRw7vKcW24iZfBZQv8byPfYsKPtH9rJxarAbxijSaFaYX4aMAWXuCyZYyw78oTx795K5fVXSVx775iF",
  "key22": "4VWE7xjhR2rF2J6zFb9tqNPQG94MTUKQFa9WBWkRBCcHh2MqF4pcyNdgqFed2MRrzLVU1F8ijS8M1skBcba6ogEt",
  "key23": "3Sa6XCDWUyHZEP7ERcCaeh2AZWZLKKptu6UKynggTocuZVxNkTwgkup9mjne9RtgnZQ87mYbPwbp47qv5trWXvj4",
  "key24": "5PWczxK6y5jtLd8s4KvdtwbhoMPDoVMRRW2EKmNBPsagEPB1VY3CstLLXEEoR9ydZ5jYgPQjb2sptYT8DBL6Gs7x",
  "key25": "3qqTbukagupHNti2FRLCuV22LzkWf8kuRHQzRps9xQstpgfJVJQxFJX83ZKJCHqziYdGxe667PmMGQToA9a6sdzy"
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
