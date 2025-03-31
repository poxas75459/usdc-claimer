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
    "4NBmEfeCvCwN8RoB37PWTGSbCRBTix2Lk67cob8F9NLmopoXPG8U5d7VgGD1HdHMsyXfy3AEo4gVCXh3Eooc5yCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59nMa2ztH4ArdWTbbUD6HcNkz83E5xrQT3viDVbtD4MRsxfFQFjWZQLf44WUcR4hhchgYqvtgK4fWgFjp2VkBZwT",
  "key1": "4cgWioDdFgJNktnUedygtJHbtgJ5zp1MM7R1YzBUFvmA4NjAGBXxYCmh2tgpRF5p3qmKp7CiZqzjAwFcJjismAUp",
  "key2": "irqspDeW73TRscvPyX7Zu58wnqtakdAvfENMWu7tvsAUEkN17pYsLydiiWkrsrYmxmC8L4ZbecG283hjE5SAxy7",
  "key3": "jUeYgTAV8EBCzfuX4en6tJEeB5FZ1CcnhYBbo5C47PAT5wHD6c712iC4rZA6SU5HYPrjhE5Gi82AawUh95V99Hb",
  "key4": "4Aah5VsEsziVo4LK1fR8SCJhtKGJpQRCSikrju3vLkCnQHqPegzMWWb1eTAzPg7kFfkWm93ZEdXec659EpYBxP7x",
  "key5": "5bns1SCskHTipsZYW8rLdyUghqQEAHDRnjELv84zn6rZaryVHkibuXnjm4Sa2iE3BadZJvBqv64ppRXw42BUKnm2",
  "key6": "371tfPcgYjLgVJUT2p3nmXGnu4m7wkTu87QrjgdqbFU8f1usA2EUSY7KJm2EAWNAs2bGZGDhZkAnP1RtuBfEeGxv",
  "key7": "28WMgrVZ51yoDNVtZKNLvPRhoDywtwJpcxnBF3TAq78pB67Rqyv64Vru369DppYn9t3Vn7RLUbgbDzsFsfRzT8VL",
  "key8": "J9sY21tp5NdcZjqdhX5WrFGj9syfzoUx6tw3qf5Qo8qncyLCXNdcJjnZ5GD6yB6h7ov4AicSrhjf8dtsRr8CnUE",
  "key9": "EPqYhUFrsTEmJaUqPmiSmGXnjornyF5S4bbYybgaGdzk1yqpqSMk4LQt8zcVjv2LizjY2NkWYhVm9kQusPV4Kg4",
  "key10": "KcH7AWvgyYQ66eqPSsiJ6Xqk42bdhcQp36bRpGJ2TqtMZt5KZKT8zWn8pucy1BTqb7hLdAthpnhANftnTXqLWHf",
  "key11": "2PGpctnUVLaLpkm14WXF1i3YWS3E7HSiCAYWgmAmXwinujSp7T1EvYbTq32Sqc77KXX8yJaBbsozK86J8CYMqL2N",
  "key12": "5frz44NbyosFvFMNitHHgYyQGogCqoxwagB51QowZjh8w6sr7iMcyisZM2H5WvWdLCod2JhcaxuZmvkhfepVXjeB",
  "key13": "4nay1MZmcvbZuLpGYGiGimjjWE16yLyAC4EbN7WdKnpbVGSEk7fX4gRB623cn5uSmuNHRGb6VSidUnWFrePGYQ9H",
  "key14": "uQAg9a75UxRnwWKWrmboFvVdrymTaGQEqvnSTNm9H3hPEYb5kihNdd5MojtZutethfiJgDwJcfrDstCCG5vEpqB",
  "key15": "59gUvBupBiTGRvgQBkqeWksMJUKEZ1pbUFCuvu36RSXxi2xX6mYpLnmfkZ7s3eNctTTZ3uuUkquCuG68q4wtyRbU",
  "key16": "3UjH69EGEcXdLJhuAgwzoUvx8SJhni7QnEYnLsHJPvYnsmHfPJyjdYZcrjSn1gGy2JiGFG9DGM2RqgBQnnE8BGR3",
  "key17": "21w9UekmcDxUcPRLKs8R1pET8Wvb4b3h8v1zoRVdMzc61i7cEDKFefPtfVLurBtQgr1ednBgxq3jYSAbiQhh4YQZ",
  "key18": "5t2QhyzAgJiZRkPMYVy2Ggw8eu8TWKWwXRJKigqMakQqZpVkjcpvoU1qRGmoZuAfcXtQ1qitZVnycYJRUYetaCQr",
  "key19": "3tVXNjkBMasQWk5gJM8MBEA5dGKk7jNVfBQC34E9oT5C51VhcjZhPkVnSLEGuAwVq1FPxQ3hixce9a9vy6YRsBxw",
  "key20": "2zXzG2JmWvp3Mzn1QQGg5buThhPmwXqe1QKegK9mrR4QXMpt2sRexUMn4zmMfbdzxCpofDeDv5vHv5kv1fnpXA9C",
  "key21": "5LdfS1zXRJa3ahsWFpgp2AjqvUmbBepNHHJr47LtctaeLa1ePVvigACWEJBtBMCk5YScfSffDQBsLZX6EkNKCB2j",
  "key22": "sbnHnjYaczScBMep5urQFknxBJsQ2d5d6qsTVqJqAVJEFfbxtgiEME9hxM6zuADEoMBdKHeG1S1Bgkih76wrodr",
  "key23": "RpejMZSd2VvGa5pv65fGBRqA9JTMqkZ1ENR3Q2MjPNTgbZyfnn3pGcrYPzi5N9DGFh4TSiw7a6qNmYtcV3DNKYi",
  "key24": "4FYDBGZRMZbQGNeyeoBS5J1UHy3GkHnD5A51spnFnXN81wkZweLXsY6JiNjeM1kkD4HtS7fQ7wdEfMTqApJte5Cs",
  "key25": "29SjeooHVBNeyTqZeBu8VrCrBJM4YrrZx5xcZK7sx7AVH3wvcqzQpe3DopMzEz4iEDn9xczLYxk6svd48z7KYeX1",
  "key26": "37Gjd5cGPUcP94BWx8nTZavdoAX7ANwkUu3CGzF6t1pXiRU6jHSthAo7JWmHWwByLqzZzbgw8sbMa29V3PM76U1v",
  "key27": "32F4JwUPdHfxpdBvVBKx88kk8RH5ffep1DZpeH3Mu5NwtX81s8xMTJjTq69jNdzHoUrFFHWiD7JPYcJZ1dsmFjVh",
  "key28": "2tMKx6inSfkyMsWzi2AuqR13dGojk8cqRAKbLN8pT2Yz3t6rdmDGuyvnFJNwMih9GrGjx6MCBQEF2UXacE9WNn1J",
  "key29": "4oRu5DqwEb3jprPAwGN7NCL9myve5GYknFBmN7YJMHEV1CR8AT3cL6D4tuV4nKz7bSqDF8YuSoBN5WF5mviYQ6tn",
  "key30": "27tSRgB6A8HfTScpkZxNexqQRPi6J5a55fo39qhQ5roCxY4SSfonNYEA6MQt5gs1XefN5rpmvmwqdrdwK7RRgWpN",
  "key31": "2KVbhU5K2jxTdo3frnrt4y5JaR3nRFWgswYjPjcSkDUmWCQTChC8FkazhC5jg9dfW52jafb9XJVnQfpCaCo7ybfF",
  "key32": "2rbz6VvygSCf8YhenarGaCDbqE8KRQkMGbEx8XD9upguLfSByNhidyk9ZgizCWa7PRFHBAPLiu3FyJhbBZ4t8NjP",
  "key33": "394eLY6vTCYUdfJD5druXNuJ1Tzq2vzWFig4PLNanm9i3p6AHEA6FKbFNV3gk3APZ2D1gLqsdNgjP97L222aeCV7",
  "key34": "2kVoqbBfJSijs6VMbdF32TS3fv4pCtXRDfXzmCkoESiKhXVkeQa6RSueCp97vrGAxrNNDdafYA4VVHYzGHP5SRUi"
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
