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
    "MoYCsnik6vebEML12FUN2uPWndDKZJ7uFoXY48rhgZRhcy9TXmJY2uJJFGmE47GDf8r3c1QKhfaypckftbUN5sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpWLnEoqQTjSocVeu5Jz92JzBGDXcaKS594FJvZqMpAeTqm4bj653JDKmcLoVGLnA2mG5VCDfNjqZnxQUNx3BLj",
  "key1": "iYxhxWJLdT9wAixQNde8KKZfmhLif8owV4JVnSVfCk9jeSsGFsBkKK41pMifWntjAHi9ZsqJi7sRAtiukTX9p6X",
  "key2": "2Ka1dZkSTSwo8bN1DhLY8Q57KWebCscAGrgYBX7SaXwxSbS44YcXPm3Lk2pt4uP1MtsJHJkoDb2pTjGjUV6LjeMW",
  "key3": "5beNNWqXqZNYjvirxFN1SSDSmugpsx3UpGJFdkCKLuFSpQbB3qFhy7uqAMBbCQpir5HZJFUiWksDM7V1vY19A9E2",
  "key4": "3aYoE3THMnyUgjpgCUjDsoRDAYT4WnMiV7a4aqL5xwYzRxXDLuLDwWMvBN9f5Ych63dLym44LeKHBd59gkoGuraH",
  "key5": "3EMxUp2XsytTWMz35A9BJqYNTroZRWQTroWNuPDzpWYgwj1Ym4ngkvbnHzHqAXhBcG4smaBjRtvim9Ln37YbDLbc",
  "key6": "51qGz5HiANdKGeaemTvnYcj1XZhshorgR19dsASASGSf1g9E7PLFAYzaQZtAKSnQRWLBndPwVppmMjTHp9t5G4zV",
  "key7": "4W6P2cKwAMG9GhJvqteateYmaFaVBSuQUSZeU8aw8WNDcLm9ctgTbsLg4MrFgmRDY8xSxSbPjUQdag5woQYzr1Kj",
  "key8": "55eXAUGVkkSBg4TtJzgnJDKzC5UrDuQpF9aZpTzuYEZtSGa5dbDVKW4fP3uHEU5kNvM3c3PJaYQP6fDba3GRSCLV",
  "key9": "2rQzkr7oCKDc1jzePcFg9jyxuyC1tyBwuGeKLVb7vN12mZQgPAq2vpfA7vvanRLSQKJAHybz86igLo6i47SGgi67",
  "key10": "bE3N8ooyxKhpNULNbLA7d8aqCSifSmiCAxCPyLXnchFEeUFtfF9hvNVt5MGLGsaWxKNJ4Uyd7tQbaLccdCgqwMh",
  "key11": "51VR582uSqGt1j9fctL3kyXfyguq4FMFvEZxC2pog6eBSqFhzsyEHu6hgM4dYoGPy8hd72SDohX2srtZW7PYjKgK",
  "key12": "2mJoCtVw9nVde5dtU6HmYrs9Ymr1MaBAhpNe7h5XCGCty5TtzmjEK4db1eCJdVThJQXzPw8NFsV8tNdk1fb5dit5",
  "key13": "3qhMJYpY4K9KodJtc3ssFHpjVkjWbdazKGfALgrJRu68jPbqQNigbCn2cAEtrYH3ZT5gF8P7j3Xwu5xxSrkQwGow",
  "key14": "4fKmcVvWG5J5nJfYA8KKUL4N47JYx5pvoMafZYgUpLyiPo63ZMABp7XnGBn2mW9QVf9WycRjWQ1YoLcLjDmqbLaE",
  "key15": "w4RncADYQPXtwrpHGxkuNXTZEiLMghRrtJyxvwzBAcuGs6NNUGL81mkZEqMAp11dfcZ6fmWNbVZRFdcd8d7c3UN",
  "key16": "412GthQ4m4T9uQ8NJErMda2zsPhV52Dbtw4xLPdmkoFW84JT5qGs88N8u3yqEm7RYvMvTHE29HbEZVgw5kNTVWzt",
  "key17": "vjakYSsZSg4hYN8fYyzsXDipacFL9hDZPh3ALDGG7bpYgA4P3oZ7SxMGa4hMpjicm1Sxv6F2DQeTtDR7HZUZzr3",
  "key18": "4kJE75sECFyRFiQRFTk7ZxBQfBNCvtxnSPWX12CtXhu3nCbedBvUZwqybzFuafdWaZ7yz4khsis47RGXRFNXtvF3",
  "key19": "3A3UM5s8HKMEvXV2n3fdE2p7KaiTE1EP9yxud8DgcEeZuhjbhLTbZ3URu1SHMNg8sxcHDfGXPwgJLJGjKCv4nEoA",
  "key20": "5FdKwL2GMDpbnWJ4tM8wkexBNKmgeg5cbJHny5wFgPzaBvroXo3oNHoJKfhtistLzcAFm6tFdD1JdLX6Ez6tKL88",
  "key21": "z7cK2nQoBdEWT2xCg1KVCjoxD4biNe2szue666v7zLEzR2XQ3WoCgNQSEJ1Cq12f8Mem3DxMGvZsNsPExaw28iR",
  "key22": "M2s27jRqUPSXo8FearzHaV9JYRfsqm2eZ3vzfMFeePiRnBz9D2mmAdCtdKsLyTnvL8apidkS69QV5ZK8x3u8Gbw",
  "key23": "4HCwiRm9Y3WFNncQygxvJiHEdkBYjdRkRcUa5Bbbtj6Ajh2rXgoRXrxdfHZVXDqeFHrr1ZGbwfhAcdsNCLvGNHau",
  "key24": "2jPWcqStqhWitpTQpgB73YhnN2kQqLdFuJeK2PKV4rXTBKBDRKJXyDxwETUGAHCxCXx4JoUiiiCsjr7YuecanyC4",
  "key25": "5zwYy247byVUvVsjVZHN6cxxhsciuivJ1X1N5Rdo7LQ7iU5kshZCb5q7VqbbrbrBE41K25horhH667ntRyq8KpQf",
  "key26": "2Eih3FERVL567KgZbdecZBnoLobEfZWTDjtUAeE9v9FbS3jGPVYCCiRZd9H6Ma9fMReDLk2eaBotFStArCjikJCs"
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
