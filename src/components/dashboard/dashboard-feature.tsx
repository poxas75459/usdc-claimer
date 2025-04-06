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
    "7UxaSuokVBnPLr6jHZ6HXXJTEGQsEXxapzgrfkavmDLKDcCx5qCxTwj38YPHHqrQCjkktGyTy8gqfXkcnP8rua9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ojK7Zh8nxFSNX8EQeLBfbhdnaDZnpkPAj7kxuDJgy15rp9BWYuGW5b1vUhEKf2Go22J5fZgrrVXG1tnd2CyDost",
  "key1": "3NyhhCjuEQtPQH2LE3NFFnG81B4qpM5muFMWUPuHwe3pGmyqCjHDGpzagstzWEVFeaFLVCHYVtnVp7rjccVwMxiu",
  "key2": "4AUvdmb3FoxLAQkxkECWdhY1XcaWoZWLMH67ErP79WsAUNCgGT1GM1u77aLuL8dMSZNrkFvdifUkNvdL97qKAgN",
  "key3": "24XW5NkwWpGmriopeCrQUxtKNgrNxYtVP923Pmi81Voysw95Auq24jzBq5HrXBj3MSiRiH5VYwBoF3dt4gAmRuf3",
  "key4": "5ZPrfbYy4raThFJeeouxcNxYbZghg4bWPv3RJQMePPZdGH2H3aeCez5bfbkNkZ7AHvdvTmyBCcrVrUtJFXbMEAia",
  "key5": "Vb1CNqYQK2wuPioGMT2wee8LNFj7uUGv2mJzYu5DyJVNXvBJ5wFbz4z1uZ8QoMWzGi7WRZGuberDiRHrvTqUQbR",
  "key6": "DEVKGtGYKeuNch6yNV8sfa8Zmp8Na4357xMVq14VrbfRpgM8jxW5QEg9VHjKfcgn1HoioQF4AALEJJ6XZw6W2CL",
  "key7": "Wx89KU45SLxzBBNNjCRuF3vseD5kMGBkLEiw5RDhyoPYw17Eh4W9RFaTrEDMwSXL3ezQL2XjU2FVjN9rFCw1EEc",
  "key8": "2m8WCpeEAHJxu8bwXat6fjVrUxukazonsvJpnr7ccpRqoPn97HTroHLdMze4uusMiqvZJaUdXKWhn8fXyskMSaRA",
  "key9": "3AmBF8LtiFD6Wag8WkLAfsPSD9PPib6GTvLFBbYB1dGmsagyZFWT5NCVFuZNTn5reAXPdgTsXYgmh3J3XPETjeFs",
  "key10": "5KGwm8nbWMpFYc5sWuXZ9FKsdr5gjyZErbrKxYrYFxTBzg274q1F9b692yr5DojZni8ioTVQTYnAKaWEZSTaRec2",
  "key11": "2vLDxpUtJkGWFvk34tqh6TxwsgEkvrPQaeuw9ejfTuYJ4HcRJF3t8KVRonfRrijpUrfKw9n6E3ZUzpEkn75TZ8vo",
  "key12": "5Rd6LXn824XZ5GRBj1AmcGvXYh48raoWMUWANUMK4t272XhQZ1dpT7cGcjPWnh6V17dAmzfAfV5ZqozSVmtZ34Zd",
  "key13": "63RZhXrP8ANEEV2EygKZmGQdwPMZ5wehx5gF8TPxw2ZmjNhGu25Ps4cyvfVSY52UgsAV78j1NcugFTPA1LoKJ5xr",
  "key14": "djHn1DD7nCcXiedSFke4cunXuvkYi5jUx5pdjB4Z3wCtQit7iQmUFQFFF4W8FttbY7fzUsgY9UFKrNwRGejTerE",
  "key15": "2bUdCjUmtfnTuxnSRyVvHrdcC7UoKszXEdFufW2qjzD8TZMF1GtGKmGhWuXMszQnZQrCvYcnY51ze7qoJVPaEiZw",
  "key16": "2PQtFBvSnqHgV6AFFStrZWoF7cKMHsS51ycDUpZw1nqyw7yb2A2uZAKjDmjNLYmwZ5U2osPnTtPhaeLrASSFoYBU",
  "key17": "2THyTiQvj5uwJwHJHSMWCPGqWLZm2RXwXjXQ5zAdUdw2GYMha2JxrXaHrrHwAag8xdvP7zVgiqa1wpB2QPYevabY",
  "key18": "DeR9UMQn3Kwinf2A6Tg5gwwy12PPXMLrv9KwDJAg11Cqv6gbTLu41JFzugtMee1jdH94fgryfoTrcE9gUwkLrYE",
  "key19": "2S8xfp8ruSNmzoNM5NxGQYmeENPDtngBBRfJPdDp7tksy7fPzE5EQKhbLfE586emm3WydyKfPaF9sardzPruBfmW",
  "key20": "2hZ5HingCAYoWjy4vd2JCJsca9PJj6RQcDmpzPG7QN3pxSK1cutWUvuA5pbQqkN9JofqbYLXzdmie3PZpfVkEQnQ",
  "key21": "4mGXfbxCVw4ogp5uNBT3AqCTT1AJJRYwGAu1MBeg5sWbCUQbFKdtew5kKSGpFi53h7dsiNYwu5WcFV5eDWSDFu4J",
  "key22": "47etsKAKRZ3CRwA6TcHgphbZfiwCmP4FwEzgLJe1qNGPK1eUUQcCochE8rfzevMHTvihryvipHdCDnW5U2GYG1yh",
  "key23": "5NaFpNKm4b35YZcbHa6yfTqQRF3UTZ9YDn7aWjHTqh9NWnoTozHVcad3oc5msSgYNZcGES8uCNrv5VGCWi7GAznk",
  "key24": "4HcJF1phUHoYLeyGmJZJPMdbWXmBYQWYvCZ9UX3Bhw4dMFcqhwfaiaUHqUJXBPLgNjeVkpH3p8NyU7E8cix3oJNz",
  "key25": "3joweALXK4RtevPCL5PGNQ4k5vWYBFUyqHu8dwVgGqsK2AcR6R2cfJ7MQtDwEvGyicfUbukT6nwPoAeH2fcoRrsk",
  "key26": "4TxUbwJwD1sY8MVjTgENM1ehofFx2dyDFX4hvFz8x9ZhQ74muJyidPJ99Bx41kbJPryQg6m1rzwXuNXxaFqrogB6",
  "key27": "xXcaZnPUQGGXxeBJ9vGBcDPJaJj2qoGWakwBTLVhGrcFCbftZpPVVK8vrg8hGsz8wSQ2dSv6s2R2TJ1fNU7f9td",
  "key28": "5fg14PPkkpX6smhSAvYf9HUrE4N1gkxuyBxjvtMDCMTsQC1a6j5dLoLQDWfqJApWuMPd46q3iQAyjk3YaUv7TNux",
  "key29": "3DhZPnxJmcbDVvbMzwYaCYywRdMcNf3bKVQBYSieCKB7hKbz28kduSMtd3aXXN2aDqLejC511Ha24VgfN88Epijx",
  "key30": "4UhxWdpYPS9i88XgMhxP1mpbUZYoSVCgH5jK2A191HYy5mYdiH85oG1SfnpoNDL3eBvB46DCw5muLvmZBdGn9bjn",
  "key31": "3c8mYNLA8hrh6snvEiKqxmHwvS8UkhSSMNvhuincPNXdrMpeZsPmBsfYEFo1fcWtboq47X6ghgUvbVVJRFPkoFoD",
  "key32": "QxpVwArwKfxyQk52fVLS4xgEz1EhVtfLi3QTSYArH3CLWmnK6vyP4jNtLNEpP1dcCmFwQtKAJZawY2DwHKz8WkM",
  "key33": "4eCXLymyUWxaEKDwC1khWBFsBvQMEMayDR2RD1XpGZZ7dPNmfWHTAYjJnfjAsuNyiBXYjudEjoNvUy4BovyuF5aA",
  "key34": "5qyqz2iCsCr4XUJuaVFsJwbbdD7g4Dv2t2q1N3RAv55M3Yj5t8NAWXggGy6QaBrg1RLggaqrCEEG3YpiZKKe85A2",
  "key35": "2rsyg3eNegNzhRFBjHFZpguA8WpF6iiXwrPfYrrjzuSZYt7RFHBCB3xsVLy8QrFatQkj7AF1SwLmpnjiHdNCn8qe",
  "key36": "44H4b2LKammnMsq5EMZHdACb7L1SpyNCiNJ3jkBo1UXGH4UuMZ5V9g9tiiZbTwsYniR1WRGexvafgXbCNCa6myHi",
  "key37": "5rzng1rJA61s3beEFBGrNN6MTa2kwfXXdFC7TaP68ZcmxC2pAV8MbmrzMyi4Ky8J1Lo54tPMsUbp48hWQ1PbKvUu",
  "key38": "57QwsjkrEo7rooFoWT4skPJMbo3CxxwsNvfWvu8ha9d9hyrqHNqXdmxQhkY7knCJYJmPxVngr4n9sZqD1zsqLvAc",
  "key39": "2oShwF8wFHvVixUeXdWzreLd6PHtsCpqN5JxPgqEXfwetWzPHym8cbbdK7QR2dTu8wE7oLtKAKtDyyHkHGDydUne",
  "key40": "2ytfpkdHZpvaDckDk4y6xKuwDAWmkVnpdk8PvV1wDitVtWHyMTxGfnKZXDaQKxyMKFq6n1n2xfz1jmsyZbamGeMQ",
  "key41": "5D9Mi2Xy8cuM4o9CjCq59bRij4qJbpHp5vJWnQRCsDdzJgu6vppm4dMbXMocnhStnAHMjZQNDU8cxn1XP7zQnHEd",
  "key42": "5F765Pp6M9Da8eYE6NkDHVLo5SkXZ5QGATGKUGARqgk8o6fgavsmrT4Mjcc6tm6M7d1f3kmuHVfSm7mC5R9uAbAU",
  "key43": "V6GBNPMoBSCWZaMWMfWwHyLsdKekxSwN2ZkxLnfUE9vx3YjzpikTWsSQVnAiipMgzZoD59VLFzj866Cn73WQJf4"
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
