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
    "Q5QnczYHe4eQsqtUuZXcMin2MC3um1bsE5eUxgiRSZUcrNPeddmncXCEEWHwiqsYsM8FQsQjcnpPqioiC3swJMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pVScH8ei3fAZzmFRJLq7J2PpwqMahdgSxyGFLxZRaavv8yRGtpcvdugY64odiyKK4i9wCKXSYi2jc17bT5Nt8Pc",
  "key1": "6364kv1L5WYsNqZ6iVPN63SnH4D5kEfhsg6ho7Xqt2FaknwU6TwrYCrVbqGG21uxqTCz9dVXoSDus8uTD2gju3kr",
  "key2": "4AnckU57x5Jazj7d83yHJ6fv6ar5G6Wa3i14A23owLuXfvSbydYuuqsC544xrbBxVLp8wgkxbDwAHb6Uuaqx9LjN",
  "key3": "2PUAqwUAKyQWULgh9u4JS4BzUP6sHBmfwFu3io2MvqywcLDqeHbozCkRhmwaCwmJWf4cUBPe47trHRE9Dn48nBMN",
  "key4": "5DQ4QFS4aNCQ6XqaDbT9FW9SrqtqXN6qog5xrckrjD5NXen7CuQsisoZHow2aRJKJHu1yHMrk2T9hzQ8YrptwDs",
  "key5": "4gHysR1CpB5PubmBbnX7uyeGzjkKpPkx24mmqAP8122mxWUvAXG2ic5xsjzMLvWa5Sdh1LAHnk6BepGSCtWFmfwd",
  "key6": "4J2Vc3PfjZhAmB7YV7zsrqYGgMMUYpUyMP5rdA9RXbKSr11NiuoPGP3YJ5kM2KEoEK9v9fBQwmYHuYknV2dS7789",
  "key7": "3cGeFTXMx8n6DeFYdcgNaLLHYF5kxK7iPKtHjMdt8gwQUsHpbSQnNjESrkjbqZ7tZT4uh8V2Z9RQ2frNmD6fXtSX",
  "key8": "4dEfuQtVyMr3Cqf5PnrsXRcNkTPs5vpBzMhGrsK9whpjP2AAWW8BYyVhmpRRyyA8rmZUNcHzjtxBiDhKbQN25Y6D",
  "key9": "7ZJEPeYQWQorahQF6Fbz9zVUDjwW2hCFHyjWoKuDh4wbJxLfRMjA2tYT1fBsZfdyaGXVQc6RaW5CAEgXix7M98E",
  "key10": "aNUem1d8cdy9LFPPjGJYF818UHjs5Xyj6jQZT716js6wiH79uQDVXe4YUZFmkpfR7NnZn2RYBu7W8DUHfniMitC",
  "key11": "2gE8kH1FyxQ9DDeeHDaWUPm5c1xvVHwqpu7GC7erKRjctd2ZbqcQMiXyPRb1tCoRa54ZBxcmk8vRBN7WtbKQiS2m",
  "key12": "3y8SAyaymHUz3JWxifmn2kBAYmr9aUodpk8ssPwjwztKQ597Du5cZBvUcWhB15oKmwWH6ahibYBVocp3CnJrGpKk",
  "key13": "3SJYjyLQVSCw7tV3SYioFS9BJdCeCGgvTYwk92Bt3yzvXPZVUG3p7RqaCJREERMYtZTRMhkhc9KD6xko6neHRgqe",
  "key14": "35K1eo6YqNudhXKhkuQjchJaHa9MhSCtGFaBVvcd34TTzGPXkiozScjGhDfGagnaaGt1rAYL6JtQLM2nMCXwrDJX",
  "key15": "2KYbjwY9FDmbvDGgScoGS6Mi1wDmFeeAjv2t438nGTCBrhopWviSJnW9iptH5631GweMuYQKAy9FyCFF7i2s2Q9h",
  "key16": "5fou3yPUH94dAEjhjHnRQ8EM3QQFykXjzrKBM6dHjCq8x5XkJZWsr8A8wBvsNQFFoxG6tVtjMXimrT5XSym4Csmt",
  "key17": "5yebhvGGGDfmFE4szrgyogNMGDLaTXvJ2V8A8DEN2oWRVQkQZwyKnUUrHczUsiKuLQbUbjog3fhFUHNMaHgHWn2f",
  "key18": "ukMyh81MA4HQyv3mxy6RYvn8vv8Hpv5a7Pd2REq5W7tjac6pitim5qmEqjeaPiotofUtZBTpDMVGEC5D2iGHQcA",
  "key19": "3BmHtUWMYtdfQvj6Pp7Bdcx43ghpZG6PnZBNwa5ZgUVNFTDPJzLcKhXZ2oSYzK62BZJkdDVZFj1DChC7xBQYjfzK",
  "key20": "2S966VraYH552FFQShwhWh2RFnjq3Ddrgf81kG1mAZjs9xw6N4nE72cPzEgK2yA3oKy8N2mHaxWgGrKxkDcQrCtw",
  "key21": "5AxgxJmzaZhWDGhS4JG8rknebUrm9wMe3JLGs8nDkPoJa2Yc5qZQxHJpgTNijQbXxtS11JUSohKjC1KD3DpfA16Q",
  "key22": "33pZtJsX96PPcGLLr1ba73Qacd3MZ7wvniz67bpxGBxiX7gppVexgC1i91DsKreSDwj4yVzC2WX42LSdTkKVDJdo",
  "key23": "2cUE4zWyP7YJo2MwMSVgk4eyLuAYp5QfmCow2eBKHG8LmMq6FqFFKFA4kFYuX7D63a14TWqfTKSFkGYMLs8hVwGN",
  "key24": "5ChX3GvAjZ5DpkVUy2qnfFXhPGcrhk993s4zr2m8rNyUTTePPpydtXaTHPrjwkfUDxr4iRSFPEx9AH1HxRZDSsGu",
  "key25": "2GetccfbmP4DkUtMK1txWusxR4NjMYdo9PLhqoKEQhqbN1Svjs72GfVfW8tnQi3wxkh6v5FTw5RaMY5hvvgZqLAZ",
  "key26": "5gHW17djkDn2VAzdd9cxAysgUpYw53xCBdEsXJKTMF94TSwoAW4fQDxQpcVwFwB6SCZFdSvcShqetkY4JyhVH7sS",
  "key27": "f3WvLSzxY5AohqEJJ6m5KkRyfhd1texbVyg8EeVpoJbguTmM8Fs7DYVsQrDPdQAcHG81eo7u3e8xPPaiKg33KrW",
  "key28": "4S8EhYhPhJ9qyRW3jdDK7Lx4VEDjBVMbqrhHe8pUpns8VThzHrqy3G5mvwLBhdQ9WDMyzTTn6zJED9mc7gtjh3RV",
  "key29": "4SF3AfZR9DXVw2rub1YyZDsZhdxNpkqdqL9PzrC1h17JSLp35YVdPoVGZzBivTupEk4d6oYN4s7yptcbLCoxKwWS",
  "key30": "3kFiZxQHBaGhJvy2jqsAMDTJDFjAjGVs3R9rgrtMW1DFnBBWbsibo3AWaJyAXQuSbu8Cp2jZNuVB7md4BbrCgqtF",
  "key31": "5aw1XmF8zKSUCNyvHxmUWfpL5SCRdb4xPuaCB3ku63vh5aU77CpSUYKhHFNddyrThK6uDpr8rjUMNVNXs8r7WZJv",
  "key32": "61iz99P32Xd5TvAkcvivk6m8Enwnp7QYUaxUwvMpbNs4efJYfMJfGJBt8oMeVgjmG5susZ8JoM1wmLGJwf3X4NGB",
  "key33": "kpsrb1NMids28onbr3W7nyP2KDNLjZZJa2bnxiV3oJ5yiKmn7toKkBYH42hE1WsB4zJMGyFYTvQY1ZHBNKZgZRE",
  "key34": "5rFfAQ5gPxbKxUiqA9QNHEhwpDK5AkuHk4Ta86ZmN5w3s155mc34J1HCRCsBwDJviL6cYPVuUrX2pxPgvx86pdoa",
  "key35": "4GAKRrR6gmy3uRkxuAA5eTerxW3bK4ufycVXv38BQCUAvmoh5M1nCkQKa122jbLuZTB8Pyp5H5jG8VDZQERswxiD"
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
