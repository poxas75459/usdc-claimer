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
    "32ppFDtiuep1w4hacyhPjvTjwp1qb966x753Ky6QPT6zvYzyGQCsSYHgzCNE6CkXz2C8UCphgcmEX5NrYp69Sizs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKJNGARWvPqxfEJNT7Hi7CE769i8xmkFVkzCrvzTmtDgFNYBadYJMAyZ2HJs6rBPDjJgsbXiH3fJUB69nxanWQQ",
  "key1": "65gbspeCPhWNj2uKfSn9Ft53zPeJSTaunXM6Sc5naNdhtsnvscBatCXyzmTe7oMeHFZSJPipNcatEApBiAaFPkD6",
  "key2": "32GjBCbwBPSjw3K5SgTcgfpPew1Ey7MQ964tPzKH7UvRxvT7VzV1BPrPg2AhFW65h7vEujmjJYkKpk46kAWKcZoM",
  "key3": "5A1K8vkS9L9NFezCEQVi6yBzrTnSmyNXx3gA1qEBq12okB8egFABJi1DqXBS7onfeq2K3TNsujTyTDXpqtbVCmVF",
  "key4": "2YXUEarS5Yzxjr6SHmL4o611nDso841TYtk8ZruZjuMNLumd5X4qicBwJX26KN2EaVwRaDGx474rHBs9W9GjVy9k",
  "key5": "2k8taF24FvmwHWiWx6VSAUa9EscyQ29o9Vwk2QnMLMaRs5FqQm5eus94FiNukuS7CmCjXCJ2EqcvQpC1cXu77AJx",
  "key6": "4mBBLPWcu7o244c8gAhto7xyG1Y5EvshrNFeDZ3tgb9pPLcuBobibR4JN7z89rn9CZccWWM1QGK4Nrx5Zfa3s8xC",
  "key7": "5rNbdBMboZW5D4NP35cmgUtem7XLoW2o7BNamSS2EUuwcbhJ938CdxhGsGJ4kSdcE9JFzZgJ67F4fMU6QuAMnsWm",
  "key8": "4nkrChRzBsPaKFaZC6LW3rbhvDPNgumWFozohdmBuDLMAfPagcCAezYhD7NbKfgr7mN6bZ57jvfipxNnoVUrcjYQ",
  "key9": "62qSEZ9ZX3zupb4xRyPpaCSiXffo6sfis6GFKB6mR5vn2s3HMuPe5f9h7PZLr2DQD8pp3ZqJZfEd28witpqFQJDv",
  "key10": "5P4SVCJsvwffHNVYd634gbTCHyXy1V2iGfURUoCZLnhHpsjAySMHHZg4xMvdaMyq2wQGDLrEmr4XqvWu7svxQVmB",
  "key11": "4ou2y1kywfqYza5cCEnsnfJTZYbo2NeemuYdzv7uj4PiZXfSJJxhckkdtbghxB96QK7YBMFBnSFcj38LvPbP35Vv",
  "key12": "2mngEiG7RzWVARhBFxVax6eGGGxsGiWdw7X938mSfo9VwRDJyFwTFVyXw9wqhAToMRcts9XbWjEWxSncku85nfcs",
  "key13": "64s3K5UM66LJF9hm7o4vU4krEGwMeP4tUnQHe7NVfzijaA7w9M8eyq8GuDpesob3yMZfSKXsTwarbF5vTyrgFqAo",
  "key14": "3s1U5fBoULDSUGbQsWb662wGwZdWy9QQFDUgRTX84TuLKtyjLPFVPw37ANnT9BvZDDUXTFxGZFRZWi21HYfJWLn7",
  "key15": "41PQxtnonxHvKiyVm68c9qUineCrsbgr7zSzxt5cvDMC2eXQPL2MoA2ByD9JRknEqSMMGjKXSmnmMjz6m4Qxw7t6",
  "key16": "63m9x2iNvxj7H9kpYFiKPvPy4idBm8LvZV7qVAiJr5t7yUFZn9EeQqx3mFB19TarKDUfpDvMveM69bMgpUe8zcRV",
  "key17": "2qTZQCrh1h41T4yQL34Aub7vYmQa4Qg6uLsLdHQR11nZJYAdEC2SindoGjRGnjqHK6oLCK3eRo2n4SENfhUE1jrC",
  "key18": "8Mqd9BKpAAATrnRCNT2fAVnEvga5DCX3PGDPGfDAf4Ck4UNt92Sz98kRAHK9xSYp8HzgFz99X1xLxCYm2WX623c",
  "key19": "4FqPtfeWMtLMxN1XCbkfmj8hmveke9GSXDa5yQW123JPumMsSHems14bY95VaqSGF1RRneeuDmcP3RFnPhq2FPz4",
  "key20": "5FfGt4SfsnxVBczxdD1nu7Rsi5H9T2CXkEHcw8fbYRHcvWrNvC2ypUJc2EmG8Ztjk6mG7xBny2dnXo34meH9RfNZ",
  "key21": "M2Hrs6vdBhzSAwUERF24RJgV5yjetKg5bG4RHQKH9CWEqEaDZUjDvLNroMcECJ33nd6GSVAakbEhcKFLGjjh41Q",
  "key22": "2VnPANhHecKamVDhqxcCCNFKdjeMctZX7XzrnCW3wYFNm7aP61cjCkADyu4zgsjW2JF5GzNyDiH44wPLTBzBdGw5",
  "key23": "YkYFoXXnYr4oJ7DVdXBwafPXZYe8mTpQAg7c3oJMWuSfau8Pj5Nxtd2NhV1aXgPFTjjRUtUYC6LuHoDKvd7rnCY",
  "key24": "2RGQk4q4QZVyNqQrVcmSQynjUpaLJZQgqB5MFvrqcDu1ibvo1yeHZcNLjcWR7b1x2PAx3Bw3mtArFWC4b8uSAw9J",
  "key25": "SP3mhGDPCx4Wd6wba9ZWyH483NE8Vmps2ijcK8oiBMq8o9CkjsPNLaBdAPiCbBGqNu4cCR6FQb6DVtUTsW5EKfr",
  "key26": "3Sd15LB1pcMu5TCmpCixbJwEdQAiMTXCGexjCBgQZynVA6HchzwNRwoEjTUx53mzXbYMuf1gkp2K66ieQVUeQ8SH",
  "key27": "2ZiMFre22WasHSSkUZteYdgeUt6aGh3oPSNWnMjD3EKvWrj4fWayZ1AoZvAznbnroeGi1bu1HjZPVrUiMYSbTKsb",
  "key28": "3PHsfPmpLuj1LjGNjWazx5oSKqzcLfXCrjGx4Avpm76qRU7bz9rM4r4QRnevJE923Ra8qYrWdvPUokuh2fiURHWv",
  "key29": "52cJEnpfuNcD7gmfwoKV6i14U9uqBxLPAJFXkEZsQitYFK8fPgjZ19S9cvUxtvjuVdjkoBTpPhtkkxtBjtVBSurZ",
  "key30": "3QRbCoHEALtQVYmA4Qumb7wDrwvD11NSR37PgebbpTe9QWioWTJBWBt78vi67LcEanitRbHYxx5xMCBznHct69V7",
  "key31": "2NDyWH8SEvQpMsvN9FRZG7uZDpZb77pWHKDdSJTDRywffQDrkf28Bj58nXHZsLQtumbGtaofK9BbTzBAy7z2C93y",
  "key32": "3CRiPRLu6QE3ocb8HbNUAQmz3jJfkAGN5Ev5MyuYuLptXXX9PGsXHUWqom8qmfDo6y5wYt351CHLCeBAeZ71bjb6",
  "key33": "3XLyaJxX51BEME4ACziPEsSg6HLrq18uSeBm39wc4VET7rxCPiHq1tNVcietwyauHCtcUS33ET2jkjZeeJ3Gp86M",
  "key34": "4Ce6BERMNYHNJtMbezJG7Rbr7z185yQkvyn2oJcxA3aTkoxMAN43Q45UogmYCUx4AaXJziD9bYwqU2JFmkn3rTCt"
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
