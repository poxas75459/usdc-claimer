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
    "2cECuq6BPTH7i64rXA4ruo7H26w22P6sg9YcwFAYPKawYDM5Xr75Ezco1m4efa1qyh6VUTHbxipNJ86c9yCthTuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53J85YbhzUy5LT1TNrVkNSUX7aTDLRL4QyZ1risu1NChUjsWNEVnpDtMizpux1W1oJYaZWs8KaYs5jQZJRFnuTd1",
  "key1": "RrBA8Mh9bncn5vGDsdzMFqM32du3cQX4gxKBcjiPH1y4GChp8mK5kLYP8Tk1iQeN3uefEWFdH72Sfcn5riMiVsW",
  "key2": "2nXKD2L82FPpeETS56UHWS8JjoHf4gCT1rp3ATwqtUKMM6HbCQpKTsmGbFuimHcKdmp3kmaE911CGMgrEz5JmwRp",
  "key3": "PR8GcWSKfpZAKCgdNp7ghb7tdeSRTKt2ut9zrTs5L6hrMWBXoRnvX2jEGYG8TVHiNZmwR6fWbzD5VZ4eyziTdAT",
  "key4": "5H1hPr9q1f5Q7ukRZo6AubHvZn9cbWYyWzCzhEK9cMJ966YqFNLk7SEQEw1LqXQv85EnSCrhd6sr9DFyyE3FuCUv",
  "key5": "3Lw2kZFxWaCfByLoxoAsUa6crhhuBYP3iNkvLHEAnjKCA3ivv8kk4DTrNu6tKgpToqZafsjkzvH2gRGfvPYEssR9",
  "key6": "gp8ndu125syyHVgMxT3eGiSWHWDEaGtTztDxMn4AzfH9Rjhjn3z5pAx8shuiCZ92KJihRwtcTfNFQbSEMYDseBZ",
  "key7": "21zcjkD7sF1NdT9DCbtLJVmFoFtA16qEkpmAb5rkCtABmANmSFdvBc25Ek4mjgmfd9owBecNRxZCeuYaabbGReLd",
  "key8": "2mbBUTggyTpjFwskUz4RqQzwxQehHHBtLdbnkU54ymLQTCLxSaL5ojL5zFiWJZhHPVw7f7nSsZfKyFQ1xStaPe2",
  "key9": "4hTDn1YLYMLTTBj4hfgzDh2vhwx85LZcArSu2D4sgf6o39Vycw3fMzAWzGUxZ58yTM2YKZ1fFnnbNNo2hCLXED1X",
  "key10": "262y3bt2bu2U8HLFKiRiKvX1prVkATEEhtENcHY7L6FvU3ZZMrvH7aRh3oEA74oUqXJMKZDH9XnFXe4LToRj7yu4",
  "key11": "2cKgse6accDD2xP8x49Qqco1dxVfGrTa1uBQgt8d8TGpoNcev7y8xUyYFfgrF5KMsSg6HNdz3ur1V8YjqRbEpFUx",
  "key12": "3TTbx9LR6DFkk8AE9vdpHgnA3tZ3jMUWEUtjscCfcby42picPY6pMAYtvbb97TeUMsxeroLpo4uRkmWwdvzGGN1P",
  "key13": "2sScF9z9mrVd6MupxrK8RGoDC7M42bmk48s93qXJkwb8NiiaX4STcb4X3z9PdvPB7BXaKaALCcyey8LiRYokm4ye",
  "key14": "5NbSFpEowRjZoZJApnnCygXJPwku2UF7wQc7cM88Yo3gYaZoSaBt5kQuMHAHgopjigRFyaKYT1Xg5Trr4MT2Wnkv",
  "key15": "2LgBHe5QeEdEohdNUDpprZUzbmovsDvW7exhAJXBEDSYXizSpMm7oi5zfHK97kHWSEzqMvafbcqhjxV2Jbpuet9q",
  "key16": "4rPRoeQwN4Kc7wzpVGzrCVe8iemGcNpqzK72unU3mJykZ43M5pemQiXNd3HBzSQe6YBcTfq63BU3HcqoV4QmytMY",
  "key17": "3mzkAqBZmwtcz6DfYkerNeD1r2VW2je3VSG2ZabpGdPKkRj13qT7bdN6smiiYvjRf8pFCuSo4H5RVwSffmrHi5dQ",
  "key18": "2hK6cL86ojyJSuRrcu6diXgF6PwBEW6YA8A9Y2sut8Db8UG1qDJi2rWNnjSofQx5w7wjgahJJ7pzqTxnTTRW5WCm",
  "key19": "roVRvECkEEJL5KxLi7LF6Giaf8wfo7as9TTZtm2NCpCmMS8DHR3Cx5UunQKZVzsJCshRqqm7em1ko9PA2izrxzx",
  "key20": "3dKhVDkRMafedk7LYAXtrsRLJUfc5iLUX7Hq7kzjsH5HeY2dHzHqLP4YyH8iDztuYvxXRkDcNWyeCz3Z3ssisN8A",
  "key21": "71XDUJ5sejkP7sBKsh7R1jgbYg3wWazKazRCEUQKuDTf8tKEnQAp1Bwab8U84ESaFeA6sPhnScmuWRDVC6jdNWH",
  "key22": "2V8vGHjMesV4jHGqZzzjteYGcpxxc6GzkWANC2sj9uBdGTZ4CkXntGU7Nkgt4quStFMSgF42BJyt8GH39tMFgM16",
  "key23": "4MMkFqZJh6SFpXEeRvkJcUR1wawcXSNgzirURN4wh7jhH29WaRtKNxDGyEhBSKqkkGyH3KrunB6SLfCiNZ4Lc1WJ",
  "key24": "3WvUTskekxgmGHC4qw3VoZYbfv9u4s2wthbQtguB6kmcCDL8z3QNGgggokk1UBZ9DooTaH2wXF5ro5HoNiFBbQXS"
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
