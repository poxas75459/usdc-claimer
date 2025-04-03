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
    "4armTu899p1k1xccifM63KtoZhGUp5PzBY3ndyirnefTgTVx3ZcJrHm3UV86ZrfWMNZtn47u3k4FfVNKhaA2LY3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7g4CaJ6MH5MerKQDWJjQdENi8PjXo5Zm5gnQKzwgs3b3CJ2HEqu32crVoUz9F3DbmVwgr3sfsgH7V56KDVFioq",
  "key1": "3Vy5jwGqFrGR8d8F26R38VWUvf9TG7SCQUfbjT1hfzUpspkjHK846VvSpGx2rRSiqmaXZC2AjsEruSYD1SyqrPAg",
  "key2": "4xhUacjSehEYkTRiCq28pBmrwaNQ6qM6qW3J2NTrXHTTo6qyMnAfNSi9kuY4ckipoortPzuyik5kisWrMhtFkiMg",
  "key3": "26gbrnKMDDMeLg7z2BBC1WBDnDfG6HdpNQJdSR9foKsZTaEVWPbH4XRUj56VmdbGe1SNuP1wyX2AghCc6fS38caf",
  "key4": "NiHWXMnjoCXpQc8UiLWKzmfy2FydXmtwPAj8HdUp8xTahQGDmzdmFnNyRu9wwsfvLQAsSVENNcKVTaaMHtLVumt",
  "key5": "29Ca91UVtPsbKZ2ryQP5qUdFX86QkNHyMFBvVz66DMnrb3ThhPyeUPq9CoPXtTikf1LBdWd32RRZasMHGUcRxd2p",
  "key6": "5xXaNBhzdcSxFAhL6SSmFpWTBsZKwiwrbobCE7SxAEkadNnnu97STaohd3ujTybmGhUTg13i5PqckwVRBLLpugek",
  "key7": "f2jTFEVzycZC4YEEZ7r55vqRGvc9nQ8MSu8S12JWL372J1mqRoUkhVrVPUL4y496kzonWZxny9anmj98pJFgcxM",
  "key8": "3S2R61vWhCs24gwtmwL6FLTHffKKZsorBsbEzTQ6EkogouPgAYfDcCuSY4bnYnH16GmcQPsdApBjFJcAs67mwCbG",
  "key9": "Aj6x7mLa9Ttpo7URdLJ3975xFBZyyM4pseot9VGgN5ha3RtHUdyG9wgTadzRuuArkou7AzQokTRek6AVNhfykUQ",
  "key10": "5RGzriPNnaGzo8e2bLc4RniXma3QF6j4FJMZD3iPUH8r18QMKxEWnXNpcj64qCvKtKca6uMJQaAr8rYrgSzSnyha",
  "key11": "2FV7Bbr7rtMkzhofJHTxw5Qp5dfJARJHjKfNiDQX1CcUzFdbbartw7W1HyXMrBZBgXYgfrWZU4f2fJ7Qy8wom7Xq",
  "key12": "3DxEBWuFbgbXgWhmnwRBEsndgydMTxJ3vRV3CUuqGHEzBKU4Crn9KGAWFNYf4eQgY4vjcxUKfMimVb39Guqjtv8M",
  "key13": "2zTwGk8rgTACEQXxXndjViT1Dg8Q51Te9V56vzNoDpWWkfyhzgV9ZuVs2nTmGLtKGMZTiia9USbpRToFix1heAFF",
  "key14": "58d56DJAGF2fi7NhGu16BYie23fpUTGBaiqPHLF9KJhaniUQNqnnSBWTktbwumn1YXaPtiLDkoVi1Fy4HU67YtXL",
  "key15": "5Gz1tE44NNQQpUeKWqe1CAFH2h8zQzqP5jenHk6nuukbyFPrqqTPHidCkjNEjfnNncrGfHGDk9m2i3ejnuYxdrx6",
  "key16": "3da9jPoXFPZR2iqFYYoAV8YNtRRzzV1UpD2dRGYE6VYfmjLs4EsfvLBfJRMJBJWWnmdTJFPECpkJJ6R49e4UFHYj",
  "key17": "2RxgEnsUn822aFET9EDsvfMQT7KJikRPL5XRDQCepP3f9K5j2gFtrKKmXBtYXa3g2Bzv1bJi1BpTEHBs2k2YwQRK",
  "key18": "3madbzE1L9N94LDMVH4TiwdWuUmQgagyLiCGaccwfZYKkX7RRk2PUzbtS6KPZi5SFSH2FXA9BchA5gxzraGaAZyZ",
  "key19": "59Mwni1Q5s9S83NNwKnBWzViWW5oa2GkKWJzJU76dyRZ5siZxWQizQmQLha1eidgvvBy3jaCQM7Mg842wDFoh1bR",
  "key20": "4GoxVE9Y9odshkoaCmntWKZrEnyDoFE9bb1tzJNwFLW3bYfaYYj7f2FgRJDbMNxWuGxrKXiWGKAp5kX4p77aFNtB",
  "key21": "36zxccU5vzfgfy7MZUk1ZRgBY5jWJHewGxnPnuNqhDKKaa9DiZUiqQYKP5S9kjLViZz8QCMj3sjfyHr6AncdX6hR",
  "key22": "3j2t6fHSAYtRUMQHrkRdhnrA4LMBGfQN1HtwPKteDjC71E9CxUkKxDe7hTGYbd31ACABNMTQ79y8VoQcUUZU5dkj",
  "key23": "5H7dFLKE4CRiQbFiWKFbmwCQsB4faYsRRGd3UgJRgkssC2T6n7RqtnH1RNrPqgLJZVViziL2Dk8H9iVn2soaoGxa",
  "key24": "5gi1AginLxMdqEym58VhUAjcsPM3criJomaATmEAAA7t1eW4tMz2ueVV7B7W9YXxpRCMYgFt7qnAq7iRqdXGmzjT",
  "key25": "vmXkySDSR5PNAfhWcpRGUGhcPG54bn5pupUckdYVNcPhNR1byYWBZXTk1T2wMJgmF6Z4yqvgeaUsxFUeYDwDRa1",
  "key26": "5orPH8fG6eRNypsVY2jW2mQzpMByjDo3kQUH1BxEBuucW2YM3cwmqXvmJUDBERLdwJBJ7vFva2ydys4cVuZFEy59",
  "key27": "5GiG6hFRakhCZcJARH6Aw8hFXwxTrx2KuQTjDE8DTMZ6NjnauqDm67vUtGK2eMiG245Nf8TDsqhJT5NPFfe33rmu",
  "key28": "2PrMtPTyv1QGjMRPtyJvo7JUpYcSfKYU4XWYMzy2jMw7rV7gYzJyNFdUHiAu93FJrXmLySib7AkZ8cArefaQ5tPk",
  "key29": "5id2BLz4PXnXCf7LdHWtCiaeSkJfk4LiP9XfoGB5iehLZdQPq5ZW9hBn3iwBea4GVdPwJVkcrxNa2HaAd9LVKbf5",
  "key30": "2KL8mqm4CkwQTNC1cgVBxq3WneYqas8d87Z3qGAUFfsVgjBMeH47My5XBcZiwS2m3dmG7J2c8JnJQ5kjpS7nRhT4",
  "key31": "2S4LSLdZk14AFcCVmYTQdWTv2Az5QXES5Ydn8Q1qpYKwPBRnY5dtVRcfH6aRvYRQLDyLzk3H4e5vFLY7TmtAENU7",
  "key32": "2w3F6JUh7dRegMmN9SsAf89SkCUai1CNVzJ4NAbSSvVVqkVigd5he6eEmQftXbzCNfBw7psjxQ8z4kkixhdKNRCG",
  "key33": "iCU3F5n9f3347CCs1FULeJWMXq6ikAMfrfDjAeV1dxKQpqBYmfGcr9RJ1PxSxPpTjwjk1ZVZCqtxKZYSDyS1Aix",
  "key34": "4opmMCHt1UeAZeyEzMGTze4UVdUdbLTzb7vMkF87tjXkvVZU1QqUSsgidDsHjvA6AhWDRZfeshSp6dJxHNQqGCLV",
  "key35": "eGHpLmb9aSoo1AfdZcMTogpJFix2CwmA6UUVbGHdDpzi8BysfvYftRSNnyMeVyVfUxFoeHiDREvERy9ez1gZsJP",
  "key36": "3K9sjg97zgjAKyCDgpuNbzmwwpTAgtxwyKeLHwxoLv1hPvUjELERmiu3iSte391abi3DDg8kR56s3EvPSXiCXAW6",
  "key37": "2fSEpF62EhK2VeRx8gM28JhPVzpcbv2nmiNecvM9W4V4gYMLBUahvAZYoDmMiJApFnrKuQoHV7dPn95ggi5uDbFN",
  "key38": "2BBa1mGXiHCK2oKvF4sXZ7beTDeqYFPRkfsgkFUPcq5r6kTm6aRpuEeXMiReqdTimFKNEPspUSMW8Ugn4BJmLdTk",
  "key39": "4h5bVbbwJR1VKgh58JkTEhAEZNj3tziQXwpnn82zwPv9yS2K6S7rSe8nShoJARu2GM9RFJz3D5JeHkS6JQyPhCCZ",
  "key40": "5HQodCBqQP2XUrQM3WnEDU91kuNpE45upgxFAFZ9cig9ai9dibca9DwraF34YLAqnZix85TY1xCSMVc55tvVvzyb",
  "key41": "4DZv7bT3pRiWQi31ZmQU2Z1FLQAhvu3YJYSASoLZht1f9XRaT5uzw1t9QdJkXTCan8fBE7QHqZp8Lwj2f7yvwVkA",
  "key42": "5A7VeUWLwrU8xRLv4QSqKz9zyYUZdy6CJZgvn8TJRfFea9o6i5iWr9r9ybi9yih6MUdn8MZzszAPBy2JnoEjf4gF",
  "key43": "XNYznsqrDNJ5fyq3fxETPDjfjuoDFxaPKxVL2WYzeWUKWJjX2caWdvBRPpUjYgMWXi7qA8gF3AFtU84cJyLuBGb"
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
