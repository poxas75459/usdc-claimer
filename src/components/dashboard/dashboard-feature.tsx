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
    "3RcuqTyeyPqP79r2tWyjA4m6JkwR7PLxL4Po9qaH5nbwNL8fHALi86YbqSbsA43BWoRBwJG6EmqygP6rMAj9rUqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjE3dKBee7N6usboW8Xb7xbEd2f3VnbT9u3CPTo3jrwJqdDdn8psaMGjJr9iGJoXi1w4Q5iDGrZm8DBWb2Zex3V",
  "key1": "45fv7frMHAnCsmWbCBC57EoKek4P6T6fnw93JsrCQqddSsTqsbSTe7fYQfu3rKwcX1thgoco6CdamiKC8p5fG1AT",
  "key2": "5oTjxroGZwLLMz3rWUDYDVPRu4yEJcZps3WheSbJg6bz51HEdvJK1Cbn5gmANW1uDQxh2t7bbbbLZi5jzHFeS7wk",
  "key3": "2bL2Up9jtWym9RWfByr77jS3ojzjKzSvKQ9KvjEo18XyWceaBX77ZAX6jP3BHpcGMseN7f7eDZEHZ3LmUstN32Fm",
  "key4": "4jtw1xUr4qFJGy5R1u9MwnCjW1hz2XUJqg6WdGue866DDHkC7sbQK9n4ptxJhL8EDqcCdo7mns3oS56pZEvjdrP2",
  "key5": "5FWCx9vz3iz5ibfwuFrD8pSaEffg5rntffrvthEdPu75hWwhkEsUz4MSqmgq9xnkfCmqHq5PEDf6AucxdQr3LFVC",
  "key6": "2FvTV3AZa43JEjufrvMsKK34YgwQWwxfNyK5HSdTvThnAN76HgXhTQBcn7qx9tJx34H2EejSrG4X725tSYXBaYiG",
  "key7": "4obRouUSRRtAkaatkhecwFMcAM6ggrPRkZwgygzHdErK1fLamPbtUpsLEDTYuB4c3mBcaNy3PNUMkXp6vKLVbf1S",
  "key8": "51Tu8yN3CaNcGJUB6abK5ciN5DHGwZGxGRdaAyhsZRrRpDUB2hJzca5w12TatL9m1Lbmzp3YfFc66at3tpGQgMeL",
  "key9": "3heWkCJdjQXJ3xndp4jyGeydgYmhabRbwJTrT2YCQZY7WuarkMzZv4m5LcVUXNBf82vs5ZvcZXqEtip9pkj54uzp",
  "key10": "4LVeYj6iKt46PhSr85qR6hQuwLrhajokP33fAtncbGEXoxCvDsuFaU6q2nMeh3cuEPpvVAo8Ei8tusS9zCqD6N71",
  "key11": "4EY4ndenJBsLVevRdKT2UFiiJc6ZC99hDzmnu5vKWPmtZtU3hqycuJ8HxtiKE3ufqeBWbqJhXh7TKKkjjUEt7Kud",
  "key12": "4sbsPtq7gEwbagbvo9HgcQNgdMdPoqhhSGieaMk3degrToHhJ1ZZbzARdaB6wMXgWeGgmAYFcQsfAVFYsoj7uKtf",
  "key13": "3ExzSy1kZVzvEWvJXHEqNtPWsxPsBmL9BkFqHrQcfgpoDo9AZi2q7MFqUEQidowtfFjxd2Mhc9J1fKV6b8TEEQfu",
  "key14": "48FdsWThc2PhpCyxEeg3qeBWPp5ynoKvkoAk7s6jDuoHnikueRbXh3pPLkHZJc9E9yJVYvwa4eirXEmFChRY2rbb",
  "key15": "5aHjhADXmM7dALjzVgMCN9N6Tsiq29meRKz8bapxNsY9ZwDAmAkGCzGAgYQEdYXtrT8WP2qina6Mjej4d6z8FMco",
  "key16": "3Z7ifsb4NZ9NtEXS9SpmzjG6VNvJFva246HA4CfRUZGGrMMPvvDcuuo3seG6fUPKMpyVdbeywQyxeE4yCwiLkBHf",
  "key17": "2M6dYmdVmfyovHbom1AQ75DA2xNRZHRFF8qTMe5hYijtZyvk3S7fWd1Ciciw1qHASFUFb6oNLXxzdJPQe9YJ5UTz",
  "key18": "2Kgh6a7AEByNpAtbuwqehakRSRygGB9heLuguidK1ZHatapnK4D55dJS9ECauZQ5t9wzvaT8AtxaFpdKE1GcrP9W",
  "key19": "ZMfJVtyRZKMert8uhetAv6mZKSvofPRe9zJjHRWZcBQt51UmKurSm2yTj7FyBGiy5FWmazRdHUwWfdJdbW3EZt2",
  "key20": "TBF4U9zpYDcpxVKmumKx8MueySFH9ty1yHZt5qJhHMsyrYKx8S77Y1c3fwjGrYGDepEcfBzfdEVvHpu1GiA43Z5",
  "key21": "5Dd2aoZiZURpAHcM2L4XdgkfxpeQZsFWzofM1gdBT1xfBXQYV5fZwXLMd3hkGBh9YcBsrYm4tamqpcFDyFHhxnuF",
  "key22": "2eMdAsfjDXXLGBiTG7pstJzEKcercrp2RfttykBtYWGWogyntwFUWU8HXWiWLA18VnSnXXi4Ss8NgTyEJKX83TMp",
  "key23": "51yggw43jTEW4ZrmeuCprUP1DDW4UuHcocYt1dEWpvMXXfRcnsJNxZDfJfrdbRoiTGyxruaVsWEKARofzStcSWK6",
  "key24": "tCEXLZhvsvMd94Ry52F2PFU68fhHAVquzNEUd62bmZsmxU7eASw62ug2yGEUY33jzCpVBtoDLmQpqdxEYwd9VkF",
  "key25": "4m4AgG5UFvi2A27FSBEqQnLmbBjvMwDxZVjWWiCaXprtMaCB7c69YQfsDy5GaD16gwfD6eqtAnAxjiNksUeetgsU",
  "key26": "3HfAdzcEXx2iZVh2uWAjh492WzS3wU2T2dp7FJN59MFAAFHPA9dCBGhtzch6p4tg19FDAvvcTAL1yMvUHPopdAat",
  "key27": "3W4MmRM3wjoUdKFRj2exoHNha3GHYHiTDYeipt6QuKy96NtmM2rLxiQjWBmyWQfYn45dxHqyLubiqJV2jUtM2Tm5",
  "key28": "4yr2HLGd62zsRseDNWmm2PFZ2HjWoj1CvnMqXXQnJhM89SLxFZdTtwQq6W3PEx4CkXhMfgLNHJCW9sMCjbbRTcxy",
  "key29": "28m7SumTvJ5F9JKyeSTenr1oYQdfBdAHeJbgQ6dwWSzcYh4uYWFNV5yrkUEBM41f7LRpyBCjk15MiabkgnjWV4w7"
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
