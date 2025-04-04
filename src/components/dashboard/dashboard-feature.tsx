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
    "UzMPckE5PXBfySu3VXV1VykLT9yMRS6poRZLRfK7wU2RvUdmS8vmPYkYwEi92BmJ5t3CvTtjFm8Dsv3bjeGGtwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdtK12hYbTBWaE6GJ4e4JpNkN8dKLaWL9QCKngDwyjvKJeL9uJmxKps2SCdTmWLZHwhhSPkLJovf8YNMLcqbi3J",
  "key1": "2xVLsSnfSaJ9i7fC5xBmdJfEkdH1ixMEGAEJZWkc9JqtXHnrFc6wUkQUDinq4FxwTSyojRCtpKV5ug9e5bzzLxNf",
  "key2": "5ACyRMKK4bVGr6XBFvhi8cPedB4Etdfjgbw5CUkMTyAv1tfs4KGoJNnQqZypkiSrwYda9S4ZM2a7ZTDTbz1Zzza5",
  "key3": "3zrRgKLC5s8KSw9u1iZtaMDyCtUxv1whTxqie4tteTLRfBiPprsBtT9EeQkiwPUS2DuRqpHg7GBZrN4AELpekWme",
  "key4": "3N7L65TNzYZ8BCM5j4asHtHMh2RqW9ZmaTQHAuXKbmwL4QMu9CBE8F2aR6WPjGRguRHAwH7FNhHADS9H8tV3hsBa",
  "key5": "5c9NLB37y1MqAgHWQqo6UXPysngbmVjRE8XUsPuiCsKC9MgQng9BmZz422oo6oJRBwaa8rXCdbXX5S5MXym2tuvZ",
  "key6": "58jbHT6uWcKHTVdWKZwCLCnGrRrXd5XQpDtpzYcqvGzUWEyY1J678u9mViMmoXUguwuRxjsDUjr8Mkc2Q4V3ZVbR",
  "key7": "5PGEQQU4mrUUvF7H4s5nr8eQYVCfuDJZXFindeLXLq63z1kCmdY6U275Gc4jWmAy4y5ZWkQtJ7Ngd6KqBDZfJ3ya",
  "key8": "3WRycevS5vMKCjsxugo7cn7TqpXij6tNQ1GSNi1AGPDeHpVc91dDiPTpeQ4mSnQSwXVxCocuGEXmukK4qmR9qd5U",
  "key9": "2Mppx3wWdzYUaiiy1foR5ZUysKGLMsqyfjA8bSzCiHEC64jvqEpsv83TZR2k2XkXuJp2s84cYykShMioB5X969ux",
  "key10": "4eQdTm1wfrjskdcWK8HR5jQq7Rkt2c5FASWhxetASWWqZQNxcKCnv38cq8wp9TyfLicsVkrgf7Xr2zLVPBR9viJ",
  "key11": "3bz2DLVCsRX5nG32LeiQsaTV9ia5cWmxFyUCdzzbmxiESQjAXEKpBf7cSsdhSkwgBvP8YPHdDqLwCE6xmqLQVFoZ",
  "key12": "5qGPRHtaxWTfRM1z1qUVcVMj8LKzY2gG6UdujY3QjzLd2JyNeTLz9U8rL1bx615miDiX8k62Gg5zdbCq1vyPcM6h",
  "key13": "2a1r1w8zfj1Ve7pieRscEd8TJMdWpvLGW3UtVMXHX8voMcw6R4dvf4uhwEx1JsaLVLu25THXjBeUcN8KCprGdpdF",
  "key14": "2Eu2j6uCQt1xg2NtcVX3Q4RcLinqh7L6YDdvfNECnMxfRMdwBHtPs65GZf94qbQfDXguWmvhGcGikcgQMCE3z316",
  "key15": "pPXvGwi7FW8ERx9Dmpkbq5E19bLVCtnRsSetvnpQncF4yjveS1HedET3AjB9rBbf8RjH1KBpH47g1Etk448iJou",
  "key16": "2WojhEkbCsmW5wr9HXJwZonniDjhjhyJZEMs5WWUbLo7ETR3DbTD3PMixd1q3ezMcv4M1YwcdmjqV1YSKWP8RSu",
  "key17": "5YKf4a4jnbczjpLP23cUiHmSi53tu4wko3pgpPB2Fkh7VC4NyRAzHp7DGvp6sg9BrkhoXroSQwzw5dNjfpwsiogi",
  "key18": "4q9DnxGt9BLgWePENpbnQ17CN3NVoWy35Yk9Nqh2ZvcWwYGYTq1jk51mLduDKXAr9o2byQskP5RTptcweYW7RQjz",
  "key19": "4Rtpmd69dHnxus4Ro9WhpvCLhN9C2baYNf5RCcRd2eCmmaoyUQVGdozFE5BiNkp422FqxmszAtXqpF9DNhzyhFLN",
  "key20": "2ugq5ZnVKiGBfbhsCE8Jvjam658kLXZyHwfS5E9ECga1kev61twN85FmhJAFXF7X85TpWER9muV9w7VJCU6F48Wi",
  "key21": "3tzxsK55k7igo65R5XfzsgCwJR7csqDi6SeoYGaR7VdiUhWtHwgwDKxpex7u3DAXn1TKumZpTPrD9DS4cmibu3KX",
  "key22": "5NpxWeYGSJiBEYnvEAJHh5hazgLjWhaVC8DKbK2XtEMzCndVdG4VworaTt2YnpK9BGzDBBxDnFy2t1XhfstB1sxg",
  "key23": "4KzkvBNG2rrhEUJ5LvBBZKu3YgF2JHF7nCZf71NXiUEp18PsX5jgi8GK6SXSqAm95gsDSgxrEw1hPDpZSXGwWNhs",
  "key24": "4nvF5XS7DpgSZBpvZAXkSNtW1ikiNxPWX35KABpEz3YpcFgZqzdCgK1DR8emr5ctYSaYem6grxVkxoXDeVt3SPkN",
  "key25": "2hKNn33nKPbLDJG1zABoJg4314goJURswMB12T4MnWGCdNzH8BNxxJpJyzbmqasJNPph5rPVvZKL7akQYc9vWmKu",
  "key26": "38u16WXmPmH2Myj7VUbvVor8cM9mVsJvQxNrhyheNronf2T1E1RzzzQufAMEfo6vuNwRXLbLpPgrvkcL35jw3SYA",
  "key27": "3YFDxoCT2JV3mnPcScuHGdD6yh4GWubH5t6v3pZdirDHyLMkXYMEbBHHQRRvULNHf7VuRHvVioj2Xkj2YwdYxNwY",
  "key28": "28FKniiR8axKVvxTU6q9iMeyedEYMBzXhRh3PzRF8DWF6QHjs1uuPuxecjo9q1whK8JXpnfsScCSEM6tLDxNyFq9",
  "key29": "2nkGbiNjggu4EUQgNedCxN3axhYVL4xZ1hnBLsfocVJfg93n3HuwpJTmisKBEjy3HYhRVKpanKSjsRSnAUP8hDL8",
  "key30": "392MyUs55seEV2co8uAu5JsGKk9A3YmvKbAfPaaVabiHL8W2oYJA8PbwuakoaxtxbLEqqTuEDEMed9YRHyY4TpJs",
  "key31": "23yBpLSTjc1SDgpNWuM1YR6uxyfNc6zpRXfskSLXex9zmJdFsRNa9kqcKAKiMMmXufTirzJzaeezByAtEhjQgA8M",
  "key32": "4sigT7PiRf7rq8RXzJvqdg7YaDo6nrH6YzTkFrMJukS3AdbrL4QC1DGWo9WJyEraGXiN29F2G1Kffc9oc6JpFCZV",
  "key33": "36LjQSBqrPHAx5d1qfovZxCQfNy5v67rue54fzhMQYt86zvFQvKvDt9iS4YkMJuf3qMQ4jSRWUavXCBJneoVmtUy",
  "key34": "2sohMcMskqPksKhhx7dt4aStazMmBii2TAJXXTbaqxrwhVtzxnugVeFD2zqKHFvgC3XiRCYaAsDto4VyjQmYMunW",
  "key35": "5wrdmtiuhpREPeLfJWbir2zE3aBs797Re2NuBkJZfzCGjpDMLg5BP3RDf1bNWbRTdoCr5kgspgdU1wjj7ww3VtYE",
  "key36": "3UEzeoTPX1VooWJKDcTEoo64shYyiELN2LgK1gwnAoPrdiAgqeDTPWF82cV61UnkQzGD6pHLkmsqwDnHCetVYCvE",
  "key37": "37kDFxSk72gYgYEcXgUgcQxZGPyh1nfswnLB5msCX7X94o3uV2ZHJiGTjCcuYK2vUsiFCMc54Bq6GYrXxHieU1tX",
  "key38": "3XDc4nSB18DVHq1byykHDtdac188MCjANQ7oKVtiXPUtS2VYdpS5kAemb7uJXWu61S8PGvRcXS6LjwJEbtsYirLj",
  "key39": "2yHp9TBEfe4RNC4SmH5K5D2fYg9a4Soqo9RzuNRPtqUYRnbAeDSNkPFJAnAKJ3qWtD5PL8ULeKaBiHihWXLtCcuV",
  "key40": "32BNHKqxxWFk4CECacRiQYoKkwHVp8JPc6F1pTycjW5UJFSDLDB6zdGFaFmE1UTSHFeNRUgynnMEWzL5Ar8z73rK",
  "key41": "3NQXkiNbvi6Q3UfNekXr5eU93vSMpuxzYAhGvjcsEMxRTRH8WiTegSyiyGwXLqejBiCTU6qqviA2CQHWYxfJ26rq",
  "key42": "2anfTB1oZX45KyX5YAFP5fDpCMpMymP1UChk3cXJNi28dyhxfyC4sQdgvZgbztv5tWkqZk68ZgJvEpJ7jHq4GWrD",
  "key43": "2f9GyNzPXZdqN69HVmW5x2cJFPNsCbfveb5nduR1veFBSFVZ8srYmFYF4EixEQDiHAA5eJR9ZUENar6nbDW2iaqw",
  "key44": "4i7Rhwpe2wn3cXpGiURR1nDvtgEvLrQUdy99LbrYRx1i1p8BPmTC2EVrszMjh5Wx7QUibn1VyhEbDWVp5EKLqxhp",
  "key45": "3jonsS8jgDWKxeVYW8GCeNUNA9Uw1GstjzxA4tAwobp1xKBNm9kShpJUaRz5ntNyUpCHNRwA3uiJwHtFKHmduqu2",
  "key46": "5ZTssS2v7bUV2UECGuAmjoaUuGNmNxbNcjijWGo13dQGUX1pUNBbDfvAqbaa6dniVDFrq8ndiwtbxquMyhdkzVR8"
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
