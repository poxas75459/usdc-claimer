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
    "2Zn19Sp27pL2mJWEnDPiuRjFmRQP2PF7BmgK3GijiLGPV6Rgp6xSi6cGL4Cz3ArBfyomS8wxB25vd1tNhagRT3ax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rmhtMdegvUhebnwEUPp8FhGHWtmUNoFkciTd3FRgxycHLTQSCJfoYoMLuZ6DLTWiyphbqLcaxZ1cadwD8veWUN4",
  "key1": "44sGU4TC9nDB5LfbupBxk9z2jgjQunxA1s4rB1zDnnwtMTDwRH1hU7AysV9yUCtdFLtnDRBJC7difsJ1DHALp5fn",
  "key2": "3Rkrvjen6y9xQqWgMZy6U4dp8sWMtAdfSkpYGqQwmhtwiHmCymvqphzbuJu9wExYZ6JVNNVntXHY6RAfuw6yZ53o",
  "key3": "57jiaPKg9FcmRmAjvav2Dhi2tMSEkEBHjr9XtddTTzpijkfx7EPXJQLcC6F1ST3Z9eWpro3HR2rWDrc4akHH4AbF",
  "key4": "53KycMD6r8ggXxBMg4BGj2kVw7md2XTqdqxtLjQD8R37pLo4KcNhZ6jqPueCsSUzgYx4Xwv4xRN2hrDSniBcNidP",
  "key5": "5gaJx9eXiE4mrT5CoBa6csmBTW8t1dNs4vxHkSw9RfXQ72Z77bP7FS8MdBMzYjVNqgJrDG6kHxFpg8RogAXqqWoG",
  "key6": "3UBi1fmiHE7QwbqkWCm2WgekdoZ5avg2rRm2PzktoJ5PLsg6WKxS9Bq1vfSwsQjAt7pFUMcC5AvAxGa7rYx6kmVy",
  "key7": "4XdscBcRQwCMPtzMBQRn94uGdrPtoDmUYmCbye5AWAK75aEgA74dAgeQHp1GR5cPzakUrAfSZdw9r8feAX9XsYxj",
  "key8": "4Lg1AdSnZBvcMwzqx7WzoFNcFGHds7B4P4qWbtXTpSvLCTpeNpmjdEpzbUZrd6iz2rbSf4HcMbqYUa95wTaPsNie",
  "key9": "3jg75K3pmetYdTirMtvjDTWEZGCANiea14Gbd4BG5MP1pp2U2wVaEc9vVcu3bq4KHXaVf55jEdMHmGuHXdo89kyD",
  "key10": "2hgsn9epeJJzxvNBnhf3tjpoFg65aJvSvBMKNZyEey7SG7MxDzXBmJ6JQem9xKurS9yyZgFRJoKmZzvYvDureLsv",
  "key11": "4gmnQjYg34D1auETQdnwhdMupyzQhy5deZBvazSgpgVuxCh6dTJbHbc8Qgf45wM8NChugFbyQgz4zE3oqZNPC4EG",
  "key12": "2YbYYWChQb8YwADG366ty3AoXXGfQ9dptx6tvExYAupMxzd1DjhuyFL61wZnLXTxvgwzX4mxQmz94kjE5mBjsrTB",
  "key13": "3tPXrBm15sApo3p3eLxiXyxWH4z3RmXCvcsRjoEtmemzuQjnoGzhFEuKVqMqiehpcSoeTzhsbfpXhH9zvCWvUKQz",
  "key14": "3VvsKvmhyPcZ4R7sJAQ9C2utKzAN7nDDwbD4r3QHFAqCU88qtzLzXgBfEVBTdEySarZytqFmup7hcFGR5dEr6LEE",
  "key15": "3vDFkybtoMWsh15AkSrFEBopK94LAChfgViMRJbkHc4KLXbS2Dr9AcSZfEJoNzuUK3vuptoz6SKk5nfTzau8p6n4",
  "key16": "4vRt4ixheTUCKJaMdt596Uo9cQQ3UHa2TkV6M2zXJ6C51yqa6jrJAdNaC3R5R2PySvSSEGecBnyAsTEahYJzpMEc",
  "key17": "3wYBcRiGui7CzRTifqHnKpDMZjCMy9QCARyv791prExZoXRtAFXwLe1KqQj7DMf53DYYQVV3YmjRvLwri2qEX8EH",
  "key18": "2eh87waUTecRNhmK9yEnBiqszxnJcYqsYzXHUpGLT2FNL5Fg4HmF3iMgcd9smQRemdnVjB4u2FxQQ4tLTmUnDqgd",
  "key19": "fkjgEq6zsBapV4fUuJpXn3SNz4s2XkZFq985nJYP3MDemKex2yV6EFaYH4FzL4QtuqJxepD4NX6F9Mn1qSKwu4j",
  "key20": "2g7SFZiuKPUgfQ2iMeXGZmFCTM4n95uX3xMbzSXSz74KW1Eh5FDBRyf9sNgnxNSSYpnGsk8d3op3cuMp1r6Tyz4h",
  "key21": "4cASSCX5EdzeT3Hg4quWCnG4aoR2JkSda6rvHmnXdfaoWMF9GEo16MGkzhqZQ5H8Qhori9v5hBZxCt7ZhKynXAzW",
  "key22": "2YnaqdtZvGf7nboX7CQJJtZyJjTnjGwKafN4NokvFgM3wzsBqdDv1xtrSAuHFHZXfKN2NKiHsRqhdHtGaib8aowT",
  "key23": "4XvZpszxpwZcHfQcWWeJKb9QgWrWMvbyW35iY4gREr6D1Y4aTXptWoJW873GNvs3mzUokCwQwWQGaYWsvFVk6kUh",
  "key24": "3MZWtKRcctsAaZjBnf3T6B3EZKj466VdDWDkAP5cqDXnXbDgmLxqakHYVmeDsxEeMdRo7UPkMULHEdyoFBGgRCvU",
  "key25": "3oQJsrBu5LYQsozns1jn8armZaGqJH14qQNjzFfnDpWu7dGYifrvHTmkVq9Dky6PwMffCZzkDR7rLsQAcMXnAsh",
  "key26": "4tspEVvRWD3D2x71srxeRNByQCR3rGVoHXBdZy9HJdGZ3YJmQqtaoQKFYwrckfRKzp4fNuwEokmQdpMrH5sFCE8m",
  "key27": "5i8vfpU8R22uRzzuUcTdjq1zUrZCBjLH5eQkCUtMfLg7ujNcyGk7SYTTG3rkPxecNrigQPTQ1i7b8HLUsaaNq4vE",
  "key28": "3gkqFSoeVNNi7UQRu4er2Sq53bojpJqB9HqLgHnMz4Kc67UjPa4U7jbHmKGQVC9DJTYkBEiaquh1HgpwwFhB8fRo",
  "key29": "RKUm38TkFuRXC2GA9baLUgD1nEu2gbst84Fg1tnLN5Tb8g9f7L3HAP2caUCY72nLEUev36dp1iXWJimpAmAZ1NW",
  "key30": "4tcWg9UPQorHenxQ1T3FgY7xxp862aQjTHaeUXNtYGhaxqM8raFx3Mcr2ykp9zHpows8xhN3oSyscTQ4uzSm99vH",
  "key31": "2Hig7qxihioJkKkgoaesGY81JPX85hvkn3MKzMiLRCXLhdW63qBbqxYy8EFMWnEWFw9u8cyiMgh9eRgM7JMn8DyR",
  "key32": "5fkjzWqiov2gxVEzCyATtDQarvQuyGkoBUsTU9FnHHznoRXek84zLdFKa3biDSmJNxhgatCAKDUoek1GvLaPSCVm"
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
