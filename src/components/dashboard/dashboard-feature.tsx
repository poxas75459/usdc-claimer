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
    "5BYDBBdiBJfVWjUr1GMUPhrFa6gH5ZTu3fqeocpbQu9fjQxSNkUgY1er3P1jjQkjiZDbxgC7TZY8PMq5iLEB6gfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4df596dJ3FiXgxmv7iAoLrtT9uf8bfV2q9Zcw1KfKdYJenVwMZqfUsDdhLzVvVkdMZF3yYipvXTmD2ZD8hUUr7Ge",
  "key1": "5S7HjbdkJBQ6ZPPUWfQYesd7gnc16uWTWitVG4Pj9rYzNugaumymx7KgGa4FfYnTQqfwy1yQKBD38SBwY1ycSvkM",
  "key2": "5SqzTWxjfugBirnZ8bWtp1gXEutaqoXs2zoym3GgtyLDYyMGCgWct5zydouLvp8uEkiGK5f9zWFHXTkGWTEZEZvN",
  "key3": "3xvyjvUKHft7QMtiT7g7SHW4ppudTcoaP8NV6dzjC1UgGoyJZrvy3NTFRAXtYmqm3xf7eoA7Lg1iEextVNxvewat",
  "key4": "5ah71CCSu6RtCfqMmgJtZJFnPJ4Ao5E9iEKk9FoR9TfadBD3YXNkQEXCFAe5kd4rgSHkBv3NvLfFm577iND7H8GR",
  "key5": "3bbrfwngyJRbrRSjq7Roy7PEQB1QxSRVWBwnPwqw5tWtcJoaxttc5KcQeuDZmaLeRmUqQo2qU46eqiQ2gGSDxvAX",
  "key6": "38Cgzs3Et7m3vgMFotaDKE5YKUjDkcyYPmuytHD4fFrb5oPLiTPz3jqTVPDPM25AKYWZrN5Z3hHngjZAJsWDwaUH",
  "key7": "2k8LscRfNeEtBjsGzKdYZdnJRESQZha6Gs3CR17weL2QmJFNXNhXgNTnmXLEBjWgCySGosf9Z28uDutn9r7J4SAv",
  "key8": "3LVZXFgDt2mzSj8WuDjGn8mEmFC71wMtDM7CaFYXjuZoXGCmS1USBHHK1V5tvwS1tKUiwkk5NZjdVzJ2Rpzi6LyE",
  "key9": "54LAHTWcjTxPkyS3G2ssQnnFhvTa1HBbnx5PjcWcFWUVzU88fzyPn2FUjBZ6nVfBz7qNnfYZshTv6qy4kgHhr7Rz",
  "key10": "4sjYNHvwGT2teroLzgGi73dyojUveZCwbmru9VfCtRV2YbcNmCqyVKghiXEkMVg153uZ7GjXdVJ1Sbe6HWKC7k24",
  "key11": "5DKybPCGC1fx4roTyt39KpcrwLJhkqL4BNG8DnmqLVfdzKwvZzUJDi1G3PMYrod1MjRaDJ5PCXD2qYTNMcaF5aDH",
  "key12": "2rfEVSRggGDZ7bb6jNNtNzXLtAqX3yu4UyjUYhuNynunNWXzUPEpH92m4dkT2A571hh7VAmLChN2Jn7tzDb5UiBv",
  "key13": "2Sb4hdACiLDy8NMUrTUTWPtfa6ikSUdcxfP2x3V43UxVjzGPPGoJG9A2GMbhDqQpzmWPpyAkGoSXJ1582XwBgyUr",
  "key14": "5p3s1eXdf2rCQnYU9VVjrf7aXN5arWCTgJ4X3iL9kFVhGL71iHQKG5YQjkRSZjzeS6mberdLvMo1GzrACzLCnjcq",
  "key15": "3Ch7wvDywbz6aPRNyPRmxLyfufqc7Q7iWwwmYeGkFDru4gbQAuBFuQYD2XHCfYmUCRf2t8XJmzPHKWggtYW9sVbt",
  "key16": "4GjWPDxXZZq4hBjrysrHK599qhs1VzbhFTJM2nzCDuRvswgCJ4cn9z6sJa56ee2HRBMp2jzZMC7J8Wakv6PtxdP6",
  "key17": "59SQU1HDXnbBPooB3BErRp2vHoB9xzCEccW975t319K1KdBmL2Xj9PRbmtqDTMuupF79cn3L716Bx5VNE4gccf6o",
  "key18": "3CrJ2rsYwPDCDXmE7iJ4DwDqtM4iAHHLkJ6Go6YdCodGWAfecagxRYMaEXgVQ4axqBtcjG79BHhq5Rtu7NEVHCyE",
  "key19": "55BWDgzekZCLA424yfDC9L7ekSWiKaF4u7jZRVNi8a4zjhdci15BEMkpvaqQaPNtyGTwHzNSqZMTw2ZPFGBxYVRD",
  "key20": "CCxHn3gCmCGpDUQtqxiJDTdDgchRu6QmYD72Tnx2AVkuDhbpc3AndCKnPLcih5TXkor47rgrpg5K5TbhGu3orXh",
  "key21": "ZbcHWW9PZfUAN3fx54ujn9fViKQNiy3EtQxUTTgkqZ88TdWqreSjeZkz8frzJgXLUKipnfMo4e4nAK9XPebPizG",
  "key22": "2ESdAkFHkEwpUW6SosNtFWvNJG8nB85hYTi8WDrHvm2VNKDhKePbPNwSe56NZNhztVG6U42AYzKZu6UAkQCtdbA1",
  "key23": "2McVq1kiafree25EqJCrQefayuZK7fq6jWTpZzpZdo9sy4MhagzrgZFzNzEWFW4VvM7wfsZQ7qwGrwiXbGD6rm83",
  "key24": "2eYMrpQKsgg78ppx1LmWzUnairr5dZRCjJPjXTmjrgjcYD4nAReJz9kjkLjtNzhJJeenYBahwfBpvjiyyTsnXuyV",
  "key25": "5Qe4UrvQfxZU5ZLh8WU1uRAeTBLpqyQR7oWp4ypp9gGBcvaPc1w3gZxX1UaqPGwfaDVfj9rhhPdYYEPLyeK5JvEG",
  "key26": "4LidpRCeqHKnGhnuQig4v2tE4xRaRESsXfbmmPbK3dat1XTFS92xNmyy8hEbGeBd4ZDcAtNQyjBYji7kQiWZ97mP",
  "key27": "2QMdeptcmMsKV4MdnSr27VPCa1eFBKV4cmW9PH8ayTSztzxE6GMkoZjZJKGfhSW6w1yi7cRxX9rozoPXX9xAx8bG",
  "key28": "4qry8wyVSbAaKjipeciMuvWmyFri7pFE53AGwZnt6zVEYzbCuY4gA1FyynwEvbrXYcRWGZVmU99xpSpBgfFyCFX2",
  "key29": "4kcLGW3KWvv537F2Ff1kYeczeiZiYkz4o8HDuzHTyAJtNbMiPdmG4cuLtMFukFNkZot5B2DQBuAbBikzyfxSC3bL",
  "key30": "4oTngnepR4pDo7G3rA9Qvcv6bJ2oQ74mEaEjvkdx94SXYPfE2jATh2Swng7DbPjWkLtYgjqtMSj6Qyi1DDaX1Rmw",
  "key31": "AjctCDsVWZCxSniReuugmCNuJXDrf9QHCjXXLSvp8MMr8rkdEeL7uu3x97ijTXRJdGxcHb1i2YPMdtk3BxRuULq",
  "key32": "5drqMFjmZEUxozEHupRkwgXmLMqcdxYZpobRmhorKqeHA4N8Qw9nRoFbaGZX1d9A6DroxPnzangoGb7GQhFxmVKp",
  "key33": "4wTPjimjjNBPXWpwEjDHqdyKJzZ2zYUNpA7udkGwYiypQyYS3j6Q9xkCEx82ec8QKXVHioKQ1VqDWDuhc8u6NaKM",
  "key34": "2dfYBiwwgnz7UJimzFnRCSc7RaF5TvgXK8Tb9E2XRZNm3bHCiNJFz1itFQw6Abe58F6Pjuwi3qqQcyABYbQvrwJQ",
  "key35": "2USNP6L5QbRoZhY91SiRAnyj9mwCRAGVN1aPKPW5JSh4qKKBjza6FqurTL89f6ijnoPXvQNAgoi8LqhpBkMHCgmf",
  "key36": "3bjNUxLKSvGJmdVVbZs7xV9S4k78PUmv4x7t7fTkbxBCHvg965vdVNLLLYjWEYtgEZtqX1tCvNZgqjETaCdQ8eNy",
  "key37": "2nYehcGxiESqK4WTZNVyAMAiEjqkqrPVcGqVVwXsSKCCh4oyuK1JuuaFyXWS6tHehScrUuYZ3zyUsB7rSZnNdDLY",
  "key38": "3V9yZVQiuP1S4uC8t8WYh4Uw7WFQ74Ny6n4RdYfKbLg9m1j5SAmq8U4UgFiR621nqfXKLSXXgZ5rByPC7ckwSvb2",
  "key39": "2LZKxqtzN7KZxTWN1vYHh9nN9rjc7376rgzavLP4smGct18J7sUTUPR7Ppf3b6EqQb93d4nbLc7puKbsXT8baRk2"
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
