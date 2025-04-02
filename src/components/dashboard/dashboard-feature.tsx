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
    "4CXu9yWWuR4gNSNZ2FmnUXBPw2creisSusA46fbxXejgix6FGxby3zdoS4Fbasy8BA8nevyx7imUP3W8PmwwJmwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccsSdTwipMTkCnFxNxGxtfViuWkAs8AceKBf12JdaynmqN3Uj31EAoHDWB8MD1izqkdpaxfJMM3FQZiTDQZYFwQ",
  "key1": "2YxvtGg2jkryDFTQzpdWzFZQBF2Cig6MKoudtm7aErRza96MeVVUPG3iUv1aPhXR5SUCkrz9yRfgL8fMzredBEdc",
  "key2": "21fNuXRKvC5sH2ton6xGQwYw2bJE2GRqftn9a8fS4RCFRMFWM5H4msTVeWnxvZmQpa3t2yJkd3nvJ7GGR9WFDotn",
  "key3": "5ReVcJ7MJsCzowC1FcyFqpTYDJJ5BcCvkq7C32WPa8F5aNXVs2cNAR3MkXawW2cCpLje1TWAFfE2SQvn66H7e8Mp",
  "key4": "42esD2HCcsoTPkCbWL4QRx29etybQP79s86UHhoJRndhjaWFQWZRgQG7iV56xjRNMvaysUUobkuykhXFnVxv9WNS",
  "key5": "361aEv6kaZqVvBt8HA72BQxZKthSVCyhR93Z35NmTF6Uxec4U5eWBDAVXRHCV7wDybYJug42mWphjQ4ZffM2Ercv",
  "key6": "2mekWsnF97xtBQNE48acvfeQbWHroKWGy79uGb1cKZMUrxn8hhBj8g5gN4YLjfPvcxA9C8NqEmTGyq8nr2UxAjyM",
  "key7": "2arzU7o9BvrCrjEZMJb96jANtMHKL9gbWAxtZnns7MdkedUSkJFssyYkNaKtcnaM167XFiRBkT51fACbv8tEaDsF",
  "key8": "3u8btmUiUkzz8CAyS9n2QNJKmZSDDtDMHF5MbaPvYSM4E3QN4dZhf7DN6xuvXUnLCbGLTXUuPN8hZk9KH6kjUcpw",
  "key9": "527vA2KqivQ5aUPeEffufzdiWjKKDwh3LLHrb5bjNfhJ8kKi5VeNrSMpt3x1wEWpu6QgWcKMaymtdjzcB1gHStBN",
  "key10": "4245pJRW8ZEhEgjhZEmLJ8JthWFgQ8GHmeis5NtiyTumsFSk64g3aRNYvsAB4nZT2RiqGmHH3QFwPZCNZfZTM5r4",
  "key11": "Us5AziQXMQgnt1SfDgquB4Fpc5wBeEE82zhszxesK9ppiQhVxp5NxjSRKKhWpY1p9RMvCasZbFtKqonNpp4kJrr",
  "key12": "5ifemd3xvjsPCxwsqHnT9pxzfuo7eBCeN6LPMPQevDSCTZLFyGmkabq94fXAg8ENAiSYMnaW3rqbpW6PsgoxWt3U",
  "key13": "1KfPPe3XCbpjJfWqANQ4e1J8phYVZ3bcp3XAk88RCtnA7E739LGoQRNmNAZoLhbB5hHNRs5qZmg3WiLpqpvd4s2",
  "key14": "5uPhJzNTtZgngwUEhxDbfrqKBDn1uoDnQbxKpJJum4fs5GYSSk2feNLiVSt2SXdjCU3poX5nuRvUtyiyX9Mj9foD",
  "key15": "Vx2vFnHNWf6r3f5KoBLmHKJ46C6yn9sJjmHwPMvBPYdn9XreA6fYpYqMU6PwuFhzynQRFT82QwZt9F4XKzndYze",
  "key16": "5E9NomgibW1LQ5g9cRWmmeLL1YLx4qNwgYe6FjHPKpMfiMcksQA9oRz6mvnL1NTU6ZpAfieWvvy4fweHEAUYcUEX",
  "key17": "3XJ1aEQ7mFq9FXoYywjbCMEho49c2mYq6ds52rujapYKZAi11LaZqFkC5qQYAcCCJDaWvKva5LTu4TgXUYd1biXN",
  "key18": "2zinWAVZbdqvyqdynez8W9VkWY6hShU4jjHCahszM9c2g3qbcuv8pxtoL1K6HeKA6UPdGpprSM2JLahQ7R3FkJyS",
  "key19": "2Ed72cK1ikq92f8xJp85aM7aTbBFsr78aJ73v8eVC9r1He6Lnw1TfoAPapjqLY9z3mjTeEBFWjKNFSaVN2En7VDa",
  "key20": "59x3n2bo7kzjAe67EU8Bp7PhM8mJGxAwC1CuhomP7w4VsE12hTwFnu3pVQQh9QqejfJcyZHN5Kt96y1GZpQGfGKQ",
  "key21": "4oSDfZfxTT17BfDBsMGesRF8xYsPqxV4pcHkvitHXwvgzpqLgZiFSqaLJQQ3UkaGXSHQyW1vXjaKQbWLo6s4MiNg",
  "key22": "4XkzL7vnJfvHmmRd8zY6WSyK5PQpqWmzfDv3ee3bXas9fkwTT35xEhK7xeQwHR3kvUvYyUQkRBpZvcf81TPbVLcw",
  "key23": "5Qf9VkLe7HGRAu9Fy4iYxz7fe3vGmszpHUUKmgm4SNAJMUqX9kHWXrYoq8hW6jBFVeqjhZwCWyqYij2aTKafEymc",
  "key24": "2MEJUxDrNhwXeQUgytEiAp4wEyzpFr3BnH5UkhubTYviz4P5Rw2LxVrxZnM8V4qF1ZCkCTXGzewxkkJvdPdGxCVF",
  "key25": "4zcH99bPJSTJB5TNyViyUWoL6L9fKEnJUCoeguWJttziRGBNUShtVjappq8SjKMaYLzsi4JdyVm5SAd2HvmBHeuP",
  "key26": "5gierLSk2rf8NAXT8PLsCo4snvr3uxCCKURpgs9JGjxEreXz6puzMzVtCoEH1CQYyw7buMWeaCYoNoq6krdfxdHS",
  "key27": "5z8JjNiNMVJSRtbVvETKfWqdu8jALKo98P9TEP8DufbqEGkrJcyWAr8LqMrQaF87akqfC31uoGn4vdmoNvbXrwd2",
  "key28": "34RwqdYp23fMmAsv3CFYnurTg8iP7WurLcFadSeY6jSHwwmsNidaw3Nofn9AP1vxg56ahDCs57oPzmE5Ku3HqWxG",
  "key29": "31juXgtVdSnczNaAoxQc2rDWew7FW1zkd4ii7vwrd2GtzWTxk7qAuYmSKUpyQSFBwAAf6WCdD8UWwK71RnfKDc6u",
  "key30": "32i8TxcMcLCiuYd2Ez8jT6TAURtfPRZeHpzh8GbD1Q8JccoMcsbKuVv6VzpyLTxBMomytsLdAKZbJHxaufVMourH",
  "key31": "3sS1pfB9iuFEwHtxhYWTTmDwr2HPF7fB8Pz6TZ986rzWMagvwu7wCzpdD19SuE7efAGjwdvJ5sSVXUd5QXo2egxD",
  "key32": "23XAjhBpLpDWGUcz7oDk4VscFxdW6ghENEZaB337yiesNY4pk911FoHffiuATy4y2qqs5wXDEr82FgeiQ3wt12dC",
  "key33": "2ebnjDXdRv1nLKuYt3jPpaaq5EpZWbHLY3stFBgw1ZnHHEeNyv9A75CoUrn2zjzigK6zixgioYmfkynsdNERF8YL",
  "key34": "v9LduLdqtARQz4cdiEYKuvWmhacj1XBMpuvXXwoSXWoJksbUGtkLDi6bmEstA3oeEZKB74D6yDusBMFSSw1xTUx",
  "key35": "4n7FFXoWGqx4Z5WizHHDeKdJzFGb5TFfFMnyoe78FADjmXFFuZV4swqcKgeVik7Q31XSujmdutgb2j1SzMXY2Qu4",
  "key36": "5bhmaSpHh55mgjZLAUZqtH32pG2mF4ugJShRi9inHNyqLNoJcQYnmXAGJBiSbJFBXK58397B3zqRWwnjsBDds8Ua",
  "key37": "4wthFLo2W9hNrV8RiseQ8Crt8XHSxE19aANG6nsxCg7tvETBigYaa8uhEEBNpJBtVSxL3NgJCbgyydU5DFhJpcPe",
  "key38": "5aEXPo7qHRiAMf87XXbsYfVn28E9RWjp2quhsknYJCjy5RHF1CxShdLaRG5rezWaTuSz7oFSk76Arigkr577XLvM",
  "key39": "5br5mWBaasSMh5hjhhgkQzkckmW5UYoFu1FjdGnT2sZQzB9LvVvss4A6VsVUnVu9wNsXTAzwXVe8dWCpsubhBD1D",
  "key40": "RbpvYCB856qA9TJE7a2qDfi35zXZ6uSCb6agwNG81BBnjKjH2oTB8Nq4dUs3emCR5EQ7GcqiGqpkJgVkCNEos2e",
  "key41": "jkh7mXV2YjWjo4AWTA8iifXEknZFZ8Ep7CSxrUbcsHE33kgZ7ZePNp1YB41rqc7QJusrifWbyrGMKX837x39KYF"
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
