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
    "hGRvAYsNEc7eU7aH9TQJThEGe1Bgq1oPeKnd31C62jvr2ayXvjVH9WoBfsEjKviYJaxAkccwdbzdVZ57sCVjDUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZrHP2ZbForJY77oL33dgNEjVMPCzcdgBHDQyFWYaawbJKDuxEkcU5Ywr1xbLBq1xpz47VTgsPCT8gH9JJNsZFjL",
  "key1": "4SDPFgmafubauxZnd7DBeJ6cCwPMH5xfksxwNTePQKZP92qFr7mAShh6KHgfdUuBECdPArPpDvt46rY4hJ5duGnB",
  "key2": "Xnxtp3Lr9xK32hZois5sZhGhXBzJ9Wrab9PFU1ziF2bwV2GybqJqKBCGqxELchyisZa5nbbw7eY43C4PZv2DkkU",
  "key3": "4JFuA5UrA8aFtx4taUay4FqgJthT5K6UUEPF7fXLfXCtHYGhdsXe9Zqc5CdafAR6hLWeHFt5cHPxjuwQVRCjGKKu",
  "key4": "eKGBmuxxHB1uHWarY8SSxBjAWRsZdFySBNem7eZ7924XbYHtJRFxUpL64u22uTGh1cnGnXu89bPp3bB7Z8wsHRq",
  "key5": "5CZtj5H4buwLqT51gqGBfHEJHDPVYstwhC2J8mFrbXBwkpPhBjk1fD388vNSaLzCg4vwEdwNtawcbDhHNgpUi5ZV",
  "key6": "61nbA6DLczA3p8rtTYNfe9C7ZaWbELnUQrqh7aWdgF3iZr8Hg1q3SHbJbbSfb1sf72dwQp9qBg3mLRpMfaou54BN",
  "key7": "63apnq69Nx4PPh98NYNs3PiBBwEYkiSsWjarFAbigUtDMLE5KySUj3wWeGppyVyZsjVgYyxZgMLBrwiFzzthr9sw",
  "key8": "5NpejrEbk4aEME92rKG4yZsiVYJ4FarPwgfkYKr8xwH1ta6tpRCeiUPCyHCrudbhd2TQiEB82iEScFDtYjBzyKFs",
  "key9": "3YuvWanksXmDRief9wvg3azMNGW4dvuhmK5ErbQQUoFRez21bPVRJoSQQedmHJyVgSgUDczuwW6xRNZxSuHxdRdT",
  "key10": "61pzvqsQ8bPWdfP2TBEzfUSguZ8gGha1UFMVm3E128NszuWix2P9cqhhEf6hcifh5W9sPCEP9VvwviYytYXiLhjN",
  "key11": "2jaQufGBwhffER3H7XvdfsecfS2Av1N286a8pxNm9LNXdrHTYBqz58hoeG8A7bjHBcJYcEpVLYeCgiR2NReaSjtJ",
  "key12": "4T3ifDj37vKSpz5QTHmHY8thMvyRFPgxBXPGshKeYmcHkBbhjznkXn3ybcSFoWNwsSQeVLZayR5bNMQXjYmuCQvK",
  "key13": "Epf6iaq31JqfQSTZATQsmsvoXxC2WruELqRQFFkxRDRxFwD2KGMgRQoZLQcCY2n9TkpmBeSaxo4gG3SaWPAuKsq",
  "key14": "BS1gRRBEZ7Zcnd1JLHzG2dQpRrJYtUkhh6nqMEjR5bSkCzD3xQmGvbeaxY8zJs97HCnxRJ3LUe1mqTW5ShaLJgG",
  "key15": "4AF7wsWvUJxhafZPtSAZP5cwKv5UvdcAA6LSvdvHzUMzkHLZZCYevmXiBW3gjj17UiVtnVQeK7DyBkgUyacUDPKf",
  "key16": "4bagYBH4vWLQwYQZJuQWrFfB3dwk8ArqeAHyHXtZcf52TVT2HsrAWhpuXDe8x3rzGYiisTJiknotCd5tqUSRnDez",
  "key17": "3L9ZDgQwZjiBfoBuZDKKSDkXnmXrL3drgn6g7okrF1cWudBmVWKEa5PJFiJyYZtuEQVWHrjAvBTLcENdZFLE9jr2",
  "key18": "e3vN67ZQvL82QSQDLDT7tTKw2f6skAjM65dD9CHSa2nn7GgKS7jjyVUfV3uNkvnx6us6zX7FQ2uE3qu1XvyfS5k",
  "key19": "eT6ANWzdLbRWuDGDL99kmjtha3aP1sDtNVQxMg8Y3xU1bfy9BVDhJtk4ox6JgKMRUfJyHbjb5x79kqYTVb2G6my",
  "key20": "4h7Ak3G75k4pRmQxFnTdWPZrUpXA233zqKj6mBcrNTL2dp1d72zkvEhP9SAjMaPtWsURBP6ZYaCK33BZBNmGciqC",
  "key21": "34A8HCKERh4LpVjMNy6cF745HF2azkeRZ1hctDS2XysvLEcPDWCqotZn1q4GtrrqCfRj8y6zKNwsXBmfMLgJaNLW",
  "key22": "3uUpyhV1JoyTio1zoKJpskjrNsaVyhYvLiNK5vMzXPxgPbWvtfrx8bBVZG13ERToiFnwa16T7cWBHf5Tp2D1jHFD",
  "key23": "5zHVAYC4tC9yW1VMrX6C4mYDxxeDMg9YxgtS5xNneSNRvxNYz5t3yo59mpF859PRJszkP4GHDpSAuaePX57tZsHp",
  "key24": "5kw491xGxUNB3RPLteviJJS6gZp7kVnKVkSgxNAHusKaSmfV6AvDWAFdHoHafW6WNMszweC5cAcF6WJr1MGaJcLm",
  "key25": "PWeiHd9k1uZowo1Ke9XEjeFZqDq5xm1jzbZvRMXxWXqZuZtnS8Jie7sw3HcZFZ5pSqHLoHXC4evvzc2CZsq91Tn",
  "key26": "4FjMy9MFQfhrTGvrHkaYw4Bxpq94qdCpX8iC1EZGyUqJVEq4khbJqLcwWN4iyiMqLhjGGkgs7HqwkcgJuEQJFmZH",
  "key27": "34uVMmQsMb4Thq2vthtNtJVj6s9NfuamM5XTVLgDAKNLPBRULP7nEkFijf6znZ1GTS6cEgXVdvM2einb6FGRJKPs",
  "key28": "2E3uwK98ggKip1uPcTmZo9pDWiACb24zQUE2YWSWB5Vr7RxbWnEBEfJT6fbgemexF1hRjhUH76GT3kMoCh7xuPi7",
  "key29": "5hLWqtD4nMzx18HRkPMs6LukURwaWwk9EMS6EU97hNxiT4nosbaWgPsq97cqcNBUN8Xb1tv9kUo5zxzo4jRPkuHG",
  "key30": "39WwGcXjQfQHmKmhUK7PJM6bMzF8teAzo86ZtRmBqz68euc3FUiAz1FbtDP4RhyKuRDKYSJTL8xAC9RefemM1zy6",
  "key31": "5Tf5CyUbnutFaees7gtUDGUG52YUDqhZrjBAdZZLo8RpyYu96qFN4D43vxRoJHZacpMKWjBqsaDeEwXT2hVo6aJ",
  "key32": "bXc2ViBLELYX6NWKCKHHf8t3nm8gWexpCKqAGjdHUFawzoHoHsj7YNPHL9bpkEZjSS96Ht4g7yVav5KVXYp2FMY",
  "key33": "31M5U3r5JLCvXYFWfLiTGmXtSPooqDk24QsiRLtLx4oTaS6em7gp1Pf9N5PrDfDNTsQkuFFm3Gc7ikbeGWYuTDbX",
  "key34": "5MnJ8CeSiGB4BzZ8qWj2Pp2vEjAKPS877MGvi4f18bR7j82QSZcaMcrfjCikxTZ9mnCohdCSdsWEm7K8iwZ3BgVi",
  "key35": "37WeJGPXuQRgviX4EBD2VjWj7b8FqsfjRc4nM2uiR5FHYWKJJSeUX61STyccTLFbcTooFZPPra7bC9ikBt3PVozv",
  "key36": "5WuE98Zoo6NtNskce9KkmooBqTgAn3fL6XwAAUBUcx6bfqnDupQrcw1FgSKkyM1E6sLpnpHW138kG3sJNYrUwCz6",
  "key37": "3JyowNakFqTooPyD52WVShRgzQvVxWLDMCeJKu4hhChd8ffnte4qgmy1fYYXiTzqvnn82vgpMvqxYxvJvBmUNf5n",
  "key38": "2DYv7TUkyZC9xvjzKGrDMNCEGLAJFQXjMyqNz8UDizsuNgYbxD8J9LiGATuvRb2L74pTc41KLbFUz6v5ASmAHE2U",
  "key39": "4dbKpXW7GARdXansEzH4kTNZ6HkdAzQGZ2XRdznapC7Y3HCQ7ehcTkBMf5AuDnfEj63md6yMsby5Rer3SHCixnaR"
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
