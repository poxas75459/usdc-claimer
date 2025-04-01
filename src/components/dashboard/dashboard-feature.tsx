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
    "TKC6iCoybdGYRkkbfqKmboHHYkMqxmch5QYXjYkRV1GJzo2SVcpRd6siVsCtK7opKEhvi4P2BPAq5PXtCgSYEtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t56qvM56zKaewPsHyUPbaYgtK65Shx8MyCs1BnwLWQTLARN4noZ3Njcz3ocSaZGYBy7LbGxxLwQ5ib8hXMo6Mny",
  "key1": "4y9f6kZ5DQjaQi3ZzMqUCMck4Gq3BGvYNSNEHayUtZD4g9wBLPZY2E3QxJncbynaMaWKL612GfLFZYWQPNQg3fMV",
  "key2": "3rHiyhr8pTBgPapnRTJhfngD3iNtxGqDrdTrPq5EynvbMZ9ZMCkX7txWPqpebfbyRnhEcRAUf7TQnZxvAGg4Qngw",
  "key3": "4QgSRYjdSbzvNSR17PrKba3DdjRc4Cb22QEasMM5PyFh2dKBmAh6Q3qthceKdUKiBLEt6Sg5Hx2oVtTbFWqChaHY",
  "key4": "2FtQK5RJDzHNZ9TxdrbLqXVFcSq6GPV8RgVjDQMz5BAbZc5m8whcjaY1T8tcUCxqEfF9uEVi8HgYdDFp6BrnxPdV",
  "key5": "idq2XDGDnwBptYrS6G4pneq5HWLR9oqZM2s48Gvh9hMhVkyoYiN2icTY3c7FREmZF8aVbbgbdFfX514xkN6R7VQ",
  "key6": "2KpUsskkyimHcRiz8aVVzNjAZaAXDgsDULvGRbcRatRiUkcrpc7w2HwscaUPZDMAC6T2QNcb3BygmVJYSL2xFBNc",
  "key7": "32M4wG11ANe5HRqJrMgKY2LZZQrsiCYhd1onBrqU8kLriYmLfMdpsvVmy6AeVLLVrLqnDfroXh9SX3CurWZFMYgQ",
  "key8": "np4cjskBk7Ez2WRRqyiiAQxmfui9Vaf7zXbPvbS6ArYNN19iWH4KwkmfgxvE41wYnDVVMJMSR1aA5pp9iff2CVM",
  "key9": "2CvKfJ7mKMcc3QhNKNQ7NWgbCpHYmrwJdTQhxhCtv3aFcNhUmiNkG9MGeZymRwmsfNmu8bC4JtfE8htQ2i7LWXjL",
  "key10": "5doPDx8Neg2GCzQoRwSFJaM5dps2QN5TK6XpTra3H5AS14Br1dFjXBeictALGM4yrrAYCV5KVNxeYFqp52B433vP",
  "key11": "2qjNhvtCCcPFe6S8X9aAQSJLqZHtF4iBnKQ6aTrhPu3buzXyWgCmbm4Edo9sGGp5yY99bsuPZTvxh872KZcoQTT9",
  "key12": "4th1egapRfwVjP6qHxMPn3s77FXQfScKowR9jxcqEb3tmT3FtJUWdegzbjGQp9ohNHjUoE1pghDgjU9NcMadT5As",
  "key13": "3Vk18AHcjCumCZbCLhMoP6t5z57yUpPzErf3qKLiUQZrocBXqK1yTbtTGZ2RPkWAQQXHrRTcUZZtaQDXXToA9q2k",
  "key14": "tU1Mq5RSjpgZ8MFyR2CNfsv9xUEa4KN8AKAy44QBLYePuMzgDTa6DCjCmLv4UMRF73znvdxXqRe9m6xhVqAXVsv",
  "key15": "c3qCZy7hJrAMoGgaBCkW6VsRyM3qbsZKty1r4yT9fAABvvv7vZNLmWfM52Vpuo45R1gQb7nRt8bFuJNC4xad48j",
  "key16": "jDUSaZPjtQCvrh9qxoPcxsBuJ7tCf2YtQK7Ds1bsVceFvAyFskk5yqEWfJmh6gR42oiF2kNagzMfiwsMWUgbJnR",
  "key17": "3Vv5WSdRfAwD1fMBADx1RjgkzgNxvev1fiidHVFFbJLvE6b8TrfVjhBngQRD1qtwBMbJaLgS7nzudMB5e8pKLb3J",
  "key18": "5STPiK23diecqAcBZ79DJGTXitEyDgTgmAtLDV7gyrRJvXnxMUZqMwKQVcFW6vqLyN9f8TsTLA4sgEzJ9i9q64LT",
  "key19": "2MdQU2Cqh8AAAt5R5vJzGvCdFbn8bJcyg4vkR8RVPWKLJHuJgbQzHs2EB1aysuVZJ4xG3UwbHXNmPJtXPjMv6q9s",
  "key20": "3NMeZ9NLBoSvevzDi3YSVAJhDaJbVTtrXWzkZqWsXSLEQ5XkMgN3KHqamKfau8QUGW2a2dspdMuDGm2UMqyhyhi6",
  "key21": "2zBMBNYdoTfxWP92ZkAaYa2vGdEzLkGpZoMbaeE6d8g7C3cxyRdyx7GNUy1g7miHWa2ptgbWifHA5HBsz76MhCqm",
  "key22": "65YMQPEiqsjQ8Broju1qswdyMUN23Fntib5Afo3p9U4hqaJoyWzPBLjsBpPatV3kJutDT1Lu5pHRzBoGfeMXiqHc",
  "key23": "5B23ssroDDbHmv5wNFBQNNEL3CL76vRLoR1RSyoxj6hvTH89gXdFSH8GHSsL4funzxXgyjqirGdsyiQu9UzRU2js",
  "key24": "5d7ZdQjptB9LaKoXaPonp173LUN5g8igBrQYdZ9QpZLE5LC3CDPhAzvTKJwVvHrdMEcR3ZwBNSqGyCQT6SR17AoV",
  "key25": "3o6Gprigpe3RpgtwTpNcU1zgmqMYvvhMhMnQCaUSrXAS3TcsnZ6DoFf2k14WPYysmeMzHzM7ooERxw18wcbpovQD",
  "key26": "5me8W7GmFWx1Hk8HpkS5X1pZW2h2zy1Qz8D8GdRmfy4owjDb75LQX7viyviaCA6C91PtGGNxBvjosDodEBhB8Q2i",
  "key27": "5MnmFohf7Unmyum8H4uWWA6NmxyHwuFfn8vbsG887dEAfQQDWfSKPK89378QkmJBrCvWtKEM61UxVifZWweiTrNN",
  "key28": "2uqwx8WEHGC6RwRqTkdp3zmNeNkG4Y4FyFC1nVSWUr8HsiHZont7vk2SPj4JU7k3fuB1GmhFuWFQVd8mmXoN6qAL",
  "key29": "5naq4WFWHSY9Eehc2yMAryjuMhwX8CiCLo5fv5ZEAE9p7Nu9bQNNvpPCnxLAecvKNTPRkP4eZm65SGuNDtxK2qHx",
  "key30": "2mv7T4zFF9DFZ3Mqepmryb5TdKEQPALog1TWWCuTSyM4HDgGbx97chnMNDPFRiJMcdEA7Fda1mSJPpnufoaAGeRD",
  "key31": "3ESgms95ChkwAtPVWDTWmjM8sF4WCesnLJS47J6FYDyL5qdNyze6puGKd8qaFcEtFfakssgxoCBzGRjH3EySrZFY",
  "key32": "29hgtaTiaLH97WEcimrh94oz7uVmuRuvAyGtVhedDpb16qo6R5SNFfkne83kV6SKe34ibQDqqUokN8ByoXNSdmat",
  "key33": "2bLRuYiiN1r5cspnU2zVWo6AfmBuWnd8qt521gmmEC15Ly1wLjuJfyAmqVPC16z6hb6SaNnpZtNQjwSc3grjg65Z",
  "key34": "2A98V9Rc23qKrrkJqkNaN9wfZTNrSJCJggm1RwwPnUGjWVP3r6aNH2wXUPRodNXaLeLWJC5hJjbjvqxm5EHquc2R",
  "key35": "4aigKhYS3N154CYJis4wZmd5uARBfaUsbdz6GuyczzgdWKUvCBAhAuGheCBJFVi1Z38JSYC1z6bEny4upcmwZkMT",
  "key36": "4J83UN4CBzrgyjGaF76vL256GDvbqApxmmJdC2pSgvvBbJKaL49x1aJ2mbgUt4vGB8beHkJWaau8PHmmBXfaiW2T",
  "key37": "44nSHFV4RqdEsJTvtfWvbwiCAMfH68JhDkrFNBzkMAJogpBdrfSTtUjqXVrLECcDWEaC98isiWs87hE1sLey2hoM",
  "key38": "q3NPRmSwi1VLCUov2CVsrH7GZqpfdzCdv5XuVypm41heLNxSRpJnEEyKBdDkRY9bMikuJRPUQqFTYDMGRRAUX6t",
  "key39": "23mqCmcXia1GRQHNMJ5aUygAwHhLFWXQLgmEfhGFkhQPTbtjxS4h1m67Z4RTkmNHhWMi9j9MWprWE7vbbmmanBxU",
  "key40": "2FidaZGtpyAq7RS7taFgQ2H1Guf5gpDkiXSWNWvmm3JGqFD3pEiFbCVQVEq3rYgrXAR2tmgNeh9NWzefoA5QRuwy",
  "key41": "R1YqdgsJsZzCspv6DmMFJGLFkutnc4WqaxLC7MpRcBt1vtnqG1XbzfyY3gGJu6Legx8rbCYd3KViJAAL2hupNXv",
  "key42": "5Gh9yKy16jgL72tfAqhme5gLgVxPNBvSZDquNo741mzbkPJE8GZdmRnZKYnEwZccq4Yz69ozmF8ALHpwLNUR2AwF",
  "key43": "3NXtjypNUr39GwAcWQaBfN9SrYpzfwCVRazLoezrqHevbovqvKiMZMDMx9PrUgD8Rb1dk18xV7tFLuaMtVaZwKNf"
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
