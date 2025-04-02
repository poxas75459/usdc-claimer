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
    "4BxBSjsxUyWZrBnwvKu9CG51vBZ6ZzqrqqYMqaWZgRWKzc3wzJSG86ED9HjdYtJrXMSqZuCSGQsoryQhcXtKBdha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZA7EJ4d6RKHY47tNVP1jd23ioGv1jkzumoMR8EPyFF5WAXjXAW2qRTXQ9MDmwMb82zFMSM9pkhWNZ5i3a4QAL5h",
  "key1": "47DbfVXAoyDqscnBag6CR1sdBhWuRwTsydyYuTSypbzpVTHZvZowLeDvGsjxg9Crd68Jy2ankdCzhjWF2unCiPY3",
  "key2": "4ZSzky4QfgA1WDrfcmaWArVhJ5FrgfaVkTMTzE7A9LmgWtzNjLPw3tYyYtcCsHy323yghcpBXs6zs8GAYTirUnLS",
  "key3": "4Sjjg1qkCWXx2VF9FYWxAjqq1fKWNYwp2WJj2wARLPoyJ6X536D7G6wB3T1pCevChhgtgphyiqXemrHABXk8kTK3",
  "key4": "2Jw9Ejz1hhG8PJs4RQxZEF8nwjsz1EzHoo5dBsh6ZZxP8gYvicLeNHWz9mSt6qdyB5HBZ7zeEaCjw3WjUGSFvULi",
  "key5": "5jsqATyWtj79tnWDWGSdYogYgycMdNZxqLZD4y5cSn6tyPBZRSCUAooHJfLLMrZamQNBsXgM8F29MX8cvHy51SQJ",
  "key6": "4GfmrT8QcqTGAoUam9GJr91FL8T345R7LWv1527EV7f5SpTYjVkzFWUHGSUMNq9mYW3vuFrdVMGeWgry9rZN2sPE",
  "key7": "32R6KoZsCxZXkn8eVNvxZVeptC3KxJC3bMgsfFiGUoUokrTAGjgCoFCc6bF5dcnmDEjtiWxsJVLCgdNfmCGKHxeM",
  "key8": "9zuzPvBBktrktF4ykc2fL5t3YCdE6zEjG9Mt1788Kz9g8ufSXVxa5AgvvrqKK1gpbT1PMrSWKtX66sZF23xow3x",
  "key9": "458Z8KGc1Kbip1usLXjyNCe7jfNuyYHzSjy9FLNSrNH6DTAfsjR8tqMHoYUpuAnXkQkwg6ZGM2Hzymt7dLvUUffb",
  "key10": "4XV7xmyvSu9BfE8q4jk68GkHdZt3kwyCMtXvGNgzHTqFCRebwzomrHUUntjGB7hdGkt4qfMYDoFdVvkvGsUJfz3e",
  "key11": "nA7Uj6GyoVtKytbVt8p3YUdzJRBroWkhU2TPW8iwQnKGnBavAPDThC6ycRmnqmYh4ZawK32DbQvDVkYsfXS2yYJ",
  "key12": "5cVHhK92sSiyG4EZqawUtmC2FgKnh4d4vTEgZhhNi8RDexjqosD7ey4b3e5xhvYsGSJ48U399JdbXTHPBMcWXRZV",
  "key13": "5eehEjcg4qck9Miqh9sirgemJaujSnzobqVDC4WbiQ7RQ9gUciAygxji96j8BnGWMVSkur9ANxfvBoxH3dgCHDC4",
  "key14": "3Kyq3h3oAcSHJbdCQMsbcaAbZvt28hYjLVnStYNkX5uCYWY9eoc85uhpvWH5FojgQyiiFkaEKXKm3W93hiWKsSwh",
  "key15": "2FeuxbdDQmrwPr4Cdz4fDdp9GjXE5cG7Wmq8e7D47KhpWmWMe4BzLCjFnYzNZZBXXeoWMisYJUeo3CA9PJBpnnf5",
  "key16": "4Ag9CfyaTUk9MzfDJG2QEtHE5raE31H3bp6jAZV86iK3hEwpEYcBYyV5RV9CqbJQBcwgMcEjh972pxLcyQ7wjzzg",
  "key17": "4Cyib5A48zcJPpoT1AwKjpSphApWSLBWzTbwz58xck8HiTXgqvx7gG6ZjxwmHaFh9d9X9vdYm8Fy2T11iKX7DfJS",
  "key18": "5e3SGCfmPE7WDSF3Xe1k1achBREKCGEH4xvLaynioR2egL78M4f6NQuLv3SQ2hXQd86ieXGkDPFEz3zTVn5uJNW2",
  "key19": "48rqHVeNyZ63Grz8qxk7EmfjaxYyA6umeZwaou6bshHzQGDXJ5djAniY3aKdxNLEErnHy3nrd7wDWwdsVpTtta7A",
  "key20": "5iLhTdVFM8m1akfa6PU8dwtzzQGJgGjVWirjyDM5MFav6nKQDkBKutyJvS1iVPBP5cdxn9bnN5mz8emDCcR1uVTg",
  "key21": "5mYRrb3f4EYCN2ryUf4Jv3GNUsasMC9FWuhKLBHSvUEXU9SN5rxZ3H71rSq7mnfR4fiVUSva1KLFgNNdW9MWq8oS",
  "key22": "4mYmtXqih4p3h1ST6qgxqz2o8V9HVdedp6aBYD82pZtUL4wcpRqaFBv1tEQPKkuGvZT2zqADgVvWcDDd8SXtFAC7",
  "key23": "5vEoEdNgQwCdGTtRdsykTFfp5t5TqQtSUAyTXc2gEWbEsQ6dvJdmdUEcWcV8B6monTSb2Bi27zPBaFcQ68Q9iTww",
  "key24": "3TPo6sYe4bTirbbEndgKcipe3mND1bVvb1ULnDJHF3zqQKxMQHwGSqWoXwgXGmNGgNNPC4Cu5dhqhG8yTLtMKUhv",
  "key25": "pfxaDNaSzn43nfPnc2HkCv2q7o1pCGuR1PoMAeSAfLj484aTJ4ooNs8Tmu4jbi22TUr6Fk1149WukbpFrfv5V7o",
  "key26": "5FSm1c1f9R6zjg6CoxRqVp8BHHy92K31UYGWpE7qEaACafLKdGdoCnede87PYz9KXVL9GshtteyYcxFMJ8HDtwUf",
  "key27": "5aBQjUMMgG8tSkXmkLZDgD984fWEkCLLCJTNZvgitUo5VArmH8CpZoNRjwqroicdonFmUYJQbmNSqJhfVDNQX9wU",
  "key28": "G198Ro4XfEpbxcHESHFnm5k45swu2orYGx7gsacwgDuJ6mGHx6TTgMS6xTNyGrAWL5hfNWzVSFyBxLTRzeBeVEi",
  "key29": "5jraXFa4eK5YpSN8Vxq9dWGMbJN7f62pfGYj8Wi4Ugo4rh8q377JmQf7PUVbj6DgrvRLMJYAnanxJGL6MYiqJWxt",
  "key30": "2K74e9QXgWXrTvG57i61CRURqdC1raCX49fe4evjKB8MSx5ufK8vpeMcByDg4giHhzGpyuATzXg1xhGbMdGj9qAX",
  "key31": "X4y5VFZwwCuu6EykPYkR39huvzfmeqc36k5YM8qQ54sm8WDCz11TFJNrdi4F4wtM9ha5WbsRP34sy6jnshp1eJQ",
  "key32": "59pGYQWoBd374Y8dBgfDS1965SrFHJKJrQsqKNdJGA9wKStU6Pc1psf8cbbb5Da9uAHii73jqnmJZLeNJFbfLWqQ",
  "key33": "3fcMYRfyZ2af3s3EW6uzzVE2JugoQANBXFvBK7KkEUZovmrx71j1WqbpHWS4UmwDcr8EHDEomXckKStop8dyV24W",
  "key34": "2NCDxQ6Ni4wAtNKrGfUvRHQDrMQVYEWGapXF73V2YXPmGjnCab13WJoETpJ62kjqLwLyTdhMkU3QjjZoPZpbt1Hb",
  "key35": "2b5dTXmqubP836Fy294ya16SR27ereqd3xHmiszicugoCQDoQTiCuaSBZXuT3rDLpgMNWGPtzeZeGeXrGs4ZzgU",
  "key36": "3eLR9caN1zwPY7b1Nnqk9u7ageKTETwm9QqQyzczUoNuEUeVuyS31cz3B8SRrN6DyQtcRJYxXEnN8LdaEkrUUaNu",
  "key37": "64Fg6qZZhbL4azo4rgUFekXDr44bqrpDdNRtXNCrbLaLb7Cjcx7qS13ExkLxt5u5HcLYbcPAg6D38J76qPd2dcTX",
  "key38": "4c3iHUWtD5up99MdaGy69UG9aTJ8h61coXyebpWodEuXM6QkWfTdq2tR7c9Xx8r8Na3UTQUV5oPRCYkP3jnDP7ph",
  "key39": "2vuvWzZsWUXQxHbAjm71QjdyenLjHJArpFGztNfgP1ctJxU54ZEA8BWELwf4yhDmxTCKnPNAsHsCKRy4FKMRyy5y",
  "key40": "whech81QedtNMmzWWGoH6ZptxzcKBoeDDGQ19DbWbhYWgUiGRt96tCejyPFZ7DwZFpyiwSHXL1DmXJZgMqM99SK"
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
