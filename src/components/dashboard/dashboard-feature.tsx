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
    "3KQ39WeBu4tFkUqgFos3az6F2cY3gfMVbGoWMvg783R4nk7z6XCJ3uzHgAFB3BYPaTKaAx5CsKCFXSuxmMxPBN8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yud6FdavyYs2rt3Tn75ajRGYcemjW1GPy5ZSo53hXszUS2h4hjy34237Uj4YZTuPsyuJrXpb8PxHYrfshqvLVx7",
  "key1": "33jwTC78zf1yL1yKuSB2nccaWJJhKGHEMZtwhB6pWaqmtDFtqYHH9DkBdaasKCBEz1QCYQnpv9uZPuMbQBQcw4rU",
  "key2": "4ZtyzoBfX848Bhb7dKjYvSmneggfgjftYb2LQvMq7iWatW671MMvFoqK9S3YM29DSBRgy4e92gopMBhZDdmNvRwW",
  "key3": "2ieEt39WEt4DoC4a6MYJzyxknr6dNFy38ASYVBJAqvR9UGkyHSivqupCykuG14pDpvFs7Kj1spd3eJh1xCG5gFkt",
  "key4": "3KBmnuz11rqYNo5ZYBFBt7U3kHrAgSjPxqKzLSAkRaChrBb4i45cvtQtyxaUYkEbHGRK7cFPzTbxKKnR4hHYC4br",
  "key5": "2RF9SfNCeJdYD4NRzi3YUcqjGM5HqW6tsytijpx6joE8Du5pDVYcVxkkbhuLhQn48ND4fqsAeebdcmJ21RB3C6km",
  "key6": "5rRQx59egCFkL6e96THETDH15Vud8fNrNRgTVfh13bNnb8w98iRyPNgiqY4ntNq9A1Z1eYExqWYW9NLrsnd4rU5T",
  "key7": "4gq95Vc25RWP6LUykagTNtgc3ndBvoWSVKHpSBR9H9DoXSCkJYrYwqbfqZAjq7XaaBxxLMtUEetVgSW3Lfzx374Z",
  "key8": "2qmFtFwu4PuGEtN1W3XzfnxCoETbWJ1uAkXtJrNW4Bz7yh7oLHWioeG3BqcRQiSQ1ukkgZS3rJYAs2LVXsABfo6y",
  "key9": "2bUMYFbUdbhWDU6JGFJbAboghBussPzeoSwpWzHkaESVV9wnsWcng8kuo2qskKDZuShVhc34SNzsiUk2jqU8MMNt",
  "key10": "4c382B21pMV9LERkUmTci7EurohV3GfGd2LTp9oLBES1VjDsPqEXwVAPaWvsgJ9FsPGKRtdHQTPmyqrGQceiQM5U",
  "key11": "46zhfLejHVKT29wc1WA1tdvvuFsAo35gXBYDMc6p6FdpiTWTPGYVT2MzmrJJHmu4TzU2GTQFMWjLC2X6XNniemFZ",
  "key12": "4xJ2ySoEdpcjyjno4negVxAwgSCmx3eqttWWcJhwEF6hp65AS2j3fUryPJ5jLrFfxVLd3AhLV2x3W9zryVamMfqw",
  "key13": "3aeHLfy9HDPmeLTjSgo9vCgumbJ2AvTeok3Zv5mgjcLL1TWs9ZARRut7RJW8D1Qdk2ZCiVfexQ8hNYUjPfu2YqXN",
  "key14": "4ZHfBNDvXJTcmbB3BAgDX385JM1yyWd7uwEeF1eKRg96c8W2up73tiE6FcrsNJaC2vSX19ZDW3bon7dziKZVBs69",
  "key15": "5RnAUN2uwVpe24BefR7Sqs7cwGPzceS6e3ErmCFbZGmfLha6zuFoKBzBUvFfjnU8uw92mhVmesezaC3Ko7ovkn6d",
  "key16": "4xSwAdpAedCBpkjVD4xJZRgN142zFV7YNSyWDrU25hwvcZ9RRQ1DWB4BH8YP687U5Ry4MTHgs2nTcsByBvDvYYQE",
  "key17": "43xFRSmwEFiFESc7UbKjjV2f8pQp5p5ZWM74duRvfewXWpLnajsbwkN4gTdRC8sq38vhpoEoqkuPKQhQeZw2acUW",
  "key18": "4e7218NV2TP6eetGfWd4uQmKZnnNBWfNyFUfLA32whmYxhnwH4z8HePjSU2wG5MMRJyZRJEZ9fFL4zGmRQ83LWD2",
  "key19": "5reCZaAWuANuPc5rwfedJZPXYzLn6KFzqXa4EhSCMSQWateZn5FjBraXLrno7wfwh6EeAFPvQYujhTBwzF7chYug",
  "key20": "3pM3eLFRcrPMxpcytMdm13u6dRBL3LvmHNMYQzftzCzFybf91WCpVQ9GNwjhe2ADYB7iZb6csrs1G2KmQoP3X1bn",
  "key21": "2vsjPK6oQUdws9k61FSLAEzsq5kY2sRERY1Yy2uT6HCRUtLHddyEGcFHE9sWCFgKS6iTSewYPzBkr3EuTc98GeFt",
  "key22": "2oW9n52Wx98MW8GWEidtb73upc45fej98A3BVrPGmSTVxakapdNL2Nvp9q1h31GVk2NyFcoNKmMRoXPT9DSPhPpk",
  "key23": "48JamAHe1uPCyxqj1Ybz5fqEzEHdiA1AKAjLrxKvkcjwhuD1p5d4h5iCiUcKYfPBYYsyYgUiVZoCpBZRMPStKZJ1",
  "key24": "4f8JxmT2hRwtX7m9Q4tWLJhrTprWZWeTbwyk18AozDFzBiQNUwhDcDkiPxbK3zjs1nmWpaPcMN4aAbA63jzVZxj6",
  "key25": "2N5tABfcx7DDZqR7AtfcAGMWvpCkMA1c4dxHHxyZgfwQg3UF4ovjjX4ULqYHATwRYYPjEPTD6aut2Kmp21esMbmZ",
  "key26": "39kgEqjCFtX5YzQwK5fXtKTzpogvnFhbZpE9GEK93r8sXvJ4fhL1K3669YgwzHK9gZUmk9r5pKoEEn72Xo2VU7zY",
  "key27": "KZU4AVGDw1VjSeEBeU2qbdGTc7f2ViffaaujJwsWzowdpGJxSeAoUGoinQLhYvt6shiaS5yFoxotT8D62p7UfCu",
  "key28": "5sfQyT8h7xkmdvkPMniyKLUbht3TEGxanvjV9N9cRGEDqHwpfr5ZwBqyVSfPqJryLnoq9LbaQejiddTek9V52koM",
  "key29": "4oXfGkveh1xcr1p6kcDSKeysu98p2duZFZnHu5SbA5jchHDKqmq6KfdxGrTQCFzVXgorMGCyhHWfLp7ueHpvVCGL",
  "key30": "4YizQJS7xhDRQhiAoKDY15DrXhgCH2uvLjLGy2p2rdMVUtf6JX7pQpgD13jfYTXjXMAkMt4nQpJZAq4JQh3Y8EuW",
  "key31": "4u1fSynHJmAFn6ejPDm2L1qmspiWQngJMMHjJfyZ6iR5byb12WCmxCZ4HLDTMwzK7iNywHwa6GVrjzuQwVTLmX3U",
  "key32": "5tDkwuxGEXKYmpvuBCZsjCcfktyyDxKvGpMdaivR1QPoGgkqTbgEcAs5zWEjLSLSpdVT9guzqPHw6beFLM46fW2D",
  "key33": "5D4fUthgYjbwu8oYmMhHMkYnFLiw239dPa9PKDBqXrcVPc1chv2p9PNvHC7MEQLxaP3siCRGAgkCPJW8Qo3n1mtg",
  "key34": "NEFnV71e59tkFwDg6NuKUWdhxQxwbFRoPqwTDwJyCCBHzJq6uKRUqD6CQapmvxrAg1jUXUX6foNkUAUzCEJtnsG",
  "key35": "4ifvnSRx93Q5258aBqzWzVVgcBiW5pKt3uWpZeYDdQJJWLST8nCqMTirYWhmfXNEte8QJRh2TBjRde5gaat8VTk4",
  "key36": "4pHZj4K6Gk35su1uVp4aos5Uev2YPeMQSZprXGiD11nZkiUWMRvGAogAAYPiykAYPbkNhDoLHSt54mrMJJbFRa8C",
  "key37": "4QvCeiTN9HmHAAACHVEiJZXuhDcEbCDuGV1U9WCAMKUAMVzy8vjSDFWK2G3mKsGGVmTy3bCqskRTg5GjbkT9d2YA",
  "key38": "3dmaUXmv7RDpjt8S181htZwL2Drzc7b4LRNFMkJExe3NLmjzQQ7Hcg3ML48Wk7VPnWzmnZug1ZVXkoYJWr6NMstF",
  "key39": "4ran5XHpCU6DNJ9hLmArTuawAsETJnxPWZtPb6J1GJoDQuwtsTVLm1wCZon5sqZ8GAYYsFQGsDqGtK59aAfVEqHD"
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
