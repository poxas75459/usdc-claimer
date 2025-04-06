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
    "5u2R4ytaZC9iU5uUCuhNcZQHXL5nNxo9cSeu3zKjzxnvx8tUyZxNift7L24aPou4osZMU8gnXYLWGkyd87p1VPzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tBe36NXd4K1qxZVSLKYTFEp6wAGfFoDzfM7HV9aRvyxuV5kJtKmMkqt7fmja6iY7vTnPdjxwoESquLrccUoJj3n",
  "key1": "DnEd17C9MWhtduLuzmC9FN2xKMoPgztuBZH6Df8jsH3wPiRZmZpy3WWSjK9iu2k3VpFyuYecc9j5yeBxCGwpLtn",
  "key2": "2ZeArvrRr6avkzjjYLnWe1aCCVs6m28KCwnReE1s8pEaJVK7sQ5oLTpLuVv6LKXbL3an4yX2YyQxBx3Ghq3KBcTi",
  "key3": "XebMswDnRYXXYgaAEjh3SjbLHSPStckvCwtVHGHmerYVR99iSEyF1PHPQbXa3MWSDakdZdn2phDQmTqQ6XWAERQ",
  "key4": "5QyHwJjb5G6MYMEwCBJ3i5YAx3zSBx5vxtYmuWNSw4KeSBWES5MXS2fsbEaydnWVmf7WKrCfZjnEgUGaDNzDGd57",
  "key5": "UjYntauQB51GLfZVBUhpA72jsGaToRpqoH25tfPF3teHAvK8xfqLrHYFNPyFoTBYo22qpz2WXFqsenHQJfiftjR",
  "key6": "49f7AjPv8Gjuy6onVtYuEugX7fjjhTc6D6zgNzCxZJhroEXYZuwYNtmRoWF4GtsDxgt49kbFo8PFG3ELWb38FW6c",
  "key7": "frPZkc1kYmQd197dviTnvAwodgr9WX56dLUoDjDKvoejZpBrtXWnc2Cx591mvVpABBNDzPFM4xtrXkFYCdnAzfs",
  "key8": "3dq7QANDozDLNv3qLJYPdGoct4Wrn3cuCr91B86ReurCc3Q3vmZpBatNtb88FarpQAytzwLnZ8cD1yWC76G1DBtQ",
  "key9": "ikrqrZvgd5FTdWKD72pyGAnqxxPLcJBZ6WwvdiJwbfWZWEnZPHQhSusGTmDZrX6AtRNxGLD415VuHG1RkuDFJQh",
  "key10": "32bxHCVu38JvAQN4G1DGVghjoQS94L5bHxpx9Uawo4yJvtupk9NVa9HXS2JM3pcY8pn2aNSXBeR1MpwtTyt7bjEN",
  "key11": "3AAnKPPahiNXJvyT6vY8VNpLm5HnHRvdANYGRr9xK27KLkiqAqjJXno44jVQUho7nCYZhF8bmweVB7W5cwWorvji",
  "key12": "2BxBpFGW2GAmdayiscD64tTKDL4MsVdXFYMzB2q9XrNiMEYUnY8TQs4vK6c3MJnY5ueSs1jufmnLV31opFoiZ86G",
  "key13": "3r6du5DcDZ4WLVpqiuWGKAhQ7vKDhbKWzyiyzTgxZQTFoBLM1CasHmqAdvarS61bQBhAbqnD9Wxm4wz6ySRxXTFz",
  "key14": "VexMF6C2Bmx3eaMHBy5NrbpJoYSESKCyfAqcuGZkTFL3PpWRvkoF5XnXrW9QUbMMkyCuTV9P8gWDvmKP5enRTup",
  "key15": "3qCV56qZ57BYZYJKXFm17TQR97fo8f9Aj3qwiUMqCRob4hNYwvDyAsAdECaajw2eHTXn7BfSQdEHqb6fsqjt6zhP",
  "key16": "3cgk7LWLUYjwPm9KJrxeTnswG3uQbvotF7gDU1x5mdManfkWy6GQQErDYKkVUQVAqHcY2Szc8FkoWEDKyGmphM89",
  "key17": "3ktUXRyvpg6dG2tWqmGMrBSaUKPMC3PzUF9qvf53QwRQ76S9vkZPQJX1XHCD85JQpDFLEVLX65jCfAYywdbLypQS",
  "key18": "63dr2C9VH1r2kJvoYvEWSSfzhWgR9x9y6P3jZkHsCNa4rJk1hFfFhY4PJfCWwRQ6SbTfWmAYK9aUgCTGHVjkLTQo",
  "key19": "3oCQrXpUzn65ko3QFPFVeQ6unLtjDqMZqYteF9oBuXgy2gEtrqCXhdpUkA7bpa6ejTo1DY8F6KrkhisYe5XEwQZf",
  "key20": "4GCtKzhyAFVBvnmsH1QYFrWNmqpcSyynJjqbGNVzBaVcGsoNh2siVTjmq86MUnjBPmCUJXNvWofoEXQjgUZEHhJA",
  "key21": "2XzedvWr8RZUMHkWsVyfnRYPAk7xLjnNeEJtdBGuzwkr1UfUKkoUbnASwMBc7hfEwMZMGe63KEgTx1H2GDsz7xm4",
  "key22": "3d68VfsGh4i267BVyBvC23Py1xaBa1TzJmKh2SjSny9fpnecbogNNHhpHvjp8HXMNkF2QzMN1dQu8nFBw3yz2oDG",
  "key23": "5oCvxCh3EWrWDRTB2Te9FCwExog5eYdcHEnUydZ9dfxawyHb33e7o1pZEa5sz6DM7sqi9VXu9BgPUN9Er6yAgrwX",
  "key24": "2gpV6Hn3VDqTNWQXWhWn9eaFVZhi8kinmNSye5dmGWSpejpnVPW87SFjxHtSXoCwo72D1rkkcSg9V7xGvd3sMQrT",
  "key25": "3mvdF3f6EaW5KU5oSdZ2beBUew83Vxk15XGKnWSkyZRM148fXLHDKjY8q4qTAQKj9ENCsjNZucqRjYJK8Brw4X9v",
  "key26": "5S9LJ1CMQgkRmauVA3SbbqbCx6LTn8MyvEnvmb1boW5DAytWYX7LvciLwLg9SVVpHrgxyBFZoLY5T9F5bPVku1Gz",
  "key27": "2Cqbs8WvvuMMgm4UoAMQK8fqSVaG5jgGYSJUTEHipcnRcipFvtSaCoKX9LnSLUetZGJS4Q6s1K6Aft5sPPbkm7PQ",
  "key28": "LujNov7v4GNJy2hedYfANX3CaYjkCkQjHGLuYd15op2i18vuf4TJQbzNLgu23JKakvXWtaVk5bUdtutXpRoRfJX",
  "key29": "5M6uNNdUF1oSedYwwApjsNR6ry7juDjZfsnZMUU31K22jkzz31Jvrpch54zACkS6KtmxHw5sCgCf2mhsfP2YWh7n",
  "key30": "2RVWt8aqMtjE2wKXCSUCHvLXSTMkAHJbUai9zH6v7GutaZeddMx97AQ2CYEdpLn71EQ44Y3HapcQHq9KsoqGRrtT",
  "key31": "58LkxaeAgTqCmd46HiHmQFQh7wiXBmLo7notEhUF7bAL8NjQdyqPxtRkh115CqynvZiU9zpLf5ntj9srEyKxbxbF",
  "key32": "2xk6Zyj1zchFL497cSstVWR7XEgc1Af68kmUynV3ghzgnGPJzBeGRADUA7E7suMQfrwpxzYfW7ZFiLtXRCd8Ldp7",
  "key33": "5LnxWZZfbefo4WDjsDySeZYPhxS2JBHd7vg4BcVCE3BdBFyR55i5jkGejCLVeacsYixy4426CaDE6buPepyYXTDP",
  "key34": "3dGSSDUHwMKCghYuYX3oZqC4pCPLkG7mCuLh9CjJBqBU8tVofjp5DjXLeqRTdqMrwvF7WRMCYBHa3SSrER8yUyVV",
  "key35": "5bcBvBYE37iESSSeigxUxvarSm6GvQjW9SXuVSooZQ4uiTvXPtKvwS6zHToofnrSgpsBujTh2zJWem2vxjUktnxv"
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
