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
    "4Gy6Xrj5dSXDGqQdrJGNwF9a8DXHmbN1bHL9yeKK7wZKz79kPymywYgHufQEmcwUqRKp4uNDpbpvEvYuNyMbDM63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iJ2Tdmj3cGGvkf3puY1h6e7MqmsgbxPzmntgu2SRrTqTDHCcR2aGDfPi6pnEns8Px5ruNvWNSKeHty5bvNKUpJo",
  "key1": "33dqReQG7BcCXb4LSuscTmPLi1ZSMKrn3swXQxKrEL57f5P8mzJ54r8NQQADTMx85VJ9xKXDrkyQh8pCeqadEVaf",
  "key2": "2qGKkwWPPxXzHdmceJCViG4QbwVkiGxhvCoPdehN8D35Cb5kuAqv3G9HxQa4Cx3s9uEAn7Npw8Du2UE59zk43oQs",
  "key3": "hLhNKT8hh3QtGHE9hjU2hj9w2V8UEqZQNYWyvG911FpJ2F2Qr31MxRD48G6VAMkdR6QWZJqRxLZHCF7yXoC6W3v",
  "key4": "54HsxPvcdnGP5rkyBPZphj2MMR7kbiCdKFaKwrZ4duR7EVkmiH92BStbdPwL9SsRjA6TTnQ2NVRcVZ5dbo7bY6AD",
  "key5": "35ZR5HCmjVCD4GSLHqwcVSxkYynCmzzfN8aTegE7tAnFkMuQ5CbcNXU7KRqkPKhLa8whWJuW1mCJjRfKGwkbUxq4",
  "key6": "2mwon7t3Qs7tMsfZfiQwdjwYKtaJDNmbcipngWoFs1hB3gpg1S6XBhgnVpbz7WEmCjSMVWDEtayFEfR5THtknSHs",
  "key7": "3nQiuc9SXd7JJjMQXggiHzwjby1d75zAEe55YvghzwBHcnjh9atrDuaqoRY3x9n12vLUKT2aNfkBr8W6sFbYaY9c",
  "key8": "5VgXVQuLekvAPWpwGFnY7gktx9s8Wwwgs1ZRH82FXGSVFbPacHysDVVfgKeXnKHwA9DR8y8mzFzgwJvTxmmVrV4m",
  "key9": "DFp4tzHFpZLUzGUf4FspdbJEw4SSBGB4gdhWFHhgzYUBN6orDGf7FQW5hfGGdtue5Ad98bVwt6n7zY5qN8ALQGp",
  "key10": "4c2iCmLQx9a1HLfEYwd53NGisbzynjt2sA22723sdzEeBYc7EtgQ5nU7NdNZHyzovNtrYgLpP96DFCjtLsVNNRGG",
  "key11": "595HLNCLyTW3YoPqZUJRzt28F2ydQMtAB621A1aihS8HjTAxBZSM7aApmKavmngZ9YhTNJ6pxzBG1VX4Z4bSmRiV",
  "key12": "4FVk5HhJmwPRBTG6M2v5YkTHSn5GgzVJpWzDt85yMmURiJVpTQMaKiEoJXUrUgXYtXzuJGwtiBH9zrALJwZRX4pe",
  "key13": "kXDwFEpko2NAHYDmer3RgehKRarjoozXGLdn9umb39THPo3wwxmwr5CkM9AZSTSuexfrxm5dKWEiEPz7cHZ9zq8",
  "key14": "42ErHonzyAdm4nko8cEuPcJw18TN55EFqLFuhcJFJkaBfSSWRKaKS2ChFAoPUxzjS7E5CL6aSie5DDxJ86ThFugm",
  "key15": "5HWYtmduJ22EC83SYhGkDXVVQ2gQLCqi5c5qYz89sSbra2EZZ84atC3TYFS1r7h7ReWaeiCdP1Lvueb3xdSbPy1K",
  "key16": "4oCoAEzo3HHb2Wfd4YG4W9mUG11z8MV8gXNqkuEcuuYhNswfrZrFb67uUfeN7NA9T5u4yehaUuKk6oVohs987DrG",
  "key17": "5fHDzGo8aPyWTc2yGtc6BaGudcA44SxuUXs2kqktLFa2qHm7hBNC4WkhuePmnLGVgUqFiFnz6a7HNpfV6eyNzRmE",
  "key18": "2VRHDW7UViMA5N5XGLWLKxoXoLMmiHqgPJpP9gEu8pVUXaW5xjKkZNm5BynpNLdKyGRTs4iBQnt7F1DHxhF4szpA",
  "key19": "5LRiG9hbQehK9hbSzgwpeaD5r6DkdUmTcujv84ZWq9EiTbDnxcTiQxFagR24xn5YqfKsvpN3VzodEi3Ro3GLBgYY",
  "key20": "2Uh1jNDuGtCWZ1PAE4PETCsH9PMykGkxBFKn1htd3iPWdnkWzx5o8wKH7QVnULYbYJyS5vqrY8WKgDzGF5cAd5ZM",
  "key21": "kkHT3HKXE4mgGCrFSKToVzifEXY3DMLwAMudSgJx98CgXToDEX3L7PrzZpF96VBaAiTMrMndkesDHYGFw4sSPz6",
  "key22": "5FezJYwxRAGVE3RYXoAx9DkfLb44JJr2QGuc8joT9udV7CEA5ZXFMCg3XfAzSGGa2i7mKa39pFrcjcCxchigdjss",
  "key23": "3vtWn7Fu8mYQrwwTs3PtnNDXoYGk6rX2BPG1snWXdPqBMA1dYHpod5WGXVm6FbbPq1fkiDnvsjaqsiDXReXveqJ1",
  "key24": "zQWrAcgXwQmgj7kzgmSoauSAyjreE3GQNwhHJ8dq7D25BvKthkmKVcJZENYXQS2gL3tm1pxzycexzkCy12ooa7K",
  "key25": "4kHkgnnp8pVAbdGEKendSGum3CVDenhA4xG8sWYfRDwJ1aMwa8j1j1tRNgEBvUUHTNV3X2TgpCw5PhYoqAsfPfyW",
  "key26": "oNWGtau4riWdXJ3N4Y4GEa2nX6JeXKiUXSf5RLCoPcBAZbDXyUzXEb4VTF1N6HtjhWqyHxBVGbXQ4sHdq7Q2kb1",
  "key27": "4qLpk2WGwbgTyJ2eaLetb7T3FacYTP2WQ28Dc3bGyeFs3S8RJC6xp8Uvp63Uxwmv6BFNTALNNp6X6UxaYGKwe3ZS",
  "key28": "9WduETBBrHAW3p3t12DVmZiDFGSN7e93cWehD52ep12fy7tc3iNSQ7pzb7p2rKxyGVeg7sRibzgBYxbkqFgiCeh",
  "key29": "5A3DMaUfratvT8wXzW4yA6MDx97YMfDTkhBHXy5nsJYX8jyJeYC4c2hMHX5uucRqM7zdxoajv87NtwZnhhTg7c1K",
  "key30": "4ume8QZuSvAob4HMFY4GJvCEHUEZXEeJtE7pjHKNA25Z9GF5AZWEUesQgyXbTMwaDDJLKWiT3tsAPQLn3cSRdMuw",
  "key31": "2AFbsPDyqfCHmY4krX2eSdeY9DB6rvjuiwUw22CLSMQHXkb71S9oPqZQMueiqYNMm52FSbESr7KK51WqqzXKWDcH",
  "key32": "3DcfJg6i3nMQW9eGACYvhWDvTyaiE5WvqT7eRw8hWw4BBp6MqdhpAz9WX5Bfw2m4wikatpTFes7bkMQNBrtwJvHt",
  "key33": "3v7boWk9YudShGfoXNTujvTUPHxtWBpRfVxfBB1iMjHt1wTfPgQJZeEcZddt1AUVgz4P7qruCL5PNtFDyUKUewx7",
  "key34": "4zYHxC6GUo4bkgzq7kTMJX2zFgrtM2Ydv9PDXTmZg4rgHp2GNcURSfNfkBAYYuazkKXktJFLnNw9URKp9E5Rzt7n",
  "key35": "2BPEjr5SsijiSetSjmronXoLpJA2iMiBfQ3cFdbYQVaGXqZr173nCwNNgb75MYaLPcmfXcSMJJkSK1Rwjo9yLFti",
  "key36": "26DRgooH2kw6ayzGv5bHRdPVPcPAy4sNKzSi8w7tPpC6ScwEaoitvTxMPUtj5h6bbBTGJRCRNkusPR93RRpDSaaz",
  "key37": "2uxcR49RxxHu2VfGd4SJewyhy7YRW81T5LUKvJTNZs22ZFSax9S5Ru9SjESb6tmeDxCGytta23PX9hKVhaCFYTvY",
  "key38": "46MVN1cXqeTWqXQvZdZVfPN7eg6iss2CNaENGxQYidRbcmaeBjTypvuPKAcPn7TWpLtaCMV4iNFwuwyuWau5iNpu",
  "key39": "jNq5RWVMoXrQyr6jHwQTEzqSCmNXMobgLjLodTr1CLF2hWDNJgPaXUVPcoFxEABXPF6LX9nBeC2HgpJS7EvP3kd",
  "key40": "jpMbryjKouBDSABEN4PkjgsovtZ1EHp7Q6uHP3roQNmx8f7Zj2oWqE6ax8P8SSQFjuqV95CpWdM81PEUeF8fadr",
  "key41": "VY3UfA1vWzgU8Wg8sPjKp7TjUURDemDjJLwVXf1RJafWUdQfgzeR2rtCzsj633mf7Gy8ZWTmsCQwbN6gwcA8W9C"
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
