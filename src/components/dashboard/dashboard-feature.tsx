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
    "fJcQuNegTtPsSUwXME88fWGXzztscUjGYqEUSzNf3BgZmsp2Mn4VcwYV1B9ZE4W2HTxQ671RgcnsTVcWyRXuuEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LNLf2nXtjVwWufWLNKespvWCBcHLefmxoa5L7YCacaZ8KeyCFvTtEJ2kB3LvqbkkuGySuxieNf6Wf92jAPZQfCe",
  "key1": "3UVrBUByNV2Fm2FhtHqztjvF3MdvBFKHxGLx25ZVSoGYxwhJVLSR5sfJv4s636gK9TMptqoZDJF9WoYMCDk5sewD",
  "key2": "uATNmH2qquyaGDQBsowFn91EJrxWHNsChNDK89CuPViM6kmgr1SvBAqMu4phPguykNge4axGHbn3LYcjhtmSvjC",
  "key3": "2twzHsw2WUfbfb17YXjGkVAfKGz577qy1SYUab8EJMBHD6FYYgfurdJPQ1MDSQSgZE959Bvh4sgFeKzPWQKd55cN",
  "key4": "4KV7gJFsPUyA6XAHZYKAk4pfvuWuh5ofSkZVyagCEfGNd6NJUMCsyAfEtwW9fCejJxGPayVJJoGFhomzdtp91vHo",
  "key5": "5uiKGtj5dtm91DxDGiQsCLyiNtxtgzD9vNSjBFqYrJyWRh8hVUoFVE86igeA3D5tnWRn6tFBWR3nJGANkjyFUgqf",
  "key6": "3wz1aaoMeHqPwRiEmZyAjG7FtamqoGRfakvtsMAtsQaSV4eHsJERiXVZnuSPosuqzbATK2BTVjAQvxL2SyqQLt3T",
  "key7": "2E8ePTEco17QS6UPeQR4goc95dri7Bvqmo5Y5FpvW5G4Uc3wBYrX6ZzNzZCAAVFce674iK6dpthvgwQaAxHpEPwS",
  "key8": "3XNPHH59FmPtoENG2T1M7LjQ3RFnqwuBNbhS2aPd1tiYPDpzEWu8e66feuYMGsXwwoKG3Df1uworvzh84rPeTPBY",
  "key9": "2QqpPfe6kdUciUntBZecBJWPHoywgem2BKR3f3znU7K17Q4YnRdEKERfQKVzpM7LQfGyyu32haPtJs7wLe9ucmnv",
  "key10": "MxiSuD3zSSCSNmTQ4pLwEuMShSvJ3kpeHbCVYUptdJxrYHJPSujkewn6B96wbZKTsPzxGYBKpEckXgBX1YnhPEA",
  "key11": "a6FYJZZB92VhTVr8bpsF72CkD1Bb3h1Pe6cnHqAQr2Z2BCwEoJEBBRAtM59Di7adqETes4CPcDF7ZNYBYdvkYVR",
  "key12": "3ELR7uYTKhvKYHGK5zJTFwgntGEwBikUdpZB4Yi81Amp4WrGeX3yNfLqnNfyJ4QR67cAyAfjEU84ExF8vAhkyDVP",
  "key13": "5yffiHf7JGcMLfofE8vajuhAh7MJyh8aFcS8gXJF9DMquZmS5GvQYTxyLBaCTKnMyyehu82mUddkwx7sZcMmcjjA",
  "key14": "3vV8gULivYX6wdxbtBm6T8ipQjM7BvBpMLuugKxV2cSWKMvjYJ8kEsfHaNRjrt5kuyNb4iqeYAQ4nq1CGdy1QhPY",
  "key15": "5yhDLdR8yc4GRD2iSSmzu3Adqa4PCZnsBiv42A5acoEf1GTRM1ExGdLTvKr58TeN8e6a75CyzAxcUKiwb6HcnMdG",
  "key16": "71qBkAm8oztgDKw1GHUWq7SN3PLzurWJYKBhuVsHUXAQ8cTUhX8Nf7GVxa7m7RJeiEMEZPDRXtMybiRpifWagR1",
  "key17": "58HZSgSQg6jR3QpAywCHPjUwY958nneZvVEkqTFAHWuUZSMpUGpfvsrzNu6PhJ3jtY3vefh3xz6iZ3NRSnXmyrSm",
  "key18": "2JR4wwh3pf9efr2rKEEGXeNvVZua2mvYxQ6CUbm45MP9hWVZhJNSNffHqmEPxk7CEBJaycvyPUJ5bB8W7eg9p5KQ",
  "key19": "4tWCB48pMxc7ZjhvWMe7gaBg9Hh4DZKANVQZdvihuFvsCnRDCnChxwCkRVND1t1XgyYL972V5Sggtu4uumGSAcLt",
  "key20": "2YtVMH9Y9q3uuPePZ1wzzcSYNyZoY1GSZ4QXRr4rhZCDxHSQ5Tw6UGwwD4HDJj2SUumb5Sba63rtC4xQc3Cnr3D9",
  "key21": "kp78gpGAVe4UXbbwgDEArEhWu8ZFSiM6fvMDXYk4yDQgzjsq6SyqUPxhTTho4GJ74xK8apRHVbe35UkRkx9cKME",
  "key22": "5NYZhBCk2CawPHmspgcCj3YQdviWmkJBwJcajiSUfyYQuqhP7fQ26C3x4aJT1GWUnSC3MNkoHTsERzA8c6iHqwdx",
  "key23": "2NFo85KXYYwo3X5N4xcUxBj8UAf4SYic4RsYMYBDnKcxHdBxQMxRjYowQf58os1MfsUTnKDR8vutMZ9N1oab4NTQ",
  "key24": "EkpKshgFRUkH4xmNbJ9dJHbxLDwaa9Ktcc7qMiH3DmJaPMvDD9Ztc9Xhk7AKUz1xb2Me2PK2aRi824ptp9LqFyQ",
  "key25": "3taD4kDbrjiaYg5hJ4gw3vq1fcA4mZMNwmfE3dqMRtSfSb1urPt96sFUwnBLo9eyrgFLAkU9qRm5ay8RxZ1c7AcR",
  "key26": "4nfUD5y78UFUpgSnd3eHhuLUZPZCNEpvuGkmzCFqn5ZvTd2DJFqKijd9sgvwQzCyecuuzksD1zQRiLWSgpkBv9bo",
  "key27": "5yLwSzWf9FsFYNhJXm51bcUdfwyALDoWD1FM4FC1KijVb7Gh4Tmben7YpS4AqHAv3qkA1mXHQ9EgnZdUfNB34iTn",
  "key28": "4TF1W7u1fuXb9pVBGaBeAFJAADbSnJrUL5CZwVUYCcRSnnEuGZbtG1DeUCBPPBWhqtjQs6yDvy9zRNVkNmDVx92H",
  "key29": "XQoN5qJ2wrVMNCRfbnQsaMdV7TB8ZahxXAQyB1kaDrWXUnbyyEmTcH86cnBHKK8YowoMP4AW5WAZf7EcEmxEt2g",
  "key30": "35zUVoiArHqw7h5MJkT2U8DRBe9q8MN2jEqu6TK73JcL9dRgbcHbxPtjFPm2XYkZiKuMoamcEjEUNEt8x6nfUcVh",
  "key31": "5uyAVxT5p1EUac776BxeFBGnN8im2SqBPsgSAn7RXXip55CbwGhGrZvXenJpyxMgquLMLM5dq4VbUF1EemgrQsj1",
  "key32": "5JBtPCRpGhhwTXmRw7pPH5P3QUFVCAN8vHjK8kgcKvQG6sP7psotnyLCzShPmTaMxi6y6LxDja6w39bZoTg2XNkv",
  "key33": "55A1ZN13pmyQ2Fmr6sLypBwuGFXdBNt4fg2r8BEQmkS6QSgfW7crhXUgw7SiFYuJKN7mx5ALqQ94tdPei4xs4rW3",
  "key34": "3jkd3fYzocfTs8ao2ZEPe3vAY9i6xCcMWAMB9UeKMd5ccnJisPgm6BDzSiwmBx3Qr2nQmBU9xL4VkPQ1BHn43AXD",
  "key35": "2JEimQ7nBgbdCgWFVBgx8HzR2EJbGpNr8cciQKUkWDiJ7ysJRYW3KrETLtp9QJeA4XfcnQXzPuArGctot6Qgy2dE",
  "key36": "3MR3xjuLNtu3aiqNe5xxYb2UAZPQSyS6x7hZHqQTQrmKriqGWr7dAsdbgzAQaeAWFxSPnBtmRVqToH8YbjgSPxBT",
  "key37": "zmFHXVHkGmoTszbN1tLAgGTgvu7R7FE2psrhL6PEcLXZ3WqJzM3ACrgoBdDZDWDcTxq95Cq1n2446xbnNBskK3v",
  "key38": "5jMJ3LBpySxXe33gSXV2SKAmxKN4MKnuquUEGUPdKZU9t8DCKEUrtYi78xGDpHbnSKJQ9YqTczMstFJn3ws4c9wT",
  "key39": "vD5n6qrPWAjChtGWW8QqBHfD2jiSe2ofcomfMbNGiAau91ntLw54oj1SFHrVt56Bv8SZjLMcAeNcA9kRhvxj8Da",
  "key40": "2FyBZ5FvMPC5FLxyaZEGAiPHckuPA8t5S5f5RfD23q5kxuekpSBVhVEjv5pvmP5ogAmmEiQRgfzgjkwFRVJivCKk",
  "key41": "3oGwEfu7g1Zc2KiAy3zKrRuiWVmKWnbxViiKmo3LxZ8SYKUBi62dWdcRpsPTJD7MLK8SepQytZggMtPnDgTpAjRT",
  "key42": "2kn3ondtjkvwdFidGTDmma9guZh3nkKxt4DxK8EpaHJVCgie6qWCMxzUc2vqzgWqZzrYuFmoSLoC4xfSxTDunPQq",
  "key43": "59vmydssRy6X3kEECmpDSpdZugcByXXG4fvVYKT3xKbRFYZvDjqAiJsfo29JLEjfb2L8yregi3fvaxZNaQSisEAS",
  "key44": "3jv8sVamHobVBf2jqusAszLGKK3JdjR12Rcq6so8tGw3UGXsGkvYzKrhMJ3mz9Uj8ZAvtewuNutFc3vJk2w2Py51",
  "key45": "2BrXJiW3JxLhBmFxe1CB52WCben1yiqjDFsWSM7Sq1xMQPcitDmk3kLz4kbS1MSGbdA1bCz8pWutZQ53Sz3ovYng"
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
