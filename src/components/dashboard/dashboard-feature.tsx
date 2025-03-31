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
    "4FnU6535EhpoN3MmRkZuD5bRSzgp16SnSGQmES4LzkLUDEPwp1sEcnRmzHNQf6CJzKffUeu4YrhE5PHNtHjJK2Yq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6KF4bYQTcynBKdwaxtkaSz6ukx7LjzSUVCYYFVgDRaT6ZdLUJ1gh4ixH56cVfNiQ7f2i8ssBkfVVsFXLFsqPce",
  "key1": "HSoxfz4neyAimCmujyMuCaBFDcsXrSXv8AHKdDrK3zYAEyJMGVYCyUAJa6K4eSFWx5skmMa5QCJdxvbEMLoDU5A",
  "key2": "5RsuFJwUfbX5NKuah9g2GTbnraHfcYf4A7U9GCzUb4H5QYEshzJ6N3eYwLuppo7Bwtuxc5pWwoRUokxRyP5WnPLH",
  "key3": "yg2h3r25iXgpdxiiGoNBK21emR1tKcuD25JGE5BFsJsJnCCRgetqVkWEYt3Gyt9CGJ6CNBZ8pLr3VowPMUHyFGn",
  "key4": "5MpV8UYxgVVwEzcdzdkurPyLqPNPV8Y5HypASbPKak7goSFTudnkQnmuf1yXYQqNg4BXZBCfDEz3tdThmCG2NAH9",
  "key5": "29sdsjGGhCnyei6YaVTHwjXsmwyXDouD4iMzRouWU7Csr9TQoyn5HUrbJeGeZhQYt1xRCkGvZ2p4fNMypQXCM76M",
  "key6": "3S5ovGnVPNYZnJBHs2FQN4mo6vX5Rq3ZG9dLvjUBJBocmkJRuA2rsL9gtXiDuB89pGjXHzaVXKQ3ZRLZs9K3f8f2",
  "key7": "egs3Qmmow4FmZtKqobjgJZU8incHqVi2C23uasoG8GWQncAKA2z3dmSu1CTq4QWAC768FFyuph4BxtnJKrnc4Lf",
  "key8": "5vdNq6RomW3UtcNv6BrGypqFJTdFe8jnk54sYpQy9JuLJ7TL8mL2AEqnMZdN9RD427DrmQdsPrE7j4jHcBeuaMgN",
  "key9": "3oBgk2KEXzkceVQR2ddzVpsZXAeQSBcDJJHZANV6qGe9arjdGSqA8gRwKGU5Xv25sQwS8xPwE1YJogYE1qevgQLt",
  "key10": "APWdh6u7FQoCQE6sy342LXD4iNTkJYjovbHJR7ZBCwwXBVqDANbShoMRTuFZLCQfohygR9uFivY3KYJ8FDxm2ti",
  "key11": "4qV9RpNkpqbKF9LJs4Kpo9AzKFL6Sc2EBvsHckJpPJUNJLDHAMKvASE6kMScCd9wwm17EMoNXYYUT2eNVjHQz1z",
  "key12": "3fxUMLtXqTdA2uzvCedK7nAhbPRqt6JbuJhpa4Bi7kLMyaxGnyHeDXLwck8y44iGT5oF9Pfe8vewDEM95sdjTq5V",
  "key13": "W3atLnNChWyTvW7bKRKd3VA2tUU2zq7rH5mVS1qd3RX4EQMqkFRnnz9GbEENA1TWSiTw5aqrWpdVix9CDdjRPWn",
  "key14": "yvXK5epNNNsrr6XQSV1WD6MiS48GczUK2dwQp84PuEeEAwLuWeetDTYZ2uPX76RtsdvaxTDJxFZeyW5vMh4yPBD",
  "key15": "4tbZLhSnLxVHx6BR99PUzzAHmBKK9wP7Lvd33hUDjKKT6k9PPqweYva1AP7bAiZS91tBC5Ft5h8yPFrK2uHjUyq3",
  "key16": "27Kgmvv7FpCGEmjBMS5Dr7qm2jMgJcjvM8f9Hbuk356wQ7tuWWwxXNtaK4rkpAFPY62z9fVsNdugtod8UzGEiHbY",
  "key17": "4YbizjtH4sg24CrbZE9TX36sHMBvQu2LqjCbUsaHmb6bSmsBiFz24w3HQz36S5YunPRskqPTgDkDRihfQgUoGPGS",
  "key18": "4m627kiguG5QCFn1MVbAdAQN4BqfcZNdDbZMx57SYEjCS571J84XREw6LPMZgcXrqAUTnQFdpzhEnwqsf1vvwHgP",
  "key19": "2DLa58XW3gKwypKTzLJNSqo5ZoegzLds7pM8J6veGCzqvdCcpHDY5T3iAgixeY3trFhF4rNtW5g5W7R356tZraxE",
  "key20": "28iqbutndcRoC66efCPWBCv2ed6vaGJcwChAFsQeRf8fWUBf8KEGQLYGXJiydgPjYs5sbatDziYdY289y92bFV8z",
  "key21": "44wqLSwteEMvzdmTnA7TppfHY4we81NDG8W7RDdmKqQqoJjWtrt2otGRnSCCaJBhqdepxgubhL7CjGFZwVcwwPrH",
  "key22": "2KQ7LcV8kNYnP7HYSjvbsfXueBTjC5kzvN5shxu3vXeY33A3LP7p5ABjaBhjznmLnkyDt8B6xXkHKk9C8T8cCWgZ",
  "key23": "2KUotSwgq7rL69nCaK6n62UB5y48dkezBBNAoaH8Roa7KW8sSYmkEajD2TjMQduaSChXw87ywzKTSRo1vhf6uscy",
  "key24": "2CSNPFdH3HpaZDF9y6VUsM713K5T3bqiknCqcR3QHo4CHcHQPES8s9PBLE4ELf9CH7XtjnYKoBiBTFkVSM3D4Hqw",
  "key25": "4Dvqonghwm3Qiwpum67Td5EErR7QYTc43DpTWKJSJFXPbwXossg1iL6nVMth3oHqQpDuzWKBxWmrGVE6zXkwGJSA",
  "key26": "55Wm8Wp2u1Esc74eViiZyAjGrvJn16pcLn1DSD6iiTkyz1S9X73F28pdDDAFnXDLceb5kwYVFNh1vam5ExWGXZcP",
  "key27": "4ud2gfUmmAchonDAU8rFRezAYZapnKWdLngiPokmo9nW3YqNWxm8EkcGZKcMhBCZQLDJ7Q14N7HJto15Dz3oA9DM"
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
