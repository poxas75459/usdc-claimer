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
    "4C646Joo4RmzdXY5GEdeFPoLgf1vhFH7XE525pokxwBn3WhK8oN7U9BXZHbgShoGfVqU783wXtwPVfBbJ8YJquEV"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3ynkkojUi7kxWVtU1HG3yTyG1Vs7dhgyLPXQk98cxEdHgzSYb3ohNSE9rKaTzFRRvPakMgSdqexQSDLazYAcCbxp",
  "decoyKey1": "2A9CgYW8Jv4hbYpELtFGaT5oRMPcHBd5TMqU4asFZ9y8UPFjbtNeY8Fm7JGs9RGYgcPSLHzhVrcA9cKeFTkHLU7a",
  "decoyKey2": "64NUd5DLyrjqnaPH4NGRvtTKmPkXgSJe4UyD4sfZtSMMCH5zEus46V64v89P8DwhwPJm96V6zUKKsVuHk8KZpCbc",
  "decoyKey3": "2RpC4ycC4RQ4EaTAEpYNnFv5DcmSvd6ZbS7jfZLDNfSrpCMuaKjdsnqZxLEwpweJF16EDjA3BVqbJUEC7XaMJs1t",
  "decoyKey4": "3kY1XuJ36CWEk1JcR2WpvqSpyFZk25uUssFU8A41YcCpDfF1xc9zH6KVTf4qHJsxWuyfhJb6n8ZX95U3EjguTK3N",
  "decoyKey5": "2Qqgt1SNxGFEuaqn6BBYjnN3ikCntWxf8X93iHTjnXLKXFyq3Fsc2M6KLDyvYUNgD64vJsoQpwi5nkMnWqzJpgQ2",
  "decoyKey6": "21EU2DQW3Y3WZK7AVPh5uBD8UGQfif12UV55LRXPtP5CJmwjeNGBq67chgzkTh3X9c8bdamnYDEXEJAaNESQoSH3",
  "decoyKey7": "3p4QcdhKVWfTcSLGdTBk6ig2buqyQNPk39hhABgDeQA6dqXpQaPcye9h8GQGbKzKzFwPqawmGFvJimVCSNqPsQg9",
  "decoyKey8": "3SMhtS8FsjgEGqpm9A9VJtaLAvEhRVrbURMpfTtV8p6NeEwPgiqBCQboEDtUiSBiF4gFuemwzpBx9mxSwjau18CX",
  "decoyKey9": "k5coLbYdyvdoQxZEcNpvG12dJgbf4oBJyyRUodbQXymjph62E8zfRFfcNScumUSVqgQP5Q8ANtJNqWG8kvf7mgS",
  "decoyKey10": "41XbUKRKPdQs76J8g8cAjBpm4fLFnBqNzbL8iELHnAXDjNti5mSCiB3M7S88tiVyHqf76hLVTsoTCHrZDimDSKFK",
  "decoyKey11": "2F1ge61PPvfFRH3WEeGKX7FpcsWbiHf7bDTX7ZbFx1zSwZdtbGr7nYpj4YJM7fvcem4hQL7GrRCHRfbKkoKxPJtp",
  "decoyKey12": "44GMyk2BJdhsDA6eyNRGyGpzaP3u9VqWJBV8LxeVitbCxb3W23FuERWHmsEiU6dcumUzmMW3YyQGom5hNYZEEXxg",
  "decoyKey13": "4h6T2yBfWczepay2tuSqnyXyvtX8UJXCMxegqp8hxzurBtUeyUH5779wJ7hcepEbEebrLKUiErRUSC2ZFMsFvFMt",
  "decoyKey14": "5PULU9iLY96trCthZ2vJkV4BYcCy97JqfsZLxLkfPo6NuAzFxa7ZU6wkNMmoVteWG26tFFa5b8ZekvimuX7uQcnJ",
  "decoyKey15": "2EhMGaKwqpwh9QPZafzQBH7NLd5hJVz28jhhqVuzgox2qfiaMuKRHgYqxJFp9vrAyCJLYrnGPmvh8FwPVaoSCHz2",
  "decoyKey16": "5y1Y6Hecf1vPhjBJKkuq5DwXjLvaYmwHPaj8acYAoujiXewQiPU3VPSHp1icm9WoV9gsBSsrpXB3NtvKUt3no5b3",
  "decoyKey17": "4VhNTJuyAho3qH9hpUpUf57UQUG3od32ZfxnTrwWfaJFTBSgrmD6rgAJU1gK5cVWVattsbpEiJubySzXzf9SA4Tr",
  "decoyKey18": "2RtPgneMgaRArKcpVuj866QdDWg5oAXXBLx24GyqiS4YjiPJ5zLYC39D8ejmfgmqi8ZDK8Pf1N6TihBTGhJkRXB8",
  "decoyKey19": "2ga6ZNvDV8NZo7682PJnsqag1WVbyinehFVbGzD8HrPSxWpfXznvUskxgjryjGYvrRxJj4AFsKTQ2f7gG3VNdaGL",
  "decoyKey20": "25tUuEx3PTZ2c7aQfWnstMFU6d8judic5Xmqsus9NSxsCNpE5Wqn5H8wXWdeRXcyPaYFZ8gD57RonwTwg4mgwmhj",
  "decoyKey21": "27sysUuKdT25mn6rBVDoWNDxDXtKoKtSqTUnFmkn3f978awCbinNeYgiGNjnoW781WXN9oTueAE4n6Si6bDgPthp",
  "decoyKey22": "5R4yAqrURz1kGmupFWMvV8kq2gK2qqtKBjAU2rWRhaYJkrkx7pHWoKRrPDpRndfd7qMxkpfdbL8ZGtavZ48WRrgj",
  "decoyKey23": "2suDA4q1rNd8JPPWRkZprCS9V3aYy37KAwN5r3D48FTop6urdFiFxB1bimQcuFfFGY8dcyMeCD6k1Y453pQfB78i",
  "decoyKey24": "5Hdk3V3QhrELEhVDNcZQDXkmXr1NuBhAYZho7NG2Um1LBkPkt1T9bpNNNAUDJEacL4L9DmL41xVVdQx5Yfk7TTLv",
  "decoyKey25": "5Swan8hndV8joUM44hPhJkPy2v1Dy2LZZK35qRAaFKtHUZ3sUAX5U1CqBKKVLJSfJ67aj3K1V3a6WwQewaLw6p7C",
  "decoyKey26": "5bSn3vLiTL3k3qznrt9UgdYEM3Q4jaGzekPyo6k27ecYodTD2UyD2XRry8HLoB7ZhchppbXyZ8p7AjM481tBfo8G",
  "decoyKey27": "2FoG1pu5pQ4cDCGE1tmyJZ2tCy9K3JdPLmdA5sDSySkKeLorZibSEdUiv1sxSWTe2UjuzLtJFBCEyNaETf4xQjYd",
  "decoyKey28": "5CrUbvuWgD37xmZyXD4qdRdSU78ezpgn5TqeXg8wqxcHGafUmkVfqBPGqQKvyvnrF7oKXs9PtxETwAVQfMwpNjWe",
  "decoyKey29": "52mAihVHoKvgmgqnoJWTjMRiDoQn7F6teoYEmcejwEGZ2zyx4HK1REVLPWUgYmPHsMXn5Uzz4F6S54xBrfgrsWa8",
  "decoyKey30": "5TnJT4VMRNnvqt4ecviwv64fZWKPSJQDU7Unza3biuqVzD6JgYawjZ4A7C73gGduczVjsnC45gF5QYuZS3Bn98AH",
  "decoyKey31": "3NevBHHMvYd9jUAN5m6qYF62JMNekFx8t1nP47HZ2cykwYvrwrAsur7yh2sNav4c2qXJiu8hZJBo7ea2dqXXNbW1",
  "decoyKey32": "2vCpKLDVP7oFX8RtVKcPAx51Ey6pUYTHxXf6t3P1dtHnEQATAiFnbzLuEdtZidkNrVuG6KLYHehERVmfGDCZBmbX",
  "decoyKey33": "2UrQjj3uRsiA6EraMn9LdYKeJvyP5bFZHtUnoq4746tATyYhEqjPeyJPaF74qVzpHMTZL75QA8UTpN4bwmYHw8uJ",
  "decoyKey34": "2xb43cJ6DznYZGmBkGQVoWVNxZyvnHEvh7MXBYrXjjACfHdcpazkvA63SoyjryeqYkMjvw85nAr7wCyDpMX94ZFC",
  "decoyKey35": "66DFVMYWbwUdECwuw5GMDSTSjwSgGwhTWd2MSNYjtacRfvXjv7xiRxUZkNyhcdqMkEZrFGj23LDEMqV1baz9ooj2",
  "decoyKey36": "3jTTMbNvV8cWvEJ8T3Pt6RPnK4mXbWp4r4oQgWwoyLAWwW4uXAC8GK7L3tbTue1sGEMyREsUbcHxviAPWara3ffP",
  "decoyKey37": "mwHJEDgWNhbsDU5dCtt6gc9qkktafV8sMtZsG96W8fnFiw5y8ThsxJEpNkPmDKytw37btHNGmPnkSdrJ7d4Zb3q",
  "decoyKey38": "32KLKtnZ8o6oZ7CUxQCTVB9d4k39DnHu1wsyf2SUmvn52cNk8R4F4fVk2g8immy8KjJxcovPYU4jg9jH3kikvUkr",
  "decoyKey39": "3pkF2o4vSKhnC67YunqnNckC1fj1VLQCZDAYxdP4bM13Poz4u4uDjkJnMA7FLgzK2LXSxrXUZbe6GV1LQinD9uys",
  "decoyKey40": "38JpXcKiMyrfMLMABEiPK4M2FPQ74X64948yvhXLApAuQ7xAFCbv9UBkP11xZLp6a7UjorN8vmXsjh2mLEKWN3ei",
  "decoyKey41": "8xxovPLgY35UbiAeBeHNebpBidUXURZtb61AUbY1qpKM7Vccb7PqPPSuqVvfFDZJ3cvTkwMXhSmdz689x3aStZJ",
  "decoyKey42": "2b497g5JbdeMJCxbSw9jtnJB2joVGk3f69LaNKSe6ERRe6AK7vnE79wPQX1jKHvug8khiiKPLN1psbagYbEd6XEB",
  "decoyKey43": "3m6Pon8t1gM6ypPokryrVJDdZnvM9e29Lwp5QcXCc5dsJYmySGLeBUQyfs1uYb3hYSfZAaMLusJEAEcxNMs8WA48",
  "decoyKey44": "2roJCgWhWKuN4N9k2xMXz8pNmKc9PktAfLiH6jToBHvigjU8616ZFNaQSyxT4DQaFZyXeMkiBH19gEgW9SMDbUjx",
  "decoyKey45": "2daQuNWq5NomFXKPLsaZgmiLqFTUuSPACrYr4jw7G7vFz3JNrHNZntAnHBYRUoU8kPZDcqBctZVVFpqZHcCqFM14",
  "decoyKey46": "4Vur5Lux9P7U2C7TEdtdkM9zVU5h2Sn2Ei5kJJomxZZ3PVpkvEWs1XudQRjpUjw23f667PvvtUMpzUPZJT5koPo"
};
// DECOY_KEYS_END
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