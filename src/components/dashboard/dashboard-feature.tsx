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
    "5CGkDkCE2HaUWbo2YAn3VD3bW4venQmAccnKGhzRxzQ9c9p7hc7QZ7UVkVXzwSqPh56hrTC6uBjZ8eJznu7SPt1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6QMiDumpXf89S5DYzUbE3W7UAxWKSdMEYzn4Fo6jUW9rjvMt6S4ftnirZBYjAFPSSzFMx5KeXxUU7LnbpHJJvF",
  "key1": "r88qvMKhS2j8fGiRyoGDLGyDqN6bJhpNNGwBdQ1jc78Jf9rB7hxeFRaMTWGwyqh9fBzRWkt36NcewcKMJ4N46sh",
  "key2": "5b6tWF4T79UqjEvQeD2MaejQZXCVGb5Jqj8H7mC5A7x6XghjmbTL5ei9CnaYsWjuJACs3hL2nu26D4B2x93eetdz",
  "key3": "4ojo5c2QQGwTEJ8qMEJGf7BkWj3jj3kYVSkFUiqWxWU8Rq5fsbPkxZ6KQGQmAT9ZXUNPjHYTDCN4M11NMydvAGQ2",
  "key4": "5MsESXmKB8TVxsMrKRgk1AhVQivq4r919UgQzGH3f3xqv4S2N1Trb9mE958p65G7Lj1nDYChk1ARfeJXtBRKsePV",
  "key5": "5CBr5Mdo69wbckH53tX6XkNsSr3azaYufamrpLv1jActJ1Jke7QM3n84EPASgNSat7yFp6Fj2uDPTdTW8sWzBXmq",
  "key6": "5DmbGuhkExETUzJBd8MEnZ7vfHWsgGMYhrBbDs6syqEDLmasP8skC8mC785Mcu5jUTRqpC9JMu7CJBa74EGd5zL1",
  "key7": "nzyYuUXyx3uqZg5YR1s9QVH9Ks8hp2JdcWRkL62Dpd8BfTwynazVjEB1TZAbUPiptrv8nAfviY3tiemKYxLuUEW",
  "key8": "LLiyHyK6r7yscUiiVNkVJH1FDN5jgmNY7PKzWDVegvUrE8iL9xmQAnoeXqXuGRDReJdkzq2vyxVi7P18c8QNaJr",
  "key9": "2FLjJP7zohkyekdtAuYzi796LZuyFqqBqBGXi6V8XFpwQmyKheh15ypMj3E5734GVqtVX7Ua2iQxNG9h4Fg2MuUf",
  "key10": "Ge6NVMAntmWPRx8rsGJBrKiLQ1ywgM8bjLNvoi662283Tbb3NMu13XpzCgkVisAxx8JanXtkj2Q2XjbZfT7QqcE",
  "key11": "5qCjJ2VGx5yCCGg6WRH8pYHgKqKpuJSB7vfMLGzCKzSwkPibpuNNRcPcHyp7vYvZMgLtpu1t1BF5EASPdthTezsh",
  "key12": "3epyPwfzLYUC6rw6LHTiPkaG38qJbJFbcpCJ4vZdNE6MPFX8yDRygYL5CLykFt4Js9Jenmp9wGi4ERpSRgeRrF41",
  "key13": "3TbG4ikmpyYhodZwQwK1WQrN8JWcrwWMomG2Nix19Y2z8VFuNMpBQ1hnTUFMBunLswGEqUuRPkVdUJA5vhZ3zNf5",
  "key14": "4Lst7JW4d5CjsvhcpndhoL23qKUNzufaxLJ3gHgkRU6QKYHJcsmeCYX6F8zWRTNfGdNDfPP9d58s9eLJypRurfgj",
  "key15": "3EA5rYQeVUM9m3PLhn6ss3PWzPW5SsyQj8eYcFspa2vXs1Yes71DWL2UroeFgLSdercUuGzmu76Hxcp84M3jV173",
  "key16": "26eJsN2WqqDX5PH1BmF82Zd6sde6HoMq1t58E57gd7q5UwReCgaNu1pSMcaQWoU6iPqPJMn3BWwo3zNWuUgcE7Dn",
  "key17": "4m5HGNxMQd45q1bhMhNQui6NiTNd5J5DG4mWiPEyBu2LHn36ECviPydNR7knfRxKvn1ZpGC6VLhYzUZZMVRWqgEZ",
  "key18": "3HKGfaVNVZejMaBTFhinUXRVaGUyDmF19SVihN7MHthE7XCEB1w8ojamgXcLztrKnXQUKqvmFpSLoy9PSEXWXuq1",
  "key19": "cZyHqUnz4uiKHqx55iUyoiJjVWMALPjroqnsZxTiBnpyeasTdV9ZDr61PafeUbzjmf6ftVnP11TYnt63xkTE7A7",
  "key20": "44cQt3qC1jTknaGRQxnQbVqaiXzo57Hs35MJyvgqbKNxogfHkXoSQ1cMPXqSqNQDbDbucuJTTznG59Ld5F6kMip7",
  "key21": "5xWf4fi9Na4eAFP3LiXiitBZ5X1KLKfgGVdYAs3hVwBWK3xcaPLtkLd5CRDbT6NHStB3cxZSHh8JMSgYw57Bxwip",
  "key22": "5CzSuv3BLHtbmf4SDaa34mDCoA843Kdr8HD1Q2fPmfZaKyEsUCWrLBdQCQvHqgeXxL2SatnsKnPPkxWvZKprwsvJ",
  "key23": "5PYsKVFRTEkhXsE6ZJ1QszFVd5KMv7PQRazgzeBmR3TPCe93wWUQMYDPgTp1SHztzGcjR15o2bhdb71qqVesMaxn",
  "key24": "4rKrJW4i2Wp7wn2ALL9CUDv5DxZAv2FZzVQmZBUiH64K1swJvosYYuQUDibXcqMPDadHqQG6v93YsDptEiSuoJAZ",
  "key25": "2JSgBRPQ5nS4j9Pxc99UjE4HNi5FgqGisRANrxPorZ8Xz9sXbbNf8YCA6V1qSVxhVyMQgYR43XfdKh6QcQbnsafm",
  "key26": "2Vu32VR8hQG6JaMSE9xnEk9eTeiBCCbz5LTvQuLQgsUNPvcEcZQU3CF5F1sqWLf5HubEut5juLdaGYvmgxPBfzm9",
  "key27": "4bhRKT6ncEdjBaQpKHX6iKSj4Z8LodHoqmuKnGJFb1b87ZXFu2n3KcMoYdcMK3DX7fQKET2yqkQPXsRy4tt12LB7",
  "key28": "2nkfmZgyzdtzUKxVejoHTnB5c5dbkbzuN5ZGGmAUXoFoziPZBhEtmNizuJTmwVLyUiFqNgSYsk2Fs4v1WX3LCNn3",
  "key29": "TBg7e7sGa39tB3NZ7NFSViZkPLSYRcn35WuqyWaBPZ8Uiv9v5VTKxvjRX9m2GZ9JCJicfzbp2kJEirbXGd4bMRf",
  "key30": "3foxFxnfbfHr32Mtv3EGRxzUra5axqHCNzqRq7Uy3eFYbXAqonMjMfSSVohKXHqpryHCi55PavXiBDGxhBwDMGz7",
  "key31": "5PGLD8g41iahkuTemPjnZff7x45Ev7oCWGjEe3TsRx8FbcufaiZXzT6uQ9aGa5CYmcm2fBSGRUBKfeREPGpGVXGs",
  "key32": "5RfBa1WocaRLhPrCPRvgCo7nNzjumPK2etz88zmnmyHSKVQhrq39khLyEtjwC7LJNVbVtmKss8zNhYvLiWczudLu",
  "key33": "3K2EQ16hREVFVkzZUUrxtjWJ3hCtGze7LUnWLPSFSXhTvm85fVdtYt4yDcM9sbaashHmRFmpF5cUrcij6omHnCfH",
  "key34": "66fwsemZq1eHjBaRMrazngKo1wo8GthStrvENea9X4DAwK8yz1rtDiRFoT2qFXAymxtbm5Caa5Fk57UAWVZKSXX7",
  "key35": "KfYfDn2CjCHbQsQPRgPvaouD3un6MgeMS7immvz25W5oGWHf9bPzqUWWQuiCPDe9oFu9oT15H1nkBot5KwVFFNu",
  "key36": "5i4uUJ2xbrLYm8QA2cDZyuEJWjsPradmw6aW35boimUussKM4ERzjTQCMqzi3XT9y57XT9GEEMfcGf5aaAYWXMNZ",
  "key37": "5dRvjzagLVZ1fPL5DScqhuVB46C2RuKkPsSTyKzV1U5A6zveUzyDgxeurWyRibNr9qFehoZXPii17w4v6vtu98hS",
  "key38": "4L7tTnaayaF4nseVzJkPGxLSr2e9bAebfMxu2UiXKodykNzJWggwcmaQjidf4GpXhV1Z5rqVkVtGrDvuKnLGTkU6",
  "key39": "tD9tbfQNr5F5T8D6nut1TZHbEKHZ3fEFAFUJbMNmj8LdnkKZ73vp6VKPY78ybGUXes7xa49UEiNaJ6ab7ctKFBS",
  "key40": "3vsg9fJvwrVSmVLH7JNd4mHUoe3jS5F6jvHRremhvQ2kp7KXpueGRVwpgwSzwMTsgjuhifGbaAjvuevxHR8Aeo9H",
  "key41": "2rbsJ3dNcYNubMLHFB4iC5QhXYb2vxhchFgYyAwcBnmgjvEVMtx2qr5LCPWTtdYdLZXohzQAZ1SnuhXfh4XY2wcy",
  "key42": "5CP9Yjd5BAWh4pBx8PX7UjpUxSYasosd2uDGhiHPSGJYcLLAGdHW9TQbB3NhB3ev8fcTrNLj4PppQvExgoB6eVjh",
  "key43": "64kALa3xAuvQYJjj1jMaEkP6yykyn6RurdUPFuvkkXWnrtgyWZRnjKKBTSdNKD42br5czvwdWQZb8B8BkZkWYwHk",
  "key44": "2i5VJEtoBUiw2apGu44vecV4gnadBqNoycUWR9cUaznNRugYBqTTyKDckSF84X63ZHRwKXFGVgLyPZDaaQSm4CdX",
  "key45": "2nKCAS56G7uo9R7ye2jZ6dqG8HjobR1eCYz94aeahyz9fFqgDpvKS6rK2u5FvLoRdMHted9vpuZvHFHyAGAFjRJe",
  "key46": "4aUyxRYLwL6rYRhYCmAx3uwd2GktYLsbR5u1euhbtMaorNq5Wc39azws7mjJHB4qx9hbnQe6EhE9JZ4bBTTBVjeC",
  "key47": "oVLNPVmqkvbKyTunTjTHf9ipqHDgPwzXXwiNikXKkGBgd4EgCAcvENATuxRnyUYzSw6swU1eC7kpP93pzhxv3t4",
  "key48": "4np4QSEZYKDqcEGPdyXUgS4cpqogpgneyhBg5pYu7aApy81NqLSzQbbUzaMuxYgeYb8jMbc1TRFXFD1gBfPxWzgi",
  "key49": "3bHcRxTbphMoWyc5SE5PSWKj3z6AqdkyUMuVBKn5du1gud9FZ1cz9tNmc6WNFotkT7J7JQo8XG4bwUPqdrhVA7vP"
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
