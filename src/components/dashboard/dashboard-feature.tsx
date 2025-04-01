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
    "4SrZRB5SGg7eakAz9HUAuo6BSh3nr782EtwfQ3iADixSeZuXLJTfiGVGpnXj4TkbDGs9F4kX5NGxt2FzPkDcApAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bah4KjPeadmLkTQst1Xx7KQUicG9iZKreaHuUZQbaSiUgLGbZCGdJnShFBHdU1KdiB43qqEDwY7y85yFchm9Xsd",
  "key1": "4nYC3DetViECWKKF4RYxSRj5yF1dCJG9rEozEoyaYUBNkn4wFPncpvp34C8xTdAoYyRpzzkMfiX9bmKtMPmTazCN",
  "key2": "2kS95kxE15uNNWJE3s1CZZiwiwCrgw577Zcnvb6fHhoKb6zz4xEtw5UhKmpPwFjtAyYEymSjKcmg1yV1K3oNhifq",
  "key3": "2NUDBkbEb66FdAXrE5gWCbCoeaiJYJTBC42rCBYyph2fhMyGbgvY9ZncY3Dpgqv8qsi6NhCV2h6mYx1Q3baKCdFB",
  "key4": "44g69BN8trezbTK97MfYTReJRLt2JqRzUT8bfjzuVcFJRsgFEF9bUyE4U3xHYmZXrYWbXBpRxSUu9AHivtrRWWF8",
  "key5": "4zQeZFQaqCRKicYSx1WCXjMKEMg7jVQFAmd3yE6iqzxUvbt3qkJAV652tQ94nHVLcjsty3m1XgZAuroabKAicgYr",
  "key6": "2tsbftnZ7iCojziB9GwTNzvQ56ZRoiNg3WjGXaThGrcdWaYrVCZCfL1eavqpcYFUVrpPUMAws6oPnN49jUJieUi7",
  "key7": "3Z8DzbBgnXhaXXiTSQ3WfSgR1pg1kidQfwB9EtQtVM2H1ptUyenXpuwisrpCNB3Ks1M21yNAZ36faKsy4CRzqfAX",
  "key8": "43szwdCD73Tb6ukw7ZJnpbas2VJT6Vm441VtpaZMizMUiQBWbid1S6T88Mhz1nBiKcnjYgQxMMd3vZtXKYfpkVWh",
  "key9": "82XtRtAMvS199nxzbiETP9jmVnw5PqmEtqvNYrMgupFL9hDSRJAdZZmQNef22yqdB9S1QXwKYf3C1sjSxq9HGKS",
  "key10": "2PCQJKCtz2YQL3ZFZSs6kDfK3koNR7JJzayEbQdskJkNemchbY3uybVmtZ5tSK34xHB5Ub7tk2fPuQZutqWi8BWQ",
  "key11": "4QJ2jG7LdVp89Km4Xr7h1eZ3vDQhNXxyzbpVXCp243C4Fte3LSyiXhueW88mwxtbhZFYavL29KKatLE7YcNC6pzZ",
  "key12": "qwas21pp2qP76Ya3jnfhtRefqWiUViYeu5tQcMVygz5HGwAP9gktxMDcUKXFcEUPUksAceBgm5SGqT5hkXnH3WL",
  "key13": "2ciMJNouDtVxu718jUFpWX5VZMwaiEUdGQq8zb3ZPKPou52a2gtRtAMWyjGh2RM7LBZBTNAAAEGFzyVge7c8wqxk",
  "key14": "2hQAbDNMzZ95qcw5oiytMh2aN6pe7xAwkj3DKyhqbJVHi4AnfPipdb2B1GvNQe7MfeKECPEquhqiKnw85ucnNhLn",
  "key15": "5JYK6eEwXX5Y6wtWE9fcauf7wTKzytERVEmtsXwyeG9sYnGvix5bWnaADLWhGsWycZBNqNN1gkZLw7FSc5WGkUzg",
  "key16": "2rgbziRQjQVCYwACWQm22e8wgw3P3Wxo8zqSxPG1UswV1k1wbtJtea8UbUsJtDeLL8Z7AQfV6EYLha9nZSRPjKtA",
  "key17": "42hQLqu4bNRp4qYRuihw8gJX98mhc2cpLqzk6pNupAu9q2TayYfqqfiA6J5UHX3QNyji78VDeqVi1ZeSGev9DmGf",
  "key18": "3tAKYxAi16KfuELUw9DUe1pLaujieRq6YK8oYgSAcUy1mt8Vkw77peK47yngw4LYP4pqLgzpfTSUmYi88Z4t4rYW",
  "key19": "62DjudGiYkaMUH1ee2Rwt9suPygMeyMbPtykBT4TX3XdE5TJE2ry2uEowEPDZMo3r2JD3HpcFBBNvWHHT7VFDRhn",
  "key20": "4wHabBcvGjrVPXGJTkWnsTcYe4CBaHpyp6P3MNoiiZ4qLHsFmAzYrJe1q48URjx8t2NbWK2BN5ZrWmMB3nGxnwR4",
  "key21": "3DhBR72KGEWQED8gDsoVT1fu3fJCS2AGQkDaB5GK96ySf3kHeiu4hjC7qQ9ZsNr3KPNzn3FnjbcUqAiug546yAsz",
  "key22": "5eYMMaNxyLAvswWpUoJfZQ7h7dqwgG8jbCEo6m9GpkAhttoG8EgGaAq5fh2JVJpoH1Xpn6Gs5utVLgKDAzMSifXa",
  "key23": "52pDS7Rg5iNT8ex4LVqQ1dSrGnoLYEzMs3E4Bs5z1ekB297SwCqrHR1kKrorSopgtb3G3dAEXDuYQvxiRLgmUkYT",
  "key24": "3hnQrv2oG9SMSZPt3m8LrhvckQaMBDYQXcWfkB5gV5dy6mcyN2dpt28ccF8V8Y1zvErpJwxpnWYK65YK3XqXTe49",
  "key25": "5R7uyXoLMoETJpkKa4oTRxdLTAJ39otc1Ro8iL8h51CfmWy2By2zYzT7AmrVB6QD49bX7dzLq1nKWSQDYKjc8vDg",
  "key26": "5e8ytr2AbX2asnLfSR4L1QiUNobdK3tazo5RN2QtXtKdVM1EmdvvseDT3ynm8ssfJoLvHscoHSwUespCTa9Ba8s6",
  "key27": "616Tiv8no8CJkk5QpzgJWxNZJabpw8esmBkwooYvB1eb4eAaSvDZ9yH6KqEXNrHittxiWdX69AUwWVLmU5pz49g1",
  "key28": "5k3Dx1SEDW6uxirC793DGiBpLqkLN1LE3HcJKih3eMQgvsLxs3GCkzujVdnBk1XRYNzXGLLoiCd2U4UBD3GioLNP",
  "key29": "5t9z4XyxzzD4tXgraswQWwKMGCHJ9cYwd6pJjLFmxAUqE1c6NyAe1JYwiuALPMxu6uM14rrbYn94eQ1Xn7FcNr5d",
  "key30": "2wMvV2AThGg8LEupBuYrTgBNF99JGLkdipwkRFP3VxcwxJkRtH7CXmNCQZSkzECk1Gonp9tDVQQUqkiEMeET7pCF",
  "key31": "5Y1dDcUGHmi6grKfh8tR64ayuEtmQBeLCZLdLXMJj5amCcbwaCyy1Y2iTBpRiqnoENzk4LxEg4B6a8YLq63gEroV",
  "key32": "2TPYWbzE6J2obt7wp1eFWSAsdi1VS7uhrEAa5Qgc47N6shkpyCtpybr1ktTtmgkdoPBehz1xepbkq4y5aMpstxwx",
  "key33": "3pAE9QzqgwmNGFDqc1zjUJWnDC634i4svQaCsSa5GAdbK9fnxqSHgif1JiLZhXLdJsXXTuQWLnUianUBKX2NDKPy",
  "key34": "3Cc1aYnQWiy4BTfFYzx6SkREz7NVhc8BCmAA3wpMztDjCrYf5PFqSfxptus2NFBm5b1EPbFZDp6EHWUfBUqd6447",
  "key35": "65Ghj3D6EvynfYfToGBRavgXsG9ffJL4tjZjiQQ7oNFiuexcup922jN7Rxk7u3x7LVxXXeA4KgzkhR64Uf3PEJAb",
  "key36": "GbKXLQQ7anXbs9zTUXisFp4AnVGZddzGrCaBDBZmfYHHUMusx6SCer1uGAiTwoLyZa9iQcHsCjTgLsSVsMY2Kmm"
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
