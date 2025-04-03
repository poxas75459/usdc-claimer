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
    "5QGboNU6wLcxx6NZJvJuhfhHrpTxX4QYTAtM3EmA3HQ5n8B2mY2jaVcJWrqK1jwGZkTaceRbeEPuBwHuAPHHSgrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPgD5nN9SFzdKn9PnytxiBZoeRUkwzXvxaZadQJe9oRNvYyjygYVAdeBXEpfruPUVoyko5hMGL9CDvHsHCskyea",
  "key1": "5WvA3cNz95eoXkcHYZUqNbNAzZEoYBLXx9wvF36GgX5xFs561wLTjvWN13USA7XPZacDLeZMBqAHzzpe6yzBuMEp",
  "key2": "3dGZVEKv1p4t7RjoF36VoEnYNDZ3CSE4ycazXRkDCzLK4RWWZKicmRy61JYJSgp57rwNsWK5f9DtZ9oRvP7hT5n8",
  "key3": "2WuTaYbPRjcQsmdZ1Twad2gBWPudFoFiF3GkCjF3KJuRVVKGvYVqVyJbuETmAsPfLkp2FZLFh4SKeiZc8hHWftvT",
  "key4": "5gyM5vyoWMVpR3GUN3RyxSJ2abFyKCuMnVag65LanAEDg5FMGW6YPSH6AtiqE5e43moSMy9xgSx33op7C7UhiWhj",
  "key5": "4tJwUW8HqevWUjQjCDf4KKd2hB9czrdhtCAFtiNHHUQMeiixk1wHpoW9iskCFzr53mJ45kNmy58azrHqdG3zoRSD",
  "key6": "5Smiv3wJEtHDLAtq3YnZBcZ93jj6ygeNWyynwzvqirQwgrBPUXufiZEVAn5LVbAASQ36W1E5LRAsa4yVBRxH5dfr",
  "key7": "41XuL1MiYK1ShnwjJcAkYf9oUrKkF4puBtvKJT98TFK2dZiU3Zi3WmpP8YpfoWBSShy6rhA2vqWgKE8SGUstNGT9",
  "key8": "3Q48fLMGYYovQm44oQ6HvNcQDxpdc2m2HkJQsE46DHcb7eWnGYsrBtuAJt9q3Vwnmfk7iUUezDDZka3cYAvZPqpL",
  "key9": "5AKv2vTPiMRgrwFT4vcmkwLMfSqpE6Qr29wk6hmSQAh2fbEX8EJqNsFrfuszC8HEYiL9w2zCxKbEVkqBLKLjhsLA",
  "key10": "127d15pbFkCxp3fyX5FuzefTAxV1VzFRtzKMLtfi9kjnqiwBqwoqcDDZHDvUYHQtDBykihoSEgBApvGHm9ohQaV",
  "key11": "4Xr9qojvMyKbXcJ2MQ95Kmyn9ESfWFGiYe5SXzjdYYw2LNADnyWiZYNWqiATDxTTCmLtVQ2SQeS9E4xUB3eAWJw4",
  "key12": "rMaemXXNQohWvSqJwB6UqKnNmQyJCQcwoUGSitTFDTjXJhvLzUBkJHLy1ztSCbQqA9xjXcnKa33fgaX417cqPGx",
  "key13": "AXym9j6hATGg9uaPhepfPRAuQcV4EpVCkYug6W8wZmC1rQuPv21PpdvGFzKCVoK53NkSU87KehhfbSoPuFyFoyA",
  "key14": "5yH7B6xUkCvKx3qWSxW75svBUqwANuLWCoWqTiXxqKLhEax4VbddLcdze55crc7WGtrcs54XPxP9Jv54s3wMbW4w",
  "key15": "2pjFL5fhFWjz1aTKvcyG9j2YvnXotoiTxGoekevSV75aEjiYD6TC13Z6FQqiAzRJLGu5YgUonphh5kqpSnPrRTGy",
  "key16": "3hnhxE47ctEo1v44KyfuVjwZc1XbyQBtPZoB65KHfCPfUeHuUbiV1r6UP6gaupJQ6YGSbpwMW1pFBgboSKH9gsJy",
  "key17": "4EXntCCQDJ7nyE2k92N5ZvHxh1QzTC31qFiwd4uwNbi4h5JP4qLeUQC9pscAZbg1JRdmc2PYoMFnozg7bE34GvWs",
  "key18": "3joDrJ9KFcFpMxGopYRtjm4waHDmHZ6LSqEbt1nGP43pob9W1pUR6Z72DWFpCJDYqaNTDwfZMvR7njFAcgNyo3FU",
  "key19": "2RagvYTLLcJeK53ZQMWpZ9gQsELZJvYcQfUavHPY8QLJNfB76LqkbrrAX8dKmbQnoqRAWbfS2NUXrGXzBEYzfo2B",
  "key20": "4ixBCByhME6wW44JwtJW3dKsdiF27CribAChBC2sBtXZCMqosgMuHUTocrxwmajiJMJwrFg9Pek2vDkHbDrnbGzX",
  "key21": "5tdYJCs26Vc6gPhLz7JvWLWHbgPgyZq1MfuvAjGnjxQ4NVCCy9HL6AWbUZTr1xFFePjaxZqrGgnJ2r8X7yJpWKfx",
  "key22": "5EKMKqkGSSq5bKVvtUNhge3WyVQbeH6XYrfnxwNY8JHpupDa22YBYTm7bPAVSc3KoPtf5s7G49tF4noNKpxAs5RC",
  "key23": "xZjVb93z845NA9JR9MnankyGWDevj7o1GVpixys71F4Nv3bhpKsnbeoEfP1rph38b8R5sehczxETyWqSjqkGmVW",
  "key24": "2NDGY3LnBph3nRePcKhKRUFEGkFUyApBKyJVQhqVeB63TwGN8YHdJUihZ3ae4J8AA4QbdXe6UYg1NvdMp2y5AkNJ",
  "key25": "2BiZFqqPUnN123n8TiJNZ31SzietRHLcNbwYDwZkH3oRbzmXWf1SeTvfKWSEJA6b1ssehDzAqKg3Da8S2KQG7hwG",
  "key26": "5qmjv6AXHfV5RsZUcoBiuBYTVMsKq7Fkbj2aazW9sEbhFmwpwk6H3CirtpEd1fwjfrqgQDFhA9Jf17X1mxjqCRf5",
  "key27": "4zwSBokB72d8HCCWrEyCqtem9wDfaVe2aC9zvfCgj6ZogFb3FuwbrEsNbKFeyAiqHQyyQ6iDBjr3uLJ8cQuDiVrk",
  "key28": "5hznrfvZzirKkKmtKn1Rwfrh4JSuj9ahS4tcKZhYkyDyUM6cMnityt2vPb8oeGEHMYpotpg9nYXnEzkhJrEGZVyC",
  "key29": "3HUj4ZoBhmzEbSFP7GsqQeTN4K3yUzEw24xsUA9sG8n2EejC73SnksSaVVvBCY59xBfAPHxzMnXtknc3rsoQ3fi6",
  "key30": "3nbEJkJqwFGrtcJ5dL7GghVuArAPLrsZjfeU5PGvQCFNbPK2ixdmkzPadz99HDfG7C8bcQmfrmqrSpxtm5b63tc2",
  "key31": "3YzaKQ54He5Kt13ncYwQDHA9GPCLqsyvgqk5uCwvt79AJmggYz2PqcrDd75Xc8mYexKbcGjJRJXeosi4re3VdqRu",
  "key32": "gtaxaBdrHKnGoQxtT15hpUrWtFT3icRWCBtBf98KbRBw1HuJUPjKB5PRCGipcV1HPZyAmXpvTGigh9Uk5unwQQD",
  "key33": "5KNY6dgbXLyrJQV3uE7XoKjJeoB9CuVGL54XQztLvNxYg4rf9rpKeJThGT1uzdW15dgYCKJCBq3fzXKQ43Jp6TXM",
  "key34": "2h5vJXkVSFS5r6HGomajZLvE3TFoxAbvV5e7N3tVmDjhC4nmEuTEMGfpNuGN6qyQCeSTDyd4DAyarC9sNcnP9FSg",
  "key35": "4KYifPX3CUxWABbCFgr4NPEwx1HFxvTfzeYTzCspNXZh2VzX2yP93Q15UyxXN4psCNfaH2VxYPnG2mwY61PJhkRG"
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
