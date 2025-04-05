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
    "3hVnr89svxCqVv29pt9x7pQWoxNCL2jAcKwYg6PVuQWNhnPb967A3zks9KECrputKdenJUgmkbEWyruzr6H1FESE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3152AJg63ygtkqzEqUpF57EZevyxHgC7BsRZSuiX2KJHr6QEvDUPoh3MbUzn7KTSQCfKcg3t5DpbEVJtMVU3ytcC",
  "key1": "5DCYMrAezrQMc6Sh1W14MqrD5v6gAer41FRdD5r868HpkFmLMnAN4uLv7Jj1FJpba83WNtAxNwwMeTwzhwEHhXs1",
  "key2": "2eywSHJqAxRd8GWkdUwqKY9bsy35HYqwhpkHAC9t2Q4z8vbnoCAmpxPLtnA9UW8vCcDquqbfWZww5n9AcuCxpGUY",
  "key3": "3fmpNVgUmU2rz1nxziagiDUHcqHDczj3ZYExp3B38dLqj6QbWyB7kDZhmpX1VvDohL3HhnmawnVTmYdb6dCbdcWZ",
  "key4": "Y9NWmmZLnnHE1csB8un5kgSMiiNktoKU8refVfNvhvN8fRQfbR1WkmW3oF87JdAvXbzjTEBZAn1ZNgWavLqvejK",
  "key5": "GfzmSrmEcaNGgbvZ2oACuZNoszDn5W7Z2RR1iZk2WuvKGhv6DGNS2n7oYtqBanr4nCJVnaXWDbyAZgHG6VQ7tYZ",
  "key6": "44ZY88vf1yXVxUoErdCw1XGVs9MeUJ1wod3m7P1oAmqVWGN3AGUTvJzNKGYTmhzsBNERPPru9rmeZFWvSt9J5SvK",
  "key7": "Bz7aLxdUDWCmLYLgxMmNorBT8jeBYjgduBwTm5yqMuua2hdoP1J7CrzjBNRS7tU1d9Yv6apCb1hin376ma3tmqa",
  "key8": "62aeFNJQiU5pNJ9dDz7ZkBN4MnPnbCcx2kyJxPehKEtX7LBvNGteuF71nGrbw2K3aCNKRaew11FxzTLWofuVrgEN",
  "key9": "3VBq26PYQYwi5ETbip87wRknFH8X4f9Qn9qE6Hck4A9nDY9TLC6Dx1DBZvGgAa8wtbfbKTWh3HspCb9fZQ3JBw7y",
  "key10": "4rBCx8dgFHufGMZz4HhB4rwe8GitE5XsW3pqVpi7xiLsyK9CiDBrV1bypFBdsiXoG6ajKRN3xHjZQjpusQKgEP6p",
  "key11": "8R2EBFxLGpxvujkTdiF8XhpLrvkw19BsuKNv2z8CKNAYzyFf1LKeegNyxyFzwtko2B4jW1dTZ228Ko2G1jXxd65",
  "key12": "3P1smQ9FWhekB9gZaz68MxhjAjUog83xVVgxFCgwPG6t6mdPaHU8BwhFibaHroMVFTdoZtzqABjouzJA9F5yhFM6",
  "key13": "4JCT4udwvZXsY376cx4VphY6mqVu2sBESyGMVbQRciZYjFSJ2QPDXYiqFDTXacrQDdnQt9cMnn3ZahEaBPYRMzkP",
  "key14": "46fQSjkBnuzVrYWagCMHSNTMhhT5zdXYCDTEafzhC7xH2bP5n7KqHc8ZiLfJChQZXB5U9urMdMGi7RMa3EpBo3Gi",
  "key15": "64dHiKhGT6ovdN6iVriU5sXKSSxCtgavbz4YSUDciuXFYzysmy9BDXiLzHPqaq2kbisfw1M1gVYLNBCgx9ALyLSj",
  "key16": "58RaZupqKRtmny3r93RuGCff84tXZRB3wXaMWuPUfcSgbiYo8EA7VCZwuegMaJhTSteioPjKdQYK2r9Epe3Zfyg8",
  "key17": "3jD45LVDpLFsCMi87pTHrxU5ePVcW71LsuAMXCQCi1yvN52ia4um7BfZtKsUmxLufjtutrUeSWNGcdeNH8uUBkXz",
  "key18": "3sMfHpkZcM3HFZdDjPs8QjZfaRgPYdxbugVfYZr2tqXrFvAaB9kDm5ahJYYs8tCbZ4FjzKheNu6LeqQjimxGMSUc",
  "key19": "5CSM8fMYHRBzcXRy9FTij13uxGMV3NcHB9XdtNa4VFZeizoZ6FyvZspP8hsBiD1RNri7VgQHocEYcjwqUM4riKqw",
  "key20": "5hzmQEJ8TieoCz21jeZKaxy1fsLH93L2M2DT5pVuP8MRL3L2T7XDoNqUK1bwnhB6STxmJaV9bDJUymyu5X36Mqmv",
  "key21": "wBoBasw91hvjfHSihPGMVFKedXE58fnPPMvCyboSCg3BELmjLVzCbev3k1nNmnSgJ1La9pSNPLCpc1BtsHgxoHa",
  "key22": "23eEmY1j2Gtnq7MDU9R749Ta9kFRjuAfTg1NWFuGqAthV53cUjRk2EnHHGLphiNRRq6N5qp7P2Z5YoqNBWgqTbgX",
  "key23": "3uz5XfvfmKfuo84Py5CHPmyaN3fVSuJq7tjNn6zyj2rUQbvASmbeNiwqKBLqXee7use8naLRNrBFj7RGvqWoxNCe",
  "key24": "3D4deay7AaArRbTCMsCLxpDw6XWYceu3wHDkS3RUCercXx9SV6YPx498wH2GHdSbWNTQmhPwT1NcHN3ogGycUg3M",
  "key25": "2w8gxTceHSRTEMPoRA3dV6jg9CQhcQTXy7z8EmxQHN6GnGe7vRpZrTPLcNFmzcmHid2AixiVCKrmXaxmvLd1ddgZ",
  "key26": "2AEt41ddUEBMjirEExPS6rWQL5jxxrj6RkeBiHVHNv2MiXXRo84ZAz3Fd1yEhFVbZMpvie6p9vD1sy4SqV5Vng9L",
  "key27": "3TDnTdU9uVDnYR2VkR5uHTn9v2r8gH6Jd1UeGTYaQQ7MsyFj7JVduNPd5AfYu8StzcKJm2MRrXQzKqoqfAeAYbfP",
  "key28": "2rU1MyXTZ1UXmYtFP51KhxzgsBWyE9QxZ88AHMqxrhZYke7wVMVBgGBT3GDRsF3k8JPBFRQ1VYBc7xgBJqR9K9yq",
  "key29": "5SGPyCq3FCvcwiezSPpySBj7bcWkUqGpMQqTGsxkx2KBgL81WCLs7w78v375wzYMgghmzWUzEdrzr2pLxd9gRFvX",
  "key30": "56sUQRC1hjZkKxMS3BR2HZQFAVtq4Qq7iSS56JWLuWeNbbxTxJspj95rJdk4httYH2aciM7wq5WB68H12Ds7Gs7H",
  "key31": "49ebwSJVf4Wubxj6Qfyp9VpgtB4VbZHZ5LhnxaU5SHWHrLdx6tHc9LTA9jefGDiaiqk4ZNG2vvs2ztgnGzP4Facs",
  "key32": "2dpGcwN3m9Fw8idttUTG3piZ7s7cjmkE4coEERe5u4drfMxryvyGX8fx4qbKJrGETdDXiU8xhysQ2MZHnoYmGsLe",
  "key33": "4AJY6L5h9Feq8M4CSfSk9u3SpU3e6tLwHapGAq97B2ZLzhRe5tZdB2iiAunmd37GWaPDUN8WrzZubcupGZVcY1E4",
  "key34": "2BaaGrPnHepZbCZpvKoqVFo4XhsSucv65BaLFk3vArrf82pFdwXdG6S8cJygHbdsGEsNfDVXTpXn8sfrH54UAbc6",
  "key35": "2ZSftLu8ZNSxHJNPqCp3qCj54uy25uD3o3D1cpyqsDDDdb9D6fE6A21ZFN6xwFgDWPJLYL8MiJdN9DtugEG7uWfi",
  "key36": "3QK6NhvykMr33Gz4mZDd5czQ1i7uBumDtkiWdaGoRDNHFQvoNfN3axMz3j5LVhwdH2jihHdnc64N6Lm1dAUCiYme",
  "key37": "2qaGPLzYWA45SLVkF99wmSyg5wkjqgQTKaNNtJAGJwwtWYsbMLwTKgDKGkFbTfUmQpYz6DaNTPrhDQeRLnFX5QyC",
  "key38": "3cYhqQoTwEwegUNQC1smMf7FnpMppphpfWFaNBJJgCGioYpywcaucGJnxheScr2Yxxtp1aQQXNaTwqWsowZm9RzG",
  "key39": "4PM16ThzUNC5vjxBVxJHuMbnwfkou65BdRMbU5suhmpiCb5kGUAEAnT3vW5e41eSy4BqpMW9bmj2yyPcQrUst9fG",
  "key40": "4dNkXZCvkkCvc4FEKYYeSL5FQKH5V6LDLjgPX1aR8ZpzagHxeHpsYF3PDryxtKWTYu8QN4mTfCpPui1DyeN7WVU",
  "key41": "4fnMbJYeQRkuydohrtb19MT76y34mFdSDyb35yxKkunUGKvBtBbr8v8NVWYLiktutknf9eiPwJBfhftBV46EZ47T",
  "key42": "Dtb3xBvqRcZCHXhAgUDphqRKJR3g1t58S1Cna5Pete2US9WH1jQLT23agFsfsojWuTrgoT5KkQaeGBh2uwJp5Bi"
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
