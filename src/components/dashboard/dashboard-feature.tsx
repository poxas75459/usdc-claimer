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
    "4Sd53F52SdFFiCRLNu33C1PhBzjuomoRnT1PymsJU1rqwyd4wWVTpmfAQHwmJM9GHngLXdAmwHjB1LhFLU9ZmPEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kErbrk45JrFmfabU4Gdyzryb9igdPmX9b4XNp9m2pzbSq3fCuzHvcJjLpj3WAE8QZchgzZRQjFqEeK8a56cycT8",
  "key1": "2qexEEkcqBuYQQvPR1VGraHt2eFHgkNmMGjURopm6wJPc9H3jJ75DYuUfNRobxgr2iim4AYknXnJqCK3eWjaMesg",
  "key2": "42Q1KqGhiHB3GH9GH6VoGQTmKesjMfVPKcShTWhAZyKe58CH9TVbusDeUt1dSi3WJZBGXXq9df7VywKDeEVySfZa",
  "key3": "3Lkh1Nx7xmF4znzCdsWMNLfLfMZVmuHCS7CYdkctfx7hXEH8ZrsDKNCxp8VFLeMEyfMSZNhCvLtrzKdCQm9obMGd",
  "key4": "4ANHFEbxfiVMvnV6NhjnncAf2pzVZGQer5XBif26juyhGfuFxrEzNtzNzc6uF6kdTm8bxcXNYb6GWxMbBfKSJJG3",
  "key5": "5617ovnEFmwm52mG7tx78A37whxjw9ZL3sjv5kv7wYGR7H7Qxmd3YsLRsf4ZJsGkTWWHZwyqkMsFNQifq2ppdRDy",
  "key6": "5wumxfYoKCVuQqJXHtt5iBY21Q4v6CVoSNE74BCwMmTZi9GhNywBiMBVHgPs4abPZnjZWfFJVLecEjk1FUkv9Uju",
  "key7": "5aNhKrjowmqJ4pPoY4fkXtjWnRw7Brvwm37xZVoMMZMGF88122aEM2tFJ3hRY5PZ6X6M25AeNbHuEbMzYiBsaarX",
  "key8": "2k6b1edEUPxuJyAhMVZdsePsp2igtZ6GbjW8SPZmeGz6FUXCbSCyhcjMmhJHZaQ3eeDUsP5QpwobJ6zQgWXxNQdC",
  "key9": "3vcs2eBRkRzB2LKDfTbadSjy11VHZREpamZJxghcx5ub3GJdprJwWjWg5SRH8UdNULvS77hxEHNFPvqfFLPy1L2A",
  "key10": "5TAtgxhQ94uQQwwawV8ZKxEntp5Qwan6oujJ25WfSy8Px2xj19fXECBjAi6m5eET1EZ5VwEsBkikvpxRNWjkBXbT",
  "key11": "3URudqrhAVn9piUgTJ58k6CkF838HnCShN54pYwWUbdzLYyPU39tvP3tUk2tnWqTbj4poSTvMGxw7oYTWwGN9cHt",
  "key12": "2uRNJzfeS3w2AME8Vpbt4p5HvVZWcJVAta4tnyyRn3RLLoZKBEzr2mEdQuodcXwdk1mnUKNETdBZPFxH1QFnU2TS",
  "key13": "3FqCxDSkVwiVFCjBk6KDGoTPRgV6K9Ltm5Bqj7Kpb9ADw9FE7NWhvv1rc5AdYGA49mHPaXW9BbR9PgnLVkGei4Ni",
  "key14": "2iDM2ryeprpazsAa1Jo9e4SEKYy6UKBkxmdSBv4dKSgptKJvHE1LD5d1dnkMu44ZeJHMsVXSseF52kC8xPFf4DMU",
  "key15": "im8ce78LPDTUFS8zDhKexPBfnUU1G32SL1kWXoqoXFHXndsodGfEo4L2zSAwsSb4HrjP4DBHu9kwhHYNT6Ns93C",
  "key16": "5MAmsNaRYRH3zZAwmPFmUzdGXcEkzGgAMhvm6DR457LLWjpHePPZHSq8wM4uDTSNEAMj1eczhnSdNsmyuF6Kv1za",
  "key17": "637bQrE2L7DU87MRbVjbZgiEX2iwo7GX7Wu8yjK7AkiGCzdvXXRfaKY3rr6CaY6xJRtew1jALGo6pto7VbST7RSH",
  "key18": "5d2Ds7DjcjbL6DrNFqPseYo5w9M14sHmeJg4nXYDesnkkT8YLEUL7AKoD8dcuSjmXUsgWwuEtw2u1D4RAtWtqNDa",
  "key19": "3zqpCZ2ywDGUF6AjYXG8dQc8Vyh21fSUThMCQtVdMHAyoap9K6dbCSWbcRGyZaQGUxPU6F9f6Z4XmdGgCFzNsVqN",
  "key20": "4BhZRWtZ2AmkqCxLoJufm2dfeFRPRFxnzDsUCdaeHZngzoWRG32huhUqAdzWLsJajfA9zWfFQiyGfLjNyuHPhRhw",
  "key21": "5tiG6woARhtKU5zWBMG1bE1CGFzKGVV4dYiARs58s3xi3z3d5Q6Re54RMPkLv5xqei8PCwqFNJYnR4hQETwJdpTs",
  "key22": "5t3vrz4UR2PuPxBJBktBJSUJorPNDr1HtY1XtHohA4GVzgD12KJBvE172EWxWL1XziYbkC9fBwVif7Mf8B2yAv8u",
  "key23": "4s3soi3hzqPdVF2KEp2juzi66AjkbMbNn1dRMFM7KH7QfDoYxfs4njSErAtmguywA7EGkCtJRLF1TmxweDQwA47o",
  "key24": "2AiwceLvnjmS6sKUuZGUsrcbgPqzvqcv5X4H1NpWri7SegMRavifR9ktxbU9Wodd2BJ6yfMkTzRiiLVksY47tz9r",
  "key25": "36vh89gsKExdyaqeNZK8GPBcHY3DLRz65eRyJJ54dsmMYwpH1LQModiUVRKcfMkqvuX7FYKxmMsbuNcpdvMgZjQM",
  "key26": "5Cvd91jgbWooF1yMtMFStf3z6e7iroYKx2o1msegHDjHZ9aXDtCqLL9XM2rznqxMFnuQ7oFYPuLzWP5H6xXrMjXt",
  "key27": "4gW6DNsm6osWkozcyK8qoKbxK7pETdi1dTNpj8S4Jo7ngzcJB3n5MuSSRipjth85VywaaLWvbeqdXqHYeJZFKcmY",
  "key28": "u2NBPptAFA64CrAbn8B7hTHnqNfD7f5MSn5HNdeTLPe2BCGgRjBQpnabYZEqCigAbJYLcDgGqsDzBGqZ5t6qwpa",
  "key29": "3d1RY9HSzS5RiGdYdVKP4rbNbYWH1bYGsvqsLW6x7uudJNS396njpPcp7KHKHjdtPioG9JSPuX9sNsyuqF2tc4Uk",
  "key30": "5Exre7KUUBJaFLTAYeidpvrSo3226JaUsFNTdbq5kn5Vsso5aUUFcwgrUdeRwZ69XqyCevTBEZrsSks2LnoZYVbL",
  "key31": "4nz2cfwQqzdPHMHZe1LLZjjhedMZEAYqUDGGeof4F8setr61MdbhRcJif8KTJGvpeJs2Vskmj1veGdahd1Jw7n6M",
  "key32": "5bpWmpZsyDQyBJXLDYrSGktGqkp7sJh1LdDocYvMJEkaAmzLrdw8DCNpXiNj9khzG4DuZ8EjJM8R8mf2XsLFeqJs",
  "key33": "3Ex8R37FCY6s1aRyaxvJyxXD1HsfPkBiNP2SbvfH2bsL3GodGLXBqCBYjJqkiWG784YYr32DLawxsbhGs1yf8QuD",
  "key34": "5b4nUKqm2yorJtEe5qmNtkcTpcxcXaVcyUaL9EoNrW2NnfyVoB6sUXauGTJFJ2MFG7LMZArYT3Sm3FDaciE2bXUm",
  "key35": "4Q6metLhZpPyV85XuRbU99wzyAvWnrS6GNA6q5go55dvg2TeYZkEtVBWHK8rCpdthYyS2wAzreLRGA9VNampTSmN",
  "key36": "4aBz3VcRuP2nLTieDDUqyyAZye2L5mr5aoZqr2KEvkzNZUipRSs3LtL6gpuWLM2EjGgQza5jqmKxkfDfbKZyoaXc",
  "key37": "29VjH9xuprMZWg4w6t78wepF2rASMTUfxu2DFk91v8u9hdyQC4xrLHnyHcDthJqZPGKmMSAUqzNya7KGEeF7t8Mo",
  "key38": "23uo7y4ttmhi2CxZYfEPA5grrAsnHirFyk2WBRXPXkFV3PmP7WuNAxaMh1aozWyeHd1rRXMcjU4NA2oaWQrkXrif",
  "key39": "45S9MwS6uXfekc5PZ4pkymXqnRja3bhBQ9DoC6ykEPvEnaGBzNEqv2U3n9LZvXc1mwJwNySNXFrBcmWXF3q1RFJ8",
  "key40": "vBAP3zG4w9CdRJXefGmn8e246EzDiF2bs9tx3eZeSrExibhLiiTk6dLFghzDzmXBk1yJEvGwtCsmwVZ4dbSFqxo",
  "key41": "42ogcNB9iAv6JGy9EFDjsAaR3cnhuB8b7HZskJ4YrfY42rS333FLvSq1FXUk1AM8FV3C56VHTQ5o2y9T31kcDWpv",
  "key42": "3wHBfDPi3N5JBdLoKuvd9fyDkr82UeYYMtt9ZbdFNWkj6cPjurzCgzwMpbDjeas3uPV1cgARuYKGXAtn2HfUVcPw"
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
