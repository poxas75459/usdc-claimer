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
    "PYVjzsoeYbF1NCpB6FrXU9pwTsbzJK5eodv3EbHDEnNNdw8aBqxFo8ShQwSd6HtTbB8v2fF4tovvtppJCGDmyTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HhFfFej7zwYH1VD272aAvtLtdG8QEpAHPjygBGs3ahFUiwk2c6mkz5pc4wp2W56EWgXvTexbGtG9mBQ1rfSKieP",
  "key1": "27JfxmjMDpWhHYXYZZciW4ZdHJKSkre3D1kn4GUdjZNMv3JY9vakxYtmGYfAcP7c32v7vpJHqBYHCY5VSYTunAJS",
  "key2": "kFNRJ8VYeBjpEogHPYHcHr7SCsyinAcU9j21se7QNhXXNBt7fgTyBuRTerULuh7Ph6nzPdoGppboMMGhRZf2wRG",
  "key3": "5m4YDBcL2dkvnHoWkczF2ehwmQhHseFRrS76tPVHb9jBi2nTJ3HZ2jP1PHroBpR3L3MaFEjJHBQZqEKwW5b7VRK1",
  "key4": "4csoEe3oxw27ARP6wiBmC7RRd4komWhPefNCLWdgBCVPsftt7CNWDanLmARuzi5XWP93qgG6pHuRdWxYGC2P6gtp",
  "key5": "5P7e2kWde5gRN5gKUQK1X5aa5L7CoYodEvXJ4LFyi7dUPYh1genemsz1s6qhTP5WBgGoEThi2ereD48m2QoMqDtc",
  "key6": "29bN1riZmHkqmJeSNV5vz7bVtfDST5JcpFWf3WUZMvvcxJQjf4KdagAY72Zdqf7u8ynQr8UthZ2zccd9gsgZRDE1",
  "key7": "33KZ41Fu7oboAKFVNE1ra9YNrexpHQGnnTD76QKJ5gVmxJMpAuTvKBL5wEzWRVVUvmcFBGp1zZpo1RWWd8NaUJhs",
  "key8": "4sKvC8xGvo3Hc6XV7cAHd8Hx9KFdxTQq2GEhyvS2om3vLRHbpMciCEEv9oatYk2cH2J4otdMzNTVqhpHzJEeRd61",
  "key9": "4NUogDkihE16frrmR3w6NGFNZkjnNdFhZizmRKwncSCNBS2ScLNGXVp6WQC3TSp5FJ1L2nLoartmv29LxaiRDheo",
  "key10": "2HRmp4Ez5ZgzDoXRdLwdi4ZKQ2z8RGDcXzVH77JeGz8YQALDuzAmhPjxa3UBDPZBCxsW7gyvqnCdztiijiDpKkBq",
  "key11": "39SzXp57mpL6e1mPNrKJpvGmPqD7HJ6wEY5BBfJCZonJLsEy6UKEWSFzA385mTiNZFjBbRSx1diwwYnwWq6TeBM5",
  "key12": "5ugYakgWfJvz2MLNEwceNgBn7dcjqbFFH4xgRdYLMkvQPwDQd8igeCHk3n9QJ8nwD6YsGVWSQuBtYmVZwU3UhaS7",
  "key13": "4vjSYjeqArQxYKPEE9MfJJFbgZKAcnVgBiPMpeCrT8FJ2vXsX2Z44HJxpfjZkqvwbfagADjmbVnxZs9zZ7p15Zz8",
  "key14": "5r4U2cgaqWxxx2sKnVfbGAu8GKCeeVdhEct4GBd8NqSu69nMWP6N5SJUZRayAcjg63urjsk2MCETejGaJDhfrLv5",
  "key15": "4XLbUC6PeCp8FvdiDAFM24CjemRQq3Mskf1yq3Wj8Unr2n2X5bgF9xYRiU3mYa7gtFtNpmuN1GdjhcyqLL3AFLDk",
  "key16": "67NY5NDAozLYHZE67aaoHhQ7218ahdKdRSMF9LLki8nT4VmR48L8YQC88QSZhLBqazWN8ZdKJYZF9bgAKyMTc5Kt",
  "key17": "4REsVxE1U5yNSMe8HbdvxGFxVmZb3pR9visoo2gaaispxL1hFnKLv5pv2ZH8jk9Chrrc9Ty6Dma975ZprKqoGUoa",
  "key18": "3Y4earPPuHLc3wfaA6ACs832uUMhA4kyacdSfu3QW54E1bpqiknFcmNEm3MNAAnv6myVJv217wGayjqoXXEymU5Q",
  "key19": "5nXVfYNTzn9feXGZnuSFdnMrpdaxcMVKsaTxsAk9jUKHSxTnbehZ9v33mZM2U5ezZJKugvDzbN85sv26TWKg4uoJ",
  "key20": "2YD53vcrnkcFN85JoffP9GY4j6NpDJ3f6oNqzB3gjPJKFp4K3sUVkxshc6HcpqbK62qx1y3StAjqThB3ijcGvYx5",
  "key21": "2UMgkRMGD7YBaYPj3G3CCjtqBEKxsjKvzNEgSSJwL9yuNJDMohNQJHqrxE9v7Ur9qdpYuxAuSbZCRmWXFnQgiTng",
  "key22": "5BycfYHaeKt58w6pP4qX1oh2fcEy9RxrVEvu7B88bEqDZNti52qDLMHcjcaHyN1359Ffu4fwm1J2u4FgNmdaDqYZ",
  "key23": "3aAf6SQHuLYGwbs4FvEPPUgrHbgweQqxaJKVw3oKEhSzLCU6MNQuUqGWA9Z5dKjFSj8Lt7Cocq9x3aFdzUXU4BAC",
  "key24": "ru1m4t3G6bMWLtnWm4rG6iQiegepQybsx5nCSJ8dw33BjuQ8XuTbK4yLWpo5u7TdABPgf3CiwCkXtKk1JpBHfA7",
  "key25": "28mYAvwzwdcFseqJ5kG5bDCJCnkMLZE8SC3CuqdDojD9zaFMuwv74eMY28actkhu9BVv6hjVfBQeztGa48YUK9yS",
  "key26": "5uY49hh9wXEExoZCi8dN5evZxrEZukpSFm15TZyXjmg6Kczov3H4BQMjBKxisxGQnitevCkPLM8LjuntakYo3mYu",
  "key27": "2TRyhfo6YgsqVHfUFeEFxQ2ydRsCQTRMsX3theZRTbtq5rnCuSV97tiaNQpL3c84HvgMHfXqUszg8qrALzX5SUvz",
  "key28": "3WJkPAGHAGXC7GsPdVxrTSpppcLHmnC5hKNAkA5JyDW9kCpw1JJXgNkWyiiiMFoFRCAjxECrQ3wFkJEV3XKigtbE",
  "key29": "kUTF4Pubg5S2ViBG35xG68hDdcEPtwMdCAJAtXFAYagv5W1bRkKhoCMQT4Eez4vLELhUxWBWaESmkJAgMn8vY2Y",
  "key30": "4e87Yed9VCsFz68vdVKrSdC94eSkeCg77XaAtGGrEcduCWiqB4CUMZKc9zP8jN7cAj7c4QqashEUVX28kRaRVEBQ",
  "key31": "2eZU9dcVcTvTGDW3qKHM6sFtbGVwjB692gBVkrHSzDF3vLpmGPLmNXDgqnPSfY3NCPtNk5M8YdMeerbuiESwqVoD",
  "key32": "2ruzwbRrF1zNz6FmRpjg53UvWmbSEkTgNu1S7eFUGwHTZSoLEKBffqEiioyxQSD5nDfWcUQExbWvtFgBGpZeduiR",
  "key33": "9EcPMGeHMDzyf2PD1XngN4uAb7eTm4NAKzKkn3ekg4vnpLBe4w1rp8zbgxCozqAnoMiuBVoG3RcJLbLgZpYkkym",
  "key34": "3jyRryqohv8h2pe7Qtxh47n9Pa6c6Y6BqBWjeqpxLm7m3fTiRzazxP1Sxb78xpzK9Af5WoKkP9ExTs7YuD5TJfoG",
  "key35": "2LvbbAEghxsr2Ffc5ZYZe6KFkXuUXE4S1kDuqsWqrXnQAxZriquW2VHecr6XtpP5kR7WcA4phbgaJT6Xd214hdYE",
  "key36": "5XRZMQbKXCwHaADYXp5LDtBiRjRmWfit9EcKNky3bn6ShQBdsZgfv4b44nkT4wqKnshaGR8z4Bn8g3GaHs5Dpe9P",
  "key37": "2GHwceJdcSZMCEJoRmpfdUXe7iRGaMDW1f8dtx8N53FHSYxg3JV7w256Y55SWATw5QQrsYqCjFPx2PJQmUiZZtQ6",
  "key38": "LfwPoBow3FeaFN3D3XFPnxpbiQFCGQHReno9hkiyz8jByUNGFarDpkvBJ5KzQCVoEYduAsuqnkYhNXaECg3ixkd",
  "key39": "5xA7pKPvMS59SyTWQ3rzb189xcABjFmygvNMQSAg79EjJU6wQbJGJaw6NHfvUziXqo3QEZ3UP8HJr2ic9afnXnS6",
  "key40": "wLToqWN79YGDf9Jkw9vEdaTC6JGtVfeXRBbhPQLuAGsG9cmtaiHFMAYhQrNEjiEip7ryqpDpyHTu5LZusMgbofR",
  "key41": "4u3fpwGd7Y4Gxin8oJZufxPXw1CWhGfRsd52vS919bjuYPXXuBXBGmGL8dXimsjvhFxDAf38bLDm7wZhiLjjnsz",
  "key42": "66roDrdzyvxHtHeGXeqREz6LASKtZx4TxC8JTkhENk6Ya63KYr2gePxAtthbebQ58m3RhqXsMaQMBLznhwyUnUSd",
  "key43": "2eGHtMwAJh5MSpSQF9go1izDWzbJGF8LaodG5paZFRekMTRM2n9jv9htNXQSsC4xwCP1pLdwbwBH7Q5cYMZZ4XdU"
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
