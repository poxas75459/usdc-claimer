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
    "o2vpVJkFs89mtmKhqi9Yb15YTquQdUUerXR9SJGkrp7Qi4Mnsv6AJUjCueWwiPmwXwmk2UvFNtyXU6xtVLsf4p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBW8t3sQE78hTStmyaCSfe8ByqVya6FosvEUdsRQRAvqzRvGYK29yXmELCtHbbXJE7vxUMqgP3uqcoLDhAg9ogT",
  "key1": "4RdUL1VVKVC5w29c8ftS2FbxxrBYRABbHq43cEVcWkf4vx3o7Le9NSyK14PdYvtqtAQLpQUNKwBr7LSzb85dT5Fc",
  "key2": "5fZwkXqmJsY71UrvZ68cHDAqH84ukuDHoqEdL3BSxknrxxjuscpYd7MkYMsBkn9ZwCB7LLRmCZ42Ndum9yferpay",
  "key3": "4Mq54evoFsSwJEbuqNmBRsM2jnYibm1dxwMn4Uxsujd1rmEE1yCnFk9XrJ451wCuwdcENGXY3A3y6RMRb2cvxUn",
  "key4": "2yEAFaHiEFcfMSSA8QjVKWRnQAC8eksNzTfeMQTL9f8Yp5w6mXeaJiT1ZHh6xJKQYDqKxxYruXDPViELfUrcNSmp",
  "key5": "3XUW7Mc8Pt8qoN2oWCu8CBVeGcwdEyxL9A1mYHcaPBksxJ6S67AqkEAzhqKPZeHEaZ4tbMgiVLwVWq4RojMao2Dy",
  "key6": "4mr8eZP61abTNeZESrmXX5TkP3QfnG3qwzs98Jfvn6spcbT6dgUnRUsxqEKT5ANxQYnXr6Kqh2uVUfQQfmvcNYGz",
  "key7": "5tf7jpiTAYT1aLNJ68JUGXzNosJM6yXSBhrbPFiSrNXDg7uDkqQYPaNzuWiND5z6WbdSTgPXpTUbp8qNYN8CszmU",
  "key8": "bZJbiTn8qrq13bovUFbWqyg6RK1jMz6FAT4h7oLuaUJ1FGNNu6nQerXuP1HxRy3HdQWZpKK1qB3v9Rmt8mqX8R7",
  "key9": "2WDXSFouenj2CLSWqq9Bvw3VTyFB88ayBNFTwxdoXAUopH7mU7JgL2Mu4L3mun9ZnNQARz35awCGNCoCqkRYATA9",
  "key10": "3xoiM4P8CuANnDQSGjqGMdpGzEAkcf5DQYiaU7sLGkDieWFyaMfuFBFFooN6q4QEVYmUjebKsmebdVzVkCC6b2hy",
  "key11": "3Rjsr1i7qarrzvarf3MmLnEgEfNmb82XCRX4zoap3pBmpQtaLtv38bzg7RWARj2ZkEedLe3XQDMR4cKq7PPNgj8J",
  "key12": "2FdfNbCbgrGbid19eRC4rSY3Gg79KfDCe5yRNroQxWkJQmbrrcFYnwFz3TFNUL3RHTMPzrsvZhAZuSZ8h9XU61Jb",
  "key13": "5mqxphEFcDRXHy9aLYTm9Ymfq3BxS2ipzSqcAwjRPJSfkWzDzcTuBXcFUKJiu3KwB49iNgSsi3MpmfrhgEBLV2XS",
  "key14": "2pJ6cvygYyZUDrAUG8ZwBhvi6Sni7hYB1v7afGVgDULjYATS4N6hD9vuTmofqqxPHcpDDqtxqKRfXcrV1BAVb4eY",
  "key15": "2hxtaRJMJQ9km8xwk4cJXApbzdtAPppvGkRi28F9UUgHijL8fzqbk4MBi9PbdKd7oGQtDPnBRD9FMFrxezaHJMBD",
  "key16": "2zuV9NJf4SDCSipv2m8dUByXCYcAxUhGcyZ8wAXhJTDh31mVS7YLLnhiiin9YKTAtGeghQ8aTqUkSdLMYhkWYqZM",
  "key17": "3hEYvFrTp7ZPTEvfwdffZnHwnaoNimnc4yCajVgAuD4mUdDrYBi4UWrhT62d5g6sPt7qmhLweemXRDfwRoHW4iR1",
  "key18": "3s431wQL5LSMwWqn33v1tJxt6fT7otY4jgmCyoyyZXaqo6fF92JRSmCC9rEqdRcQ9nhybZbyBEbdmFvtiyt8CUMX",
  "key19": "3aYrw833P48di3Awty6nRFYrHEyQ2GM9uGjmacD4Xtsrgpgks4Fba3Xq6pbwaCLSQ1MuyYhSPgQGqvgz41tG3SxE",
  "key20": "5o28ZEscmkaQsDJyFWLaxAgCE79At2t7yxEU882GTWUX4qvdZZ8Vg3eoXqVexNkqW99j9vEJmdU71rNGa2xDeAaS",
  "key21": "5rMT8Nf29dQmFN877hyWNXw8UZgAAKnXwAzzeczu2o4kfFJDkApcjMdZ7BiGiWv64T5p8riq4VpFasQqNwZtJuv8",
  "key22": "4zo1hcD9DUYnpmVjMaisvybL8sQRufk9rRR16NqVJN2MX6YYzHjBE51NKsF4bmYEVUvMuatL95URy3YPW6NLJuAh",
  "key23": "DpoJ3b4sBoN66tk6iRiVYragyqcnBXSPL8xJQ8crDU8QH9CxRehgTvqQwtDuAm4N84ryL4za4BC2CoLGQpaw3BH",
  "key24": "5umLP9C5m2y7zYuPtEFKLqbK9T3qNsPHiKhwXSHtYc6pADEfPb1Z96eS76jNVJcuf2bcRNMogPVUhQGnauc6ZUNy",
  "key25": "XkN1oHo3XJ8a1YfbfnkpATsiXnfAPCoa2S2dMawjkuRCGRnGhDRehWZUZ3ZQQXdBUaYwhp4B56XEpiTjxMq3dD7",
  "key26": "2juw6qcy6RCTPvWF47ShZwPejLtDY8PuFhVSSqkswZRhvAHtPR9r9mkG1pUowjtkC5Bd6ZaGDXPUfBs2YZJGXjvA",
  "key27": "58tRxKaKsaEFeYzgNRUcbXodZJHEGKQFgVvikT77aB8CQLPL5B4LYbhbppdb5GgHpqmwxov3VCnmdw5KeGgYg5Nt",
  "key28": "3Ew56WJLMT3DkjrRx7N5pNuvKt3cDEMXnz9Tamk2nPJShjfrJdsWYDwFcH4hzXcS32UNzatNxPQdoiqYWccFb5Ds",
  "key29": "2g6Yp9je9PXyahTzZmwVW7cpHCsgbUa3MzGKHuvh9hi2GiTMkbKpbxPfMKYEhkLmrw3WpiPmATs7RWBmXeYS6z8D",
  "key30": "64uxYjBVCzPbSqpqEZyDt4zC1af2PdwrHFFucfyNmkZ27Npqh4z7RPd111M8pGsyNdx3CWKKBV17Lsz4fSiAMx6D",
  "key31": "eaomrZDANoZ16mBghEPFuiQmPVF3vPMu5sVeCvh2ugnYzcRnpXWgVGMMoYENgBmuYJ22L8VC3Sgkf2fudvPwoxX",
  "key32": "3xdqyJTjcVhdXwQZ5qszwERhtBxByUY46PbTxG3bzdUa26nKsb8y5UoabszTXTi4bvewKwp7Lg5HAn3yKsRNBtKF",
  "key33": "4tdvC4XxkmnEMkmcddhTWJR7oxa5XeV2qUNtsjtfPUpZXtoJHxg8gKrSvTYk41rxYDd4ZXWSN3jfu54bJzfxwBEK",
  "key34": "4nc61uRHkx1MCBkCmk2H2yvNGse6NhG1PeLoRnq5Ex7YUzwrsrTCAsyUewQCEeHBRg7QogvsVkxEtV9X3qT1915V",
  "key35": "5nq3zdpPjwnYyh4T2rvAHRPbj2BEUzTV7Rjy45Ljz3tF8kiwsf6AoaVZpEcwupYH2BSQ3NmfmZn7jotfQBeYLPu5",
  "key36": "3emtBACCcfP9nNN5zeM6nNzYLTCkckJQEi5fMyZe12nuXJaTNRjnG8jkiSGcH7fQAiG3Rnrbhitrtx7faryhS1j6",
  "key37": "4gMsRk1xLDnog3bAJm3kBpFYXhaqZwooqfhR9RyRUpDCkLwttgz2F7gjJ9cd8i1rdDJYixJym2SfgfjAAqK2izZ5",
  "key38": "uq7zoaKq9yJh3BkJp4eh4wsS1WrgUggEKCT7AEhkedjXh7GxbsrrmqgDY5zK2yG4Sq2czyBiFYfcksmSkGmcH8X"
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
