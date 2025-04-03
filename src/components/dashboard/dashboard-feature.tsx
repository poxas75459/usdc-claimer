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
    "5432rWoFUeQ26ginJu5iDqsaET7LWacePGwMkiv5QJM8qwtsQX4jxyF39xKS79fKbmU49piFVsVg3fQJ1U2fCFom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51bgY1XjJeSxVow2wssw6dATnWBMR5iaHxWp5GPN9i4x8UPvBjryjJj9Ynsb9BPoXuYoao6FDAYwGEpD7ovyKg4P",
  "key1": "2ymHMVYex6rtd19gd7S6bUPzzdV4FRQotui98pkk26oRNhuFKWS4wTbZn7wWvAeVsowmkrKLXH8xJVeTqkFZciN5",
  "key2": "2Hs8h1xKqeNycxcw85UvB8PiGg579YxVBMjM66FLmrYdW7mgFHDCzP7fNVk9shrJSEPNLuoCgsZ4nNE9aTcjH8dY",
  "key3": "2degpwM2nu5jjTyZ1vj46v7QktKn4wqTDYQFATGKSqrbBaSGpWPDz2evWaxVAnAsCkCXLTqfAzxLyL8vtKjoVnjb",
  "key4": "PgjU3R75s1m4rq3y7FTYVYLok1evitzv1JRAxByWixTpMtSX8bgfWT4egrRhReeDaQeavGC39Qxizwr13apMGgi",
  "key5": "iGLgRKPn7fEtRR9sTnRRgw5R2nZgi7YSgRo2NyQKYrPVVyL4W6Aov2jdzVu4wLNQaebPFda9VigxtV2fLrajDcE",
  "key6": "3hz72B4VRt8StqPEWUjKUu567pk6i1YYb3a1T7KjR9iwVQ19Vq32cCUudnUKeNWGxFVpHwBu2Ro2VfNGowP7NpDk",
  "key7": "56Hc7XaRL8o8tDzPe8fLUibYMsj8XZCLu6Vz6dKFmq7MS4YRmGeXmDHGNUdNDSBKuwsgorJTCNHzCAHhPS2FLJFF",
  "key8": "5kaRWnKYAhwtbcrDiDiU2Whqnf1vgu82yQdFQ8JLQ3sGVVrEQgqyL39hdTxAHCKwFsGGJQNrCLLpnhJiYcLHahSL",
  "key9": "4a8yEcsMbYMkEiK2RvDFnZgcLxEhLsRbo8bY9R9oCWL8ket4SsTiwuhWahyZbfYXqEfB8kMeAKC9H3xhJm5YaMWk",
  "key10": "3NvPFjvAW719G89pBv2WsKfRNUdzBTPMtQ69jj6Q4cyinUcgYRsaEoG95Mz3AeWbzGYtUB8mgMq25enDdABzaBvt",
  "key11": "3yfYPC4ivZUuHiG98CBJgUz5jE9gGoGwBXnoe1PYx9DHcH3eFyLHykuymjd55sZa7he3ne2oLBbY8y1Wkdxs4vxM",
  "key12": "UFjD1xCC3qqdJwgyNmpJsbaxURdaNTrDJ3V8neAM45Xt7CR9RLREBMsHsG4EGY1NhebDzFNENG4Zo68Gght8ree",
  "key13": "2psvUPA1MNZukpySroUTHq41LDsDSysFmmvCRQo4AdYHn1JDrgUd2XuVKoqT7z9kbQPm6GiJLhqQbz7pGXa92PMa",
  "key14": "3HpmvP4YCFGzPa6ovxhPCFELW236SnvjJsAx9vgMCD8Me1yxb8JapmRXmPUKnC1oZmWCUdjMAWDq1EWacHjzBtLp",
  "key15": "7cDBNfgnKB95yFWWNsUfT49n2LrHVN7Y8KbgbZ5p864GcxvvvT8CvfKPJXs9S4RZfoseS2hGNN2cCnThGvXNgXj",
  "key16": "5d6bgpe8DMgtSqbcHHTK2NQw7xju8Q8V6WcWCBKbHECP5nGCgY95WmmXLDWxnEtPG16N4yGcUfo7dKDWBt7L7p1G",
  "key17": "4HajjSEks4vVMnvTPnYqgtH1EEABedaVuhTykd85PKS7igUXurB7712t1SQMMtZxzm6XFTJHd9ZWP9VV1fF8G44X",
  "key18": "4REg4HqPCPBgnACzfite5GdoUvfssMK4NXRUVB9TZ36qLDeR9mudM4hMKp1qTKLE51PVn6Egs5gRC76q5Vx9tfqi",
  "key19": "4Zod715NqK3tv5ToRN7DQEgmEppoDvzpyPGCJfsGQxXz1UbMDWV7mUrcCytgEudBeKdbqMudt3vvAWnL3ibcP4Hp",
  "key20": "5L2LswyqH2DLLsfc7gRJH5MADxfAugLSWB6Fakkt5XpjwFwidWGnhG9eek4AyKbaseRJ6uzoBJvPxa4GNPsS99Uc",
  "key21": "nkLUJoJca4NgU1kJTcajyHVKmKnJjWTXqmV8NzhWmSkRRitKuifczDThXNF8wZv1LXgbheTsGVSLAkJUsWN3nzb",
  "key22": "5Kn7KNRXmRzmoaTsca1jD9aabs4TKqUzRdKWzF4p7ZSqk1CeiNxxSUDgWLq1Ftrq4UPumC8D9janDmsARFyhWPDa",
  "key23": "2rekoa7ZDQXpSmwpovCb3hK686zrumsa2WKBZeWWY9Jqqb7UyqF1NiSjbMurnwAt6z6rCdvMmnNseJ5daVqkoE74",
  "key24": "24krw3nYLaeQTmew1rxPzuT81cXXreiyfb8pLGWDY7g9pcsBQFfzT4pCpa4MoybMgKLGZfGJSxWUs79eRw7jf98X",
  "key25": "3NBRVhaKMjLNQaQyxnatKzAB3P3v67vtbjRkgWbm1wkqEjwk36EF5Jry1HiBM2QVSQvQTgJGWh52RtqWxdjWJYUD",
  "key26": "53g2ytYDFrtSQtXZbYK6FRSyK3DTKjs8Cn12w8Te7qt6GGA5NWZsHt9GN3sauCEXLvvHfmDsbupmtVUNhEUgqer4",
  "key27": "XZ4aGZbjqsw1MfJU98cvW8XjZf9dezFC7JocfxemeswdRJAMuDmi6RCd6FeB73uymQLDDqGJhUAGe4S2MFgmXes",
  "key28": "2uoitucshzG6eq2mREkrExUMj75SX4LPCJhrMPxBU3VKpRDVu2RUYYeHepxf8mcJULhxhQmJRVXXPUFehyegXgXr",
  "key29": "nyQdRVUKq2wMASyUArgPTfMj29ry5J8jGUJVSXa9qQQ6DWVZNzDYZ5ZPceL1ZWmR1iG3BXnAduTEdT1LfB9hRh9",
  "key30": "5X6GyMqUJpGxKiGTZf9dhEKkBJJQWyFJSFnCRmNT6RQnPEdwAddomZLgkYDdCGdzLm79hdqdxirFtiTNoAfNCwCY",
  "key31": "5YLrZFJXvYQGq5hvn8tfaNFTazNK3ntzRqma2qZCNjQNtCTy6LZ4y8YQdwuRvjUeHXj2iiW5kZWAFc19xPy3Vn4J",
  "key32": "VEobbxLygPv14oT7wesUpv5hP2RckcqWBJctd6TCx8WTpyVjXs4DLeck9JbQ6FzG3q7XEHDERpF7KKHFQDP9wYX",
  "key33": "BQPgivEiyyNwG6pVpUacDKfYLD5uBY9fnRQytwyRmrKbd6ooEfjxcVKpQ6xWezCuXWgxFZEwU6roACmfEyqykfp",
  "key34": "2v9859qYdnBzKzv9vttK75YmFKqGGaNmbDAajyiBKXbJYzm3J73L4H4LvabjjfZno6J2Ck7ch3G7ZWaGvarUcMSW",
  "key35": "9KnZ9dbsadSBVioqGP4Eg8pb7QvP1jLXEwF5k9FWmQkhqZ8ZUKjuaRSPnujwUU1haTWq6a4bXB1WPMhRNBnauh7"
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
