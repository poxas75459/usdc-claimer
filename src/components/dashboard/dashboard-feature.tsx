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
    "5iuHfYfCD9DqgQNTgroL9tz8zKUjEPLrgq5upKSwyNXavRBkft6bVhomk9YRWGj8RW4wFbuoDJ2kgufZAsN4Drpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JF5sGNvAi9M9hsy2kTQxVmiS6taCz8gjpZKaqP5VCznhcEG3KepyW61AGgghvMnRB8cfhrLqvWyiN4vMTpe6bxv",
  "key1": "3EWoKhd9B7EfdGpZxu92g2KSTwFTMPhcTgQ2s1VGLBme55A8qZhnKeD5y1TT2m8ZRizZMwjqjKGSKtgAnoiGNnFM",
  "key2": "Ysh1oFbeZU2A7vghrs5nN8dN6L1J2KAbYQ4SwJKHn83Q7rK9xu2YrpiPyJQE61DD9PwrrFSZsrgjF4BbZnDT5pM",
  "key3": "4V1aC8QkgxYcGjMD4Hc7wc7hmPrTCorcTbhGccnYiQSyn79MRYcJrrcdrHL3xArN9PnxJQA4yDgKqTTMRDtxhiG7",
  "key4": "3NqgMZVFSR3xSyU5QFrXJGFE78JAfJsbirEBW3mTVgtqG3ZLAS2LsDRLoWXYRqDTMCE7ZH3Pn64snjcvsJm48EfW",
  "key5": "33xuRrQsogKaH63h418mtizcbgo7PiHiH6cF7UPmYBZ9AuZY2EasbCpAbYF4zeZcrJ1eagYztaypstaMQGRmMoNi",
  "key6": "5hssPPe54dPt6bUNzjMEPGiUSCX94eqqEabQhsiscCg5WWCu8kKyDMTfwNheaRA6WoyfpCaXHxLChYf1tRxPkg5j",
  "key7": "4nTBkmtLwWBPfYsaJnRwPsPx5KfnSJ9x2KjWXJeeerAfTh6o2WMXqSEbw4YtNvnj1EYTWiit1HQcpXae718jXSx4",
  "key8": "5t8SyGpAyzZ83aqTj7mAPmhqTgk6apYsQddAHa4v1jteFbyuxaqXW528twfE9sr5fsGGk4YYob2JjazKXLEwhaBt",
  "key9": "2fL1eQveVt3hwgJTpAhFqzRMUNkjHpxj9UiUnhSSwLmH9NRkDkMyfoZU5L45YMjnUESKw1Uq1DxH3Wf1KQ8g2fio",
  "key10": "5enZeM9baWM7K5BXnbYDSbAd2vwdmNQYPLvUKHzcrX6H7UhgLDtHVn9tvghhdVyyTCQrrwoSq6UnvgxkEndkFbbm",
  "key11": "569nnneHjk37eGeC2Hr2pzHsBZ9kEGxcEqoGocEd3r86aBPZzihAJH3AQDQJ8qgDtvKEZGbokvGz99votG5D7ATV",
  "key12": "jpPwgVzKWcwptPAM5Mn6tUo8efA4GZu8HEFRTMT7rziToxZ1aUKFotsqEgttykRBCWADighmhEH9hF1tLRKwDqC",
  "key13": "X35rtPqtHB5T4VLhcffiJLgz7ysMdRicXHiJD8H2BfGwZ55wB3YNWu7J2s6UEPT8be574srMkr18NUqfGGHQaYd",
  "key14": "5MFcB2SriVxSTyuiHt7BNjP7hvAAceC1aoR6x1iEvpLZvBXVaKoCTNZK6Rjec4s4QL3WEjysE5QQYGHcyQe7cK8w",
  "key15": "2onnt33XAZEnK7DFHvZnh8vzp16taT3hsFt6dzDLnG1wDSGTn1p1Wq1mkhb3td1AEvZBrs9fsqC38fC92tu5EGeG",
  "key16": "4VJANpm5zXMBj2qEzwTCMYgU1PEWzhjf8X4PDKbNS9oG5FfLFvUoRoWxp4veVGJsSBs9PqNRTPDcAEy1MeNmCCRt",
  "key17": "4is4EiZwXZWr9oyXnSGUYt2qNVLPquo4NuNPNu4MGR5ejZnkRkR9cNgYmeUVqXw9xb5e8DUEMVtSsd8RVvH1Mg6E",
  "key18": "QvE8NT5ae6LfRHM8DuYRn7MWtG9gVV8Cyfuh4Y2GY5cVFWcAgE8VuUg6ymevMNu2gDcCCFHQmPdmQcqg8qtMgrG",
  "key19": "45hfs685GP3GMX4Bek52pE2BN6Brsq1ffKqMgcL1DUhD3W3WMndWbNj1mtqVFZcvf3gzH8Z7Rw2WmXqo6Ydcg37R",
  "key20": "2o9DDpKS2T4SyLt1AbRva7jkJFG5eGbggGjnh8oK34htRhGov4XjTDtphJcfBCYkd4KuC3E6L25UbdpKsdEZQkr1",
  "key21": "2dj9xsbZBh4D87wduXGPckHevUwQ6L4BHnCS1tk7e2knhrWu5ekp7UAsVwPraGmJk2kMnsnQeSbq7xj1WZqnS97t",
  "key22": "raAgJ6fjj29fYSjv4Ui3wC68DUbFQG32UvsR3ks7EbG8i9RoV4h6sZLfxZttSmpy5JhsUZSFEJ71wMCV1EBkNPx",
  "key23": "2p6zL7f7nnKFiXyE6dWoDidNYhZeY48RxehhgzfDAP7bCVCo6WWY7EgaXJgtKAGU5vhZy68zPfn8xcsaSi5Hp9Ro",
  "key24": "4Nau4wJP2jKvECP1PcPGGWyh76pMqRU6Ac5uy1EBfrYfE9wXYUerrDca3LREEmsFPTnaSrNqWTwYrfbH55gpUXog",
  "key25": "c3Et7rHWEFSBAEj8aFiWvMSeANeHeqspyUxwNFp5JCaKDtkLSCKLTyL1TGgjxsvr4yWR7MWpHwXTN1LHnrvEohb",
  "key26": "2f783bekCMwrF7XzaaHSeUkdVRKpnH5ApXiP5gieHwoZVmzCGXmTnLLojqRYR6RKVPATE7Rtc4YzGpkHRpxTeDh9",
  "key27": "49i5wWuyeCgMk3JHgjCeNBgxo8nbMCsmJmpV9AXEWMVY1t7KWruoanSZdcaqFt4TR6RX8Kz9Es9YNsLiqB7z2kSq",
  "key28": "5X2YgsdzRbK8QcuiDQAF28ax5YEDyzzbsP3xsmi1WHX9EymaRCQbrinYPCNPspeAmAEmf5GXkvi3dZ1VkpWuj6k1",
  "key29": "46aPJT83n8iBMGCZPCQG8QKXnVJqLvEsKgyYojoyuHmoeGpWJYmjZzEpEmjnNYjDkWjFtpUvedroDifnZpeVqdh9",
  "key30": "PLBmVUKWsQt6J4hR8eaFqxAf1HeBg8FgonNYcH6dtZ62UQDdUpyN8c8wTZF1w3ZzYcfsUoPqbS7SpcaTRz35q7E",
  "key31": "43xqoJmMX8eeZEmoZzu3rrFUxC4xzuR6szAUFoA52uvoq2kwEmMPfWnPATGZd4wA7NuADZS2XaWEXwwbLtnY45ET",
  "key32": "3GMGMYnvKkznQZbKKB3uuYwA82qQwKGR92piKaLBKgPtn1KJn9DWpEUnzGBi7pxnSEaFHgSBEDn8XNTwwh5KXWDf",
  "key33": "dscHaFSD2679V3VgbHhqTRmhTw8PnvdruTAq7HoJEdZ3zMXEoxm42KwsaKWi4PmXXYj8GDQ43dKNBtx8SGpqv8o",
  "key34": "3ESNaoT1UCz4sUvRLCHB32Rjd415yED2vrMthjeQLWfZUiMoETDxpGVRwFB2GVkyEL3kiuvCrp9hRuNEoT2e8aq9",
  "key35": "XvApa55uG3yj9qUoacsj3b7q8qCdtwMzV8iY94tNYUqRzp4UsmPYbhY4re6DYEDGy2QdmjRZ4ktnzdf8t64bktq",
  "key36": "4YTKC26ALf6zEjqBZ13SQXYWRUpTj6hmfmZtE4UWKUp1aqBtPDjZTruJPTGJ8GeBrP86Cw8m5cdfk7MhVDD4DQeg",
  "key37": "5Mqsjjjt3ej1ej94HD3ENJKrsipUa7GpEUtWBszTxj7adALiJrkUQjAotA8bH3u68MK2pb5pb6CCmRy5ai1p8Rei",
  "key38": "327DMXFGH6V8LSyS8GhDSknJc3VwG74bbqJrVX4V6EpKG9xDeZtnVBHPWCdGXZGypwrTvS3p2nVC99tC3PsMdM3f",
  "key39": "2FvME7GqKoMJSExLmAQWhSoTtk7hShFvLCuYK7WTFftvztEiNkhjXktzCMzwUmdrFNtH4NYnxHytmsC3VVCKcfQP",
  "key40": "65djevLf2UTv6pSX1CwiEgJjERhtbuZcxcKHhkxJyKsU4uTrrVz64YmPhhSDiGbcVQ4SPdqAXLtMqCfpMAsaJQTt"
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
