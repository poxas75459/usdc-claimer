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
    "2nYaDJPRZxFYJnej4ngHxz8yyschuELt4dBDbDXYv7yuu76zk7A7tLdnmM33YbAWxZJtd5dqi2XVnSG9PNybVVTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XbA4Yz6Q6CAgAyjhYRyhKXMcamrsfuH6RYLFoAZMu8kWPKSfHjqJMHc5MFdoj6JNY7aaGshRnhM7zhoHzSX7MD",
  "key1": "3VtKDENL3qXDGmkwxL8fP2pX2RmYAN3Xvrtx4X5TqC9M6PzcigJrK4KBniV3h9uZoQrydcvqrUPcNaw1vQ8rxpf4",
  "key2": "4LPGg97hBzFgceAyenrBWrEwpDyxNWxZVRt8mzLTRady81kqTNH4NEgyKDaWhWfxoSyfhHsVsMTQdAshxdrZ1wz5",
  "key3": "3wZCbMboTXsNAiwjqEP2crBXZoqMcGXVxuWxwiXobmvsY8kTEhh3u5a5oWy1u5QoRxzJdjk4L1s5y4xwJiQxgjNu",
  "key4": "42xttMfXBWJeHrfRhf8UCPC2Rp7xsgjeT8cVoREMJbwEqwzhtGRh2QYht5BUf6VxZab2cb2iZ5zj7R7Tn298KYRQ",
  "key5": "4byJQtukTp7FsfMZUAqGHd7cNdLP2HQnYvYd2GBXi71fYWaVn8dGpVBxGVHgSnqVdkVCJpCQx1YRcXj7Es9Rhg4r",
  "key6": "5t4eb7w2m8xFA73LLUCw8fPh5F7PCtQAevMuG9XidRf4Spm4sFsxBJNLak1oNanCqdRzimr8A8R5Nm1jQFzpqakq",
  "key7": "5pytfK5rpEsFc3XoTyWjWhNqrxL8QbFfVLGHcpikW3m75FFYMBd6b4ruYCa2nP7zqJTkYZ2MW5NczZFG1eEQ6xrY",
  "key8": "5wzHVDSpHu63vDrXGQGtbWL9EFmT3TKRCka2nVC8FosxHQZpPHwhqRZ4dCEzF3aVspZVwA95zaNG7uyxXiLdvwyt",
  "key9": "52LLahKVrWDyY2AJtJMdXpprs7fnQVLVzqcZpXya4323dVj8MBhszW2RqZDuQdJVTyDgfLo7bWrSHNzfrCYwrD6t",
  "key10": "2YYGctvnD5ftXt979qUo2WrK3cNm771CbzYHtjrskBeiPYV46JHoZ5NV5wmCseEyv2TJJqsvNQWFCxQgeDos2Hno",
  "key11": "2bgkqGaqFRU5iqhNTjygCCSy92LPBgeTfDxXRrwsLFkiLrZdmivu36hsmNQF53AeD7KM8M4beQ4yLAsvYgkE2ZGd",
  "key12": "4ti2AH7nHcctT7rWFiop6qAmtVxLu459Es1nkwKPRbD24BXjKwLMZ9tvYdh6J3t8EE3Ww43tMa7PBVRR8u4d2Adv",
  "key13": "2v5MCeWsLhZvQwbTb1qE2mNhwEJJxF6vuSrphun75KtRQHEnmEBjBpVU5qfBtvKVxbeayMnDkpFRvDjbiAE3w9Yx",
  "key14": "3rFMj44n9sgti7ofYFiRVXfh3DRVcy1NRUGCnW6xSJnMYQGhheyjTGyqW3yvqJ4TKTNWXrwPD6f6vmyE39qMUM3p",
  "key15": "4dkBkyp7Geg1WvqmACCraMvyoCDQTY3yrL91Nd2mvz1dnHstgGnM93jYAWaQwpPGb9UYHo63Tr847dLr6HBwZuz",
  "key16": "3rwmCTis2xY1Po6FMbnXwntAc4JtouXXMixhEokWn8WcKPLykPcgqSaw1vAdShaaWQk1rf5oTDLARrfbquErUApu",
  "key17": "4zXQET9x931SyjMWfryzMvMc2idkrWTNUDGVW6kEKhmzaF4KBgVYAPSZ7c6vsdJCpsxHHvoRHxZzrHpNWrZ1spMN",
  "key18": "dSTJjhv5BVKyAJyrci9dNaFVieDrjTAzwzxBXAL2PFvqAzTEJZUvDv5ADvwBDHCfu6eMxPjECDp1gyTZNy723Gv",
  "key19": "2zmia6kAPV2MWp7jjYENhQHUpWGdpVXtgBJVSAd191m4TUnGvWHHqoNbv5WzGWuNfv8JmSRkBnjenpZ43Bc8D5pP",
  "key20": "4PMhh9N1CS4gNmDMMUNtoDLVsuPX3xNnJnivhKTfnKTLLykHKC6oD4DWvtN3oefmstdNZBLyd3MEaf4PhWp6Sv9V",
  "key21": "3UJMvqdCpUUsY3hGqHdFX3TjR6V3EjsQ5DursX7y7bsEiRBoqd8rEefHR9fjD33niXyZxEoaHQphRqn5QkxGmen6",
  "key22": "YvGRkAHyjyRM2j6WHWq72ay8X5zEofAUNiY8M1zoMFHKXFinaeot9ezbX9AotPj3du4mNufvMipjhrgDZ1mSw44",
  "key23": "5BtqfjjGTJyMWYfX26hjY5bm2417exiYJqxqpxDRbGZJGPjrBKR3Djxyfhv192kMDzzBYhegpm9hp1LRrRi4wo9y",
  "key24": "5wue79Fy4nb1krGg1EyQFqpf1sj9SEeo3kQyMz65RdNM1zwuwNWmunvAdV9KwATJkmW4jwLwZFPc1cBbGAh8b2HE",
  "key25": "pU7HkSexjA2Qq7SJt8jSVBon2CohxKeJi8vkqEHxw5DmzicqrCMxxNh9YXdT6eJdmcyEYZba2UfRET9YQnpk4Mq",
  "key26": "4vHf8azqXsSZ4nhqCp4T7A7yYAkccjUzqHRNzpgLo1uyTeS3DRfMVywuwj5XNGwMBkT3RgPVA1Bu567sstyH2f4s",
  "key27": "59k3Pu4av9dPzqLt85qaGNyTawxRLLrZNtqayJMBLHDKAr1HVC5CRuJQsX73BDc88H6Q87zpBWtrBcbvNaXKxRL8",
  "key28": "qJcDPK6wN8nkwp2XaqCJg8N5kkmURAH5woQpLpyqwSSkvD8NXT8QkeM5xdkVMuRrRJiEenHYMCUA73pKGUQLip2",
  "key29": "2LhN3AJqtxH2srCfYDRMoCZEkXr81ZPZAJwEPtEQEpp4jVJzTyrq6fyN2swYvfSU3B3iLvt3bhuxhNWBNLn5Y9aQ"
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
