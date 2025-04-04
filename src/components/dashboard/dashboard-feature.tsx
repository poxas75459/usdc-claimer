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
    "5oAMjrfDAC9V5u8FAXT5cJrVbceSm22u2yUaGLTJuEXScwhEZYToC9S7MdVUvTbdxi3N2pwAHTTsZiizF29upLUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZtXT6Y5ARX2NKvCYfK2sxE9S5gQTQcwh73n7KLb3YXCCwvWDPCRtCSYd3uUMySVXrKvFF8sHWGyPeqsKkniwKps",
  "key1": "577EaTJRoTnspGaxdoGnZFYUqfW3MaCfpVEssmmoewv17Nkvu4otHnp8xuwvvXkD25F1p3SztGTWk3Uep3r7TYYz",
  "key2": "4H1vy8EjJ27vUEQmik4XYqE4LuhDpRreEsLeTZGpaqScsQCD57LMTRLxcvbtABAENyMXMa8QNGcQvo3SS9pJHvbs",
  "key3": "646y3yFGRT7hA82aRb7m32rXqKWHmhM5YwUnTwa24at5mdr1JpBR8oJDTvpprJh9d9BrhHMsboQtEEtzAF1nYfR7",
  "key4": "3r6xaCiY5NtBhnYKF94BT7NFN2sNjJjt4SEsoWXmhnKep5zBtCkAfj6pRUv8c96U65pXYbjK96EzzmiHErkACTuP",
  "key5": "43fk4sWBDMh9orMKKDcvM4sFyG3z7n9YQ5cAeXHgHmZ7BphwLXdG27Kx6auJJSqYbYr1gaxmvxPDvzF7ztWgav8E",
  "key6": "2xPrHHvPaCS3CYeK6wbYzLnReZiS653fNNm5BjU2oYxeZnZcVnW6xBKn3fG6h6n3Teo3H3PsEBFncoCPiReiPSzf",
  "key7": "4DfrtMhkRVoZZ1aDsc3vQ8kCmJGrTFci9SsBfBjL7wnweDAMDMDLckJR4mZCHC9RC16Bzh2qsXyjoPB3Kdjtcift",
  "key8": "65UGcKsFqtNQFP8RKwUujSmmiSZnXe2WAD5HjJHugd6DQ2UbsUjb4VXWyyzakv7U4kxjvHGBojvQ5qfZq4fU3oQq",
  "key9": "2kTx8kHdUHeXCNVEAJ51RC82ur5VH3Ze7woLyun4x5YFgeKX1Y7mUgsCQTk5bSuxbfDHcZSPpfcxXJeDU57TdZh",
  "key10": "27Ay1MvRHBPsgK9UTDTsDx9LYFTG1qC4KyDq35BiGacCRTUhBGCfC8AjZFWMtjmEwC5DHcv8EwQKeU3g75AFszyN",
  "key11": "2dEGowMDHGEX6WG2yNCQ9iZL2KPWaEVNFnw9ro2CUKRibftAqwD4YMgv2qCwyug86rKAthUC5LECVZcJNqAYKPsC",
  "key12": "Rmt7NpszRVsDcRgn9PgYgasrE2kP8Ag3iPFP16JPCWSUF9p2NwfmEMdwahnh8jUXah9HaXrhTHc3gxqVrQGuR9v",
  "key13": "JkJzwqju8DRQ1GMTaSdhTokahR6P47R5D8RPvg395gacLTsDfGyZ7gFrNReiyToS3KoM7Uk1Jdw7pM24U3jAXd6",
  "key14": "4SN7ko5W2TV76dE9v399swQSAqtGUjLTh4eitkEhmdPzdNARNuBBYtF99yBsJSJKqEfpaCxvvzGFzBj7wabsSNe",
  "key15": "5f5fBQ9BQSPwbekyJi4p9XYDvFgmhBQuFZ7cEVyvg922Td77Ls93NinR9WCWKpWpzSJWnsR1LrCpiM6etvDyouDN",
  "key16": "4hYGew1mobDMm2TRri9tvAahzBoiizDFAAPFT8VtH233RN27L2M1btNbSiDv67YQDchPPM4rSQyUXenp16aQmaY3",
  "key17": "5ByqLEzFaUJxKhXCA1KjxEnMnRubjneVVUmWUNpJt8Vvq6VyxJ8Fszfaaw5ZtgqRWv3R5Bh8wAL4kK4EAwb3dgen",
  "key18": "3ipn67bj1Bx2QtTveCgh4a2hMDsdnhC3mokFNQoKvDJDgnYem6xk66gZChBogfriFq2Ki8jxeUmKewRLczojFi7X",
  "key19": "2wcG3r3BNH1ZZxAuPUEfzSusQyx535w4GkieW1N2dN86JBb3DFTsWtrcnY9HsD6sQYcuyQHgVgU4BKc8jZpVxqh8",
  "key20": "2RAcsnTyoAaWQhCPupDW2RQQ6iCuVYX5CZcCLjW5yfao75tkAWWhJXWtrv7XHaQ68fMN3b3kudhMmtw4XUtvfNjP",
  "key21": "2uz9izmL5ibyyFfLmJx9SHp8vwfxfY4ivmgsUd2enKRmLPYvz6aAvYb6XN9BqcKaFR1LYDmbvdWMGYyZ8TqseQJ6",
  "key22": "5EHcFntH3CzyMKTYtZZnwJc7pgc2LBthHf5S61i1HHcR4nAM3K49irRxYrWbxwhXZPMhAPzzDpc7sZha4AjXEZsb",
  "key23": "5ytDhNzSw9As76iQrozmBPEJWxjH8WW3XoRiNx3Y7fE2vgoDV3wafum3T76dPFquMvCxNjVM1QiBmLsutjYU4G3g",
  "key24": "5BgbnMJiooYVog7xnxxmTe9GM2jERuoPhRnWXRs8dTGSPhUG5KjTYuPYcuTqyoSmbFUfHfPX2jbL2G76pHPGxqdp",
  "key25": "cVKsrFS6f8zJNzuDffygdCFs8BCvGT4XjJHboQ7tUX8BCT9oJtZ9fMP2xswDMHvmb5eDZttHkQtJPsiVE5gqgWM",
  "key26": "5rVMLm5vyhQF2UmWgvUpdNCRgDL3S764tTVMwaGwtBoqnUyHCvZ13TtLY7bxwzSF3QJzHunbKSAb3wepJfsCrpDP",
  "key27": "2jXym2H6xadVimPq4ScYNjTX6QPDeA2gGK2DkGU3C7JMj9WPfoszb8zKcMSPnHrJjmfPKDQGCdmkNXsf7V2bPD7q",
  "key28": "3w6XyaUCjkYKp2Jv7Jh9vLhrgNUQej4GQuFk16FiTtQU2ztvL51YRHpAVWvKNX8mqXukXvnaFjhrWhKWkjW5zJp3",
  "key29": "3eePzHnDKe1KKtYdoigpRvhcuxkaZ6fjTFf2LCtKSnMh9K4SYDmgs6uSkZePgSndrnVrA27PbM7o7N3uZUUz2FLU",
  "key30": "66kGY2fzqYGu3AmhJ8EfkeAymt4ECNUH6psLudB1BxZ73uTYUtPxtbT7Z2Vmd32LPu9Em9F9foj4mRWroN7iocEw",
  "key31": "4EwvQzdhqYXMKu4Twj2uwnZqZaCvuL5QdQSExifmAiNRg6CL7HRtcjU5engjvJCHkWpLyjNdg7R4zS46LKRhGHHd",
  "key32": "447zEM88Bk3jm4G6hYuu3cvx68athK6E9QQmRjz5cCAmtr5C6QyCoihy8VWKMSp7N3W89oXorYWxbaoTFP4YNiWv",
  "key33": "FzcznJzzn5KovD7nvS3hpwHKTuLKZ543eTgSRKKRJvCXxG3PbXDjVtkHv86j4NSBfKKgYVZk4CHVBhVJswqxssK",
  "key34": "cUHnc5rkgENDTQ4jdnkXJRdoS1A9mREDHEzv5FnWSq5SeeBdcCDtv8gzDh2iQn27SZip32s5Pyo5771E15PFDS7",
  "key35": "2wnKDD8rohPcJLF7v9BfeW91qB8GjwrSgcXUGKgHSoy4XF1gX6GRD46qUfnpiAraojgc38TwPoPjCEGMiSYy895n",
  "key36": "KkPF44WQRSXvv546iQiDY5wYFzQcPsup8NjgrxwBj2HDSAZhFgJUsviLaSahxFpPxVXD6tQeMutUFe4USEowcdQ",
  "key37": "2FNUsidUqqVoewoHfrszjsgNmMrN4U8PXxFuuiLLSCXST5yqQn9Fp8ZpgUFD15dRMG4rX7gcM6n52HM5avQmDRVs",
  "key38": "3oRKVmP9g321Byuh5RkyFrA58iRzv35mNnhkCUD3gcdnFjn81jg9daerxgmQctQwzEQWrMCjHgLNxLUbLEQsJYfX",
  "key39": "3fvhs1hjXVUmmJee7DFzQdQmbXe899G2jHNkcQrLTVu62KMPnoX9ZL5kwEHHraW8h3xoy82Ld7t5pH4yNbMbaUdE",
  "key40": "2pzDooxgV1YXywFQo5HiTo8WzXK79rzq1hHv9MvfdUTJZ6UJLwXJWWfxEqe4b36Y4gpr8DDFLzrELDGG4CyCG9BE",
  "key41": "336hmLJ1LvkCV49UitApHXmJayF2kGMh1uZFbUMEyXnv7yiv5i1hgfEsRk53VRodf9EBYU4YRTnvyEEwnvRZq7YW",
  "key42": "4WnPyZp6Fi5USJMMqBLgv7im7hXgH799cw4ZvhmbCzNz7k4iRZq7AEFgXL7A2Z4BJ1WdB3qxdqVTT8einGvvx2fW",
  "key43": "41p5JSeZSQXsHXvCurX3JE1zjfkzgmGiRykbayjQLrqfNA9ohMnSRMNua1KPgnT7sMDn6WsY6RRwUHmD31XKsEvY",
  "key44": "2jmxioT1s5yk45LCCMqtq7RztZhUV2kBKarqsFNxxkhHMhEzoEG7sxQ5PQVTBScPPyfjvM3aB8DgCVCMAzppFwbH"
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
