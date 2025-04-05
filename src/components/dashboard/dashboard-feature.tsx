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
    "2WfE513TCRk3cRaU7dfwosvTwL9PRUzuDbW2XYzCQNyktRErM8xQs5PNn37jhG7aLUFKAakxigxAsVvrrnqDiiKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVVhmJW5Kk1zYTxrhF6JKWexiTWjc7ruz7ipS4eiP2yWSyT3dZDzSptKLufFnGF2JWyCwfq6wTWBXo3BDwcD8j1",
  "key1": "5ZSYEyDTNqpxUQvQCsomvXykPnmDc2i58bFbowHX3aeeA7fUtHdqfYg8SwgSuv77DumHJfa5MMJeH8EKZaqfSdjG",
  "key2": "2DgREbsinHGEMRNfJ31dTULKuGk9Zqw9K2oSPuQb4v5DZvmjCrEHd741Z8MBBLRH721yKSbBA1d5yxu2WdMu1CdX",
  "key3": "2mB79JQwT5q4WwyQ2FfpgxeqhvMbh6Qut4y19fYaEfhR9UjjJzmSg4KaGXjMf78z2mZ1dHfqVHk7uwHpDj8QKbie",
  "key4": "63izZfuJqNwFP9ZvNVdEY14Bbzyxz7S9XYAureNz5bqjAefhMYYrvgTdgioZ7H4HC6kML4AYoQVhgYcq1aJDnbPv",
  "key5": "4peX1wMCVXJBYiA6fL4qS5SP1pt3KHSMnt2ro1WGGbjjgrSu4gYhC5CncGbit6ynEaSTDfizHr9KtSKv9Jb3w9za",
  "key6": "5kYH4ECVCJww5kaC9RAQmd7qzWijEDbmR5iWhq5mQsaGtcrybNcJt1p5XmnZVubQR3FSVTJoVGYpHjcy8TniBJiH",
  "key7": "4TUkkouBMoazMSQphi5nJ87mZyjkUz2mYrYKSLZ8y9DcRGGxLmArVi7EdxsFtst9A8KCioarH88qdHFS3ySoGynB",
  "key8": "NtXDHCQdwiPh2VkFGC3PL3aREQLAewLfBtL6EwJzFmJTzFMQs2UWzJeUrTFPAMMttiT5ESfBEFQw4Z1DWXHwLGU",
  "key9": "5GWQv4zheVcCJ6DVToYPfWrRS8kkoRzio7UqTw9r6TUypf8DpAQaCVkaqHpUKfHiSMkc1FxDLHENaTgYjVsVPDsz",
  "key10": "5rGdDvmX3Xip6SUgAkZdgHukyVZANYZLRFWCQHGjYAXTTAubSTw19EnknX8LiyBbKhYpmzPqytZQuxh656ybgdtY",
  "key11": "5eMLM26sqcMkggoaki9EJtNA2bB3d7yxv63DuFDeEYhFwuiwMWBCfVgFRHDsqrAxo2eU7Hs64brGjhYqxQj4SwHU",
  "key12": "5QvYDA3CGZqhsyX8J79mrv4WbtGQ6fR6KwC7brBatVwgJhSJqKkfNAsx5wNQ8dhDhNLFTGWH3zPLKAMXk8FKjD1N",
  "key13": "5viscXU8Runsi88imLfcLfa1MugGaHTZzBbQ7UggNDjyD5vymt7MmQu2YLipXP8dvYQ6VG2eDHochENV6TU1tfZb",
  "key14": "4C69qs35Tpq57ftcYagY4dC8PA3mcU4f6gGYfr7pTqwVvjUs9QdBDPeaJY4A82KDCs67MM6bxwS1J1w3amZdYcFD",
  "key15": "53UepetzQx5mgTMFNaQNfMLgWXryHmvHeSm5UyDwFbcgfGXF8b76FXRNw6zvHLXReroqjyafmESKnzkWAHWGGkgf",
  "key16": "3fAYp66arjuEXvAbLkDnxjANk999C8UZET9nG2c96oYRks9EFMoJxnkuZMSqzw6MSq5RrnhRXDixXicGs1japtiu",
  "key17": "3ag6hqsf3e9XSJbjr593AgupXXhuyRVU4n8fSfaMJaB6UCDyzzZndyDEkagHq5VcFMdzPeQq95Yg3xunMiNewfE8",
  "key18": "5cvBDKyrjFEo4gw6DUraSa2dzQXsk156DBznNDFPkTFHMiN2FTgKXzK34ChWq49CZTNBPXg8zCbkoYZL1w56AXn7",
  "key19": "2on2Nb6USq9FqMsqAHP69PcCGBZgDYXbaNa82bugqpAsnBXDVjcyETdzb162NjoWeTmhNm4PqmiCwEvYaxvkUfL6",
  "key20": "63zeyTXGsCjbLtkoLnvwJJ9UUXJ2Lkp2x9m1Sf8tY6k617ypY3XmWdepuJoe46jy3c8orQPTU1FKL74v68xqvVBp",
  "key21": "8bgeczG92EiFefQAP3xbXZ9WN73avKzKD9j3EtzPdk8gtouJER5m7cf3MCZManPzp8fEdSRUqsYLnSaBKCgHfR1",
  "key22": "4V6JhAqQUeYtA5jhZcCHcTEHKWxjvRVKuZMLHgJFa8eMy9kGdiTgGCBoWNW8d3ms2XGmtFNtSh8Yzn8ZGWSd1nP2",
  "key23": "W4FEfhcERvQfzKhNiK1VPPsswCoJv53u1n86EBwiKyE5Sn2U47A4iD63Z3v1FFviNV3SfesoL7Y8uNssiSWSDsX",
  "key24": "29apLyNtSyi3pXTGvryBJT3RXto4tHWA4TYjWwyvzXfevZEtesHQKH2XmjvvgK2q85MxZnNEVJZR4FFbQ68hb11D",
  "key25": "soE9GykTRZ4V61iQ97fTtsQmVYaWdU5K9x3MJWrhDe2PxyZVNnwsGBRTLYVjJuMDDmBJ5PjfsoKULpV9ndjPwxK",
  "key26": "4ozREngC65iey1pHF7a1FSEafngheBVHLHzcpVueYcdwG5VTqcCuuXvdpvHEB5nejDSBYVCjrATfJnpoGy4bzKzA",
  "key27": "5TUY3NvsPo3aFfxAZu1FDoYy8VZbQ8CJS1tu6fjEqVZXd4DV5NY8SwrD6L9Q8QikFPDHB3kn5avM7pdPCeZa9whd",
  "key28": "5DB8PnkUposYA2At4iCgBA2rsB1sQ16eJDUXeHzrrggiopuNY2gZBFQyAeveY3n5TRb2p6XBLSFzAYPTKbcXjtpj"
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
