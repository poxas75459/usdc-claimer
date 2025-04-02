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
    "eY4NK2hEdEeon9fVdbTMBH5NKKMv9yL3eMCxWRdX54AhWq61yxCYasgBf493VoLGSyDRyqFWDPKrSjV5NeDi2Uq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ZJjRnhLP132bhpNCcUHsBfnzpgzHWaVz32aTf2awFjLbMLNcSt6N4NW3HUZbXVFV94FvH9bKE8bNhASE1vY6br",
  "key1": "4KRyp5KZqBYNVNBaeDYjk2AVpmBtLn1SVZP2k6jJRmpuVMDGXmcaraAk4QwkJXWjL35jxvUiXukx2qcFkfAu7pSY",
  "key2": "YALykQ2hqoUwR9SZvmwn2SAjDtZw2TPwehq1w6QTfMxvvJGA5o534T96fE76SPtFjwDM88G2hQKAgPerdVUfVBt",
  "key3": "2EznzEgLzNmSz9Mze4DebBr4CAvUwcja31mKGQy7nUE96TvQx9kbcYH4fvtw8PBVakmuGzLaA1jEXkuw5brWmHJj",
  "key4": "3fm71tdZkEHQT56kYCGHCcLC5wikEXiMLa2jNuuNatL8CfHxhqtraGgGT593wc4RpggE5Gw8XsQ5deZTabHEuKNL",
  "key5": "3p7wsNBFtqTG9VKD3HTpk17WHedFXdb6SdgigjBkSxqNpuAvoXejhBrSqDKYyGMHRF92xvxB5bfTSEKtSJ98Y5Ez",
  "key6": "sRoDvGMnmRZa4gDmepZS1tnqJZ9LwpsBSgNuY9bXd2ufs3v9KqJPgaCaVqP6e9cypjEZ4gpkS7br4mPJhJup3s7",
  "key7": "2Mzb51MvbeB7ZC52NKMRqcsgtduLwv3bGDtgQksKFgfJZxG7JbvTRysXPZDJdpJoLJRGiyrRADsitkZoBBqyVwSJ",
  "key8": "5F55T4mHquTyyDPEYnNZHkLKqaaZUCd7KXvuYxXHm49187U1PN7vsKipHNi5qR5DkX32JyeQDx5HvtHGXTy1uDPn",
  "key9": "3QkaJ8cJc5Ntsvu5a7cRyzNWG5iR4hMrUUu34bMwdt1RnHMn233YfmLo75ioh4pGXGEw6C763WcyYFXFY6bYm5z6",
  "key10": "27D8PAJ2i6GPx5LE88hDZ2asXnHRb1Rd3PQipfuhxMUf9JDTrFqnkBSWaFAqP5MgeNd3Qe8bRB6otb3ZVNdgFN8k",
  "key11": "4zgHvzN62tJiS5EiWhS6Ag6RDqjktwHBm6nezL9guAaQx6xJ76jiR7BJAVf1r8ERTewS4tRLdRDR931rLbPvGD2m",
  "key12": "4SmLo44hRf2SjW5qpHpQiyiggUZ6y75WsssP28QxJZQvUrERCJn7JtYahRK8t4S2x19L6Tw4sNQCFgTLEZ1WreQm",
  "key13": "4EpdLpebx7vv4jmVoAdVk47o6ZG2d5HiFQb24eoKh187wyqpo33wAsZTcNXeSgc6gRKGhw7bsbAxMCrKLg2mzV36",
  "key14": "9FS8YcVZLUmV5cxjrBfYEY2YqBr5Bkjbp71hWUTSgTcTqAUkzF3ZjwYm93tRSDnVM3QyzK8UHXAhEWmyS2NaPNz",
  "key15": "57oiBfEgfK6zirSBUdTzbcPGnPsjPNnkY1Sgcwd31wHeAVUApxbC6d9vf3UKEhDLQJYi5wvsKfznuLUsAHkTVoKQ",
  "key16": "4ibTuyGuG5uLqDSzkWNmnFJkVu7mnEs2ihGke6FyBFef3eMa2YeZXMXvg4KwsuHAnt4kNVmGtgdK9uoDQZHtE3SM",
  "key17": "528rYEh2MxStvdP7aArGsyw91RyubUqaDbZSNYX6vnTeHHC2nE6WazQhCsFMmktdh4t7GoAVL8MCueFghuFBDBPj",
  "key18": "3uX7iNx4fj9wK2YZuUa436bmzKYNY7RepRirVk4SFgLvVtJW5QfmwXYTjJ6RXdYFTD6Y2a8txPMY1y83tSrQrEEg",
  "key19": "2EA6PS9bwjCGUeDPSRHmGBQba9NLTQ1LKtGq4XQZcMbdV7D57qLtfodehiYq62ty8Q4CMhbZ6j5jbUShA1pTPxAy",
  "key20": "5JdbXBKKhfKwUKkfCLZx6AyqgFi8QQ71yawdYQ77Dx5Fs6Fp6qkDHR9aqgFEf6YmAaX752hD3usJz4tLqoyBr3hu",
  "key21": "3GSrNkxvnpDj3WiCcEvBp3MPD6SdKQ4uDrAsG74p1Mf19tX1hZ4yks2pTZHb95TH8HuBLzSouEGCS4NuJHftoyZu",
  "key22": "2AgtvvCHdfMiHmj7Z2gJcFB8eH8J9mW5aGu58V5XaMNkyHHTbAfYgdDZUNUSZk3AjViF9ek8T2jQ2vbpW3xuxjkr",
  "key23": "5UT8cYeSQvEPGdVHzUMRatS5NfznHaZ1pega2hFBJiAZJ4ThmaKj7gD9st4Nk8z7P8ae1LSFMru3mUPrtgTx9XF",
  "key24": "4dQVUBEQCYUAg3R859XbfaE1Y7kWc4G1Q1L2PjE88AcTqZ8eVmg7YmJP4iiB7xb1TrptgfhQfWxUZASNWgybi4L7",
  "key25": "58VtTSTBuMpn8D9r37D7kgbeUtrGHVGjjreLU8Y34NKnb6qmvZ2r1R9ZfvoRWYp7KbCPbxD8Rvx1L47E75mKeDv",
  "key26": "2baATBpwUZNZGpCVTCyu8wPJP8MLC7j84R9LdhqAcCrWGGmSpsjk8cEitm2PRZXJV785wcojaN2VUtRKJop74ZGJ",
  "key27": "5PHiBrwqjf3BrE5W7mUdCrUhM8xUzM5ke2CWZawKKbDL8eK1ii8wdYAQvrrzbtV4RqMwJYR5awEfaFqD3L5fYMp",
  "key28": "5wGHEQE971L72roLkiWGGUtdX7kvnkEp3sWxRWrWojgckmJuNHqZtVgbsjXgSbCdY9aWWJixQrdNsMZwg8o4H9u1",
  "key29": "ADfzZCqQRgxNDAE8tA4MGBNABcabKL4X8i7BYy4WyxpoHQYh1EHcZHLhf23jN21Gbf6drSxUEaz3wvWpuxt11PS",
  "key30": "3qzef3XZ2VLkWEL4aeQwHFHxzb7jbmmtwLAtwddFHZWVREitNQhmNesZiwTnMn7egD4kKrtpn2NYC37d9k69kpaU"
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
