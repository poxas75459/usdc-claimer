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
    "2y9tN7h5NMYEg7aB4qZ9taoe2v9FdRFmuEuykgGzBukytFyg9251T3yPgGtFViYAxPG1UCGGF9JjYCyFvs6hyHtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MbCjPaY8sDesMNxm84XmKXXioLVPA81CPdjjjx7yTaHGBLM2m38s8NgSombYDkedV1rZUj5Dc4MFMjZAqXcDqfJ",
  "key1": "44mmDvkeFnk8nigh7c8CiVDbXy3iyaY3jCN7vhQVFDjVQwVhUb774QkFyb93yk2sTd2FZ6Q8JZrBSsD6dSx6YFfi",
  "key2": "4FYeRK4aEgKcbnaGWy26dJfkJpFWSJduQHp17fGogU2FaR8PtM2ohLuHN9AMJBkLA67w2EBQasrkZ8vP4mj1uC5r",
  "key3": "5aqwx98VjNhWEcfEW6ZDdr84sdFebibFfQMGH8yE5MeckbzqWJN3X3vtABKKGjFBnMr4Etvh6YWYZrR5CsFtnkoG",
  "key4": "3R5rPE1Gpeo5URvYesCtbgujmFJxuLLHvmrSgypKcRcLCbSZNUFHwFL1tyNLfYqHWKettjWhXgZbjsg2b9jJ3qDZ",
  "key5": "4x7GuLF5hfbjrGb3Y1Tcjx3gdAMPFDnFBBAiupRKRAgnXM699LBTVfFN6ETHBqXWjz7J3XeW6GRjaEBkZdbdtaxn",
  "key6": "56d8isXCnV4epL1DxpU6wcEMtbAsCkG7bzaEye6kd9CSpVvZ2ZA83YE4b21rW8CmUr2Zhc86H5fL4YA8gNJ2MCsw",
  "key7": "QmURamYiBNfveoZNzRshrrZy1fPtneigDcebXyf2H3TSWUv9SSkEd7NUR8YQRTdnWFLCDehiv1nM1qaMCHqtLi6",
  "key8": "C28SR9xtqbGFSQ2NmtHGAtv7iAYJSqB2fp11FAeinUTK7LswkrAgtSRF7ae8tuwrU1mrGFuRfTq258cS4tzrWrg",
  "key9": "2SigYTbuZL2PCsBT2XP6fBwuydo4Js6FArWFwXL7z13EsaveNhrH8eu4esHJJnhqWcwYWc9ZsU7TSwh5nVEryXX9",
  "key10": "3gMdnZDBy23ZioFy9ZJojEuf7nnC4jNQAjdmTc9E7zVkF7REFKm8uzW2nxAeuaTxzXg5mLaXUABXEXNt5gHqyZ6g",
  "key11": "3z5xesfQREtBzoi8ofC3CJPTWhsbW2vudwCLMoAi9qH2wXAz4VWJ5VycagnPJiRjWNVURYPqURicLjTZnEgznWm4",
  "key12": "5pTFcmwLCUNBp4aSfrbd98NiHkbaJKXaR796fJi2iMTHmjEn7uAGRpry87pa77oGNv52ZmXAF3VJNjbxhbUWszha",
  "key13": "3Qo5aZgSv28RjGUz2ZNjx66ZTAmJgFdrFTVotZUrS9z6cV2ij5KFPZ8xBex32JtkQjGiZjukJsFD3siNRHv8YHXh",
  "key14": "atehwJc6ax5WLJJqgTJJYvJVBxbYHUcYVurAzR6M1VaiQ7ajWxJzQhqP5uMWyGNPBHz1UxfGQESnC926KLNjqag",
  "key15": "5MfDLzkVCWeVsHxA9vvkJxTsihNgGiap5CGmS1tXGon97znADvSGkFPXRVGGM1HHknwMSqiQiAFH9UKgVth6QJwx",
  "key16": "QFfSf1Df8LjdvoDLrvAXeCqhkcZzuu7ECG6Uavz56NaJ6eMe83FU3hmzzY4xT7ri98Y3qizdPjyBxg8ryFoSc1e",
  "key17": "4s5aLmqGNnUPajZe6Vd9rJcaThgXR9ugPUHpnrauZ5urb1HJxJ3C2F4atFyj3DiuADMHUA2Qdv6WPdVY2FZk7acg",
  "key18": "4g3jmZbFi7oeaaZWu9ErEwQapqqePA2zJzKtJJNc9Tbh7b5uKjcEty4S37Babz6xT3LSfk6aXGrrAYtgQrKSSomH",
  "key19": "3muZj6L6kJ13CfNdYZ4kzwurSHPK9BCFX7yac9roizP9jsq37avZBCMJ5AKuubUsXCWmWZLq6FfhocNdorCvB6Tk",
  "key20": "3432wyAu6yYsPRh4nWYXhWceFoLoxdTe3CHzctT565eHkaWmUZSVpWXvnuXRhhX5uQnk8gg4XM2UX4dziXqchphB",
  "key21": "2pmKUiTUjdumsg9ToZeXDMSdvGVB6N7Fsa7V5BQMxQRiQeADFY1WBYccLLuZyy9cA2fFJEBZwqrFx6CjhwGsURk9",
  "key22": "67ZfqManfonMHTr1rWrd1ubuCJ2QyuGcp3Bz9dFRHP827XhWKjwEcQ1pQiPbPHuJLRyMghafT5mjz63DEZVWDqDJ",
  "key23": "37fCu5xgNXG4X1G2pCe1Pxc2vaJF4JMfrg9As8dJ52pPLvptUb8cbs3jLHSxK4TmJ2hZogkW3bTGFR88F3o1uKBd",
  "key24": "fABAUMdnMbYyktPnK98bgKUbRCLbjAgF3gVgNWYcC9uiFg6JZqVZa5YsKZnNNRuNAWv5Fwy9PrSVJtpw44zQW3c",
  "key25": "2PoPgtdCUBhWPy9SaW4cFLBqrfadRpm7FE14P5F9A2PhPuSZxkyyKhT3fiFk1HsknbfdmxW9f82P7TkFqXin9qs3",
  "key26": "DEQdYLdxMCsb5Dq7zoFJ71Meraotkudn1qjf8ubTF7kXnk9vGPWTYwocun4yFryHZ8iUbozH2pQrDDSJr2KBLCs",
  "key27": "jwXi1gyW5V65oqeoHAj9V3Y1tPiWDu5QLRRVCRpYrpUnaU7i7t6NUKBz2dr2ofsQ2vLvWZ144bFCqw8jreyEpau",
  "key28": "BgYVQ2NSYVoFSueoDnRCY56icZV5Q3xC5ebKSYnKwYxz9XjjtR464AU6bmYbLQYc7pZGnB8XMjTrU3YUruvUL3s",
  "key29": "5GUp41JUj1hCPJafCsv2QsphDJJZumCLPapPuohxySbohasZgPanSnEvWDS1njo6yNdMbDM7TgsXJQ9kBQWcPwyJ",
  "key30": "5rGXB9ZZADN3a8T6558M5o2Y4nXQwhe2HzhVn5bzMbpcAmoiTed3b82fxS63wRnSo1t8C7jo75aiMPVi7R8eiMxE",
  "key31": "wuffLVfRL4cgLbQTYbfpiXzr8zLkSQfY2nEQrsbracxAUFPyZBLTGfnfY36ndREgZ19kZvC3cqboVMVhEUfyVi2",
  "key32": "hZnojV657JkAmpzjcvLQTDMujLDjTmChYSooMU6wti2TP27oS8qmchK56wg2sdc4gqSX7g92fTNDGjnuUXAP34R",
  "key33": "JvYSneFw51X86raJGLk9a1cju2QW7PiN5dptgHiGix3XbqqtMSv5axBcCjLnQm3tTu2y8WV4hX667pjnDRKz26A",
  "key34": "2T1GjwNAPoKF3Y3ucUjDZAq9wZ68okQrgrwwZnPtFZ1Kdz5epnXj3eKnw1ZJMssM5kGhKbC4UADwtKa1C2z7hLPA",
  "key35": "PgK6hjqTS4JKF8SYovLFbdKbX3NfbaPgKkUSUcvUfSCKTduabHjsMBvZw5eqbPTymCgcpVX7Y62Qji6dn2Uo9kC",
  "key36": "4zHumpoMThCh53UDFChNrqa7y9FgoRinusCn374B9P9VDZcjGz41oLL7xhesRSe3YbjoDMvqbyxSmnXoQ8rmirpa",
  "key37": "2Wu9WvCK1omLBmSveeb6ShGr1VtumJ3N69pbQV597T5mkMyGapedx3Yjo2hkcyysGACL399iACg3kziYbszALnjN",
  "key38": "5izgomLRrtPbmr5trekJZBPag9vSZnrCebn4Ermp8FrfFtApkXg3abhNPNxhh8X6qBu9Sf2XThXTSgpZXu1JeWEs",
  "key39": "PDZuv2DgCyAQkzoRnUmYNBkFitTCW8d8szmUEiiaHEymFtbbNQvrpoFYLMVwxW4xXNb8QKaWw2bL1VP3bWiVSiA",
  "key40": "3kFC5xx1qJr5TXjeE1cCdhJvkk3UmpKq3g4K7qV6wLdwhEv2CKFSjLnGjfcUoyJGBRppbhSanr3wKWAHaYc2xHxN",
  "key41": "2WDfFKNwNhutXMN1kMyYdUSVam9KBjL3ubuy3UTau7RauawD45tx3hcLH5yhMCiKWSPeRPFyEkYs5rgjXUaaQbHj",
  "key42": "2MGwGWzCYTu2jhyzqxh1X6JVanEYMp2LNobPJQqVjxtUetvkR1L6BMSS3YashcHTkbKgca53HEdP4rGUMPHxuqo5",
  "key43": "2cSWTBJJaRbEe2TdpQNDraMS2ksTuGKPJpxtpcs2bTNVsV3j1iemBdtAH3QKznrfZKSJjHfvL9TQxhnWH8h3BeKF",
  "key44": "rYMDqnE4rpuaFffqL6ZjLXCUPxXz1zAMFiqXQodXhRNomdetaySQcfcYfhL7h7YATmW7P1cMue3hNuwmjwppq9i",
  "key45": "3Y1fjmZ8Zr93r8e7sXW13upwThiojhZ6n5hDwdYZK2VSLakwrJPRhXRKokvgjV696ZwHXH7vuuysNiGENBjrPrCP",
  "key46": "36HA3eD8XatyRfXXftkdU97YJvDinQJNe2tqNCUoEzCaqzrbn5GtW973xHYkuYcuwyE8Bmcsok12QF9UQX6GiyCX"
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
