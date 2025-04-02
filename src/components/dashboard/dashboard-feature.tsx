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
    "663u7sBe1EGRjgPyUXxYZUxwFyE3nLUSjVUjngiNoD75U45z12wm2wgS4psGyNhBfsxP4VR2Hg2jKRdMqhzWWNzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZjcbKmF9Di3ZnuKJXwjJE1ELarbWM59ji2fxC9BftWNbFFoddsiyxca41R3CfVwuPdzCMqhFseuRBaiCwYNx6z",
  "key1": "5UaZsribMXx6CfG2hpYgmSR14bPND1BjdNPMBzGHffBpqaAPcn717kcXEbRDnjrqRyo4KC78kN6ud69JFtHLxeNP",
  "key2": "5vhoFE6uCgBGcrArnymBY8CjtHJ4w7kvmtWZdHfonf5yi9JkPnsodttMEXVthFwbPovpcG1M9Z5QCbYcDn2vz3j6",
  "key3": "5X5mR4mDZQ53B2SvzHkfXFaam46dVskSyakR9BHdYedvdXEjpi94XDFpxfgprpuPh7D9DpgYeXGd3A46LAqyYY1a",
  "key4": "2X1UQHTUUjHj91zTNHAD5Wrg7KfRvsLiAYwtq8uSaZDh5hReRVRSmQ3cDkYvSHaVchf2JK1wuDATBnwZygpW53jq",
  "key5": "4ZcANXKoQN71CdUVALznocAWMLFJABPxFphkxvfkRqxTdYeSrEwVJDvLfUekg4PmWi9RCH97Syb7WLaE6VyJAb91",
  "key6": "TP8EocVAtvWSP7pCFGLbrCWfqHXfLCMH6BbMkUDVyoFWFB4W3surn96nniWSGApLevox1SmrEXiBwsqoSuDmoT1",
  "key7": "261TMsofj6PZU4XrsQEzkrSLsbEDR9ub9jGrKi4dvwUneFeMQYHZL2ZbsYc3VrfvyGBSkWMpxyj2e2wfmrKja2vf",
  "key8": "2fs6SXZYXWtFnDXnjAJpk5FPTockE2WWSv9R3mMhwiGW915Xsk4bZQDYyExoTWrBpTWb5pxBvqy7AgTgx4nP5ZWU",
  "key9": "4XuLSQUxNb1LkUAtmxTQCbPbjxEsq2enNrvjqBVj88vcEdb7i9x9rHjBbianfZdxfeMmmee5qkodH8qhfWbV8E7g",
  "key10": "4p4LDkBY65i9J5sDytapx5XGCuQPLggaAy6rcbdU13mpnieGUjmbgfhVm695hQs6Q7G2B6nEbYXsyRobsk1Cna1R",
  "key11": "6457ocfjE1su51R2pdzYP8A38x6Hi8ann2koN5qxjZXEaa5nWbVpgecr1BDAk9r1S4a7Ga6zQc8BvtJ7LW8YjPuJ",
  "key12": "4iHTjzoxPqv1tLhyKECkjDCBVRaTi1rgFu1XTKPh2TMC6pcg96qSoqPRM3wpRV5pQQKoGbfGkgb9nmSGyNbvj8dg",
  "key13": "2JkDAMvH2MKPLEQYEms5YRMr74MpGWUpZ4f54NEQVgRfwWpT7Ji4m8k2F3zPzicC9agA8Qct1ytupdp6xAU7uPX5",
  "key14": "2QykKPrBmebwKiLoXJmR6RGLXG3C1pY2883CT9c7Xju9YEzMWZAfB5LCv14bc3fv1FSQ898XuAsDcnSq7FBboCEn",
  "key15": "2Nk9us97wtji5pbmDUvFGyLKuiTx6Crv5fMJEWuvNjtUneiWVpNUJFMVRVD51sjiapEEovsVSS2uEQ7oTmdP8fqX",
  "key16": "5Q9JotoqbLy1MJJpViLkYp7HKySN6P6wUsW2FB9pxqJQFs4zx4a1cvw2ZrxQCr5yNCySKTv8tXZ2wJmrq4Qg1NxL",
  "key17": "2gXb8EH9TYa8wXMBqvkrHpapyFzCb1Wbkq6XKuByFAPWAeAFTvYFs1VxuNZHfEBVXgyzCvyjUBZQ58t4LgCKJpBy",
  "key18": "3YSYcZJAt2yRdbyDy7qzU7w5rd3tV5cZ3jFsnCwGPG58ZwNsede8hXfeDsPChd9BKc2GY7XYEaVWAf4gGxi2hkZj",
  "key19": "CytMWZwfzEnG4YwrEbbBXwXVfGgX9vfiwDrcWrgP7dxYtj4VrGha4KSU6BJrKqk81eqdqRsNYo2PrmTrNJmQenD",
  "key20": "Z163GRJnabJbiiDNMnY5eAGfVVhzu8GiYNYdvQEwE3947sPTFbT7tsaX6RtPqTaKU8uQvpRk9uqA49YDXoztZvP",
  "key21": "2iAZxWc6P8KTCdmh2is9qpgwDefvP5tMhifTPLEjyHpXaeJwwkVRiaRVNYr2XGB4oatMz5erdun21i2J6oTw1MXJ",
  "key22": "5NQqKTVy5bQ5LwnPk9J3rFa3FTxM2ETmEcfHBTye7Ls4o4NkFaTa8dqFMurF9GumzGxrdV1CH4AtscEf5P2kuA8J",
  "key23": "2nsLYUUwdfkjc4c4QBKkPhge6DvcMbaXWAmrginkSukEXLT5F2iagWqhw2fHLBSjfswKPiHJF89sfJ5kDMRG9VnK",
  "key24": "2JSJcNpxZXMkRvCqysaHNXFCy1bsSypfpYckUfzC8hovVBeS1YBiScjGEEhwbnFBbHxfMp1pJ8LUrQj5gPpeV5fu",
  "key25": "A8ADdtCZ94UmbANoDe5RRA75mATsmUbTNjax7RJyC6mTy9ZREf8HatmiqdbA5sMQqhbXcQMfgxnWJZyUNMB7PsD",
  "key26": "cReGJjLsBoSxD3MyasEGUr1T45aPiJYsEMUFDMHmRae1ekGjQJwNUdc6RSLWDAGtrkq992nojKjWUcHkGL163Fq",
  "key27": "Qnf3PLH2fZG2hcssZ4ZqwPVnjY6xGRUA4XefQ4LXREtcs2eUH64Mk5ZA5cpBjwpu55hV2uXjPr24u6vJh1iDD1M",
  "key28": "YqzQ5ZQJctpMKo3VX22zSYj49w4WMqaE2jpJA2qs77NXFqgDcdVGq2ApG7A6vbTwZSdLSnFWdJGYvVKRN63Hy8v",
  "key29": "3dLdfHiT7zmBr8Nt2wFL2N5ULQvst1XiGdg6S8Eqm9x8ffu3T6Snu4Q63KUEpv7qZGMYZgxk8dE6DVNYHuP5SW1W",
  "key30": "2rKzqKYQj6HdjScXh8Q8JAibaJGM86y1LiKksuEZ3goYdXwNa8BUXGQu3EUhfLEk9NYhZS1DbCWM1pqVqroKjg5a",
  "key31": "Wm3y8eRPd4GhA2VL6J4ea95eGdMZV9hfsqzfeJ2FAvp3XhKfBwu2HtyMSdj58rtvRi3Wx87KwPwmjt7Exyyy67u",
  "key32": "2stb3xTaHd4JMrAFnUNgLBghPAK61f8wSUGbGERzQXqm6NWVDntQgmet4AMoPNakUXuNv3Wh3iHpgGGaHpoaq1fk",
  "key33": "44cM8EKEXAX9oYWGs5kH2q1n9QAPQR2uzXv8guJYvmmdD4yvRJFhaYi9k7X2GtaxGpwrYgqTYh79mHDrhkYGGzbD",
  "key34": "4iZ5sqpBDgejUyYpXNsYsTy5rjoLtSLRoJUEtM7kJfnZZdZpzBcs3Uii2DeQexSxD8X9b8sMHfQ69MA1TUj6gqf",
  "key35": "2mcQZi1FAhTfufex772rhUopKegFP1V1p83p532Af1ozSsReuqCZUzsHXKXZKAbiPD3v3NAXwnmhdZxHJZKhEref",
  "key36": "3ZqVni8cEqAjpk8XSd1kNmtupbsKizv6UBL4pnqPbpfC1hTfbinUxVLZctakroqWdjksFN8GRwyYGAwTzvueHp4y",
  "key37": "2JsSVcrTa3MviJh51Dygf8KBotw3avAxoCLZTpVqBF9oGoNwL7QtfFqbkrfoH3u2qFUVKWthKSy2MirVuRgwS77M",
  "key38": "2Ccvq2hQmBQhQPPxQPDaHeRJKhE2pDCnczT5CiPM8AD51ZbAXTUrLAeX4jmo5Z8M4Bd7jncGmMdtrP6n61PHpXff",
  "key39": "33VAUJ8nLuzMd71ATFJm6FasFcK4b8PTfzRveYkbRdisfZWG9ZmYbaGJWi8W9FwdyC4pjMz3f1EETQNbtJZQ7uFQ",
  "key40": "459hoNDdTVLa4Rg4ntzKLo5NUZjvwMfZEXmvktxgo5Ri9p83wNCyX1VAwLByKbxwveYp3DWn7mMKRYpfpD24wBWo",
  "key41": "3BvEHW5z8GtqtYA66noX6Bmo4X8ARGbvWGjrASyYbmbN8KXS72nSttvD3Kh13V5F4jMnFdsfb9b99NSwfHRbtPTm",
  "key42": "27u4CoWGT5MPHsgfs1x2H9HneMsjwQVpNDsEnTf6qtah4jE3KHwaKqmdksfnDrAwUKeozvh43kxwwAADG1MmCrG7"
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
