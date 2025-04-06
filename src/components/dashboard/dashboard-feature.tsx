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
    "3dJ53C6eD1ShjWaSCvDXm8i4v9vepYZ8KTnGFjg2Sw9hBdLTgm4hDp2BihQNcKt5cSf4QCbDwnyvmfVfjEyNNbnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KzZ7XzZDbDSLkzG3sM6bCmJAMtx5hivznjazVikj8r3R6jJuKpELhQcPpw1FHRDS9FaAPUeViQBL4m86L8vveSQ",
  "key1": "2MqeoYvrykgY17rbGujDbfu92j4sraBR6Tua8BHX4dvFtGxsbWRWxzPEBnQUx3e7yqA5UjP6h9EZuPNJho9XAdvu",
  "key2": "4xX7sZwui8B9wDdENwnBB81ZJxrAwR1E6sQu4t6TduqLCzPh5b7NkCbsEoaydK3m7wTcSVMGS77xqY4ZV7ybNSgn",
  "key3": "3vrTJVVoZFRDiNgLs2vccu77ASstgYXLTLK9RU65pdqfiSHEAKaZHFNmjsJxf38B2oZgc2GFe4kZQCiYLvp9YbaK",
  "key4": "49AC85iXnqMjBMmQjweQRZcYnhwPiD2nx1oq9ckZApQeTDzmtjEAxnTTV9eEG5SHtLSR1JL2bXZgV36vBfVqWrsk",
  "key5": "5qA3b9nQaCM2sd5G5CoQsmHdm7sNv83S9ZCkhmXEHvvPyduniWB3LJxvTUSBC5tbNZvwLHrgVLzGrzHUFogocGsM",
  "key6": "4yTyBAqPL8gtq5xgyfhxsZnuvDeZATBcEg31wbUdWg9HeLMeLrUTsBE5eai4Q66bfAwizfNYsGKp3MRet7xRrQFC",
  "key7": "5KKY14wuy9TX5HaqxYS9QLU2mWX1GKhAge6v4LsbWB3WDhNgwYXMPoXCZkwJWkAfDq9LMjPAiugd2B92o3kLCWSz",
  "key8": "5hFFSkCkX7FgxLrdxsHA1DaUF2caoy9331BZ4rFGtktZDRbGRJqgFYPm5DosET47pokKFzBWHGwXtWmkqEcwKrbo",
  "key9": "2JW4bjkqb6ibaJyxfKzNadofkPWxi2rRUHFKkaGAHKdatx82oVumfYpuD5ERwA7JEQhU2RpdBs2Acfxy6iVLzWD9",
  "key10": "2PMCS2N1cFUPYaHbXXFejdgxMVSxh3rZWL5hg2awoVjyEBa55YRCSTuscdyb6zZf7gXeJUrUW3PAuYjrYah9bYK8",
  "key11": "4wm66s3xZH3eRJyDAwmHsyt47Q3jkxmzZCqb8ATF7v2JFZoYGCPYEngnR4hXrxxZGLvUWhUexHC4Y4F6vFJ4fTU6",
  "key12": "2WZMeqyCV8rGRkCViSdD5pRMmKFMN1udfawH42sG3HYUBcPqFNkJm3o751Ju185bFevUSqpwBacWBDeagEXawsc3",
  "key13": "2b5xGdVWRpins4PeTyoLr1766x51aG9Z9r1jfNaDEVZvWmqDvf4amUmcPxvCtMAtEVcDnvq7GZGAMuBj3VCGxMs8",
  "key14": "2euMinMJyj17aHrFxAUYASxFQyXWzWSxFsrTLaozcWyDSE5UxQEwoKy4Lk3F6BuAD55uuT9d83PgnGsydJK2XxTT",
  "key15": "JvpjGLyrtuoKFTiTnn6QeEKPnM91RXL4tGfWyMP37pjaU4W3heRG7KDZhUcdWe1GPvSeeQT8sAJzCsFyks4pCkR",
  "key16": "tCsRoFPSon2PuWTq7ukZN6fVTboZ8QLkGQ48Ezgy1hsy3SeMpkN2JtzB49D5HrWSHfP3Lgwv9YRHScM3KPEnd8w",
  "key17": "2He7kkLJt4ZE6T4vA3amkw9dUbuCTq615cFUJ8sakVNGMpumZct96YgrfByAYRnxNMoyoSQQ2qQpLkGKtBKmb8t9",
  "key18": "2J9yyQAp5fLdUDKm6tx5ys5UbxDruQRFoo3GEL9DWzpDDCemzCutYo5X1YWBjW7wvJ5zgBTZExmWpbDqhxSmnNV6",
  "key19": "5MZWJsDSPa5PM28SdhGCiXpzFWmnAn2RBhZviLThESqmr6h2R8tgcWtxdLNdzGaC15fcE1geLxst16n1TRfEQrf5",
  "key20": "2Kf2SP6xVR1MQL87DkDRvbf39gavbTXxggfdiDgX9pNQ8NzoXwRUoCwyXdwJKhT84bLnL1mSDpXPJPZV2Eo7NGJ9",
  "key21": "2EFLKUmAMTBXvusVcNacbvtHEU1pPuvDu9UKzpn6BHridebu9FRVGtZkDXdDBWL9NqLijLbH2qzm5eK9JffuMavd",
  "key22": "3EZVJ7zzUpgp6KXzSE9YCFjmGXLEN8AVjV8x43h2mHXwaEqCrU5Sx9AW8MG8DqiG4yTxBoXBLLv4dar4bmQT5NHL",
  "key23": "5Gcfc6dugk3pfPJTDcSD63jBi8feqVhdZDtsEzQVKdoisSYCXnxQmXhE6mz3S1oAgMFCgjUp4VMVMTyEn85tL2jA",
  "key24": "3zPM4nkxbLWePC11Qz9sx8qWRmM9M5kWNaX52g9ndJFMWsoVRa4u7CHRvsbCDUfaZUTmFQRDCUABm86dHosR9La4",
  "key25": "2N1Rvo9jC348LGtdUgdyFCViYWTEhxQ96JiMhWVViA5Mnpgam9TfwmpnkdT9vPnZ28R9K2cTjrpU6seLjPPsKpLq",
  "key26": "5a9A22sEQ53yFY1zgZSyuB2xAAo3SEVhhA9pJ7nzN3Xhy1917bqyUzQmJPqMDhuU5dfAN2rPgEjPFPju7LeypWtD",
  "key27": "3tBEnb4aUT8UvLFw7azY4XrQJdjawtr43qTwuUpbmnVreSYTJKgK7MrobUsbgkpTXfAGYPWS4ap6mHUm7R4eNez8",
  "key28": "3325qjkPrq8Gmp2KziWdkWzFRpY7NTHbFJiL77UWqBSWMg3mKXBzLDLvLWopg6LtyBSTrejssPMFaWkRahjmn7aw",
  "key29": "ZSs6Sx52fcskP4LyYLwwgKJC9iiYg9ghnSx6eppYdEgjnoSyNmbeRFbfVkDwH7b45n2B1w7opy3jHnHj2s95mgX",
  "key30": "4Wu3WPzUZYvRbu92qwW5vQf4eehgdhz4VixMDz9yGoGfzWRHBEQQEEcaymKiJhNPdEYYcQBN9jj1G4KXg9wSffoV",
  "key31": "tNu7RCJGrpVb1mJ5y66W6jvkAeEp3exxnoSC8K3tnbLgwa95p8k17qAABcZPk5jBdzc8SDHMcjevvxCLYKUbg3p",
  "key32": "4AgGuVd6svPv52UpCPjRBteBg7oanip2caRvaVzm3SryThZN9rMNB9NpXTskmkabzZZNGRVwJUZ1vGcYXyKhD9UU",
  "key33": "3Rk677HDFDdCxiQdnufrSQhoSEpjqdt6y31TDHyReynmoRXdQ9XVsQhG1uSk5PEh4XChP8tebdfaTV9qwxG4bTea",
  "key34": "3Br428zxj6r8pASCdyNxoyJRSHRfTDTTZW3hHrJjvwFybGBJdGEckjTKFPkbetrLizKT7X4Md49Be659fayMgMqn",
  "key35": "hRifvFHg17a5eMq4f2F7WHVKKVmeyP2snyrP7VyWPRYqqz8YrWJoaxvvi85DhXhRtjwS7PhzD8K6Lt8d7XU1B72",
  "key36": "34uhegnHASpLqVLYkVcXXFT5DrSCaWnNDdStX3fGiCnC6TwHJUkg15k5aHXgeL46uPec7rWnefRFcaECnmFRKZHF",
  "key37": "24HMRLQncGQ7rBLxDqyCkbvfbYPkdWbsSJiVyyeamakGz6EQkzae8nn9dV5MvkrnrXkaXEjKiNmR8N6c2exVZjWM",
  "key38": "5Y4TjCjY7H8h7JvZuj2cuP2CKTwq7qe99SEZeYcpca6oBY1MrXxB7bQHHQf4RRMKwroKGpcT46tM8Lh1Qw3qLvUJ",
  "key39": "29S5NkBF1WcAppLX6Au53kME8N5TDScyJZ1FNVefkT5coWyUwgT4UGCARvVg3SCKJGjaYj2kVFBtGhWwdwA5GqMn",
  "key40": "5BnpVahK54gRmdmmBAZDwd3i7mc1KAdUJRL4fJLa7QFFtCCHW8U9wKfGUh18EKkq2MFRg1cHxyLvvWcN3qtmZG7c",
  "key41": "46YDP8hhKzsSBwGAqGWpPZZ7ghKmARsuHjBhZy13vDtEPCn1dN1Ri4XvF88eRXCSScM8Uqgnhu2pGdRBXxGXfzkj"
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
