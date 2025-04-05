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
    "3TpMke32hpXJXvirLVMTanCHGCZUrGYyEKaioCCsMm8jSBQy3W6RNnKZ2ZaWX3u2pq5Jovv4swehYxzTyA2Vr2zb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nrRJ3YDi4dftc7txRo7FMxGLwgnzqExQdQetVsnL5nysLBtEchsrFRgiGK8uu1iT51NW74739AMxBU7WMJqun4i",
  "key1": "3GXc5qJRHh96UsiCAiy9XNLBJxR1rUzaT5Wv7tnWcJHuCAeXFkD5jzqjeX74gD51hjAnas5PyhDTdmPzwF3hJX2V",
  "key2": "5gybTAefawjqRiReYugV6Z6PGkWrPBkiGhLRxTpZDrG9zePJsaW7duuM3KwgWhqjebV1kas8ZEa6jsFJtEFmjL7d",
  "key3": "62gARmGcw74mQqVrSuRGU61Nkknawc4VTAsgqPztPbiawWW8tuxuvH2tbeHWBRmihv7pjmFkGgxxe5b2UZFopghd",
  "key4": "41yaXLDybobTymscNX5bMxzkTaTysLjeQULbFiu6VSEDJvdCzRs5yZUTWDqRPJQv6gDFhvPud3zwcJ6ptr1XAMow",
  "key5": "28Dtk3CdDSj7xgq4t3zHvYQKew5WD5FCKawhKJ8XfJKhusTdu3dY4yG5a3jXorGPBjbLHnrVaCW55P55yEk6dEs3",
  "key6": "4xG3R49sAh3G1v8F8fZyUzsWkLj3885r5g6pbrGyW3mxBpXG3eaDF8UnVkrsv7yFC5s86t7KarwF26Lhrf93XSC6",
  "key7": "EGyVqdS6ArifiqZN65U9Y1JoVh39n7vEbJcksavtuj9irRyDKXSWuuSEgrGMBn33pvvSRrV9Z1rWib9nEJXmjtJ",
  "key8": "pfg6tMZDj7RDCmyzL8jsDmZi58xWMUGHjDqisFHwm7G3SM6q5wtyw5ViAMXvH1YQ5eeZYDqcWBPXL3pCD6HhyyE",
  "key9": "4uZEkL34SHMciYTqYhFF62J5X7Rnxbxq8cTgV6HgcVpT5B6X7w5ueDTUbr17wV251nv49bvChJFRiYSZ82v4WCCW",
  "key10": "rZsfZJAS8EXNjUi59Puv32TAgyKv7mRYuMWc43zaWEn23XedBkjXqKNvkwcTMurmPwhdC3qBiWiScuDDrF1ZChG",
  "key11": "49ST7f7oYPJ9Ux3WDkZnxh2cUNL93Ai3WmpfPwKvxr1db4G9NmCb8qoxAttSMqN4xDst3JCyJwCzf56dRytVEp6h",
  "key12": "MvtBaWtZbkNNgW5ai4eysZSMfmKcXGu16A7hbeSrYRe6EJQTJty2DcEfBLHBxB3cybUMoRkvwt5JcbX8Mf79h9B",
  "key13": "41V8HKttgHjL9YDQ5SwiVdhtbDQ9643WMQUNpTRFd8EMV4Cy1ZsfoeUHii54VSRo9zqJ7nysux1GcrQoWVG2oJNz",
  "key14": "1y2MhwvqqWSb2gbUAXoD96pZ2xt9WDqee3CnuV9wq15WZe2RwwURLEPmGVeAzgQhK36F7KeP6LeV7pNDzNdGerc",
  "key15": "25LKDB8fu5bUypLk688yidsMdHruUvbZqS5gxjiGUJkYFCSmJaPWnQ3L2aDQGeLELsdmy2sqkLh8ToUKjJbpNWBh",
  "key16": "5jPptM8hdvm5kcm3b6rpMy5qzrW8RD4gWEKLzun4rFiexKC32ov4nMwY6GkuYPE58AkMUkjuCLW1xGYgAECgMEcp",
  "key17": "5bhcmZtCMsq1ijSsJd7H74HzBqcVMqS3WGGHaiKguXKRdFEAAhzD8FNF3B8Y37mgurp3p4gRmJTj9vGcAbWcqSYx",
  "key18": "5xAywudhHkh1p2SpesPmmN5vJgbvbvDFx8PPVZLA6yMCSpMfTSzRp7VQCZLyZkodorR3AACWziDkLxSzx9HLUXn4",
  "key19": "2iTkC9sXQdyxgh1HyrxjSbtkhhasFfCmhhFxVqC6p4w81R3HKV8ZjFt6iZ1Vhixg9mLNQGmHUVsgG41jNJTBGzBy",
  "key20": "4v4n8AxBHnJHYPxiAVhKjyiaoLeKp8C62qTPqunaYi9sWHKZNP367LcW1Fc4gpP4fuPAuEmYA7QMKXS5sWFg1Bxo",
  "key21": "36kU14HdQ79swNHMJBWqNv5uNSyotD8mmXM2rT1mnR5ot2ZSrh6oasUv196Hq7Xbd1sfPwRpimVvmqDWZRQ1LVWq",
  "key22": "2VqLjQSkpJzN6emM4VXFVWU79AN2GyoZoCVVcu4Ua1M9dABFSeYEZbgrdVzXNbCh1R5AQHRYhF5JX8DbSHeweGxQ",
  "key23": "vPuSybzptfvJx9Zr9bGw6MNkG5G95CLyXk7bzshiMdYikQVyAGwaPWaBa7Yii3kVRQkyaeJ76KToV6y2CRKjnEt",
  "key24": "4HYNGhr2v7TVRoQBTXriL4EkgtVB6es5NTpRsH3hWNFEAkJ9hdCoMyirBLGid2VifXo8KHCXnRmq6o1Kw7boJM4R",
  "key25": "65GePbSEgUdTyJCEGWTPMQqTC1bdGyGT8dmHuizQTeQYuGMsKaBA79TM2pSQ4F8k54Yk6ykNY3WLfxGCqXPPzk51",
  "key26": "2CuQQ67i3ybTBLDNqJ9TijgmEp554okUv4Bcu63uLsDDjLw37VbhhwNGjWqsQKXiPcPKbspNYg8eTG2M7fwWGoGM",
  "key27": "CpzjctdnQctC7mLDWQFTr9enmo3LwK8RhJgzTJiBuXQiAfS8V3VntbdYRrbASbU9vL4MyXNY6M23mnvizjsMs2L",
  "key28": "4YY2A5Gbn5nGVTzjLXNLG4S56wKDBBrA6NbMeMFzNFvnyKxJjGqDZ9EpTKiRiucYppeCkxRK1cMpb4w6i6roisVf",
  "key29": "2DvTLc1B6n4uCSeCvPra4Qj6U9PEFCMeBgvrSUedKPHhvW2nwYsLVLpvbtiCh7Hn1kQuNPNBGUH1CAjzZ2rEwcSJ",
  "key30": "5nCwYrTrjGcmPsFy6SgB6sXjLvwF9pASkW4Pu1KGwKq8LHYSjPsv3wnnaseRgqXQbVi2QgK35UYY32dCpnmbj5EU",
  "key31": "2ADsoGxotMWZBv458by3Sk51CLKhHs4HUAFk7A1KXzzSnqbK3oDHnCxKZYJsFHj7xoN9bxrifD2ZDWSybUu3DNDR",
  "key32": "4QHMdWef7HVm6BQHJSwcwt97EZtgy1nbsiyhekamL5dVb3Mvg7jAzgX9aMer1jPk1yMhXdJajcz8WqsdnwBJBH4c",
  "key33": "5tLZyp3JyvceLUdK2SnoqRiFVHvq8suCHba4qwMSBfcReGM9aH2edvgfic4zvM23JY3NqBzvrCcJvCNv2XTPoqKs",
  "key34": "2NwSLEk8UA6GLor6a8J7txczczNWgWeVBhQGJVvsEiJSmB9me26Ti2A4mYe5FrA6njn7jKFGj9SE5C4Ts7W9eJiM",
  "key35": "5rRKdk5bvvJ7NvPPqgqZdfqxRUzPywGXJkfEwJcdrTiVGv39FKLe2FSEo98h3xB9A9pJ8SSYSw9YoLzuQW7Zo4df",
  "key36": "5MrJoJDLmrX8zAgSCM5HW58qyf8HTxbMFJMUvrPi1SfyMbn7MtFvBMncGdC12XVuuogc7izgaHLxiKCvW81Xbqri",
  "key37": "3GsdA2EuBnMei3LBuiVmxsH8Zvh9xcBPeiNaqhRwrWg88HUwQhdQFsWKHE4eWwDzZRUSGHHDq4vVdaD8Z5PR2KnN",
  "key38": "4ANQc8e2dcNx8uKo3mkq6Px8zCr5VruBUnLvktWHiC3m8qduDtMicywtVyzMoEvSqoQJ8rTs8AHPnF59nEbuNo9N",
  "key39": "3pHJ6dk9RPFk5ApTexeXXQF4NRpUKCdzTW1PXkqMfFPzWakc28myApDPGMYVHFWF3reNwoaRBdCWfDA3uX8S2SAu",
  "key40": "3qjfh7bkAiTQBBBH4qtjRz5DB2tR1gV9T18duJgUex9TipGCktLc9nL6BtTvt1uyrVxyyKMFzWTXDVkZbsaDH9Xj",
  "key41": "2njpMrVXdgCFSyjsT3Ubydoso27Qy95qB7WipYEbbZRTmdT9y1HpKJJ2YvjwFkMCdC2kpmwb3EtqhE2zP3TcgPGu",
  "key42": "ibPgg1ydSGpKJXAjBjBc6UEsVaB7xeGGSSJdNunUyB1xeo4u8NcaWMUot3U9qJMgXJatykB2257xmzY3txNRVdC",
  "key43": "5CHYExDQB5oMnbiKdPzJnu3PN6v1obcgdJSer8pqamDVonAj3NAChB9J1j5QJ4QQVKcLCTjExuv9ZqTWh8DQ4SRo"
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
