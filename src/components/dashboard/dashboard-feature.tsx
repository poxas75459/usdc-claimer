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
    "VgaNAocqaCN9o5L5W9LPSLWC1aE1M7Rz1TR3Ciz5rK3oqoEZFURoGfoSsUDfVTqAcKPoeWqqjSoiAgmLDC4eqg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2juRKaLPFyWCgtpb12q4GYUHHg5w8ppuos13FCG3bqSv4botg6j2WvB1u23AnpfVtsMbZyJNwp8JyEg8TkfYcHmG",
  "key1": "3FKAcyQeJAe5C7JXZshQCatwezVdUec4RrMsqnUbfCs8diZrko6j6Q4aDWtyWt2zu6oYSPejEgY4EVRnLp1xt1z9",
  "key2": "TjNVHbjgCE67u5KMoF88mohow9LvbgKhDHU86kMYGUyRVPKg47aAVRvYDFwv7uzwBSU539geuQgVowne4zoZeBm",
  "key3": "2Zp2TytsKMwe9m3WtQJ9a2zP5K3rENkwkYNdQeQLE41tWRRGy2oB17RcMENXNB8BdbVJRYdquYwZa3N4ddmoi5aE",
  "key4": "4EeBtjV74k5xeqGfafTshoYWrehoghjLXNTMdTRFEQbVUDaB8aRdiTsoa1oThkaQ3hf7uagfQoPWyvZNru8uvmhi",
  "key5": "5Kr8BmnwrGkiU8AvDojuSaeVstxdct8B1sLQvsL1kJWJ6Zn7knzSMov6qkipSRmiwtNoc2RMeDzgmrJAJVrN9KQB",
  "key6": "5onPHEugZaCe4S3NbL59z7QDxg76GypVZPcXnZw9LK4bCsA2tv9b46deo6bgfb3DC9QGfkhfXNnCt6jpWThr7nuJ",
  "key7": "3ztDZdRU627Py7WsUBWu36SYoGM58K8drE1jN4mBaoWTfEgto6gecBc8abyo77xhWXsMAQmrXt6gK94A3YXNFRnt",
  "key8": "4idRtddLVgcJH4EWDqULjttHFEAwYyURJYPmPRHj2FAcUbp53NJNnEQGqyEpC1cnE4VptHUrDZFRkm2r5NHcHcnw",
  "key9": "abkoo6xisYi5nvLwqzAehcwoZP1JmXUwnYTYfXX2Zhf7D1NtpfHU3ejYHeughNztM5xmJMvFicLLM4FsVWjZVFi",
  "key10": "2ovHKi2QfCHgCBywFuUKwdDJ7FqkTz1YsLAxYW64Fegb8q6ZuLqb4wbxhFxUhy8pD3dychqMaDd5gY6uyQZEfQHq",
  "key11": "2RpzMUMkdqkD9MdvhXnPUtwp7dHmCCvm7QfTpTMyykeTeFBv5PpSXRvGu7jP2Y4HwDDGaFnM4BJapiJ4bkPZWAgW",
  "key12": "UDnjhnneHaXdAGgWZhB8mh68V7JRjeFmTHtLuguKA8NgxgAScvfs6kuAMPD6UtQh4npWqmZMk2c9m3HppF4bhYQ",
  "key13": "32v3bmbtgfkgBiBpANcb1RqugKAKzKm7kDrPreEtJ3NrNpmUxxuTpuZrxF7kGdSaXTo8cQxpr7otHt5DM3QHLiYy",
  "key14": "4qkhuwatR3wwjLvU6UFEkMfAb4VhsKr7t2GHcn7cu1Ksv1fzcyfXRfbjrmdwvB1uERgpiG8WSPNcRWGspYx1j6sK",
  "key15": "3fK9atTQqXdRCzHVdb5ECaCaAM6RvCYwtCGsh6HEChKDM3Q9H5YBWXzjjPfpvDeQfZsENvMEadBP1TDYqQFcr99L",
  "key16": "5BAxJqNcmY9pjMe84MJ1zBZGjQXquo7coc2Ljui5TcoUA9gqLK3856sswT1TFHvRrigye4x4BuF7y9njnNAKhkkE",
  "key17": "5uHjhoYV2A1uAHFbzmXmiZDDJtZAZhu969vCG2noGwSr76XceQH6AYakETvwp84AtumEsYG4uw7T8SgaU3fHV7fs",
  "key18": "2cSVRicAY7wmZnqfwwmq8zL57j34myz9HCWX2SJmBNwBZoMXF6q4QUxVahzUUnbNgkV2EYhYy3TZLf3KZNmoqD9A",
  "key19": "5Y447n6MREd4d6ZJHTxT2cywuZntww5TQQeiF5jETAfVwotzdQHkRGphy3cjPaktEvxM4bbQiUyRB4UyvB6U1Dih",
  "key20": "5mVzK2MFPYZPfgVw5RLKs3CpmipAocPVyhnsfDCj5ukuvLCbfihe5iWQ6YZHRsw59hdco2WbZVMnYbX4oBJS9x1K",
  "key21": "jAKUcgFKzWw7ZjQ6vNcLxH5Q2oFSsQGPVe3GN9xiWSaWx6J7tQyG5kTp1w8CH1Gu9XtdQPccCgL2JnAxjxBDVxy",
  "key22": "5wdSeEfzxdp2Ak5wNw3JoFoG2gbWwFbzbrrruvc7Zaa9i7v9th8mtke4ikXhMhaBJd1rTTRbNyT9bTDc53AGqaQQ",
  "key23": "2Rsb64fetHJW4VL311gYd3ivKWwuUyCmU4nCXtib5fYkRETub6Nts8GVTGhTvW7SiPjoN9ivH6cgLE5625DopuHE",
  "key24": "2ASZ976Vmc4aUjxXEcRj8dYDjV2o6dZrJ3fyB9F2zkVZRLqV5h9qNHHSRDu2b1KZ9BdcESATjvCDHVjycGXxDj14",
  "key25": "7h8vL2tzwfntGZeN9QvBafozVw1CMVZ5KWhhk8oA4q7svDQQkW9gJZ3R6YJKVuPvEst5N61CJYnZXgQYjQzBSAV",
  "key26": "24MBHX8JgRF66pF5QYhmwiYg3t1ePkJEnvU6bXu1iBQWPS5LrZ1ujatbPHj9C1wZyVo97viMBxkkLe1ykGXpQQyU",
  "key27": "5Ddoz7KcjMmx3WWzhPZRkQ1sijp6PnYTJ8aMAoznMaBHZxqrKedtznrg3iYhk2idJs3urnzv4eJo4cBjWczcEwmC",
  "key28": "3YTQwKL19gz7Ehpghb5qsHs1egD4hEwi2n4Bd1q4RNQzj2E6hdBEdUo6VUqWThNJn2iswSURzfRbMjPQZdxdYPhF",
  "key29": "5zxdY4GmWLDschmye8jpo3sMgzdCofGgRcQoDvmJ2vLB6JK81bk24coJPEpgvvg8XjuRgvrNnog8sUxbZvQPxjUf",
  "key30": "44ZHkvV7dgG6ooVzhcU8K8GnWxQvfsezLD8iB7yBKCLGguY9QuzPcCHssY2rfftnRZdECR5PXsahsoQZcki5Q8HF",
  "key31": "TAHxR4QX7gxtutEuVJJS4JD2WcYU5yseyHMACgc1Gk5VoSQo2vuiEWn5h7Ym1kpknLkyo8JHYT9JyPw1tfuq1MQ",
  "key32": "45yyca5rfHogU1NaHCm8h9M9Mf3p3qxLpa8kyQFyH1bG6vhZWNB6EQBKo1aTcTL3gRQ4P5BPN4FnF2A92Jwm7hot",
  "key33": "4BV6zWH7NdrJjcNcqN5Li8xT1RFmadBYnfYked65cnou1iXMvj8cmDTc1NRTJAHBKVzsRxyA6YybKXBPCEvqyQs4",
  "key34": "5oKkNjKtWqsgHUjDX32zD7XCBHtwE3asQxSxM7Q5xd6JB9oeHP1oKjbtRGaKC1viXDtjsZff9tvnY5wSj2rDpKZx",
  "key35": "GDidF4faqBQxkNzpLUL7pTdHVPbPvrwYYHnNR9WptfJUSdQb44wYKzU7AMppwhpGSt2L77Q7c57eqnQXMRgtG2a",
  "key36": "46Rcu9VHQoJwSoHd5DC89EZ8uZuafUoPsvoTyZW1UWgH5JpjiRY3hj8mDeW3CcPeW6gXHSA6NDxmM3bbdueLftRg",
  "key37": "4ijN3cxN2UPSEBG485uFpmSZbxeqtwfsxThhK6rsMJwfjDw9jWLrAzLLEVwcBcgmJZyDYCY6LydzwRArbq7LY9Kz",
  "key38": "vBhcbh3dM1CnirtYBNMWMUCEy7as8k8Lx9wLZGRuqVUnRTUT5KfSZFtk2upZwtwYXHpVgcpTVZwTaVJyj9U193G",
  "key39": "2U3PxDsArZW3e8UzJRJiVpVRPqYKZHeLxaZ6W1mmHnC2EuYtTRPTfnUfSk6zrWopfF3xjfduWsWfNSRbbDYEGL8Z"
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
