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
    "ztG7B3hzEFkWuJe2VoaBAqEUmyzU8MbD5xT3F4RwN7ENKcaSdNGvEwyVURB86aVSnVPdkJNyifg3X45SdyQNjMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjhHueCFYxS95BrSQx8Hw1W8TXU6A7wVkxFBKtj9fSG5MrTijp53EFKSgEoujyhw1qckkRCmQZHx6UPqQGGsgej",
  "key1": "4kJMgh2eHPyaKwj2P6W9i6ziaEqL3V9dE9TShhKZzrK7jTEkcKf8uAdjAWW2nsXwjw7a8K1baPgAdV56zVKgsXNM",
  "key2": "5ZWezxj1zCbG6VU9KogEEewLxzKX1MUAKiZZf1ePG5LLYYWbvSUcJ8RxtYcSmPV7SpgUDKd5o97Fp5MatJM6VvDB",
  "key3": "4rty6mkG6TWuDS1ZizbYGeqLaoQFWEAT1dGQGxkTn5VLa2RdNPfu7DPjegRqFK97nUnGr5oQUJxKZ3onzfPZc2NU",
  "key4": "2neQVH78Z9NEvQYHxWi43p8rcbAj2ZLMem2aMbnCXxX2n6tdgvbeWbMSs3UUCtpXg7VfTgBxxeQUytWRxUxN3n2m",
  "key5": "5HwkVXELs7NrYzWrEHoXGVzuSCnjqcux9nLS59rQDSCLCj8BB9z7tmcYnwDgZGUefxMLtX9zMLa8QSH5kGhnzqwc",
  "key6": "34Wa3kHyreLKcV9b2o5rsaovVyBBqTnZ4gkUb7RSxEfVGTahgbn3HB72ipc4AY1x7N9vcLCdeZwNMCV4bfQD5DUH",
  "key7": "45HudrgRQVE8FmtfjoEqFB9jeQBRBAVj3Q4N2zh9jNSmJpVZSYLGsh1AzwCupSK25hrP5GoqxymJhZabsjxAr43Q",
  "key8": "35MNuDdcG9ybGoeVahVGHWgTeFpcgA6KxpRnYau5WbNo2MqaMeykrvjqEoLq5EiBXQjC4cbnDUHomoQ12k9Lf9uk",
  "key9": "4Fqo4FDPVzpb5uRuipcJwiN48DqZK4BtzBp1ELvZNtvcrJj5aA2ycYZRSsxZyushKFdqSiYwdd1TVrHBQahUmkr",
  "key10": "2Q1Bk7oHXH4zdj4eDMNCpvADzoXchbibh4KrvigKZAqvuaLGt7bUkKsPX1fpH8ZWdXwcWNWoVBuSHrvFNntocm51",
  "key11": "GUSmE4W3CT84vGTCFGrcQLDPJ7EYTkxrBpvL9qJLyQ3gNk1YzST3kL5cpnx7SstbtAjW4ZZXayn2FUKUYvQHfKG",
  "key12": "5WbKj3zUBvBabdjEG7NbWpw76AvZKtXyz43yh7FHTGNmynk6kJ1CjSnMCraLZ2iacVzdMBywnek1dp5wWSQDfr7p",
  "key13": "7wg5esoGNauYQRK9PiLYDYZp8cqvgMR1r6wP8XmqajxHfWXsFFZ59fjL539unYRSA2roGZ77XEp7Qy556Fk3hTd",
  "key14": "46Xs2csnSnTF4ax6CMcBAXspRADLD7CoqLvWgxrqooYrus6bktNszXDG2qB3Nx3r494rHbt2hWfuKknnorNL2umP",
  "key15": "4UgMbo8pDm1Uttf7y5KSTbfJQ7KEBLz8oqsKWrMTZVqhtu9KjYeYk2MSaeuCXHTLVz21oFu4YMVd9R3X2F36uXce",
  "key16": "2sYRhCu6XWQeVUpRcqndVLscEjCEzDr8qrwCoDVvYg78rCNYd9te3NbKg575JY6unPkcCLWRRQ5MYttGBcn51QwC",
  "key17": "25GNx22v7a4rXFXntpWbtTCs9uSQrLtucXVqcTBUfHr6uCZx96DexVxAKB79pRFt6YTXdkrFHxmN7X7UiTNb9Hme",
  "key18": "48EnAcRPui59SqpDwVYxaUQnR86kki5fTnToDsWnC8wBYunsgnoRiAqkFwqAiZ2WLj4Udx7YhYTFaeF5U9xbkVef",
  "key19": "4sNb4racRtVcEssCaZbVAFVcv3zPULz4siMiYKaFGc64zzL6wZRG8vvACkGhDmjwZ5aULzcijkcjENLEb2E13KBZ",
  "key20": "2RDxvV8r4nnRhpw7g2KDszNqhKydQBfLoKKyHu8B6CwSM9XSdWJ2mpPouX88ChCHcHQW5Sd8uVn6wzacE6Uq5Abk",
  "key21": "5M8a4U3Lr2vFKwBGQruXUAXtXHtJbBbVmqHzcso2Q1UDAkFspqCVkyd3XFRakVPckYjZnZMdHTwm5VS4aCCQSPXT",
  "key22": "e6MhvSf5DtY6U3JJXc979VcTX5X62wuEhqyFgYkU29r7CdKkHLbVKe7vQB7og9EFruDg4oTgfeW5j5ivdHLraKa",
  "key23": "39joNjSRUe98afxvWcXZhdorcuHF9rQgS2o4hFkPo8TWJvkp3Hcp1Sof3HUJUaXfNkL7qak2MXGddSzx3btKmuL",
  "key24": "2v5wnikj4Ldwbm9v28xU6wtZc3i5uDZCxCFXycudNpJWHgfRob2cWFJ5Hg3G619oAXwWx6SDMrv9jFzKGG6DzvmV",
  "key25": "3Q5yMyvTvqNi52zYnJhmnYq2EPtrKotQyDKJLPAGDfCABAabZjWLDiQPSDermkp4eT456m7nLWxWqe9suw1EHqVw",
  "key26": "2t23ZSmoyA1HxhFTkfpv39sxC9JmcwWWvUWNSW1ecnyacQW3Zig6a8mEruqhNQztTW4Uejk9jBt1rRUz9J3thPbE",
  "key27": "5X8MjDu4mL5ZcxwLNYjwJS3VLNPojw1FZu6Ac3imh3o68xtTbUTodRc39uERnDBz1jHsZqJs4braQrTTjRhXYwHf",
  "key28": "4JoxfmGLEQBrZoH2nm1hMaRZFZwpGyrxcmwRwgQKUm827EJWimRua43xKKvtukVRAjnxzWeiY4y9f6oTpdAFR8g3"
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
