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
    "sSdURb37XzYNWqoqnMkao8enZfH8VRAWvxU6LXrMHfHaw62hXTDRiJL7FuvQZoAWTFF8RHVBY8Dh5Pr8urDsA7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjXkMwzhNs97b3spqkv283g3XbzME3aN2hVUVqaL4w2cqF8JQEPHmsQ3gVF2rubDaioSRZRxDonahhcNFUDXXjb",
  "key1": "FyovZfDEvw6wC3x6jeknQTXCNxk8DmfJHNuMafcCxpbYwTcU6W5nnAz5cXbqGadR49VrfwzvGhXmY1An6cqfzDv",
  "key2": "4yZgR9HCJsa3hTyboGWCdgBU6d3VrjSbkXcKXcePMknDB7KQKjofKHkfVaW8SMbwYUP7YHWjPSyMSHd58ikX2HDs",
  "key3": "3qZHQjoEmLASKmv1fEyUHoyiWN7P3vnetFBhpU93ZHDxAsoVTa5ofAtkWcSSRjL9LQrLgDxkFBZotuC8aBpmkMtn",
  "key4": "47xDVg5qkikzfPFEmsxW9e9W4skVidTDGfA4Pg6PabyB5eTk3hzGRR41ABdajVruAzejF2nH5a91xaVghBLoCyXi",
  "key5": "2sCPLprrrh5h1Xhhkfz38ehHXtzVSrHVdpxeF73LD4fBt6t6uxRQL69c6pCcrgxVnipXuQtfPQVncUB8QAzsoUTs",
  "key6": "4Xevp8R8e19zHa7hFEngkn5rkYruy4PGYUT2yLfp6cgRXAmxHCNzMCUqU9wNrqDkZjwUX3UHEALi6g6DHPBE8UA",
  "key7": "3Ljm5HZa9BNDpJZK1poJqUVjqTTF3uZgkJDk1mnF3r7yXw5F5GHBoG9E5TgNdXvEJkZhwRsPJoa6VJWsVkWg14bC",
  "key8": "2NSDZ64GigGEN8fogWdNLjm62VX87wjdj2Lze1Xpy6iZugNu4AkJdqFKEt48CARDx7oSsjtYArVBJHxQLZe42bh3",
  "key9": "39vmLgP9A85F3QyF3NaVfcJMGh4JbyPWUNuNxshqrbjK8HqoXx87hZmBGAiprc4h8TSRY4JAxXfGw94GneVCaa8u",
  "key10": "52djg9mWruLQoAvEijdzZFUVUa25K7miJApRkSwb43mA5vFfYyBD4rzmzfGiiBrMw2PjVXkLG969ERTotKC4rujv",
  "key11": "58XbeeXVsoerky38hGHJuM3ruL44Te17t3C76h3LxkvUeV63VCuhDN4Qd36sRkUxCFRkzyxRofACFsv5PEhBtQRr",
  "key12": "65vz2xM9TvgsH9ZiRmSB9HfYWE5Q5j9gNRyxtWGacJVZVPwwbqkvssebmw7xh4Zn4JgLszm28q5dvJzdVx1iZ48e",
  "key13": "3pmr48L8gHyp9Lx9f6YZ4NSPJxiwLUyZQfqabMo2rKuLmbBSW2AYwAamTJQCGEhYJiahG6c95bcLfzwSFUsUbvX3",
  "key14": "5563RD16vopDhpPVJWibKrfqiDKYXSy1CqMWs7h3EgoyiHsYHTop13FcZ1NRQAmg5Z16A5xWr1XJGK1ZinkA5Siz",
  "key15": "4XPxXEm4SrAEEBcpooaondLqh5fTwn9bQN5QzCreiGgPaZsJ44dEbqWttwQk7QeMLqwHb72H2RNf6UwoYz5x26ch",
  "key16": "3PmtKNYv1z2DvcPPMYU6ar6kJUEtGsrpw1EVeaamrMcERkuUT9znN7JiBSLd3gfVEg1EDe874mVGtJ488epP5dd2",
  "key17": "MfZeCLUJ8343hQAYG1W5r57vzeMghP1nwtD4JwEHdxMwXxpHSo1kVeneBAj47muXQ7xb5K8paK8TNjeeHgaU2ah",
  "key18": "hBq18LVkFnC5bHKWgVe5dwACgu395dVSfH4BzXxhDgtYquvfKvGa1PpfuudYDvXKqTmuTfFqMtS1SuLKZ76WKTy",
  "key19": "wZMXSYJUtBzpubm41gESn5aK6Z4RaNtZfh61UKYz19u3ZAhP86n6H3xTPVVrmxLNmbAWLijr7AkaWyBwm99xYMt",
  "key20": "5yUXQ7LnmXRxiujMPbaZZnMeuSjeyQScqVFYKy12N769cbb1ez2tW29ZjADtJXMWpKvB6PZjPfXxuPKLWPVoKM7r",
  "key21": "BVwq4KKVdhsrZjQLhn37HkTdJSecneMechDbtdKZSdYNT8tYLyxDiod7srR65byweTBWaUKR5dQZbbjCVuihjJw",
  "key22": "5o3vMNU7E2ZZ9t7xk1kgbRT82HrbyKgSw5Vw9xT3wqKnbUcmLvWsmsAR8NaVsQFCvg5d9andyy5a1psecrGbks2T",
  "key23": "TYkYuugjQGAG9LoFBiZjcZy5TXef27MQYhDxKb2KwHjtHLh8rHpQHoD3kMpnuniSnnzmBNsbf63UVQcgbEU7Nhn",
  "key24": "23DznYb8tkwP9dBouo9uywqKqsUJdopsB8MUiZ27wXvzXB61x5fhGU25R1W3rHgA9aqe4SzJzvjDJdghmiQKmQPb",
  "key25": "4f6Bhd5eNba1etMRXgsDPvr4LHc18AtpC6jxv4RCfX465QjuzJ3A58Nx6yfaLFENBmnzmU5122GNvFa3PSyqqM9d",
  "key26": "4AKgcJc94PF23tTVGQ6zSbw1BqfU9NhN5WycneFrsikar1fff13xCWMp75LBKaaskdDYPHNAPNPqaCaKnEnSgFZF",
  "key27": "2ZJEbEtGRb4cKRCs2qBJEYdvonGgnHcMdfDY42h1NgzPSKyT9fMF265tenktkxpbjxZBMVSceSjP4kVoqtReC1pj",
  "key28": "2TnVeGcKFhfY7PXvDH8MFFPJYP4T1TacxZs4oMY6KpjeGxZd9JQq58BhMFTMsh27jW2ugVLES2fiVQkt16UHEN3f",
  "key29": "648vQ7ktrvALj4GvmQs1TFsumZCBczDuYzsvELd8g3VaYN3mbUcuZ7jVupRjxP94fk982ENw3YZAvmeUiX2gKpbE"
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
