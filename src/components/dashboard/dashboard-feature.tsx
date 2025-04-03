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
    "3yJTuCTd1cvqzqgPQ8X16qf39P3djeFyC3vbRQ7Phx9NrUY67wysWjPtxSZqR9JvKg5mZp2yMySDszrT2sF8EuHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoPChVYa9ZzaTKQKE2X5xPvvUYQn5ULR5ynZLeKCLCiq6mCEQUT8h91zr64poXQjk5w7bA5iBhr52ZwvEVp3QuY",
  "key1": "3D4TmbSxsc7F5wgyFZh1BvXw1GhL6JydsTfA3ek1R7Cq6DLGYMyvAT7gZ7HXw8VkY9cwV9QnRJAaTJt5rg8vifmU",
  "key2": "2MAQ62UxEwHkXmQQGfHJhshiTHBhRmVTvUcXHrQu6jgzmNK8sk6xDzH5yZ2LuPMfRZuWyJ9LoW6H3AbMMx26XrtA",
  "key3": "3GokciCfbss7PdRFxKCr9oeUawh9SYuVNCwmy3e1yTpX8fMEHnx4UMxyKpjHuQkSsBkbraSvhHZChMGkoLbSvMkx",
  "key4": "43RFknQNT2duznyMBgxonL3JN1rz68tWADQdniFfD95FobAQWkrmpVM5ycdVP3K8z69TWLBY2BdwUbY6dijUupGX",
  "key5": "261sKZLQt6hEywQr4EgjrCVU6hv9nFQsuro6wfYcKmG8Tp3tSobH8gY5MA1C4Sk35Pn9ykzfqatbcoduLtoQami8",
  "key6": "oEXVx73c2vpJ714p1x1rFMQEBHhbK7sJTu6tauvtfvC4F11EXXrVMA8TQeGRGFv83XxGAbKv4iyNvLPUirjFA5Q",
  "key7": "4srkNCmWS2AqCX3FguzEp7kNuNMY8KGSeL4gfZFU6aEMjpZ8RnmLLwfZBtLPzJRG8948biUKktJBypWRRenNN1RR",
  "key8": "4JQbodKJL4UcmygeLpcLLduzpX3hxJUgwFxi1YAF8ENPd8gKVthNpNiM9p9kGhUaYdJUDXoPJ46MqciZ6qwcRKzZ",
  "key9": "28sGdx1MPRWbn8Tb4vKcdfwowJ8zM7K2FNwTU8YmvQaNq8qHM63WHCZiCfv5WcC2nkseCQy6QqTEAXRaSphYLdHb",
  "key10": "46uSDq9M7R9eH4hLZKMcQC5GmdSYMsnZchPUt3zs3FxoAM3wzkBVYC3uibNm9bc8sCzcnrqGWgTJpMUTv5H6JBtb",
  "key11": "71p8LhZjSNUigShxjMu5t748Q1Tb1TYrPYHv2m7kbWqJWZHbhcDhqQKdetWV75yQQsjCZdBAhtCW8ZyxcgfpmTP",
  "key12": "59pSr3eLkyhexfKgiZUNBGtn8mX8kiHpcPtuFjmdptZuJQwvuGBYVUTfNTDqdK51xi9TEQLht5ddaHhG288263xQ",
  "key13": "458Ff74HQZy4qzzZnFp6LyAYguCQ51WdiwEqPMsBRjqSRPLkqjkbx8236PMaHqoYATaRrwHAjo2WKFcNqpYxyCfb",
  "key14": "45RGXn4Awv5bgcYVgCRy6W39HGTEp8UAhsdgudwnJujrrYCEgZ1GPw2Zde7gosMajowjbBDGiLmfqdi1cEt78ma7",
  "key15": "5Bu3A6GiXrN4dj1sUwFu64EEFeik1CMUUnL7L1wtqWaJgnvBGhHvvVNXx12AR2FbvYrJ6D7M99jaLWHdjLC3MrBG",
  "key16": "4At7kuJgbUr2s4ia2fEgezqGfT4fVUGhJ93fK5kn85MwxZbMnUniVsf82knmWUJKdkmNKFtSp2UupjquV5MDzW9x",
  "key17": "53ThksBVWPqbZM7Y7GJpewbgLNn5Jz8Fw3T9Azrg8kdyKMKMiy3qaW7eNAHcFGQiVzRPNwwqtWd4qeyysr4r2mpu",
  "key18": "5hVXhtMPd86qUcnav4j6udADhdvS9xHzroCkJ2tKguf4czsNPhtwb42PrnD5aq9QAU8Dz72SsdWP7RqJo3zQ5tcW",
  "key19": "xCCS1VEGJJ7677zt121XDD72H6tC6D2AsMLJ79icUN1j91fyMV1pxqwy5rqphdzmb9HWbnUs9ViELXpGTTahii6",
  "key20": "5NEgXuCzWZ4mF2XYatWnQszywfpLBCSim5TELDBnFTHjdKntTZ9SrHj4NTtvQcB3yZvchPcP5VyJwgPHJc9sDEH8",
  "key21": "WeuJShwXCyCNtdCW5kJrJPVL9B43oWNRWQajhSsutEWp6jtuRgf6ZRfr9kFxQH9u2pYFW9ZvVSsS4W161prgFCF",
  "key22": "2kKWNAzSaJb3YE4oGrEax6NthMzqUBeJat6E2ttMRc7BU9PLVf4GjbjU8bzkpvyZvoWmdesvzJW8q6SRu7iZ3diu",
  "key23": "3yFbH3M7XE23iiTqYaaVbRayC5gX9WHGrVVg35vPAEKxaizFheBH4JhG7dfyF4AfpW32SbcS9rK66Uhs5QKgvntD",
  "key24": "3Jm3YM2KreFbEMM5XbJYZJrTRudHg2vVYZH3xd8mZBaUiyrRyoQHJW4sVvj8nA1BJi3f1SKRcYN6pKNkAk2uzDQ9",
  "key25": "8z5PpdxeGSotpZXQp1Jxmo1jaTdZ8FXiE3ukAFzEbgZPE6EZ4LzuNXAY46Kk1mu718oZZ2xhoXNDVPQNat3621d",
  "key26": "3y8ABYdbNvKgxx1pDaKbq6ehJf4vazxEdoJy8Syz7rPNfjSSKFQAfxQFUQKYxLdwfsaLkosbeLJR7XRRFYKkxanK",
  "key27": "4YiMRXFe6WPmh4cJjLooye1TvUoVgmHRfYu3tc682JtYo381gZqZUaGnxWSs1rPxBdETRvtoJG4iNRLznLf3AyCA",
  "key28": "2c9y99ktbcmYW4AJhBMNnmCQ7KvRirzqit3vn9SuvEtiRu9LBq37kfUz5WHjG7XdPUXaUQfJt6iXS5oKPtNmaxJ6",
  "key29": "3LvKJMp9SEkxFXJwanj65YD9faq7LwsWuAy23bBWjvQda3MVyfrpTDaUhXvmoCf8qEvJ3S3i7seZDrMfwghCHFfx",
  "key30": "3c1jJAJU8aiwUG74EXXaSvLF5DmTo4tRfzZz2ntkA9H4yw4wm98Vpi1zL1htcnPFE7rcFttKw7DqsEUF5qpTJGFR",
  "key31": "2WvC1pvafgRXL82u1esXoBUNYQv1XEd8T6rDjcb87j8dYYvdyqgqJrUsWgzV96TBi1FND9i42qZkrmJdaE242i9f",
  "key32": "5ZVbEsZHM2wD9BtaJek6t9YqE7TzAGULoRfkGBc7mSnKYXBouPqKnv75sYp5p77EzynxSA3dJenzvrA96NMXBFSp",
  "key33": "ezYMErw469Z5z9XPGXDpwDpBxPY3NX1yfux5H9L1kkqzw81MMAqz8wgSjWLoFsozSzqB99LQBSSrfHx5tmT91YZ",
  "key34": "Fw2bza2TxNkfuvsHAbLwPmYhD8egm5Sr3jUDpizp3v2UJ8JfvS5dCDA3DtDEt4Z3q3gmCnbVxPimDdxQ9QWWW7X",
  "key35": "2fto3moVVNvWNMGWgCkNaxG5MukxhFWscz4yTyJUchiCMFjDZWvwmd8wHTnk8APmU8EtVCNUKXTk8E5dMebLFdJG",
  "key36": "mbBHApCbDhbV5ej1oyMXEhoxs444LQ9gtFoF247TowtS9U1sWHQgcQvP3Nsz8RxpPuwtLpV3WaxCLRbhZuZmitZ",
  "key37": "3CQGAk2mC2oJGbrDaaib9kku9Yd2hahf4ieYaH3QoYdpgScDUdvWeSr9NU89RfC1fbiU3maiiBaT1ZPue9ZNtUVg",
  "key38": "22LxkhebBnCamP64GNne6BXZ9mEvdCWxHJnRyauPZjWxo299SHdf8sYeVqdyWPMBQNtSxQe69Tj9bFJ6h2MJFTH9",
  "key39": "4vJtkn4k6VXYUSLXHAiG9f2g3Ys14p5xzYVzzYtrSqZTTqPXTbNAmencc6gHtJ7gW1HFvvrKP5dcC33gSA6ih5Vc",
  "key40": "36HaPFNxaVDbnDjXwouaB7oTs2n64416DtmG9dswsXy7yiyYp53zycAuAwEGb5rWYgDnHzL1W57nGZjPDNUdMrCm",
  "key41": "4S7cme9zsQBRjet74MnxRDZHXrx1GKRv6JutVXjnf4eRZx7XQbNPBCDAogFEppvifWbkuUSEtFC6wEwmk57P3mnd",
  "key42": "2GBR6J5WSxZRSHgpC39zsEGERtpn5hvP2tN6F9yhyov3tQSsk2UkgP2VZ3xyjEDbtnnQR398gB8vMKA1jHCWGdWJ",
  "key43": "djVwsSrtJAm67EGWnd5NCmkAF4H42j1JdEHbZQDt32HTbuyGvfCdRGRpv4e3o6ZhjnRcDqAyhfni74y8Knc9BuQ",
  "key44": "3pRNMtTmgFzbsce12ZsireMtByRx2TZCHiYHvJG277Gfy4oFDGpbceikgakcENf1NxU39UreYTgx944MRnkYUUoU",
  "key45": "4sHQ4Yhegu4EX5Yx49A5LcdZhoxVZGmCCwJez69RKDrts7JiYwGb2HAfZZWGWrY6MAXhbVzhEn2afkfGhtazQnzU",
  "key46": "4CPbZ4k9MkELG53mLm34SXpuFFQL7DQLArYeV2W8T1nyGbBX5MqFKiczrPrJwRbjhZgmjcGj1CGMgUJi1B1HsEkh",
  "key47": "28SLMwSAmFXUGQoi5FrMXeJsBh73Fk6vpnLgMXiGMiXdXabniYz11k2Lyvxe6rSZU6LUuHGzJKACmncMHXE4UNad",
  "key48": "2UXxeN9mgAHrx4rga863pCh7hcsCx35KBcDULC6qmVBrQCphW2P2yAkxJ3xFjzNUgJsX74Ycb8oAQX1KNr635goU"
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
