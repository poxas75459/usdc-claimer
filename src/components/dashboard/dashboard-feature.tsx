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
    "4nx2tufqqBudBdzT89aQicXK6XzxxsuhVfRPqdUR5Cd8xti8QiLKru7EovnMRMvnq7wcgC71Rj5WZEeTMgymbGWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d45pCfA9gdZ3dbhVrnvqnkTk9bqQ2mqNPwSWat1fH7m925mC2QJh9vVuMC3F9xyaaWdCeb2gkBgXhwm2rj8cmYc",
  "key1": "2sYwCbBnb4LtbeDhPrZgep8CDMFMFvwXZLXKJCLXHCKH1foG17CcNGjCEmJvwtE48NgbLS4QNqaHntzEW9PsPFQh",
  "key2": "4FZ1CfDEqoe7tY21DhW6vGnRqepmRmTQaQ4gUjeYbs9PwGzfUFrPCHXUkrVDcvuGL6eQBrpcWE5Azq2ZgdmBze7S",
  "key3": "6dgsnNdDozoapRmcmL3qpTWMvUZWg995rUWmVYymtV2T3jhUA7WepdyH6WtiuELfiqmMQcBtncL4bckrhZ2S3Zu",
  "key4": "22KV3bi1GjWeXadWxdR6wgAkZEKhs7QWk4PGn2XHNv9Qk5ShZrKVFkR3WEVFLVNmr1DLH8Sx5vzyGiXsu3tbAPiK",
  "key5": "JPNcUtcpg6UpGcZesnTsxYHiLbzF7U4W92zKa3nYW5sxhV2boc2uf4KSxdiwXgJ6iEJn3HWzR5EcxKShUTKsYVV",
  "key6": "2rNLRyXtmMphaVmnAVhdvCA32GaeTY3fArQsQBKXoBWdunEebnVC18uEukE3vTPXvRBTwVxMKpw2PutEckZCoj7i",
  "key7": "44frwVG9LLJogXHr19HbDRcEJYGzQgR8b8ZJx49KtxbepT37XJn89VTyM95cJ6ZAGisBiDj4Jvwq9MwN7YXphKEo",
  "key8": "3wepFr5Wf712VzusUB1wFCqr3isWGubeeL1pXfa7w2VHikfB4d7jqtNVC2gno8ytfWmZzXsG5nKdseeMpDvtDekc",
  "key9": "4fw6SudgEZp9C71zh6W3YuxFgBFf9Sczw7gQErZMB3nhTvo5fw1VmgEQYwGEsXaU35CpXPN8gYBkVQ7428JZFbM6",
  "key10": "3QqTmKbjoChAfNFNEgcoQva38ZVJ9J8w59LVyJQHxdEuv1zpvTfzJUKetsdXfqa3scijfiYJiJTJfmLhAeFULPFK",
  "key11": "38DijqCvs9L4TVa33QQ82msmmHJDzTzYeWVwHvtNq2qpp1hnH3xSnNdfHkBvBsR5e2xKrhbpy2jNKauq4VyTyt1q",
  "key12": "5jeP47bUD6kMJctUvn5REkknwdkCq6qVhaYkurTpLTz3UZmRaWJRikNN7ET31JaausHeZEKtFd3orVXoi8yeJVdk",
  "key13": "5yN1hhAt6X5vv3x1RiBsQ1DRjzmQL68gHeY4tqbLe7RCBPB66x8s8ccVWoTHf5gVc3rtYtnDq8hPSJQRDZepFgY2",
  "key14": "4HneZzsKUR8oNLGvKjoAmMXUocpVbL9gEWPgy8zruovdqeAT5pAQyUxeuqZ9NxHkiJUfjHnYEyZDXGbpf1rqF7HT",
  "key15": "2LBwkbzg9kvHfohHAUNTpa6P8G3KagsGm8aLzotfbNgsPjvDqYquGJuM1bDGMHC8f2RJ3rWR3hYoiggHitDd3eke",
  "key16": "NeQZBA1TacznjEUEQayRfLGMKmmiGB8GfxTRUKhgfE1XHV9PNFNAUqns5P5j5JMQ7NvgkrrmQvWYeut7WZpvEh4",
  "key17": "3oHLXfQvLTmRywLxLXocHm6GGrTH9G32Gs2Rx1gybx8qHAkf9p5TcaJ82UBXsNeHnnZwXwfFC1UTwoXCpNu1p8VG",
  "key18": "kSXXMZFXnM5oSVmaurNNxx1Fjk9YAStq8ffr9o7g7pwz9wmUmrNDBSfdsL9kjHYBv3sY61JMPiREEtduEgcN3b3",
  "key19": "2MZ4xgwL6hT3UMTuRxnnL3EEwewuCwp4zF4Tk4CzniwVscXDGu5HtSjW1ix4h1B9eHbJs3X8R7EbtTRqRZWLroa2",
  "key20": "2rkDThQRtbjArNLxC2DgGZmTnYdCC5ZjXgVH7SJEa9tbeAznV1pVbWraqzoVEbu76Sjmdxa3yqrvxSjvZd78ACVS",
  "key21": "4ShUgD8kzHGs71PNQrG2HFWdBeujK9MVnQqJNGHwwj7jWC6d3WZCung6bmMssCeuSNnP8ae6hm27FbPy7bVNZg9w",
  "key22": "3eGQ86vXBQm3jVj921LhUHD7gnjABp3vz7A1ezVSmaFCZ1kbioqzxRGcMqmmyUHnpEnLpcbkhEnMVYSdx6pPt7gi",
  "key23": "5ZGqUiZUBp6YziqSe6gMK2WvUwRn8JJ4uQpFqMENnTFjU3JGHhhNWH718PotvvvYmwXhuYSyF2yECV3dRvj5co51",
  "key24": "4yQWv393F4fKzfo6ZYrDaVTnH2bTth25bETgXD58jrAp7cka1uGwTrwyFh5cmX5FZHtqwk6NJ7S3HiSxAobzaRE9",
  "key25": "3mpWjvf1KTwjfFsNi5iseX9D6p11FMguESJZVdyXtcrCu829GHRD9bfYEnGfYcnM4Xpa21EjH7gYPscxTpnnArtM",
  "key26": "3mcf3E65feez8EiaR8apBbR3TYe1REMrsSsJXsK1scjs1b5WNEuhp4Z172jXn17Ncx2jdR4USvmXB7rKaK2jdMVE",
  "key27": "kZVdGh5eiXhKhZunj8MTrK6AwdWzFAcQQGivPEwmifqApzHhNNScPUCy8HV4jqPJfWVaNSJmQb2g6mm9RTCRrNe",
  "key28": "5gt5KFeL33W98Dwd9eW11gqqru15SYB3btq1eMS1W7ea1aQ94g2aNtqjSRGQyouTyR9m8isMgcQd25EPzTQYJaq7",
  "key29": "3waub8RojVq9KRdA82zN2a7M2mXhBsg1WYSLzczLxMt1TEfQ46HmtNn9u8kLuEC2iHgxW4zqmWPDYG3jDLBHVDbu",
  "key30": "5knF7wjMit621rt2b4QYPq5ngPjpAhLeEA5WYdVBvbRy8y72K26gVjjqe3XTzeEFReEcjRWeJHzT4DwEtt7V2AwN",
  "key31": "4RQGg8TvPdm2wEr8UagU4DFs5LkuYzpv2qEwZScwHaaTEnfawePyc2yHu1qDDHE8x9i3NkfBoHdHhhrDtLRcSP94",
  "key32": "TQQyuMcHFXKURktGRe8cpTzLEjyNvajBTfx4JM79eBoRQU89ZrXv6FjP8zFAudW15yh9B3sMSpyqc4gGropL8EK",
  "key33": "5Vk57odLiroKEqfiCBacXQwSn3vYkuPP6MiTmyGZAahnyeRwro6KC5S4wtLEgexPJCv3mFQvQQfvFERS7C6GB8VL",
  "key34": "2GbtiHfrUJJE3WL7rgA16gpq5T2EGpMap4MF6732NWXDscYTgsieBktVXTMsPF8gJRP7mrWptYowmTSypMqCjXdj",
  "key35": "66CRccfepT8K4usrFy9BYx7HHcb1f4mMNgHDbyhgUzyedH6so4RMHncdx2hzKAFcDQQL5qCepzjEytkt9N8QCW3s",
  "key36": "bE4XkYH48ea3hTUb5watLUdEZore68gQgbhkbuP6Bs6K1DTri1BCztHEZRcMuVASz7dmqF2gMmMHfFxhGDud5WT"
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
