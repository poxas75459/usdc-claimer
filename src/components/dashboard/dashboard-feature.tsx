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
    "5dGQGVWCZB6gAgTixzDVs4xJHthQ8nxTQf18jYWAyZ6L2bG9cX7juAYvQjGjrfmWropZYyHaqa4tdLMZyGmoMqyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MzfPj6jX9Yg6ozxpM3KxyzFq56dcZAZnMSJrZpcmyYN7RdMdumW3QfpLJ9opFkz9iDP7g6orwGG4txYF9iDhwPJ",
  "key1": "655REgqVHmdHnSUPnheYCuCTnQFc8595fvQMYNEr2gp5LpjkLLKXhFFHov3z34At7bYDnKWR14qyh7i2e8PBmDPV",
  "key2": "uB9429wpaZqrF3qUDr1GpkcnofcUinDkFVNdabSzAvczntvpMTLmjKV665ykRsxcDbYDA4DeKbbiZjjpFLdyw6M",
  "key3": "3EfrVYuBCQ3G9RBboDjSAPFvQhKKLuBiD8o89grtevowxPZUZ353w6vG2bWvc8BHat64whbjS4caB2fi4Q2CXS2Y",
  "key4": "3f7bKrwf9dg6QacgXTGd3rsYU7SWUTraGXL54FQi85VWjNqcy9RpKdwNcRvX9BGBQ3wzdj4hUAAk4wEVctYHNvdV",
  "key5": "3eMgrd75m5F2C2vd1gJRiDrvXybTHaiNUUVJX2gzSx7bEy6KLuzz2UjSBYcxTNM5geDprUajw2X7apdeVnskj5bA",
  "key6": "esQgU78ApdtZEvhEHkGVAsU94i2yjNhMGAqih1g65QFmGUhpRWiBTDjbSkwKcLfCN1a3XbyaEikWqwLqnhQNDUz",
  "key7": "42r8M8qVW9422hR8KPLgEDYJZ4gwgvSF9BFQRCb4XgWMEg3TzuwNoQZnsLGGAEKsMT9E2B8Rv3Sovb6F37JHGuS2",
  "key8": "pCyVxW1KZmcvJ8d5HqWwF26addjJjftB1oK3aQ2vmdWqCJRQoMPcrz1P1dXKDNEyU1S2QpWKC9GWk4E9aqvB6DJ",
  "key9": "2qtCns4drVfU8tk3cNN8EXSU6zRUHQXdhdpH2rMqmUyYy4knLS4VhvaTYoXmsFedRhRa4zDiyX1xPPTUEZz6PuyM",
  "key10": "32J49nQ9W2eowtJWQAEK4SXtMtGoA4p8ZhBszSMBsnBMjkP41cnPJBUpNJHWojgRrmqzSsfBVGtnuJ1ZfkSGtehv",
  "key11": "3bq5FLi7SCEtpDt6x9TQAjCCznWEoBffjaRQxhUhLw1qzxt8HNn8SVJKHD8o3W6K3aUkdFpbE5UKcPqHL8nSF6Rw",
  "key12": "54BkU4a2G9ua8wh79YErgMjqWcqs3w1C3KWWqmwYkaxkfrHipjajGRtvEYWHM975BbNPw8gsvLoMtCuu9n2ESgbi",
  "key13": "ASDcF1ipC6of7AL6Ku5Y3iAj3NmTh86bS9kGYF28w3r5cmZDSxNdJnGtVVKhdocD6auJwcZV5Cv7L2CH3ZzvtvJ",
  "key14": "2Yr51uFAt6R6T3uZXVZXF5e2yb8eSFVeyrVtKyP4mbmwuy2y2JBu8aSttVUUDM1y785Nae8oQ2Y48YYbMBqVDA4Q",
  "key15": "4tV6HGhTMcrfXPQnXD8jkQeHvKh4k7Hwvp7xmNvctafdcwPTrCDuptf9UEWAaFikD3fwvj62HeT7Ff53t21byFRD",
  "key16": "qmibcTu1xzzmnoXNEcwR7vhCQREMtisVfHzvk3di9bikxbuoSmVhi3cEdbU2Undbn1afLxcqdyJkMzxMQNAqGsP",
  "key17": "21kdPmxjC55T6cyn13bG69TpjUhUSRk7FGTGERsSErqBavRKkCxwszn3M6QqZoPAaWJ5aidd4CXhKM9JxtAUHFTH",
  "key18": "3y6VMrQ5DJRqenLnBTQsDDLeMFm6gev3EUw9hvx8ERf2BTVtVY6bzELWknWA9mFJqrdAAedDatxSTZJB36LiEvoJ",
  "key19": "2sqrVb2cyeEpxwUbScjxASBf6GGpXVzTHCMPfogG3Jqu764RX8WtZjW12Rr3Eeq7y4L9yJeAFr71zndkkwqmoBMS",
  "key20": "2r8Mj5zyMgvpG3WZ3FLZKYTPt8xFoW9psBMunb1Dj5ggoNkaKLh9Txehh4StmtwnM6YwTAYhFtzbP6q5NTJvuKpd",
  "key21": "3vk9vwUTJKqVJZyqGv73ZgrkZ814aeBp77TQrAxWu68fp3PsKysnEL4295ZHF3ZhDvP1CV8fRYcsv72AXM61PSjq",
  "key22": "2dS49WdtqAMbERGnkMYyj3v4fy4pnrzJHXBce9K6uDLn9zuUUpKTUucXv9Ui4Qz8ihEX48d6MXnL1UBeDMpmmPwJ",
  "key23": "5SpzzzsoPKYfd9mVtZozTPt6Xs9xyLoNnnR4LXdyo8P4q4CL8AuEFWq4T7aTU4SMFjyzgUEnSmiE1RseyXuREWe3",
  "key24": "2TMJg7eAtCmYfpdEkFRS2wb6RQBSoYEQosMujcCpNp44asfzCqG6LoVEzptPrscbjBZ3Dnec3Q82VieAEwqur3af",
  "key25": "2sdS8g8EbtwxWMQ7NQAVxFUqo2VN3biq1C3hiKer6coox3jURyf1PQFpf7pD77LX9sqCX3pJNg4SYzMJEKFPC8xx",
  "key26": "2tZxif454jQV2qye7Eh2FTSpWKeEfFsgcHieCgwFc7tqfKs7RcTFV8uWYBBvh9agMq2KGPfekRuPGmiPsXHVZS8H",
  "key27": "35zArJdoxgAeRNtCgVWLcop1RG8GhqTgfA3uks7Rf3VY4BPmQVFRUpe6aEcESgLbfVvhQB8jsqp33sCDDr9Yx8bM",
  "key28": "2WvZRxauMQF8592o685xhHgjsa9egdjrLccLiXxP6AA5kzWvLDwW5drfvtN1WHjQJhDPTn2a5RVcmyMzoMG4kcqN",
  "key29": "5cQqWF4hcD9nwU7PTvGiPxdwLwj3Vr9WnUsRJEpTuCotCQo7Q2ixsmnkTuDpxHNceShEED8Z4oArTydxcTTnm6eA",
  "key30": "2CVtWW8CJhPfe6FxiQUqPgpwKHZfGuhzoPYgi4wYswLiS2SBCzwBTx2cnW2owByVYWjUPbgS9cqb9pH9ftobHCQ",
  "key31": "4FnmHe3xAWMejfpSnzkCe6hTGB9BTsX1sRT8iCE3NdpHvNpXjn6SjbZyja8JUGSQEAAdHK11WaG9K7h8jwqJ5r5G",
  "key32": "3r87sPgowzPkzq85Gc9Jn3YXf22BdkL7vqqiw8BPvaSG9gGg3jVSVMKrBvrNTRfEvZmpedE1VbaMERPkhiPm9p4r",
  "key33": "5mrHc4bDkVATL2kytkKAHDvdmeNQ7EFknTrprW5Pm6Ba1AT6imcwwZoXrAErP8SzABw77UUnCeKkJVGuy4XVy88"
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
