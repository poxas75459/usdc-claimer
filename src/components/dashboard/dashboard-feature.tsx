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
    "3uWk5SnE4vZ9zv9TVv7ThtrbPpcBJCXDsmf5EtW98BoLG5ZVRXSXtQWc5LyRxA4DPpmEZp6KNtkJQWfaX1v7GsHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rivggJkDU1w9FZh9s2qUdK1xHKS9zhqxp1nVudxjioWGyr6Ug33ab1z3jWTynAvLa3ZSVHW6dYytEhs6oho6qTd",
  "key1": "4HDVe17tixg82knBzwQ8BL6PHDfrrwYqD6j2ergAVpYMY2CgvgsHSjiEnSvPsYh5BpH2dTPpusUFj8cTs8RfxTdW",
  "key2": "53edZtUTErekxEtE8H53sidbvb4QqT8u2MwVhwkej3KTTvDk97fAaPXCUnj1bQkvnMxhkoj8hVgia4ByQXAjrynp",
  "key3": "2u6AuNavaPZipiiCs2tQyxq4HqCdHbpeVHuxA3uKbi1SrDRxPQG1CtCj6xktp73Q5FUZH9nhEu1NhECP2CbwkL7L",
  "key4": "2bc6FAH2d5XkEXgWmpYnrv89FGckSCwNcZA3ymt2ECpEU4eB2EtJaFUwDU8A6DdJyLjsmBkvH2f2nBDFjHj1zYTu",
  "key5": "5iGuZcbB9JFNnQDHSMHWV5HPKLRQf3GyxH7PYMD7YXzxxggtp9xKLeoiiFYZEB6irRVdeGbD9v7vfsMTU7Ae9yCb",
  "key6": "2EY1KJrrvQjiVPWTaCSWsgR3BqroCa9EutM12HwQsrw6zLL2uAZv5tWGNQTkqkLJxcB9HXAvqa3ZRsaiDtbwZniU",
  "key7": "2Vebo4RTRy8GLaYrQQ15ReGvBQ8octgYd8wRTJABsmJRi63ebUDGjjPiXTNuZA6enYMPhr7U2NF3D3riZb2A6Kr1",
  "key8": "HnpoRipWm97rWRNzVhVe9VFea2Y5Dpix8EZT9caCyN1zG2Zrxtftv3fwJkUo4Bjv7fDVDUxGkspW1NkfcdCVLmJ",
  "key9": "4yXrnLNQAKZvNKHfEbgrDaTRXKJZ5QBXNqp3zgcFzdZeFyhzNh5Hs2e4rUL1hFKY46tMat3a2WynNd6F9YBmAXUH",
  "key10": "56jTUnx6GbJuSL5NHFsnDWZyVeacEBFExi3bY1DViWxyCztxgemmLEC95T4iKLREzynieZ9WevBMUi8iVkuvRDj7",
  "key11": "3dKrgPx8wbjFmeui3ffvrw7odhtp3F4AXmfUhYJzdkwHWe8yiLUj1SAi1PvQoodsw3Wh5ErbksJBaNAwqo5QvZ6w",
  "key12": "5cfjUP9xhnqvGqGzL5QEzmgEKw86DbR2p6NSGfwPbL9xFG4NDuvb2KzUc8USoishZsrr6AFtHy4xbmEqCPWJKRKM",
  "key13": "39r6akXXHSFM1VobsUHhXF5H9R4bvGKCNPfm2tUPAQQcMYRwjGZj3Hi2gGKwjAJNdduRpBSUKQCfk4mp4rH7qziT",
  "key14": "3F9W7fJ54V8St6e7b1rNaqcrK7uBtH8WH5nzZ1PtYE91qb49bA8m27gWLz6ejLtgKpbd2kfSnfKTAN33xcXRzSq7",
  "key15": "3EAhqDB4bbxqT7A8SjZ5gU73BWcoWVKZGqEg39kKw5VhPHHSGFcoU56y8i232aKStfN4Bc9zi9ZWW751WwRLosR3",
  "key16": "4CbKgeaNdrFmPJeVmQPuAc2zVMmE7YLgMhV3paZDhN17h4wsnoJyoBgooRCDspnbo8xnxXGqtx8LL4mdNiD5TAZA",
  "key17": "5Uz8EZ92DdGqgfoX2M7oGSQ6t97jQ3MBGgrJCyVsRR5GukBDfRpG5HfP6bpE62ATWogKh8go63NVqXA5C54w7ksT",
  "key18": "5tDjuVr9JUcU7rGeg8PChdMmmQvhhRen3K88dR7EM1HWkYtJb3xSFfbjgtEWmV2cVWtfT4kC8StFpriFhyzg1ySz",
  "key19": "3jNvsFe7oWgDM7iG2TzRLoe6NzhDTX7jaFEzpmC43w8H78zgZCrxX9L1BPBH8M8Lx2MTiLJtqivZzZvD9eonSHPU",
  "key20": "5yZVHhE4Qxa7pJZUCi9N6sXYc8WcDh6phPoa6LKRMSFmWaRPuSHULRnYnguRZsNfHYjdEfsvuesiYuPhkZdd11RG",
  "key21": "3pT2T2fVURYtC14L1pd2Y1tgvPhDv6STi69fF4NsKj8ySwBpuQJsQzhJsxMdnB1os9PL9JuE5qGdausRaf4h6xHW",
  "key22": "3iSE5LQY229uPdQE8SDyHLv6G2t9B62vjBxsQCNRdMj9vGC4Bc3YbGTUGRuyt3sXQcCXHVV3j9eEGLSaPCD8df6e",
  "key23": "5QWiZM32JkpxfdgstVVfRHj1UhLoPhksSYcAhn8g5dbHia7mPxPSt9f5rGKDZqEWkw5FrJTtnH3rRYWc45pyqWqq",
  "key24": "3oVUJWNtiLtn5MsX7ZURLsTvD2hCy9nNZKtRWQN6nC2MonNLPEJzxLSWcX7u6o1DQ8Ct2KFBeMvLi4gatgiLupT",
  "key25": "3XFHT6DBNUBQmsg3XZ2aLfCqnhb1jCouWvPQqMmJueiUM8GfLUHEuWDiAuRFxbbn3jpSCF3oeE4fUth3UVQy7W6X",
  "key26": "4zfRotknaHXmNn7QMSgRCrunGPoEinXWh12v5WoyHVTXaBXoNHs4qdwYyYVyNStjiuphY5KpHSnhuN19bR5DsYYE",
  "key27": "2Tg62bLzz5m6nQ7GJux3Qn9dGqEk76EgG6D2jUjp2xK9bV4WbWioZq4BHUNKDpNJZz3ZqfkUHGKpJv2TMnWoTRag",
  "key28": "5799p9u6HGt2QypdZwg75ABU2Snio159XKUDs9S3PgdiwrKwVSDhskBS7cekV7RQxRmaVdsU4PpxufYdHKDNhwvL",
  "key29": "4XsMzWSQjggET3L1xBKiQ9DvEJqQXasNgS8jNhE6zR6vZQrRhLYuFcppEBd7qz7UiHQ9CBaHHdYi4dparmqEHATW",
  "key30": "4H9eC1JJy8e8x6CUBwJcdZndBSth57mSJAv4XzadbweqMhnbV3KUYU4rfwwXBJ7tznPwbZq4L4AcKWXQ6z57qXLQ",
  "key31": "HwGTfo2GC4wtnGJSY2z15qhnXmquUy6HWdpSYkRvzxoAfaJyBYsP6hW2X8u4pFuBCgAFqGDmirBGarHbTFVBKkS",
  "key32": "2auM3iuYCXeUpmZFafG6jJCsrokVSuzmisu7gLZQkozqYvgNyQrBv4zSHM8nhdr3xGh3FUWKe2DbdF1UdbTiknP5",
  "key33": "3PrtkQwDAoL5bX8p8zB4EB8fbFmgNR4NvRcCbgkBWiB1vbuguaS6n8LLvN82etQGFtpjPBiCosFfH5VTCZn3Whk6",
  "key34": "2VV86ayqM5z1rBu67cf3mvhu9yPftHqWrK2S4hkC43rWCuSuDi26Np6sGEDm7wxXFnYfkLJCUr7ALEyQoWQpQvdK",
  "key35": "3kEj6cp59pZN5LC4xtXESEvY2qGa5drvbaCcY83ayX9jJPP2XdaaC6kCh8qSj7i4MfD6AabX2CA27ajD49D9tP4H",
  "key36": "5CjbdC5JynGjFXFxsh3MVJQHBxyeiGvBX6TkkggUbHwTvKgP5uvjwnkH8pE2YHbCqyVn3AGkTNA3TD3tR6ck3TEh",
  "key37": "4qsDTSWG7o3pF5RYUSeJixrGAvHjXnEaGBnLYeyERgu32oNJQTe5XAntcWxPLvx4vQtXAUzUBPViVzwTEESFK4op",
  "key38": "3Nf46fmeNtz225FkznRQ4mCADKwhb2TNppcNBMZy7Jz1Pe7EtRcsS2Pifwt1tMDDmJnMZX3Upz4YDXnbQzRcWobX",
  "key39": "3mDf8QTK8vhdvvuQzMjuYdNidNYwdiaCeGALBYLwyX1v4rgEtVnS53pAwnreUKqJcAQFSehaPNsRpUYC7TghZX8C"
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
