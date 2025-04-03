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
    "28N3U5j2qgTD9ipJZKNxyV187moCyepfh7vykjBeA3fLQyzk9T3ogCeZAF544NUDnNN4tEGqEuEC4cqbdJwX6Xky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FoHzWC1hQP3jgrau4ZXnNQRgDx8p8RLKWwC84Vi3YQMBUVCR2iQwYzMYewPnv2pnBNkNNQL92qCrKx1rFh1ikNq",
  "key1": "4RNfcJS3xd4vZ5VUbiGo8VmJRss9N9q6sJpw9PJnGNZK5pa6AoGzHV1Shmk1EP8pBmMvoM9uVJxrqPradHhNqHHk",
  "key2": "3oUid8o8TbNQKLvTXeobAzYUPukxFW2UdF42xGjXLJZEtHzwruXWgR8KdnrDRX3SZQWpzSoYrGAYsM9L8bVakocV",
  "key3": "3BSoebfdGFeYnej3njqMQH3qiQyEnpuKuFKPEzjTANj2YfrmRBPGbJwfCBqD2y32R37k2Qpyj6MxPSZbcpvm7WBT",
  "key4": "38TDiGa9NWiQHyHwcnncyAbaBVF2w9bScTFRiAm9Tqc9XEv5CDMSXX9mJrJ9kqz3VpypVT8ycKbAMoieX1xeZpnc",
  "key5": "2rA92KUMsTav6jwd9LgLzxh1LjhiY8WzxKXzKs9nJaarefQQyh1CXSeK4jGJwdp3nLD1gYBbj37xGpjipobHUwaV",
  "key6": "brbdSenp3zCzQnWESZU6fEAsFWAZctj89GrxzaV1BGoVUMrUw4z6o2BfCTCgaikJk7C8R2GVTKCNGVc3CoX1bTC",
  "key7": "4yV4LNhjpGjZqSjMzE2iAVhkGgPpjJen3zWWwCxi94cXSPJcz4Ur2U88y6izh1jT3W6EqoysKSLX1Ceh8VYxTn7G",
  "key8": "4mtS2vfZhGuWRLKe79fFoA5g6rXiDKPuLZ1aQR2LMKKUbRuMteZbuZyqbCwQvcwMMGvxNr3g8zEh58jLLZStV9wm",
  "key9": "671T9itk13KrYnpY1TU3LFqDoFtMnrygFQTmdJerGYVxifFo7fT7XgDH3so62etLfvFvKBSJ44ZppQcTbR8nGh5p",
  "key10": "5y7mbVP54j82L8cDqeDYxrLhY7B2sFZfNbRTGk85aeckBAG9Nj6M2rRtkvWa2CxNvoDCoUFn9f3LzjpKiqwUshz3",
  "key11": "NUnDor9X8nEDvgT6JvkCWGuBxc35crsDYFV4C7MSqV6A36xQwL6ri7LRP7ERzCNJANFZt5gSbJttKe8rSBzjroq",
  "key12": "q6qASmRNB9vGyqtshSAnb59UfYGcikpyGJJdQPkUWLMNgFxQiqR6rbKTb6ETH2d7iHpsozLajkU8MFyfctiF3Z9",
  "key13": "2S92ZHotcPf532h216TPNEDZUur3BKVLFRhpXJp66c5mD2WcyzFBFRLGik14xcCDb1qY9424TXPputZAPeSWDcmW",
  "key14": "4UKezACjcPsPU5EExjC6a53aZeudx4fzGnD6SWRwasUz6jBvymx4cU9ayNWBc6P2EKpHKzYe6awq2sKJPeEUd7Gc",
  "key15": "59dmEeywzD6id2m6xasgaB9Tqxy2QqgNQwpR4crBp7k8YRmkqnn9d2m4SG58PHwPfzTQ59ENtyWdVNPw7fhWsK2F",
  "key16": "K3LuygKANFWFBmVdcFxN6tdrWSJ6xJQ684gBZn4rzug8A8E7NM7P1kLTMVqURVEfsgqwEvYZyU5Y61rCNvxvAF1",
  "key17": "3tbMJds841DN2Y4hi6GwdYTfjbMf2EH5usDsUNenZsobBHnRd33X9K21Xq3nKTEbQvsrsXdQNmVR81XdvJngKnyx",
  "key18": "iFDRgsS9kBwZ7Xnto5Zj6D1TJSNT9ckMVuCQszF8GnScQLcJAdHFaqqmU3zRZbTMPwvTWZ99mRoFa2LVtHFhK1G",
  "key19": "exhF4aKUqe8hfPqW4XjNdD11QPzs5whayk1LqvgeQinWmo1kutb7xUFPRKZuQdfiwePTqcuwAuGNyeD9RnH5AWH",
  "key20": "5fKMP7SJtfwg1Z1pxupdCy8U5eYLqoxRA7bqbX7xak3Vjh2wxvUxG44vub4APbQxjtFgPPQFH4a9Z1RXpoCxFNBb",
  "key21": "i2wFqfBT2K9NtBH5i8vsPaYkuwC695zN2Zt4fzKWQznov6Xe1gBTirT2v5qbDsL8iKdco1hnFvwsMJfVerhENN3",
  "key22": "36YzqXXh7UMnrJ3qYmjkQSvoqCEuL5Lyc3DsEjGgxcNQmaJHdXDzFfqe52zvpoStqQ8BmDCPzBJUuuNykRktxkx1",
  "key23": "jCPEyCYdqBDpe4C6to8gVky8WaqqDmDdTuyXFMSGg9MrNTAruGym8G8qDf4USRkT9aP7X2VUeqKx6kYZAAtcpRZ",
  "key24": "22dx8i3jTbt3hDBZS8ZE92bFZpFvNR5nWngZvCoHsST56BDGiGJ1xpbbR6pRFR7fM7Q8LxnoBNTFcdFh3ta3Y5A6",
  "key25": "3mYQLLA8nKMjFu2NubWjdgGd1cGWoT1p1HaU26Eg7BiSdhNGVEiBmwLdoX8WsQdYCVUG7sUDrkm6qdRMvcvudMrC",
  "key26": "4BDGtb9MdRpiVEzGb9bofcSZn1hjc4JQHsNjg7HRT6bx94nhUEnkaDBAtf6DqxSGyafgbUJ2FRYiEtC6DxydMf8a",
  "key27": "BmZeJHTHr2FiJVh829ErZEin19iFqTGG3JFz3k3ScnQtCZWhmMcXz9jWs7skZmyudkAU75V9qyWaFwVeUHjYPRV",
  "key28": "YDJ8TfgkAbzCBhvSRev6UMG1SPPP2agDR1PETyBFdboZznYWRaNa8BAxrxVPgEazx5VTMpJHJbsuk9wDV3sA47h",
  "key29": "2Hb6HQPniCEqcVxxwNtZfzVuHvGvHkyBiRLm8eGs29dd3Jv5X7ctC4bahHfZPwunFu4hAcwTUQM8oUi4bn1bhFMc",
  "key30": "2c72o9pUUVTM6v7AFki3ddxgabH83ChrzPX4z9yLEpw3HLzbzxeQzARamdJvcV1gpbg3zdhWMZiSRyE9svJ3zqtf",
  "key31": "2EjJZvnDuCPxaWs9QnWKQk6WFfMd4rS63ozun4o7zvMWFLYP2h3j3RWDS6BfTHBf3qQyVBtu6BNim6QiwdwnZ15n",
  "key32": "66yFgzvPJ7zZjkfNwHxSxxQ1BKvWDWxTpJuj9HvY8EzFdvKMYycSoKUsciA3W2GKNXVe1yALN1k2D7a9X4qoHrgb",
  "key33": "BahjtH5aeD6RQix6qoucpaEdnusMRobAqmGko6jabif2K3swttSBK3sLLisbCpftWXrjGuqmKhYeCPGwGTAxaty",
  "key34": "52aMB1YGL8wELn5P5BZSm8gyJFvzHzSRU3wpdPNLmQA4feAeAyPMW3gjE5wDGDPtVwU9CCRv22zNVYu9tE8Wb92X",
  "key35": "3wgZFPnozdqRLzXUAW2Q7C1AhTkPbPcgMeuXp6jfg6yEkGwG6Cf3mmxAe5dVW4E62qfYMWD1EJCVy6oLVaisBM1m"
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
