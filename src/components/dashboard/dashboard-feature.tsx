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
    "2zWySPopycrbMz5C1TkbyXasrttSvEwRdgA8zaYgZWoAnPWSTKfe3mJgjoQsPYPZFsohyuXFo8puaFHRz1SA88YF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t19o6n4H4ymXbWtUM5RPTr8D6PLTvyZzsgqvck1SY3Gxc7ACCsh1PnsHALCZB98rkQjg59uvk5JcjHMUGfgjHTG",
  "key1": "4y7K8ZBpe3LgJyqpVx7vNy2aEZGY6GmbA6mbLNhFaXtAJHJ1CgCgVw8v7BnUbt6ozbrU9zfAH3iknaj6dG23FhSN",
  "key2": "aXrKhZ6BseKeA93BGB88eAmUUg6ozaKHEggwRvL8haVpGS5bFdPyN4JVTHT9chenq3ATVMnHmE15QLisasdJn3h",
  "key3": "4QNATzNStBQYGxWRr3fiZMipN472CLEwSNnTk1DnoUerj1wj4SMr9yKfWftwyHweg37XPeCzhQk5BT5ScwJPscC8",
  "key4": "3p2CUgRSNUmLjEpkBN3SMygVaJHvYjoECwjnKzm2bopmNFYsemEiFg82uH3LfZ3Jwnqyfmf5CNADAxu1eJhUuPh",
  "key5": "2erd1XhDUsvtQ77TieQH8a2UoXkqZ9M3xAHNJDWLrnbvVi83wQU7FXqa9Ab952sQRXnLsW5DGqvhvE29WXwhs37m",
  "key6": "3eb8pFqwhsqrda3j51CdYC7jLrx9GwsGJLUMo548tQP62izqzGE7gsWvZRCaKw2gLSPXxAUovPAuqrzdUyJtuTYk",
  "key7": "pF65HdYTfvMAt7Z2JBZisCefbxqaF22F4xjGdSfF88862JE16goppCVYz52qtnvb8XWACZeML5ctxtSbDPZYxxx",
  "key8": "5RhxFhYPqYa65HNJ71yGNuJRLY8q8dt5eXoF3XZbzZT1zfThzrS43WgAfC4BUDCAHNFwdGS9Bbpe8tha4omTo489",
  "key9": "KezUfpDBSVf23qYVDgFgYX2GoPUmi4EUf17gTpJhW1NPLkHGN8g2Gj6n6k9qsGHXJBDjUiPbBUHeyheZKW3L2sc",
  "key10": "5fw8nhyX7qDD5K9HJk53YXshF6d3Q67TDx15w3FsFRta71DwSZnw5AMZv8f8s7rG8an8d7BYgCf9hAi7HzjtL5jV",
  "key11": "3A2HAqsPp2rtKAUiw4jd41uftZkHyTfmy9F2inJp2yGsoA1CH7YfprUaNeeEjCqEnu1wkmXPgK49LfLdfcRga7QA",
  "key12": "521YfPJXK4HcnjU9dNtmWWHGYgYLtQ2uJBX6jXqe7fct3emXywWX4NoxNPSFdA7mppUXCETPkWVvYXS6i8GejViZ",
  "key13": "24u4fCxrZ11PKC53eQvZP8vboAKJ5ApR1YbbqBFTaY8aCUA5mWYW8bApnCDG6ruucsJs1kqvHGwWWw3m6cp2puCP",
  "key14": "4JbXjz6Ca4y9H5cTV75oQSCC6ANgReFjBKogTf1wA9Wf8Dhe8RZPnRRsJ6RSxQhj3oeRcbgQnHqShfJcXkmCwgNm",
  "key15": "UF4H7q7JZCeLLjbdf2YKacb6321acMQkqBjFnRG5RsYKsy9feSw7S9YstGnfHoYrDq1Anh9VmKWkqdzBM4RRGrf",
  "key16": "FECFN2UoQPRTNWSCExfV6VrMCBn6baKQyQqz7EUJjQE4qsKm8Qk5Cb1n6niUuWWyNZa4bsocDTB6ERtWCx6yavK",
  "key17": "41YkFNKFR5sqnagTZGYuMD3W1XfadcxtfmijDJ8dkm7MPFvBhgWaaLssHD7y2G4LfRWHcQtg5H2VmwgYRJyUPeP9",
  "key18": "3QnznqGiS4Bzxek7TR5rvZHTaXZSubiG7JeJV7BiFgWsHMi4k6e7SrMhnFyzgbJqanJL7js6Ym2A7yAmZ3jsiiFL",
  "key19": "4crhQ7vBdFREfmsB2GUqdSDH8AjqPneom1pHePVYRzi3MyiQwvcddYPEUaiXtiFbeTxz9SnvcdnMU3byNCxWdMgb",
  "key20": "5FPxTX6yQFVabZhS69TT649XTv8G3C19r72FxmSV788voBLoZMP5yEX75nYD7Mt3iCpm8YprKo7GdoyQeDESEV7y",
  "key21": "5CNfNq4fGqR91LccUHEnDF311uaBwmq84rHW3q2RG2qn167A9sMEPnowca1evFBq2cHz4z9LHXXxK2x4FXNxLsYj",
  "key22": "3zrRPQhiB2nSnnZZWp6xjp1bHbU8Q7CjAPwyGaquQ2DrJiPWz4v3RjbdsfmCZNMohrCbB6BQaqoqzUKNbtV3wws2",
  "key23": "3RJS4xPmMVQzoszULYEwXjvsmBbrBTv8Dx4kRDL8NaTErbNFvWzkmWL4ZAfgmM9tG6oRGTNzxx8549TJH2aTMpsw",
  "key24": "3V1vhXF48qBsYF3KKGUL9yQKFojhJMKDJ6eyhAq6QATbP8c19WojnqwMJcmpQ6rJ9h6AVe1Nr9NCSkvV49o68Vog",
  "key25": "3KzLkAvfvDdWh9D6MhiUFajR4rtUB2a7gz66faekPhV3WoyxCgdgHm7ZW1dtd9a5Qq6ShQJjRUZXTizAWvA5BcMN",
  "key26": "3iA2vDaqx92TAHvrQ1GD84MiykTy6GyJEKe2Wg6oTNkTghhMyJPs1p9wgzw1S1NekBdMHMiS4DfVi43B6GDmmCoD",
  "key27": "4HTMKTTnrwuCaNYzxN6LJHEYuGPcmfvzxeRj3wjquuj1mRxXSeybYYiukTqWHaAAqtxtfLLqT7wGYtBC5URaVsui",
  "key28": "3HxCzTLcL15KftuTgGYeikCsLoRACrHBE4k5gogJvJiPxDMPTGvBFgkJuMsfRhSdPeDzwMkSmaaSVRb6t9a73soq",
  "key29": "46HVRz7MoMJwEJuohJgK8RMT2i49AQVQvU84ZcryMcGY4ntpFv82wdjY4CPFChGeC1kzCLk6ejdPgiht84jVbGXw",
  "key30": "sCQLgbbrfLvgP6EPi4WHZcg7p7p9UYQNQSrPCxXQeSiZdapZktYmgBBd7rp2bkqVVSDDYzuusUfVVtZqT1LCs3d",
  "key31": "5764cCWKwCX5A8W56huJeDNBS4ga5iExAC7BEZHXbH9uCKedCRsaK6rUtV16eLCLjYvspBVo3uzZGDUAiW88gYTc",
  "key32": "5XCh6jGo1nqUVrGP9caCnYWupCuUtPX1oBQ3iGSxfbUGB46Lxt85CjRfVVgFAdvU7PV9FL5TP289CKbJpYMtoQt2",
  "key33": "4yznmgAETLnCiyssKMoD4cB8uTf9fPKhG6cMNQCyNtb7ugLUacw8D3JMJVPyAyaMsDqU5RuTbjCzkZek1nB6DY4G",
  "key34": "7k8KLZpijsSj9yym5mXKJ7JRa5DLYe1iuYrxYUtJpKDQ4axMNMrnJd2CKDm8c8ViUNyKMjsaJ4LNoTY1AzYakaC",
  "key35": "32oNz8AHW5xQSpp1b5XC9shdS6QRWJgkEBpGQaKFTdFfX176dFQdXM4zfP88Fi7WUFTTuzu99edBt5Th4Csz4ZQL",
  "key36": "3o6mod3dZKsz5daD1yi3xJyvUbadhr4iuBoASbHTua2FHthYtkpZqBrt9dVh35WX8T2zS1DCxXp6dZTpEMmAyacf",
  "key37": "4vrfMjKDowxF2TszrJqMAJJp21ZCT2ZEt84NuHxyMKZcSCAvQF1Fxn6x7tBufdR3ND7oMMTh9cUVJtoPprBfiaA5",
  "key38": "28bBDkhobWJFbAzyx2MZezXZ8jcpj8wKQi3LkfVBb6TBanWqSh85GZrLQ3QbkCDBVRBcuvxfTb4Do3vBWDPrBY7w",
  "key39": "s7QNo3gvbs2Jrnnos8pwYWUk33FyPPCLAzJYPvarEbHzBsHc2ViCXzt3hgkFMMjveunuE9zcJpXFNAx36ga669k"
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
