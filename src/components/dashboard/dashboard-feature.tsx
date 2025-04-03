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
    "5VBxSzjniwr2W2HpLbTrs91kpTh95uBvJ5akBvLA1w6dBr4Wx7nLndgECBvZsn8KMgSZL19EswrJezpU3utPgWq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x36q5fzqPyHfr1rBYzKKzG95zYj6cw52aKu3eMwen6j5UBtDmGwwZnM2ctFF528xkoe31LvFm94Pn9yaA19jEAG",
  "key1": "43qXYAbRhLo5Z1tbaaSuk41y7xmZ3hp7UzNYkjh5TGf7ALsYM44RqdSuwMQsoPfD4tRtENc7zbZ2PQNQ6KzKk96y",
  "key2": "56ApmMPF5uuYn9q4r9m8czHmzrG7yoaapRKGBKnWvVPs7bZHx89d4QShuEBXCMjcq2zR7oRSMvPQavGGhfZo3Px4",
  "key3": "25yk8mFPsP73CRHmwXudX6s2xv3TdXNHok4Vew4vvZJNtFP9HDup1QyLUGyAUUkAEFmw3tXhDpvM58bkVW8GGUzc",
  "key4": "2mLEdUNpGumiwG93e8F4fAyTaBJdfdY4AQ8otq6SpMEaFzEfWwXLRUohJajwTgcdFDBHjvvTJCP6GWNo42SpXXsn",
  "key5": "5kUg1aMRcZeTxhW6iHj97txhW3p5rcyD8PeMNBaYkHkdN5JorCwz2w38j3icvXmR4p7XsNnipJv1dvGpt7WaP1iK",
  "key6": "29K7G1kQJVu7EHryNbzU8p87AQEDG9JWow3kjW4ZnQb5CmVRaGfcyNzSBaA6wVAr7PaKmKa7PZyvJg58k5b6ybhA",
  "key7": "31wASnb86wkbRJGABEzPGmwBxSdgdaS4mMXFHscGYFsuYxTRkG7nbXKVV8iWx3S5SXhX3fQe8fkusZToUSiB2bzj",
  "key8": "5mLdwzwWfucidVfWUHAxr2rveRxssdE4tTp9wj2oBumZTTSDwuhgjxfAtFu1wWxhdooNKt9YmNbuLBBwmj97PrjS",
  "key9": "5V16e66QNcvNrmEVXM7N2ELJgUUvad1ovFKyofHJgmMG5RQHaBcDDwYM16XRC1NHGsDtZJ7fWJQx8xMoYiucdUMB",
  "key10": "3LeiWS8goX1HxkiY2LHR6m54cLwRVGCy7KcASpXohw2gDBNJUdxVpQQ9Ecja1AveR3FGHQj3BKrkKbyoPPmXZfA8",
  "key11": "3di7a4aPF9Whv4xyTeBEidg12Ay7fLpFiXt7iwuiBvKBpgQ3Y84Wnto7buPXUnYUyCWgSucFiQx5KQtD5hSX5awZ",
  "key12": "4NQmUpEExbLq9cPMK1qpr1CMhxKrqVCZeSGWPJb8PsULff3vzkYbJ8V6r9JSoG1xpXEsS1ibDBNBpdmBUMGJzckz",
  "key13": "659Rx1rg4TtUDg14tYdpgSzc3YcXA9io81q63oFKCJn7HMGMy1ZzZTmfFvKXadCr2pKo3wk71dUHhx1si9XJRweU",
  "key14": "3RJJhgag3uNF9juWru7x2nKYy1afjJtP44Zyz3jfbXHBXkKvdZrazRz5j8Kg86wNsW9nmTid8DhQEohCThzBh55U",
  "key15": "3Lh3VHwg7FzA51BqkqXEpZKBtekjYYNdbzU2f97dcwBJj3NZuMqhPqx5e5YU6kfXiLpSphzVEkwhCrtsbcSKAv4Z",
  "key16": "2Nj6pFRpiS3aKpE5dsyMGvCNSCtWz5mXdKMwJurNW1kHxezEsVfjVVLoSy7GFCak91vP8YgCcBgGfR2ErJqYeDK7",
  "key17": "39qveQJMkRpVRUzhyzbgJFy8ZZYXsrGRKuuE7yYL74zz3soRqn7pB2MUzHQnbpfyK1cmD9oQaRXDRGTusiSSieBx",
  "key18": "3oKojGcjboQFfRaCZDEgrBw2bBrzCNL3k2QLQqh8UBiCH2dt7TFvVcA3QQU21zUxvJGaoQkkLrxN6HbKr8x67PEG",
  "key19": "2rheG3FN7b4Hu96ByJ19mEfCAXjxZCAFREwxTh85Gn4gDVqXRG1Nf9wu5x6aqCtwM74qmiccYjyJPCSRPEiCQ8oy",
  "key20": "2yCFStW5KoeBxSL6x5ABqNGmpcoW5hEwVaE9iPpW8BHuNeVbow6ieRtKGRjiSX6MEdxJvm55RwH3wcsN22N2TNe4",
  "key21": "TRdnZcg85Fc12AnbRb5F9gXbBdZaC3MtJ4nac7i5zS6Eao34ebTvWGd1MVk7kUxbaRtdQi7cN7mfj8UFqsX4BdW",
  "key22": "5M46Sf3r4Lr16m2rpHCxwCZmRmEWh963ghx5QRFhSNHHWvwPeHUEqr7TQLecDJj7yKBSq2HbEb9gHhBPuATGBk2C",
  "key23": "48dMan8NpzEYrSJHuN3R2tM8QVneZ3r9jSq7QvFEBta1Hi94sWjiE5xSjQ6wnQMTTPy6Y151jUUm3b4sGJY79pB4",
  "key24": "3iFoHvUTTCLEbKDCz9PJodboDSoion2x8kJUuHobK4JBSeEPcNGwQKYEeteQtjTJ8Z1a2dPKhknoK7jiX5CqSvRC",
  "key25": "2GybP989B7hG9j2sNGyBDCdF33A9YZFNd21hCKo4qraF9Qk8ExYL1aSRd3RUBrHAnfYbSuHb5zxVP9RML5rkRQ3f",
  "key26": "QaT7xjSA62YQmmbkp8AtSdoFd9hm8co9zv7DerzauRognRJJswmT2wdr8qh8pWjJVBtodt4bzewwTGJnRqaft4W",
  "key27": "4xXrtND5NeAy9kw95V6BuSCVyNrLRS5UKD65EUezu4XcTkJ9nxToecL8QtnonrxD1Q9zwgPvWrKRRvAj93mvABpi",
  "key28": "2JJyxHCkHW7b8VL2QwB2xtBLQunjg5nHj3gGSbrBfomcPxqQzJEqQ8ng5GnP5oixpxwkrZRCyxcQKFkBR4KapQ7k",
  "key29": "4uWygZeAgFUHPozef1RmVYYqe15epCywQZ5EetE6suaQtGkASbX7E2yJscF7sc56E6LurgLjzzgKZz8bV516UJ3q",
  "key30": "3Kc15S8YSLdpjt4sr4eE1XAcx3zQ2mxTNsfefhsCzQB8Crdt6o3KEVH96jKUDZdeQzePGuhfxyCDXLiBApqV9aSX",
  "key31": "55FMLhaEKA3KKZcKjNd4sVQgTPtc7kVXHsErphc4gdHxNLwZBgB2j8YsWNqbNrnY4tuDFBs7txgqCyhN6qgko43a",
  "key32": "HT9hnXkq4EzkG5u8WL2Hx7sBAeMSLTVczaqmaTrjx6hBwYupKFPxmnoyjLJTvUjJ2sTVdzeDJrbGi3diqJSgCzY"
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
