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
    "2nnWtCcw49R6RLbNi3TTD9b4ad5kJ6EFUQkgfW8WPv5ysdau7De99LhPSyWfpds5irGFGcdq1ym8RrTp5yStBezq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vQCiidXcvcRpY3hNChJw8zHSxVW3dUCztaGh4DNcRgdfQJ5yr4rLVDGHbG7Aorio1vLu8sF3Lxv4ywgv9Dw9xTR",
  "key1": "612C9GMgig2ZTEeC5W5ayKzfK9UgHHRdDbkndu6MsANTGAGbn4G6ywc1mj1QHSWQFRSwa7qdtQM564esjAhUkmsj",
  "key2": "4rMARZuhBz1uSAnkehRKU6PhgUm1PEK2im526WbdCH7YB51W5hnTjhEg2ALLxnzeTnCd4HgGQBnxghN1JPDBT4HC",
  "key3": "3kY2JDBYPJ44Xp1AAjmn7EKeABxg2sgjSrjDY6WUqxLXDRzvoqvmpHhJVvfCmFaKp1VrG13epRxcfXdg7tQFzhzi",
  "key4": "Tj2DsyvvHr4dcjAqk24EusBxbnfE588uxsy1U5tURTfe4vZwfCA4P26RXCDAv1ypwQEa7XUm5Y183mEJAvgNFdE",
  "key5": "3jveT5g4QjS8QiBGixh9CfiHCPdg7i8zsgFjogiDNVNzWUQd23RjLDDt3jWH2Aata5sY6EV5jLs82FbiJ7RJvFkH",
  "key6": "5D5MKF2ZTWZ2NcecmgS8ZhThzt5T4hZH5BKFrLsyP9BtcvvmzQ5bSUWQN66FQMeEyGkM1WsswmS7XG1Gpb6P2nJK",
  "key7": "2MoFcjtR7CQKctwfPtmYn6p7shbk7wjaQyPU3Sb7gTk8ufMXLfgCTqu47xFe7EddzWDoCcRZkhaB2ZxTdMm6tM8w",
  "key8": "5CaDjCZ8v9hroU5sYoNJz5onQFWfDh6UqxsGwSBKNjSCuJnnTTV9i3y5osMp7RDWRNMogGuvNzT5ws1F23w9Wbrb",
  "key9": "37nSuLhXmWBPgJKVJmADi9hD34njoU5MGyvheZyRtXmphibF93KrBFRMe46aP7kKkRqu9jyisb4qiEAMAwkGHqnb",
  "key10": "5KH1TuMEbnN9sbGFCksV8nqihf55VCFo7EVX7eGdpuX11kKGb8JEWA7ewJshHykU2hr3sTR9d7xabE6NjAKLQvq9",
  "key11": "GevuiwWHmYdFxFmCCqe1WTv3bKdRRhVfQGT3zGKJXCDdbfQBwn97zFVjg3ukH3kvy2yWdYExtXby3ZUpcSnsuDn",
  "key12": "5XwAU6JGXMtqsBEG3AvBEDNJMKAHe3SmkZHQcBgmHCzxwh6QPFWZjnUaTffqRwHbXEWupVHN7PGnB3RUziZVQfQm",
  "key13": "4Xsrq3P7ss4XheFi8S9zcy2VLrB3iKe2yZuQPyx68HbA6W3gSFGPfG94u4m7CJJ8vCFJZDbvPPRvWn2nrRaeudSD",
  "key14": "4XbC3N3staGRsYa2XyPLWAa5UbmHJh6fjxi7R6vabetBE6BU2Nz4scpN74U1opgja5kA5tewnzWVyHewbS3o1Ucy",
  "key15": "4zwetnrGKXAy3gLGy1cniHX4bGzXDwwi4QeF4Ng7Qf7VCJULdUzPh351UPWXqwTxjkhftGUvQyDf4dFyfQsKvmh3",
  "key16": "4BDw3xmkJ9NbJRPd1oZvDyUxj4EeW77XaVVzmCFy68tT8ux6J7fuEaRNgbJ2tQay1CPEYm3dt1erdfyDjoZY4Z5h",
  "key17": "3vQg1UtgdaNijXpt9WqDeTKb2P8ezHtoH9VgMPhyKkdP3P7VZieh4kMPfikfmCgk97XZnDfpsJ3GMsnoezu45ASw",
  "key18": "3FY7LhDaWZJFVkqQ9gjCAqE3q1dMcdVze56huZdydS3nxPAbVRxo1uNKhkGG28b1hs9LKMgAfBM33frsr1FpvdrX",
  "key19": "52uMj4P55c9Y91ZH9tewUJLufLSmvSo8hzTUgPLjU6yLJH7jtbwBA9dxGvzLhE5Wf1sj2wNbujZUHDQEeicPBGeW",
  "key20": "463kLd8i5jdj15apevaXfMoRm1tLgGrT6tjDHpog1AwPkJawnrhJysV4qzuuY1o4L5SMemf1NQDmLvBKh7fDheC",
  "key21": "2uxVL8csV31ahdxj12HsDUxczB8jF36HfoDiMKGK2Pn4pHxvmbP4for1tqQV4WB2jVro4dSCJeaVyiLE5SKmaCW6",
  "key22": "UPMFZ77RG1a2SgtF3SKpGFzv8KYr3qw1Jx47dfgV1D1DyQRNFGUk6A5EtmzemKFVhte99NKQWeNGqWDpP6XsCdh",
  "key23": "5qqEWJr1da6euGfXN5ZHPSxkR59KatTCiYgvBZRDMp7nvrXqU615yBZEpHYcEsfDLNFTPSuzzFig6ir5fhDRTkm",
  "key24": "2Go9hiAJh9mUJtp9Ksh72XkJv9exbHLy86C8UgjcfpiyNj2Hw89L7uXb54aWYKxAkUJgkBeNHbXrHcCDrKxTxTfm",
  "key25": "5JZkhD67e7dLK2UWWnpnFZLctPJo35QwwqW2FtqRjv77c3LknJXNNfw9Qv2ue1k9DqTAxPzjdCacjwduQCHac8Cc",
  "key26": "3kJyqGRBjvozimR5bADLhzGw15GLbyiuZqGVRPNWqxCciE3585vsYm11QA8anQXW3i8xvgashpUJuaCczEM2W23v",
  "key27": "2EPQEt4JYnrufRuh3yekcWovSR9yVhaPSEnfAAKXPnKvrKQc17Bf6Puzo4k9JxPfsmf3GrUHnU6eagZKj2bQeHcB",
  "key28": "erSRkJHBaSMTeEYmt5HioQwaYV3L7CjnYXZEsK7yxWi4AAQ6gWC1YSY2iT9VGXAZcPzYSGTDB4AbVWcs5btf4H8",
  "key29": "25DjCvxqsKtng1p4fXZhrwxEtxDczrUzymDR2u5JJEXoVSmzwH7EkzAzFbQXkucnSUhy2jrLPgdz8WmeXSEqbBqS",
  "key30": "2zKd83QkGHbbbpPUgR7ukp2j7L3BQAsawVtscRwGkCdadzMsvrCPAb9c46b6VsMswhmiTQrdBp3uuDZmJSRuXgci",
  "key31": "JXwrPuav5yWGPw6NGXW6SKTRPvRRBbaZWeNVNkDzMAaaKwH37T2hz6x8Fzaxm4o6w8SV2x65yErptDyKcH1yU1P",
  "key32": "5XL9kG9k89ji2o9Q6Y9m6dEudYtw7cHSUFvapZ5VcGUfjj6NgV8CCsdwGcXSYTtJArdTCrct7McyTZtnmUm5wb4h",
  "key33": "5nao6yiTQLNSaybcGn4riU75YVFUfR5NcpWGpVmH1vefseid976LmSUKVGsH7gquWVjpZjWVCbcwuretbeo419H2",
  "key34": "DnAHdMv6wzHyhe2Z2cAPAsSMSj2x87DkdcaX4Qb9Jqtsr8U51Tt5TBCiHhExAVZZULtuHviMCPsFaFGW3yCoeBC",
  "key35": "5FBhPgGtCM2A2rT7GkCbWYS8cEN8YAGzuPgczhwTtnFsEesS5cgEsRajznJqmMpduChYupatut2SBKFEndhzuFBt",
  "key36": "23UvB2kF3edXH9zgnLf4MMGy2TYGJJFdM9rwFiRnKzk3sZ4c5DZKBM8x4XLC8DZqfBqhebtMAvMuxkXAjjrz3uYz",
  "key37": "5EzDjh8iDxnFYnLJqQekMoums9BdynFGrhraJgYvE5jWgZnr671DknoRJ2rzMM8FNT2fJndhwqz5c6pan24r1aqv",
  "key38": "22vgKpgxfNxeC9UfhX4LJQY5CkVFYaW1xYfUohPfCLqVjvfEURzA9J49agNYvzziAJ7D8NiyY1CfefFuTm3FpeQQ",
  "key39": "58NJUEAvaqXYMhAFzNjRgVuekiGaGQpPSZX1HXqaspJVm2sHi57svWB86yL7QaJnsfxYe2xT5JVe2AKYNL68esTP",
  "key40": "2diFzB3RaoEpUL2DwhGkBd9AFcN4mvBpXqqBF38gMdZuyW1QXwD1Bzqo9hKT8W3B19BWmpQ1JGedw4DBwr7qpB9g",
  "key41": "3qCziz12Q6YCD6BT8cMer9gxvqQuSvw3Vu7Tv8R7KwTWvrvCRyo5Xjma9QquT1N3xL54raZBVHkW5fXnT75azLo6",
  "key42": "44oN8By2cZmpJMc9g1GurATFT7ZEmNRSE3GF796jP5ZZJBJU2n1q73nKgKGPy9z6xFTWBc4dPBYbEotdEr8Cpji9",
  "key43": "5z4HfAKqiFK1TpsmjqnFJfN79HuG8wkH9wD45QW5RfDTn4LtY9kA93Kew9bx2nT2H1TJWxTNZMjziV5iLktcvgqe",
  "key44": "anRcqqnX4ixXWikC2mA1HS6n6Nnx659goEWJd4oQEX2wcbrs264PzUpa4TLcpK1G2jsmd7LaeRvGo277iaWAdUJ",
  "key45": "snu8Z4azQ5sBUUVSrLoKRU2YkisF16Ffg74wF17QrTPj16tH6rPhRsryQTw9LuDs85bwtEkNzvZBA7uKAJkrr9y"
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
