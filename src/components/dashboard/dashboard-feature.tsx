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
    "5TeGqYJ7VB3vRMTai4GqgXJ51D85KRCJ6rmm8vQVNyq141fmvhhDMg9ByyQSJ7kUHydyt6NTV3Gj9AjZBkTBWB97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8Yo1Lje73BJz9nnFBwiiavJHsxStcS4uNW5TyAtCHCQtBaXEVYjafgv1zxAc53HmV48AyV3E9129sgYLzky9dx",
  "key1": "QFLcKNYhmxLbuDLGpw7dkyppS3UzLzUPpBuf13k3VGcrMgzBnoatirRWDysz6i73quZCmKaPHfdsuNQvJh4ETXh",
  "key2": "3KBuhZEUns643KoZ75G7n6LvktvY54NJYcQsBjRfSmfCCxLaM1otZqNNhkaRoYSkQJC3RCpheM7uSoPe8y2iHcM",
  "key3": "2uCWvyszxjNKiK4uSn6AhtcT49v2VNLvBAbcUeP86t8iKN2tfAXyZec4dZHqCHLUx1JgmWVn58RK9bzdMpYF897G",
  "key4": "2P6oMTaFHypGqm5RVePpYoneRuZD6jSdywcTKtbVZzirJN8Du35bqQ6PFxkJSM3gVhnDbKkfPmrKiT9Mwb8MfK4W",
  "key5": "2hAW7DhzDCExFr1XJPFRNqHy6PwiQ14T2tuorWgxYCNJkbdt4Qwbkc4yhpxQSbxi5nhmLQ8c1B2CoJ1gbv7TnbCv",
  "key6": "2vYiRRYzpNGr5k19sZ4JFSo4Ur29T8tkUpYTZctdcnBXp4JRqCutEsbPbMYL2Hqg3Kca1ApLM5HN5UtEBzas88PY",
  "key7": "2spXpnMjfnzVY75Hqk9FixT8qdvDtfaAc9GW85sEhFz1kMpiS6TE4Jk75R55kAzgZCYXiSsVmY8e1a37xUPzX7vo",
  "key8": "4TjU2Bve96wfJdaRJe6Uda41KmW8t7H16eyfrsdUB2oaA42EtBjdnGWuD3iiJZAhcxorCumqRbd2umUqGaZdJk81",
  "key9": "31bbWLG5LAUtEE22b4SkjhTvrWKEptxMWuXRWRyh67q6fxW26RpQQgi1zos4784hLMxyg9v5G2qhYimmyrQbXRpn",
  "key10": "2k8wD43fXmqvNTWZVs3SLeaoN1sGuMBscHUV6NibkjoktfVtEzLiXBjjSijY75EbxFYh5aKrT5VcDL96qg4GHvqb",
  "key11": "2QByKBdEzqS43rWuousE4iyf2t4pDwJQyE8hTJJicT9WwHTgaD9FmyNi1P3qckqtHacMJbQZVHxGSHa6NZrfkPyM",
  "key12": "3BTtYNtrkaeEv2yoa2obQgumiqgih1kQGqxzWkKLRHJhD44JMeheJWX3sa4iTmcXr7rgs3GLuCe1Lt6cGETvGnpg",
  "key13": "2hVHiMUY4Xe88ct34zFGNXjK5QpqP3CiySK6tgsxfks82cexQMr9S2vecpmsxR53CioqMfYASXJwWSvvfAEBFUEt",
  "key14": "4zy8DC6qAVK2j9DHjPa28a2FEQ2AS8EwGndQrYs4GUrG5MkzTs5vQkHtn6SX1pNZb4xUu6H9RKYL4RsB9ojoe1xw",
  "key15": "AxjmdjSD9BgnwT1SySYJi9MsSDkQ1YWmSm4GRh58YWu8mU7DPJ7huQHKkPjzqUTL4gXto9j9P4quE92maALV6bR",
  "key16": "2tkNL2FCnb5SiRwFAHU3tD9hyHLmjhrAVmtfsgkHZue23mHa7QamPxbtP6Eo3CPuaZ45cFkxQnzJR4WFC9TCjPyj",
  "key17": "28eQ8FV9B5RGoFXxD6aZAPzJBW9KzMFqhJ5cSxtLFKgJbNyGdkQLkJWu4gsYHJyzg1KYeXMCpPxZUwGxs2NSF9oM",
  "key18": "3Jx8KADSsqME19XfSUeq6iNuGtkY4iWdSeTrYSfczzNLNwpNPnLKGWjarsbbC9ckVz1VKRng66YoU1ugpmgKCcFw",
  "key19": "3jj39ugDpN4ht29zEBABDVnVfvWcYKZLJMYNof3mB5ZVMmpJcCjYNCPiBN1zFqLe4CCthjsrRetvxDopJXyNYfiW",
  "key20": "cp82EvdcpsDQPcvH3UmP3n4Mwq2VMkqEu4aW8YpsSd9efjS94sMAPdPepSYaZeVCHkKeCtMMzZgzE6Hm49cNJ13",
  "key21": "57sfHhQLnjh9hdvCeURF3K3o4TeBRuUtEdDv5wWLUJhrcWQZBht4xu3CjVB4KimcLhK5PSm1JVo5HefX9K1MLW5j",
  "key22": "23eCoLnaBfcJqsBSUBG9pgg2MzFX3sm4Cs2v5kRj2GpXbvatQu7FVJgRDLA4BzqwN7GMCBpqBmtw6MvzHk6DktEi",
  "key23": "3C8wx3QPDuB93gtudzhLkGQegitsULsCqprYxWyHksVrW8JnRPy9Wttu5ebf31WVgVTR4LYHEfuLQTc1xMuiqnbD",
  "key24": "2QZU6Qz3mWUpJUAEf4NGjuTZKhnffwUG2UZEWu7MtcdT6qQfXoNrfRX39RevkFhAmZchWvw1Kv2Ty8bwCe4RNWb9",
  "key25": "3n1e2uQYEszFLkR8iPap4RWRevwksKczWq8Mv3JTViGLWjdFctpjTRgMXhTMS6mhLBW5QAfym3djKisMDc8CCvod",
  "key26": "5vau8daJ9sQmH7P4r1uNLQw35kSJGMRLPhJ2QpUnWucCdg81bm1P5VN5dbRUoGsSjrGMNACaczTAvReUaEoLxMum",
  "key27": "2517sqFA7mR9VhwqkPxyR5fAqWeZi9FWrkvuvxvEkDYgC4k6oHvyidW5CattQ5xK1DzC8oLWj7pL9zDdvhCXwPyb",
  "key28": "4MwqxgrZ6amTv8EL8ifnUJL1J5ERusGLKVS6AwGYtHXvHHm4RCcUdjQUUgqKpYgPyb4VQUNQ46cu2GUU9g1xQjEB",
  "key29": "2tBbUUvubzhGo4U62qyUZUgPTjXMkAFmFo3aT2jxv88UejMtrpD8G6zxFjBGVDU6YKgemPK7ZozbRcn7g5rn1DY7",
  "key30": "3G2sDHsi6QnxrPoQseTTmvPfQ3W1HuAH5XXKKk6BQ3zggfZ3hhCHHiRvUc7skXNXzS3jNGU2Uqt8arxqjpfrTAdW",
  "key31": "5ZeBmhFKbRb1amDkh2T65gHvRTx3FQk1ro4vxEDaUYpwTSP3D4mW8whJHBSu1nzWovughxAFSpMeunevs5AvE5q8",
  "key32": "3pYPABTzkGPpRdUWHvQZgW4uFyZE29wDZLBDK57zqv1wtuekC7r5qWdvVs8qrYzQGpHdxDJFfUfEJrFMSFSyoJK8",
  "key33": "y2A1Agf4FFQ275p84dExexApd5HA1HPvRNJQ4qD7kV1j288veoc3uYJqyoeQo6KaJpsR5KzU9XAqSUpvq5ttdcY",
  "key34": "58KsGi8X7WAkaKQUGE8BkbpiHwbVTEXVtFnp8fktgvVDkVZbesqAQMGhKHM5wWwnm1jTgpCSY2kcQG2sYBPEV5L8",
  "key35": "4Uj9T35ZnXNbVPCYsP5zbAtCsWAg5URJNHWVKwnKMzMTD2bjpUrPJv3fjw128hXzcNWKqTuV22K9GEwLsskos88X",
  "key36": "3A14Tf3KSHo2ugbjDcWA8EmzQhbqpJgDgntk5LeEKJibL9ugTYeRcWVe3XxZDMkC8HyPvn4fMp7VyYTsuSQEw7D4",
  "key37": "531j2fgF1hjmhoDcwcwUC6roFeBQhKsTyJoZhofGWKCieC4EbcrwrnkkmqE13mcyQrzwXwqo4NF223Ck62V3Kx59",
  "key38": "63AXm1whL7PtiynxbuJCjL2TiH48D8tk63DEef23tP5LNQ6mrNTqAZeAidZPCSWXwY3cWD3EvR84qaj7nHEr64XQ",
  "key39": "2ajWfdhbQCZg1e1atHsQu6LxZJPXjWsLYrWcqDi1aBDNjN4KheXAz2ztJuMu7VHF1Pz26HYomc3tgRHWVsM9KxbQ",
  "key40": "5qdG2xRNfPQj7LNHRBsEDyZyFUT9qW4CUvRtnX44Ho4PcuYXnBv3id2cJiN1Cd3bqTBZppizRKrX9uTNAtBB3e3P",
  "key41": "46snHxrbLgkJGB682fbBG7qcQcpKGyTXF6yJUb2EaLUf8qVqiYaThmQmd7vkG6UtEa2uQkBHfXQWeRujgcTYfReh",
  "key42": "5zW6Bpe9DJyD9UAufUWV3bAEdRzpqaRfVCBR6TRRbDz7GyK4u94ypbcN8XHa2wy96auMEdx1yQ4sF4qjU1M4Shji",
  "key43": "5vBys2nivp7aPQRejwBepW71oGpJDnuqEpzhkrcMnVi4BAmsPUmZp1fL5agphq1W8HHjbqKvGJRKQY1Qyhgc1UD7",
  "key44": "C5RrAuajaqsCukvSocpDh4E4rjrZ7KLhbxpPYPB7wKEg2VQbgjdtJBurypYU5DZrdW4KVAHcJAMtnCj8XKCCViu",
  "key45": "67nyQkTsfp1foZCHRhjt2cKRuxanyZDhjyV6htvUVhefaZn8CNUWJZJHDvuSRZFrJX9Vsr9e33L5LvUPeEa6U4BE",
  "key46": "2hzonMBtHc7gXzGewanEHXde6M697MABJb191bUSNiN1tBZUu2hsHTEDNYfoe1k2MJSBqtHTRDzPoPAcuAFN9i7W"
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
