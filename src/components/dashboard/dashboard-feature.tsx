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
    "J2P9dfPKfYLbqxUGf7EkLr4aAQEaKbFonkp4qSTxL1iSU89uCbQWSvV7Rn7RF3v9XafDMxMwc8RJSpc6Sc1hx3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZoWAkUWn1SGhE6GBHr1eFf8nzvHdZRBSYrLXaNdXdYL6qzPkWpaoutmfqzpYTLe5qWsFKWiEi22V9L6LFbwGBrr",
  "key1": "zgD4zMsMfwTwFz5ekJpuoHVqtNuP4xPARNDbcDe8s8Eu7yVSJ7wdcH74qng7hQLEYhuxobvMHcv8TUVotycxAKa",
  "key2": "2ckBBN1M9BDXQyRF9YvB2qvrbFSRz6avyh4daFpDq9DXCivCbNHXJbKftazVFdHeL1LMosUDpC4KhuVPmJngwHax",
  "key3": "Zajer1m8XBEG2eBfMZnuQfbuWJwBeYFmP5vogDfPocKFHgMCB9bSHREPFPYd8ym6iZ7bJZrkTzqPzjmMeoj3nbZ",
  "key4": "5q64g6b3UzU8AwENwhtkgWsAHUgVts3wj41HgrLJghjV3SLTLZmqScsFMMeeqzZ6q8Fp9CEoeDtkPkGyohzepJ4m",
  "key5": "jZ3kPyXiq6EfRQmmUEH1d6xzaxYtFHoQ6LRWQyZJmBKwGkZPyxuMseiP1gyVaC1yFFCkS2nFzPTuVQgUJf2tEAh",
  "key6": "CRMbPu9VBgVxyWds2BbXgQLP9yzLrwqtxY1Hppxyi8rvDrdv7vcBbdkNZyg9FRgMq1L9Z52HbLrpVU42VVFhnqp",
  "key7": "2KVXSPW8bm7263YQAeKu69jqMywE4zkccWwETMisnzpHboNFLxnqRPc5JJAJw2jbboJoRAWTeaedHXEzDri59fZf",
  "key8": "2fDEkpRcLgFyPSBDMN8vRkhFTJ6TUMsufPGTJ3573EV2N8P9qp5JXNLLcwPDVo2sXUxMqY72ENPqzn9CPdy2zmwo",
  "key9": "5q8NSmHK9wgw9ZRkkNGrsxTVgBUpZss1guxqPo3rjnoMRqakXuPLNRqWGvpcEsdR1XMXyhj2X1nEUymP9i5aPPcY",
  "key10": "2H3mMxBtH6KD1W9KZWCXaYsPbN3cWTWwPim2XSLvAMWTH1kvFrfVLYmSPkFp4tBRYj3xVt2G2GZ9BmWuHsc1Z38X",
  "key11": "21FTo5XaqHU1LB2BXoRLi6csXquHUjhQCJzHDs5r8y7MEzg8fqwbmeg5ay4b5HQYxMwq2Mwts6cSQverPhMCerm8",
  "key12": "38MAyPKZmiTH7cAPjMb5xMrjxfv1RDQbiMi93DWDfsgUe85tNS2twiX4iV3TZAFTKoDZ5Q11dnXFmFnGpyPvmqFK",
  "key13": "48j3dPE8ASab4yBZkyEWCMMYsB7mJVCDdzP5AfGAMwjSJEwWCyhp3XLbU8J3Zpj2nj1wffTQJExnsCtkkZxqkx5V",
  "key14": "4A8Lp2QzspQiJQvhbVkKM7WS7bfpohD3DDMFEs5PiKRn4YYGvAPgzrZVY2TXXoWgjn6JejdZinQipsTtiwtNm8gm",
  "key15": "4LeVfb8VKGE6QHih86gRU8z94dJg7PafJTjDXc1FaLddVLpBsbhkNhBFCo1j8xfv47VTSX4saY5knGbm9BQFU8i4",
  "key16": "4LnQZD9BT2sGeu8ynzyatqR4UT3Qz12hnVKdQAR919RgN3hfwBhQRwrM4kUos98adHoLZKXEn5rFnJYnRFQMXLqp",
  "key17": "46eE5zYct9NF47u4cyMZGt7UsaxqysRa4ePCmx6aWCT116QanUi2ftnqi5GFnu1v4bHTNSkGo5MB5pCg3s9mhhMS",
  "key18": "5iZRyaZ8uw5tBnDeoe7kYjeBh5UzfMCwd5W6LW3b1Hv5QNrVcF2oiK8ySkNNx4hQnQqtyTD5CBj9H5PXdHaiuGE2",
  "key19": "3EzA6zXrSPjAx1Gydw4Tev5FXp67QXxXa5hPhWETANEDtJmoj4itBwVitHmqykcgd2YknMVA1i7b1ymXaNyKz8rW",
  "key20": "3eCJVdjWt9Xzu8KpFVLxvJmfDjtLQB8PsEVoPpobPKViCE4Qt1jqwfetab6pKQ26y6nSzpSqRwF7AR4GWPH69fSB",
  "key21": "4LTcQEi42kRqKVdQMpHNRHScXq3waGu6S5GbUj88BSNjJrFEUbWNkHdVWDDr4oDkHnSp2aLBdsJXRxyXPpS8Fdip",
  "key22": "2qShBR278vikkfCeZf6kutTxeXYRCYaHhAzXqCbmsVc7vqohktTcZ5XgyokBBr8NztBqG9CobwD1aZfrRzPsMFWh",
  "key23": "4BNxg6xSK6T7P3zoaoSg5FKn74YZoKYezuC3QKvXLP8vhGkpTHh2ykJ6cVnwoYHgwoM5hNSv8wViSf1TXD9acaQi",
  "key24": "3hRXMb8nWvp5439MwzMD99LqU6jKd36Dk9d6tpJK4uYjGNQqh7h6YQ1xHZRociBjXA8tLcek1rxrEa8W7CWWoVXU",
  "key25": "DgvvuZcvWPpGcpAK4iesMWAxFmrdvwynGg4Bdiq7gcX8fL4xE7bBedNtttuZL4zBxUkfaM5H5xyjJ68Sfz4GLPo",
  "key26": "3sntHe8xEpTRaa5sMavq4jhcKDQFRpBkGKtNrjTcYwpTZtSmUWfD8b3AaJu4WgFSwhHtyFbNvx6hbexAExq4HWKE",
  "key27": "4xWS5UtEeYnAPdXPBfUYZZakguTxfwTEVbYVZkZCn4idbCdqai12QnrCsrG7uCPjJhaHj2D9LFLDWs4yxuXmxsYL",
  "key28": "3xG1cvKreyDdKccjzatrvpKWrcdPUs5S7qC6EYkMaqbZZxvjs9qnbJ3g6KZnYBKe5d3eHET9AVV4r1abGZBEnj6X",
  "key29": "5NNhdSVzDttg6SBFpEdjLpML4oUx7CK9fmvsgHPEnQpDh6Jrd7E89AG5mUuzM4ojixk6W4xJYMGwM2R1doePhowF",
  "key30": "5Bnv8PprLuVxhxXCh4GmUWYocLDuUo3YofseWRZtHwPDBYi8KTMJ3HhQBhQbqkrC5XZgwZsjmVbUDKXJsrtv6xtm",
  "key31": "5RPFHgs4S371VPUE6cxY923DaRkPAvcTdPx7K2NFuihFugEsqbhqzSr7CYupMkaMf55qjqdKMgPrkgofJ52ZENQV",
  "key32": "49mqb5DuYwNh9LDqsqbrthhYDYXfUNapN7ApKyDNFwR2GqRG8K1dTucmFnWh2eNNdjDTNcsxQ8oThtQJZ7Du2hRH",
  "key33": "2Drtug9RWuor2mAttUUc1tcdM9gvU2bduKvZSdGR28y4khi3x85oDGfezvHyKNq3DQQoLqkLce4gRN6258Tr44G4",
  "key34": "3z2xvezxufb3qWGPtVW12v9KFHcHJuJG7DLmcKkWbgDdRGHkbRYKLEbK4qVg7WardcyeG495L1ca9GQaj6VYBtJS",
  "key35": "Uv9iVSdZD74hs9uUaMeo7HgNzFCbDi8quF3RcMvgHTf6kZchJJJ2afwSZU4dTXMEanV35qc6ux1DB27LbPvztQX",
  "key36": "2EJpzLjbgTN6zULH3Ha8Misb8gYbTzFBxP3Srce2xXtnwNVaZR7XhAsk9rEfFzvukrJrruD9isTzknLUwtNEgqPC",
  "key37": "3iz4Hr3aGsbtA2r15CGq9y1Y5Ediy4WcYDP2ajDsEheAqiCu4PusmDfBBSgDR8VR14frDp5dCnLik64EuqNTJjKx",
  "key38": "2gxAshPiNJfgtJf11VtTiZDoFgTpy47FuCe85VET61TbmChJShWzHz16BvW1ZrrU5pWg1hcTM1r3BK7pmucYU34C",
  "key39": "5uMR22DyBWaodeVr5yeDi5DLjoFApQkqHTDJydBNDvQydPy2xLpJLMM4YF58xSHiyMKEXfE2VeX7qRJixaZKLqVg",
  "key40": "2Qw31goChy7JThchzae48MjTkjQGP1P13x8FdfjJRR9LRK6qFN9xQT354WDEos8tGeQZTSWK4M2o2a88XXtdAyBw",
  "key41": "2UvL15JU4oZybLpoP6nd86m1kqttdU2FQyQmvZzU3Xi4R2i18E3A2ynCDrqXP2agJruKa9Z4Zu2tgDSV9FWQCwci",
  "key42": "EyBg7wBJBop7atQ8SBxYBobqwCMHRBuqz5tvLwytEXge3bFJ9nMsCpQ1GvUQTgfbnvEFgrzN9Li6ge3QxKP6xMF",
  "key43": "4RwV1kF67yR65Q1DA4TMk6yq5crbh69ayJBzd4SAqn9JGGd44Z1hjZvYNQLMGPLYzzLnUXtwnKFHaUBHStdUS6eg",
  "key44": "doHh9bHUroKFHbEtLQcQbQ6cmoGpiCeqDCjaBNpFojD58f41Lh19p7Sz48gWvYYxgD2sYaBB72JbhsQaYs7hSnC"
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
