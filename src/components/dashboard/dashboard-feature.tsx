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
    "4xj8fLZ7fWVNiDNSQLLGdvgjHngD8RgMC4eAqf7ZwrNhgVZnXNZyThHjSLmXhVWHxitEX7zNQ3uUxbq9dA8Ub6yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NwK2QEUevbcuvNdSHURCtVnijzXAJvY9NBaUq2AqUJgeg3TENEhPz7n488e76TLks92j3jtYgLtHU1bLpLXcRJA",
  "key1": "3xsPXyX4aaHt5JowVx3H1aGBUfg1zwVfTLtuhKvChjhnCp7jmdqiU2STdSuZs2BqvDvn8kqiZKPZEzjSyxsWWEgG",
  "key2": "SLLGNZhAgYY54CZFngYX2P5CUTpEHyQF8xVqd4j2MCv6RC4iSim9d7NgSFDaHErg9gNAD3Uzp16h7PR1AMdSHdt",
  "key3": "5LSDRQ7udpkZFJ92n6rGcFhfm2mSKoPmG9ohLFkCvorcPkE6DAy7MaGSWwLXxQWb6q8xV3xEM7g4GByPmxMH222r",
  "key4": "3xHVPReX6updnXuxYBcSyUnaPivdHABV9zEsG7Kc7SQfEfg8Z6d7LoduMe2PsvGmudhLZoCEka8UERhDFBPBsQjg",
  "key5": "4Rj91qVA7DFV1moanRMuFYH27hu1mxzxynRqmMeBLEpGRYeyhwidjPticxXXpsQAsMqMoYU54ZJUhPyArCHkeWmR",
  "key6": "22F64yQeRdLKkgj47eqyu6TB9eTCmNQ8SSD3SHC2MDAxdEod31wYzSeQdZNoytc37C8TQ1Xo54XSa6SPsZ9v1iXz",
  "key7": "2JMMQgu5cyRS6RGxTvsPcCS42iiQf8eVVKgjgXswYnDaMF1yiMdVBhH3nLjDkAUHZforhrXv7W6w5yYFiXaf6oYZ",
  "key8": "58rLgundJBjvYS6VL27N4Dyzwn3XGxEvwm366AfC6vCUjC2zvJQcKPAQ3sYs1T4bjed7mPn6153sbgpxWDyZ6aqM",
  "key9": "RdEZ3oKoJuUgsdoaDqFKBJehNHCS9Rx5ZdcSqAwCMTSoTG18THAgFJHpk5Ck4UuSAAkJ146Z4Bu4bQoVxHjWvqL",
  "key10": "WWNKfPWXb6W3SKujZ1UXsmrWtpkVVZjuNen2DYJwxgVgaXph3tQmV4uYwRaDTNq25Sz9ecbwj7WSrEehnP2vJAc",
  "key11": "2MuCBWvvnuR5ZTNMMfXsjsmnQsRqTAWAnthfLopwA244W1ahG7i1FVV38ZN92LLniPuUcLpakDL1d8sqz7iv3Pom",
  "key12": "5SPXgLXAVZqvKZ6gXoLG1QZu3VRApGvMyAudyQUARqGtDtKpQuKUCSjCLPTmgxAJY4n5fh8emTYMNKbEifk1aDbz",
  "key13": "2kG75wMjvSzPFTwBycK7tGb8qg3onYBbQ6zv3uGYWxhpvBosKnWKcpNw5jLwcjEjvJ7LryB9GtYSgMoRbwyY85bs",
  "key14": "4XJT3FkpdZcBxMxkBcSbtvqbXSMwAzZ393mMwQqCyCjRr4L4YVXMx8cWoP33XEtDYJtDxkDCfVaHcXM4VhPm8Zge",
  "key15": "GtFPkamerWHJ2BAKYhCUBmsg2aeJ4zKJ953fMtiV8i7HEL2TmL5gBr78TFoCEe9gAXp217tS9m3yxKPfx1Mpd6T",
  "key16": "56qUxkqQDWSs6APCSVdQWdiw5sSFfDGmRGX3z52X3KLwibDAy18Yp1TbgQeFEQMTu2p4kS5ePR8rTShDLDQfjyod",
  "key17": "3nEpGEnRUhaEmCbhW1446VuaSiReSkKXsx9ETC2mvueuDkY2TnWg24AHxCXBSsVTJUo4GmPiLiXag6yVmhyKJRE3",
  "key18": "2dnPi3Ygc3pHQ8aLJjJsbsS3peXcejZXY6fsdijLqu5sNB4RH2tLUWPxrCJbRhatqPBtGqjVWnz8SDWsUTapvwFa",
  "key19": "5tfC1mptskGUb1WsKPR6xicGx8fTAXfCZUrGJE2J5Pivd4Vq5329t7T8knhf1cYbCEXLYQ8yoWCZKsxdkEyhMk51",
  "key20": "3ZG6me51YD3a1NZkJiyRt4Cp2zWMEtRSz1GWmuQY2wd4JV3Nz1ENu7QqfXECSbpyuKWq69rpfwkiPdNcHKmEzonL",
  "key21": "ZcGru58C4BkpjeazBEgV44YNEAyJwXGV33Sf2MVEGvMrKsPmov5PT8WsFp6Hzmk1RmDgp5tfXeMhJCt4AXtwgHv",
  "key22": "xr9o8NU5iCyAWK74e8XY3x8NBKV6rFxxYhqeixye8r5n96LLzyVECNV34pvwPuGELSkHqrD8hx7FTbTZaSLqq5B",
  "key23": "3DD2shP5p8DQNmiRHryvteHMV2Z4fnztVTPw6C6JsxMxntVSYTKDA6rQVHQL4JYEPo1GtEwSrsmokxLP7qX8vhRC",
  "key24": "4fM4amgos67uA9ZCcbNyHCRLsMxqXtcqoEH2xW9xcGJkDcTmk1aZh5ZU1V7nexdMzTUm7YG7ZLyJa6mb1RuQNJRm",
  "key25": "MjvX68c5kox1vWLejv7CsWbY5AGwrPZdumnc2zbqUUmVvBea1VVHuHwjYRW4UmGKjktboyn4pUtZbXeWVM7tXrL",
  "key26": "5LoaYwrK4GzsJ8c2oiLMMg99s7vcTMZMrQUxTcTiQUCQGd9ma6PsY6mJ27WY44d9nPnvhjKWfqhSN6TtBXANYEwY",
  "key27": "XCAgGffpLvxxeE3HUkTBiES6aAkXCtURx4aFx8JepvagPPUGMtWLBVvdode1UpAWhPTwUttcb4ZmRot8eZgQC6i",
  "key28": "4uvZzZXA2dnVyFMBK5a939s7JDeYVPoaepow9zqMBE379RDkGiV11eASFUupC28fNwKwGeaa1NwfvF7sVsXf9KHk",
  "key29": "5u39gnTSbexZp264Nn1RnTknnYg8pLQb2YoQQcokvGZmrSLrU5XrhpWB9AFntJ7A4auDwNXu6hWGqvn36V6K7Ei5",
  "key30": "5XyuYBfdnNxXBbNkcCGZEtp7AVRRQhBkX88dXmG3XkwHjcRHas6ua4DScxDBW464saQ7NZCWRBAvQjyaWJC52wzT",
  "key31": "4n2wbZmCwUDcufPtp5gpteqnh3iVD31cEGGxFk6GSwpJkX1msp1VCNWeb77GY9XJvspKtnvgGt2hZokmaFH4TiDu",
  "key32": "3bWLUL4nZEFiuLB8odwJBkC41ezqntVKdLwjzypSbEfZw3X16kt2WoQgE5pky7UtqtYVNVanVAYeVHViDNgydorD",
  "key33": "519Ha6pe4Z4YwwuiQAVWbqPxocNbYnDddd9u4m4xBipfH9SEs37Tpi6SpSJAwa5UjpNzoEnkZwoKZ6P1yUkBAZXY",
  "key34": "388wgiodyNK1Z4vdpRF6UMAtAspH3JbkPbsH3Gs65dwEVxH9rqQ7zctFbewRKUjkCwtcNFaKBpq1eVhKW7eXcZwe",
  "key35": "3i8nneUkxxBQ9ydRgxvxmeS3T6jsGu3N6YPuCmDVY2B6poGeesHQffLEyFZJ97i62Ux3p55FW7nusK71zpUedr36",
  "key36": "wU6xYdrWMaj2eA2a5w8S5PNDhmqWgef7N6mbgiaeB2BEjG3ZpZMN6xVV5JCYMmo4q8yocfDK179rMz5Day2R5Jz",
  "key37": "jtpK42oEgWaXE48NNEGhMDw2sFXAzEMiwSmA3q2m5JshznAmrVK3itssHX5YNSfkPrVtVWXCfKQywzQeuxkjYqD",
  "key38": "4yAEuFGspkEfevWPk9PwRpN3bwGbaQhUV9i7hSPhtcbnCmE3DSz3jzk4MY6Y83q7Mzxn4JmeZvaeJucBJgrf3BXR",
  "key39": "3kZZsNVAaBviP2rPaeQi7Fn6ZXoCufYZkffkSwGkT7xgiZGBFWdESmSSfAXnsEuQMry1gyR5ekopFC7RuX2KpYu5",
  "key40": "4iyzFfbkzw2MNL5ZnSKnECjZwAhu7Enf5G4awKkMLXdLdPmXby1vB8bTa5fCGy5R1Qrh7yfAdjyQ55DtiWzkJ74H",
  "key41": "3wjNRPzwLtvyg48W25Nnn3FTQrQxx4AA2aU2We9f9rGQztdWCsL8P9rm9kJQnj7j7h5R9o4piVUJaaY9k5ffHBgQ",
  "key42": "3A32HcdWEYHJ8S3V1VTK4QiRXevkNirJy9FrGfUHJWQrU5huJw4mxSF4ERfx9uZdSw4RZnSZ6xnVos7soSiFYYLy",
  "key43": "678ouEvbzKctvUhUq88AifitoW6ws3tHzULEyJHQgYjhSbF37oTA5AhvswTvz1HTstaJyzPMLYTmxLbTfZJBRo8s",
  "key44": "6Wm33JmsRBgQrNwTdPviHTx3gnHfDCBJmwRZ39dBwFzq1Zqa6KoZW36TkEwEtF7KQgJHTyHdLqcUpCyHVBKyqfY"
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
