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
    "34iobGwuFtrFEErdMN9TEDu6s4iU7zJUVezeugEXWBt9K12n1HBHg8VN77EP64fwnuFxRbFu7Rvm54ZWmukLoTYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzHtG5y1ZU8ETVCocgADuY7hK48HXZunH8R9ASQjgE2XW6KR6QJWvyH7SMC2Qf1qQugvQ9LLhGU7zmwYRMRq5jF",
  "key1": "2YtXKxwvospsQSvyS3MeftXJY6MnSfwb7Mw58bXuE9uiBvNaEkePDUo4YdcYpMigzdRa29TiebhyuWxM3Qt4Djco",
  "key2": "3PMTYfZdcxYk1GLakn9egQCAoChxh6FaUqgjiYGi15MPecU8Ga55nvVARsiRFuak875AULBcmwGwARwW8hxJX3ro",
  "key3": "5UEWc7wrqNjYEKHzzmTNgBrm3hKu8V1XjmE5WjYEqoWzrhiSJhfN7RVjMpbPHHmSpGJTD6BgLv8ELYwAaYqJP73y",
  "key4": "PAM4waH7v9NbpPH8vkb4srmx19xCgHKfHmCAUSh8YMH25PHtJAf5A1PFpp9p1cqqp4G6tFSzvZ9DswzM27xDizo",
  "key5": "4Z4BHmi46DHLR4UdfUrvSnUxchd717CRiYMZGc5tmhJzffgF4V7rLMK62fA1yDfmLajvpuL9pM5stpi3sKZ2Yvit",
  "key6": "wP2Heyt6no85VcoTC9P16zEbt8tyyypnLPFWdKGGbd9rG2Y466aMz7tGvTjyAYpNimhQKCEQWjiscdjqcZsKBiK",
  "key7": "5XZSoHXH8i1VeWbehJ8SHrZUsEhk6kfrN1cpqPFE3GVd37rCqo7JJ7oz1PmsZTccSNFjHNxsLDsiexaFXBeNcdyA",
  "key8": "3JFJHpmE9XxcESgdghpakHV4rFpV8Y7GwAGveCAx4uXdkXqZ8bA8VSGgeJNr7xKF8UDrAr4eqF9nzXZSLojWAGiL",
  "key9": "5qyWMnBVqrH6fugp1ahS1eywXMYNHMwBX5afo3PnczTyeKfuiffy95euknkHfsjv2iiFzWEcTZxd5LASWcem41zk",
  "key10": "2qGEsTQjWTx8UgD6uU25FahZMTUzv7Q7fYLE1FRR5hDtU18vWPFmZ4qL33vKf7aEL24wVUBSLW2yvp6dSnc9p4AK",
  "key11": "4y6ciRpr4SAAxNmrnBVNHUFb7Niq1ssqpi1CsTYUVnFu3yfRRUKi7iDf3PqYxFi9utThA2GY62v88qFGyZ6yE6UL",
  "key12": "33DotrCCcpKULyUtWRcVaywjnpHDG49AGbz4bsNPQe2KbNVMUAY7kkk3RS9d4vEtrv9gNHMERZ6d4q3uAhu95rmP",
  "key13": "2HiMS2KsARNiNCknC8zqHkpprxNkHhDeokW426MYDLkebgPfGnq7sBUtppbbwB67qrvLmA6kQ7snHr54xMxHQYh9",
  "key14": "TXy4yu5XQSzzRWVkHSpr66dc2gSh9r7618vxLwXVcbvw7y7N1frQFajX7LWRdGVHKiZkfm9XT1BSj3hUBE3GfaV",
  "key15": "5scWWtmZywRHnRjvYgSEh23jjgA2EE6JtnWqxCA3wXeD1WPSeotzMPoMWjczoNPYT9pSeipB2EF3LD4A7TTRitW8",
  "key16": "2rSZ9EfomgD85UGJ7cvwyUAJ34u8KQKKFFDUpksrtR6yGcDgw5QUgFamiYfUrUyRA2Ho5EHuR8M6e8cWzfP8tXYW",
  "key17": "2V48RbasnieRSrYnkX1e1nmW9zd4tRwgYDoGwhc8EHWCjj8PZ7sc5KSDfC5eHkdpgGFf8tqmnMZzWD5ovwArQNqR",
  "key18": "2FMekmh4axf2uqzzURaFzmuovy3ZMHK9SZG4DC9kbEn1ngRSWVMibyANhpECGH9UxhocM2TsWdmtTx4e9uJPubJ3",
  "key19": "3TGeEiiFbW7PmrJNRCm6vA5hLFzSMgLb2rRZUUsydpahEfW5tq6UmmJzaBAg3qCFqkKgPgLfXXjZjcam3bgpiSDA",
  "key20": "rZvku4T95iQGCCyE4ja3BDb4Ln5Tv9EbHL9CbEhbHAYMGuDYr1Qxo8UrZFwTTiEi68Hu9E22dDhcDQh8u568xiZ",
  "key21": "5gqMNCd6Tz8FVAZrVZNheaSTbvJAeuDf7CN9oALfZauE5afNFYFqNdzbRn6EWdSFUa6J2ZMpoJLs6fbWz2SwpLHS",
  "key22": "2tW96RJKdR22re78jZbNaf9CjRdTFJ1Z3TusqrHwBiBHhUfooaSJZ5hysKScWwLidjr3w1mR4EsZvFPWDYWZpE7D",
  "key23": "66UssLn3z2bTTFckWnN9u8z2WVky34CtKHxmcL9sDNQFF4LwvGvcZ4dbjbn5ZkxHsNGh21z9kTkjQutjo81DwH6D",
  "key24": "42zZd5wygYUqYs3yFEoPczwVU1WVYcWS91vomivguqrtKEdAYoiRUZeMkyba2Mz8oYiB7JYPVMsZbTAKEPdrSPSn",
  "key25": "mWeoLYsqfMNUiW1kxw58s5bawv7YEAVxMZ2LVAMc9Dy9HJia7DXm4hCUxQSibvitAWEdEkjMjsye9w49Pk79KCw",
  "key26": "ADEm76kzxzbuHuJ3vvEc1W9y7dHN3M8DrsVumfP92d6vQX5VPSY6YHchbgZCrXA2ckkjbD1a32Xu3jVQXDdZE17",
  "key27": "5VpYoUA1rzfkC5Mfq41WXu8QiHU1i1Tr7AjSbHPiv3tuLMsQMeHWxLgxPQ3DyC3pckoPFxjawAGBw9TMvCJ1A9RH",
  "key28": "4C4r8h9VEfg6B756YkFcMbkkDiVEdLq99rFzQE3iPYrpuqfF1VVf4a8pXQujcHErHZ1oN1RGgS9MdSZBdTKeYTdZ",
  "key29": "3uQVQCELKdA2vfz6UbSJdowNyJVQmajQCvQRDmPL5pS87exh9PU61Vx2oxyvU4ffguxwNRAcnZsxBFKc6PNWVLkM",
  "key30": "3LqEHMdEaTcDqN3sS16Bf48DMx7Z51sLPPPg7YDstq6SsfNdpTyoicZhWFziYYZQ5So84DZJs4usPyBmsFhnYJjb",
  "key31": "7rmN49g8VLvgayQqhVJUEUSRbzKeA1ub99KgEougCvhr7x2fTDKxUnp7u1fwUKPdojANYwrUSnXfj6di3KXAWf5",
  "key32": "51YNrASGaBD69GnVdCt3DHdLUByunWxYn5JjXJdXn1HqSEsRNH7vwXNmE3dMvMhts8T2rM7VvnjVAr2SoVzrtsq7"
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
