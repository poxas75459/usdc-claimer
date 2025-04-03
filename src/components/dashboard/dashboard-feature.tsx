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
    "2eCy7nB66bTYCoFRLmtmLinGeFPwgq6XtaCrDFaYNCaBEo3D9YtLmcuPns9vbcxpHtm1EfRpGyvM1jvYbc5p6Me9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLdzb6nCt9n6MXQvFmszPnKA6bYwyxfL1GhbSNfhqukN9dgnkTMRGPz5cFKP4xokaGnBcq2HDCZM4NAYfBDcsKj",
  "key1": "3DTdMTmfLgES5ihCueq7M6LeHAvq8hRigQiWxLdEFV6uo4KrnwxMQeeCenS579KCUk8CCcUmXtB3NWSmJbEiSENh",
  "key2": "3T9hdPTAHvhnB9qeveq2yNosJTnzXZPgVUSLHt225CQVjJ7rsjoaRx7GCV5MLDVEQoAphVBRZDbvdwjLM2b652TU",
  "key3": "5qq6obThQ5KKExZ2itTGSoj5sU42nHfZmYYY9wNoyqvG781jncYPb9rZomupYNDh8fSQNumYa4vRMKfyLdVxJbYY",
  "key4": "3GGrTmUkVzMJPSEXNwjRyEk5ytBVJnMp4rLXU4zLPGQdEmarxnZV723GBFfm5hVvsmooffXHSqons9NWPnF8JmgH",
  "key5": "Tzd5bELyTLvWdLeSvj7UVQRpW56w9bU5DDXhzZuzXrwjNNbQBsC5FxgNVMPBzQRMrsiHkCxWRevuZ1naR3uQ48A",
  "key6": "5H41QniZgjrNthasSYV9bTba3NsWeZ1u1BCUbtp6upj7LKSZcSUiRotWnEwowByvnCp4wALc7kRSw4Qn8S17JD7P",
  "key7": "4cZzER1JcaAhgE8T5ofjJyL8g5heuHNnyciFzbgWuPc6WbKuDweV9xRNA3XZHS726oYrUYWVtbg6tn6PeL7ecrp6",
  "key8": "4Z6hnowK7SN2c87W5Y5Rz42PFsWH7iViHXNz1pUqL5QTcwa8d7pEkZQpfXH2WQTgP7tksfSZ1BSDdcSeut4NjRQP",
  "key9": "2z2rjZ3y18JdcqcYBaBqQq4oDrn7DM5YnWe1yrSLLGWT7NU3LaLAJdTJVC6vZRXYeWqDrykyXtVrMoXg8SF4nBon",
  "key10": "fabFiNMqogXjSRymBrVxVs79q2wmrExQKP2jVM5tpbpTmG9W54bLbWZKje6VMjc5CmH38efq3xSybFyeHaoNQd1",
  "key11": "tDc91jXsFbc2JZiJXDXgsQRq3XhjBgZwFAz7Q7omWcLxv1qjYZJyUAYYRe58TvdtDattufzGg6wSA7JojLFK2gW",
  "key12": "2LXEpBfHUHYUrB9dP9PGdhKtgyFTcB78XHBTykwvxTbYSWqJofXgA8aYQbm7J3MAuvEW3cu4aP8fGjtwrMVZ5fPm",
  "key13": "4cfNHvQyZ6dDMHsoKtdak7RsfL3n18pj5w5fN6mrhkGq9FnGecALSbfP7BsLEdEfeiZfab3QQsS5yTKXK2nNbDLG",
  "key14": "5RHoNLhrETJhXC8sduTx3H4ao1PH25u41t8juXE7pZ4EWsCmfVfPcLJU84yZmpsTQz6MugGrEub9mBAZdo4Q554y",
  "key15": "2VCui41EQxSwAzNHMD8wRg1fJQjSEUfx5rVGP4ptcf8CvfPBHcPFkoEFiAAMkezk1tnVkC2qVFEnzj66DGRyTuvL",
  "key16": "33SNbRj3d6qWr2G3iRXow9Sz5ifKexbxzpaEuBSuwYak7jUQs248qB8YNCB1h8jp8obpkAD924yVURuwCTh3uarW",
  "key17": "5M56RfemBu9vH4eky12N2kNLF6N6Zva8tnGXRSActLCf4CbE8JFAXUwbqYQey7tsxUWLmy6NKV3vZDXEKypigDPh",
  "key18": "2EKG6uFCes6nAUyFQAbG9rJ9uMCS9LuKY6nrd7vdHdJb1nALLXxMapptabEmXxhNjyhnh18n9jEDeNUzaDURjwzP",
  "key19": "gaDrhSi3uXtEBiSGXjFS1xcuyxzo4juXHmuzgtWVCwKR6MQ85zKhexo8NiVHPt85FCmk5bdwDhC4dmY7j4BYQWM",
  "key20": "2nVpxGynj2h152qexSHUbqSfYtxtUMXzWifPRV5kmeskxiT74gk2gSgDiPPcWjiQBYXLxkUSTJqqu6xYCEiVm9wc",
  "key21": "mH9DyPWxvpCkhneuvWW5Nd1J6aRyWXJh1K8WpkWgkkUhn9cq9cvFZZSjiPkHRpnGXiYHYfsjNhUp7uvqhB1NAtV",
  "key22": "2Lt9Gx8YkPtZDs1Zxws4wKKZcS7qkZQ7vEUccVqc3Ykaufe75XXZ6ETGirTydFuiFMpZ9dqQJzs1CHCXpgwHje6R",
  "key23": "5Bpck1N7GeDTWvLsLFUW7uqFaktX7hcBhUMzdGHckYGecs9wxBX6Zx4vw41zsWp1PpfjNmUaWvfKYtxRFTNyZ1c",
  "key24": "t5Fo5HRbMmiHdZqYdhW1fktEqW4NEeWVcvZ1HWrzAPMvn6y5LYD18Jj5VtR6k97S3g3SnqqSFn7i81NnEre1m84",
  "key25": "352EZD8e6AatTMX7j5hBNdo6iudXssU2tnz8x6iECJi4iQMXv8YwTTd4ktKVQe8x1ZQyggHS9PDjgp6LQX52UzZ2",
  "key26": "xCRG4FSCfxJ1rbLeYN5UE2zLfdrecVdZKaY8fcnuVxB4ZdaHnoDgkJYZ9YxkeE5LJKuqiMtGAUTuN9mZmbnNWm8",
  "key27": "539HiaKqwgkuEBaPJ4gvLupSaXhBxuLiMpbdJ5WAE5y15J5xZcVu3eqQjBMZSAoe3JZoUuQuik3hbx8kG43Y85xg",
  "key28": "4Z4RPwvsfyRJ3LGEPmfSgWPZxMGpcSqcHYsqfaDymnyNnGWxiegA8MGsna2pspeKXUWeuq2ruTDJQZ5mjVbKS57a",
  "key29": "5xTTiN2bZAKMupxUJrbJoSqf5cfuUsQCVB5WmfH5doYb66tQ7iYQoV98SU7wGAxaAZbjjEMxBSsuMXtsA4uDSgFp",
  "key30": "2wSbGx7VWEWjGGDyNeCSuFsiqrYD7yvYuTrsy3opwTNehHPPMZwqcsacV2jbZD2Snt2V7j4jZK1n7mrhzwwHn37S",
  "key31": "5Dw2Pk1Wi3coZAfhNow5ijhfecPrXj8k9ygT2YsrNxiTtv3XuBYoNgnNpQd2eYBCiNWaA8ZKzfSDNK3SEaDxYzxm",
  "key32": "5DctSbAcEyfF4wH6bVtXq4WoBUmGgNd6vxRpcGghXnzxHM99VTiHP4oQkADGAJVYXfyMPLCcjnu23odPZNKmXTqN",
  "key33": "3VoVeNBfPuVPqQ3EgDP7LbRckWrUYKCdjPvAAbTWoku21cYHWDkKJUZeaSr8B3Fgy3X9Z5xCfycL2QesgSiFHUdm",
  "key34": "3M3sjq4XvpK1NJmv7S3pEYsCYHXQ1YCp7pSG1NiFq5VwaHGJMCEQMY6E5TQLHRgFrDHBwNMa6NJZJmXshSa7mADP",
  "key35": "GUKeTU2tJ4JTWqG1cXUgJX7cQntrq5xYAfHfJNu68yEhD75VnGCJsktxKq3yMWgYXcZogdddxfq737g64xMGHK3",
  "key36": "21fsLdZa1oUdhKAzK75iqpfYjBrVkqafKxx5qLSx7GZcRh5gn3W3c8WJ4KoVt4wtD9AbuonpVK1VSfzYgW7HJGAc",
  "key37": "4XJM59SbEVq2kKMBmxmGVnyWY8jmuzrpGR3KVsDBG6vpgTFejcGRro94ChxWSJManoNLu81uH2Wdweu9qLshKrhw",
  "key38": "3ym7rMzkqaNvF7LUnww7pR83BhML51CKGsC5b6p8suGqFapHNQhuoTaUdc38WD5XFGRRk15aAmiRi2M5xVcacRMh",
  "key39": "DuEWwbRhhrrNujKNZoo6WQE6k1MWTW9AWYPgP6kkDjoYba7CbRrJe9EuVxJ3vWigJ4EcztGK3jwSbd9PGPUVzhK",
  "key40": "3w9y9FNcMNJvXQkX1w1YZpPF1McR7tLiBfR8QvNHj3tbnxiv3tb6yfY3u2PmuFw3TDzGrG8TZSQtssWkSsYHTbJj",
  "key41": "47TmBJ6KmXxNYd7CwA4capib74CHRN1zyRLCxEMk86pQAHWHABVx4mFPiKCfP8PNgQhgapfrZk9g3E9PSrmKw2iw"
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
