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
    "3bZLSLveKNn2L82yZK3VAdBMwQz6Zm8ip2cdieTTb3z7hs8t8kTKSVpunLBFEi372sZupY3HhFYbQTzdXEaWm1LT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bP4BE2h47M4HZ4yF4KMN9PjcCrGaCEYRcFK9kJUhBjJqs65WzcL9uePYpYxLqWezncgVFW3UdpkVQztqiTgvuxq",
  "key1": "2S3vbBq8upYZo6urmqJqboqBG6MHDet3zHdG2tVWiNXEXZSEpEh6tr3SdM6nGfkYNie1mMEoSWSifXK15eFmGVZL",
  "key2": "4x7HWAFFeDgVbQnzhynnWeXZ3EPocVb6QRSdQSsbwfYZcrNr2gfeX2nH6AFWcZWPf4dVMVUavct4WZSJ5eipJqTv",
  "key3": "4vV6VpHT2upHF8hJPaASPhukpoXSqvbZkztBxSjWH9SswrgeY2qJQkcDHuQhsWbs44xDkk78ktTfD8VXs9NBo8Lc",
  "key4": "2uL1sH528dG5TJWgiXh9wJd5NxgCHEuK4i66RGVLkthDYKm7SgG1zWX4sn7e6vNgoCdW42zjVpa3M595aVkciTQH",
  "key5": "vuaDY8YxzCnQqxVB47u5nT2rYAtWQWivkMTDU1kZ3kewE99VZZgYg8LDoSc2XC74WYaT6MVzuXyczXXFN1bVzL5",
  "key6": "5oEFZLj5Mkx2eSDKULNdTeTEGx4u3AdJi38zEaUkh1rRXQf6No7VLpyxsyS6qxrLmVM7FFihsVpEeqnyDk15pDcA",
  "key7": "2uUD2vELjW9cjqjUZkPAkoY5NYFumr5KN8m6uDDKURQvptsBZdQGJj7vSv7mEHinCYBNNCjHgbbXBAEfPUY4Tryr",
  "key8": "eveXpuBuJFNVzQpUTwMaMf7vDbwz3YJh5cTzj2EN9MMpSA7dHhTXi6c9bAh5iU8PBwhAMQd6emSecYujnXabLr9",
  "key9": "hvpcgwvNmXsheEVQrL4wGgt1qTHSUXMNVj8iCnirCQWL2dMewGaYpG3WUUsezPMQzK2uTFMM92XTuBpnf96eDYn",
  "key10": "5unjRWCmESKmrNvutYjmLovScDKHBvCGGDDdakYVAeNUAgxcW9n1BNeFdVVKNJ3ujVgREZsWLeL4ZBz6gf7AYHh",
  "key11": "5m53Er1Qv1PxdhpbEbtszqavWimgGWVkRdqVWuxeDBAeNgVtvYKvuecoZrsUQAouYxNYKYpXpztSQBSF3B8ravcr",
  "key12": "4wtc6xDGd9aE7qpyiVUeSDE1Y8DmTsp71GWv7zyxPGob3qWMvLUP9AiV73uPD5v9wozq46FUnWk45Edp3LqEMHVd",
  "key13": "4zjxFtyHvDmSGhWikNEd66jNqvdNoG2BAn8xQgHk5oWSzuSkoADfVm1XSEu9xVkBjb7K3kDFnutGEWfQSd6zi8xk",
  "key14": "RFhrqXXEJrWwuhk2bMyMjtR7kJM83PXK8FDmZfX1zqQKdXJuB58qCTybc7FY9CVRDGdP2ZzqMhvyoJ5Yoo5Up2q",
  "key15": "2G564JBfYymDiiZaX9eonyjgBPApmkU7aEJK2TTKG4uih7WFqaoDmFcUm1feSFi8HwS2QzDBYA74BTxCLycmRujv",
  "key16": "3nHdnSxNwUFbbL1SVC9iPfJdwLoRev4sXaHepS3ZphncBpYmSh6Uf5obMn2H5EyiF2XMscABBoQGUE6QrFoE5hfw",
  "key17": "7Ro6E7seDvYxn8etiPDdd7cpGUAbz7rEALvtELYzuxpyVXzw2uggDCz49XkZThrZiXhGs7Go8PLSsCRqfpMVE8n",
  "key18": "3n2Kx7GA2x2L8ZqUtcXEf4YN5mfpQkh116qvepBEVfZXT6LsG46q5wtkzvHZkUQqU6vx9wUPGo9f8o3DjFfj9wZC",
  "key19": "UVAr6yc8Dq6AmCMbdUFN8B6ntBiL2Bfo97sqTWVxAfKCEWiNVpBR5uNsRiYd14rs4nX19CGikHrVXMKbv2njUvq",
  "key20": "2f13Vti8hhhCSH21cukkWFsbVHkftE5rZCHCuct3usCCxpBmaeSRPMxHZc5bjcRJDBQe9hygHA98mLVJs14MvGia",
  "key21": "3ivUgX7ESABJYJTrPyxM1UKXoCSyDqc4XHrMTQNz6DSnE82xJ3XPB9kgGQF6kdM8kZtxYTkq4bXonnFxwK5a5njN",
  "key22": "3ysJ3Rg16QzW4auCXhq9JK2UA4mBLEqHCYAF2QT8eTjQhVVjUAoXG1jYz9S1CQQg9mP9wqUdT4s9LbYV23vbUvxh",
  "key23": "5J4nf7VL8getnmiHCnCTJqh6yTTNTwKAAGWTEKjBCSZD1PrT4AyGKbCcZt2KzB8YyF2TjiBEzFUsSzoA6FK8TtcS",
  "key24": "5YW7dRCR2gEirQHxaDXp1C1mbUaNfJ1JrcL3TBv2a9ZqcHEKNhkp8n1MSmAGwZN7bjANqwcWA2VZqsosfFLa5hzM",
  "key25": "5Ag42E9bA8kU8y1EZdnPSQuHgvr9RUtPw1Y2PABCY5oqBDiCEexDrPDH6PS7AQeW1ryypgUV3uPuu1zQsdpGaLWM",
  "key26": "5XaJ2bjfDhJbp2Wb6eveBmZHjvBHNXWsnxQn9vLvPuEqTrY4gvTGkEfHN54kDmw4noR9VVi6u9xudb25pA8KPaUe",
  "key27": "5KYFHWw4fYfL1mx8jrz9F2acCFAGM3bXafohcqtqSpxNV4C9vU8LtSxJQwA8q5ctiegBzGspEuoPhQgZBZDhmjR1",
  "key28": "5igaDdWAyrjBZfg3nUV5bPrNkZPSdJNctfBESW8f4BViQzDxRovLNrZ1PeENBh71juPFck2H29gpnnq3YVsmfoxp",
  "key29": "34FETELdixrP35GveheGumR31b8bGKizMYwezcg9ERDMpmiYsJrLcX1EZhSaswKMHkyRpZ2XvDqmPVGLr1bVMc4q"
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
