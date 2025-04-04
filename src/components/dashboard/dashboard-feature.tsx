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
    "4vRJZN8oub5cLjunCDfwApQvqVvKUo3YMCPiLgie63ehVUpy48pL5k82D44baLi9fjTNJQuA39aPNbJcAosxaNUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rAPVYe7cbsV14FBkJ4G4q7Xcu4L4LPY1cPLTTquGzYXNBi6rjNHxx8V7geQEbgyrGatA9PTdt6Hka7kmPnwq7JC",
  "key1": "4RCKamiuRZrkVFsf5qecstyxc5EzafqPXZSUpP2jgm3TZaGQ6tWm23guJt6EcgNq6Jc5Ku7F7p2zBZg9C7NjTDfm",
  "key2": "5bHGggeB1bPXm8JQGd9QyFgaFWsjSbs3UpVxhYU3RnwJTaMqMHDWDAaet86tFyfBwhhCuTEB9t3D5QNMtEpeGF9o",
  "key3": "4Tm2NEZUZTYvGiZ8ho4qe2qdKuRLEmdBKNoC4WWHdi1hq3BwteV9Eo6smNQUZL3UNoonop3ZEx8BHtSodRYLh6U2",
  "key4": "52Ay7r2WBaw56hUMGf2spEW36HapFMgTbJ1jS9MxVrsvu6BnvxwK4nVMW6vtctwSBat1Wczaj7HeWxGXRZG54dwW",
  "key5": "4JBeGotQXW88zi6mBrUXkYQpRenbUEJpe5nDbpVW67eHFqXD1yKzSEmCXXNyQ8yYv8f2kfRuby2zAC376o8SK6YM",
  "key6": "4Nx9tV58qyfMu7SnrA1UwNdXDr85Fqo8M9yukUkS5pmSdw8vwaR2cQXfcWyaremyDFHThFdJF8ADvfCmaz4unuPG",
  "key7": "3oGVMJf8S97ywFVjHLm6G9EB2K4wrwENToPrXSWW3SNKNXkjd9QiLqhQ8z4dwQewpKxBywXbiRkNcU2uiKKpGPVG",
  "key8": "2pBe7CZ98iKagyzvKPagVS9r5GWywn57jBEh6DJ3o5qpSnXvGyW6ruBbaEFvU5dgfMvGBP2Y3c4Km1wznNfpRzZv",
  "key9": "4LS463VSB2yZ4PibAwnPnTNHwcG8xBHMXjmKYnBh6ZWgJzkDmVzvGroKRqMmZHyQHv8QVfHZpqz45KR9cXhKo66D",
  "key10": "4a8mTSeL2LWbqe5d1YJZp4P4N2UUQGMWgUQdRAikrWfuDiccNR92Fwq3p4miqdVLQ1wKXVkBdVQ7ABFDhF4GhZSk",
  "key11": "2w3N3mWt1QjRpuXqn9LLumyhGfvx7KThkgNiLnTKKk2dqBzRcM6Svdqn6GXtH8sS2Xbaf4aGfbPCguxteqMsxHHr",
  "key12": "4Wwh4iKXhQmox2un3Z9zTWaBXyPKQJTqN47exchPuSzjEpQEGMSFjaRXRcHLbEJarcy8o5A62MeNDt3SEJbZfxAa",
  "key13": "3Vp5avMuzgKQPBhHNH67LBpZXCTbhHeqVeY7DqtirsbnLvatSPPc71XDC9uZfnpvq6GiK2R9n5S9ozsupmfAfQjF",
  "key14": "oLhkVk87SPSKY38a6uZRT2GD7Zw1TCV4yvbZAeQNmaRGN1FNCFNHFb54RYPrpVoCx7e1ZN7SqJpQLT9EZ6ryQMB",
  "key15": "5FosJYLTJctSbMMpmPC8JBszvD97X5ay3H3bsBwGCZT2Sdto7PdhHMSPPjkU3Tpka96xzwojWsGECnRBQ7Bj1K5d",
  "key16": "5Rivo1zGBkgsy3YEX4xin7MkgU5YKUuLqbVjonp27qS9PncHkeF6xSnMKfJbk37hHF3R7vAPtTZF2CKwhXBtmjF5",
  "key17": "4uoarnC4BzTRZ9FVJtsjNSmDxrc9exWPrQrf9VnUUGGGVxfU9f5b6Xm56vu3k2MsFBX987yBEegBkQmiTPrC61w",
  "key18": "2qyz4qzUZjeYmwvp1jSaoFtaP27oUQRoSNzNHSwGvWa2wieaavz9JVy4CaBZKZkrWhjVpLvSRNF1wsMTD3NZ6hBA",
  "key19": "56jwHgBtvZwtnd8UgY8ifuV6bYwGaAszepRxQjFBiMGHrRkCgGZbAvedWQrJSUSgNyv5BpRxAYX8oviX5bUwfDhg",
  "key20": "3Fs1vKhpzQDWnbZQ1CGgfkvg65fzj8JXpKFhcgTzkhn9zF2qbHCGdUbejQT4ekRbkUS2jgLAv6t63DSBpMzvC9St",
  "key21": "5sqSoSLZ8Z36KcUiHi6yCPLK21xQG4Vcn4wxfNGh4WwFcMteUBKbATK4QkssgAWj69yDLSuF9qkisV74ssj1VDZq",
  "key22": "J5aXSakCr9a2iermedbjW9q9KQu3uW5C7KQqh1hyVuhajyk64NjQUDnLiaCoDhPbt8QEQxrM4yxPru8aqrEVn9f",
  "key23": "2rQNNR59uA36Jw7iWnjgUrk2YtdsXD7wM1weGajDHGdnCr3Vdxv5w6Fs1rXeHoCMtJsy5L9vkcxqZztcgkh399ku",
  "key24": "2bhQi26sVgZ27Zw2xHikjvRbSygaYxzfpppwLuxXhhoQajEcAXMS7dBMxmMzcFGKBu1cLpfXa1MCrdcpnGoQ3YaB",
  "key25": "5Fky7U1YRGWp6DPgPQZxctDHWQv4pk1iPiqAidE1GSbXfkNtBekHJuXTTozHDvsiivxbxSRjyinmm8xe7aAiG1jB",
  "key26": "48GeeyRq1ZaZf1KqBt5nWUp2YTGKUqBPjqFwmRXJRJprsujYhHMfKsrHz7AMC9bZjyoSGE58gxXgzRRwrccqgwRi",
  "key27": "2ktxNu9WV3pJN1aBLvZGKw9McKm9RWnpBafFtGHpULYHhXYgbSn2pRVHqsBEqFXp8gGPgfci2y8mbXVurZbqbD1R",
  "key28": "3mACJLFaMLbyXXMZJMhQoe6t7wad1pTAEw5yft7DyweFbDT2XgcgQbP6f9FHXKKYD6tUD8m4kne9BAfW2rwmyVyZ"
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
