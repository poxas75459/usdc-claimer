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
    "3Jd9xm2k56onLNZuaiaGSfF2E7feyVadcSVnWazBPmNcpmEgBWLkCRzzm6yoWEEGF4VqsBATeG7UypiSzuUH9UuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mEMexdhSPRU9YoMkWDrGbfFvvyMganbQXeYnJ4fMHQpSZxPPBW5ChxjHUyQ7BnDhCrMsiEc4wAN87cGioLuXcL4",
  "key1": "7RvoVSYChDU69sjaRmt9i7jBMcHGEkybidY8WcJiyZAbJKsR88JPbuFKuqGMexA2skKbijtT2QDgwLR7XCfLHAf",
  "key2": "5KDtrXrnbnGPfKu9YEKfmov8YJDf7apkHUnntP98Batqy7PjXnrCNsK3j4WNvq5ksGQ5x79zULQdLJ8pjNmQXZ2a",
  "key3": "2E9GwPeDvMwkJZKcmrUBQttTR2W3WVXu1qaDJkhQfBAza8X6jYfannom7g7PmyBh6BSJ2kaJpbX9Jfp9mwpygXGC",
  "key4": "4rr3VEdsqQKxerAiQKU5QxfmsJeECkd2eFR3nKyyTrS2MmfmTvtcMZoF5QRkuXrra953sVwubfQuoduPhucK9BSE",
  "key5": "3bVXC2qgyHw6CJUDiKAmAQ6WaHpqZ2otZGA3QmeEZ68VJcjKZ1aG5hN5sEjiigzzb1Me2FHmhyLbHWjQWzepA8iD",
  "key6": "EeQua91JjfcjN7VwXVUkeDEkuytpf93sfEcTDrGkdLjSoiEkktu8gM5G22KLoZuCnycSy66Hhu1MJRLw8jeoheV",
  "key7": "3qv3cHfYMhdXwCv3tL1QSh66yqrLaup2SCRVQ1H1L7hTbVCy6a72W4Xh5EVzq9ZdVagvxVqmjrVmkn2ywDeATY2k",
  "key8": "5BDMXzoJ5mt5FZdrY9gvN39v5sL7jS5TNJxsHEeHqcrqT3bgvETFBVYHfmi8nVqSJgV2DcRhuaAXFXHYFz7pUuvd",
  "key9": "3EDibMAV3CW8puwdjDTh3U23jKkLoZkdopaob5STnN4xkxDqt6nAYywC8zzjVVnHiuWFX4tMbKaLgDsUnCcecTrf",
  "key10": "4kRXN1B7W5yFua1VUUtXVhkv6J9FYKSU8tCLCtLsXKh9tZ5HbahaReRJRdAa6Amxg4dSSwxYG3iYNPdQCcqe38xJ",
  "key11": "3dzLNeKVHELW3uyNRYfNgkWqN2JdXWCtUYD1SFiYraDWHfeCnHQBFe78L1Ki84yTj2T2xohTL4UrFsDjC7DGGQLN",
  "key12": "3dCHKYvG4nkF4viWAhL95AU5RPcLyhTnnfVSL5VfdpY5FcnA4qTgJdrZ3RYzCgnYPNtgUXLfy1c9mxt6eTAXxno5",
  "key13": "2yn1NRAx9bHes71NHjB18tHih66urvm4Rk2SW6AMvt7QAELqyej9BpKEDbEFfyY5CaSNM6peDsgzmYEmBBxZeygn",
  "key14": "4Ecu1TjEQCfZQJzG5URMAyZLCuQdhSsUAPDaZct9GhmKFQpp7SGjTBBYawWhHzoEYWasm98V1vuGHNWxQ3RNMZUL",
  "key15": "5xse487Tm6ubhrG6LikBqbSAUNDMXuuWRWrCrzKvVPn8fofcg9qgULwZzkDqC84VJWoL64CfzEkGSzN8nqCaaiRg",
  "key16": "vZTFNoox3HG3JZETkcSjSrJ7rU4MBiTd1nYAZhQmzkXVJerH6dAhzTwhMUm2TugTaGBD1256As3G2LmQFHyRzay",
  "key17": "3PWsxDY8BKEbK6jPxYZ3HxqRn7fSdsTUfoXnBrq3MCZf4PRMivWrqM9ba3dQJG6rB2SoyevXR4JX3GLQKAmQMzaU",
  "key18": "249PtGK7oebbG6RpKrrFiiBPp5BRY6e6dUCBJLeRex57rex91WfPdUhE3GPoZRuaJw5qT9LHAqicxmSwz3GUnWyq",
  "key19": "2YfgUr5cWemNqyM6REfBLs3WLiEkpcP1KjnLDjSwpjExhnksxZQXACgwERLEnnQFduBZWN6caJq2usiehrxKjaN1",
  "key20": "4hNACtTriWvF3qVnt6eNcivNMjKduSNTomgHLGkmWQFCQLF78JfhTdG4GZ6maj8wnCJWKpgAxhJUq5QDKiofeNA7",
  "key21": "5KmfSVGGuL6c8XkD6fUhgM1XNmyZryoKjevMU2bX5LQXNtJY1m46s3qR4UdxJpYULoruvFnaamLt5dboRSvqPJuK",
  "key22": "2Uwwtf3DTA1Jfp7xuz9neRyWAPCGcpJTKW69kvyrkkLeqhDTXbFwSouu3QJZwXwgBwdmsL1B5MEapPdTxdViB2p8",
  "key23": "3C3waLu9bqhccUFM3LvQUooPcxuxbfFuRf8ZdGhYr3be5zws7h9KWZyPJ3K4jBrK7fk4bPBfBpavXw9JJo1tdiyS",
  "key24": "efiVKhK4FMWTRow5oxKFwmLDUqpaZomsoHn7Ar3Ps83szbndjsfNeDH3V8nhNxSFavWQeS6Dmdm8eHZiYVUZGeM",
  "key25": "42Dmg1QaRdqyNRNdGNpNpaW3LcFkkzeTVqygbk6oDGHMdBwTZJoUuQHHgpaP2QPj8bVyFpikHMAQuV77VQQcTtJd",
  "key26": "2jY2Jqg6hYqf8YeBMm6jKbhBh1bzx3aCZk2otztXsUzadWsP5LHfohKM87c4HSoTibiqjbPXkpJ8Tb4TfxJakBKW",
  "key27": "4HCXyEB15N9zg47MfoYVqAYG3vWh9bJ78jiT9jU4ukcbcb2szGuGvX2hoFXaMT1Rs76HqDcKHdPbfuQGtVrfhJdS",
  "key28": "67PqisgnzotFJVTpcwr5z39VU61ziQ9kpcEZhMXxVVCCmveBjFsHv5rjCVWRgW46qrRTmiPyPkr1ipUvaMXk8U1r",
  "key29": "5m4gf2K8FYiBRnpEErWb2dS4Q6jXQQZYiSb92mjAjCncLnTPDY2jqkwjKXvN3Xf3f9Non6ujhx4hUebZbwMocQFD",
  "key30": "Pi9npWRY3H18xKxBJdssAUZZiFfyF5x4oGX67bi8qnEpja7PyXGNF5bzjDXXiDxhDsZei3HFDR1bspEU8F1WXVV",
  "key31": "4RwCQjUsw6tuMXvixBynwTJCJdLtt3sdwLTzdbahLoRVXbCQfo2fSUp6K4tUNbBWsz1qzp8gnsddPv6kFCMr4WqJ",
  "key32": "4ZFdi7yjB6wrmXfPQRgBheHZHNefoSJdFeymDyQhR1b2BviUMibBHmfdAPjWXQ95u8hQD5GXbRiQ5h3X2pY8GC3Y",
  "key33": "4WAMNYGzbH9odcomQTBZ87tbWWyHiVNRkhaT25Py44tZKtSS9WGfkCRAqmyx8NRAs4m2BqramSnS91Q5FAA314BN",
  "key34": "32UYX8krftTdoK1o9XGXw7fnTgAPbDnaTtAjv5U82jUpdGbmahixjrK7jKU7nSbub7dy5JuCoBd85wqXAShzHwvq",
  "key35": "4HLknhqanJFRxt9mkYPD7btR9WWCzMuhacTxaiQ99PcyTd31wtzo56mJgQXT2zv1txE5J7j25i9L1Uj1d3YRu1Q",
  "key36": "4bnPrvmx7EhbgnWqgJKgdGwHEk3hKXcodzSxnsgRzZCjF3LCcVRrAwD7rocZCY9HzpZJ63recF46KzhSQSeqCoRL",
  "key37": "273tbEpNzPd5XMhBwfSTCQax7UHAh5w8oqQPkmJLh3QL4SHL9WduZvU4gtqVFZvo4BfsKDgtpSpkWYTBRW2v3KfP",
  "key38": "5eui3RHEtbsEGRuJ2cfQerAxohr23ZaP6GnEbxvhKjjpYyVKu9cFtYjjuaZThbsvdic8LK2Jy4zEkEmxoLuHFiQ1",
  "key39": "9Yd3fQQkp5BfnWpgdM9zYSB8w9D6oWDgCnUwPpvNE5dVeuihi4SoFV6esUAT1DHwTQBzfSEmwPD8GWMBoSAnTng",
  "key40": "3nMPpLoCJLbJUn5zSW8QF1NJEenmULH1a62ariyKUPFrXAgbqospdQuYjnN4GTpFTbAoTFG2T1Kf8xWnwAaJBdLL"
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
