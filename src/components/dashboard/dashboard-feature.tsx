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
    "3iRCe72PydjnNEPDskfDLjnK82HTe4zKD7CC56pCtyvim1zWuB9X3rQLLweQFYDmsMJJFqgdaKsMQWgwAURonDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XU6Z3HD5qiyDWqCEQKKNBrRAnh7Fqw6HXZy4DbtSTMk4bnMqzbTZSPwhaM8t1xeNY42L9msN4kXMUP9RUXKziFv",
  "key1": "61dRQLBWv2MUjgoDrcKPVV4nhVgJudPWybu8oHFxfGQxR586uaV2zkmLCZXJMYeNRa1W5Ab1bXSSAmfJM6BNSMbz",
  "key2": "2MBHfTooyMjXaKFpYFHZFsP2xT42miic8AXoo2XHVqM6ifDXM3GHZyMr2LBw5j2EqjFFK5hVSdDx4YGZTyUPmuxT",
  "key3": "4JazrMNhg1uJVRNSVq2eWZeFVDuYs1jHZbwSzQE6fqHKZdeCbCcfhw79CyKVEQhg3ssw1qFov8krrE4gupM9GFar",
  "key4": "3e4T6gnjwyq1fHodhyZLNMaFNsEN1fNMbwfqiLbYLAYdTotK5ubVm96iwiNrTsJweMReqbxj99er193x8mcbhNH4",
  "key5": "4y4v8CjozhGuV8dPMjZxnWkSd6Qe5Aphq2Vq3JNvEZVWtBEUNKmXCTVv2XpLcRc4r9U6p3fQfdVQmQKxoc3GUUC6",
  "key6": "59YEay17TdhrPye8i2jLpJ8WC3NvNRsh1QGbte5UtaphgsyoV9MfaL2g2k2YhHnvwLkYzbCRTD4EQkcNt8PkGPvx",
  "key7": "5UPvo3VLQFG4svcCFEc9ia5chfnDxFVdMnqv2HWBbRKS7BbKQBH3QmYaKRQpaaMUdGkCQGFrV5xX4T2qfXh39Mjh",
  "key8": "4y3ngzuHPB7z1X7tRofzCh4txMbj9VbjzkAhRQFgVDPew9rujdXX3S8L3uubMA2CTLFhgpK47YB8qMbbUEtXfAVR",
  "key9": "2TeSPn2YgqwoxEXDYRTBNumoq7c22obFuqC4NQgYWVRKHvE4APyS2QTBEj58G1qZr2QGRomo8s23pR63EjV17UjK",
  "key10": "5mSDJHMrR5CjVcJJZHnh1S4FrfCpAV73jbCpMQReRiEoexmUaS22K8xDewXABZ4pTubxJ3vhDD7zBCRpy8Uv59vt",
  "key11": "4HjQvBVucFFtRGwtRmSMttyiBdUqX8AKdcWsEY5PAdDfzVHEt3caYA4HjhJvimttDZuwiw1wchBKVJ97YjosXZDT",
  "key12": "3RHmLznVwg11RHLuqqByPZcvULMP6Cy3AADpTSeVZFC81DyFq3GRvyqdq4eoD9f9bT99MfVEecpjwRZpbGPjZDnx",
  "key13": "2rALRcDVMkLdEd21GYpST5ccCfnDsMVfVuvsxcnnT1drZdFWQ7TEW4bHcNcZYgf2wPMS2P73pSjGqxfWuyo56GGr",
  "key14": "3K7yPKWMGQDQ5Gj5spDHkfsKSMWQQFXYSKmzKa8NYLzcRDKdSBCvkfKVMrN9HRMsAiG6QwFiWnCVKbLj8VWkH9dS",
  "key15": "mixJFxoq8gzwDEGJ7Yt6v4wLKwfF1nbgzEJjEuwYfrHTBzzxLa4FQQVuVMiYbnJhZNncTFJJTR6XHZBF1iNYhKt",
  "key16": "45ePxgPqbcGJw6FYCQZgYnR5fQ9JpFUxkmbu5pKetLx95qYeQBGa3GVJ1om6y5gVW4PpHXpmG3becDu7F3Jxcr8W",
  "key17": "2LkatvVXTuWbrd1zs6yA3Exg5mJd9MjL8aUKPfg2y2dmg8WGHW9iCkqKaHwPyi9yVj9Kg2LURAsEaemUQTZCCWPY",
  "key18": "2bS2c5odeaTxsjsnxAADstGiF56Yz3kTBTRD3fen4GCEMPBBD3fbivn47Wgq4tDiY85ibuN92dHKUMPTrAKg4wfF",
  "key19": "3Fx9HkNTC31UWrBbdG5g7hJpkzn5rNpYiWXSes3CBBmcSog5H2MTea79bV3zAPmmzF3CaPkn4igdnuDdSRWBa36o",
  "key20": "3c6PBQEAqUcAJJypFHdFZ5rGZpWxbC9hsDYJhNqHPs4PPH2K82VdzXGMy7H52DpXEMYSPVRsgz1Wb17yaHTqriwL",
  "key21": "5hswf9pEe1v1Zvx1zugPm1RLBeq3XVUj2JY7SYQz1xc8rXyUikTnGnERjNPDPBexN9XACfASq3L7ErnPHeZNJwaU",
  "key22": "4CGRkRzTsdFC6DeNG7wjAZfwBtHiZS6kWTbCuFyzEHg2CxdMDVZeWszJ13Mjoxho33f7CKCP4RueEoE2mrMQ2hyf",
  "key23": "5nC8huHfTGF4N4cKV1WU978iH9Ms3EKoK3h8tVjFiET3tbuArXmGVkuUrm78YT6T6eDVrE67eKs9UxZvzpSrYyDM",
  "key24": "3nkkJH7Nx4uDiFhzXiQyrSMQfZsEje3wgHqX6ayoEDbZZ9FSJDZEK4e3u3SeVyQ7jzMNAcU7BRRU9QRM4KZx3Vkn",
  "key25": "4yffu6hLHsiwA3UGXoC5uf3PKUf1DitAPGnfYVMdCyeUUpthBoprbH4iZ2qcXt18634gbNmmBxuFTVd9XvcuueVs",
  "key26": "S2wqLJNeF9vE2oxkwNuynS3KAVYyukELAyUnxK9ZLSvUPBYwgWi1fQEdDBRw7r4PnKviXniHc6QwZHfMXHQbnzw",
  "key27": "566WRPeQRqjGqda4WJBZM51g972vYSHhea7gE17mhYoCJySkv2yWwv4jM5h1amVDCNmbKZTuDN4Hyrsw7PcwQZin",
  "key28": "4qRGdUKtiEmGoG9BD4p6CJ1SCYPo2xG685u6vngv7hDqApSUwzP3wPzpJ4pAvNimf1j7d8q2S69MSa7t1to9oEQx",
  "key29": "5v2HMduUNN7fXhqCEcfYu3EpMyvxZsieEG1gsqc4rsw4CFQsH5A4sUgzWSrfsaX3wN6aVqERL95krDuFnrHRFXTX",
  "key30": "27Gtk9gyijkjyhKsU8V9oMTwdYDGcx79T75C7vEyR4K3Aei732Ti8HK1vfoRs4HSLXHtf8KEjg14BNhRJn3jvB9B",
  "key31": "49SJWsww3zJbWj61T68fNZUDWsuYRXXCnDXknooiwQWKtYPnjiJxwSEkpDSTd54a2YYZn5yc2g1ZeGtw3ufNGsXb",
  "key32": "3boiwM4KY8VoV6f1wJLiq94w5VsG7WMqmDoEFqC7XREVYrJadC8Dt6vrMnnis3VJMRCNGT1DJc1f2naDJSeAGKrN",
  "key33": "2dapv4rMCLHDLmSgd6dz8bjVuZCKJgTXFSqKyYPT3XFRNrVfVj4ED7bwS6J8Q6tEKGMM6V9B96t3P8NfYf4n5ihm",
  "key34": "2q6RzzqpyYXYqZtEgkeZWDL3cgZg9taBBEPTxCuTTzh3PyNdktyUiBUSBQFjXo1Pin52ihAZqBKJ8C86KBwB3aAK"
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
