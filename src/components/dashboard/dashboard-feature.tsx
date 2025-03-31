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
    "4NP6ZdJrdtASNWzv85Q5WU6EwF8QvAgXFccCSx4fCELaCxx88QjEg7oRdFZFWSMWhWQ1kgtBiXQfcUABMUGgrrRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cZEJTN3Q22CEdHHiPBx9ts3QZEfae7fucMNZd15Pvmz1vUCYXojeifrVNpojNpueFFK1XCkhUSXgTVNrssyo6pu",
  "key1": "5YaiscsYKoxmAEovfARKQscTw1PQ8ykVipMgS4cuNU9TeWV8axRe6gBeGtk9n5Qwm6yJzi662g1kJfLLXQZhu2LR",
  "key2": "3eJGHoUnYr51PaAGmQwQAwKbb71yAhp7hsyRtDYzRncNNvJrrBFkXoizMUMxDo76QmeB3fQzbiqHVVdCuorYqus2",
  "key3": "5RvHe4s9aP7N7wiR4pG12NEjrEkRbZxmcvHDM46eqFtV4Tkv3pLTYZtoGkEr7W1NibN1Aaf8XZbFTLcPFFeNeGeo",
  "key4": "58pe1wcWAmEB6NJ19ivKBsU9JS4Fnw44rW5NQxUq29uocD5bHDqPb6z7U51kKbbtWeiXAmmYNJXdLFhvXzT7yRi9",
  "key5": "4gbd1jGdKQHcvWUbjQao6hJupY75JWSfWCf394Y2CUX3BNDbx7RHuyah3SizGHP1Zw4uNJ3JnwusmaM9NoQb1v5g",
  "key6": "337o9ooTGkAyjvvLZUFoSiheHKVctsgSTiQVeTkYicbp8UHGXyx1AhEqVpmmosXAH97aFvjBf9oxmv9Nop8tU9i4",
  "key7": "4xPciH1cjZJRtaJLmi3XaeqCmLnjYM2ahXWZ3zE53MA1m9kQLNoAMBX44xchZHyGNkcNCmv7EwtkRGWU2m4bfnsa",
  "key8": "aaqzukoY2nJYqjou3sZyXjQ6JYwxZKUUQEUbwPe13nYzXxx7W9b9Su9a7mSPAgEU47wjy4HVKSrH4JP5QYf6Lm8",
  "key9": "5kd35vSowGpCJ32hbz6CJnnX7ifUXDPhsraE9nSw9tby4WhPreb43ikemwEekbpPE16xgBeLiZ5Kt3a9EEgo56bM",
  "key10": "2VnsT6gj5NELZqVyzGcb5R2hnKnf8J1wGi9mtuAqGQKu2TXAUsaHozbUG1C9XvEu451LbStMEM49FApLoHZWfD4k",
  "key11": "DwPAAT4aKbZQ521fz2TZ4Z8zFoW9PQjwBJwpBaeVvvitbeQvB3ck5BsJYbh8i9JBzUgFoMpXSaENHjvydVt4Tbg",
  "key12": "xyF36RxQH6Z1edBz4p7vu91M3ViPpnXyQV8sQ8vEeGNz9i1AncCcz44jnzQn4T27K3wLU2by4y8CiCxnBtRHzrK",
  "key13": "3CuRV8ge1T5sPpg9wowKJJ9zSyqYZDMZMb8xSDNJ3sFiGNzRgPEopusfHTN8V72Li2i3azXG6CnaetxvRFPAi6w1",
  "key14": "4n5Ucd3gMWSjp7buoeSW1g2T8fx11zeva3AgdWUgtzdqf8oP4CRaDBKSZ3mz2HWUAJtCKcpobAUh7PdV8HDhdwxF",
  "key15": "4kgD5T2cYY2SeLT9KZR5iyb2GZKbpe13ioF4WssreQdeJ8YQrJYjYDLZoaLnkB91Hm6SeL5eGys5BUXXTWNG4z5g",
  "key16": "23oBtK4qzTCVXtJQ3VeUjiN2rkP5KTDCN3E8ZTrtK3kPg6F2W9qDg4gw5xkcepz3psywYVRLBZy3RAUxAG4rudra",
  "key17": "2fXWTJZeMYZuAympsxnxg9xymPKZL9bRifTTVrd6jjhSN5RXewfeUugUpe7mcYRFKEFhvGtrDr1KkA3UKTYPza1u",
  "key18": "2VnymqLktfbqBFUBgQHz6ufB45DVa3vi3MwNhB2MS9CPUAEhT1xn8HMWfKXCA2tixEazY7cftaYCDXuwdkgLcM8T",
  "key19": "aZxBHWsZR2eB2KgHzDibfmgtMP8gpMQdSLZCTF5awAg55pz5PNpgG2ftvTgTQRVPArGEvUb2uhZtgAD7Nj1Cgic",
  "key20": "2ZqZB1Hob9RGXPquSJSyxKkHnMaGrAmTCka9R76FuG8Jcj15JMPPimK5T3MVaaBXo55MUCxfCikLBWcXnLCANkWm",
  "key21": "ASghBKdn3nSoVZC7R8QitqtYrvFDGad5V9uCc5vyB9Qi47YFyz7jnJmTXREgx9N2BcA2vp6oKT3fEPoYrCvLmyD",
  "key22": "3ib4x4ijqs1Csb84gghkYNiEqqsC659e8ob5FVbm8YqCNDomWpZryEDTqB6pD3Hb6o86wb9vTygpvU4g3GbxhjXT",
  "key23": "2KDmQfz5QghMWA3rTacdoxfVBPE3AqWW48cvdfRis1EcBm4ecbs9rZZKJ59GjZVyC7eXmtkPNzTUqH4oRvCeYCm1",
  "key24": "5V2bXvLiAYvUxVDe5TVRWBBQLKrLEXE2f2x47WZYBxH1HpHp4WfSDbkqds6Xk7z86PNCovr8KRzF1CcQVVF8rbWv",
  "key25": "4M7uxpJ3e12o4aQADrDQUF9WmkHJyWjmnQ21Qb8CoHCcsmte8Y1r9cTtXxSbB3ixKYotsq2b2unH4iJAeMc4Utgg",
  "key26": "Fk2ajhd8JHywDsfyzL8EDqAsbkjjE1Q23mzd88dFrxBkC68wDERo9N1A2tmTzqiEnogZgS6wRVoka9MJoxbAgNY",
  "key27": "53Zyus8Ue9zhtjZNmTH8vQGVuyNbK22AfMSCmnqPHymX6hUwePb2qqknYWSbG8GD7fWTWSecqgiVWeTkaAyZZSyj",
  "key28": "3QkUT1iMH5G3r1F169VDsPTPscRVxp2gzYdMkzLuoJ91qTKBEfPr3aufwcSLNHHQy4U49wWfsoKDsdu71LDdYoF5"
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
