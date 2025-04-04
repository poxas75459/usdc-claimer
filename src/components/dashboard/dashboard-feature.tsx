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
    "2YjYFKwkDXE3YFTZjM3h4uuLrGwvYkQNbF1Y344T7SKmDnAt7d2fbFGzNuP3DPBruENsmk4o2YBq66KJVv4rut7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8ajxmbwR3dePUiakKNGPwWUuK3k4bTXmRxU2FaJ87QZPVpmkgadboGnV4tgs9UCRQtJZCaqsxdg7oD9HdwAe6e",
  "key1": "4kB8nVKr13c93w1PQ2TQomktEzu3zh8349wNaMbSDZjhEJh5hm5Loek5W2hMwrfm5e74Lk1AG86QSkojuUraVrFd",
  "key2": "36HzHJrkTk2JSoiW8NkUCMi1ZR8kj3smTBdUxM8hbd2rAfRw8Q3RmCkFkpnyF5Lg1rWgbYZbxjXGdc1qmNKdmi7i",
  "key3": "3qBEzJCT2jKsebMWWGqD5J31Et54Y2MvaX3hSL9DW4yX61wdsUHwn4mUk91F8Y9FGQTXUbj7aCe4MBVs7k53xyjw",
  "key4": "5gD3kiXBF3a2j9p1bch78RDTJgg3UvN86YXvxXFcs978PTHTFtuV4dxpg6b3VBCAwXdZdrP9NfgG1d1zBHiAd3fH",
  "key5": "3MzFW2u9v6F6GL8Wu6k4K4asKZqjNKjj92PARGRuSZtZ5aSdsMgqpvESmyzTqjE2cWKE99czH5GLu4XZxWGQMdHm",
  "key6": "4cCs3Rw8hHmriEKGfFCeg4N9LenTQMEMb5eQw6Xqky9s8kYE6DYimgQPL8Qui2yJ8A7YgiT9xGpS7x51TRQpx2UM",
  "key7": "2U9uRBggpBfH1f3QrWXZsCbSsBUeykNEqiBDk4A12qSxkwyBMNDyrB9MeaHdbtTihkVZgHNfKLWx1rXaha5qcWhd",
  "key8": "2Jw8UnzmZyaiEg7PjAnPTcG11AxBPm6rhoerWLjrGHZpHcvHXyeKVWCah6oHwKYa3mzbD6VTNsr6ekLUeRepp4TF",
  "key9": "iu3ZorEfGZv8BrJJJSKmoU1KEtgcQAZq5L9NuoSKmJRKykYVxp5TSXkrtuTfMyg5yubG8faXc7rdAbSM7J5X9PE",
  "key10": "49f8eRBCpu6F3o5PxxJNjJ5fJWkvk8egZjBuVHbb26kzWefDoBo8TTVPY3gNJsorqBdKBw6y3fMxMzs9RQ4fpGse",
  "key11": "2yP2iyK2RHSwCr1QyNz7wv5TE5x8xN8kwuqq83gTddZ4boQHhVoT23NFQSGjitJwmj7FT7CRFWRFdXXKht9ccrJk",
  "key12": "2NkiUxaPp48mbhRN7XXzaDxpKrK3Ag8U6erpbPDTrRHJEi7YNTwAK7p8ey8NUYNws28kuLKtkZUrgwkiVnM7GSab",
  "key13": "48KSvGy9HYYnLqNZpCJxuJzpo7Se8wmSCBma8CxKivhJedP8zsWH5RJGQRfXxdnEgy8Cwo1rAc8HXNDMwPxar7Eb",
  "key14": "3HJKRwF7JgsRPPCshV6Mobdjq8dBJ8b9SejU2H3iJMBFynfPxeBckxLoeWzJBGwwV64nZZGadxsvc1bbJdzeNfGo",
  "key15": "2AK4q47dsXpo84vx2rygkemh992YHyAug53wnRQ59pYEztW8zELgoK5jEc62HZyocbYXXsUkm1NpcjQxC54Dy62r",
  "key16": "2RdKxAZ15LTzkufCpP8eKwVjFXRQ32uABwWNgcFreoFtsurCKL4qwyPxZRbfdVp9oHhe5U3GuQGARfAMAFgRQFW9",
  "key17": "52MWKZXehC3cqScyiDc2XVAiCx6q7FTCwMAs2cDCrpkDnd9RCbBmHpu49TP3yp2cRbYzbR4M7zXqH4emGUrtDEF",
  "key18": "5uPuTV3XQKufmFC6xSbBWjdnrSNzmGDZtDFs95EAduxWE93nsTYymbUMx82HwMBbEKD6PbqejvLvAAMvRU8F5PJw",
  "key19": "3icXFWLsiMPWEdjpsabMxv9TPkT1UyryVJnYQUg9e3qsb327Dehon6ombXMzWdU6PaMKt8h7gVGgJ4DR1XBGuxyk",
  "key20": "4Aan78Rjr7UKLZT7WKf52CCQnNt59VwC36qSjLqJZa8qTJWWP8h7biUvd74Tj3HQnFVSKT61BruSABMmhAEP1ckC",
  "key21": "5g8bEJitdtB8mSi78SzYZcr7wfysNeZvXUGpnGsjiaViXovGXWyfuvsdExTLgQhU2j9EC3QnrDQngrWyh4eDaKJT",
  "key22": "2oSWd32wwpwMQ4dfwsiHZbhNtxvpUFa9dTL9ZzhdnY8ZELQMPe6i4rqQSDv9ZFrmdHoXEPNruQ99teHsmy6N6NCi",
  "key23": "55PXDfoizjbsQVrcLXgrrxALFJQ67UU9mhKKiYuyqMvvfWf9BzZEHkWeX4XGTHGv9so5a31nM5N5RnEVprf4RYbM",
  "key24": "3x5T8VuzJYZaib2WEPU6U4zyurfM6XaDcxf3dcWk9GgQHm6HYJ3dMuq5VDCY7WXxVbA5orCFqhUa33NymDqSzrFc",
  "key25": "3b4dUUiKDnipwruuddQ4NkvX2hNMNLFiZer2Y7K9jcL6PwyEHrhgVNYVNvMaFPRX3R5EHWCJaKxeaKuHhaQWgwcN",
  "key26": "4bU6vHWr6oJc8CDom3JT4ap9mjvDLUEHbvZpG1NQoSbUcUyVfrXuWj3fkBht9utHjfeiLALqaxiTq9qx4ha2rKcE",
  "key27": "2TtFzRAbFN4WP4xvM3qQzsvxypvtbx1sTu7aakh3YnHn4cNqbFDiZderV1iAxSHApS5ETm8EuBtZQYqtraVM1Yfm",
  "key28": "2vy2uUQzU4xgwUfgsEHzQ6qJVVzVz6VHd7RR67zZoiMhNZTmJ4VXgikaqVTT3TKLhA5JxoUXKcs2ZrWsvc5K3gFw",
  "key29": "2hsENxyAQQESX3JrLU3MgESrNxw8CozCUtoXoLwybV1FM4QtpBrS1RE6rSZ8hird2p8mmHFtMUbTHc3QuiXtJRKU",
  "key30": "3TDzNYbKjyrW9dCsWN51vwc1JGkc1dKVAoAPSQkCV966Cp5s2Q11mU5fzkMtsFjZQsvT9Em38Hqvf87kFj11xRJn",
  "key31": "5v4yCnU9UrWKYfdApJTYM1KEcogJdnhB9NBDZMawvqZJDvitHZgW6dawTefLzifgCRYSbh9amTWkACZtEFWxCjkf",
  "key32": "4KgUobs57Lcdjj9ZoKzMuCyi1ATrH6qFVCMJbw5sWDFhiBwJatzhXJbp8Pa3YRPTRioSZBSp6xNaRXAJ2czZf7Q8",
  "key33": "2cK1g3gBrR7LFgG5Lhiq72SnDoyeLLswCnrUz93MBToqcDB7upRg2CxLBCpGodBq1roVmeYuh4jamhaqnkjfo4yQ",
  "key34": "2gkV3K8UtvsqKs3p6jTAWeFW4BmwPjyQQ9XvDYjJGnCujnTgiUpr7E96DT2ShWoN73cY9aVyR4CXwvvNLn7B1XQQ",
  "key35": "5UkW2xKKjtCrspyKf3Qj2wRvXsxuHZowhsevNvp1oWNxNpsRX9a17VtSNMSCaTsDS3LRhHsX1EgVmm9vcwMpmCML",
  "key36": "43su7LgqJCpvVGLEvj1Eo2QNrKt82G5f7p8e155nMGjXXWPuT25VvxtAQC4nHBit6sWAT6cPtDmzHAjKAJd6byAt",
  "key37": "5ZrBdar2LiBdLkEh3XZN4YMGmKLDiQzcjDxEzUWhpHwdRTSV2VFAjB5eiuA6JvfDeZ8tv8u1W3kKP9CfeGZZNpCm",
  "key38": "5hczDKmf4dN4n5xQGweVxDvfg58bG5AsQPaSrnHuCE5GqGS1vVXrxiKQqnewNhb8TswjTfPNrZCt2tEGkXiiuFwi",
  "key39": "5hUhC1VTYU6qeHPKBn3eM6AHKcvRQTV8RAWR7GSjWfxynX8F3GvyfjLNU8YKux1ZMm85UMH5yroMQ4akw2EgBbwM",
  "key40": "2H92bPj7vaPijZ5pXGjGHUb6ANkZkE6GzSrHqbiVPPBrDydBcH3bCbYZgmsWBBzuDf3NVFVBgjMrVVf5Qbo5GyaT",
  "key41": "FMjnXSNyasHPbumKCRgtBwDv9s17McS1ro84oNvhWW2s6i9XRMGQo9vCesXhaNRJeXCtRKHHKhi4KvnmBqbvJry",
  "key42": "4ye4kAxrVj63cMnqbwZLzUzQRFauM51Aw2wmb3uh95Y9YnM1pxv4YEmSUsDo6CZvq7Uj1oohYXN6yooTsJqeBeCq",
  "key43": "3JM6pwXS6H7uwudPRWKVLcSxcDzXq7zfjGdi6XZ7Jwipm3225rDwbBNjs2FhMum1fX7wG7p6xBwDsJkv9yuefAXC",
  "key44": "4XcbDMFz9vpHqkyj6BcTKhM5V1GJmuY7i9LbuQrzxEhHRA37dgnEaeW7dT5uhNPyucym3Ei3iwHiKxCUUxKh14Ft"
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
