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
    "v1zNYVLJPXfBJh2wVqX2LDxipC8FVXv1jxEvnwNPb6GLVyVmYKEq3nMRWW7hrepbtD4AgwVVoAck6MXrsojhpEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uJ6W93htSXUFMVKz444zW5BxqRACpkhpGct6ULKmEqV3QbASsgfkvRZWua9VzMXSiHSjxXJSesqfZ4QHr6xHVyi",
  "key1": "3PD9RxeFBw6ujoo2FhwrKtnjgxQrjQyc9vuUXVs6tfjQTpXXZBiFsirucEEnsBZJRnGNzzs4QDmgntuCub4QDvTw",
  "key2": "3HYKxcR2AWzL1CzKQdmwPTeHgB6dTbd1RJyWLYPNDJSdnG3KGoa9MT5hWgCr6jTFg7C4t6zcbMyRMmmpuCQjYZyM",
  "key3": "56Z7Fvd9xgpead6v42Xa5Mj4E8iqvf4M9fp7Mhv7ztBAqviDXuMSA4DLSAxTHj1MztfLnME1jSzDgYrgBbkaUNLW",
  "key4": "5ZarvxdMT4dT2DkVuARs9WdWzmeZcKUshqvEJtv5fuUzFQugy3LiRwjXgrv8brVoTkYGXsePoZRdLLJUVJbcPKH7",
  "key5": "52Y387R2yFyixdmcWNCSTVWYBCHnYDeTJj8ef4upgLbi4uuh2GYDY4psxdQMJcErc7UWkduKfDvC7EEcA3bxHByW",
  "key6": "55eyEHmQdGfoagnHXfFNjA9tNPNwq4X1jj5gGZZHBdepetovbKFPT3Z71JmKeRFV5o81vVt3oCBrkS8pojrFGJhf",
  "key7": "5AFQeVj5m5aejJ38mYwL1NKmKfcJ7USdTHdnCiA7MsjK2X1p61vfqpZMTRy6AsyD9f9HSL2yiRgT96UwRhpUP2ak",
  "key8": "5HfZEnX3PM2xZPCVC5CtxSQ8xD4FcpRoS2FuTaRq63J7GJzkoWSNAFmvAfv9RzBEXxqgD2AmFh5YcAFG3zABSCha",
  "key9": "31Q4rvB8bbWfedMdjD4wcrUgedVhVAF8uahgwHiqNFNMVzPth6dyCNYyLYFe9UdCCiWHTzd3hDtGyrqXnBCkGSqc",
  "key10": "4RuiTkiLKbBqiMtY3YWSkSKbJZF1bDv6GyeP5jD9TzSZUc6aZDuPL43ZDx1djX5rKzweR8ar8gbtuo3BFWx9y685",
  "key11": "JhDCobr54QBLmezTGBNNH6b7zQC3BRptr1atzxwjLFsZyyuiVJV5Ra2v24KfUzkaYV9uG8jyAPFRPEHCnHA4Rts",
  "key12": "3d9V1wAhgbu3xBdU8WtmiC5hovEmNoJYvNNFb3nNr5NJD1kgztDHRV7c5JsRRKTmJfYm8AQ2eZkKoLCQGSMM9xqV",
  "key13": "29Std2eCWBP9tYuwzjg9AgPeqRk3DaeB3S32aQy9mRu5ZvsPaykVab2WSJWhWMiZuW6DPjBgMJHH362shPVGkR9x",
  "key14": "5N4qtLE4HiqeYZzkmYcgXtG9FSQ39MiTyZhwPQXvH8bTaR4tfj1GM2hAg316hKX7GdfaWzLRHUbrLRBhBgHMKkHz",
  "key15": "3jCMxTPV8v6A9AT1htmNEBEnztcgSnvWhxhSJeWXwARbwFicVS8a4SMu71uvDqXJm6VD6wjohAAeUd6ArfPYPJQp",
  "key16": "QiP3EQsfSHGyLRiivSXe9naAizAC5zVG3xdFiVpPgymggqA33XxVLVCRjk2izMwiPQGLAFLWcqYEipDfeYqCiLt",
  "key17": "5UFWE8C2Pwf6rfk7rxVkurS9XtA1p3Go7b3n5AS9CYb5Gb1PBQJBD1k5JbgU4WeKji5VerjTgfusdB6h7tzybuuh",
  "key18": "gFa1ApXERtSPq8SRdXvunrrz2uY7ZzBL473aH7JNRxo6JJTRBhv3ojkbdKLuJowGyGDeFmVzmfMt36zJT31XNMo",
  "key19": "qDsWi9UjZxxGJVx7P8MogigUZyoowLk6pMfQSCikxcSruPq8XyWDCB18TfZQnMXSumoQs9uUifSyj8Pmf42QuLw",
  "key20": "5XYXLKfRHWTHYtrCrx7FDJqHdqTKoF1H8fHux6Gp55aeUNoBLMUYPn5fpnEwKG2bBWB5kPuUFmBN2x8MnxJyLi2e",
  "key21": "5HvwnpbFqMFAaEt1dT5n66THZtpAiNzALvYgnVTd43mUQSzCMV7z6yV32cjym7Y9kb68DBbRmi8DKtAsqMuecEaa",
  "key22": "48KBzRhmbqy3uTSSrPikQUTPq1F4WvkLkHA4N6DyhLVcCUiYWmDn1TPv1eLJNgwAeSfotrwMhonRGjFuZEptJ9xu",
  "key23": "5VeDT9o5zJVWLEZ9UPMjrJykjevJrqb79Gyn6neCEj1TXpg8PpT222DXUjacj6ZhsVHyyDNDAMyvoqfdDdt9UFN2",
  "key24": "5NvdGvX45v4wTwE7HLjw4uAS8sfyaciPov1dgrAMgKas3znsE89Sa8HPWZqPgnzXZF6y32tri1Qt9pFDeRzTwgAE",
  "key25": "ckPLrFpy3KWnkEw1XG3EJie4coLg517hzUwek33XMYbTnquw3TRHLs9Ld8u7e6KTbL4J2Zt6sGyEFbzwriHGGzM",
  "key26": "4rmGvNhugwH3EdUK8M5vdi3eDHk92D2CUbSkAx174ANzGdmYoKZ4tDkJpVMLutAnVad8u65HXMeeNivVxuFBfubR",
  "key27": "pqpYvPj5k2nH8FJW3KxKqjDY5NWZA1qzUyZRwcVeYiTjfToxEBQektnPWuk3TD5MhG2saR696aspsJDuirynmPr",
  "key28": "4Q7gWTy31qj384LVBnLZ2StsX1hSFkV2nd4s3j1kEai85AFcQTL8fYgsqeNvSsjVBvSJHUaQze5k2qpE6jmjhUpa",
  "key29": "5So7Gg8ntmEcqoqsrBPTcbm3YhhhZfPRGHbTSzE8WWSWJ7hWCzR8kPo5zpoN4gonEGsuxhBRy7Xr5yhioxa9UxTy",
  "key30": "3irU4kkZ2BNQkjUMSBnwwUxC9xewqpGmvF2xZVf6MHLpx8C8dbwhSqMUgDhzsiXvsihpMdXPDLifNnmvMu2BYXsX",
  "key31": "2wZLfdfhnJM2LSQhpfUrjqAnzZ8HXerfEJqRvDA5MwM3d62kaXUpop72EwT8HyNUhb4XfAzoBZLQHoTb4CzgFFiZ",
  "key32": "e4c8FMXXfTBnKg7vfqMQxH7Mqko7SXFxvnApCDPG6tB16gEZJFNNGkvnkn8KBssUX4hxMZacvxAbQGvsd3wCQRG",
  "key33": "3EQ7G3iz2zrRHzskBQYKdetWsXK9rrDVLFYqDkQdT7d41tsHVuwynQVTBwnCwdy7A4wAnfuvxAmvYfr19AELm7Jj",
  "key34": "4HSJM8jv4iPBywQsJ8qDYyeESjbaQaDwcpFEkTgncf8EqaKmbkfp9R5yJuysW3nVYpnEuMsE63b7oPmYSXvXs2yz",
  "key35": "4vYqC8mkWv7jy7Rcdi6mgAqr1KPhzCyTJ7RnzAbFSDnUXumSvn8PdoMaxgkUGM8VsgPo1228eur4KyAJYpXpr8HZ",
  "key36": "2gV7tLftEzSZiFgHVSZpd7ovbXDdEFXif2QNJtFaNxULmAuYqdVwRMRgdKSEmmUsf3Aj3wdCd7rCyPevSyTsomgZ",
  "key37": "56MC1pBbxQsyJwmK9BqJ9hvnVPUTgAYKg4F3yauqkP4ZNCy3PumHPNv53Lpv5v5ssGFqhoSpJKtE2b32DENj4or4",
  "key38": "2wkryw7JogNd2SeJf6acvQpxEUd8brXDUFezRsXEBGcGn1MdX5a4i23v4p6hHnLtzTtnW9vaTc1oD8ERDKj3o9hr",
  "key39": "zhAMkaPNuzJTjr95ksLkch3eiHRjWZhLGGzhL5yq5n4fgGuYJX17zGKCoPfHMsZ7Aecuge1yvLsJVgx4xDEa6Ty",
  "key40": "39FXMeVHaruyMMuySCuFLPQoisMcqGD6xPUf7qMRhaYk1pVJrDs2TuGnqwHMooZ1ZsHQ4EDDcs8Zj7TmdGromomm",
  "key41": "5Bk4b5tAo55S8QsReTki8TLH6b6D2NPJT5z2NU5Hnvhpjir2VTaSa4MarhzzvKv9pm6bpu35gGT4FjweCpCipx3F",
  "key42": "3jyJwbe35xCg8QkMGCPkQwC39s64wyWo6xS3qKMxHZakDWxb1PPTVz1gFiCXLxL6MnjgcWerxCpzxr11JtrbZf5m",
  "key43": "56nEiXM6Rtew5JH6BK3FXr963JtmniWfVis6AsPB6VeNgbxB8DRBJ6rYvTFdkjRTA4WhxksAFgdkBakERSTub5Ck",
  "key44": "51edR3vj6VFRAjq2JN7cQWR13NnaTQLLtD6MgF36PqCnJo4L1Gu93wfGNdpGMqsCpmSKbkcwLNxPch7tC3TKPZPb",
  "key45": "4BAdK1stZkLQTs2VjZpBRYu2amhtaVHxorLuRXPUAV1BakRgLYjGx4ZbwH5nJxYqY5y5N6h8ZxiWLU11HYbKUUW8",
  "key46": "5eArSTjSTNd9HJUfEHtcP4CnG3WLn4mtpJRMfXttnJFtHcBLCBy35TzcNbwv9CgHehuB1ZA22hmwjy479XhjR91J"
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
