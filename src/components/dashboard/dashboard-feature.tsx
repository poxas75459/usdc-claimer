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
    "31X3vVSkTPajdcUyjkTzcw4U98JbnbytP2eHEU736EV9bX3cmcj73xu4ZnwBQCYgySqqT4L4zX5FeCFp1w76oQTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "493EkRXpNFPV7btwwnWNS1B2iCa27DKSDuwkAiovQDibYQDV3sAEouja9uYm1wXYdvVGfzm4uzCVUPyDAMeAm8Vo",
  "key1": "YTdRYmLYSgxabUUhs8bCo1kghXh5yPfy9mveDMn2hPZfaJkBW2UTTvbvGNs2vmLZ88hpmXeedpri55x6zLwesgu",
  "key2": "5LVtHzEqzD6GxiHinYyoVJFtV63Mv29mVuGjmz5hDoawXypFAvtPMjLT6X98UcbnBr24FQcuGFhpAuSFRYy6P9jH",
  "key3": "3yKpLj6BjgvEZ1GnpsKE79dtNTzzVzzh4DFyRyFo2bxWGcVsJNTHGgHNDcU3GssaFsZiFKZ7EfNXpjQQz6x5FhXu",
  "key4": "1zt2zcb7gYdDtXjGZAdHC8GRVuYMMkPf9SZcAbkU1ZqD3bK3yf8NszdyFMTLhRNJdUg55iiDng39DscHRjJapiM",
  "key5": "zRkdApAATEB9jpMoCqvZSsrf5sjY4MZZ6XvYV6ScC6jgYaFEy6V6RLmmmvqpeoML86smRS9buYgRyR9KKdx4Pv2",
  "key6": "5mh5waHGfzgAUzwz7yoWSpjXpdzharg5g14t8fTvtjoQy9Kyg2Mv6hFAb2UdsMk65ZJvNe3sYzha5KaXhKjXKDfo",
  "key7": "2JtdsaqJ2XTUS6dqp6C16FSRDPidPSZnSuAh6qyjLPci4FupH7YAkxBPYzaHYyKF7kioZdJjLk1p9RQAWYhNQngW",
  "key8": "3ivWwk7qbmU858AA4549QqSzwKyweqPNpCd5oL12MbkVYKDEXc1NY9xT6RoPFkSkbsun8BwMb1W37AY6FWbJBccW",
  "key9": "34kQPYkscuLNHgxVSi5Twguj2M9aXH2Pa955RB2LkJMDFxFiRJaHQ9MfdivcBpBY1q9MaiAnhcxUjeQsvhcAYnz9",
  "key10": "3yAG67p9roLxynpDjpcXQA8m5APdDQ35gaBGkuLazRSz4vmMmJdrN123JWjoUtBWR2qpqgYgz8xew753TTj8v4F3",
  "key11": "3Qzt6HyPoNv1mCZdYLZbCtNdcnJZzviZkLZ8tqMGrf28eKLuPu8LuNTq2WhA3PtafJFem45waB7YikPxA7V1s1EV",
  "key12": "2Cj61qppHsYcPr8drLbH6n2yoUggXaBKFnGWs7NpZ3L6UjbieqD9SznEqfFK2JQeDUysR42jt4NYesTark1CFuNY",
  "key13": "2H2mS9uALkXAXjWm5H5Xsd3CMJvX9x3DVUFWWJZQc6H2ZGexGvv8WE1rB4NDr7QdXjCMifk4wC8H4esT3o47ddVQ",
  "key14": "3HN1oZDFDwsVQH57szwYRXgw4uYSnm48R4FWr6qL3wTdkf1qomSqFB4Khk8j9dBJYdrm1PrAJTGQFesDoHbtkume",
  "key15": "2PG29dF3jAKVDrFvoZ2NeRiaAyixgoZQDXcBGWFRwAhTUzp24oE4aPPtqCqANJfcDEXgbH3wxvK73An5yQH9LUMV",
  "key16": "4TWHXHsjjG4DSDLArrwrq4tDkoLJ4m3qA86xmPoAJoYyG5aDX66jpJscTCZz2Xsmg7JQvcrJrp5VsyKnibjm5mVM",
  "key17": "4wfNJTmzLEaa1hmg3UzcWxd12ouZ8j9SR7FHqnBPELjVGwE6cHwyaEXGWZmQjEXWnCQWJJxamKmsyMTDUCEF8E4x",
  "key18": "4nJJNyVpR7dv4uwp9QfMETHgjqVWP5vD9sdfenAMDFGeseAgqTAGLijUzR5ik6h5HCX2GjqFwrroX9daRZm4iJVA",
  "key19": "4n6xQ4LeTLwibqVoccZ9m64oYRgMJFS1tPiRWWqTPTLzuhgVzsRb4gL7xfV1R8F41EzoVGbS2YVfQbKkvxnLi3As",
  "key20": "2CDFy2am2v9vCxW7uQDCxdG2wZMgHZhEUqv5fT87r9uNpi8FQS6juKhDem4zx25Sx3du9ysyGzr4HWtp7uKWKGao",
  "key21": "5YwgsUqMxiCm9eHcx1s6CxjCkgfSe5UaXEHT8k6g9s7YyyJwVsZqFAHnfMt2e4FWn6zzLMER61KaEajangRK7oU3",
  "key22": "V8vjZonzTFFNwPwo42MCX8tJS2djuCzYByNqAxgXCnfXKtV8gSpjsZgXLi3JHfhb62K1Hw8eRtVtBA7KEpdFELT",
  "key23": "6c74HRDP4GSAWHcA5T84X6JgmqyYez8FWL7shK9JbiSNJbPAhNT7Vyq4V7mHoRkWwWRKXEWUJXhkkmdnpoaMShN",
  "key24": "2S6XNhUrgutDjpfYK69TahFw63KzAnPyj6QbBP3YR4ukw7UQYrJc36cG673oNrsszFuzLQzdD8qTWziopkY6ocPx",
  "key25": "3bRVusaaGUYubZ2nbRkdFkC3wpVEYeHt6FnnjACpfL78FuDLRW14ppBqZzjpPwcuLf1PKHi2nrk9tim7R28QRfk6",
  "key26": "3aUiv652XgNR67n6j462a9DWommYmBaxbrCrc5FcSiiLwN3yYguyawQpHXSr9BDv87jGUNDdtJmWG4h7wWNmBEsC",
  "key27": "2rfEwrkQsD86WS4i9onK865mTeGRMWXe12uQX7XeMn4LB9U7TSLSj5ZRysBAPSSJJE4vbvZftvetQzQVtTfzUitu",
  "key28": "5mcY5ApVQecLWeqWetmKehdKaBQsNcHoPS9rcrLHjqTb7iyisHiXEjMNaYMaEBSZ5joGLs7NXW4JJAtPzQw1fg3s",
  "key29": "3QFSK3gwaWrBSRqJcKrv5NEBXeySKrS7QbpqtZ8x58z5KtDCx7dSL6zme5z4E7V1byc4NUk7vHaKKPpbtocPV68c",
  "key30": "4DvPa8Qw9KgsGmAMprCNaqoBSEPJ5Hg1tmU3QrkngrZ7WW8VYNPXhec7n53CqewJxnpkRDYE7eDo7cbq7MTrwUC",
  "key31": "5WfrTCiqK82FgFDfj4QMnbiQ3tKDrvJAMKWujL7ihDMhgV5E6C2oK1NLAYcfZLK5BBMwtguk81d4ivfMwSwSRM8o",
  "key32": "2Zy3kF7v1gBpNMznpAt9Ax9B8PZK9g3mkFfJaTuNmxwoR4AzQ8UH1GMSBXXvfVPhv8gADDVjNoDtLAzC513bBWvH",
  "key33": "Vi56BDefNYX7NiyZ3z9UamNSQowjrxPdcH6MErKF2LnxwUMqMeLD2X6tuKNeoNpi9qrY9Gjd3hrATAAJGfAJTmk"
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
