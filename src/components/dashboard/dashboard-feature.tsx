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
    "4Lvnk6a9XAnNbqqeULnG4jJTWDfUzrTY87PxvqM8pYoxWQmPZbLrEHZP29GDdvMrxrm85Lp57GUeyZTq7aEGPADn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sQAyi3hp4qDqwKjLRiDgg6tCr5E3aD4B73kkKQ1U7YTTsgpAGcN13S3AwuaXEsHp7koSLB95jN9FbQ9ShNnJNkz",
  "key1": "487YJ5tnerWVqESTLpxq5E68AukpEt3tPVj7QgcQoxDggCs9AKhLzazSVVQxm7Jp3V1eUy1hUrS6XgfNnEnFvLKp",
  "key2": "67i1wwDXnWGQbcR6Q2Pf7aUsQfJjibzgUrRPWp3nShtdd8eUPqKc4hNdEASscs9m1s3GKL8HkX29mhGuFt3gJq5j",
  "key3": "31RdfzERv2diuRiN3v6PcuSzKnskurDBZZjAS58thsoT1kxG9hk6BYKYZPKncgfc65f22eSr7W4xnjb6igFZkT1K",
  "key4": "ffdGCieHdV8sW1bYBHdJCLEJZrAN4sGc6VCDrgbiTPw7oh9agZ8uptCKZLwFaphuqN9tUTnkVTqGq3NxwnJvJzk",
  "key5": "4TnnNM5qeYkMjfQ7cxG5VCn9CY55ePDiMmN1EmgSeKUwCG6AVD8cz8DeE3Yx4W6Z6zF9xYDpFscVcmdmtz7tfZ5Z",
  "key6": "4rnkNGhRnq9A7jJq4uMQpRrSeSHDNARvj6Fxa7cFUYYya72nYm4MbyDqHydB2ScynXazKR5aggu2Fv4ZWoNAwtm7",
  "key7": "5Z4ai3G2tWUMKv7f7aYmrPDNZZMKhkHwsUuaAzBSsjAY6huT5nVXSvrAgzqg3CGTVTYVV74ZxBhgdXrJyPTrLy8y",
  "key8": "61Ew8uaLSgxdaq5isBe4qrnfx4vh5hQCbdPJ4tjwPjJfuedFc7Kmoqm4ZG2FHwbAhWEpYA5D1BR2VuqvDXuq8Ung",
  "key9": "2tV16MCgkpCJ2S8D3DLcrHAv1GnGLpzSgg7CbyjnijNhrEaxaHm2a3vEUNKLbpMZVWsP4JZg3iw5YfG73YQ2U93s",
  "key10": "4hGRNFoexjYvuXRajDj74nMZvGVo1fQPuxK9UCsXARMbcjh4Kx8yNSrskaZy5LpG6gyknUJ9pv9vTt329ztMybWS",
  "key11": "2VxPuhjeC8Lyjmdmkrg3qXh95sFGRuqC374ubRgmUbhPDaDUdM5BdkDXNjZ1Hfp8GmxHPimgMFbvpCw4BEamzVcP",
  "key12": "2o5MXWtfDmTAVYnvDHCfaRgQTwPXdqnJ9ag2dpoKabgnb6BJ9pWAY1ELvoZYqkWVuUDZs6iG2kiwswc2DsUjDCR9",
  "key13": "Pgq9jYjZPAjyywMuvE1M2Eu78WoFmkN7wSJMcLrqvsZduAXh3H3Y2cypHP2cXXKweqhXYL3e6KiF87dBLexKGQ1",
  "key14": "4TKVUJPwjWkb2xF6gsgA69YES5WpqGS9iAhUQMhXMjQpcb34weBEwJKrsvV5rT6xJuTugrJLVYJ4ZW4LA3BppY4Y",
  "key15": "5RTnhtuCxXqxMdKGJMspCaZghy45LFhjpp6kq74Ksmx9o1haqaGdSiZpjva5Y6F2uocmi5QyjxUBn16KExREFNNm",
  "key16": "5gFizyXb1UPpfKNtgoPY6aRz3PguXgGU9jA7t9TUNn5ycCSbveJSYEDji7tZLeA5ZjKgcchkDoiT5po2GMufxtrg",
  "key17": "VQVcGXkvukxPVcvMtEFAmjZrWSEfP9SnZQDCkWr3xpuxwimSnVbtEJFchNumuU8UPtmDWJ35L7c7guftofzBRKr",
  "key18": "5oqpqdiYQDrooGeV17jkmLqiXDmZTyekpdZD4qSdAE4AhTWDaGAwhmpeKRzJr2mDRmAmxa47k61rzTD8m1RXz7BU",
  "key19": "2CfB1eWLoLQoYgtV3t1d7qRETFLv39NoFgnbcmm8QvgcLx2KKLMDne1rY8eHtAPWxDes5oVQoUpMUrdS8n9pZ4um",
  "key20": "2JGrfRiWyuw8NXzBPBZb42wUnTX1L5xPTkNm1mBxtJiEAJxecJnFtE3pMGfJD1mh3ukuVgeaeZ31HxWGLHu2WiLW",
  "key21": "2uVGmMpUKuXUeGsHciXV9DR8DwLpwPUDtUVzymdMdmUhztcWm19u2fJ7KWTZac7HkZjTHRjtcK6BGvQG99psXPv4",
  "key22": "3DkUt7aB8VDUuWGzrXEqBUyrMFqdN8jAEDppt1QKYZ8oc5W32NVUpmofYMr7AFYRPB74RWShGea99yK5NzDmjrPQ",
  "key23": "4uWN8gm8yoatmDTBokoh2JyaPzUWn1YabzeUDSanFkocr2TheRmudUvDnrMYfTzo92BVeX6Q25ZuPeAsGLVsVmq3",
  "key24": "47YBCVsJCEKMPc87ix4EAq4g75F5NoQWrpWeXgpvyZwBVuwAi9reExg1xDN12kHXXVQ4FEPf8ibwMysU7u59SyBB",
  "key25": "5nWFtMtvJick6ahXGbirmPd3FGrXuuj7UdxBUUiBSR4rKdCZA6sAPbyKXToYFzg37tifzvEmgeHJftX7mivtpitn",
  "key26": "3Mhz8WrkMotDENnkaj7dnJ5mrEGAs4frLtCASP9Ur9QzV28PU5HuNe7BBYtRfm1m9ASvo1aAAELMdb1Duvf2LZz1",
  "key27": "2pTbFUZkW71hfyTZSStvgcCe9AaW9cejtAZ1xGRoLdAmt3a3P4NMjdcZF6osxav5gJkikwcEM9CQRw2E4MUXMFwy",
  "key28": "5KqGT87G6qej7vNAGvQKFyi78yeb6hJjqtMrZxQnnHhGyDa72A7UQUKHuHrFiEux3aR6w94PvS1eSMcHVjsQYzgm",
  "key29": "3Hs2fiiSR1mfjq3Bv6V8eR4hypPQqVfqYwfRhMWsEgTAbfwWXDNsx2nijqw4sCyvkdeiFmWtFdxBHhYxn5iPPi1x",
  "key30": "33ss8kjXsSKVehH5tEFGcF6HcmGVbydkEaGomhsz36yLpnizNbriLo3oCWbLPSXuTwMfqwWURnahNX2AMbwU7Ue1",
  "key31": "52Y4GdzJfdSxWKvtDQvgjdvpSnFaJtBxT79TDYwCKzkA65jGwEe8oDFPTbHuD9HHkSvCetiBL9XAi9kjGT1s1CPk",
  "key32": "23cwqCejyoUXo6wQtMGxuVXr7i9MyfZnK9XHshpStUVGh6izvAioS21toKm9ph6xSUWemPqPero7Hq1mZ45odB6A",
  "key33": "3rSNpDjxVTG4kAWJXnPV9TUuN46hRUNHNKAF8G7gD1vnZX49QWCa5FAAfqf5BjYEsi9fdcSDokLxCyUNfJZ6uYfq",
  "key34": "5hAiu1BijN5QiZjepGQQQR9fNmniTpcB9jG6umihcSVvkxta2odkJz6Y6h3Y55H5ARyN4wAfA7fq38HhXU5KMQQo",
  "key35": "3h38WU4tAtqgsbeu1REBYKSGtExNCuPN5EK3fqZQEsF6ghWHLJVPGvc5yuscUsifzh79zGxxyLfG2Wms48DoUqc9",
  "key36": "3mZJzGt2bf4viXUCzARVRehxNjXbVwau9XmSfVPtcjREmDiEuNbM5cYPJYapdkCBdKzzmN4YUjW3rFe3L4miES7b",
  "key37": "3WE7GCzNmWeyQzodwV8q2ioR7wDzkJBbyLhwSa1nk1M5WKv6CFvcadQvT8G9L7yFeypHUBLLMRekubCTjHCfUWzG",
  "key38": "4HWSCYPXkbfarzZzQV4wjLNn4Cp6PgtNQVbMYtGcwxyezjdrYVQeF3zmcwg53NVzdoWa5r87a3NBkCdLLb5o1q5K",
  "key39": "33XTg8MeCuCVTqndVRxByAaSGiqLx5J8Zte2cTzGqU8rGPri2qkTytYBopgYVAgFGJcjg6LmrEXUZsLRbu6UE9Uv",
  "key40": "43ctJWuZ8mVMsMLfhCd9BFCMi4rJBxHc51axKerYANTYqPAMiTQQFVVPAkcrhqoNw53ar39nyjren3gz1vJsw7oA",
  "key41": "UPFstLyhtp6BksUy6J52cLfShjiwtzmLiDo3SUqaet2GtWu2At2G7j8ZEKkXQyeXN96xkG3DjogzE3PZ8E3ndno"
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
