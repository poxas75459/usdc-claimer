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
    "bPkDd3arURyXU7Tkkk9aNyLEuYiVYBbsBh12aW8jHA5Mjk2VRwWKYpJb8mCdD3Ebq9h9dme62xDdWdvgg785pwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6avLJfv9zN8wbDqMfPghjUGwRBs4Y9CyTiYSf6bDaFQ1jLTyg51ceSHypMq1ajTrRjbAgM43nbdTNdkp6LmK9n",
  "key1": "N3Zhaz1cGe2DQwr5Bczo96G6FNNtq21YnSyCN7iD4EoZgkzhM5sZhy9AhnnMq1L2335BbMtaFMJFtDUVB4LA4g7",
  "key2": "5HUGpFSHv8DbYpwKuGfVrm6TMmLzqVC7RCM4n6uqe1YLeiXp4rtSgcA1nQKzMvc72SFyYk5UDyax6uY8JKKmYCcT",
  "key3": "2fhdatJMgA4HyucASfdkH6Nq2KHi26CNVYS8Ujtvskb8JhRQdVcxoUtZGpuR5JbphsKERqfjVCTD1jGG4pwWLnyX",
  "key4": "8zYSvvsf7xKFSTVngp1LNRRvW7u9U4pGREj15MxbAThDgukrZdoV34Nsn9mfQqcHUWbc1Y34HjZa5nPUN56c79C",
  "key5": "34SK2ogK27hbkCFjKrTaLiVrBoxD3XX9jZjDc5zSHVeSsYTWetWJjz5tRXecJoS5gjUignDgUkjGxHAgcFuwLAni",
  "key6": "4jXKgch49Mq87L21oLPWtT1GqUaVkN28Bhh4vvU2kVV2PAERpjb2ReWob1myDhBSG9tmAvuzwyn8Vkp1pYJhzrst",
  "key7": "2B6RjL2XHVkMoouk9x3GAcdkG1U5hYY8ztp8dsiXUFCDvkJnB8NWRaZfri9hd38KmpHcrxpbzncrYCKcCrcevU7u",
  "key8": "2jTStEVod6tKy3bv1iKfTTpiAwP7Tc3J7sEDDYnSMhCrziQ58DY7JsX8Rm1B4iYqcCpGBUFUVLH73D4xQMUnezsf",
  "key9": "4W4m3zy4RSxDgebw957Cfnggy4wdMqAu6gDSSWb7tjdDNTzcgNiMqwaXBURAmmqqfmgKAdDw7gkRfyakKRaVCyWv",
  "key10": "36Px4DgNghAaVxmUc8DWsA4v7B6ctLxwvvRS2wiiE45tK1qVtu2vAiPwtFb8XJ7VPRwpSCiLwQCiZq39eKubwpPq",
  "key11": "24JRbPUXs6iikJgsjx2N3x4rF8mHzuXowEYxKHCnauAyAuKMsA4knTxTzhMf65kmuSfqWonGwA4whA6NtdDcXs52",
  "key12": "BiRtjzZfqBhLe1yYorvBKdBdrdxvQxJ6cNuozNL3omkoFRnCvmBfpHBwGeHdQc61owSLQAUdms833eNTEs3JgAs",
  "key13": "5q87ZdjaeMNL3Sq7RdivYPbfVn7q86fV3xF9JTFKeun25EFWq5bidPCXjfeTSaY4feVyU1kHmZKRMa3K93zm6q7V",
  "key14": "3ho8DtUVK1a5AjHZECZi3jV3ecpWL2NbPKT5kaeZCQFA648BaZLBxPWUg9Fs6iXDyUVDC1H9Bs4JWDWdsgBkkaSv",
  "key15": "4HnFxPrQocS3mKbkxpvszuhUob34ce3g5kQJ3BezzZCuc12AxALusabC3ZPDcaZ5dZiHAzkn4z5EnhHZgHsVXfHq",
  "key16": "4vhBRWd19AtdvAyAVNUsqd56sznKysYgLAzugYgmsSnY7y78UqCk8G7jLZwkLyg6p9d9jFDsUPwZHs7Mkdre3z1X",
  "key17": "5fHNu21CQEdfuPn57ejfpDjU9seVvdwdRRwwdpPDkikFUrP7qqRhfbLC2LBbXQftxgVapgqAT4RzQG7kwEZ9GBA7",
  "key18": "2gzAPXRiAkGUUHHffDfxS3yUJAPGezeS4brF3Sh6RMHZV22ynxXPAgR1dECSMrBeRTsKtuQ8cCeNQVxPWeRsu2x5",
  "key19": "tyt6uF2nvXiRRh9yncTHFmKo938FH9dyWcqCsC7BF2nE1SaoPFEBg4fzPKDem1vBiKFDgWPe5sCWuNcSezGajtT",
  "key20": "2su46QGkDtcRkUPEECcSQomvuRiEXHVbPzfVgf67WHG4RJ3m3yh9BL9u9AU93cw46XgoNSydRkFX1suRXkBnrdZk",
  "key21": "3xH4uBJMC4n3RqpscPpwJkcThVPnxqsNvPGNPVhTf8Xq93QhY6mmfcK9cbvc6kP16uAHrpyrNPEuC59gSoPd12Dy",
  "key22": "5UWoU5GY6zEsh9ZaCsxEJ1VEGmiKFvUbnS9RF9yVwy6NDngCf6tNLcufaNVL2Gn3n3MZGZzTCQXdpfFPFEMXRn7d",
  "key23": "33CKjyzsFEi6D5fFtDXbEfXJGre4N1wCrPqw5VP2rbDWhuaCGwYuQDXBvHfgcaC722LgSKuH7GZmvphfzgD8w8yR",
  "key24": "3w1YLnq8JerjsGCaqioZedCQwU1Mztpz8mYcfsrFWVNoksdtpWWDwiq5wdCsorZPuks8MdGR1Bj2z3y9Ykez6sir",
  "key25": "2jfYryxPVjKjGdwpgCZuEkcPQmaERNR6wCdcKRKd3bXV3fwgcg9oWeFvYTDFgrdG2nRyr3Wpdc8HxboqZBz7HJ6",
  "key26": "2uuv2G66jfPfSi3d5nWpAj5msGnpZ6qcQKcF14FqX6TSeoeJh4imBJK9hv3NaGvvw9acJTcxi9BZsB4ALSYHZJy3",
  "key27": "3UGTMvCD6QHKU8VeTZdxq27LqWjt3aUZhTotccUossAhX2Jr2v3ZGpXUBQGKoRSNDgzkVdu7YWGyHfJ5SAg2aXV",
  "key28": "VWVZmcTcoQwWjuS2PegTwg2raSc6JAyNvTYKmoLDkC3ezt32b5A1BDXj7Xkd52th6EdgTYGmZK7TuMduHwRf2aR",
  "key29": "2FZhbux2JJHXMKg4e6css7eYnk9sJYdf9RH1XVVr7sWQmYfAx3LVhZR1k7fV94xRvRft4eBCQ612wzCXmN9QShLG",
  "key30": "2oUZa49eni6C4CNPSSJtEVnSCnir7bYDGiZoa4HouxWPRnNtsFxgUfGF52xT78rN5EqYp94XFEeiUox1pURbA6iH"
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
