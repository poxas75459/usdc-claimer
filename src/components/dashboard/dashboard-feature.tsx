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
    "2wAbPk8kZFSmB5cmzen7Y8sqvX3R4qFzH5scS3wZZCYfvnLjBzhaytH7mmkZc5rs6QUd3EpxnzUTnVmbxX8ototG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1DSCvoWrgM1cJCpSCtUxJRCGF9c4JnZeCdrquna5wTf8PUXt7rwMELMjZNQAq2BtLzMn6p6Gnz84R6eXaT4cdQ",
  "key1": "4aiUAwjPinw1bmxLvuFzmuhBGiM9azx9nDTnk5hUqQrti2RzvTTCxtU6w419Sb2ciKY3Ugud6Q3Mn2knTmNUTRa8",
  "key2": "4y8red812b6j3V6XGSejGGc2raJkJ9rMYnmCfvH2SNozRtwhnXUqmoPS4XudYy33frdqxcHudmicJ9JVKst3aWjo",
  "key3": "2x4gtC18Ev1hes5xrHLfjXNrGybWY74dzwUmwHX64m85nmvLCxRomyy3JduCKaTxsczKEjSS7dHGDuVm6DW1QteC",
  "key4": "3BnPkuvusv2UGTV2cTC5qbq9BuaVUxvrF3RW26L5ZSU4ce3oyHgvj7TpP7gMGtqnjEYt5pp943Rm4HZhPspfp4k",
  "key5": "5uTGbsH67bk822zUVB7RVuCPTx5ConBy6BnomEbHzNpaRyprTsbf3nijnm2y6to1tpwjDdvP16CqJ8eaFVWhNm7",
  "key6": "5G4ELkp8QxLEaGZKFRfRKUGZm5o15CbAVHEDqEG4N2NCBSghgMwX2FWqyEXQhr3G64QyWyMugz5Y9BCC797DiE5U",
  "key7": "jTquBWJY51euoR1G7JovZtG7fPEZ6waA3p5aAzQrsuYThnVxFpMecaqRw4SDTsCZPTADeW8MUmzDuiqh2WFvTD8",
  "key8": "3LLnGzKcg3w4Dz3mbSjvd1kmUAuuciVU2ckCuRRFzrN9Q4Qg6XdLqzqrRm5ibFXibrKfDKXCYaUHRCcf4Wa52oyD",
  "key9": "3gdT9eJfHi84Sgi24BXQSKbMrhxLDAWPLKhHp6L7Mm4k61aDLMe3vNSHsEyur7Shko5hpCW3AvkWzzKDMoCT6ZBq",
  "key10": "4oK6fQX8gbiNzeJB9Y4SVYwkoRxNQPVjNz6tYEdHyKhPnkSDyUNcqyVeAoLhjoyXqDxDyMzbnQsiebPxDDLCtYEE",
  "key11": "3ERdP9VwQj6k7etFvzadt1u8TZST7KwfW2EzhEMjWEMhXKKS9UCYZENjQXHqLoqwWzcUTFiuQcpgGTAwgRbVtCCP",
  "key12": "zpokhwQR3WijDB2p3Y9KqzXZDoQjBn8sU5oqsTFevpvusBZFmHCfTcWdZhpJsCXoYnuQvmuq859WKTruJPREQr6",
  "key13": "5qVS4SB5BrUYNJMNPgPtMyMRFwq5tGst7dBSTWUsDhE2W8iZYbUfTEDcfMVMqhTpeLaLDKxBK3wdYto8QdHizHqp",
  "key14": "5Vnw3vqDE4anRhs84kDQHG58RvF6fLutSbVyaa288TD7jhDMiTWzHUNHru8QUyEp6fVmLPW8niNRvFfDwuPZw3wT",
  "key15": "3BgTeEFyQ8w6LA9wdChSyPiVgFzusDbkkSnBifkinCZeu7AxFaVFeFZoFu49TVRGxRMv41rdFfP47cDPc1uf9iou",
  "key16": "22YvKASedHD7d3oojREVhmQ3XEK1NpppagbHNTfxY3hRxMbqi6qxJpRgxNAHnXFfvgKR4zPcZP2fpivixBTmN3KJ",
  "key17": "4yNw4piD7rYne8kBxuwsdfzdeAYvWWkkfyfTD7P2tWFY3KE2k8MCNnQLfk74EVyunRkouXUb6NBw7FXsmsmzEfAZ",
  "key18": "eGJj1gACmUaJ1CotYS3UAwWZrHkd75gYWi12CKikHrThNpTQE713jfdnGfaH4JJ1eY69cqNDLBBq3X7YvzZFp4j",
  "key19": "A9dqUgokxRNAShB2yMbhp8dG8RZTg59WtZDc1jiZoPsezFqetPyJC8KymGNoPmvL3qqbM8waCCvjSG2Ac4CLtuE",
  "key20": "WZWuaQ94i8eiHBdGiDQFLZwMUcYV4ydxnhDzV7wQcXub9aii3kQa61Jsmof7J2BsunV3Cghxw8Dyf6SKfqRyFDF",
  "key21": "2gEUTwCcj6wrJbDYuG97AqosVE8fbVi1KaDTwX4uwUT7y7SmeNhv4PFEprEtRchUuWzSzcLFGKb4bDFbUYwkMvdC",
  "key22": "2iF8GVhvi3dBNryKZD1hwpFHJgERh5T8vRm9qHxTnmhQpSLDixisx8NPzneJ14KcF8H21R7gY74ftMF1vFRG6AzC",
  "key23": "4YtJwRYpw2nc9JRb7uxh4Yh7toietBaWzV15yAWBezHDYUn7NKc5ybBMttH4izNQkVTiGAVwD2Y9hsMfdXatsoAY",
  "key24": "5j7KwARiM4QcnZrB3i21jk4t2ateQrV54EL7soAEYEVu1TEjXC2UgRWE27v6K999z3TsByVY4Yjdh4xgBAEABpfB",
  "key25": "3MbWsum8agmHyHtAvMpjqVZXfithc1pRVpreTwknnKrYVmPB8zvharoewnZ3o149k2kz6svwB9cJREXgok4ichZ8",
  "key26": "xzcUWpTRRX4CwaqdvhymUcRTSFVzcHtgtiJdb828mzoSwH1YetGDCThJha4hMg3XFHuzY3AioEvwQ3vYtwrLXhi",
  "key27": "4yj5NmWYziJJ8esLjyj5NjgZpJwuuuft1ARKjDjWffRyubWxMydCTXZnkegA6yr1CzuUddXTSjy6D2FVjhLGC4Nc",
  "key28": "4xfUbKXom3XrKhvQMzr5gkAgXqooJMdAPSZCVtqe4ro6zfhVsto3guWSCEDUpNqsTqv61E5E1ippCXehtGrejgy5",
  "key29": "4HwFf4qq3w5HRtk7zD9hXsj9M3qKToyPvFzQ1KSzZZEGRT8G74UtfV95iNiJodixbFWNnWRnRmb52ZHgRc9EU7nr",
  "key30": "2dVvEDLNbAM74XJgDUcs8YHmVa5QiBJqCU5CiQX2aouBcBv89jVCfR7hggbCnyDSaoT2sRt14gxbXAYs3sNFQpo",
  "key31": "2DAwyiT4o8wAnip5qnHhHcepXbUSKy6z9ubJVyQ3LbQDV3gGSdqyPNhA9RoqppyerYFMsxLvGW9iBDbUJLswsyS6",
  "key32": "GeerHPDpxCV1XoTZa9jKw94cjXVErUKDPVPY2n5MaBQDFJWJaH5j4CvcBvRbedNofV3DvTrDe26pBjR4gytB9op",
  "key33": "5icuBb4b7SrPp4dGSbNyBw6DfPJfuc3NEbky36HsFPMNCktupY5KBEThiWXRCeo5LbUdudsmkHr6eBmV6c449sYS",
  "key34": "4wkL825sn1gYCMdNWyVhsTSV72UWihMQTWVnciAxk27Qn67KfquTmvn77x5VWLmBEuWHEF5fLtkoouF8bmUHJbSs",
  "key35": "2kM7uPWviN1M15ft22CxK9fYkkTZLvDBXnbPwY6VG5kubdZRCVv6SHxnmjs4hTFVCpajp93tJRFUBcGiaLgMZ2N4",
  "key36": "4mRQkj5VVzZF1dzd9hLEnBQuh32GpBhWcaZZqKwGLSGtrWt4rgr3Qk3AeAz29R42wa8FqrigKVtD7RQaJfVR1XXu",
  "key37": "3N4iSe5yY3QnXw1Yq7euZYg3szn2pqstopt7GUm35fYDNfjQTE17ZALG9FjzvoCJszpHSagMkDA9SSMdPxtiUCDf",
  "key38": "2xCWvLWkT9HJNL5wbQtFkckkzGfmPGw2o1rsUnvAzP6zevfLiEYqJDTpSmkrevgkoavcFfe9CCSzGcU89LcY8KZT",
  "key39": "5jhiKZHMLc3HC1bEKEsg4k72Wmup38QPTEe8AGq54q9ii4eTkAKn4YLZKbYJU5HBWCzrstADYEDafaEfnKdBX5xm",
  "key40": "2bgrWmWUbiPMsMNrW7T9G3eQ3B7noMig5sY5d23nTobhvwDdtGFiiXXNXt13jz8UnbfqhBPoyJobTmgG7pwevyBw",
  "key41": "5Zwog5twgm8c8Nx8oWYAsRB8jdeNf89NvLrqKrG3NTY4VfExrUZ9rpxtNL4XCEipM8xkTGwRBPCnPa6s7Vxyv2EA",
  "key42": "5GS6z75n2Y5xkr11jgTXoaKFtxhgcz6JkXSHHt2bCz7BAk7GzZttRgTTY79TiLeMKHzzteidAXqEX1MqYU7SyMup",
  "key43": "WsKwLi76WmHxoAXA2jgdRQ4BZQtQZjPjvrtvGT3zwzxfgmTk1q9gyh9BPyo5iZhQ45VLrWSrtVK8ypgHEenY8Jk",
  "key44": "5WVnDTMw9149LGTtT2ido9s1FFnUzJsdAKxu5rXuAMe1cajKxrme5wMs2ezM3SX88924CDbt2vmuBjbuiGaSu4hK",
  "key45": "4PL1doBzRf34sAzSvufpXF6Rfqityfye8HLJMmd6BYCahpAAU4D4XpGQ5mmc3dpVEFjzKbefpUsyFHcPa2CJEvUt",
  "key46": "4W2KgwLxCRKfcKgngRemWaDvFgg6QU7zMBPXUsLE1nSFVpKHKr95ktuB89uocTSYkgJfc7ADwLRsT8iTCcKf7Seu",
  "key47": "4Dvu3Lhe3Fu1acD7iFPNSzxFbWdPUzKQb3y2n3rScYDZjjkEzoYN6ZpJK3CgFh4wF9pNF7XTJj6a4w265yxtCqdp"
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
