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
    "ztszMbFAwNR4UuVRL6uSHFrFZHdzWreLucDk8sR93fRRxoGtbkc7XYgHJUsvBwx7Skk7Duq1CA7WU2JVkVu63BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bafzxbQgXJBDazZZdih4qtyG7qGhDEpVoDESJ8NHQV1TBA7Co19Qr8q9Zgrpwyn6Pm3DEURsyTjXN8tWiU7mPsF",
  "key1": "2Z2nM8gSe34urkHuQZZ96wV636cPoptibztVvRjP7mqTVx7XR4ERUSwQqhgx4XTsuKQyTuQDEjEvGPfegnfJVFgp",
  "key2": "mKe9eV1hgW7icoKuWZ3jBn4QR2YWtTDmoDb4GYFWvosStT46qR33A3qDBvKMXattMksX6jp6F8JBYWA5BfNKE4Y",
  "key3": "62YXbSX9bXUjB5TwCp7zZbewkYpKRV1WB7FdN9zXM1WseiHvMxtWZQ8EdypWJpSwxwsVRDcTxaq1zvS3ijkNwpuu",
  "key4": "3AYmHeYgQWizVZFrr5avMkUgyBxbepTPQmnK8ErK8P5uhkiBZ29MSuuRpXD4ZNtuMJMoz8yfqVeRixEK3dNUWJnc",
  "key5": "bUxXUuyVuVoasnLS7wR3fHsqobnkgvLcvbNSFYHRyE4Gtrr5GE9kJD4bVE3FJAgYiF1eZwniH68o9ajqgbuFPE6",
  "key6": "2X7cBVQt8M8MHr1pGTWbXkiioq9afDqPHdnEMX1RkqApQK7TpFNMFFU2Vx1Vv3JFbXqYayELohedvhFxhYrYnsSu",
  "key7": "3E53v2RXtKHaDFVC18ia38Lt3U8N9TEG952jfC1HGyur6F1P8eGSAxKq4n4Q917qMLqHCcgopwUUNZCYnhY3e8ds",
  "key8": "5rVjc2DyMBgs5aXaaps3LbRDR9BVcbZaxH7ewFYu4DyNwnVkoELH2bDv4dKZvrngCCjLyTLsu3ax1XBWBg2ButHR",
  "key9": "3UTkxkjhcHNHwQPsPARJzmRtQoZh8ZTSeyvHpaT2Z1E8q7pM9tz9HmkV8PN1nQpmtFBmWvfe9B7GihgCYnJ8NFtF",
  "key10": "rTduLvzUTQ8d3QZFZVeyZG2Jf9iwxmtLpsxzpuEpTZrHdVpd9yQ4SQYkkynVkRejBQL3qXd7h82NHsW3ihAKEgF",
  "key11": "45s64t89M6uKy8DzDhrbFn5prKu4pS2UYZPTato4soeRTWjqNx7KiFAnCzRPdxnzgrUsqdAF8riF58wzjDqu9dN4",
  "key12": "JGsTv9ZQPzoBvkKHCmTdJGfNSHiUyXCvJ6djCkVpsuaanrVXYar4XcoEPPotjwVNRmT7QziCBSrs2JUHKqASsXA",
  "key13": "4XUYwgiat4EuL8br52mkinTsbpZCpatqm9sXBqnSnSssFQ91EauNYdRTiPfxNbFkDbyHqwdn4PdXVChNLbbTsmYR",
  "key14": "3JKAh6AaDEUCZYZmfd3TsvJig9ksq4UL9yjatu78hU6jNqsmpneomF23ib7hLmPSig6Qmkv4TMix6VZDdw1Bayii",
  "key15": "5Cs3ATherBXzEcciD3n8nf3bVTWZWKZTNuGcUZQrVYBV6eQ8Pa3H5xBhUUPFkQwYWMxt56ox6D8yTBgMFJ7wungq",
  "key16": "2bdL8CDS9RFn5ZkkK4EcinXQPWGDLFED1Vc2zHT3X5hUUcwaGAnFko99usVghoZKutzzUm58MnUhZfTijj44fZei",
  "key17": "3VgRL8CV25WdVCLGhLdBEno2rq6j6a6yKqwFwshhuHviYiGHQ2MEaiEfJ99WJX2ypwy2QV3AsAPHJiMipoJxKqmA",
  "key18": "31K46W17qJU5ZoJTNddcANpo4QKi1Zmy1z2Gtu8Tdp9UyAraBscUk74wJa8yGtdrRay7DcqwffApCEvCNAoKNfS5",
  "key19": "2Vy4qaFJdSNDuAJWZxm1SrRnMjYzPDdsjqnKPzff4KdAnKLHKSqnYvraifd3m7MdyZVwAyNUzWaZDAdSCjPdnM7S",
  "key20": "4unrm4eF7VJDJHYE3KpVxDE4WULbxJBp5sLKexFDcPDmAkCZM4jWbdMpwPgpvEEutoWC52xtbMm1Gd7GNTnwRcSY",
  "key21": "431hqE9jqRSoUUUEwTCTU8LLWaNwkD1i7MNoBgZ2WURWTGwxyxsdj6uPUQeoFztYYAbjAKuHJLN6DoRT39xard2K",
  "key22": "4VX8n6xvEmLFjjiX4BFnzxYicrX28vckvJ6AnXH8q2Nspn9763Hpp3dTpqYn4fPTWYXN2T9c2Ww8m3xKnVLV3dtP",
  "key23": "4cjtF7FJLdJgMGFKUcv4J1pqDTybXsqNCyZWCNSkV8iN75EbpNifRjNX7qEVzJ5KW6N7LGLPZjgjnLSriesufiEo",
  "key24": "2gYCPwTpf42wKdqBffsfLKM8obX4Jtxt33KsVqMtfCjy8Kv6ZMBW4F2bdY32StmqBneRhBFUBwgCsHgXZ3gPyNhi",
  "key25": "5dZSiTKCHHqT9RNTupTx7pBVVJVr6ZavaFSH4FvFJm3QgM7oqQHcQ4zpTvKBNwgWq224wHte7fXaKwBQRjmTubmR",
  "key26": "4PUefYNgydndAENJZLtgEWT8ZLybhwPFfq41eR22TdCbnd2SYt5rDstporZpvh291zWLCYbBXjXi8P42qrGK5oT1",
  "key27": "25bp32ny4SUXCLw3Wr1tb6tEMjzhu9si2pJNbcE7m9cXf2pY2Aw6GT1Y24FPwXRRJHdVxw1jc3GSE14cFCGLhvh1",
  "key28": "tBjzj8THCNFRh6RQFm3EFKQzaSCUfNAwJgyhoou3jvsPcdygWUAC1TrmhPv33hb5gCFjnhb5LyPQTLVoK5iz13K",
  "key29": "2Md1bUmvZgcFBc2ivuSb2VM4geKTgCrkAUqtMFSuJFE7TF8nFrVQ8EPr3BVieYBgNNho5DiQqn2U3Qk2wLSivE71",
  "key30": "4X2zi7SSmGMH7impmBjVhjZxT5Y4kzQDBHr1BMmUKZ4pz13cotZJSf4NPZHSSGwN5RAychHuqZaehGoR6w4U126x",
  "key31": "336A1wmR8UCD7a8d6FfCdp7STaxzocdpTzKi4LbVdpmwtMbb2PvfNyhcFzVPPvZXc47KEywyCgBwSWBcpQ4YX3ah",
  "key32": "55mzyiqo6RWioVjyLiS98QAzQ4UEnULvg68dExuXKbmakSPK7kRXTQ87xQbK142mQLziVRZryme8ZEe14TatSwJT",
  "key33": "31MgatbVHuRBeoj5KA2pSWiDrFknVjDGsLGBTMgZf5mmPv5qEGcCKtxNAmQuDMYMn4PhiKPDtYJpnSDwAJvpYUhL",
  "key34": "5asuQNbFT43UiuxKWEhqFy253gVKFCG4wbT1FaU9xerLYrgCohoVmTLDnSXMkdPpPzzvrBndAj3K9z4oPHsTCheU",
  "key35": "m4qSS9JjmLKPGT5nXZvZvBEGpVL3fXDTDkT4y64ivrxaLzuG5bkib3u5nCb1SKaLVot4Hwk1GNsy1e3hKRNkd5Z",
  "key36": "3gcg9yCDfp4f2uQBzWSao1q2YTB7Sz1Jvf6NNPXBqerzKhHRu7s8i6WjPhApWZugDajSYmfMfiScHyhLafK8ZWJE",
  "key37": "3Eq1Rjn3B3RA54FMycK6Hu8RRBLpdb2PBGmbvvwH4CaVxhxaQr7scontork28iE2p79hAQY3nECETwhPPy6oxwq4",
  "key38": "49usDrW5phnAAuzLAuJBm8QNBUVT19KUMLj3qT2RAK8h2JcXtxDTVTTByB5SmHzZi7czipCpFifEPY8ZwgxtVh3F",
  "key39": "3aLiEzKwcxvDQYdrCDgVuFChtArBqSx9ZkKzzNp7Ls33ZAn5tzW78C6cNT9dWMSKrrReoqJRGr1YsQ5JYMSMdR8F",
  "key40": "hrsXX6YKRvAtfRCza1UfTgMxa5Asvup3FHnfnvu5VTda5tNzZ6GGZZbJKYtSBK9CTadktj7JUtSQF2fWbxeVYuh",
  "key41": "5GGSnL1DrZnU8Sdsbo4ZeRAgtNEWqnshEzvXRVM6D5BC7tfyaWk2Lsb8rsUV6zSw4nCsQhLqgyAws4wPJTGz1x5U",
  "key42": "JSVNdVjdPy5C5ZwstnfMfEis3szsJ9toXb1uSj1pEBg76VwbGMs5P3rf7N9dtzGdCMK9wiWBuR2ndxhaSspvbVh",
  "key43": "3tbZmGCfuidF99SRyhPgReMK8xv2gtUgYzJLjKyEhNH6xe7S67x8cpfyaYUVp9gzsL5m5XpxYQReEQFEFYYEExDB",
  "key44": "2epBqW9RZUuZzFf9DyMFqYGMUwNdqzs2BmkV1PaN563nRKwbYAUv3Y43dSznBzi2jDBMkCytBHQ4MDb6uX7ZdAJr",
  "key45": "2VskLRqEoR2zTTG89UeVPKvp2BL6gVXwfT4uskoqQRmHyRL1SoFmze3HaqkzXydzN3GiuDnVEHAmFAC9Fgd5k7nA",
  "key46": "582FpbAMdHxFwd7UhML4AYFnf1JfjBWC1FAa3mvWr3jjhUkWSrqjJ3X282sbB6vBxSoteG86R78YTawCRDXmwT5q",
  "key47": "3ZD9iR1jouBnxT9skdXnBFFdnvQZDEnDn5gntNvBx8ximAryU1sYToodKStinGoZRqLuiU9NLeK9mqjeKTCrxvyk",
  "key48": "4mbNwiLeLdLrb2WXFzaxVH4y7mWeBZPWVkqXDNpUx2ehmmxd7GiV1Mw3uqFjAUDVRA6x39R7KZT1yauhZunyzYKS"
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
