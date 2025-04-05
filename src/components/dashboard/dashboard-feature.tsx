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
    "5pGA5bBCio2ZitmkkAhhyFqBW9uaBn6F3dGFD7XiPeB4ypmb1jWfywYCD6ZTodtzLebrcdtjtH8M8foct9FosWEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NiwqYGwqmGMJybYfCBxMKVR1ceZmt5L6agZBCXfHYCXxn9NaUgfpZvQRdA5kZsNbfyzX6eSxmQDjUR9Nead47Kk",
  "key1": "2nbSRMiY558QkAqs2ywfpCFLg9uLzgrRLsp9yLvoJJJwNEA5aJCv4mFnL16n9wt1BKuCvpZympAS73KGXSaciCEv",
  "key2": "2so6zZQ7TJxCgvhGFMDvins2UtxDddvsvzCgvMUq4keWWbvGhthuuwL4Vf2Fqmz4wyTDpBiBa6yAWzXxPQnkKrPS",
  "key3": "34k39ucMGQBknZcAW2isoyT3ZeGghqZWeJS9tVLLDCyfChZSLMHxahZqdouaa8Tp8FsVBgsBotGgTurjwZLVjGXd",
  "key4": "3f5CFjG19mLRTNyakYp1kTuq34jm2e3yQwF3KjHfcwQrkHxh2P4DGZpCFXqKjN2aVoc6mKBmdGjoSyK21wFtNMuv",
  "key5": "4MwGob271AawL7pfKr8KFEgTQsiSDg4WhrN3x8x5uZswqVVwsLNsyfAp2C7796MBdocGs6jqa9TfQ1iHwuHEJw4o",
  "key6": "4nrvVKrDLaf9CbBRVvUZhq5TumWugQEb7unfxNhM8QyoPzQFo853cKitCLeGcgGVxc9zSzSwJRQXwXy3otVy2Tt8",
  "key7": "ZA4H7Zm9bfdx3Yq6K8cnuNT6vza5yDq4ewko6fnrHqbdXc4wqp2ztronmqhYeypGP1fhEPjrYBe4TbGxUSxSeLP",
  "key8": "4nK9XtMfPUwr6q7KuPFW9gJdTSDMiRxt4SnPUuL2bgsWeKVbtZNh7HUDTkAthLLXG4WZtc7ca3wdFjwq5Qxjdkix",
  "key9": "2m8fYLBfhDJ71mbnCw8H4a9jcjUfYMBf3yXomPzXVNqxKrmmFGftVxUw6Khf9Q4anqk58Jw3hpVxjczYwanm7SBc",
  "key10": "3QSvf8E7BABuKng3neoa7RDuXmxwNdnAsJiqMZJc2NMZwTsyB66CoeChyQWbUa35TSuZf2cXVXXE2g8PCWiUUseq",
  "key11": "hyzUkdiW3Cpyq22Mo72X7fHLg7PHrKk8M2rhQPfjpnkq7b3PpCpmf5zMoR8TmEqmRLQAbxTnJ3qyndfC3UwXd2a",
  "key12": "hBEUH4re9W525pzgcqXLXQTo1YAnK6yVyEugXQYdnPFqsH4ceiubQ4c7Z1VX8C8MRoRTyJybKX2EK1aLrLP6qPG",
  "key13": "2zA1HdxQBTQYYnasipBpgTPV2NiWpSU8GFxQVfuHydPVjq9WHWVvp4NV5KzNqxeuZAUrtoikjpY11dqDQpWwAcgb",
  "key14": "KSQvS1r93NKWqj755yJQchopPgNTL4B4vgrpwLwp8BoiJzjLzQa71QUmN9A7izFFWjBRyDeHTdSWKDDdkYjPuDi",
  "key15": "FVZRtqEe9dFYiS4EThMaSxwexzYuGqUwb3zhw1w2pfGf6PhnWNSzG4JXrVw8WoGS7Sj6JsQCNLkD8xXat14nZLa",
  "key16": "2KCQBdAoV4KehtNjuWaQYbt6y4nWtNqAQhmaXmGd9qTcB7qZPYrfLwUPuiGrMqK7qAYg5mAeCPGFjAFTENm6ob1e",
  "key17": "2tSew1JAoUSboJgyb4Gh9U7McawZjwzrL2Gj4WRA8tufQwZmVREwbuskW9sjqfHunVY3F85P7MHJ7bjv8DuAeJgk",
  "key18": "3cpiPK8TZbXhzLMP3tvX79rhEq3a79K6WgFtjN1hgJ3K2yQUzx4U6p1WWzyK7EPnAMQxmSbozYAWF27LEALMnfVr",
  "key19": "38bGK6bqKoE5S5XPoN1SjKFHi7YRnyoXWanKzTo8Vsdjih9HsYzj4iaCcp6aiKDC7vJBSfP3BqDA6qcNTG63M5Hu",
  "key20": "3KZXgorhRuBw3MpLcNxWLQ3tDMokxdMXDkDSASmwP8b9QKbVy8HEGqZGThXrxMfoY3BZKv1sjUpQCnpCY7pBxH3P",
  "key21": "2noFDedmPPmhNfkv2Vgo6PjJwuD25HdKH8opHoUhr3cHRqrzrwqzW8RGuiwajgDeybrb11K7mAYTHnK69PuRxwou",
  "key22": "3rbMcDJZCf2jodw9RrrKxSMH6NmvX9BeBpfdwzWGURE3jA5rSHZEvSnpRNpLUCwJwrtF7HuakdWYAna7k96nhCFr",
  "key23": "kAtK3gqo7fZeVJBaJaqoLDUCfF42piEYPu7Mh6FDugVnEhQXCbV7QkdhU9cu6JRdjEwant75fHuaxqkdkyeBVr3",
  "key24": "XBEbEVaQSsV7mcmEb6BNFqrk5aFmVnmLJfUs3h3Q2AX2VHmFAunxyn9BLgEFHwoxKQRQzAbYdLgpFRQ4Rtg9kWH",
  "key25": "5JkQyvDbXUwvE1HLTrCYBVH25TPqqjDnGe1MedKMAD3MxvEWzeqQ17MMcA2ERy9rhKoCzCdeNiNCfg1PPuQ99QMy",
  "key26": "4v3btWMGF4xjJF4UhUNbBGpoMSWdjfq4JXj9ifzmY8G9CcDKe3VvCUMsB2ReD1Vn1uw8owNrssbSvqVN18xBud2e",
  "key27": "2cq2LUdzRdDJwP4MiBsAvakeCJ6i1v4S5Wwx2rRZL59rfPFCjjqL5crtGqCZLoNhX2RT8qn42k2Bpg5d8aVJ8v58",
  "key28": "2nDE1TEDMHgnNirvfJCNF5bBdAiuKpFBJWsJ4md2DJb2hsULCj7F34gqJjTPzvDn73Prdk8Z1KipiPaMTUV9FKZD",
  "key29": "2EBtXEkH8SqAg6w5yz5GUnsGEnY24eMfDFqNdbHJAdTMGqEqjzFtJGKvYS7qiRyQmzfUK9wdmVNnWapCAXKmg15y",
  "key30": "3siv6eTdUnQLcPrqvn4mbFVd9CbUE52LmgJhG618zBhXHJ7niuDrtgUSp4vBAyKZ7LzeBq4qyeVH5znxm1zVVQqn",
  "key31": "3ZhkCTfeHshoHfuwA33dsFgYdihPjCr8oLuimWZLgL39rNsrRsReis4Z8PmnbJagdErcfD7Ux4H5mh76rXBmuX2f",
  "key32": "5oXD8Nnnmq9H477223PFmmuGdocT15uXeJdfqCdQTYFAjoZT3jDMDVcwKvFhyZA6UfioEd9Vc5CU2xP45eSqXbMF",
  "key33": "3fkpxPPu62w68gcLPtj5HrkveMP6CtCRBpAQDhqD3vYX5anxjTZVCNpVBwV4JckV9DBRL6hg3xr5AAe6P4qBWYHk",
  "key34": "2wTgjgDXJn5Xvym7Jp3zFj3XVvHgJVuzvzmE4Ciabca6Hkwq1oKRVt9jfFVVz1GwMKAwrTQvi29GawGVgLJFviX2",
  "key35": "3A7mCAJ8ra42wkJ4Ghr9f24kVQxFkLz8bFthJ6Li1Z5Nicp5FizNuiuyGYU5fd79jXWGebCzWvB7u4pVh2ZgGKvi",
  "key36": "5hnRxBd9o3uxhDv2HpnjR5T1KnJvFjCQqfuE1xgNXBemME5JZgww86iLNqNq6FmfYQNMtVcVGC2fgKJ7J6zLcAQV",
  "key37": "5364pupXMbakwWWxEdAuhi5n4tKnnnu12a7YLKnjGsL1hELSMpQrKd3fyhe6jyoPtbs7GLoAHYSajrLDAsEXnf83",
  "key38": "vBcpCaK9mbbQTEQokZPFB6MAKhAW8weVgQ4wRVwG2cBJKpg9iqgYM9TG8iGDLoSRkJj5ZBjRsBUyid7Xm82zXNW",
  "key39": "5LqQHpcVj1Eird5nTBUqZxRMD6mXmLivkjBXdEHCHGLgiac5UQ2BiWHxd8mZrzqpfc2bYYoQvoBxUuCxFpsLnPf9",
  "key40": "5A7CwBtpUi4JajkNg76i9oAHFXbDvsDjumPY1hgPXboW5tdF8kfCSyrpT5YfUVUFLV4pagdcvbzW5r3zwzqyJi3K",
  "key41": "24FZsGGLPvuuJ8CUbo2N9MaEqSQ24LS7wGss2qpNM4wLPDW5VQZF7dSec4kaW4KwQRkNQGx4D85ZyNGoaj6TcLST",
  "key42": "4tv43P4gUyN5qG1cuPibD4qCE5PJNyebuejJSp2f6T7gSa3wADWLXedJjzFRDAopEPfyLEhJitmMKntQ3FeiPv4Y",
  "key43": "4oaG8p7wc2JDD6ndgSyX29SY36KBV1zPqQoZeqW9oG9MsW41KEdupDBbNGiBZDzxXxrkxjC8pM2rwM681jHWAtbo"
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
