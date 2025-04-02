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
    "4oFgv7dqJmdPi85wp5Yq2YLuj8a7KYqd9bkJ1taji7kS7qjxxSRaSaztiKg9w8DYiGr4PVwpjP9TSSf8xVU3Pj66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NNiLX2fczjWPAcXAYwbkXAfbzpF36jctugBNniQ7hqxR9WoHkxGawGxFjhXmVvMGMi4YW4GmgVvZQXPxKXyh2g",
  "key1": "2rytkuWoYAgfNa4VUaAhY1EnrfqBA6S3E8PBjsVHD5mMHhjm6uH1uhz6cJotPJ7YHdfyMdrqrNvE5nFq2Rou9pLM",
  "key2": "4PzLhWcwxmATqr88ZsNj2dbf4whed4WhA2wdMzRzDQ1vRacgjNvZSgXcLX2fm4jQpT8k8ywdRC8oE1sGwh8SHtUW",
  "key3": "62bwV8hEu7zCMoQfTkXR14D6VAYapvDvFjNqATbfZ8aYqzZh1jGJviy9T3JFZSZkZE7BYw45E1eUYMhuKWkPwKbY",
  "key4": "5Z6myvZmc3rokuxoPBpu2iCvmWtxvLAuqftF1UXJ23PHyUL2gMqwjPfTEd8cmpJyKRPkKxqk1sv6sKGSyrpASXVD",
  "key5": "5cfjehfiMHzvUjh2hLLR3E9hzietPbyYkq9U6v8feCknJxTx34w5koMdHZ95XDxgLTMrsqDMTaANdfQ7Y1L39LAd",
  "key6": "4hGSAbLavyA7SngKFxeFgfKCvVJ4adSA5Sote9MriDWX2phfUPY4yFr286uj8Ai3veXupLZKbUeEFurPozMdAdCo",
  "key7": "3E7uaiyPKiWjSPMhe1rSQnfhXd53Z4XAxqJH5DbSBQbGWnN9oJuUd8Jrz5REmYsTHPVFQeEK3TdG8aZCPKmrf9kp",
  "key8": "4hh3Wf4wvLdDVFKNjiSYENVtPZXP5g39sQgQY7po8Gj7nS8UL9y8PqXfFmbNSqb1V2nGME8yXdRXVwfWNVQvgHSC",
  "key9": "4KFADN7VZ7qEXUR5d7T46VVCqLEzS6WW4BBpDPanoXfZFKxwjnjcGJv8vBLCs7CcoS8jK7B7E6jQhSymbmd7SSYq",
  "key10": "4Dpz1F5inrsBC1LWp4YywjDHdpPVTVzhVdPe5N2NTiLqNghzWvmDyFYbjveJHQtHYEKnMiQFewpfnmFcNwU6UcBD",
  "key11": "42DRwEg2Ph492MRtAyWPv3VGE8w7gkLv6bx3Wpa4ZF82HcHBQXVNHm795dsbFgbSxzKxZsFNdEz3Cwkrz1k58t1r",
  "key12": "5zrDmeLF9ZKu4CDJ3yoxiPvhpHYBCteUdL9y8w9yXRhnS259RoHN2EuYH6bf48nkoAxXvNUAs1SzovdzzY27P7Z8",
  "key13": "63CW7CPXCUb3bNb3CaUPQUZzFrA1TuJJJZzKVfpH1kxrE6SS31WXrZWqqYopQbXxMC42HSoJKCU7v2jfpGGyQbsj",
  "key14": "2VbNxj9cB11unid8nuZoNoXroh9HmJ2XtZHvQRF9PQ5PBx3V1cTeybMkgk7jeoA3sv2FCvwvsxSKCrq19SC7bvco",
  "key15": "2pKJJhafeCq1LTSRdk21e5CBznkbeF3yurazqPyj5jrY3DUJcAndDFJ9Gef6zFazn3z4d3UBX9i1My1LBhhmsAuX",
  "key16": "i5DZ4SKev2WAxWrY6gVwLEmh417mk3YpGQajjrn4W8y5NiMzMRLswu2XvjShM5LTiV6xX1EkMRxC5Vjy2AC6pti",
  "key17": "33TGk1A1KYE5aVZFcfT99B55SS5TRVsWaU3jegsN1gn5oM7fk58jYviyuzGUo6HSPBWB4AFcVXxicr5uz9FD2onC",
  "key18": "3SZy9y8MHt38gNLE7j6155jwQEhYaSL5HVZyou6FEjZwJUN7bsEkpF1NS5fj69CYcxTYdDRrW1qwJGugyEmbNU5N",
  "key19": "2DoeokUf8TPEjawGzGK4KoAB4uduNcg33w1TssSoV3PqDQ2V4c5hTCLbLiaWNNxpwDY88Lgw9CjinK4vyH4Gfrvx",
  "key20": "2uKcK73opmJ4Uy4YxcUQ2zLaoD6gu6igg3WT1hT6GdjNgyM1aDkCBNLa5s16a4T47QaCqLLAh3UQtRWQSfcMh2gX",
  "key21": "5zWbAsBFZ6skMy3shNfCEXmHxRiNEbgkHaa7te66avbKVp3WwV3p5LnvkRTdJCWoHTcQFm15CPD3f4ozXDoRNyEk",
  "key22": "3K2iRbk8663kKnLSQ8ugoUppjTYu269eogcdi8cyN7vXv4Gg3z36pd6ZETz4tRuxsTKATMCKv1aXbFgSHt7vthpH",
  "key23": "3D5EnAA9hY93B3Mu344yRanfDdKD1BcQzuTeuCUywBQeUjRs9aQKNGwYeApkBuTg1g22f2msHJbnvf8Q4VUK77ZX",
  "key24": "3q78zZgps28SqsnpJpxAhGCRtWcKEyxvVUSFMxpgeufLsu7R1o1MpN8mBz8ViwqivtUjs2ZnXimyWQamywN9RMt8",
  "key25": "5Ec5GouChb5U439Tk9kH2BQzoHxZU4YH2nHxgSvVqm1f5jtZzvUYQMH3iT9pZdRFVWj3LQsucFdjB7SKuqRW54MN",
  "key26": "nMoMwfsNrvFE16f3YXA2DJhkjd1XyJQ5aCsztEZpLDgDqzMKMM4byTUfvZ8ZqiRKkLZujnP2YUU8EmYsfW5k8RG",
  "key27": "p9K2Xr6djdJxz3twNQXaJPgWL7YSiszyCXYENcSWrznzNXMghV7cKZpL9x6U2VtAcxA6Pa52cZx27dRSAr3uWk7",
  "key28": "S5P7SspUvE1jTbHpbA1WuXu3Fwd94FVmN3Y2MNEL9G5vnmkduuFSRzd5MLadDXU7VwJog6xEgqmXZTLJ6YcNLqe",
  "key29": "7G9ruSGE6AFTiRBHkoonV2AXye2toYRSUDsogJw2DCRyA2jKw6bGCeweEM51JtLocA3R3iCGKHQ2YdgrfucXXFU",
  "key30": "U18PmEh92achz5Ef98KtyzyG9tvSNW8Xr7ZP6dpipdNZWPeURvSewLrHiFgiipEmUqzkGBftvo7FL1DWXi3JreP",
  "key31": "5GHXgSnmr5FJhw2HTv5ir724HbLiDAgeLDErRYHTJqudH7KvG4A4P8Abhh9KZvjyCU6XzjL34iGxLFgnVHgu3M9C",
  "key32": "2DFKUtbbnQRm9MHeQ8zbKREgXq12bFcKJzuZ5u4nQxQ6qVusf7N9pwmrorJXcAYmf2Kiqiovu8JXmQcc3J97cie4",
  "key33": "U52WLLNsbo2tNCjn9ibv3puXzQnk9kaP9dmAqD4973y7CuJyTRyH9SGqNprXZZfHYMdwS3FG2jLK29UL6MahE8s",
  "key34": "5zSZN9uVCPAWSjRPoU8AJWAjei79qmhTjniyDUzaaWNBeRxRvKymLMNdzcWVEfgopFyDxEi9bQZztBR5v4mE1MUY",
  "key35": "3W7e8DZUgaMyrUhyBnm4WT8dXJUKMDANuyibHnc34UyxJ7ZXs5mJjXEi8jy7H8Cp1uU5PVgbuJWBjhWsm7yRKj7U",
  "key36": "4SzDMkaXLZAdEXhTdNjJ8nTcbc7EwuVxubrZoXFWA5BHdgoiCmYfEN9uPTcEzTrv8FoeAJ2N9RMvU4kkRzHdWY2u",
  "key37": "65zGfx6YHeKvs9KS4vfv3dxD5ayqBvGYmiMxR7dQHbgAwvSZr2LSGFfxwqdQaoYmYwXHgb67AjeQ6JtFBr8B9cJW",
  "key38": "3RwGH22RfKjesvciXjeFR8geuwikfFCRMePtQqdYU48gDANjJ6aPcDusm2furRp8Gwz1NXUAJ7giWH8idBUC4Xb",
  "key39": "HyKZ5QFXZrM4MXTEFgSTRZmuxdWkf6TbtmzKfTwbGuTVYUFhqgsyTQcXgUxpyoSDPX1zw8SXr4em84iQQ3jGFu4",
  "key40": "4LR1orA2wTC4sYRxvYCuSXpQ4ZtdRVygVnoamx6My1EUfnuUE55t71f7Yo2NNr271fAej7yA2TycHtHcjbzTfHmz",
  "key41": "5PH1zimFNGBd7mr4B3a6UgphydwrnvX7jdG2XjzodQmg2baoRiJvnJTjeCmd5zfgMyYTMEhtHYX8mxeaTahP2CCk",
  "key42": "4rh11DswbXHStauLznbuu1QVwFRsKJDmp1nVeiCWdXR6s6weNCu31nLpg1eW6vmNrg91aea6kAwtxKH9qXGysSBW",
  "key43": "2h9iLZbMPMZyGv3XU4ggUa95wmKUCtxnY31Xs5xDt52BbJMcJSMZcUrzqtES13aUpE4ZwCr4K39ywDQCfSa87DGQ",
  "key44": "2EUPq8itdCoCKhc4WpowMsry7eX3rB1FjFoftqgnShbPbjxxonBqrNcNQRQikKZUpuZSTuCkuqXPaM2aTjSX1214",
  "key45": "4hTHfZL664o4BJo71B3S7PT7dQEx1MZRnqpeZAx7K95rz9g4GE49tc6cxSxcWVMxJiy3xycBfYTkPbcqoxpyXFWr",
  "key46": "2x4PHScUtGTSQDgUKCi9PEXvQaPPJB2EcgZhRGfsC3iA7R6wbBaErK2FdU4FMhJEMMrme6va3Wg9Xcx5kX1Ux7GA"
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
