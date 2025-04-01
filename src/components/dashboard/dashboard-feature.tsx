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
    "keZ5iyF6sDUcRZvNCWCQ17RoRWQwTsKfvKLBeFcKa8X7zqdQyw1P1xtjK2yr9RdqE7F5BCBy5Z2KikYbdSZvfdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JY9twd4kwWcrJUpFPiHF5eLFdSczroraGL1sersL38Lv7xDVexJfmAgmTQiL27b9qqtmZUg5PA8b6R5us5sCN2x",
  "key1": "22W3TpjWjHTYrdkf7nG3ew5xiwEWqZzFSkEXJba9WFwxNvBTXwPEDZKMHgx2dJmAvn8nq6LFeTtftWJwcqDVBRJ5",
  "key2": "5puCaoWoAR9UE4WTRZ3TSfV3wsr1h9Qd6CLHgx2S9ocCSnT8MRrKULb5tNua3BAFXzNo6R1wAm7qNnoMmENeqyc6",
  "key3": "RW9JyhMb1eE6YBcn1abyARtJjZnYMa1bvTbL3MN3DPahHUDNHe63qdH7mT8bkvdvv4TDgDbX1nezwcJbFyehB2e",
  "key4": "25GcxBzzqVtU3hY6SwHYfqohY9SMmf67p9NHfS62kb2e4SLzhoZbjxXyyocw6419wg5DwdMk8MvgE2ZfG1sQ3dfk",
  "key5": "5Rzeed3kqUHMdv9ByYBcEbisk2ziZuMeALqFgbgkwLq8unyEqjxLkjVP2QSSSogKrKgTiE37daUsh5tKuqVoPVG3",
  "key6": "52q9BarxbFpGscoYrGotafYqVYKwgXEvMMoumMpw4PcgKTHwaEXtaNz2Ye9874tqjmdUu4Wb4eHNHDn7WnR7gekL",
  "key7": "2JCF5Gc9HXyoGrLTgRbwS7wVMkTgaHZLs3vtgNhYd5ADW47tonVP9GVc2rJL1QhMqPGuJu9UdpgVzkYMp5z2w6hS",
  "key8": "2k9AEGFUHeaesYGLvDajZ591akN86EADxYYCXNN2zaiHBpNjvW9SVC1QdLou9ZezzyDi8eEYX1yTd4bqypiR428m",
  "key9": "32fYnrBnMjqhfc4ZpBwrdthqKnxae3ANYdwmDtdNhaGvBnRZimmWd51QY7S4VCZsPtarKP71wphhmiKwqCZZYwv",
  "key10": "gad9zVw6NpQTutACogxepG18QxmrvsXfvEr52MzizyAeEdPPqYmCfEcEwGd3GTLL7GmCHbTmmoJd6csvRNiRPd4",
  "key11": "nT8wpBrVmcvxJZL3hgy4Hk58oZtHyJCuyFcfyGUYjWjixN2e6Nj4yCEDBXF23bU2tQ3786Z8jG9DcagxAAgUg3S",
  "key12": "ZqL3Ewxf33hyXtRj6BKtAyiGuZd4Ezcv7xVoTSa3X8fXP7eqtkA8unPXgPbR1DYfwEsEdgMKxDSy6vSo3rRCmQM",
  "key13": "2giriGnS8cpBykBYAmz5A4E6wyMYejJGeKc3tnWJz6Ko9EXVJFiFQa8x8itTP9vYDoT1tbo7xKgyim2dNbhLee1b",
  "key14": "4Nnz4aoZJQXNiFWTwG2Hkp9WLCcXNv7AsL1YJhU4my8ECMMxXvdYJzvhNmAWPv4hyhmYHuR7ARbqrDZwYXAHjfYQ",
  "key15": "4ciYunFfEJHyRm9CzsMnL7xzay5JJRCik1SwGxMPKPczqAWCrJCbBVXnydfiMoHiehwdXCK8p6YY8yupNzj9AMev",
  "key16": "5CAXnLYLNJU9cWCqrWUdeEhQm1zm8zS2nRJxEDZMqBxKFn7KzYa7hoNGDUYP558VSTgADj2eJuoDu9kyyEYWDRyt",
  "key17": "2LFthMj5kHMZQccPkbVaCY4Guse4KDNLnwThcCp5suyeun5WAdZnMZpQk6nCo6EuxUGB8PSZbXiH7fJx4gMhLW6C",
  "key18": "5uwaYKZVSiC928ge7tpgm4Sq3SPqxYkdwDfQoTEL75p3LzCEqCc264NFRZ48nxe883dD7zJJyngvcEsQh37rfLSB",
  "key19": "4PUNMoxGZUEgSd2kKpSwHm9ETVBEcHPdznbv7ryDX9RS7PUqf6osMatvNjk2jJGZmt8qVMBJXkfd9964mKcq8dYH",
  "key20": "yCTJVKXoVJJWYAFjJMSEqJcMq8PnaMmedeZWHCccAxiXfKZndGBBHbwZKr8q6MvvvskK1uvufAvJieqRSHLNEfo",
  "key21": "5QX8KqqJACjtNA5mVYjLf4miDfFPHYzTo7Kcustr6jgjA9vu1AvbPHhqBVV66FdW5r2vqQUynKyWUdmYKJ8Te7Uc",
  "key22": "2hEfh8pWWKheks1nkF6uD6WvufAzr5xhdjhkeymbKgcNDrn7fCqjW7AsZega5HyRusKKeRWqBR7af2MSHsnm4Li5",
  "key23": "7aD1sBE7in5qnacwKZZPoXCMbmnypuLJcW1mp959GLDyFzf9UsMkVfjLQAY3FGWmofdCNHywMT7WTPxufQNh1wE",
  "key24": "FaQAb1qyBGmL9zhzwv7iZCbgsJvjYMh2Dgv2P7uFyWvvuXMXTdroVAf3gy6d6CxQtfi6yXZGCyWgDXwGcf97Fks",
  "key25": "2LANUGPbvL3jHZRd2srr4X6AmNk8MATGfRvievGfMAt5Prvuq2jkWTTTiWUv5GdJQmjdu4vMizyhwuTdgwr52VjX",
  "key26": "599csZp4bUjBJiHGVQGbZrpqvcMfW3uHdbKqm85iffEBCbqrTiL7XFJXhHjc3YWHtj1sFKgoNFehMUo6jCJdmvuY",
  "key27": "oAh9ZGmzhn4ts6EmNAL7XQQUbG9DabzS77xrHdraGpsA3APsgXC3U3tLzNeH9WghJhHXtNwMdrwT7LtoWMnZrj1",
  "key28": "cp5WEP2vdfmdNFK62a5SiBpMJjV71qk9B4dFYnvGhazFxusy1G52tEqzAr6Xr1ErrQYMoDYG9qUpqnxScV6VMrf",
  "key29": "3TgVNq5hqj3H92dSsHRX6iPck1VU2AHtvQUBGbJafarndQcT3w17G9AoNUPByPKtvCJJSD7EPhDARqGDQ9ZEBtjP",
  "key30": "2iP3JgXibWnYfcnGbsHUsg76n2F26MZWDWUZgdcvis7uEfhgSGLMosP4Z5YvZwCPEyrda5rkqXtqWQM5MkKkmFef",
  "key31": "59kXs6V2zwmHtBob5hoFwFhk6eMtAz2jk9cPHFytnVo5fnEFygYPb68qCtcuxZKJer9anEHbdvzTmDZijZhAQwev",
  "key32": "4wATJ7TXJyFjGyT94V7Gz8yyGq3YH8zyyiZou8CRmp6Fu6nRzPej2D3cdboBFc4L2Dr3BLK7rG3ML4braSskxxm7",
  "key33": "JDQ6ddMjtn2KptKYTiV3qbUQDXuccPnBJkUoAuffVTsfXYwnooJy4RxL9PqpUDQmywpqw1Ld1xDnU7Y6pQLzrCM",
  "key34": "61nboSqNWoQjqF59FThZEaHccxZ95SGzFhpBUi2T5Mva8C2LHhWajXJQyUCzD8z2X3gGW8fWWSxv7bSW6r3bqmGP",
  "key35": "5Wb2KarL52GEncKhPpJu3MgEhEei7FxqSdBAHUZrJ4EWAD92CXWLVQyBJNwFt7YroGEa6BR3myiFfqMGFXi82etX",
  "key36": "3pcMwafvr1WizRsLy1dG82wjzet9iWD9cMmzeD12U2HnHtZ6MJaaxwFxTtjs4dArUCyPeUi4u7K4zpRgEvqjNYtd",
  "key37": "2WZxRuVScnUpSp8VFeWS9cN4zK17CXzXgwyobFYNwjajWdB3JdpuQmJNL2E6GYW9DmHnNHGJuxuCd1881rPZ7TVZ",
  "key38": "5u8Cxx1xT3fqPPVXHu9sfQJt7Y1wcX7yi9RXL75tHzEwQLvEtocxov7Ufr3nBRw86otmnnSk5LAVFxd7kMHfn57W",
  "key39": "2wq1mowMM4uh351U9PRapU2yHS6oCwsrqw4AqeBHWUfK5gfgHDcikpiw6Seb75mnJipCvQqT9GZoRERBLrLJraaB",
  "key40": "v767MANsqSnZmPZUefimmYQLWR35dJY3Spnd7CxxVQRnJJT6nL6W7dTBkKj95741KioMP4ZK5sZ5g1GJzpVce3d",
  "key41": "GPn1p2kzStQ9Z4FD42vRrJpbL1kZv6v2pFR6pXGrByUjCVHAbBac7aQfr2Vdbc9nAD2hU32VJMnpLQAcxUDGgMT",
  "key42": "3uME62TKNwuzaEWGgAeKM3niZKjcdXCcqUaEkrUwdAtwWuD5vLfFVGDoCb5dHqUw8NcEhz3DeUAAErk2LWixJbfo",
  "key43": "2SB1F3tpLwqoi4CH8kLw97g91iaWdbiwWuoE8FczEiFVcVf6udBXHkS2UdFrfMMGRUK1uEaYmDPBvjo3vXCLJ32J",
  "key44": "bNWXvEQ5RjMau3GLXySqWidYgB7NtMdWbEYDPyA22HJrvoni9aanM3cXRSYb5JZHS18KKhWoN8QFvdfp5BjjAuC",
  "key45": "5bbTiZ4HmjSoVLm4XvuVpcJUCxiZmvxBJRaSQ9vNYnXt3rb5tfdiki9951jxb3tqtcYYSR4yyJhVRjxcU1gFfgMf",
  "key46": "UjT7DwVcH4mzvMperQrGPLY5mifocuqWHRSCaJyf92wpiYWkR6poQVkYB6NzNK1XW6jkLz8u7fvP2rE76ynmv6o",
  "key47": "48WvTTMuV84gNuopNatpEmVQ9C2YpNgLeEjkDVijKDde3isZVaKN5k18SQeMuWkJh5naXqRtLbjGNmHa7Ds6Zt6N"
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
