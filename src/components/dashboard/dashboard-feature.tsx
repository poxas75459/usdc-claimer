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
    "4qNiwQ5DFf7MXBzfHf3xtGpBxjDrj2LxKHhM9jPsZ2YpdVnqddbKAE1xyrgjQzhmrufKG1oUmzsAvtCfH44vuUfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xheomTjxpPvQaEaBEAPqNA9meD7VxCUqp7aDEG8py6PYx5UaHDE6ibY2bC6wcJHB8ykm8k1YV4phgHBbFhUXDQw",
  "key1": "2uYxoncA4ZRe2wJbBJ3EReTmDtxjp4rQRkWaqd2ynX9YU7QYMBv13XGGjZJLd4q3BFAS16fEHLtfgnuub3rP81P1",
  "key2": "5z2GFpKJk7qsLdUFYJF3VFsvvezwYcv8g2t6ogNEnfUmgYPp8ByXt4oiZTjiRi2mfLY6WNqo1TrCYQbTCb8FqkpJ",
  "key3": "3NZkbZbJZktfqGUcAXCYiBdJjXVoBF4VUXMSaYZvpriEgXcoJvasKXGmtSoNuFCKdzEuAWBgnitvtfDY5ScBN3XF",
  "key4": "2XLWVwedgvLuNNZVsmysynatHw3FjkgG8SEpazoVp1E9BCGuWZiMCro65raiqSP6278YBzp9uEn3f2hF6uno5BfW",
  "key5": "3shdKh4vcQLGNthecy7vWzdg21km3N8BW3ZM3ZCHcTNxBP9btfzMwjT7E9uAnLe6uyBZG5UGo9s71KwTtrbiXbsK",
  "key6": "3wdeotdMW1EqE95PwsVUEKAxp5Y1VwfruZd73d2RtKzQrDXtJSZaLoniMofsaLK8HMgiPKjLZCuEcuzkxFL3ovTg",
  "key7": "3US9B5HexRDrRdDvtegH62sw1545ULVteuh4V3peFrH6JBgDWj11xgKpESXUPuz28eC6QzFr8JyzYxHwBHgCK3Zr",
  "key8": "4zJFzbqBJ7zHqmJuKQd1xFU1c3KvcPJFPzsDdV1PPzxrKi6LtPKZ4Er8vsXc3pNjEE1HFxQoPFQA8bMGzpWmiMP7",
  "key9": "3F1nWfzNixFvcgaEFprXnqfkGF91oe5LMXzgiVKax5XUpUUHhfswkNp2aRKbh8DyKxZrBwP7vh2ETxXyHkn2pXg6",
  "key10": "5616tMUi1ggmzsJXKvX58yN6HWUH9yUqvhXtSWfh6fWo2xsZSKEbz8zfUBtYZppD3ijGdfATDLy3ZzfFmpzFaUTE",
  "key11": "98YkpFfDg5t5G43ruiDBN6xXpiKTD1o4kHTE6uVa1v7snsoUuB3cxxKppPGQD31CgbdmNNUdCpqJ6yWCX3tnEYd",
  "key12": "49ngGF5UMKx7Su2muAJFz2nx8jbFeyavyyxLeYNxQJf4TkRrNfT2QKZjK3UWVVBiBa7aoQWNF8wA4PkLQYvRmFkK",
  "key13": "5uU4K37XrzVPTKaPvLGQ7YcEFnusG9tWcZSQcPwX7AiaE8Uj8wxWHAFVeJNogw1qPyKKQXAWLFHjyPzpeqyJtuwp",
  "key14": "k2PpmMiVYbeJgrZkxHviiSSQb9mFqdYG6EkonTHrD6ZZ1yZ3ib49F6MNeeUz32ra9BcNRq7F2Nb4Y4eqZH1FS8D",
  "key15": "55GhcQBBgS8K9Gg6xaW42PYGrG8KGRoZGXHNCRHKCMwZxQyAeBUA15r4b7Ew3hqoMYH7XpbzCBr4rXgT6QquStNW",
  "key16": "3QGCWushyvh6qiR7rEoFvR1eDQSAViEiZvTLJBFHhYj3aPggUixryPWJbjcSUPMnmTm7VMgYEbZok3jieEny4jg5",
  "key17": "23XwVU4bFriRdUdgTdsR9qEZ5ZLXD3vLVJvMpunwSQGB8yHzDV3e8CpEkWATxNnait8VNi4i7zgXRyCXRhPGHZzx",
  "key18": "2nn9wUiE1MFMpakwcfmaabn8J1UufhSvG37a9sR456ypnhyKMWEedcr3hxrUjSACqhizBXg26AaPB91DCVaFBYkE",
  "key19": "2tUeD2rYAfdkL6BwoBGXZb1yyD1KK8Q8d3Fp9EsRiQurzybe2Tk9KJ3k5pvLuVnbn3fCh7vPkfQiNzwtcuDmHDxZ",
  "key20": "3Pw8AzF9P95y62HMYhDn23yLXdyG4Nxdwp64qDDBGcEFroVbHkJRe3f2jyXA8etxF9CGmwHCJDQe3ifyUisu3hbi",
  "key21": "3Ciq5SzdLsRBR7Z9H8tdH1ByVZJgmNJrqwdbMVUte62UJtBwvhhuSRbUZha5dDdAnNesmwB9BYt8GvzerK34reuC",
  "key22": "2VqLUYpEjgw9KT2YYyMFh3UbGM3c5DcnpXaUFB3BUbcnxiTCgkDoZqapvRc8Akbh1kEqaEAeBizWh9b4TFJ5s5tv",
  "key23": "XZn6oAZCGSd2aeBDt5Mw8SmX3NjMWa8SckPiJqCVm5Jq2QJvP6wqbQTn3ozThmZA8WzHahWQH4brCCdFfxBHAUq",
  "key24": "3rsJjQ3sCu2HZnPKUet3u6AuAYi6nUWocxvGXM4XJDaeX5ozXLvf82G2z4gtUN1DjVVTHgLAEHQhcLaQhUbvoNyK",
  "key25": "37pDrgTfMc1fN1mDaefVmimLry3cUoCKMqjGCPoi24oQbe2sP8cbi89EYPGxRhEqBm1cwgxZyX15rrHSUzSk1vSc",
  "key26": "2RVyXiXBesTmXHNyaADtSHwiYECsFxn5h2Msgx2xBmCo1bVY9P6EaYpcp6tGr8Je6PFhKaWjnV2AbButU7ydrWiZ",
  "key27": "5eaEikLbEmCojp3RKahcaFrB3yc667NDpzQGvc18qqFsVsNPyiERknnj2LHjWMmXCx5JWoiehVJDqMMLhfnMtF2g",
  "key28": "3zP2Ffmemse7HfYvdjRHSxGxWEyzxPGeiykwJa37BZzxt5NvKbPy4h4RCvVQVwN8V19qnFAQysWLtuB2LGBefiBF",
  "key29": "4aY4x9SRZjWnJ6vks4V4fMfgVUY1SnfgAezTTrfkHcQRm2emfJGDyo9fq25DTXFEChc1f6r1f27sMHZjqyv9XUAw",
  "key30": "5hYosvAeqJ47J9J1tbK2P7ydrF3SguYoEkr6wLdhgX1w5f2DnagXcWKMQL1ppdgWMcQTmyp7VTzJvSpNcVgD3f6",
  "key31": "57BpfxxA2KyLGgHdi73BxL3ByjYf5MQK6V9HkYQKTpvmwZvD4pGbh64RLWAqkufFTGiQ7FBPnRKSJSPr2f8T6VQe",
  "key32": "3dfwNaeHi211mrHGnDuXGeENPoJ1FpyqMHMhpsrcXMFcb3DkPHCUJuMg6u3XGd5AC35ebFtCRpaAvyL33YT25d5G",
  "key33": "4gzodwGWWuB1Z1R1TGksvz36K1YFPzeGAVscB4MVTVwbDjn7Xpghv8BnRF1aXChywtDPvAvr1QKftr67QqnvK5zc",
  "key34": "Y5kEqMsfLmEkRzfwHPQ8obYKpwNQuvUVX3DpnsYv2vX3o7XkwiCjxvt1ejg7PyGMnYV1W2zgeT7doVcgjRspSjS",
  "key35": "5CyjFdxrHWELLxQ35XYzW59hhRn5HH2tqGT9hd4B3AqDN8mnye4qbLkXNZf1rjJPMN5rG5Jm9cuCsuRdvjeNCA9x",
  "key36": "4QhLFJgPekckv4v4uocXHAQQ5tiGQj3eDAVXUnfWPA7249qmPeP9X4HUuBBZHagC9gggPD22gTpkpsWDwa8jszmj",
  "key37": "5ffyVmmoSoLrDEV7Hdmz9jRRurdpmQHbXxjws2zKwsiXwUH1H36ffUC1gBVgD19wk8aEyBdUQYjU4dx21Z2Aitds",
  "key38": "y3hRoN32iym2ePW7jfP7EC9HrfKeECFATmPBLP4MHNQz42Zb6GhHEfe6oa9BoRLpQCgzmgxeL9SR8RBGn5mifZK",
  "key39": "3MMgQzf2roerppqLHBosrBDx5nZKVB2Luw45199Nd7BmKTx1hLCmhVHTKbJ4YWvaNs6hgtvG4UZQ2dVokVGfGwbf",
  "key40": "2ZmB7W8cgJdYaf9NtKmbiji8wnwmsSLPGDJ2qDss1RK5TyoB8ZXtAPovrLSEyM11FtYc6TpoWHfPuvEgxVzpduxk",
  "key41": "5qoUh9Cb234Vbc4xkPhDRGT9u6JsjAHZ13Skd31ms2j4uAhGotxhZNuBuoifHGgNpEyk14QTZoSnMX8DXY2zBie4"
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
