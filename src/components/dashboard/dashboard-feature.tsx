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
    "FeVVV7nzbzbT8pTqbwwJNBuua185ZXUZcYUqHir9hXFeBHrvYZ2LZehfrWivQwfoaNZYz2SSTGXwiioNoEQueAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hJzsJEUDPUmWceMYcmza6R3GJt5bDRf88cYA2ZVNunTfBHN8QrRrLq224xeWEARgYtoFV53WQ6X2bwwM4KUP13Y",
  "key1": "2jEGdz6VnBArSJsFzkmBnHBJ4XYK3YCPrmxY9Z9Dioc9qudFCyF9n9KHr7pTFnskGVCiywmQ2q1hqahcoB9SEAgR",
  "key2": "5FRFtqwRQkpVNe92L1HvZGKEANBjADT2FQArm6zEGT2RNt1m73r8LdWcZzpQudskbP3jzQhFRQ4zWnnBTRMnct43",
  "key3": "uAmkkX4iryLHC8ztPG5ZKoaQR56varUFitdS98apNxafN5k6ftRDwCaULFwZa5LrNCBay1Q61ifgnqbuZBtov7F",
  "key4": "3wEJmBmMEogyGBngMBG3ZMPhPHRPfZmn117D5rEpLKnzEQYsr4i9h17EwKgrx8f59erjNgb2Mw2r78umHgNEYctw",
  "key5": "4Rb1drBf1xMvqgBJrvVozwxuAbUHbhMB3jKZZJhYvrjQ34oA8DArNiD1fe2yAAhx84L7aJTiHUnRv9z6Wxp4CqkJ",
  "key6": "2KkaWen2s5yLgUKhJMsPxsGBswCNWw7pYLnTsAxd74VAChjMYnDWq3bPpPKGBjZGSCCTqJmdhHE2LtUJbdKuDpHx",
  "key7": "2tUcWSZqqELTGbPRFDqAtbRCCHjKhBxPvQ5uXGRs84HXKUuHRwaV7RHKcGC4TCFVw5uBHFTnhvxuGvHzyTMKj2mR",
  "key8": "2sNLoGsFfAHPYEykXGE6cJCfS18ZhouYReXJect8TMEuLw3cw2m2krhkZNhZCeA4VX8wVwQKLMzY2X52qtAyNAeY",
  "key9": "4JcWVQv5UhoJMn3cmHoNeebnbF1zdiC1VaCuokA4cMLECUhCyX5SVXTqimGVbw8bfM4tHydmzcCRcTviqmp49FP",
  "key10": "5h17UBaQtMPXrJqkriwhAsrw6uhWe9uEaxRf6EZKMKLySvwBWefUYxEAKgNqSyrwNsYxUtjGGaky5W2TjB63jD52",
  "key11": "5AFMDy4rVNnYRWUpJJLVFqXNvWn96omFQKoQw2ABiCLPpH7bdiUcrzRXE5JvUcFySehVsNF6xad5rrUytLU95BpU",
  "key12": "45eR3fFUH3bcQPHafmPfbVZJJkrdenAj1dvhMYcjegF2w2gMU3ZhoHPh72LsJSbfvPQhukVoCzhh3qb33TXdGBrf",
  "key13": "xrhhgTJ6ktMS1CFGakQiE8vZj1WEohA926arW8X24vCsTA4RoAs7Xm8P5XXNabDX4hCdNFBurKNnwMkMhFWedoJ",
  "key14": "gQPqkd42zN1Yrgda8jMhBoMW1yHBEyRrwqZVHyvRfKwjMGLrcVdWkxoVtTqGBFaJCCaqUe42q8qo4fyDqtrFHqr",
  "key15": "3k4xLmc8mohM1JW5UzDfJVtU9vEXnCYJsNQPtCPxov7xZrk8Cta1DFYWMvmLqaCYcZYeE9qX9ESjyH53SC5Jb2yz",
  "key16": "5VsBvnTESfEPyY89g8VqE4UNb3xSqD9446md3ckxQKxTxvvc8A4djyj6oSwMk13uqPxtPeB6UP8KHWvpVLQeZcHA",
  "key17": "5YfW3w8Qhh5z5W7JPDn93o494rZ9fGqLyDLDz67wTxt7ZBSP5huZX4MHaDYwEzdnb8F8g9eCAuwDk2t578MpwS1g",
  "key18": "5mVpXT1GkRLoPRfhymn6K5Nrj6qePWir6QbBw34WKNfL7TC11sbWntFg3YkwrCAXRqPMQ3SKzEG2MpxRindunzMw",
  "key19": "5qhzNs7CCNH4ge3q4TbWHDUWAYDQYdukVhw49C5sLVRpbXMfjWWZBJou9RgVj9jVwakn9yRyEv1eCnKhcLqKMxM",
  "key20": "43NLkTQV9FiQqANo97WjcksHubdi2SNM8zFKe9gWS5soUtYML8BHVtRrQXzhfJfapMSNi2SQxBRGw1aPjC4uRcKf",
  "key21": "3YgpZnrWRJfxJZD5buQUbyEWny5zJCY3WKaK2dmqUrhrMj1hGMkvYLmV27VUhv1BKsbd8eD46g5DFw26CGn7XpuM",
  "key22": "2zn6WB9xkB3oE4JWcnfM9z4MHDUU22VYLn6mRYjUUkyvbLDKWUaBabzKuytxGBLtDVQCAkpVkBQScac35B8QADGx",
  "key23": "cUX6BjcpP9z9GG71dcFDH48hRAa9RwFRTT5svQiMeNsBdf4qCggPHUYTHmbhrZj3nu1HqYfYrWHTFhfkdJH6LdK",
  "key24": "3CZKrH1x67kW3vpCMBpDJGfKAWXzASrFBu36wCENA8A9jWPMtGNiCoB1E46kSixuuso3XjpVNDbQ7g7ghYf89uJq",
  "key25": "2EJre7dhMArWTV4i5JpSxcUWoF8xpppcuKLj58tMYAb8M8mASGASgdMaA9ATiwzt64ZcmE1BE5uNZdv5Xhm3GZZM",
  "key26": "4dQG1YHUhXsSFohSbQo8ozEBqCoF15WVYLH7NueY7eTgMyWzCPc8pzT13ABkq8vaKYwffPEpTE6oFjrvGnexqzzu",
  "key27": "VjANPErf2HfBSehJq1yq7RZHVfJY78mcCFroZDqMQty42dowiRFZAwdQNbV9XRCyoZ4VpA7iE51bB8oMLpsSUoK",
  "key28": "3VrQtikpvioCjW9DzGG2R9c3z84pDCntuP37ux52chB6H2FWY3uS9oMJp8L1BNTRRD9MG2CzTbZgK6zEr3PBv5NT",
  "key29": "3r6fKEDx92X8UPAaef8ix56g8hryK7oEEaw1oNXNRFUfSxRt5XrrQaneLttci36EGCutuani6tuADsan2Tf4XV1y",
  "key30": "41t1PjXmBxLsajYwzbxoKPjFeKpTwduW1RS2qdd4gbhpD9GGDdxUoCDdmrdRMNHdz9MgRShqtAJASYxvWsNsXfRw",
  "key31": "sw5LNznAap2u1rZFd7dHnLvucj7dnbxKcL7yT4yqbESAe4NGnyQUxLABCcYbERiddQfCkK4MM9vZbo2QXmZN5Ur",
  "key32": "UoN27FWXQycqmDBNFHVQH81pCYdNMdYmX32AYLjmwq5aMuxNbo988Scd3Kqmo4XgZHVgMd5ANsbnHBqz18pFsnw"
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
