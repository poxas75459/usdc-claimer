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
    "5BDFeQiHvbwinh79ZU7z3w2jpuCmxRgDuBLDjZd2t8HgCBgfKsXnvjDCw75fAqspXmTWCmJmXSmgpNS8siLxa7G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kj5whACmPBxhNbZokmEpELCvmcpCZrvLSBPCSQrWesSzynh2q3AuBjUEo6XURWFy3Nedz6RGWxz2aexE36Nhnre",
  "key1": "3PQG4c6y5cZsmVm6fd5krSexi6hTtQBGbwcf7mTffX9kodzUUMAgGJzjbjTeDzUd3pRQWSGwcm9Lah8JE5KcwfVa",
  "key2": "2VcBBVRZFpCGiHNKA9iqvFuq3twS6yQPMTNq3dbYswg65x5kkUPfWRZzfU8TSgVg39Lduj3dJVbx9mrbNZytLWip",
  "key3": "5QBUXeFQhjGmsXx8qucdq2RwDvcArSk9qEWEaPSX99QjnbAFPoZmXXGcPuhzZz51Qn5VshvwRYwuNBPJNNYF5yxU",
  "key4": "pQZGNEsqB9KnLDNywo9W5vtJR7UnkjGQ7gGbz1QRJJehsq1VNw1boWmngcmsR6F5ixQShbtpV33BsY9xJLXuDoG",
  "key5": "2mtXNr28dG5XDd6LtmZ15bFtTBAcvHHcUg9SGLwk6WG5RRRmBcRhpVv1mPES7UYNaGgxjqV8gip4L3A5nRzykiHG",
  "key6": "4j1FaRzn4HbsdJ5PSbZAjbE3Wffia6DBeVbSZTisW5uf2xbeJb1p94ct5QQDoQoLXgpyJ6m9tNhxEZbWrLdKMEMT",
  "key7": "SBByMdSpertzzyMbmbjBvHzFB82iSGp9GbhEJmHCSyHdBff5RjM4zcM3LrCdMyqGN1MQ9DzzUNvwHHqHBc4gTpm",
  "key8": "5i2a1uq8qD2UF96DtMTd5xrZUFmrCGt8s9rFWs3UikUADrge1uY86cXuYmcJYQuJNbyZmwnvFPqQbCa1awwXjTFw",
  "key9": "5i8ocDAXBdvbV1Rkdu27sRn6uSGfj3u42ziTfLbZ4XahTXXrPp1VAJAvEgKXiGpjdJinQnXMFPgahoLRSNzXL87e",
  "key10": "nuz5RMKP3BWLdnHNhgkTqqye8e96Q5gQszNaQqNQ5qDAB75QthSrQBrd26JcNKkEmyFVCFRrAxoQCMxCRvTs1MG",
  "key11": "3TbWKbAYL1TtLqyRX68rBFiaFAFPHNoWkeHnBQJPkwVRekpmQfTyHrMvUbwPWFadRA1ikyaxUmccan87PZnzvtkj",
  "key12": "4XMwt49BgKy8Tsqv5ATEX1pgvyKjf8eiHMCg7MDoytEQKa6notB3gAtGcgG5nAFv6bfUWCnecToUWrZVgDeA8CnQ",
  "key13": "2eWYiQosDSECk7ud7EFUXsTPfNoF8ARfr9NF1zymge8qNrojBTXoXeyBVgTAyVAXBcu7Wr5oi9gjutKrrCMjGpQb",
  "key14": "4vL2FCXV1o7ipKWATeGAmANJMSkwJsc6pzyPkLQrsWpCaFfj2m3u38jpSSawKs695VsB9P2xNdKswbemTXka14ej",
  "key15": "26m5aoZe1fB4weq5ridURnAp5UYWA921FVchJYeDGUtFw6fk4Eegryur1xZBtnSPJ4iQpnyi4HEt3wfpVduVSQeH",
  "key16": "4qPh1k2RwSMY4s5UAb44t9anptegSenz7x9amgm7b987dNxYaQ5KyWHBWFtYN48nzYApXQgQ8cZ5mmqxXTTV8rG9",
  "key17": "32nsZaivKCWefJ4aosW3Vcod1Vk14XjLJHQCyqpHoW4hUf2ZMeq4KaAC7uKQwfpK31bu7BWf7AL4DYPmXFFsTJCV",
  "key18": "3FLz7zmswCd4Dk7CcSe51srxDUDMsguUS45XAWbKcgXyfAkGrgZxSctQyNY2NFyLCAbG6N4AZGe3iPNjPnV6FFAv",
  "key19": "57xjThEbAHGJv57EXnPBGDX47uXp7bZkFSL69A74NKm42gMpcBtdXFn4oedH6ow39vqMaWHMgR7NGhhswMFVKG1C",
  "key20": "62fnr3TJMwQnTDYXu55GazrewzJQmTHPoYz9GLbDBpRi1o12JuxevrNgbpjBTHkpgswCgEHeZ6NA7LT3EAAqd6V8",
  "key21": "2dZtjsfYASPyEaFxe5ezkfVewEJz7HtytvNxdjo4FHNGACB848r8R2okJrhi7AS4PfzdXPLZj2XNp3y9B9dRHSgK",
  "key22": "5S2ouQMrEpQiqxMYg6NXk3k8fZPJ1rRyyvTiohhYpGkK1NNyoHkrEuKNZ92LMQX87VnVBYKHXkSEcr7bRfrbNgKw",
  "key23": "2yYvfKiwGZysayfwydNwYBdxK4GVWzJWgsMnZwkBzkMKAFhn8HK8Bak9S8x1RLMAx4BUJTCs2p8nGNbWww87f29q",
  "key24": "5g4MbSmf1WQ9Wgk5yxYKMwMoKtzc24RDzZPQoe8wstTPEqs2KbSUtgLjEJCeoYdxerUi4jhNUNLniHzWJEjHJw63",
  "key25": "4EQqLdxbcNZroaZQfuDSvHr5MeExj9GDQ2twRpstm8Y4oTyWF2ZKQLFvmmThThHHBwQecpYYqBkreFNBJbjUUpek",
  "key26": "64qQKJpr5G54QhUGNt1f7NNMqJEXnkQpNF9v3rqLpvsYnC63oFGVhd1Uh61Fog2TVpivrfqxF9smQK2XbduwJnQd",
  "key27": "Gt5TY1rUpnwm82iPRE28DBs8EeDVS1vgk7gHZHswAbjTwDMwV5on2gTjW5t5Kbo8TYU3fHfh79RehdwaJeRG3VW",
  "key28": "gjpLEy6tAsrKJpm8mfGojMr4abskpYEWMBUbWLXYCsWsr8p6iQdcqcDMU4GyJcLi6muzAdhuzpKwvLkbuzFq89m",
  "key29": "HQPzU36z6joqWDXC4DvE5QL6EjYVtKcq7whoLXEk1YhZCXvDFkHyBfHkzXT7AMuWaVRNULFFDLLbuqQyL7bkKwa",
  "key30": "ViFY2TwU3Es3vaT2DexRc4mbsLkzbM9sTN8C5dZyM8Ta6Kv3e64pxpfCqhCYDtAtvsn1dY9iYeiosgHfc7V2L34",
  "key31": "U1XH6MuTA8Z3TbNcgX7btpeqXK4W3cN8uTXAKuCosMiZv6AvDHhT9gyrfFDabzo7HBaMxKgLhmDnLQbAJNs2XYz",
  "key32": "3FzrP33j7231RdvPG5QRzbvCX1fTQMHwjgGBh7MsQEPFPUfS4NTcmi3tr34MkyqRmttnUvAX7JyaqTrmih2M8nvT",
  "key33": "K2vjPAxP3yyVmDrscHzLsNk5dY6YawNaMgmhFDqHmUSLj4kVZpMYaZHf4BK6Xc2RCerwmViBtYnac6nBs3tcaV4",
  "key34": "5vS9QBypcf7fCJV9Xuf9eBJ8mfsYMwDY77ixH63MTeXEEMkJzePoj9hXwcZSUrpXFtzjBPQv8UoVUtZtukpx2wsx",
  "key35": "5pGJmsRpTRtdozzH9SyhjYBSj31LgQqUtLogUnYXGwNJvgE7hDDPhqf3KNV3AvaBKQTtpWempPRbcLUtVKAceNuJ",
  "key36": "5a5qwv8a9hBUAV7EddGAUxZFMHhhybDnUXgmpsK4fADapMBaUvY5pXijUJW3Lkxb8b9JwrhJp3JXz1rMGPfu1wgH",
  "key37": "2CNArVg8BvK4PjgHULX6XXLtGPmQFnkzJCUTd9r1NoirXKntBGvd3uS4iKPyZUNFdyLW74QCADTt7ZAbhud6pAoP",
  "key38": "4TeD1ucEEiTRSqWRJMGqstPYHVevVuBYxciFugG3pGykb1m5CwUQJbC4GzMP2WTHdBnmTGbhAeRTnyBuJpe2Zf4Z",
  "key39": "579Lj6GYwfbqkuUsYDDBreCaaudZJkTZ8PHWt8gfCVoBobZtmeUS8teXDLMxKKv8yqXYprRcp65rrP6LqdbMun5U",
  "key40": "3GrUUPzy1TpEd7CbEtRavozJ8HJKaJ87EZGvbh1k9VkaiVUFqRDoNxVBMgThebUfn8fbvXg8mX2uNbrhS8nRzo4y"
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
