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
    "4HqNQmzjFBWnfQb44eWsrmhY1LuELkmcW7B9gCoqS2fQJkGXVTPuuwEeMwU5e4w38ZCfqkM5Hb3ya5skPN8gnp3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDcL3oxY66rowcSUPMrZ4vzNZ88W1VeAuzGPhKf2pxRiYvXwG4ooWA5LeAEeJ21rgdrRpdtrgYx2r2jcPFRt5xM",
  "key1": "8sso9Mw8gW7KZ2wjfVG4ELbr1WdeLss3EUXN9EpyT6QtJDBd5GtwaQmfdnerVRgW4ahm3Bjpom7RfVsiGBEr62s",
  "key2": "4TvWZZ9TKMrmnAU9mW4wVaQ1eA6htLrhXBrwQtf84vFpagZtZFDq7Fn28GukVrvmwkA1V1vwUXkyArCv9Poixp1A",
  "key3": "2p2y2vS57k3agDFF8Go1ScyJhRwyXhgkLBEpHY1cEett3makuNLeBfF3kMPWppfBzujCCzupQWnEu5MBudUm8dFn",
  "key4": "23EEiqhjSGT6neSPrxCotbshdrHqzAPZRHnXqcp4MUh4Xqda1u4uUL7jjuXyNzkREQGjM6MMgvjnx33ab88eHLhT",
  "key5": "2BM6UiszApdWU4mGmeRQMRoQb6v3qQ4iSFnJwoBAf5z5HNMXw4vEJWwUCSMgGxoV1tumtL21RgCtav3jxMMV7ztX",
  "key6": "ZGibMCJY8ABGZ7zUic9o542hQuoRHsrfwuhs8Uqw7M4VniqFpeZNAeZSjSUcn8KqjYtv1uME2deqdkeCuX2QfsT",
  "key7": "xqYBzzw3s8Q413U58DWVRwKi7YNobpNDrJyHawvhGu55soToQTq4zSktvpbWWK2SYZzXEEVjHRAmDHKbRT5ijTU",
  "key8": "4UBnUp4bZoAq44U1uzoP7u8SwxYUgkZZxEK28M6jwrCxaPHaTTshXyVQUgdCYp4X5Ji6JwMAH92PSb9m4zE1SzK3",
  "key9": "3sw4yVJCxtkniFC31i2RhfkXhCig7MY8mxCD97gBXSgTazNuw18VduGW3gxH8wxcUEyqBN69ym99e9xFeuPBHYmS",
  "key10": "4azd26HUuk7PLR99u7DEdaBrqUZKn8YfvyCLRtq52SahTSmnzrZoMtZcidd1gEUPjkTmV3i3TKaqdFC5TCze7QU8",
  "key11": "44ZswRgTKsrkYsXUDNpXXhmrAqfdc5ZHBsucyDtr65qAXVWDMiAPQfkNCfsth3nWLnhvmWL2qqzyghB6jQ2fYfbW",
  "key12": "z6XLPw9AB1qmsrvs97Fzu1GvzCV3urqjPM83CBVCuyqFymyCCHPHyQx7t5eqUdzmrM7NFZUBNNXW6Zctzy7cdUb",
  "key13": "HHcck9JTmZoYG2nDfCKKYYDmyiVbvGbAGceoXREo5gGxFKRqoQbWRe8gMWYQ2iWSykosei2SBgrS2Z6dWJXbjYQ",
  "key14": "4fEaU9j7YajBhPu5bo5NESq3j4Z3yxNXRjXF4wHesTroaQ7jo5VdWY66Ain52s62kr4rknDsv3jt6yjhEpSwrDL6",
  "key15": "5yA6LvBHiVMx4JDGaUaTEBfPzB2ENw9TTL7JuyjB91o3dL73MQTvNJGQChypzB4esCBqjxrksKNpazBLW7aLAo4v",
  "key16": "Ea7mbkGPUjjQ92r3XMAvEoMru6qadBR5Wf7DKgszvHME2XKYfsTJxRiq5ghmBGYZ1B6BEr9Gn5dKnt9pPhRMqoZ",
  "key17": "YyXvayphebcF53yMVnqRkK5nPftPq2dQHE3WbmCRS7JQmjTGEUjTyKm5xNyTaBG4kREkYCfpixUqdxBGKaBTsH5",
  "key18": "5G1QnboAXrDLhDfcWZsfcAWHdNc6xDe7ajAqSc4wXpmPM1UfkaX3hL4iaPLPGP7HtB9agjpn7yAZYAE4V2kFfR7P",
  "key19": "5VrJ7RRAUnnY9NT7nW72hskVsyUktH2viCvQjoKLyR3yzVRR4y1aY5buRQzAtVSU8MEpv5am9L9NVP7hcp6nswB3",
  "key20": "MDmiar3ucVws4kNqzieR9SYJheUiVENLkEiUkXMZiSWoKDgggHxnyenb2KSKcn3ynK1gAp6FGhkmhgQvib7Kuxg",
  "key21": "57XLPqXnxK1PdXFheZ5TqV2T3PLikiKukqDkcUEDG6sM8NrCf5ooCkKp8FXZJfdjgqEWYD7NU4vTZ1sn4G1exZBJ",
  "key22": "5HDeX96AXXTzZgp6YugYMdK6tBE6v7HkzHocjtt5HWzPmrvoFTzmTKJTFGNPA4BYGR4qboLXsjitnnuVc1iJ9AiU",
  "key23": "598SZf4Tr63tr6pQVxJhKUPLJqbKDPGpWAULf7d9JMdFGyrc3GY7cwhASGUn6DGzANCQwiMv1ADKRrh5rq48aVNo",
  "key24": "4h8EHnALEpHpBDRzhqYzG9kErZR3aZiRYCQZAFTXFFhuN2bhBhEuSFeY1GqD87e2dK1vuUU6KRyc7jFn1cfQisWo",
  "key25": "2BuY9UJER35VgWQeBW2bVdzsBhCHBNbfuQJ8mFxeiqf44Rn75y2TrLB6HfptAUgm2yDAx7P3aytXzaBw17p9Yiv",
  "key26": "GQzsv3hgttKBK46BG93ofENCtqDqicxP7R3NtFNtxbLZiamgR6raJv3WhnGg8mghWAsGSQCyeLStNx7Q8iS2wEh",
  "key27": "4CPxUxghnp96t3bJ1q8EqXA3m7QWWCPeM1FeAbZw148t8sNiobv8dAtEFHX898LFPk1emu7irCAtAZndgoVg5jHA",
  "key28": "57tvJUcFZL1BGkJtQ6qFcai5e9BScNX7cVYBg6RDZzUhCTyo4Q3jGVYs3R3T1yNbySfbtbjvqrqgRDirKJgL6kRy",
  "key29": "5YLo7roQHkvrBvFchuBbDyTU7e3nw893t9gwd6HvJtmmGY7LoPNqF7PtesnMKe3vhsvojQ7hUMPsh2rdiQHoLH5E",
  "key30": "4kTKwB9kvsHPwWvsbnauCFgprfBbY8L37NXNBnVo3eNNkshJDLBLD8JBV6Hrk3R8SukzdGG2ihd57V7BnKva3Pp1",
  "key31": "3KTFDtmGECMsDc7B7D7PfCdkxHUK697aevdPxH5u5GXrgKdFVCHPk5aubGGK3yE5tTNy9Q7eKCyCJrnNvXBk2HVa",
  "key32": "4GWjyoYFpczp6bEPEV8AkKektuemWrAx6HFYFAuFDuNqT6pgkcbkWHTLyCp7pReFH4Hgg56AAVTpcZRhi6991Y5Z",
  "key33": "47U5NtEHfWNrkDnxbaMSWf1xCcEc31GZzjbSNRHkiQ3Hbq7VwsC3uh5BvvtoyQ5tjyQKjLAxcZhNeCY3ANs53GCd",
  "key34": "fQDDwWiXdBhgVzFh73PDJyySm6KptejCt1rkqL1weWJTq1Qfg3JgohnkiJM6SH12WoJ6EuiciHbPydy9H41asSv",
  "key35": "5FkTWmCjQKQfPTAqW6RCdt2dTQbGB6VmK4mmvCuNL12kALDAjaSaAuKg66Tkw9AXyDdZ8wFkk9yJNTmAti8PcxWz",
  "key36": "5FqpqQMbM4yhNHwcqit1RWgwd3Q7161KeEc8KHMAgEZDojn1YKuPq5LRhB9Y6bALLpMLwnSKucd7222R5NAKF7Xu"
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
