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
    "2NCg6nu9FKmFVsBTXRQhP3xrB3vhRXeZfL1F4r1aZ6464ygGg8MLCK2quVAFBrKajpcEapFeny5eLd5mp4DDzASN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FXfG1yhU6bnSN1YoY4DAMwxifM1WawGVkjtrUYUrsMwmijsh3ZWhWHGruwtHVAfAHcT5WTZhj1BZF4MfeZwRZh3",
  "key1": "3j5rwCcZJ61DH5Cw4kQvAe6buB2N2rudwtw44x75x6VKg5mBSqVZgQboF6EFCKoGhm99r4n5JgHPwyrSWCAs54BY",
  "key2": "4s1Hk5SMwWNx1aJv2NxPoD6V7SvxdR6w4B7nBX2z3Lcv4fexdPEV2pWzZuZTUqFyGFAgibjaYdyBqgeHEGAahvtF",
  "key3": "4uytsu9LHZSMFVgyUtnNSY2B7h5dyFuC4ktiRzzaoWVRTcbzR3JPcUjmkgN56LYaMc94mb4twUCJ6QVTySKfuSvL",
  "key4": "3vPhPgtRU7aJYCzJspr7k3JgtDuTXUMWo96jz6ebBtuVrfzV6XHcwmE9hkYNvDWi7Ssukuu2xCvncV7Cj3ZHMS4u",
  "key5": "4euTNugKaUXofj7oyXjLa3jDKnVzzY6X7BtpVsnMPjsW3TCjea1SNaJuDvxFYWFBzD5jB9pieJM4dartcNdpFSiJ",
  "key6": "2Xv7wfdzgEzBJoLfDyYV91885fwy8Lvfj3UKnsonDGx3DJzQqte3EhC46RPuc9JmW1EFJ2RMfuJKAziFWFzngtNR",
  "key7": "CMrJHSHozPSEKSbx2wuviVwvxMD3B1BBs74PAVAxywKseMUWYk78MhEsRMsHny4D79acgCjUbGa8C2nWE5AGknX",
  "key8": "2gTGXgzneeNgwRUjc1bCJqXEqeHMZCR7o7DGVnrXqm7FWjL3c4BF94eDg9v8Gv5WL7X4khz19TsCYabL5wZS78D4",
  "key9": "2fUXeKwF1qE7FXYBXVzbSZsDxaNivgcesvgNBNBwVic8y8eexXFWauPGwooevep7kwpG3BkoB4h5dPBchizJkoVR",
  "key10": "3K1GEnZB7JxyxEkr3vNwLyPQtTXZHXo63QnQ7iusjzd2sZMvoFQpF5yQg29ATiiWyJGhQVSKzmaFNWWWMvm6Rm3Y",
  "key11": "565eaH6NLpDuGTRY4yhNBH3j9Av7tCKTYe5zRSwxSXDPbKBH43iB1dQLNHckjXK7euS3uFseScG4HpeaaKoEuQa9",
  "key12": "2X9So4Np9xKgJUqJRaxUBnb8m1oQ8KUPe7AVkLKCMqvhgnajB7gmnHbe1BSzDqj8VoTbtXs53xQiXw1tYTmoahQV",
  "key13": "5j4mmV8xeymmovGiamM3R4dD2YgkTiwxJ4bN94E17s6SAMh6XsbH1wU11zLpgKTGEFtKK6HGxReuzaSwaBz4XWnf",
  "key14": "4b2uUnX5WAYvWpGzncYt3sj3iKibV5Rn1YWMjdiz5bcRkKk2TRHm7NzrNkNYo1e6a6Nmdp5hZ5ccG7FmtTRyxoL4",
  "key15": "3yZCN1F1XbSY1w2R1HGoi89o6skZMNj7WVqFC5GqBR9pnGwhGZVXLYEhPHiC8oA2Mr6oNReEgM82XJmtnqF5VoLW",
  "key16": "ok3dWGQv1PKb21NHMr1YXePSnLu3FfESSADnCDgzt1cuBzV6Uaa894o2NJSUpzCpaCDocn2SE7G5mdWHGATmrPS",
  "key17": "4VbGdWL6b46ftGfLsHX3BZdFHwHJvVGoDRAKNj9hhdusPRCQcRqy4kyvYHmVueCyohy2ErVSoZau1TMBBnbprhft",
  "key18": "2sZDzfJ4F1esbYi46nbmwreJVkCV7NwY8P1SNp8J7SdjdSn75TJoDYNygjf3JdiR4Mb8gxfDqBRWZTHx9U8Ksp9Y",
  "key19": "4a7wAANur1417dhbGiKWchCSyra8hvBAG3wJY9Z6LqddD3Eu7GfahHBtwgVK3SKtexzPbu4Nz4YzfFFUoBetvftf",
  "key20": "4Fk6vxKpK51cXUdEomzzLBBpb2j77JuXt8uD36gHNVxFuLUJ9BukdcDjYj2iHkTYH1rZ8PjHra7YGo3UkELuPdXo",
  "key21": "47Kp8ievkpmvtDeDsem3nKdiBe1z4TZhhE1HwPrtVGw4DTbpn46WQi5CPzgMwUHMYdt9SFEZcv9Dz17igHbTg12n",
  "key22": "3Ha5yQWLJqvhGiA7aTn85f5dguQPCLCjaYhHGzLptAdW99et6AT5esnsWXZrWgWDjC3tgpCQiTM4oWt8BkUWByTW",
  "key23": "3Dmp7vKfPCDcMPtKkbDNsZWDgyB314VJVPgou9jH9kbGXLq6Js6Hq48jWN4cdiM7uWHPJdb3KNTUq4oRrBgKJjKi",
  "key24": "rEqBpZkAVCKwzpF5K2UhAiWTMiWj7nxxacWnk1ygRRE2je5GkHPM9q9az4mzrX4agttBLudfWHEKrUib5DryNo1",
  "key25": "3Qnd6ntBQjrYhhtArfxqWJong6jMn4mDK7spqpzjV1z1J3QTmjDQy6Mmz2aKFKRXhMpCSHQmHcYPekU5MMVvPN4i",
  "key26": "2zwyTYdwLdZgx77y4DhkBF9qNiy7h8RHSsvpCu5tyascfSe4dmHCUVN1HAciG2AChHwpyNmgb5T9kCJ6s8ikWr1i"
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
