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
    "2paWS6XxgnCXhXsE7HfzgEuxaPRnbVoex578TET6FfhThnB5GTBCphKZedfNEoCEh8AMm1veBejx8RSddUSFGLKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHAUjscnB8Zbm6SQj6kKV5FCbj165wkm7XdF8DGeoq8ZL5BwVeLMv7oRceAEmdMni92ijSa56CnQPp9vt2uGo1n",
  "key1": "55NJHYhckNMtXesmxSjAvcggJev54ypevenE1iKgZssUNZb7h7nSsEP6XowsDMWx4mTBkECUEDR6nQQ5pBdPd2CA",
  "key2": "3hkq6EhqyozRMn1HnAr5yAyw9GnnF8DDNZLe5xEXeEsd9t4mRGPTNYNrUfwZwL2ppYbe37HhQcAgtjGCLPfyMcYU",
  "key3": "3Qw5Q24mL1omULmbPu9MpxT5CwQmRXrLPAfTKVhwzViQpyxgkEVU4dPgBW1h9AdFLx1dLwVd8Env55oEgYDkoaU6",
  "key4": "5QksH5evbzmjwF7NZCskvpD8JQRZ4QVXrxN5F92tM1x2qenHtmHWSTCEaUB31WXv53Ye9NP1xw3iF52dXAyqxjPq",
  "key5": "HybXNcDGi64yAxteFJh3mTBtmJ7TgiT4H12a57PxdcDrmNBtxeM1edCjwkge9V9XPwtHjHT2ZHaTEzwk3ryEV8x",
  "key6": "44G3C5R4eHfGczHpetAwurz7UuRLMdZNUKPRNwkGwze3RbgDoYdYFccpAGBdEgZc6RUpvY72LJRzMZ2j6Q9LpXKm",
  "key7": "57epZLJkGDZUzWWisDUCSzD1Ewo4V7RRc8kQvMdHhbKgW1b2o7oCKPow1wG6yegtap4eW12MVrwaMSitCtzNSXpb",
  "key8": "5jwd3A26ASSUAMAZk2YkMdTzyfMuX92nZKvMc6RwznLWWpSo69nNWJJEKkjLSPwjp4tpXAdr6wAH2zZmb51GsTRi",
  "key9": "2wEn2birUCBSV2XnoMGegmwgW9TaYuuxA95WoA74GFK7b799MZZLfFE2AcFjAUfCMbLCjCtxJA2TFxtZCthgWLuv",
  "key10": "5P5scd4gzgKMnwwzcj7gXLs5zXcgSbFTJ5Ce49v1vVzaT4XqK3m3a5oxvxDmrrsEZ6DfQLhmTx9s8jD4iFNKqEeu",
  "key11": "4jHJrPahVkU3mP5T9DuwMWL3NmckpjejjBaJfUZxfn9JokJUBquE6PntVpMKCp9chZWjwVGNT7CnmCXBCc3fkngj",
  "key12": "qEGRAiuA2efUvUwtXdWVHmb2HKrNNDyG6QMv1nZzLMnvzdmLyeijLJENMJNXphHPQAtgPRYVFsQdXh7fc2wMhUu",
  "key13": "4k7XynAymqLspQx7LucuGyRF4yUTXZtjcEeJS535MJDZQJSR9AJSzLVTBH2iAcbSLHdxmVMJR7V55ySkiCnL8YqD",
  "key14": "4UW8UH1B5Rbfmsta2V3xgh2qGDSTMG2gm1SxezinacWSyTbyUKNkYx8aP8feBgj51vy3sXjRGRz51r5SH8Xx9obQ",
  "key15": "2ZrtVMP5jE6Kq6aUcgCG9Qh5xmCFX4CNDTm9gyaMV6zC63Mpsr7pr5gXZfcp93NTZKmo3YRXBBAAK6KDePjvMbsG",
  "key16": "3KBvtsiByNtmom1H9yFC6873RCUSZ3B95fUHGbKQqp4zfs7PQpZcySTUnW9u9zmTpXzxeLY9txC6U64EkhKv1uNk",
  "key17": "21kMTPTeZjWpPDHKJcMyWvyuPYXFV5khBPJ8MfzEfVHBnQFxDbHVPRGKQBrd59PmH8SyfYiUYeiAjRNGsBDtSp6i",
  "key18": "3TKEUdPh6yuSPhvuN9RxufDpgD8Zex66BbDJMBaojbRyEmykT42vmxHwbAjbZs6XS9dZWRHbsdxCn8EJ8BtBFg6m",
  "key19": "2QVnf6fS27ZSp8dgwrAcEkJ73ZzDcrrTCrNukrjeLTKogpvzeodWkTNGgFU4sbpUjgFSPjCrA6tKaQuMZJrhurke",
  "key20": "4k9zESckAShFWQ2ZKQxLjhyUoutUDX7iZ2S2Kwu3qG3kjXwz45Ye6ZPcVUepFX3XEXeV6zZ56FTf95uQhdRmGpsA",
  "key21": "5SnC6N8Xmz79u3673yaAcANq8Uq8YEGXHCQXRaoLZF78xpnL69En68VFr7qrPQp7uvyVpFdsDtb2gW2Nt8EJeyCj",
  "key22": "TovBet6qc4zjcKRnwymDyY2F4w55kQUThj16jH1unfsAjdXmB1UNfCc67WTG1pTbQuk8GrF67DBPaNfuhhSzpUW",
  "key23": "3acB7JKWh44t1Lq123DY81Khz8dJG2rgrMoyMSEVFYW4tQfVeEoPc9ejNMnebYuKLJpG3ubrjYRsr4W3dFdyYZyN",
  "key24": "51rr8vCEm4SLt3VHy2rBQk5r5fGC2QhkKgiMtj8TDQeHyYJAs1d64AnKxXpyHUyW4P48oV9niVtAwb7aZeHuAJ8r",
  "key25": "3tCr2WNLV4LH1etTS8z7CeVbEzesDegE4xoer46V8CiQ5K5GubAVjobkW6GJMYNnG288MsNguNxfh6oAG7L46is9",
  "key26": "3ZopqodVgLYsxGvQr1vSQbF3Q4HYWv1SkduJiXHjy7iBw5SvL9s4mXonstwwukBy3Avi7bJui34f2kGUHqaRxkd3",
  "key27": "tUEFRpoaAsVo66xmkQmnuyUGhdiix8pq4V8SYoLUkZXAEteRuA8PWj4A6cF7jECsdG5uJRdKBBvavGabPiBTTqw",
  "key28": "cpggtcABC545P4M2LYnnYzgpRodZKzLZ8hxcew62xjqACtNxb7QgBSeZHzsz4QjhPHMmwvmdqfZnVwP8zv5AFjD",
  "key29": "2WDzJEKNGk364EAK7ERePs4r9umCyK9Z6JKnuUs7UAVbpJLqDrthqTF9RkRv1ALpFFBbBKbcWNgrX4m8xL4ghfyi",
  "key30": "5ebtcFjpkXx3w2jqzdALKQj6RLuQPAhmDUmAoKH3q7mybyopLzeHa9NWTgu729LB7Avwfn2aAqBmfoqkGHUZq7ix",
  "key31": "44sN1JwRXDrVygVikP4PHM2qRH5TC7D7sDgx6wKkYVTpUjCVNVNSH15miXJx5VhRQqavd2ZQNAcQzncTBUqK2dC4",
  "key32": "U1acYEhrUmnqf1XzbVVAhYRkMs3ajLimv2CRfjhie8Sj84gUMZ9CcSuGMeutPoFDm2SNVWuK73vh2NnT5RhML1E",
  "key33": "KZUZ9RGw1cJrk8tWugEAz2nCLqdGzWEcFd64nDSDAPao324YQiTwKTMGxQKvE4Z3tooTMaMnxqYdoJagbUsJZ66",
  "key34": "2sCX3JA244pfkzACqUjo9DKjHY7aVvMXV2tZXX4Bm8W9gM5zZWLrjwhsdkqFRYARiRrQZ9kSPnazpPmwwRJCkc7i",
  "key35": "5tZwusccvRof4KGgsUdgE1wqafiSP1snmeE4BDwmsVUxXHC3G2Jp5GY2n1TyComy2K3tFa9kbdTW9vCYMCsYXTTS",
  "key36": "5VLBzy6Eph4y7w2r3ZnkVsBRKwq46ZYgVemem8gEKWzHJvSrCjmAR8oeKLW7noRz2UgBbNnK6uc5VBi311MjFMfe",
  "key37": "38g5xkg8ht92V1ELKfFpfpwB5e1mSKdB8Dd4331A7AKK2cpXcmTH74KMaRHAN66eqGxmVZ1mRUVSRKbXrhEwwGfV",
  "key38": "29XqVR1Xut4gP7riYYiNrUAPdpDonTWjfG6U1Makuwan44wzXkXWop4zz7pZkzof6gEfCDTTcrBxFYDwekSMMJYg",
  "key39": "4Qo6Ypk6AWi4ZDfQxc6mtupx6jWgu7bHQnjEkHgZhNDPC2Yo7xFkozV5gZPHkaSvYSiS8jV9Mtdz7hHQ8QzaQrmy",
  "key40": "3hAtuJRzSuNzNvZXE7VZrvzbjVHNzMRtsMzPhF1FYMyngNkBGqFZyXSoVPcjk8xuR452Wfwtd6akbmFR6ycy3KSX",
  "key41": "3So27DZPZxWZY1NBqcqsJk4czQTafXCCRJFdS32sZPdoxeUiEngJVEBHtWdNGikuiVz1GBApuaP7SB7Ki3u9GAhS",
  "key42": "24njyiYTr1u4HHFPwmpVyt1sUwoHZtirpzwqtcDc2c92o3xA4PtDVvTPKHC41MzU85qxH3t4qZHrB82Vpm7t43JF"
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
