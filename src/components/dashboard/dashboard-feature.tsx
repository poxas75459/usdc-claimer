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
    "4qjWJ7DC477aJgxsyVVGGZYuyEBCcA9JLT1pqtTC3vwtdq46ZCPP523YqY8NJctApuVUHZHBMD1qb5wPRCsauHbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYDm8zH4QEsbjbsJEk2q7WAKqsK2JFBC7hNApZnmNsx4paEbtYY2z8vj3aiwxSD5wBxCdXqubzZ4ogRgVSC7P5i",
  "key1": "3u1WYH7JN8ocBvnytfb6z9wuHR3cV8fZjmfZEEnNDuoDbuFsDNcJFYvaowr2KtCBmNn9eg2UA5VbPGbWQqk4DACE",
  "key2": "g2pkji9Qh9ZAhjTBrxuxmrnmnwHzdr8Ua3KitoobhEKZU86MQ5iArkCokHR7eWZwUNEVY5J2oBfK7jWeLkDETAq",
  "key3": "2BBemsfSYJf9CdKuWWFc55PRnxEZNryyi27GRCnkNa6w9gH4r5f2cm8TxKfy2s49EKQjDdKWEoYnGn74DL6o2NEP",
  "key4": "3JpkF4vfp5eSkZ5MjdcqpFhx6XqyRugpmV8NSjEPxR1UbTZZj8sqs1RzoSx3BCxU6euXicafYDhkUPCL3rnwbWEE",
  "key5": "5cb5i5Jf12o3T1T9Jf2A2dmfGom7kJsvGM5sxHtQNPHLCsoW162F5boP2k2HBTZWoAznbGVyvwbjafeTPY6fJZR6",
  "key6": "2BuYkFFqEUBUL47TaAyKbJWxGoSmhFQeF4x7JJv7aK8c5Fehko6mTC4CQTvzutAuyzrLxCCbmmvhH9xZ6YMiTXFr",
  "key7": "57mfFygTyWvb7x1kyGAjekPTfsMBfXb9CYLUmNdmDVdJnX8Z9cMu6FVUSVLs5eSMhZT9wZcZLEi5rVAJ5wHu2AFo",
  "key8": "CDNqp3SFcgPb2MUd2NZu1WNCEVBec91grznToYxMouXXDwvb5r5sXvD8qcKtVgTcWWtqrbxWqDC4uUASMsHUxoH",
  "key9": "n7WEKXKcrE947u2ZotUEvAper16HntSE5Thj5rA39148x2KzQrPXQeZNcqccsZ12XRf5GgrUW2R8zCUN6uHiPEZ",
  "key10": "66dPQcoELBY2bw3Fe6HvVRVjRKd3dsh8NKn8PcDs7UEiHmQmeTszS192TqtVhP7t6dEazhtaytW5KVvAXzJrLQz4",
  "key11": "3Q9U4eTvvKhVdmdPnq1VDhPcS9kthb73YKXroQCpoNDwzs6orHHiQFwtr132fDCyN78vsVgvRqqCGZ1S4HDancQA",
  "key12": "4Gymp2LpKPrduqUxREQf6daE9uUgSHaXnvJB3tb7fFmxvYKTDN2zzZgNsaV5NT9RRpnonitK1c83viLgwXUnuEyw",
  "key13": "FBUQNqjTgPGVewGC22L1pbkkDvNc3VzVCsnM4q9y5WJrhRDJWqdHHtsprxRbyqCA1BsDwmk6VfrbuzJSch3aqHw",
  "key14": "5zrLnMBVyUxKRvCZhGBFtUT1zqZ7sWctTGCNwVawffMxGQG5AmfiN548NQ3XpiGWhuJiYcBhB19RB63poXXJrLYR",
  "key15": "2n45TX2GmAzgM55uaoy6hXihiKiGmDGAz3cpCbb1kgeVs4VeQ1neActhiy1TDQohEu8gLV71DjnmG356H3euLJra",
  "key16": "5LC7DjsW94afqPv9mDrzXnp1Vm4eVNhwva9Yr35LcnUaWKcF1XVEEndSuzPb62LJhLWnGjCgf2Du1k6kqfEVtLg7",
  "key17": "Q6sKCb8KgCAQX1eXirQnb5zP8nBHpxSidqAjLRzKJCbqzTSTvmeSMJLsMUYdbhu7R5my3cm2yyZq69G1QUV5QdU",
  "key18": "3nCgh6zPhNxegCxfhuMWrkVtKvi284rfvJjDScTgMpd9i8foCDhfw312yPT2Wb4ZTfTkLsZEUdLygDiGDrtTf74H",
  "key19": "4kvKuKDnmDdRoFwpWyLDdznnLxraZXigGZi6xoeDpD2qrTAjC3oc9uFG6sYmmLaZkf8yD8X1hPtPVUfuaJ66QJKk",
  "key20": "5GK8uDZRqTqaYSTU7wziFE3Wn6xR6hyuNG4RkcD7xGUzPQiyFonvhDKVqA2SbWJkaBtywZNDPPJd6CgUUY3dX3Lg",
  "key21": "gPa8RWMNTCmBMd1Utnnpxm5Bev6nbM5hqLwUF8jrSgEbuDfMqWQpXurtjJpLDwyPXRQKvvJPfhHGv3bHuPPKg52",
  "key22": "4ZSoS9DF7ZtF7hqfgqSfqWS7DQoyfqftdc8bfucv2dkqLZB4FvfoJSFxZ2xCjC4EpJvyVoLuMrEAHLpJszF1Zati",
  "key23": "4zXg2h5C6pn1UazmJAqyZTf6RTymYF51mu5rEnksTy3idm7mBtAiQBnmcqwHM8aGWqnX1w9wXdxsrR9jHRM87n57",
  "key24": "6414DfNSFQrsb9XEuZTB6X4DAXmFapm3huqfCzBiHdMi4bYSfpJFKoSgK6u4Ws2R7aSDs4AEjjcB8UZM2byPWGD3",
  "key25": "33mjjQHcbLDXzGM8ZacgesKwYYz3U43vdDUmvuftgXLhsbfqEMRKW4BC64egdnshi6L9888nU1xUmCn5yZPwXuK1",
  "key26": "2F7U5FG1DkB4v2jjrogHc1w22dXHv6qk6NwurTC3MqgbyueBeH8j1xsQHRjxNeBAqmccs5YpFPudW6QEY2TXguKJ",
  "key27": "5RbKG5RsZFnisrhwjDHkmAZAcqcM6LqFB7NbEyS4qQvSi3uehF4RXAJSiTtkNk1GCwVxcLTeBux9m7xkrPvJAHX2",
  "key28": "2isx2Kv2ETopSicQM9PG8vdk799gqeqpyLgMWkmoDt8wCuaU9Qva7ZRucNbez5pBAivobbRL4QcjNLN6eNxHF4UK",
  "key29": "3UJEpCV5e3j8t11ejgpGa45vwxHeF2py63Ww8Jwt4GMwvLBp7MBBpNtHEvH1d3DvmzQudbvYXotNacvRp1YjLaa7",
  "key30": "4tFuHzUinuQokYahjMS6jNyYnqqJq5GH5ffG8pk8GtKTH7sCLAQvFiQgc9ZRnvcG9EnjALhn77LLdZJkign5usbC",
  "key31": "2zuLisLFLwPPeTJw6M5sid9a3LDJnvn6DAXGyvo51iv72raApbGwSuugV6rWfHC89QPHPgSbKwUBu6jhDWDEMX6Q",
  "key32": "5jbmiw3u9QSApW7FZY6uDSnUMgu8xT8d6dNDP8ksU4iwcunj6JQnoZkTkoBYuRcA13T39tKDbKFriBaqVudPHq1o",
  "key33": "54U8FifN72vAVYawdvD2Z8Hgv2VGWGrBnVEZq4WcFqXyiZdQEJjv8h7gG4hsTnnhYG1osyU1TaQmu6c5kiaeBHve",
  "key34": "2h11tbcs9tTYJmNcKCn95evG9PMe1gWVMhptcFoQshG9rHH1JfWQaNoe83wLNnctwB9XUqif8M9A2C59NEsmL82F",
  "key35": "52Nc5rSXYj8rnbUcXKFFLD93BcbeQSqZbRgSy5ZG68BSS7HphKDEwdY3U4oUcAexdq6H11aLwuiAqDMLtN6b9uo7",
  "key36": "Uc3QETfTkYs8yWN9MzbVH5DhHkaPQv4tfYFZPte6LApnSPKgUZWFMpL1JzhQod1CJvxNWztgKiLWXWnkbq6XAx9",
  "key37": "23SPUXHbD2E4iL6mtxD2BeMMXs1qNe7An7NCxXTrF5Dzk1thfKeyHGi9N7RsxN6chfN7j6hsssNqw2aFpz3eJm1V",
  "key38": "5xXz7hJpFsQwgJQEHdoQmhREuMbbJgNtwGphmAH28CoHasU584esJer6KPLyaqJuLgKcDkKkPun7aSbNgLePDa8Q",
  "key39": "3ovoVaaN6oqFbF5ALwv9DruVewJGgTN3t9DvZZUwDUdQwwVX4x5d86acuXTjrDokJ33P4NmvTUVXwkBxpxi5h5Lx",
  "key40": "5hZK9NFkVXnBLLWYPaBvwYPx5HTNdYSPhxw1nbaiNh2EYAwfAcQFc4bTiv2ArK2Ksjf9RfiLGug8vTr6uUp6A6C4",
  "key41": "4jF1wFkJJNi44Hbg43hkFjYjaUwZb8xUQXV7W6iP25wQpMFszEdYNtAuK9SKyJev8AKqnM2Z3YpMSezb2JtqWnv",
  "key42": "3R9CNG9fHGePJcq87qWpMaiv96225imvrJWUxtJhfsRYkGhENaRoa7LYuZoBzYVVvELf3H1vRPQN7aNzM1k97FCv",
  "key43": "3rsEoo6PGhR3MjbyoAAvuXebzZxcHt1wSwxRTptmdHhCJnwq3G16dS24pBwywzhDpELGcDCCt58kMXaNGKttbdwG",
  "key44": "4sL8vzdGy4F2vSTWFd495vqQKzpm6jwV9YA1xfWL46zraFuTffU5ixygQkABNvUp7BUj2rmV6hh79vi52mM56u3h",
  "key45": "2rMWoqs9yPW8djYUBSnCj3zMD5H8g5iozR7HkwZ3cTdiCiFW8qfgovmnCVCU1WHHPQis9fhGb7ZWxQZxTnXBQ5wV",
  "key46": "46pjWPtuN5U7c6PVMkjJL9poAG5Mbc255aTmJ9tSG8zufokPxYAuRgA5Xv25cdxtjL8E32ZKPne8psnZchPQ76ym",
  "key47": "5aoke11Af8Z7saUoDjC4j8N7kVRxbAT7roqDbrRGEts1nyBVoHXwrMyZ8VqgF92F1KsxGfqdLG2wLMLd2m58SUaD",
  "key48": "2TFFQ1A66GTgo4hxPQboTF9GHNrkF8k4j1MV6z3vyYM1YZkobzBpChJYUnHuZdcQ1UfAfmghaDFdkCkEteCKXTeg"
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
