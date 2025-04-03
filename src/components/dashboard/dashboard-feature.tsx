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
    "4RuhRht9QL5nrJS6WyEPEAh1b7BzZfEiyxcJLT2FJSF7NcWmfrdqJKzrntD6BxW1oKXwjcDYh5La7TPHbYnho1Ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PapMqWvPYbA89pRE4mVWwPxQP6Ei7hUtNgVGYEePytbPT1gcKEbyc3uEymB1ZpcRBPKSpDpgpKzVyQaui4jyggs",
  "key1": "swLVXe1pomxnhYHxyyJ6h744zygZGHwZymkkqEmVjhLPn6iDz5hFxEMvJJigXz6XyizJAqGVgYPP4GFnoeXYJbv",
  "key2": "wiCkZeympDpoTVPMq1bZmndTPBxu8mjp3UwMH97xxJo5hcmJrDeUsqq16fW6L97wt9m4uULegnDG6Em5CEWdkiH",
  "key3": "2HWGE8Zcjjw5Hp7RHz8ZTWawyFM4Mq7MTSVExEgUh1iG31qtFqTmJnPEdkvAhSX2Tw3NdSTy5dBgWQXpTSkzP9ED",
  "key4": "2TVEYYrYNkNVut1htgHNmA9u5zQZis4CSiybHPe45MjYwnKx7FEsz9bv3dE61ioP7shA95yXJ2Ds1TLQAvbHmBVB",
  "key5": "X7JsjKesHXyPwteMxe2fA8ZDjGL5DGkLKmFgLBR9aSqXJPZXyNyyDY3ezzAEWzqCGqMVwxXH5kBq14YuFSa6sdo",
  "key6": "2DniLjvKZXco2JFExYJjUvh539zzonaBSeiNhv97egFgKWRHBvL2TqJ46kf8tFxJYRyNchgJP85iqtBhSVSjjqqD",
  "key7": "4A4mccErTAgbhjn69gnFaU5qY3ChPu79rYS68Ecp73Cxqd75rFqB1SHJhmZAC4q8w1vLp1zyxw3bCVuQhR1EiHDE",
  "key8": "6esc25ekn2oxiDKHdN3kpEgKDLoQbsEDrYdH59cUYAkEq6NHUyNmLZ7Cis5zPE3dX7G3WwEKwvS55Hbe87R51Mv",
  "key9": "2Y2EygQMNUgPSZpjgvYBpVnDXvd6k5kKNFbFcPRnpVJmxX8YK3MihydEXk4e2F9UG8xBczMHiPvA8rhYNXWi7TdW",
  "key10": "2D2iW8kb1QB1nYrguSMYCyYQx1yELU2W1rRR1Q5tQTSidTXuSj4fa2uvY1huJJzZGdkW9p8dSEsRT9CSDnDa6rQB",
  "key11": "Qm1EYa7KNfw3HG1QDjegFYLAgyDRxbEmcS4sszCCcsQ5FmW621ncs1PJXjNVoW6MtFw4V8aydrzWCVHUzLAszV6",
  "key12": "4P1iLJJcsgCyw4JP9YLaP3Rgh9oEoD3i5rPxK516GVE4d6BxTn6KonBqxBc8hMJJxRt2XdpRvWCjRq86tCnVbi3E",
  "key13": "5J1cvGFb1veavVWJgcR32A7eVGbbayVpKcG8t8hy17F6jDcvXi2PMwbFWEvzDz7abArdYyKPdCawcuoSsSXPabpK",
  "key14": "3jfCYuxMk3UFb36Kx51XtsWnVPpcFgQdiTiVG7Ts765tH6QzMSXCGQfr3Nv6yTH66ZAWaYHvTkMYdQ8PJZ2fZso",
  "key15": "2fCtULwJ8Xmz2qQa1LSfiKMMGSRtDPJcSTVF4pUstyeR9Eaidqj6sYpM3HtFxGDx7rzHwwL1nrZJzc6cg6E2bRu5",
  "key16": "447Bix21LE8fhMkpwokduHzHSzAFNbtaMCsWm3BT55EYrUT73VLE5eeumLsb7s4yFNPuocXyJVu1dtwmifegFPno",
  "key17": "42Tq86gTr88BNPEX11CZDGhyUB1zox1Uzk3xY5ouF45gQXZM5JED3RHpTU2GwhmjtxevpvbYAyVAjuC7nUAuGbD6",
  "key18": "2B8t7MEM7j2vF4HjcB4T4GtTZvnsADHBMB8mwNw6sNuJeqoT3UYKdn3rZinka3PMedwoxYob2H4kRamQWR2MA4us",
  "key19": "5PqnFxwszpRAjY4MnJ42Y4y1ckEYdDSgMPSJuepQpvKsvTvqvpiTthpy9PNdRbX8N87uUAxt4W1tNGJ5PbDB6PPo",
  "key20": "2LUbp3SLvvBnTiZjAUXTEC8orVwX77C5UcRYvCkgoUG4R53PUz7ryr8joDnTpCVbysStLJw1hqGLZGXmsDfopXvj",
  "key21": "61zQ1J37JBARKyDZd3wbts4CiwcYAgiobTM6pEaPNievdssFMTmTeGLWmRQiWox4f8A6ogzTepmWcaE5cvznAcbj",
  "key22": "18MnvfofMg65YQY4pP9QCMyNHi3qZAVXvxvTjYDEcTGFe4XqezBTsrFAwCZg4mhqBh1d9W2KmBxCmwmRzYhJa24",
  "key23": "2nVyUndY8T9VX26Uhr3s1N4DicKG5AmkgUx2dvynziuiJZbtAZF878Jpn6NWRjp3crfdn2gfbDmqPMSS39qM9XmZ",
  "key24": "BcRBa4MqadPRX2WT9xof4UVN2hwENJkubUus9WMYkPAotYPLHyXg1EqWCiFWtyrDqEPosavXW9Ux6xmSdwhksCp",
  "key25": "4kSdGFds9UFUCDD1ctT6z6is6bcLuVJiJNDhD62jQgvKBVRtpnVH1tUE2pTsrwCsXGBegPs1eXiEUpeXFR9piGPb",
  "key26": "429K4ai95EGJ5FDLK7K4zWwcQed54Q8bQPe2LwVoryYJyz9YhpozjnqGXHcZmhknAYoTwN4XjotzBMmL8ALGD4No",
  "key27": "5vvkQ42kfz1b8fhknmDD2tmwsPpHyFWsxkbFgue11PZZgHwzHZboZokTKc83ULBqb5jazbg3ovw2trefdJLhRRqs",
  "key28": "4meYeqrjggDSGxcbUFCTVtnc89ug72p6PZrK6FZ6jyndLNSD8DzjUTCxCTPawomVHG2C3HqNRc2RPLyTPZNS7GmN",
  "key29": "58AsGdw1bqq9uoqRWDXN69zzGhfhjwWmTwBDT4YNqicaceyj1Bz2w11cxYT9bWqSZs5KZE1vK4iVVE5vWZ5xUe6A",
  "key30": "PzxDCa1HoFuEQJhAo83QqVctA2eXpZN2Wbh56oKmkPChoYNFBV1dhiJ5B3h4AtetkHB2GhigQXFAfdpxnQVkjrs",
  "key31": "3vvykk7DotWTzj411Pwrbr2FGnqCRNSRFSJj2BJyyNDRaHvFhhTQzCvk6ng9e4FqwaX58gG5MNC8A27UxhJ3RsHY"
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
