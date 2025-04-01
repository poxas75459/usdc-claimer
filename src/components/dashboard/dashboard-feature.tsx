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
    "3PUCmZdEFkGG17WPs5gK4edHve7bEVHqiZAwsvpMsxKRxKiP3u8oqrhVk18gpCC84FQzMtYTHkC1U6B6UedpfjJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZFT4MncJ82uMi1waRCU4P61cCs6UZXZZvFMDWyx9eFxy4BwCz9CkKb6FCsTj3pm8qRjuf46jwhJxfxE3j7NEp8",
  "key1": "5xJUjK4ePQe9Bc15VAJCXjQyuzCqMkhfsiGpdmvSMeyMUKsYAuDSqub5rPKFVa6UQge1wXLo81WXtULKKnyBB64U",
  "key2": "2YkTDdTG7zEmmZSF5E28nKkiLVc1Czt1fKLxazrKPyhmeuYDLgWtb3FzZ9aN56gDwDM3TZbhHjebRcmK1dmiWtHt",
  "key3": "32nSEXVRn6sMoLE1u67U1WrwuYrLLK1xSjcnVKHGSZTHX8f8XiXYHfdiPejpauZ3btnR8nhSV2fqEy34TvxwT33P",
  "key4": "gtAVPF7yQTHrcWZTzqpL9RfWPtFg5w5dhfqW5XrV934moxKFSRV7ydDG2yWX6iC1acCWoA6kw2HimzJQKPVWyLG",
  "key5": "56HSqSPYjDUb31iJiuV8pehVk3LqahJ32maNh5EZ3ywhB1nDL9VZs9Sz2kpBs2GQ59ZtxPTuXw5E6CRxuJcfGJbP",
  "key6": "2MFrCEViPevcHj61P4vUoQeJjy2fqEP1VXv9hTuRoeKZiphwv7Gw27LRhqruZYLAg6vWgbUrmx1mgGTBY7s9zhgq",
  "key7": "4UtPs4ggJFiajYGNydkyr526sJ74XCDd8yUc9yEthBoj12eYnnSLtnEvmpb8txiWsCbjviwXWcbZgWnWYKuZuKRf",
  "key8": "4aWrDGHTyxY3JYu2c5RDhoLgm3RCHmfK4XypuLBaHTqSM15tGP4WYAfX4pD8qZL25Ww5cdDvxzktLGtAKD4nBeav",
  "key9": "4CenS84jPK4Ga7cqVvSdrpKehEKbEz812XMAcN8V5C5F17qno8bJbueZPhV7uio4oQbPtjUMApcZdAFQtW5NeJuN",
  "key10": "4C2yFiKUooqKruMukBKxE8mvxEHNR9SxTmZNhQQENE3DPyfQAtTHXpxixXr2EEHkZFyE26DfuCUr4y9vhV4MSbuj",
  "key11": "m9XvqgTDxfCjEt3dVLThxAYKCHHkgcozpW6YdzsMYFqvTtSu5kGbWxvKTs2ZgiKEpa3TadeM5WJcqj7rZuUa9vG",
  "key12": "236KDcMHmgRVdx7G5JnJ6bia8qLifwzeyzc7i32J3gQDi5G2SSvExAXCvUz8HSHfPVRh1MMLCmghypDarTuqKFgk",
  "key13": "65Hfq4KFKDvsujhnoh95kVhbBE2C9QzS1Hwk2Q4dQ9482mXxzKKyfYGB8nM1WJY5wFP1w67csmqCr6BNEJFTftsn",
  "key14": "2ZvhNyFyuS9Y7o7HJzRGfX7s1SAeWAtWtmbBt6iEc3TJrVkUBE5ywMbFthrfkCAngaovcXvnnRuZPzqBJ7QuQXtH",
  "key15": "4Ugc32ZfJyoGwNwjrEbNSu3XDSxd4LEaoXRAd5ArpK29ifxPMQEPwUmUpqs1BXZL35JZanVpGACUEbvP6J9GNsrq",
  "key16": "3beHVoFvpTbY5ztP3QPJuadUm79QrJGzbKUF7jAUk5rSe9ZKy37CrZYNUnCH63TeiXBqW4fJYEQj3uLz7QWdS4NT",
  "key17": "1J83LhDDgVhnwbZxivKyRqjS1EfE9o3RjywCp5UaTbwSbrYzunFmER5tPhTE2spYY8m39kPhUQ3G8iUNr1juSk1",
  "key18": "FFBoNCKbZL1rREAh2R7hfNkTT1iXixK8dUGPdWcscPUgqbFRWsiTjhRrXjcgWsKXfV8ZrM8yRrzikNnTe1CGZoM",
  "key19": "4VCKXCtb4DEhLN62ZpVGASReRaCNpPA3W7w242MsftrCyXwbEGXLT4hw1WYc2imDpfsqteLq4BE2YhcLxwCsQ4LT",
  "key20": "SMcj9aB85tJsz5hy7Bw6H4ypQwXe946hrt5eAtDx4TdgW2k93DwEzpZdJiuKrGKMdNd43gWJJx9kE7KNzxqQFa3",
  "key21": "67oNh3XoQqqjHpiLRahHT9GvpkPuSmQhN3zUuXkdmfZW4ypT75S1AS3zz2o4BCPHje5j6RXiLMPPgLeQLMohVFaU",
  "key22": "3itSLYsGNEtfDk6VgQTTNL2iNTAbiLFjsjfaBMN7dT1EK8UqraXa3F3dguFyhhPBjZ1mK8BFNAzbzxx8FBrU2c1y",
  "key23": "2quLN7cWLBSkT5XmLV4HeVaH5BwP4neWocZrzgtQvtScotb25Btikow2YwXmZugkDxwqbj69JRuer6J85Zbq7JaB",
  "key24": "WieS9fjUGgTMtWpdnA9C596RZjWA8gYXbywJophxNatjqDhuHXukvpLEe54qDXQFhSk3FLmp2cFzGgau5GHmvP7",
  "key25": "vcHRsMyarHMxirem7AGjNjZstMitnZt3wqp3wG9dvUDw9qLzSfwcpMBDPCUe2QXXhWxiyBt9cnrCSjtTtjAgcgj",
  "key26": "5TZSGYm89VahZ3N4kZNx8ffi7q9Bar7ETE4agAjb5iwsGUD4HUgy1TxxFoCa7XT9oPBDkve7ZeNWFcVwTgV9AfTC",
  "key27": "5K96yrWmr2V4WoSrsoD6P4k3orv75afPUCBPbDhms2tydALKhZbmGtvozdPfc8Nr7oQP2ZBVCN8pYD6hH84JZmhL",
  "key28": "3RWen2o1w3EfBtp7V6YGkiK5BdQhuZtjx8qzyvgtTAknSUDehH3Y6Skej7diBaNi4WW1HCNKJkxQMnFnMX4sfimz",
  "key29": "3YFhh39FiaLhNdki157ZN2yjcAsVBUDYvziSgTmnyyPXBAEbc4Ht8t74hUeNFtJojYezUfngRcNeJM5zQy4DdnTW",
  "key30": "4RWWxwFowfUgYoQQieNNeioqBqaTFMSRo2HRqEfoamJ6hPPZe6R6g1U2Ytq63N6LviqrHYY1njfuui3ZH8k1gZ87",
  "key31": "5H8nMNwGWpeJJ86ZNmfHRsD3RBhTqhM5Ed1V5fAV7ginxsgr37Q8K66SbYsgdE4w4PmM36iCGNB5xkvkQM9VmKo9",
  "key32": "3T5k6gsSdRPpzfPM7P53yeafdvGqoGiaFSwkx5E6ZsjtiGCH4yF57AgH2DQzA5CsTQQbNirr4gkMkebJbp7bZAv1",
  "key33": "3NETKk3UAGCzY7UJBGCkPq3Gi9WXDnWv85R5CzrBCU6byRJ2FKNYn6vBZdcZcVHzCL7gNRWX5i87r3q5NVQ9xR5s",
  "key34": "2LcGsAks52kWVvU9pcb1YEGcJu2G7hvdmFCg5RXrruhm9rB78NAxkv7Tsj8eLw13o3u4AQbXYk1thZX889tmPjsP",
  "key35": "4krM5YnAD6bYyQobnAtBfDNTe8RX9DUYD9FTDcAkwBQTGjLqpBMtZ22LAh1BGPAjic9e9nGANLZWp59dqoKkKnDL",
  "key36": "5eUbx9h7EjcVBYXMDfyrS4TABn54KFy7RrTiidos5CiBatHrpvQQpxei3kCD9yRsvsRnVHcEfbRFEPVjDEyBffeA",
  "key37": "5vrbRr1gB2jhu7VB8CqHrMod5KJ2nRo6d9Vk1rrLV8CZFjooVRZXdf9cgHwBWRUfKwoQLHc54yezRsAp5wHnLAy6",
  "key38": "4MLeofaf5jKb6yMqJHUZcnaJt15pA8yMdiL6nAbohpsbiKVYL4WDjewRgGGHZbwjiXCAKvTtxp9MErbd1KrBsYAA",
  "key39": "5TPJBvKnihPL96fG8atEiKLGLfZegyvHZwk4NeJdud4KxgfSTE4nrByDmsdHhwBPNzPkuZ71ZwqLin9T5fubp53D",
  "key40": "5SvcSiXk799pEXd4X6Mv2BfyyzbU9heJzjyQ49pA2E6uS6iCM7oS2iWtKYBgKADWhhjVZ7s9wRb24s9Wsm5tTPJT",
  "key41": "3oVSBrYFA4taBLj6fzrtMRSHzDmZxDMJ46PdfUVBcxdwRTZezKspv8gZztnq3ezf2SR62ZZgpPBouxJXje3YGzzM",
  "key42": "ZCtKUTdY3oMhSBz7h2L8pUg5Ysw8xaPAEVH1LvoaQx9hpbH3VTBmdQfK2wThNXbNvA4CAvEg6DWykza3EQS1BY4",
  "key43": "5PwBSzU7jHkTwfVMkTWh2EYtPJnvBd52eAFD4rzN5FWo9DUjVw2V9TuJhzVNLt7seMC9LK1Xh8JW32ZohDxzmsXo",
  "key44": "4gcBR86hbgrAiJ8MS41wiE39As6LnqUCjXEjobFdQo6nZH8f19cmCFjh95KSJotzrSdUsw5GYYu4gWXvgwNmbExr",
  "key45": "5hqCZbnSMjK8W11ShJtPCYKSyxCsgq6wwxUvTx2qsURavfC8DhQ1QtwADpZQPgjEWxmSJRX9a4J3Sa4F1TAzSnWA",
  "key46": "vTkNs31mVUaMr6wpX37wgoG4AH1po8f3ihAVut3rQs9MVfhZ4wT95Dp15Ea9amRHiMMvCQjDvTRosjgXzuKThe6",
  "key47": "3xBwEHquoRAQzbchg1f9NaQB8Mq3QiptksRETwMA1KkhuqYYJ2Y9wSTnbfGYVMeAqSY9j6TcfgsGbZSi5F43thSe",
  "key48": "2U9zPCvHxRa4GZP5eRgj9xSKiuye9jwNYwpTXeewALJ9Wpp3Jjqna4Kh1Vzaiyj8EBgek1sDpZ9EGGv5uFrYT3qi",
  "key49": "rpVrCcnJkZwgKafAwr9wEjT5ZRHJSJ28FXqF32ATxMYVjqAAk21PGCRWUtmMDNyXCaLcQvy2g9B7yYiu3PJkcGV"
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
