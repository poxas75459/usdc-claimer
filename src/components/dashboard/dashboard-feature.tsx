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
    "5ku73ogJaEfs2jEuEkdAw6K8pk6haVXAEATNAXj2cGkJRg8KQA9LV8YgQWxGoM2J7oWNTvpks6Pue2NdWqTs8REx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hqssjy1qu3TBg3RzRK8fbPwNV3kJm7e78wMQSt6SBDAohbFfnnmpkifn5Vqh6NormMzuREEE2yDZGi16NbpovCv",
  "key1": "tD3YhxSAX2Kg2UVxHNsjysZuaWTd6wzSVdvXXhsXCo8mWKH4TpJ9oyUAewzFKurh4w39oq6pLgfFWuwsBbYCM3R",
  "key2": "3mYLg5vRB2HSBp28CXLvTU5oef6MdGBLspY2JD67Kn3mgjqbW4xbjz54t78sVSPAW5HodmGzXxwmKZYHkvFedNRb",
  "key3": "3Tyxp7S2TsqTaUxduSC88BGADEGLGgmwGG7Rygtd8pwj6vN98jREB3JT3trv2Mc2JKAtmLMvu5MLHK4ktJoa7e2v",
  "key4": "AoSecuntzAQkuCisKnBdiyxirDJUsn2eAMCJhGAqc5C4XmNmGGFhHhT296Tkv8dBfFcvJHtJvsD3GituBLTzD5Z",
  "key5": "3Cn2aZbQqbdre729r3kqWDswmuygkBbd2r6TzkMdcfXM7ceMBdjxoCCGDdeoP58STVDwwVjavCrr2r2qPqreAjNw",
  "key6": "4R9qbh3EoiEqthCxDjUjmEWfUCQw8JsSwujLDzxUP6z7QMu8yK63AhZZUJ9n7hSbwCWQwuyGDbuLNzEUHgWaXscM",
  "key7": "4FXHpk3DBw8o18BNAkWsrZrD8c6gkswJ3reeAJqVWDazPqhY4T1WfYxMShyNjXP2Yz6FNPB6XJfoUBRWdJiC3RL1",
  "key8": "N9z8pg5jVH8Pv76vAPVWciPqxMUyxBXirA7sApB2yKytZvs6vJRRk1SqZ4tVDFYfZwbxQp5vfS4YWEpxpkXCViG",
  "key9": "2XcmEfH52FWh5XBRWoBfmGeAuDDPegU9SUp3E9LrFTascr8WbSEQk6AeaoBe3TrdgWwNqRorT6kk9UmcW71giP5m",
  "key10": "2Vv4KkStDqWATvZVqathxmKhp3AhzjxB6QPQwB6L1i2z8B4RyyzWSGkbKNEcsXqt3T7bcmKHBNYNpUYbyAwSqfEw",
  "key11": "5PAuozx5CPWsFZ4Ajzq3SFzF8Rxa2DhUShoXant1gAqpum3CmbRqUSjCaQVVSNJuJowwSba3BavAmhhp26i9wZxV",
  "key12": "3Jc3mdTqQQocq3XJMs3HumvV79MYoWcLCwS2njrKEj9j2anh3BUVkkSoRKSahkmSM8f97T8TyXqdewt1tqdWtS11",
  "key13": "2yV4oTN4dbytv8TYWLrCEQzCb4LMiJSZ7bQoMFGp795v6qMrNxEn8Kra6wvTBaqvKXY1yCWhZXxg3M5UGrHSxVCq",
  "key14": "4yvBCuqjwabXnixDKooq2HNRvoGvhN3HKeYUANZvPN5zkM11rwqf8ApneK99TCDmpBT1rWHhrTGcpvLrxwkQoD1x",
  "key15": "kex1UVqbvvP4xqFwpgSUt5ESKYvcXWz1fTeywfhmyP1A51oHE82zkegRQbUY9UAYP6dfNxJq2bVcycDDaqoCjtX",
  "key16": "4yvXsYaJ6mTUm5NvnEY6wdZaq3WWr9hLM2xDDK2T6eu13aoUq2WY2xhborE61bT5nu8AHcTQQtzENCDVsMi98xCw",
  "key17": "59F39suuoAoDsmmFxQhXa3MxDbR1jDdjTTZcY6tHyK9ihMVDSYQwNmp3guQJ5cfCSLNzxoTHwS6Pd7smUm8PkLrb",
  "key18": "5X7cS3sMiawYncV3pGRz88hoRpBorF6dvEBRq6u1X7N8Hy5HZUXzvofdrUVLgR3He3gYfrsy2WmSkLVPkKy5Y2KV",
  "key19": "3C9hJVDyW16S53749miqwDRFCfoMxLcpfQBqw2DfQVh8FZzCVwXb23G3D92uXsKGUKCCUkaVpU6NRmZCfRGRAx3t",
  "key20": "5xDwRzwQjJAtMUSmkQQXV42buyDPFKfRURioXu3AH6iWqsWX5CEUZAjWTYBczhNM7zUQzUk4fnCGsbNtcsAQvyGN",
  "key21": "5QiBPST8G9JiYhroLT566ca37AM88TGpmFQfNRWuZ6aD573GfdkSioL39z4GKjk1LCD9HupUdL5cXUDtrefJx4jw",
  "key22": "3HH2VdMpyJpwEZTzqHTurhr1beVe1R6Si6g24Q1DXGbXgHEyXU92MhqfLtjBUXVXLb74tjhWkFo3w6fcNGbrjBzj",
  "key23": "4bE2v3tDXiMa2LeGryp14Jwcx4feJ97CGBiJheugHE4Y9YuYqDMJYSdYFwj4i3Qcu4kfvRTNHHjFYoMzPQVSYZPo",
  "key24": "5Jk3Khf3VKTo1Fgw5e4m53Htx4e5QoUwoK6BSnisNstjPoG84tkuyjuVuJc8YMQmK5V2vNSY4nDszNvwqWiu58Lu",
  "key25": "2QyxUgy2MFhFWt6GLnvtf9drvZFQ37da8ECTnEqEr3ZybhvEwhF6JPpMbRQ6hxaRi4Erp6s7PYRPoLF4ArrksCTX",
  "key26": "4NW7D8i26Kok8GSAbq5v8zZ3BJTndifsDbpst7eKHpZ7K7n7CZcoUk9edLCqDumZcL1LburfExVZKzSxyH4s4iQw",
  "key27": "3V9BnaaPyAXH6NAgQ396tBMqYETGgmWbEBpkaVhJCm2WNrZzZhkd3GqvCKLnCNj3VcTx2WtPs8uPrXVTA2nKT7Sc",
  "key28": "waE1saEnL3ajyXbUHnZbTcwVUj4WK6cnwdAjgpyrbjbHvzcQcYAn3bM3LxgCxbPGe6DGeNDXcbyFar1ceshwicX",
  "key29": "4exteXdp1WFY1BGBKdZWG81iTPuEVFj8FqL6UEEK955S36xYwmgWthYK49KhrSBMpzhH33Y4fE1qEfgQdbmaaSMo",
  "key30": "3XGPCF4mN9o4Zh5AVjFhDNqgW1wGMYxjpiiYmvFhaQp39u91F2jhSmkxJXANhw7CPGWJksu9LZRDuFZNnQMxnAYS",
  "key31": "3JLswVxUJM45RXf2FbakCk4AVRhmHSEJ2Bh9Gf5htKjBh1jFXUVT4KUnFwWxCDkbLbyve9ygVrXS5ECcT3WchWyw",
  "key32": "4JMicBecMZoX2wDdPkx8pFg483udkWBHWWDkEFPm3KxQNCoZr962YTeDzVMrC2TvFdSdjgpwJLxR3w3ktKvaNrCe",
  "key33": "4ZTeSGAcY41avgCxBvkWgpyPkebNDw4wNAGuZP3RfHAFWUVpv4vEa9AhPKqKmefk7qKWbeMhVJMN7mJ4CLiTNmCp",
  "key34": "2tLUT8x1L2xR1UywhpfCbBtXkyWuyN7iaUwE9y7EDrS24EsWTdTeTBBtdg9qEeHa4iyU1bSn5A3PmXKEf3gCXT5G",
  "key35": "4KqxQzFr91ojb3LwkMr9z4Y5Z3DYxAj86mXypAyKDagNQ9SYKugoFMdS2SwW7yqUUFLiKoKpyD9VLw8FwryngSsX",
  "key36": "4VFJkvgYQFMCt7S1ZdGPDTPJuM9MCd2vBy9gK3feLPRtanzCui4AsyeCrYRa4RFFPXcLGWqQRhajqUxgWdhyXcCP",
  "key37": "3sp2mc5b4rWBJbSVLvZsBqwb4PDVzRfCpychjVTFLTF5fG7PqrfaRod9NZsGWpWcXSoFzqZafafm2Fbfp8qNzLXs",
  "key38": "559kzJyBeYv8SJ1o7G6zCcUBUzt6uSTHXjh8CnPXnD8R1FAiTefAa1yHWZsMKpr3UAG5ejPrYjELqvJtjv9QSPcW",
  "key39": "3PoyHzs42ussN9zo2ZwiTwDwLPWFubsXNVy512iyE8WHv2qh2aPwjBb76V3qSbuxQhpgYtvdpoBs9nKtH9r5NiQQ",
  "key40": "3eXVZpgvQaNdEHCYcP5GFkHNUF2zRSdcfmrbJHWXTDJtvcY7UVNf9HfM1K9kwy6crhBnuv4tcg2JJVuviDUnxo2Q",
  "key41": "4EzBGS8FLRN7zTL69Y4Vn4RJ64JTUMHdNFcYywUzhPUb3s2oN1qo9YVrTXPfuRpfDk1mBBhADPWKg4m9zBbmdsoS",
  "key42": "63sNufU4p31abtfEuGqFDfCVFVD7MMtoaic3ggpurJkQN2XhvKXHHh8kxUHeeqPpDP3xXtiH5M6KGpiMgF5UHvZg"
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
