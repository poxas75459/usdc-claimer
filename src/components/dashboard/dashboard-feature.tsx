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
    "5Ec453vxt98neuFeneQ6yh2dbsEpDrQ7DTBqjgiyhC5Xemc9SBRB9VrJqJfXzBJi7rHvqkb2MYe7nVuVFF2Ftib3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UixFuuwcUYa7KL4M5CHFcMBgYmb9zVQDDy9SczSJvm8s2oe663EX1MXejsSpFduECf4nNgMxzHk8DUUhNwj88ma",
  "key1": "43Zae8bJ6TeTvMJZsqUhuXXupRntGC9464szL2Ek6APtzFrjd6xs2q3hSZBn8jjwWMEd5n4BergrpVeRF5x8nBCX",
  "key2": "2PSdG58vLCZA9Pc9WhAcS7yeuYMtVbsttxMh8mYcNTTPbtqX93AiGQt85Z1qVE19Yg5j5HJhaHsM73KRmF7ss523",
  "key3": "46NQwq8gyT4qeZo4touSbMCtURz8TQw7chnPDNTp5nEnBGhp5V7ZeaRHB73CKraVMozXK1oLiKqstEbRrX4f6XnC",
  "key4": "99wgK91feGejxDXEnRa1aPB23qqTwWeaJA7Q1NFu93dHJbVpkgha2QN3Zp4Jo9u5WovdzPnXCRxzSYyujeH2ES6",
  "key5": "5Vyqr2txs1dgx6oBBcuuJtJj96Tfp2RJAJsuR94Jqwf7RkMJuAPr8w1jwRRq1rUQfPMTzvXjWMXskHqsErWffZ9o",
  "key6": "JwbUXxYd8SmUpHtXVNo5H4Eut2gxuSctcJmVbYnt4VqvkiT8nQKUWJ5ZDovFrxrh4ieNq5w8GkSm1eEqhXaCqVz",
  "key7": "58vWyznwhDpxZXk92NUhzRNaMmYZSmPANJeU8QQyCNqVCb3KhMajbsaXGayNHSzCMFidFbUxtNHwhg1N6zrUUr3n",
  "key8": "5LiScoeiKs7etMtakMMm4Sx2gcPn2pF7jYfKfMmNAKPMMSxYuF6FvnU5wSBehjXAoCnAjL2Wy1A6hD6N7BrAZn2N",
  "key9": "A9FvcL68nbes5x4L9S4NjX3JUVUfym135478nRA4JZ3UYrXcVsGozpsKyUSk65MPNY13YfbFqUhC58PbB3QdHfJ",
  "key10": "61A9KMkQ3BxYSHFkt5V1tx8aCcicGU5VX7rgpxfKZVGSN7dpvcQY7wxuX93DM7ucvrTd4tTkHnNSsbdfHo3LsUND",
  "key11": "2Tc7pmD2NSYN1kKgs7S6PRBDpLULSWGGsxgQbV5Ev245iHoGxLMpy56V5yDQSr51jU147LaabhPL6SSuwwvB6RuM",
  "key12": "45k1YvkLhwyCtCD9en1sHBMXB8nyD7XBKHGTM7LoPZJs7UoV993kCkLVmVybwgVcgMT4PXpLFrzvxrmNgmZ9QsHq",
  "key13": "298iGV8g4jmxi3fUewjor61hRGme8145gTWvYPAzVVoqZNzie8LybHuMEwk7zi2pTBrTxJqrexHqFF7XLxRmCgES",
  "key14": "2hL36cpDACJzYNUqzwUBbUQuhWoaHXquinmPS4z3sfxBvWhYpLVvUqTFJa5NNNxteLQbn2qHtGyMBWZ1WjFhmgr5",
  "key15": "29BoJ5s1PwwyQw4f363VVG7pJrg2pg3KFx3QfZLGmF1eeh6Avj3XqAxUVGFsedhRWQ3wkrJpfEMsdJFA9ytTSJfC",
  "key16": "YTUtzxJw2DkZ7cYMe212TYsDF9WngSsSjLX4PCVLeq78yZnf23jLbhxbn1zdSNL6Uo9uP3ejhovfsN7DW1eJLY5",
  "key17": "2mKbm65rtT1qHQ8oc8HmfZrVLV6HhCFK9WmW4P6ppmpbwKjJxVLpsvDMmvYaSomtXHBNTxYxZ6Kc8PTKiSLhpe5X",
  "key18": "3WYZAe4Mk2mWf1TW9CiJGj5ugWHCVhG6Ewk4Pyg4m2ebLfJRkdz5u5hfzPQ5tyfdj9fB2sSuSbsfGmmKTmcQZhJp",
  "key19": "3YvvKTnXM64qoj2QxGHQgq6Gpii9eKeMhGHzQkCh2wFwUg9Z4TPfUzJGyadDghUMAHzdE1KbyvSztqP7zxn37JoT",
  "key20": "2rrMXrELomi4L12CyFSo2H8WcYu7jAMxY8emCJnCCcsJWxNjqLBwQr9pngNF7hAUqKwwjdNc4q7eK4W3jEGGhFvJ",
  "key21": "5hcW7QUMWuXSZ3dZvwNE5nimK17V51wFXhhhfFFbWazYKeUXBQYNUUmY8uikaNK8ZTtm1MP5H3RYz7YsvnEvpX7L",
  "key22": "3f2VwDoCoZ6yU7BzdEWAkr5CdudPBFTgUrVcBQYVW69ZSJ66CHfvvqwSwpiiG5Ev4QCYS69JX8pio5JpxdqQhAhJ",
  "key23": "4v6gBsaTmCyaG5Az8ZxJLotca8SUhoYFrFo2XTuLoCACXxQtniUxHAGEeZEsLWFiwnEfA19w98b8wih88GJAvxQq",
  "key24": "3M55vaKgYnnJCkvYEWXfGnLcZnXeLVM2mB6AiuZff86vPAsJu5BA8GrCLiHjDvVjzJhpX3DYVVXsGr5JxaNbbiWZ",
  "key25": "5Wj7h2zxqS25Txw2bmdAF9MQetdF6fgQSJPYGioWMZDzjEJXA43vj7JXM4W8kQjCSqPVtxSbiupd3Ef2GjsBF8HC",
  "key26": "5ghKHdxv2GkbLvzUiaq9WA5B8vouRCHsJwhnFK7Cj7U2joaV4VfRtfVk2t8F3RrzaB8LiTpw41RcHGBze6w3Ekso",
  "key27": "21fKzmuq9j1p2AaZREgfLik5eayJ6LNow3yEMgVva5jVqJc6T6uV7bCDLfiiNHWCcUBhK9R4aLh5XKnpL5DvJ6Un",
  "key28": "2rf8uSfkquqPXk33ZYa41XXSmgmVWznK1yXDvtxE7V9faEcAiFWiEQaYLsVgboNe6SUnogBe1DjxFeS9us6aKebp",
  "key29": "JrZJxNEaNrG3QUJveGdokz2KUjTMD6dz5T3er4ij8gZJj7FZYtkCCfLCXG8qQXdXUwQaEeJN56bpMmiEUSCCW2P",
  "key30": "dmQivtDxsJ3haw4353cEK3e2EFivCEfTMEzNRp7iUbGz7rK8pYfNXdJvW76tKqFMz35RA3BYZgt511J5fL5KPun",
  "key31": "289ZHTaQa4yh55SqFJ1JdQDc9oyuHLVaK4mL9L6isjFyQ9LAQe55ZWeuThXutHSB8Z5jf2cXxkD6M1ZLeqF65j99",
  "key32": "cZJWEsWYUz9RFBARB5r5AYsCCEetKKz3JK3o4h96yQxPfjCFHoZA9C9q5G5CyiSn6W2ejvrX9rWyX8EwGThqFrz",
  "key33": "3jL1wM6TocAbqM4HNDbYL3uEcPwSo2pYFPmqjotsZg3cFKiXb7MkxBxToff4MnVT9aqsndPAFT7vwj6knrWGibLr",
  "key34": "2xyaDiBQoWaFLoEkFDvUWsWohvqDEYEnpieXdm3CeBP4Bp17MWjnZ3rCQPEHe5tBPgpWseSaekTRfAPLJBDSPUwU",
  "key35": "GcRWDpshxy1robeyRJFUsXKyW8vBk4Ve6SDGGCeFHyD2DJrE2urTCn7Gtm1mZv8uK1RPyXVnRBQXvaPnWFCzAn5",
  "key36": "2aPosfpPy2LhWPSqHTPLxyVbfRSA6gxER3QkcHYKXdySLkHRjEBmf9HgnSuBzYExY6F4yTsZMtbRU6xNtpRLPGDc",
  "key37": "2Y2FCMeCFX8ixrDv4EpGA4HafEUcAtbWrbTS5RvJzf5jXj6yxAxjZ3gttJxih9JrzPYiXwVxf7XWCnyEJJD3TMr5",
  "key38": "yxYvHpWWtzo4Zs42JMUz2NBnLNjTjbgxzefiFAoNJUh2mCq1JXA9wH5zZFxQn3H2CHfGQCB1gWjsw4CDGuep5f3",
  "key39": "8AoWAKtPxUbrJUkdjBSswumAtp3SqizSCW3T2znS7fZ357b18Est53ap18DDJw6xXgGLEx593BXqaZhQtTMRbt9",
  "key40": "3WXvdRjcYHcrdrEwWz6BqdX4LS3GqRV6M7ycWe47Zs4B6N5aTaNJdoxrKKK91NsTVN36hLYKmNx8DrzhE7pAbXic",
  "key41": "kqkC17nthteiWAR6nqzvehTGwwRp6n8sjnLvTJUspQ7edw4QbD7fAghyuXYib9sNRH1kj7VSeaemEnksy44qY4v",
  "key42": "63pMf3aApM11T7uwfHaRX5D5nmZJGYmziqukLZR58yGSGj2uCZ1CfRfpmKC7caqCtGXqhGhShKiXEYofVr37iWWr",
  "key43": "5hK7dUXpeY4VyhqqA1yanHHCoG4gpb67KDnqpt2XG5KNoboHitEktT9aLxuYUKARAHdsEKQAH9vJ9v2WbEu8dEWM"
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
