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
    "ccjFeHCRpQyyPxDS3MznfeWh8YPh7PdUbgph25LumW1Bun8JAMbwJx5Ko9nwNdMscdvEMdroKoTXKauR6x2BFBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SToPsHVMoFHccjKkg3oXPqacH1GfjjDzTtMGW4rNeRfm2cN3UmCBwmw4RYDYEaKRoBeSzbwfgdvSAuMq8HPVYtm",
  "key1": "HF7znUfM9DPWSbmnZyQCMcZRYws8y1TPfGPFsfT31yf9PQaDAGsr6HPron3nSms5gnjXqY2aEbjHGmVVW2Xbwyf",
  "key2": "4RiT6wXymYDdMTEU54Hg3F1Vw6PBDZCdgxFnpgRHpUtVo5yPqVNtfX7ryz1gS2t6t2Vrp85rskshuwtKPynFu4zd",
  "key3": "Nj1BWSBhTchKrvWnJcxssto6vdwjGCu3CtEZ8qbt1j4xgfqZJQYXoJi6vjUBdLGujeaDbJhjAm2HeBFJyzRTEmb",
  "key4": "2KTRe9j88a2gctTw1vvwvcjB4fnB1Wd2vvnHqgJxQ1yAmSX2fdgiFWfmzjeGadghpJpErhR7BkACR8pgob1mNq4",
  "key5": "5XFgwob8PyUiDyKQhUN9DnQJ1CwqtLeyazKebouPT3x6bxFDkGsWQbztYijx96rBNgutyNxxY3Eq8NPxJnyDikfi",
  "key6": "63XZ2SLcX6sx7Q4mNzU5Eh87z5BTewLJrG87zffe36p4q92ZAHjZZU8UjYVuey6hkSmtezkYDgxxYpahtEsEoRkF",
  "key7": "4kvrgmbc851wwWzXSsthVyRQWtUaZvTXsPFojdzdWMLfjb3DdxF1spAqZPSni5k9JKbTaDWDLNjFf4fa1riuy2rt",
  "key8": "5ykWSjPPeYGJm6K4RbdpKU5HSCNoePrgenTNce958SrCacEfYc6AiNRiAhSfQYtxG8pnFq2JDnnJzUsj6WNK2VPx",
  "key9": "4yUEFuxGdguFPgeoxGZPDzKkJgzFLxQ3hWHMTBVg9XnsqqMx1R65M4QaH5tozScRACV4Y4XeAoMe1mgNETGRqmcx",
  "key10": "4xFbTYbMMwgnoLCMe2AX2JTufsasyEE5C21gmPdbAFuMCURxmowUQiDfJRgexyu7UntspQ96kib733VtFtQLaBXB",
  "key11": "5dCUqK6p3vYP9Lhv1S7Dzkq19Fj9dKVR5YvKmfKeLnDH1hWJw7vrU8y6tDXrDsqiLaA3C5yR3q4VcxgrkLXr6S9g",
  "key12": "ztGMUMdrcK6ByR4tFyGtBUQAngFnUuP45Le8yFGpAEQTMLA6z9zQB8BFuAwP9brd4XjZkVANsaXbXswGk43RiyY",
  "key13": "4hv8PkXMjumc77reCTFtSHVYxXRHQvi6cSsKNQS6idZYohYYdxFLdNRoQG41igvmFBm9iXF3pEHh9RZKwtPyu8ao",
  "key14": "a84Ed68b1aWvFoXJpXy2yn5qKTjKd9zjoKcR6Xz4Lq3vJUow39Dsx4TLGENasg31o2SW2Rq89bHV5eNGjVbjhpQ",
  "key15": "FD6rTLMGYyZGS8zp1GtoTHV4AS7WYgy8DV68ZrLB2nfJAfAcPpyw1GfSj6Ax32oV3yXDJifFTrcJkRoN9KY7W1q",
  "key16": "4UA8t7Zd17PU8NfozM9xrw9GQJxsZucPAVtPAvS5163oicLatYPKzruFA3Ao2xFWSnLuhHwnTTiHxk6fNRGiBzLk",
  "key17": "4nA84nA1xrBiH1iGEXirrCNEgfkFKiexaYXwoovihDatKZSeTKaEmiUAktvKnzh7iZMEVKsCmaWiTRCUk6sqLMZh",
  "key18": "2QVbBWqQdxTj1nRQ74tUQFgDZtjpndz4ivS5sJbBnf74Uon38J62qw4QTDewx2wQL6rywLZRaQ6dZ5GmZuiSJ8di",
  "key19": "gbV9AaMFLFhQucoSk4nMteJNQ3dJWu7UMijwy8fen5UDbWxxp5UvXk8xEWbUrgRaTj816qGDPA1cxUDA5knnNLj",
  "key20": "5we4qpgsQ4ng94ajtPQVDvXFdJwGmN4Chum95mWzTSs88h44Ce6CQFFAtzqb7sD23WzK54vQAYSpyGdjmNSKx8AV",
  "key21": "2ncBbnYp2zD2hjPuvjzz6NxQbCumVw9CPr55JCj19HstWmqdQjPLcR8Q79yTpcyAPZgDP1PJgLZVDQB6exbkbzHw",
  "key22": "245Trh5JZYssUf3wqb9rgt7SodoXLX7i5gzSL7Uym4hJEtMTeT6BKpA7QqZZw63fiRWuQq7rLdGjvA5D4oL4nb4B",
  "key23": "ePpkaPmxoCf1rS4RiguDEHkhGzdZ5B4XNHfFPGsPpAjSJ7VKvVAUyGDSuj71TDSVVUtpNGZMBL7g3nat1p5JVDW",
  "key24": "3GXeQ1aBoUjAxtCbaBxGJE2oQeHh6BNczf8MFYM3ggfX83acTtdo7JdeAuhwB1grcD4iQSru3BaUWKbrRPSTk62E",
  "key25": "3mJkxhQJNWcUK2BXWjbdakbqsWy6YfCXkNTHfhYc448o3reE8nsAzbHDNsHm1nUw44beZ9qLPMFQYwEHwn9dJaQh",
  "key26": "2a6kcDALxvsj9Qg2t1zBbCdQfTa5R1PyBHmS3u7xrha4wtg2Bjktud4tYZYcP4LTqA8aLbiVUxEwTzzEcMR8hn1b",
  "key27": "5TZLgeCQvygqptqMurWhr21FS5oKgQW661xogtmoDeP1zqpKjmwy3Zhrkyex5q6ZnQGRMxExpRxTELg1WnsevN3M",
  "key28": "41m4jjB3KFQ5PgiVbz3fVAYwksb9A2rL4tjHxF4VyQSdecX4NRsJnnt7BrcoGPv8m6AQ6UXo5XEbMawQBKj9UYnW",
  "key29": "2qzzf9gmeov6ie1WnwynEHhJc9frtL4R59M19qSLwZ5B8q1WdDghQxntdQnxC1NH4mchZa4bgesKzp8ici3Pz2KU",
  "key30": "2PhuNXfD6mo4i256mvUFGsYfy9nqDkhbkLt5G5VGRjzAZTS2HZ6TZygVSD1QMWq9bHVqS8RLkBo8TnUVTXKR63uN",
  "key31": "3ETVDR9F3c3Yx1ALiLr4oTJuVbKbqcj6vktscUEt4DJi9Y18MEKSin9G3jgWXdqDVsANQGf1MoRcJEyWXr9eKyak",
  "key32": "5s8VHiUYyEFU4kUtn4pMMgBj9JapRVQnxDjYCkfkjCgdj5AEuq1ZGEmpTavKFckfSGQTqGdTHaJctRXqL3Jfy1ZU",
  "key33": "27XHGtVF8cLqTMQr9Bn8a4yxNA8L5yzHjhpeSB6DpWH3Fs1d8atB3iGeGcQkJTMft653UN3Z1yd6nKhnPDusT59U",
  "key34": "2c42NCGg1ccmp5Pw5XB4MjrztbNRXMypAY9GKLFSf1Lir2Ujkfa9bqBifCA1W54cvNpng2Kaq8U6J4RtYNd9D3wx",
  "key35": "hYiQXuNAnZeBoHybwvuhcKyzNnLTcHQ85Xo88vHY5BPbwWQJnYn73y51XJk8bEk4D1xX9M28vVq69XyseXiDgtt",
  "key36": "6FbHNhxKmEKjbsFG2C7SFX363RVABot3fDgZq7hmRkmkbNr83332UPoNdK7K5RoSd7bMBb5R3yyKBHhdHKGwT2W",
  "key37": "QmoahW35SDJrCZh6utNpudGigtC3HCQgSh9fYsoumTvgE5PPxNnJrvQHMHBhhBsuQH8NcDZG9w3tY7yNa4XGsvZ",
  "key38": "24jWeMfr5LBuqCT6ssn4djWhnVPzhMdiy23EamwgtEYJKdkYihbTDRHhc1xjS6poQkGxaYEwtcB5wGwefQZPsBpz",
  "key39": "xifVJ92TVzAfvrqv9x3KMwAizLvT2hsV3hZVvS7xUjp8usSSXSGe6m3GHT4bADp6CfSEygPRb6RKqgf4zLkG3LS",
  "key40": "2ZAkXtNiGgpNVy9FaXxAZvsLgWx3k3oz9GxqSt1S2zfqMvjeSHH7uTuxWTEQk58zSgPS6CENDRPBZFpt2QqzJTLc",
  "key41": "2fWjVPHwLZ8sXZNhKidPGcaYRbTWkcST7vVq2A8R7Mcvfihw7UWUavvkMzLrrMkUnzrCRQ9UuAJcMU4JALbAxuYZ",
  "key42": "5rydBFockD9pGohF5Mjxj1ud3hCDFbvB6a3rF7mwXeka4inKCTsY9LxLBTciSse5Bv8S1ZyxJXfRCGmZHrfxuQbe"
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
