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
    "5T4fPJaPRBvRMEmdzr4RKkoe2tggK9MU8gXRz3vxQstdF2g6ozaFBW7NUcRpibQJjEdkz754xgPKsFHYrr5VfK4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34HLddBBWmz4pZ67UWCaeHj4VK5Rd6tKGn3tC6uXiNKadyLAztd9FCL3M7vvD83wQPwbJoAuGv1pZLXvZU1kt7C4",
  "key1": "5XMHj8CJ4wTMKLZL539H4gFcD9jfRYis8mwYgFKXqa13gcCAfXf1warJ7n66vLZHrhetXsPaB5SntSCmf9VLiY4j",
  "key2": "2rizUeLDcPgW9zbXjia4ghUnUUkPMLWV8kRiwk7cPJL4WRqkTUnFZr6otowejaq1J9BNkZRVHdhyukzjVcV3pgsu",
  "key3": "56jenug2Nx6r2ihUmm3cPhgkrwNfRDBQf8gWPdrUp6GigMRThGeUR3AHA6EPkNmbDj3D5AQeS8tk3aSPvhRgszWv",
  "key4": "3jvQXKF99Yz85Yqxm2V8u6XW3ZGaLhcqMmQCHthgSHEPmcDHqut6tkToC7osLhPHVqhHpBnea1yKQivBQX4SzBAN",
  "key5": "2s2Fx4vTMWrnM8zWby3tcL93PN3uqXAqzGq6dnsWf7yMkyuwZZRopyH2N4qpv2FpcDGpzEe8YBNUy77RAEFL5wYT",
  "key6": "2BKDCoXpvSbDXdeuWaZssmbTyqngAwNyqNyZV3jrwSw9kYTtuLRqAztxDcEbELV3X9mi8oT65j1MiKS2vdYVgoN3",
  "key7": "62Pejak36oiVmXSpLWJs8hLp3Ec9od9Es7nQGPgWBwyX1AYnCDj2Yis7QwocZZRrVpxrNfjAQxVyBqBs9s5b7fgd",
  "key8": "3qP2n37UonPnfHkWwKXqtTqMFsiXqwQqqTuRyxGXyjFx5M4mzpPBXtWuZJzyRgj3oiGQDnkWdMDUm8wTC4CxKjdz",
  "key9": "5qkgcUC1gdrqyfbJhZeVCHfNZr97CXJX2wJSeuvDxiwvxAUeq11mXusGxnZPNLvZF9VvnLtiAVdwxRSFhBrzJMYr",
  "key10": "48bxJKQx8Bpx1ixbb4F5AadSPLW2aNAsyjQHuK2VYmL2vcuSzoZhuatk8qBknFxzMfrzJjPLCdqj1NX89nYqL8kB",
  "key11": "54E2ipb9NAjnTWmT1VnT4xDJAw2P4dxJfDUThogHnra4aUn4gsc2wDpQzuSKFc2gdiHp1xinQyaotWSnuU9Wqd8J",
  "key12": "3wVh9gZDoANMAtC3W7zNjX3tbcedeaBjWQb8cEjvo416NaPkntdcif9rmJA7gcvXBdz1P6hf74q8qr3WXbzMGkP1",
  "key13": "61SW4XQbr33ThkBK4rt7pZR2uUHb11ShfJ7Mttxjx2s5SbRkFsN8f5P7PqdWuyamzvZWbRZTSnFKxj8sCPFDyrvp",
  "key14": "4TqkQ4AHVtgAKFXynaETjeubtWuRqHW429H5P2YBHCxA5BFHKLkpG8A1LWnsQUJBX2UR4G1erXNCSLFqmFKpLTbJ",
  "key15": "2wVF8PEJS13TVdDdfXEbF6VMjTmCT28abtz7CWpc5iPM2gJsbfB6Q6FD1ieftndk7XsAErfF8E3q5AWUAaXdmPsw",
  "key16": "5Jzh7jfxfk7RH2aMQVBay4iksrPiZdURPS5bbwefB2DYFomHafcqaNKTt5jWwAYDEJE7Lg7SpnhBGMXsi2J3JKCR",
  "key17": "62CK92s32wqWkNepWwEN6i9QdR589hEFxj6chKfLmrn8uvZpK1cueLqdXknrHWehvjZpVP9szB2ZzDUcXHmPphHQ",
  "key18": "5rKETUm24KUK6Uhf4gTrrRdQwd82i71SYQEHDCdMwzEFyKpycjNnh7YFx6uYE2XrTjj8haHw1iaTh2oX1eyMSU5V",
  "key19": "XWsbpqYLMjxEWA1iaZceQB39ncqtpTiPo8EPM7YbgnrZi6TK5DHx7B6TWCez6nZPBvMrjLMa6MT3rcVpx33hnj3",
  "key20": "4xHxtUDbSqDfED8HroDKJWAp5m4bCJjosn9wVP8z913T4tege7hkPBe6B77LDwW8ACFAtYrm6ZsJQCtnbxs93mHr",
  "key21": "2Fsp8yU9gHzK5PKEzX57WpjYmLUCQVonfzTb6Hmz5hGgc3hnBiDEESofvWoCrWvDTGn54GDZM5fNtmvhyqS18d8m",
  "key22": "4BKq6v2f1VHSrW3f219zfz5QqAA9vULJcRjaBPY7MBdnihw9zuBMyBYHNkQRG4jihvkdzya2V6x6VRWVfxxoj1h3",
  "key23": "3rUK89YMwt2GR6gmo5tPfvH38uiyeYQVrA8SfGvq6ZNF3nBA8rwUjATHTVuSgrJgDJxf3trHtSvkxhhgEqJTdTpe",
  "key24": "4eQo4mb7oe6D8fTeopDw5Ydc3BSPaskB8BBtsjRrVsnSFQNU66U4dmbqE826rt9iijiTBkjzKvNYitm1yrJ3NpZC",
  "key25": "344y6g4uey4wGmoME6DWzrUHU7xw8DuUTaEVTzggtdFTn7dhWdRCX92Ak5UjRSQqATdXz2GJUQQUUnrpeXTFKksW",
  "key26": "58HyhotkrR9CEEwcUQYjZUQgk86yCA9RfNa14LN9KMdtcQFiFdHuoBbisqhWJ6YgqM1WVMXVxWQALcVp5r3AkYk2",
  "key27": "44PLdjF7huWoJAk5y5TrLMzjKWoxTW8q95H1HXupfV25trQPYFVEbPmtxmm4ovY74gNgohGTxRki2zyJ6k5KmiBH",
  "key28": "62Q9SVXqqDwjpdwadrkYy8PfhVYAv7AhUVkrfuoRWHScRMnZBZCbxi9PZWMG6QYgXLY2nNPVnFfQh1Lpawf9JRPu",
  "key29": "4uFnxZYK9GaSAAkS2qsoDfUH1TDxTRWmY7HBJSkiVHeWoMBJ764EfKARQF5PAmtUSLJzk1PXM51uHcrJNsEp1pPD",
  "key30": "rfjWQKDTpsHkp7nWb8bLKPMU5D7xCP3ssTtpkws35SF7uo9AHFEZ88C6jWBc9pcG5299TXrhJWYgp531J5XjS3t",
  "key31": "4RxwChFqyAu1pwXo9wsy4ykGcxRtSayuThG26fAf3p1pQ81d5sHi4i3Vd6kVz3a9duJ3kWd5MgiBwUB1D9Fakjwp",
  "key32": "5VGEDus9tjNif89FWr9nnUPZgDEsSsZHjK9XqFJwrnbeoJCmrjKEZKvLUr5qFDVJRaM1rgWAMGLhhfUcBuaz7CGs",
  "key33": "54wQ4MWZsaVbyDFzGrabJ1DE8w2ZoibMbiGv4iPoZougakMTTtHcNiUB7WzpvDJkvWK1eocSgtEsMzee6gHG7gXw",
  "key34": "AZRJaMYZq8A3wz3dWPWMJwfcqHb9nE7SAwQed6XopA6PbsPjbTScPU4gYfxBTFxaPhXeQyekRrJo3h56T78Vrn7",
  "key35": "KN63b9RTPuu9G798A1SYau6kHJ4mHGSCu3VWpkzM4tyuG2P3j6t2cxTecdL9rQhoTmgDt8nKgHFEDNBWNGauqVy",
  "key36": "4aeGykjMNhicen7cSqEFCfuutPLfFb5eU3d7HDpXBa9MWjSPs297gAMe3cb47oosrBWMWgxqVduuqS7K38zYJzBN",
  "key37": "4ZdKec7FF65CrBi2ySrYqsGmqVDGmFZdsLKwJ2GT9X3rNyy3bMipBUQmjTc24wsXaykpHA4BpgZH96BgyE7UyE9B",
  "key38": "5BVshgzTHZDErHhBne9sWX18LvgxVSeoSMazt6XR741vrEoZke9H7ZhodRvcLnJ1VM7wXf6egH8af8xC4G13SyXH",
  "key39": "35bbds3nxE4QbULJW18tFrEk1pJ9JTtWm7TqEz6teGtQ7sXZYWwf8cdR3Je3fm56CuJHdB4iCCYF6ZEYrGTRqrRt",
  "key40": "1TyFrDjYMmrCXN4qHAsCmawW7cS19H9A5goFKXgm1eFXA6JKKrCKygGV7aYFAmvjaNWMbNZdEMAd7iY6ftGbEKp",
  "key41": "4vtkXvkFYNQ1iLZ7APXpR1BWSAiwHvA2U1bysvDpK4TgXvNp9MvQm7HALMhAvsVfrSuMe9dU2TMtjNKxp49HuJE1",
  "key42": "52m7EtdxV2L682w6v2oKsznU5CDndEsHT7MmAg4CEttXckBAqycZnFTCsYw6uuFC7A9uteG7FiNBeDUXEoVjd6qn",
  "key43": "2V6qcEexU3M2KCzZudsbzsiLqZAtu9ZopvwJ8hL32is5mdPeNkcVkNvR9n8SoESWqMHpRJ8YuRBwUz3ghYt3umjp",
  "key44": "5HpbKnt8dCkHDLKHW6EPPzVQKLYqycag6LeP7iHNQodDiv8g5mpFFkzyjCow2RKjkUypNnSvkoS9KUPsszzm6VFT",
  "key45": "2V1fmV3pigdJXoupM28vCKtXfyUMebJ4BQa2rP7FKWnsweFBKD34AZ9XW66yRHNhS9CjHYqydLdfD84ZGenL9Y9x"
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
