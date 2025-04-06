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
    "3WiHhhbCU8q4JwKXVUov1LufFdZZcuB6oinAq4TAqzZE55yUDs2DnGnQp6YEjGDFpMvamUZS5AzU2YY2YcSzT4TT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mSTZo8gkyRNLGSvaTNKW3dX4P398oDnXdpAowHUyuXFychVChrQNQU3PJGDqJWwmy9ggRkqvB6tf249LwMAiVzM",
  "key1": "3Eqtjz7PoW8AFSAKehNMLxbiAaE4fhu9YMvxvbBJEZ1U59QQ2UMsK61S2VCkKrmNeYNTBbt7rHk7uxLAo6UabWMU",
  "key2": "5CLtpmU9Cyvxv944P9DJCHoB11U2Eb4beXuiQMiofwrnxAEzEC8kqeb5zw8iJS3MyiMR6rtXTChzgDS7bK265uRk",
  "key3": "3M5nVKVfNhAMWdaSJUVHaQNEDW7Wyc8ucPkJrpukJrVvpH8uHG1tvKwrmv3HiyTdJq8VHA1QRqyAVt8W8XHwmaZo",
  "key4": "2zaca8bQpb3hcuVmkcCy3qm8FgBbUHCnjnJZKqykByXoifJaTaNZMac3HariaooFTHrF7aKFGhk2ahFo68cq9LnA",
  "key5": "3uVKSx654kqJtoXHDMx7YpBJesj1cf6eSaLQsMmWjb87VJyHNZ5qzXbXtsVPJRUG7k89JcyaCEwMDdQ6yNVuRV8N",
  "key6": "3N1qWPWpuT7UVGgeU1hRaN1AcD97ZbzX2jUvK2sS23824oQLkSW5TXQEfgMkqmSGLhXnrNTuhxL7GtWQksk5bar1",
  "key7": "2wDBAHZy2RNrjh5A1JnhM6W8eoMrgM2GjnNwyDeCR13hJaNgVBL7EFFax2iVEQNrKeMzDA1hGUT3uaSqgBYQek2d",
  "key8": "4DTZtgvvLJdbmA2zEUNbGCDd37mrdaoUreEVc7Kf7hDhZoyjyUQNEgAL8TtBcNAVQr35zFMC17GRRm1zz2Lu2jzZ",
  "key9": "Bp2wcKoV1HuE981iqFYAzLZmoK1P9BHDfpp3Kp21tMjgW8Aw9vRNCRhbgKgt1WMbYpBPLion1CdckiSBmnUtVWA",
  "key10": "43b5CFqHdfGPGvHgF9ZKFGBCGokkR48qzpiwiXQfF4wRoLfD6iUKLnuzU1CVMaHKToN4ZWtQyuEpcttawdJED6hq",
  "key11": "2VAGYonwv9Qiq4YSED83XKniDwqNrcVDc3cZXfD3ncM6HDxQHoeMpnPcDgBomm9D4UqqqpPBHh3AxVZ9MNPxNiwY",
  "key12": "5PMpRoa7ZfhTttpwLsTxiutXwHBh1fMNREkWNrh9cPGqfifegmA3KZY4fo1kdaA3ND3wnD38iufqFq355gc45VvT",
  "key13": "3Vqu8LptYAw2CRasRvhLbVcPjbBDYXygM8DYYJdE9o7bojbjwxfyL2PW8PuNr8FNXATBd77WH8zDfoHeMtpa9B65",
  "key14": "5XfBXGbNhkLVLm2WWkVjcH1iW9NRU4doGMP4zyN7ZGPst3FtUwfoJ4NkJ4iWVTngYhGq2JEsm4ouKgHo87cfJsuD",
  "key15": "UPzFYazcbzpPi9GiGoNDbwh3kpZcwijbPmiwaxai25cphDvfvD8Yysn6fi3gajQFpqCtrgx95Eu5UC8W9S6F8MD",
  "key16": "HhhkKTpzXxaB2LqRwL4tQ3B6Pz47QAdhP43xky6tPjk68qpCFojrTn3rYvAkTaCh2iFGXdPq5npLixD7vhKfnJN",
  "key17": "49KP6QSofuhiK9QdcESY2H5EuGsSWTEv3JbUD9bnudmf2nc99tgYTJAn1vY469e15SqfNL41DfS6aemNDyZ6gZjJ",
  "key18": "4RMve2six1jDw7ZnKfToceuiLUqnzK24z5DNYiG61492vhDMPHhkZZp9EgVHukpJMcWQc5xjz9syDuKZGTDMDZqx",
  "key19": "4igH5o7Vy1dVEgRe95Pb4e9UrXddnSqE6P31diqKKBwocpsK2QbZgjrKEjBXM3XmxSUQbiUT9bC5rAiQVtq6Psx2",
  "key20": "4FSwdN7nu6mir7M6JC1Hsy8TZSp2a9A2K4BojPaQfn5ukc3VnkzQ1QkGCSWKtmPHKhjL4gU72P9bfBz6ciAMKy6C",
  "key21": "5CytSDbEDwdibnr59dvZJKDDe9mvBc9UseLs6PWLzcWifeZvz1BWTm2ScghuaoVrKTMHqojp7hnsd8nUL58tgq3Z",
  "key22": "GLzdEw4TL79DQkzRcQr4qnsqecd9xKJ8jKc4JdTQRDNeC2bM3kUgPmJ6JvCoCqLX3n83RA7vHuWQFpGkQf4jWJR",
  "key23": "3vP61Mvzm8R7LDMPpjqGLRgDhDfzT6HMY7ysXKVdGsUZzqyjpAjCueBJ3BRjtpD4WqkP5gxCB7djy6T3axWoHBnm",
  "key24": "cjTG2n14HiCnQaepz7B2w3VJNuf3QwroxvwRBVpVfEcWU6poAMCTu8ZyhyKRWqDDc3yU4ykqkRkYmU6KD4gMuyQ",
  "key25": "2DtzaWVaeQ5L8jY8moeGJTQwjjVYDkLNB7qyrkqGMGuDjVuArYhuDjEM4AwqkJztHccg5ruV2JhYG3ZzPZAJxMcp",
  "key26": "3FKTmSdRbgVsbgXwRTcoXXvP97NJXh3ynDYVricVHSTAMuqXXCiTG7TfAt9d7A4efGoqq87nrmA3SEYfeJ4rKdTT",
  "key27": "3j83e5byzbyCwaJtZUc5jw9utFUUxLktW59C9bKfy8KmAvgivTJ46oySxzAJwevmSvX7Rn2tDefNQ5mSkap2cDzZ",
  "key28": "3F1Ri1YHsNJq1cDpaATs6gYKz6gBmYT2bFNso38o2YGv2vdwyze4CLec5L8bvjPV71DnHUNqWBaZy2yLdZAaBQv2",
  "key29": "3LSDaZn8TPRVVSmWFLGnHiwJJFCe2LMhgrVBNJtuX5Ypt58T8g71WZ9kRt1y5CC9fWMiJiggusfM2427yDWcN4Xy",
  "key30": "4wcrQP5m1a1PSfeW4JHYXvh6FVE4U92pGe6iadbwfjNUSjH81E4e3rCF6LUttpi1DkM1LzxFAH6yr4t6FKqqHurk",
  "key31": "26qAvoy1K4TNkRtpEiVPGPqnqZmz69szKdDp86qNmcyswzcciXQVYUPBTLA8QGzrHWBxmn6ZXaYVfckLwoyNpfDr",
  "key32": "5ZveJdUfmuFb1x5Ug9LAxVBRMQ8S61pPKLbL4gwFEzQChJqy56Cw7GfSCHBacscX5vihnrX6W4nKHpLQKVmGtv55",
  "key33": "5csnKCZC28Moua8PpJRjqu8xD27TziVYEax78R1bLZHpFSAxb6N6qVhwkwFkdXgRzdwrLT2u2HJhWajK8vxj1SFe",
  "key34": "5DciLrNYp8A4BXCEjFqE2e2HMMKCMMt7YEoYgRV3M9Gepi3rexE2ESGx4A62Dvnpk8Deyxg1LUtMc13nf9QdLPFu",
  "key35": "2d7DWVa89ermkUwvhhWxfbDGkDYrkUinDqSydn7rBsotqvngZSMFTzF9p9xq7VgTzQoPM1u4dnY51PWg6pYySAdJ",
  "key36": "2GfjZ5JNK2qjujkYDDdDMB62FkZEgaiBbwchS8UoXV8ZGZq7VDQt9bz9Hq3FUYXqVjM2rdmf1XuN5P1tWjbu8Ejp",
  "key37": "5TBPVPjReanRPErtDaofXyQVa6S5Uu5grcHLr55pXZpzsw1fSBTem7qQPBkyEhX4ZEYFWrn65nwdgEfrpb5cdkkB",
  "key38": "5hyhspTKXs2akxKttNQtjgU9c3fEkTcSJiL7vLcVPQ1TT2fq5VAMN2XK1tSWJrRM6JHyJqVeEN4G7w98WiAr7iLy",
  "key39": "4hc6N4yt2ZEuohW3v5fJH6fAQW3yJVocgKevdDicCgakNknkwGb2R4x4PWMhpkm1Q6FqmTPHztRfbvMvAvGuNjNC",
  "key40": "671vyDNDmfBTS63tQgfD4vgXrcvr4yPyb39izaxsvmWzefi1ihQq8KBsstHwhgnt6vDspYnyjN3VJEFg9kUPpsyG",
  "key41": "2woejRotEy7Dh2hLBtFL24MsQLTyi4J8dTJvvh9vAo51uJzo9KQC8MkyqPFW3KooY8a7oKjydJqQ4e3bZZ66AGsF",
  "key42": "8AJYoi8FAHi2NjSxjRca9VtuSACDRW2EXCGWvGH7H66iesRQNHsUcK8qdQJo3HCDm8an6yzW3wPcFfgwwts2C94",
  "key43": "5cQGXRpiau2Zp42PBS6D7aDuGbvoM7c5Jc5H9FHRTKW7pDJji67tkrHcQuA8n6U7iAaeYUXe67wRFTCQWnZDmsfM",
  "key44": "2UzGm9KmjPvzxc4ZaRQXgp3CaEpjPMy9T2A8r3WrcS1nxrGA12eqgF6von41jsEMMvhz1aj8pxWFHk9hKYvTcFXU",
  "key45": "2SpUmVuCJQXA9NU8UaqXTbwffk3VLLkY43oXQmLzdtPo6ykbmkKb4MNHZ44sLTWf263epHCD3y8ziptuYAPikufz",
  "key46": "3AHegCurB5aSCq4o2aE4dNgV63JKTKWu59f4eCzW26Ca9BwTNaNeWFPmRTKscPwr4u7eGKNWnK4pAdFSWpGsd8ut",
  "key47": "2BVJrrjZ55Z7iRRzPvUygB8ydihqnfEG4GmRhr7aTUnBkxHf83UgGwMvYkqpVSXr6kiYeRvvnfNeDGch6RCK1bbK"
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
