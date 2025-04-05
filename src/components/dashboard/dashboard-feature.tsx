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
    "3QRGd9hy1iYC7FDsKg9BjTCzXbCZLTfaPKEGpxLWwC75ovGYMMapDXdYvQkndLdnyVTcaty1UnwgsPcgMpMorsYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pz9u1pWQAoN8Ee3SBA7GMc8d44fve1Tf83PyCS93hiF32RAvd9uczzAdYYbczPVLEPLAQtXKYNNi6pfjGMzp1Zk",
  "key1": "279ZSHTZ1xBetZmpR7AL2kBCLPYGqtqka8BMuNxyhTs9jzKNTgDzWk89yvD52DFRyYY2cMMsshQ5xDkpG9GNpLZH",
  "key2": "2WmzzipC9R4NHqAniXokjGM4WBktrQ2yhYJYkS8LJknG35LTkwgHurhbFjm9YbZiUp66sXtfDWfuiBKRr8Jc5w7E",
  "key3": "5nKdaJNEGXhCAgZyUE9UiUGpLWA1cRZc3jYS16H8k4DQx4FD5pNFjat2CxK8RNVj1cj8n98HM8G4foSqZwnrRRX9",
  "key4": "2rFxax5Fky2qtGzvBTxPgWrRdnQSQFWpcLizP2BzPEkBTLKa7XoLK18vj6aJar5xcBAd76Je4f5YthjZcZa8q81k",
  "key5": "45VhQdr5BKvfnq8i8rsWhEU4bHTddhA4j1eTH5ZJp2hwYoTtuUMDJb36SBQiEgYfZfhmDtqZJ1DDqXoU97CpAsU",
  "key6": "iJ6prSX3TGqtXgBQqec2pd4JT9en9cApKvq9Dhveu1DAdUXgQFttu8txNGA5NtjHLGR13oHopfuvXTRSr6mukP5",
  "key7": "25za5AQbyd5FT14vWHfDPMiSqHBXpy4866JA38gFM7fj2i6UjcsG1zayboqziSvpqdYxy541pR6DJyhmEX28xBop",
  "key8": "45A7BURro3e6rG6YVQRf6KFGMZGCNccV66CSdWqQpBgnKrVU1zyB51GbYKcbyx8czvDiP9azSZB1K8o6NYGAXpoT",
  "key9": "5Lzir7JD5hAgJibduzATape4MeUv99AL9JyzTJ1ptNNcuMUFAWSULdLrZnNoLy5vh7Z5g6wuejSuUVFH2ujAyDH9",
  "key10": "5iwmKwyjPebvuu4tLgbtGnThrT4s7gA2xbjLUjnzS9rieAGt7yv4b652uGF6KhdzaTnsKbhkpu8kxEiEUweN8LAJ",
  "key11": "2K1MEhmkjpAdmjzkebUHeoygqXU84eER8JcN3ZVTpzZaXLhACXNrvBnWSgznihcgZyBtZkHQs9owpVDJSjyANpTy",
  "key12": "2M7CCBhgvHjdPRRSAMTNWdAz4yqAQD1CXPcRcB8rnYwUFpmLA2LRLjihqSvevwwfAFfaFohGjThEG4hU9zv4keZM",
  "key13": "41BA7mkgk4qZZSnv2vzadTArZ6jNWBDHAoaCj3eWpvtVKR9sdqNsWrqu1njJmHsM6LGaFgajhWvrof8moedbzPQ4",
  "key14": "4bm92BBRbJDWiy8ZQouCzrS5nnguA33PoKHuJrExFv9Ar3MCXLh5azLWHiEsTsghLEVoA8aYPwTn4wvzvTLQccm6",
  "key15": "3Rz4z3Pp2MGGLeq8Rhf5nyZZkuN5T3pNqGaKc8c6wAuAsUiTEVkzpqsZoJLqnzsFpoPFCdUkg66tXZox78HzTzXp",
  "key16": "eptAkfBmaiLvaeTizcbyXcWHmuS45jK3R9nRrpxXNJM236sZEKeN7Nq1eSnZntPs4GszSqvSs9cBwYepmckz7az",
  "key17": "28nvCzta3sDGLG2yDZkNm5PBSmWpeCgUXBveGRxvvGeNrrFJhnQyeaFYiLQemHFeDgZURvQYa5k6Fdjr4GCyqoJb",
  "key18": "23ZkYb66ur1fJWd19QCW8Tzo8p9PfEaQuFwrWyUfq45f9594u8DN1zdjhZ6hANTe9CNHbCB1BoxwxDpmLs4PqHqV",
  "key19": "5j3SBHhyrSaYExLow6mjtVBPNAETRAV9mVT8ivGKvXKTfbids6K2FETmb3ch8gNKGKme7hABoLMSkkEWRwXbGjbB",
  "key20": "A1WYq9fxaBDeJmnP17nM3SZn8oRPwNMhBFejUshDBEsjS4ZJ6kAZj7K6rHpAQb5YJhVSW9bXU4PHKJEofoRKnRd",
  "key21": "4qUkodbxwXwJj7hFMmt44RqzvE3XDXNG42HRCLZWVCyrtdv6rS9ihU37T2QRppq3K6h3VtVaryjYPXLJRf8Nzxet",
  "key22": "4hnkaeDhAdbJ3292aqRb4MG4Lv8BH6AfxTxsTxpKFQHBSUZjG5WKJSgr2o8e3jBwSVoYYvvif4GbBmq3efSQGW6K",
  "key23": "YJcViDJLRC7KCDXN2cSEfJqZJDejjKRGkJhyS4SNuSG9AX4ANhu3WBsD4qswJkp1MZ2oK665cVqhmZRvVwH64Uw",
  "key24": "5qV9b3kht1HdP8iHFVzGtjbZS44cXEKz6PoW7BJBHRyUrhmzsxxa4qkgAKYnHTu8FdUbq1Yffhmy6pzwWUbGA8Wq",
  "key25": "4afJFzuvh38tdEgZhUmoPytEV1JQx4t5m2mHG5ukbj2UbYkqsS5r82NXZ6hWeoRiMXptSRYG5sq65izpxewt3z1Y",
  "key26": "DMWc9ynPDxK8HZiQrRoHvGqAyaVn4JJsyiNGbXMB5n8Gvg1wK89gE4nmbAcBRnLTUoRwSQoStiv2LLSFyobq2X8",
  "key27": "nEUgqrkPUCVirrkGnzvKLCa2J2cbZwgHSFkMxt153raPP55qAsTm6d2h8KAiUgk2WxtUUApq5q2WxLZ7MEFPSA1",
  "key28": "4bzX4uA5d6NLV7SbCnRNG37sqDiE3HzziyWLzv28BayevKq1FEiJaZ92owXbkSqztuC3GDX4EroGnWRnTYjxcUv1",
  "key29": "3LZEdN3HCFETKjdQ3VP83UKbWRfaDAdjKHE1g9JiJPYnSPa9ZNC6cXZanropY6XNWJHZgZCKBu8XfF5RCXrbEKaw",
  "key30": "49HdUvvf8K9x162uRGXFbyAtWEHmX26y7BqWGEdRdAMQUS6tcBN9vYBzZja5SbM77X6bzEKymddcseBVfdwWFiLx",
  "key31": "3w1hRbEoBtjzC9s2fQfvHrnKDJzzyuxJ9xcm9rSz4kaXJ76r2oUnXPeBenUx9EE2hEQBNrBNGQbsmVVbZWtH3d7p",
  "key32": "43SszZ9dr8EgaDndWSRVYwYQsqN5Q5EBT6mevVeVJJ42Qixwb7oyq3UzmfmMexKEusM4gnLPVGawwK7RLVNovtbM",
  "key33": "umAU2u9m5epe4kWAcoqNrmzBYtP8NS8SiKNQL4oT481cnrAGLLH8FJoZXMgtcPetCFhyUUChGM5HKQhbonTYP4i",
  "key34": "5zHtpdmuvtpYCBVrJYxAmnh9p3b9wTquvtfUoGX4Kma8EFV3YZNCDjXhQkawzrGfz8TEpPkxBUSStNywvcPkyMwL",
  "key35": "rZVU5PnF9UwBtJX2KRuMNHPLZEyVX3gX6kTztmfKB5t2Pm5uDUZJ2BoX7qocPkH6aFXotwf5DmuVMCrK2vSJThw",
  "key36": "4dRtZ3wxAhsFkYcQTEAgqduZFdmRjS7TKdEaZ2w13d3F4s3qq9ubPGBgPjGSgr7FHUTc4oLxsnBXpNcdruTrDSNx",
  "key37": "NyjexCSrSHDsQamDNYoHSUxdJezxcWgX1hXJUnTLWTtRaz8cKVgto717Vhfj1i84KC3jtymNXveABETRkr33GMm",
  "key38": "5cmYuPkYp4HU3rhK7onyjAtkWNRim77UabDbf7XUKyywuwzDdcu8dCnnwhyazKdQiaZNv4nW2eBhdpqUfMBNaJ2x",
  "key39": "3v4kB1gDTCvVLUqjTxJNusuX8A5ms5Ziv7hZDGg1a2JgsYX6iPbzFb5KmXSDUL1eFq23yspi7ZS7H37kmCNYyT4u",
  "key40": "413aGRmJTC1ZWyP324g2iUGctG9hebUoxyNgQn1MsWXZnJ2NiE4VtAwFWUhPmHfGDzCPgHFRJLtTS9vV36YjYXfQ",
  "key41": "5fNiV2UHijM28naYmC8Yo3JK9Wc6doeLG9nGZVEoJvFc5rCM7Fi5Yd5GguPL6LvVWsEHY8xpvcSA7fdioBdssJL9",
  "key42": "2Xwfq7QPgbepZBoTEfJr7z5SmLfnNKSMDcVHDrGNLNeLGSywXastvKzPcALR9nWYyRjUwJq1PEDWC4X87a9nKYNC",
  "key43": "3cJbUU8dYZJSBfKa7DGmF5o4mQm6NToJrx1GNN7sN7exhTAS9ZQmdtfvy1ZF1sdtAzZpNPUP6gkj1caAMYY5LG1a",
  "key44": "3ppZ5tuT3yGd8NzxnQRUjEEiAWLMhKTHqPKHBYPFJmPPLR5GnSjfd3bBAxVkLbxDSWwi7V7H77j3FWxna5e8ZfCz",
  "key45": "33JCwbApGMifykWuS84JkAxuY7yKUpnSTdJha1UwdxzEzXxA4JwyBPVkW7ksLm7M3sbzCK9rYYi8jyACtBANrRXh",
  "key46": "4XQpHpUk15PwNdXaHueGyRGE47kKccPb3Q83HDNLoctSyZKpi9ZvHxecuVn1ELzFzzg1MBvohwxZ6UrjuybMvZU2",
  "key47": "M78XAxFKBNuVMR9ZdLZcwFy4Ya5EdRhkTtd55M9k8QPV2nK6b4HKifzftC2Uig711f6vj1oALFEgutdSbviioZH",
  "key48": "4D4KStDtHTUsQ1apRAZE25EamWS1M845tnvVSugBFYv7F8B5TmJ3kc6u8h769UzVHqetdSRECba2xZtbovuXMwPm"
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
