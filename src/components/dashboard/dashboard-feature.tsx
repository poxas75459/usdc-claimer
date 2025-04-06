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
    "5G9GYgPqC7KLNNMyUTvLgVAKDWMdQBKnmZj4NBURphg2u6niQARbTqMKDiFycgssE71txkf8gY5u3YfdFh2eTJtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7T7XV8hX4mhGLggHMTNdRHHthWxUuVrPCa1ZG2MjVCc1PSDBQNqG7Fc7sGYZUq4JN2UercWgj6KQ1VvrPepeXm",
  "key1": "4VwcaeRH8ShtjbtCWEU5yoSfYjkhBn48BaiP1VwG3GK7ZJmr8TFSiYs18NyYv4V7UahPxBj2UHeAm5vXq3BdRjc1",
  "key2": "2Hh3urQMFQMJQAP6XzGUN88gbEVxCw3gDfPwpHVNMuZW8Up8pSmjbvpTbjUCkvUtBu2E1M8jmPSw5iriYX3t1rb6",
  "key3": "2MeVrLSvJGVk4sRbduJ4vLJRFjdVeC2mYtcp3kgfMx5X6iMM8GJAwQg6K5q1rtq1vq9WrLsNHaVi9Pn5HRJvDQcA",
  "key4": "39LTiRKGFLydVWUgCfvK3CRqASQnoLaLrDU7ZVzKRDtn3zzLkTLYGDNPcKLYn5YVBfhu1LPyx92aYrKF29PuaAjp",
  "key5": "4Pd5omaZzTsusTMBytQf9j6cuDMQGLdcHEb3nJejWziEzaMwbKRsJsggpVefScomNGhgH6ha2pBPGRYuoSgsxfth",
  "key6": "5cVw4xpyA3AhjDLU2U14ZTGkCWzk4tNk2YNZETUYm173sfa2PQS6kenJEXLqCNav31P6LVrn7MxAP9vwK6CPwiAK",
  "key7": "3UvgnnNpUd5NAvPNXfcVMNULpmjDf3QSXN2rypH27WQVQL2zb47iWPiyWo7Vfq1k48PnhJeNWsiTJx6QZwx7bhQe",
  "key8": "2kQweQe7FzCRKdST4QyDqC27Vv5YU7wrTXFRKpXRKcxZWJCA7RWaJ2QTx2Eh2R3ZAfdp3ZLFKQYaspZQhrpPfsYD",
  "key9": "3HfRv9oVdDKZq6XSkBCk3wEjB3bjQg2HgG3cWnYpVQPXSGVuEYLsfHswKFRikjxnHmKcoubaYZR4r4MhmAdBSgu8",
  "key10": "3QVd63tKFDTHYRvAGa4sWWgH5vUrvjiF2fgsY61PjJRv1KUpHYcuQUdati3F46TZNkC4gCzESDgkSe4rUViT7xgG",
  "key11": "673mKLDwL8qmwitFs7rgYi5U6GHpnNH5wJ1DkPPQeW6AuQvPsnYvECQHjjpZahijnhRLDcKXHpbicNgmLJDapfao",
  "key12": "5Sytzs4dpQZMoo6ra9LrgT1e7JWHNg61QJMxS9QcBxZGcyAqXraTnRDkZzJrJtDN66eUzBVFz6ZKt3VB71H3MSAb",
  "key13": "TjNGbm31dYBHX8sFcNQ6SjHesjQgQdRQ2v4iLuazLHEFbW6rCjVLBGgxS8t7EhjQHNWasDnrcnE7b6nbDxsMoRx",
  "key14": "3wmbWcbJPYapx7LVLzcbdwXUBNnGNfgPA99BxcGJfdT799uN9bns9wtEzN13hyXdEXcVjyQ1Ra53FoGZCNyV4zLh",
  "key15": "5Qg6orRpssoNW63gyFBPVcfYMPUiapJ9J6hro7iGP8zhibwG4RnqcTDKSQdDRC9fkr8asGwBX7Yz9EtEruz17NM2",
  "key16": "5spnVYHDdiTHKSZYTBHn7QT618nEU49huaSSfJ4y8p7YetCjk4efKoQhB6MwS3CFuLJC2xWRHnizQYakaW2N2F33",
  "key17": "25VqhPrXE9e9bjnG77BEazPo6XAfJsfcoUzM9QLd1sNuexbcWiBM22A84gt6xJUk63sb8zWnrxTZfvmzph4bHz3V",
  "key18": "39kLsLLPk8RWpp2EnwLBLoES2Vd3NNguQnBCgCJwoQtBd1sH2VKLZrVz5RFNXhQmSHJeiZXDsYw2SKcTGaCZ5bTW",
  "key19": "3W9G9ZZC8SLHwxJopK44uWd8Z4SKhUbsvu7Z6UVezw3LMs9d68PJ6793bLkdoyJpqdcYoaokyBs2p4fMY8fMdpxh",
  "key20": "5HsUHVPQ9HBdBQa1U7ZTskgycwfhs5voN6qxkqB8taHH1AmvgLNqb7x7xNmrCstWWf98AQdU1WgVZwvm6nrYFTMJ",
  "key21": "3UB3LRkPbevYZESdf6GmJoQyrufgqBrbdw1Lhq1ESEBpG9b28QYDfdRzxbv55SGF2AAWVs3jgSvv4hG6jYeHxiV6",
  "key22": "B45Q3eGmEXNout5rG3UFftXyLgwgXJuapFgwiBCXKYgckUtE2QsaAqrycs5HocVkLc69SJFTqQySMCgdnKT8kFg",
  "key23": "5xRg21Yqfma9Wb6nx3unzHydPtRru6u1rMjJCqaTJB9U63HmoZXh4vi5bcBtSKmJeyo9ubpEbwM9mcNT14GEfVEB",
  "key24": "4h66qvvQU8rHDh6hCGt243rWYFMxC7KsZhuPdNf2fxPbCWJN5XakW6d8aVNwD8jsYPz7YPMCfXoVN32EfkH9j6ed",
  "key25": "5f69jZpbx3Pn3rhfnyb7f9ZsAQyYayv9BjtAKFhaUiNf12MTaEMgXbxRd3UtBNTxV2szeAnADmAcB9aYyZvWRTXx",
  "key26": "jVwHVMNfTUcN1kMtxQbDNhRcUp6Zi557U6u3FejF9mhGG7SfBx6i9pdfwfgdUYu9yLbmoYxEDTtfa73gimvpmzA",
  "key27": "4NjHxMHc5EHFgx1ifVv9UkxCWDRTYFtSZPEr2UDzYmvFE3Qr71gEwxoKFyfmDKet48q3d9Cnvt4EYyZBRSVRaKFp",
  "key28": "3GMrW83sFYmZUi7GS2DBKk7V2XdYGooKiHiZ2d4NtxgcVbqPRsodAvd7VPXg6sak9wbYegLnZxj64XcGneiEYcgQ",
  "key29": "31FeopxBS5sbAV4xtqcX1FYKAthECsneWB8mC9D9hXpCPzCdksxWoe6NN7nv65Ga15BXkY3ybXmMGieTLihA4iMG",
  "key30": "2SFyiAEXNRjp5KtmzM1U8nApbuckTFZx3ge9gR6AjP8rEU4Ktc9Qrwe7AgF6heH4vfbWcDZYE6Ft6rwUyvy1E7Mh",
  "key31": "3qhQh5GYe7rE6i3WAbsdnTtx3ke4sQCRmTaGxmxZQ1UiML7NW1CzeMWAdJeDq5RW7tUHuhUwWYV42YRjHiJLo6Jw",
  "key32": "5t5eh4cKS1yazVNKCe2GopryBFBxmPti5fjYjwurQHWMwuFhEPDJ3rGZHpC8tPmRmYCL9W2NnP24CKLpXEasdp8g",
  "key33": "2xQAgVP9YTAtrxCBgB8ue87obVvG1VXuX5sDLfN5xS2wyysrxjzcmKk7wgnyX5uRzSKXcjaL1QZrsWSzRvdg6Q2L",
  "key34": "3s5Bj7jbzxjhzV3MxwSFSvpaY1HBwNcJDj2jGvLbsDnKmYVW84zEjKyfgc7y9GpoHKZCDf25EyXVZphELYdkvhzg",
  "key35": "4o85Snf2fzVgsCZzpWDXu2zCtnpTMYo7BBoVncK8tPVpGbJcXUbFrnaNajyJsBTP9n1tBDfrD6PRwCiMEpwhZbiV",
  "key36": "53F21mHXRt3aPrAHgH58TB1eA7bsMyjuSZZfPE1UNZpoQfBjxZEgNrEtdo7KxoQnB25GY437LqybUiUAe9dUMAAM",
  "key37": "66HCn1Sv5wMn56zWs8W2B3dsPGyfetdevZn29JsJbFMKEyszuQWrzigBrJwDkp9AT3udnfjrReeKCH6qpc1y4VoU",
  "key38": "4Z3upoPEUnhVnYSgFx4XkMZsd8Y9jJStAhyhVhmbApjdZ9RM9wwRTR3A5fWrh4hfi3cSEFnPb8bzNggjciLwBQSG",
  "key39": "KQMiLden6AYzaziyL9oTvkfLWUnRhGh1vZQdfdHaqUsWLzG8dMaEoLVvRz4RNUM6TskAjB9x7h74sV9V1MbEd7v",
  "key40": "3aJEXXEUFo9N7VtBmKEJUK9iojXAzuocoxtFCWMaWddAtzZ9d1HKRAd49sWDitcrroSAPFJrLTRmiwiYEDnSqu4W",
  "key41": "iqGJKe6nMujGb7wXejroye1XmodVkQx5HqNEFkveKxaBk6dr5bFm2PB8uXciALrNEYHnL1sN6DznCqQenSjokmh",
  "key42": "4k38HxZe8F1Mb9vbXpVQc2SCQscdNb6J2Xe56TwjsrVgus9zmKf2hF4wLg2BG5TzMfDzLB98SLioT3UCvyuVePJR",
  "key43": "5P87kSokBSpHHfVmex6jQgbfP8LyE4DvmABvyRk1Ds2TAfg4soy7t5MFZAW2ohJCo3eSJMZQBT2ncdw7PHWLFDPe",
  "key44": "5a5JzYLKkb1zgS1NpdocDS3vZiKNriveGrercZy1TamSnXYA6fo8Gv7Kecs9tarso2pHWX1KAu9SfBek8Ws1cqqJ",
  "key45": "CizfRSc41Uj7K6xUBe44V2ZKfVc5NN8BT7nxjtonC3S5aW38J8vBQHFJgKu55ECdyZhb5QJwgXBq4BQ9zrChHHJ",
  "key46": "4XAVGCctVKgCCZBRstk2FzwCD1TSmeVdsEM6H6M6TTesu6hguT3NG9RnqRfxFtFXrNZZadqTPRXuHHbaFNKJUCH9",
  "key47": "38oCayzZmJfKTiWBY669QLxtSywibsFTVGbWtT9rTfsvs2AmCCAPY32jU9Sc7VwFWF3oNtfSokVkuKGfLPk8Cc77",
  "key48": "4qCyRWLJhJcap5z4QRwXib4pASBp2xCjkLhVmBqLF2vhUvTdEcg584SBFLKjMnNEpBVLRxZVjbC1KMCSyH2gr1E2",
  "key49": "2mSYCVM6siyhM1mj1Gtfo8i1ushHXJQqsobZaBCs7amz9RKhTPivvnMEdGfW38y7DEWZbA53UbMU1VWFHzTQ55Fc"
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
