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
    "3D75oLaK4TAKfX8mxWie99aQCU1hBatHgjSG7c6H2yQinVZ71kFPL8RXSBQunHQiQPX4Eb4CJcPxAZKRc74PMzUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bd9wJx22UgRmMFnu4YNzAxSFCJAonYiTFhzdhn2BHEHa2deqMTx2icFbF7FArXPkU1MFt8q4H5HpdrTHz5wSYqq",
  "key1": "3pBsd6pDMaZohDLHUio4btSau2B1f7Uf2kKXELEsSnsv7FTLpipkYNEAGAWs9J5n5eetpB1fs8yr8QwzSXuENvpq",
  "key2": "46pRntBXpa7mhkgNQF8jpxRNYbCP3BnMdPJdtPeNHoSSwJoatbtegStkwUVHqcMEa6SMyzcvXBbtVgVAhxxdb2SC",
  "key3": "3kRno8TRPSmmxC6iQ4PhZtonnDJeDWPQkNv2bSNPBCPcBseHuu6fP5V32epotR9kCL6whx9qW2xYzHdTggEDAMxT",
  "key4": "cQSfdb33hMA52VkDRrAPnqdksiyPnyRoTP6zS7dEFZJQ4zvd98Tp12NQKz3pVm8EkxSCSu2u7d9afUD6NLiPGyx",
  "key5": "3JtQV6EhRt7McA1qxyskxNocuasB7rA7UCcNbuqzU98SNmKhxdQYVH7JR2H5a5JvVHBJR8qtWMgNL695qYNsaD3i",
  "key6": "3N3HgHNKghhxZqqe5Qk5QQRsYJJMkZsYNsguKhncnRCYXQGAaxEQDdH1xPeVMY9u1jfirYD9715wJVp4ddPQg2SH",
  "key7": "4T3ZTdFXvH5QQYf1CFSne35RN2JbJJVD2g9Goicr7SVTZ1dHxnwCEgjkkHk2QQJKHMEuJYzpFCC5y37kepaP2FXA",
  "key8": "4KrYBk8tCHep97EtxLAgQkc1hJizUuK5NztjRTe773Hbt2CFgfxvSwMs8RLR1sVSi2DpszwJasjCZo1ukPvuGGyr",
  "key9": "51GeV8vDGmeaz6qQ41QPPV5Rei513ijentbn1Uxk4VqQymmeEtGfer25d5NpTAdZzvZ7Ym3xBHMHvy9EgVUCuCcm",
  "key10": "WgzGYTUpqUMnwnucG7bVDrYgDqKcubAhYk4QNmyJK1cajcEGXV9ZKEg2yFW2drUnP8ULVEFGVwhgfWqh55m8t1H",
  "key11": "3JHosQTC1KrW98qT57Wy5s6vQ4RWBwKb6qgTgLJRQeUEsaPNi5X6ZvE6SrTWgdZ9MTzLyNA5tkxqG1boq4V6mpqZ",
  "key12": "c1bfw9hGbzCJzbZyaEuxEyENo2UgRosaTEosmnhpmfDXHKTnyAdM3oKH61JRYCmAkzroJ4WPDER3xC8CWwmw9Hf",
  "key13": "MYwL4brekDN1LL6XPWJYk5qYSuqJ5oL7v584W9ZDsKSr4b4Zh18kBrKAqm6gmhwEiPiVVF2L8D7KxcBqoyyFq9C",
  "key14": "2DuyGC9y6q1Ms4CgYxHN17eBftrZwAuUiChwMpA75EwH5RZJWikMtCmfXs6YkJp7fauiP9rvPoGBAPAUK8yz23qM",
  "key15": "44yjLaefUjaetxZjuZvp9B7UNyH2DPdYawaf1A6SnpJdYm8QBiTutgotDxyFUHSeAzE8Vac9zb6MnYtUm5mdRPmY",
  "key16": "3TBeH3rWchJ8LLLfyWNhvu6zCuR3C9JE5JWyb4zjvPrwKoemkVydLcHx1Uk4mNfnVTUrDpj7WaUBW1z7ZVjLP1Mc",
  "key17": "3XFgQyrjrWhU4X4UAZ99KJqUWRkFk1JvQVrZ3xN5CxtXsvdJoCSptKgHDfJ3naBEiMtznksd5okCoA2T55Vq2GKF",
  "key18": "5LzVrGzfMfNCDjEA45JzdycbAinvNKszCRpwUbVF7Y7PrJvzRZQvKP3ZTsAHF12sv6DwDqWYovrAjy36vNvUvr7x",
  "key19": "66DNELrP4CJapkjavpMeatqCeV3CLAbTTZn8K5kjSC1goZHcx9r88py5Ls63p87mPhh3SDLtMKWWiQDq9DwrrKBt",
  "key20": "5iToHnhM3cZU35Csz3oPfaK5FmPiDtg5Q4zFcXxmxQwcjST9G5YzLGqNFRfup7HSmCfCZZVb21q4LqjKRABgxuzV",
  "key21": "4LwPERc7JamdMp4Xn6toFWBcV8gf7gPJB8L3otc6UCZPQJnDX4NmfRWz6LqwpUD7GewiQL1SMpKiy9zwBFku3xeV",
  "key22": "2Yk58jexsyKjHZTsjmPaDMezqVsZfBGTzgvx6uqhU7cvKLCxqYHadmhLC9M5cRsNkj63iABHpr6TtYDjyANDnCfc",
  "key23": "3PomeXtaPNLuo3sxF7Cwo6Au4zGiefCRVBsL75VvhDC5G2ik6uySN7HZhNiddac65G9Gxp4RiFzTSFvZspVpgkxW",
  "key24": "2BBFmKHJWpEMq1vwqNjPmhutERdd2MwVu1U1B6e6y9bJdh1QRmWkRb27QQMhNb2BDAwyZCgsGjhjUVo2MwTaKU4a",
  "key25": "SsiTdtwiavcakHmazZW9Wo1wQHgGzT3oYeeqEfdmDro4pTLdxiDkzFUDfGSPQ4B4dJLdtpPjnna9rHatdmafoXZ",
  "key26": "35kVWF1AouU2PhGn5m16GbUyrA7qmW1uswswARXULawasEAFzwjXTvYHWaxtjUApFvrAXD8cK2GTPNVMrkY5Rp2o",
  "key27": "Z3fzsScRkUXPqAaPPQx2EWgLP2ADuVVwwA1jKZJQ2r9mTYDKMfG3bBn2uS5WkupKA2jzhgZM8H2M235fgEw3cEE",
  "key28": "5M7pfATpDsFbyhPXyiXcWXikTNHUv3pFqT7QPmuDpuM5Df6bJzUAW4qoknrMi3YW3HMrwjYLgLHDsw3raEAk3uT9",
  "key29": "4cM7Cyeh6NYHkbr87TKUBsT1UYDFUY7sDvztYB5QNRZo4ucCtHcF3fF46kCtR36ekVgYK2FKYNUWUy5HznKZ2PQa",
  "key30": "3uw2BvLHVBXv3wha1Sf2BaSPHk825YKuyNLZt2BkdYcyE2eRKhiLPfrGoUpnxi8GC9EY63a5br4SdbmLrzAG1kzU",
  "key31": "bTk1L1tC19jaWR3PcMEv854vMmzbEgPt666zaamkekjfkd6dwJZ8jvjaDBn6DGqGXYrT7jSpAWjYVKPT3CSdYKu",
  "key32": "qwvqpqKxgNQ7MXJeeZ2s3EFR1DAia6MVfjFcTcUS1mSusYfL2UzSV5p9HkGZhpYNpfqL5YyRdrmPMVgTQHV6Xte",
  "key33": "2ey4XUrqNXQHC5SeaPPqjDqGoTdKBEqipYCkgthr2XBWFbLNTRr5kZoggjGMY8DiLt3BVnQ1Um4vRc2JKPhcfsag",
  "key34": "vajiiaAquYJjnWeDcFM3FHdmM5NDjXoi8SXrSmktMtXVVutVAEet2jjws3ssdfHza3sA7nPfczePHRZezKJFaYq",
  "key35": "5vQwd6mZzUyubD7AEksTjYQ96k4eeQ9B8seUJUr6HBpcMyjo7yKTKAwuoKk3cNpUffspL85jwxXVmvVHNVXXpWDz",
  "key36": "5sNmDgAu8v71wHxGymHddPwoanGxdABhF9UEt7mGuMQrLkWwZiwYWnDSBS4YnP944fB3yT2YBpc4LLSDBjt8ixGw",
  "key37": "5FYKTWBg1VmQsd2sBjEmqDGfPPrQGgxViPgR9HKKqKjjLjLqXLwg2Dkg4VydQdngt9JKEoBxVao2HMkdEF7448Tx",
  "key38": "3yiKbqPSS4Jz6zmgXQdTMqTj6cYmFy2WLNppr4qvDNg8N8ZL5YUqTzr33gXpPeAZASCDbDTXotwkRAeN6ddhPNyc",
  "key39": "2ZD4khLUqjoUUYV7qs83vTjNhGbwTessbnp4a1H4qRroLVZR2ypuHQf77fzcYhTxrLoQSQuYchTydoUnMjqtAxGa",
  "key40": "2tgwmw8F7JCVefS9mHJjjoKQw5hG463tZf6epASugCtBz2xfguZLEjzpUzJCuRfEPdtFThidLeXbaaHecn5q7Ay6",
  "key41": "5R6SB7XdtUbuLPr3BFrYujudwX9JN8KYhB6F6AtM2fhk56MzaVY1W9MECQo8BPCHxADvz4itB5353Q7S1fagzN7T",
  "key42": "4o7xem3FNnwAE8YW6qpEKZEKd8wZez9MFRbW6Fd98QBd1qeboDJp8NdPLJkaPkXQ235xtHCN8XUVdHF6Ceph3pp3",
  "key43": "2LgGE6pyQ4MtNVBHLh8gKBe5oUcMiwCuJduZaQHLmMzcW5DdRfn5e7utDbkWtajk5ioaMmqpbAzN38UHmCi3Vh9A",
  "key44": "4YKjNmcE78zurPhMvuzgRkz15xyL6774tyETwaGGBbMXL6i99tEcjJg7HuU9JbTLZkMMYFRZKvqxJZ1AEvKz9xPv"
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
