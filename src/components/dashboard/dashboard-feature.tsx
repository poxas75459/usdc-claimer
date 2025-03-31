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
    "5CcMzfLzQHpNPw1J39sxvNaM4RNPeJm3SJQCiJdPDMRk16pLWXTNyBYvDFXZStdXvzhRqJSYP9knFA374XsTPie9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kNXT2AadpbvSBYvhjny71zY23MxFutKjf1HxLbvmnrWRcjb7YrtJaNt568Tgm4TTahLJPcntp24zisSWqLJMM8x",
  "key1": "3suCGPMpKzNpgn3WGuCkmzSBbUzqAxhBYJbY92BV7QJ3xceHM5VZKRoCCr9TPwDL1c2AkSB1QbVBifKKAVUdcE7n",
  "key2": "364BdzUN5f7syhnSC6fRMzK9srWUzHNzUtZJDxMpFMPXeM1hQbnCrbKbRCxR5Qbv4n2A5MxMoRYtWReLRpk5Pjoq",
  "key3": "3YiWRxPacL5P5RfvqjhY5ZvGx3cRbLqZNRxXGKLFPpJtNoudrMS5sCMNzzBcQeZmDC9ccq9aAYUBYBErRiBe2cT8",
  "key4": "fa3Tune2fqkVeZ9eQg6S3YnvkAbxocdyrMzh9JK2ZMo9GyejgCXZZut2wBpzrtjjKoVYjTJCoF5VCGPTrxUrAD3",
  "key5": "4XXxENc3Ekio9JkmPAyt96WRebhFTwW5EBQuARZ9gAJookVD6Lmmerx7Nfj1N9k9b5FaxCmz9RePvvyC6z6aE5mX",
  "key6": "5mQpiGLorYvdocteUjYAKGShzgaBQjYv38NUruXZAdzSfhrB2fy5J4vfjHmta53SkcbRJYMKzisf6Hp9uWfCfCSq",
  "key7": "54DDYGfEfuh3NRt2mzq6jeuLSWgFbzyfXGFhNSbwchsZphpWdGKv8vWHCF5yrCTxacRQLbVan9sRUzNz4izc4LsM",
  "key8": "3hYxAKVWF5dCZVD7UBGAeZmbGs3K2UNVLSgRw9tPjYPzPj9JsH5FU526eRLAKdQgugaAYmyZ2HKnF1x1UucVmV7K",
  "key9": "4L1rJb7igikEZRMTpeSQGosLbFzRydV2Ea2aHqXXE8xAC9r5eURgfkMnYfDMETMgjTqUCp4BcxrymeoLySb7stCE",
  "key10": "ac29JPe6FKLKvpnuT6DskgqREHphgHsoXKEk62Q2Um6sjywoSqJCzGuhbkFUY66Mt8UVmNNRdwhmJWfv3HERo1a",
  "key11": "9ZFTvHAxJHNhch7ghAb23SHFM1epiDBWBfVBRA5jJzTpKgTnFMZ26KBMrPhbFefwRjqzvKeAANCK8JCincZzfWF",
  "key12": "RG3YRRPtvW9An7xC3BF9ZVUe5BGcnpF8z3ugGnCtDtd4L6yhXomFADVByeytPwuW1LBQvvQMEWqXBwQQrnjpa5H",
  "key13": "5wJ6FhpEUoAuMsRN3RYtVeN4x2yETH3ND6Ahiyb5mUDE7bnWBtDV8t1EqA2kYgEnjpbhHMSJZbu5hpxmGL1cJi2Z",
  "key14": "2d6J9kwCLSNUPJ24qsXiQRkLjFTNuNPLP6jGfHrv2gKZTrWpXos4SjmkroxbkvkPJdNdfVn4vPGRXVopMZMt9jdE",
  "key15": "yFJELgL8jmUiNroday5A2VqQ2g3LY64VzTFfmjiV1rhbgoUQ2jfgY73caFgHGMRQUkuki37PDB3P5HAHXwVqRgU",
  "key16": "4FbYNK3TdbyWt1A2mefE1Cp5i6MA3vfnKtGmddoSis3DqAbtyTbbR5CFPC8GWepPJ4fLfbcsheGYnJNBhQd67DQy",
  "key17": "2rTvVaFtxiXLPrKK3BJH4neGMyYxSNSJeX6pYKM4CNLvgDZpmX7JCXRZmQDZKbKaqMyWp86CCJXYC79mShC5Ra5s",
  "key18": "5vJZtZ2QtuoP16WRs84Grz4ErK4PzBgDR1zLHe2gYJ27qovTsSiQnT2gtbxpwAQ8P1SXZN8Pn3BZhrfTKtg5gmUw",
  "key19": "29ZHoTnC6wgWjs29f1y8bhLyBFR34znhuwiSyRuexvMDvLfrDk1UWELcFw2ZVgmCmpRFYjFAey2h8CEiWVK929eV",
  "key20": "4URtQJSGCszeaQsaqGkWwDevAocxYSsuuDXMZiRnFM6MMewDMXCR66WQw1BAWm9Hj3RYip9CmKJ2Ehkm157DrLgS",
  "key21": "3XuCDJcRxnovbeQfTnZE9W4QMTHnhjPLH3SW8H4RdLH2uj8oRBMdmnYg9xH8y9TzBGBDGbSmjDJLYrjHFcmahHqd",
  "key22": "2Ni75mfhaeecjjQJR8qXxKjn1MYsu5beC2hWuEGK9Jyr3WpoM3KxBfHBqUSRpsxWkPg8F3R8HMDASh97HcAxV93F",
  "key23": "3Y61p5i2UcGTrtgdUDrAqfFrVQeN2DGBifisbkFReApdrc9C18Q9h8Tq5H6MfmuQVQvkLbXW4vnddUAhbV2xsHdB",
  "key24": "wKmkTfnu4zmVAHVKUFQQiyZHH7JQYMYwJXVZv8LJMwDf4DSSGw8N8e5Sdb1SgoFcW2JAfix1YXFp35FE1SWBDTX",
  "key25": "5iAbPEJNN4h5EqeuFgxkQRxdPFTUzAJvLZrXgvqahsQhUass7nBijXjWo4U6vK1QP3Mk4atJrBQrkdxip9mSBMBs",
  "key26": "3hSkDWWu8vHYGNWMyzFUzTiAYR3DVR1awQw4YfJx5noPv5tRN1kSruwUPDyL1jCX7Xem7CZmcHFarv5wg3UWGQbF",
  "key27": "2Y1MBkQSwJN9Ewtr6ECsbkZv3PQSiN3cKjdedG8oC3hCWyghUXqNAMWdMTYUxmNcCyW88HFMut6DSdc2pCZ3LnRT",
  "key28": "VnfSsZJrUpPhdjUvh1tzeVvBQWiKsNoLjVWMB17W4ve64rXaof3wJNDEjt7QmkLMCtjLtB2vwt5BrMEkex5aLGx",
  "key29": "4LsTXQLU7xdyBS6vpB5nW4u12j4RcQmytjFkFHWUY6dBjzZ45uE8waEaiHSijTeyHiSsXr4p6WSyE6AVAkokqbaL",
  "key30": "2H3uPzX3jrXKCXzUdKmEYGvRfn9un9uodLjXJ3FW7S8z55b1nUUsvGdKgs6vETVv26Hja5jd7S9BdG6txpetx6SD",
  "key31": "4xicGgy79YJRRDmr71xUovoEznU6h5CMad64DiPaFEHnieZh8XRdgLbBvcsvafLJ4o29BybHgWNNgSBDqkC35Wf7",
  "key32": "4e5NnKEowo8r18iyr6XAYW4J82Vnz7TeDnZRQRLG5Kjtmvj5Wj2PMGsnSDwzqH2HeLPk1jA6xdk2SqzkzNYz3cYh",
  "key33": "2XEeuT2G8Ux41zpJt5cX4V5iitc95ggnu8Z9tRFn9zUsvBv6UsKLeBchnxFLdfoZcar1dtjw5KHJ4FjoXPNACc3D",
  "key34": "4vzdNooD7Jaj7pGLjTfhtb7HVATK698SpjnMeA2W6iUMCsf1mgPTiyK7tpdxkZQVX8orSwPmFLxgt5ZEL2gSeHGz",
  "key35": "2kiMmQpKRXKpgYnyFFHtYGq5Fp3LYVmsPAmAanpWBSMRADaP4MeqCVvoMbeSg48aUA7wswqxiacnALgXe1sMygp4",
  "key36": "3wtFwXK5vyVaLn4X6346A9BV7qv7oYqo4SERtGq5Qb5SWrhiHDDxk5tLbLfcJYqmKKcc2th2pzGz4xhKZdADoBP5",
  "key37": "5piQTtH7x3WJqF55JRjPGVgxHLueLaWqj7ZzbKm6PPrzQjN1KnbbAvTPGEh3wCBD8awtHurvnvnzTZgZVf8CFqAS",
  "key38": "5ScH1NE71VnX3hTX8JQMTPVZknjzsUpnoE6SqE3bNt1phHy6MKtVqRh27P59Z5m7tmVn4YEDL5aUqky32VPoWfPK",
  "key39": "3TZ54XooPvARRSccHwxbznrmJxcpKHWEvYKuZgTqwSHy57K9kbXw57hXaUbm5FKfFCCwLWDeSVKhnuBrTvStX3zz",
  "key40": "3uMRHNTwQm52Hjwr8SaA8JvjFrDjGSMrqEn3MDsk7rjY7K9Zhi7ES5qBKdG7t7fetCawNT7P6gs6NvbA4dPt75m6",
  "key41": "3vSahgqSDYdi6pBtmNzWyrqqWqQmx9FMRd1GyUQ56D2e1VYH8Ei24dYxxRmKpPH3235nAP5YkHx5VX6ggiVvzAMt",
  "key42": "4nueoB75RvbGfCGNN5CbzZu4TmgA4htJ4epK85ZMNmvGGfyFAYFR5XHnMVhAXMR8aTSrqE65FePihSpKfuBTPENe"
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
