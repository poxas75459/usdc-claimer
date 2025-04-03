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
    "5dTbLpWjATXEUms7s6qSMgMX7ZWLEuLmBQ64jP6nY93KidstcubkjJkXVfff2WRhW1PmNKdxVDjt8qDe4LckywsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vfwMJZhsKYLUfy5LVCZNYCHvjycgqGcWFW2wVo4vw9oajKHaEVMzAa8K7H9SN2AcvwmEEFqWknLFtc89WnqhMUf",
  "key1": "47ddhiuoF1aTpso5i2YD5NML3cVg4EBPeoXfcibMpBKct9qFeu1FHjYSbtk7KbepJ8khwH3v5jygFXcfpEvDyPF8",
  "key2": "5ayQ7Tvx6zJpH9Mb33JyKjyDeKF4RE2wcGzNu77UiKsStE7MWmygNGjWvuWpHZces5Q1C9GJc7rarW1NtuSH4uhi",
  "key3": "FuujSkDiJzp5inBrXcBQvpTWW1cPhv7xqZgLqnVkHmucGWCPUPXxNgiuUgBcNN6EpxLJqbRYS4ZyYdg6duT9jJW",
  "key4": "37iMHTGrigTgZpHbQZyvghnK7TZH7SKFQBXGv5P1XdF8J3jqmqmkDhKNCdCw6MrsjXd43B25qn3Ch1XmDqzpkQGs",
  "key5": "2UREXYJ2soW9RgSEMNAJuR4vQhNHfaRG8swKzDXaTb5VSGy6bUAibo5cYATEFHkmcuKMv5YJzsBajJs2jYaSsW6B",
  "key6": "42aiLWGQPC5gNwi9j21H3XjqkYwkPvd5s2VcTAvxvSUoJ6WqiiX9ChwAKwRRzUQL4FPU8aVyYCZ3AFfH4SKQPEzx",
  "key7": "ZfphP1HNzPDxMDWAzGXttyfXTbdwCqC9ahdbTX2J5A98MphMAeG3XrwhVBsGKf9XweRHsA7dKRvJRGA8jPpF8E3",
  "key8": "2pYoKLhEsYXfLRP9bWPDvaaMWMeFpXMwNkty9cwacsDU31Eyu8LYk6jJJvDtSea3kRZgGCQy7V489mG8VLCjFn9i",
  "key9": "4Dvs9ZQvzvaW4MY6hxgTbNCeJzh9T6vjx2K7eyEovtuDTt1xnBV4jqtZXkXgVy3aqtp4pprE6h9aJzmGySE5ST5g",
  "key10": "4ot634qRy6gdA9FqmPLDMzxfBWxAo79Ysnd9SVAXtGrKzmTmqUjchhBRZsyLpWXfndmCxpFv4tBLpTbMxzcnUm3m",
  "key11": "4RaGwBum6RAmVF3M2bj2WoMrsHX62UgJeFguhL3z2odY1ZoxqHa585sQWpKBGc6QmgaDnpRL1Ts6KwvGE7MVXcxG",
  "key12": "2wKFN4RDxpx1LYWoqTkykhymRu91JtHHE1XzR4D7tUNxzrJGCBjUbHSt1pLypuBT6rsnMVZbCoTHj5JCTHXtbTQi",
  "key13": "2RMRv69paMPF8MDN4J8XMGx743SfuG9mDJjwG6aCZfcWbTjJdS67C7kvMmspqD3qdG7jt1AxpWP4gcURzy3baNAy",
  "key14": "x1KmhwY7wBbW5oWRtXYEGySE6dWzVfXeVq8ADnsafCiKSkFttG5beRmBcjncVHBd2ctrP4umhB2EHCRgvX2vqvV",
  "key15": "4TiVscB5po3ve36YYaMR5uMSUs2d7CwMihFzpM46o7RAWPwanjPSeqvKbaAuAAxNWZ3oBRaftdEV3j9aKsayCMxZ",
  "key16": "2eHMxswggTKrcS9XzFNz9NSo725KCkDLoaYkeovawimD7WMitoUG3f25HMQPLVQA72BPPjyqfQYQtgL2CyWnj14B",
  "key17": "4NF5L4pohkMchaqyZvSWiV98pJJ5e4rj1jPmKUAG94jXvK5ZfDMN3rfETaLynrE6TzJH9Wbhq1Sh2mHXW4gyvFbj",
  "key18": "5b5GHZ6zrauEiLazUn6fj185JHsn2CZbdCWJw9oi5UHSCDoEPHhsmFxpsz4X2oGyTaAUd1sVbRL6AfeJDW3DKmRY",
  "key19": "CsZukTA1kHbHaXm2D8RrV5Ywa6uCG5x2yF7WKVHDZKnAhcwyzv8umFp9X6MgrgCSFEGz9FKCxB7ogrWVKTaLfBM",
  "key20": "3pW912hfEQ3afrcXktoBMjUXB3eVVkuPFCtfhbxBuzN54ofrtiN5EmW41ddS7aTmLbr3vmQcWf4mUcWNu1tkzLnY",
  "key21": "15yK4b7kh7M7TZi3GQ3DdfK7e5cHfvYVEhsAtQ3TZCsw1MY159Ru5GiLc62rig9VStcccBJqk28gPDShZ3Wd1r2",
  "key22": "5Lb2D2fPUgGf1R73ULmSNJGSTiSvUNRFeZEhFi98FDa7dXFVmFYCYLhCE8QzdUSnbQYdeLb5wCSqGYfhhq9Xj8fm",
  "key23": "3mebps4zfmuiufnkmDWcYK2FxNtyBewEU4onkkyUu1oL4VH31YNoVovgGgkkYfQZKXDpLVSiT4gXYGda2V8SK6Bg",
  "key24": "67YuFisQeb32YYH4f81G7zZVNDkkAbFnp6ADTEf83v6ocUwvMZ7F51smZmrTDfTcdX5tqBH3W3spM9M7Kpqb8JrY",
  "key25": "2xF3GcHi4hsih2ZRkcGbJXeAmjibK6fKx5RCVn9jMCs3XjQdaBsDMoxnfF2WgdvfvEZieokAoVnkBUCa8F46ANDk",
  "key26": "5dmWi9fhAhwwcovGkoN3XFdp5wQWN1pHkTd9x4SNc4rZwt9YUFJ2qV27JE7zPTxuxEiQXip7a3rinMxRToCoVjBX",
  "key27": "5knZ2y8Qk5t3X2hC6pii5qQTLdiicD1sXBs46MT5oT5ybYJ4xcYKog2gefX5hTTqvRKYKJjav3uqwHVhA4M2eCov",
  "key28": "2h1mH2tBwajUupa5A77RfF2R7zD293NYdecec2vtxZcghdzk77wY2p5AeWm9jg3faUdYY4v589gVNpaUZWzEjYZd",
  "key29": "3fgQer6vQkZZ2CsvJ6FHzdyN4CyWZ2vDCgs5CbzkXBxHmrwApR4dRo4ZZcRkLSTVadTi4PZz4RywNLwa2qj2oQYT",
  "key30": "nmEvGg3dNcDTnDTrU3rGCcFtojyM4Dfn2iXo4VnS1nUhgRwVJuF6quEJ1ADh1cnpW1hGtcJJG8tovw2atzEBzVR",
  "key31": "2KMiVoAjjUv7Z2cDTs5nFEbW1KoncK3uwNVrAFtBXWFgTwNGDBfKTV7oCETH2kcWR5ojEoKZKu27SzDriQ7azdBd",
  "key32": "2F8ooDYHR9jxnJntkiJKK1MHVwvZwdPP1rKKYDWRcYFCWCD4FNHsm6avqf24kuyRUtXAZhdVaqQCNJBKuQPCawDE",
  "key33": "7BUSGwgLJcsVFk8Ce83of42ghLLt4hahX1nqTkpzdWvBgpP9VhVUFtALUQ82bKhVhxUC1xiUrLYWaRZjipF3SJh",
  "key34": "5rpA2i8pK21fuJ9j9n5FG1inmWqcCVefXhJ9fEzg3pGP4QD6axrN25BrnDjGN5drdD8QyFrPshSjbcDaAMZcF9SU",
  "key35": "5mqhzQbYP5EE2nxVjpLdHwYpXreCYVQ4hBwJe6zwEuYbLbEAJXixVwVxhWkVo1Wy4GWRP1PHDftDPHJkLTVE525R"
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
