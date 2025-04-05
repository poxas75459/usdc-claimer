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
    "513SqkpnuTEzoso7JebRfP6X1eSGHjMaawj4NtPyr2JPdCWCzxdXHgNJrrQNEbEA9wBAK18FUzjzBBkbaEpLopg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryKhoZwB4YzRNT3tvgNH3EAyjgSFNNpcUbQMBBpEsos185WRcGtRBDRDFtmD5W1hkxuPucPDSFHvrk3jZhnZ9wc",
  "key1": "3owXoq7fYTBy1yg8qJCSo9pHpUAVEJdMWctUWpRDk5aqsEaZDQEza39nunSrXw7zxYhwYGiCFXHzNCUQWtbzrPDD",
  "key2": "3LgdcusnfE4ub81xyH3mAtoigCfarGefYr2U8X5rtDw9mpnuGw9TNzLtPEjEMguPj5t4f6H7D4RC3T4gME3pkJqQ",
  "key3": "4KQqdgobTh82angVLcsKm1WPo5KMkHJcPm47vsz7Lkr8GGFiGA39GqMnHQg2vXjxyVo18wtucZgvxYaJCcRmjDzU",
  "key4": "4obxTBTVCW8hMD1KGwaY3zYpK1AyREoRzuJ8fVwE98h4ecDrSbDN8DibAuF1Apqwd4XqopwnxNaDbpBPHGKM9Jhk",
  "key5": "3Zpyzw9VrMA5ErhhFJfjoE15N3UcNdhR2JS7pnXbudkEEBS2eQibDn5XBqRzhwg8BGqgQMyjL8NduucPFbFH7KUb",
  "key6": "3qvxdz6VG2g6VMCgNwnV6N6L4rLf2TwbsLpYBicPytt5mtfnFKCs4CNj6vk1wQ9m2zXr6m6rndD7fSwNqFAXXpxh",
  "key7": "3RZxf7sYqWLKyPhtrkdxnrXqoa4HnRq7hPbgwWcjjjDHRDHN9MAHxiAS6of3RcuoygdfR15dcC4q8NsGN234Gu3f",
  "key8": "4FTJ85xYtD2B3RJkU9iqmeBBEQ4PPhLMZZpb1Rk8aEwpZtvGV9GSnqzKrSySWgDFEdA9UkyNEwpAREXCU68HuEph",
  "key9": "55UycRTmSnRmDCZbPLFtfFt96KzJ25d4NRHmW2iiiNctDZ86vnwifoFzAj2zzpwMYskqSK9CetK2Dcrp9SePg6oZ",
  "key10": "5R29shSgqb5BAacQT419pDmse53Cg1FWZ5yjfJUgVb8mjG8rVxQHzEDuWt46GHo5C1rGeyWGqHrkbfBfWdZfWqvh",
  "key11": "3fuzr8ZcMXCPKR1m9JP4S7uxnhMN5LbWeqSG4ZmKGw6QZm6p3AzrJzivrUzxVn2tsY1KvwhAXz7rZxgBP1xnbPXv",
  "key12": "2T5JffeEdr6epK2LPJrXmkZTy2DGnajyPocWkBsfq55927tq6yDc3Sc2Zsafow8kAM4D8ybxkCjPP6mm8cgSgBPF",
  "key13": "4miLrodxmEeZnoLLrrdK3G7ofitALLH4cZnFWn7UBmBcw87SK6B9nv5W7G9MfDTLtXoQTcg7dn76NA5Hsb9Y85V2",
  "key14": "4XUnpVPvgLKno3WaTMMfHTzjT4Zi6pAdCMTighUz165AVwRhJA7bqtYa8KMbMs9rGt1DCiwsuayxEUFEq6fW4nTy",
  "key15": "ho4JtUnGxfiuAdsGdvpMC6NiAyEZWwx5e96wWnpwrrwYrWDDn8JrkhxAkiwYvJ8qis22Wwz1vtiohbUgRdJeHk4",
  "key16": "4YcbSndvRMub5qd71NwsGHavJH8A22mC6YVrM58na72N2ATagGAwCp7LogwASdgqPWiAs5sB2Q3pYURhoYimDcgE",
  "key17": "4HuduLMNwVeQmyWJ3kH9WGeatjDAoweCqostGeF8mZHZiEwHnxLY3ugV4pdrkeTBd8Ga7aLKZKSwWibAccTeLWHe",
  "key18": "5zHe4mGMGkP5RVSkKYW49FDBMw4HpFN6dZhq4qeD6gtpk1Lx9MU5fnSGHj5zborpeoijVUQkxqt16kS71PRiqcGy",
  "key19": "3Gnc3DVqTxJ66aRktqq1cXhg27PekVGmuLGPeFvjRrqywHhahgqaNRhScDA5ofHenNNQzxhM99a7ZPeksh3EGpsz",
  "key20": "367Bdt4LWUCZ11cBZFLjwo59ZKZrM6h9wgLrfREXoNNgPR1EmFNKckbLdGi2HjdXnoD7WRnLwC9gUZiMSnVC8qaH",
  "key21": "67iwRo1PwXz7vYDo49VCJMJPLToiHeDykQDok93RJWqjhY78vd7E6vaFReo7vw8RCvd8kpKSrr3ViLHAA1FXP1sy",
  "key22": "2ey5Xzydxn66fizPq5qBgSSChKrR9j1GSN5BVwMnv7T5oXE1wAjcdy1bvLMUSktmkp5SJCMcTHY2UUVuKy3xsj1Z",
  "key23": "57oPkWNTtqxXysEh8aRJBnbbQdFKRTzhFW5C5VtLt4NwAVJ2QvoPs8hCsB7BvMhk5g2DFeSepYvgsjYeFgQfNSM2",
  "key24": "2tyHLX9RhJXpNyhVrvfT5Dm6C3VfDiVMZV1WDJjf9GA7eL6XZAZd24q9kJLbqPhSw3Zsv81qaWabTSAhG5CbGQ4w",
  "key25": "5iUN25WY7Q9tSK2tm3BWEX4TPhkyos3Kww5THpe5FsEgbYh3MKcYCmT7y3RbGS5Nx1AhY9HK6Cb4znfGMpizT6s8",
  "key26": "2WAe5mVKW7zE4PXKwneJi8hxzcGVCJyVdAy7efcCLEhNTV26NPtgWShHQAoAK7oPZEnz7VBaqXbZshWhDsCPuH73",
  "key27": "2aUuQScLre24kTuQznNhaitpdQiBKZBYP2eokuytohzmYY252HDwDuyeeDZakGEYYb7cvASVmghqvRby1mgcxyuJ",
  "key28": "3Lj7emo25eANpKjMKzQEnCajNmtLVZsqvHHdWLXR2REuuk4giRw6d4txrk82uL3CjvhWkkP1ajA5tXMAa3g5w47R",
  "key29": "4gSQpN6JftchcBTAQCktzJRcRjUA8wCVAKjMyBEwjEv7hrp7Fqi34CxLM8LAaK8JoQ6JTiDxty9Pge7xTSppsDXc",
  "key30": "2BaA71kchQsxshNzHQhS1RSEjBmibZBCc3n1EseXeGfYeaSVpgJ2kk3xuHkcZVZop8jS21p8gZkFJz5ACumvvNM8",
  "key31": "2de4HxRABAAnGRC4fmx2EvpxaWD4QzHvuPAVwp1J2CCWStW4Fyw6v6ZStcY7A8e4T6Cr56UBZ3PRzfS5VNefPzxA",
  "key32": "4CoofkK5mMBZyCpN2iW2QsK9hsVQreuu5eKThLPHnnqk1HuJ3V6aPBnSRCWzeozr5RB5nC1Dj5eg85HxA1JANbVN",
  "key33": "9pBpzd25dXjdHELS13uLeH1iLP96Tu8aNEhjcKtsBmGjhtCCC6sHbvavoAJfUi83inPqU1MerVqhyzV8xKoRE45",
  "key34": "32ZXNNkFw3MR5x6qndpAu7i12vgrvsFa3ZijvPFJBd5He8wCCcLacZ2TALMK6j71MqBTJtb7BFXnFbRubjFcaNkf",
  "key35": "5e8SSKH5FBZGvAZrXpDoMhHQ9kqbGZyYsf5USErZN3Pz8bgWjWRt3frG5sGuvksQmpZwdE57JSwSi23CR1SykCrC",
  "key36": "5yWMEQ3AbSnBKTYLVY35GLgce9BYxv9oL5ijS2CNKHaHUbrUSUpt8LYf5EEHKGH93yMJ4P64vr8hLhHjDgxL7kTy",
  "key37": "iF2foGYrTNx7rnaPywfzhw3FpzmHLrtqa7swSQBzf55EgYX81Y1SqkymQvax1LCzFdpWiNq3wyoY2vHGnQWcmu3",
  "key38": "4b9ZHyxWXVXWc6Qy3Svd3cV3pynDtDq8KoCTtZFWnP7roR9jWewJEbNnq8fanPsbfamKme8C6dUdd1bvKBqnLQFP"
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
