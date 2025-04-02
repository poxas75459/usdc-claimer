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
    "3Hz65ohDbZBc4HRqqNw3n73W9n7kLqxAj1NnNLHWBcs16RKDGUkerKFDhoqdw4gHVn1Wk4Wq3DeZW5Winfh4GDSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43WAexWCybhWGGHZ2RTTxHLdAUPAbbzUngRxjpwENt9KyrmptowSwnDfZGZufwy672nx33t37DCkj2cqVZGH3Myb",
  "key1": "3mBnMC2bw6TniWWhbAm1vYJtnGpUy4M21kwcRi6dpMeb7JYVzTMTWYWUa43Gu9qYbFRtrxcCG5D2VEgoHxDiNXaU",
  "key2": "45QZAAcqbJNXDu9FkQQw4bG8htVTXmRwUnFyjraJPbaCQrFns3sxLfSj1h4x8KVVPuFMCoypLbbnB3XLT8cnFk82",
  "key3": "5ikP7uhFSCEvdMPe6YqrE1PEUSbQVeiMHvJVNxk1Y6rAG82V2mbMumXR9tSvbVq6EkKCSnCZppGdTobE7dxH2Wsq",
  "key4": "5dymBspwvDUMzbstKrYfESfPARrDVWXsRBEeZ9NWbvJy3VBHuELEmyHbMMxQVmjN3VAkPi5HDV21aTZWzvSotkef",
  "key5": "snp2vu962nhyFuL41qbWtcxHojbFHvrs7mkx6KcbBBcGBRU7MtbSWppUNc974LsaQpRaTWGuZrmywt2Ptq3Skkd",
  "key6": "56uQTGXsRGsdhTAkcntPTAxFFWjfj88YAvz8S2KQUPTdGB1TMNimQaVhhDby2Ge8EPjSiGQXmSDYYZpuL6pjC94f",
  "key7": "3MjKwQ7o3kkMsRAd3fPapKNNEe32oDLf1kVBytB1ZBEh1tWHoWRNA5xX4X6LcdjRXwovcEM1W38VyEQ5egsddUCt",
  "key8": "54kBubtUKXmpRQ86CakxtASsSVagST3vscLQuFcXaSXiA5bxHDhVtTUZKtSCgoc8ik4vBJqoHd1NTNuwDa9qabkM",
  "key9": "5yvioSRwsoXqf4qu4jTgnW2M25Wo8ENihiyp6y7hgxUf2WzgL3B1wY3aTbbndgQ71v9WzFz2uXvbr6woXdoqnT2R",
  "key10": "2UE21cSsgArdQ36Y9cJ7syXKwaE8DXbA8vXAn23JtjyuPdbW9E5mboLRhmpkJEQa8o4MaoboyVekp8XA2LKub5Dk",
  "key11": "EsU86piT845McCkifjNSEqyr5QFD4EAVZYTZtAYhpPqyqz2ghfpqTFBwp3WGUfwggN1pEKRBiC78BcAFHTaSHc9",
  "key12": "4UbaZ6nDJmnGR4FpejBTc5M9syurRDS92iDfZWVid5bmUhuXyDq3586igjVeg3agHUoeoiLUx4iP8yt13cYiMf9C",
  "key13": "CU1f3dfswW2KCt27yxT6VNqha1zgs7PKM1EE2FvjHkTHxE3UAD4zSRSQDJ5MF8aFWDsCdv7PUns3hMnwjbgzD97",
  "key14": "31ZjS249J9t4nAHVxH5QxLBM14tYMdFd5KeKFy85T6ASPHsZDjhVuPMX8wyaKoiqKpHmq6dVAHbJD1K9YHbWJxpo",
  "key15": "3UuRTW82LE3ieZ4irfrBaT6bizNdsdzTBhULwHUb7SNeog2BUvw6Sy1PpgLTQPN15A9CEgP4yb46kwMtdsTLNpre",
  "key16": "5KSnjA53VupZYF3pWacC49pUC4LBTXBB7vAYqxCzt16FEWzUCY5BoYoaxS93t5eYEnRxaiTE41dfsS4dQj1RBKaL",
  "key17": "2rbaqfwH69AYcKLnfpbm7qAoGrtLasGkKnAmNin1VFxAspWqWVDA8yfc6k7zBxEFNDzQuo1xCK3wbemdkCpqgzJK",
  "key18": "2mbJSQ4uDR9u9xZkzfV75hUanroKMzmibJhAy6GNphyWyx6nbbCzMPm8zRvH2nwfh9gYVxnvkMm9M6qndydwiDTp",
  "key19": "3VXoBpwzDzQ2HUEB5ZLKLXtvEPVA7akyqAYpJWqFocGEtDVL9yjoY9VeMefcun7ZfKDB1u3UffwaUfbvvXqNREki",
  "key20": "4SfkwCrjUAWTiMg9iVrN5HgjRt4W3wZF3S7q1z3L1N8dZsoHiCS5oxUHao17okScgaatpaQzX3w1dvM1Tfm9GkH6",
  "key21": "EW5J6np4EvLESibQsBW6AM1hhz58JEK7iomjNcKMkDLBm57UmBckvdxJQvMUNYdroyGw3nbbnqjMxkvKV9MP8ge",
  "key22": "5DoSsHK88CbLmxcRHFw4jxGgCtY4R7FDg9WNEKPzd8PNXn6BRpSRNARRh7Nadd2dE57nJDWP8UMF4ZjUkSdTTCbn",
  "key23": "24GqXLJZwkY6RbrFDBFTLDBL1Tp44ukJPd2sHtDcC9gaDNGevheD66JFZY9iaHEnoVYaXKrSegNSwfb4NV7r25Zn",
  "key24": "3yEjXWeqMzCinhYQ6URL4nXT2sLwrszh9w3ZbyxkjjdxsnLTCGdaGio1v1Qnite1pm6RV4gj4GUJCt7upmWi8VCt",
  "key25": "5at8FpE3NVHpSafhLGr4choBQVk98DhdMpMBn48UbQVfqxUARLfR55JuAjJGBwf1Q1KBMMXpvTEBymXmaNQmnit",
  "key26": "37L3Yo5uQVj8Q2DAWdC28aPEF59JpDdmzyhpDUVaeUj8mn9C1mbdXd2n1G3kiwKA479DFU755egZE3QLJwSaNFL9",
  "key27": "4ipzj4qQBJAF5Yb61eJHc8AMXEPsS5PSnsREYp5MKJNuyKectc8WTiXViyaihBd3t5Ad35D67ceBvDcLYHw1eg9d",
  "key28": "3huCMt7mRxKteKzadGh7kt8moqypBqxu6dSd7yDpN6MBFoLXRr9Vv1AtaT3wB8YuTqFEUeqa62FRMDKUg6CJMH2e",
  "key29": "5bx3d8ZCrXd5qzP6DqNqE2p9AgnRwt1n3EHnsWb941Tj55D33iKHNcYX4KvKia6d8cHitxSPFieanzszx2aHvzGg",
  "key30": "hxL5XsT3ZHJ7pUCnpE5QaNHCezLtkxYfW2qRAeS9fi9vobpZKwxfhgB3ddGaZvSje7ZU4KqeswaVNqzdy5kTiqx",
  "key31": "4Fy2vwespp4HwSLokTHu1mLzyWJwetUFY1e4QxCsnn3CVXPdQoMW6ikmS5V5zcTN6t546rLv7gNP9AwdJwyBFSwQ",
  "key32": "46snMwsTR7yXpJZniQgAcTQ1mxM3nHWDuLwNVSKLz2MjsDwaMj9sDkozpihHkK9gGzaS3gjnhk7uAFkP7QHBSjnW",
  "key33": "5vBNeGiDhzpUfAMT9PQH2RgSNy7cyj4VtTEvwmcjQgYA4ZnMUyDa4WK2X4Va3zMatvSia7ZukBn4oUJjxwbbCp7X",
  "key34": "n14FNms5B3x7xdU7dMHL18LiZGzKzhrp2opSXPq2DKUDnLKqn6rRTg6gbAZrNCrvZheLnNsrqjCe2qN3R9u2Bfd"
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
