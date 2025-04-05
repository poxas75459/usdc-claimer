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
    "2MBQU99QKZ5cm8YW1627tDa4rbZnVAHSitDqo5ZHuTzP2pWc8X68FViV6TXWwTfsyvSqMxWLmLFG3jkCSGEfPEyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cuARjHBUBBQTGgkPeoobZUYVtykKYAp8xvAmZotjCHa3Wzdu7R5NMSE2SVXsQh8qae8uZYES6ZUDQeBYCSoCyQ6",
  "key1": "5u8x5P3jubD7SW4AmbPK7JCcWQj7hgqhgyXgdAuvyjmoTn6rnRsEcHwbSC92BBWZn2f6goGkobft3kfPtrZhRnbZ",
  "key2": "2kPEciArJKPnBhuo3tDDEQKr471uLowyeFyJp6PeHujNS7D4CyxzUXDEhCTPqo8f6xnEZvvbKmqCv9qcmdgjpmf3",
  "key3": "hQAcmja56Ah3kycUEJmkJPKBfUdQ3C9cBHucjPiq5Zfzne6K8VoiZ2heKN3PtAE61KYUax1MaXarzLUgKTCECFd",
  "key4": "62qfUSqzBCH8WJnVj32pdc6gnaZJumZ3PsmNgsKYohtTQxK9FedZ7oj9Vh32zy64LU8ZEkuupQxdEt5kSpa2fNPV",
  "key5": "2kRQGEnFqoTxaSgNqNjRce6pPFDsiJxYSnp397oWWvwMcGJZkB8Vm1rSaP6dM9Uz5XdmMKPqPeoCkVTZkey6TRtd",
  "key6": "5UJ3gUX7gprEkq1NZRXwiBAMKD16PYmvhk4aRW2G6Jazn2pMREMX5pmDaRmATJBPP5BJidUBUKy3YdwFaasEUJEQ",
  "key7": "3ZqfvNyvZseaE7EtYTg91L3Exj3wLotozCKA7VrraZJdi3LHCxr95ix3NpiXaUqvLtkNxRgFGvPVDoGca6YBRQXr",
  "key8": "49TUVeF8PrcjRwAXaLSA5WeWjVpLrzgCzuA388qgS4aEfZytvpSuPwVdA6tqhUarNntcCZV3FQU4zhXN6XdD5faV",
  "key9": "4oD5BzRFU2zHPTx43gL1REqHRXvrenZeKV6PWoZktxzVV2tr5HQd53grcqeHrscXjGXHCgLjWDMCNrWXUuEd2SXo",
  "key10": "217h8mmBdQMgG2oxeLfLzrTeKDxoa4XMjPUGUmsygcwGn5jqwWRGBrVTjyaJZUKC5X1yCRTKPjUMxvYmR3iQwZdV",
  "key11": "35DykWghEUxiXE3TQumtvgvvaA74vjvtnwxnzT8jd3w5bcWBmCsSgv9gqCYYv8NWgptkKJ34nb6LDSxn6nWhUEQG",
  "key12": "2mJB4qoeUoAQXQHszk9hXsFnEB8gjMXTb2AN56kEUyFfu8W67XNFwLk3Uujo89XWicC5X4ZgknmpQagBB2yB4ppq",
  "key13": "5gr8z33UCHqJ9vvsFBcPSqn11PxrUKRS3Qg3dn16Ydxbxq4A6rQ9ACz1R2K5i4PeneE4M15k34QWBkGFcm2wgsRN",
  "key14": "Ma2X2HTRS7fsbo3xty8UB48TpcHiXuX6WKBVrPWS3xtnjx5MMdkZdTRCSYNXtCaN9cT6Vh7CXCiimx5FAHuCrXJ",
  "key15": "5ZtNaFJFjnfSiKGxjR3U6v6kqQV3uoKh9jDHoXAo1FozLTsTN9hQF8sMFX41or9oyqsYCFX3zPj97Ye3dH6GNpyU",
  "key16": "5vBu3twsn6uDG8SJmPkwnxUGsJu9xnciwsYUkzMnquHNpR2T1iHptha6z5ke9np7xFHttfmC3JJrx8LGbVi5MLh8",
  "key17": "5j8HHdqkgqNJMTujMZeR9QiJbX8urRxtdStvMe7sA9D6ZVAV5xK3LKsisYwEFC5wCpFTr9fmfTy974e6PMGoxSVr",
  "key18": "5i66iJj2aGvYabtxvzQPDL1NCJ69xbLAms5GFHkygc3MSSD7RvfzmEacUPTt5wBiAPZfZK6tLS2uTijzTcdeKc3w",
  "key19": "2CP58Jgn3VRkqeSxo7gbFfGC5SRjMxuHATR63TNqbNDBddj4c84WVZZS6xDxjeAi5xazPW1DAdiww8gTnAJmGyFs",
  "key20": "2yRPzoXeBY3ALRu2dy7yNJNtjMvZHiBWX2EuUJBV9wJxbWm5rtUwhHJE2yik4V3j9FDtD8R9G2qwAoZzTsUAWbUp",
  "key21": "57q5fTSPhTF8tRyjcM5FuSSvggt516FGwN6qHVB7iS9kpeQoGF9KCLXsAbVQ6MLzLiTZ5mByR9mYKUDTJG2Uoa1U",
  "key22": "3Z4A8DFZmyG3gPXeWtexABU63v5QyWt3CSFfGFb39uzv4nSqYCPAE99Bq5ku8jrNA5FMWpnDC6GPmwQMdbSgi7oy",
  "key23": "4V73CeYgw7t8WfkSbxGZeRGtmsg83bPht1mNiGyw6JQyUe8KD1Lf2veN7BxRmTRBBMw7duiWnB6HUi3NMZbiKmPt",
  "key24": "59irYNUnLxWXLnYCVCuvTMNnURKhvgQYtmwMKuwLfFmdjsueraHsZFHPag4PCmZxpHF8zCdUMTw3xokbvZAH46bf",
  "key25": "4QZUzQWeGxWTevWEiVWxYRsMa5EW9WAxesMoHvc2UCGuUtSFmDAncBArt1mUPveKAJccKjjQJfMU7rUzyhnXGBvy",
  "key26": "5HvNHZhB1f9narC888JiYzmqFLr2PemBg3GtWfmyueUZssUqvoPKrAytcHMQiLWx6rqhkgZa76vCf7DV3bRRrUKf",
  "key27": "3c4ojAHac5m5vdsJwrESqNESqt5bhBuy6FB7Paay5dgUZ8ytxx1rfBDKAxuRNP4ioCwxZj9gawmNQDW9NH2SHzGE",
  "key28": "5wbgptyjmDgGzhCSY8pMVB9AgDjbUqBeAKJYsD35TzboqtQdpneVB3LmGc8dgtCZgLkXpydrQw8Z9ekC2kSrybUu",
  "key29": "3PGUMmVqfz9GSskssWMXZwAoJmi2pan1w9Axs7PTGYL7ikTySH5eSaChsttC2NoqHHVEA44G85eGDnyuvxAbNGM",
  "key30": "4yMUeVD2pjD4L4weBoondhyb5YUVTyAEpner2fiMT58y1HKwDU6xDXifbycxhjN4iy9QA3uvmumfHnHYYAFaxwta",
  "key31": "2YPj5WrjcxYARgrNaNx2j3FZq4ABTxSrdygMZLdzoTH4bV9aB3eGdi3a6kGakZNwFDbZk7TNmrUph2J4NQipYyZH",
  "key32": "bMStF7HKNcZW41tq8JjNXWv67EXhi9nLRTFDB6BSJUdASUXqKNFMYAUvjoq2ut4Gj1NSPvgGrGQPc36UDdvBcAT",
  "key33": "42B19KrfDbaMXRzev75BPR6yQYQFUwWzFTsc9axuprDH77eeFpLnbiiZoY5s2JpAE7byhLBaLFjV3zuYpTq8sWND",
  "key34": "3SAxzf518NSfQortdeLMz8JxvLuyZmMAUkTjk6ZX2756A8NMYc77fSGT1zCwkYEL8m6t72yefq2Zwu9Zx19dq7ad",
  "key35": "4MxWLGpzhBTVPQZyKWP9hcCWi8EzF6ug6bBercttLgY3vjr7pKj7pcnCaxbJFxTrcXnyfnup9AiYwA4rWRhjuFRk",
  "key36": "2srG23d6WT8VCDH9pXhBW3G4oPSxw2GuEv9jzoef56QqMgtmgpFDmSci73BUwdCqWpHuHrChRFCBxCERCpMxQLaH",
  "key37": "22dcuQAkn5cMPiEn4Xd2fi1PdgpWTCccG9EkfPr27oPNxWNEWRG7Kt6CfT1dXzc54JP7BCENxLb8YpwyhRaRh4CV",
  "key38": "3exZHRR4ZivH4Fm64s7P9xSmmqotQX794WVZvC91ihikwdEU5WSLjBP2sbGbfPM1LrFuS3hWbrmHGsHLM4Wiyg4P",
  "key39": "2rHNfEjHgFyo7U4iwV1KwLTWraexYhxrptxrM2MKJD2UB7FNSFDRA3MMLiptzDmzmBZUDyjQT8CbfHJUAAAwQ5Tk",
  "key40": "66MS5ZM2PjCt56xQbnCaTZSzudrXTsfXXTPGkE7K4mRpzEh6pyq38ViudpL9PTC95PPGor4zeCyhzpd1mNxAC29h"
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
