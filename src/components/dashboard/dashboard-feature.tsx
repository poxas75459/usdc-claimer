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
    "2C6WAXMG7gqmso8zXFsHJDe4N653HHNfg4DtFYNWY93U9UXnufbJvb2QZoq2ryUiFn7QK3Jk3CNhqxmSmgDdQfyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQm6GjsxqWHvBTr9PmD93uUAiT9yoRryyenpZjFzAWRFi2wGsu1C1vTTDmLkpfUaAymCXLX6KYoHJN92w4VTYr2",
  "key1": "cWDbdBwodvyvSehFKg2yt2DBGqukvUinVNxuuaWnRQPhZJUzNfqyzqhY2Vnvve5s8DhyayZhhdNcUDhXUZSbjVf",
  "key2": "WfFbZ7nzCXv8qCdjB1AuKqdJsFciwsUh3Gf2RYbRVHduiqmBoKV3g6UChC8Goy7UvUNijfpTFtj7QMrmBrH6SwM",
  "key3": "4LQYLEZSKcyH5BN33PgF1GdcvBA4U9xoapGZCHRUrzZKW9N7rUA6EyjukXcTX2Q6scJgeuUPoRKDmjeG9FRGU3se",
  "key4": "3CoVq87GpQwaG7yhMWyRNddVBnfA4UwbevyMYHnFYBnsgFheMhqJ7GVe4EF8UM6Smku47R7ZJL8MjumQFsZPhg8u",
  "key5": "315Tzm3uZ5qm1eBQXTqwEbqeH4nx2qiVCaLVipGSyMQ6DsXjpXmgp6diY1yBVzDgAo5W5QnAAfSybwj41sDFoboP",
  "key6": "23pEwSyX6mCyHEM3k84bHFW4xteiLrroaEE1tEoYywAGvmAcdu7YeJ4qbLYBDM5h2JjBCdZujE32QahzAukE8PsJ",
  "key7": "5ed8NfWpL8nUNQJrjXcth8DZQNVWYuwZ9Qfa4pxbSuibx6RvDirR6DS4kL9Jzx9ANkSKJV9EzVWGjRBKQ9B5wW5r",
  "key8": "5gHA3KyZfvubnfMqFCnQTrhaAQr6uniXuuGLhX8udE45Pu5BPgKNwTnH5sZ78iuGRqtWRHduMjs2ZL5JerqHprcR",
  "key9": "2PDAAPgMsJanNkdtiqrpqaysHAbdN3S79jtXm8C5oMJ1QSiYmy4CyJkSe1UWgRzVB91WoNKz8SfhfSfYxSCk2sUp",
  "key10": "2E8CJvZrRR3gGRwNAGFMBa8wfUREFcS7ZSspkgPcykUqqbKFzd9AXYSvak1C2KwNgUTnjVoGXc33pe6X3NHCJLzQ",
  "key11": "2imWeeYZySFKze71PhCY2ozh9H2Fixf4vVm2Lx6XE7LFZ6cTPjjsk1ZKS2owYgAeWaxvkXvKsMXTH3QF3iBSri2s",
  "key12": "2Nd7Ep9d2wMJmCbbF7hgAwZM5tjCsfHW3m1iTSaC3izHrwYCrVkp6zfMmmb2tBtLMSYByUG8sZda1PLG4zKwjRoB",
  "key13": "5QGRjKcqgxhwyea96419iJEmxKwLgD45v57mp34seXimTQsFs83r1Bp6298gDbAQCK2eqSNbgqNiXRcHsSUCbxuZ",
  "key14": "5wBt5EQtUt49v842SjPWwVFDxY7HapoiJyHKnL4tcWPBi8xeJbk2yWH31xiQYkbJGnLtT95GncBsof7jsQMGk3TR",
  "key15": "5xjpqAxXHt1T58Dp2oxGaBNSYazxARucvFYJsa8gJNo7ytbHfsUDL3ue3WRC8C4NbqtqCmbA5Lq8h6TEY488Z8wv",
  "key16": "4vLsdehvkkGgjsyKMCoBVo6RsfkR6FZDzpwxMHHmqzLPoumg139FSfCgtMUMiaS2jk9Ex5HWCzHCJtbzXK1cH8Nj",
  "key17": "ZUajp6ffz7bwkZSBKuGNVrDm3NGSvSzmN1TqDDuNvHPXf8bETzLSaNghvJGJUESPNWS4GAmQFEJSy1Na2sKXhq7",
  "key18": "5NsTZtUwAcLLrpSgqo58V8jZdv7q76VQS7XAKbN7BgxW4Mt75RmZMDzkXP5MwiHQV2ULwZYo2mtZe7cNfMcWt5Lh",
  "key19": "2D3qeYzCazSc1WdMPBsb7BVJooMtsT6wBnWmstBqrAx9VPy5Rd42nZ9Qj5S4D1trToTVAMTk1ExFTZVz4iMF3MXe",
  "key20": "4LVfcoWE3MNVrog84RtW4CD8qQdG228UyNVGmKMfTFcMBjJDCaqENHF2NYKELzTw54ENoqkYMLGJmTqDRSAV8P7y",
  "key21": "2P9CkKxiCHmF8uq5VuEqQsnTGm5Dktm97YeQdyUv8odB87iYH6UrLHLAZ2MLydNP1Uj4wXXYx9XmtM4QRuRFPcs4",
  "key22": "2szEey1pdH2t6cMbr9KrfRiQ5WZyesSr9Qw5MMBNgZVDmnwFTg3EkxXr3RK9oD8v7ww4Xi2q42kJ7pji3JSUxsbm",
  "key23": "45Y4rGVe4MXZ2AqZDhoc2uGkfBPSCaQRyap6bqbbeYRegUgDy5QL3hsRdMMnbGMtBH26idgP42XuY2LEmBQ88Hyu",
  "key24": "58HGCWToJ7yPPS2xnQMQXxXYVfhPa3KMUjpoiX87RJR9KQqBP1FWRKdYiFMkQw294yjfeTSB9woCV744TZ7RiHSJ",
  "key25": "5iWPXaVGSpiRGvTFM16RakajLZsu57we3nzGBh1PisSYhEXhNQCf9kiwahx9nS5DoWkA2Hzk9VKmcedaiziTEYkE",
  "key26": "mSVt4fuin29KPyAWexLxb6vdK9565jpgPCUSte4w3dZaMvJEvyJXLwPuEwbBPhzjM44BnFDyMTvTqyKBDEfw7J4",
  "key27": "2J289WQDS1H2jDR8Eatpv3ELwKZH7cZj3WUWLxRyP22Mar4x2JTFiYt25kqAXktQ2YvZprb5Q1Err8F8TfuAyHm9",
  "key28": "5xwiid7xRPvsiNVYKPtcGZt2pjeS1KxmLbgbymDoJ8Zf4cahhp57HrFJVCWkCcJE1UXBhJBu6Mc4hY9ehxFaJLVN",
  "key29": "56jWSf4KrAkAmf5tU7TG7YMNZkzbsFk772usqxzxYsh2zc3szzpxRV3UtDWBNLXKtoKcitZycRFniRr57VmnEtkg",
  "key30": "4AjVXwyhMLqHiGPQ45QdyLfK7Nz5Bvs5pUHN6NWHYDiWCWcYgDhzeW3H5ZpKZg6nGcnFsYZdVikZfLVA8oW6VJp3",
  "key31": "2vT8c5KBU4wzgdyjDKBvHGk4uRNk7FyiiFd1XzzQv38PXukEY8TPCEcsiVkNy557WCEozjktdjcTBJo7YzZV3ERg",
  "key32": "GKgSrAGmYdREQPCbSih3nnEXTmVfGAuzh3o38e98R9epxub7btpLK6btrwTHRyZ8HZyGQvetG1HpZBcNoxTeZVi",
  "key33": "3qeFUVdy56k5Di3GZ3VXucNt4LjZWhANY9F1qYYiekbtoHMiGWimKHr7SVcLTKFhBGxNo33uM3Xxcok3JnQRCq9F",
  "key34": "GQgANvT9nsRDFgJu9Mxos7HS7EGZcgVHzSxGVAMxeccVJhgPF5QQifJgeyrCzuAuQnoQeQvzgoR4zyEvCGBw4KL",
  "key35": "CHqhUUc3VWYH5E9oTZB7tjpaqrAqtyD34kshhCGrFEq8rYQVaUhWADzThqA4MdXAyfJ591k4HPu2HitFgMNYAjp",
  "key36": "3SMzvy3nMmULShJDpREYALrtUc8Fjt8uCtnLsnWikaw1x56V6DAtFLWi5GSq5hMRTapVzrYXMKSm6iwJNhAi8T3w"
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
