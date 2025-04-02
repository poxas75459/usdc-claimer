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
    "3pjbFJw9HBkg8SXsBgu4k4BT1WMR76fsH8cfMUJRXKkxqkuLeutRCxm73xrPXoLVwdwjpgVHZwoZ6pA4xT678Nta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmGJeRBM4Vwn3CLu5HEXXRpPBX4jCc2Q1KdqHkTNA2gYpaVBaE2cG2Yj3u99q2BYjw1jc1Hm6zL5QrhUuE55Rj2",
  "key1": "2tM31vqHGjEbbVVwV3Bh5gWWScwjFn8BmWJBDg5pJrP773Z3wYYZj3D2Tw6bDwuu2YRAvpEhySgD6AyA4h7ZnUU2",
  "key2": "2wqgJpwcMeY5snsEpRgsHvCwXj4b4pkmFNzcDPeMt3d9hXzpfmTGSKLyUnvSQuUg9TQDkZsvEKHmVmSxqiPBz9Q2",
  "key3": "4gKBuKtTqXUGAMqToEvE4p2Nza9EVA77kBuMErBJCYkhzba7ajvgNEuTdwDBk6GmbYgFNhKp39kfxdASYBXYWzVL",
  "key4": "2HGnVgBKPYhpDrm2gLdXJSDqBqg5aheKugLMi9VAQ632ddJnUvYroFYBXuXm8En265bhMGTmHhazy4YHyCYmeN3g",
  "key5": "47whdfYyYhDvugz2iLvXj2keCVn6enHJkxs6DRvqioaVXyaTp3MqdCCj95gCjPHTwmMw6KwbkA6xxAkb6ZZfxs1r",
  "key6": "5e923NtAcdwLLzMV6naMKUe96AjydU5yhq8z5jWfRWTzc9xbbhQ27UQ3WyqdYtZCqAKiHRGUkn28maDwsAhobEXL",
  "key7": "4TKJ7jwMwZHf4M8rDbNs5Eg4DW9TjEXWBDAXfYop1t1gpRACQefXkRnLQTHdQSunGRLz1JnV7PEMJ6LipVy7hQvD",
  "key8": "2x463VBWSrTWWFrkTu6fRs63kmRj8Ahsqt6FhhHCYP5wZAJCqPNsYne5xm2DZrnTFgHBEC3eRAEkfUP1111xbMpN",
  "key9": "5fnJfrr9iiR7fZyNWvNcbsq5JgcTdpcZakroYbYs2dcjrdpC4fUaNwaaPZFdf1yPqPwXmc4XWMAs3Myk8gVXnvE5",
  "key10": "2JKLmE1XmfDrmknLznWM2EGvQZxgpHLyxjVrokvQizHhNE4pAysjchaq1BmZqEmHG9mEBy8utJReev2hH6rKSnMT",
  "key11": "29wd86NSi7V5cgaEUE1wEhmeXjMAkYzr3YZwZymLH8ouZh9asgPB37X8V3x4eZ3eKhsqdjByv8jdHUzsoSAY4LU5",
  "key12": "PdtDFg1WVxWChbQ9osFkPbhVerm93x21LgEn9dPCbMgYqVJNNSGGB4KQicxuXpCy1bEvv2rt3iB2uoo9DyaRYjV",
  "key13": "31MrYdosh2qbjVXRrzFCPjAdGTjsYBPE35wTDab9wgkjhySYVydrESbYuin6dcifkjv1owms774T6QnK9fXY9Gqp",
  "key14": "2KpnCYyMhH4V1U2kCT3uzd4SzXcEX4UjmU2AZMq5pNtCdV4QAUmMBxR38hKzh5rhmanSACcq1SQzG5hWZ49kDw9f",
  "key15": "cM1ZCXimx6zMaxmGxJQiKa415FvicV7B8ViJTL43Px9uN3ZeJMGEGKo2WiMNkTQszTyzjRxFKXdBcmtjPGXbPgW",
  "key16": "3AaXFD5RzsHqRt9xunZNzGpouqMtef9Mt7nocjxhzEdRoDdcswnnVLESSKkcG6d85R1MfeT74boSX2dHZWQ9MBZP",
  "key17": "3jJg1rFdhwMi6UPVt3yRQZSQ4htFMTzD79KdQFjcexyGqJTw9c7teb3diEZT17FK9WQfa9gKkSNPocSqo2eXDoSV",
  "key18": "3T9Y2c99AmBWEQdxrChNgAr3TGpUfQm5Q3kJAGmHPcKBdcnHsydoEgtx3nBDVBfqCmdoixkFGYSngoRj62E6tm7i",
  "key19": "foLn7Y4f5bcFqXCzL8dnxi4DWb76MNi9PuvVyvcHpaqMfc3pB7z4E3B1CEyKfhbkCcBX1LrawnMKdyuSaoPsJn5",
  "key20": "NV4rX7MbT1MW7nGJShdBJikxfoemxmu9csFs3CEZRWRGM3xFWPNLEmrW2YSjPH8vmLWkNJP3co2zCA1G6AoSXg2",
  "key21": "2vGcJ5SRtVDxoN4DZzhjCAefVtMe6BbvZkpCeoTr1KKw2scJyFt2KgYJLoeqcq4Wt8V33hLbL6meu8y4k9qtJzgm",
  "key22": "2ymTUcQQ7J3KeNojMQpb64CuWn9qH44BQVsBRCqDaZ84thAFcZ9p7QFDuQwpHF9APdGLEJyT94gYVoAFuz1v7Qr7",
  "key23": "wso8XxEMZtKoesLBe3BN1JJdiWrbqYGs9V8naX4rXevdtgfYSwHwepkLCx9fBCybpZ8fCtv2ysStkdqdi6Q9FqK",
  "key24": "W8GpU9KbLd7c3pgsE6Y6r3gd2NT3iZjjv6U39uMrWfNCfTEJAWTA8CfxoGefH7qm6Lg3bNdUQSkiqWEbcQWD7HD",
  "key25": "MszGGtvzP8VtMXZddbFWCgQs8WckxjgbjDdW99SFiGqh2921ZjWTdUJxi1iZWybZ4q3fgcqVA3fHbXVa8dcFiFp",
  "key26": "563z5fjbxugcgcewo7Nuo8eW6g2qnWyTzHaqpn3ioREJHjs7UavNopDFVJhjR6MNup4HZpFu35QYh65FnmXe7ygp",
  "key27": "23tFgp9VufDCDdGuYeEd6erRo7L6Spc6pDpbeguVMMoWAYGDSPqZ1uSMEGE7raEunQ7Yd7onhYT6VX2GopArP1P8",
  "key28": "5yFFZHRzU7sunykpwyUqeKoataTZEmteBKwdhgbNahHrC7e6xFjqRbj9hgNmtv244F1BvpkUfqoRTS5JhqMCcuaw",
  "key29": "5beBjsom9RALyQoWxpURYizrkG2F6asUT72eGGjFN7WTDxoNoPGTDFDLFaa1iwe7NgJts9a4BJ4vR993GLrMKbJS",
  "key30": "3nfeg4GEEvyAmumnsJ5ScWjmfNLD2JPGPHBu8NvXHbqobN9t9P9qzXnytN98orwt5tW8EfYq24rJzcoauSha2jUp",
  "key31": "3FPgKMdWSBY6DHfDWNLgpTu71vaw9zSdBgyxSxfY7vX6rAaYvNckvXnQmpcAntSN3gRnPbDeqaDzSYQ1TvFNhPxU",
  "key32": "S6ieG6LPYtoNJivD4hLjD1AFti623AcwnGFhyLPHkYY2Cdn4yuVHawZFh5G6PDMkE33eW89AehptfBe8xfamjGf",
  "key33": "3cReVGLqSx7GxzsLZKdTstWh2jyZNr4gcbk4Hgt1RY1PEvbkrjUQs6EBoJJ6ibLjwXEyuFztdNZfoYiJJ5LLXYAy",
  "key34": "cSbnyfUp32C9RKwA4UeYbF4PUgpo9aNBydvmh6GJCa1gXVHpuaSy4NQtBR4SB25q4PP7H2AJ7LQSt3cGLjFXTh9",
  "key35": "4bcuzvDbFUd2tFbpuerehBbHAL3jZ438SRN43JQbfz8uDp673tGDuNP5NJeEivCnzJAtLhmy66CaiXf5w4vwYdrw",
  "key36": "3vvxwh4NPR4dTrtA6ibyedRG6RtCFhd8xn1Rc7WU1CFkxEdwfcdXqbfwFqshpMbaTiMPkWtVwrQMeC5oErtM5tWS",
  "key37": "5AvtvX2TwgNEC4QJ2NdYRgPkLQN6fLMkGYAYKrgZvDKnVq4Wp54XH3iK688udRk3gV9FDgu1xq2ehDwMTfZ8ZA9x"
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
