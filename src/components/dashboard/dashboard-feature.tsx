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
    "26U4PkiFCHDshNavm5rdNWGkXA6WjrbAjLpPu77uGisDgeWstLt7DX7CpyP1QqpZvow3MCf41jTKRNViZ1CXkMTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYQ6uLuodQSsxqMdv5Csj9W1WFr9NMNR11hgkTMaaVSAJ1m7hwEuvXn4R4mzrMDC3q6UStu7gZ7VRz7MLga6b2t",
  "key1": "ui23s1LCw9BR5YQPVcEMrAEPRHjjQry17uzkn2ykjFk9qr3bCiPEkmTvxk5yawQoapn9ZCUT36hGsUqtYgqHSnT",
  "key2": "3WzfRYQP4zZvoLxP3Mz2WH3wCcRzfYWrFMZkW1e1hPKQkFWwUbhi7Hb7V5Q2uWy1ZSSRMQ2yMsdUSBKzZfcBGJmV",
  "key3": "5fkNGKnNwyBkE22JAAtgUgeuZd6wag4u6S5Poj112XB8F3JEdo6ngwTzeG8zoHKFWFWnFyjKo1AnCke1fL8DZhJa",
  "key4": "6DC4dri91uTvgZrv8ym2iFgXB284tRwbYkFjvDcpDPvhQNjEDEqEaZdPkuJnAiqQwNVhgCsaUJpZchywpP75Bnp",
  "key5": "5AzkYMbjXiFSJy42BZ6JeEvwa28PVGQu2qycYB2rtwZn4JQmLV7TCgaGnGeS1SRWERqtFKRDXWCXRaFHyZ4jnUEv",
  "key6": "dVGf9ggofik5GjW6F7RomG9Yr9eBgWSMohqc37BSpepQMouQPn7LZiAhNuoEFgRiDKJErbjHDaT89Q5tXCGzgER",
  "key7": "4QiD2q1RSu8TZXgR7oUQX3j5gUu8icLYApaj4WnK2QU7F2usVF2niNKjwQNuzDcqiTq63HusGkFP4V3hfrdQtmkz",
  "key8": "4zMVH6s3Py1j4uoKNuFsGe64TVafCEF7df6bhM5MASeiqpqUiNtr7jkLzkf6YcLBGFc1DYV79AVuuHM9qd1NNgQN",
  "key9": "2bn6EdgBM7eHj6RMk2ecKSDaELXgUUYkvGSWNeFbUxjHYSxuGDJbFbsVKVHpm1oB4yLPhEGKfHDtvsgjvkgoAJTc",
  "key10": "zhyMcvQ4p8fq4JhQXWR1qU87iUUP3xDSkcLfTLNgLsYWUAod2SZPc4ZtVNiaK54wnXzhWdn1dDskKTrpg3QEjcf",
  "key11": "4DfdvDAnjFQarBzWsvQ6fqi7rJEdN72LrhGkDHk1s7NmfvevpVap5TyJtZFz7YGJC4jRXbXBsqxaAN8YGgUmqwrR",
  "key12": "4zsAZuWstddpReUsnhMeHoyMxYkfMVGNz8MSxsdzp6Sm784RtPMp15TvFGEcF9jBAHQJLKM1CbQGVUJp5kUTzX4U",
  "key13": "4sfw8vN7cxJqT2pFhNVifo1DumriRGC9jokzEdojj3jxSwJh2iGKxNba8JggGQBhgq546B9yK4dc6e3w1QjBDRvV",
  "key14": "3EH3x7cRrPPUWPaGz6mRR7gXWsk3m5QUjhfgXRsapyfaKYWa4rGGscPeB26MXv5j4xSXNbk6LF596UWTVaZzGdb7",
  "key15": "gbWcWNyXu7XCdt2x7YFJecAbRewcVC589BeJ5PADsCt83bDTR5qYgAiqWXBzUTdAksL7LoPFQUV7iYuH14jyaMo",
  "key16": "4Jg3E9CEiEk7FvXAUTaT3rgt62nif2kJeWGKLY1ACzaxA97xaspyhZjupAhA5CafLxZDdCxqjLaQfP7nAxfFrXW",
  "key17": "25scMmdHmvytsrNYTPYRZuQeG4D5zAqwvzHCy9x3ndMVgCVsH3wVktpuu5rjScWoxZfWwYCvM8jVsc3dpdPvK48r",
  "key18": "N8XhEhs5SZffMRH7ZoP8nPRnNGKkzCtibTF6r2AwwYwXmhpXrfKWopYNecGQz3jHtGv6kWapgU3aPsJPcVUKgSY",
  "key19": "2nhcsRcfUX3L9wEgzd5wxehG15ZMjR5rqkFfagk98a837SSCnM87e8kZdaJsePG2qw2yPrMK7Q4gJ63JWrsT9bMX",
  "key20": "4r3wtdpw2oL1uQ2yWBakZvj2pwaTUyZtwtvoiexzefPb3qnSBAnwGM1mBTw81vzL7yaByTwHTcw8AJLMiX1TjX9x",
  "key21": "3kwwqMWvYUwE5cbEejLc5yVvbd34emaEwsFpVhtNhtKzzPwxMnNme8ez9pAoyJZSjwLkUAwVa9BfDc9DNXtzeQfo",
  "key22": "3H8uiJyHTbCy89WZab4XJ9d3sXxr2BCBYNomfZpZceEurRMaaF8RDPRcxeLkzDSNuvSvM1sQQpyStXchA2wDigPv",
  "key23": "2NwXbBq4MJdC9pDzf4bvhekDNiUqepSFxQzN37mqFqKbS9eGxjyFikZD8iaSWfNrhUvwvMMNMUPYkX8X2oWdekjt",
  "key24": "2dg3Pmi7z1KuyxQM9F1cfFfrZN875FgDdGQ5Pe24JE4otSJkjdisKAWk9oBXWpFsAMT6AqaR7DrjQzbxRbqYV5kV",
  "key25": "JyeVmKNJ7zrJzCWweJrjJ4QZtSrZjEYxCX2MiZ5Q2JSCamMSi4WhVzh6c5BNMedmxrWC2CwrxhDtgwwikSUtMaw",
  "key26": "34rWgzQaeZuoku7ZT1rUL8rnwJ34snUa3sBybtBz5aqLcsQVESeUnUMyBASnCthC7moowgJvX61FXjXfqQfpejxS",
  "key27": "6225WQn1yrfmxhiL5rRvHzWt5qqZkcAw82CJHi9vWsZ7aUJe6zJHGdPgs9oXSn7L4RdChw9PyHMxgiaKsXi3JAPV",
  "key28": "2GfX8qkDwYwWbizcKma5L8R6zTKA76uT8vGAVkSSMkEjfgdapEUqqjgSbijj47UkyTfXaViTqN2Aa6h4aRNp28M4",
  "key29": "2mXuFyh4ADgaAUBZN232LA5qo2s9a2UhY7tcQeEPGxE9uoFq1YYjbyKefowfh69HdNUikfQALST8a57isBKEFTt9",
  "key30": "3RtLYqb2UYQccvmofZo4CaTcp41YatjKEsCHhe2sMNVLQCQw5miT9KQUpvCEwW4LTR4F9aBNs52HQUxV8xLTYoZ9",
  "key31": "25yhC3vfUH8igkAnrd4pKoz2a1dypk4RJ33Fqz7VYZJaeeLKfQQisExFpKjvZCHFtyr48JPHjDSy6mMAZyUtt1NW",
  "key32": "2HfFt8Y9ouW5MwpwebSiSake48fwuTvVLtzJ5ibA4sXEn3p8Vp48UukyjVenFUHSb3biKsWHczNxEYSp15wUf1LZ",
  "key33": "4UTsuWfYM1Y47eMwLW1By1MMXmSf7YjYzGy3DrabVHMPyGiR8wCH5QAEbgMVYzDpMMs36bbrv7B76vxqhopqtQqN",
  "key34": "7LMBaJX5RoALSD9mgxsWXqTYJhQ684FMxkhr15SLQ9DpscQabZt3TN8PLYB1228a2JZ4kiffRoUCAr8gRnZSjkN",
  "key35": "5qQMbrQJazJZ24hcSBXL4JQLuX4E5eSKH2veYxiTdrCAZTK3PYecXrg8G8c9f2nje4apWkauCiMi4QWwT3mNEK1p",
  "key36": "4ZxLFVvpHpY9WUpz5JpuMuUvsBhfAEqsZJ7s4zDFfGEK58DopBRUS4oDopdbtkHviycKQM6z5tb97zZgYh5QXLBV",
  "key37": "57B26LLZYWPVompXAohVLcfuCrGP2FTaYQUbtQFjALUsUNujAiqt5ZUNKbdnzoytx2pmLXStcxmNx4ujwb2Q4cTk",
  "key38": "J3myiH9Ta9omjMRsmW4i5jTgmXTH5xNm7eZ4kBys7BgadtkMw1eLzhZzDoKLQkuYNcnuSrRoyQC9rmZjqUS59sn",
  "key39": "5XV1DTVFf5dhUL3oNUyLbE3TGwuJpXdSbaAWnyDKbAyJdwZPwutraDfqeq6R617msnugFz6M917Ssyv8PDMLhcpv",
  "key40": "MwY6SxnzugV56pHnrPt6ihN7oR9y1UPMuxEqUBcegpRmtBpqTURGFz8bbf6sYUThacuYr2Sw5BJDr2FKPShgyBv",
  "key41": "Dz85b8uk1yPEjFiGJoyGkavPUfhudMVATabcWYD4YQu6y6ZUyFkNzqT1SqNaiJNtb6URddWTQyd57NBKiz1dmEp",
  "key42": "2RWjTFSVACzxsjxQxYhEaV1ou1qKYascmVJGXsxwp5cHVLrDdknRdh9wRnmg3niq68J1itoMcgQrHrQPKiwuymwZ",
  "key43": "43W9C3QXQbTTVpknCPKZf58YeZUua9QkbMMatCDFiab8zPrqayMjXMoWAoxtTPcw7N8pLNkjZ1dXuRS1aGoYsmWg",
  "key44": "2oxgYhqQgVJ116fnnqmMFjwgwQv122khdyShrvPN3fjkYbtPxQ8vWXCp9gZzU9rRCq19vB52zSkCBy1tmHLXkjde",
  "key45": "3uLh1FCHvkYoBJMYgNBsz7yoBTnakSF64ireL3EEz9MZYyJwS5Te4wTgNZb4qFrFkEWSxNaU6ZpoCXMbvPFkFrF5",
  "key46": "3X2vmw2GFuxf2ZKvgYWAAZL46m8JCwogAcFdGANhHNqJNFdHd4KsREnqpjjRhZUxmeweXVizm1BPkut8JC7kHxzR"
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
