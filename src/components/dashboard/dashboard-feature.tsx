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
    "2GBwmbZ4q1sbw6r55krogqoWSyZgcPEeWZKBSuE1bFpweHntPa2SMV8G2TANo7fvz5tzKa9JE3UE923d5Kmiy6ct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u8eoYFR3jg3q6VrW8nF28V4wiFjWZEr6kz4MpJfQTBHHWaYLRUDjWfn6faPmZmP41n6W2MQw3R3wNrqN9hokNCD",
  "key1": "33ESG6YhjJLSv4iJC8E2eQsbDCVqNpGo63XKn2DGcLZbxT1odYHjuCybMHnPXLdtwMHTLA189dzQeKSujy3XSEQt",
  "key2": "3mP4iGjgx4mstx6CfpDeNYRP4wxiV6QqbgxQ7pzhMtawE2h6MkxuW6rkRVBoFShr4XEh6k6CZk3LHfe3Yy9KUcHB",
  "key3": "fzCK12GeQ2cw6QcmqugwxG6Gp1ZVNXAyZVoohpfgPoDZyy5EvwRRjNSzm27TFmhJEGY61tV7QHFDWdgjX2zQBYJ",
  "key4": "3jUSPVnrmHHsrAWcbmtapBq5nkuXpayQ4tgXkQSai6mW21ai9N3eGvfM1WnKr46ErCxcvCL21bszvbsgsTNbFQ1N",
  "key5": "3LyBBahyG5iuNPviLpVqQ19mkcjr5YR8KRZMqnLReHA3hrLFqoTRTKeUTYFkyEkA1n4ntpCuDUikz6RkuWt8qWUz",
  "key6": "283m9hnxN55Tc5fqVAucEYt9bGdkZFpFCRvb8DLtShJ5ptHu9T7JoEW4xr4QcXKX2Ci1LdYMPhvtphyqrk1uCfey",
  "key7": "4sjxCHwFHqfqeXKFYiQzHpbSdkr6TmQTEpzEkUP1dxzPQyUjruZJQNjMUMz1zxr6U4U1iajdQHQkHohurEty3aqz",
  "key8": "3TXaKZB8fEiu55qhGkZ7NVijp7vmBRdkh5sWnuMgb59XviBdp879CXNmqyM1ho5vUqgfQ5udFkfpcfFUe2AUsip5",
  "key9": "2Qn9TsRTPmNb5x5o4GSAuAwUgxoi5vrV2mooDarjszHWiajk85V2zka9GAFhxiFdc2GpEKFwcC4kMXE9h7RSM517",
  "key10": "22KQ8fGwwDRByBgKBhh6De1qgGZqLUx11CvZHuXMZNynvMp8g84ncaqmwkAj4fo5aPUnNn6BApj6MREvwk5GCNhy",
  "key11": "3bJ4gr1WqYrBPoAjpWrAeQQhpDafF1pGGi2bJzTe99LD4bKymSHZjyieCU7t5o7eQ4bemJ89kRVezvG6YB2N4wYq",
  "key12": "mo9zZ9daFmP19VY9FzBRdXhi347yoMF6s1TV9KUXst6s5Sg1yxsL9GXz7BzydodjQPNGp8Q4VPYCAZEeZbriwTh",
  "key13": "5Upvotv4W7tzBqTkbzxt5sgHqCTGYwY8YByQov1gjhMruyhgHweSUgsrC5dX9FdrRKFMdQZkPZfCTtp5w99XLspX",
  "key14": "7NHgcExRSwGywEbTFLX19rmrG4m8ZNyw4hyvJVQ9kAoUBWMKKZizLoUHoQevNA5FtHKQ6xNECMb9u6Hkq6wUxYK",
  "key15": "5hpMAKBEv8zU7tPJNRn74FQVwsHjbHZq4X1SKU26NozWk1fyEWswAhEzQrJFvrwcn4o3PGy1NmY2yPQJf7yz3A4n",
  "key16": "cD9JqCfoo8mAC2EPZYF3Gfdi1PsPDhHsSFPFcf37jwXTKz5WPXRMTBzkrm8MSa9jEQts3PvQnmLsiFVhbY9NtT7",
  "key17": "5ct9jq6SicUYX43Gc5nJNT3CnDhJ7cpWg442ZrYppRdx2zsp62gwznh4UeYBNxiGBsS739gTSRo2S7My4sujbfvQ",
  "key18": "DjcRaAw47svnMcTCzQr2Tcmzh9zDo12y8aLSHLqg3vWjcH8Y3oMizSgdRhfpsVW1zqeXfzFKeeDVN4X6w3XMByk",
  "key19": "2xJXmqdqQWVWetTMi7tdBVm98PGjV8wuqrFDX7F5iYTCrBZr8kkQxFHSgi2qjeHXjLkfw8Go1mkvo6nPchqvTsfw",
  "key20": "4Tc4d9x8Mbff8G3PZMuY63HPPqsquQfMLgDqiS6abNV2LjN1c5v1HtscwW9r3pjiuDQNiV5PzrqVXKTZDdUyTJ36",
  "key21": "2wtHe1v7CGa4NQ6B7KUTBZfi3tpcHzhkELAR5f1qYBvoot9fro92uJHJr1KKFZoT6RpJ54ipT7ogqEN6cEqH7hC8",
  "key22": "uhAQ9rmLqFVXqSMNfanBVqFgNnBs69unM7qmouTjo5z28w5Rs3rbd2WuUr4mdCemjMQintkq63ZighpicWzn2vB",
  "key23": "KFvWCoCCcYCqHWw3kb2pSvCZ4C6gr6mpwNrtVf35TEbBtqgwQr3ziowvGaK5rP1xDSbYsmaEvrNSqj9mjke9cf9",
  "key24": "5jnLjpBZCAVErtcAuTfoHqrrh4wQcQC32SDaven2ei7h8gy3KSVY2BSHcDNeZjzmErKSUiDBfwEgHUCnsnkDFwNk",
  "key25": "4exiEzNXZFpkuYjjCWDuYuKWweid35mT6fDjCEmjegKLequzn6t6Vm7qHtaStxUSiu8jrXtMeFeoDYaWDw1mKVpY",
  "key26": "8d9zR4gfrgSamFURBquWGb2waPE1Z7GcdrmBdFFQxsfJS8kibvjccmfneqPi59p2wkahDZ172qwgggcYDLW3ePT",
  "key27": "3m8TQuBaKoApL3CDRD7GWd6sR7BDadMkEHr8GEiRcSh8JckoNknHhHxoRh27XjSuuAb3w85DjSpE5qnr7SNcZUjs",
  "key28": "5qzqGcs5WuYvnzdiE6N2ehZwqJKWRsYfGhDp7qpA24aeEjSbbQkmyJohHHbuexx3PdyF1L9hgpyFzEFzwW41H3v4",
  "key29": "39aQepnzVSYc3mLQ3kwaXRnS76VuyrA6UxDbYTB83EL5ZrgELwUvTb6nZBvGj3f4a6rAjKAcxpDR5PWRuTxDLySf",
  "key30": "3kas36wQonYFBzKCVZ7BtbJqmkPAaY8hCPs4255YibkTabZZ7YqhLmmmq9NuFzuwbraH1XeHEAp4W4UibeJRXuCz"
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
