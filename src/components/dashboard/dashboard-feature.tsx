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
    "5zXvgCFkkvtN4QbTCqTKZWb24KfRk5khhEtHAqTBsmm3Zk4CbSTU66FM4L1cVKvCzA7dT8Vuc92pkUGbqhEW6jB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25iVxMf1iayvJUg9UMnrGyeNt23Mk1J6KRetzFA1g7NoNo78Ee86rNsaCSCQ1BRAbeFg3DKmPWKX86Ek5JvUHSgN",
  "key1": "5kyvxVSLLUHnXte7R4FxWcrsJsKLJdFqzGXfPMdE7vae8gpSbAmpF24hF5bYjKDk9emQZ5d4NG3LE59C25jB8asV",
  "key2": "2o6t12ysNSDoo8z82BhNi3txLNWmJSZhdc6oybGX23RGH8Yn1DLaC2GG5yL1Qs2zTuGbLMW3Er2ivHh1diWCjURS",
  "key3": "2xvrZnsVnyfbkH7p9FcgLEjaTGMytd6rjojgLYVooZKCeiUPmvu3UFy6mne5VJvKDrF93DpTjwQQ8UGcLgxRCm2j",
  "key4": "5JmkTHQKekKM4mDvUAq6HdaSeKowQiCBff5hKmfa3BsnvwHXhh1PvWiRigR7FPT1kmNMoPVwe6S89WBMcbzC3XU2",
  "key5": "5hD2US7RJqf8dKdGzqgxcELCLLQ3X6AvAXu7Qw8bYpkAssGmbEmQmgJFqRy2EQSfRLTGGrfR6PHdpMfGEfMBKFX6",
  "key6": "4MspsVLCXcE33U9B1MHwW3GoubULLRybAG9HDEQopWbHFbQXuxSuv2V9haqSocwRdUunYEW1BMZAD9FyQV9eHdjV",
  "key7": "4iyRSdDvGaUsCeKrGVF4aUYuwgNLaSjqMK6JNRt6m9BNtmjYNotU73c6NMcH6Bzwqf86m4VzU62JHxDF3sNj7dKP",
  "key8": "o5rdutc4wZvTNJjn4m7hNwzFejSsPuLsycRBuC5LzshVprsT1xYpVinvJhtgegmUDfTKuTjRiN7V2fipk4UfmFG",
  "key9": "3F55kPBXGApZkqmqkKMvhmmrrcwpJF6cMyeyavpHXoehvS9mZUZ4jUXUVHqqgUYb9upKFC49RQVcHz98nmQnqJcW",
  "key10": "3maoAQF1Pg38LADD1YV1QSgUzYhxrW6yFGdq5cBXVzWxsgV9UKtU2D69nqSWjhJo5ZwcyvvJWhMW7pqFPLB79YtY",
  "key11": "dpRHJS92puD6sJxwhAZRczVRZkEJKJ2g7MMpWMvC83hR3n1RC6ER1syynwp95bXwvDBYiaXsp1amUkwKzYgNzhw",
  "key12": "kTNkrmWHbWn3s48TxowjkfMDrxqEGSuCMdtrLrFkUbDMGusdGBFpqWE6xV5rwcGwd3xboLfhUjPc3rMfgn9f2rg",
  "key13": "4d67ZFMAoxTgdwDr3juaZcpT8PjPoQJjeYopfmJSiwWGPsBWDatGzs9TAcTRZjRjtuXWSWoAvyAbJV8srREwmxHA",
  "key14": "4wFpdkKjFZjgU3MJHa151oJgjwR939KB1hYBvzJ2Yw3CMB93oFXcuW7FV1HqyACuszZFy7sRL3Q3W8DXPvKbNkXj",
  "key15": "5NBum7C68W9CiePvy3e8ctJWvvt1GNNZEQ4aMXi47YEJWLUvibFWHnAZdWnnF1LoNE5ohfCYLKSjaQuGmTe88yCj",
  "key16": "XbaKJjpZugAZM7bXj7agmsVxyC7yJSSaZysRfaajLLB3N4sNCBAiNiWRWLHXrSfU64Avsr8iefu5rPXAvT22vFE",
  "key17": "2eP9kdk6Qq4YnMjMLXt3E3PgGFgLNkLSAUkCnr31LxXC3ARJchXFsfosZ1F6ho2UbtswGnQyQGd1dXN1yDSPstAA",
  "key18": "3vEWxp7s34RkS5HrQYCR9bMCe3SuNUdUXjxGvW4SwSSBsE33TLcUG1saj8nqjqhn4bDH26ixJFQpP6ktYUhPpXnS",
  "key19": "2aL3CZD4btHuGTLt3FQpSbVy3LGxrKe1GmHfPW2r9ns8mmMcwGjoA79Wt1cSMFPkDYSvnpdiXsxwXdDLVyYWsFyn",
  "key20": "4Nj5Ny7t8fAYTBFDz1V3k62cTNmtxmcupoLdDXS6UFvhWF2Y2TK4G4z77pBToWCKRJ7TWioukG4JVi4XpnSK5iM",
  "key21": "AU4zjF3VGBAKDoJrxb5gcPeTDuYE9BSdq8ZQTQjSdRFyd8aAP6H3uw9VjvjNser7XSb9597G82A2fPJiiGMszRf",
  "key22": "2jnvghVSVio5Pekfmcv4AQaoLRQMn7d9GWPPJoUVLCGbwwbpXWdj2HM25EvgF2jMNEKH8LgvLomjtHmJNL1aZS8",
  "key23": "3ZGUsJdsa8mHE9rdBj5VaKfqbaCSnxsL8677yubg91EWbkc4VfT2KDpMXwMNYWAAHS2yZqYkVyKKxvHvgWN81XkX",
  "key24": "43DeWoNbkFSPo6YnMUs46u2qgQfbYUFvWLedEa729DYH86LunRYKSQHRwWeHzFhaBguvLP8x4yGm4e14xeLdiY4n",
  "key25": "5EcFPCn2LaXeCJXBoNMye7MLFLJq88TNDUZVRKmhuUCLM9kq2ddLo7QjLSN9qJ9aeSKswLp4G2TcDBofdYajrQG7",
  "key26": "5sXcA2XRm5uAq4gGH7EyXxSV8EEBRc4SenvAumNpWQntEWWjeHBpS8JhQcCfUiZ6e8VCKErZRcihHETzHLSiCCFw",
  "key27": "22vnaSzJSnoNAAve2eu3EwEAo56DDkUTjoRJf1yfqZzDpTkM1vYvqEogMng5AM4n4YCcxuXA3ppoZAfapXvuNkCs",
  "key28": "5LEaTFRRWuKqu6doJFKpH28XWyjB8grH8g2JVVEfRhAysGwzenq3MKezLV8jgLq2CqtjTx9g5VR4bm1jp2HFaWPG",
  "key29": "jka7VA6ZvSUtYitSBhGTqfQiz2zKxWX9gKiCucTm88H9nb6BuhQdvTEeS3JHNVoMg1zFd7kwVacRC1DUqW4zz5E",
  "key30": "7WW48EerdDp1hpQTZFR5qxNmGg8BX5ZpEuBfrraBX3Y8JBR2BNp85RVcV62XUwEC9GqUh4Bxbq5QnbkXPjouma2",
  "key31": "5hudgEpXHBUjixf3fYPTULuKiMe9wmzxswZxRdFKNGLimSnu7bHbAEpHrCDBK3RnfeMsSJDQBjNpD7A64dKxUHV9",
  "key32": "5nsixa4WkyDaxTYvkbDVQNMnrgE9YGnYFUTen58ujgtadE8wCq8DMuPCYcoXGEtPySBefys9SCCY22pjEUEr72L",
  "key33": "3eHL5M1Hd3R1b8GBnsLTQ6pFAh9hQGmqioXBH1iNH7YX7pnKpuGjV5N6tLzvbR2cbcDAM7Z9DfDc7GfUWxC5z8Dt",
  "key34": "122v7bP1dgGK3sk3585Xqfv4zURCUgRUE54CFoTUKLdDxU4aaYjthULhMDiLTVyc8yuEtfCXMEkbxJheuW37kzrH",
  "key35": "3AK8zmbNx8FgpWH8L6nhfaHEgKhV6KEoiC2NAuuiwxinsSJqg7vrwcbPAVCcs8aXJkxXuQDqdCjzYuvzRsXTQrLy",
  "key36": "TUe1f2FctmatTHWaSty1gBh4vPYajuWbCKuxzx6ErAH3r5ahoBwFHBxWALaqzasw12uf3RLzhhpjbAXH8QFihRf",
  "key37": "2cR34a8xGvPz91WKEphrJoa7uczcgkda8bvj8JfDfau3G5ee6dw97hVxDA94brgA6pprJcaHcd1hMTquMLu4Yz9X",
  "key38": "2QG7ezu8ZAT3XkNpJVmRuPaHX9sdVZsDNVeGhzpPZzB3JFH1ZKZ6JjkomcgUeEbj8FQuWQLxv1XqR2nEebH4vuSx",
  "key39": "4jq6ouwK3b8U8tMu8zGUHuex4ZYpNuy8kRcSdmwojMZeEULkcckEgaBYG8tKkyEf8L13hShdJvia1fGo6h5v7Hr9",
  "key40": "3xLWeJPUJeW7WEXUkZHwqBxak7mxuLXpRfdZnQBb1tHksYMYpnewdXHKb5dNri5z1m1Nmr98xo31o7mHtGMRqFnv",
  "key41": "4aeZpBwLvJHeuYWbcZuT6nzcssAqQNPNjn1Pke27E5YQB3ZSQeMyiX7BGiSidqtYdazKvES6eFs2vTtga55i5h2t",
  "key42": "2GrVARko3Ek3LtBoLtaErkkgpMniD5X9GPJUUSzM9Cvxfia5d1ZWXp4CMkVHS53gJ7RmvuLPdwEr1MEdc7ermCY7",
  "key43": "2i8fm7CnDVb2Mya734DPxfqrJPa9qZ9tPSeaj2qWup6sKhe6i5Kj27R4pD4rkJmujdttZgkJhgQVNH33tuX6Jx6D",
  "key44": "4BGSTnWA4SUSc353LbeMbfpyQd9mVsFTuQqYTrcjWnR1aKQCghfFH3Ti5evRzEYbBjBWP3wnQ5gbp55jE1am3nuq",
  "key45": "4VtQeGp31fe5DtzxsGkJZ6TM3NzrswA3WeXmyPNEV9fAA615w7XsSw7QNjtMuiReJuGGPcN1zLcAkNAgrF7BWgYd",
  "key46": "5wCoUhDgyeS3DPuBF8g5vUnk6325zgMAwA2HTftNv9ajgf7C1WcYphtvmEDQxZm5STdjcJxmWCPYda1yvyKkN9VM"
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
