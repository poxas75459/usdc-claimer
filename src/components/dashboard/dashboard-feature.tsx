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
    "4vRgBa7rYu4CWrKbdfMDWcyokwKFy8LEanvsX4X7Q68KeBky5s7fGyuQTnH71UgLCSvR6zxdzKGTXyF1QKAFBzZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pJkYcijpJPwzcFWHMvc6KuEbprQ5Yx8RWMaJJRPHmD26n19wsKq6JXZnQgC9idMYZum1KGH7bmBS8brCz5mN9hF",
  "key1": "53xx7iv43h57NF9WtUk2bUvq5p3gbYUMWjma6XMyYC3ueDMTJMxXmm1BoUPeRVoNkcfpkxJkYuttUhNzru5MxEco",
  "key2": "hKS73dQWtD2S7N5dG4yry9NftkH99dp5xva6yc7rs1B76Ps3isYVbmEGVJi4sP7saHGVRNrYDJNSPTNd55pYTq7",
  "key3": "3Z2HfCpFztRMc4Mat6Hy22HGhf55r8kDipRE7LdaxhN8ocxSMVRdTvTpLKEyVUaXKVeAgMjdPLVNZjX1tjqSLMoF",
  "key4": "9t8gV4nsqxHycjmYunz1QaKpd49AToEFoYDgsiQqWcQc3dp9dnV5dwGSneFCoZVLyb21j4ZoyJKRnJoHhq9revp",
  "key5": "47TFgewWr5MpxVhLQY3sp9UQDQiUHcVASViuCyJtyuh6WHoxBvrcWGKjpTPeyEPQXnzGwfuYaodCqVZMCQ4soBAW",
  "key6": "2ZdPcf5BkLNQJ6wQ5EtVbEpwPrEqyHyap4aRHXa4ZkKYjFLGx2CAVgjA371cxMLF97ykMwZ37AqJLDWSna6Y2pnP",
  "key7": "5egCWs394WcqAKLMBgwuc1RtJ6Z6szBG7PTKNfs3QD1KQVY2dngzeMvX5fFCtNd5HmutjTViLyLc7gXH9iKEawSV",
  "key8": "5aQ9FLxaVFZFurAKCFvvLJsHVqzxR9FGCCsmopnQJqoQ2AwJCxT1FPSDHxikywZEkZxFKiDYj7nHvMqxa6gUAxna",
  "key9": "5eHEg3NZmAsQXCHxH3k52zweDTGbYwRjqd8W8zFp5waYXufNaMq3MUu2DbRJTDLm32gRg7edNY2UnYrcxEEgv8rj",
  "key10": "5vEbsC4MyLWxbe4L5XSBrCUrvjNfJCcyK1Fxqk1h5cp414XHCnQ3qcsXGmgRcicXoGccRZZvE5HhHbTGLkf6cJnT",
  "key11": "4zLy2foU5PjWW89jd79NN7KW7gdL1VDQg1UxUfMzRAR9wjkBcrZvGi9a5VzRsWSVNyFYtoyno4AJEsBMe8fp39Xs",
  "key12": "5GjH673pt5FgyD8LBM2MB16EsyMsDV4jsDckdfXKbfKNJLRDAvkbGhKDsysZQZ1Ac74R14c7uL9jxJBkvFnzZbid",
  "key13": "386j7QD4ZStit2zApWwbrupfhZXgAeCkc9smm2iQEYbWv1SDtsA3dXLjKziQW3wHX1j6oHb14ivNfLmt55dYDy4G",
  "key14": "4FxQgW2WmJfcARFCms3FGWSZZEx9BHq1ZujUfCqTEf9pxBJjdVS31ievm7bAp7vDJ2xe2t28q79MXHjYHJY89bWm",
  "key15": "5twMd7LGjGGACosyG1AfqPFJtsnZ6Bv7UFvw3w5b4oxukfwUUqhu9nzyGb48y45EYUq6h4sy8pjsNzbf9vcyxiNe",
  "key16": "5DZRrqGBHssTXULTVRsHVNVGjJPX81nHtsbzCHZyNQ65pHb9hCDx3Q9KYbL8sqH1KvNmjQ9YfKRLSTZqXiKJQQWf",
  "key17": "GtUWGNiYjq4LdpGm9Ww2S9XDjuwepxjqLd3FZPpd4RSPSfqTgUsRs47iQpDToGqq3k2TCLnh46Gt8E2rWEYEVKi",
  "key18": "22zp8fxg2NtYKPExanW5dXRD86X5j4H7iqgZJudPy8pF1U4QWSmTBHvXb2anmVLdWuaWUxLfdefUWmRggr5zEHPR",
  "key19": "3aBGejN4vgXCyPxreU9sks3LmifhMsoea1TKeQUcaLkLsvZJx17h7A4aqM67zn6cJLnMdaPtQoFYsR535cUvrpmL",
  "key20": "5SzAAsYfUTTbcPediTVTRVrZHvfsy5fH1byx2eEzpW5gknEKohFGy7jL3fT9P86Nr2NvUAc4vATM5cMiy37Urfiu",
  "key21": "4fqm5K1WgL2sshuJ2CbpoTiu95zJD6LDDRiXVFVPTRWqPhRb7RiBuPMe9hXenQJ2ujhEumqw5w3hrJtqKreUtbZW",
  "key22": "9V7FX1UKP88cPdmnLBSg9c6A2tDHma53zzhvytNHGtPHUgVpsTPK2mhmTs2GUYsGJcCwNRJ8MxwwfxSgNpUr2kk",
  "key23": "HH9GpKhUDoU2PX6cBPsGxAQABoAGmiJHYktqEeN7MFRiGzQmkFQoPRJAEDHFU2hj9fTLwivBS94fVcCdiY7Ygwo",
  "key24": "4hZY1fsrDNom2sjKajiSRw5ZHZWgeYC7MpQH3F2dMr2r11HjWmbt8q5aBhfDSeUCX2tCCkJbSQC6aretPxmznHn5",
  "key25": "zzpNiPhHJfnEM8XudkEvenDzYAdzoPr9huCx9yLXzPYJXEJzqtnFG5E8GDai9en8eXkzmg269FnUhYg6MDaNXfV",
  "key26": "3GukKCxcKUPxjVzsrPaSpRrVhfCQnRSwWo9LDM7y4VKMCNE7oy33zaPzwEyXQxQaDZeYBSxGeAgvhpmtDrXZuhww",
  "key27": "5k11WKj2AEp7o2NGH3CiJHd2TCKAALKyKWYZ91iaMHf1RhGPvsUtvtvCcQvkZafG1FEgzbYibNRCqbXGeTFW9iMk",
  "key28": "7Tpa7G3Ugd1nSVdv2HjSM5ppvkJeQ23PN7An3J8kfATc6C8eWiq9DWsGb7TijHYktpcf8hn3hSw9uefvw3GWJsD",
  "key29": "uM7DERvD1pUfHKfL8e2zSScisJkC8DJcKQMkcWtwVjz7f5uQDcm7x9k7uLzHvxZtC7zHVbmp1TCzFf2QfYR93SK",
  "key30": "vQFedU7hZGP5ZLj8Ecm17cvJVaNconDKDt5PRH2hxJ9rK1hJsJWVZGv7W1PC8WDCFJHn5Dfbk3ffW9to3QnDEh9",
  "key31": "4H2j4PUadLnUJdW8o6aDZNqNZ354qD2zPgizPZ1v1gK775E6DqHtN4jQUfcfspbZXcNjFuMKMhMLp5RUVr8bvC3Z",
  "key32": "5PuCSdayW239eW6VJ59pD9vfzgLfYB4amQbM8CEHjvMxJvF4ywJXxNJkmz1UQFSKF5fCtJxN3ayfRCviHSD71BSg",
  "key33": "35wMveEbenqJZH19iSxpor2SncWFSse2RhXhffbUNy2659srUJUamZYuDEcSkioDbADETfPnJoSqDM8hEzTJtjRT",
  "key34": "24sm65UChxrs9B9ariQrYmbZwcgXJUeKyme7Jz1c6dsyatFsUnLuoYr6onFNqxLurjnxeWaVFJ9EkY7e3TMxsK6m",
  "key35": "5MtVb7AfjksrpKeu4Y2nQxU1Li81gWSR6J4VDu149RfPp8rdFMh96H31bqs2QBBQCnEHf7FnbT6VRxvr5taSwoxj",
  "key36": "2JVioFJ6aANCbkzDfzqPJ3mF7Jyci59dYQxG2SPhtySEVSB3VDs9y8X5a8JXEcnvZdECny86qVqCQddtAWieytze",
  "key37": "drqu1nRZeXDvZbnUYNEHNpcuR6ZhJtS8j9GuKJNN6xvvpNeDSE5sE8kHyJhSxvABwRHvHwMicz5L9s2dP13abDD",
  "key38": "4KjzX5ACErpkt1fEKsnj2E2jdfPikf7n1SLDuEMR17R5MLiKebkwWaFyvwkZ4zMmvQ78EBC6PqPsUZFm71rrh39o",
  "key39": "5iWBtQAYC84TSqvB93quHhRsa2aVz1hgiXtBVQ3S5uR4EPm3WCVdZfz6s8HZie9ZbFnUn384D6TZAobUChs1SCXZ",
  "key40": "3iFYCKNaXdgYv7YpgM2j3zDYY6crKHb8orFfHrpKkc64uS2RTYSJbMbSrhHMQvXnaAKv4gFkt5wJ7zw4NR1rWjot",
  "key41": "3ftiAq2Lyu3c6anXQfaPAtw5N6oXGszsXHnvhG7vpVVcCsEsRmw4mnNwc5V7tDREt2buwmrBHm36BMAbrEzK7qA2",
  "key42": "N5XqLWRFjonvQcqdf7sGMWsCN2WA3N35RGubNQybuBenUSwFL6MVyY9wx5iiN8zkVmePdehuRg3wkdeRAVcbZC6",
  "key43": "5awXs8adb2erfZVMXd1bikXGUCYAeHoTuJcLQ5NqaT11PMwVnKuZyXuHzYg2HJb5ELzokNi87Hnwwzc2QAKYEiGd",
  "key44": "5cA5SbUsM52wKUf1tfZxWYEySWYogBY8h2DRt9eg4oPPjFKbSVngD3t64pxFmRJkbXchJbCTst9aWVzbXg8J4yW2",
  "key45": "5W346SttyxindARdN2QvkNVqR5b6jSZQ13EuAJUyqWACkZ37aEFx9dmg8M9ESdbwnxCMhQZsZoV3B8UwaQDJ219e",
  "key46": "3inSpx5ctP7MFEKPLZEFa6XfT3bzJGq6qftuLzVshdw69yomrKLybqum3Z6Nzx4VQpBxK36cDJDNARjKvttrcHeH",
  "key47": "2cUQofY5GcnLF7tcjp33gD3aCk6cnrgJpXcfySBmMvkVqp6m2vDjbiTR23U5RNPTAiwBSxkEDK7JfDoUvxW6PuFR"
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
