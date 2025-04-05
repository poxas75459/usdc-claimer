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
    "3M3SRD4TjDJQGaNe9EPZQ5au7Pwy58TW4fuQovKH8XLCAnUR2MeHs2n4GHWYhqHofpcXz53iQ2VPu2VGpU11Px6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EdMnDfKckT4pNhFSt7DF51r1SNrwPokA6y3K9EiY87MCcQ79sYLuMgQAtu6reQBuzRGmDKkegDgLioSPzT2CXJb",
  "key1": "4qVvftRhvLaR6tDkDFKk23e5b3ZC5Ykxvq4MdbW3XiR2sSyqP8WefsyjTM2pKRejWyH84yN2nWhLU5SaKGPSZ6uD",
  "key2": "3AnogqWtTXYxEwhh7q4qha2ku1UJNAgso5YNgEm5vb3UcjbzxWT3wbGqjqW37mXDVcGVRu9bKhAB1prwLkauMUKV",
  "key3": "bDmoLCRyzWUeGFPTDkBSdNjoHisBXxrp5ahStoYowRPZVfuwmq4jrajhCCxLi6oaeDCK6HpDw6LCZdPgVKjtGwe",
  "key4": "5ZxVLD1R2HZG1KNiaGh1egT4qYnmZB5nfA31u94bUwHD6pEvsNMeQyRtAVwqgHa2y28Aeo9nt4t6sLTMD92SQXN1",
  "key5": "Mqjinyn8sxrHq8QJBKH2sLJirPMYUY8hoWAVECPG1MZ3quc4nsnQQMqCeAKjxi9a5GvvqmN4QTvAi1JkYtdieVe",
  "key6": "43T2AZUykgCBHYaSzoi8iRNY8ZYqJm2m85brEAVwCLiZXGxxj2a41ZPWxEpWzAJFonR1NbemGwUgjco2GzLygsCF",
  "key7": "634X1nUYrfahiMGvud126FfuWY7rJnk6bRciX3cmQ86DnhtT7sdySHoNzmkokGQDyPT3MaqmDS4McMHRAwoStJcF",
  "key8": "3F7GtYCEhjD5btN3Gr2EeaQMGJpu5d7rK8a99XyPW9eR9J7GHg1zuQzL1BmywTKEPG59pHoF3cBsDHYYW9dDXFse",
  "key9": "671zs1Kk5rJJG78qLpjExAusBXo6wj49YdDrzxsDnDxsesnqEgDtZkAynuUQkXm2WHngVvX9PkEu8J8MLRCH3HJU",
  "key10": "3g5VdKyaWQfPU4GdA1db25Vy99ySKmzu6BwD6hcd3Uo936SPWaE2G7DmwX6CpsaaL127MVUDXh86AAWAJjTzwQgj",
  "key11": "57EhwPBtfhoECLuvrP6bSnjo6ojtLsbaws2d1D6UTjpFpT3FXwLudBJCt11mJcv5UTtEdHs9HA6nSLgS23SKkEvn",
  "key12": "616LvutUvshg5LdfzXE1k7G4VeT1QQv59NyY4DAXAqucLDUtGBjq3H5FovcBrC6Hffw5xNZ4DFkkyqTqY5W6rgVB",
  "key13": "419TeAeG9WZUK75gDR3FSxPT4PwKK7bvyDwTGMAq9vH5UVCd71nWwQu9Qm1ACf6Neq3mFE6ZthPjjc1CiiCnx2J8",
  "key14": "53NAQvKPjxBCGJhKaiiuteGj17XxJpfx71YmtTBL2SNxdrKTaSiBtmCE4oznMB2rhzjZwSwnBAx4sHgnUA85WKPi",
  "key15": "3PcoYJTY9iQjZRBKv1M6TL1uqzdcQgLZrLz8zCErMLRZVxrApobQ1pxeESv8HeEaGpVYQtB6JDqCfqP6wSW5YYGa",
  "key16": "kLxNrK3FjwywsUno29wywEPTv6UQP4EaAmHzMQSKzQv7VoMKRvnRbfEM5D3pnLsKgZ9jtqaJwVBiwVC1cTgHJPT",
  "key17": "3Y7AZ2yvGvaEuYwzEvwnJ1EnFCjQTojEUtM4KgLgbnHyuzNsP7WXdQCQSJRimPPDVeTXX9Ht7hdfZp4YfdrhrYC8",
  "key18": "3nhuDetgJFG89qx1Q9APoTYbdP2spXTrKyFCGxvZXabhvRF7gza6EmZCX82AuUk89gokNiNtjcKNa718S15FG8qD",
  "key19": "4A1MYYE4QhdLnhYMzPugXZyFvrniLbBqxmTai2XuKtwEWcbQrzGKzUmYRBHVcMH1rXY4kNT4jWkKSb7gzDawnkoT",
  "key20": "632c2j5zvckdVRMjBG27Fk2So5RrYvGtFXjBkKhJwReGtKak5xm7Nj86YP3rbkgBM1zAEjtEHJTzkQ1fahpXmtCG",
  "key21": "4vhjCqXQHt8DunKN74nCtNnQj4D7oNUAbNmLYiFbGk5FyuJHaqkakCSKerDG9bQCoaCurUUY7Kj9UPjpmti3ZgCA",
  "key22": "5p6offAaGA7HpLo1widFbp4F6M1f6JPG78dDiF2Jms36fNKi2aztEL3zF1VyyKdHbHqv1hZ4zt7qJ7bd7Lw9QauV",
  "key23": "3JMaJgdGr9QuTT6gMfgG1a3c6PVtCc8U94GBWr2VGEjoCzEqTNorfV3dZs1Wqg789zttUiKLjyTUeA1AWyFbeA6Z",
  "key24": "4V8N44R2vq7yazJPsbfqan1ZM33Uq5FEoSH94in6yPnKjTF7UkcFeQNHBv2yVk1QW366vtfRpqLU2V9TaCT4usku",
  "key25": "3QtStKPSqfw9gF5bfGB94hcg3spAhJp47xQvrscgihaRZ1rRnXxLJu8jpDTk9iudFUdTgwuz9cv3gupAMLGECCbS",
  "key26": "2A4JTRazszGqN6HEN55fEGFjxWAZ9xerXNHjmx3Azeqn1HhXhPUe3LVJjSeimjV67Rao89W2czr8YdESVi5aoJPG",
  "key27": "4kWLPz35Cx12qnpkUHjb2q3wAoqAADBgEACEPfBqxdSmWC1wip5SHBB5Uj2dxL23ggJe4heYV5ADjv89fx6xgWT3",
  "key28": "2FkhGf4FzM5u8MMQorjeeXe6Za9qdmRmwTr13QjBv2ycQigu1Z3w82WyVvRqz67tuh6WhPbNEWku3RxLrCiQey7M",
  "key29": "2rqqHjRiGPvTBJv4W1spjEZLPbTFYdfNDd4tys4Q868phLUcr4LZHhPYaNYW9JjNCpdd6ggoFSFmFohwomqtiivg",
  "key30": "3qxmFWDCyiz8A2w4jhxZ8KqR8bCJYUC7pWf77SzaDem1yv7CsPkhgTVG728Cxt8YfJJKGyp68CFCycdp8VX14dyu",
  "key31": "2kUzTpdsy65yDQwZGTGjc8nYBBRw41B2gDj8ifg2FTAsWn9Vtnmd9mmuuEMh1zyxCAVQPfEP45qwWTWBQ1soC6DY",
  "key32": "njzr5UsU8TvEKC6NF3TfU6VWxG3qjNTeiWqLSfEw4DbTy3ZX2HeridHg3s3d2wHAfKVmKP5fWgDgwZeUjBmriZx",
  "key33": "32St9AZGdrCmoXoFVfHqac6R1GXKo4zQDmuZxAAUcySWnojpuH2FLpffFymK82Xct1owzz8LxXvsjATMBy9zL2Bk",
  "key34": "24Nfvbs6fKdMosNDWX3sRo8aY34dQRV5xeHfgGqngeQBTtfz9un8V5pp19FHCsQ2YQ32Cx5tNd8WoDd6KgrtLax1",
  "key35": "i5SmJBc45W41JViw4XX6kincvHTyP2BBmmu1FXk1b2fRJvkfQmKwVB2SsSeYvjYyGM68VTNMrWjx1ey3an7oeCD",
  "key36": "4CtxncKbJ8Uhrybzux1onkYjdMdXoAfUJQGhYLnEo7RzJsce3QRZi3SEXmARrSxL1LTZKPB6vXdznGiRdRLE1P9m",
  "key37": "36HrCvXeeXmpyWmAKiMoQZwihsjQdEN6aJTJCfuMo65wbh33X3DaGiiadHEYTWxRuK1NkduzsWZqEqHsWSKQh6nH",
  "key38": "5iEAevHcTorFzqR4yfYo29aDf21ymScTaiU5ADgcBDUGDMQdWCuoFdgpvamUD6twADixgMdgciMdLT7Ay3QtPMZo",
  "key39": "2b6aEAbgm3TC9oTF3c27sWdxRhvGD9hFh88MKVX5KcC4syQdj3W3wfQVE4g1zZTG9AwCZc7ZGJRJG2XXd7Pva7JD",
  "key40": "3spP3pxs9Gvx8F1AthbaQDd5iSizowyBbuNYCR8onW3UCPPxq4KaYSMMTu9NuACmEgRuFUZGZ2dYvhnkonaoda7L",
  "key41": "4gh3WQ5NhvL5Yphgcg2w5tpQQHFCkzkFW9RnqMJYkpiMBoSNCkgRetCLnzSTNwimF3qHYTajLaYG2DhVPqcDYxNt",
  "key42": "3534miQRJAeu4e1MkQFJS16tQ7gR8Y13s6F2tgX7jcTwbqfQ8SRPiYpJNVnBnwWmEGx9XHZqGJznLCiEGw7Zc4hQ",
  "key43": "4joBxhNQcc9wiNKGWcgy3WzSqpmPPwbc5fUswMZLe3XSuUGKFghWY2HdwSygPquBx5pjEEruLXCJ9XALihbxCRPe",
  "key44": "4KY2K1HyLU2zFBmcNWn9EJeVhrqpdQe25GhTM2gkp2kR7pm3k8sQoxHQpL25ERTFxzKMmXv8pRLEdfu8weGrfWBH",
  "key45": "5n36TEoBef5PXHuzdRNaBvLiRDYEudXjatkmaxcdGbYvrnSE4ZAwSVx6JhGWgd3NYDznTmhBR5ohiQM5Aii1mFnr",
  "key46": "4gYYfgDqPYzKooYU5LVV5m1npFKC4Y486L7QmeBDVWhZBLDCG84VgSQpnP8rPWb1MfyrrSbLYR7YjgeWmGXVtpWx"
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
