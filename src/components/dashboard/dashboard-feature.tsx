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
    "2hTymnMEECmtS5AETDYoWrKzF6q4UbPt3i3TheqVfo5vcdpzEUW9gmR8KCeRWnDJwCe7Qq77WZcB6J8L1votKhww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjUbWUiXdts5e5nqoJ9w5N45VQCU9J25ZXfk2Ak7KuJYhdFCKCoSu7Nm7RLoHfVsHNLfsE2Gi3TJcSD4MrXFo5z",
  "key1": "54SUwDt383XqjKCbJUA2zKkubU347SY7SRezpVTknPewgPcX7eB4MuQ31VWHVZV872zt665bhVFBJ2Koqg7CheJv",
  "key2": "4ZwYRZLgYQkMNtsBefLrV7SC63c3jD4XigdienvfgAq7fxCYna85KQKv5H3MPN86H1F5UpwLFS4sZcJudXPeDieh",
  "key3": "4SigGSgLmm1UaAg6MbTe88yzG5RmsDVmcegf5UT5iesAZM3fuWUsjhJPBuetZiwrQPy7HUUhYXB7kH5yQG12A4nL",
  "key4": "4vF8cUppxdWNTb36gw5LNu7tTWLybLH4b6uU71rQHceATAPdYZbsKVy157XvTJBXNjwzLieahxoRDnWvtsqGzBxN",
  "key5": "b4JKDsBbVLwyUMabBtZeRHEyUk1BHGzdJSSPNgPKPKu4LmcWn8cdfpSgpke1tQfhBVqmCRPE34AzMegJZpZrBG1",
  "key6": "4BcwmBE73W3YJoZ7qMp5xgGG4N1YBs4JP26xxF3jaT2ybaT3EoEZSFQy1e7FbyDqXUnYFbURBPoDd2hsg5UZjAfJ",
  "key7": "4uVRe3VEJ6KrSLXk6u6Lob7ZZ9u6Fohakvg7HXfx87hxRcaXZymzciJb55sQDM6TsqQjVTxsL8WSakN8jXGTw2Rv",
  "key8": "5F8LjvLtfFz9opvkgUFpD8xpz59dDAixiNYza4pGW4nJQqqEHKxbT6bxvJkEiGZ9ftBvs8YteZCNyDfDV1QiL8oD",
  "key9": "4vmbWpnsc9jzC1SDMyc5LBLvLXNWLRndNxCmEJdSKRsGt339MhtDMZMa1zdRXdxUa9ZRPKr62yoAXzaxvtVstPZz",
  "key10": "EoS76jqvb6HKA9MUUwfVYmVCvnW2pPsABGfYw5AJhTb1jBedcMHnBo9Fp62xD85vegESomCCkP3a2XKVqSbw8jn",
  "key11": "LhT2fdyZdV6wvNnWJyKzn63ZkKp68QUWiLoBSNbGw9n5dJdDQQxTdW11w1yfDVrsUUVT7ghPgN23dhmR4Eu7n1Z",
  "key12": "4Zo6oDkbM4aMXUmYbQ6GzAef1Jp7yvWQzi5QH3yerhBxhbdqNF8nN4wAbDm6oSqcQTanWXPSwbKChZVuBi75bETa",
  "key13": "b9cicVHDNUWeFGWYPDWkji1M4EwY6aVEAzMXNhjvSE8JGXgmoxAje3iFjSQPcNzF5SHa4cZanFBCy655rbm61Dj",
  "key14": "2wfdjZZy3kLJoA21XD7PJs4is3nHXtXrN83Uf8ypbrs8Uk4rg5QYJNFtkPsutogLKMbHAKGzCAfNe4BDjqf5FBvK",
  "key15": "2n7nfmt97BwQPp8b7uUagRRCmPkupRHA4TvH7Gkx7vWgGG7qijZNYWGHkJ18DffEurQkmfp9fpZzCpqnZuhLBdPP",
  "key16": "5Up1eft3nWTD1hJWMmRreAkQCKBCHo4GKXTVeftyYypPLskzCUTE2YDzYgm318HLCrVgJa1SH5YJ12kAq7uFemF4",
  "key17": "4GSTKp6uTU63mDCaiqE9jvBA281kb6N9VxeJ91CkGCLQm8bUzj7pAGnHWCYvQnH5ovxgFMRMnbCVhTLn73UGtAcd",
  "key18": "2Wxx7LYXob5CC9ZMkrwx55VvxogRfqe9QcJkk8bVwa6KbKRu6N2QXMsAzLfNp8RyGmU7MWTu1B9wkuZyECBCxogf",
  "key19": "75vA4eAMru8rhdwcLjqP6xkBbAEBaFeCNmTzPhn1XUmTH42jNqnAtuUYdTx6rhBvY9DV3suthCoj7ttHFSAPsEA",
  "key20": "42gJECa2eDd8PEXswHgKtPdgJzALgk94REi5niwxSFSsRQcdsgxaQjyMqM8AK9DPmmWNsftGngjXhLACx1wFDW4P",
  "key21": "1cinTPcsdaeBYq9CqSndqck42mPKwmywkPfXYKMd9NhLjDjXruE6hLrFVf1WihSPZpN3Wzh9fLZZrTFLNmuin9f",
  "key22": "2EM4XGEpAt2MGGPazQ7nTHqqbJadUVwNqepf6PWxzW5STUvpmSbUpi4Jra6oE7Ao5Hxxn3zJ1zZf4vN4iGwr2rsa",
  "key23": "5D2gELKsGBGioE5iB8KPnXatZN9YngskHZ21T3JaGhJy4HaEhcqxptEZvKQ7Ki55cAbSzjUjsEbtNLpEky13MtuM",
  "key24": "65WybQrRndmGahuFnKv4dUsARqjbP5s6S38Wr7ybFy5BfpxEQ9nLP2EcpjuGL7EFZMYZQDaArFfkU3RGe56Ac1W3",
  "key25": "27boDXAzUAcSkMimu29vmwXzL9aRPG89FVhgRA1qMAzLhxszhfvPKHEF5EQBkXmz84SXwEhREsxzJhyxfJ7rXdMd",
  "key26": "34qoVSQwQE3UaPdjJsLCs3kFUPA3ifDBsMsomucX3wsatWDQufwpuaYVkGNFjqKpar3dEFDNXB19jQkiRbhcLkU9",
  "key27": "Qq1ZSnqHXqoQBWf1PUv2ixrfj4XSkzgzAsSreq5uGynUC1aBxyntEM8UhDc84y7dGeVirq7weZvojZAm24RFcoi",
  "key28": "4f5JQg8D5gHbngMK4DHQNqJt9Dh6dGB8GnUo7wq9SFx3kkxVMQAAzF68NnVe9it7mTgCV7qWYcEWGHYdDrP5VMBE",
  "key29": "4LezAtjbDn2NhoKjfGcA8abrYqfwTH6gqrwMXLvjRHCkKTuvre7NxLUNZJwpfN55zErBVBXnV9EnXSBdvjXoRbMa",
  "key30": "22YZKKLgA7giwU6TfTyZpwzkxjns4TntjkfCigJahdbKzkTnkrTK6ULPJePpHJSv7uScGzvk4w7TNGzZQDVC2oRe",
  "key31": "42Dwywe5VKs8LLynoyiukXyR5yJfDAmvTupeqobu4BAE9NDabhQTyPUrZ4SheXCMqti4BGbCvT1TZ1VeVoastVK4",
  "key32": "5pky1ozmVr8zuqU2JvARUVW1yEooRvVzJLLoVDwN17xpXmkXPt1iFjp3fZr6K89wt2Ku2JVfcJV5c9xmczQB9EN",
  "key33": "3Kcghn1MkwdytUEMWYiBPToHW3DscHRviokD1NoiZaYfKfgU9CrtGwEdXcjJQ3XJaN1Y123ppDEPgin9rvnZ87vo",
  "key34": "vfvdNhxSvfKeKj1yZvuzNAL5Z8WfHmhrcH35jBCXwamB62kPRir9mNTr3htKbiKm3AneYTPV9QNyFUHh5NhzmUc",
  "key35": "5WDJ2gi1cbEcXXnuFLxW7d3v6ruyzQZfgPZT27EHUQrLjhWdZqfodnyeDKen9BwxYciKtha49GR1vhfcdneanFDE",
  "key36": "5H8L8ZLvagzioJaJFoT81NyjDiFit5HDGitkbYofXU4A44KhqHf4gCsZunrZgMBnmA3rPGTuAFaJhj32QeLPk5F1",
  "key37": "5po3MnxDV72viHi3jfT6wmgwu1yzuw9nNfehkVSbvNJ7GJe5b3aha5Qb5sVZHdnpK5X8uGNneoWptWudhoLXwENG",
  "key38": "4LfqtLRAQ5nwpCzPfv4QQA1qupnneLwjZwvjvzdBgCmW767qBMBFT1XcPz9vdvDuSCGXRZ9TKuFc1QZ8V4pUDDMm",
  "key39": "MHWQUaB9kQ9dw8RkMCpVrRvpdntY1b6v91adPELW6VqnHuzr6oFb6p4mzcWxsod2Jmr3owsN6kUuWLMuJbFqc8a",
  "key40": "5JdVxxkVFQWNR31SPQ4yqgwevT6UUS5ng1vbkhd3uiN8LsFhYwoKWCb2kJUysxP876Qk6rywvj36nABghXjRkf3g",
  "key41": "21Wvh1eDWm9KGXuycLu5HQwog4hDcattbAjuroGQ4YFeDCKRKdnou6y8kwiQrYg4YE9WuHhpgZUUWi3eTzn7aGBH",
  "key42": "5x79Wx8RiwPw7dZgwPpA9xYVe6vqF26tznUFzZSY9tGg3utmbQ94Aa8ha5j7xCKUVZ3koKFRZGhAd83YMDfEPxfF",
  "key43": "5ZSzfHND7HUWpWiCce68Gi1JBwEXoApFr3KZj6U18nEFH3K5LSiKspUSZ1wQ1m6MNN55odtvYJ7tKgdB3DsqFChH",
  "key44": "2EnEx8q7LKMWukaddEKMgotvUjiZhMJzQZdGAKkqPFMKc3SPicts42DRscTBP4nxk6Podd9mTGcJcjP1um28Sf3Y",
  "key45": "5uA3m28kffU7WsX2k1JhDemtJ5a8cwsdbkQ5ztSQb3KTW3NQj5B5mKAMf55D5PDHu921b8B6rfPa2YR3MbKuNkft",
  "key46": "DWame7PU4FFRFfcFb4S3v57SnDWPDYBGRAAsHjcwU9bYAuqxCZrzCbU2UtCGdueRoWjyVLrf7JeMq8bHaUFKBJX",
  "key47": "2TEqQR2HZ4p5ZsFi26ThiCwpFEpFNhGK71GnW3eEGMzdQzHawq1cxuyfogMonzWHmR8Sg8NWvgxszihWMUyxwPcq"
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
