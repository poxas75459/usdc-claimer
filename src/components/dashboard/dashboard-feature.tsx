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
    "296Wv5MMDhnb99aUy2oUNnPQv6n4eBa3PzZoPe8nHm4pPyqd56gvNGrnHyv6SW3y9MKfmRxs6mVBTfeXENugMwCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J5CEMfHxe6aY6W71KMuMXKyJZPdTdMBknGbkh5jRMneef8zcrCSXRqghsC7GXHFHr6t7uPp1pZDCAFjZixvYTEH",
  "key1": "4PH5Z2cusrvtxYUSofGbrSQeQkfTnw1f3udnLiz84Mt7JUwGDZ5S83pruKryqpXVuMC6x8GQKAJSBkFgcbe7tnG1",
  "key2": "3kpgA9AqnmCooGbYzzdYBZcsN82HaAGSL5eREYSfFhwubZzYffRmkZKhVqxsMbZF9XiAnq2pVd13WLgyumXMAp5P",
  "key3": "62F2ayrXiNxvhETX1WSXZdX5CLJBkjRX1SpfM3P9ZyRvKsnwvaTJqqNjXWKMzbzGxgV7KXBwPRFrU6wxwEsoem4m",
  "key4": "3fzwt8nRs73rqHGHBYbktMytHkePxqUR8eZWUqySZFQw6uK34PQNygWAEUQrYosAKWeCx12hsf7oAVr952Z7C5ac",
  "key5": "4D5eF318L5ZvPb1DoonTbipd6jaEU8xZSusqDJoN5tfeazkyCBFaaBzCyxT91tQChMurVfYB6BiPQyGnFw1zkYFC",
  "key6": "5Pi6ZMtNnG6WD5KBGUjc7UmnfXjJmeHjJ5ADp3ccuX2D7uiddYQqzXuZexaZM9iaKcuAXJbMpAiokB1yGdgFr6nC",
  "key7": "5dLBdWxujbP6Yh4ctGzpjqndvziLVL8E7NU5ZiX46RsrqzJMw2ea92xvgVPTG957Aenm94Nns5YUWiHNgGThhCBx",
  "key8": "4zrZcznUwx5njaXMdicxhb2atdsbYwrbMwZaoPhjXQ1SzJZi75nMs48E5ybeFoaZtrZeCRsjGQfYuLf2G3wsNPdY",
  "key9": "3S7kg7jb5HgvB5GqSUwuucW7ot4TWD8KJZRVWYQ1fkEorFJujMGEW62vS9NAPee3GvWNmR1YG5krSX7eQMiDs2AY",
  "key10": "5PtGRCbgoEA8qVWA5iUDTtTCeJArZztz9m31vyqW8jpZvFNg1LCFgibNakaUa4Sp4zLwpkKXJZXuJw42YPKKViS2",
  "key11": "4g2BE4GmND5ZrvDQFxbLPSLjWW8GLaQGC7BscffmSkqFBzTdBf7vGdfKxE1YpH6zH9m9ChPmLwCmBWxP2QC9suGV",
  "key12": "3AfdL4PdPdDUqXym1QpCFj6D7i3rhJG4hsb6ePqhdmfzBzKcupZAbiPefpv1nepAAS8zGpLbZaj8Fc5HfeQpJQ5U",
  "key13": "5q2GccfAX2Dds46bQTZ5nzc3wQVfn8bJgKncrML75cVSAen1KFiE6Pd2JjZdPSESpvBDkSRF5xWqeFMjXwjigSvo",
  "key14": "4UnxqYf5HL6LkHoPNY19VHDnHqsV6zAS9fQwkYxc8kL7S7SFenYnhH2sXu59MMvLmkVTSqvs2VjBwmUof1YcTTXn",
  "key15": "2FEGWhSxi347p77i4kpnbZ5iy3yVnA2FmEGA84dxpHiQZDqpee2iCeztA1VmcMpYGW7689QkQsR6BAVyory2Kpdi",
  "key16": "2BcFariYPeqUSJXC6FAkf3zMhd5DyzKPRPkR49NeooC74yBwd34rvLoPDA7nm1Ctdvw8ypnZDRk2sByScK2Ptht7",
  "key17": "56kt3wNcDgxScNE56Aj1c8KrrP3MyN1vRPFcnPzUJsxxhT8PBW3e4Lp75qfT1qtdGWJXrnPoSK6xDiG2jDQeULTt",
  "key18": "2RpGf9dQiVSZf83SxztLT34MSgv2xVgz9rhUDitJmTEji9ikkD7bTaXbqoaL2qoYjkcuNNHS4viQevqFMFRUq6pY",
  "key19": "5g8M4KNkdthHGDvrioja2vJkdfnvPRuZinaEF4TK7cAQXsarfsXACFGm5b8Fxj9SLUJJfCZxKDoZiZLDadhZCN5X",
  "key20": "3pAPvhtH3ZAbeezLNSiRVypWGVY3GCzZz8XKrdDyB3wc6CtPQWAXcd4jA3pBAtHbT2RvaoXFD4YM8dyh8kJmKTRG",
  "key21": "2vRPokAmqKMh4oRznipNaDm451UcqtGub3yqJ1WPozazmRA4SzHeF97AYPD6br2WBf3dHBM2SEiKD4Mf9K3JwPz2",
  "key22": "57ZoRytXcoc1amPRm5gVNwA5Q5BGGyA92un9fdjLZPEAQjiPnVgoFA9AR8adUK3MQJoehbefcHXCC5ks4P3vyVfW",
  "key23": "5P5Q88cyUrPgvFX2UF3nRzD5iXNiqXuP2fL2Nmqh1TJWqQVRKsVfypTwE1JnUwE2DvnJCPGFsHgCfHN5QsYKBFkF",
  "key24": "3FmSfyugsdqgQ1bPtyXfjQky5Lb4mLRGFwb4AXLFuRb9QvGzVaDBhX39BYP59448zKhiaUw8Zd4xW7Mau2qnHZX4",
  "key25": "eisgmAW8BBxnQMovcFh25EBHeDdQkMqihoKJfaDyuTqFdJAFDoMATvFzsH94Pnb2dXXKEBwAk2FGi9vb653Tyt7",
  "key26": "5ETCh7sCTYXpZyfWkTyqjctmVEk1XjzV6FRgUuHx6ehhhjtJzeT3ct16nqHS9HYNo1YzMxw4dnUpLAxKdvFXQ2Ye",
  "key27": "3zxiVYQDbFMj9u3P526orznEGPeFYBNuGtBdYFBu7LTvrNnt4b9FtdUqjAMX3LJWKK55BPNN8t2mAQzGq78WfdHh",
  "key28": "63eBFzxxHTassjzoKj5swQQFbcdQ8h5aFk2mh237xGUSYz9UU2WfySGjTgrQaf8WrCsC1SFGARkdrutN6ecXVySk",
  "key29": "586JPrBcbughT4vtWb2nwWHynmXFTaJnVsc8QmvZfnuGfW6bE8fMeRRJBpB9CBKjP2WJYWBKZV2Xr4eyfN2FFfGG",
  "key30": "5gJmaevXDVf6xCb3iTnr6hFAJFdktokdUnviDMakVxdxSswozjXSSetsCi52uHMnxfJEyp2EyRgUsxQRn49tRxgw",
  "key31": "2d5r2Y2HrpgowGDEC7nC2R3yhhA4bYirsjwS9k7pTMsC1FoaPq4EVR2Ap5mAgCXkowzWeXyJh6QB55AM1UETLH4R",
  "key32": "RPiXy869K4Vi8dYc5Zuhr5CN5kzRYm6PWtJyG4hjTHMLidWmRjhBx67mg4d6DU1Jva4oAHpqVGXJVchdvQAnBhe",
  "key33": "4x7gc4SxYUmRoarJWbWJx8a9qRB8Gyd1HWCDncEDS4g3ks3wN4pRv8shL6vu9gqBrStTTLvX41hUi1TUmtQmB7kv",
  "key34": "234tEwChMTNiUWLWKtTqYFoc9xFmzva9ZbEHtkxuj5HHUEFXwGSATcF5jCfX78obnmt1XRhpcZwbeDiWmphaRNH2",
  "key35": "X5qHc3AEvrrVtmYESioecZrYXwDk561aWyNdY4Xc1LHZo1TyWnGxChHsevJmHp8kBUXFfni5v9zYvthE2PPbVpe",
  "key36": "3t69FXyrsTNrnuRghcretU5QwvSeLsXt5ZsrErPjnwAVYGDGHHT5HgUYy4MxYjom8AvcmeGFsXTpPHS1jMroZcLU",
  "key37": "3H7z5rqDeXMZn9wk1wh2wPLM2H5kLsn3VfCH99fj43nBLEUKtVm8ymE7imTeAfSB3RMEhZaVvQtv2TZ2LF2dpyWj",
  "key38": "47VJJDcQPmYWxDYY1CatCdjEwtnmf8P9NQBnPkUMfw5d6EYD7vAsV9c4ZKPpp9wH983HN8WitojdDPBFPV6kcPjK",
  "key39": "3umucH6qEMdB4vmStssK1PtGJ9kTdZ3ezjqb4zYTH62H6BUqFrfwA8hLkSrLy5KyYDcymKWRe4Uh3AZ2bwrgtGjt",
  "key40": "4hhZprf4tARzt7D65EVELYpMgFQDyogT6vo4xFo7f2FaUUap54rxUA2765YB9TxbEuQeC8F7LrPR2peeK6VeMCxJ",
  "key41": "5LE3HrvkrxGwg1WbanUvHtaruEFEZwLDcny2oq4sbcNNHsvKjfuM4cCh1LBjtowB8XGwH7Gs2vWED2GL3NhGuoGS",
  "key42": "2xwoZv5PkDYtipCvRQ7eeCCRncgCff5nXXNytsPbVvzXrSPgNPHk2K7N65nf2kidCP3wBguawPD3FSJ47n7LuTPv",
  "key43": "65PWQB5rr5ekbreVQRdwiVTcZtAFzEwwxeyX9mePiBMfyM7wBVjgAuWkVEQoTVM8KDoNtib4NEBGAXHBxXhm6oyR",
  "key44": "66CJGTz16Ev2NyS3kQtDyE8KdagXHr2jbpdrDKkLWK5A1jRS2zfBar3VgvgguzrgaufxVGhncnqVFSxzto3P4ZqH",
  "key45": "2CA7Ub7d4zLtXJepg8svtBmW3Vr6feEwDHYvq1PBqRc7717pctht8Ldb1fpigsEEDLyekyuWYVooLFRAnRB19RWn",
  "key46": "1cdZfvjALA64gngr3oHQdLNmkbWwjJv7kndKeinZC7ES9Xo7iKYUWjbvtCoB237iE5Xh3bVXQ9kiDd9WZKAjM7g",
  "key47": "4PvsczpVuNci5EV84S3mVAAroAtwQBdUDkwZDAD5tKDGiBAFnmzNXEciG1wbkcwWNpwkPCEbHJJtkCrEWJT5JWwk"
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
