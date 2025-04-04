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
    "3LyXv3ZGyemZ3P7kEankpomHXvUdXVqD8cPy4ZvcoHRvhKkuZkut3HSBziVrKGbtAd2xEa8KRQiYv44odXQP6oB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aStSiPPKooKjvV7m19BG7uyFJzGzCkynfDU7ss8tTtsa9LfSL6KXyU979KMNk21kaSGrtScRudiDf6u2FkgCroT",
  "key1": "594h6GV9L2mkfuN1zv7hUC9YjXPWSKvzcFTeN8To9riSAv44Hh12Zti3udidK2QEF81C95EzKQBUsWsmojC7ZBCp",
  "key2": "2rxjqeHcp89cVnExrpFCs9A5AuNvVSSbBTZZsTyW4dXFiSdySuVBXRDCgUAbmUSPrxyVNMU6bSHK79H95vaJ7xwH",
  "key3": "2UdQWWR9bEGXWw82mwPKjaWVRRL8ZRqF1gmqaq8t9X8eVTvSWMkHidJbpBrqwkDy36H4pBDpkEAzHhXnQtVyzeCu",
  "key4": "3KdZ2A9ba1MSEbMsSpHoKRFc8tx1Ju69FCJNFSj1DW9jaR5NHinZuKzPiCmqq7UBzrup8X2eL3c5hYMGUHp1Jfnv",
  "key5": "2GmLtpJ4fDM3Z4qvFdZBBheyd5zNUBpP1ppiee7szEe5Fz5L9fVo9RnxT4TkGhejWoa5m8pNuchUjhESP58iTkoB",
  "key6": "4xtc2LPBrEKAYDDUnZHQJcFkeqpneQ7B8Q8w7XGKStyBr89emoJSjrsXyeHaaYw3NgPbZaoPZN993DKCnr4cmqr6",
  "key7": "2wBfh9AWzbQTC7gkTDiFX5aj3QgNeytjZQWKbNaTtdT4J6T7xK7hAapo5qrZVd9z5EvXwNthZZG4ZKkCG7yX8sn2",
  "key8": "4pfih4LSk25JECTTFq7jUWcGkTKL9dwdG5W1jHXtXKoGvKApjwKjBYdzmCyMo9DfBNqFJBHZG79qYjdaWsSx7ZRd",
  "key9": "3D3syXyHzu7YkkK1xYMRKd8vsAaxGHGTsnEY82fbjtYEkBjfBGTUfJifXfmSYnhKLoTG7cVVy9RLyDJxYKCUKxxj",
  "key10": "3oZVykJna19us2G2WL8As8bURJkdzsXv9qGDjwY8xrQML37kTndMYbhKARMUJ2P18oEK9schhQQgBPoQUoLocjHd",
  "key11": "5nzZ4VcZXpUGCfX3kKs7wuXe7Y8pz6nVms2t5kvX5MqedE6qfKGQr3pD7wMTU1rAnavRjvo3BEFJmt6ELF7tZ98F",
  "key12": "3mkaoueWEockhKKk75dBB9yav3AhRnVuq4ba4UXpxj8Ljhk2bp1NGz1VSbx1pDN2f5KU4w3PVSe8n2VokR1kv3FJ",
  "key13": "5MuXrBj1Nd3EUETbYsgdAQaCy7G9E8SA3vSYrBmcPAnShWc8btTMFy2aqhbMZGSLvTL5nUH7puusgAgc6dx9zKs",
  "key14": "5wrh68BfphDQM8EJmnk7HxresNUdmB1WPbBBhCz2MnRYX6fAa5LcYt3AyXBQWxGCT4oDehwq6jLqs7ckETXEHkr2",
  "key15": "4WpUXyBQJaio2euV2FpWbYAdTcFyMyZe6EmMTXYGz1bNaDNtcBBbNNWBzGBXWoo3nRBjEEbBJt6F3FUeWNixHuit",
  "key16": "JWoirDRwBKum9WLNgjQXWSLd4KXupnPytaYkXgJDcTC2T7eXJvQeCQasxQT4uapQLMb1otUPNKJe7EQgFtBUSPL",
  "key17": "3SWqVVivkcfFcPNkEfmX1Nn2xkb5zMKeiFYmgEnRZZnYvcv8uCRyoCSiNefJKFmyZdq6GBPXa8aepDFSbEG8rzJ3",
  "key18": "4H7gaJuckSZQnDonD2xWFDGYtJ9r112VBF1vPmU6YngUv8A75x796a564Kgvu8CbyFrTrwUkEhEWNdXaNH418xfd",
  "key19": "62RNVQ9RTnUbAfW7MLDxA6VuSdRffQT56EhDZnjtJTRq1yaJdeWw7TWxVxXEXDBfNLXuHU8oVs4qhDx9Cjnb2JEh",
  "key20": "48Loqcg39yubH79jM7AAt5hjHQ5BZRHVdN6jKRdTXAXysc1nwddM6RogovqRtdsiW2zhTmpTMfRqsJfjzR3SYaoF",
  "key21": "3jtcrA9DRuknJKJU78JhPu6gvBe8oGciFGmUEFw8vgfSWnvzidX19LWBxS6YM4zHwJ61cBC3kfXpNPmNVtSQAv7o",
  "key22": "2Uqj5E4eAzbT9foggWdJJmMrUurGmv4ZYKXyJ7xWUvFMbLyPer8FQbxFY1xGdR17Z482z62XmKoKLbgxbCNy1hL1",
  "key23": "2fLy2ec9j2apkdowyi4vuc4S36owUgpbJ7DoTcgiVqBWMhCsi71usUMAV195f6WyhVvLm5gxQMMEYZ3952hzLub4",
  "key24": "3QErCjNx2AfFsjuk1PKHN6GbbzvsofW7hpxmWADA44gp6qmt3NLFK5fU8TEWTnXbisfgC4JKcVgoD9E3Jy24GHj4",
  "key25": "5eLy19YMRrFhTHHfiVST6e57NZPrMSFqqMzXPzfa6dvPysKBiVbYRmEHqgkw7PocDcHkz2ekGT5BpfUjNhMgP4Kr",
  "key26": "4iTTfcMcw17podiGoZj6CFiecCNwoSB7Mp96xsdVL1j7QWrCh6Dm2ghMkG2x9vTrpi3Htp3AGSnqbfrvw5skAshH",
  "key27": "1ogyJDBac2971cxWKq4imbgmHUmyq9DbvMTQceapZSUNq7SVxsxw5vQGVkU3FSo6W4uJiFBPJj9jNDcZWy6raJB",
  "key28": "2XMFKzaefD2Av7J7nuKypKPikfRtwxyDpv5BVGyfcNCdpp5yf5XSJaiLfNQSpAXAKT6KcBRKLBmW5vXnuKbCmxGi",
  "key29": "5mVWnDnn7KzLhaoJG89n7ehSi4YgNauibKTyD67cy3XrDADxKoCe47dZE7rRexkg3v6s5j8fsNyWmG6HSjDwGhpk"
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
