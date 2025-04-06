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
    "3wra3CiVQa4F6aVECheXtRCVa3RTMz8drHmPLvWPSusmyWLbCJXWhDrXpnyRa8ad5ck3dCQGKkyTFQ4JeDbEZF4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3irCkkQvjtw1FpGSHaHRoUJcjpXUs6gebdrc9HZfBaSvNGFRwb1vAQtnZt5uChFG3yEJbVSsrL1Fchvxgne6GQFw",
  "key1": "57jpYTw3Geh4XBKXstU6BtfV5sM7PLpVYttETxpVEoxV5TwUdG6RDRSoJLzWXdZgaHFim9hbqYPeTJrR2R1CNypH",
  "key2": "3Tb1cQMoBjcrrHbKyqisQk8fC2qscWBmJ9mJnXiaMQDJ2yafsdNd9EnXSc1agnERCFhmAfkgq5BgUhNKJ1sbLvZF",
  "key3": "UjSZa1Xt9ehepR1HeHYJ5uBU54WNVF9f6JHFjoSQVXdNxWREC1aYerSvoJjvw9ZjY3sQycFk2uyMq3f2fW1xZPe",
  "key4": "5i6QN3xQDwKcvH75bAMtChgKMogCtf2WNsaPiNdczv6bMWUPVjkXE4BSwp82D1oPU2511Taka9vC5u7jLZMfsMyJ",
  "key5": "43QFpueHdRkA3cuTZ55MsRNAxBn419dsPc5K4PE8Vacx8JYgHMULHPzA2LzDTy1CS7LNJwbjp6w6AStfFG85T9dH",
  "key6": "376Gv4yrdPMFeP4kY41Ua7WJ6BB4LuorJhHNSAaMb3weyu77UKSXiFyf7S72bbfp5Rq8zWPdv43x87agsbSGmp5m",
  "key7": "4iz41T8q4p2iPXcpZwxKW3hYrucGxFLESKjr13XVShqE2WYRQz3Laz3UEt6rEcg8V7dpMBbuJcqsoHEaZsCG5YiF",
  "key8": "34AJgZwQzneVfQyWiuYEFWH27XD8fWDNSw39HAcRpRiwAp7PDCVhEh6JM1iSJyWpi98XkpkPxnsNyGYeBwGAfpMX",
  "key9": "4LdhNBm9P5KJCEpHNmDFo3hSyYmVjFCkb3wMjqwtW9EdoWqcez772QqTnR2kYH9aYP68zWFtWPA3LBLnhipQ1mDo",
  "key10": "hB8RWN5MdcHDEZtdqRhKpLxYLJp85DX9bQopUaAkiBmxmkGx9ArwJ75PeTbRQX8pfZPv4vwwd2PCY2X3AZf7PKx",
  "key11": "4xzMfSrMNYZEEys33D9J9XEee24WDzdg8Gjsw3x26vL7p8VMy3aXRT8qPbpQNemsNgunf42PUqpgGAgvVdobuSRT",
  "key12": "4gjt5p9kvirs4uw4DukwASAeR9rktNdNfd56PVqyzsC4tmXuhhsrMByFYYSPZ4WBXSNKxCM4UfpGGDuXUYxQjdAY",
  "key13": "5A16HiUCGy3LTiVK7QxxugWdGqujJJ8Xdu86RdZ6airFMzmUhPagbJXhhtUfgoN7Y3jPmKTSQd3tCUpVDqFVZB5n",
  "key14": "459LS2YXTXV3Cq7yP3xm84AkpEbhMNkuSF7pm4eEHCppK9x6Kynekg5A22GJmPTC7UUQNpRcu5Taq4y3dAfvTGmF",
  "key15": "5AmCNY2a7q47KfmH7GiehetMQSUyGNqsc7zxfY8vq2Nujty6bcKG28BBLefuPXha4CBnNGr7iCA9eeda7jYewSa9",
  "key16": "59AvDG9Z3kE6tQg3ccFjVyiJYXwgV5aTVAYsConfE7XZZKnrAtPin3w2d9JGXB5vXfMERA9YBdRgrDzBaXX9zw47",
  "key17": "2xMNUdkadZpCH335C4VNfjRKe3YEuFcWVy99kV9RYv5eiZNwqyminW5obuwhPytUKyerBBscbk3ZWB1ZNMURpP4y",
  "key18": "2KSVM3y2AEyTvMqxzx75sUizNrEm5Kc3hYibPevuaLCZQm8wZJfEt82yZecH2vcEnfsME1w4Nvrn7WZfS1bjN8mW",
  "key19": "yZFTEMbKvB6pjVc5aZC58ZKkAU5ZGHgr5k2JBAFgJy4g6UoCHPXnTvDULDMo6FEmR7HWyBh4dggNUR67aQVn4To",
  "key20": "3NpJBgBjTTUG56RCr7WoX1mERiDdfgqPhDbnSqE2P9nkfsuSPwz8XjiT4bAB16Lg5pube5ceGG6qcq7uJGhPheVA",
  "key21": "43GxegTDJixMoqd3VjPLBKNMacj5mYqiLF9yWYXWbntudjSm5WU71FbambwuujNUXU7pVAXQ6cbZ37eXY7JN7F8R",
  "key22": "hM8JLzXLE8TWbCNvsXEfDQb86rsKpM98vWvtvP3bfQ8E51GSRRgMEcrLDnMPxWryV4zp9R8E34X7a3zPrcmeBc5",
  "key23": "2ZuTyGSRf89TBq8DHucR8ZYLiJ4cGFY2xKV3chd8BSJgBDVKE72EiA2ENtbqDSGwsfaQre1PyFSfyjY8BSUKc8Qp",
  "key24": "U4k2GGWjCPWrmTmBTHHS9BNWtnfiVyNAANMf3VyGLhqedXptKh5GQenpXqgZYcsVXhx6KHeF8irmF6MvQw49tq9",
  "key25": "5HApwKVB44EqzQvfna7AkAZYieoHC3AnmDP5sAphHcekGo6YqaFuiScx3gUUQa6nCYYvuHLYoGJVjNfSpqCrL5yU",
  "key26": "br7TRTM5reNox5xKExoSCWhjVLn5BBYTz8kZzrMCpcoZjUmMDa4xFeWsi6iJ3b2vnbMRd3QKsAGmHwJ3RkGD2NH",
  "key27": "5xkH2bmNCNQandwHfrZ83Vb4KcXx54VkKcz5eSwdJmhdYiTQSgwYY8SUrJvVSNYG1tsmFhFPRoEcDsKgzdHQYsdr",
  "key28": "LTPL3DCWjLXQzoGkoouDsC3YCzwkp3fc4hmYjdEQoeURtpaWXVgn1LBbz2aPCrBhDfDKD3SHepuM8UkxP1gU1Mg",
  "key29": "53cZPdmycZsSx7LZo1yMtMp5sQevJe6KJVvN3FQG2epzQtGKrvQ2BhuY1w3Qi6mquDRecunXRthvSFfZVW8sCGdG",
  "key30": "3NpP4jskU7f2zczXLXuKEC4GqXchsuML6Bn8naJg4bUKvPzYvirF5aPh68jw6M7sKwPL48ZqJjqoyy52F15jB4wz",
  "key31": "5Vo8xvsMnVZe4f67fV5T8XqAfBhznP9a2VwDFaGcMQj2fqMCgevZhozGbe45bfeUHyeUe2srxpDEtTVqpL1US8rn",
  "key32": "njkhYPoN5Ttx23G4ApkvgZgFsSrXrPAWj5RqbwdbxHkSZ6T9mpysPZSWH23vNB9UEer2RRU4tj1SqW9o5ziV2E8",
  "key33": "4XYo2wgaKkegebgCVFQuGWMUztBKnUiz4tNxocnknfEiv72h95CgYBhdULdetW577cCbGLo66YgvpQsGqS16n9UL",
  "key34": "3onq22YJMwcLMis5xFWRWQqusXfUME3ze3b4fmHnEfFsWpHpWJBCnZo1yp1G7B9fE1angzHBeBAD7WfD4K66rM2L",
  "key35": "5YSB1tZEDHmUV1HXNv3g8RksXgyPbN7SCNb2fGuHfcKEpm7JzCdn6jaN8VeJkbntgkFE1AuAcWRSyG8nfLeN1mJk",
  "key36": "eML5a6HKJQV813WCLF3rJaozHF3NzuGpXcLDucBpDbgBG6ntCkoiFuUfrSQNGi4CsVqNR8myqMrii5hbNgXhSe5",
  "key37": "5RLaUkXPXQjFnhPxyWnY7rEtRMqXeH7NPY9vB5g3h99eA9qTWU41611BWDc5SNxEprL9u8rJQg1WanMSpZTxZ9EC",
  "key38": "44jKP2n4Q2qzFfPWuvqw4AzAmXW5zaKGZFFptMnfgfwni5UiX7nrjhsAoygHQfKSr2CMKrNK3sTP1X9GaFhdYeKT"
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
