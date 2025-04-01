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
    "5X9CGSBC1X2P71D7A8bvsNkWBdjQgi4puAnZZGU4NpfYhCurbYvrcGSnYdshdYosnScr8oRCu3UTn4613Ue8RXm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbLkSxUNz8G4o1sECKU6uf5ZZjbZ1VASJUBhqAK6oBspRL792VQyv7JzXMnmqXQGDu7hybzm73DG6kgeyDPGDbC",
  "key1": "5jDaNJUvLwLmMve4hVva2uhY5sEn5pEzqMJ25UDZ193kWw886oTADy6kHbxupzhchaN3MpjtsgGk7gD4tcFH3umk",
  "key2": "33P3JANhFo7cdwBJuUFgGsPZhmWyKkYYg89rDoAbXsuBVynzUVd7DrFYATcj8QwosK1DvfiELEZoAiHjx8awQ5Zo",
  "key3": "bACXJGRD8igrwvzCrBLVeM2YEoMrfDwdLaLaotEsnpPJaypBFwH5BcUWno41xYWFQL86gHAwZZL5YwaTiXBDKJk",
  "key4": "tRBDPDGbeB6zWxqnkQkJGFrapxRnBKoKzF7ERS8v9ah7VAmo8GNEMn7LUUW7RHXrZfi4BcDogEG7FzkbQPjhgtV",
  "key5": "2q99wxyi4YVasVPUXAaq8shde3YvxAxkWQ8nwUkcFRSsyHJN39Y1UsUCBfMh6Su5ZX9Z73V1D7VR8imuhqumgp6k",
  "key6": "56zxE6vNgVGPXVQfX757qBx4Xw6GReutqKtsLL3xycaQhVxoxq3tL3puc2yyDw47N25dgVHJ7SAVw4MqKWzJrEuy",
  "key7": "2JNftu6vw8AHPZ7GSd5wHEiRUUV2yxWWutFq3bwsccFzus2eqAGyUX5E4mYwFfSTGw159vY5HbCU3FZwd6K2X8TC",
  "key8": "9F5mRAo1iESH71Ao5H8FKrYoS4jMNiEzYKtpLXJXGQxi1Z1dH7vF5Di86VGNvkTd8sXs86True7MzkyaHa9Q6cg",
  "key9": "65t3j77rRff1nGh6symnYP6DsJExE9ckCyvXz7xrhLgLPbpUSQAhj78KFugsJ6p4yFQNc1KUrpPr5acAkJtwzxVx",
  "key10": "4zHm7PPQeWLFTyrcvXZBeeQndw3hzgwBWVqPyJTrzVtYmpp6upwPxfuRLQEe1S7tm8ELCke4bAuQtD1RPTUyPfr3",
  "key11": "2ryihUbKeHSPoJfhjmmYTEENmykmEdvBD1h9kqtNr8Ac1QDwhukWx8v1MKdp5rifEs92oMXSxo11YHZ2ecPkmw2z",
  "key12": "5LZXGKfZRpzsS6xZfkBrGGwiZHMxsD3gjfs265Y2PXrWC86fcShPGsnmBCL7yFNgXPkVQgCWT8kvhwLXgvzfGC32",
  "key13": "3ysFBT4qBn3s6K5rrBffGNFGDrKS96VMSCWzwtbSCeQxED87Zk5xu5bE6M1n4Vn9iSx2ryu5XWWC5TFAGFvRQSYH",
  "key14": "2z9PskSubHVqMEMnLC1Vge4FfjTK1WULJePExLujsMAV7dCYow87haxGKhLgZRTCgoHCewqiEUva4twFNXec67QC",
  "key15": "24NVpk9Ap4N7QJWN96L1d3UQtvMe5obNA8Cq3c252ohtf9Ri9q6MKcMqYeHdQxdRXSr3swxS5e1VR2AKgCeXvMJn",
  "key16": "3RuCTftJTHEPzU7FtuJHru4391NWQGmuPPy3CU6qx1yg6miJLkaLgtdrXqckJLYP6jDKHmFkwpoyhsRUsu1zxQwJ",
  "key17": "3h3k2rsgvEUqfUdGZNXaqTEsJQKUaNTaz3dmiXji8rKfsEgcfyfAwFzrdJo81LUYK945Wwqj9Bia6vPcU5kw3Ek1",
  "key18": "2AP5xQKAgCTo2QVGxXep2FsZ3cKNa8qRj4TEi3ryVQHemAF7pQ1h9SrvZuPJ96CgfhPD5RGEk9EUBv5UaNUBTFdL",
  "key19": "5s1HuKmWu9GPuHNQcMeMr9LWYmn6MuiYw6pS7is6c5iCXcEV9749kErGRqGmU3UeGrTrM1W1bXD4ozzj39vA9Yqs",
  "key20": "5q5Ssw8sfZYrVAT6yiAuE3eBw1sBSsEMUhUqYk5nHT1eHyzSuwCrUrj67RSHAA9AyFMR8veuFzdDwhaYJ2qK2xxB",
  "key21": "56wW8X6DnJNmUXS8QMjdtM6DsLByzCEhvBx2pMZCcDNgiEdpi41EV5QGnjZNNQmdQa8SmxsXmaZSuLzhEXyFiPPf",
  "key22": "67gUn2yhzEKMaPCWeHcZbFLbMg353nGKRdgikHkxC2SmU3N2oZBYMesnxZevZ4Lb2hycR76ZtpyUB3DVQ15WGFt9",
  "key23": "4gJYtMUXaigp7jX9J4YhwFuJcg6wpgh4LPhddZtcmvhQ6dM3vZfWjiXC1tJrTcqKzhEaJZvr2uDeCbpLrn4GbecS",
  "key24": "4vPffGhcAp22XquVpUg84tu6movXxVXXJeEnudWm8mEzeBgFA1tKhap3LVSbsZEj4E4VDERPmx4JjyPSUDv1xbaE",
  "key25": "3Q4cff85ycixct6hC3v95QXMDNhb645D6eu6CXDgubDfyTdLsxUgEqfMKtj28MLBcg56ZBXvVD9oDrFpu1d1EaoR",
  "key26": "btgrkGG5iksvaBtzQjBdi9zZqsQiHVRpzF9iNSHhD4EMRQvrpmXJ4a3cRpX4MyNdUo9zwxuDpqDFvpmush2HBUv",
  "key27": "3tRySYcfKnVPATPdpAHx3Jx381teBaQgjZL5FKg5S1fHA6VdGazzNWCCbNwdQ4j879ftocKHrpCWtUqrmrq3yX7m",
  "key28": "2ujZkvf4CEp74Yx3m5mhZHZjmveTz111k5RwmfGPaQ1Bi4L2BTnULpLubSeh2RzZmMTbhmkxVNtccHYoQBvfh6KE",
  "key29": "uFph8ACDHMqZFyxiTfLzW2Ksmeigp3XGdbKHhkAJfnRQD7papy48vyHheCYhL7MZYDPemkLHHT9EdGouAsXpsEm",
  "key30": "PnPKMum5dZ8cyqF3N3c5kYf9JujtgUGbhzWyxrGQLpRbpXiq3vz9ejnJX9MBBDrPGqTww7f3a9R9icaMUeVopNh",
  "key31": "5baGEtj3AnjL2VgMXpyWwAuvL68MeDbdcEoZ22tTH9HaJEupUUyvSNTgb9Gg8zxWxGiBU1p7sBq54sT3gVgsD8tE",
  "key32": "2Fi4fyRa2aM7jLLy3BHmx2ooYjz8WGSVXcM7CmGdNiLzmsZpkx7yEyd8KfQFuwEfzPhhkX7xAcFNUFtRgCytLdZy",
  "key33": "5LjZdVgxmQiA7d7m11FoyLrdqWZUBF4T1PHB9FoL4Md4px6FLuYYWzUhzbZHFi5H45ATB16S2VfydBURkTA37XbU",
  "key34": "61pFZfQJxfRGUWbp7AZ3TKmTUJTtXxUFMjeLHzYpUdcwxCCrCKh7GP9iXvMfwScTUVBSULK88vdR1zKnSsa5wuvT",
  "key35": "CcwitS3B33DXpEwJa9bm6DjiEAp9ZQ8T11B7wpMY9FGXRR3amvxdoYhQmF7uXpkWQu4zuPUpXND6YaaSMnc9kAR",
  "key36": "5qupxMSnLnCcuyyEHVNiKQTEQjCm7kJU1JwHvohcXXME8DPm7TKSezHV7TNSxZ6fdedPPBgDBbhPUDgcFZiLcWP7",
  "key37": "C8mK3N5E7otCfFpUkc6zv1tDtPA5v8YeAaPTan2mCtmD3ktqqhcYTWa9zJndHAYYcM43ZWgRRDcqkFuL1AFM5jh",
  "key38": "2LRCdCf8p9N33exor4G8iz2Ls7rJ1o3H7Wqg9tYWjKSKLtppMDSc83NrcFjC3HKfH95UnGvNiHnCCP4LvVuhW4DS",
  "key39": "5F9z7oeEEy5AaDQYnUG8mJhm46zBpmNL2ev83CqZX4tKnYFdhcxnDgWoz76um2KMDizyuSHAcGp1zTKrH5gvqspW",
  "key40": "WhExehRyWtZUJFQwcidL8ugnz68N1JaYzcyqE5BthaVZmPuGGiTYXSfWz5RgYvhTTNe6NeXLU2C8KEeHAyPwvU5",
  "key41": "3PfyEfahzRUCzJcgUGW9385LdpRpfaiZmFHTV5m5D6E2u94YDnyi47jzorUw5kY9PjtNUzwSJyZQUBZAn5XVRZJL",
  "key42": "2WRjYgNser15ph2jLJ9oBjpHeUNr4sKU5otPTtEs3sPGuiR2oFfSFXoY8BFmftRsBrpupD3e236n4AQRNqZerMkf",
  "key43": "39uJJoA6Dh5whPwXBnFFhGT1Rcfz1dGWwZqwhSNNYgaDKyfLN92iKWK5wwfmDm81hwy6pT2kVgW2PEhx2ubFhzXp",
  "key44": "6pe62618BRWpaBbvtAhiunWzTaYPBUn93tNaohCW86zk8S5jLLN7sSPQmHEZzyrKJ2g6ieJquxqD7khjXgC8kPi",
  "key45": "2Gw7LdDnq87zEuyR7zi4YALahcBeTqrZBVpcScui7dyMzPDjRdCH44HAxpBcoHG6n1PNa5B7wsh3MqmsVc76SkVF"
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
