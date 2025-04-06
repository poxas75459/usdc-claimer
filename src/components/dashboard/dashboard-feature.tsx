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
    "4CDysNXkks1hQEUfqQ4zZt13PzAon9UQU41YSbkcVcGNhb9QtPeG5R3YsP4XgfEeXQyF95TuEdE9LGFnUN2vVDCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66UCnZRCWcHDtPWRdoTgV3Y9qBBCKj2TTyo4wuF5ijVFL9juCx8ivdLDvt2Cn6S2c8pMKfnSvMkNznKbLpRKA2Uk",
  "key1": "4b2p3hsawH7JLfsM5jxG6BW8PQnjA92TCqioV75jQTNSLqW7wVcZxDhyYBup2aJVG3BgXZGQM25RN6bmA4kHksAx",
  "key2": "635VJs2VMrR9vJ5GGMgvrJbeq4y9KXoKbDZSy4W5JHEJpSoSa2A8AXn4J6HyTe8NtYG6SnhofwnFMpXjrxU6ct6s",
  "key3": "pXPaCK6Vf3zftZiaeGxxEF83qqRcfp6piPHu1GfhifPfu2VSHEA6XF4wjyum79y57XCRkkPgnpxWhvpjJDDwDiV",
  "key4": "5A1CYKH3dvQJ6qPQFz6ngUkEguGK4emuEzbFKT9rLHVvJ4UnjRrpUNXLsRs8qefWBCVsmSEsWazdm5R8phksJd5K",
  "key5": "3BqbAMdzJsNAea7AjYiT62zuZi6FzwKGzmtQbQwT23oBBgprFsChtniWFj3c7bbo8FD6XufrYf2FTbSK99BC15ee",
  "key6": "2BC89JcxEcSMN7tKXoXTk226We2tAfAXtaePeCTLKg2VyC37o9nHrWkphhXbNmQvkqGJQLrLa3dzd2GP7eQ1KY7A",
  "key7": "4bzcdE2XkvW2Tz1HVnAjDZ2X39m4jjrS5eDzYSKLLkh2Br81F2RBgpUJgXjWNxBfdTLXuHUqpC4cGjHAyAHwHMGj",
  "key8": "28m5u7eeZ9C4beRmCLfFmLvV5w98njLycquVdh8imsdP3vH2nLSJpc4aNeps6DgGGfWB9ZcD5cHm72CUUukrjXuJ",
  "key9": "f5bmC8wrkow5bXgCWV1nSdE6FaLMN8Ui6QvNvHxH7Z9rPumfzLVW5FvZ7b3V5tBrqveQdCy9fFwE461RaQQmTtZ",
  "key10": "xS341sHJ9QPTvEvnEgYaZy4cKq48aV8BVyodhVFWonqMHarR716KBgnMbv56ec667sUoqzFdeZYwwenaZpMEX9a",
  "key11": "2WPQiCVoczw4Aoq7uW5Mp4vAwsVbufqoyoTxiUehiVeppbt5yskWu7Z5L6osMJkWuZ5e2dP6kvn1fayVHdSDpFFB",
  "key12": "3uuURDLBvxjXGTej8PjNodUKYEhxtsUQJBbz1WLodTJM973qssHys7J6WSg6dyrjg1eYfnjTGuDsifykUfsqFksb",
  "key13": "2Z4is4v3y82MVjQgUyXnQNPfHVNTrj1wtmZCoCTSyWu1SjrKdBhEKvLoV54aKkySLVemAenZp6i9sxMHLpyocjpF",
  "key14": "a9Yd5uvkKYuZTyNrTZ5wFq2Vwfx8XH5DiLHtFc8LRZvsJACNFgtsfTkSt7b1Z5CWPckMbcGyoZqyMp7seaH381R",
  "key15": "4a83vVGFhYjvjhQ8oeMB32c3EJxKvCbB62rEw1vBEMedfYGMXYZHBX1mtxnvi3dNfyDTkgeLJamUAbwPS8qqW3g3",
  "key16": "gJyVYDF2i2Hh1egZ7eYm4TNbhUECgTUPmzxoCAACEWn3vduv1yzKdUDFAWz2SVBmF7ePdmuEdknV81pCwu1J4bo",
  "key17": "4kWnunvmbi5YVZo4TX3xtkvJRVPgpaJKCXYAaJQFZ4aHTFhNvjJ1ER9wMsUEd7kdUZsx99GAtaBtweXihbvhcPMJ",
  "key18": "Q5yqiAhUDif4fyyvX5GTxuyb8QX9SYJKWhhKtpaLqdXEVh7Pwo7ffyVVjte9bvmCSSpyVbrgAqpAhuiD92FfmKi",
  "key19": "3WCpbDKDWo87cz1dVfcqtZnRHVj3AZiFbmy5k2smUSJC7s9PLadgmqQ8LUGmjxsQG6pPAVubghcXvw87NtSqCgtN",
  "key20": "4hukUXhGUGBeV5mxo33xN63ovWYPBb2cvH54Le4FSzHaV8eMXNjKt51n6aeT6m8n7KTSkiTWaHVx5jiiooUGiKUV",
  "key21": "5nMypq6MzXRAQktabWLz7iJWow9pTZjkjSAiAYY1LbqMPstw4qvXwokS7Ac9U61Jn8Ez97TfbXtNCRuop1MNvNJk",
  "key22": "4RCGXZxG4RfGytA3ncVvKNsXxha8CamGwpYn9kiyMfkpeU135aaXmLfEWcf1gSRQJhP7WzuKSYN5bYwysWHa9mju",
  "key23": "2oLYkhLjpVQ4E9s3Qr7FKwYNNBr92ddrHCbZTTS3VFgn8Y92v5gSDu6BJt9Q8Cm7HBPBNzSRqbwbXdAAhcZGZQF1",
  "key24": "8QXHwhykHgerGQ2iUibmmUiWpEQ44tDHFbCNLAy2cjzFijuiZV6FQNaoqAtodB39T2NQX9y8E5HDQRYynkYrMHh",
  "key25": "2jitBwU7Hay1MXY3MoNSo1ir5LiCUzt5dmscb4MhUm6Hf6YAWVHnGbE6W7kkgiYzrvjY2wrUgLYDptM6NDfH9Yzc",
  "key26": "66eEfwerEpcYJuoXuXKm3fKUpEafviiiQk3vG3HneGJJ2LWvE7UuwMPcrPtFaGz7Gi3eoU22PzTLEJnm6rP29c42",
  "key27": "q3KUBCBcLP9CrH9pJLfKZTX7B5J8yxUpf5BmP4Rk1EXzv9M6LfWfGpGYVvW38RMDRx8isAUhwWcvZWRPruCs7HS",
  "key28": "4ie2L5jQBfcNi7FbkRMqw9C1Zc77bLHee9wYQtwNtWTHxhdoWQBpzE19h4LSfnVAQH1mzc1nwX4hrAmbfR4jF2L6",
  "key29": "3pu39UZ4RkwM7Gd1svyibXp72wxfCGB2R3Jjiq8jKr8zNTciqyYHixLNv5CGSPAPb1jJ42i1hFnotpsz357eujoe",
  "key30": "BQpu8veJRpgNHNwBSLY2mG6mjqTX79reCRD7AvU2yNvB6YaVeaoCRFeP4tEYbausAkmvorXepZx1hFYdykceGAx"
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
