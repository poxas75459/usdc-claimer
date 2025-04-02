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
    "4uD8MpjjhhKmzYX3Q5ucFmZ4KUesnH297jpcEdezZCgDSsYMjmGgrRmCVURrW5LziErtFWeyTRKgukBZuuLUrzj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHN6BXr3T4fkEbZ3B88rB8MWtm44cefNFXYLLgGEA8CrvuvzTBj66gZKrebd3grprqnuCoEDMj7YU5XSuRbkDJc",
  "key1": "ux37brqiD4EB9saKWmHTN4yknNTmu3Fm3YZLWEo9au6iJwLbK6oXBVmfvEMjQMiEaK7fjzJkWHKciiiSX4yraHp",
  "key2": "5VDfn1ys9LdCDfdZAzLMtEsop7hMTWe59bXh3D8u3SgMoXuUriwG5nUxFTcGAFVEK6zTRDgu3mtP4wG2DpKijZiu",
  "key3": "4wmY3Jc3TUbpSxGkvJWe2BQcCcykyLv9Gz6Y8yHpLLYRMaH5HLe8cX7feSX3SspbG3zpyUmGzbJ5rJdv5qEwNTqb",
  "key4": "2bCVhvoaigQ9pmPegZbKT5huAWeoh2zezG2fGxMNJErSiAb5UuENhV8aGqhEE3EG3RsGgw3MPxMhhcehjNvZCHg",
  "key5": "3KWnoLpNSBUYkgHWyapsN8ng23RecjiFKirhnRSxisEzdA68MwhyiTgGgxPPsGLMJdCtLHvA3FMdaQ4xdQAHaYT3",
  "key6": "ekvkY8VyWFEDhXwdbFFaVunzBEjCazkfkAQyCo8N73VBbkNvANn3CVQGHqxrnZr4UsGVCz14DK9eCmTNspMbGwA",
  "key7": "5SjFENBUvg1Q3ynL4CX1jsN1VpKSoczPDGtSECGGGoJMV3sCoZjSv1KKJXK3DyGbHXKv4kY5uGmqx3Ge6arREpE9",
  "key8": "2waTbupGPZNDfKSTVmJcg9zuXsgiRYgqknJLPTqeiagfuAz5ZzSo4Lc8PPzxEoe1kqBcvZn36SKnrg31ofh84BbH",
  "key9": "51fRHiMeT5pSpf8kS7y1KmW8XTxvD2YJ5rfHjXXa6vkLrJ9yTX6Ph7Ag8WYRDMwqjBC9cp2htPUJTMvzLBmaAxqK",
  "key10": "4euBn7qRGWgyd1WX8mNWuePECN6UyXcBy9emGreMZoyk8oiZXnzFgw5Cv9h3DnwSzcS7GvdM6MmxKxGbB5t2R12F",
  "key11": "rg31VRWNpwkM5H4tkdczoB6c9EwUgm75Mg6QC4rXhGQuQBL8wohtCgqnwPhKFsgJJSV462vSeHVKJSSz48Rjacv",
  "key12": "qiR83t2Lyj9UDEPV3Rz7VKC1cGwHNhubxHqkU46Z6iJfk1D4tRax7ZpTsm7dbzuLnRMNUFVhNPENicL42tQ4NiA",
  "key13": "61Lio1t6UWXu1jRYQrSgdfAujfhDE2ayJsVpREtckCZgtbf1kUdWewzfHNeqikoG76QEw4PXJFV1PDBNvMdCJNnM",
  "key14": "2zUmq4krncycMHJ4ZNFDpWgmTZeSzw5uUMruBKbWk7KjBxRgN7jHVS51K1om78sBZ6mjKceYKhhLbZ1upYPvH3jh",
  "key15": "3dugZrsPRDoC2EkaStYEN7g53PzDV7fnQMZxkoQZLwJS1FL2AZyaBArPmYr5zxuHxZFyYDmoA5G5UPYXJpWYLgNk",
  "key16": "4Y8euNFHFMt14epyxCsZ4B3qT61Tjo2YeqFdqb57kPFK3DDfEhgwBRi9NmYtenMwiViUHXGkUc4RkjD2vWAG1TZs",
  "key17": "2H6RC97zGBXRdLHuncD9hZgqm35WVtosdRjQvLd6aCmvXZSeqP9jshWsMsvBrzXgevM7J116UBVJvqUikzsvoxgo",
  "key18": "2iYetD1JU8trc6Die9Paqs6bMhn3rVog8Vr2w6Ujm3nnHzwCQeLiYM5mHyiAkc91AtdgB7uovEMBhUyjrvsJzwFE",
  "key19": "KVf3UAAtYVgDreqEDSusnrub55oLLTihcntr9u8DmrWMC6bENRaQq23Vnnra8R617462zrPpoiz7LxhfamH5Z4W",
  "key20": "2xGyiALh4EGcsEMgA9rmmzHKmuUc3gcFaBZGprLUw9PSyCp7tYZMC3AJpzyZqhkL4L35bxe2ovKM7gHx7hxiFF69",
  "key21": "2sCBtvNMMNo9uj3ZKhSutLtLwFKyHpWnEdxJNAfj6SuAeXsdfNrNrsuoHndGV7odZm9wTLypFvF637H3fUcPPq7V",
  "key22": "64xmZL82vcbpFqpbMdX9FRHN8aES9WAnDY4H7iVXsJ9uoPc7C2SPWt6wE6d9vv7ibp7YrhSKdbLERdXxqzLxjqnc",
  "key23": "54pnGRT6uwGhpQwU2knKUjVDgAmxTY2Z9z9shBkyq7R7h5EJAxDqSeJMjeKoFQUaXEVrcV1L499UwBUK4yRpUqRt",
  "key24": "5S7FyhcUZRDVZqR9endJHveFbS5j23DKTqXcHP3pUbic6HEkPcUxGk8KYK6VcXGYokTxWR2KF6GrooJ1xShE6hFY",
  "key25": "3uu5Dh48SF2cLwASXiNJ1mAfVsx898UpLsVgnUuAM4z9W9T4pLMgcYeTeYVg7aJCTgkVzKKjEQgvck2SmC2Qqv2o",
  "key26": "2xbtLvZKZJEFaCtzHP8rt1L1AerKbEJCsDA365QjrN4ECvVuLdCPgFkpgq33JDBqCdrc8dRZ2otioFFVhtGwCLSg",
  "key27": "3bRndqTNHLFrSMFtXT7CUrhxjWmeoCN5SPRUGKii4iXdcw3KVf57HorKu6P2SsheQ25SkAFDxkSdfzHiQc4m3TTc",
  "key28": "57oBYZYqfDn5Nhtuz9njXpFsXiAsnvni38MYRnktwKB13ZjN2MgsVVprJmV3Gj9qsQDubPgo3fwnKYY8FQU9Waxz",
  "key29": "2pkok1ebSUoFDDTmr9qRdDpr2Gf2fYY4XTeVbcH9foQDU6QpDpi11nQXqHdpJ855muHhyFUFd4HLoPHGNDehbhqh",
  "key30": "2Fht4ncUtYA8RzhQSGR9rUDUNhV7f4daTDELV3M3CQtU9YSRHRyD8wYqvySBiAUx5smKETQECbvXDixq6wBYimz6",
  "key31": "2CTspVsD4XjG61QQAK6igBzRCRiGhckD6bPDqXteafRtPzgLBMm41UTwZJHX5tXDDafDTiupTbcAqV7GEKNmxTAz",
  "key32": "3cgPFGr37VvzqPAzo8uzXeEkUsFHQfis4Uyeh9u7gzM9vEXi8ovAHsPGehZ9tHrx8t4igNjG1tyWwrfQySBmV15o",
  "key33": "5qh9ttEcXADBMNVWd37o73P8yQdNSDGxCpGjxqNvBYVoQBX1e7Bnz3hLCNz8Yo446yeFVG76Du4nzxPiZeMvME9c",
  "key34": "sRAZeWxivgPirnNBYC72ZavD9ij6K8ynXe8GZLMgYWewDbK2x3s42zVcv9ZTcajk9pqkgapqwJg5tzWyaguuAwe",
  "key35": "5HogYhhb5bjVgkKQ8eVYeeRb77E4Fmbah2RYTwxxWjQvS6PkMXuJAnPBmB7QgikmAaWHogGsnE3Xt8gun9JDxJ1m",
  "key36": "2riAorL29c4jfkFDHZdjXbrEtPA1i5fvnSjFrHLuJAQYPzEdbWcWKxR77K8JstuSaEUumsHbWhaMs9m7tT1vwHDD",
  "key37": "31nGB2U8JmQHwfXkHyM7Ny1p64wSU9eP9ZjcpnuPwyNoQnD42FwAzctQx8ciJU91Rm9yXvcR4t9TqwqMqQPggkcz",
  "key38": "4zfiNq4ySa6mNZKcEEWUdBCcMNHodcVWers2ZYxeFDCifu6eHMDGU789RGNXULNQss27eR59pjGSqGHrk1NaCf2Q",
  "key39": "3TU2ZZrAWawmCSVwSDdFwXmKRsQ9oEubjNBd2gRvGCW4vAXTFRGUXSCTCXBFUFouExuaEiQB332A5sVTgiP3fvi2",
  "key40": "WA4o22yeXXFhat7ZaxUkQpmn5GXegfduid2gUYPm9LgMtAYq6F3Bu3yuxTS4h1Fexs2Haa3s1uKPmbYyMu1NUJN",
  "key41": "4uPPUfYYKfKZLAgb6GSgERuZkXfdqjeozFbCmHaE11xWe9prGvSE36j41iuecWDcTF7KKzTxR6nH8FfpTi7P6rKx",
  "key42": "4tiivA9JCaVC255mT7s9F9X7pYmKEVyNx6HTT6VHwg1BE6mMCcA6u5FF8Y4FyqFrGN652DMRqxYZ7ivc5kdAy3hR",
  "key43": "5dZPQ7eV8oBJx83PsMTRiAYZCzYouSDRLywoLMmhkoDSo4tiqaJbujA7LuUWq9PLwbn8TFwv6LdjTuwsmH7RRDe",
  "key44": "4ZwXcLKj3BFeGB1P2BTFb3jEiMVozDKCgxM8yPQqcFBYuGRwuEW9GSJzTYYc981VL5JcDzD37TC4AgChcRwMUW5S",
  "key45": "3pEzjHZ6FhdJYB6ZcT1tYqHEoyTNHK4wZQXRNGvQHkQphM7nbcrCU23WKSW46MyazWmx6nj69geX8X4Y5dnTSDVt",
  "key46": "25fvSkqA1wWxthWN1bPkbxAe2QtcZGKLh8iobnAAMT9crNHWeeBxdKb9JNUjH5wgPodS5uDuoiLF6CbEHDhTwWGK",
  "key47": "2U6QhY1o5ogWLaWMvkMBTfQuaanY5WytX1RFjrFrM5sjcmqJnfHroqxG357WGWYruDR95tViZUgqMUsZTCNVjU1D",
  "key48": "3KmALrQLYG6hSXA19tRY2bgqv7Wr1b3bSAg26gBWN9YAwm61bZ7CHj4Nbe2XJGwjzveQeynzg3ysu7vYN4yWTVuP",
  "key49": "6FGyKopMHA5jQVnNnmrRH4Dbvtx1bocRzxURJhjs81DQxM2skpmMLTSxir14GYkHgeJiBrxN8cWLdV5D17bG8iD"
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
