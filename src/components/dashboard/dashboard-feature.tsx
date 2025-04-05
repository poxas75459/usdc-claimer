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
    "3WoinEQdeqP5fVxgwhjvpLRHfr5krZDs7Cx2gbzmGrVTgCE3SFncF7w9xAUhSXUK6EnZ4c6ggG9V4tQ8GoWR7zSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dA6ozGDhAY9jLtzJgCPA5oHFm6cPPuT15MxCGyBvyMMcdvqecj5QEq52xYfXDMLUohfkcc7XB5kTpDjgBSD2VQC",
  "key1": "3x1fWbZeXJ4Ayzi9F6XD5MvAC8F4Vt9hqB2VfvVePSCC4y2JURBNtvPJTKFT3gncyzgyTomCADg7DSrSBmNPxWCg",
  "key2": "He1AWdKXFmWf61MG2SLaCjEMq9uhSsad2QVQzAY8DkLx3UUoaoJPkJ5Eav4uuTo9nM9UqUqjT6kMAAN15KyqwJa",
  "key3": "4izyaM2H6vvYcwoY5cb2NmTTr42xrgRSWkV7cn18sxAhHCRtb2FT1kUiWh26Eb6WX4fpgcAs9YW7neyi29AhLBjz",
  "key4": "aSpeHmJ4fYYjxsfwEgmQAeiTZdZiMAcbBSvmt3ERcYMNqMxHWq26tKuC1uBTvhsMSjAw2ah3ngLsxgABUcBwjYP",
  "key5": "4zssk82T8sEkua2Vimcc26Svr7pLQnAAkVFE6zW2sBf9J1YXbC7N23xcASKTHyWtdTRAHp51WE1HqrHe12AhjJSZ",
  "key6": "4XyDcbZfwjz9GJATBtCEyWAuG4wgr6C6oHYefdqGZQWZnCnkwjV2PXuB9bByU8YWSNpf4ierySttaeqcV6cp9jiB",
  "key7": "42VgZD3h9SKN9hk9BVw3yzGr6CA4Ak3A1JKkNGGEjZX5ENrQtQimF9cfk34ph8YgzUpKimt1cyv5WXhFJFUr5uf3",
  "key8": "3pmnhfKGqDkxX5c1A2B5o2LMKusGxFEBXSK5JowSjAez4A621GsGgkRWuLbPa6QPhjDvpJZiGxbYNahHVrVFJsE5",
  "key9": "4a1WyrJ16n684ht5e2MccoLVeh6H58BKeFtW7rbPUoxLUU6TxB3dgbSh7SoiCd11CedgfNvmWe6eE4pUdoeGsnpB",
  "key10": "2nz6q6J5rQfGcmuEjhpvVa8m1zAT7kb3Dxs6bCXTADXfp5BeEvaZT5qoKeHgJGgBismfhFEDWfqhAr4LzeWRiNXe",
  "key11": "41mqSWKMjbDjjZZxpXpcrDvxhcoXwxeSxU1wJHZWUxZwT9ythYSTXrhfS3rRftD8yqRGqRMdgN8SRQPdca9JstMr",
  "key12": "5q4hH1c5AbRyXoh5MzPPctkQSZ2GUVMp4QLpL8KAX6n57KcMJTHaEs14rd3wxRscW5DY7cw2tQTqshoB9rQ7gEtG",
  "key13": "2wpCmRojd8z3vr4LDSj72AUCVYFxsGiTfxdxow6wAYfbQuHwPVmEH5mSVqpupVJxTxSJLRB2w7VfC4TmZPZC2WqK",
  "key14": "4f1g2c2U7v4WttNuNDUg4ix2siGAESC31GLDDzBz2r3sRwM53Y8iBF7Q5djRj8XmBn2W1uBbeCUZsSDAh9iNDPhR",
  "key15": "wUQHMxQhwFgNpXaUBLByqUfSBCVbDas7GPCCFs8GqBCN1oSuUDDJNRStw4mBEn5JE49eedyyDq9hhEvhfWMSE4B",
  "key16": "3xE69pAtEhFc7Yo1has6hEW7tW9dtVZaUwMBvEPVKYmhDN3E37Ww9yDnYS2qf9ds6wP749et5U8bNPmGSH1RVZTo",
  "key17": "3MBBTk3pex6NUYpTT6MDEdAP42LagxSTKhz1hd3kBm1Ak9inXjjWvUo8KjPQBHPHHHAmunLqfS23DW5TNHEii1C2",
  "key18": "3fsY9fXC4b7pXMqGtTrNy5zpW1K2tRCarPEqWvLoNgyw8WkLfSfENWLi7kqGYp6wcpCdZaTXjMQ7Jk72TUkXV2XF",
  "key19": "4byXpqwCokn1drk2ZBaJnhqHzGFmJh2iTjGDPJ67weFzqkjPocTacow2xRzmKwnRLbiWHYv4KQ6yrDVo7vPqy7Yv",
  "key20": "5qt4RAET4wVsJaoDy8qUmUQats3EvXsRYrE5bhoYJacqMe8ve1NaKKet8Qv4rd9RZ9sr1rgiAn5ps2MfPjpKQYv7",
  "key21": "4dBHoAaARvdUE5T7qF9c2uvMCXFEtMwZkZiVuARRhsfNg95gT2YCSKeKx973AdoKKCutSUt2fwukCHAKMyrZuraJ",
  "key22": "44C2po2uPatyZwwEEt31wFTaaELnpTRakAQwUCb9sBjshszhSpoBGhgFu4xz52rDJt47i8MEtjoYVuVLXTk6U4ed",
  "key23": "hABm9zByxJtQ63YDRVbHPDPtA8dkoBJGyR6j1EmKKGJgqZ4FPomPaLAVP1z8mntdJBYKyezNoabV7xgKJv88Rre",
  "key24": "5V1Wk9qwWsypQfHQQFDL6E93C9TaHVEzScX6qwg9LVg1EF8t13caxaezasukuabF6FcU67643KLpJjMi2XMDwgZp",
  "key25": "35jbTkqax37j3F4VS4cL7yvwKhtv6UmxvhCSmBF2cKUz1G34vRVSEEVpZR4LQEF4GR8H8Q9YXNo2wXSrzvMLX8Ch",
  "key26": "58Qw2r44q17A7ApBWZbcoXbqi3Asp1KxBXTRXGEr5jk36reZg6SnDDym2iToHn8Kydym6EzJTYdFnK45A4pH26Mf",
  "key27": "DbYijHLedjjXdtmoUtmu1JuB39XfeJDHoxrQxiMuuHa9Eo9J8KHufk4QFbtVvET3eS5LDWyKMxo4mTKWMJDD5o1",
  "key28": "3WoH3HXaVpWXyCw4mdzs1Z3cvje9j3TWCoTVoZeVghqw6Gq3o3YZMHAtnQfYQFcH9tn7TZJmHaLbjuQdP7YHHTyn",
  "key29": "2d463zzC5JBtAz1jxQRRM7rh3tJb7GPbzZJvDkA7HdYWhUtLCsAseJoWWSi1VbYwk7h6YxkuN4fZSdvCwNWoKgPc",
  "key30": "51Z9YF1YU4JqhFoY5HWD9ZLEZbR92H6oTJzud6sjX1hh4haYPYLBEWD9DTiQRi6ErtFLbTn6V3TbdhZp67xeB8dj",
  "key31": "5cJvafSHPguQCqateNRzAK2EEw2rnkb2f2HhcTTAZ4kn2CEWgFZQyNvo6Cb9NXwfXgVSLYqHJ1NNZgo3htHKFWm3",
  "key32": "2YUUu8GVAWqrDsufdXinsZwafCVRZHjGRQKWXBoh9XRZUYjyzTq8xXmjBRFDoHUGBd8HyPcusXwRaKttaTfaozh6",
  "key33": "3ZMLmhZzZsVQvzoKgP5QLPw14gEo2VgziCJoXkjy9agqcifrqjThsEazBjAD3K8z884nTFFWi97425JoRYKwtqZW",
  "key34": "4VmecZDHKYvFqepM8r7HqrY7pQwdqG6pFwsw9maHrjY9VsczTsJFsET1b1b7MLcbg76xs5hbwavu1fwNaetAHKuN",
  "key35": "SyVsZgiGnN4K1vb9wHqhwAqYBWhgGMQ9BKfVNmGpsJBviLTU2WyoQHA1Jf9NBjYsp8avC5ebkMwgeZyvA2jCacV"
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
