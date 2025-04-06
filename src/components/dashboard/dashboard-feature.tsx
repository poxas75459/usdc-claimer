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
    "2vKCZjRVYHRnhvoFDwGWZ6dhJLLPKTTZhcnUefZN6ULpmE66fuYjF6Jw3Fc8UAV9uyG6qhwgu1JGndUgBZ3ZZaEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQHm2MQysftKTjE6oK5oMqvEhp75WYz7RYfSS8ZjbfJwMpyStF9htMvVxXTjuSziwwWE5UNrhwGu6kv85AgGviw",
  "key1": "2jkauRkDWc8ywhKpCPVKXH9HBuboz7JzrvbAZuZj3CdWdJGhuKFWfV4fJjp9JYc4NSU2PyP7cvpfBCP1XJspDPXm",
  "key2": "3oEVcGAgXn6TwV7RrNowkmZKFSh5X1x7VeGnzrJVesPAUnDjCJyMSmmWQ5mrF4dWrYtVX6ovt4rt1nFA9ssy6sRn",
  "key3": "5DUABkibeacKdSFNAp5yhhuMjhPLp1eZmyuytgckbSzg14niP6ihQAnKK4Uw9XMiR9U9vb7EWacxHyyHook7nYn5",
  "key4": "3AvB2HXRotAqdznB3qpMH6vhWUD1TuQebrkZVdS17bWC8Qw6vxcaGxSDhTx3wheUWda38XGgUkRdYzuhk4NCHr3k",
  "key5": "Vpv8nVHU6cehKYUzaKYSK8FuWVkp8P3HjuKp7cymPaxAhVLZgZuQ8AD1qHd3v5eJ6daRXbLmFqHbwXMNVo8vTrF",
  "key6": "4epBSm93RQLjrcTHSogWFt6PG4233to1GDRvdXYWpyGfYBrEiStMM6H3WhrGPDS18t9ryfMHt4WkyB9MFjQXFeNx",
  "key7": "5qLvGdudhUf5PAhXcXzYadVjcREmTv481VQVDLcrVfcEMBbKTd3ZMAAhwHRoR8yY5XaQabgMuf7ZbBNTxXbXMVwp",
  "key8": "3VcmvNgQLcj1JubFRuUrhJAjofAvxgcX1MT5HmeWWWNkz5heVkGwwPRygfVKRzcRwBY3v2zVQvQXBei7XUdJbytq",
  "key9": "5ZD5utyMoSVFusHVn5ZNwC6a71QwzMquQgf3ru5C3CUPgubXkLq4skMA4W3qtrAazgzm2DxSUnXZr4YeaukHGMMh",
  "key10": "2K2sMW4AQXXEZWEPG2s8GsouD7KjDy7cUUTbcYW9r2yoM17HEPHr3Lp5NQnE4ksTRLT4opc5VfT4Ki1mZUwXRMGU",
  "key11": "zBrkuXNHna1dcwUU7Uzq31Rm7jKV6WTUKbdKgMjFB8pmru2A3eZ7KK4XXFv5KwwogvC37w96fRg1nCzNFUvKGvS",
  "key12": "bFGAxpnstVWgE1CCr2gfMsLipv5jpHaE9RAkrUF6htLAzRGfUw5Ea7oKShdebm3iwQPcvpM2Aytva7CJxjmDSDX",
  "key13": "56MKQHfrvYJoAfFJGqycWiJZ2gBgc4iNy9Qh5wChzTgXhsQsW1mkMgWs1wWZBWL8ZVHhYNCXkFF1Nr1D9ruNpkdY",
  "key14": "5sSC69G6zbGGbnFuNkZda9KvDDcS9uMPiy2ZVs6JsjFj8S4sZzjSrnT4nh6RFxmWJKNWi7ZGnoFas78tEdq1yZkM",
  "key15": "7YuCZU6afHXMxd3tRC2S2JwVKEZw1X12nwNjfLJbcZZE99qJ89gFR6adAJxERCwavUc6udwSehJgKi1F47bRzDy",
  "key16": "3V2grjJgXzS93B8edEZYgXWMXcUHhnD5XjoC3XEUtS5aKL7CE9XVBVrQU9j1tyryyBo1wQjzWs7aRkLe6qbLVMyo",
  "key17": "4Q2BmiVWkDeivFRFiLGoVNSY2PdJpiLNfraqe97EWWzaCzR6YXoC8oBuD8QY5awhvgWVSu69s7pzVt5W7RyGRtsm",
  "key18": "F26UVR3ZnsiPqMyok3B8UHUUPfc768HSNDNVTGFLNZXyEn5Y9aeMBE9j2jy3Vo3Uu483otQYeYpytEwV1yvAqEz",
  "key19": "4z1DM8L1DHzBeqUG3fzy8LchnANiMJzjcQzVNVVjBQcxsLDhzfrQtgBC1TwzbUFtsEErswdtJrp3Nre8kArTsBUk",
  "key20": "3UGvu6PFbvGmTgBvemm64pjFVM27hVA2zXKLs2suxydFu3dYDCmaLaRHvwumaqyFjP9gQw8A6CWbftsSrCcs2R1U",
  "key21": "36E2KAP5nSJe17obi4KvAAFP8bkBJE7nKyqr1iA9bVFqCw8sUrLZSCjZvV7oV1nGpt9ButMkUvBWsZ4kBsAqKehR",
  "key22": "uafvQcQ7AMrcJFZCW3MPxnqFstbYVAnncsDXhHyJCCZDKNoaWTyHp9mFqi1bxcNAd6EVzeNNQbq9Ey8PZTXUb7n",
  "key23": "5JvfPPne71So7hjpjRUDsYvfDBHVVe38rQULLY1oXL7HXB3RzhYnq2dhmY1SeGzmyRUDGhDAxhPnHGDpD5sXPhz6",
  "key24": "2EJGZFBhF9M8iMdvUZyWg3zYGfHuXWDe1ZkR8WgnmJWhvuwsjdsafeNaJ8pzKaedF16Pom9qiod5gKtAqMgfYnhd",
  "key25": "u91MqZhwimT1TUn6rNGGdWjmEJ6j1xUjWTBjJPAV3Lr77tMd4kcZ82CnzCpPLLoDw9wwxMijn68gjGv9ku2U1Xs",
  "key26": "2vRHTwmH9TFFZzUn98fnagHwk7tZDk3CMrvs1aZRzShgGTnzpz5hgaWUMHKg51AomSLr9d5d68w14DHBADc5swjZ",
  "key27": "bkKGmUjoJ2UQZS5YtXwcEtm3XvpuVTXBGzZeeeWYqTML4GqUd6NfCJ4TDxR1LhRUcT4ciT697HD36E8oo2w5bud",
  "key28": "5xnxsuD64tVpq4qaoz81GT6tCkDzVoLyQLpcLvgwsZBYehyjSa5mGtL4xs25rFg5BDQC68ArPMCqjYnF6Uyfe3Zr"
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
