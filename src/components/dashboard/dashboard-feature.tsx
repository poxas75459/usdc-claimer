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
    "43DJBd5DQUqYz4U6SRqEmA23o6g1mzJiYpFC4ePmMTjzZ2LA9qKHNC5qKkBqXK2cLzHoqZrFjsnG2TSUVeMjk6sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FepzcP731ECGgooNFtq9gJCEzGjwySef3hYabF2Ej3dmTN2dwCpXZWDdnoXauNh6YzWnVzEq6u9wmjoaLz48zfn",
  "key1": "2Pm46gvGrCGbDF2P4QjAoz5jUxxjLqfWwhN6aHFQ9JNsZT2mF3vbDw8FZydaRyjw9LDvvoRLBSn65xpfBhGuMoxx",
  "key2": "4uEUJ2DWpgG339N5bQ8LZkVE7u1qEFj9kPNsTAAr36txrB6RpVbfJPo8wXcbxMjrgBDksZx4FTzVoLA2FxNRQjjG",
  "key3": "Dk7UnxEYdiGAXB6MEFDKBMxXz2LpT9DD28sasV657kgZ2XXEQzNsqVcU73kyJYBZnVqnNU44a3vynopMr7h9pGY",
  "key4": "2CEHpCAd2YWbvM5AHhm3Lm94j4MB2LEpFWZkw4pJDyaG4DFNwPxBe4auoiJPmpHt3CRPmWNj4UhAupSVQfxt3Xek",
  "key5": "4hhk4s2YFERJ2Kq2mMKG6R7yeA3iRChyHDgUkDoBTMXjFhSAW3JmRkehBGBL5pNBcZdvxLX1jG1krgBqgiF8pdab",
  "key6": "5ErEQoKTkHjYK9SMjB5D35S1bXspbsGjfwd93MZLUvrMapYgdvPdPcebQPirn8QT6xvz7nmu52KD9DcV6VFckYAe",
  "key7": "4x1vJpxt8wYgAJ1yVDKAFg9xgXcraUozZzkK2rTHn7Ls9YbYY9YfQGDTckRCKQRvLjst5sjFnt8HtZ28hPfGV4Ae",
  "key8": "3nDbpbXgXaEYwEDk82k5AXyLajZFJRy6rvgumGZFnGTd76jc6Uc1tFV41DsNKsTCWyBKA9ULeJgUm8s1AAUcKenN",
  "key9": "434xR1nxzePnsVZr72HYWGMHBDLChxsfFTmC1iAVWjPTF88XrucXJwSsVSbqsgEyJPD2Xtt2U9FVBEoWZsBS3uEd",
  "key10": "4C8nVCgFbvRWb2NsFmRsKjoFWcUg3hLi579MeQr1irYJWqhegqrv1UoEHkCEMygZE2DHoF9NyDxMXXbsBk91eJXB",
  "key11": "4ZCMv6khr92Efq8JaCHkE5DvCHkoHfFm4jECe1KhHAR2R9EZSkowqEFR35FnbXbcauZGLunuFirc2uDDjgRDjJ5W",
  "key12": "61jYvqEvWXwxJgeVa4vheaiUiGthz9JabPUwwzKGKEq62uTfHi79HjynRyPDH1PrkQtDFxFmXyj5NYRvu8kiTw5Z",
  "key13": "61qSX4B3SxdvpZY9ZJSrQnivpPiKpPbBG1iGkT4tA5xNz1LHtMztvwecQqtofaJzcpbeeK3UajWwLUNP1qm4wa3M",
  "key14": "4UswXeMw59xWiZYHSwQViDKEoEuf2e2EF7o3TmbZPHVFWzCQwctfJAZ98NHPPXdncYUG3N34axYKyT7mNFRyPqGi",
  "key15": "21TegDxm5M2iF5ZDDFoyDcueNMYzC2NmtvppfH1b5Q1PKiHEEGsaHYAdMR8yU2c1ZmMRufquqMxEhHrRsw3SMS3f",
  "key16": "2jCaiTJRigAXp7oqC6ZxACEd9vNeDVTDQF97Fe8dPaWFpZjWawwUQT3UAfXePQC3ZaUY318NV8EjnUApD4WTbiy6",
  "key17": "47MjxJ7K5PcA2Q4ibEr3u84U7ZJuSb5xGrMhuMMduoquti4jy7uPy7PfPSiC6cTkqke2feqEpGWbJzTGnE3y6CVc",
  "key18": "5FPaNna8oNL5g5PgM7JT9C1gw5qRUeZ4HRU7jAnn9QBfrs3uFFQfU1vW96oYRqK2iQgchwJaWb4wGcYtkTMnk7sE",
  "key19": "3SYeHRCLbpr3NUujkV1uuR9z5uJy6FtiRcbefDhnHVCn1osdcyqKzxSdE5VniMcvSKxzMDJQELvauLVbH1SyHRi6",
  "key20": "5RZwU7PDQqpejiJg4oZJtURtMJVhqBNYMr8YgkdHEey5QeSFRE6kNAiHs3VDxqFaW9PVChCC4hCZFibTSPABPKm5",
  "key21": "5ZJJaLCKesQVnSHpoF7em2WKzDjVSQVWhN7Y6WBejJCrh7DpxYgyLb5JG5w2jpdEokk5Sr9nnpLtdE7A1orPfcKg",
  "key22": "5EzhD3CTRHLyrBAoegb6fDhzSmcRNutn19TQjswieZRb4E5D6JFGgQs4n6jBKiV36AmkG2ybRciZRx4LMt2eNNr7",
  "key23": "2ouf7QYDn4PwLubHqYta19MK9TcjtPUfd9SUUhcp97LfXM6WqwxjXusfBsWkWShqrszgzDnMLmyd7YW3z6JfCuX3",
  "key24": "4casF7h2pXD5zJqne36tkdPxKnv7uTAkwScgG1B4GrTq9DSYLxYMKrMuRBShUQTacH2d9wMtySdAzmgLbnimfNyJ",
  "key25": "2imk8nsg7EnBChdCZmbsRBCAkH85x6kwcXRHnYNW8JY442CaxzoeRMPvaBaNBBxh8wkMmjB6rsWuJgeUjRYvaKD",
  "key26": "4FKQtGW3hHnp2V1ajpozNvji2cLb6GeskvHBdcWtc4Q1nhBeXYYDS4drcsvpdV4J63uZQVK6LjWH5gvErJFwGz6W",
  "key27": "4mgTP4cmmoizFGq7u5Z6XSAKb39Q5Nv7eFoV1pWD3wMi6sagNA7YmwQ8vCMiGSYWq5nmQrspNhgXE6oxZpyfu8k3",
  "key28": "5Xj5skHN3DxYreewprxuzj6U2EFC97gddk8SBTSutctph5LSqK2Tzn5t4h1FPUoSPcA3PqQLC2FB5ivcsyLg8UJr",
  "key29": "3KJN52947odJ2K6DMt6JwUkZxcwMY6ikvkhTLjR8V2AxpTEtuqALGn8WEqA3vQZRPvWG7E8esG1yZ38yAyRc8bHJ",
  "key30": "3oQD3aTXvovRQagPcBc9hsbT2iAuvhVTAm1FdJrYaVpdFn8wHoqYyfjmYxV8PrF363JgxbXKbSCTjqj2YWxpaiwB",
  "key31": "5b5HASczKdLuEyKBZ6iaSJ2W3msjGChLySdhkcs2UH1FYqKRvEkJkNV3K7aoLrZe1DWL6rdzBZPh28495EQpzE3j",
  "key32": "3Xzh9bUZwNjtXzbUjqoDFQc779VwZViKMuUjMRsif7FAMrgjAavzGo3ZsPfvgeyuGQ8k3SHzfvpfpwiUm1Q65YtH",
  "key33": "5PAjViESaZE6jSgbtujdRkRFaBqvRty3rsWtHiqPrHTD6S2CDA4ekEostV1iLAjBizaT1dz7Ror87a3DwtJ6v4h6",
  "key34": "4KDEDDbckdr9NsEb4o3aU1feLnZdhmbNHPXMhqRcNy1ncLs6zQ8DMhBJzQZEjZezJEvHwBkUPGRcoen8FkvXP5ht",
  "key35": "33XNQndANfgX92trSQ9Rq5AQQLz4tnbx43uMtrQUdbcfxT2cprb1UwMpmMLNqRwpepubKeh3D1BB8kKyfcpZWLai",
  "key36": "3KsjwgCcZZxe87av1ZwjNN4jLbQHQUHD2XtZr5xK9o5pEN9uedsPVwjsDzuLFJaimCNdKuEJNzRu1KEg3X6DDzgd",
  "key37": "fHgErui9N23nSDMxaNXTvMpooM6QvdSUYq5UswadCxxtYzDEHfQBUGuVkkQTVBVZQrxYCuW1dDF3Y7xdkgkQoCj",
  "key38": "53ew9MhmGr9TPEL6FJywy2bmnx4fQDNFjgsfBRtQ87A2RSyK38YBX8NUXrp39syDAj4H3WUbDXKcyQPmeg29NcCh",
  "key39": "3gFA3wc6srQAMwo4sD5LNYLBfy2eNU4FMjPKkffqcTPCe5vv5LQ8rrJEHMMsCFxhd7bzse5HdXeSHH2burnT3Vto",
  "key40": "62fxg4x2bkvxRTFvAMWpzw7RWfCfhsBmbTHZeeRnQEnd7Zi8JEpUSKt5ns6WRT3z5XKR1TKdbJerJEibWLj97BKh"
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
