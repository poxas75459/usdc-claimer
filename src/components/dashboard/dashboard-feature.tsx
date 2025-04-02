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
    "2ngfVCvdr7T88gDBzi9SdB2NyGq9GUNr9EBrnGzLDhNJXPsKgqaweKhvaAujBgiNJuQZZHwR5PMxdd1wqGUgRwQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCpootM1T1QYDza4XyrtiVy3dVDRRN5sXAUgp954Qy1y6zpre7XABYvZUvj7rScyZ2XKTdkAdYJnmGqNfJe3pE4",
  "key1": "R2s8iLJUmqY512iQKJL7CTMiXGhhzRoTMfpgF6t8qb99TubsSMeqtXSUTjowgkpZ6cvku77GfmKnmsp8MWMKReN",
  "key2": "5KTiKH8iNySBpm8wD6z3k1zu7rYKUc7fXzkoXiJp8bo4SVL5SNpJMZV8naSg4GV8Fb6NzsYY5eTHJnyWLytMrMVD",
  "key3": "2BPq8cA9996rdACWFkM3r71yA1bGpzvZeXnJVzBjLSr3FwRA2t8DUYLXWmuu8RqH3E52DBmFxdoazg4nY1WYZBo2",
  "key4": "K9s2YPik78oUgvShnCMGXpCHezEmJQNrcFCzkU1PP4vsrfd2e2LUQTeHm28DgzHvicTPRNuAYTDYC9rovDq8NqR",
  "key5": "3nsEXQYAWMYMTuWrrWqRRaE9Yd8LrM7kJuuatKu77Cd8d7WoRomxNqqB4juUx3yYJ91H2MVQf2iGqdoX6s9iKs1N",
  "key6": "qhwQ6fAHTReXy5VJAzYVEWvD8gSx18LLpapnep8vPaFLHo3asxN1Qeic3Ceo6jiS8VNLgnsHno2ZR3USuorVLm2",
  "key7": "3EHRDpVzKiUtwFePyDVNkTWb3UQfiHC6tE9FGAXqmDaPvUxF83iT7JUm33xefpY3NoQwiBuUFRyLur12ZAgDbEUC",
  "key8": "3wT5R3t7HMdRJbidE6r7doQ5UmH6VVxc5Zh4cLSakAWKHXhetidgN1F9Z5yKogcWG6F6k3FgC7Uh2e1mRGg6HPKa",
  "key9": "3Ao6XXj7cne2xzS7pwdAXTb6PM8AGa36kaS2m2HAMBQkbdG1SPqAVxYh6R2Dx9gmcekG3y5rVtLsthA1oMqccSDX",
  "key10": "2JDoUYb36Xho1WXACbaVyatDX7svFHRbx72zgh69ZiPCkZG9uDRSyNm4fJvJwmQgEDMcjYvCHvjjJ8n7DRDW7vdJ",
  "key11": "5zvoge1f69pAVKVdVbZKqKZ6nGiD5q617JcNCC4KsRQRSawR4657KcwW4CFZ2kDHr9zEBRtjoDAZcxyNWVEmLoXm",
  "key12": "4qwbSMzzNxFWwEzBkiJ5SvDXCtYq8arqNegTog9VfqvJPzDhDfxUvVSoemBNsZUmKkSC2Fg6RbuaGkqFVN2hukX2",
  "key13": "5isNLjrh2wZKAQqV2UNvR93s5MLuQBKG2tPotzdVmSbNyt7DX4DDqjJw6Dh5PumdqGySvkq9Fau74Pma821gsaTX",
  "key14": "XETgU3oyBdhbB5snQtmmrkJQzwFP4r2tpN3gRd4rAWghFYbFy8p4UYASPjVS7i9kvVmQstTpEW8opM8wTNdsaVd",
  "key15": "tqGRrABpfTRuoQUyyfMtTGWZZc35DXx78czJGCfgg1tBcpQFXXW3AE1hFUEETaD5tea9NuvwwjcBeQXkGAYkAGX",
  "key16": "33sQMMA2oRCWfuAcA4jxcDpRUFqwgPMnyYN3NVm7a6FnJjVE2vn7dwVDNgDt5dFmb2rYTqNLUyjGXZfrSaornUs6",
  "key17": "2iNb3scCzX3cKVqBzSni8UitBXm2TZKE8EY2E5s2ifXGjjzgs3ojr22DegQHffryBKWc5YViEMfbULkV9jQiA3Sk",
  "key18": "3oQqVpQoqqKfVZcfnRfw8fHE4hBbZgftFtc3jea2u226CX9FvjSgWFdk5ftz5q3SbcKmQ8vGJiTACmJiK9SgLFW1",
  "key19": "3NFLt2Yn6za6kWJgz2MRQvgnze3fEUZRnXhkqz5pc41skcBdM9D2rAFLXNpfjaqEwAmceH9hLu95LxPigfhruke2",
  "key20": "cfj673tmfSZ6fwnzxX36rVQCUZvSFxWzgE3qqVGvEP3M9ZPUF23mP7UheMpWPUycuogDTXjwu3Q94YyB6ChRAdk",
  "key21": "4WGjGaqABfuFUsVjg2DzVKTLTg11ZxhTKw3RKbNRggXH9nQBCRqkzTAVDaR18GWz3r1pZ6TrMVrSQNvzXEMfVWdj",
  "key22": "4sPCjANy4GzKHqCX93VZWABm5uSh4SyFN7UP891GyLe26h5Jc1pzY2TKuCARoDDZymMb6cxmgc8H1L9pBLJZzQtk",
  "key23": "27bcX8rR88mN2yx5yKEm3DiooKcrjzch51oiuDUSfy8fGr1SvQAjwkiG63tMjrZu6goi3kt3pYdMdKfA6GY7ZiB7",
  "key24": "nq6nVRXZccEYdz31j7THcV1nSQiMVwh7CaMBjFDtAgSNf6ai8QohdmsZoQcMKrRGbmxqpZ49cKFSsaxZ7VnTNPZ",
  "key25": "RdRk8RKfaJyCUzTUoXicCVX3LyqBahWh6adwBVUHqMndf7J7vNX1pQLzjBuuGcTaJR7ssN532FqSyW1hHKHBnKi",
  "key26": "2LmhyHxBhiHfymGoehRFG1wZJJxr1jPGwnTwKjchq9wVyN2K2pHJtXvWhk6QqndNuoT8ZypPLA3TpQDrkBi2Rvof",
  "key27": "2DSP9meAUkdzzMgBCt6HauNUR8GfBzLDSyHPB3Q7fy7nC9kyE66uaVL8o9NgGjUbMWYdLzyA6K4Yy6GkqDJpuDg4",
  "key28": "3xJ3g7xS5fFeRtc5wHaqaK54T9a18K3mzfAU1hvvLFeCbtvuNQU2GVkzTxpFoJWMMCmzjCNrZ1mHysRcE6yP87KP",
  "key29": "icJCSXiKYWZCEwodaZcXdBCKunxvop1DnqF2wHwj5Rt92qcgtPfiXoYn49z2CEDAdeycDRWbwgWuo3d69dT3cR5",
  "key30": "4FdKXLXJpRQY2ssLmtUkHSy3JCDhugbdpjzEfAZz1BnWFBey2c8Xgy4syVxh5ZKa8fqk9CmpQpZWsozw7QG4UYLN",
  "key31": "39Q26kTsqLrR8U73RcGC6Ht1yCFyhEstg7zX9H1ZfrdxYoEffhr2UcE4GAPZi9euHseLXyYuv6fujx3Wkr5eAjoA",
  "key32": "64pPiNe5yDmKo3KNiFsqk3uPKHrYNwGptTjfGrLtbfKfEbZchgr5MMkSYK7Y5Y6eFv24jS1dTmLQLEtePEMdDvk2",
  "key33": "5HMQpHPqcMYBGBjvHEjcBs7wMY2iTUN8J2ye63qJdLsbG2JG4csKRwwkk4w8PQ7gryHSLFM5Bs8cCGhf9o2UAJUw",
  "key34": "4m2Mf4R5JvbMYJA9KUBBakzhb7vRn7qReBsn7DjqjsnDZ81padof9uY6G85q5Z94V72cZjsrCmHQmDQUfYyWw1JM",
  "key35": "2urENw6TRGGSnrTE2sUxEwgZzaX9EZV2yUnVcVk2SPAus9XunNefEZa1TXuuGnh3dfYwrVev3CSRHiQQ7F2rd3iK"
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
