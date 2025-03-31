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
    "4x9p5NCBAN4HjAvdXiniz3L7CEcKXZwZsCwZbMBQF9SKWc5i7t6sFodjdyBoyZxd4d52FvMazc9F4oYihE2YVFAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QxpRMwe12E8qZfh7BXR1aPV9SJF36hKDHkbEBm3UsrNccVrc2gXL6Ut9LS5XCYsuE43Yp9EZCNS8r6Ud7UQWwaC",
  "key1": "edbynp9s3MaFf4Gs7XXxAZHcyHYuBMWeBvRtWTzMnNyj63VyH6vkYTrHCGfhEb4fN6ZVSeSxbdibBWRmeSZj1fy",
  "key2": "5MMM7Ua6twY872aBgbzF24Bpm4Xs4iG81sQvhFrC2DeTNEjz3uujJHWkbWxURcmWXKntLCirx6NaEn8YnS46uCzH",
  "key3": "5ocJXjMZGYqPJMqdAcAZYtqX4ZGByBGWiTXrcDNhZuLkiwjLzuVjWRsBnkG9KhuCqHiRH4r3FcFVNMdvEzQJKHH5",
  "key4": "G7qdA4yh7M3rg74p9sdeJvsrjJSKyMWcpgm7ewmz83jwuQJrJti7JR15hKkGkrLSLYaY2SZBM1i2p2tziCtRrT3",
  "key5": "Pv6rHzXMqZvddSpMirDVQGuVbNFtkcopAK37hWP6jFKFamGGMRLRndsQRA41qsZAkwx7qy5oA48bkjP6dn9zXqD",
  "key6": "5oUoPpMh5Ng9CqtnnjBfnMzRYTwVBYPWVo1kSDmAJurrQ5db6qYLncQNztjQKwbR5qQDCNj9dMmAMdXExJA4Kg3Z",
  "key7": "2hxrn9aewuB79JEZFf8BXDsbS68fAXRyEs9QF1zmvv6HnGboQ7Vkz2yMSKckN212ksLqPecjo833vmJUPsmuQgXR",
  "key8": "2RFhR45PzLFxTajN1jBzWTWhZZ95gGkSP3AhKA2SjEkqkVgTJD5xXTVJmXGuz2gfmYQuMV7taoPcqc8BE5EnxGY1",
  "key9": "8BP1K3nYhuXNqJn92UtgdRWX3LKMAp4j9tC8SndREGDKFPFqQSKbMLHNC84BVwQ8P8vTb6k6TCyrUhhqspv4aq8",
  "key10": "2gqQ5z6unRg8HzriFAsBKrNGVBkBEGAojuJayX3nzPbBN9k68bBDt6kRBqP4L9QibwZjSFdrT7z7bt3gFuYpfrZF",
  "key11": "4AttdireD3NAhvLh4Xozb49KwCRZ2SLEmwoNhDdc4LmH9s72K7i4C2Su8Zw866wZ1KmmfkAKuwj4bCfobiEtXQxb",
  "key12": "4tdKU6pvg9KmikHGVnhdGysqyCrPyyt8RuJ4uptYLrW31L9CRtH9GE84M7jfsR2XCG2gsGoXQSLBZQxfSHWHGG5N",
  "key13": "W45qfcziZ5pqxjVt66SB1q18YJLAd7jBSL8GBT23DQHs82QYK1k2kuPgchAUKpehynthbZqazE9SRHMPbVUrBxa",
  "key14": "4sBYKcnpEDhKTPajQCfa6pPy6TCDvqy6JT7vD754qBu7FwSZvrPufcFfGE5rtxcPYCJ9sMkLMNLkYjiRqbuQ8bu2",
  "key15": "2Z3C4ZDhTg3pv5BNhRumg7JFqQMmjoeeqfBBp2reWNfXH99J9QC9R4Mc92pGETiEW8EdMWnZu8cciYY39BY474JJ",
  "key16": "3y7anmCw76D4P3uD74S4J3iZ3FAxWxanekWMDuPRoxwPx7TuVULHWvR4CN7YPB5pXDVCwCK2TkUWKmWx9fqgNDZy",
  "key17": "aCxKkVrs6pYSa3XpLaAL61iGVD9dTDNg3ogJHg4MbGJBGaxvB4KHypNuBPQESgpHT3RHLGgFGsjtYg1SH9VwVrz",
  "key18": "24dneTkawRW5gWFXzXcAQ3LrwoYQVFy9HbqcCuC7Qu91QTvkf9iTWXxSuzESK1ECY8C6FmLz9XbvCg6WCKg43WZw",
  "key19": "4zHcBqvBesnpjcnSgioFEBdzLxrR84s22UNh9K5JoXQf1sSLGV8aMxLhGSCyTnTNNJyncVHoYCbS6BWC3zcDBijK",
  "key20": "21WHvR8JgCDTZRkfUX2HgNhDiaJzA1d2xDL7sQhiJgDnJzZjfp8fcfdVS3WPbrdkAXt5L9Z2Ci964D2xxKhHASL6",
  "key21": "hU6HdV6M3pZUBTvu7bBexXmw4NSS3PWNyaCUJmd3urjZbraGsqfoPmAqq2pUgiMq774vcLRkBbSyuLuJPUbs9s2",
  "key22": "3henme194VUa188BLBkPJZmgDsZpKVaBqwq5NovC9GUgkFvp6VxrtfvmFVyaXdnBNLskyD3GSTUu7X8NYeyqCsfA",
  "key23": "4U4Kh7NwuZzSvmaEEnXbgrhoZgbL6A8sASbR9EGRg2bbBroASGwTeKtwtamKFp45kpp3zMvTe2knovYVYYf8FoiS",
  "key24": "BvkZeabdX2GeaRkvjVFa2NH3kqktoHXC1yHYJDPFMH2p5YjqTwBWeKZ6a2qgSCBHgxT6PMmJn8WiobuYqdybHfU",
  "key25": "3zvxSgzfg3J3HNDh6Jz1fZn7SCGs3S76GyPcyKYSC38AuBiZVYwNeVtfqXLAgALihGs5RRLJTK85TLiwTwGYxtFV",
  "key26": "5ZWrvHV5NShJZd68eemMon61iFJZr2WPExV6Nvi3VSAqPM1cHXnc3n9s3iu9daKDRR3SarzNfaC5fxunLvDBPBHA",
  "key27": "4EdpKqHQiB4tcjHPTybEDQBw4gMM1SLWwSMpfS2mLWiPAA2JaaXQsr5tJ7TBJdfHpBaUphPQFi3zWxXdCgrgea3a",
  "key28": "31XTFbC4H5PC8b4eKjKtvwtALhH1GWBhKg2iaYXzFZGyAST1vA9hpniWs7HR6U3kLtt3ErbBLkmcHM8jf91MZR1J",
  "key29": "2vqXGPANuuog1Vv14q7ic8pSYSWHgdsAeFrwCZMetkdKAvui9Pow1GriAQdi5iKjnSNEAaRgtwjuUQEgUsnM1YFj",
  "key30": "AkdwFniQBDfARV9JsEekkiKTvkHFnisnwjwvBF4j21vp9ySmrFLfmUnFbhLq6BmZqrc3LKmgq5rxgtPB7SdxqbU",
  "key31": "kfWoQYcy39cvtMtewtF5ARRYPmNz13Z9sBrYbA291UCN8F8KrdoL2KeHimzZTbND96zrJvtg5CFSNWrsAQpf4Kx",
  "key32": "5v9XhiyhCU8oC7F4QHj2GvfC6bJNyzJG1WmHFCtUbkV845abZhzmpGZjwJMFKXaX8oLodAFw3ANEuUUwsvcek4Tk",
  "key33": "42sdgPdchhZyNxeee28eJFzRDZWXTLSf55wuaeF4dZzwF82PXB6ZhXewUKd714nsk1ULqSrwwyLJ5LARQvJf9taJ",
  "key34": "5mAUDcHnDUjSYhggt6P4gmPpoUZKUEnSPbEqzZMAnVf8CLRrrdhtsHitTa3uwyM5D652AH8iobWVx1PCs84hes7t",
  "key35": "4Y4ci3ex33iVj3eDaxqTy7mA3bATEoh6Zn5B25f4b3LxGSYvV3g5DyWkScDUa9zw99hB31LcJr7b8xA2fUuspn79",
  "key36": "2tg78DWJjakaDNRbVRvTtWQULSftFgHgEJevf31R6K1uoN3MjQGQHyKcvaK2HgYA9otEY2fzrWiHJYMS7oQFXgc8",
  "key37": "4W2rSgQFCNJRYd1ZjE4GtujM1R8vVocEDbFtATm2gpBeVjNqUiA29KrgNiziA6VwZ6cy3FAzcj4EA6j7MZNSD3ta",
  "key38": "4gumrnEP9Hmbw8S5tjP23TkC3DYGRB4Vvjx2Qgpw7429AMeTNDkmszfMBjY8KjdATbpwmMGX6jXcLpoiN6vtPhkS",
  "key39": "3k5vGzqW1GpsNsCiEZGXCf2J9i6ze8ZtaZg7hfJv5AEckmmhcM2x81Jv7eNYbGecx36UZcQvDMxcS5yZGMYNBhst",
  "key40": "3TsECHwGhYbJW1aaPxKE1zpNNLdSNtrxsGY4cniU6BJMPS9hQRUCPjS6sMyHDKSScVv3MSx4EmYXjYjxypJXHeF1",
  "key41": "3A2DCcjXVgdJHnVNvpUa1PMYgG5on4FF6aiQUCYEjLYFik1B7zgD346pfNREDpCUDX5rPXTMHREGqtYqHAMFiY5y",
  "key42": "2EbmNDmCWiFHNudYN9jrzNXS27Px5TxjTSBNi6aFJ232MDbjxZ5tx86JHG6f857NrShTbh1MiNSqu9zZfRdLqMgo",
  "key43": "4zTcYEs7YMNK4DeBb6ZmzLr8pP8DcVmxDTtg4T5i9qwDoh5G3sNMwAdtdYvfuLpYimM4xhxgJeAt86eMUjWNHp61",
  "key44": "4ZBopBEbYETtMFAdvGE3FfEbfuVaJyMyNhZMMzo1Huy5kgZukmThsZ6HAuevjvLTAxVAwrNtuxjVatLYi3a5LERz",
  "key45": "593h6xKbqByJsi8RtUntQmq6wn6gprJNhA8VvJ3T823uL4wmkgWzBz1XSqw7Ef9NrsWeE49xWhTJuBvqakSLpEj9"
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
