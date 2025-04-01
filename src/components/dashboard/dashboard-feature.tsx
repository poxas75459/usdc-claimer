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
    "3zqAB34oKzaYiskaWuSMyQvpj44pLFgJsV4B6rB4TpcYn9GuuxEi7CTcyYA8wLXub92wKtMB22qFfaJPKW9NFLsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zAgD5AAbXR24cAcLe1vPVhcrmJZxZXmbF6gtXrXzN6oYWJ54hCqQe6WQtnTMcMM6oFkrA5vzTUGEGRGn92D9ejQ",
  "key1": "3nKgdJcgqkMFxy8efqeH6iVQ5WjgXxaqdFgd3xY25Esg5PsCVWqbrLEbeyYSk8CCnrMnk88oDAcwqpq211Ah1AnN",
  "key2": "wwAcxKfrrw6xpQBUtag6n1Mo6fWQzGAdBmcJE7R7GXFabQBb9aUMNUChRswUUPBFHWQzzqUG1spZQivvdXpKFti",
  "key3": "3NwzX9d1PgeHRKGyvt366yNva8ZoJgyfXmnevJ8LXycUuTx8v12sTSSxWUr134R1CN6zzjhLmeAoV9C6GFwpCNWJ",
  "key4": "2deJX8Ljiuv9R3U7pLay7NS5wNpinyTz8YKwsKaAfkZSDx4aAsA5cD816xDb3NXCu6zhQTVofeS9aDQYP4cMCNTh",
  "key5": "2WBiHdFy8mp2V45d2No8qGVSZPs8S5AUrcJYZwrPMdd26fFXt5cfZcsw4zJAMcCQHWrMpmme9LT93iMm9eu8tfv5",
  "key6": "66gaRqQtqN4RS7PBok2iSAog98as3zmh3tHt5XctFpVWUWuUC2TDpp2bCk16fitRQrEW47DQBnXoWEA83EKX6719",
  "key7": "UytADhKRjLdbqUp9Qy4sK2AdVHAdkYq34c2amUENzaLYGCBoFx5fWMhJ2WAhmSRNkxAvGKW8XGFXE1u1zTrJU6k",
  "key8": "3TW8EkbzRS8jg1xGv82JyLXEfJpdy4jNEHbuadcSWhsbRvwZsB9XFPZNjCMjr47qfHUFPzMuXkH8uJXDUjmqJnht",
  "key9": "H4P1YeZa8iCsYMXFcKEc6JrT1hwEzu8VVsbYxY9zjqcwuAecgNjPytHBK6DDQMHXmfBQBAzL21ZG87t8jh6JuUK",
  "key10": "63uiBrrEgfzE6qvvt6Kvvi7M7wbaguyL1N7xqCYRvwymHd5qSE1yj6gHRoEjnMHtgV4CdKj9mFMRWaQ8nwxLohMs",
  "key11": "3dcrSzju442SrZ75dNZWhJCJmN5hqTUtjsAv1kMfxR4WfwT5TnVGa7tDLEAyN4GUdVcjFEqQH4wQidZdPAt9UZ98",
  "key12": "2P9WJX6CWjLPUcfQYyUkyXixdKFUiRrkLYW79FoA9Kfgf4CZgD2oWgV9hbV8Uz275bNt7wLRkU4u3etQoKDtMd8d",
  "key13": "4Z3GLgW7vssUMPyotzwduFKkwSNkiNZkFCKsgNnAHUJVUVKwPVJoVXNUpaMFa4vzV15Xd8pWPHUVhzEYQsFL57r7",
  "key14": "4Bg6BAEGmWhqFkSYdbRxR9JrhkAT9GtacoL5ezmSqBQKTV5cA7NoX1ZMNxJx3zyQUr3Q7AvtmY7qk29c1qW8Lzjz",
  "key15": "3zmRAjBhaJK6Tas69YzrSo69GfjUBZk3AkoeEDBe22WLcSMXqAK1qPkPh3WNzvDo1mh3KXkZgUSAACncpdE9Pu72",
  "key16": "2ibk7doj66gyt1feNFg5q5yaG5BgsLxXP2YM6TdMV685jdYb64fnpKsjVh5BNGFtaJMaky7u2BCnbLYYLyRGeiFY",
  "key17": "269WmnueNZpFG213vJHwqvgyjL58nJtcjdLjGJ5eW4WCyKVMjTtxySgbMFEH3wEA4Hu5f6GzNQ6KnwYGPtzjrRQu",
  "key18": "4zYuW4YYp2UMoDPWByHmQGhj1G3AHnhj69zyF9Bx3g6EWQV2Zt3cUiSkTCfEars9rDr5L9kXEPDXB1xVR1wJ6gSC",
  "key19": "5zGveoJinXod26coQQAwpiA7x69SgsCeueQMQPFUfeMYCscJWEiYUhuSXkxdqstV3qc6pH2biNC9S2aVLFDeTyqq",
  "key20": "4Gu5Rwsj8CEqBrswCj3g1UXASTQh4zEwctTUWCGf1uRE15phtZYFpwwjrKU26HJxgTiaLPCc8zygnVpmiGU4AtxU",
  "key21": "2wwsFERrjTuu2uxLzPwBbLMdCRkzJmKmLQ92YpiznUfSrfMedfV6sXM352ZkTKWTQkSkFBYCn6NtwaRxCLJse6oR",
  "key22": "3vRw8Fq5ug7XK5y7aEDZJcFgciMG3HppEhULT8ZUP7BzPcBMsVkfv1CweuuZaHoLCUcwEg4ph9cfxAJyh38mvCLq",
  "key23": "4uSUYTroFdZsFigS1vqPB34FbxQd3z6U4pn9i8M5SqQGagqU3NxfnsqRpzNGdTu2sFqt1YZ9QtTQWQaTHh8GhxTg",
  "key24": "32MF6qHSnRz3H6q3wy2FecnFjfzsHo38TEYuwMa5D1h8iBN21XNdQekCziQGVssRwe2zj5EMPmMMHbKL3Xfg3WLd",
  "key25": "2TD3MsxkBmaifec3YsvF19W8zs2gsVJWWT7DWisFpwexCfMGXXGGgPYr5uKsrx3iG4aKnyZE1Ah4dgisd2WWpUrS",
  "key26": "5ZNtpBRjjYmR53tGMiS2QzyUPkmyYLRihR4jgoGsdphnrgfR9bWHtmg28nc2ZHu3jqrpKnAaUvPPZwSVuzZDQNQA",
  "key27": "67fKq3TpSpowd3b4VUViEDCjD5CBQz2qz7V3n8APLf9yLiVnJqMQXhVmee72deymW5BMNYv3yA33HxznPpicfK47",
  "key28": "4aTZGQ9GR9869HGFMGvKrDx23firEPZ3ocM6L4y6Uv8984jucL1ubDwGg8h3NGezvXE29is9zLNwhC1uZ8gm4YwY",
  "key29": "3ef2MnchPg3ybAQ9nRMHNxp4b99FXihd9uiMLXs58auoY9b4swokrHCSkMLCLoaWQNcriNYZsyn9u3mxExjvmR12",
  "key30": "fodhSH7LrY3bwSpjY451bgqYhqzQbWP33DibAkN8oS2kyaZAXJvCz6xqgBotiYYGv6qU3PVagab4B3wxnxitDPi",
  "key31": "3YHgdcas8XdmzMnZ9HSPAYzNEFJRrcJyCxTSHVt8p9H6GLp8K18AyC3Py3qWu8nza6xWAFatJDLUEPAu1rwkdYFt",
  "key32": "A6hXsh37wCrnFic7FB7aXA1vdQnnsjJmZYBZAXK4mN7KCZjVH8LAuVE7at4AvguSEVWuuxSszoVexv1neiJkhas"
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
