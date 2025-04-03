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
    "FCfAXPks6GYppFpoJ3oAd4cRzdhdw4gvaXUNrmKG827xKGru5R8VfAPkzrZX8JCdrHw65jhi4jofi5uD3W4ZNZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHQLsGssbzReGbxWG67wdxZLEZmW45VSdpaaHeSr4cdmTyA6An9Tv9nrrsMBTWDjpQ44WLrwGu7YfZZ5w5yTqFt",
  "key1": "TvCp4CmzevbhovFXsCeZaVBWdsWDGsawL7WHK95oYRTttrTBCMxCbw5tAz9fq8Ub8J2Pn8gtpVfUkvPkbj9iaHQ",
  "key2": "2TNg3XVLPumrHEdp8WjFurJBmNAQ9p1qb1n7eDwoxhxHa8zFNAUkYMfShd1MQPNah8vxgXcyePQjVYCLynSGkP8u",
  "key3": "4LyhMt4Cpzs1MPmitJnGkd6pQum3oGcuBC2KtJLy6nE5iJWc9XYk337ts8MTvk1xKRMipso8jdscGGejMKtZkTtR",
  "key4": "5BsbZKf9Ah3EVcner2BMdcdMwQxbbUf5kBPT3mATe4pmeVc7DEqt3bVppXN6cGKhgVrmkPJL2sEh6WX3UMf2rEag",
  "key5": "4tsWzggpMykN7SJEB45qDzRzMtKV5QbFFkCGFivpWJ9HjwPFGyMCCdyMfapV4UuUWpY3rbcEqVzzk1iLjQJiPJK1",
  "key6": "5UgcszCvSLoRcrtUfMCW4J8k8nuESvQ6bUaaH85DAzBsJrmDgyNKfLHDYZMXaT33nToGHscNuZcUDR9TBnTkqv2n",
  "key7": "krCGL5CYxang9Cur69WeA21ckesaSETVhtSKDDp1yijXEkNzBBrHLFyNVzodHuixTe3aFgnfwxpKKMKh8mfdGSq",
  "key8": "3G5R4nxuVsS5zjsW4Gm1AsQd4XThNzmzTrSzzSwX29GerntjPmUdfaLGLzr6Mra3WZMXGnAG5ywaRR3D6JBFc8BT",
  "key9": "41YMUYm5fEF25dbuymEaiwfZBo28jYKe22Ha1LLsyFWsjUrLYSmDfzZS3ZkARJCcZsZkjwosPDhMDPqsSyrhUh2w",
  "key10": "5keoumF1GU3VHVGwsHwBGkLbeNRR3SBXRxQXMCAWs3gmqBwHDjxLsjgHQopcwiPoqVRc5fGLryc4L3AM5NMv4WmJ",
  "key11": "4PrqbUoeaW1MqYDCo86EbQBZZnPD5btfGjvbxRkDziQ6wT3eH7DYMLbqjwjXPD3Arexd3xk9pWszGx1egHWL3yC5",
  "key12": "4aR9vTs2awhj3aM9LAGeFQFzdTvpcarkNzZcVZzKMGbPBLSKmjuAn6C87XZvhNN9dBjc8XDui9aVeW3mqwbuquYc",
  "key13": "4cXdqsQuXySFMKFPgE25qphKWFf9aQYJorNbYu367RWaDrpsssiWA2epvKDzhR8SsLd3zy2WoZJZoqtqH9XCSRDZ",
  "key14": "mTV9h5iAo2oH5VMpi1HiNshCSgD84h6F5z7zLK3ha3styX8ZDejZJboQxGoSQ2D2rhNniC6AdPN7xJPGqKK5N6B",
  "key15": "5sovvNroVDhgknBZb5hARJKsK6RyWg2rXAapHoQQKGpSwsEy8VCEmvQDfgMPJibqb36S6okWkqZQ6KGenDvxyjss",
  "key16": "36L9B9UjM19VnWgRqRW2FfmjKrk3LBen4p2V9mkhvdnFrmo79xadeTUUuSer4dvG5k3hAzKyJJPEDXGTbKtG1DbP",
  "key17": "4i43obcaC6eod5sbxRy87R37WuGkPRTXF17A49piNzbuSQduNL7ckq4cXdUeU1rxxZM6nhxq3pyB6rvqx8DgCiwi",
  "key18": "49greeRH72hAga1VRCSkfMCEZoWyGCqT8qajVd1tohpAd73EwTiynt56b6yV8TRcBhjK21MJTCg2T4ZJa5QUWFzK",
  "key19": "7tvZ7hd3t4DZAWSFhxHC9tW3YfoL1BTpAwVeM4epQ3u5FxPGNv7m6Td1tHghDqv4Z83t2dUCTeoyPeGKH9Z5sbM",
  "key20": "2F6Ac9HhBAD3HPUfzUHjJ2ay7rcqw39fbrg6wr2ajsYjg8gGLqckdUFBjPe6WGSzxc8HWgXHzSKrGbwTGsVUGUEJ",
  "key21": "2MGbfMeinvP3krwxN86HCE8sry7jH4oZ4PtohRWbpdrxX4euTD5T3h2AM5DdePEvWF25VjPnrbUdABZTbjUdRaHX",
  "key22": "61Bk4pvbAK7o7fyXRhb4Yevba7UFG2sXy9oiWzXQc4hQnx41VdcVWu6Pf7qiXbfYn3vzQewvtHdCLGqhD5BiURhw",
  "key23": "4K6MbUduWpVN84aAEHyAx9XVebohUKVQSpAJNoWEwZL84rUWVhUdRnsnD1ERdm9bAZHwTnW66Cz2ncCpSzuHYrL9",
  "key24": "i9jutqLMCyYSvs5rxMYtm55eJEBhYSeVSVPyuPR4fYZqYNAWLEdQE9fw3N9ax7bWzccJfquWEZ1VD9bjyEnJGH5",
  "key25": "364D75Ei8NuZbRwmcFw3Lyt5d6PQnJHRgZemNaff88ChXLfddek9211w8pKd1XSErBUHfdnV9EGZvRmcoMkZKmCJ",
  "key26": "3mnM6vjzbYvMLm9qHkNdJPAKmVKh1HnSQZpTehHo8YKxrbEcjLtPcrYDn3Jhd7FdvoLZGnKUSVkdpsxAdRfTMh9u",
  "key27": "2yVKkYEgswkMFSkkGwbe8hBQUBnm6atyQSh3eVDtd4GpTJ7SQMqK2ham8PSprnj7dbCA2u6bYHEjeNovjoh9xdXU",
  "key28": "43517WEe2djHAPpMCQnNnzRx32qDFxqPLWCMXGTURnEfDv9ty9Rfk7TMv8TPoksaZAf21eQe66P4oeUb11nX95kb",
  "key29": "2EotHaZsHRRNpvvjPGkSwLuxEkiP9Jch2kdynJCkgjdkDyiWGzoTMwjCmYzgqAk5R7jG14FGLRk5cbWy7YR2E3LU",
  "key30": "42t7WfEDhVbMZwsdbB3LxRFQVVSHkRhfTnPGvavvb3tdzFFtLsV6JGMSijG1GHd7VRqrAEb2XTdprvtmdoFPeb8C",
  "key31": "61DJGpGk5M7gRs2ExqRdipLzsbHkRuFeRV3ENP9qum7VjLYBk4svRLErBwMUHENKybqP1ZSsZhPCaanZAh36Aikv",
  "key32": "2tonps5DH6q8LpNUpN7YT5xx9QyxTRRsP3jby6pEksidt3fsaEo7YG7uhNaAAhCUpsrdERGoXd5FWRc5MsoANT9C",
  "key33": "fskQ8Rxr2CFsJ3FC9W23Tx2TjDkBrY32VgAgrkS73jjFjHEJF6grvkgbMv7wwE63iu5EXptRoff96mU3W19vqv3",
  "key34": "3hQ4FJSJTbUPGpwwsmEbn8qAHhjgSmzdkGBLuXHQ2RRXczLQcDuTYzRnepfCKfs3uJweVktLCeM6naDnYr3bZAas",
  "key35": "5Lx82PBrrVsPZW353nr2DYc2rdTR26JprooZbB99T76tmVisFkHYNcbq7SHEgMACdwth3HUcbif9EumnU878ya9j",
  "key36": "5doSwfTVFkhDkb3kGTpVE1Etw9qoHTUCHDwb1LKK3o4sc6EbfuwWjuou4f6mLuTZA3gjCdETnxZ1RAcPrT4MWLbh",
  "key37": "44jqsGeRsJ4qSakZHj3MGXuQLpsD3QQiFyeZLL8uUrRQz9S4vbSUzqbgvKgoz4b6R57JbFgw4RZSKLjUTpGCr5Tb",
  "key38": "4yXWKZCXKx6vC9aUPnipMvah7TaEVq9khGKTeKKc1nAgsDUttLjmNyKb3eTy44NHuQZjhzRZrWjKWRqWgLFWb8BA",
  "key39": "2i6T7qTnSQUzTPZgNA9FgLhYbDnccBuW4TMNxgPH5c7vZER1AFG2hu6PdqtzMQtFLfD7S3LWGPfh1EMK9LcURcwR",
  "key40": "2w3tzKzX3yohKRfW7AumP7Em9kyBct5d8hdqMvVPwV62hithVrjRh8koysAD3h7rkfgYW6ikyg4K8VSjrPigCrJ6",
  "key41": "61gK7yMevqkttkp9S6C4xf27fzXC1qoVaA9VJmW7EUNDpawtq2mFWELaK66TRN5VPRLR7Qw7MjLYCBN3UVKqV7Rf",
  "key42": "2PiLbDzFNhX7CSQob4mUNyKZxXDv67GFUMAnMZ3KhVRK6LBzntAXWgkbwvmbGpD3etWdbCRUPyq5QXorxgLjKybr",
  "key43": "2gLirhoXPqYgnn8yQn6tZNxoe9M2TgvEprgmH1LQxy5V2bL1R8oaEcHhjYzJ9ZBWmLzvnmzGmUvn9fvLH4oo5a4i",
  "key44": "3uAYFHLjKTtTTavmsLScuqJwwdtpSw7zgL36KUX7oMzAAPEhutoHf8f1T4kbSAWki7mkxFijgYJMNFRUqzjDPNLi"
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
