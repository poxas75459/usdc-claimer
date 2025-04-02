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
    "2rDUSh4MuZaKUt6LzX4zisxxtUScwLMfc9KZYZe399RZkp62DS1amhuxKiXRQiCH2N6S1K6T3oRxDjGsUQ1gEbBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VErc5jJJL4Q7bgMdAYjUmas2PYpBWWVmE46cRWy61cw8zEf6aSq1DZquWFN9GbZXYvJShkMrhhKbDbQSkWgaPW1",
  "key1": "4pPmDL5N99hcr8Vij1JpPxPSUtxMSoU17zRmDEth9bEMcheZXkJT3yRiquYQVDkYhJkNRL3FwJsmrbFZ1PGhLEac",
  "key2": "2QXfXTA7KFDTzvZEf7PV23RHHRRUTb8BoD8ZUE46ysLGSCHGgZLcncUGEjDjraxML6bGuvr2vn3K2s5Wx6Y8xgeJ",
  "key3": "4rWGnMND8nwfzb7JMEq5Gv1cZgjPHroDdi7uQZjMW99xDqUxw1EsAuZ9vWfbjhrShyR59PipeUjHZPtao1hBfJjA",
  "key4": "4TEfE4gpDSAJ2fJ7EHswAPpTUiuvyioCCGRRbaijYVVnnymskm7YibWEbBwYz1ru2rxBxsRH3Dep95PEqRJgd3f7",
  "key5": "2SzLSPV1BtNauA1RQiJDTbhNtrZQTAyMazcnTiENECUA64Jvh7yaPkqt9gxbTHi5tKK1c1mU6TeVh88o7ELdvxxr",
  "key6": "5TW8fYZhEnx2kZpqkeGb6nhzEXaCsgvbQxm8n2zMPRJcvw1mzdg3KpdxHvGsnj6ZeYV133znNDoFKhw7HKfCqoDh",
  "key7": "44aWg5mbVxLgmA9VjsAwK9ysizM9CNadUG61UFuXzii2SzpmvDnZjcXuj23aEhXJZLh5mCH3r3cnpW8UGpA6ezVV",
  "key8": "nMYEdE8XmEwapDZN1CCFdd7XzwnWpiK171KUeRahQZbpRaaJg1Lze21JJvLgku8PmRV3jRW7d57CJto3THckESB",
  "key9": "4xhyQQ8kbaMg2JkaoKWtneDnQE2Z6yYBcEugARVyTZeuYuCeJ7S45zZaM8u8Z247bni5ktrP9LgBYghShGHy8csy",
  "key10": "K7njhmAnrYDWyjJddRfKBi4LtdNnDjQn3ex4rZKR2bwT7x4HDSVLWeZj5VdfApg36E7qc5G6Y5KGfJLZW5XRPn2",
  "key11": "3iXoimShKM2wTaR92zKbGNRXoJhmvjELPwt9rNVMDsaC3ANqYWMXooceNDvvrbMdBEYUM9BJ2Jm55cCZmw6xzStx",
  "key12": "3LopDq2mWC9xv2sMTZPRHES717TNrx7H6h7ULjZ4RyrpwtAcABztqHvqi5Vcw4iiuoJySMfU12PJ6MxDh2mN5cjd",
  "key13": "4MvxaaosH9z6B36rWvv3NZ48ToYEWrEyqgUAvds1GGDHiHNRyKtCdnVrjbeFLbe3eg5H3y1PgAuUNAEwz2vnei2S",
  "key14": "2s4CLPYG6EFuF8PXC1h8cc8yK9zfKrgXf8uXE2YqqCw9y657kNH2EMmvtCUQ9rJibozKN1CpRiJm2fkPZyjhvrUf",
  "key15": "2YzSP4oyoYaG8LGkru3RF23qu8AV1f4fDnGVi2Zhrc2H5VxDda1Bp8tXN87aqNwdyf1HJgTKB5tghc5HuaVvkUUv",
  "key16": "raAbCTuPux7BEkH2zEMV6GiCMWg3z7EsQ7SV1PQDVPgCbXvw2ByWdnToJjASfa1qeifTeUMBqki8if612QWMoey",
  "key17": "4kiFz9Qahg1ZnGGKZwWjoujB4pgnNvx5iatsXA325ZePXEzxmdCE6HXAND7w13qR3FFun8MDfhskNgf9PSwgpKcG",
  "key18": "5K5AGTUw63ZvDvcA58EXyDvVrZ3NAeTkDcWv61fVfR6QmQM8Gc6CEpZAEDhgBp3NhxKTrv2D7afWraXkcmeSxxH7",
  "key19": "2zKncokJYhC6z26GJv8hiyvjS3bsNubkBSkfQRBwVmi3bJ8A68JTwN8yn9tY4qimgTGwEhpi5acEMWGkZ8YXsrdB",
  "key20": "2coWDpRv6gMYAHdL8thFpsZgV1nCfdomjQtDyKfnp82RL9DPM5GHdw53i9gSHnKStopp8949csiysDnVusSeVU9t",
  "key21": "5DrMydoAvbdsHEBhSNtDcmQ7jEkaL4g5qRtfoj4wwSrxGdGK9GkQEgu7YJ9ibeaeK15K8994y9P8wTBmfZTZbdE7",
  "key22": "4awf2fRg7gftTA5oufK9958JRQrtApTDhydQC2NSyYFJHGHANe4wJAn26GJFqdnkNhbpEDSdLdeJNdD6K752YfeZ",
  "key23": "1BPq4M57S8V2Fthz7MS4edpdhUAtKFqwePSxV8xF7iKxzCZ1Q9CMsB14jZyhyE5bofc2xWymHuyx4odc9tYXDhB",
  "key24": "2Ndmoi49N3oXUcHmUxTAA4hgSkfyZTgr7c5Tf3pz9ZFMrWxDV3JR6nYSja8ErUpz6cTmn3q5uDzSFvKiKNgqiH7m",
  "key25": "C3i9iGcKQWhXDNmrXUQ1NX9aERNqoBRMzeqkQCRTf6DGfU8se3M2fghsCXBGZUTCVY9v3qrLgtXmpVeBiaNUiAk",
  "key26": "5Gm4CeJCE3a1GTjQ7GGgMJMByABxRpmSM7egi7VQZCQSDmt7PJXjEPMKxd9eFBjCjYTsmdzmqQfUmoGS5V8NMjnr",
  "key27": "55vY8YgA3pPEwBjbaYYjyPhZHhKNHqhXJgexgCuVwcWpapjWR47jGKzAGd5Ho9S4beDhKPaUWZWwUQeMTP9eKRnP",
  "key28": "2TQJrTxZkJ9PeBEd8YV7ooPDBvXwBjK5cb4WSxh1FsmtGKtnfSRixEfNPy5JgGAus7tV8vbtjTVKT3R1fPoYKkSG",
  "key29": "5kSmgHJdkFcXp87XXEQXebEuF9AkV2mwxd97u2rrRUjHsNKawd2QrbRTvMAKCNmGhSv1dBXPvYyEahfFTRs5E4Mf",
  "key30": "3eP6Gke3NxMbTMvUxaG48xsdVytQxzrShwJ1mgFaaV8S3SmXCMybBAo241GUpFVUz2ZxCBMqgSGb2fMmdTTqnYeC",
  "key31": "4fwrkvwdmExm5p8F48gZLM9FxjGA2VjJCPkrYccMu3rteFq8QEHKejbZu8mxa7g2xW6RddawhvsYd9HD8kTYvUjx",
  "key32": "5MWxzzAwHZU5UaG9tFMxJn43RsoqWkfx2sGeewYQuqZNn297KqoFHbaHxnhWyA4DrDGijQnsTxy1wyiNCDvLAVdV",
  "key33": "45fBQdKfHf2xEqEdeAdwLAmdEErbXf7xFvswThHgiR9hVBZ7sA7N8dLcehwJSJ3W92xzbftjjCQ3pw1EPLPuG28N",
  "key34": "4DVCP35Cs2HFe95FuEnaSrULMayGG8zVqCp6fTHnLi6J5AvWvdL6PdkdJMyGoykaMFNykTuDTBKSa98mwQD7W6AR",
  "key35": "5Z1qzSWgFvGfJyppFTC5GWTSPQD3EqU1LauJ42X9jArfJgR63YkZ82vDQXBMsh8fPjYm9tqD7RAWSDGYUtCREb9Y",
  "key36": "5Y17nnuEoXSxpRjJSBA6YqqNB7iT2mGai8g8MEG6bE6byAGggDNnVs53bu9ebvtLkEnLsdABFhrNJaQWQrqPv8LN",
  "key37": "2mN19vaShEzwrEk1q4jaKhRV2HoAfXxyK4XPjiQfiYKruDKnUHw62rjUeqvhVd5RbREQCkTGf79YTvfd1BSGG2LY",
  "key38": "5CGS93i4MbhNAkopS9paSjyuK4rhc74vHzpNFqKWhCv9VhMkbNASSEbE93ta3CBgD6JrYcUGL1ntsnxyJfK4aSN8",
  "key39": "4sXgTvGootSLmvbxJQKSF4mc731EEhp38oRw4VpaDXrCdzm1hLpaZDCfkP1hsoLBQpK37qup2nANroE7wixkEewK",
  "key40": "2E1k8Nbmn6ap3cvH6jts3oYk95Kiead8pANd8capqGmUD3eXbiPJo6rRmYPh5HhuRvPGqHQ96Mbzip6q3EsqvrTf",
  "key41": "41uwKhYvVCqqUgGT2PDKDge27ymxfz9R4kYEHLThTdhd1bj8xws1yj5EfR96v8YCfq8yxmACrCqVx8VrLSGhNJmT",
  "key42": "4qYgKoDWSEQZDYr2gJdsFnFaoVzxyFs8mik7oJp5ULgtZMGhc1tpTV1BHCkD8GAUKzyyVXVgajEP8QFGpY14AoS9",
  "key43": "exPWmRdxVK5zKL7ZU4kapvSaVUUzm8d3jv4Tnjyw4DA2rviFL4YLtaV2v35c65nhjBiJT3PZdtLj5LNsQYgy3oy",
  "key44": "4WRcotUvpbVAsYvfGT4opRhbeKkG2FcDcuuDgMYBVjATvcb9eZQoM1XedqErX1Tw1BRTKqEd6AKJRpaox5sgF53e",
  "key45": "5peL712fUVYpicREhX1Si9aVP6LRiptmHNM57M9zDo53cM1poJm3rJchj44ZjRDp8xNK8cQ9hpjyBDR8D9W8RvFj",
  "key46": "2ejUgoBGWiPQ59VxRvjjupGtSGX8QLTmgVVnWjHZ2bCRtuNuRQWLMcJ3Hff2hJyui6eLoCMw4aMdq2ZZzHVMoHPg",
  "key47": "5nZDYgNAgz8Z7DeSrhRTMEFmv8ZY5d6vVN5tuD1uJUCQMZTbZsxoGxBKAjfELvyyUC5pLCixsukyK4vafjyhzsyS",
  "key48": "1rDd7uK2yHgGodSCc5h15M8bNyEhCXf9W2aeKpQJ3MVUqj9XGcwjciabsevKumZXtCYxDJ4yT5Su3TuFqxuHai2",
  "key49": "3RdwS5HK4FkixxULwBiPt9rSPFRpNbMvwDb1GH5pR9NnsVyFHaw2ck73D41csu5zSpP4nvirSPtjkWRTkp23Y2xR"
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
