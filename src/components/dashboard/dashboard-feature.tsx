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
    "3ZapJb2tjfvWK1sv2VVmEstm8SZApRu8xM6Nzv4L9X8HefZUjgCgcojWq2FwemccgswFU5idocA4VLi1G1GfXfxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvP3r4iinUR1JjpEakkZYUWB4GdX7SqH4qMjDzbWV1PDT7Sa3EvSX4XmuSGYtmTmeFxnBxMrR8aynoQ2FBfMLbM",
  "key1": "eJHqdjYx4hwPAYkLSgcb3z9pJtUSTMiqxKtGn6EvCsp7LJxva2AMj9SVZfc6Lvm49y5gGDRXu8322gQ9uhwNijF",
  "key2": "5DzPd8U1RnMbF4oX8vvHkoW9UELdZSg2ogJAL3vjy2dSiQg4FFXq4qU2V7ia1HoJ81SCo5ZWuocJAYC4ZeYCwPS5",
  "key3": "5udE3KhP4v4BLiTXtg9AEq88ybJnYhdBAQn9cLrqXFqH5GeM52tQj2LiJ7H7AnfUFqh93KeFt79f2KDYC4vtrCE6",
  "key4": "5AG3BTPUpmYMWLM59uR53X5Psy7Qjfvu7i9dMT3FdQSsLZ8Jgk1WA1o7eReoLmzg7m2A1XJAuUbUqPYFqFzUWmhe",
  "key5": "3BE7hiLUg2CTsq822vUPwccVN9xycfqjxFrnLzZ7RN3brWWSqTCoWLzXMvmx6Yp6uyWtXp3bTmRAMRpQHn2jXN7c",
  "key6": "2u93qCtUqzZcZZ5vBUQS4HVpZCoCPGjAamgPARfSD1ms622Y68HuBraC1skonXB85d2qUFH7XmdcT37yAJ41bUME",
  "key7": "FbQL2giKVJFoRWc8RUaHgj2MFvgpgr1fhXk7ZiAo4jfJ5JqRQxqRyi6G2iAqMrpwYDhhFVvCH8PfZ4dsG1WnZZM",
  "key8": "36mj3PUTzdaepQtWLJ5t4uED5216TZomh3tWdp9aFWPyLZVXjrgPB2CT87LNMUmdziM2cGkKGwat3URj3pNBCbfc",
  "key9": "5uBuAhQsVtL3DB8syZSFNwNrAnM2tRnXReK3zwnQpn3zzWk4tPsUn18HkAfhnPoooiggWYnmoNRwSwZvzsqvinAF",
  "key10": "5oRqz8h7zsTXbH9yquY8XhqDRKfAgeevzcSJZqck7vb4LXKqcUtnorGdU1wfr3onfNweHrNS5NDDu9LV7iz3w5h9",
  "key11": "2gqQzuChfgmpeDNhAM22rcECbSfXh5S8W7uCCCR8kA8zC2Hm7sousXZUjhCigFK6nH9YQ4Rw3UWVnBGzpxCtdkyX",
  "key12": "3M8H7CEB1Tf9LiadvwuUrwxXu4Rc44pdhyMfPYxu7EnDm1BZWthfnN4kYQURkTU2F4xskzio6uRzC5oeAEs257oH",
  "key13": "4Y8XJYjmnVS5tjy4T9tBSM5WAVN1QimgmuKCXAkGw2ywXr3z7wu1dWsMEtDBwAvsYSu3UWGSoMbUjUfxTmqMfmJM",
  "key14": "2uFCMEntNCeksWs7Wozp4Qh66oBk5M5e7FTJeQ48h3XyULNwN78sUTj7S2QHgftphzFACeKAUCUkYgNCipyoKdmE",
  "key15": "f89cLxNd8fNU775QwaMzKp7R8hy5Hf5RfFz7gWiPQ83XKyTM7j6BY1xdyr3dpnQc18Vnf7YGyZi6mEH9HVjMu18",
  "key16": "54crmVpQVsUZbP4uRRoP76zrPZS1FNKKETVRUvKU5uUkmcao55Jm4BiTSz2bKXexHrLE9wRL4oHyemRd11hCUfuy",
  "key17": "2w5jm9VyZwyZoba7LWoE5Tsq99Gx4119vEFbzgEaRPyzsHAqvdjCjs8XGDJ1N4PnExzrZ31NWthoAKhUtzTRH5L4",
  "key18": "jqZaRoDe5z2rWWxWu48wuHXpqcPjRYKoCnJfYbvKY6GfnXab2GjRDH9yTSabwNStyWJSe3XrT9kVscNe3bRghq1",
  "key19": "2hje2bu4tUbHJj9K2w8QJHChhjMXHFg2pwJH8JrCeCBu7n7qASLf7FUruhP6YvXCfVyFQQzPJjZEtbvENtH6XoE9",
  "key20": "3ovJuynaB79MKkFmdFVeTcC5VyNJDwbkfp5TbRF6bZQKnndHtJMgmG39E9VwVXFJ6sMpN7Ls6ohEQHZd5TnbniUE",
  "key21": "3rv2bZbxBxCRrqYQ9vaMSYZFqzcy2aQWQTgB6RZ2ueveemMTXuHThYgKUhdtDgwF4AYRiiAqRPgrXw6GMUGueRxT",
  "key22": "5XwCcYoLV7KZT8ZukSqfcoQ83KgoiZQkUvCYo7waMVkUcw263TvGz6R46tai6XMUpCbUutqhwdosBiZY1B7Sxvyz",
  "key23": "5UYfrBewZG17Au4BnWd6hXi5DzP8gLM8S27VzokWVvBFtxBz799An2r7amusz5zmWag7JNor8cosMkyqPuemrWoJ",
  "key24": "5ZsX2EcKh178AirFfjsB9wkkMRH5ZaZajMo4eiANQwLLeTNTRokU5Mkq9NEGxNhgrWdJ7FwLuirH7jqww5fkctP1",
  "key25": "5KpKih5EB321vss1YmdbjjZPX5XmQbZZyTfwfCzkiDmPyLiFy1JpcBcDqov3eHXpzZQKyW7en8ncafXZWyJYo5NW",
  "key26": "2eF1xmD1ftggeJSXGYYaDDg3bHXX6x6kTwLVdAaZz1xSxfWGSLw22E7LwYhqQkNDC9J9TyxUfEBo3iP6GMvhbeA3",
  "key27": "4WVHGa1X7MbsuayCXh2phvEgFcZFgYXeQvNm2kUHqPApB5TXKDwRwHRaEoih5f3yWGRCntogRqhoPWobhoPmw6Xj",
  "key28": "2sm1y7ij8oj3acdF14QXTfHBMaAvYTvpVhf2PgN1oz2Zvns1mbVHBt65XCKyDxmcaih6uBDPErnE8wv8QE5eMFFJ",
  "key29": "TdKn221PnASzbTerQazG1fbNa9XgFbarkbegyKoCyXHYAJe9kED9wwtXSWdMzVGvvrcEqoY2WaDRNURXjgAUD39",
  "key30": "XjmHzvSwDdZ9RV8QSb6DHckTst2FQ5GKTCrpWVLTkv15fcs4taQSa6hr9fwgufKpb795589HizdHQktw1SeFNpw",
  "key31": "ZZjgyEG7zZ76zT38yTd2CjEHmJnSTAwPLw4KZqGi6DE47k8Lwyo9T4E8U6HBD2NUgzo4Ayf3bgHsVSBa24EnZWY",
  "key32": "3Dy2MwQutjJ7BcpicVA7NZYAKaFpFnftrbx49ppHjBoKmikm5z1Mhq214Q9jSjBgtpguJ9kPkGvPDncXWjKneTQ2",
  "key33": "zvuwoHbR6yQsFtrUFZYT72k5376Q7YEMZHhPfN1dGyxrJkQWvpbDomDJJxEdnytdi11WzaqE7mte4WJpiFwUHGG"
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
