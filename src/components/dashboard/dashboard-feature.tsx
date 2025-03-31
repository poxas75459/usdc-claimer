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
    "58cpn8pXenouAyeMy6cDCNDfPo3Z1MCmFrAo3aLgebnxLoUan9DS4JXbMwAVsXPhCmTAtuMdggcdXE35NHwZcBqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRvUSSUKmsM4dAbQF2zTWCuUmUM7S47LdPudbEg6SS2DCYHqHJcZVJWfSjb843tds9sVgwcUPJgjtFi5f3KHW43",
  "key1": "3Vg69WZSnMpcAwiv6g8a1ZiGUNnNtL2829TVnvE4VCi2BSm7vecmJJSk9pYaRdHAzWR8iYUeM23Zznjj28PdCusC",
  "key2": "41kKRF4b5iwR4WfgjuMVGfgqhBsJRXd3JHsEm7fgsPRQa9nqjQo7DYBFA4fzAVmCyq9US45CFfNG9p9mCacD21KY",
  "key3": "2YAxYm8T3FjenoEK13LvMEFyvHej7vU8LR3X4oqjVeT1rHsfWida726gCYbaB5aRKynFBZtVqhisgKTBFv7ycsxR",
  "key4": "5G2vm7t5Cs5dJSqto224ZPqDwQeCuJYYrVVYKui3L54NTHzKLJvXSQx77zhndPvfaTbgTEwafmJGd7ZZeKatq8fw",
  "key5": "3138Qg9i2b7sZqcUzyfmKEAZYTAc2GFiKaMLRYGbGbJ66WbPoPoBhUi3sffZAvBsh2oKb85JvbqLvPgjUxzPoBte",
  "key6": "3E1NnxRtSCQQzGG9PBUUuQiLYR6yMRnJFpxWBZm8rAHmrjvHYSDBU8x1BoDwx13rQGHzsoeioVcvcZk5L37ikUUQ",
  "key7": "3GcKMoyinSZUv7QMCgG4xmVDqSk9rBxNgg6KhDFzsoqEhehnktQbGpk12z2FVp5ySGPteQ8EAL5aX587BMLiJGxb",
  "key8": "49jyuNZxmVeWyQmj7EgRzrQCxZ5sdV8q26HpxJc1siXoBmf39ZwCd9efc4mXKerimTStQHTThy3oWP9CoKCw9vr9",
  "key9": "4NwaxagSoUsJCiafzGS5epzoWxf5GPDTanmqmyxLNTHzHZrbKCBD2uUDuaojAz6xoU4BX2w6GSJCasGPuZSodSvj",
  "key10": "34bqQYveLeQzxKBVngPeYxRr7hnR3wTHg4se355dnag5ja9MmvcF9RR8wMVLTwBJJJ7HcxKNdEJCsjxY4116bdXY",
  "key11": "Y5pxkpzAkCEFFu8Kt7swZrMzjaQzd1zhVj6L58xSm5g9bPzY7ZGVysUsxL5a32Ce1VgdtWiBATkt6HoMCc6oaW4",
  "key12": "385jGdmekc6a2BCZvkVqR3zmrVxdY9XDvYHB7XUTunBrLxmVhC7ENuxvvTJz3acdzzDSdq5o8iCPoKxgLh1fmP1w",
  "key13": "43hTuFpqf2UV7eEkHvZiEjtJc8bTNokxG2F3FfQpQu8c7tWJsVg72StSyUPvu8zSyLhspseevNKBTz8PPPYuatbq",
  "key14": "cqTGmftyn85nGuR4XQfVzgewvLL9UKY26fqDkAnnoj4jmU46F1x4KDENPqifQ5PvmrJ2VKKLrJrFTnB9C8Wzg1z",
  "key15": "3bQjygoKLj7qG4Ld2QXgadKy1oTxTRc8esWVyffezCwwLR4kN2qVA7eH9rUuJEdRmjDsx5zp2LP14FQoshyL4qor",
  "key16": "8LVNdtVEgzjHdowcExMzh8USa3meNnYNjP1fpp1vcuZmPrNP6kjhtExpiHHpdjVsroQwstjFQ5o2L4DQHtxnBSn",
  "key17": "359Cjb6yJSKHVf83Y58ZvjcrXMSvERCjS9kcyjYVVKPZAaPi7VZuXJzHcGFxRRmoYoj2B5JpE1iYQDT8C83kwPBP",
  "key18": "3HYUJ3DNum2V57yKyBfFUazdue7CNr2Pyxk57HgTHG4ppfAH1giF4W58jX8DyUTqJWupQY9TcTsbbEKFLRmeGapE",
  "key19": "AzMaKbGp29h5AxZVmHB6Yc2K6gZw561aFL3EmYofGw8vjNFj9CKbj2emULmNuiP332ZngG5AXCuY6XV1MQAe3q3",
  "key20": "5zgyhaJPYDJtWqYxNBRSe7GJxjW17UuHm8dUmCnDhTSPfBMxMgNna9GqgSZJSMNxw3AgMS5TSZik28az3UAfdc7B",
  "key21": "52Z1DkwKqqXZhLPSYU6i9zrzoAZTBaJdXo7ui33B7ogiZMwyCErbWG6FFHAMmPCi5VsiLQ7TzpqiEYK5o2uxSLa",
  "key22": "33HUXtxAVoPg7PuGHYeuBhGTmcZYZzm7w5vUMnktEymNTRzYSXXcAuBkHLMPV32vJmKyfhtMWhoExHKQBWk4b6JT",
  "key23": "3GfDG1Sr7y9cca43EWfHkKacBTpB3qthSkGNuZ3HqrERi1y4kQvd4H9xYjm6Q2X21PAwnnViNmjvdht9fEBy7uhW",
  "key24": "5qG3X1hxY3TEjcdZeoZaNHxjWKAKU7nFMGfT6Cm9jBgLNjg9CXCdeDPCdx6GvwSPnTM2LousHCCgHLXvtGDPGMLU",
  "key25": "39hdemfeKMFCWCKCtbP1KcNeJFyqPEsnx2jLiAcbByEZkYuMGbkJTcWqRyBB8JMNkFyWy7EH6Aa9Ds6tf3BRfr3x",
  "key26": "m9FbPD7qz6bcyW8L9CfC6uQxnRMptfoChpWCohgdes22sGg4tpLk7ytRHRmBKpDZ7VSsmZGp6kSwsWXCRqA9sne",
  "key27": "5QkyRUohPh1XFPggGmJE8immRRdvEhjUZQiqyRdY2DGCxzXaqnDu8cunY9Wbsz1vvU2Bpsh56peavwyZ5UjXV97o",
  "key28": "3g1DuRLmw3fLksFjk3hbrJZDM99UQVYTNcH2brojvrP1Z2sbbBCKN6uTbDfyqwhpM9yNDYuguEm6eVz6djMJnxS3",
  "key29": "3azRh2dPJZPna6BC7QwjQjFzL9PUtA4A8vSimRgodjftr7a7ZjTamRJdssrV89aShiqsZyGhsWT6QH7VAMXDr7sF",
  "key30": "5Zu92HtQi2J24BDp1y1Rwi723iuzRWruRLkSRZafMcYHnwCcM1v78yEEyMJStmcnkjfbBBTDJo4Q7ntL7jn9z8TG",
  "key31": "Z6cAkbSW7hdsiV9xGKeT2jpkRSm1ZLgoSjsXwwnYvT7eWRiKtLgxmDytot8bNsBZx3eDMCHxHwoqtRgSov3QQcY",
  "key32": "3ouC59xLgsRuRcNHi7jUqELEN4ct2avuucSX48kEAmwGQdEvS6qAb4Qc4WAEFGBdFTjTbMfs4JnRGj7U3CyT2gHa",
  "key33": "2dxKmE7oQP4nNazrFy52heAmEf1RN8iPKNjiTk9FTBw5PFCC4c3J7jK6SnRBcCXt15u3nEjFyQrogHmFs1kASEPc",
  "key34": "5bmVAXnXGa3Y9TT2Zy7GqybzN1jUfAEEuDdC7Hc9kSXCQuvveNmpSdqec9HbdnNUMRHpcuGTNTqYwvdtn3PmNDAe",
  "key35": "NZuSsxZ4NjQDxmcYAsh8oPNKNyDuvHeez5QbEnqB3Pz3CnnDgKWnDEYdQwVjscRcYsziE2xUQai49UAo22GfbH7",
  "key36": "4QpghNgMNUj6dnj1HHfcsm91kWSxBbAvDqo4eGtCiKxMkKWKJvEkiMSEjp8UY71yv6ZU4qDnzxF7nVoc2rGtwSn1",
  "key37": "27kFG16jNN1R6dme7K1PL4xXsYmkuDpu7pBCujAzXuAfTGiNoWCyesNYU46ijDMtNshrPun9FjC5rijNfzANkBeQ",
  "key38": "BFrQvxVxuj2n4DHoyZNk3E8BtaMbVXe6xV2FCXrqV4yk64jhPxudqef8sBgLpJnyGAyGna6NFDh3phvosg5Yeg2",
  "key39": "5UC8Trc8ckPNsu8VmPKarL2fgMfXDiCXWSu549f7Uui2BMYrpQSpoET31g6KUUGFquYcHoxEBVWtCejtVLQBL57W",
  "key40": "4hpUqCWXLF2bXEeocAbBg5Uv9NKztqD8eDCFdJziUocW2p1hPVL5fCVpXktZsxW3y4fin474AcP7tTiKijFY119i",
  "key41": "2rcJ7dtStxvwGSZJAr8sHGeBp3baEd9vpnyUsMKqXWFALHLMFiYuHBGCsf9nHfYsxaD9FjB6RFWQHZ569GxM1ca1",
  "key42": "N1xYBrw6c3Jg5iNmcf1qxh51RwM3SQVFbmUUQAbPdmP7ajA7ZeYhU7LL1hBwvqD7UXddvKDo7MoGTBhTx4vdjum",
  "key43": "ijTgkTuCvhdDQcFbojDzmMXsPGShkGYZSuHd2CNKBYYvS8VkPsuzd8DQaLYawXgJSBBaykPzPntSVotDLy788DU",
  "key44": "491psHqSuYWfPDfiPijU98NqPNErpxYWzxEvuGkPP7FmsK84EZ9xqZLFvqmbb8oru18UXVivvRVsWbpy9BXrsPDU"
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
