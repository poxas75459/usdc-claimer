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
    "36sTgEdCzPH5CVXyjaFrake77GVGxBCCbfGHqJuYxMZUTaGLW3xxDVYKrGYWejEH7fE1M6XQ6pjcS15sHsvw2YM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAPaNnEqKSexPKdMpDkvKfDijE2WCqsCX5aKUaoudSvMKio3PhP8keXDfKYWFkRmCQComwHaGSqbh5KeEccGv2S",
  "key1": "Kb6qhSUgWNi4zyCabcpwG7VE5VQkQKazNqqW2a16qQkyrT1G7VZ72YY1kfJ1bz1g6yYBCWAekEHahENxZyhYCNF",
  "key2": "67PmsGUdvPR3vW9EsP1GUtHZZBHz5nk4nSP84CyVZ2grFijaA1gQjyziQThhThKVeUqW3wX8aXGhUdBq59rAwYKz",
  "key3": "2dq8YyYwsoTLKGh4LgTE66Vk1FkCRSFLb47zR6kitDje6Rih3CfqKNSyHeVjUH3Buv6aMVXThcTGHhYmgw7HumcG",
  "key4": "36EnyNQXRXrvWaitLVrDuBrRRdS5atXrztCeBSkMEeVGLCwtEg3Fya4GxFyEf4uHvtRcgjVKWmAgrfGFTZqNynVh",
  "key5": "55wL44wBNx1dqT3zbtNkwo7Et2KCnU1c6nKehL9mLwZCyPVtbj6UAzGLgBgjQhopZz2uGVzzyfpWgofFSLFojUih",
  "key6": "3B1C1FT83ZVtA8AM9Kc1tTh7h1YfucFyrgc8sXyvkPF6LsJ4b1fUEq1Nc131JS7fMeQd7B7Qv5xwsmQcsjU9ZYwX",
  "key7": "4mxRyPzCdJo54QTx754sHNDVJSXa3UZazmR1nYCKspxuqbzLsVKcqfwg2giNgQ5oxBn4B2xyJSRkdPVXJwv5RE3c",
  "key8": "3yGZVPh8NuARMaLvKiWbmGsC7qbfsp6pQLMC7ee1Pq6g7fMESHooGcXaExiqSBFchUzMxuQgrVafyXd7d1LJgi3u",
  "key9": "35eZomvf5a4XR3hqMBk3nkYvGaVe4xTYU2YW4GTh5QZhmyje9tkhkSrjdMHj7EkbFS1WUyiM6eLMfrvZePmj2cim",
  "key10": "24S2Ljju5yennfFoAdt4wevtnKFoUm6puN7JK3S8z2EykVank6sykBdau2Y47B5UXx7Nxss23FhscnEuZMQP2D33",
  "key11": "3xVnByjnxrbHEP19zz5QfsxJsBqRiSxwEJNoxDjjkaBVCbvxRPVMm3oQ3u22nchFUYUNhnQULXwhPA4gCfHX1LgK",
  "key12": "5LkaRDFHwkTxRfoPnUzvafQZdSPRNSWBKwiiZYwCxfQgXVRwrjNxfha89eo78aRpGo5HU2F6NSn8BxQ7y9tJTKYZ",
  "key13": "AMx6vtVHvUaLWRRGDWPZn9HChVY4ZEry3XxbsrWD4czBkpmjE2QRgB7hX9TSxTHLUF4SbEr9ijDC4c4ZphnkzKU",
  "key14": "4LEhnwz9yGkPw1EJCRjTrjunme7Ca7Y4MLqqcUv9SFG7X4pF4E9XWMXcAPWaQN5VYGgToW8fKt1cKK8Kdm8jrMHF",
  "key15": "2vhwqRgJE5eaJdKtuxqkkjga8gubHXRt1RUo8gK2qRyiASAXbzsBDuYBH1vQd2mq6n3fkqGL3vt1ErirwNJED21p",
  "key16": "mWXK3W9yBe9tt93N3nWXK2bWgD6zr2fF4bWVGX9p4wYjNRGTrRBhpz74nrA1i8yh4DvhrB8XzBRyA3FedMsEfoc",
  "key17": "4am87PDABU8GNEcoy9Gsr6G1ZY2sgqdGn9EyKxV7MX64qDVnoroUF9PpHeR85tRh9qg7D1vvATP3zXFtCTgeEyQU",
  "key18": "42zqStXQLJY2Zz2gbETq8ZMucdUN8fBLXNbF91vFHYiXrKpwXd2WkjMqFWqxgV3rGWvx2GmugjkZUerunCwEjVom",
  "key19": "3v9oM9BNeapWWTgz5fKsDmLypsHQJzEz9H2uXijjMnbwW5q6ebp4o5c7U27Gb2p28PbWzaMsoVkonprP5aQj9UM4",
  "key20": "FNmqQ3RmLNeDcJXkvUtu1HacWBEdfJ89m3GVzeWWK9JL973KGEgNj3yiez5pjiB7y4v24XhTTh8nGk5bdcPmZBA",
  "key21": "54yatwrLPKwXHX71qyyRrhc1FiZ8bbVf61rqbMuFpkhU98g4VkcKrBN926yHhKTKfjcT5oZYqSwrF253S3Nj3wTQ",
  "key22": "5Pe7rnoU8DeiYPH1uRdPHwThHUchqECZzaw6wqrCQwvNe1dRaPGasyALrNmFKmujMPHe77DQBqhMKGdgFf9dkDCx",
  "key23": "2vt4rpVgMQsfKS48gamoxsERVg6C2CoaYxSxsnGumDB8EwyPGRrczYVzoHXWZPuo5GUytBMA4JVEzGQWAg3Z5wvT",
  "key24": "2Lnuht1SzYx129xbt6Wfea59jT1WGg4XBXP7JdEUBa5ayKbcdiEjg5LKpJc3ewknXUT8kzF7Qw648VyYbKrWcd2q",
  "key25": "3KXJ374DYMdJJrUSEWpoFkrntppmL7ssrX2AekkKCEi4FUtmnjcMsUAbBTc3c2i4ip3Sgs73h2JFZLJrd9msV3eG",
  "key26": "2hLA3ttfe3yZHMAX7fKHqiAytfcndW9rHsftmFdWwxmrJjPxjPdcUuGYPhPiwR8YX3CoWTNagaN7X2HxGa2R5NQg",
  "key27": "5M96qkR9K2bfDXpmXKQjwk6KJvzpAAHnakiJfmkXwpDacJvHhb1svERVtuzH5fznahpX52KKTbvCC3kVFV7qmJaz",
  "key28": "oSq2ykNah1z68WZUc3ZBbhHrghzmyDQmXmvKVx7Emm6HcyGMvQNVQUCDy6nSDo5Gdj1yeriX6AZEwrgKbQcayZy",
  "key29": "5sbjbjJ9SaGYPEZ2TY5VsxfC4W5HTi6o9bs5WNwb8uadGDVeNEB8rZBDp1SAs9QR7bxu4hYMXQqHVkvvVagqDeLw",
  "key30": "3UmEfAA6xEAAdTPabTs4u2gVapyLKrkAYMav8ziDDcwNVRNuntZesoMMT2tAcJBqTp344hv6VHFHGziXJTefLmJe",
  "key31": "23JpRT74M22Ur6e2GgbH7hFebkXgxDS3t8ReGxjqmmxssF6b2RChYE4N6kyhWzBBg3xqQnXXiKZHsWiBYXb2Dd2c",
  "key32": "5F3Zv9ifetDg9BrMAwr5PyrymeXoDBiKZ8ribyn4gFpQU3uYMdo4Bf18azv3aPfSiCxTbakuYS4tJem1C22K5yTF",
  "key33": "4McDmEeg11yU1FARCc1w3AWfJfNHhTg3YZERJXV87vwage4jhzohpPdeYhaCvrWMa41zrcx1RZChS8p9Hi7sUWpx",
  "key34": "2XZ95d93MCf76dqteG1jedg7hKbfucehyqX9FBrDdFhszFYaPXcX1AJAJShJNd7oVdwiVkxGZfF2pZazs2VcMf8u",
  "key35": "9Qp5jbXqpFQ5WH3Dm9B2b6mVCxswePRTxGX7bY5MuPE8JC2kezptwf4bdZZPWDxKnH3qFYbkiMz1zJ8PrTf7UHz",
  "key36": "4DYxVvgk2A59KcVsFhEogYLCPMsyrerCsmSFHS32J9Q9Zfjtef5qmUCWLNFgzYHZ9mX4vCBvL8SiSaTPj5F89z66",
  "key37": "5ZQQW1Y9NYidcp65oXe6MT2jekS19NevaCLwiiDM7LeXdDnFgSwtQJWMTn4EXnDzchmVgxy67J71nwg9GNXYTExW",
  "key38": "2rwimmHSLippN1N3xFdn2owLrtMEaF3CgGn41Zcc85FhTFxY5JKnDTELDpPRVnwyw8TH5gRvbmn7iuGQm8es6nNo",
  "key39": "5k7fBiCtMNuCEt82Yvh6kN1cB9iEv2EycD2uPJ98Fpk1XASi6Q6epZWeTWEnXp48jrpwYgKrkN7kytCxev6NxezY"
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
