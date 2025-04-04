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
    "2jUpV45XXz8ECMqskEtEvnavEASspJSDJ1m6pKYrjKrCz551xs4yiHt3zAumbxYnyxEmBuxvRfFUFN5LyhexCUyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "621A36u7KHHn98p2ZzCTwFUWfQTrvJFHnZVJ4F51x2X1iyYyqe39v7HGbEAHZXWgEUu8xiVxSC1aDU7QM7U2LQ7",
  "key1": "3ckfkACy4A8Wbfa2PmtvibSqKfL2eFb6yxnSMPZmNusXNNN6HH6iveYvJSbC5b9gAgXPkureitYL3kxVTiQRJPYW",
  "key2": "53syy2xQXmpXZUCLGvmHJinrzXj5iyKbBysKbirSmit93NYqP1N73TtKoieLe2MJfFJVLApStkkHQ4PqeQEvrar2",
  "key3": "3BDyshCb9wY2gam7MQQ4ZDscoUt8eSFt1CTzN3R9HjHYiGyCpdGnQ9WwzYem8hWgt9vJnD784Q5127TcndrkNYSg",
  "key4": "39G2YW7rQcSjyqLM8RwRzH9Ji7AqGEVD35r7kahegwNdKNTbDEikJT9J3guwXzBXw63iVFHrZ5hPhj2tnMzHgH6Y",
  "key5": "3x8HUugQd8gdKQrQaWUB9xuf6rQdJFRvTzFX5bBG3NCSe33Pa1A5XuVQFPbULrq4sHpZDc9D4EeUuZSqVhJDYVpG",
  "key6": "ee6gLxWnTvENnv9V8sVrnxc95ci7xW88EDg9fK8KedgKPAFXPiD6xKKa3XTJAuapkM2V5dvaMXMXFGNWNaDL2qE",
  "key7": "5Ai7SC1YJuMX3N73KL6Hxe3iv8fM8SGi17zDkTewny32Q4DMGn2kBbSzMaHbFcGBhG6Rorm4bcVsVvtE3tjDycgp",
  "key8": "2nRiNK1jMu9TCc4V1CZchP4yFYYqPEWxNfdDuf38M25Li8uMkPzygFRcpc2EKqTQvu6X1xhxH6nDEdWZJmCgrEyc",
  "key9": "4fECs6pcA81neHXYjkpUSePznY9dMZb52kQ3BMkkR87pRu1Vwz6NkoxKJkttLg5ecu88YCnGB7K14PTZB9z42AwM",
  "key10": "2VZFMtexycapJzk6jrk8pyq18QvNj9uWnCbSgxkWAzdCDNuGjaGBKKeBH7WwRnULNxUoaDzXYr1KdzG1S9rVswuM",
  "key11": "5cN3dVBiWNYmYdjAXj7iBqh5m6zg2JeWcjjNTW996EVF6kjmajyh6HRA6wACHBimrUHHi4jJVHrvxMeiuFFWN56F",
  "key12": "63pxMqY6sJXCmgiUsf1F2tvotbY7oNbjJUC4oQyK3QoKaCMEqTovLcJvXrMfCFTwbHDvLbKuRqgk3AdW7hyuZK1L",
  "key13": "3zSDLZ4B7vAZeD5kpxziZdnSChs4Xst2oXUQfnUCz4vQxz7isqJdTqgd56y37bwdQpYfYP7jU75QzzwFzLJVZ96i",
  "key14": "fXyWLcwbwzAJfH68BbGihpuVKcpc3h3q3NQPa7KZZ5FFnTzHspo41LxRiN5RXjuzVg6C7hetPGwxYmcfBxLQ7Jq",
  "key15": "5SNUdVw9Mx5XxcXBxgCcAgWmqW3rso6QZZDNRkqWuUzDKu8d9jgG7huf2HU6Nu5ujfB9HBJy5HZSZ7B6XBBFRhMu",
  "key16": "3nTpwRYTHhhXUxkjUBUWqmm1qfXXGRMnWfgkX9AnBJjpkBq96H4Ajn51RZ3rgs2PGKace2tsd2fugtrC59LWg9AK",
  "key17": "4PaozfjeScz5AvXSyB3PLB2UD7hFUr3itLyYqkxXqE3m9eUDxpA5EJqMPyAxymnmmghwooD4njYWhEmXtAQhTS9c",
  "key18": "KemqFHBFjNKtebwmNnRheXZayqgKKFXRmtVM2StkcZ2VhEk1tj7p8dnkDjWXqRwxWge3JqQwtLDwXViTPPXFAXr",
  "key19": "4BWqxeq3LnbRwodjgi6yztoDVEZNzjaRg59VYBrmzvFoLkU6d2zT7vAKVoZDwmvTrXvcJHi3zt6MB29kTJTfdD48",
  "key20": "4wwmDMAUExwdb6iVyddh1v6vwkccXerPRpBrRvmntLeFrWf5N5KeLxLQzDuQ9QPv3FVKHnnHKLduVgdvvRNKxG7N",
  "key21": "23V7tgT1PPSqAmCfhYkVMWMfnBiyVrRNUmenkBt6V8AtVA9r2JqtgfN2DkdXbBUSqM4y5kn5HwvGh5rkoF55Xad4",
  "key22": "3A5RTS6aeM1ftDyxzwURxz6Fm83hWZaG2RwjMQfcd75iZJRF4emP4WBifhKiyAB9fYCGLBTjc5kaW9RmSbvhZr8v",
  "key23": "5V2c9L1wR74RfxrfNC9zQZ5NAPg8jc7jDecJMU7k4tBDy8ft4knva6XTSw8LgeMUYd3pNtCVzynDNUhYynq4astg",
  "key24": "3cAyPiRrX8WaJbqQnVELPzEUepLKoZTQCRq6kg3m91ye31yzjFm7Vpu359o4DGfbQvcFqHXH35pUQiWkqgL8JRJo",
  "key25": "2ZNx7PibxuoBgNBZ3zuuZNsEryftzKG6NDtzSGMg6bHK1NXLkXfKrGN5tPR4g2CNy6DamM9ZCehLeKh5ojjk68fW",
  "key26": "5vp8qjiFZinNZX3jxefLwM46r552eyoJvf2q6oAgeY2Y9w679oxGNdBPV4M5E37Xbn86fZ8oNVfirjDdUBLyPvsQ",
  "key27": "KwtibCAs9ZyZ4RYwbbcHYaaeHLV2D4YWXCxfEoHM7d5QNVVVtPJqVPBV7iejhQ1dFiuhfxeUKYdnyqxnucUXwva",
  "key28": "XUzkbz6i72Uy3xXhiC7coYFy1988akTj2efY8xghMQeh2AQuiG1RxwrvbzQmk4NoANeDdPRdBt4ai4nUuyq4TU5",
  "key29": "4aDxxvBEwBxKLdw1tH4KZ6DQW51xZcz3qBL4BMcfGdNqEghSZmzasPFbyqxj7DrJuefNXZo9RjZY11c36CPdb9sm",
  "key30": "3uSDg4m6kanpPCTa135EEBrNeqFcpaB9vHhjCvgb9Hu43hScmfZqkBUZad4QWJR1UsEMxgvzts9L9uLJxQwB1c77",
  "key31": "3XcU6dqxe58WLihHD3SxPfP3BckDpp7nQQntnGg5dymseeYthbpBSMs9LAUFAhkokUVyecL8PadJebK47kFn44qF",
  "key32": "3pvkU1N8BuyDpA5Nk8DNFXnoRMsaFNLNcQYUbGPkKnutUi5R6THX8RnzmQbxQxFBSFQMvR5zNjXjtZUat3v8AaCV",
  "key33": "BEe8ooB25TJ7Y6GH8REUP6eptNdc4TG2NrQ1oQxdhcY5pHWPNWicXn6SgHMo5P3ed9ZdWhKToFG2aHovobAhqNY",
  "key34": "3PUNgjGUT2dyyXsofJkJEJN9rMGwK5SVkFVNmFLH6c1jDydRnWpCTSniSm9GZPaFmqUVXBUUNjPPtBEnp89BMM5y",
  "key35": "3xUzWr9XuWa4gb6GXyGo7r1RtW1kDuB31J9S5Crvx26Lh6TuHNYEjt1xD1fDAYpLgZYCG1J9ucNzdD321WEBovbh",
  "key36": "31rpsdP2DpQyMwWgiQf6fUiz32qXG8Zcvm69iZuHFDeeT536VahbqHm2rzyWMFVx3aLSxoV1Kv4cHuZbx36EZfhc",
  "key37": "5WwvnaD7N1YYp1dWn8RYx1f3aTGMJEcsq7rdmDQ92rhAH3ZY5Rd2hkPuqvBPqTRAfwxFhedyASDyae2UVGeRNSK7",
  "key38": "65WCASTVwyZZhK1ZEDVSkk4592X1G2RsNXe32YnNgCR6HS1TiNbY5bG53tWkhUaSbQ98YvYxq2FGqczzpEGd7UBD",
  "key39": "4PGwxfnTiBPWDeX355bbXy2v2GxYfgHdZ3qr517YjLLqYRp8dNyNU516vzbJZmazPxd1r1NJTmMfPc2CD287fH59",
  "key40": "53GnDdNDH5b9USKRT3SWGDEsQWqr4qE9ny38yvwjXdTva4bLkeCqccqe8itKWdabT7kSUSqBRyBGckPLWzXTUnqf",
  "key41": "pyKCZykPFpRQCup8WYstU4y4njzt58fJkxkkDs9ZBKSzHAJ1pgo3Q6JNeCwWU49RHpAdjs1wuGnP4i74VokUwhB"
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
