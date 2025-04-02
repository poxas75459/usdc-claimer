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
    "3CqX3mabKeo7M8KkjA48dJKkj4LK6Eu5tRa7jpBR6kXpRwK62nMLjhQvdJSRo9b1zSbVgZNEbqUWxfTZBgstHgeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQ8cptTgF8Ypx5q7mnjHL9AU4qLD1oNQkasKxp4hyzDDK49Jsw6ZHosHPdC7XJBHxRqCa7wvSgGhSw9Yc9HKbMq",
  "key1": "2TaLU4aWiG3J6MWJCjJDLa9dkVWKoZUZvpsKrTbhaE9Gd9nE4SVNBSAASE4E1ufrudC6Aqry63kWFUkJqg3LG5KY",
  "key2": "5DW1Mjhtv4QSXGURaLtfjPwGuQG4opr16S3pWBUm1MhhgGdYbwLMtNYRhTXQgRzvZwspzk5bi1yQ6fovxLHS2D8X",
  "key3": "3jPBKB2ahmombM6VvgUgMYMy9en8hKn2EojbMZwqomkj8h16Eg9pHnvbCsDYeyzPGBnTqgtgwwgSVPtzQHdae2dY",
  "key4": "5wNv2L8TynyRuWLSiGs88Vsd3mRnxS8f2mEnmXeBj6vDsKpfWf1xZTtusnEs74kf6USC2ReUurPAeSKrRx5WsW2r",
  "key5": "3YkZmb5xeK2SpKFrr3JVrkBNU5dvnweEeSozbHkfwxkNP6TuytJzoAxZkjMFc9NHu7vWCVtqAj8e4ETSRKF3PxUV",
  "key6": "52GXaG2ugUMERFYzHpEYp3uLnmzH1adx6srq6Esop3PPooWpmtJ2mQDoojqSncWpctmdX7CdaneBJaz42hXHtEMZ",
  "key7": "2a3eSB23Rf5oXvdQcEQMHzRTNFkmmt94hTnvt1TVBhL8GTKSfs4JXnDJRQEzSRcRXqFcTgC8kCeuRZpSEvKMKE1M",
  "key8": "4aEG4JZqydSJezYog8SbKSNaQAEFfxDLmTZQWLifpf4u9qsvgWFEXsjiajeakngDJUSdSNTpbiS3DZ5A5rhmHTR4",
  "key9": "5Vx2ZKDrLx4NwCCNtegxokkkTeLsPhAC13HvCN3BiDwVUZgdAANJZr5NahJfXknZNsXLPLdwHLQQ7rBSNwRdgfbz",
  "key10": "iQhT6vHEfz6uFumW7GeuNPeqKWP6ZEG2s5orud4b1wBvdoCsSUyTX2475v3ArnSFHDgbDTUg8JiGWz2dK6nYNfm",
  "key11": "2SbeJunT31FENBMVyQZnQvMjSNsFHhFo5YG3czvTFUCUHVVQzKv5g2TuEuYnE6mMEGN5saHcptFaC5UJ8xqH6BTW",
  "key12": "4irVEQZ5DYnfz7g6vJN7WYfDUdFwYzZHGcrZGj3HuTGQeNTqrp9BZBteCnaNePfdouYiN84nZSWyHHBXT9hUWchW",
  "key13": "9kXkwxGbHDBUVEbCGwiFxoVHb4RqGvGvL9E73npFZmmdLNVDohyMrVT7XKJh1ciK9jwihHRHi5MFgac15naFhPP",
  "key14": "3Wz51uCqsxxEY8GbWoQZ5HrZzWdcRbq8HiDuD8KgnjcXXbfcMVtyBwjRYweUFhUzcUAayyy8gBDP9q9WWCoax7Lx",
  "key15": "4LYWYA3A2JsKfdoB5Coo7qjobXaws4Ymubsw7HAvxcjzpS7ob6rqaGsK3ZtSqXwjS3gYUwy6CVbC1T3R3jHrj4mg",
  "key16": "3ovqm3Z6AamtNaaCRFQvs5a6spRAR82YDBeZrqet6FSjuXK1HJ4MpERnscS2dQmEXMpk1RDNLup7WGXGWipnpYJY",
  "key17": "WgB6QkbxbS2HFYoHyV8gwvHoEmEVcU186wxyr1RQSwcfPwxxaeU7kz72HP4pe8mqi8ewYWXbnz4rHXY2A9dhA4P",
  "key18": "3KT8ZYeMtSBRfZivQqce4AFLQBPCcLhSC9LxzHADjGCky8c9HWo6HyHUQCEoib45dfTzcA1Z9cQ7hR6r8WMEt2NU",
  "key19": "5pCZmNzdy7q8xL6DbUcVRun5KmTW7LzxpZj78aVseBfi5GFAq1p8MJQuHsohURRNpKrjC8fWHHcL6SzoHH7Xf9Td",
  "key20": "3YKDuFKL4ufDCJg97b7T36apU6kVg4ahqGjY5zfEVa84LcPGnVRCjje9pxpAtoqKNB1efWrhGnwA6cFjJp2sXudh",
  "key21": "ZAuAKoFy1pMc7NU9ye8F3DjMygj4S6GwWVuCZTjLDZbCviPssPe7AyNFjs6Eua3hxxMcayv1vbdzVuv6Dv4TQre",
  "key22": "nqUFQSwvuTXnowvd5xzg3omCU2Fsqg1KCiEdQXumVFSdQi5xeYavhZLhKJ2R3Y7W8mEMoEPc5enEhoJnVLuxogX",
  "key23": "127xt6JZkymwHJWAZFY55YbkMjU1pmq7c9w7xKuBSdd8LqGZEyXbYZQ8ae6NmtMnjSKSMGAN1Jsrn84wGqgeQiBm",
  "key24": "woYhXtMnrWUoR8tuqS1XczWpf4x75MhhMtPCbAkHu6VdnuzvpjP1rkEJADHvxNNw2qP21iyoJ928SCASCiFV7fR",
  "key25": "493Q1PQBhYEVbTDULgHfczqWESTb7o1wJpoANuNnzgguZiyJNrZicLjn7WUjHKxzqd4YGJ1f3V6b22EFHgCMjTt9",
  "key26": "XiTnvzEE2a7kVz1tBXCywoCb6NoxoTcjW1yNWgmG8FbZJgX1EyLSAwAnoVoNV2MK7LpEuRBSpocLyjzaoyrK48T",
  "key27": "hFu8MZUYVQA1LD5WocdP5Wtq9b9UYpeTW7R5pvUUhWGsq8J4CGCHqw8brJ8XzhqmaPxbcn4yonUdMGK7M3QtLfz",
  "key28": "4dkwHcB6DLtoepeRKLsEPPu6K7ADEEeKRowaHypq4UtvYvBrAgCXZv2xKXnDJwpVpK7z4GbhXRNqd6aHzBhwXtGw",
  "key29": "3gsfzRW5Sh1KQSGGGj3qp3jXiqkix7jq2WsvfdMPBgjuH7AzsaV4zcmBSqsQgvd7oXVNeNwYWSkdEcSX4Sok3Sp6",
  "key30": "cXT84MbUGBLVfoEUhrtn2muHiPuqkr266HJQRiCLyWWAgoD8rSBtbyoGshR5LHp86XxzhJndFALhDsD8ec95TKx",
  "key31": "54ckvpCXMWJYhUegr5NjTPpJF3VuJ9jANbV7k869K8RR9rUU4LYRqEfQoEEB5ztmGxtZW2XDrXgiqeqyPx6L2Yh8",
  "key32": "DhtvhQrUGVxJ2K5sgDmB5CLU8TZEW7QviVuRK7CCjRYriCuCcxSAycmCnQUXx2oiTh3YsBoMiLmmpA4ZBPQULpt",
  "key33": "5z4KJwXqoX3bY759cnTMHftmbihmHk636dCncPaBYATgLNYr3cFBGGtoo8KtVCgvfZvt9pjHeTnEktZFfhd23qaQ",
  "key34": "4mD6ExCxZPP6GSGvEWnBh976dphjJKRofWPx1PubkEzBakQBrDzHnrMSA7dLayFtwFHXoPfusZXtvK8nq2eVjJKp",
  "key35": "67gVuTeAT9sWzgMc4DxT4kZSghUEDyPuC6w3hheCHY4nUFy8QhgkvTPdpnbZqPehbiKPM348t7JEpDUPscs953w5",
  "key36": "2Ue87UNnMuXL4mzBsx3C8j1dpWam6vPWPAnYaX6Yo2REse6ZaxcdHcxnUbkvxkDkmLoR1jyzkPG5x1XD2LymBH91",
  "key37": "5qQYG8DP2CeWLTZd8Q4sbvsLR1Vzv46uQvkom1aaqNuNAgJznkRUo1kdww9H85uwGysfdymtMJxv5XaCBkoQPsf5",
  "key38": "2zLii45em4Nn9qWs7N3JddaU2EmGNNsrBqKHqU2kAMdhnVogXawWsF6dN913RqxxxXauF4Y8Rd6iCfqGRxCRtiSo",
  "key39": "3RBQebT5Fw9QrPm2sqdA1hQch1TY3kaNSRPdCZFWBW5VTtMeZXQDi7ycRxphVxa4QH8UzSiVEyx2L5CNX8umygLT",
  "key40": "4eSxiZUccknZBSKCmhAJzTjp1L9WLyXqzPhZZDCQDdXw85r7Mc9gSbzKRMw4d9YNhaxTX9WYJJ57Z9UQ6hRh9yPG",
  "key41": "3bkFCkf5xmdj4DsMUdgWdjPxpdrFfrRCwtCxQ3uSUvzQ4rPnGTgzkUJCKEjys7SDH2hTZKSdKvLyTeuPZBUumX4X"
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
