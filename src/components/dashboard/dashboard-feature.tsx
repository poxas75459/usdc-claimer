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
    "5ttwAfxTiagXRqF1YNULE28gZgoPYRPt2JcR5v3b3azL2cZDjfh5znSfnxg1RT8nsXZuhbXLV5KM5QhS7Xy5FCUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rpao5WWe6RCHw7etLfVttdighcqZf4deKfozJjP6ysTdFYf1GNbcxw9J7Dm2shWrCDFdFfmdModqCjN6dFVWmN3",
  "key1": "5vXvYXYMUmDs8NsJpMoeYtK7mfZveb8M1cJN7tZjJkgCAhf2ej5MadJUhUzaYbqK1DHbwyq9XwQhtyoA1QpzmgQY",
  "key2": "4WotRqHVDFfFoxSS6G9ppSQ1PUGSMeBNVnMRfUrdAA6gtEr5ZqAoKimsjRvQ7rc28iSBt3VPjnSrMhLgEMs5QTYc",
  "key3": "5PYQBRcpBtYoA8upK6ghdPovdPSpeXm6oQwy2uBcabUFGxFw9b44UZE6hLpvQzus9dxCyMJjYpQM7ugsdYzekj2r",
  "key4": "3DnnoNHEFrnT9ty9chJSe7iJgjgJpM3naLmcoLp2KECrYtih6abB6wjkVzBRbfjrFHsVE2cZersscJwdBFYXR4pM",
  "key5": "4V3sbRuPJL3GhLBVwAWXEpBn6PFz44rDtXnkpujnURfV3qX97y2JZZ36H1UFmNaxkscq6rxvFXCykNGttaAoM1rx",
  "key6": "VDeeC5jG4FMLKsPSV6zqoUvAx1uXrUDYUJxPwBAzPUynm9hdXzKqnsQrZYXUh6JdaBe8obvobZeDJQVienj668V",
  "key7": "3ACR8rhqodgfGariEYzdE47RVb2pBdQ6eYcTjzKy91jNDwZKUiXesdenYS9KCibb3QUuQoUixazuVjvNq3TyHL1z",
  "key8": "452s4QgpWxq9iB9L8UWkYWCTfYzbhBGEocXcPfWKhJmsy4nMRs7yj1k1sQgng2h7frQkwN3S6zAUQYk1CppBBFmh",
  "key9": "sxCtfZkFopexVSii9A2k73JeAzMYCQVURJUqXXeVuffhYpzbapadJuDxLmVA1zacejKuL6g2GmB8skcuCn5KbXy",
  "key10": "28rQMJh2VS5oXJ6o7rqy1pWvqAuLEo4fFumK3qVB2GNVS23hE3Fm3A1vgRjQBLKH7VLYQ9f4RU5c8jM4957APyFu",
  "key11": "5gEWmrw5bWxjdZHq5PMcgvKAHQoEKev3H7ad5Qb65K4k6kftBw3UKoneBdb38iWzgRwV12CPjQghnt9KFrgbQaWL",
  "key12": "4C6SVcqXdHVriPHRtiEYtRV7A9BpgyKEjrtQUbqfAiC3oEdyipHN3Zo7GEd88AUhuyDRDsVLVpXzLWk6xvWC1enh",
  "key13": "fXcAB8kuarFriFhCAdVcPSY1vwtRgKpAaDrScCz1NVVU5cUnpB11tueCNGZRmaX8cT6S8WZVuvKGLyrP1qB84K1",
  "key14": "5qZV8fFYydvux43HjQx8GcRzP6DVr22BpgjNH4pSzkro5D4m8YqQcYaWnh2XQ27KHKyJAjY6C3yvgeCw23H7NNB",
  "key15": "hxxkZ8KVn1Lmf6zh4HkK4b3xXh34ZjwLcytEtZAdi8xpdiEeYYbLsynqaUHRX4QAhWMtEgCAMe7iDnvCCVy7ZnD",
  "key16": "92U2Gc3rGX8BEEM5SPcMqQs2cYP44duPoCKNzBUVewuT24S7SYQ1Mo47rRrRmA7TdAkiGqGGCmMHjaod7bScdGM",
  "key17": "2wXNmQz66ETknsvDCNUfKqAmHs75EZNaNnYVP2bKa5CvQVLrdg3ZLSGvkPUbpgrsLv99HEG2ZRuT3H5JPACxj7N1",
  "key18": "2pk94JSEEMxLSL84JTUXwgYkpJJ52e68ZEi7JXBiuKqtyZkST8qQip8AYoZX4pWSZCSXVTPuibtLWzRALdpJCaR2",
  "key19": "3957cWbYcxA4JsUdFbsNMoCYucR7bPF7Z6XXVQ4LrraLBCezYQ5JCWCbEV8Ky6p64rE85Szwu4k8UCRrVH2vKYfw",
  "key20": "DocBr5VbtzFxav9QNPwavkBTifcgP5KDNaY9fcmtGMdG8Wz9MTi4imHqqCthjRAy18r2TKtjEUmGeBU63Yrkcwr",
  "key21": "7FvXvUYbnkdrvKNmxr3j88KidtjsCRh4yubQX9rTrc31N1uPrx3NEfjYHV8KiCiXHNLJUutr5DRkjkf76XWNZAi",
  "key22": "4ERcwWbGr76yZTewjpUXrFAXZV6xkaAbzYpGGPRc1tC5kt7wpzhaP9KgXM5aEqNMMFnLBxpEjjcydZBETwa64ZzK",
  "key23": "3mAJRxTzcZsiViV4psEcmHxbMasRpoEMgSmacJbguAqNXzTCDKErPa6SH5ufopwfcodDfnk7WcpoPbD2jxQRpjRB",
  "key24": "4x8J1pxQgDGnkfTpHNL8qK3MY4fK7W3xjcmbTmTHjKnk87iXc3b8711u36VaEBuCMYqpaiQoxPe7Mu7Sgf33VcGL",
  "key25": "3ry9tQGxv3N29HNkUYo9Ehdde5GDzp4fNHdKtw4gabLpHwuTfYs3Az3keM1e8V3tSaip6zuN9jJgSs4zRzxBswnN",
  "key26": "5eK5stsqogD3SEHQWXQyxaAgyspDEQ5KKDckqzxiz8quf4vbaKyBGWze7qdERytHENtVVmphYiXTrLzhmxcFSPT",
  "key27": "3WrMwZ9uS7V58JgR2zoEjDzjRuBS1GHJSeanZKhmTFv19ZgsoaGRxErrfCyCMH9SvC19DZ3at12koaL5RWDJCP94",
  "key28": "5pb7sna5ZTy7jTfubnNYgeynKKAsvbVvktaPfovEvdr8Arkbuekgic893sbsXyD1aYiRzqByra5W6Z2hiQ43RDZb",
  "key29": "4csfWLHNiGmGACd63DbXXqBRHiAkSgob6FsVp7RiJ3MXvhz6h52MQMhUcXxVX5EKMhUhU4e15Dhj576qfcJgyvXv",
  "key30": "TpKVexbJVETsDt9FRXY6UyvmSGkXqgbEkyhgv2HbkeTxBU8MkMoRgd9mkNM9UXVmVLF8iUKcwwdLjuAYgLo3apW",
  "key31": "5U2b4C68aBHBGDgSsRYgj4WDHYqnN4CsQo8s8i3saKUXNNha19qNEFuu15XyQuShnXbFbS86tU9Tumz2tpuEq8CT",
  "key32": "5RGZEm9Zu8wCb71a5izKeE5LG8LpG1xwrFJYuMiyEQcPoZz3DBR99MJh7PdVw8XuxbjrUBJ7JRmM99VGqi5tfbS",
  "key33": "5HrBHfw1Ay4KTGSjUwhzqjFG1TQiihGNtjq5o2UmVw7eF7LW31XZtKKvNNfzbqVx8DQZK7tMLkctke72Q9idecMQ",
  "key34": "5kbuwnGj2ujfdoFdDDnftmHQYPjvB8Z2auqpWqaTeurVN1Sw8Kh7YXYr4gKWtsNX1kfiRaw6ip5coH6PBrxcrz2t",
  "key35": "5kfTdVoxLc1HDD4ZCRNUGxLsSMZC8HPW7b5m5xe15mDKsx7r6j5GytF1tAiR3oRXUGKU22CwRD2ifUCh8WxANkV",
  "key36": "2B4wR9MinTD3vGARvrXHVvmG9trRabUnd8uiGPKFHonper85pJLKcwFqyAAP7jB1msk1314p5ttd2zZ9qu3uJN79",
  "key37": "583bHATUfEVR5HP4JrYJabnzQwu9Sy6QvqsG8nkexgtzoPPVCHqfq2KxdBos8D9haxD8Uvu9oGFhBiJwhAs6wDZd",
  "key38": "4nEtqxcR2BMtyw1DW8DYFsgDkdiGazLV8LLsUwZmFS5h3byuxVhMcDia4gHFS1PNNs6UfNECTAw2m3F95rXf4Etq",
  "key39": "4LbUo4rEJQ67Jt8JyxaDUv1158NCcabcXDn2Lcn567AzhveFE2xKbYzR12Z9rkceV757CtDgAPKELQ8GDXfvSfhr"
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
