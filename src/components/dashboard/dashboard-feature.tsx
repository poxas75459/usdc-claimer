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
    "4owA3tNTFbAA4jveSx8nvqNVn9k3QToKw25x2PPJdRSVdyHp488AtD1E9mFgMcfx73gJBZmWsfBzyVoZ1kPmZTHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gedYR3J5KYbGFGmW9pfrXExh4ZwAV3BdcvLHfj1B5W2esfcwNTwSCRSifLFZ7x2VYiicxnEZ5ULJenoq3kfSgE4",
  "key1": "3uPGd4RkFDXMzsJF4x9Rs2jUcX9XML8JkMC7eBei4GisDe4MGdjk8pq8frmfS3v5B2TfkCab1Lqj3ZBzkTooANMY",
  "key2": "3JobJtUxLNLgiD1CHuYwqBdmphDNy9fwaFDEYJvNPg3CKdMEQQBLDwm93iqzgMJRGyR5uZ7h34fZuBHA4RsJFXFq",
  "key3": "4i2U91eaDzvUZFjR4c9Ug3WG5CK2EurfSdi1rCUADEFUs7h18hwge3f1NGGkniaVikSFNmpaTeLxbuZL73jxTXEe",
  "key4": "5cKsxB4Q8YmhMgTaCvam9Gqjb7vppr9v2LqQUSKVCvMmUAiKjLdGyHvbs8xCwuQyb2BZd3Uh5zmUuLyNfAYCHjrN",
  "key5": "45y8xp9JZe1MYJBX2HsDRAFmiHC8pdFpFinwsSN4gbP6QZfsWLVss6rEjqSsmh5btcPx2xz5wNhYdgkNPaEv6q5o",
  "key6": "2XAdTcRLeDvkbianmcFtXn8KxsV88ctHU2dDiNacLU2vzUrX2VZKPumGYhmu6pj69zT1wCYYvSFoh3vE88bMC2Vd",
  "key7": "3YmrRU4L2mbqymGAQAUoTh5Hwb43meWzrwyUgSCw3h8uq4Lx5KdNwTrD6X3vMRMdHyAQDr2KWVEccXQ5CMwyU35w",
  "key8": "fSCtr9GVjAG4RMmkzdRCRENDa9Gb9m62SGZRYSaL2QTNPNymGgxiCG7ajZyiuxGc51mHC4dL9PrDcPHhrrHH6qA",
  "key9": "4Go1fFZWLKTkEbn1rp2PqeZBVE5Gxa3r5NvktV6MvxDsf5MvFVZxp3heoX6HtM2UQmYWU3G5xTWKeTivwqDEgpJs",
  "key10": "4Ncz1rfYH6oEzHnQoHuo3Qfuk6TEVEyM2fXh5pf5y324n7PgrD5iH8rnJ2eoxc2iNFXKDGPuSRZuZ1tpBnqMzkyf",
  "key11": "rNTccT4icjNK1HUBoYZhvaTeTVaByXDYkKybFPFhHx5N9dMzT3NLtUtzWCiH8zu1yDgBBDxMXxnaHWG2BtorUQZ",
  "key12": "qnj4EjdHyh9JvTW2aJzcgPDMFaChnDtTQPnVUVbCcYktnJpckZSwcJrcARRGd19aybMfC7SJoPb2pCc5EvDaFGG",
  "key13": "4Di2ZRYJzJAsXXAXseqUAV2qZSv7n1JSRNCqx76BSqrrgPi97H6jbzBmKDf9ttWAxb2zzQKm4vqvxifDRagqyRuU",
  "key14": "2LvuwnNcnyJXcTGJyZQxJHrp2SLcW3KdQKhYJu3BdUkCyygswWUxsSFKSPDouqthMjgZDAHLGmckJK8oBsmS6R9o",
  "key15": "ym7k75cGhQUVpn6Ut2YCxejdPGXEgS4imWfSCFtB2k7NEcWe6x1a7sMznsTo3RtY4tNSgb26jodSYebws1kenY3",
  "key16": "Gm63snXH4Aomrk1mVDL3tdV1LLxzMQVBdLxmESPTyTMq7TwPASuK7HY1SyAe5HXVBYF2GtPXoKUEX19MwXMLsBW",
  "key17": "2ropj5fqc2DxhKVwrvu1oitNbtiGHU8QUgr7Xngw2tvQMbv9RPK7S6fqkgAhYScze3dfZjVGJFrCpua3V3uLGBZ8",
  "key18": "PhVBswGn27dbSyNQZAdRk2S4wyBvAGNAZh1MbdUhrLAnyp6qpUTLmDoaZ5hhtuDe3f6qPQBsSE2tcHXJryAetb5",
  "key19": "TonZ7SaWNb9D7s1Fmg1mWyH5eg5UXm9zw3Sfts1tAxyjtQEaQokbjdVm8qH9suJcUvU915GKAjNhTVGFqQSTF3w",
  "key20": "3odY9yb92isZ3gu24CqJfrfWLbkrgQsc8Mz7qc6QjG4ajJ15nPe37f3MXX7jxTpdvrofK3bK2Ca4BunaLvrG7Ryb",
  "key21": "67kP1mMChm5n81p6198V4qUUCfFiMRouuo6yv5jxJxa86NFubtyvfqoNgSm7m2SLw2y1WkoRJ1dbSrM84HTnQ4pZ",
  "key22": "3hJhL7v4FYPt5R4yhFs4nvaEKj1vvNEmdS7R9bnPrZLowDx6HNR76PzfUWAN5nxJW6XyQVay8P9qCTzVfPxVurGK",
  "key23": "4hoCRpnXSr7rsD7NspBQPR3GqJWvdALqmsPQTrVRPSE4WPVVPB7cKnWNaXcEGTBhoXwGTHw9MaE17dZ5nu3TbmPE",
  "key24": "2TXR8KYEe3tm8ynQrciD6wkhiLdWctmKT39SDvUr9tBmKEfFcN8VkXBimRVxgEYMpjY3kVYjH5S5R6tcAHqRtUPn",
  "key25": "44oqTMNGVGVppPTKX66C39BAjyZaLo6S6u5QXFs6CD1fYn37KsPjDBEbLnCMmczgb67mToYUVjRJ3WwDGyhLVnAS",
  "key26": "3Xpk8oB16SZBnQJEnZKrMAwUohVi86rtvMNSxpJy6uV39GThT4UZU9qGdXoYkT8qjEKn43Z1duR3UEB6y7kcFoA8",
  "key27": "5dKSLtEDut8QymjayPF7s6gwsJ8jHgH9kwFgV8Q3Suq2dfccWj4VDrcL8AFM8Dpnay14p3X7G1H7mFnBqPFpZWkQ",
  "key28": "2kfS1JA8zVXXc7Ai41ibCZL72akmpWGa1yGBV4Rqsq4PVcPT3ooLjxEMb7s77hYv2MDKK9aRPkfgRMnq5ovxotGf",
  "key29": "34vuKJgKkD7Jh4nR2qkqK9VivMJ9viAieWLtPkDcNPtShgfDyywdet9tDgjSmKnanVGxmLdEFHnYSPYyWJptTHKN",
  "key30": "78s3sMFmwzASx9VGUnb76hnHw1KQHrMoUDhzxKY85dG4FKfpMAtcbkXZBWpoh6c4vFSZRAVsdoQ5DgP5CP9ppRz",
  "key31": "Srs9ido8aRjNXKGVHJvCUchdYKGXdNJLuCocMYaNBczwyLo2HQZ9MGzPkxEcw1fEomKjv8dca4zM4YGDp4cqn58",
  "key32": "2zDzQkLcMNB72VC8Whv2i7d8RuVMigH8Y2aDVMCcu9LQMyxaMKSKnbXCnNq2HtHT35kTsaH4wos6qY9cQzUqRtsx",
  "key33": "5r5LDcjSK5u9aUctCqKNePzs2yqhoPioab5GgZ6rdGFBeo9pAZ3WPaEN4squu1prD5ihPfLZcrSAGt5YDKCYoHt6"
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
