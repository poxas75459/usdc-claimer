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
    "37L9C2hrgvabowTZN1j1x37rShhJsiiWvcJzFsTG8wGxkY142iekvartxkT6HDEG9L9EJsYdpgoXJM782MEDyVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAGyPPrdPEhNxuDpqV3Cu9kK8k1n1SRS2e2nFbrSUJiK1g2z3eWbTKRxTqQjtSrL1S4p1zvNeFXoQ1yD2QM6dN",
  "key1": "kLokDqeNCmb3fbNWM2taHnHSj5LWHtkMitF9Zyji8iKb9J8zuXXLGw148oy2qLtUXbRXwEQe5mi27dzHYBb9Lrm",
  "key2": "ToxTACHX3GauxgzDgxMvbKnCBW6nA3RpMNGsKcpbmonf2yHpn7jyr8P6XYquGyEzf1MiMKtaRKiY5KFuqb5EZvX",
  "key3": "2txpEvkEZis57puCp4bZHmFZ7NaVnds8jzCARti7tcYiusPa7SMWfntS2aQ7S5g9Ep6FBp42im5SeTvBRm6GXL5u",
  "key4": "3Eo4E8M4diTcrTsSaoaNArbrBJGUj2dqk3Ui9U4Qtfyfbc3PbeytMmhfMoEoF7G61pVLr3axb98ock5s44fgbxVe",
  "key5": "3NNt9H5jNKAKowuAkh99TekNFwxSDmFNCyDCrpkzS1UoqfJVzQbmBRw1gSsg2kDSuCQ8GBFkHbGmkzQq6Y6Y9Dju",
  "key6": "3m6osFJmptKaZGpWsoQ3EKkkY12QE5L5eneEsg6d6SUE1xpdD5PM9T228VD2NFqccHdYPhj2EmFipjrPCkMDsHzU",
  "key7": "5mjuuh8D7XanuT8W1SkeM4BY96MoNbB4pzQ8jtJ7Ffxrjw4XJ5izMDeJv5RvQPdEovEbSnQrTWnU8Xb3hq87MajW",
  "key8": "4mmB9qVbpEQEae7FgqzhymmETMBL5QmkiSRmrpCg4SXbSNiAriz774YA3pdeKDZz3QX63F4NWYBkEjqHYTNeQFfv",
  "key9": "4saFhyQFTCiWCJeuaCWDyZoh3H1ezgjTWELLyjPQTVtstTsXRPVUxXRkv5gMjjcs77ArxSNggTbxExxQFPtPEPkx",
  "key10": "4cPSkMyrhwWo6Mnny6NZqvWWHMxuiVfqGb7zKFD9bgvP2BBXnAc6qwW3W4BTshtxbdiAM6F6gpMFP3PS1Txb7ART",
  "key11": "5xvq5vsg6WrsRNqT4xVTc6PWDd9pChT43SjpMCu1UJaRW35tGizWyNWfrvoGprftR5BotjNYmsa5VnWqoFzpZjkU",
  "key12": "38DeBSFgLPtG9Z9DXfQ44VXn1K9JFA6KgS1AjfzCVPMYn2vZm7N5pr1fboVi4Hc27CMqrAyJubZNYXCVdXSKbsFQ",
  "key13": "2ZizUcjeRMfHz4YiFHp16u3jbYh9cpBQi1GtiKwJLeswXSJrPek7umwWerFpmyxEo5W3M2kG59imGS3s8WWQeMuK",
  "key14": "3yz34RUkK6is7rrp6p4nWUNrU6TuVE8wLTN1GeCok1zL9T83bdUv5XbTLsEA2yXYH8k71NYn7yzpMGt4KeCUD972",
  "key15": "3xvWMRBUV5PN8HfTTPUw8JshULWdLFpdRGqu6tVyycYqejNVuPAb44KwQ2VnaLX1kuU3vw2KZZGuxqqbVymEXAZf",
  "key16": "2XDEqnmh2QKVNCNVN3dPSds2YbjXc4HYaqJQpy4bCrdDi9W4BiXR9k9x8hSTJmGJhPPwrmxBCadHpsD5qSRUjUvp",
  "key17": "5KUerRrn2ac9e8G4ryLPy2ip2fxvMEgad1vaXxEmUwiXg7fWdNJreJMAEkNVzay9xXXeztvB5wy3z4hqeJs8ys5t",
  "key18": "i89SwVrD7xA1Dx4VYd8R1ndArmdT9Y53B6UMrdNssCrfEg598hmATAkNgMEZfEVd4Kg5p5TP2bifPQQwPQF58hy",
  "key19": "2X9QxmA2rMumETGfwLWnZdge4J3QB8LfSDKfbKeLSjCGz815F6BGBwAhude9dkwyhqSiFz8S5N6UbhEMUYb3rWv2",
  "key20": "64kVcd2Q88VAJUQcEMiC7vygtSzoKccynZ9oA3AdBwQta8vHYwzxptiA8U9XTLnvAZLkBzdHPyGNCkyvBe4sXf9G",
  "key21": "QnjSh1YuvySCMfD3C4Pbg7CEEy5jsg9yMV5LpCmcg7F36J6B7HdF9RffhWHmrWws5NhiFDQwpV8HJctceS8doZq",
  "key22": "4LPP4zbJiCPmd7ntSP4pczo9UNXJ6DthEfXTXCvKifsby2JnCEsruVAmeXty5HGQp82Ru58w2N2PjpoMpypkT2TC",
  "key23": "4wbPCHXWheYyFvDMxK7jDEYzGV6RmXhDk2Rk3WUUa1HrEE5PtWSSJm7HYohrVHvqmBJBe4Nwv4kHiHPAcdX6dbvw",
  "key24": "4DT2EEUUazmtbNDZtsBscZx8wZichcvigGWdUkuHHEQqf7pJFRWZyoBim992iZxF1nRpVTgYzjFH1G3yAhyHYeqS",
  "key25": "3MZy4oPYgfFZCw5UNVMSax4cCqReEtVo1P8Qwvb11nnz65arajD7uF8LU22Qtq868gvnQnArLi9wq7BmwENttjVk",
  "key26": "3cWLaGAj7JaaonW5J9agbd9Y5Ds7wP4Z1yRQvDZm3bcaA4kmuVx8eKAdVVZUm1KuSWKHyviW2woeeaLcwCJQgFan",
  "key27": "5XEtrgctMN2fxzPnmk17whms1QgSbwKzNep7foe3jW3kw4hk9gHZuYLZLbeA9QeQeShbUKQqQ29auuVNK9WJfvQG",
  "key28": "3urHhVEZD5kUAQ3zL6Xr5BNjQAafjDogmeWEDRC8nzkEcscxXkSKAXq9Li14X8ZKTYYDjFVQPTk7qYezE1duv11p",
  "key29": "5aHSrGxyJhJDwVCKhuQwHUqdUwiXWxCqbejKCoFdHjm1SbvuTW8Xm3dCzRbrMVULLWGswMVzL865BzLNjwtiRnT1",
  "key30": "3EHeFXE8weNe7p4A256eTZaJuog9xAb3ew1u4YVmZXEgXwcN2eE71pBVz7qAhGhPk4ZUdu53xcguvkaedPmScLUb",
  "key31": "311pdeiPkSkrLUZQ7eVWiMS8kbMBnqMeUNHtDBxJfuqa5B7fAReDDoxZhArG5TAqXV4zXziGiyxozFsrv7z46Jbw",
  "key32": "2vLoBdJJxHzH6eJ9BgzQWTq8tJXvxTW4UjNzWj28YUNs7nAcLnzRrD3xNR4CfnpW1dqJsgPEwi6NWs6vS6He71fG",
  "key33": "66TNEFmvBUcfRwK8E5xDAx1rkxhqPUMFoJ9YRrMh5qE9tepHWTZW6RcaTW4n3TkXwTWLHEXQmDNrFRyaap99Ramr",
  "key34": "b7XKiVMSBGmzCZ77sB7YQUP2f9uUNZLtFvVsX5xL7LXqdB1uXUtxBkNsqWxZsxAXA6SGLdhF3Wj6q4YueG776DS",
  "key35": "4ikb4y73EgAGudikQaoNWWoQqGniTdBZmEwKE6LSw4Nn3zKDSmVBcbpK6tcM1kzMjvYHBjgx5NcrjVH85LQyiUE6",
  "key36": "YCLMfH3yHjHftMPuC7iX4ry86PSjyDYQayeafQaVuk2ZzT17PAEZudxd6CEP8x24Uih6k9dqNPvtLotbvExwuzE",
  "key37": "3LXMhkEhjH3xiiqg96ysbZ6b3TUyyW5HkM4umoE9RLCYkV1arFzrXdeQgYoojWa3RfLJQd6gbSHFLZdUUvsKXwpq",
  "key38": "5mv1qwRmc1uC4NVTiESDBw9rvACgJFKLSvyU3MTujQEsJXRudhVd25b5jLdEZaCCzFZ5JniifZtAPVEkENAnqeik",
  "key39": "2BNJsB1GjoD6xkXp1rPn5hX6NcQd7KSvSycZBPLmubfiYUa493yXsZ11pnYhg8CwUHKut88KzseCYegRnHsN9v8i",
  "key40": "4ySc4PegViF6bBKciMz93nSUWkCfLnJp8VLTaQUKcQyjEsbQZKNSMFdTyFbTqn4uyxRJpvokmMf5ATqww9VFx3sy",
  "key41": "47S9mHTiGoCXyCZD8w8gJPr4hwS47KM2fU71dsKSjrqfgeZBmDq5hCugSgBVN86pQo2mbKwqgkWjGjX8XRjJ141p",
  "key42": "523K8Qn89cggEGGz88CS6VTFbaeiS6FwHo45WEf9U6qsez9wiDw6wuRb1QadXreSejKx7T5mQedsPcij4GrQDZY",
  "key43": "5XvNQhp7czfXbN2B6idXDdx2j5Ar5g7EPL1Dr6krd5Hk1apQAQuiNdBA1szAqsmToQMp6xmjQNbJP9uN8F35TskH",
  "key44": "4o4tnJ2nTSynVYRisRPM2wnJeCPCAAEARYTLNw6JTQvb2x4ZkYqnS9aJhd1H5NVYyuAMxZ2j14szJLSeEuDSwQra",
  "key45": "3M58vy3egb2Zv6qbfqN1HUXUwgu75bHFsSmyfCznjRQD5zUUnvfoLyPfMP2LA8bh9ifUKCr6FCqQEEARdMKNq4cd",
  "key46": "z33ELDxxsfZvocpTAzw68bFr3rLgLYut22JU7CJjVo96Pa9z6nX7Dvz5SMVzPDV6dYH8AofxYjtaPkWzXnm6oT3"
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
