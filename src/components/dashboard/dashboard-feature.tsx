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
    "5LatEVBVju3nCiaeQg36YVTLPBXqrdUSYwGEECmPGk2ACxxnsQnWgX5n5W9UQB9zZTmkBDAgiKcWrUeNNpb9y9oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o4FkP2N7xAVmzJ6n9JREcnzi6g3KAKNSs2jf3X7Zg2Yaq6zwNevAEieHnwQEvZXKaDMUCAJ5yErg8ccxJwdFD8W",
  "key1": "5YxLNWrHTAWEZC75dL2rdtH24nMg8Dir2HzAkuPWGKQZpWaAgFTgpeEw9j7E7oKpYE4ukG4nK7oFxWveLjiuFy1x",
  "key2": "4KWSQkhnGnbogUZTQK1zYy4sZURHTsdNJxN8oozzr4g9ACYWFoB8FV8XtqTQfnt2yWBwqTcFaK3kZAdjnrkp5y5Y",
  "key3": "2vPhbaeNmYVypByjLMf16DUcZyemj1SYFYGe49Dw7prt9QuQ6e1owZtPpR5cJDzoPzT8Su2yTFEdwCpGNyEsF3Aa",
  "key4": "4j9HZwMzWLdddUhT75DAdkxpvLzpRxnqbhG4HzjJfKFmtbQtVyXP1xRGxwicH2qH76fpFhWJiSjtBk9arD3uhu3w",
  "key5": "28cr7547VbwAbdmZ4VoCNisq7fUS74BPSD44ZmSPueyTP2Vh69DRtgpBoJzgLgDn5AyMYXX1GY3MKcu2tDofuiFq",
  "key6": "PPFhGNU1tB8z3c87o75TDm4ZAGDpLTCVNN9GSV8wwsLnkMG1TLL3NHrWaZ2SMDWim3BdxVB7Vdj7Uh6iDLrCVVD",
  "key7": "5jJQLvoxUwtDcHrkT3LRqALPv4c7rAtihAj58QJT4y5MUi3UdMjycbkWd7qfaXqHzWgehFLNw1AKABKzG2r5dGRZ",
  "key8": "4AydzcCXLUUgrB3V4GhKdHAECesqQESaaabAWRXPcyvp4GYCxUCi6esyh9y9fwrXEzv19dnguhyjuLA2TdN124AA",
  "key9": "2ckFnVAxBWxjZo7SFBVWiAPg1zJZLuB9WRUxnmcbtBK9JeFZ4NGaqiHnQpYx5Ndv9H88qCkxX3PRAvrLfjvvWTzN",
  "key10": "k76Ra94B8s51Yn1AbJ9NrKB4hWuuKVh92NVe3wgpED38D3tfjxzn939e35dirBSnGfbYhDh7g1xh26sDZah1iFL",
  "key11": "7P3maZw3LHWqQxnVaueqAp9f3di2tdpkP4fZcYByqXYLZqicqkKnDmyi1i78DXFTsRxQi33B38inWdLAqkeNgar",
  "key12": "2Q5zy3LXSX8VBeqsYboi1ugLQrT6f4ZDCLsSWRZ2nxQWwA5mMEf9dStKrUT6kCCtVyaqgdPKwdX2HbZuetkirJ9j",
  "key13": "2c93k6Zt2rJDdFaXT1fxtgambMZYHjB2TcN7oizweijDrsJwbQ8xxJX6NGQ7evPcfsyGQqre1PgGCRgSuRghZqzG",
  "key14": "5SDcTXDRDoX4EysMgYYHJpaGwCvvEi8uG4Wj9BUCQ2qrhKEfx6sdddXFGpPcg3NWh5j9A47HdwMAR3LW2BhXdD2w",
  "key15": "3SJMx3BJ86ALUJftsCWeZKi6GiRzizQz7mYFqMBAG6B7bEsWnt43MN5YhQCRycpHEHiME2RfGYWiLcRN1xY8Mz6G",
  "key16": "2r45DaEUavtZvArMKwtwncZMVdhwfNmfdk4sXGMxPJxgBeJUqdbh2vTMP8virTN16ec2e24PdkdPbWgRR7mQYGkr",
  "key17": "3KJJTcGbWUS9tP9ryuWPkmkgDs4LRHADMAdeFnv83UwEtn7QdP33cVqDy8hP1SwbT57SbWeVufcCkNGuqtfbSGQf",
  "key18": "4EokA13S2482R4JED3HuwTwjHaU9HkKohUaBhPSspnFoDP4NvvhoFY6wHcGrcbpnFFSvvMD1wJtLttd7BMnaFuaq",
  "key19": "3mfZSGRjpYjau9aFLqaMNSmyPkYa3PirTMW5YuDLCSf6LVJVpYY1cV2FKPXgAtJZxAQCbJbHbwoSHpEh3t9soDpF",
  "key20": "2dmFGCg8t66kMn7t5tRd9fH9JZCKPkMrvr1JWResQ6qryD5LcR6r5u1UchdAcqEfbbA1qcJErHR67SLaNC3zp1tc",
  "key21": "5vskjgxhKvbvnRgrZHHEA7BLRkoSiKBLcevhsKLdnkhVjmQuZtLEnRwKTSwKzGd7aMM9ZzUs4u6NTWRt8cmmycbJ",
  "key22": "kyYx6bbGU691aQ8bgqStrQ4NSmqD1d99NiJ6PqRWjYVBjbhx28Yr7hvM6eLhc8yVsbkcozkoTsv6GRjA6r2VwC3",
  "key23": "o8yg22fyC3s2YVSoRDTjhz6Bx6cJ7NUakTMx9k8MRnycdEDHmATZ3wg1VyPnriMbXGiZxiCV2nU4NeTdBde1aSV",
  "key24": "3qp1PKcD59Ajjh1RLAG5kcr3s9iUG68bJHfRRPJcps8wWNYMrSL472mrjEXwhYMiJv1D2GcnBc5J8vsE8WXr6BDG",
  "key25": "3YcpXy4tQ3zBfwiiYB1dkwdYpy1Dz6Fsufs7bJwtaDdmUFK18u9szNjBBgZNA49tidSJU3nERiKduFCsYeVzjSom",
  "key26": "5hhMbjhQWFEshJc1CmEZwP71mvDLgxUVdmC6WDan1GjBAEtQveKSkXi5U45SaA9VtE3jGgJ9yq8d61VMAv1LaQgd",
  "key27": "34SknwLydoktz2EL9pC1HYtJkjvKWeBvmukrRohfXbNNbFz3ZErSfDPzpmpUBdkHtUEbUY4WnYJ9BZsbdPevVEWx"
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
