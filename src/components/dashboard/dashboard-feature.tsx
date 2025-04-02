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
    "21GHAj4XehLGGMySSpor2h6wT8MSHWBW9KvrDkL2V4MeFjAjnaqGoqACuTVMpqPR37B5wRohssptco6WMX2YaqcK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nE85JuSJpR9ixVdVFQNQHZ3Vrn2EdSWWTRnjFpu3E3uKiigBfRRRiY4YNShokbkMq7ndXpD831pfnCwU9Kb1FxN",
  "key1": "5hf7hmpcxEXvKsgmPLMv5TkVx76KnkehoyBTVZF7qNK7v2S3Prs5juBoH4AuyL4jYa9X617kP6ZZhtGa5VzVmz4t",
  "key2": "2KBkedqUNcE8qcx1x97aXecgMu5Ax3w1xMwgQBhPBBbNs6dKStonDqPSLu1QWPJSc2CyYCBBdqPREnNMSQ49CPXx",
  "key3": "2gvBE5k7bvcq9QaFNaqTHS6XbGAZTCXMTFdaH35aUYge9uwjsHiEgfMmPbVAeki7pyVs5tKPN77nNUcXDEZ2W4E9",
  "key4": "fd8RB3gW7AbLPhnqaBmyRX34JNcEMVGbxJ7R8r4e7rigqYoAHrGk77LihNGzRVrzqyFeXdXYtknFitN1zui95GT",
  "key5": "2jETuch5RJ15s4hpyhvKF9WJMMVBx1pVajqNaTzuq28SjhX45JhmvxJxG2Pir94k1b6QYNfWvwSUipq1DfKeLFa2",
  "key6": "41SzxjBesLbKUV5NFjQbTxjru5tiAxaT5VLdtyAAs3oM7H7zdhrmNBDVJF9WYHcF8J9xJA5jLaSn8hPrVS4ThfCU",
  "key7": "2sgSkgB2ibJHa4fru3KLuG67ZSD4ry3karLCnUd9TQrknRQokHikr9JJqXrUfYmPQdtcr2UHx8FDmzHGbfF4oGEQ",
  "key8": "2nQHB2jJK5dxD9TLVL34NLfR274pd5V3BqeuB3tJ3qeQmvFYFdr3zYgpuZCnSJUdf8rAd1ZatYxAvuvnQMsUGVTM",
  "key9": "hWqczDpWyqm1gNhz7PZeqF5sKGuryHHxVmUdU3qLR8P2x9hVdbTtB7qDjYPvi3LA7rMscETRqMjfarRSkVtzLKr",
  "key10": "4q2VjQ9qoGY1nVKjuFXLo9iiVnDE46ATWrBaWh6cm84qtJSAumoSznbK2ME7Ady2yviMuyEA8woSbvA7wG8ga8h4",
  "key11": "4r8tGVbXP2Wt1tQLdGNPefYNWrWV2xCRUEtoJS6fhU2UUucR1od93FiyxV9k7kLgkvMeWFabF7U7yxvhkEZrDcHs",
  "key12": "2wdQpQ259X8e4MVs8thbrQAAmqGFxitSZGuEmNJyzVLYyWsTrxDRrCsCXSDuVwThqvhnHzFsvGe7dnPWJvf84k2L",
  "key13": "3azsqQKFVgZ8VcsZPPphs7pHDA13xtEnPYRTmwEWAHRafmPXrWHqD2yUif6cW9zLCD3MW3FPTTtypsjHLi48U42c",
  "key14": "5RyNHfnEFdQyWX3bsT35Q3ffTu3UuLwRahgufCqZSNzUvyV7L4MhPw3ZMDWTTqXsXk9xTvHJrBQoAYrPEG1cq4nS",
  "key15": "4v7iT1ELdt25TgDGMf58iwjxcNc4maAeXYxnvZVAFAeGFZw13keGsVqjcjGPdy31hNnbpdbD4pt49uL9PotBXSas",
  "key16": "3JauZyDX8Xkvz4zcJWuQpP5BTJQpErkvMHLWrXhBrrb8VYxf8CmE5AcRtc6Adeq35GFvzMKU8ViviZboNYtP52BJ",
  "key17": "4rQgbMftrVHPcA91ka33AGf6XvbLhu2ueLJeg9Er1sd1EWp37mtbfxrgeBmLjrKfBHUw7aDzR3TmYAAsMqfG3Wtw",
  "key18": "4zNhDqf5ArjpNvac6wCzc8CFHVogFmNPeNSfSpgvSshbNZpQA4hZwgNoaVcqzCAQeUCPZxB6QxVobsXac4RZJZXf",
  "key19": "eVntocA6hj2PCce8BHvYn2WeeBCPit8iKN8akUkWDUsPkmKMzfcdU6Yz4VzUbukkBZ8YMqRA8PKGLVCkWFbTtXp",
  "key20": "2qVnwEEdxkxAoaGSkAP1M98uEX8Z39naYTR48BKHU8LV26hoAmX8RMspoETVteTq4uewrbwrb9BhddBbsUpsCzcc",
  "key21": "4FSNxeQsCfwHKsphiTbaKoA7vQPXo6gVmWHwz66oMxyrC5u19ZHiDkrHWCDWZa3WRco29yTy6JabD98fSmPCXdtu",
  "key22": "2m5SUeFKJ4hWVNXhDwrf8pPjmayaXmJQv6EPUdnAM4gKMzHLgwtH4Yqk1YXQ9ek7Tw8ayuwaPsvVmtXtvjbZdvWY",
  "key23": "k1SYZ7DgHaMg9ADxmFkEa41KqJQXoRuLQ7C6YhsVDUdptVMr8mSoc6b7zdb2nqgYiQXB4oS8MQt2XBAk6SQVAdV",
  "key24": "3sQVfPsjgtZ98YfC1TCb7SVN4HmvExncbs15iASLBecrBKh8sAhzKWvkoPqyxqZwRnzD9mE62WDKnEfHD7YpaFMG",
  "key25": "2jLsB2rA2tpsd7xcZW6WfyoBTzqHJ39o3swZXSFkn4krrVWxMTnfCy6VL9GG4tAyGeP9iXJwtfSBmpTS2VrP3m5f",
  "key26": "5bxBsFKs2yxTWedW8VkWGEzjRtuxP5cBayiDj1ci6HJEmHv9nsQUPryh4wjLEvL3pzzf8o3YNHfVMh4kLVpedxv2",
  "key27": "2Z3KavxShAyvUgk2BQPJbcEFpdya6zjjz9KPvHMrMW9juMeg4sbtbfWbGoMvDmBn55wQsXoV9n8tnta5hL5tJWRx",
  "key28": "3aEpf5KCMccxLeoaNPvjqEiodpBRxGSJKFAPycpCRYNjowNSXTd469HG3iXpQSq7d2EHzpBCL9eQyGz3VBmGsvKy",
  "key29": "4XSDC7ipHZSm9PP1wsQ4MqTSLpyFDy5NK9Zzp3h5Euk3tVcYDEKV3C3zffT7K77U8RroXsCC2sBQQbm9okrkgY5f",
  "key30": "2rTH28HxAX7syxnNRw1FPLMeuQv26doExGQ1cbR5E5uvfggdALVuQeyeMULRqyQ6pmGamiuagN8TAohx7eHUV3A",
  "key31": "4Wg5iRcNA4AbpVsZoWbnbHHmWgVjXY3cPyGNDAQ2AjHLFvzNYAG2fN3iNNybufBwuLfnGMJ923LM9dytcXaa59Yi"
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
