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
    "2uUEfwCWJBnMmqLQwzX5xEpD2DjduFbvbXz6UeTGo8twH2DfrAxNDvXSEQjpvs6i7XEHsriHtRXjRCCNe9QVRBfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8p2a9Ctqy51NMx9EzwAoVaDLQsvkfhXrLFDd9BXBk8PoyCwFef2u9kYZuhfM2rQaiyUkDPNxhMW2gXTDQzN73m",
  "key1": "53rv6TSSRMowxQbFcwGnfgALQSHTbDQ2EHYMW36Q3wGX3D1wA6SWPnBMD2aqnPnyeoW7jxQCzLEgF9hqs6h7sb5h",
  "key2": "h8FXLRuXzKUR42QNbBMRuMCqvnTFinh3b5yANyiY34JkaQBjXypbwebjhx98L2YJdUzsC9we8FkcnZgmgVNyWTy",
  "key3": "KjZ92AWM8rZMxbAvAZuMxMM2ezQJP51pr6CuqNMmjzZzgcyXdiRxMjsLah5qYHjkggCmMPaKxJ28zMzQU72GT3R",
  "key4": "55K1nCJh1GHiP28GRdWoH2pjF1hcPJZDAqU3bsHkKyB5nx3Q1Kqoia5LFB67McGSbGzcqmehzwcvoVHHsX3btVat",
  "key5": "21evYpmP7fL1ie2F1cPvEfTRqpZHbFhHqxWo84WvhsLDY7D7QGuV9bi38Mnypgkd9La1Chb9DQCwAM5GmpYoJ8LT",
  "key6": "4sBZGNSFb24b6dwRX3YX4nSKJFW49LFcfj2eLdoFdN5bemCZKrpbDCHPziJE3appgEPFUGEeaHSqerHEtVkXUXix",
  "key7": "3FufaijunxQqvdBZk9dL8Fbys1SeznxyiRFVKRG31eWTtSiDJcV6jpiFBGyTqFKUQJ9WNhgf2NtonKC2gmTb1zw1",
  "key8": "gEoizvDJQ1BCXNp1VtkmD2TeCDFxbPAWwaagqVH6g7T57DFNumsWqSBKvZNT3KC4V1MCKBAcjBQgLFjoC4k9SCf",
  "key9": "7aF5TnL4nPChiRn4v4xZZ77ftPRqbqmyQQMQeS1QZQHAQmhSfBrK4YZyEfiDUyjbqEQmfZNgsyzrL6QVuYUK7pW",
  "key10": "2pEEf6G1XbExvquUMhVNm7Ut8n93NWwNFYQfbh6rXBYBCj2QbXA8e8p97AaczWLnbxjB9rKDospeCBjYV2U3Vzkv",
  "key11": "5J5UMDHz3AYo9WNpMEYQU5rdcBmMkyFUMua3cBba6nBZhUirZcbJMKo9oXnEQdYVC9ZRYPRvE3s3maApyjKV3XyC",
  "key12": "5pM6FjA39tXSjPpMV1ZzFiuUVBoZUnnc1X3GrhVqopHguz3S88sJFmV7fnunciS83TxneVNd2rS4tsm4kYQGAXwi",
  "key13": "5j6qX1F8JeSndauCrb6hD8WEWDaAeP4FzTos73CjQSWVik6NKCZ3uUEkwnjqUiJmkabDH8gBdqNvXRVALsxyFSDt",
  "key14": "65fVPUr5rxRjsGb6g35FUsTVRYg1KbJFum3oggs23VApFSGxgaRdWroLadWzkxVCU4CUwEeBaxqmMWAb5jgqMoGE",
  "key15": "1HiEanQSumtsi4HZneUA3dJojDkmTBjkhut3BXSwDd824P17viDYFpM29WvVmBQzgU4gEXMHSEKHdrjo46A3ATb",
  "key16": "3xy5ntv5XujJVWTy9bUiNiSE6uBgNaA65CPL7R8eWGA2ZHFiGnxz695PpYndrgRZsPzabx9t4jQMBWhGG1NMFe7o",
  "key17": "B8VjvKhp1BMMiHDJtXfqfQcTwzF4aCbRaFuLKCvKqvZkdiGMiRV97F1mUjXFeDgtooJcH5UfmddmT2d79g3SF1f",
  "key18": "3cWmxWfCYDEd26GbE9N9i4jSzHMbHUSzuxQomxDf3XieHsHh8Cotku9RSDvWsEzdBY1A4QAJiuYxoGASx4MecFbn",
  "key19": "4r44EpXX7dYCvjEJmBq91hwnJpArNMFmiV9jEy7w6W1w5dbcgSiNCgY8C6CeBaUcEMrNR4Ydcp3gPrGQEGecbEix",
  "key20": "3PDhDT7XHfn3CqkqKvp8cxBbj8BPPYkd3BDVUPuTjxbZfXJ5TpU57dHHsDL1ABxzNWoepyGfLmtz6pvdNfa1uDeV",
  "key21": "2JZBjgYc6gUAhpJwJyKjYMbH2wKCCJd36x6VKqj2WwpN9wQwrn1RR5xcswbhMLizvUMNGv4jxM3rC3RYkiGgH6My",
  "key22": "4jjDPPzHxsofazNkgqYfYQS7gTdCUnpP9ND1CDUw36Sdep6eBdXZYPGyrBJw5DA6Y4a7LA3B2i2esXvB8hE2DQLC",
  "key23": "U3aMYrZeqJ7gvURdar85SwZaR5sbNfsKu1TuuongVhQYUJqdvopQ2BpAMhmoTikygpfHkCC3Y6iB4mLcW8qQiTm",
  "key24": "4YLvUPN9Y2g3UWjPkeWdif5J9Xkosh5QRq8ZTfnRorCfFw4eM3ke517uQ6HkCDEfsWZYDEJCTaN9fYK5KjcPhd4P",
  "key25": "23mVmFVhnErE96mTNtiQ8zVWBu1RSiYdaKGHYw1H42Hz8xeknquWc7PEwCGKsoxoy3YAFue8ARQPZ6mhHd6XGoS7",
  "key26": "4hEt3NRUzgQkScY7tacn81rKAfUeznEaYw9cgxRFm4rMQCa6JeJGXWfMbHDsNcoRBdo3VPJ9RbSqFEMfUfXHmwqW",
  "key27": "5hofZzD8AMHSb7tkRhy621dKu1unshtqAEMPZiMWUM6isAqjfKDCfbFRFdrj6Z1w61hg3hciyCYmwa8h59m8coMf",
  "key28": "5vJT4WVHQNzC5tsVZaU4SzLBheaM9betu6nUxTW4YCp73Gd76BPv2mTAn4CfdRvbSdEktRreaUXjcRaFBLTsMrww",
  "key29": "3ScpwyzMPb9RVT8tuczdsJGbx7kCuYetC8sTM54N2Sjigv5B7owJgQzHKHwidGrRjocSz1RM2d9CYXzPAGuhwCoX",
  "key30": "5EbuU7F3QTXpcWXauiykLnE9nhqfRdmXQ6JZsrFK3gCmCT1nGdW6iBrSFvEr3kW15Ps8AK2H1WAa27mWR1NA9Dyp"
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
