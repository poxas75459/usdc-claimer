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
    "5jDV8Z2yAeGUR39o5HKvyXa8pzqMGie5FBCFNhngW8mBsN6qK2gp5nGjRJq82KPESLKTHEVXSjzLmSXkjaizhbcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fkgZFakz5vUPqUmgwbinwEVE7bVWKwpnyfyqVLCpAzaZdAkM2UxjxW8G9isXZTiaYfpicuVojiuku46ePxUF3f",
  "key1": "2qeuFPUVh8bPUkyRBa5ea8fCAh47E5bLa9xtQsQoQx69iXao6JFw8q5MjJ6dFWATkpZvDRFNRicooanZqYtA7mRU",
  "key2": "3WXRjDm3uqsgbpFt7EiGry5FDW8m9VrDMu8Mf2CCr91XxiGBYLjJ6vxTtDD9X4JKFU6JP1xWtQEvpEvvUM2tS44E",
  "key3": "671cULxybmbKHhdpvY3M5o7naykCRwbNAK4D4Sn5pN2wWApRuWUkMCM234AS1AbMaeaT5S8AeAYXEQ4vbu6HWen8",
  "key4": "2KyF41Lc4x8baig9QDf5UCSZHfVYj9wiiq3g4JEqPh8HaafVBR9RQXMXjLnmaynw7qW1iq2UnYgNqd6pECsuA39F",
  "key5": "3Y28tTmMbzdTi8tDhpJ6XWt52Baag7J4scYGqToXpHHfyajcYxzVoJeaaj7yFWGXYsRGsWfgbTd3SX15p7cUSXVW",
  "key6": "5jFZ5XfXDhMe3SzPysxZoD4icrmfmMSrmYSbVAi4e2XGkBkMGpyfcPJWWGCkGyt3rMPyYF4M1JGHGJNAn6Nb4zty",
  "key7": "4eVHU9JSo8eQHoABitShNVcbmuVq6TrTiuD12iRANfR7e6rKUupmC4rJQoSx6GDZEhNaVaTCwuXmnw5kYgmW41Y8",
  "key8": "3LVQSVNiUchqHRWTF7QSDVUsFNFjga7mv4ZBbiEhZ9UZComLFiUhoMx7TR4CuzXEGYP32rnhxKBe8Qwc1szCyBBH",
  "key9": "2rrLkg6TLfzrCVJjDEgmgdotxHY3ew4FvUiFozyx1W486qcRociMzh1MKeM7Eb4VQ3N983NsrSExsCqX5B8gbUhd",
  "key10": "5EwpywVVnrow6D5eoWfDHzF5GnMdZsrE3PHE6Yt5cTCkxvmnBiNWHKb5TZC86HtnXK9u3Z7r1cEhW9iEz6VkKsD3",
  "key11": "Qod3W1xRveB9CTvdnuA2twudQgzG4oERHUNDyDGp53MqEhr1BpD48NmkRK5jhNM4pBhcWBSfp2shkcZE5ZgagzV",
  "key12": "4dMAAGiiwVA5BUkL7gpD5ku1iqjR2mMaDRFAgq4X39ExfPgDiAVesNTqHZmgiuYuDPoCLFKgWzDjgGFbNMiuFJJs",
  "key13": "35L9gcjxQaPTqqjY9adqXxh1n4TQEZjnWTmwTnbhobLNeiyuoQdZqyqq7UrmYhTuihbKE8XJ7YGwiXS55qaiAEax",
  "key14": "539Rv1XD59vgDGyJUNPYd6LVsNJ5WEf45pcyJ2tyYsN4f5ZQg3GhFM2iGr9aMcyyq1CBLccugfCRTidFum94P7LA",
  "key15": "DmoticN4GnZDfo8zvVnm5me1HC6Q5vbTR2unavfPbKt2PaJ4YuSfzCV7EcZQGW6kGWbvbihTaKfvjQEyAuxUHKC",
  "key16": "5ZbGSzZ6LzFYCefaouvF6GoQbjktq3vTn2E9s1BdcWNdqzUNQk6X1QnLszGB4qmNqwKoqZ7G5dLqu3HK8xcrnKZz",
  "key17": "3QRMWi2ZZorKc3jfAzQtLv83JVLQHUxJZ76wmqA1CD1u8KyBLYzGLUoDwd1arpek9UeTNUB9LCgcVovFZig4X6Kp",
  "key18": "3cBoEL82vJ6ovnqjCERcxX3EZaT9V6DWtKHhy3SC3mG4tcSc3PbTgoBJ7FRFUr96AMK5qpAUNsRC8KgLQcYKyRRt",
  "key19": "5u96hv79apFkTXhrGuhx7V7ahmCoU564xmeKgtMhSpVA5ff4TGS18FCyA571Zuz66rNiSLR5iBXws7RT99pDkAku",
  "key20": "55smA9V1kyuSHMk1EpQUMEcCGbqkDnaSgXmJqSgAkijkxwAsgR1mav9WjiE2NTFW6ZkzKWgMDUh29cQDBVb7hTtC",
  "key21": "LqKHRtzLSjwCAe7vEUwte1k7g2QcfVXW1PL8gLTLzFVkKMK1v7vy9hdbvRSSbruLdc2RfmzDMU4YSmmzayGBYLi",
  "key22": "5Kaqf4KWsiZpAusBvMjwHYadJ5LwKGjiNo4ZKR6GXJKPLjT1qcA4e2y3fBtDybyqZUMcryFLZg1J38hP7bqd2hwD",
  "key23": "YF3XaLAHHRN1Pc8TQn5piwLHcZxZkzDJpdWXN6LDLos1iSAb8qA4hhCKuQc4rTuur5YUM6iTXLFKxc72m93pPF5",
  "key24": "5N6QyQRcHdAxHRABH4TUFHMJsbqRCEuBxdVjBizR2BbUzMeZwffebHupkx5KYFX7dP9auWNNEJ4RtGHfvMNn63u7",
  "key25": "R9Kva6At2YbUkYNZqcfojBPDUH6xR4t2Y8m28NLkwnfaqgYPNtQQ5zj1y12VSS9NCRMPJnQryZG5ezhpFPE4yCV",
  "key26": "5dZvHNkRcHBUFdwhQEhZy3svYFYCi6GqkiptfSDerMRWA4JiYW5tpR7Uksfnz33teKqE5tKNqRmPsTZpCpXBdMQ1",
  "key27": "3kxkrmNPZqDY6276dYzPW6JZXLCLmsHavrFbniUCKSRcmJLmiK1Zp32FScL8Nvp5hmEAQV8UzH1RLx6RggKHfgeE"
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
