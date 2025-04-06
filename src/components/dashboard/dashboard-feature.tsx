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
    "3jhdg5zdN7rWgKHWr4Fvg8ufyz6axQPyydb4KdjfaPfSs3yFgoWwseyzvKyFKtMck8Z7LqoxfJhXh8wAwgRJZeA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVg1hnVpx6Xm5cwYxPzPmb2eCwx7uxuDSUGAsAJgxnVBFpEpe1D3NJdd9Z4KhZyYwsdYyFhMyrvFndFBqeRMA25",
  "key1": "2JC1YJJD9pZ3gLwPJv8Dt1i7iNCXGdEVNqdgLWFFHE3RZYqnJ5UTzRVuWKXNoBR1cCe3J4TUtXx2K4TzzvwXHJFX",
  "key2": "3MqeaN6ic81ZwuM7tLrxSrHaLRcr48u534Hb5GNKKjJCXPzzKZrfdC5T5BCpVMR7MKccz1ncQhh2jwYbCeDHEccG",
  "key3": "ftNq1fQBXc7gH5qYMuDhJtQ2Wr8JzyxqfTiy9G6e6vRaQxLuu6Y98tgqxqMAvNGBVMgXw38Vxcvsia3TqfSdEhS",
  "key4": "3MLYDxjdEBVZAhUkwHn7KUKY1dFGCk9G8w6JLEy8yd3hPhhLkPDyM4dpJ233Tu4mctPfEGHFJgNWva4gkjGvmXVA",
  "key5": "67qC1J7EXABVQ7kZNMct4HkZHaVU1MJSEQVKSTSBn2oUn6Zb6EpZCLz3zbEdVJB8twCFZrifRUcDU2dsw7WM6aAL",
  "key6": "2a6GuQK9V2sL7nTk85URAXExbd1K2ibovLouZYC9vuC2zQmtP5R2866ikHwcrvvnq33HPbSHMCVrXAtuAK6oFLcj",
  "key7": "4UhWfEki7znK1ePWDekDWrsUZ25X9ys3n4w75eg724TypK6hS2id5zU2dQrsgvL8qZjHuRYVDWSuzH65oEevgV4Y",
  "key8": "4zyvUGU8Mp55ATmBwDTSfvk5jpJDKyujD3ww6ZXgui9Tybrocno23WAR8tnXgDGttxproixoeKB85SZH865Vf44L",
  "key9": "5Y8nKdUtmdQZ3ASgZqpjZVwySmC6HKHdQxNCLZxtf4J8etgZhN52KQ7jFwr8bPmt9vVGyTG8FUVAhiHraLfhH3ez",
  "key10": "gf8Q4L17goP2Qi8QtagyjBjVA1C2owQSoBtUpptesrEu8sGqyNqUFqTyEyKHvmcZHvH9i5w9in3SJNghyoM3wZx",
  "key11": "54HeBifgdHppAyK3W6Ba9mubo3moRTY6JUTnyRx4heW57MYaAm2YQv7TvfUBrTCzDVb7VGztxv1giEueC4fYXLuR",
  "key12": "4zfEzodHGjKBHTt6Kg5dyK4iD6v6ntn6hKWV1oXLXKBPZfMgp2UDWWHZovy8cLhnuqvvx1EDtT9JUVHKF8sjrYqZ",
  "key13": "3q9EAaDFozHBtogJSJeDn5apAPwtuN3ZqLbaBksv8iJuv6gdDwdLSHpLxj7rcNhX2b3E5pFy3JovMpzuzc91NocM",
  "key14": "vuPUbKQoJKrdfg9rrUpJ1gHFVQxogemMZeQViVUMUXvvbnPy6iZSJpoeJR7r7BdnYTQUktyhCVhWP8zYwPzodRC",
  "key15": "aEr9GpxBGTromaHhWqpnjEaDeoV6AvbU2KPdjeF6787e2ra5GwHpAvHXRqH4d54Q3z7a8U1krjj7NppBQpJp7SD",
  "key16": "4Ld7nTEc84YNGn8pQDjf1DQC3CgcqEf7fhqbYC8EE8Wp9J8TKtsVxjxHujjJwSkNUwKEbGamCgNNxhGxYpnT6PUa",
  "key17": "2u6tGM4gxxBSXFyKqNPdgWtBcYgN3tpAgsxvkYUyCCZYEzwV7rFcCdV2s34dr4gek2z2vhd6UnUh82Xqnd2FnduC",
  "key18": "3PkAQiyMDLcyhr6TRT4mne2x45u6s4DZFDZ6at4mYiRSX1gkcykf1hQvo9zoKCMXhxnV7zeBiV6B7qC2gksxz6E9",
  "key19": "3LCkmodpAht7XjJFSxTtJ27dYXLgPwTkp8BRpGaZvMWUPxoB5fBUzypVnVXVvFuJ6CJtrYns1qT3MFfQUQYZ6Dn7",
  "key20": "2Yy1jt46aaWCPNzbPstgwSKf2Za4XguEwNDt84dZd7SzSbC78AqGJawGYnCipA3QGd7ChQjUCr71Z3o4VRUBiEuX",
  "key21": "4SNKGFxXeoWdp1yV7yujA6V61yVX4caEz9igcNWsz9371T2Wcp9SB5A58HCbAGHaaKmZF3Bfv14EZ6vmcdtC1raS",
  "key22": "5v37MQodSrX9za2KaRXWteF19miFvsxifs9qqFhL5aNuBFsu1Uq5KcpjDjU6swnr8RnSeee8bB4q5Bfdi9eRBHqd",
  "key23": "3fnMGjcipyydB5dkdWstPWK6V89bq4svwhArjwgU2D9bD6UJDAeR2Jq4Ak3eyrntCFk7KuJhMhsYqHL1pWuDHjdp",
  "key24": "NUdHPjBYa3chHfm3SW8qwNwWJnb2x6Zh3KVJES7WcJW2hdwRvWb8Aa1NxhoZxqseq1q8Ygjyqc5ubR5MAyXeDnS",
  "key25": "2RFJg71jc2f9BsdTnXgyiMgm5oz8TRnP2DL4mnP8RMt7tEY6d8KX4MqjC4V4pmbyY5BHsahu4MBmptf5AknKnVML",
  "key26": "4E97xapwf1PGEeC5z4CWiC4kRUPmT2gFMeqKUkX6B47xcu1eX7UZxw7Ztsk6WyEDxT1FWKWnkGRLfnL5pEE3Wv9t",
  "key27": "47dRqYLRzgw1q1dtZQyvztrzcRFbCRWXgsBRkmNKM7uDvLzu3xewSx7Hvb9kc5WMcgLo3gpeai5juTiwAtEEjxPi",
  "key28": "5VseTkoYR47byCFKcFwKn9Sz1WatrWJuWx71WXFM56prs3djTRndb5tfDqjPn5kjQQX5Az56j8HqziA236y9A9Az",
  "key29": "2mXDZdD8damyE8rdBHdD48riq338edwTNHH84aGKwckgPVUcXbNqLnyBanCLJe5QXXxawsayvxt8pBoaVQMfBcdJ",
  "key30": "2etmqRGTN8e1f6bWQ6e1tzQCgoaj8pH42QrMJvse4SyhgPExaUCzV1ScAFm55ZCTLv8Mwp6wVbotbrLe13BqbhyH",
  "key31": "2bSawPqPPHjAsU9HMARqYgeTx9sYGN93Bnpck66crfGcx8kGFNXcgGhwEdcezCzRG9gfVaR7nWAy1WczuWsN4L39",
  "key32": "ypHFcYEfP4WR8MyFQwiqvawuofsfTTtJyY337T8zuayMbWx2vqk64mV9EDWJrKcWrsBxrHuT38957UzJUEWs35P",
  "key33": "5qP64T3VqRbzfPQ4S7zjEg6NfTpoC7L1dMipCEhy5dezKoNALmTugMjjjd4PGiRRP62Sg7NhJmLGdPHwfdaV1Lom",
  "key34": "5vaWAgKZpW8H211Qri1NUvY1mLi1zXJF9roh9SDBxMV79eEmdQKHCRbW3DHU7VKRvWWKZ9dyim1sGZxgyhMg6ZTX",
  "key35": "222uo1GmnibJFxnhMXS5jqMJBeXanKQDcA9PZf2uwwEH23CVMQBVCa8zFeixQgfXaiQPPLmdHT5ibDTx2K6pfKRw",
  "key36": "6wNZzpPozjDTUJrovbg6iwuYReAT6GLug9ypFTxjD3tVmsk1mS8UdxA9pSqn5mUQcJEz7wEizMPAifM9jWKUkfH",
  "key37": "3xtdTt5NzsgbAkaYdmNopXHyjvKWWmV9k64jLoXFRLZJnXquBr7iFbra2H7wRMXr6bZRXvBrWHYRPFLiaX1XCntP",
  "key38": "5SSWCSXryrjo3ZQdeUL431GHsAyyh1fnuTWJQ7NVJwvKdSWojRWCyxxSJXmLVicTnK5atCkAfNMq2JUQXYyc6o7y",
  "key39": "4E4iopxDq7dAAJtxq6x4P6FRnJpmrFtzmoURhH5UtMtDp8pV8rt2zGp2ZehRUAP2pUWRSNUujUtk5xViRtVzbSNP",
  "key40": "45FhfmyrHyRWwjDY7oRsU9eMgDgZEQLNfRfnJAw54QFwWPRPmVbMCM2F6vUcxWgv8iFiKSgyZSqVFpE9eF6edUsk",
  "key41": "5tTGRFRQzoTXsoom9V75ChkEfRsYuA68b7tPc62SBHN1g6E9i8LS9xwGDKK3nASZ5kqEVraBXmTERi8jwLCg2XFF",
  "key42": "4nvCdhUbcDGKXX5CPWEKd5hP1YZkwPmeEaC6pEMw8Ra6BrtNQ1tYdAyqCapbmEcqFG12QbHsopppfRHTgsQxgjwV",
  "key43": "3F8pSz4coNMXTGgXEUMD7EK4xGk3Zyhb1VA1JBDb7gR3KeC6bSXtRNyKPQmcyiLJwoZnUazEohDoXKV3V4hTDP5i",
  "key44": "XzkbjiHuhp9dP8W6FCeXCFgFS1LJ1oGUG5moQdinJTP8xKnPm6Lq2UPXWVTWkeUmXXfttqkchqsHDRcAEBjfQGQ",
  "key45": "QwTSiSx1an8r7LSPtxr9WkcsxntvWLz37rgHv5CEp7NGR3TkvJUgN5dsM5XCWndwHoe1SFkuEvRgoPsCV6oXAXf"
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
