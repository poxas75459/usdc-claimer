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
    "2TEvYwCi8HE2pj4qPv6r732B7depqPCtExe3NCU9BxWFHNLDq5nQgCpH6EVQqdyec2K1A2qGV6GqH4EnNMiD7xaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxLyBDfrbZvWwsevdaoyYXkbR5Xs1sp5MNuyA3qJaiYDc45UK4duSZr7zBh8F87muBrPpkCQ6gGgZCLKj3Nz6A7",
  "key1": "35JksaGF6enUSF5N2RTET87QemprSNKgj7diBzkN2T9T7ioSHUKrQuCceCzAvo7pxJBQ8jPzHLk3xhwCyqduLc3y",
  "key2": "3PvsbD2WjqcbrknnNsAHpk5MnAPkkiJ5mEUNNuatL5g2YgfBvThUopEjj9n33ui5kZ1HwfGLFCjoq3SgUXQk8sRo",
  "key3": "4tc6bQusp2N9SyxLRpE1jVtz2a6tjHEoSC7Jf959DdrcifJrfZe6fBM53c2HMk1TUhbmiHpxNfbarUii5cswEazT",
  "key4": "4PwuNMoDYDTwTzyo4F3tp8xGdT3mRXshp8pJs3kUkm7WP81ewBFQ18tYLUyzvZG5DBonp2EbN1YQr6f4C34gD4of",
  "key5": "2Ue7JtxDgij8umQhcNGTo6vgzBkAvzktg61ZR6FXkubbKSe9smzCDUTb7ouYP5dGjaFtrgBR3W9KgPvyUaH2vNvb",
  "key6": "5ukw1DCYzK2meiLGo6XrCKBdJzKNv727cCVeEx8MgrQPePj5disbFiC7xUHgL35reK6BACmnkmGraGKVcc67cGrN",
  "key7": "4JqGUwdtrMgLN8s6YqMTrVmTWGXPSUaZea75LF8jaaTsRCbZXk76NRVj9h93U2oGB8qMrA9eo8jYp4EXQJ6JrZXQ",
  "key8": "4M52WdxTHo9RMKs8cnmR3Dk8coodrMptS6ae3QWvwUCmX9RHux23XxGSm3pMAvAnxpNtLxqMJqYtdZCk8xnzpJZM",
  "key9": "5Gnw1JgpYqzXtsaHZdK8RPCCGkf1vu8cWbZDRCaJySe4NN9WjxrHdgG2dAuy9nLjGiZQn7HULEjbe88ww8DeiFBF",
  "key10": "2CYyxU2injAr21i8s7xKY2YYWQCYhs1146xkFZKUaffgyQAQrSH8kJBVfMFknG9q61kVdTy6QUzeG7mjo7XwhcXY",
  "key11": "5YcAPybuwE7afLeSd6tzq6xKCwbfMk2M6eRXKrHsxMbb7jNWExZx7rhRv8FKMTN19Yj9QzSwpBovxEs5915ruQBX",
  "key12": "4nyFFXLqChPKqP1UsbziuUD1DUZjrEjbaTd2ysbLHuA4FN6aCXL2ggNx2G7uT9UorHrAT7F8hXVtqYfJvKwfJpuD",
  "key13": "eyXjjK5Qzkaxmq6ySgLJJhT9W9XNFgurhkyJ4VnXHP3K84yNx6KuQskEGUtpePjLL8pDwszoZnLW8b34AK4BA1R",
  "key14": "2uXDCXSdWaV4ZKbVgRrGJpHDix8f3Zkae5apww912XAbdEHa2W4akHT35DrMGZefSnQN5DtHH317EebjXTj8pj5i",
  "key15": "3MSbWXxvAmui9qErr4EkfEs41Wu7Y37B7qnocL5ZstsootWFLbB92n5WTcCj2QqtQjbTTJtStQ9PW3sMaRtSG3EP",
  "key16": "3WBk3fGpbfzVVxJ3KF54pjDuL6pMiCjxQZphJY45LtE9dKb7YAJeEx2njLby3K2Gy2eDMvHBVA5Cg3q7DwMyhHun",
  "key17": "4fcKc18EXYAaz19eo7VJUX5jSccQevY6cZyCdAXv1DAE4bh5M4JT5BQPZuu5PgwovHf166bk5TEFU9Lc8ffGQoG",
  "key18": "5MwiMSwW3anLYhcE73iHZ62LqfuLEFyUYyt4BDG7faEqNM8P8LhFgCFroDnMxgbYCwQB1j6Mw4e6xMSYFLy1ZVir",
  "key19": "3dfRn2tL62JamkxjnfYanFjKpr8uPhpm8aw77kS43U32vUCVyaKHbjvBGZrmVBpykYJ29Ha3cqcLtwdHg89NA9LK",
  "key20": "4p4XWRAtpTHcwmHFYFdf3pJTRFnBhM5tNKsCn4SYYq66pAgKZM1wZRKXXts5FXQae89KwjJcuvRcRpBgGqmZZFUJ",
  "key21": "3dTXRasfTxk4sxMZ6BH4wAYbBQ6Qg6M7Whg9UrdmtsN41ykJzUV1zGLWRo3xVQfFUtX9X8jbscSpY8RbwwSRGRiM",
  "key22": "3JEP8dhvukGdw8djKUnWczh3oJ6gfuE3WxtAxR6yJaxqiA9fzZ8Fs4Pe2f34MN7AFdQkrXw7W5PowXPtkiNZzASr",
  "key23": "2nFP4uNaeTHSu3mqjhn3nZPcdVdYLyMb3LCx5rLjJdaHcq42VEhMf2Macqh7ehBxDCZzNRH1MJ3oXji3nBCkjmer",
  "key24": "4sp9axi2qg3rzSN8uL39rDS2hZac8qGAHifgqqYHTi8cN4fxxVPhmcuRQMrMSoDZC2AyyishUKC6J9womFxopqk2",
  "key25": "3deXt6uDfPHr1wJJKyHDwDjRe4to5coMGQGJfpeEqRugS4E6htynnSyTScV5eg9wwTtCp4iMTRwYyyJTHKVyPEYZ",
  "key26": "2ESuKevEWQAcTCW3gBQraLWoWnJre9TuxFTsxH9C8VVS7rnLUzPreScopp9fTe9s4tdVhcpCNLdyFsPwgidZ6h7j",
  "key27": "2g3ftw1tTLrREmo8TDKxzP7mTT6bPa2s9yACTQn2xpxfwWu786vz8KBqUbAqEA96Gu67PCw7o3X8BxNWaERh8Qjy",
  "key28": "5JYoWc1uiPbF1Ep7RzgrioaNRQtBWdNLWLzumDudXcXjSwZoXCN4oEA3kX6X8s6t2UjfnPiR3fWaR9kgsLegA1Jk",
  "key29": "5KidCH64iAhasfRN2vuHiP1RrC85XJ7jHJBnzC5ijSVZ536r2je4XDEp3wCyjqmre8vbgFkPLWsi46DbgXP8XxLd",
  "key30": "4oH7eMjbXdYTFk8G2F93aa3ZkfG9iNCZkZC3dr73nahbq5Vcz1hTAgeh6fR6YuMCfH9Qf4AL54kxZEHCCkjw4Pde",
  "key31": "49Ny7ZgtmRjAWb6sEjVCeLch8VFEqsttzLS8xeQ7iJYnMJpj2BoZaTDHg2YUKfsDxM4JvfB4WPpD6Q4xB3uP95R8",
  "key32": "2RafpTei9W7UYnodLc4BUo9JV6PAmiwqMF5ZLHEkX1rjrJ1qxu9oMmSipb8VQqcFpCVPagABkqngeSWPjv2o1LmK",
  "key33": "3fHkVy9wX98UU4yN3yKhG9LECZdQCsNrrmTy9SrLEhPJLk3kLfrb8xXWkBqCGYDCvCqdQyTkprq13QLc59567s4M",
  "key34": "5yKNzB5HnQopyQ8CCxQqXeyJ8SCQmGvgCdBAWtQz4b8NdbXJNToFBu6xYNnL3p33DdhhYAuCbxLNUeemcTfmWSAo",
  "key35": "2Shqt6LL9drFVwJYM6URhXtsyQDzDPz28zF2tRsNqMficoM2oSF3n3LnkwQ4Ht7rPGfCUArWmdTqRjNgKNuKiEim",
  "key36": "2o4qfXQ54Ku2k8G6YXLiBR24oGRVmi5SD2f99pjCc8GZ19TvBVMsBCDb8UY8H9fp5zPYr9RSNZwm3f3AYHqW8pwA",
  "key37": "2cHxGvn355abo6jyRPgqAuhYBNNWf6HEhDwdyMLYPqdDW1pT9b2x9HdKpafpBEk23G7D24MxjfxaLwSgeNfn83dz",
  "key38": "4C4Yy4g2redMGtyxsQjRpkZzDXuhwjuDZ3RUfUvfcTkYTgu9z6wreKVcideUWQvRoqSGeumE6YzXPitL1Cxq7iRd",
  "key39": "L8ziDqHruzATJc2ym4itBXwDAk82LwRc6eVGunMfva7kJSCZr4VaLunbRgBySL2mJWXYeQx8TFGuHiYaNoGM9pP",
  "key40": "2gnbtTXXnPKFxqav9ciUL2VbkzHNkD7N7bW7hbFM4AuJTaXwGHgF7nb118ugqQkM36Z5hgYq2G1B1Zgoy36VSsi1",
  "key41": "3Jeec3XN4NetYDTKHwNePCiHB2toNkYvUL8BV88Z4SdAEU4rLh11B4czuGek3dU7CpBsoQg88t8PddvDY9fKYD3D",
  "key42": "34xnVLBrvxHzrVUU7Qg4nmFzGNHjazh9kPk2TfjuoFsSavZoRnUb6LnECnS9XJTAAWTiqdDLqGG6t1FLTdiYEhqi",
  "key43": "wnpdnKecxbF9qHJxkgVqHqMHz9KrstGVWQYvYTNNTgrK2oirNGdchBarecDXprYrq2rUdBusxDo4J7rpoeEjp3S",
  "key44": "4kLZWVGfX8DQtHVaiYMv7axHLvUF1z7AGc4P3txsiN7jP1HTjgTyA6i4SUN3ZHHhLSBjv1A6M8fQCPj1kyzVFFwJ",
  "key45": "CkZMdF6Kzjwbh5gCixSr13qToEdshiT4HsmCWWGn6nseXJv9YkbfEKgnJGTAPfuLXN36EyhjgCgBjncVvt2bYiZ",
  "key46": "PMarEAN782qFReFdzMxUrMPmqsFwnvvDum4okA5aitJLhUfrogvL49p72kiUpnxnaL3XFpQKZb8GxP2o5DRPF7i"
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
