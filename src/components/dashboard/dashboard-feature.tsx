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
    "4pTbtjasm4PiXNnofhCQJ9NSzfH5xqSqggsgdwuQchcMRcfqWZ6fteroFatewUrQPiA7dMiT58msTYWiJgzoKZY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62JGHYQq14VZqsPfGfetxbySAhVFU3ZZo2o8e1DaVweY5T7h1VWrZeYHogZQy7h5aFghE9dhbK4jAhFVW7FK1N4t",
  "key1": "2GmarMAxVPGKkqgHqZjQPhsnPHLxKVnS8Fxu7KT516AXCnAJhmxhUmcy9qZtMdSNTVocXaz1fTJrzuGkshSStC8j",
  "key2": "5JwDRQW3YYg1n4m8AkgNvkwXSg89E7J3JGdc2JUHWVKrxCQSdeVQEq78X95Jtp3oJJaSYb1UKvp4cUYkN9oaDhjH",
  "key3": "66az21DvQp6GhRMNWxXBhGeGHPsTAodjgEP8fNuPu3kTzRpsRQvbCpmmpE5kcdMVvikwByUsyKhT1iYyGRR5P8Nr",
  "key4": "5GuVmGJaHAs88FJUhtHGLBgRmXcr6xVKTHoNcBLvanU2oygc1Q2MPAEGczv6atBt8WkEQrGDF2LyQm4MddXRjvxo",
  "key5": "3gjrUbf5rM9qu9W4t1XymEeoHmeyVETQj4Yy6fXTSkRnyVtPxHmhuyAqa4MdkMyEBhvxLzCvm8YazwkvSVpmXF1e",
  "key6": "2PGQtwySXydQwh3usn6hwdttFGM2JJY8PrvndV8NZZfZa9bSzXPVnHPJx9SPZi4FgWRytB67fsj8mWHwxW9MPWYz",
  "key7": "5VC47fbvwAsTdgu5H7BP6WjBA9y5mpyu6wJQhcSmrhbaTF87JC3WqzqaDcpRLTBMhEKLUa6buAsxcSvuooDYutoE",
  "key8": "2h7Mqe7RHNDFKB12DE56TebNhXHCqw4Ei6YTPcTNxVne6JR25z8MYLKsgUGfi9i8mFWtk9ufiqBD64wC85NpmH2b",
  "key9": "5rYhRwsffsMx4v2He9VgxwPGfAiuHYKaoBxwiV979DH2Vq4fEGpQfiFaSAtzyzyhKyN8sXPxtQz3jEW2Cx9DtTGS",
  "key10": "pJpFWg8Cw6yCfuq4GTuvMN96wgtPKz6P3KcYgmCM6YshFvyZTvYAbHTnZLgX1SnqXTscv7Tp6xipqAG3KWuAQTg",
  "key11": "sTPcPf8xMwge4PVyhB5tJxoQiRMscBY1iVUkDKx6mU5cDB5wLomkpiRxuVj29xZTqg7csVgy4nQLJvwR6yW4aB1",
  "key12": "5Q5abC2HoWaXNFWuWesujyrbYetvgwJhByFBrFs11HUDmc1WsiKTAeitrvNk15Eoq96TMNhKhV7ggG2njcEe2gZX",
  "key13": "3quURhhzJDWVgvtPmUxcCEmvsSDXcwgN3rUrghSkwdi74MbSxmmyQ4aApkJqnNh7V9VTq76bfrPXDnfdPJjXbZwJ",
  "key14": "4zEuatEgrRLbEfDwAjNcKpXmjy4rNHFWSfNgA1jvGut7CW8E8xiAsWAXHCFAWhvDvRHysgi79oJPuL5LQCYRstVj",
  "key15": "3tZEcWKD9XAKWYy7UnVDnzGNTE83avDUenTmfyc65eKBxsf7nr47HwwVDc6MFQk4CHUPwHiwKV6D18KPQzmgTNYu",
  "key16": "3m3Tv6qU5pKZ6ufHLVYmMe6GG4XWcKaUg4WQU8YnmyuZExgQdHgfUdWjbw3p9FTXTECyDq9gDmXgCX415LkveETr",
  "key17": "MdBJpta1EfiN4W32vw9vMZq3MxkwUcEdCuAUgrS4MnuzvCQSiY1V5H77TzBhGHSCnrjG1ydZsHuDH62LvpskkGP",
  "key18": "2rZ2DtCq9YRzv91u4TijGxr9h8kk8EPiXoe4aG1GACBtVjv2WqvPAg6fxDnyFKaqCNa27CFGFm665cBpibxLWBfz",
  "key19": "uFdb2MpMJxCiwaCYQgoX5QV9ssPSV7SsxHVbmuo2cNpY7Vn6EywxJjZkJASoRhbG3borzogHtoBWrZzQtLx7qEe",
  "key20": "1zJbGj4KAmux62aMPT5vPjEssi4gqomCcwBQU2r12v39K6SwHwyyJ2TC2tEYf4q4W25jgr9wgYuqasSp6CefPKT",
  "key21": "JLZJxARosYNq78R5WSwNpZcMAxCe4AD957YCUWXH3bthdyQavYKhkEuKpcjz9HppTiqafMcwWwRsSxaeQ2ZJLJd",
  "key22": "3NB2Tcr8pNx9gdf7nAurCtg4Cz7XwB7nZMRGLcFDqJnvSk8ChALj7dw3bZvhaeH8Hcnda8pDFo8VH7oXpgDttVP5",
  "key23": "5ScxdydQ76tkBFecWhQN11W5fB2b3TDCSPS9Aoih2yVvZ1S9P6NiW8p9UJZQmVns4GzVH5T6abjEe977xWxDAn6",
  "key24": "KfmfB6dsjeZiqqY5EA3tHh3nCWsuY6GvMwZn3YDHF8yJxmHHputmB8TT5DZ2pGfQaTuwYk8SRs9pQ2Gb5zfxoYf",
  "key25": "554RiAA2xtePhrWvBVATye1F3L5KAXhxodzX8FeJFRGti9HinXfoVB1ZMwb8HU9hzPTwmNobnxi2KmPnxkNAWhYs",
  "key26": "3msfhSHjigED37C7oXXWox5KQhnBmnHMN5WPtVEqqoTm8UkwFnuxx4QmWa8hrZ9Z5zCW29WSmd1iHE1qDTeRTJeN",
  "key27": "52frPybFFwXKGdnQ9dowHTjYZFCvuYE7x1WokLfnCogRZubSRrNGLrGtoTiCcTNZXBoRfYmRyqMLuN5et3BUdLWL",
  "key28": "2QSmymXLpshtgzYe5HKNu2tpipHiarcgrk41QWBYMdCw3QxQ99ArBzJgGiwx7YtgAk2mPdjuXK4pgooa4hxDVDxP",
  "key29": "35pBj8pUPouBwqC8K17HZbvSNgNSBqfbAAdhUR2RUTipu6ap4AM1pBZbVdgneiDLpy5LEEy8et9N9WY4kNTnX6RD",
  "key30": "4gG89GC3btWsVmRVE2iZ1ToJPqENH88ytXD7e51hGeH2yEveazMFq5YbUgzpxc44zjkaUc3Vreo8XpAzgfaM6BbP",
  "key31": "2krFM1H6NEuoq7RsFh8xpXBRqc1pn4ToJ9zKNCJhU7kRn7xRX4gLMeUBfpo7D3pF81rXAocDPQGh573kUmYdNpDY",
  "key32": "5uDeanigQufUqjLATU7CNM37Ebtf8HE4uMNufqjfRZ9W6eMrr4VFmKxWxzDahUsQpy7r91V6JVFDFbgXAudVsrAs",
  "key33": "5v1bxGGXPmgDu188m49WSzdB8KsymnDZarCvEqhjQAmn7YUCAgtWpvs3Ubwy7uo8x4B3morx5e8dZv51VA4bAehe",
  "key34": "2iRaMtKtQTS9yU1qF5NpTVgRnFCUvkL4B8X83TrbZNtxKnqYJYpKTYt54FoXbSA2zQ4YuGSv1rXB3JdJirFNmmU2",
  "key35": "5iWKpfNTXz49MXz36UaKpsDZVCDAeAUufZJMbpVcEvcWr19dcuYxvKFp4axBcGSPLkP1J877TgB449g8ANeaV8we",
  "key36": "2VuACBmTa8JTGFqpjoSUZ7e6PqFKYTEtKQCHSBgSSi9y16d2GHZUaEqnCkeYHtNVdVDBhZzxABTt3oDZWpXWLc27",
  "key37": "2VyunUGpcm3v74s4bxP3yLeSL6PKzsp75ST9PBYLNh6wtfar39yz2Xwrn2uDC9gSdFyFqRstWvtvwe2rucpxeFDb",
  "key38": "Bt7X664SKMoQwZDznfD1XX8E1YX6qzkiJwS2DheHMteLRHj6nJVbHvKSjYy4Yh36uH1qTM7EhUf8KT2GmrX869z",
  "key39": "65w7RDghnRra6BHAT2sJokRE6f6oazvu8UVWaSHBKa8w2SoiXuYGt7ehCbWhudG8FP3a3iJuqydAaFQc9GmKXTj1",
  "key40": "qsthkeTVFuvhAQgguTi77DA3YD8wM5FoEJRvx5DTVVcB6VqYUegPU49kAMvMsALhD5dnKRxz7m1umgE4MCuTZs8",
  "key41": "4uEayjvcDkpoYNRXhW3hhYadaoH8t81WrLY6FDGrq1kWZfZk1QA93eYWuBYAeXoJpht9y2n3NzXTa1qhuiwe9Hx2",
  "key42": "tAZpjsZjnxxKazWoLnt92usMoymqzLU2rehgngX9a1ubutGHwHQFW7jWMhVpzFLTguoGpPzRv7TE8cFZhQpDph7"
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
