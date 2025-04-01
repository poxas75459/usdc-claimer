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
    "2caj27E2xHMEriWkEaAuMYy2ou7977nWSznLTTyzmv5YNnsBS2jn5ed9n2XWcwccdpzKsoeL81YxmNP45GeH2qkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25sRBCJa2M7wmSrtBnMGJnTANSCzT7ajf7vzGL2fwxBmthhNY3sVkXqwFN2Bi3PMNXh5L36NZ3qLqWXftFWNR2TX",
  "key1": "4Uo2uiw3w7N6rJGwVdcM5oYf788Yk1YqATvtUBR3eRkn9QKs4VLeGYKL4BLrdDfCjtWTVuyqpPmJqqDvrctMQZoE",
  "key2": "3d3aciTSUtyJgJPPQ5VszYD9PmLaFAz1n2Z8zPuec8Xv1dinxptS6srEi7j9V1VC5sv9E3TPkMdh7Thf1vB4272x",
  "key3": "4xTnPmLzWr6KzqJVxLzdHTDnkPTGsCxPbkE13FcCfyMpm67e1ujWchJioeMXNu4CshyssYac2fhktRbEE3YPmPqS",
  "key4": "2cWr6LcEVHhnNvoy62YMsfgcrArhKhCEWEiRNFtvGHon1CRA6eT84cBPbN49a2mevLHaFNZLzd8K1WgpkNrQ4XFj",
  "key5": "5x8pq1xjSwXYCtknApnp2vT39PSMfzCD1B9BJCRvxeLYdEyCzM3zNa8AsJdzR9KSpi4vTvYvj8ZnB7RYYYjn4iPc",
  "key6": "wroVjrMTEcQVqzhHR1BmgXhPbwwCFaZr8EZgtWkpXHxMpVvFrqu9Py6UndjNtrXxte5ZEuqUcrMioAsY1LCwi4G",
  "key7": "6RW15SdNVJnsFjYFVw1aJag4G9hoZouLuDVQMFEa7EwFBfTLugGxSFj57qnYqtBVM3N6yJpa7wELmeExEAK5VBF",
  "key8": "3izxNadTHdGyhW4okhAmjXLjSb1qApGP4ZPugpFovw4Nsd85feGY8NTB9NEP8LaS7yEGi7x74g6UUqANE4arc5ko",
  "key9": "3Uok7Nkr4kQwEFdMdDapsHCzNf7bZRdEE9iY3jaULHH9nvKLyBkrDgMJsKjHrPQ7BKA1RqJSvRrGUMmaPPpBi7m5",
  "key10": "4m1LBsrfZWio9TU3SV9QjCZ31nKj4PPLyfaA5zZrfT3fsbFB6YNM5k6DS6qEjrAjgzi8ojAqKM3Rro1NacS8oVQV",
  "key11": "4HsMxH77RUzx1JeqggJKXhyULEuhSixZqecuGWXvZtcdQKTbrAd9EU483eYSy7n39vk33VWJ7sX19CjAEC8ZqLUQ",
  "key12": "3r13Hoejn9k3T53mP1DaDi6dPwxdiAXEnVdAaj8LBGvq1SSNEUYzQhLoBEMRD99BVqPBp3eJK3aooDGaGd77qhL7",
  "key13": "yq7hvB7Ts2LFjiBH4Uqkqhhas6DV3th3coicHNDXApyCCfieS6Tipz9dcnCZqwKPXoTh9Bq9P1DtV84onrdkmh4",
  "key14": "5VtZXPqNnQG1BJCAgqtdupR1UmACMdD2XhW1aAJgVRXkQZUFut281y52MCbDLguTBniiuSjRfrCgC3gxTVnXGbkx",
  "key15": "65T26TWA3S7e7zYf4mMDQPDt7oeo4n5UtSfhQpMYbx8DypkKMnU4SZEx7Ncj1qq5em1mJKgMVswqecBcYwsCTHqr",
  "key16": "66bJdKd5DGQkVRRi2m9p8UHnEmUKq9MAFFJxagjGC1kHfHEctm1GddjKSmWVXvtBGoxWpLzqvrsLB8ovLgQiQcgs",
  "key17": "5uCKBFzvUffqcs4jd1egRTHAnhyvMj8P56NJ4YNLCUz2VSdZhfvBQcvpbQmfcggQ6rNeRd9Pja1pFoXGV11meZQW",
  "key18": "35yvyfT2PtMVkAG2aW3UmDD91VrAU1PdRkTbisqdnLwrRQ8H5NjNbx62QtsWFNNneTJjKJknAtcUR1hQjGiww6mj",
  "key19": "25q13GMvpKBGhX2mio6hdMT2Sr2ZtjrjLaoTMKukh86A2DHJeVTZxwExz3h59LDnECFQYoppneRBtp1Yndcb8zSE",
  "key20": "5jqe8STEn6sLWBoDky9FDRwaYEAjP4BQPMpy5Ke3NfeCBnddp9E7r7c2JPZw8VW5EA9yYQD6V1VQDT44dsJRk7ER",
  "key21": "4dcPScXAHygymHzw1QydbTA2Lgv3Qp9GnfGiurgonR8HCyUi33pMNTy9SEKWCJnggMejFScm9qEBndwe3KiJZvn5",
  "key22": "4p7g3vUMNLE4YJD2VsH7kmm7pjBKwJi6NtMVk23z38yukvWsMNDeqre5y7J3hv2zjn5bj37WC6af2eeF1oDSuWPc",
  "key23": "66m4C3KvQrQuHGNYDXQbme4RwfoLY6HZSe1jj1t8LBGcxeFe5jRXedHmZXWVpbQnp943NvYQa8V6gftrpuwdAwG1",
  "key24": "55d4T9eUbVo1ZQqHRFMoaPf8Jy3tHAE3k5m3ks1uDXJkRgjdVjnjgYSjy9BUvJFzues332RrrKsGkp8owAZg9sma",
  "key25": "411u3gSXWuReXqx83qnZE9oQXQ9GhTLEU9muDSUdTx8ftihMK1sVrJgZnvipJUCQNNLfBGUhNjxfewZwpaRXRnQ9",
  "key26": "kyxYEcRymnjRZx9LJWcovc3FGhHvTSDDCQ2amnev5odS6MLHxRbjAJFv48YtK6K4Jq5yVp94FL8cNFxVnTm6Cj3",
  "key27": "4VHfNWnms6XVLDiBpgiYzTze9Way8xuvi5Kck1Rh69sDnymQgf6TjuHaLXqAL7SU3DvGW1fcW2XBUtcjNbjSJhgg",
  "key28": "21DL66mdDL7sN9fFsZHpUG5CaWgotws6Awm1h4DHH7rjAZHPqdMheX4HnGEwLzkiSsw4r8JW7zokL3jjFZv4CqDe",
  "key29": "2oa3z2eC7cMQs133awQGAseHu8QwhCNHFVW9gg36DW9q4Mx4Y9kjVDuLkBHohQQZRUbjhqViVn7ZT5fW5gwboWdW",
  "key30": "24JAQAmiWufNaZvBUojvKRSqEEeVKqvMTTrz8NKfVoyMGC4N1Noq9LvKZKPqxQ5Usx7vgocFsf562kmVCn3grFAH",
  "key31": "2AjTqYhHqhSzz9vA6kwxovT945NH2X6poc2RZ6tDXsELdd9TiL36PiUZPCmhMGAgMokYrVhwktYDLiYfi8RT3TxM",
  "key32": "4VwuAJecZHrdnNmighFrYUKE24xN3CW6RKXWXdw6toovqGM63bLQjSyBg64FQhx2Er17UpQWz3FaGad9LTyNxJ5b",
  "key33": "5MLFzRpazewUXUNWdinfzqFnpKtwHocSgWEz5tKRz2J3VVSda158MxTHSbxbFaBjaFA2HJrZUBJM2GkGgAgsAbGD",
  "key34": "27Sm92HP11ECTuasFaFfPLM7mX8GAfjcW8xiC7GiJwh9jQrSjT2N5q5RTZERwYu9b3SpcPpVvGieQ1pZCpfdF3bo",
  "key35": "MXp8nTqNbeHMWZum3hHiVYheXnRn3SVNkH5WPRwTTEkuHUajrqVozTuXyUpD7kNhFiVJ6jJ616WtYqFaNnAsSJ4",
  "key36": "KwtCGB4WGTDCTZ7UsBgDqiqp73kbJtyGWv2ykhryvURGQ2YEhDPyWjzxGbYXwrPBHfLeSHXj6dgMzb8rxb5zdHM",
  "key37": "2ehGKTuSDGevRmG2sDK4tXz47XB12QcLxBF6m8EysW68mkcyM9cEQVkj6UEJ562TqtMeCs386CesxY7Tssbmqi3t",
  "key38": "5Kg7e4YzDqDRbhRvNmW4QyBBVxuCxQgYA8xiffyZ2uht38yV3bYGDxiHGVy4Ne9PLTKD4MJG8MNCjkTL2F4NiM4r",
  "key39": "iypsMiArFFc2ZZev5RrDnKWMZQLgg8ZCq1JLmmDDWY68tyRBsoKYF3s4XZ9xAHpQuNeNf2xujbj7he93bxhg8ri",
  "key40": "5HaK65vJoWviwCMaKUicDHAqe4qBRupEsbJyCGueWRna9THHCodNBZCaaWWSuVLccQzRJS56gy3LbDNV4K5ZbRP3",
  "key41": "2rJ8nwigSuiT4c6PifHnxvqMJJhR73hngSHgn3JG21BCJCifGQxGbj3hhyygSmptGJr3McwGzWqWmZ25FGjkaot7"
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
