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
    "ygUok7Zzyjc1u75W8inwvMCtSMUKnEvon6RgFJZm7GyMhM67SYG1Zcjp73TbXE5yY7aNJPKCjdH1P77PmFG5qFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HDCdCENaiu6YNSfeHhtxPU9PDBZAgeqWk67o4c1NJPfS7Zi2S3DExSLPBfAgv21wq2kdLUqaodmCMzstgjoqNzS",
  "key1": "5TLm21b5wAGR52vNdqUSEHmA5QHSvBbvMAMCtpKBgvpcTi8KEm874xqcjfgdWdEgpyxkPeVg8x6seXqXcaP9iaQR",
  "key2": "UMZs2iL8fubzRqHLNtCXVBjBej693uYtGwg1vFn3uqurdHBEBvx34MpvDaAad12oUB1xY5egyWPjRyBfZkxyTp9",
  "key3": "sufav4yLtBiwFZamb2iwjw1nRoLnVYjKUz5CTcEUBqa361EHM9KkCBY2yDpp195GQAEqywzGTUGi8g2t2qHYA5t",
  "key4": "3bRFNQpNfMH1zmm7nC29AsN6XrQGx4EyVKjLvRcexYuaWWcsVzVHMJUaJLviPZQarB967hgk8wBT1AjiHki9iAD9",
  "key5": "5jDHcT5yvYGnLqiHeS8imcGD4PoFaHzQ6wQTmFXi4BuHgrkkHPS9rrNBEZmX2qimvoruBJisFP5eaFBRw8EktTeD",
  "key6": "2R2X31bVPQWJNANmi51sGgKA1qspEtEckxMKgEw2sdwaaLbVeKKwi61kdPxtvznpgsg1Q4QgELYehCCBQFSeizd",
  "key7": "8LvV9xoQD8NBTPN4XmVV6XZydqf72T5Di88B2ptfbG2MMg4YrNBkxf6EVSDA6bCzGW3bCAG4zT42dD6vrqiyvrb",
  "key8": "3ntS94tn57JJZ7vrh5zxDuRHitiCwAPqKycxFQQSrDUQibe2HcTWbiVYLKQR7MkfeWsMAF7PVusEc2YYa6ywVLYF",
  "key9": "3uLKfHxZScKoFFacyT3K1Uyr98zyNGzP523XPja4e8zhCKMqyzWvHUw1nV6gDRJixRSS4d21odpFRug69pwVtpjG",
  "key10": "4wfSc1oK5Pc8mnoLaW5DtyRhiYajiJ1RN6KHhzpTVFTExPbHsjDs3pyefAJkAQHexZZCrPYkFtHprbdVEkrxv69L",
  "key11": "3pD1n6QqEDN9qThjmD2BJgFSJZKFj8yPvfg2xUoJ8dXhyzgDVu1u6WSV1TVfKAB8vgBvmXQKcn4HuYBRbkZvVShT",
  "key12": "29NJai9iwREPayxn2q7YuPdvmfqkf3PhUx8KqMi65meeZBfn5FuUACvMeUUczE7YDtHQSLJZGirUTom61UwBQUdv",
  "key13": "3CdnnVvQXNdqzdTbCGW5ZcQbTJ6mEFK3v4b8ky1YrVQp6WwRJrs1eyrFBn6ikJ7yhmiYxXRNWj2bcktQ65auL2Wc",
  "key14": "3pXwPoGqq1xnecz9N3x8AE7FGDD1aJpybtwMzLaHXkdrf3Kio1WhyPtQhuviXyNi6mGYEUCHQWdoF4FHh2p3JxLV",
  "key15": "thAGViWNPYsDUUHLZJTXy14bvm5aTJPiZL5ugV9PWN9cZM5ysGUAfoE6WkhxQM3HMCc1qNA6st5pGvxezJqAqMa",
  "key16": "2bWFzVGXnDKKMjSi9G1nVkL3VZAWfTW6z3J4vN2ddVvuAFryrhLrZpniEJzq654CjBZDduXEgMpWLbHZi52AUHYw",
  "key17": "3BJEyepvoBdgdPLGPzJvFW5eaRGrX3xkZEdbqKpQGvbEY4c1NcGET9jvuUFUQvX21ekqUcQVbVPPFwbT4jhLmWJq",
  "key18": "5mC7E6G9gYThB4usi8ZkgwY6VtsUjdgNWSUpQxtnSU18sfW4y9LXWmLogfhSQfDarJdV4vgVRZXtQpap7c6WtFdm",
  "key19": "ySFhdn6dNgCxhQ6d1wDm3gT43F1NLGLUGjq4jZ7gHbpJk1qLBGtVSwnKxPHwSLU6hEBM8tvBaZJPo8ycPWShy5T",
  "key20": "4buYmvefps9w43XPch4Ha29nDNRpPEDWD7n8YpEuYcmjRBqYgh1b6kgcc1YHZ8ncC4TV9mz4SJryKxBb2KTDmHpk",
  "key21": "5MqvN5SpRAotCFVeWTmVv7BzFD6FscQ1DaGgKWXFVabPUgr3hej72EZZknqPJHXtd1YBDkMdBB9G394kPRaVZXxd",
  "key22": "44GrZnEph4rhaDWT755SueBN27JSovHHyr7hEu49143wy8aKAwtWXQx3u4tpVJgouQhGb8U7ZWjoRYWhetp3FsrF",
  "key23": "2zvREPtHpp3iziCLwRwi8KWN6FjEAyfGyCemCMdC8i4he9U9iLb1XfoQLidM2MaxFvmxVcCc4eyxfCFhXkJFBs1y",
  "key24": "61UDqmLXkWbWTiSH6ijiFFgtJiucSvNDqcBSvuhipJVHAcZYPkHLCqMjXRUT1dLzp6soLybeTwcGc3Di48tjXdn5",
  "key25": "p18p91i4kUvyQbLhkvJ88qGRoHEkoy2DA1Lx8FA5enrJ3Yi3T5Ddzhcum9Hvqxj3BSevobvaZn7BBSSX6uwr88t",
  "key26": "63VDyxvj16kwrbDCbpndzXB3V239uSgoTjNWRLZbQyaSw8ej6RfrBuwLazohMXGnKELgqM3xbTFGWkNSwMY5R4vh",
  "key27": "2GJtbMnSh6KrxaYPrno2c7Q1AAe3zHEsPM6CBqu9DHoqd3vrDyA5EeURcdzWURYzDKQCRfsDz5h81HAUHpmBZ21D",
  "key28": "4qfGJcUgiPeMn4QXhnZpxDauUMWGoz5N1NgiWH4DQumLTUXgrBX4JcDp9sDj3jiSzRUGbeyVxgzzo4hbQvHrf7Dg",
  "key29": "BS156Z4KBF1K75Y6UXNYzZK5uda2vYnt8tWigrDq1xqcrZobdowZeGYhtVkBgp6Eb91cYvYdVNjGVLQptZf3YdF",
  "key30": "ghf4DpFKgoqCFMy5yZ3a1vwYyFxGtHyvs3cqveaTE2wv7FNG3GivPwepFf7kKH2ZwWLEYAPZukndWds68Mr9To8",
  "key31": "2ZVHf6w4qmimpgpXLiGBLkCjegTQe3dHgmo5efuVYbx5FteZSLm4djxkkqJjjEbcZX7sT8B415vj51T61H5B89GL",
  "key32": "5w9dQdQZXs28wGvnuEdQ5euCRqvG9tw8bnUR83GWPceMauF15USQ1kYdgPX2Hx4dq9nmpKaCteWjcvpQNRHQp5nf",
  "key33": "5S4RwbQ8oFEdmYtteGp3btDD8kxtFKHsqAyDPCDFsj1PPDGCQzQpkHQMPrToCge9axwfwKaPCpY3T5iUFTMHf6T8",
  "key34": "4qoA3pk9y7873kgLKd8YYoyKZECPyDBDAFFQuReSCzobEUFttVDJcZHSeFt696kD6hC4kBggL6JFqYf2ZPZLRTAk"
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
