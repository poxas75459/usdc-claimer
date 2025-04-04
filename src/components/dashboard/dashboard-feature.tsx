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
    "7XGWHdEoKtb2RzMZRzG59X8qVDzfae61HibQo6zPUTR7krkU2QESWA79HFCfNa3pism8GvU1mQTyma6HgSB5XE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z5XVcrjBVnaYZt5Zse78L1xZ5BbbsZYryrMi2RA2SodQoBdtjiBkgrMeqVMN2TwGFZ8bB7Hzy2qhRFVkyLxKcz6",
  "key1": "5YEXpdvA5UeKkrks5wf6XBQbK6ZJHyFEc9VHJK7KgnZnkaQrGqYmv24JSVvQp3wdJWXYTCyzobefgYbx8YGSNw4x",
  "key2": "4dsy7owdZxHYqSMi5UcAPnwFdWY4iv6UXC5e7m8Bp2tNXZPfw294tArvFZTNrCvFSvhtYmTmypPXLEab7PfoDXZQ",
  "key3": "2VXNodLE5mEJJT9CY96zSDpCwt3MXyabED6XWCXgH9F9krj916EmsEnS898ZXPXNXb5THvEwtjeQELquWN1R4LfQ",
  "key4": "JEhJdgGhDM5QLQPRSAE9V4H18XnkiAB9NvT2qcyQUSCpGyGsgNBs4zZLAQFvoPxfBkzYxbxqcapkNvqhcQGiAxZ",
  "key5": "jdYZR7x1Aa82F78bEXMY8AuEeFbQa6MtcosMRbqnb1E9c2eL7xMMyqtYsGaCRHCj2omZ9MtKoQVpmQYMJTCk1e7",
  "key6": "2g7kLLB6Ve1DW2K9n9SX5u88JgBEoWMFCGnANGboUAg9ByU6AvDHrG19efix9FwhVw7cU1EPTV46vBJW9V98Kpk7",
  "key7": "2ZTSYRYrtTT6hA1aAKKehjzxZiZwGd4CTZUZotFAAx4NawEizBtLHVmAZqgbdLmJbnCLFEYAsAUdF2vdK3WNjHCZ",
  "key8": "2uwfUx8HKMNLFT5qZzhaFS5ponjj2Fkw8iPhPTag1HCkUx5wtg68UVGJUExSqMWdDvWqsj5UXCSGcaHbFFNix4kv",
  "key9": "5Q8ip7TDsGGooZeMinR7qdjM7GxHcYfuRfyJvgGkVNx2biPD1PBK2zdh25jWvyzJqcW8zqTUHCpU5ZWqJ8tdfDza",
  "key10": "5HyLeCxaevzQyyTEiEM24ddQr41r7CUvtVfwEoT9uibhphY7jb44QnCYLekQCYJMQj4FZmV74opG57d44WmVeQrc",
  "key11": "3n6k8SikH3t1BSef71548s79nSReyQjVG9gjdNNKF78sSeM4jBgkpMdRokKNvVrc8aRmcNtFDqPmBMgr7UtahtEa",
  "key12": "4hsi8bYo8CyWr2ymE5nawqC1LqjNy2nfCLMQf1cW8varrxmtPZH5K5QfYdc1aKqNhsAQMjf7ifDprfDCHhVqt4aK",
  "key13": "Zqqe4SPL1p1NhecojzUxSbE6DtgBH3QVPHsVyfRByJhpC2gZV79uG3mQxFs6Lv7v7E869L4bsZp9NKCrs1k5mic",
  "key14": "4UHLKGjXxiqYLqXw8KaaHBdV8vksHpss65rf994c8caCoDN75h6txPJPGDJMLwrrZZKsQeCiwd2PYpF7n6Y9v65J",
  "key15": "4ey7U761FJuc1kaDi46bKtfsEZKdNSPBaEz95Usb8wDVsiodxqbKMgEnEvvK9EdiQccZYtF6TCPmxfnBvKfvKLCi",
  "key16": "65nzk4bnkCnjpJW9SMJqgVsTrpD43ibSBMpQsrw5cHHQ6aL3ZGajT2PzqcykgPaBcGMH3mspUtxNupcN81yyiyQR",
  "key17": "34Rx853Smd7sZBJg3GXXDq8qdqGdmcaH94sLnNRvQiQTRWTe9cRZcG2Xf8ufYVXp3uqSVLtwZi9gBaiUgLAXMHfp",
  "key18": "xpT7uBnXNb8zpb4fCVf5G5SUuy28tdCrVkfoe37aaWkcxe55ADuQ3cnHrjbbvmEJ7dS6ezpGz2KzcJm37pbBt28",
  "key19": "2kpeVV2PsxPkDAkkT797N8RYhVfAD4N3Q72tGjh4TFc2jPcPP4uXiaHowmQsx6NZJWR6QXKaVHKLv2YuPJ45UTwC",
  "key20": "ceReRppRFwWUk1tdXwP9vmEDnD8ibh8GBB9tYprU89ZZe6DctYdAMxbZJDQin7ywhucqNgdkWKHVu5amciqSndZ",
  "key21": "3Rayu29SG2wKvmf5bEcgRR18CoX6GCkXQabt3s59TbaKfN2FhgMsaq97m2nSGhRzZRLDEoLEd3toiAwQZajLbjDm",
  "key22": "GnuAycyGSSSGUEL8mbFtCezJDzPTBifdqkBBzx8ZkhrHUA4XRkGso7gRtfrxgpKeMXi4hmqcDvRdACC7UpRHc5n",
  "key23": "uNBEGPAbkCYhcZ4hGrD9UAS24XtYfefkELUm33Y3vvq6Twpk91YZRAJeY9knwG7ZKhfgVVUw2LXX6t6VXYp49r8",
  "key24": "2an4PLBo6PomCThuz25FQm7kJM9LUow9m68b4gbSUsrMmpuP99Xeo7oTYGEaZ2ZAqo8EZmkVtpZUyMq4QU1J2xDu",
  "key25": "3HyP9Ud88baZteeZNSQDrikqMpLG9vME9ACWC7VkYhEn4R3zNEfVrCpeVZrF38NbdGPbspyDXdRpFhuxwwHPb5MJ",
  "key26": "3sBnH1XcHQaAzUd9LqoF4avLRBgVQzpXgkyj2TbnQfsr6RvB7tRMQNjE4NZ9an3tTCQkL3m7QdRCnQDsmEkU1mp8",
  "key27": "46Wcd2wvkppup97ePamTnGeiw3vngjMb6sgpJUNEvHNuJDc7H5RFPDhu8BSbNxsMeSpghvEKRUCx6Wp7DhHMpmt7",
  "key28": "4zfpMaKmCTWENwpYnWMLXi1R3Gc9XNEaxNWMtBQd2FwyH4MUvXQfigTWx7WJuXxrRVB9XRcrskaZHivJGaHCuPJb",
  "key29": "5ikiskz8JunERUpi16M6HYAv8Rrox9374sm7882VW2Bnpn7WvuX8r7KvDzdcSu9AJUK1evF7dEi8jcyK3ExiDJN1",
  "key30": "3y2dQoXS2Ke1HtQF3EBkfRFVLMMq3KHrBHeMnpnLZnodU2RAbhpnNLEA4rDq4GTwhfmaA8rD36nbhyeFvpg5u8iK",
  "key31": "5UeQ5tF3SBFUqZcji44znceBuc8xmULS7V8Ezxa6BhUVSQQJnh9dC5YmE9AaYFvLa5CFyDdZ5JEzrCDMgGSLT6ao",
  "key32": "kTpvPiFRkEMUGofGzR1PzL5NpPWPLogCpXHpSmjJpmRr5gmBhkesK12BRJ7GP9SiCKQpPpq8kPSLP6QoxWvc2KH",
  "key33": "2mw6H7E4DS3i7kFwpccQoZ1kUKPHeb9WahDjXjPBztwidNhm38mn7v9xNegfAM7NtGU79tnBSo36BMgyGsi1cf7b",
  "key34": "5GErbztKLU2N1sdjqkWScpPkyFp4D3RBBCQzmz2GjmQG7pNdxVmVudun4XWZ1KpvprL4dSt3Ppmp1f8cWSyoXPEd"
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
