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
    "64w7jgFLmgFX4D1HgbqtMcqpACS85AYVXXwAchJZfMBspTE1AaEARC1H3SHLBsiXz4Sv7aw8xgSdyG3611HVd22C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47RPTdam9EicHXVgeEoEkniLXbW5k2LGhFLhwUZSCH3wooJqut1pavribL4pvzNtiDE5FouvT1GSiH2RQx3LWstg",
  "key1": "2Xz9q7k48eHKSjcAzg5sfvKARiwTpAcYD9mUriQ5QqCSjgARRxZY3t7C4B4mE8QtaGv4KhQq7qimvPXxjCW58afp",
  "key2": "Av15bvY311D3DaD4ELSEyYYGpqSntcq5mqaKrxN6SPYwZDBZxRzhJmC6XkZV6fxU8Tikqq6cqca61PBBt64xzXV",
  "key3": "61FYDvCVPpbHyVk93dHNVqBG1R9u8EvEjrTh7C8NndHktBbEQZNqPxgS5hqCP44YYnE6vfKhNG5HWy5HAJ34d446",
  "key4": "5qAg4iJNXjYJD2ns3g4LKqiQ6mg69jVrTApUvk2uu5cT2ycNBWk6Z4814HWuXp665fUjj6phAQhSPWbsf6KeGbZY",
  "key5": "LW3eZqTiMUrns6CjbfJJZ5EWNuVUhBtXy8aNxrisZYnXbDa8xiWKaf7UAVgje6NpXjEyz85A2f6Lm1g5YBj4kDy",
  "key6": "5fCZwRegko7CoKkvY7yevH775LywNq2aHAQKo9tecDeTTCDvEWuRSJGTmeDLAKUzmCBp7hkbdQrg7Ln7TudREhrh",
  "key7": "342j48g3q1UUwzudXoDpF2svqSS925fXhsjyyyvDjdneBGF6xBeTxxfDsoY5mu8NxPYrcoJ61o8JtF6bfBDNyFdk",
  "key8": "3LQLSSizhNB6q4FexEmhDfQBLpjV1dMHxwSXjvXjxfy4b6B8LGVB95RgUaALY5gfYGX8GzfwcHtiQYawYZahb6nC",
  "key9": "zRyJuKXnhA7PkUVi3zLWSaNp6LZtuNL9YyDmsEJ5GnXANYtwDjLCAb4CDrJFbuBtjRMJ7KF25yKttJnaYFxeyTY",
  "key10": "5YZsmHGKVi9LcbJJFFRkGQ7zGvPRGdQXQNcB2wvSTms96uXzk7BeWVByQ2iXgVPcoRaQbr6xgFJsw74ua73gn1wd",
  "key11": "3736CNEi6uzykp7rTMYsiemT4Ldnvp3kroWs3p43xk5RCXGk5pRjZGJwpLFfWPTKZnFapXvV3V5hoLD7ExvxtxLF",
  "key12": "4LNFDUv68qDegfDu1uH6LwPo1oSv3WZZxBWLuGzqRphQecMTJkjGEVMeDZZR4UBZHVtMAnWFK8VfY1e36xdHsjM",
  "key13": "2pNCxM8BTu4KMYYUZJo5cHNT9XBegaWQ23UPqpTozWfikB33Caa6khs15pe71F3PWhR8jrjYv4mhXordkp2BmFGQ",
  "key14": "YRLym825TE74ve921FtPHZ93jKwzCujg2L4w2dpJXKHdBTm9BaN1AHFYyyc8XsvZYJsXWfRR87W7gNTM8Kw8PTG",
  "key15": "3NqmhioALRVeuo7kKTKASqddE3UiXbGGhxASbD956dVn2TWqZrWusDg7MDwVWz12TYACX6VDBNG5HEteXUzPXdTV",
  "key16": "4b8PuM4FrVQaiPDpfsvk3RR2VQfyeoRKPR3QtXQzk7GPH6eC2A5CcBu2kcGDyaXbjkvCB11VHPGGk8actJLvWUxH",
  "key17": "4eA1eY8SwF87qeCZUEPCMEwbbToMu9TLcdCpe9Fp3VeL7qf4PWgQN4egVJZwgb4ncL8EAH3SUftVLwZNceBL8B1W",
  "key18": "4HcSKievwfSyWZET7MrcGCMwxdje4MscECKpd3o1zCnc5gMorG6D8qS2TtGioDRStY8BFSZtgrocdCskh7G7AmyT",
  "key19": "PKNQNnP6dJXHBpWowfZSWCawyMcHisCAsKYjBDxT7sqxMScJfTR8gK6iTUqKa3EKVc2gKvy8epYRu3mMg1x2qMU",
  "key20": "51EYVj6uCK6k4s9mhuxvFEi4cPdXhbK8MWQACWxe7nUEqDxteiDq9VENpPdsftuKY65hcedavbTxne2ZiCJJBngT",
  "key21": "619m7S2bAt6z9embSbV4gy47YVskvbJyuJ73oMAwiqCcnFnMrnwGMSaTJezvJkVt54z28Pw3vME8LWkq5JYD8yNf",
  "key22": "3etv3ZeW8ayHPPmSvmJuxHNijgY18LhkQtMU7GLSA2HqxNZJscr1WarqcLeiWMMHoJmM9TnrxLQQvyxyaUAuakhh",
  "key23": "2CXMLWWTtyfwNXA9KjupU16YAuDCgAiPJFB3CNW3jd4ok5csGhPa2MaBpiPd82D8JabwUx258rHM74gBvGTnBcBF",
  "key24": "3iucFPSRwPkMaM5DYNs52zEvJ8kCv51NHgBquT998tBgfDW3h3coU1fWjhu1UHsLDVkosK99TEBCEox1reyKL3Bm",
  "key25": "oeeeuuBoF1sa5SetVXgE2cQbJKjtTFmxS1EwKJyfhEqer8JaE5ddVh6ntWjF3XqxcDvNw4uaVL47y2SxL4iHMJe",
  "key26": "62bCaA526TZ7N5J9Lwu4LHUTuDQytnPt8o5SygtzoJKkRC2dVcchrbzYHxXqgT3Kace4PzVkM7gMDBx6Um3cHHMS",
  "key27": "5Kb3ESvDGhHbnGviotrAD1MUXMTAmkDXjvbLSbDrnmirvmknE82RG9A4hPfV39bdDbH1Fho456wC1BXgbwwSBfj8",
  "key28": "3dQHpVP1QoGX5KdaBjoMa9BdqLPBJf1ThjFNGg1t89oFjMTAWAZaQrJ1CWwFardka1fuoW24qzc1KFeeUs6q2uuf",
  "key29": "5zmY13cevGeTYdcL71JURFekFtVanP5kXhtnbT3SvrAPxc2QpRH2AnvcDYcWm6QmEPd6nPHRBhTdoQHDY413mXqU",
  "key30": "3SWxsiWYZdgJwmFe3jeEg5rP93XmyHbRi8dy8xvtbhHsYSpd4DYisjrvpacmK8Jijk5HjCzGqA8G4hTPeTmDW2V5",
  "key31": "3J1DPhAeVjLHk3JTieRW2qRvSouda7ZEfDFFK1R85mfRnrwa9PSLVajp7kfRoH7s3Rg8hJtdAvjzsibQkfgypozt",
  "key32": "5hSc18PMeBEwZ7vSDHfRjT4mdLN4A8i2bxxwTzsaca4azUkYfJtGkjDorpyKYT5BLoJ5YP41uyh7qVbU2BapWs8G",
  "key33": "2bvhkmwjENvsQz1AWmTb6LYfmqKg96LCUJhi6L4tLtJnFd8sExuxCTvwpFNVg2qcH3EgnPLGYYXJNdZp7mXvFfiD"
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
