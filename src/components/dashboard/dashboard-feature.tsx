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
    "31PdrV3XmkMKSSBUg6ciXDggQmKcKJcZWYnmC7gAgzhcC5pnb6Pd4tJTHF5U95PXVNdZvn5Mo92fizqjBUXCKJfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shMMoYpmdjyPK5BbFMtHXsg3LjipwhHezBWtqNYMFZ7XdiU6dJEuetSMsK6byaUwXBCJBb1QNYgpZmHadKJEsF1",
  "key1": "5HqZJK8zRvs1XJZzXSm4pN4Mzy854yEJkUHkoeq99FF4BdaeyQTMKATc5Eex9oVDLQLNTwWpNw1A9jqZ5Cbzca7F",
  "key2": "5EXhnnMCfcP9PwoQ1C6JXGig3GnzxZLiwwd5ioDsNScHuEnj8cmzVMeFGvSmt3mhQahtt1RDL7sP1e1nAUWUri47",
  "key3": "MATjFUpZcddX4EF5Vgj6YJ3bNDbURB7uGFL7QHNUX5SY7tYZdarcQfC4jMgP168E2oozwGi85sMtRGSqQjnjtHs",
  "key4": "4MKk2gaHhasBKmu6eeaLKoZaStziDoghPenSaiqLYGy6vmLSjxcVmJ6gASNgUvGhXXvJcvkBmrxWd1AGxoFhVJw7",
  "key5": "4TAMrLBF12eWQTiMiJdo5zXqeRzb4ZsNSDCN73sW367yRJdMfqsvyJKBguXiBUssYSyhWovTnUcShxU6NZP418e5",
  "key6": "56RhSp5TepGAJrB1gg7A6CfgqJ452zboGRErCfaR9dstNcoWvsTq3A8GazaLfBm1URXjk8wYxm5sRChNG1JbxK1L",
  "key7": "48j2zoW9h4F2F52TKLDTChr9o958Bi4JEcdKFae84TSP3WSeDVzMPGL58ZSSva8t9DXyDSG9VTJt73ChCtPfZeuc",
  "key8": "5QucK6ZGkvLWAuXHTNfFCXY2wHT1RUUQ4h4cqHdNtw1D7DLmgnPMvZMUvJRHDWVSK78iE7qk1YCrHkTcyA2rjdaK",
  "key9": "3NB7yreiPUUf5NQJF8EJiqQHHfskDx9ojURDWFHYnXKZDgLiFnHnqcBsx4s8TNGZxh6cDTx96TeBN9AEUzEb8mby",
  "key10": "5HJrSJS5qg22qG51psCUYnwE3D3ht36SYiAoPEB48mdLMWSnZFtqWZhZMf3XMwFhyqfCyLYUZ2UKZDnzuS9pfD5K",
  "key11": "3HY3Qm1q29DBkvVhQWgDsy4u8mawP8WsWTxLe22N6eoBtR9d3JUsw9jkBfdEDVWbhAQwTgLqZwpREQcaPc6j4ez",
  "key12": "X8jwfun3kaKQ5yhi1BLHX5xw65WXwNh171rADZcUZD4iTkTmZpp8FUNZB4sNX6nURT4dzishfY88tgiyCn6TCCW",
  "key13": "uG3gUVpuBs4AcsReTrggYTfeYTuuTsqkFQEFzST8nyxMpTDBdtEo1sJTnZzNU4MisUkCU6TqCfdLgarfUA1cn4K",
  "key14": "wDWReh7f1vzbejXzWYdxvGvYxKeBz4Pr4g8BuCU1XuAt8SoZjxRZsiamngFLV8fSEhFEgsQ2M6qTZqMx4rHrVNp",
  "key15": "uu69HADqeZgfc992fZJKCxYoEziMoG7T2PsbtJoHoWeVKqQpUQZrVTSNjgGy8orgebKkGmuDrjLkTJ1CjP6HRXn",
  "key16": "5415YGhLHsvLMNwaTACqkHxnnnmQ5r2Xm7zCZFxaimJhX7wrYCmT295JtphLMAXnkmqAdh2vGkEoyv1nfANm8o2a",
  "key17": "4oR9PDdRt1hVkwqJQJ4Xdox97LNkSmbfNCVyBrrq43ZrdN4G7q2g9RTYveQD3hsv6ERdp2PuSiky6HgYbD91qbus",
  "key18": "3VYKFsRRzigcXJuZZ8e49Z7WXKCWWcxfU17gBqS5Mx7hJz5nvqKXrCq5ndZjQhJzkKAidi85X8T9RPcgCnt5AY6g",
  "key19": "26BehbSPwG8T1YweF1iUFQxpGkoknzzzzo4urKuQxaQP888G1vNfi3Rjk5jbyi4WvNbFiVjGprKmMg2NSrWJZJHY",
  "key20": "jRPKLW84anjEKu2b3r17rJUBJqwFmB6qTaT8TN6ifdVmpYPYHtgHwSSh6UFqF5Ze14xbJ58QtqquKfR8xxNefL9",
  "key21": "3mDhxSDYbGcXTCgU7jdVfoXVGjAoSVTXQNz7f5MAjvPaHZeuBSb1Gj3fZmAGXiRvZMZ3oRd4K46gL3i8MbZYmhPo",
  "key22": "5YYFa7cdRfU9ta6G8RbeEdienEeVz3wYYsg52PYKaTPoeZQi5Czh8WigEk33mBrCh7uYp7SnAJ3tHXPQvghAk1tT",
  "key23": "5omjkAUv4pQrQo5btgqkSqH96vPPZFQDjGJjnyPHcnqezyJ2nPtaEkitrKdc28jPRiZqKQzc7pkc95rzS6LoSFZD",
  "key24": "SH3oyTCzVmCXS71ax9ijYV4oLHaAXBwRSjAj8KqgHgXyjWNdBq8vErLouZLeX6RhBjcXWCBA4b93cuR4kYAE7Y7",
  "key25": "5JQMreRaXNCgcAfw76g71X53HpxJTGZN3aYFojS6QM1SvyJu6eRCUkhE9nG9gfqqesLXFkExg11PxZkYN1JWcco3",
  "key26": "2DZFbtktrLwwC449GWBjSRzzUdRNMHfu4byWQAmAEDmXH8aMebwbzd9cuPfqHECXUcBxDHWgfJkKbNCp6C7W7oyd",
  "key27": "8irdBCaatD8foWKM6xFMcT9FyTVug4SAVtGEbCjrcHgyGSFEE7utXTfwb31G5WoMrdqtaZrvxiexqutscY5N1RF",
  "key28": "5VJwMcR1AgcW2fpbL7UsmmVLaCp6jxdSHYs8j2MDKQJFRaK7RuDCYKHjoZtNFdD6q6LEXVj3oRAz3HDmCf9NPLAC",
  "key29": "2qxZk3Vdz2fhtVpkocgzAk9PGzTJMrzvCipCoW4PLcb1FoLnwgkVfPAeDi3MqrsJ7tjoBp1MSGzZjPxhZ27SQ5eo",
  "key30": "xzycPVLXoFWrrVX5cNQjRtjsMvUT6XenBt4dMv4qUz6MmWnct1qKQDDEUJmWVM6VMsBBAFZMQBmsrLMwUtqQnFY",
  "key31": "3sudTsN8iGB4Grq9be1txXCDzCs9rpGcZ1xtRgkPRrPnfP5HGyxduJzwMTiHcgRaurzneEETNchCZErwoFPjSQr8",
  "key32": "3UWV65zeosZgRP2ChC9SoY67VQxA6WW9AuaW2jTJG9mVb9d6SSdBZathDLWoSHRokuqgNMwbLTpjoZKej8wQXpdX",
  "key33": "KfCU6Xx7DLC2BPtLafjjk7kFwdbBqLEPmnXRWYe9AJ8eZYXMVDXESqKHNkysz71o9VnwoekQEQ1t3N3ZQnoqTE6",
  "key34": "5zLMrxaWYwJct4wEQcTXBaAaDrfPyT6Dd6cBsVwd2iUS9jsK15a9NhrpJjHfTEARz3PoZRX7JzWJrkAKw721kj9k",
  "key35": "4m47crBJEtZcNjPc2N98QixJfvBbdjdYMxp1U7yvMUHaPuWK2fXnpGqTRUpKyRVpsKtWDEpFgsm4VXQLS1pYaAV2",
  "key36": "2fNSAcDjoWN4cTBUFB84bSCFFEPamtVbUYAJrCB6SwKrLjQU5TSod42xJdoVDUikze9qgx9bqgbVdKgmPssqTMZS",
  "key37": "36VJZkxnVieS9jGX2G4C1PieASNWGjZCQJKcd95i73ZWu9j2DfhWCNYBr3uMAVnV787TY18HBVnnZFjHoYehLHhL",
  "key38": "5CLmisw2SqDY2rEZLjXVo5WiBaGm2sseFJgnVi17QwyiHo31G84mSzhtcdD4kjtpJmHW4L98b1CGr9yCd5hs4izL",
  "key39": "2r7k1DoHffxkGdESjccSng88aTPUqKxhVCpKvMJxswRBxoCZFVTu5hJzo5jBJm1zbazQme54RMDaNj4rGBDMuLYo"
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
