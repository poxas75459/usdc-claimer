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
    "4i4HNLhandmXuSsuFt7SZouDJDZ9SJF2kGfH9F9cvhBAoLmbyfedGmcWA6FZ2znK8FJ7vER2Pdq9fHqdXg1o6ojP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NpqMiDzK6kVUbedAfjaNNAcwChEpg11tB5pwDdzz9YTBT5mhwwvoouVfGaPTMSq7jWMBqmHfqKmLBbkeKZQ8xCu",
  "key1": "31oaNnD6pN6Yv97LTuFQhqWj8DZETgC9HGxsPqj5YMewmM2DXHM3Q7tWgxMpapiaTYrsV4et1Zmdi8tXyEBRMD5D",
  "key2": "5g7jQQ9zCg6yJmwLBr1RMDJ71JJYAsbMrMBqqMb5WZxcTXgyVVBaQTkoKTZrAVqyhfwhPTh9mUCUzgzNNTstT2Ea",
  "key3": "5A4NnWan2yTtgPwRz1f8L5N5TNA3XEGhfdXqiGEbTPSSLwVPUD6uoEZSi8TPSD5eJC52vtx2kxyY1ar12CoVrs1R",
  "key4": "NFGuMwtxGq1zdYFZMJMSGeJj6hJW3UGvL2U7PdYWeaRrULSw1sq2qxTKRQakCYWZM5d63FBUJWNpk2wWNERwjKo",
  "key5": "cVrXQ2Stdzy7wqDKHKiVLAvtJ724JxKea6ooaFxWvrVz82HBXeikHf99avb4PnPPeizskurRBHbcHL7Ct2J3mds",
  "key6": "5bDobbZB79h9qkDhqkj5oNf3k1g1et8KXrVZcVLNhbxu7Ud6q7creDFoEMQsr7TG1NedpHZy2gztBazCHwz9MK2v",
  "key7": "3Us3zLNYrNyFp9TBFb6W7jbhJSVYs6QY8Je6MSQgfSvaWQY916JzwS4MFJPs5XXbZdAwfboqCVkbnTt1xRGuWAcM",
  "key8": "5YRjXaFpbjLNySrY3etHu3D3PUi5U3eJw3z4YEaK6gA7zQBFnEkkqjdKar6F317xXJJKCLaE3iqcV1VGYranZWJV",
  "key9": "4t1Zt1wMfELAJvhWCfJs6YYNzLza78Unpc5MGnBfkkj1um5CV2fP8m9SHevr4cNR7kBvyQ9Hk1NZ9q7un9k6iJNi",
  "key10": "2dHhVpSExhddReYaHAUDi8QA8TMwpppSYDV4cgHy6UHxe9fnwCfBbLmCSY2ytz2z5ba1mS2HZWUJRGp8cCWaZZyh",
  "key11": "5SgRLDZp6TcnhfCHBWbZhau6fTVY7v3wgjo9g4AMnZx5JqG1dk8pCoTYtVEyPnWtoJKFCTKairCsFPBX9DnWv5hj",
  "key12": "4Ck3Ek65KuwChkjn8b9KtMHuVccTvYFtbphJRC98QbcYqetJUQTG2brXpZCoEfuuDU9YF2bTBrddiWMCmoWF5gDf",
  "key13": "3ArmCUmCyPe9NP3GrD8xBnQFCECUFG9iU1HoW5kvc7TrYHhXwyG5zrFfm8EsNeWDsujvVDHDjoYGxRH1ZmiuZMf1",
  "key14": "vSnb25WgpY3KpktGKmbJFQqkRoJgTLA95LMupMuknwrY5kd3T2XArwbRbojXDrZK9AgRqVuyhpYJZbPhFxAm9zV",
  "key15": "55UHQ7vdsgJfsoEpNTFmXihMeCmcVdhLx2izTrDUtsBwkiCuZv7Zy5nZbmWYZcGpobkQiGB9mq9DCmXrzDA8WpVr",
  "key16": "4cEQYjySUw63MWnqbaKpTuYWXTq8TbDaCG4B4awZhLkSxBgjm6j8Nz8nnJ1udpDu6TnyGd9r4YzU33SeUAqa5NAW",
  "key17": "4zG677dG2Gw8cb8pJ6GeMAdPMAmLuPxNRxJv77B85edEobtVeWT8tDjHBh29u7NawjhuKRhrstCfkbQMovKWjZW8",
  "key18": "3s4kjem6qoyLcBnhxfUHPnX1uAEpuHWi2tCQLQxqhGHURm4rLPjtAdMsK3wM1kLb2EkMASRcVLMN8GFtKU2T5mSG",
  "key19": "kCyK5mJiiUGR3WEXozWcinp9Z6r1PZwb4Her2rbtCa1wh5drNwKa35iZE8AzLzPJmMVLg52UtRGopKtWXGuY9sa",
  "key20": "2tQBzUjqG4k4u87feZiqVP3oGefCyDEYLRo4uqz78GrUcG4JcPFDWhN4hxoUEmDpXCJsHF3Vgg1QNRrGAFFoQzGm",
  "key21": "49aQwSnSmpQnLHHGWfiz6uZQAbCmquH3Bd2g54xFacjMDHheGY8Etao4yMSB6uafosV5dtJhqWhQZpxVB4E9zHnk",
  "key22": "3TCinic7oHGCFA6JJnp6pWUN4fwdYmWbKVzzgHYdR5jDJHvunzd866pu97EFsYFsu7AKYHjmevaokJgUrFRYseG2",
  "key23": "3aVoPk8k7ErCQ94d4vvcWzxpaquvVv1geo9iht4Cuuv16rbfDmV1dXxZgy3rmb9xNWatY22Jv9d5K91sR2t4tzJF",
  "key24": "4N5XbZGHivXm6t1jyax8c7qif3s1GtdtWogF7uzqShLtXeoTLikVp6Vv9sEs2sXYrjTEUwH2xNXydF9coRZCUBzW",
  "key25": "54TnN6vL5fv7KMZ9iSrxC9T5cH8d2D92A5bsXfFjvAP45XupPSybRY73fvX1c6QusXb8cm699noE2962aewRsUU4",
  "key26": "2vn2KxsxmJ5JWfmQNGUZohk82HQhEDhQ1qrycMsghXqF2hRSUV6NW1exGWJvmY9hnkvEg6r9JaSW83CgCzw7zPcd",
  "key27": "5u6qzRvba8vQAU7MXEntDp5HCdvDwCcCd5kYtYc866KJsNgfdTVY2jgccSZak5ZZFnmSeBY7sqCKnufxudRxcNLJ",
  "key28": "4sLEkSL7bRQqGqGCXfDW455xASipQdxogXNGko5iKJuFhM1YKpNZtFd1NytZZm6aXgzqzLMoYXznquwkLAAEWjmw",
  "key29": "4vrKcnJMnDydaNZpWdS1AWEvi53gQ5F3BneesBCoUrTxS775Ux8Dw7TbzF2nGtPhgtX53E7qtaUJnA3o8tWfaYA",
  "key30": "CSYsMwy7A6ExvkmV8hJPf7J5S7t4yeZu73NymGunJLw2U5CUi9YEFbc8uTaWS1RRr4DS5dmBT6de5W1PTUY2W56",
  "key31": "3MAdDGyBLSfHS4vK8HvM8htk1uHDUK12Hsw8cpsztdWPNXtLdT1497CTUigZH3Ea39obqYYoHtSMqtNZApuNnHLc",
  "key32": "3NVwyczYBVuinYDh1iHHaV8BowZed8RoomUEBWoYscdPndM9rkAbP8nfPSmTYeheBV2ujigkoamCKdVwDnzsgyq3",
  "key33": "4BiUw46iXxMwBQTNbYuQVm1jtwxM1ZevheVyuLMLt66gCxS739LEBvzWFrM4iMKLL9R4fsusZfi3Mqz3MF3552ie",
  "key34": "4xjzF7rmRPXeGhndtj4mViXyytc1YKwMKKHQYj5yWz6LpAEYhCaykYLzqfm6CY5o4X4upPByBsBEJSBHCxhMkLPJ",
  "key35": "3t3JZCRs6axbLfEmDK2kC8WFs2GNNAJ2a43wXPLQMHsvqqxPNFZwudNyRn7AnuhTbJj5UQLvq5tRS1etqysQW8xB",
  "key36": "pZ5ngDCLuEPVAWpCVrKDmyFQq6Nmkwqvhbd15xqS5ydvQ4Z6NbVR2t98Bds3YMhkKsKffUE2iwgpJzMTUiPAg6M",
  "key37": "4rKBFE6BqQn1Ni8uQg3wy4vozRYC9GmJdoGeHvY87WUTheVmckHbNcUCijFLjQkqDSxxzQmdtZHZxu1rkUf4VGFQ",
  "key38": "5AsibzgaiuqAdvwkoq3a7UKf7Z9DTdkJeSXpfPsN2ZtUB95QjjwsoBRWM6sTdUAEdEqpoGdVxhFkkjGeHjdFnirp",
  "key39": "2qDvQVEfDiV9xLjxrsZxBX7m4s7LdUDbM4Je69ZVFKsJvfbbc7muXaW2Ldwuk3UvN7MUmmqHATTzgb8FizNaR9Cj",
  "key40": "2Lif1wHomp7mitCiZpafN16mRQYPk4p8VHy9bGsE8SeK9V4MwPrsGNi9QCAyCtpd716JTGaRCwyuzSakNJeJcmak",
  "key41": "2psH3P7uuaCukF1FxNghfmnFqdR7X1bkjBUftwpUN7C9nz26PeaRo9SksAyDN94w78waYcUChq8qYHCrphfjuWx7",
  "key42": "3C9Uasn6dweiDL2dhg7cRBXaqY2Nsk8h3H62PmbNX6vZxBEiC8wpxESV5yfD782YDzaydSnxtMzDQvmRgikvE9Tt",
  "key43": "E4e9S1e9Szw46k39ARYATgZgT6oEWPYQv1ej7P1yCLuYcxGm8DvjbWz7YXpnuT85wG8JNauBUNDasC7LoG4RBHB",
  "key44": "3LuXQbU9rbtupkMLfqNxGru7GSMGdVG2YGN1SLBFDbVhMRSb4jLXyrWCnhYPKk7z5CLkgSAjrr4awp2cwkFig57e",
  "key45": "2j9wadC4XojECPF7U34c2JkrtkRFAq83tFCvd9ubpns7R4u6NPJ7DtQfrgRQtFzfWPpJH2duYS48KYoFspRisvCQ",
  "key46": "nFK3FLDsRoS5rwJKjUicDadcJqV28rbXyR7jJcajaduvN5jBet1yciChGL5TZF7WVKyFHSkkoWzHxUP6k2Vai92",
  "key47": "5F4xaH6ddE49mMyh5WayLenb1C5uyysS4HZhkjnFJ4jw9GR5LJ8JJLZgTQoM9MUWy1EaQ3Mafk976ka9AqACmB1R",
  "key48": "4ApYtY2BBzycr3P1tg7gnQxFGVD3vmMeCAMd9WdooTkvcP2oycPUZWVu8mhZPRWHU3Yh5oTcznSk9Lb6HzC1GQLc",
  "key49": "2h57y3WAwbcxX3TB9ajnheGyRguqSvb5wJsb2T5tmyqo84cJBEXCphUS7YG3QLLSWdBnRsMc4uyqFUy7hdcje8V3"
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
