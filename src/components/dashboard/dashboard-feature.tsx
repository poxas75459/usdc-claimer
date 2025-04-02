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
    "KtN6dd6WS5s5WF7RoFv9s6zAq4hKKNrg9N5gT3w2k5RmYpuVv1ZY4Vw1vZU8BznBSxZNj4msEA6qHjMsJcSsPCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GRxyMewYmBD3vcdk6ZJfwMGv4F1taQLTsy4W2HW4LGhQRwyRrEscJXfK98qK1Fq5gMRxpwinVLo3s2fzjM94zHb",
  "key1": "4aRcjhd62buVrDMAVwpf3A1XwQ9VETuZUw8fiRP9syWfDhuDTCN5Kb7kaAFHFW4WeDhDd7YZj2n5DgKygWo6PAef",
  "key2": "5uVbDmA7y7SCRrWK6WER5tWGUsSrkFpuseYkvTTPSWL2w59uTQyGDF5h1QTQLMJdnK96UDKssTKM5PK8U91HPx95",
  "key3": "Br5Q9b1m4w5NsspRYUYkh6xJqPhqVUBwYLY7r3heGfnnwyUAzuygdB7YLMQRkZsqor9chbrGQoKpWwLQksf5kwj",
  "key4": "5aUGDXm2RKbxr78LjmGBWJvxzK2MFMFKQ4MSLvxvsJmHiZ7u5UZrjn4kYne8V1CFauNwjCEEjGCE2N6RTmyAdfd2",
  "key5": "4uyVjxHzkk6rNxFAsSjUmuHHw1Yz4crc9hpKUZGJKMkutBsqad4QvXF6bjpAbicJ9TZLdfptqfYDkFvHSpCem5Pb",
  "key6": "5hFYPsSSDswV6ezEbHqDhcSBuqgYNEctXY4bSqHAAxpax6HT6m6NAm8jWYV58zQiWEooanRvY3vtpytUWrRx3kCC",
  "key7": "2Lvq3bXGS57Y43TTwXJhG7pgYBLDi3gnvVPfBWTNK6XdKzSwWPWrjErogjMspt8WNBYGsVVhre4cH8EeurBWgASZ",
  "key8": "f3vTxnCYkbcFpBNi1MUSXHjbqNfy31TxQcuytiDqTetS1txtWY1WMXY6WaMp7CUaWKXnuu6vTokdi2EYAoVTLrs",
  "key9": "5yLtfuy5Ln3NQAYnBM4yNAErP5vECUo1pZndpSV7vYbzLgFqcCpGiwTw5czUvB8gzw7wkNdgjZMmoVq4VG9dPpMZ",
  "key10": "445Ksehhm1DGNqDk2Hxpa1HkUDQ9HNc9v5YQFi5D41hrFodfqy7joyZkA54NVunExnrd9rQQRM6uPiLXANxfTREH",
  "key11": "25uNHrSbR8ki2EUefXEn8NZGnzaV4pmSWKWCVAZE286mvuYVDYEVCa62ZBHBhKDsKPKuB8MapvhfsL72m4wevq9x",
  "key12": "YsjVt9mSthNPvZgbAGaTYzr3rop6vgrXFBo7y5TvrVwT4R1BuCL5bbT5KXQsDxF4UihM12p6QJ4XbtoJ7qX9YcF",
  "key13": "r5qzqMKgpxiMBWYqusGMB9kCZCbbtV4v41YSzuyWKkivrKnrbUpEmkmLwvjnFh1DCscjSVBuJbwQSbPozbafqov",
  "key14": "NGa84Zw7oAZLTNS7AH83u6rdWXbhfbSXZEvtKRQMFkGrLeorSn1KPCu4PmbghKEDCB7qKEHczATceM44k5R872N",
  "key15": "4BCz6HJW61vJHM3BxmDYNbFnbBC3gmmBEmP7Mcu6DxsV9EZZHo3qrgeSJps74pVif5brdh3SfN6BbsQR3ZqqgQPW",
  "key16": "4RDdS5cnT4dnRVazrk7pvdNMW1JDaANPJEWkKSVw5VrdVooNiJddiAvBoyiydFzh25z4UmT3DHe2RjcLaBFRLFZD",
  "key17": "2RECSRgwye7XAgQEXNE9EirxPSKKpsdoB3yWtCzjaBvq8amES9tssqAkrsF1fB3xnj7cLdokTcZmBrSRR3qHki1j",
  "key18": "4zH3XdrnSsp5deT6g464W9f6cgkinoQx1CNsXjxJh3pBpWwZwFBUtcdEdfYxz3P5fbtiSPjyTJMwGMBX5ajkNvWm",
  "key19": "vLvyFkxuFamg1BfadRLv22iDBNv69LfbiZLXRzDwNvcSv3jiKHiwdumwjhfZ356Q5LiwRMD37wvfJA33QvKai6J",
  "key20": "3CNn1188fqoDBhSHEC4nHUerwqdgqBDTvkU9aN4QdN4XGTvnkXVKnUo1bnVMXTGd5wvKeXiEy1wXe9VS42veGAWy",
  "key21": "3J77bV5y4gfssSCEC9p1AYzJ3G4wtGWgJdSR9NfWLkoB6h5rDMC7wZ1EqhfJeEcGsoJyRoWCNqN8DkDCB1pcNMzT",
  "key22": "3yireGHxoNZdGEj8FC1R4hRMqpCSnyeDVHz6Bcf7vup6YzmbassDCnyvSSegBXp4y7iDyRX1GPpVjEjGGikeBcfq",
  "key23": "2Np8gAE2kx6JUTg3zb8vJ3LnLzBevQNVGTrPF8hAuGS6qfsb8y6CVY4AYhvmJUrR5ABMQJrcQbEASoRiWQygNgXe",
  "key24": "8MDoGDJPwz95cJfg1QRvY1TtQfS9Rzz9tMVWNA1FmMNPv46dsa5x3ykqh1VdhgUTNGxkD5vi25JtVhNwg9TAUP6",
  "key25": "3434YscPvULzZ88UpgMGyMP9ryhdnyycWZTpXLYZoDHkvtVrDGNWvcCU8mmZsgrMJSDUByaqBbkphrCWrphkLQfm",
  "key26": "3FtAdrWJsyrGWAWLMj4hsFBJKJkkcgv4GWYbnpp2GMgM3rFWDgp4uXaPZPP2TEBajBZ8pfCS9r9rrBc8t97FXnn9",
  "key27": "2H4m6CiWdzZuvCnk8t44v5bSsDKJiXP8NJpka4dEd1A7pbb74PnmbR8qxm3AAKWDEh2wjizEw4d2n9wn95VxPac",
  "key28": "4jMtFJwrsEy7bZpbFo8UTMy1r342iZGbKNeNsRzY4cqJ3nx98fjzzrAYKNEJZh9VwiVUtKtxAfboVco1rdMN3MAJ",
  "key29": "5Yc8eKhau9fqRw21m7A1h21q3w9baSMba6vxey1TrcDUb1XDMMsfwozaicQdNoRNvKUE88Tnp8SkZhnnVbQGBSbZ",
  "key30": "HwrMSUZkh3pzXy6kxWpbf6vmMbgKNF4q4gQ3F4iiGBc6sGD76fShrJFAEnzzgcgMe5TDTFLWKLC5zy1k5p6TdJi",
  "key31": "3w6NMmZDtVgY7N7GZqicaDmCceVXwL364zdSykX4XPWMwKB8U5R7Wc1RPJJa3r1oczGiQoWxFeJB9gTPrWPo9f46",
  "key32": "5Bz8P1w9N1xCsdfKG7HRqE3yXtW6o54FsmRvmxBBzzbYgAaNMSSAGoF5ayALb4nCFN58QCEfQFa4P1fM52FvY6uK",
  "key33": "3WZpnBe6iWnFhysdusZsoNWTpULr9HFMTHptdqKx8WJjJFhygR8zB8itNLJFkt5Dk385VVXYCbKHr5bacd2bLqvj",
  "key34": "Gh6VW5DNwszpwGqx5ra7oTGQSjDR1LtGRJ3L1LQ2iQFL131GFaCcbvd1aKnzVeLd6SB78UjunCbp3amHindzy5m",
  "key35": "3MYUhber5XFXwcZwWGC6b1R7uYiTW5ZNDGH4vpQ6ExJ8Agm1v2nJaTfpzYLKDanKBNKgmGAZvZZXGxvZKUJfvPNq",
  "key36": "5sEYPoWnqPqt8eYCprrJnjrFda2ZLj86JpGiK6x9SYi6NXjMnV8opMYYSq9dmFNQ4nW4QWd4Vmwa29nbYraQEH3",
  "key37": "4un8gvgJk3DK3jm1KBMYaVW8ebSrfv1wDY63f5CQQwrf8AFrxrGvMjwtLu1ZWL79GUWfQZUkDsAoxB55Sp7vGxLb",
  "key38": "4yVwpF4a2rMbeSdosJkhscXfTedLSKLVGPydqA353QRLeXnHJEeiJwbdavUXPLSwz2XJfYHNPYiDA4mU8osVpnCq",
  "key39": "uSiFSavHzrjZxbeckDbf1AhtyVRLUEdfM5kKQGVc6N4fU5dCQRvaByX27F7Ju1Kv9vWVYCpnbrFKKhrkeRVxWZC"
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
