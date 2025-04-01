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
    "5aDEMDNDJxk8kego33qrS69nJbZsQw3yweiWh9zkh8Cmr324xwJBz8mc9YnsHGiXAprzDXH5WCQNf5Ut3xyoFVhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2diQZ5vVsVohWSZNSkKV7vCaSgrfdmQUP6z6RzhTr5TDUZajziSLuxjimdHP5NqsbcQjNXESqR2VGLphFpcGCcXQ",
  "key1": "8GRFJgniVctWpy79EhEDMETWFM7XiUeSQMaT3pUJjfUQY7kE9hNCqd33jXy9XjQMXMhXtEFBvWYbbxQeAaCqoBc",
  "key2": "4T3d8VjkfCnYvPVqxdgraywpkHradPdgseibVYna1h2cmXjkzXcyf1mFh6shUHeF1jJB6YAAHxcnZJzei5ErykSe",
  "key3": "4ojnEoCdWhgPxXbxJz95p4DyN177CuqG42EsYzZLtgaNwHvAgzCsBoqyE5R2cjinCGutVg4XtjKTzR9ymVDv4kA5",
  "key4": "5AjGoSWxoumoQ7KLxktzFRoSJhcUjfMZT9tUZz4TMoAzsemE3GiiW56pQZM3KsmLshfbFdSjdsE8UPWepxQRKVkt",
  "key5": "2EptbnUiD3E3MExVos2o8Ekyz16oDMDCUvVnQeFQmBSDGQQ982pafY6z8Wdgq3AAYCcC3kyPCzaA6JYQUbkzJUt3",
  "key6": "3K98ACWcwh9ENcGExSGV2np7R3bicrgC2shJpt9FFCLPsa6rytMGB7XHpEbCySLTsxEwTgZsNFyRWUPvrpoinWrM",
  "key7": "2ymmAePm8oXdZuzTeP8Ka5Pk47Mrn4GoC3uxdGsL9A9pddRxazCxrtq9nQcKvu9BefFeJHz3K9n1UGUtSBVYor1S",
  "key8": "5dyfCwsvNGURP97FokEdvtnCANEKLL1gVEH5VnZHLgoiyhTsudjSzpxmEcjyKceyVDePask7txcwxKNmEv56vidG",
  "key9": "uTG8vQakVSoMDkDJgTNcc7T1ZUMwCPUzwDva27DmQExCsKF91EuwJFmHBQRekhY2U6KmVv2EVA8gpEWXcMEJPSw",
  "key10": "ykMmukojY4fHh4rJTqyL5Sy1RTmxM9wr6C6wdGgARHPaS59dMjza39Vn7FTaMWvVV2666syXsvwnDNEr9KLfzqJ",
  "key11": "CG9yerNZ4Kv2ipeNyavGihorYeUdq8AcKystUk1BtKjjeCLZJwSzT4uoW79ET6gzqVHWpo2Nrr3GLEHfhqjQUMh",
  "key12": "5FTPaFNFPeKKxAFCC6RcTQyraFLb29EMsCfEuT2MbVvvjsxebSGd7KuQzckhBcjNTZZZ8Yg7p1Mp6QJRXKBo6FWT",
  "key13": "3mXm1zQq4hhMSKTunJrDXyuaSmdX7wEMP7ATutGNkQYeV2mGiLYNxYkmj9z1ek4FKp3bcJ7tDRjGFpvS4HRnAKaX",
  "key14": "2wgx1UvTwhg21nk9Ku42LzyPNhEScV3LxziLAwdxTAZQZehaV9o7EgfeQDMcYYQ59NREA3rFNaCitiYa5ApJoKae",
  "key15": "4GvFgGKoWCYqidWhZknhJsUCdnvkYUgsoxnooC9rj2qeMFHAP9qSY7YPFdVTtQDuiNXdFS1ehh1FAad46P1oKPVk",
  "key16": "P1NqoFcc8upop49vQCkADvBiWj2z5ehXNdooykJD2jveF2nAfV71ose7QQkKusAQ995CQRhBwiAdQ797ogVoDKf",
  "key17": "n6Shk8Lz9WPLp6eo1UptoP9zqWEsgwb6SKHprMEmq4pVJjrFM9mS9V3yHLo55iotXB5SUBSQeRCUrutPmTAqNfr",
  "key18": "2ixHkJR9nXjRmJ4XwGC3ThcTTbapQ9kBbc3QsfQdSVF8sYyjFCi5AvnVc12ZLPVDwLnpEc1TUDzFkTiXpjR6EENq",
  "key19": "eqEN1NBFoTnZFZs7HKtGAxkPDmREu2yTWcN34jCyKj81cTDao8LKEy84bfca6Ho1UeB2AwiceYQeWqJDLa58fhd",
  "key20": "4ZM4PSPtqWaAybUcqL6t7qTA8fNC1QakbdX3hXQnjjMkR3EaZBjYn2xdxY5pwjuXG43qv7TEjQYcMs8cT9ybtkMg",
  "key21": "29QpkZ1FKC2xYZyyadLpGxZnSdarum89Ya3RdfBVY6bGMUm2QL7YqyUGapapmEwGTyZcwutoGgkFUBVJksa98qAr",
  "key22": "2ZWnM8UdfC4k96SHZjyk9G5Gxc2D5Xw5XSWWwPWHk7JkJzfMN189aVcUMqoGPxPmNs2kJoiANwzDZbVymRWamK8H",
  "key23": "67BYXHU2pfn41Ar7Cs7rYQACBNRp76YYFkVdQFvhfzkMuof7cnUVvh7poB3QrDS8jaRezigJKAqDZz7yPuwrhbdj",
  "key24": "2u6jtduLZuSSMRZknEcEWW8hRYApebNjoj2jYwj2eJzKn4kzvWyLMtbQo4SLWLDa6PTLHrf8PSv8UyaVgTzB5L1W",
  "key25": "3D3MAcPdXGw7E9dSgJgMjw35DdcC5SRrGM8QeZd8VWckVHobh2MjsNbi8UmQ2eUzYcj1FCRMgXkSrehAgejT6igu",
  "key26": "4MfLNwzJaAkNKCYeggoqtBKxjJm7xN2eQAQhAPYVQi5FCjftNYgroipepmoTK8EfceTJFajJFCk4YeMwbHm4FA6W",
  "key27": "Npi8HFcvcV3Ft8wQkh28J77QpD73VWVPtaRbhcjQ5h92sZ33o8mn3cv1Zioci4eUWJzpGdGXmamhWcV6px8STNX",
  "key28": "2S21pzrLG7tBpv9rF4Dg9MjDfZLZi7rrPBrLcih4EE6bELD9a7Q5hS9PVMSaTVoxjL21VPaCaCCFLpvKhnM3PjS",
  "key29": "H3N7x8xDEp874SNSF1m3npzcYMXUBwX34wtdmR62vLUYd4K3Y7poEiXBRA75gbioa9DaLZk8QbomuicEWrQhNx6",
  "key30": "m9jLoJ96d6r5NxFs68Gn9NU3Vuncw3HcQkRWuTVJVPEsGWx9VHYk9o7L8M9msbaLgsxCcLQJ6HfD7FY1UFMt896"
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
