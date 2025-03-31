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
    "hqjk2tyc17G2o5tBfBP7P5qZU8VLF7ZJfFZFSfcyahZNSGjSphekYG76CoWuCpawRVQrjE7McE6A4SFkFK9xist"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "222NhiftRN2fG3GrVAh5LeVcZpGdPpuVBdtthPJwsnC47zKKdmPURF7JYzcLYifG1hwUUFVouL9fYXbD3Q1g7wBU",
  "key1": "4Mppd6utcHbPjH8Zu6BxqDVtDyhbngwet3dCg4gaM19tiA21cS39mJ92pdT36NRWAuFyhtbT8sXMsjHgf6c16EgD",
  "key2": "51misXuJK2eCetbLCB5Zm9HQz9eJhhapEf8h8QHvJWkZyYMcMgLfZzHidMyF9viz3Be4Lui23UjiFpHDm1YXHv9r",
  "key3": "2WG6jTaBvyReBiTyG156MDyLg3wiGoRzaGA7EHRsueq6SWdqSejZBYHvTfZ1ShrgkJJ7jsvfLjfXuHwaDqq4tjxg",
  "key4": "5FrBVZf8mEk1XT5pd3Dtk1wWEcE63HLEf4NYoc3NZUKJ89si6Aqknb26AtZYf6vHVaKGfkMVsPscBBG2TPBGLwW2",
  "key5": "2T1SC1673xLaJrRvHsVHViHjq39nLXAnB6nXycy2hPz3QuSymj9My72K6tCX2QwFJRsNvMixfY2HMNnnrBLo3cmq",
  "key6": "5rigw4wTcRWZzdPSHLecfaVsmHYFSnWBmvfcqhu3t4d2Jacmuuvnt3JZpcgBsupSQx1Zu8QyXYfxzsQyU7YtNUxP",
  "key7": "vcYnkwuRq565SCbtwaTUNs7Xi1uThYtNSwZHa7QyQvRVte3kpLfYxBzPgQg2qRceJf3o8CMnWStDKBpesT9XKnC",
  "key8": "22RBYgrMH6DnzP9FrNGB7mcxDeZY6ziaZ2f66v5WkjbqW8H9yLPDzu6gi93a2XedXrKo9cuPt29KzGwVdiFLpaPg",
  "key9": "5Kfn3jpQBAMM8xY1MExfhajCh8uVBoapWLPQE813wYp978wpKoSDPwtWwE7MtdCSmqGPn42sbFyRUv2YfCugab68",
  "key10": "2RnYC63nNDzqNCDqoNYuKE5VNLZ7cLi2pvxgpHVzLoWrCWDRG59YsFQB1iUhWXvmxFES8x9dKTEip4CGsMJYZkeo",
  "key11": "eaTztGZ4heNP2faAv3K4N3G2saE2iKVUusmwuTJXHiuWhxopqwSHpYJyoBTbLmsqhGGpFrpPyDEDJpzXrESZjFD",
  "key12": "3yK8JQ2Tb93Vhv4aFzEdL24kAnivqrWbZFRWpPV64NpZ94X5cUQaVAJfpyY8uPqQratmxqW6ixBqaWPnc2V2SDaD",
  "key13": "4A4JE4JE1aXnME8W5ZcBxE4kfENNi341uNGLxBdMMhTL716Yk4xcHa1mVgaf9ovcwRTQJeBFL5FwdSRCNb9qSnBi",
  "key14": "2NSoQwQNSbmb1k7iR3zJQvKQRwnKSQ3d6VvD6MGJF9KKa9FLY7ZgaMnq6282KvqHhvqqiGwJ5Y3eFt8JXhDrSehP",
  "key15": "2u7xeJoGwzTuN5Rywd9ACfsv8swnkw1vEgLXoVcXTn7LZR98pus5h83WUm8XUZUMVXh9zjZjtLAsz8FQapWeBUn2",
  "key16": "2r9GwjT5cpc9U6ahqTRs2G2pVyC2tbu6keByUGFDdUZ3RubtvH9qKLxKH1kvzpWXYCa8FYk72AnuTAfgDFriSM9B",
  "key17": "4arRWgpXYFgztZDKfVVZsZYAQL7JhKnHzWbUAGeT3Wbr94PQqKpKjepqMnMy6UGdBKkXihkYhAjPeJsVRNTHyXc4",
  "key18": "36hYjSs3uB8t4bb1tdTdayhB39ScF4a57uGxJDaJ91cG1SjenCi9U9gXd2gaTwLr3hWHENXfUvNxBbsZrjQrQoDF",
  "key19": "4YookWLxXbSR8NZuLAkZyUfm7s6nD7k7PSgtuodnJCbwEQz6r1pQW4NLPr3yGiBn1YCj4a6nUCVrpRmBFoJZu3n5",
  "key20": "RtdnZuoKwZ7HnCJSCqD2ivaJbwZ4vvYwXGb7DJf21jJ7FPBdj83G8SVxbfVtou9pgdrfhUvDsx7FvHArq1qPfXs",
  "key21": "qBtxSgnwKzYP5ZkC2yu3XWkMLfCZsG4NM93DrTPLHgjgNhmeDP3VCMQatS1f8jFDaDkuEw5JFwHpdiuxEPeVk91",
  "key22": "4dAoftuFyVvGkNSpENgs6UG3vcfrgGGEFbe7Egc27RaCUTQtGqHz8ZTCDBtnzicayxDLrwktcdjcQTrKGsasDk6K",
  "key23": "QKzU32FyT4ynpjRjEdwoXBHnzECBje16A4BkB5Q3pNmyuaDiuNkwBoa634Qw2YcmSyJ6AM8yDzkd6U141VSUKkN",
  "key24": "w4Yq95x4P2pmtCMMnz32K796s5qSUXRAPcDJ4jYMgczMSMQ72nSKs4Rc95irac1gFjiJPDVye4mpfrv9zJ8roLG",
  "key25": "5EfQSqRTNCu2ZxHdsBPQCXJJXXeiG1ZXxLRZbcN1LXdosapJHEGaijFk5qUTrXmcXWHcfBEzpReYUREQfCqShVpv",
  "key26": "3qKfyLatXVt7E6CC1nNfpLzNmZ31xn8f9TgXpZTR3rfmbx2M1DdbpTZ3ku1FewBLg7UkRRL3wdvR755dtYVsexkA",
  "key27": "2N3Aj386nBPox8KyxXD9kG4tMw6VQTckVcssHUScTK9f3GgdsvJsa3PcDDZhX2H7rhFHSGYewqf4D4RsZ7wDtdiz",
  "key28": "54aAvDxWiVSfwVAKzohHmNgyjaANSr8pab2we9nHdMbJtZ8cCeJLefqZ36LUHtfAD77zsAnz3QYfUjFoSwjH4mii",
  "key29": "3tDyvBrCnkRvKQxnnLm2N8MX1SdSNUEUzeH33p35E5NX5FPPZEUPJBK3SXvat1ybV2v9nMTYX9SLTYUDjxJcNYPE",
  "key30": "RNEMjtk2yw7K6rpBWEbUv1vCoWxGSTFTVCPder1Juym2r4Hd5npZRzHNtEwC4GfBnVXbQ37Wv3b6T8JfYoN2Q9f",
  "key31": "3qqbu93VcFZstdeS5gKUvPkJiECWjvsg3sApemQ7fbtuNyzQQsTbtr4usG8cP3R9YHATResu7qYaCeEFhWENbwTS",
  "key32": "4NFMqpGmGkirWbknWiSjc8gdYtvLDDKuz7BEdr5JMzf4ZGPHg41g6RA4R97Xn3WuU7NMG7fe7u44WqyvNw2zeS4K",
  "key33": "4CZ82mfoyomAR9K1KR15vnePfZJ4pJQFJEcQad6kXTtGCiruZSmmor2DDQX9DBwFHGsx4YvgrKjwzLyiMk9YzxQb",
  "key34": "2aEGeTrcuMHEvMymYqMLisMEUBxprHhAyvWhHp5yY8x7UuSDeBJKydwC7BfZEv59YvBFX7JsX7i8iChYmS1Zr1ti",
  "key35": "45XcBC5sjRa6zaDCtkZZUU8rha6UArrPFiEvqVhD4zZx9hooxKtwKQ2x5Sa1whszeisotXtVLoWuZQS68zXQFVmP",
  "key36": "4Z5cNVw3G668jBZmEB9ijYs8j4n6mWwXjJ5m9sfhiDpfu8CkrYBLimYA2SZW1kauardcRyB2Yn7f82asKvFuyqH3"
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
