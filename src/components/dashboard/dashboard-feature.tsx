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
    "2T7vg3ruD2hYXpe5MbRXfUr6CD2MiP74BAwmbijv86r7n1Wr5V21WEz11MREmyVam9wGRxdjjubrU6Ey2zZyVQho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V2qWQQaSYeV1xDcDA3kaPodkzgXZr1ucfXLRdHtHCrBhWCwzgrjyS9nAeaFsJ6cz3h4Ndh656sN3ctWkiHVdGFD",
  "key1": "4S4cu1WFimKVomrAkYwCwLhwAtdpzGYuCvb5LCj5PprC7AR1tsTFirwbn2rNE2kYCGBBFwxKX9JuA73L9dvdPPKN",
  "key2": "3dv41u3hiS1qXmwk6i7cL8TTbxT1ovkWPT2sLBNXBb3UP2pzHztJcQ7dYc5qHiMUrCjUJ5yDb8xGdSkM7HGHBoVE",
  "key3": "4nxCQr55oaVQoJBZ1eDXpvXJd38C4sdfr8XS3vvueJPovGWpTJh23V6mraZmjXUzGUAV5zqskNnz2J9ZxisB8ggC",
  "key4": "4ALVP3wvLASTqfWDByw3VBKYFzCiaF5oKpnPfDgUg8gxG1Aw8Q8Rxq28Xkpj7zQmxxFDDYnF5vSHhEBRq2VUxP5M",
  "key5": "579mepU17BpjeJ41Nu2umoMBhsKLxUXTEUVtL7WAWomEr7GMPjEVC3gn6aaAKYyA7BgVsfXEmA2i4NxG28fb75TM",
  "key6": "5BMKHMx2ntVEkvgkJ5eSeUvhdi6r1t9FSrBzQq6tHd1vNfHdYbCVVBzQqmSUHDMAV9wVLhRTp3NV5XgDWGdDMW9B",
  "key7": "27YtySXo6jTpRK4FoCv5B782ptFDvALywCX2GCYMR99LERgm7XZfS3cq4tiVxwF9D777JTVw2ARHXRaRveFH96iS",
  "key8": "5RpDTigjufWpYjGn3JprWNQE1uZQRUwvy875hdVHT7BA8MhNsMaLagyhSxCpcrL7Qp4zdhR7GJoz6T9U9B9KuWtf",
  "key9": "4qvRpDAuDcPNfjFxq2VdrwBtn1SSqR8ztjyYFzX32gN6GHH5RVvgSBReTssK4QQ95ECARWsw8RX4gRXWq3p3pESG",
  "key10": "53AiSktogkLoBkpNS3vXi4p2qkwomwmVEjJX7SNHKugWGkeSGPPH57pq4Sqev3kDnTHLbCRC1vhXpG2a7MTCEsz9",
  "key11": "5ci4uRwMvc56ECQoJewqQzMW5izSEitWuBjpQPkKVQDsZeW5JnEhX88xmXLbREFDqeHCTTLbWpCiWWhCWHSy3bCS",
  "key12": "3SCe6cNmrRzDTWQdh1Gj9bdBZ2CtEcjJRg2mHDgE4DoenbztS1DNR3KjMu5YHYb1pmxXj3fjK2JoRnQxYkPEWFJN",
  "key13": "36iBJ7Wi7gB9rxZNrvypF5ePSkxvDr2ixP6RCKB94cADtRmnoam1Cv9XRBUdYiNiRSyJSFAookoErcEeMtXhG3TX",
  "key14": "2mQwLWvFGxUxMj9HBFFRybuRLgFmfDQY1KPL2ErjrzK9PLhT9Uq4dwpGrJvpdRfA9DM6GzjME7tfdSPqZkQBaS8c",
  "key15": "23XkiX4g37wCYqt8vXLAvceuLAEbmmsWsc7TDLxjyC3i5YkWa9abG8UPtPYMemm6Gvd2h9s1sQu3NP9zrcVKiHL7",
  "key16": "5sSdijPpPYDHsy6uT8WSsmMvGSsnhmBqb28iDCSzhMb8LXqZc81CZwi9ai6zbsxC96ndsQLYaA5Snhp9U8o8L3E4",
  "key17": "2jqSp3DkW5oV4Up2RVPtvQTXrtKkPGZiWbphgseKL27pPajVwmihmfVAzkES9fVkvTqdKGM8e8ni4xjVAtoxaRr2",
  "key18": "38CehfWth4vMdDcahzaohNQNNGS4CTpnbXK1KfFRVTVJaYrc8uYD5h3fc3WkjK8gXpcgXWyhznGX3it3Ha8aQN8e",
  "key19": "5t1QtQ5nVaf3mgsiPucNnYWgKZZKrEEmd2Zu91Ycy3X66VNDX34wjVNLXjNGN1GwARJkNsmzmecoyAPMnUhKggoT",
  "key20": "2Z1geHH8hjZvHPAdmaekA6FwfDJKEBE5FUDvUsjA6Qxon6jSuMyX2cnwjcYmJYf5Wia4prUJQenv1HEarQWWoN67",
  "key21": "h16fYwDccA6Tu2gUufhXMxZdWbTWMU8sXBn8srJPBKGrxrqF6HfPjQ11iHy33RcqPTSvWcZP6iXah8nh4TinfEE",
  "key22": "5PkXiZC6D7msxVBzRhEGvAVYNYniR57pafUoWpQ3fAyWTrRSvcbB5iht7n2TGaoGRuxVz9nUq2Yc3PqwN3RQDr7g",
  "key23": "54KbdxfGwvwgULg56yfnZdCxg9W5Kgs4YT8ZT2Fb1JANgfuTCksum6biAGedn9Bmpvc7JuMwUAzHLykngNT8PRbP",
  "key24": "2vyKSsCyfqmSgsv1h16QchZHyyP1dQZChjBS4He83MztwmXz1u31bJpDTthPRdvX6U7dwz7TooDg3Qq4rfQZteXV",
  "key25": "4uK3EV1trPJsEvjjLoFVYEkg1WMHRzsU9pUyjbrVqeY9bBV3e8gnuP8hwdkaxvG71jEPQCD1ULNpKvmt2kEe1NL8",
  "key26": "iXAT24G4nyzw9PVcfdzSm6VLnmUfbj46JhTLBiU94i3oJ2QntraJ4qnqS1UCzhST139apvT47zVfazfdXT6xLEe",
  "key27": "32qV83MbABtNxaVmfx9jF6DR9NN1fYo9mj298PtLePz4daceinbocMd5c2tdb2KQRsWysMc3RqtLvWka8B7Mz974",
  "key28": "5j3fYn9qoNnp2ZEZUcMNFfSmYP9LGP3ZWpZy5AErBiV6WeqopSR3UjeKQt482bV9MiYKV6xNcF5CTxdiqnq3CAkH",
  "key29": "4aixB8vXfht2JCqp8XZhpRkAJmiYTYekTcZhpTvTZzWRhfEuA3Dptbg7yP6JMxNww7YxLuZsbBmMrJK4HJ6FoAHo",
  "key30": "45vSPvieGEoMtA5D4DJodBYCu7cRJvBy7PMzMkjARJods2t9aLAfbdezDXyEnv9MwwgC1rEtLatRN4PFKtAobBYM",
  "key31": "4ezmHkorGo6qyyYs2VWY636UfwqPpaagQgbrFUd4empCvD9mckh4n3dWQEsJEEvroN1XzHrRQVtwrNCsCmUdr3Y4",
  "key32": "4NkvMxZEMthrQGRugnBhMyHybrbkjw8rbq3QRw6ygcKfQfJyRSeHjgjgB2t6sk7AudJisdha11PrTTTGNSWFfTWk",
  "key33": "3pEPNZymNqjw2TmgepPjFCTqwEw4ukv3Nn4zKRabNrDvwyCZfDYBvn8VaMXymhBz4zn3kA7ygAFT3BZNC7NNvqLq",
  "key34": "4AbXXddNc2RVUmWm4bQHYfVjjZQYt7CsYTLEZvmL6PrmYiBK4AcQfNKrvHVXpEXuBX6joYPnmkNfRdtFdQyYEgrw",
  "key35": "5JBbQF6t88pTfAazf1V2BfLWjnKUpQ1Mq8icD6EiqkHkNE8Eo9RtfmVXAtRsjifUrhWegobcD155gbXAY5jHV3fd",
  "key36": "628EmDCAu3UukUeEdEYvTj3yiD2GzKHAUKW1y4nnAahoFpztWX4ck1YPUx1ddQe7TCFChY9DzLqEg92CZJWpo2PV"
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
