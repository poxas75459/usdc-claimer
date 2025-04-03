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
    "3wJuCJtjj38ihYM5tUdemiS63k2WFg5Gw6ism2Ges1az8RUo2ZvdHhw6nmEPSZsBTom2BvXshXoiBh6JEEaGQvqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WRm35XadpiZQn9q3yjL2XWGuWgfFEadE2b9gyrzfVD4bnbCsLrQ3hBcbSs96xXBsw7zWZhp6VsQoP13fY7udToT",
  "key1": "9vm8gZv5ZHMsnCwAsNLX6CPq5RhRcDK6pSTRsVdPTDbrjioaFBdTSCn2u8FZhBepUYHeczC9cdHNeaLcEZ5kQmt",
  "key2": "4doT3ZRwHKMvy6uteoSo5RGEDJ4b4TZQJBMYdsXUYv3x2iZmiSsioFZgadgNABGSbm6XMxZAqmxxJ5KyJqRpYKgq",
  "key3": "2s3z2kbWLbLtGzksXg3pqdRQiJMpeh9G4uxTRkDNAgBiVhr3ELsCGgxEkhAM9MatWAnhYYnf6Eyk6TBph2FZd4aG",
  "key4": "4tHgmQjd4xRsfKk7MZdN2tQ4itBsGnUbnt8oVhF1Vj1gMH6uiyoFNkpVR3vgJMLM7T1pkYogPZqJR7pWG3wWxDgK",
  "key5": "3k676GQqn3yJoyFCsEdzpZ9k6HKcmZnGpCud8QTFpikAh4PdP2PMH2pRp3iojRa1AxgRSm3gV84B8LYPiuLAgCJc",
  "key6": "NqimzBo743gU4pk9hCJLvjRar2SDV8UCr1cUPeRCUYMG6pTTbuJzDokkg9cR5LLUUVDf1AiAMCvMNXFPW47usSe",
  "key7": "g76bgEMGvoDp711o1qQAgtqG42Bixb79qeq9wMRGQVKGbFyKVecLMMrgokBr3a7dbZGSEndn99JdYBbiwZ1dGvh",
  "key8": "4cubCMd6vyhGwqH4YYsbL7ZehQrMMTg6LCsobdsaezqfxbJxPucB2UFG9MTAffDBPJcfnBp3jR5YjU5ew5obPwxy",
  "key9": "3moctsvof43UNd2S2KqVWop86B7GrmHgmRbYprr3QnkdCsYMkEXmGBSMEsFGtmtkH2FrY1LnU6YxFQZkfrLQ2jX7",
  "key10": "3bb8W588h4CJe85vPjRrichWCctfHWozfoBqG3oDvYbSuczq1zWLs3R7nZ89orywygsXtFg6ZQCRpN53MWtrhJE5",
  "key11": "UnVFr3csxVRmH84ZbHGmLLu8mWZE3NtAco6CZLPePVv3UesAXD689btQXCtdw9LC6Cvx3LMai4yyqnnjBhmBKM8",
  "key12": "5u8DCUQbTH3p4hAVA6UMPJP2etZ9mvh5SgGQizBaaVcwfjjDvVWcKGPuk5P1u5o7j56UUKyofrzNDdjesRZ2SY5H",
  "key13": "2CLTC4twNmMdFiJHmnRPJYJYBrJyrVcJaSFrwdsCc4u7LSrnmaDJ6PY5v1wU6NFQzupH4qH4bGCrXGvozMrvJ7xx",
  "key14": "3tJszgSTJuLrjhicbBozwdr2shxSt15kMGZqUbjy7Yr3ZATEnQ4MR5MMv9pBBn5zSC7u3vAzGAigpmzCfsTRdFxK",
  "key15": "Ln56ViCRqtVk98YTBzMCQqhmsZY7n4zCTa8apy1HfNBmvkT5DjcJ1cXCQXVRbK6CyFvmn7yfxvsbMWwZvTRp78v",
  "key16": "4n4uXzWWKjg52k5QSdEYWjyDyZniBMhZ2LdZwhUwXdETmz3JaXrCtrNKotvQWVmrLwL5WELAHBJkrCrh4T7sBCy9",
  "key17": "4ptT5pLSWmfEXLgvyh6Ei51GoVtYbDt1RjMmhmShnReoGEJa2pEoRidqGVwkrgaDNPxKJ9WVtxKvVqvRar4DmAab",
  "key18": "22UyDHGeuGQHZUHjfgKRdWSuRKVcD8p86GoSBAwAC82mkXMYDNBFFAxmcwKFzBhEtk4ytssHPW7MjengGZiGcsj4",
  "key19": "U9RXLwztL6dfMzQuS7uLj8mQXMZes8NqzWwuE97PmvNNq94bA7oKwLdxiBJP2jT7r8KYN7q6oaVVB4dBrbjU61V",
  "key20": "5SKZCnVkufYY68GuCkbWb8JduEF2RS5WsJugvHYqRFchgPSS8bFkGQHLMAXmWbr2YvAGznwiXSkkfDGEhcoWj4ap",
  "key21": "4m3TaeMmBM5RKDb64kkz1AjbpmXxERQabWcVHoBCzYW8tKJcFbeiXYKcUxPS6f8Sadbm3vyAB2CzF9yXsYoNSBrq",
  "key22": "2D1qRCwXKxYYB1tGuKyv9be47MP1T3FFSvhU2zz7WSai2wG4bFL3n9WYxdjDqM94PPmu8uQn1Sz2nPNvMahbrHGk",
  "key23": "s5aYTAtbVAqinLt4W4d6DYFQqHzGxmfxUc4RdotVxuvr754zHoGQB2uAK4kUpXWT9pNfs1c7j84SkAPAdkPz4SA",
  "key24": "5DH2h6j5BGv8rUeYhNG7GmEzoBMzaT3LmrP6eGRTTymttQt3NyWWdJyM7v3rTau3SnoXwBJmykH3rx7gizmWZJcZ",
  "key25": "4bqaL1r8vMfayVUbV7KG8QtCPfxm43WVGkvWaSFjV1LCyQQUMeKXNjMop5jYqGq81uABJ2EdtheDx97CKLMESfsz",
  "key26": "2vNHhRM3CY3x7Vbd3wt5yoPzXtVgSdbz3UE53x1F2UCovRiTZp36qk5xj9zDPrwmdm6KPYfePQdTsZotsUojv3Kb",
  "key27": "EPC2BwXCphvBMeyZRmy5SpQZsmoKJzS4iFYezFwBH88jQuhS2nCcMeHUjRcuFmTthHZpkRywyXopqLSHR7TQ7w6",
  "key28": "5rtrjnSP7K7vB4yjkiHNA3sbn1KJ4q7sWEQUd2qvYMciUQd3Ra17XLYZ6JFdaaV6ytCcRgQrSCyNfx5PtNCmKQZ7",
  "key29": "5p4yWTH1iMmYVtVtLwTahqcsEVUG2Zq2x7ZmvdpTMCFXfiVAocyBRGGAWp1tKRvHKFqXvgJntDkw24ntLjBEYYtX",
  "key30": "4c6uNmucd7NscrNztcAWHawbmPigPu3N9g3rCesYP8WHrEyyaPDE6jkNnEG7MDFbGezJZUqUECJQMHVQyT4G2x1K",
  "key31": "hpNtxSjfEZ6TRgBMnbakEt4o8HRJ2HXCoXrwjnUKUvPe7NDVbArf1JP1PuXRMgzQJb7VnCbc9ADezxcDRy6sZ3c",
  "key32": "3YnvS7pWZ44TsBiZfVvHR9zkTzTdFxUyMTi5CrJmfmcV7LpVG98HUGpA7AuRXRRpcKUkJ6AjKux2WBGobAq2nUGV",
  "key33": "2Qr44Nmi8fjSf4hcCgoXVvkxArXUyjgAPPPX47nLHeNsa7cgWTVyLq6kjqzX2TYWJutjgFhXYXjUu84Chnn8JCYg",
  "key34": "4R3Gogm2nibGDLvqysfbuE6RJ7bEP2ihWi6jEnZFCb4spQsL6boGJ1LPeYKLtgkQfJYwm5iMnSVRTGeiTx9UH1vc",
  "key35": "3BcZW6h3CDSbJckDtSzAxYk4esYWaEk1T1LobokZo4zxXQH9jXzX5p4Dt2av7R8WNsyT4cUC7L2vRyfoHioEXcGY",
  "key36": "2t4nGi3hcg6JnbhwKASiriqzg5G4z7pXYKhETXyRzqd5Ef3KipNmZvGd7LLyLpSGmxTW6qKHUZU86ok664zT7TBM",
  "key37": "29mmUoAsLqRjiRNWAvKPrcSPsKitayMavE1uymgo186frzsKwaHfHTMJBgJrtRSXzJtm5unDyZbw3mX4WJN9zeUT",
  "key38": "2NiVgGRFkDMb7b994gtLB6nKMU4y68DL55qeXsutofPF8yR6E6WKTaymZvjBoth11urzGJDWXkG8rfQCRvJMvnJX",
  "key39": "4L2DEWCfBpFUa9TUNNgv4hre82CWXogr8xJi2uzeMdWX6hQDLZdzWAb71TZyTzBHFn5G4ynR4uYiF9xpjKihzfLV",
  "key40": "5Upb5i4rQoNgHrWF4DrLhnaAHidFSQNfgAk3kZZzjT131r7qRfumFbgTKjUzCn2ZJKiE8LAQUiQGQTfg9i7198Pe",
  "key41": "2ha2EvXegr4FSgvqGnuAYKjLoPqWfip6iTTVw9Sd1WPyn9VA98FgaPaNLHaSfxq5PNxvt9QbwvRKZ6iDy2xdwrPE",
  "key42": "5hjgo27y2XwHZbpSvSzh7QJTKtkZHvLeCcTvusfHqfocVqHtC7PMBuU4kvV4ETotU29fUiSd7cg5EDRhQQ3Rvaus",
  "key43": "6UZz15SyiNBT7QzPNv9LvpcS6j6SUbJC13CxVLpkmfW26WuEDVhS7Ha9L5yA8D9i7oemZiAxEZfnemNdFUp9WKx",
  "key44": "32NGEzgba5fxATCaTw1Qw56XMJTwY4cXggAZixhrt2dosKg6SDQvkiGJMjsctT8ecBx4fxWsAqLV1oyrqAVGkiyw",
  "key45": "4WA5vAu7cqGQ9nMaeAjjBXrKY9uiEpRQ8dfrkEDZkxZbSU5NiR5FXSVM4fUXrJcSMApa5v9SHKJM9EVvWnwiiz1c"
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
