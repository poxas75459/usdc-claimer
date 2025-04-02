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
    "3s2AJ4xR4spo2ERSs52b1mv6dfh2Rc481XNQ1tBycmpCBne67k29hyAUAnSUW4jrw8F83PRDwSy7ScTpQAtctjGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xhzfhfht7XcEEs1qxZeSdjPb2m5k1k66pxRiU3M9EkbFsbGjQ9pEEFusByTAftkNax69v4C1VoMigzbFWLhA7cc",
  "key1": "3pv3ygkWNn9M4mYJZXFRhvXBbB33RDDdk2BoSZFTCB9EidrHKN4k8yvhsR24UpLeXnjmJTrfwnTAx7aEbUZxZa7L",
  "key2": "3hJsQyomWPTzaZDkiMYa642VHAXuJyUqnjybp3ExD7w3zhWWG23DgnLHtZN7J5GoHTrmoPYbNgHyVCv3ibSacgsW",
  "key3": "3RSHrK2PNHRXVD5w2w1gWErpmvLKQ4ee3Pa6uAwTXremDtSshd414QzGuvbHcDeHrbfqbj5cbWyTHWcSzDfWKvBM",
  "key4": "29BiSgsFtXWNvCnT2YnUuaGtaJnAvxzYc5BuGHzXnZqugz5ra1uopXY7Pea7jXv672zegz6ayuG8Yo18LCoycEXq",
  "key5": "2jeACTmFxTCBo8HSvY5K75ZqRkuTtnoYy63KLDykCGUrPBJ8shUzZojk6qpmpBqyyK63cRH9btBmn9nsMAS5pFJf",
  "key6": "4gSkrkZuzXbmGDxkdHzCiF6Y8EnHU32BXiwPH2dhw8GSGRZjcL6SEJktW8wMmxhUJ7pmoXNrLsB97KiDjMrMshva",
  "key7": "gsmzQggpc9yrqfJJvCMzke4Sf58Jy7j5aY4ADXam6bPbQBHCHArsmEAWNFzMAeeez3b3LXae1BBFDxQAkC1594k",
  "key8": "2YenKoFdL4JRY8tAYvd1KxgyRCmnUBgApQwMHZRhXFnapygoiHw52UY3xqwkmnR71d9aqgYymced4vBEQHmv2nXX",
  "key9": "UKcCLFThZu96eNioUAKd5D5sbdn4HHdFqQxxskJ7QZdub3f4n6qHChUJKYM5Wy1sh6i8pteFQvK1TzRoxKdPoej",
  "key10": "2NFTb1nYSt3nDzzbu6tq4R6pdAUqiMGSBbXF13qbi9ThWMsdvmnYTbiv2yYerZ99ZotRGExgxB8pnEftehSaD9YL",
  "key11": "4WWQCLWV6ykaDzs7mAqUGrBNyVkpaQ3gVKTYiEbgaH8anGgEiDwNxYQhx57C61obVHP4kXgUUHYo6GehvwmRjTtm",
  "key12": "Hjs8bCHxx6RoRLPwUU1oqUidSbMHMVk4jTvxc1mToVBDAs6XQdHkoMr31AtfJpuD6mHeANuCeNhcVs96RDaBMdG",
  "key13": "5TNSctWbgyHfgoVSjrkyiFtP3fQtJ2eGVNkuPvRavEDJMAB9wc4nccSLWaBUkPZFwZmvfw3rLyEbcT8tcnhek25s",
  "key14": "3NfcTSf5ghDsqJrjjSSS53RhmTmwrSbhYuWeoXUkX55cfjc8GDjdmJckrprKcj3YavDocu4AVrGeXZw6NJMP3TbF",
  "key15": "2ZtUriUBRxadbqmJhwmLF6xWd54ULGR7sXUwDB67tk9qpy3q8sd6GZY4Uz5DNNryA2eEngJYJwkyWUtxEPg1mx9u",
  "key16": "5E28HwyGZNPYy2fVGQNTyV1xRfBe84Hy2bMNNcrPF5nfuJAuHeWtwFK9GhA6XodUvfEVZW4So6BZPor9JbLnxya",
  "key17": "4yXNdHfHPz5dySx1FDop8Jb7EPTn3q7xo5NYdt8YasCR4ZaLgiBnWZ6odu3zoXH4tXwrY48qB99e7GjFgewvAUCU",
  "key18": "63pohwqwTetoqMvTk9PVEnUp4fabXrswxzTgffhC2QUAHsPNoYbBThvnbn2uxPpcbScwzdjpUJhA1ZxYynJfDyB8",
  "key19": "3LBoSHcfASh2WZytJGWwhfM4y9A7LBRXV3DDCYFhXcaxVyTKvBkPaf1wzNvEmzuR5jauwxXGAXx91v1bNuyoZz3n",
  "key20": "v4yNdefPiBGi1VYQuqBgqrrDPgJaenbmpDDdVG2C4MRQRWsecfXhfLERWRNsxQseHcxWNLUqfukrNRAQG2Mvsyn",
  "key21": "127fV1c5J4pBG4VATAXU32e4aG4gWGyPHWNFqQTU8pcHDpqxGn2n6iY19AanmHmcFRv8cgceH1n4x4TiAzVenZtS",
  "key22": "5gTf4Ypb5asNRxdgxjMvcFA2ts9dwPMVsTnHfyUz5R5g9NC8oVL6AkAZsQZ9ZbwhdxVtireCZyrUbfxwMZZwiypn",
  "key23": "5tqGfrtNpjYf7XDsQx466y4382wKKDGEThMscVS7MEwg5HtiwjkmyV7W467E7ieiFnmAzTSfptKEAb6yAgmceJDP",
  "key24": "4cqRTjkVgJLVrHu7JyaiQzLmPCrFaXTai4GDBNDTJodYn3DHQmfWuNsSnE5ZKmEKKWJynagLhEMyeSESNiDATZQ8",
  "key25": "4GCkMZSNUEnEowYVKVAGffi8YrnkrWYBmfeMpxP2k3wF5Vt2oYK3mcmiAKfZ669x36tLYwToUzFVQ7dbLE9A4k5G",
  "key26": "uiGYAWweuXp6jw3kZKVrUCXtqGdgta2JKXQFFHVitaJQDTTVVpRtr8bwfCgqX5qu99eVn5dyyCRxZuFZvGXA2gx",
  "key27": "4bGk1y89d1BWR7N9tA8noDcXzSRm5oVyUVMG25oAJUWDBapPWJJB8quzrUQjXJtq7etapYPjyM57mzBs1yYemUw3",
  "key28": "3QUGw2S4ULVyaguSrEPhLYhoqgzJu11ZjjthCUwiW15es3rSuQrDx9zeJU6Cuk8zswZWsbWGWVGB8x2bxf9jKW6o",
  "key29": "AHGp1qnT7azE86pDrySpcQ84tvxvG34iriiNKUwi2wa27KgHg48AW38fQDNe8hsmbFr5nxdBMZfBX6gEB2PatZN",
  "key30": "4mLAVbdDRVRg4juPnvohHSCYeY9LCzTfmiuqeyNZSxRVtnm4d6UmLv7ggixCSm8xnjiVgcKTZMKrndtzkvCGZTXi",
  "key31": "mCnT7tP4PSYqmNabDd88rEyarrYCwnrtR1pwsjiYtzntwDb9QackJ4VRRVUdqrxKLg1czFU5ukMm62nCDb4rCKw",
  "key32": "46sxuDR6MdhTBRFFnkaqs44ZnPuHLaFvvG1jXFKJP71wDwbakrw5iLCvqhZBi7qogv9M8SHwTaXWoigM6sXErTJM",
  "key33": "qB8yzx35GwTTTunkRjiKeCqj5EtjQzAAdSmKtbdyKve1HTfbG4uBeB2jRRk78q5kiZ1FxfjyBoLaVMneAWoeKNN",
  "key34": "2ZHaj7js34kKDbqtrKpAcnXXg1JsMTHYMZBjvHLYXFTbLWpXRJYdYMWytZ1wBjaLVQSU7LYGRRtbYtqVT9TYLS4k",
  "key35": "2459GN6P3z5aD6sGyJ6J5JunXuu75bPNacFHzyTjTWdywRM1E13hPqQPtRVnPjcewnYVt9uKp5HACvAo9QteRwJd",
  "key36": "4aNx2Kruf2zfUc13vYAGEa8H7zpZkEMcSgChCV7DmibX34m7LTxWQ7aCgdchSWQH1KtG6BbgfrB6TbNUBYvkgFdY"
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
