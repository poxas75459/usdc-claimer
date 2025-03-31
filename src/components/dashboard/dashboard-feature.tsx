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
    "xPEf4Xeoj2ayrqYn5j2NN58VgtPE5mXBQjqQZXNwvNv8NPV46WQuDwBtsGhuGNtDjBunb5MFdip4q7aG4Bty8Yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DHDYQErWdeYRvcDSqbVkVRw3Tu2bx65VEYdTvM6KessgzmuLZAsAz2rT2cZA5ByexsBrPybThqPvTmrhRza3aR8",
  "key1": "3WL6evMpta765e2MPz7s1odxkMyK83Vw6cKk8ujnQPFMWkUuav7KofDMH3xexwVhXv9rjhhmBjLWRZkovmXTwxSC",
  "key2": "4Yi8vVNDxU9jUg1vzFdFmgve8PVh2J6cG4EcALL6vGLyavymZkxfphYE2qo6yUcbBiZJ1GBFS7zAUm3UuNNEdDFX",
  "key3": "4LyNnVMKsDv1Difor7iXRiBqjf3gnvW3X2bAFpV6Y2i72qrr6jtU8wDi7otiVHuPtm9ifvrfn4cNmZVS8NWFidi6",
  "key4": "o9PuBnh76F8mnkMv3VCrUBYS19jo1d1ayyRtr9fScmatH38cczdCdqcJtQ6JPGXgL7TL1KQoLTFk7VLSZoBe2K4",
  "key5": "2WrG5WSPaBwnqsKoTuFK1qrYaXai9gbCCrKxyQxYohjN2VyBCRbcp9gYEcaKBzh3yGY8Z76Pfy4Jwy4JQc82Jow3",
  "key6": "4kyC6TTZBTQEcefqgNoYBMmMycaSdt5TKh2ZoS7NhtVwAiKaBQ7BDhjv7ZTyD1zQctL1WY4cKc1RYTZxYaVDiJsz",
  "key7": "3ioME8M3Qi85AWRZKuddayruMNtjJLCCwjr59CUfeHD5GvCngBFaXEapCz57s5ZuDW3A2b2yHpM5QTzYcsJCKScz",
  "key8": "CNxZa68LsqbBNBHaE483ejwe21JQKLTGmWpKuYRN8K69d6GdZN6R87ABcZS3iQyLB5AezeQiNLSx4kFzU9JaZBZ",
  "key9": "EMvDdSgHef6t1v7UvM8WZ7VMhw1BTgwYEjzaaKWdAqzNPgiFBTMf4AdMEb6dBR5Hrt3516a91sSQ7bb8miLvsPp",
  "key10": "4Brh6MXwcX74KKyuTJHoA24KdN5JmAUwUiwuLSMVbLucgnhfUdzj37nvqEGYp4nBChkHLacBZZYBMLfhARDrDyVR",
  "key11": "2ZDr82CtmtDTqz8Ma6GJnZEHKB7zVBGE7jKoGSBM4yQYMAQiUsBU4dQVQ8roRd89Mm5wQXBHXpVbGX2fha3iR1wY",
  "key12": "2gs4uFjSBGgccFG7qFcS8QbopvGn5Zcse8dxqz2wx9E7CCBsNNF3Fw6WtvcN3hKvfZn3TgSRxd5pUU1TEvU2UMqc",
  "key13": "32SB5YBSKoS3KJc3pFqr3393uQNragZP4ehV72iqyFNgQ58Lr2T1fKu8VYosNJWxN9ERJae4shcWV62cFyaL8Gic",
  "key14": "4dB9usnCDFyNsasFRxuivwN3hXzDFcZaS6PALmpweSEQm7dcwx7LEDTcwh9uuMENCUzUXtYTzZS7FLo7dgS6sXaf",
  "key15": "3QuPeDyZEMnG8DiMxosfFGqKVF2QEaBCWT3nWe5Rd77g1M8Vd8jiQxRxBHyA2cXPkxTAWNNVXDf9uRPgKj6N7cmX",
  "key16": "6nfWt98TE6mxBpQxvnMHE54J4KipxbMRZjmcHK8spnPT9RMYEqfA9uQhdGzBKapdjino2bivHVTwgs5GJJi3DJC",
  "key17": "2eZ2uGr8LJjjNvJzmqGa8NDoQet6EnnAocURTkWmt6SfFLbTSR5o3qwvutUaQeqmsKMWow1V8FaEvDWfnDWZ2cw6",
  "key18": "dkZ183rmfKfc6Arr8CXSHchGJKUTzAY6Gc1eS1Un23NSnz6sPH1WnG8yP4R9JPqGtrij3PsFqyvhJAXpWkYRqRe",
  "key19": "eFV14ykwB4t9A4UurJnU1wKFp1ZWhR2nkJcRiAprcqiJpnxK4StJYqDbfAEdxWGdeJmMN68m6E1eF6Li8DNmeqK",
  "key20": "4yjyQhNBBJe1sSptjCuLWvTyKaxkVhvfV1XBiTrFZA1YwUCnV7U9zuGAaPURay4uVFCXfrsMtivqH3dtyLuWwQJq",
  "key21": "3nqEdU4Fxe37HQj2W3ztpLomFLUgmEgdSVr3ALf1A9JnHLXjvfQK7wQ792RaM46AGzfMZrEsaz5JLbssVVAL1ycZ",
  "key22": "37DxZEY6pabTFStXpqZopNYqoSynuQiFeFEVfE85RrsfAtSNtAL3c6PVXysTtn2gt5NceqYz1FBmuF9gmBgFWjUv",
  "key23": "5hEZDYgG2XRzwaTpDTiEaywAYnoLA34GXeSvAvoD615N52FoTJLq3LxgnrLj8PAJ8KCGcDWPkgYuvWp89t2AGtq9",
  "key24": "3h9ptgDG33E4nJecZeKZxTfSVZ1DXqe9Dwxqw3RBThnr7JrUxxioB6ZGwPFt6dcAvdLiUhEgv8tfXPbkVJc7nbrG",
  "key25": "2Cjy6cobsyksJtmHBijtDNxNnpYRyP99wwH37e7Y7NwuAhop8GWhPtWpTRpsiP7NFdhkZcmYLVKqJJjfy52y9zYA",
  "key26": "M7TB3vQYGbELk7pdU4GMmwd44FrhrAyuNBpnTs8QowJhTmYmZMAkzpYLaL4RghSytG64MW9W4wNzXwdn3VCrtdL",
  "key27": "5A4PLfHgKZuUPwmZaRFzpcyDZJUmv2MSHYvD4SJeK4MMwsJAxcU2AZ6Rqkxwwj6TDBHmudJgYNZYPuNB5aS6jyPF",
  "key28": "2G9FKgNPTcqjd29sdzvEQ3USHxfL8SSGTmreLMS7ZMqpXAjEZB18eULtDkWK9P93P93pnTJGkrcfjKEu8pdE22Yj",
  "key29": "3M9bqJjdRF32pmjAghKjW6Ja9eMCKLxij16rgYwsDz5c8itZcPbJnzL7sDc76Exf976Gx3AyjVwfKheh3j6amuX7",
  "key30": "3rgoG5MQSceFCDm8eNxZ7jJRYWmRemvhDXqka1YifisULC2hW1VdrF1o8VthF4HPmqD6pJEz8sXohbWDCWoSsuiy",
  "key31": "23biDVtZZzLnm9yX4X5RdtK9gjLAP85tyTZFJjAhJvWb39KwFqeBYnKjzkSiDiKE9FLdkfTEFHLqYUNFhHtAZuwt"
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
