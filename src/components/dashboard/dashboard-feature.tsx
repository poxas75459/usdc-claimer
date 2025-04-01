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
    "5KUHoMqWYutLLWyqgvdMSzSbTtN3WyGh6Qd19sua9WdXwAY9sy7gEeEJ83N29FS1qTAqckMC7zPN3Bjw1oqvYXGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMpuAdEt79BfYWiESQCLtSem5n9YU5vZCB5CDeVNvnrDXsRoRHUgzCHbj97JSHykzE9pfehDoQhRx92LtcGff85",
  "key1": "5oxeS6ZAYVokvfbfmoKNEqw3JdPbe4QX1dCShUdv6znuMMX51Q4dS5VVRsHcLY7XvBC9RCxSGbyJ56MmNVoar9je",
  "key2": "5sQD5Wp4qv5fJ8GSnQ3HUN2goYojX8dJWKEyfjmyhL12qMtkiiqZu5xG1tiGTY2jgWCf4UeQK6sgz5dgE15rGFU2",
  "key3": "27933VHoS8gAuGeVkwCekWFNzM3NedtLVMxbiDwukkgRz8cLJWaQJQpGLnJguPTiWfoUYbMpnvP51kNvvZ588fTB",
  "key4": "5uYdrkwLdKkNrJN9MfLYhzbLH5xj9vG1T7BT6si3A5ZGYmFyhGtUmBcNfmDQczpT1mJJStKFmN863xBUsCiMNKr4",
  "key5": "2bdBqy41bKSFvAJPYm4nT6gbCrBpBQTeSWzo345bdW4HfQyDSJ3HWCQudA4wGzMQy5Kv2cr1YSi5zN1o6Dc59JxE",
  "key6": "2kwENXdGa2FZPkBcZGqftLxG9jneQJoHTvKo1ZM6CQWy6JkNC9L8psuir319daZvsdf5abeYi4rXHZq1AQrWiSsx",
  "key7": "ePnR3ng2TmPrW95htvmxXvbyXL4ik6c7zd91UPo9ty25mSyj8tHWqnecsPigVTgM1wjwurYJkAoNHQ9TTPuR9ba",
  "key8": "26ww97EKDG9Wnnu3JXhEY9Lznt64m2tqjGY6B4ERaxGcH7qLREVsFAiez4VA9seYVsNKiqHKQQcZzmSrxzC47NKB",
  "key9": "5WDE4kQxeiGboAqtcso1SrrtgaEHh4YU2NTt7o63oDxw8E6gd1hTFdDMEmAAe6jAD4oHh9Etb4qiawMrpvKaPXCe",
  "key10": "4rFF5VbZSrwg275dTsB2b2AjDBEePt6ivi5FduPJaFDXuPnoctkHTRwfT8Le1o9ocd4C6EieqLXfnoEeCHkgN2Px",
  "key11": "5osvVPcVMJguDoRbrJ1Dre4crFfb4PnrXgkMKdm39XZKRiin3n3ovfibFyqyJaeiTSujUS4WJTsDMEv19EBXkTfo",
  "key12": "43Zw241f5sDbFqMCZsMm8GNqQsG8sXy4hppczP1pfWzHwNHSddLnXQi7J5G7puZiW9tMTVkrntEoiZwTwHkjxUS5",
  "key13": "35ff5XKP9BjRVV8NPoyGbDgFw3P52YbvemuJrfjuQxa5x782sw4SrAqGDKNQGaMzDpdCd5j6htoWU3KZKa4oCFGa",
  "key14": "i2i2L7VaDiHhnFPqXY3oXZtKxRJEvGY2SeNABEexHGdP3puXJvvmwsQEVUQuEvBEHN1EByiVyZm3bpDmVhkjCC6",
  "key15": "Li3hggYmKdvJBb4nWbPFc8D4Y34SopzVJJ1fmGtsK5qzjZMc623YVzHjgUPJtRVUdiyhdTxokou1XGF6tFDfATb",
  "key16": "3p9a6Tmv4wZoLVChjEyeDBu8GG2N8i1PDz2edxzeSnsYou3m9ybBhCNX8T13b2Nbpwg1HALBCJXXK6gx1hqx5u4j",
  "key17": "3vghYW9Si44tYUrHRBVtQZDYrzoGTLn1vA3kUkjGTsx8q45oQYgXnxhv3o1KGUUyXityAJ7gdTNpyvUpNF2zkRA6",
  "key18": "5VLiYmR9poqJc3jAg98oBjV5TtCBfQaCNmQNMNYyrSSgm56oX9qWGWd2FJSRoC7hMnfQ9LeuFU1HDMAvU5zJ27U",
  "key19": "4kXVVQdm2BL4EdZ2gb5fSMktKMBcHnsBRhbbFiwSZit6YpNpAxeNCBQZFq1ZfivimWSxUT6aFn5c1mEVp9GHA5ui",
  "key20": "3zdKfJcXbwEX8iqZoo2mNCGjpG6FhmPuAxUw7K6YW45fs7REZxph76L97WuuT3MfhUbdGW2CP2Rfyyf8x8TaMCGF",
  "key21": "5NMFTUuijAhQyAqc2252bT64hi4BGZKXuFrkhQrNuMMre9ytAVYAkak26nWySCsA4ZkMCJqwQf3ZLkMVFVT31vay",
  "key22": "4DrkmcyqCD9hZDrWNpqXaun9gryYieCmU12LotF5a2HQMKMGHdFBjcbA4Jc5XWWBaFhgfn4ej6TZkq8i2z6tt3V2",
  "key23": "4C5J49aLg4tjeuSGat2XK8qYxecyaYBPGG45HPdudtkjGrnzKdfJKYodyo8KLMBSRTVnA2XkNbUHY4n7ytSgesB9",
  "key24": "5sqBV6r4ftUCmES1xLt7Deqm7GLrK5qsmhuhovDRuezRgRvUqVJ9EEhznrcFon8fp39ht5TP4KEXLTM1ZzC3rYhG",
  "key25": "5Z2QxXWH36tjPF2b8VdRy53QaXGwTsr1qL5CtgFfcVeM8RCAz3ppn2gWU4FQr9qKehfqANptZRMEcEpAE59Uu6qB",
  "key26": "4889jtTGxdXqKZMXYGT6w4reJeqdfFLpxQffULPBHrxMNrqTZbssuRqGyFVBRdkUzKBTPLqFEVmcaT5k1icfrLhg",
  "key27": "3DtiNsPetfPVVwkQtvCqmSdYSxnaSYjxxpUUSsefcEGkH9cfxr2UaYQyRdsZ1QSnEAsuttS8k5NsiyVzKykv8EEh",
  "key28": "5FDqvrx4FQ9WW3b3ACc2r8bTPx95DZB88R7Y2T6Fmaa8tnd1A6CTgjh5b5rwxxvi85mnsLU691S7fWhJp8wzq9qP",
  "key29": "5TJrpGUGPqr2nscybQ1D52gC8Puv9Sh2JUnbj2udLUnZmMPaBHFpGEGYWYMCBgycMhFsWHzpYVpV1vrEzABiP1Wz",
  "key30": "53vPgZkYTfvQrgqsxVwwCYRNgVq1rEzZWDLbqCTRT7WbAs3TJsXU5ENBcHNTao5PDMACNt7d4U4BCUjLtZspkvQq",
  "key31": "5LbMwgWAWS35D6meQuKV7Q5kCH45Feohg7MuEPSdpj54FqaHDJbXENBYefcXHjpcUytKvA8iPQA584gccQuXTip7",
  "key32": "3Pq6LrE838hLimYrEUMgULSSPDibpiHkr4ZFndwW7xDPg6SX3KMTXZi8jexAGj4ofFEqnYbPaLQ9nnVgxyKuRYJ8",
  "key33": "5UJsiawwbV1vJucyTfHoVnH72fXWHFLGHZiuSQj8T1GLntTyBpouZnD8hae8t3A3DDYhhLHhbnQ1qPwCGgoTyz7g",
  "key34": "622heFv5Pv2yjzctUgBy7UR8FT58m9g1s21cpZ2Q3iMoHfhSAB5g9d6fHJBzCvi6ZkzR2R7BKcfbzFtv2GVQJbug",
  "key35": "2x9z4jDQys3rhsnYbxaDrCirAC3WtUw9iyMhGAnjVs6tswR2mdsWhCcvt8bqQd7yEFksqXsoM2PrkMDSA7CTXQzV",
  "key36": "36E88cgCvpcwvDnK47fXoArbk8qUd7WcNV7cpcHG5qYvSuBeSijxP2C4e1oqvgcknZAHAbUBebKkPso2iD84EntD",
  "key37": "29pEBzejpxbzihAiA76acVNp3iAkYG7vPtj2egyUeuQtj8rTSYvexq9qSHLMyKJGL1m3hDfuBxPhUxbmuHaqqnKK",
  "key38": "4THvx2ox5tZsJumtwH5By3f2eqwNcdNyQbGXgLeJGysfPtTGKj4BB1Kq6uDh3CNbRa475czAnr7VBwGUMQ2qdfZD",
  "key39": "bXPeFU7PubwXL7pbbFSpCCXX15p1FMXDSzmPheyyhHKAQnHXMohv28NmVEw5ZeBWofCEghvtvKjAcQEGLfzT2YP",
  "key40": "51f7n1DnMeSnAmo1xgh567zAMQBPFQoQnp6yn7f6y4nNQFdFJTFDRZ2c7jafGFuoXQu3oWfNC2sjnT9j16Y32nbs",
  "key41": "4nyYoX9vf1CiLbwdmt3NeA8sZbMi5dyMn1KEXCfpmVuk9tnJY2ZNqckxEcfvYqcTrpKiSeFH79VzTDB5RCMv77VB",
  "key42": "4QL2QZD8WYxQBJnhGC798Yfg8LUZo2EUM8SnZfNGcY4uVDjGz4YEQC3PhVRhv27mG7rCodcHekQdTgpSx8bUYer",
  "key43": "4pxYW2jjYqaGExwuceeSXFLvByDZY3gKxsWzN9szGTBY9rJLeCM6L4VqDW12VMaMwEZScrtiLwhU6BxYwFkRK7DZ",
  "key44": "3hNpCMibe6Lbior7D52LKWgGvKVnTt6ApcRuZnbwwyai9ma4eUcjp44ehKfUtJbvyMDiS7S1MKwM7q29vFo9SEwB",
  "key45": "4h1LmWveaVinZqUKmoKejJMYrfxTfoHy61k2VNUJt9ag3zs9CXcdXJJ3DKoCWKWX2164j454bkjEQUdiCuPkAtF9"
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
