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
    "5YLCa8rZ49YhokRZxCci6S5Z4y4Uk4a2zm5Hv6dBint9VsaGJ3vPMomvTY7rSK63XatT7kgiNn4uMbYUMiMpnzmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cxR3j9a4fK97q1Ttet4m5yRktLGgnqYzp7kUcM5kcrfCDyFbTVLAx3bPCHTX4F4e3cej8rifm2xWyhNWF38Vf3Y",
  "key1": "mNRK1qxcvH4hLtuVjxKDNaPRiPUj36xCZrJ8qiUz9Q82iuYX1wPapb7gSsHidi2eQwSrQ8csqBMKjwgTvAetMxB",
  "key2": "4WRcQNHCKT3JG7WfGJdBRy9c5Msbvguw6tcwCBvLnHjHGJb9wfdjPPP1F92GYLmXwSoMedJ7rEvC9XtiGD2sNmDE",
  "key3": "4KSMRqk88X4MJtf4Y7Bufyrdk3X6vjSQ1D7C3Lv945J4xJ8WiheLykpMQ9z6ii63YiAfNS9g2PWLXWanPsJXApuu",
  "key4": "52iQe5YYJFHjdaon4Jr56oFZcNH9SAaGsYgeVj82DkJcc2YAZAbN6RV7Nq5c9RueTqMTWo9NXFk2oddhw1rcYi4J",
  "key5": "3a4PXp4fPmd7qWmbisSbqR4CxaUkBmmiHG93TyqsCeWVnAA4LzqhMpRZkckYZbwgoXvtifrg5af1jnHzNPfh9Z3c",
  "key6": "2JnHKWW5K2Uw6qaEGiscFZJCBFyxrScLk4RvRzWVj9ZFc7AtheAHJRSJDr6TV53hWyRTz9qd1E6kZ2VE9t7EEd1P",
  "key7": "2gd4rPGczBftrzExPXqfKbS6SP8nc1GEpzfg3Gkvd6rmT2GjtgCvbmgBtb3NN1Ss2NhpvUNDMw3HxjmSnrP6XkAy",
  "key8": "4Z35saN5pGjNELNiDHXisms3xQvNP7zHeQrwnFvQ9aWAWyHsQNFgNhcAkpmfQ31CUnxteXWmdFQayHivBBcH8Qj8",
  "key9": "3zNUx72XWd9kfAFy5XecYn4zpNg1e2Ti6Z3V4JDkAFSbbnT2us5KD2n5Mw28yUCe1tFafcKKxhJbUxBFgqs5Ax5V",
  "key10": "4fSF6J5iTTjYFSEwdnsV8CpPpviuLbFAn6CrPEQusn1KQqcZzYYCFyHM7bvAubL7xovjvXCCuHv1FAVEV2vxFV1i",
  "key11": "32Txzbgu3R2dNrznDUSBrHQBiF3kzhNr1xJfdkVzNg4LPVQhVkZxvxqePJHppTdWva2923kktBiJjDyYucU7zCMt",
  "key12": "52A8RZAEwrFnqqDtXYjRXWfxaRdKf3KH9zW6PXD5y3WvgeM34gB6JimsDjxd6EZ6g5utfeTMPj7KU8LG75JfJoSR",
  "key13": "8KS3Mg7QRNZCaJjsRxcRqEUrDSYie67Xtj9kkBbQPdJturrmb2mcnaF9dNFbPfMJN6c27EkqgTyWHNS4ekmLspi",
  "key14": "3pKxApx4QvZ4JxsZJgrrkbxFWC1tGNohxaw8Rmzssd5W544F66gcwmu4nQNVA1q5N728fu91c8rMX2VCbC42cHt2",
  "key15": "4GT8ZAREfite5ptu6hozEyNU1S42zR8bX4xXUNX9tjZXzVpfenLbUWekGgTWge52gJWNFtdvBFc2k2MGUq9LubUA",
  "key16": "459pNrjMaoWsKT5utE6wdyu1Tn9adphVwM3mJWMxyw6p5XNV4Wz2pg1Xh4mZqsuRXiFXcvkrWvwVwXVscRbkmYyE",
  "key17": "2yyBcYsxQWAKsABgFYQKy4kmZpzMfsbmX9isseLyLjfcdVGdgThKTpN8ZxgCUwJvRNzpGepaouyF57xXkAuKit5A",
  "key18": "bd2yw8xtxFoUKFSr2kruTxd8eteB3gKBkk19hUXUrp9Ynat7zQYsN8BGMV3BtyWxZduvpL4rsubxjQUSNPC1pxo",
  "key19": "53nmebvdqQPsQF5LetRuBtvzAxXgTEAqFMgrGULPopEBd6Qo4TBPTAcHcQ23cACuM8ZKWTMtDidHx5UYT4zePuBU",
  "key20": "5yGRG8LcZhZUkz3tZZVY2DB1mjDF78dRMVyNV7XRpjEB8y8DYK8CJfAGhqWadPxV5FuLvfmqjToiL9yot3c1vXKH",
  "key21": "2C7aqBAXU1NW7B4FVBTJXcjvmsz5rYbK6DyV9RFW9nRSqbVXqZ7eskxvYdNeg3GyQaEX6Sf5BndvEk1A9HgmKYoE",
  "key22": "2bTD2is9QsR3tWFkHckkojcEHRiJwAomJrb5B6TPSLHu83fViPgRrfXjNnzkdJso5gNV5a4jU37FforxXj4TVvLt",
  "key23": "3FR54iieyDcArazv2agHj1za8wtMXPoXVRhojEvQY6r35mLmw9vF5baLnsQRJxwLUaamAFAjC9hx2UJzu1MVmji1",
  "key24": "4anzRApjAbTDpXfkHkAjdic3hjd4Dndrk8A3KnLMShE5n2oS7WA15ESaJUYBZqwi2vUiiHJNi3iYjYmJkL6Ty9cn",
  "key25": "5JeMKAmmQLEU5es6MShbrsrWafwAtmShvYkTE7s2uoHc8GTFKnR24XT6jrEaaxqganz3tbrSmfeAZZbYvimmaHXm",
  "key26": "2KZd5Pjh7bcSYyjny9zELxf6Q7YiAeKcPkCySMKn4ScnBtfw4knmPPs5NTQ4HYj2283tJg53GukNqZYR7YqvG7se",
  "key27": "433LHCjdvZp1xKbiu2kbrdQES95VsJpx44chNkmLFpwWX91WsVKzi2voeWtmc1MWrBHfDkPV38iJg99ubvQdPeTX",
  "key28": "QWeE5MkDYAS5daPmtASun5CLykLLHWxpebaN9EA7XQ3o5sSSBynkUbhJq4fyMpTeBNFMbtVW71nAFUCsyfFT4XE",
  "key29": "3ttWsNprkZz87pSRrLbz242whw7nBeYXRSnk55Gn6B5MGFwqB5jvvvgXUpSVZYAQocJcFppd4Djf7DhVzyCN4aCT",
  "key30": "3ufq6iNZazjBJnx8ckdMxSEAz35P13WpPiicpPo5ZNKuaFeAnAfSxtKtV351sopeTg8hQz1bLmtsdYpbsqmaCzVo",
  "key31": "sJYtC4iboikd9619t6rKzoHnqsWrVS2rXM4XknZM7J1LxdDEQpdxKsQHubA8hybiY6quswhB7qrRx63focSkfch",
  "key32": "29vjxfGxtBs1cMDj62YVts4Y9hTUYdfcSTus71Ws7Ldv12u6d7qkQXrCR5iRDbp1M6Fi6J29kodDFu92isuv7dZG",
  "key33": "2qDkLVHEq98wh3iDLMrvA6zsVF7U7r985YTfyei9qep9kAKF4NbZm94c76JXttEtQtSKpiifA7M4o3noswgN7MLR",
  "key34": "RQdvBKSCAvCtFbruJ5SPW9PskAVMqkZEUFzi8pSVVF6xD9VpcWtEFrbKV6qZ8n8NjFdMSDwVB8FzgYcKiASAPwV",
  "key35": "4ohBEdqMp9YJPNqFRNY72GQu6kuNesmMnKWxJXGoU9WzrXm2ih3SMPQuyLvgNj9ff2CSm8ZfyAJoemJNDy7zKe5s",
  "key36": "3s2TczTrMNPkLi9xj5ruuVQkbcjoRC3xd4oicUfrkjRRnAhC9sTUAYeRgaUZkPJWjtybhAXg8dVPFwvqtVCu7hJK",
  "key37": "RrYeQUu2Y1u31TJMUuCsKF7bxaXivUUicPs6b8M9bDVoPq61mWnRqoTyM349aDGbhzb3wvdMGqZ3xJwJUrN1gwP",
  "key38": "2yLJ6Y9c7A3uHdGKqVqTCLSnMkRsKM981279NQrrq3un8Ysit8px92YohLo9dhcN4N74yrW8KYfZhCLoY3gLZLsM",
  "key39": "r6SJQo2wyDCDEyG5wpdUMYkboDBJRzeXR3Fk5yVpZwyTQLauepF8bJQnT4otyY363iUrw8YktN6gnhfMsBW1mkL",
  "key40": "5QQ4vEKYBaYoVyb4zvyZZD9TRjPhRCvWnAkJNekL5y6g1b3FVt6iWXDZHu1srfzaf7t2VASD7SoDaHKGoJUQ8p6y",
  "key41": "5ADomBHn2ieUMr65y2vPACffcqi4TgfprbQv8qeSHpzDJT5ygHcTLeWn4LyTb4JiZkaFZ788Vu6rCx3vKTvotQ9Y",
  "key42": "4eezTrkzK2iZv7X7itNbe2onGEumoePTi53AiMCCDx7YyfhoT9yp64TUebCpCHtqFWCU1nAQFEXGdYTF5vZwgF3v",
  "key43": "3EvVRGeHHmwrV1u129mvBowsbT6NjLtCxV8NmsqwQ9BUkwhFZiLhPovv6JUKNzj4ojhtkiG9BZvDCJPjE7PR7sVq",
  "key44": "2mTNfiTQLorGWe39so63FNbxeFxMjreUKABvY2AdaZ8ybiTYP65VSaaQtv57PPxP7smbKTryW8KmNnJbkAMgxudX",
  "key45": "2ucr6JpcwbEB1JmSbd5kTQSxHJNwN8FN7nwXKaAbNKo2S6XPhSKijcFe3tGk2npn53qJXxcg78QoBWDhz4e7Ypfa",
  "key46": "5PdCfjEF7tk94rvJoB3GicM6wYXBqnt6fng73iF9TvEVt1heqDvkZStL4cKNUfDWE1ksdsPCAHrEcqZp3aUn7x7P",
  "key47": "3ZVHwtPUJP8Lm1jFKoba4A94KQdX8DBZmefJ2PyLTZ6Vek3fZsdoX3h414dyUZw9W3CfvW23Kr3ohFCkHkrBhWp2",
  "key48": "64vCbMhaRCZURDGC3niSN3Zr8xfQCGWFu2LX1jHbvybY4NoyBHUFLYqdL7wU1w8ogqfpEDikbBmGAS7KcdaCg6Vp"
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
