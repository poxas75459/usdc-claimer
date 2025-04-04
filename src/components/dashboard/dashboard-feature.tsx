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
    "qbaHZ8Vt2UwzfwjWpDoVuohr3grQbDgNTCnJWimQiFWVfyTgz9LqgoCJ8TK6zihCaK8YqCe8wL1Q2pBGKwsyQaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zdwP1Zo9KdwQANnukXy6CmKM5oiicgTZiJDWuF8E4TWx9htBZmJPNmknnfDtmzm5Embyp528TYVENvJV2FkgaPZ",
  "key1": "4NVHeiB7v1dnUgfVRZgs3Rkjj1RaQisDmTaG6drz41juGETj1iABgv8Cv46HpUns8urKDvVjLY52Xiq4kRQ7eCwS",
  "key2": "56tdxeScVY5ChQDsqt39g6ELXXqqzZ8Bs1i9KyXbqRhCtihc95Z24UrTNbrFWFtXfWFEDJyDrVMiWGrmvyQZeCu",
  "key3": "5Ji8XX54yNp3akF7KyrmnmHrdPUHN16XxrcLD8k6aXZDjrXtZWJzuXGfWXc38VHJqCiGXWiru6ZHfXgUjdZ9bAqi",
  "key4": "5i5rHTHpWVjQ5xJgkaSVSPJLSfvrDPnX9rbWGyEiVuaRZyiNRvPrBkVfGxvxN9TrZETqPaUVHGtuK6chydXckVw5",
  "key5": "4faneNcuy4JSG8RLKyyfY9s6XENAiZNFg6E6biYKAebSkpjxRpef6xPJTD4aLKL5LjebBduCcjMTa1Ld47nK8Dp4",
  "key6": "4xXLVGaA6EDz3751c8WAsR3Tpt1kxHRn2oSwBWoxP1pFyp8vwW74Rn1vB9Po3oADji8mZDftM3zy2mfUbnQayCcH",
  "key7": "5p67pNjEySx3aEgjEfFP7V334LYRQF91Msr8y3b4GujgZTm38k5XbeFNMMn5Ebb8rcksmbJ8eWTAwwj8AZ6Yp61k",
  "key8": "3BR2ZHbYCFZqMRKvSgXAeWzKgJTDcGFSBunwBLgq3sfrKXYeBh8rF2UPJCC12V3vrXB8N92NRUpZ1t3ZmUYaczgv",
  "key9": "3U4ZmmAcMgSPnGD2wHxHnBG2vFBPFFTQVAz3ZKabR4mFnqRGQmQ2KcfJFds9hnUKicAcoo4sJuzT7MZbKFG2F2G6",
  "key10": "42nMqZEAWtSYqxZ6mcpZ12inh6MtbuTkMHj5KfJPXbDnBjSv4xaZbMD8Bxfs7aR2LeN1u7sjsydGqMQcqDJQwjoW",
  "key11": "4uEPxc9LUR7AeuuJbqEVmwZ6FiDUAvQsErbn1CHQraRJTeJYXKM2ybjFbAXzaE6br1HDcSutic6vx8BdQFsKfcqd",
  "key12": "4x5DF69YmVaz2t68yZgXHB3WxFLqB9cYRZBp6gLg3U67U496Gbvho6ExQuxZfYpwzbd8hvgxT5AC7qQZH5akUYYj",
  "key13": "4Fh5VYWcn6U9QAyBYtEo8o7M1bTqQt8NbYMB99b9AdYtsPAYTXhgmsva3ESFjoRzeNhzh1AhW2NG1M7XbqCrEw1W",
  "key14": "4YUAeVQqSTDCPP42GnteCBmStrHfLXiBvqKqSEJZK36sWhw9ac3vYBbMx2gxhfPcEqN1zMoV4nw9PBj2te2AB3ir",
  "key15": "dNFkzXUCn8XsBvUUpVURkoNWAPcHuZQxZSx23TLHDLHMMCaAjiR4UDvz5cFpMxag2WHcYnBskP3trsGoSWJqGbk",
  "key16": "3xrEUEENgfPFDYQEL4aovzzWjCxbpadZXPdUMeApDw2aXES9bLE6APSG8BRAEu6LDpLL9kHgcdAL29y1GQTR3ppv",
  "key17": "5vgAxvdpemAMjQU87Di84BvYUi7iZbeKzyn1zUMjAv7YaEcDSwRZAH75huDJmoTpZvfFSCAYGbnVn1xhx9ZjUGfH",
  "key18": "3UmNob8a1jaqqHPeDRpKDHNi45rZdqwTY2WUum8ko3i4GiGM15A3PxbcJHjj3FHy5o7nUSyBMDCKc3aEaQE6Dx8V",
  "key19": "5fVviBTNxFTwioiGNpPaegUTx2zxCa1cRApxRfMmLz2ndzF1zCsg7YwCnMUsYnFfP2VYfD6asFe4ZiSKFuoeRLwp",
  "key20": "2EfhwBoY9ckCyzjuYMonY2AGmCJxbySr2xrzaa4EnaVAv5gekrTECzUTAmvRcpNbys4wXsy5Q9DgZL61AG12udND",
  "key21": "56kijn2zfgPnfZKS9mMrrPhJmsxoPP45iRkHEK1K6B7Qj9RN6vdDMjzWjhQ3sSRZ6gt3ids3FUBK5wXhhB4w887j",
  "key22": "5YBZrEzdZnotQv7AiQHFs2NPG7Goc3nVo9vkbGkZrXiw2gch14fZk9FpbYVsH7q9qiEk7EysC66eamGwKh3ELrYV",
  "key23": "4cwqYpyEJ62PnUAirp2mGJZ2SUpsmouHZnsVwTawAnF4ZVEUFrLUWgJd3Ko5X2aN1GTuBdvSXSCDN6Fk8EMdwPxE",
  "key24": "3jJCdymBFxQ3C78b96oAKCcczqPTjtvTerc3t1wtfHCWyHRFbZghBpt9d9iUqsXZ6NkE8RrMdgW8m2oKrRY9a72q",
  "key25": "5YrNjrys7ycgmG4WtdwU7HS69kNAn8r4NVLpWU2mjKTd6rjMtQ9y26jTLkQm7gEYVL3p5i3eoDr5XrfWYQYezqxg",
  "key26": "3uCSCHscMWdtfTf5UxBVqTxSnCXPHXfafTyTrwUAJRcMeTrAjfygNRQtHokzN1fBk3tVB1M1FPnExgAVg7masvnJ",
  "key27": "4E249gETWD7ppS4bsyqM2kRGPj2BwGsrHP3ddmjPtSbpfsUco17iB9g8Nq6Le8DS9igMFrkaKkejdkZn78DidYP6",
  "key28": "ghwUPuJEtAywxTstMiSt2sE3zhPtyozg2sGCjdVzEh2LHQRgUmfqqN3y8Zs2mX26yuAVi1cGBjL2uYajHsFJXhw",
  "key29": "5imfeY3wQD8pWQhfPK8HtW3CpDXisrJtnFUYP3B32LwiqSxRD8iL3jpGfyhuXpifTTs6PKoPdcT6hYPjPk9Mj99p",
  "key30": "58zcGdfiV3bXnDoeXF8pd1Nfj8KEJhKQtP5P5E2XBnAjNz7cNhQBfTbfGPZgojdHQZXFWkVN4iKAPs5cWWRNdjor",
  "key31": "ZByfo6nrdeCqBpL6kLep7ZAz7pAP2r9sktCgWmGiUQoqWjd5JCM4ZBw3TPoGcPvxPVVSnjqKXu5FKWXyagvqKfL",
  "key32": "5t8d5HqGj9gu9EKk2AxSgMYT8qi1YhTUfRYtxjz1TAdtp5SNgQWS9zECFjTtahCZKnWa57cEw95fNr9cbsjxMGPy",
  "key33": "5TSFtgGBDZtPoQ4hB1SPRVmmjA2M5E8Tj2Ngh8rbqz1TaGR4Es4fuSy9JiaVvhBkpr4eMPFpKJKu3Z61Do5ubnia",
  "key34": "4FEUkjT4WLGmLX1BQvt6odsLbALiFy7UBtzbk5bQ7BtzehLsPaGsPe7P6xftLCHL4dTYbnCUZTRTQVG5r7eigL56",
  "key35": "3fJHqwEDSDVttrsho58ShwK5dimMWTSSaEnFa6YYDUf6ktV2exVMKVzi4Y4xqVZCAmyfKttcf1VoCBGTHCSgMfF1",
  "key36": "2YzUTcdvogoMNizxHjWhWiF2WdngnjLwfopY7XVDcFX5DxRdBMe4iYM6bsCtiX29BQEtot2UVSdRrvG72J5wkM6T",
  "key37": "35CJZpMus93QB8KbWsEfcYpFYMetFUWmF16Go66ZfVArSrRsRVn86uUNpKroajLVUGqvtTDVhYMXLNifesFDLt6P",
  "key38": "5Vx4UQscCpAUywGsM2NAPnm8CxPZ8qfp2RY7AQoanUG1rQFb1MyUtw6VnMyTsKWwS4HhzYrw8aoB6r3PnR1wiZkB",
  "key39": "3Ao6QPCKf3a7VAPG3FMa4siKvTTdqybTjHumnCSabkQzY4R9V35sUm8e7DCxRNeG7P7fFHTjXpZPfyAAKRrUAoho"
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
