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
    "5Jh2vmiPK5vb9Ybze1bV3Qajum7djcPqzZR1UEpfnmsiufWNftiKFN5XFJpciSKXiVSHYdGWzgUezUL968K6rUF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ccpWCFSbCSXuMqJAChPGguYsbah5o2wsfvfMJ8JtHiw12pQtA617sUdveGzFk9g5KLvD9NSNYwuFDL2vEhpYNTA",
  "key1": "3zX39zT9UPuuKAJTBGZ67GfuETUJtmjM9eAF7rK1nMLu8f2aC8d6xzzVuVxo1ery7jB2pz1Ew9UBvywgFaNCJnAQ",
  "key2": "skn8pQjm36xWnEWRN824NVe7fvd5LF2eEFFwDmshZAuzftxJWcM1s7oRQHWJDqE1PefymFAzxqmZRvMxEp6JatR",
  "key3": "31GhQbecYcUs7mr55oBT6AWnfisfczkW5ZwKpzbxZZVnZVjTCZrSdVnmnk13N4w7zjya8gv98DzpofuLpNHhhm7Q",
  "key4": "4VjdXCtzmmE4jjpDCDhUMm61gh3LSSXMWXbk2ncqFSB41n2GDuJFSAsoKFquigA7EFxC2jtXjVX6ehN6H2GMmq4w",
  "key5": "yUPJkn2p3YdSWNhcnMgQ2331eJrSsVPmyR2DDgqJGGd1sHRyZN8hkfNFv1huTzsxi4ZtjaZdNWHpKTk6HPdjwPY",
  "key6": "36eof454aSKSWprUkR3tVmRLKRD5oqxQjQAYjzu3AXq1jTNs3cH78RAEPB8xqC9NGZG4cXZEJWawr2E42GZvStuW",
  "key7": "4tYHn4NY8fCR2AMeH36Tt7gmtVv3p8bv98icnqUe39MpE8mNkK5HjdsoibVrX8J4NFw6ToHjBYZRPievNebtPV8r",
  "key8": "hEctKWALnJ157j9GDRCHj45K2Uw2ArXj7EUTgc77Dboh4MVgxLohBgTKWMDnCbjLN9khBiCxqAVByiu4hjzTh6H",
  "key9": "2QbP8MPDKCqLUC9wg7sZ13tsXtDMvxCosD8eghhU6SopZRfP8TSTzuoNC5D89wgL3GScbDiGJ6TJRdGg9hxrSDPP",
  "key10": "43yRYqfxVgnvyacWN4BHy7kinxeKsK3ed83VESAnprXnEPUz4nhgCyFocDybt5LpRjgF31TEVBMQat7VXUhnSH5C",
  "key11": "5vm92AQuo3SoiWdVjKRbwSyTzbDGtd63WgiSfpmMduoXgzBoMGdVAQoQSh1BFfq3ui1kjUibYZRAHwXBHH2BcGX2",
  "key12": "5ZFKEfhGqyQhRe9CHWKE86AehZuF1W2frFPq268Q7yvKrcSpew76ndAUSowt71oqUCv3iSHjBXFE12tbZDQBUsCa",
  "key13": "5kBhqxVoR2UP92C4QJ3Em1ETyL8pAHyLCXpqRqo5CVSzGYKqAReL7aSn3Lt7GVqsqRLPKRFNfuuTtTNHpAss8RoC",
  "key14": "u8yYetjsBDmLTcDB1Pfr4C6D6Z6iEqJN9MuSUAfFbBcjpUfFvZ52Tyj7hCsDtBsVkjXwtjcHFXjCW4WzCUfGCRZ",
  "key15": "27M6Sh9PpUvJjNUiTrQRknu4SwabaeSDMDPtzJ16RBv8f2cyvZzEfUm7jG8YPZWyJy1VXDh9uM8XGYZ3diciwQjz",
  "key16": "5QgJpycDgy7Gkd6Q5fmcx7KvXjiUgi7KjtjEsP9SppNnZwQ1NqWCuyTFcxBETYd9gfNSkUiKB7QLsJaqiTuY7vFX",
  "key17": "2SdLyJ5gSTN52Nm4BibH5fCXjiPDNBPH5SBnzSwn5hC248Jbqp9xBWp1SKju7eYGWviEYU1vCFVS5tMGhmXtHgiV",
  "key18": "5aAkZbBwP9KVwJ3sTVjV65k4jVrQRYoWTW4XdVxNAfwmcucFWCoPVLwoy5YipVQcTTtFkeN7bfJaP1vGNYZRNAxd",
  "key19": "5cifMojs2vsz6iHBvpYoKurhyEPkxUyePQUAht41ak8fPs9KudEzTWmmuVntKMBEopcbKoXAfFauK6mPHe1xkcYA",
  "key20": "2qN5g4MyMGTi4AnfUx3VECyQEYpcMNcCqnqZjWHB7okCGm1yMuQkZaFXSCWPSqoS5481qhatPAmeEo2wjSeFdd1n",
  "key21": "41VMxP7kXM6Lf4H4CoEdSiJJbAFzPXUyMygJFyDfdiDJrR4X8LW5NqhKdKm3qdPs5t7K12YYmhfrxk71bYJTsPyg",
  "key22": "4PACkLpTWY6HtrbshN2ercmwUifcCoTZ9og5YPLFegczCdotHix3GxUuz2bi5EHAyyQcpnz5XNjcy1gx75v2KyVE",
  "key23": "3ngZTMYAaQBbmifUTQw4w1kds7KpdtkGe4FrsV1YZiVw6HXFzUJL2Ntdy8yQPNUVsusm1qtc48gj42H8KSXmhfaH",
  "key24": "4KMAzthSAgtJH8Wr7od6335NuteX445djn3bofhMgR6jyAwbYLFTdfUZqig7SNVrMquEjcy6xw8gJfGMCUrJuLe9",
  "key25": "27tS84ZU1V5yTUtU2s4MVkq2fcM1AM8nncs6zm4Nua3xcfMmza4VRLMYjCudWid9jiyHi45AszN7oJzTkNjhq9UA",
  "key26": "8MMGaG7dYuJSHcHUR9dXUXRMHkLQrZY6CdwNekW8nBFUnDbfKVwW51c4ReHmrXT4irsBFDPTcRt7j4vEWVdkTSW",
  "key27": "4DGoQnva19xxx6bbVA4pyFrgLW7RRybuN4iEcXVj62iDK26gv2L33UYWaEaEpHJBfhGsrKxdVutEoihxNavJuubd",
  "key28": "3FAWqSbZ6AQynCKdx6AKuHyvChGvRC6cB9mgYFDYLhFexTmvQ9H2bA3gedbpqXhUKg7M2dkfXrmPoSWKhncywYsf",
  "key29": "3DoaXes9bH7DLNvAEVrsNqbyjifXy9PqDPsaPwyiJu4krWUiF9zh5nAUJM2mTCWCkDvEgwA9L9tsH9RsKnCZdQSS",
  "key30": "26QrUZYiYqYBwZpejUYKWwTkTAK5aq8YTPMoFWkcKoFvb5eQwJWEN3d87HQwgoijuZVbGLkmYmEnBjqBoUStsCmk",
  "key31": "3RdXZPiHujxJ9dBeUHXF2NJVdHGWGuWRb6AsoiGbJxFpQD1S84aAXmeNrbBWgzYSuNFaCdvjVL9jAVGXQmKraSfs",
  "key32": "3HrDfkdJGVMx74DcimfQWYgQACHarsUeuUc9ad9CJJWT9i5ZeVfi2Z2T8zYmPAhnpqt4SxoiciAs5Bo2iuXz8hBu",
  "key33": "3MC8wgUcCy6ZForKnXZsRzXrRnV5yc2xBuWbvT7kChoCXrccmLhmzdsie2GjYQog4YmoJRSgw2P8ptwxxvvvJK8C",
  "key34": "pH46TGPwsa7jXAMhgmqFJQYYKKPMCRBnfLzjDDPoby99aJGL8ydtsq63MVhDY2tAX1CqAiYNmk6xEPc7eBnDXza",
  "key35": "4jRqUYm2L7cFYqtPpeEjxKYZRiURdPjeGgwL1TSfEPnyep4rbejecVHXEK99tjtQUtajxsYnbGtTovKE8xoCPsoc",
  "key36": "skGPGhqAJNmfaJxwyB6muNiMDfy6WX92N66J38TQ9pwNsEGeY13iEGmLftmREhRi3bVY5UZDJgrqXQ8QeZ5nxgj",
  "key37": "2iEUZEwuJBapfDXmT3dnGH29syzwh1S8xEuBNdNF9AFNgvtJUcnkidpYP7X4Ses52HHBCJESG2cPXCLtLGd8nDw5",
  "key38": "3TBAPL7wb6d7dMct2LnjmQA2CSLmuW4fXrbv7GiP7NDJSHhxQPDYZX83iwx1Ujxac8FuxxRiaAVx5Xi17Ty6QKRP",
  "key39": "5n39xm8Y7MgW9k4vftEgDNK5yDgiALXWrrYQ6ZKyJQyGJWs91wWgwLNXcYk2ozXav644f4e76v7F7Kb1kWdHuAAF",
  "key40": "3XLChie4R26GULnj2LVMRagvQoT33bQSRf5XDRYoJGP4E4TtjxTzbBTJh8Sh3Jh2ZN8hjxStNr4NpVfziSjhEuk2",
  "key41": "CZqjpRPS9pjsXDv8SztKSt2TBPrEwLFtnt14j11vdqMJMUBZqAMbmX21SvQY8CBuQJHegGN35VMAfoRgKLqbC6m",
  "key42": "382wCYKZV8EnGeGLDQJh3Etz5sTfr9zVG7zNKh87iftQX9XHyGAzJNBZzBiyLRNtYUoiEyV5LgUMnLm2JdkK8SLN",
  "key43": "ECHdsVSfF1rh9DBdCXfMs4BgWUnaYHhSW8grzmYWdYE8Q9osXoLAU9GivmxyttG1NWSbLYzLVnqvWiNQuCkhbyo",
  "key44": "29HF3KVo1MZDCTJMB26grC9N9J6wokwAVRSQbYSnHegu7KQeEpGbk9kgHFkmCbTYckVFh5V6Nf3isv17YGUjhVmz",
  "key45": "3vLyW2w8iNUfC3JuqenfmZmJ2KfEhhDymtEpUcMLMA6rwYe3TRpX2GrAjia2BiKcJ87mfTbJNHiKFYdJGyMku4ZM"
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
