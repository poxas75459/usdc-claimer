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
    "58q5ofbmEeQjougehWu2JfxLTGoQk34V4isVy1CUyjr9MnCAN7XGKcYtHGuQRZkTCgZsp3jSjwr2mwEUFMCxZhVp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHBi3JE2wMgFfUsdbWRjabgT4vP7QRQjiPacMQHGU7DjamsDkmszGheq9tvaoChxszSjS3KeScEzaekZ589jDcu",
  "key1": "24pAWfJzi1w8gPNHYWLAqXuWeLWjwg1dCtfJVNgDQYAcrGLZQYArGG4cPjSndeBeQyjuEKW3hGzW8Qwps774zgFJ",
  "key2": "2VqemDXeajJ72WK9P2nBBvFC7iSGW5Pck93ToEoUAvsYALjyPHGuvpuXfhL9UDv95gafumKHtAYmP27jsBMyDozo",
  "key3": "LqoJiH32A4NUbvG51FyybWFM7T1gi97bN3X3WTyaDa8Vn79gzodx8quUeVVsdDtsz4q9FXWRzWZJetJmBgq4cLM",
  "key4": "3T1kKhKyzLEhYC8pnvKPXuLMUCvpdw8y7oM19rvrs7xtB7nMSZZNVMwPBAjnm2UDpvrrdB9aonupnszw1kX6AwwW",
  "key5": "3sW2LMRniutBMgoDjRS2c5RjG6N2TuPYaMS31VDeWuP9Btk2sMwsgDxhFM3qspth5AM96b6E5Yv8tCG8CheLKbxc",
  "key6": "2yCbFo5gRnUd1Fmrjpu5iTDNiixJvjWgwxgJz2ZXEkWoBebMUd3waBeVWKkPc2LeBq7iCK1LtxU1Pt8m2dYmXgRy",
  "key7": "NrAppysEDz7pyy1YDZp4cArP7L7gxvksTePQUTHaEz53hmBjmHj6jNHdCWqiBuow3KVcd1cEfHGRjS18fUW4L33",
  "key8": "FRE3g2yWzZA2Tp9Ej8jHaPtn4Wnb8axg7cbfKWZh7YbzivqsXk5H1xK9EQWtJRg6XB9xmEnUvvYJJUEt2wV7JcW",
  "key9": "2iK3yCq62EzLmfbkHoreKh4TzRQ5U3CtbTqNqRpo6euLoXAbTrSefbTfCyQQkTtsvpYDrT1kjJ1e31XghkfGeHgh",
  "key10": "41NfvSbJvR3FjHAqVcVQsT7A5DpBJwcQQuU3j6ciuMqMQFCy6po7oXvttV9pJ31xKic8rgxY6ma4aapqcQ41N63U",
  "key11": "3M518uBfcvQLq7XecgAfnxM78YVfPnQpEcCNzspu8UuyYd5QVHwATPbQwYdyjQR3iAKBttPnm2yqT8MVZ2iFY1fP",
  "key12": "4KzWy85FRCvQv7cLs6ExMFsLXZFn1vGD1Vi5THGv9vUJJJtTvSiZKp78hahGZsaAdoiVgNRCqYch7D6HX7HBxEf3",
  "key13": "4pmtjRPDqKv7Y9Xmh9YUbs1LhtQkZ2EQkkAeZiv9v57iGQhQqu2TfEv9WWL9VXjWgU4YJrXZJNyfeoKp12zVGV5J",
  "key14": "zCjVtDRCHLRrmkbPEMCnxGvmqVZ5DwRPNmwquDZHad2uERQaEoyutsY6FMENKsrYiCgAKAk8SVtyNPYbVvsqKEt",
  "key15": "3bkrMRpVd3gdhqfpg1g9j2v3AZH7CoAtPwqR8akQHNTqhq1haNr55dfjyFBVK4dMPFU1rvWsnLVk3KTZfUY7R4kC",
  "key16": "5u8Sfqmp8TbDQxAEuhVcaBgNBwNU9gDcDjjNPmhjgiSPZTTcpYoTMAZRWevB8FY4e37MFXuQJVapj18ouHgXmfZv",
  "key17": "55gQupFJkM55GRu1HaLez2HdLK6gByUzbwb7Paq7QXPaLHQpfB13hk3r6516We6NGZyvZv1P2qbLaN62YtSXKaHj",
  "key18": "3jucvQvAWzfTk1WaM2ph3fs6B2vi4ruYyY4QJvJRpj53RwYoik7mBmhppsFs3iSEMcsjBs2VK2hUN353aytYLwnF",
  "key19": "chTyJFs2VD1WQ4XARw7XxUeF6RmHzP6hcTSRJSf3ivv7hC7SBXoJRh5uGvA6mjkPMMgKCv7BTBtJeut7d9r6xKh",
  "key20": "2r78kJPwHm6c6zMzqpS9Y4cEdMgrLcGnV3Rh9km76AoAP8QLgTKhtZvr65n2EpECEJtPNAoq8anCgRMc1W5EpSTm",
  "key21": "3s1fRTtkaM4rGLqaemKYzAPzFAXZ3EyyHNm8J3YAfXyp93LvLXLDh3byfyDHdLFFLWS9WT2edw3ZK4G6PSUU8hep",
  "key22": "2sDEaxbt5hj4GZFAZzgM2g1atoZUfq3R3rkpwhRCnFEZYDhRvHbcuHHoWmc3bf5gdDr5kaEJVKLeWscDVakSz1nw",
  "key23": "5BcRYiD54A6e7giXYD2f8pAXHn9NM9Rw2rniHXWFU2hfewmLb2jF7ZnCsGe9sjSo32scLqaABi96BHhhjJe8x4vw",
  "key24": "2N2ANoz5v1ET9RuAQFaEsNGsHr38g2hDiRiyeBA1rc5bXFUWw4BvcYLgvn7DVZUfSWdC2iqSBFiaScgkYuwHTAgx",
  "key25": "64MpNVRDPkLbjZww1a6U5NjkZYxnWtg17ceMkVpDnpMK54vCVVKCHjGgKNPsebNarPKpB4Z9sKxDGrzmYPgCe8qv",
  "key26": "47SDUbyAPBxS1xZ1qWe3HMm2BLCfHGG44r78SBBkDZsA7vU2kYQfZmekCp9TwdVxF12q2RErpJTBb4iYqwo3Xnt9",
  "key27": "4pcr3PKxk3g6J6deTaycDrrqnrpFxpZY1RrcgLdTg52rMeafuCcMZKbR7wwMjsJj4rXUkadV63yvv6GPt3jTzRSw",
  "key28": "23MtsQpUKorAt3aH1HvuSd1f5riVjqRnQvo4jnYSPc49cVovXYwH1uS5NLsXuAGxBcMhQqjA3MiLM9rvoo9SWj6g",
  "key29": "4QJURZh4SWaofmk78qei8MWKy3GWMQjdsAJMvpXESNxnZ1fRAQ5VH7TcricW4kXoN9qAshsCRZ5rb4dZwTXGBcjR",
  "key30": "4E5kG5JjCk2RsbTbTkLYBRpFD39nULUnigmCqizcWqLcGGNa8AEX9oZEogv22rfZTtsL442jYvrf4KUvwx2Rw9aP",
  "key31": "5UupGNhssQvBadPPN6j2FmkGrxzn6Ccx8XNykciWNpkmQw1pQcxXbids874vfoAEm2PJuPL462db6pyrySs5F7Z3",
  "key32": "2gs13JGz4QazqddV4iCoNsPatb6c1WtTzaSkQA5cKT7dMDLC153vw6HVKHK12doeZAeKnKHvTLa6mPZmYWT6pjnQ",
  "key33": "2uYAiiYFTn5XbHupJTp2GJSXjpfUgd7keiq4ZYURBUM88VED9PrVvu1VM3hhTyvUYEx4AZs8jrR1uo1MmhZkeWU4",
  "key34": "64SBkDPzLEV1ApEVTNzNmZEQYaj2U9RzuyKvE1XnD2h4E7jh9EGsmJZs6Yeo2mBBs7hc68byynCSfykd217JyWrV",
  "key35": "3Sjm4avC72KcTx5JAXmh5d4XVr72oFUCaGHAEaWnZu4N94tY28SRyEcRb5ozcTgwU3LJeeuxh4gv3H96d9UGQMAu",
  "key36": "41QmYS8ZsrusAsdUA5mqQXYvB5H2i3Vn19d59ie6Eg3tCEb1dTBMvMDFewhrSmJXq4PcHGKeNETiTFWrFFQFofQb",
  "key37": "3BG6KYYASnm9R7g3SPHoLgweuugZSP99P8T2eeivZqBgKa4ysaiphHmsccGpzgmCdWawm8arEr3QTazXoTUGtPzK",
  "key38": "3TjH2iyW3ZCrcbpHvw62XrvJvPqbxBKv2q4KLfWfeEtrW8Kaj49pS8t2EMKNCszt6wDkny9YU1TqvGY8MofAJPrw",
  "key39": "3wBJQL6D5G3HNqzQscYDzTyzzVVj9pF3tVWyVPqtDdEwhZ8Ubi7qGMMn5p6XnJ7DnXoXe26umFC1sv4XLJQSKD86",
  "key40": "63zfDjHbuPgRgC21y5rvLJucnnSmBmxSDx3ffQTCfzkv26WqZ3bUUKGvq2HXzJGiGnJxGaLmRVeJxANXPEGq9zdd",
  "key41": "2WsZdHvYkLHfo1fY2Uwxp6q1XdtnqbMiwz28tFVar9XkvPhCTaX8qotmQBPybxQJrryLj81N3SvJ42Er6fCaohmG"
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
