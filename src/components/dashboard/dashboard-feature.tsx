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
    "55wHoTw48SYByaezhQRoefVc6sdXj6qSdbNC5HgybtSff7LNu7JbuQeA2fADa68pwbqGV8iZqfHvevUhAKJ3gBGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ciGn6BnSWmGpRJ2qpd3G7nmypAnrmyeeL8h6Z1uri2tJQYcK2ipMnPa3XHskQmd9RM27uhvigm4DJY4aJuCBWpG",
  "key1": "33C8Uar4eFm4SkBFCyUBHrg64p1baFtZ4EAWn1TUmnUEsEHnrApBXXMrjJBPSguwWuBxQv2dxYiiQWWDMb6n7McM",
  "key2": "5PSHKqGuUXprKe2vqh2RZeaoaKofJTTxgV1BfGFozxSVaBFMoiyzgPpt3vRacQ2LNzW7Cw3tM1cGva4eWKKh7dRL",
  "key3": "3sRsVPkm8UTMg3prARQPmpKHXRwwYW5CpgFqbx4pHHfnfzApzSoTQEQKz8bfTyjuH77LsxYic29zHcoBZXJ4UajW",
  "key4": "Y7Pg8pzb8NrTE2vxQPQxcLt1XGJG5rQXdexUdFcMdrQA52pTyxF5v9qptKFpmrwpFAmKmDVPZysY3ePM1PmYyot",
  "key5": "2kdv2zTJcTUySkiWvKnzktDEtCALxqoXSM82PvYcMHyKz9Wh4RfLcpCkQx3qdh9KjNYGF8m1jQG1obVg3QWPeMSG",
  "key6": "3441j9JBxffZF6UgQiA2ZnCRzZ4ieNueC97eLVpa1LhgR1z1XAvoDgNduhczZHpWab6o6RHvwaHzhL4c4wC2Wf9L",
  "key7": "22uzjGucCrg31BvaftJkqn3rxFAjvM9YybXFoMbsyCc1ANn7fQybMGxJjfPjczMun9qj4hbNUaBjXr6QQM3HVf1M",
  "key8": "2Jpxp9m9qXP4uz3F8YGrcbHePJMv7fZGsbSi2QFPYpTNq4jTJv2EbpSwb6w2QH8ddcTmJHTDpnMvcYP6wrPYzM25",
  "key9": "gG921vmTGWtXioHJoyAj1FEX1mHrZFmCtUDP9ZKuAvmg5G2r86BTR9zJhtTkiajEPAjZYD1SMRi7THgqLU8LmKn",
  "key10": "3cC9Qmviz6LJCTz8VNkncz4NjKqJq8Uxy6Dynq9MRDjTatwN2UQsGwnBn93566UMZcjY812JxA32E8vd7v5diAeS",
  "key11": "37ssyJD6sQWkARKxzKqbhgu3fd7VJH3socNn9f2CJXHDYZQZS1Lt16CMwXw6o24wfUvg95rQUXtHHSNRhgBsY2ix",
  "key12": "39zYNiCDaDoFiL6cQ64J5CdUcrR32QYp9zR168ZjL6bY8DZsVw4X31oEvUoTABXgLd6HAp7n41WfvAuHUYHdpuUj",
  "key13": "2GB6Wd6xTrChJ9qKZfkCqWbEVd7LAtSVdxnJzyJ2DVSSrsf31xU53G1qLczv2DQtEW9SctBEirHuftsuqRef3bXj",
  "key14": "jHcppScoTVGgSXjewgA6U7PcLVFhfHGGt5zsJrhU3HR3WpXTLtwCLK7mg4MxHrWkdkv7TBsgMBZTxbmb5b3LrTA",
  "key15": "5B66p4D1V7YKx85rc4zQRXL2JKtznc81JyuJmLN6N8WK56uRAp2K8ARQu4gjdwYQqikfaJFovjFnPyLJK4T8XNmW",
  "key16": "4RRK4xYkmY1F8P676smHpDTGF18sPAAP9ecYs9T7KDDi6X8xVCdvcLQ8zH9EwJmnXmw35bJ6SJiD121Hzbt1Ztth",
  "key17": "4pjrMvcpkyBs1sa8DxGgwESn1zeEJ9z6xoWsmAFrVtPTqtHtAgD9rpg1AV5VhxALAXGPhrtws1jbzAxUmQPh4hpf",
  "key18": "494LqtuNwrpab6WGMP8azhWEyeAWo8JFU4g2QiYFz7hX7pD5F89MiQrURDrM8cdHUZrraiDAps6oKiDhH5JYudbW",
  "key19": "5dgYyZiuwE11MSq3nr3aU9JRs4hPcEAMf4CRqLi8LyaWc8hWGC38o3CkukDR8UUn6tcwiBzLpbB31K9mUU7BpvFm",
  "key20": "275Mc1Ju3j8QrscAFt7EewVDn4Aq7dXkKyhA2BWgLnXDBxZAjjpx3N6Zw4fwcG9hq2jogUvodmrvnKYZ5yuLP8KH",
  "key21": "2kgBFJvaqW3MNVz4NqaRPK5KDQZEpikeiLNPmBef5c1AQmgojCdtEoC9RuzzijQ8htWwtwFtSQ1QuJNxKs3VKDBJ",
  "key22": "2Erpxnpuid242HAo2Qz8xwmi3APSNjTaNZu9s4HKfA8qHzpYZ4MFiXD9Vvm9TpURYb3NTs2RkFp6x7nEs8BHWCNx",
  "key23": "b5Hg1jsPCLdqWiqeNmcYvoHZU9gAZ3k7fU8LrUPiXAnugCnRa5xJfkx7JgXT7drFKTM8zkJhAa5a8GNoz32f8iL",
  "key24": "4iWKz9zP32axanuCyGgjhdbzAaqFNprrRWPP7zHapRMqBjiRaRcaBwHBy3XUQfxqSZWBkw1f4AWQZkuXAAjup2wa",
  "key25": "2wd7uixaPxrx4YKuaA9FVjYwAFW5ZvqW4YsrPsDiDT2NzP29TrRtgACEL9hGWMn6AJh3AiDr93CYPcKpLaAkLqZ9",
  "key26": "2pTod6quCaRsLUf9TdDL5ZoPQjz3npuTMvFSiR3Jjt9wZb2nbEiqKrgqW3zBA8KyVc2ujatoLZUbQrcDd2dyi7Mo",
  "key27": "2QqHc4PiwkVVLzXMMQQes7bTgbFMNswwHPH4EscsdEXh2uCCyFVGYVrjCfXqrJU6fwoZQSEvX1okFwCTuFuadu1r",
  "key28": "64H1mXdBsATmrKZFm5UBKjBgQbNfUzSNik9K6NRLA1zt9ajJmqq4xs4QQnTUrRNWykrJCJbJdje1dAcqhgJe3rcv",
  "key29": "2u75R7rkLFK1pJGAeSgss78LiGTd9vhBaV2kLiCAFm8uDEQhcuTP6jSt8641oTge9uUzvg8NHHVD5B2EDkc9X376",
  "key30": "2KPRQ4p8YsdsqVs8W3NvpLe7VWngyL9v5KJwFmqUDm3yYvDDcrGjXKhZybz7FQfgWhoKVhwnDwA69LQpkdsnKweA",
  "key31": "4Zjf4v2qiw7eZxMCqUxom8VuWxn3SgAiwiKRm6GKbxVoWAbHSuQiC6sdaRZrcSmLVxAEu6yPbybU5sX8Ye1VWLVx",
  "key32": "4rPBFwACKnCPAqbfs3SrKfPbutTqt15iEFMdCcmwuaHCz89XszyTfamYdeTX3iBpcW4gxREzJmrovzMVaL7kncj3",
  "key33": "2yybEAk1YUPnBmgdhT26hvQauTu1SpkzUGWqVb1iQKkXCYu1mwtqnj6f52wLp9eX2QsVmnBMiW52KqrFZfYqRVrA",
  "key34": "3VyaWtJSDtGu75kQwdGA5EXmtN5Pf4AL5mBC59mKY9cbtzQvcbBpEuLtoczBAMSe2cRMHJxqZVVZEvYaDdJTBYKH",
  "key35": "QX4SfMpnaHkuBFBNpFLjBzzLjmA3kc65gBAKNPxfiST8JgAsN8EizJsrxmvvBLrdGRP1APGitGxQNByn5aCPa8X",
  "key36": "2JCP6r8ikUDiuqkV4bnsrcksT3EGcAg6vm1XvZMDPpFvdFEQja7K3Brf2K2GjuXCqQfaT451h9D88QfKHEjjvNk1",
  "key37": "4X6zkpRXwCe8z75zBDsHEg9q9DDc5a7T757n83k586tTYaFBarTMadLU6EHFYQcCb2yTnzRfQwXA1rqnNhumhH6G",
  "key38": "4TJfmDALhYhkzp4VUWnwPDTCrEX4LXPHBHvygT94MKVavf6nFeEBgqohR18AJHaqBHygJcGbqGxs3FFxiWjBiCSD",
  "key39": "5xsPXvZhgXMiZB9YurAKj7ytSZGP5HV3bjPJBLoQG6eJgxAr8kVnNEvQ1VScGHu5KJ9qUBqZr7rXTUfJn2gU2TXr",
  "key40": "3Ypesi8SXnF29evwB6UnqP3hiAhQkRkan9jAVZhBb8oDMpru7QbdiZarxHHb37tA4LdKFZN55EWRcAxHuz63N6Qx",
  "key41": "4jz81k4hsYzAANnX6XSVoPGZGrMsEv2gFXABUjCHhmmszuKvzfsjb734rHnFranKEm1aP7aDRZUHiHUGMvQXKNNi",
  "key42": "DZQv1qrgB8U9hyBtYssMcWd5J1d2ypwp4ciFc16JFiTu7ypyDoHMa3b19jiAvLjqPteWdTdYPbwBiEwDLfumg6G",
  "key43": "2HEhSb5B1gy1P1Aex5Uf5SXbCogPDsAmujpome21yuZ4oN3ze9MhWe95vCjjgzHBTH1rf4cunNTRezMNCNM6iCKk",
  "key44": "xPfrfdHz6Dud6h41qyCHDnw3LyqWmEEm9G6bVV965uR9nUKZgEnQQwnstPvoEeYwZT7HYbeGyYDzadPcbPocNK5",
  "key45": "5jpasSZTNFLfpQoZJVZjV4w2JXn6WNDHx1AzHKsovJK1D4Td8f54qk1Nqb8rjkHGHno86jWzv8RNHdLgTQdajnxQ",
  "key46": "3rp5Mwoy3tqFUHaZurYmpsVo2yEdCfZonSq3W9hoECsvkjh7U8d8y9aRcQHtQZjwYez1DEpfRzeevEtMDs9vtUU3",
  "key47": "BayiisbL2otRwnUSn8Rgz7Am9juL7PgKLTLPepc5wQKpJHbRjfzQ9F3PP2X2UuBtSc5iZ7tkDpZQNFQQpokneUd",
  "key48": "514FqPAFYRyrpZekBi4AWP781BqX9dJCsguy9gFsfP2uynmketKrj6iRqkNcJtv27EcZTn5r4H6BqBvWXQ46jbY3"
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
