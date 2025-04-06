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
    "662af5nT2JdZyR3fNjrq2xkFX4dnNp5cqp1cGx11Y651aFyWesiUaujLLpiGDqFoFdvgrEkgf5uQ9oog8DJRsFvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Vrt8CwtCdVjzPkWsd7fm7EksyjiPabaiPrvEAWv519Ed2Ygan6V1PijDB8ckk4oQLGzRfFAqoDMRMewXTaWL91",
  "key1": "3bqoQhU9CriWDXN35ZkJhDDetT48guaH5yGRxAPqZJvqsbP2Ldv4b6qX3KrwS9vxmEW46wUuGBXp2W6Vk4wP9HLG",
  "key2": "42qaQ3ofboAabQbPH7PAHb9MRuKJaB5LQPXBQEgVw7dz2HvbAd3mV1EisFznNR3fLjYJAYobrRz6zYZzz7o3p5Ly",
  "key3": "2Cxr1DpAhzunsn4i5RwVcCiynpMRa44VToVZ9hf3zACe4hw3isFaUyoSqXcLwZkmWgdDVrRSrDKn1FRT3oGz95Xs",
  "key4": "2V5UUgb7Nsn1WnRQ3GenQfJTwpNeyqy47FTxucHnksSbkk6tAh7WqeDJVTdaJGa7s6dBfhvwxJhZrQt1uN8jwCsk",
  "key5": "2K3xWVYkSNCLrnxPsrBthM47A46KQy9k6qcsgDvHqVJXD7cpcR44zBsHH71TYcMULNqYqXPDg1piext7tijLKncM",
  "key6": "5cKDqjGButf1oWAGxLEq5bY97PcRwkKi6MQge1zRubPhx4enz25xmbsx9EZzAN1SfYWaPkV5UVkGGAYadPwN9iFe",
  "key7": "5CdYVdr34f6EBc6E719teP5cPsYmdL4pEmj3hdEWEofzLNbYJsTLZ7XjtW376TCn9YBeuZsmveK2r42nv5BJFwnL",
  "key8": "52B2GLtfD1Yor6sNpLi79DANPeNnweHaU3yhXMzCcmQMRSTrUXiKdSEdohzqxbP5xBuLDAu6vejxuAqkWW7u3rYJ",
  "key9": "33GBWpY4JAY3WhT4e52S1PzPu2zZDW6oxH6BmGECMk6P5Ws8JpVA79Qso51os4EudW8d9grBNYHECi2oWNuMo1kX",
  "key10": "f8bVQpAjJVZEs24S66A9BU6iQuAjseLeghKdBHeusroJeD1zhh7mEU5MPrr3TC8GeZUGc73XSNLbvJGQDvKdSxN",
  "key11": "3WpvM74rn8xbNcKqLkdbyA1BoJhxGXrxmJEgYkhggATyVTCAbN9VtqEXwLfex3q8ihEHE1EaNvkMAU1ZExFshrTn",
  "key12": "4WbQmPtfmR5Jb1yS2BGZuk9oJc8WSPy6oDHXtypF8mKNbZ1KXB81DwQ3pfVeasDLhUqZ5bF36G5nJyPh2dcKCAFY",
  "key13": "378ffRz1Df8B5VVdB2NGEimE1uz2oRzVN21tKDyZyyYQCvCGrMLkEXgu7M5SjPUyx4TGvPUjKfqvJrDmHJCm2fX2",
  "key14": "2DtqxjsssKkathpQmQP9drGmxeajnrT3Ueyxm7KWf55b6RsEHVp3B6q6Sf7xrDhA5FbaYK3r5Xufo4v7BkqmvbQH",
  "key15": "3XsVKPKLB5Ew24iqvmsXrgnhDSDdQeY4k8DC1UdZUooddT1YoVXa34RAAphuJd4NoVjm17UWVk46J3bgqAWWzbAN",
  "key16": "5knQibUzNEH1MY3rncXzgeS6EWsCsTVJd9yJiWjEQtVh1NBc6jCqCecu3dLyxFhPwVU4ABWuXAmtgECBH8rwms87",
  "key17": "sD1BsT3nc5Jq6cuR2UfNfEgH1KdtGj5WuFVGQaJvk8PFjAxcp3Tq81NayuKFKtP9m6P3pfPAw6CWkrYpQerjp6r",
  "key18": "53KEVGZ56rKUTvsGhb3PTEQKAmZ1icKkioLkDj3VRqaTsxKEffkbsD6AEr7YRg7nNJQctZppZFHSXS537FKLG63Z",
  "key19": "3XfrwsKEowEgFAhHx3p6SpEvbH8Z8f1bUWeGFi7Ped27HaWamPDFWRfMybtLexpHPDx7jzVgnwiLEedsxtUX5rDA",
  "key20": "mt12AUC9nRxyjQLjYvXwBnbHHFM7Hg2pwEZ465yPNvxmJUzDQNM15GCURMmaQ1XQHmCrPGP4E7ksU8KXpy6tXLJ",
  "key21": "5B5K2DmkfmpwCuSSEFoU452DQxVaMh2rM6MdgVA71yUwDsVEajQdBdkpe7tTweMwFYpcB5VVrqt1SDwNjDYThJdV",
  "key22": "epD17nRfJeCj1wFhKzgAdTGYpmjHG5AqihFQGMUQW235eiFr7nTWk6kuHpvyHu12oiY5yxPh7ppbMJX1KBRkgMT",
  "key23": "2iXcmvcBFfgaV7YxR5YFGiTMeU9qvcWTkWYvQA7xAuEdrCTsFKYge8DnK5owmp4YQu5apn9SMywnvtJWsgCK2CAM",
  "key24": "3uBF8diDqxVwAB1vU4TkcDXmVDioks6G52wRBRkAaMB7DWAHHieBJ6Z2edCcUi13ZHEG1mBfC1KM5cUbjHPdrWcQ",
  "key25": "5C9bziN4qamwpRmmqLoNcxsx5d5dvk3sh37sMxbsf1ytJaHPfkeBAbD1r7gZfxNuSZh1jofyuPHoao259G2XrhNV",
  "key26": "4M7FasSoBD7zJ83pSaMYbrq9XTZt45uj5EdKe3Sh8Wf9msFYYFjkZKGEDhRwRahJU6CMeNFFC51NRSxkVBmy8zw9",
  "key27": "4F6abFzyUZmi5QN2fJ5GSz5DHk9s4htpf7L86brYY28DoqPtGeacfQcaJ7ZrWD6mSQXUX6EJsA8QFkXVmZ77vs6J",
  "key28": "5TSLqcVi8reKbkwMYjAFJYjLw6oiMgEVSoEffEZQhyaPKxvP6gkdieEr7SbX9Bmu2ooKvgqMcPdKp3pCWyty9ZHy",
  "key29": "2yUyV99NW6NeP5qCXe1GmdqcVdQnrK7QCT1UvbU7Xmo3dbENyEwwDnYJ47YAMiEnDWHVwzod9B8Cr3Ku4QjySaYV",
  "key30": "3o8VB5Qxjtyec9p6PiPeXTXMvxuLAFqN9oKfonaFPvW55gLzCQkHJkByEZt6pBWV89Ro1Pu7czLrsGdKnbrod4iA",
  "key31": "67qb52aK9Xhx3FguXznced5EdLC4RCAMgbvLx4RvCWuD3DWS5myU58jUMmaSXnx7Wdt9Fzp5fNswHnxTVXnQ59zU",
  "key32": "5k9So5n7sDV5ziP2GibZ5NgtdjKC3Re8UqMarfKZp74ZagdaRDxHxv4TeSNqbSdiKuUXzqSuyoAi3JhEVhyJ2NZC",
  "key33": "4McdFjTUHmsVzz7SPz2f3niihwx4LcVh7LjqpFtjaZk4w3MRNTgF7wE1JsqpHUAa75yUqd4ndCUnSBsim19wL7ej",
  "key34": "64mSe2d2drd7v7HCCausgsSDbZkweEYWPRNUPX1qwRwFUKzG6yTHM3mugZt63fNj9zWjfDxMtEwn1pZRERcRgfX3",
  "key35": "4STKCqX3rSWtkCUPdjWd4iJtfa1vTsbUZgVuPp4dyxUPTJVSm6RfHJ2unG9Pq76Df8cYNk3oU4Gktw2VX8RdG7kN",
  "key36": "ASK6YRD6yehPWzoNfvn9dSWSty2vYJ6DgLbqq6AvCujCdkz4UJzhJTRaygAZwBkXHj8oX2g4KDz6tSJwAB42Kjk",
  "key37": "5R3Sujemo2Cdkfzb5gfaBZDCKMZR7b5FC7FZdh8zbocUnb7CK2HY5o6hWaLQvTNvvWFSqHLtbzDe377MqU8UAm1D",
  "key38": "5hsQT7TPUJEZc9wT21qMzTHadyNuGpBr4kq8fhQMEhAMKyUyFrD8as6nzasoxUBPGMLpy1szgx5at5UeGAarBK1x",
  "key39": "3YNzD7Xh2gBkX1XMxJU8af3YgP31BoNq2ep48LHjhLv61RV2KcURgt2APtv7bxBZZvjbq7HJkuNf5Cbj7ji2iHXD",
  "key40": "2Qns8goUj4VYTsr4KismSgmGjQncRpHWjExbGHvAca7i6pMiNbcpp5Gou1fTYMPBA366dMNP71FKHZNFHSNgSAPd",
  "key41": "5rwE6YThTbw5RkUmAJpsf1pntrza4rHuN5thNcy2ufEGVY9Ri6He1uv9v1GVmxaMhdYcLTaDveAfTnn6jik3UwN",
  "key42": "5gcMSyUUvZKsdVsy6v28Gev3M68nkMESVFw8f3NtceBoAY19L8wgqWtXuxhKW3ptxavyXZzjCgi4mM55mNFVcaHm",
  "key43": "jk7xUFyJCJPrvx5SNyY4hqLzj3riHjiCqc1qjpcjEPgKmWrCs7kJhNaPvaGg7pAxtMqjkDE1trdPoq8Mc2GDb7A",
  "key44": "4VACQgCvWuuEgqigXyayr3zVmMGuxRK4Qbc8N8NDyjH7iyU41iNSPBQMeNULgXHmBrFEgq8HnEJskVwjSSBRUZTq",
  "key45": "5rf53emWhQ4xHJnDNUmSxJs8FPADBvfN9tM4J1s8Y2WsKC9AQVoTJSfMKrrQ2PQe9oZWR6GaqMKDztuUDFTPET85",
  "key46": "5qr2PXr7QBYdhWhTi93j9XY9TQCsadRU7254VMzqdjLkL4s8cLJrAYUkmY3XytpnGQACLpphpvDzDZY7iRtNn2sT",
  "key47": "3oJPzCiWrHViqFUp7gBkaCffR5975bRXRbBqfXqBBieNMYGoygP5a8iRCbzaJr8k8bTywoSTU8YMjn5SMa91oz9Q"
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
