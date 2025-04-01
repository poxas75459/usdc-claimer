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
    "5m4P4mZojGt3jsmbDM8BS76p8vx5ESoCjqSLjV3pSGLxMD5NNcGDBLLEizsCfFzH1gHhrkeHa7YFLXnetBVmZBrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hQjBrfBubXB1NXvq3bR3uBewpQtWYBE8F7N91RUd6EPw24SNvtmBizj489RLSNGuS5c3j8VaFrxGTAT9yPZqB98",
  "key1": "5r5rGm585LtZ8PKVrZNEHkJaPYCo44k9c1x3ghJ9CqawdcFVCaS3zs37XBFE6mzXgadPDS2QCPAWby3ZoxUJgrcx",
  "key2": "3KZ7TDWFGjjp7pUF6e7GV3zrKEQ7g3edLUoLnboNgQjcAdyoPXuPUR1X29WutMPtGgzhhXXDTBfFvRx2BXFaJYxn",
  "key3": "35Un1RTBySnqd14Cyu8H5f87n2kbCPC4gkP35LLASqhy1ZHpMSrvHPGvizvGsEvwKHZcUpWjb1Y1uEcu9KcipkqL",
  "key4": "3KrAxfoYqNdwhmzjekMjpQKfKDjx3zTERubXG7YqdNMGrzF7sdRcgHZwbxJqE3yrVeQZgxTPeRxh6teqVSyxvZoo",
  "key5": "5fPhjnrcpidvZRfdCtaWFCPopy4cQjY68e9AiHcWH4cM9r8jDD2syChB4ak8gS1P2f86AowjQ6fbhZS9wXPgV66q",
  "key6": "3RTuAiFsDFY4ZrpMwX4vW9jFMSZSqkkCT3rrNiisQbz3akntk2E4v5BPktfw1mBwTVfJSxTdqQpY5KpFT7Sreifj",
  "key7": "5RsQp8Xr3ve7Wx4YaAHJ2bRbvsa12iruqMztbNXpCz58QbtWAch7jJgULaYakSrU4EmD4fNpxnDdZs24iS9jFd5V",
  "key8": "2AFvt1ytmHJ1Ae1wmFpZ7i8VMoxFT3RRaMa78NBSHPEHD5S4ktW5egvPYihdjnTKmL5cCQh11yn2JkawDWvLwTJK",
  "key9": "3uhkVcagEbtDYHGXcWkqKbS4d49ZwEFJ7jv3xMVxs2w4cquwwjQDcwChJ7gL1wx2sKAg5QGjqnHsck1Weab9ja36",
  "key10": "2b88qSSArphTqcr3qJUg5MKwbwE2ZpRxyoFzbsvsnnTJaz7kSVCHzg8qxw4hz3dTtqSvyUR4YQmoKTkpzBRWrah1",
  "key11": "5fMzwFMbNDVESWKMC4ZXXVMnt2mRLkCdkHBdqUfxhGPvUqru3m7wAttmrPpBghURUhT8y9wcaFeJo4MEB4K8FvfF",
  "key12": "3B14g1maAQHj88yLRBMzNL7boVypxzPxRaYmDNesFnioB4qaMgQdmYuix9iUvZeQRHfhZCsGYtDMtBoVCgSqg9Kh",
  "key13": "4ojyDCsc8yyJNureLRTaVXP4vu4jAGGMDVV6Pk1DEjvfmu3h1ZYQRR6D2wPspkycGyZFgp3odWvZJPFfuGpkDHaJ",
  "key14": "3J8KcFmQoGY949u5FXLXqVdsMyZ6wURVEcV74thKnUxEdbgSmnJx6d5Vfvz5PrKXWWor26cNFa5HBL2Lz7soWNFf",
  "key15": "f3CcLvoxckYkjZoH4FR31bDvEAhjZMDf8kodBZ4cy6nHTAjyQx5sS4ismKDjxS5DJRog3xrWaDUEt8QjZo2Tu4m",
  "key16": "5Wvy6Gppd489yL3srctzMduafC7yk4a1iBdBKUJqzTJorzBvB5A5yr39geBgphZd3pYm4sHs25kSNUTdntTKpC3j",
  "key17": "26ACCC5q43rCu1uWGS66fTw7LTf2pFoftRGmqwfsSidNG4Hak2EaYGDmrdyzs43j5hEG8XthmHANqe9HQHwU6Jgw",
  "key18": "4HFTnxmxhTRdEpcoELqYCG8gZgW218R7tiNJBeKtrRUcRRwsEwnorhC5AhSijPP1D5wNwTq4vVYbHt8FNH2GKvSA",
  "key19": "VHvQg4dfVVs1xBM7gyURMD5t5d5dFFwWEw5JcQPVzA127dQNbqhXMerse2SsAm6HPovvFonTj1DEfeQpWEKBX17",
  "key20": "4cvHtNrrYZqXo21pUAk8guPaUooURfzvfzsz3UeTT4hb4qbjrSq2Ex2aQBuch46L3ySKrxZ6ivVnp76ScQsTAaey",
  "key21": "555XpYzBvFmrMaNj48hVqNixSHSiVsXCAkDcr318Y6UyLUHhQ1AmzKz6n5HetksbHE4E4vpdqkusAiaYR5fsoVSA",
  "key22": "238u7kqK9nCMJzVSiHqcLBhSqbK5qR8VZ6p8FbXicFbUF9w3TbLp9f81dR2jhWMbyw16FjRQvWMTSPGcPnKzf4ok",
  "key23": "23E6dkcwahxJ5UxGKESMiZZYRhUAoFYzcDV4sXpqeV2E73d9vnwUSRPu5tkQJPVJ1nQJE51MBqHYXLKCCuJdm65J",
  "key24": "5JdnK8z4ftjQJDVfTHgrrijuC1kvTEQ9m6W7D4zhaZx5JhAU3eU2uzm3sG41AKDEAWjCC7yhHRgfg9m5MdYTpnfX",
  "key25": "5yEYrK9TdsvLRoz6BMAPdxhx5jRnMWuLPqXYW21F64gjbge7NHxC9uEjfhBuxEKS6ADHLqFis7rFkcJ57xpLGDqE",
  "key26": "36QFhtDcmWSiCEHdPiLuK31aqm9RskpYQQp6Q4i5Jo9gns23tGjVkqtrfTn8LcaKViv6bqVi2UhbjqFpn5aNrp8j",
  "key27": "31rKJH18XYDHKtbaj2YHGfEcDfNSuLYPvv3a3bdmMqULrz9oW6bMpbKkUDeNJ2xs9yGJuz5Sm9KjiWqbbVy4qdcP",
  "key28": "2LMF8YT2xEeRvY9ZDQadb6fZsydyS3aH7SNRS7UaSTXT2RfYtXaXtsCFxRzBzgLtX8Xv5jcFrcWEKJwejbscW6Sv",
  "key29": "dE32yRkDd1GGR2qFxXLPPhtiAcn1MZQz3XGtimR2B1Hk628BLq7L3XdQSoVP9hmr6T7HZSKcwzLkozdrY5wbKBG",
  "key30": "3xvWBtB2jhE5R6yaQ67cYbsgtADNGEuRqst9vAWQUiJ9tGx7SuHGZKNmRxAEYSww1r2CNuxokEN6SynFgrHbiB7n",
  "key31": "4nX6aKfsGivWXb3WysD41Ubnm6x1TCygt8E2ziKP1LVuBq2rn89YRVFNb7ptErB3RspuRX9qeqkwBU1tgRyGtqSb",
  "key32": "3H7Zc4oJGRsZzhJ6Dr3igzEcSPvjRiruzdX6yLFAmMc6zPWTz9SM4SUb8EY3Vd6GJoVfh3VkpGUzjSZRYK7eNLXE",
  "key33": "3fNmUPXmEpDoyP3uCXMFdq4UstBb61ZbvLqaSTPRf8oPukY6HisqP398w6iaH3wXRVpjXq89y8B2nyrnz79Nx6Jp",
  "key34": "67QEJEoCaXMCXE9CCUEdu1muVSApffi27CRL1TqgfwQ2U5bBZYETHGK8TcoMMbCSgRK2jBFsXEPz3sSnJFq5yVbV",
  "key35": "48jAHsYpWD3VJx5zatWesxbxj9gGz8WRSLQsZv822naBNStTHSFUX8T9jwdoMME1xF2m6hSANgaH5BJcs4Q12FHk",
  "key36": "634URqGev7yf7ojhtzQbSRUGA4UHY7TsBGEX4ey6jBkmFWBxxjhdoVdV4vU6rPC35S9ZeXgDH3WNRH6ZpassRr43",
  "key37": "2hRnaWSF6H1rG8Xjq9dZ6RZ4FDu4NyPc1uUqC1FeAaWZkiaqPVteYcgTMohaZdis1fueTAKhaFbfmAEUy3aWpNeC"
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
