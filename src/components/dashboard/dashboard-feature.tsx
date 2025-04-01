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
    "4oMpszPPkepzKU8izmqDpxvdmg8W3V2GL16f9KLg1R5eeRBTrMVwBquiFxXzNucNWgfaB2StT8PWxbLB9chHHxKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9nWfEDzGJiTr1fvjnX9J4hUhkzqKeaJpEWC15mJQ53Jtv7PqfRhQyNDX3gZLPv5aFGs4EhhfAR78iqBxgoTC9L",
  "key1": "4wewdC39xqGPjysavN7oZQ85M8W18Hya3tL5LnhA8cMqDEhA5x8rQ4rJXRWCfJAmmeLg5YzFkd1DzfQZE6xeKgPP",
  "key2": "hM9GzeTvG2XddUejWM8HtjTnxvd7Rpkzn8UDfovUuYiKEuG41fE35S52TkBwMgj3zW2PQizJy8znfMMozohnReG",
  "key3": "5Bk67UDH5y8rNJQKYTn5kRcfV7P9dT9eYyUHfLQ2BXzYtrFGmqj2RgcoVh2L8y86QZijR6sZ1j2F88ihPqJx25Je",
  "key4": "5KWheHJPWtwoyUEAtsui4D1yDtaPwzFbyM3PrJtEy4YbtreCUcsXeGaw7G7m6crTSjqZok6fTvnDhRW4iZi3yPaK",
  "key5": "TnPjyHYCMB9wiPFikBGBvPViSprP8uj3uuWdkYVH4vLKFKLDj7qLXgwqS3NxywZL3KK6Qni87d8vc6kwN5PNqpd",
  "key6": "5exzxSP5wcVMCpskDdFd2yyp5NJYxdrmnDJ1ALZ87Wbsh3kuxJ4jTsGgoSftMuRjpgzCgao2wYnuVkwHAyQpAnd5",
  "key7": "2gAkXikPwUHaQGX27XmkqxWsqUZhLpKxmrJ8TLcsAjrXRv59uuCQCi1s2VWZndX1Y3MykkTP2byQoFFJg3K19PF5",
  "key8": "4tP2ryQRs4i9vWqjLnPyTPy5h1ztZBvtXc19BkZSvTcAx3YMZAVorppw5zcHeqCnit5FZiKx6SeML8qDsxN9sakR",
  "key9": "5tEey9TnicMGc7Muzbcx7UWYBwxL7gZhB3P9R3mTA8pp5q4rKGh1LkFFJRCdyjHYVgL1eLcmVpm8Rz7szHbt7VJU",
  "key10": "3R14MjEMtTgRGf9parENR2KxP41nuQLT56Y5YQWjoQfV1bSqBsiZpDzswkNfXAgnJcBMnCzS8bJxGnAiQBGdWVNe",
  "key11": "2BbdUGK69fSCfrnAresgY6jVhk48d3eipkJ3GSseWd63N6Zkh9gJisbVLi3QJz6pSAk5XbsrAPMZ7Fi5YqDDEc4B",
  "key12": "4xDaupcWqqDoQ9wT4N7TjrKnyT9ixkQg1sCGA5dutictcp7bqRBuybQMuCgt36995mxr8WkDondbxcUW5HeqFbTo",
  "key13": "K8a3Ajsds2ZDGszNkkcx9vRatevophoW1uK6GanKWtF7ZEmgwx4miYvMojraaDvRzdbVwCS39rKBieVpzf3EeWm",
  "key14": "y8kmyzpqNS1owdEaJrikTnRMtFezHzYrwVJeKFQE6q5UVhCKiECGKscd16w1PogmqLXTSyjSWTr6jYF32BmW44C",
  "key15": "32QWPF81azJLspGKrMZD8m9dUeNEhgV72LLQqBFhzaqkbujiQ6pY3Xf9ye2S2GCKrFybwomTN2QaTtPDgkW3Ajp",
  "key16": "Jzfjy1s6ytvEu8qGn1GaE873BfFD3oGg97epdh91g59WWbAfffhGhgDSwMarqSEiruLEKtWouXd3p4i7LJVGWFh",
  "key17": "5mUrxpYTJPk8dcDCeyksrHqQzkd9De2pnPBhVZb5hBjd6TbmvZRLQBb9npJJjvaW3huqYsiKr9cvuMPfZnBey87p",
  "key18": "4iDzAaMitfgisJLDQczcYzSqPCQueFcQQ5C53iqSLw4tcHjS3DkqRDMPtrxAWrawQkqrCNvefWVb2KkqMxYjuriL",
  "key19": "3cw9uk3tnEroE2FppqAmus1jX3ydKr5XmZSCtEGdeGngsuxV8CG1epXh84UZDyszeSGJ1fEff2LZwWx3D7yJnf1Y",
  "key20": "4DyDgiuvVSE3EeSyU2aD1VsLmYkT5jHE4CdVUpcAXMgMRDCMD2ZDubrcMskhKVk95KhVmA9nbhuDUFgPGQ8Ed3m7",
  "key21": "5G6RK1CsEBQBGeVa4qowHrFMF8Q3Jp6dNekWh5f9qVBuwJS8zXpxdxJ9ZGvEZAnodP7zqh7aLm6MvA5XRY8iXqAq",
  "key22": "4zenAsvtCricsjCtG5FKvt4KJVj3nUkx7EP6zkZDscDYx43nGG3Hmag5WqHVCLcz8zXTSjKFrTgnqDvgocjhxskA",
  "key23": "3ycvKxw3h4cwqaW4jzNrNKEeQyEYFX6b5YAGCmQRrrYQHW4T89PaUmzJFXHTWr2DXb77HtBQmjh8iGRAHZjdU3G6",
  "key24": "2E3yKGoqrr23hK1zxxu5LMvGe5hQqgBvqEjPZo9xX9yBLvwoEh8ZM7Sk4njUGwAi1ZxfTPdg3KV7DYf37b7nWouh",
  "key25": "UgryrWKZ5sTywQcViFMM2yabwCJa8fJLXsbKhD527yAHZxjfeS4Jn8vVXux4VPRYT5QsHEu4PGBRMTdhLHAoct1",
  "key26": "5aq5g2yfrWy4vCH8e7vEvMHHfhx4bVpV3ZYXXnCyiMdEM7jbKGgpuVKP94j4hUbLiGpiGmTtP6iAUxHvwY13vTM",
  "key27": "4cstCAr9rhvkbJPtBgwYcbC3NGjKyPoiRFah1SVauJZMosahwg7V6vLeBy1DicJ6VVhR6RWZriX8pyDXsQybkSMS",
  "key28": "56QXSNCxyNWAZTGC9DfptLF1G8GpqEwnkNYcBSqz96iZnpHEy8J3npW6MQ2fZYwsRnQLPeNZbVyFKm4R8eRspPXF",
  "key29": "5tWm5WdtiaMpgLgdMTbUZuJxL9KKQXAuFEvhJPf7sHtqWA1iXzdJXPWagpk6g4vpEXLhoyYGuVu8eFNZyQLKADS1",
  "key30": "2GZDRBrxZSgCt3nFtAiuoCxhAieJi2U1dFVTGhdKuuJbQTnVdmq58CAA4CkmyGZAt26U2AkrGzNeaRXMQGQ5mWGr",
  "key31": "3t6wpviJ9pJDdohAXnJXRog5h35ScdYoG4KBS8b3NR7vjvQ6EwngihriuSSsFQfBStVBWhw8kWiXUqM6RwoL3PdQ",
  "key32": "5pCsezL98s9uUq7DwkAHbVu9BKsEqkiQVijxShUz5y8QJv5Kmv8s4Vxbz2dzTvfWteHxgNEZw2KG4SaPExH7H8RR",
  "key33": "4g43cmi9jDgCUgM81TgfZ1MT8SfHuMU4JbeUUc7C9XuDB8CmEfB6EZafA61hEY6bqLE4GMPUoQxP9aHB5u4cMAj3",
  "key34": "25uoj196XUcGbFuc5YCWjAJvyehRrgVZREeNrT81XBoWmbn4aEENy4pp76UHS8fVsTnJ7m1sVycMPj3s9VGxm3ec",
  "key35": "4mobWSZ3Ep3fVQSqRXYi6uh8Ln5dVb5jH5DkzSSyp7SpJnXp4NsihrYNewP8MSzPHxQXBNyhqkEHTxryU33engNr",
  "key36": "3ZzFNc7b3X2qko9XCYkHdDAte4Ts22UuQjPBE1F99QkC1UatfJsdkwhffeWPg5SCXcB6kDmfoapPBogaR58U6uym",
  "key37": "3Jrgmm4N9d3wFeKo7y8JiNxfApaaMEe3dAARs4PNnpL52XCD51eGCGkWk77pTj5tYMN7Lsgg26RR78uaKKkefHJk",
  "key38": "3QDaAnrW57jitLxyuLjDQ5YeEZAYBMxBZMhwGGiAwAFSmNZyXBwEptyTuHYZ1s4Crf4iurFxH3iNAhuQcW6iRZ4t"
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
