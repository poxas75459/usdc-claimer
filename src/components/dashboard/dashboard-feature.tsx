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
    "5DZ4rJrJWgmBQZfCaaW4M3ezEHVDL6pa9hyBh2FZXbSPiH3Tdvq1uUvL3dnWJ8U6puqotsnrb7PmL7yMLXZqjvpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36pb3F17GA4oYruoP4p1Z7pdxogNicEUyFvAA9n8F2nLe9hUWWtSLa3MrQHahzfdJ8fZC7bBTQuYeaFwHSnVJScU",
  "key1": "EXbf2QpKwqA5M745CxhfRxtUq1wk8aS9FwgMSC9V1fmxWYbDi1hHECBAipJn6p5fUjJbLAtLkzURrfyAb8cuJZf",
  "key2": "cZLrXpgzEhuVE7bqVX4DRho6VJhaZLZzXzyyTjdsrgJcosFb15tGxjAS85V6qHcpoMSPBgiz3QtGUf7QdCGS3fD",
  "key3": "2217qxecAvCRLN9gPh2wQkNUu4iABo3Pqg5C8Fa8aBYp9uNweEn2yNQTS8x4wHQFVbkN73WzhdXdoPAHujPe5WoH",
  "key4": "25sknqfHmwU8d5TvcDbi2estuL7wv3MDYPGZtsNGfLbRdLjnpcHdQnGkLtiR5MbjQ6zCgK5P3ANqRrrbAVAa8Avb",
  "key5": "4j8bynxTmnsLY6n2hyeLGzXvYSw2Vv51TZ5kqtZsT2GQLyFiuZNpEkuETxgu8zcVGSbvTAQrE2i2McghinJ9YoAX",
  "key6": "XHvqRfwAPpkt6s6HMXCeTfiqsikPRv5N1x5U1qeqaQh1XvGRZKW4AfVnthsTDeKRFozaaB7spWs9XKxjZBnFQMa",
  "key7": "53ReLqHeFQ35sepeiuxBKzHMGvo4U7Nf4sogneKcefjQ4xYhCWkinkFfj8abW2uJN1TuNHtqu7ka6NcpMKTnerxj",
  "key8": "3qriYFv3AaWiTnHqQQysGVaZsVxUZ121y3Cm7kWxwWpvF2E4UyC6oQz9M273m9wbWhbui4LUfSVHZSYjVcWRnPuH",
  "key9": "243U5RGAGavNvB6Bshh9t6ppw3r6p4v5GGV3UUF1R1LcJcV86Ao8L56ZocpnYguY6EVqU23Vymo2wwGJ7f47HmpS",
  "key10": "275X5GdjUZP4g2frvYwHML9X2ds9b3WdRbdv9LxS2279Sdits9D1knkeG7XxdtjiqZosaRL24Cx52QH8JChMhHuD",
  "key11": "39Z8PWwfw7gdvcEg42H2TQnaTk3EgyKQYcrgUrmWgYpNatZm7xJ5QwYsxSwwww3NUwkwF3TdZWJJfapsjN1CGPik",
  "key12": "22nBfGx2CvVxdfS59FBe6mb6pvAv3YkXyDiua3yGHsnifyEvjPyTsdTPUtmvgYTFB6rwgV6VA1U1Mdr2pwocZ59V",
  "key13": "5UMV1VZyCCPoWsQbVByjFBdBop5SCqYYtG4zJopSSzbChngY8pRmMcqhpwhzFmQr2gSr4v6L4RX5mattrAmU1SSF",
  "key14": "LsjrdjtJd37SFUyFSzg9dP9AiGjxMvGgoEN36nZsgkzSeCXbUspKJEmbobvJvogpRqsVnpadKvJbgScLrUrqPmX",
  "key15": "3H1LgjhZ7iMbHJLmyL5iR3yqNCm5sserUc9YaoJMT7i9vSJEN7mN6szo1x5hMExWi4WgcbCQtMpNWyo9YjrmoSYo",
  "key16": "3UVin6roRoqeV6Zj89NFzedSGrDQQLUmG8fuQbmCYoZx9ewirYEgXQWCy9jtLyAx7jya5LUZDWe75jrL9AqKtzpv",
  "key17": "123J2dAn7eaTcHMNvoMadJcLR6wc7RLANXLgkAxXy4dvRKvYsEBQ9PmwcDFMhADgLFh5a8ojYk6eDyooSF9vWCH2",
  "key18": "Z7fXpediS8x1tRy1djMZdT3VFfmbZy7Fif5CJssSe6BYsmT8RZwYq2kuvSUkRUTWehfdvgdJG5BaLVBxBMp7pNv",
  "key19": "5X1L9yJBpUZBMppXE1uSVNghejgNe8f12jhPzaLMzkjxrGTLyY664JJ3zCddphX2ZrgtdNm5ZFQpNrzQP21cURE",
  "key20": "4R559jbgiSuhpKKRyNaGJxTvPwUSeuxHREu238CafLw9z5XBJVkZhdTpC2DjJWtA8z9Nz3YSnUy9KGXf94VmZbco",
  "key21": "2aaHDM9vyj1MJnQszGzjKdhrtqKxwck65ju1Tb3NYTmzgPFjvtVeCQqvoAMT4f9aHFN6wiNPjkYQd5tQyJGCuxFY",
  "key22": "2FF6azoy7uz9P4oEwyQSAdTEh99BpNT99vPnf3z279Kxy5mVgrdgzZa7GdUjmFLs2czKUQe9FXDFQWwRQgir68nW",
  "key23": "4PKz1dPyK36b4ApRpjaza7TS81xajxDmp2TTXxQSc6PiaNbcf1UGRSmJrRG3YhtxrM7eoFVoywcBoQffGhL837qk",
  "key24": "5ghmjKP2aPGWJWrcftwKJScEU8chDLQifcvvJ9xeWju7iWKFpuy5rGNKvY8LQxaQXnFKnGkSqTojzWto59NyrzJZ",
  "key25": "5CksJwcWh7Fgo9r8SnnhV2rDq4jhgdvqP1wCEhJkyaAdD4uN24TTeNYVEFZFLVDqMeH33yjmFrksAnPPqSKArHba",
  "key26": "5sMjug12xz6GXyGxpL86sfAwoptH8FFGEiHHm55aPnDCAGWfVeXcUMuUX28Pwfw4yyy7wrPKKMrAu52JJwUakVRs",
  "key27": "3cLfU4EBnnELV3e5Lh4VVYZ9Rkf9mHb1abtcENMrWiNbhRX5g7MvuP2ypXFpq2Vuo6vCuVXAPshsD87H8NL2QiR4",
  "key28": "3f5sjzBAGvFzhjJ2yDcRVeKpoYk9hGgf38Bu9TRwuKQiVfzhgUVXZCg39XmdDStB6hAGSxELAT3YFEzwq8q8qzaj",
  "key29": "2LPCpbVxz3iXJLgZApSCubMMwJCPjMnHQTqQeq7kf7vMVby2CogF6vgkUheo6uakvcc5yaDQGYG54nTgfNjUwetv",
  "key30": "4QAHwBwHhRPzM91FpqN5748tZiZxytAcma5KST8w7e8AcT4mEfQ5TSJYfgX25QxSqU12JmWoJv8v5HXDGLAgKHqK",
  "key31": "5VcGd1va5BQ9vV1Nr2HdkDUQnuh7HNNb1uf43U56pLtCXDzZChhNzjCXkRAXrEiYHPm2qm2DQVJ6nFc7Wj6yBVw9",
  "key32": "5mcrn4SWQgyHooPwHjeFstTwxq3KRSC8Qj2ffuQTrunbJHEJrx7WHjpj2qCqdhZAbxjFKV2mZwvVkcwqoALZ4gtb",
  "key33": "4m2youxqbfk9jNDLSgqh1iF3V5fcGVdbwrHD44k5qqz6zfx3x2PPTYXa8w7T6QzEtw1SvDjvCJFSyBDUaRAP6Nj5",
  "key34": "2SshqM5XPXG9YtWsXq3Ukjfh5v9dCDDQQRMDuB7Vv1SigbP7yfFkPcqt2qik3is9nqdBQ88oPiitQJvEuuPfnbvs",
  "key35": "4V2CRveueBeZjxfkxSf3fgQDCCngz7PhkppxtR1G8DM4PUvxv2DfeRgZWk2YCuQwRayfSce3cSx4npfNSH8hpxgQ",
  "key36": "2caEcMzTiSsPiTmskgLpUhaYPRT9QpzJYgaS1WjJpM37ufkK2U7dTDLZ7RWX8bqPT4iYgSEgN9tXhdLyAWA9BbSP",
  "key37": "ideqEiKd4cubq11mVi5fNC99A1Gc5Sq7qHeLkQmnPtdSBhK99tsWC4P364McTxvRHUBdb4Hn1w42dVQH8eWGTnH",
  "key38": "2xg2pQj3XyucxTYmtLiJp9NyK2ajsnAQM4YgDm2pYxbyPeqTUNeXxDoXQwYg3NB6ZEfLZczC4Y91p8bAXVmsau5Z",
  "key39": "2ZNdkcHxFpHYRrNH5sYz14eabssBfZHfk4UqiXwW8QsD9ZzCD9JFW2bqjAMqT1oPzjY9D8dEdj9R3RHDkfQnHoG5",
  "key40": "8Nr5ozDeFJnaVyhY9MBDJJHyqySkMpTDkvmfd35wEfeoiHYgNSXVcRMgZ94uyMK3dppYwxc33wiWfhDdkHinnDv",
  "key41": "4Qne6gZbUfKJNGRdPtdj73JxhjnbBuXyLqpjtfaSR8VaEdfz6aHzBp2vyMvf9UQvcaaRtJf1bLfVXa67FwjUJUCw",
  "key42": "4qkkbEhpXo2FZGrjc44deb45a7n42bcdnooVFfZdaqXPtwX6w7FxN6ucGh7Eg6aCGwP7xZNgAQBa6DzDHCGuaJJ7",
  "key43": "2sroD9Z3JkQv5o1VJzCDC2cb19bTBEnJzYhcQnrZqCWkaaeYJ6zDei66DeWpYp3jWg5N5kyuXVCAVmDJAN9EGRV2",
  "key44": "3hgoK6wuXbUodJ2DmdhAKFj2bUzeLGRVpXxsNq95Mde8duhn9aPeAoVYwu211THMhpYDWyQYV3uRwqgTdgFmrAX1",
  "key45": "2EggUs4C1v9cvvWgdXke3yRCS8dQnAjsswMgMUw8C7qorWrvomkTnXroMQnDV6vCQSfLaFkLwgbxJG3aSStKMXRw",
  "key46": "6zLBfJLVoUpbA8egwjLVKQEWMuxPUGWgjxLowobTecx7gdjJrSdkfn3tyAxnrTGnjnxX5w2tSQ1y7u4Daq16K8w",
  "key47": "4MVZWvwRooJwFoe7YQmL3mzYEBRm9S1RRAGxLRqRZ4PuZ3WBHD3cBSKuuUyrUdq6ztssvXow2unLP3Cw4xJSQXyK"
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
