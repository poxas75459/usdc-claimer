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
    "2our2Mo9VXggCAxqVLUaidtPr6mfVntkA4friNCgUqw9s6Dxi4zMN8iF9U557qLrvC71VTyXqxV2XQGT3oTA88Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvnuZvUquLRJ8wLt8JhcK83qUYXn6diJJw9BLA5J9gxnVivPXt4XDx4uEZPm5tgDyEYfCXTriBBpK5hG62oY6Ak",
  "key1": "tfyaMRzy5DidfXSfcWrdX3WQbHbwAc643GfNZtwzC9cTEPt1SL36gapsjGtWUv6WKoW9fVToMnJTtT5tsp69AgY",
  "key2": "3cYspc69JNByvJF6wuNe8CtagpzR3zYoQ7iq7Ltt7pHtB6GRMjb9voJFTfGXPYaH6bjy6FN48YDM52PwBtHQKBnB",
  "key3": "4UhgM5YtxZrjoB1noZYrzmjnHZ6pd15S6iQPQURrJ43jNPfAZPUUMt9QcihSeqUzBPmCWnMrQSr7A8pMbCeDNPuP",
  "key4": "XYkU8ff9NkiqJJArJ8LPE8oLTYSmdX6oJBmB2KSPwADzfkLtzSbAsp4uu3cnUU1FGbRzLLAgz2Sea9WctzwfhAq",
  "key5": "3cYHRrEj687TbbbtUZoFgStSP5HDw1sFCdvSJLfXs6RUoajzUjhTPtyqMDmUFWCrZSmiSdyWYSvCMFCZ2cZ6GVL1",
  "key6": "6u9Q2nbCFj3jp95dyCrAL8DZ9pcuqGtFtqDT653HUZ9dxLbGQ46rehBRTueeZZ35Lq4RCwgmDozBddrDeYPxPie",
  "key7": "4FccWo6CHUNSoN865qk4piWon6XkLgxLyMASfGiu2rfZuyagQLsVjnzVCAf3dZjqSYJ2kdsappyz74d8StXEbBcb",
  "key8": "5hPTxwd7YKCWeK4LFXKfdypHYonFz99Kk1ZbJeWCyRLt8XVcmRAo4QaxZ7mkEPLCPgBEB864ZTm1YXtdPYqps8k9",
  "key9": "eASqmuMH2VJYorfD8cJGbEACSxBHf13PqATZMWvxngTUMbgzFHsHRj9cS283YSt6SoPNUzhAx2bszVor6QgC9EK",
  "key10": "5i5t9Du7v47dNCwmGetvPq9fbwQ9as2SWzJ9TyeBx2YreSVbZ2cH9HXc2qjKRoFrGPFCk1ZrbGG9Lfqht6isSfTs",
  "key11": "2A9bxuSTrrNyMkJcmSVaE2vn1KPn7xBF4uLaCpiD5F7MaVzK1KMHtQkhEiH6ecJVAfUcxem72Af4xYbCZJtN2XrU",
  "key12": "3XmJfpQHTCHWupGhfxF5Gc3qKM4EVbWrkE8YKJ6z5BPSvHDEwwukMyY1DvWGzaPC9pnRu6FXLrCXNfcSFXC1W5x3",
  "key13": "5ZK86cUY8thsm5wtTwv5AZMc2Y4tZ61rXr3px67BLb8r1R9QCqioqqzx68eapixCti3FahjowpjtJiuoMdhdYmHF",
  "key14": "66HcXusMKqRxuQiMtXrkm1kJyUxru273uKAnqBH6KaR3dCJX1Hitof6mo4FpNWmcUKH4FQrP5UqUrui9xfFts4mf",
  "key15": "2DfFqFEo6XYjeBDEWc9zxqxzLSmCku3TiGVJfZzx2x3zTbHnBpdxmNFuN82KCCk1iMGeVKCxqwGDqiPySorJABMA",
  "key16": "3Un6GavDiiawNArUjkStLPQrtSonQpqM1bXwdoYDtc2fJbGmKsdu4EabBYbW3XpBesGkp949QtYguRvzKucS6kg8",
  "key17": "4EUjdEKUk2f9PA1nSpKXQA15z3U4gsN15KcNUPzGK1vHkv9GMBky8x9qa1cw8oS9ijoaBYondFeoEqiECdjHra5a",
  "key18": "3PQCyhw3dPwCBDjwQBcNwgPAUBN9nMgVBwn7xkHi3paYnPE7puG4U3tDj7Aa7Vv7tE7TTL5w7ig6QLiVwf7zw4Go",
  "key19": "38ows6Nx6gwr9pU1pAjEg7aswH9dkK38PtWEgCEapqJtU42ndu3jHV27uW3WgxWJE4sNmEmN8MUPigzwWSLKe3tr",
  "key20": "2oBqHponQigcKid7VoiUNDsM1buPBuu3FpyYVhDEz27MyCrqWZPxNsJ2XXmu8iwDounffZYUBdfiCUqqmUwJKnNr",
  "key21": "3u1XaXBaAYiHuJktiFqURtBFeeFBG3Hnq1kLbNmfX694naL2FZGtaFTxqKRw7woSGftd89W3Djb13Sfbu5RLjhC2",
  "key22": "3PRYXTSgyUMcLetckezWeLX6TvaCNtCNUtBeARJSBiPkPiSi2o3jEGEg2dFaxQ8HZcEpY2Shsen7VjWwgKmQ6Prp",
  "key23": "4hHWa8eU2Do8ZsiQjrhjhQDSuhZ6zPiPYcmZ9d1Ma7wUSsr9dzGY4Fx6wrgBjCKDdbMz6Uv5N25zski8reckNMu3",
  "key24": "2N62gwzg1QgzjWM2ndXQyb9Jwbmw1edRxSD7rsS8WmZD1Bbd25uYYue5coMxkxydKXsAz74ywh1r5j9BqG9Bcbs5",
  "key25": "2MR9PdB88zJqUvzCrFKnUMuiwjyZmr8PBuT9D4wobSqDEwzVzrSgECTaNbvFTtZbcP85qHpeoST9FaD6NpbSbYqn",
  "key26": "5hruNfpAHQYYZS5nmscML2VBmfGQnDMvsFHQL9YVYQSgwH3vPGEtTZKVHAxiitnicHdczgPQGzq6y7UsRjrSyWuV",
  "key27": "4ExME2deLxoCEWoLDYLyzVhq6t6fujzbGsMGPRNiwD89zrXZeETCWURXfQ5XPSwJHPay5DuNovY1mC4e6PLC2DP4",
  "key28": "BY8suMzazr2pgN6DcU8veRfG1sn4kSa5msoRbrnbQNpECDxuP1msbt9pkNWW7i6T2oTdVB6LMV1ShgfcifrxAJF",
  "key29": "4He4sz4AV1DpUDH6bKC6GSDRUsDMBbE6D2HzbRBBB2zvVfr92KsRd5bBrNvRpadkNkxg98RZmZkWoC9ndYatiuZP",
  "key30": "fwMSZnHaBjgCsMH1GANWaygLbXQ1ACwAQSVZ45qkg4DaNEU2nTevqmtFxQvGLKE6wJpkjm7nVhHWeNxdQRYkSSC",
  "key31": "5Cj5qDzcitqKfCW2VEqDzJRmXTPs3RRNS3QbGMfjtAgS72hkijMkvUnPBkC4mDgYvDrrTWv1NnipBGwW4HKnnjNy",
  "key32": "2YJ3wkse8ARE1b8ESv8BPLmwfWmdbvkfEFVxtXeV4c9vpDKf7P8edDyMXvtqdv34v7JrzKL2dHy3UtkjvrhuLyHc",
  "key33": "3JQcS6tSXBxkXzX9tiMJhFeUgiQ7j13sSRNvw33TcgfN75ANaPzQ9p1Fuy4WpzPJWJw6BFtE9x37noohc9huKHwB",
  "key34": "VMQ5nbyu6Fv1JbvwSb7cuEMgwEseymEZ44GhvBVRhcGDfKGM5TzR7Du4x6ocdkKg3y6NPLzotpTHwAKt6p8MqjN",
  "key35": "63RRK5yPQugusGuHGJ9qFCNKGCXzNDeo8ocHc86URJ2hnz8izHqQr7fH51YMRhyX3AumEtvVu2QHWgJkLcqBTxid",
  "key36": "2zeazhn6bN5ZLAahqtZCLmGF2FHzL94TA78xKeNinJ6TwHN2N7gvUGAZKgoxciJX4ovS1FS4rBkQtbBSg47hdt2X",
  "key37": "3VWAY3vV9WdJEsG54Ajqr5fu9SWPbw8M6nM3uwKFCZpeK2KbQnv6vrhYZ3EYSTxSpPvCNdCtA11DQCC4vnFWgN9V",
  "key38": "4K5Yh2BJqs8NsATzcU9noxsYzKe5tcqCAhwExBJsbsozoNVR7P1X2gyUJnQP3kJ28QB7YpUTd5GtXWQ76E8NGkRY",
  "key39": "49jp2LeuvrZmcZAtU7bywA62zkyPbDc3Wdz5JGYRSbXyyKScKAbRxdvWVcF3q5RuTNgreUhFr9sEBaWMZaqRLDb2",
  "key40": "GCFMUJ6VtVGosg477ymdD2ZMw1DaVrP8rPj8hcCAbAffDSebTdWFYbwn6wtWTeY99xDad9uUmPsBNQdzUMPKRtf",
  "key41": "51NmQXU5hqrrs3x3DmLnmCYK7DYyfjFxT7wYwshTxHCkQuFf2HbpHfmqfkcPMXsasedFbrn46ycXNJurQ9kHaorg",
  "key42": "2jQ7FmrXnACajiD19k3PQb6Ece15uHiTRmUVj75ZmYB19psvuRbj49TaaUeWwK9rqMNcQRmY1NzdL7oNCLJdRMNp",
  "key43": "5wic99oxHwxe2MXAw15eFaMRRNET2Wsp4GDnW4UaF1Rw4in4aW7VC6muW3sbjiGpBC2o23w96t6fgVTssRs7yo4d",
  "key44": "4THr3BPSJ6Ru4T8LJWAbv2CFnTV8nQE8Q4wpACwWy9FWF4W43sXs5rSakGZSud81A75YUNuGewe7fuFKYLh6vpTP",
  "key45": "2CTZbNr5TKY6K56mnNiLQsKMugbS2AKvAMCS87SDCT2k7zwmKXRB9VFjHCq7qfa9NcKHTPoSWgxLxXXRxB1B7feT",
  "key46": "3TXwy6eNW1LaKYnUgaeMe5FrriYBhqfLPe1rtUAFFUWDhqYWQdsnnYJppW82ticmqm2C3n2bn6CT1d24BcktFzHA",
  "key47": "3Nb65HM7h65uoRxE61PPoNYsivApxbeMakHwd7YTJSxm7rGyfSVzU7DceGysacs191LAhkbgD6ezJU1SAhBJMhKt",
  "key48": "4yRTXCakoJ2PLHWgX3suxZNTspEnVPVuSyXE2YmHdXeyDDPUZvmsjdPw5eJ9gc2VmbDwAPEL9h4UUpHikZVBTuZR"
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
