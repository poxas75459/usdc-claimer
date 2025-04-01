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
    "gTBrH7Ag3HBmHVDkUr4ywwCBqwmaeDdEtDznfrjrsXTRaX1ja9VA2sVKQ2iVEK5tex3czSdVARYQtxDJe2WXwZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rioCbDBeWFC34NnucLcVcF8dTjwrdU2GUBM8nWpgbYd6PnmgkHkqhSDxaJTK7KifxnQaxsYc9By4DXkg3btXhi1",
  "key1": "3aNmHC8DM4YyJtFGFCDdDChZRq6FrQkPDMd2kqbj69sMmqbkwjw8cHjbXVo4dfpLcCNYpA4Cowz1fJdY6Z1pZ8rH",
  "key2": "5LYuTLcdscnTUcBkW6cCVVBw1J1eECDLtuX61KHYfrSuCrKvBbUWbfNvFKndjiaqstRjaNwjECfB1BCmGCxi1K4j",
  "key3": "51drRBUTfBjM27DmyEBJvgXQGw63nTSW3PqFtMQGaKYguWKN9w71RgHyeJ97XoFxr7cZGNgVGEm1xQTa7NKpbzcX",
  "key4": "4Qt7fsz1odBa87EVzzR7dUWtZ9zCoacvndMB8QFhayoLVbXT3YkgoMoTip7Antdm6h4EtpFZi834BUmuBu9AdaE8",
  "key5": "25Q7q1h59dWFrHktX4hr7y7aM6qGFsjPxybzD3Y2iX69qtRF5P7wGjuZUe8FKZrU4pgU5VXNf5tRdNaDLGfwYZQC",
  "key6": "3QBqzzshYfjC1rCCdpgq3iB6nw8RiDK3Y9Vnh3nWUnHgxuB5MB2s7vsZTf7TMXGAEDBVs65UMfm7XKz2MFkLMFNh",
  "key7": "HDXNxaUWreWxxt1xD3vmriVeMfhcTqG4oGAKU4MwwD1gPRXqh9AGL7ayXosbquzQTVJbuuhmsVjUjYK4B6bJa98",
  "key8": "4KLzXsHBWBkVdyj8aiHGKB43C2pqhbyo14jeTM9ow2FJ7a1uQEEHDHLnZkye9U9Am8vEQKaTSyabgYsv6x2uyEE2",
  "key9": "2g1dtXdjHyV1KiukkTD9dR52MbFCrhhF3zPZ4xhafQLcijw8Ux7PS87nSgYo1Dne7uXW823VtVCB3gZ45hJnD2X1",
  "key10": "24VhkqYK6RDcbc5MJZDrZotHV1H78R2MtdW7KtKacByj9Yrn1cQMRZwEDtozqHhAQVgdnz5v3Em6JfHb5Hpp5qVs",
  "key11": "5228P8Z7dUGWseTGjp7f3D6q2azJjAZS9kSTo3UoPjqwHPLQw3mGFq87quzZ3UHEasKy8BHEHCpGyipXzwZZWTSc",
  "key12": "5pA4VnkBJPFXiY6Rx2RGGBnPwSFASS5X9pRVKv1qsCFH4URnHUtxAZ6v2ShqSD48UZ8NQuA5LF8A3ETiNCvxRBb1",
  "key13": "5S9psbCdLDQiiC2qjTcmgnMVfQzmDQ1LncxJ3MnG3TzRtDUaEqDGLgxZXA1yZE5cpqsVvVKaGYFuxHYt4ZUitM6A",
  "key14": "4pEqoU4Yd9zT7KZiYbCpTffnbgcPxLBCDPqVH5t3CSXanmss25QiY7Qmrw39SfgEeVCUTq1Zortr66uT82NZRtTS",
  "key15": "3CN85FQVPbLo76wQktPeGij611nvuKahFPYgHxCAxyonWF6diHCJkJdpDvwSB1GPYDUxh6ad8z58nRbYs1BLDWir",
  "key16": "5bVAGKMrHFphPVK7wewLYaBk1j67qrAhXcsUW7pSUGf6WmNsfep1MPi4HkMiW9Fpx9JoeutQ2jKUwhJ1g6PXH3nS",
  "key17": "3TxC67vt25BMCjaGM9MtdSdJ4BCxq5v3EeJEcRo84vr6sUDphke1vW2nKMaFZT64DqSzktHvnZu6ZSeUqtn8Uuci",
  "key18": "5SitMrBndxxC9UuxnMZDAEWQqMsF1mSkcz6zHC4agthAUhatnLNgoAToHaeS9isbBPdkscywFBdTbGJc3VWBBuPB",
  "key19": "5xDMtmSkYwAZHm92AK5Zk6mATcZZcuyxW9uo61Mw7oPATbYyaSsVzYPNtYERdmENENEYcgVBUeurvuNvufttP2P1",
  "key20": "qhK8hxDTHBKhpC8a3b7qZnFkw4DV1JD4UU8UPVPfU1CP2r1hDDx5KbBszV5yj6GMAVrhob4zQ7uMpCQ1QMw7BRc",
  "key21": "2Q15AxcKR46Prvv28noytALNZeVmZZHWVAfZ375N6hkDwGLjxYmW3LMKwGRdfUz1iPYwbmKrzN2QQJdtvtP2qDMr",
  "key22": "3mhfNwuN9pseKdvFnwVQ7nCSv6GWMpjZbbU86D7V8PYjeg5nySwLqevzQoSYNKmmtT3nBKLbjHAJonfMc8WuwRds",
  "key23": "3VWEqcNTDr9uVjNcWb7YjupHxgYauNP4863TauFQDmLqERm12LNQ4s7waGAJBS8qRXvURonX1LyVHgzpSXtDPJyx",
  "key24": "3atkQXQnGi9sEPnPBswdSj8Sg5GxH1sj4uPDK8oTRA2dN9wFufSwypiZeCTwyYzgT6FwkSDGuQRoFBiAdYCt7hjx",
  "key25": "5MVCUsbsNgWKgsFKDo1tt8dBmdZ83mjtPNSzYo6Yc437ggdxYMrwAmGpuRfHVv4GFHKUpdq16tyRa9qkLhEjRygd",
  "key26": "a3QkffN4W3jNDNo68gcqYSzXXNgLGq6n1LevcxQSfm9VrehJwMKJcBgegYnykHyQnEGqpPrDtCM4abexcoU4GmZ",
  "key27": "62G74Mnf3E6Hz86cE3z4Ynz26Zcn8x41tXnjwkzEDzGmjeaQ82Y6vREdhaYq6SmboKn12eX2oUcWG3XNWUuC8Liw",
  "key28": "33eHFSmqHb417gVNovZvyKZAPKZV3BLAhag2z9uZAsdnvPdJ6W39UMeAoZvmui7Gf5ZU4LJivToUwzDx64484Fbb",
  "key29": "2t4AcHDX6oSrt4F9vixgKSRn6FbwaqoE1rTTujFTLTAQqcojjHFpDbowRzwB4pCzc4V9ZxfQyYqm5wDxo8GXqEMs",
  "key30": "4n73PfTn7eyoLyNYhyfyxg3tMAoPKD66Emb9qxUTLh6V4ZZWVn7juEVkodFNzvC1voYkCutZktqDBVjCyjohPfDu",
  "key31": "3YVxP8qozy9iLy2mqY2nBCRimJ2G7KG5RD5W9DoDS8pTqqkVrqqFxatrjdqs67vjrVEFVzLexQ4SGwrfWv8T8fBZ",
  "key32": "279KdPgWbkYg4BVDdY2UaGZ98qEE4BJXDMfBXaLENiEXWWpBkSZreBTxDD5gBS4zDmVtRqYVCjha599Eg9JxxB4B",
  "key33": "5WbeZdQFv6WiNdWZmxpy5MJ4Si2ZRQ99s3L4P9AbCPUdPVNx1m8NRkFZWq4haBrKUH8kwXvfhRVuCMFJoE2153uw",
  "key34": "62HCB9zsWpZt5JhcqSBybkVoVN1WF3Lnqek15SQLN6voUXSDkrgxBN2iBEdMDgbVY7bkng97oXCCxmgAtzBteys7",
  "key35": "51b4EmPr63wc5sH2fcgWeLFjox7iyumGFPQVw9cvuZwerjHMN9UnwRKhoE3i53yWRZEojMUp6EWoexvrBJgJBn1o",
  "key36": "2FnTSHTdanMJNZqpMGDpca5q1ePDx1vCPjuzBuVgXZ4exjNePuNmxhw1jPqG2LS9rijH4Nfz47FkLTTLfVc3c2uT",
  "key37": "5o4swGRo1pKZJuc3tFruTuMyfnKESo7q6DNiRqpoWw9ohZkdVpmW8AnbUNK3HUz7CZRcYTNgmXnMP4CErSmecyh1",
  "key38": "4rayv5XkBqTR1ZBYRYUey7kyq3uw61oCwU6t89AmnwZJsRCk4hrF9ir9T4s6Xa4ZGcfGGHMYtQBg4VCDttAzsYcQ",
  "key39": "5GcdwVVXWvRCfrwJVUiVQoxD1wAfj2pzYxTtWqsSZ9fjc6RwSdc18RiosJgT4dCxNa83pGwBEqgoSoSRc9nurcAX",
  "key40": "4KZQRR2TR6WFWvDtA8EFYuNQoezeMGR1uooBNZr3jhHgK5h9xpgvbSGKhA6cqipKRiaVHyy72e7JLXXmgyBpbfYH",
  "key41": "32JvpmXKRRPYDUwHb2vy9g4DLn6RXxB77e6NoUETqHtJRvJ1VoUTTj9in3k7fmKcB3xy7tccERjgZyny4WD9NkNx",
  "key42": "52XZQY21dfbaCp4c3MPQSWau47Mk7199tWSRxuJNREpHTogXCanTrfX6MrNMAiwkP5dhhEqh1ok5rfRw2VwS7pHo",
  "key43": "5AzyXgLGHT39b6339mnzh6aJcLpwvP1Dt9kW4K8a7k6c3Mh19yw5DMjP7pN6NfZUK63ThFNbbxWX9sg5h3htygvV",
  "key44": "2SsjfgBTb8rSQnZSeUsjM7veYE6PqfCUNAoXWS9k1JcaLAkRg7hP3wt9LWS9TLRUtfKgrNJbRyZAc3nAFLmG2DPq",
  "key45": "4JxKeR7UzXtmfEQVMN6nHcCrhXCR8aBkgSYZLuRHkdm2kqBW3MsXSiUt9tfRArfLdhFafuWZ5U8V8pMSiFdQuS7W",
  "key46": "39zEwsC8Tr7jUcu5t7FTGCvsybpUk7CyrhDF425WX28TdGXhRRVxuNbrUoFphMoBMi7aYDFhCm3aNvf1xTPU7gCX",
  "key47": "2EbPeTWteKe5Z1T74KfYLrPiBiWmofswdF9e3GPYo5FK4W3piRWmw9kSigjcStZx4DWfwAM4NWQzg75XtWiF8EFz",
  "key48": "414u49sWtAGTfo57ifckLdHNCFXXX8MwAgsALSHa973PVyuhhby6ENKqcAqy9B8zqRr6Cyc4bDLNocJzvCxPnbME"
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
