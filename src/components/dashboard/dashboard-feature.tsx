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
    "3t8fsFuoiFscEkjZZmNmRY2NMtERmdXQbPPVBZnTed2TaDP2n14eHXGgB4ov2sgUipZiaKooAr3N2e42NyB3K5jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Q5EFszULT31fFQRbqoZLycTicqHBDsVfgeuSzJ8f9MNdQGDgkdUzHpCrw39Ev3woFKP5YPw1HAvCHK5ZeusyFp",
  "key1": "2ZNLVmr1WkA9ifdqNfsFNyTwtimrjSrjR98LsNu9A2cjrFZpPsixqy1RKcTiZe7VoajqaYMi2TUYQFuA9m7FJpVA",
  "key2": "61g3mqGw5t4f3jsGAq7nxLP2Y3YapufUz4MDH7gTH4RrvMry4ahhrKh9gr9q6Xu6xszDLsUtjoZjkb5Lmt6mSVqa",
  "key3": "2NL5C5W9ZwgBijpUnDWCbgSW6vGstAozjXxgzjDUWN2FxvAbC3vMncQTgfxWUuqsUkRJSwA5ttTsB2CmSPYLR3sE",
  "key4": "3nq1pjiC6BJgfXNJctcN5QMtRDnNzofF8s4oaDbU76p2kJmyYpTWGNS2kzrqDh62aN6CdN35cVdC43nGdaQzGaHe",
  "key5": "rGozUFvoMjrxWAiFZprdMWXNXPiK3ftbFe3636vqjc4VDNe1Vk5Bk4ov42fdrjggdQyCf191mSeZzVhCB3E6NSa",
  "key6": "4aW1Bo282S6yWzc6EAQyP2EvtpvxdKUJW1amjCzNJie3QUdfovDWPvbjxVPjVf61jGzD7DM6F1ZaLk7xQrFR4f8c",
  "key7": "5NeDyowkqiJMRpyTUFFCG7z5QAJN55tYaE9PGgtokp4FmBYuMb4bpqzWEFodmHQ5WnVe2ZBCGP6x9bwytTvS7h9N",
  "key8": "4sYTnAEsb7rMjGxb8Z4sNTuUtWxiH6ZWkaYKJukhornKHRu5yW2vDHuuKDYRRNCnJjKkHLS31sPsJCdxRznpi7Pg",
  "key9": "5DS4KUZvrikEdFoD3SND4DMvkBvXzWsYfVfx52UFsZCCmDhocQFK36BFqhKHBNoxqrRKW9qbFYUBydV7Dfp1w9wB",
  "key10": "3Cky1s4TPgA2pt4UR3aXePLGuHBqFKwHw2dA5uf9FXKxpP3mFELhqL2D3bffwstARWYmkSAjPJKLhoxZWo8252F2",
  "key11": "5covxThq3vSQHvgU9EzRGpAoivYJkxfTWKbBNMn2Q3JAaxSVQHeGV2n2YXTY5wFdbduZ6BrJ2MPHK9bBLK1FTMZz",
  "key12": "3kWtLKUJpb6iesrNYdhBqChGx8tVZHB8qZGtU3D77D6r6UhW8kwcEyC7CTaG9tvHevw8VvfMub6qEpgxaA9UT3pq",
  "key13": "5aPbzGp1jNctNPk4yXf2FhuoTj6ZjJn5szRho6rZNX6GunQZ2LhWMfLZnC1295YekyxnXrhs3GbC59tmKJBjFRHj",
  "key14": "5y1LaX72HW5SdAw2TMnW6JYADAvDynkMhTfVciWBkT9aHihzpap3xzqdqND4iGxHHqHeR5GvwiUQYtf5WMzNfcvy",
  "key15": "HjwSdvBKDK34suCvpmp1eytm4xMvAgPX4uLT1fu8iNPPJ2CqTBVnJSkiXck5B1jW1YMwPsiRwkVQfzon2YXpw43",
  "key16": "4MBJJTz2YM3XptjHM2VpBK3VSgnZdMSxuCQbQVokW5mBdjygutEmRC8gpcwSm6hbFas9SPuPhbDozCVorUkHpYvn",
  "key17": "4u5jHXcUZjwW2yHNAmxYcste9FG6aX3WaRBnnwy4fe3E6tr6W4qaXzv7wHAZJeyyCsQJDx7pL8zywnfQB9w4SiaC",
  "key18": "382ygpr29bn8S1sCAjb3j1H5PmJjUCdUN6rfJWXtu6W8b68YBtQNMZ8i52ecntL62QgufsFnF7rh57GLQJF5DJPt",
  "key19": "2UkDDuWGq2jrSwDWJQX6EpyZAtLNWCQEPh527cETcv2M23dz9dXg99QWrTSRsN55UjDb1f8xkMiLXSH4nhMXhRRD",
  "key20": "427nKezLZK2pTUmrvXdHZYbwNJNy6WNj9A2rCrh6GrLyNTkzgvMm6tH29BUrb4jVRnAJgAbPaAqJTXYoHHmFydRg",
  "key21": "3qwG3NSss65tGsLjrEVPtr8dZp3CtSC9gyRUs2fXgjmZhjYWsPVhGBsnXEGbYJjCZiuRHkEVkkEpKcJdtE9mCEFk",
  "key22": "4XGihtAYCGf3QNSMZFwFSQWo4JefWtm3xKDQe7wwnUT5k4w5s52WpE5gTNApNruwHTskJeZorTxzPPomJ4bYvA2C",
  "key23": "3CChVAtjdmz5rw5t95XWoMnGKGeYbHW4Qqdqu33accNXJVjRDSfjbRs2JJDKuYMA2FnybtdVQPxLVvYaBMSReEux",
  "key24": "2GJ1WrQGJucPyc7y1NK96EexgPrEQS9GmGava5RL6Mrod4aLbEg8nA5UCP1ddSDzc8JPVMgsKHqAcBmitf31k1zd",
  "key25": "3B9F8T4Q7gC32C7yGGNnZar4WFd6b1AzT3JzZjXYHa7TyPEZMAb4M3VJ8Pg9g9a7sXQwfqA4JMiHyZRa4Po7rDJ5",
  "key26": "5C3qziv8wPpi23MNtyFNkj3C5gSuHKvjjt8Bwsah2ZAegjza9fWb1r5iBJVV8fX7U4ioKbmGFshxc9CuoL6exo8S",
  "key27": "2Vd2tvaTAeELW2Tnt58JxraQT2Gp5oAMsgPRvrd22osUHPxPQuL1kkNiwjUtyN7W4vyD925jQzeq2bgbruBbZakA",
  "key28": "2KG2ugGg7d4FiDoLKpkcmGqimvj4qBNVTG7YdLy9hRUdSKA7WPkRgHG2QWPZ3QsktRwo99NwMnJtLKf2bBrq7mVo",
  "key29": "4wtwTugEtFndG974VaCszzp7ASwJGwjeroj3da6KqZaUbqoUQdSmp35a4k8gxspoQWfEYQebcEQsdSy8zEPzXZVH",
  "key30": "v2iDQjVaLqF58x4bEqbCy3ULTqa6Yd8evdANXc4oN2GKp8JKLxUurivn14gEorcSHkG73h8PfwhXhn6ZkkjFnsu",
  "key31": "5fgmP6L9kBsaHUHMW17R8VssYGCFhxRToqYWKZKC8fPAXDYZENYA4mxjd6hhEkiEfvxL1NCNZ2zjEMbS1nz5qP4F",
  "key32": "hhQg8WgUPSaNffsB4VbETVnHGFH2fcBvPsDvrLKgi3sj688696hHBdosV5BjLaP13XpuzUFigYq7DJUuDUaNh4S",
  "key33": "5UhEHwMbXXrwLKtXimV9aURP9b959wgWVAJKhi7cGivtp8tqMXzV4CYF9JfYfPSLJjPZXRDv7RyAHr7N3nCh7ePb",
  "key34": "3YY6CiUQYxX8QfPFuFHbCVqhfqY4Dy4ZN4C7XK8Wz5s4ZwyUAMQJwtKtnj255FkSyjUBH93ECd3wYTvLPLcYU4s8",
  "key35": "5sT6D1AvsYkbsnGeB45xRGzwd9s645dFmRDWX9eid2r7TgSYJ6JEByPVTmwahhpEzVzugYfx2RwSSRUMyLEHzcxL"
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
