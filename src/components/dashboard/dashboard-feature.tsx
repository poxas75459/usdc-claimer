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
    "4kxSYGEzHLFDzVHQLhjF9kNsym6u4N2HAJ1Ff3XAREKxyKBTWXvzt4VR4rA8N6NGRgiSig7eViechHfwtToCicSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c41FxQ4spaF6kPrve1rdVifKTXBD8fHQhBbsLRwmPY9WZAJttb2zWwdwnqiL2RdmKiSEoWKLky1Jh3yDrVazAui",
  "key1": "61HVa55REJJU4FyrFVh45atgguMrsyVr6iEFEYjCaMyyr6CrKZ3C2BGFj81x9Ayfank77aK6Z9NQ5gYZ4dP3gjSW",
  "key2": "Jc5a35GYyccvhayQ37CvV1wG34QS6QRdD6HW9d4oCSjb2JS5v8JdTHK2EmUuehkP8xT8BEFTUgUjhHVPL1pstzW",
  "key3": "4bU8mmFYvU9QJoVqCqNr7852EmhvUqbAQZuCpKtuS4tDqQFGCMAxNDM4k1TypDgRhJWgDBvewPWh9eDnRb49JLma",
  "key4": "2iVZ5grwCKYcvNduJ9UW4t5kn4mkPkPu4KkTQYn4sva1LUy23MnAtCVR3HsKWMn9GDeCcpGLdeDVRPqWoUY8GG2J",
  "key5": "5p8xLLuJhFTpraQwMvKwKPGFVTYNQ9w7jvevBUN5o6YdGgoLyBQP9GndQT9LjoLDchJXaPhmJf24yqFC8ogtfKwg",
  "key6": "3iwWwEppVZnf8edi3mn81V8XWYcpeWt9SNQHKF7A3aePms7cZHRLNMt3gNgEzAMB9mSHu2X58K8rJt1o1BuR4dym",
  "key7": "2RTUBofwKqJPFPeSbM2DQo4pRKWoYNrPjBMoVMSbHBtPAkHWQJcmzU5i3ELeyyyudndFdQ4WRokJAeo6JodgcCGC",
  "key8": "3UjWiYwYjtDWFjDed5roRDTTmjNTMtYGUmMvsPoSy2zY6spakmo8n7F57yuDJ3gqAN9QHW5HHEexorKMConmXyR2",
  "key9": "39fEQ12yBbh5kJYPL84ZmKhtCW7eTgpY1HPTVCFb1cKu3KMXbfyGVcRdCAm8ixhpdSREE8LNM3zA3LEutH4cCMge",
  "key10": "22WRyu7QAwKM8a662Xt6MCTertkJQSc3amXqsc17MVwebSXnA2z22QBd2zp6qEzHWFVcnS9btEw4bGDDTkhdXmuu",
  "key11": "ikvNBgnq2dBzDiyTDoVZR3KUXTxxGDxPXkYynHb96MfkNQ1moZ1Ag34xK3JdSkRiKWVe77mJYbkJaFyFWmA1qdX",
  "key12": "2Zm63FLu5MeTJ5Xpqx5dZxuLwQqMe5LT9pcrDWbzCZbMkyHJcczHsmYiCKN3G1J4Umje8eJoS1zz6BiRQiKrm9sV",
  "key13": "294Aco9b82NDP9JuimXjWnR1F6s4zGwuwZUs3duZo8GCgZE2C6BynAkwvL27DQvvcrp12NjsLSicFvtUS2R5ejWa",
  "key14": "5Um6tWP9adXBm94XDfRWH3yf3WSpsXeSnMaYy6JcCaKDyfakAQTQiCZ9U8VGbkkY28kaCu5VtqJGg1cAgD5QGSYA",
  "key15": "rvm6JCsiubrmUFasfXM8WFuB7AqGTd69Ecn1q5B2Z7X65G8Lzntnin43uqjtSxcWjcd1NKAQtzSyBb1fqFQaUKX",
  "key16": "123PxBxbCJdnhDGTxYsJACBNGKttfEhS8CcULZHHbre6q2u7YXRz9sQh5zHBfVZDTSeX3ZA1Y5mawCWy6JrJ8rvr",
  "key17": "iEZ51ZzgteZaReiE4dtaTvM3dTTZhDYWhGJ4mp9mHuJQMJeNfoKffGsuZ8TVdKZQmMvDGjY7UQvFtbFqfPnEdbq",
  "key18": "2YJ4mcjAZ7kEdLZYbFVuiDwwj5BHpCVC5zWRwFAtsafGaENKHSKY2uEN9bH7XsRDn2G7mJnGah8cro93EV4C4FZa",
  "key19": "4Fb7TAscmmAjH5L2JkXMv5MHBavjgfsnWKRLp1WjdTpKnnB3oxKJVAcR2T4GcBpeJ2cPKzCxEwYAbf3WiregYVoT",
  "key20": "4gkMag66p9f4ehsVipcqgiUhGPBoATUenhCVZsi9oWGyHc4zqfx9TNQmrWb7eMiSxrsn168ayH5aEqUfw6wn2ibk",
  "key21": "3cQ4QhrmQapFpJRdSJa65NodZwMjjx42vYsnSmTXVk1kRAbEnk656pUKgkBCjcHc4TLhc2ECYmNbqBmofnphJi2w",
  "key22": "xkkncFWDkwULLAVeqXhCzzV7P1DZEi1ZPFi3PkLucpD4Q57oMKHw87KiMhvUYaZqCrfYv9McSqjKYD3eWF8Peut",
  "key23": "2n1cJfi9uVomEPvnBugMvXffs921NCZe2cakprWBgRwusF4vtSmVPhxGfnTqQMV3EaW3gtwTTiVWGZShmCbYqKJb",
  "key24": "356Tv9r4NM2hxbt9CZcAvxb52t1wyjVBQgdNVkJDAaSs2ov9jdUZiEDYKtMKyBpvfaLg7k6Lk3ZuTzXWDN3fjspH",
  "key25": "jgCdyj7EzcFQyfBbPiC2Kchgpy582r68CrD4JNU7fkfi2Dfezb71vbC33rLBXRsHxvZfoQyir49RDjcUqZM6sXL",
  "key26": "3K2w7vbBiniZ8kYxgTCLEE25bVt7wyZATCLUvSG9BPUKh16D2tpTDEt6ar6xGRTFG7TyYMYQ85nypkn1gBk1E9Nx",
  "key27": "4U6wR2aViisF7asuCF4x434fwSxe8yRXwb4NmAQDkstQAg3QigMKpRgfuVXLpisYQumWgPdutn1HqT7w52kSmmWg",
  "key28": "3SryuyStABUDGRRj1d7c3ztVdxTxobZr2UL3wC4DgJxk3bDvFszut7FKL8irThrmKKkTD1dymFEU7ZqRsJxbDiem",
  "key29": "21bqGxXByDNfM5ub6dnZaYqm5z8D36LS18dBmjLfKknUibWZqT8RGotdsmD9Cm1WRVqJwL5ayfiHedrvBPoTDrgz",
  "key30": "2Pz3k8W1rFuFbGNhWfm3ZJ9wH17BSue9ceQ1nWAx7ufj1MGhye2MD2Pwpr4EFWGxVpFsheDzxTA8ZQaynSaupsCD",
  "key31": "2icV1unh8T3ioBAP2jgHj75pPFGbyUbQfGUP1dnmXUoD8b1UXSfesWkpE5Sm8GvtXVEa8FcYozWVXckhhc7ULuNB",
  "key32": "YCzDA1F1NTZMrYqqbS6u9VpR1XZhSX4udYQNxy6TePVTbH5T1nFasgDdvVw9i4Cmmdvc4MwGUnwsaeyPUMtjpY7",
  "key33": "5nXAoPHtZZSEWAiZ6dEyaCzaLL2n2odhEyXwiurmBFpvsvEXSbEy86AARWHLFSbRCoymkpRnL63yDoSCn5RvzPXp"
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
