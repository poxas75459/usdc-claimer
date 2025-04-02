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
    "4Xs45bxptBKvKLE6WpaTCGmBQjTAXxYMKgPMv9VHWt3Px2uxSYLbELDq3cKUcSXRBbfJQM7dYNcbwFJ5tGB7G5EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gpijd584HrrtN3uCG2C4avorBMryzrQ2oXXQZ7YeLJUG6Di89rd5ohJ2gZSAA2MBqNm8DTZ5TwBC5hnHa1keiBG",
  "key1": "3c7rPzXn3YCp8ngTQdKxyeWNQVMgbRPzwYJqRTRKbMdRXmqYutYqcSSMzNpYhpwmrCYe6zSorKTQL6hkvWkjHpVG",
  "key2": "4YY2a6AHQM5AChwVCb42jsJJcPKRLKGMdjtDiAPPxocTEV2EBmBavskRoi2RCjzASreK1BLZVHg83f4rNYBuinB9",
  "key3": "3UzZQfYkdTVEBtd3g6KVhCGxXkcTiVXQ8vYtyq43V3Zy2iJHwgbQoJ9TUFFjXXdh5NYkxsCk4tC3gs2onAHK4cA",
  "key4": "3DtnjjyuWT8wAuHgaBpJXqG5qd6k6gSJUFPr6cqWoaQupmxFpbhzTnJ7tyJgHa56Krp3kKts5gCYCDFrzFXcQF5a",
  "key5": "fShj1UxKj8p96c1C7Qq9ZSbceqm8rZ3sQoX4iYfAijWvR4fMXXj7X7UAjW6QnfHojLnxRMwPeoMVr2KT1DcFRQa",
  "key6": "xzakeL9AZAix84EByRjEanCdHDkimLDqaphietR6WRDQ4TNNS82MMXW7HkNv2fHLDDw4BdKYhYwz9sRXoATDZZ7",
  "key7": "4UYh9n2ECim8B7baoPefZkxJLyJDgRyj1Xz7w27BAhe78CxxNJDbcjHMN8h4GoLN1WHpErCveCywxwF9Bf55Qgdv",
  "key8": "3SUhUGXuMwdvdXT5xBguQmCCBuJtDvH7qhTB8bSGVAJmgeDRX1UhTTZNxmPn2gAY9uwAqog7VygUdpySBQGEddiL",
  "key9": "2p4rWk2u8TBNg6iq6V9PkxZZoJM2QZccb5Bk5kSsyTRDEqwyDdWXnnv6dJYfitV5zCVUeNbnwKuJpe3SPiMu1GsN",
  "key10": "4TUWvwNdfi5NxTQmV3cSKQ81eZdowYzviCum9RHhTRrA6UaWCBFErwLiiLPFmPuW7BT8q6VdXkfcht2Pezg6pc6q",
  "key11": "3LbBnEXMwqgqdz4UjLRPVAENoQMqYT6pudREtNYwZQ9u144TgbQHHDVFYTHoH6yRFuECeNGepDNSvLLfhmWVPhhh",
  "key12": "4ispdYFfzJWhDp2CDgNeogGnjPcmd7BZT2tLUKq846PDgykZ52tzXCAnx3u4RydhwNnu5JgCAbcAgk7DpCWwAHxX",
  "key13": "MRQMrx5MhBor15gKAdtcMgHjQFBXxUMKfcF1cp5sZjg3svG7WMGiY97UUAcacoJh86vD8a9TSHbByEa5YXo7NNQ",
  "key14": "SL8oBiBWLVeEHy5mAoGAgQp6f4o6TFQdyKtiD8PNa3Rmeq9nMnAZWv8xeiX4ReEVRL8WVnR4Qz8wNSVhqRMcU57",
  "key15": "3uB8FiyoGwThqFPGKJiSSfBKaYkprMNtJsFUPXi1vXfg6yGpkWHFuqqiw1mpCRkY8Pkf4hw9ATJKHmBkfiL8vSwB",
  "key16": "5hLDUQtd1R7m1ZVhMVYtWaUjTAvjMD2u1XKxv6c7ERtbxGFGD2kDqGBNxxCwU2GbH6JgFugZzStsLBDoXNyqw4Dc",
  "key17": "3k4H8zBnFeNPv73XajjzpUj1XMnC2CgrJKQsY6g9jtP3gLMVVaGKudz3ocjdNo1iXfNbYnF8CLKHQNZF5kjK3hiR",
  "key18": "XapNrsqRoVwYncCAbnnKfvXXaRCGa4t8tRpM2gxh7NRQ2watx5peECwYHv16D6cARvcbWA9oPJTP5LA12rBKuXb",
  "key19": "3Ppb6S47HJzRBLa8iPUmRLqpu6zSqBnXk8FqKCzaRTvqqeJvnoYNGuU2Q28Vo3aF6deAFjhtNJ2HtrGY1ZB5uMTX",
  "key20": "2ZbxQS9X2jsJfNLM8i5ZSosN3cb2mfTFnBjVFxBseorQgS7xLND2Hndy7bUZYmgwPC29tFB3cTR5di4A7Lhb76F9",
  "key21": "XNggnPiRvd8urm4oWpPEtgT68xJZu2Kchg5Nu8YWv6LV6VUYK97rSbmnaVNxBwKX1ZjRGySsvPHsTvPwQqKXEXV",
  "key22": "iugBfgpWtqknpQfTcZwYwsGmWhJigosYU4eND3eiuP3p15fGbaRmbMbs1t9716mwPxgmVXoZtuh5nz7aS8CHAJd",
  "key23": "5e8AdNFHGicozW8ZDZNYLYYUYFRmsFnn3NhEVUv3GuKKrrAToJFy3tbgXfFKPwrgF8BzA3gFKHTAcbjHuFpu1qDk",
  "key24": "4z5JbTBjMvKXmVw3oEe1qyVzwRLpL9j2gFUG9DxSKvvMYPYq3orrPv57cG7uC66chXpW2XtHi1yhcadUTvUksoB9",
  "key25": "3NwByTtzB5CGo6X3YvjK23owFPoWVsVNfsDpKHQVutna1YxzhgaySFRQN16SqUxmbi1p5FLcXR3NthJAPXFEux2u",
  "key26": "4FcBxVJsc7f6X776W8x58YjsnvMvpUyXa9AYp2nM1i8e97znVJfCfRCp9mD8RXA8kB1XNQwRwheQJjD6sov4aXq4",
  "key27": "54tFLh1DXfR83Jk6yGSAnV3bWeJQeDRjfeowDxSNTbpxDKQ4DBQYGYBxzznhQs8R4K44Zc1ZNb93pjxf6pWYhDQT",
  "key28": "38XhfrTH5oe3wJ8ZNhy5PHqHYtVrefobYf9Agn1PUWqZa2MEMBVL2xWKgQ2cwkwZCcYYEA4weSWJqmzyHNuawZdQ",
  "key29": "hyd24PG9nzSFuEzTrXBVPQVKL8dLBTsct27FU7y2ibTjnvSEmibGLwiez4CyJ4VR8Mexmr1At24NHEeWiLy3rsn",
  "key30": "3r8cHuRNmQKjARPztLFeWMQFVe8aMFUf1DkebXBUfY6oRMUP2Ut4qFWXjg3FStmAkj31FWmj6j8zZ99LoTQp6tNP",
  "key31": "rJKk6dd3wRTu7yzSkeULpKGGPYUEyqGPz1Dr3UacL9BYcH3nPHU4wCVotx3fWoniZcko6QcoCcZDDEh7n61UK2H"
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
