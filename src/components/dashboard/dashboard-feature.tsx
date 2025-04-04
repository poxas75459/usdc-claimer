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
    "37yCY7FFUvoa4FRCc7gJjNMx57RRxKuRi2yoqXG1vKy1NXYPtLY8tZpAHAgTunKNRkoxFdkAt1L1GT2vZkoyNAbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vs8h7zyRU5yQBj9LEnLWNdwHzNasf93DyXxxLDmrHESsuDWcoAG8pRTaWU6x7W7XYWFH8kP7P7HyCH5B6nZne7g",
  "key1": "5zZWpYzsy4fgBbYZ73kzd3EyzEuYoj92NfYMFvfXb1B18egvPT2BDx1EeekAy5JqUMX3aXeB3J5doWPMToeT2VZB",
  "key2": "48euL6qUQaYTzZcW1Go7euCv7TA8V8oqDDBao5pHptyTYUtTdotHmJhbEGZxNtqDZTLm4kQ6L1CVKDWHMPUNFg7N",
  "key3": "4E2JCWULC5GzStzBQRjfaB3daXH4ds7X72Qb5dG3iAJ6xfFkBi96CsSZYLeKn51eYKgM5hKbdk2XASzihhJVW9P8",
  "key4": "b2m1rDK5bUEk1ViwgosESJoi4VrzdejHQetSPxwN1HaNFwBRLV4Kz6bDqsTB6kqXiAXHKYqmxMxdbnMU2DrzzVp",
  "key5": "3CFhpz9q2mb8gdY9WUnp4WPhAqNJFRPdzKzsY1nXphjhzmwyZuaSVK9YrN8Ye226Bu1YEkQjgYPqski4nk91QSxL",
  "key6": "3jhBGDjGHp76EJWFrS9WaXS62LXZguLYFj9MRci8XkbkuKYryAUq588PFHgstaj7rDsXJnuimFDeJkxpcvMydbN8",
  "key7": "2ZhWeD3rVSxNWLZWY3ZXVHSpuksHxTmcDWi6ZLMPQfG4NhiaezeaEun3e3GvkbFn8E96BLzMmEZC54RV5FyxD8ji",
  "key8": "2HtVXi63itF6ZcmBjQGWCwaYAUunogoirf9G3xaira9hVdwDeksEuRLPm7qpRGWKom5o1K2ExaDcFcHVQDoRfXcz",
  "key9": "5F7C8Bnw7Rg8KyuKHcYXfQg8sVBVHJNQqii96xmPWTPYkQq3oG5ny9orrAG5dCQWYLHSrnif2pYHhDyCdcuur5zK",
  "key10": "Ysv7hTXyaNoZFrfMvYxadJjm1P9CVhfSqCgEzKRF6pLWZq8k3eqH7P4DFDgCyoJiZW3jis2A6EBq2UZoyzTvD5m",
  "key11": "M9yy4Um5utqSSWwP26KxA42v2wfARg5j64eeKrAh4ZYtVakuSvhwCZ6f4LvwG9bxC9VoHXcc1Qwt2mmaq3uhma5",
  "key12": "2ycMaYidwFxYRUbHqBy1ZTkTrc3EeAcMJV5428Rx4RVPRDAT8Xx7cCNKYZzYcuyiqYuuEafJeJT2Dkewaqtt8DQc",
  "key13": "4Cj3jSg5zmr9ubkE6AVUbBdwvpYv5gThcjLjKsyXdSCGNwkuEdFP2jWnXYz5wkQCJc364Sd5tkrgDTSaugABynes",
  "key14": "pfjmvzKdHZ98XjWWWgeUN1cspLVg7L63dksTffvkjPRZKbXixfkbvLZpQ3n2eDzTQTLduMQdJsyjN4zv2ayJHhK",
  "key15": "3HrczGLaS5hQKYNAdrrYaiRqUTfLGiLhyUbs55DwVjqSuKAXwJ4z1maoDxYzxLvxynhRdwBDhQX2CYN5pGqiG6vC",
  "key16": "63S28uXdW7PZbqB7LZWBMTpn88UBDGZNJYBvkXcKBBPHQvJsp2LM1PXSKDuWzmerT3NAesaEbvirbx1WxuGxQCjD",
  "key17": "3pidEY9N9ty4RgBvCyGnL9FRFwnwGrbjvdbQVdrgr8DfBoUm5RLFTHmJs3FeMJqJgeEyKqWajHt6ABvfBRfKr66M",
  "key18": "5ZetjjTapofqgGDTLpX386sKwr8DUannjwehfhQmd2Qk2TBevMn4DEc76necBCH5NBnMfi6LWVXTSLTFb6Wea2sj",
  "key19": "3QE34p2HEn4Ybh9eo7X8hKkGb2PSjiDXhW5evthupCExednxyLFD2XLCBXm59j3HyTC7sFYTLgavCYv2nKS8vQB1",
  "key20": "5BpxYSBxvzp586wCpwCtbxw5RVhdW1oGqc7pK9V74CtzSeHX4Hq2ah8w7W1oKnwwXWPVAd3PtVtgHyY3Rr1QatyR",
  "key21": "3HdkcVn9GgBGD6ezxPYb15PXhdUnxGyGjV9CKeRcBuwiwSY3tt4cxAjC7knKYDmEFGPm41yqTiefRTuW4tirHDZx",
  "key22": "37WDqhpHSaFGHGXb6iLjgYS953quz1BjdsFAZ7cj5iTZSiwG5LZwFPjZ2S9ZYRRFWkrHY5acopYbcQ2EsXDDq4VY",
  "key23": "39zaZHu2nrWQ77FcYmbNgGwj5fv1EXPbGiuas1L9wL6YJWh81m7FYdpRF7NqMoyxG3oFRo6JV2ndAvKwyVeJAi1D",
  "key24": "2JjVBRJaojeHxoZF7iLqp4FENa8pJ6tDndmYncv1sYp4tfwjAVNdegxDVHzrz7CSxx4ku4ZwYo2BgCyGTZ1KGEpt",
  "key25": "arjn22F8sPJMdBQ6EzYNS4Fj5hnuLhV9oF34NYzXiGCRS7QyweF39e4huZwQ94pPzG2QzBoh1btQWXVo55kDtvJ",
  "key26": "4Nu7BcA1486HpukXaCA81Ntbf7tMLQyEY9X2fqinMvg2n58Ngi7mV9pwUjt5o7EJ1L7cVgRGdBguWSFWLrq9KGpq",
  "key27": "2dugw2iqAd91Xj1q34qLRvTEvgLtgEQD4haKjs6YhoyaMDirCZM6En1nXYkjPF8JBNSh9fkMPrxasr3DyBD7S9YX",
  "key28": "52vL6QTPLPXDyHVmG2y6tLuHVUgwktxfePo3RZjWzb3cQuEMsMrXXaYgZdotTscPhVoe5PzqKCKJ4Z2kkmqcmGXf",
  "key29": "3tjJiDZR9iHcyQoi5dTifSWssPMphGKGDJXQhKvcCCCKomFaKr8nAbHmAnARnV1pbXdB1HinTFo2tjtiZSJbeiDX",
  "key30": "4D9pLTiEhAfHpSswy4ceY1XdyiPj1aFgiKMEeKThV8sgAS7QsgRhJE7qViGnv99fArEtbpsstzAqQj7rM6BUkV6k",
  "key31": "4BEUuNDoN5AK1f93PE5N1Rht5HMK8NM8jgkt6QSLo4U5hStiekS8Dqxz67o9Yo3Jch6YkT6dFr7yH3S7t5n1aBve",
  "key32": "3WkC21VCHyx3vwUurpg9qzY1A51JqVtYQrbad5weeaH79MKAyuMZHXK2pmHXedgdVYRPPf6UZ8rMDPidgNgNQ84X"
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
