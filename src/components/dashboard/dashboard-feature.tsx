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
    "5qiWKaUsmFGdz7zbdGrRxxBABCagLo8hSxcvJnjU9TU99toTjhzdiDD17DozVWaKu6NMXTNfbERCbARiCnR6krxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf23SD3oio84oBY7xxgghGAh2W5cneJAUXEyQMEgLFSPwok42ZA5YR1hD74HN22RKtR8PgPtqG4onPDFKTSyipy",
  "key1": "Qq56gkxnmf3MAed6p2c7AH3d7wVb2DvwV54884HfBtZSRhj77YhSoNqUTCDG3NQFJPP8h62VHUcShq6oVo3EnXn",
  "key2": "21uKzCPLoHFUbx9FTj3uwpKSJ2c69MwU1LjNaubxsZRBE5ZHB1zsH7fWxHkGyjVhv8bL27tqoTPjFK1PqzhcPSrc",
  "key3": "4Fq8EPfhuwvFKLN1Z8WNNZRktTHVxbkvMXDbdkYLhGiqDZhPo3uzeu9mbEAYf8XrC7XLnNXLdHGCfXyJPXB8DggG",
  "key4": "4j6xLkdggD41SWbtnbTwEDAKmKUqNwMrXmT5vYtRGiNRLmqKjGC3uPXyNqKd3hTfJfSu75fZfxaie7fL1ehTE2WZ",
  "key5": "5MdcZZtd69Z7DQXsFrdG7vPSGV8wYZ71kmR3QN9rX8tjBwkepNYsUzgwgb2ibCQkbbxZh634B3d6i67r64rgPUp",
  "key6": "3T9aFq5JfS5g3GpmzEWNmdBDve232QyDEuna4k9aSNunESxL1B6VdJVDFCgUqwwHK5ESbkJYVK6CxvSDRdQytrMy",
  "key7": "5WjM7CVj6fEsqf6g2Q12zYGquULy7yZusa56uVKPaDQ8NNucUecFMw57aBStRCNeTy7V28UyMPc8ppwX4XFoHK84",
  "key8": "61gLUgVm7wyQR9yYKVwLN3oT2cT6Vkibn1DowdsjSiBvULGYFPzvV2yuMb2G9WaNFD8tfxhb3XjbSD8dVE8XaPsY",
  "key9": "2zGUesXDXxDwL7avk1jHBirtDx3wR1ov1doYGLXzgC2RkCugkHVxyTf3xdv8Pkp6Qh4AmbhdZjbAyF9AB1MCJ9vt",
  "key10": "2o6sbyuqdSmV8rhSotawKtUMR1uegBppHaPqnRjU5syy9WFauBDYW73zhGLzwCh6cKx26Ro7ojdQhXEWCih3cPPi",
  "key11": "4TckRY3otwEfQoDDSWYrUKP1khDmCS44kLToNFFEZApPtuJJdbkuKWuAdmSu2DojW2QoAUGZki1m43oj4VR2uCGE",
  "key12": "5q96WcE13GPWN16iTY66BFt3dwiwjZoPrPkys1L94taVqkHVHBLCQW3oEqk2xf9q59kLSeaHUcGstpmNEDiET2rx",
  "key13": "5NtzTd3F6xDc3KeJfh8HmWsCb5tJzUkKgLTJdF84RdLJsXt9BkVnFyqWGFRmur4FXT4DnnUFJMbhYssrB1EcYvrV",
  "key14": "5knzY1J7FPH6sonU3oDJnsvQ4tt6JJKLQ9sAjWU1LZBqAQpj9FCdGR28kEhm2SY5nAmmb7SMpZa2owTTMqFkTcCD",
  "key15": "2ZfgCkqMuxeCAuRdkiYj53okUeKhSwHDsJJpuVLEvPtUeM2xeWT1yLfHWZb4U9E3v7VZ9A83cRh9pkf1vQi7jyRS",
  "key16": "3p7A5wvsDgvUHmDnMyWpkYqppY1vftr7ZfPTVBzwRjrBdKZDt6xwD22rLVAfgqj9dXSAQfsXoatVPEJmwbqTcu3w",
  "key17": "5mBbi9NkYT6vr6kYmHWUSWeDthomSfDsPDsSCf9BrsjVaeBJfb9VTwJkAJgKMBe6S5Dpw1EkAdNuukDh147zP4Td",
  "key18": "4VSreDwMtDxB1R2fmb3kNBBXjBq3eRrahPo1MCXZpxFTF18QYJ81inQxecdzwpzz1fDr6yN4Z2YwF9xEVYT6ZRav",
  "key19": "ruywuM7dRaofXyHdEtkb4pwQntbtLcHu3L4BnK8MdVFCfdFh8KSqGHPHJknb8WghW9mu9nJytCSquxXHGUsa2vE",
  "key20": "4XiHuGKYbzNa2WAsaTh8raTfAksHSVJCjmzBMD1p4UE12w88tcdJUBeefkPShySe1fUF8rPgoxHPGk25XwGKkZuP",
  "key21": "2qX3jK3xKCuLsrjL8D4BMQGJFSwcWLFkgJeuh5cu9rZK9ztQYzruUmoEiDG3CkSk1uphZ3vtkJcFSvEs9BA4U2h5",
  "key22": "FnJdGYCfGVTkU2yXft4gM9nhW9YKSFSpFnBo3JXiTDb8cfX1YbBnmWUrpQXJTa92BpAh1HYG77NkmwaDYafogge",
  "key23": "g8YpiinYmJdGpK4ii2HPWC6jBCGwTer8notnVNrpuDRH15rJNnwc8hz51NsSSjHmCXGaPLF5M9RxWbhJ5nzXHDN",
  "key24": "4VaievUzqYxS1Ex6h6VJMspWJKPSd6g3Zzct1wU24p5zjv4aNTFAy3qFVBevfzjM9UCZs8cnqnoXqaMMAtbbSRSM",
  "key25": "3TKp7pX423MhLnReRsi9hakPvccGie2u5oTaQ16YvbbCKJHx2u1jCqvprPdtQ5TP2xV9yfXzkJk6nhheUQUJWWRJ",
  "key26": "FJRaoDwmCWbxzph71Dus5oPXJMJDTFUqvTmDucVD8v4ZXf1fLEuSb3BHVdT5M8MNAEGN45cqhfWekKeh7ymkUQJ",
  "key27": "2ycSbn8tq39mFprSorRD9yCcnB5FcM1Pdu8r2f1RHxB7KQBHX8yY14XVoTR9KsnYUUunKAyg6ULFjxZ8EmLJU5pw",
  "key28": "2Lg39wuMnQaMebQt678gpVdAJimh5hPWPLTFr9oYxWUC9JubYYfdXqLWqt2QLjXFkCBHKcdoPTuE3UMwYZ8kZL6N",
  "key29": "5ZzwPE8FWnP8pGR6akEvH6uP1jynu6VZiqP4UpaK2UPeimJL9WPYg6D7b4jYFGD1myoTYhXHYJdCuS2CEP7nehLK",
  "key30": "4mvYiyAjHYGKxELuWHR1R2X9PqaoprYzD2qEJ2mT7Wai2xJbNc9snQu2bM5mst59W2WZbm26zvM2NoeTqhCMfwGs",
  "key31": "5SkEokRbvx46rboXWrxoQmRdbrqA74CeqKTUa9xoBaZ9i2DN85BVMuLj731KbbPgKwizcarXnntE9uD2DkAdR33P",
  "key32": "2KUKnoJsqnMYap7akKw7M3TiP29NrZR8fEc3Tb9hXnsiPTWST5wWntjAbNakCXfcjMd6ZCL1PL87THsLErDfKzK1",
  "key33": "3C26KNU2RDRp4442LR3xySUfBvo84TtBp6mEXfhhLtkVyGrVfnknLSwMAizQAvzPSSnK2vTgTLnLRycJnDXZSaVP",
  "key34": "3678aFYqjxfH5EmboC84wifxS7bfFC3nuAeKiMyNFm8yQdQuaEyfAkvrdso52wUVFf6xESxtSMJ7bYQ22UDkwdkS",
  "key35": "511E1WFLqZmeJVWkAHg7FQiReG7avfG8mx4dxsD6U3tp7yUHW5SQzvZ52seu3oZFmtKmScei8527xMGBxzESD9rm",
  "key36": "2XCpgPrnAtWmUYb2Goo2Q3MQPMZ6rasjGPRngr7nLaScGEri2Ay4wX1XRhNmhUaesJxnGXtw7MAbKfHjyUhFxUcC",
  "key37": "3mv1SsgPamgPbFvY7KbvJDyaqSUpcyRTi7BgktCABcXgEaVaF7Dbr7xd5bT1qiBrBqKreU84JvLoLifEbqwSVDw3",
  "key38": "GsETe9mJDELQdSNomKeH7Fs6BcsEwLfuYN6PnQsnS983Dsq66c5wQLpLwd5H2PgY8vri5r6Yk9QzLj9RcRf1d6d",
  "key39": "4sHBprMohYSuLDXWJjK69iKUAJoABBqaG7Gcom7s8cKAHnXfcL6LDxZ9YyLSVwNKRhWSbvtXHjSVZsCZAwN3gyTS",
  "key40": "63ixQzwThzFFEPvvEWHNrT5ofLdo67q2H2JFk6xARyuYQGg5pEHXwkN83myxypEy68hJWmh93bQ4E21YFgVTmUFg",
  "key41": "3Z4mzqCNNgBfNMpCigEkfCLuhvV82zTiXmQq14mMSigBzqNMVUt9pAqizELdMZLKZ6V2uWhoEWUtVNVaZXLisKoJ",
  "key42": "3ExNy3yHnckNQWhjhDrfJQ1YT3pSMRWF8XggSgV9QpvjcgFJAzADBshDvtTGNK6N6yLX1GFjkPAyZRY71trthoeS",
  "key43": "4ZpYfEjzCWDXCqX83h34EvYomvQkVD2umPCJVk1jvt186vHqMfW6drNrkq8Ww7B49bp9B5fehwLHnz8AdFEMD6o2"
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
