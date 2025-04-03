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
    "3uNFYhjvRsjbyiSgBgvz2n7p9JpAkcLRUmGvZ8qungtYG4NfstsG79MxhzzM7oyyTsT4rFv7dCZcXbRwCFRLN3LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2Wh7bhn2tJyZX2QLui9DpBeox7EcAZWReW1ytwQvHwd1UnKJ9xwgEH7gUn2YcWe8iPxcs7XPxmxs119HM1eGhd",
  "key1": "4rPYPQwmvcq6E6F4ynqs83rM8AKuAfU6CqUycV1brnBq298JV7UqE8xbQeQvBMkZumizVk6nGDe5Ftqe3uWTCojD",
  "key2": "2EMKjNaMu2cZzoAGLSDBrk6bZKKRGuViZKaZuE6rwi1pTzXbceERXHkuWAsxXaDJBsQjBtk3yzpUXahaTxktg6dp",
  "key3": "5ZDTtDHiaUtSEtWSd4jMtunaznnf84uFbcgTMqTprtRib1BzmxytXR1vYZfZkjEVx8zo5HgzZdzQyj3ggCtcZeW9",
  "key4": "26y4CPe5B6d239yMbU3EAvkBAW7ybrKiBxLPufCa2oofS6eDq5X3R2daRvNnKACVn5qQ6iaefVCUZVc752uA5QKh",
  "key5": "2jBBvwiSAEQoPTyN1QPFUGaus4Vsq8qPbFfoebkCmUJN9618EpAf3JGXrkzhYfMUWmXRpXHjfBMfSDZWfEohPuk2",
  "key6": "5tDynymvmZhRB9kM6LQVHFNaL4vbWXvmg7ASCoTNGNEUcTpZBYAm2rMRpS4F3kJ94oPSUSFzoVh6WA9CNaNE6v3t",
  "key7": "4kJurvyLC5jx82AGFxSRwF94RztZ1UarrP4XZiVHbfjWWQrEXxECziZNT4G183vrCm96JbnJN9Wd7aJiuoosJnbv",
  "key8": "4Qk1AYNSzHtAZVHZo5yraZJgT1QTb6LffpfSwJ1x492cGVFpKd8yALdZXvSKJZ9GPtAn6S5UbMXX8hoKcjabuueR",
  "key9": "58pPkTASVv1i82zU2UN14S83sQWfBankevP5xEcrpnNmr6szrDq9z5BZoLTaYfwrjZp4mWhiUP3tFA46fd89CZ7Q",
  "key10": "2ibsR1UzPYHSmsaC7C8LYHBx6d2ML2EKwtjE77bZKfkqATEq5YYwzNeQymXqAe71tth1HMTn1HjWWEtDqLyTFr2Q",
  "key11": "4ZMkrL6trrHqFbu4d15MWmccHp9tyDjMXDXhmSK7eFqB8Dx9Ef6XCZEgVPNmToe6pizFQ6yctLyKZroctVHDue1h",
  "key12": "3wsTVuNRM2jLyrUqNBcnCf8gv4kTer2PvY1NhzPRWbSM7cu1AjLEsqGNeVdUKE1rw18gBhQJBfPq7ikBzRyaW8Uu",
  "key13": "2kDbBLDQcZHunCpUM1m6CtyWvRsrEroQP8Q5HE93uE9beWcVTDY93L1m6T4HeMN3qjky82hZgNp4NprcSvgo3Csq",
  "key14": "hk2sFiqG5CU8sUnAQgVc3VmP9373xfQoL66dR2J8rJzyUFhoz1XafVQdPikcu6kKgVzgozuB5FGpFNyPNwopCR8",
  "key15": "2mmHg6mNR14ygoJuZQKCmCkiGi4R9H8rcAEtH4org37miq815bUwULUePQbi4ZUMbfApmRUFjw2WJmQtvx3B5boa",
  "key16": "EaMYKyEL9xw9dGmVgWDPUr8FzCnDeCjadvE41uT4zAx9Sbp9YLysdjybJwvd32JDNqkdL2wC8cMYSCxr7D5K6Tw",
  "key17": "2nrPzydV3ER4pXc23KWTqmAWUDGG4cMhgPW1EUdq5U2R5roEnXQ6KcHKDA74Zrvqj765ezeVpKduhMg6Hk6Yz5tA",
  "key18": "5JwN8ZFzrQVUKgom9qMHgVvpvtMg21PvWXfStfsPQg8au5Bi5uRvw3eMr9rKfKRjiz2JrTL2J4324VF6FvpzAae1",
  "key19": "41NYSosM4UzYXRW1BP2PThi7mAVGH7U8VrSzpGLxJ5qAfUdAVpvLUPReWv4yWo1wStTWLJpcSmE2T6haLxPoJZz8",
  "key20": "56sYxJRLWFysUPJGaXShvLx9ZucgqEHgx7G6iAizqvAvcWuF4yTmt5asHdgJenootJXdwgegy8MvdgPq2KRbN67D",
  "key21": "2LBXMY6z7FKWv6Ku9Fgc82Weq8mXoh7BB66gKkkfM38h35y5H2H5iaZSwdh23hJCZre5bhpFV4KQu4ccmGahe4RY",
  "key22": "57GibhocUDRd6MMndFH3pnUWFn2k4a3v4Wt8rYVpBD7nD3tbim8b9dFip9KUk1N7iXRMA9HDMAzvs9Ez3k7Ui2u6",
  "key23": "px8PZK8xbBRxQP7XX4QFQtnoniwLJCLFPaRZTUz5U2epCMS5ZwtAnZdJqMr2sannNdKoKsgH5WfEzxqUZMpR4v7",
  "key24": "4jTeGJJH8s8mkeJk77Jgymdx4bR6om9mAfg3PzWhxgc1AiKmcZ5V7DG8PkyPW8ST1B65GSL4xWBtNnfKdP4PJTVX",
  "key25": "4Bf32WaA8qiTreaWgCoYDxEYnkgeN4fLsmuEB9FJ1cmkLWNZc7dEMxg5iY9AkWL2qUvvF84EgxtGChtFj9LXJA5j",
  "key26": "3m8xtG3CpJDNphBDLygtiRYsWppqsHeJ8zJXu76RfjasUY7CSLGpZPRyijLbGw2EpN9Vc5DnHnbtbFt3M9hsoJJD",
  "key27": "3megmuxp5uLqniS8vvkraZUyDA8ZhnPUVU8z3Vqooh2HeAuMKARBHJENZ38TXzWmheEPrTXbfZWG3GiUKo2nBk8g",
  "key28": "3nkhawTULnS89xsraHYgKJsoeqGRj1zukQMvT4eK3FDiPDkVHCJKKZVVocb1Vs443r4z7z8EM6ozLiLMeRMoRDCC",
  "key29": "2UX6Y6RjtTghhuQRfBg5X138x29pkqJhWjZaVPGE8cjMbPhNEkLCez6jY4QfVJ8dgCGoP5FRZSQAUUW4iTmHp6bW",
  "key30": "5rHAD9UvYxiGLsNHmSsDtXfy4j6EKzyypnLHthVRByiisXZUSBMVR2iRtCekEXwmfpUnfNxmAuVh4CYHvTvCeg6x",
  "key31": "3DCstxaqjycyYfG8KzmHycr5y9i3a3RB7ysa152ApvQ5jWP8kRwfGfZvNi5ermHNF3gPTCy6xpNkH2Jb5FMezfE4",
  "key32": "5zfyisYm2afymNywX8VNVSNCsUag4QuHxn9snvhsBDjCipQ2E3XpoYPaE1WfpXrmLAyYwcSCpF9rngQHUYL8nDPY",
  "key33": "5emxCZ2a5d7UjCgCtKMKrcARFyF4pb1DfvkXuSPd6EtKYtgMQMojNL2yzmS3PZjSuWDauGaBbp9uWjKK8D7paArA",
  "key34": "5TuPDtkSzwe8Hv4YGnKANznnGk99F3744esGcTgXrt2m9f13MNvgRZY3CJ9AXJ2U8DmM9cwddcMXYXoVDmnxEEm9",
  "key35": "3LucLvzVK5AhqEL8vv7BLqP3uP1XZe3GW6cE3gA9moKzMsrwjzjfMugsztLM1cP6gvitWa4UBsJMc1V53wDVWnMp",
  "key36": "2iqN3FXVKxZxfoMCq4DexxfmN2gPntqASfN4mZn5v361Uhx8cXK2P3TyBDpry6UU6CDj9JA1Vz5sSdb1YcfSyHGj",
  "key37": "6CDuQwegnmfBrKNvi6dRH18zfB48VxcPAz3AYbg7k3nZFfeYEDHUrCcbqWLDgzqgBGMGZYXY3mSQy21Kk3vat84"
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
