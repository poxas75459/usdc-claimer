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
    "45tZnjJ9YN44vYdCta38JvPSijMn9VV87iZaoG5QvWxkJ3dmVHX5UY6s15uBKFv7rFTiy6zs3UEiYdTmfFMjRhwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHw5BqqM31HcPpLnhJ3N7FYx7vRGCKWbJcnJQtAPcLkwqQRtA2u75Sdvcr79BCw7BUhUtFWn5Xhh6gzTzbmpHDW",
  "key1": "3p8G8Wo285yoTEQ1Uw2t8soREngShJhEDngvzABS2Wpgqo2wDMeFwTa24XJbawMZwz968ckM72h4pVToLX4pMiq5",
  "key2": "4s7SftgHmuAS9xV5Qvk1ixmRD971JsAs7jg6nLdVzTzcXwQyvCrogGMpzjNgubUxwBXbPXCro9LEn2orccW6vm54",
  "key3": "35tmPxL1KNshbL9iZ3o4DcKLBDJ6Qe75mPASYa2fEFkoVXKhbiTDctf9sUQa9VjvoLouxg8442FqjUJXCXKSovsj",
  "key4": "4poaHERELUnJJne3aAVvmbVhZeLGg3LBhX8x9xmeQKCwRKTxBj1xpXM5NxDkiJdRDdAAJUtXDMt5m2RkxiVdRkE9",
  "key5": "b6ic6ohkVTo3CWkAj2wzX1zQJmHXxwudR8SFpMJsur7dMxgMPt6J89w3ohuPDBd3xdKukPCq8JufCS49pbJsCai",
  "key6": "4x5R5znKjywadPiPW7yuX4dvvBDAEkoYxF3CduSbQesdTF3oH2bBMuXurcbgGxBf3sV6nXAy8guuvRCeQQ5S7RiC",
  "key7": "1EiLgjPjEkVebLCpoSpQbL2ZTuewYQYQddjtiTXnrpT1eiiVVwUarupNvY4x8xf91JCVairuycEt9NeA36VR7BF",
  "key8": "2rWuBpQd3yZnp5dntBZMeiNfWTbPkyYzLnLQLcBvuY5y6UGR8GzVCK4QrrQw5o5ojMa9rXVDqo2q2xqqLEiGaJQW",
  "key9": "x7PubGhAf3WH8Xc5r55QPk7ZJ5jGwsqpY4NJukZHm3DcMZLE5uaLbkCrwUPQHin1N7CBxjQQC9YnJXJ67HLNK5T",
  "key10": "37tiNR9ZuVoZdkdbcpv16yKQWfNSBtcwgdKJ36kMknM8iEGvmB5RViyQyapSupHhFhbJiBDP8L2EbAW5ZJ3ofb65",
  "key11": "2uorci2561JyT2A3Pq3hZNBN9YLyCmXuJc98kyNWXUb8zfQrTkQV2TvSUTBUFux28ddnFgFrr1Yfh1iJrxoMWpjm",
  "key12": "3QDSnpfKjPfSdk8tC9ubUsEmwu9zj2EgXQDSCpDYi2n6DxaTarAkP8zh1o2r7JMk8p4ifiaVkypzeSkPbQa9bS5w",
  "key13": "4XB8tLrkxV5gTd8Z7v8mLaobqgWifAQAjbZjPLta2Uktd9FdJVXayrMxS4FatDz6G2wx5pqjzYPA9F29i13BYxJo",
  "key14": "3thtURpEbHPbt1uJMQ88sRABE1BAbicYg2GCcrFnAN4LbPYt5c3UvmWAiXivcMTpyRBKAKda1erTZ11aW18q27Sr",
  "key15": "22FzCDjkP2wm85kVFwdwfq2N9D3ejbbzpu2iFY2pxYvi433Zp9VqgQ41oReVpeFgVYvoj7uksXfZEf2QKtGn9dN5",
  "key16": "3p912KkKb84FSNtLHXAZ57zH6xEctHnFVEwrdCT2vUr3a5LkTdBzTfv1Zt2u4N7N64YZYa2L2c1brPJeWFaFKVZm",
  "key17": "3ed2BtzocL4N8KKnPLgUcK3cpn5YVgW6TzXSM6NGQZan8R1iTcJEqKshvf4iGft16yRpxYyfZ7b7PUgmXZzhzcnU",
  "key18": "UrQGVb5QEKuFtuKwv2omRGZYjic5Roy8svUQQkwbaSEyn1cMSHGjDoTaSJ6Gcx2s84xhiSEx44CQ5u3DiRbjDW9",
  "key19": "3CehPBcH1BX7SkXjzrUC1NECB2evwhoyNcyuFSZQbKDjMrEVqouVAAp4eWE3biCncVTDruHN157hnb8PynRVkPfm",
  "key20": "4uaUMVAQfxJqXrS1oFvxF8ipwUHU6Mg4RMR1R26hBYDLwDKqHkxwzTgxaFS1epbn2wB8SMA4ku5yCvYzLGHFUM3L",
  "key21": "2XGe2jQPNf9m3zfd8r1KTmVahakeRacNDGyofRWk6TY6esVWzNtxT45GbfM1xNYaeekVTFDUen7cbN6HU51ZSzNN",
  "key22": "5TNamwxxoAAb3UhQYf1JkiRn8LeszzJdnMsiizc7cBpKWGRFWwVjjyD4MrS5Xmssnxi6AH3XkaUgfBcoZUg8qUr9",
  "key23": "3w95fdjfhhV5EAjtnGWLdDXxtQhTKJpsjqKRo56Rj5FRkiUfp5cW6R4xxD88yWZ8EvE5L8284gG3kVthGCYL4Xyq",
  "key24": "3jVown2kYQTPV8sb5CfGUcAidwD95nN5GrWniApyoBsAuh9SD9889SYf6hCyEa6pfVhxMTmTnKaNaWSegv8f3t3a",
  "key25": "5cmVfb8Pb8PeVc9MfzGf82QY5StWS813oUrg2fe7phLPLNNohzXPChfGb5a5CUgF8eix9TsWuCU6TJe6sF4PjWqz",
  "key26": "2XtRFSQ5C9xPRZGLVQfpSZ9k9kBryqzPsadbJbnPoVwgzLNNqdrxy6aDQ51DjUipgZBSxq7vNrRAB14YA8Kuc3jC",
  "key27": "2b9ayEJVAq2BmN7oJhHQ8r2yQnMFTvHVvsCEPPn43ZqgvVf5UM6pDP6CfVEYD5nvhPCovDm3uaL4MgeDsTyuX25m",
  "key28": "3VcLQqHZaYybBvKwPVHMuR9fSmcL8cDNqaKoPtrby4X7DfFXCF8WjUveQZjaxsELuD2m2wvNQoDTg2pVeBcdP3c",
  "key29": "4ywY9wkbeNTvmmdAmLrxyfJ7PiGTRknLA5nPPtsxdv9f48jPG7b6vcj81s3Qq8B6nc6YdUD2PeHAt6MzM24vJvWi",
  "key30": "4onkVJYPszUbqBFLird9ZVciESut96fNQ9upmkW8P36bTx4fRb5BCZTPikerCJ31x13XugyKEGFrRuLsuzcTurno",
  "key31": "3WVDzZ5A5Tm7u3CoX29fHSY2VvXCozibgJocXorzAfNqPfRHR2uP93wHzWuTsCsiuwGKaatF3pPyimPu62XqYDNx",
  "key32": "413kkwaqDz3cMPyMzSHBMqPstfhPpsS33bUSyf9y6tKTmZv4EaiDcJYo7TDNufJbt2qamhNGkbxpdDNpzSkFqEdn",
  "key33": "44Uh9a7CUnbL1uNYQb2t2Lem64DpJnvMCkNmEdVEt3ADytKpoQbV773RAYd35u5Ci87etyBB5tCkDFSG9zqt4edf",
  "key34": "kPH5fDoFidGzCzMNUfgr8dhkvSr52bUZi8K4uxp3pLxKHVJF5frYiLtEKTxmCjNk5YLuvBw15UQNvbhBzCuCCnB",
  "key35": "5qnPVFpNBqsvXo6cHjU5s5DRYfz7nZhSksxL35igznaN6bFPUYqWauMwsXYWxGXR6imJ1WxWphkC95aGsXsYXt8x",
  "key36": "2L89o73UqXTCz1Hqj3kDDViCMTcY65rmwXCZbFZnr5PjNVSz5B4sjW9tuL5xGhgHbQWVST2rPRACznT8FLT149z4",
  "key37": "618EzAe6gwvzztCeAn8xfMdBVPiogWqvj3AnrUer4TYsKUqRuXhJ2nXh2Ne4ZWmWiRWrW4x7TXHVtnjP8gjbbN5M",
  "key38": "5p5Te9oewgkJSmENDn5KxWU5f8mmyxgRdQahYAFBpmvCXzYWR19aDpbUVQEC4H6vRtkFdf4pvcJhm6w1jk8QDEM6",
  "key39": "aA3upf3agLLAok33E8owrLsiiTBqmb5DLVTbACXELDUjH6PaCZff9UW3m2Tz5myMZka76eRxavBZbAXYvLuY28C",
  "key40": "64Agp6ph7W5c1nzHF2MpGSd43LxGATf8efhznY2A5WWZNRTTjv5xKQrmpSoE5GUvtyCsQmYAGCKa8G6TckukZSiz",
  "key41": "2mFMZuL2yLhfaYA1y1gQwpXjVs44M459RJahVmb7sKnJ2iFSLiJmH1WL4PQ5zbRBrp2R9CP8RsfeBjNs74fRCY2M",
  "key42": "4b7RSdF86VNikxNQM2wVBCmpE9wXwLSkx8V9DZkCMMgq379kFcpPmaTvD6Uep6uy2g7bGQkLadHFBpVnGfQhQXk1",
  "key43": "3aJkVsFGQFsy7tTqU7QRHcwBAkHosCZfZtruM3VRxsps5M8aB4hBfPo9cVDw4vXzrVfJZJ1Vu8Z8zCERNnWzBeEH",
  "key44": "3Qj4x76nHULi5wdhprhf3igcqTm6nkjNXu7iJxwhLwPz3kzUTiQ8T7NvHNxTVFWdPaJEg5BBHZJxNqmPcLbzB1cy",
  "key45": "3eMXog2oNGZbW7y2nwtH9X95BKPGYq7V2Lsa6VMgtbpUHX3PeZbDhmRLPVz2TEgPtajoqCWw4CFdx7zghGMqiFDV"
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
