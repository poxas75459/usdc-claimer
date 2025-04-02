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
    "4Vm8oY6MAUniKWKcichXupcWCBES2jEnjpqLqhE7b8Q7m2FWJML9bcJqtJ7Ussiah5tNQZKfq4hNZLxU6QNa2zKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FxxyNtfaiCPXLmDzXsqKPexnb22fxdXu2MPTWMcUADkGxRbixxWEAH4zpgaGMVAiWsWEN4dUM73qSF7XjRxD7nq",
  "key1": "36k9SrCSBWpwWSpH3xetBot1WqJKmwUcpNKXoNRA8KmikpAcHjwRvDM7MNXz3HXdXcMY2KSAgT5ffPi7rRgWBKV7",
  "key2": "4koYMLYFUZBTjL2q9y4uBDMh5veceB5sKsiF2fRRk6tDwUm4kA3iyKQ2BiUPdzLTnupoV3h3o9vS6MMnnEF8cFuP",
  "key3": "NuKNBBfdBZFeSsgMVuVdyhg4B266q2ppudTHheggZ9cH7UUEDzmQiG9THr6xSZAgChXq834BUgVaaNFVvowuSqz",
  "key4": "5AXb7geh33pvCYGb1nSH7bThxVQZdwiMw5fQMmNgvj6j9LB8L4Jq2PPFo6ci49Ry2WfrXwPip19dkwH5MEzQKH14",
  "key5": "2CBiguTNPsU7njUy4przSq6wdXF883zMzdEsEwbpEFJmLBzNu2pjFArwyJgYpmaKh4RVYhc1Kfe7c8FFeGPB21cW",
  "key6": "4WwFZmH9CdztfgmYu98UJBCaaK6RvSSNsZ1x8bMifxnMaawa51TgsiVNyJZvJdJSsCR2v3YuMp792awRHT92JuNc",
  "key7": "4pVoWHFkie6wUs4mJ1uH3zVne8hHLygjFV3jTxotTPnDG8YUSsLThJZRnMqUwXnSXK9URdyrYUR9nMBEMyvkXsVV",
  "key8": "2iVQvJ8bh9Mt7JxEz9hXxgSWDFXCgXBK4i18zbg9LtjNomRJV5q44XTATt9PisHwRMbSSepf63NZsRfcRWwxuN8K",
  "key9": "2kyixUC5C9o76xhNFAL4VenNGXrhbmYNGT8fGRV31y4sqUaKp7yL9sGA3EQ5Tx9X3Qi5TxGtkAkiUJGhWf3TGrkY",
  "key10": "4ZPdbVvrbBymxTTih7siMoDykGFyzasKbmo9QAfTgnwTmnhSnWZE7mqTU29ZBRFnNgDu8MJtz23CsDeUYoCd5BcH",
  "key11": "5kF6mj7dcxBAkKBXALDGqeSzKt9ZPSNgJqR9EYnjSTF479SqMNEtSB73hYBzXXSC934n3Z7QZDoRZJJVagNcCava",
  "key12": "4YaWdYMRrHWv2y16CWWP4ibcAuvbwQHjmoCewsHtqTx21D2gQ3RRVrazouQeZq2Ncq31HgvWq662yasSJyRx6kEc",
  "key13": "2TCQZJmfTvjmFJ3b49NHdFGnMSDEbMXQ6wQYNKDVzgEBKmZjqjmEKrBU1qjUaMjYkbcXGKyErLjKZcUYfErD5Rfu",
  "key14": "4ygENzbuBLEFQm792PDfCbxgJTNftfnBbFD1MSK3Qz7pF8Zw7EEyWbnxB2hLhCW6hKDh1RRWoPTGyt66hdUm3zju",
  "key15": "59eG9xcyeZ6QiBGWnezeHVs9qjJw1Eu57KRUKEHudg7bdBTrtFBfHHZS11fAQPKrcLJjhYjNw1WuWhjd3UoBqWrn",
  "key16": "pfnxXNRy6xCnMD2hKPYGzLazAePq7gEQQgUbcu4REAZUT7F2ayLrnnZG3kBmJakycRheMqTeughGcuWu6MwDms4",
  "key17": "2C8dmdG3fcHMfcPF5byQ7TERAJnCZ2CuboijZ8mFqQsgpPx1pXwu7Yb38f51YTngZrmw4JfDSyMhcCaLTuoQ5b82",
  "key18": "41TbdBH7YgSojwFYeEXJeVPV6eDuJrxHVorWW3QKzmKgt3Y4YmiDJyPgN4dHyANrAVpdWZswizQAtVMHTEsu8VQK",
  "key19": "2x4o9mGyfnjKdTSYgNxwHZNmor2E78iA9ghKjwagCNX4Y7ywAX4gQzRK6NRkLYxowreZEN5TtZzwdAHrNGvMQnhk",
  "key20": "3osw9kC4U2rvuLtMqTVg1ojF4rMPnSE9A7BXNL5efm5u3x779y2Ym4vMps9Rxar35E4YfBKL1sLW66Hg6YcB2Xat",
  "key21": "3RZJfjRy52Voj7zyk3WC1Kn67KgvNH52ixGi9R7jf8Bx5wjTRpySLHgM5qQqVbiLSuCoW8Mcpng7pXA4kB5dhSv7",
  "key22": "4QH5Y7vUY8LAzQGRw74CJ8AQk9XMXpkN4SNaebZBUD2Z8aLhbhhbYJmjf6HLdy6pLJMXKtP9G1rRCPZcWDHbjwnQ",
  "key23": "5dhEbyfjsPPgJUb9RJWpJZ992uxY7ER99c9NV3hZSiyBbb4r5iMRSePVmPzzf2vkuxy6HCKmhsebmZmHsoCNDPrx",
  "key24": "4Ef5eeqqUg28ooHZUNsH4DagNgayCSgTEngWidSomwfis2vNUSoc4Vn6EbW8bkJAN95CWSCf5EwYjtr4SgpBB8Tb",
  "key25": "2sWFa7ZK9dGkcQupmmn7reqdmTbdSnpJ2ts2tSjQsqb74CJNCZhMLUJnETsyG7XPHQwLiHmSYpDjCDNhPgTQxsjv",
  "key26": "5tr6simaqTUENxDL4r8qtKq9jceeM8qkmgPpnzix5eW2BRH57YSePZtpef7JjfqtFQ4GsgHviEJb56kBbSBXHYTo",
  "key27": "3LSv2oTTp4QpP8Gic8i2FMMAcDDvtLXk1acNDJEhjs1aDDmXy3SfAUJFYDXaTQ6asUsU6CajqPK5EDSUd5DB9ciK",
  "key28": "64dk1sLic9CUUPRsAqhLr7T4AwxHgGSStkZy2Fo8qCEhssBQAzNGYZSbCrvYZja5WPpyDYMsQwGUXGi4frGjfMwi",
  "key29": "51hMTybqjzabQ5GwszKYCCaigAZM5GRg1ed8hzLz7AAkCbbD3X185EyMntoTXcbH6LsYXRJjpP3mk9zyXoufxdaC",
  "key30": "4H9cxgBoVoyNxjSR7sK3MafV6EN4mAr8rmngvVd7DrNFvq64rrPd2HFfDwM1EL8HjwZPX9xN5TArtBezCkqtigDm",
  "key31": "5Vxy7zzpKC8FAkeyy89JiFzAYYFNs2gGZQJfPfZ7NDfVpNVU2LLNpkUEEMsQnSiwayHLXXjcUm8y9tPkxXSNu25b",
  "key32": "39dyLT6LCpApcX1axsQweRTgJfqSuVm3WAJjSxSvwQVF7MMDsTnGkcCM4XPamDL7C4Hik6viQHLCQGAqyGwX54aP",
  "key33": "4wE2pESmtQPaaTT3MUwnyRb8S8cb2geg2keGQagsiHNLef7mPB1YYNciM8aUzBRxW6EWUGHRDkrPu8dSjHCMGNQ8",
  "key34": "45LNxWsoVFUkq4LbUpdEsDHdKCddNT1PVvL4EVWrhBvaKzBXqcXCfbiEUgShBdMYebkGvoKaFvLJ1imSaydbiamo"
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
