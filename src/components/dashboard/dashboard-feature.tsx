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
    "2N5tWVevReG39qUhJBDDL6nQrMrf7Ew7suZ1HLeQDusVeoLBzkMHHeCsn8LJ8Mpm2hVyLu1Yk7rgmV8MMtRpXSqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67W1wK5zyvsEGCE7SBJkkaBbXYjpqACmBiAfs3VYa1BAS7uJMMmjHtqTjBsX9zNbfPST1c13B8hY1ZHYfJyRYEP",
  "key1": "5wvS73KqUW2JqHivWxMsaDm6Z8PLMn4m7iNVTMaCNsqVJ8eELjKYBMohaLttgjh4zGZzrQ2T9cVDagw8HGsJXBJ7",
  "key2": "2uto2ukw8dorkFgnu1Q78TZJmMxr6h3QNtpLa6gFseoZu4kjBHxxL85hBFCWjXBZNDNgnVh2SAQQoogZG8ewzAiS",
  "key3": "KfpN3wcZnkNzE2jMQRGnSBiHJeukpNAyfGhYTPFPr7Jor1UbH5thytqWRdMEWnz4KdD2JSo5WrCti2FBk7SNUqg",
  "key4": "64Zun1enJs5YR6AV9EmLYh9etQiP4Ztd4uLQJZKMYvdxi5kMqZ4PmiRNc5AYetckSTRbG78oCDipqVU37V7NzeLX",
  "key5": "4xhEMALG6uWi82NGrm9CjQB3YNsAmBLVC4YV9bdr8Hm6EnG6cXSPdCS4HTs84Wu9EY4tAQGwiRNwWzAV8A29KAmb",
  "key6": "2TccBdDsGqKsH9Y7JdKqRjTCgeiJXQ8RDkcT8EJd9weRFnqVjkqRU2HjBrY3YnQUfhnX9ZvPuk942fXTqD7y7YgN",
  "key7": "35RAhbNTQhoRgxPf2F2pUqu7USav2CyR5qQh1gJBHEnNbJoBVzUiijSCQbBPow3BM8Stg4d5xqbGf13XXQVy2mrV",
  "key8": "52VrWGva5LqSBjTmsApuaX7RW5UF8SY4XsvzPAmm2Jf7zwVUqJ52ngYhdpLxRi7wwqVrWuoghYTwLNsrieuJPKDj",
  "key9": "52jgmnK3dk5gPC2d67yp8mbmVHruhExMrgW95s7ZeNmE6Bn6HrEu7bbKnN6RkQX6D6ZQAiUW1vmmfbRUwm8X5nyD",
  "key10": "5b8kYviEQ3aTpr5u1dp4nQBhbuE9iMPXVN2sWAab3QRNLgHvmiNAWq3kKPpxrMjYLY13rd1qykJd7oUxM4jeE2pW",
  "key11": "4GkEuNmwatW9ybWFdVwqv6UaSBsFKt9drEzbQQwcgW511GY8p3J3URFFdpyWyYMf2xPGwm4zBRBmy6Dhw5SCqiXf",
  "key12": "4D1wN5JBW4GtbgRaEKE6JhuAZi2hom4bWz7cLFYrNxSY2e4r4mWbdD4Quk2qfewUaz7c73oHYCeXFMa6QKXnoLsz",
  "key13": "59SD3G9PZPpbdzTK7kGqhsjcsoy2fGCjFkmEGb8yZDNuGfL5GaZaCGZGzBiP5z5nefyMFCUuj5jxrQJ41sGEkH5i",
  "key14": "5ywT2FShzp6xBqNzfTLi7DBTGMs6FfUC9MRo3DVUNv88dje5oFWFjink1p8kyVCxkbepsQS1gibWtawHbkQkv4Nd",
  "key15": "2Kt3SVdZZjoE9hX39rANcTUFxxR7pUg7GdeJve8Pn4VBf7HnetZjC4nHssgoUPazqSe85iHLt9DKEnSPV69uxPQZ",
  "key16": "4GAcESc9sCa59f1sEhYR63J3SmTRCEaYLJNKAcT3kLonfiZEwBPd6WE9MttfG1VxyRD9529BKA4VztvJRXe7FLH2",
  "key17": "4c3cmEAf11C2LxBJL1VMjKCFoaca2bUQQYoa3XZwYdD2CB2D9pXXsNVqjyH8qUXKMihL4H7WELv74afTsR6UKTDJ",
  "key18": "3uvMdgXAC6s117jRDaBNpEzy6aZ7dUF8uBzjmpUzrL83zox75YJ7VWVibVdS4wpwSTDxooAaQvr7BWzBWcrxmNya",
  "key19": "3rAR6egJhGAMsSrPL7LdNZ5KUbR6y9ASUX5BCGKoX1K9GPgJ8yWiezmThPoqyvptsTQEzYfTz3q1T6oPuZFfMaMv",
  "key20": "2YeKTK41ra2iRBHdxZX5jmU3S7mmeGGMYLA8NumHzeLDb8ixXUw6xQxttoMusfz3Nwx21HL8CuQYihTqZWPnpU7h",
  "key21": "3dXH8NKFQX8JpayoKjK67fxyKeoy8HnMPgWoZ3e7LyHSbt1LS59eDPYHG7bkVF3w72bR5LewC3RfW1D6zzwqEhME",
  "key22": "2MjaS4qarTgKCtqGbU5JwTm5YPH3uBN6QarCegTG9RDpWEKB1PzLmXKsjM1bE6P5J7DacZSGGPLxdnRXXadnAHhV",
  "key23": "584bEEkdH3sG1MW8paTjygikJRH1JrauBfXxdxMGg51n7v6MB4FyQE9ksx9uiEUxFK375ntJGunLzacM9DmKnmzP",
  "key24": "4ZzwJP2zmCtwRcDtNkrpNzhqADq4gX96eXRXD9xzL3VYBs8f1GG5wNgcbdnLvSBggMfxx1k3TyCutjU2drS6dAN5",
  "key25": "3uV18fZb63XgLfW9oaXqfWTRCzxNtAp2w5TdjDxUAbgTkKjT2xWfzg2mecUnpWwVVHB3nPcHt71vyRF9XGp3sPqZ",
  "key26": "34sxfJ3U84y5sWhEQAWcvJERum4aTnBPAJSz9DfsuXEgzFUpTJi2sQ8QVmxuzKULE64nwgsgkA3AmDYB8GaTJ68B",
  "key27": "51cMouMf3HiYke2fPdCpdiR8SfQFhKEP3syYoSBhMWJhusevE5aF37JB4GJ9BveUUQc1e52fTc9FSjoYyYKheSCA",
  "key28": "3iv7rcWXimLTfipYU3khsutRexG9yYUspoZuENQ5sPSZSdJxuYBhrKn8K5waC4F5CP9KUQ1dz69V3ofeHz33dg6Y",
  "key29": "Rhhx9rH9FpjPzLoDCxK2E4j8zwET8QrbZMGEBeUx1KJhQDMp8DstnRxn9NVFrLRqefU7jsXJqNxiaxcwiXwneuG",
  "key30": "2fwQEZ7BNk7UqjgsBTnynV1H4MesBo2fgEG2CGNoyWbw2viGC5xHDQd1S2V9Bo2dkT1o6WHS3CVqLDbQYBphvyaE",
  "key31": "4pxQHwp2U4XHu57YKt3VvRsiCt7hjxeHQ3oM2ZZFFE6GVrPDUwhYZnPCBzKgbjGBp7WfcWPuXn17u1xBuo21BmEP",
  "key32": "458mqe9HS3xhJVbMjyxVqiPu4WDJrFcfSoSppnTUk9a8q7m1VdSw99PmZEyo72UdqM8iMxFUDQiqi3Li7sTjPTpv",
  "key33": "PpN26jPwR852spbcJQhtPMFARV46fKLX3u64BM9VXPQ74hFxDzjoE5U1MD4w44cED4KLzNSWcu7GUgSUhEWXhRP",
  "key34": "54sfoQoV6z92Xc69jdnWKJrMW1AYPsjer9VabPnCKyzzGUuurpxmQeNXMjncJ6NGBvXdBYreEpjghXvrymhqwQge",
  "key35": "24zD8RyFf9AsDbefiqTZwRDbio4VzFgbQCEgQuQvmnq5ShCxHHXChTAMzf21LHvqfsAS3ytu4pKQ4LNL2NrGf7G9",
  "key36": "3SBrBMX5HxPfjpJ9ktQoKNSeF2ipfis428u55jdAdMiL9796wsXwPGnAAe9fzpKqSj3PaF242zTQ85CsgG36NXFE",
  "key37": "5wUkAAtB2YgXrnR9pg7kw6vfcEA5yRszK8AE4xSCzDDtpDqMDuQ6J82pUitEi4jy4gpAQPjjwbPL332fYNPxr78B",
  "key38": "2DXEv3LBdvpoGrN3qQyJynaz4YtNRmGkFoLGg5bRLsJNYwA1uSDcyoEPWf9JJLscc31TFGcpSnidrSmEHk9XKVxY",
  "key39": "3CMbyrCSyZJudrPGJ3iNKvxJvLrcimJLqxyDwm3PdGPUd2sSwj7YVTAXNUS8RfVLwTvn2tpzmPsX9nB4pasb6rcR",
  "key40": "2judpX8mBB82hLVpvBVpHChbkHVLSYdss6FawLfW2hKQaFmycroV3GH4aCWatX7CHwi5LqJ8gnufacYjuuZPV86h"
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
