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
    "5ad4KrmftkThQTTbDty1sp6CYbLMsxBdY3NWU5TTkdvHrJUYNyMm9fgtTquX6ykhyp38rFa7FR8JgrTiSFWiQNJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52BRVd8NrkP96etmuDGkQ2DH4sMzCmWuwPn7NxjSR43MuX6bgUN66hPYRVcLyZKYF8uVHkYi7HoyueBbx9GdDPpY",
  "key1": "SLRcXyeWqM6JzpP6ueJ9LPoDdnzrn6WGuK3WGSgPSVaQ2aCWJYuM8zRJ2XWRTfYtk5tGSn8g5YdrP4N6pLeZ2pg",
  "key2": "58jJBLxaha2kHUfyw3iKE1jS7hRYMgwMd7RtZ7AYb7RgxW2AtHS6CoQFpQREXSJS6VN3PHUZvxs8dz89TG3tosrj",
  "key3": "fN4cBPrgBzraAVsKGixfDHSbZZpmo6o5P1JTaPBeKznuNB4HxKwHUgbcpq9jsReyTrabt9LQqDTFsss7zxqn6sW",
  "key4": "3TSV4Z82VVqu3DfZ5DKkFrs7BecMmeWRdf4hwGKGsivzcdEPtfT5dUccVqYr7RfDqG5WWNGTYprhHSENrJ31LmkN",
  "key5": "orPK4yt1pMQV4ZbPV8u3KYBEGLXXV2MPLahoNQ28Eu3JwjSQyP7hzZwA4Rtv6Ks9zBLMUgjcx4DxBBHFuvpc9xi",
  "key6": "2pLBht3Z53JZ1BpfMXqYkP9nqxrv31KYXjeJyNWoNZZTioJ4Ep8P8w1pJHR7DhorvyKskDB3So1PHBQGp5KurvoZ",
  "key7": "2xVqwXjvXvbLkP66c1RiZmbFPPtZLoSBqopCD9gympcA8KPTiwvJLpxBQdew1WH4aX41TGxBsgHFAsQEwPtQLRPf",
  "key8": "2GVVa5egPURZ3DeqRKBHDPwVxN1EA6nktJdqxso6Z6YAqfRKHhEyH1q3WYqTM3etdTKSvKdkZFq2eDmSGcEG1AXG",
  "key9": "GwhMLSbkBiaLQUE3Ck53NTWcX1AAgw1jvtUCUAKynrroDRaNiYv4FU3MmzpyZAzTeDV58ocFBaSfLEGAtthADCY",
  "key10": "4DCUywmZou31oAfbhssqTpYsAvEdJA3KZfudjtSfV2qTspv2v82So8rTRqNMY9hB4KiZ18nBkqdoTFwacPr6BUSm",
  "key11": "3PPJ7i9hZVVNFLK71C5aK7ZBh6LM4LyRsNJvrJMpqkwfCYS6wiCLgPUDmUz8Gna33STPakiiiBwh4mxY2zS6Pru8",
  "key12": "2gJpZMstjypG8cG8w4xFGfrw83MdYN7N3V7eg7MvPs1B4BU3HWUsTj7tbSzicKhwcn537MxhyBxKLRKTMM5Ay6Aw",
  "key13": "2TB4vZByWiGQAhWbu6vL1z9AHWDeUewbHyZc8Kb2fWW3pLEcP2mpoSo3mpMD3iejsEGcnrJdc45Sf3MEBRAXwNVP",
  "key14": "3W8bpyM9ToCRGeKetfypbBevefceTNRMZAZaiV7d7oRtgxncKeJRa1tegno4t4C874s2cTeo5swNNZVjpF8BqHgD",
  "key15": "3dtNcWfEbmrEX9gHGwoztijMmMwRdukyfrTfE4Mm3TrXQuRP4tXgxGhRC4ALXirgZb2a4wYb1XjYJLCEZtbr55si",
  "key16": "4xaodgZU5oMhBnvzqkaTqzbCuRNRFHgFeAYsADg6avNw4Y4rcP75KwTJhomMcNwWeNvXxzGWQu3rDaSdrGG1SJTU",
  "key17": "2NKgnqL98FdiJyRd2EGRwLfexeMGDttjpiEPdL76DrTJiwYeBfuUJaPoVZeFcu9NeFjckQdactRE4kY7zWqhuAYB",
  "key18": "3ujiLcyhKALX5JEqnZ6xkTpLTdA7nvcG2o5QuRwW6cdBh9PhVMgrxqXjspGdtPHPmdi3kMXgkcQYinfzErEspPYE",
  "key19": "4a3ykDAviaLX415mnrdoen7yKRN36pZqz49JaG57rU3qqmGuU3w613Ndsn3fybvgJbxDvXrJhhToujcQAVzsyzmH",
  "key20": "4jsZrMxAQoUvYFwszNXKaK2d2t4VRB2y9apzhLUUAoLMJ2kxoG3xVhco5yhSc8aekLZkZ2wd1Cp8wEDy6YJgynvT",
  "key21": "5VZ23oXrBm1NoNKyvogyLUNwjJxFiGyjWyMDMpE7pPoTDDG3saVARYPHMmRJGbLbJf5tqTVpzmWmyPD8ax4bnfJW",
  "key22": "4gK76Y3m2npNpyaqzjaZHdXBfEx61fr5Wp2Y77Q28VQZ8iMwhPf4amxDtdtk7pT1TGaZTMD4fRx1rvzCYF2dz1Mt",
  "key23": "eHfyx8EFXkwuWz2pNcQA5sgPehcKEJSY47vFGcGivpCSQfdZDV4GZjGswFwGE92t9AdjVCDRtTE8cc1DHZE48jV",
  "key24": "4icTWkGzN4hrp2n44cLXxuQrEbQAFJAJar35ttMrtWUzKdHrUWwTrYDeCAArK5M1Q5uFUgPYwizJ5hMszh3a41MD",
  "key25": "3CGP7uEU1R1VLRBJyVcKRYHo8qKKrpjeBU6fF17MJvPYHurZ2T6y59We89cobQa4e98mPXtxyFDpCgxXizPk4Ngb",
  "key26": "pmW5YX9Ag5EEj544HC1ksrTYnMSNwJkYgoNxPtjDtP5rL6bWpefRHgpfQJTUQBQjoB1kau5hnXvYZmzRRb6WkdR",
  "key27": "27VXU7U1LAkoeXYJNPhgLLAsRsQKPkW8TR2EvaCb2jpGKG1pMBq2YCfhPH1Aef3JfSiGPyptCuahMP3vguADTBoo",
  "key28": "5oua5SWftN7yqe9jPkLph8xFkirgxKmbKm5JScvor9TxCUW43DXZLGaZdEF2C6JhfXkkV9potDbMb6cc97Xkm6xA",
  "key29": "2yp6bHYuUTvGxix4icXUSHQXadcEKG4HxTtLLwFix4i3PrakszFyXEsxogdqxprZobcicUHcb4vL3Sj9367CsMcU",
  "key30": "5LtkVFxCJeXGUNvK5nyBgae8CbbPLTmbK6WbMuWgjhqJred8wqcc8eivHDsopgz6EYH5D44FcWN55NNohkk3PFcS",
  "key31": "42YFi6E9sCgQcaBGaVhMjwo6GU4cRrwadTR8KWd9Paj6BqSciPK1rEzR3pem9vEP7FpcJNEg7wpkwaguhfgDeCuS",
  "key32": "5H7TwPfhyM9e13kNGZZJkhXQvKvht746ghG6vDV8V9GwxTezMZYR7dz8x5TUx7KPsv9oiudGkr4qWt3A2fhR71WH",
  "key33": "2QdbGX4oVEqF4rBerS4F3zAcsU9JNu2bESxSCRNuYuBstnfy9M4f5RhNJ61pJnGFAubDpWEsGw8aXP5R2vWocyja",
  "key34": "4fUtarAphcy8sVuv3qSULpXdq9tHZySEzBd5xAZHKaN89sNfyusw1NRwMvK4pkiwqyDRNecuGYPem2TjXqhQqRK9",
  "key35": "46xsKsqXdYQUuXtRk7rpeZW3Q2z3pZMVH6Z9khoySSRzpRQDrAHzhcqYCPPuf6KBC5aDYzHA3mRonUNQ2erYBDaN",
  "key36": "3qeqJLUB5HDieyhhTDvwpABLzuEpe2wLCwq3spqHBvhxYJy7amY8oQspAeeE71YtiXWerXZA2v7V3EcLQRoLKqXu"
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
