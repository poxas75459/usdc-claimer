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
    "5HekkxghRdfDB1WNmEqRfCyCf8bhhxjkLJFRwZrDDAyQBv7ftQuyfrPtkCM2tLMcn1H1YsFLi5qiEMkRBR5eNpRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKwWE3QRsqikyKoYA3XNt14JRfhutQF7R9WDUxE1KQZzyFrXDVhcAUrx6sRbshTueixJp9wurLB2LT21Em5gtKd",
  "key1": "36otornX9jFbpVtCUtVa46RsSkjX8thY1Zo9zsV7doHP6Eb2zRRmBvS3yRes73r673Q6Rb9ZdGng6yTQek4aCPSu",
  "key2": "2sX24Vr87xvFAKj3zWp5b5YbTgmLk5emactm4jnmobwhFDaaXLBmmJParXGkfy5p6SYX7hZbqQRsamZLGRYQc2gL",
  "key3": "2UWTFZr2MqMzS9XJ9m2RN5AQjkppXv7UWsCxsGoqTLfnEUBL7TYCE1kXQJoTwRVn4ZZntMriLqXsMdzgwiuQNDZ9",
  "key4": "3PHT9a8ywUF9RXgSqkRfwFNyV6Z3Ebbe62jNZA4fmABLzVWf7kt4GSRnGfynT9riYPyTH5GGachaN4NKxjjKhTfV",
  "key5": "2XWoUcwpjbCq24Bx2qQeoU6u7mxArVdMUHVm6dScadE59yg2b5FrVkC3K22nMUCLCvFJHmE4En1vUAgVv6R6cPEP",
  "key6": "44yPfRg46rHtC3rwCbvJENU13V8v5b6XV2jHiapEQudzGdKy3PkzggTTSZbdd43NEW3kjSgjS1UwfjHyKJ67Dnf4",
  "key7": "55yajuwNXxmwF4WMDnNV1B3qQjzB7Eg7V2jtpYuVWLPbQtRc9dTpuwE7LmQvdksx4jSBco8q92yfQLyPaL1Bgs9g",
  "key8": "66mVVM8FT2BsFEtUoHT36NTN1WoHxRUSmNvqd3kubogzBMTexN2jMvAHGn2qpgWBy33Uz4cRnDHLkpzHA3zbt9Rn",
  "key9": "5yFH2qXmhEihn1QnvDm7BcoMqJgd3hnoE5DsatFWNVz5Krq5zSchKkDUaTgVfjJseBfYswgbpTkwaY8oqPP5EdHx",
  "key10": "29aofeNS3VB2z3HrqAdNzDHbJ6sCsXWPehh9DhYm2KCGfFufJdXCRXTNqF8DmgAKH7x21vMcTSXRCq4bGpZb63xb",
  "key11": "5Ka9DHaSnJsmniFBEi3ZgsJFR2ASJURXyL1ZnCXtjxdC8YHNoNWQ9L2Fr2SzNnAzjsB4txhfUBbGMCJ1jKRiy8H1",
  "key12": "XiShjjiXQkjeWNj2EjCrSRgGcnnn23RJLrjx6LjmrHMCQE2ERNhy78NaFfEVas8Y4ztxiwKQUCNDg1TDcsN6LBB",
  "key13": "5cdcjkurfVPMRai54NtWM81m1xSoT7rLvwQ8gA1cSHRgxqTW3Jot4GxQXqzhCYzpddRy9pKHkK2v8AZYHR1fULn4",
  "key14": "2ngRB1KVrajBSajYLbnoGXFXwgopJAi6KpujzMXtCK1XiAVwNUjTVJUKomuBnCSMJUkq2Ny23gvYNNggkvjinFyQ",
  "key15": "MEm3djwK3cQShVJzQubHD8WDroqtBGywDXcwMmGpM4PikooqVsNConugFwW8Gb8572VmZ6JVd9NyR5rQBUAyqzJ",
  "key16": "4PnNZVBiPEBEswSyhPpMDaTN4Rw9PudBrz24hPfTBxgyqpMeQFjDCecZJjGWp15qHeSd8c7i1RdxaeN4gzHbPKCp",
  "key17": "29MsMG8DYQ7ozm3PbRmXQQQYdbPNy7z9GgBeWL6EptFPU95YoGi4FDnErKn74Kghq1zhA4huc2UsLBRNFJjdSuyP",
  "key18": "3KhFQtgAHDkWc7iNq9beVqS6x27GHNACRLy5YDKpTZpTtNkM1s6soazwwpJbwaFsQ4dWjgQevCyMFwDeYanHeLUs",
  "key19": "2aeYA1Jhaiah8SBieS5GSGSPonbi3Etxyjs5CFsAFwLjaUPPqNKHcDyYy9isD8K8U1g1J13zxPXbjLifEovEDQe2",
  "key20": "64nnnxiidhBtyEXqGJPiLifUeqykUmzr8ToqeLZtzTJK8s33258z4XZXH2rQSUNziV7tq11i4cu4KTa7bxJQBkS9",
  "key21": "2vgZMM7ApxBg1GRVG4otSEYFv1hz1TogRBVxY5N1YHHHYTGyEVhdtKC2RHSKWsZN35BTSYHGfiTS3iiTpnrM7kUJ",
  "key22": "4W1JG8yosijDtj9HYqYGT4oPgf1NJ6iLVkkjVFj9rBAsuJxaSpcoa3FaCzHpXh2a6fCvR67f3hq3sWQttzEpp8QJ",
  "key23": "4cv2a7GYq7ZstwKkCzK74PVyqihVCtNKk8t2yUKbDaaWL2jumkSG4zgjwUnRFKLVQRzkeZaXh5eVcUUPj8ZQPaqM",
  "key24": "29dLgLcYsMQHh6kXzyoSt7Cx8rajTyTGzLz9FrcZefboksZX8kMzqbB9z8y3Z7PX6sWR1Ki2Q33KZCWi2zqQYMh2",
  "key25": "K3SnaQJMDEBnTEYtznt5yRN9hJC73Yyk7UxCg2NygDazUhJ2goSKnwj9xYiV5M3gCkxDMWULs6WDXYNhUr6KAYA",
  "key26": "4m984ykzc1zSzqtuydpbMb692ems6KHSnLEsdjvEamkFDwQs9nwCoMsCxtf8xuyxWZ5jkim8yd1dZWA4hJKg2J5t",
  "key27": "4ioXuxtrC3WhByt89RSbW99LKu7LiKX3sQgVyzPbc4mXTNLAUfMpfiDsed7MJr5tKRMxM9ChSR2h5QkiJnRKVoD9",
  "key28": "bYeiNMRfdZCeZ3HptWPKy1mtGrLwemzYKUzN3DuRnSXXBYjfbZya2frDtq9bh7z2SuudMiKrt25rygyy463qo3W",
  "key29": "5X5DNdNhNMNbibtPaK6VQMiAmhy13H8F9FvJUTupkZGEgNHUfib1MGX7W8RMrttyUMiU2uhr7SmQXbcQQ7T1mEtD",
  "key30": "4iA8ykWeLcsi5MyRUdcZtPDfWwMwFwpeb6Jct1FmpwJgc3bGRNPrwT2cRCutXu1s3BtGVP83zLCSDCFCcpTDhWPy",
  "key31": "2ssqC5a4F3bdT8oJ2nnaoVXb89STX3QDkx3oTswDxxRodyXUCWasKJVcL6VSSLVAKKuxTLgso18HGJRNaazGt67x",
  "key32": "2RTdC1Y6VRdphd8UZUXBbx797PbNsSxi8j9CLpMm18iQRK3TtJN3mx3hAWxsoE11waeLWRPhTfpX6xsXRB5dWSzi",
  "key33": "4W9huXFYoaUpteAvawKZGSpE9GyxLD9Uv7oCqrvsAG8zRHVWccaW4ZvkXBJAM1SUSYvfKcS6BKgDtb81EakE9JEz",
  "key34": "5BTjNXWbpH23i8T9xUxDsjw9ebFfcQoqxDf381nW6Y4THLnpCEPgYqSabbb5LJfkeMqmAy5tHPytHvfB34tPrr6T",
  "key35": "4Tm8qdrR5ZUenF3AY7oVApQqNe3wxbAd8etatx2vME8KKJMdNR1EPo7K9gXQ2h9WBeiqS8XUxndgAbkAVXb4qUUU",
  "key36": "549zDPngfNz3DQJYdQLVnmTdSQSEMVy5A79xvGdxFs4mJ6xe9NcjF7PFF7WGgViqapcJ62vhDmRwYdq87uLM11JN",
  "key37": "595fyfcGFxDQrThxerkD1JTRRfau5Zk1XH2DrXApqeoREkzEQhrWPCM97zPv6TsQby9PvPKLVV1oPbsNXzWptBD6",
  "key38": "27EgqbJmg5CYY18umyev4UuQvNFkdkxR54XdsRNLoWodyXCUBd66tz17chVAucuFrpdXCUXATXXaHkpzQSQjpCvX",
  "key39": "2At5fdF6oHWrNYyC1xQuoushdKCKwUHeGeiJxv4py78RWkjBGdmNCkTtuwrVHeB6RL4WyfFK8UVuaaEtmQJhkxdQ",
  "key40": "5e3o9CQrryQonCR69J5Pz6TizPYReksrBRancAp1Dj8FHUstM6KpuQFmpdSHT2UpfEkjGVoSUSet5rV9pdGbxjP5",
  "key41": "425c7GRfifDz1dLKnTxPwDMXchiH3rzdENQey7P2v52giWbRYBS4GgZSUXjLo2JpBN6JoWWtotJ8EhWgHcuSBHnR"
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
