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
    "4jm9h5z3MpxwvAVQbxNDFJtdf24FXoyBiRYiyHSeDddfqGa3UfujFTNzefXc7kMBWhmFg771SpPJwQXJZVTjsrg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C5MJAh3TJDYT5ZMVQkfvkmZpoFBUuyUjxWe2TQSSAQJxzHmF7MRrEZtEoyawS9FNgHzaNFk8PFHBUV2dZnANCWa",
  "key1": "3otXKng6fFvrRyEeL4ozvBJDJhzw2xsD79ShfegrSBFtWmvT7a2Gi3ucb1aFikuKeNMeJLo2WauK8xAUt868ZTDy",
  "key2": "zDnyYGQoYaeY53oLpGQ6xPiFgbmrQB9RtGLNqA61jymi95SxtLEVwHU3AL9XhGxmbhMPt3eaMCtZgYJQ3a9MpJA",
  "key3": "4F6GkaMSkuB5j7wVimMpj8nmmjXyHBDZUGUQJXqVqUZXa5dMvrwXsXjgZ6pfHbc4smeKUNCyHpHCARJxGo9ekC2k",
  "key4": "kN3pRmnNWaFAPqVkRUBRUBBmYSeY6L5RZk42TwBtZyNcq5fP6ugqo4khWWGVAsXdj3eM5f6u2YhvV3UHuVmbZCB",
  "key5": "3dqsWdiHYWPKdesW8PuUMykuyDuPvutsrkiiWaQw1unWjXzGyDJwYWNYLXRP74uAocL4HtKxUCpafj8awP6FCasK",
  "key6": "2FWW7xrFKWxkuzLMoYefV6MA53WaPoADGBJWDarWtudGsymHtv3runDgpB4zyKiPZANVnYSXEoya4WJ2qS2YbfMi",
  "key7": "qxEzPiXs8VJyBWJcfEXuvpUhASmTgrNS5dToRuLCafFZGfTkZc3Mj7GbHQjfwYEbws1ZK8vgqNJSs3bgCMQBmfE",
  "key8": "5yRhbeLwAcEPjezMT9eNJkoiWbbeH1828Lg4MbAHsRthPQpiMrJhaCUWdhaH4VicBuTGirdRe63c3YtqfFF2v4eB",
  "key9": "5MxFd9wKXcdtu32gjyDMAaMeCARPiZouf1EififfoF3TWz2Jb22PFBGaFQkffZ1rfrMWKU5D1MMahW6ktjU3DAwV",
  "key10": "oDaE5nXnTsYviYUHyqvDuH9VKzNNWdtkhrzkRsyc7LTT54sNYU287aYqKsyC2uubdJEAJ5nH7tQ9wSHG28R1GQS",
  "key11": "2LT8GcSdnzczfZqy29z9ZK3aj5Wu6sWBfFpP8UaFpEEid5EpqiJD5rLFDrLWfuNBrQfhoWoJKTCy9sH5A8zBop3E",
  "key12": "3LioG15p7Hb5mEwx6ZVZaxDiSgeHPskr9xJBGiBGvmc728LQeUmWnLJdUv7VxRrMeqWTxnEKjaaaR59qZYszCkHd",
  "key13": "3fiYCPnwJ2ndYCmSE2YSRcmKnAjw7WSbT84ho1fUbGKq8Qy1YuCSqW6LupqWv3wqW6QRuBho5jBtrWkDwwHfeycn",
  "key14": "g7vPAaj8GH2z8VP2b4PXwzg43R42mnYS5vXcCMsrnsvooDUNrC5phxh2472h5HpbsVy8x9q7arPA8DhhWRRojGE",
  "key15": "4WD9K4PecCtciKAoBGqoexpAyBwifoD11DYNKb65Pab2kdwNHeG8mJrX9Zhg3Gwqy9R7oS7d9NatjaWC3AkH2PFe",
  "key16": "45HyqLzwxFjjUtFAEYeJQbxKAGkDNNumkWmHWiJ2XhvrTHVdzjFR7hqThXSWT3codYkAhzgqJ3UPRsLvabaa9zds",
  "key17": "HqbwivzbqQxfNduxndRXwWu3j8Y5pyihxRbkqYhCBLs7U57XEBPHePGX4oVxctADqkaURgad4ZuvA7uMdLs8zE8",
  "key18": "3C7p8h2pxL9m5uErQqtqkXigvhGjxcUKGXEfbLWYpLR7sNRhQpZLqUuZW4TfbJELsrHEhDk8APJ9Ta2hK8nan2aR",
  "key19": "4AuHneA2QtK329aXcYN3XAHvig5hpLN4dpuC8b7RDvB1MmCuk8SSZM2iybnxjzmZdZy5Qo7VCN7PzC6xwwEeZSGu",
  "key20": "3TxraUk1oqXLErst2VRD2J5N899vQbYfdn4wtbZNPKAV7dL9abbxTzBCBZXUgrRWZ4Ln5sJsm5JvWtshYkcQzbKM",
  "key21": "2hkSEL3YQtFbfZjcDYPv4YVgcAXvrW92FvwDsmhZLLWSLBGKVMDesct2w9Gp35QHiAAqqrCo2tNGZD3pk5GwjLK5",
  "key22": "D2iv9rkiPyR98zrA1W4gEchqCq6L45sNVioEjUfRWFQ5FhrdxYbwgZnvdGkgpnEFamz47gMo1ARg31CzfYZhrJ9",
  "key23": "5CVu1AhMXqzzgYs6hom4fXMHu8XYBCoydS58K8a9UqmVyTpu7aRA1W4K26jmBh21jem6ezJKLUHmiG3mA2Yxobjg",
  "key24": "2W2rGVM3d112t3Yh36UUDC9iueWcEp7tiS19cvaPjDr14gwg2BkKvhsLctKv8RThpzNgor3TdnvKGixz6kwiNk8X",
  "key25": "3LiJyzwwn8hkKb2wiPfF6GJTn8xKznpdJnmzhPKcXS5e3aMVVZeeWyLe6nM2b7gW3fwhZUw6a53MEW3Pko6JvAtP",
  "key26": "7QaHG7uuKMzhDr7ytgcMMz1uiQpPErBb551AXg4CqPJqSDpUYeqy8porFn7YWdHA4w64Heo6mEaBPdHxKX2BTbP",
  "key27": "5d5RvdQDXpMfhLpk2Sxf34wvT7RuCMEL6Q8GkmtFB5bynETfBhY64f2gJFdMhKVp6eoiD1TQuDSJ1TPVGdrs6Zih",
  "key28": "7JkGnhqPEb2Mmx4tjt7gfA5wN45TBJw5EL9smgoZvNZs9KVR36JBTK5xsjjbepgf1nfe21nEPyJgA4brAtp3GyS",
  "key29": "4FHNxw6ucqTKW4Gh36poezwrwEL4sVFfCoMpQ4fcmkZX9LV2jWRZZM7jG6G4Gzy1qsMEafnaFupahbw5fXzSRrrh",
  "key30": "3qBZEqcwatVfYkymRVtLqq8AL3vTcdgXUBoiS4rojnfWvmuunVFPe3VRLxKgUpwRnqaFyVbAwPGLqShbdANz739",
  "key31": "acyEd6NPcLdZ6nsyBgMT368RjYAgnrJGNWFgTiThBZc9JFJhjy9ABGs3ZvbTDgsccCc9Nr2fK9So59KD7TjT42J",
  "key32": "3catjteHHvf9Ec7hEWwjgwAB4q8BWJgF4NbRURxMf4KqqZ7QMH7izStVvwztc15xVVx5KQy1gGdpz6iLHp6xUoNj",
  "key33": "4bdmmXnh4Da58Ty4SYNZLeopS7jHyrPwWxTG3qzjVX2zwY1hth8N7jKyEB7pW2E2dndoKw5t4aBDtdjVWcfennfH",
  "key34": "4q76iSEfaTRqzHeEJVj9hgJ9LXU1o9hFq98idRUZvegUEEUpGdbUFtZtSAj9Wh65RQWair8JwxKHZYnHuLgPjDXf",
  "key35": "24kBkHLjKNwYpfX3rKZcqjWuAVQTccwqfCdtccpDhivpTR8xfX7ydr7eZsR9gYceAthxrj7yfL94mQQHaWvYGcdy",
  "key36": "oBffu9fSbnvtbJ8qzRbnh2p88AuxAeWqEfnWxhuEy2HxjsUc1gkjwGCizXRWufGrnUeYAKgJ1pVfJ6CnabLR2Eq",
  "key37": "2s7Tbmg3ixdGGit19xmPD1ZFd7yBdawr3ogq2pjdCW3dHuHEQG4uEBgyXpVUtxyKM76hxaZWXYNdJHzHvd8zFTbS",
  "key38": "16vSHmquH1ktrfbUQwbyKddjq19QERNsSNQTan95U5TtLxtKHjfdA6eMnqsWCWo4NMAQp1JphdZUvbKBE9bMVjp",
  "key39": "4Y56HL6cxZy5UrUzFV27ewua6APf164hghTz6qdPHF8vApjPFKrLeEj3eFzuHCsbqLR22yfpgypAkcSpfDyie14r",
  "key40": "yzi3na9vvDX837J8PJe63FvwfgdDbssetR8xsVVcGurcp9UtrsoRbyztsrQtjRJMX1uRnxQqFAyTSsCuChsuVSL",
  "key41": "2GhGi6MBEE7ZuMGtXUdfg26NUkCYZv4PjgERCMMnQJfjBi1zGZZqurLorzmdVZoY9vx9g1PCqCt8PGUEi15s7eWL",
  "key42": "5xcgmoCF5sHd6qwQyVieePtRJBNtzu7SXJmxxsZeTx6owcXtXkmWMsJywc85MURTZMWP4sRrprP8sFsc1E2spMzu",
  "key43": "5cECCjENfDH1JBKB2sCGqQfq2nNPWUSE8NwCmhdXc8GrnvYna1vuxEtrehYPWJcStWaw7dMVBtHo3NSkZY5fAQMT",
  "key44": "65f8bvEccoDUCyrdibUSqT2cNuCyncWY6SK7qAJwdR91qi6Ljfqhf8PqEQb6MRL7m2KiXCb9gsMKQzvV1xQkf1hH",
  "key45": "2AbmpirUSWLuaZnS1TD2tzyL37yTCRym4FgjXNQ98c3THCqbueXjE7ZpgdB95g332USN8qxFmTFRW3Uf3dGguFE9",
  "key46": "2YgcCQKaa3HfmXZCeKYtoo6uxNvZiL4egdXd6aGMQ9sp3wUGW1XT3Aw7NmJT7wW7qpQ64SWa9N7qoppeYvUr7Gkg",
  "key47": "5pEJYPS2J1Sqvei6VP6apW4DPeHC34P2d6r1c6XdvTcRBtVsgp2PUL6F4qo34BdR8Jc7Xyxtbvfrgcu8LQtMVxw1",
  "key48": "5XVRANsz4Z93VQcDBpe3uSCU1DWdgS9mES8UWNyEgoDJyJRwmZCRNrSny9AMTHsY2VHfgQgFTpkt3e8iEJtRKfDh"
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
