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
    "a2JGQRTXt2N4yNG34hVPJfU8b5dGnusy44rmLUDVsW2hL5LGbqgkwn99wPcoq3MkN2JABFT6W6WLc2tWm29Aqr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQ5WffcRJKkL4dMvVBJfGBANSVp7viD1nmYZhVh6N2JpU3TvPNH75dLfCxcpw6LtQ6XBGLZHE33MD8moXsb6ynf",
  "key1": "2CeA7u7cUpruWNouyk4wC4jNAqJMSZ8SpkfGtsLM6TAkY2S6nj3fvn1RRAFSKUUEqiQbDmk99cC6Uep9FsJHjm6t",
  "key2": "2Md8g9bpNg2NcpsLcAfokLPBv1gH3NtosQeAqcsgGWwDtK4ywbhi7HPLsEpnXMR2daXxxYPfSc43MkwiXsouZmR3",
  "key3": "4Sd2RASHz7S4YGsktGoSoaBZb4RkkDWYVUw2qfa1dXWgKmjr1RWo5XufAANfZUsaVwigfKRTRZqf1QYJbCRSJRjY",
  "key4": "3pY8qvRDVpJFXMXSNxscJ2EGvnqDqv7viVF6g8456QhfFU2AsVj6Rbfo6rUovTxBngVgGnmf1EMVZKokjvtquGZK",
  "key5": "3vvVnGYVW9NPDJQ49naWo8PTrq9sHuPy2G7AQRgMNyMoQarbuUMPNTnYxDqveBfqSutbHG2YFYD5Cp5iccTQFraA",
  "key6": "3jCVhtkN46Unfu2nNn5LFyqW6f1AwwoD7CyoiLBWgnR4nGsqdyKFinyHU1dDfUMZBWNxzesEuceL4CXvCwsF57gJ",
  "key7": "4NCi9CrzJpK3cx3jHs5N8ui5L2nv7UnUNCQWCax1bVbvN3Spj8zTRTMKk58DnZi2Agcrvhm1o9HpgepgczifPCup",
  "key8": "3jW7ZT5qcYnma5aF6FZ6jA8ZHwuW3psZE78FS7GkPYG91GGsxy3A1YV1qBbAipd5gcSwmXDrVFatrqjL68ST3GKY",
  "key9": "4SY9KDGqADGTB3vRXKRkJoWFoEaRrbjurnpUpBLFZbqZuG2zRHsg3qwA7CZgVLFmXkbXEMsHVLsXUacWe8auEZaH",
  "key10": "5G9UHWUAUT9KAf4t6cvzju8yqyqiAMuGsNsiAc6FoiwywYtBp8DtQJHDBfccn3dWt4eGP4rwLCtMt8KXbUFtSxcg",
  "key11": "5jpTTry9wNWXQVAcbZaXQyBhjqJBgS7ZE9zuj7ym3ctz6BiD9ahrDbXukWajVeaGCtDhscVAZSyjpbp8B8bpfg5L",
  "key12": "TSDgMUGKHA31zPrKbcQVaKkjuDEa1dRDK99uLDTG5RWVBB4wGyaLynWEXVfP8EZxkJx1yVM1FyCcVTNLEkjst7R",
  "key13": "2fKGJKSeHcSFzykBEZBNw674sJQ3fKKjgnbNHssu6rpcpHMW1oxMUkAACdmmPQRcRqLdxr1tNasEief3gBjYbqgS",
  "key14": "4SB2dsp74ExqUnb92Ua7KTNqLwbAqWuiEGsdqzVUx7ZiudRZc5MCuMJchH38bHEeGDRsfhks3tFo2wQxxYJenT6x",
  "key15": "3TdNC4eQqWCZn7D3wjDMnPNpdNVPAC9gmTSPmDx33sVZKrtFrvAwbut1UpfpqX3HhZZ1wcm5BeXcKaGDjGheBpB8",
  "key16": "2rSmxpF9sVNdnjSsjRTWBJqChtXrx2Nn5uCbqDbJEaeNCVyxKFhb9DHQ3GXctwGfCSxWKct5fAkoo7LG6kBbJaWy",
  "key17": "4ynJunSPWZXcSLcDLpBE2sopHrvmMaKKXHu6BGGVEFpn3jaQ2XbzjKq2PuQG2pou54EDEsU3qTM3PDbPGaV9XrE4",
  "key18": "3B1jGDWTjc6F5Mrj9nnxofGCiiQQJHWWxKDSzqUTcCQsQhP8oWZAaRyeSQm6Zk9uhdhGY5XXePBJoXeDUBBY4cEg",
  "key19": "3WFqgFNXmZZV1rB6n2XftXwWG39pmgatzWvgg7sHCSkDyqHywdNqwh5GFXVGPcWsL6iLUJjbgEfWVtgcuYSLsAdy",
  "key20": "3czgbBEd2h8ZsjnvHJXQ2npAQRgxCTicVPeSV5xvXQSgr2eaU6Vt9BexmoEBPhKPVpntenbDjBwsBiQRwPPU33WW",
  "key21": "5x8YTtqLNt1JoqYgB76tX3UQWhYLQP2oCQVJ1wkbwPiu3r4xTGXp643LsREQDwtc9Wyu3Nabht4cAuRVoMdx7stT",
  "key22": "3vw9PUVP9J9SdwAvD2tjpXiTvsXNZBNE9u5eDpzHEHtitBkW3feDekfDinRMpQ7NUo2b7hqz6Y9xgym4S22rPpec",
  "key23": "3WdfMZQMHKtTuhjuLX45zDCAgdTsobp9LBYeJfcDFZTrohn8X9UFYCcuhAHGyoffj8sAUuxJkTvJzm1La8hBFKgb",
  "key24": "zw3SRjcpt1Lzutw6ri6GSA8bgkEfMYYGHDCLteTbdXiZbJTPDu1ut5qmSPRs1zpofw95BK8kste5f413BFT6Svn",
  "key25": "4RpmQxHtzidnqrATyPHpj2zYbhL71bSse6pxdPJbrAu8VMcU5ZiELmBRCkAJVpM1JK3CvK1sYQ2anBytqwP2sL26",
  "key26": "48dTXgRjxE7nVnWcFprUnKYgfdaQ9VozouyEJ2wnQGYdorbZAp8H9rLRwc91vHBiix3zFBPapqMMSaE6XBWoiTmV",
  "key27": "3cTXdtNcz4hvCtEeg3kT7t9rkD4QEPCCQKEWtHu1N1kTFg1CX5NFJBodjegcRafXC9KPfKQCcWLCwL4BgQxHB7Qi",
  "key28": "UnMeT5cXJAyebJJU8Dwf9Nj3aLtzLVXu9pCYgYwmpkVwgoU6sXgETzJEv6Xq1hEXSpXB3P2FFNaxH34LuMe7YZ7",
  "key29": "43wjQL4NZQ7BRLZxshyF8ckLWCMUNyHpuRyUNAJQkUxm7H5dNnTNz7FW3GhL1jpQdVT1z7C3EU1b1TczrCCgxXXZ",
  "key30": "4y4UVc6mE8vqXFQx5sfkCg6D8kW3C6ykeEaYUQ68hMkXQoNxt9znqoqKnKwRAtioSNpPGZWtjdpBFTPyUCeN1kv3",
  "key31": "4LVwRW25QjcdCuUtZn4BYCxDcy9HBq6x4AgdW7r7vkqPjpBTo2XVbkyEzuHf4ybSXCtW9bQajKkCWQpsLHsxxmEo",
  "key32": "5QNnJg5sUEU2hdGM73Wv8JdquChotFe6ZSmgNEYKGXiLzwXgBanc2jUEz3AwFhpEchBjDn7SfiY66UDcAtZsVbdJ",
  "key33": "2UcDa9xuPGnS5zQ7FeWqkcUZuTgTc48msF9UhK2R6yVRsRQX6jhZ7grx3qGGFzSEzea6Vthhe3rdzxtPaKxvDMeB",
  "key34": "23ukUcHDCA3a1wStvQV918nT47HUnDkbHkhVYXkh2mW3gLkFjgc2G2Jf9XZvxd5KV8b7a86QZuzi3hSi5emNqxYo",
  "key35": "36KhYCc947fjRaBew8pRX6YkQzT3EGcqQuUrDtmBQr6YKrXSthpiKd6coS3LRYhLAQweaPdnZnmWiWYpMbQkJJfr",
  "key36": "5ZSEjyBoSqFHbTn7ri5ZeYhS3nVxdcZTFgmo8xAcpyQSdTAeti6jax9NXAEdgNNyAWESMc2BzVeAeMUcGzJ4Xx6m",
  "key37": "3ynj1Bd3eunYwqRpbARzysHByR1FJFn1Y7eeRTWQDznsbjPuAWAueDCrmm38Hhh5XopPGCXGkhKscs87nSFzzBYD",
  "key38": "4su2KGE5dF3joJajDJn2M3ZKoGRnq8MqaXrz6hK4eQcEHoiXq8upu2BrTeqnvLLG6pZw51VLakgoyfuzkYjYzSHV",
  "key39": "5Kw55VAKVMzxWzc38vyJ7vzui1kjbj3C2asNs15WK3FVXquuhfyWSibiKqCsfGCHVemgYP8VFUopP3ZUnUrXpboW",
  "key40": "5Y3PNeXzifNbY9YXdMcTbdHCJdYzmEULbsJyV957FPiibhquYDyffGyfZTuW7JT7Jg2zxEQatMeYXN8zqVjabsLc",
  "key41": "3vQ9fAUCaB7NL284h2QU4pjHZjJFnsGxjo9mWfxQ998Dhzm6TMjbEQDLuhK6oEaiR4hTzGVysTz1VMVkJfRhRSkh",
  "key42": "3YK3Cbd2Gwu3BnAPpRg982hwTNjF6LAnLf79BcKRaMrjBsaV9kFivupZ71L3Xfs8ubvXDXaS8des5o44tnt5ir3e",
  "key43": "2rz3C4J1kdH7kVCDPuzYnubsfwuBrLbbVn7nGm4xxwnby3Kch3vy5FUpdXo2ghhYRPDBn3sA8BNKk1LBajyZTogL",
  "key44": "aHgfKb6Mv6di3JzZRgqhwdxXSJAYbZcxCtXEcpJ5wUnkfEqGUMZhzK2QYPavRpHsNaoEhQ9fe87rnTEGUkCwj2S",
  "key45": "5USy1KLdTfpwUCik7wQ2iBtYtDT3vKFavfDftczRy48bNG7j4qBSphLmPEVVMPWd9skJ3oh5zJ3pJYP9fzCfPUwd",
  "key46": "5hMfvJsmkpH1hdnkad5BoNZSMfEtE1pi9u4odVajDDTMABprfTgB37rBppBeD9ddh466YHnHLj7eo7du1Mk1SaZB"
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
