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
    "2P3DsqPasXNvxBcazrEG4UVn8XxtBoDUBrptkeoWMVEWZ8jBSKh1hjuW4NPpy9pqzWNkciGJY3Xn7NKmbn3qipyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XkUkWjvQoZbkrx8S33QA9655W4M2zUgywNhje7GyUYVzxswk9YUC3zWexznCxDNBBvaY3c1BRVfAUj8HexTbWa",
  "key1": "2HVZqMFMq6ayPyyaxHPLrSYwyhCiHAQ2J8PwvgtN76Tgm2Evu9qFQK2eVYBV4WBcNff7VqLHAWEPsEzEGjZ6nM3q",
  "key2": "uaSHGKZ1a5z68U95oPrnMbQYW35SDyNtNBVsoKfcrYK8smtsL4n3MrSxtEMmBigAKiyxqjyqNXo3D9MacYzok1d",
  "key3": "31uqYXdYgyZK842rgcc2cvyHrrKa4KMT7kDVFpPaW4hstK3yhSnGAXP4zdqsY54UeCBPbKn3rGhzKjSLXEukXWYV",
  "key4": "H9GUjPdtEvqHHqPwj34XoC6zWEAs8fBQ8muJznUFF55KmGC2PBX4KHDfnCSCvzpELkW2VB33ojBTRgjXNPmPwM6",
  "key5": "QsnT1fwSUFjuaAnbTBWN7uoxKe2V1zXcJoT2UVkFeHbgLEiJAJxgDaHuCP4gPJdpn4UFqGiChZczcuwewj3V1Ww",
  "key6": "XusQhYdgAquELmJgKnNeZZxZA7sjSEouy2UAQJy3yqRpHBZPnZkitQT4UubMAq8ubHB1HLUmn7myK5FvMYGETsh",
  "key7": "3K9VYiUj8mm12CFRTSh6EaXi8n5DH7jV2Rj4nRKoxWSQgibjxxkcyCSBabg8L7kEBpdvLWqSn1xKGJZ7sL2FbG1h",
  "key8": "2FHYZ9w215dzmsjKJGWoxkznpFxEGDTyCJTfUE6P6oEqDmDnbPxw9T6JzWCGv1YEJ7PRWot6WaR8U2JfYbdnPh6G",
  "key9": "32CFmDocHEMAga4Gyc74SNQ4TbDY1swpJx9v7CQkM32zm2ZTeNw4yCC2nU9vMh6UPMxdmAmTrUzeXJie7MccmTub",
  "key10": "2ZwAa7XrzbTRyGAB1yQ2GpxV66KkLa77sqfYA6ZeatiUxmsNCeKiLSKryCSFs2Kday4sGu6oWjpwauZwNcum9qm3",
  "key11": "GKKBAPePxbsxmuJLoNKVVk3b5dwBVWFK61zyTBr1AfgekFDsmhhd6Tz9v9xspPE1AtF6ejNNnqMugcNmzJwUo1Z",
  "key12": "54HRsQe97TJFKLkH6crSwjKLqemkS9znPH3ZNBq6kEynFhwKs5UNadY4uExiiyFy2tLJG47NfU38aG23E2Zf33eu",
  "key13": "2bCEVCvgYaGJDUBpLqhRpeDjo1fyGVK3DpR1p3zUQhZmdLayRYnA91XsQgqnwH6PmdjacmhUgCMmVb9oQq7jtc8",
  "key14": "2DyN2jNSfk9v23TGj1H22nQBTA4Hf5jpEZimzx75yJndUkFgXnfUL5fhNqNDksVM8htbYfqRBZTdzFVoBfq2LGTb",
  "key15": "5JGPJWxGmU4mPPvQE5CRc37xMffjQeqZs9pQHSzitZg63j68XVLS7wEEqKF95XdeKwDXYZaGCCYdabY32xMpEYPH",
  "key16": "3u6rkUKsCktbmTtAiqDkXFpAARpg1KdJvHRBTJXcqqxZDgrcxcRKUq2Eu21VdUyhd74khrfNvws8guKvgF5EkMfs",
  "key17": "67m2w34LdH6j4nTrJucuMgHYm3GtCw91wfR3WeRZDbzT4UECEetSLqkr7j3nxyPMUYa3dNmTN2fVDtdPgg2qNNML",
  "key18": "3vK1PtZvozkbTYTYEgkfVXKinHdDjqN64woY6zAgV2shs8rFJ3zz7KKsjZRXBU9ZkMK3S8jgeHLDCpiJKnBT44Qo",
  "key19": "4us45qhfaS6pxTVsCGseNvPXw68Vdm3NKEv3irxLpRMNcUYQTCeUdHuYodqPBnr1JRU97Kug76DgntciTaGmiM6t",
  "key20": "3Ro3t2mEdqcppiUbp7eNa4a5nCQFxUhMaXLrEKjCXPn4HH5PaeGJpw4SMBzAAFoVa3ADKJ3U6aMocCicLELCko1t",
  "key21": "3dyU9YHgEmgKiaXm9yHxtks6mi56bN1FKwNxfWweJEMoiTqbZd22vSJZtDHmfjpd1qYPtBqa3gixfG59QXbHNz5d",
  "key22": "1B9E8kgAYhKAdYCsZg5WV3P96S4E3Txw9KohshzNsaT1ahyhyEcwxqEwzv5MRwdzZzJqgA7gbGnTmCPT7vNEpta",
  "key23": "5Mu8uJ1B2qRu6LYUxNCHfjR26z9Z2mZD3GhfHqNJKmYQwQ6XLaVPyd681uoPbXiMAd6dmhWqPoWM8fr3iMeEWjwa",
  "key24": "VPY2ymFrKZqBMceyf4iqz7ADNhkZLERiRcmiuUznFRKWFPAuzyyjzhSeJLod6foaVmyY7BfNzYhVLZq7dttu19F",
  "key25": "478grAjLWHVKJMwXq7KLAHoE4aWND6mD7Go2ffsi9AB87AVmMqZZEreDcqUSRmbmVzvr9NGT4p4tXybw2B2AgNS3",
  "key26": "46Uf2EUN3hFbsAT2FsNLMYigEmRcf9N61YMcsgeXbcPJ5A3XdVT9pGDCd39MEkHiHuUZi2x6QjVtyANyGqDFLNSr",
  "key27": "4xsJYpXHAJ2eV64YoFT388pMAK3SZUrNCe4SpG8sbQhW5YgL5GC3AiHgqesUW2NSubLkiyY2yfX5Z4g7Cpd6GrtJ",
  "key28": "4LnGk5gRTBeGC7bSpmnA7r4HrheVsRKHWuvV7f7dkom9UVCZHLLNuQEv1HJsXtbwLW6kxedjscJAmw655qehBovv",
  "key29": "rrMGtjuNqMbzYn8jeHktCGW12RyQzBnwvtCL19ZcCbaSVYL3PXMmWRwWhJUzj7LgGvcYipBarLnTWgSS45qfqeK",
  "key30": "4jaRznjWomYQvBWifv2DP7vzWAtRCSF8EsrcoFZb6Qdh82EPRZEkxvvFLyYRPhzLwhtYqCF7ByCoqQ331rQw8cNo",
  "key31": "2NUuCwSmKhSiGV49YtHN7x4wCQhd8cagu4PFP2UU43U9UyJGpNCY9zuL29YWfxhCfpXykGncJtX2ZLCuThxUwCU3",
  "key32": "3F9YzBaYXoW15w5re7Z9LTrN6ZzyxccgGW75ghoJxYXWD3WnjSRxwYftruaqXt8SaTA2fVmQU88RUQbYu6iryooC",
  "key33": "33dMf9HaYm5J4Vat1qvkDPWQNV34qhVbvdPtR3euwakZ8BAaYqCgES8JmSBbNesVUpjwjPJH9kwd2wMuEsBvo7Yv",
  "key34": "3BmZwDb1KuMvteuriVqb8cNuxSvSVvzmdS4MjBUyL6tmQv2Yk7UA9ki372vSgtgsxVonMaPA4u3Rnn2mR76tmfhE",
  "key35": "3wEGynQdFWG6oiszcS5DrHhFjmjZT5TeijLw8Y6REAXE36HbrNgt5h1hkCDii8k1YzrBvFKQbQcbtThRLZdCbAjS",
  "key36": "ya1tNhXszZRbpGRq148yzjEyWQFfmC5ECXFrmA9je4Gb5ZPi8gvPCXga78Dsz9bDnFYAD3w3r26uEJuNih4ieXE",
  "key37": "48AQLvYoVh91jZ93jhp3ouXfNDLiJQ7hTLVb4immtEPtJdxfdhPmwhNaFrdwHYyrXcUc7xzfB4BBB1JUwKTBREuh",
  "key38": "4gPYiNDK8KUjXMent6YvbirpjNPBaQeTAsJvECFAwB2LMUzAm4UfVWako8DDkZJ62GQ5dR3phXfXmHst58W7MUaY",
  "key39": "mLmsDSa6fmPd3HUhif4wHAnAPZeqUwQmCbWg5gkVjkApKbqFdWEWTHcN2s367euGa6BeoTXoPWazvEA9s4RobwH",
  "key40": "2UcTtTdXv2EsFsCe9EYgk1Pb2YHXyYNhdZWXLhefThGzQTgwZQeKNAJwmYWcFT1W8vdbVMpko6tTaMi4aG2ThFay",
  "key41": "3EYXP8itbRzX44sxr4XHrPCNmMtwSDs6FsRaFPr773j2sXxqFKaMjQ3jNZidXWEuovsbL6XT9pACBYZVNdWE351i",
  "key42": "43t5Cb2nDNDDRV4FaRfFAyv8gDzJ2GUkykyFBBkydc1M5HM3fdo9LQkEfBhscYD6j7A4fdYVcsJvmeoMaFqakoda",
  "key43": "1cPVimFSWGduUGq5ecwTDqkFkXqq9M2gh3U5e5bYZqVa4A5Akoyj4GEc6a33m6GysHE28Ld1h7hpJpTS7boe2kP",
  "key44": "2PvjNYh4u22AP4aXiXpdEVQBEPeYbcS4LyXj74cWGc8MdkuKYbiMdSiCxCsXzYzeDKC92Y37eCdWY2eWd7j4nsZW",
  "key45": "3LLVhjyKGGGifWVJYtT9VzG5xcnNYXxZaY6jNKw6eb6Af4Xv5DJzhEW98QsDhHbYrJFBy2HRVum25BhpaarmoE7a",
  "key46": "2ESe34Rz9mQD9B6MQdEydwsTqYukY9QkKVciYxbYjNqp3nqRJZp9TuxeufVXhxAax3zLR9sa78zoDNdax2ycZ14a",
  "key47": "5iFHWnFXFSN7AjxDitL9N2eusmeHex6D4KbCHGDQigteukoEjJvsSZ5PmGya2SATgaAT4rV6TtqrsBjHjcETE5po",
  "key48": "3XJ2r6AKw1TFPdQphyhR95eb8Dw7omEyGYZjdyFyx9nnMvWoDKS2ZoUNc9Pnsb7KdGo1W9HSND5cD2FrdnEGfU8K",
  "key49": "Q8KnHV1Trjy9EiLK5bNJooR3CYgobHB3AfeWKhWByB2r8AXi8J1YTuvBvMYwjrq9H6ju4w5CBCMmSiMKfAZByxG"
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
