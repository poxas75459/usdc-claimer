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
    "3DQsH5Lr3iPrPFBPYtkwKj4oP9e4L5ktPgnTuLtPhtEbbjodtKdXLFXdewxrn7HryoApeR2Da6cpETxpyUStF2Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxa1Lv16oUrnNLFC5GpmvVToRfychFNYstKtiRVJ3osw8uCPWdgE2i2xBiQGdASzzP2iWJia9ELGAR1CCgb1bxV",
  "key1": "4cAh6WM4ZCkPdFQaUT3AMMx4QDs2cjt7Yz4bsBKbqR9RMmGWeAwt7yzng5TPxRDPvfL6HSqGv4KAJsEkLnBQo62V",
  "key2": "3EUzxn4gZhXWzpyx21xLyWjdXWmGqJhtGwck44WPMzesTQqPY85tkAwMnZSHASqcPnvDtMejVvLE1VaB8jxjnkoY",
  "key3": "5DjyL23hTGjDBQVcobTrdtHNh31YX9j4dSqE2wKfwX67HBRRndCQKLTu1anykmxjY27kBnmBbPyziD8eqzTEjmeG",
  "key4": "3nkmPeNxuZGJJYjscBsTovikpjmLfvTWSiDVbHUADdY18TfuM2cMozs4WBTnKwxfD7KgYo3S2rztbicrcfgpxbwp",
  "key5": "t1s39nw4hSHukYHAzPztFHWXHGpmEPn3L2oSoZ79RtGzwjTyhbBZwmYRNoAMHkBr7zWd4q4bSXUSDzceY1a3FgA",
  "key6": "5yQvhkSMPnJvSUwCP1jfg4RDJpXtaYeuJPXW89b3FM9DcBLbMqkoS1pwJiyPCX4bU5aJysdDmNYRUXzvf4vmYSno",
  "key7": "Cjze2bPkZ7P3T4VEZdquVGx6uwz7DBJRjx2uVyMk4AEMacgVDqYVEHF92KPeCuzEtmhEVUxJ8GTkX14CXt2nZ3j",
  "key8": "4xJwpd14KNHDgKPuXVUW7USH7Ni4oihkAFarg8QpFcRj755cKtxpfXq6GtpwH3k2rnge4LikJyLVSYFr44Mb12LS",
  "key9": "Y2pga54PWJcz5MXCPkDNVoBG4mJPfonY6WrzmUU7oo1PbThZsZxYmaCXUdUvLwBQwBzbtp3EjLRx8SAkhWBYcVP",
  "key10": "38bpfB6XrNiRkeQ8nZ5hViFyqqyDwxKten6gz3bGoUQWVFeQemxuX1Zgyoz3MR1b6pzX3kghF8FicF5h8SVx8XZE",
  "key11": "4ju2SbSFbCM1F1MS8zcJw5tyJWr4j4FihTn3vJxBfHBJQewqFSgmQK9FA8QiZbNDm5DznQrDkr1FwbtxYFZaqt7x",
  "key12": "vYAKofsVTA8dq8dhm5u2a6xBj2uu6VM2rkxMn7whSpsokL698yF3JTPq5nvQuf7qpCme1HQpT1fdy2RqcNNGWgs",
  "key13": "33sLUzLYnNegTexToUyrZrUJqhavRkwVwThg3McT4zokiVunFTo9WRF3xqvi34CWsvDv4mfp1Rp9QRAV7Mp4JbgM",
  "key14": "592UduP9TgGDPZpx1jVJ2T5TekCwXrJVFEgQbtfDW2qpMZgj262bdaFUrWmS224TtW2tiB8AZ6htKbuhW1ggHjgX",
  "key15": "4mV4ua9q6o5VasAMXU7QC5WqNGzBe4BxHHG4saHj7NEoJsoSKJXNCBnS7rbZicNUuejop7Vc2extmd4cuQ3izkrT",
  "key16": "47ZgTdYuRdGpRjfeQD5qn3bTTk2kf1AmZffkjD63w9Nery9QvREBGgmmuHh8AxJV3E1fXwPWEb9di3VYpeTAdmnc",
  "key17": "2cGwRCoYveXDWA1syCQmC9692gZzgA8xWdDiCMS2oAsgUxgHw9ipby3XX5CJTe24gb4ByCp39rU3dojAuwCSoej4",
  "key18": "3KTDZoFyMWGniuGzYSHJNGuCig5rVGcf5DBfLC2FL1BZm8Y3TpX5qJCdQW1RhHnNxyjXhuRv3kEMsgozgSQpAHsr",
  "key19": "56NQeCr3sNuwP13ihCM2kfXNzLLiFuFGNxfyDhgztQSGfXf5qXSA9LBwD5g3mrXssNwy9xoLK6CBsAAStxBWeSKL",
  "key20": "4itCDAejQ28NFEkGKm6G1GMcL2Ybzzxj8nz8R2dPYzFEadRvP7ZTuF8C7Eg1R8vZjiqv1bz4sWKG9EZ8gtjMGid3",
  "key21": "4fZiav6mECbY9ChA2RXoU8TnxRiV1KyDdRoLxWgnT8xmDGBwReNjCi4YCR9sP9HmfJZp9FwQSmFQzdMiPiAHbWD2",
  "key22": "4ZjM5E2yGzLuZtyH67xARDcu8756RMy7iF91Ko3GvmyKK5rY1DrLK2Pkpaj245Rjb8gBHgoFddTtihSP3FfekmRX",
  "key23": "2CSJ2qUDTsWwPYv2UWd6W5sPeG5Mq2iJVgGvz8qBuqVTfuBRB3Yu6LE6bQrDbKxn2Gs7ji1yoyiV9kZSZCMpy8TT",
  "key24": "4Qg29kD7fogUrXG7Fkre1JxbzrafYAvWwkSQ3Yedq1fQzxaEVivzAi2kq4i6KpqXg3dX3Jf5WUuSdYh7qFjn1Xek",
  "key25": "5cj2LsPSBTVemFVrtskeuDYUTU1paSbUv7hiGyUzHMUXKvTrAmMzqzF5aRRWZs77wWabjzduwcuDhBY5CC31H9kB",
  "key26": "2i2WfkFCUHF81JeSvAgchExKBj31jNjdngDJf5r4G7rCUt8FKMMQpiDm6DLdsSvMssMvn7Cr6SoeHZCN69W8SaQf",
  "key27": "65bN8r7BMBF9dsJq4ouqDQCP4Uw7Zt2RxT9hPep4dUjYyueVUjDmZkn62Cq7gNZqnsydVX8Vn9iWdHDTEDEsBp7G",
  "key28": "4uQxSwKSRFiGcoRiwdoc7iZwghKKvdErwcmMMrCc6GibtmXVHg4DhoxGBe9inZWtNRpFXqPrfDdC9fBgRPCdfmaP",
  "key29": "3HSHdmJgdhZP1H5auyg7rMYjTayrvtBBk55p8NUP5JnErGsvEirs2ZX1bwp78krigtWiuFKM9ihswh3iH6kGaDQv",
  "key30": "2YAPCtWqznS4zQbMLvAcviN1hi2fYwWHFtJnpG1sppT8nT1tUYQRocZcmCabyGuRYrCXAvd5JkSoNQQ4W9pE2aNv",
  "key31": "2cihPoNkDNoJA8GvKbzbB9Z2aqf7GatzbGGomxdjrtyrQD7szxJSuPeqNF6HhtDZuiXTdveYvuSBrvUBFBvjgm5X"
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
