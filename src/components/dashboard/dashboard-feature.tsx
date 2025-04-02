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
    "234g781zmD67heFH8o5zGVCmDNpGRdj9o8zbNHYJBfyJunYH6JZ23JffpQyQoJq9kfyn12f4Qh5uYgRseCcuQEzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UeaFpfGk1eKbiWwndAUPx8mMzXtmBebxgaV9QJBK2RNuFvWyxiqUBmTDkCfZXZpsWQQmvdALDiCvqhziw6pdQzN",
  "key1": "4CepBsHgUgDPaYQXZe1ddPZaRcrgEkuih7WRjp4b2p3NyYE78BPaKV7JqGGvMy2KBTMr3tHoxfDLR8uqFxwzq9Fc",
  "key2": "3mMqoN8zuUorfgLqSWQfsMHskfnhtNMQicKvokrDAQefiu1dm5TnwgUufRKPF1F4yFK96vpk3XfwfHMERxccLkuy",
  "key3": "YPku7kX6o7G3NKr3Dq3tMRy4dBWoNy7LuSsd1D6NJ3jThZgJniPr26VuGu69DkufxGT4goEjupGZrL2rW7iX5ho",
  "key4": "2Z6sXGdpLAb9Jb4DB1LoGr7H1Mc4eNyaGGqpwnvAk8Ga9naYkFU4DWbzfCC4zj9uiyXJfjCty94DQCtbggszNjA8",
  "key5": "FxWx6gR41NF7P9mXSNtfgUZB63hgRpFBUR3LSKKGbEoD2qVBPCFLgi5aCZAzvg3KvA1rJ1ewjpVes3RztKpX8Po",
  "key6": "EAjCTAvxfypCxeN9JYU2YSEcn82sx9zuNbZJ1LVLFbuCuWzyDxvMXNHG4BKbeMRJqSQ2fMtvNrfDVcH2S4ykNjR",
  "key7": "3MFTAdLDbD7vXejYCe5vrbtyCxRMtdPKaoiaX8xj6drzgWpQvfC9U5wHWXXpVacM5HHAj9TVt6uHxiaVnzGuWdus",
  "key8": "2uSMuaCiRX2hY7xGYYZNA37SRrAiKPr6QwHi8MoZszLq4sYaV1EqVeBezNwh5kznUaUV61YkdcPBBiHQ7H29Mdnv",
  "key9": "95Aeg514DmStwXbfqX2H7KggitoXC9Hp4Nzpv94fZsDEK4TKGqTdcN9PzZs4rCQ76UhDFtZ9nC75TaXzgqKB6ab",
  "key10": "4tmBK857LxtARBoiu5cibki3ordj9d5N3YvrzYwcQYX2yS6zcVeRh68XaK9b3kcxQ6JN2vUzsvpP4bpbcqvrX22P",
  "key11": "268qhhfVcuSzHVSQv1Ff3emWDPN7BtvEW1pYSvkfVGv5H5iadWkV8odSqBUvKBrzv6JV8QL6tPyG7pYpEwRWdhbq",
  "key12": "5s5MMT38CqB5y3MzGVzRiou84h33y9bPEcA3Y3oWfhsb7htuDbLYD2rtGJWZNTAdU5TgnxWweNC9NZDm8sNtqb7F",
  "key13": "3keJj6wBLyHfBjdknQKpmmHbo8wMgoDeDe2zqcH57oVetxYsU3mbZiEWkrce4ZKqKyBVexPqkYn6UhTUPtAsdTC",
  "key14": "4ajQxSA3Xtp7NJw6uG275cgy6gih2BtA3YL8XrXqte7cXjXkc4jkLZB8eyPApK4kUwWWTBWiZvWE87aUyYJnWssW",
  "key15": "4EfED4MCSnrFivb7f9TJ1ApvuVHuLmQQeWhYb4ii51vEmFtLR1GRFUmX4Gd9obqDtq1VgzMqb48NQHvqpvt9JiqG",
  "key16": "2RJMxYzA2CiEenNH7YcZ55ABzyZfiXXFqszt5J69t3ZFJAFFZ9tMNeCLek2vCHn2Erc5nF3GXB2ddUSTKv27HkQB",
  "key17": "4pRapNaWpCJtZeYai74w8M71rVxuKJRy4EgYCa1fQQWv6GfUk2rv2gpvjKVnwHJ2gySDqAEfgGgTiKQMJwKLgeJA",
  "key18": "39qrWThNoqjqQrBUFkvpR3g1jWfNhAzhXbdvCg3hH1zKmePGdheRpMZYxFCg1cK4BWBdXCjzgD29yu6xXzc2KYyw",
  "key19": "256ci3VKB1NsxhUhTYLyiq85rhyK79SVrdHkdB6v3AuegfjCXVPLzYsq2AaEWPm2N9sXAQTJobsY6XrdPvqXBzuF",
  "key20": "2esbBDk4hzK4wqxp4twUa66AQKFAJw7Xke2uwfFANAH28xHYY1esuquSDBiifzbeKErhzB9eoSNmoodbzVd6qpka",
  "key21": "kMNt96CeDPhtHs9XfRyseEsLztiNBowf95pfStBA5pbjjJMR41RvSJErTpXtKyZgq1Qapr7etudHwHAWPQKNBQb",
  "key22": "2yVv6pWwhPSuV6XAnGvMdTLiFaKT5hLQUBtAdsuKh8AEqR9iNoELU4uQEQSTA6bDiAe8bJfRsHTy1uugyxt8Xvra",
  "key23": "xz68zffjSv7tcZAoxccHieed83wu4kokmQJsb2kUikuD3ySKKMMZeAWgV5LRFYhcR8WyswTypgsvJWAamSpP7Hd",
  "key24": "4TmEZXfAWjbgfLhJ4vV7wP1gmFRNP1AD7ZHCap1GM9GMrJvuRrvB9rojvf1MwHXQ8igVbN9EydFXstkDVSJtRZ47",
  "key25": "3fWsvuZLz1LsF8owHomYFGDxKhqTJbQGTYkinumQQvQRuQBVvR2dmDoaxz7k6SjDRnb4UNjhkj5bT9y8E1L6fv3P",
  "key26": "3WSN7hX1HaenrQL8jJurTNJvS7QaRRko5pmXcRmCvZZzfYu3TyAV78VfXp89HfvhxQPnDP2jioRA3dkjKNuJAgET",
  "key27": "k7QNouZGiS8LnM9wSVtJ2ERKKrm83LXHccZ5YU4EnED952k9cdeMLcR9jX7Qy4ZqkiWPi2AfShALE6HSDn6Yyhp",
  "key28": "5ezpA3CSSfMB9LpXC7sg8xrgtJDcxjPj8DCabnrhv3cjccNnMYrv2bhpU2Js4N5K7XXwiAPwu6W6Evk334FiWsj5",
  "key29": "2rFpC8Sf7AT5jxHZCvdmtQAc1Qptsxd3qqYh5igzUmgCx9j4WwkffTMT4w3V2g47WSo4Q8YysDRqzczys2sPx5gA",
  "key30": "3ACvkSBGFMfHN12mXNmH5Mk2nMxexsjTS2WP2HvwcNUUrvvk9EWuCM44eVRL1EEWB4pcF34R1bSkojKYha4k2HhS",
  "key31": "4ZV6GX6GaiyZENtJ8KLpoYmf4uohMeCvw1iFtfw6gfPnmRg7qWeNNSvpv9XqhYittbKvDqQxTfE9cjSFLz39Knzj",
  "key32": "3beJMQF6RmnK1PAN6NSm7pfSAXXey93GgdyRLQk3vqJ79HvAP8K9fhgZkvERwgxdxaGEXrbCm1w7AvshDpv1dkYx",
  "key33": "2a3wE3GWNxeof7SquHEqbc8xEQCkyEhuYJfYsmJzfJqPswX4sTsYf1FWDvNZQnFMKwqaqgVRce6Px9cQhCbaCPTd",
  "key34": "2Czpu71Dda3cHSmWLjjy8z3oe11PyMTtDdM7akE4mXGwSNmsfL7wjF5e1HEYnB3NwNC1EWxT1WFiKeub8b9VrANT",
  "key35": "4tft8VxzwkM1xTwct5vAcLbr75jPcPJ5AVACDpaurYmy4FfXgm65sj5jDgjJV2egLXa3J11NKgMWjyqYkx92Xwbi",
  "key36": "5UeQ7NM5Kp1yNDhnNC5rrGHQTznZkAApvkpv2twWgsLhSQHpwaHUMdz9bBMYSDZFqSbCREL72RXuJ6NewsXoS6Hj"
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
