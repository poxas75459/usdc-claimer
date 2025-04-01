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
    "MmczmdnD6XtTvQ3QyYLNDhaVQQrfpPenGKoVuYPL9crr4xFx4riYuc76bhzBf3kQhJFTs5uTrUPvGHg57XJ5dih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qgRV14fxBRXmuFxjGd5Y6kHHE5ZSw9rHvmHUd28y4VSC8UuEHVGUvYj5z1VpenakFzejWSfhdgB9YQg49DzRw4p",
  "key1": "4RN4HLv5JX5DP1LWU4ypeHrDKoWqnYE9NnCwd4WKz1ZgnmMdHfPcFHXgnQeVCyrbJP39Jb2bcmTVLupVfXMRSA79",
  "key2": "5rmfpQNyheiE57cdpWM7BtzmFPCV4Zx6VnYCX3Fopa1dcKBdXtbgEmSG8rYRUQe1K9p43CnHxGuoY5hg463ej8Qc",
  "key3": "5iY3wcxraDz52ZUo1dc8YfWVR7VAnj45SLbuWCEe67TLccEFDnBibbMggE1CmhA8MKgSC8YvrV9aansNCnHRf6Xe",
  "key4": "4BjrgWiCDch129x6kmUxyArBMbtt2Ks82ATmy6wjEQnJhTSiDmBNrqaCmd9nxFUpbd1HoxabN477neQh97y4Y5JY",
  "key5": "3JEfiF8XvBu5hWp82MkUKHDX8UzqVvCAwQVPwzuZQW777JUw6hG2Z4RFoJ39NKDwutLVE238LBNG1aiKHVrpPDGC",
  "key6": "2DhF6rbyqK3NSqALjy9rnm7uNhMU6hUvx6JMb6u2apEYbEV9APuHjaxPMTHLMghwnEgwS9X6FWur7HDHPwhdYngR",
  "key7": "5RRYE5F83SGBQy3hFgiVRYfFStrfJhWR4HSbpaEtCwPWVbHbEUgN87cKEC9fEVKjVwRP48eukPhvwmwTDYgV7hiL",
  "key8": "3EpuuCFCt2DKVQng5VtVY5J1emy1cXeHA71D9ve6MMqoGcfE9hbtsBeJt7Wi8ZdmvygdhR5VuzHyNUJZ9iJzv9Nw",
  "key9": "4wM73iRbWJVTXyrLB6NYwrRh7pPYboQseDQN1he6bgJiwghNTK6MXzM9fnTF3n1Lz5q21XhVhhTP14tYHUvQeYA8",
  "key10": "2A7uvHqUyPsWomjHsd2S1zfkn4xgwQrxqXRjqUCzeTaiwjKcFLTyvVY1nkGgGnxKtiTHEUE4KhvmHUtMV5bwS1ng",
  "key11": "4uTTwdz7poyBaNk5e2RWBatUjrg42pEsJvdLFtVq8tAZYMb6FVkTPJzpGwM8kEkgCUvZ7rT5dn7fGWV8fTb7zWSw",
  "key12": "5BpxJki4dqZwyYeTiqAYCPrQFNwPs3yrFF5ZrwZqP4xGDqm2HJV2NSh7FRRtupTZaFrzdDtZ4EcCCFgnjX4EvuzQ",
  "key13": "2gPAGMjBPag1xLB3NCAYvELdLCG2HMfyiHdLpGVUZ4XaabzSSEz6TSRKZQrx1J5ZP5PRm2FkqUM14uWVdgePgJvA",
  "key14": "3qyNk5i93zkVMHFC5AVNJevyosd6poWEADrAWocJi2XW1wNxfGePwQ1XPpZeYQoguxeLHsyT3tunrLUawfQBnEDk",
  "key15": "5iLjfTMoauZVpWmGew5rhWNihqujdPYodyxfpmmZ7p8imTD9UhFTEiwnouP7mumwK5pggUxYsfK6zAgTKfdNHKih",
  "key16": "2Upp1Dp4C7Kyj1TPFTQShRyVXDwkMJdSsKC7zPDX9MvznK123nQTDVbYmR1eX5njt4d6eFHvZMvFueyq1NzMMuUA",
  "key17": "27Z6Mi5BFrqr8JdvFB8kjptrtLfPCUCQPk4RjsiCNMRC3nBGxb6hFZLdX68CoLUGPr9KbRxvrEqNjXNLEfmCGKs6",
  "key18": "3Tkr2puYKe95spiWt4hhbk4vBGjSzXz7xUzxi8dGoboLMZMLUBdpwv79sf1y4NFq8xJhtCvqrQC5QCedB22pP5iZ",
  "key19": "2eT5xN645LDpwF4ycWeegJVCnarUm2eravn8vy1B8RU3pGTRon9MMov74ExuoWUR7UhZ2FnYS8KF8uudvK9XFHoa",
  "key20": "4Hd82AnWs8eBwZb6LYKAETc2Grw6d7ye3fjyq6R1wsQHBUr3W6F6HrBc8sAXGxVUSnLwNKrS2RbwUiWNz22X4BeU",
  "key21": "2uGC49HZHPavmRhKKVk2zHG2sdvqSbhZ7ZCxewJdLHuLjSsHpaRmxfi5YUjFuYzC1NCuBCjcpiH9efZV7sVPLXGN",
  "key22": "5MsZap8r62ERNTiFaQJcyc66z61N5ebqua7b11DUjTSvbcjH8kSDgMWLSjEbGQyztc8dFyoNCwz2MY4PUVzTFGnA",
  "key23": "5faakE1USfqdQ1bxeqL1zz5hi7asGsf6sEDh3SEcyjU4ZjwW7jLVrDpu3m5qPGe3d8tzS5TpRVFquLogbrR1FvHK",
  "key24": "3bAQ1H6mgccq4Fon6Auyp5FgfnDzjnHrvjZvhNLEH6kivGwTC341WXqq2MG4pFa2xpwAURgjgHQ3kSQWtLhqyDZP",
  "key25": "55QJXwXApGBRqZ4dEZ53ji4iDBzjRzBd5MKhpb5pY3KfYdPFp6k5oWY9h1rAXy6EKnvkT6YSWQQfRqrRGELvhkCa",
  "key26": "5jMMJekwUDDfew1FfkjyzvpggtHAeq4caDjEZUVQou57RK1o9oJSz5VLctct8LhoXYP1q9sepjuqT7mYccHrNEJM",
  "key27": "2khbLRjHVnvptJYpTGjmaBi8GzefiYgYsS2orJAyejmRifqA7da3nqmc3UcG5SrAkoHnNYosD4qzisygVFyQaYVq",
  "key28": "3YrA1GtaAGwvuYqckNcEvhkHWynTU8gxxonBuLApGVqSfJWmVpa2ddde9saw4vMSWbzxftWGZpcMS6ByHFjLNesm",
  "key29": "54Vk2V99v7BAbtD6ifu4hEXdQEgsUGkkxw9zk3tH7FTigjbryk5QcNRPGNJRb97sJ2vcWAz7MeY2nb6hHcRa3aHA",
  "key30": "2PSy5d69fFTFjdAT83wvGcKgxZkeDyrbumfGrKy85jcNhuNhWaek8CvLkx3xBvhR2VKmF4vaE8vAMSWdZmtdCLVA",
  "key31": "3fRkQLjNCpWocD5WdHXQtK6P7K5j4YAbK5tJbeVeT5Ay5wLZEQf2XixcXkhpegVimULH7Fey1MsAMN6gNJffFhch",
  "key32": "63f1eF6jN4ikj2BW1WghEYv42EXAFwcukkS8Cup9ZBxXZ8djyHMFHeJNbPoc7c2MiqskmbVZvHLtpxUGymqjG36E",
  "key33": "DFS4SE7NEahgQmpnrTA35TUDhTSaFXRNAhaivG2px33SSmi5yv8LFvZsumHHHpqoBvhaYz9JRhEmLTQE2w7yCBb",
  "key34": "26MsW96g6hCWdTggm49EKVmATvXaHXejXShQidF9JoDeWVEf2gugyFvMzZBSGatvW3sGPenU1Ek4otg8y9RgbDFC",
  "key35": "4L9gHZPkfQ5oUWjacg3aum6Jmc4Ya43xMZ4N1MEqsGkYW8HvkvLgwmAUcTRtopzHMbhCj3RLGj16cMAR1GStt9CK",
  "key36": "3rax9L7iN6uXaZUq7rME8Ui6vyuQYWbzpYjx7n3sG1vNEXKSHDkvxmtuhoPoLAfUNsYK52U78KAGYDH92SzJqcQR",
  "key37": "43v1VYHmCoZ4U2LDHZd967eqt9G6jaiNZhaZLN2DMB2L8BqSS8vRokosBXJnwdCnJvQntGc5ef5GcTuC5eawnvSW",
  "key38": "3QV8W3TeEUxVJ18VteLEeey8yzPrAmpLbWhB3tHSqCqpZLvPRsEbRBTTksmC15gTMk9yJnLEXRHQQABXFULN4hbb",
  "key39": "5XSTEsuPgNbPFuyxTsTTH3hZnJgtPwVorAQz9sbatyPde4PwwNpxnrdvYqLGHqBBFJ82ZMZeSuLxZu6tXApw2PEf"
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
