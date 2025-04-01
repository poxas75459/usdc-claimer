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
    "5TDb1hwEDLYQX9NE6s62PZ1BzJYenFpGiUJEvRwhzzWhoC8Px1QC9P896uDi5L6iDMvgU7WAYXndZSdQX4fLNv5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZsfTiwL41exTUhmpYievXbcsqypFkyhsPe54NBWAAgXTxNtC4gVuPaCmG5D5Zo92BpAY4EkZvLdop5mYzBTbvJ",
  "key1": "3q6fXhowCUEuRY8BWFsbHVtZCmTE81xkgsZZNsUx6j2uFwbhS1PCmbB3KiZ3NRbpqE4rrmgTbDHG94ntEgL9w3po",
  "key2": "385qoHDQ6n5hdQucTd7E31izrjzEhZQ4GTxgd2Pkn5sbEz986nEZc7kaAdWftbZC63J7UhZKVJnJ94Aw2TNXBtty",
  "key3": "53dPXyWDByjZQ6j4165h6w5d12ig4agK7vi5z6cM9oZCntxtJh6P1WFPUB1U3F52yPqTCmPmyMN9qgDjzkR6Z6ZR",
  "key4": "kaAQaMZDpbVDGHb69XkeUQdFBwscVqeGD9ctd2atqPcoJM2KG6Kuz2YjkF7F3T2A81diq7aeYqJyxrREsbzopyj",
  "key5": "3j7yVMfGPwh34KYkjFZiGWy2tV2xrs6uFb7vZ3Zhp8Nfr1B65FPULvT1QwwPcrFcWiw7CvGUmMAsTSPpk1Y4nSDq",
  "key6": "4hmx2fzub5tG2mhf3w5e9XPfKMWY3RPSkZ9mDPJpNNwqYDsBwb1JcJJZgAyuCY9NqgaXgTsReEwH7r2UiMydqHZ5",
  "key7": "2zJ4dEWhgcKjbtgK5ZK1mFxXJYhEP7UgDJZZ1jfAQqDvMvtbJuhRqaBimNqemXyNFGTXo4kQZX9pdojeUs6pQopf",
  "key8": "3xY6vNTpR7eNP1MRW4fpHHVHRruKbBdSdb6qMx8jVaDXhUeWTaRfuzbkfnQjiBizFp1qg8xZ9AhA9Xar1QxUK25C",
  "key9": "3GeGT9LTEQFX4zCfvgHkUcV8d2667ixLB7GMCXLCrQThe9N3spVeVPR9n3fMj3N4eX3ZsYdNaGoatJ3tJVmXeaZ8",
  "key10": "3XnK6onzg9u3Jb7KgzhnPdBDj4jLmNSnJrXQdc2ncEpHf29diH5GYzEK9ZpxQVAReiWzh1U7aG9oZt37PG7j5SV4",
  "key11": "49Qj5QMQjf986bzS66DKVwDqkgdckJiz57axcdRd3FjsGboKmuaiimrk8EJWGb35QxD1aJaVNy2Gb1v7Nfb3hmG9",
  "key12": "3gKGryor7PQpahhzWXiPYDrw8awZoP9y5iWwhotuS8XVNTeAk1cnsReHDvuc1bg5sbJpquJTkw6QbaFdPiBynteP",
  "key13": "qU1xsoosuGPiXtjYTXfh79fm2CU2vBgdoT5x6AMh4QDydeKPa4e3ETAqc8rrzeNgchhS2G1H79RpiJoRgGF7r9A",
  "key14": "2SmewVzP1iDUdZXGinYWdFru7u4o2wkzqe7MgyHaXtDpNi1Sj1XfiPEybxvJfqHaHksz34Q4qtmPHNSgfZzybGVn",
  "key15": "2h88sFjdPNpRap1RZn58X7bwB2PEEg3iiD3shzgfQrCNPp88T3TPvQkVGUKHU6qJBUXCVaPhAyKjRbDkVGyAgHp9",
  "key16": "3oxfXwmKgGdkmwSyxxaM7F3n8N4eRQ4uxXpuiBXLQ4REdJH6qjYsRwmTdTsSWdGhhtqVoxPvsd6U8Ywce16g5wMj",
  "key17": "5LBnKqCsQZr1n6kPTQkk7tX6q3gN7kkq6pZshWJNLH3sJHmk26JzcL1GQE7c4MHJAnNQgPcikEUUuvWrmRfJDb1y",
  "key18": "2SuxJBq76WN1uNtzuxKPvcpCHsNEGGJjiBH7bdkkxH4Ji9RTY13mBqVJuBNZB8yv1A4oiZcjAJ3utdiUbTm7osGe",
  "key19": "4zS3u48T3MwViMU5vfHgFTymoHhL28xszrxUSpZHxwZZNUCq9xdyC4RM3b3ALgLv6JVBVcUbv8bSQ4HXVwdYFpoY",
  "key20": "5DTXiqMMRLCARpPqkbCgv5hJuYQPMKsXSdhg4pDmG7dVtHpeVj5XWXn5adVxEAxcdMumBZA63zzmYCpmoZnkPoWN",
  "key21": "4R7ueEoddk62P8XikjTg1q8LSzXvEZ7QQ9bPJNujBjXFZwEvavDMVyGEz3K1ctzvejH8q9bxMw2FtqTEF7ppS6qg",
  "key22": "45Un643vh32GeDJucSDUZNRNwTWFxbnxrw432F335AGiSGyL4E6jELdx9fUEVS3rLCYV42Ja3wijvH369p92cnte",
  "key23": "4nvnKrEtNX35jCbCYH5752i1iLYdWrrmwxQMAt67hoMajBQZnP8w2szuEBmG28hqqvabVnmyQ7XcVkukyUTUwDBx",
  "key24": "3Yojb2VHQKkux5jJdQ1VTopRJw3SsV1XJ4BCHPxm1Hacffx19xqF5Zcxw7E5cNQPtmzXHanXyR9qYNsEoYFetRKe",
  "key25": "9uASMKb6fiw2ABYZiMwTUtdG8q1kc9kGfan1GJGRALoM9WufKmMfCPJRyGmXixSCcqH2k3tvQ8yUGXpzEEFeM9W",
  "key26": "5PjXJ74mEpVMustgTsU8S5VWF1KYULL8yQ6jFMiKK9DVyVsm9z3ribUNXBCaoUAFjrmaLtxR3bfxsUyHZf1fmRYq"
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
