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
    "65QAFNwibo5ZZqzVL4ZP5ppJSYm3fJncgS6hLj2BZeaMKnpd2wtCHwW18cSHKX2Ebc4CyH6nsWWDw9ZYvJ4PE6r3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DynmyDefyvy38ZM3bQ3952MzirRn7u6UwsKiAYDhcAAza9zRYs6aL9QW4WCDTJEsaUw3SgszXSjXXuwTT2kyHQo",
  "key1": "23riabMM5p4sg6wPPXKr6Ktcq2sgHzLr2eQuAKNuDjNRiVcu1JrVBTFhwtNjxbhq6GtBToX9CE3K6zGQhPnvCZ8k",
  "key2": "5ENCrLcDTTYPYtPmBskDzkx5an6noCnZHaS7zeHV8mKLZ81do8ZJ5F4hSt9z6jdeshNkTbxJKrR95y2yVy8mCsZq",
  "key3": "2auUwh3eGUDmmF6ei6BRi7FSXnn4FhQzYZ1FrmJzDWE36BLcnVPbdKm9fFS9gwprKm8dzTRUCaJjkXMs73D79fc5",
  "key4": "4YMPAQuC6ePpqs99hVryKCzLeFhBoiRAxrEdydGjmiwCKFfbWEyfuvgLWVAmEfqXJed8PcCsocvM4edDbqEkbLpt",
  "key5": "2HLztPH8f3uRWFmkJRvavWRLxfXNqWn4xAFWb9sd3zSFhXNtbhW79PQNULURmgVznEwQXCmAcSWTQdvprLLLkq4k",
  "key6": "4ezMrjutdPV8udHLpADsZcG1zmREaGFhdoN8jfhrFzfWENxcFFNLhm8eYmJKpVbS4ggNhuQQmCWRgJmu185AS3F",
  "key7": "2zgo1gQ5FT2jiVc9KgKDQU9xDXxa7vBYEc4XREcZX6GA5EuRX3uvHFFd9SRGkkTtbGrWLRrQyKKGrR53wQqaFDrK",
  "key8": "3G3cVxqezjFWDxjU3G63SEBFpWw5cXxX1NQJCjbjRdDjwrZKE2WJsRxsajBcxr3fV7oCivznyhuhH3qD2w1zBVER",
  "key9": "5qbwj3on5uroW7zVVWY2kam4NMUjiZBrvhh9FkYhk45pWS2QgCjtMb8Kb9KKP7BW42C2DP1oyGx6gDjVoCry6tjZ",
  "key10": "7LUYS9rPQd11hfDja9ZTowu4tgBmwtBSSzZ7485dRuVR9YtqHWAWkEAp3U7Xfg8Vbjq1KQtBvo3LNWP9ofk8fHg",
  "key11": "pJWqh7v3uGu2ongZpTpKoTNC6cnPQ6u8FmuELzrFX3FtrvwWpzPmjaFUzTHMnQNqPRp1VsdqkeiziET4JBoxsLR",
  "key12": "9C2R5LKc6su2g6cjScWKQeWDozPFrxqp9SzADUwqVwHj32h36vrTd58GwP4fWQYRD239SMwHBwdteSxNTckkGu4",
  "key13": "2rQa4AqYvpma4fgB9PdP71m9CqZd14cAqvto1txwKcob91LhGP6rYJcrt6hXv9t3Y4HH9mvCJbuS46kjrgTfUmSV",
  "key14": "2EGrB2gn9WJDYivbC45qirenRtsJgm8UmqDLG6Yoma6RF3oB6vmNdAQTxa1HXKsdvFMqRryWSSthhyf6mSsHAv5",
  "key15": "4KGeg7vQZs9N4Z5Vpy4r5chd94MAUB6Rs3TNCWeySVrJ9fwA5cHswZNtiipnvBHBWdjaJK7NDrEgpogJSgjhBwvQ",
  "key16": "5WQAgnJo2HAZtgoTHPTrSWDcyEHbDP4k1dUavxU9ZHma3mnPqPz1BsrD9U9p8KX7NXZGrdMRV4aywDwX63vHJDkV",
  "key17": "2vEtftC5eFoHKDRwFCqPXSHB3bCdEoQTpuyLfzXwyNxmrSzPuWqn8PSt7YyVxq37KHobpxdeYapHNqrDSRxKHy6M",
  "key18": "4MRSEmHmKrUeYH8boqbKd9BD5tiYuvdSBEVWMGovaJ8TG4wbTRQPypK61bwwqffZ7UDDXwgGcgWn7n7Bvx14qLZW",
  "key19": "5mPoEYSjrKBcp79QCEkbQfBxmAKbTd1XgqSFcJtpiZ3ESKi8jztj4vwPEK76SSet9cYoGHnLPtyEbFxWJfPRvKgQ",
  "key20": "3qDtfoEgRAPJLy6kzRVV8tKVBrH56nfWTLw7XaPV2f55PZAgV7qmTPwESGEyLpavALKGPChZqNhkqrAyzGWxPgtc",
  "key21": "5JvXMoZ58dTdJRR22Rosj9DVEiGiK6kpYQ2jn7YkPKji6i5RK95baT4YHD1YPstYmYPH7BspnjwmWih8bEG141er",
  "key22": "425qGjrk2BpVy9PViKAwxnNNNtmz1Xo2Jmmcx8yUdjYFSWxSaYChAiT8gLmSQaJoJJLu5ZmDE875jP7SezXVRSp5",
  "key23": "32pyup8TxG7aM66WHfFshBKeGYJY9xD79SzGfhowrtmQHqgCutcfWUJKovnqUVH9ApxMMK7vD56WQ9wfUgoFEmA8",
  "key24": "4Y23wyYCAxXPvuxndtATfKeksD5Amo7bYDamR8qL4Did61widzpWSe31gQJvG1ftf8ZQ3rSafs3ekZj7k46tWtUa",
  "key25": "4jjrwZdhSdq2W3gzk1SzCQ81ftaYVLMFCZ4M7DnX6RVQqVFffrfNAcP4JzDAJyv8L9evE1Hqs2kMwPn9vuWKFfSx",
  "key26": "3kQJ1XL25sSs2uSErotKeYYyduDzFzqoPMdmGJRGztBDBZgQEzQ4R87MJXYmXKQPWSSStuArDh87XD3s63CNGVAz",
  "key27": "3M65BpbdBP4nMuhtdpzZGEs5d6uhRD8Y9xREvuPiirVCySZ2R4K8WEEJT3cKNwtQxdiDYr3XMMRU4qUCR9Z9yjHr",
  "key28": "4i1NpMU4toyKU99XJ521J8Zuc3N4j83ekNmbgydKkfbhuHVXUzitLkGseUugYApwHanbnRqB6Q9nTxqq9uotbL4z",
  "key29": "5N29WW8H65XqMqEcNzbuzUXS5oQLqFNncUQP4GL17nvqsdMWe9fTxka4cKcuSBWCbzG3dQr31j3Qn7SNppKtLuKj",
  "key30": "3tKWcFL4HFmPEu8MnYZ13BgTbJCGeYEFFnNYj8o66eEMsmnFgWnAE9eHr1Dk59RZxhE2uM75FapMZ1aJJ9FEh2tZ",
  "key31": "2UQgTwfxViGhwB3hr8MConM2gjj2UDwcebx9yBqkoYmbZgQ6HJD1fePJkZJGVmFA9MMpjYxcnyGJWT7MyxGeQoR9",
  "key32": "4ivWhC7NEfSp7astN4H9K4aTHwsq7pBHstv2Qoq8zPoXjLJUpTwiyNKLsFGdcAVpnhZiVut9tLj7DsQ2VEDnYXgM",
  "key33": "3v3ikHsbFL6XGVQb2wiVdQY32Sm31r3EjRxv7jgBWHdJL2kr3FFKYDCpNjcfVbRZ4dBvToc4UdUsmH6TArzquP6m",
  "key34": "kj13gWdsY7KBv4Z7WVrbtxqYmCSC6DfQFyGMVrWA9CdLNueA5L517hgBn9n2baaPpQFuvpVJ4oafCFDcnMQUmkL",
  "key35": "2fcDYYDqGmsa4TZ4DunYfGn42MLoytDjPvAt8KddAEzNEuK25yRruDyrL6wQs1xjdCYVDp3yyqKa3oAF16QsWsxD",
  "key36": "3cv9qKmhDXhonF4cx5Ny85LvBRc9WjRNsjsDzQrAWKPnFteEGo6F6JRn8rXqAWfMteVkPnEqhK3XVijgNjw1VPzT",
  "key37": "3WWuMYK3B9d2yDJVhWr24rL24tojnCm9t4cssr4GtMJJZMGF9cm24bW6n2C9USzYEa14R2y9PLSA8KtxPQPdYVHw",
  "key38": "4SiQ8qy2oUPBPCF1yhej4xRPgzfGQTpCn2Gqb6KUv7QxaJSyS6FNo1jnyYBri7TrSGK4mLng2a1QxCz51Rsm3jFJ"
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
