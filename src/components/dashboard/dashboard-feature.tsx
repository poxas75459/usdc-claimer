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
    "4FYmPRTkcxLdDpjxaR2H5T2gVjaj5hb4uU5odVoK9yNr4VofWJcYowhEuLP9Tum944LxDePuVPa7TABrsV12XLgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ziVTHUgN51wtphGjdgzjSTRf1Jwjj9y9zP7sFCxA4qXzui7WMxqugSssc1fCDCR3oBcngZ1Ggp4gBHuBGNXxMFm",
  "key1": "64sKwYsKg7tLSZRVW1LrVwg8qSgBUS4SPB59hZURXreJSSmDjhzqGP9cCEZrteidZ7SvxrrThQ1FVH97mY1zqf66",
  "key2": "4M73uLRpALSqJjG7SLH7cv128BX1VGw1JyZtS2mXjnqPcqAYdF136LLpGGVESvuRVBYX1teNSmoAnEENNpFtz1w7",
  "key3": "5DEzqbHpZ9VNktALp6J2BSDqgMxuhKUF7pQgaYDvh6C73mwBtqzFqhjTJqxABu52sknssCDtkb9FtnYYDJSs2ouh",
  "key4": "21WVkDtQGXz7L3GzvC3VzH7UeZ7RFPcMK7tdis2jqNxdwoEBzGmBvv6cYsKEDxmmo9UkASo91gDDhzAZd5XG8EhW",
  "key5": "4KgA32RsvuC6Vcr2rryD5nqiXNWnsGL59zDRNhaXtBeW1z5rPDVNyQx7mL6d8SonifoLZY6wW2iRWmvzcwVSjxXt",
  "key6": "38tSt1JT1X4SndZAcUoZSho3jf1cYkJ3pbXH2qMca1Pv5ipe7fsRHhS6ph63RvK9wC316F6RYGEmYLLcmfeWS8gF",
  "key7": "3jXe1GtoEtZ9sJ35pwbZUicQPvrSk51vekMbBxH44ijvBicuL8qdJMhbyRLhpmoiK5tid1jQVEDGW4UBXVgSwe4M",
  "key8": "4etHAB2UmDCHp7ZpWFuSEKxCaaJg9YkCtmrYcim5G3RpSWAEHeY59dUnEwrmjFMn8YtuzHnrCNkA5HKFMkdsZhoJ",
  "key9": "dqM6KM53eKrstyG32AV9epYPgDNe1eBdHbrkmSRfrENjCver5X4GdBTBvFanSxaLex8Rt6NAN8xstNAvMBNcw7x",
  "key10": "DsPWbqqkoLYoLbfSW9r3koYraXmxV1Uq1v5pXfJwnRuS1zBWGmc78GH4wKXF8VUcECYVRHj4JpMuhTrqk4PgNZT",
  "key11": "3gEYzvZyVZ67F7W7ET8V3EfXs59MXymAaaDsLvhhyNzhynBoCC8dhLA4FU7UkN7YXZPR1K1akBNJcN5QQW7dGLAL",
  "key12": "Xh9rgnqJFDFDmkPB9bdMnsEMxqJmsYRy6xiyAsDJJjC3ANSJqXs8pX93gXWf7F9KFrE4asfza2oRzcvLCnqwupq",
  "key13": "5urQZYfrQqeu6D8tj6gZniPyTrdqkNmK9YqEt7EPCBbpZ7A4aazozvPrqyS9WFP5DtcuqseQXv7o8Y3uAMYfAMek",
  "key14": "32Hq89DvTGR1xw7NRL5bKQjZLkbawM6e9F57xqfSqk92C1RhiVJSWh768J5cUgerNHKuWgzze58YjgswYmgVt8U4",
  "key15": "4WLTYuP2YG9PK5XFy5Kj92YHCw1hGqo5e4hXLrVy4Tz3NFowjij1DKUYVQkgdodQiXxmNjz5FLcY4TUGJp8zAeqp",
  "key16": "3oiVdtkSAoF7txnZ3ZNYiyvErHEtuK5jQ9jHnn7izZUDShVHRPyQQNL2HLoXHQBSTWeeYRLAAaGf3AeghKPv2ai1",
  "key17": "3JvXEMmw8Sn17CoqVQQh9nBL8o4amgW3mo1dqKpqWNRrpyce7MYvqMs28ct8qw6mppinQfXrj6pn66HznR3GcQd1",
  "key18": "2rMBDrKt4bmRH83aYbUardPVQCpdXJHrAAtnNfPGMYhavppwzxFapeUkSrTfxH8ZaUNgpcVi7CmZsiVxr3b3Lv7Y",
  "key19": "5evU5jjCdCbRQBpxLeadCEn2JyXwnKsiCtGXLnh2u2jvYuPuk1etnjgaMSxxbE6HdHK2oRZHbEKyhb6RsJJQh94t",
  "key20": "2zSop3coZxCdMKdhAMoUqvLb5DdvbnN4y6Q4sMzMndVaWXJ1Bn2AbtnHrpxf66BPgQvELqb3gYx6uQzXyJqCEAFe",
  "key21": "316kXVkfKpNi7Ni64Gke1o2WNqYn4WvHSRESN34CymQzTPXD6atMvxPNxuWTQaVivWt8D2DSKkjS5aNyJU9JBWAq",
  "key22": "2qcefti1T44w5rKqDxvekKkmSLQzn3R2s7GzWvBhECHEb8UkVXJrusfZWmbowjLCqNYgzEC8ezCcsgDFN3j7qgd4",
  "key23": "2koMywfWbtZ3szhJeHaAc6RKdc7j7pxjdkegW3dSF2RrBsjJhRi3JjgJw6i5PzomXjBhCFmBF9tWut6759R1ddya",
  "key24": "2EacsMcJDAtW7QTtMJgsXTswXaQz63ASwADQ2zwMTw2uoGtvZhfSAMmoBYQ5bhfNFuTpu4nPnWT8Q3hs82sHDcgk",
  "key25": "5b8AaVsntx2PTXfLSBr88VQL6ppvbz8LZpYcCx7ZxGHaNfoc4Hi7Lo5K3MUXnH25TWboQHkeXAwozRRRr5K49ZJi",
  "key26": "5u8ESkNzSjC3jMUh3xtxibWKzQqmcr6nUnZkXXzZdNJrZeREeckigR4a1x5Kco49VHJtSCs8XvtJ1vMJQ38xhqzL",
  "key27": "4wt4FvkwvFTvXFpjMhi4i1kJoKbTsAKZoSgGTzfTt6iHmTZhLsc1khatrqC5ZxeSa1QeYRdJy6uBmMEQrMDzYpmQ",
  "key28": "5UWY2m1JfTcMSgJAaxa5wPC2tRatEF6boz7NtpaBzt3hen91iomgcoUXZLJpeWdaFtYKBnSDgY15dCzpXArf7F1y",
  "key29": "4uzfB9w42rrVimRuDGSHYjNPNPbM5pfEg5uhJyQGsbBV7mkfxeoazuCMEWySvXHbNrkgDuFBoXpLPidTEsN9R6Ns",
  "key30": "3N1vgnCaoFaEadyh1vsHEaWbDqh4F99LZbUPda7NvtfV6Rcp1o2uDyDc72KR996Eg477HZSSaYp1HkCSQKc7Ppb7",
  "key31": "4UwSwYMvaS9wFcyxuVzeRrQ1Sta3yKWjZAfRGMoE6TGr9a3cn5AVLHxnHqgAuBopUpWbLeKztGnoMN2D3TK4dWZv",
  "key32": "EQHBB3BD68rLH33FpQ4MnY43Mvp25PfUzzGD7iDAQAjEZchU1NRffjAgAF8e98uk8xdN2AGCN72x35dB5jU6XSU",
  "key33": "5zKt9P6Zbzw2sNyNWNRLkVKeXooH2kfjuhrhWW9wW1LQnP5ZVbSP1jqJvRvK5GU7sht5BFYM3gRBcpmqXjB2Yney",
  "key34": "bTrBa71HhuwMptjFC5nhv8zaAmy4FEzT2XejwxTfj6NtAEVqbuFdCFSRYmGdNR3u8VCG9t3K92ohqwMU1xAYxjf",
  "key35": "3yQaqjusopP6e4Pmm4VZJez4THWjU8S2eJNG66bBvXc6UzvKZhPUckPZaUcNHt5fCVifRUswRubHz82mnbPLbGTP"
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
