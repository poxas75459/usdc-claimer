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
    "7zAGGKN8n7Z2gnNLPRYwigoJWNE2KCruGGuwveEopZ3WtrwoYo2moyaVrLjEkf3hW8JdAKsgdvNTuxQBCLJEQgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DLwgTBcZeCdeViS5Mq3MEmXJNzax6981kxaYc4YkowRXiUdxoZtyEucRgNvuQSmtg2SwyK7Md1LZRTBt4TXucAT",
  "key1": "49PmiuZH6GiiRa1C1cfqiNBtCFHTLVAnhnBWoekvYphxC4dJE85agCbJERmFuMSQD43dyHzBEi6YvsVt1nEG2xQa",
  "key2": "5aMFjsQfRJyJA11UAgtD34RBbjQLz5Z8avBPfn5XjptmoeRuqL7RtVyp6b9QEdVZcFGYT7Dk7wTqYjGSDJ6KJP93",
  "key3": "2Jepfc8vXCXCNVi7D2HDjbYPbCGZGi9hKdtZtoXYBWeueVTrsDJu6mAgKpWmn9sLHqRmgYvEtojbarsynjRHf2Gu",
  "key4": "fvWUXBYBteQwKUV2Lx85hRPEpsgwrS5K9bjjwz64aFoXWNh22aJNzrzoxBgr4oJr2ehXoqgpQfYjzeaNo3ppEKD",
  "key5": "4M8uwsSimTDC7K7QpQgKHxLxa848gk5bkd2dFEFD9DNLpUc5VrL1MZ1mF9VnbAj4Poew2mUWhzbMj1EnbYYgrXzU",
  "key6": "3gjxwe516CjSFjy7baL2hsES6p13G9Pdsx38U47p55u58rbYowVjyXGBcSVJffU9PJaHkjUkGZ8eNFhaVecwEoFj",
  "key7": "3r99Ag1ZvnwLBuES85ij6QuB6NAvWwAJcD1DtDpEmW9uJbuqoroP5kQ5dKNornWPzkk8FFyHBsemD2eKCYtMgeC8",
  "key8": "4prFgwRhSKiRe7AqfnCPCUrZUDXk9zx3uVkni4jUFgcmepwdWN8B8pHT3yDrm6Q7NuwvvRZ2qWBNCEZoTyhGHxX9",
  "key9": "3qVLuHLhgdkcW5BFajhxAvjgJZm4UiFCbzdtRdNH1ooTY73XRs6eermdwjwABdWodGUPat3W8eyBwFeRyY7qNW2Q",
  "key10": "2crhQYxCFVq5BaTHLucc2HDR79HASWAT6RLLKw5snEB5xPMkg1pJdnk97tChDbhepcKXRkuoszsvXayhdkqGY4HM",
  "key11": "5LRAN4ThsqGczqw6o8CSQ5dwzuKHZPCk2MNMLDkCTayyc1kCihf4Y9NTi9Jf5FCGFpZPZLyBPoXiAKvKsmsqCUKy",
  "key12": "48WoY6xY17GGJaJ6n6tK39ZhD2BuudVz5ydcteoSTyjGKs1GBCpHDkkJG3nDTWX3JeU86SpBAGpArcH1vBdUrfxe",
  "key13": "PPBo81zXJyfvPWqRgS7t1Q6p8nPno8iLjig6FEm6QZmDRmRsYPMEYYbezHh25ZMeuuf4N5SqjnefYuitWuXGK3Z",
  "key14": "2w8k9qn88cHx6LarWGbSX3TwzVRtLf9VzhYsdPbhK5Ed2h4xByyo1VZ9RfimiXwVMXq8wb2p9Pyc5EpadvBcF2aN",
  "key15": "LgntpnzorjmfAnfaK8Xfw1bTTZmJof7SVQP87CGbSby5ngJqVxcKhWTQoFAznEZsNwU5MiERTRA3Yp5WhiyGcJj",
  "key16": "211Db7FnYmtVYX3rXoXafkZtGh7tAvcTdYG6oygNxsVZ9PCeAC8Ej2XTLvG2SMDSvZ8U19Bwvv383VXohcQZCtry",
  "key17": "4sHSapLnQwzzh3MccJUNvedy2gJHtgEPq2DzbzwFn5utUKhJ4nRjHEY45V4z5YWeyHcffxRajaWaemgtdFMrk1J9",
  "key18": "nE5udpy3WA1ZvxsYLvf7cVrLP86HabXF35mFfxHaftRYT2spnNtLtpzGTo2JeGAsCykFtwZtLhGtxpPmErGhRAh",
  "key19": "5p45CqkH5Lj583yYrTC4m8gVKNrfivDVa4Zu1AgeRNecELXXy4ZRip88ffLgDiD9RM61nGAJEFLGCwGv67ECVALz",
  "key20": "3aaHhLWmmWvsHJn8YBwL9tUn5fCssJ4Ns83UF98AcvbmkUTKNFrbJTpA9RGCGMSbYrrG4biH1HKtzjdZPZcUmdjD",
  "key21": "2Q5gtrwbBwZ98DM4arejYKBgYZPWdjL14A69zCB2AVBXacxtKXnsWq4Xm33t1gJioMBGkc4K1gUYVVyDrwFneKVg",
  "key22": "43KmNVdtepcgTiGfHmckJtuH5JjVoAyAg43fexyHyfuvbyWNi4nZgYjRuJgkxA8uwhWmddS1byT1RRdPmrsiEUot",
  "key23": "1Ggj5chXACfCYAA1CR68gnrWEpDTjkSrfXaTeXxv9cGCfzLYQbPWsBNLNUKZUeWF7PLEXJFKXW6aM4Z9vTR7uSZ",
  "key24": "5CSmLc4XDSUY9LFSHzBn9c25NbQuis6A7iVf32pBxMjwkDddJxCmozJuUsk2ftyamJjgNdETvDS2MtHqxs16mH6C",
  "key25": "5HD5sJ2S3L5CpFNCcz3qWEB4wxMbocRTRtBjvVJeMBtDFF4aZvLjnpdKXXYqfNJ9jEeop31yhvTRwubqpKNwSUUc",
  "key26": "2m87HNyuGkhNwH8k5WBVm1mUebSuruEFT5PkJ4d6BJr4VzTwvFrNqcVMWYmmnkGypADRhW24PmgujTTdAtB4nW9j",
  "key27": "38vW6onU3HM9nMAmnMzKroJmfGzzGZtnTF8iZdnEqmsgBdGBG84yaK6bWe5SHQGegGkJnqYJuBVZjZTkQHgZjXFs",
  "key28": "6rSnBZjpekLoRcdPK5C6QAoCwd2rfKfYc6nQFoMZrGcLLoZNky6Y1V9uDCthNRa6k66CpWW5JNCt4WH1fpv1boh",
  "key29": "35hD1E6kEJNPJ1soaaMdW5Co3hpQ1DuMLnuGam8JjVr2D5KTR8dsTdFBxXPt6EGxqgqq6jfAQBnwAwttd79eU1Zd",
  "key30": "3cXRpGn3caAjn2LxShAh5xLF37grtM8c5FgbJdpgsHTYT6cx5AP4yCdpDhsnogqMUATGvrNUa3TDf2N38vnd4Y3U",
  "key31": "36KN1nDvewMoqwEQK35Spjh68uqtYz82A1AEJmxJu1jzP9KKiP82zrM9utAhnJJvThARDxtiw3zS4pvLfUEGYTfE",
  "key32": "4TTDwSYXFccpmN6eSoY2akFfadJmVMy8qycGcA4BVaEhUwwh3ZuhatzG2b4VVwaVcHePFHCwZYW27GTjNzowzvq6",
  "key33": "39QKuCzgZFbt97o2L9fcY99TBtfM8c6HYPNQ8wRvn7sv475ytepEH7v4EzqGRLM1vFP7yq4b1LKAVBo6uMu1k4h3",
  "key34": "2d25VFmm9kMaxGvfaWer4VFfGCdyPE1DyoV1Yne7rGnUAEL3oGmqyd4beaNmKPYqpfNP2GMhMkqHNVDDMqSyJAWC",
  "key35": "3XeM9StyHnFU5a3ruKn6rAmAco8AS4Xk2GFLWAnrHE4TTYtiiacUukiqV2i11sCTXJXgRf4th7SaRWCLNS5ZiNxA"
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
