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
    "3JKXwr53ZRiRxSuowEkNC6UwK4mF2tWupWEk8d5skE97B7znEUXBEDtEDuM5rHHgWs9vD8AqtJgsM7f1DkfYHtus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xdmdy3WtDZF2SU5mqvfyCg6Nx6xPFNVnQ7HKRkdJXNaWwZCDitZUnnXUzyNeuKm48ZzzjXK7Si73TS4TNMC7nut",
  "key1": "4raEMy623UnEpqLWiPVhGkgyyhkkT1s3LHFkCW6fg5DdGT3ZwjKQszC1WjDKm1vudoB3sQktLb9VQxpyJPjHdbyM",
  "key2": "5PSRsqjTfh5fsPkzGe6B6zx7ZDUrJ2QkHfzVnCFyCP4xWXtEZHGPnc8pgncVfwq1uSRuFjK4yTcQ6XSvKkXT8f9C",
  "key3": "4XqNPMBaams8Lm7TT1LztLXAHEAoSGP1sVibwWic8HAPf3kKoBYSrgtKSwY73F6wnhbaqeFR5koFuN3W5wB9WUqJ",
  "key4": "2k4RutVcdjXsCK7K8q1jNnWtZSe8XUMf23djsRPfGZjk9RRCPi5zmwH2ykX7eSHooDNiCX9Z9UPLMPAdHL5ETJ94",
  "key5": "4VhHmSAHTYEAeo2Fdeob2PcmatCYb28MpPcMWcn16VrPdUN7R8eExo3bsZ5utG94S5niV2W5racNS3a7pqeztsHi",
  "key6": "2J5aqXUJGNL1pYeGqZpmQtrL8unKsDyt5Wipqf62vQk5141j4sJtC6Z3GHMdodrFbPuw1Mudix64jZYrWfMtBxqB",
  "key7": "3EVYe1XDj1sJTtPyZzufDhkhb2Ee7hxeALaqW44XEYRkqZYvs88rwR15ADyZQXRWV7WAMsw6pTYjSGBujpVnSGiq",
  "key8": "5eVwBUkv3vD27JXnV2M8ejasTR9VtK6vBLuKokS4rXr6Swhr3M2UbdEtfJ9BeChNnsTaB9rR7xVjZo61oHKhf686",
  "key9": "iPBJZWWWj28VhVnU1HWh25fc9QFHSKt8gwuqsAAkRs74i8Vkg2vT5yPYQDRhg1RhbmdqGUsHLg6J5RuzTskuAZQ",
  "key10": "5SYkGZMvN8nwBUr1UWpprVrjt52uLgxBzXY8DiyqV7pV3n83dACEiqxiNaAD6ePu6rWyqV1vdLvfxB4d3mjs6V6L",
  "key11": "26ySdZTvdAz69y8VodThLfWttqgx4fzqy8JATUzjdNbPVk4JTcNwAXFDMGAKr9z8ceMiR7kH3qYhPpFPyH3m3eM2",
  "key12": "4Exadp6FD5guBo3d5Gvv5bXwgyUTyYgUaGEa399W4dYxdwB5peobqAbpARG7wZ68tWrLbV7rPq415nFKptumoTgu",
  "key13": "648EwCh1F3VqLoE2LuTPahkcbuf4yc6Y7iy5JY9gmwvZS2wA61opifEotFT8ugiDp3Uo4G7fCnf71PsTubstgdFq",
  "key14": "2BuEKV9aSDuVyjEuTvibYY8sRCn8s3GA9MpyXJSVhcMnXFYPP2oJRBBGh5cmjjmYLRQbYq16Nd3C1fd9ropjeqWC",
  "key15": "35uQe4f5nHttoLgLrNv1S85AmUNndiqahb3yGST4A1S6u4Jy4dMh85wvb6NKbKyBkh6ybSmYTJQoKAguGHVhu5yQ",
  "key16": "2vVWMpMaP1hXLk2S5enELZ1YQVRm9oStg2LpFfr63i4DjzLxYpsUQ6PZ4Byp3vrTtQt73sMGiBadZNmxuftEib6r",
  "key17": "56xRRE2gTYaNnFNidyAz91xsPV8GqNyKsQwHLvZEjKcBBS6dCWgg1aHjboh4rKQ5tkyHjo7wS4NNAVkD2foWaE4z",
  "key18": "2mtobt8bLEoxahMFvyaQXWs4Af7v76kMCjwsNkUQov7kLytvkg54uCsZ9ieRTVEhvoM3uz6vRmiisqqfBP8MyGjj",
  "key19": "iwaA6NeB6hjfuesY183M6PNELAR2HCoRf5tpYRDvR3PbsdjPxj3pcXSDdQQj7wuiWddU845u7TJ7cTobyt5PYLS",
  "key20": "3kK1neNtoySo4stZxDkxk1Pti48tV8FQrXDiMrC6ye29L8Py2UBaFjcZjNiyAPj73VmW5hsbaLZXW74QLgyTWBiN",
  "key21": "2SZayYzQPVqPohCKVnjfgea43uosooQaS79iSSPXscPPuPm6W3fG4LEzscFgfn1VuGwkqmKByf6PirnZ6ARdtcnc",
  "key22": "3Gw5QAAgVxVGQguNEsnu1aQPFuBp3oBSeTHoM9zab8ugFguM2LNgaf9vULrzqt2et6CtL6uXegzffkGh6weu7MeU",
  "key23": "3CE4eJfLHnNQfCYuYujwrbyYpTgdJqgPxBLSwxdtL6EvsJ9bJLUkDtvANJuPHxbcsSumt3QKfiqCbP3nu8aMMzMf",
  "key24": "4pZ2xpM9YiwTikKxZmk647YN1YdPaLMBNKpjHRaURJkYD9nAbCZBHMPjwFXJhzg9oacer7xZuU57YRnN3y4Q84cy",
  "key25": "248pSxBvQiTdQPA7os2XjrNYjjBwfm3ugUo9jAPaqFBjb8ZrPQY1J4wjZibJnok9o8TqYW1GXNtvZD5VVp8BrdbM",
  "key26": "vcSfEaE9RennXEpVCo2WQqPrq6s2jdhUdSENd1dG8N8EvFPTFjBa44x3eszKxkZRtTKPhhvWMywUnt1FMziwkeF",
  "key27": "374ajkhz2fuCMkrr4oSpRYJJbbaTpxXprDCEkpoBNpVqaEdaBaMmaAwfWrGMkT2yxRYRHvWhAJrAdSkqGbyxio5a"
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
