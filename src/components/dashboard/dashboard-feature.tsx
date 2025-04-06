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
    "4tN9TAZpdn2C2qNv23FtnkVysu8MGeQHtSZwLdS52nx7fkeLqmVeSNLFDiGmPkCAh48kpXmAhHcQJwMdUdjBDcPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ttCMUMWNztU7irvG2M2j39nHfp4AbTbc1PxjntfZ3k4px33ymFVdqWKkstcKTfBy4ctSxhGaZWPXEh522hFyPzA",
  "key1": "2Coa2oYD9bwqjJkQwhwLSrevKAHdwVo8U4Aj1RXtAYLPXqCafwWnStodWpdqJVwUYvJ2ezwngJHv3E4177XajSha",
  "key2": "Nxzj3FjvdGJszkd3iz4D7TmnqhccCL3oyzb1xf5wt5cLNCZgRpvKJJ5YVhSB3jm7yPZ2FHiZpMTBXTDQqyq9zaE",
  "key3": "5zcCwE9vxLoaEV2yrzva97MF437Sw83THRMiqBsUMkd37KrAtTGapjFz9JEYifKghxhjArVBJWjfvTXDxJ7EnsvY",
  "key4": "CpTyi3SpiVH4d24N9FJyGiEGxUDzZU7u3zRQ6tjHsFwDCyDvJScyqk2znB2wuLGuA796X5dc9nmzgPmrF58wtKX",
  "key5": "344VqNRf7Z2y8iALN4rBxNvUEVoAx84oAjvky3PV7EboBHnp4V8TnX9x4zmLXDZ3h65BEx7f8oGsfJy73DErFWk5",
  "key6": "4atpZpxUMhzv5pntH2fXNCrVCtF6S9ifdSVFvUvqyFuHD3sEzHzu7798271yw2fUNu2W7DkLfp8pjqVh5FB5g2Y6",
  "key7": "48vt6Hm88puMdr17VxfBY4NdmxfJYwnFHXPxqJkLQEvWHkUJVnxQVp1T32bEpUoohoyZWDPvVg2YvCyFmRa4U86P",
  "key8": "2rSDtwm1oQs97Jw4SZ8NwtZ3ji4powRpeQbrpHxatSRSeqMyX9Nmjaj8eNxgZf9gXAXvxhkye4Fp6zLYN5uTJqK7",
  "key9": "2v2FJbwz3Gqdd4efwXo1otkPDfkYKVpbEiLGj2yKet1ckuS2DRKCaveCcvnGBQSiwu44TSr9dQdfpmpEZSMgtm5K",
  "key10": "31VkXNaRDzGxFKANPWrGJpUUUNirmomCPUzdZVCH9A854tEVSkcLJGXt6e9B1pC5TwXQrDVJYgxYEYeCyMpKWFh2",
  "key11": "3gTsTordyS6EMXcsd1wVY5mygmoUNnMp2wxaCYb8aYsSv2asmNZP9GMiFcwnx9Y48WjwbkBTGPhokitQ8JzcMc5V",
  "key12": "2u5GwQyYtRyUo6p2vJ8mHB86oBFd1KWw3Z5hikkBrh1jZUhhB8SqUU21y45Tug1LcVWTTFrmdL46w6Qz2tZJuRHX",
  "key13": "3njMJKYVyEW67eRcz7uk1vkHJBaNY81AxNMvrL7HCdvogzgPaNgpDpBvELRxSjVfwaoMS2M7XcGcC44V6FQarv5i",
  "key14": "2SMHTSxpemnPhgcXHaED6D3vrZq2jbMi41UZTrry1R9SCMKKmHSQKRfVKqD2L4ZygPeZt6SRyyHQ8sHUcrZz8h8K",
  "key15": "33CxiKUAYTtEaiMmRGS4N6LqfBMrwvVCB8ewHN8GywjDvnCJNuJKEPLociU6mk5q2ypApBr7D4fwwTW1PktpWpQ",
  "key16": "3RsG4XyLzKx2ZxKYUeQxeJsT8mnBEcKidQHjWjpv3eviTMB9rtUQ9ZkVsgXocosxfJLYHkpLMfdx6bs9tKePeAtM",
  "key17": "56y1wobXc2E6ogBNJ6AnbEn2E8uHXgsHX5TZ2QiNTRCUca2fmed3fbdcaCSvauaGtkBhHDQCxaDQ6HSd1S9Kzes3",
  "key18": "5f3ZYK1fQeW18eez3e7jkypcvnNdWcq6UdyJwB3mvV47zLJ2TNY9Xivn1ysPNA72vaURpwy2enWueexXpgqU7RjD",
  "key19": "26MjVoe8dwcAoxfds14mxc3PpNzuJfhBB3gx3HPQbTBd64NUeChyd1R7ZPcXDzXZFxsx9yuD4tJAyoi5fw4JnWce",
  "key20": "2aFn2gJRUQcLULGDWfPvgYAGRvFcRR6tjVN1it8xJ3CytpHMfnuNSWMBAkyfUrrT7qzBtfBobW23cKKPM1LD9XD9",
  "key21": "jrgU3fevMKdbrwPodpCvSE456yqpmVjjp5vKWv7K2cx9NdEPHryr56eV55aWd5DVZxWyeyHXN9LZuKKMwFGHkA3",
  "key22": "47gp7D1gnbisohaWKJaFpSKqRHzmhVeSXP8W6UBabZDEjcTMjdzXSnHQtAot1Jsn5XHrX77mo59JeqyH4zYhZhHF",
  "key23": "s9oNFKUsPhVNptDSRsWJngqwYXMJe6YZ7mJQZAAQfDXFVZKtxrJL2J1AEPZ2Tgvn8cHqPsj56CvKh3jauuYgWUJ",
  "key24": "4q58eGRKG73vjS4Mn8VzU4SYRhtZHbsPX2peuzUQPEZdvbTK6ctybopuKccmJNDZEgDzkJQTXzn4tWVpxu1FNCn",
  "key25": "3vQo87haWneFoyzJiM1pRfBNMqJPvFGgFzmLw2SNXH1Bay6sf9i3ayD8xRShR6KFLnRe2VV9UK4enjC8t3mLvWb6",
  "key26": "5E9hBnCGfs3mrwAGqciYUpjBJ3S9Mg2a1H1GwsxiuBhjDV7uN4Kg5BHMkAT5nPtXdvXxYrLouqSud6bV1U1a2hu5",
  "key27": "4Ppg8jM3ZjChB8ha4Psc4w1pVYsRYBogTSY83pJb3AfXwxKh2c1WUSkLasfLj78zyNGDjoMtTrUxqwYD4xHCpWoB",
  "key28": "4injpLLm2DyW8aicuZA1uyyXK63RWwLomjsPU5PgLL6GmRCELRZdY2yPfhJprnQthTunjCbjhzAjqDis5gtY74rB",
  "key29": "4LSWDKtpovkBcYE5oHD4RKjs5ApErvha7KCPwAkHcFJqKC3ZaW7Z2pL5gAueHuyLfB5DvYdaNu7W9Urzf7pGUF6u",
  "key30": "2MLizjHeGN21e5BAvokCEKXAK4Fgdr92Ptuzu5w3WZryKhb736WeMSby3rgGU5hDoqSEEn95L17fZda4EHvHVmh",
  "key31": "31nbTrq1TYHYvhVBXuCGhpR1xYEzS6p3r4g6F6uFFmsFg5hNdZNCnEsb7EALYfP6kzHNxtZ3uX4FYBrQ8gF4FQqL",
  "key32": "yFhdodSbE3xXysMVyj2Y1F7C4Lj5JzPsti9yMCLfVfMfNLh8VMYVtNsxq4wmsJfhFYswsRAKgNgT8M6TY8iCtms",
  "key33": "c59uSDJAYrMbsBVWadCEDUgybEP7DP3SNWqz8qCinkWQjvg5akPNPopUSoF7jxBpot5sLbk9vRWCb5wXQkBoh5a",
  "key34": "CzYg99rPDemB8SB76BATgwJFG8UrnJUdw4Zk3hL1xngtnVgek2QsJ9NRZMg1vGiBN4ZuscCGHPcPQU6JvKcnLaR",
  "key35": "4Sk5otpiuQpcchnDJgSKUSZFAsBMh3zjXh1A1eYURz4eqVjCBX76UeuFhKuiRX1X9q2zUuqpupyb3WYadPHXCgv",
  "key36": "3YVCrxbPghqk9sAsiieBTKhY5GgNJS9SAE6sDuHNh2GvMkDxttrYj6jcJ1uuYPFDtVW7pQJmjBB4oPoXHa7f2VLH",
  "key37": "5HpQdM22SbxTXYkmFXF7EJKZmN1eS9SuwiqX63QML3sDBE9ZsC7yKC6eWKM3GqBGvrScRaVh88VaJZLpuoVZseWx",
  "key38": "EKZA6Wrh55n241LoRL7PSMCZXBr8vEsYxVBTutAuCEXsviWgQCsae7MeJ96xccHjSL3fic5sViJBgvk7gRhar8Q",
  "key39": "27am2EJYqHqywH5LsLN8z78JPKhKTLWdy5H2Kiq6CcTRSm7roG1CvMK4Q2WNP69WWNJjvoDi8g54cJPa9MnFK5ba",
  "key40": "5gygEuyuZS51LrCxJmqg1tMyTm2jHwHE1ZJtK6Z6SRA3mrSNt8w9UAcnZGjcdG2V6L4GkconCa2dKw45ApScEtjy",
  "key41": "5qxgrBZzF3A6jBQ5TrAYHdV8QLURKhQhJhweaPr4NHBsKqDjmWaKs8YmQr1qkUrTt9vaDc8prZYKbLgJkFyB88dN",
  "key42": "mY5wGGMUACADHtLqwRfXqve1XyB8diW2ceec3Jked9UeLiZ4QaWSHiuqvBtZ6yeeqKNUFMho9afyZQ5a6YqwkVn",
  "key43": "4PJ9hxVMKrhC22uE8vCt4BhDe37CQRSqMkzwKfo1SeaoBHjQzN2UA4GwfSQkvtzNCiDribSoAATo2QmHmD2eMmfC",
  "key44": "5UZGbUsvwsVGgxsVo8gRk1ztRERau9dJHyjcAvfXKFLrrjzDCS3PJZ7WK55P2BsKjNi8z6mffDRnRE1akJUuXmTs",
  "key45": "5Y8ZNvcf9xrcTScuebm4duSqGJ4u3dhQLdZfPUNBA7SRBcUXrRLbqbcifwo64VpyDzYaRY58YDnp7nqn4dz6N3mj",
  "key46": "5p4EXCUHShW8CPmQyxq4v528fsumV2ZYPLXRMSVQ2DX2m5ZrWztXNZ3crw89yrfYkYVTeb1NddD8xK1w2fxofPYV",
  "key47": "5jJeE3s9UyiVMkFpmELgtvh7L49VXYYfi8Qwm59xyV49SnAGysgfcRv5UBvQBYg4ro8rnayUHEvxWHDp4pAjcLFM"
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
