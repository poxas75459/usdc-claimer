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
    "4muaPzvpa3rNubM31d8nACY7iRDRW99eaFEixqNSFof31NPtVp9PzDNV5p1KuC4qHva17VZ5owsvtjyG2aUyJ3Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HsnhAeLNuv59G6uVXe8HQzADaWu4GR6BSjygWf6WPMMHLduKiSQ5ZqHnZw5BZbM7pD33B8HD5KGagT4rwVd7c1z",
  "key1": "3kmvLv4iHms7hQcVK4Uqu8SekAJ1C8Qv5eb4H6LqxY76Juy8bsUwj7S4Tky2zKj1LKTHvtSWyFGhPQ4tEZpKkcyK",
  "key2": "3Q9L2Ky5TGkr27AmUKWTv5a46mGgENCpppXqQHaPU6L364uV1cMTVuYE1JsAsbWerCyK8T1gt2m4FKwFewic5Wta",
  "key3": "4FiCYv6QzJMT97o32j7vyFXzZWaNcizS8ap3GyE28R9Zryo6undiFaS1tRDJqGFPyyuBmbFM6XhDFCkYwJc2AhAs",
  "key4": "4ryYnaeaGctrGXbaGENLdt3o2uMq36cTgsofbB58LgtotvpkcSCX97b3Uo5zHcVpyqaqx5YnrXhrcTPSWkLrQrrF",
  "key5": "5PrhYXVERrGx34Nnjge8P5sZYPoZm7Rwr3sJ2c7qYT5Bw4UbDs5rH5JypuXZT6Qb4TrWCeDjRj86q8QuKMgqoTqA",
  "key6": "2YgZfiQhv8aATSv5amJR3R2bRY77fFAqvv46TmJMJ6tVT2PauPoks3Kz8hNhAFztfThwvQjvp1RKCXYurZRF9AxB",
  "key7": "qYfou1N37v3FbfiUSvBrxXF6VozsrowHQERSPhjfkdapv7Dp1HyuPYHdap6isVZnqwBoJgY2VHjfxKSZpqsmGuk",
  "key8": "5Jxvr2rmRaW6FCPcoDeawfdB9vGi4Y9L7VDxVc4jysQ4GCBzJ9kBzPqU9pqEUVbd4hJPnC5TsGcTE82564oDwALw",
  "key9": "LCNrFJzxbMEAMjAvDNSiFiZjp77iyNm7FhLvBcR4cE2iARFPX4DHvZd294SPtfbbtzVhSyKxECe7QnzfHT8WPjM",
  "key10": "2XejcvWUjpkupa3ZVX6rGT6zxagSYN5Ya4uXNJ4VwWVDCAy3LSkxvAvyxFRqzpDVsFoUhnfUXgnddhoyRdqGxHN1",
  "key11": "5BctWqrwgKQVQHFDgAXeX4jm1qZFcEQ3K8hZUQaQdDhfzkKA77D8uYQZNM1aPG6UW7xz9Xi6So2xb9ooZJJ3jED1",
  "key12": "5qqpUVvqe7CTTCy93BJKqcJHMhMLEP6kf2wUufvKY9pYWQGx8doCNqS3ewpP4z4wYHhEWq858eLMYLg52Cnpqpgp",
  "key13": "54swqJyvhxsPDVYpuoePuWsU5XWKATcyq2mpsHcyyPYfbaBUDQ4LVQwRctW1TaYUp8RuxyaPLFAxfRFdV1bd6AQf",
  "key14": "3iVQrpCEtDi7hVnMGX9UY6idmwJZPnJRaLf8ZnPretS1i3FepF6JekqKPAP7mV99mnmfaW62AC8DFMDDkWazMf1V",
  "key15": "5YXRh4KkDtyzcKpptt5eQZSeNS9o26KVAzuJhn6vZJNSa4Wmt2LQ7DMTreLJHixEcqh7tzoysVByDg2sjw9f2L49",
  "key16": "5rLEfz6emk5nGPqQpb3NJNGtBKauU4U4MZSQ76SqZnSqoJ2D1ooUuwMgd46t3FiuCR2fua3HdiYxsCUwrFJCoWKx",
  "key17": "riD1dRd1SrbbR7CPWYeuvh1F65ouhYcmBfmqNaLEg9Gbiy3vS9fsGHtcctFYyqdejbcDLrurW14cdJJH3YurBgT",
  "key18": "25SLNuQhTguAkefRZ7KsRchhe3thyiZXqmK2KNpgRbAspHp5fbc7NEYVsX5qY2nmv9nkQXMPDDUy9MdrFqT5GsHc",
  "key19": "4n1dityiSzKqoUwWo4U7E3VkwoQfbH6pUHEGHe4VbTVuJxTYi8KWVHYxJDhgsYfUuzFRv6zw5gRMVLgDSry8d7BB",
  "key20": "3WpAvP9AD2UZPhfQjQPwMjRWqLUA68ZuwEnQ7owZzGhM16g94aTxNxP9npCRy34epTWmeTG9pMHU93Ss73CTUPxY",
  "key21": "2ja6DWQ6RiyGkmTKeQvMRbnU9LJHdRmg77Rb45Evydpck7PCDiXW6mMGGH55xGYFBEFVnnQw2LneXL5rvT4NkYZ5",
  "key22": "38jVnYP5oQzRKp6jMDs5NpLK89Bb9nCKQgafUhpthoKT9hq83cG3js5cCbmtqo2JNhPRcMMszuZ8MPv7bsvK5E8D",
  "key23": "5ZuoGiQRTanrwUkdCFRz95hQvZwQMNDg6SZjSdyT17r1ekKc3cTGRhs6E6mDfL5svq48mDvrWi9LNtfT1MmrbMjq",
  "key24": "2gKSfYFJkszuUjV8rTYVJmvkfUE4wxE1ZvKdosRv5KNxT97gfHBRA1bv7T7YaootTseDqQvCStVHXqCwe29CQJ8m",
  "key25": "3ac38SqP8Ga1LP68WdPGrsMtevFAozzWjWqKjjtEMa2oJE8NQTz1WsgK2D8xrgSgFYA12JM3JbXHAFQQG8sqwzjn",
  "key26": "2PD3LLM69WWN9KhTHbpQjvue5wZvsXap76578Q4hRvQRpMPZbPxRBtD5TdKS9vkPggDgVeH2iLbR3gxuAiSEmrDt",
  "key27": "EZtT84B9UibLu54smH5QoWonxt2jjULvGU2KqkrFNbgFA6ktMa6pksvrwUmzojzgiXYopR6BRjvD1YLF5UKUs4H",
  "key28": "kZQd3Vd6ZG3GsfaqGTJRMTY8qehTc87fzMq4yy5RJ8ce93ySTY3N6B7cV6zr57L54YGdJaSjqXByEUhUuweMsf6",
  "key29": "y9DJNhtAwVvaKZntHeMvzDCAB9bZVsqbHpbcuPLQ12BX8bp143CE2jgKf6jCzf841duxAWejnU3udmYQZbVWNxr",
  "key30": "3QXNYjgq6Mwdj6fSppKQbw5ksBQ2McE3kD1Z6QRngbi2Ryxu1rmiZoJvLEAEETazXEfRBx6jBBtg7EorE9fxwGb4",
  "key31": "rd6mSYnDvxqbENuajmvJveYYW54N9nsGyoVy1w83mokZGCqEDDimmHvMUvqSUjCBQogjFsWCPUzCdV4QEBXYzDA",
  "key32": "1Ee9wntCvxp7egjY3Vfx1vxajtD45vqVktGsirTj2bg6tfjsXWePSyUmqtytDpTaSwisA5NSj6jNKo9E4N5tU7Z",
  "key33": "3P8ks3CmuJjHysUtcdbPsCEdrfayZVB1LAfmHmAXwfAXiLLikp6bkpTsmPmQKuMX61mwMoWvj2E79QDvTD7o3QeT",
  "key34": "3G8bWni1wBBwvvRnrieqfovZ6PCjPHVrS9PyTrSFFCbNeBBvxJsUiCW2JNoikXJAdx1efpeJCdEhgyWA95Cb9iFK",
  "key35": "5RytiRbBbmm99wk6cBGsyPjqM5Sr9bcKNvhgvMrskxWvdvGo2krweHF369Z7EtZAoUvxemmZUrbjR5pUALWAhvpE",
  "key36": "5hUUTHCSLLPotD3mhuBhQcX3hEAb8UvTVtenB6Wba91z7hG8JVBniCfHxRTPx9JLPhcq95pBrKVHaSQD4q937m6x",
  "key37": "2nkM2rWEgffqimZCzWH9DJBCPCpBSyca73izJrZU7Txyp5NhFtEGodiApuFMxaMB39TFyH7eRpbVfMZPR1wwdfVB",
  "key38": "5e69DKPDU3kWPrTH5jmo6MG2Nxo9VfVrPUDy2ob5Vni4obRCnL9d86Thon3BmnP7tLNYYmmFX85WTBfwSm4YekmV"
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
