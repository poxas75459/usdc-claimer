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
    "3wn1BWQuEYAG1j5dG6sB8eGFAsUzx78e18B5bVWC3BDZyJmJ7Qu94Uzd2W193NFQ5KseYPEWfv53mmtxTrXYgPaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p14NJ1F3b982dUUqcYqNMskvdP1L4tWk6bsEaHkpdnJrKNVAkLYKb3GMiczjSbRqMnPNbpVtTAXz9NYdonW1Y1F",
  "key1": "5thSrUzofCLd9P5BfnRqUw6gJDHEhvHeKYGZudQh7gaB6gCjh3jMCCxUPep2Eix5ZBeoBJGUNh49W7UBFmVjSmTq",
  "key2": "2iYNcVgoh9mnTdDQbQkWRsRM2mWrDJueP5nwAW1TLwNNyKzeDRzzdaMkaf3cLw5SCaWC4YQeZBqqqDsRfisSgQFC",
  "key3": "58EstzVXqhJT8yePQqLXrKnppy7by9QuewUv7d3S1CUZ9QYaJwSP1fkCr7UyBfqJHbuoXKj1jp3z5kexRfX29WjH",
  "key4": "5Wuv7vg9JL1WtAFWzrXf4Jq6FadFz2EQfqqTqTg5anGMPMq9QcnXAMjbrBoj4kahS4PzvNHQrshYfjxewHS9Z97d",
  "key5": "ooP9BP21vuetdDtmx3SfihwKHUb4btE1zidUWFq9i6TEWkTV1SSuoKNLEg7pxkTQtFug1ZmvKM2xUQJgqb9dNri",
  "key6": "iB9i1J9Porj4JQYT9QGyUs3ecKzPUNTDwF5RNDFKUuSkL5bmPYQAnjeiDQieN7v7s8u8FMPMS9xJGWwSWXwvUVC",
  "key7": "3p6LZ7ugvdv4qZ1Fz5X55PSRkQHPYrmW9WH8HFGwRUFdEAzMzbjf35Avqnvjmr5ydqq4MjD83bu5YeX9uW8CWfUa",
  "key8": "38orTKPKQdz1f3MZMDbvWhFxL9EfBZB5rn47ef2oTrF53aQrU7bRYzZE1ToBwkXXvHpuCv4TJPmNEAL8osios8dH",
  "key9": "2tBe3G188ztjJVLKjiAyvveW2ZgLAhvUYN68nzciruH5hPyf24mbnnLGbg2PsoAv2PLuoR8yPLeYq367iWQ4Vckh",
  "key10": "3Kvp1akVtwKZrfXxVTqUA6j21ybizWkUQPWb8WETUpYiJZmLveR4N2yxbWuWAidzj2dic53L9jJ4N5jjNMeG1xcV",
  "key11": "5BgJem83wRf9PAo3Fc4QrnPLqE31G6N5CeDAeYN4mfKWpCVc2ortk89XKRgng3zuLMrNVCL8Z7YN3wEMYRmP6UXa",
  "key12": "266SUGogVhqKjD7NE6NfKdS8MPTf1PryNuamg3B4aaA8Ra9KMG2KpW9DxB1aqVNCDX77hex9vc2Mq7LwTznaPT6x",
  "key13": "66Mdq8oyq9WEmUvxP67m9rjStpbxeKBhaTitj3wupbGnQamQbtEeA378hfdiUHu9Lgv9s3HF2BmJH8GHKFWiQ6U1",
  "key14": "2oW4PrZM7cq74aRcuMrf3RLYFxnRmNQPZhfQDXWGLgmAH1ssmppBsPFt2YdA9sNVrZoP1Kj51gK31d4gK7W53FN3",
  "key15": "gC4DRag6PUYkuxLh9UjSHcTNW8SJJHGMe2GniTVxVq4aAQrzef9pN27PqNqwhhBGsYKwdjxB1hPra6AJKTHJ4Pu",
  "key16": "5pihwG8X2AnXBFsPkjiwyEKstRukJqcQbUtE99dtxk4QTVt8T8HwSJRiHsad6AArisry8L2ameEb2rMhvq3hFXZt",
  "key17": "2YSpf2GYdjSPgbPJWLEH1L5mo2KGeh9Bt5PohV2tYtWAfmDSx4qq2uW93QE59MRQCQmcV8F15SsSbp3PfUy5R1oD",
  "key18": "5KBHTYpLQsiDe9Ni7CbNqJpMfhH5HjYTfciaAbZw3or1MbB4JcNYGrFmmdBV4Q1knVepLR9bV2DAMKkpsSBtLrAx",
  "key19": "2cuP6xKdoUAjHB4m3NRpdtAYTdXVaKbnv8kpXZSbjpPfA8X59iqXswDmetXhqHibEoMLHhYJCEsptSuVN7FWhuYo",
  "key20": "5T6AoPFE35SzUAU639njnho9CazTKPyrnd2PG6cmcDtcZUCvmN7bqLhmfQfXY4CeuLues9bAFTHbVdAqaLpLo1BQ",
  "key21": "2xkTag91S8bUvXStzxJBr3WWu8jNo3yKJAsrTzKGTVT75Y1Tqbrp3knJVVQNsNrLLcFELsfapxvd6RRV4K5RVj8",
  "key22": "5JpZAMQnMrU4YDxv3GbTkLDbcoQk94ku2Rh6QNhsFAuFCvpL641v3bqj1EBrYSUdFBMczP77ywKqaz6MTFNU9N1D",
  "key23": "3N4o2nXsAiUgxmjPBzzYyd8aSKyV2Rv81fgswux2WkKdnxjPRC4GQFB9DQXexRjJXGUDcpd2ABa8PvjkXPRb8ssW",
  "key24": "wSMyLFzhBqd2tt4wx59Kf3gPL8t82SPiAEESwwWLQJ9bZCYyG9DdtuswiG36V9nWwzSS1mBPyuS4Fh1ZgoWxg1j",
  "key25": "5XT2y9wKGornZDX9DdaLvMgkaYoJzgAM5vCjaKN8sgUyuuT7h17oP4GTr2qFL5MyEXQ176vCgyyxmGGAt2YwdFee",
  "key26": "3sjucxmdUppNWpMyauLXLYzj9xSdMzhVwXTfZjFN5jMJhwtLXPPU1gPjKY27wBAAPc87rYBEAKBdZR8q6Tyyd8ZR",
  "key27": "5S7cZufdPsG58yZwyKva4SWnzeRBoXBEWgxBFjcZ4ZKu52632oETsBaBiKDgsw1V5kQ8vt1MxXZi1cs9TNU6uSKs",
  "key28": "2ghx43jqVogEgFKNWnJnpTHLhbb3H4grEEtULnujDmdrz5ARMQZH4jTHvytr4rRLCaq7SPMERR55hwAqXppKJKAH",
  "key29": "256QRdRiLqDi4J5HvLCAaRijWHjmEUf6DY4Fwjjw2S3Hdc71rkAxTGSGPNcWYB3BTKecS7FKLVQyMqJFHTYLsC1w",
  "key30": "3s7oQXS194SF1HjjbruwafSAvADrsfJEbWe7nEVTqJLrGbpKx9HKj9YKpmweJuEQS189rjwKuhxNWv6B9M38PxCU",
  "key31": "5cWNZEWT7D1X7Mtn1bK9dV4JNtK8nNiGbNZA2WFGv3fHGbUJU9Bje7znv1jvbBQuk1fAjstWLMBGgguoc8ohRcHx",
  "key32": "LGDAqBn5W9iKqKW3QEwVHCE5XkNzowAcFPGuWCUXwSwFHSzN5ciuaqkBELEFLMiVUpNQhctG568GN3AMLmCRnTw",
  "key33": "5qypf7cAnHXMuWuDzhLkhvyPD8Q5yGYjVg92fNKi9HTCyqWLaHMQahUVNrGGvC2JVx6F4u3WDvmWZjY9Lt2baydp",
  "key34": "2PGTEN6jwHwkYTEYBvEVuixZqnxQsS6n67bgVjBm3EdDQRzfuoKJuE5mCQBXRnLqRvW7z42oEC3rftqQAi5mqv6p",
  "key35": "33uvyug2reyqUBTeoVPMsmSCp2cyEcdk9eSeBFJxKL9u3L8HuyTeep2zkdfmAT41FpHtcHkxZpzuX3wkx4eDTK4S",
  "key36": "3cvsXmyb8Jj5gKNz8P4YxPpycJhLz6P8uiYKVbZsZ6mcC5zKzyL8r7u9N3htXKPwuTYkm5TL9ZHaUmNhYNbiMG63",
  "key37": "5mU6fynDQwju3xBo4xouF7XPJusRBkkeAcG2aDb1ch9EBzfqCCzzDDtpMNZ3N9sTSR8MVBhtHbBpvmiALGoB7rKH",
  "key38": "AxQyHKi7muPidnkT2g3pK6cg821d2GfkTwMTkBwAgUTExkuwsBSfQbyR8yrgZRKPeLsSmUyzoTZU2QBC6GhQSnp",
  "key39": "2xLSfMD7Kcq8k3wRqW7rSu7FwBSwjeinRkqDoe5iTVSUcqAYFnxS2sR8DnfCXKpnDC3egu4u59VeRf9KBb6EPAHi",
  "key40": "5jcNg4YhCBYmcYscawbpZ3EDmW2Vw9KWmB3cjbSJmQbRKP8HYWNYyxD1GZCdgoKyWwrnWtpjcnRaicC1BLKLc9pg",
  "key41": "4xf7kRm8hbCKySNtMR1Dh8fDcpGu6tnb5WZAC3ytxBEY872AkN321SCEzNGMBp5RsuyBgPp7YXg388pkK98jLH8Y",
  "key42": "5e7cocbJczNykpGZjzHLWNTSqgfaNNPpmaxJwqxj81Vv3ghadMDY8AMWgw56EkJrYMPHvW5u8CnFSJfHzdJS51wm",
  "key43": "5krt5uH76AvT3XqAAaahC9r1frr6X1xLoQD7mf6kdF3MEE73Ms6ygXMVrtKkTkq1e2RHHrBV6mwZVkqm8fhHYi6M",
  "key44": "4si7p6jisx7eeqGEEuhEQdVtasJXbU2E67T4j3pLWRziWQtZP2xnakj7KkQZhSz9ef6KmtTp5Ehmg9iVRWM5u343",
  "key45": "2v6uMKiFQANhqaThDHrJWb7wbZqiTmMYUa3rhCxFbdbfwNvyrzCPqquxX1VY1LUPvQVJ3FnL4pd3x4gqpAoZY4W",
  "key46": "3vQwNKqGac7WLhXB2yR3FrBTmyna4h2uGRy7roc5fQKkMnJdRsGfFj61d5vSJMhcHCsUwZKAV6xvpgxjN3xvTv8w",
  "key47": "5NMV8RM5NATGii2b4Vdu7QBzhgLVKR9S8Ce4RJuTjHd9B6qZeutVss22YuTVdR3i6op1v2Cj4tRgQrNXZcsXmHAc",
  "key48": "ocPsj8aMznhnZuLuh3cWGBN8s5FvQ5F2p3y1Rin7oHNQ5n8GCQpf4ocno4GfQV7n2ASZqRDmzHrzPGLMEubK5nv"
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
