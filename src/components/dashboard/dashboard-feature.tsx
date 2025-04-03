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
    "2DmbCMBDKpt8Ju5YsXWLHhybKsN4q4xvHFhUkZ98QH4hh9rjBi6k76BB11RenkMugwBeHynLip17XHk8TTdLsPsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qH8ZFnNWEgTunKZXXFPwPxUH75tWcDo9bYsoZtFHtYnXptdCHwGGbWwvQTANrjfHpS73d7bMD1K4EN8bERWfgC8",
  "key1": "5GMwXNAUE9Ps57vZEiih3P6fjsLjbqZ3Ds3Hb6Vw1TxopUxLQ8vZ4LMursVhy31iayUskCUdxJtwEwrW8jRhuCfY",
  "key2": "2VMaewuZaRNziUPWBYE6AVqkWsHbGsgeXGgiDocVGWFdA3ewenYyqBPQsiUzrWACjkYYKJuC77uMQvSmMMJTX8qL",
  "key3": "5R1Wqpm8dyLEZPQYkRtZkreyb1XfVbFhvHC4k1Q87str4Heb41isgShmwNaBEgBiU9LQDaMT7JXVy3dyi6AT9wf4",
  "key4": "649egj4KKUnKHjCLtiGDKrg7sND33En6wfWMGbENCN9Dq5uAJz3MVMzKhwmGpYBqH8ZbMwgJyxzg1oZrnR2hS5y8",
  "key5": "SkCHL9bwvQA2xH7o35GZVG8fifSDUqxd9PRvgfXeNE9sEUYowC8RSBqEkc5VrJzuj2DvXJGWuaXUrfBodCEB65v",
  "key6": "22Ak7JzVtGTu8LzF3WcHUpx1SXAPjUQjsf63cYabteZUbdMjiMGdixjLbHbEX9sKoGVRDR9kuBs7UG5xSeop2aRr",
  "key7": "umvT9mMPFQtdrbEKEbCJuZb8bCU5W4uuqFvZhX4ySyPJbZiemcCP3Yt9k3TEHZpSEciEBGj7MGjaYHExbKDuUwY",
  "key8": "i3HYwmk2YuRFQEvtKGCx4chqF2cVZnSPDksn6CpKoWSaen4Y3H4sNTa7UrniKMuzZyXzXVRHJU6nxN69tqBknTw",
  "key9": "61UC7VCzaTPTurXNykQ4Ej4JKgN6SavScM4YCasywLBptBB7BCbGyTUy9p4WHvWnTEMuvSXXgPedmwUJmz4WAxAj",
  "key10": "4BJX4QcocaLZLrDqXuCHNV1ME5PuosfUizWseyc9Kf1Dc6nKwsjnYmsKXpni5n67oxdbbMEyhEdvYVf9zz8QPt63",
  "key11": "4DJtZsMJGDTJ4MYXg96d2wWDDcU5V5nDphnxWU7CrEmLrLnzp6BvxJCvF1ZxWsz3wkvqW9o4XEyzBN8AwpyZxpXq",
  "key12": "e9L5HgYUktZYCTHH9vndBJyLpHTkv2hRrSAapqq3Zsc7douKQV3wnWa2pFd3trpYMVpKSnKPBxexv7TgfZ7MMbu",
  "key13": "4BmJB7NYwawD1MTdmEWe3F7wthEX3kGtrUZmCDuNdReRHk1rXY8yDLRDrJUonh5z9wGHvtuh2h5gVL4C4NX3cj5d",
  "key14": "3sKpLSN3whp1ym7N3RxKk6XGgRLFAVgCaBBzSZAThtZN51gJP5kr4XDKV4twAjLABfrL9XAJ7xHjaTX8xnWn2SDV",
  "key15": "5XbDJHSDo4D1EkB3jEsxVMNRMT3iLomJCsrrFvKznPyqtZLs31NL8SnouSchJLcy9wTTvBEU74gU5EfAcxFuoZ5e",
  "key16": "2CVg7xPixH4Q3PA3tTgucYQWkJyDLdDMM481NRxRo4rodnvvREF2vUub12ZWhJSkxWtiUqwbzzpMYHoeVGp2EwN9",
  "key17": "kxFAJQ4LfhEUMmU4fmZbLN2MVGo4Zsjwzz4SPHAqfMmrG9sToVs84vUQz8wvor2qBvgtb6MhX4Vq2kQyqXhRDmK",
  "key18": "2jWrrpHhRwQgE9mvgZaGPKXyHzh8FVYV2xwfU2T5SHYNBmYhBAeurizVpFFDxWNssaauiP51bpbksYPEJ6t7zqYu",
  "key19": "4AKRmHZUmAkGYmYxq4pAHf4Dbc9ELvRJTP4NoimWA5wp1Lxfmc5U399J7397D6JjK6pcVsSSUYU97WqfvsoV7wzp",
  "key20": "2LzkC3DGGHrjdXC2FK1aV5KJSRzfe2awDhHToHKmcrxKju6A3Cz41SwTYCzjesX81N7bSuJaXHDryysxPuu1aq3M",
  "key21": "58NMiwzNjh9p9jRwMbggSZgtjJqvmGtsfsXkm8aNvUzDLHHSUQLqRPA5xQop2C3QuSPqa3V7M75Qrayuus9ZXJsM",
  "key22": "4D6wQoKhAHMAyBNoQSJJStFaz9FHBCq4ioFVV26yoDc9C5A2tFsBFUUSSeBLa3NTeFKME2R1k17z8of838oMZdwr",
  "key23": "46JCaUhzvfjbPtkahw5JuPGo5bPwyvFaBF7Po9iijxga6fCWjfzJcJyQCFTYzpWoH2uFsBxjcCDoccFEyCYvuQpK",
  "key24": "BUwZW3CDCfLmJiS7Knk15UaHCq12LYQgrr9jawJ26fi1BGPRZQChygouGV7CQK9wBq9QcRT9nLW7MvEjQLAXGKu",
  "key25": "447qRBTsXpUbSwosESwnKDS7Zfv4NjkKUD9FgJmYf24FkfDQF1Mv3r87SyxUDEFwHtN6HcQnBx6Zv5Y7AX5BFGAs",
  "key26": "36pCbxpkW5h5bYwfWoHLJGJZUAWeKn926Es7DG39APTANuWd9mQu3ysTy7hhNzaPbBG3fv3pbzoU2NtaEeUemEjn",
  "key27": "HqmEUHLCtncLKgFwrHAaAR5AjqrfaBrnu2YUkyHsqZ9rtPutiztawMrfaWwiVUTMvMEQCHyErTdYvwAEdW17tfN",
  "key28": "4RJrkhDtVLxZVRocEaUb84LU6ANRqXe9t7GDNdS3wFdYfU8EVvtCVt7guRzCXhYtvGrJUUh84hZUVqRvGn8hBWcJ",
  "key29": "5RzCj9VtAUwa7JbQnGMnMVHxgiMfVdH9j8y159N42uUThLZGk5ewRzpJUn3QVQqP74p2CCRUdw8tSdGeuM2JDE1s",
  "key30": "2z8mZpYCnWiDLFAGvypXQfBhuV5iZkReNHzdcZNhJitAcLCh9bemwyvkqAYXB51NHpv98H7QkHXkHW7bNXuU8K8w",
  "key31": "2TdHvi57XmHo8Bd8cy9ifwuhHju3eGXQcp8LHEHK7H1TCrs75WZzkKxi9qFKEUmZ1ZmbwDCFnRkSstUYXMjequ4U",
  "key32": "2YyEQNnajYbKf91BgsB2tzmWnJ8CyZsdqDBfJGrmtyDye8XZLEJ89dFCgXBRhsGAVYNhsxnK6SEH4Eq8nDYFhNWL",
  "key33": "4USJRN5kEHWWxDMYviVs1vVhyqU2EyJcEyJHKuogjPamYynrkwRgZcWqkuosXTURQgnfjhM93DvsM5Q2EqRE919Y",
  "key34": "5xTfeaaYvYGSSPj5pGHxECYHBWGCziEqJomdkqKnSdRBjwF5K1s7yqSJ3fckY9kdJZ9Tim2uE26cWMzYMc8PDnUr",
  "key35": "5VypcHAE9cAqhmGh6449SfmunQpG991C1k1KxQqaUAwjBJ6yxhEfCBec6tfy6oA3CtrN61mkdimeN5QCQvH1AcwM",
  "key36": "5TFjLaqR8JArxKkgyqSQESh7E7212ryFDWdaVq3L226sL8RzVEZbtKVvBpDFkJ12d8aCQKfHoE2hVqqzwfAqXAKn",
  "key37": "4HsWzEcoVZQBAuga4kGkcnp9fEVkFq2RhN7q63dgaj7Lq2cfERxnqvGR1A7C4YN3qv8aipHwfL82RfzkxqYfQkJX"
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
