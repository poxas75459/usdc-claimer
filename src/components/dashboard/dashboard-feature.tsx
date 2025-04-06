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
    "22XyKnpWAq2Nbi678CYK2Xtkdf9SLXPfonbDEKwwwy9UZRsY5URVe8U8Dpg53BnH5N3Ai9hR1UnDx959Yj5H8wGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvtMkwheos4YFZbPQmzjvma8Mc5aBesigeVhxhA1DrG4aRmf9pTPy4jVf849mKWZMQX2oQDhN97yNFj1yeNLyTC",
  "key1": "2nfeLLkgZsFURKcK7SJAWwfNavjD6yBjc9qZ3bquzNvWACV3haMxvVgVkNskkfJPshZ8EQvF8C22aN9zCpPS3Ktc",
  "key2": "5xdEitpcmmeMqaD1gtWkwv9nbFwsi995M8yFKSDRwNzGezVJ4aSPnALSF1z6cUVNfyZKggvBSu1DRZZVokDobMyL",
  "key3": "jv29bXPP7yRfmzcLsbwcxDU3nn4knuGiuLhKJHTshhXNehMHBDY6hMqu2oEtRDT2xKc792e1RThTnayzuGGAiFS",
  "key4": "3enHdWg62az1K2yVGY1z8bE1CuL8kB3vKKUVmCqqQGMoS6F2a5Hm9PSjsqzNBTykjooegEWMFrYjCw4SSAdboekr",
  "key5": "3HFU5QasEGjbo1V1HHxfPjp3pZ4coejQ37fAhfA4xKX7L7USvdDqQEbW7MZQkxaiqmyaRHNr8XRzXzhUQiyiBRGK",
  "key6": "4W43fkfuJmf3fZvTfGxwkjmr1ehHauTRGqoa2MJ5WpRcAR3ehsMfK6bXmC3peu1JFuwvT6RmJtkL8D7sq7ooDtsM",
  "key7": "2dknPN9Nc5ubw5cfBtFfPkHaZysu5KdXYffgWNs8E5B2NLWiZeQEX8SjqfYb1PK7jXToeBCsUvU6mmcyigzVL9gF",
  "key8": "wkLunJ2Dni36pYU9gMSD8RqU3gmRSHPhBuKVkwH3c8AMFdv6RxsmQBtvH3YJDxhDG3iwJULu4DW2bsKhKeNLGxu",
  "key9": "XTX4Aq5DoTKUgW335phVJTNYZUMauWCfgyXFgb35G7zqw1oZWmr4qN3i77pXXZFC5YpMfg4UD6oPiV6akGeBueH",
  "key10": "oVxiTvTkHsi5GetZGb9UCGuHcKgkFJPtHQyGPuhg1Xz3TgtZduQXGkvJMF17HTxj4c93kLuTchUTbGUQ4JvXXQj",
  "key11": "vqRDQyc4Bq2YHhLrwtDtPu9zoX1rTVs1poKG7MWMNGix4yXmEXx2NAY8R1Cup9es6u51qtWa6jxs89ufsyqCN8m",
  "key12": "2qtDSNrwJdmGFEUY8aUAdKMZ2buXbMuDFVwvgXfpuwcnShhTe18GoHzt2N7uq3jDNvm1VbMdsHXNpF3hnp3w7bfg",
  "key13": "4HSFvZLKjvL2rwf6jn2M3TtzEXnW7PrW2dmCZDAWYG818CUYWfQaiAqSdUoJMUwS7wxC1fn1YYvaFDQZaH4cP8ye",
  "key14": "5FAu4RMdxApcjMtibxobgbZFWVnSXb9qZFVo29yK7ZSZCdknZsUvYH1kanxPNW2VizfWrSWNAJycLaxbWHaSSStV",
  "key15": "3zQKX4XgGz3tovrg8V4SRotSc4SGpa6jvSqFkDnwyp5aSRPtFDvs8yLGrLHne83KaHwedrdyre1FtFonSSKsaPun",
  "key16": "4DHJAEo445UgiMfBzZKCdWXwn2zzMVhD2xqD7QsprkVm1L5eKQKpXExQjs4pG4Xh1GRr1n9rxQqkrmtgeEerJ11s",
  "key17": "2UzxioNmoJyQbtDiLrNLtQB7c6cYZkmiBYCgGqJxg5QG2vppG3ZWS5aMtmQN9NsSfB8TmByUqfMKk1jjE1Qa4nbr",
  "key18": "38N7aMyvStr1tiy6yTgUcCq438WxRno5aXk6oiaGJ7WhdKecErL29hD5e5H1Zd4TttHz2APnF8tHiwiVcNTufjcs",
  "key19": "62tSt7sMsbkz1k6Nob73RSWY6tQWpX7s5NpDN1KSQN66dAmKBDTjUDEJMt8nSGSUYaDSyMoc5QHEyqE6cpZbGDvG",
  "key20": "53FdBnezxC6jxkW8Z4LxDHgLeovJnQypSFXXDgBFvaNj5yAktNPLiTJ5R55FReHBPA55XGRAAFCRrL4GxZnYufk2",
  "key21": "4tPyv648DJGbbTHVxEkQRFkgkZfKkjGSuRTzb4Xn7LyKDkzoGT6PNepkUR2j6nd9xeA5N5pYZkwT6wEcUcxyasjH",
  "key22": "35P8s6GVEbNetuFvNxbLxNEXMzkU2vyf3TcnVkJzHxyehfEYU6MZeq8J7q2qJ96z87C7pjGYXkrF1GG27qLZzdU6",
  "key23": "oLd6b1iuyRZgPpiVNvrKNAVRmyCwgPpK1yUBdjtXAdfqPy8NpUXjnspkFLYB191uKYcjjWPtWr2fVbemRS5nLyz",
  "key24": "bY18Ef4J2EKFkyjBdNquC4X37PvZSA5cVFh6T6KKFyep5npQc48PpYvzjoBmiSZAHbB5uMt4TnFf9rin3Ng7xGv",
  "key25": "3MHshQMkWhvPHbi9X7kLeLxhAoZw3S23HBwXoYuDYEX2WNChPe3pD2KMSzjncsEmarZgTtanfHS2ymST1ARorrK4",
  "key26": "21BZjyRbUvmrBodEuQNaMfr7RyuKKsLTykYapShFsWuPw6ASdZhMXxoVmC93CXajxREYNnbe2L6Eo2rCGowY7PYS",
  "key27": "4YYmTJgm6GnmAadZriphbZx33rXokNPujpdgRdJ3JbyX4kNvdq5tVLPUNfYQqECobWdboEFJXMMdw9DsVAGHLBnG",
  "key28": "3KvaNbPnPmVTVz58Tnf8UwMy5VVoRgiY5KJ2i6vMrkHdx8rzGpur1unYPG5mnsBcbxbark5LsmvbJWRBKHvUha2t",
  "key29": "3cy2BjB6HJiGxCdFoGhD4TECDdjPDz6QGPnfyMbsegKEjpYpTovY33zxicdEQQ6Nor5dhNLXAC2rRTf3ctsqqDoE",
  "key30": "5PnsRA3d7uie7RxjfsXtck4PgVmqw1AKuSXFhSQZZQbZiK7ygEmzNagvq2iNBFwvpNkJDNtypigqokvmeprdPeaS",
  "key31": "3W1d56EdWR6A7Hj84gQ69YgXRHeJNDXs9dp7grDNNoQFpCENRYM91yxYR4B97CVQawkDNfDnumH9vt3eYhViJW7m",
  "key32": "5t1fem4i4GyPzqaYifNjqJMTptkiaALxSqx1KCMME6JqkxYHcvbWThNpsi2Jnu6McmrJFJxdhECbEcBZd9vqSt9x",
  "key33": "3yM63G2G1TFbPLxASeeiNu8yRvYbwEbSABV2U1HbCDasYkdZGfoME3DMfQ3Sd1QoD7saYQpVHBsg9N4Qfo4bowpL",
  "key34": "58jaMpes9CDQgk54jnE7J3pVRRtbPLajAXewWXAy66DLKnucF21T395ZDWs4tbHgaXC1fkSY17uFGyvAhVVi14Wo"
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
