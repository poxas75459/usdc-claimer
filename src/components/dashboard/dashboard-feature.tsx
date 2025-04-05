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
    "5mTU5BRhCPR9uhEMFQoCpGBbSRsVSEGD6wx5zhjwZm15avmiTLzaRBBEBXudXom7mLB2ZD6YjCmKFsGc5KvmrQBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgyxWdCqXHVFxUsUMoH8bz9Tsu4arSjLNFhkJXQ4yErpBA9ME8Vf5nXP5SpsuyaHQ9eGYu2sM2a8abdB4sbCRcy",
  "key1": "3mvKHtxn69Se7PJHQSiQisjLFEVwuNUcfspo89raXof2PGfUAntGCdXsSmTe9e4MddsbDGYxUHY1pAMqFNf5yfe9",
  "key2": "4tHxuEe1b9tNKJyCreptfbjwyAk9v7GspvN3vakQK6bZBv1MAd3MZe5qSADgQ7PAe3xEkMP5MtKmRhQsodwrJrMD",
  "key3": "3M1eB8KDY1aFiCmGL98f5aCC9TnHK8y9ixxNXchXvAAnRGzBcmuRnAAm1jXRR5Yr6L5E9wfFQhNQs2hw6TN8vpnf",
  "key4": "4a6xmZjh183JM4WqsXVQMByRpphjjvjM2vXcYPCfstLG8BEQA3Paw3TLqhMLGbVFo4FsXxjYDmjMCQt6fEsQUShx",
  "key5": "2WvptW6dpi1f6NJLxGyhoQ6YmfSboKJdpf9nq5aoLsXChmT8YopZyV3WDxtD3kAfTH4ZMYiLc2SjjaeWqkAUgMs",
  "key6": "4fJk3c74TgVxR7jF5XucgYWv96PphWbkaLeV4mEZ1ahbDoVkQucwmMpm2hTCE3KhFhZpsWTYj9sUEq5QF6Hmvwp5",
  "key7": "5LRRa599dAcCfaSRHRUU61HyRkEkZB97LwFYQbCLALNiSNApn27rMr4SqX4SUw54Qz1EnhdQG4muqQCbzZwSVTFr",
  "key8": "4hFwPQTUcd7QfZmDd4P2mmPSTmNqoRrLJeQwL5sVnSNXZUVPJwjrde5cJe7q7edfRKYMMDbLkqmrLNPjeaXw5PZ6",
  "key9": "2DXq3qyQq3DxPwZRZNs3Q8hfVRvZhT6sdtrAwsP4WZTW8b33qprXPSusiSnnNQ8dgxKabN9AjSNafQrkPTygbD5G",
  "key10": "39EgAVZyhSdCVs419TARKYLVeqbRcgkmZJ72a9tcnXfNQxePUFRGjQuaKH6pTBZ1HiX325sSjSQCV4ZP2n9CDVxk",
  "key11": "EJL9JqUse3Bj5XBPeUxEwTQwSFLKEKu5fRhz6oL8bs9vnAu3Apgoudqz4QSPGSRCptBe3reuRFg4ZKBRjk3Fsac",
  "key12": "56r99U4QthWjKTFrkNRdAEDwnu4s1LqRPdDjuJ1Z6Q4tk6kdzhWrTntX2vgTTQGiyv7H4ZbhLuGChoZSLvZvNynn",
  "key13": "3RafiJLbRuVD8MLDoPKdTFSS565kLi2e5eJNvF716xqUJFQ6u5drNB4HePVTYHXZu6BrBq1wgq7hNnkiSjdQ1AHe",
  "key14": "4y29Dz9wYCkucxKN8ADWmCrxBSpRNJwqsmKsjuLp5Gh4uVbSNc1EDDimcUwFdP3XtJvzQvTnK3xtYjmRooEEEv5F",
  "key15": "4vjJn6Li2YWvjo9Q73oW5im7yNMowGuPRUKuNLBcpZK5szTWYmiouDNHq8jd9rdu2U84VC4TjtTkX3M3qsUz2KJN",
  "key16": "2TsaJ6U9RgjukQQQ2QiqeNgz7uFEoiUezKyiNsPZKEDcfe9B7WxopSKL6ppFRJkPpt76Kw5GZtHhJ5NTUCQLcUba",
  "key17": "55bJRin5jnBKHpAbjKKG1W2JrN9UpoPVxBi6eZGxkTpfwjwnUCdMigSFT29mWNJK8KxVRKLWsJD3iLrXqz5JtdWq",
  "key18": "5Ux9MQEvwDquSQAhhTXRhSAKv9UKWo3xBNBRbSSFMMk6hHQ8dFentd1FjKJKKGBWGLCdQDr3DsXEGEezsQ5ECWQq",
  "key19": "3KWwgtQr6UbMS8BpQ2fYADNZqHCc47pLNU1CfggFp2gHrxjb1G6Gz4fRZv2m5tabu7K3nwHBGKdDp7m6EPZAJB6N",
  "key20": "3rQzTd8FAQA81LC6oXpJvrw7WhMn6p516VtrsaPmZDRA5brBmgnBiVEfS3gDSrDqN5FeK9TG2E3awLh63wn5hYwP",
  "key21": "3maPzZFAXVp6k8fyVqTZPjGaaU3g3pSfMmioq949gXmatj1r3qaA8rgENTYiiyxst8gmZidrxJHWDb4bLrVjFTGJ",
  "key22": "37oofoqpYWV6FyeiNJA77YWscfhAQ6aJMdsUNPQGdu9bFNZr7qDhCtr83eRNmbUSWYcjbELwcpJ6fnZyeLDjnjLf",
  "key23": "41zQPpL8anCiqHoRFXhsY7PgzWLB17nAuwjtfjUNsNqRjdmk4NorH6sKot1nzowh4bvNaey2YSs181Ta5HsewnRo",
  "key24": "2M9oy9B1cbMM6vxRvHkbjz6itu4K2vYmZCm2GUMkqZgqNmYu659uCowBpG7uj2V4QwWmc6qccX9PH5bPiw96NMdm",
  "key25": "2b2N1UGNwnEd1CFbgb3tjJZU1bcHzXTzBSPRfGmraEqqXzcbhX2yWoAMjkshx7cqAKYzQikrtBAPwxi1neopF5nt",
  "key26": "DhXQSkd6PtvCKYGZb4oauB1U1GpkwRBqaQYgfPnNVGqATDUc3PtpN662DiU5d1wM2GB2njXbEvHfLjtofBXV3VB",
  "key27": "4rrw8KhTHRRaNaQkSbhtcfqWfH6AhjzhEp4AH8uBfjR9EJg9CGASWfVtLKZiDg8pcMDpeW31tZoLndxBZJ3ovUBd",
  "key28": "575dZiQB6wzPsMtvaHMvSZGQH7wi2APtv1GQotyWo2CQFeT3Pn7HazXPEV6e7ZydS5sxdaEnzVdiSsgPF5tFAjzm",
  "key29": "371zCZ3UoK7HBsdLayNpJCx5i6rvzxSkRhVPyqG1gvGiYTSi5795ir1Qws9PDad5uSeyfhSTcsQCk3MnvAyzMxB5",
  "key30": "39oh34j93Qj2DbL3ejUhVGsR2WdmLVfn47fxA5eXk9bcjG4WeQDyVhX7P97KnJNobZKjx9qmdnxRmBtRULvk9ua9",
  "key31": "4wAeL4tC1omcHMWVWjMyTUG5nLptLPq2GbegeeGUQ1PgKSoDffrSpGBoxSLy4YKpvCM2Tc2PSUyk6kw7153FpDwM",
  "key32": "2nCRom97c68nasmATA1znZMwvfjfymXaf65FpGMDHvbC2H3sAHvty7bjcoTrsBdCXo4jcWLHLB5rKmecrWgGun1A",
  "key33": "4W62nUMK9YRsWMESmkey2xVWZMkrTsByccy1LEAEES13EoppuyxQRrqb2TWqFahqMxsjXhrZvwzuibkH98Wz7znG",
  "key34": "4snEta98cKFph4ANKyLzkDuAsxint1dD7qcZvV5oHTVqw3hYJerMexTBnFAYHvyn1sZu8aspUHK7WMTisjbHTw1f",
  "key35": "4FXsbtVg4WXKSZg9T9qrc5uqH16JpdJ3GV3vSTyX9EXKmzF2fy94Csj3MxfYAAAE6Jq2f896DAj7Ej7hSWWN99ty",
  "key36": "3BTuVTGBTcfHuZJvm73KTModHQmFtVA9Bqd64T4XHrSLkngZseAuw3JP75eootH44bQUZmDZigWHcMeMtsPB5QP9",
  "key37": "1SiHwwEY3b2W6Lke4PfbLCb7FqBEn8bikvhzuz5yLY6d9sPnL3MeQ9qypAZRrG52kt31Et85JJsGmUetatA6Qpy",
  "key38": "4gh9HHejth6jzwF9ymn32qQ3KeCyFbckC651fFPQA8vvv3Tqf9BzBiwbFAKByAuqnZVh365TJTBcGc9z9o4NTjQB",
  "key39": "5tHoDnYCrqHgQ4TMVWqRCiFyHMxmWX5nMidHN8gyHnNKYrJRHXCAQgDjSEb7pSnsWnAcm984DPZP68MRRcKRS3Sh",
  "key40": "5fEKNTsN4EU8DeBRMQ1ygdKd3m8EwXVNPzrYWnPcswqsKtDf787Muod71CHYy4ME8NEm9WGCReCwZhfwBBGRMRkS",
  "key41": "66H5ckh31Ct4kir1myLoafmVWpAiX7XPjrj3RbvE3jpptdBMHW313q3TgsPspUzDBVCmADGkTi8ZnCvenRTH168f",
  "key42": "nMkqY6XeoDDuVb6JqddYoWWXDHXGqgxuj6PuHD6TVh49TRm4ofEHTXyrzT5xNWWrkWWYfRz9cjywF1RXZnXTJQu",
  "key43": "2TpELqKZhkKKGCd2tGfb8PYGx1aNj3xhjxtvyhvzpVB6wYrAYtExaRC4NW5W6CBLDQFm1oDQS5naJ6drj7V2wvZh",
  "key44": "63ewgNgR1pteB9qu3yT1ic6iWNwb7owH65hmHpKbNwxrAKhSFo1LudkasdRfMjT45Dn67QktHyP3JVZeMMSoT383",
  "key45": "4GxJAM6kQNCFzfJn5UNQ3CKxJDxH2QfdJJJfHqfXiFNUsxWS2wCaUP6oCQjFmMAVQoxyJS851UQK643c2GrQrnnQ",
  "key46": "2ww2ZmcU4xwKZT8AF8wSLcAHvxaJm4qVJSE7WWs61ekdBLv57Rs3c6mN84ftyXi6UjSHTABGJmMmr1w2XsLKrZKM",
  "key47": "2ns9jZTvc3hup95rRawJF55NLK87SmbM9Ku9Mi1h8HPB7r5VzbEwRW7N1n7hiPJxxrNDsiv5LCYjY1caYSK74joE",
  "key48": "2zhQrD9CsJtemVSrWMDj54BxrXVqMG6usgMQhvHPRmBzvLRijbzuGNohtkpTtSfnCzaFsZdDP6AJcZMB5GSSHReP"
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
