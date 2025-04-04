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
    "4K5nb8bDLz4zUAnnhwqg1Qa67Q98SAn6YKrPdUR3t7z8FutgRkUimjSgxuGeRDZSAhny3MSJhY7MJrP6sg7yCXEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SutCKWaV8BcMuQL8kEpHUPeojWZULDaLGEXRDrE63SSKBcyjMFsJnSoLrZGW9DtzbGGZBD62RzHW7L94qe5aSnT",
  "key1": "67Csdszs6iFGV5wooTva7LDUwvDWwXBbn5RPPFmWnfRUQeuneNDTu1tQpgKixNq7MDunaSx1oNDB3KVd6cD4MVjh",
  "key2": "5W18fTh6U1ep8foCJ4RAB5uz7pVw9F3jdqTGJi3SNDTVeBKrZkkoJA4qSuVxx5HFFwk6daE7FF8XUWjF8D8LTcDu",
  "key3": "3wWrSUPA3nW4g5cfxsi9KnxTU6tuHdzrdXkCsAQN7K57qM3NyzPpN4w3sPNMUQQdBbfks8TbEq2WR8d9WaGUzcU",
  "key4": "4ZuptSkLcpZzevY8bqV5Nv4WCKGT8MJAyLdxdMu17vujoe3rXNoLTPEWWYeMrMqnPfoTSMCVjUC1tMvzZhC6prXE",
  "key5": "QZR4tPJW57Yv3syERpVRuuGZaFVSf9c1Skaar5EQ1GWdNPGqSHN5fwnomocan6LPX6EqHTpyhH756nCWHvo2Jt2",
  "key6": "5wLwf2bCoPpfJeJNTeU6Ppz2SGdckTkiKVGXBCw3QGKgQVsQ7xZr2y1yEB3kRvD7X4ZpzVLVYNurzvvysbz9pgZE",
  "key7": "4KjwvrtPZtmyyw8Z8PTRgHKWrhrVHZCo4FDfFvHTb4Ws65gjqrVo1X3CcE4vwTNGtDRD9PAbvpnmCc1hXEE7B2jy",
  "key8": "Veyo3Ax47dYMLpovLCt4tgX3ZY3DeGrigyAJkAPXycV38hdQW4R1dxPfRN38TP2CVs5TKFaHENPZSGTjBP5Svz4",
  "key9": "2ELKfX4QAz2KLHv7nXa2hmFA7ieedskzT4jPumkYga6tfqsHb98ZtDsE3sgXVk95WUYieeDrDresskj2oSHm1AsW",
  "key10": "68rHQRUeBnYVYJgmhgFKcQpJZ5GUKPYrBvs7h7GAzAtDc5R3DVTUkG8TAWN4mUYiz6a3UFiTP7Dyy6ji2NYqZ1B",
  "key11": "5qq6TJjeWCkxq4Ue8Nq8Tdr2RACnk9fN8YcwWaXZw5BQ38wjxgixqq4jzfDHJ2KopQfzKa24WoQQTXWpqJ1p5GKk",
  "key12": "4ti2ZVnreHZTuNYXmxKTngcfQnghNWKQMs1ihE5c7KqWsuS3qkseaF1ZaGst2sFutGXFmXfQz3Yy7SxrdGF59488",
  "key13": "2wCXqPLxY48vXAu6HUbniW5hVRUkQkDRkGxC9ZCHUoJ61MuCxzkXH9eXm4m8ZfuEMHA73YRUVSeSu7MrYu3NNPPm",
  "key14": "2YUaMq5KY1j83rWtH4BKAVuqHi4xf9VZyJs16aze2R9KZDPPTgzEZhZgUdsG239edW6rsPhMkddkhULgRebP7pu9",
  "key15": "4oVCu9RmfzGfU5MgK3SrJsjfpFYBBPkm9WjBx7zLEUsGWudWLMx87aVQM49aBvVctBbMJHLjQzbENR491Z5SMXqP",
  "key16": "31QWwQ5bWe6t5yPuvXLMNqmVdrUjZMu3k2XWEz3mKsVKcjcJRj4vLurv3PwsSiwxGZgBpY78EL7cBFfH4TBSFJbu",
  "key17": "3UKW5U2kS7EvCgB3FkLPkCe3QZxjJfnXmob5ZbFCEDXjNetzBUBYUdYoyq6zWreMvUqPvXqJEVRjafxMgTAzK9XH",
  "key18": "2kaBRWmZiW5nP5zeeNCpatdEtaCm1YqC1uKHBxw2tA6NrXV8iAZaH9PN1MTyse6S4fWw6UUCu9XLBiZ2uA7WRsDz",
  "key19": "52RDoBZV5s4JioavyH668g4hfAGJVU2zcbpLmo2oerXdsAXYcWpcVV9QGNCRFQxVMwGFieYQMgfGeUTeXMkmH2Au",
  "key20": "hEcunGmZYw4DZiAXdSLoH3MVXcsxDGMbbG9LqU5opkkbYtfMrZcAMvdGTuTWyxLeQLJEMxxKYu2twfbRwJQB65B",
  "key21": "53WGCEW8zGn3nL2d4XGX8RDsD7DCRsgv82t9rv4UBEoks9vwF1U63sP7pH2ZqTLGrTuxDWg2Ji4WYdwvb2ak5JSw",
  "key22": "5ZxkV1WQs2BEQoRfAmvbmXVUDWo8zMU1tBeZRhmzQE12KVGBV9ZXMdUcSj3SDibR3EmoJbeRQrmunyqpJ5k1RhGH",
  "key23": "4cs76gPS3cW5we1LRZ2rf2Nw4taU6W6wUgcUww4CsxbP4dYev7GGUrjKrcUDeTTHLWxuVgoENhnDeEQgfCzoescU",
  "key24": "kvaAX6R56R2Ff1ThcHgkpC7JysPDC9wjyKrbdmuziHLrvqjMJbE58QjB16zGUvDv51V8WSVT7qKoGf1eM9rhykH",
  "key25": "4j8Zv6sCmiqwdBwD4GYfehj9txgJbiFcctp8NbsN1uh1h8WLkrt8mu3qZsJioxiVXgGfxcn2haxbAf2mZ3are5sp",
  "key26": "3DPYfZZKUC5udVFmSJvEwibmiwwSpovZnWgnAtRjsyRkkvsjs6PAP3v9o7g2JF2vQb5H1PZmZUPKZQqeE5cJsnF6",
  "key27": "5Cd3PaDDBT2SjUunQNvGk4h7HaZKnUu25xKvAPcPSVnvmYeCCouFW4sS5v32MfyT9yWBVwK6KcBxhBS9Unp16a7F",
  "key28": "4BxNLYDsof6SifQKx7RXFSmwnsEGSrjFsdn8dCHojZrv3twKNCnLg4vonCv1fqKKLS6pFGfCcT6K9CG5rm57yBFX",
  "key29": "51QsvKV4JcmyfobNMsZWVmgf9MvVvyX5yzsSCqGPBAFDfWdRLps3n6PTLYmSMDSGv5gJaq3HKYMcvovmKh41DX51",
  "key30": "3UzuzsH2Psvq7Cmks3bkvMPVqxB7qdmzAhBS7ffActG5LqAk4PJxMLFE9aVzVTVyPfin7sFEt8aSCcQw2v6f7Ur",
  "key31": "4hYDAuiCbVLC4Yq8N1YYa81epnaTz6qB2VKd9EAyAFP5xRSxMbXv9UTQMX9B6jhd6XbVsphqWoUu4RXftFmZowL",
  "key32": "8FyMrvrV7TQ1MChgdX9rtaTrArEHPH3nfRCUTS7WiqoVGV5sX1WJ9JVxhknSv4zE8FCUvBcRykSDhyfkaiuRksF",
  "key33": "iDmbuVFVg3NyMKomy67mKs7yEa2vAEPqjKj5tDuJShbNtnJGQqbvpegxgZRXjAT8ojuC1RmZ9FbRD5mUQvkiB8s",
  "key34": "5mnxUg7KPnwAUfCEqTadMr13q6x1pametcfpv6XbiM9LHWKByJSWdQruC9E2BP5Jk6dMAcntdu6NPbjPb9NPtzuv",
  "key35": "39Mk1G315Gtpzzqm9EHkxthPEUgtSYwsW3V3CyndqtSm7tZt95NzyXULyXNAZbSYXTiek2eaVxotp5wcMLN6d3CK",
  "key36": "4kQYWcXbAFT3QWqjKFUQYpaZ9kUWedNbgiQJ7jaxrgyoKhHuarfh2shy8gVa4wm9UaV1e6v4m5Gp2AWQRy9VJrD6",
  "key37": "4ZwVbJ87jDWWJfwoXtMP5C69hupuLGfJwDtdgvJVisg7msye5yk5JLM2bw3XRBnbZW8GEPGK2j1XEXMBDXX5QFa",
  "key38": "5j3s7YNdF9aDgWK77rGkouMkxPBkWoHsWF47WtAmibL4uTm6jXHnqEHJu3xMiB8Uy25kcyXXRiJ2Za1H1wMTijUY",
  "key39": "2MkCw3DcJXQQgBi8g9umgDfhGqDJMiJDRMweGDVZCT6Hx7qnHpvtnb2J3j4nD9gAaV73FAcuMfNSLUNZVinRPA68",
  "key40": "5iPTYJVBQ8zZQykEQqjQAQrfhiWrNiFKJUCVjG7CUTSxmiTMPF8RcshKaafXsjvCwVd6PqcZkdt4Sg7kuf3E6c5c",
  "key41": "moK81Pu1eZwcJ68H3uREAZRQGUQ3XCdgPjRiUffY3DKgfoqYsz4zLoY2PUtkePsLqVQvK6zodFmc4RFt5sGNgKp",
  "key42": "3tKTvjyVFofsPu5j7y7kCb8e14VBweuPv1ojHe5tCyDRth1NNowSLqfT4UnH4bSDHFQLVuM9MUPEzVw73fYiVNT6",
  "key43": "5PUYzfAkyz7SmXGiqo5qYpCjX1QNYX73srWip3M5vzo8QHFwfxSRpTv5cRwPDUxQfTBddrnFbZDftNLoyLoERUb",
  "key44": "5yGynEuJFatvaZpJDNwRLJduTZUkqHbje5P6a3sMpViUB9kGNpL2ocUHNqGwj8w53x6AmWBbCxEmGMTq6t5MpLUS",
  "key45": "2XPWcRgHJooezMgZ8wcdpUFrfn8ikL86fHhJdazv3pgZsyRC3ySgeWasSLFmyyf9ECH4HmN9PMhB1m92r1iKfyLW"
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
