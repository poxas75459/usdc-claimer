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
    "5o6Y273NfFJmNPhKM5Q6DyVQeLnXoiKeRb9azN7GHLs2Eee7XRGeokbpt1GwAxu6BQD4ckcA92TkE9LRDKZkmqwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tdh3zh5V1yaiUHEdtcXzRHKj2xhDb46udsgrkZgrXxr6ewkhNxvUYYnPAjPp8LPzDpTeo5mSk2J9engEZSWwMuE",
  "key1": "3hkF9PmgNuF8Z4cjz5AbWaCFMftPBnGjppq9qPAx2NJAZF7tzZx8Vx5gsAVqKBkQhBNs7d6QoheFu2bXiHpYPLmz",
  "key2": "42HxxTKtsixfZrYT8scg5A5hpWXkmvmCMbsKo3afy8Xy6nKwxr1T8wzp8FG6Q9kSevrUBQrPd13KhGY99ZJk5E9e",
  "key3": "Qrif5nq6RS73tRcqTAjosSVURfFyaH3FyGfqWcMhKECJGPHzSeHSani1V834pDi7cJpXuxzU97j9oMW9WyG8qBA",
  "key4": "udQyYydmtJQ7hw78FWqxDCQANjVdUQXU1ggna2Kc32AZm9pKgCYfi4T9gjVL24YTUsqkW7sPZZ9kHTkr4Y6W1yM",
  "key5": "5rt3MaCq4XBqU7yNxCFte2cX16F5MBJQEyaB6M1cDRx2puvjQKEinrd2UD4qDiovHmjfNSnsUE4kxDqcV4xJJYYD",
  "key6": "38ekJGCtRxZmudK6cVFLTWQHpKaZe7bQBDVnK7jHX5Z2uw3p8RTm2sY1bwvg83ceDvUFBhKA2KXbWURg9sHf4GYH",
  "key7": "cpGFD6cV5qDNT2Viy5AvHcQoaEpsfJ336odcMHzsWsz8g9SDu8CDhe8Emo93krNmEg35JYVRnSyEser4cvksm5R",
  "key8": "5Dpxx4XFgGDkf569Udi1qZpHtpwwZtp7ttrxDbi4xXrxV7j5in8t5SwaLBjEqBcMuR7PzT2kbtpxZaNgHz5NULjt",
  "key9": "318QJkdn4DckueaDk44KqV1exSuUM3P4vRmsVCW9FJL6NvswN4BYobkRNUstfPp2wEvjruiAUQzxhkjdRU5LZLwa",
  "key10": "2DGoNcob3pn81Q1MTQcdf9orkQ2vquUxznGt35hCD3AY7LuE5diRBiiru5ytVhQvfAs18ED61GaoKVHMofGjqKu9",
  "key11": "3gQWmo3BmqUxURrf4Dj2HPwwU6e5kda7yxoV1pNE7hoRvsx2SWRfxfp1yCSXHvDH7BPDcTwF8eRSGkUFcRcp9oFW",
  "key12": "4XXKvnsnKzFXfpvNqVgB7xubSV1y5idZFA1VjRVL4hvxojyb2faNFht9WFnPRw5e7eMA3VW2NpSCmDZ9GZfsEDoV",
  "key13": "Kk1ztBACWnw211RBC9ERQUXx8QG2JWr7FoRqJk6Q2MQHqmhQTQTapHhUp89hFK5qEzsuetvQEQZFbxZjmVQBHUm",
  "key14": "5samPnx9w5qURwFjuc9LL7JKbaL9cxHfCsXnPgpYULjtkLAJ6GfDh2cTMe1P5RkP3vfJQr9HajbCFq6pdTkDWjBV",
  "key15": "2Ymtw4SZp2wxUijajzaFpt7wzviD1X2Fq7dsNkmcurJUyZ3q1c7h9LHjrRmee3pm22HFc3kXN43KnDG7sYKhmaLW",
  "key16": "5UgXL7D9urhxafJmUPtMGFZRU34hqvHFNZ65WDgRE6yAdoktAzUCoGsRTSDZhvq1hg8tjfyoBVYfA71BnFEPK7ZG",
  "key17": "2w6BF1TWUBiE4rVDdGgi7ZUCHt5ep4YncZBQnxKK86u9dWoN21nwG4GTPjzJA1z2fJFGLBrjk1SR1ycHKnzuNx2d",
  "key18": "4ji4EGESDMFXkb26Nt8Q5T4MwwtmYb5rVNcJPEU6nQTH4dXJVd3k1P5BrSanKNQNLhUGGyc3VJiS4R8nfh43RamE",
  "key19": "2Vgd9AFK2t1Sqwf8JzxHCkzKJzcmqj7g54vAhpkVGVe6d6GAohvxcDAHXXBqQ4jfNe6sLgUanuWBWzcn11APidcu",
  "key20": "43VNVwQ9srDWYo5RbErDuvx7Ly97C8U7KfSg5zbkqGvuGo1ndib5Kr6JpjEbHpYvCG7QrpjPf3Tr8MQsVgpg6KzZ",
  "key21": "XfgYBZV4pmq8EdSQUiq5VmtJc9R8mzprf48GjYw171o42cseoRPz6mTaBqNsanBDqH8PGdv4RCM1YjVWx4yUkau",
  "key22": "31xHUGjAUvunJEz3VAa3KpLR3WRCQe75jvenWysJjEwkPdxnBr2pQyikVqSjPPYEJ8KRpVCu6q6Ezxe3nTtwgqHY",
  "key23": "4oXKgCqrmLSAtayBfSQ3CKaaBX6Ce9kvM7fG6vuoHqrWEUxDrQkKozP6bkTgCFdddxdKdhEgaQGAvGRZJQvmpqGL",
  "key24": "4rxzhEyfSshWjVp7CLBzWbjhLdSqRemeDcgDBfzAEf9iJrSr4LqtQuzCvNxYdv3YxAxwA8JbQbfmSKxnXmLChL15",
  "key25": "2UR5UU2B7AG7gxQ9YHrDDNVoypUj7JiTVqvdpM7iVXLJPrS545Qvqfk3j4Ui39sT7f7QS4zowpx8ymqXqsezuvbj",
  "key26": "5Z5rTi6rk9qD8T5EXpiL2SzRpQnuGxbA88ki9hLqmCaVehzSQLkhKymkAvSwoTBWbPrZZkmGWi2hMa1dNCvpYkYV",
  "key27": "kW3EFd5mo5jQ68cVeJHPRu4tdeG9EWK6dGJVS9jqwfpbyP2g8Tcdsq1upxsYhfcRGei1PE6BeHowenBbVvnxqdj",
  "key28": "32KocZh6Q1nrMoiuxaVmmGwsz6zkpevrLG55dMjxBFRyfTD2V6LVHLqenxS8h8hYqQhH6bmYzPKRtmfVnMVqP3v6",
  "key29": "2fVMoJ6iipY6rqg4tCCcxkVTKUuiwvAY5x2VEM5prQZSLbuyWXuhfNAkPnuAwhk5EjsLuz7RvmAjHjfosmivu2n",
  "key30": "5i9gJXvSFQDqXqWDinxE3WtCWfhYjNSUbthrBiu4apo4S6zU7txDJa9JkmmzMduRkfokNpuPvhvTsND5MZPoSbHF",
  "key31": "2zMksV5N7GsDHNGvtT5FNWSEeAXDLrSdaM3U5ak8ebY3kxb1n7YKucfoADtpLcbokugXnqceb2Nr8W8jEvd7uCio",
  "key32": "4yNadLe5WKmReWzK5D6wCAJ8LyCkRgPeRsKSBc6r1vPtNLRGBHJq6S6W8tUucE1nFD25ybnpckvbFfMPJnMZe1Nd",
  "key33": "ZaV3MmKokfHQTxfK5ZEC2z2TzEfr32Uf8FZHUVzFo6EDGFofUjwNMZrNZrJpqqoPNtgYshiZ2fWbbonX3CRq7ti",
  "key34": "j3K1MAikCDi2M82DbwPxQaY8YYoyVxcEautQiyudgCDvRoww2RDCp5gofeDC3bL4XTJAxPTitK7KAbQmaDRCtHv",
  "key35": "UgMMhicNwoCadJifypCmgBMzVELkKKghnqS64CtfHJCEW7uHiF15yUcmWceERaaSySoAxtARiwu5aPv6wFpb47m",
  "key36": "5kBcEyDr2xnv9ykKCj3noVtqLrejXiyLCpc8XqroXQrNKJ9SzRecU1VsTLLzCEE3CMAY77BiVbAc2uRuTKHwgJnX",
  "key37": "5KfTmfDDyjtV6bcXQCJSQBqbGEEqm8Gw3SjrBVSsx9GprLrznujVuRQU5rYoHymKPoJjM3AmaihVY7nqCjUrcfQu",
  "key38": "5eQGgnuHPHLVE8P6USMBmFkzurHwvZdeki3wkfPUKt1wDMfes2yxhc4UTj2kED49W1r7FZZZKjkmcyFqPvkk2Jft",
  "key39": "2wmULgwN9hBbptu8LgRmZfN5Z1bEka13mY16RZDXKcqkQnyPjm2PcfNGBbNVBWiXSeQ3YFheyunt5RjqHAa73swM"
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
