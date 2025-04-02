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
    "4iuq6LZ3cU3jFrznDdTjpib5uqcaJHYghPcmN9dBQrvL16R5hHEmw2TiF3JX579saBh3vfxDJiskyfnC4mRjqGC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zkWHeU7H7oFgeppqFprvDwARYwA3chpta5a33K75CsjjVGYtpZYTzmk9MVbQHe8Eq4fqpFSyVRg9tSJzj6EuoZx",
  "key1": "2fUwxTWB6Vk2WJzzKvJk8dUfYVUXoZkiDiqkZYfEUWZvgAstZzhPmCdUy6jg4mF5N6cF1jqAyJquQH82hixYP4MN",
  "key2": "2RCE14r6jtfiGKahmMwN8LeoGdVqBjJpRqpmZabMp69r5tC7AhiiWptLmeHRoa4578BDbUHVzoMW6QcpbRcguUoP",
  "key3": "2Mov5cpCXBEaBAyWxrDUqXJBrdmaCCFVFi5ZGap3k6sZKc6vJdwXMgRQLqDcwrBD3NCT4PMqQizjPch9CTBM8Avi",
  "key4": "3Mws28a97hZRRWvveqFp6xDUzh6BmdN2AFYBoXWx3LbYNDDzpcCS8K2GzZRgPev5X7GfZVzq3QP9Au7iBT1zqHr8",
  "key5": "2ENesmLa2a5DR7DjpTmdsUNNzx9w5y4GwyWrQRxxrpppgvqr55BkLnMRzN6Sew19LUYRMGgxJdRyEyU29fTtnqag",
  "key6": "3VroQjw1a2JDnsHweDBE7Ssix5uHKayqZgkAgzAbXV7v2WFFj9nCnHw3dML32J62GdyA8MJEVgrLQFoEBKtcSgi7",
  "key7": "3mh5p4rWHd6KKDs2Xp1KSDRCpdodJR6Ma4Hgwqjaquu2W87Yr6CadMiDMHFjkzwgvPv7obm7gqgwqtszD7ut5WgU",
  "key8": "SKqmsCEC26xdFBqPERaebEDy9pdeB2dnz6RceCXJq4h7EwByUbFBNRkPV76Z8fvZyDdXJLP48yYbe9wSDE7LQca",
  "key9": "67LVqxqm4ybydLy6AZgQwKkE5nGrLTQPQWzXyFjysbjXLU2hZothYJUAZifv2RU74mdU2YaJPPKeTMhpUJn3eawA",
  "key10": "mhW7f9SmPzXK4DNKkuS14sEz5SRR4GH99RWv6PcT9aLaZQB8FtHaMbb1UdjpmcCewudgAJbJM4WxPQtUduVWwgp",
  "key11": "58BQP4gs8cA6UhDefWoih9CfsewxZMCcDfWqDUePkwvQx3hMfb3VT9YCQUQxUShAoYnDjGAaDH3UgpfDyfHFT89f",
  "key12": "5pQTmVucBQjvUCRCmh6iqpQVLKNnzv3bKhq3hoWAeEWGfmdr8TRoxLE89icSRo343f9n1g6ncqxcucioF2h3r4yR",
  "key13": "Mi5g2cN1X2KPHExYMd8dh3dz82hm5bSetGopv5ZF49h35sXiAucK8yffTjnAvNYKB4KudMw4hhRyKL5LdahoR99",
  "key14": "36sfXEFfeGB2jQ6h82BBZ6UvLdhsZRoTnwurZpQqkWn4pKrYLBAs9Cin3cB5A9T8uJCz7y99V7YHT8XzjbLn6nZi",
  "key15": "2JrBHirYtjsjRfJTkFgP9zVn3nBfFn15e4kvvChbkNJRXUpbt1sgyedNawEBnGR7TsoRysrAKni3mB6iSqYHudLM",
  "key16": "412XucaTeTCUgJB5k82xd3PPPEJy9aokyBkvznD6fHWVuTjUztozXksMTZgUuDJbkdCLysTYZyogwPnaWs3QnfxY",
  "key17": "3j4CjUm5ZsUmi5eWy134i3RVvRbpioSBhqnRG4MfmX2X3f1TwfWYhvKGBr2sWzp6CB5Y8yny9bN1wgbM59hT6pGm",
  "key18": "5LAW5ctvxULW8X1FVtc8Fhv43e37idgzHEgyDaTXqrgvadwbfQKEHUYvxM2rCBrFv4c8BiXtDG2pvXwn5XymLJYP",
  "key19": "5TJK4q9je6JpxENWhyQ58PDo1W2mDHRxNdPawvFBMRHEB8JvXDx7JZnJeE8ePv7nbCf6TaJaqfrqyx9SsPwW2X8s",
  "key20": "29ZnqbHq1metvDwp4vWn64Veg6qj1yCixEeXBfKT2XwHX6e8X2221F8VB1wRsFyDAghiR59QLQvTze1hBXz3Rc1z",
  "key21": "3YZ4pcYpTeaMWnK5KnViv6FAPfaK2ncnSJi8LxNq5we2renGdjMGsNHbENnQDMcssAEhQxwZJXE77nvQ8oiQnBk1",
  "key22": "3CfwxsccBQr6XyMrgYKoBivemwecJNCTXfUjrPa2jXtGQPf3Puz9wUJDFU4xRmA17FtTzGXBJdWMQe6G8pDmLBAH",
  "key23": "oFMsShhqqGL6U93xkj1AQtDr4yaptEFBvC8qhKg4mst6bBeuZMwMnBGgkNmYM7HEjEfBT71EKES2MHr62CuZ2E6",
  "key24": "29TLuykbwsCqbG7ZcsadrPN84YxgSZvpBEJ3ZPZBsA6h7whsA3o8omhcaKGJwww9LoQ8dw5D5B83obDMpgWxGPXR",
  "key25": "2xHCeVhK7y3AZMmiwMri8UAAPNqUhDHG98nTwrbMcd8v7npDj7sBZBwhrV3b3u3MMPknL1BGUhL3E6bnYyLg9KGK",
  "key26": "5Q5R5DzQPWjnwxik8CuXrsbbfkE49nBHkyRY8qu2AaateJAwf9473Yk6H3wpPGAACYjwYKJcCy1Fy2hV7x6BNJh6",
  "key27": "3a5pNz1fQ967adrwDmbZ1LEiWkDN5dPdAtbcekkmGWQ3R52X9c4zCZ4xLmoEmeQPiY4G57RVBb5naDrUS6FJbRCr",
  "key28": "3RiESEqipVxb81XdDCv5cXSLQp9PJbRg5B2DfP5b8zTeopwv9ZESmuEfThXDMeg4EFac6UehubDdJ5F3QimMBA27",
  "key29": "32bpXCfqr72xYemGP4nWnBjFK1cJH9UyZbgHVmLragtQVRp7U8XuYpMMRv3Z61i8pd4c7CKbhvVFoSuDKQD677pZ",
  "key30": "5b29DyZxKKU6Gr8PSGn7XmWZxwLNsigdVthLoHJkodox8pivQzURdoxUAV8pUKbJLARpbmZs7ZDmngAyTrJXwaNQ"
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
