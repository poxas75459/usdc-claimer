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
    "3dWQLYkvFEagbaSGkYZXSLiMVdjBsstxC5KHFEmahCsVsmRqEjGSjDoKrjnti5wms5fjaT46mqDnuP13YBe8JXVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5d4LEhjDkpzimkM1P9Hr4Ajha8V1pNMK2yqYt9BuDzwqfwEzzeWAuF2JCtFLMLwaAtuK2W2hRaJwrR2aRLVJiN",
  "key1": "uUne7Ag5AHs3D5kq74CbTQNScfVLPirpsdH9bUirwsmAhXqd7ya49vQup9axWCQeNwU7ML7w4J5Wjqkbxn7vfDC",
  "key2": "5nUvgcqabv481DwS6UzTLg4PiKet8uUn1qgMmbQDp8Xv7exMmKVV6vi7xyLGvbSGapRhM35p9j7F4Y2dEy6jMCPk",
  "key3": "4iswazED7Pd8Xd42meoikjadXjYcigV1XMSLbyhmSAjfvpAkX6xpXaWyVxpefAaHi32cnh8dKxxLpnVo6dXomenY",
  "key4": "5cDvJH5q1Y6gciTfZPxci9Pace3PRxVS6fjxE3qbzoZo9S4n6wHbLRhTsECA2t1wmpjLReHszBjVdh7Jx9sP5tG4",
  "key5": "5GywHY9CNa8UjncVspePtWHEQQsujDQ91S1kbv64uwm8Qfaj55Kr79kWGjWERoxpkbwTcD9f6BLoyZhcnfzZgGmx",
  "key6": "3RuErRMFjSNfFb65iQVzRWsTRZSEDemGq8qrW4RVFLDFx1LfRuo6wQJuABPpqrpRwMWeYLmB57ep56tXo1UvYvsX",
  "key7": "4LCZ6GkSfeBJ8QxgSrw6hf9rcpvEhDEf4cTUHsFWT32aBfCQRqx3CoVpUQn275Ni4SXAmRnf6CokRT4nCc1yKsth",
  "key8": "4nVk1MLEjKkzFayXELKzLEEuZRfBoaho1MAGfQHB5WnT59TWDMrWqF99m68m8xgLDbANgm8F6oGpsvXXQ9RYQztV",
  "key9": "2UC78YMQTExBvBdPmW6VQUbb2STCtLQsR8Ls9FUC8vDXYZmotaaREMn9JTuddQR1jfhvuu8D2LNi8tvNns2HQa5j",
  "key10": "5iSeCh5XaZog8yoYqGgoALRqz3HauWkLDchyqhWJWC7iSFsNyAUQeBrm3dRA9hMqNTBLVBvLShKX3DfTsD9yhUgU",
  "key11": "4rkyv88MVtww71VdbDLcRxx9NApU7hGdjnnPCLKLHoV6kNFHckhYe1EcouknaiCU6KbffgNp2BhjEFZb5UsJWgx9",
  "key12": "97f2aeNiLnFTePuTehLJtGuCQvLUUFYn6RCVNvihLRQwCrjcMuzxVegYsuHJnACxhBW5coHUuc4zfVZEQMQvLm2",
  "key13": "2Mt2gZQeV5tRCxiTsXPvTxqp6smHztWJBtp5rptNpr191UB31vy35YdBntiPsLdP6jsDGVxrJMquTwRsPnfmCkE5",
  "key14": "3uyNGtS1jZkt4MrBzAqJwPU1BmVy1EBkBEQctsrpYsvLKkhKytri5Xq9Y3J76J6sfoED45CXocPnrySJofM4RAz7",
  "key15": "5vyFLnj1QQZ1Nrjip61vPK4D93qm7pQydBgNtFgoq1sNdzs4oDHb93Bfr9Vq1mYDKu2UuGpad2A5ADVDXfUBersW",
  "key16": "56NBH1HrXgSMXs4t21v49qthN4e6oNMpuyGazWsDj8QDbQdffRUgaojcnPqLdcWS43N76xvCJvGpCd59HeBgH2cG",
  "key17": "4ZD9wPiQV2aURGNQf1BNRbxQveZmYFRE5GwVBg2KHA5R3oes4TBFGu7qhpEAeXnnoN137wZAJnZH145DyAfGNzD8",
  "key18": "2TNaWy66TriKGiW3EQYDVDcVxTbrASbxudRdgF4JembCNhFhU4mXS6qubvCuGecU3Gu1eL9SM2nhDcgDfqYhB5w1",
  "key19": "54f8b37ggyWpXwBYWCt27rD4Tfy84hgYAZimF5DwCpCDjjtFGe1JaujjTKFN9u7BAj12YUwMb2h8fhhXHjrigydP",
  "key20": "4UjWZNExWXVaGTgd8DcgiMVZ2N6cdjFYtF9cgFTqvX7f4Goee8ro4WWutiSyYSYSw1yPebkkZ4hgkvL5f4pVjVfX",
  "key21": "454AYM8sGmtY963GQN9JgcAxkmntp6CmB5j5LQVatkXpVTV1ZCx73CrTbAtjok2u45VVSrxrf3M8eYhLzoufLuZg",
  "key22": "26X3auVqRX3ZrzRWRvvpFk1ozXvLDpsyhpn7RSRkbzyrEAXTkkUJL41mHcsLzc7kUVJRkQKmMSzpQ6wJARp2yjE5",
  "key23": "WSMSFDsTbgRjZBieLk3hYdXTh7cJz4QourFh8BvYh8VuUCbQBVECCgsCrG5G81viPKpzjjh7ushrrQeMxfiQbS9",
  "key24": "3N75n17vDQqeHXVMbiRULi9tTRjzmoa8Awb2vEdFkokD4NxhYvLdrndYwsw1B9X6Tf3KkeUUP6yTDxdShukLp8wd",
  "key25": "4Xeztsgq87B6ViwtppTLMAXjBti6WQs5tnhLbdBxBCNSHLVZtumRjM3G7s83UXPFcH6obCFmCtpxSBgUckY1zBGJ",
  "key26": "2Vwvupn1cDMBTPkt539wvbc5XD49oVYVovFb9nrwqyV2Rsj1S36XgzGxNgXPoe5GsjuGZUdKrFmRyVtLdmkk64n7",
  "key27": "56XDxtvHAd6WQzeUPdKfwmrpeKHX9A1a1WpmqgMPdecxMbVRcisSirFExenM5EwisdFTZdm3NkKb4VoG6mFLnBNu",
  "key28": "4pbW8grnF121s2u5A1jih6o8jP8qmRiBS8gQcDjmmN6tR5LfoWPHKoNTbM1UTwcFNzDDyJiavkJupxUghHhQeg5L",
  "key29": "37cBaPjXMrgCE4UBtdVTv1W7DDXXgo7yp1Bv64PZW8NWR3zsojag4zash8kzbWY2Wu8cVkDeSAqBhLDUq4zYurLt",
  "key30": "4bDAwgvBp8nAVxSdDXqoy6c6K9oq4EpBgS9ecKwDSkLf7HEzPTjxQjJzPHA6u6Zq7iH8fY3gbsuBtuEmvkAUZi7v",
  "key31": "2NX78cEJXyLH3DrZrKufhYutxhNsQ9MVw9uVg8bZaoB3A2TLqAuVB189GFpmA3yGvKXCib1Hn8RXs2LqHKBhE3oe",
  "key32": "3maiFcr91zMxZ4kUnKVkQ8r2giV95voFVyVLy8eVqFAP7eVNAUryHfGSeTajvNeLbQy52yqign47p7XHgpuHQTtT",
  "key33": "4tzo1TSVDXF5MLT4mVqkKmDidmus4inSCHheUpKQcHQWxTmFxBqSTwrCZ5Rginke6Qmmpm3viuEEjNiyK8Bw9DJU"
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
