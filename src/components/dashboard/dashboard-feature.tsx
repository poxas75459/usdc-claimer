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
    "Ch2md4GqohqUKpMznLPzPwgbwHan8sfLQ3NriLNzEjQX6kkMPcWAr5hc2vskQg2h2kW4yvTfPJsiVZYkfUkPsKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hWBKcPMnQ53C9nN2Uic4G665KBt5JWQLWaabqkSrRxDytkTKYqq6NPixRJ3kAizYkHHB911QkxGLuucfAGfMfCw",
  "key1": "5uCBWuT2rzFxTgEcAx4iDS6kbimupeSfPmoxZBEXYMQ1yWPeiPNybiAUazKN6BCRgNMfiBJm9UiEyaMRYx2dfjXX",
  "key2": "5j5dJDyCe4vuYB48BMvmgRGvutti8Ta9YotGLmTkwoht7HxBPvtJWFRN8fF4xQrg4VvNXZFLL4AyzUZP3Dun5uXi",
  "key3": "iwN5Rjj6Q6zVVb8aTwuJsCFqFZFzkGEdxhb5tKBupTZNigAwWWyuuqMEvpwwsAxxjMWyUqd2RimwFADYqLZXXS8",
  "key4": "2BUvniYmiE8Y8DpdghmUyiNDd6vooHM1273od6wJc3y7HtNpyP24Yt6Gk2Bj7zcJCait7zizzkR3XdX2J28vRw1x",
  "key5": "65KdngDWcCnX8pipFTZJQ1b6TFVDgBDYihjJxSv1bFro53oWqzNjLaEaJfGtMMTJcTQwqu3i5NJi1XpR2D3sxuJL",
  "key6": "rgWpBzZozpv2oPMes78UrkJqaXWE52bk22PMd3246EFwSWAT2PQHd9hmV9DoCtsGfHBCBjT8bZWdpDruc8fCkNp",
  "key7": "5E76MMxJR7SfrbJPtyALjLrYV7N5FeNcKw41FB1HgqPcxUGetUzYpWA1uoEbursaVQKTRWwE6T9631dB8HBmLGtE",
  "key8": "58UfLHBMn8vhvcewtxHPqQCjsuuYVbCtUpDcGxzzFSxVJXFqFotmucCMcik6bCy9uCuV3emmhFrCF7Fgt9ZXRtiD",
  "key9": "4REYyLs5PXubbQD1jVAiDofA4dVhD6WhvNF9VAKrhpzwkbgrQchDfsxS6qyieG4p6vDSXoktY7wNJEMSt6H4TWbs",
  "key10": "wj241jTXPiSFFE25oLZV2oRWr1QwmR35WK2NokJhZ4nJ5vDUmFmR9QX9h3k7xFx8PfcD56u3K96Z6dSuEJzF4qo",
  "key11": "3j2hNKpy3U9Fudwu2yNyhL8dxZzQUTnpmfg3994znsCho89x1eCfEven3KdUNq8JRp4kCQJptgiyEgjFjFEvueaG",
  "key12": "pS1NFPRtoyMrGAJudw6PJ9Qc9PmprdND4AmUdcPjT6kTJcwUVBSxjW5GyRYvQSKkY5bZMFWm55EbjFYhqFBrohK",
  "key13": "34UHN7qhY5e7YxcMUTRjFMMcyfX9ucZ3MEEpSotw5H9tzTLrJ2j3QrasqJRifFpL5cbv4jbvnqfcZFMfvTdppPrY",
  "key14": "AzuBYE1cRvgVaQ7BzHxow7rmDrN42oivYLRWjzRuik3NzSit2chZsrft95beSy6ZZqeEdmEF9Rz2kSNinxLbSrs",
  "key15": "2gfF6ETDLpUnywFJVYz8MEJ5P6ABF7LdH9XXpNo9UgRJDkdVS8pxwuSpmXXaJEpK3taYhneTkiu7a5jYUfr7Mw9S",
  "key16": "2QzxSg5QARDH5LkJ1TbhVgeg1sjADkBGqo5TnEeKdHPZckGGofk5oudVLU3LxUCzhtLSYYgTf6iDzUqom9Jmcy5j",
  "key17": "3okUsfKjmi1t4nd3muRs8BdiarEgE7gofFHq6iNNduePihd7UGjSCQHQddsXUKdoie5ReHDcH8RGjBY9k62jAfbn",
  "key18": "41Zqg6Tkwx2DKJq3mmbVMpEx6SdfT2H9pLt2YsAzik6T3erofXX2FhZTfq2DDknvje2Zf686THULuaoKx98cTBoq",
  "key19": "eF9tnadZjx5iPYEKqJqawu3thtKUZUEp8dcwVayXLT9Z7BisZE7kJfSHpzMqpb8UFv8JgbSdsajw5CvYAJ9TejT",
  "key20": "5mcViKGe4oBGwWQiaaieNeELTLWWBJbQ2SENwUAVJaqovHquLrafADg7AoAjeWmtjSLW1ghHPRuWAqprMRgKJ1do",
  "key21": "5ZPVdkqD4uPNjfRstG227ghp588EWvEgwyLfJGovJ6mQ8W2apk7j3ZXHaMouWMJuvJwtg6eZZX1wTNT1xdxQv4he",
  "key22": "4mjhNEhCZozRNoKbVVnfZDABtbhe9pKrLNfty8PAymwxqt9y5nKjZ3MJrz15hJTj8tHLBtsCEwutth5Xp2wHVfV6",
  "key23": "5pwTaAEAp6etfEWPJLYARzjerUHkmxUNhoghMgiNd8tZ9nrTD5uZ7WbgrjXD1RAYmqEF3YofsTTzH7jFt8pMcdiZ",
  "key24": "3CLfeLq9C9SWCXcMnGGdfg67WhM3mSB2KmcNe5Ehz7jzTggD4j7TG4aYFJzSDnwZnsqArRgabzUBjvwLfX3pht6y",
  "key25": "3kBViqYEictPgHyYcLo4HadPzrvfcFcHBQfjA1bipTbUNVC1ve4gzUuKVJVzVBPg9Jti22pfaSKjJDhD43vJk8YJ",
  "key26": "2UXhy4965z6BTVVH4tpxc3NM56tPvnGSJV8YFnUwAAPC4wQ9G7xHGDSRasNbqAP2E7JobMgmSuMxqbCDnCtrtEF8",
  "key27": "2N85rZoJz6PmZH7qfBW3ABQdkX1eAxFNgeWQKXRY9bm3Lct8xZAdqkvSUhEjFYXwsZ86EDGasnhUFnqRYzareCSj",
  "key28": "2p6vytCzuRXn9naCnEKVxTkwNfhrAVNgbX8LuZeoHGqL839p6MQeh1Kucn4SNJxZnevU7qeGjgSUqcSaGVpdVCa8",
  "key29": "3MwFUjgQyfUgmQfvUjfjhvw5Fvhk1S6bfv1HfXZ6v6DAScCFM1qppCM2ce52qYtUGjxa12EExZN1KXfT7YtiEQdd",
  "key30": "52NgRebZ6dAQ5dwxypZN9PDszsVdt2rC9aL6AjRmu2cXhrfs2bGDNcby9kA9EW9fRZfSZF4hL2xf2gvHf6Pg26TE",
  "key31": "Y9D4zYPP6xgUsFmXTa9EzUxGyrmnBbY1KCKFZkX62gEGrc7Est5b1Z4FpL4ZmMdNKmN9NfMPmvMDhyxzSsuoVQk",
  "key32": "aAYqB2hYK9TDMaRh5MLqyEnQuvygV3GLbUTLpttLP3aUwRVZLKGrS4CDpiyTSXNKViTczPLn7Y5okvDrqbVac8f",
  "key33": "GKCKU9pPeMKpqLzUXE52r5x5bo2vZK6WvTbKV8npaKp8r9DuD9nsSFmkU8hpjBCmZQ1ThELogXCaTR6WvXvcFeL",
  "key34": "8wKVFF8Y9VmbtRJVTivpqpJLv8jo11VqRNrRFM1FXbzY1igdht3XaQVQPYaesmeGSXauCRptAZGwDff2BiyjZ4s",
  "key35": "5tncDYTyD7uo3m6bKCRT6KiKBNF2Xipt4twH6BeVffzRXdQxLtevvFPS1WkcNQro4f3jdrikPg22yo5uQYS7W3y2",
  "key36": "4tYipVH3CuaqKyWop5oQND69JPr45GvHpPD2V4qpTUCuTNyzg4n2tRE6827SuLs22zhEzzZBG2GnwG4faBKhavVU",
  "key37": "4Jeah5oAryBHqh2n8eRuDYnecs9dR47ZuaMJF5AaUMfQSz3NkuR9weqDnkq9mjBfgtp2GZXSA6whfx2yTkWZfDNg",
  "key38": "32o7KYJeJuQMutf4wiKT493xXBozi9EwfWtii8S5iGh6fqNC8iwEwGcQHnWkzMakhKukSnoB7Nun8GJDskZnatQ5",
  "key39": "5wQrKNSGBVrsAkmdv2mRhpk9uhBNDc3BwDVJeF8ME4kKywW1QRoGnrLmAKXLrkoPHndk1EBDcQ7diLnif9tKKuwy",
  "key40": "523ukMEPJucJmYvBn7moGcFkKPpzywUfYFyrqV8SP6A3qv1Nc9NkoAJs5JyRd5q5po9Q9jespovgo1iqCp2Jg2b",
  "key41": "4vJSdUn33Gm89nwbwtrn7RdsegzBfMeSsLWsrAdTwsWMXYppvNDYWNQcEGWCZoJDCsyMQgqxf6bsAuRSzTv2aqDT",
  "key42": "2rpy2js8dHhtf2DC8hLfn99Aj4YTMX6nD952P7vGVB3it2swTiyY9fjtcA1AuW3ibB8ivki4jSX7rPgUYox4nTNK",
  "key43": "4HFbViqHySNqaoWS522VRLasBESBe57Vd57aR4jD77huHMWMWhomQpvFbS6PNYDGM9AWphRYgJvUYCZ61jt7RkXt",
  "key44": "3HCUL2BASN6dewdwTD5BpnvRHmXvE5zZaGPFi2CHJ6ZiThBKVo4ad1ZXCBvt5krcFuw6mzRxSkCrNw3qr6RE4wUo",
  "key45": "3DXpFh5PJwoCMcTC3YAiPA16cdrp8PmasvkXgH8wkkkC5t8ts8vPXR7k88jm8GrNcE721YLMp8L21VyikfNM37kS",
  "key46": "5RmVNDJbvyc5J6hS97PH9QNZb5fW3iCkg6Nz8eLsQc63AoqFuzQKS4si9b9FPYD1MqCT9A3b3zDsaj8zhAGbfkdZ",
  "key47": "4iELy4Df5T519nTWuN24mM5ESPiBuqEQRBHom7MfhWnN7u2h9nT6nHLgYKydX5iunib9nDWdbZhhCAofA2JKvL7n",
  "key48": "5e7uSzGLCs4Nyeabc2N4BmJdzqADtzgVTnq7RHiZEatfVdqfzW84wn6HpWBysw42EEu83ws4wG7XuwatDGiQeYGs"
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
