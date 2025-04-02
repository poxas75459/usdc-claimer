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
    "5a91DpqaetqNifroDQDgt3wJWCfWp9TPUwhF5EAPLt6go3xkHfKp5mV9wHpKf9nyEy5yu8VVeoGcr3Q2iibsi2KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zcQAPHLy7vGxN5eh9yL6sWS5qMSNjY9Uvr8DsJCDQbgeXia59g2GWbYaX5s1mf9jp7oznMvfMJM4Ari2fJAcAay",
  "key1": "5tQkpDk5HEP6ySgB8xyTNaPRH3MYsNN4kwJrxFigzKceXn2kzijf4uocP3kc9wi7stXtajBnhCL4vRTUvQqCipfQ",
  "key2": "3tJuyt5u6YGHM7SGQfBFwgzzAFcwib4jdPakYKBLYaJXdAMrRgCR4d4iuymZZnEcY6cNYPynsjrYK9z8vnBmGt8V",
  "key3": "63HNJxMH2e8UCagaRZW4QC9X9sGD6uLRjgQPhyWsemURBjb7C8h9UHAGRrRKp2xV7fyTSSSBgN57d4Gp7csJ3XWo",
  "key4": "2JpBvwQA12b21XXQQ8nUh3jakx49b7yzigmqgWPRidxTHvQqMLWWtiUxqUZTya8HEpXRZgaBNdmRV5SNiFH87fHo",
  "key5": "4L95bejLmqyuCsqBfiCynGdMzSKF3aFd8g6AE6UiDrXyvdQbBg9oGYMb82Q3VmRHMGM3u8uQ5v2TCLiDm31vWJRs",
  "key6": "3bEzoAhzziTQUeJrHPZUqjUZD2soFtJW6hLASxnBmNKErM5si8j2pmTRfCMcQi97MaEJ4TXGShpm5dpDUf2yz8id",
  "key7": "3i2KWwQ4NMjrQ3xpkBZmKZX1coGeNfTucQhyFoAub8NuH1FMLJorF6dJ1KAfiffjGWMu7ySJWGwtdfKCcPgJ7tbw",
  "key8": "4nf9NHHAgqvk1ApL76w7Y9ixJABpyUeA1ASU2DnurfJhaGwkqErE94FkXeZeK6Y2BD2JW5z7XZMxnmdwtrCKLAK2",
  "key9": "C1sJ57rWdGAN3xtujc6AYXBr48wKcsfUacKEDJKeCe2R9XRpM9WMRG5HeshdjckVFUoP5DskorgGY1gjstyoyH6",
  "key10": "5oPfaTjxjhfEhEziaMuUfk3imsW8r32NjJXpx2wNy7CXqwF7Rwj7BHdokD2UpjdzsfiTQ7M4PujZmN2NnzNX7fV2",
  "key11": "3Qqqv91JsbNhcQpxhfn3gWWu7YbkuYYvKa9qBBNJYtxXusrd4DvQGo6zCEZQk3ZMAaErD2SA42YXq7b3fGgJYqha",
  "key12": "5hZiH68ykrzBe1FJSCDU3Whgcne3CiH2xB9JcuPYwWfx4HhkwpG46XCKtTUmwwEhLitLursKCi7FhCQBHtixpbdU",
  "key13": "pUWET6SAJ7YQ2kRnJ7Kytworo1w5dinSVLdJBtvVPc9NuxityDE2qdoJXaW6S82z7NZBrQnpNX7r6nZshUHz4NV",
  "key14": "31X5oG1P7GfCBQgtSJtbe5yMEQSujjsggz3Wo5Aea5RnWR3mn6zvyhVLBBsrUmuEDZ6mtqxrFnosxqs39qD2ohsx",
  "key15": "J2PgAc1rmqtwxyWYAteJKHMzivbUZJru2rDT8pkAaigZ2poeMK2cceWV8HnpyntPHfNQwGC8rYd3MnbFXMSZjhK",
  "key16": "5JJGCBMKA17XDtYo6VKnNQDsiz9TTbBo7nLyVaab2Pboe8y22E9BbxJ94dNc3KDcwDgQsZyugqqCCeZR8y3MEVnw",
  "key17": "3icxjGxxpxiT4jj4qeRDeUXMTkRBEDFaYNxtoaT4nv4WrTKAq2MmNHLP75HcHggw6ekmcivmGdiBvfUCxqcVWSR5",
  "key18": "5DzKEnAvuiLtN8DDyRRsBCuxSsiyjHj28CozVKXLgs2KcYMHWpx72UProkK2LPU6nebQJB3KHsLR5iYjFGHCgrSv",
  "key19": "5tYWR9pwJrWWQpR1xXEVqQAfvCEvW2p4baGx5poRcJf89QR2oGLbk9EyhGGjobjG3C5sAyrKhsmXjT8mrJZiXWTM",
  "key20": "pRutk4azMQK9FpisyaLYvCxRK2ZA2GRQrzUw24mEfmim4z3KkPYiLBmFiaHgJcQGPmeNUuu5gWTHPoPCuLWmLzE",
  "key21": "2dUjJEibqguBLMLNUsNgCQoZvMAUQfwLhQLXuwc6MLNiDWPaeBpn2JRqU1g5YKiHwjz4ZBAu4bmAEFkUUG1DD92g",
  "key22": "3j7epzHy4LVnBr997HCWnX6Fe7gmHAL2vitXxAcHbrwyrS3yjtSDYd8uytxvL9fXnA1w3k7vaV5gHXHMdhdzkuLQ",
  "key23": "2GwN7pnwCeUN1Bv8tGaLziikxaLRnjJkrEaa9KLtnNCsBMemNTupQ8ciDn6QCYSoBqxBGdx3myggxvuC326eXhow",
  "key24": "jujiTEG3PWFoihocTvSz6tyka8yN5gae3HATUhgDeEnARxkEr9C4uJCw39GRPa5mtqEdtKXiT5k1hUq41LFcQTG",
  "key25": "2YpJQuKoqP1Jm1kDhVjfjePCCnfysgEN4mTcQzBMnHzYPurjbk4iLAGD73rGSDwmnhyEatvXfbRfdLmeYC4MmQ4o",
  "key26": "5NHvEjfbnpuJbzyYZ6TCa96STcUhYFu41SMVouiHqN4m47JRmfmxresFcFkUNk4D4ZwkuPmL7rBSQbFB5s7H6Vkx",
  "key27": "2vGUWMrQd26RreEsMS6jqbnMaVeGJdNfJ23H1aHMg4Lpqavx5iKDeVNhrfsmP2qhZ5ZtKk3nzbMiawy9h3RbB845",
  "key28": "36EbiQkwExuKC9ZQTVbWcbU7XP9JUD3KXKPQHC58qRvYmvRRSBSKdgz172bz2eLyTLipwn6nB7BjNCR697U34pbM"
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
