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
    "Haszr1bRtXCdaaXQjAGkBMetw23n8b3c6xgRwXHdq7nDmKFPSKd8QjB9erfUu8NxxhKnZseDBr5AtFhVL5RvcH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnhNp55F2JrDk1XrySyXuMsCTtJLaJjcvZcrR6kou7vZC1yZExJf79XLs76c4YpWZdXh5DkSLof48jqRzt2Dz2x",
  "key1": "36z2gSX4G625rXUEzM4VzHHiFSXeNTCWd1bTpyi9Tfb7Ndv4aJj1F3kubGGemZmALGkAkpYdfsZi2CPxsRaZZTKc",
  "key2": "XCLaLU8iWPkDRVH8xHkEJEVrRcskPVV8FHZXVnBsKPS54zyXLFukgCh2ABnz3fpQJoNDcbzNKFhL6i7i6KSpfgy",
  "key3": "51bXR3hGYJY5KEcB4svM6E27rHPsRzaGfV855R2VVzuJcs8ZEL7YZBtCg4HctqGFQZNeYtw1tXD1u4Gftizio4VH",
  "key4": "3HkwmMSQ5XgfmCL4f2YowUu1t2a9SArXdtgiKd2vjz3YsCDC1WK4TBByxnNKbepiD8151JFNmfZsCoDtvRucY1WH",
  "key5": "2XTMbHupjyLYyXXRjocGkY2iggyg2C478ZMosPXPMomkGnEBsvvyxv5BHpGTBdYrz6YrJVrTiLQgUuNFfarji2hR",
  "key6": "5MncPdqroNqDB7ExmptBhdMwbpp8TpuiuNYnXHHEAf4dpyTLBzpjSaJtjkYcdgkxZq5NXjSMgNmZk2rLbCZbaKYc",
  "key7": "678pRaw5GTrV3mKvQKK7YA3NfV4Z6SeGtDAmwxB1R4U6fZBX2ZacdnQSUZ6CUJfxPoB9QuC8LbBodmMQdHiej2Xn",
  "key8": "pYNSwh7XSvv1wJJEiBECSXw1RHcAierSp3Ma8C3oA7Gvt3yA7puLrJXMvVCwb1K8Did4UxQCUbpbQbv4JDnZsqW",
  "key9": "2sNMH11VwEiwJNm4bFTYwZsRE4yrBxx6rswUiouuGpYZzfFHREf1znSDNoDouXnprz83MQu2LJX5UeGL12PgXkKz",
  "key10": "5qktmTr6Li4idJK1dmqBFNtajayJJABvSffTj3RntLCqUTS949cd8uJTqkcsSkcQZjoDSQa2NDT3HQPXx3kdmUJ9",
  "key11": "2S1mjWMSj57UproYxfYcXn4HjoxZkQFQxV28ge5uVpK5PytdoDFihhshAeuZZG48pBLFtJ9F7CgknbnLJRwkXwGx",
  "key12": "4XEJgS7Wf1W812JHe1E79iv2Z33ZBUs5UTXBDatap8NFG6CpNV5ebBiCJ6b4wkgatExH6cLCQuXsUNueZzfQV7T9",
  "key13": "2TA9ReWqGSfT8nnJoeNeT6uHiCh8mPyUv6ufFpNVdQhkudCWJ5ynDKj5TrSZCi8mwRkXGWPDXY6TKbiMWtvJHyJu",
  "key14": "hrMi2PzhftDEQe5U1in8ByRt2euEwMaDKFMRCyDriyYsANCzaKpQMcG2YpTjMPSuhTXixAZXq2rZPUhgCf1j57F",
  "key15": "4ZG3SzQeqC3RzjmvuDkCgjcYvEEFBRVx2GSRtPHo97TnKzNEkGrZ87e9K9usm3KR65bkj7C8rgeoxTDBHRgDVKEU",
  "key16": "41eLr9kyKkBQSbNqwJTx9k3A1XeeWLQCyNsy6fboHrmqnUq4dx47b7DAxHS76GradGFy9mpNKA84E96pX9rSjrog",
  "key17": "4dH5RXEedHDfdUxwcDN7kuaEaQYShKc5uZrUDAtWPWJ3kzUXx5kUuNmEwy8drrn7zVJsdR8kgDUiixz3zRdEQb2v",
  "key18": "2nxB1G4W6BSjvFiHx6ZrogXLkJKCmTUGER7oBmUdqbVKGmVQ4QvfRagXuBs747Q9wkvQCQXvkQbXS3nf468B8Jra",
  "key19": "36J6p4aVfgSkzvYiv4JUoZHtKQBncY5GfJWfsopytgervo699vN3HPAgEU81V2L64HhMoCzRT1xwoY3huRPwpu3X",
  "key20": "n62uYc1bFpGRcXCgsvCR7fP3Yu86MVoLjD98QSG3F78VhpyT39VPazaNm9oPucjc7zJ7BdWsVPLVXeCMhePX8wq",
  "key21": "47KpZNgf9zr7Rev26ZksbNKks6kmmJjpGZL8P2FLnyz2S86PAPQsricYzNoMUfXhyaM66mAfQxTGMnRVvMtiBGN5",
  "key22": "31yspNDGMxoTwNVLXBpZiuStJGWMm3T1rsvLdF5de5fMGGbCmf867fAcQvj4M2ubjpsajkjT5ETgkCw5tVFnJdxG",
  "key23": "8CpMW3XqMBwcRvfhfodWmd1ZVDDusxwB6WN6pBmJTk9CRYLWM3xkyBCcKudQULZYwTTZz7vsqX81QpUfFuULYJK",
  "key24": "4ZjHzRuXBgMouW4q6WoLFtG5fcbcxjohUguBRxNqw96GXioYQWyv7je6RKihW776eZ5JarHZpwDttv9CXxU6F4vf",
  "key25": "6iqEGdvvzPNoc3sMH76aVmwd22rGyMkSsPvPofykMHh6UPf47AN3gw3x4xtEMd7ijLdm4QZbLiDa7ejN5JExQro",
  "key26": "56PtZwWmypYKyVkXEYsfbjpJT3AKkNyqWQAGTpgxWYQeLwPHCjgfbDTyPEugNXsgRfreZgoEspZKNCZEomgd7DPp",
  "key27": "5o2JHx5yHWSSXrBuYNEahPGjF2mhGEZpy1TWwksvP7w99WtVU26ZXGCgbWVSB11Ni98JZDhAxuifoNcgj269iDR4",
  "key28": "54urDLVHTUeQy8QeiWRz7YSLHCby84DkVxa6dLA6Fo7WHRfTc2G5aism9WmcJwoZ6NjK6MmrPZA5MRdZo8JmChrH",
  "key29": "5RAX4hAuKSjfaXtQmFjRSnXCveG4z2uYJVyXcXbeXn7qbf8Gk6dfn8fv7Ej6qZ7FjxfbjssJsv5AJW5uZhBfjA29",
  "key30": "e1kEuA8ykqs8MhJxyjcgqiGWfinu8e4zS85dpcU8uvPrfzbSgcxdZAwdFLN2bMByEdNiggvS5Ezq9ACLbuPKACh",
  "key31": "2FKEzDFnrudHTXP7EQQtyy2j9ZkNvrwANXqYrCQFv2AiwKGMhQhXkj9Zxpiqm6UJjoMpFjWTTxtsMpMNdZbUa5S7",
  "key32": "BxSrdzUqXiTd4LWgrdjnaUthymQHXjRySrZPS63ghWUc3TsVJDL2Ew9kyPU2CdWa9KdCZpuqgVAAtHQJAFUnW9Q",
  "key33": "7XdWBdivZP1YWovkXoBiTdqYXML2rJoBWpmUkw9qc4Ekm1LiiWKhXrW3tEBGVyVMzgAjbuB5rEkVZVnMEzPFnXn",
  "key34": "65zGAWgz6YzNeXyKEcRP4mVw9BVgGWLc5g2qdnoVpSEyHuTC4qasak1PVkFy1QKkx2bsE3zPfCEXmovPjh5i5ZHr",
  "key35": "F9a5n9RRLz3FBTnHywriTavSi8TcpNGHpUmKfPXhu1zHcX9dvE5JqFrFLxCtxajroCjPgMQF4JEHccfBWmYmNnv",
  "key36": "4ncqoVrmegUL4oomqDbZhGy3Fk8ynsxL8tKhaRRbJ51zcKHsyzTh6erBtvzkTYRS4ZWPuzdSSHCiAeguyaDvH6zq",
  "key37": "45Jv9ZfhfVKHvXjJgjC1GaVArUy6y8JgdvjYwpc3p9HZ6mN3iRZaMTj1pFVdL8TbL5M2ADtxXVJFExvtBhSqAKeN"
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
