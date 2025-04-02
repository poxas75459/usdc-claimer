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
    "2PeL92UbfZSLreUzKXgWG7reMVzvdBJkQGB2S2FpqtVKSo7zZSAzUhco92sywTQ7C5V3nDbButV2pGi4VBtHrpme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64iZR2kKQeNNvXNJGCzsVPYJXqBnPcjPFtxuk5qB7pdPdEcuaUpx5ar3jaaMTR6tNQXXpMDbbuyf1WNi7N7HKHWS",
  "key1": "2fAC2Ste42ypohaH8UZCLdm43tzqdMgQpvfpPsXBdJ7YqkJumdg1A1oRk1aw3966xixFkPHknh4fXxRbE9MSSSnV",
  "key2": "5daksrMd6m4GzsBB7pHL7JUBuvaJPdRF1XymWJTHTVPu3roZhbm8quBSzqbVeg2yiH74kxdo1fpbr3TWdhL96UqS",
  "key3": "5noRmmRen4YXKPefii96upi96v5UkRECpw9n4LyANqhy7jehdxK6vVJZ3hC6HJzqsiAHez6Zd4sDtfvx8ZeHFCu3",
  "key4": "5PLGgUrqtXYGdbedtMgAaqGqSrHA2DBfbtiRWuropcPMZJXeZZyQpUa6koc6c8VamiEQjBL3vVkup9K1EgVRSV99",
  "key5": "4v1wHYs4NE2mW12J3fzAA41h1X67zknmHtg9hq1gSL7AcBANV9uDd1TgndKNVzpx1yTexMKeuiwW8JZmyY3DRvYn",
  "key6": "3nXv1LTfUeu3i7Lk8HZGZTEWX6xtZPNXTTbCMRDVX1RBH6EU14bNYVSGrrUbuebH9F1R4ACRsUzmaHmupx2qLaJ6",
  "key7": "3yxmfcJRjVban2jR3Nq7sxMtYaZxLiLzrMcQNeJ83yFSTn5c4KYbX1hxwPhS5Kpf5sHe3diTNCeq697Dfg8hHPy4",
  "key8": "43KQrLWpuf64yJBQTw82CW888ZNiPBK1dovDxgZVjt1gWM6TwZu8nbuznsErTFsFrxeTm3E71wiZ1ZYyrrvP5fbu",
  "key9": "Ys2Epib4HSVTiBpmKeyYXsFFREicn5CVAAC6SW3n2RDRiryJo1NM6SjT8cbJepK2qqyXdnJW48f6ZP6PJPCB1Uq",
  "key10": "5cxxrUcPDgHmxmHViCq2CT6pBxqQqntecYUuuQMv181CtwxZSQ9Aqptnx1WzoKvBcWGQX8XiyWDxFy13rqmvg2rB",
  "key11": "28TkoaWv52rxS8HmBXc47s5NLHscwL4WgnjeEry6bPzzsfjipkHijjBV1hp9R6xG9wr5kk8vFM2Yw4Ps2jAn1tZJ",
  "key12": "3C2gcFrLzpE1NS8ntT8TdiB43X6X6SZFgviFx5WbT7n1fAv5VUk34AvSwuCN4LbnTFiNU4WuHjbMf3qbTBBd3FcH",
  "key13": "3QYUJHGtJtzrC9sNvGJmEmeGdPuz2Frh64884V1F69Z2Gejgq3eXF26z4TcatskYresujDJ7etz3DfbWq8zWzoKd",
  "key14": "5e7A6W3T89rGmUT71D6kxN3RjZYJ1t9WpKrt4WDAmxKNt22XUXGEtuQ4ZgPXQopBH6TZA1SZhxZ32GRgRNfatoLm",
  "key15": "2XUrBaHZfrcCY8sV3w94psqW5VSAEe3qjBnv5Hu9bZsT3PhwTiiYHg5joZHuXDxAnUB3awx4NfrbEQaAS6eTNHDt",
  "key16": "4Aim2AeXtQ3UXkAYQPEhQ1PBWxA9NvLXWH5gVHVeYN8jdQEPdyc2mmhYwEcSEmakN939R9Tx8sepoaJaLa8dyX7j",
  "key17": "3HBh7kvBoHHvMYZokZ2Wwbg5CbxqnVriYzYrPYJfxhepH3GUgANf2mhJvqcVyHaHm29btBPhnLh9TsdYu2hjvdaL",
  "key18": "ZY97SKoBYdRrdrqbzb5RTG5CxD279tKewa2vsZMKNENgZae8xtdiEi2GEXXZGHHXgdyWjBRh1cKvpUHjbdK92yA",
  "key19": "wKfU36akcTmEdtypkFgyjiQeajXpKRNtEa35R29MEEmq585yiMPDWSwT4ci6dhmFyBFXW9pgb7NhSGoKpfWNmjL",
  "key20": "4FzAGu5MUHvRTyXrVyMARmZZUDZ8rZY7BWWgZzj7pqT7UT4CVwsjG4QXQshXjYJSvfQLo3NzRJVPELCfPP2n9osM",
  "key21": "32L4ZwPAVTo4zsJPmsTEs99f3QxwtzEWDfRuEeVbjXjqBSc5guDf4y65eoFp1pUqdiWGsydfv97fpBtNuZAyiDjw",
  "key22": "4SV2FEQddHDzcsGm9u4CLnvZurdCcCCNniykp9YHS68d3Dpb8bymStXnkTnhdKtF27STeXMHLzdoXTbHEHFLJxBS",
  "key23": "3UmAPibPYCNJifWZyiySQiYiQK6Bqt36dm3tQ4B4s371gxDaZCad6H4ibZPeEcLY9fG63Q9q9UFWs8C13p3UN2K3",
  "key24": "3mDNNHHfgDNBjH9pwBiEpijFf6QeC4aiUCsPs2m6NGHg4253oJVkCJcSZs9jhbP4tSPP2mizm9YTrTeDcBe5ZKyR",
  "key25": "2c6t9xnKrgYL8NaKCm51ykzpRXbLfJ94C5kEfowy29ntCzGVQTq95ZwhsLPYupwn1XAHwgctAgR8MvDYxMudv57h",
  "key26": "3ma3Gdic9Mrga8TaFQzeanh4Qz61Jf49X7aANyWgvfeLrA48iwzqPk4NUMXqzRrrpgNfPaQUkZju4RWFK2Eusvmn",
  "key27": "2i7MWJM7msU9GVMGAoop7bqLPCDeebN7zHviHAg6Qs6hrcdxJ4dCXLutpz58HKRqGEYKaYMmJhrrBKmw3HzdYsBw",
  "key28": "2ovxweq5ocqpirhu6zCQ3qSUZMqNhq9aR2sPezdXLUeynPU8oXFzUUeEUoUPtz3gw89D8XdmdxkJpNKb6rVos1LV",
  "key29": "tWPYmXLTReo14TgcakuR6iqJeYSETn5dGdeE5dSjQ637R7aH6URiAAGhSpwxk3t18h6SGiDDMnLrrgKEYgcyF35",
  "key30": "MwCEiuTpjUm7x62eokJK7TwAauAqiYiHshoBmGmq88rUfBmiyykz3Qj5Ym8AzSYzHGFAVb2BsRwsyaWoGRoEdmQ",
  "key31": "BrgaPSCEjVfEpaHwLvzySjz5XXicUn9WF8LjX1E8LXgA19bprPynd8ALURzfCqn5dPz7xFpyCaadt8skCYkcJSm",
  "key32": "5j3E3vsPuqsu82XppvNEUbUctZoiuSXxYegq7KDt1PbY2DWnj6t18dnMRLcYXbp2jDL4MuYKygP1yzVdkhoy3pyx",
  "key33": "2inKyxT9WYVmaLoN9uEPG36Xisvfdteu7D1th3CrfpJNra4po373VHUZRMjoRcmUKpr1Qj6XQT3hJAwFhwNqacHg",
  "key34": "3d9bxGMYnedWfEoqfgey3qabWgLhGSAT1xKGmAPjHCU7sKxRwjAcocq7erEkzZyXQwoG6jQSiFZLoLQnh9wme8e2",
  "key35": "5dCSUPoUzAMKzuCBAt8LNYUNGXnBM7LaxYK6djF3nYW29dghLR6sTeXs4jHST2Sb9qoRQtbaxg48hcuepukEAuyv",
  "key36": "3BiVL6Fc5Zjugt8cAnAbJb3G1gRgua5BZGoAWJ6FD33VaXmFtN2W3NRNBuC3Wio6mUktkQe1d7LBhKZb4hjJpxWg",
  "key37": "3brcqCoovQHBPNRDo3uM2cFgH4k6L7NxXZuvTCHXqVTSgeY5PKDwtbVsYJTGbuxAF4r2i5dHYz4mg86B4ZJktqQr",
  "key38": "5cJ4MT1zc1zrn3EfYbgYXbhQAQXfqg1r66Rqpk7N7sAeUkRQFcRJ9b1Mq5Mnf6w7padh6byoVDNTb7bWMuWBJxwJ",
  "key39": "4KyE6Fsz5D3b5BZmngDHvCqfNY1E2N5Hhhj5QDZUmqPHikKcxNMaboxKGnpKhoczGtf9oYi33spkkh5EtrwrZHEe",
  "key40": "ge16w97bV3apdJq1segncankUbaDCrz4VpX1H1Sw2QdAf2xhTfuwfKqEgxW8serFpS3ExvfzVpq98DwuMWwrpv3",
  "key41": "65NoK91fbNKyahcAQPeybuaWFRXCXj2dhpXqZpWPnFmiZrZ5ZaDke9fnMXwB2ShGj4e5u6dAjsRSV1CoUdC8qgM9",
  "key42": "VFU1LQoz29HcQSinNazymhjNyUa9huUXpTXFZJXqQ7fwUb372XrNswbgZAWfkzVkRyy7GnhtCX9exDsyfsYU8DU",
  "key43": "4Ch3nEdpwxJQcatXPXnxrHev48RDc2pzZrUaHwAinD4C2AT4HZxsVANxqof8GjmKqxsf2eeAktiuhLsaQQxMEvFG",
  "key44": "4BPX7e4cyWodSDtjUkvA3YceMwBr3JUf1HwtGCx77tJnJuN8Xq3WV5Fq7dioevcH8iwgX2JXDWfKB4DcAyoTjLH4",
  "key45": "54gbUd3TznZhTzZxPnKb9e8s44vEKYVvBxrzXErsNRcwXeMzkayq6yedb3kGen8z4ydTy8zepamHEqXu1G2Eb7xW",
  "key46": "5jU9rTW9audVs1mdujdbHe8jrY89YaDoUXEcmRfPBC3RM4xuWvWaXevcv8w8XUq6ECpTaLpFMR6gsRLTAQv1rvL1",
  "key47": "59swRFaddeszn13a8obVswYkQxKnYA3hBgiHdHgwqbeSYPdnRMisf7LXDchQLK9gZpjrozRqAGF1Yn2dRWSppkjv",
  "key48": "5JcCcsmKaDEeZK3FjyxUkPrE7fpHWzYpfbo6AjyFMVujv4odUJv4Vz2TaZoVy3oPzqBBhwPnn492QnWTMkDfoEi8"
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
