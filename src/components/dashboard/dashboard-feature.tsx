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
    "4vKjvT3yR2cH8NnBpJQtYLwZmaKnrN4bk1UXWYMF1x1DCt1cKHEMcNe22gMySheBXeScVncv4H7KaURDDjuti2V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2PJfLx3WdvGAnxCyMerzv3kbwLfrt3nhJoB4qZuTKzKjLqrCV5Ah6GaHG7qPSyWzQU5W46uEGRiTshkLud3jfG",
  "key1": "3GsgkNbtNMagqVPt9RSyAgzX77Wqo8idc5Vm9ksGKTkrmpHMf9dN1VbuDiXHiKwAJz5Xg4RV3RxccfTgNUEdFWHx",
  "key2": "2CVLj1wopsXQUf1i5DaUpNNTzhPfvtDxn9VKhvAde8borMUQaHrhViSuUigdkQGgnTfjmPJeANqQ952kipgrvpxM",
  "key3": "hKNEETeUju6mYXv2PWYGmTZ6gPy5NYESFMHhRfFJTtNnpo9Dg5LDb4Ue36f3S1sy9fVZXGPifjGzGwjvWgwAK1J",
  "key4": "5iDZ2PVfoX8Pk6Ubvxhg5d4rNMLoccQ717rnHsUBNxTTfoKRsSK9SNXvzLiLTXXiiUnAJ2QSRWrqbsvT2eYQvamw",
  "key5": "2kbwsQGUwFZZWjMmh6fpLiUL5NxhVZ8GHCtwMEmsFMoBGhQVfTzbw9Rmy2THxx9jqB4g2arD9m5bULGsqr7aQ4Pw",
  "key6": "3xybMb2A8GiW31dLUiiNxu3YcDvV2jBE9N94t3ij7Sh9A9FghP7wdyTRhqF3rSnzxJpr9AuChz52cvWccdM1jV6s",
  "key7": "22mro9WqHBktejgVqSdWDimqThthoFaqZBXBc8jjpQbsCggFgU2KnpZ1CwjvbW5TdMq32Tdm6EYZ6K9XMHDjvubc",
  "key8": "4xpUbsTBx14SeHmBYgQmJmvTkB6oBF9axBeT6geh8VJDSFSS1eqJFfpbRtFmetiAfmK4T7WmWyGZR35SksK2eaxS",
  "key9": "3cweAxPBELEU7YPLmdxJFyMQfjxoe8PR8KNQVJy4vML5o1K5TP9F5NkbbKrx9v9WqrovygBzqktdoUetg5Lxh8ib",
  "key10": "EcMrZUAUqNDUTCdaVeCxpdjXCNYUp7shubTbWgVNUztHjAi9auK92cJ8SLbxacqvjC3QKbYrmA6NVjdfmcSYaCe",
  "key11": "616vC5Mw3j5AUThcZkFzvRBAS46ykBb7c9xDzhkRLNiGSBdN6yo6fnob4Wysr7vAJgGXgiBm8T4FJ3gnRwHBTWdt",
  "key12": "3jM3LRLCWtShUimgvyD1Q4A1wuSXErkWZKwippZK3Fw7NvSXHU7H3CB5J8nYxsC7DFtNNPdX4nPVVULyKqxD7V1c",
  "key13": "2vvKwzJwkgzXE4sFRkDebf6ajimtwF6sJEj3YUX3Wo2nnCTgYW2kC3bTsSibqYzRRVGczVoiLxzuMsWQmYoeWMhN",
  "key14": "5jGCdntCUSLqddJE1DEwD1VYdgLcZdLbDMV4fJFJuejDMJzMq1DiRiEaRyTQVNM78iYwN3dMuifu4JABJHvCQp4d",
  "key15": "3F9JT2emXomncghP2xJ3619BA5S9gfxUqFuyFUSb2Xn68pqejtygfVwW4oisBZrQJbwoohHENd4bcDa4ZQSpmU7Y",
  "key16": "3L61yr5EpCWWyViZbSD9eG5DfoRvqkAjVkdq6D3hL2JaAR53JqJdu3Tzws4fHNi9RATF4qcqAc5N6AKmoiAcJaLM",
  "key17": "3U4VYmf3289KDr9pe6ni2hW4gd7FW7bfNvSnYPGo8N4oc9NdgC12zTyVdguMswdSZgd6d6bnVE5nU4kCxtjgGu3c",
  "key18": "2vtfqep36yVvBarLzzrQVweSznH81Z8Zjce5DMCrQ81hBnwzgexXRKzPF3RrJT4p7JaL1WsZf1jaFk9hJSbVFLT1",
  "key19": "4VqhFPm7FBgEyvknoMXEafmfsMJZHUxNZKjiiYsSfBATT597AsrnZLxtwWdnrkCWoJb143daBC93Vzvhnt6yCQE3",
  "key20": "4ghERY9qF3evgPyMi6hHwjbn8MUvz3FzcJhQ25So1FvW4y8vCaN8Q5sL32GEYarcdSH9wVX2fgHHymEEBaWSzkvr",
  "key21": "4tJaSMqT5FmvaqCsDYtWDtLVpcLpfx7D8hh2SbvESY8ttJUxycoNikX3QC3gvZ9nVKGtVX4JijMovEUs5GUazEH6",
  "key22": "4gZYCFtmdme51awF5HideZkqCYkfWi3VPRSZEEQu3h5MRYwgUgyEdsRzDhvL9JGhVL3uvzLtYh8WchGPbBEq9dRW",
  "key23": "29Jqim9eeQKv1i8G7cKq6qEdKPtNK1zJweHxS5c9tmKFbnyGQeWgsHBV6aQC5FX6rqvxEPpBHPFdEpPnjjr3q98G",
  "key24": "3GTg7aniK4uuaagf2pyjUcb2K1bUXqePwPZde1NjpYDq3JyLRbjEoi5NxF4WAr4imispLA2KoCXmisYqZkoc4Sg4",
  "key25": "4fVXeXgJ6wr491npTsnwNyUZbM5uVVRYLFJWCidfZgS9xNx8DrZ1HkYEHhwyPd6HokFRonsehBrgSiPFbX5mj79r",
  "key26": "5LevWzYdtb8mqhRNYc2iMeCxJ5nEF8SpTXUTZs65stFznoXsnZpSi4NzLMThMkBcKKNtoz7eQVGEbHRcGtaWgDg7",
  "key27": "3bkoDyd1Sx4SFytG9NKHnenZHzLwavrF4jnFBgpWmxsgAB6T29nUeJoakzrNScQ9nK6bVAo5xhDituhH5reHzZ1Y",
  "key28": "2U45h8c1dXyTKNSSu2ot4MX6ez6ducrwYTnsALPso4foCnYg4Uid8GDNQ1rLssfV647bsfZ57M7Pgt3VZsCf6tcw",
  "key29": "iguYogb6oif4rjddNPjBRLtib5EbmMatnPitCkVzGVfAdVNU2ydQNtVYbnb5x89wiVYK9kFX5okkUUYWRgoecHb",
  "key30": "3PoJxHvDWZ4tCJNzhs5hzgnx9dY6FqWAoVmXtRvysbYkF8WFuTVyMrndqSJL4ZoATSU7c44q3f5Gh6WpLwZ2hi4o",
  "key31": "3cJRqxiqo5m5qg9uMhQFP28zBZX3gCJgjqABFGWNJaumGkygnEVq8TdQuPxYJ1LHAKGXspdvgT8NV6shKAJWhxRK",
  "key32": "5wWJx5854MMUgcyjbQoEAfDCEnDhsVtuBzeBYWUzwWoWgtHDnC3b77eRGGpwQMFm7WuBQrWfT7SDE16ynTjCoTfv",
  "key33": "dC3rc3prLyELgfP3ukSYaW5D1SqmtAFrAegqVhx3JHUtvxNPnp1TgA35t4swVngQyAgzYaJiDwyvCKUURWC7YH1",
  "key34": "48vHCd3VFKnF8ZfW4kSzUT7qw3VoCmca3envKX5go4xbDHvjPUhTxDMnd84AU2Y5EP5zHB8fUHchNvWHaMx7bwMd",
  "key35": "5tb4yyYB1NZRHJAnNH35qM99sQk8h5Afvcc91GqKiiCZ9qBCuqZw7QHYjDAzPSj6FWMQ5g93BW3KCQL3z7G9Anf3",
  "key36": "CSVaJzumrrMsAcRdHySP3GuXeQgjdewpkzwMeE5NtZmsZMdjqxeiMUcAmGGwAcLLQo9KkqmRxhsULdQedjk7Vzd"
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
