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
    "4c4xq1sqjRM3iJRDGDdpmShJsVuHAJJeC2EA8wgHCPotdDQD1nEQ329yHRkJvWFf6gTnaA5kCk118eANtB1UbY1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FEDE8oX8qrz27dpbuMw2Sf2mUrtM9JxfZheptVdXajwhZA8ABKFFFnTvSB4FfhRxrEWMN9coN53kJdLKAyxqWs6",
  "key1": "3HeRTfbHmCsgg1itiqq5kSrZsqH5EPSmKZNq1BxGAc6BrwwpAsZ3wW7JeiC3WbtPoEDgY2qXUv8HAhm7DYK4yL9G",
  "key2": "4kNri5G4w8YCKLtPfA5jvpJ11ettk9QN8eRVrgiKVzRd41fwB9VDYtdXLkTEuz3jKveHJuMZLXqkzrvQzWe3CTgT",
  "key3": "2tXJjhJcbqfHWNZNmDX93QyUV8SAxJyXyvXrrq369BZ8nb8CjuRLP4LqNwmZfiNQ9mxdZKbFko6Bhs4UNDcoawLS",
  "key4": "HqbYp62nx157BEF2zn48GnS6Wvatiqb1Uu1p2FEtxtMCCWwXdxrXNMtb2e4zjhHv6Nkdne4MaNozSMAE9vNWKJ4",
  "key5": "Yy4vLm6KWCjh6kuWawVu5UWLuZXQHEXg3fHYgJEVucmEymbTuWLA682jbPcEyCrMaC9pV2dqHqHYn5Cfwvrgx89",
  "key6": "5ur4DJGKWMPTZXZZyRisvT3D59Un5Cu3spTjarNyvojhkADPnJueBk6qpa9j7LMkThtPWZhJmf9vyCojbR4epzFg",
  "key7": "3abDNzWPQDvDnaCWjEGgw6jA9eNty7AanYfdwZ18ASjGnNEuW2K3Ho2VqRj59uzJ2drRr8ao1p7dHMXdCEFokyUL",
  "key8": "54Amuc5ChSLziE6P5Q2bFs252cthD4ZhabpmTy2qEufgZGF1XkyLKhUUXfqJTKJLEYaySQ4jUtcaqv4iLUkyeLYR",
  "key9": "5xnRY7NEcqteZvfsMb6f82kKajAzgKozPobrD728B2V1uwtdvCWLWhnNAXYWa7NFD5GjMwQaNGBZnBvZJkDS2CKJ",
  "key10": "4WYKn9FG1KSGRDJEKrDhLuoaCpdWr4rMBrxwrkcmCSTTuygcAkrAhiNnUiVxuQRhv1v3SjM459ZXCAEJHVsZsWqk",
  "key11": "45aXujYqtZCxK3pirm2EfgZSjL4gHY6VhvxG74RaJ5vZTwdwgfQATtvTg2iGxX1pHde5fH3Q5tH46AMhqCyjg6tp",
  "key12": "5MTnALjmman3Px6GDjx6J8jgyaeChBWEbsDNC12VkxeMuNASDrxBxLuRvoMbryeoCAMhhDKKFMmELwK3BdsvuqAV",
  "key13": "4sMDAe3goYvFBGPuVzz4HX7eZaNKJrStt4mQp36hFihbD4N9aXmvBUdFvzLH1FcvDmU45Zbnp53WLTNYEwDfroyt",
  "key14": "2m1D3aAaYv2fnyqwED8nCrW9boCSTMjm3JBNTkAZ9hvJiXS4DXLGVXYqXfCjwwXikJyJNMbf1bcV32DKXSpQC6jr",
  "key15": "4pff7q2n7VQLsAN8E5h8TahoNnizEUVMSs1XaEvWL4NoZ4494SXkT4oVQ4ZEhNPVe1mBJhysKCyKkpSicF1p9sQk",
  "key16": "5HeXPRjzRgoGPjBn4dBFE2fW4Q8ZY7XaFw7KbEgkTXE2dKxuioEbfqaH8gp2TenECnnM7jP1VA6T8bhyaSrUFEih",
  "key17": "2sYdQP2B56QPcubXtTdyyJ7xK18P6WBKab1YvnSNBVucg7qQrej1VY6ysxfyHk2M11i6jcjspbqihir8RiqHaPnj",
  "key18": "2A38HLx5JWKMAYUcvCzDTZJZ8omULZF9DCYKEKct2ry6s5jx8gW8L1ogph4DDDEmiaDvC79dcq4QDVuF6Liixqr5",
  "key19": "3hkzzdhCVpWxKxHDYQKvoJnGLWavFAtL29AxkRx8WMPo646Y6jMguPcHPrXH3yXMiu1orDyL7zUhyeRxfhYF4tmu",
  "key20": "2SKqoQr6c4HmbMHSPD3mSSxrdjx9owEyhSMd4QALq45unh65tyASA183rcX7VQwY6UWinXzm9yFHFLrWckZ1Sr7J",
  "key21": "5GXFAp5PUuhfoTKFgrCPizdjJNAPHfq87zFRHRkWhYdxwzqHXA6oSABnHfEFgXj4QtNSvM1C8r4ETnsMwqb1Tira",
  "key22": "4fXDgasA8UWEpwuqvpdSeM2qKN4vmwXSSnBt8i6xaGvkxUjuAiS3RLSHJHAs7MgEuDc2d7DCA8asAHRs1Kjb32Dz",
  "key23": "3yDQvBjX12mLP2VncN5ctqqcAB9QQV7sv3oLkusoNeWG2MX16R1hujhdQDDGdFFxcU3pdS2AdTHePSX9vEVvF57x",
  "key24": "3GVHQLYVYL33FBT7gzYZ8GQoNyHuKWrZASocRyoLQa2hJZRvG7Wn34adU7bQJE5DUGV8EhTFiNXjeX5p7aTy4vLG",
  "key25": "ZHLmwoURwBWvNrrbAsPD4iuBe6Zzo3nmzv99sPFWki5hodPJnbig59zAAm6cP5uT4LmuD1NUp2opcnPxmJtb3mv",
  "key26": "3M8FhwhdKRafMVNwjMFXthXXtQPiGTytp4xqJvuqZZZo44QH45pE5iaNR2ncL6F6567pCJeLWQVayigcX2QrLJv9",
  "key27": "2LiwY4wpqpPo92gPQ5tLF4TnWoj7hwA1qnmMRpm1mzehfzDyWqVLMqd6MrddiZcsPtRKEF6xT3zfdWmf6F64kT6e",
  "key28": "5LaU9HnSZC7upvhbajcd5yTvs6eTwfirzAWgkiv68AzVqh7sKduv3Xu7rcssFE8L9wsknRQCgT5pyBQhmkt4Jbgt",
  "key29": "57nSoQSdy6kGTZgNFoJ1csBLi1L9dX4nRcs473Ze8ToX6Hqy3PCgzeANCqEevRXhQMPHZ8WC1APJdcbSBN4bHYCm",
  "key30": "24CsSuY5VMJaM4yvd4rsmWXuiPpYzRCBC8x7v4c464MgLa3zjqZ9XPCwHg2XCvvRKqLuEYJKnjKCqGrBATcz1nDn",
  "key31": "49AiChDyi2cNeeGb8mYry21oze3vQTPpGBuVZTup51ePuVW6wT1og8rV3Q1vr3x3FnLBGkBJ2QjurjJDDAKcpjoT",
  "key32": "3UewH4zNFzk3k4MwR4zQ5TPNTQc69AwbARWrDq5bdV61Heh1646awmAR8RVYdATTsNzpvEGU5tCWbzR4DQFywiWi",
  "key33": "AebXdT3Sm3S3hAoEMXDfEru2QUonDWm9bAMvZw5pKxNABWjYTaVsTp7K1Uknzw3ya99oVqwqTEb8DCqyM3FkfMy",
  "key34": "3Z1tXoR1oxcTZS2Gmo57Ks26ocnEdTrPpVoZbfa2RSTT1kBsMYNrmwovnqr6yqu185fbY1sdKKn6GZ9ScsBWGBcr",
  "key35": "5dykkAJmwGMDuLUTN4JtFRqr45mdcUHscybuQN2ksSui4fhBThKQeLTnvwYTGRvj9HaPyyVWpqhy4u37bKknddra",
  "key36": "21zN6QSFW58EHk5HX1ixgTQ1U8tDj53SniRt5TCpx8JNUALVFmpKpwAwFuGrpd6t8u7Rwa7GkfkC2zQbJ3A8rpf3",
  "key37": "5K5SmKJURMB1GEjnyxoeBJUaFmhiWLGCCYnjFbhh9bAvndEmwxnqPkaXRcBpUGEzjb829ZCGkhFgWXjf5s2PiYz7",
  "key38": "2jjhc84YQWsaLB6vLGzSAc4V2Km7UCE7PKJ2dCfnf5ffeaiupLratbCQND7YhG7ib2i3Z6AKWnqkDBLSZsAxYjqy",
  "key39": "4umjUA7vpEPGNQjyLnvbZmHcB1TMdfiCjMBF1DUctEnpyQJBXQXBAqzpDDH9hbpJsgFjzBhgrcnfNAohSYvo887c",
  "key40": "4rs59PRFsdFKQCzbcZ788g1jtK7uNBAmBabZkdoSRsQJQSmeCCtqgfA1YSPLP1aKXA9kBvtBm4uAshcQDktXmB8M",
  "key41": "42DS7vqMu922YjYrJuVyDyrLDZWwmJkVGYKARubgWLw5awmHfuoaFyVXAvq72YacYcwZ4fkXreXXL24bsxEpJbj7",
  "key42": "3tHmunsAm3VhrdjbEZa26haJc4FieDHq7zjqRnQxwLXjp9wZoh6b7F8uR5xpATFYADCnSBjo5y13wK1zb6vLJDKo"
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
