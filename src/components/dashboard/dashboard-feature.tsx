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
    "2RKGjh4zLFyKf31hRMF61utjEUB72Z1qtLmvnHbTKkzxhNh53up7ipBdy1wRZsj8YDAYNvegQUUQosU6b1riJdgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXDiLrxeMg3YjcpXc77LpbKeGYsrDcPpaXuRTEZNXwEuXPFD6k1MEnprFuuRhNqjYjgGwb2aLwj6bMCZNRVmUy",
  "key1": "649HKhehqJ3XEpteXhPS5QeLYbFTcuNF8Amu7iLx1AXdZA5SJVoKTR1ZzwnWmPtCpyEWo2zBTWbRovmQQJz59c1L",
  "key2": "6N7w58Nhijvpfx4UEaYQV7XAwjpWFQrFGUqKDkRmH1mCb81tFSyuBLSsFG4kMkhVgZKL7sTCzPPbrUt7M4yLWAc",
  "key3": "3bTsGv7ejq1byUUQKXpeZsd5UrsKNfF2qphQXpuswJEJcGE8mwXkdvdnQWfZi4NWQjdL6eBViBZh2yer3ECpamib",
  "key4": "4B2NgphDNx6RMdSmM1YkHkL1KJboZF2gRNs1FiiEYueyZzSspSUFdw5qEHgWe2KU4LmjsK5vEyHMMsn4GM5XHNwy",
  "key5": "3G1mZnBNSLsMTjWf1Dbb5tcYy5So8hYE5GH3T2XR9xu1vVKwH2VJWCqkjhme9EphLnvQWTwfForUmW66c883T69E",
  "key6": "ojcdVSy1QmW27ga7562t7snv3g3Y62S9EHfsJfLmCc6iLD8ELTYJBX1fa4SpWVggYnQfLXpBnhiYMcqoyZ8q3o5",
  "key7": "4aLusVgMCnyzjfpNXYY57oZPzHCTyisFLoU9gPoimCvpnnztumYwHcJfYEsDZQ2AEk7S2KPzsCQ4Lixnd4D3QeCf",
  "key8": "2h6z2st6ebmBJkGgGV78gfx2EWrLq2AuKpKxAGWFjM8Vpx74kBb5qSKAJiouRkJthzaD21oZ1Y8zLVu3tvWUkZtc",
  "key9": "kuGLaQAcJRka9WXcuL7hGW5TbdNBShcT8WEVNoypTWYRtesoqZZfiTZTxep5M6Gt1ppmYp95fdnsYWYUXaffvTi",
  "key10": "3SZLYpRU47Cjyk46iWtBMivXNX9qtCUqoBBRkx5XgmVSKK5GbjoyLYNfoCYrj6UA5vw4setLbwFd6XFmFAtr7B7A",
  "key11": "2VerLe7L86gUur23M9Nkf6WtScuYGTxV1EY2dADchgQgUmQH4hNN1XvVS2wHEnqkVAkkguALVFJBjqN229zvVaBm",
  "key12": "tc3YbJk2FxsajGPYPRFJVngPyPtFtnTdbHqBtyRR8jBPrVsJGjQ9wtajaZnD5p6pkWZy8ovXeMrLaQ1r8Pme7ia",
  "key13": "d9itkxqC58aJDjdFECC4jkejRXdb3XArcvKqqFZirgaPd27sSLGA8SHKYomu1AYNkJKteVdHZ4SuQeQAx9ktnuK",
  "key14": "346baDZkUVaowqw9DB9Ue3qQ86kJ4auwvj6amSvWBUksCbb8CcFDnVPB7m4niuyGW2dYu9kjWUGm7VNvv8URxwF9",
  "key15": "4HwZiyArG5puE44Jy1EWK5jt6MSoxYzA8JGF2PN8YkK6yicntcnXoovanBN6eXjmuTKnezAYCkyGuxexMK19yNAY",
  "key16": "4XS5qmFqFJDvcVvdDi5m4tk8uoR9QzYW42wZQ4dqn4ntgBfJYvxsNnzAbG5EPNhQJcygM4sCCSoRMMx6sD1qSMuN",
  "key17": "ohKx8FSbkWv4UntvSF2gkXLeTWqriKM4E86pWceUxXzntePqn7YiDicuW163HMQrU6zY5zc7aH3hDT5WxiBEfgw",
  "key18": "4XbwJ6v1xFYEfRs6EvnCGY8dTVX3LRzZoZQ91SWSdRMmWyvnvkn2rkLgePDCC6MKFsQfJ6axp8MKW2PWr1EM4LrN",
  "key19": "3MkH7TNyXHtqQdWKo65o3N9zm8wr27xpYQEX5oWsCKPX5ogfcHRHE7cfM2euk82bmdkjXxn1iELiuw3ZkXFuSZXP",
  "key20": "5qT52tPVRpcYe45x1yYkccHb9EZuTvcJZWV6sHiE9xVP9pPN5SU5KqVFDebRSJXEzJBYD1VnbuNS4iQLqcPBntRY",
  "key21": "2fhTS179ZKXhrS69kVndFMRT6NNixKr3jDjhEuT34WhD9nbVfWwiaZjYbxwXfoknkxaCK29vh2sgH3DuHBdNiViL",
  "key22": "2DAhQZXVxidBbBKr8CHMKiya3wMVb5UFb8qshvVXnQFrXfLwwNfmU8mpLcRghrMX4paV79ig4CJXVd3w3W9pLkcv",
  "key23": "5ozpx147HRn9UyGwc9E1avMEpiTGwnpADJ6Xa7ieKw943kG5fH2STVtenLVkGbKPkzVYChot3Kpnkc7HU7anCfm7",
  "key24": "4AKqGxnnBYY8ju7bbFqeTyusHPsk28HxQHuRoq1qxZ2CksUD3QEQ6yJejVm579RBHdb2JcLExoMpSg8PtQQVFNkK",
  "key25": "2qNfJVAS3JeFTp1WPd6BEg48iBXkHbcUCiHBHg6EoMkgFD9CBcFt36qCsLXXWUF8RDghu3146j2gNQsmqRdweT5r"
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
