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
    "32WbFdb65Up3yhTW1riJnBqZtZYt4GmYd4UNw2wTyhMGk2iEMyGTySyZJTNKz79f1QW3KxNb9xmoTiBGxB1Uq4S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N4Mndq6Lkai1evonA4xPcDTjivmyzz8k7B7TcrWX6BiCk7RNxuPQcuFunaPGMzC1CYJ3cbqHfTWFTQTHFvFWCzc",
  "key1": "2fSyE8MgEVFuR1KW4PYFmuP3QwmDLR64ZpnJTGpqpTQDNMdRj636fPNA7wKoeXkHgGtHaxmy7GFz72m3N2VNsjas",
  "key2": "5DLQATHVKYVq9u9zG9DFpT6FGEBFAbybLMzp2tMineLoaE4A64mBGVZn4HCX524cQDgJp25FXSGvLAcxfaDuYTNZ",
  "key3": "3UGx5Q7JVZvApbYYTxSuqn85EvJEFjdCtTTnT5UwS6r9UPfZz1F8r9iUsNNGcbi57cVhiRn92Qrm9yXeq9tnqeeT",
  "key4": "95e8PSHs6tTPKZhCM6zphFJ1VXFMqtKFiH1N6mj9HefSNK6rAZbAxbk9MBxoAavfGqPqdEAiugeUAZNVzqsyyop",
  "key5": "48uettgPY3dALsjk6QbfAeSyAvBG29qf8Uit1Lh1K3UDZGkw8tC4XxfcUFVh8keqvLHLwkgeUBSmp7xitF9aUehZ",
  "key6": "4BmrY8hsEkNdeyaEecwPJ7yPjJ1UQwkuE4aih14KDFJqXmJNSKanEvmvYQAhAjba5DhkaLj29xJ32CFN1k7T4E2S",
  "key7": "37Gt29L7RgwWEFPmA2LAE7JrrejX1qTfB3DepsMYL85fPqALt7h7kzv1J5CABsSxbuhxtkHKbzibLBsSGtFQZY6D",
  "key8": "2iLTsvgDLpTx8Th9f2zoYgfG5zfVohsRNmDoGxm9AvAnSz5uowWTrdKRgS85DVpBZhYGxydjXudYrG6G92Pk7dVQ",
  "key9": "5ZCRBs9ceTiqbHY4ywswZshqozEfQC17crT4WwUeZHLCTkmguQB4E9ffg34ZFQDBiqLk5oUrekdGY6nAPwHE17kL",
  "key10": "2aneKEi1Spd6MaCZGtJM5psEAY7NQxm6ku6a5kiSRk6tPtZ2RAn7XkZs1JEyTWChE8bhJ8L9UENmjmL1evPFNr4W",
  "key11": "2ZoxoUzkanryMLoc9X66UYws667iWvaiRbD9N4cVTaSjUsbVK3amBGAWeX95wqxFrydmB8JDfsMfyLduuEpy9hEr",
  "key12": "3RKtLYQEMxaexKvPm7LaqJFrJ9CbsRG84baNbpQZW2YoAvBA498ay95CDYfKBS86LzMx6WdpnGpSPJurfVzkHVF6",
  "key13": "5N7wQXerF36UGyf6ZfdYnEnMS3v8z8q29vvHmHhxnGWhJfurkrFmspHEU5SRvFLfsmWSAoaaAzLVCvfs92AdiwDD",
  "key14": "wZA9HdZg8fYuX85U4TDtnNTHbXZGTYriekF3Afj3w1R6SbGD13ckTFLKKWRJerPjuJWk4NV8emWNswkPL69rNcH",
  "key15": "3mqqyNmQmBoYdRbzAuDMQmmvY9EHM67PPE4qvvRjesTWejrRxcFAvESviqNqqN2WnhkPUTdjbcC34d2A5YA2vw7y",
  "key16": "4hERQn3e1aZbn9oCp1Kt3s4HXQu7yPeRoAJfSQNFxz5oDtbTNCVKQ6raTqk5dCE9XJYc3N7mBkzXjNHiMwhH1JQ3",
  "key17": "vaCFbD27PZu5fFW6PL24PeVj9buVMexLCfQJnAFSmEWfeBa1EJy8ojFKcaam4484rgdBV6mSaFLpaKDK5Xic4d1",
  "key18": "3VQPRqXcNvUJz1dThAVkb7XYCHpTCyofr27YP5UPVosHC7SepmeSimuBzR3VFTByNFse9ZbyqmnwREYoPKxwTRxz",
  "key19": "KqKGN2G1m1H7W2sphxBS6129vqrsxU8GkcNipn36FxZMecWoqk4XhW1tWZUuZJotojXWkbVA6Nog9T6d9DY2eVJ",
  "key20": "8h1f3xSPscnaVK86f2nR9xhawHW2oj3ErDzFJZUy1sjkqJAAFm9HHixz7vp8t2HVHvSuRp6btqyzZRYrPLzzUzL",
  "key21": "kX2n9b7iuuN6zjZFgpDJTrKoGWFt8dfqFzm5SyXiP9ruiBFX6ftZQAYPehvNjZeQa8EMbWkB1gMUu4AiDdaqSD8",
  "key22": "398JMf5vRJUWLigo3dgkLGhqSUXf8mBcG9zZtJtcr7df1GhXCTCCLZvgJPuikoiaVQ6xfoqGHadsJNL3cg3g1KBN",
  "key23": "3pzLybkmtMH5wbA3Ez9CMkgrR7rtsngZM7gGNp9qDwUKMmKwdEB7DWi381h5chdd85Tycif7HLhQm8T3SS8gDych",
  "key24": "4LwDFkRU65jLWVjvkt2RX9nkchucWSqPZHBYgGFL3Bxb6mWGoRfs9cGEu87tXm9qvSSZsUMFAzJpkJa7XhYnAn5j",
  "key25": "2PQPSZe6qAQCWUhNBvcesx7Ks7VVCEPqphyrRa2RSVae3d9VCeL1phvaPQ4UXey6Rw9DyefkpD2QDTrb6LdycRdS",
  "key26": "hKTec6X3ykjwcEhA9P4v1mcj9xmWMumGxgc3oAbkDwhrFEaiB5qgRfgHRXV7jn7gk7J5LY57Hc3VW4r4KmFLqmK",
  "key27": "cfStG1DrPrtvNkTyR62PTvuLMuxv7aubB1j8J1Tk32bnqR3nbjxs727JZLgm9HQQfPhX8Wn6C5hayB2czuM8DpP",
  "key28": "3qyAPDK8LXKoDW5JQdTPfd7Esbu789S6xmEu8vygTmUWNxhBUoA2gZa2bARaLp1TdUXU3k6rKSYGU6s5JPeZxCYd",
  "key29": "v2VBWKeqeRnh6npHcuE6uaFnnHDqBwvfb66vXEUQgiN5xzfDpD4vH99L35xvDStFDX4iZgS3kUEbrYELAxeotzm",
  "key30": "3jMzH1d1uuui1ufhXvikCaFmt9Zu3LkXGKrtWyTPK2aG13scCGuSWxfbPP4pbENE6fUwon7khNBPKHiwxmcSaYvy",
  "key31": "3PbwfjLopZnpVwYgMeAMLxhzzZScrCVzKZSPBGgi4SKFXPx4rYSvZscdxAYacMN2uxCax1Tzporhyb1RiUUBP5eY",
  "key32": "3iQFebaBQu91UiwM5CEqmNgG6qHvF11THw8BAfPB6XGYffgf5Swz4XrAcw7A2PU8C2VkZzjuDKdNYPuVPiCjB9kh",
  "key33": "31XikhcoqgiM36Tw2dGSyqH1vhxo9ihx8EikGQ9Yie2RLRhKKbiFryht668wz6BRF7QTK8mgYLW5RVQiiWMcHX3Z",
  "key34": "4RsuTnTnTUAntxamQth4HTNzKteay27fmyosa7VwwhNvJwn35AyTqrrT2cr3BLer62EhZ1GVvjtTh8Rhky3CZPHw",
  "key35": "PMyQ1fG5fY5dKx9vR845hMBBkPsuCtCVwshz8mUvHo8FbUC9ySNhGeKw2SYpDBSogyRj9VHEMVTSd5R2FdidSxd",
  "key36": "5XjHQrTfQT3SfXymPWbMwMQNNBxLiHjtdT8itGV26rvExiiZJs9cNngdAzZKTumFg8CwrD5oU5rxhBk62Z6virsF",
  "key37": "3KAC6UAgvW3ipusZesVc4EwdTrCPVX9x1nKBEcjM6Zhe9HnfzN8YQ89tEJTzBfxEi9E6WGeathyHMp5dovLaRUav",
  "key38": "5cwrdSsoJUQjsx9TwLEin9N3w26bMeDxh4v3uokHcde8LhMPBrtxyY83a4ziq4KbUzUMk7xVHuJbCAMCBmd7pTXx",
  "key39": "4nrKhQeog61B9H6TXzPRNQGeR5NuEH7TrZE1T9znZQ6fc3brM3GEab9yHh5V1BqwGvYWMeP6NNPDb7wr3DEAcSX8"
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
