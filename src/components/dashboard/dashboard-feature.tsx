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
    "5X1D9yqNnWL2NsD3s3zXLPGp1PesRMC8H2WWGT4N9YUB1Lay24mCiJVzujy4Y3JUud2fvfQRjLUW1r6TDXpwcBTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLJa8Au5GUXStXMYrNmStmTnVvpQW29XcR9vKXTPMJxRbeaqHvjyyUkJWrzGsxfzkLVTL9SwbYA6DNJA2KGMBwL",
  "key1": "3p1nVHV1PXRDG8rdT9UmxaZkTVD2sCVAmiBEbD5U4T2yUbD5iZRcEmEbSaQizZyXdoxzeLyaj3zei3GZ3m6wDCmw",
  "key2": "27hyUG1DWadN5mKVnEs9bzEihfdZ7P1QskFMqmpW5sUEXw9Pz125QXEeQYrrX3vFCsLZVUBoxXsPDekscqdbJH83",
  "key3": "2PBMMc3fkB7UDXknF6oWy1zKSJSjoiJHwCdReFD2PhcxCeYyjpAvrhAYCNzV4B1E7kVZc1PRZZokCd3AXzUJzQhz",
  "key4": "WiQxGC1b31rRhhdtacWi8E41Vm87ADy4dPiiWAXcSVQZHpL7wRnSyFkfoHccbNrnkHmTKBqf7pRxnVBFi4CBfPJ",
  "key5": "2vbMnAufBKBxQn2D2BoFpJK4DFXfdBJaUtRM6ntSs1X1b6aLzyowV3XPzxmNCqFPFtguqeyCGiBukA7rFTETZV3P",
  "key6": "UcnZnWyQtdktbjkuyw4f7mezzHqpd6rhgPbonHRkPyBH5wv2dVy4tedAtPVdgY11ZpbhdMj9zV27ftm3nYYZsyG",
  "key7": "3f2cokccE7Gm5oPeDeYoaiWgupCo8pgi2wBdjxirXxJPkoAD5GkR5MsHk9VfV1aahzYEqjwDt1epTxA81kcb51Um",
  "key8": "33oC4rYLq2kUAHy8ZQpX8eyGoBsVrjAEBJknwS5KZPEJyzMHfJe8JsZURhx5KoqYyU6hJmzEDDi73vRP3afgwBiw",
  "key9": "5cX4uxgu43VcRFVTYwqK94UVWqeSLKJC2L6r5urz8J1gfaqb67jUWK7Q2qKefH2FKBqcZRodeRv2NYFjXyYNEK7K",
  "key10": "TpEpCbeFkhqojPiT8qPLVUrM7vJ13CArJw47V5SmqDW5Gz4yTmB7haL6sP781diBN5eQ3ctHKdsMZpK1m69uof6",
  "key11": "2Brtyo5QxGVipaZYrC8qnBEmTi9qwWX2p99bhQusQv77XFnyipr6NQcPQRanuYnNMcAh8kyLC5xJyNWjDjn1k17F",
  "key12": "nWC7NawpaFDKaDxME6ad4UYCyzremjF1zrztogbmSK55r8hntmEn2Z8azHyFtFhGTSgXN7NbYXvzizeVjmehMfz",
  "key13": "6GYrw8kQPw1Gs5FdxLbh66ZGtWGn8Kyi2GCRDJuDvZE78v7DHP9YtCXjkNS7PjpyahUDDB22e4Hdhnccuwz4fHU",
  "key14": "4TXrsFTcWaPaM1FwLoBzubVhcJz4XW5oZjSti9TybokLgAkw4rARjWYhuLSaVEBgPC41HjchV18bQqLmyNBwRWfA",
  "key15": "5q4PUirFSnY47YQktff9dXTbbreZxKUZaNCzV8c3icn3AHMF4mh1Qy1Cxbrjshx6t6Acc4AN6o9wnozQgptR7eri",
  "key16": "3dZdduHEXsve1FQE2TZMkZ9KD3KyPqu7w2qqnGwxiChF9Row8tyuUZDYec83Msy9QhpKWx2Qdf7bY5A71vHJWUq2",
  "key17": "3KM86D8j3sSZbbUujXHuWjMyzrEQjLHq73R2ukjiGQMHz7fCLiFbKAXBnoWqq4K84BoUt8qdghXMDmYWziFy3Wiq",
  "key18": "43Sb1mKWEV6n4F4b2rKM9m2A64ZPaPzhKJZzqaJzVsXUnU4B6pQmuzgnjvNxtQMazXDJaHy3SSMKdR7wArdZVvMu",
  "key19": "53e4tvkfMBurNAmmjgw6XJPweBQbBaTJaYCmM7b8LZwZg47u9utAgjRtNVUJ2Dtg7VrHHLXsd9gNgzTEDUjRGpyp",
  "key20": "2dy8c1KuXidPuwYSLj4FWGS1ixjbDj18khArHkxZsGgkXRrKqVZyeemYzFLRsSwTjiwneNZbLMnzaW9ntpAbE4od",
  "key21": "5r3NwYrnvZYGUzzWzpTpfMfDPzWXYfNpHPUDxTtUcDDhvtVFXJD5LSma4oJ4gvTXg5bbW3nC34wx8iyicsftBUUp",
  "key22": "2z9zGbnbn1eGFgL4DYZytxMEVdXJPX5HpUJsK6pttfQWfDGmBbJVCvwLWJZ3uSRfNhQhT9aH62nkyxHsBpXuXcnj",
  "key23": "BRraxEiV6sTxSnN61L9V3mhPiGMfWK5qVjXnswo3PHw7Dsj2Zu8tJCgPxo8W3MTdjiYTAnV88qRCkf8a17BPgak",
  "key24": "38Lhyohwofn4CUTJGigB7wNtXqBXeUj8B4VXewqFBKjFNkFpsz9axRfgwrRkrfEXvmkj6RXvB9ENxtNA53yoCj7y",
  "key25": "gpmWQnnes9YLXN7fmHc2Zg36G3813B7fXzPHLUePBbnyb5GGNQuW5YGozGSHWFXGbverxKwSmS2Yw5yht9Bex89",
  "key26": "4Qgn7abGMsvkWgrAnexrEzwBWitQZ5XYvX9ofWwBvVP7RHrm2PUdw2Lm4cKjnjD6B35w2NgACCCSZwKSPmTWP8NR",
  "key27": "4TW2j5vXLWDWQGG5ojXEs4xnYSU1Kuzxn5nREM8LGxeaoTQjkwm9znXnBug2UP5VxKPMpiGRPvMdsZtUYT9RzfNg",
  "key28": "2mqj9y1kUJDPGGR36d9FkU3weKh8LT4bD3MVFUJuouZKR6TnKsyadAtjGtwv48VtkD3fMpTSKhHXYPddb9DDzAqy",
  "key29": "57mgGfoF5rY44shZ1r9uU6upEyG8hJ5wcr7s4PUapiNhfE9PA3Q1USaTtE751samEWKUfcyJtK7XYdkAJx2YYnY5",
  "key30": "3v96jsx1HP4cxBjPpE8D1yt4j4Pa3UDoPd6kwzDUKhwj8KcU5oH2W3BpdwFjeKL33KPkWYLeUjQivRpA7TgYvrJB",
  "key31": "3NK1BmNyAKfDKvt4YHjWhH543s9zH4ocKzvvaXhvDuNFsshNRtTHjjqFEWTvy5oQn8HZj6SoWmtGQ9sHnypXeL8H",
  "key32": "gw3CYtF3u9TVxkNhxHUSprjmdhK9kdSoppDW2CVRByntxb9xHAwnt8a3SaRNqV6g8akWbnnHsEPchcDJSMBAAGx",
  "key33": "5rGsYKvX2rNQRN8Vq7yp1bxWFfbeU6t3QTMesUNGyVz3XapYzp9hd2A5zF42TTfsg7XAZF3uBfzriSjtbEYoCQmk"
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
