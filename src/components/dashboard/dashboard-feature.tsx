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
    "2j5X4K1RBxUqstXGRgdFjt9AoSG2Zinq7qVweeVVLE3ajUgaDDCQxByNSfRUJbzds2BcPVNmP8Kcf2JnrD5fBNTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhRCBuRPw2x4Q8Wp5qEZjEvuZkmeNjK6LAchnMKLokbmqEFRXVr9oLTVXPWxKc7D1BLUg97nUpgoyT6m7i2u46j",
  "key1": "3J4VRCj79RPxj5vZj9JahYU3cU2STW2Xq4diJsTaTdmvQ17TSD3uKoTDC3SPbwqwBrxrwpL8T7GqPiUWqBYFxaNn",
  "key2": "3hJ6WKJX2MsL32vD4uUKwEdDsum174QMLPVgziX5KCHmumGajA95zYefJVU3nEuYAHL4B4S6p6EgUoWtHBC7mhMM",
  "key3": "3Yru3qu445RStmcCGezZ33v7hdRMhtRCn1V6GdVTrg74pbgEAgipsyRNFYGzNsFTxzx6QuKNQ7dMVYpLURrSWTkB",
  "key4": "3mxebM6Gwqo6fk5CXhRxG2yWwTtsstTyNja5VmNNJe9YDcFgUiRuAMM5mhHrLYfVuHePfoV8WGX4PJnJAjQH2Nwy",
  "key5": "UzHnX4WBdgoTxufS86njYgwVuysRbdrJ7g9wjXkNdpE5bKfjGdbd8EzjzdrEaWuP4igZmyrFjGvukHFUpMDtbmV",
  "key6": "JnncN6ueD1ki5zec9VVXAuZXEKYJ2cLMYQ2JNtWzCPUKncBro56MuozJwun84JR8gMKuGFVT6vMTZXcYqewz3CC",
  "key7": "5HW4YMSjDE8pV9G4BSv5a5TYBaZrQmKyuUXvh67eVp9jzV7fmSXMksDqt8Dv9oy4mShDV6UDDD6nCa8xYokawHNr",
  "key8": "3mRqTAm7VLhRyH5HXAtJWAnKTq273bam2h2Vowvaya65D38NKi9LJiTuj7PmnsCpjJY8UGt5im7LzrL9gdCPyTdz",
  "key9": "56bmQNjFkAK6RogPKURU9GeAgwow5X2hw7NeQCvR6CfLxE52vzVEkXvsU8ouzjxKBa4jZbHtdux2X9dkoVEAcpTh",
  "key10": "3NZ1PpuXtMsSxpZ3vaCgaKZWo7xSPmeQBdd7zcYy6nxmUWot8zAzyHFdtKRZjxJZJbYjq34x91PrxSiDF1UxXhPE",
  "key11": "Va7EWsBYMpJQk6v8nw2wxJxurpcnw5iFG2yz8wp9Dv8kDpgTVaVv47wAENagghn4U5vNqtGCL3rBqtRpK75wERC",
  "key12": "54Qt96jJ8KDqPjR6treerprRbEnkhmrX1KUHFMHvoxwuW5uBsPkaYbjK2A9esV5cHsJkL7DVBTAj6YzhY5cQV7RP",
  "key13": "3s3WiBLhia1R3C4DwbzNKsQ37ym8xaaNSjm4paSPxnY6TgTZYmP2f241XqzUWhb7BVp333YajxNQudBakvyDAspU",
  "key14": "31wbLN5qkMmWBymTga7ArSGLHYxgmKatuUDTv9MxkMoURAcVa8SS4AkjTQNESmA7pGLVycAqx2v9SHSYyFkdNUUz",
  "key15": "5dBdeYsH39NXWzW1dD1nPKbW5MunZCsFHRp2d57g7zq46UvskbDXs9Crtb15adxhkC3WoTVPGwMKQh9ieVFc4g2D",
  "key16": "4t9Cedsk8HpYBFCx9RxM5GQhfgKoTNgZH5nFXZUv611FwqHhCfJ2yRPFXrX5fUS5wzEn1k2ccuX6c7JSoMzBtoat",
  "key17": "3iRcSNkT25wgw2uzvH7QRAinvTmB7x3ycJsG6GjhcQhgmng4xxNBzykP9CcjbhakBVBkc8zkQ3DKAyw4PKzAwPnV",
  "key18": "TPVy5rPRGGPrP1ibapQq4p7KfxSFeSwaArjjhKwQpJP4uST1uBose6U15YG2m6YTfhuKvqMynG2e9D25Sxd6v9K",
  "key19": "q7w2xtuRwugqvPkNczPuVEHNoy3qVKB2iysnnGQZMb9qXDjh3o4K8ZcdWVpq4ZSka3rvvCXqF9DGzsziCZUWrwL",
  "key20": "2Y5QSdDzEMVkcAsERGFcYWbL3N5sha9B81YnrmeEJaLTKsKg2vc9Qsv58DK62ua5rq8SBsq4MTntLaMPh2PhbZX8",
  "key21": "4Nymy34sxKVH7xo2s2Aj7x4iYNrziMcJ3K886PBFDf8g5T8DLdj2dWkT4xy4eShgj2Tgk6hee3KJokwYoEXjKLDP",
  "key22": "4AZyJ4vznoyobDrT6JGf6BGPh97wqQmU5LokDd5aoSeWXnKtLtpD5cqDuaSyovbhyBMWcgwjGFXJChFGs3z1Q94S",
  "key23": "adX8KVHCtASxh6ikgTS29Gpvneixx214vimo1GJqek6KkpXwiL2yH253na5BLisiwMaZhNKVbeEgbe5dAZmJMWe",
  "key24": "5gDoJWMPZCxDxCCZUp8PAFvrYPrc7Sc7PyZnLATV3ue25v94D8BgbrpDdHZ3gHgiAA4qhupXewpW4jDVhv2LMzGU",
  "key25": "5vNszmW5sJDweuzFZQjdoAYRWEEVpySm1pggyE9nogrcV6K5UaaRi17jvpNdkSMeLNGGkgL1U8MRiG6NGdGDnWHw",
  "key26": "3HApAmjWLLsXTF3zDPUEcy1EPs7ZyaaZJUmzA4aNmea2mLdPjHXKcZRBsZgjB1SXpMTu95qcSnSuruJRX7tQ8cEC",
  "key27": "4p6J3hGwV92UD4onSBqtpcHxA9EMtZ599VTioyZfYzCjFsmbcj4VWvVCLe9TgNeUw9QjY7HxEx77aarrtaGXrR7K",
  "key28": "EV7rLdF6LFD9RG9WYnRD73CB2RjGiRhgcoLJCPkXxgvj4y9H12cUhTUvwhq8bCEUj7ciEDmPXNyB7jwQYPU6oa4"
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
