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
    "5ovT7PECbgkTM621Kw4dD335SfxRSCaH5AAhwLW9EoMeenjbxfKQrCqmCpR3ykv2Y8GKbu8mG3WFTVbZzRab7A5F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJxX4cbChD3LGBwDbsGiDjBig7FStDTGGt2FWvCNxUpKNSaPGGHgpVeEZ6EGSKVb9rbhvKRuqPPnQLRatRwmBnZ",
  "key1": "5zKGZL9rJeaFN9jLXcUUkvqkaGxJ3JWoJHArkr659QJi3uACZ9ryjnw6PTRBZpTuMasjjCfjb6r4h9EmEapbNkZs",
  "key2": "Mupi9YPwpoQdynpuDtovKqzfRwG8taYwjuFtHM4XVMLzPdCj1sEXVZstVy5kZaTYJmb322rXmZUvXBLySkqapLv",
  "key3": "RGx4bTmnvfbSi9JkwMa1ysWRBetUxe3bF1381669zMhFCxQZtRf8iXVxK6z9azb9YyydYHaMWiGeFZvFc1pqfAN",
  "key4": "2juasJF5nw57wZeQwKB3rSTAg1vFtEKQCnCAmdkCsyVyKvGU6EcfyHoAnMEmuzhoJTkz25LJRnwsqhEVw7ZkNTVT",
  "key5": "ynyxxbnkD3XErBZZqkuDwbgqpSa9hrzMxYQS79kxQQoWXmaR5QhAWvNLuirsVxxt6PGSViZo4DW8GVBE7rVfaBv",
  "key6": "3LaeJUhxazLXW5VtWVJZDanTkvHNEtmo4yWv3pGJNattGVCAeDyw5Uc5o4CPVWYU5qZLhmUAovhx2mMNALb8PzxT",
  "key7": "936pZsEQeRG299beEB6svxokNHBFHWzBNvKjkWYtDTVC6M73E1s7iSYYFimRMtRzQAVtNEef21N8mUGgUTWmv2g",
  "key8": "4CvMNobq9s4qHTS12ieRw6JnPMsHXMysUsYektpW1tJUmWBRuirLRm7rDKvEW1BuwRpzKrFqqHTo6qLnAT9YxUwP",
  "key9": "3aWZWp6Az8hz3rGrbZD15UkDUq1vxssBb88br1PTBjVWGPsp765vinmwtp2CjT7zc37ZnzgEWPSHnmh8EWkj3M2N",
  "key10": "Ete4qGGSDjaaPqa5Zexew2Ady6jys537rykmWuZL1ri6ARcEZ8eXon3dvCTvx6Zg8oQQKy6hb2R1NJUDJ4gxGpK",
  "key11": "6CtQH26hxsmreukbAod5YAsKKBTHRhG2b9xfk3gbae6QKqZoxu3hKCwmJLeqNe7oQSQotgT2HbpQABbpV7bnT24",
  "key12": "2gXUcP99VjPwfXkYWpruTkFxWmFbUQHHiN2gXtuxPpa637P38Qx1N15Qo97yWaKQnREdyjqduehhDiWSL13bGPTE",
  "key13": "57MPr5hMirbggbLnm8nAbaLmx2v6Ny9RJ9dZ44JgKXaiMuuH2cS8pWCBFXDa5pJt5vvrB1iNA384Vwh4XXksD9br",
  "key14": "qjD1PCoheudwkPcAhS9QXxn5MVkkTjX9rShXRzjrXXi4eiwJJqT1RFtquZB9pj4VexxhU45sHajoXyETDzeLhsR",
  "key15": "FGjgTN9PEP412GcXP49VXhVgZTAESv1dtKJL1beaSdezuHCkPRUPY3zsU7ERfSjjewnHb2MjeR6JLhXngje2nt1",
  "key16": "4KwnFwDhE9B48G8XbyC9g3d67Rxwm7KwgfrCnQuXxLmKn5v8uUTNwHLZHhf7EAuHf5VbjnqwDLjtMnDXYLFieMhD",
  "key17": "4cpLLDvpLziu1tnxEZ9G39pSedKLCo6CuM4Lh5scVxDrZLpknkg4fvSPRdBXT3UGNyEwC9oEbvANsks28Rvf5Fj5",
  "key18": "P65zF5r5LhYRjmFaX7C8RZ1XYwPNsZAHSPRs2bGvqWn6iDbKeFW1yBHkrBhdkmAUnymf1zpmJ2p1tSwjoMeQA3M",
  "key19": "2g9JcLBWMpLSuLfn5iTHPZWhWHCN2F7rF1Mq12fCJrP844iVkhXGu7rb29wkgTFw5JqMfvkG7iEJJR8TjGisPXHD",
  "key20": "3x4cycekdcYiE9UJh6jwk8Ww2uXHupoGBBKU4AfeQqEyuDv8HpVM5uAnXQ9tjKTasqk58dBTEEKoqSF1gzz6bs3f",
  "key21": "2ZSCL2JbV2c1LrV1Mg2yBnBbnXphKjVZD3ZXYwDZZmtt6NaYRoUeoFZu6J79G9LatTLmBQ84wLBLZk9Yx1UzVkSn",
  "key22": "5i8CS155Rn4jQ4XxdNe7mbFSfYEoLEVjAiwvwkv3WmaqjDsBUxYPfbLUznkQCqWrbAZZXLYXuXntGacFRUtzkg6p",
  "key23": "3iLP9SqFUVEdtZMDyC1XPBqRNKaZDQiUwMWevE8o64J7koK1LchFotXCBUjA32SurAKAwm3PonEFf1BFJrT7WmZT",
  "key24": "5EmBsVMqd1PXt9vgUptHkNhaKdN2Sw64UiH8homPPW5RstPhcctH7so5wt1LaswYD2LNeUu45xH9pHjrLRJphVwG",
  "key25": "4KAH9na9bYRiZrpXicbw4DJchMa64KsjfkuqhnPVkWGvVniLfCx5zbEMmYKy7zNLHLwah4pRBpcDvH3DRgiPmF29",
  "key26": "5tsYBydSgsRqr9bPMAUKiU4rUdiGLqD5yDbxBwQ8hScpj76DyMVa5qcryechSfXfXogsiLDTkAHahUUULT7AC7fk",
  "key27": "2sXWjsg8mGebGKv5xZtyNbwzHPuJb2VVBrj3Nkg5ck9GeFchkT7GygmQTogXUj3j6b5YysMcerWEWCxxNgxfdQUg",
  "key28": "sDEzdCNNTMLPxLuPhjXFPvYbeRpWnaj3ongoA8mFvrNYBMeAaCLEF1SG5QrDazeMYeM8DnZUcG8qkYupRd19ZH7",
  "key29": "4B8mCjEmUiQ5RioPY7tUfyR25WZdnqJ18X9t7E5S8YHMq73ZmgVtrA5xNJLV9wLx1GWAzSWoWbD1fjEVVJQ63HYL",
  "key30": "4S7SS4EUePCiTZEVTt7cRRhSSJwEmL3oWS55NGv1RvuGmcAZAVt2EQSQYVb7Ndu781KYZQcknYYfyRDH8EKCyzss",
  "key31": "5jQYjALnwaYhfxQPJrGwHzVAQDmiZsSiiQRW85pW5YS9yupoCbU7y13G64Nug1jdjLLNJyDcPYSEtprfweGA5wsv",
  "key32": "3D7iJtQyq8u5AcuwQapJX5AQgyj29qgkTwF3YzfH1goJNQznWYPWsxg3PZ8ETkC2ePVabYd1KzNYZn13pCN8X2rD",
  "key33": "1rrbPR7W8hiEPLgvLAhquxkZS6pRo2cUrK6JnaRq2NKi3SDDobQsyubRZssLQEzxmmSnAm3FA46aYXAbjA4U1t",
  "key34": "2H4YaELWJRZVVLBZS9bz6JZrUVhLSDRyAzAThTBUrYUAjwYVsSMtWKdJRmRPCWaiLGiXG5uyPQoWwPpcTWjmUQDA",
  "key35": "3kaCH5X2S1UcAeQRN2AC9WMp887SQnrdUt6QBoLPpsPu2HZka6LzANro2B3Uk9VERtefS9m14k8wiGULqSsgVLVo",
  "key36": "2JahkXqR2PmWgcRQjAURoe1k3eJ1VJPStimo67Vu8eSuQtJ3uJK9juvUGbWY5ZBLXGoXtHrMux8CsNYyouRfkHnD",
  "key37": "249iUspuPPoziv7P7nrj5MFo5hfdkiKbyrc9QaoRb85DqgDAqZT7uzHzLWYwZmhKxNniymJ2C2mh9AfCKQTvEyY6",
  "key38": "3em4gyGLQ5C8hDrNo2Ab76veLHzQRAqK1nv4CY4AyDocWmPoEuUKWNWfFGb5QAM9hgcBZSj4w4eekybTR4otnJrN",
  "key39": "2dkgBo9Sjd9qMB6uSt1E881sKjusdEcNAExoGwrg3zwHZBCh55MQfjf62rgnnQous2jpNWihAuH4uH4ynQrjKtwX",
  "key40": "MqyEuJsLYjsiHdRQ7cyv2zhYDmWdcTWcoPCtfVVQzanyKmkRYuWEcZwPYtcBsSveeS26Hff5Amh9ssTMVYuumae",
  "key41": "GZCMPJvb1ov2sWrt2g7TK9c3y41fHqrv9QWC9Y7kNtnGQAC7BtRVsokRTA5DL7nxjf2q1Qt7dCucmR99rsb2xWc",
  "key42": "44MmKPZNL3N57o2oTFLBDP7pQnGy38BkugbtraqEoLQBGvPRzhMPZvnHQZA5f1kNdUwgvDwqaRYAQ23rTyN3Ta64",
  "key43": "4ouYGKP6Y1rGEAxj6oXujw9wrbZ78ij3Dq7zXHk7Vt2M2MYaBGFapNHXetJWWEdMKqzSxAeiJn68nYx2Ded7R5xS",
  "key44": "3C3tixiLJXBcKnP9i2AvHRVkqzgNCrcXGPQo56FXyykK8A4bmxoRKFUgfEz68Yarfg3TusMHRfPTBzjkYcRWaZkp"
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
