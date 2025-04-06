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
    "3dktLyquiaUbqVXXhHqH3qF96jtv54f7r1X2aoWVC7qB1Vnr5qx16XCkh6wW2WdskUzT8s82aaBEij3JPmufVT7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iSEguXpx3vrvkvsaYCfs1YJ2xYAypqHspcfiGoA8AZBmxSCee4waPqMjhe4DTitq7Cn8et2Tbt5ts74GdCJwphA",
  "key1": "3xttGR3oaRqqToDQ91ZDn3LPg817jPNkyiSULvhi6FKP6L4a79dHKAcoEg5pR9NbVaF6c2GVPRW4PX8QUzMiByK9",
  "key2": "4LW6swaPT5LRHfKr5uU4SBk7qjqHtPKGZKQxJd4bnCQcEdYNgM6ivXB3VFjsW3o73LVr3myzf8yxmxHtTje7ttFV",
  "key3": "5g21MkkcgU9FQ8eMKsUZuLTWYXJZE2XMoKHEsUyKVuPtzDtZLEzqi9vw6Z8zAJQbnA7iu3J34LWfMSrkj9zUPieu",
  "key4": "2tAKKbmvHQMKAZ1uwZuN4DZ39Q5HL2cU1gA9FP63em3L9m8d5oHsVMKU6JmpKtdLzDhn6DEKYfFn75NM6Z3nwKSc",
  "key5": "qAfLvhGHmqZW4xfzxuBjsMn6uarUUFmxHWo4Dm3qGZeW1dNo1WzRRuA9fTAuiJMxcnG2bf7v9JA2KtWsDZVyoZk",
  "key6": "XhyMxiTcxFWPeVYCkc7HKzJvjQnDb9NqSZghiqv79M9jFaJAFmUHDkfsLRNwoUjEwtom9sg7JuS1kqi1spRn654",
  "key7": "4m4BJEajkwtb7RzaJawo6z5LZZhzbJti8pm4juTvSD6e3R4jHcQNEM2PXy2Fyb9UTa2DnbUhiTXVShMewkGmA9GD",
  "key8": "2A2nqbMAcucEscEoJuizXeR5FxpoaGcQy7HYSGk9SgiyU48qwhFdGiADgpFKrSXwxBEgDaScRgSi5fhBgCmxrH2o",
  "key9": "2mvAy12f1EHdFWipnRJDAdcuTapdSwgzpyunDQSzSE49PiTBmZfhnrb12HZsKbLRb3uYjRYUskLB9UcYAbi9ELKu",
  "key10": "5kpmobU4LPtgBEVAHxCRdpDyMecmMjNLqd5cW8jPLMd7teugz8TNQtHcn9QzCVEcvvh47KML6ZoZbWPE3PPDzoPP",
  "key11": "4emZtZs7PLjRMQbu7DeF1RwPRy4xtXUERYiiCsvrTg1o4LfaH8VLrLBMfXPQucuoNNBimc8s8jLDKkEejKaURi44",
  "key12": "4Ve6x9owjSo755BzpJ7gH6uDqm5gkYtynbcV6kKCddtrN1Mi4Ba4ScEQzRBwSuwqpWwurpM7aXuFA2knXyGfV3qS",
  "key13": "2kd1fV4E3qqKtypP1EZCFDbKkHz2G62TSjjNKZnRhUbB23HRAjZehM5RytVQz42ZexP8KuaBKayp8cpLHsjN3D1z",
  "key14": "2w4BrraRW94ZcAfvZo4hRvpvD3XkV3vShSvkMSwsuejys9TMKZnvWSyLxnvj1VXW7idsbFSKC8UwWYjd3FtjscyG",
  "key15": "3Y88GpjjdmcVaqgWC31Yc6pnFmc3WAbskxZyWM6dHSfuYKnmJeqeQCMd83qcpQcbhViVtVmK8QQYPYLno1E4TVYv",
  "key16": "5U6mSaeGhvoDhVsAxz4g3rUhZGXGW3Z1a7pevW7GdGhDbGrDeAFt98gdgAdwZBx7vnxSFZDtQqdaxmK1SCNTYZ7D",
  "key17": "3gudKWkUuaeyMGn1BA2gggHfDBjwboSQBsdy6RnpwKxm8xyJZJTLN98ULyxw3SH7EGFLtDV3PJaEU9iQgn4RBt8B",
  "key18": "3G3d6k3SrHD7WWGVninkMgyyMVG1q3EbnKyMmGM4w6tWX7RsJ3CTd9TEr74QD9bYsYWQ4FEAo6GoNS2eyWWaYjks",
  "key19": "5oDFyV2UAL7iJeXWzRZ331r6tKWpmhjNeGiUPXLcC7H535Y118qQfcEhh3f7aA9EicUL1SnWUZTn7Cg8LiEpcDov",
  "key20": "4Ku9Zy4mUDNx7pzE8EUeMnCwkNKHfmLJYPngkGR7LnGL7zNigGpA2v2E4NcZxPAcJQrmNJd2AfHRtbxPkdMfR9as",
  "key21": "4khXcHwkdpYztBr3hLAaB9rDMLLyqH3mQwbfvxS5CcTbBegqiHoVj6Rt2x2DNxX5ZbuVxHas92ECwrMkwGQK7gba",
  "key22": "2LEq7KUUrBUW4kRk32tqX6yNEryHsmkv5t5EcLbVvZwuTdXyC7cx91CFvFa73peF6fWQsyPmWCrsMYNQ6NsXx4SY",
  "key23": "5JzTx9nRroEEwUkiiHAcNKHekNDGe1LfMk7hPdqbjErAXDX9tSm93bAmTN32J6S8jUWNYN6ewaDwB58x7LDJmR2h",
  "key24": "gFdVB6Um1bhriNpYwYyyCwxhucDB5ji12pCMrUbRbPafK78vbBVyhcG5Ar1k1skFCybX3edPtvwyCxXdoLYfoXa",
  "key25": "2iA683auoYv8y6dmwt2P7s3C6pz8KqdUPtGWQcw5cKHtQUzRwpYwutX8CHKnLKCKaB8n8nfyQyt4euib1WRMACV9",
  "key26": "4j3Vhf1Rbapdf5aAz9mm9nftJeGwwthcMR1QFAKtdcUsFSsvQDUE2KWusifmevMNpZVy8dkVPYungHnUAXdoe6w5",
  "key27": "2PrtS6b78HzR61ftFbm6yLksgnrsnnCp5TgmX3oJzUqATiLwXZAFqAgR1jaQFRmmVCAKWjN8DWyHWHzKrND4StFR",
  "key28": "3PPXJgYKgnBuKcJbuKEG3687Q1roLYjebtMp7LdsAxXM2XnTXnfsARap8WNAXs48WKkPnkz7rd6j8Zrg7LtWNCWD",
  "key29": "uz53CHSU5g28EB31UmrcZs96VqXpbTA8tALmL6Jd4xnXiTCPimQo36DEuNYQkqnfnnT2DpQM17U49Uqiam5ySZT",
  "key30": "5FNUWda4vEgwHujDMg8wRLHuHk5uZfwWDcjSQoPu1aQYBcDyUYSBMjNzsYp7E3Rdc7QPjCseGkBmSncWYfgTNg6k",
  "key31": "5PJ7MPKyRi5v5BAVzZXtLbX54HrU9DjfiMMdSRg616uuhgyp2Nugxb8x25Y1AvdbCsQVQSoyv6GdmYCYg9yWon3y",
  "key32": "296VrzdrdWSpprMfoP2DuH8nzdefB1qL121VFovixTjkRvErjL82Hq62jBDBkqRLLXSzorZUo5Bj3TecXXyQYMsk",
  "key33": "7m575hGe6JSkwy5yxip3wgJorprYTK9n3Cbufq62ACPjTZdFivu6uMpQTBGGfQoSwiym3GGm6gPXQ3LghRUdyzm",
  "key34": "XNmDwy5gzu8DxK7SDeE1PGnBSeRnfwtzHcPHNpfKe5mwm53pASKdtpUk47Lo4g8Cse42pzjt5qbzEJVvjJ5awWB",
  "key35": "2e5Wp31pMj4UCQhx5j8T3JhU6r4X9WGe5s1LECxDJFbCdormUFbcak2RUfFB1EmoUbhGHwiopeognzVzaPZ5q94S",
  "key36": "5Z31mGZmJR4g3qXgJYTwyz73G2BBZdw1HntBrm6tm4DGAtVFqLj6hHVNcrsdLwFfAEwF7UftYvwG94Dg8eHEjbqX",
  "key37": "5qtArkWVHQP9JGdBPfMFPcEdAXdof5D7Mhn47Dj5sUPLQYNgVunkBPmK1ZtJGxm8W4vFWyqwHis6GVnezFcGrSBd",
  "key38": "3y2BjpMNjxPkqAGVGtKdfN4aWdozNTwcjARsnuxRJDao1Hrwo9xq1u9nhZZmbsT6rEQuDUT1zMdXqsF2cn9A2dsy",
  "key39": "ymrb4kx5dQubBKqPjaWrji2N995z6C6E5ohEj6gdXqsbMM2QUi8KssRJPLsi271QASPhb2udW3FBsJpZ62TDG5i",
  "key40": "5dLhZXMge9tHy2ozHysT1Gmu9KpjANb8FMheVDgnBmrQa2yW34vzPMx6ZsY9ka4PAThkN1hPV5fJoiRUSyMoCV1W",
  "key41": "3KXJNQJ7kzXhzRxTio24F8v7ijjgiePEdAq7JkSZbgQU8WhSS5JWJ1GoD7KBQzQimRxgXYKSb1rbX5LKvhHsE1zp",
  "key42": "tB9G4CWyYeUYjKWWLfjjA1MfNmy5tJCpPGyfM1QvLhoQXE1MvKdF2CRr3sDyWfnKfYTyejww4J5Pe5iXQBzXsgK",
  "key43": "fJKy9PvQMP4NkdHbi8JvyzA6wy7EC6dHeGAXL6i1HGKJ1LLR7S6oF8SYUMGmxhyyASUNGJ65pYZX7pLvh4W3Kho",
  "key44": "4irVWCFgGEJheZr2uJfa4fVMateJ2PsEEbtdr3bugnwkFebu5hS4zr3qHmuKHzsy1RvaS5kxxAv1AoJQT3f3A2vA",
  "key45": "4khS5mrHLeFntaMXss8uapnnbq3JEnDgChRu7VNo7CTFno9buiK7zQqLicowe7HwGg7EDLg7C43JL3BjqyG6cCht",
  "key46": "WzwKjzVFUMZdDoGGe1TSNRxfk7txC3asuctzBjNKxMyBqgo4W5RT3Pm8tzSFG7EuXG8pEdR9KfjB7EZxG5kc1mc"
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
