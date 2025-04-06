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
    "64WtHP4CsA6B7wj2Qu27UYi8LLvTFUJ6hyaiE8EbDxNVrcEVHzaHxRDYAco3FhcRAM7cVp8j5nakdpr24rG6gJrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwbZmphLeXPgizujT6goUGFqvRohcBPQ85JYjQ6cWGVr85etZRRrLNW2dgau6VemyyhfQ2ze28ogdQvobnj26A2",
  "key1": "4Mnk4De2KP2DjwBZnK6k6KM1wmfJwEE9PpSLiiBc2iJpqmh45epxtCJZRLK46EoUGg3FoZLvpNMnBvEJz6RVX1eN",
  "key2": "3cBnEnzoAkzv1srVYaYTcN52cy8qi1mrff8ifAH4VKHqRjRrkGA4vXEMrHEf8pzuWd8haeMVxU4rgaWN2fVN7E4z",
  "key3": "2zquT6NpH3PMrbTKmvHGEmBiPPcnE5fRtnMLGbzuTN69bBbCbuB1ZNkrwhT1Q2MczhPpsGjaaiLiLHEQ92iSdMBx",
  "key4": "2ZBPuLUHAqiiiJrhu8mpKrjrpuLvNSvzyzs3isUZQuRJzmwkZzPfcUG772PypL8Bw2g5KWziW6NxwuNM47NvdDNn",
  "key5": "3p8b47AcenwRckTZaSzbFsmzkUFQATGHYvQoZzE27YjDBsLfPaseUDjzmUwzYPx9exVk2oJwAwxQSNcatMq4FobH",
  "key6": "ShbZANZrXDadobtR4tThofVqY7V4hUQw3J4nW7PWPQi6czRDnyUXtRC2XbhBow5sd61oEayEbjVdgnWeYYysRxS",
  "key7": "DUHQ1nMwyzf6p76CFVafLpMDDsS2XDVfwuK1gxaq8FtnxW34UYAjyHH53L43Pahw9V6afwmpT9DhEqccTCXJmK2",
  "key8": "4LyggaeofVVFxzZ3KQ8ThznS5y6w3g1vwAMYsP8hStYuJExscMZkLbNhT76yUhMkBmXD6EjmvxEjBrYBVWA3btAu",
  "key9": "5b9n55QtGFzfpJg8TUCAYnBLTzkJ9RWfra8tVmxAd3xVT1Tcp5u3jEW3Kxigm1P8nRjr3BsN4bXfsQYtcXkjsXw2",
  "key10": "2HRRCh1sSiWHWKBzWeiN8RCLMYeiDecjyo2QivZQTuSL2enoE8kRF4qwhiT6odspDLEmBToke8N69NosfJ3uw5UE",
  "key11": "6PsCZCRYZaaWzWUtDbcpgbk88MTq6Et4Jaw7JJmfEjDdbUbVTKnEkMzvJjhi9fxfxDu65tsa1cSh5YrVDq22qDY",
  "key12": "57dk6j6ExghsXZUwsKyxQV4jTedcy8NnHNN5ScB1omP3Nqiu1peHBgJt4UZz7nd4QwJrY5qZtJm3bp8GZvxC7Nk5",
  "key13": "3vSufoHSk4LRbKDUtLX7vmnwRNdDa1JxutATUKZpvvwjnXXvvc1BabJSYJ9YtKtyEHoYnZvLnkFfge2fpQLR9pF5",
  "key14": "47njh9SGSAqZ91aAVhofu5U93DHL9bUrwhymt9ZMFHBN8TvWWyoBnY9JoerUEUxr725mDFwF5JkmXu85c2Ta6DyN",
  "key15": "5PL9yqtpRnNk4vk8uxCZM4nyuEu4pNTD7Dc8ZBZMkxm72uGEYNoGLyNsabN6khJ2MXi7FmHTGZmn1r8n5TZdtdkJ",
  "key16": "2Ab9TfmY36xs7Cixz3RG29BGZEcgod6fQDxuVGVTGwQMZVa9WyFSGm7FH3S7mU6oSR3KK5AmKwho4MNGi36Y9dzr",
  "key17": "5eAw9iyNubu2KYUFH1hUdZuqSexnHaL35va7T2UD1DVKwDq3wpw7FVYNeHh2YXbaetpkLT7YBeuJDpuhbpUw9EJ2",
  "key18": "2fAZtDRGfgfx1NqQwJWTDyupBDnPwgJ3NEZPzHszBeuFN5SHeHpWfGBappsdJDRBrLDGJ4FQskq4yDVZ6HmbrW8j",
  "key19": "2Lr7sFtiSzuqqGavA8vLoxGipULGz3tCJVumr5Venntc1tE5vaozbQMcfPzyP4UsQTygFyp2N89qWUDFRcgnyCXF",
  "key20": "56vtqEEtSwujNX3QAJKxkYsvNrCzr6v8W7apNAiAPZvvHJW4iLHSCcGxCcxKuCPwGvDP5CV9ZTkiyWX2Gy5qhxrj",
  "key21": "5dmBPUckRXNqYVFDhyBVeiMvQHTaTYJmJyC78tJGdotc9CJ69nsYFhuwrTp67fzSoA5dRFZ1AEGA9VDW6cMVhEcj",
  "key22": "5LLaUbwJxvmYMcL78QdVF5KByJ4C7bNcEoeFE3KQdEUTbqyDa14o4CRnAmejJos9r8Mnzm3o32Wmvi6e7BJ6w78x",
  "key23": "5ky9JZJw73Ssazqo4fcpp4oqk7LXNJ3237WdEj7W8psx3huKty1UU63r9SJgKDaT5rRuE7h2DfKCVs3f52tpvfuN",
  "key24": "65NqceN75U2TFwmTfPFeBERYcuoJFPQG4ipXNbY55c7DvF3K5RdEdcJX9ekEzLxQjmaz5SSmGohfeDVawiCSA5jE",
  "key25": "2qamQd2MULC9Gy4BCsVxfqdYqn5TsiDndq4hjbkvNLaMyaWeFQtfgBdNKGvVdJUSW3ncP2MLSHCe935YxawHPtxe",
  "key26": "3L1SasUiZmoDzwhk2V6RU1Hsrf6UKS4zQ8bPzTVvoziABMnTmgXzKEijhPL6AJC2gUY4WX9sLicYtKsBndSo9Ezb",
  "key27": "Mc29MwoNJYgUMuDQKKgtUBvUe8KawLGx27wjfHqrE46c6MsivkkbUe8zGNNx7eRQ43nEESKZoDpxc7HYMzwW9Q1",
  "key28": "3CttU26qTRtS4MoC5Z9gvAoa1HqWdjgA5kaWidtJ1McJDyAZQVBzaav3goi3Y4NHqy5Z8GWkXqnhSuRAEb9YFn68",
  "key29": "5jq7YeoZ1133md4HPqWQ5sLi1LLfZwjfkWegTqiEzsxzuX3dK4vAnfpXMz4Sg6cRjVbefJc9bbucyevDHrx4bHD6",
  "key30": "4VdM17LQ25WkRYnGGKSLNfEeH1JELujSWi47QhgbQHjtVaetSfoWUpraveWtH43n6Bwok8UT7RmsStZvJcz6AysG",
  "key31": "tTBEFsiQAbeX82V2oDVsBzBNENRzBKCdgjkSKB9qypuoRzyfD4QAgrZBqjgGbdqbKWY6WPSndqtdK6KdnszVe5X",
  "key32": "5QbSZGa2NyZThN1VYLRA3BNrZ8w6qNHfuwjdg5nonknpboY7n8uBUy6kBTpkoNGqEBrHuCmW3Pon32kLnhYjdVNE",
  "key33": "6b4FnNFwxQg44aEd1B7dvpTeSAEULmi839ccMxtekw9w5WRGb1YNkdwxKBTKf6NfyrNPZ3sU3DCUmxSCP9Tojcn",
  "key34": "2gLxgZFmk8AGTPQp1KQpBzhGKhsBk4HXPkT9FqhUx9cjgNgQmu17ZwBJfWP1wfvHSHRE4xT3YPHVx66QbAD6sm4e",
  "key35": "3TrJLnaaDUKwB3o3xGtjns7iYYqtK645o7Qx3vac2vZbvfWXkUyvXXGczbvbaSo3xooGUfXdXqJfxUNfHFQHDHNp",
  "key36": "4ZJXtShxAATjMbSUVrMzesWMqPvP4auYGXa48VkwK9GL1VRkchBw4Ynq7E2VWT98dFLzhx6CNhsY5guuefDXTNtw",
  "key37": "5rXwQ3ZgmimZyDaFHqpebNZyJw7hrNH1dzanDwSrt1KeAixuY79qBhSWJmbM9NM5nC3Mw6URYHpxTLoBm82DGg9g"
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
