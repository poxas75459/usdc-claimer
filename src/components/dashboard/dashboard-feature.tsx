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
    "vGdRk2PZJPt3thhNfGgw4ggs8Ew2JQqQEzwEiqM4LAwqujsVaVires1WMXCfUearScfEKX5WvAQFXst7vbgfWmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDAJxuivZBgRZ6Pr4G7z2mCdxtAVErDh574zgzwaCknj2bPU8YkJ1dA57gAh3vppcAKP5GbFjtK4E2MdXazU7Bz",
  "key1": "58fypG9SrRddraSK4JtnXJENznsoFbFf9kXprmMfhiBquCdRkYQx4KXfqQZSrAvBDZ8ZkRjq4Vkwdt2CghQCxKuh",
  "key2": "vxkVnXADRpVadDA2g3XDzJdFUFkzxQpziePdaSNmha4jetMvqYHe2Ci6t6zLqLjwbCtCfN3f8wDhU4JFH6kZiyQ",
  "key3": "5M1yNUELYs5RDSGbeLfRwHmHxc9iWwKQyKLr4avDzyZZaYRzoF3wRV13s8EoUoKivhde9auBYSVHEw7cMDTb1Bat",
  "key4": "2s5afLsHUQwveQzgB9L6epM8MuzXMPANGBrVtjpRm1xC5U4g4VamTGQsGSVRbhz99nAjFx5vxNpQmGif1n6zVGHZ",
  "key5": "5Gj9PCWT73EEF8RxhhdKQ4KgudCShb2wZ3F9rP6PZWUaEbh9qizqbWo2uDccNYX9uL95BN9N7V3pQQXLyrFqsbN4",
  "key6": "Z5mdEnt388bsLp5d1DoQ2YQzWmAGrZgK1NdtBcvX1Hm9ipyQE74w6Jg71WSt8cMfPgVtwQipHJu4BsKp79HnttR",
  "key7": "4ce1vEwf1t7Kcos3jy2EU9WXDArAqMHkK2nWbxA7ui63kU17P4Qje9GdBvnAZ4gtkBGUXt6Wr8h2ECMgAZcY9cuQ",
  "key8": "SLGsohDZYzRXtVfd6CMyDLQzdJTBsDj21ZUxHzjSja1tLCTRkgiSLSnTRuiouxDQDHNu5zWy4CwvGRYHNpK7mdw",
  "key9": "463R9Y17GYWzKzDvyUWqBaRxB4PAZPX6YpD2xL3fkxK6JLNAaAjmsmUMuTmNTJrNQaFZVfN1McPUbc7HtqQpigA1",
  "key10": "3hftPYzut9CcbjHWcLiuKLjiDWrJKzU8n3mUAZzXv987BudnafcTqQXhep7potpXdnyoa9vwhhER8NWEJjZ4oGRB",
  "key11": "WvYWBy9gEYQPiaTFnspJnMxQSchu1e5A8Ak5DQ2kaAcravoWQQzpdTu1NzKTCmE9U7mTiK6p6YR36MZDR1SgXZU",
  "key12": "4Vrg9NmFXV5xxr2h6wqDdMiYTjg48kYr1fvUoRiNARBBxv39eRiinfL9tiPJmCG39HyhH6PtUNWRR65UBigF3n8e",
  "key13": "2rL6G6wekv2UQNeAZp2p3s8kMiNSo3yso2UMquS6PuHr7cD48DhHUm4ZGNFqT8ENztBQxEXjttc6LYuvjdcJYD7S",
  "key14": "2NwHiPNVqCha8YCakP1VgHuVVjfQve22z12oZpmcLgkA9iwfbhyxusPSTQGZt9uNzJuCTFZavi6C8rgvQFBaj7VM",
  "key15": "2jq72S4qQH6p2Za8oSgDvVv1HMHBo7LfqBvrbcPtvfqTXxvf1YY8Y6ea5xyBExLTPXvL2nVEUxHjwLQGtb1hnWK6",
  "key16": "ga8seTspRwhKhuWieMHkCtUZ7sXDfTJh8WSLwxtCHxBAci58Fqz9eSw5beCLhv1vYQv5s5C821jJA1KhEkKMHrK",
  "key17": "5UxLk3BUfY9cZM2AKHYwb3zDsBtTCY8W99H4EyMsjQb23wLcYMrzvR7gbGXpJrQw5inCDW6o8PqVBACswjVHTnSu",
  "key18": "4Aq9N2GSSYRJooviTv3YTFw9DEVK9ANepewLsiGZTm9DspRPyVKqobqFnmr17S3YAqekaE2zeCwwtbfpXDtjuEs4",
  "key19": "Ho1vHGwebBZCpZwcbSMExEgZoPkpHMn5dZwWRqCVBTzDYw764haX7R33SENLXUDJLBdqWMs98ZZwzVobdYisfkD",
  "key20": "34Q1yQGoGwVGp9JCNnAT5jvjDn6hPMEABPFuHocuCdCMEU8CNHNBYjKr2eUCQ9LpvYYGjz7kC79nFjNEckNr3brV",
  "key21": "2ViqDtsCir11j9VXNtRSh9WzoaRJHVbiA8nAMyzQpCwT4bejEPjFJEE4CSYA1upMkpE9UD2fPABomWLGiAAviZa7",
  "key22": "4oq6FJkXAm7EguBu47o1kLdCs7EZgyNhpN6KgRsUJZ5NGZzvFN5ZgsB2XxJbyaCCQWxZjSWkTbh9KRKNX1PgicNk",
  "key23": "6qtnQxK1mnM6MxnPJkk4t2Q3F7hE3NRde2ecQq9Xyvz7uJcBZYLgzUnrrdZhJrDE2hYaW6GfkRAc5CxSWL55Yqe",
  "key24": "KxKrtirCsdSZsUeoi3H98bnZtjUngN5TdXaj961AkkYtSuNxz9i3L4DzeuKeMkwKYUxqrzqxzpAfqZRhH4eAbCy",
  "key25": "3ukFN8ARZ67p3zoB1jaaaLX5Z85KCukgmiQ8s5Frc6M1uEAb5AgyMmjhHmnQvicrqqNtearQFD6amCxRQBfdQCFb",
  "key26": "4dvz73CP7c3hfCLNWM6HC2yXKZukZNcP6zX1VqA4FfyYXCzTyLtU8fzsKgiwWm4PvZZSmwSKFUZHe7ThoZQ7ctwq",
  "key27": "2j8hxrF3XXyN1SCHjVEFZq9P4KkT9QjDpv1VsSFxbXVAjzsam8tbuGp9wwXwbbZnfYAKL9pkJsqFiri1ymP8DFKu",
  "key28": "XdMmzJov5L2BVTArkGm9knQtr9aVVV7rVuqqpjKEHhboJCBPLs8sbZ3Lkb2sprxx2oV4qmXamRCWsNFYJqfwM3e",
  "key29": "xqdyBz1o1vStngmHimNuL72SmD5DhRTMk4xLrXL1iaGgGFX8HCZ1SDxGDPxB9Y5FEbMWNZw91EoLvXLvnUQxdpG"
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
