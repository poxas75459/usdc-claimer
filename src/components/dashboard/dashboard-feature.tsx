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
    "4LbppLtmGfXgNEjt56eSPPWZ6WUZ6XsDptB2cEC8T7s95S1vUpkpBboeEmpRcKckmSPGKTWbR9cDEmXPhadoDGJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Yp39PwK2rdQAgiF9C68ZkDchV4hroWuKqYsJg4rn5ibDyQKEyzzSA9W1LE5jbCubEePidPNHrp119CWgvGfs1x",
  "key1": "LNvaDCx6zW8knT1wgokScdEAYEatyxxm7yvFgUCbR7RWVd2Vzmr1652cVjXJ2A8JvZzqdBDYAu3f2QX7GzUhzFS",
  "key2": "3tkZH5auuWtK4eJXirxNNosxcHgFJnY4ZuURogL5dzdCxPjgBvjsfVp7TF3f83dh9pDBSM5aPXCRLmQ4CoCj2fGk",
  "key3": "2QLYdNFHqvkkE9AqjGNJL3wYUVPsraT6tWPV1dskNkX6NhKgxgBWTsg6d2x5NJxaJBfP4Rwck5iPYHQNkYXgTdAp",
  "key4": "2qJVg1CsCJE9sHdpbkpA7Qfme8LSHY4CyVuRkmrMC6psDzf1LbNHfYAXiNQ1gxNhQdRP1sLfX7x6umj2hquEkQmv",
  "key5": "JMyqxpmRE6J2dVwse1JRdDABnukWG5LVcP15BSmocYa1x1Aid7kv9EuL4mSkfdtNG2Nc5dFiS3SGkimPsEx9yUR",
  "key6": "4dVaM53981cXzLeC3JJrj6Pcvmrkq9ikzaiCRKAyjdeCjZVDM3bQVzmPtJLKyHdY6UEUUXeqVhtZeAqF7pyZmDzN",
  "key7": "3eWPebxdo6BpMR25KhargYPzX7xwqb5hdZfZja2dsXGbc19gDBWFZZaKN7QmtWzWmR3Rg9Tbh2txrbLB1NRWb4vV",
  "key8": "CUC6UFHcq2FXLF1E6tEgfVkPJjgSGqyJs1qUrgWrBUmARDcpKpvLdA4PfgLjEwcfVCMz8tFLU7zU5uxWUsF3Yg5",
  "key9": "4xdB8udp7mndQDvEBBki6rUnQW98BQKZ4mTPPq6QvpvG7NigF9QBViDDxywXt6DU9W1aTRbaChrQAQ5Ydu7ULwSK",
  "key10": "2B67CHSz7X2CgPXJratwxZssGiwoWQ2fTMmatdEAEDqkC5mbRZCitmpwCJviD4BvFgfjnns459u9D3ZcNiMnj511",
  "key11": "5G2jujocfQQQ8jmcaGqEVPYjhAk4RL5H6CYs5ta9yTF8up2wAXgn3u4BdgTix2v4SmH92KV9TFSL763AQPi6KCjr",
  "key12": "4paFQkxnfnawPjfewH7E2cH9nbSHpCNQ9XcvAYie6qC1XJVLfKUfvZdVQarDHDwo4FRsX6ZboKAChrfwnHxbdcng",
  "key13": "32Eau9fmH3ZR277cDmBHaR7jA7RuTGiMC7vvNQKsZiqYbg3DmrBUsuZJ7YoUnRedNzJH2wb79DQCMTVXwvirZsbS",
  "key14": "2RzhEF8cwrdJp6NYT3aZgnZdEBKrdDvT8bJsuCi1qzMdTo5FgqMEFxVwKEXW5HLdAEzCeuboccD1zA9rsz5ZSydZ",
  "key15": "46Wa9XjsceSxzEeeaoRks7PiTEhptonzCGWcM649mLcLBYXMcGV53ykfkouiAXK1oCnMyj7ukRRRmp25cabuKhPk",
  "key16": "5ZqXJjQVxUwBXc1hePsPUt7gLzEXkJzx67dWFBoG63FazTdnk4ZCDa2ppYMUBFbmcJ9JT6PLSLyiq4yjJfMxWXtB",
  "key17": "53aGWDoXU52oM3LkZJ9fh5HHSB9nm1iu1aiJ8yQB7BYbh2CYfpSeFSg6oZDk4sMPkER6gGJHv3gpxWxsKkF8HynR",
  "key18": "4YpvWUnwMRtZFJ2GaX9cSNH4GwGG3ozeAoqwSgqfLVDt7Bidm5TFYh1zNWQGAG8aFCz4odwdsNzk2sVw2iALpCKy",
  "key19": "2cu6fFE4y7mc5WHk2rZZwGZ84VBRPX2V4MYDR98c3R4T696cdx85fF91nHuAz6WQEu8oCSwnEknZdAFZ4ZGkdki9",
  "key20": "3rabKQqV35BM2u7ircPxS1nBqJu8w3WCahB3ZmDyjztzGkmiaknkFJd4EU2LGjhUuF1PcSM8kDPkAR6EFpFubHSg",
  "key21": "2SX1wu1rMbdkigEppyVNU13cJ3DFXpGJrnS8pdc1WsMCu36zvf27Zw569WPkR9xJXUKWu46fDCRaoJqNxXPWxXnw",
  "key22": "2o3CQJs452HvPTAeqbX8kScPtFTe8U4Zj2QhCe1SgYiKQ73u2wsK43A8g573g5NsLvZJYnpS591CVMgdK6eC6Azh",
  "key23": "3AAhviatD8HTGadEaT31AhxhP3CcjCnt58ZNCvZXif9tJ7mtPuXwdr7dWh9jtFoEqbuoYPFiagdbzZ8ELK4ujBFA",
  "key24": "64kjA9f4dskR8hZxnVgH3dbJi86RgEgzKEE4vSoQ2pFRmD9JdCK43MYjeggm4xP9dx6iT6PmrPxbv9Q8n477AQrG",
  "key25": "4J3xvbWWKPWUky1QhouyuVpgRMu2P9kcHag1vgcxSJzPDwmeVUUys444P5FsHnuCa1y3yyUidDGW7ayybgDSg9NN",
  "key26": "35AhR4VdroNQcfbPC8JQKopEBNWiVayswdg6EWFGsUabd1nqZhScQ1PQtLkak5njbofuwwYzvXYAumfNUyTAnLMe",
  "key27": "5bghNNCfkEudrzKe3XHKPH8Rv2U5evhbsACwNcM1CHhMPra8kvJxX8WpUgZJuAkbmUsgvRCDA5YwwKgRiTZstYtq",
  "key28": "2TGKojxzp6cCkGM6JD85XjW37pk2A39ety39ZHUUPevargpa6N71eYpq8s1n5cjw2pkntWgSgj36zdiaceNA82HR",
  "key29": "3mva5aKu4LqDArVv6SV47ZUcexLoqCVFtevuY5j9FSUwBETApfiUssonMjLqrPxG52vsGzzJ1hqDBW9BdaHXc3vi",
  "key30": "2yTGYUjduwGVRCMA1UQXiepaNY51ySBzZop6q7xecJe8KFUwjJZxNuVorYrAckHgJwVgjorKmSwkFxX1Q9rgEdvV",
  "key31": "wHppziFQY7LUdtYhLJUvHgdWSMeACGUek1fVMrre2rPje7i7zRBG16YBMU9fAdSfDXTC3ry3j8CRhhyjhCSAcM3",
  "key32": "5vrFdyCVCacJM4URNg3BZtv4E1HUbnAajgZ1Ntps7vFaJJ742vLunx1vs6tGz3hM9mUVWio1Cd7DKdFiwr5ob2Yq",
  "key33": "5WyuC9a2ycHu11yzYVDx53AusAZNowiEf8H7VUdVhzSapKvXkCa2oidk1F683VyPLCskE7vvzsdQjfxYyjuphgNV",
  "key34": "5AqnWCoYY6ZuRuy9XhsX4qwufVsBsTKkaTTX8SqMbXtxna8y9NeeNiyrMiX6bPijNgpLzpCjQ7h4C97otkVJhhT6",
  "key35": "5b5BppLpFYoLf5ZAbctgatbHn4nqCts9tqwymKZ45RbDhY67HpMpMxaqZaorLd6oveNL6XVgkYwDwgM8dXjnYacu",
  "key36": "514m6tGY9uvCMxsTtBfwf9AgpzXy8vMXDngU96zZ1vdn2ckMeovTLXH46TCUER5zxSiJYY4nZWCVw95DW2wXNyGm",
  "key37": "fuM8pUdH4GBWXJM6k83SQHPr3zmbd9AZfMHCmarFExT78axV2Vf48yUsaWBbsLe4rP22qrgcMPTxzbF8G1UaavX",
  "key38": "4gPk7wFeJ6H3XvgXsHYNSh9zfbYXCaQVk8kS2KYVTa4g6B5wp4yjZd1SEiNMMFwLfqXQj2jKC77uQL3tRdJZbzE3",
  "key39": "2YRGV1BY1Dm4PmjbgRMw677BDrKVrDURKeN5KGGeJ1dRKqv3WP7RMyYJAssUcwuyWX674bWL1QegeQeHHkT5VjSc",
  "key40": "4UtTPm1SXjRTAU98PJjxf3UcSqGNiR8F5UY8QdxCp2xxjnYHfpFGRbepL4tDarCK5gyrLzynZ1qFdFYWMyWXQkm5",
  "key41": "5F4BGuBmYerV6dhY3bcTu62PisfY3D9mgTCkAgppSaW3UH9opTdcsLYEVKmHUgkceTenuTQdF93ndz9PfWbLojxZ",
  "key42": "33yqkUPeVNh2aYHMqspZsYXqt8zDWaVvdZuYWMW6uR2Pm8T8SzTJ6B5RDbE5zr4wN5QgxUmkkGYie7QQfGp8wjps"
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
