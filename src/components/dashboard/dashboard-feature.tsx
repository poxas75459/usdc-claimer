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
    "5Jo5mtWFMfde7JvhM1Cwi9QYv7St74ujYdPKLJks9KXCU7U75CcdLB3bZV2zDt3766yZQuNgsYoMWUPcvaRbK64J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uwY4voqVd9wBhr5Z2HNBJuBmxCCfoaG1zWNTCAyFb76u2Qaax3ncvsak6ffLmwREiw7DZDKa8ENbHPuYbDdbewC",
  "key1": "2mmiWSN8ASVV5fpV9YZgmhN8aXnnGvtsTTAdxqkJcpaky7JKKnhSMDy7fie77aPGtaFAeXVtK8vsMukcjJwAxd7z",
  "key2": "2nEfyShP25MGzwse8RTh8qtNyobJczedujjTeRfJtay89hDHZY9hTfzdMoAgXpwZJdXXdRpQAHh4HGVpZCvhg5k9",
  "key3": "4JuULmzPuF7UbWGpP4nfsn2Z3cpLxGYvHUKvFc3ru11hdbMVb95DrspRahfABZCbm1RES4udGBz5rjWNrizV34MY",
  "key4": "4touYF6bnRDSq5jVDj2aRn2Y2EYiM9Bqx24MTLLkb66zBnvZUCQhBhg128C9PgsTqQ1nU2bLD6iViM48kRmVVLva",
  "key5": "2MHsRQqV7fhfGJgvDLMkUSQogwYUVUca5185Rj6pPnHHUq6SBiTmAfJ8HhqcJ7qYphrPx6er2CxUi8TYYioMRc22",
  "key6": "43XJgwJWfS6DNcvnPREN3pGbsHjQndWMLN8DpMv2CBGyyNm43AuAoZT35PM3cDPUTHopRT1UMKACMRahQpKhteLH",
  "key7": "ukPA6nhcwnamUDa11DPkov7boWgxfJoXBSNHQV9mFo8Pb9A66EXNS3HYhYri5maptMUHG7Kku1fUp913QXYfTuv",
  "key8": "3UpY2gNLaNEuCybQXag5awum316MJUV7CjobYzPksQkEdKDZ6YHV8MEpNgAu9f6K9FeYVrJm4z64sSn61bNG7PQW",
  "key9": "2BSx4ZgEoj4DbNAVDAtJK36A7DpcdM7pzxRQj12YCc7tKraLSAs8mAeMJwZzppug749VxZhnMgWVZBTBoUg3qrwq",
  "key10": "iH7MXnr6HuA51dAgVfyqnLK7DiPEZ68vHLnafxxsxPHn9QkeXQzj2Dhov8H6VNPtEx8eR1xjFLud5bEEHt8WxGv",
  "key11": "58DC6XUoKVrWWR5b6fk75mk1A9XxKeAkfiS8Dh5DzxArEqVkJRrErS3yBo18vxmDuWrSvRKE9s76pZ1XjCNseQde",
  "key12": "5eoKVg4sanHjoo5kZ4DzritAPaPNwCkHEpqmsBkH8iB3yZvZZqHDBiZ3WwToQ7PPqqn5cdBaiMmwvKPTHgCekDyi",
  "key13": "ttKJrBcsW3cEy7AVLo5iAzRG72yyAYurEmJQ2ySUQDXvsRSiUWX2jvUSL9LkqFuXbvktWYwrnTYGM1QfULux766",
  "key14": "YPDyM8fMjFJB7fJHu9WyYWp6uS4JwMj9FxbXKsroat8hyb9HBxr9hBeVC2pqSJdYRuCV9qHbMFQ5L3Gg7BmTRfg",
  "key15": "439PAuQoR8hzARNA3tjqJpr4seDhj61TR6rXmNs3TLQfZMTuuH9hLWD8dCWoyiNKoRwFLLEuKQbTzTVHiHw1Ltqi",
  "key16": "2hyy5U2KVw4NVSVBoyoGyAbyBcEzTy39PRJLkSjWJ8aezZTDMJ6ivkTkUKqJNrn5p68UJyaB4QQFwq6x8AbbTiYB",
  "key17": "4osRGayRCLw5x87PFeBaSgpKXCePGs9i5GqfKroCFaymRc66EE97gENzqSmp2VB1h9LA6cbp82ejq5JCPZ3CNwjj",
  "key18": "413mSdxfJmWQTJJi9vuwdResHVi8STbQpjQsJWKPMHGr1Tpt9n4rMxKUTo6oySvD6mvHp9BK6ERHSL4AvbQPQv3i",
  "key19": "49ibz5fomSezawKw9LtEEBStCHRSj6sBmYu7S4ZTpvAhsnV5LoNLKvTivtff3AXiysgDqGT2SHb2yQC7zoU5fnDF",
  "key20": "36qin7FH2ET8Eta6R5JTU3po3QpCa5jUQF9eYh3SCCMiJE5bkcnaXevGVssV1fNai11VGkUCFuP2H9qSwVCJs6nR",
  "key21": "3jpDNVGYfbAbwGSVwfsjf3pGMNXdCMcZqGP5DgqQW4V3QZL2cTvPUMcznzkek9pnM7HGawiCVMTSZkmJwzLugqGQ",
  "key22": "S4z6VUBwLvvzekCxSp8APhApfhiKReha2NdZgLexGWQrgbYZ1gdMc6q7YtypdcFs8tPosNiyUfPNv8q1xr5M46x",
  "key23": "sufSCsA2JgwK9rfhsTodd8JeYEpzWyghseDmbCcKNRmuUhBda35yspaJp8jfTThUs5JvBEJ18M91GEwZv1ThAsJ",
  "key24": "2RQFYHQmNL7DJfzpyqASPYQnuz7A7ob4kAiVtXpX2TpQqpRxzX6sUeGz5yc4jshjL4Zpcaxr2aKjK6E9eEnCm86U",
  "key25": "5WPUP4V79z1ko5BeExyBSFhu9H9CvUUr8KcLKkwLEHyffEXbRSrZaEUgjjoJDm2uMAeZPGUrccz7SNBdXtoP8hR3",
  "key26": "55VY4yhsVz9hXzpYZqssy9xv8oZ48dB3LEVonxjnfQ7v4fTygDH2kfNEeJX9EVRo4CRqDzzWSyJdyFHCR3zsbL8c",
  "key27": "AMsE6HY8EGWvHvxQ3S9ApQBhgNFyywPyTPzMNPoiCdsUpEjGwSqkgHWmGQ2DkGcY3d74Vw6VznuduDQJWGybs8K",
  "key28": "XeCtK9PvPpLtAm8imSrEy4i1yna4owaZv2nEBzuNW6HMLuVdyEp64UztDGEDZUzUSajaADefP2FVLDCSuidYCsW",
  "key29": "5j1SLnUpev4RQUtTF8qLanDDmTM7eYrWJK7kATNuDi4narsve3M1t5EQ5aAAagfu3v3yqArzhQbkVfBwPAeg6KuU",
  "key30": "xkWTfcuAGtYpDDEtiQDqjnet81uX8dAd34cabwk1HBFvgxQZjQQgAPU5KgK5fzWNDv43UdyLpdDWLaSGgqAV55Z",
  "key31": "fBnCbNG55WjKgqRFNgGa5SwrrB5gLFN7DZ9hqkrkKX2fghvYMCRYJP6FTmZxgpkwKqmQLPhkSGjzdMNvDpweZpR",
  "key32": "4jkoU3fc2WtB8nCahE8P4CtXpu954GXeuwx6N78zDC7uFMECBzVn7smE3u6HHJ8phPzssPjb8MjWbGE443Z4qTrz",
  "key33": "hipryfk5c7T9qH1uiEDGkKNSg2R5h7w8bJpWtyG43VJ5AVygptNKXeEthJ1JC8AAjgPoqXuXaSwVJWPGgcWNre1",
  "key34": "5U2jmW5Vv14ByS1nfsY7vGvH9Cae59pEoaZXVoCt4ND9N9dTvSZupXEvw5kCy9CDy786Q24cnes9f6YX6SfGF6eh",
  "key35": "2tDz7hjVddnTGieUusuaH3kqF2jtgBhT6fMdAY2Epsh6xvyk7qr4txWiL84Ns7KbRgf811QGAfqCaBtWZmoCLJ1k",
  "key36": "4hdvrDSN9CpsGFXgaw3aWgAcMw21CGkr1kAtZUUoCpsLa9eNuD8aiCyxAkv3731otEeVfaDxqRTcrGMvNyj3G7fQ"
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
