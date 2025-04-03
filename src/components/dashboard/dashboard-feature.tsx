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
    "3oCsavJUUE6rFTNkXx51tjzyzMS87CKinzA9J2tHCiFz2rdWFkEyffWL392xoLrU6Jubsi4QfXyKbKtezzvWGxoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HybvKRyt593p5cAjmTyeoh6NAGfoXTNLszWSRkbstkkkCky5amhFw6y8Get2uRVJAJkqLmXwoQcYNjLnNdhy5L1",
  "key1": "4kjABXFnjQymWXUgFw7CXR3uG8eRpyzBpURBy61iBSuKK4UcUXRL92FUDsAoFNZZuDwKTT6L9ABPP4MUoHAHwdBo",
  "key2": "5ufgTqDKKCuwfa1rgVv4hmHhS7zKq4j5KqnEBpLHP7a7kGLAmBNZDcAdvo7BaTc8poPdpc5WZXBeYkqrqC2daHuy",
  "key3": "5D5hC3yN5dbDUCwZU4DFmipgC5m4tzicEzmsDWZxRU4KwsH5zoa8CFsPf5G8wyjSu1GBBA9DfCP5EjsCBeimunhe",
  "key4": "2QK5Z8SJMaa7tJPhS8n7YFiR49kExUKAm3XorikLYwk9cgWsAc24uYArh9BvwumtzhnqFmPDaKpwmfHDx2C3qYF9",
  "key5": "4KNxocfhaoHpBptu3rptkLYZGXBLm9UJJVihCfcQz4tjZmKFs3oYWG5pxyLKXCE8fXxXaVSjAjVQcqgHsMS5Ek8E",
  "key6": "38LqhXZjxTK6Unf4G8SA5MnxW7ur4hfKXqJN79QfumFsPfiYYGx4fi2g8jDJRJcZKtFVWimjxanU8XZvxeWisKk5",
  "key7": "vFM4WL8vsVrwxZjLhAh5RfKvE9hDA5MjnKBcvdCJfZEbMxtpnx8iXKxoc9gJSkW7Ms6K5hDYeTthY9rmjeFvz2Y",
  "key8": "5LpiQWkRMwMg6XegWwoBSfcrA4LdztVcDpH5j4Xt5tBgjQdzEej1NfQSZLpvJ5D6Bmoizx9idpxzapEQxgHYdJTp",
  "key9": "2WKtqHa1WN63kVTH1guDRup85S1zz46sHfyD3TdCLfskA5hrYLKzXeZaEgLZNi5XZbQM1JeneVmbWaqsZrh2eKxJ",
  "key10": "2bzcA3au7QkvgDKmbwVyxhVz9Atv7LBFiQQABWadbX1MGGvzkEBZ9rgNhN1jdwmxg6mGpn7sE8fL5sjJWWpUMuee",
  "key11": "4UK2DXCiXKk4UL5Z34TV4sYtMGF34Mm4oRf2KT2dSsqjt17KpgqVNd6KqnLKrJU6FTdFCQSQAYa1X7bvDXYEbkxE",
  "key12": "4nGqvheMmCxRuKm74XjCDx6FHAFJp3h5xAhhmA1F6GpDfPCamaFQ12QCKTdUBKCBLnBPLm2UQfXpqWBdE4bYnPRz",
  "key13": "4yWeiFtT2wWJAcKwi1gPwiMjmcQxY3Q5dRBue1oXA4bSUCgJz165UtjZnD8yh1ymSVJZmjssagnfNaeDN2CKxwh4",
  "key14": "5NRqnnHqPrxcdfkwZiMfQturQLKcGc4kFdB5C8dXfGCNKhZNT4zuPzBxGbo1jLbi351rmQemFSmXDuDzDc5XNSLq",
  "key15": "46R2NG85L6sLFxaG9QMRwzejUb22DQaDQzFvyBocv1NtpnWAG3h4Y7BRSWxUrL1dHbfUi1hy98D6SBXZRG2VTYqz",
  "key16": "5MNT3cATjtTmLYMbM3Dgx8T86d9shLjxNvwoK6WEjaFp9VXJeMVAKKx9Fa6VV4mweWrDUC2RR8wrwDnZBPTkyjyw",
  "key17": "2zwjjmxgD4PgbchK7QcfnCvzLEvgNCpwwXkwkMM5jEzDxzqkUAjWkbBHDVzUhvJ4Dx7rSGjpvdpxv1WxiuxRLWTG",
  "key18": "5aCLD7dYBkfvh4tvcRVhkitoHJbG8ihgBHGu9oDcWY886oWwtC1hVHeicJFHdcmHKigzKKfDaSeoyBNGsHaioVi2",
  "key19": "3xZNsP1btQBxrAx7yVxTGm1Rw4PQhGC7k38rVzZm7zNvFJoV3ExRwLXkJPHKDe6mvpYjZGbBsgJ5VkTVK9hG5aGm",
  "key20": "2tvkSCNXxBDCjJs1BSFw2tUxZX6X7xp8KX9CCoDGLQBcdyqXA3QcFgsNDeix5yjp46DYW4sXVib8oKP3LGiXwUxw",
  "key21": "4TWkNm4NDAyZKaqZxkMp8bx4K4sxZdMgMum2TyX1uJVAu4XNdUUspakajz1UH4MD4vrRWR2HSqx7w9QRZL4eQN5Y",
  "key22": "3U5kc1Qtrqnhvdto233mVBkfeYM2UbgKYLfNYgfsDXVXmLPaXshMGkV6GJ36DNduK9wiQZeVJhcLvz4JsPjwsQKo",
  "key23": "5iYP4ghcBnsEXa2uaJKD5FVsVegzMwWZMFAEw5xxXVSp6sG7tqwrThH92UXg5m1ByuK5W5eYmXFw4gJLUtfNenZ9",
  "key24": "5nrjyGRrfFycbJMzFBmjeyjvbctZMp8msRL8R1iSKBiv2nXneHZc48hk8uGpWiE8PPLnd8T91q959BJkCRT4uvPK",
  "key25": "5o9ods3CB8hHULnCvUfoXMYpXF7QspUYY2mkLt5MFQwdKbJ6u667gFFTvDtum5JJh9CWKZ6UshFUZxSSgAFrV7qm",
  "key26": "67VeAXJFTvC1fM7tM7v7WQfrEtXBBSPdfSNqroHrhthjq54Di5bhC3yk8wPcZLxoGzsFbcgnaXyUx9jEFJp1A14Q",
  "key27": "YcSzAzkU6TKVBSJksQUqT323dZPUBDMnYTiVRQ3kwCqsDjrfxGn7gSCqRAUsD4QWXyEbfxbmhMdd7V5kVVrnxYh"
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
