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
    "5eykhNaf11ct1KsMem7BjFsQRCu5ChPKkPSnCwNddXe3r1kyAx2pzhLPjm1hsNVieetLFehff88dQDkeXazUymBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKmNvcoDyDPQX2zd1PozubkGfsgc2TbFZWQJhjQUEgbSYEDKpr5nuUQMNx1q4SJcaohssgSXkvUzE8zHJo6XhBY",
  "key1": "4dBvY9SsdrSY53n3tqHfFAB1SWE7KK3ENBFWomDJpFvvugeH5JGbejyAqJj1XXDXMsLVgcy1nDjnKwFabzwDmhxw",
  "key2": "2PeD9jwVXwg9iCSHonKwrg8KhDNJkdbB6cvsKaAzZyuGAcHCkofhhQMv7wnSrG2HBTDMfcstbvzxMMqa5NVHuSSh",
  "key3": "3Cd2CuvqfDLLL9wxtsFgjCQp1oERpznzLZV8bztYjHFiVoRhuCG2AuctrwoEETyyhD4DthU3kd8kABDkYFxNqUg5",
  "key4": "4b5uZSVkrNPo7uuGg6yFn6xgoHiSo5wpZQnGuie249NxAwXVaNqjhgEKKRyBuwRbJpGVTHiUrRBwZDuq7b7ps3EY",
  "key5": "wPVVbEbofsdLQa6bMC8B2tSRrhhDxPnPjRenXQd9G68kPesVHXdBUkbQ5up93UfGE44pMGAafXgRLTdP7Nifjgc",
  "key6": "2TwGptQ3XmkjebfiNtfrPGofjEgGNxeH5nEQjNtGfAh5z1uS6wBUHZpwDWw9izMjTX2YAKX8DLXhBhVVHXwRHznc",
  "key7": "7QCvyrvm2YUd4Hf9qAUSvjQ7AYCcbDFsEsCmGyQYaoGodkT25dF17xBh4EUy6NRKwLkWg2jnUhq784rqMqdD8QW",
  "key8": "4mM7JqhxwvR9fa1Wr75Ewj91Uyw6SqwYS7VrYQPRdsk2k5EmfWmRLUbMLnNWuNeaX51YtqiiV14qjyt2Hfs1baUL",
  "key9": "59pbx2NxY5bEA3P9SNVGPnFH3UA3EiiuN84aFJGwBzX6tLd3VBRYPc4sMbacYceoKTCdV153UiZ7HhsH6mwqrdFX",
  "key10": "2AP8LmsdnW8kWbbxScHsDkeXi4mgUHy4we3dZBtK58C2xtWfYYyhRpeJw9Hfrk6yAM26YWF6SNAcr2TtGWAVFH6",
  "key11": "5tKQRmutD5nh2z3J4SQQB3zdr5MPYcyvf93oV1T3MXkimcnmVrodHivwjz3Ff8FjgZ4RiMe1oUhoxddPSBB4vBci",
  "key12": "4KEsLedT93Z4VfVBKHWenMBp1Re43da5dhzskDe9UXJEBB3mZBhjmrFgRbGXTXcW6y8VKTZzDbNdrCEJ9MvmeLzX",
  "key13": "3ziHRhsx4hUukJePNWStE7TENUEd8weko5C4nAQXx1HM66NMW9sMC4atu2yZmd5DaeUp4iiwjnBDQZi1fx82XbCY",
  "key14": "4sTAxZJRmwuMPqjYwqBFmuvkoNjd8xGqxg5iF5Jin21W8f8WxwL1yYbkJxKtGwPiczVtrhHTFBJu95hgQfuFMbL6",
  "key15": "2HJHpQSpeNfQYJosjoDuMLX2voe2xEjsbLyjPp9EvVu96AbLUn14eK3Y63qjkP6XiKk5v6DTw3YnDxaoF88M1pb2",
  "key16": "2qkhEEHuj7RqBLndjkS6X7JvXEnE4kUkE6gBVMz453Td3rGiYGN6QbCc1avuKSNYYyXgyUSmmKKuqfD9cj7W2UWQ",
  "key17": "2NXGrUQmuwnb6SppuN2yLhX8U3emsGmmjLC6TsNb42qk4zeDn2TxDKrX4mq39DSUzDm724sgnB4Yi96LV8Ti6jvu",
  "key18": "AyL8zdLD1HWtvkufCjqG1RY7Zvk3yrXywYAXFEGko4TixNxnmDfpciWsSpqeGcxn8Y8kctLSWoVvkjMQhJETaV7",
  "key19": "5PKQUu5TaHPnPzm7WgBJi21ZzLTjVpaCyrKNTKPMFJwPU669DVcZRvAt3T4yXXgAUB9dy7V2FJ24wQ3inbV3YFcT",
  "key20": "2bpbvb9gFRx2gS4rWmxVoy4bkxwZeYs12y4AY8T6gG5zijrsPD8gL82Q6wfh77YiA7S18uKbEyRobjGWc94AoMpC",
  "key21": "1oQnrzqRdGUu8QWRtN128MTS5sGgkJdtJ1etjitjbb5dsh9BRgQ958gKQ3RehyzL4qozkXQFAAjcK4F3jZyFKWu",
  "key22": "4kXwZduBAPUH3F5hzYYYhiV21XVPykqJpvt3PFGqhuSxmyxjyctia3bYqsx75FnVS3Z7CaEfHJZGLJHWU1H6EVRh",
  "key23": "2jG34FjUH9sShm8g4nWpBx5rFPXRRTtjTQGAkyvLaaT3EJEiExZHLcnuG9uYmE161ayLprwvCk3ki6kH7a7GNfPD",
  "key24": "3RPn4pPN1JishPgsNQuqakLibcomudEk1EZhEqNYRA69b8j8t5Q3PPmnDSwhuSbMYPdtonjeE3uPPvhfuMKD2aW3",
  "key25": "267tamwZNJXQT28FvKjRnQZ23RS7vawyamrFZYTYBVvv9mRtAzQS7xXGpTck8dsQdKo8kbNzeEygXqbSRcMFBSgU",
  "key26": "2FAVkQU4S1gELTEKXCzcq45guMEfsLDqVYRVVQJ8tVx8x9hnpnLVPQDF4ECnGT3ErHzmU6mXcmCdQCt8Pxymwrno",
  "key27": "jFC42wyxKAAezZB79wibXSgeswovf1mcGse3ujZb7vzoEo5Xme6kfG3fqkrH2wkNgZ8xqoCLTTPaZ2oLQMb3Syj",
  "key28": "3E1p25Ur8A6N6E1vd6o9Ept3rtrx7yZwcqCy9MaacznstphYzNjPhArh1RdutxoVrxeS4FD76uiiC8AfdYi16jME",
  "key29": "WNPMPpuEAxpr1LMinDicT97btpEhTdaHuJga1cAhTGPbAeiKWpNK9b4Q2mdxuGD4VkdSzTUtCqVrnRdyAqdGzXw",
  "key30": "k4X65dq8MgHAg3hgcRDJ7jDZGbaiSf5LVZr1Ud1jcFsTwPduKG3YiCTn1KhEUQ7rHKnJA8bvTsH2e3RkCihVBvD",
  "key31": "48S8M7xBKf3wG1cRWjooV9ded7AwJ1k5csMVi3v1QvdPfzk6AWvvv2xjEH1NYUo5S4JMi41fTxKHPENR2kmL8Y24",
  "key32": "4LdmbaVutiddiguSgQmc9LZfphriXo7rw8op4C8GSkma4s1xX4CuGjNgYNeM2HLwKLjhKw29fkVPrb4SGzEdeR25",
  "key33": "SQ4XN7NUx6uus3yysiUsuepp33tvhTqxx2TV8XPMU2QrRcDXkMRf74YTpYUbQ8ZW7WxpuzJqqcuHpjwUpyPVm4t",
  "key34": "514uKXTPxqeRE9oNtLG3LGgF9Xsiyf2xiGRZ5j4s7pxFDxM9DpzUJ7PCUiAAUBrDR4AkTXm5HWbgaSVbVXdi9wAc",
  "key35": "zGJtC5zrzbgPMBGgj4YKtp1DiryQ8mgd2PqFFsf8pagzAYikGP7hkxs9XPh9dvj3aZ9FAXcVouURoJCxzUBnFg2",
  "key36": "5WGDQhiapkTUDAKXGGSmPPZKoG9GgV4SmFo5cBmmsRb1ZWgFUwo88Q2BQRz224SWcBcHzgYm7MazTP2BGND7EP3S",
  "key37": "VTMvAgDJsRqq1AB8pk7biMgFAtVrow78V8GoaQbbqMRpEa3NtGMp8S41vKvs7kYfFRC2UqAkJyM9kD8NfdXVjPU",
  "key38": "3UwqDaykKLrxYH6RYPMVrPjnX3Jj1pwsKxyqDbKk7YoZCTj17p7bq8KNsc48Qc8tQsNeyJXTMkQaFYpRUtF7Widy",
  "key39": "Gc4nH8gaaPjrNqUym9QuYFvqL6oEYnrHqDMCD7Svu3sL6RE5KTkyzk7KGwAWkSRy1CtFBtZRSji9KJB451yHdhY",
  "key40": "2zB9cLvv8jyStPmMht62Y219EzqfAPYd5mR9V3f5Ue7jjS2HnDUWsvkwJ1HZ8jYRM2iKDVGAKQTYQ1Aoy4KtmYPx",
  "key41": "2tkoKYG1PjquYwGXph9qmbH9Rfj8gmfStk1x4UHtaiUEGhBYH4yyQftoMKXQGES8EASAWJdyXQndnm6GPQ7VBx8j",
  "key42": "2V87616CXWeBmj6YcY64b41aEoSwgeR5ZzYedg9p69or2QeKoU56JRMiWVYhG75rnfTYY84i6Y8YceFHViCqpKY",
  "key43": "p47j8meGakmfETqwwPhsUc5Gd2rHXhMzZFi66fjSh9N6jyUgrPUJCWpkrMYGDmFaBCYD99c2dn56mawEw15YPEt",
  "key44": "4FozbqSUrxQpBSSh87q4wEHzM9VJuH4fiebQQZ2M7Svb8ALDDVfFhPSwVfhR2bn9DuCgEnbnTLvEddCXZokbVHSP",
  "key45": "39ZnkJTJEMuTJSVKZumhmRtqh8n6pz6ucdfWEA1NLYKCUfVeh7FrtYvezrqjrwgypf2MJSn8MhBvx2SrvSwnx7QR",
  "key46": "4zpjrc2WCFoFGrCoYKjMjyTwUZNC5t9J9C6WuxumSLs47SDCsmMNFS6vwR7vBdX4S29eu3LP8LvyadTLLF9zxVwi",
  "key47": "52Cs5tS31MmwpYwjC11TKu45EuJj4CdSKUAirmWesEx7geJgkFhnUScJVnLDgSxSjQrYz8od3gTGbmKvJZyHxESd"
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
