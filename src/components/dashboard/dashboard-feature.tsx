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
    "4Eyh21tNyBmVJWECxQBLFdhKovi6JWuNBqnTCSgXpmbvxSgtUXTRXuPzZnCvkez8xqjAjy3P8aphBgVzAyW8XJhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RAZSJv7Ddi962AAZZbqSKvS1g1BZKZHSPnJgA6dpeVtmBt6VCJnW3o9oU1ikYYAHtJdtFne5t82emcYVMCPuC9Q",
  "key1": "3U2Hn4fYrCWUt7FkkE2jXmsVfhEcHgSUZ1FGDS9qSMMwPp2QdAzL6hjQRnaq1nQhxV8EEnTKCkAvQfhU1A7ArN3J",
  "key2": "5zoqNvgwvB1TA2ccxCxdB1cBuF8W9LcFTE4PLxbL217Sxip8aH3jmfWAVHCW3Jx33dFhj7eUhhtkYQmNFrdUEWeF",
  "key3": "33QopsnGTjKTQSdqUUmfwrd1maAe9LAu3Pej3dWzxuT6LnNnkMHqSdg27z9gQRnJWQoz2EXi5SVBxBDibtswgqD8",
  "key4": "43uMdtzGu5fSXeKqaFssgqc97SxVd6fQodK7CYy15vLyrgS8hCMd6HAjzRnbKMtMVUEG8qqnLCYJQCxwiUL4xaPr",
  "key5": "3m1zXJW7x6ezdycPxFcMR3DCHN34XphKpTBM2qqztUCynfyy14UDZWuhh1gnwwnwLFNveAoM6pqNivxNvXEgGnqk",
  "key6": "3reeND38q4hzwBP6Xkw3ZPZZanN7tS9qfcgfXMMozJWVjqYaw5jwnjTreQKuhic7A5qwJ5fPtMeqFsYWTWfFC3rt",
  "key7": "5MhF8SdArMQV16XssXwjCtPbpEWhkNkZvABmryFecaCkTTVdTzgj3TVLnoLYaKx55m8j5ML3aDRsK59yiHKdqfnz",
  "key8": "4eDVyejRLiuirja9LaQJiTnrA4MCGj4C2ErVhXmAp1V9upf4AZdj2bhvF7SBq41bDQhK2oZRHNVZw9eAUibKbgtg",
  "key9": "B79HoZrRXDXkzi5hBSoNbk2DhuhmJqYVbbJeJCbFNhEkwmwjcX9425NPmUhBjSvLBHtkPahUeufRFJmrXRgyVMn",
  "key10": "52MXfG2ojQMWHKYUD6kq6eXhjpfcFCv13HLKCPtTAqAPLrL3j4RapQd1KXn4TUKHEayThXRZ9VCWuT8bJxwTkP75",
  "key11": "4x5ZGsy2a1sJXwHNWauQbFFPnCXBcTVdX7cq4GzaCrEXjSCh7CguArgiiCgaPp4QVLuNqh3Smh9P6VyMs35DpfHw",
  "key12": "56FAzBqFyRj16sjQNM1R7wP8MWvvBZaLdniJxPKKjYUHq5TKGPFEVL5LQeTC4QNkfAVXy6DVqA87YG4ke4zu2Eeo",
  "key13": "VhTQv5buzYLjLcp7sLRUg98UcnmSmxFex2PU7KfskAVDafgrr5tZV9EcX4g8siuC4jVjjGjQ4YrvggwWvwWzJqB",
  "key14": "MBjjG3MTZasU61c3nFRv6xRuAQNTLMqQNwCkVbKWa9BTZw9dkW5cnQ2APxoTDCCq64kzCG133MkruUkrPnFXnhp",
  "key15": "5YsQX3Pov5Tk7VE8zRxwoz8wPDCaPiswTBrFVqNGPDoHCnkaNkDzMaPhLinZuxojm8CAPVT5EMYZZA6Y8Q2GBKPA",
  "key16": "52mErGGyb6K9pFa4Jym2koBgqomXBcT6k5qVDDt25RmAjMJZjGvBGakndbF29vBBBhTUbi3fygAKnZeEjiFRdty4",
  "key17": "2QVSjbMsZQjDpuNsB4XA39WcgM7SEH5W9xxoB476JvZF5eqE5CVoCKye7XxoMFA7G6jSaT1kpo63XHCsW4eBm5g6",
  "key18": "2XaBYctqmQQVn46RezCxhZ93RDMet8ztH3Nf28JwNKrrbtf6HbQVEndoFD7iV3N2YJxKhpsZd8iQ9HoRmvBSNLq2",
  "key19": "27oET4spodTtQUAfsvEriVuuRsnRvz7Fr9XMpMd1NYXzDcQy4ScqdUygTaidmJRbTMWk8dJk7N3VvFPHMT5yZo3V",
  "key20": "4NAG3jnkpF9T2Y7EieNW4f42duo4RHjeefVgZZFJ4VxmFVZLcNqC4i1c6DP1fYyyMBPqGfVdQoVZud7uMkr8cxsn",
  "key21": "2suVsABkyfLCsyZmT337evLukGuCgCtesgWMGnswRXfEHPf4bcRUK83si2kt8La1Hy2ez5D7y9pqUmFc21NVaZhC",
  "key22": "4zoeKZQJmvWEGCa7cjvLVidhnHuXfv5hnX8S3Ci8hjmvCr3uBPiHy4Fd6WFN2NHqYduMFP5QSTGS9Z65zWET3kyf",
  "key23": "5V9NakXbXbFZQGBzF5wVb4cZ8UNFs1en17F44RBZksQxpmj9LeUHJJDNpfUiMYNFxLqk2ANXT5ja8Ds2EHvUYnPy",
  "key24": "52s2TZ9KNvijeRUjsPVikLQizzCJRpLRiG9rTDi5VPJf88MZNpzHqj27NViY17hck7mxupzG2zsSNhGA8CAcBdwW",
  "key25": "5CzKM1fhLsyfMtMKykmMThZEXbTjtc7cq5kiTyVBwsfCyH7EBz4Nj4efC76oDgFDAQpxUEJrUrgotjZM8iazjRU2",
  "key26": "3rvRKJEequgFZuNmfkt4tR3xR5sRcVBiNA9NnFr3NujcUJp9xisPJYUo9SDkfvc3pib3dgaa79Yz2R4Ub1csq9S3",
  "key27": "5Xhr3BtD7z5dVCcp72ubCoVAEGjwnBp8fjPcUfymJ4YqgrYW1p2eRWm2Wi8KDMh3YuftprtYgVMpwSiduk3SD46k",
  "key28": "sqqmiCmbScpiXAp3CbET1aLcMBQHnM2cefBNpBx7JFZ7pW7a8zA1nw1TdecBsDxz6DPph9cuSphY8dTEw2DVQXv",
  "key29": "3VDrHMzLjry81pAL3uSdEG31QLkVRFCGVRaGAJadZ6Cwnwk8Y7G9XNGrtzyN4uBYEQM4yH36P7xpbCojGw4mgQFG"
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
