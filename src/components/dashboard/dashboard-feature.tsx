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
    "F4r6zvTpkKoKjRrV7Mq1teyKqkg2ggt3cC2RZiypWQpxydbQeZeiWfvhFveg6Zpc54QSmVon1BMAVEBECxJBTJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EERj9dTLiAwJ3oxSXqxkFFkXF4QgJcdiNAdxAquEKZ2BsMXp57ZJW3K9hy9EVFaQEs3YsME5ZiLsxqYpKm3d2it",
  "key1": "638uhELXVHCz1k6bEshQbKpMUYRGUmTDTHRAWKMALbBLbfyYXDEkPT7ZN7CGSw4qzmknYvFJgmKCvJEuK53GzYWB",
  "key2": "a9aHcxgZX8AMAeQB1S8xygaTxKw9jED9Ws4h4fK7vqFRconxYF1s6QUCj5FwNCbRPrqRJ9TyBH7bchVMQPsy2NR",
  "key3": "4MfbtfNh4wj4ctRpxSRQWdwuwU4Wr1t2ehSdoobt8jYy1YsrCfv9zVh5ed5DHUJWLsde7JRQJaPVYVJGiUgfCng3",
  "key4": "41h7oz9DCNydBuxdL93FbkcatEWucHr9VE5togkdhetx2Vimf2BKrjia6n1hoQUfYUoZPeYuJ4o2tsDEk5HZLgRD",
  "key5": "4Qag26ejd8jBDpGEWYMGRE4oEgTKxgfVuwrJyZBEhv4DxcSobehJgXPvUeY7pV5ShxTcGp35XpFM49uR3VPsNi1Z",
  "key6": "3WDDfFC7ZCj3d1QGDiiPeGuDac23KVGa8Da2r3kyWy8zhokKQtqXnzWQVAQF8mnkNppoacNGjivJfQ8GQbnAcnRf",
  "key7": "3W2vsVcG1gM4BsYPFGLxMPRTfVMQ79M4qpVz6NP63eccat95HaGLSgEgvSiMgprsBsQjpJZ6B7mmi5KHn95NZE4D",
  "key8": "5AUSNEPWzcLTbHK9oSyBt7pWwMDPrGHR3cyQsszTxekJv52VaoPxwwvyJ9xnKb43WoKYS8KcHaQgEUmpd2wPBDTM",
  "key9": "W8y8jGdf1529KGFqoayNPsAb672QoC54qw6agSpDHWQFsmzSbcy7mfKzgVzsNGt1EdzXTY1wBE4PMqYFHNebjg5",
  "key10": "2ENzxAx7ZPxHEsnGEGPfx5K5eWyE8AfNDBuh3kSSdyiBy1TvFuRTbTYJyZy36JKYdzSk15eTvkvzDUuDEG3BX2sa",
  "key11": "47v8YS2vd2LvxcGcZWS6iEL5LwPMgU5871Gb9yDi3ppXfbb3N8qeGnyV2gaX4Jhz78apSej2eL2SrfMACvDa2h4n",
  "key12": "3UpNjdMt1FJrzLQjD7bUjsydqntzYU9b5zXesoumQAExQ7KQijPZaQhVn2aQv4tTtAeJMdjyN9xcgLMU8tVQQU2X",
  "key13": "5sU9kUXrtNj4VQdECqCWYcJ77g3s5KXzrnbwjJUwoqVXUiBdUimQ8BU1jVtYpd7TcewuMjdGgmDS2Qrn7CGZudiV",
  "key14": "43QJqU7H8dVCtTXA3jumxhTZqwuNvaJxLaDJht54x9FQX9BQDXeNJrCziPmmLiwXm7KPSk43GkpThFCSsydKZWSv",
  "key15": "4n63sRyyGjePfXNbhvxjnRjJgzseiDnS7wxUCBmLEZVQ4g5BLS6sRpdbsB1nEPzxF7FkRqG55GqvzDqdBiQdsLbT",
  "key16": "5h7jWA5XXuTKSxMCEbyxkt1RpqX8qZ2tThXwRwMMxoCmJHFd9tEBJB51G8dox5rmqnWVs1Us2JBnp3Z3Q12K5j6T",
  "key17": "5no4nHsLMBg4DZFhba9rNDjZeRcLvEsRaFSviuSfgYrLKgRasng4s8VEtP9PMMvZbWs7X5B8JptCFik8o9v1W8tS",
  "key18": "L9D4Cd8C4js3zqWofSGzTfh72Dh67ckgfteVS8YAjnXxYFeZ7uxbvBPZDEbb4m9C8aVLcdnPruCvK8ZK9CwGCW9",
  "key19": "5Q22Qrk4DL11hRZR4tPAwghGNykM3bqEuxhdnzetNwtwewYgDtsA1KjvibSMiJBSaWUH727k7Jnr8uw51v9rfn4c",
  "key20": "65WuEWadWoVLSDw3uHjSNE6P2ihrmEKhR3ZkeLXsekSPYT5yCVmjnFiXuxynbzc8tZPZqsd6AHr2XiPR5Jd9E2Qo",
  "key21": "55J4vhSD4mZ3wXHHHgKQ7QBJGs4Co2tY2foit4ooz2wf6gGwTcMMakGC9GCW1EC2m4PmcBHgAkPbXQzzzmuvNAFK",
  "key22": "3V4kxdHoSAbnCPeTn2E1zW4PhguK7smzm6ZyVEy6qe84j41uVSc4e1RfrYtfzDJwgzuEc3QtbXQJFySbujKdeb8B",
  "key23": "4XXbUzAQbYGaW7kz81uQbnLrsnoz86AsVSrjBPBFjRdyPBZMCuzcYVD8PXgBsWPFWAdKqpbDFdFSwGmhjtFZXsou",
  "key24": "63T6E2oj1sA4cxA7EVZ1ncXg6itTK4mo9V2WabHNi7aPzHxdPm1X7SzAT36x4hPjBLXSu3BUevEjzSm5jbYew12D",
  "key25": "2pYhbPSN1Nfcpfh3BdKUe9hZDb2P9bkwhAYS8uQ4qmvuxazcVyT9GUSXnHMDyYRpkApjzLCusd87Mwodk3wpn6FC",
  "key26": "2pynietuC2KWjpBJdJM5FXCdgjuhDdpwEtZ2v2PeyVHTpPLkpcLRWhbh4BYLdcFGTzgiJBHDHCkcYBAViXiDgB8q",
  "key27": "fGNZRPvh6JRPA1a6DaqH5jn4UiZNCf8RdkCdeQqtcnj6sUk3H1SBUbokxVAS5TTVy1TtzMiZaMjff6miZPKCFAE",
  "key28": "5gKUcDR3ekXC5tjW84BPPycPMQDCQ8VdT33MKmiC6wEXKLVBj35dyV2JaKkooUCrERKr2DZPXsoyWSY7Ln2wicd7",
  "key29": "Cj3jhrg589pGcmPEZ2R7YDRiHtw8zYR3Ydy1oBVGtLX3ptPxv1hCs58Drs87eVB9vKhLN5cBLVwx6cVzwVYWidP",
  "key30": "39tQLJu626eRWr3LYJrWokJFbhawWse2Z2meBFHBJfzJJfJAPBe3T8dMAdnEfBoxG6T9pE93poeonLmA9RGoT6ya",
  "key31": "7yCJvAjD5nJLwCxMuXQkCeZjGQs3wjniuPTSw5LvUAKjex6vJb3U5pD2UCFVtthEL4uxHBUW85bpEJHQgjN2YBk",
  "key32": "3RKaCTjVvXJw4SyQPPmShXrYdcQ5VYay1PzbbmstMbhMmTpTVwJQcR71pkh3tcqkyq9vhAJaGiU532JvJTL7BBXc",
  "key33": "5EJfX51jsPbhp4EDpLMWbYx7gft978x1vzcBkAqu24BsvFLC9HVMnkv3EfNv7ThFF32vqUsvtNaRWNtvkRdUKqfx",
  "key34": "3A1vgG9yRWxxwVaWUtgw3p3m52qra8ktYm9qqpnLdRLAh8xQex6Bo2qYk8FCsxRasprsN5LJF5zTPCW5KL6mHiYE",
  "key35": "fMqpfmEYevkqsBn4m7sibPpNhuZhJSHEZaCvtXVaayk7vGEMXo9SCk3UQNE6tKxuRPqQLPuJjjw66TRkPFdvEZD",
  "key36": "47rMtVXUJoAoLHej4KXW5NBHzzgZ3SvD8eRQky56mgg77kezXK5CJ6nPNyrxvFyLqAAWcciC4WkchVoPtyq7ThT4",
  "key37": "2VcJdkFmoKKAT5rufH1y1Vpncsk3AjcFtYe6Pz6waMU7bAuv3rXq5BoASELxgf6g1fa8fCD3kwQxS6mAL5Nf68cR"
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
