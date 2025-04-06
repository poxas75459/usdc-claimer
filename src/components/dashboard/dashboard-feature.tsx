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
    "3fGr1GAi1JfiWqxB8Xiq2Scf8ukxmjgrb58wdRmpaEgapXGrWs9HJrbHZbs3tvSiccU1Jf5Q1zFwqm2xE2Psrbs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4BpG2Vuwryp9P2XvY49hMVrzEqXnP17uPvor3Y747ktW4LWrCzr4J2F6y8KWcwZdqHkjeL3sM5JVhP9yzZtp4X",
  "key1": "3KFUfC4XTv1scp7yxEWaa1VjcY1uwM5AxFAiXmR4mHT3FtEPqAp9XGrSVx5Mdx9HHpn2r535MHsG7uXaz7sqZQ1p",
  "key2": "3U96Gb4mowAdXaPEdXx5WkhHhvcRCbqumPbT6bBRCbjdu5KH55Kv4hDNJnABrcdWiQyCbdA3eYKX5rMUA39N8aEQ",
  "key3": "5qm3czqeqSGzJE78cUZSoz6ooShQis57QWAc81yeoG2mDS3tMu2HZwa4uyRZ6qcfWVzwdmuGQtbkGvoCWnf8tfeS",
  "key4": "4qZ8F5oq8LXSCHZyGpcfhAW368tJnms3ETQsS17qayyHr1zgFPViudHHG674nVCmVqcPYSYJekpCxTpJgshs8Cud",
  "key5": "5mesGynAcEqR5ychc2XnhEmAtXUxuzRCM53TcrBaWWEJLNHoTJKZkjX2NHzYmcn2mruYzjBiC7WiXjGGwA9Atmjn",
  "key6": "25QhgByJw9MZZerqFGvbCSqxz4uB3MQR3KdXNwFe3mToPRRY5gjz9ZmMNdhvVaVVVR65fd3LdsrMkdsvthjUdWvW",
  "key7": "5ogrqcoztBZ9TQXFSnVKFCHm9z6zv35ojsy9nSQJ8V8NogagadvAiZnxcCSDFoqCM8JL36QrXjVd6bsXVScxZrDn",
  "key8": "3HMUWJd1Q1dS6ocobX1NXrHsbq9ZnJVdLmHwg9LCAKGaUH4XRBMLN2U9ECVq9jsjkbp6qXPCrkpdxkYUaN8Y6tgg",
  "key9": "5nYuLAjG52aqFJKVqu4cwYTGSHwaQ7EZbNUqhE399cDKZ9hVtiXv3ijpTng3eUrj9tkWRMz2p7jcWWuE4esRGz3m",
  "key10": "3Z9YqFfJcUyAUNGW1DaFGFjkffEsQpJhi5QpBbVKUYPVFFQyLcrNTpG7YCE6aPx9ZT2aZYXhceENiPiKMWU7SFQd",
  "key11": "CLgMKSDLP3yT1LVN33BqrkdoW62P7Drjf5Fi71bf12XLJ7ZhCkk7ePU8pkZGBkyEejn86ixkcFf7Et9VPuGTzdJ",
  "key12": "4L3NshTtq8Wy7bymJTf5jJzHyGe7Adp6oGy2wYTbLDfmgsURs18nUXB8ZwmYruRWRaaho6SQkWaUJin3Podt9WVu",
  "key13": "4bZQiR4bHUNQB32qPoZKhJ429CUQUFedMs8hsToKNTmUn66UuBAKzsnhLa1qZP7P8m7NexeTNFPY1Kub2fjHBNTW",
  "key14": "4duvuwHoECAmRdTmMHtLy1XkQtSDA93bijErJp2dcKsmgHnioTM3gjKPEeupqGwPhaDgN5LuhLnbXwp3aoQgaXgg",
  "key15": "5q6KtzkRErtgiXMwvzSAtDfS88r9tJXgavt7bUVn6NUNmCkxZrEbJCt1NYoED6aHYS2ak4UhBQp3grX2kZhnByRz",
  "key16": "5ejwHV7gMRPdWVjEgqVyg5FWR3q8CmeHJYx46U355bg59Wj1SBFvoyWy2Din9qq9yXzi48dRfNteyrgUQKwHVgXS",
  "key17": "3AUYVBdRaCzq5tJbAfbDVQkf4Hmy757ypLdeTmob5MW3iCTECCY3kfNLWVQd8ayEsqenx6egcSxzmFmAtHjnvHwS",
  "key18": "5FQ7rAZpuyTwrCkCaJNrc7Y9ns1oXAdSKRdF3NiEZdpqmTjMPJAKMmRSiLbD9cq3bk87m3MMcAZBJLsR6puPqmfV",
  "key19": "5F7Px8uVWR8Xiasu7iawfWRwmmRupRehPuzwyb17Zs1avo87JTWQiNCZVYMCcdtnRNPUsZnR5e8CxVVaDXCTw2yC",
  "key20": "UDukD4i3bGXHgRFh1S7wCPpqd2jnKvp9dREgBmHPgYs8AB8Eqa4Jov964h74UZWt9WfVoSmNGr65fSch1hiBz6A",
  "key21": "5ThFcFHtA1L73NQWkxDdUKvscRFN2FfAskBKkh5R52RX6Lxr8DcZ1ww16zhqknqKuR8KaJqmuA1W6f3RS2devcej",
  "key22": "4jfyR79uzWttWANZmTnjkAi2DPNRUt79cunvvxTJx8djcAdZhDyCX321EL8A6R6ZxJRrVe2A55NFFUAmuiA6zsH3",
  "key23": "5qRGstEXjWFS84YYN8G5iAP63qLZKkEcMBoE5ALRCqV5N4nTu5XSPrqi8yNurYp5mbeBnEQWNGoZJ2sTGkDsWvta",
  "key24": "2AhwbLUckXNqHFDnA5uFy53a9YaMJwY92SQhB46tyNpHNoAZj5BXDXm7SrZeodKTAqR5MjCXp3hpXiUumvCS91jn",
  "key25": "5LJyq8mHtbWL958kGSxyUpVAZVGruaEt25QdddndVtyFjUFvib1akrKqKVJWuKqvtzWg1jMxSHRmXxNf3R5hqYfP",
  "key26": "33hbAFQeNTcHSkrZ3jbczQmc2qteXZocZEbvh4KuYjwMw8wpsngX5y2mJatMy1ThBuCjWMYwY3D5UCZWh9YNZaWA",
  "key27": "2k2ABBRjxDkSx3oedzSAX2fiTPmTZJYeZbi9eW2EJYuxkfB8PB9DjzLLMQdgkUrbiGAobbFhtgRqMYpNFgXztSN9",
  "key28": "4vCbgVHnHyunQxdbWbqdsvHdGqdEa1yieGbsMAFPUzPbnu6jWYh6qeJ9UX9u7U4ARUo5YDzKickSSg1H3EFRydcF",
  "key29": "4qkqfhPVxfkDFSkCp8UCYX32cz8niCyGYGvrqKqVCCPkbHgiEM7ZwQXZ5tRJH2MXj4ve9JX2LWBVYEwn8jpH2q1f"
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
