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
    "2fMvStjKZeVcapdiWqAR6MsLHHeLagARJypKknpTHk1u6xvKdQgURyBm6Us3TdixNhGuArU86XotfJNVRKU3bGkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpBmwNefs3U6mE7Ue2T6rEa2PLrxL6ywJgWQ7Dro6sA2LXYgqnLQqME5ghBk8j2XaDEA6PBThScKySBg1dmX3nR",
  "key1": "5ri2VLpWHpTZYszj8kHx3tLaSqiGg7niPTro4wneynjiJyNZ2gFz4E7up2mn1PBLmrGhB6B6jFV1FC4WYF3YkeCu",
  "key2": "2SJ9j66FUZK2PWrKUUUAvd71wVyWStZCrk17CZsXnZt6wjpEcVPo1mkZhPFAVFQZXiDz3Zy3sFFoGdtcayLuZ4Eb",
  "key3": "2LnfLdLkZVotWi4T3sutHnjVWqK9g6VV879QMEWFN9LgFYN8Fr7sC8DWEz5q2yYxx17YtDzBZkvQt5WjRd1Fnifb",
  "key4": "LPiSj269ATrwUqMQvPZDtMYGqA2kw6PcjcAVNkExFVkPVWjCMRzkzWSsxYDsQTXJkw6baK3i923moo2ed25KCZG",
  "key5": "5PCfvi25oViWMXoykp2kc353JSBggttHKHKwgLYGvcnimqhA4yToRBZQwFw41GrFAFZRz6omUCfK4PWCmchn7RAF",
  "key6": "egCT8vh2KjkB7dSXEitwE6d2Dn5VpXtGjAXU1Zn2XZwckPhtssddSHMB5f3b5vhcHTUDYFCwsuN9Hs5a3EGcS3L",
  "key7": "63JPCuNUmW1uAV4ytdrd8BcQABwX8ekaQeWZe5Nd1bX2HusNhMT2NS7DQZ8fe9LZXbqfAxupUE1mhXfr8rVSBavU",
  "key8": "4aCtSPAyjKFDAE5y8au8hdnqUihv8soKQv4bJBChqcC5V9dyufDpVsXb3299UnbAdsaENzGFhR5dbdfk9x4iKgxF",
  "key9": "2jmaJ2m8N9hLP59AdjVsfysEKdq1yFGs8rgTVYEgg1NPtwQp2YZK2Upn16wZ3RnBAX8ijjnaokvwXATN2A58bJ8B",
  "key10": "459nJqWueLzfDPvGqmmYEdFtXvC6hwLFHj4rqXf7CCKn5KPat8nD5QMk5TaL2PDCZnWcNbngzJiBKvyWfu6LFH6q",
  "key11": "5z9rfDLZnWHZfE1rMSAx7YaxFxW45GibgYUd1QZQmYG9E1yTduMaAvq2nRRZ8nW2XgRKra2PW82n1UHoRcNpGVfg",
  "key12": "2JbGKEzxLv2sewDwpvxV9aFK2sgx2hNXZq3D94ZSUBAPfabGhqVcgLW878Eume4qYA5Z6frVXxeFsYayytGkKMei",
  "key13": "4ao1nYvZiuPEpd4P5EPN1B5DSfJuyoNSEM1YyrAcb9BMjtLq31JcfQR7a9Ysd1aPTNmE32Gy2AEmnwoWzfKHX5zt",
  "key14": "3WqCvPXEHCvLbwzRZTkUUXSN9FvLn5WpYbZNycY2BsBiRmrnP7KcGhps5egD91CWDKDZHTPfQ1b71ddobWxLXvHd",
  "key15": "4jsbKBhRCcdxjhSkoxNddhz8er8NiWDLwJieU2L6kxw3ATA1DAbrHCFYJLpoaqT9ZhCQEazjozacc66XzAXGjDMi",
  "key16": "DqomXiUGu6FkFG5v5uoXw3ptHTU3GbVgU7bNmyN1F3M7z5z9MZjcRijNMhxY8VrdhLrzW1hkjd4D8yExPQaHGWv",
  "key17": "Jm1WDrcVNSSPEykMjS5MTd9n8n3MT3ERw5823rSsriqfM6m8Zmn9NQnHQHTi1dwgF8KjFeDg7uWG8Z6BYEcbB4u",
  "key18": "d5E9TcSafEUGH5kyaqwuHWP9GGxGPCVhguB9AwK7ahH4KC5cKJjACby7Kgr4v2teYwAJQtFKEWQ7vwi8McHE6Ev",
  "key19": "4dsDL3y6Q8zcJXgvDGK7dJ984KFxMxcNmtT9fuXZXcGmLYQEjn7PSCYSB5QkVQNLGKzouC5PYsevzQmm4XwJDQY5",
  "key20": "dZ166aw7uBmgWjfYfKL5XpeeaTAnSHmmyvUVzKCwmx16hd52tDg1qmZLgZJQaUQ2PVeBZCHd8HdNEs82ZhcztxT",
  "key21": "WbpCGrMfzR3hWF6PA7fqmEhHcnoWS4Cnv48ZMAuE3EM7wN63cjVSCj7Rech27aBktg8vRzqNpptauYqAvmVXTQm",
  "key22": "39fPpzJDcV3psaegW4hznQsQtSjbHPRtUBfJqmjnKZgXF3y1pK3PdM1ixWkwepcA8L4ZFBHSbHXJUqsk4qsxbdpX",
  "key23": "oj9ZpHanZ6aGU8KH2EXMPmLFR53xSajpikyeH8zRPZ7c7y5XxbAUMB1WLH1N4MVEyWj2ZFQpmDr5qBgTSFzoPLf",
  "key24": "5SaKB9adL3a2bGdoCjSgDvjkpEBrEdcyrAvsJpn5XFPvU6RxaS38yJiqQHy8s5ShLoW3pv4ejK39DszHxveZMLhv",
  "key25": "2uHBYY6pZ3ad7hEHYBepfQGDhB17nUn3RVrbtcDMtkWeUX6YVnJyDEeYuMRbZEDeU1CSwTimfPwrnrTrASuEPJdB",
  "key26": "2hMi9p6h9nLUd85W586sRrUZH4e7PSLvMBJpQ5EY8tWSZd27MjGcRYQBFhfqRki1GSVyAZAHjMcFpYeJD1D3bKyf",
  "key27": "2n4LrRe7TzC6szvWQM1ierkLiM9QkpNDseyYyso5nB7dbmbm3fcYcTdJnunBbnnyEhGv4sLW2Ke7yqqQdVdrZfMj",
  "key28": "41EQX5ipaqVhAfbKDmgZpnECUa76mfabYWyQyouzw5W2uomgd5WZA1U9JNjWCHCLsmepSzkTmVBw34bpm6t4TazA",
  "key29": "5AdjqEca35oy4AFrpQEPgs3GmmQk3REk5QJDkwLvQpVSh7RvW9aRhLBJAV8HVMKHhAqohnV3GYhzvgSFzoLZ8GHa",
  "key30": "66t9QENuu8yJWnxkZdwij8wnrRpzzy8SEgRPzcv9xn4VNLjug61c3fby34xBswqdwrRGeBuBTdbMQ16XjkCPZq4D",
  "key31": "3Qh23ToFc4i3W8BZAkDnJcUbPwgaJTXPTjVDQA3gNQDxcUriYtzibKKvnCP8GL9FVqxkejTRKTM9EVrLzmwgTkiL",
  "key32": "4tCSA4WLr3ddepzwWQzXjj7ph7j4Umw3wV43mvD7WyeUc3TzoQ64FMQgiobptovD1Gn3CLYZBmExd8TqY943bTUJ",
  "key33": "55Savk6fqbZ99aFEomn3eXg8rTLc69NfF2jdhMSdaxVU3Wr17MmbNK5YVwGqThwyDhwSTWkV9fdWvgEEYNwM2JkT"
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
