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
    "4bzs57GpcbKBeS8J3tXQTym4amiV91wegSmLJsXDKcfQoDRY85SYyX83BqGdtCrb3ZrPfSwwRUKYaVhufshwbY1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xovy6Ay7qxazcF44E2a4PYSaJrK6SeA9A5p1Q8RqchQz5tHVY8ELA71DjFQzunT4uxHppGcBG9JTJaUKq6nkqjz",
  "key1": "2YbAx3rYtF3tDz4im98dYZffVdYKnbiUyaYwZJBhKnJyVZ4KjmvjeAVnb4KtdrNEKtBTRvwxTuNE8uGkgT4C4Qgn",
  "key2": "5ZUmeeENmZGazCDTdo2uUaYw8HEqpLr6umYvzQ3xmDKhdjeHxFPGCMjPXUnRUdmLZRATc47YgvCXxHHTevr8SSF",
  "key3": "G4wgi7AN5pmrWdhtN4WE4wMVdjGbUC9aLgAr9ao7HNEcunyGoiTcAmi5j7fBkzfkLXAqhAi3uGkQrZF7h26wjx7",
  "key4": "2ujL9KuZu7Qw8WHCj9NfTWXMBS2pM6g1FCeEqzS5urtPKKsPWXXY64uh8ed61zfmJXofSiyytWMqWDQykMv4Gmaj",
  "key5": "4BkKoNRCvHGhC2DjqXTsTSZxboGoBUD5ZbovN9tL1jCbqJnSWqQTMczuqhsa1VgzVvmJYK2NLcCoGpR9oy3wFbQ8",
  "key6": "3eHWDNTaqYRsdxGpKz7qs4fXVQGTnHb3sWbSKsuEVRhCTdZ9ExUah7e2LMk8nsSU7MNn2dfHtciey8Z4t8Pq1kNx",
  "key7": "3i5hCYLZr5ciHCm3VwCswh52HecMJ5XKL5MLcskQUGU9gKuFadwiZXJ2ixif6o7BAsDeugUQ9tAuSisXBYf1ujUu",
  "key8": "4GmxDmYEswTef6kSHmoBYF7GWkb6zZEMJ8YaeZkpkfqFvh7s8q5b4z7vVTxVEYtAxUvP6Lu9Rm3RBvrHrnRTq8Nv",
  "key9": "2suuRPm3XWWN7c4sHiQsWLaJetsHjHLrXEUmBshaKYJRkW6mX7U76PBQWzbn39kUpdxe2dYXFgDxhQPnm3j161kw",
  "key10": "6jHRhXMnCTdGqf9u83qJNdSK3JSTXaj1ik7aAz2kaCccmyS2BLHhmm4HJA5acBi9HrMKyBGmuQhXz3fkHnG8rQV",
  "key11": "4VgVsr9oAGbDgpukZmQ6emPhgwdWoXJ4R26dqJxWceCyTALh47zZskwu4hRxGs4yxsFQ8DAyVqHuU8G87nT5ngqa",
  "key12": "w4spWRPt2DyDkFV9YEh6L6CFB9aeeoCR9vjem31keH6pijXqTro2PUFT5q6aQoFf6GFWPaqpwZb2T56jyUvWuxP",
  "key13": "5eTqRFAtTzAHZr7a8EVjAkgyHPTCJQuYyopkPzXSexgWVePoe8YDVBWR6P3fBA6XLBGxa4gvfyYWWkRBiagv63Q3",
  "key14": "4Rj2GQTrLGC6nSWX6Bq7qiCmmnCq7ndwLD7Jc8QMmzjkTGsc5j3oX6i1MyPLFFYSu8k5tkVptJxE5Snvs267KCp",
  "key15": "D3nQ2dvdPNdb3zLnUe8cqyZZA65migpCFyDJ9JYMC24PgP5phF1anKbe4msWXpGTNUovPZ6sxXT6Dfh4Fu1eQVJ",
  "key16": "52jq3dDJWpSwK8H8yRwN9rARhkKNQe6P3nHYhyQxWYUZEkKBwguky8SGmY9PrWUjqzeLYU44eJLD42S594SaakFi",
  "key17": "3UunWrgBLxBGbZHoPoDX6Gis9eTim7D9ZYeDS512Zha5eyZTZKdxBpRfwnTW7L2ZfwQXMrXUxE7q43YSzJQRz25A",
  "key18": "3wXj7bexqLbaGVU3nuLR1HWQrVrkg723NemY7J425AaHW3TFe36mHQtegexaZcRPSJtTMxYPiF5xfQFZ89AVosvA",
  "key19": "5m7aUp1MewNAzhEXq1RjwqT2h3tx6JS85v8WFcan7Sa1C5KCn4wwCxgpSbQqSSsjmU4G7AKaFwfnpU5iAxNzz7Xp",
  "key20": "zmy67YibKzfex1Af7fNou6HrytJazzAX6pKExZstD7RCarCGbHNtasXDS2Qd3CDu7tRB5ZBQ9PhVuLmgadVCE5Z",
  "key21": "2Q2EfMfyWvZ1A2Gf7E12o1HygpxQV3s38yvmFiqbHQZZp5WMiBQAAubsFRM4PeM8LjRRQstbH7i7exfJBA24HGPB",
  "key22": "4ReeBPGB2LZMvL4k1mzodvNu9frt3xi7iKmojgSgXHo6SmH4x3qVaSE8xf22iuo4YEMYGNe4va9JXKsEiamKDTVv",
  "key23": "62zsnwE7VH2fEzwsuR7podbKZzFgHy9P37tbxNVg54v2S4BXNq5D6WXPH6Kp3yd1SczM1VMVJXatRwhfzZUh6L7x",
  "key24": "4nxWTLan6h7mNWExQ162zBfWsjQq2oky8EZcVdJbSqMHnkSgsLrCci8yEBj9G8UGWaDLfEGgRwzzmU6RypYcueL6",
  "key25": "2j8iFyrqtUEsrm6SqVy8669DTih4UaQYSXghz8AqcnsFwVrSru4yRFa8YSY19dWNoj6XNnkcTVb1iXUhMpHzSfVi",
  "key26": "2gMgkPLEvwkKFvVdENePovf1U4FeT1c1FF8AA38sc6VySY6KZFe3xsTqJ7csTJNm7eU5oGZKMfE8RirJBCk1gHqd",
  "key27": "41T5WWxUxQFMtGZnhXUcNKt1Dw91Qy6XbWHi6rz6BkuiYqcFHMH67ozpXfRYz3kKGvv8ZPNzBKSjAFkRTDK3ayKp",
  "key28": "2SFs1hSHyrYJii7zd1rNzT6sgh6r1XD21nMwKSdvvjdtXYk4PH2dVUoBA3LT7KLbRfSLAVrK7wJbuRh11hy7vg9L",
  "key29": "5xf4Mn1G3WLh3g1Az8LpD1a9TdSRKnbF923NWcQKGHmEs86qDUf4gtUTJ99sFXqnXzYqcG1Qyxk6LGAGFDJWJs4z",
  "key30": "2TSuwC7rjWsrd2vRzFhAZRhdXosE8bpQ165F2fDn1qXhuHPVtnAwbeEdLxC8g73MnKzKnBtBJXshDEJg2u2quict",
  "key31": "2Q6n8Evf4jZkCsC8NNRPFrYBc4hiSnuZKFzVktq5HsMkNYDNTUr3FdusPtfHn7wf3QuvdyZWjEhXF64GzRmpkKbg",
  "key32": "4ZS69yetTKVvTNw88jJgF41rvsowrJbyxHmGtXmNxDFXt9G9bbZ1MaWJJiBj324URSSuP1vyHSPZqv5ynZnRpQzP",
  "key33": "wLN5PkmU8gYk7cHy8KWRPMcrqWH7VAezTC6REq6UPvHDmRwwAboKyxHr29Gg3YKe4bn1oeSdFwJHn2cdaFZBLz1",
  "key34": "31Y5KQDCnrxHaLKbQb1JbMPAmTmoxx7NnuCtCV8ktCn6npAddCJmYQH4Zj9fmKnTMqFRUuVv4dXkr6fFfducZfg7",
  "key35": "4t5rgGv2iydrZcPoEA7SZfC4Dx8Pz61LTynRHWoHUSiYesDtXDjikfH8DjVmXaEjLbjsbuTjZVmLykqATJxYkLQa",
  "key36": "3U49FFumfG1QrAY8NPvaePoSEYTvJEZentHhWTkzXfUtmNwqqib8cZ3zdn599Rnvjzt3GcmA2YjLVHpS8gsYVpPH",
  "key37": "3PNSQaXoEKZ8an3HogHuKBMEvsN8AMLb6rZWRh77w5cunZUxb1dbkzLFJNV8to373sg7FkhsNMFunc6X8rZW4RgE",
  "key38": "mD3bhnJ983uNUzxCR5ugyfE9AkzXXgJaswr5TGCwEFqFM8fKypZAGfyyaJxSa7TmazUyazc49wxVpYp91sWbK4J",
  "key39": "55aZcFFRF8uidr1bLcuoEcxHQKFAAfZViBv3EpwCeCNtwac7941re81rnbX7KXu6xF2UUurShLn7YMiCiAsBYAum",
  "key40": "4Pen6U3kyz5pfifscZT3aXSNBn4Pib5s5mfQt7DwgKgRbAz32Wc2syCHuo3o6oEwPCh71j1a6kG1WxE8irE3a3zx",
  "key41": "541BC7yim3hKZdGnCm6sUeWJAUn7wG1vNQBJBw9rjVKbpRGcxvxy3ULWauCZ7CDbdYNuLRXzuJ8Wie168StDycHU",
  "key42": "2ZEcrqshhdYq8KM4GgrEyv9cpsxAdkAeCWdYVRwLbKTi2punsf6kVzY1YTJ29AkjRSih3joqALzh84ajBVFwWaBt",
  "key43": "4KuajSfrScrv9uRUeX9TwzmAqeMMDQvXzgjuxrfv9FxKgcRUGz4L5Mau9H6AjLZxt5SCnpewr7jQTfs1NkVrZQE6",
  "key44": "3vNwfuXn11VLRJXBBs9b4TcqokwSh1tMdHtPMSoez61uRPWmfMeuxP9DvCrhLscrWDfTbGjziTk8VsAoFJpAtrQF",
  "key45": "3UUKYWwJNYXtRDdVNExknswYoDYmAP1F23bXuC4z9faRA5vhuHqVG2kY3VmHNouDUqMWuygYiZgHSRZMQ3HZYfdM",
  "key46": "4uNWmb2Qq46rpmBhaCUdWC7rrYN25LKDBCvBra6U5fU71D2DxPwPbPHafPdK52BWR9z2Mb5Tm58pbPm2Ued8RKLx",
  "key47": "5MpbqErzw8UW4RpJBF9T27d6UWumFLJG2DcviD3uyPzSyEL4wWic9SrkN3y6oTGJHYt5JVBjmyw9kCr2WMbuZA62",
  "key48": "29RP5uCcJqvUuYosmxRwVYf5QGTqxQVZ587U55B15BYoFqDrkrJ26Djnr1nCuwvsb6iFiyig33vGm3yifqJruPTp",
  "key49": "3LZtTT2BdAME2hc2sqLvEZ6bi1r4VTjaQwsuFmXaNt222qesWcqCwvvDh9oeNkfvUvx8kzpU8VF9poxUZP5nciR6"
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
