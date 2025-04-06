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
    "2j4Frhm2F1H7py4jrUD7nKPjMecmBHjEYXvMnU9jw8KKWmHficQZ5KF1juuYc47NunKgBDP5T1zo5WVC2FbCYe5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUTDs7Zaeywr7cWHmbcoCPX4dUowJaU8EdmqDyXgzbAa1D2NyZGQPQz7FuLoK6KskFpQCa8pHtbdKfFcqQxQzBD",
  "key1": "4dA52ioUwLGzAMogrsXVsvjn96MuJuyiHp7Fr9PyNRrj7uxznSBNmGSrDGHCQDaGvMZbJuULo5ytf5YkN94xNGwt",
  "key2": "4WyrjrsADRJ7k7NTD9rw4nz7cJShnMnqiHTd4xdYC1LV2ibh1p1YJK7BDGa5ZmunhtcFkB6KJQzDGjddB1gNx5V4",
  "key3": "Fq6fie5P873sSrL1rKaKLAPZ4eUQGLEoKvbJSayHeESjcqqZBJWM3UNJ87TsPEZJSKMX1WuZZkLfrcd29Y7i8Q6",
  "key4": "EzdmojXYcSbWrCQzMmnkz7VfsnYficasZ1WcFZBSwCNrCCGG5aaP4QkJYgg1y5BWovS8dHnscn9VZoQzHLgXwWH",
  "key5": "4XG14MSh9dbrkoMPxCmkbeuUFN6gttaKHLxzFAHp8zKDgoSFeLJFi5sG6ZKNi9UXVgsKa19qWYM4L5aE5oFXQyhf",
  "key6": "3m98nocDoZGdTDpjfbis9UMKckvxBMXotkJjUfKqd1jozeZ5jvkSMqPzkbbthSqdM1wdCFrZNoh62VNV6SfPcPjv",
  "key7": "5npfg1YoVmgd2SeuiS4E9TH8oRhZRuUE1g5kBN5AW2bdy1QtZ1btAPpkBKQaEECbuiZfGZEzwB9bVKXRwjDrvqrp",
  "key8": "61zu8yLxhDsU7ryJUdMKB3aEfKfezD7SCbz6A8L3JrNcSXgiEmcQwGYWCte2KkTuugVUAVSco29Fwr6sfAW2pY34",
  "key9": "2dTRPyQtrikvN77GxnmEyZCWVdDcrgyVe7q1m7pUSeqheqrZTYw7iBMJjMrrWt6RiF7CyPebSaPQ4PXjAfg48XbW",
  "key10": "fyCmDD2TA3xPTwwYNdwnqecEWnF6FL4GmyJFbxRAf2khn2AXJZJUcd1WqScS8Scjv1nAsXbXY2cWvRvCAc3HgCH",
  "key11": "2a6HubviT1A7V48fSwrB3WrhwPc5VMK9g6rtTNBeQN2n2YZqMBt2CyUiUtr8WiS6kreVqJTqorbwGJqkLwK99ScY",
  "key12": "mP46HhBmXPr6wPChgBivor7r7msCB5h2j6g1pLkTU76AvpkCmHKPWP1VU54DAhzgierKF14swLEFHNcy2N9ziK8",
  "key13": "33BhBZcxav2g88LhyKe5XUsVZjZf79Em2Dg4B6f1184aUxwSoqY7yxTX3qfR5g9iZyreiYpBJgnAe2YkFQPzcuGc",
  "key14": "4ZUJgq3YFNZhvTURaSTHox5WWAR6vjjmDCJc5BZfBhzgurF654eK3uJTFKbe1i92DN54NAL8ByEMdU7zGHBPShTp",
  "key15": "2UoHquqbKn69ZY9N1S8tSyFL8duTNFYWwppoNgpNvM8pkzkw79dw5UCa6NopT35Lu9pKSbXzhoyYAWf9ts1gH1dT",
  "key16": "4HvWhLPLo5xjwzShh5m2UEAh6wPnVHK8qBAWogW7drUCwEC5JxPBWC1aMn7ftGC9Qvzd9LiLr8hDKFTW1CfmX91b",
  "key17": "2peSfjdfDraH8ceE1qFA2zWqNe8YFA2eR4toUjUHrxhdW7uLDCy5WKyvCRwSwWN5aDf994PAsYXJAshwjKnccrpv",
  "key18": "n6QTEzxX2U4su3bbkoPeZZjGrR943SrFesEmnc7c1938eH3ALTdhhZ8yE5WDNB8znQorQhbYQjEYYVtNsNRYZba",
  "key19": "YuEVzcrhA3didJXiZhnraoQ48CHDYaFoT7xuaAPxs7yHDq8ndmkzdZGnLUgP9xE7JzEHS8dZKdZhE24W72ackPh",
  "key20": "3axHnbfFj2wwHDx3dxVmmbSBR4YTHNHxGx9U333BTU9CK1YrnwtZd3LYnyyuT9tFiGxbwPm1vhAURSc6vFMfVgDR",
  "key21": "59rj9AnwY5cZZ35Ey9Ve1AzU9DZ1daZnjuAbgifat7ZjHCdkYoU1Lie1puFNNcSdb1LJSTm3x1XjLxpQv5GqG213",
  "key22": "2Vbns9Ak7N4MoukH116QE3XzYSgtFb7auewXXaenTScQY4v4aNzY7LT5ffpYVNQN2cM6joh9De21Rb8aMteVM8Pk",
  "key23": "5jVTpNTxWrwUr7ReAZXKoZBKHUhB3PP7AC12qpUmMDgt6W75wy4PaTrEWF5NZm5JesMnKzMG7DHtRoU9mo49BAAH",
  "key24": "4JjN8SNn8c8HfqPeAosXUMFZTsvztESsXW9hjP3tfEBS7szs4vqwZE8jccWKgHVpie39BXFNEDK8SPavB48Spnbz",
  "key25": "QAoh6oLxRx5QkJCBjGuymv9oPUS1QpzDPcvhXP46L72hSyuKuunUsbHBH7GVJf1jH4ZssCtA6nT2BDuHy5k8HZU",
  "key26": "41Nisb1xupFXvyXPdAuToGAUsgqffA1971avosPzmzecHtVkehNQshz5FRJJCFdmbTXiBiSyfGSDauHhTZuasbP6",
  "key27": "3xstYTJ5iiG4mWBQrk79ZcJQFxQRGazxV48h7jVkEBEKfygRJX8vnfjkKD9nmCQcja9wy7bWF2juxnWTVfYSnCQp",
  "key28": "2wVNd8hXQU8UNtyALNhuCrXz8KEdjLhhXWL3FSvC6g2FFykws4g4DEU8pCdfD7iRbyBNmJw3oM86jRgdYX1a7EXN",
  "key29": "4AE4T8zs9tW6bS6whK8B5ZbBXrEBzdFzP81RyzZ2pp7VZZkvxYip4CPmjythKnVsGCwZcB9xJmtd2xmSjSD8hucU",
  "key30": "4kxY6hpHXALyvCKXWysRVBC9ZsRiemhCqvoVBzuPwu5wUEaRJpjHmDUzttj9okscdvG3PpTECuX93eSDcK8hQTGF",
  "key31": "2AgKonEzafYoAbybAhVtPZoBavTCAtwX2KWFaTCh8Pc88y1KLat561JR592xf63XhCaW9H5HyrkCWqPeqV2gjqTP",
  "key32": "3v4yBEQ6TYiJaFBsa5ecrnKeFEcUbvJ78tU9BHqqQ9EJGjqW1uSZrByh455BzDubi72UhqrCHwD7EiGv9NAqWRHb",
  "key33": "5f8cF4DojgYGt2HCJq4kgWumSLFtrSCzteyndBpeGoJ5ywFthg59G1EP33jTYPQoCNDtfkDE1mWyPQVrRBjxsyGF",
  "key34": "5pNkcM5dc6vJgMhJncUQV5k9fbwDoJL7M3YQsMeP2SZr7CEwL1pxPehLBcgqeY8oMeeCgR4JTyKkGbfUjxSKp8E7",
  "key35": "4GwX3YCHUMM2vzKbJsYB4c6TWVcPi5m8yXnFo9nvyjvzaNGUcH1nRj7zpR2p3E14EMYYZzeCdvXKaAHSy7AaYMBC",
  "key36": "4M9GNyAAvfKYMoQ4zcE3Mw47qMvPL5LUu1W2fN5CkzF9GebpAhxKUTFZB8Vu6owBBbnDD5PRdn3W4dZJ9SEurFzD",
  "key37": "5fUKGTGd2YGrQac65MTwDDVR1WgeCekcmpUAJRFhENDABkpfdsJyU5LQizBi2kaeQz8xe6iXYdRCXGjbDcK7esG4",
  "key38": "YQtgKosBtse9JYYjXgX7d6qBzscpzr3qS9LrsfkrsZwgGdxqxFJfrca9CmfoSpTJhk8nronG1NTkN1uB2XnekLH",
  "key39": "FhgsB1d9fz3ojznF2wg8Zz8zgrMKQphuYFHyC2sMvNRyZuBcf5jNQt24NvwJ7cWhfTrr9MPkCwNhMPrhdz7ya3H",
  "key40": "4mAeYdRf8LBpTU5kHqeopEv3kKGxnxWpjYBXtMhCjCstJftojtGn6wT2dtUbYb2ukZT1o5EcrnALdLrw9wMh9rb5",
  "key41": "2KEkSPuLfovzRUhfnLuP62J6m4Hf6FmMs2pZVZSLvGAh64udHJSYJgd3QpukzrrNnqrnDMJ82gSQ3H9BwnDpmLCE",
  "key42": "4diSbWjS8tn3g1tcaEsqgytLCJCAuGMALZMb2Tjua3MzxxnVmAocnwmRJaLVC8Jf5Z1Byn8u6YYFviJtNxNgzHRz",
  "key43": "2JyU8Pyd8rjygJ5JUt891DXnBkw95hhRGchgPSG3WcLsozhHngXE2Zx9jkw8T1kjbvURYETow1oH3s6tzDbgTGL1",
  "key44": "cpE273XA9gS3k6JWwh1j3YEZeuSea3svw1mLrWySAv2v1E4mJSokU6xwv8ucHyLXNj1ZzmitEKtSEE4QWR6BLrH",
  "key45": "3XvnDZV8xU83xTRoaFmK52MEkZWhWNnaZQ9LEfqxs6R1cdkiLAKBdzcfV88uNZydnqmZvFLFk4V8HfWVdfJC8otW",
  "key46": "2rEuJz7mqBoqbNt138Uogrzzn6FtfMb9MadszN9wcFEfWmHsyZZgrexTGHWNBWEkUXXmENPrSoJLrctuMwzAch36"
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
