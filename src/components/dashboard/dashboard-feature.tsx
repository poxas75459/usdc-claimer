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
    "3jxX6dUNS1LupRLarZdQgnyhsFdCTtbMhR9oqfDhBoLJvdh4DJxbDkyzT6nC674P4B8Ui6HQ34naPbMTzwacK1nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cV4SGbGr5ibrT54eSKRwXbc4GFz84PkdfM8cktut5WA6Hnd4VW3pmHqkatJqdJi8tz17mPoGbF1fp8Mfkw2qH5x",
  "key1": "2UUpYGStoCfUhR2HBWiN2xCmhhYUfrQPGY8hzT5UaWtHruqqm2KoDADWg9K1PY4M2HCkViFcLAy3zXnK6Uf2ZS6h",
  "key2": "3YtBqkmYhBf6Zckiwy426kXCkc7BinAXQ2TyHuTA6RV1KKj1GE4dYxJ1ST9pNTBzWrRuimCQK4EJZ4qQ2K6rEhsa",
  "key3": "4fMEggfnPqPrBufW5USuXai5dLmcCwLWpYFaBa6MMyBdRKp8ivrrxFTuUSNUGui9yRCa32rgqyYcmAiX1QoUdWk5",
  "key4": "2oBUMgL9hYhpxkir4QNM8aNhHLHhtremiKRqjDBBEadX78aNinU2xnbn8YUu67Qy9ikRVqyRf6YLQPoqHKDkongu",
  "key5": "4gd8EUy9TA2MSZmX3FUYobHRwcnMRzuC5zudk1yVmW1N7kupK3msjjYUCGg1U8qAGpKdaMBQH5urr5yhurpBx5q",
  "key6": "5sGMPtGE765J13cazVHSqxkJ4NaVJhNBjDHxfPihDKDr8VAUuCAzp7xgtwufNF7t9s2TErnmBQE8mveuPJNuefGt",
  "key7": "2jXVENxP172fCS9Yocok61hc9HGZjCeGzGJbeHcDzBkX7ReETmhZXRN8jzQ82Ss7ck7kEvHhHyecoA35f4SzKHwN",
  "key8": "2pUoEosg1BtqEDhwj5Dz6KwafK7nU1o5FGop59zggcVxQYGVzrW3krTvWthmp915WDaDaSfRYWuzosDJ7Ci492Em",
  "key9": "5H2BcxbcHNEwspc6tBtVGKgnsPnGSXuse6SsCFRfcbM9bfwUy5hkkYz5jEUxyZZfEYBHFkM7rt3m4PbunfvyStPn",
  "key10": "5VHsQRL8edETEhUazV8vDCZEgwgmNGhEXmXEfJdqRWT5YBJXMr7MDWVJpfTz5WkCAZac4r24Z5Z6tfSvcTJsnMDZ",
  "key11": "3EdqT2MXSUU4ZDUDo4AbyMubjGG212y5Gq4nVdQisfXTF29kYWxPw4CTdaki4enJH65daoBXaiFDqMHBARe9TAGV",
  "key12": "2UQ9JtJzACpvGbFVcjtsbZVRQsLiFfvQwQvnAW2Ux4SNPHuGidmrQHcGS6agdpk1n5WoNdXgqaL8THt5RRTMHwCj",
  "key13": "3F3QLkguNrg5Hp2FX6BEHhbQYRy4iTWU9xB1N9KehoSuDbonBEDFWyu4om8rCPSFvvczHFYZQhTij1m2FJy1G1Ze",
  "key14": "5me4dRwurwWQbXhzAreHtFYbwHfQaECVHVcVQLSjwcRPhiAqqouPkodzaZRk1GPkoG8od4dYuJuvyzZkj5gnw4dT",
  "key15": "43MvrqMyGCpQky86r5Q3wFhUYYHFAKbdm55YLbbyzHJJaxMPVUYafuK4TZkmnrA6QjhYNhz7QgQLcs2vt8mh4msf",
  "key16": "NejESihS3wfdUw3v69gcoY2UrRxhDYgTmjF42SGFWYr4iPNbqKPq1KaPPgbUWy5BLRdJkpwbkevJzQAK7q5u3Y4",
  "key17": "Jx1GD4riPEJuPmpZ54xHn2yKjfi22rRxrzfUMd2xquGa1fxmR6Sjerrx7VarH1CRuFJ2vHZLNBhUQeGrBiRoxTK",
  "key18": "51NsFQBVNG8cc4vpA8tiBUkVfrdEs6AsH9dEKhhKn3Lh2ADaa7EVGLWyd5E1HeEbDxuSdTtc7mZrEJ48EEd91ipp",
  "key19": "5BYZoGHbrfVbPBpVxow9XJzoAxCm6YfNVDGSJyRRFPb6mit2snQS15gWf3cXCcXdnQto8vw1VsTRBmgD9H3DEpub",
  "key20": "2SUySeFgb6p8LPfAaJKeuVbyRT45kn9UXBmRQYW5LbfhCgqes9cozXC2rCESdrejwNFWkycahYM6bcMXPmyT3iTo",
  "key21": "2ZWJ46mLNYvAMboQKhFbNtsFi2yU22W355sgYEshm9JsfA8Pwhvb6MojxCGad6tW5G9HSE7JeRY3yZpMVF3J1NGy",
  "key22": "4gwPYDv4DpSFYgQJuwZ9NYVoYeCPtnPibJkHy8qhi6pCMdq7BqbsDLdv6WCBafvu1twRSauVqqxbYcVLcVng7e6d",
  "key23": "rxkyK9CkfCd64rCnUKYgeYC6kKntwfKhNyUtfFVnjf6AazyxFcHsteeXZmS5iafrfrgxbt7RSqZtFrG5MiCHKdf",
  "key24": "2QF19dMFoCCAafiTnhTRHnAt6ZA5JpiWnM1G43714kXxoq72Nk8R19hZFSQoQXvFezpMnCR4dQPq9jVedu5NEfiz",
  "key25": "oebhEgd5gUeLrp7VLYsu1VkUxoXctcoC6b7PkndfmFsF7vUUtA42aWT45cUTwsKcZZdrzj3o6Ht13ceefqtFqzJ",
  "key26": "4ZKfgMNwqFxEQeHqqMirYukQLPANHpcjXharyJo6zTmyGVcwncXCSWo7dW1xMcxBBRjhCTNqzz8iopzmQhfKFj52",
  "key27": "3sM3hetpc56dVCyJBaF3irajXKrHFVxBB8FhnDktSVq518wN3go3QsK3QyjDo4CBFpRWJDJz3xVvjiAgAmSe1fnr",
  "key28": "48Whun9EYRKzTbYY4kkgyC7DhBqRn4osBGUjTfHfcsoPb189fdLu3zRSA9AwFCPVtk5vhKmXbQrydksNPwTMJPFn",
  "key29": "4pf6tU2Cu5A1kFXizPgHxRFQeQwj9M3rSpAyW9GhjjLp98uHXXg6vX1YbEFkFg8Kcsg8z4dpNSgyrZ5r1wZwL1gp",
  "key30": "4ApHUdELrY1zMb1hZ9V2x8SHyGwasNtTQkSMTPY1CocgSajNHY7qwGuUUoqtJiDPSA3ERitD2kcdJKpUP3CwUchw",
  "key31": "2yJR2p6Tc4UX9W4KdP1gTTTvaQEhugdgKNCEFawwMQxPXJZ1nKU71NgYpR8HL4Eu5hkS599DjCo9Ne4da95C8S8j",
  "key32": "BeU8MJW4n1a43brbgz3X18x1bec1rBUyDSn2NAtPDPyS17DDeD7wgnf5BTUQqJnG3aq58BGTfcP6bVrU13rvd5N",
  "key33": "4nXxhvtNtw7EWVobNA5WAFEerTnoG8q7hRNepHHoDQNtr99fbCvShnJ2cQBXeYABp6zwXUbVtqkWTU6J7kkNHAMU",
  "key34": "25Z3VRj8D3XdLXEDToTAF5pyhpLh9jBpEbXkc7YrBkiAVPF86iWdjqyvL47UqCKsTSnAygw5sjhx8wM3xfgkdM43",
  "key35": "5WXRY1RmBPCcVgtzGnc1qf4VyzFswUFfssKAk8SSQEL7E1d2XVpXMo3zzUJYLEYoi9QBm3TxaL7CFiAfRa4Kh6JA",
  "key36": "b4M4wh1ZetzdCMgHp841LmEbY6sfcNx4RUcY19Mf6f65NoCksQDRbQvsk4Dd5c5SAxLoagkknHtScdfh6dGGRYL",
  "key37": "Ay8VPHLY23uwpbHozWPhfKXZT4StunZszog6CTApdwyen9XmWFLBY7pXeSD1kSUBxfPfJCi1e9uqJKZdUukksoi",
  "key38": "5wZAvGkpwY7hfeKVWbZyZry6Guh9iB7ste4M2sPfW7eZ2YWfTteeAH7n5Z8Ub5N7vRdN4rQymbLQtNKW1LQrUrhJ",
  "key39": "5NhD3H1deWnuFojpc3BBFbcyM6Pm2CWMWauEMSdNBmVNY8E6bbxRm1rrDFfMsTXku1ip8x5SKsTdgJoBUCUgNrMB",
  "key40": "5AezgZYbBqaats1MMWmc46y8UoUk8kA4qtfBXXPqN9813e6mV8zaRTLfeCcLgLFgm4RQFSA9u3M3E2jMDRZXaAyx",
  "key41": "2khwKtQqJEaqXwXHrT6J6iksr9fSAGqjhb7TgvVH3MvWytp9Ru6g6GYZbQP3M6frZN4eayyqK6SuQtjMCfQq1XGg",
  "key42": "3ZYFJuPZGdacanES36HFSC1FmXQvBH2DgMgg9VaHrkbUEUwWtnAod14DhVtZa345uJB1qsigpd9jCF33QFhmaLL3",
  "key43": "28RGD96fTGUnqhNp1jexTsuXcHKcZk8N2ax3W3HMb38EPuSGUEFFCUs7JySe8HmDQvA6qitCmKJ7kBps83619Amd",
  "key44": "4H1i8TcKv6MGcmUnzKkQc4FPbhXEEoZQT2uano1d5ED6GuwGg4827rb42j72263hMboCdTHfgyY1oCVgpiSoGA9m",
  "key45": "38bYzHwS8GHh4GCUTk9yHBv1U8HARZj38Hk4MYLXaoFTerFwYzeyMWm56VbyEn63vt57st465qDrQEp4eLyCRc2W",
  "key46": "5yAAsx9X4JkGxfJBHxSp7bwMhfWvhBgBoM8xUHK9KbCkR9xjJwj9SiU8W6EVrd9TdquR4sibyJ7cs4FcDxkCSGq9"
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
