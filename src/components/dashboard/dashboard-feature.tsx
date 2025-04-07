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
    "2a4DcyZpNg8K1kG17cX6E1Nie2gT2BzJN3sMo6uoAvNhJo2q7BuyEWnCiHtTnECfbsAcJ6ujpTi8RMrBfbKkjxYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXrRyNDmR2E2VmYjBZD6AHourFz99Pq2iYWegDr1mB4GwBWgwkSprLwMzo4ch58HivJV3sxfEx6KP7e4BesLL9B",
  "key1": "5QYp7LbszqsEWMnEvKCoVDFgBQ6H7uwb8QpY2EoHm3jfo1GFJe8dsGxGPwZ63ZGF79vYKjfkktBy9BJGBUgXB73R",
  "key2": "hngGpKPq1uvibU9avoGRku2UYiTJvo66KWaynUzrsC8R6DAkbdNpyd43Ei6ED5koxJdeCSBpx5J4Dz9Wh76XJmW",
  "key3": "4zRZYVSSoo9jJ8a2n9kVJahfvXpzR5y4Y1gUvBVPLpWem7mays3iaojP5XX9M8WMZVkMn4fkZTXuUECZ7gjjCrkC",
  "key4": "5kUT66j7vfpYgpwHaW6kHwUAcNJbeyqnz2y733mRiVqzhE73hmvXTLQfWZy9t391SbFqbs2g7aCrfbbojyk7gnmM",
  "key5": "2Qm5zcv8qBJf7TB6uGFvFtD3j89hfjUePPkdN4VZDrKb2g5tBjucvuFPPtH9Ahnyx7b3maREtA8cLuPHa7fuupRJ",
  "key6": "bnS2Pa4ExD8TvMrS1woxvrm1ApzKxUejbMwbRypFwoxiFw2esyRjrjDbrGnKBBZqT6rMo8Mk5ceRqe2RQQABF6n",
  "key7": "62zHqaa6G3bfhENHWAC2Whqgpp3rpf8ETFnmy766mpvfvnMmciDzZauVY3bY3ZZQKHaYwdVtDdQT1GR611SAPSei",
  "key8": "3cJfy3GWSz6PUanxu3G76KChn5G68rrrXhcSan7dehU5YBdic3AijEC4KASvUdV2tGHiSUjFwM6Wsz41365kkWpr",
  "key9": "jUEgkCjK615XpVjmc3gWk1hpXtmyk8yTGqbegQNLS21ANr5JE6B5Ls13zUwaM75noDhQ8397PzYmPM5aVnXBXHh",
  "key10": "22HTPPfnPoKoh565eV8tDSHfizhqwZT4T8rYkgEz9xhkCaXWXhibpFzvngMkHdJk5F5MiXe1MCYKXshDSinKyNVh",
  "key11": "4CHPgnYpCdvwyGyVW8owb1VNSbEZzeY78Yr3FKAtqHqsjprxq1TiJgnemjMk3PTEt7LcCZJhE1CtEgET3Q1qMNKv",
  "key12": "v79YcGwksYuq1tVMCgTo1anYXhcit7oj5QQxj4JVSc6ecZYNkk7E4FwX7C7b23ZZ3keD7ntS5Sdgi1PBFhk5Gmy",
  "key13": "4zX3yvyFwQ1y8oR8UETLY22MHtDz3yMMCadoWDiPy1ewf5hpYuEPR8H8ZvHvpCn2XvCxenFZx3bj8MQTJUBtAW1f",
  "key14": "3KhGpArVCmhNv6h3rcUxk7hGbp8YjksKaX63nG2kKqS2PVPKAEuyH3CkALG4ewqi52FWxHyFGMTyckfJanjQRNq1",
  "key15": "4cjyGuQaQKNiEJk4ZHEyTUQYSb6KMP1SFV2AcJMwHghTaZovMHhZtiitomAazyjEF2q6UNKsey286yuKxwGJocJE",
  "key16": "634i2GZ2Z5aG5px8s9DrVQtKoHJ3q4PfzCZnFwX7cdFKsiwR176zTbR4Lx9gKHuaVraJ6E54jfCVS5o5kgSM2M3R",
  "key17": "3Bxt2NzLgwXs8mN9ZdHBXD49Ruezg5qpZSNK9fnnzgxJGk52b8QaJmA92BJTu9o6RFSB4UP3ozqW9D3JnEZZcymD",
  "key18": "3h55QMNzfJBjURcSKxaYT3w8MZfqcWu58SYnoQL21eA5idWFyvv8JGzNXCb7dMCWKFQLaxVGEGPEBabEJU6ohoKR",
  "key19": "DE37qwqsF9uDmYFJNK72rpye6XDQPACjSFPexq2Vg6fLWnf3x8mUo5maQRdcmjnzP1wzVq4KMEUjnxLWkF1joMU",
  "key20": "4TW137ojnsRTAeJbj9vb7A3JuNuWjj87vsqpR6nDParUioPXM1A3JL1csmxSMqzVwW6RURErKgxQg7qPVokD1FvH",
  "key21": "39gPfbTVs9otT848d7qTwqhQvMVFtKtLK6a6JiSMR6Pb3UghDFs8cPiUQsiovBfytkgeeck94vFa5QwYdHsxArZG",
  "key22": "4p5v28N7R5Gw2DKJzfsrvA9ynugVCCibPL1V19X5XAMyQt8qJwsgpGr8k5P5K1ePqmhmYwpVsgQ7oAQW9pLBJd6w",
  "key23": "4mqS6zc9y9Pk5fk1rvuhuvWKrRt7nXunpQkC2ggprTgzHo4XHAC4Sy7YJYcNz84hUa8bxboT1PJTdJRZeGU9ESum",
  "key24": "2PXxKVMKcKwUcnzxDgoK6yxZQgUQnnzZePyLxvf67icP4iEhiL8DPCME37j46c9AzsWu5kEBzcAzPuDA4ztXMA49",
  "key25": "kbD38qt2nSV7SiXfcsaARzb5UkP8PvSv8VRLT1d7URthzRELVM82e8gt2RBirvVATL71d9u3U4zarb4eTkv7pMK",
  "key26": "488TFu5Ets75usz8RHTQew7UXqHeSYsku4NJsU57i1mhfkURPbV1fjX5aNXtSzkTZUKeAqpUR7e3BPPMBZ59xyZF",
  "key27": "xX8tfB6T4afXiukwJkqTHAdMS12qvzufUW77Sw232BDCKhgpMrkR5F4rVz7naUcVZWsu1RYUoGaECG6na7E2zhx",
  "key28": "3BzmtWVheiAmR3X8PDcfN2rDeAkwjLzfvNisArT1ZWzGmziNbVF9xBziRrYdt11zvH3V7T4o9XE1R6YgBfgke1YP",
  "key29": "E6nUWPsd249sKYDT2QLY3GWRN7MtubbzWuMb4EdpFS5JbdryiNZi1McRhrpdFYvFsWxvQfdKyPPfpWmebE9kTTD",
  "key30": "2hYMR6eSYXzQEi7PtFb5wXYnFHNFbpDuRYC3CwgZYpcrNVTJLe9HTzwfd3DiKSTQpJEJ8WqF672vAdtWoaR958fK",
  "key31": "3sJqfp1o7EiR1oefZm63HC2FDiqRor3byUTr5vyhTF3T743iuyUbMcCA19xXor4ChdtHsEmgtfz8dgqfxt19f6ZH",
  "key32": "41yC8nHD8JVzimLGTc87dC9AqfgtLs1fWgsVy8MRALMecUT6mf4DGw1SRNKVKawSsHkPzdqUGtqEtHx1MFvJJivK",
  "key33": "4nJ29RaAtG45C7ZDnqWEmzyXGgZ4y3Trki9oCrhiSrJx1wNFoYyBJ6Dr8Tb2JLuBqpFgmRD2GxkzNVch7Y7kHJ8B",
  "key34": "35gMiw8tCRZynusJh5bmCc4CwcS99HqfrHwsWhnhCus28TVfTJEUAiNF93hL15GZ1PVfNnDW5VZb4p2sVJxdTP6w",
  "key35": "4zrqkSY1rqEqnsxsMzik2Qyx5MkCfaPJgKafbgv2dze7ECyx68ijo8cNM5XYGEfXQHyhfaumZn1nUAdey8NtuEze",
  "key36": "e71GkBXr3LiJvPT9TqurFZfbwES22PoSuuu1xzPF6Q2itfWmhv1c9Q3fsU1vgcf8FQhPPu5fyHvuutkxjBvFac9",
  "key37": "2nAyKD9dLCHm1zbpthnDcT9u9Rwo1ehfH9k117CUJh1KLcnCzsQLW7qj2Zc1L3TCCzWa4mStLeWecra1Vqa6WXci"
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
