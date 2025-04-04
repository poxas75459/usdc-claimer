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
    "3KLkDdLSiefjgTbQww8KyBW11E7Gbe4KTQuXE2GRDcs9CU8MnGiVTQD7EaxkCuSt7twPb9bwjcgoYVcdPrqPJq5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVyRkB6aAm55uhmmRbkrX8knTvbCRzV6A1ZK5unAcuynJdkWzKKdDo2FctDKpdH8KwkDH4dYB9EroRZ6PhmqLPT",
  "key1": "2xqZoz6Go9YVMUQv2xwVJh2QF1ij5DxH5RcSbwZk77TJNg8cPMRDRFpfveTi2GXdTHtZFpSvGzPqjzcQviKQ3Bs1",
  "key2": "2cuate5G6VDRe2spJotHXqmAJDtF7bvT1iDdNqSUQuUg7kstaS78Cw4NiqxqgFyRBuF5Bef9JUEFjiCnEHGuC56y",
  "key3": "5UN1neeZo8GdFxzzQXWiaKPoDrKJMC95piZtTHTnWHSJndsk827eSTwhzFst8tyNQA9W8ZLkfvzYcHYjJ89JNjKb",
  "key4": "3pEcu9ZVTPP2KZYsKXcnLnLfaNLCmp92Kvu4vVnCZXj5477BVsuPfraGnRcoW3sU2Y83XcpiS4vMFSPw3z5ex1Ex",
  "key5": "2ojitAAwUoZrJXEB1uVNJ9wW26pvpVbu8fKsjrMNMpW5fnPo22xS4Mta5KdzA3igZLZ3SY5nAXA8YAnDEsYKG83i",
  "key6": "gNYK4r3RQ8yVerpjWQWUys7eU3yaozF74m4pRZePcStfL5KZ3qFddptgKWbSoSPnMCwNyyCKtV6nmC121pyTS5W",
  "key7": "2Kp1PbKHyLFMEB9uhv3JGpwtwTWsUuB3Vn68jwKhZyrqLD5iwaZFGg91QsSS6sifSoBve14duBq9k9bttmB2Y2kY",
  "key8": "NpMHkkyaxvtmdUAoFV7g5jmkJbfwdo8rK1onN1Wcd1E7GTjYc8Z7WnnbfwTLZZvY9VpBfUPENSkAjrM4CwEoWsr",
  "key9": "3QBQPM6Vi2HPNMntAWhcKDyF7Rd17H1Ldtm6XcYAgC6GjYNzhrHAhNwEYjfAWoSQok2vwBZqbDDJWkXupom7jN9c",
  "key10": "3uTZkgTYy3zqRrtLpEhN6iJvxUc2jpzgS1R7NCJyxF8YtYX8Mt7cejJyzmmzCvoonUegH5BfAJPa2LeoYocaGqR8",
  "key11": "2Qm7sBM5EqPrBVaoAyw4a5poGkZGjgDwAm51frByoC2Y9AjHypar7PMaKkYBB9mubezbZEiP2Kx9SP54QyNaZq8K",
  "key12": "5jzops33pPgX9NFFFk4pzcigj77QjWF9P7VDP2JEeKs6GvKLnHCLWi6ZjrG2mdPtonybMufzE5oajZJo7mfxw9Ny",
  "key13": "5LagNm1qdRuzDxtz2uhyA2ap8hWA9YHLA2aNhqwXoMJDPLYpk29Bdky4b7W67Q7fo8Vx2Xqu4SZWHGfCttQRUfd3",
  "key14": "hRsmFgdwj1XLtmLeioYEhrJvJLcM64SheXWjq4vGWWLxvtjbN4pH3Ar9xu77Dok7e87bgfWD5ixAnY6J1rYn5io",
  "key15": "2pM4ei3EPwqakjk9Yue3ev498Y3SGvyyKtetFhfQP85aECdq6rnFrFYnhUXas65nZhAVRjCW33aEQQ28iS2U5pN7",
  "key16": "4D13iZYArM5JggZVirETbVekEk7DFjymaXbTiNN3BhuvRcSrE4CfaTvwpdcmqENw4gshZamh42SFtT69FNxi4reD",
  "key17": "4hK7Fpn9og4FPvByL5abDbpcF74dxaU5boBdG9WDgiJjKSJkmYNYDDX63PndQyWzb2UsJiknZB9QAZbPyhLFmxfv",
  "key18": "2PnUxS76vwt6wqFQWwT8QoF9eDFkP1L6FMUKd1PX27ntNLiUPczisuPMxtKD61ndsQzfqRwYjMTb3ACL4ZMd1vHf",
  "key19": "4AJA7pxrPyQmzyYM1d3cRi96SSEe7Wueksn4ZZsYvhNvroxLDaHcWtNmeEHRX3AjHHYWqfxnD1xUEciNU5WquMiH",
  "key20": "f6vkFphm1bdfMHbV2jbRdjJ64BZZ9GkmEZvBKnvxQGp4uXsc5agvYx6zb5qKgK1UadciiwNyJqzZHwFbEyivzzz",
  "key21": "5W4oLf1wSLJsgisPtxcoW9gSBhA3Kpt1pFJ7f33DozJSCttZwkKUuuoPkXLDDN7dxLcpX4qSMXWC93gSnxvAVRG8",
  "key22": "4Ku4zqcTtC5ccxMRe1xREjeZoEWyRAc6ZrijuSemddJepxp872Eqi7AZ9pQMSCfB5pEgLSDJBYobaodX1LUFHUWK",
  "key23": "4dN52JpfTA95gyfFtdEbuz5sKqGDraWqfMkcJDK4vkF3jme453y9o2pT3u2XRwLQzgTxtRxGDwJ1ugEn7suRGgiX",
  "key24": "5swEpuyYppvxhDRvm4RbtThJmNGKsv6ozU7JP5aFamE3vToW9bTpyWzdSUiBBk174fqfFSafWiNuGSjYJWGH4nLE",
  "key25": "4Xs2NYxrKUFoUXnDxd1kNDKXtYXWF88g4M3pHLuzmSMGkEHstKGSxMHisaZo1WVn45wtfAMm8WopoSh4567DR9zi",
  "key26": "5K1ri5eQC5e4GtCHncKeNYWmtX3yCJbYjW7WiPjjSDiW9ch4TgH1y4pzjz5g9JJ7rq5hXtmgjFTspDrMLb6TqzH5"
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
