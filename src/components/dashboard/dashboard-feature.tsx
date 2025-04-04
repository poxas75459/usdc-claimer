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
    "5YwgL1nbiV7ogX54pNXnCecmX1uRYgvPvmHs3onTKE9LZ3iuiG7MPciYcGnQrE8oWxtpWAj4qxvUy1yuuSqqzpcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QcDMruyyp5Adna9VciuC8UbDuwxF8F2vCxcRo2xnfbjwWqndawYu4bDtgQrPFgAtaUGc4Ehc46E8jepY8KrxWCb",
  "key1": "3L3VWtPr26mg1aje1k3qug3B39w1a5Bm3LFmHVNqhCBHZFdeTLpQ16yYmavCeMgNXMz4Atbdv4JUg6p7yxFNTEAE",
  "key2": "5NC1Fu8ED1sbMVBiBDQjhE9M9ENf9p2p2TPMbfpVLShhvatKaMEVw6GiocCtNY5Qdf3p15Q22pF4rzLv5ETe6Gch",
  "key3": "3Sq42EeJiRYLzk6xxvvyab5pCjE2Awosr7KFbShaQjWp6MrvN5Csn4VQd9ueqE2WaLny66zjhTK16HGA5hX8mf9n",
  "key4": "4pyZJjcmoT7q4YdA11LRHymZaZeqCGxfAAq2pbxPYJbucGVA7gtxUXT2PUvpeo6Ee2bLWKE3DXxTzNKo53s6wmTB",
  "key5": "MVvu98t7upCSse1HzL92Uv1S6wGgXPkVWPRm3zeBLVMhftp8Pv46ytNWVwbqfYdUi1G5QBbFosG8MpGJkFxyRwd",
  "key6": "efdhDt9wHzhXQhYyxqswvDuTNsLHGFnev1q6spMzPhzcV84Hm96hDBKVBwqKfV23t1RDxKENou4mbo65mdJAePo",
  "key7": "yQEXXFWRT5WRC5Nr8TS4EJFExLJxKfcT6EMWsxRgWsaRJmvYcEHAwd3wh82wy5H2HnC2uygQfTEtZ8rHdn98h9p",
  "key8": "4sKiJXAaMjWURtGGdrkmxgU38JFP8qdXiAfJHvk4ntGZrUWPadB8vX86UKNRpRpbfjG6pJMsSNU8efDgeFTtYVj5",
  "key9": "83McGuGzvbE3L44Ki8GSUr8a8AuoN7PuSZwDjeVZsHfXJ9d9TJ1cAKQiA7nDDERYMiDy5fYErz7N3DdKFa2bJv7",
  "key10": "28urwPguGuZdgLMyoR6oFXqNsZV2Z3h2uR4nnST9BSrnwwKKrHtXZPPZfq7RNk51ZjF7HGACQjJUbJ3AE721yPK5",
  "key11": "3vzuAQSoFwAXQnT13FMmbHj9XQ98hk6dxosg4otPW9x6Ra1Bo34oYH53MLGwqWVf6LFtCdntqbH61aEqZza57bMW",
  "key12": "2FYN1mTUc9UNRgSmhV1RdC2KCfuU9Q1PT1hi2wMjydqgmDLPLrjAn3r4KAFDUNPWkU3Km1TKjZ14HCvfL9BScnsh",
  "key13": "5WFUaqmvsQq3aU1dHdsVtJMoDzKW28NrMvpp2hWUNVg9RMN2kB1h7pByYHSqnPu9wPW2juPyueaPeVzYYS5NFoLC",
  "key14": "Z25pTEgQZJmpVh8jzv9i21oyiWrzVDggMLQLDPKgntg1T3cqjCXxf2o74ZpFXNUpSr3swySLXtop9gAnT3HCF9z",
  "key15": "5tWmbUSBnj3HVisjwCq5Wf9W9hVDVT3HYMsAFSJMxvByGADWuFFKMbzCNPpsnGUV9CBYAcp521rpJEndvThngkop",
  "key16": "3yXG1WfZKdEYRNqADMj4iPJRPw1CtoLdaNrUAeAdA5nipo3GqcQPf9aUR7SaJPLUPT654hd4E33e3o5DBjyDSwns",
  "key17": "2irW1mdrmpkRqSgKJ9iKavpkhEvkrV597xYRWvWXBhG4bXNR6n7ADyPztUs5SY5em7Dw3ZxrXxFBwYtF66CwGGMS",
  "key18": "3CrhYuQ8jaGPYmF583GsU49VWkAJHBmz97Dj1SSQWRBDsi6rY6SKvvt23B5kpjwjHSjNjEEdUqzEh27CdURVLosp",
  "key19": "5jxY69uiJwRsA8t2gXtC6v9AqSABivnQtdDjF9zxojjhHczgHmpt52axEDFE78mKYgkpjP4xcKxfxdgyoeTdkubK",
  "key20": "2javL4Jz2CMyKHNvZJCvF8Fvjjb6xiXUgDeUfrsj2WeRDNPU3cGgbzLUXvARADQdJFn8gCddBV3Q3a4r8MjVRF2B",
  "key21": "3R3ByyNRh2x2qBi6SyWVTh9bqaahxB8m1ahhphfBCMRhKEZXkkWsSVTnd3CKCVXmXYNwKZ9zaZdMQL9PrV22rn5x",
  "key22": "4r9fGS6NL9va4FcXn4SvX9xuWkbsojrvUvsSgonTcNmRK1KQGiz4hSi7A5weB53j7TzG8Dq6fTZVz6vuqnZjsnyr",
  "key23": "42AJj9HrL2uC5ytAcHDfuJaoPTNT3vyg2uMNvoPKTekyy4YccV9XVojkTrwPBehvqG29v5xgHv8KUzrJhazpbHHy",
  "key24": "TqG3NRYmVjezu1bUu2dhrryZhetEonMDGY2d2DhmG6E72AnUSFpcey33spWUTDtaGrheHe6SBrDke1wsefUKVLD",
  "key25": "4CkBcYgaY9HcZ1k1WXeF1amTqLTg1oKYjasYo5jLusT2phE5FXBEzW8VjZCSq18Vj48N1yoLQvUFi3VrijJ8s29k",
  "key26": "2BBCz7Ft427eE8Ypteq6EturDsAxTPuYv2iAeY8uJtrahTZw6Ed7NxFggPVtinzcePri2Z3WL2DU9bCiKzAwHkMv",
  "key27": "528YR3CXvmVANT9LX6Zk8nqnyFBv7mnCA1WbAXTmMR3TTU74AqjAJ5FuTHNgZBYQojfzSHFeqBbXymAu4JxcCPJc",
  "key28": "RzAQeCWdVe2SGGzh7cLgomfv8WZuN98dqRVn1YgnsV5ZGtMiHxwDZYeUJQT4tpZ94FdZEe3C8AKXALhJv16n2at",
  "key29": "5o82Uu5ii1c78iPJCEjaUo5nTCyidQVLSNa7rdgeCZoxkPpqXP6DGxKsXtxk6fnBrJWDHoxnvdpPNWKUAnqpecSa",
  "key30": "45pLZefKc1rnaWH3V4eVYZ7qnMruGfXEHyyBpdsT4HAoCgqMckbhrf5MQNuq83D7ehhtCwGEPj7Vr2WjbjVDcR8j",
  "key31": "4yS7ktJFFYcCixBnLgoT6QQhQx2QomRh8goJYEeAJ4tu8jzFZ7hAz7hjayYVNCKkJcXwgEgDYV2TR7eBLMn5SLLP",
  "key32": "5mygz9XJGfjpaBrnrUUbVQidhV9vkE4cTztN4Lj8oFKhADtAjAKKv4MLFM94CRwghGCT6tgaPBs4dSwTAE3PsV4P",
  "key33": "4tMTpBaXusuTffgA97MZchFiqdAKEJyxdy9co386dwFywDQZZEM83bWVobqXQm7c8QhMteANvU5UwMEkgwcJGaTG",
  "key34": "5qyjQCWJbHTjSkAYm64ycofPKUsBK2yuuAmjU8ZWVVQqaogG6mgWChRFAQN16Sjee1rn54eFKHNtohhjriosdFM4",
  "key35": "3AVQ5ZiocBXmxNDZvWoePXfjFryaJz73zpTPyDsiqxsdMBThpU5NwuSiX7zywwpagA322ZdDD8cSihbyyJZdD9RS",
  "key36": "Zgo19bgeoaHPAX2HgBKYtiKr9yg7sLhE6wtSMtD99WGVEUQHYhs3q3561hmqA1YHcGgS1moyLhwSsj8vfLy9CbK"
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
