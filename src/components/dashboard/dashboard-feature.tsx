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
    "27F19tvYRtE9b4ddqTJMeZjnouBgRN52MHCH5wuejo7uHXjYf9YSKGQfV3LiVNwBjXJZZrix5SJ8VHALe5cKteD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVzsECvPhXBdYtJsycB24rwuGT5kp5rCdi7N73W5Whms5k55LK94zUyGP4pAmDJtthJDcPrPw3W7DX4EL3JVV7e",
  "key1": "4Uq6uyNpdmUar1thDMppnMXGMatbqPRVC1hrQvdZzbYzU6auAHMZ6c7g8ezpaxBBWbrLW1RVMiY9DkuHujbQiFoY",
  "key2": "cqgP1bDYVbiUqkB5SW58ggPDSVeP5U2h92ebWTRXgvunWbQJPXdK1eb1D131AnNuoHpvHQEQmvFCbDQUAkZGW3u",
  "key3": "5bYn4FD54V3qu3GLb1FYsq6hrxgxJLM5ZBHo3sP6tKkKAdCzFbJvZ4nWh3K3FN6GLh4uY6LPj7wjdd3mjjZWWR76",
  "key4": "4D1fjCYqF47Yrp1TP33GYAgsKnSdDkSMFPWLiGuRtKgfBXeewGc99dSnF7nvkBGCuarTgQqqVNB6pDMbzQdNF8it",
  "key5": "5usWWpRfFXsuyboT9BwGjrLkxAG32pbHdzfzw393KSH9C6QvuFFqpGxEX1AETEMTVCUgJ9jECCdUmeJWE9DUS9t9",
  "key6": "5UQjXhsJ7cJWuDh87Ztk6shSrESAXU83SvhvommwNFMPyNH2psTKApiaui5WucRVVg9XMYioVL8HFKw4Yz4A4pKo",
  "key7": "2kZDQQa1LKb2Em8ALEtZGtgUi5fd2YgmeJVTiFWdMYbywT65tBnD9ZXp2XPjuv1g1kYaypbAQQeUTCrsDVYjU4bU",
  "key8": "21av1qgVhpCJLFJWHntr4Trnv3QbpGY5S6pWkRErBTMW14vPgrZGdnKiRKZfqGMsKrtzVbWASfLLEzAA6UXjcdQz",
  "key9": "4iN7vzzNaQnxQsJoHWgaeDPdtP62YuG4yFUYw5LBNMqzcj8p8WwbCzXiWkGgn6ap3e3QUu4TbDgYfC9EhaEvzhQm",
  "key10": "3MbUopApGBEJopXAvSBJQR8Tvm9jRvvvALbHGNwWH7H1rWrxNz2hz6kYBeaCHeAukewnXdydjx55i2KqM7iaXBG7",
  "key11": "59MXFwqCdLY5h3MgLpJfUZsAf2WxRFyntdmZZM3D6niNdCA6pb8XNTZYjisohqvwxoFoow1EPYTDQ9nMEBRSbbDW",
  "key12": "3rk4cqhETQ6XTJzDQPq5j2N7pekKcqc5BFdJLqM6uCnmAxTZj9nMEA6o1DW9eMZhAKKQPj2DzaCQfH6x1bEFrV8J",
  "key13": "46j38WG8u8eNPdGgJNs8WBqap7B77utmoDPCZJ8aAGWiwR9JArZ9b8TESSUfvAzwJKDwBSyQ1iVh3cwgtVD3u618",
  "key14": "36LwMoD9kSVA8i4JMsQfotFGRRLPs4ncvwdTrWgRDe43X2wUB5ZRYCY7PCK2TeKXk93yU3kAL2rkE74YcFtaBEBe",
  "key15": "4EAWvxZmazubxQNyuM5GRVXezga9w7dx3gwpm1uYYGo9Etv54A1cnjjXFTdcZDNJJF5iPSZFKr7PwJ9diM8UL8rB",
  "key16": "sqbRUmCVy6kJF5fVX9tq4EGveaBZ2RNiFUgr2iDPqUu8dDbShsSgqAV3vsw7fWLN97Mq1RTMWPMjWpiQLPAU8uQ",
  "key17": "5J937Tt6ogoRN85bTCrnvuN7kA3S7pCj4cLPihrrF81Tz87XFSCtrc7ctkGCb1AcryQn1A1rAXLukNTQmarLx84T",
  "key18": "UZe37HvCHm4rLjZsswsS7qyzEjNFiL7y76XF8qPz2vj1wg53nh7CkqL7gXZw176ebnQQd77ghhzBbfFwShnGi3J",
  "key19": "47QonTVPcnAEAkLsMdFvgs9hNgkG7XynnUSA5znQcwZPZPZXXCh3e8mfsDFSN4bc31i1JCqE2iakDCTFwGxzHJNW",
  "key20": "2mdo6jLKRN19M7vuSRs3XQkcR5ZsSd35zfexuLpaiBGHxi2SS2PxD3Zb5njiyBaEM4ohcjv9UtoLZx4Qh9veb5wu",
  "key21": "wuSedFsttrEbGUD6UzbxdTVCcMqULmN1zoGaPKJQQpC2at1R9BRDGoRcra5EYneQ76N3V1bEqALRb96XTATepHL",
  "key22": "2wJw1BbRnZ7oUs3weDt44gUHc3BAWKgCgEttXCv8Y8kabpQJFPcwJrY5K5rJsJfZk6ALeEsj81E4Xk5DTRXiw85F",
  "key23": "5rUVg3VoRY4Aw1hrk1d57eDramjqEuMpVasfv2ZdqR346EQEps6c3tSQEnHFiLZ6ahmrZWXvVPKU6FPfV7nxLzJJ",
  "key24": "TpgEd4idJBANNJaJc6BqxeqpGnZTy7RvakViLcsgvZPFfbXP2bANuM21ci8EQUqxp1uKB3ZgLKLKTaNiFqybUyd",
  "key25": "2ccfJPTniKXzbdnEcFrdVLkAZyDzRq5ZpMfoysAvdW9hqQaAAj8mkYzg1X47fqVuWwFgntLc5ANH5Xd7q2cp1KWY",
  "key26": "3Seaa6kYYSM4pLTAvrD1fGFvreMmuRhNc8DrRgwX7ntv6HEKBmTgmZNJcnDkriGh5Nt1uVAR7UYkZCb8XXGvNcvC",
  "key27": "LxyRajoBM6m3VsebL3gRbZLyEKy3PnYMgMY6UVcSy6Q35sHacXBHSfoERB4xvzRXvKn2funq8E8AJbKEUcuEQ6S",
  "key28": "475rHhth2HhrekhfSWGrBbjPKDqGiJMJqkdcs6MR2mexya2uqamnX5zigyzTfCuzxuTpCt1iejLhyWaRhPRnqZkp",
  "key29": "5Uc2VYRRCk16tWBmUZaz3pSFzfjaLH6NNauC2W7PoCWteRYtuYHcmkp6X8NbubTmtSWxsan2SvjyEsBWiMXeTfdz",
  "key30": "4yfsW6qt4u5yWkiy6G7t8u18CWoc4mmTr6xyEounXjBPvrquC2gvyK1NQQ5494WqG7V7Aob9TB5AbVSzNyKY7SEz",
  "key31": "4cjDhPUjJj1inrc9pC2MPtV2Dx4AasHL6sUPf5H2yFhPxrLmzmfirGqxaMKFGcnwqqXTKuwn9ZXPxadUC589JYV1",
  "key32": "3BX2o87rCEqoWeXBpukesTZRYr5cQJrfnMzPZJELwYe8Uf9JKi5SEuGzXdt9cTNwN9VypTEt8UKKLaK4Hzuuydwn",
  "key33": "GQGbBg2wZJtdfMYopWwAwSDMWqRWdWS5qq2mv8oMSEjqj7F9opSxkX97G5tqXTGqb83juG67asWZ2F27HEpQXm8",
  "key34": "5JDBxZV9Wn5KC9kMhZcxgNb1KkPMPZGtGZVXE3YWxsPy86fsqfJa5SXCCL6oZzniR5ngCXQyjDUXKQCvsmibF9Fu",
  "key35": "BErBEG94VqJoAzNqDeNrzN87SCkasSxRSkXz45SNXPBgDd5Lxbp26qSXVXftdh6CzX9o4kDaxqJeHUuhZEWFqfT",
  "key36": "2VmPbwrgmoT2NGQsAA4W448NxN3ZVyw7G144BriGCxWw779Xz6LNWERGyh7VBmmCoPWAJD7AYYiQPvNuGHzozkva"
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
