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
    "3YeH4NqbhuP82vzFiBVu2ckdLCegXs68VborNvwckpHdpaswgeGBAHWfn2e7Lyb6tPNfkzbju32GYkWjaqRo5E4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsPk5DUDCnKGas3j2akKWXkfUdzhk7UuarBSx9BAGMmJqFPwCGQ9RPsF2sMvnvnGgtmDofKK5zNLmcLG6FpZxHS",
  "key1": "47JEdm5V15C7z8XL8c4U5sAo2KU42yKaYKy9eFMLmmHTZFirt6EJcGDj6bwmNTJveSJHP7CbaDf2pjdZp8RitLtC",
  "key2": "NpSFcFe26RVzNaisZJUJRZDGK7HqAPwRR1BaSiZwaK8oQ6VB3RsPNjSuJFTjtp2HCCz1N2XUv2gNdyhnNknCfbZ",
  "key3": "5pgPFfcKPa6yGWrYtBSm1KcRokJie3F5p2swjFf9BRR6c8iqxioBG7mGVWyf7UXFzQnH1T96a4hQN1ZpdRvdYqcQ",
  "key4": "k84PWf4U13WyhrWwF8zQE1myohWozL4cayXcNMKyzQnYGbeyup7FG7vSFyBSSKFuk7bpkuHdBBtRPLqSPhQGVfQ",
  "key5": "5F3BYSW9y3qAnUPf1isCKB8xTELmBDQGVGDHZY38kKP8HXZEN9kmLn6YHT3KRJA7vkTAFniQU7eknkw8Xaw2b5Ry",
  "key6": "4wMuyjFsULnLuNkrTiYmWDRqapevqADJBTW9GV5XzW74pkSMAaxtxRXq65mZBA9ea7fVkiiMtmAtf24D46dMbpy7",
  "key7": "5ak9FBrJk4sSDYDLJZiqRgSt1LzzdmZbY2DUgTLXqmhfH2gbttrM9yrHwNoeiv32sK1qN6hWWD2hMiim7r3XxVgW",
  "key8": "RjzqKgujwLCF6xYCkJy8UBjdKzxv618Bp1nRrLMRiLDWfQKf8Ydtevaq1CpxN4QSjxQgkqJ3g6Ej1QS9rPRa9ot",
  "key9": "5Xge5koJSP454GTBd6Q1TmBkV44F4xUE7bm7tHNQJUE5ZrNDe9GiFuYV8o8D4x1MZXacE9Z13CqpGfCH5GJhsSiq",
  "key10": "5TvVS17iJZmihWFtFytdShyM8LKxBnNY8fpR1HUKq2xgYBZJUgAyvXWjGL1tUijVsEyj8KoA8YdoqcwuupvLUz8v",
  "key11": "ijeRauJHxg3JSEh5yQU9HuGkyBqz1hXzXGwKTa6cA37MtAFZruHeRFGuaKiZXRqGZur3hEug1fW8QnEV2NijC15",
  "key12": "3hJUCi3C4Zx3b3LwQRasK1fJ6yB83iybzjM6u7PfCmXpWt9iAgC46YjNJCvuK19dEZTHWF4jzUFWvLfQKa2G7cr2",
  "key13": "27GmtMXM4oxP61qRmgRncdBK5yDy2Mb1jGiUmEi2cyFCfucvoxofnuMkTLbuk3mYty9UztQUwBAjMKmqbihBccwB",
  "key14": "4mwbSt5jNdVzteJHoZgaRwz3mpUHgHwvXtkDWnnRB6hNTzHct4g1HXgMiZq42qsmjj2wHTWMtjsByWFud6b7pNY3",
  "key15": "94L5EcxFxAxpvzHaVqdhw4wnGrKdGPLhJqLzHMe1GLFLSeAADRR2TB6e4DVD3PzK5HgbsDaMrx4eRe38X291kJf",
  "key16": "5EWuCmi3Y11c23DBDsbFUnFR9JPxMTRpVJmJaEKN44aWt53PJ6f1eEQAaQhfcJybfyHQ6XzzPuRX8u7KQkTHgh4p",
  "key17": "2xgaMqhJk4hqcGV6PP3F8eToS2hhCw6C5gd7vxndUfyMNDeZCBGJyQqrWVXw2xezbQQuh1K9ngJHFpyJijXeRQUq",
  "key18": "5LzQg6mpFatCN1tv89Y7GPZDdp945EiKNyrsSTDYYAxZ6cLUbch9AZnphJetRkyd7CJdeX3pgKM4cdgjqRuDjBJy",
  "key19": "4qLkEjF3HL1ftw3aJbrDZerYvuV7nWoQxA9qgT6Jxnoi8nGvxvh6pK9fDQCCmCAz7qb5FEsC8itgq4oaqMvbcVCX",
  "key20": "51A7hTPy9Agx7sjCevmmMezTFUF6zo3TTmRsaYu1HovpRUszx8vgS7wQwXzvdpsKYrQQBXUw6HvFmHDSh678pV3s",
  "key21": "33MsytW1RtFeRbJBfkMxRqGQm2HjPP2KJer2ysuivtF1ZL96fquK4h4HeYn4d4tErGYKi6eCKeC6KiqgHdqZYnsC",
  "key22": "44qPL1eGSF31p5JZQ7nSR5pdmy5kjtEW31fxiaV831nd3fAUWA3DGmzNkD7bLbcch6NGd5DK87ZGajfKQ4NkjuLt",
  "key23": "4KKoAqNwXALBNAUjw13ua2LXYk2bdHfuCejBZGogRJeykWsNbZuJACsCLxqzSVZNhGN2X9aV7ZYtoGDQ9byEEArM",
  "key24": "446QGVzXpyxAm4dq3Q6S3wmgvJEFrFCZGion3XEwhTdvF8krPgAzPXWusf3XqDsoSWF75gcKM7AzEbDdUTqFNXA8",
  "key25": "SXgtbAgkLxWKYEADaRFMR2TdS6XXdYPhPwssxAPN12C5sDWkpdoNoBHEK8yyscCZSAXWGD9yEy7xmRSumB9ixwH",
  "key26": "4eYywb3Sah9ZRELZ2gzGoW8PpCfYRDJHPHiyupKbcmLz3ddPLFiVtfYCNtuzomwLUyutg4R3Uf7NbXS8DWKYM6Fg"
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
