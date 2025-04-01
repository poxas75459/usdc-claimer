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
    "3NPDcRUjEkzPo5rqtAnH5pESQ93iiWa8HHzPKGw7g5zGzou3LasF94sVshSrsvaVwuqienS1Wd4AxEshXyWYP6Hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzYVz7JkHrPqXeoyTDUARRewuAfuuLpfC389j7wW6LxrQduz6ZWtLHb5xgiTX89K5vpTJnwFCJvo14iD7xd6aoM",
  "key1": "qiYGt67gjQ9EP5fqiXN54z7EGbs6PYNgpuhndhz973CdhEn4ezxSnsCstm38JA1QWHMRc25642LyKCNjANVt1Wk",
  "key2": "3bzqpCUsxcUJX3myNiPoCqaK4v2mq2jh9obCTLdQknhg2svYS6kbvaXxi9DyuhhNs7HX1RZVvie142G26HSZBG9q",
  "key3": "4gMzMpNvJ1hSrhhLXyF8aasMZ86cAhWJeWM5RVwCqv5XcFQkNRKZT4fD7APoyfgGEjwH97AuwnsqHV73M3sD7Yke",
  "key4": "2NgMif5yAWFiCnWapBWYgbyQJEi1XbK2eUrnBwQxidSVKi5Ag9LTKcATX2kHFfA3ahtAyXeuSuYXiLuZpGSh6jP1",
  "key5": "57mTiCzu7RGpQM5esvw3iNCRjomgLYWWmHqyGwD7pVEBCk7mS5YP18CiSBwMNuwVoTX3m6U7aCQjGBQY9TtbbqBj",
  "key6": "2dQZGzqwoKX9TiFDUVdpe1o4hprrGJrtqZLp9T9GQNw1NHHuhYcUM4KybCZCQMHNAL4XXRugWmNcJsTqueY2jaM7",
  "key7": "3Zo32XvCHTd1Fg1jtxpqh4h2uDRryZHs93cggWHf5GtcLNgQ9bxSiUXTcNhc1CKRSZ11U81hVnVTpdxwXH3ap5nz",
  "key8": "5aN8ESZsKX7gk3cztmq32NXFFjqsUBXUXE94vTtcU6TM82jsMaj8xm1XsnmUfmDEMdrdugKp3Lgm558QmapN1ZYq",
  "key9": "3A5ojguhw9AssHPNibE6c385vAWVdi7cwiAnhQKKRkpShhs1tUkS99hWEPr5GgjvX9s923PJSfQQwwrSasmW3Rjr",
  "key10": "3j4Lq5uhR773i78P8s79amUAH4uCuR8A93qxZkBfo4k1RhkmJRhZjfCK51ZgNk3VUMXjmKdxdMtvgvmkz49M1xUB",
  "key11": "4SiDrBc8CxurLJq3cWuwAyNMJY1XqbLPMw3iahgUMT4UqPZgzYWgEho5hS7fpjVLNjmuzehLC6Q3YwNUikwxczv1",
  "key12": "4nwPyVACgZHpvKpmy9F6bAPzpmc1mrUz1VEz7wTDLYJx6eW2bXRK2LY1iWv3g8BtX6xW1gKB7nH9shR6m21GsqWS",
  "key13": "3nYUBZRjZxRPfVsuZqaMk86sJUQdH976u8ag1K4gaVTLto36wvnCfzEaMDykDLeD4LQrcZUL57VfM9pDrxQTakiZ",
  "key14": "2YpAcuqM67ePpFvXcD4onUKcbUXLDaqP8jV4pZ9jo4kSn4KihMwDujejkWDsfwimCpxXV3W9U6Raa2VDCCBKsEDi",
  "key15": "52cJwKuLojTeoRcpSXAs6feypAYauz6KufDe6tWwV1577d2WEv6baPS5XigH6DRJsXsJpN42p1HEpTTjTwtzu22f",
  "key16": "26imzEKWFQt2g1WVRaCqmhk4pXiCQdHZPEd4DmseeN5R7pC1VyyeQwP4L7obgxkhbyC2tMN3DnQmNT2CRBVT4SmE",
  "key17": "2wwzbyKeRfydKGpEXZjzZSG5fqpT6XASQ6Dsfj3KM1cPAU7h2UvwSxQyZJKZNmVmBTKh8h3casAUNEmT6xXc4fGR",
  "key18": "RstiVKbikiU5yK5KALyKGSbXwW8YZ8RKZ639L2JjYC7LtinTmPxHPcF23yhdnbZQk7NDmhrT89ZL7AwhtKQoMRK",
  "key19": "3SmouZ3BoQF9E7RN3AKFut3GsfHEiiUJkKYEupmFFzQa4jd8bECdLgTi3djWFkDR12HW43GF3ifPLutoeuEU5wpo",
  "key20": "5rDE2fEeJPYQzZr3GeV3uVABLReBW7mNPi1m8KcUyRRNyZ7h5NJXiCc6F8sstoyhf2tN3gkQw62dtjs5Uo3q5gKR",
  "key21": "4cJji8EDYxKMhHm8PwDz5C3ccsqJnftcZGRdSGsyk3z5o9hE8bvCL58eLsCQ54Rhyt6suiWX1T3hZwBjwRvJcQgT",
  "key22": "4aniQnwECiJ7Pc2d2XHtYHqMnMcxvuZkQvBozKCbdCjxFvQwd6gCqkDo1EzWE1YUTQdxkcSr6mqmEXm9y1uedyFS",
  "key23": "2nNxZUVcYATHpuaViXXsA13UTHAtQCj8L1mNP6YURozWpKCKv8JZoEBiP8BCet7WpwCVafoPxra5i2XmP8xqFyVS",
  "key24": "4viw4GETzBdmqYU5TQt2vPSMtwyFae1fwS3n9CTNe7U97fSUQAPfPhnC7g9oGNigW7eDi2YGoB3H22PRTjyBxHAL",
  "key25": "5dtmJSsD6GQnWe3gqvCoWBZqYPhHx6ApNVxf36yZ4SEVXtmBywrUWkjvDsSZhHMH7XQkNzUcTThUZFCdwctcjLoP",
  "key26": "27UDhS31VhVrwxNK79pu5VFbZGCaNrgLD7BhZ8pepb78BmbS469M6mjEwvtc8eEBdTCKgRAEJjqK7EhEosff2Kki",
  "key27": "2LSVfNELdNNAp9Kyx1adfeJWzdrFAijLSzoJzviotaWQS7UMqiWb4F22iqGzTtZJSde1VUnqjbFrSgSPKTRSEbyj"
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
