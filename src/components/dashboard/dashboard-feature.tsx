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
    "65oCdrcVgnWsLqhmVGU6KjykE5ybACLNB8vZC8SxGaZUcAhkbNRmiyoQjyco6KJLJhfJhMsMv33vpL9tdKav91Us"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZnnjiuvnVieWFn8dwV8sT95FAoSyAxjHLcUMqs3wuh1Ntvye7wupX2Qh6kfir9ponrCsA4qc6hnJGCcoQ7joLQ",
  "key1": "3WxdykLDJyouVbU9mKjFeNLwywiDxFEMCGPohZahAXPJj8zRxp4owNDSqPG9J1JxpwzF2vsc5kWJmTJeyzcFfxuH",
  "key2": "5cWmdZXuys5TrRVn2MEYrb2RZRqPLThpeuVLL32wsdSRTtPsabXivtnF1UNwK2eG6iMVEFLf6PubMP2a8M6MSPbb",
  "key3": "4hWu5j55NziuheLi9ZPj1ir83hDycQ6RiSSyoJ7srT1TuYmG4hfsrfz9VbZkYBBzt4Tzt492PPJT92evPAGen2fJ",
  "key4": "4EPxcvEr9nWrvvSCpRhb8qQe73FdukpcTeokjwxTYh8FYUHcMufQC6JXDEBjc9HT6aDQR2pFVsVYoZaSazPXwnt",
  "key5": "5U9TqBPs9tExgnh6CGknGFG47oiH9osecEjquffgQ8ycwpRw1FEXvDqUYMxvdMicSrhLDYoPi8y9P6eb8Z5TgEA6",
  "key6": "2cUkEZ4eKxG7GZuQBMQD6LfR35o6ZRqv8w1B2B42MkLhzp9x6CJvGNc7zsDsALepxAJxG1BoMuQmDXijSAMxyu1o",
  "key7": "3iL5sSNEBwr6uh18LYyojv2mjXU2BGTFYxE5pbbA2A5WhBGzfmtz1Wy6aS8h9jg1B62TLxEjhsDYgeTbsPQkN1WP",
  "key8": "3EZh24gQNx8ZbiYJn2QL6H85aPzK8J8n7s8X4v4C6DTQyAzyZBffKHgwpD6GYgu6Ptw2oNfM5bxexnYCQjHagzTp",
  "key9": "38yF4QsDVerKPocPhaRSfoqVRTQzdm53dCmtrne8noGNHQPJ2U8RPdHxmKfJsnBq3N773kqF5a5nnym54HdkXzKX",
  "key10": "4hMprdH4DG1mGZMDJk8bGWnEZabQuPn9WxNE7VfdK59WHwLwYoVMStzpfMZpLVErztHENW3oerVCnPy9Wg69qR1m",
  "key11": "4cYUUZRZxKGeYfn6dM5YDYUovt3PPAnVdFu355G31nA9sJYw5noLxAq7vUBKz8nZ6MhamGk2JXmsV24LWyuUCLqe",
  "key12": "4x3kFUR4Eawf6W8FyYqhzHCFSw9PgC7kZ66L8pJnMv5GPwCfkeCz6HpSS2ZTHuDHuKnCUayv88zDQ18c9qf5bEhV",
  "key13": "4vXZua3QuYDF1CzWWdCLLXeUed7S9cDm35zG3sZLTmw9DC4NGo4RVPtzx9iyUvmjPvzNtZjM6PZVsQGAYLiG9W6Q",
  "key14": "4QAkFen1vTr5S2GB2CsHjSdkucbmqm4s2Xx9fRDNtppPrqiRm5jeBV5yyu32HZfz2Nkos4ryCk2nNGBUJAR6XT5c",
  "key15": "49GzBMWRJwSxBG4rLsmr8KZznSJyKnBrbpaqrbZgXgrXFpPSGWQJqtFN17yK1PHdmbPj8gK9Keso1N9tPh2VDiVW",
  "key16": "23Mqzg9XN8G62TQtCaAcsd1mMq5BhUWpNx5z2EiU2BUKKDYgkwc9XYi9AErta4Lz35stV7rmEVpUo5f7acknXAT3",
  "key17": "2b6d8zJkz1XxeAyaa3MntAnGiJRR7mzaXx1a7wZ2k372pVi7fwE2osSjLFHoqy1scrTuJTKf5mevBUCd3uDVsspS",
  "key18": "afZD1Snz1iqJ6wgQgSeitqBb5v9kpg1dKZQGNtBHNCKrrAMHXeNdg8nXvYnizF36KHHoyyBA9LsLjiwPkCFTCdG",
  "key19": "U1XFrCNPPKFNYBKzNm7kmwKaEy7oAyNe4Zjo6jGVmwg98H9jWMYpy6nS8nGm9DjDQYUMsPUox8rL3SQaCPY5roW",
  "key20": "4kr5bw3aCxrJmYveDBtZBEuaMuwpJ6N3kxxL5q9417U48k9TnQtX14TP6ai5Mo3FZNiu914oz8T1Q4pnQRAfVxSy",
  "key21": "CCNiiHwrYz7DVLrvfFXbnnHtFtp5HCofsmEdCAVNdCQVf6A8b7w1VwUUJK2SbtTdinmcUPRRvDYsghNxHS6ZMiS",
  "key22": "dPTb9bAJJwW7jjU2aZ4PGmGqk5Rzc5onXyavMRNHGHf9BdKdXrLeHZzbpjkdMYsUxHJdN8DeK5aPwwVmSpUEofj",
  "key23": "2TeFSf5vodkJqPn4pwa9AVRprKUxcJcSbygkEhctaAz2jK1mmGQspfRXhpf2wv3Z2kqXWhexWRAcW66gHwEm5fxD",
  "key24": "64YPYA6nLpABBPcjnrDN4rjot9o85Zq5ENKBEZb7dq4THrVtMPBgS14nVgpkjw3uyccZ94RZZyvtnq45sMyRmSJQ",
  "key25": "4oHRzRJfKV8rnNvrxjsXyLdC2ZzXCipqui5FeppLMJymiw4SQQ3BqTpEDQBdJizU6ZFuL2nkJvtHaC7NvZpnFTtZ",
  "key26": "67b4CWA6bjfZ12jaAF2CthvzGAR3mJJttqBF7XLBPbzKDQDzXAHdYYrXPP1rFCQbAuneAJhdWGqisMC47wax9JMh",
  "key27": "5QfKEjwuoiR15BoSURBwc3vNpM7HJi9PFCcU1QPqZM4XPeGjSYJrsoxvG1SxbBzyFZSWQbci1hBhdWe6e9G4pe67",
  "key28": "Bk6mJjBJoUQi28vzd7vTDeZMYtCGbpPRDmThj4Uy1Hm5KqZHyyjxHtwfQtHeoCfo4acapxwnGxr3btB2oYx19i7",
  "key29": "twWuS4LEM9uu8rBKhMmkvU5bEKgf6EbQMusv59HcZbrspPJovEDJftLzoib8d9Nm2anLNhJbo3wLoJoKm5ZyMce",
  "key30": "3vmEU7M4T94xGXUfEiSaPb4RghbfrVyAf3UjQUBky2MmbAL4SSQ6sZDrSzfkoLtoLhdQPsKv8XK6qxKN4qs9MVZH",
  "key31": "2BoDMPMytoq4ExTnWjA1BMf92YxqNSUw39fcbUkivh6XYtQ3DeT4JTQNVFuieSV2NJFga8rzWNc2idhyqWntpypV",
  "key32": "386uAhuiZX29CpDjyLhi5h9grC5Kxj98GnHBVBrDxfQMTg46FfgdLuBVaED5Z9cSK75sjUKYgM27yKFok8arFjg7",
  "key33": "4wgkxEgoWDJW7daapZTbu3Tus4ibWSSomcXV9938x3yS8bTkVccFmN5iTdDrnbwRizcFCcWX7oSGXENw4aj9pPfV",
  "key34": "GWhDGq7A5PTw8tHdfcKGNmrsLTNqqhakvsxyZjJcf9pCFfXqnXuZnkArXbLpP3gGvtTbyvrxhFRAufrjj3Nj2VV",
  "key35": "5CcsgWXwKh3vxRAaTdGFakjvjCf1LmvCcWENucB7Wdeid9U81aC9jqLUn5PbxAENqVinZwKUzVGcUrs2gFohDsBA",
  "key36": "3SGNcCZ58g81WjbE2EWbTny5Wpdkv7SCRsNURntc7mufKtAQQXjDNWh4nYgr5G8fyWmVkpsd51wzSyhHNJmTpzj2",
  "key37": "3zzPmE7iop9M5TJrj5aQ9VfuikfFFiEmdgbEtJsJkY6REiBpxRQ66JdvLZaGEdtH9Jqm2fZ836TS9auzwq8e4T3t",
  "key38": "4kyESs1B5y6BD9KkKorERrWT2TeZ611GVWsmMkSPTWEL2HUmkXdDUEqDm9H96uEiBZyAZa3K4vS8x6zmmrofgrow"
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
