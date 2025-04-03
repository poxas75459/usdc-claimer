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
    "2e1FrPwramSytH9Lxm5535MDMCcggsNCzXEEzCS5Qa89HevhUcVtgBgYjJYc72uyoC9BPKJYPPwAfg14X5o4gYJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hud5zWXYGrf5xZuN9NyHsq7hfjmwLuW6y8nef9jTecaMz4cb7gFQavRtPHnowh16pCNPLrmN8CcerbqiTsER49",
  "key1": "44HgyDeX2btNcceU25vyNrqjx4U3Aj6WshJybfcsMgGS1k7sEQ7WCE6i7K5cYRZ2DD9BSxSGPVFF3EY2wmtRTNq2",
  "key2": "3iFoobMZz8PozCvsuDLoTDTd4fPnN17UDZQFgP5aZyMmyN5XsWHMHiQ8c3L38jgAjrWfsM8oSQPPy47uKNkmA5pD",
  "key3": "4tzTGMMDanAf36g3tR1erWbwa4zncpJuUKBEtSYTkxEXd18JXse1kUTVeGToaRvp3Z7PgYd2G8XmqzoRzNRrDAQo",
  "key4": "2m786qhy6hDY2T8RN7itwNqvhXhShWiN25FbLoHSnPLK9kQXzmXA4tQmMYPvHD1UXgMNUsB5WMXY3HG6jzGVoAin",
  "key5": "4jR1CPQz3WDfpyJoQzUoSJWvU3AiuJ2CoMqpHiGk3cA1xrmfBZpLi46NzA64q4XuTofqv6qxyZFtZFDsofa9BAar",
  "key6": "3U4yaUUgCMXdWasrHGgBAr3yUwc3Yav8ZjjZqMqhtdbCvxNHqHeWpFPz51cH2EbKmCtXAVhkPeSfFiuHwoGRGwUe",
  "key7": "2fEPPNz7hmrFrvZDU9voSPfB3rVXkcneZgBJf1v89NzWGjxgTzXF8TnNjhDDqyEDYCyJYLeXYX19HvqsdcbttV7G",
  "key8": "sSUDzwuRry8S2xkVxYAbJ6sGD1hUaZ4cuoFi6YKDJm6bNxpVRCyR482ieHttr32wUkqDUygUZBwotdy25AyUhFN",
  "key9": "3UFgiH6g3StimjZ2Fi1sQVwQJ2WSw4pn12QWhUWPw5gsuUJeKbtTbHaZPyhXHCYo4U2heXFU4qStc44WpyJ9NT4W",
  "key10": "5uPX3169Riiq5xfYseEfdSkeG1JogZ1CQraScmWSV3Qk5Ck96HDxtiYegFDwSmpj5WUUMdfFzAGeKwyoZrysEdoh",
  "key11": "3nytQpFPgEk6nNPv7M6KVb4aZzUJemUqh7VWPChCSQC6QU8cFGFP9sNKWqxSYQxFUd95HGUsxqPGYUYE9nJtgDjw",
  "key12": "2aEqAD2sbiHN94syeqMTDjbXWteNMxS9xuVpMtLG5RDesuEv47paB2rECRpU1yZztMjL9DMmwPcJaKdkxYnZ4qjd",
  "key13": "326k646LkvmXKMDokUQjy6KiD9b2tMeHZTfk4YMbGvnHPYHy4aYhuMefHUMPJTJBid1xGJ68y2h7fimrbizye47E",
  "key14": "5eFKisjfh4hwjFkguQtwbUsaE6MS5bnMMR2EX2hBi12J7BcrAuMgtcaT1gE2NGc78fXTjD1t54eef64mvJyJo48j",
  "key15": "hWYpYzgfrkaPShRMe3er2ctKJNsUs82MFEJwhd4xxi9WYLZWnAJ4s1S4R3G7Soh4hDgEmmNff1y1ihcMB2oPALn",
  "key16": "4tJ5ZBe4d5WJb2Ezu8b31JKNJ7gAYUBDSkdazn9xTcspXehxvXouwdiFq2d8FQpx295vRVda2B9pFUUM1bqerERt",
  "key17": "2u75WbKPn4MGGj5L6KSX9GbeavvfCLGrTH7wBcP5RELpZDWEVfeWWUNSwMoynSZfdM5C4c35VTQAK5ARnKBFN9vM",
  "key18": "5joUYFp3ffjsH1jx2Wgiy2Aftef4iSYg88hPiCjWUjRC7YMBKJj35vRLTv8DRU8mByFCfHwfzLYzjJo25xEvAFeC",
  "key19": "uGJ4MRJYcxwvzEFeFYM4tDbJKJUY2soc9EdHizKTyGS6XEyQBmKVLLmhjb7za6BT9zL8rjkV8o8uMXHVynqGhQT",
  "key20": "2ec3v2huUjAzrPZEJYY3P42yanWGe6ELJh8nPCkRVfeQEWoT2zHz4Qw4ncXA7uU3k4Wgi1YYQ92UH8yuvqY23duS",
  "key21": "3Hv3DR6QWNtQTayUZJgqRm6XHXsSEQhtgEE3SLdXE5J4fgDJdyeMiS91revhhNkjtXS2V6RT94txLDAsnk11zdw7",
  "key22": "3JsgreSSD4hmVCLHsWgCB8TrwcgtcpjhPbM2zAjgr61YV82kHw5mz8ihRmd8ERvM9uuHC5kURV9eRkQiPsdvjPgR",
  "key23": "2uMGaYoWdYbvTBb6ASiogRSVLV66FqHAZC7wcPEYEuchL99t6jAafmqeJpFDK4WTJDmun1xyZXUg73Xn18t7WRPd",
  "key24": "3aSyAyb324kgp6rCE58x1bpPvewu4pcGUSaC8sj3DGnHQRE1pbqzZPw8wwuUYZvZgMccbhxBHTaoR9esPbCHcKdZ",
  "key25": "4Rz5ndW5eFTXPBwdDXBVhWHssfD8B4iMKRYi8nZoUkmSxMYgiDBaGQkXYX5eLvkjnjCnLRtedyv3jCopNobnM8mj"
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
