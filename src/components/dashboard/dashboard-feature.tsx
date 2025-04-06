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
    "RifBitigkVA9b7iYZxAKB8DLmy4j5qjXzXP9EHJ2AAGVTepaMJsKBPetj53RQqa4zunFXzveGHofMGCimpLcdYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hF7fqHAVoBSYPXr2g6frsiNN3edY4fFFh2jJQsitbpwMJAg5R6ha5eESvk7psffe9vxh9QNd7qWRjFvzn2MnV72",
  "key1": "5PM8VYQ1dw4bAuC9kzJoTUmieT4fquKfo2FoaokYF2KhvHMTMhXXwZ2By7zDeYR6xaV4PbmYxmKWHQbc5xvNbEdX",
  "key2": "aY9T76WhSP36yRHo4kND2JieZ5vrL6RtduDoxHXNAEfzpWbT3LpqLYgUD3DjXM5D8aUghQFyZ1zcPc4hnPf6x2Q",
  "key3": "25d5nkvyH2GYZvBW13K2oH5bN1oWD9YJ5ocWGgZJzyX8FvosNoRDKPuHstZeyjnJh93t5kjsgEyPeJ5jh6Lvk1zp",
  "key4": "3zX2DpSrcMi8yU5dsugxHV7RXr5d8UT1KdjX9Ntdx6ti3sagLP6swiBB2AqA2SzXN8uMmpVevCQJ3bziRZorDUrV",
  "key5": "wCzx75BVkRkRLveD8jaL1pPU69arDLZciTfTfoWzgRrvcbGRbE4rtVcEidjPLx5LDtU9mKoQ3notM5YQiLVaHwB",
  "key6": "2LGR5Pjp46WHBNarhMaGo95LJLwMgYtYbTM2GszynbFu2FtTvErfCDgrELb3SL98GvULo4A4LWrUiYuCuhEd6Kq3",
  "key7": "46LUXZqkaMg2N35so6ZWJpjAKGdYQftG33So3V6FF9kXXGQCwhvqMhVcMZBgQw7uWicRBSEoQHXFMryJnEs389HM",
  "key8": "26YSdJyEEJfWadxTmxvpgo3MMjXCRaKkNXzYYQgvvQh3bM1wNEkie3EknWtkSNkWvtybhrBPcGYNy1KB5svMxARG",
  "key9": "3dFLgk39fsJctAeLjvMxpPNzP13RPnAYzAuFtDLd5qE7AzZddPtjPdXzDd2mPNfFncWwgJFjjrdaC71H3Y9RngLQ",
  "key10": "3sVYjnYKMjZDG7XRU2CVCnjMgPXeah19P9ExCWh8TCQeQ4saBAmCUQcpSzqvd9jKfzffVRm9cFFB61hYjcELg73d",
  "key11": "5xQjawGitstrsqX8VA2VeoDQSHQ7Gvnn11PAv3ewBhkxQj2AnuoVuwzAjcsu29o4585XgUhHbUouo8wzeJTAT3Rg",
  "key12": "7dKFW7xyKJG8WxTKoJA4RPMr72PXyW6FDmAX79Kd26M6qtYHmJprHjJjrS91ydZiZyjFUH6iiWnW4sHiUvXgvR6",
  "key13": "Ma4EBhnnRu32sWHPrprydYKTTKUe26NZsKbmhkhjV7bPLjvUiGqa58KV6ur3iQwKnKdmdHzA93vtUtEDeMbtMKZ",
  "key14": "7JeaEeAtJVKxUSNgutw9DbZkgsLkFfihAwiwVcTzsDTVrzMMBNK8THwxRdYrg6rxWHApQ4okHdzuy5tg2kcFUMA",
  "key15": "2qWxokw22YbSHWFRjz3uHC8HNUk1WKLGYDkogAPGow9d86zGL6Yi1N6u5RhrA5htMkp93Wcqoa6P9ssFQn4Wktgv",
  "key16": "5gYz7J7bcthXwMMfvoFsKxU6SCseiyCKkfaeeumcgL989RygZTb42MXm6tiBvcsca4MQBKVGJNmUsvstEdq1U8Qb",
  "key17": "2ktnZsp8ZLfBgDD8UBfkb4GUwnLFuK87NC3kMzwo3t3oAGSkhu3pdVWhvbsKZagsqANGjSYdUWvnEUqspBg62jnW",
  "key18": "sA8VuSbFTMftFqP1hB3VZ96V9tgLkwQG6tAKNsB18HDDStGffnQkt3LRqA4FfGEX5z1xbcPpiUS3X6osvsFbxfK",
  "key19": "32yQBa7MZmBKNR8hZKL5QN2jcZZKPYUdB4XwVpG3cn5N7uprKpuDuBRsLekMxMhscTZWZxdmJKEyXErPE1EYRj9N",
  "key20": "zeQw6pmZLgFb7amPTaEpPz99r9TLwd4VG8mNCj2J59yVJ1UDkbJpfKNwJbEizNhvZsCZHBC1xiDA9qbFuCqfh8R",
  "key21": "2LDPE15RBjF8noeGSHwKfAEzigR6zRu4ZPmn33VV7PjagCxh1pUpMjBm7SnrwqbVvGHFSucWtAdaZJ2UGF52u93a",
  "key22": "4iAFJR3gvjNsLocRiP72SgLBEhZDNJLEvPv3LZM3VkGypX9KEtLSsoniGkTEBci2oEp9xxhsAviyjgm9eFX73Vmn",
  "key23": "56X1dhVGr5JCuPSkLDkRz9SgPS3RJAQebrFdNBTwUU75HC4Re6DJ12U7wtS4wiF2vXjrEy9sCuuV1igPEBJQcM9M",
  "key24": "65mw2WBc24NQksQJww3JQxVUAnUNUoS5MFpx1nSgSVvjj6B56aJtkFJ7ejUVEZFhwALeJ2joVMuqDnPnc6RfDucU",
  "key25": "4ebrqCDSWDM4sLuEYxG6eSYpAbFG69W17jdRbxn9h38P5cBjT2qksa5xuojewVf1fie1gRJWkk2p8rdDwMwd9QAZ",
  "key26": "2UPbcqm6GFWYB2g83MDmDrKWLkbZYUXtRHgqzskRJ8nfXYV1N9Qq2ovmASCjn2E9ov19rkYaB3PV1PAFFHz1tjYP",
  "key27": "5wFBLVxsegou4eQhrUbqjBgX4hGhDLXFivxS8SrmKiZgNi4eD9AFHzgQRFT8nTFApK5cfE2bTzyJ9uu1aoKLUaNS",
  "key28": "2fHfUPywDhiZmeR1oPvokEiXguwA65tiiRDfi1d3wo4iyJq5qDoViX8nuGd9BcDHXi9BR1u9FowcjbNCkeexri6R",
  "key29": "4nvDYqDCWqpQps4Bvm7gbeWpCbfaw7Xh2CPf3JC5BYXXqXRfvQff4RswUq88YzKTBBXJeLvR6knV3QhVdsayLSSN",
  "key30": "BacVuJ6yKa6WoTb4qWbLucUoS3BfHCkqCgzg7axzusfw66pNu7u9Uyn4CgFvz1WZ2MF4Fs4FVH7sxjRqQGfWQ25",
  "key31": "57utSyaRchopspoxWBopM3AyhcCA8724WCeAs51dbQ2tP8ArmRFmRJ18JW1YXR8BtRG8QZt5qFhCjWnFa4irDZaq",
  "key32": "4WG4ryjra2hiSKRCzfaXdhEfh3Usq7Nu1npZGgJgygnzSMLKhPHttN4ihycYgM9299Wu1uTSLMmNPmgZygBNPbGS",
  "key33": "2m4rDUdwtVBYCtM6mBR4r6dkWqMexSU5zd7uypqjqQ3EzaNXb6S8QaCXVycU2AhCKKW3ECpTAwQKDt8rBhGZJCMi",
  "key34": "4oFCPVN7PafnAQcaVUtzxEJKTpzzSREQeAreL7yvNphb2QXHMUpRTXwBoX4AFbtC12KX8oK9cTCJmRWcGKDdhtU9",
  "key35": "3keSgG478PUFjEV62AJ4tNFZohpYvvzJidgbN3ezaELMJtgYmgDFmuMXG4P2RfEVthHC3ntbBxthYbCrUv9PenPC",
  "key36": "2qxU5QNZFXMqzdsCvjSH2giriXB11xVcsYgvvMzDFuCPrzqh9L6zxLxBqXegdcBtTcKbKcaZBe5JkKVenPMnBo4R",
  "key37": "4qSiRso4EGQTBKDsDGEMYJKnsZT8P1r7oBWmLhm92yyuKsjNLapPpw6pjLzg2USfBgKsDtLCNiKJ8AWfCAp4ifqK",
  "key38": "2Muq5pYqjQr3RtDc4Z9mdfi91knTPypTTTKZMx9s5pw3m1mRyjK7H37KQeLcju4rhw4xuNp2EZB9BRrTrKoby6Nz",
  "key39": "3kn4HS2iSHfAdfEcC4jzG7U1aALxfq2ZwhKnjQ7HiGN9H9aUaptKsTWb7RT9asDziFhRRrCBhaefvmdSkoD1MRgb"
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
