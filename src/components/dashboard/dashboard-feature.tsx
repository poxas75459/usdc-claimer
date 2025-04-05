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
    "4FE8PNYVotG81SKQaYXeE1qxxeCNSUDZVGoXGUnCLTxnLEQYmke5wokjU2JEyqQs2nJk3QVmvLFNWW7GoSnCamUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZRdsKwtV9NTW6imkY87fLzqqJzvEdSP1RnE4yWqbLsLZe3JrCcSvXFdfZ6pgkUxMB7wGV1rLKTUwQeRMtsxz4o",
  "key1": "24wqKtvqhsibPYN58YXWmsKma5WycDzK3HcXY8Cih2MmeJxaqgJSb5RsZUhsxebRdV3m2JxyPiJ2HRg4qQBxZmVA",
  "key2": "3F8jkEcYWGmj6BmTN9K4DsVC7rLogJqSiPVwm3voDcncMvdZaREb22UoThp23enuDSYwE8QqXjFKW4TmZyWVWYXV",
  "key3": "4kUxZwcAuVdL9Zbk62VXYCdgbsmCcgZmr7PzkSfkMcuoFqZbkh5xQu9RGQ9y8Wm5vjCqQoZMukhvmZahJvotsG35",
  "key4": "5GMHABa9qZ9yrq7weyaLxunN1Z9zKFut9N1HFWZyjX7o839ypyp8m2nJQpE2BEXL4TsCfSsuLCbxmxcaeM2H9472",
  "key5": "4FkL9VF2JHzQ5ZXqgH2N6z4X8YiAe5bPtFj8JEr6PjyoWfRaoWCQAsSrEzbM9dr4LhMjbVbZKfvoWyK9npQZRgTA",
  "key6": "3p1on3NU4ZSjW4wUPKMtiCSVyvmnC2qurvLGVbWEebwqn46ANqKX4aJikNm9quDBiLAzs4ZTwCi9bZNXCGHQZsyD",
  "key7": "2nRybyrf7FREjb1vupRW1N5aZoBWYyAHNtbFH3cKx6uQGLtg5DSBQSbZabAVumi85CprodcwTUQGHuSMGdTQaJby",
  "key8": "4cnQ967rw9kyy2fnbHxFbC8QUFyaNvF8aRuDDUkdtmdkzWLkLHgX3UpTv9Qj2aJJeBY5v5Tv9Zn89abzqWEBMcf7",
  "key9": "3FNUjw3zWhFn4mWpn72bYu6b9sH1tpopsb6mw4fVRYzM6gXZi9npw1sHWsdK1VkjoRxCqRSTmm5CA7yytXtuxgfu",
  "key10": "58chkGRYRDtf6557jUFcGzQgxhXhHiqZqHGKoiRaaXYyF8pYhK55rJGymyuiq1nbUi4TMQwSABpp1hT8HjDon8PP",
  "key11": "4GuPVTqK7PhhfQN3sjG2QX3GRmdtdkaFjxzeibboVWUrfmLAHohrnnzxuv8NaXwwJpbuRuU8jWYioyvPi4hFTPU6",
  "key12": "ezNN7h1p9BB3SLfTsEFKntnjGs7ZBLTkgXdAhcGac2gUNDRimcaDFnCpNTaex1Eb1A1371PL1oL48ktriVj2dig",
  "key13": "Nzgm4R2nEQgWhHPB8BXxENQXCBoJjNc3Kp1w4hTUau8r3KhRZBNx78R3CKs6XWi6Sqo8kE2CFB4csYZj2PbPFuY",
  "key14": "3Xj1cY9dZcech3TeBcakJvCFqnGbZJB4v1UosaqdsRRxYYgcMo5LbSjrCYVU9Wtnx4mVPHwidLPLX79utDpuJkFB",
  "key15": "2pqbXKg9Y3mr4uBZCKHLhSZPz2qPtRc1qYCgkS9t3jx3FVXuySmYo6MgHtnnFNkDvevFqj6YefzUZaWX1ZGQfMnG",
  "key16": "5h8Tf1qqApodYzyiWtYyhkrh89b5zzMvKuiu9McyCqRFvkx9GzKohYt1cLKLxs8bNLZAz1v6tigwgd5VMSQudr6i",
  "key17": "2Qf5Ed2h8es8u9VuFXxenK4CBQmzeJVEt2Gui5gvxq2PoKnF9YvD7Kg1i2U6HWq8YodzRY8YYGM3Zv4LGsANTyBR",
  "key18": "5odx3xtQJ98Wv7d3n633mKiVPBcgZ7HCwSrgyyKvuUza8XJUrTY5VbnRKJGoEhU2dktdyysnZq1bQ7nsDRYf3zzR",
  "key19": "3txkrnm6bEGTAqZweCo5CehxR4KzxBt87SjK6cjQ94ETJr52y6Hbqk4VMJGtkpnUd6G2Mo7qz3dzkCARKVpfk1SD",
  "key20": "2aCAz28N6U7AodH59Gfy5Z7oKfyLybWqFx6ddpa6XPwoWwknysKEnUxcsgYrC8PMH41JiBzx29FjxDBx13UcbH8w",
  "key21": "2gzfqJJkTgkJxE7aAWrJoukR3pihUvHxGPZH9B9Zz7zKcq3dDkjJzXPVVMnMfzcKX8cBxqgrg34zZh9W7xLQf1Uq",
  "key22": "4SPeaPZUSUN5eiTriWSjSeHR6Ckk9qnqydL2banrm2tLYWZ2taqKqVcEasCGCrWsHY9Vjk5ZRbj3o45tiJCb9L7n",
  "key23": "2rNLGvK8duXW5RV4kv9HjPhLP7y4X2bjRCSEyMfDpjy7vYS1rcBgpE4P789E9dfvbJjBPFup7NJB6bdNec71QK22",
  "key24": "2euumg4CaeMj3ZZbZ9GnEwDPBZkLztrqKCtY5AVS9eoAFujyAGrfuGfdcvEQoQLCCHq4ZRjeXUkcZAjXtvj3MyVR",
  "key25": "AjeiaL4ctGuC467tqGiSkGzbyAUSfVsmkGqHJ5L9jY3VUrmP7RVJJFaNig9jEBF82WSCbzbzSnwa5qBefTnzj17",
  "key26": "3dZFFfXPhVyjS8G6m5q7swhkMweauHVa7LP6KKfZTVnJ9CPv47EpiyXRWUUvEe19Kz4psjEQczUKhGTsYyQ6q34y",
  "key27": "wGFXhShd7i4wQT1MCPJHLJeuK1xZvShdfCdsDRopKhmnfMp6hNEGpdswSXKGd8zT37gt2e1cQ9sHMbTKYvS8y7L",
  "key28": "4SSTv3CXoAXmRWSfbUT54YZYk3H2QiVHDPPFNF8LLTyYARB1MEwaaDA3wee8KQRrChhfScBicL15UKNvywe9DFH6",
  "key29": "2x3PmKGwoutZwXQHptKJ4iSvVn8Dg9zdYi9QzyJJvpx9h6iaYMfC4ZjabqjbndYeCt3x6i2W4Pf5dF11DgP36ADi",
  "key30": "5fa98cnbNZpvdWjL3s3A28JPK88jnGMtPLzvwxqWqFyfFyYnbuXEsrasJ14ufx5hNAMLAYiiAqyX2rBL9QAqvuzW",
  "key31": "5YYffL1Sx3F2FAUKRjwEwXqSC6cnGG5rHo5WpSDiCgawy5B1PK5J8Sq8EsUJHbwUeuHugbu3CYuyy6RhFXyYt44b",
  "key32": "3HHMG2X9d6juSqKf1VNR8r1LNu8GJqQ4k1RYKKafdnpFowg4a7Z7trpZUiNR8mcrU87RxQTXYXGiwDNMYLrB2Tqb",
  "key33": "52A1TLeTY4Uy2tMeAyKBYMzo7UP49FbPPJu3bS4Qjv8xLRYc7QXUg6cd1EG19JvZY3M6tm3jyGJAfZuuP4mfnFkA",
  "key34": "2wuAd6m6yrq81YeBSmWrRVR4jXJmkv7eZ5S3JF7WzhiHbaDacFTH2sVyeKgcdTqd4MjhKqbGYJ7y7vVmq3joJTG1",
  "key35": "5NLSnVgsHRBRPUTRVUVu4KkituPk18h8u5Nrxo5iLZHL2eSZZkbLWxUXkaJtwYFnv3rNCkGjJJydAMWYjzjs6zPA",
  "key36": "2MfK6w8UnUGypLwKLjieDrP2SdNXYuk8HkK4G4hJC2PXiw3sryPQ7tGXoqzzrB5qSTWqMcqfTemBuQ27pNSDX97L",
  "key37": "5bdkAGSgMJQ9g684M1cLFEF1cLxnfscrJTa4RemS4Hd35ykFQqXEJeLsMKyAW2NUBuR5qLEmyEiESY4ceibtyp1Y",
  "key38": "3tdksSuSiM6vkJtqeVVC36hGsAx2fcp7pSVkqPkcSHTmfTK6bmGywdz2TxRgUH5biKM3xaYotTVvXbeNsrah3vcw",
  "key39": "3Wnj6R8JbtsKD6V2bCQ92Wx5p4ak6XSYUHWXUxxUajkA4z8MkPSyMZZiMFybqgabZPjWKYktKegYmaJZcAqkU7SA",
  "key40": "2sedthgJwEvN5j9mjGC7q52oMzif6AoZKt6eD39nGXx1xELNwSc7wZhp2RJaLDDuw1FG26oGz1Q8ASeZHFreavWv",
  "key41": "3ycArQXiVQ9R9a15n7qfGE5xwuo3wKX6ahf7XNmjMrY6G2uwH71bYVePSu3PYzEJCoVVZ4rfcJHKnyiZFSWtPmnr",
  "key42": "4J8nrEG4g3qDpsJX54ofqcUD4UREEnJ6tpErs3pKPNehQsTxjRBpcTCJGPRVTu66CVwLccMNsrn9TuSxfPXy5oMb",
  "key43": "2KwhdMZHGYakuAxUPnvykrcaTzwvrjM4DZDdnGv5aXRcDepcvJsYC7nm9yaZkVLPeWo5XqoeuVyWhQhzDVJBqBvX",
  "key44": "33HaLQUmWcxJduKZmoYNJYMXgxABcERFLQZPX7KFR8U9FZrJ8GU2rgjFNyPoDs3WcBco8qhvm1RDYAQ1UyCBXpzt",
  "key45": "4KgGaG5n61fMeCRqmXoDC9zTw7xWqWi9rUhmMUtwVNXoEyNfdWRY9Mj6UZuQtVkTxybbeseB9VC4m5xiqEeVvoft"
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
