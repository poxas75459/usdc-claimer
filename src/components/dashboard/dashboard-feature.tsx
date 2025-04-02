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
    "EmonVkG3rShYdf15UUbYDF1psJ2TFCeBTA4D2vf6hsLkvaZV7X77kseUR9tgNDuJp3eCpvnGHZMTie5Tzt8Lcat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RQHWbTbV22B7LWra6KfpGnoxgqiVKFFJ1KsJvnFjr2n8c7p435bSPpqQyds5acjeQXYTNSP3pwnJEVxdGLmvXUd",
  "key1": "2EfTgA1thKsJMjHQ1GxtE275AvBE3YSSbJXKXFeQ4poKE3TTWNhsCg9ySkdQfKs3DnRzM4LnLiJ1Mhg3aJNAoreQ",
  "key2": "2bTVBk1vFv1V9LL7WahT4Xdwq5q5XfXoGXXBfv5w5JehCcQa943k97ui1hxrbCfKpLrNq8166gnnNhtgtWFJ9oP5",
  "key3": "4GM5A6wNFGPZxfUYKL3Xpw1CXkxLmFT1vQNCGd7QWcTMg2vR4ccFribJrSyLsppP9L8aTWJUfpLGn9dopPbV1TYX",
  "key4": "Ksy7fiYHNgk9pRbjHj282ZEFFdtY5WtqjY9fdxdRELqPPrDTPehYm2jvvkFyeymBCGGycxtxmKVQQY5Mv7nzAc7",
  "key5": "HZ5U1yyhWcQt12xAW6Bj6QfidKpDfdgFYEPTkqKShWDHat2aeEnfLR1H9gvTWRfVUuUsFqxHzxgCpDm9GfSpdEq",
  "key6": "ed3e8TZmKuWGmN3YQW9Cx1mxbL8t2EkcrUaiQLmNkNoVX8zLAXS5LLXBm3Zq9iBytkokK7bSwSzsVzNkaxU828e",
  "key7": "3Euu7jYMsBCc7zi1pAzL8KzeixGXZpDkSZuqbmq4v67CNBvq2gWMHbWk9AuRhnidfTYiqBqJGBiEWiVoYtc5oab6",
  "key8": "2HRF8i8eqWURWZKsCSmM34pdmfNBTKmwru9N3h7KpnSeT5veMEXZ7XABC86f8me2MFXmfVdD1KDqUcEeLxktFiit",
  "key9": "2zVsPsKvxas9Bg2g34kcsqZH9rUeZ5KPSoCDcTdXd9My9aj2qDcMWBEgWJS3qH6jUEroi8dajRuCsM31dpqAGoam",
  "key10": "3zqhvJds1u2kudbVmRExcegyzfnKXEqYdbezkQqJ5WCQhRQzdTCvXJfRMTdtvrAPe5j5ZAxFohSmYru9rM9QT4hz",
  "key11": "LEuk5V1sFyRE8u8AAhDDesoSE3aABw1gacbpxreS6fdqdtnSCeVx1yivMASvoxC7mkCis6AZastgk4mm8yX5s8z",
  "key12": "5jPtahzf8MfjS3p7xQjVogYGPYXkmjWaAnSj1UTD5TgpG466n51zcmSsjSr1t2F9d3quE5GZTEXQPxUXAweYBALi",
  "key13": "7wGQ4ZtDdtTwH39z2ko1WyAYAfTHv9ZM4s13MsChsVwxqtfcGbCEQbdmsJxUngsiYPKdpjxGMj9omQHqt4f7guu",
  "key14": "5bguAnPVrEsLYH8eVZh8CaKQdfShqAqJdgeNJG14BzeCKZxD3ADrdaqkxENLAAdC5TWex8mgKHdEUuTe3CFvgQzT",
  "key15": "3nSgc1mVtGQTX648wen7uzbJHkG1gXEZbACzULF9vN53uQBaK2SgLx8uCdDpEgHjtfgzhbQDxstYN3zRzdjfxyun",
  "key16": "3j1aEgDt88czfZv9e2pebFcRxbJD52JMrAsvbPzKAHCjfsytitZb1gEr39DXh3ojAojCgiugsYg2cTYJkXCczuKv",
  "key17": "631L37Y9K7hZa3kiwpVkpmMYGhUvvdhAxgMzuh1WWwycrpjaDE5hsDgN7fJ753aHFWkj4KdUyVbmYxVCyPR4rx7J",
  "key18": "tJbaP8pNHU1vCWMAa4HSfVKozbN2NmuaZSFzibppW4pQ14vNoEVBwpy6Gew8ErNwDjuQY3R2HJtWQFRtixg9vkK",
  "key19": "4PX5fFj5uxftJtDK5QwCcRA2KEwGdqe6NptjhEqPV9eBtUvpf3vJndhpTB7syfoq4qnTfbVQQLAsAB1vKzRzN5rr",
  "key20": "4AHfdsH8oYyZXk4UHTp6pPrawuxuEbSCJGt9za3k449enHxweZugrTuCevuKT11nnTAvV9XLjcEop3eH1yVovZmN",
  "key21": "4uhsRyGNrrSY4ieNwkQmS1syXgqFHTzv7EykaVZJjdkB5BaWCu49gJYWe1mM17gfeAYSKk5BQddbJJxmw36aDz9",
  "key22": "AUpPVSZyib37BBVYpdiebnsfMfpmAMjEza57itFTWUahb3qnLof1sZYDhjtU3486XrUvCF5EnfTTctiA81eCz7o",
  "key23": "5uFw48nQ6Jh6e9REriTmvNDBFnjjyfYY1BZtf1Rf3ZCziq3UqmMczjnB7vq2tQdv2jpBZywCFbsdK7FZ2RkpNzso",
  "key24": "2h3zHVgeJGvuaTi7jjJWxwbzFFn2mcLYDc41awQ4RhrAL8BcbVMAurjpX6geSvoNcBf9uNJESR2TRnxLtvrwNCHs",
  "key25": "3CHGikXrwPbexT9ztsdy9gpvWTjNsijaFY5VjZm2xgP7BwbVtunBTGubHX3X34v8aVw2HwRy6ytoJGtWjmqu5JpA",
  "key26": "3Ed73C8U7FZU247CqjKPzzpXBan8Zrz7N44hvoLxBtamyjZHoqcB8Qx8wNJhKTpUy6SEm3b4GSoKdGTFL4TBFsMS",
  "key27": "3QSjNhBryasgmMNLDmHQam275D3ufcwbxv8gJReY3GEhAumubKA2p2p4fBdbnpM9wgmv49vduwgLxAnyJFhRCpmy",
  "key28": "4L4J3yRKo4yjvWNBqTeWo11MGpyHq7m6Wvn4K1xXJwWXsx1NqeW4REvw4mpy5gfvXEbqmKZ3UkapYWg66Vdth8Z6",
  "key29": "fSJTJDTbiKXk1PiRfAaCTr67uAuJAbyTTX5NnrWMKjemwSTMWzCAA5X75JwexCUuvVGF7FHv3brXjRDoJG25Usy",
  "key30": "2QwV7VenB8ttNwQ8KjxgamtWtKn9VTCuURuBpAxjSeaYcV4DVvK8Pqh6qcqKpJaaoFuQXLtft9RS74F4afrE5tdY",
  "key31": "2bN9ueYUp4qrCYWpRo1UDGDvNa5Ta7ycwJ9La9eczgHnFyRC7JFJQeEGhfaoeHi5AUN5CERn89WdvMbbNXzqwmM4",
  "key32": "4XeXJZxFNJqpdpKQXiskhHySbjNSkx65DirzRLBVfXyNp8Gy72uqBVQ5eaevUTqc3Se9K1DgGxSoLdg25ERUXWJR",
  "key33": "26VWeTSXDc2RpLmFqe3PEfYMw8AhySnxxuZNFwfFz4Ui36C9asXqQkx87uPCHPPJADkwWpBuQdAMVhqSK59GRaAV",
  "key34": "5S2q1Ds6wv9g8vCRi2e8CYEcy2bjBLS2KNovaYNCzuhRKpbYcHgJeJ6Ki6Ns5JJc5o3oQyDsNYa9C7poJEYatoks",
  "key35": "2gqARL2P7KdQwFJ56AwzMZ4gWpGZsjfjk5hXPDYuALhstpkJmy7UPo59BujU4wsc5Sf3QJQSc2KLDMpV6cZ71Eci",
  "key36": "EQNs5EPeKaEvzNH6KYuAdhQnKLGx4amRf9hYPwdbgh2TyeGHnDLimwrbJDKsfV9z6PijUxL7uUv1az5pLFKbg7U",
  "key37": "3PcAPpHfxMWTiPYjndz7qpCULnZYpyXGoJAdyMp6PYRYaq2xDW774xnDhP8y4Gx3TjNdMpRvPJyFXHdh9qJcMKEq"
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
