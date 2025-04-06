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
    "47WNQevMuLDCTWRoPYKF398ERJMcgdUovgFdy2xfsUC3m37PPEqFWZzTEeZ3cUQ2a2WCZpiqfhxnN8Y393gijj4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocuhpK7vCYmTfQkaaqBLAhTLzEAnrQFYwA6jDjHsL9DTZRvTyT6m8tbuHWgroyai1bfJ1ku5NF8yGkrBpFzK53c",
  "key1": "2NX2cAomHcXVodQDbHjaf2PqGbro8QkjbpfLHwArzwdmCPdA6U96cwBoMG7Nw7KQ5Jg1bE8kEtcwp3eV4QnVqWPF",
  "key2": "3MJ8Vh6wm2VB6bikVxpPATwJVSXAHr2wn8SqFCnbnYNZ3UhD5qyRapAaNA7Dgi2eESuZQxG9MdWNwmotXDEwzTS8",
  "key3": "65eX81c6HJ4RdKKM897cZYbWEPucVmJBJy15TkhMqpoPLCPwEbXh5hTuh9a5yCDQye49EUaiNBefpJPqusRpdLTb",
  "key4": "4wm9ZAvZGV5MLFKGGVfx6dCHofNmD46MJMv9teeyuzT6jAx5rNwW2DjbcsrhxwwoRAZpRqqQWrQfFuLBPEafXRxJ",
  "key5": "5FSTPrZkByqcHw17oVHh4xNhUrWUtwfxDTXHmh5yGetm7knGedpvFSThfqfXJzikL8WiPcQ8bd9r9MmB7hU4Gat2",
  "key6": "3ZRyPmCAhRtffkiFH1zbqfwQLVWoSMesKHeH53HL7mAjJxx5W9NLExu9qL2GcMrZK72EDBPhzvSnC3HFHN2tUVTr",
  "key7": "2WyCfRns9U3hyLjkzUuuFCbFmaEg4QemtxnM1Uqi4iKKujmofXYVTksYDjXANQZBJutccHfSErvk33Z1sd39t6FH",
  "key8": "5hPDYXrsSKRQeKR9JQDP8P3eabSHGXqFkBm6RAMwdPZ2LhyzuWojBpdNbwH5wZCZwdtgVxNgHM3gAC7VHqZ4LXKG",
  "key9": "5SZVmNDReLk4mnLzvJgAsP4yi5KCCvNpA2pQJQGt3pjzXmMEDUD6dntffSvp7Pqive2XtmHJDLe4rHt54vJSfJuQ",
  "key10": "2XvuWArDocJ8fkBgUpnvU1a678mA1zVxHgEW93URaCnWZUCgsD7icufoZLJfaFMTouLaMBiRCbMz2MaQA7VDPhJA",
  "key11": "2zZAXDL5kHP2HfAZAJFMHyF2WzJyoWjdFNxdbkXGadyXzAagXqhKvsfxKd6GrsivrXx17C3DHdVxkKCazrsMPKxW",
  "key12": "2kvW5PHx6RtRN2hVxBHSSPfpKxTnkc6GAXvCMyu7edfse7kLSud9m7a2zjqbi2Zc6Aarp5N8kK1MjoRWdezbEhVo",
  "key13": "2xtiSsUQ8qF4ratWwn6hvwL7Ru2UNcVw7fjJDhEHYsGdVkf9pCsNkehvDAobrsb3zgTCCQJ41vDJv8xtYEyjKzQD",
  "key14": "2TYJxsxXc6fp5CxmGepCN4Dq57HYinHwQjthxHKhWNuxd9XJT89Z6USEAa1TPYdZ65CjAoxyLHHBrPBdegV7AsnH",
  "key15": "3oNFhXUbiyrc51gCYDzF3x2Fj7cskrDLxrbaRJ27X5fB28mE2BMYcBLsHCnzRQMkC9vFZgTDhbmmCFcJANo8ZydD",
  "key16": "KAKmrbAo9jfvu4BBXkfEZufeWMVAPL1nd7u4axgigXc7GT6KFGoqT6iVQEU5JDr5e619yKdyN52bpymKZkw5B2X",
  "key17": "X5HKXWdKGEr6vU2PtE7aSM3DX4GBdstDxH6j6h8nzpC2txu5Vj7PkrE3eJ8CPEBE4VqWSqBK71n7QN9xWM8DbY3",
  "key18": "2RiayUf2jZhLcjEB2hzhbEMV7UEZN8DsVoqNTEcCxBJoUsoeQDTJg8WUErrTheLQfnymxYJfuAtEbrvnxBh7xzUb",
  "key19": "5sZHJytsySHKz1FvwJCAnZDa8JYMFHtnD9xciDpProGcpqnZKF7fFRAVypSjx2Q929m4WvVrSwSixPVSVuT7sYDQ",
  "key20": "EA7KwD6uFigYRBn8jM3GFHeftw4NN2Va6RkXpDHXHYTQTRSYV2eFv7GqtCoWM7Q5AUagQ4hu9coyQGN9LgD3Hpx",
  "key21": "4VhsMFjZ6uK4BrqWN1ik992bsxS89EB817GBTBqBvTRexySXodzS95KHC9iLaWhFDMvaocvf3yiApbac6Higbipk",
  "key22": "XLavMSNPZS1nCkDMtBEXSi9UAQcFHH74MuSXjJBHhhVyGWe1dvcqmpXb5va61GmpwAhGnZ2fvfw1A2WWeMTQnnX",
  "key23": "5iaKuscGYyJXTJ5ZMxK6yQ4dG8Kg3FR6mnCuJBHFtdt1P9CmMSnKhqfbnLTskbCugmTGYp8trWEUzqYg4Y1tT2H8",
  "key24": "4hAN8ywZ5uZFp7auBcPi4dXA7m48Tqheqy6QrtVJVwRQwUGyTT4WrHta8DjmuYVsF49AgJvRKMNRzviWhVKcurct",
  "key25": "iknXPoNwoxjjNXHMfZfBr4Pm9Q2aBFHYg4KMbznBRjnaF3VPto3vHoFuuL3Fx74FrGgYTjNdBR3hpuDfDCenTR9",
  "key26": "498rXfPgpz5h5fnoQXkGPZWPqqXocpatEab51M2XwAcFZPd4vtBNCSsR6x5R27QV8CTnHifyyxgFbBX7T6mXmqFy",
  "key27": "3tAsP5auwRRxWHVGC99UzBMyNWgPBYdWLxwYq1ZsZxQiM8Q2DobYccrqbQUjptStihJdBUv28fGKw7ZhZYf8sJfa",
  "key28": "2SGboKQjDQ5SYKsXdc53CxndmpiesLwNojK22hezNswp7DZYsQMweEQF7RFb3F5Uvedx92RCYcu45R2f2yHNKGKN",
  "key29": "52AFQRssKNJmb5VSHRDnnJ3LuHK2g9oQGsr4xHzbHGWsQQMwr3bx25HLbpgWZFuDpxxoJB8w4c7uVdarx3qS8SeK",
  "key30": "wZb9fgsGo9Sx6sqgEBCUgQhJXc3Qet7ZUgd27jDJXqLc6xoJjaKmXSDosv7FfM2SiJqkysPj8JCw3efMSKPzQio",
  "key31": "THecK3m5aFDYb85y32NyJJSYcrzuyvErKdNMiLgUottXgSEW2L2QaMnnWN5W5ovg1G9Cq9WB9uzvu1drdAYfLgr",
  "key32": "61M4c8szS5MX2iW5zyWrRAaLC3BSrufWeBvRXw3vUdFKqAm5Qseq339NsbQGNs9j4XNN61C8FHCeFYJApqMt4Pd7",
  "key33": "4V48gfkhNUsVtqxPtKFfzQMA54QQHyQqVL7P9rTtTyEMmLoggjryoPcTJ7wXGZjx6JnMC2rhDf1wN6HRfGxJhpvV",
  "key34": "2FPNdzu63yHvn4jLjDsSuFrX1ypLUpH7i7iFygQ6ZjYyr1sA3fYxUFypdqaiMmgqjwsarZZprdNKacwTueExh6ca",
  "key35": "EzVg9TzgpYeZ6z2c2QPgUYuuughYKhEAkJ8uANcigP9gU3s62WiosA8VcTvCXypBtdfy4JNfZNZkFWduoFLbtz6",
  "key36": "4tSM56MUsVZJ5yMP4ePVAjGgeEJm3j8HLgAXQadeuV7J82GKafwxcmTb5YoyGncKfUTn9qC1RN33jdzpz7VQ7et1"
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
