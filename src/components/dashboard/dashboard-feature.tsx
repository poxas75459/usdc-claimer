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
    "5Y4X5Vz4LqpiCH7aLKKPqbxZJCJnBtqqaQvEshJ9kn6J1QS1fqKhMmbrwC3upfiLnoxhe2vcm18WZ8qVX15wwBQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42muEgSXPPgoBV1bWcFZSebNWV1Vk7gn55ASQjzZbBkAzoAYYuxSdo5UhSv3XBftzN8yEvVFktrty4jn5f6hYSyi",
  "key1": "5LxdPrps85F8cYWdBbczkUsVfpn5NXAYBDADATjY1g7awztCDmhViC59pxc9tRXJfQfwo7m3dFp2JSQR1hDu3r5N",
  "key2": "a4n1QmVrVpE4FvDzpdtPBtooRZB9h8LC9F6Vdh7evbVfr4WRGgtCSshiqKVBzvHAgVPkc9q4Fg2QJdHySy1LxcG",
  "key3": "2TfnvHtvq1Hfc1YBpc1R7kq8MJhKngYB3Bq81E2expC4KPPdnyZcXv5ixk4QNm2yKRhB9F39Ppbwh8ffNgRKKGf9",
  "key4": "3gKx6sWgprBHWfx8FZ8RqYifqkBWSgwJZSgM1sFVNUkWEeSSi5YvRe2zw9zPdrXbmx3oVNpw8r5s9JYTEDYfH9wh",
  "key5": "VB6epsV271Ce4ne6joJNkZosgafdzauuQ9VB7T2WaJM35uZwHXfcsEkTNb5XYrMgMHNo3LL7FnEAa5iHTVCeGGW",
  "key6": "enkiRrDxygNnABRrL2M2GwQUmrUXfeM8fwEMxqWxWg4R4UzT9oDcM9FwLBUEYoXqkbg7brpWkSQpLGsay8xRGgR",
  "key7": "4mhZZqbocRD2qzMLPJAcYk2fW4zCrvSn55YmjdNCJv28AQ6WY6wVvKUoMj79MdGdJRDJ8Sa9NyX5HSc5ZtVqjRSX",
  "key8": "4jKe3w5MNknGcymt3MNtuEEBJ44wVjJ7ueRm4a4CnNPMmKgAgu9LhFwaNRgmkMGVRv14HPZwmdpZfnyC6pNkLoum",
  "key9": "4ha56W6YGNgc1ifYpaFDdi4SZQsx554SWoi39hQdyW9W9KPc4sLzKEYQn6rdqgrgMXqHMkNsNSphwCA1tkHCuFRf",
  "key10": "46YmLRANsVHYy2uX4PtCvYWpNkEx9oEYCadyub4TBD62W68DAdGRrhHRHRGWAzm32j2ubep3dAtRKeU6JQvNkVnc",
  "key11": "2rBHbReLbiwf17jFgQ8wcX5jpwrR8DKu8ahimVtxQqEfFc7d8b9HR2pC9RCqzZq6WiV97wPPgqKqFwK14dPnkoaC",
  "key12": "56UdF8mnFWtnqvqsV9hEHosEKmurhosPGFsuykjtHuhoVAy8XsoK3vXeCWuiiskmoE6jUt62nAPhr4Gn8XepdchR",
  "key13": "3jmWnEma5Gyz6wQZ5Bi7GF1xAN2UVeBAagLbLRAcHhWAJyPcX1xJGScyeQaeW9seL4K2HasZzUjFCp7j2JCdyHm5",
  "key14": "6298EhDiyxXsj3nMxAAShh8gqxYRCagtq5As6GXxtheRDyQWaNaRYv73CxgtAmhyLSA5KwFDKAX1U27HbLhNmyDx",
  "key15": "2JzuWTFM4XmqdGfW6sn7ww5hayAVwe6PBRqw3xd8cn9UzcP9NrLc4HwYjmxzqndXiJkFXssg6JriaALQHtfcrbyX",
  "key16": "644r1i9DPTgn6mHHvpUeWce5kt4HoeBJXxxQ276Pekc5y9R7K4Hjm3n7972FAjBEbP2bSuh7bJwLPFdGajiirHN4",
  "key17": "3nGZbcHmscoHthAypBv4fAHWsTNtRzTmA5gbsRQdxswSxMNLmQf4LgCPHgLmBsMNPaWiPpv1cx2iTkrXP22uDJgW",
  "key18": "5AfjTwm9Ykn7WXm3CUm61BSL3ZZDiw1LqXyH63RgT7ENGVLAYMpQ13QcqbHv5i8F4Sei9nyimFJEbDoGqp3EN9d3",
  "key19": "2NbkJPh5zhheHuotaHsRhnNVGmw8BHE8p1LamKQincYNrnzGVrQVz9uQanQ1PoXNspXeAURScmwi5Dq62v5jGGan",
  "key20": "2hZhiA46K5AtMMozDoZ3qCk1BX9jFV36vVdfARACw2eAnq5T1AUTVFCzsV6MkCSLiWmiKmnfDXhVbmGWUx26gCYa",
  "key21": "66Purf7HswexpJuU2k5DkpRfFyzHHTQVTJokVqQsuimWvPfxtf3xqUGgg4FpLxGuRSkCB9Pf8Bdro8BoLJYJ28pc",
  "key22": "4NZGt52z3gC71nZYLMN6cPFPVwfMA7hari2cBamvSUojeL6ttdrArs8PWaow2pUdPfM8LR1zbjUePbMw27FC883J",
  "key23": "66Bt6wSnmXQoCPVh87FxTwjXTTVMonf2GBysRX5XjDvTm8y1RhbJYFHJzMji5PVZcPwMYuGyQYrB35KjYHtaiZmW",
  "key24": "2KVp6T3jvDCXSyo97hyuzmTJpapuH2sNxi4n2HqHyWbHaRjf7HMvGvZycajPN4ZxAuPqAbDBcPDEsxc3JS7BwuZB",
  "key25": "3ZFDjQzDvuqKpUcHY1vYrWDMSndPxHBNDUyFqEyX4FWxpxtyamiG4FqZpc6d1rCEfPFRfMnmRB6t98UEmZaqVac2",
  "key26": "5eHxgxYjWeoeX8rpi1w1HzbjqaYbNd3YsZt13xoENcJ71rJtWD4iLDh5P8X1Nqye4uiZuM4P7RdD4ZyTp2WmnnbG",
  "key27": "5Hw8gPUmHsJHwVzZEw1sY7BcCnTXJ3215tY732ucUNd1hZzLEzTxjotUuoKiikmGbdRGe6W4ajS6roF3UDhhwkro",
  "key28": "4NuW5sTNvTmZCPbqL24GDCJdxVWCTz1EXrXwyfJ8aEZzHLFucjQq42k2WWW3sirbCwUfvwDgaHeh6B8hQZpVPm5m",
  "key29": "m8gZrq7XhAvMXbkcczC3FF7a8i5EaP1RqhqwTkv3Ma9fpxdCQ6fKeRPW5DdD2oaiNkkvze8nsRfQBus19E64scN",
  "key30": "2nfAGtRqMSuZEvVBfHnA8pegfHkk66yjyScrVwjJKheTrdDXLRW5e7V8cmsgLXb61imVTsUD8NuS8J25d4ys4o2p",
  "key31": "5vD3aDRt2C64782VCAtM17o8i2BmmWKgwH7TXM4v3YSFhoFrCUNh11Pa1HS7LCuRo834GZdEqNLzGuRUJcr85Zf8",
  "key32": "2ywfJ9P9hGrw2MvB7BGMKBXmDfCshv1nHSZ2xj3qDMRGHNZWheJD9iJ5ixymoPXTGt4BWFMNYKtroALzZZGU1Yqh",
  "key33": "jvipPyh2WbVqmWtBgdnqvfVQU9tLmpr45SeD7XcRfzcxyKHPzGjG3sMyiDD9iTPfHpnoPpjUwWZzLakpbDuiTDX",
  "key34": "3iirpzDN1NSEuUEFiJF5ifkkbgwS4avqaFejYYDCYopKx6iAmejpi6gj3DCoBEM2oacR3TbphipPkKhgb7ZzAHzb",
  "key35": "4AsqbAoRRcvGEFkuEWkCn5BFByJS9fFyWs4RTfWtgdRFgwAVHF91NshvFoYMrr33zwVvW2X7vSexN7MxUfsmjeeP",
  "key36": "617S3gPPq8JgDUKV2jQD9Nv13BzWt2hxzhwVDRBfcoBwbodEdead3AwSWqPJdC1MP26PHkc1GYdbzmxjiUhTN9w3",
  "key37": "38vpc6NfESk4b129RbLH7MZVPrt5uwhqDMD9q1gAUtjoxDLU8UphvBgzKS8SLjz7aQXxBSJ9UMuCqNExDYdyCqvY",
  "key38": "2HFKuW3y8pmTtTfrAn9FeYt2N2vtckttombc1KNGX3nvyMadVCrg3g2iZjizhNbx5LhzKyPKpoHzKVmKxuZ6WbiW",
  "key39": "3JMDvv56DRvEYtiPj2FaLkof7Vagjn5LYB1MzYWs3xwVmg1GZFHzN4kMLm8T8NT51tNHx8ppHPk79u9FQvVRHTGY",
  "key40": "5K2MW4Mnja3zw6MY67d39g4F3K9HP895XeZ12UcjSeSjs1FPzbBezCSEiBy1PHPd7jXs7NiwvKzVCSUqPsR13n1c"
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
