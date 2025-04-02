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
    "4Vh9x19arUqScH89U7t1yDe4RVNFTNz7SmLDVuYvpEqnPjgyMsZ6atcezUjMf2FRYCtH5qR6uVBXj5V4ytZWjAiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Es76qkwYCvcw58FKtK5xizMvxquyzFR8MEC8tJkbvSWKAUqmrFUZrXEwFP6CL6jY5ZrraMrpF8AAKGvb2yTMhN4",
  "key1": "5NHc93SB4sLqrGhpZSL2XWjsZmAUKUM4792XVwwq59XEBbT6KN7QKrpePVyJ1nvMY5QSaog5Z7ZnhZvEC4dxMPmq",
  "key2": "2TT6F6xtzVcEHNUK2dtQn1Es2inLX92RXpocdF9pHqkpke6CWZjGHCzbufogMSEoTU3eTtf7emWmumYVTwvDiVY9",
  "key3": "2x7aGpdgxRsnreyHm64xaopdfUU2ZQVEAy7ZBoqh6fnhQJPStL41v7JWhDRXtFUN8RvbmLLTeFoNLeNJrZtxDseB",
  "key4": "2XZbQcjo39s6YfsjKiMoU5oYvtiCuif1Hdzfbg94oGTZWwPzWwbaK9v7VKVUevGb7WNXJece5gLVXLwBejHykjLz",
  "key5": "3ufXNMBkAkNJ4eQK9uoMsUGy8Dev9dLSwUU43uZTvaVRtrbUPZM9hx9bcVxBXrnNdGCr5vYUdYokDYdCDHDM7s4A",
  "key6": "iUBHt1rPHQt28kXN2jqPfk5CtMVjxHDZ8hvJCdZhFFozvbK5Vy1zYjdnSDMaVRFbE4i64AHiTCaYfy2kYfqVQiz",
  "key7": "2yZVHPLtKn8AiCmNqx3oTAsf1PEft4qS6EmRTS25CTAEZubm4QdyumBaaQpBcaWDnLYn8gHxeL8YjqXwDuLWFoh2",
  "key8": "3zSPxAA7m1CS7fjZYDQTtAe9Y2jMAPS1XzKRheZFdQgTr6iiGy3N7oJnFDfiKkxyeycms8RLATzqdUyeTFLjXxjg",
  "key9": "2QcYgMk4meXHgH6DEmbAFe6jNhxw6ytmtpaUn9q2LCBkxWyWAdEaFoMG9ABHz2AM7x8F2vkivmj2MKoV5YxawD5M",
  "key10": "2Jk8tHkjKhwgDkhxLUXDASFVVL1nsD8mb6Q4qS57u9BWoFA2QCMQyCqntkUedvtRcAHLZtVCUvDzL5WUzgjJCZkt",
  "key11": "5Eguwba1ML9bQg9T1NeQCNtB6Stb3Vr4EvVX69tdxBLmkgZrtyFKJSDbqQU2Ym2Pp2Dzdw3wtBaDi4ZnFgZqzEKT",
  "key12": "4dzp13XpjEVntuV8Kyja6gXkj1grvRHJD9zr8PAteocnsYCqemj9n5qRc4D6zBc68egSwuytr3kcnKHFeD7oqKGr",
  "key13": "1285wp5tLZG654bTdFnhWj1CxRFkBjMMBZLCGLJvR1GZJP2D7mv2LzrvQxLBXqtX21YoQcuJaXYE41pdNM6X3VwS",
  "key14": "62d4N3tFTk3UaMfCddZ5CbujDh93khhFffQnRaojBuTJFCPbhLkiGkDtVzQDyXi34n7sA5BuJ7Y5PAAUbRszDqf3",
  "key15": "32pVmSDXLYkWKpZN5Mh5HGJKMidPZDcfWGDSR5eX8qjPJWL5vcFtPFimaU1wjzzKcu85aeDS2poxywgSinRir97d",
  "key16": "3pNtkuPhLcMyEHYMgQq48RiG7chkwUM9yDK9oPpS8sxA8HLj7g3rpPAC35yKz2CQFAdGibHxoG9uMvxb85oaCANi",
  "key17": "3YnxUUvWhQN3HA1XmefJzojpvfkXvUhBVCWQV9kbsuHGNxLhFXzgEYji7ACTD8bbnr84TpgVXMZSEUryDFbB9dgq",
  "key18": "uRyT3gayoz7KmZZGTQUjH5pTCB3G4muAbrL9XK2Q8xqhK3kBWCwYwyiu7wsX5hLVLdyfnLN6QTpm2CVykFto78e",
  "key19": "3KR78JyH3dTAv5SgExqFZocoebmiS2zk7yqNFSVgdfzhcUsmQkMYLTgY65CdZLkXXVJGTTeeyxcf6aVMMZbS3Xi3",
  "key20": "59Qhc2CZvs4nYciNyZRRiFFEjpSvhG11peix3Fp6F2FaSrDz9LmGJsHq46P2S4LomVDn2CeddDeGkmsBwTCE92Tk",
  "key21": "4HGkd41JhpQzZkMEntrBTJJTrq9pS2smdKMBzuyBzcGZxh2LjxY6CVRpLTT86Lho82fdLrnkbB23metbBGbC6auf",
  "key22": "5h8XXog82KwFeceTHpz5CLvmTyEq3TpGUVtqX9oPTFSZPyex6AEepewNqUFxSgEJC2P41h6FnycKMD7icjpypQof",
  "key23": "nLQYew1WBNWvVZGC4xTavkgCYKMDVoCDvTheGCUDwB3Ucitn3RcKffHoXGEpBvKsK3yiDoASAndJJ523dQtATyM",
  "key24": "4ybDYfHQG7opT9p3uNS6cGEMTnwcTZUGgFXJ8ne5gqsifKwC7GDM8Puj2JERGWPF3z9QtQH3Y5nVif1ZQMMnDDbf",
  "key25": "4ycMcDab5YeHpYVGSkBhS5P4dmzb6bVaWf4aZfokdzMJh2G4JSki99aUYDZcVwEj4TooFg3nZjRqTbbgdv9fHcck",
  "key26": "5BJLaJWKu5fwWLiyEBk1CxMrDoZy9nCoqiW35BMSKxJ6w3D3WHmDzja5jK1RJwApHeqAhb2PF9Fcpa88k8Qv5LmP",
  "key27": "nTr4tcRKGVDcaiS2u8Jye6J7uMUhXzMd5jDZdYZ2V1akioW2YwmFZoUjQNy65NbYKMUt2CU34EuDkhQ8Jj9Acn7",
  "key28": "5xtidHSbMudZhP8aesb24Rq2uGSeU21USy1nkwZJBytzaTZ3CNqXaFYZ3tN19cde1p8FzPvpoWc7x4m2QEa66Rjw",
  "key29": "GieA3iw7n68BQEQaDeG4xcx2sYsjci5SWGp5aXwenGbY81mrME8YiJSeNk63Re41kjWKUDgNvbzrUQUdxVa69BA",
  "key30": "37Yxd5MPhQN7Vm6ek5agvCj4BNgfzob3r2v5SGCQfxyzBJ2J3c8G8c5C74QSFg79McKnzkkmA3TtMsp1ZP63PTUZ",
  "key31": "4FQnt83GvDECLxLSDcrL4SvSUJkeSPT1Ko3y3t64rToMXDPsjAHkk3B3GjmkzM3s4Ud4oDV7uH9QdW3A24X2dC89",
  "key32": "BuqhoHNYoijY9p6EvDbPeUjB2nLhzuSBgYeprggBgPs86c99iYqNhTAwqGs2JbTQbWJouVYTP3tUbMBrgLZLT9i",
  "key33": "1L4eTpZ4DUTURBGrSFYvcnCi3KXD6mjXKz9Ey7aeJVgG9duwpCiCQFQRRzSAREUyvYzbWBPnKG8GM8jeMUptKYa",
  "key34": "3qWgFbvzf9oLcZee3sYY9ev5fDy2huYJrqLDWV4Wv8ioXorVFbP3tntXJ1kA3esZCjArK4Nvmrm4XtXXkSkKqQb6",
  "key35": "46gJFYXwnZmqEWrzHuiZ6JPWHKx9TTviVJhN1toUYJKozVuWH4hoWUm3FhHvhGqqvSxgfmKReVFR5AibA7mVSBKB",
  "key36": "21Sw5AnSymdUS6o5vxd18FkAXjwfeLbZQtgzQTwCXMK6YzGrpivRXwaHX6pr1pBfpRPatFhpdVdPuBzwdoosdySa",
  "key37": "uj6KaHtpp7TJKDd46dGwgvc3pgoTG75tDdJ778eE6mApA4HydttrUmGRBfQBSKq5LcSrSXSzPUvsudoZ2A8mBNg",
  "key38": "5nTi5rA9zKdj79SeCTMsdTU5B88yTDWdyB8KZWZpAiZ7TMCNfS1GPePco5pJTD6DVg1rhrAQtUwFynGEDBaBgAEQ",
  "key39": "5Lkw6eymCCsAR5NtaJDpTVy114uZmgf5Ki5NePcdGP8XrDBCeTJJzsCQp8sjk2Q9WvsHVWioh37jS3UkcqbLkLjy",
  "key40": "4Z8ZUUqDZydUV6AukSzjFkNT64uBhcSqpaLF8o9iY6qscJeFraycdHeMPehMKZ8sGzGNdBHqA1fXS8nk1JiHMnL3",
  "key41": "4WFEuqXxHVU83U22HYRCxoUPMird816EmYBWRcoYFbHLV3D7ogjEpPkiyiwk2LqYzVcZZoBRjF44hSyeYU87Ubpm",
  "key42": "2KZVq5GKVrQU72RcoWR9erFLdozsbBnVJS7h91LRJjK3pmfQNoMiAL3EXhzNLt4oFKtCbofEeYfW8V9g3D3wrifj",
  "key43": "27j4h4c7uxdD2DjaYepqRtwxTb5nCGNRtwTuTksTSm4eBhpZn5DGWACBMtxktkDZX9twBTZTpui5qreoEgfUNbe9",
  "key44": "8djKGHGnaiEXg9mpeiSEz77WFXbwmKSfXnu6hCAsRcaaMAC5Dw65FE4TPtfE6B7kFDq4hBTA4PYJBEHkUiekt4F",
  "key45": "4PLwYf3DKs3mvjxmwKej84aCCmXLd3W2FosiB5VAitrFgLNx5GbsUCoucebeJhSDPmrDNt3UPrDVgCGZoPNUwNvh"
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
