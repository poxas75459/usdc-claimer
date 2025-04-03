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
    "2X3b8UqXZ3HNHwizzj9ooJWW2UGKtwe8zcYSpAEWeJFAViKRFdorVZXjn6q1pNeZsQNn2BWRkDc4aRSecL2wwuEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwC8uBBaYd5Sg3W2LuJU7zQHCsechcFz34FGk68kdAoXYeArRavpirLss2Nv31D9ZpPZwi3ptDwnYR21HMucKy9",
  "key1": "4rfw7sFTnAQzEo71JKsrrXNxxBAKb83RPKd2LPAcqqbv2tHsLnpZfaTQ3YKue4L26FuJjVCBJntKsJxQtoWBsuzb",
  "key2": "zScKk8tHBxRqboLsd8UZbUeWYMMVH3vPTbhbJAFTAb8ti1CdMHZAWXR6yv6shbXfZdpQBwRBrTHxXbjqqoE1si3",
  "key3": "5H2X889LVfW8ZdCAELHv4p9KYwXPtV3i6NCphmMVaMDt8PcfFC7ouTjWUvXhEvsgYhdD9QUHXAzm7g34R1kZ3CnV",
  "key4": "ksMVbQXQ3QdEZd3dGiezMa3fY2J8SkFx23DYF2XuvfZUSoJLJJzPRFo3kPHoV17hJc14kwcAkJ8Mn7QrtbaDdX1",
  "key5": "2umtrQDDJwN6XM7pjhWsmWin424h8YVKytQtuZkcQR1KpPJ5VZRdr6QVDr9DuW7zoCBn8QrDmhZFDNKFbKrPymLE",
  "key6": "3UVNrFDuCAaEFk1uUYnx6rijAT2q484cq7y7iDfHGRS1FbS7eeoPKtcAzpP79En95i6L1XBmunPW6YYChfz21wyb",
  "key7": "4PeceHWjkeiztBv7MqNk5PLViYpec65JyHwkoUqg8e8qrvy1dfWcWDUjNEbnUC1iTtvPyehXJUfo2dy8A5aMaw72",
  "key8": "5mKw4eEKedy7TEDNeF2M66bhxh9z1UVTCCnDZYYgeYsC2qPXgCS8H52ePf44bVDDToAyk8xXFK7LjiaK1c762X4z",
  "key9": "GrArtJL7G1o9Gh3X8kR9DVsvTQEHp1nNEauzd53iijnZvrohDXiFxwmBgEXCyhdRZumPfW4LmiVctmKnbCCJDqL",
  "key10": "7oCm5gdt6ZnNb2AuEngkr1e2DBh7YGkSCWWd2fuj4aPVE8syc8gTeeGALMTeYkQsiSe5FPHouBUZEzaCrgTyzBU",
  "key11": "2338ysvG5VdfrwayDzTFFdc4M4GBX126WQoViggNKm972Rn7KXWyi3GiRVqaQDykKJ6VvGsP9mGk925yvuUHhPXi",
  "key12": "4VvxExGz3ekzvvWZDg7bVJPLQLw9aPJCSRuAEW5YgTbNp3TQF72V853G54V8JMaXyJpwhuqPwoyfjY9eezEetior",
  "key13": "4kRFzdS9Mm2ok3engF757XeUtgSaxZHvqp2ZQUuJiQoNNHNoMrwDUz3PDFbJ1p9nEoed3Tb6umkJCfpRHzCtTqUm",
  "key14": "4oZ26sLb7V7RrNePmuQTFyozAm2wNdVzKcXjQqc4U2b2XG9mJHShumVmqz4VGNzro1YUujpFr2vieo6gi2rkcmQy",
  "key15": "46mnqg1o8Ub8eBHcEHkxjdMBsHQDy3mK1BCd1S2EBUg8WDkXeJgmDffxLLA1wtmYgCd5sH3ZvZYu3UGfunwUjY5Z",
  "key16": "2v9LyJWucVwTEpnnpvC4sTfgFmarVKDYuNn9Z5MDkWs4e6HccWtrxzbtZHP3cxXgavAECh9f88n421voEKSLgqSf",
  "key17": "5awGgBXgFeR4t96DskcnHnWYHiqFHVK1RcjfkbhCVrwZLv4DpFhcoiyXxoSP7LaJAFAPwCkHiww51gpdfKvg3E28",
  "key18": "4DQBW3UBQMQvACwkAAxWFAyFeRzvtJki2Uigzp34vbs51DD3CZ5PyNH44GQRuqnTuJJSaxUwjp43KYd6XUgJXAiH",
  "key19": "5FejwejevCP33yzrvhdNohWnTVpCbesTZmugAFo9hKfXqfC98rfxadeBCwGqgDszqVgysN5DxCrHAt1MDoQ6SerW",
  "key20": "3dPadLFFdxP7HjGcUuxCGcEF2QnRqAkAnH4MVtQWxwUHgzdEmWtnQTXHYZXW1skK6DYAHq9gwCH3H7mZ1PTuSDKF",
  "key21": "3qjmfH7imuABy22uxyqu4qAUMCvqWYgvhr9LV4mjqDXxgsMG3Qym2cDYyCHTKAvSeJcucELgZiaeqPrMupdyhsyz",
  "key22": "23tgN9edDjZRXes1fXgYYFDQT1evQYADr7CrXzDoCDquhTHqCz2zYJ6gYrRhRa71apjp4HGdidmxvjtvFrqpZDmW",
  "key23": "48eJFESESUEPaaFQSoFWYnTvNXbHDs3syQMRu9YwezHfwRLEkP96RboyHpSbVjWNE9bkebYw24BHULwz6v1qDL3A",
  "key24": "5N8ZLU3LA8XZDM5MZqFVk3fsahmdeMVXp4TykNMRVkx1M7aFdBdbDjWt7YTvw8BZExkyRr3KwL8LcKkUDgDwHp8T",
  "key25": "3fWDAqcVFEeqycGANeV25FCA4C7fwxbeiHe7P9sNEGUjihVtAtQeXtQjDHUvNzRaKsWXGyV3M71iNLV3VuzXAFQ5",
  "key26": "hULHu8DUrpJ4fhAryLV89cE2SUPaL9h4ZeJRqc4D57RwRA5Dd5vD28YpKN4PjcetBzDDvTbBGw6kYWYT3mNzEXR",
  "key27": "zjs4arCWF72QD68TshCjvvjimVTNyMNrenLivcKz35zr9Bc8om5EHXBoi9fXeHPfoU3EpVMKT3pdbu4yHf5fmck",
  "key28": "544TYEjMjoNEBJ92tzQUqyn6qkxrUsrVaMgRbToKef64mK2iZ4B2AgfXMSQC3N9RWPXDFjjrwfJ2bZ6R7me6ucgf",
  "key29": "5KLZirynshUjqQM2Rq9cLNFCkAs7u3uGZ5GVpJf1DicUjVGgFVYdeSp8roJgMX8PKiVnQiDuy7j6N21i4yLvxTNN",
  "key30": "2WDTP3ewAGULiVsG6YXnzQ59jqUGKW6sPQCyw5NPn1tcEdM1a1pp9v9f2zDRoewY9MG3XKB5NXxDpQfoVbL5S6KS",
  "key31": "a1Ddhn7muvGu6oPW73BCQ6XE4ER5NhudseLJxiomYPTB6LYGNKetaQmbX8KrqMeVWzJcugjejQzi9Uempyw19QJ",
  "key32": "5FSAibaNSkCpse87nBoeSGAVDHST8BqWWmu77w4XSKHe6io22ctSHVG6sKM1NGeNSm7ykh8sbuaGGeShcJUM5e2P",
  "key33": "sPRCkK1ff127Q9jUKYvR4jwNsuXHBm1JTWihhcCtEwovS9E2ERk9hMPByVkTHhHp1yFgDyxtrJUVzGA7zkQk5jx",
  "key34": "126rrCMfRr3WDX2Dxp72MvyJ4yP3apPxwBvVMT3zJq3ssUzJbHZ1ywXy8prtXuWg8SQ6ur3qGHhdoqC72V9yhFQg",
  "key35": "2F7BVF39LGGfY2NtrnVJr7o6wkBfxQMcJueS6ourfoYTnKf7cq2114mLmQ4QF3a1pGNFUw4xCd3DkDET4mZX3SLH",
  "key36": "9heRB22RtMqheFFA7P9JuLG5KLu4uRK2ihyGk6ypML4xniN1kkQ3PXQeCNN1LKQp1VvveHxko2Lwu2oAZeWoABU",
  "key37": "3uFcCijgcqx4U3i36oyAHuU5Q9mvxetvZKn7qRZSPtAULpYZE2aKTpLgVQ9F4ALQVvbFELVux9Arnx2wetKb7Dg9",
  "key38": "3cp4fV6498n76eRamoHEZMhhtU6wN9s4HVMTMuAw3qMjHpJjfoug8sPcu3sEWWXvRcFEcdAmAw1UtYsRNmYJ6oom",
  "key39": "41Up2eQ9gdtn9CzY5rmkZBpVahJhft6zHNPeSLpgGUNEKdbFARTkNcTDFDfesgUR2iQnA7Y92VBm5nXdMg7GLKU2",
  "key40": "66bbTCRVvzvhnotiB7HuSgt2M6uVt4TiSNvungaiZfYAqnRTfSDuQBcMXxZUSYzDWXkfbbMnmM5owtRdNzyTSCFg",
  "key41": "3vMbEpKuawcWYwHpoyfdNK7kRxfdQE4vutAtmraD8CfLFrSM4fxxm9Ge7ktJQofBfR1jPrPH8oP424bERsXy4KHK",
  "key42": "YjAAtosTwKmCfLg2LN9GZL657m9sZBFVLbzjutJQpZB4xn8oQhjUQrwgCDLc371zxxvkXD2JzVfAjsLXHbcDrPX",
  "key43": "3eFirTbcwy4NewfuaZ118m3nxD14ozH7Uew7K8mpKEyNbQ5eixKybiKeEMkJoVKfmQsQwuiYNDtzdxqydbNTANbU",
  "key44": "48DCqh2pnkjuc7PCm1vuPi9xa6EsojH2EeBV6s4DeUARutLq8LoTm5WFpBqkBSp4PWTTFauwpE9Ho93eEfy17W2D",
  "key45": "562cYE8XGyq5BcZXhrwb1QiKTvLooxNdSuE6wDFZst7LFEhvRF8nHQjttqYU2nq9uzEaRbwbAmvXEGTsMcF5SgUR"
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
