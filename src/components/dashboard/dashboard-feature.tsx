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
    "ME8SKgr6xw3YAomsXphhhfATDC8yhkm8JBMi3oxPp2fDNPsUn97ULnJdKpAUUgSYbjjpdhKysfRnVYpm5TyRyeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkkGyGYqjMcA7uprzL6PgWdN84UNXQwYDd2V37cz21sD6EkgU5Kee79S2vD6sQSPJLFztjzjE6rjDA57nsRVFhh",
  "key1": "5nBG6J6MEKctYx57HGM3pgom7xUVdXPWeWqs7GESHwzhUg12GkVW8hoMMRnj7J2CGGfpcLaogSHwVWjK1CT81bSi",
  "key2": "2z8jzowucNKk7MX4ZvpHn52c8WQYf7ApSYfuaD6on84zSxXsE9hzwKafy3vF13kmdeugzF66t1wY2w1iKxptwYV6",
  "key3": "3y1bAqKEPVbtcpecD98w45wK2UBQmKkXLW1nJoTk3sWyvUZPqM4vVPfqGP2UAqWiTk9iEi2pSQGXQmSi3U4Wrjmh",
  "key4": "fjig27PDvkBX4y5gSGs14tQFNNpxTdbFV9bhnH8sV8jG7hMtATPuvVQhaGPbDhYg1YGopJxq16WuRAgc1QoDUrR",
  "key5": "5rGWPh5x84eo5cyoHWsmjjhVhrsxooEKszzYJjubeytML8BUBqEPWpn7iFFWRH3Z76xhrbaKhk1NFegpAE8MA9Lb",
  "key6": "498wxWwvkVfbFp5uu3sZXBwVh6yvjeWf6eZ4SRsZ4NhN4sRBWLYumdhq9TYbjsSuZoWCGDT9svMyWtxUs8DkyvVg",
  "key7": "qXpg1J8XJhE83MUkEGaMBWPBjBWitV7UEKXCLmyrE7pExdKVuNQun2CAhNALH6E16CjbLNsxMpkHGNMkHK85etf",
  "key8": "3w1jFNzXBRWU8pXA9FofRiUqqZfRSaiwwYdc67jLnYuSEhz3hE18C22tG2tGczHxZUjst951zpoRqRKjpUz6cGVY",
  "key9": "63ScDsEQYerdStvLkSnfSNpyVDz1XKXyesHx1R7gWs5oNohmCQir2oqc9BG624rxv1FrEcRH5waJDmeXPnWksjze",
  "key10": "661aDTNtKstGa4xoPWr2HecMfjE31KcSRqPaC8XUUZfYtZSkJZPJrCSD9jLxZAEv4TwFatGQdAeU7HkZUpMtwvPo",
  "key11": "3Gt8oA2qYk2hojvn5mqfUZRZ6RecYAXJoJ797Py476bYjmtENDYqQcFvh6wzq1oED1ymXTmMhpQhzF4hJ6mwmNwW",
  "key12": "2VH6bJqkLk1khuK8xH3W7uHejSMfQ3DzzQfZvjKBpbt3BAKqzDDaTub4GCGoFtWMcD8JDamQvcw2L3MDUv59M6t9",
  "key13": "4mV1rrEJt7pvENz4mUtPnLr4bLjEUv3MSK5vMTuFNF5LWxF7DmrvufHMQb37r6tJb2YQkg5dUdKaivfZcQ9fG7w3",
  "key14": "8FsJDwE37xJvcwoAJfnDk9WbRyMifse9NuhazkgL8pu7UTxWCB3cqbo8NdRkuC3L7gteVU1GuHHoYxixuVgCwB3",
  "key15": "2A4eDd2mU7MAzoVNQeoL9rQF1jErYtx5TJk6VrTwTSGMc4UsGCL55NxSTzxHnDXbacHgyLVPXxcqzqvdXti3AQrM",
  "key16": "4AvH6jXWtytjZZ6H2Uipm4qrMgaQfJXYhFz24uimz1FWjXpyey8QrNiyfAE32X8GnXjMYF6U64xLaWLQgrN2x7va",
  "key17": "2bN8ASAE2JsUkS1k8xKcTFfTpgAx2zNndo2iJQ4ReT7Jc9tGzJSoBVTgD75Yd9BB38RtNuTcreSGdRa29Zsk8fje",
  "key18": "3dqQdbVgXSGmY7cXbi9js48vbF5crbDywBc19WWbZWDETe3mSEkHoo4dSTXt6E3VU2y1kYmA7udU17mNZXxHrmgM",
  "key19": "545i4DnuAz9hG42YG69Wc71drVgagpHAdBvfj1ULxkcdymbBaupnkxRHtezvi23cK8CQT3WLhx9y9jFB6rMrFN3y",
  "key20": "SGCwuf7BkJqu4FhMnHCtgYS2HLX9ehXvtxDotUyYZGcHMqKdNETNg2PUG88f6vAMZrZZYGCieQxPNkFNz8nZmqP",
  "key21": "424GN2ET73zbGJ7DM5XL5cnrpJvguqs9hR1PoSHVqUwR3DqQTHQmqSC9n6tcWubPVcRvWsQrasrWywxEcbodZBo7",
  "key22": "66bAMKt3aWQrLzhCFyRQLNx1N6Pf9i7bQMALYde5zHkh1azawWQYJ6coguU2mkKxLUPrKn3m5FZ172qdwdGKAyYw",
  "key23": "46s7DsVWEMMFFyt1LwReQoqSQurba32KtB8kqMa3JzzE3eCBQoyWnj2Ky6TQmDY2M76sCT1iekNFe6wT47tuZG3o",
  "key24": "3hHfkyPKgoe8nafsVgA61cnaLBQs1vaEhfyx3yM35hyFkYQJRhjXf8o8ZZmYDj53quUQjGCXPVSTpr3tBmQddRBq",
  "key25": "3Ufpj7yyMoVPf9a2ketLPR2WtfwfzQo7gGZU2Ydf46sm3FVjVXFXarEEAzx1N61XJESnTk6yGj5i4LJ6ymPbHLsZ",
  "key26": "4cT7JNZm6EHNRN8URTvJFWWjFjHgybbwLz4jjcpwAweDNa1yZFZ8dxyKfDJpsSTFxuQqDguaT9MbVtotGamCpRNg",
  "key27": "4e2Em2Ec1kbRwAUY44iYPDrSSvYDxYHQiX9wEPeEsS1xXLBNJgV9RQba8nXEcUM9c7C2jXMqzSrRocAA9CYxTxQ3",
  "key28": "2RaGG1uW6Bf6zfGtW9oNNkfa7rRscNZSG1GkATYcSuVAZsvNp4117JGKE1fB2QuWjW3gfJbNX2K5M8cCxRkyAS2T",
  "key29": "3msQqpSnFjdR5TRMmMHaxXtzgoW4PnRgwfgoG1DQYqXHVhtc7h3eUxEbik4DGPvnpBSPr2KHn8TvAz9XjairmpFv",
  "key30": "3kEwHKNxkyjdqKXgTJZvmpbiWwucQTqRKNkzCjWN9dEzNtiW3k5quBKemdzogTVU2dJN8yZzt2DXbdth599fQzV8",
  "key31": "24ci9DtAJ9CnnuV6v7QKuJNNxBQVdDebi2zfUewUfyYaLqPr6wNXDmdwyuYdRLvHE191bc3Z2EdP1Yd5X2H5uoe2",
  "key32": "xaog17xsSrnx18ScXZhuRPrNHpGKZLrtpdFrJ48GPUSyphchiAjyzPjvj6cLJqmCkfQ3xF1XhGTKGZDmfjroXzX",
  "key33": "rT3kDmogVyVFWDEZjHiCjmhfkA3LSyMwxchozd8q4f3nFqoQtazkd2mTfTHDCf8sMekHCrwiuR72pFnxwb7epFR",
  "key34": "2AaMFbk74PpnTcHrtZABhAJNWaEnMKKvQdpDGpT1oefMkmS412ghwRkmhfMDGW4Z6gSnAUTuAwiCDPyNSCjSpWPg",
  "key35": "3bx4RX4iLpHiK6ZMAVuEEepGDGzMaCqGjV15X7yUeWCdqmSKiNvuYHaqfQ4bLHXy3aZN9J24Dh5U9BdVf99V941v",
  "key36": "hLT733oEPxXLsjK91acC2sMQviLsX9cqybp9a9Bk5s6HrgmjYK9DN1mrKbQD27S8yKhnw5Kibxj2iGCuwR7je6o",
  "key37": "2GtAyytcyhFA5u9giLYh7Z6ahwsVwLy6pZTxURJcmxRmrnkjktVDF1Z3DN2AFJWHjbSsvD7KiuiAY9y5VvmoDZ7f",
  "key38": "3bLk5iFkJGHaZYmzPeM7wqNvcyqu1sJDJbTyWjBkB1P5tu8jYAppmUNFee2maSbVg2hCYfZqFmaLFKNP64RaUCRB",
  "key39": "5NvGKaVnxXsQ9a7XvaDucautkZmweTrB2UstCrxXDtHpn1hjzhyWyASdLc8aeHFZYhJrdoiGYqMbtTcn4e8Cy3ik",
  "key40": "4vg13cmHxWWbhauMLcuuN5SLBE3PtMpUNQyv285Ksg5sEh7hj6QeXKZByLg8tM9NPcbty4zGNnbj8LrBnDFYCfo9",
  "key41": "vhgfAZhMmnZZwkLqGp7QRTJVSCerqvtA4g5FpBaS2f9iLM4MakEXVErh9FEaEqFHqf73efGVeREs9VseCHPUox9",
  "key42": "79T2gcLW5fRq1itTELJ8dCcq1tKeFUyPfpYxjt3Sst9PBq6fboYZdEbPYJEdTyYSyz6ZAuWujj2Nansfnr5aTZE",
  "key43": "qTtajiiQ5EM5CR1DD47nYg6Tm9bK8VsQydAvXxqW1dJXzKwTUAtPFAa753ERDKPERvTjTxyo71YSur1aTVD3eUh",
  "key44": "5WAPxsf9Kpsmpp5166T7fngf8duZHSuZtPkAwDfAqcpPcfoNJLjusGEtB7Qd4egikGqDRs6gkaHpTgb5cpt9VLSM",
  "key45": "34kyDYX27jgXizUiziDJVsnr2D94x3YAtvg7e4EVw8psNCuCbikRiJ9Lx8APgHB2XMEvqxmdZ5rsPVhKzgH87tMm",
  "key46": "24wCtQoc9GfxLGpHRXprNPvMEqkHdg2BGPgNAHRr3PZGuzmmGLi7VB3oZXZWBhWLFq7KtW1NRcm4EXbyeuC7QWMW"
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
