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
    "45SMgNBCxWLPtMyQMb3m27pkCaBhwMuSHo8ug51hLyKsPuTqudPEEW3PAkgTkTjvEWc8viHZFbh3oRrC8ndcWRsQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UuvT1yvArweCMb3aKw5EtMe7hGwzZyNUUVgp2i46cvySL3vK2xCGKBfTjRwAYVcJZnaeHZDNQa7y2vic3MBHRs3",
  "key1": "3kJ6AuNfG7wQp3AfxPLqsRtHe7kaiKn5t2VF97aNB3Si1KTzzNPpCUB5LsbuuEpGmveAT95zpGWaGmHzUjEgnTXM",
  "key2": "2W8DoRLgFGygWNyUFPAbamiozvHd5PPjeKXvamysNzBnruqE7CFioYUUGgXr2gTFWiWhB8orCqfaPFB3rKJNut5i",
  "key3": "5GXqNxcwKPKo5Fn7uFPf7eUFfPudzruCzKME48YhJKLshJJw6b1224gQhTJ43XYPsFt4ysAaz1PdGktAqrpGw2vS",
  "key4": "36PJWHnvNPx1A4tJP8VJ8LbxvNZ2eKf6X8hPEb7gtCBpSWfDmJohZ7hyichQKa4A9xePVtPwAcCYxbZcrNPUP54T",
  "key5": "65xLsVdEge5igLUv2hstpe6xkz8X2qypHGS9FZy62mQVym1HRnXEZPTksyKxZ2Zp69zYb2Enu4SZUgZECRueVF6x",
  "key6": "SX7Tk4vRwGfgNHeWJJ33wXdbAT6T8dhmr4NpvJRFRrZXbTqUfnnRbEx8hWKw8QUJSp6qbwFbLjV3nWYc8g5CAFk",
  "key7": "4QidXw7quTCwn3ubNm9ztWh8wVMcWMWAZXmLLc4cBuin4UFAj6PdevFvanoxJhE9iF959YBrEHFgD3DX5vWFWRfM",
  "key8": "57VgaaxaMCbavggQW8QEnXphMGY8nRhkMP531HDjzLZ3jYxqpmPTQNGD8DWUoQSWDwLqwk3zxX7hXKjecRoBsW7A",
  "key9": "3Es6cvtGSyBTAw8zWjshJZUjnm2eh8oVAvbwCWeWFqfanXFWGCEzkGbxeXWsPmzXMRxQYQ8bPtq4hPuaAHcwbfSe",
  "key10": "2JxcFckqeVY6t6688a2XQvtRtDGMM1E914Jpe292DPuJ4WccoHCSPP37YvMftuEq6YynbmYAP56XQqC1Fm2AFTNo",
  "key11": "2N85NLZbqwggbkwmc4nTmhGkcJGuF46St1mXNaDJwEyWZBEfcnrvaZAtCduXDzhZDMG4oxyrUFMNUfpPsLuXzkTK",
  "key12": "5662xgH83EqwUSUbFYL1wDqbNJuJyWyr3nTEq2wkLVdxeCkQHWh45yHVBhK95zhVdy5QUcbyhuZqhvYbcFDifrG4",
  "key13": "tgfRmHysCHJk8cyZMuWfGQzReog4CZfVt6WMzyz6JTmotoVF5vRH8tLb9SFE42si6XrxqD9cJ8mEcabY5TXJwUz",
  "key14": "5WsW87p292MW1fW1U2N7fz5B3yakZJXVSsnNU8jK6LTjjj2KGV8i6pd3gSYyBZRKePq2sS5ED273QjHhh8Juf5i3",
  "key15": "X3kA5md4ebwaGM12HpxYR3a2QoF4Kzf8ebytuy5Gv1VZEJF3qcZT5p9NmDmwcg1mLJwyGgztbrGaTS8TrQaVKhW",
  "key16": "2vH4pJMNPM6t3v8cjQEPonQk52qAsJZuuq1BQf6bN6gzeLrKkUbbEJ14fGeiRcogSyqK9ZUWCdVV63rREkB2Kjro",
  "key17": "3i32gRvFquhrb6S2RSr7Twfvfvto1fwjG2pBiYP4KA1VRp2xJLpkA2EhJTRoFdFgkJTKn4Zt2f73pC91RsDbNpg8",
  "key18": "3umRDD3CSpPwAhDGM1YjtHNvHE2qRba17YbC9ExxA6Vuttqk4WSVBCvnG4KSsUoN9sy8xHUoBUxbKC93gugsbC89",
  "key19": "5FU6uy1hmgiLgwGrKen7G1ESh8roFE73g6RqTYwiXMwiKkjgZw36fiBic7b684ozKb2mAMg2WXykLE3o9saZBhbY",
  "key20": "34e8TRut121XA9QKD4yWnGNdkTEGXunTCTS3Vpo8iW6bdauDQwdQSb7s693LzQ6tFR8GVhckHHp2SMSXgrFVFFob",
  "key21": "abtGE8fQXvBoL9Y9ryRPfiTnMtPz4XRJpTTTeJH2qy3mBCsHkVCcZ8ic1bxAHuj4U45Z47Yh8xSaiRMvLUaQSTg",
  "key22": "2qx7cepZnfcycdwwLQpZYjT9JVnaNyfTAJg5fbLCkhvHR6sCYFNChkbQNLnYUGRXoKpX2dXmuPnooCXACk9W2hnE",
  "key23": "Un3X8ZnKo89TSdKLCq1XhY91pVYwiiUKRffdviF9wgP2gcJdfzot1kT6EHTRwFCSBVKfzuMQ1zaqcakmzBXqvKq",
  "key24": "3PsBCzfyCVu65M1gp7tf22zR5NBvQFHqjnRyMw96MxnnbkmyZqz66TvDtv7XhNkhnPLcMaEW12g6EXZLM67vk3T7",
  "key25": "5GiTR3BVgPJc4u3z9LuY6ZfbLX9QkDJG41gEZug52cppqv7i1AVB1h74aYhjb2VAbau7kwTJDwhz28UBoSkTXHNP",
  "key26": "5vE1kLg3mEpo1HvnLdKoFC7q4FzowV4sUAgru8nK5Qfgi6j6YfNo8upPKWCCtZ67DwRMwRMJXeSvHkVmhJprWkmt",
  "key27": "4Hxw2pC5urpoDv8PNkXtVEJ7n4dEqZggJUCK5ScJysQ3itFWMdTBCRNhRvZjXggVKEmB1ja7kpHGoWrE6J7y5SbW",
  "key28": "eUnAnR13B4iZeQeMM6gNzSQmSDJeGQNMAmGZMQhDTXhGykPJ83SVWR2rJU7vz8hZ3iWBjWZWSCLw3rXHYVzdtXS"
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
