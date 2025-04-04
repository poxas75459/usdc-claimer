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
    "DAZ8kyhYRBt6rPUSYWPvPBApvmzM36Ya38xkusxNaDJ3N4NqQDDNVx9NyKBWmTNknHUPJoCkVqBggsThFPU2rtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SwWcMz8DbxDcaxK2YzLZzUCZJyNAhhzLSaxVLdJV5EX964tjLR6gskvQZdWErNGx91YfBM3pRzbpQRDDQtz54hi",
  "key1": "4AR4RyX7i5S8Cz6QRFeZvTLnjTPcPNXDXKbdvzDqhkxXiFEEzHQGmNvKMPQC6fED9vvE5XJjYSbrtsxMba3bWfCk",
  "key2": "2mv5PWdnCAH2ySN1tQcTZpKytKuL4LkpooNvN6s4hfyy9e6nmM9PX6Hv7D9afcPbyuNwV4sDyC5KtxuBYRwXbFeu",
  "key3": "5GXPPTWVVRZRpxoVXKK6rGfxMnLT79XpSjQeyA93VbDNkbFNuqBT4Xyg5jsVoXA7UiS2KUfz88QvVMB4oV8bbKYe",
  "key4": "4DJZwYPskUPzChm93ae4ZKt6jwYM8ErA8jrQAKusv35WqjfPBQk1dePsQXwvg9Cs2qgQDd6mPt41vqYxH8xLdXzu",
  "key5": "2jgHzpo4DSr4uNsSarHYLLUhqE1RDibUoHmDd2LyqxoeTcCiA9paVh1SSGD6kopii3ciTYRKVViV6uvRULixLH8R",
  "key6": "24wmJVDwZjBXg3ofewGAR5n4AKhqNrfXSP6jnHaUFhTmP61jkun5qojxsAMJZKAnvHumTMmyb4mf6DQ5p2U4veMx",
  "key7": "4YXyYszFZ7yU4CPRU4yZaXX3ugna5FAoeC1NZJrqwzDQhbBGPbYqXcFDZVUrhvWgwNqguzN8mRgEANa9QB88mmpX",
  "key8": "8jQZjHhMcnBdoQzJDz1uQtrGBFVmeMHWrCGhhpaM8VDERSndfN9J118HhHXTbkQVjpJLtjgStZnzSXLHAVuFckW",
  "key9": "3oU591eMmxujJ2SrAsQedqo4wBZJk9xoiEcJFbwX682AXpYQwEriJpezmnkrkpPLf6mf6UYGf4CFnf8KqB1eyxTS",
  "key10": "4ibEPJyWN9MnGY5R31aw7vh7AMTLGzBsZguDyGdT18pfqUzPwbQpnGmuwQmZAiUPAqLbUbi9R1TqmXfjpwnBYtZC",
  "key11": "5xYKhbPpFF4yfAbkC5ipLPxytreCh1GTYUVCYYBRZR8xzpDmwZcAeF3tYyvdUPfrBE7yUd2d3pGdPF8uCXAtfoqc",
  "key12": "4nQcWr1T6QDs4CBtM7N7hBTyGvhSfNAQLpmH8YvLmhLjCnsXXhhVd4V43iTCDerCj961HPefTuTXVvUyusDW237D",
  "key13": "3PfaAeVjC7ajWBvkyArdvECchTc8yqCLP3gxAMKRoo4ryuDCwaTnQcPqsECsncXdej4iMqhUcUa6NjbPTP1kGdgT",
  "key14": "4qHKfyYPscedbYvFZ1tQiAMoTyHgBT8jm1iWg1KibAdmnq196cfjBHNE7nBpSCyvKkvd8h1WuQvBD2tMWCxnNqjH",
  "key15": "5HaSkMgBSGJPADWavnND93xxPzWCndBYrQgThk1i2DmGxixeFJzSbdksp37HMNLq826Sg9SZ6x8P2PFbNezojp9W",
  "key16": "5x6pbH7E3pWa9wnLBJB43CrSJYT8MKEME37fiWEuLnUDEYv6DzCJJgF975G1fdDyDvJ38j34oeMqoxfGxtX59mDc",
  "key17": "2fnej3pnqU1cQD6wk3FSaUsrihB5uHV3arsU1dTi6VXuMXeLk41rCfaAxkNLk9DP8xRaj8DKrKNW4nxxCgT8LhJ6",
  "key18": "36V6qSb1WmCZQd7Qe7KQEy7WGuQeTA2RALfAewLzQJrV6t9JTU2gxx8DTrdn3feYMYZ1AaR5owayNCMsed7YMkUA",
  "key19": "5GbizZiUDkREYWYUNLdubB1xRjc9rP68D2x4dgaebcx7ophXrj97sutRHU3Mmtm7dnkRC9DYRW6BQBHkHBTUECBY",
  "key20": "5GFe2KtVNn5588gec9qSqp43T4EQF9JCHq6rbG1YZmRduLSzyVmakABRN3AFsMtDYrPurdR6NAnZLs1GSjWDwH2A",
  "key21": "3Q7TRjhDJLmfM8tyxG27KeiThBb97Cd5hDz3NUPyKCD5fiNuC3QiU98QWoZjJmsovZJjZGqJQGS87AqujrupBprt",
  "key22": "4v9fxTgB1iNjjcp3GNHeyyPz7oHMSnBubxb2jroyo8xA2A8i8tYoBFHg3otdUSc9jfcbzkMMWmEjY9KDKHnGuMA8",
  "key23": "2Qbh1uDFB2fzJkYkooChKjCoMXcReoGSwZe1CLcuJkCLWJLtc4HpGpekG4XoT7ANCbjeXYWwSuw7znSDMmG1Vxqe",
  "key24": "4R8ocJrDmrZgzoxmGqDoA54JYaJNTmG5ui3rW6CmMYjfF8b5sqZxPiugcwNy9eXYZDK3kQQnCXodwuKaB76RsaWq",
  "key25": "5FvMyps2h3pT6JXRDaBZmK7Nhd7XyvKeaF5jzQmRhQqG6AHn1xbiwoXod8FG6v1GVoJCQEqGfMPuD3K6KPmynRdB",
  "key26": "4kEjapdct1A799yCbfTHHxwd9ZaTujg9xo3znta83GnQHF77gadk1cT1nbkXDiraNx2PmU67oPg5qomErtUnLFLi",
  "key27": "2jqyzT4SQQwWhWtcentAUFproyGDtrjuWkSFmtXabE1vBwdPz2tfzQxJdsoRBxbPmGh3A6wd8ACm64P36vKxbP9H",
  "key28": "3NLMg5MRWhfTNUG5HnfczdsSEn2NL7Wzrc5ANsBNpU92BcUKLM8PunB89qYiLXt6AyebN6XSuHtuuMGEPqVZkFqn",
  "key29": "SyAh3TUqpx3UvD2sqJYEfoPd35vf3GGURuBMSKiF9P7i5WUynQjdx8FSahSSgGbyTV1PvDkgE8iFS1XXZQMiBNC",
  "key30": "4o1UF5dyc8ykwidzyXrVURzRkckUmsZ9jp3XkPbhF6vpmigBVb8R8wYmGVKWQG9PuMVA1f85D69fS3jGKaT7vuVu",
  "key31": "447nSanxn8oMcktqEBhVxwBwXMoJdvz6cDLa6FhCF4pAFWk1R15X4oqcqkThWiEiLy1w3dF8Zm8mbCMEhJy6y8Vq",
  "key32": "4Bwy2X5NRn4BEVatJFZjtwgDTMz6MzGZx6CbTe1Vyf1Y4e5Pkdb8d8ri5ZSviM2g81PCCmPczup7hFqSPzuxiTow",
  "key33": "xXQJd9kkdeCXctmbdSCLBP5qAG7b6Q5Q7KLwRi5DKniLrwQpNN8cptVFvPwKZmtTxZvYuj7ikySutNDtmVg76nK",
  "key34": "3xMRqMXeBMptD5h4AmpGHYc51DGtHAwpcvbf1uoeowQu4rMeczYqm84WX1PsvNzLiFFKYPpDyPu8yUHWoPWmbju",
  "key35": "4fnNksKuHCRpvhuPuSK89KBBdfn6G6TM8cQf2ZVkG37npdQFqtQoWwhM9URYzbDjp4mCaQ3zcnx1AM2CCTdJuugh",
  "key36": "zoCqNiyE23MVVpHpy9f97FEnokF29i1BiPDCe49CKMU6qxvzAbsYe4myfhNN2UQxiXmPPKN8Mx2yLpdaranF8Pb",
  "key37": "3W43u85FCETXbMXP2QwVHNQDLL4ihaV1yDGWv1JQ2VxoqiVZ4ak7e7tPmJf8f1BijZwNHcLiR5hdHGEBYnnp2KEA",
  "key38": "5NVVbqLYFeAWibjKrb2LeyEHoyqkXCd43qkydXomrxqGeLG483V64xqBpFyy7NYu5Sxb87nsViTqg64ZM4AZCo9b",
  "key39": "51Ss1aLMMLHmXQLbQdzQmTMHF6685yF7MfhTAwdbT61MR1QWs34w9hTBM2VC76MjBJYVkV3m9j9yzn63jwBxxz72",
  "key40": "2BQr4sZWfARCyFk4scMWj5QRmgykQNXFFYNaq3vBzZEnNYLJ1NfTFH938Ks678qmbuRpiRCQB6QEAobv1iqKsetC",
  "key41": "4tQtAPM9EcVn4MNiPXRHBvRe5kgTMNLF3V8Z58Dz9r78igiLyRkSdfMnMKXGQwmysjb7pZChVoDF9CWBfSzq3Yd2",
  "key42": "2aoajDk6dzYG6CUE7Pjx4jmydFd7tfd3LfkPV3UpmkGXb4BZQRsnpCekMPBnnMkP1mXnHwZ4AAT9e8Fu3KA9rg3G",
  "key43": "3JqKhM7WRyZsw8Yex1dgp2Qcv6iHL4vCmtYCN4kWTdrBeyM5WHd8DV1xfFrJtqtbwxbpgS8hcbdYzYDNcmv8UzMS",
  "key44": "GgVGYVTCFfzYcsy6ewxtEpLKn88gF98ZUCNn9ar71cZdZosgDLyY5yLudN83B7fvJZWnHkj2QL2TVDPa1aJfnzX"
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
