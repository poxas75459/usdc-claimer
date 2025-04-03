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
    "2jmSKAdpRNGCvkxmPQPVMj2mxAEFDsKAjSnyC8Vm2FLEcfhkq4Bgd8psALRNqYcbgqM8urtQp6GPApe9ZWjvxg6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zj1ZMEveDMBUNWxgjnf3hjBK1MmzVbZwPUXrWPXAKf67TbQf3a3zN1RY4j7NxRSgoypdaB9KhQVnwp5AsjcjJgc",
  "key1": "5bBfddDVA3MkXQTzRDADBeSWoqQxf7YrsxKvVpEqYGCsnkFMkvgA6JmBGrvuM3V6rk1dXvX95J1XAVGEjfpGpNK4",
  "key2": "5DgXkh2DNSwDWh3qVjCT79Dv3uiKZNXNh5QtbXsuDuVcosZ22TQWywuYVz9bJuULRucP2mtz7Q7FfX9WtYHJkwJH",
  "key3": "4n17qZLLC4EK5ZpjAtKskTgYqKJHbVWuxhNPXRtfQLNhyXtPChAQEQjkVER9MHLP5KDTUjpxfwv3K3tRoNKNUVPL",
  "key4": "3NEH12xjPsxUJt7Hr8DU5XYsMkAokqSc76gXUxLByEhcfUuVqRAUA53mcsGA45nyz8epnDy5UZSZTWbSVUiRveWd",
  "key5": "FoB7w6fHsgfr4HgfRUXtTTLSM3uziy7drXgs4gLikAmUQMzzYjyS6Y6gqrPkGsxGyVzRtzdbn5jibsbRFv2TH4f",
  "key6": "2RYtQabWcMEAumXvJ15YBR2Sb9D4Hk4jYKrm5Hac7h6P9JHAYAC4J9MSMrDpvYHThHGNJc76b1WYwJPnx7G31rMK",
  "key7": "3LeWG2BeUcnw4XrawR6goof5XzTq1ApX4e6u5pVRYVJgbcuKiKP1Yek1aS5Y3jRh7WhArWuoeYQ8famAHmRZM5Kv",
  "key8": "4M7jDWn2Vcz6T2urQqfXQQsYEeT17b67T2Q4SS7BHyk5UsBV1xdyJWGjbR6VRXjW3ujURJwwieLmRKeYByDD42rA",
  "key9": "4ntLQ4wofVGBB3RkRL4bvVEsL4in2FwYubSMoM9s6ZLCMuVxYxy5eZPr6v1JoGgMmgrUBMMe1DBsZaHCEyif4ZBD",
  "key10": "5QNBQL4t1xCw7naWqutjN6wRmEmUHFkRuuNP2bB2NvWRwjF2XgbNimuigUBoQtrN9eZ7jvTKa8B4SbSaQjMMrpUx",
  "key11": "2MC2vtYqqFQ8pgRTXSGtY61GGTW2MKmkvUm3KZQkd5fmRKeJSnLf4MxifZU1n3NWszPAs7rbVYS77qBTzxBwshLf",
  "key12": "4ffhFBeYh7DxzGW6ziNh3xkGC5yEAXzjuiVcXKDDu5sK5haPFRqQmqPYZUhuNcJsb97Kr1Js7LMyUcpXX5dVagex",
  "key13": "23csZ3LQhXfPS812fg48fvD1J5JtMwQpUvi9MqiUKtcyKZDAjezPXxfna3veTALR5V6ZHiZzTKQjpQXsjhcG3S7r",
  "key14": "3rjTsYFbB1X8MtwwLgse8zRjSVdg8QXUgYxjsP7MH9LKdkgHSWsUVD2NN76BWrhoKDE1AMBXRTpMzMG1phn1KTK7",
  "key15": "5HCLyoCRpwHvDe5sVsPCtuLGLSgUSZFAUyA5fhZk43osqvFqe3JB8Ti1uSpYKiCNQHjV5i4tgiWc6tmqyrENB9zf",
  "key16": "65Dyzo5qh4unE5Q1MvJZuMZXaW9taSmwXUSXmjUkcYCAU2JxsSUakQDoeHo7Txxn5fEV6E3hz5WWduerKhxjz38P",
  "key17": "4vUmMJ5GupDjS7ssH965UennM8LZgc2BfvRNgzLjZi641LWSuQXPpDa2vjzUweA4cxgLCNM3jX3dEXfygSp5Sm4r",
  "key18": "2PhgjUNXwbfnXj9YyPYZdwGVjRx75VdUn3EZFJGd1G9kWNE4Ks6UuvqANR9LHEVMUdQ3PYyPsg9RV32jAdNrtngS",
  "key19": "3KhJKDFibtGh1SvufCGnHZpqxpbgofxZ4dxCaSAyd3bnKZznPWE6J4SPEp7W8qxRRWfzi4izcCqNH4ffhH5nJoC2",
  "key20": "5L5JhmMb6VhMDLkiHoPZ2LygxwykbUoCmUkWrJRe1riY8ygg7tZFEk6WVTD4WYjTp5L5BYP6xXwukRXRE555xMuT",
  "key21": "c6Hz3jvzSNoMCpfWYLkfvwU7Mv8721QX78AJ6Pqxsp39d9ZVRHuDdEs2EUnuw9X311zTjpmrbG9sVE2wVKg629B",
  "key22": "aqNKGCMx13eAtagSgFv5YRUpK3QHzwsK4dR4SJ2pWbTYVEoiM7GURcmYZfoijb1VqGtpUkuhdeFLHug5EdQqXjK",
  "key23": "2pcB62Komuc6ZhZbNN97ubchTYXdrJ3m2kcBYeyFpgdhu9NjYqbEcRRVSmbTgnspDg7uxwdkDKJdtvgLFxc6a3Ae",
  "key24": "3XiwgxFUPNpkTZjEZx7fJG4dHhJndHbBydXFcHfNaPNosMEczSx3dM4WgpDn6EWaZwdQu6xsVKFTGptkaZ2Q3df3",
  "key25": "4AssB6GkNB8PzxBefR9BmxoiQNCFdVhdgHaasBu7vvQ32Gfa7jhoNcoQQpobcJ1LAHyLZdyzoV4PbCrye98vu4UN",
  "key26": "5xinXanZCxYAswYTm1suEkBwKF3QFY6ckiQ81FWuiPdebavnmRGGtZtTFuyQvzbmHyXjp4U9L7FhfXFK5o19ZA7N",
  "key27": "2cB19LdxA5xzyGFq5cvhtR8KaAkK1m5sLWhQmGXhz3cLvZmCfnf3KSS8CxSGT81kVG6aXLn5S2gEKNVPLEz2bycf",
  "key28": "3VU5YsUxDX5yZrpLC3FrKmbahJAfXuju79wsAqsKj4J9kArtoawQJgSFCNkEyF3NEe2ChPCMpBWa7pbJoakGRSpi",
  "key29": "3HFvubWQNy4hQ3P3acDMMFiQApW8BW8FY22dJN6DDeYBdtKsdHbwqAFCQEAwGNjF6ewYYcFzCpVyR5XXgjkeXr9U",
  "key30": "3jA3TaEbdJnKwj6Q3uQ6dJaGwaZbB3Z7xo4gijdATP3kXcg1Nh55c34D9wRT5f9DzBpeEmpk491tf2K9w7rfTBfZ",
  "key31": "42ufhiSmJRp7sWXQiZtbGe95o1oGdw2CFJfjUBnMaAdv8VV4wqn7zDDhrBEW4Y7dqL9wpXyhnCrCFE8rLw81Pd2m",
  "key32": "3e6FChKhfsr1KRHUDoiuEcpE6iAUSnmrgozEVLdPUR5bpbmMY9q8T6t3MGPV9hnSyKf6fCyxWqkxPoWDojq5J9cS",
  "key33": "3crgYy55eaxmynTBGncpQv1YGvJG24Q7Xk3zZdnT1FYENbSpLv4vDP8v6c3YUWHMA8yzG2z299XwAWQExT68ohAQ",
  "key34": "2Fc1vyZVEcBdjspc2EBtfD5rfd66EXz6uwy2T1dYhbKEkBKsAZy2X3BxwMm5dz3gHMHEKcChDGTqA8fsoBNjDsEU",
  "key35": "4xQzZaShLATHqvPtv2bdsBKFLcvUqUyRh2QpnpmyxnCxuQxZCiSQYwy9yDzQYGnhKGnNuPkSnddeaumgr1dvuPy2",
  "key36": "4qMpLnGPL6uXL6XR8JikWCJzhKTvFAUZMRtGqB5shDFoiTdHpFzuwBw64p7RP8gyiFhfgwLQWdadTFAJCw3VZvYR",
  "key37": "5oyA4i9MDopJPTQJPjqMTbT4ScV8kWc8j3A83rHEhRqwLzY2UKGMtzs5voM7ULXekZugeqmRWnSULjV6Xf4XHEmQ",
  "key38": "5FCq3pkXvAdw7HqT48DL5Bbhnuq8gNVTEfYbPBWy5GSEPCTcmjsu864yMvRCPv6qmwvDtAZxwBs14rt8torZMbWy",
  "key39": "JGqvzQVoSFJ9won7b2K8GX6KzWkyGRyQv1Jtc3pXFKjxPJe6LDMMpwkh2ogJzp5hSMPefWJ2xMP31oyNSttN7QL",
  "key40": "54UCMc2LxxZb4f6H8WmbqDNtD8pAAWJweJUC1sjNk5cYmatj8UfzZw6h2Z8Gp86rkogzX1J45mFFdpG1kudKC1EW",
  "key41": "5QnSk3E6g77Ag2uxBJhpQFPvghXuhytcuMZ6iJuxygW7SbyndrHbBvhN8qxeXShoqnkTrox4fgntNPDGDGY8Xfrp",
  "key42": "51Z2sU1pumUG65WXosgLAvwvrt7tQLDejHiDF4jFXac17VhedV6vPGLLBfY7azkFBhSF7DM21nd69oZ43G8ssoao",
  "key43": "3hJ2zpzcaR76kTYPABJGTNVtqcLCiECfknEFDUtNYC9ZHTaxxtQBGoNkebk7s77ycQWVGZ8oq6Umb7KRRjMW346w",
  "key44": "StCubt2vL6KqUZL85rUSTAtbrzEL83TSvNvWKqs5itRRE69mfkgsnbYf8NoZgKSdtHCwKxwy1kukxTqQYv66DMM",
  "key45": "5ece3tR2H8ru29gC1MwAgMcn6tNH3EzmeaXxDkXmx5hqgs3uESqayjHNnKhS4bikSa67vkGshvPYPZieBcoRoNL6",
  "key46": "3iKzJqGCxNEg6g842xyuSGiC3wTRg19c4NSnD8g3zhQ8cqsbkxx2f6PQa8Cz3oetVrgYtAhy6MQPoKd3mkxrVME5",
  "key47": "pvnzdG4E7T6fFFJae2ReycvwBnwkHrHq512pccEhMd3yhyVvFakQxbAr61df6TbhmTkrbJ7V5uHHRTFco2jZDfs",
  "key48": "3qYy1KoumNu8cShXMCQEh9qCdZ8facZz1jJJDh2yKpbsZyNCkmp46D2pFKR3CwLFus315koYhkjkJJHnDWDPZ7WE",
  "key49": "3rrugdKTBwVsTqZdU2CStKQhT1n7Ee22YAZJU8vhxo47raL1mrbm9BrSwYLSzS7Do7HzpDbuWft2zsTmRqWwdsto"
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
