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
    "23CsUxypeQ4twBTvyixfcWWKMSSGxidsG9aGcc8AeXsqR88qkFq4uqpRPG1pkHAwppqaZoAEzY6VJ5dqdW7QgaPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTiC5nPzbu5iSkUtQ5Dqi7QNBu4ZJXQqYCyAVXiAnaRqL8GDjnBH1JCKJWWegHFPzRpiubvUXkecax9aUWVjS1f",
  "key1": "2cf9qR7mRNueCvwcoSvXbHie6BGWuLonvpxp3WeP2Cx5CuoDkHURc7ip8Vp9Ed1GMHAPYKFLPXVgwXitrBjBjWAu",
  "key2": "G7uA6raZgDpPaJS9DaSdhMSnxHhKEmkjgspRFdjeppkyFs3MnvG8Xu6eCMvWM7yWPVJDrwBN2XgWSMG147DDHUu",
  "key3": "63MEdBeX7Z92A1nV6nPxY2Bo9XMHBJgTpwaxX7DLVk3ZP8X16iGUxr7MuK8MJVgUe1fReEt1oaT4vUs88Lahafr3",
  "key4": "66NNupV1TqBxBhLuuWXY3bog11XA4JaEmDfPd5R4bJaZbdR5XC6rAd1FrzoY8GmpqWsMftwRZgpCeqjueAEqao2t",
  "key5": "4kxQEBNzhLiVR2XBQM93uuQpuxYPiEtVfuDf9UTe7KgopgZGFGvBGRyWZJXJSDqnevEM44aHaYuzDb8f328xuK1x",
  "key6": "4Mer3YAinnoeTnkjpmsn2peFqE6cKVTt4pVB7g2QHooRp6HRhzbnmk3hqdPp2dRSupiCjisGgtqZk5HxB2TD6oHb",
  "key7": "5QRK2EvaVXJwarYmyZP5EtFHFr9aHBziQcXPqZZ3zkhRTugTuuSpEgQsQ6QzVb1muB2qjWH1Q5XcJberqgcQUJEX",
  "key8": "2vvthcGZMzm7eCnywVodU62tSJ56vEud2J78c45VdsuFVv5q4rq75t8xASPjauDyXRj7TwcrbrZLWbsBdvuRZy3K",
  "key9": "5JGucGAYJLQjFkvWMQs4EvqkG8wyPCnQJR12GGFXDf9ZAVSxoLk1zp4kr28hdRMP4s8f54RcTtAM1YiQcVx9tLcE",
  "key10": "3akU2DCQpBsQdmYUP97GXdZXT8fg3QFZGesEYkQ7LbWWzFp8xsNeptWurSRA9ZNgN3xbvC6AWiKKBoNT2yaKJe9K",
  "key11": "2uaMYiRV1Kw4ayqtmnCAJ9ZmaKDDZ5ohspHtt2nR9vEHj2irrEQ31ePshWkk3jApeAJVW3LRf9BJVCiup4n2DZGA",
  "key12": "22wABwx4b2HKgajCA8meVxuoUy3XmCsPVsSPyHGT9prRVMX9H5mgFsh23z12JWjJjMLHtJMY1kZokuSgKijrZeUv",
  "key13": "4oFPFaxnDtWvhc7Us21DMAs18zVhdvLw3w8HMDAFEitDnvdyhVRme6CMtYCGCz4P2kbRtZtj1EXQMaLiyFRSnnb4",
  "key14": "23XbCNBr1k5shj95wUBxKFu2JZdDHDnW5yFhgoAwNMFpZmMisuncSC2gGXcJCGjQAuWhTPsCwwCvNA7jVWgxxBMB",
  "key15": "4o7Ar9wSpso6rpbQf4VwgVhQNidMk6hD7cCcwvykkqo7xjWVswzRDcX2dWAFG5MXqRgSkWAkEw8hSsDKqEtLitGC",
  "key16": "23xoHEF9UQJYcdHaatXbzg63ZhYMCrwpFYHzW6s9qYGborgurPfkr8gRqaJFuWjYqdPBfWVXJ8cjnov56pdvxqio",
  "key17": "4h14Ux1uHnqxHBnsyfhVCvs2KHEgH3bWNXNTz8Qz6JqmL5fdkEvXstMh3QGnmpy16AooPatuMkjNr2WYp98JNnK4",
  "key18": "5zsGpaW5jm9ydRsGkNXpnvMT5q5mhD8G8S4buZBRcG2koV1S5Jez3ekJjEbT7gGBGfroSeotfbFEwFL2Eoh8ZXSt",
  "key19": "3ywXj4LdVJDhSLhNebqnjzC1Ey8kRvaBrHxJ1PfDmjW6k3s3q8bwgobfTLZYUamXsfXTfiQvHvkM2Svztw2K4kka",
  "key20": "3NPFpr3hc3zVNAqBpWxkMgjMKwAMhYG5CT8kLXVX5zfCWREbmozD2urwMYMSe5gbiKPe3B4NfbrqLu7PXg71NJYa",
  "key21": "2AwpmpZJ1rPopzaRXNoFUEXde9CBmy8zzpL2g2sWTrL8vSz25nKMq5C2HPBgwrsyQLjRNjKiFWutn4qPXWsMFBJS",
  "key22": "4AKDj5XD1FHtGegvbLKMm572McTCep239rEvNzuPSgALfrkPtPkULShsp5YqbkVnTeu2DeVPMxzg7R9NCCsYE79",
  "key23": "5f2VbjL1paEhKrqhbmyNNcC6PCAyCLihksavVDtYy69EYpp9raESA8G51FnasbxmdWJWnC1PuCrYaiidFH5QC1SW",
  "key24": "3VnGr7yTvfdFiZvVu3dS9CoVEhF7QUWrsh5MTzZNeYpi8UC5BrzM6Fmc46yk49DYuyTDMKPNkt7rJkyDQzrqWkFQ"
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
