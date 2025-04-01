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
    "5PCJSdRrHA2dSuL5PGdArcNZi1A7SJ88tCVhMVvinveyd1aGP3neo7oVu9kFMkrJEgigFs4vike9kPc6QrteCVBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMiQUwp2Rb3vdY8hkZbFPwJT18h5Sj7PWB9BzCwcodEqGW9oS7xSrUiSsBPurgsmCUgwogANGXY8KfNHQuLBduR",
  "key1": "57NvESh4bMejKhRSDf8cHp6DA9SaWKD9d3XJTCeKcEichqHsDJ4CuignooERJ4FuUsxXXm6bkUDoV4UArG51PFtb",
  "key2": "5YisbddVG6nd9vBt52oZkrJxpM95dNdoEDaq5sF7HYwduukEr9oGdji1yE79vaVC5MSZkuXY4g2B4hBEPj8VHL1Z",
  "key3": "3jvj4uLbkB6si4FF4yY5MQkGbKmwm3dYN5VFyzZj8cfX9cNB7415uvHiNfjjdi2sbiJKUTZg8kWMoaRNgkSC84Kz",
  "key4": "5wz48iCGZW34JkvkAdoS55qgxgtqeRE4wgPfVvq5FuuabW1KTG2ZYC9Xh2hnBmHiCHQfxQSsLt2QJmpsnn6js2JK",
  "key5": "2L8SS15dC66vgQpjyk6Eh4cTDgFvoBfirreedPtRetkZCt8bBPoup25n4DE1BYiWbV82PpxRg9NupTeVu3dBHzkJ",
  "key6": "5YZr25E4w5ccFGJsa5FRvA6k6bRTYXjKHMR6ftQyvULnA8Bh69DfyVf5GFVe2AvQyGdQqmPDtfQmuXUTvhaNjngd",
  "key7": "4nV7e97BJG6ezrgZYjja2VD59bhAXEKXcwfQaJz7JTZpK4eztQXeC2hLmokfT6CXaYF299GBSnqf3c8YD8BZeJfZ",
  "key8": "3JmbT6ERF3HC9ZMZK9WdH4ngDREXewNW5PtSB5Xx4vqBthNDmme74NZwVPxKyDCPxK86pKLebSqoZyKs5xFikxhQ",
  "key9": "3PA69FDH5nhoWJC89AB7QKSv1uqDdQz8cAdR2bWCaLsyKNNj1CgKnE317t94DV5dT2GgWFWoGdxJWym3tv5ghF8r",
  "key10": "5azESWH7uJdsJY3oevaxX6cXBCPJaTwPrDDkzWLwMZzjCi8XKTUykpme4M9NWnerDuRagBAkEEXNG8GaZiCzu459",
  "key11": "5ppvf4KJ1wXDBqfm2ZdGyGBUPavCi6U4io9hfKzwDGchZNSYiWAnAC5Hmsjkoskssyirz6UdxkQCdXmBmFzqJrMy",
  "key12": "C4M7MeqfHjnv9S8M16U1sQVYnoyo48mha6xKZhwRiwFfnRKzj8jmErg2D4x7dhWLAWQfX5Y9JJPheHg4nPTs68C",
  "key13": "5MNyFV81Z4xCb5vNg5YWSuir7t9889iVckDLS56C7yzzJX1HG6knEznobDP1Uw8gefCptGePe6D3XygHpZ34vRvh",
  "key14": "4syixYSwwAK9VGApzsXd2F5tmYDNzmCN1Ju2fj4iL1qdRm7qvP1V5Mi4jn4mDSsz7gEhqXRxuDGFi1woRPmU1BQ5",
  "key15": "vyDQFF4CvJHM3y7UfSYZwM2qpdAdpFBYeWXRhSVTBGVztzhDjS5rwnwTTwivLigjzLbx1cpxxKvtKpdqCG6kjNm",
  "key16": "5d2RyE6NSfBVCtABeSKPtw5nxfjrgKBjHhPGP7keSQ1PjffDZEWjXyBmEyfLSyTnr314fZ9yPREjg3Ut57L7Gueh",
  "key17": "5u8NDRdgcarcEZKpdUncwgnPeei8sLuvS4jcEb6wbNrmJWaKowqum5s1HAf9hjqhw8t1zU9RpSthnum6YQejA89B",
  "key18": "24twv3pvhbpnPMVm7qjfriDH8RS44JhkrvLZh29UpayXcHFKoCsnqKznk9Pkr9wDbuH4NmQi1ASXFMS23U8RuXaS",
  "key19": "47tSVDxPsqSxgqZT1iTxU65JqwgoDAb4ez1PZoNH6tHXbUUKQx5wwFvoh5vf9wyEJnfisexcDN6xnqGyy5Unv6oq",
  "key20": "5JAZps8kjDUiELN9VnA4u4NqPNhSZKaTN4B1EdM3iowTNFxSbMg7xcQhjKQNCpkxi1DWmxg6gxGcR3G315keKaGr",
  "key21": "3fhMMAucUVGFsGrVju1iH1CPJt2NqtAya2bBLT5kWDkopvnEXGmiLcVYJabfP3ZumMmuyowduCPzavcm1VwFvZqt",
  "key22": "657vWbKfL1775Ca1MWZxGmHAHotouXNgDjci3nXnwP6v8CYWoZzEr9JZpyH6veHMZH1zAH4t5WSwCShLUtGum6R8",
  "key23": "PRuJ7DKKuv2Zb6VQs5XCoQ213rcUP1M9DuReKVZTPvtAyQqQsFvVxFgpdPheGNe8cbjkqbmzmZDE9QsT1NdfaZ5",
  "key24": "36Q9H1W6SXFu1CPBpgeZd4FvNzA8NQPgGTeqyY3e2Mm2de84ib3Z12jsdsXYsCmcZKWF1bfTxksUqeuBtZu3e4Nt",
  "key25": "4p9gHgQwTW7TUEmVdWmciuGK7sJvQ86ZwRaHnSggFWstCj1iYSDmxym8qb9MRG69LdYs7gQcjsn4tnDw7YS3vCP5",
  "key26": "4BsAtPQbmtWTY1r3rZUE6vYwwxVkLBp5PRx2TQnfenYhqvBzeccpTL7ajAWmNL3vT8WQPDZjyPDqcBiMEwTeXwVo",
  "key27": "5kFFdfPZyy8vvy61znQKau2vKQVcGJCqqiH6yGw8mWmV14J8XoZK4E4ufbtnFRtDNMepk6m7D9tq35EUSpYQpVRu"
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
