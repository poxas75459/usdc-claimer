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
    "QHu9jdfnhVjmfyY6QZ9NH1Es3WW1vtD9diteLkcp1kSD255XrZg15jVHVRFQivpNhVaYgcTisKthynfivciPeFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcdFHc8jJGRje8mN1328GEovn1G7BafrBqdzyD7kpuoVCBEmy7mx75AE4iexi6aPCEsWZt1S6v9RS2Ms9QsV5zP",
  "key1": "2WoBsG1w9KGjUaas8d7Bp1sGqwqngg2Pn6w3DLdscJMv53wmxBrNaD3bHcGNPaDVEKnz4GhgFwHNvf9H2oVAzv6K",
  "key2": "KeKEkBNJgpBkNuJN9ciDBZqM4DHeEMa2u4HPLTD1FJyxtgY1dutjeqYHaLcN4VmFZaR4pkcFHNxcgvu6Dak7vog",
  "key3": "7CjVZMQ5Sj4jCAhhhEedudDeH2vVNMDC2oramfj4iTuiuUzu2advdMX8GkFQQsKzWPPBHWYk1P7okM8EXQjkRkN",
  "key4": "441YC2kKYxAABo9pK8erxLfacZB6KLG1fGPSaqxfxj8o8wfZB5F3MhLPgrLc4JzPmuVDN9Siq9m61wdY4pR1yYRJ",
  "key5": "3hGdLEbCxD74r1PfWngsmSG8ZQXnRt7bMAMM3iS71bMQa1nY6RiTnmeXzX3YLMPcQn5bJUWETJNcpLQBVaQzYL8g",
  "key6": "29NhNrHzF1M2Hf5xH5aiJiMRCRsycfFE2q1mTJPdDbnq72PR9XikHA1bPm72ASgjXy3VMeHyJT4GjeXJu7px4Kxd",
  "key7": "3A121NXfFGqbR3UMmB2SkfYZzwrQaWjzbk3Y8ZSYXEvMk8DMYfAs7m7APz2pEXjcm8AEai3FGZ8whzi249EzBQ79",
  "key8": "F2hdhU3aUxZwmyt4mV93mm3tSHQsJ1igreszEfhpJtW8hXJMhqENbtBQzPgfRDTk8XkQU1qsAsDPaa8GxR6WRZz",
  "key9": "5FoXe9Add6jjZQqQKq3ZfnnXALJGtYkPDMeY7DyoCLrUUBqD7ibYf2LzCaoPLyftLFngToSE4hwEK53G7DbTgb2h",
  "key10": "3evZcVJqpMcqr1CMNhdPRMxdv2NsfLkDUcFLAFoeF92LR3KF7QTz9FiTnziqYGnYnCg7oZ7YZRvcYT3GzeJ6VNbL",
  "key11": "2YYW2AuCwB2Nm98pF3oKUqet5ds2Yv8jJrTcSfsCaFxhuUX6oq3kffKFnUBCPfKmTpsfTzDvg5zfr3wSVBB2gd9y",
  "key12": "34AcTk88STeF2i9umt6UhWVDn1L4Ab4CxHBsXXfGix8UrE4Y1ekXBoXHU6VKfQUXvcmsgefvTCKbTrmNAgBkQERV",
  "key13": "3FSQ8hscLnKpK3qGujExsik6f5nasNFjuSeWDPEuRqKPykXrFFFCLqs7pnjpDf7Sii6azpKskMYp16FaLiPQa5DU",
  "key14": "4CKybXDW8SHmRu4dLgk3HiG2V2H8pSHqYMVjgTq4rqFyTMQNnpNGSxdxB2FVEF88nPy1J45DZHkEvsxLQHHy6Wtz",
  "key15": "3XjA5heyAFJLkuzWPsdgMqCdB6dstURWzBFU3NA46K8EaBV2WDBxpLfnAEcRYytdqFajE3VWNhFwfxK7ER8n2Kww",
  "key16": "1JFuB3xgZBLfkic6SyBFqS2PeH8UkDy5Z3Nvfw8rvX5DhqdFSxyHXnDLMvYZJyuzzcoSYBfyBUZWxMiv2c1QtXB",
  "key17": "4pmdLKVs3UhpDawGTWteWdrvRSivzmEpFQuiRzMjJM4D65n5ubvnBLXgYyP2KsJ9okJvG6fGHG1uzbKcXKHy4AgX",
  "key18": "5iHhYy2DPZ9zbkM6S29c4TTDTYCFYgF3mKsN34K7UtWCNBKnC14gsYEu14Kjb9JToqDtFDibfnCovKVkHjsEtPVh",
  "key19": "5wGAr2P9qxkM5wbRog3LVb82ngtjsa7fUYvG9wrW4aJykjd4vzr85SuJ6Pf1itPM2uzbZLbH7dDcW1ZhpDgN2cay",
  "key20": "2GvEpZrfKCSeutBUDu9srwcsiSbsHBFocqStFn5fC9fSdUfEngPH7bz7kmHvUpbLVzYhTdoD6BdMK5hWMMJaxBWt",
  "key21": "5b1YWY4sBNE4szg3uPFuFaoFfhhnDcpekuTm7tHcFwrFMSwmRBCHrzZBHpuUmmeEbqjZKeLp9hW2tcGGVDepbUKR",
  "key22": "3Fomiu4icMyAgWtWtTkAAb8uGbffRD7mZ4Hg1QZdEwVDbseyZKu784YGmLgJ9KPFzfsJskuK7fZ7Tbkfbd4bj8q6",
  "key23": "2mRNcdFhU9x5TQF5vVDat4w5S65iBuvgvm4ziAs896hSrZLRoZKe5mhkxiQGFsPgMzmmFHvxfgbJdwDJwJHVvuvc",
  "key24": "3squcctwLrJEvm66x5MwqfGhnAVCv142jq2ai1ni4cVzm1cjnZ7Tq6cZqE1q5fSf5R53mEDqDaL9JJu42i1GTHzB",
  "key25": "4og7e8prcmBqRfX45uVPaWu3FCLyShYm2XEH7TEiezC2knMd2CTUpTcmdJuc5Yz74Nh4V7PM9hxqKeUdoyG3Qtya",
  "key26": "4JRc2ARGz87uGkSj6VfT6Q9jbk9hwZjow1x3H48zrcNi17rZGVaa6HHKxdGCvTMBzR8hsBUen3RxD6qkWZpqdXgZ",
  "key27": "4CH4qArYwc3H6yw1JxVZQDJCZAYN1UTn9oPnfVF5XS3DkaKv8kynLv3gyTgu5CR5dioNAPmuDbca7ktKQR6LULKf"
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
