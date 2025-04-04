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
    "64jTcsoiUEtxFPGTXx9uE1Jfp14GgYN7GXGC2fkL3HQPCUZsJbmNsyCNGNeVF4Mnfb6bMsrKrdp5jFKEHDyo8ZXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KtjBxBLFYdpYEQsLGRgXD87mMUYgXKVwPNhPWVMnwiJ2E4Lxjo1TyEScrirnB3wCfm9VfBxNdLMNGthXDX1QnU",
  "key1": "3ST7bBAu6h6CAnfChBmYi7d2sxiqFtjdpvYbSnJP9E21fbvFgGPvUk7fUGG2zbGMjGvne6nT9fnW15QEhrGS8mHk",
  "key2": "gxw9RNFTLK1uaDQ3abhULS42LXGpBHg6pwHiBZEnQFUVPVgRNzw56mZYJmx5kC1Jd1iRWTrCDuoVYsXgwJLvGwj",
  "key3": "9wfUwCUSm5m6wrjGhFJK4ApYJYemb5GYtMxgP3KiTZPVApfKwVnNTdM6QQCPn7VvVFVeZk8PUmWkzihM124cwYF",
  "key4": "5XUghwp7bsWvjTFQrNArYGvS2KxHFPQjRrNvRmm3TA5A6jpXJoUifSwZuWyPZJBPPA4QTE2xNS5Aw2PqF6FzN1mX",
  "key5": "4zcUZMkCppjrxPdTQ9SzJG8H2KNgn1ZJguVk37ysbY5f9W4okCb6kdF48EY75kJUYAxYCxkngF4ucTM8v1TLNX3a",
  "key6": "31cZUYr6E8vWxCdBGSDNjCveHYaF9K7Uifn6qQE18PvfMTbDgQ6KC4at6xPNru54rSpm5zifu2MM7LGC4nvk26Rv",
  "key7": "ixZMtbkXv7jEsnRZPePBYYjEbXeAyd1EU8qzJ52vGqLEZLHXrMcf2r5N1vUkDizdYB3a2xe5mNwr8V9xEYvpoMr",
  "key8": "5VwRbYBTaCYLPG3brrsWbgmS1byogZzuE97JC5JveJPnmxbXcKmwkwQ6fCuDUQYhizkgxPVG1HZXhFhXiP5E7QzX",
  "key9": "2mS7WgSgXyhAiqUsZZ576xpqDx7sRaPjP9DRusfBeaAbQ7E1Aqba2SYXz4PftoW14RKSAArGAAXtMFL3NWJhQveE",
  "key10": "HrE1vjzcPJCnDQtPERLhG8zyn4YjAEKe76Dt2e7ybyDL9jQkM4JzAX1X9118fcwJ31BZYPebWgb882iUrxiowQW",
  "key11": "42ZpKifJExUYF1CKQyQ3uTx7b1c6LRjLgoJex643sUvYkbW2W1Cv8UH2J2NsAsFULPu9ZhXKVKCYmRNLSi6tgV3L",
  "key12": "kxiSeSWof6FV7Dod7y4rNvS4wmj1dza5znwjNstqYQwokjbGn4FLe3ZwZAVhYng62h9EAv6h18foG2kUmj9sidZ",
  "key13": "4df83otcWHWGF1Edj4k2aarnms5aNtA1QxGA9YgnhDpDkXNC9FLi7WVPkTqrAoeLSM13MgAiK1A3S2fuhAyH5TD8",
  "key14": "ktMBR7D6H9H5i2ABANGVps9E6qF4m3JpxMyQw9PcmnUEujp2A9v4y4nmRhS1xQPM5GAafQ7tjpD9mS2yfHH8Jvi",
  "key15": "3Euq332n8SPCdWs88q8aBxxKxoTmpKaGHT3YtxhuQtC2kRwNa8YRyTgeDC2DMWxCukG3ZHBXpVtcdYjik2PvLLu1",
  "key16": "65vLNWeRHTVuY593yQw8pzoFoizsenNBKo65yDBK61vaGkDT3opbxmyooixMDnRffRt6zVEFmBFn8UePTgQNx4zm",
  "key17": "3PeZPCvKwLaNyWUm8GsFjYrSmsVTXcynbJ3JyUwuMd5V3ph6DSW4eA9A7P8KELi9ihtTeWD5kgXxRLAFL8JG4mwu",
  "key18": "3iQtk7vEXpyR2aARKWDqE4mesuyUFPemvACvodX7CqA4aPLdZZozeNGeSsyCTD3BfiQCRhiHL72nf13PQ4RTiQZx",
  "key19": "2NTqsY69aSmvTo6jZbruJWkVPoXXeBXGUVxK4M25e1WE6XgxXJHiqroFmQmgon61x2dvjwTf8f2F2Adtcne6s7zY",
  "key20": "5UPfNYpZzdEFz9BRXwrcLFovnaFaP9F7u2k3cDm9rKbs3dekssJ3RiNYNqGQJMnijCGgV2PxyRyBefgXWtKYrXQT",
  "key21": "FTvTSkoEidUcUu47kmiYyowWqDTogwLP9syuiZNLEQ5FzveGCoqbyvGN5h6xzEm6VRjeiyDvDQdJRNYeZakW8bd",
  "key22": "KRv4HHLz2hYaSNjYJ51yQZJuYRU32X3vg18YSwh7wcLMdcrfnu56n9E767JAwTauxWbzH5zqGk3XaXwWGqJSLHL",
  "key23": "5PsVd756qfijKygXnLt6AFpJ362TkngfpMCZnvGFvgiRr5JX2SBk34rVw7vAuCUM5tcvwuiwkQmiqojy3KYpG6kh",
  "key24": "3zRWZ2n1GLGc5jkTTftrzcLqEGqARxiKvStq15rBBC1nyCrGHs5ZuzcWbKoqwDfQC68AjvWFpXcT9G2gjB7MRGfs",
  "key25": "61w6i8p1QYbEFPYEHwMZf4LANgf3yQbqTcpK4u57Nrx5NPZxhaPaWJpH1ZWJTSPH4a3wnBmSZpHpmaDX9CjggDau",
  "key26": "36g4SuhmzcoyFhb3sRBK6yBG5YGKT4C5w3VvcEZXBULmKnokuxeip8yU3jFWMxNkAmiQ8J85gxm2vEjhxpyipyp7",
  "key27": "2dciAjUNu8L8MH4dD8i6eNcynZDEUXpXZs5NoBF2ph1JQ6pNsusx4RPiuECkCj2nzJbnEjBq5PAV2cxLWCGdvrec",
  "key28": "63tEGHecFEv3omLMdQGsgR256CCtVNxeu3rjsqoEd3V31GeRLwP7Cd4S77YGctZVZaud1GTXwuCET6p2nK8PFhUi",
  "key29": "19kcWCvyyy583cM9aDFeXme6HB3PzpZ62VrMvfXubhh7XCqULTETq4MirPPThv2g35robQGpD3UBrD4SxxPrPsK",
  "key30": "2GHyDDETp81JjDiJUi6YVHciE9x1RGnduQJpKGTERLRfgVBrNWyz8UCKCh2M2DnrC6HLyHBBnbKpdH9E6e5DRLV4",
  "key31": "4XnDA9LEZr3R4Vu86QHxUPbZC7mab8pA6uWzr9hB8TMxugbXEAS2NGUEHwfwhBndFceKREfevXiYAAfhRTxv3gLr",
  "key32": "GqGib9xw5Qwo7j3oi3cUnKkH2nfCd3P1gSpwr9Vffokz3U8kdndP2h8B4t6i8cdKSF3AwCyGf8Qy7JyCjaFtEgn",
  "key33": "2tAhWoktMbsUqPmASQjhLiSdX2yEvsnQzEbyewYvjX7nNxywfWQt1YnPJYsotFR7zrFZrVjCRhhFYi9TYc7PEhU5",
  "key34": "3FKcBU18ijKpGAQG5FAkyTogui6tD6GAGQud7tBG5ccuLS1XiUcu1QYDvyQiKXvYtVzkPeWJxkQtkWzuxwxDmVra",
  "key35": "3WaXQZzQyQPNrz5xY9eMigyRQfRymAUtzc1XMX7ch9ZgipY8L8Y3BE6q6CwAxiGjEq4nQzDbQmYfWqk4PShgAhnk",
  "key36": "35HDmDrfXPSvW82PiE7iXMBupfVr7KbqPzDiv2mDiqf3cRTYjhhe5yBtLrMbqFn7LQL4NvaznbrTDTsZTtwXcZim"
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
