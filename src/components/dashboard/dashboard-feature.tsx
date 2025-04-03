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
    "5pToos7zsadAqA7WN3KKaB1CAscZbYqeozZt1vxoMD1dNJd2diQgNYFicRS6EXyYg5ds83ebCGPYeUDXhYm2Vxtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G5c63adNznGGtK5xGgnyBVU6dpSEvsKGA1TBavKtbccRr2GZfiiMgKyqYRc36hCpPitkWPVkejoQaY7SmXB9HEW",
  "key1": "kjR3AWArQsQp3X4L2FiSL1dJEkkRG9b9NjeGfeEU84MPb3Cczk7jbmKoX7L5QFWPbuQeL26QRLZadiDfxioW8ge",
  "key2": "4NzcYE2dgf6SbEVuzvnEVaykHYK51NcPLksDUJNtJ7EZJQyPxELSmD2dg4Vrmne9ov72LXL84QpPykRUE1gbA3vD",
  "key3": "4hjWCRaR6ULn9UeqJqs2HG3cBSmPEwgDNVWEQEZ1ZekCgLqALD2zYDYSKiZQpnyePAVRoiU6khbQDg3nCCv6iK6S",
  "key4": "VeKUXBydHvM8ohVHWyVZKMkiBa7YyXxZFXVpL8V7HsSVwwJVSs9DXEmMjjkwcZCh3DL1SVz456xfNJWQ4Bgdpb8",
  "key5": "ud7Z4cJ2DP56A3FLsxuX6aQzdipNZ33gJLEmfhkj3c5SWSkZQffFfggDmcerqUc4GrTkw53p6seL9sU22iZYwcF",
  "key6": "5twkvEt7C2gYyGGZ4WqCRyGPccvgcTpdsEmjzJbu5GUSUceM5Eup5LjZcYyJX9kbzkmaMxf1bTBAdFDMiECTfPms",
  "key7": "2xZyTsq2mM51yX73nMYGfJjmp1jCrLJpim3sjXDrktYbhuPtRwWVJvxypwScYdeZpX1RN91VzfD578HSBq38zaU6",
  "key8": "14f3q8tQ9khTcXGMHvei8Hjdk48S6FzKH9HwtQgMumbuZijh87AP5xWzW5U6TUrja1pmdLyTv3QqvEznYyAeZy9",
  "key9": "2YNhuvT2UHHQFVsh8pyW1z9RBGEezYmkMa5LJKiHDodcnFgz9TKNu96rjGqwYoehVdeNMafq4uvSwHzkpbLdE7GM",
  "key10": "6pfBxsuAJpSYwV91wSUK1FmQEC3LsdHDskyxwQGomeL4SF39mavNVnBhu3jZfyG3CSCB23PoE36ksoGv1ADmXdN",
  "key11": "3YGDGoTm8M4qsTMPL3ubZFtGMuJVAw8vt6gfmTY61jKjnQPGWG9R6ZCetknDkScc2BqX1BMraFubGHQutybmX64Z",
  "key12": "3iNRRtjTt3avQTovVmrU9qWnaDEqhiusZRX9hQkKrprrasXvRtF1PBau6V4MzN83MLyMwu8qWSCoXXLxe299XqQF",
  "key13": "rmFhBkeNcWGMBMqrbRiNXNhQMdg4hF6nxEuR3fzCR6CRX55praSXVDQVdHaRzaoj7mVhsEJmdGznvz6RC8XUGJ9",
  "key14": "qroQLvtDwiTpGcoWtUoRpkk6fJkroBSmLnQPZfppBxpcXy5cYQb1yjVRuAum1iVJ6xxT3Ctk5Xr3zstPmi5LZ3m",
  "key15": "5UAq5Xb3R2P34ZX5C5NfrGbjbhL5oCkWNcAmZkFErT4cxyBBLAVkDH6H5RvZj4BSutrT38xPjMyxJvhfkiPDsq9J",
  "key16": "2CiPAAaQnJr6X69xkHbUHUe5rYQ6P6jiXF5g5PZzwP5mJo1oKUUxC95Yf3rB589LM8XTp75LWnttniAYo3zuEsyT",
  "key17": "4GYjnASr4sxKvDXCUCLGCNyY8zkSGyYbQVJC6dXk8oKMwb41PLHqxCp9URFw2AAmU4QEs8h734ucp1ZCiHh6bD2w",
  "key18": "xv9f9KhDDjMQzT1i2Pt8ikoWaa7yMGDL9V1r9VLcYYuwFKxQABN4G79oEr3RoYGtSd2uNnAXvJbT67xvUHxZiXB",
  "key19": "7REhaBjAurbWeN6Vn54nrsF8vz8jep9kDR4PDaUWwKQYtpnP4jNdi3PV73HY7eUbVqbKig8pdjKHhQ1kLVQ3Ck5",
  "key20": "4e5TApne8u5adHMYvCA7Uje7ND5eXE6Ft1RnL9WodxZVxTbRAfmV81dSUEkXJxT5yNYfFbvJpihuG2AnWCLYvBhw",
  "key21": "38FMukst1oqg4CS6vsbJoENan9HhaxuA7iKsh68vn64uqqtG3eed8wkUQSUzkdEPSEABVTLXtZZh32G2aZdS6Bfw",
  "key22": "GzJqsNtd9v9MVGBiHtzPppgL82FzJic3iJ9Vpwqx5m8AmJ7PYfphJqMHRk9MLorUSBVx2zDXkU45wCfGhK85fAo",
  "key23": "4gbps5BQ3VeMv5h765bRFTg1THgf2aRR3ZFxzQWfvDoxKXuPMbwU8Cvbaxkseb8KqSqs4ZqAZ8PTorXgXcTv2SAb",
  "key24": "2Np3HcABSxyXcLpSJKzrhWkFRJDeb3aX5MEgqEQbfk49HyjJt1sGhKTFYUS8YiMmHNBhTWE1yPkZpDhDLn7rEvT9",
  "key25": "4WSbKRrXcxppnD9GbKvGPVaPucrfPrwQhHxHiprcrHjWMs9dcwdxX1cZRZdaiQ9iBnKji26JZp2CDrDNE7VBMjnG",
  "key26": "B71UayVNVq1rSQ5NaWnFhiRP9b8TENqCGrfhECxMj9LYA7TzZYwZJ8i1yDCgose5DLzBEs1fwFyzqzvjVG9Db32",
  "key27": "3SC6vC3CWM9fx22jZHkbrSpFh9A3Y6hfbAEonx5dfbicSfK3iBTXcuWDUVK3V1TEZMKsUPU5yH9aDm53EPN7iSVY"
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
