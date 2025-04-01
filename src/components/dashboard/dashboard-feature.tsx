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
    "4apLCqhaC3mHbN8GQYXvwMPJKncJuoFHWN8wrgvWuw2viCPRDx3YeQAU146TLinGsD19c6h9H1VbcAzFJoqSAews"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iimmB7WaBW8vP5qBvqwyy8yP2KBx5ojEu1oSyh1Y9xE8TLEEWTvNeYcLxjvjaojsjwupeXRhUt2MgrBsVRYBxDF",
  "key1": "343kMnbtXKJsdR4UTmMPDdyZRpp1rUBYec6CsNmJDUsUiVippg28o8qgJqz8otp6msCGGkyXbWEBN5fLTQRYovcA",
  "key2": "NzPxzNpDNLJQUoskimE4VVPqTSrZqfVDWuLcdWAMNsuSY9F3zpHLXxdFHvX7C7BYa2L2B1bk56Da9JtvSZLvZnt",
  "key3": "4mCJ3viu83JrssUsVc2EpJeSxReuwZFbyXgj8u9fQSBfrnCktdTL63Wu34Z9Mks1euqQouFBFWNFiCp8PjuW1bKN",
  "key4": "41p1afCmeb3N5vUPHhv63Ah5iA4Qg9Mmc1T2s6rkyiC2Jst1h4tCacA3Mufk2jd6eFjtbzm19DVjRZF9KeYH9uMK",
  "key5": "W6FpiXopcQEugEmagDbtx7TSD3RQKtsYkDNTnAPqLwvDoq3e8KA1F4GmuE1MaCfxktJE7g4Jq5qmbwvqMVuFiXK",
  "key6": "4F24zvswfrXzSEefStvCrSnYkVf9VYqf3QiojFUPGrVtVdGRGtfBXqkuJGY4KuNCR4nwy7912ZyWwMjcNyijBHG7",
  "key7": "3EW2n6tBkZJ8TzYvZnbt526HY2jbcJ2QvFeJ2Jk2Br8K6DVjjvu4wKweByt2XyqAipBD4qGkuLVxAe6xk83ZZPR5",
  "key8": "ru4VEERUrdaFFry888J6MkE2SxBdgfPDrq4Fgf8gzNNbMkaFUQqxnWtASc5PawRU4DaJNVfwWcpxKWvVqRWKs1D",
  "key9": "9E2rWavShmeUECSMse5zPtJtsAqb3n4qTxoyBtidWrEBjKzhFDGECeLQvpNTxq5Uc98u3YvTwGtuPjZA7ZDKk27",
  "key10": "3ETacHETSvS6rQY5yDiJNK2JH8UKvJ3ymwdHxvT1reT9TSSeFjVmL5F1S4ffuKvf5kCPb7DaJz8HdWY5VFSjApE7",
  "key11": "4mhN4GrjA1QcVqb8RzpedZcHzebNCmhcoyUQQnwB5x6LzFXVWzkTADUdkzGS2PyfDvT6GAdojgThL7SeNwPYwvkL",
  "key12": "84FFAWUEy6QE8ryRPE26uFWKdr9TTfxXh3EiyLKS4qxSNpXqUSWXhP1qMAogZbcFunETGGtuN2dpmxkYag8YhFh",
  "key13": "tGXqGcKS8qDSEhBrvFN3FDjaHwjjgHf5eJXny1rnHanNmJGK8ndA6XPc3Eh1R23yoCyysd3A5TDGVN2ZTyXQ33j",
  "key14": "2WYaynzjZNxo3dpjNNeKzQXgp9NFgJZ2tQcePQzYewd1BzHktTQLbPGs5ku7eDFYJUyGBG3fDF2RCt93gUruPvkb",
  "key15": "59YtqmwG9XtpHxyi2uKXwTQgHe2gaW993YacKToQCaks9G3Z92SScJzSo35MaAsQ99eQ6EfgC2VS3eqte1iH991d",
  "key16": "3BnbFD9HrvE9Cds9RdkPGBPXhyqQhkmDmZxUTDjkAnzDk4Qud3BXVPFn1FKrrWrM97kaZMnAmJ99mVgzdh8JBT9o",
  "key17": "4EXhd1okjYhEu64xSSLLkWed1JFcyQ1Q2EJJmzmAt9qedcEvGN296CdZW8BX8VXEbLX7KLinwCdaeAKzCKZkRMbt",
  "key18": "31bzJpXKEhhmCcXxf5aaiKFWpYSwTzDyJBrgmDrYdbuqGx82bmsdUyTGxvG96GSUonVjsHSS8BDC7G64gFV24nDi",
  "key19": "4tKhFJmQ9KcN8bWENXJz5it5m7j5SyXQKt9b2E8tc7ayau6ff47mHufeb3ZtSTK9bh4naQHJFcRBNLjKvoZs9aMP",
  "key20": "hiwKZCw4qokKjvGqLKm2HA1RwVWjMDGDkTzSFEtxM9HpKzDy9ktdbeoCysyNw7NmXugZ5XgZ78VWysCtbwaJwFd",
  "key21": "4er3qx5q7pCQVMZT4xM9ECf4JrnZsYccrn4fmTVvtnoNeZDjpR78VGiXAynHaW5m7EHtzjfHYKALHLSHuK4gBrBB",
  "key22": "4NWe8CbjjmWGqbFF6CSnPbgKbMKf8cQbGWXzey8pRU6PoGSvZ29nXWzA6EnpBPMYohNBGa6bd6HHnKPEGdix8m4u",
  "key23": "4RWp2VtGNVnnYwtEevkUDqVVRPHJpCB9MjxNopQPRxuMPafLj6kbiCjGecbjNQnmtWi2ijKBJ6tk8owFbfsmBhiT",
  "key24": "2QM2y7gunbX7FuJ29jC4jn5adYcduasTfn9nUoifN3CBRw6bWy8hsDLFT7DuK9haNh5dr6L6u4R389juj4wsuVoq",
  "key25": "3XMQf5cNoN1wNo3hvBZR8mkcf4saXzrTpYHtGeZ5ZkE6Fwuc9JFsxLGc9gYDBmVeRwhYoLTaQd2X4xvMdq1kCeyo",
  "key26": "2p1jg4NX2pcPBuyomLGHpLLD9ghVg5Byh5SqW9V2fmw8Zfzdg74sDNbW6epD4JEvW1zsEzJfbE3fH3Vi7jZTka8W",
  "key27": "32hE2kSSrrrXiLujAbJDKfriP5weAzT5nk5YGAjtQT2a7Axd3iz6YVzx7CbU9XkwjkamXsBQvP4ufxEWpmsSuykJ",
  "key28": "3KEbVzerBwxefgcM4hBUx4wK75Y1cQMhebsfm5RTHgXWDx6gUSfsjxoNuLoJKb1vZVC18QwdXWXmkajGc7ttFMqT",
  "key29": "58ym3mQs94pVhtpc3wwWmCtf3hC2Wqoxsqf1LiNAdMBrgTgHMfWVmT9prKbsXUGF7XhFsmsin5iFM7AQNWV4Vqny",
  "key30": "4kATgcUquSoS6UBjtye7PhKXTJtTstTALNgBAEtiv1qTMuUqv3uiwjckyuT9XP9jUMjD5jGPoZfPg11oGb1LvxMj",
  "key31": "5sC4WjmK57n6xjyu7mgA3jNB43d4Tu39yEDJMs4CdYyXQTLpDtRFoCp1KHCRi2oVuJ7uNdmjjkY5Pf9KC2sv7tQz",
  "key32": "3zjfYnCkqXpwqAheJC2zC9Haj9jaSvs6UDAeYikabDj2eNX81qZZEi3EE9QBESmDDZu2dNoCYMXVnxaHMUqFhw5Z",
  "key33": "3Db5JsWWGfqFcdsiGNnST4AiNE7WgUSPvwo9t82E2q74ST5ERWz54KiEuJUuvahT6D1n4t6uGVhsYJWi34jYcLDn",
  "key34": "58J7nZd2zVYJPYWcnN73zsvEUAAeEEpLG2ZVf8tRSWd8iNPLjsfVydjLWi62YQ7ug7zS4ET54t2AfAiPWQ1F6ztf",
  "key35": "34ddhsXk7jkjAi4sZ2uLWy6ueX3N3om1TXigU5idF3vrPSHjWSLTY1u7jX2JCkCEsCJjeupueQnCxsxRsdpgk6w7",
  "key36": "2MJMXjabDq6fchaGdsvF8rdKftpaSuE3nvSSSHd1rNdNGESE7vPkJuMve9AfTYBC5BguLuoQL4fveUHj7h1tCzLM",
  "key37": "cDXSKWuHq6LjZJnaw97AgRPjZsGDe5kQJ5ZoLxyBT2KpFQ4cLJzGUHNkRsbFHkhE9wj8n4D7T2t25JQ2sxwVaq4",
  "key38": "q1G9MzAmU6gehU481Mfzerdd9tqxkMyhBZFGaGQF3Qe9V6hkbe3XyomTVpydEur77eVkf6QDoL6noywM662nugm",
  "key39": "4mfmjfvYuxnTtvJ5dBvmNwXaReJ2fsb1udGGDv2qmxab9h1rvSeoGAqLGYHaCvN2wGNM1BZjSXwJaKfWaGQieo6v",
  "key40": "5rB3KKXxZHKBPgim4ivGnxDTwjFqmscHhZtiAE7pdnUiic4XyJtPigBrhQVDN3kZa97NX8p1NmqBYJR8bYG5mp3d"
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
