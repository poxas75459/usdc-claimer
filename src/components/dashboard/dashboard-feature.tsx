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
    "3YQYxdXtcD7WhCzbWLBXNbP9Zb1hmCnmtNDBQJAyFSiDqsbyuZeenzshmQszJbWyicHow4AxnW5fQfpbRyhPea5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3piHPwVz8fg4oByi6AuwwBCmTSaxt8fmM3LXnVHihhgC2rMKMRMubshuWCqSnN3mX2pT42pjbGRAuhqaR42h9GJQ",
  "key1": "64tGhPVGXNC6MqVEciwhn3mmFYtkthDzMsfnX8r44KvGwiBf1w4HD5qFgymSxqzt1vttmrJLzpUnqtewM4gHikJC",
  "key2": "5557Pwd6ySq1hPosTNKEAM4bATp9FvjTAgvxABUxTLq6ztjqYbUvTYo6LAfZPBWVg1TKiCXKDYyxexYDbziFZXxY",
  "key3": "5LCmtVAKDpFTYzNm9vrdaW5LxBJ4rZWoM5Dda99PEBEeVLCWUx7Kw3gMTU2nt41PmUAcx8dR4Km42Qpm93mxGgAW",
  "key4": "WQfUaUkotCKBzfuoxmY9EuHYJEGdsQW19MXcVY2TPPGCS5NRTZs4ym6JUwvEddrXZFqcc22dxmijfrH8zZwePvo",
  "key5": "7CbYaNmVuaMJ4zagZpqKSwqEDA5hrmQUutciE19XnrnG2jiugkEaoEbRWj5sw7xfATUVrwo3VbNqRaxqYDz4wNo",
  "key6": "5gqzjzW9LCLyEToCNY8njqiunKRjqXfGTUZJ2x1eezLjxyVKmEMM7nHHpNt8XSzmXGTuVyWffToKpWMyEAFL1pB6",
  "key7": "5bRrbHFQEUUZGMWpJ4Ht8DEMvnEYxyu6niCRaXzzH3VrKyb2rviTBBY4LnTUud9ZQncN7XvmZXqEb36P8gFfAtUa",
  "key8": "xKzds92xXnoAMFm8KcrrQTZyA4Ujx7mNWuz2dZsBrAWsnjJLKQkDUNPsxoUs4gtQggCJzgMh4YBodJCz4kcz3Q8",
  "key9": "4hkwbcXy42Vprv3m87Jr3nnQXc6ZM1fN6Bd5Bk28JnrL3RWnTTiP2PqoRtQc8PkzS1TjYbcKy7ETaLa6uqweLxUR",
  "key10": "U71CrEhbrsKk4tk986mxmgAFWDdENMUFZzSWuNkDAjTS3JT8EnWn2wNTe76s8NoebmHYzeG1skntCVdQSWBa3SV",
  "key11": "3U6KgpCzsUmAZpPaAUybbaseXuYtc9kBDBB3SK4hqDZE2X9nLHAYRiJ41CESodjakHrEPGtwgYSDzfWqttCiJhwj",
  "key12": "3HtKUq7GZ3SVYDQmWcsU2Hg9aqXQQsej1D4R3nuWhcWuyKJ7o8aguq3AXyM7tb5rwCTTPLUCJEWqyodemnJvYRFx",
  "key13": "3JWU3yS1fosz3AoJYBn3uzso9q8zB5sbNLiGZM1SV9vGesSYPWbn99sLYQqce2BPDFDN71tYwzmfNkkj1pWcNoYA",
  "key14": "3FzMVdjRjgM1fbtahSsfcJBgrEPdiD9zXBeexeTG2VYwNQaD36RUfi5bBxgask3urjrajvRq14pxiA6sAGZYxHnb",
  "key15": "3WPh8nnkQvKgS9jvRXycu6k33XhmJchAbR4EhVQB84uUsMRVhGDtZf9opGvLTrqZW8Nr7JbUvEXmSwbEDjtksr43",
  "key16": "7MpEEQKix7m429kJGxPaiuhXqgkU15EmAqxcwoSUnQCTfXQCSFkcHUQTnDvrrFfAQYMPvDHhDzssYhQMHAQq4DX",
  "key17": "4E3vqsFXEkXcn7hmJFZCdGA3eoeobbHkPVPJ6CBWEEGHoTkuZ2SHFftVFSkWt86WSWuY5cWkTAEAKskggSK42Tky",
  "key18": "65rjNd83oHKwjrqjkJ5bhRcGQxo54oPvWgMrztsGrWcwQpWQrcyAQSFeocU9TyWjzf2KoKbPiEdbW261PSuuvY6q",
  "key19": "4x6GxRn4NieipNcuokJmM2wxw3NZmeV2sbFYuq486QBh47V6Y54mKUf9GChb8cVMrfDmuyH6SKVmNtgJuK6UphXE",
  "key20": "iSFY3nPf95Dx6FCuezvohTQKSnTdXnfrTCzFYY4YvEEmEYezrxAsjaUxFvRF1yLKssNJtsbPP5pbpPS91WaCHA3",
  "key21": "45aPost9Vvu3j7b61ZeAW2EqhJuG1eq2yw7QGfWBhc7mdbNeCDyWkbvJK4QgsWkMqXXuCYeYDWGtaq8QSNR2Tk67",
  "key22": "v45nkrEtMUUGhxErmpk112fqVss97xpe4L3S5hN2KD3hhkHdCRaW8SCn9y9ycNZk5vemnCrCr8AecVm1yJUh6No",
  "key23": "67r9ScMmNtmbDeVLBzgCK4iuQ2FCF5GEwJUrAQzTgTrCjdiNWvMovD4YF2hWUAfjJrhTHCgu9gc4izfnwjTUhoC1",
  "key24": "5D1XAoEqDoDMzRNctRo4ZxK4fwsJAt9owfs1qPZuYaL52UH7ph2xqmDPFDNzi7WseZZ2suqNxmbdfUb8aWFh3jUk",
  "key25": "3o6eizDymQnnEb3rYQGZHKJWSopWRBNp8Pmq5hGAsHaGSm2UGApYrrNewux2ToG1VGDddu23qSN8RrfYhfTjDbji",
  "key26": "5b2x6bTFHsboqXNrfyw7SK8VMw3BUBcXZLmm8hqXynootn5rLprXi9bD3aDCAekMg1vajifjuzCmaribT8mftt1k",
  "key27": "L96jeaKBM7M9qEtMyfcNA5Ac7fJaPK85az2CbBgcReBkcftiXxRkPWGpRWLKR9SKQJqrtVGwNQnyZxrbJAVeNpH",
  "key28": "xcfVLk8qjgChPjL5QLbiGKU2Xu2irLHKfAjnb41di1pGFdSYEb5fLsknH8NnCYUj4aWFW76v3NW2f7k5CJ4axXC",
  "key29": "4ZadY5JcLunMYn8V2HbK8hNJQUmLL6F7exoHhMbqPHuAxWpKyYzTeC1YSyUwizhSmXZH1oMbZ893FjnWagbade1i",
  "key30": "2QmyxSrT1ZKiaT3qUek7ZQvh9xdzSjs4wRj43MmCWF9RvZPfoiNYjRUBfGZiZxkEtZeoV16bKK9PKbxuYhpLbWi4",
  "key31": "2AMjifsoytQtGW4uXYy7DVPMzHLcVUarpotEykkv6wg1is2b9GfoNqK7S7TkuRBUbFq5gko1F73uNTJBxz1gxCHV",
  "key32": "4uuEN2s5bRq6yXU58VKyMs2PzqKWPytnexjHFgNL8SQYK1BPwXD8PfCZXX2BYkwpqXTzLbXiJ26PfhfV4WVzPz3t",
  "key33": "T9u6RBGbYqgWYAU5pbUa4NvAHz4cMg5TusHgoJ3kr5Gem3jVfo5AFSSY8ynEy6Mbn9sdthodLR8iMd1bng3zLfZ"
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
