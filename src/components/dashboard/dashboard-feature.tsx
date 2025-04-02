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
    "3c4Ykb4syBJcnUTgwXYWCf4uxk2BbXraHucAgHmFchtt73Bi1kM4R9zEkLGj1aJNbD8nnzyfYS68m84iHmiMhkMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rfg4WVZg1uAXyUUcJcQktbxeFF9Xnrexq3GPyHTzuQSPdPFby2UdBftbtZGpYRz2gmGkPqeNDT5qywvRETAxKM2",
  "key1": "5a59HtW3iCXySeAKhaGs78h7mjN7icYAAswxGzsKp7aRsHHEURxZzPfwhCHUNs1ud4DSsQL6PmsWtgQHjzUNUm8g",
  "key2": "58jyF3YKPXu7odfeVBowBATGGPb4ygJaGqexoeHGjnDC4mEvX4HqYwgiCb7PNRpxJU5D6yQThnXA3AiWxZS13hRv",
  "key3": "3U821WSF2ywXzh3VMWAsFCeEesSx2SPybnmKaYKfwPxTsoVqUSHFKugKQ6i9H2A4LepqgAB1nTLBW8r267mNmXNr",
  "key4": "3LcXBPvStLvBxWPYTMavVm6Bj2wexAqQ4taCNJvzW2h5HYbFDUM6WWWzMa9tW4pUQZeXLrp7J9ttPtX2VGQ8nESZ",
  "key5": "3xvdWHZ5W7Kq3SrqKmFEJceWCmzZiK6UezqrdV3q8afQJdh9GkKur1wDGWzDqwUA5DhRwTmRHP7i5gFxazJvJJDg",
  "key6": "xGm7LF5ZLNkPFgi6LfCKmrE9DFTmtLDkaEWZvPPbKU3iRiANqchTyehhTKBGcgboBBwcT2jKY1iJjwCgJqGgkeS",
  "key7": "385zpgPA6KyNyVyeKz4hbp4uvf9WL3aj1Tj9UQ6KF8p6KXTf6UbNpfWFy77ZMTmyLiUyGqxSywzAXHXsCvPVnhmH",
  "key8": "5YmXj4MH17CzPWbtZhGyGRpEqcB44LMXhpS2CGgjPUFyjURcpfgQkEprJrSGEKZy3dheZ9nvnhr2ADngybo9mv2r",
  "key9": "4uaXhm3LgdCsysTvVcZijRbEMw2KH7LTchk58pV5M5fAdgX18t4sm1xsWB72kYHPmPE7eWTRL9imRSmZV1NKCSe4",
  "key10": "2KYqD4abU5nem4hptikLjJUG5BPrJrw85E98JuCweoDNHv7s41FyF8cwJcjqrjHNRKQaQKqcRozEnTu51yTTNaG6",
  "key11": "2Mn9JWjgeYY1wwmuWoQXPgGAFTTbgza5B7mgkxYZepx2V3rCnGYqbMyCUYGNY5LMunH5Z3mdFJYUVfzDo4BVMvoi",
  "key12": "PNChfYfzfgaSZwvNtbRHMgXxuYz7cmfEz6azG47oQjDyBrS581XgUPxM3afuexdRTNPeHpnZvDLEtNPj7tkTum5",
  "key13": "2JALeduKcnKz89Jts767ZjHY1TjXypXKTQfXhAo7wEH7d2rPxSzXz7M1eGjmncmQmfgsK8HVHYczp2hayAxDKuvQ",
  "key14": "63h5puPtmJZHa2wni2LbRAbuibVbuYud5nb5EYQj2vcFsXj4973d6bvn3oVdsR2Fz9sHnfrxwDAVzrKdkdBxSaKp",
  "key15": "3mQ2rDnCw5FoJP24JQXJX9DgYguD4KjjaffHTYoRk7TLKuNHTJ1V1KeiVyPaz6tcg2SX1JC96mEgfWkKPBtB3GA",
  "key16": "4LSZuX3dVyZEGsqGfC7pNqw6xrr7ehAdBTXvBZfS3RHaBeHh2kc6GqjXzYYVBDNGfnxRFwevDEcYicfYaNUVv2ev",
  "key17": "5C8AxHU9VWGvwi6J5VkMPSVBLLUi4cYe4Sh3DSNqdSA6VrR1NH7f4mpVNGJKNp3sxstj9RLAriFpmfcEYizHgSLR",
  "key18": "3RjzDYZ2SLh9nUwn4HswyaBZB5K85u3QT72m8MNkC5PFd9BYNWbC8vKkdRsBkCrj65naS7AaTZvvW76XgxYxGA5T",
  "key19": "xdGCjU3Afo8HHEpBfqEY7czvLFXoVzaFLbqomHYmYvu9Ks36vAXvSRdcp84GWY1tCRkXDT3r6qBdXuWsWAq7czY",
  "key20": "4NAXvP9DsdXwRZFMMJ5DvWfhQ2aFq3YzBEmUmCLhMpGf9ZSAQwET3Srv9XhJspJuRafgWqaazFfyGLXNqJF9xbLa",
  "key21": "2ePEgsei2BSUK6iNaProZDUMinxnqXm9aFAPiQAYCXQ7L3m7iSgg5oYteZ8EYyTN4xo52GLb2dLzEAnmveNxHoxC",
  "key22": "2y27m6sbXsd4j5ofJTF2Snh34qF8SoQpNtnS8tKgsra2HG4BnejwyXkEw43hHeoqhgaZHbkRpgYnb8nAnzJfynkR",
  "key23": "z5Zrj9koZtRfHnbqzjKjGMD4PT7dLPEK5S7QraGWvQoFzcjSHugL5aUxMcGYUxyrBGLJCkQMBWXvdGVBn3NuWt1",
  "key24": "41YgLYPVEowSYgKqdGmTHjhUMNKGZkVjUoxVqvCEeeuCwHgDWYwcoPni4aYr8BNvc7DLbzeD375rFWTk2BhtT2Cq",
  "key25": "2dRgJDkfHPcqfudMMQQ5b7jyiZEPCjTE6at5HrEE9aXae6LXCfFRCqBkrbGoWZqcYTwQy1wGRc56wXxPgUMNe33V",
  "key26": "5iG3FVL4ZqgDJfVTnEf4wpkLoqv3t9Z6VECi17MphC2KkcV5dpmfQUy114JdXWaYXsP6NHGsgs8xrEagmjSSEiV",
  "key27": "g2WFAbiyc3Gopvsv6JbzWVnKRUihNDBKja8DjSCMqCYgewiwwftgnxeoTQWhfpYpZjEea14hHeUvLdoYaGZ3y5e",
  "key28": "3Qy4eUDLtUrh1iBDsaqCFB467Lp67eDWD2aiMU9LfkGkD9AKvhTUeFKJb8eXBJc4TyarQ1hDPQ8W3AFrL5s7yJex",
  "key29": "4pqFdzWpFkYWxnXobd4nUUMj6J38zne77rNNZqr8F7KBnFDo28DkNSYHb9JAfDSh6HNHuXrgK9QKBgTjabcXvvEM",
  "key30": "3RvTXwy1kmVLF1hwR54Gv9hJ4FgAr3cNBBPdsMDkD17oyTTgEjEgJeA4zNwNbR5YFEoRLMoLPGev1wQyfAeHsv2F",
  "key31": "iGxgWRHZUEnJBsL271RPbTiCayNdRfvJ6W7oRzTGxxK4XkG1AzBJEmbk3m4aQz2eHZx8C7qcqNxNq7xbriRe9SL",
  "key32": "rN2iXRf5vqH5aKgEiE4KYeis4dHopiE9wTctoxVSt53F6LQUBrVPDyX1sU1ngBzQ7MEpqewYnTDAz4jDeajw43q",
  "key33": "3MKwNEFx5iA3AtGRr4gdsxPTEHnFRzVCqY4NMd7TCT6MAG8E1Hktk4eZt9Hiwm65Fxdc1Xz6Ha14wf8PS9t2uupX",
  "key34": "5uLXqrYHswPRCmjvsSBe8C7jU1ne1WxSTNSTQ6FtAgPZ4BytUoMHuwb8A2EYx9Eax2z3UT2wS4y7CaU959GWLhaD",
  "key35": "2L2oPbNjGPmpFbxKGq3Vw8RyPnRqXKVvMKWFdg6Z7v1K5aexy2QmKDLWMxFouEsGq5VF4yFnGTRmRSE4BqjWxsHp",
  "key36": "MPXGMpXwgKCviV3WK8v5ecGqTGMTm6CidXEh6UZFugyKpTyJhYFTMWatrDwBcYR3nJdTqK5emxkRhurv6GggBCn",
  "key37": "j5xmjkSruSurXwnFbV7ZDVazkGHS2jkovGguV1pWyfDeydcGSBPLkDrZCPuuFNUCtR9HWMBXL5g5BHoBu16hTJf",
  "key38": "55ebEvLLo2JMqNxHS3ahA4Kkqesox3nc6MsFoXZ7DVy4Mk1wKrQh8X42FB6rRTA7q8F1eMQNz4ZJuGLUNb7VUBG8",
  "key39": "36MTApDWaVquChSy4eeUYV29wi142GUzJxxknD67tiowS68h7nCNi5pAR3gaB27zn1BrxhRYHpq9inqq3q4YjAMu",
  "key40": "3B6h33vShy6g11V3ekWAhH3DAVySCLXzQjF7Qpb3eBxnc8BVRsdbQ1eb7gHNNzub6GgqLwsXxBTioDdrXxRkG2s6",
  "key41": "3pbLAMvKbS5DDN7Wj96AN2euy8C7h8etYiq7mz627vxG6yuFcqeEKxw5NX1cCxopmHt7SXqVrptV6QzGwaZegMcB",
  "key42": "2zwgLDrh6AgLt69n83nLaqMCEv5w6X3oLzqjrdKXB8L4egzefReXiuwbsGkn9iTZwBks7yEFLXGhK7CpL5sUnqvG"
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
