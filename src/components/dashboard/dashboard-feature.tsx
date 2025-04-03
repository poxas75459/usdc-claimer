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
    "2zJosfXNwJgZ99Rz9uegmRJ17wNy4hYe1Ghd2XG8mAAAogm18rvr9xPnnULc1STSfWCX61kx4CM4WRz3J4tJegqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGMYvLQ6opKDpjmUNr4u1CRd1VHn7Y1zSuDvkHnASCsC7CziQiCd56pR3n67efvuzZQ5ghaVwqzkbiycBBta4z1",
  "key1": "3cipoVfrkGiNPq4oikSJMFWocndhxbm8ruqr4NJDTDfXmb36pom5FmU2Cqn7H9p9U7tJb6fHfhNajVLb5UMgey6J",
  "key2": "2Qj38s8xBfpxnLzym5XogC1Ce5p2UKzK2dTYBnDsH9MSAbQjoaj79E6gd8Nmkui1LhbGY4f6yiK85ZjVCdz48zk7",
  "key3": "45QrgUByCAXMonMbBA7Sj2xmXLrxQ6U2qsTYhsgenzvP9m759ovFS4F1vrpfwHRi6wRmtzEVviPpuvook1ow5QEg",
  "key4": "zxULtTPBZPWVqEMNKafLHPKjW2XfFiHo7KNsnVQV8yohUkSkujHt9jQUEkoww7EqAgFL55d59R3HHvP8fYvH9cP",
  "key5": "4SYSfGbzJEVJHrMYkgQTUfUZxcX55b3VPgX3B6BzPDj9BeVnWN7P1Pk5jxnhxaXhygLDAQkzHiAGvSX3puVGeZaP",
  "key6": "5PxdrQMUogx55xfhp5YiMGqBDAdo6pcMPi9nNqm5vLxrPZXF1h3PTcntUPBdCfPafretqKLgpJ9VzuLhfTW2PYtY",
  "key7": "3FwseoXLAxqGtbbnMa3wbyTsLi1XrVHMkzZwKuuLRRFLcs3HnzFmGejdBxVzuNrb7MD9AFv4uWX2YFLWxmt6i26r",
  "key8": "5tqcSjw6rjNnaLmfLQaj3M6kMjPyrubuiKVybYaaHw3f6wVfiMiwPcFMmysPo8CBjg9BNH5Ze6iVduSv4heANtLV",
  "key9": "65dSsA1d1JRuscGXhDbyUPZ6z2KzgwnNStsayKeTbLGF5ToQoDHxYGxGL78ud65NAsRfuaqzF3CY1Y7pTQAp6pwo",
  "key10": "5AjqpALGXEfyUx2nj7H1THgngwDQcFsCmEZdtnxebb8oozLYRZ9sw1YecT1rLRSqMqJELMz95bNxMxFkzUVmgRzB",
  "key11": "4ePPs18gw8ZQJtVisKuY38FKTYsojpfm2gDJndgj69YHpn6WfJxycx7Tp3AeNSr7qxp4iQjiNGcPXBauG8YYWEhm",
  "key12": "3qPxSBvZLkAXN15bP2pYKhLhf8FdW6K2Tig76TrEPq3KKuHVsgywnPnqNvgJYcc8p3WoZoxQpkARQF8PTfCa8GcU",
  "key13": "56deMmZJqmFR3zVGRkJFeAUBXpM7WPKisNp9yj3dNM2LyvdEfjZhRiJPaqftSYMVuvV3SurNqoDQVkr53zazXQ77",
  "key14": "5eZ6Y3Swfmj1aAV5zDA9DCvF1noCjGdXxGBuhNw3cCXWBKW7TtDmGRWtx88WmcwJ5PCmYkZv5BTjL4wwEyBZknpg",
  "key15": "4eDmpiQjBP5N9muTZVgc1JFeL7z2KYs68nKPWjKPP8JuL3dtti14tBPFzhCu5RLAzkKMApYhVwg2F824etLyLrKC",
  "key16": "2gTmGgdLL3Xa9NaGLuFYKXgP6cah7cXVSYDAqSJ3fiG9XYzP8RnXAuDBXnAx2QcJjbKZUDhAqqPsufENC8HWKU9P",
  "key17": "ns4nyHvBchvJGdxegLeXA2mVhFXD49UD6782qjnDb4gBPr73WfCXm5eAJJUbjxJFT4WU7uMrDfBRNoUKi1tCYqB",
  "key18": "2BoQ6j3ZP9RuazZV85299cxiZLv86XbzyGCsTJiEi9abeGvJET914QHwuvqGBoLwJVFZcueToZZ36eS7VZJuTRya",
  "key19": "iTQMZnkYGRZYMNFU5arZkoruWkAJ7mYhBcKd7tkfoFf5e5GqWN9RVh86HDU3Dp5V1S4gWksUg4eLuFVT5thSNws",
  "key20": "99PnDSorvU6Gwa4CPVV1A4mRr5L7SusUcQ9nVHN1LcmeJD5uQviTuq75zxXq4BRgb4HqyqA2iUbrvKDLPjxcQnm",
  "key21": "4sLazyv2AxzeWEDTWyYQW5nxBoqmUa88snsuDkspnY6L4yR8kbgLjFiTv4Rx4vLvGcP3THpgLTBcwkn1bWMVTXeo",
  "key22": "Z6g6616UT8ZwfFgGPyrTPsGBTY2v68T1Jtei7BQohCKQYJNaqbsJCEWdGeGRRaxw6Yg267YRoK6CRJLaXC7FSEP",
  "key23": "3PREUcjhYoTtmfydcw3wdMyEoa7WNmQDiB9ct13orBdBus5xT2pMhEVpnDvKdRLqF7a1tJXhMCUc2z1zZvr9nyKX",
  "key24": "3kUiAahee4HZzQrguX3uNzqS1EoK3xMJr9YvskM5Dvuoq4kbKae4R8zfCsPpR74j7eNpcWECuneWufQvfvxZm1uq",
  "key25": "mG3J2KcDAu1cuxvWrYyE4UCQpQobpdT3t8CR9VGDxUJWQv9mDAot9Vt9ZZvZDjRxXQFNmdW53JzfohP9S4y5yi3",
  "key26": "3TsCdjKSEi4ZNT6UkhWEQB2oTjftVi2jD6g2SksUY6Ku9mtF2dfkc1kSQEkSvTnaqbvKpRiKbBpk9cu4GLcQyzh2",
  "key27": "392EY8hZN1jLqzBhLRiwWFuHpkH7PHDAihBtKiK7tkG6YgHvHYEdxofqNpxj6YPRyhpzoX2njaiR3BD5isCahA6N",
  "key28": "35zgYhLXLwby4eGngqckQrkNQbiYAFF8toL86UYYq8PvP4pGia22BCsQG8PVQQWzVyXK6LDNyZ2vTMiRt2S7uq4T",
  "key29": "2aLYDW2uizY5Z4b8X2pFGpL8rUkZKD9qvtwzgfDMJpMDbvhsANsQAWHHUE9LS2rgKRVDNzehqEUFQ3ZNCD3XpZnr",
  "key30": "3RHMEu6N8nvUE6XrgHiMarPuBDTv8omWZfDs49ZLADWpoJT562znKdAv3Xa8vHTyoF2nqCejSfaSJHrJChTcwazp",
  "key31": "5uEZYLpy3FKaVMakNJhRrBuoBPtSR3xigjKRu8jDZvoJ7nBr4NLCTgr4rG4GGVFpefFAuKyab7Mtx1czWpoQjhKX",
  "key32": "5N7aQgtf2oofLzSjCiEzfg6jh8pWyXzR6m1z8XxbS3ERzv5wxBSUXTpJ5ADcpx4p4rw9i47xdx9UxkF7zVKdrNQK",
  "key33": "5uvEQKT65tHkLf8BTmHMys5bhros4gW14LBTNDjduK8t2MMiB6XnVt3DwMsQn5MvuwEKh4tVxmWZWR6mAYXNmWqi",
  "key34": "5PNDXt3yGHMc83ruDZ8jv2TgYY2g6AF8FASoESYnjpUEEt9iHttPMCokJVkuTjn3HnYxsUWX92d7viPMG6HKkvjg",
  "key35": "4zZM35pkoCqiRPpyke8z3ryhjxcEgNEusjCBBx1vmSxx6v69d61u5HBm1ez1xq4HJjym7L99cdiK4nwgN2K6zV7E",
  "key36": "4vwp15tp7i8qgz5PFGCAoE18QKo2i7VFiasEqT6HKcqrDvD1WinjDtsFUDeD7W36yBkUFYze5BGrCfBpoCvLZAb3",
  "key37": "4uHxeSs6CTXHzRz1zRFxotdxxtUvdA444jETxuSymtrj9Ud4ucKB2ycQCCVnJ1MfMAYuGvL9iAmXAFpaqMwqXXZY",
  "key38": "gHJLdannjge2fg5ZAjpCiFHfmer4QKjxJbAgmZm8jJq2typ5A8MCenZfMt1T9mYuLsNdZYTftR2NnpcEH7d5sVZ",
  "key39": "2iFBqbbEC9Z9n7AKvjw6kyuBcAp2G5AvJStvFze8djhW2SnrhCkXUMAKELtWiMy48bTgSJiTqCHE2t8zPVtafFvW",
  "key40": "57h7gDpNEBiXxWpKzM7GFADF3azxRSYVmWj9iuADqA5qC1HNywjMGnUzZEYW2wEtTcX61HwcfchBZxXdByxzwUNx",
  "key41": "2dCS69beUy9ZnNi9y3wy1KxWLESQdmJDVbYgbQNTcWcTkftwULruY2yuSq4bHB5Teg2Q1fFg8NLeWi1mR6yneRVX",
  "key42": "5WRUH7YpVDcPtKrZgqon6gpufMSrjwmfnwbVUgysQCnT8FABkML6ZCSKUEBdB33zR84LJKvHFNh9ssUFgWYea64U",
  "key43": "5zejojNBmTtDAZYMrCybHeFVL3UJggdSZGdch3xyxdEbMxy3wUpxwjx6nYQv4hdYkbdch2L76GcYXPF5Ck5B29vS",
  "key44": "5XiiREB1A4SmDC4CTk1QcdQAvSZeTPDNQtiC3LnD1g6dQFYMHFYKEquoR9n6vbnr9gjsUy8rLB5b8wouVz8JGdyG",
  "key45": "5Q6jrNjvKTRawkergfh1sowoaxYvxu2H7f2skUmt8R31t2CKgz7rfZJMUUQ11U2P6Qoj1L17wemmmF1jBM4h8z5P",
  "key46": "4cXZshu4Zg6S1UKtVuTiczP3wE9kuZmTFN5sFVS2q6UYC636S5eXTCP4CJEDpMRRdEikydYdMqrUpnx7EkpB9hLK",
  "key47": "y2yvUYbBX3aM8Up5tQ6abKSWued6vU4YdWGwpepTjrDLYcMHLpMuWP8NUVWcGzHXryP9wmerhb94DACTRC5QQse",
  "key48": "5eB6yetvib7AnNa8UT7SSKmRUQUAswzZRnSPNXhBFycF5pNLmzx2myavAaEmdN2H3aAqhoTAHP529XcpdyQxf2wf"
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
