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
    "2cdqCKKHemoC18pth4mHfDXxT51naTQ6oRQL6Lf3biifbrgPjAwLejHyZb7cFCetP1kT14518ovTxVzMCtrqeKw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzfBnbaqAtJu5L8i69LFCrBXuwYwFjjQh16hngKHgATgoSMSNWUvZ2j1yoDYpTuuHVijJHnU6PxwNq3pZiPZK7L",
  "key1": "3twJma7d6ieFMXoxP3r7q2bdnG2f18uFk4gEi8nj4GVJtsQ5Cvw7DM2fuXrv1vg6g9Wj4mjUYYow9kCUy4MobG8S",
  "key2": "4DHUwm3popm7LSrAWyrrdZNW5bbU8zSyc3cqHq7AiWVP5UcKVgyhvkWayCykcedEFmLjoMLzkydAsr3aPSXc4Hu",
  "key3": "4MXi6Z1dnmCbLY1sfi8HTP7enjqkiTCem5a1nQGdLVmXAFxT8fFj9j6VqsjGvq6vzBRFNHJkaqqg4ajcFQj2CNJ4",
  "key4": "5sJ1MuNfvC35iA3nLTQgcEEUvsjikbJaM5wYz5MfxWfNFhq2yE6L75R7S4Z7AGKbmEgfnDmmhFLLqX3mNe9Btr9h",
  "key5": "2ymLxxRQbb4ehEuouA2LX8oRNjEVXehQGNnX7HiSeDsoceZ9BCvXSXkBDLbBYdmhAfRmcon4Z4cDLYv7ZhXzf7Ly",
  "key6": "3Xmeb4rBHNjRRgKMzCPUSRu1YG9u3zyyWi93Tf7ntmai8CFWHBKJ5BdLRRz6oxAcvCHagFZYvvxkkotuA2wKzD1s",
  "key7": "QAEK6MCM39qhAQmnnzL7ovzGDQNAYR6CKEsa6JFJuDWwzq9LmfUxhFzfdYkGaXoMiKAERrHBznY3LjK1QzhPRmB",
  "key8": "43vVUhsdG2ywwibmdaXq72wtpvsbMQv9yWdwhRx8jH4MHe9pMcmN2KGy7C8ysDFrHP4RXpVRs6vBLL6vwkiJkac9",
  "key9": "4qcEqjFWMRiV6ffCoSRSx2aab6y1AViXVnUJPd5Mw1sbzURpMSzT5A9eyuiTqTMXxnYrCxSBpeVVahdi6uMNe4B6",
  "key10": "3sJsqQ7hmtJx6NW4HCBLU6vhrr1Sh3Zdn9bw79bT4Kzk98jEytBR1U5zWpKV9UoWYaGLcqs4qwgC3mES9m56NcWS",
  "key11": "3vtnLaiATXJJ4NtQW9puKJDnpBFjTmMcSgEGZy4sy1KTAS1eTKF1oQnfeQs5fHFWFaKkhTGVP9BjuV6BKPttYcyT",
  "key12": "PUjYcE5hcuTwxkigo4Z3sDfo5qEpBGqikBq4ostTcR8eE2roM5z9i5WcEBa37zsJNt3Zvdu5YBLmVrPmuzxr9qi",
  "key13": "3ayBLyeeCukUd7YKJNLAQ9Rz3CiEB4iNoB9LRX9R46vnZPD5QxZ54vV7vpSsW1yTichYbcNYQhwEBgvw4iFNEwSQ",
  "key14": "2mtEWKRprCHVoPCSbEi4qkjyZr99FpL8mbtfWhDUreGrFzyxpyRHhpZwW6LbELHfhGte93AyRSVjQ7UsGannTkW9",
  "key15": "JGVSkXiy4uC3KFcuvXLAiNcrPfGyFE5uQUGzWkLM5Vo6hdtBFfGQbP2jYV3AJYaVhxEQzw1vSZ1dd8f2jX67HjM",
  "key16": "2Nhtb8xGzdAESugeJr1JsMZKFPWHhWewB2qqKE243DiJNCXFWYjhy2BRqvT1FRPWBimhD2ajcxSP5E4gBkx94Fy6",
  "key17": "66EF6dtLLePZktfzZEsK2d3VyCZ6UnyqLsUBp62Xic2TG9q42khQhizvWa9z5N3ZWcDpgGwvhqxnN2Cnz9Xbg9SX",
  "key18": "5FPQAV9hoEXK6krUbHEwThH81TxjTUWwon9pJ6C2H1qh2KAjPYbEKmT1QPyM22nZqxCVMGo8aSu5KHjgqWjLfFYQ",
  "key19": "5sPRXd4yUN6HHrZ4zAv9ei123hDoA7VE8rHq9PAnuhfoXHAie2MWP7DJmSybS7QVTHwtHdyRpbh35Ff2sa1YNVJb",
  "key20": "E1NJHQ21HdtwxJnyvFYb18Kw5j5aTV8uYKvjZxtQqze35D9wepnEkmP1sCUU7b47ZAqBSVDbBMz1bh6WZKoZgtP",
  "key21": "8ndvJBUvpGW2E4jcjVkQ37RdF77VLsF71V6EeuejzXaJvGTY8dzc8heJTVqnsagEGJnFcPNwsnELqhUsxkGeH9E",
  "key22": "FmzLvWfZaLodnRNEyz5sAeSJn4DcP3axW49fiWkJPdcpRvaJQVuV2vUXmC1ZKJwwpBjWj9vKCdgqzKYhd9i65vT",
  "key23": "22ztgk9pAyKamtpMFqc9M1gNSx7vvEeTFBicZs6LTcoZYsN8GSKc5er9xDtjNNKQXEKgnAv3QNMj8bmpzoYPdhq3",
  "key24": "5pHBW3rUBHAdTWMAdFYPVHNRsCAgxjF8rxXAGJPkmdjZ4VTbcvL7dWS8vEsLzq9kMASTaYkqSHEFU91k7UdEiiYp",
  "key25": "67EohSAzRQfAy14JApR8sN2dHxWwEfVJn4Hs1KPX5FsA8Hpf7mmr1BoAU99K8qBH8cZ3gq1zwaWhG2gtBXtShPVN"
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
