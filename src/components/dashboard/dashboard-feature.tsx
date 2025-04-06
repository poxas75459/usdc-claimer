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
    "3jExevtw2bbww6ySeHdgPNTHAWj6TS9Hu329CduSzdfhoGh79m9j8CCYSqcmJpTjyj6AKVzeK2oeXDDAxzUASSAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJ7rphsUHGPxa98dZqHQJJURqN3xqiAKYdxX4emFm8XtRb2x59GMrRmbYLu7t6J7QTZX5e2Db8wZLgSnEiG8Zoq",
  "key1": "SfQ8zMTEGcrND778zNzU3twejAJFHEAixpjjkgPtzeiW3qX9YuaLqTQytUPnUWkDzCo2WSNG57npWoqNFEWJDWx",
  "key2": "56vvGBMvrxABsWFDFEF8EZrpzAUsxEXNVTupyEvLP5osBrVzoSdKfLKU7fJLop5zKAcomctAL7YYCJHJ8ZXUriHJ",
  "key3": "3E9k8eTSzN14p3usfkufhEczKaPK3kXiNVz48qdcyxmoGRxDP3GdVbdFX2qYjtzgpz7MB7MGLGAAH5wMecKu2n8r",
  "key4": "5gCy91b8Ako3BWVcVWMf8Zai4jNp9XA8v1LHEX9ZG4u3oAhFBABwQvoZKzz2UkEgJZut65FZP4bt15W6RhLGNgK5",
  "key5": "5qrRh6QwzYfnALueC653C1ziG7eaqohu12xBSHqQgdnJG8w1VLbheLYc9Kj6fXe87jGW2jb8P9EG7YtTX2WnPvbr",
  "key6": "3TAzwPgB9BGZVKkkzQJGSjsNqPRcNRtQ5psJgxCvvYDTVTKfU93YBTLFB98SKp7gqdJgbi72tubLY8zeN7d4MzCX",
  "key7": "31fhLf2weaoAVJ6KY9urKZ8AknUT17Jz8XpqZeWFQig2urBHv2t23fAh86o9RqJZgZshWFmfGogUGdSBCNmzsett",
  "key8": "3MJuUaEUdShhF3EoWw9fG45WKP9gb5yHr8yss2oMu8tu8gvMDe4yC6vNPztswVVRQHbHF53RDP39RuAySSR5X5dH",
  "key9": "36LAh2RVH7kzVvJtcJCgtSWLXcyDDkNaVGyh7ZNV8gvFCKdvfug4F1TkdC96rGGnmm42bnbrnFrBJFFvgBiK5ZuP",
  "key10": "5p57DgrbD3NvYZdBRyTCWViihF1cbVkhG9KEMbwxWBRj5GNxEB7VX8yauogNKCoU8YNxaV2KKvDZyuH8XVjnYAjQ",
  "key11": "4fkaSowU6g7g37RXngd88b1AvtcmNtJxwsxKvZm1NaXuPtgQJqRXou1gSrmjhah8UgVQasS9JDwSm7jKs5zHJr4m",
  "key12": "3z9rXXsEuNbsSTPwLD5EHPaw1uBr4fnoGz5nWBHdMWEkGov9WHtJqCyhNRvvdCYzWdYdE5L55pv42a8TYZZqiAja",
  "key13": "3hTFvooNWygnEfJN6EwZ6cGKkhezBkHuy7aLidvjsAwqUuVJ2MHDXGMCdCwKfTNG1M12NYa9VuNUBRLHfQHzoBkb",
  "key14": "3T4vQmohwhab9bguGWy97aG2k3UbhQRq7hPNRBkGsQviQ6Dagn5Nvrgyqg4VRWHbKDGdZacDwH1MY66iF6Dtoc4H",
  "key15": "Y9QZRFooYZEFxJPPPH7vgxGmXa4Luq4Bv9n1TkD45X7GFVK53jRUBWYT94eUpHZzQhWe2gTnjRoQxkPuyUi26Es",
  "key16": "59T4piCQSXrFHUF9WJ2GyaaMDWFdBLxaiYRzKeHzSEi964NXxuFBxd8aV6E77JgiRoHRLfwqCQ1EtVT9q42bio6d",
  "key17": "3xRgZaxgfPHWVEqZF5uxB7GVnNqXcsiNweVxgJUsZe3FCmX8NTwsZAMq6EsfPvfqxEc6uqFBNEbLpEU63HuyJxiX",
  "key18": "4LeEVDvq2zn73ULEEAE4NmbX8a2sHZFTrMAYuq9Nv3vtv2LaDFxCi1xzBx4tszBVtpQ6HGsDivW9ix6urVuECVrS",
  "key19": "3775KYNiu1uC54zFAt7rp88KySD8hkrTn2vCYtRHs8Jio4MCEN2GsQ5HmVkPChN29Gm88yybFt9r4ZLXKRngU2FF",
  "key20": "2py49btwJSRuERWFa7XikNcjNAvxesRMZtFmB3omg77KoqPBcTs8NsXW9hUrf2dGNVddTV7KGWSHdafPzFUSvuks",
  "key21": "5QTSXspV2kLEbogSwLrRu1LPWFD5uFSkPYSp4m6fpUjXYEQhuww3iFw6sLfEKyYQnZAmxxaeYKLbGRBXP5ivjcbL",
  "key22": "5tHzTGLUrVbvbT5xsvAYPj5zGnoYreDMpPxu9RqmjWwatQ4iJCsh7n1Nx1M5aW8NnJyMZQfnJphV3r1aEAp5RcXr",
  "key23": "4DuN9mtrp5uXhP6nb9Sx5yLNiWELRvsxwiQPGny9Qypp4dwLMAea7CDrrAWQaUeSeE7MJphaqwawfseCsvSbCgJy",
  "key24": "2whmGrJziQZESK5TdrbkdiY4ziEK6GDA4EWVDgzVu5jzktkPHh4hov9HzJnboRhR6viU4Bop1DQXFJUggoszVR1K",
  "key25": "2TxKimJZVfPyYeihZK9HRH2kC1ye3gL2uebwQbkDzeez2JokjnoeDKsjBDPzEUEeFRemDgaGyvH9AVQY1imwiHYi",
  "key26": "3boPigcpkNtme78PVE6a9e5noPdkuSbMJ7MijfCMw79uGr2WW5nQok5UgrxPhqAkKtTnAP1SGc14QCQ2QSpGN3So",
  "key27": "eiaMCbop779EMnJsuZPABt1tHp288i2KYfpS4AFEBf3UCGLCJavxzHh3so57ucHA7vyZrK2j14tDP9fCVTfmx73",
  "key28": "3Uk8pPehvNECRfHisWqtEwz2jEXLDZeQnjRSzu6KHj6h24i3tpvxSUV9typHqXP2FjhVNmyY6CingLPutc9A2hFV",
  "key29": "2TneNDAT48yUh6mw9bxXfT3iCskj2naMKLQAzmZaEZMdLTZgWmoDEBcC9HLvQ1hggTRCLnnMNNHWvygYvpvEXzF1",
  "key30": "ubbnR2RQoGSYhQsryGQHaix73uegcTkT4bmF9Dzy2uipZ9boNMdbhwSidvSXLeH5XTZ5qyoMqrtqvuswXb9QJjM",
  "key31": "62FKNtMXJL8qw162wq6Bt3DGfWfuVMk7jkGbWkSsAvMJL21vN8Ff2XbThcn16q7WkwLFKHbSYTmmT5Q8TNo243nP",
  "key32": "23SGc5pkbsiXDQUXqJEwwn38dPuB2SMswtjqnfdHcZQ9tdoS61Eq6DDBB3Hj4zZvKW8ciyu3QanpMQZX2tVvdSFK",
  "key33": "3c22r7T5NwybmyKbTeG4BECMKsijTjmtmaRYicLHFNdQmN152ygNQ5KUV76c5kG9gD5N1MHbhtNY87HmKr9gfW6a",
  "key34": "5GA6UxF9kxZQs4aB9wNuKipxCUzUqqEcVLewLGqbX1qUetnLsPhpPxTUL5ehRZNp3HQqs3tvQPij1Sx338WvCtrL",
  "key35": "5xEr43FPNunv19jThqUrXr46X1Ce7GpPaGQvaEaW5Crtckum1hWgFiLtPJ3GDnMR3AaNaHKQ1QDF2HsgdbwpPNdf",
  "key36": "4stsKHLmokiBWYky9MS9nsRpqhBwWqtdNn2UaMttAegA2CXtyMTpeo8hrYHyG1oF9MM3EBew35GMczT4MWiT6bVQ",
  "key37": "4zr9GpYGkQjQpzGWyN3721cw5P8z6oSToZFdraAGyEJJsuG9RVTcPMYhRvnwSGcGUJ6SuUBSWPBCJqoCXknvF5wq",
  "key38": "5KD9FWgZpNnCw5amVXujMWj7rKgFRWqogUq37gsEGFMnSPtb8sf3B2RQ2TeUp4GrSHkL7oediKvxpMQLYyJGhu1n",
  "key39": "5uLgzcE4zNhoj7T93YcZhiebyzsrNai5xmp9jy15ViRaNEo5BVB2vaTTwSXtXPmNCXHPjesfqNh3fmWwcJF4vzX9",
  "key40": "2kCTYbTG17su2nWtFaPVQELeUA6ECWdDGUvWx5U8JPiNKzE48Q9cQD8kuryZpJyFzdW35gkUKUhwPVp5RJq68MjQ",
  "key41": "5TccTP2vCEPsty4nscsLwrkqZYb8iBhVHvgGyaNsDB69aMgsJLjKQQ3kexnZM9oqESu4WxUnieSNCh4SXqfxZPcu",
  "key42": "26KKTKpJb6HMzHzVYta8iMp1bTcEEgba6w3K8JGQcexHdXzkqtzXGtbNVi3nZ6jNJVwRa35pWPJ2ZBwAaMvQgNhH"
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
