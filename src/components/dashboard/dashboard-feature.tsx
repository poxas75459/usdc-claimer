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
    "3TJJvcmR8UCeofiJmq3swgUcPmn6aHgvNJ63xXYkuJBK1e5XexGiMWrx8N5JViuCKevVGxaNa9B52mKEzQ2ZH1u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JHeYDRQpMGep6XeYrZb2EUQABwXwmYkKz12sUbKU49s68KPkFpJKaWbzBXoA1nnih1bN1fAFAuGGDyRBU7Hzt8F",
  "key1": "aM9RzHT8uKmmVTGKLiqbHSZ4XhMNjZSgZ9uvBBYN4RgL1oJwXAfXXFdTVoP3zytYPKeRrTRMbNbhWtA2MhTXfPF",
  "key2": "3NpUcDBV8cg4AVMiKe9BQQnpnorpqECqvPp1J5sbPvpEFJZuDDoqN6MsCEZ3mxwCtUkdA4ydspVybNfF6Ve42fBb",
  "key3": "3LbBg2DcWw8PP73bPeeA9UZuxVy6RYf6PNVYdgtsdciLnC9aDhZ2zyh9TcJbc6XzFZhHMs93Rko4CHdnBGUigxG2",
  "key4": "52mtHfqyBC6apts18F37gnfZsbzwmuJ7veb12dVrVHBEm4ysvRoERsLptruewSaAbkHGei6tKauSMyHGy96AMmhN",
  "key5": "7k9VTuHcX19kN36YNvYtozFScnPm9ELQY5rSaBx1Vgj4tm9co3YDbkM46AjUBqgrK4T4L9qag9bmDfwD9KDSQ9e",
  "key6": "5T1WxD4YFoxmzNH49RF1U9yKtV9RVWjvFe5v372ARrAwW3BhFr9qqpm5Ttc2vG8hyCaUgqivpDFsrKZ9dvR5eT7U",
  "key7": "43TchiGcW6FFL3Q8kkZb55ptQusxMB13y2JLaLC52pLxhmwtNZXPiA7crJy4Fr2qTibkTgsnxcPR1pzBW3iovj71",
  "key8": "3DvnPyB4uhSKow5fHhStEJ1m7Z2dJjCsW4EYs8XS7PDCP7vabBWJuVueEo73jEJ6aLh7TQdoncxWQxWLo1mp7nhj",
  "key9": "45uC7CPAX4zUSGkouUJH1KXbkXiQQkeYcKt1BVVThbfUU498fs8ximrrQ5dLq1DvSMGNBCZ9rXVjzJ1tnY2FayW1",
  "key10": "3YADLDuvV8X75NAsgwSaEyZVoNCrzhujam5btW3f5xNdGJEiSR6kTstqVrCPfJ6gYvTjTExTb5YW19mAKks1wg3D",
  "key11": "4G5xfhWtPsDqGz7BYYKnRAFCAZqzSMfr7CJzjVZakRVQy68Muh52UqrQKaWhxFWu779ERx8V7i7i2KRL8vzuwGTG",
  "key12": "31neVTiweqpA1FShHcW2xHXqd3QsgkDowjRuVebHQAdrS9957p8xaFsHdCRtWLvRbHfhuqmuR45hi8oN8WmdPgU4",
  "key13": "2myt8LdNwZnku8owAuGNwA9ym43UrNzjZbW6u32NEhnpDRXsVXBh6s9zuqSnYYEnUmiH5iZ23UBqNXDAKZvkUX8b",
  "key14": "y8asSSpiz3Cs8kdDUmSBJXEm2pA33NZTY4efTTU6bHji7Yk6Lf85sE9wC1XR97UKUfb7YyZ76x5L8HDKUdXmjfm",
  "key15": "2W34KR85zKdmTLFdQmC8ifzg4hH4Djh5mNqShhg5REEdt1xnEAkwBa4Z1fC6fQ6kjXpiJ3MC6HW9659qceC4pprw",
  "key16": "4FnZZa3tY4CJ8whzucdAyK5NjhkjhBL3YoeG8vZHEoupUB36auDu3DkBoxVo6yYkeFxA8msxLRUD2eAiHBioBnVp",
  "key17": "HRs7BVyxhUxboaqeUK26iCsNMgADrn5wM2t3CYiHqKApyo17sUspAagZy89UZyaA3jJ9FQeL8D3jwZKNHBcXzHu",
  "key18": "5jeuWxbj2EtWki1DMKb14QDA93dKSrUFeyBQ4swb9ZmhUo8FcQ5Th1M1tb9yT8EHBJgUsxv8dYXhnYAEAqxUrFkm",
  "key19": "3FLaSJGc7A4BzCbMh1evUfe6QHzykEB7bVSYGnnPjryyBG3U3hhQ8RLpaiJqrziy9ynnMe4AiXmXCApzhop8fXoS",
  "key20": "mGS7nVzmA4i11cHRkSjtTqZGh83nqYRaqAU99kAFdraxWb4r5rKNGcQkrycU7oz1kU1RGWZHgxLvrb2TWPx4f2W",
  "key21": "2LvZ6iNCBVopz75oSYEyGaZnW4THdpAfpSbmaUk5Zd17M9sb9RM38mzcKo6728ygViB11MX5MZdzBCKHXdUQgqtK",
  "key22": "4efYxmfVN9PFZkKYAnCEQiFF5Y1y34DjsRijKfuoVUQPVVYDr6J3qRqmP1CuPHgjC4b4Btrg1Zzojye9PMRuojHj",
  "key23": "3xqEjDt6wSpEbsmAUAxc7mxxFDbisTKYxwohAczJ9u3Qz4Z3cDkknPbpj5iQEx7pPhm5CkYtw3XakVhknpty6pqs",
  "key24": "5Tnkg9uLjA4UYeFiPGNxKQMPPnDveiMt77RJ8gpYt4xe5K2U1ATMe7uoNTxvduhf9QkXR5HZPxbdzygjnq745LRV",
  "key25": "4jR8j3JGiAGETDHrqYZFS9xKNSHEWyhJpig4AbTsN6Z9tLhqCPCjkFj2i7pExNFLrDWVC4wFvKP5sJaaDKdfnN3h",
  "key26": "2USLBzjrdJcH4dsQfiou9VdRbKb9Lwzt3cdQLYtwTzkjpnLsukBwG9UYc15odysX4pFYbgr7w4S9XTPwqYB13ysW",
  "key27": "3XUrWdAHVGwdkthqb6Q59mCm6vEzJmE5bhTtiGPJngqB7YmuwbHmuBmEHPcTMADydow5YQkdYgCzzZggzAtV1rNS",
  "key28": "2yXuXg6r5id5TUGnSADBqYeT2aXBmoifJqtf7DqW2ya45GejhibkthhCkdVYqGzp4gpR3nqEse7PjoMAbo3vwpd6",
  "key29": "2GLrqWqgToHdq8nhP7hzo2HyWH3B69dH8xH1XYg6QgrdWiKEhma9T1BYE6crFVTp4kJ9iWNcJ5Y5XZmBUuZSc7GL",
  "key30": "5aT28PazsRgmHXquVWrZqhtJuVTHbeAihGPVQCx6uderTmfgyZt497Kf5FaBCbMJM6AK3dhPUsF6ghzfY83dUqCc",
  "key31": "25tUX14q5eJvrDYGoXkXqASPzP5f4UyKv8yNuvVJSdwf937tVzCFJ48XLYGPVcGMeJAbUNLTwQrBaN9szMFfSxS7",
  "key32": "23e6qU7pYvord8U8co6ypVCTSzKi2yEZsAZYCsdJyQLCW7bcVw8geyjWayyCHkKfrZNxs2yvzHhcL2EC97VmTdLL",
  "key33": "FwtoLK3aXpsyD81XHtTgnSZ4ZZ4FZNSgCh1CVRWbfdzRVDVv1aMsXKjrPaEfB5DqjrGzWDrXFV6N9oiU7hZfr2M",
  "key34": "5H4mUeNe45aPEYBNSSsBf9fWLm5bh9qcVqNTitoLkFSteJRHnufk38wdFeQ3HcuXt6xH1hpNpJsi2ezrVscknkg3",
  "key35": "3faUxqMWhVz4VUmZtf3k2LUawGMGJBDjhAohrYJdRi76QnYnFCU8xyu3WotCvN8NSak4UvcVpUMTCzpn29947TjY",
  "key36": "4tekouuesaPm7osTVL1DTb8cbHP4H2xnqPBgcYMFCGJ22cUQ1BSfDeRmY2CuusC6CQgyJEU3HMyv1KKhwFFkGZjp",
  "key37": "5dJeevXrc2SdLDKbo8YEhLSpfPZjJ3acy4A9YJM1qbQb9LGwYnhbWomzRBRwdJ3Y98Nx9pjkMMmUWhm7BswmKEMy",
  "key38": "5FfuTDQsUrjdyb9CLpLY5rHqmXjbipAaTfggqUqepFqSEWCLrfqaJ61LaUcmG1hKYeGB4WXfg6UWP1BCQf9xmFN",
  "key39": "7QRtJnnrYUWLYqpYRZkkGrASDQf5GKH9o4dHYF8iERDhMLEjU96juBVeyw5rj8QUdyKAeYKtZ9y8z1psiS9RDXk",
  "key40": "5iTok3vsHf5FjSySEKCRt379jDMkSB5g8a2Lk9168u56EG6XMVvmWTzC7GbLnKWMecbE33Ud9xFZnREShLDYsq3f",
  "key41": "yAxbF8BybzcNpXZNumse2pBUZDpXQtnXwCwnDAzbHJedmEfccWgbjPwrmSfnFehm8Y4smCp1A2NPiqvBaZPY1XT",
  "key42": "5t9wTcAjjQ2Wv6iQesNMmMRPjY8BJaouCiYv1zvKacr65EcKs1hS1US1F9AmJutcsYu4SpQX8FrKHCpoL4fCEbu3",
  "key43": "5DwYUEFVPYNN6utvvvDoCHuGD9qEB7zV5nbKLkewNRFFrHKnpt5bmje7eQFp2D4MR7koRSQAwkdYxUx8dJH26Rmh",
  "key44": "2DZ36JKfU8fyoEDNZaRmBt1JK1F7gXfaxfhXSpwgmqx4pvxobqUDTG7FQrSVHje6wvBr4g3G26wj6kVfhPx6zGaf",
  "key45": "WP2QggLkWVqEFf7TS4p56BD29vKcY1mAfQDneZt5MzMggMbSEVxAMb96ay8kK4bY3r8hDrjDZRPb4R9ynaBE3u4",
  "key46": "55UntnbeVMB48xKL7TsS174piqZqqz7SK7sDWt5hXmqdibyQKS7VA6NPojb2N5JxWVcUBgNZLdyf4zQtPRDRB76b"
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
