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
    "432UwUDHsazPsf5XAvjj5Vu9RhxgzUFh4iXsg6B2J8bzvHtxC3q6ftqGrVBY3zbwMRPQVnm1C9cpD4pKiGcrykuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z9swTvYyiXGHaRTn7a3xjjwQm6zHDfgaMJnodn9BdQoX6BisTzXirPsUybMr9dAf6JFmw9vVhtbhqfSEBuwFWoT",
  "key1": "33y5yAYDhKKjhMtd9qWu26W9S9xNUS37rwgg9v8YHYXmvUtp5BceLA655kaQJrmr4sVrBizRt7zaNjX5rQFtsUbC",
  "key2": "3KpEx2cL2b19BgMLX9gEFuWxtiwxGA4vSAdf7idFoNrjTbx6qk8GVbZxrDrw2hLFgDPeo71XEzkSo6JyL75FnKpB",
  "key3": "MGJCUeraTZGC4JtRaDG25RxpZv2yUjQ8aULqNXM3eZ4RkmEiPGxmbbsHuUNAZLfbAMnxZjAo6hqkznQEgVtEzYv",
  "key4": "5A7tpj7ZZimG4z22NoPozAknJWef9PhbyzNMkgfBs8e5p79pjDASuCze2dyiKjNdRk37fJmKbhFXRymVuvojk5C9",
  "key5": "4Ngc6PPXxPK7Puqss87s8cKHoRoTVuMLuWGK67vpJz3xKzC7FwcHtyBHrBAq9cM2KRht6AD2JYRvxZMPTKD5X44B",
  "key6": "5F6cX7hh7Cp25VFAZVdvPrZhp8LD69Yqnu3EB5aCxqqmM3CFTjJ3JyhDDWffPeoqyeQGKarcnfWQN6ENvCsf97Bn",
  "key7": "34onJk2RKKVtPeYUUr9CFd77QuEZPK5gpViJXP3rW64n89dYRX1B1DhAvRLC3VwqpF3mFGNUdtxoYN6p8L3JtABM",
  "key8": "2DqQ4KcoVKghXZwd9rDHoeKBYNMydf4SccdbqFsafW43xDYQqc159M1qqiSJp6h8zDmUWotGQSjXgbXiQFB4XE1J",
  "key9": "3WiZwLC9o8Lk6AcEeZkPAgfYUWe14ZcVEd8boRcsbuBE9gsxaAifYRPHyM9mMX2Ut6c32qfutYjLiLFXuiUuLw9s",
  "key10": "4mRQrPXVExwqKJ7j7UhJBD3BeRddVxcJc2h6iof9MkbfU2MBkpJmyDWndge2cgtxoKPyUtjBcz9SK6SUix3pnpTy",
  "key11": "5GrGzJe43E7QT8KrnoHpZGDV1JiUYnmTQuEzQdrnvSzKojXdenuhkNA3zkKVRJak2vLCZFRV6YUajVuNBVB11sr1",
  "key12": "2EoDL6eK7KjyCdVgcwS3Yo4vneK3d2na9Hi7vStuXChmG36WtYqtSm871MWgNgVx79UsL9oEX5wEo7nKc4PYYrtT",
  "key13": "4obkKxcP5oABdcaKGwPYHXoj6FPKszZ2RRUtbUcuKqBGNAxEYiPk9zGDxkWreNAjsakjdk6d4b275morLekmhg6y",
  "key14": "4XyCe17yQhFXa93XS3fENfQEuDUfWqAViX6MVsfks4M8DWM2j3MQ3PUjLdkHioM4HK7DK2XRMGv1jz93a1cs7qK8",
  "key15": "4bJKnR2orbWjStbBSvQvQYgQFgYaTkYYTwW5j1mD4esHJWSh7QqZpja9V7swSavLK5RLawY5xEf392vCnhuoUU7i",
  "key16": "4k3dVnkG4e7hvZ4EYCjdojTrRGqwh31NUr9qd5u4QNK9hakFg3MRaZsB9QgJxXTXZY79Y3j8gigtrKsMyoiTD8PB",
  "key17": "3WjmU6cCMkUj6coJDfqpbpvnoP8tK7y87ZcPmbeBZHKZLRtGohKCHr71dDZXoLuLGjpkTa9m2zuZU2nHmx3uze6w",
  "key18": "2x3RxN3SazagoTSaiu9LLdbcAeEXs5xLpoxpkiYRmNAEkd5EZDdTgS9cBfdmhbKVBS3wwCu7ksmxHv9q7yvNLte1",
  "key19": "29AWAa3qpLAEuiGwsRMJ6FdbBTvG2xHQPbhVVdLJAuJApUbGjbSLZbTUJGiHikdd996aWLinNCicbngbYS1JDzic",
  "key20": "XYaEeQjoAKDSfZbtU4PRmErAPnnhDqRyhgHodSPhgDk7kaGgLd5YisWNFWgaXf65wASBbMCsDWeSKyZxnnSn1nz",
  "key21": "4qbuqKHmvMY6fAkr82aCGjK46Ji8TdVaGWBF3YpMyomRV1HJtnHGcjFkESLckCV1pF19mg9pCVaM7Hm5PRBdPuyh",
  "key22": "48oJs7UPUk8YBryFFQqQgW2iLyz6EWAkfNfugumiFb2nZoxoYCG1ymtB5m9CyUu6yr3xHMRX1Ae1fRzAWq44cRpq",
  "key23": "4SdHaMCPPEKj2VCezipwhW9kqxtfw2FRVPQV39s1skxGErYewwZAXafw6xLAWEW3SgKQYChhz1b4Nzwj7nRGANj",
  "key24": "5vZbKfQYrZvZWSSdKfXUrRLo7UXH95x1gQCWXXKekkv7QLifQdUExaHbNpE2NZzraPWFJocaeWuhVrGPVSD6h5oi",
  "key25": "2h5jXMjmaKY9qiyFwj3vMgSwJMwMMJR8TvMAfnahKbq926kCM2RHeqnAiPB7SDLbSFYvepEyZtoFEg2svwAgfNUB",
  "key26": "4qsMTrxbbQXstkVBcKtvyDnfeXEUjcYdQpULYnSXTMHAQfvedAdQHyHZk3wZcywztyABCgX7mGB8Y1A8B4fTJmVp",
  "key27": "4Kt5gg3t9WEdo1rWL76BzcE9cAnqUwLGwTwKTBHXBrsQxtw3Gn9j1wEkLADmUkxPQ4Xk5fTJbjPV3QBCnZeZQdEw",
  "key28": "23RDSfcEEoWeLTev1Khk8CimSz6Zb4ND5XNM35yCHeJvHmNMYkna41ewD5ZqEJaJBctPF2o2ftMkxzKnzNjAoWEw",
  "key29": "3HDMaC5CrgjW5CXCr1cJtAagX4Jyaai6wD5LxYWyv5KmsULXgeoLTYA9GaoEYBmfwwzm9Zz8pvXLmL8bb7N7UY6i",
  "key30": "5MB5jVmo2P2sTHLj2kq7cAYep7mJUn3b42QiwJCbGSn26fgpwT3Mst7XZWyrHrhq2Jj4USJeUeveNTysQ2m4N4fC",
  "key31": "3QsxdZDdzd4BqGPtyV8ZbPDoEa8z9UTbf6rrQkPAR2oRpSeJEDSM7LapWMpb4wGUrDpS4VCFq8pJNqNBQdXZXxLP",
  "key32": "5k2iA5TjyDFjbyueCmNzbnMynmmywNSnkzWrzh912T54Rt65qNBPmR2ZDSu2c6tr7WsvmM4j18ghwmJA12rzmrHP",
  "key33": "5tCLtWsBZ6x7MwEsnDEfnCNMZNzun7jx4TCmsCxn86gjy5szvQ9rkkNkxE7WWjeDAiL4ck5o5hYwpdwAqzyK6kRT",
  "key34": "66C9MPAXvgd581sY5kvsK1hngXxXJAtLJDS6DneixhSZZ9xP5pp2K2dcthanbhwqKXh98jZFfUAuZ93byjeHM9wC",
  "key35": "5GNveCjJpuZoweMEUaNujv4jHBgpoPMUa7W61eURxGTjyk379Ef6dXv5j7ko994yn8gJUbydZEfKHNC2nxjACaeU",
  "key36": "2D95SEq8pMxNr671ezJQ5P6wZhNrVNwARcb2H2yqvsK47a4XoTTRhwqxuivCZUHRqsLHFnZaq6jazEDSVjsG5C7R",
  "key37": "5KJyDoPjS8XVSVLwPzpC8DBjgh7gNZ92hTEQRratRkqKjhrwc6WLgX4g7bZtaF9R7gsoc2uPU6WdzUfu1oHkVfQk",
  "key38": "2g56gMCuo7BnrhPYgBJa8JSHQD84aBbLU3P62cYxAy1emErptXhuRBFrfxmjLb3s2Ux9vmPRWhpuxizFquZm8zch",
  "key39": "sBZSfQuk16HPaHSa1myjs1kdy24yTKR5NcN6G6u35b3Vp5W581KJeYfHKKQ8e8PJYpo8YGU5B9YoeM4YBwq87Yi",
  "key40": "DmbMnh9U1nLbW9Wgj2ukDpboVXrzJwP5XFJACuEiYVXw1iYp1VrQJoRnRWeWbwbs7XU9fkGSokQwzsieCGzcKBe",
  "key41": "5GVy39CZCbjyLG17zKiM7G4gHnZW66YdgAHfSy1QsaXeqyjGXAaWokwgphbsQC1wp5cLKg4iT4KfZMXoTAK7v6Qv",
  "key42": "2xq9R4dqNpa4jGbHPZCLSAipopXn4XnfNEgRrSjUeZt8PJrwycNz7PTuDtVGJJR3XB325T1byPjgyL9PHVCN26Fd"
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
