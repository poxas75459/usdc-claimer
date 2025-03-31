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
    "61VyUcFb8zSoxqgCMCff8xMmsjHXhx1tzAnwS9sCA4nyD5Xku9FK6cGz3qc3GrwWMSMtwVpkt15EamKwEcDSNj8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cUYoEwxah2m7VpdNc6N5Xd4cCXD1Kj8mSmepBv4fi8XvQLKc11mCAbU74RqpsH9Q524LBKv4aXaakAA2NWV1qSY",
  "key1": "3ddaKnXFf2s6wScK66sreiwbkkH9GVi4yqi6WDBzemiW5hvXfCeu7NTSbiSr8Wuw8FGs7vnBpwMwuk6PV1t7gKh1",
  "key2": "C5YiyUbvukPyrBvhhnj2887PmmWeaaNjB5Z89DamrfP3UDMMso4c1Z554KuaZrp8hiFgtVN5VLjEjyZoJVQXar6",
  "key3": "2BSiWKDkX7wpWaMVkDN8Eo8zFVYVGxEcvZH9p9WmgFjjmykfJzuBGeSWqE8uWfyga9F4rKKkmJdyijDfWjti2G6J",
  "key4": "2t8CSxjgPxdEMSyXth5wqary12YaNdKQWnNmWuuUZTEp9gJgS3kFD5zsoNZj7JPNGHkiyRprrHnWNEyz9Yvs48wz",
  "key5": "QhVXAahqQbqUeTGHR69HgsL93fnEJpGuTFnTh3j3mmfJ2QcRD7mE497n8yqfhPzqfPVyrRLMXc651KY5LRXZNKB",
  "key6": "5W7M1iz56kuCjjnLYcefVco8vhckV6GYN1Hdkusfh6BDVProEKX2wF9rnvteKcNhdcpYj2DgzsqtB5ZbRwyg75Pv",
  "key7": "evbePiXPbKTXhq7nrU5wx74wxBuLVx5DsHRxkFsPQU4Ez1nYWkBbZbHHo8xGH2wWgWB3g6t2a3ntAxMkSGk9Pix",
  "key8": "JTAtCnf6GgzbobCLmRgrWqkMAuXuEffwAbxnCYCtZhgpiMf5iUULaKYyKSRMsXACrEcNS4e8FBnmB6qzuWH7DvD",
  "key9": "2LGiu8RWpty5YxYfggA7MxAtduB7kqEJisQ3ZaoaepmtJj2hzof5DYMis8QWWpZrg8fW8bh1pKz7Tf2umDbPBePQ",
  "key10": "4Bn2DyEkW9La65HR5smgiYLHGTKT6posV6UviR6a5c9dP1v8bujjDxH19VkWmeTjymTDcXKqZowniN1xq8oWZbow",
  "key11": "2kAckZuTCwsobyeJJvGuvJyyyiQznReb2kWhXvXHikHirbCCAMnfB1HStqtWeDc4gzbqxQGR6ZUX9No3iwGp92bt",
  "key12": "3h7Ar3eGhXAiFXuhWg942pijQGB4LfHLx6miLiDvtstmkYq69XeeURB88PRCfi6i8agPH6YSUf1tMAW44dk85smP",
  "key13": "3LYgoiN8mRPMEEyi84SmEfhXtQvkoijWxVFKd6tYQa49ViRoh5iktWR6CY7839J5yovQDVtAozVvbqkULGfgXhU2",
  "key14": "C8vEbdNccqUFhMBXe5ezsffLDrKJHJhBPno5F2HkGvq4t2zFGUKMmkHedAAjrBbGHr8iwVsvBUDNR3QNEUatee9",
  "key15": "47FkxcvH2qTV5UvZ7CUUwRgykv7hQA7nyCVygHE4CTS8NR1rihu1wUaPEyCcsEXyozKKhSZusaALyjGFTScTVq5j",
  "key16": "2UULPZrFfXfKZ7rdSx6L9Z4LJWuiRBwUECt452a2G3cTqAwFSFcgEMteAAhoTm9QXivowG4D45L4fsDdX1FZ2yYb",
  "key17": "3SHEnocdE4VhLHU9NkzesBhJrELCf31FBHy1QCm5dFdHqP4pLC7vm1SkYSM32wjQjXc9S7eKcfDv7sW2hXh2SGzM",
  "key18": "5jHzepmqpdP9G9W48wuxgTBDnoHLAeXbra79JK1bN7aLoaF1SmJQPj63Rdnjq2UtqAddSEnVwg7vSqBDes6EUfts",
  "key19": "5kZa9Z7bxn9uN9PfvGc9EQpXh1r4HRfWzmD5rvY6Ue8zhLPAGYsx46ovVAJMgetSpHEGgFREES6d9t9jzhL29JB8",
  "key20": "3TjniKsgp9N6Jce5a7ohW3Gn49TmBffs84SdTu7L452BXuw19ekawksxmUFspheNcDJXeJrRGudaEqc9psCNL3bZ",
  "key21": "5cSaVgDKd1vcAuWnpW4DRtM5eseW8iFND8JwZeXPJqbJyTDmvCnGPUxLkkBuSgCkpFVf8RTTfmvMRSQwmaDrgEXh",
  "key22": "AipQS5WhMmDdV3t8LwxnumPFxH1B7zrmnFCQnTG2VKm77s36ANwSmAQbpwBLMG2gr5YsyzruapyykXannQLp1hD",
  "key23": "5GMnpNEba36HJFPyUxnaUtRHfKip2pthnssWAjjvmhQQJnqNjoGSomAnEKxMDbd9RsK1eGntAnXNKnoR6JGu5zFX",
  "key24": "5YexEeUh12Kz4X3P8XYcTFBzHB3YeMboFoeZPKZCL6RwmcLUxCWBXQNsVG6hhKD8tg63nV2V7Pq43R7i869kH7nR",
  "key25": "2rjh2QGdJo4RyAkMXmDdvNf6Nb6SBKcEqCgprr2vAZSeNbDwxixe8uXgyvu8WM2QQFddNPPqYobePgrhpd7bZPzB",
  "key26": "2emVpPam5YAyKzpTNjFUtZeo9HmTDUVG4J58ZeRowM7W1LHiP7Lxnu13JHxu13J26rfToRbc8kHobpRn1Du6yyJp",
  "key27": "66Y6U6uCUWuZN4bSexne3PTCdW4FvU4Zp9ugwxJuL39rfPVQbfY3MTjWkqRHMTFGV2EhVRcUDJQ5QjCeM8Td82SH",
  "key28": "2VN78jSdxqjtqFpNQW4Nf7g1mbM3cAtNut3NzhnswTSJoygPdTb9QKX3hzcUssZm6jQtcmc7FBnRQxzgHx4zyoZz",
  "key29": "5QAqPDkVYefzW7idU9nMJYX6DAA8oF3HW13ATJfSohiGvhr338EGcCW9fpZfa2GpxzqgR7jaAzZ7KJTDtoQhBnH6",
  "key30": "2GXdgnMsAcnKtPstyJ8wAbQza4FSqksWbHVh7xBUmWFAvP99nTPEt8HzT19rPvR5MS3xazJsFzKdU7iJ4S4bUZrU",
  "key31": "3KfjTZM7g2xUHpze7XJfKbr7s2jjTFtzag7sUMthL8uAQ1F5tQcDAVyWMuLcW737vw2wf8tRH8dEgb38Goy5pwSX",
  "key32": "2UitpYtcBvBBe5Gdnq5fQ92NgFugNFr8ZXzJ7Rum2UNEMTfaNDuxWm11fKRT5zY4ednXaoiMQh21Uo34zmixCaTA",
  "key33": "6o4QLLu4YoiWmmacw36c3b9TCi27DGTymcvoHscMgPFCmQjYXzMP3mkvp6BfiUUFfnCxdM4WfhnLEnhxMKPix3j",
  "key34": "2kRaukGLebPKRVffLL59UbUqjpLFVN7RqWyWTBf1UN9AxW6QbQ9dUi1TCrArsL5sMG7mL8NVmHKri8jk7sRGHZx2"
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
