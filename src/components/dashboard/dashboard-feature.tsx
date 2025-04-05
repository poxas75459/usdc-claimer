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
    "kMkKuT7woZEe12aJU4EienRAUCUDQ33UieN5TSQ21esZYEp6yGhow483D62bemjgZen3LY1dxzC7PM5SxcTw4Pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ng4wTHGvP1K5DbqfHC1XrJCTin61KuZDJDCHo2TLN94AMiz5XH7uSnGddgAWP2tUa57TerVRaeuWW59abQW16Mc",
  "key1": "5rU2CV98ttDKWWKKauG1A1MPZwr6NBEZhZQmrTxdKfkPfQozCqRZsxGQCSDZDpNjiKJPuBrmP1UBB9niGZwixgB6",
  "key2": "2skHKPGQeN8Ym2zv1csdbmTyGGUgtrr3tJLngQvryBcCLxEQZ8ue8NSwFNAX5ig3SiVntB3xMMZAHnfG8qTYZcKu",
  "key3": "4EN9pCCJ35BgnbtFSivuYXopBvPB9MsSYhTpsXimii55bbiWy96nqiDDQgZMj6L2KBUXPEFrU1VtPTwGpobryzLR",
  "key4": "26nEjjwLkYagT4FbChFrjoC6AATUpwVyrA6BMW6wsAEJ5gEC95XbeTiHhM1f9FhajnxDNQP4H81hLnH7qZd8o7o7",
  "key5": "2UAzH1dp97tMDSzqM6kAp1xLBX4GMRJc3qZdn5iTLD6u1GMJ6hy8Jm26zEjHC6Aj8xafGc127hri4YESwzybL2Dx",
  "key6": "1pcis4qmQmK8TeQackAcqEzxqcrpWqrgVkXUe4gNSBe3J7iQ1sQVb8n3gD8BBdm3qGqb6Y28zDaWJsdi27tJhhF",
  "key7": "GSvXbECmd94EwiRfYsfQ6S82nho6PR8PcrGuE7p4xb4tMeeaWPp6hhAoL83xjUGQVTrez1cFDbdkohadHPwj2bB",
  "key8": "8NdhZsxYAnThyqTpaHWBqixrbCFqdGAVG5WfuyzbQYQefWqsi9GQ4r3Eo7622B69ai7qTnDKezXNJPySiGg5ksq",
  "key9": "35krgnFnzjsbgeJRMo4S42Mj4Ha6jLSdqgUkmnRCcsdhS9wHmKeoRxLmSZDrYdCNGdeitimuGPLpCP9PKQH3U2rz",
  "key10": "5uddBUtuyv4XW5YGeVu1pP7WdPGTFwyPoVpL9Ut9h69c4nJouoac8PFx66SYxWKPAhMXwwN7T4rJ7aMcvz5pYkP8",
  "key11": "4fVWycpD2sJJLZM5Wtq1i79NHydSibAKWNQpMvfQGayTzRWfGirCxeTUACaR9MgRdxY2u35zVkxBc8TKJd8ivBFM",
  "key12": "4fG2dCNJxwm7U255P4aBvqDQWPse3DQMK7YmMgx4k2W3ntHjG1o3Ek1DVNTDENUHDFWHyyvnQzHYNpDhhVQqQEJ3",
  "key13": "4qjsSTrWADzYgVKede3yj22Gz3psXBSoDPCxYCFccwCk95qraTyLipbNLcyGqyRxVs5FadyoggWzECCBJCN1Y6S8",
  "key14": "7jGreRKcvaspV8JuK9ddYzpwRTNF6Tu4RxHbpvi8ZAbh8zT2rpcatDYuPPhFY8V1wfodtatC9592AJ2UTso9TrJ",
  "key15": "5EgZ7UMYYsfGMN2NATKFqEYSpCBjPhaawBj7GRfZPGpBSQ7d15iJ4Tjadu9cU1LYbPmx2a22Wf1TtFa8N1NmbtP5",
  "key16": "3AwwLv2ysAFR2n1gr79NZAKxnHYaVqf3cWys7AsbCnHw5Nay1cavEcXuMvsykHVcR3kAKXvPe9TFQqjMNB5S9u9g",
  "key17": "5Stkp8BrexAoUtNFzaTs72BkqgxXNGjFHjG9RJ4iPMoYq2hLzBdR2rSC35fCnu1wCCkSBavbjR49rTdghDbYFtNG",
  "key18": "4CCuYtezgp7r7AC7NDran53G9JZGU7c3N9YwnCVTWNjsXd7XxcKNFrMPBkwr3oLEwA3CJpjraaAfNq9yBPJ6N99r",
  "key19": "3upGEe7asfJtfwQtgAjnFKt6HRor43u8NtDttMZfsamYMxv7qG1922ntj5ufthA6Qjd91y4Gnx6VwLk1sCNWk2AG",
  "key20": "4dHazjwFK2i5YnWwS361pjhTkx72cC3JnazCh5EFk5mQ8JkQGRJUagCuE5oRAu45QqFuCmkRo11ot5CfAPiAtd3f",
  "key21": "m6xqDV4f9wPCFBnTJzTQfUGbpMkjsNkscpHipZAJVRCpGLyhyXPdH2TNhvXjJkCz9W2LbbDA1hYz1mvhFaJB1kg",
  "key22": "5aumsjiG9xcJNsPhXYG9nDnP7xvN5oyjTbDDAm8rZtAZMeLd2FBdnzr8rEGFMEuJGvb62TyV6XFH2AuQHkErdAGb",
  "key23": "4gwhAeSNJS91GzUpnm36auQwEEP6Q7vyQ7Mqg9QbkcxAeeqsumD8xjQ8cFozkxvCua6tZVahRbLhz1V55DpVDSgy",
  "key24": "osjx1zHJMFKNKAQfZZYAPnohPVLTXwgASdRRkWXE6oxqbMwnMDhRcYCNDDf4kPwvcLpS4styZGEwzqX1YmPPDiy",
  "key25": "4j6hCfauUNQFS9LYbsy7ELUMz1cFLB85m9bjcTnTyzs4hgcMcgNFFmqp6HA4z56jvajP6hYN9qA7Kvv2AXaGh5aM",
  "key26": "2DtckBAJ9VGrCjpqDcdr448vPL3YgzgChZh21M1xNNJg4Jp5igidFradEns63c2yHWWMBX7zzPDe9F1jPjDQ8pH5",
  "key27": "34TYY467HfkaEzYLwhRMQjhF8z6Z971u89J3hWQttGzt6K23wKW7bD7DJxRe56Vd7D9Sr7aUjh2pbh8J5pchriL2",
  "key28": "5tZziLfsXFVPjag9WYJoUfj2bz7Jx1eG9xASc5172prEYkUDrw9Z1jE1ZAnDx5Nsvwj23ZrL9ztJRRnCiMU448bg",
  "key29": "2VeunrLxncoWudDFK9yLR4qCu6i75FTDYyc16peKdStj7CcjdDqCgwxsrWmAyyDaZXGjuRvM7hkxWM7xjdP5Xd91",
  "key30": "3qNVWMQt5Qy33J8r4iVpiEcxPzS7ogwdUSj38Amhq259bmvRQEFA9JaNfjaZLhp3ajdVGhpeW2gN3SvDwwHK7BPr",
  "key31": "4ZEYUgsA7RMp5rbMKCNA3Z9ywW3cD7megfvQECipQtnTdBynQmJBLfdpLpmWgJhwMek9GvApS2UYL5Am1HrxYVyF",
  "key32": "54m3ti2V2MK5ibXDzzyHbfr8v9wcNVrxZmUstTNs8NHqntankCRtAujbq64Zdyxc39wHZYRTc4Pc2nGEVkY357iw",
  "key33": "4EM6wG1bARHjdAVAqoRhP6YrmyNya7aij4gsyz2xFDqS6AotnaQ7B8LCcPEtSqrtdh5TsmGmkMUpemixQcVixwRc",
  "key34": "4HBmQ5hF3tN4S8piSpe4RkUnPAyozM9ebsNdhWymtXdnmsDyqytwfP6B5N9Hyc22KYtQemwLNCWxPWBpBFsWZWRA",
  "key35": "2uUy73aFZUPQ4pV3fLXR92ZS1QJCAiSR4EW3jPPzceTkcxb3Jx3v2JMooYMGe98En8whb7qAAMYqiqxfBEYhG2vM",
  "key36": "3GffFwQ5bb9nLjRbu8q6W626K8w53RgunJQ2WGhq1EstcC9hES75tCn8mostnWJ4JkAAzGLiMtF5XooeCXkXRPrJ",
  "key37": "5CTT4LToFm6nLstqHvdCSs38SVGC55V4hPxHxDRoZBX56EpokSu7r997b2JGk8ttfr7Aa74Lx6abQvAGe7JsmznC",
  "key38": "2agd8RQVTh7MyDvaWtQ4QYi43WwvVdxgqmTtGAT9YRTGyvnGFZzYvYvata2p5FGVh2aFiSmGt57KsYddXEVN7K4G",
  "key39": "rftCpJLoftukcWMBsiXjFh1FNkB99FmUB1KfosvK2NrdTn4PJ6dhocUATrPAAmcHCnvtXv9JkKuU4FMeX7Gi2pL",
  "key40": "2Kv7qsh1Wt6jF1y3zmwoW16kmj2EKKbckGqcYdgbwMrTYm2ybpBFRHyVCN8FjwYsDmYdrkdeA9Ce66qQJSSzaDmc",
  "key41": "56pGNZRBFDQX4fQyhY9MjSZfNTixh1MXe8sLgKJDTX1AM56ELAaurafjf1872F826wTrksaKA8taJqFvzM2q5Tma",
  "key42": "5HiMRXrQy22cg6MwbdLUDR4b4kZ7gQMF76oGbAjQkSZH61RK5QEB1oqxxcv6akBGoE3f3DdhBBZkraGdLKYnT4Ks",
  "key43": "58JFXo9ha2peXFewxsFNtXVwcXV7bQGJ6NLML82dCozjayUDZG42awjMGvpQdQG8Ju9YercpppDepCyQUrjNEKJv",
  "key44": "2J3nRC58AamkV4e1Gcbj3SsZsFLJ75xpKbBGvDYn7zFDhyz1iwAY2CHKjNDvxrvNqraye9pgEqGeLVbZmGp2JFLu"
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
