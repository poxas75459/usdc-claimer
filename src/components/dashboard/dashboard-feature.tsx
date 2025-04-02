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
    "2KRNKZqmcKeRT3znGeHPSJmNKvy964sPPvY3iaWPnGRNaY8NWuWhWUoYksmsS3WSs91v2XT2zNd95jQsxbY521QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eAFEufsHjQj6xbp84ksezV9Y9uae2Cv3KCNGMMAGAZLKKnCRP1MWuHBdStJCbj79qxc8vzLVZ7N6pCuPkufGFxM",
  "key1": "4aRX1CTnFZ62xjcTHE6WSa7JmrATCCn5t1GXKWegTDq6HBC6unLB5LyrAot9q1dd7gsDPfLiniGkv6U6ADfgiii6",
  "key2": "4FuPaSgNM8shvLSyM4qZuKqJDRvMAZoPgkA44JJNKsHaWfP8M8vaBv291Ky3cttCVGL4kJeFWsUXswjRJswqLUbm",
  "key3": "2eXNntYYfmQ92prNPnNWRhVG7sgjjSptQEnzSB6UDgB1vp3bUrzzctBgkUAW3TDNJBNTwwwYQ9G3vTx7aE2AtBpc",
  "key4": "2tJ6tWxC3CJm4HmshzCnybamJqQhqHx9UbbYF1bkQ1VCb1WBQ9HHBD9kCZPqMtUNnTq2ZZNBonqHKi6fVYq2BCvU",
  "key5": "549vvghoC5LWctirWXzBPu5kNbyNMYHoagT5RaBeBzCTy6uE5pxth2jQ6SkopWwn9dsD4erzRRFDezpUL1cMyDQc",
  "key6": "4oDcBhSgf2DuAMoJKm6Q2TySzceB9EevxKZsuqxsTVZzNhaSAi1vF5MThhYqVHiF21dKXsFRA4YqrwF9j9cmKjfb",
  "key7": "3saUwsa22URwCB5x6jU9cK6Dc3xMRw8M2QT62nQzVSkQYbWL63Qnd94j9asCvxnP5h3aQuc7PCEs4H7sWsE7jDtW",
  "key8": "3f2iaHeeFJ52PYaZNgHi9mqK2dkvZ39KRH6Mk85rQGkcfvpBosnxafEfPkXvcEWHBLcxq3z4vdapkndeDNwg5xyQ",
  "key9": "QKZ55qUSEJnM85mcZBqnoYcKr1rU5HyDK7eSf7kpccT4VbFiXPo7xWbWErtxadCacErEtHz34fdigz4ybG9jbMr",
  "key10": "2B5ymTYsswbaiNXJUhRMiQ8zZUdDQ9vFY61JTJX2pjNYmRhZrAmEk4oE6GYXz2HgfRLfarxpgePjh3u6BwjrYh8Z",
  "key11": "23SqxRqYxTqxHo17TsLYRafZ85Dq4FLWjAWg3tfR2L1DsG551BQfPXjezyST1TFZNoah7BoyFaPFqQJeCBD17bMr",
  "key12": "43dsiyQPPyNnGV2Yp44SCm5wgVgWc1S7Mo6hfw1nCYDLWjVqUqbeoU5Sb9HVRutvBRXkBBGHwr7qZoNc5oxU8REX",
  "key13": "4AUUQrMfMLjc8UCrVUnRcQQrE8QyvzTsbbPfwHJbvSDGsZSYyJj5JNv4sWSEwsMXMw9AnTBYENXAYVJMSPRyUeif",
  "key14": "3UqxZymkuAfPsGBq1opkDjcMxoSVkHvHVNegHtw3zogrB4VooMoW9nBVjFprXnrU32KhsNmFGzEC1SWVKEUYNbb3",
  "key15": "5Smc9SMLLd7mSx1W842u4rUesVCLLhwDXBXMJXiDvBZUmiFP5JGvV6xchwu9kEuLHjYsuDpDZ2NwXyoM9E4jfipv",
  "key16": "3y3aEjsvCk6YjwqKrbkU8LwciQadgmECPgCAy8y1toKBXSBhRvo5YmtbUddWdkEwJxNyH2SKLseUsYTsouXMeUTZ",
  "key17": "5TXJrC9Nxwkp4sDBMHPLGdXEjS7LucM4FceSSm5zPGiuBijBkqGNDVDr7zSJKDnqeLoE7Z5gRUVCWv7GvPYLcMNZ",
  "key18": "4tocnn9muMxK5ynWD196VAvLABV3xgT13zCGn6QdpJ8ALdPaqoVmGzeDHKyyWSCPL2Yzha2TsQG1vworsZWftYku",
  "key19": "2qNB5xCD8GZKXQ6ShYu49vip1AcKZvd7jSDNwxi4G5bbD5tDS7atPvcewaWvw5jZw3JuW6nd9eknrjZWWD5c1n6H",
  "key20": "4XQWCtpdqJ8c9qRFAHncZy2arCKAnjkAVbtbdF8Btz8WoWHWsNBwmAZWN1QKGtYxNtP1P6FbtwurkUt3vEfZyNE1",
  "key21": "5L1gLfHspxwxZx8CyjxAv47baWaQ59QxauXDgEqYJxAsNR8VfdBpMTHpQewH2ARuY1GknnZ5TPefLQMqifV2KWTb",
  "key22": "3QqBBPgRS1MZs4ftnVfUtEir9hEp3v6rPatWEwM1TGi3hBi9fuy64DTJNxMRE2bbVmY6v2KZ8hZi1hJCzd9cXdQY",
  "key23": "2LPXzh1JeJ9ybbdDKKjDkWzbQGnkZ24D6K9WkiRcshoYZbywJJCyVffJ6Eia78XgSYXk66ywZQczi3oKh6XVKHHB",
  "key24": "37qwvBuVvxiqtNskk9xYckBtwjfeGZ1ogEAinXWPg8LJ9z8Zq844A8cNVQcA15wukqPxBAFVqVHuQVgMeXZ3dKok",
  "key25": "3VWJhykTqDHWj3NNfxUsP1QNCpCo6GDCxDcdAemdXiLVMhTgihhfDWPNZgkSK3qGF1ji6ECNDZmir2ZbWzuCk1UX",
  "key26": "4DqjW3LFaFfF6877Ff3jtZLPUjdttFfgTntXTYNAJnzxJfxicmtT1iUL64sNitGuGkxwqSXQ1JBFvaz5kXqVvt4t",
  "key27": "3qmj3eMy4oMat7C6w5sJ8Z7kRMKWoVW61Gkc6SaHYPNqLQ3PTC3g5hi1VCdJ242JC8PqaqPWwLGQJjPTbqBv9zNS",
  "key28": "5pBe3jdYDzoidkTWA3U31pwh3Ko6G4SX8ZR4QdjFmEs3N5J5X22DVzxzeDihcdEfKABkgrTpH4KmsB15M3FWzppE",
  "key29": "51pxyJjs1VsSqrwAaqsLYiyk9ZxwbCRPZ3ANMi7Dcsmw45q5SBKStfnGmUmyWEEDUcSg286qmmmgYBC7mFrmQCYH",
  "key30": "5kVSQZYJ9Wk4n1ntPt7ZtHKMJes4MQEWR2BUL7DKoMqCfnnbmKTDc8cE7PQ84JprifncMmskuakuSeQtSztLHsmG",
  "key31": "gRyx7MdrstEHdVRz6kjmMYP7ELCRY4QQ7GWwzi8ZZoYeTYP8zRT7qBJ89XGkSbfFHSR4r5rJxoeXiom6H4U3cxc",
  "key32": "4vZMEU4RtLxRiw1YsUUhAtQi7U9qpAjHaK4UKKAKADf3hQWUjGZ5uqZPTTaDfkmCbW7myu22gbpEWEGxShFkRW5a",
  "key33": "5UX6VxwvkYdfv79BvSivaky46G7tVyAV6P3Q9vGD62jCy6W3ofi13ULcN2EywSnAn8fPxLu6VzipeYDjtqh9ZsAA",
  "key34": "36eTtEpsrPGkDFCmdH9bnAXw7cPgPNtzUNAX8RedEqm13KoR8oSgBfiXqdyMXfraHpSXhpTcesStdaeoESrhA8ox"
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
