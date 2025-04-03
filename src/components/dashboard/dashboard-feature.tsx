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
    "4mwkbDk9bLgzXddrUjTkAHzQvQ4YuFhGwNuSJBBdqVsPR2NaBLixTptgSnNAxcQ2UxJohofngUo1pDb6evgHtFPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XEULajH25APit8omJqd8fwrdmxDz58wHhNqxxhfnw5b59RrFmMV7HqcmnFgM1H1JAgpBuvnK3tLrVU76UykkcXe",
  "key1": "57ZMmxn6mutUvqCNNcGx6QsgM19cFpUTqbh77fJmWQifJ1mz3TucZzMoRLjzFM42qbeCPQ94XqfwWrknL8pThYLw",
  "key2": "4MyTtqdHi5DWa4FRoeaA268dG8nVz7F8rNbPFhgA17icxAS6VSp3oShhhj125qwUJ5ew82Uhqr1okYfaGpaAzomF",
  "key3": "3BzGkbTwF62hX91vkAup52LuJAo7KRWDxvFAzaXnJ9qkL6UV8KRZdwh4z7h4vQQ5h67ZDEYBMhcFUhVpWBwkL1dq",
  "key4": "ooHobo4YGXi8B2Qyn76NZDPJwtcqoyDdEkZTAgqr8Q7e9Z48zE818CnHgfrWfBSkqUYL6nR3N283mRFTTUdogAw",
  "key5": "2DdXiUBf1yHc4s4uxzdCeKygkaXChUHTvUsZfaxBoEAkARRV4AxKGh45LW1vWHRcSAg4NjAWbyN5echaFX2CrdX",
  "key6": "34JgZa6B1Hq15UDSwpXsh369vH3gj58uLxGjLbv2zCaTVBiKAgV12FujFzPDtDp8baKgAT4HBWVLb7WBzgjX5vG8",
  "key7": "44vFm4fBtK9KFgMjAJyRUmkX3xfP3FCgynF5vu6NNRPwwJpSTXkf6ekgoV2FganF1Q9GgB4o2rUEyz7yErTjFZLX",
  "key8": "62ZwwZYhAhKvjML2KD96WQi5CKx9HN5gMV2tSmFSNAP5AF4pQWyk8WPtjKh9AX4Bu96uk4YewLbBrEbVLsYugz72",
  "key9": "8QT253JBwnAzyirqzprxwhQPfNJ4LJr8Tf3pV2j63786TGUaqRD9YRHUAhL2eRp4AzBKLKH7wUYt4DsppnNrULB",
  "key10": "5DhTFXcA6US1oGtPGHKUFDaSd6icdrfNjZxzPcFfSSTMcCfbt6GFo9oapSa7eJkq3dJbBc55sC3YbrcWroMtxTz9",
  "key11": "4RA162E1HfMmfh34UHUaM92Z5rPzycfctHRDQcNjov3YA43EKv2iXLkHWXAg5c71unrfJrWZx2FJTvyxTsPLPNFU",
  "key12": "2TQ8Nd5uZqNg6Xwzd2BGoPDa8WYhJPpvCk1nA1G99hKFXY7Gg4uUZrGQCK2Qga3PoUShyguUhyKMuiLMmZzw2FDh",
  "key13": "4AVRTz2CWuTaHMX5H8MZUY9ckQLdGwooZdYVu5FaGP9WcnRreMfAAsURLZBhmNh3unqmGwenZLTNLkkfoiXBC6mo",
  "key14": "2JhzWJYV1QGEMotVBSARjswB5Wj9WqmKPpMq66akAphDgmadAgxBkqs5XQm1iEkpUs9Szz88rR8d3wJia5DZq1Mj",
  "key15": "ZGhGwk3qd7LCxwduqQRYgP4LL4cGVDzsWfMgKcovp4iiMWE3kQCjM66yXETeCqsKoHcKFwwMJpVSkwp8UuTeLmM",
  "key16": "3pjhKEmLHod5haP2iG51v1JhapHBHUeHyKBwoygJyh9nQhfTP7HTaScUwPv69N98JaqgJyNBskxoS5WLyihALSW",
  "key17": "ikw8HKbXtKgnms313CBD8D88BTYao2xCWwGr9kh3GVX3GinqQ4po51Vutz3m1LawCpYjf4mcA87BUtiXGoHXWQH",
  "key18": "2m7wx5MCxhZ8G7HJrxPYbVhCSwfCg47PiWTqcJgkSpjupX6KK21LWHJzqZshfHSMDP2cbe3ZUH7xpnRuhn3Q7nNV",
  "key19": "3KADZ3djrsCmeW1LM9kVZTFBYE7yZyhix692p6HEFnnC2BShEgLhPWzJdxYYe8ohfLMaSHjQRGfzbuC27KKpZ9Ac",
  "key20": "4qgoH5Gmfs4HY2DBkZZfJNbz5LZuWoQapgYGCJQNu4mdj1ZtNK8RxoiwukHQLzk1T6CgaHqhURskFrTnSWUosxBB",
  "key21": "3VcSXiDYGdt7dicmDN47cZ3qV3xzqPNPWK4qp3QsgjJHbRe5HwaYaYHWjiUmxHedj18LtQ1vU6GUJwddTB9HuRGq",
  "key22": "2EoGMjAwvSgMycfHrocaoLefTSfL4XbZ3nu76eqYRc7NqGp5GJ5ekxRWbuyUWeUhsi52nXQsrr8V3ibgXceguug1",
  "key23": "qJww4wbLA8uFkZh2ea6kVenzzfAYZGRuRN7xKJdRHHrbjevbZVW17siwhsE1JDshyxKMrdXPq5cHmXDrSFnfeRD",
  "key24": "2yRcQf2gofeUX273LYa1u3YoYjXBjPfgX9k673dPdqJHSntaRtznXRA67NbHvy5HCx4itY21PfqeKdVQrWSAdgtD"
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
