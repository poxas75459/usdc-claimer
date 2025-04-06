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
    "61CNchyyoUnejomt8ERqj1EdbSeQyLVeei9c7SBZeTE6NfgHd11HX9Tkq7eF3JvqPY6MhmaoWWTDxk1dumNZNsWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JfqXHzc9KDuxP9U5XtXp8Zp3HqzPFRnhMkV13D7vBHUqCq87CpKW2d3PrzjYWnXMrGwZesdBS3enTkhyrUiGTXT",
  "key1": "4AiFAP3LUmRdvuFniztuHSuD7gDruaTnDwkWe7UKaVnk2CDatfopabhwFDzTG1uvS1BTSk1REKzEp4E1U8ZTbuZB",
  "key2": "3qCDV5ULrrbqiKHgtMqyWAPEiUseoT2t1XBxqX8M7JqcrRPhjsQR6gYZ25UNwu8DTUDkm3kzd2pAt7tijev3CTV2",
  "key3": "4rpGT5DiVZQpnKSbq6fqoGBxRpG2VGuEJyweyQodPKoFgUC8UZGfPAPVFQSnaQbYk1qerKJCxTGGJPaizbEPqFgq",
  "key4": "3s98JTPkMGFAx5bWGi9753W1u53nTXpecaqkqr7m2xQMBk2PY1U5eyWbqGAmSkdSMi3SKKt8Xw8hEdBKLhnV15V1",
  "key5": "2xcrBpWiksPfdngE5yEpQen8vBqYe1UDrmpK7BofHpnp8L7ar6NiuxxPz6LtjoHgTrTHXgQ383azzymRhACDM1Ai",
  "key6": "4VgFNAeegYMSyCPXqgzVWpwpBXbuh9qCPNNRBRRRFd2VP92K4y4AV2mGddYr12Lehc7tkgZupkVbsfNxjeSKhHUv",
  "key7": "2mhnieK8kGb772ykXAqKBCZo3tdp2iZrjefu4eg9eAPhFsVa1oHaCEHdAjRkpMTFdUz7AzSJdLwHsehtaDD15goK",
  "key8": "5hiGjUsbsPdFjZ13DZ34KMbsttaXAEccNt9DBkA7VbVjrbJN9tDsf9t3mh3Gi2pwJrBYepGn1736ebqz1EvTs4h",
  "key9": "4y42E1cZEUw4TFc5rnnBsQSLkzyMLZoVW9rGKzrCr1ZQmuWA4H9F2EB9YKK7KhFh4jMCS555QGvDzDi4CBnw3Wm7",
  "key10": "2DUx89DoBDQneB92m7FAU8YJEhaxAaEqRHKrtvQS8sMq9HyMtGPKPaGZuxpJpnv61FCZFfP6bzw8hq1UKPrX2iSt",
  "key11": "4ZrUCpbE2u9H47UXdky5TW6hrrPPXVXVvQQbrDT1iXHpcmBFCyu6MekTiqfe2Y7NmwUqJx3E1gsWfK3pMtakaV6M",
  "key12": "4zsufphumBP1jdfR83QpyVeABaGBLkG23ymGwvipjdhZ27wKywU4R8E3DeQdmGpFn2gRLJEBkGFhbdWnjktDgoEw",
  "key13": "2BjBjBygTm34L6ZWkdcqcnDoPppAZpDjTA7sfzLowtieVmaXBTZ2j4JCrHXgfQwV5KdC9d3hcCKzhxqSVQnRc86C",
  "key14": "8XECsASYTQtLeRhv49aQZcdCiUyKvcqJtjinjf57HCzjxr1MMcCS3PCRPD67S1CuKAp76C99oz7dKoWaaiYZ743",
  "key15": "54qX3MmBaKb6WdhobpB4Zh2PXfd361GZS4gjbtbYhG2fvc4ZywxyBiccenxJV1fuarmFt5EMEcfJwJY6rzviXkvS",
  "key16": "2o1cTFx6B7k3HQiAozmgnUKrGaZW2pHewnrThW8a9KmU1pFYwCxPyvXkVsYzgCaZpjpDzt3QiTDqxKoRJZmhQ2PA",
  "key17": "4odQaV4GNkdZry4XZ4zRnZgFxPxR6s5svrQqm2zHxbUnDXuHEEupgYoZebSbDkJWJHKTTBAsRbe4eXb2rsQwukRw",
  "key18": "2v9xeM9dfPrFNyJeA5r7SL132WwSWkrZzs2sWAV5i6QEf2pwp5Wq6hnBBee6JbK1EpoGBuMqYeqT2j1RQ9DG3FqQ",
  "key19": "41MUahVR79ofzNawMaNdLaNekaPQrDb4ywcNaaVZQ8aiSvWHrqVHFmVDMuk1oNoABci6nebvwRhrKw7b3XiZLmGH",
  "key20": "5aF44u9g16mUgTRAJuKrpLT1VZCaA2CeZMULR2n9ByxZ93SNHeWo6qthDZerNvYjXfYb5FPmuxLzRg29htXtbrrS",
  "key21": "54UyPSXQq7sJYJVxiuU5KYG12YQJQS1pyZQ2q8Pzyzaic35a8w5qi2hT9SSoqp684eKkH9nf5FKLzQCXRqvSBiCZ",
  "key22": "hsaNEnXoPTnfBgFPAnDCZe88CBzG52VQg7zHjcn8pfrSsUYrZNDKWPNX46Fsp8Df2ereVKx16884g5CvchL23cF",
  "key23": "5BsQhfLw1EX5SdeRC6MAbQq17YkHyhf3hegui326VfZNM8Le7b4GTkdC6aS7uor4PZk7y7aXVSV4AK2n1TyphQbR",
  "key24": "5W4vBt9AvXzZFMAaPAniEcEciFZFHiAbXi7aEqD8g7DXvcgekXvu4CEhxYaSnwxekjfcwwmyfb88AFEZDnpbUC4n",
  "key25": "z5YTkoFm2axLrVSGL4Y56LJETjXg4155WRaPoYZRBLJFpCyCJXsn8RkbzTTz7kNFq7Kbjf65jtQF8C3K8orM1fU",
  "key26": "2byucVLfeedCJPNiEe28nxxModjCEVuueZxofh4Tt9ZRMTZ4QBErAkxGXKDdyYrCHMPcb8MNfnYBdfmcV2zThtcM",
  "key27": "3hYRLJGpdS8DLBA5Ef9egznwad2RE1ywPSF5hkMkDf5FiZn38xMUaD2eEjkE4sqk5egfpy7BpNZWSkLN1Qnxaifj",
  "key28": "63Czy5bQWsjajkCUhUjjXzzmwGfLCFKH9Nj9twiRhyAoWxrWffTE4awTbVdB1ELyiKadCx6jdDLyFAn11RojFj1",
  "key29": "RdfqsXLtCunCBoQwogzhdt34qMGLk1yfRsjHicnuDp8V2nztsDzxkJTzW1hnnpnGGGxGT2FSkKmu9eKEt2nmqFQ",
  "key30": "5A2q67dY1tAagAeu5ghxL6q259U2bmaoTLH3no9Ty4eLrpyffGZfmWSimBejtgBS9gsJDe4cErKiEfiLQEtZCGp7",
  "key31": "rH5hdRmAYvogbc88qg4cYoiz6UBgk1xiEn84igEZeE6kguwMEpXCHypvgets7C5WMEBj6A7JhmcdhudYBsxkZ4D",
  "key32": "WrgwmxiJ1YWxVbGBTPcwRDT1fNmtuu5sByrWZ6QBPEaeRyTCqMArdTVuTV2Nbfzmd1eQz46FCSnmUmbHQk4dT2g",
  "key33": "3eLe5pdtA1hXgTEJdPgHHWeo1pdwv7mEki9yTcc7hbgYXaAutk6V7Bzd6dQf1fxVw4YGuNFotJy2v1syad6tcWyp"
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
