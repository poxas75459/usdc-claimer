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
    "5LaBxZ4cazbFmEPL8oc5kKaMqbkcvJdFYw9qzvMMQ87nmuwow4UjYyfpmH4SvR3czUfqTaxRHTHie62XMiacsEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DThRAXQHuVS69gphrWdLJEJE9EfbEzyDEgTyx1uw4uv2WSoTYgGGzeJYJpdbhyJ1NE8C1k42krqAbjAMDNh1CCR",
  "key1": "m488mVMrBATfr2DP113mF4hqF9fPVxfc5x67P5N5hhAqb9HmJpALBsbKM1K49uFkK17U9niyS3tjog7U3L3bGcZ",
  "key2": "3VNrCid81GwaujC7hdJmEt2KsUkcyyRE6VJFiSo5tq1dZurcZiFnEkTjV5LKW21ZRzTv7MwHZp625EHgZBBCzpL3",
  "key3": "2mhU5rBPhd5L7un4FAwHT8NQ16soGpE25cma34tkHgp2SQfVEr7LiH4CFkgerGirFXWjVq2gZofph9v4hUuFtvij",
  "key4": "2Kb7PVjEDVNxytHgdm5GdxF8TowsxAB9iV39zDLR9C3nsDFgwfokyBj4T61PjvkjTB1uFG5YM4e7eSPtb7bqpWHo",
  "key5": "28H5jiiumBLFsAQ9dRQc3GuiJA3YCXcTVtvmrhHQgpMHeJ9pDVyaEER715Db6JFtpojgBp6JJXC4G8etvsLi2HWW",
  "key6": "3ZaEyUUFmie7qm8nyNekUwzAhMpgQdxKQ6eHKqrqzEPBRgt9gT2SXPkv4ZT3cNyPGy6S3Q8BL6noja67rwYWMYZ5",
  "key7": "4s2YrBvaq73avZPPEgoQYjDM3iQUuTvH814Fupp6FfzNc9cpXRtjVvP3zUjMevHjEF51bAqSAHz6jhtrXcRT3hoi",
  "key8": "2gyPdrvoraobm2HyTbdm9qSiMxeVqiJSzAB7NfpXrYDUNTU231CaotM65vPuQzKpZbKAifMoG8ZeRkQxJHDrd5Rg",
  "key9": "2hwQ69uUmzBxuBUHa8gxCjXJtg8ayFhJqiojpxjAkLDr9wWKNQpyaoR3Z4zMf37ceMw9WrX5MyMuNLp5i8c33Be5",
  "key10": "64XNpiKT7DukjRCHKXsKxMtwvXqjgwP9USiobDjfia28ZknxQRFug4bG5DMGWLFgRabFFqPAusdwhCUJY98nVqoZ",
  "key11": "3YrMBQ4agS2BgiS3PDhiSrKTvve1jEi2gkdy6gew6cqB6YWeS6P3fyrdr8BgmDPfa77CMZJbhHFLcTqwABnt1qXV",
  "key12": "5Y7LftMQ8QwNgDWHUNh8hNw6YohmV4SmApNfJhijy7DJ6ogfTujac9LoVxs6oF5pzsvwz9ugBcsxRixRGiESouN2",
  "key13": "4dvjV9LbDuWvbrLFaj8KsZmSgMmRAdLc4haxKwDskbK8H99G1kPa58tbciEiDsJYaFXgnPnbXHj2KzNkpeBAXPrF",
  "key14": "3M9U1Y139mJ55U7Pteo3JPwknwi5qPEtAxgZfPopjZHdJYRE1W19hFrAQhTDuRUKDeUU3fCSAkrKkZoBi1P5nsMB",
  "key15": "2xij3nHCb11VESQV3GmX3gNenQHfkS5hpzPomjDwB1mW5nd6hbcLz8FSDXGor51CBJRh6UtNLthPsrjUAVS4bXXY",
  "key16": "45CANxyoMw1SAFjQxKVQ74VG8unrD4u1z951QEq2ZhKVLu7Absozti9qzUVrWkEhv9uqCxNujXegnfzrbbDqeCvM",
  "key17": "4GL2XRvtd2msh9Y8J5XHn4eRyordnEmoK7V83SZvZMxVXrUCkabJiHYuYVTrKuoJRdfc2c2iU2TpGnQwuwWZz1FB",
  "key18": "2ZDDqM3TkKUzc1Dyi4pZfefFecZygnUwFx7kso7N65snsbCqFfvjEWY1VwrRRfvbDjzipc1GmmBEkkhgBGZZfRVi",
  "key19": "56TsKBU5ASabYnQgRVhNEL4nqhdFQ5eLUKr3Szcr6P2tvymoEKXhCt2vdtxY5CckXNmbRZe9oZdux6zh5FQGGkV7",
  "key20": "32dVpNSA4mQAcDWbj29s2yDdCWBzZrgaVKBTNfGKbjfQeBGBECjkBYsKj2Ej4WeRwZz1NwvRrJGehG3bLPHJKmVK",
  "key21": "588jqhdg9bM8wV9JiPUmS4rUbLLoThYJUk85ctsaSPstFoExwy6WBRH5SJsC1sJrvq6XiyHC1AtHNXDqDNnURa5m",
  "key22": "v3jDWqwXTxsRoyAyVjkPB8DWu4HStKLwYSsQ8C8fUYK2VfHdJMY9kURaKZ8rNzzdWLbgN1awiGgozNwTrDMU3Fk",
  "key23": "VG2WUe7qxfFjBaE5iYAQkYNvSAYy4MYXq83L74dMpTYcMmUAR3aNzMakidkSjZWVzhfJcX8vQehhtWyN7oyb1Bn",
  "key24": "FY78at2PrT1VeRToz8SBhoErhMvbUYcQrrnPPh2AVNRHdGjQvuGPU9FYiD4Jab59pKT5od3yoo5enH61DogsfeG",
  "key25": "4WHruU6GGBhzFFahfUomzWbmbbTkDhXay1cLU9jSvsyVCy44h9q4tbNhyzKsDJToeWfJYfuAX7BB7NNDxjX9he7D",
  "key26": "3CsKNLAeiXiQHcdFKDLLL4yz83YBh2X4yKx1i6AuNP2Mc8QkyWwETjBYD37dNnDMiWWYYzMasALg5EgkhDhkCLwx",
  "key27": "3G35zJLDvvDVmDTZFW2BWKbkGtcYDRwhNcaKY84VcTTHLMcN7ZrCP3qTkNHDXtf66pi5ww9XRhYebijaYnkTyRUR",
  "key28": "2a6XJoF2pyunAKZgGxiuqfPmfT9a2A7VYEWPtKwsPta7y6ejPvPN1FVhbJSKFYZhLGTtmKgsrKh6DCj5ZjVyPQ7Y",
  "key29": "4czHNEUtNw4KB9TyWsLU2cL9rCBugNB8dEb65MtEtZk1cQaYyRBmtmNf8wSk4JGywQfyXLrH5rhfLPHeoudnvfRS",
  "key30": "4F7Q4byXSDrA48LEcvuNh6H8kSf48wU3KmSkzCFP8cbciDoTMNexaBL7dHw352utHAZhcGYsSmegSVb4nKk8PEwd",
  "key31": "CXf7YJFNrH1r2YVMtmxan56kd8de1oPyqbiuvzXqzrAeE92rc2Pq9wGr8khsTiqnWCphFDW8Mxohg19WbZrm3qR",
  "key32": "RSwoCJf9KJvMNJJsprqbwGLYBTWKRuaNEbiGeRTEGNMwHEsgf5Yy3m7gEnX52nypVTPDHs1jeySrzmw55AcPsLZ",
  "key33": "65DFVGxbtjzqQYKkDinwha5mDKkwtQk7dnvQgDFHqSJF8KdyNW3zKXQ9utF9LDyRKyUgUpYGha54x5LxnUdRYBeF"
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
