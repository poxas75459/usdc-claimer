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
    "33k7HYSAskT1mS9rqpf8iMU98VLc3zf8PAxwX1PBrq77xmrytxWCAQ9Gx1nqEgHiK3sQwstmwxdPNa84FEopiGsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3zuDBkb19rPGriGCFAPweCLhGZPKGuyWo2fuYr2tVKdwSsoF59u4fA4jQtPKMERy3vVKJ4aT1B2FDo9Nz17kmX",
  "key1": "3vGYKueJSsfAmSDmqRt9cvXH53kkaobdwcqxsbsFZ1fbtyfQ7J1cFXTJ5HC8Aww8BMDhdMohYCvvGwQA4XK3yTpZ",
  "key2": "3H2dBCoFxYgeo9295tVrznyGaNuJ2q5FX3vtboX3Ewfx84YPRYCuCDqMqgb3gJtNkE19R1Xuqc1jojNknCUEmxeL",
  "key3": "3SFQnWxF2idfQSqRxxCEnZzxpgZ7i1wV8Tv4hUr99EpiHPDSuKLFdt1MBA6dgq6UpFQLnUCUe3X2EPsAEZaABfzw",
  "key4": "37CsqQDKYY1rRatpfNQbhQSqjNKDybakj9xtg2uQAwAFrj4zwEmixUfMAiZeqArCdMRvSqtRRYdnfSgYwHp7TYgr",
  "key5": "d5D8BPgiW3FykYebitKeyB4aBQHUx7kJKqDc8XcFjcyQM7B6sAgYCco4kydJLrcSQQLtJtWhoTkPc8YbtXj2ZFa",
  "key6": "QDVgZ6ePTH9Wdd2CqNfFrDtXumri7pJ3RxLAsnF1vkhpG7CccBkg4wTKQExkEUQTsBmaRtA32A5PMMPVp5irP8X",
  "key7": "3LfG8L48TpYTPJX5YkUQdvo3r8DTJse6UVTztxc7GkaneLsT9RrCbQkMA73nATGfbCZmkkmkKnJ5scFML3RXCWF4",
  "key8": "3VPrKt9TVUAtGBVGmHxfLCyFr4D6oCx3MQoUKpviWjhwB3dZWoaQCfqA3kZxeBumeecT8swGRpdeuMmgzSxaVNzZ",
  "key9": "62cZ13UAoZrmhmQbEDuyXCj8PMGLS8orj4KwEafrAmvf6tpikc2gLUkaYDnXZkzETk572iYeYK8kzCQ4EhDXvXyA",
  "key10": "39K56EVHs8yDsYp7WT2N1r4z2ybfBkNTVquTUxpo79mPG94XiYh5RbvetZcWMhLghAcrYjsk2xz2KJsioJrCBRUY",
  "key11": "5oV3MdYRBrMy76XG75vpRXr6X8XxyV7YDLuv4bYr6tSw6j5C6c49VBkPjnkC8bvFT3zoNNmQopTqwkK5Be82ZQny",
  "key12": "5utFosAjsUkbjCfC7wwV7XnF12EBFvrdsvYkU43TxgYYfRAXd37YZfAS6ejn532iZVqseoXeVqqrY2TP57w49ZWn",
  "key13": "66R3p6tLHpDRp3CJJNngjaYGyRz9dcRLEurbVgy8WiCDRRFRc9PuZgaA88GPUXrwRsEojY4kASu4b4jvQms1DURw",
  "key14": "58hPC6rUxWUYPjbYQ1fWbotEf3CPePtT4BExHJnFKUGsMJkHVhfuc9YAG7VCttnSZ1uyegee5xi8YdMnJxGhDmzT",
  "key15": "5Dfcn3WYhkL9LdeJjaLT1mmYj7oX8HG8QgxtmMFuVKfA933NxTiD2gJaS9x9kHMMTkdjfvGbbNfLsRzZ1PRtdbdR",
  "key16": "5PQkkdtQWw1rFC3v7vskzB1xWaabY9QkQo9GvqVNpLVuxoLYYq9yYnyB5zxgKtyAJjRc3zYCQMAP3DjQR8KsoBaL",
  "key17": "2yjStkqojQBL3enkRzZeXSQTVeXwTGnvgtP1yksVQSLMY6ocYqVv1RuqAoUUw1RVkwvF4xLt6EnttB9G6otv2Heg",
  "key18": "4nnUb34W824DjQgLPaUvudwu7Somn4Ceex93WXrF7CLCwZ4J7spA2mddKwMTpabnETUMaB74k7AcEkMZYB2ZbJof",
  "key19": "53GhaNduEEEFNDpdv9YmBUnF2SvU2sxvFyS9XRfmAePiA6WbTpmHVqC5AdBEBngxhBFxP8EtL8JfVFwcSVYMC9bm",
  "key20": "fKKt9a1f9tyK2pMtbh7rkrnUC9uiYyMR84p2rNpdzyXd1ev3B129n9nwou5PpfF7MjWBhGrc9n8WWXfDyoGTpCT",
  "key21": "mCwFdTYCoGr9uN9Ja4xxTZdkY48Mr2kHXqVYh46tYtuyZ1hDdj5DC7bCc2NLZXuhVtYshh8X3DBCDVe6r8YVsSm",
  "key22": "jeBY52YeKmTVwYBNnQtmnbsmFFTYzLFc6UwfrmZMgVMccW27LcJ8LRSGn9FCk9Kxakc7GjGRpSapHxQumugAyfS",
  "key23": "4AwoFjMq3pRq6zV2qrsfC1Bj5Pp4JGWUqB28tD6Vs7V9Ud7uex8DpCjSpwaW62J8tckM7g5UidR5UZGjbyEBHxiW",
  "key24": "5JEbMZKwS764ZL6pZXhn4RmuZXrUf3Bm7UedewD2JW2vYipfycaYHm6pbERtr9HfK5aJVnkLH9eDbThprVoijPSe",
  "key25": "2kLFmAYM53mJWMYCvSYpioqRvZshjiZ9xPPFuRs6TaqhZPt2R2CtdT22VefXCZjChZtgft61kyWZVzJbi22ruSDY",
  "key26": "5RseXRtUcCB3c1Fm24Va1eoTKXX9489hq8Bacf2mHk9zwM3UFzNvY8fu3s7RAzzbs4Sx3ooQGAVsDJBmXuvh5S75",
  "key27": "5xwfuizguWYR511RbFuecLw4pm52JYbM8Z7UhwYLDgP7TYsoi7rZfzivUffZsmwZ9dpF4Skma4R94mbECoofcJ96",
  "key28": "4iqXJCAX1twSQ7sm147cJVYaRr2pv3RfeFFmSZkaBUAcvdSB2gh1LDTKDXfHEhssJtopqKpxPa6aXngkJQ3Knt5r",
  "key29": "XuNBoZ5Du3DMSd7ubNhiVFxt7PBgkWPzXLivC8qya9hZaL8BGG7qGtLFskh8WZp79EnL1UTKqmh11S5hXeqzojf",
  "key30": "4YGmipXjaYJHMDRrsRNKBQ7iT4nc95X2CDUN4hah4HZwBi3uTx8syxJKYL2MbkgoSFhYNQyid34mGoenHB9bLZ6k",
  "key31": "5TsfquvVxcertGkHXBuAVAmo4wNyr6o8qgTForYFKAfTN32NoEDKxAj6H1pq4KiNrSNNQbQdiM2YeZHityx5DxZP",
  "key32": "6KuYFKbZewu8W42yXLimyCwYWoUJfPBQjcnsFLHG6NeWSMy4ewRpg2i5mB96biiysspR7y1g1PiuXX8MN53otaZ",
  "key33": "5Vepng6RNMU87sR5cTSpAipRgcUcWHeEZAqJDfdjLekESwwpsksfoHGxPjjjuG3E2rcbCaMijri8UTWb6ztdD7xQ",
  "key34": "4mEk4GmDvtWTKyEuaV5DwWv3UsEtBxKd5cpuFBsQCuJToEY77nK7C2nU4LeCTof5BYUVCNp5vczv2F5Jkpg1Vt83",
  "key35": "jtpcCzHb7gX1GHZLf8Ap3mXhWg68hcu5ztUFdivrDRMtLyvax7FctdKjffez7pK7UWj5UEU9ny6ccsPrbpHAzU8",
  "key36": "EXggkSZpwgst9SRhsE3gvUFz2viWnBikHSMm4yutBAUdpUiYf4WcLzTgV4ySMCfmqJj8MJBATDnzGcXZZ9i21wY",
  "key37": "4UJaN2HFWvmspPvZP3WZpvCC9HtdyBkRWTSLvBFokyRUuX4yBGr4es5ypEn3JSCSNiMUrRNwDg2qkaZPZmn2WKfg",
  "key38": "2PK4jqoEHBtmpRU7JkVWz4SVMV1UUFvZvLNKpDFKZiGidHund55sm8wFLF3GpHfksBRxV3emDToNpEbrXYgAexSj",
  "key39": "AkqsUV4FuX8H6XVpnDUi928Trj1JXFdttS9atTNDgMyhTQJENK1xPH1NdFUpGASCEbF9ieEGRDxYaV5mAxsNU5j",
  "key40": "4p4Z9B7PzeequA81eGvXX9kp6yBrw4DZvV2KQ7tbt7mxa7Zd8Mpk1yPMCeibXq2NSWbfaZVDC6XWZVzL6w85yhse",
  "key41": "24LoQQJscJs4byYyeLnC82BjBToM8nqfYrLC7baRmECGVFmWYvJdSeXgWU2VtiuTDWcE81E5UTB26EPAA8iJJU5D",
  "key42": "3LAUu723je6Q5UBHSudJN55iC4mfYiAQNwkfZRY7z4xVvf96pGiz7niu5rkvC9YykQgpCGZQotuM5qRLUJwjabQ3",
  "key43": "4f5Z4VZEKaTfg7BBu8TBkeAMD83kaMAqD1HpX4scLCPvMxVV5Ty7gm1rRNNv8TYPVqfz3UmZqY1EmTKujNuWZZc8",
  "key44": "2fgfV2jpzXTKnpYBFdtG9MUHFSj6BzEuKmeEEELyYoQUL2PW1UhTPSoEf2kLxiChN3bULuHphzaib9yTEsVekP7B",
  "key45": "2XrzK8RgPtQnmvYqRyh8kHyfKG1pZ5mT1s1zGwZLyW56e9dFWrGLsw3ge7fAAxHRbPtbYbxq7gMa5qVGGLdtJzX3"
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
