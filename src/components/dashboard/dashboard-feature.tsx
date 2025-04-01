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
    "3PVQ3yyu8NMT3usLmZzbDrrnfqSvhZHJpSsaheNyGtGgedEfZeKfv448S1cANjstTCGzLCuX3hhMBsj2sUSG1sD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDKid9qRNmaH9GCWfW97sspPBCb34EtfDGdykbNkvrJWmyAuEeDydWiUU4L9fTKs9mMXYudGZsSmQtLZZ4cV6oX",
  "key1": "2sXrA4cGwyVQbfsMN6bSt5F71R9hYnbtWFcEoVX2Uufy8y9DJ93xm5VPpVZ7sb8gDhXbGM338XdH9f3pYv35nTob",
  "key2": "4FR6WX7R649JZbigaEVSqtEJEfyakKfXEDidYxFHCeJ9rJ8JdHgUHqmPdSQZuXG5zU4hEwYJj8FDN9d6Gd3iu9t9",
  "key3": "4PL113Z4ZrgKsdkhCx7twfwmWNJ81bh1onjWr1n1Ddt3dGWrkcBXiCYTcCf9GbWhejtJJaxSrydwppsPArYQaELK",
  "key4": "3yvzdJ8bMhEQsPBJTk2myxaCTUvYdnCNdPqjuYWw7zq4b9r5i3ubj7CiEMzGbbGsgyLq5te41uR6RTmwtnUhJxos",
  "key5": "4bRSje43bcGVtj5yxorpDYj4ESNWM2xewYpgzwHwUYSLpogUP1hCu63NJVkJNYs3f5VWzD6iZ147b2wDNeuG7HSV",
  "key6": "5ZoJVQ4SULiBRbY2QReggu2hErHtUAaEdnbfk7HKMc2tTBGijwBncewb4Yf4DFNdea56YF6w8gt4Go2eqi2Kmwpk",
  "key7": "5rfvfNnRydJfugSxvyG1aReJkrzi4nVYGyWWxTttp1Vs1d48yC8Cved9Y6Y67txXt7XJz3FtybrUuinjmCBD27Ve",
  "key8": "5A4ufUBbwVjS4gh2AacDoEK6K6HsdVCPTqYo9kCWfwRbg1TT6xzJZG6dnxDKAUP8ERZsjm62n1f7NwDFWiBxfC4B",
  "key9": "3XfRX8LQ5VGdc9oFoRJUV98LGqxMj92atpQKde87o3TUHHavW4168LbHrN5MLozstjbucnNJ4PxFmpf6V6TGQB9V",
  "key10": "2Ro3MHdxiNJM5feLG3o2F8faJHTzAcytJWwJLAYjy19Dyq3sSe9eE1JKMjbqq8sMmZ2VaeCfKai9xiuHrmzxjWzJ",
  "key11": "52CmLk1oveVAWN43jrA4XXtxnByWiWXaembhLEYeUWzUqjQK7hM4JnDQ7GaRXNNTjZKb4wppFaZ6ExQ4uMikd5Ra",
  "key12": "4gcdGjfVbQahhzk458qYcnLuPoKDks7RuYJbYyGGAQrqhjBncYah7rtypgmDYxLVnRTeDMKyMSZaTLRMi6hC9oCc",
  "key13": "46FiK51LADUwEVSHX9H97RrRuDYzDFj5QG3f9P1Z9GXyda3C2fDuqpZW4cdqqd9hr9zG4FD8nqLSEutoegUJ3sGz",
  "key14": "52FBn6q8ZA4DrqB41QGWgyvat6yX8yRBmyTgH5Zm9crmAxjVMw1fEhKgTwjbJNKxzKXACY2BnQXrfcKJLzigpDQP",
  "key15": "2tE3kbSTGHLRkdMquwWZXmFS5SaiokiGHKUFUHYjR457qvMjkWpwYk1kFoAiJSpgTkAgAL5hktFYP7qDRfJmQSbw",
  "key16": "4q9zUzCPfy4g8cmasbEBfLCip5333w7h81U8gtKtPfZFnz7nJxcNmznZcJCK4gHMFWQTzTSpx3D7VuwoqxGsSvwN",
  "key17": "3SVtPZEBSukgNqtricryVWcEbY4C7V1PfHxeUQmfZVyMJyK1RsQMb77EpnTtkhm2GMc3qwHhaiC1yZf6XRVf28QU",
  "key18": "Mamc7XpcYcmN1Rpdq6RkmySvjzaP1xNvLCiRhzpDRhd3CJmjWDvXabVeRAkdnfYaFBo7eMBop26TC4YVhXrZAmu",
  "key19": "2wtupkZTGDzjMYQHnS3Rcd3GgFTET2XNSi2EYL7gQ28L1WVuL6zaNi11D5KQF9gi6Cxfx38sfBHg9nspZmPkGytE",
  "key20": "3X51veLiNG1GK4bcfD9YC97ob5EDbEspBcJfxfy5sjUZmrCnxx81HXshnNU7Lg455pkcL8TLN95rFAUdtGmQe6hA",
  "key21": "AY8WUPFQzfVksVwcbu8SJGuk9LzsYSUy4KSNzx4brFdAJjFoYMaH9Gn51vgq1sip4KQzYvhGasmG4GWZStP59v5",
  "key22": "4yCXSskzircQ7rGSwf2sRxg9WuvgnsmZgXA7AGCR6BESKFWBYYnjMHWnrXy7KDh2qRSAfwM1J6WBPgGpJ6pLt3nR",
  "key23": "3fVh8QraCM9cwqiSMoCPTfhxjGnuzW2AJVMtbSfJCcKHhjmVhH1YQbA3Uttg2gKq9tr68h2G1mWR8cP2kjArMjM2",
  "key24": "bLsrThXTySLsvMpswAfFyaszPf7cG6wTSbibA4uTGpLUDCn4Vo6iRJ4q9GCrTPgaaRsr3M2Kb3i1tvBpB5JYsNk",
  "key25": "5tV3NjsyfwJmKFa1cFDTJNKi3j6azk6RBrrpdir94ow43Vic4H9NLAkRY4qk3qjxwD9Eoj5GBiwd7MGEeeAF9Gya",
  "key26": "2nHbtpSr9aXjxd8vW4Fd7f4DvQZkXk7yjAU6Nh7pPoyBedt2Lc98f2BdkXXnfpJKnLoD6eq3CmcvHgMjpgKk9EeQ",
  "key27": "3pKDRVv8m7DbrJfnvZnKbXX17imW8Yi4ZW4a1aLiQzx86dd1ri9Scu9wHMtjf8LEyPvAG56o3ptofpsBWQ1EvuUs",
  "key28": "5yepHyUr2oAZGE6UxgHk85qv9LNkNAf94vrt71EY3nwyZRbJaEeZRP3Nad2sZm7uBoeT7CV2N1VfAVkSBomv4aLo",
  "key29": "3xtfPq2hYgf5zwSqnV9FJHRuq3TKbphPmav7me3WWhRvE9Tj3LUsoSyras6G3qs1vt6TZzLWepNWvq5agTErvb42",
  "key30": "4HMdaaYJuVeowE1oVTtA2guoEgdrqHGjwkJ9Lcc6HA7mcqdmgXz4VbBbAqNLur5G1yWmH9XU16U2xBfMCexVwyvr",
  "key31": "bgtECtHBCrmqFy4UtBHVh6YkgAp1hFeT93bbm3yTLCJpWhrqibXjQGfPfv3Tm57ZNcRMGktYhTTfzCyLRQVquZz",
  "key32": "4ax23EHyHkTx9L7uxmgneRiaC2ZmSXgynyLA4Q5zGP6WT8VoJSnqXZrkZTVTMxDQTJzQS69aEec2QpZue3CKWfJK",
  "key33": "2ThQKQyyEEC2LaUU1zr8CUHEcuRkqhAFdY2ze5BU3G5PznvgVboZybBN5QDsi95FvMhaKPRACqKTDobX3brYkCdX",
  "key34": "4ghBMBV1TVBGLvjpf8XDjLKjPrg7YgzrhfTyezJHgsxrSngMEikgACii4Wa7SAbCexeN87DdNEbnKs7ZCbukMuub",
  "key35": "4bY2B9xmPmnJUc6FuRVrQvzWMfp7mgyWNEXUmxBGp6Y1KLRkShEFHr7wa8E22wAnrDuzXwupXWmwXfyJqeMdsEZv",
  "key36": "61eCcgVFHVEDKevmuqgXfG7pKEHCt2mN3X6oSgeZmBqMrY8hMd9wu99zuB12PbJ3W5x15UZ29N96Jj5DwnVfkKb4",
  "key37": "3oUAnHquTE4wwBa8PHywPwHZuC7vww91F9LcqTs8pp2H95gAgAfaVvXadNAFjDxaE6uHAK33iukEm3QVorooHVSH",
  "key38": "34CsRTeHfxoHCjQhLGQETRtUbrxpQh3hvUuCNm3ZcQojq7hZU4evHXdDtRj9vAAGr5etFgnoS387AKUktLkgq8HR",
  "key39": "24RqGaAseuLmpPK9278RBW9rvSUxRjuoX2aRyECZN7QDMfiqCNCJfT7Yycen42ebSbKVptxsTyTLwecBKhwaNudp",
  "key40": "61SXXStQw4tSjTUf9Srt3q2C6sRhDpkkCcrCFFGZLBZ831gxYHhjHd3WfTaqEfXf8vwZYUyrg516Y22UMzMyBQPa",
  "key41": "URWvCE83BjppF3VafeK3Jnxapa1xDq6vQLi7ieAqyh7XVfU7q1qe7LvNpwQcdC6TuFhcAjyimNm4LrtGA4etfZu",
  "key42": "45kSvQfCN1uosoNHESyuCLMpbotLrSJy4fGyfZcjQZ2u8xojR6sr5DfLU8EZyQgTW5VAsrps3ygEySNvzinep864",
  "key43": "BoKsE3Rn7mQdu3CkT5dXMvnMUeg7Ps2Bb3kH87XSRsp9Q1gBJL9pKeuR3siJzE1jDAniNqfimPLUunGeAcyUUgE",
  "key44": "JSteZBVQJ5q6xSYSyQGAA6GV629VqzRssi6VRryLqrJ927Cij3SyosWKsuxQLdQiQCBzbdxWff9KGAse8WSabLf",
  "key45": "4nAibJwvrkb7Ym7UBZmmAAXRq5yCUFLFXQjTNPiACDR6YoURGMa2KGg2TLPdyP9r8LgVnT97W8GbvRhCvrZ5PZGT",
  "key46": "DJmC57EPAEVzHbk1UQTx1v3BHEV4XysruCvcFe2Bsy6kcAZJdgFFf3fTHMaqRWU4oGJguXZok15T99fFxjKPiEP"
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
