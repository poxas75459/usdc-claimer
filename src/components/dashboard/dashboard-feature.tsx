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
    "2DxTDs31ePwmCgfeiTQyy42L2H7NdEuwZ5oNXsGML2NK9sMjsmTZkdKJC4KyL6QLE5CxytMrRq7j9EB4p6qxfaFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beKgr33Bbfri8LsavV3Vdfc6SARSuLWg7r799fzKLK9JSk9sKLqkVwxzD55ngQUx4Md9bDkXwWa5aTxf4whGR1Z",
  "key1": "5pMXgniPvmaSyNuqFRkZF1rwxtY2AjDvj4UAekrwdijANYLcJKGwhVMR85r7CYTeYELeZJMAB5n9EgW5h85Zo8H5",
  "key2": "5eR9z6wBLVij6bfAbnv4VKwmHyMmpAsTdh5MgDEN36VanSUsng2hthQgCtsq98eJ1iWMHD6TxuQzeaPu3GdRrNmX",
  "key3": "2M4mDr5U2SZG3ukzuqfx5Lg3oZjhNcMLpaNqYCcrneckziniqybSA9cX4jAF5u7M4ddag93wjMpVmwLjDViYM1sz",
  "key4": "2Mazqp7an48m1UxkYSRpWbUc4u3cWemquwc9SLbqSju6FK3ZSETuJUhrH8NybJPWFKcEyDfuS5P9xf6utngBN4NH",
  "key5": "3YgNxUQgx7wX5jAYVojRma6VNwa6iVYyAU1HynnHnCD2TfHuknyi3GZLNDFjQkUvKPqkeuiexdbZM6W7ut9aKQDL",
  "key6": "My5B7yuYAud6HMhU648iXmN3qTs2TPpU7TNacumjhdsveSsYHbgnEN6UcjMFEtwEKyQrXQjAeMZJLRkSs1h6H3y",
  "key7": "678NTavsSffwxKoSg9gwpF5eyfwhd3pfSw6YPb3qiLP5bnyvQEFqnddRe649G85B8ppfQYZB7uZLuxLsKrAFvHHh",
  "key8": "3ptUmFpnxZjeoykynAs2PhjbzAF4MCZvW4qbntjmNWqPahAMXBj1DagsgDAno6bxHH58Z3S1pvGNrvFUxiPPgFA8",
  "key9": "52kdmumoVcBKXw1jEC37t68mjkeU5SajY9mnRAJy8SJxo77svZDvSaTRSZZvysJPu5AtUwogDs7Bz7DPR4cQojsB",
  "key10": "3WibQjbYmnwLNfvS2pBHRQXcT1XjK7v8nmK6LjBgkg7PA7W55oB1pYHmfAVnB3xAPEQp1FauULZm1m1QUz48NtLa",
  "key11": "67DrbJfpYWEHL6x9rFTqyY1xzUDBwLZgNHtWTHu76WWYzR6UKiFwtMVBxbsdsQLHxcKfzazuv2xGruMPPRMNeit5",
  "key12": "415YgF9x9vPS9X2AQaRrbnwck7bHrRpTSQR47uCXJC2AkHJWkRDUqEbvxq6g5tNKncdZCk5K79X7tU8WCaBydc7J",
  "key13": "35M5hkdWvVae1YH6r8TpoZHHRquV4jyEd7m5WwZRx5rZxrf9rq3vmSMHSvW2EcPVtZSwAfPmiNuVo2SyfZHsRCT3",
  "key14": "7R6AnGygUK784Tkh9f47zdKkTUBcDxWpaUAzXfjDrnxxfKRunNBqc5g6ZukjY5SyyDVuLv23engTzY3KKvYgGLk",
  "key15": "2x1w76wqEh7HwVc9AbXstA3xFrkU6JZFVZMm5uYry2N5VQKDmVMkq9xZVwnS9Ag8vXXL1HKfUZS9caqiY5LW9cLx",
  "key16": "5ubMsBMsg2vykab3QMqGfNgvWbd7sFyTWB5rVCPnXK75ntaYMS9njVTxas5gcCM2oTf6E1Sr5DN1wAUp5uhDgMnL",
  "key17": "zovuuz8D36CiTurSgqm9cttfoXCHd4z2Tde5FNjX9WfjVfH3gjZnioWRbE5wiKb55hibsHSjLxt5wfUvxhggAWt",
  "key18": "p45iNXRBvP4Gndvi29KgXJtrYBLqQNJpETfWMyyJkWNnLdkeCmmC7J1uKKCF3xpZ5HFJXNYY5FuWu5gERz1iGfZ",
  "key19": "6yHrBAujLFvCiKt6bjKbYTx5LNckTckwNznTR5QvggQATvU1kQTVv7zt3kznqALiPNwAxHDf8oqwCSptGGF6P4k",
  "key20": "4ErdhZsxnpYjBjvjY2tUbz8WENjqTPo7AwKKSWrMm5sc8nFnY28VaXrLN39TQKQdE6xg8HrneA1QgcoXuQ43Qr2Z",
  "key21": "4zE1zZ3kkFPT8iN2o3Lk2cc8ZNdTNtLHts623GpqTZMaLQ3pfDDN3YdEGGd2P1oc9NxL1w3QF6T9hQLLKyMCfF77",
  "key22": "sQDjbVPZG5QS9ADNvaXH4tC7iNNvAZ4aUTfLzp2382xD8jV5YYLypsPb3cvANdu2Tw4u5k9fsqzSGFgRrPXkxQz",
  "key23": "4f2Ja3rsYxXH8bqbZ9ESr9HBpSRk1jruZd1CQx5hu29NzTjHXj4jPNmquNrewBQ7nTQZ7Q24bCsWCvcR3vHesAHh",
  "key24": "5HXdSpDAJJqKjgYAWZp7jAR9PDJNpnQDNXLkU4z8mtCwwjorHQ1wChjRtvXm9Hnw7xdaGeACXbinauoy7r9iHe74",
  "key25": "2TKasWxGAQgXzmNc9zzCHKuyUfyXchLZPY4tcvRPZm3vvJNrTzxJR9oaSVL9Vsj5ozcMEh7YKBmFYXXjkviRBMUT",
  "key26": "sgxMcbsAFvRHD9sgafH244pmAjqSr3WStX5Z6MRM7ad5873Te7Ypga4sugkgMBJt6gBT9jvVZCB7QBsWV36KR6a",
  "key27": "4rSBe6rEEiCJRM1Z5xTgAdsyQ97UaVUoavJTSedkiFPs1SJ6ygZgp1VLhDMi98vpcac8MmaUhDfwAj6cXLeR2zjZ",
  "key28": "4QVapFDoVrANCEvMpLS9vi8LoUAWMKg2EGg4GFHvDENunKtTtqBZna9oUZuqFtPN35F1QBadqbrpTJykZM22Evea",
  "key29": "3A4t6KLZAJAgwG8B1iDDKURvv5MGsn16CSpk3XzBbKdCgRAwhdngmKFoXrU26G6MiwkdtLzzmrQqg12orrUNeq3W",
  "key30": "5tssMR8ytWyuTdnP7UpBsqwGZ96wM8zVsbmZJo16HiXrsQAvbjVDmm7V53CReRaacBjdzq3LYZoG43W8gepRfuvw",
  "key31": "281UVE3Wo9MqFSVzGsashDp3fCVK12DVgqr4tayu42WoseuJZf1gNvvDp7CnRTbSiFJ2umix75FeE62N81Fjf7qm",
  "key32": "73SsDAPS4HJEfNBe9UfzvCx9ap9bShsfwXA73wfE8eZbJSr7Q6PLb1tAajBJFogzGBBgE9QJuZmC9rXkkY9twyt",
  "key33": "67EJyYr7u3hQER59UWZ619qBvgu1cZjs9YVr5JmmBjVFijJht3XwYuZq5sYVgWPx4CAK5mXhtFfCLVrdLfAvQCYq",
  "key34": "2g8kUCtPhsHAPo4N6DVpjFsfP3xjjByjg8cc3qvswjgpnycKtE9cT6P195dn81WzM97oxsGpceRm5GaVKfchHRRR",
  "key35": "2hqXkDBrRYCDgXpBFWKcrtU9q4qZFx1R6MxcpB6w4K6LEP8awZVFL78ZenMKpSZDxgJYonXFLBQ8dAoS1kj9VmMn",
  "key36": "3GR67YuHKwkrLd1x1gB2nTQ4NpGAVqSPsT2ema1ZjVPHPzYZkTVLr9MBh3Kfb47qKVqNKLJmMStSgrcvFBAjrpp4",
  "key37": "3kHcfz6oVwjqwWeYXEE6k3FpMspBJ8pjE3Vg8WtNMU1qgHCzcSw7D1Kc3FurvQnZhnA89xs4pXH1Sx49eznxb2Kj",
  "key38": "2qkaAYAfsj6a1AzJR8jHRnaatFBST29Vk46WmvDnTCuCfXLTR7eHjWurpjjEoQUoJNUCvtmFTPGvz95j5gQgHh2t",
  "key39": "4LDvSEFf39BmGwqcsu2uGbn7tfcFexstHaQCteKLw1mRH9mHwPHFcNAVy8uG1bSGk6aLF65zzFEJ8pBhAGZL4wSX",
  "key40": "483ZPfu7godhwokT1J2WXseXEjy5L3LWKgq5ZdJp7B8HxAf9fTLCS6muYLgQkURKjVCMZnYpdiNRNkCE9wQ3YgCK",
  "key41": "4Sp6oPng6FNTAdHRCGs8ebr9qBPwFRd3Ds3kY7LMYCJBSSzxFhFCh1eiaZpUU2irFMmC97284Ydxjt7vAWDzoXmj"
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
