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
    "64BzzCRUKRrAyPhoBxyz7tCHa2xL2UgtNx4iir5hC55zgVEG2hZs4vT5SxEWpUZY2XM5rN7wXFSnhRsGgeU7Ecpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fqy5S64HGb9fW8riCSqxr9ZdSXDtKgXg3m758PvipKzjPvfDJ62PVT4tyLZymEyjD49BToGYaYDyFXVcnSvGVi3",
  "key1": "hqpKakqDcj74h3L3wjTuYv7zhCfpVnNDsS9fRJur7m6W23g5cDySvJ9N6GaPBP94infJGurm2xyX6XWQ8Hxyr3B",
  "key2": "3w2iuhjxG67rBCzbwexaixjENKXqCypGnckfi7ZJoymaHZrKMtcR14MfEacFsht63z2CS4adi1ngQj9CfpLMyuP",
  "key3": "2SGELwwMMvrzTnZmj61Fts2Vv1mcZcNaMe16eLyE9QLLNUFn177ZfE2xiYijKs4jrtpfbNHPWnyyDcB15m4vV1At",
  "key4": "5JAN9PJyuqEynzumXEVu1nyMUqaGMAEZMkyF7nihyujhLPTg5ucKC9p4CDRtCXS23iMkzRLXcrmuhdoLHdHT22f8",
  "key5": "kFpQKiUYB5Xq9Dhw1nE2en8EvtJYf8XWZUWbveF27Cr3WZ74AWmEq1ByPetoeZKrrCTaPsLjaMd2nyrMGCncxkg",
  "key6": "bTJwBTSrR7atHCifx3cCuFG76C4gVdn2w6iV4JMkmEB16Dj5jyiG4BgWrJ8sEacQRYKSGQXwm2MTRzXXDCxcD2n",
  "key7": "2ux2cEdnfDwYf7jkpYdLerkULAXV2yHNqpQVf9erYpAXBLaM7E4jU8e4KzDrsopJBGx7qyZi9cvJVwYaUMrzeuMp",
  "key8": "2PVFqc3AYxuUQqy3aD5GgbDcNWf47sQsCZTLvQy3BAYWH7HtePq6k7Z722Xqi1Q7a1bjWZLQv1eLqCakBWTfX3Y9",
  "key9": "KcrQ3JmvWJySVYT3NLi5rBJrKQgWxqTSqqbhyWZEsN3kWugfb2QUKDVA2AymgYqcupWoFDRMM6no5xgJ29u89Hq",
  "key10": "2v3sg3AhmcojR4vHFkzuTsLsLWJREoC7BsMdjWADpDFdnkFpdZeXmhzAuy2Ua59szwv74Q7e4TAU2aT6kbVSfGpF",
  "key11": "62kYJ5uL1thC45x68qh25PLEx6DADJ3YFuzJF5ibmEZMhzfasaWGHxgtuFYgRiw7jsBcoG2ixjgMdhLxSbL4cLbe",
  "key12": "35yNhWLEfhSLaQow6cL3eany8aruKKof3sZkor3VTRzTbEnkCpRBXkvidS1w6sPkZhDRzsf1JZfipZ5NJWptmoAp",
  "key13": "64MF2KtDGjZARTrnPt16TC5mF7MVwVakPW4a1PqaWfbA43NKBafdhXh4szydbvHQGhmTfiQnVuiTweLUzu9QKUKF",
  "key14": "qXH1Dqh9w9vUmQST7ozLKFqB7MQFNKNDu2oF6Wr8XRAdN4hfvSAwBJECch7UmR3n9PAd2yhwauCZRr2TJdbrnoo",
  "key15": "3gmAbMMppcYyBVSBAk5LL9HTXojBzVGk25fguBZ9e2tgoCyswF6t8YFQ9SyLzmkTpNheqWDsnkvWhjLkQ7qtLfHt",
  "key16": "2rYP2GxGNZhC9QWx9NGaaMmP5R57kM29rpKRxCrCeNxXawCtPstY5czvkfwP9DyEesC8YC7tGoiP74iUZyDuxLL3",
  "key17": "5nemtYo8pSyRdZsADvBvATkV78tCzrJRABD7uF9CFHVg5Z19wnnFgqxT6tj2qNNKeQfRNg1MbKAjyzGuZPQf3En3",
  "key18": "3AquEqY8XWoUBui1ZN8z6Da8YYV34vewkU9SfwxoxbcyrLcN3C5TUx6cDUBCowbhHUdwfSUA9VUCkcHApspCFkNq",
  "key19": "4RhsASdwgrD5uATpoedxwW11ZL2qVtejYQwRuFUbfYfWqzgWu6aVH51hmy1ayH8CaxH9AzUYxGc4dZw7xexCMaCZ",
  "key20": "3fCG4UnXucMadujKomD2qSYjzKp2phq3ze1YREcJzi5wyb1AKQ451DcxCgd2Tb3ecYXw5o2vBvF1ugMSCm1Zzzz",
  "key21": "3jNsWFuBhbncio4umLU7onXpygPJ23qHyAT95NtMQ2Sp2aF3dC21xToqSDkJhBtstLQcMHeTfNC9VQquy9PXScaq",
  "key22": "5vvbGorHhgFijSvkW64aLszu29UNTLeHD3u5TJWFSDZrtvm6noWEEggDiqwpiPU6SsrtZrAZchFkkB4QEm8tkpHv",
  "key23": "59ChZxVVeFsFSi5UiibDBxvmHZqy6w7NQw8BMvMdk45bbRryCCfHEc4Rp9mvrEhxVs7hvkzeam7MibmyzxJBsJkf",
  "key24": "3FbDgGJzhqUspc3tNwdNdTaEz9eQspkGGxbGwG1TApMLixhQBLHTb3uNErAA84YX23pPqtcPbat3Q14spL1EbDPe",
  "key25": "Hee1HmUz772Vzzj8RuJHCL5Nj8XstFBV1ca6G3aMLEFZmjz2kZS1KG4iAaWTbo24QtFzD7aRj1tqcnF739H8f5b",
  "key26": "2d7RtmZpmu96VKsQmrAPGzsGUW2ANWaafZeUh3g6sZPi2zoP3C92TUmJekYbPnVxtEEkgQkvbgGENCtJKcCAgi4a",
  "key27": "5Z6MeYJDRzcrtKbr2V4nwUAKRcbii8s7CE7DYYx5LjQM2GSVfnxir6jUn3GZKtV98DnoMSWF4341BCnBtoeudPK3",
  "key28": "65HdJsEj7Xf5sDYVMbtE2cvSXR2sSZs9D9DRrjssEToyao1DAL9BqQ975JBoUb5kPNXAGLwGcLZustmSVLS8qNSk",
  "key29": "U5GrW9kCg76QAQPeQQfKfpddJReCgyCnL78a3BNGZ7znNZkvmyQKMUQyVhXURjuaM5STZnGg9gsai6FJ6VZSGxR",
  "key30": "592WqMPkHPQXo64SLJosb92rxEb843qPhNHtyHbswHHsKmxC8dCZNfMb39t1FzJZDLBygVnpKSWchhoFkrYkL4t8",
  "key31": "53tFV4mz5U29TsUMb1Bb7Go1ukDjkGNhaEoeATzAWS9t76RVk3AuPpSbSncqnH45DBi3GftQAB4nahBke3JraHag",
  "key32": "Jh6iVNSR9oonvt2QP119MGt7J9b3n4ozKAvKdWKyPhPopGLtnWPXhZwUQKGu4omBuDki5a7mGp7CYCLeoVFd6ZN",
  "key33": "fQq1GZTpuf83o1f2fAxLWFfVrrDxhTvULFnVDNgumgwujt8LxUSiXyEVJG41pyk8H9ToZcTqsWLNxmd2QfLecvD",
  "key34": "45qiSkammyTZtaFZJKL5b8CHTLzjFfAupANWovqLNdWnviVM6G66x5Rk7pR9zQw5m29tH6BkH79W7FwbcBiTDzLt",
  "key35": "63mrmZwfBfsgsUGf3BE2QhyYZmVvgCBbZ3e9PwADGRfosJX6PowBMWJy1XXfr1q668bhmvf3gd5kyH8AznGeQwit",
  "key36": "DH1KaL3aoXFqvD8Qtwwd9ZPmz1kQTuDb9LDDrfLLV37G9J5a5E4peRLaTwxVwvjBayzSEUszNrwD5q3oGjXaT8w",
  "key37": "322v7Yo5DnsNSWfEVw8x3VroVT5nHgQobQH44SKkRKTjYHMMrK7N63kCFfnbGK8MdVXtHoiULEtJSYLYdkxD7ULr",
  "key38": "4xXYhJmMvZ7LrhUHmbGFw9CKqeXFBpaf32ksWVTmigLNMs18qz76w7WRJaJoM9gmnh7i73GQL3GnAEAroVkCsuPS",
  "key39": "4QQHeQNnEcHawQhYEzaUBvQsu7WyuSK2km8ipQ8MDsqqGb1iRTfmR7g72b722PwJ4JwxkhY7B1SqnYFcMEPoKrm1",
  "key40": "5Ln5Rc6Bpu2kHJcPHvMTRr6iRfUL7UEvk9Mc3kjF7Jjp7EzpWymFaAFiudk5548bpp5vx2AeRanp178uwYMAKRjm",
  "key41": "2wd2t2rs7RPui5QphkP9WzZm1j588JEaDPCapF5Wvp7PEzS4uD9vTSs4NfxZLdfKBzNT472GxXbAzTqEFKRg4UT8",
  "key42": "4FhyrFooYBbnrJVAg5Qmgw27n3QbjXBhDJKgg1cZcqbFdXrA95VUBL1LZijZFesDpC4eQAPfhvHcLy9wQeqDHqWn"
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
