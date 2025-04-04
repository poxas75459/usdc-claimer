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
    "4bpRMCfvo6x82t167o7c3pgwwR3Kz59fndDYTKDStmChuV7GysjBorXB8jRPetY2HTaxtEBK3FB8PKZ5F1HGwwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JE1he35rxRjiohQg6SzukZN8sQM19V27Zpx9WwNjDz1mXN992CuPcVnzq46YGJ2Dbx8bGgUzQpgXLqBJ8eXtng2",
  "key1": "67kEVgh1W4WiNXyFpyMmSpYHMnApVrcaYYtsXdj2skfFU9hACzeoBMdqRFcKUMLeVKR5rPZkMfYYy6JWazhY2yVV",
  "key2": "5j9AWZRwZQP3rpb3cQm3zqGuojoLtqy86YSEpfD1eRmsLLXVxZETHMy74LsPeSKgw8i48QngBHwAZSF6eCcAFbCK",
  "key3": "4b1Sd4ZpjhtXjnbDrh47yJF9wN7k5gSPtygJtdUqSg4VZsdhr9k2DhCmnK3K3nojSLKXmYW7DhEMQY5UwHXGfXsp",
  "key4": "64JKiPMqHNDVcwU6vMtpADxf1rBSHfesWbPdEVsQJw93Be5iTVtRvAhgEVsqk3e6hjq11vV9F7vdCzqGBsnKirdt",
  "key5": "3mtCN66zYjo1doehoDm4YJKnyjaV7b3FRkceem5i4j4VyZu3ohPsjMYzUbr99DqpHJwKpa3SDP6UHocXpDzW4ste",
  "key6": "2dD9uGbfj9dQzUU5Z61NJn5KgQdPQ5BcYBXFTca4LAFXJuE2DiBeMgJXq9V7spX5Wn2oqHMZPBWn2mSSempTpykB",
  "key7": "5jQxd2oLUqBGaBMn8knf11hWhonngaTN26f6wLXusNt16yLDgMHAR8qh7YwmfVz564AYmm9a3nrFfpBRPZBLKCdq",
  "key8": "5nMnZRFxt6N7dTR9Tw9vWyrRtkpUnhtngKwELzpWuTvuQeCSZV73w8Ntz1WQvXtrBLQtFk4hJ4iEb3xfb9rYK89a",
  "key9": "4d5xBnKg9b6GG7TpmTEBdKtTJ4ryYKBEnxYm3nFdkP7BR2THqq4yoqxjGNccANyRfDRy4mu4pyvpiKM9q1gFNMiU",
  "key10": "3qVyqSvDgE6ZytPDkNTZAg6RKHV31Fff9w9M9gCZifkKXYTpiGrPHBFYUYDfhrTta8ytFBQ5NW79H8QSnnEsxp75",
  "key11": "5nreRWyS33JPuo7bfq5zmcwMbWcXx3oFHxaxXPogMgGdAMWq8iYraLjrXe29RGgptUn8Rq67ktMYX6sChbVj3gNf",
  "key12": "CjtDdZhL7rHstrCPCek2BFmj1PgRn9n3zuoQEKPRmPjzjzuuoQRUMsJnyQXTE7iEp5QLjTgZhs1A8oDpyFQ2QDr",
  "key13": "NRKRYD39BT8ZrBucGhJXMcMVHA8TpEWsNC1XwDP7A8z9JMyZhgXGRAbgMB5xktHKPvJSM6NdLF3iLZtfx3777q1",
  "key14": "FGp3pbRqT3iiUbTZ1rYbuVoQqYvUQevVuXUXErxcF1p34d8ZuABpBHpQAGB3YsD1sdPsnMdXrGqJHCVkK2FKu1X",
  "key15": "3YDAi6T29mQneVY4QP2NPadju1jPokFbBTtr63MkzAMK2MXPUVGABXmXMhPSBaxdUMhotWobePfCwx7k3Y1LMce4",
  "key16": "4T6uqkfnudncTRRyCKGLTuAxGTtrsGdFhuKMTJQ7iHdMdhFGfRh1iuut7m6xP2ygwZM3uJPUhG9psShwDHeMMEic",
  "key17": "2fszv7PWkXj3xhQvLHwSxri2w1N9ZU4v9jew4WdA5DXZEePUbANNwb15nt7yaoaDTfFoFWofkQ73AE6FUgyrCR1m",
  "key18": "677Q4DAiBF2BjTFbWgphYbU1KLJV1rdwq5dpvF2CS3wsRPQCv8uzNtKsThJvmrmNoaTyaTXMPKUzkURwRLbx7L4B",
  "key19": "3QZBvEtGJUHzVqFdSGnVzK2RyoiqZYquKagRBNXYGiTRC2taZuL2CFU56T5vCE5TD8n5x8uFPkqEMTa9URiTwhDu",
  "key20": "35XEewnaztKjQPRCeZxngUvjkb88QS9zwvQYVi1h3CxA4dU3h9KqTYFJgH2huuwkNaWySd3g7JFbyBGh8WcdSqK5",
  "key21": "2YhKyQxu9A5MsAx56pih8VTr7MKp2aFdC7Da5wLqKfRgtKj9AtYg5JTfjWyretQkwDBWKzDLWLsM9WggWgX3o4Rq",
  "key22": "39dhScerV915YMys8ovK7w3pBGirUctvmXEDC4Wd8m24D8AyjtGbMGuPsF6AbsLN5gBSqJvQD3fwAUPCCHnDjyC6",
  "key23": "3pYjDJnVJdVpJgZLHBvCSA2j9R7M3RCZooM7mtaijShB2WbGMfFVMWHV5gn5WoPQQ3Xd9whFp5Z3EDNWwp1sSFSG",
  "key24": "5A2tXC1SW71WpUmSNMcR7Ejd1WWGzqwZpHvAAde8NhopMvHqw1BTv6tBUuneiQbAR1ruZuw6WrsZk8nAUsM1pydy",
  "key25": "2v97ZvgV2LaoNnegyaQuUKVnZvGrjKeyxV8g11NuCoCc7CzAJCykkZK5p2ovWK66WCpjERJAUzXPnK84HAn27aWW",
  "key26": "36M4DJCBD4Biuz6cfr9CGRFriW1zgfC8vQgMRBpYKXSMvYEC8v4BY1G1yHdtnHpL8qxrkJXHS3CNjCshd6wtVBmf",
  "key27": "5aY9uVTnLuQa6MJXumYrLDefxfMiJm9k68GGhTnEMDYSznbnNZyxfHoq54DPi6RWaiP7BLjuj5SaBNZEpa8gqyVQ",
  "key28": "52nbfWNWSbXwGKoCERwwkJu6UKk2ZgbDAMWbrFzLAmWXjfENXCpCF6r9tAqBddvQinpe2BMpP98zyNj2Zhdb5yxP",
  "key29": "2S1GWC2nNBc7bbS5yfdZqydQDCGGKoeVe2pvCgsZzP5nKmK8dzGYz89MzECuxnjR45N8idSU34L5P9j59WjMGybW",
  "key30": "4UQGQgMev4DWvn8dSCKA1oAdGpFKoLA45q8fGQ6KhDigunbtqmADm8gjiK4t2dCwWpXQrKrTtPgWhbJaQayJXkTE",
  "key31": "5rYb4ZvysJzayRhXciRfSox84HFZFBER9jaEmMfoCY7AmJM16KQzTfTvHMKbxCeTRUVMN3d3mwKxDJFGhWv6135c",
  "key32": "5Hrbu6WQqvK6xMm6V2Nx5MTTbVJYQ3CtN4esTyGGnupVFA21cy3J7rWJ5YqPAVeesYLLRJMu3QUFbtV6HRB524EB"
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
