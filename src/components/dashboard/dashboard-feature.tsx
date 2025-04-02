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
    "2iZoEtf99TE7x6tN1iek75E8sfvH9R1FFGkQPRz1TKFoZeyStDuxwPyJP5AtBDsPjKUBnec9pPgGsNP7N7eLDPas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tH5qkxxJLsTWSWxaupAFWHsnGf8TiTeuTNJy2GEFfwj35hPCDtEfeUksSM72xZvRtAStN7MhM8BALA6x5Urmv3Q",
  "key1": "2QEFP9mijEKtw1CHKoqd95SiPTNFBYo1QPwXsLVggZGKGbnjDM2rzyb2Kfa5s3oaNHjnpUngNU91W87kryMp3vn2",
  "key2": "5Tgr7uiSbg3rgLufDjjj2eg8miuvHx4YurWzW3vfkZzYM1HzjNAaNgmxzM1KuqBM943eP42TKpfH3kaA1Ypbk5TM",
  "key3": "4qjffNUHUuwCsoJMnwKWVe2SSUQptKJ5Jz5rNTS47UXeNUwQ4L4PvvQh57XPrqLJF291sn5n14ZTGLTdUtQp2Cz6",
  "key4": "3gDLBeWEsuNc4DA7WXZogiek7DfcqeCYvkk32gw1Vofbfxgrh7q5seggVoH9oBZ4JurUZ89j3ZGhXDBpw8Q8bzU4",
  "key5": "4jQc6JzGhHxQiq3Ht5dmUT7CjSae8gsNSiPkEkWkD2ksj56AVwSrbwqLPatSRP4gb4P1Pb3jpFeSyvGptd6Hm9pH",
  "key6": "3p4xEzqmZpeh6f9Y5aYsVtzq9Qg84LPF31FGSGKb7NCt8w1K7emcspJbGsBNrSrBpuFdUhWyeojYYSRsD4pZAWQV",
  "key7": "e3JDdvDWQ69qoNPdjgDC9iD1WVN2Lbm6NxCVAZsh83nZt8pU6oucj4fU4Awy2FrWuZjYyJKUuTv7b5C4SRwDNq7",
  "key8": "3EeNs1eai2zu4eDFWTcdp4oYXFsj9A2Yx4iH6hDz1wHXGDs9ytJPDoY6wppw7jUvS3ve1sM4XXRkfWyt7KAXNE1A",
  "key9": "5hmSZqrfttcWXucj5qDJ4AXRMQyPQF3bF52KfEk1xhoKThRQageMnaA2iAMtDhTYwqRzhFxk7XYFD7ZFSwCfcfoG",
  "key10": "5jPLyMqaCDkhVRxGz2NWLptAwevzp9FZQiGfAHqMwrxTdCQpJhfLXETd6U4rqAbSKjrRCkKhuzcxMMLqtctmyaiP",
  "key11": "3iCrye8xxf6z46ytTzEdhVVvrq2xSRX9U7zKVhHT18J5BQKRKeSj23DgMsHE25v1f64oLjeonwfCqnzFVWUbdpxe",
  "key12": "37MwHQ4aG2sg6fAmAoobVnMqsFFuMJxwGkdjCnomLNNaqZFi1Ak8mEbAGWSXqBQhJsm4Znkbj9SCRPkRLSEFMQ5Z",
  "key13": "TQ37C4JthNGHttSab11twGRk18DLq5fJaVz6k8rjtjkQNfThyX8yR3oJCtCEvW3JugWLWv6bxqZER4aAgZDDMwi",
  "key14": "4JCVxGrswHTrCjzvzA2cSEN1QbAWJN817LLMPMQPeY3tHjqkAhYNY7jacCm1a6fvVErWrgdScVtfDZi7D9LSsbiQ",
  "key15": "2qKSJx8EEhdtioogpwrLKfboJpDc6j5ue5KGGW9KsZ42z66aEuYWmpNsesi4X78i8gkzMHn2Sja4sZ8i5wyPNVpY",
  "key16": "2uCWWaKA8ok8r8Ca76Ac5h4bnz7d66bYkif9fXXFaVCj3FYZKdDxzu4BKuD8EGo5NKVhSkBKzZnhc9TS5iSGUgn9",
  "key17": "42243LHtUbX3BuHzrx95QVbbdA9wZjxqojG1BE4SEdbBoPigsJqvCiKMXMYYoTywWuKn1bA5KuorLKZGycdYZYBi",
  "key18": "3G16c9Zucvutiieo5sFGhoZDMb4Ktufti8MXjFKBjWLPAPsffK7zTsYN3388g4bDJLHGArTbkx3dHsVs5KC9vKAM",
  "key19": "5rbSV9N2wmu5pSpxqTRfkYhcRfK3feiwa19PdwaCNEWZkupNZL7hUgeMXBo8YhA8WfMZ9oNtpNJ9vKqwqY8HWsjv",
  "key20": "2mLGB2jWSPGAjLJBqevSgU38Sh7xi9td5W77WuKbQRQCQmj7E9PHNtsAqifwcHgLjQfQrr5TNCNacWVGXZi9mDH9",
  "key21": "4QbDwdxqf13AJKEiRU199YGzPJiuxpMih1sh7Q4z6BJLyZe4UYBZhKqb5QCKR9sxF5A53iyFwYyUBJUJCMmUMCGx",
  "key22": "3acHH4XKJ7gYv3K32QjM6RbCwSPohqkEjB5K6cTw9K3Ru6xQFg3E9Gy2u3nXpoGKfnWwR7FU1Fqbsyy8Xc2X1axe",
  "key23": "4qHGAVWY5UbgVCNvC5vLJu6fwb4fJk9hWHdqnHyC5Y9Pyj1vMCfzFvEjdnBWVJd6589dvXbakGiyRysu3wBPycYh",
  "key24": "3nPSmXG1ZDGf1RJqSmvRnHqaUBRJgCqoDVawKKtfb5h56v7nTAP6pXkQVwGkQwLFNz5Fhh4DoPj7ujAsDWmUrf5b",
  "key25": "3p6pKQYev8iJ4GyYkhZzKXwR8qLWZy3Q9QmsnM6P3rkWyb4EehmVMtSFJuSR5Z9UNc6BhcrKQ7Kq1sNMPPHviPgJ",
  "key26": "61J4RnkW9Kfat5TSvmqVVyZMw5A95sGfDrnLhzgWKJw35g2PXcjkjnLzadZDXD8a1a2KTmiJ6tYompoQSomKeJ6f"
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
