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
    "JzFjVuyy3A3hwXYGLV11m8e3Ux8mWh3h4iX4qpEUazvqEfzFiWTgbXYHY17KmecEzeAGpitnsJCcW7KY8S1Puaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qjZ8S9tYgVxDngguPY8h5Tn4DBd2V4yXKbMJnBwBoSW7HJhc1kQ51sb4yDHL3dijaov6yctZPjiBp4Ptcky71Xk",
  "key1": "4tf1YE3WMvVk2F4XJCZA3AStFy4mKFMzk1WNeUC2qGRppV7AReXf217rYyGK8QPzjGTPeVjJjQiZJXcSRLtXBU34",
  "key2": "2HvgYnBzhER5vDrMPvaxXPk4eN4m1tcB62VndBHQAteUQQXhYQNKQudQ6cKuZeA16J1EwSWszMsk2Us2NbiCrsCQ",
  "key3": "25bssQKnxyFh69SKJa7fk2J2XTmr5xUXbK2qNNUpzoq9CVyAofZab4nertePoRA4DDU9KuCBU5SUmi6WenLMCueP",
  "key4": "4v1aPSTNmmih48nwQ2f8ubnW5stpyCHHsyXAbioPUU29TVAYkR9JqaaxubdMYu3Ahkfgexn2fqMtYjyRGVjzNE4p",
  "key5": "3qo28odKhUJdWauTeLooDXp14BEqwiftFKVXLUuRVHnLEBEqMSV1RbhbbpDWfcfBB3gX3UXrSaK5j5JD5whdgnaX",
  "key6": "55YagsJP1NnYLVVHJMz4fUgawAhNDwy1mdKruoGq98NaB8zLZCkHvbvaAduLLzNdTmCFA7Vx5WWtg6giLE5kGs9A",
  "key7": "3HaqjvYErtxPPgGEuBEqgYbvk5t9NYDPSWygnkbeBj2Ej2z8YerARZdoAAayHEQhuzrgo5UU64o1g9rS2FyeGji",
  "key8": "2DPXjME8VeUPtmkXuLkWVGyap6W89JYWRqo425eQNw8cqFZVRSPnySmDQfsyAptKaY6QbFJWhLo9LqLpWWHvh3Fe",
  "key9": "5qV2vRWXwqKg4QJ1gY4Y3B6gkho1meshMNHhueMZXLoUK7xLWiSxJ49wMNadbXFaPxH4QXfK9sRFyNWJfPKxujCu",
  "key10": "3dFCbsBnG2f1aG9KQkxXGbajCPvjB6ZN1aFSph3KNhgiPq2qKny92XbszcHJF1ZigC3Mh7rV9kSveurU2rgLdtRt",
  "key11": "451VE815itMzknFQCG6r8G4bnTNG9ycHBQ7kGQxyXzHz5AVSQLLTGjDQQ3cSQWEQ4ESD916uu5DGPnRA5anU9Un3",
  "key12": "4geUy3eZ6JTMbh8nxFuVjK5hxcLAY5YwwahShK9ECuKZ3edevbU3m8X3zCwA1ty9TzChSggfrJgZX4gSPMhJvnCJ",
  "key13": "2aBKEH1xUfgjFta2xXDur9Jb7yq2XLkRERMn2oXGEsGft89sZGqX4UWj4TBKXWRACymwgfkx4C4nMjaChLGNiaUE",
  "key14": "CpoCFycLpKXNMVkLL8Cc7GjizMEbJg32b8sRy2YKzz7Hf9NUGSBwgmX8Qpt7351n2NBAcZ8QxpvCAczQQsbh2rB",
  "key15": "5oFx6MyHhkqbxSt2WAAmwt9zXqMCzpyTXm7kKo2h7oLqkXRxgphuLkYceDfg1cKftLEvSGo9NvFMpoeHbXcZZFPm",
  "key16": "64znh6nRxMYfYQdVGUiAEfLahoNtPqb3PuiYVTFotH8No7dNexdQ8SHHiPBs6CYkDSPYkyszJW6q8TA8KVdeV2Pd",
  "key17": "2HrjFCmtEq6aY63EeqVc44psj4tohQiJXSrCpFJzdUKzA9qH2s61vdJuERVHmUs8oaqmkMGJomARZx8tgVecmf7g",
  "key18": "64tdKWoJXf5NMcCw9a9yPCay9U7ZhUC3AgaEbprMzruLBX6k8bLSGo5kw2Un4uwnL53cR55ciwce8ZrsSiQAaVEk",
  "key19": "3V9nkMVpWyu3UvM5UYMdjHh4ps2W6KwsndWPU9oaKjiFKdYCKm4pjxN3kXoByPzExPTcqq1rZuKxh6A5fJvDoZJK",
  "key20": "214kB4P4TLw7nw1XemyR8VtfphiEoAGQBB1g1PQGHYZfhmWAS9UKZmZibgKbLs5qqjsnNbcTSESyQ8uXoBmmbQrY",
  "key21": "YbGaBb7HCixApL17sAXqwJni7HnDDyfFGcMgTWjSMKp6x8yFAYEhbhci92mGFfV9D9EqB2a459XRC5UzdBoQAux",
  "key22": "61AgN3L2h8TSjdcVfov9SYvtj6qabL3cLmk3PowKiYmi1gS5qV7W21NZyvJQyhb7EDaXH7srSVTR2SGGoPjYWW35",
  "key23": "648ztFjDk7gWaafiXaqcP8ccBPiaVamaThEhHxusfuLFMhig3jMf34ccj5j74QgvfudeJVCzU3W6h4NTqKCboanr",
  "key24": "5SbWg2B6t4b7q18Rm2qdesdq7kBunpfyaauC1QVJExv6YUkChZiz9Gw1GSUuYwMRvnQp4Y71AYr8BpZktnxaGrhv",
  "key25": "SBz3aL8DU2WtBXwVt6uA78jMkZ1y66uGw9N719DFucRt68jrTyK69t6RtQrArXxa4q643Sy1aREjFaZJGDPMyhU",
  "key26": "3YkJNnYsEpuHGbjZgqm5AiGt5zt9WjcidWFTJrWwDrhnb8kDL6JGGuMccK7p36dqXwjnR7igBw7HTLwAYhA2X4KQ",
  "key27": "mEHmk4fxkQLNBNBjDytxkRzt27vLiBYjuJFyRdzutPG9tQKcrHjbmsv1JkBbzkD1Dub8qcj3jpLEuQutgsx3Aga",
  "key28": "4iyM3KipKeswLeWLBm62gKg4v3NKW65T4BLk3XFU6o2fAkmL9PKqamvHfxbWp5JJjqXa2GvBBEhm7EirzCgoDrV3",
  "key29": "2cE9ZUB4y4LJpsLPBCMNW8j8LZiNJ2Lkbfpz3EJNNXGLcV25ceSYxKq4Egdkrp59sbkBcHTCupsNLxUtfLABCU2B",
  "key30": "4PdLcN8xpHGYqNs2Qs2vJ14RL9WHHdvCKrT8HmXw44yBc6iRHdk6rdLeeEDnTZkuVoaM1DNP8DN7whY6L3stvw6E",
  "key31": "4qk3e2S4rH5VC6o2E6wkTwUnnLrv6cNqZPxkifRUexSDuu2vz9h39RkToKgUkerSKoydy7GCSNJ19rcENpcqT3dG",
  "key32": "5ByPUWC2QZmrD529RkXMM8g1MasK2jCDupnvJENKEeQtEozA1W7nXiyB6yjbqpeuYhwSBXDvsU8nbQfePriwZAiE",
  "key33": "5LEYy7CXvpB3km731DJpj4iJYNa9RhUrwiMGKBoC9AMcKNvDjd249Wy6phEDxiPp9RUMPGKa1aoepLKjq4GwBRfD",
  "key34": "5jKebH8gyYowe964YXbAz55GB6RzgAasS4yNs3M7DRkoyqTJZKn2EUBk8qV6LgvaN7VQYYMt7wbMGGeVmkn9fC63",
  "key35": "2gJtbgAs5dpw8qy3C7Pd4evxygj8CTUUVZijL51D3RaNWxq1FS2pr4Hsbcp59915NDHNx7hoD77HowBnba5gdWSS",
  "key36": "JqwrivDBki2XPfat4fSPdCghTsb82do7oXSu8DccsUwb8HVBpjmPsPYaWew9MVc5qbyurzCtAiiMFF1uWQrZfpB"
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
