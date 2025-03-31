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
    "271ZEHJWD4UbxmAeA53bWFKGnLWN6z63SmHv8YYhrk2oVmvrSsbxMHzXCEX51EJiFtNppDXKMr6Q3D863go8tjVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yKVR1pV63u8Vd8B484dZePpwaEdRLfKN26GnTF4riWQKFYJxFqfEF5VEw3FWF18wQByhEN4v6hxuztn8PmPeV3K",
  "key1": "3S4CA1Bbkrfe4Yuw7uferw55dgsWLGjbjrZ8m3E4Ft2Qkr5bL7kUpnM5coMtzFAeP5qurbNHZjPgHLzmGWbDsNzF",
  "key2": "249Em5LrmiobdgA1B3HX5Xd7nPmawwkXS316QG71rATFTUTGSXQw6z9pGBnYoHop7qkAQYWpVFzLAUvXy36LFrTe",
  "key3": "2L3KuibZpV2jXRAJ3L4A271BFrUiNC3TKs4rcB9R6ohhwwe1aumFvKJnC1WHYses7g1iEoLbDyJ9t2ip5EwbgQQd",
  "key4": "4tz82AEN7v7MzbUoV98zaKVtRnpCFwUyzw8pEmPiWZBwECy1BGxs2xbCZZMnvYDcbBk6S1f8LMKThaxCezMCSRru",
  "key5": "4TDqBwBVcrxSpQMo3YeFgqGWypBTTEtHFFmUSm5YdX68kJB7W77PnVV9HddwhqP8J8hxEoSVYjievAxL8Pngupfe",
  "key6": "3rqhiFmmJvEZEdYdB9gSvyJSg9ToggWkQsbKDKWe7HsiBhNmdkovcYiZqWrMxGwe1ySrt6VjiiRWD3j3xndTF3wL",
  "key7": "3JRDABGnSiizbPXeKsAQ2rF1yCwAwJpkiJuSeoJMVGxcQ3dg3pkSxQkHRboGu2FuAiPCCgCVV5ck2PhDhNC6T85g",
  "key8": "3YCAzN3Q67B7pPT6mxdRUSyjfqCnTngPHUuK7rzDDsqQyuP122UWPEHPsA1XSgFWeo2EvhyzHyK1BYLhwi9Jd8wf",
  "key9": "RMx7ZrPrzT5kr2KRCtuwXJPncPkbEnrEzMRZbpLDMoWZiRKLVzwtg1i6i4vdoEXFg7HoiDwBwL2szFNaKcRJVyK",
  "key10": "283ZJ5RG732fvURJ4gAwZoTapCot1rPwbBmKmTpaGeRZwnPuzExuycMykB78jjyGvsZ1yRghZpjMTN7CTuCDH9xB",
  "key11": "64QK3qT8chYnAgYGhypsEAMHbpnvfjTwYtHqnR5LtXWNEKCvQfggjTjzKjrq1M7rkJg8MuhQ26wBhS6PKhJSLKL9",
  "key12": "5fwmdAae8Mr8EufspJ44Y4px7GFd53tmkf26HBkVyG4Qcuovn9hiJR6CTXRV87YP7xVAyGNiFRso2Qf399Xk2anY",
  "key13": "n8hyNmUaxgGBbupwE7eqfmPyxkDRBEK795BESRxdnWHeXmbpQe7uo5n7epHYyxakZFAvPenEN3h5qzbr5eDQbVx",
  "key14": "3F8qAEFtRai2bRbtmTvPuSsGkGxh1vsccAnCAZRLLqBK1wDhFqd4cND2BKZnvJvqjnUsSkEW97GUmVieUzFECSjv",
  "key15": "27BSgG1Ng4b2t4e6HWSoK72QaQChcxyDBmmTjX4Lv9J7csRkcXThjU4XDQEy5kKzLHebRpcw9LLuNAPWSd7o12JA",
  "key16": "5ss8Jxq2Ptim5sExhcXnVVEiY9NSjm7LBkwUVNbXJJEhFzXtQ4bf4hfpLHeURT7yJhpxb8noQsAVfDp7ZgRVBmB5",
  "key17": "25yTpiRo5ku8qZMyG7dbHxzDTBNPQbEZnodYabjEohHnvngJWB7yEBR1xQYuJMbHS1tJUCBK2BKSWq8b611qoMHK",
  "key18": "3joanXJK2RJfp8fwLe8Ck6Q921yRZSL3PheY6WJUdfDhj8V2SxTNvd2wvsq8XCKVHiC8THovayetz4Uff4PxsheA",
  "key19": "3qApJdU9KHVxvZWkra6enLoVnNtbW6aiocrVeTGeyqiA8vNCqEs2a3Hnijh97tVDLf1PuQPtVVgzMMS48whH5mGT",
  "key20": "28WZ2kmAdN3tNnyaxGiGnMuDScDMPJDiVFsMyFrkbwZZgNXM3maftHkd7r8TewVxkWgcUFWsm2d2Ftka2iMa4kAe",
  "key21": "2ckwmrLRjMCpB79YuKTY1TCnR6WEji5his6iZNKvCrRBCTdxqrah1B4Lp5BWfdHKz9z89ak2g3wpT4A6DQEwuVk1",
  "key22": "4SfsntQ2ApBbAetENuwrTK4LiAPMVQyph7MKmvfMQsjDjAm8GF9h5Eu5ERiN8MybGJToAwvEBcWxQyxvxDbr3aYj",
  "key23": "2VBCzw6ceJzUU1RAHWYmS2535yAYKCCigxb4v2bpYDjiwhKSteHXRg5o82a6CBiiHbJj8HEo3J8KyRoZNMXj8peg",
  "key24": "5tvtmevHGnmC9gzqGJ7mhv1mrQtVVMU6VtyrAFGJ3cWwq58NGmsr485E3p26BsLv8NugD8EFQGgt2wnzMQ2jJ9iZ",
  "key25": "yZsCeEMmaZbwYdMzwqhW3YCoVsEhcgb3xjs6KpekyHrLuHTFxJmRSoc9cHrvhdMiYgiVn5z9hGV9veh73YzHNhZ",
  "key26": "23BdqcJKhCnsKCdbbW8RQKkLRpG3S6WZ5fAgG6QUQ5KLA5i8pTTDM7ArnQRNAssU5zc993GQHKB6DwYJp5QJsryY",
  "key27": "4Dm9sjzdBbLbBUA3PaaHBfmTtu28kpogvX2GafBRoDypoX6iz2KHXvhJn4ZoTuSEGMixG8MvDrHhHG827ThKW9HR",
  "key28": "4Hpj4USwLhcBZpzrjgxoZriB62pjKwbaK7cYkkYKQM4hPiLksrLUzVeC4GbsNevQz3fPkLi54sSJMhASnbkPCBji",
  "key29": "ZPiKoycJZN7epxfyefJnTByVNSz5nDrhL3692JRuccFDNSmSFAeSM9rECz1kQNvHE9Kb2UDoyQXdoSdSVekH5dF",
  "key30": "5vHMixpzzafHF28U79q7xeNKmkYXVWf5AJgDHjyG9NMGAudZYmBCroeYuxYzwPBHcf6XMhwuhVsjHmhpt9En81dB",
  "key31": "2daPJ42APNCTe9j9pzvmCfBdUiDKKfA8RRECFHwvoxWBJY1r11gNSP1SZjj1NgsSkUwx11UFMihKXmBcPJ2qhkKz",
  "key32": "64nju5EKp9ZanLw4JpZDkEKT1kGK7KuYiwXMXS3QfDrdz74zSPHGQdA1zqkk4S4JmzXiGPt7aHzDiypE2q98HCap",
  "key33": "GHSUWD4GGc5nbwhtbo9Khc7E3Vbv5sTC7SFuAp3WbiRHFz3jtRpVqFEzKr9Y6UQmuL11zfJ6JsTVaVNJPizuF1M",
  "key34": "67me96ZNGrPKdzKM5xvsZDNPrJ2V7Qpp2Hyqw6CSsG9NoMdc39GxV2cSNhrwzKfkAs6HBJDeL5oUJy8ii67X3UXD",
  "key35": "3WtZHHtcL6Fytqej5YVhmQwFb93SqSTPc4gGoEZnW8yXrytgEw8aXLAbXrHsDfoNvHnDNz8WzA8FnMNWUMqH9wUB",
  "key36": "3tEr9ZgfadbfZ9AUems8KXx8geMVBNsSUE3JwzSkJShDgxfjY92JnCgv9xend156GMx4cNtRFZrStoooet344Q86",
  "key37": "3FyE2CQ6fTPVEPXJv3TUdCY4JpAzUBwcpBhL9NZNbseYn6eWAFQoy6yaub3pQQTfsULb5Vv4YQTbBeLCg3xrv9Hv",
  "key38": "3fUefuWs4ort1a5U1WqtDKW79uCXFiLwJEZqsEi9G9BFJhM3PuwuyN1FwQwxt9jb1DiU12dWNVcBDAAysRcPCLGT",
  "key39": "3wWHhhnCXESfcPWeyLvwHunQer36CA85KAAoYxeRGyWnyZeJm557JusRF7dAS5CDq5QPPFNNgGd68YHi58XNCGbY",
  "key40": "o21SP936LJ4gAw7q4ag5wu4GXdukBhLWLhqoFGU3UrBhXNueDYxngt4K8ii9c3qPoXFYx86LFNnV2m639DraJeA",
  "key41": "uDNftKc6eSj4QQpfRcP3FNvetm2ouihaSRtH4NuYZwLyUG2cwaEiSHvpqvGDRKc3qHrWSaFQTtrP7qh6wfV19zo",
  "key42": "wYCmM7ioGzGXhaYaR6h4yXBnsmLmEgaep1MqW4wgQGDhanb1quGv9F9yTq6E8UZCVWzeFjXbukck7FAuGRdqWAA",
  "key43": "24bi2Pmhd7nwrmRhqpwJVdaBBEuzu71Bgfzve8cB6oKdtUUZ9e8Cmzdhf2RMJrVh8mJdH9kkcgrnG79UkyQstYjJ",
  "key44": "5VnkWaxRBeyV38yWrCy4BEtM5e78LADoKTd41kxVH7jZa3e2kMt5bufQYYrrcMbXdc6iu3kN6iD48zcVr44MxcuH",
  "key45": "4hGg99A28man8c5Y4dvum2KCcQMZ7QhquDnQok6BxQCvmZVai2CABfVirgrqmSxJeXwNdMAtAwZ1bqb9XdgeYwdm"
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
