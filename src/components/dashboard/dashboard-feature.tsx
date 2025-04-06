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
    "ARmcQ2aexrWXNg9uYqyVyk2wB8DBNCydynGdfUmMac9Yudddie9BEEE7wRLPz3kavXpi94PqiioR826kNPxwTir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "giMTAj86PiTvoxp5RxpaBeqTiJe9gucYxW2sjN8kFX345WQxFhc3JvLag35jTJJRBCVJefNC2DzrD2GYUYsRqeU",
  "key1": "6R4xujtNciCdrZjidAgKCzN7KdfrodM67J5wzisfRtsByAgWN3uMp6AZnHf9Xqu2dbYroNBWTGHjcWuhdduFwwg",
  "key2": "sHgZZthb4gxE9RChZ8KuxeAwdA65vGv6QG56CkeDZ4QKB9pRscQM6T4GLzrpoPUjRV6qkVTxisNhRUq8SYJS9dm",
  "key3": "4x55ZbHoMeaDkvqstva6h25vF9ShSD5GP6QFysb5MSuW3X1WmfRuxkMapvcaEmyFBrkXoYHE5p67jXDpT2bDWRTk",
  "key4": "2eCSRVfopSm4Up8JX1bugbycL3Z6S9NvEKKR4JpBpbZV6W8nEg6AqrTKHo9MhoVvLtdX3d6mM4tXouXg4NtLD97X",
  "key5": "561SANZYgM5b9SumozeXX7GEbd4wtHdN5jKbtEucmbD2b1NFqXr5NoLPvR5jfjqAZe9waWaRyaxo8xkCuvG5RkAN",
  "key6": "4vLEtFxuTqiy38bYCA3Tmvt4wh2xj2Ef5fux4MEfYpzh1iVgGSAidT6E1vFE1WvZP71SCh2bL7vhqHTov45y4bkN",
  "key7": "4dUGg2CPKhW6J7R8BXrPpk9Z45Yyk5A3LvhN8YLKAXDSVQGaDLJBvGyRdL69ENfaWZXp677UKUySs76178qc5SoM",
  "key8": "56WeCkcAY9KJixxs2g5Y7yVTT97G2x5uj2YCGTjvnMNEu6g8sRVoM58puEycG96YJx3Qrrhf4RisNfV1CDdTzwZ",
  "key9": "2XkrKNKxJ2TwebS48vfpjUyzNE1WYQjfjiVauP6jTJLXXraXVzi439CZ6g7jumwCu18eKsWFgoFPb3AaBFLXpBZ3",
  "key10": "5Hk3D9FuotKPPLPBdUEaqkuTYv3UJt4zeTawKQPSKZ9w4byu5v4uVWAHqXNzjt5G9xFC1hsboZnq7R5iwrtchvYT",
  "key11": "3iqvcNXbgruCkCpqXdNRuRVvm15DxKauisV5RhqxrK9Qf6aVXrUitTcqVYRPAiorh8r61Jop6UEgWJHfY4hJGGKd",
  "key12": "65kwKfZcunLDwedQkGgkDRFGWemtJ2ndUR7oTbpHz3B2ZDhf48m9N2GFwWBxRFX6fHS1xLTXMZmXwuEAvpN6wtkG",
  "key13": "61gXrWfeDiLKevHXYYihZWHNAMQrzqWSGozjDmqdWNkHNV5hsAGQ2CR5GxGVaEDmb9D6ToEENWG9V5P3UHnggU7g",
  "key14": "4u85As8A8y1ggV8MbDmQSG6Q2krTmGbXmRGSUbWouuNWH2rRYdpoPpj1wKWE9LwaE5bdJk826yADbGZy5zjLzjZP",
  "key15": "64FLzb9mymydZ8Sr41RMaMYZxaDBWczsavesfFBiVBkBfhFBWNjZuMadH3Tip9H6T243amoL52Kt1KAhNyyRQRz1",
  "key16": "3yAfD7Ksbi5xEihz7gj5rufqVD4v9pJs9VRWZAfMQLXRRmTHgEmFKD5xgv2SGL8e6ZvhWLPHu5ZALkt9XWKmAr5c",
  "key17": "5u4MKEJ5oMUUtMHZdZrFCMHp5RFdNL52vG1bGTkWnseoQ3RU8R76sqgkNusRUZZJWtKU1NRpeL6BnU9rPmzgKATz",
  "key18": "2p9qRufrjxsRoSMBHRmXiGeFWAgkYC3AbfoyNuHVYE5TgSYekH5PD23HjyLbVikhk2h6RJWCDiAWTjayMjYWM6GE",
  "key19": "5kgjAwZ2iRZXyQ9cG4TLXjSqV9f5LYhkah5vX8KwuUYcrJpG9Jnm5TrAGJnUu4B1tAwNFbaDj83DT1bx6KE4dnUe",
  "key20": "63PERZyEKrUArE1sLUiUc3yu5JAx429Vv8pn1GQXHNBcjjHMKb41LAj4ftMSSy3ssd6cYBZknKTiZAaah66XuvMf",
  "key21": "4ZJiq7UMSu5TgaXnMVdw7Z2t5ceRnAhMVoN4R6beKuGM2XAZiRMLZJGoU8RXNgjb4qQKr3qxDHNNhav98rKLk1PX",
  "key22": "37vgzmfYG3YyqTvU2NSXJXyA41vJsSAYzzbpMYnigqWwEwhMokWwgDUaVfa8FkXAk9aA8qcCPNd1AoGvnFHtLe4y",
  "key23": "4SYpt9oPYdHNW5HZnjKAe7Hcp7UcCoH1ad4xbhSXj7rtQMSPFqTMisTZ9HbDnGikxVf9AHvD81XH7oKFNmW94uGF",
  "key24": "2sqEcmuoWEVA8CbwMp8AM9mL88zsiqdmBSSv43e8ARrmT6Gqa6PX3U6gmja6vNKCDJ9VVC5UZ2e5SamvDC5E4B2R",
  "key25": "5RHHGfAwHtPgScGoAxVccSCkX3xAqT94UDf6RWha7s62b842SgMBeTJRv2x2uXzo5ooLrbUj6VfMj4Wb9wjLxqAq",
  "key26": "5LNGFTgky6vbjwJ646HejMi6JfeRbXEDuLUv9UvgD7u4WnthxBM4zR7HzcBwowS1mdLvL2vRop2ynv1UzkkVBomH",
  "key27": "4345QKjDvSJ3e4QqLfDUWsaoDJPDZkzeopjEcTD7UVknRccxQuoudHMJ1Auhpv5Xfu4EuhXHakxMZL6VGQQxX8mo"
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
