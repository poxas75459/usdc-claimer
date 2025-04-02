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
    "4EUUgcL1dgjrbN2RNa29dRnHRFsw8MDVrnN9sDoSWb7uVmDhVuKFqXo4rt6pKk6pChvaM3Zafk8mFSkc1kDTDADy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vEyaKfawCQXj2CEKuwmUXvv8H1uLEjnG71oGSqV4ByNNBU8TsPYkJyBREsQNYdYkZfo1XcBbyDP8NbYhN46Qdkx",
  "key1": "2tMXzqw7jmK1kxrMYjFRu3gBpDzm5CgiTfP7QWAFvSfh2xaZwZ1RzDsT5PbAd9JKHyCMMS3fw8RT8HFtf751MLQC",
  "key2": "3G58Tpwq4Y2oGzHoaMbULeBvGcKEyn1Utuu2JbbnGF22f3muxVRbMAFucgcotYEW2itm2Txm1Q34MRBiMiEAzByr",
  "key3": "5y7adEWY4h3vzbWx8xWBXQuCs2mThD3mfdT5Kw7r4PugrHQ8DtjH6TRefKKnWg89UfJhmGP2Sv6EUsVWKjVaNcsw",
  "key4": "2dx9yk7Xi1enqfRDNtyKgYnGQojQbLNd26TyZ99RutmFVgK1ERbHKBgwXDn7EkXRWzRte5q9C2kuLbQL1a1JjYaG",
  "key5": "3QehCRM4rSvXRbS4QJgT16VBpsap7SamLtme9B5qthFgPGYTVsnjGNrq7EFozFxWSAcLAPjKL6zNDPv7f94KzPEv",
  "key6": "vqf8DWvSy1HsL913JSzze7JT4c61kubyh6QHBr4GxsfvhKNYsqPbzEhmVENpSrY5qhWJcGL42ecVCh5whjEKVa7",
  "key7": "4cGbdYU6RHjUJ5xQYpgYWDRhNuHqkBU7A3kjPWhEaQnHo5dc1TSV7PuD3YQ4zCy6Ns8vaRAxGJ7fFM5Mu4riPfFu",
  "key8": "3SjgoEbNyEaNHUQigb8amRLHsXEPkv6J8CqCZdtHK3bCs2pkGHmEWDXwDBV52s3P2NvpMcN5JaLwVJsrt85bUjVy",
  "key9": "5L8dxKMgPfcDPtuWioUnfGqgzHrVcM98WmLxjRvL8SxAnWtK95tx33W6dQ2BvWF7XLQ3KPdc6M7gQuN9cHLzQvLN",
  "key10": "4STqAeCNABPzvpvkYoqhqzzfiSbcJBjWJmENyf2Y54EyfuNSyvjfvpECembHAf8EruHvABBiYxCAufeP8TyQBv98",
  "key11": "5P3YWAuoZHUYAyzW3ubs2fkDpmMUQAoVQhzHE8PfT6LvarURnt8bAC97NGzPywgEL8rM5MzssiER5MgaBQpP2PdT",
  "key12": "kij6wLypXBVCLDHw8xGLotnHvH73uzfAohH7wAvCo9gPsXaTfSxyArfgQUdthv93By4xHQVdw29HuJ6cEHNF2ob",
  "key13": "4Rw3KykJaoV5rJT83JSgiZQnxCMQioZ7GJDmsc6hbMTEJ2rkeLxUoSBhfX467dDR9N4m5EvA3scrmfd1zkijci7t",
  "key14": "5GsypkwFposNRkABTeRmDQi15Tkv9KoKCuVKHz4KRKLP4Wa2iCutH77GFBLTZxMb7D3PUinqfFiR89L48kTsgxSs",
  "key15": "j3VTUiMXfEdKPzSMDi3QzjAYm9LNvvwnVmgSAQPTAJZmyXyritCXjUZLAVtMMe6zgDaHM5AARyU1LAnoM2FdNUs",
  "key16": "5enPPLCFwzyJTGVtQwhYXrkBGjNpvaKEce2U66kgsXF4yGyncR1eUU1iBi3f8x6jftU82q49tG1LX2Eo9bpgQDf7",
  "key17": "349TxgmTJfnm1KYYNY47TER99o3nidQwvs1Ein6tJUFb1mhtUKUrdEdZznVAVxxBuZLAQbPk7d3XBhyL1D91Ce8M",
  "key18": "A3GB5XcmsJRcFMTwsuZr5JVkiDuJRbnsQ2zNXGPa3FKV8wnCLCo9YQ1CGhBJT86EaWrVkJrDG2hDtKZrRw8HrrX",
  "key19": "2x66qW8TPA9uvTG4oLrHjSCxVeMwBmgMLxfJkBTmF4rd1jmeC1ohAR88rsnFctZVmgJUrEFXdTMqdqQoCjGWKRKU",
  "key20": "5XFUSHj22ndLK1ZmYez2pLGYK7b4V3ZvTY8v3tnyGSG7J2pkvUS21DyHTPbWmipEQF8p9PHySd9rVjkjuFsvba47",
  "key21": "2QzrdZomaMudj4fzyGMcAvYHe1xnEB7CL1z8NUaR9Z6FbqyJQtnKKTDNuMP1PWZkCGfDeyHBJhF2PQoL6CBxu2Db",
  "key22": "4MWYYuoqDYcU3KYFGN3rxNCr6inDe9h86G4wYird52vKhAD3BPamaFbCRoM6bBLBMBFFrTUSiX4Zd8cAGvNJQV3Q",
  "key23": "c9rQRMgbbXVDw7xsKyUAspJAcQ9mNBvQrgYqeJjw71XdfippuhiRRhro6fL3fe7Np8C2PqRLfknhnDTRhN9aWP4",
  "key24": "66vQCj1SnSCX1qUL1eYc5pKmX6C9P73FvAxuG2jo7Yuocy5vASMnwc5qC7yf98ub9Lwq9aFGMb7EiAMEKAfArwuD",
  "key25": "5LYn3eed53w7ngB65woJVi2oUhmjrp5BkrH3tPf9fSCo2LLcu3ukSs4kJykLx6NYn6brF3T29z3JGNExAJfjUpAF",
  "key26": "dP7UbgHbgvPjeTrgSGfkV6YchrL4v6uB6atscesgqsURqgX3mq3J88F38spwZ7XBZekN2FQwGUvwaxaFzD9vxTH",
  "key27": "4AmiWLTejWuct7gbsD69sPBvUdDQd5ZZQqe7xFNRpAk2ppkiVbJg1kHW2c3xSEw9mmQw7UYBCvbiaDaGYwWKdgKM",
  "key28": "2XKYAVkojhKUBVY4MLaYorviNgXD9pV4wKAWvN2QDDkvc39DeBRQ9PB4wRL38SZsxSxUJxVw94YfDp9beZHKYzps",
  "key29": "5HRRhzX2TJJwpwYZcX4W7iUkrgFNq54gsSMJBhpRfrnpfCA332C3opJwzsjea4UF2kPmoGMQ73S85hH1xFsVa6yh"
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
