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
    "4LDKUHj1XFddRnabqsoy9Vc41qtJ7o2HGD13P5ZX1L6h7fkZSLXkzg7LJmvXKUhTgN8MyNHpuYhAkR5rtd6bJGi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cr2sCAcbfQuMWdDSADPGdhCafHDWMrF8hzzqRzvSSanD3odKi6XtAHCKow1BZndNxJW7cfdh2S7uVMhte22hhop",
  "key1": "5DG6KLnUWeMZ58JiZXQc17wTMx7k8o8bdtoUAZhQFVmcx5RdLod7oCwWvXz5AvzL8ur6F2nBp8S165kAvscvdx8R",
  "key2": "57Ywe51hSfW72qiRSQikzm6MdXd63HhR2PJBgp4CpDSzbr5mCvDQrxr55DzzxSbAqMnNEX1o1DCmeyKa7bBayf2d",
  "key3": "5PUFz25iD4XxcbLNhZ95Zcv5dWaEZFhZXYEqmtUBdALWoHUJS7WNWTLz4EAMM626MntMf3qVKj7TdVdhQve5p9ox",
  "key4": "39jwnsPxff1iwDP6RytCq9WqEwAMsr46TmWEzrKqZXXUQXHAgsJRGCQXdBb7s9iMmWuy4yNiNZKyQRFJXtoDTPq7",
  "key5": "tAAk4vbEb8pgvZn9cLddcmQ5uCiK1G8w99kKLhQzKziWkMNLVv7yAc7g8Sg4X2nJwYJDWgtRBEVuzWuMF4XP4Hp",
  "key6": "51RLs5YkLhA99tqQuA3yUCnkQoxeS1PYfd3n1thn6h1iUmJT7yygL7tV8SUFL32ZgJchs8qNqYPgFi41pSPk8TcE",
  "key7": "5NckcLpDM5JBkkebRTemAB9aeXz929UKD49WRJFyHrdGoS55rPxaErzP6XnbmL4LxXqXW2p4SZ28XdmAx1kXQYjL",
  "key8": "4W5RKiaaWbQu5UFPjsqMADuCaqeY5F7q4yN8QkhtPvYNdHPAZ8Qu9vvS2djdYCdLuqa4qbuACU6e67bqtuX4hX1s",
  "key9": "4Lq4EfdYhMe4A76eY3LrW12iENJP1jRRjaBYyNR2Z4kEgTh6Azx2dMcFMnEnBMoRXmENpHJdsvK5s4bkxCeTBfW8",
  "key10": "5mquvcYJ9VA3DLbnmCV99yxkLTgiBEyXsQvD9qUnUX2YTHRVKMC6NUax7wvPfawfm5uKrjwNkfVffBAfYmaEednj",
  "key11": "5WgxCdtPrcCUKxTvQHLQLrpqvXEVJTMmoHexQ7nWAKgV66Uzn6SVS9ja6W59zfV28tZXbN4YKCjjnjzAxhdvUtwG",
  "key12": "3QGaV7Z5n4DLYMQ6xwyzjUQAA2qV7whGpDdYFQNaiy8hyT1SJTVMkMeyiLHzvTMamHzMzB12DwAnyenaD6q6JphS",
  "key13": "zz1pNDd83uk9VWKxMVug6YwMzRgHiA6RppdLy4xdQ7pupg6s4Lpp8yZGJjZuoQpiBYR97pRi2bqemXQKjECQvqT",
  "key14": "3TRt9sno1J6UPGC7F8J8izLcD4Pj3zn3Pe8jcvHsf43Y5LzqQzQzdydCH8CxqTd1L66ZNf55tYRHHYXw8xmRGyYE",
  "key15": "4c3fu4QJdYgHgdbqbxvbPqAcpT5hR19cHqT5Ch75LMBSqCDF8czW7YtwiZ2bDHnGtbGeeoEvHL2BvLcthWMMYKcv",
  "key16": "2rSPpZS2JwiR3NG4o9GsKgMk8CswXKEGC3XXmrJ5o8kaMmyHuXHbWGTnDc2pD1xfACyVJA7xh7Jskp3FTi66GvJS",
  "key17": "46en1JBrK3kWhmWuomkdKNTWMPXnPzyUfNcuWEGutGUXvdybV3sWdWagb6wYZwdavDbbH8FCJx59CBNvPHVgo6ue",
  "key18": "3Esz6ZTCG6GjnxoPyCuqvEiBRuQzkZxHph387C57tt4xG5PWR7UikB6YR4M6LECGxdymzCDKYogkkCwR4hAUxT7k",
  "key19": "4y1SAX9KCo9pcMtLwHPftEzHwBAGwMjJwVArrKLpd3yxf5HWoW7HjGdAHXyv9z3WSYe7G1tANNqmSou6UKRLEoCU",
  "key20": "4ZPANp6teprgQoa5e4HmXWnposNCyPciKCaDQbrUUYUMnhzJ5cJqKRpJGZdJccsqdTCFiS3q8iuwEwYurhsqM2Ax",
  "key21": "3KxqEs85F5U6WMysdocS1gxRXgAZZJKTtArguqhhg2orJaZvALbgJ6QDk1Q27Ez7E6pEgYQ7SgwQWCAbAXNu12GQ",
  "key22": "3qdkqWMXcsQHX3mQ39CXPLeca488TvMKVbQ66ZmdhmoPSq6BwYyPzyKwTL9LPQP5tpFPYnWauE3yuP5VG6nZjghx",
  "key23": "5zJeUhBeUiPw2XY91n5fh2BTHGvanc6FfopZQAgAxio3uQgrkbUVHwUtfDZb2mtoyD5NhftqaJvBAW6avhLYBPSK",
  "key24": "5Fhk8UJRK8BeADVANVR4i7wBrxq9gdVZxxmHyRqmXdpYjNPnrSHnSrLs34V12wBAUEv2Z9uVhznBKbrJ1WGpdbPo",
  "key25": "5NX97dxReUxLBrxZ8KkRVLGucoRfSVoodGUgV83YnzPDFimGCFpQcQvTgBkfN3iD6fER47EBFAngGoD1SjwDcrGN",
  "key26": "466jRbwina3n3y9knsbLuo96u9QyRCY5GpMv6Q21pJ9zHCiFzCRfVfYW7kBS1iUWktDhWUPXd121CQRkJABjc5u8",
  "key27": "1rnJxkyewh6pB5pkSqBniPS1BMWyGmJNH1uojE5sq9tfJtg7jabq5kY4vS15a9YDc8d3GUGVcCkV3rGpJXJdXz2",
  "key28": "5gJyTfaZzEqZvJPzEoX6KmLQV9MsVXwTJJNN67HdDgxfvB3MaEzqWWeiJrW4JUnoh8ukbEjWT9eCmmqNtnybmRcM",
  "key29": "3bkm3ARgq1pQ6vTbqAHsX5ST3dWeDrdGmJEfhoCkHYqQuk7oPH821Y39s6PSNAKCaz1a7q2bFzQZU9Q26ywbAmrR"
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
