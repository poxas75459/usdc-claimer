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
    "GPxMYCDHTEjUUYnpAg1FKn2dEnK94sxjfFaedzuXkq56pC8SxA89FAjmW8e4a8rxNcvKqb5T1vSvZWyY3yxhkob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49QTL5iRUQft642bCE3WvCEA2Btq4o3G2FcJatss8eYu618s8ga7rjVKCDrju3ZQhPg4Mdj7oRCFMh7rhTGYM2QB",
  "key1": "5L6LmF3CvopmX7xpv7ohRxnC4KNhVVw1rwYaUDxJa3R5yANusAQq7nq71v2LNCHfi9Nopz66X2Feqh3dKkVgibp3",
  "key2": "3fw9RTrnmtkTJkaYS1PuxbmaidVj2ViUrt5zCWb1nGBevxjWProXcbdCPyZ2M3Dbd7F4aVEK4Au9tseK2XMb5Y9P",
  "key3": "5JSqhisN4ySRUE1xFnCaAvg1wxi4XouU4AY9CdStszZwvW7YcsT5Lxizgdu4UCP1W7fVspSyRj4Pi1fyWqMTNyRu",
  "key4": "3JdERZfDQojqCmAResX5w4M6B65W6PzzuxE4CYE3fdpB6yYTNKB4LtvB5Amw4CCaiCSrUWjSktbU4BrHSzTkiRc6",
  "key5": "3qQK8PzoZeCPwsK9vHZWzC8NdGPTy8soDm7TPWgvyecan2fFrsPPz3iJop925aF8qU5yjubpTWaVmcMueteWStiz",
  "key6": "46dx1ge1yaLYpaJHVQamPosphPUciW4p4fwr5pyu5GT3GzLUHDbknhPSX3EcmtkrcEAT91izp2PqTr1HaV4W7ada",
  "key7": "3i7khuUrpTrjC8wnMLPX4jSVgAhHi7Hovc8wMpeDZarrEs29y6y63EreoQz935FHNBZWEhP9DBYqYacJBc45r3pZ",
  "key8": "37vYBhBZWb5JqBqm6Kc6GAUAQrjPFg8ET8SxkyvMRUNVYSWBawqgWBC7EpYxNmkVNW6BDb46PaCNfzdeqLr4b2mW",
  "key9": "5f1eFspwF9PsZnnVifKp4EgiBnbHp7NaZTS46VUwxjBair8qjNAG4B7ZobT7apZQ8ThqKKsQaJs7vuL4Wxjn7M98",
  "key10": "qLXrMjHEdmQfFaQBZ7SMnQ1tx3QZG2P18VW5JJaZZwtCjLzLvUskGX9yfCTKsAvSqayAhACFZzrvWXxfy9DMePj",
  "key11": "57itUnW9PWkb6ubmgtU9im4yh2JWKTqgJatksSo7a31Q3ciKpj9tSpWxs3RcRp435PCbfoU6MTwZs942PajkKMS",
  "key12": "52kDhvEaNsgd8PVDJ5LrX73iEjHsFLto9YCUnrdgGucC6dm8zu6PGZCto5RQNAwP2sBzLVqcPTakKshxkmojK8WL",
  "key13": "29U6NNX2BgtJamd2aS2uL3By2Zh1CBC9J2uNdk8d7Y6ZCCjfA5cGtw5Ny3qKJPFBHKfPLRca1S9eHcXKpnUEFFCJ",
  "key14": "xCKFwah3ZT3SBiE83sBv5ej33nJweURTvXqy9hxApuAKjzT5PjKhWFpdpssNo4tj4DmC8NrNh2SNwtkw8baztKZ",
  "key15": "4wB12jGzdJGy1peKACrS5BbVpuVAEG15BanAhETfefQaRNF7cUZFRYmhADwynVkXJaZYSaRTLHv5AmHNfTh6WnRk",
  "key16": "55hvVHh1ugVypF5rfoFc16XQvTrgF2LAJUPvEd66UX4evzZjUPAnia1YEEDkLYmYq6zzTbjeAn4xHD3hJnNVX6yr",
  "key17": "4zpuYYogfb3pmMJcmP4tawKeatMo8FPsjwc2tuPKe594FdKBBrYGVphJoJHnAXrTJ8zh3WK912Q7a11U7keERGFT",
  "key18": "4dfmyowbefMnESf5vz1xweNUxCUvHYFG5LuFgFpHLzHLNDq4pZbcmnzNMj7Bz6FVV6YDtmNJfzyucHBPujzXHqrC",
  "key19": "4Nj6PXPPMZLjT8iZsBLsMi3YRsAKfsz9qnAHdfKeW1CBiGAR9L77bcq5UMZPB6Heym6V5BGmS19VFsYxaa5Hse6S",
  "key20": "46Q5qbJBWNMPGEPzsqWebgZNwkieBRC6YRSgNqPDssKLy3rPN2Zb1o7fiXYjNdqeyMjUDqdEQGneczrHUo5KaFDH",
  "key21": "rP7oF7dRsgFRmaNEgtTdVqDdvsPK1TVCVcCBYWSRMAzemjMAEp9jCxN4ezhfRMYJjLp1n6Nvcow28dZE5xeXfti",
  "key22": "2ugkX9MyFt4cLRC9cMhDyk7syS3V5awAHoUbZE53MVHAR1G2sgqjogn4WnBm8gMufEQfVMjDGRn46Bc9dcg9v4iB",
  "key23": "4iXy2X4ZhRKAuEmUaim7tNqLbtR5P2Fy5kXWkZiqxdskFTUnmJuzxGNekSg6L4jakAt7MPHwsCuB5Sxg8Sfo8QRU",
  "key24": "46aJ31mpa1DphnH2UMDfBQt8gE4gau2G3hqxeqj3NMf4UR881dGZTKkmQUJKMiAVbnnqqdGVNQd11k23HTPcg4Ui",
  "key25": "4WRKNaU7exaJcsM1MUvEnfxkQCeBpm7PDjssuBgz2ysG1B84Cy4TEuhGzuyx7J15bJ61YgL37Uw6GiroZTHtcwCc",
  "key26": "rYPhTYS8gpd3XLeYMgJxJFhHfRVxM9FPMoLn4bamPqpWacWETY2ZRtjMZfqjN5zWHnHkgGhFQV3o6npdWJhrNpv",
  "key27": "49c9yP8pYD3XEpRkA67wUscA19pUnTGvDU9o4n6xoWNfkRnHTwJhARNpLPHz2AJppzrXGiWEdThE4SLiTcUTrahY",
  "key28": "5H2Mk7P4gm6xaeE5xYyAiYRcGYtiCvqqm2z84jUkAmVBekncxcYXYCL6xq7s4uumVPUZRoGM59Ar69SpwS9BZr5N",
  "key29": "33nX8LVRpEM4skMcV3n8tGFcSgRSPMit1p6iPeKGtjyehdR95FysPKhBjRiNEBfAV1sqquZ3XUNJQhGgZr3MipJ",
  "key30": "rNLiN6bT52oLeXcvraUeMB22apPeb2QgHyXsqy3iVqBgfDRa91814Vb5wdjxWdAR8pf1opRDvYnZMwcFFfxCd81",
  "key31": "Jma9HRihRAD8MZaZtiXNsHfXYuz9KLVVhEpvJggdmvz6B6r5CDxLuh1GPJA78J9CLGQCjLw1f9NUaQttSxT4tzJ",
  "key32": "5YLTvbXwCr6V6pSvALjCkfxYBWLBKpedLbdQBcintZxuyyZpnvdRztY7eoT8FFQcMvCvpgDgQ9477yNwD1gS8fyv",
  "key33": "JaTbGNRmRhrPUV66CxxjPL82opANE7n54ewsDEoEHwE7EQLq6EQpKsSWdU5go5T6tLnhuSzNaZr9e7s74NRaq32",
  "key34": "4wqfPmQ2MmCJ5dLFZABEnFGuJ7QaNjmWrVhsB9q3ZRNRA8mP6JugT6f6mzHZGXJZ2D96JoSFhChReozbYFzX2r5i",
  "key35": "5KK7cLtMLD8xqm352D65TF2MUnuxSXLGDegnTiCxQzYb5bnq17cprvKkEaN8C3JeEYyETX9xvnMGMCWvDSw96DjG"
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
