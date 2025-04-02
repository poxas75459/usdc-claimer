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
    "5wna8ao1anUHGt7DSeJW6YB18M8W2MJ3M7fifuWDCTMFyXx47V4tFoGnRrx7osgkgPJx8APyTmCfnLWR7LmKWDu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3GiamxYRcG7W2jUSygKQUf8UVDiJDncAYJf3SSB8Ddr4dnEwCUN2MPXGzrUBdNo7gqZ4mPdTJDqD8ZqxTWXFP9",
  "key1": "5DXSepeE2pZa5gdpxutdWFvwbs2L5BVTAEfiApdibp1LqLBP8GCNPtRW6GcfaZYXH2rJ5yxTxBQYB2GTXwQdCiUr",
  "key2": "2pppJJPMvZ4FknbN5P7WNqQxfvuJF2SjYi1LpbJDkaxdYKcrMYfDm6W4YHjDC4QYjWHDF2cxi2dFdMU4oGVRWsRy",
  "key3": "QBXwpWXBKnqjZUsUV5T4YDCv1D4hThf33dZi5e5CMJeu229gV2DEizVFpDmY6LnB9ddGdWHshfgkVm6TSwuUdsR",
  "key4": "2We9kNPynw5teAGjyDBDPBgtwDZ7VzkqutdFsvHbaRAscdpvuVhv8rH87fmPhVx9RTqXU7ciVzcWCC3N6tFNG3rE",
  "key5": "4mPsjd4gBx3HFe2SoHcjAhfPgGajjnnnu58hUzC5DGLtK9XQpoAgdtiWEoedzpjYQx43LkoijT2rxDtrrXKd4ovf",
  "key6": "4zmsCKBT6UAW79vGhkLCfy45QHXQAfGUVhCWKE47xkSZHd1ZcN2VskQMc5PE1foNCr211UVgrUy32LMN2M8DXAem",
  "key7": "34G7Qh1ggkhcKNbpJGHQ6HFS9AmFPs1RsZbPZbjCuPUFy5dhTD87YPNSuy6Hi28gneEcv6rDm4dqRW8HmAA1hqKR",
  "key8": "5nnafrgXdv9WggZ5Q7VGcQhmUuuxy43Hh3aFnf4fwk5T6PXbJcrKdPyiewnBDeohoX31PeUtjSHgmK65WtrL54qk",
  "key9": "B2ne8hTDgdRjnaLDiF18qV7VyQZbsmgVinw4VZwXgYaVphuwFCv7676LSKRRwgdt7tpSnwmwjKDuu1BN2MUTu4e",
  "key10": "Xmg6cqDZ7kHe3HHPhsAn9eodXQi5PdyJEaYCtUPDBvMMfD32NKcvTfXDF3NBdgmRVD16mUuh6FbJY1NNQTWXvSw",
  "key11": "4u1sbWqNYdZAeYvMs1FRVq5yFkG7CqGbMuvuAuYjNR9SR9HSz4eMpkWVHtuSf7JY1nJ2xYV2htrasAJRycLMr3rJ",
  "key12": "4DGdgoXKPYxavbsr6qwtf4CKKcBjQsvxJzTihCoPMoT5gqtUhxZetuB1QsDtVBK6wsr1gjAM2LNch1zb2P7Kg18i",
  "key13": "2E8fNjjVsGXGmXkgXeaNXgtsPZ17L8xe5dZSfHsf4yUWTCFxHzTzArk6J6NHTtQWqCGDdXQQgjuN4nPf16TVXaa2",
  "key14": "5sbH8ZtywuMatTR41tQML29C8RBZaXyvouPsbZP3fUG79sjVzYdJ8Bbdu8BGRtegVTx2LM1ZaofRbbdoPqFiHjzP",
  "key15": "3Ct5qwy1ZGyZDVZoWYeAVtdcKN5BoyCz8HLUB96n2JyCqxyaPQFNqsjsnDqw7z1GLBjr7YERjpUTKbe62294Kp5c",
  "key16": "JNw4yqDgzj42ur4YQqaA1r34HFLfHAZw5x74PdcYHDBFXdSQFaN2Jcu6wc9tfRmYY4yzW1UxSbtrsas6Z3WT5zi",
  "key17": "Ky5cDkEJBUPr3GZPUfnhP8zR5XQhswVSzKEnCcPCmncdqNDdBFqPuZ8UkcqLSSsdFhyBRKwEmrN4HctyqA7nSbi",
  "key18": "5qNP1vhk9FWAGpCpU6JdBxayuj7iq5aavNk36U6A5chXgHgLE3PVYZNXRHFGE79yQL8SUsPnKvKgJT3hqxJqD81Q",
  "key19": "41Me9WtRK9Ue94wGYsGaQ8hqCh6LKXea21YbZBQLbHwxxMDkvNG6T2onrnLT21WeAQKNtWxo3ES6cWM5cdYxdTGy",
  "key20": "5k3GDzD3FmattUNxQGBPoC7heUfKLbhVAzKFjQCPNShGLtzkKGG8CFNNtH5a2DhJiJxR8FL8RgFwgnGvFLk6jrN6",
  "key21": "aBu4KvtGP8QRdHBi7EnsFH25iebSW3Np54hWxbYbH24UUWQpm1BH31ne7egEbKn4BZnK92g1mwRWqsSkbyNAt7h",
  "key22": "3WPM3WbEcmMDR3NbKk4hfn996dkuakh1MWRVNHycUcZmYbvWGv5hU7j1fYEkg2G1c8VX6YvwKt6mxgqD2Cx6fzg",
  "key23": "5jjNCJb8BVbo5StesEsja9pNN125MwdVzQ99sBSNvrTYdsnZ7vSLHHrGrWLL2fHFVayL2qPJfArUB3PFv6oADWc5",
  "key24": "YAix16t77aEBWCfGwMByLkJABsQtNjMHSXbCwekeqMYtDrY792wi9Pqcfi6yx9o91gmR92b2cTC3ycQktnofnJs",
  "key25": "RKALQiTbb1ccapNchuS99rsgwtc3zkw868RhD3dTqDk3amuWqWjpxGHKgKTCofYoqN62499CSst8hsjzjJXMWnZ",
  "key26": "3imyUzK9Dc5Eu2ntmYtpcuk94yotdHgBGYF6jSQr9wLeG4DgDdZ8iqRJy2wHvJZUbXqXf7NFDhaDyFZBUzxcpGcT",
  "key27": "5iF17Txxu78Yd8WNmjZ2evepw8zFwVBVotJZYgwtiXZaZiG2X8HkqzWgHrWWMmUjJwn4z11ZHNRbiyUa2gNvDtSD",
  "key28": "36K6GHnfD6A82J7njEE5DZKD3hSSM3RB6qtdAxLTyRrCbtTmwAMEJMxhFSt3ynSNx79zhtpmYkTuio1xawTKXUS1",
  "key29": "43VXzNDjSszwG3cEj83yNr1Qbpzjcm9ZGpZJXVR8kdVRdbxVLTnXzYKWt5Q4wgPJCp3zJ7VVfvjXmzmVqr7RvvBL",
  "key30": "4TfrY37bhUxEfEBNYnC49oGcJxgTzc2rhT34NQx3JvBz3dp5hcK4iRCdhDGxeNa6Y979yFYV3p2vQAfZU7vfsU8d",
  "key31": "4wvgKVd3pUFwSZrfkqoSkdfcgGrPEEGYWCG8ovstSrsSaxhNqngXxTdhNXsN5XjF7St8sPTHt26TVRBdYwzTKwk7",
  "key32": "53HJTbtVszRYrt2vCdhDDVdqkY8hiDe2XJPopnVKthf1h8wsV1C2kh4rd31335cocsLAQPSucFiM3oifLP8M9VBo",
  "key33": "3w1h3hXaUss6XeiEGVsJdykWFnA57Vgv1kAyjPmzcU8HmC28jScoGwEJ4FtsAoYGSFGCjqapsRvz3Q7aL5YEbVoX",
  "key34": "3q1scStnn7GqULSmKJapuUHx3rfwFkQ5D6yfBk8TRF2wiUzzLdWULJvUDQrfXQ32gP9Azi77zSo8oBWkuNRS9QFZ",
  "key35": "5kX4jZc35xXUex5F8NT8EAiiHRRGS9Lpka1NkGjfuAuZUfCseuwD9hUKS5C14yaF2tBuUrsxBn1oBpJrDVJHiQsk",
  "key36": "RkRoevhJEZPW8z7M7nAEUz4Tq57HFo4vDsR8PEejcU3iyUqudfiXqh425iyog4ToAKLEv4keDKeTsg2NboR4aUx"
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
