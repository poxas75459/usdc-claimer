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
    "2CDXTmBdEf1fFoQsL96faSFwovCqMToZKhcFnyarrVbBMSRnK2thFUanVNLkNnNPLqTBE21uSqbqe5ygEfjtqzza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o9xvtDcU1AVHSjU6dWW99HE8izGR7eip8GbNUEa8gVSbuyHEq5HvN7oJB8D9yn7B87THVQFvbJ9ozRgchsYLwcf",
  "key1": "mTZXjyX3F4xUxMyUQuPoUfqQSX729nTpsKVKHwhMhoHra2dF5vbyqPDQy4gdmizoYai1bRe6f5nY71RovhZb6Nd",
  "key2": "5Vyy1ywJKVd5Txj74RfTa2sCeVVeZD2cAPSDvHXSHMveY3VKNv5Zq7jzBLszdDuyHZZR9Z3vuVBAoMyRrd9MHHHw",
  "key3": "4dDWSEqVyqyf9Xo5sR8BW5VuunUw8Eb38Yo8TiJqFX2kUXFfRGDDtoRNhuTpPH8VCp6pbCJNJj9BqF1aVcuzxxGv",
  "key4": "342oVHXRWQNfGtCR1Po7c6xjjfLJGyr3euoRnzMUYH6XR8fs1pPVCGaNc98Hp55V2SgNUzPkrrThRrWFNs9LeJgn",
  "key5": "Bkz1rVW3qMVtQXFbJW5W8XwaPyuCTBrkco865KcKpGcu7w3K19USZBfnZgB3oeNoSkzTd9nSD9GFTHTphHtoELJ",
  "key6": "23TCPXrLto5k72CHCnPVwY333nBWbHCRYt7biFEnnR7pKHTB8dwzNN8DnDhL8o5zE6K5LCQ5VYtGvSCz7To3kSEo",
  "key7": "5p5FsDAgMCEaUa46rCh3AftMuY1KYyR56u6VSr5tgf4UL2mZeWZVGgJuMs8a5pvKjTQqGLMioiYSHwAQbktaRnTW",
  "key8": "2jiKTEBk6Pnu9EYQK8C2VqbLFTYXoVcYF8M21HvSZNashH5oNmBTDBuDHZJ8p3Vk1XgjEVYa6m4zssgGMYTGV4Yi",
  "key9": "5jr6py5H7zndPg4z1krbJPPpmwm5sooiEqrPSm5a9BuTyonMZRfoXoAp8TUXShPUbJHjWBPKDtjrsEe21a56wBKM",
  "key10": "67fqHyZHsJBH6Lg4MjaQzfjMNNKUBeNY3AZg6BeSAZbrnuUhf5ugC1ntx5S75kLBUaeftVewAPQXEoy7cCAeh3gr",
  "key11": "2YRLh2s8XmNxaussQN2RnUSzggMNX5ExTjnnPUziYX5PHtmEDc5Rw9xdFiy3C5GddtHxz3baXng19yEB8Uo7CriA",
  "key12": "z7tPH5jVQHcdw9Dr7P4xNh16AQyiGBNf6e7tvPjiCUPBGDb6rY6BXeNKeZd9mNu187PccUPx7UsxtiYV7QyaBnB",
  "key13": "5yDQ3FQSWi9Edrs31U7Kf4KvYRdjFTAuQTUgVNANS6nVLmbLaaDb2yL2GxHPHa3qbHPh8CSYaJa2yTCJr4vTVGjc",
  "key14": "2tDgx2sWxVaHXjdNMtXCZeBVYryosKcxzgPe4wcGAS5SfTCdyAdpgjjxxxQNxF6SgUTf144qvyoKq863jC2ghuE2",
  "key15": "fnG3rjx4vMoArxbooA2gRN3qLu1Ba151d19fNRUPdzV7yqqZPLd4x4fkyZtamjy8GXgUumpNm8wzssoNqHu6sGi",
  "key16": "sMjtxfcg565TDTPtx5NBwz2TtuTsxu8cmPa17fQqZ5WiSGUYYTaYbYX68d7R86PXpxxpiLVpT4xFHpZrqYNejNu",
  "key17": "2Fy7VyCPGPJGZy9QBqMDqexkbv2a4iGRxLXT8KF7QGCkS1Rb897K4QsQHALUifYHnr4j5LvVvPQYzNiZ9CMXdJpS",
  "key18": "Zo8a1kLXL4w3Hy8J9vF4bzW1rop2D7u8ufkv1JLvxrWsQEpTM7EvY3AmqBsLtruzUwaBu4r1PwS75GoNJcgYxKc",
  "key19": "3uTGuLWKxThEwi4N6R6G4vAYM7FmtDvpaw3Drr1XP3hSERrkgFx9en2kVCjoXwmGCSo1VAaRrr3EASmhaRq3hzMV",
  "key20": "Fw7v5i5XXuaZCz9Taodind1wvFUMKkbHn7AEsXisoKHsaCsNbg2QeNPEsdZ981fhwjWuaguxqARMgQo3tQ6DNCf",
  "key21": "5Xan8G3x5kVu55fyZGUPkkTr1YpFBVcrNTw2gt2nc6rwdbbLbXx6Zg5boeNvkXewU81KWub7f8eTxzSMnjg4wgFX",
  "key22": "4am5rFjDrEnc7ZvZegvMbJMAVdsvSErUjcLptV2BVV1AvkYbSfzzRdUuEiFt5sBN3BuN7PNyLch9BbW5C4qNwc5f",
  "key23": "2WnjUgRhUd1vvvCHE7WZDNA3LfNpBN6oNFCn3XoUDj2J7xccSoyc4LKJCPgzB2h1wrbQqdRVRK7DTYohsxE82oaP",
  "key24": "UU87YZWPno6UcwZFRUSLJr3sZ8EUya3dTg3PnvdBPBfsNSXyGEiYJsRWhtFcXxoifGXiRWXqe17QSYAuAUGDNys",
  "key25": "2JQcV4wh8trdfDLrzSVZPj6WaYeqdL8savaGSKLCNbWsktQGZ3UX1eV4CjqoKFXmnj1DhPgH24FJ84QWsaDX8wT6",
  "key26": "3UBA5b11UgGDJ2koP5e33g6yiyeeX9bokK1RkyMw6nHWmZ9kXg2cjDynrKz8XE4dhLG6VdvCMZmEegE8Dsavif2f",
  "key27": "4WtYxosLEcVXrYjWvZyYLTrzziWpqZNSyUZAXCwTFa22cxymmERe3viyi26P11KbFkjQGiJWZknd5pGdKTdQDCHR",
  "key28": "sc6goMQ51T4ViACecwhJxhZXSNDw1uv6C4x5waL6y3c8fSey5hA118yR7nqMdEjxkGHSkZFLPcLNXT47PUUckfM",
  "key29": "4biCyet91iMLyRF3mha5ePPEhjMHcNJu6MtBNQqUBr37inb215Cp9tMxYaUGEUXZSYT5aJqPnQdV7NNhRiQ3N2HG",
  "key30": "4QEjqrg3dcjwW6GqHVvUDdx7h4xzd5TdH3RypHJt45kfTRPa6wVoeU3UhsR9dhNu3JbLCZeu3JVfUCGqKvSPiKd",
  "key31": "5sCy8SfwDMpyE8cmc8in7iTio2zKMuHVC37p4vYJNxqPntmfXU2ArsLCurtnnN65PGLN24wg4sXyo4QPhGjsmD9k",
  "key32": "2KXuastFGSkyDBJZEAkoDALFKsSaZ9baS6THw1SW7kCqVrxHYq57CgLSJfFzc9uQCpjA7MD9kuG32WdFW2Ht9YYU"
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
