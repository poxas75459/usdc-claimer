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
    "5prNx31sve5AD2yZvvHijWCUkHRSSoY96bjeCWck1fNHn2fKe5tXW9msPS4YvPTH6h2f9qSiQyYWW2RDVTTVx4Gw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21jwer7EbYpjH6rESBQcKNxCt5n9CXAsJStw2XnwkSqrxJFNwzJ1UBJ1FTBXs5zgVZsXacS16oiZ9bshXuW7y2Kw",
  "key1": "t6aMHNJifY4VjJWqZi8SuEQgNjNn2FvC8eubNHEyLRZZWN2RRjKLQPLFwzKqRwci7KrNmvE5S9RPqWCtfqtS8dg",
  "key2": "3DKhATqCPnnZaFzp2i5GEyZMqaDSWDbg5Kuj5nN13Dpd9VphognCS8K6cpRfZMfBbW6t5hXHem2aRgY6a7AwWzDn",
  "key3": "b4Ggde4GR3XsFMwD4u96ATqek4K5UHW6uQqnco4x95MPBu55fzvcCLWjgGk4nrKD3XU8i22b5ueRYpfb8GTFCpr",
  "key4": "2HsLPCEuiQmwCLSixvbK9hGq9TpaG2kzFdRAodgXMS8DqDWYc2nQXCLRgHq4nb8xXrZWHH5QUKkAkvGFoDMBuXCC",
  "key5": "2w7FRSCDkFjCDtB2ggoJgQ5biN8U2xcbcixaUjuRby4sj42Y1uToMiKsMvGH8tzkzpbQaYnbGE8QxU9tV1awdi82",
  "key6": "Wc6fJjYRHqkyRSiJgRcF5BgTrnEznupo27URihX1L1EJsfJLAYqxGFhkiAM8QeJQGMs17ELbJCcPFeY9dwj9byw",
  "key7": "3dzJxx3CjKRaBd1LQ4ZCa5Jeyv2Gs5CFEvNZ3ymmzxmPbJ6zXX4uR8SerJDSd4MkdEwL2CkN4fe64oVJxnskFgFv",
  "key8": "2VDNb6ApmwqjzZ5kPFMtCsPCYdPVGXvzHW2ghJHKDRoFPYtMpQFDspPbrnUcCevyPRVu6uPzMDimJoyZppAyNuHu",
  "key9": "4eDG8SAgYrqT6nQiSf2UpTYnMjFFQoqeppQx5EgWCtm97fvLy1yewrTDYipSHY9ntrx6qpKMXjZP1eQo3pQwS4aD",
  "key10": "N563hey3EQ2dhjU4QSJJMozkt6z8aaRdz1ZrbjtTXks8538DawnmvFf6XDTJxWc6du3MnjLSDR5oR1S1u8tgs2k",
  "key11": "5D8VY1MBpMkHg2xKYA5KFwtwDjUKBPcBJkn1UKXBA3w4GNRGe47WYPE79x9CCeFgEccNuZLSrKnyac2GshNWUyqQ",
  "key12": "3waCSYXV2t7eCiFY78Vj9FYAYNd5CNhNhd9TcVF6ZTUdt1iPtUwnABUB88CQEfe2AFHpqjW46kSPBSfPmrxhDUw1",
  "key13": "2Jcs3HpfL1d4b6YzWz86iB1BHUuqsSnUARfLZgLXomLXYL8zShPCfHQTqyQcu4857H547kMFASnDPcsrrGUvEe2E",
  "key14": "2rPr6TqQn5LrdUGR5EyeVwsabdyeLuTPd5jNmfT5eFb5n46hfNT49TimPXwure45TCPf5T9c7SHYQzsPWZZ1sUAH",
  "key15": "3K4VgfguZpkVrkgyu36HQQ3DQjLPza6qqvraqwEAZqvgAaEkaVT68oE8dkbxbAm4vw7AqVTXkb1p5FbPi7YBQVW7",
  "key16": "5rXCjJo64uYJM9ZAqA2kZi3FJNV63RkuYSjcwFYfuEbdq9iJ6EzrKSPqfV9S5sXzAiN6wRweqrUGoeo8osoWgrvv",
  "key17": "3StCPtBgmSSGirD46wN8Q1TgmsorNgVRv3Wxk6akn86utEoF2oqNa7XTfT26UP5eTAhpkTM6gnC9pW1Bn6m3HNqC",
  "key18": "2wy8hbWeR6EYLJJRr7EujVYdUsvNTeVTWfuNML8jPAD3S9xDRiSWjMf5vGZPwgGRNv2JfKCY38PPTqYaQ8FpXtfR",
  "key19": "hkVoRYhg9BmKjKR5oS2FFrpCcBcJRyNg889pgQ91JhbaViLiV33CH2iXX1kVaKwqzjW2nAPH6CwBQAYKWyy6AgU",
  "key20": "4ebgYDFQhtqTnnadL46kCgkwHmRsjHiY8nKXCPVqTRM4cbqiznTSLrzFLgjFXWwJDvmUxY8KAFQcDavoURotvhH9",
  "key21": "3AhuhxGTQMRSH944Mdy1B51avJhiPJSGorTMMPzQBFRvkiagRY9nA1zaGp3sDChspfE2czZFHGS5SkHdprj4nDxc",
  "key22": "4S1C2fhptAPXtbh6Rd3iohDBRpvikrFEVCvjYHTG5t67RSxsLrpiJapeZA8Md6ThBFXjjCF2TBfbVFsQWAuNdieQ",
  "key23": "2YAkLmVq9a2fow9cJBYcgj8MCLS7Y8xxYZYTyCWDsX33MZpcQphW425845AuimSd9J9Dh62BSgcrYdKNHcGuw5xQ",
  "key24": "2xe3UfFMJYwL7jN5mcyk7R7E25ppmEh2Msh5CZU4E31ov4hHx32wEh1BeKs472VY5ftWB7H7kV1xRVaYJBMYcdwj"
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
