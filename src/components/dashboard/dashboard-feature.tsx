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
    "2P9yMeatVNh1XQ8ws1dB7g79HpYRmy1Hy1SXaAWqcSS6oNwamCnKVu6z63aEFMNyRXpyW7DRc6Tr2hnzcmyMpcvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5ZFTozazh4EAgVgCsu78KXSNBnJ6TiDJQarF4XXaTr25pemATfhnsshDCNVshyokxinHEFvt8GojC5yuBVWpn3",
  "key1": "zfdRczdUidpiApjdQ8JdLV2q5Rfx8L8uAjApjZ6tWHxMdddSzrkuoyqb3EEPY28tg3dzbMbTkhQJcYmB2ejZEeQ",
  "key2": "2F3eWTs3zuf1Rwo6GZDRVmC2Lb4oBsHvqcCfHkShbPXGaQk9fjqQs8hTeAsMdq3Kb7vMXK1JVxt9zPjT5RnoFRL5",
  "key3": "qhS9hvWpNPJfSfbosksr9ov1QZVhbyerG5LUbbx6muasxiRR9mkocAvAdgQ6rvHNacAbNNETGKf3vc4y4oxEybb",
  "key4": "3WhcwsUvK2HpHTkFig8yLXWZAmPoApKEBoRMBB8fLnnrWRQZhaPCPHV4sCFkusNL5n2hNufrcnzjSSpXk7Usjvm3",
  "key5": "4RH4ZZauvypEL6hiTizuzzpdPyk9MDrv3N2uEYbs8bpoSYGnV5Bgfi4XTtvuZ8EVZsiPBkWyy1GWTZmMv8g29wcr",
  "key6": "uwJv8UK6X7EcVzJ3b6TQmaD7FuqKnd4gMPYH1bEp5W9zo1qxLDJEeBzoLigoG1cYSxKhxTjp12xHQJy62i7KZC9",
  "key7": "4Y2idomuBMG89ZWomnKqvXR3hb5wgMb2NWGfwrvhAcJR7zJxj1AwWW6MYiNLFSPabcDXCfr9xC4o76KQStcGiq4b",
  "key8": "2Ajo6y7SxNXD8DqzPsGTAvLtB1neYk4EQH6g6nz6gVCE2zDgH1Y8H6vvEwPdobSQnD9HTuaQkitD8YfTdxRnWEfk",
  "key9": "31JsCcVhBHwj4J24V1kftT8JQPBoAwYAbBz11BtULJZpdJrXPMY6yKhpCYbTbQ7hp3AYn39Uv2sLAxS4jCEGzS9H",
  "key10": "3G9HwPVcJGwGG4EDYBrJkxguFE7i9p17GNsJfckDuixAUNrri1b4UX14Fbk5tGNUssSPQruoJ4W5pMo5uWa8Fo9N",
  "key11": "2wsiA432Z73USbjmnCgykbMkTy2mFZDaKmwUq69i7VXQ4PTswwzhP2EdH5n1QwAR2nQYEvMW4mZQBAYcU4pgettT",
  "key12": "5e53BYkythhETSzEajfe3bLLSKVaznUhDf2BRLKBDcoJWvKS4iK7LvFGEqynqv8CV3NZ6Db3pa7cZ6xWw61hd2Zn",
  "key13": "3EXj4anZnjeLinDTfTxGh363iCo4YMF27euNGwPWeyPRfoCFMyMcD7GJd1aFpfVKaEkxYgqZZ7JaKa6HgExL7MMX",
  "key14": "4UEN1UrG9Rjag9MMEGoSDLZRTm7k7HYWj94Azs6ZGCbUZBm3c4qtEgLshwnxwceZXKJ1AUrNGJwY8TKHpT1mZ6DS",
  "key15": "4vseHGA3ShECwomG4kxWfpUEbmy1wpgtceQ3mR2yxZpuNiMAhfenTqm5ZesqEDVsPNpUEK1Ykgsio6Yd1JB5wMY8",
  "key16": "TfJb1g4TtgiM5P1kvJXHCYyRM7HrFKaYJb5ze4gAYUHp628xZpPQRgsNG7AEvaYKXdWLAWrscG6QrgnbstK2gyK",
  "key17": "R6WaNQa5wjU6jrqZqndKDMZqeLbdJQ9VyqFmcRKAapKfoyAXNp3iBPZA2kmWEEETRWLY8nGQZiiNdL2Khx6zpPE",
  "key18": "3CwNmbF2kpn4BgvLKTVnmhYh1Mi8v4bwbWU8hH3YeFM1PfDCzyNwZWHpMfUCHxNcLM35EBjcJVnzPeNeg9wPPfyq",
  "key19": "41qpRZxvKFYrgTscLdJM7rQ4S1QBoWJPymjtnp7r5nhUK7bVoN28RSPguKAyWoMYA85tYWxaAKFFzrHGa3MgYBTN",
  "key20": "3BWiGthB7dDd5QBK2doY1HUWPQ8zqYYwf4awqrovyMmZkV3fiVSSmRG6gcV5Jhni4Kk3zqexFAmTUKCxDcP7hugM",
  "key21": "2kizMR7DZb7uHN2VTDSDEiDZdXRvmmpVthE6uW6ymT2fgMATuv4FAxdNsAHmETKj6noxzvbfY2tHXPCdFrWEEGVe",
  "key22": "4vfkFXDMXukMXA3dxW127gVfdJt5N4pX3PYv1fAfZgLbFM4SKSDwAJCEi97nQySvvur11r9d8C3RpYu1w7irTbEC",
  "key23": "bjErScNt7w5fJHh6tn4TEAFTg9EPVGPAsEYVcsNrf4LjYjNy9p4a6MbidiHPnVYsCk2TVqwcp4gpFfKbu3Vk5wo",
  "key24": "TP4VdW5rTvq8XhrZbQTR6mbnYWFRTteyCUX2gahBnYhDTowu6MpPxEhzJgXb32sam6SyCedpsgqZa7VTFXKnEf7",
  "key25": "33qse1TwNw3dV4Cu5UD4Pi9ncGEQxjqDDRPWNZyWDFQFSNJAnEhSWFASdvPn4iuwd8aA5HiZrkiZLoRFcTc3jZa6",
  "key26": "7ocrqVdApQv7WtcQWwgvD7tLBfzz9M5qp2Nt8xskFjg4LZ8cc2qAY9kkM37atQzSLcooawtCtvZWkUsmVubvgn2",
  "key27": "2QpPcq3Cd7maGbvvrYEoeQ6XkYsLrFFyeBf6ja8uCZH8LQcPUBXByoCd7D12JtTFvENhiQHb68jH7MtzHvLhqUTd",
  "key28": "5ju8ZF8UYx4SZFsRmLVbjRAbSAYfRFDv5LFkS3nTxdtdpDWMPG7Ce4uDJNRFC3LdpFzmUnDe9p1DRMELQ25naB3Q",
  "key29": "2dY2a9f3cxeJQxXxKAr5f7Ardr44mmFWNf6wK5XyjhzSSevHn8dHXjMea5qg1X4sKGcLSoxCUVVRaUXjGewEBjFL",
  "key30": "5i6F3bZvqBycEiF4R5hBUHRZGz8KintN4rRzKCFrvRzihK6Frs6LJp7A1hXLG9f7jQMshdB54B7DRVWGpwenpwyg",
  "key31": "3upJSVWN7ah3xzxsUtp5EG2K4g7C9zaEYB56DPUqYdZ1mhYTpjTZz172LdG7Nq5ck7a2bAiG2LYUnKftwESXyLD5",
  "key32": "3LuH9Mqnsm32zqNWvQkjujiqMFUZez2AbSfwJhFzbnVAg5P5ko6oSuKem45GX6n38unCiHjwiBUNrG6at1EorBmS",
  "key33": "5cLqjm6YjTxU41NCYwnpcSqdvu6MYAj89sGYjeKBd6bY5oBufxefWBZBPudND74rdqPWwHRWPja1FUkkEwQJ7Aqy",
  "key34": "hjU6BcrYNZ2FYbnQ4C7xHxVBAGFwaVZNp7nxBCzenx3aNuK2MX92gZ8xopbP145jiyyYjb2oSzrUZgcT3zNegba",
  "key35": "379vXgvJUPeG7vLfK3W8ohHDwGbbXbfSLShfYY9ca6cHHL2gL4cECpyq13etDSDRu2VfmuyiRqdoYYGv2RmV2z5k",
  "key36": "63V5aTtxSCSUAyR6TLgTrb16W4CBKiV7kgBp9QFqecdfatNjUKcRXdWEaryn54Coy2zXLYEjfHk2UwtieU4gQuvS",
  "key37": "RobCJbgFYQpm9ncztPG9NgfWJLnG5a224uLoicMkWAww85pfS7ML8j9TfdUV4huStEjys5i2Xd33MmDocLuGJbH",
  "key38": "NcqWQ6B9YaHrsMkwXWuyoJh7DzyYGxEWKFdGimxFuRGDzCuf3o2UJiixg2d4nGG3cc7TGDHBErg1DCVFFeqYvcx",
  "key39": "3cLDhK5FP9FUEQJoP5gShG84EH9KXXpw6pzaVQbLNAjsZ7vBPEjViD1vbz7GEELbeK8aq4j9oC5oHWzXNvn3APa7",
  "key40": "23uGqQGuqpimjEn7hmmKJ2GGhk4N2hEqZvwGrKGEih5MrANKtACebTSuhRfi3Zp8PY3pnwvseKx6vpkodasD8wuC",
  "key41": "5ryejvBUmJ43h9wsCMuKdWa93x3GUZxtXuvCHtrhopuMBmVtESEbfzovQdpwa9zYht7j1B1h4bYMfcerxofhEMxP",
  "key42": "54JHYkFxqPgtdTX33HdcupDbBZGEHWg1BiiM7o6FAFdC2vxbzKHk5WxVhxK5Cvr5TJbpnbZW97vTKu1hPUpYo8nP",
  "key43": "5pjWEcJVTN6PyMeJKnAKa5m5s2ahBUb8dpD14v7BrZmKrrV6kj6azX7JGyXoHdWJFnUfr5TryYVNNocEgfxU5k6r",
  "key44": "343foWXFhruBCm4grJYzQ79rJtUoW9hUu837LScFaUbzx1MCrs911zSpc1PHPVyMnLfMax87pL2Kddv1nXjrbASf",
  "key45": "21xrg2XYnQFr5nyaXirhtwb6CbA1AAn15WQiCS2dydsrJE5pUet3Tv2ERm4zw4Zu2pLQcvxN6UtmGXaw6jCehkGj",
  "key46": "5kjqqcfFHPtqYHgPbibgi88Py1eo7G45w8uP2NTLdUeBuzXoMYnpDnWUWdEiBrYAwuokrcBTytVNbyG8uJvUU7A1",
  "key47": "3EpMQgbVJBcQnm7whgqf6qgq3UZexqbsX77WV1N3ioDoUN2HDhnqVXbGr9WvVvXhphLYhNb3xZiSjv3vTrc3Mtd2",
  "key48": "4uV2LqyNXjKA2SKDH2hsGiKKyExagFoQmSm3iyYNjFjY5FUkRvPPXDt4AWaCxaowVZrD226jM9EjJTyb9H5jziGa"
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
