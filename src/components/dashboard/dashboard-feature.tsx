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
    "g9D4i2fW2nekmna6xiMKb7B7PLATpWZMr1dzUD5SG2CfQZmTvt7VBex5dJxQzGzoFEg3KSLE9WdBmpwSjyfWBhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dwf4ouXBMynmSRtMuV48kVVJFkC9XNGZxw6k7hKgC2zM49DQQ1kJ8asuFKEreYV2Wfcz3jgg9ByukVdp1CHjgWw",
  "key1": "VVgGooPUy6DvoS9obQPLhS4CHG9YmCzDKd7LmRapZoJb9bpvhRPdXNUCWqBGHexCE7estcrPX2sX8ZHad4ukNEH",
  "key2": "47Rgd35xnJLp4H1JjGJyp67KwcyoN5AqMxZ9kUypnZxXfR72XESHiHWsSn18n9jnAU8XVnw9dAuessyn7xi182ci",
  "key3": "3UgNNbS7kC76JgVkWvx4P95EjFvnVFTuyGxrcemR1Eeykf1Qoxj7qwZJdZi7A5o2C9JkUvnxd2w7UQE3dBC7epwQ",
  "key4": "4HmtxsAzDNCYcTUv3iqTZ7eQXEcsCCTKYbKMjDJUrXtdNuhsAGu7wfbsVaeYtgzv6PxmZBNRUew5Zj9eMy1CJA81",
  "key5": "2fSH4UydN5NdrZioujSnd8jmuVN7RRERdfDZwsTuMESkcd3dB2v44VYbeai56SYjB43nWh1qBZg9c9oYVUVB8x9K",
  "key6": "27bHzn9Rb6Qtvxh9A19du8gfkjmV8bHHKb9LxY777e4tsSucdtdp3CCj9VaDmB5Tt3SQdYFrtF8VfpNcx7PckbpB",
  "key7": "5aRZkDvZQmqa8823nTsdMmwJDgo1bvKygbkCV3QVxgX963Raa83xUZMSFGt4H2gktXJqxPR5fJoLjzmChrPr4FCz",
  "key8": "2jA6FrCaf985rdF2nZkgA4n98iQTVh3zy5piu25AsPQmaSt5JoqdtZxS9ScWwrknRvMMuZkRMwQ1xdCcgqdLn5pJ",
  "key9": "64dHFQgTQnyoSmFjSEv5XAhGjNb7XueToySr7ehoXqKVGnzgvFyUV5SXFNhVmyim7bR31Uk1otcF3KgmgQe4W54W",
  "key10": "MsAsjJQtkwVfAYR8mnxHUamm7BsmvenV7DFjoc8vREsum6P8tPXb1gzzAiKyCv75E3nXFM2G4KW6yganTMntVN5",
  "key11": "3oJPq9VukDb2wKdZictTswUFyhpdN5Dbh72Dzy4TGiRyejXmg2L5XV4REQPtE6MLDoHcBQra4GFStnG6TdvJLv5w",
  "key12": "4Hb1ZdcGq4G1Qxv43Phn2RWwgppCztYbWMRkFPpHKkwWW33aubKXXky4b4MkojuFHcBZHXdjLzwCDpK1375BqXXW",
  "key13": "3NHXv68485wCt34w2F6eiPRg5vsxVErhV5jP1m8pj5dreXJP1aHiJrG6jVfaXCgq21FTbLMxVphyrjYwAV1hTaqk",
  "key14": "XLkvaLM9xB8bzFkkSie7pH9JFEgzeCX5oqQ12dQy2oiR9cxURNyAoNRnQKpfxTQasMzSZyt5BUbWQxLJn1Nv1sf",
  "key15": "25vztYhrLsMy8AviF8gP2cEWsmcKy4L9Hw23aWumzgjMhAmfMCPK3mJda9i6F2vesoo1BagHrqvr4AVNhf3N3o54",
  "key16": "FrHZzMKjWZS2ENpaStY8vYxtBRzjRoyLvVgkG7s78gXwL4gNLbsg2ZSeesHGfh3VhTHLWkE2SB6f8Jt6M54sehF",
  "key17": "VA2t56bctr2xPVJsFPm45bWM1tzaNGTy22UfKxd3CvH5WduSZrMzy2oUhkvu1E1XXLtr6TB56DZDz7DJC8gCFZX",
  "key18": "2y2pxWG5Zmo4gH77bVy8BtxvDVWBVdf7ViLEzQ1L8nqwWLDTAkVxHW6W9fpmQz2NppNtUTra6yhQN5oQeYMq2hQn",
  "key19": "2nLdcezcPmPoHJGiQoaRrazV1kGxdzGtsMnvJiSgcw5dpZ6zDqAbkcpqJfLgCbLv6vraWbTbDqrWUFXBkix97yTh",
  "key20": "V4y2kf6M7VM5BmNbGDG7DRXJmjNje38Tabz1mTeKcBYKtU33At9V7xdYREY2KeNT11K3f9Kq1NgfT3cWchHm2Zj",
  "key21": "53DcFtxA22Wz6o2zVjdvVNZZLFQziYaSnKLyLyXoEjYQNoBti5HnQXZM2qUfgDjFovqrxhFreoBWisKd7JKf8URK",
  "key22": "5E1YwQSs2BuzB9ussKPMJA5FEnWDVWX8EboNdt6pzan8ttM4wpnGbU2qucsMftZtVo9jWcaBcPC5ux4e9UcBVvg6",
  "key23": "5fzX3Cxe6qnnQvX6MWspcDeMpxMfrYWcQKoyPyiQhoGMstoMj4PGm2agj6dwDUpWrFPL1V3MRrZ5tWGoFfm98A1K",
  "key24": "dFbJXxDzcc49XunBLcCPEg6PjYNjzucmRmq6DarUvXZGZytq7DJfaX7ru4khbcF9f6ikmi2mpoeUsAALvN6kD9M",
  "key25": "4k7CGW4Vi8JAQxQ1HUnnfybwEys17AC5CR7u2TfCL81rCx1EjD2sa5TbPhgmHmkXSvcTYVo3tsqoPoC3ZtNwM911",
  "key26": "4aERhK4msXnCTyRxPmtso6EvpZ3s82DbZqQWFVnEd2eAVMfUbLCGiyP2fbi6L9gUU7MndJMeASgcJMkkpY27HwUk",
  "key27": "5NCyhTzo4w8XEWSGF8Jexk3eu7MCgg9SjDRxCeKhWxo8Er11J3Cr5KPRHdsGR36JLTq5tru6E9pC6TyKWjYg1bsN",
  "key28": "4QpDYP6FZA71ZjW9HcC88aQzkjCYSWT16viYpbNGXfrxt6C8tvA9ZT1y7xXHQFWVMp6JERXXQPKHpQQy7MhGmNdx",
  "key29": "qPvjsC3vkPD7Ko3hfuYvnghoGprMZ8gqrHhWVwoedRzBbJcqR85JpZ9gBrkATfYEa1c1Af9n1g1sV45QtvDSS6j",
  "key30": "3Ti2TJXu9u3WA55mDsWK3dbRax6Vy4gKTKDRK9r1U6wUVuYY5dzgZeXHcfykMcPt5QUgWEtiK1Wk7DW7Q7APMHyU",
  "key31": "2aGHZQyVYe1Np2nD4Gy3zAE7xt3KkZHMZqzgNLtjFkP9c6HJNCktdJkQ4bamaj6apyArVXg9yjW2jQkLDGQbf8tQ",
  "key32": "3o9EaQpTBKJ9xtGvVkNF3voWUseUYMJFheJZGvMmKQec4uRH47xoCy42HV9A2HXPXDqbTypKLZSPsvpSCG12MPYL",
  "key33": "EusCjaYUQk5niZmbX817WLkqdQAYQT86iWsi9jHBc4tkUcMj6aU4fZ1H6z9XMBhB93proVHzSSrNNAD6YuyoQVP",
  "key34": "2oZ9BVy9z3q4Di3sWQ58V2aYDjMQwmf6juPKtoNfW3asQ8aWYEUJVP8MH1VPKStEex5ysG6v4oNaqukYXYgFsx5B",
  "key35": "4nG33JJ4LfDQbARxSz9yZCsNvBaCDfDfkKLvkAdxx9CiJeP4nBag3DGjUB7veYUuEePibP1MQbb2tWcPdsj3fPdw",
  "key36": "4VZFXooRhQzavuNxzz8LkAKC2XZHG4dqhY4Sf8u7A8fMw9AmEwZMSyxBqWPQW9PrTYrnSxSV3iiPxCUNFQeJc5dA",
  "key37": "4enVcnwxPuqrVmVbUqrxxdRyXmp25jYxBgZ6jqyj2G9iQoziaFG8Q1hDfK4HABDLoHKJNFZb1KrCtQvrG8aGFL9T",
  "key38": "4J5qvT1huit41S1iVRvHj3x5mvFb6ADAMZHy1KAPrdGueq5GKAJHkp2UnXFwhbh6jridikovqMRBhYQMV5xP9dba",
  "key39": "33od2YiTNFqyspkXLHkygnMmfibSSRYYg7gWcFeJeXUK4DhYKemHZ8UosEUzPXt2vTwcnwS2A27ezLmzEEaQryJb",
  "key40": "3nuKNh1XYUGGEHS4medtAM6bEDZjekxJdSw5VRDVhCo2dG69aR4umbkTeoUYr87F8XuWFer5y1Z6nFNPFB1q3Gco",
  "key41": "5gKkzh7M3iWJxAFQuSpV4seNkwenPEcPtQnLvBtaXFBEk9AYhCJXeVyRgf9r5d28Z4524FDArULvyve4gFrXwng4",
  "key42": "3yXjRADqsZqmK8Pcy7oDcVd5Kg3tKC4eGPaKaPz2QcMz18U4dqjwZyts8AuUj8uEzXPvMCJMyQdupvNnAzkkmm4w",
  "key43": "Poh7FSDC5NvfFheturAWHiCBGpwWWPgxHwdzBuGpFug24dEJhpPoSnhTmvc3N7ai6C5AAj6fbiMr6fMn1rbPP3o",
  "key44": "4eL7fPXGWXBSiZDMECfKh7YEwzatH78HZWF1NMtXnkwYbWCLFxayP96Ufg8op2tfGEMcCqVmGA7mnKwXQ7iXnefx",
  "key45": "5x42UbjsFnBjcYKDXqVF7k17to43nbAZhEfwdEWj7bKfM7vV6pdvXQcv1zGKWJ9nyn6eDTd9WzDkpLeXLFhUL4e4",
  "key46": "PLjauHHL9fHtSrs9Z87iajTTdhL4wt7KAb84jd31VwqwBVNBAhdAUvQ38Ubw6hmCDZLqp2Jg9CPyJ8x1EWyL7oL",
  "key47": "2w7oC41k5m48Q1pKaKqfrEusDpzeVAXQ3qJpoDSF8ykNGbH81eEHMNnpuwhYrkySq1zuCeCnq5vGW5HCvEig8nSM",
  "key48": "2okWq34bU7stP1BSGoPsuW5kA9HAd8cWMdD5hKRpVqndFSbGvXG9QdxZG1SKN5iXJNuYXZJNx8qUH4QYPrfiCHhe",
  "key49": "22uRvW7uD7XTpzJTp1biG9S5d8SfJFdYsFvJ3eJvRJQKs8JMs1yY9JknnmWmN8qKeqmVfBkZiH21CxPCaida7vAK"
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
