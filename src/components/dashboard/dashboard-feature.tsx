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
    "3r1NPY6VWbsNPgwCfEtS95X3Uov5eC9j1zHBu8zruzrBVUg5CSiX4osHvXvB9wJMtKLBQZTascEucceknEUvP5LC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yc3KuLogk1PtokeEugN8icNcPsijbR2TPxj9KNL17v17s8AokQ278ynjjvry1hNk5Ek2qZyRrFumL8BdFDNygLc",
  "key1": "ocZAVt2qj7cmxGbwtGahDSmj2BGGH4nRXFZprcH1TBErzoChpHCwoY79XijBGuqRwWzHA4BXhYnobZFTo2ENmDx",
  "key2": "2zaCP7jBqRDVJjxx5DjGNwxHmAshhJGZgd1pexkiZsRaTeF5c9T11aXENQakH8gbHrh1DADL7ASkTNT5L8rSpnUP",
  "key3": "4jBz4pbGWjby8XoyEmngHz1md8LGxehpSkMGH7rWjCMhasSuk3ma7AbP4GayVCP8nC2p4EAobzqDZBfHtFKxKMWs",
  "key4": "3xxK4rT18tmskiHE6xQryfDHc2XBiS5XiHp8if4om2vsKj7KZHMmAyFYFwgYHT8CV1PKbZefi4PgHb3BhLFgdFwi",
  "key5": "2yntjQ34sVgSXTDXCLXpiXVEiBRynLoXLPRyH3GYwkspDXozoE5FHX866KeGEo1YfMRbiaFwKbqd1YWLsZk2weGt",
  "key6": "2fdfqv3sWJLrWwR7zCL9xGW2gc26RX9HzUDbp3ip5rNwVU8fCpSVqt8YyNw99kdfX558ruDjANwPUoh6a6KJLgMT",
  "key7": "fMj7jsPWgyH7fFVVJ5EVdX2QXHNNikPNqv2SWNyGEFdejJtGqBGH7HJYLKCxpN5iDQ42fg2gduL4hHu3JYfp8nF",
  "key8": "3P1id2z9JvMR4yKNLpWLh5LT62Cvp7pRLVoXWhhSSST3zswEjnjomeYoMHgFk26zas9qU1mtp59EVmHeBRNvKw4K",
  "key9": "3PZxcUH1Z5n2vFWsuDAKHCXRsiStXxDsHJiJpLPtcot9bNB6GjddriSD7m6323vVuVsChTirB588BfeAWXRYBTuA",
  "key10": "r6SvV8HTrH7hMfbYxtN41qcx97vVLXmegAfsLEmojBtmCCC2VqeTGMApeTg5tQocAfyMhCJ3zmktGovUaDgYtT3",
  "key11": "3wao4XGRT4z6YTjtHmdgXWsw7Gq3vdaKcupx5p2795vDzB6XBJeuMgwreND8MtvrsXZYYtdNdZTczkCpiD6j9J4U",
  "key12": "3CSqcuqiXKTH6xkgQ5H4p7KudmgvZVHgHSdQpPK6mVGuVuuGFq15gg81svgafWDCDfF7FWiZaM18aRdZQfztEsWY",
  "key13": "bXfjYrLLngH2H2gAhNp9uUCAWpu25mjigWXiwEzo6o17oP9oTG4yKChbVZv7UmzPyR1i6M45s714KwZ662EidB4",
  "key14": "37dHwMRtfzZvs2tw6suNKiyqAomvvX3shUzhweHxTDrc9MAaUPVysbdn7ybJHSc1rcESBCP3bETMe934U3omN2qd",
  "key15": "4vtnnph36sx25D3BseGMJbw45nPTRnHmoRKQaURg1HLgD2kLLTpBbc6CWS1M8nMqwh5ZEKE6LdrDAoBmqDntRMfe",
  "key16": "nrgA6E7TMZ1Z1J7g9FMCgxP4hrZGo1SRoZHV1VZjJbUBApRtoMSmoqFhk7WTa83xzdauPAH1Ntz6TgsPP4ktw7B",
  "key17": "4eJXbtE1Eng2ahYsPJBvvHn6htCFgf3anuyhf9QLchtiWwJiTGFR7PaMvC4X31zVUwmZpccocLRVA5cy491E5Ak1",
  "key18": "2Wcq7dnqmr8zQawpk1c8PD2YXkMukUHk7S7Kpo3bjNz1fRqmXSDUWRngacV7d1d9oKz2wUTNFP7ZpgdY5H8PEBoW",
  "key19": "5eE1dTCdaYY25zVJccty5EtRh9kECDNprDjjb1hup4anEGs488VoSF9CVreDgBp356231WxTBidyY7JVcEkjZm3G",
  "key20": "3sVvVL1dbSPkW37Dxgx1gJvUcn6VnRweBL6nJ93fNH8tvyeNcP8vKstt6nUKYjNyFK1faNRN4ewrmDDxU2mxKDua",
  "key21": "23VFG8BXexpxueyFwkGoPSxjHYKY4zDLF7eyAEAGjQdohGvtvHGy2XCRHv8tpAbSxfuKsdyWqZ23ujqGGPkyvTQc",
  "key22": "5NFgincHGYmN5bsaRQVM8r4os3oF8chv8N4qHN8soakqs2nB4GJP9MyEgjgYT8CqJHgMafzokhVwSS6ZssqrdzXP",
  "key23": "52sfPFUF5PHNb2AY4p3FcrEGaG2kxZYCjtPhe62kzA3oo1awkuyrwJyUVT8rtxJY4CsN3qZsiyqT1RKQSaVj861v",
  "key24": "2qtN6XqyWAoM2Kjk8ShVYwhn2Qd7Fe6ro81p91qGNnjeV41b2EbR1E5SaohHoKPGJaAoTQi99CcyHeNofHSnNivS",
  "key25": "nKA7891Lbn6yyC2tzxx1o1vAdFiyKPnbeaXa2nRLLifiDsGa199Lp8p7x5b3WannhXC8k9jWzNJ2mpt76QmwYD3",
  "key26": "2dPwWJ1KSMUyKH77EcpUTeBoEgSjr1LvK2cUCmw6oUeZyK1VgC8W7zerJn8DAHMJaAjyWW4b2GbyX5jrJCNAG59",
  "key27": "YwvF6X9q4fogygW5szrotqRhCsV4zGKYGfAFRgQ8eoxMivXVev1mPN92XC6vowN2kRVhkBJXTeu959VEy6zNHfb",
  "key28": "HjHg9Q4RMDyVvNpk551VUH48KuGE2CxnvBhSCvxpvZTQCPFw81DC7j56u2MpgbWu2FxRdviHPCLKy9NmpiGAb8k",
  "key29": "35XjdgbZ8GKfaHXKF7R6nvuUKX1ZFtgaJPuQJXSHvoucid5XKedQik3xXPmyDruD5QrcwQ6Bw8CFQvAumwyPk3hj",
  "key30": "2GuXiXfcZXnWqrdCZ5Js5qYz5QxHt888QzXTP2NWYenBENgRYRx7gAhEZAPMZfbRPM4Nj7bde3TjyZVzhrjtxwiR",
  "key31": "2ysGC4QUQicbHd2mNVSysMnPCGLKWsf4uYpvZ6kRsXPQbwF7fXxq1w2av7AEMJAtiYCiDcnrPH3wr1suGyNQhSUs",
  "key32": "b2iUy4EcXHu16oG63HtC7PSnKr8ZPGEnjtzYUbP1hh71pDKWBFPQ9gZkhgisKD6VTk9eiLgvm3yuWM2gZKexyrK",
  "key33": "45ggm1uxihKKkhR6bR5JbYMhkXGFUot9JU1yjASz4sPMXgzcWJ5k13MdwQZru4NskayTQBRs7ZpepWp14YJVBpwR",
  "key34": "5Sex28WhYfsp1qj53ztCa26D67GiE8WNce94GCTeSHtDYLxvDUshQCAsSZm9C8qsosnvBbvEHrFix4eaWzNy4UbD"
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
