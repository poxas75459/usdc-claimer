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
    "4Geu7PoankDRFCQoVfFsHZfWnGuo3uKxcoAyaLWbSAs2ge979i4e2VWTwUNJ3iemrHQ55T7SqyBxhy1ZA3TovefB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVc9uMCzRCC4Cipq1GbxYDjrC2mDBWtkf14Z14CpBA8tVN6rRK6sEMVjPn1T75Q3mLSthVyoUdFvELUxhTFZxxN",
  "key1": "3Jx91CA8SzNVEP3uXAjCikTW3x2Af8zraNaHk9V2Fm5L5ArtcjmMa9h5tC1Ym2cackZFHxtpx6GiJKRUbytAuiL8",
  "key2": "4EFTAkma5rd6zsrab2C7PPk6YrhDnQC4fXBNGrzCTZuRgyyyio6ZqWkRTwxW6HfrmVzRzuGSAaR7Gx2nNqEEG4Ud",
  "key3": "P2CrnwWjAVCjuZ2CfnMnVmKoca3HTczB5dqWxArDdcurC21VVasxiSwWAuHu7C39xPam3pXirMH4YapgbK8va4X",
  "key4": "64WKiTBSXQYv3dMRxetAA2or3RGoCd9dAAuBDEdWJxNdNdrgydDvTQ3CJCeCgGxqoDmm1ZB9HCcUnxDNvChEvZ9M",
  "key5": "65UHmt4aW7GGP7GW6EogqwYjE2nAn8qqBpoJksw6CoS8hfMJvjbP8kViKP2aJpvbC6yFfW1cWh55E2enWE8Kmrjv",
  "key6": "2yvdYz7QKyaStmcjc1DPejwBYWFDCPcZfSX42uQcaKKApMa6PhaQmPhveZwriRwqVqPvkrL3dLUx1iJJ5XKf4ZG1",
  "key7": "53we2AAbgj3jjkSppBxBA21wD2wJp4i2i3BLBxsNRmt3oE7j2hpJmBynPc867JieJf24CYzaZiUi4p5D3vz1QN9g",
  "key8": "3SFGzwPjdp8zy7HxqUSHe763FMjmozR4QRMRJM5HTZHS5PKdatt2Pd7zFEDUBk3rwF91r793GUBxXtgNiUByJ7JG",
  "key9": "4fCq7H84JpbLLvjd9TB4oQPJSTH2kVzxtGjbkTDh4KaQZgk9MPBG8K327PcjEg5ZNQL691Jnrah3kjpBKVQFHsyy",
  "key10": "29yKAFRuYy2X4eHUVyFKtZowMPivc6REpj3BPdrqhQTdc8NwxqTtoFiNxEie46ymUq3FsbiEqt7GX6UWoDf3Wb7K",
  "key11": "55Li2rm7XkgsBZyS75HYMTmU1x18oeXGttDfNCveqdAGDW6v9g1sDfsvsZmE69VsD7o8VQz9MH4GTyu86jaTiWyk",
  "key12": "ZPyyZiVs4XuAF2RnuMVGpWbZ99QmnbsCWLSCkiELWcyx2oqYyy7Ch9515wSeKK7QjfL66ikFaVAA9EZYbvzQaTg",
  "key13": "2B1CzzELVrBa6sme1WY5zF8fy6sM1zpAcV44JqNEpSU4uMS3tY11KvfBZu5GvEiJ18osW2svUC9sTpQwXdJMQzpi",
  "key14": "41sUhhd6RL86xoBgU2QaTPtpuVCsvhpwS63ynizPHXq9aZHNTxdSiF2qoMhRW7ySvRJwZmZuyty6tiZuwcsZMmdL",
  "key15": "mB8iKhiFRN2UvodqVcJ4RUQia4d67QmgaNbJqduLrJongLahhhgjz74EE2NTRmCL23hyaoFKRFmQ9pGhM3JunJu",
  "key16": "2qzRPbARJwbmv72iyfsCUuYKvpGZqaeoXXZxeR84WJTLaMi3J4ay1jTpTqDLxYMKCfFUUYJazwQ43QH2vsF6nEyU",
  "key17": "4MX4iuVVB8PrNpZBTEKtWMSqM8sdCU6FqfeKgASr14Ut2gRNmBrcCq56S4si7Vw3UxHaEMGzdf9xXy3gANwUUHqn",
  "key18": "4RjdCJF1EMzEsRiZ29ffmeFgrGregtZtcSgXTch2vhDsD29EdkWejUtVJnBmNKyKci2ewnN2Z38ULsT9QGEoJcTN",
  "key19": "59SnjSjYdyZfXgbM1DtbBjZ94WpbdTVKtcN9fcWj4bYZEnBi9cLw6rmqhdoNLUu4hV4GMjZHKPy3MDDaRUt3Hs6p",
  "key20": "Cy91rGWS3qtfBDq6cCDokFRHMrjNwtNP2aUFuHFNwdjyBjHtAm8Dy3P4KYNMTARUFhmn9LxPz3zB7fbEeU2XL8Z",
  "key21": "347P2P1xwR1xY22go2BLnsH75TsvuGSiKTtCnP7eV1uZjyw2AaWxftH7MTyv6Hei3CTC1ztejBJQMzAvzrbu91KN",
  "key22": "yehjZxZeNURY3dhQfBtoaCaX6WSAgvjhKNQUA65f1zrXdRQNEcC7EV2KFe1Th5JjckX1dKV9aufVnRgH797FFze",
  "key23": "26ZE75ybLRqEFdbxmBBmKHdxLsghXEjsvmARDHwDzGChFMTEyLvkVt7vsAk6EpvmEMMd82WQkug4DruQXyogzzZC",
  "key24": "T3uc7dZR4c3KrS38Np8qRGgjCShUBmAYAxHv9DVQyD2xnZF86WtYksNNntdTbXQv1MAK8LcfjdZF7tRpwb7QytP",
  "key25": "3XbdSxLXoMSK2xYsVG9J9o5hPKD6WzkbqNnT4i1axzaFva5ECj7muKouqzvYQjBycAvtVCWqFWtZmZVQGZsLuLz3",
  "key26": "3ar7c2FrUquQLKjwUBCSV58euKS3WeGTVUvqFwgbDsPoz1wg1PNHf1gBxUZaupQ5Fc7bSdsChtKHDwpmmqsmeaqP",
  "key27": "3Vgs3y2s7qRHecJMBivZC82Vzdw4zqFSz3HEEAgwhc8qZJf8Gdu21EFc8r2cjpF1BNdZmcmSbL4RKNNjTGekNVyR",
  "key28": "4jr7sLHh9qKrzNo7YRhRzqZb6e3iCvnhu9s9RJEUok266wsuDLqo69idYj7SenCGivxRRA1Kh49PKSY9SF9psThy",
  "key29": "2AMviRRqMA5mTB12ELdG8CEBKENAxk9ipLQGaWEApDe65eEe7urPsxEwJRVh8sV7WqvcxcxHDoWZTjQU94JtTrsy",
  "key30": "31LRPHWncLQo4VxgWo1w4PjLXNQfvav8aAC8Bi3LTjHZNcUhVGvUDnzfzBnzvDDJpGMLAjepgEQg7Xf2aE8KbdTH"
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
