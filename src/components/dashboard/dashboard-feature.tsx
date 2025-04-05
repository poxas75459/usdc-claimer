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
    "2zp7bg8ioPeF5MSqurVdjsv57C61qXoQhCnK1m5c2dN4q7VohdttpjzxbyNNPaD1XL1D6XstYuFfLywsHkLCfLRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wR4zWVn1UPJ1rnemNFxCNkMun6kKBSVYPYExLh77pa3zinv2DpMBjCAA3rp5yFFDbMvfQ8hc6N8NEuNLojoPXBq",
  "key1": "4jN3uK6B8VctyBQVrFBCVkxZX8LDZgPYFwU6vp1b2SW3q15Myf5Z5o77HFHqwrdQGZDWAHoSmMFEZWwohNrh9rg7",
  "key2": "5KGaMzrX8efzd5G8FMWNDKTGeq7mDeVU8MwYkAwV7HL9zSN3hpYDmywcNKfsG3TC1SsD8ZzjkKM8jSKQwzTSAhqz",
  "key3": "GxArrUFVr6H8GaarGBRJ8DgTBN84a7LXiGSpJoBfEV17DbE582CGSszrzZJy7ZfDtWfGHWLuo65496RfiFNojT9",
  "key4": "56MKSy6ePrmrbPqzHvsL5UCSZSyywx538JbP3mRkChxSvioVYS6aBkUopsJFsnAxqNuUHHsYyAA6CnrdvoeKdfga",
  "key5": "5XgTqoPsenxdbUnY52CmSwJozyW6inXhiHbCsvwnvLLzZGAM8pBh3p5Wp1TbJwqEKepYaVAWYjxYCTQxvK52SAEo",
  "key6": "ncxF4Nh22r1MaP9AmdaWUuf3wA8ZtJyyLH1drqgSEDqXLczU7sRQWfZzSsJ63G92ojxejtLVgf6iBD4nfxPpgZE",
  "key7": "3HCqCb77qgVisZQZAmRGmv6NLzHKbqsX9ZKzhfQjw1EToPfytuLc9bt5B6ywHW18TgkRqzRNsmkDoPMacHgy9EfZ",
  "key8": "5pN9nev3EHSTLNq4weSU6nSn5efWa6sCjnMBffS4HdjYs1QExWcFxzgtjZU5QgqQcZTZny49sfPsUAxrH6LxqWJp",
  "key9": "5kUipWyAXGxbuz2gGhEQjG5kftPk1LTdhtRzVyGTyC8gjxWm61wYxgQCAiZehyVq4E37jTabwwcoFxUimQHQKvW9",
  "key10": "65uNnspGyA9Rh3zaPo4oa2c9Zrpkhyvc5EH71LmLqaMESGqEppR7rXfJpCVHwPX7gFF5TYNZGpkAz1TaUPHDJsWF",
  "key11": "2vpzEc7Hn4FvonKc37FyngXKRufm5Lfd8FTv3V8mzvywMfh6NqGCuXsxVk2DPkc6iMyZJksvw2VNCeLQs3ADykaQ",
  "key12": "t6d16tjEjVpHAmVhD5zHfDrRNk5a1kFGh9cprij6GaLLDqVgiHHXV3jsXPSps85Uga513DYmhinihRd9urAPSkz",
  "key13": "152D1t5jMLSgYwPGJ7kLkeumpx3RjJUAGxasV4zSkdhaB82cr9VxUPAZMQvVNTBqJhQs7GU1pwaoDgSwfsDSxKv",
  "key14": "3hntffTMtN4P33Cg6Cj7LLk4Npk2KgFe2gkpteTiN9gw4ars1ZsvpYQNe6zfwVSKm455SwH9h3DKzHV8s71cgv5a",
  "key15": "48BEU15CMD7Fg7u3WFjv6r7kCYYzYoZKmdBzCF16aFjsciaLCC943LvjbaWcoE5zD5jtNLg5hbeC1qXKQvXLwLh7",
  "key16": "2Vc3MhoSTafGNy8PgoyyLvDuPE1A3dk23eJA38bxt4RtFVgFArxkbyHVfpw5sVEjUmUEwzENtuL5Rb697BLC6KHD",
  "key17": "Fmn5FcJHmdjSbSqXzfFb4uT7eAQZGgYYFBPZ2HAkqPc1mJ56mMc23j6mUedDGigGkqpE98yYTaJvz9mnnJWfzkd",
  "key18": "2bX54MiVpuM7EYMZ5eR624F7HweQDrganpWX9Xe9mwGXjGjPSLW5JM5ndzRWwTZL4aWZnrq4c2zbfSdrHp2h5aXs",
  "key19": "2s7YruTmYptVPgzqYzdNArCD2YgLR7fncRtFPYgFccZRfDY5jv3MrbZx9TgCyc2LrDDYvzSFXv4MwajzFet2MzFa",
  "key20": "2cW3mWn8x1dyge8yeHBuxd5e6myrrYgabvDKiKVi6vJDg5Y9ZY7N97jGakd2MrYJDK8n5V12mutgUa7ywKim25hA",
  "key21": "59HWH9vaG3JQwiDRasCpbnyU48qyyK2ahJXfPbFAx6x7DBBVS3ZG7XZcVtzGvQGrbWbqU6dLTucbzcfhGdF8RpCb",
  "key22": "3DfQWVyieyqEQ9oQhAuJBjJdm6j4P2pfGhs5kqA6vgB3WSMDmcrqSUSyf1f9UE79fedxkWxLzhhJdbQvNJjWLyGL",
  "key23": "3fchi6vjsSXYY59DyaQUyc8BfAZcpTM3zMHNA8UFuQuH29hQAgwBtJsLPUV6RWywn3oe81JfHb2c7eWJ7ZEf3bUz",
  "key24": "J5uJPkznJ2VnwknLfHBBH7bTQrhpS8A2aPo7NfPZgaHXuV9HFWghj1Cf2CvV5qtFGHbKdrrEbQteUdJsZtj4axw",
  "key25": "3tVsc9YY23sGJPo1edZqas5A6B9M9F3iTh71Z7QvRg9AwvETSio6LvFDq3AgCZhowrCHFU6Nupd42KwsKzw5H5cU",
  "key26": "4aQkK1tnd5n34VcxPqrXi9ke9nQ2EghGLW9g15KMc46fDhuXYFopJJaAD5HqGBwyDv5Zrr1gZ7ESqSE3c7FeaGVg",
  "key27": "4vcxyCR2Ut9TkqXpg541SjbBE9ReWkdWgMeSCHd8EatYFugHFULuDuN2ogfNXYmL17FkxcsPmLLjZmqZK42cvSgK",
  "key28": "2JQvHpV4LjDVZuE19X3Fthqzaxq6rnCitQ3BtY3piZ3niH582nHkeUrVg1AnY8Xv2Um5RVjAP167AMKuhFD4Mf4p",
  "key29": "a1xbJFaVgA6h8rRk5SpKQv44kH8YWhSoCEcrj35ChrdvzntguBugK3TDRQh5Y6ByFnRYMNJuhKaD1nMDN9pAiL2",
  "key30": "52vtDJHuMudH4S2C7rtZ5t4ScPzM8dQp6c1PcgnD7bw8ApYzLgwpEPCrSsSED6zZZCdr2LKnrAkeQ9perReiPfen",
  "key31": "ahQBpVmcgpdD2h8B8fViTUtyYW5o9c1nYcDMeWcHCsBEEPGWRq7Kr9CGR5cWvmLHS9Prda2qQnm7ThJLF6jVsyy",
  "key32": "36M5oJgJMDsjd8yTK3vwzvRup4TfpStKNdV4PJi81pjWfBRg5BQidaPf4cg9PQF9mHrhz9p26NxjKabkdCMsjaDj",
  "key33": "3y2HdVJQpEinhwXcTwitA5a4XPzKcTZmzfk67NWgHKgGRJKVRf1pZ1NFgg22SJZd1nKD9zf9us24rn3r9uRAiZai",
  "key34": "4RQH3gLg5aPaCZQ91nnCQDYEKLLjqfTkDvDhTPYGcbYJUaf6w6mQQP2NzZS13FBgHQvtKoP64xCjx3nNxSVJ1BAC",
  "key35": "xy9mGu2rFVoVpY3Hq192g9WXMQe8xw5Qs98JjmWFsEF6DQniyNMAQGr56s23i9Uy3WFfqApFbDG2yiESNj89CvH",
  "key36": "5t9FcL6EzjrQT9pBxXcxLZtWVPJk8X2nUwsRAhSsWXT2o1ioDsRjDKQBWEw3RYGPhdvXg18LmtXtBD68KzumMvtB",
  "key37": "3mT3VFEo4mpfcokPXoKU8zzywQ6Rm6BdV1SWKquek24SAy4FrPTyaSroEkScvBiBK2WaogcEKsv5hRfgPqcZ1sWh",
  "key38": "EHqqdjhVAngmdqEvcXJF4ngedqHpmdXztRVBcLnaakgvz9KvKgT2R4nQnEud9PNRaexjpwQVUXDXsghKcUBi2Nq",
  "key39": "3zyEXN1EnJX7CAaZE33fqDg2xem251vppveHaRnQssb4FJQ5FWy7cThGJuUPsDTSF7rLd6EXKRwPsHKHkhA81US6",
  "key40": "4aZevPqa2Ebcx6ZBFhXCW4Zv4vkmce4nUWTujTBVT9RBf3BcNM4i2shgr5f7tUZN1cYGw1G4YsASy6JwmwmCcQLm",
  "key41": "5EByXSWQDk6j5DHGfwxyadV5bc4dx6YpNdjDNRr6B9rat62DdJaYVCTzUv54azfx8hQLPZnG27rQPvoXxob3nTnk",
  "key42": "4HvbVVkEQcMp2tkH29BxubxRzLS8EzT2HwWFTe5CNRmJ7evTXhrDtU3c3jAXMUhJjUCHStyHio1dbyXP2yiZdL8A",
  "key43": "2ipxRUdwGZGb7WCYks153kS5zUGUFj6t2vy9z492BU2BAPixCjdd1XN2jFS9bJH2FnZGZfGRsZiQZMncZYXTvnQw",
  "key44": "2uS1GiMA9PLAcXdaY1kM2Hb3cHgrBapWZrqa2M4p8W1U6dkZVohVQSye1fMumcBA2QQrYPzz6NDGProtN6dmniTG",
  "key45": "3hPqzSZsy8UWcPEkhDUCeDccUaBbEsQZf6NVBVtnULKYh2hNdLnrfNVqr9EP5V6QSyQx4NjG1k5PCeK2HJGdzSwb",
  "key46": "34UsQvB1x2f65PMcm3wFt81bwLheQca4394Vec1UvX2n7PquNgLnM3e8jkD9CJHDiZwhResxCrEFh3FXv29xuP9u",
  "key47": "269zQw7HF8BdpRLvqVdwxkEAVQ1nLY4fRMvBdDXxRDfChzRAqK9tHgZivRFSWqEo2WrXmQbd5AibzAcXvzGRGtJ8",
  "key48": "2MkzMAvYkmiCBjgb4B4xJoZgaXddLV9mYEzmXMPAJpWUDKTboZhiYKRw6a3SBNS542JoeDg5wWzeommUW71SZ42b"
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
