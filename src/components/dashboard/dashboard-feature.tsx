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
    "21V2oXLTAJWqV8PY7Fn5HXzp8pCiu7sDKuS9XPvQcHVdRVQAyW6opBxgsyxyVsujREQqUFHXvNja9HTrndKYzLnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55r3X7Lux7ghLqpFPQvwNcPaMoxgvuvKZMNPWRZETVQnxcBWrZrRxXWmnctPP2WKUaBWzRzKdFA9mBB7CqiHoZxY",
  "key1": "23sVAyeixggQqnN2iJJ1djXvj11X1TfjWYoXVEWr25rknPB43jL5EZG6HVedxrGnsuteMdZXNQEgnFBCqp1DoJun",
  "key2": "3fK9oMeasbg4Hmz6Wfs4C11YmDA99r4YhEiPvCh9yg3M1xF7QHjyDvLMMuni2CQNWdw7QxbZUJaEQW5M9NT3sFFQ",
  "key3": "32dSTxyiKKGjgvegPi2E1imrM19nDHwwuXPjyX5JuiatzwaxvKM9pgyCYjNKVE3Ug3JoHbSZBUnRi2tiDa3q9NZG",
  "key4": "3hHvSnPxfVk5ayrVfjX9nSiNhE2Hg3PPxqLeYSXDqecMNJqKHkrTPD6DRUBEemVw3D7kbMffDkRCdfdomdJuUPCU",
  "key5": "3U6h9q3ecVuRZYzjkJMbbd17ipV3wDVskwyTYhGkVLBDqq8BJhUCkEMvF7T6cUEdDEje889QcoWWtmYV6Y7rSMEA",
  "key6": "4Q1gSFoLYrehwFUrYnrRjKxYFio9F1HvB2qmF7XWaJ6WTnHWh2KBEP1MSUA31wMJjKSosdRF1xFV1hAwSQCVKpQd",
  "key7": "52JoSAGDTRTuQp77z15eqUR3qpL5BNH8b1uuWrfHEVhQbjTaKBcUsq7Rygi2Z16Ft9zbyiXu1Gy1k8UUyY3Avwnk",
  "key8": "2vWHFih3Zzmh5mUKdqEtw3HUtvmerjsa81xJ6taCDCk3Sr4jHUmHDv6mHULsxRNv5mkVNzZN1pfm5KUZL8dXkmvU",
  "key9": "4CpyeJFk4U3ZqWpg7SEMjkJXj5UxhBqPakh5ECCpXLNAoLMbBNHmBktMDyGbmdD4cEhJ1uKLDkcU7XYNJAkz3ann",
  "key10": "2AowBVrGo15pn6NXghj7h9s2LkafNafJLpMHYfn1zZ3kMCjNZSPfirbSfePeWjPrKdAqthhzqqrU8QLPFvwDykEy",
  "key11": "YBPsteT5zVDzEdpkJDbPu2n1rwKEMUXRuN7T9nCnZRExUuqDgFweify58VBmatQjc5rQ9VtzjMb6LVeva9UCdJ3",
  "key12": "kPtbCYqNdnHFpDXzeBAgorPJ4n2dn6uK24wURf2ZZtfPvUv2PCxUKRg87ztmxvZw65KdrG37gxnvJSG55iF99KL",
  "key13": "3UMDaYmxzEFUHU69Q6DAoKnmm1Dt9fAJaw1wJshRX1fgoiAyMLPX3TghduYr9vgoR58Ungh3iJHGt3wttm1bYZ4b",
  "key14": "2h9FdCUDf8nkGPYZjqnoW618YvshAgQsuwDvRqXEf8Cpdhdw1vfr73xTHY8h6YbptwDDj4abK1ExMBZX8HzvmPRb",
  "key15": "xP7g7SUL8ox1Wg5PsQunYqx8CKaTMqKXTgqfYe44vvu21nzvgqRCfc7Yd4gU6BedoVQ9Bz8XUnP6YRHyPTJLYcW",
  "key16": "2nNQmpTgwcDipVFJkRUNqnJrQXTNEnBzNTDWbvTKZWjt2HhMYL3nN8MJh7msdJMszAsuTk1Pac4289ZombXSAVmh",
  "key17": "64VJAkHDPkqSugkgeyLs22yN2NVpGDH7Vp8biE2G2qzo6GvXhTFaGJnJnpHbmi41Z48L7LSjDwiwyipVqXpPVUmc",
  "key18": "2EcJYA83pHawT7tdeUy3JJpywSA6tu2EHeDdWK4nFMhufxyAcRdrYc25EWggB6DDoBrLDd3f894T3zgE43RHyfXT",
  "key19": "3P2JZNqmRJh7S7oe3f39SBhtVhtoDHbkuaAzX4ex13MKvUPJ38BC4f4U87UmCqJ9u4rA195GqBJ54ZquqFk6L7yU",
  "key20": "4reWenKB8yFp9C6XBrofGXCcH7EBmP4xmkArP4Yu3m6WrNDRPXLRyDXhkmBSJKrUYFxpYqTQHd4d4bJnETPVw8NV",
  "key21": "3QBRBR9M9PpauGh5GAzVAMePis9LtJPQszGt4gxVXWArmYuN6aK65vBvgEv6DJeyRRac2xK5naA3XoLdihG5urhv",
  "key22": "2Px9nopxh2w6qUeLducCaAofJCQU1CSVu1xoeN8b8mYMBpE9P3sGbv8bJRi3SVEnP6FBPQBKznAZ6gD8JyKfUHqk",
  "key23": "2Z4Q4iN5PRmQ6AiCMXz3RRBEa5hdWzGVkyhbeDtQVZaTv7XZNWZKbtbcK5WAsgZM5BeaN6p7g2XmgmSpx2Srpsqt",
  "key24": "33HNw3oQC8SViPMytKvpYFHnvDsz1zQhpGPhWTPXLbP8QNFKGiUZfPdeYowvSpTfYvsxp8nfXxhn1ScMLUPjwqDi",
  "key25": "61oZWYWJVyfc6GiNc8z2pTMQFwEKKd8FrUL6AEyGJ5TVN6L5VyU1hURgdkW4KTQUyzxBbzLNcchwLm1jZ3AXDk9u",
  "key26": "3u8vGwQuLdhf7FHi18ySfcRERHUecuMkXhRYdz1H3CbNED31gSWzUhXnB4pQzWLLLsM7gMnve2PnHYaBGJQGGRUz",
  "key27": "AyEXRiW7GAgHKDaoW5khy2kt57PRVNycUKRnkeJyJTPPbTYNXRCqK4usWheR1KFnBZpcNop7JQHEuu5k5HkRP8T",
  "key28": "5LjKVqxScdPyckLRMeuaaAraXJSamZwdVGJbWkUNntTEX6ohAkbNGMzvt97hCcFftS5L8Zam4cRm4CCtpS31yzpj"
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
