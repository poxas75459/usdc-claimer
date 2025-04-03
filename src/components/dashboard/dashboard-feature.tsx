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
    "2gSw2syion8o4uvXwWKdW2bUz76QdRaVW7zn4h14pGKv7TqGJQfRQmncj6LH6S1VNaGFSTqXaXbnUHHY4THkNiMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQAQ2XXC7dNLsRP2d6pCimUCDC1p4ZGrjagUqQdAHNyBGLv3GP61H1kjywSD6MbK336TpLhXbiJZTST3kHDYHDv",
  "key1": "5iW7bkiBkzZMBwy5fVbpTSUpaW2MEtXkj2B2tJZFkC5CkRbm37Pitn2gBsEhRtV2UTLSPVnd8jvdNXWTMNjLUgop",
  "key2": "2SnvPq5vcAYGwQUU37aMerUGjYXPYW8ytXogFCypzNJ1aeCvU8LzSu12KKrE95YywuL8WgHrokQbTfggcDpzKebH",
  "key3": "2BhNqHgYweroBT5gcqhqagsxnjrBtA65AZyCzJf7ZBcxu2t3iGXVBgmywxLq4jRkAeUDougD7uQPDntmyMLWcQ5u",
  "key4": "4ppGbNTPsV56MNGf49REFhc1PrVnsvsQNMaBFfJ9YB6wh3jhRL2gBoKAzZU2kfJZoJnvX515UAc31EHcYBskVnyP",
  "key5": "3yUTB8E7SgPkcjEJnbXNJAvFWnNua1pAi1afESSqnCygy9rzJeUAFVCUauHTzt9arLefN6KDbrh85W5uRSctQBQa",
  "key6": "3MsCEMDqyLU8ba9RSSPtEjUc3pyeyuSDDbSXDGXLNNjkZ27sbjmomDTmyQLGyNVuhBPkTe6uVDtfQ1cBbBLCzzEt",
  "key7": "2bCBCRkNja2q3aLu27F93D5tFwMg7h6UjQ4766xTWjMGCS2nzEp5WKg2zex26fzWGMpTcAcdLTpxxkFkHLu9qT19",
  "key8": "2kM2A2JjT3yG4mCSa9XprNKMNZRwMk1Rj7fMGENsUJYofKtxebkPBtMTp9Z2BKoUsmdLMDC3hXarNbajDdjwg6sy",
  "key9": "48UG3HDeJih9NG6HB7LEoar9vtUeVPSVDbAGRxWNDDcy2ysSf3MYYCjzMqdknz9FNb6Ew2gS8rraBFLhYJ4SMiuS",
  "key10": "4bS1UEZHgF1ggJG3CoW65QAwRqgc2jHGsAQ9FHNDp8BeJdVXhrpoZC8CpRpYQRncPCWiA2VuD11CE4jUEh4gxmSy",
  "key11": "5iwCGYZzvVC6Qp8HSw4pRipDveTd48ygyBPkKatuZwLXkt4gwCtvwMYs4bEWbYEZZyKQphbZ3LUC46q9op8xXt1B",
  "key12": "4MnXS69BDovsHc3J5eCzvC6qvAXVojXqD6utLtkVxDvhFbCfdrxk4WFf2DumdeX4yJafvyJV5DYNF8LpGTYG8gd7",
  "key13": "4TgDKJ5VWRnZzGyr6tJZSG9wDZiLxCTLjAcHRJUJr93vEoQD16wiRnMNTAk8bFqkazmnqkUd7iT6zr9MDTXkj84Z",
  "key14": "4GjYBDD2dxzgapuvwemdWSxUwsjhX8b6K3GCASTfqAxyyDqJ4TEoXbXjmXCBnoMvgchxCQypveNh8kxEwmennqxM",
  "key15": "2FZygx869Rw2R5TQbvZhbUae7UYbhEdRovin4ZkWgsWZYYxg8YgXVQV9oTP3u3xWiLetaS8ikKJL8RRYBbPeDb9r",
  "key16": "35YdXLNdnLe4AmiwXh7NfEkHqqWGZAtptzgbTJsQdQwGN3eUY7CEYEBYYd5zxcZELibT6Rqjef99WiJfBonu1Lpi",
  "key17": "5DvXCDU3r6SFEQdwYKLhEiqEPi4PEeAkLjJeoXgiXetsKbuxEs9YLRDdrB8GSLzwMw31UsfgUZ88drqZNuJhj3FB",
  "key18": "5rHqfFMLfsQ8j3PQ5XywxVJcQHTX66yhrZ8yZ5ssuomXfGcsyVb4gfnGG1s6GQALRjFLQwe5ezT5gtWikxvf6sQ",
  "key19": "57v1twMVdEgHLCa8TAL3S7WgfGg4bWv9Ha5Vxu5MLUEQY7Ta8fzaCZJNv8sSYn4rKsMdjaBjwByWV9EwPLW2Np6b",
  "key20": "Lf6edwhgLaitxtqBq4daLLke74AbmMfg4rL1xRdRtpDwo2ZxXrHhzsguoyPCwrG9pifDAfHfJSuug6GRpAMijh9",
  "key21": "2APduqZwTYueNmECaayCkffGx7ZKj4Z9KCVb8TfHPeo1beJoAwwbrFRaK6s1rTK4QjWDJCm2GJpXmnaYNZhLW64b",
  "key22": "2kURuRqS9TBsYCQsHBQN1pcNhqC192Ft2JhvjKY1W7nrjB3qxKyi77FfRy91caWjxWf16HaKhPXw9ezk1DYcm53h",
  "key23": "3T9uiJfjuiQGZaeRsQdX8T44kjWeuC6SH6UTENnTq1YLkEx8QHRmsgKxVShLoZafxJZ1KkAuMGmSUCyoFaaUdmKv",
  "key24": "1yeG8HzAghxx7CiK8oeynmniTjxbbPYjUgxFumz5kKJx7z1rUoe4jJzy6Sv2jeLLfsFfm2pnUP23XugADY7TvYg",
  "key25": "51B3zzyH8AANjVaJrsoo9S9zx45q5RpKzd8ScrjE938ba4HJshqC23kTYt7d7ecPJBzYUWgggD9ZgNDEWQBCWMEQ"
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
