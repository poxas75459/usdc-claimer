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
    "4ARWcF9MSogNNG472AuXaCr7vaZnfYZRKFY7jWV1SXR4gzr8VKrJLo3EaS9Ph1XmtD7Y4tQevFgaQwabfKcDMTz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e9U6yz8GeGoQwAJG8w7w2E4jPuLHZBbd7pkoPC5aNra9LvjZDZQMaFFB3eH5iFytFAZJrLzFCU8KAqGBDzhxsvG",
  "key1": "3cUcaZUvZ532wjwgzKJ2jVUAnW4WwM2DirdgJ6qQGTJbsqjwtGmq8VdMJAa6vptPhBzNmYzdsKsXFMZCwVYnLPN",
  "key2": "rTSGSPMWxjzb7u1zwyYCLfggqzg93CqZmdAwJc2Gn5JFMJPAWgTzd7wYubhcPK4Z5fMHayzoS63ttdoNN8u8DWz",
  "key3": "2mxLTJAK4axhY3TP5v68z3p6T7kXU31e5Mxcr6rDu4WcpFRig4KxugnqbUKjvEN6nyewsxFRsZZcRbxuB2cGPaXx",
  "key4": "4MGpaHpLSgKVocCWKsm93ikXA7sYEPS23NvVRfbnNft7835HSCSYyZywYd3EZs29zQqH6rFf596fw4V8L3QSaJQV",
  "key5": "53NoM8RPABBonf2fxTq3MZr5yUfBmzq39FRE5c7Hz6ec2zJjxsLsRGNrbndc9EiaTdRsvue46dneQhNRmfgK9qz9",
  "key6": "C4WnM3efpVftA7XYNzYQoNb3cn5UYju3uFVLvPfTAnQJXnKTyr3tN33U24QuVks2ZQJepzyn4Z2krdHuKHF9d62",
  "key7": "fuhcTPv5NFJKMbJD6gvzpx647nLxxStiMuHgwKLNk5rF4hzyxPDBTMqs9aNXGW6biPKqWdSdKcnegfx93hcHmWj",
  "key8": "5ZjU1wjjX5TnGAYoTvvNybLtrLiGFH2jb7WMZeNNfHY9hPsSowr7kSJe3rNeqLTeniwVmkhSNvoNvn4tZPq9uQpf",
  "key9": "4MDLT6sAtRGTgyLsX2ZLSPEg5DyDG2M3zthQM9ZvH7jzVZZ9kvsgGmV4Uhnhtn1HCkHwo3NZTfxMdpMKu7jQDNRu",
  "key10": "4tWfYsXxLN8ZdfeMuh59rzeZyXm55VgMm6zvhJ59BhUUSEzcA7FauRNa17Cb6kESW2cPopffXjemybbfg84FyYBj",
  "key11": "PtDra4MCYEwncGuzVWTaFsjNgYgQ9NbnwPLqPYG3e4SY8TRNdLiWUPb35kU6ZTYgtUMHR8Z8U4DMKkQkUXvgs7c",
  "key12": "2YZ3FN6ndEbzjdv4GFjmwixGEyHmTJf9RqRgEQ6C4oXQZbM2ruBLsVzuKDrnwrsXpLmbtucegHtSj2F7pmZCvMc6",
  "key13": "4AUA5Ao1o5jHzhvFxErJbkFosPi42ZzhQN5hpXYHjKCPqCAMALcyywxC6n53Bd4zeqR5332pH9xvqjNPBh5DtGc",
  "key14": "2u1qRsyM51p9dEDdKxQnPE43wv3piyqhqXmciVZtnXwix9HVGf6AYB18KhLUrnEfD297hc9jVy8BQ9keJHRrSPA1",
  "key15": "53QEKjHXLw7b5jWUspep1M82odwekQBBVMH1wnzAtoa4QneqbtbQtFfgLAX5CGkNLyoccsmT2vxJbJatZ15ZZPtu",
  "key16": "4sNWKbpXbk2WnRCjR15A776gSwHXFSVNfbgMs8ZWRxfgtr4VbfgfmoJDv9qSgHMDMZqtLVfppXpDXxiasvnMNxHj",
  "key17": "4hUwvqbVvLvLfue6nfzZ2bemNXxzDAwYGTv2hK3mTTebriixDAcRhwFV9GAYDEZA6mMbFnAVpApH8yeXPhA8wouN",
  "key18": "5VNoRMRHkSY7WdQfptNwo1RS7cKixz8T45767sAUEsGp5gnkFCXFiXz87edikiQQ9qXhrvEwv7FRWBtgYQ3ZgYXr",
  "key19": "4Q2ca88KcGbTcLqovyw5bYUxFKFSxsK9DNCgHtH2WZiiLomEnA7WvcZLE6ybi5HMGQcuHAcFsAUKJufNfAMKz6nw",
  "key20": "3pV3rVUnkTyatPdVnyg7Db7H14qLnmUPmanE8xpxV844CzL9YKr86bVGLdhHvGV4g5m6ts8ycvxikSC1RS5ggmue",
  "key21": "2tKcDW8eDvoh25J3HTm2C8G6mGtAJD1uNfMCh2f2aw7nC1yr2v5zE4w3VpRuFWag6qv3MKooAopzTJxN55XHVkzf",
  "key22": "2RnSXkfQ3mQSHggk8N5PsuCN7Pcns22rHRGoD5vomShmQug9omHrhAAbD33H8vZehPhNsrzHe7nqzndfAfVerTDt",
  "key23": "5gYU3oEt6C1K9mqDHWjrFvByksEN6hHAFrDNyXBxByQA4jq9rYkGGNfry5y86q8UnPCkvNWSyZxo9y92aR3jAmts",
  "key24": "2f5RWrwvckyyNqjEJb42sqw81paD3ryNKcfUViEwGjQADYgaPNxA3tRa5FQReacEVvZEcob6zoAG1AbajU5Px7k4",
  "key25": "WVgi1FbzRr2KjpjDPLQn2dPhZzzR3yRXFQEP364RG3GkKAdg4JR21LPYMBTCvJa84JMNvcyqfnBF8WF9sN9R2X7",
  "key26": "3Xp9DMgJCcXv5VSMz2hjHRf2yDjkgkj2Wzn33Y8JyigqBtyGAy4QsxoPoKzHHfLqqFkCX4ToqbSjUpL1eMvFW6Kb",
  "key27": "65dx9x4rYfF9CjmhZsLXLAVGtHJqj5XGeDZb3abFgytpzoDyavQK1RzVxJ9Rku3ywP3baG1EgWNAXuLRvCLF5kTe",
  "key28": "HFNW6RbvXCNJPSD8GbYM521svhx4dNUe7Rq4PaoX8DMeoSFjrrY4ethVgbeHCuMvBLejikvEsdUxvLfck2pKTsM",
  "key29": "wvrpHnSWMdozdz6x2Z39LoRViG2fJJ7QCdp2ctmW97g55dGuTfGUkcyYCK9uSHx8DcXvN7dCvfXhE9WVG6qAY6K",
  "key30": "QpGqiB8GCbQGGyMEnoPHp1p6MfwhqviKy9ndT2VNvxgjgfPRBjeS4EpDQYPv5nTx8qvaobAoKTnzMGuPmgEnzUo",
  "key31": "3qkwsyWnaYMemhY6QKbpegJDt8T15EYUHxmuY1fmUwkemUvHUuT7rprQDLu9T86zXXDkUJifNnZVc7m46E16vFhv",
  "key32": "5DmypGY4rxWdgFBeipMFQY6EJWBgggpgajDooKdGJz9UyFwQiUUpN3zG6NKVWYyiAkSptvKbr4jyeM73AWSywebp",
  "key33": "4u9ZW9XtAo8bv3gh3FoUW2mvPGsXP7P9WbeFC8mJ9yxrVmKGRiA2CtvJ84vrfJrJuyZZ4Vvufvw7atQmRutryGtb",
  "key34": "3S4Qr3RCVgionbJP3o2dT9EPbimrKgwXnbuWhJdmv96EMYTG9e9fR8tuLxmcXkvA7qxjLSd3WYH13hLBCZNcXgD4",
  "key35": "9fRDVQpgtiWsKF1pgMkMTDp2eA141QQCGBVNeyPXy3NF9uHGiVb1Mjz4YRXSqU9GZCRJmHph4HXxRPFGuNbWwQU",
  "key36": "4SqbPrBcKpnP6BGZyc413VuT6BEGqDsDvK8F55GVCU6czPsm2ZwrTPMVv7jJc6p2A3waZARyK121HMbWemspMPsq",
  "key37": "2Z1BUcTC8vmZzuTebFYvEZQWAP3efKbkHGNsjgpB6wU6PwcxGcoSsiqEcYtqS9bKcPasTLTR48PLRYJobYqJ31QQ",
  "key38": "5PDZoR8xC641V8dRcHh3t6tUKAVvHoKDDRN2QPoFGYBeZYQyfTgYKYCpQjLcPF8zDSMxQZdVXqeTEPE7iaRU6VFY",
  "key39": "gqmJPed7MjYqzrKFh51TzsP1s4RRm8JVzUZYMmqGg1RtY8Wo4RgPxdd8Kyq9yNxKa4FJejJW4hAHPSqthMsrMjs",
  "key40": "5fVyLxvgxZCCzmQ7oUASHpoaWfrQMr3xxwXvBGaRMBJk7PjDyNPBEXub8DM4bzhDQy5sszvVPTFhJn8efsVoDuaz",
  "key41": "3Er48XVMJnZgwtMvdVu3uJYh8XeKKfBgEq9joM65htysP7wSecnN5m6xzj7sAP7C3utqxrTW1CMGSpuU3cAas3YY",
  "key42": "fLJnyvRpQGBfDzTZrcqC8JoehD2nNh3qH14B2tvnnv4rYXVWzdozA6kn2uvWxTjmpqXPmLts5wvXuphUByAUk4v",
  "key43": "3tNc93SqraY8BeRtLJkzJhd4fujr3AANfHXJyV6tqVWmn86w53SgkbMC9sorP2Wj1Z1LsiqnHeA96F8znhWtHwXd",
  "key44": "w3x3GLdUbrWrVFazzCM33VyGJ3NbobJUJxDdEMeznxBKwEqYEXnFQ99NNTGtH5KdZ9hP2HCVnuRGf6CpbWzHvKF",
  "key45": "KzuB4rYPQtLt7CJgqh7tjBvv9dk32roooQfNEtFDKoTmVoamLKaY96CeaphLJKviMFpY6yQikJh2spyhSJwjEgC",
  "key46": "4Azrn7Kw9X75RmSujzMWXEsTJQpZ4SwMv63be9uaH1fdEs8uCttgFuHJ4kMoB2cjorER9h2RhhbvHrvGAWcYuExf",
  "key47": "5K1JaTxQ9BRCV1UGqgZPyGJcpu6rNVDSDkAaCyzEztsTeggYz57GnVggjrmMhtNJDydYghaMs6PHtFXttzrFu2NZ",
  "key48": "2gf7972t1FZzsrMpcaKpDk2KedEwf356Gcs8n4Gm8hscnXAD2GFWEPLSJUZRXbPfNsnZ7f2YH7pGBhSmTrwLa438"
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
