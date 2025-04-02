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
    "44Xoc3ij22Y7ktd1QCiec1UEFzH2JrE3yFYg8kJd18gKz1HsXfLDjsRNBuud5TfTJS61gdaAbV5KX2AcbyTgSc4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qYMBmACh6cRMgj6pops6k1Ds7XhrXD4qZFEQuQHbHB4Ui74d3gj1oWpjKDGr2FWZ3UAfd8KMLRJRNmjnAYumsVc",
  "key1": "BPnEK83CPineDhUyGCAmcNu84GF7pahHFTckF2rdZAnQbGkWDvBcbzwR7WPQvMMkhp3mgN3sAaCYQqdXWnWtiTy",
  "key2": "4FPf55QDXQTDeazW7di34yaudCV1w5deyw3BHH3bTnGB911iGicWPHyrSnk7NT3z6V5k5BJii9vBUJuKqeYjZCV5",
  "key3": "2Njsd7wJAEufsaHC77zMQizkVzhTuciZMbkN2zadyBh5wLokpxWYiADmKEirYmEJiuF7pKddmZXiAuxeMEYXC3rr",
  "key4": "2ShTZG3HpRBxUZnf39SiLATjUMJFMaHp9LziQ6z8sJuHVt9UyMdL8ru4kXY1eWnG1AAvMsejJa8a888vsxwtaCGP",
  "key5": "5NYLmprsUCHxkXx7XKZBYmtgTvhhGhvUzBr7aN9PFjBAA2MCAVkrhikW7EKG8wZ8QJoVoJxd3raHAZkRazekQU7D",
  "key6": "2Xms71StQpmUKgEcnSszmcvsfmC983i24riA8eSq5CN5WJLXcivuSKcAahqD9KCgwrWk1RCQTw5QPy49a66goyoU",
  "key7": "2yxgKDHySTAfxzX8z3k2Txn7FcdABb2jmChedmyDXBkZSkkjdegJS6VJjirqeTR2FxFn11QojFrMEMCogr4CAcnL",
  "key8": "2756WdTjTdy7HXbGJWvzYhbFNBZ7RK3DVWx42Zg1tg2zu3LzxutJ3HVs5Z1bg7S2pdUwQrVwTAwzxzL9E3ebRWCz",
  "key9": "nU3RiLNvovE4NrYa3w2RkPboFKxXXT3jmv8SFun9FnztAzsZF1yGkhu1Wc8ey6vXABzxDzCy2t6NDMQQwEqnmRX",
  "key10": "3Ad7WhmVQ4e9TCESsPfeEjUDdbun63ZikDjMQWQXLoWbjBqg69u8NAn5oTTu3GFxCBsWTdydfxMzSr56dtbUqkKh",
  "key11": "RqkFRk2hXCNzfZqspsM8FFNqBcbfWK9q7H9r5geRYZsVBzFVq3MZJf7ucNsJhZNMPaJf99cw7wjfrJfTGkyQe5e",
  "key12": "2e3og6cDbkNAZ5HLYA7qSzCAuLkcBmEPxbTjax8BtEhuuieNvoQZSGmoq6NpCp6V8v9nEV5a1BkEk9bZihSBKV4F",
  "key13": "3nPZPSEg6SzL1vHzYwGGeccchvSSBBBuXaU9ojZWiaeY9Hqb9eEV1VocXLHpNzjS7Zgfu5x2HWHEm4SbSZ4yUXUY",
  "key14": "4AK63sK72EFtngTp36WveAbUNnxQTGJSvrJYTuAgAKR3K3wuz5wevmVTe4GZsDqN3j2dWQ5Vdb5SxTgc276fYE3v",
  "key15": "3aMrpndKei84agJSGsLHMNxTx7JHMm1QxQTA3Q7LQpk7Li2ZZKfC6uhsz1jN2WNGbBQ2rxNwwoBQui2ZgkPskc9H",
  "key16": "5y6nxSk4WVrcGQwycJB2rECnSkSZWRAirpy3AjtHdSS8rrDhrd4kufMHyQPoKAmxBvghs3uYnbd73GCT98w6ixCt",
  "key17": "4FdWFnhVjVMK4KWeoi29viwe9r7aYTDMNR9nu4E3aBUs8wsvqg3yZ44wJUez25QBc7QcAs88pCpfRrUKbG3ZWmc6",
  "key18": "4HXBQVuMNt49q5C9rqxAYkL2E9uEcLpxsJwHMoXkKCS5MUdpMZWuanNRiE4Rdfv4nfhWxwvpoY2QUSxafGDXiDXA",
  "key19": "3BGG8XqEhpiXW3resoHvJz1vpHUa1PHbGumgWehkWfbMtdQ89fSSGBcxvuey6tr5stwNvKVgvGWGUghHPFZbDeGa",
  "key20": "3TWhdfgkeq4JJuMurZYrUfEudzYNFN4VnhPX4nXvchipArNALPPTQAQyzq8iQMZjydi1xqcku3a2ZLquzM1DqHqT",
  "key21": "5Mrr9n5Ds7UhDVTtL9nWLcRSMvkd3aG9iN1bMyQe1ysrGy44JWdvoK9Hqiq8fbsTQ9cPVcEjUNkqDtBA4oSGoWpe",
  "key22": "3wUGheXWFaqqrTN735MWkkJ8Kmd1qPkQWCaXn8QWDXLfLV7VkWJebcbi57TZnW8xQNXasyc5ND9BcSQJ2hqZwXVm",
  "key23": "37CP1RMQqFzjyErej6dz1jj3Q43AbBkqPZiv8nj5CmEzbPAAw7XYewpuwPqkjTBHFAL37uTWNr6roCbv1TZBqfLm",
  "key24": "SpZ1ytrquDUe6DA2y8TouVVLtE23DmjmrtM4WebiSrFt2drnkvavTfqN4wSDDKvaRPGLXoeGpc94khWpz9SZMQa",
  "key25": "2tQckZhsNMEZbxyc3ysLf1pSbGnwH16kv7foQKABW5qwQHHHwy5CA9GQ19YLJz1yTekWfdUiQjap4vL7wJzH1Bvm",
  "key26": "23Z64r1jMDhFayGixCLw2RNTwAhLreVd8sQs8MmjxGyU6iEMLPxTTDNoN9DPW1UyN7j4y4Q7CqhS1e1SYszE4YYA",
  "key27": "3wex7W3zyusZjrHHv5iQH8hoCar2VCo48zerXp7HHh7a95qsYMm86sA96kdRXTLvCYUFYy7ZesS6VZRxVCDZNXFb",
  "key28": "5eZAU9pUokWrdTtznGmAjcYgfy3AwgMr3LgsfUUVd9tEqZWKirrbCMuEsZES6Sg6QamUptdFCLdDxCoSykyW7qkz",
  "key29": "3WH9eszFvE4eR1pF7wXvnHdrBzuzUkos15uKRFZcWGL5xwLAWHkampT1fSuvvWu9gVwn43b5nk7Gbes748V3boLT",
  "key30": "5Uzf96gTUPZuMkZgSxwNsYZ58HrKkpAoAeA8bQyLvMie6Qkpa9GHeUBSagphJ3hQsjVwWnQ7MZeBpGxSBynZXnPs",
  "key31": "5AgCvVXUaKKXNMjjNF2DpWf9YyPkzxK8FeneidNjMSXUKdi3PhY1rVN9MTwK5Z8LQ6rM3wHuPYiunwWrPXuBa2dj",
  "key32": "2oFSbhXRykp4VmiRBfi3gtJmMTo3biXZ7Vs92fhEtUiAk2QCpbMRZTMCoX12ZUx5K8R8bWeQewtEBr8NcQTnKDWW",
  "key33": "5Rkj6fe3SMfJyaG45Bp68oX3fgg86At4P1MZZWRa9n6AQSfsU4eCuiwwGxYeynCqKQFLyKiEvxMAnEj2Hpud4aHT",
  "key34": "552VxuipNTj86hcDsDUb8Rotn4SqXxs3UfogxFvdfqZ8PH97KSMjJ5cfe7cGHPqAodmgkm5wEGPrKii9yuchhFQA",
  "key35": "2pTwrC2AaW95yRnrvxxDZ1yFFunTEt78oFA1VAvraXqCyF1G4BzsL5yJjj6Fm2XPmiNC2UwQFSWaqM1ZdcxHPprq",
  "key36": "62KmTjEoPyBWMjNyWUxTG4PVmoUhjTY7pSgbS6bRgro4gNbg5VQyMnPX6uNdzqBtVsyvaS9oFY8Yh668ceD3gQSn",
  "key37": "Yde47HK27sWfhqbC7K55gMA4nzAjiMZ2aSFVMfHkZRjWnpFjZnV4hHxM3YstNa4ywGkX4FKf2C1v1eGyDvFXNPH",
  "key38": "3eMXeERTB7yvUsXADExhFQMuQAz7otaNJL5m6MYqGM2QJaPLbtPAn4s3zm8v6bTPAPVJYzRamHc2PxrZtgh2xr8n",
  "key39": "28wNUauHe3DtzRTTWb7Yc2q75LsJepvF1uP9NdWYFP5qjaWoejmG1DuY6BRscGSjDTe4qogcuxEshkBuRXjqRD8W",
  "key40": "4eT9WMXxzeEVRaBao7sn4HP4rJWL9fy73qjBefBCqYZQfwC2GjumGPjZzWPNLhmcfZUozRn4yznEjG2FDsGrDz9j",
  "key41": "494swp7vm1PabfGc1wg3vjWVo8W4ayvdsJm4kR7XFYSTNE3KZHz7sPib5YVqXiN7cU3dPNtUAnJ31wwdBWmXXR2x",
  "key42": "2EhHoHCPGidEbSsi9SiPxKUGgUFD1UjLUBhMVYyGgMJKp47N4pCbhNsMusgMCst7uzmG3m9y7ysrUJqW9DRTCUma",
  "key43": "24tCkXroT69Hkuy6Nman7a94SxRhxuoG2e5bYKJ5g6p4aqSF2r27A2WKkYvmqJfbi6cEsCtkdBNwn7BxyRTbozse",
  "key44": "2JfChc3xbsN6ZCM7ZcWprXWF6oQLxW69spB5LpauyT59ZSSq5WqsXpVGTNAzprTmXZ5UGetPWbQv4Ew1GvvZjRW8"
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
