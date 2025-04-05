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
    "pA3PR9AgmepXNFpVhBpS44AP83dowHzRcCkxjrUyp2sDZfBAYkrja326epubbw9yviHp91pTSSjmpCoGkuxUBWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRGSd73srQHwcZTgSPqdunAvbuF5KSEpuRn5EA73hk5XR3zPZCfB916Gw1qfLRdEtZFihEHvjwBHhhX1yhtYahk",
  "key1": "38YfTTvpNru67LmKugTPZkmsZoSXbzjLcniSskhVdyJJiu8xqLqAqTqe122WxphLXnW2MUxR3XugQ5Dz3V8TLBrB",
  "key2": "4kjS5EcfGiFGPRRCPsWPgJJtsrk5PTZa79t1yZMS7dDX9kAzCUAbtByWSdQXn4oXY2UTYNBFve1gWraAYFYB7FY8",
  "key3": "Kn4AkkVnMtc26C6a8NQMRYU6KhPHEraaUZD4yPYh24sdcGWwCqhuDGnHL49MpiVzzph1Dcj2CVEkDQ18jJW4KkJ",
  "key4": "6pEh4exJTfSJR1hFW6goLCqMQBc28QqD86tF1Hk4xXu7VKfg2gzruCepM5GZymPHtrAPbTMLFrTf4c5y8VhFCQ4",
  "key5": "25youGqKHrhxhcDkApdA4JpK62svGm3s1Q3XXiM9avTMvPJDPKGy4VoC3mjzV2U2GRk59dJYhhLcAPywC49wWfYp",
  "key6": "61JY77hd7hy535n2GXZe7iSxnwhCe145YuWeDCPv1Co9n8jjd1tLMvhemhH3UeVvzHXMBT4cGh84ojY5zLanmqgj",
  "key7": "4h3JbANsEqpyvJTpt6B4U1248Hf93ajEhE6fQhVqkgYr4WhuCSwZeL2cX4hhTt4htGo8Hu4KnJBByDu5V76fbX73",
  "key8": "2FVT6DWBseHZJWKLszktjQ1Eh6Qk6y9wbrThvnNBx1SP3xUutji68aBpFvShKWkidAN2CSUkid5cygLooZaep87m",
  "key9": "vgvcpseyFLhvNcqxcXrsxnbEjByVpcx1hKspVAQrqWHyria8fKHxxXT29Mg85EmNS4QynAPd9mgkUmcF7vAScvt",
  "key10": "45q9kD2HJPpx3BtQFLGKM4N2QjmvyoVGtTVutwnzmSQfqU5MUBXAqUsygKBGEu6LuCUfoFDNpzdJtxBcLe9U5qa2",
  "key11": "RShTLfa5qzFFUFnVotLnGkqWVYMnq8E7zpgzZqVS6ASwxPtdmSPmLXJtsGfEoa81b1Ff2Si9NeobYCmZQjXyQZx",
  "key12": "5mGYE2TjPTWjKjtCLrSCfRgS6UdUmaMnVAiJHRQVoZ2G9jhza9Prd5tTg98XgNuXk8jLS3tepP7Ay6XHb2A4viaW",
  "key13": "2U3wn6rJmxeaJQCEL6hBxRkgq55zq45QAXeM3SdES7TTiratgRJvFCkWTuEo3pvvCtQvfHYPpBAwvu9ru9dvhZgF",
  "key14": "4bxKFjk6VbE5gJF1DbitkYHoPs2sC1TebuwKgy425n73TuSiSnmDPE5dddqEGq7cfS3NazhRXNC2iRPF97FTsUTf",
  "key15": "3xsiTJAPNPiTCFyknYwACAnodhej54oRDHkTjuMRHPj4C4hCdwL77N5UnLT8uWDDrcN4cq9xsqbxZfLGUZLt6bWf",
  "key16": "rR2PyVXqg8jxzkpsQGJFoQ1h17fyS7dUtNQTUX9DFcWk7cwyeBHEB6QtVYRsbvmj3oCabmzXChPNKTXub1oKEXG",
  "key17": "2A4JUBtCfUxFVPWR4MpzVGK1JSTcFYYc5hB6nKqbVpbE2BKYcNDE7665B4C9PVXXTRoo3zhYrZe85JNR1ALNRvLy",
  "key18": "2PSZwwYhmT9HKMimThcLoKzLoe2RYpKCzHY6fBY3LC2FLU5fGfp4CQU4a2DoR5WxEkKog1qi5qQzaeTBewURqCGw",
  "key19": "2XVzLwMZVgNTFhQTsahEueBEGiMVnJ2tyMmBte98HJBf7UtmLWPmMkUPQgVwmcaHWVB6tjjSCNKGTW2Nqpnab3os",
  "key20": "545L2Pxa2Psi4W6L3F7WBsFVcibRkfVCJbUTQzysC1jYwpcknCVPi8FCNeShVmpGtmmQQD8yAtBenFjLQKSMuLxo",
  "key21": "4jEh3jD1Fomi4TxXxmMNa1pMSNMnQUm9DvG7xdVKqo5uqtPM3Ae9tm3gd2emwAFVNhy2vh6v9SFNgDSx9nATfoqN",
  "key22": "42zTnhL4SAmAcwVZmoW4s3HFQbexTkADpPA2Z6yEndN9cxYYxXJ2rJyEbmNLhGNiJPR1Jzmxk3oojcQT6HRadCrc",
  "key23": "4ozdJ5ASqyYdfanPTdqtH5phVeoVZjqDPNWzphb8VcoquVCoqqvBPHuQMXzdE1c4MiuDb7mY88YzKWWszkUX8D9o",
  "key24": "LrZ8us4V44PKfSkkjbBxcP3L1ygwK29Vm9dqkPpA4uX9nxi43GimVwKuGaouHnZ3EuP4DC897isX7fGo2CzP5ac",
  "key25": "3MY8UyJk4sBRkK3w67vBav4AfMau8Wdn4mtkfoqu5QHr3Pit89E81RNFkW5w8h76AzifnfTRZMT5uqB9XJPzc5Qz",
  "key26": "rWXoEWkDUZp9xpFTm5BQ4WV6dfvqhs3ikcFHfFUwQnjUvyR1r7WkQJhH8ApB25z7votDon8z9BKZYKomFM46NVR",
  "key27": "4dcMCQx8wvremuhecuY3t48SAWE8nKKGMwXD5KYgk4qPG9Wh1pdHnpDc3tsEY1y9vMWUcf8c4XUcX3cQ6L1hryaT",
  "key28": "5zGnNtyax1kFdHkLohP1jU2BCEUwaGPoGhE13BX5DQjwrZvR6ZSADuHG5fpoDbaCQkVxmERFMB1UQ7w5uwL5X9g5",
  "key29": "5PqsgUT2GgLEagVnop7nepCK8QwUm5uN9ekBQgQD4bDQHVMkHSBJ1d6FKtFTDXicsrNtQaHxbtjo5Ku2kpvqUPRH",
  "key30": "3XEpbxkjNM4FgRx7RAHKYGhUZntLyspD87rooujaFUCaDsBvCjhrgE6yEZW5rkJN1QwUbYeC4BQvenKbJiZw79WV",
  "key31": "5H43B35GhsaVk9JTFCb476E13x6pGGhx4d83w9TiUnR3SrWwi3ihzyzHsXwWXzPQ21cfYjC1j8r1roEJaAATtwis",
  "key32": "zLiFq52PzBHT4f2d2PNXkBYkwMrEUuj3hpxPCg1PvBd5w1RYnrYLkKvPAroYPMLRrusbQWZxvGrKqtg8RP7Y5hK",
  "key33": "3d1bE3PqEpwGopJw1uSfUw9dZBzFe97pQbVUrPkMkrMxDMVZxBG4rgYgWKPvPF319S9sdsAAxGoUWeQzEemucrUJ",
  "key34": "B43gmWtCLXiQHz83JNCgk5WpLi8LjqN4ZUGzwFCspki7WPft7eQ2NafCbBDgYPnnSPV6czK3MagS94YzYvXdvuz",
  "key35": "5CjusYZeMcTBX3TaK58LdYxkgR5Dv6D4frfhA6W8peuBTTfAKsEJA4iot5L2imHbP7TxKJ9uidDm2UDTN4Acoa5B",
  "key36": "2Zy4Z8gQSy12qLPZMNX3aen2JowU8Rsdv47wgja5awr2ruKK2c5BwZPe4BYv72bYkDoPkvRSqQTL735fEgjEhE4F",
  "key37": "wF8JCGJjEZ57HQ7mmrBKd7CKmeuc1ZdRZWheQncpjtmhWfjc8QRwtyyPFDMYXKd1AdFssrbPm5HNt6tvtQk7QmF",
  "key38": "529iMySfLP3pzFJdnYrNofE8aajDGc6BZ9Zmr7WryNgbCQULMmnDk46NU9vJkebqmyQXWiSC4cpCvRtDzKy4mtxL",
  "key39": "35f6rmbL8n2xrYSAYVad4p3HgPsHLqhzJZiyfGXMRHcRFxF2mHz11ip2YstCgtuuebYPZjfxeHSja2TjBCQfsCRg",
  "key40": "3ueNWJb5iqnnmQLjWWAKbw89AWZFciGvTLDYXCdtQ9qdZ2YGjN5raTKnD5YPjzER2TkEaPFXEWBQtwVxedj43zQJ",
  "key41": "r4nJmgMVmbAwcG2d6PynL9yFNt7CgEGj5Vq97hyXcfP8NkAX7jiofntd7ftJvzvigZEaHtHMMp5aT288LrGZxr1",
  "key42": "5TpeZQPns89j8Xbgf2jke1dDRLvFU8XX2fk6wGqdC95w4Uyzp2w6xVvexALqde9gmSwgBe45oHhYRx7kAmotUDZL",
  "key43": "trNJCteQy4mXpsvTaP41X7pbYyU47U4BsV93i3iHScCeXz8CEt6Eo3JPBChUNXPbzUvxsMP37iPz91s41a2zHxi",
  "key44": "2cNf5MUppJu3wY4UU2wg9MZewsibuMkE3YgjrPEYZB29k9Z1D6Ap2Et39n62P1qmLo1AhbHMMhNY9M3jKz7TWZHe",
  "key45": "3Pko75La5mwBGZ4A9YnQvCxf9vRrpwmiFJE6UP3RWeEQckW76UQoJfmADBbHWPpvv8RWujZRuPB8qpmVqZPGdE1u",
  "key46": "9N8db99PEsUns11Zcq3vqBSsywYnf5wufEmLkDYeo2yUZYdW7zLCjTZ12Ym4JtY2v5mYPWykuQn3mQjeCb14Wdc",
  "key47": "3NMcT4g5ceLG7ZY7y2sijpThJ4ugXRs7u276DerUhTabECo32dfjuTQjsJ7iV6bkiTvuSiZMW4DFa2YuRUjHBxGA"
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
