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
    "65UUuKmStkXmfpE7j1c4akrnG39sd6qesbDwKWc2qbbY41cfxJNE1BA1ksNB391BzUgRBpf19rehV4nGyB7PguJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327c91bwnCB1E2pm4o2a2DjFhHn8L9iF69rRLMWyNMNqkjz228JUcmgzb38Db4UbbKavwc2aqdX4Zfw2UpAoNaFq",
  "key1": "5WohmNJ21xJa7XGLpcAxAaXLhyugop4pTCBuKpfEDk64keVkGAU3hQwvZwPZw1MJtbGPgEtJUNRQhBAW3u99hgC9",
  "key2": "4ssbTrD5s2Fzt7UbGA6b3RzwwseXoG4BjjPLKdhE9fp7Wkk26jtXAnWzLLn8BBs81gFEpoEPbnQmP7UFtKJPLeTm",
  "key3": "5wzaF3eJyX7JueU3mP9D52SJnRPFUKABDZ8xQjYnoDkR9eoEW7EQsW5AmqRNmTnxsvx47CjLhKLY9oxnMz8jYjWU",
  "key4": "3F6JD44FuWe59hSFZbq4xEbw53cxecHTVcUe3MBVtcfjmev5D87iu3cP4MC3vwZUdNKpNcCvePSxeChGH7qRa9qu",
  "key5": "2mTZ2fYt9xiyznECzPMo8EPVjG8gV7F4zwrccomGziquhj5JX1FzCuSDf9Zf8eLxBkDdYd8vvR7gqcftyzvxUfpQ",
  "key6": "2KYpGN2mxeWYJLGg8xygcyahikMMQJTQP3WESbjffnnGzcEehcN69z4KwkaEz4uogdd5G64TJKUCaTarHi35K4FR",
  "key7": "48uTWHKNax1GgkmvT58htv4b2S1ksJBn7AHuHzJc3k311Nm8NUMrBVyHNViPdhv4BYSxVLM6s1bvdZGqfWhw4Dn6",
  "key8": "jftwQHp39nxa7tjjouLJS4zhJ3n8wVvbCxHXQXtcaep3Wg2FjuFc1rdN5B64mMgMFbSWTRHyo65mZxrfsa2cvz9",
  "key9": "318gUUihfESXTQtfdRvgUU2QkkSJJ6e3mv7hAkukk5xHKeSK1LgCHFNZJ6UwX7is5awTVWCfB44XPBDMFsTVy5VM",
  "key10": "bhJ2nwJt3FsJDkVz14rPi15y8UrqE6gMnD4wSzZjWc5v1iuuaq17ZWkZvNJMS4T9Mm9PXt1cTQ6QdSZFq3My3UB",
  "key11": "3VE2uQq161CLrpTnP8AHSWyxuqvxnnnB7sEmrB2R1LMCLC17rWBuBs7ELukKiKzi7yR93VHk7YhzVoDijhVurGuZ",
  "key12": "3npA4pmWHhnYXG2ZHAAWmjCJ53ZDfu3z9ufCWKJdDES2ztguGiVbMvJG9kP1e4cRxSRhZBk9aHnpX6xmBjrYshcn",
  "key13": "r2yRiEBBXRVo7rgUyWZiCX1T9wtvJ88uEm861aD2y5F29PFVGHPGro9vPs4ShM6pgWti35RW4CJWLWs5Tn9ov8Z",
  "key14": "2Pwswe1bjLtAdyYmG7UNhHRxmcBfN6ye1MuqKkfY7N8takr9ZUm3pSEpVR7gRMYRnHikWXQueQ4YrmAmx7K8F1sw",
  "key15": "yDuKXgBJvbSxnRC1xyVfLxHEb5GRZRB8Qa8nTKmvRUFj1h1gxnuPfaTE7d1VdESRSgmpoJdary4fvBZz6TzhUBm",
  "key16": "2CqfPKJxrfKKq1W1LrxViLnjEVooepzi3k451czLTnmsbkDDaxa31LxuMFCEbxGF1HSCBhTp5dCqD2tJcao8NFR4",
  "key17": "5trwu7brqjNV7p4UYSnfoyuaS3xtmCT4gtQ5PNwkg7pDRPnbZqt2FPHxXhMGP1JkkzMKE9SqnXejnhtZBaB5ezUe",
  "key18": "N3YGkzR7vzDj4WKnS63EoMg8Av7wr3xtk3p3Knn82dtoVSshimYkzexnd5iUqeMB9imvdfvMLTrCEovSenV93Bb",
  "key19": "szz2ihg4HZd5spSXwZ3hDmmGfarzSFFiFuAAQhgke6oesix2kR6tUzeBkjccSwQzoKu1XRCzEn9hMBFGGX164eb",
  "key20": "3DyAZBSwiSqA75RiuY2zyjqmsQvL3dm8FrqyKdYTDW7Qb9CxNDLMM6F9jkTc7rdgKoP14E747ntzV9qHVtzPNKuN",
  "key21": "2XiTU4Lg71SqkK7C568ARVXChGN2tybkNG9oXC1YjZvcuWePRYYcFQtPeR3XCX7GWJQkyJNYHMvV9JwVSt6nubjS",
  "key22": "2SoZzBJu12sy6dPAmHHeU1Jf5U5KpdHDBiXzuUGBXx8hsYR8Qf8WEsTFDkucPLMm2X5wFJGJexsDvsdDLJuB1RF8",
  "key23": "4B6bzS1CvAPX5m8GfL2ub5M3TGyNEkPQBifg5DwEHAqNjLJWYJjzDqYn9orw2Yh2QjL9QeHV3ordfJuF3A6KmByW",
  "key24": "3TZ6vM7rScVdPUQiYRp8RNXKGBKiYaoe13EjahurMyc5j1uK8wozUtEVZcn7oH5SVhdTwzx3uyLvaCScxnxEPtry",
  "key25": "4sc3aYJAPcH8yoadtUpvTzQeH1DmrPHVdXBBvux1J5oKbYULWgjS8uoM7sd67JkCj7jJ1Y6cLqjdErPJpfvy7qtQ",
  "key26": "bLqR9c8xLnoqg6JdpumcA8cpaT4ZoQzg5W2JSzhkkyW9kKB67RUuNuHkdVSpngLN22c4RzKFXqwMb7ySrBfRceo",
  "key27": "5JnzfHNCpgJwma3Ym4xsETyTqwzvxSJGp2yU9abiKfcLCHucY2DFPoduqe8QBqaRhyZgLfJYXkM5p8BW8kcUvMUw",
  "key28": "5bBnFuVAUtj3UkEbLQHta4GMNAw28QeMU6G56zTcmj7CLmcJiGBDG5HK6RAhCq2SNppApGrKFfaJuGiBpsKudBrf",
  "key29": "2mQ334keErF3HZZ1i94ZUC24WVPtKSdACmTKrpvYSPrhLUwMJKDc5s37JBBQtXrZpyxQwsfk2n71XDGY6kQtXYSz",
  "key30": "8V8VzhwA2F54LiKij5BvatKT2cLD2Y2k8bys19b7LNKWJ2jpwcDKEJ1VsBkejawVjkkU8L41Gdxm1EfapD8mNhu",
  "key31": "2UuZ9VpLDauMv2SAy3QLbzTtrdSZhYNjT7BLm252okMWbWXNTpUFT58JJR4DCyRzJSqMeinZLsFpNMxVVm7oGGUh"
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
