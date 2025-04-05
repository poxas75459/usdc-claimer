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
    "4Vdj7VBjo5Uy5tsbU89hcWs69pSVznGDqAY1jA9tSzMu6G3YZF4mkhBed64zWKthcw2GCZBiUEiikPYwuFhRf2hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2imGxFrNbyceHsLPg63Vc46cBAysa4tb3ccF5JzFYPTkWcEfpBad1erb4YhFFAQqByg4PeY7A1PJsch2fLhxHMjo",
  "key1": "2VgCQMn1RX68AzAXSGbo4V7UVYZvKVTfD2m67Cp6tF3CFhHEu2jhUf9zVnz4NorHvqETbEg1akTwdSExh17kHn28",
  "key2": "32h5UQGWCex9a2Ymr8S31LR9xu9niJ83GMvKv6RYu89trb6MHvaeH3KSEMkRisaFcbFVNuMf79hBXbjUZ2updKc3",
  "key3": "P9BpamQjXHiFmCJyqzexMLD171Gmyo7BfsrduNMYJWZAXrqnP7TMQcVkwqZMaXKFJrAzRPsMiGeRz3xNGPSVPXn",
  "key4": "RVmNQFG9616ddJ3sEZ7vvdJKm8MhwEZSn9wzWx7dcjPdBMPXvDm3FckGvAFrn3wjEx7cn77EUZjc44sX1zg6sX5",
  "key5": "32XuPP9UNcieC4CXmorK87pFkSR1carLDLEDc3hb1K7i38ULaFbGoqzqXV5DEFJZwiTgT3B5GXf7T5HRDxUg1ScS",
  "key6": "4n6KetzypvViV7cCBpZw6syRpGDauQ9mJhX2DCVdQazsyRg7gD7Wo4kX9YuRQM1XsYfkLMqERWgdFcXuP1UNSERh",
  "key7": "5SwbVS52CsoucsayVdDVCdbrwyKjSSyZjhZkEATx9q35mhA643VTaghyrriaA4AE691x1khdTh4eNgtxVMHBse6K",
  "key8": "47gMvcudqzKcMShySWjrcZGWmBdd15PxXkz4K5RBmJfFxBeaEmnqCdAX5XMm9vauwv9Hn9YwqvZDWi2XQVwFHaYL",
  "key9": "3oRiHUyvQWpxSpp3u2FLinvxNyFxjnnGFaEGnRy2hSQ8SSUoMEYHTKQNDHkrkqSyUDB9hvmkJe7P5s4HMWLevE3W",
  "key10": "Z5pAxhR1CzGaS9SNAJy5HBP2KwLnQLwkSLrttFubZ1Zuy3pL45WUh63AmP8yhU2RJ1zY7uG8krBB4WkUcfW7eMf",
  "key11": "5oEySVJLtA3YSXYpWqJxtBHtMSJUKwWCaN7mmTxmXxkZB1Zwo4ddX2sfaJjS51kGyxSyV1uTnkQYh31PmBcWAN3M",
  "key12": "3MJZWERdUviaGjaLHzg5US3S5MfTPvuJYCDQhDpft23DuVwDqLqFz4dore7FoEGiPHGbbTyyvxxRssoztFTsGYKp",
  "key13": "1gm83oa2DcwgxYviaXvhqmv9HVqVvTUSvRsypH432tzNndJCe1mpSUp4xu55Netd9PSkB48KEaJxJuiZ8iiETW5",
  "key14": "644qaU1TGkr9hXUaxHVjuDsz34WHjFzQtG2sVYisu5Z9GW79P1ztMdJLsGP1yyVWSpKhE3qNS8ipk6Zrkb499XJt",
  "key15": "4JqSM2ei7NhnvcAgaBWkefkkwKxE8idPAzBJq1Ke1d8CxboNiuYDqNEe3ihPuUMybj4aAg2qJFhn1TAQHLmA7G2A",
  "key16": "2KbH2QobwmfWWMxyaLMYZq2dggS94Z13g2GspSRQBd9kqmHLQCyQiHpyqJQCC9LQjhVGwJW1P2aoiYAgonQRXB2h",
  "key17": "4h3Exjcd3WFZhcYpLwrYjNxTGFxBthvdD578z7ZS9NXjx1tb8FPXbaLCaNTP359yrbJMonzrgPjviqiMo5EV7tmJ",
  "key18": "5gcfJJHZJygiPhuLnkauUv63yXPrAVeWD8x2DoGkLnz7CRkVzFqcY71rQpXz4hc6rTBukATPMgHh8tnJa4mn4Ygr",
  "key19": "27LTziZQHucA86EhfAofsnJ6eUY9m2GzwyXzBVjjaj8LXeW1Wa4wdx5eV7Ti95t4EfWhEsL4EAC84NPFxPMuXGDN",
  "key20": "4VeQjkwAUC3CX4f8GbpSAEtqc5pM3dZRNKEFg6WqsGDdo2v8VUhkVajEmjG8fQ1WY76mrVZRPyk9mmKVFWJXe23Q",
  "key21": "4fEGY27DUs6nx7jYUkkPH76XtBoiJehs8oK7qGbHbDuq7oUaBiZXUFu9oibYtK5Q4oAcJHvdJZo1pUj76LV9AVKp",
  "key22": "5RcEZgREDKqQNR27EeS4fJuiwssJYAmwZfexw6jkgyXYBmfxjVT9Go7v6VnAzzH6wq4e1viDV4NAsEY9UsgT9uoP",
  "key23": "5Q9tCLVQTxUqrHsH32Fbi2THBmFJmgZKJQiwNjMxE2RTXDBTjFJvt7JWXyeUpqdTD8uFUrqQtksCStLmUCPY7Xn3",
  "key24": "3jTrx3JycusvzXWs33EEMsZDhoPf9yVx9SX63Qm1SyzZgZ7s2GeFfenw19WNVfSNgLMJ8cMqz3SgDyeUmbgqTQVN",
  "key25": "3fMLaWgRQA8yXQBvyAe3x4gXkHebhmbzVHjQnEpnmJoiXYdZJ62EXFy7jJu7ovUUVKJPYJ88F9RFQL1rVXwpyt3Y",
  "key26": "2BNUbiMPvoBc4epA8Jogtu1iaFSj4qCHBAwo1ECd2CkkaZkRR19kvcd2GYZTSfhh6BVxwgKpQJRr1dGBUoeBJaCm",
  "key27": "4Ej9fJUoQV6o7JyCKrLEETZHS8NYVU6v6kGuLHx3XSprs4mL8YSTW9kT6rZhUppWtEuge7fsfvrEKLwJiFG7urB3",
  "key28": "2PiaAYgSfqKrNVqiDmjuZs1BY5biA4K7cVzb2gHwYmihG2EVr8cAxnLeoxcQEGgyvCJkvk8byTW1KzUAWKcnCHAQ",
  "key29": "8oTu5R7yCvDAjzRjZ5taTqEcznERNXJ92B6jX2icu1WeiWL6etkQeTmJNtT2aKfQGWg9YJ3t6bbbxoeuFcRgi6F",
  "key30": "2FrFbDpzz4WiHyomiTUSL8PXSQkBtKA1HRNfESWGkM7L3A7kX7EVSsxeySHcmFGp93zX2qSLR1gUb8rY81LiDVG6",
  "key31": "5gcj6U3dVBEDaSizS7dvSWk4qJLmF4fPbEKrdB49XqPvLoKEm6c5pqHgzY8sH7PQVWQUzWWgA1VMwpZxgffHYQdY",
  "key32": "2DjZv7pRSXnfbGeRnHf2CVD7FHyQJisx2zsQTdMN7RD57PghJGnU7Btu8Sp8mSZmdDinBcsHSivPJD8BU3Qib7xb",
  "key33": "5twL7CgNFw28rjS6SukdUDVBqVxZ7nDCSjXa9orpgbkxqCzztkB2K8bW75oa7VKPm4JjkGZBGcQ9D96oCXbDAYPR",
  "key34": "4fBtCuPmRsh6kbcCFANKkvrNDFnFrEeVFwcPzWTQJqTbuYi5uAK625LTV5GAKL3wD2c9GuV8Hw42poFQWWypkNMk",
  "key35": "4jEAXyZTrddaQcKbdKs9peVpgouPX75x2Joor6ZvjYZnVPgmCeRW2EiRpEFG6BL35p1682gk8jvRmkvuUEzRwjKN",
  "key36": "2KJgouqQHo9BwmsfKP8UAqeBNN3dBQWLcrmWdzEQt9YTCknnN96QGxV6wZeJH6UiDgyZdcQkcTfbTbiBF9BDey7u",
  "key37": "5jcjrdJPhpfXJtocpahmT1KXPoTGhE5911hUj47SAzHR5Z9HRkWVLUL3nmcS4tumU6k544osp658xWKg6wpCHvRp",
  "key38": "3SG9A8XHfzzRBoMiseUXPgaVX5ioANvwp8XnGNdzVWY1Vy3UF5YSv9EYeeHrkb6vt2r45qo2rPxcFHZG73eZiTRa",
  "key39": "2ZuHAhUNxpq2VsPaTf3UhmuMQoRBftkfQLKfxKJdSgGM1JHcVbVzgtDYmiWnjNLYoTUZ8b39T6Gz7bcvyKA9QkPF",
  "key40": "5XN6BjkdWvEgpgGGTSB32CQGcUofaBbnPjbEpS7wnQHeQ13NJu6zH4gfwVTUQfHq2y1BqdhbUaaYD6jFSy3U35KP",
  "key41": "3cJCpWSwGwJftfiMuEtCDfPWyQDHeJHFKEwFsXznkSAQhDsFrfiE17yFq12bdUBT6Vaiku2uAuy5C2eoaFHHSDYy"
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
