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
    "3HutQgA7YwKB6ybUyxjuAKdQJ2V64x3a4zsSubd28FQchS7pYWY63tmwngtfUTXiV6MUsPgpypTkuuCPDsLRwNmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zzYC4uoHgxe1jNyL9hXFiLArtwTH8RtKWkNwxrzXjbb9sr6Fb7VcRssoDio1JyQWDzTJourNZ6ieTwRw9txx5fE",
  "key1": "9HvW2L2VK9mr8fam1CQGYkZpa7o2Td8AndvazKePu91qV3692F4wLjZ9ocP4mgSjGRtdSa4D79Pe6MrRzTEQqra",
  "key2": "oDGnJDMZUphad5zQ8XWkefZzU6dVAJ7dCBWdyLuFZHG6BtZZkJ24ctHaxdshUTqpAWm6fC6VfyeZfRej5A9v2iN",
  "key3": "2pBhgd86op9RgsXdGmZKQhYXHuUbjTrTnkPhBM9MwLdGNi1uMKiz9VdJDr6RpU7aQppvfrfvkXKcuQbUtZa6sZAd",
  "key4": "2eeKDTSUdSxW9XgCZyKqdd2nJ6PC6JQoyM9zoFRjKatGWkBSjWKiPkWHZhySirFZWF41uLoBG7re7cNBvJpaMNb",
  "key5": "5tMvDFxz5CfNG6SkwW33ZRzYKSU2Vb6bRvZNA2UUDZnj8GFnnTWFbWACXQHi2de8uGeAycvy7TBaGvUNmfk4kvCv",
  "key6": "3ExvFWB2CdnW6aLt7HktZQTksnjB1WUWWn4GGe8xygbvygKudjgP7z6FEgfthf3KGrBaZW2dwME8s5Sro19AF4Zi",
  "key7": "5JDWxgK8ZvFz7aRtD8ktJ93Nh2LHenXx8yBctWRexweEdSkvYymQiBjGAkKyeFGCS7NFRbq6QH1jvAV3sZrepAB9",
  "key8": "35h9kMXxoTVcSYVBAUcE6wCegUAMq591cjxdbS8aLqR9vHns4SXKJWP8wByzLmpZvpNDzrJ1F6r4WmU2aBX64xRq",
  "key9": "nbk4umqYvMuiupra1Drh2F35LkNX9NgVo6o9gGpEUUNSM4XmdHCBG1MbyBFJBYm3T7ngCZgAkznDLqjRhbRYgYk",
  "key10": "3UdY9yg4htwwqWwkht7PgELenVN5VoTnyxNjdrPXgm4kEGsRaTDKaPJuW9cVuK626NmxGCntvgwtXTxBiC7nKjmq",
  "key11": "4W7NGXHVStqUTX55DnhjhoVXWV7BTX4K5oH9B9pvB2Cg52Xm7ws5tCU7FC7vDmgAEjpaob2fudoEtx2hBff2NXNJ",
  "key12": "5FDuaWFx1No6UoFMsGU21m52Rvwd6tSi5RuY9N5sU8xCzYtybH7FT4e6kPQDXSNdNAG4xmBpQfYqM6xG8qyteqjn",
  "key13": "2JSn8NY11iMfdADUbqb4JgwgLbr2e2M9LadBbaVb6YfwJA7pSxaUWCF8ubmBysu6LS63DfAedyX8MzkMwboptYrz",
  "key14": "ZbsWgsr6RidHcZHRBFqmbouiiDwoombiNVeTJ4S7WyEY41TCnVgogrVKigoAqLQLicXLgsPKe1nc9Tz8VwzZHQE",
  "key15": "5AdXikR3QiHACkxEFnd5BN5bMU6mH3Mq7an13axjNBfdmprFHA8y8hdZn1wWup8FsoNkdpWVsAECFKULn42Ucbhv",
  "key16": "SvfMbBPPEsu7WxhcDecNr21oeyDdoxfMPgbTw61b7Juh52XFvfXbVF3A4nrYfBpVaRrenH2ot56H5ERFWBZewEK",
  "key17": "5UnStWraZ7fLky1qEKtXbVV6L2geeyryR5JkuBFePVVHCLk2XSd2adwZx6GNzZ25FoQHXYDn5gjQf63M69vLzXCk",
  "key18": "VSZVr6tfXVgDoWcCbLrSghZMNyejuTsnN5FxiWggbPAJbxwL3iHoyiP8jZV7DxiXVKxYt7Up6ZSVcKf7F7QSmzi",
  "key19": "4K34gAN71r5YZVzAU19bGiJy11fnKkAdJcv5xK4AwQzptGyzTDGmUxBPvQ5Uj2gmNRGY7je8Bi2BMasMX4Eg8wu5",
  "key20": "7NeAvFB9cSZrmYVY8KRuuewFkLc8trJc5CS6rnH5hz6FZnXcNqPDnFtvZmW8rviD2JkrViWm2YyP4eZ2uUjM2XC",
  "key21": "4oYnBwGrpGC89HocNGdSRa2HRo3JRYVdb7QbTHsexJJG2Z2b6CkDfYef7mmf4MAmvU2YvCjVVv3RE9djvivBnJyj",
  "key22": "3gStkqUuz5RsvESobWWEPW5u8wBHfVc3cc6bCwfogcp6Q5xuk6CoP5Jj7YFunzfsBy5Dm9K9oi6qVNmunYCrtLPm",
  "key23": "3mukFDRGAZfhruWCWW4vaZefu474yXHsa7PkAqjdKEfJdFY1eyinZreD9WWnTUetvpshTrvLt4BvdeoTmXSTkcWX",
  "key24": "3npYdMCMnQW4z4on6SmJpxz2JNyLXVPVewuXvfjupoBeSyGidp6hYyizHAKAp2uyks8wECEwvcVDQPBUg1LqHUaY",
  "key25": "2dVt5j31ZdxHBrN67mkwAD6e9xDTEiqmA8GCJSaS5xmoP5x2HYpEUV8go3dvbmw6Byqd1hQXT8DQjNt3s9xsdrn6",
  "key26": "5V41ofzDD4WjGWE3B62t7vf3EB5GRzBBfGR9JQH21eCCDPwJxCXxdtpi9L6MhNKisVTGvL33koMJLTryjAJgZvdw",
  "key27": "2TokTHSazvmvi1Dmg7i734mwUrbJeQVkTuSCN9tkgJArBwBvexxxjUPiecr4MCJ8gAsMfVoXpezCtqM4JZo73q6T",
  "key28": "5LkPbCCYNuM7Wg2aqPZsZV2FMXJ4Q6gyNa2ZWYWmyYVBpJTYaMm79C8S69AzKaKbKUhmneE7yWyAQ2YQjYn5tkw4",
  "key29": "41uSGx7r4jecuSm8YWzJJ7ZXBUgGf7UeScG9ZypWEjYeEht4qVGXtTEi9zAqBGN3kAfwt2XfUuGuCk6rg9AhF4Nd",
  "key30": "3DkqoiL1mAtByNbkaKDRM674KncCcJkiuuFarAdcABXNedFvZ8iDQMcZsubAdGCshrJzcH6QPVktreg99Cnr2mFv",
  "key31": "J1RDbnkPXamPEzKiLhFvzPbwBGu1ML3C7iNRaNsL5YjbuCMVQQKSQLa9oeF2p6KRBnajkqXG9pKBXqgQUKoR6mm",
  "key32": "FsiAZ182uxUDhAYPZnK6EGMbDQtSejcHCNvwDRfUoao8yzgcxQK973DTW5pnNmymHHneHdHczfX6aPmhcvU1DhV",
  "key33": "4LBVaQs5oJbs6sxbSVGmv6RvD93UTY1X8qNn3NiCFLHKpoVcfEKV9Rj3TtfUFiuKcX1BchQZ5Eqkv7S3vPeN3vnz",
  "key34": "5UbScDu8gey6ciryoUtV3qhPZhb29ytEj562wBjTD5UbKkQkAxqqE2gC3t7PoSvvV9kfP23H4XdnjsknaXXzhQgh",
  "key35": "23tRTWSY8kz4gQ8Q3YjTdBFHtrWXxwG2WLfisLd4cHWNz6uL6PQHoSyCFwXKsEV4FVL6ry6KL3ThKzN3k7ULPuAZ",
  "key36": "5m727Mtynghkg2J1wwgZZCBLT3Yp6TJ5WeposNoewkjrxnae7HxygxdYugNXuoaZyCBb6zAaZc2nLDEk59gqKdxN",
  "key37": "3LNyuakJ9HUdmscxNEWnEZ5nNa6V7X5Kry6QY6UpnXWrQKJBWL3Cj8cCBDuWwa1cDpJGhg2rhvS8kLPAJLHvGn8n",
  "key38": "3qgcwiaAFKRAqnE5c1GZaxUNQGrbog8mQzjNZ4sqfXHZ5GBxRP42ZRdVYLQXo7dgHm8CxcE8sdPSdwgsTQ5WMGEX",
  "key39": "2ESWguRU3WEBCUXyuPc1p52gzpZLQkJjfaTvupvb2j8oPRc4MbVi6C3c51iSyuiEHkVZtjHxeqXfMKarknx1k7aC",
  "key40": "E2Vk4CeszbggWjmWburhYvbQ2A1TgeYzupMBTXjUYqA9MQZQcmoSxJosJ96N3D737n16LowBRH3SHeGJdfFq7dR",
  "key41": "3hVeqEBCVrN3BAbf6ahUNsUSaUE4CmhYUvEN4Dq7b4gJ9P9oue3uTBxDPB7hDL4Yu7QSRBUjDaKox6JUC2RDNkzy",
  "key42": "5zLy59Lo7vLXN3C6SMUus9TTDivH4igkSt4BG5F9F8JLpNRtZdZjPx4sD4GFLYVKZyPA216XM2SqRxA1j7nULLo2",
  "key43": "F6qSdsRnvtpPPvnJAokkCdRiZLZfdie8UUf7xDXw6PNJ1e7jpYCzbtyoH7Y672Za9m6gTysZ46dwioQUT7YL4sB"
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
