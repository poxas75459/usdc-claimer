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
    "5Nbpb7AiExNtKVkoQHevhcUvFoBhs3EbdwonbGwpfrnrE3HR7m1LkAfGQzaykzhbKoS7JCuQPHFV6BnEnKY6B1mK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cgs6jvW1QZQPfUfWSmXxm93gLVp6Q8vc54XcYa3p5xwg1PTeGf3KxhJ9YuHoRkDbCBdZmSQN1rbj6yKJr1j31ry",
  "key1": "3KNpfdhaPdFnjnxN1fqwrjLraxeKfmqdgbt1jx6jtNnqMNuzZpj7HT1AJeFxaCnP2ES3MPTJG8qAcVB7drgctSoN",
  "key2": "49zJEgzGKiRpfaeR2BPVS1DDWWBedEDYhta7yZ4QwWXNZK2CNY7wakxUMRRJ5ksCpUGWKnQPf8ec6Q3fJZNTqyRt",
  "key3": "5qxFdb2EajRbM8xL2sHJcDMQn3VPLv7qLQtcNzcdUvFQUheqsuQMYsQC7sDMvJBDErNPZh6mj9f7bjZtcHphucnV",
  "key4": "59yeZi4eNztECN89W3ESTbZHwCGGskdBdgNvCP4pAUqH2rcP1Rq1mu6C4mvaMvCyc2r6nehkxCFKruVoNkScUwn6",
  "key5": "oWYGHcwZBY4NJVxvCS2V2MuoDUhtNLbV3KB4AGAcBw31kC8o5XU6Ruoismi2zYT7Kafrd9pUD6gnqiMRRyroRi9",
  "key6": "2yAs9Md8DWdMsbahLhqDD7nBSonZeJ1ohtDM4L2CUEQExSqkYaiNiUJYnWUdkSYU71dxdceDn8DkGuN94jmqPdt9",
  "key7": "bHSbhASRcoCC9CaJYkZAwQosaoRiDREegr6NumgX22qUA5CJNTNufYm7MWnWoNQxsEFa9YDedwU8pMiyyaBwYWV",
  "key8": "61m5a2J9jfdb5GVq9kbuHdnw6czyVom6ZkMhosffUHPrn1obJSJ2qsRVKHZv5kqiEcqKw5eo9McUo4rNKc88VVoz",
  "key9": "2nA9Z4KXiqLWu3P3JT5HMqDactjdjVFbn86mAVK39qgTcWBuvjTUrJT491ng2sNbFP4rf37P7PPhMav1ubFbrHZp",
  "key10": "3dEdtWSSdqk8LbyvWREaX13MtRvPxGMH8SZZXptMN2FVLym9mhNkwgDpshZxaB6jnvp3D7xoFiAvnRHLn3GDBY2",
  "key11": "2kFAze2cmNVMoKabnUMSSo6SBgrqSkUdD9cJgLWGdBx3Puv7dW89uoqpCjte5b9sEGnuncMaVzyUy3khQkE4ykhQ",
  "key12": "5pSYZivgkMHvEGps8Crt9UHVSyDAeeV7dwGgRaSsapkWQpS3zAAgK45WEKhnGzBH4YKn2eAfcPHeAzqhqoBqxQS3",
  "key13": "4yRM7zUyGr2aXy8KD21cHSoiguP37B33QezqKKGWomH9jvT3bqWEFV4hheqiiHZkyt3L61ySaNrXmEwreNoV5wmt",
  "key14": "5W92FNSzjaKFB1s1KGqQEmpPHtdWmMY2AySs4kVh68nivuQoUSAanS2qdX9TzREY5LgEDXYnquKN1qp9tqWrM3ss",
  "key15": "3MMcpjbLuveD4PqBBF4eK1JeZn1DDb8wBfgtk5nFp34MnCDYVLMH22HG3muHF2DEhkBoFZq6i6QqiQqkwn9w9cfF",
  "key16": "2uyWDS2WeiNwQWCWu7k1aG6aDP1bmGNvofbVYxEeVdCvvZvZtUVWfPvPwvfg15rz7g6iLWRPtx5CiL1ToH2vo2dJ",
  "key17": "23kiKfP8LgosqSbM81PQZrShhiyR2AF17UMUSd44qFx5eBjUXctEMt7jjwLEWuRqF6ttmqVTV5TK5JgnAbQrKmEV",
  "key18": "4vHAMT2GrrdqHmk5hZWLR5efwe2rVoA1tfHDkrRkNGrYLz3TqJPKdxQhjTUHwRi64AnoY8ghq6t9eKPL77tV56p8",
  "key19": "4gorxVcYrtdH4URRfAivy5USK6ceFxdPhh2B8mBxBtXgx6uZnKY6SXzWh8G8KwJ2goau5KieHcCyhqF5t9a7jMgA",
  "key20": "5LTmU6hQE28RPjndxw7f5ojLw5LTS23YEGB9qQgzqFNfDBeUDjeZhWgor5h8DMcptrvEwPRNf7FrGTi1saHpJPqF",
  "key21": "LYL9d5ngc6pE5gxteXfUj9kYQuuQca5SY5diq1Xe9qxVRoP4CJ6HFiBRyNPCnKsss6B4nbkMyL13RvixeGxd7dG",
  "key22": "3D3UfsTTzqmwAnmBh7VokSfJZYr98w9RNRAtDevpvVkSEnDYe5e3tsuC5g8wwW2AzK9v65diezzSK1WpV19CfQtG",
  "key23": "dYk84pn28XBfADt47GwWVnKDcrQBB7AzwEWELCVKv9puwYgADoSxGSVKo4FkD3TEz3DHk7Qfar7UWiKEHRCXYgi",
  "key24": "247ZKjYuEyEr8UiLoNjw1cuDgjEJWooESCz4VE3XTyyW4eXZie3BBzvDUYT5hKHFY3sSf8cnRtL2V6aHJCUyhhb9",
  "key25": "4uYAoBF9iSu8qdWuU7h3Lgqw8MdV45gkR13uBFyfkyWVDhtka7M7vgkVGkkpQfkN5jSAWLWPyxeamRRTvjzfjt2e",
  "key26": "3CXWGv119T5ULxR9yGHBC2h5te8Gz33Jj4PQD3cBUde3tnL93xL4sdXFsefGWCc4FcJeJZ34CoDSbSYegwwpjjfp",
  "key27": "5jsXdpciWR34Tarzq3wA1JttUoEVkpJC5ihrEhfgWD7BZkpUziQdgKAe3gFLdH3rBsnRmsmSXsMeSerU2h4gtbB6",
  "key28": "3yGqf934SLgu7conQNUULDFh4vrtf4BWjcaViozBraRKiaKWM6kbs1DKZnAVN36q91sqjiwQuQocNqKJVX1ZWFji",
  "key29": "2FBoq6jioScqZ173ZkiaNW2ssZkm3cmDjdJqPsCRQsTpmPWhKAKDGLVZA7tLkw8JUnAQ28KKQQ4JQ7C3Kf8GDv7B",
  "key30": "3p5mhmsFsdixuh7uq3RCA2TNKpF1Ex45AsYUmDo6VpV6X1ek4FtocMXhVGkhyDZ2zzBxKZ7kuhizykTG829nM5oM",
  "key31": "3QvxrK6JRfsfKrxNoKZ3W6frTpTc8jiQBxLXzmwSYLi2r7YZv2LC4RaQjte9qK9rvc9kFbJFsH3aNSBBANSCYBMd",
  "key32": "ip3WVZadsnhzrq9WDhewNZzN2fCB39rAXvt32HexHkRDmWkMVQ4mh8jZyJ36tBmTAFjvzkFrDjewV3dAY81veVu",
  "key33": "32hk9x9PfZKghmGzCXPUX655BSC3B29iksPh43ZB7vVpFJiqEcadBERFgyEiPkcZDtP5jS1uu6YNBwD2DTfNfQBw",
  "key34": "tNbwfs6FKfB7mbrSjptbUGGJq4bCdP8QpM8hdiCG8VotC5LeHc145jgqCcwqXKMW6qQmvE7qXvwY2uVCPVgN7PJ",
  "key35": "39cp8hiHBubuj92tQag3ACG1acpuPihyjqP3xo9e2gwr4U2UWV9XyLnt31P6Xncy3GCSFu6F8HjxLEyM82fBUfU5",
  "key36": "2cs2v2eQvRV56de9dKk1uv8rhkKnJrfv9R32cA1CGPXgWDDfg1DRaay2SfYyyBG3jMD6tGTDLy59ve96iy1gPN1",
  "key37": "5qs49Coc61VR9woiQzFr7kzApYoixffRTQeekKb3ubHyXC9eMWsiGvjrSkvBvyzQm2HNmsD9dxfLYm5HunWFDv7t",
  "key38": "4yKAZJkeswLMZT3KkRNr8e8VVJRjqcxu496yhJZnoQwUCtCjgmKtmyEBcLcuSHu3xca2gGfurwkSn7f4DCtEEpp2",
  "key39": "2QHphoN5sYHYafCjSx4M5WLnwQeVqwDwU16LvyTTFLd1b4Tvk5q9wAKAkz4m94hdFFM9bFF7ZQJgiDsWRVrHmvJj",
  "key40": "24fHCQReoZvQ9H7nY3BXWYDASbUNcLMEzgtPQiq47pRh8371MXfSEPJtNzwhoAaFtobBPuqNpemUvSdqYjYKpai4",
  "key41": "3mn3SgfdfULmYNKCViy2jrS7pPZtFBw8WQW2k7rUdDENopaU1JZJJoGtSDRrZVDcod55WeaqowTeCuaXme35ZB7c"
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
