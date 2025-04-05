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
    "32VowdATSNrCghUQU8MsKFycfmzV2jgzYtFB8UDiEFJxYqyyTWVpcp2eg7YjKsh7xBHfRpiELnTWPBceVChopaZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RGKginmZJJEHhWXzLx5SuiFWaMhKsta5NLu31BfUoF5equpSX78JKCCtsFbWNgqFiFrqLidNJKjtPq1TRDWAUjU",
  "key1": "4TvHxqwpfPZyVqKC18PCYy2WNygkP4fUHi44Z4Cw2JVSLrfvrhDLECFBF2ES12QnSL26D2tagxp8cPc4L3AX2W28",
  "key2": "cTMyaz8owsJqVAB7Wm1VYCiukaFeYJAyW98PD62uakfmdfKxs9UXLPLjGkgWvTsE2BTnF8Nnat5xMMA5HszG2ym",
  "key3": "4LyHisV6g34A9z2oSL21jWkNi2uNauGDRFyfg8GfazZZDS457s1ij25ett6ExqHbsiEUtwYHCY1DfybrinpaoRQ7",
  "key4": "49noUvfjvGqEnXRzWQWui4NJ1Dmitc58YtZ4EHijE5d9DDBRrLRK1PTwhN2wHyYmj2Xgvsd6yZ5uxrU2g8hAs6Xg",
  "key5": "b2Q1YWMm5ioqXV6VUc2R9ME69hpmCcPCGCz1DQsj8TPWriW4NwveMNDgLdRZMg7J2JkJVHv9srwSMN73fxiVKhT",
  "key6": "2fJfFmNTXRguHvDr6HHDdAzBSmFA8UoifWvUkXuYHtKcAVzdeuRxmRhdUAh6NHRFqVMdZmSpK2HAi6FMXLTx52s7",
  "key7": "2rAh1fKhq1PDVNJKHunktcLFfBf4PUs5AohAGvQfaZ9DJz2WxGok6ogDMU66wz29hNjthrAkyKRiRFUXaGEWPNw4",
  "key8": "ZXxv3trPVH48JUmMwCYps6KjSWYvYUT8U8suKbtNfncFwuqooGfhVsgvpsaWSqNjVauZAigkKRekv6amVEfSZDU",
  "key9": "13CH15Gqa6WugjCw3xsp7WnpG53MXVnuFrVZ2qTQ1qg8dwModo7wPSwjhf26vCzk8QDQA4Wext8r8dsgdmaE2zE",
  "key10": "4MPZK7FXDtVqj4mDPcTebsoGLAZMNUEeCuWn7DditMHTzu8aodQa3CtYhyyagojaFV2oEzBw4jzRy7w5WjAQKCU8",
  "key11": "2PmZdJFjCk2XNqqBu8FU2A6AoLq5chpPK6HHi9TqRpLZRv4jkSnzmzDnUis3ddPWNaN42xriQgva2QgSURfdg1wZ",
  "key12": "4EVn5mrA7EHe9vyoJAueyw4w8j1wnJvLYhSJQhLEUxC3pS2sa6LdF9tpoRDod543dsmbwMBvmNh42qRRVuhkpH1P",
  "key13": "4RE1kzATumJXxcZ91J79e886DFrVQhs1mYqAxXThAHakXboxrwLUnMiP6LCNgD8gZeEHuvnEkWtvx9SiGDtBr2CG",
  "key14": "5VMPR9RpycGTjsjVXX4BY6ZzBvYMk1tUVqUy4NNBYYYKgHirwKTTdpbfc6TiVbqqbK8Gp9YYAgd7V5L29Zdm5ztg",
  "key15": "2jixqQJFbFFdWTrVQ833eHBm2rWbqVfq1NhmRAytwfdgQWjtVHcXREU66Zi2qsRFriYUibuZUV4Pqg9C3ZghLDRk",
  "key16": "9yWUt8PJBj5QQY9aYYDYrR4nkmirFt5ANaxsGUh8jXr5pzzJurSTBVhvbY7W8b1QRkqvy3VxuWo13ms923GApJE",
  "key17": "2hHqtRyEQLDMUxCKd2s69GFGjDfZ5SsXSHaGbm8pgHAnBYWHwtTFR2BnYb2QrWQUNjJMuJfsfgJjsRf5HzA5u1ag",
  "key18": "36qocSFRSFwBHZpitzkQMBLyEo9no6bQmveGUV7Q22fvnWhBApQ6w7CHbvwDL58RUUx5z4FN45Z78gsgNtYStcB5",
  "key19": "3vTxr4gsuCfomPSa6hxJUFRjStcHLucZpxHwDfTdjgdvsumYHG2T3U3wPtJbUGwj4VgaECRqg3VX3qoM6pXvjutb",
  "key20": "3ZosFtuUcgcfAjwqd9Dkma21KzECytmjQWhcP838ikdArMkH3zdJvNQ5JxdMStVJVxLMbJYDVusCfmjm9zo14vFx",
  "key21": "t59iv21AmRZuTy2jRrj3hEuAT62rG3Gzi9R4eYxJnuuCy9Uxo8XP6i9CdvhPWcaM9Zu3p4VAYiq7EGKzwggCkLS",
  "key22": "5W2gUdwjndp74FWfGvVgdi23ZexS54C6hSce7m8PGxLbgU4ibKor3Zbi4bsGDwxGTcHy3v9Q1X1ypo4tW8HUG33B",
  "key23": "2CCNMNgydUKDSyMmJivdM9Ej5kcTNwhFhhT86FotQFieb4XhrgPXRnTVuyHrNYKBn7VaRpbPBZdFmgP2Nxdi2XiH",
  "key24": "2G5crstoTuhaRoqx3zzWkcseRJFSBUQKZJJ2ZpK3shPJSwHHS14MGu1fpqenYqmvd6cNABTmxSBKA9ZS39dWUNhr",
  "key25": "52XwjbyCAnnyuybWXt7UucB6Fr3CCq6nqBvAUoVUSJe7tN6FxnQ8PfmAXzQbCcDTxLi63AddxE4nHnmTppjqHaUa"
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
