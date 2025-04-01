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
    "2MNBm8PwHpU3yf7sURxFvcsRmA9kfa44AFHFaMF5ByZ2apHDBkGba13MpphswftZD1vbvUUfC6JnBkcde9cPDeQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwpf2HjHMyoXJd7X8TZBGWdktgaH5CcxjtppNCNikgPpmxApTfgpqwU8cLBKdxyqniapqfsPVN9U4CRg82WjkKG",
  "key1": "4JJRQrnM8Y8FqoQoPfsKVTh8kA2Vak1fNAUE3wJQpFDKFjDUFBFVGVf24noFyBhY3EaGe64P3qhvvqGymNxokFfU",
  "key2": "5u4MA65sk4rSSgyPvTBUkBVi5nwb1XfrESif1eTGpu7gs1NK4kumDLecgXVtFVpNjsvyC6EtH93kC7uCar8V5BgV",
  "key3": "61GUyVrRtaPkRybSTEcaAe9r46ozNpJuMgXtesfLMa5PRAVWqnKzfuiQKPbmbbH51RZy2iEmQ23XchDoem9y5bAC",
  "key4": "5pfU5sL4uf2JxTbTorZhmTQgVD5BAcRasM1Wxcw3p8ToqiouQyMr6uv7zrPZ4mukKPBytyYHWdVYPU3yeqezej2K",
  "key5": "5msfcxvWgrarNiVnbFy6j6uUvLSwfcgvxF2zneKZZKGf793ZgjPn8PG5zZUmHXHJvecc84uAqR3XPyJuYydrQd1F",
  "key6": "2rdx9otfQGNeRWiTtHjnu7pHCBNXbbKJaSgujhLjiDUaZJKW1JEbZ3NCJsWZNbQ722bKk1Dk8N7vDnTMZeVFoSVw",
  "key7": "5vcMM6jcMyRWn3jyN4aAjmWaQbhabyYZavGXc1ugBB5sZU1sqzcMtHCkeNz5MTiA9pAbonkNx98ZD8wtMBNTe2Wj",
  "key8": "4fYA9ESuHMozr8PZSUkN5x92iRu5UKqWy7RHPg4gW1efS5iyHCabUiPAtY3KnfvCcn3Vj2ZBPEMvWcFLDYDtFbKh",
  "key9": "3vYGFVLhUpamFEHxXuaunVKeNHP4nMRELkmf1JTgxdgvWxq35LMqHdSMZd2kBeZQG9SEwxK1jiCDXq5N1JhZUPFA",
  "key10": "4cG6Mqfbg9kvUBoRwJTEYyu6TquNB58ZQ4nZzyCrUjWfqX5G6eXx5oedB5aDXdopEdwbFLohVWKwX1yKvYYxvrG8",
  "key11": "pEemvC4arCwJxDbtxsaHmonheRb2X1SLdQp1ycTSMU8yTGT1ydM87jMswArsRcsqQQvC6ZKyx8p3UuiJpTRU13s",
  "key12": "34pePRJYKTzv9jMn4NARNDeePTKurmTJzfawaBdZxbzH98UsYNkueYjyJyr3cMkBYv2PDhESoFBttjQFsQ3JTock",
  "key13": "2X167ZuUXcp5rbVfonmvBtmJcpw9V4PC5h71mG8Ms3BToyJ4CBkVNPVvPDNSJdMheQSHeDzfaA3LThCU9HHTfYty",
  "key14": "5p24FmynH3kFMJY8FPxpkBueLSmJECDKZYaY3D4za8Rr26cFT2XEbK1UU1Pea45onEXgL5s7jox7Nsrbmn9YR6zG",
  "key15": "618kgxTYNj3kXWX26qskJvK4gsQ53Nh6LokKTzeWw8AUqMyeSFVzVYKt4HuJocBmtXGq76SAX9gpbrp2S84uooFW",
  "key16": "2DRZL8wqTEEYLb52AcqcAWD5c5YUsGBKk9kZJwp9mtW1tpVeeC8BRpQ8MCTaa57wKM9BnB2CKhhKQE2yMqXFKZ3J",
  "key17": "rnXMhXGPiHMpTLdMFouQVX4McuVUYGEertZEody7EnEPumazZTS7dC53NvMa9hZXyYnXz5wLh3GEgu99bBUQWBn",
  "key18": "61DeYPgSpme3WVVo1rmHjZoaWjUgtG9YBq7H8aCsPibpXZuFqDk9L7cHW7unfZhWCX2hFd1Z2PgFBePP5pA7Ve1k",
  "key19": "4ahjA1e6KS23u4cXp1LYQGKtQpdUZLMA7UWvc7z3VVm9fQjnn9zyJmxJHpVMSPgEg3YoMVt4TYy1cENpEuMhdcL8",
  "key20": "5HLXo74vcCjKHTRvogSAUnnyNpYRf4J3DNvhCpN7ywkvLVCBtthexSDPQXeVeRYpnhHRwekg5QYuBAkTR7vFaMpt",
  "key21": "5WuteKfppz2LjSm84tVvhPQJFQ4WgkpQ31Hr53TQhdkEtCm5nkQ8FTJLcHSoEXpERKDQ6qi9pkZYhpeoNmohu5mn",
  "key22": "SipiRXQTswavuU6x7UZfaPNUhSnKYH1jNLutCa77YToxZtfRBN2733KjTY59Rqk7LNJ3YptaQmVWyLcCxSttgK7",
  "key23": "2xk5SzGjNEtyVYVijFCddfTwMR2EojEeQL5dVkrmDx6R9sYvko54UAa6z2ZqCUMNmnBRizT3yqxHErMwZTiNccYf",
  "key24": "546pmAkKyXSg1QNasm868zf1r6P1UY7mTJg8Sb2vkZzdv6jnWV14TAodXu6GsKagbHjgY8BD7VtHkhmAtU6PdAb3",
  "key25": "3hvkqXLjr1UUFapvSXPysjP3p7saPk1BMZJe8MDNrVUMkiFmx7xvhFcursqqtDXEV3ZDs3GuSNynQvuAb1xcMkbG",
  "key26": "uKX7eJaLmXUiw2iLxuCjuQ94u66TbtVXqzfiyfDEd3CHV5Jn5QNPNgFWQ7VKVGt6ywgBQoW2Y8qGK5gBEMM3rsg",
  "key27": "4scZ9v2CxRx4EJk18G6qJQmtCrVLqm2nXNkovCDHEiGfRnDCWreKcKpGZQ3NhrvZ9b9zRQ2P1tjXdLQeRvU58n4s",
  "key28": "3fTeS4AWyFeWfgDrxamKEn9QWZENrHvGAmeawv2ba8hMKDpTzvkXNjNZBxKMX39m523KHreMePL7Jp4JQGcve6eJ",
  "key29": "2x2gEiQiirdrYDh8cUqtmusdWX8A2qXDBCG33Vn5UhwXfMMA2dMPbExjCiLWWs88hz8KQxMGAQbsL4fibZKvgC8G",
  "key30": "61X57VJYGULaR13Cx6AnMX1q4hwEtsooR1b3epNRATGmGX4EQrsiE5yXPU7afD5dDTMp1uVCxnaL14sL7PtmFzN3",
  "key31": "rJwpgoUbMaDqorZhccsM2dbsaCESdmypToSMqWU1T5tj6FbY7oWzS3kHEV6uvp1XeySPjHLz6UdPbPieHwKBhDS"
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
