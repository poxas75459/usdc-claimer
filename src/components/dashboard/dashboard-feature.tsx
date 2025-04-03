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
    "5FMGnzYoLShpMk7TmtX3KCzsFyHtBL5SxeMtqwa3H5R9ntzTP3LcqtZYghEVcCYyNcg3a5VXqsYNcoGo7TpmmtWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6yNRZqiSC6FQpB3JkEMxXv6q3NA1VnaLs37ocU1NBVsaCE6BEE82tTmpbHB5FdJYkmRDnKXj1KtJoSDuV9jCJf",
  "key1": "JPBPwaLaBWvVRknmVy748hkKPKvRYHW4vqAYSQ4dDehxbFJCVr2u3PFgYzoBz5GVu1x4R8gJHPDDcUmyv7QCgT8",
  "key2": "3SVA99S5RSmsdK5RGL4vNzgeYeriHdf6nbjfFYQqdV9cX5CzYQNe4SnZSLJ2kDkYbrcmbQwWCaQ166LAz37wjFng",
  "key3": "3Aj3inz8MxmyAFNaPwPei3ou1LLsTYv9A7hE2cQM33Ar3bCnZ46SNULJjp9BgwHLFLTJJ1mCPi3WHpTH3RjkdbDr",
  "key4": "61Vuy2vTNB33z7QbzaMkhbmqj7ZV69LtFeejEpE2gAV7MujbsHe9BCuXLhynx1NLidCzMPZ5qCLhHDYCGbVjiDzz",
  "key5": "2KVY8ipz11H6SGgwELXiPU2iWhcbWpXTFbZEoMoeciZaJm1qr1rJykhqeGJQod2sxro4vubKgXVDngoW7f43psRP",
  "key6": "3xT6bVcMvkxKoAVGkEZiwp5BnTUNsAxHj8RBnJBcxLwfvSfZxjSqCtGpUa3s5p5RhdGbsFzuREf7ys6EzwjCZExS",
  "key7": "AVXuyWaznYtxyJGDYNV3XD99xjpLR1qDuYmQTmEVceAdp4XynBboyb1uDExpr5Zimqi8GhR4HrPNUWYmR4Xzx2j",
  "key8": "3tHMDXpEhDFyeVm7avEq1P9udryFSMG1RYHD9PPZgR7JkNsWbiKTCNXSKBk8LmnrSJdra67VRR8ZSmZxZgpUkesV",
  "key9": "2HjbWrJJrPwLfxZvHrgdXYxFhZVcJnAZR6CVAwPtgzJgKyHY4Yrve8iJCXGmLF5bTJzCRuADvCu6fA6q5fpj14jY",
  "key10": "49UAEV5UQC1p42FfXzPVAakDui5PmeY73Uf7knEALB4ZCH1W1kQeakbviXzkAHdfBjap9QrESPdkHnrwgXu3vY8S",
  "key11": "JnFyxQo96JiaEPmvqos7B4ZgEhmDqdJqXRmEDCGfkBbAK7WCkMRi3HQueo25XgvZ8xcjonCvSs4dgggYMR88ZuD",
  "key12": "dQfjLDzHK8g8b675oTXMdX8TFvoTqaQ6z7h4K9CWg7PBQtv5axesv3XAvBrha9SRpUW7mHzF59zn58Pkv6xhniR",
  "key13": "3RMEWSNWdkRtNNhrscUXWA87DKqSsKbnpYWfQfjsexME1ZjeReeXu2odctjiYcx4a19dwJz8hDDvvLuXtKudx6A5",
  "key14": "5UJGZJnJbkTouRaN6aK2Zk5kRv3JExHee63rNaRneyAVHX4aSDhPXQcvyJyxNTMt4XEfXbvMkt5Nz8TgoFthnRAm",
  "key15": "5oUCKJUnRZCAGkD2ybHdqi2EbtX3mVRXzx984a2FXHd77SFU7yMqgx8YrUEiRTMCLjetWRreK4fUB3SmXdkmjf8k",
  "key16": "zaNpwJn3Hu3UnthKvmY9VPnLRZptp6MYR1JGSnYAu4yHvEfH9tEWNef2HkZgqz8rWjrfH61RQVCZPiNzfdAoZPA",
  "key17": "K2pUrG4fDpstXFQCx83GLf1Fq9NSUJJnhrmkww3Q81wXFf85JhG6e5AxwdXBRtGeDCMPbKY6SYr6KZCvy1b3cSX",
  "key18": "4K5S62FjeKHjL83Re46LsReJFmr325rQ3VZv5ST8rPD3yf6omoXCM3uyaieCaKhTyW2oq4DMpJVN7tr3voqhfwU8",
  "key19": "5fXiNebuvoGjej4resuLhBGwvBzaketyRxfmbAW8pF3WYZwSEBoS7vJkkrzeJ3mTji2gDo7uUX7rWuevbLrwV2yh",
  "key20": "4R2V2uasE3t6y2MNTqYYZY43jB5eVwDFu4WNP19TrwjGt7bn6R4expCztMYxCrExhdEQRrmwnHsxJemKtEBqNS9B",
  "key21": "byJWQ6Rj6V3eEcLWyix5KTSNtbCmo7QBbgf89CtVpC5LPDS3qVA7hYwHs94f2KbxkFEBPWzD42kS9rWWoJWqbWT",
  "key22": "5hzBrsCyfZc7ApxPft6paLcD9N3AobJv2Msvu4G8oqQkxSYmmcE9M3XEwNi3cK9KCJPTVAfuGwbgSqTub1zTVLT8",
  "key23": "3KYfhKQrZjwyyVbTN49xm3oRiSXJ1CdhpZcubcTUFYTTq9xYrv3TTYBzhLnqgbNosS8pQYvXMYefwzVYStNeAfHu",
  "key24": "4nsPfNtHq9AEuYzYWFTJfMFUv67cMQhZRyqBr53HZFVoowKHqyEqdHMhF5N4chfi4d2trgSKrFzkMoUy6xPiAPkw"
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
