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
    "4jyRYnC8S8Hb9SSatyQqqPT1YNoUfgVV2Dd3zTQfNu5PmjvrK3Jtuyr9o3fwdfSKD4488janjJKY4PxFajkKFPyT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgAHw4W7s7GNuBW48thEoX9fkPiEXpr5bpywrr9ceBVqQ25dAxpXNhuPETjep3MH8UKtNcifxmsHF6VNmt8mHEC",
  "key1": "4wPAuDrwAqdTCENynoKWoFuDK6YsMKcG3uk63DYSBiPQuBWLQP7w3QeH3UQfhdBwT6xueeAiyL7u5GjRvPPsAnnG",
  "key2": "4yJCPKNU3j1ZUt6F1kHcxhGePJ8eQ5AdbCaVz3cTFbC3GVhZJFQzcUmKwNnPtyh5bew9xkpMNLV4YTqPQ2tLe5sN",
  "key3": "4LyT33cxoC8QJuQVmTmiBafCYzw9rT1C5pbwrknQsCNs6TLR4bsGufwZnhmQXHoPut4NMc5zBphud4FyGrfiF61C",
  "key4": "3GHfSDNQfJqz8dfZJPXLpGvo5fp76R4uobUzsTqeUBUzJKiqYd9S5J8FGWeGaHwPxijERdnRuQMVboLQ8eUDE5Vs",
  "key5": "3yd8FqAudyC8BA21C4WRBaQ6QYwDRG1E6PkgCSDXB99HEMqqHPNrp4z1pxqPRnKSWkSdyFMSXqWYowZdke1bW8dD",
  "key6": "6azsjCTHC8QXrkmBTK8vsA5dFGbQ883zRp8HuqVYXz4xToCDpqCpf33JzbpKcoZULRLtoiW1kQTETymYzxQpLvL",
  "key7": "4Lv9domyoF7aq6cgLQeppuJAvRE4wdwzD6FxsmZk8cHERArRKooP6S4KQyx7puNsUrVX2v6hGYXVFhE4CiptEzLp",
  "key8": "v8R6o6jbtnqvynLYCvt6Puafbj4U8pnHzdr2fEJh8JcDQNtCCYQPQxu23EQnuBDGnAEE2dxfefKFoLgyTeFQQN2",
  "key9": "3Rs5EcqYPuKz8HgkgcDJTLMoLobuyE5nh2Ykufvqze37kuGpkges16eaeEYVDTjcMR65hd9MRG9CN5kQh7y1ztmL",
  "key10": "39mnQMb4VpgES8qQmMNnTyAweMW2V14K2gKzMsRUWyfT6wReLuAaPeg2gbK8zyxU3Q8e5HQjtYWcZVXyppY2PCcA",
  "key11": "hmGyFs9PQEeasxWPhuCweXo7Q3hYiRh8RaVF628cotWQ2UKb4fji4BpsGaZY3DMXEnXMY56VWiYrJX73y6t8Tfg",
  "key12": "4WXy4bnqPosb3KqF9LTgtALcZhaN11UU3pJG3pQEFDqVCSPtTj5DJU8CMUzZ82pNbDXxtm7LoXcKDXA2XkzgtR7h",
  "key13": "5EUuQ81dK5CgqhnDsgxU3d8Qg8uf3dcW62UcHYKiNmqw3m2VDYpYKQMPdiao8VzTDSu2GPcTejzui4castuo1rCk",
  "key14": "QF46sQU66jMXHq4W3YSPaqxj5sK7f9U8npDkZ9EtXjQMMLoX8cQ2ZERyzp7s7kamMGJAe5NNH1VSRZi4aJvotZM",
  "key15": "5zfMukJjL7EDu39p7oTX1QtrY2DUWQZAkovKCcMEqwhJBYJhzJYoGKwvk33XcpPhinpMttMHfwrjDvwJna4swm9U",
  "key16": "4jKR9NHqfAoDJa9bAEGwz9EfZaVgG3Xfx5JH8RU3peAtgdknsmgA71JwUSkxMz4AiejtByft36RQm7vGJMPhA4kA",
  "key17": "2KDHsLfgcs3G1hVkhzqo2h3f15qEhR9iNQBM8zNgqLjgaqkSnknqAuE45d1VTUah6cBzTWQrL4yPiER1qULAZm3F",
  "key18": "3GpaDHyhBKwXKREkYRMHWooK4UXJA2wAmZFrvV66MRvnTFA6aC3eaUUFynFkVJfJHh5yy4ynTsftMoAv13FZKyhM",
  "key19": "3TfBCotZhbcQVbLm6WEFNbWodujEY3Gd5ZDxyeePMbbBeBfweyaAu1ojBHPdzehf24ppDAd6WeYQgzCmbrA8pv5G",
  "key20": "4ABqHGiF7eQzrrvJZfi1Gqbwnke4F8RLJbXGSNAui9HQJdSxAJXUgEhntj1gnjR844yWwxWeRg4thannPJHAxYWS",
  "key21": "3QFQ73gUWcwzN7KjPWdGFxUUPiHffn2irLbnUczptanVitUoq1hGiiBk5Wqc8wnH6QiFps3yYJh45CZ6LeDFw1NW",
  "key22": "32EkohhiD2zfTBtFnZnFtZw9KWcRzDgjFasv9V6TtaUhMtuXX7roiKfNSfWnwE9CvYkrSUuE2Vr5LgfsqFogAKbL",
  "key23": "44XV32Y2Y6hX5T6iUxM6z2mUHhGRcBPm4bHM7ZEqgHkVDB9Jb2s7kbXFUq1SgpQog1F8nSxNu6AMbJLRMMGFcAGQ",
  "key24": "4cVfGiwAJCHXNkEzBZLH3e3hMxbEDck2sWNqt8JYsEqgSFF1r5ucKDjxWaL17bFHj7Z43P9Pwd4LVkwz6rEp9XXC",
  "key25": "4Qf1fJ3HPgozejPqFHnBRaVeTNdTsiqEy3NJ5ArUdZoGM417kJTRLJSe3dAicq5yRmqrpMw3dQA2jMkK6YztrTvE",
  "key26": "2LXvuLoo8ze93G8X5a7RhHFvvbfh7qxFgysvtrq4YSbHtNAhZtNXJLs4bece3C1oaccG4bTjgViciYRXp8nH15PV",
  "key27": "2nc8PKKQXtCmqL2wC2bk8YGacCerfzGQz2bE1NBPL1Bp5PkbA5uFEQ6uoqvxYrEjWr15NWfcPEN298nLtKaaK5P4",
  "key28": "4MERd2upZyMWjtYTbyv9bSZvEQUmVvEam1VcpshrQNtps17MwVXmgaWPF7DyBZ1MS2mXSKX1YNC2mFnvz2kxqf4k",
  "key29": "2RJB2g89rCjPJ9Zc7R2zuaZYioAhFFCXRKxbF9Uqu77maupkiQQRRWbrBzF2wMhoVb76Aban21g45fFZwojjb7oS",
  "key30": "3PiD3EpeYahbix1ZZnzWSa57jVMDZz9ZQbP3wqZWLBeRDChqbfTRFcJ6imcZsjbBx3siGdMLcU3cbYQqcEoXkMeN",
  "key31": "5mirZB3qZYj5U1jeUs8yJ3Ki7FqmBVgBjuroTJdGCuw8pBjZ2y1pD4mKFcNmZaemM1U2JdUV7vk4d14qBUJAmHPD",
  "key32": "2NzF4g8N4LQZmHuaRuyp6mTk7SGGEXhB6mLEtHtMgFdw2wCdNpQM4YGMm7gpGxDGVUeKg9uN5N5RTghmRjnAF8j8",
  "key33": "2eg4EHrx19vbq3uWfbLHvR1t2FNuLp2c47eyEwyHpn2FZcxt7nyXvz6tJv9AEqWKQ7fjG6Jra4SMQ638Rcc4QnwD",
  "key34": "5xk4qQjX9kxAG7DHJNSShYomfxshPU9yQGWCFDmRvej1Z8UZBxt5fmU3GjC7AepDp1vt9KCDB2pcuTAtxBSFbgJL"
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
