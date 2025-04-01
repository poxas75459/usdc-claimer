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
    "4ZmrjfvYAeb4NpxCQujNMmVKqCHwvHioJXVAW2GexCtEC7xhntSRHvwL3Fe4UX1oTkmmNBUTN1CLZzYMnHcyrAVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpxWTLg6uyYbRUjH9Vv9UWsHZtRHtc5QrEeVqrPvQyP17sSeMNnRxZRYbXHYveNpFWpFQuWJEwKR2a2SrnqKdUc",
  "key1": "2AyD4TGUBPVingRRVrQ7gwsuSdhb8punzenJgaDFu1hyvRMrhXLFepD5nnnJaSYvNHGv5FJi4K48Ap1aZFVi8a2x",
  "key2": "52uv4Wxsx5v9xVo6kiYDf5HmLDPgFHaeqjv5vbq9F34nCLZeEHp7DHKM84171vQUnd2y4Hg3EDMxsQHrfqJ2DAge",
  "key3": "2VciH2xAhqGGR5Zhv5eXwHcc3za1LVgXRjkAvqRSSx9xQsSbdV8SgHtd4XxRc1F4Yt88S7GLYiJDCQAxQFDEzfVe",
  "key4": "4kbQx2H6XpjJE5Uqam6iuTkyfFZ3EywyPcj6XRMyQrkZWF8UXwgLa7m5vzy8Do1hX4azDqVqkiMG7Q13Qp8CLvDC",
  "key5": "333ZUhTBFR9sTVK6C6GL2ktyLv1QxAbQRrTPoAnJshPVA8zTuenCz3gUjmLnTh814gMD5ecaEACFL3d2XK5dpbPV",
  "key6": "NumyfE7duXjbBpf6EjPrkoxWHUWwXtxfCuZgw6svQ2NZmh8Vfwz8BZBKvw4i7kuZa7FR5WxjmW3nUnk7BhJjuHj",
  "key7": "5iXU9DBtng5rjfgcWyw9UBaQybNfbodrCwU3vnZrskTq7YpxwxgFD2LeanMxKCuRDii6YkR2bTAXS2U5ebNMZvzU",
  "key8": "5Bi5g7JqA7YuFPahRfgkTAN5dMYRdRVGzDo2xSenKYKiuyEgpqCFK1wu7tsXCP4hXVDcNG4RUQoAbnDMQj61Vg87",
  "key9": "ir1iC5JCG3fZ8zFnQQcVCPfARnsYXPgMSuVriAnkmvypBottpqYEWqEbjBUEFn9ehACsHBcLA6ATgJbdwe5oLRX",
  "key10": "3qVLGT56PKqXyqJVGuUfs3Ss6J3U4qmA8vkZv49tq576sLmt1mVBrdFRhpsE8TuZgpj5RBEYkvjLWh7PiVWN4Ska",
  "key11": "2ky2wzjMMPiCDERexpdjEs2NXMRWdB2kDzgmWaj4hrnU8QwhJC8vCL9DaA6fkmUfidarJEpLt4UaQTkFoao8mMHK",
  "key12": "5zGcxpLLPvPxZs5ZioDx7wsAy5AUyaiUdTbzDdiExvyNZjEBJTE9JKv5HeD2fUejyX7pYgtzeTiQtaAquhSnqYYN",
  "key13": "2hCVyxBo1LJAuis1KiKzNgL12ATaFSVLpHVX4PdYq37VyPwaVpe2SdWKuGJ6M2gQ4iPjSzMZ3Jf738CkV8cqrnK5",
  "key14": "2ZvMQEN9CxXyYznTQAEAmK2h6Z7wQdZuKX8uoAMu2xytUsfwLNe3VjeG4zzKJ5EVDqMNmgsZzTPsNwB3mk5o8J5m",
  "key15": "iQxuNwtFecQm8wBDZG3BeCJHzjLi1Frv99yE23HYYEXD4qYjFh5C6xjsiEME5K5AH5VoZCibEMhg3iyYLQirxf1",
  "key16": "5yQFtHvhHo4tXQFjjkio7CycbzDXCp6QrgxwXybfPSKhWCFKLtuursQeW3SPejVxPMfS8a6zqQvyijyhJTkUJSMq",
  "key17": "3KkduyrDZy43HwvBSvJVwEFCAxDSauquo68gnWauys4uungC1ySEAJcqoQNgpx1VCSN18QajYP6c4UGzaEjkP2tf",
  "key18": "2NvfiDcY1Yn9Xn5yZTUYjsh2cQBmUHWErYgKuxMN7y2HWdz4e8icj2KpXG75vvnweUwPbFbZHxB2GcecmUbzQFYN",
  "key19": "3RqKAaQGzjeGA9H8sKbbaSUiaiGLnFQjAa8WXa5BaJw9DoDyhu5tmJu42Su6afwpg2yEqCvVjg7Z6bdww1GrUqbY",
  "key20": "JjsC5PDk1hScaGCUmgYKXTFjQWhvgdddVThVjMBZShh4JQD2mJNDmJAX5RaKAsrgFYEzS9QhP3kvpF3edohc5jc",
  "key21": "2XyKT29Mdjo9EzAnDWJFq3aHeFZS1PmjFEDE2DpkrWAzvW5qBxFNS8MACgmuLMor1r3Wta6ySMriCSaYFH59yrkj",
  "key22": "4rz8cLnh8ZE3B8chP7WM4Ziv6rKAHKtwuVeu8312z5K2oymEsiaiRuPvMbCy5t1vfSkEWfzVLoV1dwaTku3SmwfN",
  "key23": "5NZDSfm4wwRqoxmbYKWekp14eH8FQUXS3kw2yuGtHk34ynQawFmgAS7G1C2AAxBVLAH9Fp1YNsFTni4mT1xMjfnN",
  "key24": "2rNgVxLdbd2cixhq2D1656wP1XBs8KruQvtqbSwNgNgiQe8CCSB7WYvne5QtKobPj7JNoJhpa6dfBPyuDYcFARyF",
  "key25": "3eebgVPtRJ2yk2B9sT4A514jshxjktk5yVEzzG8RhLvUFLgh3fFTBBKaRnDMUSMQjcPF4EY3re1sJ3tk2wNs8XxV",
  "key26": "212bYHDAUArwqwh8WFchUivRrYsuX1voaYgogqGpDsZWBPP3tEQrRTgfunPb1VrArL9YPFs86XTqr7F1oLNS8eAL",
  "key27": "4f25DUPirKZaqBC8E3f1hNbEE5SLCw87pe2biHYUva5n15DMKCj31ZoPLzvXgb1YmpWrVEj2Q6eaa3dZnWpbdibS",
  "key28": "jp7iiuBhp2aAbHk7sGqE1HBX18qEqYLTnaxZKu6cYc6Djd3aJJo2rphBQnA78iFRKufiyiEBHhAdUjhuHwebxPz",
  "key29": "r4SutA2P6C2psEEMV6CGzRY8wtfti3Zct6TV3gLqPadiigGhaHWECUZrHYh9Bw6irsRCjU7FAFb1Eb5o1AHgMne",
  "key30": "5tYSdW4Nj7CGBhPoGNPM9NeHaHCzp3xwiZ1g1esU4L2mXPASdDewGo9AcYkiXUx318d3SBGXNhtTnTcCxxULnQrP",
  "key31": "jBv1yNCzM81k1THPCHqX5qHkyyrDYy2iCevZwi9SZ59JYSw2LiAcHhDcnnae8a4ZmJ1XEJmonrKGnoV7iNPm8xa",
  "key32": "2zuDC7N89hkVB1RGzy3jAnnMXGuGrk9SKP8Mnr1jd6AzR9ufLT6W5nitp5U612kaZj8BNHJwQA5oBujpfX8KHpYP",
  "key33": "3LWN6JQpnLGFvmHrq86HtQgrQtSTHcKttjfjRtq6Up12Q9ubHeybeLC8en4UqHHuuC8Zb2fQBWrvydR3tL8cw3dw",
  "key34": "5Mp3tfuhqQCzTXaEoaWgF7GBrHqFYqiWJjC8q5RawrB4aDpRRwUcTRing56vygEmBYfDeJNHhjVbYpuxYwYEanSu",
  "key35": "24bYT2zozLaYDndXyj7BBHrEQfekp2QsKziWQuHeUA9uCia36xZ5HJ6s4ZFUhtVuSvgtkGj4pev5NYe8honNbe2N"
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
