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
    "3EUrQu7ywoYa5CNqv1jzJ28LCPkNCB11CrLfTyBc31Asjnq5baSw494CyCqkBaSBAM7iTpSEwyxL5can861kRxuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwHaNmnKC2PH75doKotc8yR1nJwF7enLEcziiN8Hf3Jx9WbEKVZS36NqhMFtL1pVCd84ofJ2XgkX2HFCjaoF1CG",
  "key1": "2TRDdcXzaF6prSey3hjKNo8htuXNfKza9sdKPA2eL72sRs1LcGZBQo7uXhfEXRQ56rM62MKBHn7X8PsWFvzGtuXL",
  "key2": "3QW5yAGQ9HTvgydYWUeo8rHVPQNnbS5k1J3vNMPUeXuTbUYbh3Ez5uBnKCpqg9Uksegcuv32FgVemm6PFfAEAfxP",
  "key3": "2mxr79UatkNjPSn6ZM25aXY9UgK7tp1dy2KmsNqGApKfjhEf31P36v21nn9Rm8pe5rXS2tng6JsXrasjtSL7vhCi",
  "key4": "3DtgtDJiCpoGpntMy8JLGpwkkz1feDyE5s9RUaX1L2E8HT4MEKgLck3Md9CLsicpTUHn3hXXnie9ETiBjJeLzyZ8",
  "key5": "5qtrPFFLkaSXy7BpeSFyU8oFsfTuF9uydpwRi6x8KHWhF5qJPGh1KwNx7YpdQypnMiMuADxbCwrfXLEKfqi1MVQm",
  "key6": "35m9fkeEBuZkUNaujRwyZvASL6HGf16bMEVer2qHfCT9CJttQrJFKuy3MgU6iMsL6FHLMmEx9mKXswh5D2jAU2TN",
  "key7": "5niUnRq5qpxwty26YTb7TSPZgZGHxpGLCn6fuMy61B94etuGM8Eg7aDs7WsD7k1ufN257Y4eKY1fCD75hoxmbE3d",
  "key8": "2UkvxciqoKqWSdUZ1Qg3dvmNSLyy2GqF4K8YrXMfpH43iNYKy3iXio4SoZ7yVwCNMzEnYTVediNEb7vqPDPAvP1Q",
  "key9": "5zRtwiRtAZdLWewhwWbpSj9dAnmgRWgayTQFjVFxtW7ZEVjzbixsugs2QvAXewBQZomAf98EUcmmFjLBMbA21qnD",
  "key10": "47a2FeR8FdqThNEHSuNjCax3GyZn1HcWN2hJiJaS4VCXwLw8VXRmDTz1ZP1zhZPwKVsxi78VZgpwhK7LRqyR9GQK",
  "key11": "2zgxHmTVmkhtdA7tGx3LoJfBURKShY6mUzhp6Y8DKzJwELBNP7Kz1ZFd2EHyQT5PzGYzLKDp8h6Fx4v3D5u6uhY1",
  "key12": "9kydXA25ofqEyNBANhNkHswRmoRyCkR4UxoQ6Q5Adt2PVVe1bxq3vLApoaqpQfdv6HNsqbiegy6CDp4Kpg4C88a",
  "key13": "uu93G9nJTHXvWH2Kkcd7u4kuL8RX47uX85aL45LVMvKwgYR95s6vFDAYPC98CTr7aydEC58PhyeYPVzyVo6wsrp",
  "key14": "65AxwrLdhh5KoGPd8WTq1pxy8QknMCQ66qakegYDEDMtVDRsauQRhwF4DK3PjDAbv8vbbDWyXwkSGE4NrfWMamVk",
  "key15": "4N1gAz4FbMCapDzAXAURVGBvoNUEnPEPcY3h7cMhYwX7c1qfUC5QhGowaY3wTWFbcQ3XRbWLcvJVNkPm9aVyQc2w",
  "key16": "3vvsLouwuoAPxLQDazz6sMGQy4ehdUhfJMMrDdimDXi4AXRp1eS2swRxGLvidSa796NtjvqzQei1WffajBixTek4",
  "key17": "2Rrm2V8Vr8XqV8AyyJxCbQ1DU2RMwvTzJoAyqANT2xmjhq5GVTP34SJoYHT9bvkWPq4iaepzjWJAnuToqVa7LQXp",
  "key18": "22FwVJtUYzJ8c7ueZpwuYZTcnMfYeMGJC9WyGvUhULX76vDYJMiwUo8X4kJHXaaUDNVyqmeeLa1j7sDxaqCttFhH",
  "key19": "2bfMGD98jYvgvVS7HRUjsFgTeQej8Uw3gZPgXp7SkXNhYxCmxjUp2MsaqWDqUnU7DYDX18fvQvfPCudg4M7rCX9v",
  "key20": "bJBHsmuXYXo6VsVssrRyAxZZESJCeMY1oWXzYQXVFT4sUAVfRPX2LNSn6ZwKTCw6Erm2AGzTD3SFxZqWu6c41Di",
  "key21": "5Qfik4GYS9Rmva45S1g5yCDHwp5S8mL9XkW6v94qipGX9UM6DJnbALewEbTj3kJsLawNBb2ororYSkKi2GBWTb6P",
  "key22": "29tr9TgKfWPFfcZEitMVfmUx3UTirLrk7SRYd4eys25biiR75D5VNL1oEAMupR9ZH8zgYURkbSTcJEn8FvTJzDDY",
  "key23": "3zjaXFtZnsr283QFhCnj7QQyKSPoyjGrLULQy1zpet9wURJUaXLCSkgpUgfCqhbGm1hbUmBnAN9Zadx3mJbX3SWe",
  "key24": "47XwFZW2GmRpWZJ8QkVbfRCE1jr3EF3gLwKCdBFXiXkDoNZfxovBQbm85miaFhgHxtXeMEvKg7mswLZTKL85daVb",
  "key25": "2EaVpV6eigU88Gas7DNgTK7XG5UStTaTYXbRfdRJEk4oq1knRtB5Eonu2YFeJyr4SztrNoFtXwTvexHm3Ewiabo3",
  "key26": "2xMd33mUiiF7h9KrX5XfUoVEPtDF5Wq2JMD7wUCVwovf3CtjWUgqt83JSxjMDs7kuoeDsDrvFbsuZNiWyogXVNci",
  "key27": "4hbYnbDWzjL54riA7zBqXRSF7uFAVBZrwckNho3XbL5iEtSMNagq8Wm6tc6GKKiZgpH4ELET63VEH3XyE2dWcn3Z",
  "key28": "3NsfSxqKS9AqFz5tbmUZnbDywvJbMfWPPPzyaJUV2u8isB3fthQABnf7nFTexkJSUy29HRqYrgLxn3yJW2NWhAzs",
  "key29": "xuCZUgYcn5KZJizgzHSCRkY7vWWGE8P3bmRcp9TPemkpYRnn3gqJLRPomJWgQRCSNY8LxWuLbjQdrNsihsqh36F",
  "key30": "3WKMHvjMUopJdiHJUJT5VJ6ZWyMdTJLsVFTCTSq3AEAyNfETDW74tymqvuGrAd8bjHfPb5WVynGyzwWW53Nasy7k",
  "key31": "3sZhroYGK1p1r49RHGY1bDMUWbnF7R77RRkbW5fuAuQPmZdS4HdVPx7t81MYuwYmpPcaA8AtgDPxGi48HYWWxXD8",
  "key32": "4wSZ3PcCGrUmXWWuYMApnQEXJvbrB47fVfWdBKBKw3BPPs4jRymqq88iHBKDbb4PuGay5ofyLNv5Dc1vUXfhcX3F",
  "key33": "4dMb7wvGifXqoixoJ857wQ88mrhoAiA4DZJ2MAkemTR1FLsaN6Qxd5xZRiUx2jpCYLoU2n2t23CZHy2cCXYPBsBc",
  "key34": "oVeMEoVpV7rAMtzJFNqRV7jKADStBSG3uEnHGcYDMt9ua3qNYBuscdyBasF3AGartaNAqQqXkHXLjFWkvEDRv1T",
  "key35": "3jB45WVZoNrP2QrazFFKbQg7kVbf83qb5ZQoysPL9e1cxLrpJBV36tot3w4B1HFe7PFZpRrJ7gPQHN5bYYs9Wtf5",
  "key36": "41DcNYq22qBjvLiZT9aRpKzwqRpunZ4kJZdHcn1TnrYmWx3GUSAUKxkWQa8W5MCAF89RaVJ6HZEkxd1qoQBLaqmo",
  "key37": "3ejomQPz1yskSuF9Hpe2wpLR5Kt6te5CetNrQfUkuWpH9GKqH75NXTVVeLiaMp9NSfa5yZKawVYjE1YbU9fhxUXb",
  "key38": "2ot8DpbcSTGVYy6tBBKppyfVWivz75QD8HmWfgFQZkFKdpoXiRgtNM5ivz95MGnW9YTJQ9KDLEk37yStUecvF1XB",
  "key39": "2W7FVxczT7XyxyibmrNQyaAJEKmd4oaeN38yLqz26i2sQhixfWjc1zpcDsvzJPusa2FX43epq1cUQG1DXJCCjNt5",
  "key40": "5WjGS2xfVXyhKiPwPf3sioBjGxDPsij6kfRM5aqVgAsCcisK4gZSjaXBPzCcDzafWVitdzzr7HAvgCWp21WGkg61",
  "key41": "5L8q7Tta1DpcG8GKuTQ7budUQZyVP4gQr68DwPX3gBaQ7NNLdQCrMVYtHLhEth13VVHubfLCAvvW3nBxoGXmjT7u",
  "key42": "Zik8HrtDCpxaTCL6webwd793WdsBVrGBZzjZ27mYzdPNTFqkdxySuLkBF4w6GFuCv9Hn6sTm4EG11YyZN4Ptuwa",
  "key43": "oezj8vLvx96GMZUJqQneuf8ro937jD7zxQ8hdyPwsz5HzvbuGvk7qBpXWtTB4hokRipahYu9GZqtAawgSa57Tg9",
  "key44": "529Wdn9h7WKxruoM3hEmaXMuruGZN95Pt8PrNxZ4yLtzHPNfAYZMq4QgHsBBimfdytyneBXuYnTGRQPgwUofwvKN",
  "key45": "2Jndo8FdPwoPvwndW8yk5pDJgT71NtaZ6H7UEa4V7nnS5V2c9EFHCg6fZyY1UUiVUn2cSJeksJKWAQhTFwMQzPYA",
  "key46": "2XTS7BqwoKqrskoZySy4frJ4ZJSajJHD5xVbBP9MdVjq7jodyDuxx1evjZsEFXL8u3HUx5MmK8pnpTMaJJ6ziPmC"
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
