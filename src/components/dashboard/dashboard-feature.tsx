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
    "4NBt9PVq7kF9D2gjDKxsWWch1zXcRN8F6CTK8c3xrt8T2EKNDJSd3FTXu2b2J3cetLFtTuTAFxpTaEFELHzTkNR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhF64NzCqz8t4FnjAR1Cj4QaHaQww4mVg8hKHhDXkCGPnG4Rj2gr1Vr4ghtKbt5iNkooNQ8wxDBsWPZhJKVK7YT",
  "key1": "3vgyusXCj8ts7PATLH5Kij2qoZYH4xd6uqHWGft8ehmqYtoRJrExsTQrXxhQdqXunvyR3f2KfdTweJtcDgk4GqP",
  "key2": "hZPYMozprbyFNHUByuVYA2ZRGBPiYpzz1EevL3uYpAU3s1cV6ejNnaK8tTJSrv9SkYsw1ig3JcnMxxU1fNVMVNT",
  "key3": "3E2cxKtJpH28ErcWJ9VwQwXUH37XV3n1BbDkzBRRdFhgyt6wbZYfiFpoRmBB2fMNqZtLxP8j7qL5gscpgwFDCjhv",
  "key4": "3eDqncqfqxQR77xBvEVrdPQfDLaG8aiDce7N3iLLhaFTFEcJ46bdFmuVbcYFhdN9AmLmYYfpdc3KV988tL7WLJKm",
  "key5": "67npT4E8ziimM32SSjuGLm83J9AG8x3BfGUbP4kMzh8dvZfNYbvsPRorV3Zc5cojS6NoMb1J9AJyWc8mhKgx3uNW",
  "key6": "4q1R5fqDjznTFkVwdJ2sU4HpbYFj8DNcbqiREwWmrp6dtfGmBrSnA2o3jKjQpNr45SVvKDoujPh4pM8fNzsSpw64",
  "key7": "3Y9aY5VV7C9bv29JvWWCkoCugTTLe8fQJSPUrWE3rZBLHTXBtgqLMgNmzaqFyBKLsDuhztpKxu94vsCPCN4TtLf2",
  "key8": "5vQ4onmMQxwM9N7TXpmVsT5X52KRrbVFsxXC3mS85b4Baj56Ysw7f5z4ntpSSQv35dUjAZknmYWAXuEHSnWPtKHS",
  "key9": "2djurrPWqY1hdZ1QJnUWZUUcRA4FGvRgXGkb5J7Vf6GZmuzEAsa16u7XaTG9FKsza3iiRXKC4poXjaawgUeMUMH7",
  "key10": "y1KTHeWNqxCT9zPs66fbezpvjC5PXyyCYvhaa6M5JCiWwZmui4jspatJKM9co9SV3gkbqDSB6CHe67jz8ziUeJ9",
  "key11": "4BCtK1yZTSohwUfQR7GXdM9WXxrk69n4DbSBu6E2vqjpfmDWxZ36PNiiwkviuDmEQD27eeEUTyERhBsHfJPs2AGp",
  "key12": "EF8m4tgYJXcETb9rBGTfwTgz8ZaPjp4XKk71NxHxDQYZLWqdidqzj2BchnTBy4V1Fxpiq5gqW9ypJg3Vnu7Ea4L",
  "key13": "Hie2ikBbMpyuR8eeQaChNrBsuBBVfSgcKoTHmRCFkd3wCQ6DgDbi6c5fw5Sei1E4YRgxRQvSWbkq6tBQVAdxEms",
  "key14": "548tTopRbP112e3RC59quuQdBncB7JCbX4FVKWKbHVVhweVJRvyAdspeiSMWwyk3bZNMnTXVspgEmxCxjvP6fEGf",
  "key15": "ga5cWeLGQBj59gReVACjwtNdoAb3Em3ZupQcLokHHnNNZ54Hj3oHbc5TVPDJX34fgd9LNZpCqLQrQo7vdKDH6g5",
  "key16": "4yCSzGuhbv2zhGyAY3cLJ7ccXdsZGSsJpvRt1hLDfccJGC728tBBrsXSnrxxNTNgm8nMkmFVd5zrbTxFg33ciTt1",
  "key17": "5gZgjd59gZePirDpWqzbhZimAasjXkVHo5usFBZMWb9vK7aPHVdjYnvYKdXHwU3CecKVEjqQbxcFgmYHY1Away2v",
  "key18": "3AxqhYhqTVn1VfUvgVRcCw1wf9umnH8D5ciTQAhpNjGqD6pYE6gRQAx8Dg8wjksEuWRyugTyHzX3Xaz1gAtn26No",
  "key19": "AMgizGNuF2V7quCyLHQTYNYoBgY3DxDS7D7TKaYtjKsAs844UfNtsk4r6c9vgui8SVC5GHhzxvYwVzAdgR9gqtM",
  "key20": "3XccCudZxPFKvHKY1PH3p1zATnnnY4tiT5wYhtKo1XFUaPUHgfT4B81vHQQvDpobdrRvWPYfdik99gxQ7sDVeyWF",
  "key21": "497ntidoZMfptbKS6Z7GTNBw9uetRJkjWCLMo77pdc1ZWQbM6bCRb6S9dXH8wzyC5xwdJmvEMLZ1kYagaPrxsdH5",
  "key22": "4SUZ1ZwRuvZLcstoUMJh44J7719xMwPf5uVpssXyMjWYLgXwLyZt2gPTLLQKpsuty75dqaYdycEtEbk8cLVp82c1",
  "key23": "3g8r8ptegSVsoftV88z7Qd54u977KmFHMzBWrfcH9C4MNJSGFf9TWt8gcdUTcqoo5ibUkuAyxgz8UHntA8XEisko",
  "key24": "5FWERdQ1Go7V7oKSALTVgUmR1sBfnjfdXhs7gmjfK2Q2XkcEUujHCnmsNdBJRenyPhW5Vnk2XADKzQm9bkxV2J5h",
  "key25": "4TdmCmuTv3ggY9aEsFdmM1uDFvGmcJBj91rekf1dAqoGMqKbaPhFy8eir4fix9Dy1DxCG95Zk9xCdVr72NxVmekA",
  "key26": "3bRT8ZY8S5FPHvet9fVYUCobTJnrdpNbjXqNBhfV7oDgYvVYSuWZknssx4rzqfauCaUKpFXAyBxfkpZfbj1RBenL",
  "key27": "3NCTuEQ5XNgGFUFcuvc3ZX2aVCNyqCaeFjf1NCGDTifQcfFsCkRgXeRSAYjiRdEk4GbUE4FCVRagpzMtcDDXFe8Z",
  "key28": "4CphFAyUKNM7fhJxuJybWARDcZoHVnskrMAQGq2La6kxcCbw3rtFmihjPLZaWznuL5adEK3Bua9nq1C4nGz4wn1F",
  "key29": "4nxcDERyYuZfm48Cmmpv1VgLs6A1jXZb4wExukd83JgSVTopxTxL8hSXFAjoMjgLcEWMDk1rqeYFvS9PDoocBpkc",
  "key30": "4VNpvoPNUbmTNvVLfWK4fNndh9PLPj4YAvw5dkRUvXFPzaeAKXNA2UB72v8JJdBGXtVneXShrb8gLNS2WGFwvM5y",
  "key31": "4xaZ9RcSb26kuUXUeLLhpdUXfbR6AVYURC6bZp5nkkzALNBLgEmpnaapw8XKM81NrUsPLXgurDouNGxDQP7E5637",
  "key32": "2mPDNrvhWe6wTuxhvwcAiQqaD4gVtupSCTE2x6HvNmihVpXJJ4SHJS9BbLWrYmttQvtj311uKCaeFCCD4yDCTmtk",
  "key33": "4jcP5Hp3df4DKxFA4kE8D2mc2DXqigJN3GGNvaeaMkKi681pFXJLnASEYWSrb48ZMQdtUmdU1khZPMz7wprtTP9R",
  "key34": "2huxqyGCbQZJuxdjsjZZp2G4wWrncg2JrYRGgc5t69oGbrZZBHgJiEq89ZzLqwU19QW6mPp8aE7SrYYgREZXtNgE",
  "key35": "2syiEhBy8iRoSGrMi1EQRqVfNYLKmLvDbYmnxoNA9F5ZJtYeMyto3yUmZcka8W5T4CXXzHmtzFj7tzyAFusZvkLh",
  "key36": "66XmJ6qwKTT6YP6h2PE2muwJr21K59QHgrTBUdDtLnTWU65MhKyBtEviYvuQf1bcGYtrvVKmhizniiPZQcTAWNwS",
  "key37": "2Cz7Ff6EY33eJi1dmC9NgZEq16Be7kkMUr2AYZGeX8QEwVr8PF5pvDYBfLz7jj3ukN3v5VY2UTzLHZ5ZLzsDC12a",
  "key38": "5V7LSBaRsed8hRDtXBuCsLnhPdqZeom7S4P79dBFDiXgq2snmYAaDzkYBT39pJePi1iybu8xe6kjzmLrq4YNG6rT",
  "key39": "jNVuNNogE78dpTgDECWxyNm9TWqFdBYGZGW8vDj3TgukkBMuafzdKnmRgvGqobSC8Yn2gJy2JSw6aA7QderiEfv",
  "key40": "2933UPvBTksVrRkV6ksfrMSEkVqoLsZcsnaNZmA9A6MWCoRP2St8Nt15162sgrgeBbbtKGHNF1qPECArn2ki9mJS",
  "key41": "z6xzB76QPNJxQsJ2S4dBrcdNsTMTezbcxC7eB2SRUvsPZWe9rqUqvUeNwftZdZNQUkBYSYvDz8wUVtSo7CogHaq",
  "key42": "3iDCj2LPXmoXe1qdbHPb765wsT2N7XCJym26n28dVfXbMcq2zCVRqzPkvyjiVHpiwL4NKXGd1AV4WiV2MzffnSug",
  "key43": "Fw2npdHQrcnTApuGGxDuCp1RzPJ2d8myMkVK66aqvKytgiYohkaYCJQMoYFF1LmnEPAzr75rhAZ2wqpUuLfxwwz",
  "key44": "3BD1Q4mXwMJHfCCP5qRehdeGWC6zseLjHmfHBcBbgwYvHdL8Uw2dUTyYNfmFoaeJtZZ3kDsKqHPfoxKA4DLYEqEC"
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
