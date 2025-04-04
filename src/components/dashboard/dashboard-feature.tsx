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
    "2HooUkTGDhbwQGwujbU7nFR8dzoeS4EtKopJZeavtioPscSLtxTnyctf8R4fLkfTRNdV9XyUKcVnsrpmLGTCGJnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zcUbSvhHKA5Q8L7aL7nx4QKRESGw9YtEaaTSDo7ZPbKiMXjQH6qHHVUdWgQk1NC9shn9cx4rJX7ob9bxXGvvUzR",
  "key1": "63D9JTVjzMcNFHwUmUEWTSvQDGiDmsVbGg4zAnJ29uLH1vgDnU71Mtpt2TCYoa5HRRycbNgwuX78jva28ouhHEn1",
  "key2": "4RZNaErb62KrLfUwvJhAfNKt77VWxQtZR5LAzT36B2ubrAXtKqMmyS16RitbjBrx77MUswXNQtEciqzntFoaVfA9",
  "key3": "2osE732bkbNGpaUcC4yiQ6GY9hRTKhgnWPWvPaouQVuhuo27eLPTF8JsGSm8tsUdHQhDoRsR8WoeJPgQuKozvWzQ",
  "key4": "53uLuU1RLEf1uPSZbxPUm3Ydb3AnvzTVTvb7SATYCbvKSc7p4pFdo9uRp2BcahB41yNQr6dHJtS9QhJTeuXa7fBC",
  "key5": "5oj5UH5X3MAymEvHv9sg16kgUAbPcHyhD3J5W2pg3x2bDRgsK13SDCHoL48KTFxdmPJEvxMSDyvBY7syxUmESepZ",
  "key6": "5bQfHPJkEfVa4cM7AUztGiPGZiKAEnFKrXUQCXAisYs2W8xewNEmiZb1ejGCGauG6Y1H35TKhTyL55HXAuwKA2yq",
  "key7": "5Lj4QjiNxn76Jw9zm1YoehCLrCQqpKcjBCvTuCPfRrCxv2PEm2GcbeNpGV7SZKiphQzi3DSKKosm59bPephhVfxN",
  "key8": "2Bm8E1TD4rv6YYpNPgHTWgW7g5n5DWJWd6MSsX3LNJxvHys8vJgKoQDwXmCyMAo7wwtMTRnaYxNHqbLEv4t8QDBj",
  "key9": "e3UCRWdyEwby2LAHfzjTAR4oFpRrbjCHYTYzfnx4QPYsJL7gDCK7TxSYx9aJjwf9FeoxN2QPFXeUGTqYtcvSxYc",
  "key10": "3dEjBCMrKwnQX6xLZfQjRXeYcqpLhSz5eTDd8Lytgt7njGxxSff8w8cucsoL4JbyF6MNCAibvipyGzv438xDWWxA",
  "key11": "4Cb2RgppWs1iohVZNHNWRnuryuyNTHviigfaH2LwBgXopDScRoas3yqu6nAgCTCRxSmsQfL1DY6Z9bzCC6mfKhfG",
  "key12": "5WERhSU1f5jj6YRVM4BGg8u9hqkwp9XWsJye9mzUqNAoymry51r6ERLAyMjW1hWtMy9KDse9d7BhXoNvZGX5Qf2t",
  "key13": "5iBuoYK7y6zsrEN1irNb5UEuVahaNorbXsxLcMmhxG5LZcdPjE3dHuRw7eJc6utDDKKyZyjQ2YQfhqRGZGn8KMyz",
  "key14": "2mKPF93d8ELUYU4ArV38FJppp2N41bCctcC3oBXXMeyVP8SPEt2Jrn5MAWVuZzi8EjfntguSNyL7UN7G1c6qN5zA",
  "key15": "52xJhBby8RTMgwzQfmahkTofCuCkKdJtLcsuXqxtntGQAP58nakvFbHvM3Bpzfn3w5pqy1tDx7oxYFany8uafxGo",
  "key16": "nbu9wsA8jij98RsXZyTv8QVPnqT6wLep3s47Kk6PDpx235GLF8hBLQQ1NjWLPCALJMdqbACG1i6PtYtkqtdLy3R",
  "key17": "3LGjNdBkHgtTUF9ErUNfGSJuSr2nXUT3mfVajvMRmDC5fcvyPurWcCKDhR2bUCdwu9BtEKS8duQShvQjH7bhYtpP",
  "key18": "5grp8ZEHERvrt2tMxd3nfFTGZJfECjKVHajoE4XWzo5jUpGVf979tfDBhg1fmZYA4GNfgyoDR52Va6cRMBNoqENq",
  "key19": "4khhWc4roooMEFZHqatZ15jDXEEZsHogp7hvQWxeBLwTRgFiiWb7YvixLujBTvvAnf3SMf7Mmmkhd5RB7fGfYuQP",
  "key20": "3yQ6VsWcG9kPEc2XUMfKKujQTH36FutifG383L5QGnFFnADev19uV55xtZwggXfuBkzhyn46obyo3Ad6uygAUAbB",
  "key21": "2Y46oZVTcSvdzWHvtB1cZfErRZLr6iDcm87PFtCD8MWhuLspmxvdL6hehFg32LvtN2eL3GN8mACxKLQB4iDt3hm1",
  "key22": "4Hte2YcYy9dU3gYSWs3SiPrwBLCAHRN5eqq3UU8SCEZG9xKhfau4pwqfbQdw4ZET8t74kDJG6VF8iNxdkPd46bPp",
  "key23": "3NTE4prFkdvDaM4n98rPUUusUn7skFz2BrCYKQu6GeHA6a3GG8KcTzwdidusAuDr7dnozWy9QgE4cDWihTTkJ7BZ",
  "key24": "9tBckTFDNGvLZwQvoqWG8z2tLpbAATfBJu5fg4tkFDi8XKq9pH2qLZ64ZH5WdjZNT7gWdEgX34KN6vTcTwvd6Zk",
  "key25": "XNvgBfNfLBWvhKSStDeMbBtusUkTv9vbicrRU8SxxbeTgENAPj7EccjtG43LZ7bQZtRJbHk3mtZaZ2gawd7wtCn",
  "key26": "3Wnv8wAFrZDRScqevLmnwwSvzdA4gMCVw3hDgUqQBJBCTcx462jY3ZdQzbeQpsiBkuH8EVjb6ULTfa1CRSdtYqC2",
  "key27": "3eD99Ld3Y8i53oBWikeSSGxLsJJxQSQEL5PSbPBwTeNeZYkqf7SPvxiWdwt3hFiK4e7aMsJ1t5oHuPg9LGjw8orn",
  "key28": "3ZVSkH6HNdhtTcHsxsDkEuN6TfnMKnqTVcbBa3kKBZ2J7CTg2Giwv6Z4zwTusUSwgs2eaLWXbnpDd5tBUhv3jXuo",
  "key29": "4AsDbZnf5z1KzCFBZAHyqxTuWRTV838MfGWsZRCgiYngF9isbVhwbN56HJRRcd1zbnNr5M3H4HY671DP518b4W3u",
  "key30": "26a545k2ciipQdpeCRAaQYHhYE5CQGP5XC25PdxKJoUWn3TJPpk4zDMYbSc9ACQKzZsQeFZwf23DGaHWiuBYbQwq",
  "key31": "4YePpBQShGQwmgHMQWYNuCRQes2GeyGqvJrm3g4BJvJdAA7gfJh3o3nMjXkQZsNksPxCrqS84yJ9APEjNn7DzdNA",
  "key32": "573Jou5kkGTMKopkGa94pFRhQLS91ebWLijsCk8Dwcg243EtgD2VfLVBAEXDZjo7THN4b27qXMVoYYGLgT2GnEq",
  "key33": "4apFDPtcCm8D8iucpbZgcATNvy4qnrVZMHfvBVH2xx6KqhmtbggimVPZ8N5bsbVaahk75xpSHeD22BXdL2qFhLVo"
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
