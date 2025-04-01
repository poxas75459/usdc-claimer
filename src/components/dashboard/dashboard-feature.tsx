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
    "2fTKUtgNTWcZjMPtXfr31nHCqWSMdMW53MPEKkTzQT3BUtztcvZEwLbSna2a2hK4qy5G3cyve6LoMBNsCxL5NWVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3v5TCzCx7Vu3LeTERpNnkWgJqrKLM5fcbvBjhHu8KxEvxfzZ6gXPR1fiw2zzVokyZPZhgvHtfaBRL8Edcs5KMv",
  "key1": "2xPFiaonEytAkZ7Q9RsgBe22PyrxXedxywkzkqTLWi91KrFPUF7mJH5HGR28vm1BJzTRnjALV57JFhDGeaUFbc8K",
  "key2": "3LhjcqMuLTxC5VgeXc4K6qUKzzcwbKqSq8zDQnMeifSSxS6cxd3Mxi8u8ZNED4jZPh32p1UM2bqzK9yyB5xgtdDq",
  "key3": "5kagw7kv4DUQWCjKiuFTJriFicDicwBK8ah7RdoYQadyvcntarTLTXiiR3LhTrRy8c6f5ksJr9sGKLmz79i8MAb3",
  "key4": "4aZP8jFP3DGmQNrDVjvJJdYyb1YAG14CcJxSARn6n3WmS8QuCQm5oaxK1usmTZfj2UD1VUDS3jPRMjKbLhfGx42u",
  "key5": "4vdFC8UcL6vfuBUuizugjBkyKHy8r3wgK3yqBnT3hRuQagxKQVp2wjb5y7EQu1aFo63EyGNVL79J4UpGKRtBiYWf",
  "key6": "25xkHJNipEfci4J5AVuAvdruH55aFQ297Vi9PhDcmf1wANctymGPDxRdR8MwNPzbKSoSqL2cQxLmVgnFrHCJcESw",
  "key7": "2hzo9fDqErB8s9Gpga3bAv1AckMC4Qm2XKFNYYGJodbcULzGWBCeZKe8oDuLg6yJEE5YEn7u1ykUq28YJY8fMjRc",
  "key8": "5xQBKiMHMksP9w4h67XRykcP5Aet22FdveTSL3YdajLFuDuD2TDQJutdoEnP6JsBen7DiKZDb48sC3XwwPPR3nwH",
  "key9": "4G8wbekHqCZw9tKo9T5dCAZ6H14ZeiT2yHguHPfzTyhsCgCeTFzwbMLnLFxpusKymH1Gv9R4HJdSYDnMdb4GvQxn",
  "key10": "3KqWf2oBabbTA3sgVs9H1Bkk6ELNnv7PLQrPca9hTTHQQsAFRkVoRSRfAKFWHy3bmrfuB5z5MVtnDt5USxkpyGh7",
  "key11": "21TmsrSyeeDh7qySBdEhGXvWE59SyFBnpWzhJU7YcpXSXNUAhHMepbxCxzeXpoW8ugdXpEqDMVYyBfrHr8v2L5YR",
  "key12": "2aUaBiEhhETf8sNWQb3bqvQUe2hcShfLAHZhRzsBAV6GENgHUPUPRQmtFM69QQ9YDBBrMjj7kNTJq2cKEtuSa2C2",
  "key13": "UPcXM1pMbxW33zxjpQoSJsuDFAN5qLH5LFKFcLJ8JstyrWtkWAGuYdroDbQYYc7ZfDFMyW7dKVPfjrThz8KDXAt",
  "key14": "Cvffo8aTzmXD7bfffKPbysPnBjof3JFj84QmxkkFEQqjoP1rtuvujUw3GBpSbHSP898m5JYjCKzDYbwdSNiCrtp",
  "key15": "5EhWZKCcr718KyS6jY9Yff8wRppKAWrbjYfC13sVEWbbsAaNvbXaCRqg4wKsf43mW7iPqAnsNakaBifEnMB8tS8R",
  "key16": "3fD4Sjmb8SKshYzvFoGohs4kS8BPpGzvzKL4toYKBYkCw4zKMJK6Fi3NK3pFowfrvpzKenQ9LW7NHMPe2JjsZjMS",
  "key17": "4XwobjFJyq6JFJARCVWPz1gx9kVQwnjzZXcf443d1kgiLE2rcSt27ubeYu3BRzhHqr8iTC3CHxVvFUDF4iqY5Dng",
  "key18": "5G41Txy6GrHcPp7CEeTgRFjMqZuj1Gfpi1sqpt53uikYt6s728H8sfhiVaZS9zh1ZRsW2whXQd5FKUtvAr7833PU",
  "key19": "5gcBByZ5kKsymcoKRBXNK5onBvFedu4FGieW1rM6E2CNxsFUR75x3qGiiwk6tZnGG83m5wpYNhAV9e6cqkHE2ZYg",
  "key20": "3XkvxwfViBn4F1xvVHW4DqHaPFXYBRuPfXnnijT7RhuWFKF9khu84qFwi76xVrwzHiZKFHFqUd4NxEBM7snnGuQz",
  "key21": "6zDMCaaGyw52W8rzCLeYb3qpzA2tqbtgTQT4NU2d119bzQAJbYh5LBDi9M8qR7YeQtQ8EgKjcK2hfA6ZV5RMDH5",
  "key22": "b9gxyGbz3Rkve9wzc9ceJEnL98FqcpMtzLB4UrQ35pahGWA8C2YX4sSqsGjynxRghCmc1t1q5iWBeRCBTNy7gZr",
  "key23": "3xGeikpHGNvaUksSi8LjqBPKnYMg6kngN16HjiCVZM7T5Zcyp6mgxjuvLGPbSsuem5aLMezaFEgPP2tLV2s64oGV",
  "key24": "2mEcU3Z2SbfWamef9ejSzcrNEm75TWLroP86N5wZqcUUdhh5hyrSpbTixLeoY93N5qRsAjQW5cozPTJt5Var8VfC",
  "key25": "5mW6kdzhmJbNNCjvnx6pqv3abQaY1NRDH9irK7ezUraDSfeoC4F7zBTPDofnPx2Tu2DvcKRC1midXasyMKZcnQaF",
  "key26": "3BJxzMsnzbMsrRLPCrnyzMfBcTAcSz76cu6KnA6bs6Si9nuG21nRfCxuYqDTnPXPVMxmTC9GSHAjRHorghTHTpxt",
  "key27": "34ddwpFiDFUQSghKw6tJfgoZvsB8pYHsTMCjzudX6cG5X9ebNHisUHEMmcMt4LmUzNcTELHv8DNsmbPm7V8F7fpu",
  "key28": "2dYRqNoE4YgAxfSGdiGdhZg9pgfjVjvYy9TKgFBTaE38S9rmY3zzJZ2LK1dwSPXbkaeBSeFEe9Wce3E4eeVWCq3C",
  "key29": "4NurY4qpNZ8rQepgVwWJ7Txkva7hmbvJ93R3fKvu54i2jrRVkkogGxBKTPyBBstpxap5M1a8ucckSzcRKBg68VRA",
  "key30": "5vvBqx9WTx7we2SGBe3UKcybuvP3Hyr1UQ96ikBLMkiSWtUo8t8Gneud2aVRGKMYUAQXqnL3Qf1BmqKu4NmQBpfh",
  "key31": "3yYVGukM7Wjr9hHDaDSTqExpfKtwxRAMsLuMdW9B7JEYP3TqaCW3v4PEQYaf7Q1PUuwp6g7axhPxCTCCaGDfcYVq",
  "key32": "4Ffm6bHWuBojV2Yu6Bf8UG2dAs8UWR6A9YBDudaR8A1qRr7xWnaWXFy14684HE799UjdPZK81M4ZVtV58u6G7AAf",
  "key33": "Y86JZhVUPuBk34K8mjMKbbuBbSsysgVUEJ3tumWzAWCiRZWTMST5YAuvLjcgD5VTuqBTvH91UsgtYhXBE9zEQb7",
  "key34": "39m3Dc2qqSng3hskMuZ2yaiEbQ46Z4BxUaRvN4jpGHW6ivoRGJYTGSNs3eexxsZP8X43S7kWD1Fs2MVSqAY8LQso",
  "key35": "2nV8h1FGj6pLNDx6TxcuemgygXd5VhshdrPp7G9tmpaPejY9Zg6n2sv19JQNYGHvxS1JaxzZPvuCDXqWiksQCc4t",
  "key36": "5Nr4s6k7nRM8J4iotSKhdwxBbYm9pNbmoFzcEAx1FtiMw6g5zjjube9LDwZmFUvkemZxYebANmm7zjhEM1x4sUrZ",
  "key37": "5mAKC495dJ53jE8EsAMFRegKGsajUAb8ysn14HZgSTAtM33EKis7fsNshJr4rSGeszTfQn7eBuZo3XJAfW11tdZK",
  "key38": "4fYKEHPVHT7kLforqnSTNvQ8jKR9SPkTwRirtzG68RvzMPULnBfR6yeoJErukYH6SMGrPfLKkU9f6fCsLBhiayRW",
  "key39": "nm1hFGJymPbeBWGF8jPkAfsJKwMSGG7BdZ3A1x27ydu74JL9nkzsATL92UxrJxDZJPuvj3ZsCeb1YaXAry7NesP",
  "key40": "4oZoNzb7UoWvkB2Ew1JyHMSUUe2f4Xbsjg3URykybZ358TNHJRa3QTbmBkLrcm6aidcD6xtC57aHWaKYBEyUZh8z",
  "key41": "5YqQGcXniBkrtiWn5kRnhQWTezx8TswyCyTZ6DNAFkkkeJ2DeSvUbiWU3ZpFRTsJZZ7ybVfRcfaPCr13UA81gqPE",
  "key42": "PNCm3kZujBKiJfi33CB5nVP2NCXg63pjH8F2fdaWj7VjpVX1NiyyB4dVZzANzpd1oTYyC66DmEG5vKXE2kYhGxH",
  "key43": "5DMSy3kqDdHo4kqVcerKZjBSuUxpvz3iA3dKWXw1EwNX4soSCPp9TCvQKmzUKex4FxPf9cTkay7mzBLXLAEXeT1r",
  "key44": "2m6FtX3RQsNB9GSoAGGyc9MCQJ8a3tJfjYFQPoJULu5E2HHNJ4WWwv1B9uM5pJWayvkFhSLDpYMdoTu8Nb3dgS4Y"
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
