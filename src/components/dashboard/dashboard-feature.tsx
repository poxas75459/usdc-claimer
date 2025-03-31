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
    "eya9TQn8ZDmv2qcUj1Kgn5nRx3mj1j6zdszMDVoAyvxdVm8puF7MXRRtYxvuToc7b5SNPUP4dpgfWahb1AYruQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDHLb3DrzZEDxZLMwNtN1QJetyCDFWNZh4psVu5royTV3Ujz7SgK93XnmCPDHEbTcQ83SoiQ5UhbKoRqRdmvkXF",
  "key1": "3yP93k9boLh3QC8srtQKWnexqXKBDA94o1gu2oKX5ihn396DJBGsroHhwoBHqb5GXtn4DzM1pQxWSfscs6Qag26e",
  "key2": "3W8MkZnaUekbj5QqzpPJuyBB5ptJsXXnyv8QiDzWUvefdCMyqSfZScb1d5WdM3E9u4TNDWQVYrMT3B67A7etpokt",
  "key3": "21KPqvNmPnXC5VNKnmTWSqFRoNyVn3dBQ8p91TGo4yYh7Wg52TR9J3Nu8h2jDDFFUft7vyKmiyR6X1mALhdxgXRo",
  "key4": "EM1hgFdR1gsao9H8vmJrbMKoeTrjZ8rEYGqwJVAmvNVERL1EZpPhSJQ3UQNGWzk4uaib7w8h457ELgfTeuLneNz",
  "key5": "5UfergQFWFw8VNjs7yAzrAtvx4UXLK8Wf8XpWmyS8NPpyii4ABjXkJXxHJYRdpbcbWfFpxprw7zTYZRAKXejkNV6",
  "key6": "4a84i97wmTJDupZAjKd6rVtpTt7YZf8cD7W7P58Cjtq5WmcXhHfbMF4CDURwYDdqfXFFDw1Eceb6QvjcXiygfkmB",
  "key7": "2jbxxxCj943oFtfY4zV7ZoUyy1abgBj69xGfn9h7Zb4ck598upL7YdtawD3UcE8mvuvafS4d3QefCtKoRjbSxtJn",
  "key8": "2eR7mAfZFEmEENUwhqsLciuXWhqVbqGPSgLvxExKAZ913WFpH24rmrNF3nXXnUuz6H8BSzj4fcfzTUXa6eZaqTJE",
  "key9": "2ktkg5r5j6uySVWULzP8MCoMBv6mTuqjLyAUN2Y49iM3VVjVgMfLQBKUEQC1EVdhuB1unFWgR51Zd2yzZriJsC4r",
  "key10": "2nYjQkD1J4VnQQvrnS9zr3x3wznHKSvsJwQwK7TJkScX8QPQ2HxcLotddiCoRBbMh9L9Hzw6TNsA9yZbp2EuVt9m",
  "key11": "QUcnHRpg6MNvK73fNYg1zW4NrnmWiuoCNs9ZUMvLYm5bsMGz6UKmwgj1L8cqHdcAvR2zyE66WnxMKb6tPsHFXVH",
  "key12": "3Eqa8ARv8JqPMPxczsXgE4F868wJdC7d9w1Q96ZX3hADTz34VgN3bxaM5Kpk3NKjuTb5gPxzvJD1e37EG7f8WyWA",
  "key13": "2pz7NkihkdgZvAmYCmThfkmpuf9fgGNiEAqpd7fudY6wPjmQHFxN7wCPqfDGWMwZkVak3ketorQ74dtx2qx7jnVB",
  "key14": "85bfHNL857w8V3RMKtduU7r9C6JuSx4V4KU4mh7eAaaM5BvpsQ9ubGc9VF5orjwJNjdHm3DS9eS7oV9Lyn1xzXM",
  "key15": "3u9zDWuXCjGs6Fc5q1eD8hPZgBq7D184nvRc88oboHaGU6YLqL9EvQJjBPme5jrDJuZnPsiyKGUVGFURADGB4cNM",
  "key16": "5G2arS65BK7bXzoPDuZHiL6V2ZKB7nJtqLUwFU47pZhiHAbmr9PuHC6voe7HUv5u8mkraKMWjgRvezC5NPupetfr",
  "key17": "2K8M3TfxnwVzKr5xPhCkzZfPndtvexAXYNQu9f57nfWbgiR4M6RoZJB5Azgj2h4xnyRA4DmeWyEATrmskPGPX53f",
  "key18": "2vNp1BBdgpmyM1Q9RyfuJnGoan3SBEgSimrqNTiFjGbGaEyWoyAKSFJmDBtJ2QMh541PYYCBaaSqiv3Unx15Gzqt",
  "key19": "Wwx57ZzoJFZnVB4CuNKhgqm8XYg3xbTSLtAARFhV1fgWNw4qxDuHqJ3N2TGoK28YpyXcsuKzarCJTVERbbwsAQY",
  "key20": "uh5dv5oYXawGQYyy4bPQBrDneKHWBp4QAtUuokB8jcAVDbNE3L3p6StAnwmFybVJE3DWDvWsT6nsi3s5e95LbJG",
  "key21": "2XE57ogbxRnGtmwB8G3jWMZbGPTC6dvLe47BTQuCXL3pz2WYptw7e9wPQtkLh1vXjTv3cft9BGq7T2PQVsnRGra4",
  "key22": "55KNLu4W34ZVTTdykoTEctHk3T8nA9MrmCmUKnNStd2kaANKWxPoMUcC64UrmXYPJkcYhitz41bFJuPVXMX7xxkc",
  "key23": "2bEJJnsGhuKf3id166tTSRNiMcR7mUp4eFVSPnkXA3kuznqfEpniGDxtKcNFu12K83xYjBwUMrDmX9KaFUgTbBfY",
  "key24": "2SZQ5jx6uThqtEKa3rmrDqwZ6SwsPuNvaWoLDm7Pf8PjFm8aX6JXrCwcimtagxg6beMW8S9YnS7FyvVKwxMQ5K2f",
  "key25": "552quYLVEvBq1Yv7abwJjEUSZ8EEbTLksK6nWWibWAWMqFRKMP8CNtEdZfBJ1wABwqBvfhja4PVDWscKb7Gw5zPH",
  "key26": "gcvMT3ZGnxdXKxfFP9J2ERATNBAoAZCvaa12ZQySCubapf8F5EbA2RvdvRptufRU1XTZ2Kof7w57pUoMB2mvDpQ",
  "key27": "2yNDeyPiMaRqiUYffUH17pnox2U1uafNyBHv3hKWRaQKfAHvRM3jo9zfpnQrEaDL57BoWhkVW7gSMH1qRnhG8DED",
  "key28": "4emYv4wm5WKVCrabRW9ni5KVCaAqmiuh86EvRsLXCmcdubE61bUNqVhsh1bgnJsmh8hjd9qHvDxt4cwfaUVmA66Q",
  "key29": "2S7527kraH4f2GfS8WxyhvaCbed2D2JJ7WFTt9mWe8ym5ofS7dqwcX9RvSq9c1uxn1oT46qg29ZcBvUsaaA4Cyfx",
  "key30": "5crpkApo9NkBmLqRkLZPsnE28RKQ61uMMUqVMzkUwhes6v8NS9ggYgWmKE8nsVuXNmwARLfPdKKHBSh5NeSRBuU8",
  "key31": "5CBKToCFxon6iqApPXfA9DaZVqejhuwhJWfXUpCiUJ7eFUGYWor9QCWYx5VDN1YcvvUGEyX3bCwwJGm3iu8uyMNa",
  "key32": "4bDu7LKxaCB5tsmJnmRfGox1y9148TQcWHYybFAgVcwCArGNnJxreiUSse3631ZQKMLxNRKAVvdcqG3XWBqZfdef",
  "key33": "23vmCxmiPuwqaJfQiTFssYGmAUqsyR66YVb73NF2gdBJZwKh4zkeUfnDLwG49v99b29kDTFKFL9j7x8Dzj3L5jZ8",
  "key34": "zC8ePjWyWGgv9q1X61KArgKYPDnUNMzC7MJRQZS7maphcSehDKcaTyZ71NYGbmaRZF2CLBgXxGd3E2KVxuC5yFv",
  "key35": "5LD8qcYu6q6X2CbjxKNnVkPnctooeLHUA1JWMCZ2ovL4kdZkQEuJVk7oUkFGYDL3c2ToHNvnWGp2UUW48Ruwemu2",
  "key36": "5FqxbNgKJea1uCmFBDuphKk9YquC9GvuanTpa2FR8jZhjwv6MvtihT7RjAtQD7AcVbj9tCEZ9yhuLc3kZzKHUYpN",
  "key37": "3gG4t61zEsQ89Xkr8X5YUwXLapsYN79VEqQ73Pc5tJLb5i8d4ofWKYGK5dNrwRa3jsyiLpnsz696yfA3mhhtBQxv",
  "key38": "3NQKpHXVQkCYRnStAe9cjQqg8RLADoGdrm6aPNjkCgW1H9ZSSCL1wLh38SW1GwTNopACyEsGCjnn7j5KrPZFLuH3",
  "key39": "3UhsuGHLiifsSPyD8b3SH1gLCUm5GwgdBNuaZUenWZkxg3XGC5roKuAy44bnQWcVGrGAs2PUiMKJTYA6Yqez3qTs",
  "key40": "2XKNpW7fV1h3Kvxd31QUcPSSBEYSxmC3VpHE52SxtuuN3NBEECUMNzmNmHCKDmbMpE9NwVrX9Ub5mReR6RratRB2",
  "key41": "3U24DvPsKgjz4soAb7vntc1qq8bkKAKE9cFCtVfR1yNNvmTyZYps6FAgmQYoq6UmDA874M9d5v2GAtvtn19TtKvn",
  "key42": "2TsdjGmxWnW5yh6WV5CzaXUda2eeeNZes4kvTAAj7YKcB8GnJ23rynJR5SHo7wVmfCSiKBhMmV9AwN2y4LpSsrjy",
  "key43": "2os7Jz526CBWVBoDPG7ttn2ATYJfNoE17bquHNmfebYHiLt8fEXhtJFyLndkGZwvDdzL7sihgdgneZHJqqZyBqcN",
  "key44": "2LF1DPnpwZhDrjPu9gysdWwhhW3aG1sGW94MGi8P4JqNwj6Mch92GPD3sCBN1KX7TgoNBCwnsHQAfRrG3YaoRNS9",
  "key45": "379dad5b8edGDW5eSymKpbf7RENTd4jgsHKgEzZsWgVcsGdSUrhMrWCNSKekqBxeexVBJRrTUSU3ZThZM38hjoNx",
  "key46": "iEubXse1cxvxw3RaW1fxoqcUGaqRE3WSEBAR1WL6pppsVHdwFuiyrbiyUB93KtEiQoBd8hRtCTi7WkFUXznGE2N",
  "key47": "2yVpNYwxNpeUHTj1Ar446YjZk2sRuytj6Bj9XPwrcDzNbFWSsh9bTnQ7QjQF6qPFjxHXQgTLh249Kj5piQQwUB3P"
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
