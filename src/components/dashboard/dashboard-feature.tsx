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
    "cs5zsjuyg4DuPydVbKFyyKSWZAeh199Rds4d296adTuoNK5kWdweSntgYofKrcFKaQmA8vn4p7ZEs985V3iHEVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8y543AzoLrwxNgH67nzx2PzNgJZ1iXBifCgjR9sjk3ArHTxYGvg6FyqmuZjyAcGaCXJEc9h3h6o4jfLamDwDAY3",
  "key1": "sRVyZGeKbnFnUGFobTrxJVnzfq4Q1ynvnjLa5UctXQqfe8dr44ajB15wcKn5GVJDt5hEPmKrq6ZcqbAeTVJ3JNY",
  "key2": "37EBWWDGbBAh5tS8MNMeGQ4gLRVftX72nm43UyMpUQXEAdmrG4HPHichFKMWzJ8agx9iK27L5XqDY2c3iukEPQWi",
  "key3": "5rFmvgnL8N9rosUzgt3eNgty9uo3PVLiFDHxbmMKrSn3QmfwSHpDQAd58zj5eWrn8qL2GX7rUSGm993FX4gdBNvf",
  "key4": "4nqHid57sAoADMGqc1W9J1fsw8FjrYgb2RwTkRhhGKcJVQ1AHC2bzTCNxdUUbPhsS6MBp1z99zue3FEsjW2knWAT",
  "key5": "ZUzv1PCDCzW8dx3z93yc8Ls7c1Q3kwUEFxMqB1BxQ9a1MX4mAHcUMmS6qtLx2qc1Wei5C4U1heMZSV6sgVaBahr",
  "key6": "2QNxjmAhgePknCfWx89zwDfm5acSiVhtwBcGH4t1g1wRB89RXZnFFZS7b39JZSzd7RemoCn1bYEHYp7jsTqfWSb",
  "key7": "2mHG2vQAjrWLE6nSiuEkXZERKKy7xBS8a2QrS9KJD2rq2Te9nDzrKx4dqFMbr2c8cW7mUJABV6LHgCpoNEn8asoq",
  "key8": "5MJeoKwcYZsXs2wFyPoEfwpA9pqGvN6LsoHdJ8vquk5UaqH9zHr6TLgTAE2AN9k2jtxZoxZPs7bqtQMJR5ZfnLn7",
  "key9": "3ADRPbt1Ji7iMRx7viMskhxNMMLc78FYDESE6rsmFsSaeHKCnfu3WnXBeMPdDP8LbsqVp7wdUPzpbS7MPLUzDN8Q",
  "key10": "4uSp97yBXXS7iTkjEh17Mg3qjgtxjjhArjxVVhthVoteASYUdwJgKH69YiUM8WGMMygxQpj6t4SVi62W4c9Wrkyn",
  "key11": "3YzpUMBadHAraAwyqn4rxFAWH4M9hcJodyEfA8PY8Xj9c1FQn6JYafsUyuGiNb2HhEXucZaz2wKZQaVyPeQVpFNc",
  "key12": "ZF886CUppCdno4YHb3TdeirVaYGAQLGP59GSfNHPm1Vd6w82a64m2WmKuCmxw7v8PFKGFMHmCEKQGTTANEfDM5z",
  "key13": "2HneQCHSvE45kzgfAHGUy8y9usvyNjomzLpTJUU42UmynfrJNWD7yZZASjTn75bKGiqcHg3MDsHKSitzEWYyMUms",
  "key14": "44dHo4PHycxVrU1BPgA2T7EDZcKZxrKQJf9W4xcSbaZMbLnRRGdzfANFJoQi9veE2JABCNixWTq9rbhMwbxZ8Vgq",
  "key15": "4kvdT9NJcmY4R8en7C1Hfq4HCzisyYVFS5zJdn5jspdj988k8qQfMW5Sfr78cC5zqENHtCV8P9b9AqRfYrZ8VMiC",
  "key16": "Q5u6ddWqLNX491C6cuY9RZc9NuBNQ5mUHHzkyvZPFWZhTXrFezEbiQWfgik8cp1uu2G5HvWtHXpG9qAKyNgHdqo",
  "key17": "5mw9H1BFCtAdSRvkhNvcgD4c54FxyNKSUrs5HELb6F3ud7mocnFWVSVJSSBsfh3pJMiuWAiKBvzMGWAThPZ2ArAT",
  "key18": "1267C4QkqVKY93gjxaMyfcRKS1kBY8a8Dyf7cTXYMHEPnzmEdCs7GbEZK61K6W4ad49mcPZKqx31naWxBKPue49w",
  "key19": "3Z1NvLeqadfLfKBUKb3TbmuVVqo2Fbkx4nEqp8rqmya9HvDpJQUqUFA4bgsTf5FxZv3NhLMmukAjfaH5AwifrDpK",
  "key20": "2QHgWJ15B78aY3dJuF4KUggXYpd8GKLsgz3egXG8a2wFMhZf16CpSak4ANf8JAQfqLFCE2r9z8DD9QTPgQDBHc19",
  "key21": "66VQDbEfbHEjsvYprCg5FESinThX6SCaqdRvqqUidLZEqQADvpdsS8D1pAWC4dBtRVzi5Ak8RAv6UXAdsozsZRVL",
  "key22": "3eWZ7WRemvZKtchjxHcbdzJJa2YwMSqAt4Rfh33eQap1kBvKttVkH4WL5CDQYtccV2Cva6hbh3Q6aahCvvDhjRM5",
  "key23": "4tYiwx3veprspPhJ4NpaiEdzWPaAZHGD814BjjfQeNcJaN2J8DXvbatK3rRUhP2NeRR3itZCRM1aSAyRSn3TooQ",
  "key24": "9gPMkMbQBHZ326VueD8K2UgSiFHq2nzexQuG7RPEYJubc7k5pYnX14vj8rh2HysbsT1ET9aWtaJsnj2YX5BoFjS",
  "key25": "2HiK7t3YNrrqzNwW9ag1QJrAzQHRxggrSFzJWz5U3d7LjaQo432RVkmEUAsHb18FneiArgWxtxL6zbWrCPjU8okM",
  "key26": "3cPZVxbgL22RxLMdBZR6ZS3r9wQSt2FSb753U2jiD2GxpH397vL3ygVR2X9Yt3opTtpb8WQeDeLvuK1YZVynmHn3",
  "key27": "3L8yjcdLvHurPLpKvnxbgeGAqJsMYtAU73jXMYMb83ZLEiYZ9eebUGoHBs3AUQiaitK7Rj6ZrHEQN8M7yno57H2c",
  "key28": "5ZMP36ZsYvWRtY5UG1hfPu2kEEcEjm13MyQ3RgfvyfQ9iEES5aduS5nNn5TX7CLqFFPxoVjTDdkqaASdJM16agGC",
  "key29": "48V6JeoccmJyqvYG26dv7U3jgkFUJGp6nyiWB718GUE9EqyMacp6H2PLMC9GDzS9ctyi4ZHzh52NaACpmzhEfo7J",
  "key30": "4b7hZkyhf4kVkPmcFLjuWLzoBtqYY4hHZ75nSLyjNPtp12y52Lh36M3sqaD19q7d1K87Ca8vvxmzryxmzC49P8gL",
  "key31": "3ghonRiWh4Vkn5p2G1RiWBiXBm7grkhuE2Q7vdaXxSxaSvXnziKu32WfkUWnWGDuzLqqH7GmdBjwwDuW6wqYHnnf",
  "key32": "2jXrPe7acA7VUWaVNsasdcJFE74XGA9An1qxWASu9PgntEHzttgnXH9LXAmif2kbTzBu3rXGEqmUYAEVbkRRp7Ep",
  "key33": "2RL4YRVd1HgWcVXy6Kfk7fURP3bVpALbSznd4LXDFmrxiRBVTw9bfoYSd8Y1DUfDRZGB9TPLFUFqFJDu21Nw8r7s",
  "key34": "2FVNPdZAiNWu45sxsUKBy8bVEdEomiNbrzSqKfCy4NrNULZCuvzPL8PizH7NPVsCQuqGfrxhZmRdDqwLPNjR4MQb",
  "key35": "42LhKsz3f6Ymu72JnosfqeunvdQHhjt3D91jkc8ExKnbFUGf6UZu7WnjPUpFhpSPzL8oBs8z5z9bHpjkBGh3jyx7",
  "key36": "3a8uNgpNX3Pn7KUjLkUK2ykjravVVmk7JED1qKsMHJSSyEPR4PMYP1cnXwdjkGkMQB1v2zrXpQH4u52AoqndNZj4",
  "key37": "hDNLDBcsJeSa8C74LqHJM4vuPPtmbXjB2qXm3Tghni1bGSXLy9856uND1eHacSCnVA9EerfERcFqe7WUoh87Ucd",
  "key38": "zeUJm6rFwoJeXNLxoPq7124iPoj1rqYLuE9uVxXXmyuCaph8pYqwNWgZF4THP9Njsi4zcJ1MtuVRDtjvWxe1hCA",
  "key39": "3pMsBT6BRvXBwLJXRivePfP72UMHgMW6Rkq75TuJpk1FybTZobSmS5eT9MqABpJcLA9pF3KSmDZVoEVh46PgJA9R",
  "key40": "bUizR5RoexQqLsyZV8bLgYSyhv5wbvHrZZkZoKhkzvcGqB7mbnYAPPjc1r4G387Bf6ujec2M2vkJLTf9K1Rncbe",
  "key41": "5bWGAMf5Wpo2SrYraZvWngkDGGoBphdFL7E9NDfGH1SayntZMhJNcysBxRujiixsqEQ4aCQJhmQVKnzJkDZTkfk8",
  "key42": "3ZiBnFa4b9Nr5aRQ7Gpty4wYpoRjmVcUYEZEmKd3fX6RfVroTGsMKAUdRDePYnUKxQmkSAqfSaoWCGUbu3ugTNYH",
  "key43": "2ttutgm39CuxKEfeKkCnQL3XpNpWCLWBFHPg2p7g9JiGmtyJFv4HawJNuefBxDWaLCj9w9FBpfnecG1JTEXocjxx",
  "key44": "SiJJU4W4tBb8KaZjv8f5bcyPQorxYQbkb2SfYNtSXxftj98w4zFEprX7ZTs5NVjUSQC6epeKLRcdogvZ6i4B2Z4",
  "key45": "7PzLzNhr6KCYm7F9ZXBLohQGRbZ16iWKzEUix56tLPXCBxMtufzsUYkFLygN3WkvKVxSfArxhXHkAdBRSZy563h",
  "key46": "5JqkpaFpRN21ovzBrbWTn7GR6ctk7Nk5tmen2EYXvuwjAMZUu4y5byx6CwkLHhAcUbPwvMxgGoj1J2KHbebvq5X",
  "key47": "ucTV1ZZneZKTb3WQ1hS9Ramt5MxgKKokkU6X8v6mwP3CEmQrQbjt8zV8yMbBBJ1VkEezaCNk6wprxYNSFtyk973",
  "key48": "2epvMiQzw7WGje1gqjSbXTY8KK7uX42VFz7qJtUWfGnnbojW7aqbnkmhZMfvrSbtJd61RaJSHnV5RfvBwJLjt7v"
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
