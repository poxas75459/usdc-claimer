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
    "26ARyAQYEc9Pk9keEjvEHAu3qRFuZaMSe1PipSKwHV7u6a8tWvmuMX95F9EhLhKaiNCYkPUWN5szt2rsgcYJTK6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkWbZvKKxmRTvFN11VdFG6NYMXruBTMbZREyw8K8Tgv5Ww8B2RH6McpLhs4X3Kb8Wa5czMfK3r7JhKj936Lah9J",
  "key1": "5SRdstrvWKwpYwKpZL6LTfTMUGv376CrdJBbPbSyvsmFCyvaBCcNntZn34tD6txF2n5o6KnvvjNombkMjhWKjULG",
  "key2": "4xWYLkK2e2HMZdg13iK382yyQd9ASYRGkpZ7znGohSN63uUUHSVrjzubJEyUvoT33jnff1Am4gFuTb19Y6Whp1ms",
  "key3": "2LgaZK4uVjm5xTKGa1YhwLqpK4rVoh49WBxHqPZ1CUhKHDbQm765fqS8XT6sRCnPHrmQxMuBtjKeDZRVuX1HeFTp",
  "key4": "5v7NpxaAL5XaGEYyYFkBDFxnyUBVbeheVXzKic5U8ncVyTsZp4mX7BAugm6EdXfWAHgD134F2dLX9RkzfvjHEDLP",
  "key5": "3qGrR3iPGDqumZLQYhKE8g4Q3t16YMYs6RNyTudhb7nzhAaiFdEYKj2WxvwNxrEY4LUdsWmg3uQi6M2M2g462Xng",
  "key6": "5pxWEMrks6emFudCA3qZo7G5Xecr2BWo8GfDM5PDquz92x1mpqCnCkvRCLAZ7ZpKXe2MPoT8sBy7VVQN4Hw3wZeA",
  "key7": "4PnkDFW9H6n93q1kXpLicNXCuZjyCj6G49vkpv82UdFNj1mXxJAYeHeQ3NuMGBLokNdMWBJbktiMKBtnXJj3vwax",
  "key8": "3c5kzonXHyKw6nzL6bXGLmBmdja3C3c3RmjVPBoAbjkXcpUhXRDszvf7BFgZVHG3zFKyve38LQ8JRx7xDQ5627CK",
  "key9": "4au7keaZzXFDq8QzoRdQLaggU8rbgyuxbKb6eCq6fkk7A7r7WpMwV1iLVdthb4AEBpXkuvSQnP7LHzoaTXqEqkrt",
  "key10": "5HXAuvm7P9au4mVGdeuf6SrgYA3VmdnoABqGrhB7xdntZwpVE7So5fNjJVX2K71ao5aKuzUcddxQxEHmtVxk9DTZ",
  "key11": "oS7mgMYchSdmrDHUoC7wAU1J4BZSpSSJjmKoPTFPre96XPGWccoxGHzFj8Grv239CEmUjbJtcrAH7khRpwTwFB7",
  "key12": "22XKoMpuGCjQJmiWiYBfn6fGg9euS3GJsbhGY9DCoQfCJ1dnZJ4izB7ckAmtVQeKUxjBgMsomD5Mwmzmqy6Pye5t",
  "key13": "FWAsyuYPnFftzacttioYH745vNtjg1ZkAvzRaMYMrKNZRRdKcDihRY8Z2v261QJnBwJzwgYbmsMGK9ZqpXXwZe3",
  "key14": "4qsXgZPVtbS6vBUvNMwBcfo277S9Lx2benqXZuLy1nmEHjZKaUcfNj4AFs2kH9g4N7qQLSoNrZBy7uXHPtjcJTku",
  "key15": "2ABHFefUc2RLJFF1MSZzsTbgyLcUKmi3D8eabteqDPsYvmrGmgAphxLbVqbe7HKrk67CCjWqfKJ4ABr3BMWrFQng",
  "key16": "oyZLxsekeSRcZc5H5ij7fqiKtDocT31qLxF62pg8KPjLe8wMndpDRtswzrqbg39rGGxQpwZ2pdxJemehZFyacqE",
  "key17": "n4VUxezbhufzd8Xz9jJ6sFgKTjKmgVuKdj8UoZHchTT5YpzKgsdWn4H1PCtxYwBPpPaK43jMHePq3JZvPvZtRnY",
  "key18": "2WK2SW7Ji2mkraqBhXKRZneZqJDQyRN6ifTCCh4ChiiLqzy9yZevUqLcdMLPJfGBvG64m2opVqsLHmEAX7LEsik",
  "key19": "5g2qnLMFFv3FYgRk5PvnGrMZtVbxMG2hmDELM1VVnPSJtyVGoxeze2dUgTtzTsJaZ3se3qZrAtZeQBh6x1EEFZtF",
  "key20": "2aXoM99fUyVZFCKGFjoKuRCjdXQE3VUZGEVkuiNoPWtmqxyiEiFf2ZqMkhtBvJZPYJUwhGX2QF6aAcEzqaYVqbXa",
  "key21": "2KyV2hExidcurAuTF5rgS2ytCt5HCmjyaa7SzQQSaQZmWgqSRkpG8DfwMhSj5xSJTFL1NUdggYVqv6Rco9D8vG6N",
  "key22": "2zqVxEfYSkYLimzMVcujcgn1PDx1xQrmWWbjy9L9g7hxWHNfY2Fv2zzAt2CMt2vVZqG4593CuHNtVHWpud9spUQr",
  "key23": "VeeGHQY7pY25MNvb2138sp3htD2oTYTDQTRFrFNnkbbKDPKX6fyhC5VqKffVzTJ8SoNkxmdXhRycVW6Et4vosQf",
  "key24": "2dnsMeEkrwQi7qmDq4o5Vxp4FcamxJjYhk2JXUjQkQdXBgVmuGw8A7VmRwv7HZrpagdnxGTDPwMCsucdhz83MgLR",
  "key25": "2K9cZq4MycAUoFpirXEFvsLbiBU9h8wAPT3hCMF5rZ2tFTZjiEXtshhoodn3LdwUg7mrvUkT5ep4yC1t6pG64NgP",
  "key26": "35zSsX5YqjkDN6AUPbT6xHezXZRsc62SmhPu7diWNpU7WxVUL1dwdUSE8Ms5nWwpbAXsQBk1FtcxuXbafGtcAM5H",
  "key27": "34ypoTGVHgUUqPq6cUryxnWCFPx2KnCrgNHoAADGXC5BDrDfjd4dRh24b671R5X1XAmdFNG4VHNaNBRhqzR21ybW",
  "key28": "E4yDF4DoVkG7UmwMfLkoHJGaTdsz1ZPiLbqaUZiyQwcEHnYpVfk1yNfev6Jp9fcT1CcuZaeNUj8WUWs8Yw4qkNU",
  "key29": "3BgdYi5SjMaCvYeRkfYmyZamTSQbxHCtjhpaxjvGFAg2rtB9kBBUVa2gxWzMT63kCtPqEo82NDyTRt9LK4eXvDh4",
  "key30": "4qGH2hMyEZKWS4cHH7E3TGengYXeZf3EefWELuyMbywhvGCocaRyJDKndmPdmLBvKmL7PDTK5dacCuakHXDhVnwF"
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
