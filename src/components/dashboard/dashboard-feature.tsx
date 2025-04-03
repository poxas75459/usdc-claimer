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
    "3CBovFDuZntrgCixbEKY11Q5dA8pfQq3AECRAMEZDLcVAifuCBhseZXjFXzuj4W5rHba8J2Pu59CYaGttENtXSaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hbAcsMNUTphhb7iqtAXQrrW2xiVQMgQtcJmHXD7Ccks9sFjs1gageReYZv35k6WPsSQC1z7FzodPEJeLqdGF6i2",
  "key1": "5TQr5jjCdF7SKqDBhnVnkJusUzpgdoGUAqLZdFBKokEdAjaFM7jtaDAhLDkx2bRFYppuBFxSFNB7WvuXbmc1TVEi",
  "key2": "3tNgDBuTunWSzU5nErGRVQeH8bqTRL1w8qhVYiVuuM2ykMBQ9axFtaSWMVV5jH1QH9qAE7dSBj1xzsTxA4z75RQR",
  "key3": "3aYuoTyj28SeyUwiJyoZPcxqfGDwk9zo5DPXB6RqayydetgBAru6Gz38Yuvxo1qLxyZTXQgukzeNYNqgK1TTJwKq",
  "key4": "3qtwriEmMtwg6EBUnHGaPt5gvGBHV1KxKbtNapeH7x8QvoS3HMZXpDnetLhhavYudLAWHe1B2yRMVThKcVR5WuKe",
  "key5": "5qDejQjddkv8gwLTQ744RDDHkDG3qkFfdnNxnvSZSUxkz5sNBfBgL8aKCsX6wZV7VhxT2ouCxd9fAHZx4gVuE6hd",
  "key6": "4S7kGTaeRdE8VnPzPDPv5YXkBctG13do26EBjDT1HupdNtDLwE5P61Ss4T7ZijAFcx4couJpp5CMbGjmf6Pwe7YR",
  "key7": "56uzoMNjdw4DGRvDipnR4Kz34wLBtSNypacQsGxgW1x1mUq6HpPDm8kB3MVsnB7i1xWEoJQtVBHQMhUxum34i7bb",
  "key8": "5Q8rFmAZKGUbtrk5cSfuNEJhXoGcQjdiFWMF1H5XyhnVqB2GRFMKjGEyA2jUKbB4H4q3GYHwHqpMP1LKvryL9mwV",
  "key9": "9QJpJuEJD31GHXWZnFeTx7Yj56to3nerMkminwZ9wb37mMXxGzJBYR4XbJd2K2wjz8eEH5TyAsGiM4jSYsL6eRw",
  "key10": "Pq8nKgdAEjBQKcVDySfzMki43sGbuVdQVrXXTL8wdr5LhCAv6XeHbRGBaK27FnzvsU4LAiH9MPeL8Gzb4AsbJyJ",
  "key11": "2d4uj1fBGVZwkXBhksDNYiwtKior9dqhBNYhLYY4UoePfki2FZXWr7EpYnJuhqxwfxtwao9eBtgBhA3pnVYKDzH9",
  "key12": "4dLq4Z2cqhU2ZwSytjbEzeuyVoxQNPqeK6pDobLksATHn1md2FGSAY1MjFwfKBQQPxvMuqb7nzbqpFPzS5pUDAWZ",
  "key13": "4cZyomzSE5YEjdzn8GqcU9Ui7NXvVw5B3BjzZDjajk7PKsZ7tPTfBE9UzYkgiAwSd5u1AAL4FKnMYUaZsuoQcByH",
  "key14": "4V4oBqrGCa1ii7EK9wdsqxedLK3GiS59F5wcQUDr8LzFSufFnJGJRGp8VWS7DA362ZTZoUWdSKVWQrUZsgLf6nui",
  "key15": "4urE4YiPRhNBcajQCQoPd2Gi7V4XQhABKvYauYZv9z6WK4EexkS8KZzNpRsEun7DNFvxq82koQrZB5VTfbjFim97",
  "key16": "4RH91nUiwfV6qf7PuE8GrBoV1LBqjMrwRbE3xp9v9CL9VknoTfx7aYqGhHFTpF95N72t35JDd4J9ef9TMUW5mgjn",
  "key17": "5HGj4XnwkrYfpR4Ksz2Y3rPnW5nh2widREYysqADS28HWvBjPTTgJJxQS5KFrywmAmysz8BFMyH35htww98GumEd",
  "key18": "2rLE7VHtRUM2HgCE3yjpVdhS5dF4xKA2T7MCQtwUJhFkWx7jKzcZvhoQ6PEzmtLEdhYmgim95GoEV8PJ66v3MsJu",
  "key19": "67C7vrLSzjYDLh6niAPnqwz7cjKfZQsz5Eq1XH8pebcPjKGyMELWGCwLzRrp9QFFD6QSTpW4zCVnN74dwspW5agr",
  "key20": "2SUGDfLpDfoQAthAuTHDke4aTATWrS5ii51g9VPiAjsvPk5BoeuDWP8d3AZoKKfNR7RkgR2ahbynjy2C8qMqC6Nb",
  "key21": "FLXhYpPZa62exfXzwcf9pNonrQBk2WcHSvE2hiQkm21NA8r8SCw3294Gq9xnMniuq3xWbqkB8pQ9LJ9u5widkHh",
  "key22": "2o7BkVzXwq2r1muCY1seoNszgixhDLKorwHoU45Zb1xE9mXDrRHfiUHn6fQHAx48mUnwqT2axcKrmP9wTfUPSA5",
  "key23": "455kPizMCG18Ui2AnirHu7m7wswxXTaVWyVwJFZUSvieZjnUBiVoc6dtEd5CojcXSCUPAcq3h1hMnmSswMhrEaXE",
  "key24": "2YDT99GgSztpSkv83rZNSzfiXf1JDwqnaTHv9qewwwGgSdB6oRSrpzGHE3ARqH4JnPa9hELskYLLCjSHN9M4ucdz",
  "key25": "2KmUiXmeok9gh8SBFEQzusoUMDiNANNQLXfGqwT4kshBzvJ8BYVTGdszNrz56XPrnhH6gY9VtfmntAMov9qfEvrU",
  "key26": "4G9sUF5mYpxhPX1nRZgPdHKpoe5qTMkHKxpbivWPPm57WchYWGjGNxscoj3ihx2hJREqAzYSabe7XJ9x5eDcTPMJ",
  "key27": "2TY2EAPA4XExzbtzF9HE7yncPTCwnMccjyviaZ9Hod7Xf6Nfi74iciTJMwJvWDra6DVAcK7PaFkopjAmRADDiGYy",
  "key28": "DUD5cDtRqe6XnbnNb2bzE9fHpBoEbff27XFnUyFqtse6ysSaJALjNjsmq9K9JqdqRtYv4Ybr5oH9BACggjjkEEv",
  "key29": "2griAmMn5gDKzfLn2YR3FfNn64QsbieLryWNayBxHTvRpo14wZSGVzFPHDdaXme3Jc31JAx1ofkSzSZ7V7Smmizj",
  "key30": "4ADpNVhQfXSJbWNaDCmEHcvkjenqzH9wFzW7WEQgMvyH8Cwi3zQj41pwK37bVPbeCdiwSzs8AkTCUXpNDhzU7w9j",
  "key31": "4wG8bZJoRMVBCo8RmXLbZZNiaCLLcq95gqp9Tbzkj9Bd8dcSAnEubbMGiQB6y33EVG9vGwvoTUwTbYHGLVBvXZLN",
  "key32": "4Yz2CN2oGFEVYkbzh4TH7VpryutGWpRAr9UZAypacuEeZ3QgbWu8WFMnZgXuHGM4ufXp6GxMKb4NeF4c5X8ecUFN",
  "key33": "3NkPNfEjV1vE3t3wigDyw2edv6PSeEfMKjrP5fRoBuCBxLpnYcurozXG9HfjyvMMwaCY2FDhReTN8GntWW3TZ7B8",
  "key34": "QG71kQ198iXjexJ1EsXqULuHqejD1Hn4LKTtmvyocge5Y3GRwDX65AuFkuGuf9igkuiic13fTfWuUtDiYRwKDGd",
  "key35": "3MQF5FUoEmcwT8H2i8b7WnXpwqHrsy6UCFLvu6hoHDDAqH8drZLLzYhf41sqL1S2Zp44N3yP9zEoCYpDQn64L3k6",
  "key36": "23ZkWY2rEF1DdqYzRJuNCHDiggj4PG1BNPSW2N4LNnTvUK1Gqkn4v9azjBpDGA42nmJYicRQ8APHu3EaoHbB5ds1",
  "key37": "2yi2G68zQDANHRtadAasMe9tkqnVPwLowGcNjUro6YfLd9ptc7KHyGiq4ChNt7sBWAXWQm7tkzRnBG6SgwpZ2hWC",
  "key38": "26UBYoaqpVvkTZpocexnaBuP8JFjCMnpXceb7bSi8VSrgDQ85PNv9vUrwSupXojFGLV2ihepTUPtyxnWTs4Fkrmc",
  "key39": "462zYgygj1UjyzwPp95jPTLbG4ub7h8BuWn2HHv88vERZ9bf2RPvaoVB5eu6xtbcF5yMSWbYEg2gKKZZd6H1xmXA",
  "key40": "oYKa7SLSAgJm5m1SfYzBmdQvCsJ68FkMJWS6pGJ7ufTFnn41TE3mgLND6AquuQoAqSQXgEU8o7uGew11kr9JNrd",
  "key41": "3rCJhU5SQ9SxPeov8gyxtPP3xtPiWnPUu95T5ogzPFYvZZXBkrrEj4qoDU6jXn968BFmn9GquW3ZzZmaEwXcLdDE",
  "key42": "2ejY3yAUCoKQRhuLoXMkgANBFPtnUq579nKQS3kbRXMS52mAj16e22VHHCgxqEEZMUUveuPUvtq432NvrQTGXbe9",
  "key43": "VWv5MZiick1r7Y4Jt57h2ExXNkWZiZFL3w3hRBhp7mL3FWfDTQRtVTL6sp66QBD2FPoyGuhdcxZyFWAdUo69S58",
  "key44": "4vAiGgNhTVmh6RatZPdVsewraXa4rQoDr9jzj8b8VJRnJ5qcm6sdyitYdX9gu3B1mmnAR5Rd1BbwWJVhX2cHduFB",
  "key45": "5NbsyGUuGC3JyTkSXc4EEabFMLk9NQrfmaDbtvgouwcsd2Ha5dx9TdbTUCDbMFMwsj5SPnhFGC1osXbEpW6uuWgQ"
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
