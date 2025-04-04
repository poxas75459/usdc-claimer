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
    "3P1DaycYFEvNNvbCRHfHHJjTpEjS1ecykVbZZ1Lp3LU3quDJt2Ss2DByXQtMqhZnYfWkxsgJqZeeMQUQDNohziCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ed4DguFpdW3wmWrdAzm9P8v3A9mEMVbB9rXMauszQCTR18SHBX8BNF8WQ967jkz1gxSemwBkc9g8891Ldrch7sF",
  "key1": "3oSnXv3B9g6UuYcXmeMdaUyhc33xibN1wzgcZF9NJACPAgGrBEnS6hKQH9g4Y34WaSrgdfvhmNz9Gsx4tB2ePBq5",
  "key2": "28YN3czb7Nk5jiAfPeDCRVReiVUAdg7HkgMcoTNMvUcm4PSJVxmYUq7oD4MuFAo8XhkzGSbz7NPcVXgxEAbJzm24",
  "key3": "5w9gTnfQVmj1kGNcH21kYnfyrfzjhsRBidDomQ6KgApmC2h69NSrXRCHnkLVbDPS4z6PT5MgKGn2HmcLvBksd3Hm",
  "key4": "5ifj4U8Y9uEVbg5BExSWZ8dCLMGoBsfVXDizBJNRz9sqrDCdnCPpTVxwbtSj334kEZ5MGrN89ijA8GBXv451r8fz",
  "key5": "4D6FpgAvvNJbEybYadfRH7BAoFgFVrA5JCAvd77PrvsSqUe6E77SYYTLTibGskGqB8j1yYJrxJFUuQrSZKGrXkLc",
  "key6": "2CQrnffKGtFTzzhp5MeH6ZzHHN8AAKbRxq93cCJiXs7T3H1LbxpfqJAaiuMshQUcLTty1XJa87Uqy99VsS5Abfv7",
  "key7": "4ULuYf9zRu3dFuuF1zdRJMrKF96Dijda5RMtbmhXv2WHbpTGmkBd7u5uVDZP2j9ZJpv1iVQuMrd6j1CAqXvyKm4P",
  "key8": "3qZ71CNTHBAByCB8BmWuT6UC7RTZjx5u2hdbFNFXfBdPqerDaB6z5x4PiYkbjHeUNPPTCC6seKRXd4Zu3AP1edzw",
  "key9": "2pEptNot9LMg6GipidwJekbzgTSV5U6tNYbx1DyRLrUYGU73JZ4ZDrXP1zWUQhqRGfhDoQMGfvSc75MRHuUpxwLx",
  "key10": "4P94cYVA9cyDeMYGF62rxQo3APJCdAnvUXyMEypu5XUNBhH5Af3g8v11d7MG9HxTuk8fJ1v4rjQ1VCng75AB8UBR",
  "key11": "77ri1DKUL4P17zpr1xrkCSsjf9TDAStWTQopkQyPcuPyLjyGdx6w6ryZhcS9Z8xs7MBjaxyWHipJ2UmjPqZrxde",
  "key12": "3mtMToh2Y2n1tsafoviaG9pecGhPQ6QaHx1dQNwdKdV9UdUmT3Midcwj3uhGc8JhM23JecNSauZMU7u3RmYLmMKG",
  "key13": "yYUNjRnXdsRnqpx8J6rNyAT8xq2Pu7bCcm3EPsfJKGyzhFWFYyyxNXCUAqSTXsKeBXD3LqzyKrcS7WC4F2XyCWT",
  "key14": "3grHu4VuciWTzCXuF8jmc9wsxFYjRF3JoG4aiRZ7ungjEF47Mi333RJ8gMq5b9wGiV9xpoyiPb5UvLm3ibyyjqZ",
  "key15": "A7JRQ56LcoTPqc5m3WN5GTeND5G1qM1PidS6bZjtvxvwWhbhKXnYSDPRqQNWkmCtd8CHUvbizVxUc7YtW9v6zws",
  "key16": "2GUaMBpp5P1Ri86ic1ryttdGGDg9MWKpXKdZqt91EGyHX2Kz4jyc8yTbvK6XpByJX68t81U35KeMPs6eKwmP3arq",
  "key17": "5KZTqk82dQfu3jjC73J3ijWhN4Pf7xuPxgFdJ9f1PK8yZZ6mH76BZY2iKyW7bbRQqq5QjHNExuCqRhJjUNjkWHaV",
  "key18": "41n7X3T6UyAtAkvjWJcSH9kZmtW1Rv8vpPkser13pmEb4BWQTHiFssVmjZeTADKHhos5Jtj31Xw2WP9EeMcpdePk",
  "key19": "42vTo5mX1Ljfkia8z7693hxtbcnvfyyLDfe1tQJfwpxEoby5HmT5Lt3Ri3VxRDexFqnWtorwzExKEwwEpv4c1Nvb",
  "key20": "5dgdsbnV1ci1enZsLAq6yZsQtBX7d1Pn7FRv3ZgFEv9a4yNcfbXNKJMd6CS5rLrGAVasabNawPDSSwxNybNnHxWU",
  "key21": "32DQMJjsQMRPmakdvLsbxf9UwuHpjWDKz76e3mLgeAYN6e1nDfg1NQWmz1VFChzz712McdjuaaTRCyKVJfLsZNpR",
  "key22": "5afzBx8NaZyyHe7b1b7W47EgM3xinep5d1YiDguwCVvHW9nuh9hZUDXAAVYDRkfgD9K8i4wki6EhzqdaH7bXiPA7",
  "key23": "3S2EN8TvyeMdp6H5JFPxr9V7aARmpesgRooJEbiJyJPv9uv1cCuGEJ49s2qZ1nZ8Ko4whQVpnWp9VqKkQ3VohyCM",
  "key24": "4eDhHj4rGpDri7Uf7k5rdBbvKrepsx3B7zfkY9u8CvqTGS4eBM5GrJB58Y4FgT9oa4KeLLHJcz7nZx8f6mkg9A6F",
  "key25": "L3ngtPDPoiCYfyHmd1xkcfbxk5oQSbNHT2T2B75qFvDBvNe3xXXVJ8gHVo8T8mVVPkYSjRcGgVVwgVyB2QPZwUz",
  "key26": "4LcF8qM387Wmgsghfi2CS699jHj9oDQVCVTPtRdEXJJAHnhtqHGWqiiXmdvUWvZkGf8SUdxBVVmLK1BhFTB5SRcb",
  "key27": "228TPNWa4aifwo4rCdsSci91UK1iUjiU4cpZHL9G9Wu2JWJJUNyrG6yGQ4Jiury9CTxkb5NWyB9E2fHnKXvtbrgn",
  "key28": "gRc9WbbNyjDe1g52Zpg676AFVUsvqTpwJTzFY3mtkgYAs9u7J3GhDCfvz1XEdWw1ARRc6yUmd7Dfak3SbczZtrm"
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
