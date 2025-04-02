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
    "2EfR57Tm5BChKtrwNcuMEK2AWB7b73PJ8sdJPG64h2szNe9fkXzdW3cDnaj81M8Pmj4W353VdsFJkNirWoR9XiPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbGemmnNto6nqw4E7PoJwpXsQt4WK9iYj9VSnCqXhXKpVKHtSyQNduLF5SrnF1bf81DXVBfqSkDMzNfv5X97Giy",
  "key1": "4ghJfqRRaMTsfZZUxr1m6nCBGoCbYtWDobvxpvQYLghuYRz3P55sMxsBPxBkkt26ZxJicTt5kU7uCwhdyyMD27ev",
  "key2": "2gGVrQvGRynPZR6vWU46HaEDNKtH1ywYD8ATdGCUy5bTYjhSKsdZyTtHkqrvDpMKRL6B9dyyQqjDzt6jQ2St36VM",
  "key3": "asopyTdCsn6tS4wMQTCc7HtQivxJN8BY8TH2bf72nbEjVqhVUVhF6duh6nUMore4KhGwVLxJFazYmgC2tgBFWDv",
  "key4": "4dZ5eVCfqGYGfbWago3rXD5o1VGG2sZNJmrjY1fFHqxDa2rDQhv8VdsRFxiPVeSgrnqzjSW3wzKeayHq6V9SMiwb",
  "key5": "4bep3yNLcD8nGJHbzX6bGgr843XPi4XdhFWYkievBv65g8LPwXCne67RFfcAwciXocFc5qyaBUeBmDTbU2aNXedE",
  "key6": "52k6q7D3iZQ5ghyzVWUxUYVTVtoFTnqQHN2yCh4DSexpBArAkMS2Wo5qJEUbucj6rHyvm2FdyDCgzxyfm9Sso6xc",
  "key7": "5JGEyjYeTKzCHbMLhvQspR9dgXBLeTRnrtTR93YU3fbtf5GgpnjGwCQciGZHEQDXgkdc4bgecWM6smyD6ZrJMoR2",
  "key8": "encwP8ZWBFk1kXTkrLFU8BHVrFWayrQDcMH5uuE6PhYzH8T2c8a5q3jxb1DfeHTyzr4N3GnU3kXazCZUJja7zGe",
  "key9": "Zvz97rdnHtAePMDdjAXopWxVcjTrDV586nxYGEtL1R8Pv3uh8eUraWwGEdJESqcLQ3HSoUq3MDLCSdmLmxrEhE7",
  "key10": "5fXCLEWBSenoMTD131tUYw595P1CBJ8U2gAdspzq2ZiQ7XNjdLhCt2MRxrL9Mb78GZwiQ4WzjGjzCLeT9EZPUngG",
  "key11": "572kCHaK4V3Jfwc5YpKCFzpGeAGao9cvWkT3nGYTzXgLzFLtbQbwfAPFv6zrR7SqiQCSoPLePdJhafhMK3Yb9c1i",
  "key12": "LXBQ67XzLZ1ZpXJgvooo9UzgZR1Vw1b8NkNVtwvkTzPkZsUvGkn76WrP9TwDDN8LrGXa2pFqkVRdAmx2nQmZaZX",
  "key13": "2uRaEsosc8SMykCtowj2Ue9P6f9L5V58QwYrZVLaENz9pjGPd4fxrhgyUXpkcFRUTURrM51UUbC7q7qhWUiU9CPc",
  "key14": "33isthPY3Ehp9DxGaC3rYv6b6gfJwfXNzKvaESFJMxQWTKAj1vf6ec9rqKw6ZS9CFx2WrXoNAkaw7JbZS9winNBP",
  "key15": "aDWwzFgQVyzsaKj5vTWqvVCHY2tMuKuSjqpLLv4DsH9fgiUecAXqHthNrPMBP2jdjJbZVyCYQe41yisqzpEgQYG",
  "key16": "2eSBqLBuqxtPyf8E6v8o2LUnH3oe6jWXCZXyHP99F6rne36F9XVxW27kGogqHhRppWJ9pEfaG1kKBfgZBW2eSoon",
  "key17": "2BUdmnkk8pfCSwQq8Y2kfnvP8iZ93cwXzBdgBYgGwuNhrFTNexPYCVjBbLYrhsaw5a27ByMJAj2qrLerwxJiRkF",
  "key18": "3J6NSckrpg835uqxtUxwUTdZ3QM92cpCcLtyByz8JdpeqPn8Fk3jXXJzj2zRNLDGmpqrLv21NNqijjKzf99hdgCo",
  "key19": "3QRVuiiwaydVcce7k7CtPmiSapNgY1KvggRugsvtRVtzLwi8X24aHW3VQJ2kgLVXcUMpeLAxRASgHGaaye1pSyjQ",
  "key20": "f14AtYFoDjz5hGvwQz5sC71kT8CVGqK3jwjdxoy3BsguQi4aS2eZpAXau9HLM5mjskPnWQxf98PXmvYB2URLMV7",
  "key21": "65dHYnTxXky3QqSDbFg2tATmQXzjyNRjCFQ71qMUUPNHSg3gtXDBPucF32txnY4X4qjXWUt7RMbwmAdxQJVKptgJ",
  "key22": "5SAXZBfCgnEeFeWLwY6MVskKR6hXJ3TndeA1oSfhjCzzenhNLGPq6qPp9QLfN2EfdFPBHKtCbTowFXYHy1uNvT1F",
  "key23": "42w47aT1YF1yeH5PX1bUBzhigNUbi6ABZjAEjMpbouBorNAfRzqRddPaxKh5i1SqYB6LzaZs3TWaVxJgEaWyfYsH",
  "key24": "5c42Z7Ru1brgA3ELu72rDWjcDmQLeUG9vDGvNaySXz599tABC6X3tvzkFBRQhyZghxz6xxNnueThwbNuFuHoCADU",
  "key25": "4dzWNLcCsswPcY4GYWyiWE4ZQV4nasLkYfEs5BziK5t7xJJj1eDiyZYEBuPPCRcVF2xLTRHBc4qFBTu9WwZThiLi",
  "key26": "61TjDKTNpkEvZCYij4SghU9w8mnjCebNJPkBQD54YnPXXyRrU3qfmvN8GF6aDbXQoh5Mw4mbgnjmSQpRuAZT6Mkh",
  "key27": "nSHC4wvv8HEsxAMk2Q1JdUK9MWBatwFLoq3sEM6rXcLx9VyD9ovXdMUm5WFqWz7hYVhqpoQ8cz9BhS6QZCADCyT",
  "key28": "4MZNBBiTiKGGePRWDVFuCb9xpmvqRwHBrLXe5moqMrCS3cHF4e9tDoAsMXxUPTiHB4WwtLo7hEYCQKXc1bo6ZFj1",
  "key29": "5ipkc7id7Z6h3eWzzT4LLhpKhQL3D98Hg6VsKceVhyZpUN9EnJjLMUGYYL4xiu42y8fMAWTkBuPhTWHfbnqHcuHE",
  "key30": "2Wy6dVi2gNumSqQv7GRBwWwCzLxbJQu9JBDHgJrwjE3oHrzdcXFpdyz7ZuXi62HCGW8XdnfDvabgRBpefW9BzNsb",
  "key31": "2hmF6QVTzVHvAsaGakLRVvCzTVBt41vdb7DcScQ6ocqQ9GxutxJpCUJbxVt39j2UaXhrhCyznqmSGjtfYVzaGm1s",
  "key32": "519U2KmJSyeuPPYSGpX6dpZPMFzGFiZ9rmSn9dUiAH99TpSX3ZVsArpDHo4Cf16qnBKrHQu9UGecZ5HKvjuT5aWF",
  "key33": "5eEEUsLgN5ZxRoimnCdTmLAJKrw3J52sxLfGtu8HzpnrR42eGRfyjoRrMmK4Xn5vsxkCehrGJitxh83G3D3D2FiE",
  "key34": "3jkC4s3XpA2pTw3eKZh4m6ied2Tes9gzWRAVbCTryKwgo5J41ZBRa2qwd9mH7y4L1MACG4t125m7jXMe5qP4CBJS",
  "key35": "2iSSsguvvG7PaLbQ3mzY6MEeChUAF9uSR8A5njkEYAQGesr6c6AXcibmKaESRFat3GdgCm9pgdzDwp8BnWPsf21P"
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
