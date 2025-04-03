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
    "5VfXTNVqrrwzZQdbzoGGYozrvi3QfvGtXG4GvfsipY5YLy4qsLP3zePoxnDNUN6GaEih81C3Uo3sqLNgt3RDzz3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAz1bsAb8wPS4MLJH4ELQJV9ja3iWoxX9Wvmx6RaBNgfKxrSX452AxBrm1tJm4ST9nwkxKBDuwWjgDFsZLwdaUm",
  "key1": "53V4omBRHgUMUSNj9KDwETBj2M1rCyYag4dr6SnTWNZMQaqbuVfZ3Re6sVWmtXhHHxzyYoAzdTUapGKPwkjYzuYb",
  "key2": "yAhBhnkZ6qCkk4hyzvcmLjecBRkL39xdW8zMokXFGVpUF43U5hkH2GrDr9YDJ6mtkPmgoKNyxm349s9CUnwmYDe",
  "key3": "2WgGUYydsxZWyaQXmzgVKXZiu2riQqnvjdZewPHdPE8qGj83Ev1UyvfG1xe53WeKN2JErCX2WQ9rnARkgJjwgcW3",
  "key4": "sEoqcQgc4PHkA8PoaRqQ9wmNR4Q7AP3VsQDGb1LtS2BVt1eR3MizmkKbyzxQs4VRkXXyyci2FXtr9yipBWYEmgk",
  "key5": "2nLSeXtVW1YkZ8VZ7VYHEFjT2g4522VWszt5GmBTUxAJKrb1h3orGUVo7My6KMaVMnxXnyXsLqRvAsSPzrSsX73D",
  "key6": "bB9fPeUaHCFnZGsePzDzfnj3i42Y5riVc3sLYfnUks6Hazpxm49mgTTuEBRaR9xoan6hjejXCEQEaDL5jcVKwa5",
  "key7": "2GHxyq5chZxxPKqUZKzWRB6oB86A47t69Fa1XUGYtubiMjrmGS7nGqWS5tQDWxKBy5Uc1QSbWw3Lr9i2Uu99h8gz",
  "key8": "2fhACo53LkZ152UupMAiZo75fvPe98Ctd3Y4yEcjRh84yGiSDGwAZUB5czoqVpMvrUk4nt3QFave2RteuXTpBwHb",
  "key9": "4k9DsoEvSBwg9HMQ8ehCB8zRSa4rebzNrHJc22Y7zF914osTCe4PHj7d6f2r67STjtpTQFbRM2C2ZYrztmRYFusj",
  "key10": "4qoxwMBaK1DZGGzVy2pL6cNq6B67fZr8PAZcQNEMrxHrbzUhmMnyNXXw2h9Hhn86AXDLGB7nunFbCfvuocVwbhR",
  "key11": "4Yj3euEnPKxUgaswTdeYmv9itAmcGeMuFrrDdfMpfqbyNJw1n1ntzsVPWkoMPjRdHGPvvVDyCQpCZdaotZuWiVNP",
  "key12": "2Ef8rHmaAmxPSjdcSMCGVpmpaow8T6jNrYUnXPbxGEYSDuWmC4LKtF8rVcoqofS7xMYi7t9r62nrUfGdB99tTxtK",
  "key13": "28uyeGDst93pFA1YH7DGo3mz1cpvaYXGC7Eswd3YabTWg7XWXYJXejKp9hUzH2wxggHhVEjtpwRYXy7VsjxBPgnT",
  "key14": "5Ymu56isCmopMwVW572jqbrnp5XByTC6BSVaG52diz2YpEpThWP1NiWumhDwicai4XUoWggnub7j1w7SNLBbk6v8",
  "key15": "5xEGzc6ZHxyhdxyAuxFRhPLqpCDAtcPbrf3m91yXnQF2ncKAUs4k5PHUDkcYC4dX4AHYHWhVMHtBCQQrg5cqDVtR",
  "key16": "rVaJLQUVRw4aAXq8S9TedJSaMM8mL9d3cjAhT8wnJVjS59wCbZchvhTTmw3bgoVzAoh9hv8Gb2cZthvSHJTy28p",
  "key17": "4AoEdbAJ5Fd9H63jRCyLaeVnzCYvgy18CDS57rravzBy3dbvZZMBHYyyRm1NggcE7ioAm7zGQj94zgFpUsnTZUyt",
  "key18": "2SoAzoFcN75E41neYPj5gLrZyBnGu8azTTUfBBaEzWQAk5Cep7amvKDeL3kWaSU8Hk6G4HpXMm52RykAYhpgZ8Gg",
  "key19": "2KzrUozekvGbf7eUzStMGzFuW3XaJayHaTzm9UD1qQ3sefTmcyNNrZCrvAnJrXqVdV1oeAJJxv5UpUxUS3VEGPt3",
  "key20": "4DxWNfDY9ZXfRobdEHDZGdNSi5HwCdL2GxZp9n9mu8hQrj7DnKSBvQkGEAKHhtNgvyPSzFSVzMXBidZArD83hXMR",
  "key21": "5QqQNvVGen3Z2Y1Zng9YRG3ne2AxiNNrC3yfMoWdAvcvyhdZ4igHwveHyXnSsHUmnX5cLi8htzDuQq3gUQHgH89M",
  "key22": "2z456knzf6EKPHRubYDyCUGKZnaSRR5rfZxkaQBnNLrDJHgipWK3xdRNqhkWzpfKCCF5Ehp4tKyN6UmXUy43s1ru",
  "key23": "2v5sXiMXFfUiuwSBSnTxX2fGdY23MHMkxoiZP4zoi4fCndVxefkFD3qt4D5YFZn41Vop9apMmBW9srFAtU4PCEY5",
  "key24": "dhtBL5vvRDhhJNain8qENQcRYMT5ScAkaBkJDSJ8AT9aGhu93Chp5VNguSA8tkAAtNyvboesdF6WKX5MvKecaif",
  "key25": "eeXYXsZHcs7TExuZzYaxcty2DwMv1hoSu2BpGS4bfXq85emMmAcr4mxe5FB9Zb25TSFeZLPYJjE9mvqNZukRoPV",
  "key26": "2vZkZBb2nboMTTtXd7XkNr3a2ZzRK8f1pxy1U5FxBG8nRLcosHLjjaMztZBdw79vUn3JfqX54A7dXam5UeHJ99Hs",
  "key27": "paDiw2zsWip3U2LqrFEFypAVAtQYWFKvaTjmhAUTuG8hS1fMsMsBhdtrZbuQXzUxoxzjVKW1DHVk9MBiy6MqAgW",
  "key28": "3tntLptTQCTeowhJnU2i4cpvyfFtMtjTqVoPCoVMZWQv8c8RyezXBMWfGfcdNYT6yK6wYZ78XHwL4u5PjjKwmr2u",
  "key29": "3QqPd96VRwLfN3kntKWZoR8dRgMU7py5eX36WM2K5AvsU7wnd1MEUWjv1V6zXDUoYsX4xQXuUYKojMujfZoPjhf6",
  "key30": "gYfWoGQPJSDGNQfLTSVuU9LuZsvxNhfvRi1C8BFbr9dmWicW85Ykj3KAbJWmvJ2FkiRg93E86hWk3d4oFcJG1w8",
  "key31": "2YM4gPyxrhoXoyMLbd3suk1pwfegW2mrGEcBQqxgEUWyxxDneG2dJFRJuyjqMQWiE5qW6MTgTiCcRFE6S8ViwzpY",
  "key32": "4k1XJpU8q9pttCzbu32oeYqnLR6g4XPaD6uwXtwBeHGBdsxUhLcBk4bBbXTPS4i7eCXhhR6RYUAfpWSknBSYCPsu"
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
