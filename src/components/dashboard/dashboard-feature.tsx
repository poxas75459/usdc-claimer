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
    "3R96b4cAF1bz9hnTNdafQzyQR4HL69KWyrQjdjicipgEs7LEjjt8so1X9bRTtCjehr95cqrL3hE6qqDhcv9apWSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fcHsYSmFtCJWqcSqAg1QWS3yAvsxTjkuj5AGhv6HC26go6bauJM5VDTkctKDh9UftyfuEMMwojjVZMaVUsSL3An",
  "key1": "zmSxP5TMb9DVwuMk9FV8nKJWBiipALNn3WCSjtpaZuTttJXbUrisWSdqSQSfjeC4Lq8rdi8GonGuGYQGP7GLbxr",
  "key2": "4y92aPeSNUGLU9TCqDQmtBRcu2B4cHBSyhhZH7mNwe4VGkGqaQmd7W6LZ6QgL4ZCTBui9g4nC7RzcPhpmNjhpcUm",
  "key3": "5RxxevRxBR3ywSuN8AEutU8dqQwWAoYDXxt3VoVAerXaV2Lt4nXTf9YdtEF3BUqU7W1eQGJp4AcbgndrZoB5Lh7L",
  "key4": "3uvUD1NFT2PW2ZMdpf6td93FMDUwCFFuZqxwR2PrkUdnJfofTp7WSuB6gBkw35dDVMLRNfWyEcusi1MHQwxTKGjV",
  "key5": "42JppWz9LLSFoLcKXRmdEFZY7HDkcpJzRH3N5QHmFQrWYw4ZkC4Ab44XoDiAaxotzAwj1qptP2KPzBBsqKxJoq7F",
  "key6": "2jPT581fX2PBTbmtQPSTwi8r5A9VSLrDhoThUqgHHWAa37HRkNhDY7WBWAHf84Q8BfUiF1wDqjTA2nEHEbE47dbk",
  "key7": "2TNeSYEte1KxY43o6eaHETkvCcTjkHuMcU8NDt5YEwttTyvb1kdUvPp3haF8mcEVxHT5MN2ksSSPod1ZKbekGw2R",
  "key8": "4cEh6X8EE7sET1QRg1qQGBXZwn28uVD3JbSkax3FFxkzoMoZGe6s84okr2yJs45W8Vm5a7mAbEwTBA43nRHJ8px5",
  "key9": "2djAuwiu5zAwHQkyBSRompDvGudD2UfeUdhs816wEvcrhr5bi1S3BE4jS5SQxXkFVxnucqehD1qa8z3CHb5eDnvD",
  "key10": "42fXJGfHU7wiXkrJbnHejNXhntDtyEsnd212oWEet2obH6GEf3o1fov7937iKuppfMwcQMfQqbeYLU2tKZgpxjod",
  "key11": "4CEx17sMqeY72J21ApkqaHr8tsVookhhrojv6ZKusxd1kvnkWMtcJ86itmEWXxE6AHaHq3nBfVwkjVkSWY4g74zY",
  "key12": "7u7zc3fZQZPxv9GMgVM8FY4t7fDedgXfzjyBdK8TDQbqzkEDd4HvyGLZsRnrhB3teVAeYCBYQ3gc3w2Pdn3wASZ",
  "key13": "2k5DQF5tMfrJRVKiKSsNmZaaJ2b9x2qw8NB1HNGkR3s3ZkEBmRxNv8yN4vptTSr1M5BZNqba4sGopfu4Qi5yb3SR",
  "key14": "4TFUbXpJpeQ7JGaVK1vEybrPVqp3s8k4gQj8EyvrbTQ4UDsbEcpf4ax92Rki7gMvGVYnmANYgNLrobtaek13uEri",
  "key15": "4YP58BfAy6BNqcFxA1FXVg4KzgTVDy32QG5a4EXPykSVptBvRACGTBtyUmhZnJZEAcnzkCrBEt64NFn93ThJJNSD",
  "key16": "5yJep33jXwav9xaeq5no4MGmRzBrdnVdsP57GF42XzFFCL6hxL9aZi8uZr2bRcYa5KaeFFzhc2ymW4zyPMNBQwhd",
  "key17": "2nzKoVdsgnCKEPBeNfTSkfZs6dQBiMpTTeYKvZTYvVKwenvCC6pK9j394MAq45Ys37zCRadLwfaC8xT8xvy5qE4R",
  "key18": "2NRndasrthXKeQLd13f7VPGBguE6EbcsViBV7eCVJFs7K91DQoc4VLjd2GzEoziutDawnvHghaZz4LJHvdkMiZZ4",
  "key19": "4RezpoLwDzcxD4n4uAzNZJkHbP9cSeLn212bCZDrDka4MKBfTb3q9jJuLUVuifY1NXVzgY57FvDNNuafc59dijtk",
  "key20": "3SRQmPBPjyW4Wkhng4SX7aiMaSkkGYoxZcDyJ8m7oyj6E51tNm4vkyH3pwC9X5mow9ESYPKovir2ArS5MPXJERKo",
  "key21": "5zTRLz37R8cPbNGo2BP7t2GNQSH3uKeS45c6Jos7tEbfgZqMLZWJPosUQG8cSe9mTGdZUkhHaS5RxNz2bfdxSrnu",
  "key22": "44xymvGjLraHqp7NVkAF4QYZonDbVuEPejpLJ6quK44HyiRd4kXptdAJj6geP1r1KNRchySX39kSEwAJ5Z2oBwAr",
  "key23": "pUtvuWuMifV6qr3ZLVFZuZ9vW2iuKydqRvhf3gJZGWJbeKvqa29TQAwDbJxwKLULL4Xsve6NdfYx2cRgq7bRMkX",
  "key24": "4RkXY6sZ6objxJrPrZCMaoFCAEWQ421hoB4mYXhuCAkX8DGKtQMDUvPBbc9gQss7JDU9FryhYw59P2AG1hcnHYH6",
  "key25": "59HeDZ2iDiDJC8yBs3yi3vSvwryxa9ixbPZwEN5ZNCxaX4yTkYFk161BkwHifFZPssLMFyc2GjaQ68AaU1XYGNdF",
  "key26": "3cHhXJMDTk8ttRDgE9zUjRpuoCaVApYkWPA1o9UWrqjZucnyboA2Y1aPbfV2iXMCJFz2CH29vN7yrKL3VmzzUrrg",
  "key27": "5F3DfVEfb3TrgwW5FjU8gabGyMChjKaUDFCaieqFFYDK3hoTWKxLSL5teGudbtzDacvWDEL46jDQyp8o2ibkDkWJ",
  "key28": "whKH7kFiqfjTnC9ejnqaQCdGGddj1tyePhgrXwt4qhpBpk3AvNWcN5CnhVvgZFUBpqyWYrjPmWLgBBk1iqCYxx9",
  "key29": "YjCfWKeQnV1Yox26bTmdxjiYL8ZJJRdsRjdEFWQf4bSsCdj2BomDkeBQUUzEXbXcNH1aTwFFsmDDKRipuBhL7kg",
  "key30": "5o385PyTGthBhbXPApNpaMAXn9EQhnfmxzeyQEMcRQTtV6e7zi32NyXgsZY3UM49xZnxN8fww6s15CZn8Z4JDMSD",
  "key31": "3JGouQNiQLJU2PKBDL2fxwYzFM5QXZT8BQpiT3eGjp22rhBLXMGM2EBr42jWcJLKZ9AXPDZfwEXgFKjfLfybqbPk",
  "key32": "mdkDtrMXwJgBGhuStwLg3SmCVyWwTbxqZ5voC7PpDYc5ueA8m9ftrrWRhMnFmQSXPM1eYfFpGg7ze81TNunx9Ca",
  "key33": "4d35UnEayV1gyCq1fxdip51aHEH9pJLzcComATJ38q1iPpmsg19ST6Ysp9ozLWRPegJzEGY2Ra1aH3Ligrk5zxzm",
  "key34": "5MjfBeKVGX8Dou6JPs4sqrfd7E9qcrLsvLJb3X8cwiVThw8NT6oiNWKpCBFJUKpujvGFb8u1hnfbS7MppfPHoPDM",
  "key35": "4meHJC78vHzgz2ytmgrxhFvQyWSdHmJ6dNJrKbDqDxDPXNMZQKFGeGoSopyhBgg59pyDaiFh4FxppKNWvL7rkBAP",
  "key36": "47TEM19G8HuxBm4FFYhQXr3f5ARAMMLAekYCGogsCpmBtki7jRj6yAYZrcKigTeZoeve1VUYrRpqcrHLYsYgmcDd",
  "key37": "NobDwXQLy4svRWKv45ggH14hARAo7zTav85FC4Nj3Ujr75abtFCRiVjUL1thmHqcqJP8c3MsQuHSu9yBXLUg9jD",
  "key38": "H5moXSLikFB7Xewsyb7n3zDYRnWqM1cMop2TNcCPPKKgdcryfzQ7ucWw9YgcyZM1d58d9bcbaFYqo6gbRaL7vjT",
  "key39": "5aQPAPDJJgmKfvmaQ3zHoEFTv6jWyTzPqgw4DDmRShVdrGuLtB8JCQ6WsUvXkAX5g7F5PmCFT7MWRVY3kzFxiFrH",
  "key40": "3b3x9PdrV89DuABuuVYiAPo3WoJaAYtDbL1W7U1xsSMQnhrd4i3sRMEZ2tAYSv84Mny68ao5FGYFLVHQEsNW1gS",
  "key41": "4Yj3F362cmUQ8jWHc6hEMJ5vwAj3B7ascpuLJznGez2XyXRJx1aQVxjmrjGi3FiXdf5FAbUfjp7zeWYYBFxgY6QW",
  "key42": "ikySSjLjyYGEGxaP6NCvqvtfSU8M5xDhqCUttmpze7DncMggnrXLCnhWT8ojfFhLdqYYwwhmvL7zqazmrbUPx9u",
  "key43": "4JugqrGcB7GE1pi5EiiQtJz4zx27TE34gEW6W9cj1ugG2FhPQwc8sk5wkZ9wxd6UjuwJsVTjneRMvkW29REL39b2",
  "key44": "3qR4rD9jgZgoj5WaaZoY7f62cdewBr3PYxbQgvpFMwahus1vjSkSgddAHj7PcNQRtscn69srt9GJJnSRG99pHFMp",
  "key45": "YbFURT2d9Z7Hg9MmHk99tbKDR3tebGyfhdZeqfxc2q8XU1gQgRCs2vf8EuoCHmZndszeEADmgkSB2nTKXqspKQN"
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
