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
    "2UYmKypebyqmtBQLgizAuS1zw13x4BicVkFYRoAaNyvH6CJXuetxu7x1zfV19zN63unU6wVTNqo8DPgCHy2AQnSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RbpSp5UaKkCbeJ3yqAnGs39KyuTNJ52gS8ndeswWAPbuFqURfvRdozedVL696GdGsXXm5z4qAg6cdeyJKrnz7pz",
  "key1": "4zZPbVRkahYwJGNP7ki9DAbSdEoovJugx1H7TUbW9GLV7A9AkTEU8bjqvFJDQk6xVckeK3zJkbqr5wSwfrKYSRw6",
  "key2": "3VCvjtFi1QvvYWmUV1jDWRb9bM71PmUmgtdy64pBx6BFt1H6JufJianrV8qKKYsXzJfYpNr2s1Vatp4PxLuqaZy2",
  "key3": "cNy7AzGtHZc2sRpvBCYrMkuaHuW3K4j9oNRnu5jpnMdp7o3uiMqjgQ1pHcsMZandpxeYU8tpdgwyb2DuQpA9Zk8",
  "key4": "ViHCtzSQZvBqY7KT4iP7xEoV5NAfgtz369FfAx9jqAVK6WjCTYHh18u8Eyna7yrD2meaGUk9LidAP3LBuThgc7U",
  "key5": "4WUqQdbh6EPEXwAw5xqy8yibQ12QjwECRoQgMxdXHxLjMa19Vg6Sxwx6VoW2DQYDwm1QMvm8tQj5DXZb8Bedpf9Q",
  "key6": "5jjUxUVQorf7KJgCNnaDhXT3BeGkm2PDcK7z7ZTnmd5DAN13YoWvmsVZMKRZ1RvZ1Ha72vW5tDw5m53Wfdc8Fsjv",
  "key7": "2rGBP9QJeoyrqYKECyfWNWXkJ52AriVk4WXrhZ7komyEDHgtv3RMaJXDR3VptjmSMS4b68wDvyqaUymguXATc9bU",
  "key8": "4TG7x7jGgs6iEwawHM8i2yKLJoi7Bv7h3aL64kCrp5vK29P7udffeibAbYTJvBHrc83MjhTUX9QQt3qcZ7C6VdDu",
  "key9": "3BsSAQkgtGQL8LZUki47fHQLNrMBk6mugUjPFmNrKoMLCRtSKqWvpyRYfoauwjMMAMejAhfT1zPD2cvZoBqFWMxg",
  "key10": "5Xmr1WzwbJ7JsRGYC5GkuKxzX4KrmQqL6EfGdbpHGhUyD2vsq1bexaT2dZU22LYtvhsaM9fe8dDXrVoGKHB9PZKh",
  "key11": "2zaRALPUVP9RJ9JA6rqkEaPNSFtUFz2RB3egshzuKG7JZKAMFns8dhgzh4QuqQLa1RpsYEAXGEi1PrcAEahNAdc2",
  "key12": "47YMxUr7CznYiVnNUB1V7dEshFpASUVXYuqs7o9k9gWLmMVhJUa1tqp6WbRiAVBmKC5JQDocMyTs78SahoXUJn9a",
  "key13": "7TD1UY9rrazEhhgEVNRiso2btpxMJW1DK54YW9HTpcgpQwkYqrsQLyhJC3Z73xaePPFL7HCmh9kVxFqAxTfGNoP",
  "key14": "126WdCTYmCgiXxAFgCUhtq49eAzRUBT9gaytzy9HR3PpEZPD21SCqCnvLf2JPZf59riRYzedLc7W9Fxdgx6VZy4k",
  "key15": "28Ma5ChdoVQCr7u7vRAaKJ3CyUDjtXrg69HmuYFnVdMqtpRjnnFheHtUHeWBGhurknZC3g4K6oCAJE6sZwmi1Z9L",
  "key16": "5SqLJDJnGFz6uE7oZr8PZB3d3siADwtjLSz7KZsfHYvTh3FpfkKhJhmFWdZMuBogACZCyJ2FA6ppnuJEC4GeNvNy",
  "key17": "38mruHzcngzag2xm2bsw8jfVgwxVA5THPNSk4C9uGQmoxJFFTMD5yhQDm7DGk8wjxT1PFM8ZNudsyPnjpXugXaTX",
  "key18": "5eURRpTNpnQWWgsxRH3dL5PxLzAhzv5YPxBqoWVtGnGxxkiVyzKxzWHucUra4t3bpqYJAAo4SBq3PN3mRkwkM3Mx",
  "key19": "2CG6cWdRwffYuCZRga4KnKn5cJAbWejjLANQkL9SNewG4AjhYRbG71LUj7X3Z9HpRJGgRmyDT9HaP7LCKjFHpp8g",
  "key20": "5FixEqyStjk4tFTmCCiMuqJNSPWEobpG7h4sx7iurLwNQDkyMt6wLDwytSgpX8wV6e62x7VaB8LpP6btyHfWKfqH",
  "key21": "2kcqJPbQCTiGzitE1zG3HkBQWa2FUR3DzSKcKdQo2ix65gWbDdneFWL7B3bBYF15EywEkeWxh211idMKwh55W3Bz",
  "key22": "nqhArGpEQHfMaxMxRQRtxfGz1Z1VnYh94isxSZVMTBBzQYFT6sjwNhLpC2DvJFeFwCLJT58WBEKQwhv8GTewzve",
  "key23": "3HY2uuvUGTLtrE9jb88baJ8knwAaEEwRvboHxEWqBMNcvBRFmpiM4HR1UGDwty5NwKLUWvuj5XEuhEDCDRkEhy44",
  "key24": "3z1wA6jVooMAB1zx8gQkJ4MNdzyG6ipVPLqAxpUtXKUEeQRVv9mvy9VtVD4WMJncHfQVwxaF7V93Lc6k9LGoRf74"
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
