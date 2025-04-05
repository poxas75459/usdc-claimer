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
    "2sd85PFCuSzhrordLKyNgrrLvEpcUoA7HM4vRAiYEG3oovvb1WUhvrLmSNE9TZ4cbVFuZv91KTTG7SFmpCoqL6wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gGz41VjYGq445Qzdcdy8YJbnYLgHi7Fk3zdjNWNLCutUUzFTdmgbR7rKYE3n98zAkcrqamdbycTzEyWQDWtBmzK",
  "key1": "fNCy9A2nUyDoeuM31stQdrTzyxuZDUMw9Vef7aBKt4DLWVvRB1nAq6A7fN9tJwkq5FxBqT2qHWyjEhY3A8DZnzG",
  "key2": "PKZ1SxenMV7Vk17mW7rNv8x5rdQd4RbZUA4zwczvjBX1QxspEShMwXWNhyTCTbMWjn9PHoSvjeph8LBEHhx5tJC",
  "key3": "5sBUcCS9gdg8aoM4t3FEEv3fd14eVtN9ziKEf9fgJYBWnUcktxKMEoGXYNss54tyXwGsCut6vkYqeFQNZsmVhVq5",
  "key4": "2um6DweY3KmDz3Pd5UBbkcNCDKnSzibM5zZbKoNwka2tceFAL5ogrhqAXXxNPW9VrCLp8ME5THNDLAEvLehyNYZX",
  "key5": "461YLAxW2Wn4Na37gF9oCpmsfqBLSsCJAq4dMTA8AeqccdAGfQxe8qJs6rGwTGdpLKXvS9wD2uvBxSKyvf5WnwMx",
  "key6": "4oUzgGmMvh22dQoamSfaqYgzXabKji4hRiqjgVYXYfdvLu4K9eQ7QwsFYxrTZhAsSGKecFQvNav5daZE2LqtmbdG",
  "key7": "26K2RWJ1JqxmPVvbNi7RCcQXcXXEYttvp8mUwW3L254KoD4pyD9Y2hVePYmpiHGPiCEG2gKqutNEapWZK27s4uBV",
  "key8": "32ctQUsX7ehL1RgE3NTyqb8rUvTbdKme94yhDsJtTWofJns2pFaXrHxrrpCmeoBZUDxh7Z2MbrSUiHnqCwZYHp3C",
  "key9": "4CQre8PhBnCiYGpSJGW5EnMNiRsGoDENsu77XB4Unn7h7DejfHJ9xGUd32TeaKPvCkCdgxYyRwX1eCQnEV9smLj8",
  "key10": "4s8Z3uAekW8RCLW1tzZoCJeFm3aksZeqViexwsqoWoVx1TTN3cvRmkv4MyB3PKo6BhAVbC8VA9kL3ePbfZEaQnkG",
  "key11": "4cS6pJS4Cn6XpDH9jEDQzBa27953QG259WPYwfBnzrvBcVMtnkaTppoAPqTBGXARAT1KZgs5KkwYY8RXZeE6FyAe",
  "key12": "5CGsiArstVJrCK6JyB8u8DYN9jZDQBx9isijYDogzdgxmAKuTwDi258TPBJjDzxLw3Z8JDEUTNYcUJGMBKNrtcVC",
  "key13": "4CccYTvSS6aLb9RoeJVvmmWXBaX9ZrQ7QsvVj11utRuCffkUEdfrqoHwUDCNA9G2MZRmRWXrhNx4PZAUtgko9EYN",
  "key14": "35JVfszw8Lg7tGKHYKqLTfBnss52nNeHbQUGU8VthjM5GXd1LFCW11q7QZSGFgc3NQ2QCYoE1AsTp6mnGQ87Sp7x",
  "key15": "4A35e6LXBosNW9c2YWvZU7seuXyhj9hEgVKGUTavmHKU1cboKs6qAB56Cqk7PT2XtCCL1FwiJ8r9f3txXTYZ61be",
  "key16": "4RS5foakPKtj3BL1sgaSRKbPwG3S8XSzA6ZfuM4ni3GT6jdiS8B3Ef39dMmowmPzYtrgikSkzWvCfr8aRFarzF6i",
  "key17": "sHTExMZTHe5d7WrK1ePrqGzN77wKT738xKbac7CwW6nDZ3W7543oaSqR78njMBtgJRTKctRjiK9rA8Axq1NYJ91",
  "key18": "2u9khRij5T456PBqWPEbsAw9Gr4iEeUawGY4bd5MCXUV3hetkPQ518ziQ5FsaRNhV2WzxgsYp8W6DJzpNwJqjKrQ",
  "key19": "3yQ9N85868ZB9wTUkT5j9e3Kg44hNuPsjFjg45RfJDnpmY1MZphhcRmgTHArGyDJ7SzxdyPZhxJrJex64PwvjeUk",
  "key20": "3m1FjnP65NrNefJwPERp1HYHW8Byq1SRwvi2c9CyWMfFCEDCU47mruQdyv1bDWxg53oMGF9V5KUZ2tbaQyqvkoKe",
  "key21": "4XH21GdyTETQtebMUg6bFguPjzLmXdPdELqnwtgdeV4HaY92RpSrVagS9SBks2oxA2UqrayQ5cwA8uscV5FuM7B5",
  "key22": "22kBwWoUATsvwfA7h2ucqRUpL1YCxBe67sEeEsZ2XUheQQThHAHCWF9ja3VaqQi5N3N7FQgZ31gXXWQUHtbNssVK",
  "key23": "2xt1F9u1x7xB8md9gE6rGbiYEKb2buXQwWEGCT85bmttcNCVSwkQ3yHUhgvcHEwkQ5xbfFqmokZnvgqiebNVKxPM",
  "key24": "2XHxRX13cXN9deMSHfU5vtnYePnKdhULRkadYyndqNhMzXa2LVtE2i3rhp1seVsReYxuiQYie9uXPU7me8mkULaR",
  "key25": "MzgxU9y7EfKxVxFDxs4LazZFd2u6sLTkezorwLfwwPf1cT2PS9FWxkFeHmAGVmWTaUhGNpW9JzAnW5LBirxjwPZ",
  "key26": "2d7yDq1cp56k59P9r2gKmXS61WuhRJu2GGZGYnFwkHyphieRLdLFnQESA7t992JyAffnU8y6K4Nw3oPZzSb6rpeU",
  "key27": "5VfH2HRZuPq9zrwi35KVGCGwRMWfxL9hBuiZDbr61HLb2d2aUX9HdmtxgnxLb196XBc6iQdFot8SkUEpwstefQXa",
  "key28": "KM7PDLUCvwi2xCyez7PmRK4JE8qdaeEGsHzJ2vitfVGMdvnj2AFUGT7SD4ovEJXdHCYfAuuhcA3h9JWkBAKBbu7",
  "key29": "4LXiTMkvBQMRRQrjEjuwzpZ6vsYWmgDQGCmhdTZScXZXYkPkWyAugLiWQcVNCXocCeZ8uu6wfnmvSWccm95Bszd",
  "key30": "2P1ZQwrAoevyTp7SibnNpLYgsHP6zaJ36BDTbSTxNkuDWpGyBfJ5mhdkRGUGbdgSWAsJVdWeT98L13iMipwgVbTx",
  "key31": "4n5mj6cVBCpQUFJ3KRzUgFjtfz9oqBGg2jWxa4T2qtuWbuDz7c1KGeCKdxYjiKQTxkWwm15azp8c46AeDfB3BceJ",
  "key32": "249E7a72VSpu1aa2muwPh8e1KsfmpXB8iUXLotX4ScVzvXKmyhmyWmQWxmNCotLdZHK851i3rrx1hR58XjCcnUQv",
  "key33": "aKjQsyqZXv8ne1BsSKCAX68osUk7YYfLNX5TnwkB9UNpswWRgTh7sMUaaQ1hqqDwjxAh96FoqAnCXZk4cbimZvR",
  "key34": "2uoJHV5zDSywFNbXNfR3sYZJnFHgPQFmeMbsz69E3hGQx474nz7SFExVP91r9ykWUqA4V6fA7MN9tiHzvL12vNVH",
  "key35": "38uFywvw6Y3hPhASbc9vgevmpPVU6YQjDbJT41oJ5ayQJxrLKzFL3XQAjaSg7YxDAeamHCeWtQKWvPgzEVtxCYya",
  "key36": "Vni68DjFLwrz4KNYQ1MeMh61eg4iL5cKFod3dPEhXBsbjgW9SULnj4Png2H1kwBsbcQK8m1Ph3jZMLfBwdVec72",
  "key37": "4oGnQ555JkGZgAJhXiRdN9vZqrbzqEsDwDMje3NEpDaxSyywHG1rSR6aDDwAEFEMZe2jLvqAQVRNs2y7PN1JzeGL",
  "key38": "uPdXo1t8G7QR2Ynb9Y3dzdggovegRT4gAdjJpy5hbA471ifvmSiWUtJveEFq7ZRmHnE8YJfWdnc7paNAMQTQmVt",
  "key39": "2eqGqvJ62qkr8n5FyyeFENcCJ53TLkzbCB6UF3trFgDLKfA3djZ3PZV2pDYkYpgWHKYBXAtJy98x1Yg1D3nXNAoH",
  "key40": "4qHv7J8LRJZYXtCxZtA7CXmB2EcXR8BTLapEe9ih66D1FR2AYGc4xt9MD5bNLXysBuqYDRjfm9o4zHwXNBcRBnDN",
  "key41": "2QRqRo5fXAebc39iVmzFDq3je33ykt4cgjW5RmQv3MZEA8rnmCFvN2hkTNmf3RmtVoPnwqTpUHPVSdEwqQfPUeVH"
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
