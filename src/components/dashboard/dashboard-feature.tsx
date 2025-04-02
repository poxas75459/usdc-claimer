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
    "5b6C8NpNJeTWufjaFjMaT5nSmNRkdPVJHbQN9ZhD632AZ5JKjG12xE8naqvhef6kwb9MYUkdgp2Gerh2w6Wgd9iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541aE5PcWp8cxkoRqLDT2hS179tEMJT5y9g4KrKyCcZLKDVsEgSyAhrMpYDcfGmv66FUdWemTzPyXMTVgN5397J1",
  "key1": "3e6bsmx33pcS1Dos2RBXBJK6sv85c5gkngpVgWdXgqEaLvH5WqWAFVBAZtTCMZb3aFDLdc2t3E3s6aWLQjHerrEj",
  "key2": "5hf9UhortxuVED1GuXHtB9JgHfemoSbftfPbEuYpkjTtSk7NYLhSijaWAnrMY66tBqzRuBeHGxbkrnUvaJZkDz8R",
  "key3": "2FEN41ZCbi3cNEG2R9kisSWokq9LVCB4MkeYWtQwF8inpMk81XiQHn7nqcFoXdcvdTmnuVQywgwKenpDjaL9Vz1s",
  "key4": "5V5s5ACuELYAp4745zgiz4EQPtAhh3TkdETAToiyf6tiC4U65oWfW6PjuEeHUuMoGRFNxEmZFsNHsGtkafdiYHXG",
  "key5": "7E56cc5T7jjNumq9Cv65jAA2eVwbfHbenseprGVDAeR3owTd6t48tKWfKo55x4NvYxq8YaLDqqAYAmU9HKEXEWc",
  "key6": "2aotvBvMcRbBdj1K5sPz5eKRnVzrzFsJaaprJkVA2agdiwopp6rATq2JojGJssh2CS6FPL13M4vddHcECQ2UEhfW",
  "key7": "5aLtFtbx61QhYTc6BMh8X5j9AhFDEmrZQ2Kmz8Sy5jKyVZ6hXDQaisVtSVxhsX1zubNDBRnGrF5ARVLgH4hJQTV3",
  "key8": "4V6kviRyeVn8qheduGqdHsm7B3JEm7hURCH8JmhbW9djyDkSLuJh8i7Jusi7fhdmxE94U4WpLQQHKyXdMjzRLayu",
  "key9": "5VVZY6UWbyXTxe6krrWxHmaXyyCAbNGCLRsJvQADxKuSHkj6Gfu18k7CcQ3jrVfFSWUi2AKd5YsnNdR1ybNGhP1P",
  "key10": "3XgbhNVo9H551EVuNfsckc8cyz7fTC6BQNUG5Py8eV8UULWeo2VEVT8JugNpe8aeSmRNWD32rUHD8ANLrFAScAHZ",
  "key11": "5Gn7SmAk1bsTnW1kUJQLeBKwdL6s94aV9ymbtj91jt38nnPFsdR9PucRVFdsWT5rfWkaTnBc8zXmjBwM8qSRPcLQ",
  "key12": "5aB775TygSLyGD6AJVDq4f84nkSQik25r15neV8i57CtfTPHF55jE4HeDgkTvyTSYVNeC3go6ccS19z3AU2u3FM8",
  "key13": "54nssKCGHHYdieMqnpnk7jx96uP5tQLzPUH8tRv6rbzBeqbwEPor9Sc4Sbt8X7hyHWZDeGs9wtMCzJrrTfzVuCRY",
  "key14": "3VhY1vNvGLSkicv1tHo6cK9nRwCtN7WWGodK9UYmyERDPYfB43nhA4Pmqqz1rvBTn4EXvovNyxfbxG3Y4rdXjuFy",
  "key15": "4TZs99khGa9J1RoEQXCjzHuzdJqMGSJTjEW6oeyfG3acNQJpATN5vixyVUo9fDEmddkzA6iZCReoNeV2mvgfZTHf",
  "key16": "fHjSigZh17CaAKQmNYE4p81QzwA1p4RadTuXKcniVBfaVmVu2X55KwtXWM5QH949UXjZZkhwExcp9rnCC3ssN7a",
  "key17": "3zcuZdprCnzF9xjHDCFFDPjNxcMjenk2A7FXptKtANH45GtSh2SZCtGKgH8UCPXFN47J3i6rbXZA8JjHxc8YED8c",
  "key18": "416XuZ9SMhX6U2Czu9baCQ2HbptNXTRcWfKf8HV4tud9TmbQD75NGigXThksyxyXBLVSauhLbmNowLsZkAvoco8U",
  "key19": "37sbyKGxDNLW6K3oKRwGsCBK6aNebZHMeoFRb3jd5egQXCPhN1kYjfxMdpB6655kRBaEcKtMKzBiyaePNU3Lupvh",
  "key20": "5KK3ngwbPie2mreJvVtAKeTGqGfVcwT5MDeyQ3U4K7vtNFyaZyx6LpxbZFh63Sgj21SZmfxadq9G8xbXNpzLGwaK",
  "key21": "VJiqw7TRrfotF61qZELAypA36pnPpvJJf558VA2kQJ4kDj1k4M4cBmNvK39dbwEXjpKV1cHQ3vzyzyRafSwVcpD",
  "key22": "22DVraULtg8J2KoEnjxKsaMsS9CGoGGXF1PBTpEyGh1LM25DzhjLPvVEas4XJhUsPCPHaJgxv7hVfvajSt5gxYWB",
  "key23": "3gt2yMosmW855LqrZQHXrY4LMKpdaVkzJaZAZbARbpu5wFh6yG5pSjYDxTNuFPbLU9m1j7ktk7iciXFhs6HQAaGa",
  "key24": "2gHiUws5vDq7Z1ZUPJ3WK9FvNz5BPtWAsfNoF3FYZ7TJkky5aNqpM1hgaxVAKoHWwRcaUe1Bp2KcJ2Mxvh8aCQqH",
  "key25": "5dYABNfYa7aSqZX1VXQV2FiU8AWh3t5wxMbr4ww6jDLCGW62TiDKeMpHxAf145mK4az8p7e7c4UArTiYwEhQLgbk",
  "key26": "4ZXNVGwBxBUZjP6EYCvsaPQjKbUZJBacANqcKViHpEuUJoZRGxzopA1ydaishBRQ9z2LxH6PJEfq2LMYSfekBRp2",
  "key27": "2nFqSDBDbh3Y4RugsMrqVD387KBkdgkXzfggDp5JRVGt3K7kKZyNQqfJyQ8mnHcHGxRqYtCWmFhQwqKWadT21LBQ",
  "key28": "teygn31EJBjHiVAmDiw14gpYp44SLMgoRcn3HvfCk8F9DYsN6KcUDqP5Ps2npKo1vPfXnWJ8ADCo8aiNyzRZPQp",
  "key29": "3CLdYQpSSNb9ebkTNTDeGiEBANqhjALAm1wsTTc3S73oqxqZ633XBLUNThGiMZZxe97zspDKWtECiWFjfGpfXcau",
  "key30": "YTEHbuKR1AgjfbFsdmJqjZkEkyh7VhucEfMXVRVfKNtUVTLcB5zjQ86qwgXaVVvNjKBzPBnZUYeE3qayXQjmCCJ",
  "key31": "2BFz43ierygrbwCZVNfrVzFnKpJByzUJp2DACyar9YD58TFaetVzfCvdPkQc1mqLoF81U7hS2mJpQnEh7AHL5yrL",
  "key32": "3ZTRkx3UkRpUqV5gUxqMVD7VoHZRydwyRZ81aaVXKWbJRFHDgyQHQEGAKkGMrkWkH5pkS1XkzmsYP8iP4pxWsAFF",
  "key33": "63NLp7D7Rf48GWF4bNLo6hmPARv6fwPo2GkmkwzvKKqBaDVh8Nib29kwuNd4hnRTFwkNzwPn8wwxaE4jqU1btcm5",
  "key34": "4hdZAxwBY2hrmGsvQtkT3icYd6zGsb1yu1BSgFtbwPu2rV5rmXvGtAYJBWkX2aSTFuyjRKSgntNraFyDMCNXKA5K",
  "key35": "5s2LzgcRRcie6ziwKwqU8AjoyGjWrrcHoRZVuH5rXSrpvEAd5kE6MqgUgaTovcxHbxZfBYTJtMKxsuq3Y8Aqbt22",
  "key36": "3tGHLSxTsKu21VecN5yh1rSeu4uqjEEczhsknU3CV8a3PPDyJC7vEahNGNNLcFfyb5cz72zzK5LhMkCeznAvVZAu",
  "key37": "dkoWwZnAD9gyxpMnfJ5L7QN5hE2rwhh9gV7Qi6FfCzoSutYNcT6vavouh2wAKBFBjfzKC1MK949wkYZUAx4ykqp",
  "key38": "2NQTz7yXfkmWXeJG7epFC7v14CDwjECAu1CWJDMUCfkrE5J65nTRueCaB3LabBiazkzC7rYZHS9FPYMu3xZ75Dyn",
  "key39": "3A4puCpYxWoinL4F1xGLzRLmbrmMHrU7FNChuXPLatVcNwayJNH5gYchxGeEBKVAe2YznotszRzRkqf4U4dyhM3j",
  "key40": "3iZgdY8BMdm7fXNVD6cPpfwEZSBefTW1Eut85DJbW35eisAEitREtGgPR6vv49vJPFLgMCFdJ75nr3B6ijZvVsev",
  "key41": "5YCkkxY3AQ7gAAD8u7hXobn48nGSzAfuwF38RHQkqUWaupyhqEnmTwCAKCKKWvyG7fWbc72tyuWrJxLMjVbBdDJ6",
  "key42": "3iMFDWwGeV7xz6apZqcgBGfp9Gn3mFf12bFknPyab7wf35jzygwhwcGHt76TkoGhHKMWeJZpzogFjc8Yv8uYWXq6",
  "key43": "3CyLnRmwRzD5MtjeHZdAYiDVFNMGL5GqFrvUup5aM1c1nb3FgsFybgwQej9SgFxjkjgcfZDfqBCZEMwwCp1NrFTJ",
  "key44": "2EDfduBhcxNLkZcPG8TvW6iNA6y6jag7ZpELE5E8HTqp25bkG6iFx2DSzH79tonwXRXY3ZbaXdkRx9gy2vu6pEhe",
  "key45": "3JuL5S6WPMfB6VPGF3g8koDFgb9ALSwhWd3VGefnoSCi7JgZdzBzxaCqtiySJ6Bom6ghr6WyN4K8rUsfPoTPedC9",
  "key46": "3XwytBa4tnTSRXySxdKdXPxBeLKxVZktm7jH453UkC1bK22Mzspt8XFSm7hptryFUiENFsGxhutzZ7ARZowGkwtp",
  "key47": "6755B8UrqScRpcV9rF2NBUkUmzJvQGMuFSLDLrBMkDd26smM4KHrmbe5TgDQr58nGMwdpLuYssNGceacT8daKaA"
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
