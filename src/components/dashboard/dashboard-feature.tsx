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
    "3BDuYQqaomjMpHZEqYVgXnzSr3sbkS43WnCNGSNBnSitnVw3wkYzWKqpoLPCVhobRL4sWTFWpvUzmQje7vUqw323"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RLHfjkRcfJTDLCTtSL18kknxaQmU15hB2juTVmw6HnAbi87QE7NHktLhT3mFx8DC5Z9oip9CpQYAfHnM9bgJjwD",
  "key1": "4GiiXCKipvGqQs5zni4TBU4tAfaXRvoSKCzTu6gh1dc2Zb48kjknJDoc1NjYgibqPj8PFZbfcDs99qE79hGo57KY",
  "key2": "3Ss4AAyLQVnYeDz1Zxxh8vBVMQ1cqZwdRh1mZEEZYKKmGGYjo1RN4yamS6tccVM3f2VkLqJafGvCnyAcc3vgPvzG",
  "key3": "2M1UtvXaDLDpTRsokCDwwxpyQRHgbvaArZ8soAt3rTJkcAjdo2sNvqinKLRVYCCn7BnsSCGAmUcvm8riDY6BBTcZ",
  "key4": "42DR4DALfNwwR3hz79VkWgehFEuQn3PmNKnarQpggLmbrE5e4pM2NBsXMau4E5Rc2foSxpY9kezk7hapVo8NNMUu",
  "key5": "5WAtrKPgMoZiUyNPjGqacetZ8T94Rq5tKmrQawKKvsScmd7sRjv4Xf2ofWADRKP1MT3xjVTK5ApvGh7fjHvwLUHo",
  "key6": "E4G7CB5icANeZuk1g1Da2cbKM1MxYiSxa6srEW7KCnYiPzwWZj3W1af9oDp42CpU2imUCDPEFkQFzsZ5LPwbs3W",
  "key7": "3yMkcJXmC32QnapqwRymSd3zDm3b2UaibujGvt5ddBg2iR6zXFUq88rZatA3AjxyE4pi7wzRT54AntrUmBCNWpva",
  "key8": "4PjbYF3nwkqshubmnDD2sWHtQ3bPBrkUbuxL811kHN6D7c472WfKhZpKVSujkut7cJgXfEoBbnFfUaHK96pbqW8r",
  "key9": "4bbZn4TzKUzpdgboXtpaGHurGREUTgkLXQ8X8QNPZZFLzXXifdxSu9b8CMhGMk3gDvWuUrtJSHHA3e8mpbDiNU4r",
  "key10": "3wqpVVFf6nANurLV7ctTHJs6m4ASZY9MbTRTSs5a7ae8mPWUDkUXgYtHeVJR1pe3ZsfxaU62GCriBCmRNnFCcvEJ",
  "key11": "59cNA66fg7dzbtxBKsPJVXr5UwPKiNC4VPJeMrdowipgBDYDPSjqAe7WnQ65fpDCBawGFxBAnuohBwuVmw2rEbyy",
  "key12": "56bd3xhoGADvsbX2bRmyLEQS9axsfBuxmq5WdNYtgJuadeAeuQR1jFYPiNyTuDNCVQywVbDWuDy4o6MgdwPqRRcw",
  "key13": "FnCH71uAoAavNJ5S2tmhzpbjAw4hrfWXGxrcd89ZkRQBkhokf4Mm3Y9m4UZ6vg2bUgffjjHEZdPcxvgoarT6mo4",
  "key14": "4s6V2DgNYXjFw7amuhTZFNRJ5XyXuMECaBdZYv1k9DT6s7B18Ux9S1QgDTwfu4wRezHwSL3naerNWtj15UgxkYSe",
  "key15": "4aHR6JKH6kgpnpk6RevrCDP5kmg5oZwu2gU4xSwMu8Di9wsmgsQicnnfLbnbvwgQeTvjKHREtqScFACHWVD7G6iU",
  "key16": "56nTQTWzwDSRbZHELBUpHBGP9oXnWPeMjghMCFGudAmgy6t874YXDsp9gaY1MpDzpH6BQ45XKaU34ycmC488MFH8",
  "key17": "3Ua7g7zU5aVbcxMe1BHbjFmv5ZUWgjMDffgaG8a9gvi7ReZqbPdFU5wUpnD2z8hwehsSjYVyzTmVhpKfDyahwB8t",
  "key18": "5Y8KfrNgG7N7kAKd1GPKwVjBenZ55CCpuTT4pumXA6gyGgiaeJhEf9pEG7RqEANfM2W3GMyYipaKhmByJGFxLXdZ",
  "key19": "65mM3ZieeKLtHxaFLS9rDcGAntZZj3KgJezuerUMB7ybZudXGu1QhpsugCrLucNDV62LZoAjsb13HbqTEhtf2RzA",
  "key20": "1ohNf5TwCC5VAkW2f3iXJ9e3L6meE9TejVnEzMNNNDkY8KXoHW1F9WC3hbgmdAay3GZWdebaSS1Q8aknifMSXM5",
  "key21": "29p2US9kMFwTAeEh3LWEmAaz1WdczVeCW3wothEpbyJt3vn6EEQ4i9sotC1y5wLe2BTdvxZV952fa4F9NhWuVR4b",
  "key22": "9mXoUSK7HWQAbEz6HtzHuPw2p9EeYAQ1WHCj9YpTHEdWCEKAMtHo4H3pq4XaFFxm6oswksQo4QgzCCHDuhxRqKW",
  "key23": "3MTEByhNR9f4io6poxb4sbzksbmF5iEK8wGBMitTmG5r7rRV2yGQkejkxDotxKvbrMyWDK1wktYCjG8W23xyiG9F",
  "key24": "43eZ3zrG9fv1SXd6p4RoNP74zgum8SSQKMLYLSnw8FSpxD43mpJ52go5CE1wHrbqgUFSp3Fsbb8EMJN2NHsDp31i",
  "key25": "Fpip1QhDBa47G16aZdYZkr7Nq4VNa64rczqpZP6TjjBkiTrWgnRg8nqcfcxjcCrVJv2RgHftKY96FC7WNsjVXpD",
  "key26": "5RLGKc56tS3prNrSUj8d35iZrj5AoV16BUebkMf5k96z6hTh5cn9EcQVjs22s3hxMSwpuQ81LxnVyy4Fw6AsXTSZ",
  "key27": "4VaBS3gWQ2UBhZvADgWitm2mw4RLtsTfZ2KyfB6E8ehpgPJPBrcqBseckyDVbp52QwVeWEqFD73XNcmu8MMXLNxE",
  "key28": "2u1cGds8oiGdg3cZC2YefJKRpGA9m47fFsDykewxTiPSNcJKsixL1Etkrzkz9T1ptJqHyCprmMcZubkGjk33XewQ",
  "key29": "UnD18otFJ7JdeRNRGiUmQ39PKUFTVcuLA3maFH9jD8KjvJntt7eCa3haW8eJhvnU7HmhAM1e4ZA5oFUSzrEEvAe",
  "key30": "3u4yRUvxNseoEBr5sZFVKQxPtMg6XfwycHCoC754kHFZN1oK4jpbMJmjW45AwBaFKxfBWb3UmXjxT652NiMPb66h",
  "key31": "34pagEfLoSm7pXo4Q96JNasg6yAW4w25XRMWCCgndUC2Dd8hXTfhhSbxZ8hJmcL46KFCYhE6Q192d4oJZSGP1YKc",
  "key32": "NHP3cFzUKtUD1quEfGwVeofPRedQeAu3BTFr42vmQoZP3kmhTZCNJbVChgNhYRmMsLzSeDDDRCtQ4Z5CiVBgRpn",
  "key33": "4gGfvyKavbZYHSGrSPEX412x8WWkox59GrzK3eCsTxsF822mkdNmuur2s5MuMRNNW9pP1dSuqfkKvEPpRXsStvgK"
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
