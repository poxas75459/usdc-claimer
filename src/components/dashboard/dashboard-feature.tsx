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
    "3ehY9yFmqtuMKQUQnFmnB7RvqNSVfYTqz5KLxJSeF6vqg2i82hPsUqeY41dgt6podiTNVpcZAiiMNQjBYqkkjcjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttTAtSPuGBaxLebJLaYUux2haYaau2at8hymGcRKHeSD7sZ5cZZFNMJigGb6PMcXsYHFiLAJRBVDQazApjcTxfX",
  "key1": "3fba85FQEiKJY7CDp64xoXP9muJRzN5YRiqcNPFQpBnWomuXVFsKBCN2LrQ4zYq9wB5PsSTF3Ko3vXh6MRwqazpr",
  "key2": "2LD2mkqi8LyjAvpCJTBAEQkZirHKYTeRUWmbVw27knJeDbci1aYDJmLZbdbZ1KD1mbyt7BP5g1QXrgBDhGMWvnZ8",
  "key3": "4ojtGsd8NLXVRHCAtnrCmaCRahi78Gvbn1Dqfd4fTupKkCGwinHAhQkBT1KcCaC73GB2qVCPSKTXcLBsQhuoSNoV",
  "key4": "316zHvX3zpeY6QkAVefU32rFq8FDDbzdeuXKgBkkBtnHTqG7vgSgPdH816V6nnCX7npwByjmxFPWyFvfWEEikDxX",
  "key5": "3mdwAeD1bp2he74JV4gXWUtST5Cmf6t4TyGyHLNn9WyBKQECtasti7hwqyCBiYeSmgfLia4bSDLJyNpq79bfFgXw",
  "key6": "5ANPA3kPkZ2MT9fjbs1NRjBgBATLoNriogP6rz43ALWEHT3fXSEko6iMVNkB8cu2RczXPpz32QrXsxY71qcbsQhJ",
  "key7": "5X9JoqsCK2VjYJjpw3ar1CJEQTPpGw8bYAKfNTU5nksJTp9FbuBZHkPDqJuKSGTuPM8My9pYgT6nqWrNS6kVLaKo",
  "key8": "2mUfMa45mja9WQcQx4SyrGu3x4DpYb3HgoNk2cri47tybvMBBruBicQPxQXPonZGRt4qGjWH84oQu8Vs15RtnoAN",
  "key9": "gLrVtakJxVrHC1iKpkeFMy7q4F3qL8QUY5W7mmnUFZZUNfk3baffrGoqcWzBEVU2yt3oK1o8dYw5mjYqP88YGqT",
  "key10": "29CXpvybtJrXU89HcmMpxaDBV6FbBkm7zEjxrfhJpigubyB4AfjGGvgMVHYKVWY4kgDRkEv8AXuuwKnhm3guX67w",
  "key11": "54heHpWGhA95Scv12qzCxAP1tVDYZSqmgocrvdGtDQTqp2HDJZFCUunPgUmdBqUPFzge9NhBP3zRTDb4a42iwPjU",
  "key12": "F1FNBbkgANttZ1o3TYVV5Sxr7BuYwWbgzux3nL7qk5bik6p7WFYzAT1CFSrvQ82Hi34goiTanuYRVFPUpm4QmST",
  "key13": "5CmMdJNj8bhr3Lva4sDXMDj8GpiTbzpoVyUZ4NAm622vxqRPoMx9M9f6C8hZv2wXuFxJevKQWKNo7nFxobYHgxMY",
  "key14": "ebJGhMpLx5r3TpU14XwpiXFFuG7rzd95vJTNK5J2eSTkBj7JmsSiSKvnAdDanWHLtbKU5RqzwpThUCcDZzR2DHc",
  "key15": "8MofFFN2ref3oZVDigevLfXqCJkZ3AEcpfwywv8ueWTgi3B1rYHmqY9EGT1a3Rym1b5pKETnbXRMtRZdpnn38s9",
  "key16": "32JJ5ACuLoRon45YCU1MhEvJy5LdR8UvQwAMF74rNwrDVpuPAHbZ978hx4WjNy39pmrX5PbYEK53g6f5pWbamtNi",
  "key17": "29ggBJK7XEit8Xe4YMNqi4LUtE75EFiGuMQrAbAAn8HSMucAQC9kxAxfNcuSU51eF8aVA9xuJ1rsg1tiCTyeydTk",
  "key18": "2ruwhiTCqgbFYaSHjZwVNNfV9tC2XKAPnk2AHyNqfRMnaoMmodN8XBAt8q747qpVLSfkE67ieetE5cBDGUdRtPxY",
  "key19": "4kzJtVPCJZwStWAnna7nSMae6wbzSE6KhHDpxRP3DsXZQdrndKdjEQmqHHJmEtD68RwCdRSTUQqEbu5qLpim1AyH",
  "key20": "5G5L5V51ucDigzaF5uX3QSUniGn78Hc9XSF23zEeLk111J7DR3h3bBh7LFzAAdkdizUS1BUYnw5SfKhxJvB26mWs",
  "key21": "25yE9LXhVcQp4yLa8AhQ4yFXdY2gzYVMQDMTapKzUeAbRhU9PVCdyiRSZK5CTtD1f9X7fwAXro8hEc4Vd82CYczF",
  "key22": "5yjdoVaJwgn1SHtPJtSmQfsF6wXkfxr83dA6zdoe3UWzAgiw3qnMgQffWrgLucgKLNsc8ykEaQNSMPxgfLiAwFFq",
  "key23": "3hkCcaRvvWeCh2HnoPWJJxEVmfre7dtEXGJ1LpxmqhvtmKoks8cSZEYau2mL2TKtDuCRsB9BznNPpL2DeiUnW9Bi",
  "key24": "3Ruu3zFpzSMdSViMoYPnZEgXv14VzA2xcNxH8ZonrbHGtmjucisn641RNNye1oHL6aCCkRF5E1fL2wLJEqFxrGJs",
  "key25": "2UcAW55RCg4qFeMUMLapB4ChziGACx5xqUZn5mcD5TaAAhjqPvFnjDau2hZEwakYMnSJBJrugauqz8ES9RFMgBkX",
  "key26": "3V2pdCWzBxudLLHoyY1rNAR1EdH7pdi3pHkCWWyHPHFe5wvRXQAxr6bVo1PNsywpAktm2LR7UixbT7KD93P5NvaL",
  "key27": "SKV9JQ4hDvJjFgk7H9855YL4BBpAXtLCphseK2MqxEpCsqxfZVingi8kbW4hb8ZKUpV3sg6z52GfoYGasBMTXhY",
  "key28": "5Cyr7LZbJf8hpAnKLRcFBh36Pn7iuuQoD1D7p12kfppw5ayFDbhryE9B531N7F67ebATS7YBbiAPdxHewdrDE7rD",
  "key29": "4pMQ1JS1uRbjpqrqMHpED6P729Se6sD87XKKFSh67WmGJBCq45eBavrqJwDSNkgjRjpnZMpzXDhnQoLZXbHYNH1u",
  "key30": "4bcXRmEBEGiAYBJRbFHJiUze43dhZMSK3GrfaX5jQDdFjSrVZgusepKpaqabStoJcQ3Mq7CSGQw7gd8qmbWR2tSb"
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
