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
    "5TycDhSPhcSh6QTeuzXHLArALmXLxNc3g6R5iSPUFDmsdFpK23fEErdSHAKNtiK2KRmDayuAd4j1wdjt36kWVqJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224x7V8bXDs2ihsPMoNVcG3xjXGEsp9MTYsnhWqVpMxJd52ZoXuht9pABpkteTDyHjiuXajfTGqKAknktAi8vz1d",
  "key1": "5We61pSMqDMiQ4NEnR4rY4Bm1cPmtXg1yxVsmrv2y6bmFZ8ex768zsz4FKjgHafzDbzLgtYi3kwWtx85RmXH8dnX",
  "key2": "64UFLof4TrcZ3oCFgF76Hd3RX9qkaxRRRN53DxL1yezBpqeAKUHXJaGfDUnpdr1qH8ne64kGBhSr1DYQa6TTA6qC",
  "key3": "21BGoZrt1gvH4xQhNPfxFoQgD6r54pd89D47WFNxPK49AKq3GGDLxmzzbJKfEgaQm451T4SFjjsKuMcEH5PVMfTh",
  "key4": "3YbYsrTeo6eXEwA6bKB6fvdjqxtrJm1YuM7iX6Y8MCN3o5BFPvYmsvmjpRtZZ454ZRwt9s7cveUSQLVMajxovt83",
  "key5": "3Jg2wceAdcfh6sYLta33MFvxCAGDhmVWoaJ4sa9F2YPVGZGyCDiew1E1ctJhUMPKvhdKKEX4zwJKQ7LmmUuqztYy",
  "key6": "BmmhSoFQuJbMLWDGApDVbsKqRTm3SxMKB9c7VdN2GhWFxbdqwezEp1Jv2DpfWi7xy1zF9exut9G9NEsuwZhCvbi",
  "key7": "3SjXcCCyvjLxNQ2Hs2AmJtbGSG4xjcRtdenqqsjVNcKtrA6AzQU8hvmfgNTWvyqSS7Vfn2PGsBukB5859zYD598U",
  "key8": "5ZLFfA715rD6z6JSWnzuJ7ZisHH1HWS8wZ8X1RZTYxRnWKTw51G2oY9RgRBdtNs4LA3Q3FqMgyfxmpktntam23vD",
  "key9": "3RW76oxML1713Br48S7LBTfFgpf7MZd2To5UfzfLECpt4xm8EJg4aiauRdUAoEJoVVXCJ4gy5P3RNW67WxqSfi2j",
  "key10": "TGQ7tYxazQsZupSiQttymALzhzWFURQXXWAWJ7psf6ZeLphwkMYKuo52sXh3hVqvqvx84LvnvPV58XPVr9vXRrP",
  "key11": "5nf9We1HVZRnVwjDCzZywMeYKHmJhpauE6LUVbW5PjJK2eVynKhoMKSYp5NmzPjkx8ikXcj9rwppyvBmtRat97nh",
  "key12": "5u4dQzptJ1pWFt7bz7GJ77PCesVaPqdGjrPN3BthTdbEzg5ZMeGqLn9VdHjEuY6tg6x8pq5krjz2fpikXvu2rZP7",
  "key13": "65V2DmbZ4u8GAXsdy6ak8BoyZiDbZKbjmz6ofRmxZ42e6x8CDDD7STRmffYtTpC7ajKsddruKdspmWV9FqtpnqQ8",
  "key14": "3TMT29cavsWwsotSREYBXVMnw4k7FiF2XcKFwWuEvUkWySJn1Qgey6WQs7gvZCggrD2g4yFRDFrp4omTtNg4NPAn",
  "key15": "9quWzHvxHzpqCwbxNxKD8hixjMbrGaZPz1mqoiTaXjUDH6YLKPCEXJQnM8ajQ6o2Cruqsfxh19GZSZYckPLdmhX",
  "key16": "9BGRr8Aptbge19yX3853WBvwDYHLZPedY3YemxNZPKefSvcxUzR81HWy9e8bwR4jDTKUX3MCWFsSB6VdMipP7aw",
  "key17": "37QXR8FZTavRNMMx8n5cKvH6dgdtRiykaJKdmLRbbmkxMFRfmyMvrD7nGLbrjKNNomkUno7YJGMfL8Z4xsQ5BFqc",
  "key18": "3C6eY5WX7qXXA1FyWfDXyzyiaThkEUdFZHYHNcxevwGiUwsdTJK8xYCnfyAeEArRj82CtL85pDBCsvMEGUutDTYy",
  "key19": "5ewsKdL5phwdM9YSKKWeVPa7VSFR2BiHy7rsqjyBsyyji7GZ9bhpcKo8MskXf71V5CAk5Wt888eLufy6eKS92XWM",
  "key20": "65rfnv42M123W9mzDrRwszCLHY1GTkpAnc1cfDiV231Wi7TCdaJu3WADsVMDofvChKRQ2TbXDjGQ4yjr6RkujE9o",
  "key21": "A33jvesVZuTmsqE6huMtfdtZRDH4DWSiSGswHSVkg9fCtmDPFMK2xStCnV3v1u4kWY7RAD39ko8ER3oEfFpSbj6",
  "key22": "2RLGz7tHQs3DV5uC5gsJafKLP4rCbY6G35bPKyzSaoDwhWo94Xp5Mz6vpSh1633A2mdBYiYHfY7LwShWT5jADg4b",
  "key23": "wr4zCRQcyUNtjE9w2CGSxxsPNVK3Lmqf5pwrha6TJNuJ3JKqggDezo4duAw2DDMBhrZ6q3dPP3Cjfmdy3XrwAaE",
  "key24": "5o9yJk76fRXH5v6exBoChMMtEa3aQyPD9fri5KJ9FNt1LTpwgVN29EG5cmvAeZbjsZQTr38soi889QGZjquvNQ5a",
  "key25": "2QFJe1AHHhPVkVTd4gvu77BKdUMmQiCkMjAoAM2wXLHJUNRUFDWGT7UsWS1QhJkSZLdzRfVSopgors4KrUenLQ9f",
  "key26": "48aGcTTei15rRHb5TsBSkiNbXASf8mohFR43zG1M2bghhLhgfGfsuKBMUre2WcHjaQaThCEvPZzbc2KwmMRaDDaT",
  "key27": "4KEqty38hEoZtBq1FNH9sLWopDMXTdXWoSXNRcWLxKrHLTmsqhKhxWPSY3MVg9QKDoMygipojWLy5o8rQHmMDPPN",
  "key28": "56fpZBGvLWxYDKpUJ8tNk8fKXdo5wXG4oAxq5AMRU6KoxZ9jxybg43anMcfFPYknsqdjhaCRifjHM9jPmQTeWZSn",
  "key29": "4E4PRoafcyQiZgDkistYnFcUCzn6VfyxSfScAUnCQ5fsCFwdkXwr4y4knYvpy2Qd2gGtApNvzx75ssbaeoMA7D68",
  "key30": "3LTqn1seX9TWPUHMyxb1mt6obuLdfwHJNqYsXjN1hBuzQNXMySSjsLfZCdjBL1VrNJJQVF5AxHVEKxL1FemksPQf",
  "key31": "5MLRU5rRNTPP7zEMPM3PCHt6bQYCRnrrsYKCYrYoqQc7FwC14zKsidL5yonUQX11VqJM3CkkXYgLAUzkzFJbE7G6",
  "key32": "4DcDPm4a3z51tgw2W7NN8ELzZu3EvHPcv8aybQYK98cXTfgz1AcPpLe3aB1oYXdbbhJh5PU7AMPuhEaBMcV8PLf7",
  "key33": "22r1DCHmiMKoagcXKS5qVWCLqKn5oQ5QEv3okxrsNYRoGspGvmbM1kUuUhSHD9EuT71GS54nV51D6FH7AxrTPXze",
  "key34": "5MJprAVcfgSGGqwSJujBZjv8EYDfLYefZu5XsiQtvE9jaGLkTtDej6F9wXjLif3cK9VA8pzGLaQcFnL92VdpLLZ8",
  "key35": "4cqGNSdKWXhVRuLWRNfdsFHBR9m1CWE8w2wKrwthqugSigRQi5jpU1wg68mAdR9uTxwLURugBNDX5vLaWRqNfmM3",
  "key36": "4nzJGH9TBHyKHxRgT34oDJQGsg1S257ttTw5atw5tF1qGMfsKwa7gxVwS3zTgmZfpVcUJc8J4dQcEXNXeFYECz21",
  "key37": "3tj7JkG5o7MmGZZpUeMfHmYM993SuEjQd3WTBKG2G5Cd7iqiBuDwHN2N5VEZCzjzAh9LqgwYaZVAMCJFLmA8umVu",
  "key38": "3Kg3zLDKbxkfhDB7nPEacDLF6niQPhbrKJ311wVifhkeirYjTW18NrQtsJNNGwP4eYjFFa4GSnjNczv57DteTd1k",
  "key39": "5EWuZPsWMFa5xmoRpYz1VNB3dsiC9tu8yK3CCBZD9p3rw6vwc5r7yBaXhdGqSQ8dmY9qCmvAa8gsbJobwdi8qsXu",
  "key40": "3wSwTLFgTe9Pn1R3TTuFL12Qm6zzuPzZMt8NLA3ThNehZ6aDo14UJfhisbspvKUo4Qrgw766KCvrj5QjuHTtC4LU",
  "key41": "249ic42j5NYbKzFmt16rk3WVFBiHTysZXbGbtCSBPEuLoMBztg8sBt1puZ2WTtdupM6hiHwtqbFvd9AkCnSEwSJz",
  "key42": "4SMJMcTsRsFKjUC1qvXHckoBqG3jDE8T1rVzZWAb7wX6GsYEgiAtBKDmswu8eeMih4fg42KevAvzVbHKLokAHpc6",
  "key43": "3FWqyG3YBRPfgMKPcoAAbWpNHZS7XM7pgGB4LwvXTnvaTGThG6kFp6aN5rYrXafr9mqgkLzZ7oq5W8nK8DcNuS38",
  "key44": "3BCyezyYGzc8ppipSyESFZUBF7YkdW8hoq5tMCNFxD3q6m7kEgkDsjpMtUJWLhp3i7GDGLK1Ao6xtWZGyhuzTNjC"
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
