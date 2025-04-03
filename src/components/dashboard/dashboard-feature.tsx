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
    "23Jw4TjgH29z4C3uLa9MobrNYrf97fJ6ck8F4Dq65S1sS732WxA8mGxNK35m5uTBBBqCS3RtkfGLKhiuMrV1ktR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MvFxcQ22vR9Uvbpy5vAuAKpU5QKVuVmMzYEFfaW9q8aLzPAfNqCGyCSZgPDXtjtvtdcaCa8zPLzqPtEhvPqWQCS",
  "key1": "2WAT4D3WFepZ966u3Uby2aJJCswjjThSdUmPDzZ23uiZ8wJrP3xCS6Cpo8WikDZH1NSe5QUL7oK2uRqYSiT74gFs",
  "key2": "ZZ9vgD94ExAjWEc57rQVDSzjmFzUK1Z7Mk5Krxd9UmQjRiWNtoyA87vE46FwV44CwtGxiwksocYKUVrfrjH19B3",
  "key3": "ijn827tAaBDL3ybPMEY44YvM2grzWTftFZZKaqdrDs1hN4YdQPFZ6K9bCVSqNSQDcyFDUUgtaMWFD9o6WN75MDs",
  "key4": "2KHrxR8u7iZk3o9v6go2FRX766EahrkZH1CWgXjez3xU7cawAd5er3ugzqAMTPier9hhsTNrtdxxXkJQe8smszdc",
  "key5": "2nScyHTawTNqfH9wK2z4X6Fn9FbBLLvFCELCHH2TYAaVUctneHXCTTbUCzQYRfXBciXxKdgkgykgagKthiqdNuMw",
  "key6": "5Ukp7C5XeSxDDdAHZq6X52oHN7bJ9DwzPcqQGpiTLvw33uoorTDDWDyZjzMbBKCewDoJTjc9ijWku1iHyMgGv2iK",
  "key7": "45dpk73TUpC8UWoM16KXMbjVBNuc5KuPprL1wySFfw3M8YEMTXYXC3BKneVg3Qic3YwJanfEY131G8EtFVaVXjHB",
  "key8": "3hVwLgbwk8uSm7dQgsMQqe7kkzoc1pW9ooZbgXY4aotBEZ4v2XFFSUVMSC1dMLyrRiBeQKAAgraDMfbi4C6YsBVa",
  "key9": "3udFQsVayPuYhRfKgEArxheDhLgBYMGrGEqSTjdWc31h879SMPEkzSJXywycBWZx4vRJobpHKr19ADc5fqxj7KQ7",
  "key10": "5HPPF5D6cet4kYrNx39qkDkfy9BP28w5iCV8CRszgRBj1xVcpaJar6RTVSr3Fd8iFzMhMKjcE8GJb718zXUcNmi2",
  "key11": "22bzws8xGgq6nKDsEo28cfCPcM6QNXjDapoJ8B29XRM6zN8jwmyPBbSKtsZs2mEQds1QyYM8HoWUKERahyC48UoA",
  "key12": "3sieL6wk9PfQzQDAxVtpCwsDYXcXKvrkgnpAReTwFb9rT3RSbdWzrNmyPkVkWJ1nG3rmdaQZBd5XPtBFn6uTTRFP",
  "key13": "3tRmv9F8wXiM96Copj584ygudaroiWaGtnvE3a6vaKE3TDdT8TDDgfFFd6sf55RZRTBVjK2ih9bajdkPaxVQjhTn",
  "key14": "2hEA5s1CVXW3BCDRhZfhKLDcpYWAbLnfk9UAieWv6ZMpHtkt2ip4msU6Wq21CRxrxV9tQoDL15ovJp5E5k4ctB2r",
  "key15": "gQzhaoy2LK1NxExPKNbMEvnpA9xSTyXFpH6jRRP5Mt1H8EPxi3kqwJbBuqEGBEuZkyHGzpHHAnXg1YPKVpTaB18",
  "key16": "3LZiMVZEEjK5Kc5pam2GgZ2aa1vXuSjnhaSLBjZTqcGksTeNi2Uq9wdZTRedPXdwDyRcEn2U4n2jXybozSjvRuPF",
  "key17": "2YTwvWUEuZQce1TVNKv5JZy7c4yXEtWESk9iZG41TiWXt42Fw2djhFh8akWGx9Y8YukXDbmFJjNK8h9xxHPajR8h",
  "key18": "5jNoJKtLeXLeVE3ptDTkkhZ6gUVoh3bpvLvaRyN9gDTfA823icWxGtcaWnsUZwwbY4vpHmaikATUenp4hvKmnyND",
  "key19": "2xNtkBDVuF1nQmNYQQjff1rqLu4hA9vXFkS2MAjGSMXqCxSNHLB9CyfFsZL9VQNzXJ4FaBUbw6PtXdQtC8mbNA94",
  "key20": "3GxcShFXrbAJMym8uDySLy6vfDVbTze99fmkMfkSUawjmsqJMB6sPd25nFtb6933yjPZktstmfpAaVAktx53WyhW",
  "key21": "5tmQ7aiNxe2e6gSwzpz5ybFAFnkWqAwMDUNVsM4o9h58scRFhNSH4HzQLTvJxybt5nSDK2FLQwb1BubjHmfptB71",
  "key22": "aVyD3xMGfB3Phd4W3Yhx4gZCTCzS9MhDAv42mEDGobStwqwMiAqpdCPpHkeSvCExZ272vM6ZwYyfeFrCiBNczs3",
  "key23": "4ZbnZptfQKi1jCguDc3KjncHEWn5dWZiLpyzk8xe2gWjDjNceiT6jSYLoqNFgU7HxZDekm7sZ7FjyfdBkCJDKdvw",
  "key24": "29x6PhqPmTNThCCX3oGELWtmYmFH8PcUdkabnwvaiNqCroeeVZjTfC4ELuzUEKjujmwsXZSjSwsTgB8bwJU2m5wE",
  "key25": "39RAHYLxcFpB9xpCRq6F7bqBagRpjx3SYjnHNk8iH7uttTDPT8FXcGSaVBeWRHJsTCCZ1Xbotuepmkrg2pB32RTe",
  "key26": "LsBLYGH1kbUwyeCuAW1D5sw1LD8ARCZwa3HJtEAzGqKzeXHe36uryknErQwKwBSV2brAKYZVetU7unHZUtP4yYv",
  "key27": "4MZYk8FcEJPSKnit7sMMSvKKfjRFEVT8v63bk8NbhQrrjr79iUrvtatmDZYSw7bp1W5g1gSwTZnhhFpmdEh6PDEz",
  "key28": "Lbcxu6BDk6DKqLs5uHGbVQUsXpEVw9yxWMccEkorPK9fY7zSiFbfCzrEhtgfGUTAzYy4NeuKGAL6Rbt1coMa9zN",
  "key29": "2Znoz2XucKbejTn78XcHpunr8iy79Jo4to6fA24SdS14mRwVt6G3r9kqHkFSvnNwM6zCsAvx9iniW51KKbYDNu43",
  "key30": "2yM8h83Q9gKj5JkgEApFaLBmbHPUyLv23zBaunidUXFM71snue8qtzENfcafaqCpZWSMiMgkHrr7meGc9BEG57iu",
  "key31": "3XCj2kDBTdKLGH3hkFQc8mqG3teLt2oVvQhKyKw8bo9jusJoM3WP2h4SrofBcLnUEnKdYvxEx2Ni5hT8y9htns5z",
  "key32": "4S22zVazNrWGUxn2aFvtALBrTQJJ2op2dQ1nJAWgm9nJ3ezLp9GHXTrZMsJTQLH2ReFbVKrXRaXwyEpJEUwPJHsx",
  "key33": "4GbajCGrWYc8rQDdxH5NnAJ3jXxTBKWQC3F9QrpTawpoW1aEqGaySm1e72YoZiHDSaRqXVvvnj1wektjvrUuvJ3D"
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
