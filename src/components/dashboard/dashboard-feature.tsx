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
    "sWAi2cjuJvVTfrecBpFdJoSoZX9cjSmLUrEqYqtWjMugHNczPAptRGxVtFoxRs1rWXVX4rSUrQUKmNoQbjXEkzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zR2mM5NFqeedgEJvrLXfmcyevvuzhtpxFmptN8uank2S9KAjCTSm8TuMtKpc7zts9GhwMUyjj8sGLamnULVvE1E",
  "key1": "2DN2s3zptz28ghWWiGp6ixaKkJkk6KmHKQgiUV1kG5QSdZBKDusJ3YLJacJrXzgzj6jg4VPTxQBf1rfx8gb2ALTB",
  "key2": "5bistCNvYSMgoWQYTJBVfSPk4yxyGjQhunDUtFMVRyBbwasen9kHXToc87JWhdPRf6WB9syzZHyKhMCGGcZ4UHbv",
  "key3": "37X8DhjGZE7wP3ahv3Kc1BXkfECVFtuyGrGjzJEpm6PpvHRUy9cDJskedqca8BD7FvNJCAQ9DtkxpMxaAoKt7RDQ",
  "key4": "MvQ8BJxsLUHQVh1uqxqXg99etbZwocK7wMHfiR7QDa3VDkjVKs6HSoEKyAWewC57fg3aLcxNab6eG93duWY2fue",
  "key5": "3dfJS2hwPBYxoAATDf2soBnAPBacN4ZhgE8ku9qVmFHQYEVTx7prKs2Big2CnhuVkxor28LyvQBhZwYEjPn62NUT",
  "key6": "38PsKt1qnTGRpBiCipvNpESKa55oLCruKebAgUwbVgaF5rBn3qeQLKJ78fuFyy5BSkbaYUsAa22iurp6cRUHRLti",
  "key7": "3pKbeFZtzcwyW4TP58zEayfn89ae7ihkcR6fRBSF7zGhBxqLrMzpF6yffUj488HYdMpPEBLAy48TztrLg9ucL2SW",
  "key8": "4jCCaTDp7zdEdhuk8GyTwhsTAgt3r8AKSB1xDKd4ooA56WYN2FLbNqKowZqMPnodjR2ptjxRTGgfhJibus48ezuF",
  "key9": "28WXNjZR5nmtS3qDEQb7yZic815KdzYYZA1r4tt8YGCcVi6chAf6H12kpC8eJHWq3BMLAW1o8V1wkrVX4PjkcXRV",
  "key10": "oPAgX4Z73LA6hKj36Aswxk6i3BJBzmBPFtQtaafKxw3cWUQaEMbaQywfWYU7MpzDpd8vJv3ve35DfA43yszmw9u",
  "key11": "5eDULhzEE9BNKXC8PKRuHTauGrrJxYamfmyaiJ18zqxhuc1nS1pGGHbhWcdtNsky7cvWnPrHdB7XNhPppUXFjJ8W",
  "key12": "2vNxi7stCdmsntgAdYSqmYWmm8TrHMZ9RzUWfWJk4mY464MdwXTnZbkj15s8hWbSjzR4FPt8qRpciRTx9Ws5bPoK",
  "key13": "L3ngCUvdwn27pmpgL4umkcQkfEerSV1tsCe9b4XnVSkHvgyJpJcEDP1apiB7nnyyo4X85CaDpzjgQM3z3Qk3EBn",
  "key14": "3YVK6kRwDRL5MJfgU91bEaM6d9c4ykPVN5CmHAv5Kj9zJzCypAxBE2jvpBexx1KSbEi7epTbK5puTAb6HfeRoSXE",
  "key15": "4EJJtMhgu431s8X8SfsKMxk42daWPe4iHj4S2gQfzLmyPwZohmEce4MLj1ZPpjsCPmfHzkeU7Cf8nxCGqNFHyVX7",
  "key16": "51u9n6KdSceprCU9oUzzPpNJUqT5yW1f1KR2R3exkvntVrkgSKkex29F6TboRRreTRTw2qDaXPtBxSpY64styNzd",
  "key17": "DbCUgatTtt3hTVt8gHqZU2pAMkguNbWzuMk9KbeFcZeVgvXbTn9TxGNKXXEh8tRVdV2FVg2toH13tUsQC3LTqkL",
  "key18": "36EukV6wosmHN4vCQEQhWcg5eEaFfN2orVb4KpdqcuTjvY2tpthrjM9Ar9DGHr81sX52vyDAfb5LEjFuKLRmytzp",
  "key19": "4LvUCz7Lyd45RUTaPdJXbzvqaPZKBK2gSpiLzAWcmNV2wCA8gXkJyg892Up37Cadbqv7xCUXb9boC2TffLCu4TiA",
  "key20": "44c7ap5q4P11VA8HBVVRcbKXhQw5aJMN6nPAqJk6NBsB9r3s19FHdbCNnJJJRkPbHQ4qkAX1u2jfQKsCdqetauQ2",
  "key21": "NGGiD1hrL6FLCwFRfeJSvKRZ3caeaphJogCDJmKVfbRpdH2RAqJXAqhkVPtSnPhjFFSZx3zbH8DQgdijyw9o7wj",
  "key22": "NSYvVy7f4ndkezeo2N4r4pA9cA9UHPHYuthYruwvDq61i9qqSgCoGrCT48u1yzHKDFhxSQEZFNvQGRGdhLGE8N4",
  "key23": "67EyWw8ik8QJyGNV9yNciRgJy45pFkn3PDqNxZAhyBR9tr82TEY5iGyetFAAxN2zDY7EFDr9XZzhxnBX4sVud9FL",
  "key24": "34PTNsUHAgBGSFskkdxW3BimMv7QHRtbqqUza4ysLLffhDpy561KuStr4rYW3hAB8k6UPygBz8UkegqoYfqgzJRt",
  "key25": "2XYFY4hMTkBqmqcnkGY3avWJHrjqqMeXpyt5zf6fH9DQK6QE4PqFofyqM5vBMEDpjmLYSvvtdtU9Jjmbcd6dxQcJ",
  "key26": "2X2JmzAb8DPHx6y71zXAt9Z548jqG3y4wfgxCfwq9zcMpLTH9rUgfEM3GXZAbzN5uCRKtp8McCaFF2bkAxinqN1i",
  "key27": "2jXuSPcyDunEkG1K8rLszEu1LiuLtizYuRoqoMCuD6Kr1ibSiCiCeyDUQ2LRjuvgohpZBgankNmu4yRCRLr7TqvV",
  "key28": "59TFj91fmiUaL7481FCAFejnTjadJCbfD9PjzyNCqzUNp9wpJ9NXVXoGXDYi1xvb2g8M98UsqQFtzuBd14FGA2y",
  "key29": "oWUSa3j4evnDtZUXnj2odKX7aFys5u7v6MBXyzNSrdpgk9894tHu9Ea8mo9UBkDDrSzunGMjkvXCmzKmvQ7wjw9",
  "key30": "BuFHypMkBhk6JcbVaS9EvjgQYGW55cqPXucefzgqE8yiGoDkguqEcfVxFgCMwomuWctfXaS8AChD9o7LY45MDKH",
  "key31": "4mvSG9dNoopYAXtDPE7R7UsvkWmBrvCVMkX4XQSxydbu5B8hNSGxNJW1aDePc4BpWMNZVqDKxCZo1kmRB1TPjqC7",
  "key32": "31baEHo6pg83HvHV1a48kVD9mF5RqqL2KEf9FqDbEQB6YkJVw29FuXXdXCtDzbFZWWHHCWwby3jEqp5JKQoaZKpC",
  "key33": "3M3g3t9sUe86S9XFwusLkAKaM7hw9wQz337bHAZApjPdpYLbf2ZYiihfXkrWmH4pPgTFrGdtJQG8Fpm4aDVrygjN",
  "key34": "XSJ3uaMAoYZ5HEraEk6o6E4srW5D9HFY88KtF4YnDcCzYR5naiG2W6XLTBg2e8te6GScy3MQMy6WWTAa18RGnTr",
  "key35": "4Q3xiT8Y4TcAXKkL26xCztHzpgFN82kikyVVUBeNs9B5wCbHppYeosiez9gdenoShQ4T65uNzg6rL2F8VuYSVUpC",
  "key36": "2t4i24L938ZG5sRoqDykLdnedDu94BpbAA1J1DaCkpUor6VNwQeHsMgHmEyS58UNwTiG48tDWsGSpAGkEcyfnY5L",
  "key37": "2rVdZZYKrw7Y1JyTc9Mkv1eDBcsVzw54Ebn6MUss9XgKnTdhxMTz46fP14yXn1Zy6NsktYR19KRr7SjyGKTsRfFK"
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
