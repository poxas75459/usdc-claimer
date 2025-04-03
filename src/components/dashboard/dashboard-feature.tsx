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
    "53b7Jvu5ASZNhp7oW65U7F8yhpiaSUQMj2CQxFGAEF4FFvX9Nhm4mqPsJW1fv3iUiPAF95qae2ToWap8T9GeQXXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1tX1hhRs9s5oRj8mcwrwkrT9WYmeVuVDVGL6Qhxx5K8dmjwWCWQyakmW6AqhT8UTryTwTpwNauaDVnS3mBLDnE",
  "key1": "YxhWTXftwXanEpjLNtGyvufzsFFemZ6qKzenDTB9LXMPzLjgdZMgPR6bEMyyNRdoKmJ5XxBkkEp61zx8GSQnnsX",
  "key2": "22mUNtYKYT5M8UbX6GVFiSLAzRNTqWGAvQxC7xha2EgHeJwceLhYWRJ5je6bwh9SXuTMRQAZnVgWUjB3upKV82CU",
  "key3": "5XYpmSQkFviBmHiFVQCs8gKB9vQnSREqj7M7Gsj6TXy4DgJscVyYrVWJ5VpcKXoX7uoEa4W5vM6epwymAFWiji2p",
  "key4": "36EGyZE9k4ER9kSC7emHne2Fi3L82mzm48PVU3NjW4n4yx1eiqWkp7AuKfT3epXAAMdSafR6GAFggTYcA1VcTEGG",
  "key5": "5NXUrVauXvK4aWxqXpmetqVua8MYE8mTn4XDbqbRdUPm17MZTC6vG8QjdLcBu6Q9ZotFvQNGz1Who4xM3RFpcRXZ",
  "key6": "5rqX2DT7sqfHZ6BCnYsJ39muJ4GWcePePMPADzdTqPeQRPiwHyik7qk8H4gk99y3GDFC8scU3tNaCpbYrkBoxNGn",
  "key7": "2PFCjQeJazj5stapY6qrM7SS4VbhjCmwuJ7tHe2W6Tv1KSazia1z1iyN5UNcEgZLkBvi9wo2aKhRB2NqEV7RJPip",
  "key8": "2tfTNvmBzDuQLNGbmnKiAiWzPbxzV6wiWvQqn9xmjdvqcYoQRfwWEKKsv22RmBwAW9meog7wq58Q3akjSSiQowum",
  "key9": "3na2LSVjLYDvekBKmLr1s9FqJsKn5Aj1hkB5BNdymjFxiDvrXJyfxycZ3FGR1fA1M8waqwHRZ45LTNetyxm1DyDD",
  "key10": "4ATTuFD24x89h89pfyMBAVLkMarPixjEtC1bg7BodXb4riAxmAqHuboQEEkV6c7R4WN5otweBsbvRzkvG72RzdWG",
  "key11": "3xGtkhmcVjU2STVDYGj1Fd1Ntkr1DZBKT3aSGsB5qFxGatFrpFX7U6ARR978nzA5bgGwNPBH6tT9zVPEfFXaNgQi",
  "key12": "5X9GojpgiXwuPZs8WHSsYgeMknCtSFxMQWWrQZ2qGvwS6FZnFoyoJEanGrGxUyRcUpjzMApeaYFShjD4SuWL49tF",
  "key13": "3D4bLgfFiqLsyP53vh3dsz5DzAfdbj7tAg5d5to98c1j3ePcg8TT1cGs7kpnuGCcAC4rqvLdjiYscoBEEPxJgibs",
  "key14": "2TUuVxtb34Y525Nb8btVWNtd4DrLMVJdZ7GqYTQZgUeRX6Y6uB4rsQ2UqYgdFJStvfmSNR2nx1g6Qtn9RqvAAq8c",
  "key15": "5qG1nvqFfKa83VbugtGC18tP2DB1FzB1svkPnnGD1gyhaMGM7k3gxktG3TUcjzc3GweZh1y5wrvcb3rGAKPAKkHP",
  "key16": "3Hks3MdnmzXcz5idEJc4vPdNw86RosrZBiNQGzMRXH6oHTJkDMdsQvsCnaqwKeSmqpNFcwuEte36VMuix5wRyiRh",
  "key17": "9oR8ZCZf8hm1uKpSVDqdxxmr4x32iVmKZeMLhrYGpUNakfFoXB8wwsCid7E7v4piwDqEqC5UaD7FCatbyN2HDok",
  "key18": "2hv7bm6VJy8Ys1kzHygLGWRwaHCcDdM1E7xp5XxuHyv7u5akytvE4wRj6ihLSimRaStUWEsxKKXoSsGS32fJa5T4",
  "key19": "5j6DXxnkf5sY9cjTihFXRw4gN6x9hoEUAGdpV6QsTyry5tj32j2y78Jof4NmyUgxBR4ftwkm8ZdfvzXYVxYngMh3",
  "key20": "tar6cLzJhcmySruyhyp4H5JcM7rvsE24HC7BQxgPQYKLSeBadw28qqbNUWhwWP6KfNS8XAjxp5gs9EyCHMPg8Ef",
  "key21": "zgQvnTkPhTMqbnAVCnyFUNpmTwKGXh2bfGtTWjc8P77MSGutGZvv1arxHKgYa3yoNzinfPfwQz9nHrk8nY4oVXc",
  "key22": "2Wb2zCZDomy9adAn9oPFEUjbsdqLyFQ2ZCwdcoZhquxKmBn1PxT63A5p3z5fgooYrmvffcsV9sGuhLhdFCasBTmL",
  "key23": "2vxQgDtpk4YFCwi9feDGEyhBiHhEJ3m8nnRDRekAr6HU974GBCAUvxBRS8wSRt8nsn5m53WCtf9J748GbcFCVj7q",
  "key24": "3rmaTQjpfoCYyJrKZixFTqS1zhfkn8XhGvC2KYe1riscKmzWBxdshz684E3Xwe93Eh8jhP7gwcFRy5NmrGMVcma3",
  "key25": "2sV89Dv2YQTiaJMk1vBzkhbKuYtxfrqmz86KLGEksMsvdtCho2PKmpibw828ectpsrrYxLfpnaERFyreRCY5zGfg",
  "key26": "5Jr9zqKoxsMHwBpmvTw5b9xGkokHXn7B5SNdfJ8Y96skkSiMZTjMZ9XNEKUCgKem637VNW4AXHLXkmeLtng2FYxE",
  "key27": "2TB69qWppYjvFFk65a4hj6HuN8obb5VWrCW9pufB9Dzw9UcQhbHihpnHx6t9Ts1885TpdHJ5Havcv7vW6i58DPvY",
  "key28": "3Rd5VJaeevDvcM5s1ZNBW8X3VmowVxgiXDNh5uKK8rx6eNvEGnycgTcpKMV3yzrmW31ukC8dd95ydFp63HVB77aJ",
  "key29": "4VEJLXV3bJ6NpVrx8r49bSRbAUkDRao8GZJUC6MbRVyLU9V9LUuAoAfDu9N5JbqZTgtPuR9xUGYPKhkaRUWygdAS",
  "key30": "65MJ2X1yuxDPctA41mk9EuZGBZhWb8RkGcuEz4gEzSqZmxwDJCwh4X1oWJW3Eb5LZnLEN3kYhNgmyXeUrWXFTMdC",
  "key31": "pDEbDL28xGfbFmaYEVrMTE6eePjyQsGrCakP16pKDCU62mkB2P6Vhe3LpgkajnbgkcRfp1whY4GBBFnn31wSqqj",
  "key32": "tnouFF8NiFRHWDB9f4bqswpjjTdUWXFhBTZuKVKofW153VxXL8YGdLfm1F9PgPVHNA1N19usHdzBGkiyxsBXaRg",
  "key33": "61wBMuPDBkmafVHqG5qKaYCuPoFEEiCdRhWwzLuxD2PSkHSJxsBzNAsvDzDbLpLcPrnvqQU9jDBxzVy2hB4jnYhX",
  "key34": "5tDdRrgRTiqd18oPkNZzfPJf4NXvxnbQC5Vbt64Eaj4E5AL1QGVA8bN3r5Zi16Yc3RKT2XHA6TbFYDdPB6FJhWYD",
  "key35": "5rYp6f4pawN4BGQMSPYN55okKjo44RVjFz3gga8nFQSkZWQVshUftkzrMktHHhptjfygkWEGn1yVhGQqG2pi6EcG",
  "key36": "4cuUdo84onXubQjbJGKn6BuCz5TwLVKhQjjdRdDrBo5zL6gfRsva4s9pjPib9J4ywBuEGfAvxMkU1HScvHrFXffs",
  "key37": "3fFcTUKjPEeMi6Nvav7Fjko7BnYJSJ4dEEzgffjubNZNFDMgqzfL883esgt6VcgumiRjrdYstpv3hCyLuMdFu9f7"
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
