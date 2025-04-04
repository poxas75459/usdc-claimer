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
    "2z2d3fgNsGziKJGXSvku54UzQieD1ey9pisYTpW4bpJUCike7gg4aN5bUSPkzSTY77bExBvBGdvC1yqeTs3hCha6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thCdiYyt4Cc5nQy4SvUrYkLsNEhhB3uqBnHGT6Tkbq5WUqFf9tXpNRsZGFxWVeunKq52BJv3Y71sRnYNjD8pGkQ",
  "key1": "5WxhcCkg9Kf5WvCouRo8DdWLNcL4kNL8onzHXAbxKUi1DXK2aKicqbknToQLDHQCrFXDkx2F7A6EDeovefjkNNkb",
  "key2": "3MpnR3AGz3R8Cf6ZAF48T9io3Y62LzeGoY6cZwDT2Z2G3x3c92HJBcB5dbFwmTYvMf44rbHYLE5DTghj2GpmY1W5",
  "key3": "4Qfq2Z7YTVfhjaFuffTxcCTDfrA76tujiF6NqUWBzMaoCNGnzxnDKBV8PXvNMmAg9REf5Ys1ER1czJT1iVLKjNx1",
  "key4": "4RVte4gyXcy4RAEbnM3iYEm8rk774sopQqdBBHSk8pZKnRZhmvBdSqYVXa629UkNXQhf1ZVdrbYeHSsWTnkBiWT3",
  "key5": "4SMp5k2Z7ceFWCdk2x6mxcuNBUw8QgCpSyXGjxaJcwqzerch6da3hNgHHcwdb1PaQo4XxeENswE3gZMkJDACFKg9",
  "key6": "3YUQrWAMJZH7MpgM686gfCrfSS1JKveP8FoHuJnyGz8SkaQakryeqrF5WbJjoHS7T74ZbAzPDg2fLhTtyhbq953A",
  "key7": "34amPKvQkY1RTJn13kcjS7qCTvajJudBA3Bv2KEuib24HBiDTqfZdXmZ9tebhbgGSQ3rYPaKBj668zUKvvQ5hUd3",
  "key8": "364J6kMVux5mVnhLyHQJDMkwbLhs4GABppV85YCqP878usQEt4cm8xtYFJQJBec5U4Nqan5aRd3DE14WeqcUu5oS",
  "key9": "3Qs27APkiievkJu6yyEhVDqJCLaxkd4ZaittvTW4z8kyV5BLCxA9tCqPrHZC2FMxwzCeQcRBMHgSQ6KzB9gKhVT9",
  "key10": "5mnL5kNWNEHs7mnegeap64VGAvz5pFJX1yNYKAxoHBQ8EZa19Jvr1K7Re4siA9XsB4LgcjQyfTC52fV8mJttMe98",
  "key11": "4XGK4fZpahQVvCKqw1retW76P8wojnA2CUTVJth43BsJor5fvV6Trn15kpqPRBbcFZ6S2ktcnx6ALdrzwiYxMu4Y",
  "key12": "4eroCKPXBpt7tumJFyoPhq9Rq57VfqybpsGkdNaskQDKovMzv14zyAdwVMjJVLuUye2qJbk6tWSAAkGXSTFNSK2M",
  "key13": "5XBypAj8qHZiLWNQyWeJo6WQWJGW8Eq894kJbdLQc2h4Zs3CcCwf9PsmrUSo7Godx2CYB2mN6fYpzUhGX963fn2q",
  "key14": "4QQf1EbCgR43AjihZXYwwkpUnUyP6D6PK9Ueypv42UT71vBxdM8Jk5CoRMD8Jzm3ZRZ4Ao9tgsryENdQiZxcNpQe",
  "key15": "3dPzFiJEgP1aNcZnaqvitB9F1ynFkMQqoKZHnMSh6nvhYVCGznbgWdEykxMzf434fye5j3jJqyTJmomcg58WYVPi",
  "key16": "8uEf87z9CtBBJnC7FNbJMBqzUsYVFEQbS3vE8bYJfVzFVysvMjYKNBdtXUf8555DQqs9XioqWaSqgspr1Tj8sku",
  "key17": "Ssaet1oyVSeK5sFSyCPrgYgR4KExdimBUchJaJsMEvW4u4fa9FEtmGdALHPMoAUd18czXWQfiWayyuZ7WKbDDxw",
  "key18": "4E6Mjd77c6BQeTUYdVVyu9YWahvrYjfgk3XYBiFXW14TCz7dhEzCxsrejNUAHs8LknBt2h3kH22HGW6TYSG8uu88",
  "key19": "39ScQDpy2qKdTSW7e55orKaFBeJiuBgWMVQWiHCHjzq88fUJ65HSrEe5hfnHuoyLabzvWzDfHGC153nHdsA8dDFX",
  "key20": "2EXUK7t1skhrW7wEUUTtZ7zEkzGJgUqEwD2pYtJNJnwn1bmWZz2a6Y8S8DqYUyGHkKiV7jiKGCRmUUXcAW15BceE",
  "key21": "3JzteVMdg5gLvoxAZ2zc1ZoARNJCNvgK3P6KUzZc1MUVgbUNWzxHgMX2owbUvx1dL7AaJQ61AVP2jyb4wtTh3HwE",
  "key22": "92iyUwYp13LNryTP4HhviVr26m67nH1beijgb8XfCQLCc7zH6r3sAjCUn6PsjWfriazvYjQgACAFcGTVc4bAVaQ",
  "key23": "5AkaBwxsam3f2z9mwwxRyCuTfeT8BsVzAbMQnYTF4SAyCyj3hS4LsNhK9Hab9uCAaAU6zAW5NdvTMpz7CAtTLry4",
  "key24": "4YjkbBwPW6DJZDirDAmwxRXwk97MrQmWcJjhs9HiQMHrKHfFkd827veiHRaxu1RMnRgiPd6nYTekruddCxHb6148",
  "key25": "2zDu7dfHzRAtK8BR35wQD69KCHfCH7rarK5rvGd3DfSBF52HYb1cnPQUFvy85uFDZ6MVMVSW2GVbrGm7VSZXJux6",
  "key26": "3PagUggLNN3LefpDztaag9dw21kPa8DqXjJDTUbz1SPqyMRxnXBryLhAXt1Yz8MJgB2MNsyYXuNu8HP8FVkhdMDd",
  "key27": "2dt5EeuqRaC19ZPGVnnBpei51LS4mL3Wv7mMZQxgQgd7fKC64wVZpcvX2LUM7Xq35Yuug4P9dxAKtzjfVVUer2av",
  "key28": "2Yf1YyE6B5bBgFPjVibqid1RK8JMgGJJWvEdDHgTWBnSbiNs8xobabfErV5fFHj4D2FW495Y2mTMHfMt9Z2Ej3Ed",
  "key29": "5ugYmnST9uXJYVwQgjRfiuBZLoZfRaNhS7oDCERwQQpsDxxybVQKcAMNdYWyMmqwTsQejmgB5gsEdEmBsahX8key",
  "key30": "5xyof9fJmaS4kHMzFFXiUwk8uLCk9ZFmQL76Pq32aKWtkBnYNedQV3HcEF84TVjezjZsxuENTHkfbCY2oQjaveTc",
  "key31": "ZbuTSA2vz6yEghLMX2uj9q8eWncZ9NziF8h71yFgquJ13EG8S75sa1bJ6M8zRoeqiAN8bdQaJW5NehVpAkUiBxU",
  "key32": "3JE5SC9WkgHit4e5Gqfar419A8Vs5rA9hnveztHRAKXNYri2tPj2VrfXuk1ceLfmy5oiNa1Gq6q6UjnaU6Tc2Pxd"
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
