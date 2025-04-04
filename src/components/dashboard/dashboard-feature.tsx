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
    "5kX3C1Kt8egLn91t2dqtXABSWfyGCky3bkp3uoZqvWZ71os8nAGVMowUgxo285D2XiePCh6MsDTKFGkdpLMYKUiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVWjaC2uVm9FbyQBMzvpqDJu2Mpavsku3cnfArLjbR3Hw1hDx7tV2ro73J4qTB9e7RXmcMLW2EKDy6wtPpo6Ff6",
  "key1": "3NjV61DjgqSUMnv8Wpv4ufdeDa1kB9C1o9Br7kVa3qf5CkEqotUCeTcXc4dvF99hawkVAADC1fGrRhT35SBu79de",
  "key2": "4JFqtbhrJ9gQg5TU8ToJjY5aZoZdQdGUDjd7mN2WLxSAJB16SFUy5JVrL2YphdtMkHYzqt3LAAmvonRv54PxeUVz",
  "key3": "dMGtpbNa7bkSZPrtw1iP6WWir5hmJ5JoyMCKFJViKeNjJ3xF2Mn4fghvLqVonr6RkUA88yMUiMd1LkNFMMbaSEt",
  "key4": "5WA2hDxuoeGwbHZrqe4DWNqZ6dN6d1X7V1MEELm3qgxWu93XoE6CBdYFV813vZHTXmkjxC73ud1JCejkQ6aQYBLQ",
  "key5": "59dkHwssFxeLkorvTnMzx3bdFimHgDL6z3iBFuoZdvgcLuJvKECSpYJKXvcXYzTwxHjM3h9ZdTkFpfZ6Nwbgj544",
  "key6": "2K9wuvY6TcNcKNyXfrRH3dscCzaja2LTrWWj7mAzwqke6cUTw2ZKuyAMLgjXoquhEqQqPSWK1QPxt2fHEa4rfowq",
  "key7": "2RiQxTJJ8oMxhbPTp5mikx92StAVYS8yWuXEQAJv21Tam1Nn6jCLYyq3X9ygA8pkYE7WeUqnBALsWfxHdgsLbMey",
  "key8": "d7QzJCQMvF3q1UmubrSpdmu5RT8b5q5SesPGZLbMPNGT916DBcpwZ8xzNuz6C6hqoWPm7m3xtFpTeXatXN68tES",
  "key9": "AdUC3XjttyhznToGq44RqjnHSx9A5TzXRerTNM66Ecv8JJ9Q262XgzYG3AbkZwFCwp93BezAu7Z38jPy21JRE3e",
  "key10": "4NHr4C5DF13tTVgtbCkrTMRCgA3KxgacGNuDVhoVSwGMxdsrLCJh1qswXGPSzm8kPacpdqcegw4Bieh27sDSeeEG",
  "key11": "4ghw9cWS3gomVBSYfBhxNu14rCpToptHzYVxuPyYAmk2BS945byo63xwwqcD1d8fhmkRccxvtuUGrgJkBisphfMo",
  "key12": "5i8F7ATxbkKUx3jHSWwCheyL3peL6JarCh6ryC27ApRJ2xrVH9PHVHXnciqp52sGMxFRU1MTe72sAF11EM5EATBb",
  "key13": "4DT1qcmrtH82hF6XnJ6zF6BPAkPriQZfHL8t2nMdnb7V6cj1e1VguVydyXfpW8rg61SCfktPXCcxGKjh5MD9qVca",
  "key14": "5ZXqvUgLd7JytJSJmqqbpX45K7eX42UuZbkztgVYeuTsoQKEsuc26EfXPu2w67C17cv1QUGrsHDF2ZX5eKukSgxE",
  "key15": "4PHgK4VxJxTjZo23LFrdHsNjDDx23iXaRTem8VL4MaMCNGzYHWasYSecdtKqm41UwosqLBaJmJifNVb9Dua8MJQr",
  "key16": "3sSTA1314SFwjrnq41PeJpJvjt7eRKfSWJUZDfNQZCLVY1crLosnHDMZMqsHUMsKdJ3ehsoE7nefkqt3th3vEpqW",
  "key17": "5GaZ7nHd3Wbg5tpzep65XrbeQWV2DncVuX5A42sY2S8tgCmxhuceyqF6FBS4KWV3aid1QRx1a2KU9GtRnUTBhewg",
  "key18": "3TkuHmGMHdSn8sHeY87crvDzDTCZ5Ky4MPVTotU9MUfwQ2Ys3CYs9kTbd2QbCce2X8btVYpHDQZjdaLT4pGS5HU1",
  "key19": "5kL9en5589aYLrphd2SuxD4F8F8eqVVMYKKWeakw3YTv4fCphDHNHHujuJKafv3aZwZHtuuQTi8qp73Bfs7WvYKi",
  "key20": "25Vjh3aMoGuNTP4osgwvFz7FQfpzisn5pmricjMexWAh8DN8wTid6fjYBjrNk1GFRLGMfnWLRLZekrBZUmSBCkTn",
  "key21": "5b9CDJQf9uEzm8YT7y2v42qwKuvcuvP961SyjfkezuXavigP8iDEZtSWpMvzAi7WNmXGLSLw6mzk7AttA9tQE4ZU",
  "key22": "5tPNuReauuR5ujLivfQYJPnmjtbakJQgofFYdzu2bzo8Fm2qHh4Db9smPLRNi2WQxVtzVxnfyL92WW7nAGiZrjNe",
  "key23": "4CjXiE2XLTweuqZJ6mhfP85yeMfuYZrGQu1Z7kFKebXgoAtJMkM3g1KZrCzciG7LuZDvh5YqECRCANbasZRkFVLS",
  "key24": "2mYmdwKPVDvNhCRzrbF7VhdVr9LUQgwhJYzNLSnr4LViGYSk759NfBoMiqvanujA2XY28jMgkjdX4KXs76asWfpu",
  "key25": "5K2Lw5R2pHEzyybpLzy53y5uqrFGLCeB1oCKXCoyakWbcDARxjuohUBbq3Y16WjrgtmQrf36DcQK67JDL5Bro9Fv",
  "key26": "KfeqoanbsRgAXv91zkESDXSzvSoNgCfRbrRZESr6cm4HJJHgTjt2AvnrasmxwPGFADUFHpzDHVjZiVBKNN5wwHj",
  "key27": "3qrWD8UQwihgYHErHgbwt3jRzfrYSGJN2Rv4RwSJyeWkFXCLNKuBKo5BPv1y1Ae42PWaSJZgArj3e7SWAmsXjZoJ",
  "key28": "4DAx5ATigkGDicypmyW6hejdWW7Fg4PZeFgFJpAJVixrkJSK5AcnzRdWAgnM39TojCfzCjQaWfPveJaiAimQo2yF",
  "key29": "5FkGjAz5ekZaruzt35p6dmTTytqMKwu8aM34qQjoLTXzCxBNvx1wbDoiB1YJGGDBs3euBvU8YD6fT79k1Qjk8nKa",
  "key30": "BXwo1PSKcEVVD9RoRFVi3JmQPXEDGrXZspo8kd8JivQthAA9R3bMCMzZi8tsPcQDP9B19uo817jw8Wvnyz5uLYu",
  "key31": "49mQGLjyYZd8MPXa1ErLMxrqgb4GQjh31pvZ1FhQjQdfZggEmyAuMMcu6cH1Tjr1JTqvsZtqpeWW8dZPvuDtHfWM",
  "key32": "3hibZLEsrETHtbENduXggjFVCvxhVRDe5MoUFcctyYwdeTU4gE4CPNMkXAaHGsGtD9cuiKsRXXhDAF3v5FSfCBKQ"
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
