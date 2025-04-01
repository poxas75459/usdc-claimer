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
    "37hA7ShHUCCMXvEySqzs8Cg4bUAYfewuMZ8Hu6ap1GY8rQk6gLPGitBWNFjhReTbpkPUxtfBRTWFAFxeNm2CrMuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Kh4XhYjoE55qoW2fGE3GSV35QFYsm8WpCBJvi3fhUpXQySQTfgR5yTDvviumHQ24WUnfAY8Xz2kwQNruWpkYcM",
  "key1": "4o66Nsd9R3ZEk1rjEDAmEgUKSaXpdRFjRLQJGyTkZJHGHXhj84CcRVxv8A4VUCiTkBozrBEPKqXcmZYrDBEmCzGF",
  "key2": "39Y3GHzb6LtbtRMTsnykWXqc3X791GYHjcSeeFg9TmfVna2AofafB6QsdnHRXkdAznR4vi5z3Yu8KnaMdQM9K3Bo",
  "key3": "296zGLV8GGeFEk5LckSToSZBqN5c6m1iPLBWsrUzhMzEiHPnk6VwKmwdy6vgkGHWVhFhxYZm2iSFo7zZofKgmWui",
  "key4": "3jEwYLsuHrreeAdp7YoEZSNaHdXSBPEvrfXhLfMPcsPgb67hBpYTrUZLNyrGeFXurEpahf4oYApd885FQML7EtPc",
  "key5": "3q5gC7b4TVNeUu9vXNE8R1PnzMdsPwpGQRdKfkwPpuMqxUQfGUjb19eX9ph6KHxLHLgfXjzxr1ePMauhLc6SsRGH",
  "key6": "61CKzPbjFHv39o8Eiw7jfSuq72u25yzhtKFiSHcjAPsmbeH5EAMraaEaY1pwbSSHojaUeXbvjnJZ78j2Hj4V7QS5",
  "key7": "5ZZ6i5CczvUtyYPkzz7c4DKnJYTGEVEymcqd55CBCcsuQfLneNy6cyaWFw3VJAbERDDYy6AJtS3Xc75vQaDPZjZo",
  "key8": "28i93Wti4g5jW7oqUQgNEwGW75ziWqcA2VUrRbCHHMTQWNyGLMuJyPk7YJ5DGrJahZJc2Bwcz9sdpJe97TvaAWK9",
  "key9": "3fvedNuXsEhm698Djn3YXzKPEzBz2zVQztxD9N1FYBE22kkfoxydCSk3FZzkfriTZDyn9z7JoyDGdK4aEFsW85B7",
  "key10": "4c1gkYM4xtumtfLfAdBBD59N5u5wXtgdiZ1FEdx1eVJTCXuYEM8ABDnEkTApmr563uCxm8F9E1jCkMdVdNokze51",
  "key11": "4FxfDcewbpGwkE4zzGifuparTdG7HKborakLHUWBXVW35QbegGJdjmWUNs7W44mftu2wD8g3WzMbJKN2JyVmPiGy",
  "key12": "o1u8sYe6x4PFEyyYk1S6Suaf2Q6whXFcgxPuTzkjPomw6jjt1ekrrLg7KpmY9AEqq4zNDbLAwSQgL8GkCkTs65d",
  "key13": "2LxhyZ6zmzLxobwmYozdY8PYsUW77NcRDrFLhPj4zUnK13Uyw1jxd6dkArWNXnB4UeyBuNLtCiaxdMGMybfWzn2A",
  "key14": "krxY6mdV8N5bSAdKHxssGmivAnJFzfhEWETJYtGqMpVpibsBxmybPkUeguR89yp6tP1DPcavqXAmxV6ipuX1xhd",
  "key15": "4LdjVuqvtqKVtUbqiuFsBA9TaNiD5avkGtXDtnY9SMAjJ3wQV9VcbC4WonXEg3xBeqWHz8hrkCxGNg31UrBdtRmj",
  "key16": "2HvrF3dPYjyxDuPaqmghb5yXHTXRn3rAkDYKQjj3NGyGZaBPcf4bADs8ajPZc6hVUrB8G92Ntw193Q3GEbKSNdmo",
  "key17": "3WRY4tsXs6SuLXhZj2VRhco6gkRHkVniKtjnntTbpub1vByrEdzi1QkmJQddqoH9VPqoePkRT3WPzMu5fp7vwJEz",
  "key18": "3bF4cS74Wgw7a1iU534RAY5X4VLG4T6YzDqaw1x4EvP6nF3RWZLQ7v2oqfxciEbZFS35UX8nhQVRMjFxRv1uktNE",
  "key19": "66Hg42LQ8LmPHwXQhXCfUuVZ6baKd3rB2AZRDFMTad5v4iBFcthicG629QVTFgT5eMDEei269tt3pLSDRcmwCLLP",
  "key20": "SL3UFkSJAHkGQq6mQp4c3FH3ZuPchyK99nPwjc9c5ekqLdGrwPfzyRw9rf6RTgxmjUMVzkWt1B7j8YVj1htVfe7",
  "key21": "4zfGhgpfuxbnRsuEmZMWJkxHkQsxP8zb5yLitDyGk4ZGowwLkKCZZ7147jv68QksufaNH9u5wWkYoY8EX5ZCj2n1",
  "key22": "2zdqrLJWNEZbD4uHfz6D7sDm5KmqpTzniDjoih69obHkKR272ukmAdHdLDd94E7DhPBYJjPYQCo1yaBw7QHCgDi6",
  "key23": "Nj4xpw7pC5yZVJigYbZSwgC71tmzmTaCjhn4whfUtoSwZXYm5yLmVvy5GdLdkDPFQUksz5MKg5NLJsQznYuRgHw",
  "key24": "4MprFiDZKVUu1w2vBFT6JAFoRLYUYCTG3PR8HNbXpaffXegGCegdRFWsqmTDdx1be5irbiHLJf3AjvAiHn7EJzRr",
  "key25": "rdfZq6BBYx6zzxbiF2vLqzHmsKe2ztcQoiuVZg7uvkUWg3h1F8MDgxTHc9BUCYdQrJa2dfKV7joh8K47EDgv7r4",
  "key26": "kFGJBAEAf6vnYcWU2HJsUxib2Se32E7dcpeZzqvGYLLwqQ5BM4n7VTyhv41L6VdwRYq6t1Cn1Jg8k2JNcxeX7yK",
  "key27": "3ZE47u32egiurDvZHtVtWmxc6EBXbWuZMRFG9RManj3MNXtLbWkVv4kugP9Wj2haWmz6GuE33jH7UyfYG1L2fq9V",
  "key28": "5NAjrnyVhMGQhMtf7X7rEEAdWkVKMWKtiQh1m3U6A2ch2Rpvwq7LKtCqUvPjmPWLsAg2aEke8uZJfVQwvv4r4rpd",
  "key29": "gfmyruZhPDePa5xfu1ENYM6kNXdTtkfzXdpxYVF2PWwnjkd74jpWrtd9Rm9TLMHZv7C5pQbsuG4R45reuXp7vdg",
  "key30": "2TGCetaGbpS8nxf6fhhmDUZytYMfQ6a1HTQ9pyMbJe1aF7ZaA5BcQvMgNkk23Q25EaJB2w2k4iqoEs1zDUVt5dRS",
  "key31": "fmQsn1Cm1jQiCQgjJHvCs7gdvbAGE8ekeNnKoiqd2rCFhewifWTZBfA6Ezze831bqwyefceAwtyYMjoPm7r4o4o",
  "key32": "3L3pXzchjwqvFBNCCGPHjWAjFakzumYnpNUBb2CKG6nVZq2K2zrDa2ykLS6faPzrMyWmf25GfCC3n6VDZKMJwPbC",
  "key33": "3F9ujzmgESBCZk1YTGYv6b5LgKLCEidTqP8UQ71oerdoTAvW8MGW7RJPXPhHNZSKxQay2UYkhk2yA9ZJHB4oacoL",
  "key34": "5c6qAiTUffdSCFnBhaGkX8WUoVJgNAfFdQghqq6EigaKpCGp9gLexrq4pGgBAHUw72rth424YNL2QrhVCH5aC3D5",
  "key35": "59tydgS3MaX234JM3xzQULQApZqQamuBWxahPE2XgaZEU89iMkwAoz2K834muK4n54PMokRaACFTZjnAkVV2tG4B",
  "key36": "4N6x7FNeKrGSH1wcPm7s4NBAy2GrGzMNfRtSsvhDnc7QuSNv4giVNbPZreSNNcsHVoVBpgcWgGh6g9bh3sM8Pdt8",
  "key37": "5h2WogG7MikcEP6ChQXSZjBvSMp9qHy5xKRwg7ti6KkcuN8eTgSYyZSMhvtozbDA2k5vx2qctmcCi8uDQqoYs6ce",
  "key38": "kRa1RnFmighGwthm6NGWyzV7YuxkkG919D3PSjNv3afDCXpnXbZVxXsx45igBq4reCWYjb35avKiPfcBkB16hFx",
  "key39": "4YWsRqut638dEYX38nDfnmtbkvSPDoyxu3FXJMUiVz6UbTbUeteHtE58r4YfiHK5AVMJxHxu3HnfxxRTD1bahvdT",
  "key40": "2XNbM8HqQtw1J7T95Aphgm5zAuoxu4k5e7fWQWzqhomgR7cMu5WshbuqkAUYYczRpvDPzMeBGxW53RML4agFRwUW",
  "key41": "44ARpcgJa14fTjTVi3Kme9NrCcPtbELq9sB34C3qV1kmmjHbugWYGba6hZ9ZfTea5xGaQhMfmm2Y7m342WfKuQHU",
  "key42": "4o9a6KsBrSwgQkvj9vwBkUbkdbgoL8ySYxgqzAEU2QaZ5RzaqHkuXKorqJcHmHy5Sp49uZg4PzXMMAf79iiq9BtP",
  "key43": "2m1WvkvgVbjjwjnUzpiJotW99NVukagfaCmbTnHUkkGvuADkQ6TebsgDXJme9LqjdqZJPL1AM3B3LMrxRv71Xmeb"
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
