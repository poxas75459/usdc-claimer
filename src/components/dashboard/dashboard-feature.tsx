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
    "4xun7c3KMqiUvD6r1h8vYyGFiSNhZiKJXLpNddx5DvEiWTHUb6jSWHE6gqxi5DzQEBjmC11Zth4cbMqjLskfMzbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpSpuTqAE3di4bzoYcXvRRcmzK1KhWXfsWePnxEEyApzbAoaVawEkUF378nAkdWgPZPhBYxLwE4ViL6g4KbfKH3",
  "key1": "3qWF3wRM9yaHhssGp99zq8YrAE95i4cqXjFWdk7wTJfg8yRtFC2NjtZGujqwV1x7wvuYqtxbKyw6e4nHjfHgTiwb",
  "key2": "4Ue9ryqPPGg4YocWFCi1Q3Fei5avRWmAvnE8UWmWgHRhrmTCSTt5bdHbTKANJjTLp7buSAYzcaWK2eRvm5TMydM2",
  "key3": "4mjX5CuusnohXXVso1iABfaGFKpPcWxT1ihncs8LRujV7xZCQFWG7QcEJvPr4RT7LBCmxrB54eHRZG5Mh6ZLq4V",
  "key4": "2SkAmHDZy7cavfC7XUHF1agRbbAhmbYhWeggmAsSsG8qQU1qNMSspJEV1qAvT31U5BvdQ1cz9pgL1ayW4skbF4ne",
  "key5": "JNN7b4xi243SpUrEuaCmx1ZVakpTZ1tVcLGZmSf1DQPdMVPkfyLBcrKMx71NxvKx1wtB3RZobRMcUfFFZcHmwML",
  "key6": "ERphipzyrYvW43tGWrZSGDjHuPAJJZ2MrViW7moABgLJG8tmAAkiyWyPV67HFQzf5vLj5zkSTHSZ3LoX7PB3F6H",
  "key7": "46FrzXChP3eo54FNoEnQbjMA1anQfZaucKDRTw9ueBirqTW51JAM3KwCRMivS5kRtC267rW5YGEiKJDeD5ciHXds",
  "key8": "Nwb1UoUBqwwY8eUenAzG9aS79SY3wX5Rzcfq8wHncvLPFHgShueRPhyuZcQ2skruYzWrGEo5a9YEQdDSGkab7SP",
  "key9": "U4UuGjuB5YS8et9j4joGfxR7jubLsJ1eChcdtXNq5FwCLTShW1G4AZFKgiwGi5T5FGxB3XSUSf3aCqp84Gw1L11",
  "key10": "7JUSB88ZmG9ujADUSEuYLpp1v5xSpPisszZ71PvxC1Gjti8ZstnvgNYcfPhry2ge7p6CNhc9uWo15jZJJb2BzEj",
  "key11": "2Dp882b9yhgrXRWznTus6WwAcHFbjHF3pZjmYpdAgLJHEvG8JbigPxQRfL6nDu6pZGktuksJ9YTepR2TAXLkkcky",
  "key12": "3MP4RJ3a19hFCCgTtfa581FxT6QoJRWQi2NAQyZU7BA6CxERyJqQYqt97uF3MUCGo7NztvV4YwesLTCpGQAWjKCY",
  "key13": "oeUmKZgQkD9E2g7cCorseg7Rp8Y9cw1VH2U3ukiGqiroFq5wNJYvoGVCbyfKLLJUCfkweYS5kRYf54wgsKUuwTT",
  "key14": "5GRtVUeZtAwJ7zxTJA8PRqJJEqoJpg6u3c4peTbe8mSYQ9qpEhNJLhFW6NRsQKTPdUmzdN1VE6NfQisCF3ny4D9p",
  "key15": "2JB4UVXePYmnf2yEDchmyfKvygdN3u8qUHwsZsyZ7E9Wk7zn5j95s2mneC9sfAkYj2kjEnjGytPLJR9aYp79ASZT",
  "key16": "3AnF2FxtUgSj9M9AorD2XonJYJyZDCtEHrhDopaFTWyWfJpANk8AbHJYbTna2EmvVKK34jb55gMGrwgfF7KQVXCD",
  "key17": "2sEoNTbEvqtffqiieoG8AeZMPfK36FitC3ma1jF12WeZviuLXSiipBTVuj7E5vrs5PDhA6xCDH6ujjQhjAZQhqRs",
  "key18": "S8X6JTyb2zkgrrq99KWaoyMLbQrg93yGjUkAdoG3gKcD3qia7aTDXufWayrWan6vGM5nMMu4DWVbdHJj2Z8MvJb",
  "key19": "2rma8UoY2iUrQvFzafGGnCxZWcCxFnphCd14jrqS93HrUgwfModGSz2YAm5hsTGMtKPRGnvNUp6YhXJ5YS1Q5qDQ",
  "key20": "3B75coXtY2xjpjoMMyMTBoMjznwN82hLEZ22Gig3uQTRYa5fXxYQobsLTisaE9HFFdFoaYACpmrQcLAwotGBw1dk",
  "key21": "3vsEMbVmiLG3o3nmqq8F4cfr91ygrJSVG6XrJnecQhaJ4XkPDcA7Bj9btbEtkcZAi8GarurmTHYsYoUA3EYAVXoe",
  "key22": "3C2vz3jmfXumwZyBQUjes9w2fUNSHzmieUdBAUjhEDY9XTYVEmrEtMtSeupZBsRiJwwabVhwoC2jJWYwm5sa9RGk",
  "key23": "4hr7FJKKUrmbeP9PuuykUENn5yMMcJZfmP7UkRZyefi8k6mXHrehnJhnXA1w5LqEJQ1CLyqpxgiouB5vsSfW6E1J",
  "key24": "4N3dp7gW4YPTcf2dgEpQ9HgdUoRDn3x4wMCgqVQY4xnYBaJ1S4XdmnDndbrkh2duEekU71Sc6qm447GNdV4nyugu",
  "key25": "5MNg8rC1NgkdcPc1XJBBtxrgWYo6qL8EehoAUPDyXmfrc9LsUJi5qJfmCY7gAkDxUwdj3Rq9cHiU5dCbcuNasyyi",
  "key26": "5wy8JYYaXY6SXLpWgbLRZCBTEeCDBHJiShpxdG4GhNwaS8wB8oATKpssqUitYfdtnYKX8CKE9MB1Z9spw9upegYk",
  "key27": "4SaVcU4tN8acEN4xgEcbRUcLLXBcm8JHCWHuvHbSk7Ho8DzK5VU3bBH572pcCrdGCgbZjLQ3hMG7F2i7Z5hd6eGT",
  "key28": "38cx5R6wmMJn4mSpMeJH7Vdsn6wje7KKq6LYx8vitkF1nEwMV9LQPhL3Y9NYaiHQXfWzdUjCc1SpG5fjnruuwhG5",
  "key29": "4ov9Bje5LxQAAYofturypSLTYmbG73k54rcMeGEanbEyzYRH6KAhrHdj7kZhhNxq5fQsGzjMdS4X7mWpAuC9bLQB",
  "key30": "3QUQEL1SbSZarSEfKqzgnTdCLQQYUy4euNJdWRexLPcWaGBAJBdftYc9u4E7iBRZMjmvjzDiMr65DQ3dmtjXcMk9"
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
