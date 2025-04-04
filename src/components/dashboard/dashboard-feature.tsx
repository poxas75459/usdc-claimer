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
    "yFXDicpYH3VwydhWV5vXP7XfWs87YFtH62sbwb1e7E7X4Fd4SV6t8tM8Q7hVL3U4bZWcaDfSSgfjhDQSAzZsw3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N5i4ExCXiMcfB7tt7B4uH1zQmwC11ud6f719HUQXyvgd56AJjJs9vZisQowmHM4xyzs7jno9xshhitQe2Y8rjwB",
  "key1": "333Fr32ie6KmkKCn6o2rQRXkXTFQW9AMAMoSiRBzUKyXrFyECJoTXCimEgB2SymtK2YP2cGn18ENSFpgnA9i1UhQ",
  "key2": "3C6nfNW1TWTbykCQAmsfimXUdjpiBzveRRnE1gxXZ5cMPZbj4yff9ysFfvSXhcuwkacreh6NcgMfMhQopeenXfPc",
  "key3": "3Cw9NG5WKvKRG7SCfiJJRFTR1gTVAMW3Tj1wbeFhLx1i2WALp2pRmFxFyvw8pmTZXg45Gr4uiUichiXcxRx21boM",
  "key4": "2R92EvVS63FWSmfUoV4FySt5anoH6hkU1Qey49j5poPNh4ZQkP8L7PatyFMnFCE7xkmh2PrxtcSfGkPPaArEKydR",
  "key5": "3n1W9jGMvYe2hVeN95dxRuCLi6kxJw7GDDpvcejA6tvgQuRSwU4ERKoBvPN83wiR15WCqaEZXC7HXULDhMs8Peiw",
  "key6": "5BkSFPcGi6JLDqkhrhirY4C5iPMQFAAiXo9DMjbD1Aast7ywhBC6CLT5iv3fap9iGdTjYMjDLMgya6V2KagKHnSD",
  "key7": "4etutL6mmSGmw6DxURfUQmLvWsDPfxSFziiZFiowHoWzeHhhT6Mr3qbQh1z9jG5Dqw9bBEKJichjjcwinSgAC5uF",
  "key8": "4iH1jZ7DeDT7JANwvq5z8x5wjgjRK25PGk2V92XVVZNMMSGzjSufR8ZbRUks5Agi1NvpAiZ7bGKAUPVQpoSYRzh",
  "key9": "5gmkzSUywQ1nRmMPnDz43ZxDoVHWnw7qBTXCh3mjp2Q4hNfr8mEpevdJgcbj41da3QyFAiqTKKMAfR55skbCDX2V",
  "key10": "5a56xj59TvqXqL1D1E4BJX5mWYbtXdMzwiQxnPi4DJoosxsR88VPE2kFaVExyW2e9LJsDbrbf5BbvK3TMEUcCg6n",
  "key11": "5kWtPoXyqio7gvkQ8bs3PEcPbgiBMFakLHo5tqw3AHqRJ8m7sCAVgK8NJJtud4b8gfSH7zth83Rfeb6EihYbmP5H",
  "key12": "5ky7fnp3movuRC6x179yWjf7wTeRuW66ypFu1DKDWzbk652E6PFN5yQ2kAVNMyitJUzjcpLyvmSCcsvwHJtwW6cV",
  "key13": "5xJPtxVW3HWoaHEHv7YjAbDnYvYqLwGRju6rrwMmPvDKw6Q77hzoHhEz3HKshcNY1Dm1D8qAZq8huQ33XKPK8jqV",
  "key14": "xD1zMh2dJrtb9uZmPtrrpNHo2DPMJYS5cNBhabWM155UmudnHZKMZKKnY66fvFZ5qfq9NtbUKjZFvPZSx9PDa6Q",
  "key15": "C2DErNPHNxfey1Be6E3B8NAsU5GsTrHuZw76joeNGNvrK6M6m5eXE7HNepSwBszyjXssmsUavedYaWnDDKXLHaL",
  "key16": "3Vy6g8jRh36zqweScJhZQrSb93EWkcwZ1d5VDRZhinh4Y9oE678Cjm9yN1m1FwX1GUDMg7eJCV1GvqVwxrBp5Nk1",
  "key17": "517DFUGDa5mFxrxvGspXx3fTyk8fg9v6bj9Vdtm6jFtydFAck4JRHoy9HHR3pZuy9LJacFKxP2eZ1Zbar5P1Dxkn",
  "key18": "3Wsfd8GVfQDh6GnvtgKi2uMs5eyjFjBeJduVoh8iR6Fir9M3kEqiC917J49tndXvek5amAKSfo9CWyK8DSCrX5Xa",
  "key19": "C3rjx3MSgp1KAh6aowQZQ5hJBAVVfuYRTN1hEW7n9fdrcWh5zwHrMnVFZTCgVnKMpd3LnhsgE3GrM2hfiCCvr5A",
  "key20": "EUaTLGYo2HEaQ2cdAjxPBugu8rq4xm7QKKxWy1KhzENbEWp7rFrBU9Nc4BHeXFixwHUanE6uJmgMP3G1SSUWsJw",
  "key21": "2LCekr1RbccF4nwWqi5zWqRh3EEUtPmTg1eMZaA1AFxTZG2DJfdvS1anQbxPJQvcci3TDPesgdQ9aT8BrC4o1YTF",
  "key22": "5Dh58p4sdzbM6R8XFXKJxYvkT8LMU8rkGK3pmuN7LMtKRWCg826M1Yz8pkTPiB4MLZZhztZ4mtkLdQ9rC8GbdSvo",
  "key23": "2teVHENogfNZoP8nU4i1J9pYwBb2Xwp14JptaenQ2eQBbsYC8674G59u1CTtyRcNMj3sTXEWqHZiLp8ADP6L5NsS",
  "key24": "KFp7xnTLBNByBmxFUuQxFoshzb3Amc3Jf7gHnwAeiW11Sx1eZpnj17qLva6BNoqd8Bo21Sb1tmAzMzwTdaTNmDR",
  "key25": "22HQHSjjLAdbh6zDkp3EFnibeKR3EwWydvXZqC99xtwq9Lptt6bruKFhJ3hf9jJfHJVejSNckY6Hr13jsH3BcfKc",
  "key26": "GuZAeAKDMbYEVRSVgiKtMSNY3dQDHupWSzxTT7kFyKQtkK8znbTFa3cKwRy59vGLeaHYrQuKSrPPaM66Lzn2N6x",
  "key27": "4Kx4kZ9e2wBfwajhXg5XXynSa1FzbZuYoyDj1u4qZUnBjFNFVS3r29CbbRQHK7jkyxfEXKMun4z2jpqhhFk2YS1j",
  "key28": "24Dc8sD1yY35bcYnKuEe3Lirb6AZYQMXVZznwU9ESdPwyXsJs99S39pcQYBZeyJcSQes6mDrVQx6EQkJxbZNemSJ",
  "key29": "4MzBZhHtUw1YYLZp2nspiW8k9Le1oqKUB1ih8iK72TzToeXeksNoQaTi3csfom473Mqe1QnPNUZNpHC13TV4Y84Z",
  "key30": "SGZ1XLkmkzHa1NTNqrDk5TVAdyQgRwatwn4aFjFWHUt65FxoGscXuzfaUTPBMmfPciieh75Q3qJVfkH19VuJZCp",
  "key31": "3NJypXtDANb7uqu51GFs5QpW12cz2r5Aj4Nws286R5g4j7U7o6tJWzXvCqjrc5qjwajiAF8fqMj1t5972C3TSs69",
  "key32": "5ht3Nest8ePFYijPfgY9Cam1sz7FuDrwVuZMzSJsj7URuWrJbAtvYDBsMPTrUtsveRoMXAq9nGnvVLRvAhxXoZHb",
  "key33": "51sqwrLKZ8uFqtuioGMLHvovwcYLAJkFWGHPGVRHK1TFc7cPvv5cVZJfPwyEtVQUQnudQfkFY42P9JJpwWwY1MaT",
  "key34": "2yuSNSm9V9Ny3XDBBWb5kFTHjQEr9TxUfBWPZbamhEcr6tiPRgfWijqshNckvvHxtPVgwBVua7L7fCf7Fx2qGubt",
  "key35": "46cQ1JjG5ZVYAoxZGgeo4ZE6Mj2fMTyzr5pkVmS5sDbgzpaNAVCVWhCps2g8CgqhxvVhJvsbGq3xpM67kgCzSfu5",
  "key36": "4QSMUtAAsdLpunwAsVNcvVDhbja72Lso9UBFo2dVhkvoif65XGYM3Jv8GV2iPuiyD5pQn8tP69WaModWbRWsiio8",
  "key37": "3GPoeAU7bBW6RdSoDpSFoYC949r27nzpm1hKhEqgPQbLPr3xsXuy3zUb4VRs2CJ6MZSTxpcuoUMjwjxB7i4Cdh2r",
  "key38": "61nanWXtfUM8njY5AnqnUuvzUuatMGfytvWMcVuqASY11G6burNsxoj3TuoAGEcjCEJgLhakV7qae66EY27e8xmy",
  "key39": "NeP5KoZXvtubkx6Z9UK21uU1kPsSjXgLHbTLtUsd1Q969A8prHaXCSQ3Zb6M7d5jvcZxYNjd7a7aVFyx6SxxkW6",
  "key40": "2q5EbDjhNQvw9ZKWJ7bEZhBLy6uF1JPULRzrV3KnByvDAp1TtUsduUVwmemszdpEtgevwjSZ3NgPpBH2bKvka6Rf",
  "key41": "2yi1Vb2T3acdkPrw5hGFuNL8GCCHvGNrh3uuXHyMsE9jSyS1RRqtSeib3CjCvBaGvEX43BH6ppsBhEBbpVGH7eCX",
  "key42": "5uHtw3if5DkdGtw5rx4cYLENVf2kH58oK3nJ2hXEUoN2Bat4nUmBKewAURmYibpmKSEF7SYSXKE5ULirB6suE2nb",
  "key43": "4iqc3rFuxhUBDkhb4JCJxhPm4EWAh3eYopyZJnZ1y9W76jyNDcP39gsfhM6iuAiwzsMcvww9Z56sNjL6WKymmtcG",
  "key44": "4Wbs9E5JQVLKyc4Qib6UC8vwjMdgvXjwPmqHyTm9gi6nqwgjMibg7aGFrFyk7yRq1Q6xRyC6sptJnzyhbLmAmfw3",
  "key45": "28dDudhU4SnMCFpoocQ8LdYx9m7uJBpw4yqpVeAmCEkW5Z4hcUR59ZmCwbwK1zGy9zTgyGWxZ9rxiJBFtgLR4XZD",
  "key46": "5xnG7qVQa3kKRSvc6Np5mprJfoihGq8eZQ4T3nhN787AqVkFAJUHw73oKz4xXBg9WsyUn22e6LqEThUK1qr1SAsR",
  "key47": "5aNkzW64hadSYkVLtL15DhBR56g6qUyTYLx4H1Nt5egqgttrDenPd1fsUeXkuJMwDTKgmqkpsAJyK6MjqiBBka78",
  "key48": "BDx4ZyW5qkrCcCCktun9vt7KziHn3SxqcrFZ1JsWaY51DPTTB7vRK2kP4tp2EfqS6UBWfMUuXaaRm1jp3wLwba6",
  "key49": "4RKjqeFxFk3JS6XP5Sduz9kvj98AaP9xDwmDz16hrzo2aq5DCeJQS9yQR3xmbSKWBxwhrg4dBxpwuyePbe44yU3E"
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
