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
    "5EhY9MrxgZ5ie34kDbbfUjRukbngDTqGZe3Ab9LgWr37GF1r9MRADUWu2sAuqvoQSZKGWnq1DYprG6kiJ6gu2Cuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TXt7BTLLvhF9Xqminrzbfgtfi8CbvD7CXHNwud5cfLFw9TCfYyCfpBmTzDPEiG38xq8xQPEpn8r2mPJ7gPRaMuY",
  "key1": "3CH6zhTdcJk9fsjRNhDoRJtirfLTpjTGnNuRD6V4PC5cWB6Z3ks2U89Pjm52dGZKp4NaSTohKwAKrMraQtfkMmTS",
  "key2": "4RpadLBJky4nDajbGDuyU6pz237fdYvPm6XXrM6Gryhm8e2GkzjgU8y29FY4ZpZzBpaGSnyKRz5b3vVR5zwALCSD",
  "key3": "2VqhwhbqxciDcsEuRJ1YQEApTxj9VfXuhEXkiZ1n9ijk8EpxkAFaq3MmdHgAcVjZE5Qu4R7m3pPRd5FpcvphDCPj",
  "key4": "5TcEwANRcamPJZMAcAhvLcKFzwRPvaBtjqgE1PH6GfCfeQQrHPQ8NuvhunnnxCj5VNrpfNhF4FBqXfg3L65QuDdq",
  "key5": "5x5PsCWSAyXVK1vwAEFdMWwzPUkhXhE94YN299Bk2YxsySKjScVzT8zd72Bm6dvnnsXgHiSPpd7gYyVpWDup9mmb",
  "key6": "31LJWCNfas1Cs3dsVVfmAtHEiYSNWqPhgo9rvsFQXQocgK8oEqD5eNJLSmzKqQeyXkVQX51RmbG3Yj1Ze6Hu6aRM",
  "key7": "yzxgXTyocsSqyja2nB3qNgcsArtW6xr2NWUm4KoFiZMupUMxgCMtf7ogouqrRwnNpYbe57yqbNKSJZhb9iUTLuR",
  "key8": "VPp1jPMAQnFNqoALwduhWa5G51wFAKDKpZSeJ8mAq8B8zpenJhNNpARhR14P6YbcbA6oMgvz3N8fWRHiAWmg4Ng",
  "key9": "5nfY19mtmjxxCMCU7P9WZ8gSJqneWQe4ocV33RafsbPAWLCXwJCMkeVbKDEAoa7mAaDQEmMQnPfjiQ9quwHKVumq",
  "key10": "3Ab63oWe2YSgtVVZ9KaUs4Sq2eUUjsXw5YnyRiPFYj2d45oePv7ZHFvebKCmRoNL5JUdmQHrfNFGxyGpz5iQc1Nz",
  "key11": "5BY2ZQj2p6AA4DTM9ueRRhkYSTStM2jcctRZNfvL4vnpBq5jNksSV39j2zwFHby1STxyG7qaNYxZos24hMtH7cXG",
  "key12": "4sKoUuf2TQxo2k2i712PQkz4N3TdMGpmfgLUEFxbAYSNgHi6mevWbdFqpzQ82MWWGGdQYhNqcqi5U8AmLnohHwwd",
  "key13": "2SDmHYch9DEV2Y1jJvSHyteuTHvarANR4p1S8Q1YYBT7xaLyxq9CQ7qmrqsWkV4BSyY98aTjc38uuu9J4SSaZLEX",
  "key14": "akiRHvKfA5z2fJtQ78ApoibpP2mCfTwx3HDJtfRMopcTNqeozqr7nhYB7ZjEPsNbnmfu2j2LhjfCj1giecyjoTX",
  "key15": "3gM1GUmRPzxDzEQnQ4fZMpu2V3Mwq8PQkhjcbwheBHoob9cqsUVcW4vmsh3UnVAzsZUcp36Mg8Gi8XaiDb8JEkBY",
  "key16": "4rpWuEyPcgBAEx9zsPJsu7LPpMpmXFJMmnKCTVSNiu9yYzHjvXahLwsTAEzhionMGCm7sNt68XvcTUYGozTr2B2A",
  "key17": "2yzrUcPCBaPqpKcdRsM6mZuEFb6ncaNbeCMHRyj6TK2H2cemmEsExaLNCJcLNUFVtKeGx32uPDC6WgcbC2ogPPvo",
  "key18": "2efWJ96NvdS9xwUmnGkcPCzAwvae74Bd3YzNgFf6nUJmZk6mVz2HEXRtpdnEYhxtftXNgBNUmQXM2K4eNxZYd8Qv",
  "key19": "5WyHDaVpNgBUrbexRSRBTAdZZYiLhYZ2Bm15VkEgLo3U5BTuebS6h6xbE2T3qVCPiR6aT8MCatAep1GjAsFQhccH",
  "key20": "2mZDn2SKhXmUYuwZMBd4WCZj7NJNVHyvZB5HTeorMw47APMsGYN1EP5ja4zgXj19acJESPWrJaMRw53UhxPnmGXp",
  "key21": "4mxgBTdAqcTycGenP9LyZH1BPZaKw5A6UaoKnx9kdnQEMCiFyJ9fXWBiHC2NxUY6owscGGwiKScKST4mEnyRcePV",
  "key22": "51qVzJJGodHKESYzzGMirH2Wx5zUmCayStdCEpH4pm85o1AHqBVvNWqjpcREJN1CiSobPK43HYa5UfbsDJ4wCEsC",
  "key23": "3Dc6yeNXukHHA9uHUC9PNFYCaxby6XXvNnM4BPwJG493j2F2djPXsmg322E7JhkkfSND6aeAzTPA3jU1rso5weuG",
  "key24": "4qpv2k36BX7kvFZay9Hbc47uo7dMhqWWYZow9nNq4hgjtFJG2qcGtQvWzvHCvk5kqTotwu6fN4GxGFsmNPhee6kw",
  "key25": "2x9kqXvyietHqvoatDrM3HSaBTnfLLFz2WcnF4VAwrqFRXCkvf6rEoBp2ubS6Ur7B4Tfs3SWaECxgmFiTSTPNuPG",
  "key26": "484kREGp87cxM28eETkKF4gzZ1xmUqbYF5NXmoAuQbH8QeaTTMBZwTWgj4HtBcdi3oiv78xv8ZiYqngxBw68yDZg",
  "key27": "2AVSEyRLRMEr6x8gwsDuFvAQBm9GCjBaU4Rwuh7DYRgxA81SyKoEGR3qoZn3aqKvcCeCHyuTkDoFkbs7d5brbLTt",
  "key28": "4gu7CDkc6ZzSD5oSByHYtZ6D6SkrVazF9ZUmXdSqAk45HvMAE7XFUomNqbeb2MwZysbAFrmYq4mw4PkTcGvawJW3",
  "key29": "gsiqEYW7jfrH1wikPD1VN8nzVX7sWozhPYS5YJkEuEinQXkK6N656DLGmtViHDQ5DQiDdRxmnKyepPFTHguyCqH",
  "key30": "245zRAoRW7FMmyTRbSBUKF8R7Am6E4ykUwNzasMHHYvJdnox96e1cZpMgCxsD9UPzDBY8U7zad9ztsT2vEztN1RX",
  "key31": "5ZocZS6SkZgtQkmrw4PnJswor9tLVg4H82ZAgbyucmEdbbjdcoAsV8RX3YYgKFTKKbans6PQJccasPWZ2BF8SWEN"
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
