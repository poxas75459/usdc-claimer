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
    "Ami4QrvaiqqqznZXedSihViAfGAZDVjRo9aV7VxCDUfECXTg6rai6j1g2Ydat1h65Cnmysy6i7vL9PGMQfS2WET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41nWsSLnofwjttLnsn8v75iB5PiaeKQqHRGiJuQRWQCFtkzV6qhRQ7b87wGyD2tCFug2Y1eTXnsVaran3Phr6Led",
  "key1": "ift8mtratQQgiAZHL4bR9ifitz9N39EUPdnS3ostFqNfn8dciRvKRHoj2mkCrC5Fds6VmbGPQYd3eGuP5ypjvr8",
  "key2": "4hfHovjdKsG53tQdr83HnC6RCpgeorAScsHJyPagNQpExkgMUj826HmhE8ftXVRRztrgp84fnqxnZDUVJnJVaLqv",
  "key3": "5FoknNKdpdjQ8TyGhHe5HaRJHVFbCntDZhDtEnny8desPU4QkAS1PSa27n8EzEXcfX1UNA81dBCdBZQJg3eK8dNU",
  "key4": "3SMGNSaDXMTzujQAXkHNgaei7zzSGwNafsi7oLKdyeDEcw4wf5pNBKKenGLRXUBPTNH9fkztyErPsXy9eQHNANyv",
  "key5": "3JhbaRvb5isLvaizidQjRqPU2TiNG47DKPQQ9p9w5gLifzUU9yfP5PMwcMjWvoCgCeHvJftwBiJapenzZnXsmHsv",
  "key6": "2dWTGQpDR1k6JdLjnHGFqt5eksBKAEbFAKtzVNGZwe5JCdFCZMQPa7BvNnsV8o7XPe58UvtYof6dn7hcrzNBQsXy",
  "key7": "2ywMS4W1G6ugFLhGbtWy8NNpsvUz6qNKWKtfSRCFEzVbhJuAxUjtFg7aQJAy2FkZs7FMm2hZ5Z8VRUKBsvyD1zS3",
  "key8": "LVqfVJMdohcPwNfrfesduWw4a8S4KKP7ZxoUoEX9WXm75W7JALKH7vuCRvBCZEJmv3s5UYTJZanVVgVZZfmZsRN",
  "key9": "434peY1fmrXKMmxivjiogAjF4owSy67AzLGKSMbfoFqWy65p5EvcmAjgqBEdfs8GsAjrT666bxTz7Jjq3vxvtGHQ",
  "key10": "jEYf9RhszA7vG7ttUSe8B94s2bMku1cFsxVY5tT8N7ipC6bdyStGobdeG5ZaSVDkrxAR8xPmqKYa6bN46mPcbUE",
  "key11": "2VhMFMcz34e37jQx4rWW4BpsGxdExV9pzfumayXJKJNAZ8WnX3fj2UPf8aZApqxHgDDvySiAiNnEyNmjqommDuWG",
  "key12": "5Kd9qVskn1tvWLbW6LQwQ2otwauiSLf1XZjsxtkA1sonXDWtp5uKMBuN5Bby1CzTMidVcEiNKkMebe5Uinj7E71t",
  "key13": "56s3bo4Xe78zcGLxA45bK8VrcxJQeybiMzR45JoDZpsfkFHhMcGDFSHvcAsNk93RjHV5xryKLVo6BQen8t29z2ah",
  "key14": "3vnDheUFfoJDHnCtgrrpc4YcpbVw4JFgEQu7JyZek9HNNfo2WLMaVtnbHN8bFtRj8K8UmwC2K6j2UTM3nd3wF6sL",
  "key15": "yW5U3Z8ZHjbCWA9ciiE4Sp18cKTBobmFr3W6WfNLy8occFB2LcGuE7sfyvNifKb5HEdwMj2KwdvQzcosBgkrcMf",
  "key16": "3BMGjpenteozsrt8qDRQ7j5gCUq6FAW7vnCG9qkT7Qkc7ZFwPiQqi3S7uBvho2jvi4ntmmaSeCNv3Pp1Dih2Qujk",
  "key17": "4cjHV54fWvioF63cH4iekxv4nojL2nYwpLf1pYWdoHSrsvSBEJr791CJdqFSZh6j6FgpN8JX5WZyCdK8xfjbzT8x",
  "key18": "2cqh86JsTEFHka6uXPJPb7bkUVFt6HC8L2BDMX3CYrxk8vSzb1KZXcLxW75akn9rVyscLDUmSqsCLbjzh53FcEXZ",
  "key19": "3sECx96BVEHwYV2kfo2PhUvkiRJ4cUh3x5oBgZampKYTntb13eSbEX4K3E9NScvZaeHSYHACxry1r63BGDZhym2G",
  "key20": "5NQX5jxYcoVVMUMpgDcKZFp8s3CT9K9qZswhhhPQX7EvAfbWJsNgGfLwKFJ1foQF5hretfN34BdAV5pePZq5qP39",
  "key21": "2wDNSP48NKc41RXax7VPq8p7DRj7kFrrFNvJzh12s5UpKrTYqdL7C6jS5tzc3JPe4rkDKFQqTEsRNwXshvs8Ss6f",
  "key22": "YgFbZWuYNwespAkwEeTHXRQCXpc9vCL1J5NvwjuQBpQkhwd27NiERh1zMpY2CEDZ764AnLZ7zU1JFFns9gV8r5q",
  "key23": "5WZYRTQtegLR3rU3Y5jojLftyrfbeV1Z8No5C8RDRVw4iYMVj6ix86uRbd9K95B3w7yJEGLapDrLRQDdQehnEhe9",
  "key24": "3kn4KkU3NdfxmDUCfDVNKUUNY7Qox1gHKjpz9R5RACJdsDhKMY1Ee4ReLsb2zvMahu5xYdVsc12aDgnc6uozFTN5",
  "key25": "AXxzDjKGD4i6uGdTX2evMb2RGZbRojdqxMYHXTzpATooRaZHhgqR5YtRcngCbawRysXD12kk9gSAVStjPhC9iSc",
  "key26": "zCUW8f27AgPUQqVBjkS4Sn17wMFfPD9nnJQMfm9xghrvh4hvPwQhbRdB7wFwoiqJraobLn5GfGEp6oFaacm2LZU",
  "key27": "3QQTThEmX9uS26JCS1xau5TVh192yYa9KQPLQtHWSoMd1fdGDZ2jnLYX4wevBeUeocLvm2UUYnwttcvc2qejwr9C",
  "key28": "5ovWbfTxKs4fD8msHL8UsCTTqZRCGWdxVN6ePD8QW5JJ5XhgkLdbFgeoKtFKmCXMd5niTxwoHkKUv9HFnCETMWMz",
  "key29": "37LhFoj47wbm53EaSeaxaxh7tbTcAYyVtoCSbYyeajN3rKHpGPFFz9PtSxrxbPBk1k7zmSpTPGtbR5eu56Gg3Ywu",
  "key30": "3S8jnWbsuyDcLU7U8SfPHcdqEeWiDgqLrH1wA9P8M5P9GNPqXymJrQeYf8298hM9mkgLZUvUSQwzV5MhHvQTKrZr",
  "key31": "4QrUM4YVUspGURENtj2NVzeLgmrUC3LFt2SjwZLYhKLZ8qb8o1fBT6UMPH9dxBqcYW1RPyQPbDoD9o5dEdSv4Wmc",
  "key32": "D4bnnH6kXPt1eyW1g8jP1KvL4tDc4L7HNsPuEHuoaUAD9rumw9bncNWuP83VWoQN3dWxTyTQNBzwPSB21cnV8ab",
  "key33": "5EokTJrSpnjUqqLdibv5Cdvtxy7bz1NKa3fSgWjkRsCMV9P2LkxoJiBVdRqBHsyC253sfkyf7BGSCESvEo2h5bas",
  "key34": "4HwcPtjEHBHbPRLpYejXHaTcgDYyNmXeqEXtoSVbDbUtTRixtgba456TBV5pqRvCtPv4FdKkAsg17w2MNtoBG4yD",
  "key35": "3LdgHME1417hP9W3umDEhJ2r6hBWZXdwxLNRJfQ8Ewgn7qo2wz7KCFfHDX87cjHVFUKKH5ArPw7SaCTMipbaKQkZ",
  "key36": "3PNTznRraJD1SL1bCBCrZsgtPsz7ntiJ2Vb4sd6ZLhNgtX5XfPKX2tYTt9s1FiEKJzRX7CErGzZnfdUzY4xn6Hgw",
  "key37": "63Myuasjy9eUvo3QujetaRqb3yHQHTHEA2iu5f3CEgdwdatsv95tGJW37TASLWfxLKGwyNuNEGntW634U3mtoD8N",
  "key38": "128RNLcDeDT7PacHpQcp9C3vExZZqnRj9gMULFvYNDyPDwYnfZRVkZziXfVJ4MuocWYecq8bRS68LLHsFTpnvtcw",
  "key39": "4TPN4Ms22BTXsTFyuAxBDRU1CL94PtEZX5gnzh4wW14r1gARjMZ5B8yyHh8s8KYysN3c1RjuWcUpsZWSLP8p1tks",
  "key40": "5w9QmFbTpmsK2Eyw4xJgo8qXG4k9zLHGRF1eiSUGTjvbbeNzdyXoQciYUs7Js48ekLDBmjmGDVb3FJQYqbQzegMb"
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
