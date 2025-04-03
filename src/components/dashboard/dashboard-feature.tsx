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
    "2MnnU2YN6cejjpYpDS2rRmMfnfbaebk8axYLM2s2oqZ8vAn4A1fg9XP6s8t7uGixu44FaJTqUsDpmfVMiJ99EnbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SygJJUMYutb9K64WZJ3HGorgtpMqGaGXKX885yskHVDYvwA3bDAQW1LU8iPEXw6L88rJWEv7Wboi44er92pmxbo",
  "key1": "2gfFdhuDWWbYRMDZ5JjwVPyPpmi5rgzjMAnMpkHRwQ6wgqJZeAYupLuAmCH2tCfzgHBbNzX2NM6TAHmsBKDSsnz3",
  "key2": "H2y6dhzGZaGFxM9GF7QXroiq3sDeRV1YHJQYxPVDKFXsV5geCYoDNaUccNhQHuCZkjGgqbuuUEjqWQ5CZPSQqgw",
  "key3": "21e3Ld9FfWds2JgwRAzA8cpRqa3EyGqq3KN89DDQ5tvF9zyTvPPLqf7kVFFVtGLVBjXAnA2r52kTNUtnzyddB8gn",
  "key4": "2yRfBGAxwpxdStMSdTo1Qc1o9338wC7oZN3YH5nMx95vnZoueUXULKhQqVbtT8vdR4TU1AyDtJxNUhFNcKTv5Uip",
  "key5": "55J7uMz5uEHHXXoP3eLJ5XHy6i3FkwcQHvDMsLj9n5ThFTdVbF6h6nyyJS9V4iU1yLusryqzg8kTaeUawe5JyndG",
  "key6": "32KYZs5jnEeQTLSZeAjcfgPbKsnSXtYqfmewwF6f4KwNZomeT9Qdy1KiUygWGaGwwJxgaWAWgPiLQHHKkzb1ne5N",
  "key7": "sYzgfkoteaWFmvPkDCqaVPCntLxgnwGW7aVgocSFgexMegjKmAPgkiQSBYCJkYQFpHrEitS6GMbganqgpP4cpkg",
  "key8": "2z2rmUUUAz2GVNFJM7xhzvoFDJbcS13H9aFJXrJ6pUCKiTf4vMHo6Y7E6GsFszyXXRLNy4ATR5PwLhgu3hVNUZWX",
  "key9": "64FERUwwdR6Kamxf4L56ruqjDxEMkZqD9q83s9X5iVjFZTd77S6NGiUJ88nfguKA2QdBx3GGJTzTYDrGoJJxT1ku",
  "key10": "3kCLiLg4ZWQDUJW4Xar4Q6gKoh4mjzKBBd6zQvQ4c93CLs3fatg8y5aouXPgFktFpzMoE3TpYw83F17k9d1pfcBA",
  "key11": "2xJKoAtMkRUpcuL3kdanuRvV2hBoXCsyyvgg9SWbrEBiqJ3bQu59iyprGo1PBopS8rNoxTkKC8hUFigaUVfc3wxc",
  "key12": "nvZojydmycRWZ1NiHHoWt66KKR47Zs8VE8U1z1iKGtqj371sfUeWJp6Lo3sXiJ1w8a2oA5PX7HsehTmAJ8btYtV",
  "key13": "8aumMgo8zRZneLEEbLCgMaZzzprqtBUNov5LCZN2yz54NGzm3P5nbZkhbn7JSpkCtaAy3JoJwU3KdpvFC48uPDM",
  "key14": "wtpLv4DmuYCB9Mcg7ZcvKFwAEoqVTccNuP8ijpHoRT9aR9iRHW4p2PDvRTD2cggNdq6FgpRKY31RhAdTzczN5Pa",
  "key15": "5Bonqqwi27ZUkwEyD3GjWpsZH1akHRyXYAFGMafNaEP32U6gDhH3yQbkLL5f9rhYLYiLcnTfGCmJGxn5ntzman2d",
  "key16": "2oZbUqNYMsEaoSSditPCZhD3s3vhje41w66UvLr3UnyfC62yFYkCjCCR4hkpspGPcQuBpzWbS9ugEkoaXKm7rTSY",
  "key17": "3b3hk7XuVNsKUdKaxuj9axBmzikB3BaLxtXJN1jD5saT4orkmHYYvWgwvaWo8GMNfajtvJnaWeL1yNbk9egPrUhQ",
  "key18": "Ji5isG6PcV5mtBnAY2mN1VN4vt4GW3gUo7RGatA8DCcFcf6SEHQqaC1o8eRhKaZEJnwXrbxfWiQawNueou9cUhW",
  "key19": "4RGCS7X33HB5mZRc6z9pn2yA8odrB9DvyqAMpsgWBAUvT8xKjgr3n6SErcyZKJkKwuDyyb5yzjVkBxj9EuZZ1YnA",
  "key20": "53GugEm9fKm6sAVsPx8A3Srd8tDqFgLVGYdUvRbnqWFRPfrm8hbrHmhQe3ED9SDEiv4UpGv3z2piTv2uATj8myHv",
  "key21": "2GcibUtCw3iWLxP73Fu1ktVywXxspAkR3rVCbGn7c5wvmqkK4AmDBKi8otdPq29djx6qwokfBjbjDUpyTo3vtDJP",
  "key22": "3VvpQJZWiub3PHjeHnPv9YLEJK6gA2bfBy6fu8Sb5rDNiQEiKmQXjnxgWc3mTuStW8qL4XXhzzFHnynZquQiHuRA",
  "key23": "2pUYfEEJxZL893Ark4nFGV24xSJqiDRBxueA75vKMGRevEB8cQmGSNUZkizA7NpwH8vbtQrmKU4CRipuiL9mFgbX",
  "key24": "5Tpg4ZYHwjwXfESiLNh821r7NkLLJRbP27HevsLjPuYnvEDLsKZbefGf4rpdvnL3fUHkRPqhgeiL1NJANrSHuy4X",
  "key25": "3bFPyWF6mhMhjYiwKauYjhafUTnmE3ndJ9URjW6KiCQZEquaZD69bTUz9W6XqroN8L8ggTMY1AFo4LnLzTtJgYTj",
  "key26": "4MMsjbVdCdLQbVGMu3bgntpCpPASdT6fzUUKbPpVDtKdFz32H3uE3tCgWd8FtirE7S7eKDA9NDQR1kQZfr77L615",
  "key27": "2Yh1exjrRh3YgeiPm4zuGcwe6PMQ4DkEpu81WVysv5FLzbsXZ3vvk5FKJsxZtZs3NeALR7opA2LGH6o2a3weo3tT",
  "key28": "8yqn3wBrSeUA8j3qav43hsM4FoY59xCb5PovNmPNitnd66sPUUZs58EXeZHZWuBykwLP1hLz4AarDZhShbEWMyi",
  "key29": "mTUxjSKWt56pPPaipzMtWvbjxFwbuo4zF7ddHxe4LV4hjqiUVGKHyNhQi5A4BhfzVBwwFehsJWk7W5EGeqqM1UZ",
  "key30": "4rGSPuNLBH71LWk9FWNyjzNoDi7odK8MXHzwnqb5iVnqKTMtyH5spwA7qTeEuyAeWQosPGMcj3dsU9KuHvcEy2G4",
  "key31": "2assabvKtbPQ2T93CetqDh5kbMt86J97MmACjEGEzV6GVQdBhsFXmUh4VmSJZguBQ1tmBfEsJtQB5enV4JL2dR2N",
  "key32": "2wGjd2qKLnr4cDDsQHfUq6EUXHCJyBnxr4hgzHxsJ1tCa5fPhUrauWTS579Qtwvo332QEGra8cM5zf2f2ZJTcJzC",
  "key33": "5cYV2nW5f3TaRmrfE8M2FG2oNoMrnh9m7tZgHQauZXsCNjUpwsHpywFQzFUqXAtPyv1SrwytJ3LbaWD2mp1Q18M3",
  "key34": "3N8t69aWZwobUKsHSd9xonXmdvWDxrDg42GwMnbzhTC2yXARnDqoyxvADq7xVoX3EU15b1MvNNNvMvTCZkJTdJ3i",
  "key35": "5n5qkyeThRzHYPRHHdQ4EVdghqKFR2gLg7Cfjhg2cMUFMM3Sy1LSNuYsmhQRhHq3hiC2sLThEBtibrmtqciGe68C",
  "key36": "S9hsw6fZzMz5VgMsVF5orUJdsuAQA3Gspwjie4QsAdJmaf454iDmJAVafsQV4DtDU6UnjCntvBsA5jSghmGZUMW",
  "key37": "4c6rsMXsb2frB9biuLRhKNJwGGkGAUCa3sKxqaRb7PYjZ4hV83vn783aCHR5mTPNW99EhnmPgzcFPM7vriGvEJmC",
  "key38": "29hTgoCuFM1ia9ADXTLZWg6UuRdYXRDcJnVVd8ZbY6GvXhgCzXkpMEGQ8Bye6UksyMAd8TZyfvmYF2czjJ6wnrLS",
  "key39": "DM1KJmB4ufU6d5yJEH4kn33asYiqSd9XtZB16tfFnQU8TQyzdb7GjABURrfRedswNwfXqwVUKB7Sgwu3ZsEucSC",
  "key40": "vBBJqpjR7FSnSUgdyoCsq4pFAx12s1677T3YKM9rtnVLTPd4zN717zkTtLy5nkd8Ft3Eiwb7eowYew7JZ1njX14"
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
