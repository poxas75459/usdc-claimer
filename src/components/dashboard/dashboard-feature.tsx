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
    "4QJuYuycnu1AEv4HeN5tncsA1XPhVhkYFaM8ZHW2wscAGm5CNw6PHR1avK97FNcgSfmQzbAF7zkpWN1HMkzovuRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmqktNmkJTxR3Qoy2GFFS1MkyoSSjpy6L5KiKoyK864maCV8jYHo6u6tjeXQeEcLpNu8EPDLMyffvoqjChdcpAg",
  "key1": "5Q4VbyAjRs3f646Ne4LziuMtaGhMhTpSbGHJjHzSzfLc92j4UnpDWSEYHyeEJGMJcZhXxFTZSAbcGtaUCZHd91ft",
  "key2": "33Yz8nt5qNrFQbnx9xsqW3krybKHEzRHGkfkDpVqLbuGD1rgvV1abQkXzX9PxaTxQzY5XGgMjcztZvkBYMnz5JK5",
  "key3": "HDaDQcDwy2bCmQCNqJnexphwDcrciuQnCYxcWb3BHA17y5rKdWZtEkCCnkYohcePs6VWm13GdQ9vtPQLDGSZSju",
  "key4": "3xGKC5eidKsD6XK72VUrDxfCFoCA9o7pyLSTss1SjKxiEs8NJEXu4GmEK8qyjyAcYmQu4yiXQUGpamr9sjBTFLZS",
  "key5": "5wdQc6my3hqadVCoTmP2wrGsxw7XaoUuNcodNjHcrMf4eEm54QQek9GHuGpfYNKiLqmnyppVVwb8RVKm7idJmgAB",
  "key6": "2o2tbBBcbc831YEiPREo8Ntr3ZKeM4qRu3seqmK2158VWdw3GLkZeYNumX7LcY3bPFymNwC8u3XqyFz8C6yXywcw",
  "key7": "3uxC9efLN6HmgWGm9YxKxwE6ngCVCnFw9Yxx8jFA8kn8MTXy1dHbduKXyCepMaL1crZ7Qyn8bB1PE4H4jCShP9iq",
  "key8": "2GhG6bpTmq7wHVV8QD1tJ1ybT2Ukjp4biEdUpPGRzm4UuHmiowwqLhRX6E7ZoEn2sdZjMWXNhPM1DjxeovEfSqax",
  "key9": "3ge73vbXPWSQ5RyT2MMy1MpgCuWY2Mgyk8tnrE8dricykQ1ktgHXayRynx9AmoZh3HWsyTSuhK86KYn4TtQBvzxE",
  "key10": "5FZDGN1MfGcfqUpBExXkbpznfD4c3nYMw4rYqw8eKzcdpcv5puEiFDGLvzwpmvK3kJJ7eLUD3SCmQVhdmJctpWTF",
  "key11": "2cpNCSnsFF3CgCCTsD6XFHvf73W71rNt24BEuaT3EZz6aB3qfJ8nGXgtJb2MZi8zWcCLBSBewBeQdGBSHBsjSZxv",
  "key12": "3ZtTdcEAGXprKgRRnsGwQouZCkt3DrZECU2qgcir3kM8wt41cvuoH56QMtkEmun1yPceSwHbBVi6h7jaDsPADC83",
  "key13": "4xi48bg4Bnydo5jt7anfhmyrFAPF2kP7r3EMzZKcFTzL352A85d2yZ7q5WfU38dtEYpa4v459S9TduR8Y6xraW7t",
  "key14": "EU9fUMRxzz8FkeA7pW2xkhvdWjtxM5r4viG84ptqyJ3thveAbtyt67ErbYYXhF8PpwD962v5WUJHhcmBuqg6YFH",
  "key15": "2TNiPX5WsfRzXHdZP11broEqs76Szvz2ubjjsXobaVjrECK5YnPwNCgDzDKrojKqn5xNEU4FEn64G1onGTYjad4P",
  "key16": "5AWNGi6kDPEAmKq96zdYFFP2iaAFXMY4WC2qbgpZFJ2WiYBukFtpGJ96feK1f5fUiWLwWjKptUpdqjHGTNFd7Gis",
  "key17": "dpnyYarbxZmWmmXGkaEJSEWDYmMxToMxLQdnKSJHGT4a7nA2wrCaXifSsEQ5y8CCDZS7nMEHXXEyrwi4662d1fb",
  "key18": "5XjCGkjEUp9AXkodgsSGxwqGXYjVAnTapFwk4YUsFa4TjnHh2LwxWsyaj9y4ajqdibYAw5odFLoaSQgcEoPitpPo",
  "key19": "6rqntBiL53v2TJCKAWEwy7coS1QM5QMiMXBL5qMrdQQKdZ9pnr4CHFrZwbp7JV9bNWfAXFxTZ3gaWaWs2mg6DRG",
  "key20": "5NDjbKh1w5Bptdx2N1MKcze9kZYgGMfy6PNMnXbc7X3j7iFYutSxi6cRFPzpvWz4XfJG7EHcc2URgbo6vMhXvRZp",
  "key21": "3KjLqQeraYZKwqBUrgrZXfB7k5UjfXSUHPb34x1qqJ2eDGBuV9zmKMWzJYb4VSmtfZojpydHxvFhoTfBvE5L22bj",
  "key22": "2GTNgySyETsu5PRzqvM51pjQ32Qcse2iBcxrtrTGu9qBvXmJs3NEiSM4PznvaNm8u9cXnL3wbukSrfyFtqXEfdZn",
  "key23": "xSKe1h1BTDDDmX7WCMxFQ3rxfuaNkwBk6pxFPjP8Fb5F1Um1GheyraHdL6PxEtTXL6bJLjAfeaPZ27BoeEg8WJ7",
  "key24": "4FZXigan5JUAkK2mMqvdrqHFwmj6uYAbeTiYpvL8W39HRGoMpSv5GtFkaFoybugB7ohTrMUtiQwPpbyHYkDFhBmy",
  "key25": "46hnvnYe1AaUqCkRzfCihdMeyGaBNXHeaPp7UMzzHbXL9Y2oc8coi7SDV4ggsZTnLPFyy7iZ6HZS8uJeze8vcrWg",
  "key26": "3SKKaRY1SXXjNtjyY4ioPGw9FysapaefNe7vhorJ5VYQBkvbKZ1oUUhMCjSw37YJ5mJH8uMgR45fLdQdvMnrjfTd",
  "key27": "49rZmv9chhTuj1vzfMjgtWikUYdBi216uo351hEtw86oYAvh7wwr3rcDKU1t26Nz4Dt1hYc5naMprsy8uLJcSWJe",
  "key28": "sjHqRXDQdiKrVW1V2GiioBkJbvjQtASFdx2qXyk71EVvdt9vnTKeGbVkyBRUDh7u1g9YnbPXARrAkfGDseTE5rT",
  "key29": "bvw1e1cWsDwwoA4wwgaDEnxQxZBs5GGMJpHurqZ2QuXbG7wagtJJBbxMuhgsHYrGaLdpQZiHZUWv2SSegqmxW82",
  "key30": "RvGreCgmsYTvBLCxnjF14RnTN3HDzGGDRQTfwRoMeTdjhscbTACHoKzVA2ujdTsSjPtnNEg4Fvt3YANPsLTrhQ5",
  "key31": "dSRtTURywY8x6goHdYFhaUfJEcuggDUmV6YhKVFqiX8ioeoaUuvkok8HTiquso4gVqFtFsDPFzciMah8RrMoAsM",
  "key32": "kJBxp5TrZptuW4JuXPZHiuRuNg5Dw5cfqz7VC8rn7kxQBiaGCfSEMee8CDa8NFa4HyySQuUWHrmSW5kWtKBEgLN",
  "key33": "31wgppQYexHcduU3DoDEjMoiTnVfeuPx5eVUaXGCy1mVhFoAdZe8h6ejfJW5jvYqDrDqjQnciUAWZTZRwq5viK5Y",
  "key34": "6xYZDwJw8hMHwfkYqQYq6FaYBU4DHa6XaW7m6ygSrzCqnXj9ooGf2oQGKMcRTAKQcxeCsq2ZfZhVCctdx76rkjB",
  "key35": "J539NcevpJqDcoPryLZ3pzAQQCJdxbpNGpV8veJjpXfMvAUaErh7jV4M5Xe9sQHS8B57CJXS7acnPMfTocqip22",
  "key36": "4k4iTtoXn2TQ1LSZVHXk2ca7LM5cwPziFXpz2e1gkHX1vukcYRNDe4NS5Ba9ajXfB5Rjdir89ujA1ELkR7bfUrh7",
  "key37": "4vR2ZZiPfJMM8EzZx8KDa6xzDnTHRQJcyvbB7nTxMKwhfud4F1FzcrcXzeeTumn3FhtZNL52Wnxxv4K4cUjMqWFf",
  "key38": "D1To8u5vyt5LyfEQwAWiz5ZF47ALUq7TrsirHQZiYtZFPggYdaismihCncJFikXYZjA8u32KwAdpdaFrKYd6w6n",
  "key39": "3rcCoudmn2VjvgmjatZD3t8tRgkDm8PcM1GiwSFuPE1NY4Xq2PySAzDjTdZVPjpvxdLoAMHxmYgnPTNMgN2nHfmA",
  "key40": "4aCuA2LTHCeA3Sh23brtX6XBvJ1MHRUGntfyqE89xZWU6b9upTgSyRekQQ5tDjCvmEY8jGoih7ax9hFC4kvMn97D",
  "key41": "54cP5mYWScLFch541oVDsxGtb8isg842xHt1mup2oecXi4un7WadTihqZHPybk5MMLz37Xxu7x8QkX4oQ3JKktz8",
  "key42": "3JYjWgXW1ctw1VWE1MUdhG6onENoEPQBnT7ER4L2kHo2vHR54vC6N4dPzXcWuY2opCrQd3fEqZNYZKijQFg6fZ3x",
  "key43": "2wrW3VrzmRcA3f2A4NMe3pMYV3U9XKAjvQ4uR1kocrLgt665NwM3XhcDd3QypEuf2kV5gZFsN6d3MDA7HWAGQPw5",
  "key44": "4HXzJWqdTYx7g3rtZLagYmRpXDUsz4jTPv4kpkUy1ap3hNqCB5HLej7Uvwbtz4bR6j64aGT2xZAY5uFNUTriGodT"
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
