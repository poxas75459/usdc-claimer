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
    "fxCdeEf9e3B9hcj45v2DA81zdYGgf4J47hUZc7PYMmssJQ1NdpyWSpxNCBeG41tLwEJNutyhQuQeFK26F3ZekZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcY4Ppm1PEDfNNkQpcPeyvLZaBATTAVBC1yAmyk5wPg1U2Rujvg3BZp7FKdjhj2e6mQkMXpf4gudM3YhznK65ju",
  "key1": "5FrWVH28DcWGiHyGtKibgX7ganE6qtj4M26mnP4Q3vmUNEs2ZaVeGWDAufseaTaWdyAcP8934nsJ1qwr85hEuh3E",
  "key2": "64qPg35B2GnB6g6sggbjGiHCmJyUQTWkmeiVCuVGWfqQNCQEhRLTLWhZ9qCsoxdmcRHJq4GX8kDND5npUVaCNLTq",
  "key3": "5Az8DdTzsh8yPC9baQvHyr9XQUsQegwxh28CC2aerC31cezEGCsNvSNfi1JhQ4XHeDWRtTwnbZUfQAmseEF6bpQ2",
  "key4": "43xNFjFVnX61Qx9trDVjEVQJkvTBmi6Be5znDkekKWnQE9swEphDGpVkCPCc4XPgFR41wjTvmm4DSa48ukjgYRbT",
  "key5": "4xk9hLFqErsqknuaozggKvkb4UcVqmFGB8bdRpDtxzhkvH97n7mpsgvoSk7pFZmTmhy6btp8JFuc1LXVwSsTr25q",
  "key6": "39zdm7Y2VUUGNMPxrhrDr6vZfpkAwCHpmLvVvu1i339LBfizHnJtARYUbcAWWYtn5oDmPYfD4651BxYYabcD9crz",
  "key7": "23ypXqtv4ZDfKRMCKN4xRqUEpuXGyw4U5aiNDnoA5torJA15FDYXQTWbA7gvCfewqmnr1w3X2g5Ym9WH89N5jRi4",
  "key8": "5oiiKNPX5JvaYyAaZV9SjignMLdxLfmYKSErv3YJFreuaRmeZWB75mMDjAcgYx4H4KomJZZ2foBxJJ7UKYDkyUz7",
  "key9": "zsY6osJ7KBkkh9DFgZnqz1yZPkEYRbEo7v8tf5XLeuBGDAK1XxWajtVeUe1753x44x5BXc7QeYqwZXUauJUyNFA",
  "key10": "5Yg3kPQ36UvHKNzqmtXKnAWcGAB8Wr8keG673gvE2scQLFR1bzioVde57xa6GDAnUH5yKY9uWv44wn9tYFrU3VEk",
  "key11": "9CkiPDTMk5AoMgLxyRRr1bPFQF8n26a7nNtV4du7Bs6pn6jEhVraz7BBTH7sNbcuh4VnYDnVjiK35sYuPya74Yk",
  "key12": "5kjKKUeKP9aTbePgiv96NuTXhvbtfKt9KR8Xm4nMLCHshKaTRBt8qmNmRvNQ6msNr7V3o4q7QUKemWVZ5zVPxYqM",
  "key13": "5uVtxTJpVq2UKXRFrEnn1GLQY1a8diDtUjy1V2BwdSZfmMrdaAAz3rx4QtQnfyRGHotJ3Xqu9Rs8gJNyBCLqDdTG",
  "key14": "3T2tpTKxV7yBAKmQbX5Y3cG4qRKLZCYHgymbB1Z78Ci3u5M8A162LujZvPYNAL2UkciiRyT72EBH63aQF2VRENoJ",
  "key15": "33NnvCKju8CAUwdPu9LNehPn5ajYkPDbJ1E3HoNjvoDwAkbcadJSNqWaJssrqv4xKhieMuY1k287Ea8qpVnH6YT",
  "key16": "5p6us9f2edQ4QBzu7Q8mVwsVKffKdYW8NRx59TpupZVtaAW7YHGAex4xqoCKqinhHYcTQHwH8tA7fhMNVKYdrzaQ",
  "key17": "Uh1UC7o25dtGP3n4t4EPWdMrqcrN3yFhBmQBPwaUmWmf6cGDydDc5BKxhypCLk9pUYeioKyUaD9U7YPqnqexCpT",
  "key18": "4ncwgU31CL8swstDLohkRs4PSRregf61PoBtiXnCF1tegnBpzzC6aFDpoYL8xuwe6GqhWonYRJhm1LfSxYs4PsTy",
  "key19": "3KaDHZstc1yg61zWwKjUiyZrDTYMKseaoxftzUrqTKMiGNPnVy1yAbvdnqmMENmt8fJrHXjb4v3y5ABbLNNjZd9b",
  "key20": "48bzKCa8fqN2DVRBU2yD2FzNb6wojgunPUeC7VvAJdqbTguJ3SQyNHahYptXr1Mjm2nysr4DH8rxBqW65Xu2g58U",
  "key21": "5FGmVGih1TqvUggAV39gY9drXPMqpBziy7qwDJDedEJyU8Y8TaGAfuQb46b5T9LgfY2pbvkoHy5fCqWsbCFGpGvp",
  "key22": "448uHfS8WgsuQsZQisDB7fQnQFpNRs1cekPu5EwY8BRPYkAPaJCDWZ6MD2HM8onCDRwdGH1FdTdSmtrekVB6qonN",
  "key23": "MqoiVCmmofVZcNTya62XyqRKNrrqwELAQkrpypc7Tw5h8KyrcgmwSyHhMCkevWwMCCX2g84fPGsojHHycJFrHV3",
  "key24": "4mQT4qCCMMNpfmJHem7qzVbCUMrbwuSoiyHQa7JiCrcEjuBVv67AeU1EbzFm3Th6S5kXxpgMY9NZPuSJJhMpdm2r",
  "key25": "3d9E2Wp3BUmXonvsdi4Uoo6BEb7w1GNTijt6ix6syvBL4eSYJh88oPqDAeN5pVFJBjXV2wU5x2X4uHUB8PaHwNXw",
  "key26": "5YBAm11URqUZGYum9buXCYPAy79E2y6RF7TQkVWyiYeuvFdnyWpgR3kJRr8GPeJC85tDRH2eV3frUhK9n9iYUrvB",
  "key27": "3Ef3AWxSfCRTiDM49psAfnCJD8P2sjq6GtqUHUzQrZEbq11ggumvzqFX89o8jszTyYfwZcTR68tix8zg9uw1Wb4W",
  "key28": "5YaHqaTHhhBg33KLXDjkAfcDt7Sjthejt5Tuu46xwGJm9UMAuXvCBgL7PUGEYZBuuYDW25fq9456EoH9N7BLZ5A9",
  "key29": "5nqYrfYwx8j4Q41xQY7xgpK3DVo2cctfoXXu2AkwAuuUiiHKhnH1jCYF6n1JmSQRCHfqTWYu493nnpPw58pa5sTX",
  "key30": "2C4dP28YhKxZUtDAzhFLvFKUxeTzwgbnhCo6MZySrjKmCBLNjRC5TZxhrAMw1ipHRrkEV5nWMpWaUciKUMiwMrtt",
  "key31": "2QLHun3HUa8nvrDyAU6rTFxApoq5WjTgjsBh96LS4ebKZKmQ9Nrd7iqHAG6eiVR8taq4RLi9CEYXT4h99tn4LHT1",
  "key32": "35cEJ9PyaUgsfqL7P3gvmpjT71ACLVkSUhN42i1aFvJvxpPww332SkewjjgQqRBM8EM84MtYtR39oUH8CYf8Xb3N",
  "key33": "3raareH8vLYXUJqQLApUpFfRcPYVjuivdLpFnmMqdWqX28Nbha3A2RfKrGo3qE9NKRkunXHBvkKesnCQGvuD4C5t",
  "key34": "2ZvhsT4VmEC2FLziayP2AVNvT2WP1WJEvrdrrAyeQmEWpfks7DmUoeTxPZ1LYcrY7pouRGUUXJ3X9rCSiikqWjPP",
  "key35": "3N1iPPCj7bjmcmEPdj8wisuiR7bLfGapahCB3fAkPRyb8SigoA3U2ivhm24hAYDQPfiNAN791BNeWTVW7w4EaR75",
  "key36": "4FY9RXqasDk6LnEXiF52YgHvKHr42vB3vmpjUFzYH1HeVffykdxiqQ4nB86fxj9m8GKaott8V4XrdDLUBE8bXXEt",
  "key37": "o341S7RTsVDP5ERwajACdwnoSSMAQ1xMkbcPjH5kQaEAtc8vw74AUznbNmYYDagkxbrcaTSmtn15iaq922cnpNA",
  "key38": "2VPnoBxKQEzU3mdh1AffTveCczGPmTi4jizWeRm4gTE9RjL7KjpkrKg8he4SmHTdhXUzakQfdxMymsbwi78cQJ2S",
  "key39": "Mo9TRMyB589hb5BA7TrMM5L8Z1foCdftVL5JVRjdsotbbHUGS7FPkQJTZLn1GcmwvEujpwQLwhjrBcj6PU7d2CJ"
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
