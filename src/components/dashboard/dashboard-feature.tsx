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
    "4eMWUGfAd3hei5ANF5LNtxnBbhwW5XZ5w5MfSi89hSUsk36a3Egzh6FjvG1CAR87YMTdNqksMqQmeuatjX4HWCX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hAJm8QF2Mh4YPdD64wqSfHWHGwYESgrBNSaCwJJoCFZMyb37rL2KssnuTxW4e4pKFZwSAGp2HQYmiBdAshE4wXP",
  "key1": "9mCuyEHMPMTepD6MrKfF7eeXyKzyAX8XDFEHcfzq4maGzakNZTJCncyZAnuLbrirWaxm4BTaeQXs69cNB8scc45",
  "key2": "3tZNb3nLbJNSVQTAoWUJWfV1aeSzwFogkYWxCi4KucBgqQKBxDpVaFHMogBiG5V3iRPJsMDN7JFyk67jbifhVGpg",
  "key3": "4jY7FHsR2BrQtmDCaxLNLDAPCqukkkR3iymYD1A5sMroimq1HWeuK6cLjUG7qBnj71LPgwgrjvpvsd3Df3vH8RdZ",
  "key4": "4LXCAeWa4WPXRrmVaxXuYsVULWW8M95H5gbYBfuSnZPeFixrS1guTEyX9C1ETPSnw7rtCzJe5DHM6BR8HwRT6C7E",
  "key5": "3nonu7jnHQv45WsxTF33hou18W584PYH378oyaPTPhcoUfHfDT9LD3wCUBYvnh1imdm7AqRjL2umd2YoPEMbhFat",
  "key6": "fJ5DXuVwyfvAWJ8x5fzubnHNsErSv4hLUv7kKrZm7h6i4X4wiqnoPv2UmUgvqKGwPnNQFNHd5iRRUYHRFpqEWob",
  "key7": "3J8rfyzLtworWy3rgq1bgDJeUyJZhoZHMPxPJ5eJrpBWSEgW7CPTC8DV9tmxYra261zUeo63nj2mjzfpzNdtmt1g",
  "key8": "5QLEiBCXRoLiJTVp2PSWtN9DZd6T3iHaqHmNgJfacyu91H8EpPTNK6dJr5V7rhRQ3cJ8kfkiHuVGtyvo2vz1iS4F",
  "key9": "4NiTMe9Z7oCFhkJwG4eAhR8K74hi1t7imnBjMeSjfnwBMUqQTq229RYq78sHaUa3Jj2Q1D9LTjtgRt58K4BJU6gD",
  "key10": "2fjwzKPKEAZWkkTg4f52XTnYNRQC5oDLFcuw6x5j9hCRMCDgi7LzdJge2LRMSvPqEK8my2u7Hs5UUy9NwbxDzVEB",
  "key11": "4thGHMf4jWg1izPHvwNmM75gk5GMnH9tTgSoF4QM5mQbsKeJH5ukXvRZUHW7v6GGFvZEmCVtEkWqLVPuQiQT4H2r",
  "key12": "2vND3UEGhZk8tt4u4xh3xwQ2yxCzrRdVVVEkJGdHbq6hhDTx59vs2URofXVu9e8QQR687UXxhz25iWgW95jtaGgu",
  "key13": "TCzz3bYuPT8BqJvgnm1P5z6mAXPaXJXyQZw39ynP3w1ZR6nkB9Nwjr4qNZXYsGxxdSX7RoCERzwLYcNH1uFGt4v",
  "key14": "Du4wN5beHjHN696WRhHiZFTC7DFQc3KUgKdmr2mBfKMX4QfF4KH25buyefovxo1NronsvmEGZzYc7GPUqTUWJoQ",
  "key15": "5B9Q13zCHr5p7QMXftGyrRGe61f26HGnudcVfKuWwDgRZwPki21dXBFpGSLGiYn5agY2oGd8xPudfwaBUMTxJ1eq",
  "key16": "2uzUcnYVWD1KNLGgPfb9Fx1bS6C5YVD9MBRvcqUceji6qrKNbioLs5i7M4opJ4Jx7AkZV2eKNRQ3aKSVsJLbB7F7",
  "key17": "3bMYKZJLZXVJa14SE1mG1d7pY6cxrZsF7zqnoTMU3J2FjUq1sMmRpw3RtV6oeZazmFGEXtKs2kNXZ71ZsH4JG86E",
  "key18": "PbUQEREpBE2z92sU5XDBncqZhBnp5dNLfJP4Enk1DuZvnKWACrRAnxECihNnJZxKN2EPyMwjk4L5cANFP65nCx7",
  "key19": "9UfBdbTvydBMZjhpfjKXukFRuh9NkozJZoxYeycPj2wEejUHxqLF1YfXKwPrCuBw2JgKNgMFeXPekye6SxWaQkU",
  "key20": "21Ru4nDuEXqwajRRc6DifWQEktksNHKwwgWp76MtE2aKRV6rzKRqcWsiacz6KLMqV6xZmxhM8NEczq1LV8iVrCHy",
  "key21": "2pneeNwZMeixeDRnBy5dwBbyrK3xVcjzKGVavjQtdbGZHTURce4MXaPmi6S1zdmrb9xZaN7o9gAKE6fpP7hpiZML",
  "key22": "F37iZYG5gaYrtMS63vCrnHckFksKRZaxuUkDcN8w26zvZajEwN9RosQb1BFrKTtNthNqzoUAPjZpVhP13Gqzpyf",
  "key23": "5ugM62ViLoSuxLZ6GSZtbJz223G9874Vp6rcw68oXZ5dYfjrGg8WboisyBSXFZDncY132FyxRY6nM8fw7sy2CaPb",
  "key24": "4ehgCidvoPJYBAvB3EaVWjm4KL1LGGXLfAXh14urdaw3UQGmBmRN9dEEitSedBWRkmGFMjGZKv6eorcoDXBWCJjk"
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
