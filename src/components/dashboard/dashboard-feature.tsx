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
    "3G8czPWu3x7bNLv8M1tZYZ6Pz7obLHn8uPCzkZt7KWN4iQWfM9JonpNnVmCpzXQKyx4QFe3KN7k2F9dnTFShUfGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6CUzpVEyKPzMzvzvEJ1964oieSZwmKX9cQqTrhjx84KL6r4TpFiRRXLyWwdfijL1sff5X5GRkgdSpNbbFvXnTh",
  "key1": "3ZPzFQfuQ6zQ54GSnVNis2CA6nWCU4eHV1SYcrp5Ve6aCCp9H66Z4oheVPT4skUo6eaN1DksPJPbxKSiw1gxD21q",
  "key2": "F8XqYTE1JM5LPikacnLfDxiLvsW5VF6Z9HMRbjAWhckGD1nGHZ5Cq2vffQCLN5XJRFruVoxv4VYUNhMkBgLRBba",
  "key3": "2Eew4xxdruRM48fCcD9nRTcPCtRX3asAJvmHFWwcMjNev138u7FaAwoTAXViRXsedyrmQHRuQe2f1WaedcJvjSdj",
  "key4": "2TGMCWcGQX5PzmBSVXbEi6p7TKNxKB1YsECwMCai4NbS3U21ZpfYW8PZu1ir4Rc87NPBbkdyN2YtkgMAKfvBPtG9",
  "key5": "3eBVdve5RYNLqF4wox5M8uzUrwXGSE4YvEZCeYQUD7MJ68zjCpsxbuorHk7EBM5hN7bgEf2YikDn3MtuMqDQZ5Jk",
  "key6": "3pQ2GVdwKH5pogdVYQmQk99Efn2JWHiUrcYvJ2dwHY1wRqvShTvfzPbi1kmJLKVhEF7ZShNptWFN9nkrcirzjJqK",
  "key7": "3wcEs9yBYG9UCMpHCgeDZnbm16k6nkFKBqx5xtxMqAqNhSxsE1fc4zr6GDFMEFyJmBrhuZ1dEJxF7ED4AEfHzgSp",
  "key8": "2NU5gS24QGTzPdnKv2JgRA4HmSaKPDYrfHzDujyTL2RMLVCZ3i5P1huxax64kMwCJ61bqGuDSbjpAcwm51YnX3Cq",
  "key9": "57PYYUxw97dku7KSUPp3xYem8p9CNBLJTEwwtrv3i2CFc65cGLFwZS8E36HQfu3JLZgqUJtRDDZsPvanugztGRiY",
  "key10": "49yEkhg7iqM1rVXF4cLxc4b8AEq19FRfKrsa1YzgMDrUMGtzeq5yHjBn8QSSK1d7xjfrxfzMXkP6rfyLkTVxhCb7",
  "key11": "3gSzMCweGu1Q4nuLuGTmzMbRySdnU22Z1KPWK5TJ4Yz8TYPAioH3ToipuwAq4AK7JCsVNKqe6T4WQLNJGB354Enp",
  "key12": "36gxkaDSD5wvh1v2Gy7uP9dJwX9431j3Ch54DfMUPAxSiMxafbxgmntTQBcorB4LJrh9QqebiD2fekSxEkx3KvFJ",
  "key13": "Zio2XC9oXpL6oCcTFfJPTdW9RfsXLyDzemdeWbfRKpduGdGbD3x4KD42na8qUbaM1wx21RWqF4SDTgSYVevGD6r",
  "key14": "3mdot6az6mYXSC1iZGwg1cwkQG8wwAZUegL9Z83oxspNawM8PxBesx6Zz6sShQSBFHeujd6zp2NSpToEX54PC9Xq",
  "key15": "4qBKz2yr8SvHhf4TLuk2jTHbzSmikug3rZPHbMTBcnj5Kqo7HJgNPebBmYuGAgZf198oDm9r1tE2FD7RdEiWqBX8",
  "key16": "2WSEY5iBiyLMo7D3D4ZqFVLiH6ThsbzDiobfs3MVJ8rQ2Gqu23vMwR1hHbhoaPrd5voBW244yQ97h7piF1jKEko6",
  "key17": "3hi4URJkVd9boc3jkZMvdWVyBKKMydxP9jgLSDrtPQjJPxv1VRGjyvkzaREKTeJfafPHjZWwwch1n2k8gJvWLb2v",
  "key18": "5SduYGMwDHR5FfW6642t5qmnUhLRxx4Wg3Ffy9LdREWEsBNzhxqDCJSQUCnkuVmGd8asAi3MQDRmXEs2RmjkVcLR",
  "key19": "2Q2Y5UPhpDEGDXch8Ys58PwwB35bVWv7rXCVDwD2eT9VfYtyz4ReMJyRa9eBAGoK1qP6XRjUJDmkenYe1Je2BJvP",
  "key20": "3sYLvKZPXnyyUzw4fo3hwQuPdyiDb9dcocwvtCwCvQeXYSisyH34a5zponfEgZtBp1qZ7kKVr9UjdxxhvuaPDxBi",
  "key21": "55YzvGYA3zGpgwZr7ojDCpFu6poCDi3t9CRC5VR8XLxz7zpt3advceFtajMdtMP9g32n9Hf8yoQpviVB1PK5gyQL",
  "key22": "21uXFivHMaBwkQrxT4YuLX3C8KSBDK5e83CwvzGx7zVsAoTfdHRaWxDAFH4XsQFVFifDoJXKbSjTXjrPGxLpc6sX",
  "key23": "P3s4AZgozQmZeQxrPy1zbHwuajTm61WCFxptygX4mfMi9myPBSuu97Gm54KW5rvk7qcwsgU7M2jyhke5hucbJiL",
  "key24": "41b4TM2qjDwAAMrLBuZr9y7oCQf1Q8ctHw1GQgDXdLqnB24oKwcbBMBMXPMwApqhrABVvn8RPhWJMQHN8zkNAshu",
  "key25": "32Zr5Ki2s3u7DWA8YDNhBaizNXKagjaPBgk64tiQpvjDSMRZXY6fbq1tefirQrvqeCFdAauEF3XSCDPjA4xci7UP",
  "key26": "4wgq8irRhdEzuMDsByTcs5wPmJbX42frMQpNP4BAZuwp6EVFEVHbEYvYhaFw9ewmQ2Cd4xCVLZnY4ZZkffJe2Cuo",
  "key27": "3fjANojYCF9qiHXKXgH3kHSMxxfTPbW4RXR2S75u6bATxFxZn6jLoa2wxTHwfYMS7LSoMYeT9PeeguPECfZVorVF",
  "key28": "Lo2s818ktqSPJtZcci3m3JWMVKiT6jWYfVbaPqGbmsCQao9Vxd4eXjNPS2HRyfgdY3YBjzeeiGqmyBbSr4uHMz8",
  "key29": "4imNiZG1xBVSDyJmvZ4Lpb7Lwab6WXq75sAi4mZgTmGAb27toYpLErxD5e1CQV1AvqRk9YbmM7CqQnasoWzBDrvb",
  "key30": "24RgFFN3EKQj2r2SU5ThZWCkwysQySnQw7JmLbyX3YfuqsZ979c5dZDZuLYn1EVRrLnfXGiG1vZ3dCheSEMFqAMG",
  "key31": "4MsxMNkXL9Px9zxPYSZRVP1nN2tNfACJ2f9mq8vehzL3s9J9tGgEbEtY47Ej44yVLmohu2Xby8AK3da8hdLzUPDJ",
  "key32": "4wzKggXuiWA6KbMuKRq6KmQkANYwTcrXm8zmy1VWAsvptAbpUf6DCJGb21FpJcvzetYH3UueSCosWsYqFKcW3vg1",
  "key33": "5dvSkW6eLaATBzEwrujdvB8NikvqUWoELDG5dkVWPzfkWvEcAW3JEqMUNHFLZeN6Ge1piRKJKBfa4Xyo1fjpnsct",
  "key34": "H64JDxDd8y2WSJVUyHMpicMLeSDC19hFTgJbtihdbWVWSqxnmB3ic5Wz4hFK8xr7Znymn3Jbnb3PfkvZ8VFZW4t",
  "key35": "5p5dZMKv8vYbvTcJAc8nyn7xJU3xKjK83ePvKyqt6sHrv3aav6ZbHCPNpGnqGCXgZtvb5rWaYpXcZdLvz1uUgbAm"
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
