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
    "5nRePj2ty7Tu5RfwwhTJmeQy12XH9mucGKo3pd5DcPMWQpWEHGEr8n4aVVAsBZ7xZLbNWGLgPsGKqjCeTW7GZrZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkAfFhwgXyj4icx1FEfU1jg8TSQNrQiSiaUHzygsNaiZ1AmAr8bD8XvSDDhpH8v5HWcg1S9kEk45r8ECX9BF3Fb",
  "key1": "5onWthuVsHHN4pJBaZrCb9KMFkrdXvq1F5fefMwm4ezT7irxWJPcTAmZA1AbPuTxkPpGT2CphoY7ccmGj9X7hAmq",
  "key2": "2ZvohxYA9pk1iz76KF8Qqmr9owBDwb7aH2xcTq1UcwaAW1ABNvfAfhVQzXHUNQuANJoa5ojL3SsEphxiwSZvL8WR",
  "key3": "26S9pNcoQ5NajxALmnwNn2Ga2Vr7NjpkGcPCfaKVdqhSAEn5DsnDLA4kWVm7anBx4riDBNP6yxHmmoCaPVZmS33w",
  "key4": "3BFq8pvQRxmpoQChYTpF5BwJVkpNr2KxGG4CKieURFtRF5axQnUiDuJb9yvcJkCiXEfBYHF3Z7AiTQmXFmkmgHxZ",
  "key5": "3FVWvQJj4hFDE333S6uj38djUHS5uqaFbbRxy89VvRAZL7QpZDSmQtARHxXiHt98KTf9DaeQM3iNbMJxoJJBXbUN",
  "key6": "4oGaAR5YSkCki3ohkXFCF6xJxTkW5UNWYb84yCkwGyEEFWQzQA9bCQLfSnVbTPeyYVGPd4iMLhh8Mu2EiuFssARe",
  "key7": "2BSSu25N9aFvpbFGtgMPNXkYRuBufzqw7MvtYZNqZxkGA4WMKCss1MsBZM6DobbrPP7ry881LTWq3ZTXbK3JTLnU",
  "key8": "5iTqwNBqivbnCHNpVo98XHYDaVuSd6msjNBNnmJHw5cKDEPUoGsj5mGjxEJLnm5YCVgSppCa1PVknQVi9t7DEkrz",
  "key9": "34NCFeYoU9QNvsCNpKPfzodbrRwCDY8UCFumUhw2SSPu3k3gGXsbjWrL2teuJ14rTDb2viW91jx4XCxwKjkNULNf",
  "key10": "43vPFsqjNp9Zv67kY4ZguXxNMQfJuhdTrNu4aoxARpNG1XTw6DYW94RwucoDdrgHBYC3UGPuxnfwdDjjFgP1VPW6",
  "key11": "37eMC5V67pFjiGCtfsK93TkHzaxX7hYgrH5RK4ZNVJWSbz3U6YwXwCcdVWmQQsa5N3ceFePnHYzNsdyQ7NbaLvz",
  "key12": "YmvkcFGQm5XbpaqKLTGsDrjvk638aS9B1s427ZJNPYDroNthsgMoUkX9J5G5Xna3SQsZRd62L65VmVqkFdMGCnf",
  "key13": "2BkWZNQ2NZhCpAme4yYcJa4KvZukD6mGErYFt4P3WNdFELnpLGUkxeAaz1FSpEcSkvFnuDZRjQtAsvU2zkYMeRsA",
  "key14": "5s5V7VUe6aq56Mx3Tds9m7tN8yPsHKm5gjzpYx7MypBKwZr66KCQCQMs2ufsQJYuzoRi1eHzLZhwjYvZehXMK9cM",
  "key15": "3me5YRVXs8MzCLby2VzWtvqzALoRizKzU3M8qBsACwfqVuapjz9JV3wu1v5YTxLW2A84Lmn1nzLjvDuVyxxVEkxK",
  "key16": "3KHw3ykfKMv2LKQS31pJ8tWcX95L8P4AE3JFqJmeWoMtau6E4FLd4sikx3p5tPEoKekXCSmdRMwLkMsn3KB6p8eK",
  "key17": "3ivgAza29inTtcCzjAYqXfLRuej8Y2rHP3FrZ1sqNtu9GCi9VYajDKMPhJohfoFRXKoRd9x6gpBuCKdN1Rb6bj4c",
  "key18": "5V3hpFJ7uXpUVp6cBTpuVyjCorhknurWzJBNBzuMqScYR14UBNua6yqFKYowXkjUr4JE9cwfkbXzuL2MhVtJ4nup",
  "key19": "5of2HunSRn11ssKjh9zLfuAnJXJJAzddV13ddK8nYhy5eNMsWzS78h3aAeLzNiMYGEY93Ugt6pWsh4z13hq8ZUEq",
  "key20": "5fZTs9Pv4KamtUQRadaGitfcvXPCKoQuX3RsUyq4MFH439s2sphTnMWFqyZaQLqydkJ4HdyyttzpSNfZFAMad6es",
  "key21": "4ZqAqYFsXiu9xRjtfHZM3Ej4HTHPeMv1ExX7uM2etx8si2z1ziyEHGPim5zcqQ4Uaqdw21rMiKoQCdUrT1xJf27P",
  "key22": "5GnC2uje9bqY8xmnuzZ7T68SVGkYjavq46JSdf4hyp1hzcWafiqqCRLR2Zw7htkPkW58Tc5djRJ3R5QShe3vYKtJ",
  "key23": "2sCyMMm3cHtm4XE4t1exvH9299tzP9ydvrg15dqUFhdFQVYNFiCA7Y4Cj38wEJPDatz15Y81F8AfsTou9h4k6rCj",
  "key24": "48J9Md582xsiPbtBpo8v1GKomyzyRsP4GbdpRvKpK5GuQaReKYzy6oLW39ts2M3gvxdXVCDehMmy7QjxXHnNuVHB",
  "key25": "21zYhD2jbCP4yjJJ5Bx5g9i5QbC7F5kWoWnAxgrXWifpd7Aww949qfKcechpHrNXjqGXKWAgygkvQPBUtp5GNeLz",
  "key26": "2m4We4K5UXYSwhxNQ585zKdRiQM8swdrWZSPT2VpZj5LJXT8NneKWW1fWqdmQLEcsSkBAfFvm2KcQCjQFXVPNVsC",
  "key27": "63hxmNmtonX5FfNpQksYfBwqks5yQavmdRXX9c2HBanWERSw4mJd3V8qWi4JLgXSCMMd6itVFDLoZjwt1Z4aYLVL",
  "key28": "3Df5FEZjG2LstxPgVhqDtFS2GYaXPvxSFoizdMpb8BPGKcy8bqbxtxC2Qr9UmXXrvs6DGQAhSRQCwMehsetEgGu4",
  "key29": "w7pKYkihN8wHD4nkcDqEF2s3ueJbFfaCFyWRFnMESgwd4h8MxRgecaRYUxioxTwaCD4neJxXqGymFixWWrNVqhD",
  "key30": "qNHKoGvioFii8p7SfzGDHtBphzc2PGnYeRN5W8GHHJaLpMramASFc63EzKnUs78uxWWguYBAc3L2mpxTHgigJDn",
  "key31": "5jvpV7ANEb6F1QspBSJ4Ne4jv7JQ3W71sWbNNrgFoGcbukdvKG2PwurgwsUrzPnxKCVnWGWciSeaMYBkXZoXS9BX",
  "key32": "47yJay3CUf94MXvCWkuXfG7PSQf4VyqGu8Pt6mW4vAqqY9rR1W2oSMqMZSmYSTPTY1JLmDAXx9dNh795qk889bdK",
  "key33": "2fXzKczrxtKzJmgmwGUwvn1foqnBekPdzT1ijjLSz6rfPCbuJBkUkiDwHPikr26N4ZTEm9YfVrzafEBd8esz8j4P",
  "key34": "5wVopTfZLQ4rtXe7WY15t2t6HBhwfq1BpqUAxYH3FqoaYEVZoZ3nFzmVRvageEnNddkSAC9A1aDYoPUg7iiYKcZb",
  "key35": "4btRF5Av1R9zURqc47YRf2hH8rCHxGELwFcWG9H1JRRDRYWttcfpDsq4daeBUyXdK2hYAQjUsrzn7uN1J7vz2Te9",
  "key36": "3hfDZJ4hXBUojLcsFh4GM4658opZojXyoyfpE3kYE4CX5xCCQeoU7ozSpPh66JH6ek6rED2mqFXqDnqzkHbD6j1Q"
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
