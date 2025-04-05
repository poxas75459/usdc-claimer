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
    "EWG3ja798q5vBMtGSa59o6RrgA551rhaTBMChHKUpXqj1gdxBUALYxGbd9SNyiMp4zNnqR7HJX6XvwwGVrc8EXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27WbGtgfmSF56PcWmuFKam1JtciUQmvv8A39qnKhSSNwxxJDwFBMgmTefGw34TP4aCL6DnRwAiBxnhpN1FEwDL5J",
  "key1": "2GqTM4XM9onsnc8kMj4xPJ75dzZk1RWj5tTTCiEA89frww27Vibq58RPbKimwgpVwqmG1RggVohAFhkazcmVokRe",
  "key2": "xeMU2FTDQBYGEVAhjKiamBbagYUNQxApDUJ2FqKCZBBkd1YVrh1NSQephvi9NX6TLzcwYAKEepsvAPxP9WbDAE9",
  "key3": "3KYtTts1tYDhEhRWKhMVTLjmwqyKNs9Q139opiXQaxGwerEk8Msv1x71AYu4nErV5mCa56o3Rt6quCfxcx4UY8c2",
  "key4": "5eBJzGvbcU1u9mBhPHj5s8nh7ivPivAkH3chekHBxeSRB5T4jEjVGrjJCkmfKAC8VtahC2iGFCkqvYJrH1zYbR4o",
  "key5": "3CxgFgk2drNeYanhEL4bGrtUYpNuRUxitpAjJ6AV9vhRrtNxQayY4K1VNcEE7TNxSSbWrLdbjcdjudLaxe79k1DZ",
  "key6": "4ZaJKphn3T4ExbDgwF5cUeEd4avTfUMrrzkWpnhf4eijMbRvbDsDu2hM1TUpLuN8p3Hq7DZXSKG6ZqBwCq2xwm5w",
  "key7": "4Z7keJo2uLrhMpSMNkj5tyq7ctXjzQT631YdH2ev5KapimP9eN5FbKLiqJSnCJT7KvV7X5d9SRkVnvsYJGPWogFz",
  "key8": "3bWDDLkQeSp2VK6GbZEp3T1YZ2pADjN6vAbSuh1v8iPcJbESXckZrSXn8XUowczbyBXsim2CFmhBkWaM3u5rotZZ",
  "key9": "rjZXEaKam52hVkqnV8sqgzrMEEBfqrZL1f2BBokjd1J1udSt9V2Jp42USMAimiC8KzxSQmBRbjg8mVhHXh4XWUr",
  "key10": "V1i5HbL8iYL77vk4asAfWCR1vziE9rQWmpvEk5TWRtfzdDEFP1HGCfEkLMiw2VWrG7ejmNeXDnJwcP2VNxyUPMw",
  "key11": "4TAdpdCTSCuRMdf4EZ4D5LsBBzt1Q9BZvGypcBhTtZbj7E7uwEbCL135jKsTdyPGMsuFBjX4NEugVQxqDTzP5c1W",
  "key12": "4nkXuxxxQxTPcaETvaY2q77CjjezvCNE9RVPkjdAL71h7dHAkQ45SR22gGjMna5qGSSTU7btWsSDfDxrcQ1qufNd",
  "key13": "iEHN5YquttJxj2xm2Cc4a56PWbciZGqZuzwSNaxuhq8fsCSxR3rgtxb68U5YSt7HSptnX27Edf8CDZPgsff76dS",
  "key14": "bvnPkgGHhtQdQQ79MBgLoKzg5D5uEx7A1yKEZ398nc5yYkmvMYTzJcLmbmkBoznbB71cKb2m9sbVncNfm6URqCo",
  "key15": "kVeStjNEUn91qbUNWvQa9p5LqsTGVn3q5Q6AYttSa5Auhz4XEg5bvPfJdymEKDPEvJSQ5ZP2XodXc3VQd8YY2PT",
  "key16": "24mrrLRrca8dAx28CzhUfYiE6SCM6enY3Gm4Nj4q2kK2r5ztTw6kL8hWCi2SK1KW5GCkbtp2WZCcv9rr2vjZN94y",
  "key17": "4hjfHjupwxtJDRoPSfPjG8xb8BQV8rnacYEEZMHumpbMJ55E4Yi7m4eVDVdfdxUFLwXMWjhe5bVciLKCdbyPhyBh",
  "key18": "4G2FiL7zBoYM97QziJnvNxjrNyiB7VdEzkP2t8kGNQsjH5DMHYDYEuGygwXqew7T7xSJSQ4SRYf8LCSrFqf4HeRV",
  "key19": "3DiyFNNPrBgKJPd9KaWbu4q7Drxdocu2xAKh78sRCRLgHn5rGdkqtREYYtbvMs8yta9kUrmdv3EhuePd8YVY9YRP",
  "key20": "4QkfrJEVSU6jobcfUU2SajLSnq1CLkCVgJZFKRVtVZ9DwxcEdH8GVpvKJBuMbqvtnok9CfaAwdTMz7gXvUB9kL6y",
  "key21": "2zJpX9A8VAj4iUoq1MxiLWBww4RkpSTXoEVWPi4ZATucSex3kRFKnhTBhPSn2fgbHmH32gJdX8F2m8fdN9BvTBB7",
  "key22": "fxNPWZ7S6FsAiD2pGP3fqfD9XvNvA5ZX5WzKKbW6pY9fuZE21euSvo9Hn7m7u8NecBQWtLLJBZNeuj9j6rebk3P",
  "key23": "2xymtLdLZxZyNNNQ1T3etbvA64vGHNaijsPw9MzU2855718Qp5QNXMMsquvzJgUkJNtecUq6tBoEAGTzTaRNMurW",
  "key24": "3uFN6tSFCuzeqf4hFnnt4bBPXC4is7qPqDga2N2abJXEPQq34L8LQ9fy59xztzw4KyvzTnyDSDXWkyAmzVBcJDDs",
  "key25": "5HJ8JYeFtBbyWnUpPxvJSV9sk8XxztU6q5mYn185oahr6DDMFif9i9kefMJDHeB5oWW4bVnC7R9nyS77HNoxZUfS",
  "key26": "2jfjsEPcsgGfmbhgqZYW3dJCodhreZiQ5jRPBVi5QEkYNZYXtxbPLHwN3eekHinEBAQcTWY2tYnU8qLDyYXYdw2m",
  "key27": "4EEhGDkQoGBWK9udQrWGQNMRzDUdg5ThRVt5o2x1QKUkvTVxaPxuANBtbg2ccSndqVZukFVn1QGj8gVBFetF1sU4",
  "key28": "pjH1YyGp7N1gp1beQBpTXEcgg5AoHRAto7FFpPJPoYeLka7fzocCgg98THt6EFabFVNQ9B2eweinrCgLmghDFT9",
  "key29": "39G1eZny2xS29XHdRSNbA4Exq4KNA5nydEEU5Hh2CfVtv15FtzLo3KyNG8PPR4DJn1ju4pSXqo2wZiLDmAbFdsvu",
  "key30": "27xm1yr4msVYTTcJmFq7xCa8MHxQGRr2w1Ko18iLX1ivbB2mJP62UfwSB9F3aNTkrUg2PadX6yAA6GF5xw3XETdx",
  "key31": "6xvvQWu2f81c6Kj5EYFLHvg6fnbTMF57ADbsCXUPGuQ1eXeYUYko9P8F31N943upMJ6yXRvEJAao82AbSVUAeum",
  "key32": "HpyrJ7p2nJ97JmHCe479kz5YnNFVggSuEpXEKZyeoviDuurrbeSAXk6CBaE4AtkatKToTDbLWfawfEj2p3kp4vE",
  "key33": "3DQRNXbpWAjSARXHjR1DE24MEjU39H8gBqQ6PgdzfeG7aNa6nrL6SAS3iprU396hGFSHPqMqg7jXJsZTLnAyCZwB",
  "key34": "4zdTr23n5rmwCVH8wG1FGjhvVnw9CUAAwjx4DQsaMddQ1FxBhUBbz2Hpjrv2WAqFtCnGdrPVzxZ6Y96jTjNzFwgU",
  "key35": "3rHaKWuzL8FmTov1UQ7XKED3uYVL5vLZ22sWHSacz987XfCoTqWsxfjyYvoaSDsEcE1AmSRaKpsGX8EYhbTD5Chm",
  "key36": "2Kh1v7vP3QW8HPEvMvmfPeqUCbE9hTcZsFYvWseYrA7URAuLQDtmKB45bUNsw1BLiHKevFoAiKXu6b6fok7Ex25t",
  "key37": "FCuH3m1Bm7uJjhsEAHNwSiCj9upFLgLfawXncQZKYaAEfehNiPmLJ7CtSfPmtDPE7W9pouEtTuZ5aTiGB3mpF3B",
  "key38": "2LiVLYjhxHdzo7E49Z9bMVb68jvCSp8xwhQTdQ4qbyBLJae21jQkU9vCd8noNdAUAhwZ1BqAYAB3LDrqB5CBRk6D",
  "key39": "6VHzwuFMghJb19JmkhDggs6tvhL3qrgwks8gbcaTeh7u8nL9X62pFiggLYvAkwgfyWYN6RAE8eyc1Gis6ccJzL6",
  "key40": "3oARAWMLpqXVbWah4uvcQFu5Sj23tcetVs4GRQLEzkyMMJWA9nw6fghABauLqmPHW9uD6qtbaL3w3nEHuEWc2WPM",
  "key41": "2E5zfzMG4ogoJBcLYpJFsoZXpgfh1QcxF2yBWyNLfw2b1o12khYP3iDxhz4TEkzfps36rLbU9AghgpABoxsqCgQz",
  "key42": "29eupC8WWpjSBo1CQW1HxRGMQcs7bdBNNVDHwUjphkpPfFC7CNFA94c3Evgs7eDbpsrQ6ukchEbkuoqfkW6KtL3e",
  "key43": "4wipCyFKMowpb66Rb5heEugVWCGAUZLxcqnYLc59hKMyeAS6i2tn9XL5nLLFzyfWpgwJh1QXKn6GHmKFSjqvDVcu",
  "key44": "3ogLp2S2uTHJCVp7Vd6Muqt4Y3W4J38xAtQxQp4rjrje48WiYCR5HCfjxnw1oX7ZZ3UuXHgYt6rSUXj99LMJc4ua",
  "key45": "33efoqGg6zBU9fNwoFSZrg4DpzuafN4Qh1eAKfTh8xQFBUiU6PBDp7fffMWYqXkKwX7N6anX682ecTZFH1GH7zTg",
  "key46": "5WB2ztAnnMnUzrvM3DkRMccQDcgKYgSU4VVsz4gG8jSjBEvniVeR4iHHakBvy1ruCfWX2f6DH23UuLxnoroBgwHS"
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
