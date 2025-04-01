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
    "3N5CGiRqmwE2HsecJ59jqCx72EzxAsrsudPqoRXK9M3Pra4pEq6KKYHMsonXcfdPoXabzngxMr3t1oDmMgkEkzAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yBbMkixEfKeMdw8nrLTqjfVf1eS7bcDjWVfC6Phk6AF8UzNfJQBY5Pi4ehD9L3tgHqqRegzDSvf8epb17je9dMj",
  "key1": "tPAKMixXCCp64dw8ooVuhTGBQtauGEHwEwyqWzjhdGcA5LCCzxs4JiM1qKNtYSdigmCqXBmRTjrWDSVWqTuqbdY",
  "key2": "wyUnsAV1HLcvvvKiEe1p8uwRhJvLSn5S87WRbm2KrVVuocCxzkC75yFZk69LGRCSf7W8F7x37vF6wcwe9AMBnRy",
  "key3": "4YBP8MnefmGb2Lg2FJkPwvzS2RXL6QGeDwXA4mDz6J4fchRiaWzNeRsJtE2vdNghzepfGLQPokDCLH5HiN9rmnui",
  "key4": "57husz8CWsFS866ZjbFZ12tXRKNvytx34WRpCKJibrfLAM4xCdrRKCvSTwyoqTaSYXKkYCEWy8b1gNrca6Q5w4U9",
  "key5": "pvhZaGt6YcxeLEABMvZnt7yp5MWEmi5VMsQMHy9dHvHgeuD4dJE2dJ6J931x2bPyqvEUCxp1URcQgJkasjHiEF4",
  "key6": "4WCnpYEKfkNzcBgPrr6b7DVpGsHHkQ9a3ANxqVwUUYSRcMnxwZYefLDFqNzE6XHqjJdCeZV1DWe17MArKsBZhx38",
  "key7": "3JjgwTgyYa5xN41Qd82mUwbbvLaYyGaZjGy2jcrTQz5Hcp6hHd7mRzMSuCCjyn7m6wXTCAaKJU5zGPHBkVrubQum",
  "key8": "2MufF6aMNDRzuEQ6Y1rRfCX796rGYN7Fxx1SUDBy7ziGKVCDKDcJs3EdNCJWrRxdHZbpRMhsveWJK75UfbjL2wjk",
  "key9": "5KKuGu8qbFzU3oTJ8g5t2rzYK9AanP6e5P7uvC7E5fut1XDXKBJK1t8vHLyXVbPw6t1mwJ2abQ8rKY5E3Gg1d4X3",
  "key10": "3sEKBc4n3WMGiDtqAWo1ESwfWUMTYZjuSdGcb2tjXLjsJhNs2msKPjiUQxkPoLLsia6MXT57Cb1EGgTKrwDKcZXp",
  "key11": "5VQEB8JP5mrybbJv9BU19PL4vbprH5YEsixJzBW7iWrszHoGuwfzJaLhBRmPzViTAtZeBZYbruMCcqjBPGjrgjPU",
  "key12": "3P6VtTNxWSbg9ZGgb1ydssA1UbJnWzuVPDMP4n896ndSJhQuDEP8oJyW6AmNqtrQfcqGzB5xj6P6vh3LXuNSGvTH",
  "key13": "5ZqYEVYt1TMk4DqfF7mMwwdyfekdC2FS3A4DyCRAJpNNLdLopSdLMSyppU5ND4N3wxaLJ99ta9yMtfMfgfWkR7TY",
  "key14": "k4tUqDtTNeDR197R6c6FropvY6rTr8hMZ9t8MX8Tpqze5KT1cnQtbsahggJtR4JZ3mgHoHHSk8sDC73QoUCNFp5",
  "key15": "2a5rcWehjgkHmLovp9fw1MUw2GB74bJ7rL5PNHoRE3Ub9ybHra3hLiztpQXZFzgErPJ3ohiKXSqbLW8iRQn7vHrc",
  "key16": "4oUQLybVzJRUT5uJDzE1equM6gc3X1RFkuWmyomkJaRmruBDyTsbpgs8iXdVWjpAPHbDGTkWitrZDPqyVEYkCTjj",
  "key17": "4dGwcbq94spJAgUGRAtKrT8JKWNfEhXie7vSn5ApcdezYXge8nyVk7v8nYV79aBoBS3Mr6RFCDdCDC6U5ciEyXT5",
  "key18": "4SKvF46TCQMRwL4Cxz4PsjXruA6RSK57EAJB8ABcVeFEGyjpBHiFpLd95DNSvM5KFBJAZYAyyreJNGAaDc5jBVUM",
  "key19": "3H9qEqSpUtFixE878ihtmMPuvvF7wCVvH4mfRdtEwCuhJTvuCaWUYJBGdFxAUCnBWDxwMY3HWkKngBQQzRM67xJW",
  "key20": "aNqJDXyJeb8n2tsyb7Z7BjPwM3U3KJcEMX6TNLRCteNefUHHmcDA1tWXvM1sHpKuDgFZcu9t4iHafDS3H1Y7ok5",
  "key21": "6Gpvy5KTxaveNjQvQBUnBVtf1VxuHEMHftsq1XxChbubjM3tW3RsGZSPTPRX4W8HhNrtAzQsvxNJNjHKLbtQaYe",
  "key22": "2XJMDnfhzk5FjbUNcpyiVCKMuVgbDqfcfLKG1Pi8c7VEhr2wT6D1EPnG2zQikaap17kZHHP1vGckYQ74fz8wyC7y",
  "key23": "PKAEfwhjvi5umrRNto5ZMZoZYKBnznsLU3agdLkuN1gmsUYK9Yj9owez5Vn1rhkKHGUBiR1c8bBDRFgXgiNQ6DB",
  "key24": "3z6V92NpYHE6vK9jS1eEhy8gvSn6yJMmC6NvLY9WjNKoZFHT4mbh2QLepHmFLySuTQLD3o2QG4GPesxzNaeEdDjJ",
  "key25": "49uGawiXXxywqQ9Ww18tstgJHkXp9VwvvikQqtRNYdgehqecByfaftMZF2RKNyCc9baeaEshNUa8yxviyPus6iaX",
  "key26": "5osvdgXYtBwyBppNni7RmQuDvVjZhauxugZ5514Efz8w62bRKfEtif6j73KB9cXVuTiUtLHPL6nsTxF7m8TAQHqg",
  "key27": "4aHNuRMkchVwEvuHKfCDipWqb2TdrZVHN4i1ey9VGZ7TaY3Msn3bDzDp17u53aSFssSBYYf9D988gEQqLLZDfavK",
  "key28": "3L1fSV67bB4qMi68mehy8pXYguE8Gt7gSNRcnN4vzeYcCQaRTiFVJouF2RFrdj59Ug2Fa3rH68EyucGZejcc6ovt",
  "key29": "344RfPbLBb53V7FXYnJveeLZvaxTXRVJF3tRFBuysxSFH8JUpLiBdLmt1LN2JrdLiMW3k6nwUeuQgHsu9QVcFQq3",
  "key30": "48HCb2jdNxQJGU7BKWkGKYqEwMEumb7npCy3LzUrP1Lqm5k9hzQQjN2u3tGhJRpo97zPcofSjDBJMndvtzfH3p6N",
  "key31": "5dPsa98VsNgKejhZ9GLJornW7hhyEA2Kr2pDMuZV63YGxaMeLu37ia1JwgAnUkYfzy9AN6ZgdhhK3MLDxzHztv5L",
  "key32": "4gemgru58Z3yj7UF6DU5wFn58DMXnMj99oRUx5o4yWYVtSR6jH9fwraegKTedCiqzrEePBsMdZodNDpArPokaepD",
  "key33": "2idUFC58MbHquwPgXyACghLLyZCZrrZ9Br5gJnruvmyfDMT3taATXcDPU17vBQYEb3juEy2kzhuJSiiqLa6RxL6M",
  "key34": "4JdGgPBWCZBSywMhAszxjt3i6rnYdtip4n175GQhmn83p2oxVtc7t9bkrpSCYg73rc7yzimLC6ken6SeENvMYYwt",
  "key35": "3w2Wh9nrwXxzY9Q7wN82i1qr58jrpWbE8Wxb627WKr5PpfpfYC3Qs2ihdWmYV1rQmP22YvZ1yxoAR97QcrFhomJB",
  "key36": "5NKoyCehDAgtJYHpTWuKmbjmWw9oCwQt7PcYBVN1MsrY2yHxdxzEjh8h7941UzuzBpdLmzzExkM79QafAC7zy5vR",
  "key37": "5GejWojGKLM9nnQyxLqZY9ZyKRP6PLwk8kb8DHh7SR41CkiToZ3qr2WnfBE8ZAifPp7N7EPjRuVV5D2c9f1MvZmr",
  "key38": "n8ysP74XcRAS3ekS3CevfAp7eExkLfRxMsCRhm5KWdfrQ9JGrNkfHegBZNtzzMn8pMf3aNr6Y9oScLAWurvVFSx",
  "key39": "5fexgr2W1Yk6ZuyDVpzZ3YsRW9SgGyKkM3BRqvdiP2P98z5X9o4sjM4EToHj21r6eWnjuyQuKtER8bz4repPdvZt",
  "key40": "2PJqL97qUd1f4Re69c7LaAT9pTHWdLtYDf4xiKwQH2SSyRJcreiaKomebyyzjz2M4pebvLr6QWYZhkDPUUSdUCLp"
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
