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
    "3yjoCLaey5CiiRdAtFkEQFgLXU5zsUt7KRmzNcZ5TWDfCHmUKGSwpW2xdpx4Ar9XCSUm193y1Sva2x5Rbd3QwJyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qeg4PH5FrXzy1pTNTu3zNbCLpCrwnChRVWs4PiWKhhyKuEiVYyJ2exCC4YA7B6o4MDRMraEmUQh4fMXRAr98zqR",
  "key1": "9yGVdhYdFLKpEp4FtdRwSrkMFzUinCUQppcRyCxLqDWuzYSzxZcAXtnjinnXKzGVzLoWDAsLZySUxjNpn1Jup68",
  "key2": "62N8VirFPZKPzfEMm64MWHpnM4jYRyaoENMavvQ3DQFytgtLwtftmHHWKQDD5oayG6BW4oDYupCyoC6bXHWQxKFU",
  "key3": "2FxnchNh2Vcrep1L4T1CqbCByYmPYcKUP3Xp6KDb6paeN99y9LBdheoKZu88SmCNXacMjeHXCMDUjysdjBbpWPNp",
  "key4": "b1AeV6G1eoqoYYzDmv8UhQ5pM3J6XzJcLtzJhGVVPj3pue6EtqMu61hQQficedYvC2b8UA39dsdtT34x4DDFYMc",
  "key5": "4Ta5N4MaPRZxYZiQnXavrHpmYE11zGsCcJwKA1i3oScdhb4A9oJmu7F78BYLeVey7BJsS4YBM2Nnfzw7cvz3GLnH",
  "key6": "43Ghgsr9hrsQ8k12uqgLq4jHeenHeHJ48r3oQApo9TZiz8x7HAic8Qpvc39usUE5eSoZty17Su3dFr2jcXcK2hfH",
  "key7": "vWWWoahZ9p5p5aqpar9ATsZqjBJHoesQDYGfmAzvT8pLCVPpYCivzN3kPQ7SuUUrx111woAZUTBrvYTfm8tozkn",
  "key8": "2sAkzfioUwSPLdjahNLYYhc2pyERQkJvj5nfMDpsWPbcrrSjEcNHGojFMGZHENSZUKTMGhWPXjZrVjyJ2efWQV48",
  "key9": "4Z1PuWbAt1pKtXYuXmY5u1bb8wbHZxs83t3f6AkwWLcMcBAUSvYLs94qo1w8t3WhTow8Gz35PKjawV4HVBWHazFb",
  "key10": "vwB1QrRBp14F7QXLyrMGxM8dwLfHwQZimmppN1Pr15YAFcHTNpa4XagPRE5DtcTYbzTMESZmF1VqVotFcQUKMKK",
  "key11": "3no2ofJMshfgTUNa45x8tzLdXM31ZfS32cbxMWTqKunHBa9auGSdhejHZ6hCJjUruKDn2a2kKVDSF8a2EST9J856",
  "key12": "2yKnrgsnWzbqMVERCNDb3gw5onA8J7Fy1GETXTUPLtAZVU9MxH2o2Gsp4pVw9NCeyMcji1URTmvV8m4KHEjsbmbM",
  "key13": "3EKVhUTN31Y3zcpfejavhCAc4oMuAnWBH9Ngt9hxF4zVEsFbyDJBNnmeSHTBrbNntUAjCVUKDQvE74VxUHZdATrH",
  "key14": "36RG7Jkrnkj3SbwCjYxMzbneqQcV8bY7nqu8NU7UW6p2sqUscRFJNVyneDW7ZYxJ2nQUrc9DrVxonBouTUYBiLSw",
  "key15": "53MkftnqYmbxy38zaRP7o2xbZf1w8mZ63cMT6X638tu8mgJFp6wCo5RP9bxGYJuECExtdTtdTgPH91mK6sJ8yd6F",
  "key16": "8uMDHNkkmWgeHptoKKR5inRZkDRXHqHRuJPf1PVCZvJeeiSBupgEVe4iWbKz3JPWgcAbb8tnhc6mA8oSEvbNPaK",
  "key17": "2z8QUyxiv2VronXsqhG1f7X7gWHAePgktLu8ksE9W2MM7e2EMD83GmF5VM9VzzQyJVNPyDbGXyGSciMFy1wskz1d",
  "key18": "4EmKUftkksQ58odeacLLYQsyU9WCsBwMnPzFrr8RCBjahhYHxYP7tn9KResSde2c9RZu363jZaMe5k7WdnRY8HYD",
  "key19": "3GENEJGSwNamuZ6pcVJPfwyLpY8XtYeKrSbJSPCud33iNepiagPtPcDfk4DzkbsV6G9gEcH5GkBZDmZnbEasjCZV",
  "key20": "43YdtTrLEqGpmX8V81Y5x3bbjMJyYqFFp8TjqN5875iz7Bbkmpqz5Qrd8cd5fio5p6VYiVr8YP6YgywQaWK37yVq",
  "key21": "4Waz6uNS5ufyhLMJLZo3QhKAw1rGcqwG98FTW2n5nCyNjLMbjFBhoRH98QEF7MhH3re2HkM67fWcCUfQ3nm6KxZe",
  "key22": "Fdevd9beqxfeXFFTAN47XVeGQh4XzcurgcuPjjssoesMqSafwhw7ttHJve39CiLtRGo7XHxYJf2mdGTP5o9oymf",
  "key23": "5ecdtVJ7XzvyWzBA7cPAtX14cN6AhXv3XfR5bAXQfdN3XoNn1dVogfGg8CTupcnYm4sKwzUT9nSpy4pBDhhnZ8ED",
  "key24": "3RaZG6pGLyEjhwW6sfWiK4CPMQSwMHFodZmWHRkCyAzLJDK5Vp3Fco8EdomfzR2GCTftUpX6Q7F1hT2kwZo61RuM",
  "key25": "26afuTwvXaVLMQhs9htvum5ZgNgoXCAUkW3rzyunkYwocb4z5nf5FhogojVeomcaCvTTjEvobsp9FtuwjpYorLgk",
  "key26": "4NNTudskkFv5RvXcdKYbGCLe37zQ6dpYdPRin9YAWtBR17Q2W7GK8iJYimGHdetdgG5qzDzWLmbTJE22UJBnBWj3",
  "key27": "pmAy8ti2d3xCrmriWGMvixFqH6bEuutkebuDTQoVhSh59siLs6SSSbpn8NQKRwBx1iyRNUbf8dpRmVNFSityo6i",
  "key28": "4fkj28nTVTMywbygbHArM3ym222oShMJy6iGugmskFtUHgoRLJPDNtHvk9Zp7W6dAnvZagWcXXVXo1K87eH6UbCD",
  "key29": "PtYdmwXdpPx3Ss3Zke16hVMWYxBGdkH4LTa87cyUHnzogPRou2hUG8WgthXACp5Bh2e9p8QyvvwYFoCVGoa4uyz",
  "key30": "3mEPocdjSdQEXpccVKThkriLXkMzFKeieVuLVMdodikj8uTa8mzb4dfbfYtUr4k9731oWfxb7BR2iJcLhJT7MGod",
  "key31": "5iq8WizypouDdPy1VJVBYgh5MvM12qhz6DrKkcRNgTqSuhyWdnW5kPLJG8CMRd9q3vnbnkgDc6hn6SQfNCpvMXRS",
  "key32": "5Y2tCtybwRyGUBpDRKgcLbx4h2SD44JjChT4GEDpcFwN9Yqvbbf2gmYpuoF9nSKj8z3zEmugy1cPKXTuGreRbkbS",
  "key33": "3QWvb75LL6TotCXqLwAoNY8y8VALJwCnPAHH6e4Vfw3ZKLTqeZpudPXZijpj51FG4fUhaEN1pYti3GBHGv7ErByN",
  "key34": "4yaXWNPFyN9LaRm6NG9Y6EfJ3DFUVvwCWPpVCz18fpd3zae5BxCP2tpxyY43j94tN99wzbv3nm2H8pidzbriGQ6o",
  "key35": "54Q29zM4vejeL47bnVDmdUSD3zeBUg9iMUHMnV3vSnhBjA1FnyQ25uCi8tzLjymRWKMG7uEYKfAWPhqNKFmfKHQN",
  "key36": "5FW4pAw71ucTRLHkf2vjshjsVvgpV7EZDCf7eTfc856zfXAmsSqekRreAp9YwMC3aq4eVJ9ASyRtzTEB1gaSFCu9",
  "key37": "2xv3fFkSz89oa7ZJokJeSUCfcLJMXxeAycWvgzzKQRh1YNAGoH5Y78NCuFcrYBjq9kEXDECwFqPruKfuqzJDoSXs",
  "key38": "NaVswgCCGa9E669NrRxu7jJheDQyX62cNy6JaDjKaZJzQs9hj2g3azfFxgqeNwBoqcm4XvNqxVWKB3yXVAcoJpv",
  "key39": "4sW9MuQP3xC9LNBYjZyK9DLTBhnnEJrM7H8EuxYyW2mmFoSa2bwsrG9f28AdpdxiMpqXaQua3gT4vGF1FLRv8GLM",
  "key40": "2xb2hwqt3k7nArZf7RjEdTLHbxQppttDjLnR8DgJ9LBiXy9BmrXJRSWq5fK7UqYrMncHYEuM1P9eFLxyLceLKom7",
  "key41": "2uoWwLJ9EZijxBWvoo6uWr8LYwAnikk3tUrf9uJR1rnUk41J9eBbQjSi4yv5P4bsuHZveWFo629uBrvMhEW2Fjye",
  "key42": "YN7M6QhpTtF6pAgXYmXxAKzSow1nBpfmN9grUhkBJH5P57VWQKckG4HkHM9ebcWrYL94ivdPbr2w3CEnVsH1Gmc",
  "key43": "3AvCosX9uifHT5e8LZ4oX4h7iiJm11PgPEBGq4StNcwDmqY3x7X5hMo96N4rgs1CG1r3aP6W4pdGWx1KyR8uKsin"
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
