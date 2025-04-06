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
    "3At7uqJKtDm1pEVkXhqSGXghNLY1NUi8DvQFeG8T1kADkRd5yy62CwybtABLZQK356yRHKjojRH6RxTRvvfQ6BNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nhxgXWGSbwwkhPyUCFM52qte2bZMfjeYMGMqv8C5bwXALbzDgnWenAUJZS3Do7WCPvpq33fkExNmmuwCJGMfVuq",
  "key1": "3kY2vnc64iNL3LTh2WMhBPSa8bGxcPHfBZqdyirWKbgVh2hNe8HkxCPUtezmvUUwnHSVJQxgfP9DaHqNuj1rmha7",
  "key2": "4VY6VsqmpvYCft7x6hX9kJq5mXVfvVbs6s1TGtmvKYu5id23sUG8twobL7hLSotwzZxkkJZjTqbdNQP2Y4Tr1pjx",
  "key3": "4Mbpewg2ERWqt2xQk78zevxgueME4kd12kbo66d9PNKX3vE6a2jcYQoFiha8u2Try62Xq3a6cq9jhUEf2Xv4k52W",
  "key4": "5J2vWrMB2bX2vse6AcDR84T7b9qUvxPt6t7aLYDw4dirsqzsYxrZM1UQdNLeGqj4spYVvksyRKtkYt93MXgqzFVq",
  "key5": "esSRDmUpYdpvstxZRjKxc4o6fp4z683wtqeJAcpDSc1uTEsuUdk75zHKGcJ8T4ucxK7AnSwmimBnfzD7L22hjeq",
  "key6": "2xoVVuVpxs3JJiYCKQtCsDvxTTyB6MhVzqywT7kZqGVXPfPjy4ujHDGEm1pHVBQnaKZZmEgXPiYahCN1uEka2nGr",
  "key7": "647QjiacTB3q8QZTckatsbtZJR5GUjHoywytoyr7g2kd3XxMgiuksySrmmSmgtrQnvLPeu8KphYiuFUfdnokyYom",
  "key8": "3tG6ZDj71q5R3EcBKFtaAweydxXtF9XKRb28yhk4NAxgbEpjprSk36LffV7V5HCPnUsQW2cHqXvafUKYxYb4nZPo",
  "key9": "58rgoKwXMVmGEuAMWGTTDDudfAkSNTQxdoEgi23fp7aNqHGVE75FJzpiisoFveM9t9CjCzp5YSSx1EVLGfR93Yvi",
  "key10": "t9w91REfLNAnDjgfHEmgLTsyTLCn1GodrvGSKh8zbPtcvbgKb6ZBvMZFDA4Fif6UZXyr7LNfAqzVck5Ejm9f4w1",
  "key11": "46XB3A6ZsV6E4sbabWRtB718VEhqN5LRuyC58ViFUnCJmqsFDS8mazux4jpgxvtg6S1iQjPvVymeyzsBdngYqs4M",
  "key12": "ydKg6TRdgnnTFU6GsEuc3krYRGEahzhYmDjSDcgkcMZi3kbiscmrk1b9Cx4DNiQfbZ4LqjczFdQRDTcY9je9C84",
  "key13": "4jyBZCkxtGx9RUHRb6ddEyGAB9epxZmXw82RxF1gsq6Xoak8EqsoDepENBg5o3U7LhaqavDsBFgAH7gKZT81s3g1",
  "key14": "2fQuDWZ5fqH8L6qAYbYkAk7TW3dZVRdRbxwHaZsB6vmr5Rs1PYGfGoGPyzWZQG2d9GRAxVwVLZ9dK92HEGPq7vyQ",
  "key15": "35oGu7exeaAotZrGrtnkrU5yNk5hc2nroqRb3k15zk7MMSpsv6zFHGugd85DG6NAt386styCCbkCx1HNXDtA6o38",
  "key16": "2YjqoC3MQo84qHHoakMtSbyRLn1Y6g3wWTnudSnvzQj1QHNiqJtDhgp8zkgLj3SmEvaEDxp4d8Kx2BAGMfkWWeEe",
  "key17": "2pp3XS6oURRKJURG2NLorivHXsgGmBWS5QYgwPZ7zSFNMe378CjfFXLmWpGhQj8jmsxZzYA171X1CSgG4ypWTciZ",
  "key18": "2v7SaZT7UaF5Ng5T3F92t5K1GkcbQkMfSBHL5Ua9JgmqGc8EmVtdUEdeFT6MnF8E8Recdjc3aCxC9PjXEhxiGpJt",
  "key19": "3hWRgXmRkB8Lq99SenhJxtoqqqihWQy6PcKAGFdTQWbUjMeroDTfFcUtzkoHur9WSFaW8FZV3SHC1y27VVpZ9J7S",
  "key20": "3xyWsq8SU6CFdgdmLaut4818VdvTuwBzSVQTuwdoUJvCCGvQDjZ8ma7sXi3DQK2SUbrvzGqUZGGCtwYRBUzJcajN",
  "key21": "4LF9Hitsj3zDuL9zakpbUceNfKUtDGzHzEu36CfFAMJ2aTbqaeNpuKFJ1itEdvatDSRnbGQ5V3pwMJodvPyxQa7R",
  "key22": "3gKh3Z9MtybxeH5MGPk24VGbVdmpux3UyjehqWUy52ymMRTThUgmsVrTeK8zGq2qqzcD5im7spq1RnyrBmep7kmA",
  "key23": "3d2Kxif2ad9oVv83JYqRUTCMWfmVbtyxY8bHSdCGA4896BZhpAb8XAtLuqJDzcMfj1Te2AQM2XVcbFHeAnDuPf3n",
  "key24": "4aSoAgra8nGAbZ5nogPaBzCXRKx1zY9o6ZDmJEQeuhTWTeDUCmuYKkSN1vqWK8pwAYzQ2kza9tSC8pgPGdg1HNcF",
  "key25": "3PfswY2gfkDs9tL9JNM1Tks5vn44AZefdU8CrKD8UqyuBbVLssHRMRZpAAtiBj9dReV8y7aFpe6owfYeS6d9akrP",
  "key26": "SEXVvfqHn1omZCFzxLYJZm3CFX8CRcdV7aPE4NCjE2AV2mfBP5H7mqKckA9oTC4zwbt2fNSU3WCsDZB81spb6FU",
  "key27": "46UmMLsJF3zMnpg7iH7bR3TL984R8bccGDnvsEtUoD2gH1zdKobCvZ1UmzqmmwREZHn46wNjhRMDMMjvUzyxBS8P",
  "key28": "2jBx74Fwet8JVQM9dN3GNNAEbyigGiZ3HTa3yWFytQf8UcooJ1LJaB4jo6LbyC1ZuADVgKCcCGQ5Sp9kWjCSTEa3",
  "key29": "56jENw1G8UxpK9RYnMdoe8q7uv6FoTWxYcWY1HVrTXSzwFyCCAC6wiDSihmNKxyEpJnZuBRB6Pw7rhNvErrrFvaa",
  "key30": "3YPa75Sk6L5wd98JtF4MHS23FYnCoJprVJEYJ8EzVMNqxbaRZKkbJ7LaJHhPh8XXZaZFa13dqmR2HwtzuEJawXFo",
  "key31": "5g3eWGnpGN3zJFf5ZJAapaNLaj2QHx1QS8Wr2JFjXfY5Arnk6wuFRH6ybbjfzJCE866GvW52Ei3UdcSVgSkpmQgU",
  "key32": "NX7uiG89o4Sf3kpchQgXGmNrtxxrjnhDM21TDFNZPBNqHuopfDzoA8B1TgQzvEtQcadDUzVQynHekjZPSZQUy8D",
  "key33": "2Zqoa6Ruypt7ia39Z8FpVyebCMkj35FHrUBVpXzhM5ZC6JJBZwSoqdjY8CAizQV9ukFrdzwHPAhGBUaq7nye54Qh",
  "key34": "5sSLzGknHNeC75oPTAyphP6nHSWBD2jy67FqX2sDDYiiCaqgEAB28ZMMtxLnXA3h2LPXNQzjTPRvjybmDZuMbevY",
  "key35": "xL9ajwnCui242wrwpb78qKvc6QJ6d1BjF29XHYPsG5DRVt8b9uGSBMNV7KEPkqDvJqskvvChFGw4z6VwbNeHHrW",
  "key36": "5W27eDh6sPGzzc63822Q2HZGEHQVCFq8nsBY8w8u3cL3TfWwsJC6q6Lh3khcaUBPDkrX3CPEBhcFPA5h7KuVK6v4"
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
