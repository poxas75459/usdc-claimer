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
    "xCcdGjTsT12oKqEVp2fiHu1MYfRHXYm4XVahMdfsefvLdKhruh2KxmmcyciNm9kPmer2khK7tt69XqHErtZ1khP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YzsXLTDb8PwATqHFh6kmyp2vgB7mLKDACUJ4E9idG8RotcDLGmJbwEP8Ykc4DVBW5TNkpiPhdRbVt5NGnhHBYMK",
  "key1": "4XZwYCZwo3gqEJPmJcAXPh8JVfbBYHcLyRinJ4Swk7wYAY1WNLWnosL5o3JzBmHD3mWygNmadJAJxXHCFaTbMMyF",
  "key2": "26jyrGb1uhVd8oJF63RrmrQLbG2S7pMQfbu1ALfVqozD48RHztHKv4cJgeTEvuUfyt9amsPvR4xiPSAKSKRK3Vqe",
  "key3": "2dUifUobx7eDUPL22tK8nZdCdNYEfEh6T2XEhC3PRtgK2Nt4TMCRtiR6iKFunNSUY1aHiRsbcYv3qhq9Q961cVzh",
  "key4": "3douSgwLqVcmH5JiqXxpm1XfQ1ZymtBNhyTuEWd3mNdmDHYmZu4VuPt5FKR3VUaA5HATbU5f7Rh4kJBybU2jbxCL",
  "key5": "65z4tY2yPu4SA8hGuMyJJKqZWT9esZpNyVsjYJBBpy2aWDmnpgmTKPHZVcvxxbciuqQq1nCMsXbZvzmtm8Srr5WM",
  "key6": "EbWtc2f9vkKG6MAivLYwVFKnoTKabm9GQDnE1FMtCBfJRGKpjAerUZZhJNYmhD39J2GdYhtVfmowEmerzdPYyhA",
  "key7": "3YhK8KeSLksLEp3YziYVBVEp5eQRmDGTnNZVCzaj28S95ZTSR7qvsw9jYCZUGSCKQ7qsw49cK4ZuXPCqBjuyAbG2",
  "key8": "3NAa5toUC1gKShpCRS1FkMpsdZ8n1QMNnJo6Z97NMWFvjKVTif5pwVA3S2D6nNkjJhUavfd9Mqt6JRZ1ZxkhFEW5",
  "key9": "3zuFmA22bNy5oWiM1ttKHULmzGApgJbQtwgUodFaRVXvob5KRULod6iKFs6ehByTnMQdaMoM7BmFuDXApM55GjBJ",
  "key10": "3bEVU4XP7oPYP1VNKa77n132Aub1xrqTKkVnvMT4qQeoAdTkw97JERqwUFVCdufPnVcMjgkrmhKXymowpieUu1bA",
  "key11": "CCc19JFi1wG5aqnUSgPqEyqiLFnYEAKjguim1wLtDQXTahjsuGuLYTNzxh7nn5vtDnFfU9yU4QyaLRJxcGaA1Vf",
  "key12": "5yXXA38fURTo228wWZBk9qeug9TkoatVhRtpjWU3aQ8ZnVKZBVrb9sdtoVVDrXnCtjR2RtC96AWMXeJAKMkfxpqf",
  "key13": "3KjgdiNaQqKMChG3uagq3myh4G8Pouov3kL5CnfaABRYvBMewLagFSoTVRzFrhSWxLTyvSdQ1ZwWvP2U5W6Qhjss",
  "key14": "meaahoXUZByesVLaQHm13iD1xo7A7jXTqsVHTuRNPTQfHkqEPqCRebLpBbEiVXqaDrxMn3R7gY8i9tnkWt5RHvr",
  "key15": "4X6EGithcLyMVpKFD6KoBBKT4Qa9gg3FtW8chdcKk6ydVsYkCxLFVUuu5vBmhwhAYtPX8SC7St6QUAXaqVAhgfVN",
  "key16": "4cvJYqfwtW8cExyj6W9dBf4LQ296s7aQgmnNcNJTrwzr5SHHLtWPTmfYuzRY4xAn9dBfYpuemhWzaCgbvHD5v1if",
  "key17": "2ajPmkcm6cHXsKaKepT8WpxgH7z8y7x9RYEzdaj3QcRK1gZNGHv317pEBHquruYEfHdRKYHaNqnpADLxqH4hJuY6",
  "key18": "3ddQJNnGA6XecaMMsqn5An5y2wLc8qiWhgpsus2UBNvyS5ozRmXgwy9W11WCs7sW3WoFcsQ5TKjp7LffykSnXPak",
  "key19": "crNZGJ2kLgePU7HFxC96KaEUajNw5RND9tYM3Z6b9bYEstAzzuMzJgD1PMqsoMb7kVBX91uNJWwcWWc5u9rXr2v",
  "key20": "4P6DtcFRSmH5S4BeyPUj53f6Nei69gEYSxh3wC49bRPSFuUTQzx61z8rg4Q3rtHPdjHvTjNWunbFtsfVtp3sAy94",
  "key21": "2Jjbe6veUacxdz5fEpUKcfigMKxBYQoMQyEXPbMk21nbHx9PqeqxoBk2hShR82KgSjQ8HVV1nsrzvk51i2Y84L1p",
  "key22": "XbHNcqTnCHxP1px2ubWcPHFf5d61MzbcuK3JP1ZVDDtR7UiLhWvPsDHLCxzrnj2qUbbiffb5ak3SnrXUQdJR1xk",
  "key23": "pymt6GwiSqpNZTc95epLKCQ78gwjrRpJt1qGfjE7Qqm79xAnFuKZpkNEQd5jfhtaJVngpXEdF4gbSAJf4rrVwR9",
  "key24": "Z733UNSbqmYBQSSMWktfM5FbWekUY15Y2meXkFhCcpFrmmt8eExzJ34x9Q1AnPShmJ81fzCnh6Uzr2jjwWeeUq5",
  "key25": "4RcpNf9o7QQwTXXb4juUkW4APVFQR8GfhW27Mki4qtX3hT7xWFpmWvkbxEp4Pz2dc7eACiYetB5hqGttiQMp69rk",
  "key26": "5fMsunp9ijs2ku5CA8DVtpsqAhhjRLB37GsERfKSMkwFj3EXxyMXk2Wuwi593zMSrrcuf8V3SWRzsbA5LXro4JAK",
  "key27": "2KtRgCSdGH1aHvhJojRpvKeBtUFi1z24GAgXidrrQLnMoT5JWcX6KW3LtB9aLCGqPu8UbYv1Q9hejLcFV5G2fz1V",
  "key28": "qg2CmtbKKKQrsbDvMA2sSCN1hKWhxAaUtZeiLCfPmYNx1rsVBdwXNoFvgZRBhaCYKNSi7J7Qas9Pv7okA4FyF14",
  "key29": "3YvHX14He83AuydTe48xukWdsNdNV5edAwkiNQRgtDNwxbAdEocc54VW59P6DHcSCJykH32xMupXW2NWKQJotEPM",
  "key30": "547RatCTiKr7JBRv4sGaonRR6yPd6Q5nqNtFbEMeG3yeY3NYocL7YdjmwVSTp4Z48umfvWGfszURSHxKCnY4PEkM",
  "key31": "4rUTPzjk1A18M5jqauZsHrZYxZHK6NNz9dUrFhsm8LpT9485rLKLgb182cW2NNKGuxX6NKnjUVNcW4oEpp1Atbdn",
  "key32": "PBV7barpCs2574RB1BquQWPVCEws1czyjso3GKPY4vpPB9432zCqLYBdP3SjpFHMKKNqskA2tBQNZTgaLjVYAFW",
  "key33": "3kkjfXPyshwHtZeH4cTwapn3bRF4eUa7eJMMijrj3RW4Nd7yovVX3Ds3JVLnM9fXkGfnFMDcfefP8BVDynDmmncv",
  "key34": "3TR8g3A9Uo2Btoimqm23VqQPftZrh2WUvA1nmxfE9zChGmiZMRD884UY2Y1nicdTY77FY7TXANxq9KZQCWfhBn9d",
  "key35": "578Zj6u16rrqQ1siJSugWLjHoL42dXiiz78t71W7NbneAbyoqagV941SuK6VKCxwGLdUJRV8cTzcafZepgBZ8Rn5",
  "key36": "4wfj6oX9oFnaTVBkmUoYjhsYcw2NE44opfq3DbEtNMeUhcn2Fv9sWh2R3b5F6Cx8PrpfdZr2X6XCXmhGj5Aqkk4W"
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
