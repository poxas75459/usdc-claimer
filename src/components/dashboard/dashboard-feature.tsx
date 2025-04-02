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
    "35k4qtedK2kMbEo8GRYGb7cq98MBNPxjuUvVAhsYTmMun4rJ6fWvCatShY5miWxXTE95b3FtrZw6ufLPBvhGBG8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FupjprLdKnsmbc7ydrK99q7CiPsJvbgSHSC4HYZbCi3GETVzAFYFJE4Ym2kMJDtvLVJuupXzxcf944b6nRHZRhQ",
  "key1": "VgJ74FxzdiRdvKx7nBDvwBWEnrwmzY5fyfgkjm7uj6i7sM2iJ3NKfPS7Dkm8SUpsQRYaWu4aYM3tCDThY3gU6kH",
  "key2": "cijSDM5mEkKSSottDXXJkvrnNYZRySbdR7xt5ZcEPTTKrLvwL4zt3Woo3UrmHQpFHWSbsStjxfq8BDZAtUb7RgT",
  "key3": "2eL8iQh2tYoFyaHhNHBGSF8eaETYf1zxujDjYifZLzLvS6GBqhM68VRxW96C59PC2x3JwDooSSCsYKBwVpaGuaA5",
  "key4": "SjS33wYXcKreDEWDH5FAT1HjD9QT7RbryztHnGb4tH9LnLQACATGsZ6qk3FHvPEVbGnusMTaRFykom1r2rVpX7X",
  "key5": "6VgnTy71YhF6LHFXrYZAxogtBQR2buV8R5mB7DffoJw9xu9UBaa1acdH863BadAfw2sBD485wG6pEQzdoAGLqBQ",
  "key6": "3bHQtva68qJRKA1rfTPA5sYewdpJjwwQrfwRFN6SvHFwfK1eWrxUCRSJTMi1k7bLzVbiQ2hWrpR5GYaSmCp3YXGG",
  "key7": "AwC2VKgcVxh7tikCwSNFicd1k85EEpbkAZmdSmAQ56hkCFkUbka5VbGnbJyUKPbmkjSej34Gv74aBCEmbz8bc9K",
  "key8": "3mTrYLm5MStsCq4mkRXBCBJudTEjfcbFkV4e3g8mYVG7x8JgQq1Wh5ZJ5rmfh4gexcBXj2jU6iHoWPqGcRXK9htN",
  "key9": "58EUKYBLdWA44rr1H2RNwNSDayMyM5rm5uRXRKjvXLcbWhpep177Nej32RAEWsFRYCoNgJEJsf3CpmvVJJGArVRB",
  "key10": "26HBykDrbasNE2iAW3tvAtNA2XjtjXqgdbaNBHHi4v3jSW9vV5oBJGk56EvwmtKfkmojbX31nvh4QKAXYu23yw7j",
  "key11": "smD4njx4Vuz3UkZX9XZJTeae5werUUREjVEHi6pJKzcg8ygPdi2RrT9w56QpRULLuBJ4kDXCFjLwq3qBTQpY88P",
  "key12": "4oueJXruoF4zsx79QPdxTGWXd85PMA48bZagXx9P8cpB4EoQQsgxA5ESgorF9SKbqHxEUYmbs9N7aRo728Hejp74",
  "key13": "2apT4DVY43XBUXXLb4dR7eyv5D9hagiRSd79JYxU5EZPrnbaVncoCWGbMuzdYNW8ZtSbTgvL1uyWPertwvqwvHNr",
  "key14": "3uTovRH2NzrKJGQ9h3ada1AHtoc7MzhAeJKXqHeCbku6y9KuqB6p8uKAPsf96nG7dVGrj9QxTiEKkApY8hMceUy8",
  "key15": "2sydNMNJNcoMRVCEhUnYgfKvJrC5n1uKsfZCz7C6JeMndaVc2AG8xvc2NMZGqXru7Hm1oTrMEgBj95wVsNz8gRSv",
  "key16": "3pFMZDskCZrzcoNo5XyPh9tS5F4Tk7U8PZVZ8cFcSYKJA8ZYwzFCNCx5QXX9bzVoKgUB4bDQDvTEamdr8rJXvrLw",
  "key17": "ov827bXeqpLYyikLbLB499MhGz7RvzRCqhJZEuVJiaDHHWztz7UhJqPgF4525ys2q7upnuRSfTat3eSypHobc8X",
  "key18": "k8X49z1sggS9XRXe1MX9SawKrGJwqHLeFh5MH2BFFpGMn3qEwmFBNN8FZDbEQQeog19WTiy79hwgBJYRpMb58AT",
  "key19": "39sXsjwWevrz1qaaxPSNYDf2mZbsXbXLZbSjPFXXtQvHyi6Hnk9jnyhC3t3YrVHhjH63qtZsVeoptA5UGQGCcZM9",
  "key20": "jtfsq3zM3V5GGUaqSPnutQ6RBBCrbDUSjhxZnUt1gweSYMRNYzLywrFrk5SCwCWqRpAtbzUUv3DUbWuSyhtctXL",
  "key21": "XTggtXruckRPYf2aDS1KzXBU2HhgzKrnD8uTVe14fZbSozGrngAWubjUDZx6pdWS7MsUkAzWvL1VJADrZeH6BN4",
  "key22": "22rqdBAuL8qdj8DNsPSjEr3BL2N6ZhNsTWJe8XW55GMgJghF3DjXpEyBnL1z69p63gZ65XJTtdGeLmR7H2LLYXcc",
  "key23": "3qS9QQXzRqUWXWTNEmxtDrPefwZjNTXA7Z2hrmzCqysskFsgSAgq24YZFWCLpT1pmrWDZAS96ycTJV8ZJ4Siv4yd",
  "key24": "2fgQR1esXtTtbFk8HX63eSunnbfgMjXUsoGZvrsKdnvHXUKbU733ZKQZEwUAxj4tP6KZ9TMiatf6uni3K3V5J8Vt",
  "key25": "2qAHQPEcoK5ddYmu5K6Wt5B4MFX7cQtrsjhTgJ3EjzqwBybEymQTkhTSaJ3z3fnD9iD1XmXvtYRhA5rGesy5M5d1",
  "key26": "NN5nuqnq5AyaA9cwnQ8sidYVhKEj3YHD76tRKyKkZzUnLfMhyvNTgLvt8LhxJPZ6Vu2TJMwhRSkZKuE9hweePkv",
  "key27": "2nD1Z4nTZziSWwz6ai1t8tnfUJnSCDDqVYaP8kwAvjgu6R7a8CQKQB65Djgn2DgpKY6wx4ySWazvLZt7gxr7YALg",
  "key28": "4shEZzJLZ3Vk5PvGCE55ZUNpK5NvYPXHgnUUi9EU4ahzqRL4vdqFSPXDBCGj9L3Xb9WEMt3oEandztxCYXtdNTpk",
  "key29": "39X4TSsRpqL2gr8YD4s9BiVEmX1yN6iDz9TSoEDCTgnrbHYi6gEgQV8UempffkBDgQCGJVGb1yTpBv8AotsLmKha",
  "key30": "2VmYQaVnJJpQD2dffcuM5oNHbZgCGsTEoFmBxuKhFg1DB6NbjjikeK8etUsh4p9JtRVFKZa7KyhdeZqCrKugSzDn",
  "key31": "48RoJwxUHonaAFnbDJWmLCDrJU7jDK7uaEbadJLNJLxCwmW8ybqUuWGEPaZMY9cZjfDN6PDdmC23bH72EnQgg82z",
  "key32": "3ykTbtB7yrEqcD1h1uw3neGdqVwjX88cPgK3P8tb7Qdx1xotEbBpzj7xTMUDr8qAjLGncDNcuowPCpytRmMLJGiE",
  "key33": "3PhUpt7QWAqphzcCJAvHeVoQVEqfUMiBf3DuLETcAv6fsBhCy4kpBSwN2WQPHmQSqsf2YaHHwD2qC6pmwfQXPhLC",
  "key34": "5RcPiR1stHUkvKEQgf1mnP1kwHmagFwmYNWvDsvQ285UrRweKPNjRyWxb75KyfK2hNgAsCyfLfRkXCzTEcf5gYAn",
  "key35": "3LnghsJFNnjfSajvgJqy9G8F37uPNEzAV3txK2WDxy5cPcBW674WUopBZJC7SEDBrCENDiF8nJDs4HCbujXxRSWg"
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
