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
    "2xteZTC3LY631uoUDgb3NHyuwh7xGZMEG1t8EMqQwbK9SjTozwmr4gqTguxZFj2H44kU3giJwnmaNJfHBwZZM6Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9LrXMhB9o7rZAgMqz9Sv8zUnYLEpLWQ8kyeEMxYaDrVYkonJiSe1ptmMCyzchWWygAUe76FT3xiYRz1EXoB5vV",
  "key1": "48KaDnwj23Nqu764YnpvyxNZ2Sz3JWK6GTn8z4bGut9ZZSpEbuAmkfkvJx7ZcCYy4yA4BhRQCAoK4tR7oS5rkf2i",
  "key2": "4g84jkitdwbmdyRLMuB9feuE1nQUGayZoJYTJwZD8G6EjFokwDUPrrPcgDXovg5by65jPsJ8qu1msMzTPHBeeQiJ",
  "key3": "5oVzAAkR4vc2MnqtF84uTxBr7pirNKfo1SnWoTFhwM2u31rfPePJfvPUcB1Rp1bhuknGdzEVRfSp86gWhn8dQY5Y",
  "key4": "2UGdQa6ZYYx2kWozJLkw5cPG38FRB4oQhQREAftwptw6GLvHDiwvapwHSTx2wE1GFbUUiEm334KEX4GK1KhFsb6c",
  "key5": "3nqDkRPx225H1zJtFGmsHog9BnaKcQ1ucAbyYR2yY7RK82DwCiNVYC6Ukks3d9eYSyZ5fidV6rq2sRVraHZ2i4T7",
  "key6": "4sX63wFXFti76kUcraD7W2mMgfE5FW9WoHn2ridcJskbayPjsbod7ciDk5YsmZiWMKSNLGhhbXXawABMdij15L87",
  "key7": "W7cZc39ELPcYCB8nKRh9zCGnpaNt57N2ra4n29Krxw1i3MBf4EHe7vDKK84STLZvJWfCdxvhWUMA7k8RTzN2Uzb",
  "key8": "2BQ2MvdmyT4yQdpZsvQtp5huX2KTjSmJzhQsxeBzTb61pgJ9j3VXmMwGrRnMnqdBpFZww8QbkeZMDzmGGfc7gdjF",
  "key9": "66X6jaDFnoN1Q6DVAWbu1fsQ5RjuP2g3Mw5aY5ctwyJ4qeNijNPYRQoDeR33oarozQL2wNB315EiMYoPV4fsm4Xs",
  "key10": "5TirUQnDvHy2iq87HCSz5QtJr7yPd28bD75faDnEvJUQB1Q3GNuCAwm6e8eHJe4yQwMGZ6mDJYF7NJNrvycjyJja",
  "key11": "GkDHpH7AD2DGeFWtqNP8nHv4tLzVuaY6FaZFKJHZK7bHspcBbzDxs1iVigZD7vQBNaV4tBgTXCGKkEFtQb9VfdJ",
  "key12": "26szH1YykwcoRP9TntqFtnoFXfe7Jyurnp6UinY3FC9nP56MkS4VyCzK38BXT5CQ6ZeNN2dUgguKZMYH5TDKc8BF",
  "key13": "2ZYVzHkT2UbACWLG7UcDb5G4pkRSMk3z268EDxnXQq4x2ZWYAmuate2WfxnW7FBQLHDqe4T2QQQFVQ94q9DQa4Q3",
  "key14": "3QTtBSY6JHYhNr5CGJ5K14FFKGGNxyhD75Rtekp6QV9bZA4zd1nK3LVXD9arVFoSYbspNPcEvC8v75ohnYDir8fc",
  "key15": "4oKMzxsEDjZSkJnpDXmGDXZRX4dhSfhY5jtgFjA8pjSzzass2MHF1zoCE4greVxbN6xpMgC22XHEV1oxLaE2hUrp",
  "key16": "4heagAza6RW3eXhGjrcyYSHPgTThxkdyaq3Q1BNin1H3ozztoH6XfsBej8waewYF6aX1PGiRycUaZVGamZai959W",
  "key17": "5dUx2F8FxSTH6jA5S3dSQWKmWejZbRcbRZYR2ZFe7KYm4XuNt25koq2TqfiHiWiUC18qwjKsA2kxyY9P2E5suUnd",
  "key18": "eVDpwUnRANYVDNWxBw5VeSB3YEtZusBWG65UY6FjcaoxD7rAPDDD8qeb6MsnhMmmKTMZjcrTGpK5EfsTXh9cfvk",
  "key19": "43KK7TzSKoRNWfrucHPLXhKpMv99pfj8CZHPtS49oWvBRV4tWxE9U1zey2K9AsCEqJXcrTC1ARvat7vXG2R3cuRB",
  "key20": "311GmxuinPtc4VLCdsVrvc7WXFXtuUUHejreDNbBrbG2yvBszxVbmcnMcEFcvLPJ1wwfmGA6kT1swLuVcEjDWwuC",
  "key21": "SptWfatxaRJpbEzrpufKdyDd3b9HzVBvVRLem3wixA8ziSeDRY6tvdYUybEwWrf2FJw3GXieixVxMjKaHsccrf7",
  "key22": "4eW9N53jhksjFXd9CJT54wzfNi7u1hgQdjcjQK4MGrhRTS1kSWVRUXYRFK2SrMCmjJkHEFar54vydx4PmLkiuGJC",
  "key23": "3Gobf2Jg14othCQjzDCjM7bFFNkcVCEkcCa3d6gps3qbQa7x5hJGcDURj4R9kwracHA6YAD95WaBLv6cZzysfDZR",
  "key24": "3V9Q8UrrQT9KKzjhQGyudjdmtvED5aqRbdrsmQuUNq8YPbgn5aBEeDEqeYdAFpMdBXKME2ykrJ5YCWQaod6QiMMz",
  "key25": "3hkv43SQBBFJLJweW6hQacdRVFctjGhwL2aRQPw8QU77mMmjN8X2qmeSSd3HqehYqSPYJEzNFGV2mQGjru194GKy",
  "key26": "4SNbdpGRvB7rqbEVuHYkZcTzWNTZFKgFEByKRVHk8YyPZX5HpKK17SWF7cFiG2BaVR2f6AHgM4hcTLwChV6vQvjv",
  "key27": "3xu25iTJ6XHXNUp8BUiBTaL1wXJL2TFf7bBrAn5MKdTWzoNnB6TnvXVR3ifyJZ4B9BuaohLE9x7RTd7XQQnDtcxc",
  "key28": "4gBp7DdpTpzbZnKdHbfZir7Kp99jDapJ4bNoq7DEdQPHq1zkkpPYgZWVatoe9nFnLRrcEWehxkHXVwXAd4t9YJdW",
  "key29": "28sFMFdHJARWoK195iDWWnMz8c3NbkCQd1DMcjFHTm9VaTAZxi7GrvgUdXGyWVDUw4gPeLTguEC9KAxK9QnvPB5Z",
  "key30": "2dQosemMy6byyBPFyr9zb1HrhaLs9Ae4Dua1MCVzv9siQh2wYcZYvLKmVAKzHoqpWpvEbGtgtVMggjTbwzo8vgii",
  "key31": "44QoW3E7XqEniEwpTUzZebgXtZSCzXqwYvnzG3DQkZDUtL8PuNjKfxfYsfhTHNMT7AKC3simohTZmePPK58eHUPt",
  "key32": "122omokH9QHrmcPHAYLcpMhq62orDYuN18KBZhu7acbjD9hYBh5r9Pjn7qLAfh8rfMK2yg9taYDYMDU4pLefFDaj",
  "key33": "bKUsNDA3J3uWkg4xgvLAxwDJo7fhdAP6brdHVEtzCtw9LwaLRmHX6dvLaL1wbM1K1yS9aQL3x3ZZdEroDpKaPP6",
  "key34": "LUTApPSgRpgHmYYk1Ej5qJhYUFVuDtWkdvuU7PhfABWBCCQdwss1KT8yY3JBo3YHhv3ViwYKKtxqc7eK1yNUn9s",
  "key35": "4Fa9PJGGj2H73cGHaNwDZYTjo861VbiQ97nEHZLnk1KnCMDqbyPwWqDhhiNVnFUefBUHiEkXk7MXYJKxzmG2Gvtx",
  "key36": "8Cb7B1WpFkh3YAzxcAGRt87UBf22vd4xJJRYZkPCsjoS5TDMNVuNzthWZJgBnmmrGwVRAkQchWkXazgCubnHZnn",
  "key37": "JrRwhGrXJQ5qePJA1KdtNGTeW6oYzqU7LuyKYmSiHY1iu3uNuCjZ8oRCHwmW63AePMcUjy3C5t7NEAQcQHjJnmP",
  "key38": "3LEMYrpnRCzQqxhiDaweYEuuqT37Fa1pVSmidwJvM4fcyGZTouged8fHCE2V8VtsD9kegFNbHNEmzzr6vPncVpDc",
  "key39": "5qrWSPSDaoBXAmahqx57HW2WK8KLeTWfNsR4yvCwMJ27KM6HpNUC5MKD5rePan7AuLtzJ5HDqsEPsvadS1vhneT2",
  "key40": "5U7ueF86p96r4wtq6qjqdA3CzwMusvFn8VrpEUM69PjaoY1moAdfoKWgdu63zyVeoK9WVsV9AShPS8H75cUv2cnX",
  "key41": "2WzbQugidCr82AjT11UzJFkoQJTMP7ASZGYp7LiL8cdhEYa6XsUt53J2BLMLGK1Nf2qXpJMe3hBLwu2irez6aRAt",
  "key42": "ENptDp6GcKkLMHWP634XLQCNGSRKJB2WVzfiNhVr9E554sGD9irjNUucSfmRp6D9fys33BAyPrFFSP8Ffd2svyt",
  "key43": "3qUnMB7CVHup2KLru1JWLKnAaAHDTEwV8oZXcDNYstUcbPvC3bmNZitfqKex9gLkUeRnifnbTtbf7txCkSbJegUX",
  "key44": "33uhdGLFUaMokYy7snUuB4V52ByR6FsyuaCEWZjUagFasrAvHhmmwX38u7AWKaukbVFoEa6dFrshB9AornKVVBcQ"
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
