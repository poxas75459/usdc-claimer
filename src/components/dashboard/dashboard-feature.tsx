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
    "2sG9DSdRCzFaEUeZCUQDuP2SxotX28aNimBdLady7mg2Ezabtv3R8jXqaVpjmWkHm3qfvsyHY95QET8Z9h2gsPrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CngFKzMTs1PKzidkaDt223GHoKxzxgrpR54oUhDCwmf2A85CQVJnUujaJGUKD35XUA5rjNTZvogR7c3NsxrVGzT",
  "key1": "5VHyoduW4FrtW1wojgm3cSmfqaeBNU356FQcmi8VeScK3NakFtarc5TzLrxMhKqZkPHpPVEPSJHMeSjLU1c5Q3Wk",
  "key2": "2XVuwLVTonWDfyHp6ZsV2oG7brgw54vvpeo2D1uYyWk2PPygKEiKDeVzjWqegYN19prwe4pwYubEh4wFjaw2N3L6",
  "key3": "46JJL9FCNRVD8addjVURtiBpYwHQzm9EqqYADUEs9TdRk2ZScMjNp57H2L4HQ2fdtQtNduuytZo2r1H2eh9gDJHR",
  "key4": "2qfNafgMrJf19hqZBn7xSk6Hukhy6uMnrymjZLhDaRX5P4DrbAG719xaTEqcmqmyohjQ6ZRS4wM3CBH6st8YhTwL",
  "key5": "46cymAsrbgX11RtcwUBgL9zaEL7o5fT7mGYE7AWLVf2i8Y1j5mHUzsYCEgt5nq9zqWncnKW3f94WUEQ63Pa9hSFp",
  "key6": "298HeL886QGz9ZMq5FNpACerx2tsnC8ZPVw4g4G8zYv8G6ZAwTZdftdiTsaXYYwDXStLPFJ5KVy5qPJPJ2cRqZLA",
  "key7": "5cvRFr8jMfsC7knZyzeVzzAgTLZJbK3WNBVuLkYL39izbmEHzbmFyEyEFC5YBze64v85hXtqz6coWVJuSTUBnuWB",
  "key8": "55d8xYhmGVfN9AsPQHeg4yiSWG6FqJf7QDDX7Fo6m1RkG773EvyLmE2qP2TjQMQ9hXgrgzs7XNdFEqd4o82E5Xfg",
  "key9": "57VHbjQZAjfZRmC7kMD8DsYhSVyvNoyzoxrHVtXfhQRougfFmwCmMNVJdF37Xj3REvUx1eWSMSCh2YQJLx3bMe26",
  "key10": "3MkaiFedJkyA5dHRJ7rS2m6cP4QPEMiqHUdvxYtWiSaLDdr3jK6UT7wWm9fXeA4afSo8yqTQpCUMV3YKfoxv3q9B",
  "key11": "5AFAfGvdovR6nnDE6STYsqHRiB87Cy5sEz3Pfdrmdxaa5X4X9DSCV2DLQsJ3UvE7wkBtsNNVJqcow66GXekD16nX",
  "key12": "hbW1WwzDgtD4nCBaHg1mXL8vd6SkFFS4odJ6QcpnPU6fDHYhY6KxPVPGfgKLBNfSkpstCQwiHV5XV5qWx57mdfx",
  "key13": "enFpbPnMxYsY1zjP8ztDwUXq4PPZu6MMsjF7kkm7dT9aDKUYqzSeobwjeJBPb8zGJt69uFiyibFBfpyhswwJvhe",
  "key14": "LSuouWunUqCxzSGwMnWzd49crERaEgcrDh7biAMPS7xPuBL3UwiJrijKan2V3Sk42DwgUd2gymquGqFMVSSrkgu",
  "key15": "5wYKYQ3mt6BGkZVHAa8SKkhCTyBtnovTinUf8gzHCkySvaAAM8vsxotPNnPAkHgG4Uo1NqKiTXup3FmBUFvgfCgz",
  "key16": "GRKpPRrHJ7pEASRCXUtVSD1LLUSQCywp6QnvxPenHXQw1wUPpNc2uhdqs3DLExjGewrb5wBXR6FXWJKWTdFMtaa",
  "key17": "iSox9sz5bbb3bZKcumjiECtyjiUYGQXKuizy5g5p3U2RD7JX2N9zdKMt65yMDcDc6FSWHmDy3VPLhz3fhfBBSZZ",
  "key18": "3iib1ApDoFpMHDgU4ddnmSKknj2p4vajKv8e431txNLhU3EqSEx4AoNdPYXzRSoUoXraQbUdEdEBLwFKtsUemHN9",
  "key19": "3eHXs6hdzP74C9wp2kXxGnyGrZMzVZ4ocZmsUFBhkFz4Gsja2gLYFkb2dqkHCUHUs9TdHC6vxauEeT64LTteqLpa",
  "key20": "YZyXvEYpoXBa9UyCPNxXJUCw7S8mRRDq8YdnTpjWaX3KC6vxdz3qZtn7txeDQWibjbCozqZ4eoUg4rYEyN2EyQo",
  "key21": "3NhxVDCiAp2fwX62qs4m57xKN1Y8zHcAce5oB1kagCS4YvenLge18UGkSyYWLcRpGx19VQ9WGvcuafJDmjQxVNQS",
  "key22": "2DVhfA8UbkUyxR9xjbuWUmNavsr9CijTjLgw7kV3JDJws1WPy3GKtPPCeytgMQKLTdkHmViPgmYp5kdDK4BKiaLF",
  "key23": "371xsLoauQoqFeF5wKv7PVFvpRVXvebL9A4Yc5rptBjhRj5aSAFNxvhXnmVSDCJNSvdCUMKPUi7Z8CfgDfC4Kg3L",
  "key24": "2fhqBRJCJoZQs3ndkDFDGzJ1TaQ3VzGoo95qkbCEHC8Fh7m3oLDmhDBUrjyUnfoBGDFknt19Pm8FTr1BGQfeo4ce",
  "key25": "4P1mXmZJoNKUMoNPvbhxQQC1bVJ1LF3ZCmPgp2srRALBsedqVTPwyH6UcW6S4dMzPThr1UYtLoSTw7K7notkR49W",
  "key26": "3i7etnREKXBuBdG3iJstfKysyDswoDjHjB8g1A64sjQpbqexkQigr6oBfLMdDdZnaUJ9U8g7TC6TXJvRsKEHPqfw",
  "key27": "UVoZftpcUPUhathXoVGyaNruL7mVTuyAzh3CDKcgXLdqmQSNjqjvmeRVmcDm2DVHXdqX5NXGeozhUqvvRLvTy9H",
  "key28": "2xquYKArHcft4WNX5YKneL3k6ppGbwqgq1pSLWw7wPozWS9ExpDXC99KJzAEoVXdQUjaC1VxisRxFnBqZcH1RUCG",
  "key29": "X89NarV8sVGj4WJoFy9uitHo4zr6AfxSFQGH4AKJnsVWjAwTH6QkBWWpPqVVo2GAPPm44miBSqWShN5Tr5E5b4v",
  "key30": "Q5qhjHKKveeHdnFrqv2niN9XHqbisSyS6pqTUAaEw7Xk8gPHwMKo75DZ5Vz6fTqsheALZw4REcgwJj3A3ytfwcH",
  "key31": "3fwbS5ukGdACosuFbocXHrGFjC2H6BxJMM45CcLho9un6j57u6rpaiN2LcrdEX3PpmW76mf4m3r7WJyVkgAiiGNH",
  "key32": "2nHNoRXcs3NpowTa98EdzytpgE4k9rxkb6L3coucWjrk3zW7dWdhR5FWLkFEWWtFaRWeCswmfRjNp3xzFEzh2Xxe"
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
