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
    "4oH2hkxq9wjZMZ4YyJGUwu8aXFrmec37RMFtYgvRUwLVNmwj9ENN6vehNzg9G6uA7AtfgHAP9GDttdCa4LjSFoGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBrTnoJCRxJRRfc3DrqqSmaYTm9ZmCNEHZLv9NjwhLpJVtvXmk1qYNtGt8g5QwiQN9BZi3hfidewg4vfHYRFJ7v",
  "key1": "8nxxLsBUyHS8fWFUdeYBHFQRkH3tDmXhUUiXpMx3kZUyzd634Xp1kCrwgeV9SjK5VxCrfer4PS9HKHC9oKRgEBa",
  "key2": "5ar8JUXJRqcAqZPBxBkcn7jtziPnVTBjWeWuvTSZnTTCqBgXvbvo3wdEn6CnTGXbjWMr4mV86wnvz7zyDrtLdihu",
  "key3": "5Kvi3e7m2yMmZqALro67wzSt2vyNEuXuUELUvrbyNW4wn11aGmbQrELFAeb2W4Z1FdArznR4C53HQA7HAA46FfvY",
  "key4": "9BYyRVyXX8GUmH2iGpLdiVmKtU4sbUAS8iGYUAhJxR2ZTTqGRTo3DtqynnCMZ8NiSGFUWdM2sfbMngtcca7qt1z",
  "key5": "4dGnoe63ruksiDMvgrL5AGZcsCsGviqXJYDubYzTkouFmkFSwUzcsGfyFCuA7D4HgBsPLkVtBxYovy8msbUKRMjb",
  "key6": "58LnLnpWsFSP2pR69jMedm9syzM7w6oiWG16gBvDpT84dHxkuo8xAfaFTy89tAQDtuE8YMoKYvpwNhDNiTdC6yok",
  "key7": "3KGimXEexukahBTzGRhE6xAcrhGzqFPj9TvoH5PcBXdKKUDqPejbmcBc7qyE3grp4YFSiRV5KQjaDi4t1jCVvbRU",
  "key8": "3X1zkFtWxzFnfk2xUwCpWwBxZTSTFaXAiPSFrMecpDihLnnCHaHnfrrDVdZguEyPuZQEkp75Rrc6ig1kKsqa6NG1",
  "key9": "2Ha5PH81nGXLnN7CDyz7Y9x2heMTTmmLZmUxBgZftH8WpMJdnEr1SeR4woFAYV7e6uU1z4tGx8GRwxkC2exy7eyn",
  "key10": "2kPFE1eW1NQa6B6oFX54AuKQHs2b3fwVLySxgv8JDVM2Hx3Keng1WrMp6b2YYNdSXvbdsmNtzQvGBUSqmMJvWLmR",
  "key11": "2LcQExL6rdPWy5vmzCLtdqgPaW3aLCRjDRbc2nc3tLnvApCknUBiMsgjYEQv6V2CaPc9oVtQm7uqMQiM9zoQN1EB",
  "key12": "41f18ogNqos35wxtcv9xUbitVxqmjtbhDHJHBPGrvXUkzipNtuEG9eYcwWKRwS8fuLvshfctJFRvPgULr4ZCG8Rz",
  "key13": "3WHCAgcV9Zu7krRM6QRBxAHqheB947TNdKW3FrNvREgZvbnLaf4UE3m7RuHYB3DNS5Wy4gk42gVSCstNpjRDvwNX",
  "key14": "3MYYSZLDqnizj5NrQ5zzkkQsSbPoLXBS3trWz6B5GgjVKnjxFpgbvkCZSbLiugFy2LJH6uxf7U72dBeBWTjMrEx4",
  "key15": "5jPnjXYqSEp3tYKUDUyBLZDMscSY5Tc7Nzgt8Vnc4ARnVy75QTvK6LvN1xKYWuWZcGHdnka484Gn1sJfcmxpYd4c",
  "key16": "2BTDpz9PBofkcMgH347Jss2oa3zDZtuwe8KaGhhzCV2whLTLRJaLMM4yJWUmUJYR2Fn8piqd66EprvD5eYwnmehS",
  "key17": "2SDRddcwp67EFuLfW71Cop8VHkBDC3NNxfqRKYkYkyZiok5XCNPpPp42dWwEqkcjDSeQed7UMJCH5yAxUDEAfFbu",
  "key18": "5R1zz9CENNZhdUw7H3RBqis6hSxfZEJiciHgtroQj7boquhpam7veTNTie6vBTvgJ4xCTAvkUVkgUKLESeVV6AkP",
  "key19": "36d5eoA7pvCtJyXnod1pBCYy1i7Z2yHf9LFW91crRMNVWnnpVRc3a9pn2cVr5SNLkgKAfStcZCBt59TS5eQj46AM",
  "key20": "3tJJZKyGSC31bmanCyimUc1UBRcgLoLj6gFej1LGCFzJ1XR1roHfPFwWJLdtxJPWxHmffbgpbUQ3KzKvqeKtKadi",
  "key21": "3Eg5GmEWLK7mqMmb6yMKVSPWBtq5gsiSq4KCQ1KNfuuAMMMbyJEgM3SF9JrKbwdFPD8o1oFSKuW49ceUoeUUrSwH",
  "key22": "3vXnXA4NmUd1yWWmwzEZ5wPbDGXf8fY7d952Dj9WEP65r3H93AqqZDthMG9TrmWEqMy1trPF9qDdiUZHTVCA9ud6",
  "key23": "4cpNNG6gF8obMYv9G18twNto267Fo4xEAoUeAeUJhZ6zZwYR7tvHeDuhQVFATuM41pzcqd6o2JfspfgRpMcoJTE4",
  "key24": "2ivuVxFzfYNwqTH4fiEdfZv52zXRmgSAw4Xzxyzo4fjLcE1V9tXermdHqDeNsJhjmVCEeMrAn5ZM2GozjyGVrTDA",
  "key25": "49nFzYsicSYrQqrCxGg9ARHm3pYYZiNtmm1N6nQSXfNsgrRsFMveQXidoxDoWo8Fa9worBLA3oRB5cP83u9UdxoL",
  "key26": "mefJ4Uuc7m2ahneNx8YKGP7WhVowY8wv2ciDsaL9o88L7ZuWGnCgkVxbgymCxDYnWKdahvTRu6TtzLkkrJXDQue",
  "key27": "5frQGdpbSYDGRpCvQTwydAiAuDrKuwbAXusWbGaDqvDhTtSnYJmWNj5td1r6ij2TJRcp1zcjpkYwkeV1kCcFcoQG",
  "key28": "2GybEAxuHmowTpytr5PnCpJDrVtpTQSwesSqWETCrFUr4bCqUnmYhNndUz3pW65JTf9npisMb8ApX5dM1PAN52RV",
  "key29": "4TFYDAvSDFhUA5P8eEcBfku3ufkhUYdCvBjqMyR1uePThRpRoZYgv5QgCJJQFSmrSvq8YMqJV5r9QnsAQNmdQhAy",
  "key30": "2CDEUyKTDqXmgJTfyoh3VaP9d2NypUSRKyRh5gCzF8cyaa8mwo543A86RFw3HcvSeqsDe4bGPrq5ii6uyoAmaGHc",
  "key31": "5HcnsSEfg9TReseVs2Njqw5YbzJu1hpNoVXDxqVaQZpfJCBc5bTc2w71ayTejJPSbV5aGLf4CrM3TCUkyyV1qB2V",
  "key32": "cRqhubLUNsKqL2MJq124zvqWahWKAAX6nqUfZQC4h35ysRKpHTCzJbEorqCzGZ16uFcAQHiH8mq6dLQDEGWKGgL",
  "key33": "3Gh7AU4uiR9q6BYBfrHjYLmuioejHXYSUT3ZkVKNqDEcKRorhHm6JuVZiWPgXW8RdiSrzcR9G7jzS9dosvjRu9Fr",
  "key34": "47QypPV3sLeKHroBvBwB8mBy1jXzEyQnfnreUmSmog9dto88BqVv33AxpBsVTrbd9HXzhjhJ2aZUoNKcu5ZyY4Yf",
  "key35": "4zNm29Z664cndB2E5QP4tXpQH9zwkfsn5M6qrM7yyVo8iYrUgfq3qPAZAMaeH9Xzk98Drc89iAfT5HELSw1fwi9o",
  "key36": "3snF3UskamxSEemebKQBhdv4prRJ7NhEGkRJZi6HeUMwuUyAe8sdtmt5JY6ktgbFxQUijPHzgYumZmxwnKJEgSKk",
  "key37": "2MAaMGuA8zR9MLNdqn9DqmbLrdcAbuxVFZsEbNkoQZ17gj4gKCLavEYhVZDurp5tSHc9KVuPupWkUnfgLzLGDPV5",
  "key38": "58hH5nbEzapwHAAPJrbEttZsQ7q6pxxUmhE14aEi6XjY5UcmTVDX2pABmn2WyTo1QC17LVP7ZJGJnw17g8QcwiDv",
  "key39": "Y9bzM61jJqKVdYUQSBFXHyEq8H1BYaUt2zyPeaudECmtGUDbX7ojTpc7od5o6SmCeZzBFyYLNVNc6ZSbSTYGtax",
  "key40": "2gHKZYeejsLACeoC9uiJuEnw7iv7BYvum4TxmHvg8hDCLZmfpLvgKyaHTUJMK2eNEAbnakHnPZvMZzHZRumvphCS",
  "key41": "5tsm24jUTuYeturEUU2aFV6dgMBS7ziygvhJ8GbhjQPJ5qn5tRQxiyKJEYxp6BfYoiEoGJMZT4Sk7KLC69Ga4JBL",
  "key42": "FMD1GBirfx6AXZuBsEW957LxrZSYxVny3cH15v2UVsfuCyj1pxi8xtqAnjudAvECRZjavejRgpZgqUSSR4e3Nub",
  "key43": "3S3HMKNb9xUaASs18SGBMdVZmdjC9PKvALymYENxNyFGvwCvfUX9qr6LsoXncNkAXAiugz3HYHuTE8qKTCUDtGJw",
  "key44": "2f5Wh8QXxZHY2LvibfLgzibzBTqYwgh4xUG3kzuVVaXcMHMkxrKqtCFgDT5VNGPozMuNNcJX3yrg6eUSDLN6pXuH",
  "key45": "3nmWeVHBMtABvfyx4zeYDambtXxtYSUPsnYyf1iegPJW5xJsD5i7ScbWgfA6KbsySQWiMU61gNztosfdZ66gZz27",
  "key46": "3TmcAPHHSDuGjf9iyooVoX6FD7iQDjUAdvJaE9UzvzJytarrz7BJLQaTPx3PDawfzV8ktEVyuyVkfKLJb7djGuBm",
  "key47": "73GRqaNFZvbL2zLWmqMDNiSCkt6tc2knqrBDaAMN83ZU9UVVscKujBfTiYFR4HzyKntjVCGU49Ao5s7QYBf4gH5",
  "key48": "3rB6GhFsHtpexmpwNpuhFy51akcb4awWZdwyiFkeR3cHF3tr91U7RwNoMdPyGeRLrEaqjcYJQiTNsBqX1JdyYjhN",
  "key49": "5beWGn9SY3n9eAmiTJnG4KYYP8eodo5pV8v2DwAXq6p6M6XTuwTmVHCa5rmWtEJc1cRy8bnLeHyBMFEtz9EDqE18"
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
