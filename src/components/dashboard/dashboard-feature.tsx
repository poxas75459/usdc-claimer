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
    "4657HRtg8KEBqSrvAGcqYmD1RXqAJSdq4WVax5M6Y2qe8TSXnFD4wc6VW3NhTLPHYqabwvLMMBVdc2oAzgzfkYMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zd8N8ZyfxqEv4xgvE1msQ5HiY6fGPqLvUZeodZydJmmSqVHWZgS8egh3VyJ86xceie4uRWvtkUvAP7gAsH7Vg32",
  "key1": "3hZSVk74YGfWMSBEYQVn8i4hoHSVwrFCAhTmZ71Wxk5ubFpEEYKQwJ9mSmcxfEHkzdLEgSWB9dRnxAn1fsCALauX",
  "key2": "4PqBEXXZvXo33WYB9rn6fL6Zk5Wq1tygHPX7tdsd79ri8ASLWfLbVoUwbV2mkqMecSdSvJ5KuczTPcuagGoovN8p",
  "key3": "2ixM19ebY9hhsNwqUTfuDjmcM5R5cP4CsEzquuLrq91kuD2qfaansSpQZPWb8o4dDPppcD8KMSDgeUGRbB2Umerj",
  "key4": "3gKPzDPs7AmTJmuqDDYjTFfnU6qDVF4fx1qc96iQCiZGDRSNEJdLNKfZsgA8YtYMw1ps6Cetw1L9eUPuHaFCqX42",
  "key5": "2HU9QrRXctN9XsoQhjyMrLvMDfRJ9dAZ9mQqmvjr7HuRWDpwP5Z3fGFakQxkYsKcA8fnFUswf1umM8zKW1ZUfsnx",
  "key6": "R6vCs2KSddhkf9b2y7EaLDaM67kEVaDCxqt6v6yrymsGWUZRKNAvCgpXWMDCnqmBpgn64PHWdtufYQx7DFWvtdv",
  "key7": "3ERxiu7QQD7Nw9KYPYpqKfmry6ynyzn66N5kwrrPLEMXABfp8LauuGNqWcqaJN8xDN8RZxCBZtFWxDpVKPRR6Apj",
  "key8": "Vi5Zoksdd9tJjmSww6SHSnoeV5NU2y5gPhjAwZNzhQ2MsYwGuPx1K6pyUEdjHoycgXYk7571aoe1eV8wiGRHznQ",
  "key9": "5ZdTwM2sSw4bGCnTpmhRd9869pu4MVVMRg16wfDKAr3T1bcz112KjghBHmEVbhwZx3ZJEsTW1MMLkCyQ6HcyuGUt",
  "key10": "43bwqqQBFiXU4caKKSwMdSeVQrUsoVXHdV7QXiAsqhsrB1gTQAnqRDmYzNTcc3PZPizgS9K93bVeVLEEU6wmFVKb",
  "key11": "4W6FTsPkmNmJaBcsHQwkwxfp4D9TWYs3eQ8qfyN1fGPPUBQ6Wzos4V7nU2orVg2HGts3LfL4tVEk2JDy6CLDhDaw",
  "key12": "AsC7FnpwvGdcMevRkrjBm6BXaYVUMsdP2hEfVG5m8wuHFLRS3g23KDfjnDhtJKSoBUeNAsoQcqnp46WDphTVDGL",
  "key13": "4W5uTiCGYT4yGLDPDwPgn5QgjNRRLS7VC9r3e16ErQFZDETeVFd1XZxfYcMYXfFSJnEVs8nvhqM43ERMnZMXe2D4",
  "key14": "4a8q4jBQ3sm5JDM4dWyeixqgF8VRAuDTtqF372VM7gFNgiJ1yp4HS7atSfBooP7Ro9Jn8ohgVLkWJx3LGnrzJLjU",
  "key15": "4bNoa2BUjRpnCYPhAtVo5vxYUBh48Z5kpUpM8MPL1tqukkndXiFG8gLie9d1banV4i4aYAwbEVbmpLzqS4m5bLrA",
  "key16": "363akgt4jWH2VpLhmqcCpzpPHqQsGHZ7mQt1b1vZP13Fz5WiBXtAfyhWnXHoyAegDQg9ouupxV6MApCTe9vtA8gx",
  "key17": "nK28VC57DEPbLxHNk91ZhzrhtwiYRagM4SY3whTDcPx8TvirjnTXrDiACj89G4BFyKPhr8M7hoc7fxdDmvFgXRo",
  "key18": "2Y4TmJFj6jhHUREzehaAgrXoiWQ6VLWmwYHQjNefspT9wkbXAz9joi5aFchPpiu1iByUgBYzpTGVtRq3fEqyB5Kh",
  "key19": "4XtbBJepZ1khFSHCd3XofENQJytUy1poDFd4VRn3wpsRvmUo1LrHpCuNA1RNBbQLSsQEAER1Lh6DT58oYp14ZDD3",
  "key20": "9qt9LRYnucPdb2RDVnWUQrrm38a1LRgWZ5Kif6NdoCdDk7mJDkfRyTtz3dju9j16dQsVC7JD9UVdzS3T8LEC7Zz",
  "key21": "5qD8grzZjoTs4uuS6y4n8fnoDzyyKqkAeCmDwVt9BK1fZujKGGokUXFSaViwM6WS77CMZqZUZoQDvxHeA3phR1E5",
  "key22": "4PBAyxjruahmZbpbAVaoeZqat4hqBQwx4wAPXYMRGi8VWdefHWxsumqAoLdEwm6mKo279ojmEtN1paQchAC212bb",
  "key23": "2XSmi7iySHHXvbDZjwET85HqhkpyUVAuTjJ7CjK1rAgV6z9kEfrQVpVJSUc67pxPhLrTSKEVnUimtEzms2fZs8jE",
  "key24": "kzVvQG3SLVpMPWav6NbgWzrVz6v3F6S6v9LnFKk3J9BtmW6B3988WEfmf2REYSQjsenvFCVhpBQQHwWNEUEESg7",
  "key25": "2xGfq9bfo6SePEgwuEQgP1Xa7Q9VtwbDWgqm7s22iLRXAV6dm7RCV7xBvBb7DDBs9QSEmYN7FgZ1FaGg9opSFz4V",
  "key26": "5saWDQZ9jLPeCkwvoVpCmHs9NgSa4uHkbX2NuqRjpVY6GjS5UXXAS8vHq6DX8yS5rrRvwCT15DRCULhi6ZTYg71N",
  "key27": "36qWYCDv2wbFSRP7JHtS81aXMhNuFi3HKUkPFLTBNGuFV9qdwXW6WnHKo2EVJQmyQMX536KHg2Tb8NaJaZtiH2V5",
  "key28": "cwVEd3Q91cRUNSPYUrkX8Duvo9UZuwP5aHPvMk2C8PHEPnwNz38KzDFQUfVTP2no7HMuuGVFBLEaYgzZrr3bxNp"
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
