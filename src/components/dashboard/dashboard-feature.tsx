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
    "3rKNk2E3dMN4BRzAFRiycsGieRYfDFAiibj84KASTZbWghCJ8GXQrkn5mKRFpk8MzSSsBeyYiKxVBnGVPsVaL3eb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37fziYJy5v7NzDjqYoXed4wKfssjHbdserStdR2r1bvpuhcZpkX4ePonfEZ3j88UbNRSpUuATPe4Tc9dDn82F5HG",
  "key1": "NZbKkcWEQAmMNAeqUyzLGwiGdWF3J3YTH6ASV2MdsimTfEo71vz9euKP2Wzx8PMqkFSLqvhrsrQypEDSf9UHpWk",
  "key2": "5xQJjCGfxKZvNuvSGEx8X8fFM7ZXBFNrpQj2mU4cviYiMfMv1B3RugY6CKXNtQ3sSSJ1xfKKWGDued54m4J9osQD",
  "key3": "4kMEMKMwaRvsszaLgMWKTnKkyEhLq2WY5jy2F9YxDNHja8QpVivgp1yapYb1XezLdsXL8etEmL9M5Zuft1KUiHJq",
  "key4": "4jxtvp7yYof2sQMj3cKuUkyXTq2ms4jBU1dbVk9J2k81H3Qn7McmwVU6YLBE7vzpu6g1ajGKyCu18ZgQC2f9ZDCY",
  "key5": "4jx5Ft8gcdTEvkHWtSNp2DQX8z1N9yyJXhVFPuTbFKLKnj2BH6CcQSuXzj58dGJNgZuBhL7UY2svVEZamn8pNSXq",
  "key6": "8HE4oEGzP1ZuXpMgeK5o4rbLf3bRL2h6avTXJqDsfmSdTpmYjsULXgcLFT1B7qEbac42c3F4Zj8w2wCAafPijB7",
  "key7": "3TYSDA5vTtKU95RGySMNK3YbPgZU1qqhrGyhdZBMLZzNNLLFov2f8TB8KNQjZNVnStb1DHnQmonW5YpT2hCLj3sA",
  "key8": "3qMDBp7YWFWS9qyPnvCusn85okRssTEqgKX67jY3jKYKd8c47mWPP2iZpJU9kV3kVRE6bR92QoemGVj5X3HR7grS",
  "key9": "5mrgdvADGSF4sX8qNDFRkdCnpKPwjfU1czBAXPRWPL5YZGy63rwPcMiSkEMKa9PJYMKbVHTp6Rq1hCNS7rpSrN2D",
  "key10": "vCrxQJm6TZWs61jqsWLrEzo4RupjmMxJzgQtxrDdEMGBQQxJ6Tg36esV31Q3nfx3FfoqNmoBEuS4KuPpmSjZH8b",
  "key11": "3bdKckGHoo81wk6BoLEUNBfrt5DverGGv6Kh63RNWA5rcYSXjsDcinPvTZyNsBijvua4g8wQi2avicainvSRK1ts",
  "key12": "5K1YFYcpt4Am9XzWX4rHqVzbbKknkqAdwCyusdwLixBxuFUjXGYYhm5HKYughwm3g3P6vZHSRscksunJgo4RnsqJ",
  "key13": "4cVoQ7Uxyp4gAGhhJfyg4UfGCq28QjBBd3GqFTpKWr1DTSDmNgaPdaBCKVkoVvxp9edWNWyua3KoQpwdBtrKVRxn",
  "key14": "W6VUzsyBzxFgt1zkCLnZhBM4VedFuk7XPZA41xf16cXRHAtJ2sFAuVymqwW1yCLzpcmmVtdy7Dy8ufGfcqRjb4P",
  "key15": "5ma9HnjDUvsuogUqxKsXAsgH39zS32LXAjNBwoLo6h7MDBUdxP1fDoZq2nyTARgC7c3Y1XtsreDtmxuRaFcT3cc9",
  "key16": "3rzYNAtnqt7xuXSnYeRrsq9EKGHu7ZUdoss5x7iE1u1nHBATsUno7ymteTJtyCfBvVAQbBZHiBSfU9WA9hahCPuL",
  "key17": "3CohCKRoHwRSfvPeu1EhmgFy6iAYm6sEc3rUtm8H4HfSyXBf2SwZHFpzg7XGA58ukdusqWN34WWzVXL3AtYZ78QB",
  "key18": "3pRXqbTSB7VHRGv74As7QW9QfXJLGmCz5nQeVgb7dKeLfb1gDycwipC9QjzSHY4HqqXwJbjmB46Nq1M1ZPeiWF1F",
  "key19": "2DYmMhuBG6TjmruTJpyzjAnJHGjuf45NZYwvmLNdR3we7eqrXmyTTK3kAZtfPZCxDdHN7AqSGzheTd7EUg39dvT5",
  "key20": "36qGPTK3rvBK97T4oMbpN3sj6P3ifF7NwQK5Wgys5mpX8yuj1XDNgjZHUq3msWGP3zE65S4rhDjba1CL81Ranqjo",
  "key21": "66C1xtJwieNPbNAanpYc93iehFF3sh4B8Tor67zjxBDAxAFE9jqpaMFrxvne8nAEgD8dph2WyBwQRNQmjNMsyvin",
  "key22": "Mtc7iBjvgTy9wX8yWJbowrwqWfmpPgvgR9sxWxegghS878L4CmHFTZ5aUVfFmHR1R7vAL7XSuUsaZ89hcpi85RB",
  "key23": "4aGNsVutchaSZKTWqfPfs1LqnBym1Wra21SZVfNPDX5zd5JDHz4dQorudBtCJGLfHurHQNT74PpiCPZiAo4WPHLc",
  "key24": "529kkNk96qsTm6UdZPHHZyYNc1pwrnRmBR91uKK3jni25RvDx4fdcWWZZYDmaHfJBt2JC8sxUend8cymF8vsDAx9",
  "key25": "4dDWBC1wBuiqzTEEaUV2Wn8bXko2TK1zZGpkp7VJozwiAiG5W25qbMUY3JosQskyiZGhCvkUvg4zhK7CZxQb1wDS",
  "key26": "3KWvvLghMnBeyUDUBAT3QeLYT5HD8g6R8NM6XzPAT7cKVmAAuZEpBiV9QpgmYNKhrp7HC9XC9muW7UPpzxcfKcRt",
  "key27": "2Spi2h52ZT9a1V9a24XjtaaY9m5Gjy3AxGs9qaUKbV6mzJ4ccGAp8iT6NcFEoE6mM3eNRDe3ch3CdL46Z2b1qaSf",
  "key28": "5gnvZocr8zUksTH6xpbuLjAvDvEuAvvdfDeoZHaNnahfA6HyDTX5h12wa1rkR2zbcvE3itTFwbTA2crxZcEFTJKm",
  "key29": "3JjQxC8KrqZYGt6ygJxcsfZyJbbJ9bhXepEjb7jdCUbaYdRGoJNzr1aKTwaQ6GkNuMSYNABqLn1o36M2zpWFoM29",
  "key30": "5JDVC2Gi2biP9ExHto9Pt1pEBsDcayDgVXZiAGcLm7EMmtESwsz6viUQoT8iMACBFtXB7h758aPvTDsrf7QpMAqr",
  "key31": "a7JKzDxzmxJ7WRrLEy2pN3NeEbuFU3PeNB5mayHPcV2pTUKw83BkY8LZ6MfzfcQUQsjpZ3iWHm7e2eqtWp7SB5B",
  "key32": "ShnQz874w118tSiDFCt2ymprXV6Fqs1Bq9t87B3bxfvH7cWGa6VmgMvgJUuv9o1TRFPzG3TXyreJzebtAtiTxpi",
  "key33": "2SU2HkV4T5cidabRdQJe2bZD2Ms3CM8qqkoeehYYme96q82N4sezAT53Mz7Jz8iGxgQaTTbHPz4s22VaB8Ta1FYx",
  "key34": "4zmRcCvT7JFkjqzhPwQNfQaV3Wz8EoAyLRZ16yyunbFKiSNQwyLvsLEZt1mAfunbDhnSGnTTcbvptqnHsgvjuP8T",
  "key35": "tEBFswiJnNpH8DdhBXNpzyAkKQYQF6rMHVNfQQcY8dK9wffk9Af1Ue2bedA1tMLdVSRwdfTPUcKEAk5d8mhmocM",
  "key36": "4ZVBuZ4MgH89RpyVZZ4B85CPqASBtEMXvzfVHT4S6Su249MdfFSkV1iV2Uk2M6QRBFcYasMrUPrYTH9XdUvgyj1s",
  "key37": "4p2YNwD7cUyQG8ZJ8nrhjq51awCGb1WEvjyvcAUFDBoPkZ6maaoAhmxw411bzwVSN5nTsDqLHDz8vuBS6cSfLJbM",
  "key38": "3RXGnVwcf8PtxbiRtfjkta2snWepYMEekgxQV7isG5oKA3XF5atfBzFNdkMZ7t9ZfEruWV5aXbQ82FVGPFZ6vQYX",
  "key39": "42mNAgiAwEi3z1C4EyQhVp9PiYxBmjtMtK29FiBNNdHRMHmPpaXN77cU1efPBf9VJBYKe5Hapu3WYyFYXhsNs3GR",
  "key40": "49JEA2ujeEoyN1RV3FEMKqFhv4Jq4VhBriRD8Fk3SNkJyHJqUxBCU6Xme1ZgYR9fMq2vfamwPWaF15ySkRLQYtAH",
  "key41": "3TrRKDUudTaJYmxH4uCFaJCvZrGXJM7MpJKEUR8NBoV6V6vjY4YDGbNPR2dNVJZpFSPWtJY3LvqXdxpVfWVm2JRi",
  "key42": "2FwZvDRCqMr1sRJmHJZBeFWysVAg1xozyqTzbUuFEzdMwXNdyYz8DWj3FGmVfG2JqyNoWPW9tByRiCnrUfvw1V14",
  "key43": "2PKu8av2EjEqVR8AAmmdr5uwHgfZL3zDy8NPCkeqwKE7PERa5eS18SYqhGYap7eiNUE5LAtxX6pUCYbhFVfk5c1L",
  "key44": "2SfKc3fRxaSkoC97wfbMML2kms6VfB73L9DXKcLr5EyHANKjTL8K7VLHqnDZqXf7cBDVwoE2De8wWpwmm7WEFPjU"
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
