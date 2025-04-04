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
    "4MKg3MEKYvjo9zozrvEpW7He8pqPrvSmtBLeTtysRE486BUx91aCDkRXyjq7B7d42Dojke7CRAocUEGQDsgQTPPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RzBQChtQ5GejMvCQj2wnhHadjKftmE5J6qFkHnidA7DXCrKcFCiDzWvhmNff9ovPcTmtYXtwYCjJiW475z8SRh6",
  "key1": "5fVzSKv7thkdQuNXCknG4VS46AE9VVz86nKcAwAYsbQ1CKzE3Vqh6ERuMnoyGnfCnfebQmknWJ4pt1wyfQ3TWNMp",
  "key2": "2dkaMdiR63LR38WMeag5deaDjvb5SMH5E4QtcfRdhjfNkD9rk1JWWqBCmt2KxRj7Y5dzzmeBGALZBGXAbrFXjM55",
  "key3": "2t9foowwQuWxZ11CNe5sEXFGr5esiJqRTqGpzeWtcMKVnTL48etKWEKSSX3fiCB3qvhS846eTj3ETSNtqN5FXjQ1",
  "key4": "3DXXd217w6QJu5CajDj3ugznigRbn55SWmTR657CYtDypwz4Dvnqwffx2ynxiFgAfw6c5PEVSYwEBK45V8ba9reV",
  "key5": "4se1Rz9RDT73kwFRDLr2hWhmjvGZd1rDMgk6CmjFZ8uCabKucUpLnm6ESoyqCKSvTWtJwSFzwnWgtDjPE2zdb761",
  "key6": "2cYd5acbrB771coxWEXsuHmrfn8P5vgXYgh9cgvxQWQdRCFhWq4Kkm21Q6bQqoXG2kG3TrVktjZqphkuvVcJYaqF",
  "key7": "4UoUdV28rRnKW7y9ZxJkqJLaMSkkSW99CuFcEEiEjajCSLykWQAujhmswYcbWjijzVMPkSLT6xEtCKxcpCMyaj9w",
  "key8": "27E5STMGxEhEa6dbNYMpmHTfTyzpG9m7PHYbnifmaJrUfrmbAncJuHJKykR6XfsjRyTQbz8N6sJubThyHsj39EtA",
  "key9": "29WV88fcSQ1UyAzsZXziuQuyGHkxWc17tyPFK48d4s1ru9xqQULHu3rLthp2MMvjcW5dfqRwMjZfreAaewboym88",
  "key10": "nJMitiqTCHsamAGS2mKoYFVS5JRziag1hvJtedFM5Ama5Vmc1rZmtpiaJNopSQKLtdtGALYAHVSCjr7d41wiqyg",
  "key11": "4zD4EwYq7k32YTKZbjpKGGevS5VmyDTUoHpjG1Ti5gjUv1YfRCm3CWhsRcAxxR4rsYdLSrYu8YvzhtrALV4BeQ7Y",
  "key12": "4w4a3YJ69QCBfY9JuDxwPFRux8BddhsR9f1UBEUbbsQoCoMatxzeT4a4ysu8xW3TvGQhbmuicrvpHMUwiZhwNdGG",
  "key13": "4qoQsyiBWnHRvhhg5MSUc5sNp2y1NAqqFLecJCxaiN2KbeimaQoYzgG9QJ3eaaEGJuPEuNg7m8Ym9WWbGvetZzuc",
  "key14": "FTJEPGFmaHSFPyqGkQtt2n4kWdftdybUgjMnBeErEkt1BxxPvj5cC4beV9hq3eHRied1kuhajRZNUMEGSoyLsac",
  "key15": "3q9oGEgtF7NydDNkYdPFUoNQiKr1TBmDeDuYc8jZqFUhQKdo2H7jWNeeT66Sbd7bGb7Waft8XXKWf3ux5ugPyJP4",
  "key16": "235K98RqwoNxAZ23ExUGHQaeYUXqDXvmY3Z1LyaRf2u2w5tFDE4MdR8dZFB7bR1CoiTYibEe8KnrzeVTZgdg9Gdk",
  "key17": "4a2spbYmUBZYx2LKnckU3oz9iQNshQ17aTtgpuQB3qJy3P7HdNid6PhG4tn57NGt1qmAGt71ipYd5PXF78ZR6rCd",
  "key18": "tmt4xUiAHCh86yJyYsy1buXxLdddp4Xb2uHWqArWcKkGQU3ambuZoEMRX6JCLK8G9RR86d4pyLQAUWEf8mM5oXg",
  "key19": "3SGUmD69caZtpJ2nw8aHKNZEhUXHqjmoEbbsGSf2w5iMFFCAXL5YmJzDBjkQos2uhCAcBb3qTjsNTiWkyHuaZhvy",
  "key20": "256xVZqnLSH2hQzt2xS8apz8xCf1xLXE6Q9HB19hfPmL7zc4JHFzj5RgMGxQDCmCBfgpFarD9YZhhUvKxuqYp1ek",
  "key21": "3MXdUvEuqeEBCxRWwGJPzBt1qGVGG3b4jSgGXc1WoQBazXc1cy6dnptDM2nDWJLQc3tY7LnkfE2rjwvXtgwimJTJ",
  "key22": "5PEG1T7hzJV8P4T4NhYTt9gsuERo5etSa8BS2iZ3wBjVFzuALmk2D48GnvFHJmoff5UNh2EKwLGrHDQmnrNja9nb",
  "key23": "3m2gvqyR3KHDsAon1ji7NdYhrPGNBPrs7gmXsrTzHknFL8HM6NCbbNfrskPTciJ3ytSKBLqXYv6cYRy7J8zV2He7",
  "key24": "5MWGDxwyscmQKHHpHGk2D3BcUFqRRjP65j6oNPVnHDq3J5w7JpZXxsT81vrddeagPuiSYDReDE3BMVY7RS8mfDKT",
  "key25": "4Si9eR8sgvEbyynMhzJ8jvV9oTQRckmJuaBmb6aTurpk6fisL4cPoQMXgLVA9EMUiuJJHFKteC7qLdLwp4fSDTEr"
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
