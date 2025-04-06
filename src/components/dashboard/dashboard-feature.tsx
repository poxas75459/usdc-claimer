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
    "7FP7U3HDUyYo51CWqz9DPGtJyK5MKvRtLeWacrnYKRuPPj1AkCpuowNzKXdd18x72RfNK4LJDRBjsDdqDWa1A5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vDx4dSZVRfvqr5bEnTA3Ui6upg87qKXcmk381mXoiTg9vThwCEiaQhwyCnEmzzbzqDSSMYDwjneghuM8pDDF4Qv",
  "key1": "4pR8aKD1vf8rsybEDVUDmpHBzrYDZnwFgy7E6A5KWqojB2Krf92keKUpfSyHSWHxGvCeotSho7FQHgt2kvvbLNAp",
  "key2": "2iv9qaGbrQ2GyPXUw3WjCskbWq5atPM6VYDr86TrGD6XgZxxZXcfksZPebvwVfVrc2JTxk4kKcFJej9H5kh1btAZ",
  "key3": "5RZjdZewXwV6J8FmBCZXJCXLuZwj8rXYE5muB6kHKF9NQixUoNB6xVfELwMWwxFesXBA4wqCxD8tko6iQ5NevqGL",
  "key4": "5JjRHg5YGNk8JgpJ1NzU9r4u8oTVD94kaKUe8vB1rrT219H1S5UAdj2jkL98Rz2N7NQHZZ81zNFvnf3R3NwY3GQu",
  "key5": "wHruS5QZoTe2NvpQKHTqMkWa7gPhXMuidvBPEmcqkdLCPqZBoR4216NzGsNaNb3WVfkLAbYFySSeSSWw2wJDGYm",
  "key6": "4QdwoNJpR5jL2kGjxyKFzv8iecyHqMfbyuSDHitSMh6xPt4BM4KF4ccXQuuWHNVgLGwtLyCrRWUeYc5gH2stfy3E",
  "key7": "49uhCu4geGtu6kAsRvFMsPge5gVrP1BGbawzNPuHzog1cA3B9iiLBdZ7dmGC8ENhxtVBp32oLJd1JKY1KxgnEfx6",
  "key8": "3ude29QES9dXBaXVAqfysVEgLLiEAZQqVC8PvGiPVLM3LfnFWXvhCUGY43pHFebHwykBEuXaqh2pWNmTnhgeVAqG",
  "key9": "49UCnFoVUQQu5Kx6V3rEkTuvTJGPYS55EkotofJ7MJJ8iGhaaYxT4dF8QRmnfwFrUqvUX42mJ1mSmYDhjtR8zxRT",
  "key10": "2MWPWpFez8vftZrPfzraycjrxRMQN5jwjESTJQA3u7d3iWd44kBt1kDK3xSRvQ3Bn7YyA91bZ5bcZaj9wQ8hjrAb",
  "key11": "3TyP9DZxcXNjmBGpQuMpPLDrBG14xUY1X8sP1yiqo3U7W3Ey7FF5TixqAG7z8m1sqjsPC7qkfc3DtDDvY2F1Dce7",
  "key12": "4dvR1WBQKeyrPZyBdSKS47WaiNyG9CuyDCN6kG5tGFZ4ES9CayxmKmLqHNT1TSMLEMPZE1fhm5ruCSByoJrvkj8B",
  "key13": "5Grg1cuwcHF7iuHHWY9vySWL7L8PWe2LBk8sTc3zqvHAqsuh7t8d9s1pqhxGFrVnDr8zQtJS3KjuxhBiWGGe8jV6",
  "key14": "4sCYKX1ZBFFMreejZ2c4oGxdnsLmTEVumSsWHVQokFW5eDqYAtD2pX3DWNUvUsFcVJnTGFRqu1AFV3NvW7dXNZCr",
  "key15": "wUjjrX5DknUSAPz3YKcRLevYtvQcnKVbiJLjTYHr44YJCWUK31YpVJLu2iRrvSsqnt9piKwRSEhk5Jdvb64pQPz",
  "key16": "3dnJW8Zc7zC6zhYSixjAAMCPmHiZ9ZttiD9ZvtdVg34Rf6A1beZ7EWKYtCo8c8S1cyramMZdgP58T9QNHebQFNgr",
  "key17": "2mmYDRqtJ14wXV2qWCpFpi3tHtqbwzizj5cW6m8DVFeDUqZej3FTLk3z5J1DcwKkLUwQSxRpw1XuoEWqWXkgadWZ",
  "key18": "3aUet6yKVCPFdNyyYMuTvPswqm2VBgVVWEm6cASbTtZk8kGF6DzLCTxbnLrThoP25e6RZ9C3H1FDcPzEUwp3qQhi",
  "key19": "575q1F7JtvZNibBkuwuHPwNzwzbKn7RJuJFHERjhZHdVZJoeapHPwtrfAzgAbzGBrg2qohwaNtwmWirnrfAQVDZ4",
  "key20": "3DubHRLt9nMaaTqCqoMMZ9iNzjznSgeMqEUc8FHaztrjAyi7osqeF2aPuUcz4qcLVRbdafgf1Y3a8F4gUdZmuY3c",
  "key21": "2s9otNtywjgaLViSdSmbC8DsJCBGpDjSBup6pmGE1HFLqKoonfxkmC3AfrkYd4YmLL3xpkhkkLqFc93R7EFCUP4q",
  "key22": "3nxJihd8ELdFxhvN693NCombmiBCR55tT1i3ib9GEGeJdsX833ZPvJjFahbDfNTr7fqt67WUhuaGrfTDitALVH9Z",
  "key23": "5YSuEB85Z2RJ1Sp3jhFLSqpDMq2LA5mm45jo518E3kPCsDuALdRyMDoZcqX3NExupWFQ5kyWSJ5Gy9Km2kCJRnwo",
  "key24": "2FuzqdzzCMvyZjaM1BJA9yfGFV13Y8QM2F5qPLcUpEyfSoznLuESuGYy4izZrN8njZLdtK5YresDrMx7YvsrPmZ3",
  "key25": "3FL6dY69h2j9My9Vdcjuq6wZqM6ddJZ8TXR85qmVLFzhXXj4KfgQYoEAPxtN1eHLcRYDNRRH6t8f7k1wTPR31eid",
  "key26": "sBUqVEXxRhLVUidHsPhyaMQHQcq49z9tHvFAik5dx9M4dXL9rhuP3eMQ6y1NbC6GRR9zeByXFndrLnQf11Lm3RE",
  "key27": "5imcBxiwgzdGzmMdfhXs7Ty6ZcAj4uYzB2SdCAuCTjk12eLfv35Vhtgyb8i5bnpNysYcrbk1f1ULTAsL3cv3ZJYf",
  "key28": "2xTUwXN7imp9SZWMTLjgax3ZjJtdncdPBCKQTTMNFWZ6aNz9DxK2XFubdpTk4NgYiE4pVgDopMyJEDSeyGWTcBq4",
  "key29": "4XQ8ZCVDgLXiVDocrjgVc6hrWvw3EotQtDUXRtNVJaeBE8Z1QMERpYTcWNXy7592MpyUQHE3fV8Rxr5W94YHqFFy",
  "key30": "4eRQ4jnqT3tuF9EJ2UTLQp2e6adV1Vbe58Xdt9Mp9w3CBGV2cXrz1MFNoPBsZdaMisWCDsnDgBKGL6pRRtj411s2",
  "key31": "5DSRtzDAQJXozjDkjPojz4EtrhLGXUhcv6pEEhJnugDnk6nUrx47nZqK4wUnbFcJgXRDHm6ccJTYhTGhPEtch9FA",
  "key32": "5pjthcR6v9tL5wQqFyKapMgMGET6PMz2AMbYTgQWMzRY3EAwgYQnyF6Ci1jGuj3WVUMXrbik3cjJ7hN88LVRA3co",
  "key33": "5uFVDkzaNp8Y21kXrjomqzL9rTVBmKT79tSg6rNqFCQFSb3rT5HTZD4wsVst68k6kEKiGgWxvpW4kfvMPiCKZRQZ",
  "key34": "bnj5RuWaPJQDsLHu1HyH6YFvE7DeLAS1r7XYD7x6eDhkxrjYwXGcSyYycJGuPdTsoRW6QovTugpq4xVKNKbGNYq",
  "key35": "4ndc7Z296qsQ9vHEmesH69YuVQ1x86GiruaW9geaXPhQ7qcVmohNwjPzbgJpHVPM4EwrZQHhZMGv8pAxep1sem1T",
  "key36": "LQ5AG9U437PDt8qtfWD4E3pfDaaYNHdnazLWeZHLy1uVKp8xymwdAwoVTgYhSJqXSAurVyEVG3vMizbbyAoLSZT",
  "key37": "3ekcv5AqLKy1k5y7Qm8B9r2omzk6QYjHcakiPh5pPm89CbdaNvCVgquZUd9s1mKyZHZMQat9LidnawCvzDhhYp2W",
  "key38": "5AeM9BQNwFHYZtQjXraiBR9V3oWHXj7Fu2EcdcwWecFMhLzAqbAANrZtZGKsEaL5eECjZo4tLERxi9zBQeu7YZjU",
  "key39": "3C4q6cwUbPUJyYiwrkekbJgbaAotZD4ZSjwkwsX1HrRta9n6vC53s4rK41iCVJpNrNygHnVRAwo4TcdPgLrU1quY",
  "key40": "3U9RTWxGSbjkFEKWnZXNw4C19wajp91MMmPAgorH9EvcogkcXAJPc5CY74fSyeCyqvyQ9rsEwnQwGSsK1LBYmCNX",
  "key41": "26AQAU2r2TZ6LGofe9NGz85Xt8jJifL5MZPCv2FyEfpa8RnKFp4dyxYgEQQyDvBs8vAfEk7AL31rqDUey5uRUGxY",
  "key42": "2REJz2YvjobdZnEZPLsydGhtcEcPjtTcm6ieMrow2U8PW77k6AsLsYKpjqRFNPphTNnfnXbnbZ6EajAEtp6D9mGQ",
  "key43": "2YG32yMjZnqMsTJzWR2s1pdEfHkZJJCnWeUdXktc8g6RhgqYyYpLNyfExBzKCCDRKj7C5TaDPZCe6xvgortQLi58",
  "key44": "3CsNHut73eRzF1dShqizdBn5zb4oKLnYsowMdPXkM2bvH4CR99qrDtsBpZLqgLwz4nq11stDoNK7Uqe2wMgyrKnF"
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
