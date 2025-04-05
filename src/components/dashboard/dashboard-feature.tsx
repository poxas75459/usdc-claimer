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
    "5zjiF6Md7DHrJ1CEqDGFCW4aUvoswt1BKNrg7uieWonA8ZYbrEjzGxGkLqMJg6hRaK34dbVLFpv1VZvxc5fwFT3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1tnoLn21MyiMQ1XgxuVXH4bG6icjxWZQSoSAagn3Xqp4ydqCg3FB9FgEttEQLAc1TTP4DW9v3VDMYkMUGd9Jo3m",
  "key1": "3HcgAB8tP4zmYq1Piz4Ysj6ztg5WLSJJwRENspirbVfYpKEnNYheFzGRyMXyck4AnTUeR3UzqrwqaeWpJAWTNkEf",
  "key2": "2LgZ1SdjXqfKa5bygEMcsTUX6orUUjkLqXgCoA4LXonn8Nzct5LdbWGTZYmeTp9ZxQemg7v568iNVtbVgiYRfHxK",
  "key3": "2fGKCM8DeVVwMNArCufdGTW3gw3MR8wobXX5vjiNvkGwL1jtQLQjuLz9tandzTdwVhtXDbHiBH13CRFL7qXuS36A",
  "key4": "2SpeZmwU4gbd1ccxQ6WzgSucGsjXJLZZWoQwPUF41ECS85C9wacFQ4pnL6wPPZ6GNSQJUX3WJtxgPR92afWtyLBF",
  "key5": "643V9f7yVhhyNnDnfJQGZsqAp4xA3jBtZTCrcyoYJ8Ri9DeK957EzpfgxvrLifs4BbkJUJB4Far4gRRQcbiKmfz6",
  "key6": "62CciAcJFLvVNtdNeYSKt2S1ZAMxYiztXjeNc1z4WR9B5w9brCzhC7F4PX7bBVPn9t9pZs4zj2HR9YZbBnZ5dKfq",
  "key7": "4H1kHHgxGFjL78JTUiuJao2TjnrBpjXGyKvTs753n3tyb2KC34nDj2fvKuBAFippDprWwrSa3XRm322kBTDYsdSA",
  "key8": "2GpxUFE496RS16KBHggi5J1BnG83v8rqghv53RTzKnsy2ZMTKHRwy5Mhr1NxrNzLvVeARHkbfDGp99t4HCBTR6QC",
  "key9": "4t7uXwgBMpvzUZTS8LU8kqynTxFcifGb4AJStCdnaDeznUJhcN25mxwnoXpKucEYeUN6GED4cBbTXpuiYxzVxxWc",
  "key10": "4k9KLST9stsYqyaoUyuhcfr7N3po6XwLa6Eioo1AMUXhjBfzfk1HZQseUNMCk3Ud4JcbQ65fyDJNt2hpbpdhtkmk",
  "key11": "3AydqmxDJ9udDe7tJUxeN53Zzxf3T5cfPZPSzMdtcBbhmmCckjnQENbv16WSzuZrcs3PJtaqZ7ZFt4zwYsNwGmvq",
  "key12": "47cqjm1VkJnWH5skuGaxXf3FKsTTDqLi6Ej163K3s64t2munwH5o2BMHxL2mjnFA4W4P22KHvnQQjDHQkqxQTHWG",
  "key13": "31ez53V45JsXKfDSW5fdyaNAcQ8DLZbthiScHeW4pHYVjteTEwbSCEUKeBxxxjAoDBLgoncSa2hCrXHxiVecib2H",
  "key14": "5FeEGfH4JRrPgxG5Tmdm7HCeMnZ4ht3r61rSG7G6krumRcN34FA9UcwZRSAFiY5fG7akP2abc2rTvXeEpP5rkSd5",
  "key15": "3AT5DKn5365BxxyKRFMhRLKZXNwoBJTS3WCkAUkiBwAufb5cU1NtGZUG9iYzHgizmPdXBxHSLuxHeECnYMM9dwHT",
  "key16": "4sM7u7brdhAGb1owxYWCuxYg1LuBUPBnsgtzUPfXv7qXpkkcCeBXyop7yaa2dPgvFyDPsdd567B11dZMFWYjCGUp",
  "key17": "7CuoaohbFXWYgktFkVVUMrayFHh8as3Eqz7pf1uCJ4ksFy31Y2VjvryMupu1xFxM5XUQAhDhvu7yuaQDX9NBU2h",
  "key18": "4QGVRxPM7YqgktG392mU947aT3bQFjuufZ8c2Rn4dZafx5uALmGERJoy8UJoh9UpEuNMw8HYENCVN6JWTx2k7aj8",
  "key19": "3Ji4FjkRT71d1QfYUaSA6dWQ9kwJoETcP6NBu6mpcpLBg5eVwuPtmyjYpDwGAgKP2jkqkmRGc19vZEDnyr7tcEQh",
  "key20": "33x5BwgjQpTMZeVmPdrrBjuXSoYaMzzHtLRcUdX58nRB2DDLm9dqBc68H46yCFCz7cvzJs2LZbKmxYbtNUG8GMn1",
  "key21": "5cFHrnMxgP9xz1wcKUFbU2KRgnVqgbk3WTtKpkhTyxDJcbJkEyo2RyNYgENWks7ZWWMFA1jLAy8Z8WYGJ3WLLHGD",
  "key22": "5S9S2nzr8wxxjTybR3rzSsERFRfp6BEHnA1Yn95CEr7ZaJaUU728ubstAtfFpUpxMJ1UjjmWitm1YJFyNsjq2gkW",
  "key23": "3kqtgVKL2fMyYCGiWYz8wxYxMhXNpaCAVRy8HEYG5F66JyTRn8UEcvU5oHK2L6PgjnpxRzR25juox8gg2FXFGVDQ",
  "key24": "2ghgsAeanbcAuNBYE1QQL4twDtD6Z5cvwgp7UbDbxwPrr1FRYnvyFKTw8SyNhFfcnqCVd5i2GsgxbGLCN1eKDoUd",
  "key25": "3PExxjxJhXpCs7m2XaYCFM2jaXQK6ErdYTvy6ni8ARHErKbiZbAyHBsj2GBaMYD4EjcmN1ZVK1KGfdfAU47L1mhP",
  "key26": "3XEqBxJVhFp8jWAyo6Dt9XJKYczFn7SejTu6HrQhsDWzTcJUEWH94gJBBaAHzHjzoGT7iL48BhuxvcygnTpFD5a7",
  "key27": "35Dv99g8C2TSJyQD8y5iHDYvNQNbwYv6f8KcKFZhme7VMdu492MTEFLFtvcyimehazP57vGBfEKY4bv5n4bynFiu",
  "key28": "3Coj6pa5KAAb5WDCuWmdiWhevaKvKWaTgNxxX2GaNFiZqrqtfYSQ6iW1kKsHh2peuKfZNXLE2xDHAb4vAmJYhBQh",
  "key29": "3XtveDDfoHWMAUmDzwHptZC4Vpn5AzH3jeSvuc7CTbuxcxjDVVSjZKGFYKn5XvE9ErAcc36WoZQoAq8JNkzCZd3T",
  "key30": "ZYY7EP2y4cbfoEUxkfXajwX4yg3EFfdS97d5gFvyquRDL6GfY1ugunuuT622ufaNNj8zAWh2KkP1B82YHWqk4gR",
  "key31": "3xw9BC83c5CW5p8if1dF6eqJG1Pc5H9XAjmEaTftgq15nLecxbgDP2msf4Z6otANvUosFbcSKSVJWxmazD11e8TN",
  "key32": "2mHXNit72sPhSoKP23soA6Y4xw1ELFRcmuCLEmciM3UPogZ3KnwMyVCkTpbDw7XoiWNtjGPXDhrVbyw6BDQ4oHQk",
  "key33": "2ynJuvuLoj1Fte2VoyLmuHkig6TNn3f1YJMwUSCo5Nynchaf8AQ7BiqyU2zz5VZ8suciBDmDwNWioFYVoZbFv41a",
  "key34": "3DzVQYCQQfmwYVQRRbHunc1SyKMcJaiiQgmRhoXj7r2T5EgBzLDc2GCo5wwoodvKubCAkmBSNAAeRTVUSBZXZntS",
  "key35": "29mx543AbJnLbAtpw9b6h3LSbMdJCsAXnAyNsEd1h15f8kK99Pw4inicPanDKZe4ZbUCu2MGH7Sen4XSckZV6qZb",
  "key36": "3rJsbG3ndpv578p6kv8RoYkfojL4LDGskVz5R3JtNxDt4t2yhFNYN6dmZ2AiyK1j3LgzJCwWFLo4wV7osVmf7srs",
  "key37": "48XKxGdc2FiDWTLu417d375ih6XokkEBsy21LeFuTxkbqbzVT5fTupLiASf5cEAG58TMh5Skcdjm6CaeMw6wJWqS",
  "key38": "4Q6bsyMC6cNBVVcvPiH7Rf6E59HLjVHmb1gjRxnWr1yg7Lu1cSLJ3JbNhjekjRpoeDhSuGxyGKzKnFfhgQQNYtHq",
  "key39": "5iHC1a4VvtZmjVi1jCcFvc9pubfn61ztRwKCCGhdWfQPn2LkEk8kfuNahY7Pdp2PgXxupZyjNhbw1261RarWTXBW",
  "key40": "9Z5Hdso9i1bnjRe37T41ZMcfBw9PsiqBC5GoiKCZpm9NKmveXeDAa5w3ydWYFxoKAr68W4N3P9khjAG4DECjJTS",
  "key41": "5QmuNik4cgCW6F44UNPmeTzgQcu6AjbMsZz5z7omPKr5FUk9W8a1g7cewUqvNLaB9DHevNswWYFkRqciXJ7kfuHc"
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
