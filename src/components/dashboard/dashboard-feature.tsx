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
    "62K82ruvd4XZ6N6atnjBbZPqTcqvyuz8qvHzGnBC2XPrcqby2WMJZ7PotrXyATbM3XdqpkGZ8gfPuV3Eg8yCoiWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VAWp8nEqdaS4XRWN2kgSksDGFsHVBRMzjaZ3NqiGaAikeJFVFptL4FdCrZW74KDs4eyytwybPkmXtDg4htN2Yhd",
  "key1": "32iUoAYvsAjSXNHF68erqpW42CpXG1vrQ4PQhLWYfeK45fENWaiZvXPHiH8VKnf4qJ4oMYUAs59XGGLARMXraGgU",
  "key2": "22o7TcYMYxCUCdU1LY24jTgweeegRZaZJyR2FhafNFSfQtFzKhvCpHgTYk8mJuUUXTsZKeYd4YENieGBrqz7CxPV",
  "key3": "4H32EE2LrGGsmuDCwu7KKmFpRzLGotb9sEeCuXj8qiRy3aECV8Dc5sohdRegpQHimM7KbMdJDfgJmXE2u58WKGh6",
  "key4": "4hFSMH7zetCbnFpbdxaPxQyPin6dKZAYxdwnTyHzh14kF32v9G4hxxgSvGuyTbqXZGai9zorwAUHnBNVz5pFHnM2",
  "key5": "2iYFphvWcWkQaSCh978haNLo1r1TTx8oz2cMKer5QP9MwafW6S4gKchttCMLAs3vwNMVZm1eUyebxYiPq6rHGwbo",
  "key6": "5JYMGNgU7B8VXTTQg2D3dbNqsF4ztboWBBF4vfHVdS3a3mstHBcg5L5YwwrdBzcrogAPXZ36nQWNM5ciTErjrXAP",
  "key7": "26GMd8asZwb3PXJK1YXHxmR8JLyGGfG5tiDHRgJm1rwWUczi4Vn4hCikkDuBSHyFo1MGDH2M1TJWgkYDMcvWN73K",
  "key8": "4ukMEg7ueuE5sUqPG5xbGPwiZ4aNLV3Sj6b7hXpQTaZs5qZ2qkySB7CnvUmqfNmpxoxurN8YTMVfGfz63how3ji3",
  "key9": "fnDsuPyZLHMRmEgQi7U3m27Z1AoUfsAjFxVUKNxQSL6EPB2v6GRtDyswvMxGNUBb15gzRLdy6kQmPBgF9xb3KLf",
  "key10": "4B8RB6xXWv4nxZqwgz91hBamScwxpoZWCBizDUJ3Cprrs59rin91MtJsaASfUhXV3raSF9V3ZkmHRkYtQuJeU9fy",
  "key11": "3a8MHghkhQbS9wyG3TnYb6NN21KzxHkZk8kmqfUR7Tp97BiskEabp1d7bGzMbEUyEA6gHSokGXBj9tpRZVkNuS7F",
  "key12": "PsNVk5boQBPbZvQcS8iHwawE5nEFiDzXWCJ1GGBgxDy463XnPUmnFAo4y41qyEauxmMYTBmaRZHeDxjPTiBciGU",
  "key13": "3NAAWsUoqEwC9SQ8KYWBPwbM9cXBskyVR4mzU3Ynbk4TkwDXjUMUru6EN45haTLQ5F3BEse3SJdpA5DPHhKzKQ2P",
  "key14": "2BAc9XJvtnMMSM2n4nvzujhj2kAgLXVJCDHDZALwr4rPSKZpHteq3KCXCHd28wdzC2e2W4zGdpMxCed6DK33rnee",
  "key15": "4DhXrspStVSy9eZuH9WHHawVQq5XKeR1LfKabfvAJKME1KnizDqoQ51gAAyGzuQSZPXLWk8HB2e4ya2qpWiF2tuv",
  "key16": "5AExEqsBia33KceQxd9jRcAHLAQ2PdH1BNikropvvYMoEL6srBz5mWBvNsvw65QCGmLS5RioneMfR1UAdku1fir1",
  "key17": "3U5PDXsLXgCzeSRLEdKDTggivpKL7Q928mNBjJNUzSqXrS3aiHJRb7zAFJetTmvM8Zkon2EaePqt4U6QjWd2qqvY",
  "key18": "2EGpo9FdbF6vPLCcdRYLwtPn9GuZsmM4ZeHCE8nXUrgQ6nfsovPm9NDfPYoYhVh4yCHGpjETzmsEgGwcVijEEHhP",
  "key19": "3Mu1KNdLod4pd8dkovZLo3xPvzfwA1iRyg49LPboYf52RTrfYHAaLTq4tj3hBuPqGcPSKHZE9sf8vKHgKMy9gsd6",
  "key20": "3J6pc1CBe2MwxcAuAKKpbLrMjPPspqo7xPnv4RJwBeL52smpw6yV2h6BFjAqud4mCRSzchUQeMP3FyGebgU6hsfe",
  "key21": "2r5Sj97yWavR2hy3rBb3YYTumqxrweSgWCTGoWrUVTfT3S9MB9AYV8kBQXuFpL5cmw286opwa7Tf3qHRfSLCB74y",
  "key22": "66gLYff44qEUw6FxjYQ8D7K27SQm9EuvRqkZz1cURELj9Ejx7seXvpSAoBm67u7Q5qunQU7cjTqgWXME2ynkVrqd",
  "key23": "ui8B6E5CkqUagjDsrLCV5sfsyyxJdewU4uG9f7ZXnmG1DZn5xWVgMGx8N7aBqJtHS91QUdBUfGgHXfKSS5ALTgY",
  "key24": "FoVmmgcD4XNMG8v4LWaENXDjyAQA4E3yoTDH1GLJ8jkuzD7BZd3GZDb7gEcedgNCEYbnLKTU4ZBK921vZpHj4Yh",
  "key25": "5bELH6EDVHEErjtM94tTQuPDu9yBKDAWhYkq6W58RUsAhpumzuMuz7wC1M4KB4Pek12VAC1kuv3mzzFCR16Gkjsb"
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
