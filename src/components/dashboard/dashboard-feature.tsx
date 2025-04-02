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
    "2WTC1snksHoa1X76RQdnWzXtGeku4SXEiUi7PVknwPdBd3pqEbU6reHhd169JfrWaygwHx3QFnnsfCeBCUsdAoJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPJTqA9qrSB4GxiH4nwS3zvWBiHfApvnt84UvddUQxFWU4JYtwHzkGwKg3G1mDL7gBMVX9FuxjUbHFUSM53UzVU",
  "key1": "4Axi3yY8st3LNKtphC2CsFyXvnnmSbsevBXAE8MXSn1bTDbvNMer6qr9iRRM8iRiebFmB2iWzfAsFAdj8bA9wQsT",
  "key2": "3uNHE7mSFh2HjdQe92iyxiHwLNTTysyZZ2BxsPtusmLrHuxBMzPjHRgW75z9ZvUoxAYifXx5z2qTGZotE49AMbv",
  "key3": "vnphB7B3YCoMcpvJ7Ha4PohVoTgmPF3AM5tZnLk595zZ1Vs924MnxRodTFP8ufg6N8NNCmmR3AtEMa6aeh2eLU1",
  "key4": "5N2BA7jfvF7WFz1YWHSF4Ltj4cfUGApsMtCPvHqTmVVU4YdpobZJBvYdU4gJPWqE5xP8CDp63mK2hjU6m2BD6KWs",
  "key5": "3VQBPNdHVYAbMasxcuGJ6n6Mx57bGVhPfJo4f2ZFZysx4URHUZu1tFiZBAK6cDCmV86Tr2ihWgtd19U3s9o3Qk6M",
  "key6": "63irRtSmAtwwaU9PJp7EC8opQDWzLYeY8jFjb5wihgtcZdWqaHsnoEPF5vUVGrWovHYbQLHWYu5cnHuCzbwpB8S4",
  "key7": "5NKsEXcBEWt9QxcxwshQQiBG3zeJhMeQEFGVFDoXnDQi116xMHa8QG5tTBhPFqN2zJ95uzSsYEbM66i2z583YH9o",
  "key8": "cp6J7oAEk9dMR1sETBG1GD9NtKtMZsEMJbMDXWwqntJgtURBD1Xwee9H35itDXYeHaP5vgf7wEmPu3ti4mHzW1f",
  "key9": "5nMWqM9ez1G4jCxT1PXfZHRs6UhjL5PYV6fqpJsJt5hLviA1cYFXaZX8HMxcb1Soq8NbVWtcezPpB5fNjQ2JsMV4",
  "key10": "48UfM4drmW8hfwEaPhh2fVVFb2CKeE4rcZuVDynrqyi8d3iTH97YyXyKZYKC8HuzQbK6vudtxG8LsG6MZj6y1vcB",
  "key11": "48UAUF8d7yQfjsw5SVxK3okY3v4aXJxuaSrzBb1EAPGZs4AFQ3rTkUDJbGj6vsSesXXaupLX5BJ25YijJeQ2K58u",
  "key12": "3xxKixvQJJA7aoHaxW6BZBUx21puKqiPQyZJW1VH6bGfA9RUzJCCvScUT4diKRxKmTc1nNZLWUVAYxDvYEYXHkAM",
  "key13": "hN9utJi4uGhVdsFbJ4nvUNwb41oNjF2RGMNP6Z6jCQZ5ZXZJF1MaTPmAsNGFARdeGLTjrTC5BgbF56pL9kKnvMz",
  "key14": "3ceRoAA9uXZmXg58HRxoaftfhMwPaVNm4e1ScrPtQMsfNTDQqrgNy5mz9mmqoPa458JA9VvJcsDJd4rXWdiXt99F",
  "key15": "3ezGwqxu3oFRu25HWot3AGeMPHZgDTBD6UWMm2f5sJTcJLCsSdvhHpjfNDUbcCVWM9acAg6UQCwobfBKUL9CprHS",
  "key16": "3qniQyzoz8E2Rke39gKty6AsDb6xjZCWw4bUkws5HFbjVzsmGPPsShZNKLRksdsbu5sx2N882kCP8jY7ozh8xiDU",
  "key17": "4yCgytH6A6CResBJB5RqqgqUrab6aeeaH6YxkP8giJsFwqnxGsBcTeRLiH878g1kVDbsr1ynF7hHNt5u4ADAMz27",
  "key18": "2GrktffcNWqMZQMFjWExoDCcvyv5eW85TA1so3Kr9Q3g3W7eKMrkKszs5mLNkGcdZSNRToFhkeeA2a94kdwcGCGn",
  "key19": "dZ7tNKMZSK7Ahv7AcHNN7uVKa8o59Eb7g85uNAno2M3XuVHXMNT2WLqJPsWh3s87sAiCt5qRUpVEu2PZVv9qi4n",
  "key20": "3rJmvCtXzb42d2NPAKJd2umdQ5oeiwKUMjh6dAAEYkZZ6BqayP1JHdzr8u7NkirESS8HDLjQvryqUZC1Nx8ZVzWx",
  "key21": "2JFizc5tw4FCFyQYt7vwix5CCpuSkYhHuarmupCEA8WYSNcGbqinEEVacTUbTQUeNEm56YYPJrvtYszy2XhWuBtN",
  "key22": "4dsWFZcWbRZxr5r2m1RZzexSvWrPJjYUmZ2sz45q56f5JDcZj5tkrQSGFm4qHPvas1RQeHvQEFDC1HtBqS39gxPe",
  "key23": "2BzwSkNbvt4sQKw7BD5AvGR5rMPY9q59YYGCTyEv4g2vRa7Qm2scc9PGwjTEj7DJv9RiV8Ugu3u8vvvh2bPwrVQ5",
  "key24": "3qZDUPeoA1ZuqRfWxD9UvyUQUA3mEGesRhFyawqimMzFZ41MkLh2FkXaZLZumydvUgKLnS6FAv9oFfSznQGwQm9q",
  "key25": "vQyrjGJjpf4yCnZKr2FLGwzHbUncfJXuHvr8QU2Ny2d6ixkSHicqde87TcHKunAshtbW6zW92dBTCWPE3QaPnGY",
  "key26": "3disYJeDtsSG8orEEYn5WnhfSjNtcsp6wKsT2hMKhqQA5HxMKyV76xjxUfiX2SonmmEh9YAKJc7ghRSdoe7wtEGq"
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
