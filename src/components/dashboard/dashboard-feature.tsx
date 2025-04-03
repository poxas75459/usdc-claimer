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
    "GMeieAnN7o8dvPgtVhCULiuZt5DJ3WK6fd9Td7PM1beAfoRCxc9WEdaeFFKG4dteWhyfySGGrhghVaakATjjkC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHUTRwR6nexVogegx81xdyfMXhF5xHNc7JGHKABBx2KmR8cofffEofbjNKAXYfJctmwrgfYMud1hw4wY4cBWwqk",
  "key1": "2JuEwNcuMq9wDv3mzyhsQMSt4Ey5wZ6dKegJZPG3tp8zAELQu9Udvif6KDRpBEiWbpCYHmaHCj53qGK4bFq3UUvp",
  "key2": "3a44g5xQSF6PYR7sdMRzJoDqfGbn8vJ37EU7NrjaSGZ4dbVBZe9gTtqgfbPqkU8r8e9rG2dzAtndhHkM3QrLVuxS",
  "key3": "vScFUBrHbGWezHYxqkFfh2kTgoRoKYkx5ECGuhLVsUeGB9gpEb9ixxc8dDTbkzdaReQQFmEaHwZe7P28kYG3CxJ",
  "key4": "GxhcU6FXaNrDRYhjh4e3kcyiHfpdcdkgyYWRgiYPrjQircgZUwuhxPbykjQCktofM8kdgsrbnQkbuy2cF4eGiYu",
  "key5": "5Q5CwWX4ttW46rMsgxAQXsTokVoyqmSR5jRh9kRcqy6pDHphNpPt1gNw12rXYSokVVwfYR1jt7QfRR5xcbFxGhrq",
  "key6": "49HYj6xxLrUqMmceW5jiMhiJ7msiKkLCzeJ7R3KfwAhAFyUUdMfggx7n5hztvbnqFceFgc3GVPhtN4zivLfUe3Pw",
  "key7": "4XRR7rtnQhCkX7BLVnwTniapEFyVQffisKWTrQPsqvpAbZ7ofr41LiFW7eMevS75hBQm3waciugB5iLYQzYW9Kdy",
  "key8": "2gYEupCXGQapZK7fcs2nqN9yg38yt63FAF3Ds5RAcCDUnAp3abaDRrmhHqvX5Be7cXCFvaftByR8o2nHF3T8HWyK",
  "key9": "3aVQCTUpVH7Kp3AGaxkiMrJurvXwVdYQ5LHCmp7GrDtmyorMz7wURFzUvTmVYmH5r67uX1mFLPwQCGb92mYRbcNy",
  "key10": "5mCvp1uwtg4b9nthqVBKHz9Tpe5bpiDBBSgNdndtAzjQZt1XbCdmXUfxtzwwnt9H8D9WPkWzXsXEYVB6ingpfEav",
  "key11": "4VE9JEYjY7pPTZfXzXm3rRzwwJFrAkASWhgpQM6AiiXxQi5khppxefLuWpA64DDaiwvEMvNZbUj9qjtfc1xJLJAj",
  "key12": "wveF6qh6zqiHf6Crig2WRapKvvsH2LwRufqbRbhYCeHKRbCnP2ZbawGK8SU8hwPinjWPyTdkQKcQMn9xJ1kCPDm",
  "key13": "36sXFssvZLbZTcBdvv85npjy9pSwySPcF3A6kzdaRGXUpE8EhtJ615oup32Fk7nqSR2JnYxFt8UgkQUGPpwc8WwT",
  "key14": "3StDSKUkgueZUAGMgCh1c6Zx782Asoj4jY1rEuHJ241TJzPhSAFKMN9jrP2sKkc1V5MEortdF6Nf8zgqhxwBc3QG",
  "key15": "tMPxDkayQTY3FKGAMH4HuFqAr7XCXzLCiUfw1zs2GkCDUBrwsujcdqPzrnYiWoWdKSqD1V7ntxASvH6BqJk8wqo",
  "key16": "4miUYQSdCk6hcdk178JPn9P2waRrqSbWmRGH8RaWDvd39StHSAHSB4Q3TNomYAEThB9Qu9edgDtg5SB4w9spTe6c",
  "key17": "2yv4TfSYPcfPN24PtiX9askwPr3vhf8ZCT333t2A6LMd3yhNbMpxv6y1cydwf4GbRPAKwGT9HCaJwyNbmFC1ybuf",
  "key18": "4iLe4rSRMbASCC9U9mPGHtUaWHMJ7ZWjnWqjxmN5si54uzmkcG9n4YhFmUR1StQrdS8S1Ax3ubzQ9dKBtMHQP4v2",
  "key19": "5H4xXrPN5YeqbRJS5XHrSxuCvCYb4uLjsagkbpUK7oUsuNDoAaGVFn2J8zS1rBWNTBPmHTMLrvdCYtXwuhhdPZza",
  "key20": "4guawV7Kqo7BiWz5hWNayX5sTb3YSou6n8mfy6Gp9Qm4NVsvGJfUBVQCAYMR8zRqAfjLszxB6pYBGFD3o1BmWdGN",
  "key21": "gXDN9iPGKD7FWEBtL6g6B2KwuoFuHqdK3SG3bPYevXAfhs8KTsHeMop1AnMQyJnX8h4ZmtMGQfixmjuYSU1cL8Y",
  "key22": "4nzAykKypYh3TNPFvzbLuFREx6YXmrCQ41DcMbaDdfrFGnH6qEbRh7umYcrb9HRf1HszYA5m93fHyW48tpKxX3mz",
  "key23": "3YuBuXSRadW7YU7xaCWGBFTJdTZwCCE2RCjycUffDTFgwzGuGzi4Z3N6QwYS24esvczD9fydgXnPXsYrqHp1VRpG",
  "key24": "4JcUBHPDFEs45E4TdWfCNRrZ9aA5wp5VZpxwVFedcyt1Dad4X9SMjkmWbvF8ZYiK3okoSxcfsLN3HGqvfmQifsai",
  "key25": "2hDpffsHyvw1DTGVppLE5ceDbQ9wAJhwrSe6zedfQTFyCQm1615UvQGygyW8uVQ2ZxtuzVzFWSbfZMeZoZSGuGVg",
  "key26": "4X7Zbwjur6KPhAdUJGsWwq5Q9fiJ7ZSDKMiXSwaqxbYb3VKy4kQPo6fSnbvBm6e7ghiaj2s6zB8cAMqufZyCXjTX",
  "key27": "5JQBCMHFeoe9mUxh87gpiDQ9ycaAScYU7mpcqD1aTkXw3wGzPr4ihv493izZqdc9Us83npoaV848vCDj9qcTygRU",
  "key28": "5zNxWZNsh6DsFw5PdhXMyop3qemYftobViT8ro4GJZ4YpAmrbqFxv46KfCpSpm5vPRJ1GH53jppLr8mMm8VxjVh6",
  "key29": "5BY6thiyJTwgoovvjnQ89EasgcV7JbXgacGkDFdx9qQjmz5ib4rstbMpyop8F6K7jURnVYbFriBj7FgxyaC8XpaG",
  "key30": "47tCD2ZB1s2MEXTEiUKNHos2pmCzwtxvvJDLkX9r9QBSjxZnNEa489725kv6TLHUhsPejvcpf4uEZX1yCTgSGFBV",
  "key31": "2C5smuBJxSgwVwDmCnuSPc5NnSfxXg6qCkiPBreWJA3H4heuWtpHPF8KmKRKPfYcerw7DgJ5UEdSyjQmhfuLjhhi",
  "key32": "4fnHE64MqWqRHowk5m3q7HyoiAr43XBsWRDjpwWBcdsVoggvjytzT4V34cWbTKstLxjhftgeYdPZymdw2orDp2z",
  "key33": "5him2vwpxX8rBv32SxnBt846CvNQgePnWzCKUXL37vhK7utJcCn1iV1NheP72J67zbsuTMr5Vfu6Yv7UXxEsroN7",
  "key34": "QcBgmMwo3dQWxzbntLi3Up8a98M4QC27nuBztEvj9sokh8rhF8PkUgabUQrWQixi7kVVoWZUFsF98mzatU5Ttk3",
  "key35": "3ptpvNQbG89Cuxf8YGYZjGrrh8XDfANZqmQh4FaRZhW1dXNBZoJeBW9n4xGYPQDvfDrno16WNhcwU8VJJYFzHLk3",
  "key36": "UFF3WxC1iS7u4rMuQVedfLPsze8S4S1ZhwaN3Qb5cD3aZDnmCM9Woe7QhuR9Sfoha413iQw4uWhq8xcJCwf3crE",
  "key37": "VpJuEiaev6yVXcx818LC5wtdMw1N2ZrBKHEqhvB7TXCUN6qqJ2imYJv9WihSbvwppFDCMsqHVjRjP5YcLVzXBTu",
  "key38": "3AvXhdDarknLkq7uExRS725XqsXtRWXo8uBwqXYGUJ2AnqqwLQk3CfeV5kzWEpnHkgiNi53dNU2a2ue9Quxw8Fp6",
  "key39": "44kgSwnYHPgfQ6eyD9FpgUELtqtaTegeMrM5Co2zz6sAomjQPEw9kJWCoSGA95a1K8R5oeaCVhSmqZo56z1kp2Ki",
  "key40": "44k6kEmQuN2biiiPoA5MLkLPNiEiW252QvDJBbvXw6nGFuJ81hY79Jv78oxKwGYmCn6DoYTE941jKP3UVp59Xz4h",
  "key41": "3kBGPMhZpvAJhaRY9Q4w7X5a4J8imP7gqpvnkTNW1LTGwauNJsH3uDZ52HrZb89Qv3XBLrixWa8jhurJyuprJ6PZ",
  "key42": "66GpE1DzeYy3a3uy91AzhXd2pBMtK6B1KFreL5gseTyXDXuo2mXCg8qf3rABiKhZdt8QRaRZKGZyZe33N9MMGbwV",
  "key43": "5ZZsGgJk4w2zUpweQNbT6nMzV7co9N7fNAhonhTcsMyKFhsaFwXZ4ovJCuwo6iNB2e1fYySBSTa7CaHNe3Jzw1NB",
  "key44": "48UYJMr5gc25Rrq5odi2JDU1qQ7JcLC4iwdYCYgZmJdEXvF2J6hisebK53Edimuxwt1rVnyLTJWTdE3SNU92UHdv"
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
