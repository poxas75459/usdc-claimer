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
    "2jtuDWsuP2etKjb4rUpvQV1NBBeLJiCP8ErQ3o768AbX6DXFuBvMphTLvxh96yrE4QaSNPMv6v38dGiSBzRyMZUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GRJzyWTMErE8chM6nppXX8jk3wZZjGP499bkvdLRdVuyirK9xutGP3pmUH771kP74bFy9iiVnZuJhD9Sehm5f4",
  "key1": "3zPXkkcBAHKX8mrMtsMqbzJCe8jTLS6U8CSBehbtJ4urqgihqocodvtQPJDNB5dueG892SdEqC54ZXKT2HcnoHcW",
  "key2": "4JZdT8EcUkRG3xdPynZXgLVicWiXMxwu9jEKiTUhgTvsLSTLK43v9ehNesbn7rg8AN6H7YqcH3UBNvkxed1abnah",
  "key3": "Jw5hcGC4qtuGwGSCeSQAJmffupxL5ixYvrr1Ya9jvUw2D7kmPfg13n6eRCXmLXg61H2RK5g6opFfnEZs9nzWPR8",
  "key4": "4JDJBxky5akb4RxEwozcWVNTLqbNMb14TfnjYYjt3u5yMWNNmQJhBoa6tEejLHGPq1S69ywMyX2fmLcJEeVwh6qg",
  "key5": "YoMHoNkBfuR1ZaNLE3kSbZCJ8z9U9qFYkujixSTDGqGRewWQ7WTncpe4kWgo9mJn2iwUvmz48EAkAqRSDwmEbqo",
  "key6": "5s6yHBKBKAL5YPgsi8XZPQkQfuHM1sxT6cu2cVcRpYp2dssibTFUYN9UAdNQLZxvHWm6uh937ZAgkZ9AXTshehaD",
  "key7": "5LxsryAXb1pKp7dxLa92xqnize4tZhwwgAbW41n5Zr2whTzwCrZCjWEsYCPvfCBWN8S8NgxJ6EJVN9ap6tuqQTMU",
  "key8": "nKjypjpNsupc5nMoYVXXBVbhp6hSdj7KH62h9odtBQBPQDjugrk5SFtzNSFnP7kADVihsUiT1xxYuJFTZL1oGTC",
  "key9": "4Yw9Uc9eHmMCPDrEn1WzPkFy5yykEZzHqbrpbDxzKviHmFAPTRKN4U8SEFkthhVxa9sHLUfr9aMcT19TnMfhLTEM",
  "key10": "55jozcrsB3jXyzgk65tcttKHCimgqWzsmefSAdw2uryfCXtUEEumP1mA6FGSEbQcarhosrRReowSnHag5hMLW7v8",
  "key11": "23aq1x5xLXDtvECTA4JiHAr9bj7heX9iAiP8iNAwjCMHJPCcnWSy7qprGmKM89K35CYP2UyvqETucdFaZiTGrxhh",
  "key12": "66zirq4LQt8ZMTG2Soov7EFfZaxQoc8LQQJETgRdGcrMH8GcDvn3eJv2cxuYUPMfD415givXGPGxJvn7zzxbEXyB",
  "key13": "8Pe7WEjJuNBt3XVxHqqZphDLhsGh9EJ7uFjKKVHd344vEgAzR5WyP9fT6gnMBV6czrfdo261LkqnCmWV5rECAXV",
  "key14": "PUfvo8jJWMnydcHJW1FETPGm9ozcBxS24XSXEVjJbfKGUNkCPZfBwx2j43Y9Qk8wZ54Jus4eVyp71HgzvfAchyq",
  "key15": "2Ym9FAFTosKTpK5ZK3gms74XTmdxfZ8eCCXGeH84SFamLaT43UVrottdxVZnr8s7wW7JVHCj3qjTmd5SDjAanqLD",
  "key16": "4yyXpeYaMec5ieAsW58jfkchxDtg1oT2uHniaQ82WqphWbr6sHRcWpvAsUSu1z2Hgkr34XLhsQiS1sotmkaacZ5c",
  "key17": "fqyi4fWNCp83YmemiaZpf7PBHU74UUeWhYiQ8hx28vhuyVYZ6yqYfNuGDf9V7vjJGQaezGT9FrF6oC3593fd9J9",
  "key18": "4XvRLFTqZYf4wLsznbzCCLN1VKQn1LNtCM8bm1ReKBC9sKmQkFHwF1bRRZj6PfF9RKyeVb1h28Hq7iVsmAfDHeQb",
  "key19": "2NThHyC2BzgRnkXwU6Dj8qx7s3jU4a1kCMcG51Yu9jNdQAf9ewGVjwkvsPURyysL2V5JVL3UoqQnE5fF3PBpQx8c",
  "key20": "2Nktxns4qjWRZtgdqsEv7WbjmHWBigzLWz2sYcErkv29CcakbCngMz7aMhkH6QYeuQLmi13kz8QmL7Ev82Lk3sgi",
  "key21": "29EJ7nrvp3GUBvjmT775WXKmbTx19sQBMu6pvSNgsK1dzA4xfMixhecKbKcBenFyNKkDzLzMvoTG6WLxKsqrPCuU",
  "key22": "3kyUPN4DE47BGjoaEy1gGNeoQR9qwHinfkb4LyWytWNxB5ZeWyna1we39kcSoETZx152WMg4Srh8jLq9tnR6dnpP",
  "key23": "671iBBA72FUKsQZC28gouD6wNdUJGBTwF973keiwJu2BEjYpvaW1v7rCXuzPt9j9miXq6rqKS7xbhJrLpgfTcY9c",
  "key24": "3Bik73oWxfrVYPbiY9F5kL7BQ1VyjVVLjp89XYWs8AvieopWKoS4D5jDSYmrQRWzjQ7aXjHy2pwKwygBRAsX2qDW",
  "key25": "S1Ciow9TkGopAJosU5N2jctFxpjmVk3uei77pjHBAtfcx9qMTbKLCRkLD99eKgdedp6DdrSKodxhKpriDCWKd5Z",
  "key26": "2FSbTBMkfG5Sexvk5MVdACH8J7SeY3gWzCRkw4t6LgzS8bk78D56pEZb9VGixvxBgB6S3aP1Wsr23DxuYduWKiwH",
  "key27": "2MYFZXK6DdGNM3nRHUMSHp86T4PARwL5Xcw7n2CPNihGTZ1JAGwyaCHkrpm2su8f3ddHbQWZETNHQy379RP3HQTn",
  "key28": "2ybwGmToSfH2SBAe3TrgDR7ALkPX5xM2W4gAiMQEPchn3vskfLuczEnzWEpZMwtGWyXAGw2N2qZd9R8x6uRVxCRg",
  "key29": "66gtNnGFqDJBM9urVCDqiYsEwLePj5MeT32DgJ7o7bVJzkh4hPdFgvEmyrPFEdMVhGXVKpZYqUiPCyGNcmvdd6yC",
  "key30": "esLHbeKbrv7ukwCPdV5kzKqw7zNbc9VKvzmzXhRTs7qSCw3DbNeXrgiM18uzpKEeKSAFtYaWeX3eL7W3jj54kmA",
  "key31": "4xinvJNJw71W2LSsxXBBKiuL79NbsRgePXgi5FmjF3n3VNqWPjpanHhpmXqF4gXnxGT6FWAhVCzBtj6JnDffVFqL",
  "key32": "5jqbAb4Lcf1LZPCo8MpHykNEyGYAhTVG9yzScM1rcVJYAGEhx6ab2E3zYNoStR8pJw9XxfeYD6RRyk98jiP34DUv",
  "key33": "3iUmAcPHwRXhJLfRo8XaGvbFgg6Jt4Mc8XbBhkpoKHzXvRrEPLe59tdAvmzwyid91Em7q5oyep9uPEogGC8NbL9o",
  "key34": "3k7BBpY7K1T6qtyymM8cztzcSrpm8eU7GX7AxfPE3MSVo2MjSg4oNXc3W51MUi24iHmETHzWHSkKMYAKXaXQLQe",
  "key35": "1PHmsjVCUAtnoQWhNoCgDSorKTHmTc3VVkYGPMm7ErjcFSN5APyfn8sME7QBk3xVn87trD3ECSqtvwaK7UEeZhw",
  "key36": "5Eesdba8KoSfu1XPntUp3KLao3RjvnxkfZps4gnah4M47wVi7LuK4by67uBdTT7zydcYrRsfdCrbB6eW7wSYBh37",
  "key37": "41cfbUYyEXouiN5hk1cAuotjt1Vx43eupGWWdhjJ8deu6KcvSbaAKUL7ufBYDGqsdLr1oyebTiPHAgc1N72ZnwDF",
  "key38": "2dzHB3wp4sLrdgui2hrH4qaMk6R65yaCzZjnEytc4PEvFjkGVqNMV2GKxw8mF6vcjQ7VStxqc5jVgAkPhVa31nNv",
  "key39": "ptbq1fhixQC7WAbogTP5xFq2dd564KMmq11NqD3knuHvqZDeH1aWgvroSwWSEwh9yXx8auwd83WJQScasLXefsH",
  "key40": "5T1pNFSLnGevLvAnjKK7Smaiy7ZR6sNFKPQtyWa4DM6qAKcuQvWXa2AoaLzGU4pZsD5UvU2Bhqic8va6HuGBh4tV",
  "key41": "2V3qvZgneHCGx2uak1dqHCsDTyA27ZgZNfZf3WgkCk2fehAXot1k2iu4Gz8BHwG8vjknaFgFhhNRNcVBbXSjKXNW",
  "key42": "TgR2RgGySRKT5YsfwQ9LzjkYZTtR2UqFxdZJ2R4nRRVqG2VFrCVc8c8tLxHm2TH79bjxfKBZgtTThDM8ZfRiR2o",
  "key43": "5j665WfDqRZq5zCjEnf5QdPDK4DZ8oetW3pQhkpyLebw6yBNQEpT2xsXVhscaDgu8NSmG6bXBbicschQzHpNPccK",
  "key44": "4QAjK6HSJvQbG5gzyNgPTtoEq76gs2mBqvDrqeKPNRWtMZ3YYYdEKebHyee5gdvhf6Xt2uaMFcyKSgV6PzUY5yia",
  "key45": "3vTeiP3T5UDoWMxjMK5ZSNfbjk8Q2jLZrF12hozrSuFvsxjA1WCc88KgJtP4paWypbmdyeLzwRfdw3vPbWPWsisc",
  "key46": "VZjnSdeX9hpEiV3QS2aJp12yskcxe3TexManeMT6APn6TGeCM2Yz2BxrJaajgcdz56hTvFxGV1qGpuQDjozbw6E"
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
