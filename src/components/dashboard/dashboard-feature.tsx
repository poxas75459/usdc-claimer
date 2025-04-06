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
    "54pTYjGzCPVoqyzVtcuWqzqhBtpwHEktcA4dNyootqbSRGyAMoxKcHDbVFhx9wipVrTA3hqENMdA1pNiuBWLw7gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5PzitPLp9jtT3prj1gXSefcwJFrDc8PZJ5AqVDPxaewQ95sHacJu4CHuvDgche8z9uYxJVAWAwtpr7VEYwJgbJ",
  "key1": "YGxPKGW8nCubcH1c4Tj56M2VnQMXXC9m2vxk8A9Y4i7bVuZJvvXGRq72UVkZ8Uq7BqFP52JdK8qEgexrTFcMokL",
  "key2": "4ZUo1qfFXGnXrx6gov6zfeUqqjqzPser9q7nP6PCoQdN5AoYgWpHvHxgdUfYuBr3xsK8xHqLvyZUaWDA7Z8J57bz",
  "key3": "yqc6cZUiiGYJUAUxLb9po1hjUWu6DeJ8CZCph3KxSUfM1Wj1UnjArRKWQweDvYWSQg9YKRSexeTQ8eBEVNBDTNH",
  "key4": "QQw2c629KeTGgiRRdvjmTtPsfvnJBBaLFcXmRTpffePHFMbSnrYkGFKJGqeVimBcfrfbjZymnv439HbPPEREy1s",
  "key5": "3xwnAZGZotaEPkHyuRNzrraPWghf3QgKAZC1VdnBUqK6Z2KFMDJUdrBoEV22cxdqH46LrvMR1CwJvQb6sr648jUJ",
  "key6": "hZR4mYpk1bWQY2fnFEzvZCQHFbHiipAEonRWWufLYoJPMC7Ud3Y45rB6M5J4ihP8GhCu6ES7B9SkptmrcmRdSbS",
  "key7": "hijmmaMmanQf9KTsA8xV8my5BmS4h2ytG47NmNYfFJ9XG6gnUW35j4rWbbf1e7wYE1TQ18ZYvt9teZaUfCVNdbm",
  "key8": "3SHhSawvPxyKCLQzQjfAAjUgxupo7RfFRRT53ehA8jUevaPnZ8Rg5sJ9LHECdbLoDBnkRorFiUtynzHQPzK9MMw6",
  "key9": "5KVMdFYPjt8Lohumgziks49UZA57VEMz2ZNsUA5GR24ZjpZzqDYN1KkfZ41WnFgqEGGhW6fTJEiHkeUSafvG6sju",
  "key10": "44QNbC94ivtfkHxucf2MfPWiiCf1JW8t3t66cf6FJDiDBLBJ1z76d4BMaWrXxVhoHPcdgsddb98vLWUANeuUPRsh",
  "key11": "2xya5b94BEJR2wVmeXs6tviTCrHjKdcnNLNsKTdQDhmRRu45n8WEupFzPifgRMe57UjdVPbnqy5ZksXdmrxAuxqA",
  "key12": "3TqAMDTZTLNW6bRfHie2yfAb1Q6iJGQ4G2Vji5JBMy6kGKCywMkEQY3YC6L4YoRjiCpqgrtGUhujbsZDZzPy7ro3",
  "key13": "33YaVXmqTJzSDWNEXqspnu9BrrD63K6Gy9rPQvvWZKFFsLjULChvFd3KYEhFbhePPnLtMgYQGXHDNdts4NGxDXrf",
  "key14": "2tW2gHYWJXssySZFxKRrgN6hXej8tLuj5JUEmo2dtLZ4ix7dPidWHifVzQEk1mWcQjpF5e9CtoeNQ9nU9zDKPKrS",
  "key15": "5JaUviBUMXw6utePj7zW94nHWK53Tp9E33DyjRz7D4bFG1Po3upK6AvDKkmNhL2377yvCYprAD7Zm3SS9KziP4Am",
  "key16": "56R6KHVH7NFoS4DMhmnLYjQx52S6pUfyoZZeHJ4T4sZXgJ6nJ5uzyt6JK6LEqTQdr4nnHYXCZH4eyCyW3kfVcJRD",
  "key17": "3PsJZMFSqLdgezVz3dyiU2ze7SCt7QxicxhBgV3pupyeoFwEsPkwvNxiEWeFWWUr8Y4muJ1NoNh8VFBXvXBNYh5L",
  "key18": "213hcb1o4EP3BNbE2TyrtwyZRkL6x7ESGgbnhjAZC1MnxdXMmechJGpbH5vSjvg5XU1WGKkLgAPBBDMtwe7vEyM2",
  "key19": "PVZkTedQWZSqM7WbHLaG47pRNEAMTN1fjcpmpRwjU9ve63MaY3KubxGPDJdtzFpu4uMGXYGBhuyYZgp6Sa2YLtY",
  "key20": "4ArjocCFU9wc8xBtdRud36q19xUKJGgTScGRiSHVekh68Y7x9bnsCXdoF9i9M7GQrREc5AVgSuhDbVADUdFC95vB",
  "key21": "ZoMeEMj4NGFLR2czYZjdsTd1G6vobV9ChYAydYkUm5zwWHKsX518npXWhiBQcDUNx57d2nHFVoLvJp21KmHSHjU",
  "key22": "27qDcTeFtpWetbghR4k2P69m7GnZ5HxisA6hnykuJEfma2SnaL4Tzdepv7hLddtPnv7s3eBW4wJeMmUXpDZgr8fy",
  "key23": "8R775Bf97aZ8D9Q9rxwh3kjmoN8J6utb9r6b9da3T2vzWnNoTxxhQEjDf3N4Jn8k7NVgLKnGpcsuyuoN2enGGCr",
  "key24": "4Esv56D38NBAT7L97FzDjKSrhzESmnzeF3A3PPTNezkKiv2xZATkH5qnjnuiUyqhigxamkPwXaRSpWuZQ5duqJa6",
  "key25": "56JyFmxGCddJR5vyhyFfHsjZY4NJFULeDgJv3JWGiL4ZP4bS8wvwYjG2sx6BtaokVqD5QZuyAAckEr2L4B3xgWZL",
  "key26": "3uxrpuugdo38h9r4yGSUPTXSGncg8nb2wggPtWg3F5akA8ejuQTRj3AW7xQ95C6cbP8GGchNmmLMwAMzabbYmgDf",
  "key27": "4yqeSwJ79cZULKCUawUnYNXMHc46pGwxoWmugmS3zDGdXXaDXATyJwQQnYqcJrCteP4sVNCoH2pSb6DR551Bkcs7",
  "key28": "5K26YncBLMwvgBnEzH7Z54tMyDz8PhPofMFyjN8ZZgdP3qt8CqA2qwwGN5WhsKXJM4kFisW5iWMZHPWThiTwgWgq",
  "key29": "4RQef9cbkBnVwZ4iAtkPqQMFmv42bLeYzLZTwR9DnbW8Wp6b1wUYqJhxF1zGPXAXuvxGQhUBHzeXuE6UykXetafk"
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
