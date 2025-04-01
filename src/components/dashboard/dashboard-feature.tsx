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
    "44d2qZDp28yBfmkzqc5twrpLr71P66fHBVCEvhN34KU7WZ8Pr1s3KNRwK3YVN3wZUfZFWb8eZuGATjCjVeVgpicL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36RVqytgUyqLA8vXqtwrwkqYrcfCKJZLstGP8CCEFmrRH2bNDcRqkTsHp6mCpfidKbhn1R3CJ6GaJbZboqm5mq57",
  "key1": "3ZZDdnrPonyMwAcSqrAVukvvj87Ct2CPenrNbPY7BVkt4TzszgourUjJMza5kXV2F5r4P2xMc9HQ4hu7JLcXMwtN",
  "key2": "kKyDAm3z8SVsyN2MBe79Pau3aBf2ZFE698a4AiDKGXhz2QpVCibtTNJtg6k4ZMzXf4dBkFXXzTQerzxsSP71KvN",
  "key3": "3Q5ksrnd2FUDJXmgye635Mqqut157RbAsQxk8r47uZF59sfDDtdWrWHFkkKM67TSyxmtMyTYitih8LFQzSDWnte",
  "key4": "3gxBYtkqNvCvhfwC2DTmcKUVk3Z1W4HnWdptQWXk8M8dAG9Ge7L4iafCDDY6Ye37q7z7J44K9dJ9GnNA4HbFCNZJ",
  "key5": "2yK7rHbr8S67W5QVLjALG6i4uyT9YiSXaHNMotF8FJMkjxfb32ZqY8BMwEHas2Bi24Y5wo8Nw3mZsNyNPDLph2A",
  "key6": "2wna2oPGzTAgS2vqvbZU8TmvsauySZqtygcgP4aG2H1eeZ81WP4iodoF2kYNWRZedxkdMqmwRdWonSkXrM5tNUQG",
  "key7": "4mhVqAKsDy9g9Nz5K3BGuKTfQvE3k63HJshQytFZYJPu4aaM8PrGxQdXRo8ZaP9qSDGup4SHUMaVguQjyu11bLKn",
  "key8": "3uHP7XDd2U7fjvgvAkb9SwaDdeL1EGd9wbDUkb76jyRko9HF1m7Ps2jGTxpzpJbHfx2UEg4ZkYKQKABQdey3wQky",
  "key9": "5ENuVaXS42yUnEZq49LPX18TibSz5hLo54XU8GGNfnKXr3La1wbPoVE86r2aoHHD9fefLKT6kKLd3YvDbSJCWaNE",
  "key10": "gA9oiHj8uuFn4Cwy9zRnskQWvttukPA7np3H5YfewvqgwMeWafJQ3AsfB1nH1NyThSaBvGhaaZ99gjCpEqPVPsz",
  "key11": "61cGkP6gNvAdyoaWTPUCHKbDtuhvTtukEYLhAeaLbmiMbnBkLBzAxE8rZiLGCa4pww6Nop74xP14W4UPbG4NKei7",
  "key12": "2u7TJDSs9jHdaxihDM8LitEgoHetHgHE2M13K3msyB6Pq8LayFgWXRG3CWY9jrJHetvZiXBiW2c2BHEHvgNnC3Bz",
  "key13": "5ihgFPEuA3yziNdXvnUbNrE88bFyaCsUXvdf9pz8wq49cVTJHKXyhDktVWjC6gzNRmahVT21Dqa3pN9SA9SuogJL",
  "key14": "5aFQ1vkRTupTTiQ4Kr3UHSgdDYFBXunp55JBju8DtaAq1zDBULkiQhCEtTeehwkRbPVEz96RiL7GHkGjpcZsHCQf",
  "key15": "2SzJV6EniCdESBriNqcU4FYdeG51dw8igKnafv63PM9ZxFnJnEiCi7J6DqeCUPyk8eWRinRUaVPGucHX1opb8tiV",
  "key16": "346wx4HYGsabwwukiKPBckUhGxiDcLUwyapKTnjhwwnPY8PHm2jUyTc9g8Cd8hK3682WMGQ3DqgnB6pXEAXcu7ZQ",
  "key17": "3wvM1nicZ38w8S2BSVVom6ytHs7neAFY8NrFyFsRWTFwbbbQroKfLdvcKSN4rUsBxmsKEHo1mWbZuRh2MGGzVA6W",
  "key18": "xwVAMuyY6keCn7N49FSbLkoE8urC9upPHfPy4KgmzxBZWRxPeyEQGSLuBdk6VtXHy42TmFjhYv72ZkLJnjrxdwg",
  "key19": "QmffeZY1oPDna6DWWGhEJi5ZeSHdiViy2LyasTtpzW23V4FF794frZq7kEiRWM6xMb8HwjFRfqPQ5WRGzwMZ4fb",
  "key20": "QhFUAErWKnRggsmAJif1pH7UvsSv1pTmbPyzRshggx8mj8Qu4CUabfBtwVKU7yDjoauXRc7cVksoyq69QbgkdGv",
  "key21": "3NVDZzud6c2b14dfwh3BChd26eXy1HtYzEvioQkbpGVcYuz6VC6Ye6SbYhKhVTYebhbRPKmends5y7yy1zHqxKtg",
  "key22": "53oRfeYKkPAUP415pnJwpcSdn1KBNEAoHZqotyNxZFfVZqPrEbxaEHMvrjFK6jySFPxC5wxn735ZSvd8TEaLUYan",
  "key23": "3NbRqcfFwpeajaVig4jGKczbFqq2dpcmAnFfSRuDxyGU6a86RdXDiEjjjVRPtcH8bi6wUZhRiLVcL5v8WRAdvjuL",
  "key24": "621U1edDWT6oGNtMm2hupqiTWaZZYSmKYBtJs2gBi2PhFvo6MtGm1ickEX7tM68M2Jyzsaj5rC5fdmAQXpGKuRmQ",
  "key25": "5rtuxrQG4VmrwueGrDMequLR1Uv9u8JcrTDwp2w7e7npeoRYZC8J36KcBGUh9tHUiHWJzDTwruNG3tBQpsRDLLJB",
  "key26": "4ybBWAnFGuK2kVQhC11QukJdvN7x1y2PGpe4fwrCL7cTdnPKz7PLh3THbFL4TG3p1WK6Na45SBrz9ujuG6sdaC5s",
  "key27": "3uKRMmaSVAmy66xef2kH7eft9ZL4XCLvn5RjRpx88W5HxRRSXwtgigtPZUMqQpqA3Pj4uE2T2U8hYnsQZbFYPS21",
  "key28": "3yycoSsFG7dzG7kx1msNfU7rDgNcYUnj9UW8j1Qo2SZBZznbHx7NLxAkGsTWfAaNvDVN6tziEzbcUuhTsdjtJtNa",
  "key29": "62m3wGcpUEZ8UiUgrcmj8UsGWUxFcmexPkLB2GpQxhXZyodqmJEx3pAPKAvinfCX5rYA2qbwU6vKgG4VMzqySTtJ",
  "key30": "4ScuMUhML5Nno9YpnvcKq55UDV4Bw6r2YiJXCbnuUz5A9aVbENTiHo8skHu6F8F95tp41WezfQyMT6aiqZ9mnvXe",
  "key31": "33tnAEvMfDaeHyHZLsWSL5sYhHx8nXvRCe5y74QXQGU9tfWbUye6MPd8KyX8vHG7GSjmq5cfqDFdKJwBXbqYnDTv",
  "key32": "5DBsfhxn6x1A3WRyrWfK6vZAL6vET5NXXccPgDfztrNLG4A31n39eFkQfJbB5FrJT595PJUbo6D5xzKfthgLtFgZ",
  "key33": "4R4V7DwUj5QJUQZRHj3hHUyA8BP465NL7Jrdp6xYeEYXJfna7ho7h5CzT5d6iAqJasfEG8CnXs3HceyGV62rDwQB",
  "key34": "xaAcbPxG9aaC2ykRnPLPSCmtEeDPsPGi3q3KMQrFpMmHC8gubBZX9JAJMeKXJbPBL9uqDgmaJ7CgpnzJCjwMgyD",
  "key35": "2jRWiHYgia9QTq8Q4dpAp6iv8g6gv2RvXQi8bmB1tJo27Hb936oF55eJRzxLVtmpZww181D18wWp598wM8qw979r",
  "key36": "599Zpy6JpLXBwR2vSrWduMTtkkFHnFzZbhsRS8dvK29LnLsHfoXXGGUnfUdbMhSYo1Y29bDdHfejWtjTNPFncabk",
  "key37": "5XiBmckpPjHW8cRXttwz8MczudESAPV1bLcekzWLsemTkr1xRZDZr4eYDpaq5D7Q59zzwf9nzZjEAxU8aXmVeaTu",
  "key38": "eE543REcctApu3qwVbkTwNBaAwJTC8UVwKTabiPVNuHenLbeif2wSPxQ2XFk9AjiKpWfGgivic4xEAtti6rpedn",
  "key39": "3XT3geibcRtRmskw6UHzDusJ6FtVfSwP3UPRVume7AQ71L4pTk7Pp4oG4YJ3VxovWWYhpizsGHsdFGVDtSxUViJ9",
  "key40": "3r2purZpmvAQG9bLFc6WDCEUD9W8FWzbYpannowjc65FVN4xsn2i4zdsAqhrfo77c3VvkhgZatLEBMiSaNccUFzb",
  "key41": "2Uwh7RGz184NDoMgB1QRGPwNacyfEBo6sbsfDALhwBpG4XQCwEZ1QaydAn9c34EiLuoFqnVb9hZvhpmsbfQ1y1Jy",
  "key42": "54eWLb2J1x7THUFVaZpDWehnQAzzSGVwYem3R4tKwBg6CcF6mRYucAZd89wmStjenquWYVMjKemC83SXx1dvRkhw",
  "key43": "ZDesFmNwkQsnQ1P1yTkBdgrMsiZ7hQCGmU6sAwBnnBH4zkzHXoqM4BDuwDMWVDLCmC2FqKegqMWWQeXPyZujXLj",
  "key44": "2hZHA4caCQp1PFBfpMTnyAder7Q2in5vTm8yH2LRPDbmPW1YdfnsLK5mh92c7GTfAid8GRZ3ip12Un4hGa32fcHr",
  "key45": "3GPfcXkSLK3v2LVCDhgoVz1VHfmPnrxyTf2JNCfmnz5XDrvmUp2oau5LV89NCqCtmsGP1CxnfG8HYpL6PyreesxF",
  "key46": "g97eQTfX1LnYtZL2Ks1Ximj1DftDTHvtJndRX4DP7c5Ksm9NJodikyD6q6ZEVWVK9ziL1r3x1dBTTSysnSPFAZM",
  "key47": "33Nniy8dL7WLKWLUBqeJXbDYwgVoRJDFzsh2htfQiK7ht8Efr7Jvr4PqhfDP7D3zrCe1A4HZJC65e9gcvoRSQ1TV",
  "key48": "5PYDE7G8BbVhx7LFJ786MuigFs1kuGqTVziVFrHT3kE3Ctg6BQdJzXFDiWtrqSHw5hK3LCgfNroMMiHJ15ry6veB",
  "key49": "3FcrTb7dNce7Q7bPiZ74Mbe4tHmSvoQ4beCNcwkZ4A7YNfVbLUi5iZEu2ydrs5sQ5d7QS3wfhicfsrdkpXmqmmsa"
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
