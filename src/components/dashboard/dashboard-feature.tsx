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
    "2oBrbkxXng4gwKrjgtzYkw62bKCRX9ovjvTjtXPWwpgrQnW1E7pTFmLNMSMNt8BBGiPGGTcMGvehweYXGB1rnEqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UwWyVJ7Xqd72XyCRV5GzF491SCtXREncTEmKaW4WUeLCTipqQbgDQcaqMJ7hqJtMC8ax7JbMkgEEjiXwy8riUJe",
  "key1": "61aRNaWGwgi4bEM9T7NqXowABkN8jALbWKgQVGJEi8xGbh3Q5DyJBMaDrQrjyonFDvXJNj5g1SWT2Qev5iRA44T4",
  "key2": "3PGUybUfH5ZfsqapFQuNgfbho2GnP7V9igmKjjbqotBL2ecUFpDQSEjAs7cvtWEe2QryPtcPgZBCS7uCeo8frLBb",
  "key3": "5PTNw3i7BLkycHTc2nbrGmzxnJ6nqeNE3Jcu8amDJsRJPxZyrYDUtXxAmstjAx7QdiyKtsUKnmqb9YU4eJoJ7G2V",
  "key4": "2EJHjYmBLXS5StMz7dgLSBuCmfQrAcJuTj7Af4zaoEdNZB2p7rcG871dHpT27JfQu4L3UdoCyW1qpsz9zjFFednc",
  "key5": "5GGPgyFwt88hia3DHk1f8gaxnCjEnGdGL8QqKuPUKYrGdgzZLvb9rew45mC9pbwqYPHyBmaMkqNc1JerUn6ADXZd",
  "key6": "2C2fGECuZc4iHkcUNDEPDn3nBJeZYQjz2vVg7cdEd9SGZLkwFNaYcmxG9ozLhiVUSrDhgdgcFNsTTNxfAXZiL9xJ",
  "key7": "5iNBpN4E9iBTjWPQ6La4uHVLb5em7ibHvK5f7BxdDF2wvvBJv81dKuiVouknvsvNtpFZRchYAsJ9Lq9ugA2vESP6",
  "key8": "3dAL9d6PME6U7JhTWLJUDe3Um3Td6s35yoj8WsSvkrFCEwMcMJhLkXPc6ek8ER4PQjiwhwqxZYjB183JVCa9EyJH",
  "key9": "3CfPGLyyFRtQSCTrZnLWAVh7CenmAbtrftLSdjADZ6wHFfSukURyZvXSjXjtMf7dvfQ6S9AhfzwNNrFQkcoj2t8t",
  "key10": "5Pp4NBefVmzMULH7qKB9vEzFd2aDWzm2Xjmn7QZUzoDUXBdRdt51ziFQkA6RzxSrKE2WN5wMgWTE8wC4VJSVYiCX",
  "key11": "23dwm5hc5d9z89t1NfYZabd5VBLKHfi3B1jFE1famq7iLkzVQkGxWFK98wAjVqyt2T3Nas9bPGf2ixSpYw6Zt5q1",
  "key12": "3KaMUv3iuscCXdnHztG3WWxs2BEtyoYxDfzW4chdSYBWKFL8ayRESdswqirqGQTBXcCf1LwLe3cVJHE2Ev95UzPA",
  "key13": "MsjhzKhpRqijJ23xxab3FR7hZYjLuzopuxTZCkv4hzYYVw9QGytf5tSfvVuuMdyxwG6QNhRvSjhSPPRRCWKKBpY",
  "key14": "UP8JVV2mDQqiW7Yo9zEu8yuH12oov8AsBJXCMQy6B1wCQwRiNNTTWqiPQgSFTCgUBy3HvEa6GUuvnvuLAZkavgG",
  "key15": "4WVRHyrG8NhNqJwZzsCBZRCgdsJf5rzwtjPVEfxutX2EP6wnkgvyYe8w6asrHm1ps2k3V6jXAF9mWaJVcxcsSrYz",
  "key16": "2CubwBfFuyF8oQmovHoJ5CZRXx3YgwpQjdp5q1we5F3njQEtAUCkbfCsJdhRA9YHDukHXfbxkp4aMevif9Raxbt2",
  "key17": "5hsX2Vj8HGjuX7UWemwHcL7MeJnndm1DkAbYTjV6Z1Kf2JHdWBiN1PsA5WkDQL2w81moy7uHXi8X5wd8bQvRtPD3",
  "key18": "3QQgABrujSknCaPLfnyCAkvqmJNKP2wiGhgCHHsAHarR3tRghtXtBbsLZm4no7CT18RY7WrvNypkDVcLDq72oMg7",
  "key19": "5ohEXnNLGXnEea972rRt4vTRCjD2Pa5QCWp3RQksPckVk5m11XS2Qi8hJs3NxcWBvtZ4QFXVKf3xCjXgcSD1yB7f",
  "key20": "3ENz3vgB6DqzDSuDpGcJuAdGZEK1odTBy54wZuHbsSthQJR84eAwkpLgk4u4Cbwe3XEFqLHKMLd4P1KVTFvVwBhy",
  "key21": "2LieVVdTkXUmNViDJ6Q9TYg2SHbQ3UsLekhQ81sihm3wX3StBc4Tf19DtPtdhYfeZ5RKCBB65RvMtjt9d2SDDjR3",
  "key22": "3MHGha1NKdHMkyW9ZLWSwrXBFBqQViXRwtwpX3h1a4LK5eB77wZgWLMMHsUbZHtNZ5374srrMeM1f6EjqcQ9unWU",
  "key23": "WwMCH83J3YkvsUotW6YwpUj1qjUVSgZR6grKSBPZ5kjXwEib9TQCtNrJbNGNSBURTFBUWybiDTbkoz4PhYPMyEc",
  "key24": "oQei7J5AayYREMr6QFfx8FagPnSHGxWZ6tRnQFAKqCEADS7mb47p3pqWddve1Jc8eTUkLG8TfJKogr7648CbqR9",
  "key25": "4o1UF2DUKja1bALZSncMU7MAzf2GFjENLm4pz6k58J98qn936aAikheTpg1EBEEupZHhZkKoDgNDNou3zPZmcJRF",
  "key26": "bVSCyKfpTLB8QoRQ67J8eJ4S8kYCNhSirS7BXc7QfYNcNoTw8hxMq7p2arYPKqHks3nCdYXFesmrhsWHYQhf8bU",
  "key27": "32qqU2zKZn3vornApJfsJH5AYtPBv8pJ1ZeUj11A2pmiFwfhTvW5c9Ch6wxjvTLocL6Vsu57xgDtBmaMVVJBuWNU",
  "key28": "UQMVwRLjUYtCsoCqmCKPkC3s3dPM1qCwZLsJNhstbRij4u9BDzo8ZPy9Uifb8vdKpmpdJy8xVfPR3471QLAtrnN",
  "key29": "5H6oLax1NqLVj2CUB5vgNoE4B3Vbe1qDXSgwughvFjimLc6zVPmCdGQBLGRvg46HmWwnfqUdsCptz2MGH3aUNEmp"
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
