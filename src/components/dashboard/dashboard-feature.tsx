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
    "UMz7wf1nUY2P6c4YdmYwLbp4L2QdjXenScubwnjCEa69jyh6PFKiLCEXDPfQyZpAYnbGfiX5y3yJDFwEmTaVmmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHrRYrshgKdZeiGCh51WR6eoYwPKAsq1ZamKnmdNrkxvwfQu7zEu9M6T1oCNpKLCLfNFqian9b5CTiqzGvjvucw",
  "key1": "4BHoW4bYKCJrAGNCPLQ4ewWUx946GTdKfEZsYPpRxxQbbv5yDs1QyPKA7MN1e7MexP5QEQSQNu6LwfvbtMC8TTCv",
  "key2": "51t3aBqWjzNyV1T9e2YLzfHjsoNR1xFXtgRH2ChAobZsa9rDRp58q1Js6iysAApxEDoesittd2X4SExGZaE4PYb4",
  "key3": "5rgspz5ujp8cBbsFZWw3cMMtXCyGqfcNoWpnj4uAdH8so1Ns4th1zzy3JLSVmwEPVEF6bQbaMVfapxF1awEnbdBk",
  "key4": "4E5JobbTDPrarCkvMFpQovetezDyBEKDcyDHeUQDjwz9gatt8SccbC7v4Nzp82WwisFiNNcpHBFQT1g72Mfd5MGz",
  "key5": "51o3saNMB9aDTGCVddG4QT5dWR8ZXbTcvqQWHjbHQ4kmGrEb4rkyGNJMJWHt2pL3jQp7p81j9JfFBpWQpL4pDvp2",
  "key6": "36EcVompiseDtscALZW6MPfmDLM239AtqPHNwvwqDn2Re2jWpY33EG5oYyyBDu9AeDs28SfZCG6ebCd7dEkn3z6B",
  "key7": "5JFWXzEUBW2QkJCPct47mXD95q8c2tL3AxniUE8grt3kxM8Pv2SRKFjJM6ocbzJq86mxJse5jH19ULcfjd62eXDa",
  "key8": "5TURJMWDouFNVP8ntmdiEnxKUSMF8aiWq5taZh6sHHaXSzR7H5dVwtdti4G6mZdkLECapkKy53H9kQ9fm4AJ1cjE",
  "key9": "4ZnhgYxcZqtXm9Yfg3reKdciFp2d4Tp5JcoKfWdct9xSNZoKss95TtSFzkZYDLe2rsaD8p1Y9bLmCoKPqDxK1Hn7",
  "key10": "57s2y8Y4KLKbAXGX9128bfkie3N7VucmkibszYv4KBQNikhAKJVHgYy5Xg8etBLAyYDTi4hvRWPYqcFW8eQxWgsw",
  "key11": "4yBSUdd7D6WYQkY4UjhMQrucTcV5e1fk4ii8ZVR9MaBCtExcEGhbn3NMSEuKFAaE4fX4o4UNLVLEMphUX8xPMaV7",
  "key12": "6XuLKmx2tFK93o2CMKJAJ3AVAECPHngoggyvubNRX8t14nZVyBbHj44TtcZniV6CRHq9bHBAyZfq9KSqdZQupVZ",
  "key13": "5d9E4HxKER7enhCoqgzatG5VssjAyRmcbRQqxgwZWrY8nFqAv6iohsp4Xr3m5NVnmVZW8zcSGabrXFjzsLewZPMs",
  "key14": "2hPcAsesbkqvwAffNSdyVBb1rZgyXSAbgXDWj84CSPHqoAH6qVgBb1Q7wsd2mqamENaerjp5dg9HNN8ECLwdHRoW",
  "key15": "3QjtKobEQ4SchdhPEXKFe2xV4JLsw242L7rMmdjPu1QvCcTL3EoEasx4JcSshAm99Aauh5Cg1n5ss9zyCXU5aYyJ",
  "key16": "4nXXiGyVv3KKC61bJu68fQAuQ91Xs4s6DiGKxF1atkuhvoDRsynsnhthNuzeWV9z4iQ1F3i3mzuQNBq7NPbsWdtC",
  "key17": "4Aene4aGpdNK4vbQtX1onJCb6o3eiu422Tx5hhPrDb1LDNgDKAtuhdkvncdLfx5LYym5jGua2cckcELTUCRA5m2B",
  "key18": "4BgZ8XLqRogX7xGdYDCtwaN2uXvfZmFHD3kYuduRHpuxg5x3KhM1cggMKe4BvNoz5D9SLv5rQFufHZMmi6V7agBh",
  "key19": "MCoNa9y231N2F6gu9WaLgPbWBDUpUsxisWzKP7U69cNELQ2HbvMc6riQerUNN26eEogAjwhfAaHxMehmN7vHUUs",
  "key20": "2tckd978Zs9cWjnTD8c6tbCWn1FVcMUMQaQtoTyGNsW9UmYwS3q6mGppMf6dH33Ze26KLKVgFkRJPhhm4pnSbPwE",
  "key21": "4KbPj1ehMXeYFMQDcHkb77aVxh8zqafRmRr3WzMrY5HmVBeZTgkrsCWKBYPcBVBsMw1uTQQVh9BU9RXo52ZzQRHz",
  "key22": "5TZoQ7Dh2YywoP2CtXNEDUcjbJDRJkNbrHDMHFWucmRAujBwBpqpWq5N2Cs5KtzYoHq6s9D7Y8veeVypfVkeJSf6",
  "key23": "Ekgk9t15zrxbhLjV5euf3R81VFbSQq2Dm9pMxkpPMvp8H2uvGavmwR8tkVovqKeFNbCngL2seWEHZLgkLiSPhCc",
  "key24": "2RK9HuYXM4YR9ZXStKDEktdw5hnr6EZho2ERQfsrsEarhcJw2V7RK69CeExg2ryH7tgH9i5peNUchDFFBWVgow5N",
  "key25": "46ma4oghm9ArTnWxy6JCpUZpdkE8b2ryCixxnUzDeEgwXF4DyBEN3rCDS6CX9EWyfnbTfKo5PWEoG4hfu2X3JnmY",
  "key26": "43t4rfit8g4P89z6urXPEqXPTaBn5GCiFKDrRUsFnC2qiNGEUtq9k5L2aienVrHPkjFFVGAS4xfkHFAJmVAGWWHu",
  "key27": "4yL1gas6uwWetu2nj6EgcvJ58FqDVqENy5xvPsQD4DTGmeBE9oDPnMqu2HdvWxPJ6G5HHAs3YtyXGWoKpTihYrrU",
  "key28": "3nLSmNnShAj42uxYf9tdKTxK2FwCFW4px7tY2DJ5TqaECXq4aueZymi31veQfeGk9JhkpvWsUdPBu2BfZXUGLuh2",
  "key29": "dXjditNyWBmAxd3TTGHuaM2JX7ck1LyJR8Cu3XgY6p5KK3H8VWREwNoGNZxMd4zVJ4V33KhL1U2pxgTmQeNWCfJ",
  "key30": "3RMa2WykPdUB87DXK8vqt8WCUyzbsCXSNiT4M9J67CEaNWkb6CrogiC1FKMZpxZ78mKaPyosSpvHS9JSaVhp1wtu",
  "key31": "5cZkNVPkU8fEpnqWCT8uDsDTYTPrTr1vWT3qaAyPWXw7iSvn4C2UJjPamaNS6x6R1J3gJzHqHzxEEPxD5C7NvoP2",
  "key32": "VExbqsUXaz2gbkfyBSHo7WNmsxe6j5ouyas3ME88ynj3e2sMZFauk5dYFqDGAfP6bjrg14iw3kHtyTGggPinr9G",
  "key33": "5rWHQnxhPAbLhA245bZct7nkTAXs1LGiyds1ARHaoy43cdagcRs1dr5GG1pn9EZgx4XGLzwnhK6xrx8Nfbrv8AFz",
  "key34": "FeSkAC9cQnAFnizWFqcBmzk4pmpQgWxpCWnKksxxLJ2AdN3zK8t7xTPQwaevcM1NrxegGp9xj4iYzJrDR4dYfn6",
  "key35": "4XG8kAmKCuzEfwjJ1JK3nYLxeA4snwsbtr8sarfYw4dZFWPj86PvDNyLrvXAWoourXVs2D6vAFrjj9yqE1aRTmNY"
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
