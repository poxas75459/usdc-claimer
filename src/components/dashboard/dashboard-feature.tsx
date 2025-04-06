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
    "2EeYbuGksxZPUraN5qgaqkUUjQagnYSfshyEZ3Q6MbSGXWoWJoA1Rg9Zxud1EDEgptP3TBt6Pxu97hDMt94hz1Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TogHeU2yYusHiJjp2nU2zh8b1yCVaEzPGuw1r2dJoTsSVFWU484JWcj138t1BYXSkQwD3GVC7PfCvvPJ6WMydP9",
  "key1": "BAuagVeBKyRJCQGE1T4vytVr4F9VE2uRauWNcmgLfTgydgCP2oCDssSzzJ7j5rhL6ixzA9qidgciJnKnCk8WJjr",
  "key2": "2jGHS8JQPQ5Lhs4NjSqwwJh85EePcMT3YF2npbQRZj2ermPDxurwoA1z99f28Kqtd7fUApzWx8BxMdWes93U8sKd",
  "key3": "748FJiFk1487gxmcrR4aagGLhdwoEgeBJC9ovQ9fttL75sVQ89rAxULwKSdTTUznGZCqa24gRBjJyKzuPbP3PFS",
  "key4": "2ZRULRQ8fPLRDNmibSeuA2QrZbHBc7tjbZY9ax73rnWZWBAijawdYE1qZPhU8tcPVkx13Wm1sVV7389AWzV5CP3K",
  "key5": "3zk6bry1MiHFRqrixvDSnqCAUidrQnRjkzMjNWkY6zrQbf5ZHQW5nEER5wqrBjmtnrMvXQWhjzTRUvmc61N3LE1F",
  "key6": "X2ErG26W6fcQ9rrspaZFJaZiAVeBjPTLTrcZKd8L86bRowYs5YQGWRfuscQbN2TM836tKM4hX3c17Vzpg1ccUWY",
  "key7": "2FnXqrvi8HrRXhPh2SB5DVnSb6oTGmHuZ6U9BCB1x9vCMm5oVbHPDSdYK7DSooefeRQCtGR1w7eG5Mb4P1Gott9Q",
  "key8": "4jJZnGYd9k72B1M3i2rpePs5WXTEBDzausvWvb7mhWZox3WTZFM9d31bqMH4h3am9CnmvEX7DPqf7XN34SCKJLXW",
  "key9": "xdbrTmYBPuxJXfsvjggXpByJrcTQRxSZWSVY2gERNCfDvLhLrewkgysYdZfEJ93Tz8VtphjTY7wFFdNPNyTzuMV",
  "key10": "YryPpBGTKP5zALJWBxvWNBZfoGirCfXgvaFh1NYu6hKy6ccCnnQNwgMMYyoUgZDgeV8t8cdAQ8ZVFurHgkzMe7x",
  "key11": "zcRrnERxov7sKaeL56SA2psZkecFRmesvJSoSeMqEGoJxiDFQ9RSr5jbxrYxkc87Zw1ekJiACNVx6c1o2QFsKEh",
  "key12": "5DrfWWRLAjSpnvGMc6SAGj1nsdxoxfVDT9yisQXdzjk2R1KTStJZ836aHjgN6BLXDtXC181kNNDwmjVdoxtdS3Xe",
  "key13": "522P3cBg3mQvka6c8K8SVDZddZgBwHVrHJrLdW7trvocEnaLLSzczvspfBA1rbZ4gspxnkmdZfppDQJSyidMX2Bo",
  "key14": "41emmr7wNpfmPsnoUF1Nj1bMPiAjjC8ZpaCXP2c7kbwvRtAnrrTBCNGAHieQnTDTXzmppqZXc6SA9mWmonqknHYS",
  "key15": "2uXhLSLsQobTJHfoa1k8JMneZLMjAdrn3eptPQdwF2i4ogWassMfQXvNW87A2KEwcVB2shbHCHtQrw4GK2oZEoPv",
  "key16": "2dAQ6bC2bTm9Q2jcxmbo6tkPwew5aZ8fcXVG67uAdfMXBLfpcyuoU77aCa5cnYwUpuNCyTkH5RisDXd9jKTfHhtB",
  "key17": "5Mxxo3CSqo7f2jcWmUCXNhZYcf8iepw1Yxyk1vYfh7T8LDzE7aCn3Z947TpPHifrkNW4XAuRQdpgANZZpwc8SVR",
  "key18": "4GWNghU9BEBLqtvEApTpsvWrzyVcrRPJPFcucHrrKtqBs8ebgCvypgvCAxJSLBKbfKW9xT5MYap412r3JesrKrKr",
  "key19": "3UXSq9y28pB4fixG4exup2bpGDGTAcEprM7EBgDKnimuqnEiQJD5kwiq6uSWc3ocwubW7CstSXBy1qYYtHnowE3S",
  "key20": "5pM6NFg2eDmdfXxEsYhT7ynnxKCiU9PmhJ7vL5nkMJUekvGLJfTdiU4Jj2PcusWoJwVwdbLwKUroyMLjowoUqAy5",
  "key21": "5JJN6wxYgCxbxXu5ixZNmQa4mrSUKDCDNgSWCK7CSv47J5Gj5ukvv69HSFhxmS6fh9HGYwWRdwfZLb2qjeAAG5tT",
  "key22": "4tGbVapX4qBaNk53dxhV9oXvdgZmy5oJ11jMvrHMq52kD1M6E7iU9UFidcihYcuh3nMJTSLfoYoKcUefG2DdVFqj",
  "key23": "2CaYE5cSc27SGe2CLR3KWPrRpoigFcMP6wsLnnPvzbYuQY7xJrko75Ch4kdEMBEnaZywBSpCVoMMdmnpbT8x6KmY",
  "key24": "5ibKbytiPa6TvxF8Hwet7hFCXtYbzf2PNN4g9EhHzhXkpWsxW17uieeHHnYxcY1FSZu8p5WWfEvYpfAtwk7onAn9",
  "key25": "2iZiA35L4g4J4D6oDbgKLsGqpEVAhPgZWfvrdHG4Y8h6Kz5f94QK7oAGMMmqZXkn9CZPXp6HNHEHPWn1xVF9mFpe",
  "key26": "4sFU9znJGf2t38V9kmzzXLrD82jVLQLofhR2YsfgRirxzGEUDnozC7W2ptsuqQ23kF36NAfvzL3Xz7Je9dzDYotV",
  "key27": "4jaHrbpn32aXGFsq715LNgoSr4BofhRZ6vfXsKYTZVxS6VHFABn1CpSmgC9jqVz3NTTxzGUNf9UWc3yMCwq2ctoK",
  "key28": "2LafRxBEzamqF5EyqzN18QD3S4q3gpsFhuBTNzyb9RfSgBnCEejCi9SihDxs2MSK1f7WgvtmhTja8kntJPP2ExKm",
  "key29": "3oecSW8qVTCR7ftFHJwsJQ9y2TxKaoSpfHWwZgDd6fn4Zv2xMhc24kgsP4eE1Y2mmGq4ebNB4Z6GtK1txe4rxyU6",
  "key30": "5s3724hwsGcntjm8r8v3Kojg9PFU5TMZtbq1iyWASaeutza8Y9PavLRv1JoBmKX6ocmxCeEpvt6fkBsCwL3Sx33y",
  "key31": "4JamoVeKo5Nxehb19SybNVKVQNskKuo9EoYrur7rHe6fBNpbeFGp2ivG4ANTBo9Liq9Q8VFyaWewB4mP31KN88pc",
  "key32": "3DQnqZBdAhAjhf7jFJBzKKCwcC5Nhgbz13Lh8A4VtEGNpDSwA4rfPFaXTSz1Rgt32NsicXFUHSp43gjnRH2JYKuM",
  "key33": "62NnmE81ddocXwTjrEZaQCMKYkhpDquDU3y5Z96MtB7R4rScvZdauY7KQSH6pMRgiU77Lsoo9ePjmeQZVaXvNtBp",
  "key34": "2qdzT8YGKvCJWiZhBFGrxtbAuBA1oM8utTcxn3TcEm8fHqPhQqMHdKLhUKEitz1qJPsmRcywS1YnwHtX6ZVmt5f4",
  "key35": "5e5KdFsCLykGFKSthc3Gb6DTu3JyqtTRfzKZk8cwuMC9qVnx1mcsVtUcgfjjmDssuxH4zPjzC7o5ebvxAmELbCz5"
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
