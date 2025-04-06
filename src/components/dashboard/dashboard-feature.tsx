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
    "Gm2vLTeKip9y2XyiNzM2WiEcDfhHJmTc9aergBzfQigu2dyQaRCzgYQPFJKuYGSZWBRBV9HEFgXwETx7te3M88L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUoChLFjSWsqecasPoDvwiAbZJTCme8PE6pMyfJe4T36Kh6L8bkHez13J9MAMhVubAVRqPfEDqb2WX3bAxvPuFy",
  "key1": "mAgTmSQCwxs2yw16d4w4fEorThBZmHq1UzUCgHfhYd6G7GJ9koKr9eacsy51e8gFBsps4rnsr9UaFFJffBBaYVL",
  "key2": "2iDdViSSRWvthDSCWgLYPzZreEZoBLF3Bj7rUxeSjfmmC9h92gXkY8g9q1NVmtwC3xB28qbHRn1KxiHpBCmnN3hF",
  "key3": "5AfAv9Dm5PzU1Xeth5Y1e7R7kHYQJx3RuKy7YW6w2KUkzfHwDwvArS6z1KimhLS7HSQxMjZh6XBgiMPSEPccEiTn",
  "key4": "CmpEUhjqN3DxhJbDBucFZQgFFd9WTumVraxwBycGSrNTu8T5ca2xjoTrq8sedCxN1teB9En1HwyGqbdSP1jv2aS",
  "key5": "5hftMHwikyfqTUY5KEBN8U1JYvBWTwWBU4M45TheZM2FzZZFzMWxWzkHR4Cc3Bnsc1N7j9UUvtgGLLmWM7iB9qft",
  "key6": "2KrXKodUkxCJXpZoQaB6XGVUhmYWqxAGo6R5i24cwtX6J4M7FZBPLP1ra4RjNqcZXQgsKeHQMd23Ye2Rx3QoqVbT",
  "key7": "3x2ajrBMBHYkW96LJLLHQJAbbcLG7oNdU5tTtX3BycMGKXJEZdGgFPPDMu42y41CpRS1wgbm2pHvUpBfh6v5nXPh",
  "key8": "FuG9tnSv3yhtYfxAvGZcxQBA2DzzjMdhLytkDaGXEU8dMNtLgLKPU1eoP57giieU3oAEa9xc3moA5X2sD822m1b",
  "key9": "2DXQa9Qs1uCMJKdxtrrq1gRitz8pxxBGneCPLTQ94XnDH2JnNbEJhMTxxhnMWTWcc8MmMuWrzsaLoqZ2zwzPH9wN",
  "key10": "5saKayeYv8T4JPXSvQyuujcdNbb2KQjARpKezFAmFBrthb6R76BsxfkGedUAvLJ6mfhFSFMzvxi8LFpZweCmfszk",
  "key11": "25QgZk5cuTM7qD9a6h5HE8D2ksSdMR9vwEkKL9HaP9AurQ9626Jya2D5XQ53UzoedSyLbhuk862UfCZvzjqaL2wK",
  "key12": "Cvg1thmpEVNfYiGPuSHvnuzpDamVSonWxoXFMNfpdhikMBMrwK9fyTGAMQtP6hoDUmRCwuWz6jsgGPKZPMho2zJ",
  "key13": "2n3sTiMP2i2s5TSE3SFfBzxsiEo2w9gLCbwa9S284dkXWtBBCHZUkKzvxSqeW6bc4SU2Tc5DK54Nd3vfWjDyeAbv",
  "key14": "3TXuX7aSLvbyyJuqgac6owTBRq4q1Prz5PCnjmJz6LARo2apb29rSJRDabeebrjssNNu69KETQuTEJ54o4eyfGtQ",
  "key15": "2KTF7UZqR83YF7V13Uso8Tsx7A17zdo7AYLAHwC7SVho7f1DLDCjedk6vHs6pFqug8qn2zF2hNZqMMTiGMnnNLX3",
  "key16": "2HAp5x4BiKN3LrZXftTTHQaPySVqB2SSw4jQdLpLyWtvQ11ZneMqyaZez8Hk1wFkHkjNxmyA8NZphUZs2tB91HYr",
  "key17": "2Dw6TV4p1EAYLhgbRLqaP4giA41NE6XcpTBuXNYtCX6HHrRnnSKNosoHnUu98PuhHRntr7UA4aWNRL1tDzLCtAiR",
  "key18": "4trCyDmazdzaSDyGGrh8M9ChfKBi9uYxZc7Q2F4j3eLza3VBLoS6KAqWSae5HTWzgvyGYXh16frfNkLvkoRu6c5t",
  "key19": "4nxdxpaUURDHc2Pu3FyD41wvr6VqeUqSpLt7ZDshn2pjThxCRpxWS2oPdecVxFCbdUitCRomC989SCvTTSYgAdXy",
  "key20": "52S3J7JXWYBTghsQawwzbuMqtq9K4SXTMQJShJRmqHM5GXpeACoGQcr5LDitHopsYH1wTjKdcVXmdv1DBXaj6RX9",
  "key21": "41C79fu69FzMEzg4ceWBZZHNTaSrZignc1W6Rm8jCbajMuf3Miw8513P4UyFpTKJe5fcR3YBV68sjfSv33GhDwhv",
  "key22": "4K1xJWS7LnCCePGjqSQbVNwo313mMKR1qXyPKG7b2vWVTgyjDVyx73uNTCYn7hWq7sHpt1ocqJogJcBpbc6NeAJn",
  "key23": "3cB2ZfPYgBts3ttavfvGMmJKsyJrZ1aZS2qaE1zQyRCkjAsn1ezr7fdZ5qn6iZHH5p6xQ6QiKBiE651ZCF4U8b8C",
  "key24": "2scjVLNTVU7cwoVchxZWvWLJRWywYAjfnF5a1tBWxkJaWgmV3bTpRDXRjBTZXbKQ1H4Pwizt7hDH4vimD4EMgBQ4",
  "key25": "2qLjuB9XB3E5s4jMyUwMa4yVPmXN8X7dtcb613GogK6EGBJbrSHJtoRtKRyuwpKbuJYrBNuQDuCGRz2HXUc6cM39",
  "key26": "59Qs1eeCUrr2kP4zmHdjqgApYmtczBD4szQz36eU4kiXLjomoyxpoA5KF77RVKW6Ek8ojtFhdGZVAzgTsyV6TMRq",
  "key27": "5UFMc42RBUzVWwqT1KwhVGX2m3DbMvDe1ZxGJ6ZmHE5kpvUmpHL4VwPkjpdKawAMxA5QEizokBcUJ5BuGykBmPCg",
  "key28": "5BHmGPRAQ3hxv77VCznnsJxrSYEf2C9YZVobShp4qAyhhcmh3Tq4Ru3CS12Kp5sDxbdDR3ysLXmW7EnkLxv4Nr4m",
  "key29": "2VNNED9qPWgcfoPmQWGaB464swn7qK4Py3M8bniPPD7zGumLnMkvuN8hKGCRjC8qBUm79zKicC3Ex2JfcWAqDcNY",
  "key30": "2cYH6oCvKh782GqaRKPx5DLVrgMJwVYRn5TXAj5X5ux7ykSk5utjaLVamTsU8ZqEbFj6aGSkz7eicYyZYQjzvTjU",
  "key31": "3KrtDj82mjXzERYiiCJiFJjVyWrWFwyw6E8emRiWwH2Ee7jEPj8qBq9TFeg8ZvHiDZenthLwEsNmygxZNbps4Coj",
  "key32": "5sRWXKhqqUarBELvLV4RwksUt98PjreGw8Q6X24p1pF4iJu9Vj6hp4d9UDF2wYQt6ya98UV8grd9Rir8GwTtoEU5",
  "key33": "48uq29a1cm6kPv3FCg4b2y12myKQvvLCv9yUxKSXQi8vmu3nbLeX8gFQoBDrADTBKntzinsLUY1vNnyYq7ierX31",
  "key34": "5NB82StDX7PQrtkysC8p1XiTX4woPWXQDTWcAdvpGkCdNUiJySsoy1Ns5ks4ZAVnnsvjKMzNbLqQQkYpdsqSJyz8",
  "key35": "2NYbwYpRUosnJiuiKB6RhUDanPovauMRpfJYkyVECK8sMkoH4nAwLP63bATJWSmGL6Dhgn6q6ucJxVADDm1DH4cB",
  "key36": "4RDaKzuYtwZaurXpd3NhNWRrQiYWjXaeahQU4AzxxRvkQB2A9zJnHVjUB2TQGxrMAX5ayvEpmVKVC4NeYAAkfzah",
  "key37": "4zpmN5Jj3K5rwP2tk7HVMehc8vpudbe2t9BwA2XBHVJCkAAqmWmuhBNidbP3C1TndcswrWzqnsaNvsWPsz2mF91e",
  "key38": "4e3Hm5K6HDeztWwZ7UaqxtxDhXKT5BKJ89HMJJg4uccqfnQGaDeMPCtpMUUg2Vmu43kQW3DkqhgQPvCYKkUtE4Cx",
  "key39": "5G9bjTWsAHGXcBYsZjxwA59zs6EwwgvDxGiRpCmaADb8UEw2Y2tARJkWDJz2EcCo9gKTD7nWEHG5yjBBFn9YYP76",
  "key40": "4pP6DwCbdsSKwx9gkK4R3ppKtm8We8wySvnGKqfyRGD9QVDqNfzRi341YJgkQfKUqbkvTJ33X1xa9mWyLnwNJLDu",
  "key41": "aTRLti6FM6vYsfURbyKRiP8C81R7YanJ4UWPUjWJc78gCw1L1tYF5Xovbbq4uDyaeMCZ2sLm8XbiTr86JTnYBwN",
  "key42": "29qucDuxiMPDoFG1x5zMdnxqU83Y5AmQ3NsfrqmEsWyMJunNMSfDT2h281R4bVu1dhDgFxq3T5qfjDcXf4ur1Xoc",
  "key43": "4PyJmoDSNCwQiYuq1Tef88soqt3eq5LKMCMb3UevPThQogBeaFDYL2UvgbtXjzeYosRXu8fUcZsYLedeHDFGNvi1",
  "key44": "5uzBUgQcTDbPCX7qVJZsmR5vgQVacZZM3tpHURAp28xNaG9Y8N8nBh1pQJrVZzZH7DEK7CouE7FE9MGmcL1BW77A",
  "key45": "31SuygTAooHrjZFnFP8LkM3XxMfVxpLyytWTTXSHqLZQEJ36CTqgs4SKXB5DBV13g1fcFixeLF6EJJiNUkZHTEtd",
  "key46": "fPr6AGDKsuDwgqBTiW2a2NnDHfsfMU8Mh7UG7SQKQvfbaJTGb1BYGJFAfnbJzTEW3WLTo1ZAZj14gwzXe58Cuux"
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
