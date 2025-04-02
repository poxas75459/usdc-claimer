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
    "5qbWtR7CZGQANwj9xSWRystMeFH7oyLXbr8w9fdisG7bjU3sjR2jS6KRF5egdQWqh8gqBmHxT2sBxyMfYWdWZenY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pozcF2hpeeHarddMWJ8UMSgTHzj3Hg6EWCFLtCiJwQZqQY8ase9rHkS2W9NNGqu2dLHDnXHxnXeALvAATwsLub5",
  "key1": "4QSyDynGx736QaQE3nyHNbZdVsWcAvWkM7f9cXJN98PrQgt6ieDfXcUAv4LcMscGKMMUvuSmwvrDRXHa5ci4SipA",
  "key2": "3MZVpG4PTQKYzyv1xCkb1MvGczFBSGsumMTdXVUHm3EhEQ5K2M6d3xijhkDcXZC2javBq6h9KYfMc97HYBj7H1Tk",
  "key3": "Ai8ifZmFovRZMuLLVD3b3jR92nVtdoihYXxqfwfcrC5tnqQy2YrFUmgqfBh8CNnWqLMurKMyowW5aZKH6ES9nfB",
  "key4": "3B6rzMwUgjz4cP6kLuWqNyEr3vEatcLjCXQy4wBjPQBQtia4Lec6dmA9mWeL4xnf69saHBBo3w9DCXy21hTHTWFh",
  "key5": "cQVPaS5x61rqvkoMQvBPoiUy7rSiNrGLzHVnePejs9XVeppLKn7BqcUEa93tDshUJoexwaMAb54yAyyC77NDx9W",
  "key6": "CaW1Lnb7WC49pqPhiiJCFaK2erm9bLjf8dVrF54RmBEHdJaReK3KWnKrjfZ5oGjbFxSAaAnoQRMJTv4X97fwAA8",
  "key7": "BhWQ1B9T6arbZBhkdHp6ibWzoPohDeUDVH9cKHwfxNTevwvm7YYxx1tvR9h4Mz1RE9N6yS2G6mmxskKhSyPycsT",
  "key8": "3Laif1uBPL4qVBeY8r8Aq2ofe7uPkjHFGjD39Lmm5fZHtrwUV6GUadmK1Y6JftaVeH7e3KpJdcszcKZ827HCHkJc",
  "key9": "2Q7iPv9NEXyGpRy1PyjhyxGpL3v7SHiitmfhTgTJn33vbyRk4CdjYDxdeemsVSnCyoBf38QiTaBAoKKYn5KKSbBt",
  "key10": "3WgzuN6v95ZdWkCgezLkMqEPB5srQfHqBbhJPn5NgPd3gkNRemF5mv7t7aQjPtYqfc2LxXnF7LVw1JW8PHgcxLHF",
  "key11": "SFJqjb6sxzRoGj7NRfrPoJWfajKtJec15QngquzTi8huDe2zKd27nq1uLt4WLihqBQj2HBWsW3e3asktTYNvwRg",
  "key12": "2o8DwCKJY5yapzp3epS2vRJ3zs8EGwDfhSGTi3Pm34XiwKst2R8rFWrxddwAnaftc48kHcwsj53AbLj2Z36Kyq5D",
  "key13": "4KW91BavhpFK7tmC7KwAMYTtzcaJSdoVyy5PNemETFTnuDnQparafL9PcLMmzsWbGSEVej6QVg9qghi7d8rfjWFh",
  "key14": "3UygWLNawzJECFynariAfSrug54xbHwoSys6U3fYQv7MejMs7oCDvvVnV98znzmaDmNU3ZUqMjhA54g7xfYoTjMc",
  "key15": "25R21hkXrqCuhBDYNDbsRaq3BwrzmPXeHTxSU4jEpcCJWgdfuxwCWuEXaHmsKkzFf9gY8snyowAawoACFRtJaDHm",
  "key16": "51J7PrSJuam4M7xTuLz9vSeKciLYKvVNxsvtxEGBadFgFGwmbxBTQ5W4Wt3iBp71CaAWnqzGN6UJuvEJm99g344Q",
  "key17": "2PMd4JP3qsdJaumJ9oAXv6UegUkymEdcHySL23Agh9pMCEgVQxRaZXBtD2R2xfbHB1UXTqdDb3buc9se9jJJ189c",
  "key18": "3vzrTJ7speC3nXLQ6qNfp2Wd3npuTvk3NorMzPEHR8XTc5nuiCY53kB13YuzB8QUgs7Hbb3rv7md6uhM2bRiz7BH",
  "key19": "2H1CZimniKs7BzcvS4CHfpHA1X9tDWPYwHpVbgspeoNSutGxWSbSZ5YPMGPKyWwpxLptpSTyZE6nF28tgZ3ZMVD9",
  "key20": "39cnXqYh5zXSYGPoWPKWXRmsk62UZjQzuW955xtfL4U5cGdSohsGgGx2yygUFzXUS5VNAgcjPKj3RVoQ5hgizAJN",
  "key21": "FEQosez2oXroXmCWnDuBGsPLk6mp6PRAbfbT4PPTyGUX2haf9Bi756au6bPkjao1uBtwWYp9BCzHwQqDeVjsQnx",
  "key22": "3V3j8LRb6RMa5w8E1Bb8pfSCcbhxqLM7bYFRNH6Ym6UoEK2Uhwcuh9CS6VomaJ3Mb1CKLCozyDXMtaEKnnaXy1jB",
  "key23": "4tBAsXeQngh6mxX6QTdWTDBt95qp23GoQGs1cf1vWe4EAVN3MfeBKD5cKVEHeF6EMd8v7KDaZU7DaQcBJKRjqNGM",
  "key24": "3jgJ3KYrdeZpZQtjSx7LNeM35LhLC68qfr9isCuemTzk8c2AsXnEHqrZg7ktCLwX4fgq9J8gwPioAiiugVVMoRWk",
  "key25": "5wD1puegDffrS5GavGQT5oeMsnoY1iau6YzBPWXQm9WmVgq54kSzjqrMAnFeChiJMZ9aVHmhJrP5JQd9f6fHTDDn",
  "key26": "3yXA8ivjz1L2rJDEC2ZiNwCTRok96tYVdDAGaCD9p4v1CsFYVYRevVPWNGnivsJorei6hoYaApK92mtzkhLAVbVh",
  "key27": "2d5gUReW23VKDR4iwr6mvWrjTyMUauqAde3qxgrDBLgi35c4DRsZjbQaFKPuddqCHqWog1MchFb4xYwsrzJARwKF",
  "key28": "42oY1YjfBihEtaTkxKvYiE8ir2YPyR7FpY8HdTZ8nQtbW46FsDBSKRwunRdUMNVrQgtNDyrGxjxbrE4tfgDTnPbD",
  "key29": "5QjBYMm64Ts9keYGQjM6qkLyZjHRMekxkLK3LgPSUQzxyJMYrvYmCPjXogEGEVNXuBAsEvvR62ME95wCVDeMM3Vn"
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
