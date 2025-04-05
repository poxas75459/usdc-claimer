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
    "j1v49jo3RaD7Hq7K6mDRUe84Bd7DqssPpmvwRcv9nXC8maENUebN4miqcjxihn4Q4PBJnwKXCthrTmcBH1WDMrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HG6UNqkzC5xknAT7shFV3arUfeJeibzSJeuVjtkDLpFzSJSWZWJfHDjD3QAQbrjLJm2ZjywS6Yf6vGQ1wtTcuop",
  "key1": "2KZ6sL9iZbfHcirsAhTYY83H8UxHufTafeVna8zJtXEJkLySPAGXQPgp6fZ7YdsYSGk4uD2XodcxUQATsF31sgy6",
  "key2": "C1p8LPLnigfswAjv1aaeQq6tHGhMH7xcpgbK14A38ygrZP5vkXyUSTwwwGRVtCeaxtEZSy7PawC8thq9wAtc2VC",
  "key3": "BjriszQsvbNz4E2hN18umtmBXTC2xzPPVEuoaLkm4J1Pk7iP4ed7Zm7kJdBidRFxSX2uHPeSLDNGfkxrEFgFb7Y",
  "key4": "4GaVR7PFyto77crah5WGSbMg3SY648QnsAWvnUbsAK7mFVNcw33D7tU7ze7cTZbTmsgQpCAysVhdXzUXoRwhaZsB",
  "key5": "46wT5ASTmUHyRETmv2t8KH4TGV9Ziyn7b4nRWcvCAq6aLPt4EAVzR19Ly9BNLS2dC72LdndGCmgNcNUcgdnGs75J",
  "key6": "yKkGnHU3FRw8Sca7tgpjsChog6roBydRp7XQaM2giyn4DfYJ52YeZBydP3e1LAf4QHSQaS5eV1en7GN4PE2uebE",
  "key7": "5rJC5GPF2cukZFCRJgSkDRXVZXbLubbm1HgnyoZ39asd9VSFGmBfjfZuTyAqCFQPPZiAsK9MoNhAvnRGVmSPR2P2",
  "key8": "5HESx9HyNuExY8bKkFEb7ofcrkCYezddJmCduRcXG911rSP73uLejYfSemUGhPJfeKjHL3XtgwVCCcU2dqrcde1f",
  "key9": "3fm6fqwHHd5D5bxbDheVtqYKXiXrt5Vv8nFngi6y9tGuUS3fTabHzitKjfHo14zeWZRgu2wermRKZz8oodmUJaHF",
  "key10": "4SkJ1W1WP1dziREZFd6Urf8X7E5frmMznoGUWt5eq5NmVwN9FTfP1CDJBzW7U5oo1nKHxLDeL4Lj34TVSYXCsbTX",
  "key11": "5cDNvYY5erZR7DiLT9ibXY8k625RwZAKaeQrDgSrhPsURNp4spBD6nmCAKUZZa5fjSt5m3HjR9d6GVceqU3LhZx7",
  "key12": "5dQp9umXbj76sVHJaZWp31zwvTsMZczMEGNLbNiZCUPLhAFXS2oyp8TY1mVhphtMP1rz4HoQ35Puc9EqXrnRaCj8",
  "key13": "3yQ6cKSJaouFX7xPe2PhxpykEs4eTZR4PPT5fZ8fX4PKVq5SbtgQwxB9LN67V6q7CMyr9fk8W7jnmVbDeM62yA4s",
  "key14": "5G6PTvcgSeKnbGwknayuPNyDbaYGDth7jSNrQ91WYjeJZby3U26ce5JWjjACPEvgpwjpEjRTzUEm2vuEH1CRdxEo",
  "key15": "4AowxkpVRoDxH2AtYctpym97bn6wBjDaY3pyWPvjZSBktimqZi8LpMBwpUredB2EvJW6CrUm37wCsTqGV7K445Gy",
  "key16": "492UDFAVrS5J9Hmoe5b6Hcb4iZ5E18355vuKTV5XNYmahjgUczh7kRQMpFmqDWDVYh1m6iWEATP7FEdaFUauzX29",
  "key17": "2y6vwGqRUyKfUVpFyRAMz7uU9QtUJJCJ3sNcRUicHYVUpqKmPZ6pjiP4EVHQ3sAj3JTyF5eW5geysQQH1pgWewt3",
  "key18": "2d83rdcRwt4QHTVexZ7JRDSY2NfYfaHLGFcToHzaxXqV3u79QLQHDZsNxDADsdhMUbSz9dfbwJkotmTdFJZzUhXu",
  "key19": "5Jte6hQRJjJm3dKLHDgFaDrXkcagCNSFZeCR86d2Ckobi792PG77yxjAeTRgyuFzB4kmyn3ZYAZHmxnpW9RSMjvY",
  "key20": "HxgUTRSVgdvYJxqLZ5wJk9qgTpLmziy6ZERj69YspfNVWkKmaaTm8Fojo39UFLae5jyHTYfhaF4DWAqPoCBjdGZ",
  "key21": "5Vygm4CMHdnhPDGKy3VxNs7zRhhwzi4Rud9qYqxhzBRu6L9mYsoXLQzTDxGHqXR4gUrRuGXaJkz3uUxrzMpisgYj",
  "key22": "25uuFvoyc7oPPfkZZQ5wrR81wex9iqUeNiVCgZ7esJWYmNRCPm3PiiAKUUxpa1RHYFjnjoMkpBirXYsmR3H2tM3B",
  "key23": "2Wmi6S7ZP74sQBFCYF9g4GWJmFgqekRrJXW3XpKRYLEqtKUs9XzaVrRD8su1be5uzKtkhztPvZ4WvMCWok336AgB",
  "key24": "3AszHRKWhnn9oxz8PT7MXorCgykAVbmaQpA7UjbsTrxCnNkjRx2m7MsjtNaYP19nN3gB6BdxzPx8NXh1sfMgFpFL",
  "key25": "4ZUfKxWv2MPX6QipbTNDPrn5Uwsdg9QJAB5o8P3RpVz4u4CnsjFFTEPCquNuHavXzNPGaNdXvC8XHLi4wU2pZpVQ",
  "key26": "2JS2eH1s9gEpcMkx1gCaCk8t4dEgaYxfKGjJV2FuxeUEko9wb62J6hFak27wWHqhsX9JZcuhwiJm6kw57baJZnyB",
  "key27": "39i4DKX3WHX1pbGSxfgkeYTp58VNeNw5FhUceGZ4P9ETdkSkWRDJ84GJUanw2vy6FnBM1wrv5dtPRraj3H5zpE4W",
  "key28": "4bo2EQHL46Zo2wbnGGf69G1tG4cGjYey6mcBLyPdE3fZgGo8ZxQjMjZY8bgiNCzCWZ79paS94nbYPc2fZasB8sRQ",
  "key29": "3NUwNw8eudSgKnELQumQABijBMNbixKTEYze9YDB7iy96oanrmR3NZatfzGSRH4HRXr64dYeYgGv95LDpHzaWq9q",
  "key30": "5yojxS4fwjJLRSmVx6CNJ61if3bth9obNfAApBuDAeisCJnvG5LVsD4a33NhFnnhmeHQ3mvTcPJJNhcbQ3GRRfQF",
  "key31": "47xk42NB3d1RMod2uJYrPovS9ADvcBSgcdnBmU5Aogh3rgjYaFZ2Q8ihCtx4Qa2qCfxnoaTwyFeLXhWa8gafwWHG",
  "key32": "38FQdBALuRn3GRfZCr3VwDD9PPxEQkUZQpaLVMf6WcTTBpgZMQfsEtLYwWo3duacyZP4a45ysr9k4QmmkhBU4RUn",
  "key33": "Zg9Um399BfMujZUbLKx62Yf3fGkxAYK5Y2AUpvaRLk6LsuAtQxE2jbb1Gg56PZDi4MuSFvn5dsXfV4tgvZ3SN4u",
  "key34": "3tYbxuP1UEYk82Sk8ZxUMUutWQHW12Zr7XZyC5JRRqRafZyK5ok6FasXED2UkhcnNzdQiZpb1jkPfzNVNqrnDhwT",
  "key35": "7dUa2gKeaHuSYtmqwzgXmBUU36ceY5wChDxmRvZ95oXurxMwN9yDbL6pbFt6DTRWCumC7LmZ9qvzZqPx4KMV2pD",
  "key36": "5pLTgKcuy5dKS7Yx5179E3Y2DTZz3C9gvDAiPmpvHEswgV5HvHeFGraKCAyc1NxqpDTJYW9CU5jMEorZDQBtiwpY",
  "key37": "5xGr7rvpydYPtWd2gCmDsGY4hzKQZwNZkKaBG4kLqx9hqr5mExd6xUBH4ZoTTUwkAcAVWKsjhCdcyFKq9E3TbKBK",
  "key38": "2zmXBGiiEQ2C9jrWhAtxiywg16fVqaZ1QD5zWxkZG5eTrkFnpQewsx6aTPjUNG2Sw4Xn17V4WQEMJwoDSAb8J1Bn",
  "key39": "5nWWPWAexTvwqAV1catib9ABfZjyw97bntWKPWduURJjmJo92T6hb3dFjQWS4ioFDNQnfhStCfnPtM4YBKo3bcPK",
  "key40": "5K4HGFck62pkCDTKfM7JM65gpEKMhuutjND4de1HEsHh3RNftqoPrTDtqSDe4Ar8bnQ9qXgFzKikHhWdjHQi1cwE"
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
