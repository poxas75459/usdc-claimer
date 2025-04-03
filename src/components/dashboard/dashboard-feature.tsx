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
    "4ZbTBoUo1NLG3eWmCWT7vcjTxxu3L4xif1trsSUzT52yeNZd2v7qfvYPkpdQtMkiSgdAfAAWycjsyRyV8fMRHHfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GYSRM1tD9cZ2RnenBNLBZi3iRZqNKKWoLCRibstGwWVAghyyJKHDAtEeT9RLuFRdZuFLVGRdRyJ9dZyXZWoUPJQ",
  "key1": "DBefe6imbKQBLdFUdVnXm11MpWKek56xdimgmCkLHE5fnE5Ym2bJYEdeExhKbg5QUVjtCNPgUVTrTWkcDvy9PSV",
  "key2": "3ttZiBoo7jP6m9gUA2B1Ce7RTqmaomMTXo1Y257zu1og5vSaP5y9q5SymwmTeJWQ8Uj9G2wHdvkfnFob9WbGyWbi",
  "key3": "3hEuUgQ6ifDpxQU8umBKY4978cV3ePPD63VojU8ibgkdSyUqeUBpp7QFNL7vaJLE6zVK7Rsjtbtk3CcKYQXQPUdr",
  "key4": "5vpzSpubYXL7iCnDnKQo4fDk5R96oh8JiYrdsYG8mttcY1kQyKmWv4zARNUwgwwQn7Ac4j2n5L1QPVb3xaedJMFa",
  "key5": "4a3Mqv5opkvHXjjC4SaxN4KYtM6TyoMp1oSGcVLV2VxT2fuAfTVUtDqEgbzu4SaZsTZojePpk3eXSj58ZsvA2i2t",
  "key6": "2VYNJ25HfaFxGHU5k99RhU3E3qocDdtMQUaCdd4wZAX2hu6xt69cQHTzecYt1azXuCJkrutsvQF5YY8x73cSPJKa",
  "key7": "9L8eNCDMJtryaEaeDTShFwDLh7a4qDrLznmjUoiuRaV3dtjgv2ehgRTLGZS54nmLGg2Hcyu5u7YZzVEzNmg2QRi",
  "key8": "ST7DJyhKz1f98VK5GMa3vycGScS842TJWw6JPTHVvj2Tdk2zEEmL3NxBk5e9gDGSqS4VsxRXw6FXtdQ7By8nigZ",
  "key9": "2RhNE2sBKRCDpMj2ymYUxpN6LtNBTsMD4iwfqDrR4zeh7RyrBkqjK4Zb4DFLMxQLnjFYBJGFRydvixSeoYgv5r3y",
  "key10": "3deaaCEoQhy98j6TAyRNfSeNenTTHYcekUHtdsmeg4tRxZ1avcMeYFii5fgDk1CU1Knf9dsutg9jpJyZZve4J2YA",
  "key11": "2sPSiBZuF7Pp2RSr9jhsomzue9jQWu1TkfrUsVC3kPTJFM5TyaNfFqMH7YBgCSEUahtdhkuke5nziWdFPZtAZGZm",
  "key12": "2BGLVW27Vfw6hsVhDo7bkfYwdw7dcRS6esJpZAENPVxxt4TVuK86U2zSCHEnEgJZcRSCRJCfT57QppzcsLs1unnU",
  "key13": "4GcEHvkQdyb945SB4be916XH7DXrssh1rJZzmVyhMxHzhzf7yccn9hQFZgwV12pdAqoHXUzawWuPvBe4CjcDJDzs",
  "key14": "aB1uPGYvjx1EiNRfSX2jqsCjbnmnZx6owozZy2WKXsJi4n9imQ1i8bfRvsSVsac2CPLfdoUYbxJ5eQwaksSnogP",
  "key15": "3z5xjCiiSmgSSiue34w2kCzQA6aj4XfSNMy77mej2KrexLSfM33phed8mn21MTMEDkXuAf8xViVgBsXJw7xbqjiU",
  "key16": "4x87hkwYfAAhHKYXnbqHTcJEbsGTaf92xAx1v6GxYPZf67eCbqwo7yZngb81K6bf1ohLGr93qzU8APnxXdcwrm1G",
  "key17": "3sBjxDSa5N9xEXeASLGpEbDo73Tw3GURsfcrSWztTVdHm2NmPrgknHruvyaXT1P1h9bes3e2xEtCQTBPezPao1W5",
  "key18": "5KQEX1LQtARRhgjfxS7uebRA6JHF5PR3r4qyTvbGwa3w6x2DXVPgXKCstmrXB53HRz8LAVnY2si1HEkYzAUapLVu",
  "key19": "4gNMm7sfXgZwbaga3VXAHvTj62goatwC7SK1AnsmmLNQtLrL3gCsgXwSLp5vwD9UeLb2vEzHEsVbur9QsZJxLpra",
  "key20": "dE5wCu5tf8JfLJjitg2eW6xG7pNTdqcCiWPBz4XyUqNUC4gY5xZ3bEF1WJ5of717H5qKb6kuNhCcZVKiKzp8fUT",
  "key21": "4GiCVZpvmYniWkrn8PYgTjq7DqKBYHKWiw8hWX7cF27xifcbyvTW4smQ5WnrNVA2YHYHc1WspJ345S9vZXaymH9y",
  "key22": "2C5H7dJ6QHHyivmCTkMCsENDEfB5qFEZPsBpNJhBhf1f8zuho3cRiocLFjAXKGdGiFJ3gf4cdh2vKcmnzPTCJYt3",
  "key23": "5JqHLKyCm9NVwVYWqTfMSQyh9AaeHCLm6L9oDYekWzY8gg53tizebrBheqEDYxmpRx2T6xAkUFie2ptcP13a2epH",
  "key24": "5g4A6JQdApF4VNjktUJTwPR7KbPowQq2oA2b9svVEcqyU3Smhw6sN2BMu3NYKakwuxDRK4HThpMvc8bGqzKCuxx1",
  "key25": "27yxnrxx1RVCicVURwgSvrhGU9vxq2Bb9rozA5ba5U6EY1XJDAwncjm5gTZjvE779cWUumbNa5ivj1dTVxPj11U7",
  "key26": "Q7LRvQdWp3h7RPQ7KL6sJgXQuZSsPXMgmQ8Tq33hSphwNbh4vJLE2whCJELs3HJFVNx22KJ23urqjxYNzDFNEnU",
  "key27": "2SMUfgS1rEyoe6cJc3PFpFbdR9ZkmfAKZ6HccRPcWBMu6An3p9avtR894LqrkWuyNU9FqFZRa1xrpnsgLWUi4X4Z",
  "key28": "5TLsiXRpkjWkEK5xcnqiM9A2BaP77vDaLvhfVC6pVSdyQXL8hZuQjkUBVqo19SBSnb8TdpGJay3grW9S1AfMvzVp",
  "key29": "GnrAChspBeexL8CUL7VsPh7kpKABwaY7hhhUezb1a2c1rkVKrZGa42J1zSS9ZZqS17GKEG5SVQRpTjUmVMzkhTG",
  "key30": "EtAPXWoZ3xztXTKHBKGvYUMspaVrv2HmT9zPQwC3X3hfh8e3nh61QxapmdvcTDGJxwmuKJ7DJYcMrrqfciZEr4H",
  "key31": "3dbboVN9aVVRNZGHWCt5k2C1JXak5nNtMSaGzwLAUvnC89Rn1KRVcKiKvh2Yz97KmwSWAHrVC2JZZHi4asJyZWsg",
  "key32": "3tksSmUyz1dJALhHEv8VYfEDG4yw2M2htsWangKpTyAU8GSdGDgq7MNfP3vre7uBnDzkfYJNByDQtPLJKBHFy72T",
  "key33": "65ZF1ALNbVXm8fwEJ3ynLnEkvDF9xejN3QJRLy684m38ywHa5aP8DMCM2Poq2M9Vx2dqFYqbbECYktjhJHvLAcQW",
  "key34": "36iy7Cswh4DfXSwPVy71WsA99cdpDC1dhL2YT5h4JvCJLjznge8ChA6hTCzaFP7tCy4spqnZrRrM9MwsjhKA2CtM",
  "key35": "bCph72mgG3mq4JppqS4tSuHrFkuw33xiPA4qa91RpD9eCJ7P2d1b2BVaQXo8uQomWNWZkD4rKVRqkGZrjz7sMSf",
  "key36": "yGgPRAvDWvCrEcBPDCqCAh6eNsN3BPAgQt7EoeUkhEHYudTKohwVxiURZP5ehm8g5fDUdDxAyDQ3T6db7foXDug",
  "key37": "2D5S7wd2sQYKXjsewyUTRtsGWVJgHMedtqaspANuEM9zcsg7GhqCbbcNM1Kmr2ZaZ15a2jAMY7ZPcfUNSGwrHv16",
  "key38": "65ex9CxcLovifdzKRFgoevwB5dY2XTm8Bf4NiviKifuakFPHVxYUdVcrt194XHfi11WaguFm2edfeydui6zrRiAE",
  "key39": "NyjgZvs4w9BJHvh52zDFQa5qfybVXrriD69QmXRSmTdvb4xNkrsMNMjFnffUxYqd1W23vPid5bG7nfSLQVXUpBu",
  "key40": "5tdwiZQmKsBe5SUn1yeBEYh7yyMpkgKwiqKLiAexFsTjG7dZTHGvp7XjUUkEGiK4VrVp9s1sZGu3fm2wD5aAgupP",
  "key41": "ameC4r1g3ALTNGYmS4Fi6B7Nx2JZpyRwQqQESSkpYhMv6zpEJTaCT7bXuUFbyB3phtzdaaMvZzisbMQmtz2EZU9",
  "key42": "291tnPzf5jUc6kV5oyE13jBiS9NiEVwRuPBL3vxoqG5TTShPfSdajQff8PB3mSGfgCw6BQ9SriWB5S3irRJrjSCH",
  "key43": "dJ1oXxbrqJW4TynZAoxdLTvzGW5GAD5mpASAQWA5EAPk48jbJgCdYYRD5CD1rasLYifFVqZyfP6MVaN8iov92jG",
  "key44": "5BmF9Q98854yTeQ1XYTFy4ijU3p5o4Cm23tYUrtooAQ28KUFXiPrqxenm8W1UZaRSmqFGju4utidtCGrBVoK68Us"
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
