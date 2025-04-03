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
    "2wm6K92qiwdf3dv5JteX547hyGb3ntbTQCnQrPgQZW8MX8WKFxg2X3SbUmjmKzzMETH2xB18mzbhww2XpkP8pTLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aaRJVSgujAJL8T8yLR8eMqMoanD7LvFM1oSPMaP1vDxgt6xXhMSSQdRkYZTR5THsvn5GSLu19Ya5qboZBvvznBW",
  "key1": "2n8WYCnk3x9FiiHSLuKAgQ9dHfTqSdg7Mg8Gnmf2WnEAU4RbY6WRGH5UmLNipX44mB7sgH5Y2nJfn327o6jnXxjP",
  "key2": "4oE1jXoWULeFWwBNerTQHr7whGSzjbHsLqnu26YEekYyZEyqQRYVR1HLe5wB7Ks89YTTer8AVmbNFU1uGQdG2HTB",
  "key3": "2uyH3EABBpRYiq4VRNV6vmE9gUH7qmWtQzzW4moobLaAzQyYJxk3c2QmL3FUSGQLKNn87wo8exsZHVS2d912Qv8N",
  "key4": "5yCRf4MHB3HrFPjrkXFCsQ8eoNqBrQ6n9TietYfvPPmrivdnZuEXNJL47hNxJzNisJXLgHikVJrNTFwmK2JgptZQ",
  "key5": "8UReiJ75YJhU41uCmKdgabQ3JjR9VQSRY2ziyhaXNcRvKDGPPL8dJyFyCkVpM5CHJofJi2JYGpRZpxfGUUaWZg2",
  "key6": "hgqTcsbh1GT93LMKP9HWbTtE2LfT7LshRuYT8VEwGiH2Re8UQw5dVQFTqrgZEkMVdUHFFtFs1NnixX3hsSPWvzi",
  "key7": "4b3KdNEMdQHQSuuB9cg2m74MPZKSj3qi58SXA678v9L5dNa9Fe9qHKF1p1MMHm1Aw8XyYQUHYdspTUegYUT62nj5",
  "key8": "25BGKaYD2tkDvdfFBsik7LekHHEtNfPJg8UPQwt5vGF72oV9fdNQCPkHtJejguYfnAKaMDabpMgWFFk73tBzUwDW",
  "key9": "2QgT3HidXbdvBwcKWDwk3SM1EbLVEk5B4HX1k58KKyBdHrBc7ADUwJzwZrC9KKgFUrPQ9GyZn86RyM1SNEkP4XB2",
  "key10": "42ZUBi3FA7Urfr3inzqGFSzDPeHhm1LMmEnXHVuXFqKf4PsgLKfknjsteFkdiJudQTkRFtakBoUNwAiS3cRBf2wm",
  "key11": "NmBAjPvEyYaEvCSXa3a6WQNr3dJzRjtPaFpDemKtAdm4RLa3fXh6MChLrDCrsk7FRfV5Xz1qFafTxvELzwb9amx",
  "key12": "3jj9ncG2JQ8KesmGc5vDsoJuVVsmnQ8Du6Fk2RHVdC5EwswhdqPVXzjQ9qk7UABBio1pZA9PiPq2CtuERUM5hQrd",
  "key13": "pgCKu1pqXL7LNPrdQZCyV295YZ4RUDJeNFroJ2E9h9mcAP4366STJeAkux2gQZPPJW1C1ipEZFHf36Aivw5UcUs",
  "key14": "2ShQZU4YbyqS4aPBcLuxnbabjERqcat181N6zP7rmAdcYVCDDaeWfwKvrHeo9wbVN98pM4i77hdyWn3cfd2JsHnW",
  "key15": "5kHbLEyTxNB8xh9RkDmhRJTDT8yhga5eJ4Jz6RwtJbYmhKvGV9E4eNYugWXotSpdhHrpmc8TPDZFQmiAht1bQgAc",
  "key16": "43SEULNGaN8Qy7CzhAPUKKcPHh6bYvzYrBccQYtLkmxZ28cYewXTteAvYrZWkcN9cxeu9RzCst3oVt6BNhQnutBp",
  "key17": "5tStwaxgDpnLv93YcwdWTHMraMopQmMvuGDmYmYkpFMob3guYpjyasQMkqTzp5xCCJWCQYJAw7ikhfcF1BaVSbrq",
  "key18": "G9xU5CPjy13b7SRCtb1HupgHKQXXCUUTXw2HMUEV1n688g3AYPLEjBnvjjP4LjZeBUfTQdp9HqEZBksPSEJextu",
  "key19": "4r2MyVT882E94jP2gcwuAanQ77sJLzz1npGxuiFdRGqAJJ3uCCxHBBDLE2gEV7SsurcmvzXSTJhMDN7cRviNyZ66",
  "key20": "3kDXkncew8FFNtasoQARttNc16RDzmKoSmPJprUxpBz3wFwssucsByxUXHqmGJgS7ryG3Voz8gPcnL8eMeuSScMg",
  "key21": "4AX2PPPxYg8fd1AQSTGpRuF8meEibSHVXEMvwWw3qCYbXKv5hkSBaV3ovDyZ7QMfMFYLWgWYotgPxGvV5PLMmQpi",
  "key22": "488ZzvgnMr9GQ8WrxvA5VJWKE7WAjHx87sv733m3sDqhFZTd1TYuqCfFidXve5StWYfjzpQJHdKLujjb7qqjBd7c",
  "key23": "pA3wLKY19zPt2P7jEBsnvfWnx9z8a1TQ4gT6ykqMyuKWVaMamSKk7YgDsd79U4CtPNLpt9HouvVKb8NaCJgGxx1",
  "key24": "4YaeHbTp8yWc9muEjPvS1GPstV6NU1e3KGxmM97a6ja8N2xpgeg4tgqsf1ByVPr1FohYu2i7nFDjG1Qc1mmLL3WH",
  "key25": "2HYaSUEZNmJZ5SnJspUx51rsXSeckxWPUqrcEhhFBLBQCy6LynjuzCPckoaz42c8hSUCnb5EH8zBi4busAqwJrqK",
  "key26": "2jqf7zQFikZGZEPmvBbFrcCYRP7F4SmnAf6TKPtq9yePbEBmaBz4mgguJM2FE2BNXp9448XizhWE52qbZJpXvENY",
  "key27": "3uhLEFpSjMtMUrPWXgBY7qUpAC1vB3TrPDbDtjHCXberASs8X8wgYdmtEaMQRACCWe2zX3hPUMajNfPXmgknqUeE",
  "key28": "3TE5dix4dR7mhsbu9YxgGU93B728azmxXTFtouq3fy4sDhZ7wHdag3cfjWRTbfPEQMhgcsUBRdsyLJ4FAWkUyQcf",
  "key29": "XD2yKYDgXzmbshpE4B1Fo8WD4Ggv8mF99YBDZxjhLsPCHp2Dbn64amf6m5HkWL2jePS4NQkqLj1SekWro4LGg61",
  "key30": "459ASEGTyJ7YC5i34x7ZbK7ZmfXWW8gB91pvC67uEK2WPUsfWkvDntMwZonqBB8Hv7wKteKB6u8iQAz5FvXEV3z7",
  "key31": "4t1UgNYUbykqPpwyQKRB22n2dLSjpVEaT7fdRL23SVf3zRNqrDM3w1W39wdSH8tjs6f8Sxtbbq5KEUW1wcQnG8QE",
  "key32": "66ccc9bfHm5aGgLBfrJvPToEwDxDzrewQ7oWbq1WuNwHoAsPEgGrok4fHgzMFzqAQgvHGC4vkmNVnuLbaTdepqNx"
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
