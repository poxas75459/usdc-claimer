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
    "658pAVZRcoVmCpeB9KFJFurBH4qCi7ni5pTLkJBuC7PVXZuUgLYWyKaZv21saKd7uDnVWjAvmzSNvfzueXSv9idV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMhYBzVtfyGJSEh5XCTrAd1koh6GCShExBHQX3F8Tr1uqWT5uhdQ4rPmdpk7KXbFnE5xTgWWgLQ1nrpZMSVokLT",
  "key1": "4h8ok2WgdeNKfYUrH52dJ29mjZaRKjBJRCrbr7Gn3SXRk1b8Knhz6GfPNvawgHqiCDqSTRchHbAvK6Y9NBQJ2Qnj",
  "key2": "336njFKFyBcezY9uLVLF1fSBNLSdmWmuwTo6mfE7pZ6YG144jWfXvx2SoDXRVAWf3pXws8yCiaXj8HgBYqvzF9d1",
  "key3": "615dzwSUMR2pe5DWFi5r8FaUTqfchmWqRPgEzuWnkU1LBEiRNf89uJdMWmUSnj179TnD9pPcP1j31W1pfmUSjwZT",
  "key4": "2z6G8SftyCXJVhenFwWiSMiHGJ4mtWok4dWcv7rPtmfdRUyuV8A3mchFktKT8KDnBkcSF6WW389EbJD3fQzbSYAt",
  "key5": "L8CVZ5GksSvhtGfsGytzo1YuWAA4gh2va4n4AU5cCYhhvJFWAT7Nm6TNNzxK7EkrjrQsvjNnepT6yg5xZpf6rbT",
  "key6": "kmeB5esFHFVp9JnsFx4cH8Rqz8ZBPxzRpnszxGD2xhfJLUWSFb2Cp3KaMqtK6heVeqSYqG5yB8NURiNtpnxAK8q",
  "key7": "4EFwhS49obKiaFB5W8hG2dCiovauLHXUpQHNvpiZu71q9nwQpFqEJY1RhgBVhqWnvEe3akUUnFarvcSyELQ3FdhK",
  "key8": "3JhHQQrwNZfVXCMBjX3htiNmwMzeY8a1vnCZb4A3xXRJcB5KMtjEHUTCXYE62xqnbh4DVWqVJTD5T4EwKoZ9wgny",
  "key9": "3UykvNNd2wGLGvhbwHWtmVCjdanfDFoGfcUNAKa7LjzXTLjsm66EbLZEhE74StkgqGgF5fsWJTpCojbCnk6H4PoK",
  "key10": "5ktzSK4Am9t9Uo9A5R3yr7TctkGV3NJUBjnbE1nJgDFyeF9d6JAHFTxXmJT6zz8UNdKrvKTAyt5Km9SPCHNiGMr7",
  "key11": "35FTEEPK5WWFsyr5WGFYYo568WmKKKpy3K6NCmAmc7PQKUnfzCLdqGca4Rcj5x8aAp19zNcZ1VsdHLK9Ktxa2Jb5",
  "key12": "5wNtsje7ByhqmroeCud8VmfYJbMKZFK6JmhSoBTgAbetv4sesXkNh6zcfeaaExfwu3LHmhViPUfjAvtxVDMFnnmz",
  "key13": "3v9nhtZZySBFeXSso2WnLeEw5waRX7YKFjSeB7oMRCbJCN8e2cok6i7agBRcLtMXFRp2BTMvniponK7DQQRRcCnh",
  "key14": "5QBo2HZYVdZpKW5ahYH2XpMTyiHebxqPeZQX3qQDpf7JYkJ8Dv3CoRvNKB51w1tYF7DvvXnsEWN769KHzFRsnqSb",
  "key15": "4jNW4o4nX6TJEhYDAWZjcGMn7eF6cPv4UrEs92DqX9VUdRrd3ArSuKakod69LNxSzgF3JPbrwxywFuphJRGxwHoF",
  "key16": "HdtKJoCxQiipcj85FyPncJCYFqHT2bHxJRSSEtk4aG1JZsuBJDcHwsuwJ1pj3TQ33YuhxiMQCgGsWz4xnp1YX3t",
  "key17": "3WWkHXhpy49ht8mur1T2CkNCvXmUW48dhoi98QwgCmEPjoa26uVpjM8C5HBxEXdeGECdksAWJuEz77JDCGvyqERw",
  "key18": "4ge9ogZuZpwKvxpCgRDopAxjjcDzqdiBUekxmE86LuR7JN5H1uZUrez2CkrzSFfSBjjL82Mi7uTj5dN4A8JhEXVc",
  "key19": "CgRNGfQWVJrZxifmC5yFLZL1EaerCfCC7frY6tDv1m2jU8wh9djnW1V1Zz6AVmwaQSZshxFacRuxeyRfAUkrthM",
  "key20": "2e4p2JSb3Wyg8gigCzuF82ebJEiSCff8fLNM2kC6QeAYffNqCb4cVLv8LaNKL2oz9im39KLa19zMqhbZqkFN1oAB",
  "key21": "38ak1m8oHkYkoQ424Mwb4r9zLPogBdC1HUMkUNMNkpwSAHqBKrMeEK1ABxT1jEMkLg4YC87obFswZijjXpxMRfpb",
  "key22": "42KDDXxzaUvGk8QCh9kgNefMP5vK7oEraMRhFeaQsddMWjPCCQwJJEWrP3TZV4PatNCFfJYxAr64Auk1jqxWPmT5",
  "key23": "127ii1XMgAVmuL6zL1LMdXi22uHRtWwRnSfEcMzeXKiXoo1913yMk83QMFeNoZP9Zam1xmWiAqEcji22gV26dxBf",
  "key24": "5t1U55rZZrbrffiSxPKYnkEwioGfQYM42oZYijwbpYUWbLSMD7Qgyn9eVYjdRjBmuPjdZf8YagZXgLuryiRGFCkW",
  "key25": "u5M8dEfaZdQdeiA7xgZbAxbyqWzGUy81LSrCMEh6RPxuj2D4tHq4N1sqytHCanPKFX4dqU34A1youmjLo7qfEdv",
  "key26": "2AgSiTz6oVCcGPVj8Nz4Nbg8sdnC5VLjz8PVozYBNQiq8MQQuTB5N69p4fB5Bcb2TJTDSvnWdjfZQ4J1rQ8ope3f",
  "key27": "2s9bty2Spt4A66b7gpvNLkCYNEhuiD1uFtDmeumaagvcZMHaGuygZU13n9g7vs5AYJ3S2mAjip5NaAXR2kit247v",
  "key28": "53bPvH8sP5xPGqwMtpkUiFd1xjKaEPqtrG93SX34aSc8117bZTaog1C1cfUmfbS8jzugeK94LfNYE8vdH7qjaXBv",
  "key29": "dRLcqyDJRd9pszFqTgg8c2NVjZqnEB2iGf1bTFLRhBTmk9meDab29n49ngoCeg8YeC7crK5gaBshThBKsTZx4JM",
  "key30": "SgwGCwZYddtfoU7kVZxUrPNhqrDAFZST6yUZSvhQcQ9F6ftbqnC1Yh6d5RPj5Wdxax8qVC2ZU42tP2Eqx9Rv4ZT",
  "key31": "4XhkmFLBhPmgeoySuHT5j6agsv9cdjcFLeuzzA2pN77M39oSiti9E62JK3yYuJBTcmPjwRmW6XgWRxy2oJAT5fga",
  "key32": "2MXN5678Kg34cyknyyk3D4bLFnWDDrQf429tKzyhTULB9eewwgv1x9mmAMpeUaQEdediUD6tR5WumZFo1wMkhUkZ",
  "key33": "63QvL6PDkfMFyP13jCNis6HuSYaFLwHzXmmS7DvkYfmLhTrRs5JTNhSRjiBr4vpcSBibjFqAafPubcFpqCk8Ukvz",
  "key34": "LiqCbfTawDxH48Lx9Da9A6hDEyEQWrWgEQXdxtNoLY9z7kusnGPZyjM6y1BPrpVy5dNdgJuEacDgf8mispmwhjH",
  "key35": "2mbRPupnyFNKuvoMdC3nJubq5CrXN68ozS4j2JcGqxut2EHaU9k9ADqnqhekFFTKvCfjo8J5UJMtaFSc21EuXMX7",
  "key36": "3L7XbkFM1HxXbxAfbwy8KGvPLWeiZzGgRV9zU7XeuioYV6CMtxssMLCT5Br7TbwVaXmRTYDatWEjo5eDiqnJ5jNs",
  "key37": "2uhUSbASt5SeyvPhKzuRWDyegdSPf6j4nm9pax77Be9NqmSZ84Ae1YC5bnvCYhdZK9mfGKwTHuzL2mJ2NTon7S2n",
  "key38": "5k34CppogtzA1kzDAAhMZnpwiEFF1uZBXFEAps2qHCHd6WPQvxua1etCxfvZEWSNwCD2Dwm21vJwUVn44edpyNoN",
  "key39": "ZEnJKaTg3akninUW5M7VY2y5R9fK4x5gJgBnxtC9fV1kPGxpbTH3rydrYK7sTQgoJdEknCLp3MC3eZAZn6Y5xKk",
  "key40": "5oDF4T5Ws5WjmuUPnYQQcuDNfjB1PNcELtCHwbaq7gYdah84qT4AwK5J9V1PWUeN1V6W3CX3ACSirV87w2BEz8gh",
  "key41": "5xGERRdZ76FwiKWdmCr2eVQXpxqQxJuc44mnpsjpsTYaQfvqR324jN8XSemdjpAKXV3NPb11iW8wSh1LFf47N3i2",
  "key42": "4SZzd2rDibKzxVWhDVYjWjbMvbBPiTKo9xfpcmu8ZFWPex77tThRs8Hv2zXmztXQ2NSpavieBpc4AbbcRQusx7va"
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
