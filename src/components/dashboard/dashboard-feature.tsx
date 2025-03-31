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
    "ZAp8TKuvBbjoKWpMnqhtcMZm4XFwSQe2cVTWQvf9HquZjeM4inTMjqXFvDpEtwmQ9H4HyJdnenWXr1jjVJDEdfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PvSPJbw3ziXTd58QdkQpZ5F6Krda9WPgSLfGeNiUjrT4aubGuTXK6T5P2L18rwNyu2p8ks9X7wRY8yUDHhA49Yn",
  "key1": "48sFZyiLkQGcQEAmBkQaE33STtjRHTpoEGeAUgTUx4bdPCdCCd8TJCZPXwXnf1Qq5YnGCyY84bxHuZMcxoFgs7bt",
  "key2": "rzq3v1qqxnPqnB6kmkP92uS7Gsy9L7uXFjHfHxqChQk6naSSCoUX4uqXMBzxmVci1HCLjHq6wfzBnNDYvPQ1Pyy",
  "key3": "55cr1WL7nbwptbec8zbge1qM2qAbXBzKLHa1U54bsXHBCqXem3mkrkpQw6tddnsxkYi2w7ciVVU67xoHKv7fKbHT",
  "key4": "MJ4k1JQbtCCPozsGkJDH7r3DZfvmNDcSBuiSqeo51d74bnvMQ3FWNgrqZnPj3144HAV7yaRHpVtdTeXFKwC3N3R",
  "key5": "2SxM2zNH1nfdMYMfj2x32t5hgf2WMDn9qr1w2pDTomL9PCqpXkzkUps6bC2pEWmCgpsk3TSQosj5rKDUDVFiTvbC",
  "key6": "SXi6Jr2Z6jUbbpYFKd4aQS1moNiMYoym8k6PQ9FBRP9mK4myzynWZ3gm8Tn8MGbEksZuatdqa5TtuEW6LJhaM3V",
  "key7": "4EBYkumr4aXpddnZzEPwZ9mbadZoPo9SynLo3C4t8i35VWvusAyodFq4J5TtmRuUBFuPboXpFKotFnznJBftSN4B",
  "key8": "29fMLe1AQAoPuvnQV7bCWEVEvS99EXFAYvRi474DVjEpG5YiPw3cvwuVAXL8B57ZKpgQpAY58Xm1kiB2TH56GKbD",
  "key9": "b3XxgDwP2FivNLDiryt7u8x8uQEdCeVLEAh8KHRAJJ9yVZ2i4rpkmpLkqBq4bckhLsp4GBNdV6PTPEscMvLXAg1",
  "key10": "56cHXGwcVvdS7GdvrL9FdeM2i9Gf6pWmFyz7xBu6uKKvD5Wgbg6sU65knYPDza9EZYPLzQhdTc12HoSB5SZBDrfD",
  "key11": "33TyUauHhVirGP9V58nPPcF8kdNcsDA1xuUUfQffbgfACTKtEtzRTxRF9s5L4cJDR6kvwmarvK7gwxN8EbzN4uWY",
  "key12": "43FBpAH4RqBQ3ZeS3xA4cw8vhTsU3iyWLCJRkh1uzz4cBShwoFGNaJAM2zHdGn79ZUsLGaUM3jEUmy8sXVYt21Rp",
  "key13": "2ZG6ZDBW74FQDvjku88gYgmD12Qmz8goNWvyWZmTdMagTaBr2aP2aW2JzpMWnJavwSuReo44axvsRjYiq7iiv2G3",
  "key14": "5x1EymwZ8EhQj837N88aZFF57pLK8idKdDjTacdputiXUNsXCNXMpomUp6kTmWAp29x8o65Vo5jeehdL5yY5N6gu",
  "key15": "5DK6Sip52vyBAScxvQSgH4kcNVyGep7VUGFN3BCS8aXU9KLH21HiAFheuhiiq69eWzXdKmxfhNjzJqjDAAvj7QYs",
  "key16": "5pXrJfq866ch7WHQsrkjB4zhPuj8dvkUwTfaKmG3MecbZ9J1jJujWK1voVoWYKzYpJd3h6zvTxABFZEwY17ibX8A",
  "key17": "5qMR4Dz1wo9GBwBbpuLdLsASeYxG7uvWVYmcMLmypHGk4UWrKmHstdSCLhJsQ1ZdZSgbxVzbUZmYZj3xPjFuDzju",
  "key18": "3BBgFDK7nDyZmfTnEzhtmBNPZ3pfENgmX3mqP8QPmZ7geryrH3ZLvbZZfwxqxzGWRHCZ5on4GMDfKQhpsygG4YGk",
  "key19": "3DJuq3ze8qCj7KDZndduybh4NV5swFeGhoG5HWnvZkwWdCrBhoMJqHoZv2q566afCtjuN7zdJjxiCG2PAj9B2K8J",
  "key20": "27aq1oDf3bnRrypCCYvAkfia4HpKDL33j2XqkJHvtGX1YpV778KHeg3YJyuMTJBdu3Xmv4G1WAsDAw7UPVJKKEhY",
  "key21": "2eZExzfsVzs9psuk43HpsA7vTNMAQRyPfseKVybY81U3fEgH4NspaGR6aJEMNfgb8R79sjSDqX3BkwoANXoDhiPL",
  "key22": "3WnhdQBDA9WyiDVmj4tyhACZ5P6itfC4AuLFYSKJiGsggXbde9yv3rMmhFd1tYyMxLUyaLp3guFCbRARhGV4ZXPu",
  "key23": "29HgmYjnUEeTsqPYshKHYnmM1JHuyH2UnubqyEFH9JZRckCEBrQhDEN4PdKCvVbgMPNbRK9Zz7MFzuEFVotwYYAG",
  "key24": "4LrgtSqDqWGg6myeVK4sHsWQ4e7PXBeAkRvd6RveEanDZtzKGGykb5M1eYvL7zS2UHYhDUoFh3Vi9fSqnt1P52UL",
  "key25": "5WwhtUkss9ZU5pHwaStvU1CP85cogYVrM74QUkVzxGzbqLoXKebkjU2MbPbUs4vB6k12JQnvVZMPki6HDsJKALH",
  "key26": "3b2dqyvkzwXsjqNvxYhhsAX1Sxf9TBzWGnxAVEyCATo6qnmFWmdWv461fMhB3NF1s7AScJma6vVRk56HgdspUzCE",
  "key27": "3U73mr4aznx3diU5XA29nL6JZi6GS8rL3q8aGPeharb5tBGCb18sUZHpfqzEzLHFG5HHutwFuBSCKgYVYUCVY6SY",
  "key28": "2vVKkddYPE9cSeG4E35N7PRi6grtewCz3QRvaXEPaSEwwTBmcyqGreRLDq3q4JU2vnfkFx7SVTKo5PnCowrtwWk9",
  "key29": "4ATRTaTksBT2WCMgsAB1Vt8uiotmv6WbRSQoYaGLrStjpnmaqMkEmLHJNFddGcCN68XNinbQnoESoFyMyPLsKcgf",
  "key30": "3kxp3npXfosect3TAAUDrmBA12QQjc2FuqpiSpygAw67wCVksFDTq7frSTqk5t8Jo7m3j3QJyAQZxehAWVEkdUXd",
  "key31": "jhijydXVcPbpuAJuxXuPsBcTnB8HqHNWiJNT9pZjynqJxM4q1B4ZjUdEtn7ZkC2xaN6fLsREYBqztFt6RxWHnTC",
  "key32": "34sF7FUdziPa4XrPg4ydztiMJtbvvF1LWYNbWW98dxoWvjwmMhmKnUQphptsR8qMSBnQoWbrEbxcyftnuU22Bhjp",
  "key33": "CAcRvvaFxmBiPC4rKZpvr8hPpZ7WLFsRtPoYGNxvmwuVCKgvQw8jy7etpJhu8nERMJ5huWQAPJGKimHDpfawEHD",
  "key34": "tAB8yGUDsghMJu8mxtE11ZvBn2izcghzhHz4GtALQqDQWDRuUYMyFcuqcLBaZkxansz1ekQSVqDa7v2tRsSPn7L",
  "key35": "5shNzw5TiCEAmBaaJ5gRYpcKPPxt5RRyGzs9uFhLeeNrvrYuaSASYF1kEuPTbTDmTVqHiX5XPqMTVZEv6c5LtZzK",
  "key36": "5WyTBXZLJa9285pXs4bPWVvzGuzqb3GtbRVNxo9vaFMTdPFQvYmQCKyic2e91H1DM5mhaJ31bv43g9PqpwfUisrP",
  "key37": "3SawnWqCmV57rQZLkzQprVRSCPUNRHc2Sz2KD91KS5UtLo8wSich1RRLH27pQeYf4TyAHHnjdAjHMR5qPj64AcUL",
  "key38": "2Vn2xoG7jr7Lp93hxdS9DkgXyz79sQZDGhSU7HRnWCZFYtbpz8drqcCHhudkwjme9tV1SMod8H22tvrdXiaoaNb6",
  "key39": "23uvM43LAhjc1ih5zW7ZViWMx8pAJ1BD2wxLKmBBo6DREKaKdouJDWJjqUQXrmYd6joPLZgqNSifpHxyFmv1BnRY",
  "key40": "3P7Pnfc3R8GtAhSnkXhDjcvWQQVJqjLhb293RKr2t793G54A74rX3h12nXSRB6Rr3pp9UWH4MShujcAC5HDnecQt",
  "key41": "41wXuvv9kuhi9KzeFJRXT5Jwvg2ip1y4Wt92wSFAvxueX2pL9iek8aQP6FSix8Zpw13hvdEtv5o77b5jCPBDzA6n",
  "key42": "4jPbKsAhvkcvxdM9UWnjzRshpia5RkxNynE7GkfvovMXP39DDafTNmYSEFZHBjjYixoPxNozy1mCHS6ZEsuxTHCc",
  "key43": "35PEuFALEgfk8ewwfHALxsV7aZQNJzq131PVqp2bsAppHxgFGfgFELH4JJZr2kf4iwRRuBmc2Y3fWq5m7TswXRFV",
  "key44": "WCdGtSD44aeqpqW73xDrpYztsqhMngtSMLFm7wuLKNvMhPv4qkuxDAyUTsop8fXJQv4bgfo1Ddk7NajSd8qYfgL",
  "key45": "5JGZcVdECXd6gKTkWz1jAzqHeJtbHqvj8yiTVxbkDgMmM2Y84d2qptuNhgYrCR78Q5yQfYnG6t1JnFPiMxs8gKox",
  "key46": "5SVK1UTNNHVTLaPNpMhcrSki29ySFsZh35pX3yRu7QFmc577YFEvm3LtGSk87mYGeXgXcg587CYjne5wXhQZwxBZ",
  "key47": "5RRyW9dxsCA5FBAiphRpDVtYTUZHomMkxLamAyiVg6PzBP7gYtD4UWnnXevchobXG7kVngKJmXxXyE5N6dqtqQdW"
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
