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
    "3LgjSPC13qT1AFdPcDTXSkBdTgbFaLbY4znwAJso4gDMm8L64tkqA2XAjM8z2vy4oGbXbtXf3p5TTL1ikvwcNuzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9zhRwjHDfGMeFyZ7TkLP4qnZJRrUv7eoEDymnXSF6A77t9ggia8dyGR2osWw9Y4MV7gF1XVTNFFdebfaccp6BS",
  "key1": "3i6cSPpPVxHNXTiMX2hSgrqbnisBh9R2QvYtzjS72jgLqf5eBVys6UWFJszYwXBEUAE9TqY1VL9FWX5Gofxuh4nD",
  "key2": "3z2chqe3NgP4pGrckvXUpx4VimD3GHppanQcfJGLpa4EwyF6tSZqivBbTHn2nG3aixHcPWRd7gryYweSoaD28uBV",
  "key3": "3gikUQUmQW3JTJTxdPD3YsJvE2yLKiBc9pMLXgEn2SGrivt3qDykdvG29UaNH6crCeCJfA2EVqpxgRD4njGiWV3e",
  "key4": "64DKt4JwwwLjrmDRS2F5YzxeG39cFPAiNK1ahHGu48QFmkg7i1r9NGsbuHVPcgytam5Rz6unTm532g6rrpTJX2s4",
  "key5": "32SUZeoxagNtnmsJXqcZbnYfjw7FLS4r7bro6dYDvRoZMqZ41YkMoZAS1qAtCHi6eDjjMPksKyXjfX8T4fpH6srz",
  "key6": "5n48WSePaa3oEjZfCbEGPcKjGud5LjwDLVE5aA2FWLH3p1Gz791GniDq2NvB962e1t1CjiSWgPEHJot12mZAuKRk",
  "key7": "kY813YrchJU7qZHreUmrW7DmFY5365bFgg2pdZG1qga3RrbCfEqeLeDW236NJMhxgtx1ayGUjqnZDnEoGwQ3FFS",
  "key8": "5Enxz1qgp3GbdV3RJsJjoFoV9wQUjpB1CftqMoziopVpwXL7Q3WEK69FYTRa75C7TRsuxvrGbtCgv5Enk7m1ypiJ",
  "key9": "24K3ojjtdYJWuzWV7M9oUi3gRSwwetHLtinxXpVWb3PXg3Q6ZMo8CK6u3YRZvjKD7kTCpD58PRULXP2uveasM8MA",
  "key10": "2V7WYnEuGR4aNALhruqVfPmYG9amUYhpozcKHk3mQt725FZmRwXQT43DexGJogYPTWKWyNQNjNcYsnTVMN1aKHu9",
  "key11": "2ykRJgYhUkQYsFPERCbFuVnaBoeT5yga3qsyeqJoLMJsd6ggRgdE7tbmNtyvZMHoJRCbTCevYa5Sqtw8KZphXtvZ",
  "key12": "54qKSeZEguYkTqV4W96V43RDGnD6Uy22BLEk8RC5tn7qrpYZrFdFqRQnVe1uKaenXPS7qYkG13cZgQUkjQzwddpo",
  "key13": "4yrHBErzwEA1ScW3vX9UdQnARTxKyh9yujz4UZoR5Ykq5T1pDn7xrq33jERpgS5QfRJRX84CUntVZXXAZpTsfWMq",
  "key14": "56eJFdKHk9hVhYvrWRXStxoMnEXTVnRMyNeU5dVGdnA1719PLwgns8B2GdszfZPznhvxi9LbBHbMzghyxKJ22BJb",
  "key15": "5UWGTLW7yfFBZvX7sAPFhNGmzxNzaz7wmB9a3nZFHsuEK4WmHhmqHgeenD9gsU6cheFqVkzQRwfEiG7QwzEFUgWq",
  "key16": "4WCmdHzmSaBhB1xfAGaPV3XN7cdykTDUcoJF95t5y7rnhZCu1MAP1i7WudECTXZ2SJBEC4nP4tGLHE3n8iev2KQJ",
  "key17": "2Lk1y8aKwPUC3ziii5Pw8yNkKeMPu3CUbkSvLogoN9ACQ2wP2iqkWMfVCy84Lx3abfrB6aWybuuR9ji3MjrELtgQ",
  "key18": "4WA5dJ8f42stTT3fCr7agCjGCK2yfcwqtgFuGPGGszScSFLsz8b9M54ydUc7wUUi14e5aNUfoxFA27ofsrxNaNTr",
  "key19": "2Nwws5ZY6FVyfh7V78o1itC4hLEjhzcBG1AiJS1ewYHC15XHHhQ5uUF2X58ynE64Cm2NKjGr5Do6NoeX2tTCWYcW",
  "key20": "4yqprUZWRBd1AqQScz8zBXAE1dwgDA9VTrrr2d8gqJ2zKUHRwrRuDax7nhBHQwBrnHzBnSVUfAu67wutcRjctK4e",
  "key21": "5DEZJrghyrQQh2Gj8u6paWfLjzYdCXw7TuN4D2rhUaxeox4Am14amoumnFPwuvCQxk8bgdqnuC1j4XmD46sY6zct",
  "key22": "4c9uEhJRYJhHV8uJTznRu2NqVHFAf17a6mqLR8beUieG2xrZvKbLQC1PwNztLnmJnWB1QwN2PB7z9ANspKn6UsnF",
  "key23": "2G3WbyBM1AKGzRf12pKyCDKqzjS2zM2nJLVNrJd3fViUhUe7GTqFHWaoYt4trdF5WuZZosKeshHTJSCwDnxqamHh",
  "key24": "4EUd7fMDYGThfKB4VcgqonMyRLWFAxaZRMPJgoeEBwN1GA58gF9cFmP2XgtQ3RiszXu4fofVkCUiNFTc9Z3Vety9",
  "key25": "dgY9tvPLhjvySLeQytjjCdaLs28zRuA4uohbHW5GssFNEf6BChHY689Kns6MLyrGq8Twd7d7oh2Dk3DgLTq82en",
  "key26": "5TmMM6PF4sTX9JBgNKM7WAZGDp81KqZpha92p9rf4KBisLR2K93kVsZqDD15EJh8uHh9jPwt5XuEVsuz15AY9aNg",
  "key27": "3gHdYfMWGoa2vPNpdy6ATSxuXEDTmZ53SE5gF2N6L42eLrc1X6HpFJhQjJuUg3BeKcDSUKzG3jCtapSgdqZKwKSi",
  "key28": "3PSr9K75xbfSDDn8L9iEYuQAudd6CdH7EGX1C8xsQ3eJTwRbxQ8WpjWUvmoA6rG5pJ5MWiexckv4NoFeZ1Khe6bt",
  "key29": "4kBM5WDZMFRWRf6Ghe95sCoFdFsoqatKWftdM7BT3kvQYrbyXk4RMzXVFvKsedC39fLJ7hD8CMtH768Xi4A9WQBq",
  "key30": "3FM1NSzdW1AZjJnasFz1CQ8fJ1REhc2xGWyZWpBiPobzvgmXN3HaJiJFx4JeKzrgmdBswtFHAYmSXzK85bznzmgA",
  "key31": "5KtHyrTTVgV1buKHNPsVoCyFZ8o4YT4mAU1qm63j6RHXh2DD8Sesvs6zy2vZBoRCXErJMhSnuio8gFBonAgcLnPX",
  "key32": "3FN8KwdAm7kqE5qFp1DqevG1hdxpnbd9rdyz1jrcyNVRqf3ZVFgLtGF9V221R9T4AZ2zt6gnvAQcdZ8GRr6FAjo8",
  "key33": "4AfdjZrgp8Dx7pWioBGht1CHoDWPFJeS3PSDBaGS7dLa6mSxqSgwxYvf3nL9N7FmamMiNBEbjaqVV18wkkSBGQo7",
  "key34": "412hM4C3tcA2XtFhBcbJ5tTHimDpHTfGcgPKBuZ1Mp9XD2Ln24TNn7nxr1Phs73BJfiRjHypDZ1wvu6cDJy9TTEN",
  "key35": "SnhPDdTcz2LM7UG5Lh7UR3rVcRiC5hApPydF3VaBQgtMhyxUpr2BV8RDtXSMcW9hqXoJ8Y6E9EiuUxwjbi6yd6m",
  "key36": "3UPpqJLTg9KXRkQsBfoaJYohQ1Wxe3ewtYd4iiuuNgD8rRhhattRSeFni51fN7DWihptqiCjC1vzDqgYJz3HrFTs",
  "key37": "3sgMMSNJcWZ47mAxHdj5NjnqUriWpiSLvvgG8icLJbgUdkJ2MyCxFeuKZjrmqLvUBFkU37eBkuduJvjUu9s2kdd",
  "key38": "5S85kPrcj3XibY7im66gEg3xF4Mjc6pEZm9PGPGMyLEgQPeiDwfqzUWtRvKSCdVdTczo5R5ZpjBVcZHPep5vPBpz",
  "key39": "5E7Ut8iWA58kHkzy2RMigeegbWvSXva8MBp3MJTSLS19DPJx673uLBZnPbwbVfpfRwLtitDkjfTEZXwTtnrWcUrH",
  "key40": "EyLkUYFw9oRT6xbDab3ZBHs6KXcFfoZe3qjasZH5AYxxnXTqBiALAosiTVqqgvWDPWPWJQ9frN6sKZvR2PCcAzG",
  "key41": "4rzmsKXKLSPJaaxPMarT7Akwi8NZE2inN97MgmodSF3pkHJkmtxb4bjzDcBShmG7AWejziysM5aB92qFKffhN3Ax",
  "key42": "5kmjZ7qZ2p6svftFpTit5D6eQE29wEdGPHZQ8Bce6SfADx3AKm3szEBgqUvfk9nNfXN2qmhNfLBrUKZDLVhj41wF"
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
