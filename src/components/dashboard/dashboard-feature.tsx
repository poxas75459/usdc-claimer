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
    "66ohPsq61EczZqRkX6CUATgMny7UjscdK5azMHb2pPPiLPZvzqfBXcikPCGRB9bjcusVKMaJqRkCTjKjkUb72nex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MU8tzWHTS1Cw6tiz9GzGcyS5AEq8Xc6XHzL4nnPmLF3M95SB28snGQnJKK9mtJz8s3Sjk4Go5EJP6UTXjXG6DbL",
  "key1": "3uqqcstZpL8SbQ8vGPHWovenuQYntZwyQcBfqKjFLFQQ9gefLLhZp9UQcQPEHDPr2vAxSeapZe1GnFZ5k499ZvDh",
  "key2": "4KRFgngervMVT91stWz4uxbJHbEm5KdvPXj8nkci3McnFXjJJzmCapcE9Lgh1oXLNJxwrcxKeMzmsUHFfJYHd2bd",
  "key3": "2R336W2k16Jd23fKovuBUPBekM11MoFQ1DC6rXWG3PqVk3kh5JrGVGkuY95FRwK3pH7Jvwu53csmh9X38Bw3XXSf",
  "key4": "GBdDnQFu5f9UkmVGAG95MhkwDrJGGwmC95YQrBV3SkXBsLjPbeba9k7UQtBWotMss8XaPz6ApgsJPFBVtMbZTf2",
  "key5": "w9FUaE7FwZhsKPe3qYshYiz9qUUzbha5dLg4pQuf1Xzh178rWd8YzVwAQxd892HNVRdqmX975Xn63G2PgUEeGs2",
  "key6": "2AWhJkD49w39gYnBLukmc8U2ZxpsUFMu5MJK6Z1ouKu2FaFi5ubUFxYvsC3KtVkpNZymMuUJoLvzvfDB13P1wek8",
  "key7": "5Cg5zHr1J38gqyECqoQvGYJANmYh3QYPqZpuCHvEB4xPPsetrQ3m5w668aB3jaaXQsYtecPwq6Baiy9DDdCoh2fc",
  "key8": "ymongPYoAt1FqCDwuQiS1nrXKVH5dbytg3UPTdKNixjrqt8ALiw3RMRXfHCXoXSbJ6gwyFopjqQcEzjxq4pr8m3",
  "key9": "8nedvrvEgdH7w1FHuVg1wEzGve4uiYdUD4fG9PSfz21k2ejh7n6FBpVFGR7aDoXJw2s4a2TJz7iw2Pa7tU6jyPM",
  "key10": "3UMuqGeC35LSh6SZv1zp9q4MnD1bADgWiSunspXBosJcDC46JwSRxd9MGh7M1C8rotWUodQ61twr6ZvXNuv4Nhjv",
  "key11": "14pdSoC9wp6uKcdtXvDvs6MFYXDv9pG82eqSBNz34aZepJRgS8bvewgrpwnktnLqjJpEDMB28wraA4MTpRBW1xd",
  "key12": "2z63jp1c1aKzphnoV1Fh4o3Dn1gjZypjLZAX73tnJGNzMU17P1r3mDBG6BMMBRxW9mCFuizyE1ZGNavoXLuHcPUG",
  "key13": "5oCYGemTgyj5upxJwkz38mVEefGWZe8yDdw3KsrBhHhStYKzzpcVQNV4cj73B1eF4aworSEgz6KRnqkKxZCWxhdB",
  "key14": "2ZMN4Xn2ZqM5nhsmvq9B3vwo5MAp7CM9fJ9biAdcebaW4sXXXitE38PPqxruZr9XnhdWdCsD8aEfBX6MmCTePQp4",
  "key15": "3r19vWbTWEygXPLjTsTVhnpXLZuuViZcZgpuUpAvcLsgWj6Bs8jLUV5gj9rWN5C4JrwcE2h2iTWBeoLRT5P5kH9M",
  "key16": "59NsHCibBNMqCtvi5F91PBU161LTpZyqzA2njWsm2XMMP9CtxYRUjaxbhryGHMghADtG15V7itiKmYa7H7et6RpS",
  "key17": "3BR3WoNG3QkneT8diRCaghu6WNc37qqxpM7qgBJkN9nR2YTwyUqREXomkQwYSNqy6MqBRdxr3mpPSiuwXpbnTUqi",
  "key18": "3Ce59aBeh9ZRb1mMv8jUL5Lb22iDX6WAU6Cnr4cAALap8fvGzAEBPio2eM5ZEqxcKzxUYyicg4SnB1Z8Km322S2Q",
  "key19": "2jEsxbySf6ErcCgaNHZgg6KEjJ7MbNAWyno1yo34UJEzdx8c8ksTMcoLQYsbhTHAbAQdurE9Q5GBTxEgMkSJTvrt",
  "key20": "577gaSAp8MZE2HMvqR2GiPjJiCXSJx86gv4nYtTgxNiujgX5spEWhvhuEJG13JRKqLYKxr8b4htpRcijwsRtBPMA",
  "key21": "3pUAyPxL8zPkVw2ukwfAup4RQqDUTbWL71FFx4sStZB2V4Aw9oiSviiWdmNNyQxzeftB7cgzmJjLWSGgnhHEJ6kq",
  "key22": "q7FHEBmwuaSUHXqoVAtNNekUtxkuyz7ZGr3Y2eETjjNHrXwNUVqqvb8fvXA5ML94TQqk1Tg7uA7ZgXkkt2aKSZR",
  "key23": "4zpRp8s68k2Zoe3NDjPjeqeipEMHbUrC7YzGTnUR9EFDTS6f7Y4eNeCwnwkczeaiFkPjDAKkfBgGccQU6WpXa3iE",
  "key24": "BMZKHiUPPdoGLWaNkqq3v8PHmMSeWD9z3LJZQZnrK5YHYHfsZH8AJN71qNwvVHCU6hDpXSboXwRbsvoDBawy467",
  "key25": "c1QkwhvPgDBZAuvttPxgJWvAPBVA1iHv5VxAMPpTF5mkhwSJadmeR7wjdvSX5jgx9b6ZF5Gt4V7MEwaJgKdnmUG",
  "key26": "aW9oZjTaUS76BA6B5j89Kj1xTK69znHQvvzsPuoWFgByXNqjxu6iUJqVKQbcHgyYfqG5mYJCLziitXfBNVxRBbr",
  "key27": "55J3HHWe3TTfp6bFcPLAaf1cZbtTheoZQvAqEnuyC7T3S7HvaVTvdpisEEe1BL7ECgX8HYqmcS8dZi8eQTQ37Hr7",
  "key28": "2rCF7YeMoXAFHkmXmpt84iRb6hqdSNo5ybNeTx2wxANpqcHHtCxdDQTL1un8d1NAhupdcJ6mKYomNgNXfuUVrFkR",
  "key29": "61zkKwT8ukXKtq5vwAi4CupHyrU4PTAgCSQnEkk7jkdDBLRVgDKGSdJRqY8A4Hc8yGzrez68uGFcb4ymW5C8Uz9N",
  "key30": "4EQnx9m5pA1BTeRyQrNsyW6PeMok24VX9eBE3UhqMfRSSnzpwTYiGd4ZLy4ZTiKxtSTpX1u5EeaCek3kwbsDeyQX",
  "key31": "4gP9gnaZtiXEfXSSZeWXNPprbSieFc3yYUiryFQe81eP9k8Hcvuvkrd2LS8Q9sVVmbh6zRp7EFgXyMRbjvF1Yfxp"
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
