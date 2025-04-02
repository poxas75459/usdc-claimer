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
    "5iKJYqAQgVexRYexSPNfp6Z2aBZDiFVMrKd1RoD3ngYeUJ5xYincrquJ5BydGu618rB8xp3L6Xt7oexY7dq1XGdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67miUso4Z43oGA956gqH3AwFwyCAXLiq7gYVF1xiZyK8yNcSdrWEg9g2j981w3LVFe5FZ13qdekpBLem6hWGeWdq",
  "key1": "3XRRyvqNm55bVLH6o6EQhDmKfvncf1jwL3mtgo7vSe49h1ME2DAkAT1ukH9wHUA1jZAmjw5Ahn7qEQ5BUN4qLGAo",
  "key2": "r1XMqFTgChKn94J3x5JuDmWaUQpErWZRXcvAtgHyoMPgAtit6NBM6qLm48Ue4fhDdqWpNdaRz3onb7DCkSyNEny",
  "key3": "2fnQQDCet3rnGJSbhJE18hZGmSw3L3Yj3ZoB5GYtXZj9PhNbLxU7MKtFHnNkD1HY2971Yeq8VkaRWAYKXKkc5Lof",
  "key4": "k5NWrJEomo5z6ADFa4UiKn4Ba3tuuLYKGiPWnuwqk28wpa5W3r6GwbMmqD9x1GJqXHa7cbqxk84FdTx6vBwwsz5",
  "key5": "61yH2wPqQS2EuhuTP3XwZYBtvQi953cCgaectyqUi9GWgea9BYayvkoXMHL1SF11smTNBKhUh8GnYjW9jEUKtjD4",
  "key6": "4Y2hv3SXUdhZ5JKpkdnmDWN3RTRWYRWLbRxnSWDgfCWDLtkguhQbQkm8NMZCCzEzKvbsejeA1oYp9V9RzEGgG1Kx",
  "key7": "33ZPeDsAbVo1WkBaRcCG1kucBBr1tzBHYx26R3peuyPRbh22y3Vxtp7SMS777JRbhAghPciDLYc84q2yVQpy1E1f",
  "key8": "2xwzmuiz8KUbBV3N6CVH8HmnWPkmYZcDBpBfoqSBFKp4nbEiXvwD1qk6o88cE538nrPUns2pJrxBrtV1rDt98nM6",
  "key9": "5DqUKYwruZyxwytDqQkSN87jKBcX4SkBJtWGW1qWXr6EVFV1EZf24XFaaWf2NbgyrsZnmAEoqCQ1pENgaJN44cnv",
  "key10": "5CCCPcsytyVh2M54L3WYLbMDA3nkjrksVeerg6AtQEweMqFiV1crbrYAPsKXCiJyuyYMmH5jf3UaHATcEq36E7dz",
  "key11": "3NH4HzQBskqiX9XJZqamwJJihGxGuqTYVxVr8ebS4Gj6JqFXDyeeFZZihbSRfE3CPhdN1e62McPVmZ7jJQTUejPt",
  "key12": "2drmH8xY7effQFSknihJRC8AVyWgZU3QydPKjybLH3knR3PEr8mMHcexzTPzS9eYfPv51fsfWEMCaBMcPjfGvnD5",
  "key13": "2XA5MN5xvJSL6eTjUZFjaxdpcP7xpnWwca6ZYgK6BBq2ckSM4r3ZGuSzNrWgqJrJkyXmrDWDFHzHK4aS8JRZW1w4",
  "key14": "52juJMXrr9a87e4LqBgFfN9W6td1TfwcCZH1ixZ7CrH64nzw5rcd2rqJH4Af7dbpkfdcokc1YNAfhyRpNRwtFq5G",
  "key15": "5B516jWXarukHVFLhkYdF7paPQJwnhXP1rjgSKu3kmcoLxprTLR6ZSugDsJNj41GMBCBJdRfUtB8iza71DRFkLPU",
  "key16": "4AWUKsc7epPaHALVW4zZm1W3BieANRpHGL7quAEWS4BvxYmZuShKJaddJBNGf3p7tNdAP3veLVTw8miTm6jNTJEo",
  "key17": "m9jiuNuX88gFdcRUE7Z3Aiocopu73k2BCsmhb3o5CZ5Z8EEFJje93EVVEdBxHoNdH2zybJ4e21ghug5Qu579P8n",
  "key18": "3xSKCvSTkzY8RtJJoSau5bXAHn9E5KJf61CTQDv7DS6KSni2xas5pgXFxfdvN1AvtgFZ4D7oB7rLPDMRbj4GE643",
  "key19": "31bUa9NAntGytokPaCnEakXVADMr3qaRfMWwip5kqaAVNT1VDvyQtAXZEazdWeNTXEZNYuLDXJSzQb63rXVoLvBR",
  "key20": "3tk6QFQKpAH1AC2T3WrNSGQpNA7seMUAC6pfXP8kYrVpnQ5cyHC1dZZtR5Js6ppcHsPqyLK6f2zd4dZhpyFLzAE5",
  "key21": "3R3uys9fyDR3kHA9A2qHWMHfSzPt5HLVqWMJXD8i28VXhgzoKFoyPRjyjwBNDYAtTCskdAnmZvhgVVuVwU4G2WaC",
  "key22": "4xFX4ii1Xmec5FgzSuDZsd7hCfsbNoAjbcHPLpcHRrR2yFyW3xmATp9T7mJV4pbzn56NLun1EkbB4BEXqD4soFn7",
  "key23": "2PkTs72e9ymXhFGncRkGKu1HFzdVKotkYzUJ24gKgBuuYr6iH8K4mNZyYSXBkT17YmVeiZbwqhjbACMWD1cYbHYT",
  "key24": "3fzwXdMHK4UfWQANG41TWn1KjUU27JPqSWGawxMMggLYNXgoDWhBi9rCWp7Ke6qXfdsCwiGm9WGPvugyrJFtbS9J",
  "key25": "5F4PhubA12QYuVvrG3VPHbt8TpaawBfo5ZJ9Np3zBCGbWad8r1EqeUvXhK74EDEMzdy4wabyYB4A5WLJhniHEryQ",
  "key26": "4wtwvW86zp81fc86Um2ShS26xCniUXt2CDLZMV85tpSRqjsZAFQVpgwdEs3K4zBVFyU17RoJEgpqTJ7fkD5W3oq4",
  "key27": "3TTj8Q4SpXLwsfVA3qpBqhwq25T3TiNyixApy8T1NyvHSBtNsMq3uR5eoxeUoYFxHo2pYuyvGyuzGSUwXdrtwJrv",
  "key28": "61ZC1YEyPscjiLXwXD78R36c6SpTLaWrZ67TdJJTobr8acWXep57FmK5rQUEenRFKa2VMQbFmTUwZNWTujjmGs5C",
  "key29": "5sxogDb6YXmKj4LKcbgEvnHwgbNLvf6ND1iWzoV481cvcdNRrUeZqBzu2ciRhcY8ZvR2EEhx9yJhEx9BRqE8V1X1",
  "key30": "5BGWTyhLb8WzW3VsyqF9maZyrbTycjagZwNvvEMPouj8PwcC2dQgnPrdu14Emc99YiN2m6jkftShMH5ae5pzSL3q",
  "key31": "5eaCWSVQxKN8M5KFBbEbTEU1rKS2QZ4McayAzexiD9RyxuFBwYWtA4uJyn16cXAJiQPZNLnzriP943vdZg5m2Nsr",
  "key32": "SctRZ2RPBZt3ci71bn6NbKYNe3SppGqtn31W1FzZtzrhKoa8vtaAGT8TKTHtuewjdYNWqVRLy1dChXidJvTyGrc",
  "key33": "3egTFoN6HsnTBTeuEQhkXakC8mwDFWhnDV2rjiGvH1sHBo98jvuBANcrnbrvBaXgn6oCdVFZvm6PmSErwQCGQiMV",
  "key34": "2AUFSa7yoEU334KcQDhdJVR2pjmpFGeHFgu5pVCoSJwPsQuzKQH4kEJfDDjb9EvKLSGQnbXZctSrWBeneFRG9xs1",
  "key35": "29AitUkm6jifiBAHSVFNVdgoxREsGhQwau5kySHK23LsK4kiWTNqPqj27J14RnxM3VEcuTu8VQr8yrP2Kz8JipGx",
  "key36": "4113RZLty6KZVD82PSr6oxhTe4SXkRj1abzAUznBZTJTAD1uPBcoiSAEhvN5bKJM7QNAL4LR3YR4CzUJH5nGm5Rt",
  "key37": "5KuX9jTQxFDRYPsDa5acxyWkTAWmLAqL9qhHqGAkQGikWmpXh3woPyHU3BL2TbLxU4phoaqq9QS93qc69DKTGVo8",
  "key38": "55ae8NiyNCN8HRfDx3tgpQA1ZrgnxXrgotnPdxb6XQrXwQkLdHcU5FDtmvPdyNKaM8GB3kTQt2Ap4dC5aH3QiAhi",
  "key39": "4tc9x6q3KpRKsGw1f584kPYKHJCCDMt5AjPW9bKxvzcfDkAUbwJhpEyFnJRnW8e2mN9Sg3H4fswaTWHbAtHQxyYC",
  "key40": "5GxqQzY1JKJ9UdCH6KREdAE8jw3nMzGYAg6XbWQKLJs8tUTGRDhkT9yFXmWMjymYRZVV6TrrjYeZUwQvjTNU3Q5F",
  "key41": "4U1FCeaud3SKxDbGy3qzFnoVBXvFjnPyvZbYTyz3i9yhJ5w75o9Yw4ZnJwm6CafD91BizMschDzztj37PofYEqsr",
  "key42": "3wg2ChzmuZdhUd3MuATgxHrvUEGum2CTALTf1EtPw87fDvdZLTQ5P8AxFRvzsnhjKYmQCKqKLK56j5avXW2ySRWg",
  "key43": "3M7iZqtqmzfexfGYhwyAbFQ9HaDaHUSD9KKUBAiShxEo24dj7zFQ5CTwMYUGkC6ot5VKecyxY4fpbua7DQih8Mpd",
  "key44": "2SGEbjqXMBaFiLAc9LdWJRvr3UCWmMV2xbs5f7ZHPghmD45rYQAeJisV5aF6kYBwvm7Ldjidw3MXrxRmDnQrDyHz",
  "key45": "5njmbyGUviXfrb3hz879WX6rXDNTZTQ53JyRSQRLxwRewPfaVWPLEzdi59765szeEL2FVRA3n4dnHUfHbB124b7y"
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
