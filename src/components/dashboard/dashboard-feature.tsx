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
    "3EvS4YoQws1zkbrZiEuYTDVDhrKJG5r9rL8uRq56dfeKoLr6CgwEPjv9u5gu8JCCBjfNmVN6adtbbDkcXWZ5fFSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8WrCZyXtiMZQJEkG37gwbwBSGhhqQaopE4gU9DULHNsstTThTzMyoKvctemgg3c7263zvyWSpFzPe1d7khDxGSc",
  "key1": "5J2ciA3rJTmEHr93Uc2hxxHYPT5VQS7TqiubxYSJCUvvqF4CHuDYqobtjFkXtf6zHZGh7vUTKpt6kEfJH9cnu2HN",
  "key2": "eEWCTJPR3XGsgpg3mY61k2xAFEfELjjy18uLVu6YQcU77NsFv4s6bUChJ9TBT5ow16eM1AUxsWdMEmmp5TntWkH",
  "key3": "5Ks9SbhhxCbumLiKig9H95a8m5AY2JzgYeX9gtc9oU1YzF1mQatTXC1TEbUV8XNuWUrHKRVF7LJwjibZYjqQCCGh",
  "key4": "123di9QFsnEF5o6ALEhqjbasLZP8NxxMe37ed8TbHPDZZ5UPwz3FVm8RRBr27jKTyPbuHqsnYEzZUtWWhmT1719D",
  "key5": "4XTpRQpHtZnaGcyz57vzFuohbXyFJn7s7dJewaswKMSV8zpNNfozWYdYj18RDwJzp9WNb1X3Zpi3KGEUBE6aF2Jy",
  "key6": "9qNfz4qG87y6NTUEcHRz56WeDGBbkLjVNeps8UWTow8GydHEuARRVjrkQRnMj1KRwTdVoD4uhr9JnRcbrNrUENA",
  "key7": "4iu2CKhQKQLf28YmTPbL5Nbr77SFieDUUXnUz3L3XCrWQZtynBQAh3mtbKJxDwu2QuHY8qcf7ELfJsQ2GmXu2J8s",
  "key8": "5traFKnMMJdn2TVFdF5Ft3pCEPP3McU1MHmpTqwgZr2XU7kB7CPhKMfxxKFYFr4DUkZFV8zRftpku9twwFGkAU5G",
  "key9": "3jExx5AVKtUsQPqG1v3XU9vukm4hgWcY1Sx53fCrRxQNxZXu2amen1xZB4pv4TBdCehSj6QxJjj8xirduc3jgNs6",
  "key10": "2XCB7WGe96LKWnurZJ8gZiGHzXUcz2hAVF43fpkEFRUmBSX19mRztK1NRyKyE7FmjNZ7gmqqUrGzhLu6wjhbC7JA",
  "key11": "x5nRybn4qVMv338iYzk3JzBtDY2TRWTGBAKjLX585qQKgPfMnDUpUabLXZrinNZxvUjNyef1QBDPAKj46Kj7mzt",
  "key12": "5nNzo9YWV5Na4xpYTgtFqWbh5a4MPKnTLPi56AwtAxNVJEGoRzAtXc8XF1Hv8CBu7pkD3Qxj2FUTxZEciDUGf9ma",
  "key13": "NRMfc3ta1cWKh7jwb458QmTJb5zG9bXuXhVDApLWavCkQ3UDsDpWQFBNYkkMmjUYP9Ponqq9zLRbqZJDtL3RrkN",
  "key14": "2xpmRtEBDcCfHfVEfHv89rbuZMeu7kovo2uKSmaP8aUbba4QGpsfiVn2qFJwSaRBNVMyc8vte3ci9uuuk48YpPZ1",
  "key15": "YvPdpfa3hg9hdbLTw54R3xSYTA8KRhJrYRVcyqRve8hRaQ5SMfgbe84xHhHcUVMygeuEVYzj6z11nwJwTANynVZ",
  "key16": "4QxZn9iKdNDHCCGauHeraAYFaf1ZoypKqWvKDD36kxUHsCughyD7AYNqqFTc1GFU1UJ6ofgwb3b2uZCL5mb2XLPe",
  "key17": "679AQ7KTahpcbKQNEfgLSH5HrefeDL8wFW1z8B2uDZiaFwqEddiWWKiKusVC6b5QZNqxAN7rzoqRVC4ZJcFnp6tq",
  "key18": "3tdgY8jLH8PU2PzQS9DVn6zcMpNC2m1QuzBsTk3bNZcn2JUuNijrBtmhGeB6trm56jcFuNVZmEnrM6S1C2Kiw1cA",
  "key19": "3uLzLAPRVtYduj2hdJiUEaYKdRcUxoXLWPgRQmLpLWNws6ahUmEx6BmAvWaGPZ839iBfiYaTwjKeVWhjuscQLvnK",
  "key20": "3gtvn9fDrZzjRP5pdF8fqbkScJVYtCme1w5Ubzc6drPj1EAmqo9gpzGfsSGUnMh6Ct9YyaVAs14pK94cLfcYwkcS",
  "key21": "wNt7FbGTGPQabn4RLLdapCvEhqxUriHMXcaz7izT3VmJw1QBWnnbt6EGUiXr91D3m2345BCALKrXCHj2zJHsWTi",
  "key22": "4Kjmfh75tqLLm2qZnSw1cUpmkVHP3GQ8k7nKdKNBnhaSuYn6hhWDZ2GvLh1XtwjsLwbJGWSfM4SreQh1FTECMe3G",
  "key23": "dWCNSPmvaVmdmYMZsiz7o1hdvSkF8WBKttHSBFJ4AZSRphTvV65iZq51ign7Xo96s43D4NQrQpTRUZSkXJK8QRY",
  "key24": "4u4B1kzMVPDtbKvftW5FU2B1PqCJe77GgtEu36NRMgpA4B7BvWTeP4TSSUPk43Wi8zAeuqEW7G1x3t5v3WA6iGMN",
  "key25": "3NMdw7H4ENNVSiTGq95raKptqiX6ML8HfWb9V1M31sMiyxMCtirohCeMdKABCtMSaL8kcaqE535M7GG1FF3XGuKe",
  "key26": "5rvKGtHHm13JPD2ngWnLo6sn3uhSgwUszukqC85ueKrAXwZbku5EuLb3ENGmgzm9VW4r8VG3J3cp6vFj9SMEnV9Y",
  "key27": "WYCauuuyPjU8cVbuG7w7j7DfpFdVnDtFBCZw1xapy77sQ5PFt5jEjcaccLn7TqekMhadSHjJs9qCXzWFzmWCpui",
  "key28": "5PHLHU49aiziJRBZzSrsPUPJBQAGieQNVdCocQmBtNZ9bRDxEnQHJH31n13BSFWX5JKvgiKmTbiFiPE6qdnse8gy",
  "key29": "4pAfRQnaB4KNypjPBPCtxSBRbX2P2wADruTi7M6rVarH3AVLQhyS5NanGSHurHjYUSz84VBmvYgqMRjHueDbmaKs",
  "key30": "rUNoGs5FcNA9g5ja5MexdWjYgAwKCyEnCEEAMFVSgDpdLu1mTS4fbz7TWg5qJKtGB43eJuwoUxxLSH4ZCGEGW1A",
  "key31": "5eBhPC8GM19cb2bMpuy2z46xHXF7AkYxsesXw1H9AZCb2jNd7kSWSrhgD5abTPRaCLjTkRRbT8ReuiwKU8fDp1hk",
  "key32": "ab28XBdSku5AbbsWYYSwAXEp7qsoGEMbbskFEZH2tMKmAKhuigK1CLwcXpneFmu2naQHKsWxNAS1nfhN5jAtE6F",
  "key33": "NP5m9hMDtJX8J7gikhAa2kyjFcpRuzcsRHC8CpviJX6vs3cEzdczaHnKf1e5srJzuebbaRtGHkSaDFuAcvptzna",
  "key34": "51fuW6FGjxiaZ7hwHz1taTQ1eH9C4wyafdzhfoRpY8BPm2h7UUvRXGayLETnUynBCja37ks9UW8hyYfMafV95qQW",
  "key35": "5GFLyMpRFyeK3W8HgHtjZsQ3ghGXsxdD7E3V4m6Tr198N4ite1BCukZrjkyEAKtEshZx5uxYnNMykHdzbskUqYcM",
  "key36": "8t1wjqYiXQuP7Ss7jxokcTWEwJYhPpc4KurNzKUh7Wp2iJfQCAgbmqP8phFqHamW1GcUS22JCAidfWWf6NVhDSd",
  "key37": "3JkRUUSPj4wBsrLVjhCayX9PshC4hTVyeUqYxqZD9G8J3QbUveYf63cDjGZyxkcaseBEwHU91K36YHbsrxwsKVQ7",
  "key38": "57mzCjPJBhsZPjAqhHxBUV2Co7fEAaC69xiRffcGMMY2zNBv2Gp5JTHMu4Bsh4sLyt1chaCqtUZn2KLzA579YMcE",
  "key39": "5w8ZHZZh98SFR92E8gZ8tyxyZqgW2j3Bav78uVPFx7fJjunovR5zeTSYeaZaSJKfZAWbJaRxYCBrHpvciLjJ5vMC"
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
