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
    "4uSrBA1DU19EMW39mRsfikqCVb7NtLux4KpPJKQSxTtc7FPdbHTATaZYzxrajCDabM51FyUVQiJNKkvArhDAHjRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K8NiRgJYypk9esM1SnZFKMHHFkzmE4DS4kW2AqXHDJ3WAZsK3RxVWUntSy2WUMZAr15Y4aSzxA3WGsvUKyWXBNQ",
  "key1": "MTuGrYgk9erzZe2gAymUSvsJXcLygycvqSRd5yHsVxjd8nNmveXVYyxkitAdb8gkPw62H5R3Ty3xwW9DNzuKeHm",
  "key2": "5F1d5VcuJsewiY1PhJW8pE2bWixdwyGngjK7CL14jMCDjCY4Yy6WJHJ6NgDSJTTVYzChqDrRKsKyQkndgkAJbUFU",
  "key3": "5ED3hmNbVAMENeFD3BkYuuQRseMf98kQMZJEVwDYw9krvR9z2uCCv5E7wPhEqRyXKMZVPPrkLhmqrWnuLiyw5qzS",
  "key4": "5nJv7szrctm72GPZFSj6CWcM6zRfJrrfTqHotpXsnX6HcCTSRQBp8sNGMRauejr6mdN3wMsZ1C4WeZRPH7BHsgqv",
  "key5": "2FjydAk4qTknz1SPr3qzm7xGt5YRypj3dhcRsgFCakjpAfA2uUzz4bfocDGpxJDNJwL8uQ6eULNLDEKdfA1svFeB",
  "key6": "5YG5zeegS1oHB4CCJ5yJgUxWsZRSS4dBiWHrzSdHJzM4e1rsz4ubboxm2JouUJhsfohmmnDafuKmdSodfjhRr7VP",
  "key7": "LE1zhmB2YvFsFpup5gucHbDAcuAgVQo1sazvmWVMXsukJ1d1qtiXWU8EbL4GKAstKw5DmfdGqzvPpJJWUE7SyPf",
  "key8": "5bndkFEWnsfSes1uirf3z5tD63pJjpDG7bxv4necStgWAMX5kJNrEiHWae1gh72MVEvF1Ti4TqnTmitEJGwhaMoY",
  "key9": "Zj3sP6LRZb5HNLUxKAowgxwp4bznewTzQ4dsfhP3516LCKZv5hyhDpx2sWGeyxv2VFppkNdfvoJrcDBHCAFGq52",
  "key10": "3WypXajozKaGUgKj4f76EHTn1w34pdWfCLHDGe11kAP4wWBA2wVHwUMJiSvd6HWfJ76wC7GRBEA9pJXguarfvNBN",
  "key11": "4zYtUccMNcNE6ao4fzK48TGV86RYF1nLH7DsDSxfRWLt2maApvYpxDSQJDqnyGxyuapN8rUB7T9fKkswyhL1VEzo",
  "key12": "3uPN886kzV1QMbnE8wEL7w1N1HSs3o4Hgg3zKhs5dkZ832v1zaCeFAa2T4oUsGJ9MyLQn3Fcs659hsBigYiFooJG",
  "key13": "65LWGypBVer7KtoTszksU6wBrzQRvSQyAPsjTGpT8qLhzetFjovLWBNW6jyr9Ka1bLivhqsYvSoXCLgTCtqeBFea",
  "key14": "2PmiRqdG9qC8rUVMip7uggGBrwHdi2t9PeWASB82axxPHhgfbjqCwWXYAMbJPwaQRM6swodAq6RWLBXb2wkxm24T",
  "key15": "3KeoGTii6rQi6oo9taCHVnJNTz16V6Ktx93tYM772QvqgLs56QMWxzfdt1BpQz62WmXH9as6iT3XYF24qmzZeR79",
  "key16": "jSzntgmxNuCX67LfuY1pYJbUrpADULNjdCQNzwYR8E8Sd4AxYRdZcpDzB71EZriPv6C3uanX37kiNkAhr9XV9ZE",
  "key17": "5X7e7MDPREn7zcMustMMEUp7ppbG7uLkXsTRGDkCkaJu6fjY4MzBTzLKKkEQkJJqu9tpvdBqWsgQYN7GRtvyKAYU",
  "key18": "9SoH4ffsccdndCmtpBaBtW5AFsXFwGXV6vA6SSPrmgK5Wx2NzA9poY7hdzVSTUSsTZcLDUySxiPP9RTD8ADqfCP",
  "key19": "3dd44Faybt1fRcebvRrzJzJN6ga6ovK2vxtmQMzFtWpazFCWmxFZgYtTmaS2XuiSzKr51WQC9JDyHNTMDzqkvQxD",
  "key20": "3EL3rpZsia9vD64qgnbrXyBP1QnYgMPnnmXHCj6nmNpUepzEu1u6LYjDMuhTQqWo1GNRo3M5g9ZwTCGJRvUnLoMV",
  "key21": "2egyVzSjb4HysJXEmZStTNo6Hrsjg5SsyqH3GbqbJQqTBjGRH97kVRxUptXUp9DrWouAb6S9nhPES2xE7fJjEth2",
  "key22": "3PnyBdiaxk7TBwekZrgKsx3XHV6eN3WGL7kR76SSACswcYWpVuqqLBJxecN8998SnvMJeu64ctqpXZ6SaogQuom5",
  "key23": "54Q3UeMRMTSrNYV6PkTXVgpNHw81Sd2zJX6jDZPpYk53s1JxEbyjpoTDmsh9SJvBRF7KTvdpk2waEUYuTweEG5XH",
  "key24": "3iM6BsHgHnVnrD7PLmsLj6vTBvEcpHhsXhx62JKDj3zCYxHqshoWyn3BRmEWmiL7HSJqTj27v1JUsQotTP8WhnUN",
  "key25": "45fU8wPdjYCA2K9BiPJXt961cqq82nJjgj18KhsjT1TZB8ruN611pWZrfV4q5teMCpiPv6Tw1kZz5b4ZJg9MSVdo"
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
