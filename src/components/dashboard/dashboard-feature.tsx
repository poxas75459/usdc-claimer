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
    "5AL5Rcx1GXyUqXrT66agDjDFCK9rQq3UJojbqKkjpe8f1VZ3LotKusAnMSAkov1mzRyGwYJR42ibfhUfKfpZ7sZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4dTDqxPKj45iTcUgdyv4qsNWoR5dsBWVLkCyWzAVG9utUqYW4quamDwnrHYwZfuLyLcy87mAcPiVFzaS9jwP5M",
  "key1": "4TqcCBaMq5cRdCWxkoJXVvAXBpqYKsCANtC1BmKZT5iex1MWKf2QR2Zfevo4HfaZWt8M7fjEAhvT4vTUW1CbriLW",
  "key2": "32N5Nix9RvUGr7U5twYhu4zqvLacd7s3LLqTEFbEfCsZ1z5B8J6Zfy5MSr9avzHw5jrAzMf5BCzfjfoWYd9rvESV",
  "key3": "5DTEKmmerhjk4om4S4xpW2vxKt6JqzuvsGzpZ8SFaF3U1NwENDnJbHHew2MkKiXhjdwBhXF38KB5sRZxuZWVw6HT",
  "key4": "4f4k6bUqrBhUjQ3gLeBfcsvKMC2pYf1nofwB9bGmY4DQmA6VgYgEXLJZN9Jenx2ucqrARhCWR49dew2gN1sLBaSi",
  "key5": "5c8bkYydfbUY7JnKkGQrtabrAn8STdxKHrHe3YXTXj8XGwi9HKSvAST5iWFQPDNCwZFVZWmpA12RUawPSW1w9fJ6",
  "key6": "4HWTRdYTYYWru8qB4S4cpfEYBUDsSjz5gr4ZxDoWUMeuL1iST1uS9ZxMekpeLSk6B9GiF9AuJ6KXv4MRDj4hqXr5",
  "key7": "2b2JKA4t1arXA4cTZAaFuAEzdGTgVq8HUTBM4gsb7fVVd6LtLoHBG56bEGdsxDnPB2AMHKKitFJust9t97WPdQpp",
  "key8": "5EBbH2TmcmvAZjkQfejXFrXfK37iYB2CnLFsWxjpXFVWNhe8UzxGGsgYJCQb6KKg3F3kjoKjzjqokJKBuaaxw7jQ",
  "key9": "3icQWAC38AtZ1UKPk7SH9rP9QhfGNQqvC3if7DZ51etKW4xK6azgb3DncUGJrsoGN8cjFQwr1XpKKrRebEkd4p8D",
  "key10": "5SaeS6K75g5dPkPYDaF382et9MJeoJY7G4mVnuf4D5E2tcmuiXHhNcY4oSUFVK5aezsjQzVpBGz8TJujPE9e8SR7",
  "key11": "47wGd9gGwW3HeGe2RvKF4GXELzCjhEvsotuZugwVgAGVjMnMHLjJ8tevAQoVftf2WNNFd495uTfwH6aEy6RcpVYN",
  "key12": "3KSi5wXhyTgyGmUPYsHSpWUrdESN4VzwNMxhnnnHXnXkg9AvbjHmnNqnwrWZ1JtaacevFUkv1tZApb3cB2U2gf4s",
  "key13": "63R3EAfTDHyw5d1vNJ1MzYkKb7QMjbwjtxz7x2NwDrEjZBru9T7Z7UasmP4bdNUBFockEtWmx8NzA1xJJDcYguDY",
  "key14": "gqU1TwECuy2cTSXh4Lf3zpfHTD1yXnoGYnCjAsVwHLsChGAZBLEotZe3WFZTtUwYJJv1DnHfFjkP3iGahfYkX5j",
  "key15": "36H9MFH7HfW7i3XjYxBje8pjxLzmh7DrE5XPgtdw5xwpbSpwuxK5F9SsPNW4QU9UtJqMuf4bzbt9eGq3vwNhS2sv",
  "key16": "q6bfsVvgX9yVVskqVEDiH6Yu8Pb7dwbzGdcKAmfpUxUvLxqHEVpbHUjphCgS1n65ZATc1fpGF6NnN3J7YSAxeiJ",
  "key17": "jBmfUJQrWMyDibSFY53BMoohS4mQ8LYSVSeqwdgvJAzcBvnWWwLWyvq5992r3qWVMUcuzfAMCQ8Niw7kwDHopqo",
  "key18": "24tjNLPUcuYyNh9u5qAW1FhGmBXLDqJxbT9LEVdTRSpNphk2ULEHH2PcuQzvPNShktvB7LG4hsWYDTzj8wrsJw3e",
  "key19": "2jPe1qrK6bsb8am1h7mRXzpdNkjRdrc9MF51HPexNZkUYN3bigSZJSi8hDKmqVJZRmdhQqLJ73Sugq1erpxVM8aE",
  "key20": "2FvFDPTb8zYSb28RpYfPzCfqDDCrrh6DaDMpz8UjKwEvcpwjsojcDyDx7R59gadD8UAxsF3QYJssuWUjii4SWgEH",
  "key21": "2rq5cVhkKUtPdWKwuU2kxezrex5UJ4WuidG1GFnCeM88Mwqdey2grGrGLsmQYNpoyQMbVBauK2XuYCxdkafY17Uf",
  "key22": "5UGx2b337cPLGWtnZ1Xgxrz1t6Nq3iBWtFN8espkG8SBLdfSSiHdZaovKTWPQJg95RYtgqG7pDBpfiwvY84V4xrR",
  "key23": "5JGE3UqbW8Jpsap2UTdZDTgDSuSGjBZ9Zi9SXjiibf5ASA6YuC84sbaa4KHRwGP5KA5U3SkkYcT2x2tNYHETtdPv",
  "key24": "46VdgRWjsgXrQd5aHnQCqh9rtSFfoJWTdAPN8pjwgfGsKPAkCHoQyq25Y22sWNwydJ6vdcM2Dx9Bdpzg1Rta3J35",
  "key25": "6AHysX4ei3mtCFqcQUgZp7dMTcdV6NPQgEf4SmDNmDra3Gme9yWLzM2j3ohCbCtpPBp3o1BNUrcVGu5oLApDWKN",
  "key26": "4PQxeF6PbzAevuSBGHgJqqxSPaNqBVGhGS5J3AXUAsbA6EgSzmeSJSJ9Q9J68pSPPiHTggLRLYYzTaGCfLtmnz85",
  "key27": "apALevQ2TnCp4jB4uGQ9Kr4bFbY32ny7PR6iL1wWFAwj3Zk1Upii3oX7BpTP9vW1rTzDH4ckbtyuEDvPSYAyjof",
  "key28": "3DGt31Q4APMBgHjLCFT46FjxZ9HjJxEzzS3ukjSvS8cwpSQivem7NdY2bVpdbdY6JJZnX3e3zaqoBcjtMu274Rz9",
  "key29": "wZCFkHEtAfnoHUkqu1fJcML33t3b6n8pXh6vkNAkBSGmyADD8dFEJ65KoWowhSsntgCT2APWY43YAcwpKZNus8F",
  "key30": "wnxpt6VC77LcfiDv1MAjJAgVxtf3EMcJbMLKu2BwSsaufTJQokDz1RPRyj4TDdMZ7PBwXLLTw3eXYn85rA4Ny3y",
  "key31": "46iea7yGZLQimfUGzV2m8pLQEeoPsAsP4pPbD9K8kpznKkfJNY397R2gAJR8GzpJEvWLF3hBVFHDwySq144D4dGA",
  "key32": "54qsHGVC2XMNCfZtWCwuyTTNc3pVcwHz2Lki5RjyeBjXA7SUnDUfPwMp9XgH8X4LWvJcJ8mp44LR8sWwGDiNwx55",
  "key33": "322iFbTqwTCmLUKhYWC3HGeTCKx6PbaiadZMVYANPKhBR7DmfcWX8CQr3bzR6MLtcEaCM1d6VSHXTNR4KUW4M3pA",
  "key34": "UqAXwJ1kKeRwN2Xcno8enkQgs5n6f7sUXfnaY6qJkFC4k7YycQ4ZeJ5NMq6mMoxEBJZct7qjnCm1bQnQ8t9Pko8",
  "key35": "xvhXk4HNNXM3nm5KpFaUJdhGxwcPdUDJcjAUX48TiU9S1AqMZjDxB39oZgiJ9kbbkPtzptzhoYv3spBY1ZG9qBe",
  "key36": "2BBDzRBGZWa15MMeKk23SFJB5etcDtaXwERR35Vn9WzDdKj4tuK9vPLU7ndbmrZe6v3idffVhMQT34JDutzr1Cs5",
  "key37": "4yQQ7ShggQPg544LsV9PwvWSC3E2WQruk8avCtzVjJSs1mUu3xDdgPj4VufBs8intK9PXfeQWZSkXvvik6VF1pvt",
  "key38": "3Zi2zgHQ2Sznhpg9NfbBtNYqCWTgmnJuvif1D3y4kFB8PZu4iuqVhiBxvP22tgzhAM6mFYCumiztEpEGryvqSXqd",
  "key39": "61XJg4R3n89ACbReDFMggpqzmwdgfoEBJjvs6Td9Znfq1TY6wLtN9t4p731Z8YJtRj6vmuTHitSNBFDmiWAZJHS4",
  "key40": "569AbfMNTymad9W3H16zCmZe6vBiBtReY2aC8qQTEDhLcB8WSdyZpu5qHGF4ocLWE8sgdMughLknCJuD8KH1UQi3",
  "key41": "QYPxwzBDW2D6eRcmuw5vXgXz88wpXfRVW677FHztMsXVJ6XSHdP6ayjZ2hFJG6DFRYhG6nTe5NMAPzBRPpytZFZ",
  "key42": "B2e2rtvTtAEFmyrNG33QkzdQhvHsEp4MsmDetSFZxSjXHdTrRgGU2piMciGv1a8C1MTaLsxrCQuLpbK3URtmXbf",
  "key43": "AoayZqf3nHUusbRwRphaZYcK2M5Tp7qXy3yEqFb6ydW4iEniYTh9U8FwoKNiKKdaGthZCApf46ZtHjVy7TZsM1Z",
  "key44": "SJkUNJ7GuqNSaqbrPUwoHurTnhnCTCHdVhEegsjMfJbFZUKeJuXY7ZMmzLBnZLNcPSfbnx7hhwQyB2cZDFHHUTt",
  "key45": "4Bmb7uB9pJXSz85EodadC6jKfMeRh6GJ4ZPfot7c3fdHqaU1JdQoAttyvmgkGadmi8N2PduLPrr4ucbjTSby2Kfg"
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
