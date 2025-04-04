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
    "4fZtaaUsZvW4B42S7x6N2dsRrjUNcF3NeDts1CiZAmnCHZCoZFmKBtvkpHqJ6KefnapQT7t31geujDRj988WjtzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ALPQ3uowEdZ1iroBqKkadqpiMEZwPbGNwsvKEgFPe8Zq9oWAESUBa8JHNRkLb7Ark9WATy1UjUvQGGLTu2RTod4",
  "key1": "2FuzS75fxeeum6aVtoYUZqxQjYomN6upSAcBgwX7uraGvvPm4MriqLj1bVkXfSokc29WDPehn3jMurFPMcRUd9if",
  "key2": "4xm3eMvdmufVdV8uKP5ewLnPcto2p6cqJ86vLFUtPHbJ7Qh8fT2pLTVQNgx6b8o3Hc8HWcCi7HnwZWj8fc2rwvFc",
  "key3": "x2FvwdU6VCpG8NRhuAubryFzfnDXCbjVFCkdJm4QvydiwgTiuLoQoegF4PytdKyENccFaSwYL9krzg58Uq1T5iC",
  "key4": "4yiaacGX1gKZgavW3KDTbzCjcV4Nd3isvzDag4kSsjbPBMZmvURUBgfm3Gcskk7e3eA3fX2nEMmHgkBpG79ixKjC",
  "key5": "63KvRcNZcKpohcVnL9J7GkNBQjscGjzeWAaaZ3ub5WR73ct9V6hcrKS4Ck5Y6Aphq6tiF5wdmgcxEsedbxDjPxFw",
  "key6": "3WjoYbYmPn4WTWUVYE8M6CBLX2msGcHDdndMkjNgWAjHD7xSittXRP6RnZ5AvBTLqfEzYH733fMokpzPBDdhmfmQ",
  "key7": "3GJN7aNAKbUXRgFyw6VHwKX72ywhrPMB31E576vFxBpP5fL5XXHcftfZydHAaTvP4LJW6DGVG8uLxskUck6n53SU",
  "key8": "tqQ7JnqBfdYc8zRtoBzittWu8P5NrjyRe8HN7HaA62dWBhC3cACsHuB2gcupPGVa1nEuzCVwiMEH9YJfhhsN2KZ",
  "key9": "fNA6ah4vNaTrAuEPhtxrG3wJR9KeNwUasaawNu4Y8XerACxUW5h6J3ywo5WRXBvYqce31UsDfuFcei1ZkhCzSqn",
  "key10": "vveJhL5Xn1sTDgk2SPcr3zihh4ywg4C8duzQTfpVFY4jrJ3pTEoYsajb2EQFeSBAAgmuMLobLBqo3TwoaCv29Hn",
  "key11": "221Bt5Q5W51AkceDWG23JSEcmtNPvPw7N53hUEmWNxR1yPhxyADDZMQe7kxkwYcKrvBMbsbKZxTBchbpUCNjWgeQ",
  "key12": "NVUuSjjYiEVDoKDac3mJJyWrRbbGyz8w5zbT6UTG9qQ6vzKAP3f6xYr4287Xt2yBqopxdLPhXm5DhsLNCdvbjVE",
  "key13": "5KdEAVC6vosULTwzZKNWm6gtipmL44U5DymbeqqavsSdqVqgdB5DAMQ8dG1YjHRc4cvN4dosjfM4sb5ULon8mbkH",
  "key14": "61jBC5r2tCeZcK7QAMF2wAhN5ahLQ9ZBysZRPopdwQohSivNM8xk1QzbnQiiUq5uFpUxd8PPP2mAtQ5BgqZD4GL4",
  "key15": "2yEeaGaRnXQzw5xN76h6JHV5GBq8PggH4GY8zyKDEfHvc3cU4HoufbrfhCiZM9FdPMREYHszyZscMAD9CYcNjmsR",
  "key16": "2L9CHXVneHWbHPUb9d3fqcZDGJF8RLstzt2bBFZDXufdNpMq2FBYFLcdyR3C6MSbi41Y8sdFbdLMoE67GUKQCWc8",
  "key17": "3ZmHkNYWj4M1aXceuSZmtTVSfW8pNMnaFGFC3jNmgWLk91fRyNfZkMz7j5HaTXc4UXCN9Es3Vk9RBBUz6bf5sywD",
  "key18": "2jnJgxEYF3NjxLEGQHqEQ9NrXuaZTPpKuTk4WgPComYwoYeAFVZT2oBnfCjZTvHDW31oRmnsy34XU4xEqSb9M9Um",
  "key19": "3L4sWoiYvMjeg3XNa6HPdN4gwSmLdUJVS7mPZhVhqCWdG3aYy4HVDwRM3fUBDVEzmp2qn9Ao63KXXE3BWBUJeyL1",
  "key20": "2MeToB3hDnXRAa93zCnX78eET5v43W1iPH2xH7hD3RVZbaRtXGSyMs3wypx2QkeGQZGNz7FEBubBpaZWJiBss38a",
  "key21": "LxNdKSFpW26e7cPDzQKAzNCtQzAKWUfXagbLGsAXR1d4VaKwMPyqhQXi6rKiQ6WMT6ksbuHcHkYTbDTiEJQHEXA",
  "key22": "2PNzoj1inPxBemFGbUfE12ctZPL2HsypUbheyMMio3HyxM39t77dwxXbUirt9JSetXwcqXcNJbikRjUk2SAqzLfc",
  "key23": "5sXeSZuzoybEYGmhr9uaRDY1L82q9M2TcNqAF47uJ8LBYGehyyGdMsDsJhYV7qQqdrsWVYSRRHxRXwQFEww9pGHT",
  "key24": "4xanxvU92w1VyMAr9VYzzeaUDLTR9DPgSa3q2dmMLFAviTJVxnV9WqKLfoHsboU7px4jiM9ZKuGx1EjSKLfRNvo3",
  "key25": "2JBz3Uj6mdYDT6KHu5pGmGqQ1FiCQDfeGp6KLDSUtagqm3rovAbYduTQMFn1EUS1ZBmkb1E3osU5mpAfNwsVqCnt",
  "key26": "2axaZ4KP6T5s52nb8cvdewksHHvWdvJuzRYGSfxiRpF3XUfFr54DwCkLRzrXrXbfo31VwqNcPAcUnBtr7eBej9bx",
  "key27": "yxwMwVrLhLiKhrterKCjDqp5bjWA81UFENHxBuofK9oatCjwk5NrPEaAhsQExP6cm2KFezvqpaXhLL7gEyPXpiv"
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
