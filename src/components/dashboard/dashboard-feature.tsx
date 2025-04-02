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
    "akdmidzz5Em5NFK3uA7eA4GpnFCqNd73VLRmxHm3VETSGQG2r7yvJv5E5HfGo4c5aEqMo3CPVTyVwrnD5XDNaB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39k3dqZ2Hf1QbVDBg8bJaoUfhggynahdzM2WtKLKmK7eqqGnAUWK6C4b48A2LBzqLCfax7EsA51yifHrWvi61qHH",
  "key1": "48LQTC9gQHpwF9yq8caB11vgrNMohRV384F8pxt6eQtruWZeK9RHTgwkCdkpzJokf5GMszRcQKKFTgqTgT882YZd",
  "key2": "2EWnYNQjRLArnM9wQBd2je44dwhz7eCuHLw3pDLxS1qoKJf9zcUrtjAdRns8JovLkdznXfkvQcqe1QtVVQTDpyr5",
  "key3": "5yeHVpzDYRRswxnNEbK8uRn6L3hjtFgvutrjcKBckNwz63XSFFTriBEBfxoTZHQNf4WWg745dnPkZKEnBV1LMoea",
  "key4": "2aiyzL2Lhd5CcvRg6RL8Fun5SzuPDxLJtx2b3VQsD4oH9qqHxup2Zsv29QHsSxSvX29362wvWX1wvfVDS8YcTZHL",
  "key5": "3Vk2fx9dSwfi9ZKkjGnQuvbkA6iU4Lp9WiRL4sQA2sWgHeWQYrkfAjrM75U6aLs1CZyrKMVBrZPNUfxJhAZEoGHQ",
  "key6": "4NVFkpRJJzjWwGa2rovfji9aoWvB4iCANtwAreBxbesscoQeA6kh3aXDVVxMVeLHbP5xWAk3fcTQ4FCLk3ynp6d6",
  "key7": "2nx9CPPrUyrPJ6JahKCbC4ktjMgh71AuobeZu8aiwrS7n3X3U3AoR69oLTizfEordo8v7ePvcdT3UGSAMA7a11tF",
  "key8": "3wFw2SJVLVVE3jyPg1CUA4WaQoZpEpJwArs5uDqdVAU6GQ9kJzafctrLAvowtpJ6cyN4PCZXxwXTcaBk11PJ5tMT",
  "key9": "4s83W7p285XgrmKpEBnRkDTVexZ5ovVEdc14kv6gvqbAAMrURFt3jztz8NXRiDqDxsebrLke7BuZwF84QvVyvG4z",
  "key10": "4d73qUYRCaXo1jsQaM92h3VaW3NgA6Vpi7MLfha6oTRfs4UsviTk2DePME3M7vdq6pGakEZvT5GLxbYy5LpsxUoe",
  "key11": "E5HWNY3Abz9hJj4ggee7r8bMdu3CCuDWHtaihganawb3GL8W7tXhNtJ2BRAm8uTtMNnZb4zKEmbWgLNcywD1K7b",
  "key12": "3ZoYmWnKSL4jgnZHv5iAu1hHrmYCzyPJp4UseLDuduKQxRHSRzGfdxwtt6oW6btQxrZgMLLk6ci7gaXS6Fi8qzhQ",
  "key13": "mK1yM26JYJghsJuqbUurZ8VzELtsXACH7bH9N5aZ9GZ3LY3UhyptoPQVZwwx5XtdZzRr88YqE6z5sNFgZezKcr2",
  "key14": "2huwE2hVsz3cxkomZyNBp5TYbqfVtcwt7q3FrpPs6sp1Qr82AwMKfJNh8CdVFSx5C6phg3HZodoTEVCUoHuoFLrk",
  "key15": "2dWorQ6nUYJyuZkMAc28TwwYp68rNdDH8rga8UTPFbEEL2pRXQEStMp7etarMQnZdY85UhkEiT6nRoq9tnDqfAwf",
  "key16": "2bxmstM1EQRjWps2A4WoTZ7mNnFJ529k1pFuCbZ6NJxv1SRxJtqj1gcfMTXyuh5G6p2GkTcGHMC4pabatXkktoyu",
  "key17": "4cPNT76pUu8JjNddmL5dMM5QSWb4dfAaF9pBdZbrhmVfsbfvHQGahBFrFzyeD51FK3gmrnv2M4o6RuSY5w9112dF",
  "key18": "2jswVJMkZfWNJW2A1xiSJTeNkCsodmQ153LojM5jbVDJmFpDA6G43Kym4mmKso8U3ibCMDTPboV5JLYe7TwyetZT",
  "key19": "5aL87ZvMx3EqxR1PTdbHZrh2UqenzC2zib3KK8CSfw49VTtaHYDcKX95gEfLuWijj9znaZ5rdwRvK6FAGyPmQXmX",
  "key20": "21fkjJPydDLsc3JEF1waRzqYKbDiFCTChCTyTyZeZXxMETmSYLiDEfsnX3Eu919kuxmV2JAMn5YN5Bf9GH8szYCH",
  "key21": "krQS58SL1WcZYcXqumkooGiYTwJt6B48ez8nGRby7WrRbTjA2MfgqRwvyK29L5B68muXiTQVCysGwCBYieTLfj7",
  "key22": "VcPLpeLTGooqSibFFyAj7DG9pGBXoXFhTATXXw1Y13SfpyduzXLJ9uTCcBEjUTiTJ2z61H8FFpajVErkcHhD4BV",
  "key23": "28xYcXtS3yb1WfRy8hAAgMiCvwrLg56ExtTveoByw9mSsTZJseKhHiQgLS7TY8cfha2141RK7sb5Qe54ekJatzaV",
  "key24": "3FkV81dLnBRTwLpVWociZWFGRbLfDLSUzgXk511rUUS8XMrHnLf8FCZZ2UZQ6y8mZBMX26mwKJN99z3qwn7kw8am",
  "key25": "2aUcUUT78y3CjjGDvk4CaAqfBNqqNCyEdiKZjiNSKhaqqWK96pndetNgmrec2ig61hjRyq4qxUaUMF8hAg24A6bh",
  "key26": "3BVzUs82xbo91tMLfViTjyKTeBp582gmEbDJjja7sGLoCjwhHtT3J28gZbkcyADjJAtdVYU5yWML1n7xCpGc3J3z",
  "key27": "4jdGaynrLvJBM4Rhp6x4ffwYtj3aKRzWJ7697cnhhe7kaJiC7vAUiYZy9GLKa9tohVG9Jz572psxsP8RKyKRKctg",
  "key28": "2Asbo8wVLFtYj6KNcdZNja8tcqjYLFrvzaSNd4AfAS7xTMqqYd1qJ9BAib6U74rr1hBftvBBA9q9fD6XS8csRDCP",
  "key29": "3Ke3cn2H9SZUShLmFq7xGa5Ci9XaTTLnjc9b3ZsC5B6eq4BDpYHpdfrKn7aQ3wUUBfphiqdcGLWKA71aPPtoNpAo",
  "key30": "ab2HhSf6RBJcdq8AtHckLuXFPThkP11FMi2SqE2rgcv3QwNu7DfpmXB8GmHhUX1QzHwHhoS1fimPqJVugTTXR7t",
  "key31": "4EqGSD9zYiSWnEtj5G83sRXuLhsd7L93dxrVR5bLrxeuTLEXXCDZfkbPSSJtVfNvVK5J8gyspFyQzZZzkgjYoBGw",
  "key32": "4Hkw31B7S3FateUwcCGKtajHd15z43jv7TFdAUJL6MiZLHUHQNT9LVzC2PFRpftoTYtys5WHn3xYHXriL7KtoPNP"
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
