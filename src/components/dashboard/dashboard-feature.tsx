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
    "5bUwp61T7BzQ8Gz8pyRNHi5o2hYb7aSMripXMUhDh7YwyXpaVTvVhvscJhyiQ4Ru4UdmNxuVgY24EoVHXmGzMVS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aV8xG5BkGTjisBjtauZ8B6NSmsUbEbtYPTNQfKWr4yAnkn1ZSpzkFfVjwTtZn43o6hq6PESijpg3Lmfn3m5EzAf",
  "key1": "5EkUnhKp5WFgCmB3ZYLTFSfgz2JFdZZDB1WRPZP6srX6MaaEQ9oyZPTSzGTssYMqmryxZWye83emXy65XAFsGrBC",
  "key2": "2ihq6dJzpxvVG3TNYJgRo69aEeiMPcwdtsvF8jc6JQRgm9XbhHs7dYyqH29ziz81yDb5DnrK5KWaw722eZ4QhJRv",
  "key3": "5gyrjW7iaNmaQeBnwphzcnC3TiEhSkuH6trQcngzEinPkadCeHzngiF18sbEuKFHqSU7qHuC3pmwpTp7gFbL8RXb",
  "key4": "2cz1bpPpvoGgoVx3c5MGrTrbjEK2WJck3AJvTBRY8c3RgCbQA1Ud2p51dcdgksRNtcbwbArMS4HbxLQXiBJsbjvd",
  "key5": "L2yEStnXtjN3UrzKNVpk6X4MrcEtji6qErwP1BjPhqTa9PFLKP1atgLgpHHHp1YCSnUbjAhXrsCGfGth8J297wA",
  "key6": "2UyfVFvNZTJeM3u6SrY7S29GbXt78KqXAHqhquzKLt9BXsEoSmpFzBH7HsKCW6D5JW7miSqgQfAHA6ZxGAX7ChGe",
  "key7": "455C8X9AbFSpwErdwb44WAvu994WiUJPyAHaYXRpGtifQQ9TnVz3CKpUXyAQjo3tyYtHPdchNwXQM4CEPzoUgdqC",
  "key8": "3yboj9VC8yxZ3ZTwVTR1UoYDHzfXg2jb4YS7DbEC2xPbPbRSr5qPSjQgmpDXSe9c7UiS2UJCoyKs6msa7m14FMtR",
  "key9": "BcBQ86kUTeUJuaKUCunZyLN5at378a2Y3MmNq7qbAnRP4JbNDSAHBGG45mzELBMVC5jjZGihq5UuR7Tum94mXch",
  "key10": "5miLmSTqw66e5i8szxjCXMo9UHXXUMnwEizaoSWteqi1p3tHuiycR2TGQNNpJcvEnJpHsu9tYCJtNKU91RiCYQRf",
  "key11": "94v35yuMirzLPnQ62iS9wyiwmzMhgwmUSHJA6MYJc2ZSq3Thcwx2UyBCaUGMkhuC4dH7jpiP2Q11WrW41rXzGpz",
  "key12": "4hvLAs1hZZ84K7zQo97MNAywpcGAvEVqhdCHhT6wigK54RLYRfjc17YWS9LA5drWjvgVkfKcSVY79gUHrW8iPbgi",
  "key13": "39fnLkTw5bfFn6R9oi1JJ8rRa7UgNwUbW5DvmrxKm6addLhqSydZ6AWAEmWohEpJSzzBTGqWtfEmtPnekbaQ4TAA",
  "key14": "2AgCbTae6VnkRTdC1guou5Fpuc57fQYdaVGojZiaxet7rzjaDPudDuXBh2WZnQ7UCknvpuZAfNVocbSgCgCvd4po",
  "key15": "5ihq3CKgZA7DCwE7vY7kAwGKdMXoWJbaTXuFvCzihmYuPKrfEvM87NbQeGX32kWU7YtDZMovhSs84C6dC1wna5xg",
  "key16": "65HtGVqiTYta4WxsFmGvU5axovC6Sn3vP8o842YHmhvN1JvSXGHwMvNiUP993you7pqDu74Y56y74rTkPGqYAv3U",
  "key17": "2v4dtxvaUSoCcZNERUeL2TN6pMDd1vz2cvRJwNoYJwb9cUrLGi6uXZJtGqJg1XLkwHkobwBjJBjnQNU8Y4QnoqRR",
  "key18": "2Z9nEvgY2RLxzgZigNXXKsS7NSdqWdzReiShDEeJTANnx49aTw7PXiThxJckuRChxLoVdRyeV2Dmyr5G6ocgRBZp",
  "key19": "BHdnS4aTF5gmmQNd4C97LaJXQJzgANamudXTrPJDiakNzAsduXCfdqnCHThNBeXKg8ceevnDiuYPg4teuNjVCDu",
  "key20": "4cVEVZGNUBBZHjD8fcV4qMYBfGYHVSkSsgHhgHs6eVHe5MCANog1qCfVNvfVjx5UvnfVx4MEQtb7nn6kvUfgUMPR",
  "key21": "21suMhEEx7eekoFxvRDiVMLjYidudw37iQrJtg2UEYwvSzrYzBMza5oTNPL4Zn1AjUFNupyLJKXCMjD8fDXxYckH",
  "key22": "43RguCDBy5nKNSsUUAx9EupZKZtt9ZQehNotopXRmeN6LURwbh3jyMDmVF4vJhyBwVE7DKPMYBWMYtyyNXHVCikp",
  "key23": "iPs2yTev1r5U9B85yohDf4CBQ3tWF1b7uLDj5oUG1EqeVY5PLPEYTj9SbqKkGVpW4EZAg2iyJhXRFfwtQCMKREq",
  "key24": "4gseW2Uf9HksaXHXQGCtrS68ynf9iq3xpd4UFQmWr1HAcc6csLF47xHpJHacznaCYyriArgxm8WBy7kzAko4Ua4A",
  "key25": "5GCR1vnCPTcTUz9yScswknvgLDoewoZeKi7WoeV8ddND8ADjBLwcLMf3jVtfher5PBwtvgixJr3bDXCSnpqN9jEh",
  "key26": "5RP1S3eyqtAoXsiYHTqjcEfuZWe9YG2CDtKbisHSguyPtcJzXKb2Hay917C4wVtQGxpFYmMD7Ytyt6ioEiX3CsmW"
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
