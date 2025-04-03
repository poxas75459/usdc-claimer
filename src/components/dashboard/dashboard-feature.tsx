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
    "4VZfXVZsfrQkWgePL5sd6zcVYiCSaRaBeEWDK5LbzgrppJMUHhBdN3Vy899XXpJSfxcYz4yTFcgHGj26dSMwYEdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hv4bGwWCrs4TxANMgK2WjHstV4a1e22Gx2d4C2c4DmnJwr2Rq8aqoATBJ5kWtkcMa8XsWBWK6qpmLASiG2wuzdX",
  "key1": "3RRYxBAiK3UtRASEskLe4KPeJ7KT5mokrDCnVDFcK5u2AX25hjwnzFhVaEkDjnBLVBgRvkAPfgUJSKGSvnWPsCPm",
  "key2": "2uirLDeiFw4W7TS8gApJWVcV6R339qypNcgpokN45M1DYu3PidJYZB8NBZQDim1Vbsf7FMX2T3cobQh97xisQ6xK",
  "key3": "37rFw4GxCDT4smCdNqYZMSYrjXXD9syA3sqBuYogsErcTtbnf2zwtcwxHXBsiu11CjfbzpkgaJXg43UAeLFnbNae",
  "key4": "3yjEpwSMb9kpQQo8CuH2GcuCUctPZyRWL5UHEe2fKpnGLnoNRCXrVqNg9SYpRwRnkK494SkM8KmHoKJW3XBRiAAE",
  "key5": "2EMdNSkCFCX2v3BrYZir47ffWfnite1h28kDR99iaAs2627PhLkbbiiMDssPHyjwN96KqCpGyzdBaZyxYxKpEhP9",
  "key6": "4Uh9RN27Rs8gnoy2KarmVnSgRFHWduJwGJoLHycnGVEEsoFNZvL4HhUmjuc8EZVDqwLkyrLJ1qhuoYH61NTrSLeZ",
  "key7": "3BEhrLD34HoAqwQCk9pW3SM6NwWgZRDXcHBpiqVsNygSyCtHpVMJR3so6oKV7W3f6VvRq6jKwc12di1rUGZtzumm",
  "key8": "3uEaPMvtKkJgjNYmcm6Wk1HyBVtpncqaFYjeQCYf3EZBrUQNayMsCCrXN2jp1Vym2gkewbW76NgFMUJhnQVhUWEU",
  "key9": "2qYdvS1KpUCNoR8yZ7Dc48aBfpWzP47oiUovmseFrneo2PnKnSDg4pdLQbdQhHtLhakXucb8Nnj7RTVZVt9soSn6",
  "key10": "2YB472SdXVzRB6NF6TUReh9FJyfw6J9BGCMRmQbr5RGqYjyMBwWY4JfbqaaxVQRcTmteGE7CoZTJ5Qh2gQeNZRC",
  "key11": "rXDqqTPPbq84Hs8GvcYjEKa6juMifqnimXbyY9N8DAMvYStQXFcUnPejfd6kD2jhg5wwutmUsV6bX1aqD1PgQS8",
  "key12": "4MfWzVBmPJa5XDmyYBqEBMDej1PivY49L8UwBV8GxHtMe1wurychsCVsQD8mkiWGshUMdQcYa1ZBmr9du6k1MNgz",
  "key13": "2wYKYza1uwUaX8oovtz6fLjRyDS7nFJPWBd1wxwwznVBwXwXWHJGmCGSgeZqA4jmxy32adWKe1RhrBzCUomCpGjd",
  "key14": "TMJNXCpUTW85CsrzhQH6qLGxDKhuNCsnKzHnQJnZHwqLEQtwj3kn46J5bArynGyVvhh2Zgeao7qssgqX4VPLJzc",
  "key15": "2mSLqkbRS6VajrMRau5r49ymHNSdSK2ryGUHG4C93RF4b2Cu1DcuhW9ke9dCMexXUat9BQJSv3LUM3QPhUEFVxvK",
  "key16": "5mQSSM8VmBk2H8WKEcRLB39orKS2S9zy1LD4zWzArf3bo3FLEp5f24N4zh1zAwQS7DjPtwiXxWp5eCnVz8TZedmq",
  "key17": "5gZvEjNkxLdjBGXPPJ1cK93xWx4S8P92Pqrkb4zHRjZUceicE6RFgP9P72QJ481nbSrBhSfo3nhK6snwRAnPifNG",
  "key18": "5PF8fKq6P7pMGeZUX9X5uzoKrpCgXrMgTY3XEfAFQMkwGqKU52Fsa4nja3qnJ1eQZrbutwx4kvJErfUvNiQ5auZy",
  "key19": "2eWBLD7WhUNuFy9pkeUkk5LM7G96giwpbRcQcge6ucNwHcSW4Ub77gBPLprKkw5PbRBtU83Lxtx6H9ocfQjeZRhH",
  "key20": "3bbquuK9jM7NV7uCJkG7TBxiFENeQMSYHxxrM1uNAZJVdmmoPmgnpmF12cVDdvg6iWb9j7WmgDSdLaAmRnRmtd4B",
  "key21": "4UXHZVFCAxNKJhQ9vCMcERWH1UohUTeDpy38HdosBSBmHNnTKhLhXXiwEGwctnnXKo1kxPRaiqLqzGUWFYUweZSi",
  "key22": "56KYozDSmFVeWkpJkEndCRZDbmvj5GAXcoDXNpG6LNfz2iHmumTn6QMTynY8jkwvHA5a5uur9vZchM6C6XMd6JW1",
  "key23": "43vPZfPX6osMZXGdU17tK9NShcseJQVPrsj2i9U7ASNRZm5vKqKNGhirCzuV5tREpunxr8kUJqBDfJXPwFAoUy6p",
  "key24": "qjoRWXVXL3D2Fgnij5ANVyUogb8w867ixfJDmMUYZDCxby7gvfr19GHX4t4yW5PUox8H3ZLMNcRphX5cH6Jo3mv",
  "key25": "2RB6PMsi8cCd2CiBdTWRXyRo21bS7pDSRaGgLujug8WdfuG45XCrRMifyBzezbCkAMjr6S2KZUokwWMx1KaBCamu",
  "key26": "4DTQzqw7PKSBKD6mu87JodpQAVcbtpELVuLyQ9FXysduUtovpKyopUbRksayC8G9z9ZDFGeFoiqt4TYzN1ucYLWT",
  "key27": "2jNDmXJ3NhpHgrmo1cgr1E6iMFtXGsHuyvzXRrGuSc3QPd5DW2zKiF47zcSvd3kfgHZp2ZSub7csHvyPgmfg3Nq9",
  "key28": "2EdzWpvD5VL1s7R2Jw6RdbkkPXrpTKkiVkyrUhFY1cah2csFYPo2pqJ4DPiehJWtULyH3wo5YksE2N4NANztMY2S",
  "key29": "4TMGecSivr3XVfcewmLoyiJyGjVd8cfcrqsWZqf7PxxCHN2yJXuJ1gSgZTZtrBKcqf6o1Qi3zcei21uh56iXkeX8"
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
