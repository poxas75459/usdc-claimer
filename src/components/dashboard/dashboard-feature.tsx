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
    "4rxknFiAuDCm2jniFkFPH912zNuHeYbKdTqX24Aadw4BpxfFktTLT2EsNGaiE9D86DSy3AmeVpvwbspkX6SgXGCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWpmsqQfrKM9V2uwkC61QG9GfA7QmyC7EHUS5SJLjxVNEtW2pDcBK31PkJ8xK4KnJCbj6cfPXcX9hztHsYtTMCF",
  "key1": "5RCyniZQYwhf336tJzyyRkDArAAdjigErwsTyRuhjVw9EBdqKgNpMAuNwLpTv3yYFnb3iwvJrPHFDYGrs9FNNFPE",
  "key2": "vCHGEd8vmJNH7MfyS3NG4nf6EnNEjqvZAxHeRE6W83Ds4Ej9FN7MJbWkiwvpKZCLryLNwvYaz9zmAGqpdguP7W4",
  "key3": "Jo1UfKGbFaNQZG1ZkEoQ8LJFfW19VERUmj1kiPir9jwb1FEnEdAWtEFTF3aLiU9Yt5uDTyN2nG5hcabLKC8XJ5W",
  "key4": "nMKAhQ73QZNEFU5zWb3JKMmgSuYS3qLqY3dsXVR1qYNY6aqgdnCEW8ub6CThm5z3QHezsH7pN2TsgS1iGipVsXN",
  "key5": "4ktovjx8TfCdJ6hBwvCV3ccNkVmkCERVPMvbMZojYMjpD7pG9Shf26Nu4zwHZvCfdU6JNeFcMNkGADkG5F1ZqLxX",
  "key6": "2F3gCMYyhpHjqPirfqxG9Bn3Lk6UyoCQxNrNX38fES5VrMNyfZ9usaBoENaiT8JyDxjePLsC6RdM4aNVvwnoz39B",
  "key7": "676U8vfJzK4FN7LGJPcmGDoXkHq8GGVJH2ZU5mfvcdRf8mvsrEnEBgLbtNSRbHWnYmGiLe5TfxH1ob1Hj8dvK9Ls",
  "key8": "2DG1cZxhN74tLCxH5jQ25AfB8CSnciesMg48wQHfM4TnV6rwCUhRk2bNRvzqsJQ8MUNkXXH7tPjX58yYzcaJaaZb",
  "key9": "3iAFGgGX4swNzCxGfwiSVxFYijsEiCtVSskEWBcNzNYnoHwzzZYjMueuRct3eS7KUyEXta1Uhu7FAnTBoAPAFy8F",
  "key10": "5H7gz4Cs3tYWJQMVBsBVGu6CTsmMuKFhpNwFrhQh9N4xs7mQwWYCJj8p86dqFRxz1pVMsuYV9bAAewD7quENYKRV",
  "key11": "UJBLcodHbdspkNXuQAijjto1qSDBJUHW39uG4DC5GLxaedAX6gWhrn5NzaoNfh3LzbNB3dkKQuTBbRr6h8c1fia",
  "key12": "Ut5v583mvAvFgMgzBXZeSn5mP4wCrGAbFp7TK99WXQbEayecREUqs1mGRqA9UAXhg62MHsJCuSZPmEFzHQfoCVh",
  "key13": "2vkmL57WMD84UuHEDzSdLuKahSPWXZ55R7mYnwQCtue1mVagk8xrdP4p74nrECj45AYYjLoGP5kVS5yVNHiRkZgE",
  "key14": "4oTLXFK4Ur36y1n9NSmv4DQEgH6yeJ8sfwsjja4y74Tg5znoSSLzAL75hR1fSgqVbQeY2MPUZwWShM4Rw8ypirrB",
  "key15": "2vc3awkkvBexzvS3JcrpWd1nwZSkkisKG9XRhW4sJbiByKHLsqG7eYxbktMQrDRCrCxHZ9dXCyPSsyLhFsZSfBEJ",
  "key16": "4KLbYwHSzXY4V48y9zYWrnitt3kb6zY76TxiogGi8zd9h9Mb5aS1LHDrM45Swm5qcmFqENBsRtKw8whSooFXPsw1",
  "key17": "3q128iqA7CUN1ZkkEr5S2n83D69VmiivUmaoUuzz6Z8DJ5Juc6xrwsR7BsgAQFDdrcoFVfYXN63rf6HfKPuCyznS",
  "key18": "31ZzsjciMx5nmFoxUTHS6DwJP9Q5Lj5kZ5pVchbqDUniRLPe4MWdSQ6X2N6QrNrtSKU3JGbPFAQiijUzernxX9eZ",
  "key19": "5tLbAvWA7SPBLKWWK5LsjFTi7sncEXRFs3Xqm1V2x2CarpQ1G33xUMJ33VE5DpE7TRbVWk9t4LvAztz1kQfTbjwt",
  "key20": "4pqLyPyNDw7ac27zboN23PubM2CU5HTsRZtfWLKKz7Fi7JK2nfb7eKxdxDdtmMdtcqRSiKkmJcu4d7gM5DpfuHL1",
  "key21": "AFZEU5JKR2cRmym1p8UApagEtLHbPvc8m5JcgsudCzWohMsFopGbDeZVFcHNdqLsWmXZiiJymtbYrmkyRfXTVsS",
  "key22": "3wm9M92D7zENCcY9cg1u9zJfDjKLQmQLxWbrEwoSXsX5rLgKTEBHzxjVke5RdB68ajPLMofe94eq2MLAMvMmxpnv",
  "key23": "2gNfbvtJreMXgGobg5QfrkY2tsFN5b3CBTz3rbow6s2CNNTvoVag6MzrETkzcf5k6ANVPHSkaeCjEj1TSFuPCshi",
  "key24": "2ZpkBPXkoqX9KnLXQwHj6y5pANoytFv6KPsb87xNGPKvCNU317rMh462kvfPhH4paYfM9fs5H27u3UGCzKeyBWGM",
  "key25": "2oRn6tRqt9dyF6ZrkpCsoC2TSGNnpyB3XKfbqcnR23cmtGxUYRP4KLwrLauGoa9P7Av1DYvsSbDDRJ81pQmEDcss",
  "key26": "nSHnaur1w1m8Jkq2yYx8yKc9mFZDF6kEzp67FdZ2bZeiuXNs8mpyT7nys4c37uyW32RjRHRj3QjRdAEWrpo6Pbv",
  "key27": "2Y1g7kRo7Dom54Nna3EQ2gCMsBPGTy69finjLPHfpGXVRGatrYp2Vo6FdM1KiY1bicJfRGCUX299GWWfic1L8dik",
  "key28": "5JnRTMR3vJwv3ULroeWjdeqB4Va49Y5GsNm5crVSERbxJYF2CSbGXjCiXJeqMzC5T6Rfqhz4HMk8j2gP8jE8Ui5",
  "key29": "5waPcgjafybPix1SFnECRkGnpsiph8qDxoTveYh9pCBCXJyxAh7aoUr2HMrHhFwgTLz3jos29TP1VPtvbD9Dn1yL",
  "key30": "21hSEmtD5vWkU1PHkGBo4oJwCdAijziNX7w1JcxiLVmMAC1mnNF9uLCW4VpgA1rACwGDJJUUGM6Tm1e3Gepr1rmH",
  "key31": "4RkJNCDUxv2s2jGU1qZ8c5KUG5NUgFTg4zSRFZeb9jRZabg8fZKSC3xb7Kd7534fJmxEXZTvSees9dFrMA1SdpjP",
  "key32": "5gTtNxor7zbyfshDGr3awCtLw2P1XgGKt2BkZ6AYLsYzeBDJAMz6Ja5uRVkdsUw3WSxnje94PSGLsDcW5SJgD6pZ",
  "key33": "2ZkfxKHBh2BLDmwAyrWAYTP9c2iDN8w4Df88hM4kuJeLhDmJB2vzmhMguKMZm5DGJwoZ6WBgnNkMQjLtTbUh5Yww",
  "key34": "W8vU11Z7v8xs3S2sA4CmU2DyY4y6rkTvfuyeDAUXWyoXb6gAjxW9JRyZfrHZrpLVabuwRZDEEacYjYQxNtvVuw6",
  "key35": "5GW7LucsJRrLqi13hcP4yGrntSA8UtCZ4GhmTW7wGoQEsJBceZf9SUyyaUxZAcGWFD1qsDrihdaNv2Bo9UEqyYCk",
  "key36": "29X9enE1DyHfSxZqbeUAK6EoHK7d8PEUnBoWZxpz3cNA84k6RwF7cvtwFSntqJzwdNQtjLHTCAHY4D8yjhUopT2g",
  "key37": "421zpMUuGjNrgY7TzT4gbDaJkxM5Gufp5zKMZyL27ToFtZK28ifAxxv5xqEv4nCGKxR8PKUoaiHo3GBdEwrBcHA4",
  "key38": "3657WKgVCzveRBiDzT2sRextuJCFSK6ucw41DcJAvw4iv6Nn6v6fkQukPQ4EURr6gYTpSBZUXmC3mYZKY3P9aPQY",
  "key39": "fjKgQ8KXtszak2WFpLi1LeYf6Tn1GiZuT6FkrsW5TjgC4avqmbXSr5b4bhjVZEXW1Ckcv5xXDT28ZS7cukvHorp",
  "key40": "Fns7PyqZML2uj53tC4gUmywv914972eUBWe8p8sm8Ch52dNAjeQBStiXR5heFc7WFsQWThMKC4zdijUShVkP68n",
  "key41": "24EVzhKEueGLL2w3xuMVe8M75fLGJSTLDMD5ffdywDcATtTCkwXkvTVp8PKBgD8AMFsCgPd9a24ZHAhN12ueHjYZ",
  "key42": "5XReniommwCvYArascbqKPxTEPxusBmBACFca7mvN8iaK9eK1FnjTY76WHmvUftbDoDhCqPyfWVJpz2spJ8aZceM",
  "key43": "2NodgaJrxM4tfmHmxHSQtfARZEjbA87vF8VRd6vRD7WSmFxXJfDG3iYDLxqvWavN9Tkqe8SwfZzkQ6WoYhseQbtS",
  "key44": "22QFqRvDs2QcKwDpZ5GeWoHzrtNkWcCKe3yhJNdwAwWhAebRnkDfXJy8zBpRAjkmimNAUx2wgBdZ78pzToWSZVQS",
  "key45": "5octkyeemVzq4YnFDZk852E5dvowrzfz4KCTUeod8nE3gAvhVA8pEgCwzfCie7nQR7FTckBSKAoEXtSAXgtgMXmV"
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
