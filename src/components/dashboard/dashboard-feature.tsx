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
    "5jJGyq9sYxE5U8iUXLUDasc1oyMveS87J7nWYuDrLC7NuURa92QMkxmsWLtF2opy4yWy9aCBHncQx1NuntWVmWCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ocrwrTSMCTu4LMDouLMPd1rbBGZfjpouKmtS8M7mYLzxXJjvSYtXha4SPn48SwJnSct5SHwsAMZpeBJHoFVvrj",
  "key1": "UubK1ysbpetv5J55fCG9LPqaGKBXh1FdgEzrNBZDk7hEZfvqD6pPXCE1nNFNq4eLaqAAAtDYd3yfnrquUEg1N78",
  "key2": "64UJHt4fR96UMccHr6aPRyfAjKz5kAXRqRY64dzvSrbdPCfaVq2taWbw1b6y9EncwKTTEtU975r4MW5AAeoe7rhP",
  "key3": "29gQ22uPxyhuZUjUYD7pgp7sXSBtBqoBbs6jpzjz4NmWfSwuu5vLHF5yJPMGByo8oVt7NciawVWTMqfQgjsd7qoR",
  "key4": "3SKW5nSs3eC8gvUm3ZJZiXv1cxAYaHjW7dtdrS5b9BQRXGGmAEMHU771wstKZmBX1k37LzYsX6nqLTWHPdkED68x",
  "key5": "4RMv9cKPpZwpyPmmcQv38QwfbYSQmBL6rLg6QqoSryMes1oimSPtok7vhT2eh7MKQKmJbuwerK73YEdRCfeQT1YG",
  "key6": "5qZ4ZruKwNF8uGFBYeFoScmJL3553o2TTAekWGUqsRw5H3SmDXRXqyQVaAkkux7sZYr1gZ1s58HWw1CxSSDqtRnW",
  "key7": "wUdpXSoaYkSR4BtRERdCVJxWjT8PYrYBAwvhBuGQMySSJocheLgxz4EhPMZQ1U1acvXru7ayg6tMkDz7s54zH3b",
  "key8": "2KSDowf92WPGZ4FNkBFssYvseujBNnJQJxackxms3GHe2xLoiuQxaR2EKZLuwLjW2PjKi23iMpeufrSy5XiitgF7",
  "key9": "3UsMJqqiGWVwZsnDgwUXyx2dq1h9fU718HQ8VYZCxE89T4EzZaMf4hTKK5PjrtUUpa3xvAAgUpWjXV3aeCzsM2M6",
  "key10": "3bbe5SfUGN6qcS2RYSXi7RrPb7oDgi9VV1N4jjSkDAqXT4Y6jKGMD9L1aHAhNKtTs964vtTMzsKjChnWNhSKDkeT",
  "key11": "3WEgLySKYybMWPbQmXWGZtR3ii8ZZKT8ML5nTrGfCL7JE1UvgnKKeFzvvVPYDitrTvKDGzGrZqHxKpZxDHLt3eeU",
  "key12": "614Y8LXYRCyGBHSwe1LGwRE83CVq8gD2hoqTaeSKXySz4mLAEPfuxgvvVPuZPucf1i3opduZDDEuUApYkyV2Mx97",
  "key13": "9GFChiCuDfpj4CbTuCiKh19GQptBbxznnNoVV3etHakV7CUo4th7vvAyZ5FyTBPhLAaoF2SNK9XayyvNgyGjdsg",
  "key14": "4ibNmfxNRiyBSTAfxmWoumPHCFtjDTUyUv38Juun73gUcfwBXVMgAPd4XoLTvLNTQhZS6bhv4CZ34F5j689jRVEz",
  "key15": "4m78U5mLHqeXqxcQJNz5Ad7hNNBmJdvoums83DEKCFmLy8g6nFKyPew62Kuq1oJVnd2tWrPr6e4cUw4C1pBjEH7N",
  "key16": "4N3pqGsaUvcvGyDkASeWKsLEftqS97FmruntzKzBE6sJLckfvbPkgHfMYkvYhA6XUApUex9wjUyQY3swgFx7TmmG",
  "key17": "K5Me4LDrispDhiHXsXrenoiYg6MNuZ4gVnRUhf2LR9r6yfdPaWyoMGpn9XjvtdckYKnWLwpNKR6tea2NgBKVEkE",
  "key18": "65tQQYvyyZdnZ3pp51MbXVaupEnzJBjwTNsDzpEDTo3GXpWSpK5phm8b6D1cTHaqhzhCrirjFCDVH9q9mvxXMcSJ",
  "key19": "bF1rx2k4ojYE337X9Md7nov8uuHyqXefee3ZkMG9iqgrwQ9xGFZYgDRAWiR8KFd38sWq7aPFQhr2vkRJYGS1A3q",
  "key20": "3eA5eLDBW6EUNUpWT9PLn5t4osuLqoonASsnnoAHwPnKsh86AnYGBz2tvbWNWNwysMPUg68U8FqDptfmqptQwaLT",
  "key21": "kA9G6Ym6nKepgyPQPwuqceAk1u3EeBUSpq7xHLHFszyHwndocCWjRHvWXpwc6osKzVXYCSZ2iQtMPvdxcpWiHMw",
  "key22": "4YhV5QuzUorKNpXontT53jV2zPhRZeUQ1Qzadh5frjiiMH2eJAdvadAQ5HxD8QvQEz3fiCDL54gUsiKWA8FS9u1F",
  "key23": "3qzG3aQLjGVX8DGib8LpY9fvz5mffoqgX2YJTPGjtwHwLfT39CVfUjkzKCphLz2NQ6e8dKaKzBqz3K9qL2C1Denj",
  "key24": "2TEVSwio84eGdQLX4MSoqdPvudTQwY9HAsgNKddkQ8Hpkvqy4qkdhGsbcjQZvWAgzbdSni6Agi2cHY9869By5f3H",
  "key25": "4CWi3FESreX8sRaHNADAaLJqdib1WnGv6qdQvQXzxjTjbiGTwCE5yULjvvmvri7r2gaaqCipmuf4wEF9X74Ah26n",
  "key26": "4idim373Hk1iak3ruJZ4hZjAW19zPoMa2JRb3HBsMQiPyExzRiF3ZFGhrHUSvApyKh9Z7NEyuAyq8wokWANKb19h",
  "key27": "4XkkJ5YRzhPSgCE4tSFYkgjngnnVD3Sanz4J3mzXCWgsWDNmgvgKNRjHX3E1QiJmZEoVSvxY8Xa7NED1hSGnCvEo",
  "key28": "4gjpAA3LPKfujMii4FDEf19EDhemDPBtwP6Pne7V3aj1hJDonuZqX6QGAnde5MPSB1RxqijSbNiCDKCT2727aTrc",
  "key29": "27uqKxdWovoT2zyg8xjqvbckuNN74EAgQShhF3p8wgZjNrhscXsofkZ7QdjBhvjLJhnqPL4SdBCy6miooZ3a83Qq",
  "key30": "4X3t5QvRnpKX5yij6843vsv9mxo7fSHBCsPvhXmgHh4ujZs6Sor4sv7X63xWDc3PjwtDUJoRxHf7yyJ7PzX5i1TP",
  "key31": "3Y3fa46jDpT9CqvRDYDVk3Uxkyj2ds5MeCbxzJ9aEFZDF5AZQWGbAvWhMX5Par8xGqWaJkfpXQ1k8kGhiu1UKQ4r",
  "key32": "nsCXZrzevscKQJDDHeooAoHcCX4vWJniRr1PwkV2RstTLy1iUQkwYdjydfzoiHn38FWcGZzqY2oN2h3CLGtfQvb",
  "key33": "hbNiJQfxdwagEfiqqqHLz44Y3WXopDKVCpEkB5ggjzrZXVdB9QdKNXwpCZAxXvbNbErN3kvQrYcgPUnREnBTB7y",
  "key34": "649bXXPcG5xyovB1kY5Fnbx6cibcGLryrRxv54EMLQRZqDeYtgjbhRcYVgYUohwwbbF1C4ZRp9cK5aHeJ8nnvf1",
  "key35": "4f6W5xUDZezAu9RL4bqAJEsFeMbEc63X7oeRxB5nVUYBsNGprw2BHHdzpcYcbFofR2HQYnpf3ctqm2uFsK9p98nA",
  "key36": "2UV9NrYZiB3C74Z9E5kAA2TqbAF9USJRo6vWnmGmZ53m5itE9hPpH3ubpNjVQct8jC1JF1HquYRVkHLTUSAEpHcB"
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
