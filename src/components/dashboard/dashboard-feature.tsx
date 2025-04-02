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
    "Xi3AxocoxPAhfWBAYgPrt5ga372HXetoP9NVdT8s6EAjoroYnh5eLnEPqMwdazqNRNshVSR48Lt5rXxzRjthcuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMX84ZSGhstJUtW53ST7rt2GFEWBzScxC2WS4TPb7LScFMMnRbMaR8WhXYibjFGxcLE6oDmsYBRovWyJWo8Qbh",
  "key1": "5jUP2yrizm8V1wbvTSNVqM8mA9qDgf1ew5WUq7x25ehMQ312W1PxNHsc6d5fg4f2z1CAdqw6s2jGfmEazEVeY9X",
  "key2": "5BvtHT8pZQjqfcM9MT1YArdaqHG8ZJHxdzAdtc1vVqnY1Po7YXXNHf6gesTovBa8Lb96RBnU3ATj8KysXfCaGDFj",
  "key3": "5FLnD8dt3qRZDj5Bhd6s8APGPhtp2fr3fWibGETntPR5Li9SpMFQnnZLziqvKuHBYhJCuAkpb5ur13NjMj6VaW3A",
  "key4": "2zXeZm5yBN5jZkXfNGybmYPzLdp2hUC1WBWz2PyXyAq8gmHYDmz2C98MXrdqaoA6hu4u646dpZKQEyZ7rWt537LM",
  "key5": "121FmUZgFXxS1uiZ4HrNZcEaD4sjhPLcAvWfDhAAmCjgyXx3yBUPDertq2udeJArs8vtCFmFrbHFbptuvppu7tWE",
  "key6": "4skkLBUa157CULwKJTBxNWQmruvTmvzVZRgdtW3dtpZ4wuickfu5s5tvBjJAxkW9eWUihGbxJwtz1Xg1WnL7Jbgx",
  "key7": "4e1vfN9ZW4mvZBp5Ykacv5hdmky1USPnn8yAKBAJXTrx3StxG5wx4m6A1HgwfhWv8wZ1BVbfBYqrkaXyyamYRqze",
  "key8": "37u5hpZz39v2MBfLfvQQBEkaoZFy3q56oicxvitoySUNZay9pkCZgusZMgRYFT6wVPYfNfKB5cFAmfhE9BKP5fVu",
  "key9": "4Cyn7qs4D3kVMwPrusxMwA3N1yaHXMHKdh8CXWX9kec1XARC1BTGuDcmX1Z4W4nFgSDzr2tbBURN4ej9t4cwV7sf",
  "key10": "4dDumzVNEePvbhNTkeLhUaVwv2wn77v4dNPRxoj8Ch7JFPX8PH9SY4wejsNhgcvaYEUGARbZcBb2jMzUXNXGmrgh",
  "key11": "47XKALpVfP4WUn1dHWvdMZL2sV2Uf4B9qfNgLX939rauanMviWbSbaK6tSnfymS8aoFPbhEJ7rU2xK5kHUgygXN9",
  "key12": "2cCM2jCdWjuy5cN5hbC6igCYf1K2Sozz5qVFaeq96EkpPPLVsezDB2gRL28S5tZeKWQxQXXDMSi5NuDdK56VcUKx",
  "key13": "59Hu38gv9y6QFyZJviUcKPMoEFJ9Go2jGD5tZX6vkoyMKQZsCzYbCFuhAKS9LiB6gf34LDt7dYi66ZMx5N5T4Bye",
  "key14": "3tLgvGLhQrB42tad284g169FhkDJUZKp8mi6dMq8ezM6eWnNBQGLCCARZDv7uR1KmUPVD2xTQcJyyiFpqKrQWMG7",
  "key15": "4pLpGE2dWJXxQ225wFqvhdCSahe2iGpFVVc1CZtqT9EtV3DA7U4RHdUFMoAuDyUAhCa6bGbm3X8JAeEspswgZZ4M",
  "key16": "3d9niYfwags9QvhBXFmDqaW6uMmuKNHBippjxyHog6Dxiirzwso52LWEssc2bAVAhGJaHvQF7fwuj97CVSmAMLn6",
  "key17": "5ci14fBSFtpjV7ZupqzHqPFDguoXiVpMBY2eqHEsq4dNqEW8xv3LvdgmRoQa4rFf9FvHS78DgCN2Z1tSRsZsfkeH",
  "key18": "5VCcZnwc5qoxG8ARjvKZAPkjzpvHx7GLXj85EPwWrDTaoKXXuFuYdPwcf9SSbKHeRUfCbsRJ9qBz1eGrFxN6dDMd",
  "key19": "j25azpG7PCegyqiKj7mM31g94vKihUds4FUaNfTsAh5atCRfjdFvhfQfbjKgzkr3EnN9BR3MK1Y4jMiRshzeiyn",
  "key20": "2s8v34QmAycssn7HK4pvvGgymUBLaVbkPjVkfYQEB1B24GPCgLkfpUJDV7FCqWTw2EVfk3yxZnY2F2EdRnVezEyP",
  "key21": "cYCCyCi6m4Vawg3QYnnp1ycdsJuTmcKR2qy3M1UDLDeQ4QNv286VGpfGt6GvVdWjpHo6GgJ4gG3Nq1VFqdTzCuA",
  "key22": "3XCP95DcCpTngW5vGnh15dgbKApKDS3V7eWnGaUfi8JXdNjQa9g7xv1P7EBUQ6UC7AWPVM9ibbpiBy2fx4gXka7s",
  "key23": "TLbcp18YWdY2CVvyXeLwvhM29WfAS469rpSbKRXbHzDrWb6kkHuvkguugrvg6w883YLAYAR5si6Ed7qG5odqw4s",
  "key24": "pDhXCvRGiQrPRfpY6bwSu5zwiFmuPyN5aaTCeXpwFTxGJMDisGKuWsgppxDHAAMPpwhvcqmtbdEHXkEavp8H27c",
  "key25": "3AVpzzj5bEh57R3L9RGFgPFzdPnTjZQgHFYgqThio67jTEHrFMqd3VyhKK5o4ZrWd5cJukUXuv9Jv3xvGt2U7LSQ",
  "key26": "3CbqoNficjjaWzJWpemYz9d77XawMHyGrCGkEaQbFbH6jaPV6KG5pzw1hmoMFeu9YbzNh2SvL9wWQKVFeNjKkKAz",
  "key27": "4eHaLM6LL2bAX3m8MvhfBfK8BeDq3avS1rEx9cSPQ5s3inP6cNn8c4rGeSh73fgkBCD3fbumwGC5BAMVzCMxyNoP",
  "key28": "322oUYic7DgKHfQ9FqsQNxBttmgZDCyQHjuKDQtLGBkcqJc2qxd5PdTdfJX6P5tU8fFpC4rSXNxiN9PMoDCxXMdo",
  "key29": "2f9YcLxpBi3FqsswGTGcME49ckGfSoTThLMTDTRKk9yQojWCVYU5P5YeFtNycyaazRaW2s6gWTYnhxYWuSo8n5Ln",
  "key30": "CXPAVKDEz98yXJLWgR7pU2gdiCYCsq4PY41PFtfLNQTyQbYZ2itNqWeFQrz3rFfJHu1BJcF1kGm2GyomMrLKW5V",
  "key31": "ttBRSt8EDXkGJunrWpiK4wfGak51Ee6kVqysXVnHBR2PDquCQ4SZVANhWCz8rsqDAqk6Fp86jHxqyFZqi2uxajA",
  "key32": "3rSz7qUWaFx38mGrcjoV7A6gAqT7jeNnNszSWEVwKwP978jsYySrt1jmtnKhFCHp2U3s4FMEZ4pM9bhrWwx14tBv",
  "key33": "46vN3koo1usZDynWq9zVBbjufEdxmTUBCJfMFMrfoUsMCsSb78izJ4bKLrX8sCaq6TpFHBYMkiA9i671yXA4E9hq",
  "key34": "4NULkAntZFrGLUYGisR6ExSSPkqSaSPVP1KNtjb13ZKN1md189SixvXN3w4osbNeE8dqhMrdtDN3EKdqYcrNzdU2",
  "key35": "3PhvPBcBCXCNVSxepmZe355DwhyL4QRFZYAYzhV6TzX48n7QAs7Xvuh6kemkadkQsEkwySHYugBRTBrTZhtr2Mvh",
  "key36": "2jV4YBWFpFmbXPMvz7wh4KdF1oJtFp7Wi2SW6d46FVzUpcRMa93o9ApgB3ntUwx8i39kcrLwxSajHiRTJdasiPiC",
  "key37": "3XwWVhkXET8Db8sMxheWiVMAe4w64yktYWfpVkpPoefatAJ83uL85UvwUktsFMZs3vFQbrx8sZcvRsgARN7euEdq",
  "key38": "uh96bLY5NJePWxwH7ZYjVXkyJruwnhNwDqyX5prGBNanyrtnDnpRmEF39rVEgU55NTpfdYKWPNZC1s6ZRJcvvmd",
  "key39": "3Uxuoi6xNNmQ6A9F2M4B6Gi48be7Q56m6mmSo5HzsKa48Gndwb5y6yZB4zwXETRxivZSxSDdZ3DfUs7rVnZUjQoV",
  "key40": "3ZgoUhfb9xV7CqZdGUWDN8y5dScusBPKgq6e5SezPhKqyi7Wx65acihkpAD4qw7mrJAwB5vUqJWE87EjM4XPxDr1",
  "key41": "27Y5Jw3mJF2XftxMoEs1toMcknofz1rUNHTeGGcHEooGuKwtcUxubLkcf8pBAz8tZncrYwmf7LfeVjKrQKMfDDYX"
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
