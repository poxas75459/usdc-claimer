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
    "fEfykN7B2nK1n47cxRzmqGNcxDWVftU464pR2ygKqh32AWM5ACM9XNsLEh6LzR7EYUHp7LdCm6b6EJ1dqAB7BcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SPxCCUEyQzBfBKvj7GmkyXCCNS7kaspAbTGDA85aX87L81UEjLCwzjNLcYPC9jzXqJRboKwUfPD5XP173SohcGq",
  "key1": "46dqR8PbRSrkYQrhJum8pnGqNPv8T5bHgVAPeym336tC2cAAaEQ1fP2uT3YgGffipk1nVaFLtFRRMpMhCPSE3rkm",
  "key2": "2AYC5AJQRgywU55t53ZJvaSWA4MeaowUuHhzp33fmcNsqkYWXZceKeaiqtXVTFxKHHXvDnsWtQbjvTAWNK4M3uKK",
  "key3": "6dZ3K9VDcAY2XWLboyceDSx58hnmTWHw1mcUKWdUE1o3Zueg78xn82vUDtrT13SChfbhDn88H1vAXmLK4Q84GqR",
  "key4": "4PdnqJigb5p9HjWJo6TBwGrjTS3djEuCobt2aX2sZy3CQodRqX91wDRZ7axf15LXp3dQQTFFtJpGUU3RxVRSgbCR",
  "key5": "5R5gABC5XJe7QUgJawAu2A8E3M3mwXbeqq3xwdBXvHyfKztfg2mhEmYXUv7sKfUQbksSrRrHNeHeAzELCJHP7BEM",
  "key6": "2j2YexKAPnyfM5awKEUPvMg12hKmVqZmriErsHYJvsqFqgBGHPSQLVtrV9BRcTnj8iFGaYn8qk3XpxzPzgSHHfzF",
  "key7": "2ryvx1RoPzEgAei6wKLWLqiBNkRFSDuVNsnKCegMvek5bQTSEndn5ybWRMZpEy8vvhnLc5CSsXd4jKkDhbUy492n",
  "key8": "4hcr612F3iX3whnoYSBZ6n7nFW4rsedNmbHF8hqiBuwA8qdYkzHGrfAma2ioPy6xhTUcD1oZhkj4jEpdsBUTULFx",
  "key9": "3m8p9jCYfCvp9R8fmxStkmUnkMhSosEKwhFdV52rgDPmbhtU1HYwgVyJyF1oWwezZQcSeJhKHKsbxQbJ4zpeDB3x",
  "key10": "39BCH9kXdpyWDwLkFD1TvRUtku9WfuKPALnTmGyqMx5BTohn7jBHTUNt7NC8bPL657D2SmVdBB29FAMto37MUaPM",
  "key11": "3j73qPzR53zmxjcXZyjYe7P5oL4wgoWpyrpMmBySB7Q6MmFskabwwrAgRrw2hC69WkRfF1FdmFMweJqfrp4UNCfk",
  "key12": "UeVwpdgnFzR9scaKE1y5iADczkpvpMrtkQNqMc2hA2nE5CW8F34hLXaTiNahejQw4EvMWWEQavUMmNHVWfthkH3",
  "key13": "5A1q1KPxNiWuEH4tuZRQe64gKsQJnJ1zc1MUxVDVoP8NR5gavhZhvSwqD2xgZp5gyPLwm2rzdsjv5jTGwqadGeKr",
  "key14": "aLkdRCVmFbo8f7vCAnFdPogL61ENnnAXdgU6vqyr1EhhkqYKKvgpEc9kv1Fbiun6c5jPMiZiP3T14HE5TWUQskF",
  "key15": "4mwfLrMjh9LeAwJ2VRehewST4tDYRjMKYFHBgA8WEMHrRtmJYFCgcMnisivtMWBtD6WH4LhQzVtM6mkw8kfspsHg",
  "key16": "5BJz37AjXBGmU7anaFMRwyedDtZH4ZdQXANWcuJQg3GyGEg9Yb3NhoftMx8UaWk2PHT5EQqPjzPN89AjDmMjYujz",
  "key17": "2f29fxv81BxAoNdrbNf6RdrnwYGyvnFCvQjqzEamWMoj8fUhb5V8AiBL7aVsZY5sbWC61CEF1FB2MvXJ6ZLXdx8t",
  "key18": "5uktzrnUfisMzyQbWrTcMQtvLAYc7VSwWK9H1n6pTsayWGHSoY5DWnAwwjSPBE4rcFjgeGLKsusAHoR3NFZ1cBPf",
  "key19": "3TrSdBsvJVWT3D9SB5geUmQ8GYGAWqz5ijhu6ALRMEdgJeT3QeHspnsHyJj1dEepRZx5Kcss98Cb2ghrE1cYWyNK",
  "key20": "3mgMXFdbJh7BX6haP5WAWtSc3eScUqSmVuoaHzFror3LsEvPwEfdmd3HQgbnQ9hD3WwuWUiTVHP4xCM5ddJv3AL",
  "key21": "3Nn4DjQffTDLNsXowBY8FGAfz2c5x3suFiP6Aum6yyAcNrR3WyQphZjC5Z92g3qUwqJKZdScJPHPLh2VxvW6Nsz6",
  "key22": "ZSF5QNE5DvkBi6m4niwB6aKZrF3pndkbgDSF4WLhfTHca1rS22hcmLNrJGkbi1SLLtZg2nsURFnef7MfwsorAun",
  "key23": "5e9CWfAKfRwBKDPCoQK13Si7vogm7khkMXWDMNbEjXAz1jYKAjpX4DMRRWToZeGF54Fmi6xUSGGD9Sc3vxeSSJMx",
  "key24": "48r5xcuNANx1uVWzzxFAd1br6Uo4s2mf9pa81SsmXSRU8F9or55QPrRwTJvetBh7dxGYdJktcQf5MDsbsKt2B45R",
  "key25": "2uA7DNaTfwkFzqLfgYfoud1K2q1ggzreeu62H6a3vBWcsKwEjNRtXmkkHyghMyg3ykWGRXJvZT3AZE79jChQHkgk",
  "key26": "DE8KtoRjYoJYdJ8SamWKpy3MF6RVMFUftQuV6sonqM6jK9g4GKu5XvJZ5LdW4UbrYR3Ejy4739osx4ZmcPKbknv",
  "key27": "2xxYUZBCPbwbdZ1UNBfhJia6DzNAtV92DEMyMx26Bi3vYQck5bY5pU7oJhq39W4DeXQSyVuVzWnwkL6siyW7k8TG",
  "key28": "2wDtvgV6qmvXhrxnxxbHs7naQiimXk3DLkNfDNftCwFXzdj6bwz9AJHiRoK1CVKaQxJaoBMmgHQXU3R9MrB7ojCG",
  "key29": "3HUjRynPSjEvx5JP6qdr3E2nM9tpGY3YvbfpVrxhz9PPxgTnUZUCtcezZvPo9QD9rSxRtw5ZEbtSFi6Jv6uUGycu",
  "key30": "61ACfnsUrXVpDEQJvnRvTri2aGhLYGQ5RVDcmBbiYAc5yhwgr8TWVYKqxbQkDza3YMhqoBqTTepesHqyHQJphQLB",
  "key31": "5uDparoX9bFyj4HhpLtvd3Sae4V133GaatvCNPvriWqCbDsWcBufdn4Bvr9A3Qmdv3s4Rw1PuwfE3Qoj491V1YqZ",
  "key32": "3CpUvq8TDcgjEH1GyzCXXX75gVCQygu3ERkSU5nTDzu8mR1gABjBA3cpKJM9vYsibTHVax7PEJDhaGJwQq3UQNEy",
  "key33": "3t1bLK1ZuDxNwLGnBhEE14WXEp49udApfguMcxzBgHFMWTJTL4dGqnNqsD1gppyEUNk8fSrwm883Jq77RrTt65qB",
  "key34": "29U3GzVdFbL14y7XthMSaFx93BwTTCoxMpH3qs9qfrNhXUcihBeu9R8BVVmzD8eWuEBpipCb4AtNFTNG4pJFnjHs",
  "key35": "4JpHjVtox3DDZv1hZgcvxcWfn7rSpt6tDLy18V9cCzayfaVCppkhgoZiiarghDYYh2bApsjqEkQJfT61r3pM2JYj",
  "key36": "27Q6889gMkgseFyWb3XMiJmsqbQ7yTgvUwMBXgdtDqexv31ZGdsZK6ofVMygtLKM7nZjEo2vZwHPzoySaZKgeZgL",
  "key37": "575FxwQo659zst1TTX79db3kxH76R7s2m5EygqaMfazjPvGvNktUmchPTPTea5VB5XjjYgdBEfaxTLVmtvUFHFha",
  "key38": "3LhgQFND87XbviFz9Vpv9KFuCDSZ7yfd7SrNSaYGec8sczB81wZchUepLWfdkH7TmFhr4KNzm2LGr3nXHXdf4xc4",
  "key39": "4Yvw949w4cfpmDGRiqWN5pw5gYGqfAUWmNo6BsA9L9jEfuQBe9dhTwcefTA41AuRxfWq75g4Pd4FavoaHC2boERK",
  "key40": "ZhXaqGGtts2Bs9zcBgtAxLDbc165MvmubSZ4mq5TFrPfoBg5iNShhRXqfyhjkdSXo2zQVdGevrSWxp8URoa9yAC",
  "key41": "5KQ43WRcagosaGtiL6L1jxeKadY6se3au4nVuqZq7UkbS7NNcwE7Wm5nAeBg6bpPG6eMXrSizx19GFgWhPDLkJUv",
  "key42": "KjakKRq249EWJQ3KmjCazooaryzMcVZnHg4tyN5nFKCzMQwotNJLhaLQHXwTFmCrS3KSHNNiQspvQyBFZMhT8cb",
  "key43": "3ufgFf3XMMiHyZ9u5gefE223ZNFzhK9L9yF5giXhCK7CG3Wcz4unJGj26BUppWZj8EfCdNLDCzzvyjTLE7bH6NNj",
  "key44": "3FcM3tf7eQfsbMLSzbeLyAd8imXsPHo7C4Dke18LR7gZvpBCsSm55dDwkkp2Mf78XbP1QdtLZeBXvSA7Ne1CUjni"
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
