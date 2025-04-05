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
    "5K3NAP1sg39K3P2ZNG8PnDQequJzsvaRWKxHvnprzMnuDQzqV1XAd5kbAJRQLtHNJMUTDqV9YHD6xrPZsuKVrc8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ova9ogcJ6WsMiUQBAdC5eMHnmxSE89ugVTuofHb6yQ5eezTtnf9NkZMQ1gHe3iArbS8N9mp14ohLMTG3WLrVBSJ",
  "key1": "3TagRA7YasypQbDY2ePgiueEuXFfQnfDEjbpR64a5wQ8RPJ6BS9DtKuM3symP9qfDxT7vt3DdF7Qij3y9kjYESRu",
  "key2": "V5d8CzWZkE9NY3FG2tXUBmTWh57gWLTSwR9BfV68TVmqrMDysu3jiCbWxzVv6CBiQFsaDgfK7yFe7r267hL3iBS",
  "key3": "5TwsrbUYrse6BHZVX5g39dP6STzy5XpsLvhNUVEye8xJYBK81XmZ4GShf1TatcxbCmFDYSwfZYjfCsYtHofi2Wxf",
  "key4": "4MbMK1Nbbk4B5zNZ1LG8Q5jCesKKMP9Ey2TymoW5VXF2r17rPuxcRjZUAoGnAEBrz8qs6YFPjGkvX4kViXMLSZSs",
  "key5": "RLLb5bJaThkrruimJ9RnR7vbQSFwj6u8pVGcMv6F6KBxmgdT8t97yq6ypjbLjhGqmb8x1JPfiahKxP77SJkBZLY",
  "key6": "5pqDjdwWNcQnQaqjTGfBK7tVL8Gh1byHpbezKQLzutUo4NvtfP4geDpJxLpsF5buPqHEGSTvj1cshNxhupofB8Hc",
  "key7": "4MHqSBNKCnMJfuqpeEdCifT4C5xNhRQG8GQs97pJ7PuJCYLtQ1nKhkBPGqzYz9kqdEgr1vc6yxPx6K7rBvPhTsC9",
  "key8": "YKFg7UM5LDHr54BRUwyidbqZwqx9gFXVmwQajU887pbynZczj7XtPEFppR75eBq9wkCVQ5B6Ts9Ra2CvoNuoKZS",
  "key9": "2ihQuyrJBGsoBBNmfn3G8n4JknKhqStibzkBEzkJHu3RA9ERCSGoHrM2RJinzLQut7rbxN72aXzHjwEHMg3AsEJP",
  "key10": "3RZ8gsPRqLyUSvxu8MDWZQihRYBLrbcvvD1HC3QA68qh7peBa8gG7PfwDFdNyekYsNUUCJMfkZEWZquXmSv3jXjw",
  "key11": "3Kh6d5x7UjBQYawpBDHEMG4tHzsyLjnbiteUVJtVtVR51hUSEoSHz6uyf6XWqicEqp6FUwsQELHihmZcieRYGg75",
  "key12": "2zBsztwqQJocJ7BNfweVBPE1dRgf38hmZTCWJNTM4TgfrhUi7zu8Qva7ctwawuivXNYJAT3NJvxPucpk1cErQjeQ",
  "key13": "3YdzKSVRihuMyUAciMaL413nbXW9df31NA6quWWLvoVKJNGo6ymZp8VoCmJyTEC4M8XDhwNQZFiUX9B6th2KGa1A",
  "key14": "5VTHcquNr1qv6mAZqVLYHb4yZV8yVJKfdGZKxciBdGHvsE4m8CEiNEiYBvXBZkZ2vEiwSr5A3nXqXtBuzkn15zQ3",
  "key15": "4w7drpAewz6zLFy8dNx1LH3NKfFNYJPA3bWmTZKYC8HPMnQucLKQJZudbDuh1jtXBvr6wsnCE8Udk8sy5iMxas1M",
  "key16": "4AveofjScMPLgHztgXXKQruVBgBunuYG1wW4b3JFN17bhEYaJm1u6kb8ri4L9fuoErBj4uPfzctJhHxkrs9TQhZF",
  "key17": "3F5bceqtTxt1oL3nUdP1HCkGUVZbtxTKmJ22fHVcyVYeaSxH9trCon84M33w2yugoRsYT23V9cFvtBSgv3XpSixS",
  "key18": "5DNyccRFMuPCipNKBkyqShahw3RGuRtCY7b866xTax1AKED2FeUMWBuF5Rz81ZzNfBbXsrkZoyE7aNS7UZHZCVxo",
  "key19": "nB4eGcGU4cbeZxmRqu7ZQywCSU5fC9vgUZeiKVVtvTFW9bPi2zkvgvyeVmfE4grE7FYN9HEf8PmGd2tuozxRtMz",
  "key20": "5mKgyqSqX7GhZFEiggV5o1D1NHP6NF2JmwPU3oVYFD4T1rTAu7LsVQXQieW5K3ELWWmpJGz18ZjAxDK8Mpgp5abJ",
  "key21": "65DQHCqVVUQxYdc5EzMQQ7ZvAN8ps2VMZ34r6gFFA8Gae7LUHXMgVR1vF4bn7kiKojjt8CngtvX6DHdP5szbrJpG",
  "key22": "45vzg6uU23SMHM9ZdSeQ91Q7XbD5W1Mm89oKWRJBww56uF5yxVEeG2THjMVSU8Dy5FiZZGEbfnyP3fiQy2TA11jv",
  "key23": "5FfdmH5AE1oUjaAgm7o46Q4g35crhFfxhuK6agVm7ayReyGmV9i7sUXP8HbgGEEXbdanuGbJrM5AyVtQ93peUx5q",
  "key24": "3vH3d5QBFEwUpujsQ3fGGa73xoWgv2GgtsxtfP8Gz2pcXpZUqV4W98ERz8ZUSojJTqhjbpiWJp9942RwmSvhDcHe",
  "key25": "j8uTXu837ZyhFTJrTtWi6ARvS2gQbRQUv2cZ38WbjgkBmwoM6suFDMY8fvHTu6kWX2PCDjXopF851piSRqUy1SJ",
  "key26": "GHtENUcE7nceW3rTM2B9b15JAmJnqPtLkbopJDjj3Tue1mTLXAfNRcuWcW3BAjBYzMbnQM8bcLkTCzoyVFDMdU6",
  "key27": "32ibzYqrBLJqgud5FkcUY5rEAoXz3v7qCxS8fDDianD4uyhfQ54xAyv6HEWm9efvcqkfDdvtfZrMwJvEoGU3UP8Q",
  "key28": "3JZpa2NA7oXiNBTwgeF2r5gH3AAXpNWsAdjjqVT7hJBbJhirHKCQx97oR3JhyhFq1X8dSyj3mZrWoZE8YanLjwNo",
  "key29": "3iQdnLPB1kKfM8YDJ9SLa8jyxYstPo8buaStz8155vDKj5ixcYsWZQqhbv1sngFn2eyYsN966WjsLD3Yj1W6F1FB",
  "key30": "4H1vLmtuVhJjE7xhQdS3W1bBmcDf5REzpPXxN8ycZtKQHrVFx3gVudiHMeENZ1qSUbRMmkUddfUBE5xJf8gNEVKE",
  "key31": "5tSJYnSv1xgcZxJ6iXwbsjL38DtNToJF8gMeeCfzS7MGTFDdV1p2AHvErgCLG9v3Us9jcgjoBdgLVvM5o6qfocwS",
  "key32": "3852w5qchTaTtSroXZS1DKpg4gj4y7D3hLr18CB1GCCuhgKng3MgXRLwsWKzopAEJFEzkRPe8cRPbAuERqsq8WY",
  "key33": "z6yhvUhm9orzV2t5ZDJRfc7G1oSJFSqBD8p2zVoNoqjXT4NPZDKVPuZoq4hoHrjXPuxZpUQBx1435mwL4H2jjYN",
  "key34": "5CmbfmwFC7nXE8nqo4FMsxyJAQi4dBcAovKWMWsjBrFfteF3kbHrcKCsSQFeVf9WPtjrPNwrqHT4m25Gob7KXvNX",
  "key35": "5yfgDM3wJc8BjkMSVDb3XQad5nqSQj4KWNQ4y575uY79NYtXGrHNhJUEtpTCZk2fug2sad2XNy65XAY2KpvEddJR",
  "key36": "3ED8HuCSP2wQzpCDUVi7cgL19Sp9wwyL4VpB6BaeiX4hNpa5NWzDNgnSgScpB6wJP74LfYn5qAvnpPdQW8JX6hDq",
  "key37": "gitpZvDSQKHG92DKs7hNkCXMGLJYReaotXCz58k3Sk2RYGskW6jB7LjrWaakikMjE4nF3hGtSBt3w81NXPwrxvL",
  "key38": "5wzqErxcw6SHQMtN3U8iRqpEDBb4UJMRDuGMLTLsTujaxmZVKdeu9z84wY9jgXz7zAjk5nYFZiaQ4TULvuNzvZ31",
  "key39": "4knE6pCAZVwHNs8pP5HkqYMHx25VKPFANomMwKAKcykKXnS4XGA1GSSzoisPTLBJimtSL7cueECHNda6mFbZS7hZ",
  "key40": "4LNBumhLFWK7EaB9SorAJEiVpYKYmLB1tiZTVUN1Qoz8V4nf7eioqQmqsnLj2ktbjgJSy9SAqJfsAxyagG1KUswH",
  "key41": "3iWficS2zxM4Ykxs9S3UTwKSKnQ5DFEjUcCkbpo1qHPmoT16Eg6dqQBLqrLmWA7EN1wed8N2hX5odPQAwtYRpgJu",
  "key42": "G7349zW1wdLvL8adrcGCe7Pa7ncFvpFmo4JTWAu8voGUyKL1ZywMoLKfobdo3qxAiMWxW3TFhiXc7i2EFb4TTLq",
  "key43": "3FSgSn1DBvKdxJmrtAFH1KmU3n2UrfWbBqbvWSL3HxtRs7qbMT8JyLehRFRZGMgFAmNR5aT23tRp7Xi4qNvBgyHt",
  "key44": "2JzEjTcmm6UyfPKNneiohSMr6qXotJh7w4bxztu4Fxp33hciBQLejfovhgNX71LLPh6tKBjtvZJPFQ6kdAgR9gXP",
  "key45": "3wt5utkLrZxadMjGefx3TZtaiFJ63ADmcHnGUWxQQzXjCuGDXY6UFpZ2x4MG8QXKbibUCK4FA8JK2zmCs3tFqPg5",
  "key46": "5yHakht1q88DfF4UVriNxBY4J7KuDUM1vrutXggDN5TAy5cEaobVNbCfaDjSUy5Yb9vzDR7ySvmdbDMepyWtyBdJ",
  "key47": "4oo7GuPttRex2wi8H8Q8RVZSMLav6hdSefGJ5qRxyfWQLWrz3j3Vepz5Y2BL9R5VZhhWxc7SJWYnMsuCVX3b1Hvc",
  "key48": "5UYxBuabxeSaSBY5p3VrptSrGQTVepsf7yNBUmc1dWA75r8ZzJ9apn3z2oYNScJHFUzxDf9ugwtTHtDGadatCUjs"
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
