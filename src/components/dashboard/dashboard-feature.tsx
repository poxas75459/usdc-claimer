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
    "2ayaC1x2FDbTCA6LDg9vzCipSm8voikAhfzPFGbwWbDcsXtxa7LutYvKTqKk7rBsbJHxKcEumtzicVrqCLhjQ2MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Q3hcPwyL9AGEa59ViqNtWdVLY1MqZ2LowcL9McXm9Xo7BU6YGXcYSdng1MC3R2Ks9PUAxqVoQUh3r2rrkv13ht",
  "key1": "t64JnU57fQ2MJb3Gk542Egt97MPGFktBUtNemAsmJNS2WLq1qeBj2h2sTC4vxJMfr3SmdmgsqZ9DtGS3soTCR6E",
  "key2": "5JTSQXFTiNuUfSHsdqjUpmwFQSF7SXtsujHq2vdahESsL2i1GDFzwqA2bt7uhXoxZgGrAAt1BjtkKKCLe9i5eGwN",
  "key3": "5ReWdHc64fiPLXpqw7YLC6Rf3wrQqhKp3kRDk8ZWG7rwXnggpZvxz8MbTpvQ2ZfFY5c9n4DpeJergpbh91Podw1Y",
  "key4": "2oKWUb6ifjJmEPAWTskmPgPaqFsyLSfk21CmniDqErkwU7r7XoYRbc2ZwhnVzdttDLPjWdDUEf6Na3yFd6xd6CLr",
  "key5": "2vPAgPvsKweufWXS3yjGsUypADaTP12j3BvDHGW8kMUdTqtXvD4mB62aLedf4cZJv3zHeUxnC6Z94FokfjQ7RUqR",
  "key6": "3qu5tmN2nf7MYVWwZsFnnUgFH3KyppxvXTXPFtctiQ1TJcJ7DkbRiMYgakjEnZNLnowh3XPR7o84BWLjG87GDrkf",
  "key7": "4G33Ycm6soHjFk8xCiDEzfbLKAe37rFgxj1XdkEyiQxxqijujjXzefQmdcN4eHdEEEUx6tpWo3ukBMv1baWQkdr3",
  "key8": "3uW1hZsSADFEhMgXjyrNJPSUXvjdPs6JQNUiJid6PASTKgn8GgbpXRFBnhqyXnYkuwEWvbVTJSDS1KU8R8cU3hd9",
  "key9": "21A9rerEcS3psfrHCoELGvPtH4QQpvhkE2aChKz9RSnFK1731TewJhaTnadYrju4D7c81ti95AX7s47NokUwS4Kk",
  "key10": "4GB3JD9JZCL3RWWimBg8zrAAEJPvahJPssBTU9zihPAE4ULMaFkV9hqVkc3XQtvevZE97GpVDjk69prjR7qhaf8R",
  "key11": "2vGGpLcSNE1rmre5qnjncH1TpQN5cXz4svdLHAUCHsxg9UdcaDdsv1jjMNPccHTcY1eZ5qNXM9mRwQHeyRWgAjno",
  "key12": "2nDvADEsT3D59cLXr5etjnV7p5LY5xdr84peb2jvFkdBApFcXaoG8oNLk1XHRMfhEph6mR9hiuLE9nTzRd2bxsxm",
  "key13": "4rZ7nMrteJuxofLZXVvTLcqacwrCfjmnrPCgsnp6dorN2A2MQGxkVXmEHbYsyHgCGw7VweEuebdEM4vXRMfKqVsd",
  "key14": "4dQeWXnE6TKuunJTAQSu1AN8S4S5rNNbzY7hsZkZBLUcLQmFp1kJ8PHvDAyVzKvVAcetmLCLhyYDb4MAxbTJcDg9",
  "key15": "2dRhx7eTPK4aaEDUNfzGGu58s29zh4Tc2jeigZxzXhrUvbGpXeJkp7P27VjwBQQh5zo221k5MgA6PjwDSaEgnzhd",
  "key16": "3Qqv5KX31wg1ri1RBjP2VmDSvxGgfWk31iJiJGns8PusNnNyWk4qi45dbFE7ywGv2oVa4ozEwgLKFfFTJEhc179z",
  "key17": "QDovZGcki6vj3XPKCiwgw1AgTBW4cFzrCUmSQVMWw6yYp7aM3RS7xBfpRvbTU1nZHn5DEsoLtiL1H32PoFoVzMZ",
  "key18": "64v799p2R7nXNzb2U6EhKZWzvy31zxVAUo6fHhPFEKTcTYuF3ctmPojURZKdqdoYP33qGkqyfN78GNdx74UNJVLP",
  "key19": "4VyWgjq5wxUL2ZVoLjHh92Mjeoo3ZDAStAgqyw8hWRznDKfYuCxp8r6eTrUQc9jT3SrbequNy9m9timZcz7cGF6",
  "key20": "2e8ywdAdPH51qvN7NLCVn9GvFPSha6us2d6onLmQsKPACoXn5XnJnmSBm6AcYJq2HZeNCKdfeca2kQTmp3yvYXuk",
  "key21": "15jYpqKDhwyac16BNCpEzm5SW9eCprCjkF6nVDYDDS7mBqc5sxQQxZYRv4Tx8KiF6Lh6yw3LSUWHS5xuyBQw8BF",
  "key22": "4QfmNR9MZWsX6nbfdZ6YhDL4MEhZdEBGzDDW7qRkHSs9kYVr6oXAccivdALXaRRh3MVHBJRpAekjt1ygxbpfdP2S",
  "key23": "2ys67MH7kGF1JcGMauMMNUMt2ki3CE2JEGUcUSijwtY6TJR1CWCQo4weDZ97XfTV2H8Z4Ko7msCcrFc8G9DMVgiC",
  "key24": "4kuNoCJe4LQFU42zGNAxq6azyA74jdeyb5cWcqLARfeAFeV47Bh9ozdpmzw5SFqyeLiuhiWNbVNkzmLWGUrCrN1N",
  "key25": "5oxawnoTMq144ynkmieQkCFGKP7MEENpPtPfqG82tdZfJckfY88tenRx4kYUsMms6KnzcUHAQuZa8YjFb9F2PX1b",
  "key26": "5DPiPuJzEuL2WtA7Y8oezJPPLj2Hjc5SDAmFmdTtF3Z7ZU1TTKD6obg6zpAhd8RrNbWG6Jb9XcG6tPJDsMmve2Mo",
  "key27": "2agCFmNEKPcV8EtCC3wHn7w2MjAoejFE42U1oji7Rb9iuYKreFKkDyMu4rrziQDjQDJuf5RboDM2z7XKTcDuDeyC",
  "key28": "RQLXxfQzoVbf2YWK9J3R5oKBhYTiKWbB7D22JyaguLhc1ugrcgY7K84apaGbE1NdP6m5zf9XqrYcEiErsGfNoQw",
  "key29": "2peFzfskBjw4ZijuFjt1EshVTLq2ymFRDUMX5PAViTThTYznsxoVvLGjDQmFkVCeG9tmhAhzYpsTLj6HWVndAtwZ",
  "key30": "6aQwRdTh7mY3c7pjpit3zHE5jZvzXYS1enysMRV6S2zihQXPkZHNPjcqV1Lfcz3wc4gpFsUgKMgVRwuLvX8LTcL",
  "key31": "3i8rCodFeaNsgDZU98cAtFEo3wn2wUAvqX66hzFPERJgjPDHQS8FVtpExvoRiwsqCJreKn9Eas8TYPWJxvcGefCz",
  "key32": "2ztL7mYpvAqK5RxYcdFwzXXYG6kJKjneQkDPLZVojjq45TdpgxDaDPJ9X6XmU1umpa73JffzayuGJSP27Qh8QfrH",
  "key33": "3xNciEeHm6nThm5m5SbV6jG5Wg92ywFmrHcTHvBtxzX1NyXDPVN1v2Dbh91WXdwqoWqNc5Eo9RfVh58UDprFBvub",
  "key34": "hC6eQmKUMS9WRLujsTbmDPFGj57eEvFi4MHNmXNw8ffG1aFn3fqxki7PCwdE5Q3xTSs85AXEavgFyZLq6JWKoPC",
  "key35": "3iwmoPQZ7dzR4TJceMhiPoSEnGGoPVZh8Egd6qZG3RgaRxMHZoeurHoq8J4X5NhV1VTTfCMFjUeCQDYhDCXG3dxf",
  "key36": "4Pu9vufciQKNkhAUS4dkvzwWXT1uEV6ysbi2rHGroqCRXK4J962EzSiLUCmwvbLAEcTYay68CSezE7NJKEPYzbRe",
  "key37": "46EciKvhSzQHH27cvRWxNNzgQ15xcczieVPPBRTsjQPVv1LM16o6zLmUM4t7NLXhF1DuesnAfSTBmN8crKwsLrA",
  "key38": "YSukviTXeGFsxNMqAoxpGffAdfoG8GAC9FK1oP8EG4pJ9GhjxeRdU96eB2yE34mwHwg23bdDs84ebJgDjXHbNNa",
  "key39": "2eQEkx9wVMrpksw2Aup3pjAfAefLAnsTXie38DQkv8sDsFHXGTaX8UQ8tanWRE6raroTCWeH9JTZPd4vvDMjYD9F",
  "key40": "euwjtppH3uKEW3V8NWCMufRJrChsQnzNu9PWX1dPxb71UaLNWVPPBbUnPGcD2mMkNh45LpFseue9KDwxuqeQDqm",
  "key41": "3X6S67x6MLeuNZatQeV6SGbTx2WuuAc7t6BZqcHwqDNsoBy3d167oo7QV7hxFw4GfD9iotTvT2eTdCboynR48yWA",
  "key42": "5kzrpXMnn8Nd4Vrz4Bw9usmEeaMwmsWuPdpeokZrpdkC4htvbmZZRcnZDdpygtX2tY1LWyrPcDs2s86Qstf8Fkyz",
  "key43": "49mVuSXNQjKSjXdt6bfkqx1NqqV7q9Ks7WyEG7Qq9dBEHj8zxypVwehUEYT4vFambjcRSuoExSLfhDnv61DnnHQY",
  "key44": "4P23fiHamhrnEFnYJV8iD619ThdgfZbNUZZ6hQS4dPv9qoURrGduRWPMLEqayFWzhsvNZfCbytVF1Ft1N1GFMs11",
  "key45": "3QTs859m1rA3TdXjmuYenC7Ydb8U4myw86rMKrtknwpAG1BVhPi6TFuxNuXUBDqnkugKqfkrHsAV2EZMYg6MwhBN",
  "key46": "26ja3Zzwa3muFprEkQQu6DzEQEpcMTwH5aXicv3unMLc92PVY7uGvyTguLSd1u6Hv98wzTeP5jusX7Y559yJh6iE",
  "key47": "2qXviGzB9G9PBo4QGYAV6dHQYK26pzpTMtFHvcxZTmrWgkCQhiQshh18Tndnz9SSM3bftkr3HMXSjsPeyxVSwRWZ"
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
