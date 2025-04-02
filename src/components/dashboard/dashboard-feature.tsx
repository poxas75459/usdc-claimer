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
    "2VYvE4GxQxuEtxQkqh85rmSx77a6JnduGkcvizXUdmpGY1wJBy5QkiBcJwgmP2g4NhFPk1CCKADWpsrK78D9VJcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eF8D3Mh3SMaJL51ArN8GxHi34r97ctEP3RbS477dE5ozho4zs4bzMGJR1v8uiuY2SfVJB4fqZKMsvgkoG5y5cQM",
  "key1": "4HsR7FdHF568X3k9LZz3L7btpLskSxESSH2PMHyXTjktcXZWwZMK8h1Eg6r2GQSFT8LzvU7NQ4rjkhyS8veYFBFL",
  "key2": "9V8WcPybY5ts2y7hkW2aHmcFuXHgWT5fTkvWLww2kgEbcBqi3nVh4Gbby6sGV68kPQE2msvf64ZqzCU81DjqtUQ",
  "key3": "NdPj9XNmZYQiz3k9mXX34JBVuobzsHKUUPnnbP8Y3Mo6v4WwvZsNC8Xrwfa89RZNDcy6uXWCwunorq1Y52rLjS8",
  "key4": "5iN19SMh9RNQsbY3yjD2zgGkTAiAcLZJrAdgxCjerG5QtH2mjBUhNKq6DXVoQu3ikoq8qNZrc3XpRWkPEDqEZ8Mo",
  "key5": "4adFdQt8P67FoH5dGt7fZGGRNqa4fWxxFRwBJF13Mn4LzdZQyR27WQVf47Sn8noZgCcboq98t5r8P717EDMY7Q8f",
  "key6": "2WsrcWw4X51ze3N3g5Yb16e39dx9JPw2nJZQx5vrWXBBtiLHWh13oLrB5kBHr7ZQ5oQ6VcKeb6SQPzdgNr4ERD2X",
  "key7": "4aACWnjdZrxHpNGRpXE5WsJjDAtDJdxyZESzD6B2AapEks4iTaBXLrUgRcvzvCMXGW4mFfC5PK4pxvK8UzMdiYyg",
  "key8": "512dJTBNYP6SkAfig3aUHiYkjRfSxoXptXGciULNrLnvhDp5oPPPKZK9wJuGGBgfTvN5u77bfsQQ6eVPQkpjdo8R",
  "key9": "5TF1kqKEfCDxLJCR1RrDeqddKnuEVPgFWarBGSMkDcpa2uDtMi9C1WM61zkZcd6LNrQGUTEZBKQXvumJGHT4PSsR",
  "key10": "3HL4YjTPQV85CCapemyQQhuDaufSKi18jWu8QNC3K5o96ytkKB8wnVHC9JgEzm9Z6q9HKpbEdjoqmyUhMhwspWex",
  "key11": "67F73rWCjDpKK3eVTPfLRLbKNULaYzBPvKWTFDwwX8PsPQkx7QyiybivppBVJVxtGqWD9oE7EGqHj4fXuBPXfLeP",
  "key12": "39idVboVrXMp8szjn65674wNf433JUX9fhPJPUFzzbfNch37PDFMWyki5RWz258WYiNYbi2HamKLnk3xXL1MvsTi",
  "key13": "uoaGjVmmGqSxCSdKfebpwPkGgyDFzRCKhQBNug8tFEcv356y6fCxaQoW8vEsQDncKhMZe5mY6KtCsqtsEvK5yPC",
  "key14": "8rPpJ9tEMfLAaDrbWyfegKDv3gySweyEFK3HiqsJ69ZG8SFgs76GUHsee7s32Zyxemgz43BeWo6AYYNAb5wxGkp",
  "key15": "3eyDxD3fRj8hFB8FujtohiqMwhgQS1MoEmKfU2YixLQqKtMLAZz86yLchLkm1nQR1mvLCjPVoV4JWU8duSsR1n4U",
  "key16": "5pLjFVPoH2D3iLDFLuXTjuXwNa4zpb36DmM72S2bu3xt476hdTmvmqJQi2ent9EqFPVBdtUVeL37eTiGe3ZuaLWr",
  "key17": "43hmH1TUUUsSe5uonSwFjgJYKt8msa6SBraWuV1dSFqb9GuKbz3MQbbbux7Lz8Y5TsUfWqY59geDKwePNnVYKUzw",
  "key18": "C7Hk5PFoKFprnAbj34QFtPc3Lja84RMD7UYQrLK6pAhBnvcPvGSKaHhqcxwfNpB6nocrond3h4Yitmbk85ktfbb",
  "key19": "2zkKqKjkPaKEZvufbVtmPqTsaFmSvckVAfhvTbdGHEVAZWcL1jBRYjChiabXCtN48PUYNWPZagRsEnUmgQjLNLne",
  "key20": "4AvFCgJoeQjhsBBBTXCscnGwvFjhkYCdYqkZ1jvrhyPRxfaDYVaSBTsRQsuKnN1wNpP7ykNPv34J1qrZSXNpqJUa",
  "key21": "n8A2zGHsh9HVGp7NyN1VMspKHNYrWou2eqBEKFWrnDGPcggpWJ6DtjoXcbUuA7ds1VN6DQgwcZTeoA2Mtji2cBu",
  "key22": "5zPdgVCHziBJXznW6cHE3D5tErQ7yATNFk9W2vqfKwFnd9iGwopvmHdRZZKaavrxWZitqtLnv5ij9ZUMiHkvCjVg",
  "key23": "2aVpfmjDhj9XPNxaKPsoPw7iXXuZq1HSd9sTN9FsoamWp2zapcJtkCmY2q28otH9kcNQgE6E7ppPtEYPWLS3AZPM",
  "key24": "3a35GkF21z8d7NUn43gzLTytRTZPp2zKUTMfbGUAePKqqMyEXFnxZ6MNdHuthRcvjcxZ318s1nwKHKtGYqc2LD1x",
  "key25": "aJBFtRhMB6J4DsTh7Dvfumiqa3QFPPA2Cp8N3YLWsW1MZduPzqi4K5f8ginwV5uVoUsfxJSAsCz4S4Y6Evjgpwt",
  "key26": "4RdJie8AeBE7253ZReP1bDusdW7Bpu1WjPUjpPXpXWrWNCEU1t7fnC3vKcJFHak5gxBwspbSWCynGtu7kYYWkRy4",
  "key27": "2vTvyKLoSptCZwAYThNnRjyMPHZhH1E1ReqZfTQFx5nBgGW3jkQhKFG7EYH2PsbWeFxRp9idmfs8XFjr2v3kh5ud",
  "key28": "3eDfC8JfCyhDxMZShWQAZrr9Tu4x639UbLo1X6QBTGDS3wY9BBjhxJVfKkwCgTL1h6c4CFeLHTsZr2E96Fwi27yj",
  "key29": "51FLNVaTfBBe5EDbh47vKT4dbhZzhYQx61tjDbZp8JHYLdsViXzozRkHGUWgdvuGqj72GbLcyHgjdBu4R33bD63r",
  "key30": "5oQfjHWvZweNBPmcgpnrYaM8QRopXHX7TZzEYziN4vXmzN7gRYrmdRWDARu67HVzTAr47zPZy4T3avJmAEPpPAJk",
  "key31": "2vFaHebxe6uxNeefAJrsjJX5iw1DjqoXihSzAbqKDuxRvkXDsgqToAe78HRncKFw4zd5XdYs21SsjGWcRos2Y1pu",
  "key32": "5dHameXFGy2nbP1PCjdhc45cLcevDrzvwKW4vduNEKqv6TLdYwsPsDmYmaBZj7VMQh3UzwqFcLMfRB5HPHjbfXeE",
  "key33": "s6Ky7nhd5AUatwR4UoCVRyuX1PpCiE22q65esfJ6xZDv4ACa8BG5ZCUjC7YhEj4fnWAV2veN3T6j1oD9u325dF6",
  "key34": "3FPkVobuZuvAyFfoFWSZmRHYh3GQVFHL8BaJ6K4TaSVJJHpP2eLEh51XdV71AFqauo178yDe3mQFv5fy7CeKx6ps",
  "key35": "51eWWTnFQnGyBW3xXv5i8yfkc5dKBhjZi3efKMK7FLDwgg4r86C2CM4k36DbaYYEdQ1wyBgwRV6SwcjnBLMXJZgj",
  "key36": "5gBeYVT4fw1XMtpV6k5LWGEHEWRx1Z5dHWyFuMNj58PtxqkdXukK3ub5VCDASQo7Nb3bCzbQ2RnqEfgcSSetnbQD",
  "key37": "55LSJCbKUjDFNrY5yRziSM71M6ioP5yd8EzN2ARNu52qHsbpNJA25bbd9AfkWJmrUwXJkQ7c5FZ2DA3JFRNWWsZt",
  "key38": "5uFmHfMcDkDyW17qZQ4DmqTKtNAeZAPGhKuhreFNAcSLoz5Tbh5HrM26nLkr7KYv6SFaJDyjagHDLDUPzFDgDPj3",
  "key39": "zAJXdQdxyuavhWiwVqXGK1RkowqmXCDNnUpLmg3HJj5zp7sMvopCDDHnMxJacSU5aAM6AAHmQnFy6e6dy2NpYnv"
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
