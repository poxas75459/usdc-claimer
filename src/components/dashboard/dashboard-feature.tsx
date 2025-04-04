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
    "Cwx6hcAFcSNgb2pCG8b2yvZqArdUH6FbpTcj7v5Ku7JLpb97s8AaCXfGierKjoznKBLr7VQ6qsHyCQ8xHacc3FT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNzVAUQ8NUGQJF2XQLbUAhM3ziGbcZ4aD1Ms8LbJwzvVCMrttCpTS4LSZ8oppEaja9zKQyvhsYwg2W3veeYrHQo",
  "key1": "5RHTPQn3FwNfq9QqAzeBjayyJEHn92mugfkuDyUrcpieoztszFLq5RuiTkZpEz5cyVakrhBsVtX4D7y4yZ1ibNxU",
  "key2": "58jTpJ5j3o2wrDZNVxH8y7ZZpReSD2KCCe18oDDxVbri9yCLKvZg9qpYu8mL3tCJMsbjsARkZH1eYNDWDVGe4Bxj",
  "key3": "3n1axucGe2CGjkDChbuEp2QwyRpp1DRedxUyCZG18N5WNMWUJYEDA7x36evDaQasMGu9ZRGqsDDJSFutWmGM6GBV",
  "key4": "61FvupgnMCn5Wn5fvc2jxA9M3k9x1BnjoQjPPurhqEyzFV6DQfc64zoGHGEDdY4heXjrh94VCPJQsTL1G7pYx6yU",
  "key5": "56t9tUDBgC8dpFvwr6KhLcXf7VBBcNJAuBrFKgGcCV9y857VnfMnrpjqgY5JkFCC8sByRaGcdmxfTzZjPvATyWxH",
  "key6": "4Spu5PSEabgCrjawP6KiRNcjm428gJZBYaHYahXE5DEnWPimRzsDNGzP3r4VzuZu5Qxy8j9XRLYmCjbJAceJ8gRH",
  "key7": "5JAxLybvG4jEFsSJR29n3eru72YVXq8jkmL1XkweixEhLcJFFhUncPZuLSNFqS1V9VW5vRVgoW83T1aV2Mmn1aba",
  "key8": "4V9kBYZbE2Yn2LwdKTinhcsdwp6nZeM5Em9Tb2VQfkZR2rEmuEVZzypa4MDqvk8eWMu8M8fZabRY7sC2LJhyhQCr",
  "key9": "dZWBYD59JwSQn7bMLazaZ6ENhSSzSpaJxwzKH5bvsDcCreWEFFdo9WQsuGkdXHjD2XycZLvQZ13jzDjoFtV9b6Z",
  "key10": "gWFiLf2QQoj2xeH6AA2GBJZEPgxwkfKJiac9SvkdCjUWFcRVbTGKXgnJqfM7caWvM9SeaFDKNQA5a8JuWgMZbPN",
  "key11": "4JPrdxzGoPJEtHdZHWjHPdUkv9RBX4HVn1TQD1oEbQ59chwsZyPxGoAQmJJA1gdYGe15fdtsT7tgTAmemXUtm53R",
  "key12": "4ZsGVNVkcBSvUUwbfsxWxERtviu2gukiT4GZ4ULRzaRLNv9vhk2gMfKssjKK9sUpAVaMdiXSDpH9PcSk8CnJwYLk",
  "key13": "3Ltev1MiU3y5YRECzhQYk434CaF16oPXQAztPDy8ACZzA6DohsLhHmP8W4czfmBagafYpuroeQKmD1y3WvczUXXA",
  "key14": "FK55Db7zWBtLR1wN4p5ipSeGAvdiFqNNLjU7jKWsaH4fer1748Nb9mkPgvYL4PyAcxhwnfKEPVagPQy3hTXRKUf",
  "key15": "zKHSkcwTNKDhyizuTBJUBrHvSNH7f6nXLEhFgMmWt3NyDYJTVGH6KEMNzgbWAzAtjtAuZShDQ56zaP7XehhWLjt",
  "key16": "3uRgaau1gDLRNQ1Td9Rzrt9vc5VdQhrxvuHhxcFPfMNKUFD6nYdwUKKEDGiWirSGoUZt1JcHNnmCMkRSZwDAdiSF",
  "key17": "5amY4STCfDJAVc3bbQ2g7RrSb96eB13hADDwi5DrNEHXvwvs2MjLsMDTU239ViDiUMyhhtL3RAE2DmznwUyxhbmj",
  "key18": "2bbqYPj6SDbpcqtJ1FXL5rsSiaFTjQdQMDUZfzJN5cPWQPQH7H1tUkHgerDoy9z4mVcQDwbGv4DcenHb9qtkQK9q",
  "key19": "HGteusu8SDReY7Cqq1rwSHapJqbAHaxXoujyxNDoGQSyb6rUnNkSQnx3kQcDGNkvbsLPM5w2CukAzCmVEppNBz6",
  "key20": "2je2UE2Rvd7scxuqL8jzoF2mVnszRYciHRRHHVtbgdBBFZi41PKX3rFrAgc2GnMvkN2YU9c2v5j5idaHiPUTbHu",
  "key21": "3oyhEuxYy9BCjdWrGMiMX3Yx7Sjpt1fzc68ZLqcVgachqnfACaRgZ9n4LCjUS2XfzJeMQ1jcwMRJcug2Q96bhvH9",
  "key22": "24S3wMD3vc7vGJMJAJqgojEok2FSiNgKUTKQPkaoyh4FvgKZZiYHGzNzahbgJHHeJn14Dp9R9EWRFsQmwp7yhsbj",
  "key23": "ZgVG3ev4jfGV143GCpWC4fJJa3qZVKWCycLqNmjvPQQnwTmzDnr6vto8Papzd9WLpBshLzRQUKzoVyb3ZjzoJxu",
  "key24": "2YonMLGUdxrt8Dq2wRRQhhAwJcbH34k1dbYo1QNxhG1HXhZR5wHHJWstKXYVv9TpRQs8BtNJdoD2qMyctUePmP6x",
  "key25": "39yw7cBJA4JDznsao3BwfwVbkZfhRDFbKqpkjZaCEsh2JRfLfvFW4C4DXyoZpFfXqzMWDnyesADrsHiwNhcyQZhY",
  "key26": "arZoASC7bim5X5x2PUUC8nS1JoJD1DDRNm59cGyL6GCrKtRkKfQHiFee3zC2qETe36U6f9tPJzM25F1Xxe8rzyh",
  "key27": "49i3Crw7iZ1hojXktV2TR7wVAmyuvfcg9zRgdCAvkH73VW1W8zMHU6hJvTLegTbgNNNNawmjXKx7yErTbnnbwgha",
  "key28": "4g8RDvbtGRSh9op8MrLE4MUg5aVWFY1cp9nA6bXuJeKS12qwESRCGgiMAbHWXPNMSWSWMc2LdUFW4zP5sSKmnBQ",
  "key29": "4cvUJYCcxR2e3JhYEukXjXUk59td8znwDvyFsVastvkgp5oGMCj567FDsmwCmDDVFNe1SmmgoCvkWZpB4cdRQdSr"
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
