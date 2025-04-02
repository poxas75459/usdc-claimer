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
    "4r1b33RZX4dcszmy9DYGiUGjYS6yGjpUoT4bCGY8Yam2ukbicNaQkZVJCv1AP6k5J46doUphdL9Hs9uR6FxxVYBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p6EjEygbmvtZpo2d1bgW87vFcgBEXfisPCyqwmKfipXYgHuzMNDu5HobQnG629EZKzdLqMumDLWdD778MRYwN1b",
  "key1": "3CxZWDp3gHmEeETEXrCzM7cBFrTGVd9xCG6rVHrnnRm7HeFSbTtubVnfYfZRRMsm9j6yqDZQFAEgHybcjkd9EoDm",
  "key2": "6789peSjRpWWkRNDkwn61B3ATP1AsfR3DSVGbKRy6VqfnFP1v7bqQHUvkRLjxNMtaFNGCwjRrRYbrUHnHfG6JJE3",
  "key3": "2EmR9tKxWcPQBz66GZucrTF8yXzNekrMhMk8kQc8XvJztQgWhzGDR3NyXhBZsXSq1xdmyY6jbx8kShnxH1U37PPJ",
  "key4": "1ecB6Wdx8sgivVpQ9zsQRyESae7zxSrRN8tWCHiVdqJEpTRi7vQDS7NazyLcT5MNDTXUsdpy2xH7spyDsnMqEYz",
  "key5": "62LDLjJQixbn5FNRKngf98sQfEkbvd4E6jV2ScBwimqcRwEnM53qmvmyQuQjaQJRYPaaVk1fP4dezfn8RP65YqDg",
  "key6": "3MfxQnVS37ZimhTSuQ4LDWEK9ysVT4DtQbQvp6EH3kzh8R4C2BsKrDjwmkKdQw1ruPq8XUrnLJPyCWiRVZ6jgGsT",
  "key7": "5AxnMbi9wLcy1xu5fdDjwUmkLVqE5LnBxjpXJvrMcxzgwMqw2a9LckfFaJoDEX4bbzhC9T6394M9haYNvBiJnZt1",
  "key8": "fqczyiS1DA6FtLEfb6TM71a5yHpxTA7nyqwzrrx99nptSqQ4vDVz144aWNqsx6HBTUggByfk1xzaqbrrcP7aosH",
  "key9": "2Lk5N71SxQ72jsZEEhjU5Af8ZrVYFRAHvNGE98rfKPAZmdfStihQJmtPMGNdaofSpUXCc2mMCocYFCUVxXFcqZ8U",
  "key10": "39Mu8ib8VB4ohQuY57GbwZdMUZrt7o9qTSAFDvqPhKwtuBtdx5PtAcLeNzc1chrwct34cnrh3NQ9dyLHV4wP9xQm",
  "key11": "5SRwR9CbK3CZs12VphZa5Q9eJ26R7jYUaZbtLdEgFYhWhcFhxM7jTtUniqK7eyPKJ13vUffxKL3bvaRENLho5hre",
  "key12": "3c8WiCqSHWNtjw3rpJQPsSvCQquwXzSjFHe2f7Z3jUUTb4TBsm7iJ6xPjhXQ5TuWeHinmk4ZRwHPvXJae4ATkUu",
  "key13": "3BjkkFLkCbudg85m5erUNbaptAexkn2fBZFHbNwCLTxo4btJYMiSCAhUHAoenb4v2sWFmeYtBh3HbcuD2JEUpx6w",
  "key14": "4CCGYihqGJMZMR3A4vUE6Yd7SmjeiTU7Y3zp7LcRcg1WBedVzX4GaEex7W6emgBuWAgbGTqzaPFor57jGukTsafd",
  "key15": "3gdUtgSRhJqSS1dyoSfK66qndirZm5618KvbLg73jf6MmkKLWnwGvxUydGWfHx9vSiXLsthFcm5mAkQEvBgapcba",
  "key16": "pUgooKAvJzTADJn9m38upL7FMtSUPURx4Yb41L8kjgMyEsxHXewA7yjfUvgJwGnFUD99ka3dEoHRjgoJYMy69v3",
  "key17": "3EicM7QrmQanDJ8vwZV1ho3s3aBsD2YKSWXefvgmKmSDfmW7iMmRokoonZpWBUFDxmJbZkmp3yjwnrmC3RZBLEcn",
  "key18": "zFi8knUFps5Vx8i6LoBV8KSe63DFuEZqMjktpbYk4QcRRXj2TtvTo9to4NKxHFckRvWWeDdoxp1TjtnHuhjLQL2",
  "key19": "NWdx5FXSXnZyj9tWQGNwKvgDJjjWoRC7FCc3ruJyN1kN4AreqiSqCUJGJVaMMVEmXSnQJJHaVLT7DE3EMgRhJUt",
  "key20": "4ZQbhwUeNFiBXDQmzua62e2UiddWRFnWmRNGK1b2EENtjXdFTSRbU3vQupcBkAwnkQj9nezvgAcDKE5DdFqKpoDd",
  "key21": "22MhrtYRRSC2CWR1pQiLzFi3UR6bNXwdYFtxXGpCkbMrizUoUbE8zKCmsf67ZXf6XdbUXW2XhkH5Pwii5Le3pc9u",
  "key22": "2P7TwkksfnuUdbJ6An7hjyW24auUtLsTVhdBGqae7zjNMEa91jzt6b7SYaR7DERaNN1oQq3P8MuVwVxGkMXWGYwW",
  "key23": "2ddg1Nmk5u2JhadKxHq13Zb64TMUiZ8xkQiAeJaEmxPx7hJyk2J7Rd2AU1UdJWc9aCMAF4XkQzYZ5fJzSTVCM4Jn",
  "key24": "37n6RqFMwLnCAJF7M2qdqQfcgsegjh6bpEYLTL88wEvwyZiHW1SPCRTGeqV7L2HkQwF6WNDeMoiJ8Yqc6itnwB8N",
  "key25": "63rvVA5Hh3XrkiSZcmRgDCeVvWTNo5J36HzxJVqi5S85rigB7Ag2cU8FzM2Xi9A3YBk49AF24Yv2nNmV1SUwvEgX",
  "key26": "5nKju4KojomwNz1aJNzNnHTzp2QgF2rwZi478z4ZkXMbmtPxW5YH2iLFyLvpEK7GHj3PJ2THQ7BKpsKdrnAfzY44",
  "key27": "5NhfarmM2tojko4tAKp8rdazf6sZ1VLWiiRnHxdHbprwMZ1zXHpR7HFFFoA2h8GTjYsoeYsnYVarPLpAdRnqWjxR",
  "key28": "4VsnkmqkZrQXwpcypGpNNFbyMkwEJ3smzGYVUzQNRng6CpbcnvBVYZmZJAAkt6StDxEEdP4mKYXzhBYkPZZgEfYX",
  "key29": "5yjybU11chpXTvzq7SHf69uiR6Ndn241uGVqvE7p86ZCHetGyhDtF6iHJTUNY6yerzfgUkZiJdxn1obMifjiUfiz",
  "key30": "3TLTBVVnJJKnR3cgaW55Yj8c8aNwbhspaJa96XtNKEU5qgXLcZdsmUgGj47dihHJtWqDHnQw3xbUTTazEAqZfpCF",
  "key31": "2N7vMjZaptULqxXY53trZKpxy38pMgDTthXBJ4NTegjGfFTft9d1kP9C9MNgTsZRG7uoriiJ7QknjFvufL1cnwsN",
  "key32": "4ehbCTMGD2bAyKNX3hAvSq2rKebg76Ub8TfeU9eHLHyds854h8wQoLpi3a7RU8BiccDPSowfD3WgMk8xw2ukxmHX",
  "key33": "2asGiNptrvute7cwoSh9GPhuvbry6T195SvAuZcn7UXpLoGKEryXUXFrocoGTsoiRoWEmBS7XDyLMCZXMSWe9k8m",
  "key34": "3p1KmJT7fjobpdjfw54gyNmZchkhz5a2ktBonYnvr3ypkbRP2TSjhXsc77N7yzLFLAM7gpJS5eCH7FAMY8EHh1DP",
  "key35": "58L4pdc6UeuRdGYvZSUrCJb9CRsYojwMwxGZoSwjqVk41bCe2x88NatZTmSVdLAEM9MMjBs2tyQJTwQysYppped9"
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
