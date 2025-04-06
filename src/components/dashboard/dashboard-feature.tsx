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
    "2rT9bfSSd4rw6vmpFX27QwBzDiBuPmwhzDdG85nyjBCMo9HrtBSETHo8j7agQyqhkYpWDiUzUV6zJrViy75UC2zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xQiw7W5iNJo5brW5kH9LgphZiR3YbP1LeQRDZMrUCEwPHvwMG7a3x45doCEjqHkVTp5S7Hsr5Fr6pp3QC3ek4VD",
  "key1": "5X8vcz1gf2DsDLKXcPniUjX57K34pQdb5rSgJgnVRqcjDW2LuwNWeya4jpRHz4odQFqCnCHUJS4RadBvd9N2Xwq5",
  "key2": "waTMik97bBN9gVn5torg1Jd5ozc5iUBPrvmVmZE7A6PzroPLoEqAHKZfeTJdKdCDGddwyWwXCqXMZhaijXFs94A",
  "key3": "3fZv14h2JB4NBkw5oMZehvQGC1XecdeUyNzSTreatXpC8WSu9jUWtanVgLkWgxGegeuuQWjKoNSV7tTErk9XwRbY",
  "key4": "2JecZubVrXsq8sFywRBcrt8DbvEWLcWbLnbSnZA6T5G8inhC5Zq9Dgdr7craootCYNpwPvMgBQv3q2iSLJVn1dFu",
  "key5": "285u69SLozixBPpF2xUq8mFFTCLpDS2K54EsDxt2yVx4iLKHSHDkSgJFX77Tze9Q223U8JrEk8Gmhvb3pSe63Fow",
  "key6": "4X22YKurLVdWB6ch1JvFXgfJTS8fEYWFvPM3QP4U1vYX2d7EVYGQYLyZjYRHaWExjZgT6wgNbVnCzCtsjF5pxwhL",
  "key7": "5VfoabAAeo4XkW31eVH8ur9rWTEaGmdunSN2Dau7zcVHHXg5CFaPaqVCrmjL6tGiHKkA7VRYVMiBK2NWxojwG4PY",
  "key8": "3YJzNWYPTLA3fpjfrNAfDjo3MDwKJCsJy1qemKWFcM7yN8az4CX1dRdjD1iVGfkxg5CrwsgcbmHkeYUUuZuSHoWe",
  "key9": "3kcMeRKXVQF475oj7717p8DVkpxt1fYQbaqnUujri18Hmt7ffJUGkhH8gCw2yZSgYKUJ4WjD9v7iGu6QaSykLA8x",
  "key10": "3S9sEbYujddfv21eXpHuwJBEvsxmeAaj5qc4QiegS2UJ7nMbALhw4PyXgktEQiYLruejBgyc6dRrHtr1QaSt7G4o",
  "key11": "5D4WcANAaQxpZFaBsn4etBiPZzCkWVbEV5HNfnZPhfdhAcMYkac213gHsNXDYsva4MyzXhmEmedLsNiaExCx2kgm",
  "key12": "25ur8B6SGyygSaqMbxpHXHcum66gZvzPwL5GzjuvWyK1CJh49ceN8bFDPckWmEbc8DdsgKdt6c1FAfZukkV4wQEu",
  "key13": "2LrZPD8UQvjoWtXtnEwurseCtKx1bPH254nf6mPgaPzXqgD3zUKm9Pzx2A5mHxTrfcAkXyxyxuSweaiafhYt8WKK",
  "key14": "2wbm8Quk8ev5yakrbWfEajUyUZhNsrVGbEF9drRwdA81sWpqWxjygu7gjyNAoXQssmhBHdjHTvm95twGyRkn31Ee",
  "key15": "3n5J4pvHkL5og27p8n8RJnYSrjfYhDrwN9Z2WiQEdCygSBhaEHXtn6QbrxsP2mZrLo8TtXmcFWSAdFq9LwvN9YEf",
  "key16": "yDuP6PW9UTxq4QxH4qMrz3kcnJg4LhMjZ7tb9PQP2XYdFKaB39r8UjWsmuBrDJLUmCENHXkDhqdpA3Skjy8VMo1",
  "key17": "ZRRyUBXgkz2Vbxrduenx3gAxkjSXudmr4EuhKxvdxnkZZcm4fSrqkFPCkpQ88QT9FjeTw5CRgsPx8XN2mvsVCTg",
  "key18": "36H8c3YvWvjnUsYANgM3m2T4TqmbQQ9PTtUW8PdniCMBibE7qgtcEjTN4Rrp6Y6ELq5R8aeH9c7Xa9crJQsEGm51",
  "key19": "Tb3oLa6XJfDmt4pAHLxFbeb4AbxQYpGXqYWm6vfGMa3cmLZiTg5NNchrL5Y295cq6p7s3cw3ZJjgBFq5nvE3whd",
  "key20": "2BC1XR91vayRZfTGq2oEo3qy8b4SJTDAWdFgnsmEYJmQ2xcUdJsLF4riHyKsdpKzndcgNKuurj3NW6ZuwWnCJJmf",
  "key21": "5pk2RndtzRNekd8x24ros8BjDj6bxQGfh4nQhLbFsJDcPSjjcjvZxAWqX3uRTvNZXSQmEjVbgg4ThgbEtK9nVVn3",
  "key22": "2nmvgTst4yaH9cQJnYdbR5B6bWQK511aHcWkys4wJGDgs5ZhPnHnL8keCrKj3x9niGqsUKQdu5rx9hkh5YMQwZxz",
  "key23": "4K6JuPYQ3Rm6oGkKbwP3nL9t9TgAELrr5UjvDYzGd7v2tbGGBuUhs21fqrgTyJavynwQHYhygmF6F8PV7iKcc4Xv",
  "key24": "5CVfSuXcrRkM8c1jow7boB9Wwpa2SY7pC4BuYEK37jZQ18kESNDm1Z7yEvAJBqvXCwCgv9u8bM4Ae3A1JvxeQmrE",
  "key25": "5Q6kMzfCC542jLjsKREQiskeDR2SfoDKpduWmhTLqnx4wZL1xnBorxfDsm2jDKKsNFTBogs3Nw3S6gdmCSMcSMBt",
  "key26": "jDStnZh9XXmtfP5b4gRxTaRHufkJomPk55v4QQDvPDNCAUvXfroqUwgvMCHYhwy5cBwA8Uazsz7SVZ5HeC2y3kr",
  "key27": "3YekLtp87c5XgD2TGB54b99iC2Q8NRujqi7574rG5qf5wydNxBU2DhLfMEpPxS5BA7GXoEBCgzk9nj6N5N6UMz5i",
  "key28": "5aQ2X3bSVkJwGeYvwrg3suRWaYZdLodpVKPgCF3w4MsvUN9RFbBscSTyMwjMtvvj5KQNfeWbyaWxL2DYYzg9DVGv",
  "key29": "3Kfkec3DPYVRgs1DP8Uc9wL3J59YJp4sHJUhhPc6TSefhQVddEm9CaN9A2awR8vGN4GCvZaqPAi5dq824pvUsmBm",
  "key30": "3GNEATPBvxqJs15JzBNMDZNGA6PUbdfiBSfszGBjV3aPeQEp26PAXRWs2iKS89GqkLF7XmaGraovLQupWXqvWJvq",
  "key31": "3kM6GcfWyyRRQh1Ae8sbRiSRYQH2MFHnF495p8UaHVcgAoJteoYZJYEpC2nhEAt9HEUx4AacfiE15uBDxwrSkxDR",
  "key32": "5A5VSa9Qx7YsbiXcmtbs371GRkvvZCvdSyyqMpfvoAxi4RNKqqZvjSLpzh95Ey9yZA4ApXpBopDjugvh3S5nENB1",
  "key33": "wnPYMyG69ujJ7Am2DxTQuocemzdXygUyZ7d1AMxMZf5LNBTdjvuDBEsXdKri7FuUf9ccBo2c2dSYqrqLbnQYQHE",
  "key34": "52mpjZucnzaHQQCQ5gQmzQF8jfXkjALjNYpxjwwADXNqFg1VkLBK6Exf6qVQ1to1kUmHi4yQBmGkqLcedGa5qe36",
  "key35": "4cfggcNpVnpCabGdpPMBvsCEPHmiUDLD8yXMYVT3uYt19M9EMetr4nbgQ12SamhWQiU9gLKXAvsZbDWifkRgakwv",
  "key36": "257PoaN174YYD5ZhzkedDfz7K49ian41ZRVmUmZCWs8dXAd3biuewyVh8TwsCHdXuZRPHckDrvvGnFNrXZqZXcBz",
  "key37": "2A7a1mbhcaLcvTp7Hjb2JJ4Dnu71RYHGEZ9CmKSiZVCqbJZJdtj5KaSKF4HnWN5fJBhgNkHNZYds7jJBjv6VH2u1",
  "key38": "58ZHYpmNozrzbkxWQpjwTPz5KC8eNJRoapwH3aYw5m9XwzvNeiQ9eG1d145zTdqM3nZrL1HrgbXzEGMaHxA5gBBb",
  "key39": "2xXS4oDa6arkZa4jKpSxW7Gk3c35yb4NB94wRhLDHfqaBBUisPD9AiJh4fRMjRzxJodZPFWC3fra4Yxyicw4Uh1t",
  "key40": "2atMkEgTUc1UiRNuFzia56iLz67GVd8Aw5s1D4pQ8QVt1Sfz631J5oNqXPT4J1jUoL73bZ3p9vVJKFjx9y8adEpi",
  "key41": "26cgQMFBfJQQhEd3JBjeK6K22MTDXFo3Gbc9GrbMvxtRAgeXAGGWtSdpSMZngJC5vriVKE7BQMwyjmvKJZi59AWc",
  "key42": "zmQ6LH98i69JfhZHJb2FNTB6TmCzFe1HfRNPkhSsJhekzxDND1DTMGQ1Seks5iNvDqJV6ns92ga3qedzXmDEhQt",
  "key43": "3nAxqSQfznsRR2Czkh9r1xdfcUNjvM5RcYanLSChUM5W2nJQsXfpTMw1LVNMAPpC1H1mUumLDdBN78r9HyCzv9Xp",
  "key44": "4W54GEh6zZL1Zr3z8v4k41nRpaUCKNSCaf6DHSg7g9drN5ejqVcgHfBJLf8UvSUZ88F9evhsRBzEbPziA98Sfjxp"
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
