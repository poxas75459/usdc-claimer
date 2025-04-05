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
    "4gtoa2M2rHwzvtsbWU5AXfmahPYK2ScwjH2PgeZzTKyjb93r47jdazq9SUT7YTbSvEug4agGu17SU34opmxYctiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21EmvBTQot385hZAG6oCzTVha4cViPXxuy8FbdpLmVRoKXexWX28xU2PCgUuVUptTqWVZ79sBNFozK2mZnSmzWFD",
  "key1": "4h7DY2wCRDK4DRQnZkAwnJYkpMdMUs8ZsyH1BDzM7bSWosYDNtFcVQxgUVDor311pm9LNNfvG2Lhm5EDX23gqRi3",
  "key2": "3VoDGAB3g5WfQtm3F2qEoavsJ9xhAAq2fMZfnN69Ru1bbvzsKYTB1hJwPUZ9GNoZzdPBadxtHwuPekoE56j4fuX4",
  "key3": "26wEGKZDmDzRbRSJYsaUrkE9aW6oY8ptBNewt2hdUug2LirMLh8jWGbG32tiVXk6KkaeZ6886z33CJzzrvDF8FAn",
  "key4": "4rK6QuYewg7baL7WG12wdxZKqVmgxQCSaAqyLpx2pUfheXvM3KPN7arHkoGvG2DfmWpC4DzNenqDCDz3AwMT2Yh6",
  "key5": "4MkDMimNKTCekJkKvZ55oYk5vLsNEUxsXH9R9jtDxmDaChH6TbhngCaUDc5tMhYnx4q42694wjngAWTDm8nESRRL",
  "key6": "5gki336Kx4HDZQhWx2j3DKab1UNLDXgfDZva8RfYBn5XqxohJBrp3Du37E3rAe1i5ZvQj5W4CHakDzYhk7jGYMn9",
  "key7": "49dFUANJ4Pqn23V58LwMv9qwWChGuQAZ9DUM5giGUngqdReL3rNUYF2MMjHzCpwCrSuPkVM4zL8Q4EDBYF38wd7Y",
  "key8": "5h9ipHdJTQexWAt6z8dNsUyBsoazkEC3xidcsVwddfVZDa2Xiobf5JAjSYVfa7RhEB7fpV4gmp3MrfDtBKkTWwqA",
  "key9": "368ufk6TT92f5Vziat8qR6rpNWQaE6cSQx8jwu5AKKGMaWAkCtCbAQPiHYDP2acdUr8f3kBsXe2DaSuxiFa4yNiJ",
  "key10": "4nf2ckTux5HvH44sPV7vkEGKRB6nTnxY4Ftw14NpjHoy7FMPmEUKQxjKMSEMdrEBeMiuHeyFgAXdj9x34YwdGyWd",
  "key11": "3rm5uQw9P5iAnukJ9SNMKjDovCk5oPFNZDrhm6GFgBuC9gh7gHB8DdkDKuywcgKSgaT1EATwDMqWA6zKzJJqUbna",
  "key12": "2v8cobc5RzpgdrWRXhxWnNoW9RD55LFrdvEsWxfkNXvCN2QVR2WzdXCsUdZgxriY2Duwgs7MWmeQf9K7LJNSxS5o",
  "key13": "21hgbxDhYrkmea62ZWvgjzuX59M664PGmDrwhPL32dMHLAFixwoGhgd2srY9Dc35GDHaWLxVEsFoSw8DGMqLv4Wd",
  "key14": "4rRvkATycyHWTepS53rqXD27NY5PLT5Ms6TQ7m4wFTD6tBtzTwLFtYSKFB6XLRBiePoDyHRhk2p2NKzcqbfw2coC",
  "key15": "4UDvLQJjRhB45TWBAi4HGwDSAiga4VHPi8rDKPLTaPmRantHDRrGBGSBRKjJm4rW36cTCh1iBBDAswXuacMo6Lc5",
  "key16": "26J2gvC4YCZt8Um3LKELL2wMHm3WWrAoJ8sqqHhGZ1Hg4BgFAuoQs8NSB5ykxqLKvsRZtKjBrs45WXjxVGNKWHCu",
  "key17": "EgL3NxHNmev7XNPBP5KLEn2qN3RpPviRJ4pz6bTQ3u5pPgVAdoog8aE21uXCRdtJnNq8LeQvvne8pRfrQmeyTC6",
  "key18": "4bW9CLjx2umm9uNwtSteJVx93hyHgfAYJWZS3esLp7ojiFpzspoVGWm2sdtFBrQf1Qpf4ddpRbkqyGfsPW339oyB",
  "key19": "km5WJzjRN1ZHNk2Xn5XPZhRZjRqDpqLqsrPFoZ5ZUnPp2k1WRNWNdqKQhd1nugAaanF3igcUSJi9wx6CnqHgtLf",
  "key20": "5o2CqJe7qNqcyMeaV5Ku19V4UxBWMusFiYfSCVJuhDHjJ1LaRZjeYgCDFstdW6qdjN6nADbpXU4n8awrHrKdXQJW",
  "key21": "UVHD9xudvCWBKDRkCpyJnTYnfGG3nzgWPFyd36WeNBE1WHUE8VCEEW9LgcBQecFRQFxn6KpA63vHSBgwKA8U9Wc",
  "key22": "3bfbJCWp475NPYupciy46EUUCswnnAYcqWJER7vFdmfTnnR19sxdDuaugxgHhsM6YBVUxerXqanQyFYoqMHtgNbm",
  "key23": "4kaTiKxtHxQmgw2pprQroDLnnjmAmyq6MXido3qGbQhBRevt3dJC4DTeQpkkJpAYMYorHGBmHyoL8fbwrQ4Uab1v",
  "key24": "29QtVUv1Z8ixx3gifGyUsXnW82gtwU1w3WLwkU4eVBAojTT4MaG2GwqUUqok9RrFa91caXzTgYbCxTvTL6RybRaw",
  "key25": "28Q3hkrPhKr8Bgq9UbFXwzBXxTN5i1ZjyWJcTEKM6rwCrbDu3uR8MvU6WYQEqRmuRNQicfEuqwAGtzvJwFkL2PM8",
  "key26": "o8Mb39NQUZqEScLCV9uWQs9JrLA3QRcFoihG7ZKUdeyHWgDo45ehjDLvnVAVDS4QSx39xtwCGsjV9CxasbR91kT",
  "key27": "2QAiKWY872i56aMvqa7Dt8qHAHg9vgTxF2UMFzH1TTpARTeXYMeyPXomhW4Wu5YHWDsMQ3P7dzJPTwQokURzey2d",
  "key28": "5WDSiYHkB66Rit72M12L6gYaa92SFZhUbsvErYE9NkWhwjdiiVpXEQKzNiXs5Y5SuCCEdv1GpaMGKGePLWvPZvo2",
  "key29": "3kDoVHEDgjGS7K9tSpYgAUJ6P9GgSWwjoRmwwDC7zT3pe81SPyqpW8WVuoZiDNELx6KwB7iKCt7scuXQsmaT3a5W",
  "key30": "5ey8FZH42SyqpHq8Yoi3tTdhxCJitxLMpa9rGQdEV86junBVcf4S4VVVBYn2HVXvMgkC56PchBpj31GzB6FZMUVp",
  "key31": "2i6mqbqVuzz9So3kvpNDfPAqKEdAUGpNSvymrAVUY51K16W3aHMYmGoK89eQPL52EEWfDWXVs4XkvpWmEnx95R8P",
  "key32": "3eoMyA6ZYnEa94mw9s8HWs5oGx91syqRoEuzD5cfPPFqVB8ctTsk1CLNZzTFyEbVWg5Hk32UqfsbW3nLBcrtv8wb",
  "key33": "3L9BqyLbZsEm6E29QrxoKNzQWozx8bU7PYEx6oSzeJeE9oxesiUP3wFtGgdQheQKGcuHQS6VotXKpXgmyKuFBq6A",
  "key34": "2J4A1WbeNfdvdRgZBnznVb4aprNCrDq2pcSbcSHKThFnoLopEUdr2eWc19WfqvAS7dG1RDqhtkBBgVAfM3o2j5Di",
  "key35": "2hoz8ZaszzAaLsLJbQf1yt1LZQKwinBn92XgiJHTi7TKnRAW95de2eSdQkfh9MdG1gqFEkFw1BtnV5Z81wB8ghBi",
  "key36": "7LttinJnY8Jd6jNu7FBbDAZvQtNN7C6BQ3WWq97Dw4Nze4sUCftRRneTzVzLiYc74RaUD8jLjKMPowZgmM9hmEj",
  "key37": "3xjiFHRGdh8RqpH2JxtFNsUzT9CqfcpLc26amiYKc96GuGC39seXzejV2UKTLzregQpKDrbnVqFcbLLQqWzemoSL",
  "key38": "5ARZ4tb7uqWN8mM2XtNXhgB96TLQZhukoC8mC6eDC9BMpFN3JHyeRBnEqn9gQTENcA16RCY1iaEPZvvC3Jo14DQJ",
  "key39": "9sWfY5j9HvSsXy42q2E2t5gJpMV3ivReGSbsQuwuA8Gx21WyBDwjoY6WUyTKonN73g6pmwofVGQD3fazvbg9iKk",
  "key40": "5HmKkWxNBiWPoJ5ngUabaW8WRWeZW2Av4mKF8DSaJpujKAjgcw9Zi12b1BhJ6Kb5H5MXCC6qc1jagydxdNq5nkZQ",
  "key41": "4comcPdvRFrfHSPwyqFMsZ3pXYpdYQR8fdyRcG8g6MhJn3xqiHKk8gbua9t3CeYYUHw1AMANLVVdfEsScjL34SBv",
  "key42": "5A9Fge353UhiBu7UfKBmADr3ak2pVoWkVxRDzKYEqxbrMLT96wGZdwzY5uKt4aAwEQzFTZcZuzYFmTn3NkQbtJv9",
  "key43": "3RUvXGvSF4H2EwVCAHGgSE3gkX8mq9jbwrT1R9LPeJrX9qn2NL6wvFXMXjXYxGKQJb4tv8ZKn7JgPCXtpFeq41gu",
  "key44": "57DCHwwMXpnHx6AjbDp6gx1fU2CGv3SAgbW4ygsGcFNL1Nd7okZ4wfotR8D7VuypXf8PNyVQzrnT4CqBoqMw4KtL",
  "key45": "5XzwDwfNAYUCPtNc579M5yViq7z7ubqkFBCWaZp8i1rZQ2xBwPis2xEwNFs1G5utmwXHZ7iFrQPhQUmeT7MaPGYz"
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
