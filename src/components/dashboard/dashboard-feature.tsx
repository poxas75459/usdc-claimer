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
    "41tMUg8MrCYv4UzE1NzK2uhoEs6so3fqe7jXUsxVw9qwhALbRLTCwCVFx88qQqSBzo822VnFyhrQexfZNqsVEC1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ao1oUk1W9YTPD96fSH8HcHHmYfRGqrXrdUA4QEhzuBGfYSFtbzZBcLoNBHHGhSCSWXf5fxYugQWnTtuAwHeCFQH",
  "key1": "3rDvr82hTV55DXwGgHdBZqb8sDbwYsZgSAq1U1MMoxSvPjxPUU9RLZy9MqhP6YkotDNG4DjS7RS54mig2AmEnHED",
  "key2": "3xMcnpmoFgiRDtXowic9Y25FsxJgt9pWK234UxgKJm5HofBXPaQh9o9U1LJ9sca89PFm9KwSC9DEapgDJ8qTnJEJ",
  "key3": "3E4i8CvoxRBVyvrzKF4kL4zRWz9PWnsFnrQK3U4W6PpbWkS8RZcDXcm7wBCY8tPepcTUmQ72fwtypMUoa7EWfutd",
  "key4": "4UWt4cHWgqPvtL6fqU1EcgaS11JHuYL6UhAjpC3uiW51CdHnTsFeU46vHsMzFD2NKznv65k4Y4tLrkqYLwfQZL8q",
  "key5": "anQaGZyn85tRe88sZEf8jgBKm8Sop8W3pXZYXhsHnYk9iiZbB78JweucNoLBPs1EkSHotfBrENnyoEGzGqW3o9g",
  "key6": "2kM7rv9PgxN2iHCZXfdhTcRnkVvqaeUxDycrdXcRLsZcr1JYGXj7o21E1EiY4XoM8okGLnBhwT6zb4JHZNDNuGoB",
  "key7": "3gVa1cMUNyCf9BgB6kL7THTmbmmHgpM4ZjmZai5BQ4GcdnchyW6N66Uj16YgWPwVj33TNUH9sHurj9yteDhQcCe9",
  "key8": "3Y4T9wH4uZTVz37cLDPenYhvLBJQhSy4AioGbQMUttVT2vahMDk4haGL4zaduarSmWdKtmDyff4Vgng7VzSuPktL",
  "key9": "2KDxbXpvTRjAY4CR1fA8CsVu3Y1TJhRc9hVJiBVtgf662PX2SoNmcyTxkGuBzTGov1JQQgk54FizA4PwyKt5YVBR",
  "key10": "3X7FMYE9T3WqCW85uyeXQvdCArZrA1g2y6PYSws36E9468rPkchEpQKiUNQbJ4kHA8fHarBNUpEtCzg6MpERDrn7",
  "key11": "5V5XwkVCoNHU2htx3sr3xMNK6xXbMf9PThjZnWGwdN6smdJM8u1k1eakThqchvwouVU2WQ8anXharekHMvJdnxZc",
  "key12": "2wk1UH99CAf4aK2ai9AznS92bGTU9ELgLvr8gm6jDNJRgARrboMRzHGyKNDNm9zMGz2vMqp2U4DmPhFLFecpudXc",
  "key13": "3BS4nfq65xeQm8bGcmEAA44VUZheeZSscqfaRLRfQfMa2vUUxe5rftgranivmjSY5CXqGFqDqLBpcmvajJcMcto3",
  "key14": "2PScXUDgdkGRgBTx6bR32StGassY8Kd6jhQMHGHoGYsycT2Uv5KphhWfZ1BQQ5TkhSCs6qpSy9riRAnDMNmgG6bt",
  "key15": "dnobwmLDRDhzspzPuHYsErCRpjLg6u5L79NMbuNyrNZ65dDeineSuVkwKQRAMHZF639GUvzVVpLhgchChRUPtqu",
  "key16": "3FdyJN5G1CviSJy1YGpdpv4fwnrMAWk4Rgub8HizfCsdt2qYc4TjpUiA9cGxeKNa3n4G1VTaFA7P97hj2B14pH9Z",
  "key17": "5GQ2cTFgNTgvznhpKdx2SwmDk2iJKuyGyMK2P29GBHsJgGDKEN1De2skb41ZoiAgqJs1R6DbiCmoS5Jx2MYFiQQT",
  "key18": "4AsGbjXiCS6qWWFiGun28FKQtvgVBVz327kpUexR1VuWLREfkUyBw6b1iBhkt1bgBD9jh7T4XwSUVcRvFBb5swZF",
  "key19": "3UNXU8S5pNv77cKJRJNH6J9VeVXh7puqHVGY4bTsLFs4Q4VivkorSGahbNTHKCBFMfSW9CXMjUYV4i1TjEwM68eu",
  "key20": "4iMAj6hFxxGLCTqDy2ctPfTEMk7YjRTGD9eG9WaVYLNCewMz7zT1nEQtKWPApf8tAaFKwanup3cfGAPkJZoXghvZ",
  "key21": "3HcQEMncytr6BjbmiHb7c1VqSfTQipceT4UwAfo6VVm4YxbHLVwohsy3YekBCTBePpc4ogs5ewdpe1ULWmBpF5HB",
  "key22": "5Giy2rSkK8nHVGNrejMtd9DAFMj95BaFt2VGuKpTwxj5fgFV8UYfaW8DB7JBF6GLRkCubmuKwcLpeR7uLRjouQhB",
  "key23": "2wcwJUr4hKskv3DRDZPZBrbwffhpnDx7dbvBUoTyZ3xFawXnkEVn7SSPMV5XHvMjoHCxE7W7FTYBUYibw4pTBM4d",
  "key24": "3wNsMuBuB9CpacT3jJK5TpHR64YsWCL6rQ8ku3CAJ2jE8JgfEvw2SbUU2wVb1wRLskm9Lsa9XrNDysbMHFbDWHGq",
  "key25": "NpjYnXWBHbxPHrfBR2f36zkPwotWR1htJd7jwDzh566WGA8bHyedFqm4JgtAP5D1TncwfxkcSFk8YaKG6HT8GbX",
  "key26": "3jg5pFrCVmx3Q4VRSTq5QEwpvSV2GAZtr6UjwKLF1vGugyXq5DXEiDDNa1TUUZeB9XwsvtwxLFG6wypkxoEwLepB",
  "key27": "2yMC6VMNAHwD9YCHEG8sPos3Gknaadtaz9pkbtQGPjiLJfzYNQyNVE7DC4ZwbjBimsgwezSkayLLsBCJhajzos9v",
  "key28": "dmN5znqA2od2jAum3zKHabZz63ZfRWnq5eY6WCihPuus7b2Ms5y7sPBUTfU9BN73fbcH9oNFgAEzHUjrGd5YfxN",
  "key29": "2bZKQ3PTN7unFhkQp7ZrDmQJzRSjtG3GyvEqnZFtu1LcAcofo8ZfyuM2kz8WRj8gCpEV9HrAN4UwAVyUrZzJ3wCa",
  "key30": "5A8cyx5dw7P76C3ZCvmhF9Phe1zh4gLfzqvTwuqhwfHVGcNuUgSab4n4dhu8FtTLBL6zJUqwTrH9yqQxmZVvU9MK",
  "key31": "2326eNSTL4PhjsHz3b7cBQKY7afttWgHeEQayj2eBH3NgitQWNJYLU6jJGB2xGwcMfTu6WYdW2MaWrTus5eoqVNp",
  "key32": "4m3vkEKKNN2XB2DhRNyLpZuCdHVUGyUNB8Rf8c594sYAC3u3k3TaTxiuEbSse5pxeZrHkdKRccUJd94879rmXUWg"
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
