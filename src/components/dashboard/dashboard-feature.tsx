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
    "448ShPqQPLKH3BMDwTUR1MtSZ8WzgKtzUVtkSeJs7V3HREAMu4n6FDob2NiX5sA96KWLyXsTcUhrf56tbFCtbdgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdguSiXUFGQzvLjQRmQfFWhuxuJmYVoZ5sZas9JivCVS6L7e6hJtfUPoZVUnrR756iDT1rMUqUkv3pRfzkcQrQT",
  "key1": "64fAJhrx4JDFV1wxoRKuL6chosiepMNqTw1wovb6o7wU1S9WNi3XdguSy8n3BRUet79KCa9wWc3pkEXjxuE4oD9u",
  "key2": "4rdGHFRGAc64qmoG73WPhZQcqzdMVzVBdtE5pzwSyoxV2qmRfzz36vrAosj67M8bV4zuxuYeWfeC7K7rVdoG4jtK",
  "key3": "4KTKY7PaZjhZwjgh98EGjKQ6wW2MSwkuydfLW6che8YcgCxgWodKvWLc9UQjmVwtjjCnmHZNUFVSuPrwe8PUCryR",
  "key4": "66PKCSE9ta54DtmeYiVs1qQH9zY7ohcuT67uTDa2pDiTtEBQKjbALX3Bzire2LEyWJXsAA3G15VADQ4KEptTu1LR",
  "key5": "37UYBWLh4AgWBh4TVD26RfdNN5zbnoCb6ouSeFLsYSEth2t2bfivjkTajJ8T4aHWqGDCXtzwDt5KCKNL9sGnjw4a",
  "key6": "2tPtmXyzsqeeo4k88kKt73pxJqJeXgwWemeNSAgmuZ3guNWXHwhequArXVvg9N829iUy4ihJxrMr2Tw2EeriF9mD",
  "key7": "2q34oAfBwzwMoFZPrpd9VEWmYi8UbD2YrEC7TuzL6Z3LEnjwaFs9CT4AfXbGTXB2NonpwQpFGHroni97CkiCPbbH",
  "key8": "3UvTm5JFEJ9avYnci8qWJpvpmuhsp9vca3veNKVY9hQiWbEWKbfik495GoQ5poFF4fgRJAnbVT59egSiuBYxoeVp",
  "key9": "5dVReZvuovWpHkXYxJsZZTL72tnThQqjpNNXJSt9Ns7SiGA1Q2ESYcPNpRJhQcAb19CNXeh5iYNGsKvXJJDX3AtR",
  "key10": "2Q4G1qy2Y3HaQwPkysmSUQLNQwA4MpmKkW9y4z7k9T6dDTfTSDDpt76aTBiTXMGjsonm1Qc793gmQrP6JxziiESb",
  "key11": "5uxErS8CW4WXpoLwi2stkNwKyExeTAeqXZWiwNvjmNt8erzMqZdEVDnWkiWhgwL88zFDtHMLMTx3dL3wToS2fToE",
  "key12": "2Zpo1bwijLt7oi8zGyHrFzGxKmLdFnX8Z5HyQfY1cy8CmXe3UrYcrbSEGAhutdq9VC6ZjwEPLdZ2EVZtquDf1iHR",
  "key13": "5Zsyv36Vncd5S3t28nEcfGCaCCwyVjg6sVdNgFKqimu2EP4x1ciFFAMuYVAwCV6StYKBr7Z4NG5XUQqqPNPt4fx6",
  "key14": "UKKLBYFwPzDeW1SU7zBzhEpcvLhrBa8YPFSzAci3fUXfPV9FMkSQwrp4pG6qKR9WX3aEFi9kRs41rnhTESimTba",
  "key15": "4Rad27qSZ7SGniNcHNaczGucMSjU8UirDfYmNoRw5Rd9uVm2ZKAZTSNmqHsvbr6hK3TusxSBKTR1HdmqudprfmV9",
  "key16": "3feE2YKpBsjRC3jtvYKPCwyk3tDPVhZYUHHBrFrRZwD2TVQHfs8XrrVWLsM4bvQFgQiRmpwy72bP9mbVhVfZGnVQ",
  "key17": "5MaaEvpHKMpcuAPes6bn9nY4MZoKjZtPqHvfy8HWqh2eFKTu9b3QPDuajc8ibMYJghGs7S3nF14QRuoUvVgzgBKq",
  "key18": "3k6UCe9z5bixhqfGaHXNBVVCzp8yganiCGCr3P8ZJa1Rts2sUteUB8Q12appqJf4omc25TfDw8ieLq3YnAWcwxkA",
  "key19": "4epQdHZkzCvmKgbvLoM2LPvhMEQpVKS1UjAJEVSHwgiGt4qM1vzWfEJttptNtrhnT87DydHqhDgMYc8agkjYRVpd",
  "key20": "nqyFZW4nduCmisZeB8ucGrT4YLBPMxwZqKLLYchu3LHFbGWaobCyDKZ9oexLfie7DeNEJ2vdoj6takR7QkamLCj",
  "key21": "4GfxnTzoF1o17QvKr629TMTjpFYw4rvPoWyURpKKPD5WuD61ZDC9NJfw6Z48xsG4LLDKL1haaQgk9xorMREYvZm",
  "key22": "5tjDQ95qk35YdK59MHb4sEjGc85r4UXYJRMo4NnCfk8j6uwL6LtRAwizoSojExDBXGQhz5XWYeCDFzfeU8StjSkT",
  "key23": "5qHjTmUZNaR3uZKtPAURFn48N6H45xJD8g32Js2yh3w9ndyCrPL7u6jpXav8Lx9fWbB5xjdKZacYTPQc2Mx4tmdC",
  "key24": "5Cka9Lk5BX4HkVknuT3rLfX87Mbbz4QgHs3f3D99mCjPeeWbtp1qAqZwpRkPcEVhtbPhUbi4UmDxHbcqPMTJWTxc",
  "key25": "5mmveany5KheMYiiWk2Cx9u6RHTzNbShYxE6eRPWJr9ams7hFFznfxCguLSz1dAUZG4VA1uhxsebtxKuw3pkPca3",
  "key26": "2v9isRxDKd6ZPhfxftxdkqtUpZeruktZrUYRSj4LqaQZKCyE9aNMYCYpaTsrT8AxSpuuFzgWQCS6wwh57ycWEWUr",
  "key27": "4KJVnKUkobgruYGt16dX5NPXDKK8PKdVXE5RwCxC2Z5dMQMNedSFxWMcMytsS2ZmXkcwkS2PzJA7WY2WucpV1Z6B",
  "key28": "5ciAbkdbAtZunpZkbLjVxcpa4qh2aAxkudXW7Pvn5w5FHNNBXY5iWsqyHoEgjQdxkotUfCrWeqRLJZFJAZFEw44U",
  "key29": "2izNoGNquPakPVxnkUEWbFGSmJ1BmrAsT5q5MhWxtYZRx9Twb5YnBX8RwWLJsXEA1Z7fFoPqAkHaUf9rVqcKTfL6",
  "key30": "5rUpcyupPjSEtXkNjghvzaXxuv3BnB2xKypgnecevAVsNtbZimi8vEXRd7Td6cwby6z4bc5D2aoYSVRBgSN5f3Po",
  "key31": "2H4VAztxWSoQFFavUcfLBSy7zzpeeeeJ4zYBWpJtiygKGu1fr24eCv5dCGqcgqFK6p3GE1p6fBpNAq6CfHGbWyt7",
  "key32": "5ozrfk7SFyRkfL3Ks4FNdjJjfW6S7PHGtfPa5v67aj7AMmZawZJmbowZ46921jrRbT9LG4zv8t1tFLmTDujEq3on",
  "key33": "2Uo6HrYwmyJR4dNA91LsgbkdyFsguHtrJ7y7AFdai98xtS3cnRpovtEyubU5VseyJR7cWA3ohvxihusJSSLE3v6k"
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
