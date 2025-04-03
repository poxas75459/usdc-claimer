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
    "3seSet4uH84V3ahsRF3G3gNeXsXx5s4ARDC5EWzX4DHP3Go1gALhpkm5VDcrLydsgX1MGR9m1JoDxeYMZcgUDrpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WoB32RL4TQZEHVu9yanx5kcNjVb8msqbZVjPsXBemXLiYSk72dkDv1mnNRQK4BKFEHkhtc5J12t7NxxhHYv62PJ",
  "key1": "3uHyRwtPDDKLS3RS4KDu2qtmTTsXB1ktoR7CgMRaFcrXhik1XWDfMsz1e35U9gfkLsXo5d8VgT6Xw9wJDXJz6ZGG",
  "key2": "5zDxKVrgzB4ikp2XuNFqrno2LGFZz15Mm7kwWBeUzWV8HWiJ2NHLruju7KWphqk5wry9mUhcbbH3wuL2S7wYcPov",
  "key3": "kECw3Hgq8px6SxPmzw6fuNmarFUdiEijom9S1m5z7wNrUyXSpr6tNDav4b1foZ5AXj7HqHCYSGPjUFnDEjbmx8A",
  "key4": "59GqUi195nm5Ns3yTQTT5g41naCyBx8sU5hrGYvKJaQfg4LPG7ZigrM62K3RAq7pveTM5aPpQixt1vZK9zkxd3TZ",
  "key5": "4E3dUKCrSV2CnGxuBwYnADGmwgBTUueBRrB7c7shyR9Sobv2raLHonte8jo3MwT5RuyWSydVRCPVpurMFMv8vHTv",
  "key6": "4ZCesM8Hbptg9eac2gNuaW1etsans7C813WhHPTnkPf6LuYmgeHVSBvevZU4h2kkuvyeNUgyw4LPufYXhzunxGZr",
  "key7": "2nSXGFNjxZij8H9XQ9Rih1kiU8bNds6t9u8FxqwfD4Qsar1VkKSLq9LgVeUdEajfkxSTSZ7XR2v3h8p5L6Z97iQV",
  "key8": "4W2tts8cHDVMLxyxCNCDyaJurQGk7NW4s96aXd7epvjsB9VrMrP2ATNV5LT6SQZnLnSj3EVMCJpFyWXgYJp8f6Sh",
  "key9": "4Hc2qRegBrgo7aTqt6PBgeZF7vz93bizShbLMZrXYSva8WVcZB2LmwiQsVXThLbUwB813CGmbXMcRozRktsAAYAQ",
  "key10": "3qJ9r32R6K5To3ybJba2S8V5UM5LJL6zRy1HGarNpAw2SJzTfqGaAs8tkehGngWpFtEJ5GobLzttH4Sm1DEjV1qc",
  "key11": "y84BXXpscH7gu4xGdC9A8SKBcmFe3f7RAV6BugbtGTjfy8Ve6VsS5HJgagYfsaxRwyQAABwhGHhPrC58sbquYnw",
  "key12": "39f33FrnXH7yP5jRvbS1nX27Y4fXe7GQCrfJ6HT5rUnj995TY7HBhvGRD2dmsRMpKba1nVVKsw56nqwjBEL6ppSy",
  "key13": "2oCXctaeCgBkEKQF62mevucs9CzW54FaPGpKCXhkgCXZ4Knch9mUan3KP7hnQQX3smetHdWwBjNJsAbyLP2Mvg13",
  "key14": "2pCCoSnovs4T6QHSpMyNJrKtAWw75pWbhDdbyUXFyhLPL5EZQExBNCD4A7Dsobbo8FBUbtStmeR3TwtLehjuALBH",
  "key15": "2a7VAjWuNXgXX83sJExbbQFwM6PwskfQeKsFvgkn9exKitprt1B4xr6f3cbEaUe3ruRkBq37FJGW39rYhAUsJm1G",
  "key16": "25GT3DNuCqzLPEkF3HoaHN7NCG1ErJ9cQa6d93Hk3wWRipQPtyKgadARwdWiEATSnzm88JjefmiNvoRVedBqf3Me",
  "key17": "2VyVqikYJDYueVUxXuR13VcY53K3R76Q294qoQK5p9DPvTokerEUm7pMAMeFv5qLh4nh6iydNVrrYWaZDLmqaJX9",
  "key18": "5jqqThh7eQsFEBw6Mt4auTw8TkX5aGVq8nR3vHqwBiNw7R9fg9RBChdNjMAcYSowtbqQzBMo6tQVggsXx2p3BKYQ",
  "key19": "5aqSrPvs8yDV8BaoDNWTDSETrUdqEuMLqbg6NeqsAFfktta7zV7n11QUiYviNwVoZADdSEzWMT7emp1UudKRew5u",
  "key20": "5mG2YjcB7PCd7DN68T5PCQn9S6ANJX3aqGiiFq7PK1Mm61PouNWY2wNWpAmx3HXR9JTtmegryUajV6qxCEeKNLFa",
  "key21": "2nkZT3D6X9XCB8GYPNdPREFzcvHGLhmruBA3qmy9LgCAPtHt5VbXKaSJgjjYrfWVa5MvyTCEtftRXndpWKeL9kWw",
  "key22": "583XhwRufpTRF7CndEutQCwiiNBnJQVnRF8USXHhYNba19m6UE5yym5NFsfPPLXcoSDRNJ672uEyXgV4yHh2SxCh",
  "key23": "3Vmzi1tcxwqJiMkw7QKJnxqgLDDHWSQeRW5oKaBByEtzqwtE25ZdtpBqXTTAbp1CnufDKHTyEXps7RDoQJeM5Ldk",
  "key24": "3GwGEerC8EvVMWLdm68sLe4dc3zL2JMeM53eAu8drdGkTXDnE1MbczamsFKJmGzoAjon7vZebVMkKeStdNXp7HKW",
  "key25": "2Z5pf9qwGJTfwatb2FdjFdWyPH2KbF9Qu5Q1fDTPPWE1rnoE39vWZdLPqEqoQHWEdW1aqMsnz2ZMiraEBdez4nE4",
  "key26": "5DhU2cWQ7gjbRremVcwoA4PrcZm7jdNt6VpMdkWRoCq6Ruq6FE4oAHUrCFgcEqbMdEhfimstpqZ7AGqouFgHbpFi",
  "key27": "4TP3sJE82BaidZn5gL26KC47KPpSMBKwzms7dJtuzSgmgpMoejoMSCBhNgpvY5zhXr9Z5sSWMqbv7seYyWeMQVeU",
  "key28": "3paTjnAWqEyrvwE7QAmYxxPnEWVF4ULkFCnbt8qNKGLxtiLuDsrL9eZVPpSsYXnmVHqK3TFFoUCeabwfqNoxdQus",
  "key29": "262RLPJwNJAfKgvUEB8WoN3wvpaepoGV52o1TckPEdM1jYkusEjY5AqEcbGcuE4Lw4jmop22rMq7fKDM3hAkYnLh",
  "key30": "2dxnFF4TnqUvpP1Ubm2KE696usMcgvNgnKZGyiqS2ivQgsTG9fBD81XdCVnixQ5z3BK5Cwmvwy2zti2RbhAjc7p8",
  "key31": "4UrejLW6iSEyd1ASL3TTMFF7QbWEP29So5mdRAMzDCn72snmkxWMK7AcaGPExje6ns2EYrb1XSBxJschymD4Wima",
  "key32": "42z43DPmqTt2GdGgdtWTrhMz1KLrhVxrhbm8itpLogowVUgs4XBCxmVBeimSALvVnGwtRcjfioS6JXmnNtcRRdEE",
  "key33": "4D2YzkgZRW5NtbYbtDnRqT4BwcCQuuCtwewez8aWzythRgZXzvmFibkexPn4mHmDcPrYeDWLndtjTuwRFbXJohAu",
  "key34": "72ZCNXxzrdGtJAPqbxpV8p7uAZ9mUXBFrhiTnNLgrPZpJJQZ1UtebMh3Wy79zBXjG6SsZnJKkzGWGR9Z2Bna8Gz",
  "key35": "2B9wv7tpJK3votXEUUkWpEmCzBRMuW7h8gzKGDRKEUahXqxE9uBNm9NktLxpMHV4yL9w9zTEzsi8QZCT2N64f6Cq",
  "key36": "3ZLnV1pefPmAgh3Uxd4v3fu62nQ7KHwBqkEyyE7HzLLkhHo4Fd1tzAkVnCqid4rvKKg626zmb9eXNSkNNckHCphE",
  "key37": "5g5Vz8wyS6zNPt2S4EqazzELM9E7Z4KS8YGP7zc8Hju5vpJoaDmTActN5DAN4y93NYaK3bmU5Y5zBo7JL66DQYsk",
  "key38": "2Rryhwhj2joTEmUkft7MJStKK6AaZsUT8wyBcnqEZEV28uCMG6umWYu3MVtxTyev3Agkatuev6BeLh8V5kbmY1md",
  "key39": "2oDGFxcpcA9cSmnF4frq5uGBDZTSKFPHpjwbe3M3wuEK29fi54wPJrn94UxyD3FjU2YPP35seeaoHxNRYGN4zac1",
  "key40": "3iZgptGhGXkJq7g8RRBJfSKzPReY6Qak8VQiYjPi7mKaivmvEe8947T9vxKKKLu7kQVsRBrU6TCsUeazFzbcNCQn",
  "key41": "2z9ZKNeFv1qZVH2eZ47US5JeHXYQk29oDEQW3Qw41dyiFohrfQx3Yh8haL2oHik598scy3hDLmneQmegbRsydsMb",
  "key42": "2d7u4xbEijJsG3HLkA8A9JYAV9tXWkvhJEnXDhf46bAyW6wtJ16uGBYDyhkTvrBC9SsgDqDeoJ9KYCxHny4Ng9WB",
  "key43": "bYnqvKDNccmJHRw4wkDar46RJQoASztHg9wxVCVa1QCTiyDreRfBApScwh58kZDj6WuSTiKmidWeEm2oDzzwYqi",
  "key44": "5K5cHb1ABZCED5gPma9F2X4yuArzB7HQQGmJkXQZ2s9GCczv6gAFH8CYRyQrZtxrhMcDgWArxQU7kWnzka8X7sSR",
  "key45": "5Evg1Q5eLLFxNMNv5D7cuA7yAFQyhYbYx11r4aCkJBHC9wMyVAUW1uaQExgRkG1Ca9QkPV7bmg145TKMbm3aEvpi",
  "key46": "2JvWj7DVsaAMyLB4BJrrP9CKeZBXDF8nV923SZkF1VbXbnziCgk8rbEajHNknrXUXTRtVDPMMh62AVhV7B4umhiq"
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
