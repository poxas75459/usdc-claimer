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
    "4wdRCc4oitpqFn43Y45jWQYRD3gkzKpxMHb2WaMrjSHESeDJtjLxxBGXWiBs81RVrEivGxkvz5X7WnxB1Sv6o7tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "72jijnsihWvX6DD3UFb1aKtUEQ3XHYdrwfQ4nAutK9xHXrA2optdzUseRCLAudgTE8afgvoD1kiq72C9z9Db1vL",
  "key1": "2CjSRbuVf3ACdZTKXeK7k5CRDmdDBhu3LGsHya7ayfBjwNQtQYcWpNdsFeZhiuLFkK88LHhr5oSdfPF7PGoVadQp",
  "key2": "32J2DcFjybCZwWVFQdRWWgzt1qTe7WvpjV79CoaXHt3hC6Wi2TC4W3AJLDXxo4gboKvHqzvs8Xd6NDffwywUYMs9",
  "key3": "rX2zFP7eXbySnEHKKJ2j52HfBKBf7qC4DSotkoAQcS513wujjLay195BJXpuM3ygpZWzsKwadLp3piqrnGNRqQq",
  "key4": "2CsxCfD1bqnwWKfgFYie2hd2PAMAeCdKFq78sAMLKNEXSF9MdykcumwGCHyKetE82oYDG51AqApdmg4rRfR3ksdV",
  "key5": "2vhBYebQy15ispqHuyxugNnSGD1LhCj3yKQKNM4ETpX2PA7f7euBVirfVGU4EwjoMV6SouSikb3zo6RypjckPBVM",
  "key6": "4Z7eBUNPep9Yz5KRtmc1AAeUxMVpEg3kH6kuTigRz6qvLmraJCMwATAAptW5Tv4B52KggXEY7opjnoQHmopLALcz",
  "key7": "5BySLH5f2ndYjneK11gaErmo98H3BBitdRRJtZeXsNQ46TAc6nUv4vLU1KTaFqW8asv4jYcdiCXoUrsAVKkkHaR1",
  "key8": "5AqBMyn54CufeCP7FYrNmee2pSgMb4hMeUHMchrkfYgSkwrETvK8vAik7xytyLXqgD3UCtCcncUZZmXTTX7fj1PC",
  "key9": "4pVA2H3GRnBHy4xh86fqdyfG5dJ6ddpeZ539RdUrdhhSAN7Wfsrc8C4MTD8mHDXWFoBFUY7prRtq6qcvtvqsfekB",
  "key10": "zrthYf7qco3WvDq7epkiH86eB6gyjtZNYXmY2aucmVSqCotcfQomBGGxiRJGrjPsjqjBC9G4CoNvVoamfPR8cth",
  "key11": "TewX4mU9k3CB3129pQQxYbNAYG6kWoGyqLkNgznJNguagirYeB6myrb41JmCCXGPeTzgD4meipezkrW4wq5FrbL",
  "key12": "5p2o4wxj16R42MDzwcf6Qv5Cgdweh36tYZkj1bW2gv1ZmLDfaEH5ZpzTdBguL18Zu1WiyNHdMk2FbQ2dHxNAiQKU",
  "key13": "2fBC6RYjTSssgDzJxRzLUAxr5iNMBGhz8skCnqVfwqVPgGLVYQzjXSMfSuKVgXZbFuva5T73cMiJkdC5E1KjDYNE",
  "key14": "1hcFvfKj2RDXWhu8gfvwnVnRAHxEiEkZApWCg4jS4eRK6SRCbx7vweUWygzuq83yUsWiJtWi7VdkL3hEWAy3jDK",
  "key15": "4UB152izwfFuYH5yfFMnvWi4ULbRxnf19JLVXy3zEQPCs9MhbNpd1weuXBEkanvbbN4ZUrmRMtw5NA36psBkrNUh",
  "key16": "5sU3M1yD4dXZFVxi2UVjR4nP6MSgvkyTtLH8uvgAfaiaNRxMVZLD2pYaQAsfCzaq8oJHK1ewJf1aVUutodNYddHd",
  "key17": "37QppARbtgs58LGDWp8CiXdzXR5d9WcgUXPS877wn5beAGdF62dHJpcbiqzFDAqGyCKhV1gzk51vTptVpKZ4tiHD",
  "key18": "3ioQKWGTKenjFhovUkxMyCt1rCFWkMmP7cN9bewq4YYEfWhytLXtSNLK9iA3VfAisKZ3uQCVCtAwgeLrzUs5bCxX",
  "key19": "2DtvjkzEpwa8qMepNYfsPcPVkL4gpnUMPRu4KhEjCDrsGwUwmbYZkh9Uik4eLQx1dHvGVmTbVBbySzNtqHzyV7oN",
  "key20": "4jSeQGBfohmVYMUJ2Bs2gmrSQPU7ZWYjbqYp4TN6dgS5cVHc1aUyKguFtAVY4dsY9uDWg85tvCGvyVnPerGJzFLq",
  "key21": "2GJfdi9y8T3ekMKM9XxTzvnaXgQdQ4yGnraXyh5qeJokyewzTNR2XNFU4E1esdKjoYwJMgPbHSNq8y8dJsb2GwrC",
  "key22": "QvFtbhAu7TpjkTT9jxZfzUJFaqL6onNnkCVq2Sa2Z9rcqPaDi2rbD1MwqVDfwYsXMmiJU4EKP1Jj1oDEgdqMuwy",
  "key23": "2qg5tdTVWp5ikAiTH5dZbrWZe53PaAX5FJ5QyeUrCiBoH99dDrYRxKt5GWJ8x4nvwpxmZvVjupmmPdFD1mcUqdMK",
  "key24": "Ft8GQEjTgAxS7StW5KzfBwGMkR1nQMgJG4PaRf4Mcm8Js25KKfGToXhmGa3s8DN2U3KYrEFwEHjHoL9rNVpkxco",
  "key25": "4as6tzFnPEbToEMDU6uWTUybyMyCcWo3naEirV8tcRajhoq4gfyahG2tGvDj3m7AGGHxnBkqDcmNsdU2MqNBjvaJ",
  "key26": "5AKAcYWJyqzqDCdbq75RNypKxiFCKVFjny3sLqJKEJabpgyeJbmdWbgv9kUpPuLoxxZrvz5LGAZoTvp9cr9FPizM",
  "key27": "2z3vKxdupSs1h2hngnrMTt51jC6wHkcXU6t31EvVBxBCZmVrMzHzdEccPqNcaYGT4CyhxLvKyFozh1uiZpw8KxQk",
  "key28": "2VeZPTfmesDk4NkkcfwDh4QHedg3acxv7qm6NHvzTXQyyeunYTSTmVHDxBgFa5p4dbXu71BPXwKaK4nA9f2YReMd",
  "key29": "32kDNjg4x5feRYE4qm5kdD96SkLWFS6rg8CQ91MWeJnCZpm7GdHRxvtf8UXn7z3ydP6PwKPCakkBE39WnsDuoMzm",
  "key30": "Qh8iE5PEWDTNcsBQA9BmtvY6UYPfF9zLZqiSG4xV5PKsZ1VUHTsNYmoF362guVjuzVn485afRtkQvmYxCFNEk4c",
  "key31": "4sG2PBvtqQ97FWEfeLTuECipu5a4fpFZSPy7u5vhr2tc44rLFNDyGhqvaQVX7TeXYxjM7iP2StRpgmYJje5wUzbg",
  "key32": "zphfjkpUvgp93pCSw7q63DPqxaULFV4nw5dbvJyc3tvvGxF9rwWnEXZMfFQ96QMnQMzM7aAFCAx4nFZAaNkufgV",
  "key33": "4vcnU3Z1beqDybr7YShGL18FAQYayZhDscBvsdrceZ8MqjQoqJvNPSLqYuxVuwTa9uyRe1W1vvgZQxb2SeWc1T4Z",
  "key34": "5GsujeZeCMP4jgop2MZVG8Fw8AhmAAhnLiedr5EyaFjfnMXFVXk7cwcQApJxijmBqbsi6KenM2bqkHXaQMTF6tKQ",
  "key35": "2jfJePo65quVqPRGAXXjqJ2R97bYnAoDazXoyUKQwvM8XNjEdXbbjkSF83PKcmENkFGVzHbNZRYFAMiijKXarQKS",
  "key36": "4e9T6wppF9oHvAfY7oyVYYLfbUqAVuPeWZ6zvFH6ueZfP6TPDUbPYx6M2bHrpQ9HxZMSBHVrnb2eVSSnzd3o8hcv",
  "key37": "4148jFh8dz9sAzjQ543xj2Eed41iGNFtNzzoaurd9fKq1t9ELGpyEpC5pJVMvnfUZFWeMg5e2hjFDsvnvzQTXJeC",
  "key38": "3fK9m4C7CKCWdtT17KTBPQo6ZyGmfGJWWbf6JTveK9FR6CvHuRTznjCAphfYV9LpNTFCzenoxWyseGkogsLf29xB",
  "key39": "4iKcv2QUPGkwBxRJDjCgiosYLwwTQF7qDdydgDbCmKmWUuf3bvcLx7YEyQD1kCsSzVKYCyY8faxVj1Wkv4QYEszS",
  "key40": "2GVHvdH5wWgfY25dJWvKKBh8k6LaKo9ZywWwaLTLG6ZADikqobUToaKu7xVUnViTJ1ZLeKmvWFVeV2LWMxDDjo9a",
  "key41": "66fi2ixEzWC3wSoYMZeQrsH4ErHPY2tEjSwPRuyXxcetwc9CnakKhc97HKoZphMm4JmP22WTUVFz5P2JZ3Yhp2k1",
  "key42": "65TGaavCCErU6FYJjJhr87e9mPHQbz8renQKAGvdCMHdXksJNnSwTVkXXjPxwxcbqVvxHi4xF7hc7woamLDriHuz",
  "key43": "2GX4uSRmkkaRge6W88n9gKkzUKjkdi6t98VHMqCsuwE4AZbk91rzx7DH4BMZFa2A88oV9HXfv1szyAVSMRVH9DzD",
  "key44": "5Jv7BBe4nn4N1nos5rcRxVmtM3KZ9sXW6NcpcBfP77Uyv53AhKriy4fiVmKzwV3HGdfv9jrFqDb8T3PjQ1u4kCc1",
  "key45": "3vwgAfUrRKQrMsYiaWyKYJkuCc1brUJnXjsk5J2ufEPqpSR1T3d2qFQfrCt7w25eawqxmFaeg7TzP8h6ETGau6og",
  "key46": "4SebsMaGR2MkHjUPcUrM9vMbwLfpgo5u1RgURFQSRmTaqY97wR1hvNZgd6GC6MmxveHTFKAuDxR4rRgaETm1PwLW",
  "key47": "47GM87EDQHVnB7Ps3WwkooLB5JsXN4wwBUEXgEZLpK9GBPTmXdMNHxL6u4eE3dQZAuBur1yygeytjrgAf487phWd",
  "key48": "4Zm1DuKkfeqhKz4hMztZTAK3d7m16uKwobetYBHpJmKEkUtXbsbjx6xw52xWMoSSaTTajQLY7r7yuPiFYYAuwrUv",
  "key49": "4mF965cjEXW8WgGKhVwpDT1UExjzzfJeeuebxZftnWXmcef6HFrzATQ7c59646LUPCjFD7EPYyzN4JnY3onYMv81"
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
