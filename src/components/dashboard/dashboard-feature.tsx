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
    "4A7fKcWWJaBrz7WQbDfdRgrWi2AfmqxHRhq2rtteMJrVxWs2mWRdtDezjAuYD2GXfVV8eGgXMjMNBemzKREbrh8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BMEMZZac3JSirJbHbySJ9Aff5aPSpj24H8G7riR7iWtgaotXpF8i4fNq7GZ6qGLE6wmhUPQ1vxQgFUS6hcZkPv9",
  "key1": "21wq9PbJWefJiPCGK74mFFDp4kcrUpsWEJ9Hjpc2CHvkwbdUuW4PBpJtq9KArti7dKD6wQzjRGu6eZcSDk3FNzxW",
  "key2": "37RHB6wV7FDdywh4GoP24Qad9SuSGNKqRfpyBHn44fkoT3LDkYsTHz54jv5MBNK9kEH4QPfpSntHxmGWmQVC71QU",
  "key3": "4A94ZSfQE5a7N6YeKE7MJCwPy757Wk7hLgtkDmEBBZyzRcMUgR1mCqewAsw1WT5JUX8FFuqnoPGfiqdtdPuH2zzH",
  "key4": "3ybSbCu1vCg4rNvfdFsM7ZKroyELxkygAn7hGigVYza2cHwYVQQ9j1pnKWEJmkgqUM3BG1htiYbYDpTW5JtaEUyB",
  "key5": "5TRXq6WLaxsNJ9W4uovSH5QcF7oz6RZ58hzf8epQoW5qEq8Vkja72mNCHmtenLooQgz6C9tyTnXqAueVxogPfRiB",
  "key6": "4fizEXx9yse5DGMjgDYLD84RLsYvceFLA6cRLS86ZQwYjBo9JXs1rrfAa24EcGKAqbkDbB6h6uKqqLM94xaHcpyj",
  "key7": "MUrt9dkfqmS8uaC5aszzSZwax4irLe9SgboEWwzgUgWJbhMda7co4UB2FMPETMzc1ZV6z1zPqRrC8qtCzqHgwPq",
  "key8": "2yguANbnDg3EUZBipayCqPnWiYzoLc1jJLDASVGM2sLHZ6Fpr8c38AVwdZTzTgJKpyFYug6kdEwEb7g4vBbXrwKF",
  "key9": "2PTTcXisxfjXjwmSwAXFQtGYgjnK3LJdHhg266THmjnARDUwJ7abCWqFz4g251o8dnqtKsH462HqU4Y187fVhXGH",
  "key10": "SLbQijsGCwNUc7DLpmrHWsCY8Th8T3AdhAtt5Zr271baYbr3qFo2g5c8cDBvdmYpxdZ7U4U2duHPg4JUnbqa8pi",
  "key11": "2Ddwfd1U6qWWCxLJsi1uXHw9VFCiERWsevxgPd8EiKj8rctHsqev2nQjprBMVJFct8y34rjbWB53t2x1fMJQ9rpz",
  "key12": "4UD5qv3zyCr6FL81pVYusxfKWREGZZ6oAgwnbcHx6c6YkGdFePMBECE6khhQNjm2QVUHY2ZEAiTy98LHWjSFxz74",
  "key13": "5cySM3cuQSzQQTBKiErg2aBa7epUYxg8e1fb8gfK21MQLj6iS5c8T1DUYdQ1qHjryJ8QmM3parTk7WNKgDYc2E55",
  "key14": "4RRKYYjbRDq5hy8MJteNDQBSi51h8jVezDRMgABohwZMRnbJw1omgLrekQXMN9qPmiGztuMTTAc6dMx25t83WjYY",
  "key15": "uuCggzfAmKnaLNe5RGAGjYHitwN3yXpR9fk7KNPVTkfcAxkYoWyVuMhrubQYKJrvUVdJocumexiUJjrDyuS4Vbr",
  "key16": "4PijARBVdt6ZDsbC7kAN5HaW6dVXxcfuRPcCmEXy1j2xuyx4pEoPeKUrhCB4dJ7DradLMqSjcwAUx8DFMQqPm44y",
  "key17": "3XuXvogRcLxpTFVcsWHyaftmHFZY6MyZDjfAySNQKnVcaoL3QGtCxJzwi1YCGsGLJpppoW1pne9ASEy3fbEz9Hn4",
  "key18": "3nqQaUefWZ8VRSquDqw3KcNbCaxFg9oLEvghDj2MFwNy8w72WBMct8Pom5VKrxvJbBYbJKT1PcCX7Z6Fxr1HTL4y",
  "key19": "UDoPTz5AsQ5fBmvdoLHaXQCxjoX5sbCMekRCFe3mWQjycdRoeku9Qba6u5dt4y2SF2jd2yoynhYmEKMgVKgoibr",
  "key20": "2Hk23wYXggfTdix222YffbjCXin635zzvyRstXDVhqPEEpRNJmVeQab55Bqo7TJh8FiP77v9PUPFGpu1tXGHtFJ5",
  "key21": "2qs2eHHwj2LF17BsexRVKJsrNJ8ZjAkiLdSygZYEaMjWkUL3gTg4bNd8WnRsCFFDwZndTSwfTr3UMupNEjZ8YKte",
  "key22": "5mRj87suUzhFBNr8odNJfUxDH27R26FpCoJybzivovfonaWif37Mc5rgSy55w1Xi9rJTvingxNetSP8MDwCcNmMn",
  "key23": "5oSbN4KbDNw53hkoLXYTtzf2wsytg7K1au6x65rKZ4i5Cr7dxyxZgmiEVfzDr3S1WmuMTy2rcTsf3zjENqJEeUSG",
  "key24": "4hP9T1SLm68cgnjs77oHjyf1KRvJC74NAHNQ7CrMCkuBctY4oiHB2G6RCs7VQ5NiUXQV77UmF9GudnCivkF5FJD7",
  "key25": "3car7DYmkVmqmYpGM7E6YP9CSca2GKh9tGNzQZyDL8Sp9REcrrS12uHwLZzhJcc5BFuABYMB3W3cTM7QztJ9WnNz",
  "key26": "39C4WhpDqV2WWHJy9yUvsNsbYzMoAFgr6skBCBxJ4yzfzVRUgzcxpSzfosG69BFBpyyB372pa54nWTt5vRVacYui",
  "key27": "2BEjBFPDzUPb1JtMbj7ApMnx1t2agsJ8arRVHRSt2CbRerDApiW4KNntSX2jMGyPi1Vkxy9zhk7N2QMwaSsm4FBm",
  "key28": "5Za32R393yoy3Fjd9mWZYviuT2k86CPBJMGc4Wy5PcpS3obtNeV1cvUxuxgRYAsSyssu7Ryf1xTpiqSjGaLNdLai",
  "key29": "3eyVTmdXGvAGd4YGvrPX98BjadUNCnsryRQmjBfBpj2aznYgh4a8HkLVLT3Wsyy4RDVQcmTKhCVDGYYdbcWCng7V",
  "key30": "2bTBUJhTksKWYsPiC1kBXsXniaMwUiDMfTnnLXYP5cBgVkkYpwNZMJEftTMtTVGMauX4YHLJqwJTL2xuSmjkuMyp",
  "key31": "5BRZvWM4chPuSZYwCy1HTqir3eVypLRiUAnreNDpnX3t7zXRDCNsXpSCkC9gxnBnooqUmmuboXqcJh5Xq96Cfm5d",
  "key32": "3BjaGupmDWmyVm648PWYdADJCGizgYXmmegaxL6B6MW7gY6XWxg7aNSb5CfPwSxCrRVPBYL4Q6b38TWdVtTLAVHj",
  "key33": "38js3asCNnnEQvanYCP8wPTiWGCgsqeQEVLHTCrEfZBp6zL6ccxkB2KzUn3sbahyjsm2jrozEUWVFaAwH2JCD7AN",
  "key34": "2vpqNfkRwGuKHwvco4EfmY2q82PQKg5652CaUmwcGTxRULXjkDztVtBJpdeGEAYxHDXw53HRgsSmbB8aayu1MFjg",
  "key35": "5UcB3UguTaHdTV5KmPouqgo1njWruZW9Co4r4i2AWHanea7DFgMGMUaRhggCB3jVw7W6Yzv2usNAuXNenE9kA2JW",
  "key36": "4nD9jYCSvBPTW5JBzPD95noRTBphbqMpgHWFBxNkVoLqgmFwvmH3nPvGzDJBeS3Q3s6Mf3B6xVhawTCdgbi4GT3t",
  "key37": "2rNx4f4KLHBgxE5TpXL9jgnehmKaVfJrahj51x7waHTVNt816kUfVP1247JmVRTsqFvNGP2RSjtNZT5xYzHNTc5Z",
  "key38": "33ijbR4BNgwVGENthYjvmvRDWqseNi5vVGDgHWncMoMYXVTz5LynqyvK7x4cB52wJtnpqoAnBzfjjJDf5nppvvde",
  "key39": "58VAcYZ5Bu26XqSgYUyyyPhomguYsPmmNCHKrEc88depr2Ww8Pid9hxDsQujGzzjCqtnWRLEkCJcy6dCTEBsvwv7"
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
