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
    "3HHpJpUWteKKzcvwwaVnbNYZz6dRRz8n6zJJBLZkyNDtA3w7rUms6uF8qN9HrkmSpva58C7xtSmzLTTfoenyHoNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxTnZabxbTUTpYVywxwYziXzbWenPGzKzzbx8293WrFsyk9ajSGT9ugEvyGz5kbitWdRnUL7r6DhhfKGdCXuTh3",
  "key1": "52arDpVPYKHthr94Z9JtLfr8vSp4BgrzsbiBCGCbVNrW715NXAAy88d6uj19CH4HoVRQ3pwDVjAsH3kCNdh8Le5s",
  "key2": "2psqwLHK4ZZJ8wXUYF51vhjYWgU9LY4vt8vDscGRurQdFgDHkSqGat8z7DadSwbe4VhfYdmact9LBgTzncxbWKPS",
  "key3": "2V1hovn295dLsxwUameubojx8UPacsuht55J6ZSAQJdtai7V5fL5YhQHXFNH7XehW3dVsHMcszz5DeaE9ZaXq7WP",
  "key4": "YCkGHDzXA7zaKMsTEpinLb3FW7uXDUrnKqn3yKJ1eKiCrWg5AoLi82BSeqH2rgPF4KcTFws2fXYtuFhDvGJTnZZ",
  "key5": "4tgT3ZUsrySBsNfi1NjuRxKbSFdcDV64AXoysaF9gxU4f8rzvpUSRdb3RotNywxNkuv5oDKkfMXQD2z9AH58Agga",
  "key6": "6en6r7F8QgRW5FcVNC81TJZnZdcRhsPh3JiHDgiNHv4Hcf2EunoKFZbjTH2rdXCkj8TyLE5B459Q81mMRGoPoh3",
  "key7": "g49BMuV8ZpQ19XkpzfSDpxJuzkxf8m1HrxyKP4CvH2pbdkBbswq8mjhcRFDRx1dzTSJewFCiBv8SvVMP4uLwiJo",
  "key8": "vpf2i4W7EvSJ8dCUj3DZ88rbuipRdyU5Kp25s4k1Fd36UyVvGfQEDyhJ7z6UW1TKGh23FcrHWEFPvTMAUjDFzKi",
  "key9": "3C6wVxgy2JeuZcoU23gwtTVqV5HS4uMvDRAxWQnFMNNKJkmV4saPHMdnKovvecXkfuS5WtfeApNxHzWSSqhmhyss",
  "key10": "4x5dRP2jesSyax4s3a5au2hfiaici5bY8GYzako83nciDTFZdib8p6djqrPrzMcEyJx7tF7vPGFsEbrfWPustsDh",
  "key11": "5DctLfMXtRcC5KhSFGtaaGNa5NGrYhjNHPztgtKtRnumtNDGWMfmnpAuBKfrFGf5t87BF2PfQXv8yhHFa68H7xD1",
  "key12": "3y7jRh2eKEJdAke1U31RFQKzGParYzZWCMzrDZvgU3yTHNbhnxKoayt792pQXBH77Z2i51bjU3fZ5ymRBMUCAdjx",
  "key13": "5LL1LK2sARDWm1B3bvdFPnyuqDBHwDHDdqUHuzerPjv1TfDZtSYR3an3RyCtoaZvqL9N3WASRGnoR4rmqxZX5CYC",
  "key14": "49rWfEaD6N9ghod5bWHHqhJzMdHVUw48qrjjFAvfx2emHsZhQPe8SwSyTE2YisznKZUwGFNKvJMbmcS5HU7vEDK2",
  "key15": "4D6Tv92mR64g7r7Z8y6ZqBcyxxt31UHqWTV8ZcGNfEN3wgboWpKvsnQPbeAzQzt7K77ix8AryJpTRACeFXntH4CT",
  "key16": "3xKL3axaCSzWxai2mZS7cJnr2qz4nZLcD1KD3udT6oJHofN9vLH75FWy5az8LF1cnP6To2TEsiKuG5oPDqKH8p6k",
  "key17": "3Geu46pVRW784L9U6wGuUBxCmuzMurstBtpqXCohV8KUXndayKt21iqX55tAPGPKiPwsmMG1PTu6fnR2VDnyyd4u",
  "key18": "5vLZ8zwECXB7EwKp7PwLRjAUniuse9papYvyspLiYT71SBu9JZKuXkejD3ZxeDuqmJVwtetFUPFzqSF5f4ADZaof",
  "key19": "3JJD7kKcRyh7LvbYn7GsgUBWCYtXNmtTyYaBTihGxr41nQK7syp4FVuTVWDDLeMJxGZKs3ptt3Xeu42StToXNBYw",
  "key20": "66XSF7RtzyyjnccaaXZwsPXp58Ba2weUBSmMXrA57mk67HWjokzjuyeJmKSR2KPnBEJnAcZJPMf56Fx7ZdZ5GEtx",
  "key21": "3nhWwd4w2udCeSFVJaoY9uYqUxD7h2ZuVrB6DQwWJzgHTVLzfuxHXw7RpxveGxqqVSX4NRqfbPUZy32Tj9VCAaNW",
  "key22": "oPaJb1Bz5AWBxqKVzgNx9s5D15x9HFXXEJABMm6BukL4cViDPDJeHpMmopZjS9fmJptSvcHfxZfWyMJqYsDKaqf",
  "key23": "52fKc7K3kCoLuRzvSHwzR5f8SYVYsuSUi2KC6EdDJu9GEe1G3gTDtuLcYEVbttZGyavUWkiu9a3cNFtrwskbHb8L",
  "key24": "4zCopoNJKporkGjN9zCUsy9fBMQoRmww33DXZTeFYmSeCQTLKcZkj2cNSTGgQLF4GLqhAfYiffqz6D7hAaRF2saS",
  "key25": "4hPx6u1Nn8YYkkbNye8A881LT2B6QXbPJnd48iecCZu3UqeBpwCSX27ZGrSMWk9sV1pont3qm2CFbv5dQzkPDcoz",
  "key26": "4z7stXu4b5mNxtJEzhwciqrk9mk3sJGg5S5LTBzwonHqjT2vy9XX4nGAqXdY1kQr8Yfrh8Sdy6uGDZbgmxB1f31c",
  "key27": "55SPSb9hgbgRhEe37M9RjW3oVbKepxehFqUUEGxhwAKyvCrskRwuVqQcTTGzzaBx6zHa6g6cmJvd26aYk7GNXkei",
  "key28": "4oAm1YfpPbUjSWiszubZDL45uZvJk7mySKLavtrTevtDhs11HzMyEcrgSVCCv2xbk2YQC3mA3yekUDn4A6y9wQ3x",
  "key29": "2TadYdpZ7P6uxdJmriQS9VHf98N1YoD8N29qxWCzvu32v1kLvPmPMJzzZMnvTG5GMr3BhhpaDLH8YZfy9EfuB4sY",
  "key30": "5vDvREQqdBHLqBxYTWPCAEaJ3iMwpCByVUU5Zz2PcHsavs7TiDbDcM1PL38mRQWHwf6r7ee3YpavcxVGPfwPjtoy",
  "key31": "3yq8tGs2Dy7rPFT3DfMs1VocLvJVdWKb7WW22tFTXfi33r2CfPepPyk82w411sLESeBU5mLKguT844xRJZBkTAuZ",
  "key32": "5texPfQ2MMFDrR2kea2yvhnZ4mii8zcbQkgiQuenpGQugcz9zN5v4DFBtYqX4TEeAZufQvp6HzCvdAzGGGFAmNKb",
  "key33": "e9XW5eQm42YLMEzDtrNKx9wA65jmUTgnf5aB5mrf8GBmRjtWJJMtQjYqwCBzQsXoxu99zzLeoQqKEELVo9yXqrU",
  "key34": "21r8XfBRDyJC1dEbC9zuL4P3EM6kLyd8W95rFLzChYaoyr6cB9LCErsUwB6menMch6RnRYJnTBivNsHenveMnmoL",
  "key35": "4yGM9g77NmvKXKFnymUpCRQrCXLkFjAcg8RXA1Jmon68RpsC8M8m5HpjCWPCx1z7t6hamVVZy4LVCg5NYNnyrFPo",
  "key36": "2H4myPYpswrjtafzwkuMysxVxsHazsbG4eNCwTG6TUHumvvKT69XmEfxNoZJoFURGXwHDQ5roBjzhQygXkkEEpCj",
  "key37": "2KzaM2TTCuBtmfwbrNWmZqkGsZf8TzBdpxPheexnfavUbE9cQwGojYPxY2DaihsNF38AykxKn5DTtdewMoTA5xZd",
  "key38": "3b3aTDJmDQX3u23XFozgrUiP2PwZ2TiQ3VucXdKPVabLGUDicAGcc8Mj3eTb52nGvbtqLEZ2kaZZAJVN2bkruWPD",
  "key39": "3epSkjnmSnh1nKbrMTcwsidYd7utumymC9rgjGhMs92aLc5h4jS8Hx7WcXcD4tYaN29E1oQuCGQcEw7rezmtShkP",
  "key40": "3fw71ByTTnnXTA4U7WEBN6YPv2mZBTj5QkUpnMNoLwZzNaYjWsCypJVSqXVxhunigufeadEQV6KX6RqQ5kFxFpyK",
  "key41": "2oqTMaekmSg5YbFuc7KrVrAhHkpY4XxK4fdH7w75GtmTkS5ZLRYXoqmTJm4Moj62WihD9n7CGedSVSFyoN9g2Vwt",
  "key42": "5Z8Ecr5DW1aRF2DP9eechDXLWdsx6euQmC1Lqwk1KLgrPw5m14sz1CdtNqaxM2Up1CG4g8kSAk58KgyzHCQ3jDFF",
  "key43": "4pePzhAr6mRdg8XdUmaZE3AF2cjFNToUXWJTmjMM6CRC7ug2cYzCrrHewKkDrWRV7uBzoW75fR3V9szRtXdw1vqU",
  "key44": "29LwL1Mo8TZZeNLm3e28KPHc8sVS3xtjetVtc6wX7ZFe7ysYNE8iWEPXkZSCGK5H3YWVbmV1Pi4y9z2k7bAfnQ2y"
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
