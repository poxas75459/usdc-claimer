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
    "2HNYVYTrgchnt6VDZrFxfV9a8jbePP3A3hmZ8hJwJQyqbwzpPiEtgNiXKJHR6om8cqSZKX9xQr2kxtakq4v2WUYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNQSZJdkRwZNodro39D4p8RWnun4mcotqLimXPwYh7bc4RtEqFNAUwxSVSoey8XbiB66bLWPBUU2KayiLg37j4c",
  "key1": "t9wACBzz3nYQUMtFUUwCGsRzwp4R3V59QXH4cd1iZURbGKrfjxNszmjKw43rCKXQa21LPu3TJWTD5Uq3WnXnPfB",
  "key2": "57KU8QPyj39fGpvuUCQoVAa7Eao788bss3yjkEZUbLSCWMbyRULXuoPefPLSG3n2ePjM9oXsHt43zMKXx97zzzRy",
  "key3": "4H8fmptoJEkEDCYE1EQrWGjgdwcKYWCt2A1pFRui4Pcu2pHxSabfEJvffhXzy72hNHhwgyqyhhAme76SM1gXVQAD",
  "key4": "61buZbLUU585P8kNGAiU5f8oaT9MFwfAGmhTsiTkXbaM6f726mvCNaGiE3r7mQhHXx9FdLD6w9ymNbpbUUcYLHPK",
  "key5": "23UjJczajkfCEyhWHkjssAMpVJRXZRWm2vzMiRAcDGdhMmS2frqTvcHVVq1XT9U1GGeKyP4rkfzrt2KqLrGQ7ESn",
  "key6": "32tMgtnTCWC7947YkvwtDwjtJfabUsGNU2tzhrwWGubmKmzHNx9G7EtSXUPvQykiKDQHgba15t7rhMxYvwZPGwKY",
  "key7": "2sP2zuuLGKrdApMCrtz5KcYHPCVMpdgJtU8Q2U1n2MXiZXgHcSriG2gr13jGi1mZQgU8nwiYUPNcKPgZmvh6zFB1",
  "key8": "3odXS5tmJkgt3CWpJULAUTBaDJmLmnujoxVV6y8tMMqUEZrngMD4axCqCFRCtxso9k2kaQpfbFBZVc3bA2ykLHoG",
  "key9": "5Y1F3EWKsH2NCGBq9TGAUtJ4DonBN2iwJscspgyJfW6pVUibZiFJMvR6ihYDHAAPh5QfDMiQKu6fovAiprTH1dku",
  "key10": "HLXoaLDcjrZaNDYBdsmgfHtYYtB9YKU4CkM783LS4vnFDZ5ayb6JeQPwibKXw7K8HFX6vctmV7e2ELjHPm98P4s",
  "key11": "5RA7R6BNqk7dyzznjMhGXbbvshLdSDytwNaTQPVZcTUKFHa5V3bYwfbvnytggUzmSZs84fn2imeBt78kBgLbEsjv",
  "key12": "2gSQz8V4FrtG1KZHM28FysQAcwQa6hVjQvkSWVuDcFEzZVToDrrTRuEXyZWemzY3KeimcSmbN2dR6MP2xUUp43F9",
  "key13": "Cz9KV8st9YkXsdLP7AHfL6uqJvYRnk3ER1bKQP8ZFJKHv1tVSUmxds36f9coQVSmGmAeZH541mbv73V1K532L2X",
  "key14": "4CmuYdGq3rj7opAUE8AbmpmRKgufHgCXycgKw3dA5pAjpKroyF1kdJC6GgxhC54hVjcLyfpF42GLfVErq35QrJdf",
  "key15": "5Q4Nh2f75SDWNzuvzaVheiUKqqQ8tt6t2CZs3Q2FAJ4tQafdhH1xKyfXMt8bAgsMPuatMpWho2De4bC7ChKuTYhm",
  "key16": "27YeLUkiAvBRoye8tZCnWaAHJiiBGVmk1tSA5kwk6gNjypJ5Tsrc4oPCZzE6NQnXsFpnwEUEzJX2FkFowMJpVm9d",
  "key17": "2Y3cyasDoBJYLqQ3WXWW8kDFeKSGCC6Yqo5YmbbETUzSitePw9fLCNRLfGQusA5PZbHhwa7ojukS6anzTGXauhq5",
  "key18": "5yZ1H2WNct86opFSpG45NQ8FUBLTnYqNeXJfgguAKgtGUQgozmz7oLb7bkFQqiQyFtYeLLFDh1RHqWKiauLn5sXj",
  "key19": "5eT8eyQPUYkE7i2vzFMsjqyuFaNpNsYY2fNV3AR7aQXAmWzDjCPwQbpTTcJXfoJkfBh2RfNisDjELTRXGNZEc1wL",
  "key20": "4BEZpDfZTzedbEjhbAW8oHu96yihr1zZqxxm1ooouyMNkMEy5Z5jvmjLn5VVwNU4RnHuxxWPNwiTmGxzTfz49Kdb",
  "key21": "5g1AeqQHn51K7E1Z7MSA74BbjZo4AX8VG28yLEP14cR77cAorEGCHhZpiSV2SHd8Ut8kfEJQ9zk5DznfLdDA94Ew",
  "key22": "2CbsQdPBi3KSsVkG1VSNB8RvJimWwNZZJYVj1Tz29oSnr7DvV7coCoN8Zmgv5WLVFDZGkdx43d9ksFF5wD2P71rD",
  "key23": "4uz3mtHysfSr5KdHdjyrryPdHvw1ZxR3uHU4vaLtGCtZpfsBd1grkwkQzF8fGFG1867Wi3hHxo8iTnQkTTfyf4tR",
  "key24": "388efyVENCxsbfF5zZfwBinkYTTfLk7oS44CEH8QFA9fTsFQvkxPFRUnV4qpdMoWgtofidSNQj8CvrvpLgEcgXE7",
  "key25": "fVZpygGUYfhb2zaBAWFgffNSVGSS4Me7FFfsMrAsXpRmkFSbVPwSa6uXCM4cmmyVekvo43n9WfGfcnWBByVRTjM",
  "key26": "rhS7XLTnPUo2Vr1p9ZjLRvywmLEMLEFsYdbg93uSFofVzSwq7pbgUqgKbpSzftJXYXV1MYMoDUpFwycyrXKr3dM",
  "key27": "2xHjqjswe6pXKSynjPavzTWUTjDhGUzm4pZQTBjtBEWFmS6z9wrMo5YoN8txshMHKwxL9JGARKQspZBNB19rGU4F",
  "key28": "uEvQGudY1qVef76UpBrtFmND3YhER7iJtk6Wfi1jXwhTxC4T9f85K5JZNwinwa1uBzdAdbvJkacMwPkUXrHzeLx",
  "key29": "3xZg2awLMjNo4YEtieAD1FmoyoU4LT7rN1WKqozBApydqgByyw1d9sYof35kSfoaHXweWYjVTJnhXHUR65kw4xqd",
  "key30": "2ni9arntUthihMp6b1ixPkuPTqhyP2AuN2gWQUC9kqZwHGkv9CNMN7uKi4RLYrk47CNqBPcbSq8kgjdAyjpSBHHe",
  "key31": "2Sa5VUCoXssj7QUPcGEUJKktDNn8S4PerKk7NSvk8pjduwuT3xkMxeuFjcP72A3QegqTymm3EjCkkcQWc8hKPUBr",
  "key32": "36BB9XeCJxu2EWf5heK9jKmeQKxi9iAWqXJLezeJZZzdLVUCfXnc16UUPjoDDEfbfVw2dcRsXypcEfzpNgJhd2N6",
  "key33": "33SmKbWWLChND2nnSZAd6m4TCJAFPuNNdDL9WjC6SSaJVC2a9EgbgbQG1rUGu7Qjgrh2UqmQu39tLsQPXT6MsvwN",
  "key34": "2UBCinVDvFxxDu83S2ALVts8XM35mY9v1KjrxKyYyavRaTbQGBfKKwvsHuiCmt8WLseM4cXRGrmQwQgabPM14crz",
  "key35": "2EDuAc9p9bzNpzedq98bPX9tsuMseAHDyKch8NSMzM23a17nUpqHxmn1ii773ZhPyUqUkFe9NfG9LLJujcH6FX3m"
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
