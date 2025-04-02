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
    "3hyNYGHVAPkEPdzhhVNKixMKntq7wou9W2uYLKcy62ZCJzBi37b6xRcsQASKANeDTev4jRQ29azkkAnQ1XKPiX4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pyfrqnWk4pFoafkEtnM8WBXm3nRBSTmwVEAcCndgxWiQRPvqDmgLYdE6wVbEHt39qeBfuwUnCuoH9PM4hVQZ5kP",
  "key1": "5UXGvuvR6rCyVTZgTZHeGsWNeThrnbjpBfDK5vPBYANsXf1vD7K2HZVkKMdLJWGC24F9fD2HTb71mUHa4HsmmM6V",
  "key2": "4gdyDNgmeq6JNp4m5ptyasF1hKBY9mMForvde6Sr8naj2RCMBht1KtuSGuG4UgKoCzcPsA2Muq6rgnEwunrumF4R",
  "key3": "2KTMZ1W255jbact22Ain4GzYkR1FwMj2udDsaJGvEtTgKD65kZEnyMdpqkfPXqzcRngB8DcogvcTzmeDS7xa2yWY",
  "key4": "p1wUBUg328do7mXJzSKBpJJgEeXSdQs2TcK7H29Gmedi9CcFqonZakw2JdLTxxgG7vgy6Sweg3sojYNeS1dXkaV",
  "key5": "3QigV4U2LgMVGY5QyhHHCT2myZwafbjpeCcyG1hTqwRwLfELhHqauWKRia84nB8JGr7xiMBssGBosSmRhxiDGnjN",
  "key6": "eqRqBMX9svsbG8jWfQLKy4nakR7npvK13AjkjfwYtJrt1t1YdU7FSP9j29ZxNxnUy7GJp4zTYMCCWfmv7aucRNV",
  "key7": "5Zv54usNuvbmoVqTi78LGfU7eM3Bz5t8EKMdhtWDXvEp3FJBYsDzgv2f9csQSmMiSxHG6UVUVFSv6e5tjxBx1XCU",
  "key8": "obqvUvawTwTxWWUs7xw62ZrokqKNfA5otZbGfSH8ZU9GKQZnrpucjsFBKb2ugLrCrvXFrGJDwDx7Vu8f8JW8Br4",
  "key9": "3KNuLtZjKkURgfByPLc2wahJHSJc2URgsExjJxUxMdS3B6q3QWPw3hcaQdwJavpzu14v9uPgnrjBuAGXuFK118Zu",
  "key10": "64BndsWnWnTVfYn8ydYbZ8HyBuqC8h74vsBHqkiy5QUZVoATEdwjCDwkjyDpA6hNSxKsofUvSwYjbJ8SGJsWtgib",
  "key11": "25w3wQYQeEYWV2VLQuJGUG9Gps268md8UySGnKJ88vLKMspAzRnbnVkXjGyTqgD9TUNmQgGGWiQVmMd11sHW8bgD",
  "key12": "4xoVnNoqYg6GdwG9E5ucghng26hcoqPVRwWVJo8J9aphfhKJvbWM7nYqbV3sAVN4jR67RzfBnonQG4GuSD4S6Urr",
  "key13": "37qFhsgKyJRTCXDcy32iyNEqMeeso8BdqhaDdL5V4yHoaD6aPA4TnZ5vgKPCJ9rqNBZxvWqM3MpkgaXtsRQaiSzW",
  "key14": "5cnEgYcMJFATc5u9UJr13ddvNqpQcWGaJPAKZYuyhPJEFMYqeuEmVCAgEqpuFwd1WZnGDP7jGeL16PveD6xJ6jKb",
  "key15": "4k5TSm99oh4JVSCN9Y5LYef11TpWPHhSGtbQhMANv5UsVvqr16G918auhdFeDAqcF5KVeVsMPyejRxmShiRcsre5",
  "key16": "3v5Q1BhttyXaNRNqDKZkwbEa4kE6aJhm7FGfrXaCFerTtPm2Ch4RqZogwBScwgXUC78RKSwicgSaupJ8VZWusSP9",
  "key17": "fL4NYnY6A4jQ5gDWwXYTuFEvnjKVN6BNknfsMjpp4yiEASWvHEgMmmwyxwqQ2Pgo3EYka1113E6XGLmCJsUnWFi",
  "key18": "XApu5mcuviBTjBK3oF9pngS6NXqfYVFQzqaB8n2N52CKqB4DsDB1J4VmCsbYAtEwsAk6zpKtkcn9qYJ12jCLR9L",
  "key19": "3q15knUJ9qmVL9aYwkXswx9QTiXS7xnqtoxip8W4JUfK1UvzmbECTQgRTAgnvLFJgeRw8h3ZLX34npYPVDvTNu2C",
  "key20": "2yhBVeSf5dThfngXPk7zXcZ1mW7sxCQqN9vqW7JEsMQvFEz1ZGk7uSR5ELZiCGhuoqpuHfMDB5WyrQM8KoJbLssK",
  "key21": "3zz42Udpnxw2zo4ASY5hRV5tEQm6DmQv71TTApbcd1CRef549yivveCcbLn4s79AXmtgPVgKUMNHzWpBxoxHXCgy",
  "key22": "61JLDmujCXZXRL3V6XNwxjLLX8sbt6V2JZ4JnWdN33t4sKBH8EwumNRew4tzcomUDPZdAkkXiFYq8ZQdNPMEB184",
  "key23": "5f8MVgQfLsUupjVHDgZUyx95dDGvYdmGqbUW1JDh1w6eCmaWwvsqvq6qve5PLwp5rYVmMeD1coPJP2oQcNmy5cn8",
  "key24": "5XqaAYitGR2TJyhLGcRaeUPpwjxQAUSDfayhvVAjdF18xAtDZRYrY5Fy4vkrR7FuVqJFsrNtGNggV6AMdbbgnvcV",
  "key25": "2tnwxuvxzkLkkjYZaR1PndvfXnXrXJJ7ya3XR5uwFSNpc1QeoHk7H3tARnUMjBgLnbRBjAqEfKb8fbdy8Nhseprm",
  "key26": "2qXTABK3QPsVEQbm5gVo8dmetVpo6EbY54owuPKtr8FDeX4oPPVdo4H4XvdHviEqVteikuFDNK8q1eaqAsHodR7S",
  "key27": "39H9Y8hjqwSAu7FMZ9kYu4mSvmUSjYHwen9ekVqsRsqAc1G6pfhC2y4RViqCgG1irXoZZCTEJjULcixgsxkNodCa",
  "key28": "4vvuHWcTmH8WfCmMz8z3TZJYfARgx5y2gpPFaRynKuxzfPgrXRBpRMKdrY7CaJcbimNrzKdi8HNUibLKAHJujEBS",
  "key29": "kqBcxAQf3wq2vJEU3PMrgsDEhvMCUbG9c9ctXpjJdszghw4QkbSyAt62F6dCnAYS1i5wfs5edmLXzA5rTxmsDFR",
  "key30": "3uBWJcc2E2Vi3nVGLnEUjZVJPMfe8hxHw8AuEYZzzA37DHW2o44uRFoBmgAMtPWGNBpnAzmXfbEK9FmyfEt7tbR",
  "key31": "2SihcwmshsM9KAJPyk22nFGyAeXDCUgmBuJW6qvfWXjoCvE422ZurPFv4WeZFTw1MzAp3G3LsDGFkbPNW2RySoJs",
  "key32": "sTVXqeXofMafXuUH6PfrbZDzo6ohcXx5YoFTbdKTVfmztbYaDpBSMRMGQSDzEALeGPfgHYagSNLEp6WeBgQfcg8",
  "key33": "3XQk2pPmUHaW1PGrP2RHA3XsZmyTCGundJDAor712KVePSpi4cPk1ddwMSCAK7SErveYxYKxmkWw327yHSkcayis",
  "key34": "bE8KnduiwVLc9WHYCoA4ZjvMxgknehrSAozkvUS6CvCj3nzvRtNgFkRwWn6u5oT1cq8b9avP2ty8o6vdWAjxiBL",
  "key35": "DgDkW6vgN1h9quvpqP1yYkz5bKXTrpe7TzvNatEqR1zMACeaQRSTxmJXsYC4KE1HKT13NK7M6rQMDoYqrzhYfr2",
  "key36": "4vSdmfRhMUpDjeeTG9jHX3HwwDKkDij11iViU95hpYc3hgGA3ecvh86fj9MHqS1tBEphTCfSb1euDsYpRqP5Uzvs",
  "key37": "LEAxEc94JDuEuDpXXhy8fzcmsHpTHQGdN78awYJMenuUJ22Z526vTviFM9w6JPbYfcHkfyhh8Ks1bbzW1YNdRL3",
  "key38": "4rrbtBUnJx4w7z5KLmWVvWwQBG8kXR97t2KjnorZiJdnV6v6cAhHUGeyQmMZC1y5B7XmCnf827Nr1f73vk2eQohi",
  "key39": "D5kqepUuwCn4P8GgUHpLdKUHJKxSKs9vvoXKtwHTiFKLDVNmGCA6LVTXn3dRh2HNnaJGUR7ur1i4JSstBnCZtJQ",
  "key40": "4zGCG7UgZfacQXPa6V7TxHgGN6v48LH9twiSxXdHJtWciMKpTGe5232Ex4SrNksmq4wacBYhhzguaCSdtEzAALvi",
  "key41": "4Dqu3VLum6pUz9ZXVCVfj8FQ58BpaGkNMch9HWXd9c19BEsd4JaRDNrwg87KewQRbqjEWawk1rpBXekEn29iPa2s"
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
