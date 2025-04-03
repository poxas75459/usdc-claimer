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
    "hKkrxi7cFipPE2fKUmQHe5hePvs7yPiEWy1uMwYrYnb6qRaA4GAgPN6nxj4wqarVBXaqagXfsgY5TMPEm3Yxvuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4MnDmQ9qdECLLBYCVQQu4prRUc3Tp7u55NYJjzMfwdyhfUBeTmM2Q98JQDTHktUCS6xZBQ5cRU5ik7P4AKsvSk",
  "key1": "63zVeiQFLWDimDCEtkfjv4umovVon4FkyxsuhupktvBASiJUUSe4uYXd6xg18X3wuFgsmHpg9Ci8frs7Z9chvrHw",
  "key2": "33Xbs6BCWD4VKrbvyLbsq8uwCa4gC5Hc17nxx2s9V4RfW5Lnoy8nuiWSNHd1w1QPxzqwEKQdK2kyjLJCqWkvZKev",
  "key3": "2MhWhEkHNaARLSwzKy4izxz9mu44DofEc6npE1KVgZnibFNyBhw6AUdp5oDe1oK7JGCX1m8q5uVtnLgYBrMd5fKo",
  "key4": "2pdLUCBSFAaT6DmFfnpmGhizZKxWwxDDRRvT5NPtK3jKtD8MYNrAUUfiAPAug7CfZAndb1DJUQrUYoJJhzPdysUZ",
  "key5": "7zzFHvAN463wW4ZNY8tqwkU2BLrFxzei8VnH19qqtVKvGb1LQjWfkayMoD6294xYdtsFpGiMYQgdWShJeyW6uBJ",
  "key6": "45xSjW8VWHhCyTcHEj7BoDBo5UwQXyhG4GovaXSmKicnNvsYTnwLUe3Ju6MQgKHi3ukuX1VBtonbs3mP8c2PfJDF",
  "key7": "ybgSRNixP8zeU3Xf9qMjByHVPrdn8aWF2fRc8R9FgHjrbZxMEPGXftjK6Q8mSwqXzz9gt4afBxdmqB26mdDunCe",
  "key8": "5tiKfw7L2oTg8iZc6NKKz9zExWhgqjp4kEp2i4dX3brTYvHsmVTjjCjU4UCPPKjrNZxKL89YsyxCMvs2CDfBDLu",
  "key9": "VAcYkomCZGvuCgDJoaaex8ECqs3ehxKodzrwSXNsDzKDYNf4YNimNvPFautwnTKaKPttnm84dqvqsVnbzJdpVX4",
  "key10": "3QcaZsFxbgN1jw34iM8xsWzAEWD2jeRagjj54ikAoj8KQ1soEbAbz9pJnu6fi8T7Q7B2XYt6tS6hZ4NDxoQYvPZ5",
  "key11": "5cYtqDLx9BdzyQXFnRDSwWAMmRPX4C2X5SKNsJ7QVUKSX29AVeggHqTYz6FPAxBjjWR7CG7Bh6UQPUqte82GZd49",
  "key12": "45fqGub19Wr5JQ12YNnHvtvvBGgjVS3owEo3RVLdr6tnttHoEQ2eh1p57Ud31HTSeK41WAR5rUzhERKX7Z2hFGQE",
  "key13": "4hVqPfnsfCR2hEHu3Yg1VUnZa68hY2e8ZT1fNPYTjCEEokBQRGaXs69QdMnY6S13JJmsYHsKEKfeMHV1wFSiS42w",
  "key14": "4AL5emG12hUGEKTbkPjL8w56n5tnsnTLHsoN8AHqbJNkLhTPbVz1wRfRWxVLyG4o6aCWLHfA7oLGWKh8tvq1bo6j",
  "key15": "2AxoCEa6UqKZ3HZqgLK5W6iNF3cpt94kEkTmP1sUHadnREo4Fgf4ph5tn2YrVJyMAeA8XWhaCYS2RtL49mUJb265",
  "key16": "4wfuQYGXHQG6kwU2MPcG4uwDib26dsfyGP3cMjgfJ72Ao1rNoevCnw5PoKWbTFgDhoUc5w8S6bRmNgKZbd6RVWvu",
  "key17": "4f29cfeHDihF5P4taw2v7hXDhALr8sXMvhKgFFuMcSBPtJ8996sWCS4NCcsW9kwmBFRRaRtH4fLuRJVJbehtMPnY",
  "key18": "58KoiAn2fDt9y2R5YoBthm3pisZRdSMWqxWccbvjqikWcw8odx2CxAiHUE8mMHsuKMUwVWdpoMwkw6T8CUW9RyR7",
  "key19": "MCQxuBii653wfACUJj5RUGo18agDAtjNKDMpKKgvuFmAqUrY1nTbFofMXCn7XqZMwKK7gbTfchFxnNiYFHusLET",
  "key20": "3B2HK9uD1fFgttH2QAnozz4VqLfiWMXLCkbaPt4L2Ydc9M8jEt2EXfTiB94jNoejnhYMDmXnY5YV4RqjHg1EtVg7",
  "key21": "2aqjiKiSG3mdDAZY5sYKszSqzfAJL3dKEP5AD5cQpd4fytjbH63n5Aen8mxXhNoxhxB8S1ovEPvtYZQtk4BH7m7V",
  "key22": "56rSZR4MdacWwtoadaynh6PMHdXaEToRPwCiBiSfDYoQUzMgqBpyDhP2PVqeHHcpCh5j42BneQqHBDoWSrsarCua",
  "key23": "3VqYSPBKLJjNSALXmHakXUHEsYs7wGqpXhKSFWcZpkiYu34guTUFncx12HFGKp8ahtikiUYA1TS2yg2qsAFQpp4s",
  "key24": "VDGgjiiPmjrm5Egk7n6B39qQZ2SbKTyi8xe9GpY4JScHbFjo9VqPBuc8wkwDZSMf6Bw7wDmft8xAvRLbV2pE64o",
  "key25": "5oM4M3xq3y2k7oUjjzREAiJjJpAjzMKrhgt3sA1bNsySAMn1sSQnxyQBS56HcivAWgqLUkpahaWFhR5ccj65GZ3F",
  "key26": "2Z5Q8GjaXsKFku1Mb3mG1BhqLpsAiH3XLWaAtax73TE8fh2nhTtHcj282C4UPgr8YBR7UP6r5oKbGD9Jbbgtf7Hg",
  "key27": "3aSmcUJHzvLVHvR9BjiseFH5nFwLCi8Jo82TK6V9ETQVRbmbnV4rfRKtZjrzY3DQiP98fELQnn2Sp4ZTsH25pamQ",
  "key28": "286uFaAWYjGY7CUFp7kqLrS8J6fJjSU7e2QAzcvnPvbMZgTujKEnudF4ssamcom5gdjbUcYiYMSL21xHUySEGU98",
  "key29": "4U6S8EPZ7u2UnyoyCfLNDaqzkKmUApj4xyN5kEhgoxZdS6FdjFtBw72FMUzSHwSwXMpiLBCSmfaXudeZZZn1Fmc6",
  "key30": "qYcSr78RE2qs8LFRsQfx6xSoo7GyygTKPCYPczwCw5NSaK9aMXMCeW9HC4c7KpVYPyFh5tQ8snnow9LvnWNTCc3",
  "key31": "5qGirJoEv4AS4YT61bb52mM2ttWyuxWaMWQjUTeeh1w6751Doz86ntVW8K55k7uHTFvh41skUfd2RHpmDEWUnvaD",
  "key32": "4ocL3amAtvEYxwaPaF9CCwtaWq1KAoQdbg8dkKFUi1hkyNQUg3324oPzigsGUMLHHPbMr9ymVLMTTh3cQwTkH1Ag",
  "key33": "3gBrPpkhFecdnYhdkkqAsxjvpstZrp5dqgsTvwaE2beBHN4XJ18Sou6EVNeq1Smij3Eunahke3yWRKDRPbZgXZzN",
  "key34": "2dy8gjJPCWB3FuiojGQJXxjaUiug2hqYJg6xHCnfWBEd3bZZe652cm9e7mBborgZQicHkutxsCJuUuoJ2v9JTPmU",
  "key35": "3rd2gSf1i3vmkEWFcb2bwfecmyT9fXrzP9DqjYEGmk7pnekemYRVYpNsGY5mAjKMyircTwV5ahAriHAg4kizXVCB",
  "key36": "gqvtyhVd8DRMJtihmJM59DqFrnC5ZXbW5V6UAhoAjv53FkVAic1HHU1s39KdwhwZKDoKjtLQ6J9UgVoJcRqQJtR",
  "key37": "vMeBZ3HDx8PojhpfVB5iwJgVgvXLRPpTTonwoYxaasSmgiY67MKxkBZsYbzU5UB1x1LyKUEbjcwpu7EEPHFLqFf"
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
