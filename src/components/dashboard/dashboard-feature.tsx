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
    "4TdNdbgXvJm5hhtqYagADkbf5yj1eQLoK4EzS2Sh8WZgLUw5zA1FzW3GgvmYeUTwtchSE1NGKKA63sURSVwvkV3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8MxsNWsDb4z5BNkY1B2aJN69gseyyhHs1SZabx2X3RrM1TmQFmpVPuWLP8mHx2aYV35C35fh3JCKrS8MpuCtVLM",
  "key1": "64ydwjrfABprN3AsYcX3xvEoPuKnz2JPg6ig9V5wrp2PCHaZHs9kX5CFYHFogqWx8sSykitrGpV3CbrdGK9rfdHG",
  "key2": "3JqP6PnngyxbVrMdNrpRbia1ZrmGoffixipqZ16Xe2Pz2oVQPPqDEPtWXAW1i45GBoNWtVcZo9iLPvp3ySBDRJ7F",
  "key3": "3xQRsz74GVT5Xq9uUWY1pvaGJQSYycCEQv9VanC4iHfwKifRbW8f21peHLDrrmRYDdHHQJNHL2RhCdFPQTrmCpnr",
  "key4": "45nsLv5HPccVWVBiFSU5bDYgw3hL44EVGM9yXatNhYiWB2JbLtMaiXcu5nQrALYJWV8cqzEpKva9xGpP3Xj1xrzW",
  "key5": "4zLLN3qYVhMW7UHJ5qGZTbRc3XYf9LBBwe7wXNua3vpzqPEwVCLrZ1d5eSqv4tXM4W3D4C5Kg3hZmXizWeLHR2y5",
  "key6": "5zK6Gng2Nk4NgFuPGLemV8sKNLdNhScgur7tedtKupoqdvdaVSUrbiawCHcrk2cTir29FeBo5z3WNv1H92zwbrCP",
  "key7": "4atYwBs2fGpFnLryL9RM7zSHxWahMHDzrZum7kpHSM6WuscWDH34WZUeCAMwxARRFjEdFGUBrDTRPVcozDoEa9Vn",
  "key8": "4Upt2Ncm5ofp4ue9hzvkPkFhCFmAY5y9WTXkmQ1mcd93N4zRvvKHYZtqQ4ywbsr2y6d4QqA5gSbgA3tP5xffdMW4",
  "key9": "4iVTwD5cWtzr7vFkCn6rQmadKA16q4MqLBSeSB34PXRTD167Ygc8ELD7dzPXHiTHvZMRny2zPo9xX1F8MjvufnpM",
  "key10": "3ZW6Tj8S1PsmcxfWLSFqCU9e9P57pg4fxs1AiQPuDRKHAFwmjeMoFFjRxA2Q5rNXkH8mmyE2PQQUSATs8XiKMgL8",
  "key11": "5CShputbjG5pBsFpGVGcU8DaCEBNfRkPs3Y1Vd6VgbJW6XcwjPCbyWAP9dniMy4wsmiz1qVKSEXrwtTVCHoFqVcJ",
  "key12": "3Do8zDoA6tbnJvExTxLcA3TDpgWL3v2C1GikPx7yBrvef4F3rgsv4mhSBPMCe7avRtexyxGEV7Ni9LF1F5kJyaEf",
  "key13": "6wBi3WUguwbPGSenbnGGcKksXGkKiRHRWPKBgaLDBqWouJeCv75w6tCMzW7wHptk2LTXmihk6FRqwbiLgEAhX5r",
  "key14": "5D7a5ZAHycV87envEahEA6f4rhf7gLfeHb8khBA7wWinLDLsSBf7nFj162yePNWBiGGfNcrdiVehb3Djy1DihZaA",
  "key15": "2GPUbhKuMnYF6LKAqvsTYeyU21EZdjTm5Lzy1r9EB3x926uf9nJ2Rh3KHM2pxHNNecQg1rGYpyuiU2TRF4XdYKf3",
  "key16": "AR715CstrtwQsFh6BpEwyp5rpXbeNbfxbFxJrKJmW2FXRtWHfNtBCD469ArB6hqyQpfCndbdBpiDnidhYAb4xFg",
  "key17": "BzCyxAYiVGewpUxYjo8zwhU46TpxJc5bRV6YEr8yrVvAonBsuDQ1WpM2pEvASedjcLwqBoCZxrABQzK1ZLwRyWu",
  "key18": "4LdNnuRWcHSwd1oqHo21dNkMWXb5TNPGUVrCULmn6HnJSPVjMrUReM132eNs2tMdt12D9nW1xSz4M5NZhSiv3oAw",
  "key19": "3eQv6zhybwA2JogfC4bLSCqNcgJZmzWrq8qphDAaDLu2FG4TNmczUCu3hsAUqZtwLGMvBjnTyV1nqVUt3WhekXz6",
  "key20": "4EGfDygowofqPsDKWuosm1M5cRGgc9skGYQ2D8PUyy4hJWqqRybWbu4r89o18hJc7yE3JTxzjYgRmsViuVv6Q6SK",
  "key21": "3zZ6Lqct2BUZT2E9E98foKW1jcAjqDjm1XfvB5uzjrt2fNgjXnTjMFewoRt7SNbDUe15na12fcEjcZrAmgpf3F9z",
  "key22": "4FJTigsDZh3x7DCcPG24n11HFBfrjqCeLhvQnvcRK7xZziPv1QHntBvUQnfLrgzG7echydVy6iZAdGAk11qakrMT",
  "key23": "4WRg43L49Y6i9s7Fe3X8txnbrWKccnveWhahSaSHNsRKG2oZju9yz5up1gN4v6abAc4f2eejyYpievS5zZ82idKf",
  "key24": "dhbng9P69ocFRTvHPMpZ2ibxuEEMaCjvnnjDZNX7wBxXD8K6aPuy5rg3YotTsngEVR5JgmJnKhnTxRaAUEeG6M8",
  "key25": "4CVhKdz6bvAseZW2cnx72QWqJuA2W4fMBD5tn7KvtQ7XqQwHjfVT3YQU4AZXNagL2RjcU3ACJ7NNLk4R8baNjvCF",
  "key26": "5UeWCUSdmVMZ5CRZZLatiYgq4cfD3fsRtJfkrUvoHgpkHHSVBCGTWejrqmaxqswz3Tmn87Doa78gE2WVPAbr1H73",
  "key27": "kdZrTvTnqJjjY2fZFVonuPaxHodWLBqePce7PoLnUps94TjKBUWNTyxfxZEgLvm1iv1Hyf3jhJef85qQhwHdGFW",
  "key28": "3MB3L6dQsXKRPyxwixLspiJ6jxPTXW7uFYBdL7QixYjoPLK3nvHCrpbPhaeTPQSc2KQAjTAWPGxDacuwAx2TtcLu",
  "key29": "4GTf94NgQ2iD8vcCNp19HwufrsGVk3BDGkrjQ2mekorsL1jUpDefaUUmq7GjfJ4X7mvBQT9k15y312ojCWm3MrAa",
  "key30": "wfoTviFvhCBoog7ZMnLRJRGMqHYdvmiUgB6KQh4J9uCVcPFfVPPyUrwessyiLj4W9rS7KsCqvRiR6RMx8iEFUWr",
  "key31": "smidhAUSv5LHwQ14nSnUmKFoEmDF5nVDp7vaRkfpXYbkid2Q5YVDaNnkVe9mXcFat1VsDLCFoS6emGn8grEEHQq",
  "key32": "3DVgKY7npViPQcGmmzdDppBqY6QjMoN1KFZbF8cDzVbWkuRHTtWGFjApNXb98Tg8uoRbDZ5zuVufg2YRujsjYk74",
  "key33": "4NDRpCpPb5KufaCrSwe4rzsKr7yTHJXEWjz6Gh9rjq3VMJPnASYCk26NgS6fc59JpvDMyQbrCU5xQf9Es4ruYark",
  "key34": "FcyJJXsyT219WhJcYWRJdYsgtCkd4e5K5QSj8hsZ7QszgezzdzupYHokBYVECtLw8WPiVwusZZa9ptZbAH6mrxL",
  "key35": "4QrtDU7HPNb37BkUR24wjZR8pn2TwdfobAGEbwfN8zE5HQhLB2ui5abeTdtAmrBNjnbsmpFFRTADMhGXgU8Ubdp",
  "key36": "4mKdaabem3wvnU6DhkBEeN1npdfxu1mXG5vfR9cWb21a1p8Z23Df5Lxhvr5sZMaEE7EpUTX8ozvGwrCYiw3ihvAK",
  "key37": "5rexsZc4fjxJ4cj5r3c8XpiyaGuyWh8a6bKpJAKNUZntpLMFVJt9qR5ZJ2RJ367y3iqLKSFTyDd2j5TZVhTvN5CW",
  "key38": "3Xb61Een9owmVFpsYBzvegoHWv6N1cAHHHC3hDJTHLovfFUAeQ7ykmfNhiKJA2AxRqLxYAYSiTcov2pGC4ERhvqk",
  "key39": "wPo1V7KMUsB3iq2tLwt5WA4a5rZrzJhxWEhFoo6NBLak8ELymtCh8xXUv4mLKoXrgrxT9rW2JTkS2wSnPPhGVWW",
  "key40": "2z2EyicsfmhNBL5GfXSJyQ2Y8y1vMegTFjRwHL3d2h86753MZqr3UCoexjfZfqS8cYfrGUL5hrDC6o3ERf2vb1BY",
  "key41": "21EoZxKim3g1XwzMo1vXjcBoHouGGGQzLo6ENWgRWx54q91jkdLmeFaUjNy2itQQtR2LD9zXuhDcRPe5L5xr2oYx",
  "key42": "dJNzpjya3wUPi2XSW9r5y77cApYxhj1PuMoVqTf9AndeTbUkYWWpDuD5Eay6ueSUB7qYcqWAPFmHmucARiDbC8j",
  "key43": "RjErjoGKnmJhEkUxy347BoHChpa3vGyJnFYyb9iaY9fED53GwqnSDCtgwCnL22KfJQHooaWfBsYqvUWHAU62yj5",
  "key44": "EZNDWgon9mjwk8x5P6GjFvheA3VpXLrEpEkeEz4JCynjgjbrCYfA51vyBJ9Wg33caFSEXHd4HFVFfX1fhWACStu",
  "key45": "4ovrxkAytzRjxburtTPHTimBaodoiP9yfH5AwNJ94zpYTnt9vGpuKRfESmqU31vvT8T2Z1JLBRuEipSRHsrmXbhK",
  "key46": "wCjovVWnH6ZErQvgeULNfEsSeJs8rJ9ctbsVP2GrhfmojuT4mwUqKXFJKZHM4HR34cS2hjjgfe4yRjXzx65wwnV"
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
