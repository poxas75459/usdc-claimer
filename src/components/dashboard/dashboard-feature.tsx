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
    "2z84nMF3AN2WBHGP8cgAC3LEBS6vQYeKQAXjmgnGPsZE8ERNgpPVQZY5wL67ZPac9M62qgMVR5DqJk8eUydyEk9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhoHtUdJR9vEACgfozq59MYtwPniJEpsSUZdJc2Fvt1eHzA94FPgC85U8ZhQ7PW6Gv1RR1L8swBzUE4QJCPkNJY",
  "key1": "4TfxDb9Wykzkdsbz753wumD3qui9FRP1QBh5sF6d36ZZhvyDC3yaB5GHMkFM96yCpDutACV1UKi8cTG1QX8zrPNm",
  "key2": "NPJQfyZ5hWyv5hVvDBNgtztioAayp9jGoCMs7hyHDeQRzw2bC6wfZKR4Cpv2AjiiLBDtfQAU1pcTzc7fNQJJwE6",
  "key3": "3ZYoBXnK6HPhhZ6zmE8QWmG4pMxqKrgfTwWRrEsmCpu8nm2j2FHuuDHXXvPUSPy6Wx497j3vzP3MzbYjrpn1i7sn",
  "key4": "4iWPand5QbvmTtoHydf8AD21MXyh8VzdaX1zUUdGnHzP7CCyaMTeKHZwrgpvNwzktbYWn1AoS7tNo1nJbSd6v9fb",
  "key5": "4eygUQS41bYSH6jBkoep6s7VunfwekBqAzJLtCC2ocdmidfJa2C3BCRdozD9dabgeYX2o4dfrk8bQ59GFLoYPDPF",
  "key6": "3fZgxzATBkCG6KFSaQoAoqu7gEE12vzSWg8mxtXuuLnFTQ1u1aorMWcGWXMHU9Dbxy3dKRBvL9GsTpzaMCaMgq6r",
  "key7": "4ywU8joLpi6HwniGPqBJPTZjy5gfyxyLihicjVZMrHy1Vij9TM8iRQTZ57kBcSo1z83TRG4px7c2oQFdYtzGS5EM",
  "key8": "2pcRU5UGnvyn5BBPPKcLwTX6dfiE5vM76ozP4vsQ6KrozoSuiLBduK2K8TJq9Ess3v5GvwDtqsXQV1zWNxhgJNnz",
  "key9": "gQPRzAr11gwobcKz554fpGi6cfgB5M3wQRaFbT2zqGKfnEujJHpTkEH1YcRt23GQ1UncANy9L3pub7XYTkNFAKo",
  "key10": "2DwgtfSyEXoaVcLodgdBucNd73FsKxUAbC5WorGDdXoeEDgzM2PQALLCntjyTjp5s2QbGGGQzjyNydtVagn9Wh4D",
  "key11": "2Wrtikuw6QME2moQBe5uNQEYnvHezrSGR3rkYrTMvp2irCNecvjykmTA6pqQdeoWnXjCzUGU2PXUE5pZRnazfn6J",
  "key12": "5fTHaEbTYEFYNnf1jWnLBjLwgBHqcAdgt8k68cwHzc4kALoiVLyZTqPWRT4XDePWTt3spZuPBDg2zKbF4QuccKnf",
  "key13": "5jupU1DMF5x66F8HMPuEcppqWwwwA93EiqCF7jm8rXpG7PhKaV8akLsaJaXX3HVeddpAfzMpmxiP6FWibiJBqyh6",
  "key14": "4eyMrUPJtW83UCKsYWeExNF3k5XcftqEhxHwN1avhfYUaGe6cafdAfkYuzHM8vKsgY8kDfx1uHdDqhb4217L6p9S",
  "key15": "2D2vJVPyp3yAKJPt99Gx9SpSeB1g9UT5yfpa7dGBA68yTz3QuSzpnhpf1wXR5kbdzgapwjcN81vRk7Vsubr2uuQ7",
  "key16": "5SN6v8tkyABEk3sHJEzcoB8yMN9EG3SxLRQrhttsKGarFjtbXXAnsmFMqxi5nobVxBbJzZ2ZTNVxCnonDmGnLLiP",
  "key17": "gesVTCC12djeZQxmrPoTjFwvnN8QXCtEMZEHMzNkeaptxvoiMder9ypxheuYUeUt9bre2APvFLFrdsXMNBrhnUA",
  "key18": "SUSbbLr99C87gnjYMpUAJT87Lg3Yf8zb7c88s4XPYjQyPNErzSVW8uDdC2gf2MQ2McA75iyS59DoUfX4Xu3RfFb",
  "key19": "56zuua4mXjHBzEmWHKWEQRVXREic6iUJaH381DUoJ247YfhGZsXc7VkwJgAcpDfPmqhHrH1uVEJn2km2nQi1ynxP",
  "key20": "5ezHFp7VEF7pTwuqM6zjmGYjc4NRmk4S2biW5YH6LQkWuTnRZgdJSVpQyAq6R4VYzTNJvPFrjEQQqLnpnXemFQZF",
  "key21": "gvJwPiM2kimoF9Y4Xhf7y7899DD2ysij2LGCTB5DZ58aGYAGMg1pp8cRgKh1E1QfsjcLMtMeNT7ndnyCNSBCEgV",
  "key22": "5ZqPackEBP5u1DeQw4R7ZfWoi96fSAbbPaRWPsQSa9Y62uuNxAeZx82dGCnLLQsfm1uLeRtqbjURz5MCXW15pGPL",
  "key23": "2uwYp4A3QKnDPxF8Hm6hAShkNZVX3dQYYDZYhCUyb5ny1aDMpHCQ7hDVWq9uVHrJCnZwjdpaD3SgJVppoermuFzN",
  "key24": "3aPxpPfqGCwzUNvfq8zNJnQjNP6HehFtbxhFniYT6QfKTxvsi8YAVJuVoypSRymEyWa7eGavJvVKLs1EetuBC5jL",
  "key25": "4Xd6UdJEu6oByWPqvFpiqVomtsCz15bJVzrRjdhj2jvuBdgcV738h4zb4xE2pWFtj5t6qoYHLXTfwaDpLcHKHwWm",
  "key26": "1FSZqbPq2VcEqa7yjE2P5GfazrorZCovEjNfGECyvCeSwPTsm6zscCyWmJgB8aqepPztJ29SmoTf6DJggQktqvo",
  "key27": "5y8mZND3diG624Xq3e2NnsdsAom2XiNCaWUvN4BeQ5SmdeAeKeRvwbdV6RT4Cz56rJFdCwog4TFR97EWoNyrwGZm",
  "key28": "2ojCh8mzzSSnHrEDTtPu2fuuJuN8Hbo8tP81tqTBZ3hGaZRPmYvgX3LCki8nfVQKPnfc24HPKt8wPMfkTgDWbPZ8",
  "key29": "59YTzPr7MRpkagC1s6WBCdk6h3KVgybgDX4zQPLYHohwwdkvutAhJKzudexSNVwHjznxJBnYWgKL3BqLsVqoihHX"
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
