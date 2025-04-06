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
    "28HK3i6feDaNgG3dz9Pr92yRqQ232HAs9JgZgcb3PaXbou8TwG6kZJvNQhPnj3pKKaZV9mfrLpaiEKpQb82jgugQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmtuXVfB8zQWCLiN5JBnocY6iJKZbMJnsiRUsZhURBDTyRyaW8GLLdVGZqR8DqXxvHUDsx3USL9njT1FKw6fKvu",
  "key1": "52QZo7V3juS7Shu58LY4Dgct4Tq9ih1V3fYAopJYT6QkPwnDMMtCuVWHKgPcETCKxBJH86ui23hHNKX9AScHT29s",
  "key2": "3Ux48hw4nY3WrfLgdzBFeRfen6XAqrKZd4aYTXdfDvTHRgPwrw5RoSgTSnQ4AGMH7Ho6BvTgVgT5ZUnSDQ9bKN5m",
  "key3": "5o55PNvYZ6Z9QLG1D3GsL3dAsiQi5i4j46dD9X5KXytiv9tq7eCa5RuqZYhTSYZhtoVipQE6Ut5LEsEfCkWLUtYZ",
  "key4": "R6Ncn45XizG3gNZVTPT5kVviZYxYZMwjtwxSP3T4s2ruRaCiP4eeAiphuLmoEDReYpX7jU8L3Dp6tffR3TaQW7e",
  "key5": "36LvnoS3To1Vtdb58etNpmKeRSbT6FGVDqpvJG9Qz88wyuDM6Rpc17U9g2PVDY44rXowtzsG6wiayPzzC9Kgzd6q",
  "key6": "2G9mw58WnocyA76yqq8j3p3Gc1Ut4g2XXLswGoBmAgPDkxQLQfsD3YYqsmh5hszBhgXY5UZPVvfs8mji9NxTRkYW",
  "key7": "2mAuAYm7rKCenLLji6CYf5H347JZJfTVpTskUrSFZ6cPBshcHEgA4GGs1CjaZK36VRYwauwRRgpZXcK1XJNmPsGq",
  "key8": "wtu5eGqqrCPH9FZm4SFzh1BXpL7UNCMUufm6aJxivCuM95ntTFZiRUnhmY1umkR9a3kuDdGxQcjgq6DvstX4CXW",
  "key9": "4WfSHD2RGfewKudphe2mbpT7Myu8ftnc5kMJRhoDiCmbk6JgbF5RZpAgNFWCESycbcXW95aTAwMUekJkNhif7c36",
  "key10": "4h4cR6SHeZkN5tCguMJYfxATmiehtfT5BbaAyHYDPZa2VArxqhLRaUkV8Te3g4BZ1BPhtYTciCLgVJTaUR3fsjFo",
  "key11": "3k6xjJFgkTMN6Ji1qWHkSvkSFjLigc72pH21GKAMqShwpr8kE6t4Nem3GEZ2tFYaB1t78U646MNKSuv1Se3HoDnv",
  "key12": "QX4r5bNQUq7CgsueS6rgV3XwqDhDTfBYW63dvkxfMGtLhX2CjUtX8UvA3H8C5snS9S9dHtcA5jo7tYQLdvTiV1y",
  "key13": "4d4ijisKbssaft6JNSKZwD9hukwPcznysdquzJLgnhHNyFQEFtaoiYehg6C9R1QVqGekdwgZRoWqfm7W9cX1MD3c",
  "key14": "3h5a6B8TNYTYFQ3PDf6D1GEJduWFzpQo5fUSmcdy1kFGeiCB6s3KNb5UWDbAMAP6pmTsmLQUg3dczXatQ5VwBRD4",
  "key15": "4CQqti7rMuBox4qDRAJ24ejQNP9QxPu6DBy11F5VwrAfzALvsQEDeJYWH52Cyby1Y93Pq54qHTuKLNAFgkuVVDL5",
  "key16": "4usSmbpXKPRTjDqtGxJ5k9GUZwFXvYDN62XX3ZjJjt5mbtuu3nhreKJufgnTj9cVP7T6m7wWSAWXKwqEogxtZXoS",
  "key17": "4EFfwqtXZ6MMYC6KpH8hwp8ZuRK9LBmeUJ4oT94RDYDCR4UT2q2kczvGpvCUth9My1MeGrzb9P6wAj3RjZ5qYobG",
  "key18": "3X5pxx5MdtGkoDSwCxjU9LDKJwmtKiSjtMDsQR1sDwoSNDL6HN8x6kvgV7CRdf7CikitUmxVit4ttFfTW9Rwwv5U",
  "key19": "2M3L4Q8M57BwBVfxugfiziUyYkE9i8TtPqSpz6ZypCHWKe5jdXTB9QV7cKj7ZfRn3MSQWk2TEWSd1hgn9qBCaA4F",
  "key20": "4rHF9ecKoPqe7RwDTWVbfJaZcYuQmvJ7T8AsBzgzAR5RueAq8UAWBWsQLCoRg1Lg4uxjLqiRdPLBNNn8BXmfZqXz",
  "key21": "aff418YcGsBc8hgMorJGbnzrNCVL71phttGLBGGduooNNamTifsgCmp47R5F4Bye8rLvqxxYVAJjMwNWoHkJwnL",
  "key22": "397u5smbUabA6ZQi7MbJH1ntaVpfY6VsWY8bmDk1au88YuB3RjgXJcikispGc4v4Vhddq5CC8iU7tMLSMHG5tPNV",
  "key23": "5tZTrEsRX2vufDnwHjkT1FaF6LkSzgxtpzWjsakG2uKqvYgTVhzBjhpmZvdbaGsbea25EXxFSJo2dqYS3HqoMnzN",
  "key24": "3TTM2zYqFeHA7EdY8yxNYLcQxTKmD6fPsxR5K5cn5gjHn74T11sAWzdfatZLrkJ4oA4esUhGhneqmUJogueBnaRK",
  "key25": "VgcyHRcFgdjeedZAkqMWdezJfw9izyecMXw4RbvAp57hKX33U8LR9fYViBhRqKoP3TQc1DYdq7zgGXRXAbRg4i6",
  "key26": "2m1fQre6UXNjdQ74rh7mfbdxnahwhfc6iArRt8pvD1yBDi22KiM4K22yqCa55428kXmkgn21BuJpNkj9xtfTrvUT",
  "key27": "32tV2kr6frDupCMB4JrAEtw2cZ511SeifG36pTUFtAftwtpz3vv8hTGUVhAtssbxQh3D3z2nm23DEPCTzAAEEiz9",
  "key28": "4gkSyQwzMejhPUoLT7uQ65oqffL7EK3TxngzgrPfJHtj566uAD9PQzEzNzCxsS8P9vJL1VVbvCBUYRvB8zMoZUAR",
  "key29": "2U1oHSNUwD8zGSVx7DrsjxNuu75NxpCzxZSxHnb516kxo3pgjPWPBB2jccDREDiJdER8PMstVaUF2CBihEgziFrV",
  "key30": "2zrNzknJtf7QyRQC5sXB7DSFFT756gePpSTjE1www2MrjCsjS8rnGx37rEBpZ8vfo7bQfaRrfq3dyRBU95Wsuq8Q",
  "key31": "4yLgqtyAKTV1aDVqn53RVDJ2QD8Q8DcZQkzacsKjSTCw8ZE9vzZS7fTsagpoqvUWTGadYg5yfkrnTt6Tr7BUGVN9",
  "key32": "3pkM8iksFSmgS5MQXZ1M2kYmRzoe8C21nKjMfQqFsT5fiGGLNT8ksPe2Vx54dLaUMzauS9KKc37B1QdRZ5HrSaxV",
  "key33": "5kFAfd9j9sXFeBLGguMmyvepr7xDmG2g5HjZK6CH5eENMMGcyYNamfXw73S681Taqh73CrMkzGtkaUSP5dcRYLp2",
  "key34": "bfoRzQBPBih2CG4i1GcKnrdmtPDTk5fM8twLeAP3F8XbmpqVKePgHFXxWs51mauXhgN51kZScFn4UsKGEkUbxAE",
  "key35": "2T2z1JqH3jRueZXG3RLb7Wt98bzZZNFe5YAkn3Mm4ziN4kWfMyJvViwLsqKie4vu5SMFNdDcyte1PhSE4KGfDR7U",
  "key36": "23QgvE2ATVv53oZJzk5WhdCrDDdfd1cPzVhqt5AdMr5HN7RfC3mf3DYkGLAJVHHQcPrJTgCaiCUmf5GbivyF6cPU"
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
