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
    "4ueBuBbmn6KZ2bwQB1Ty8boYbj7YohE5is7VbD6BacK7EQdZ8MKCE3Gd3Jb3QkKhgKDtLPh6QaQRgddCsRuufF7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvLWE7vYYHhKzGfsvx73jKui6WAdCZ3pQgDoocLMKKspV69ywFypnDGaD3fhFmxm6bR8DR3UGbM2ZL3Y2gW4xR2",
  "key1": "5sPsW3MBRN5hGkHd4AQDt9LUG1iVQUB2buG7AbiMNnfMADkVi2FzUiUmvPxDGszRg5M26uGbEgm11zZtQfoviQ9X",
  "key2": "21CtNhXvTj8J6rapogd9FcjExV5Z5vMYWCGFhXVESzvnHu4Hnnkp1Wu3cQB8UVFYMd4gwN7GYaYcD5S2YVAZT977",
  "key3": "3sV2h2RGWCpP1VxA9rENg1U2CYqGmAsQbJC3fCMLWTYz1wyL5AEBJdnzoMj2CMZPXHuyDaQhgDPT3WF3aGmP88AG",
  "key4": "5oD71Z9WJPqBqx75BX5s9Hy5y7uNhj5SsHsmz3E7A1J8KEgzrLD3jciL8ZMrdeogko4uxX49Zk3vCKxfHfFRgPwV",
  "key5": "5Fgvvrqj626Vriq1wCR6Z3UMLvLCH7SEh8KYfXxxDnfLRq4dGT4EabEzfz9pAwiXccM4KjagVBoSAwoGMj475g7b",
  "key6": "NQ7wcaZ6qrnKWFwkkqa3za18JwrFSDEKG8QZ8WJR89Bvv8Exumd1cA9ErqJkuEVsY438w258CDTz7uGwGGt5LW9",
  "key7": "2z4xpebHtoWz1j9NwdUmK1KAcKjA53ZDTqHqHCR5z8iGdgKFuxg2ZsBRVQQ5Yei1jDUPtgjEGhKmWvmJHqNhTNx6",
  "key8": "4gz7W5CKykq6mC5kCPJPvEeufMYYRUM6gqg5FFNmybup6Z6912rucg5d1kkrmdJyXS4gTz6myMxh7CeC2NFHseqf",
  "key9": "22ihfh3BeYhwp71SRCvufMSFEYVbB2GucM7daiGX4JL7dGfwdSWeDuSnmjzSWk73scP3iKjfFPLv5Z8KhsYL7m6w",
  "key10": "3TULi3k2kD4TtzGmYhEndyC4NgYfqMygnqVoe3G8YyxBeXSHFqi78sCX6z1vEQVMztgYqhGpKQa11G2224zXbbAg",
  "key11": "3tv7CZfuHtLfUooKyqHjeRGssT3ieePHrDohHwaGcdZ3UQ42hsev73wdiQ7BuUsNXgWGJGkJZJYNAbCBquY7kdND",
  "key12": "665bVEfqjgHiH7tsoDFYySUcHdumDSMvCGmbNuhKyXAMwcw6LVrZeaobNNWU7C3ERoBRtB74G4UUepehxzmLmR7Q",
  "key13": "R5bVtigDuXVMeK7QzRs9iUDwn9Aei8QrwwLjWCVyDc2ofPF8PJLB2gHmzvwEhSyqzhdvpZQg9kgowkWVCq63WBK",
  "key14": "5R8by1UZbfFwwGUzCnwQUhnmx5kWwy3t2mVspesvPrn6ubJXfuyU7RSPiS9mYneHUK2p6j8WJL3Y8DFGpdZ55aTT",
  "key15": "3LS4nCF77jxep4owDUQYy7FV778wvzZ7GP1cqXbJVbk1xKu3wpFuQQB8zPG2RCUgB4dDASPtrWhY5aYPhctvc1Gm",
  "key16": "UTUvVYmtqtST39mm36Enjscid27WTHkXj8ecRCPXi2bu3yzqV18ptWVAwbKQfCWss35KHwZVqS8MX991inLLNcN",
  "key17": "2tKozPTppgy2svuc6sd6m6gWgVN5uusiHQeghd2G5oL1iyWTeYZopx5AfDQaZxyWmFLUJs531EGJPeCbHuGpgVYx",
  "key18": "3K3ereR8A8geH2xzMyrDm4tYy8Kw32LDf1WhLRieFWpqJrkWd5MxKD3mWhJH1XKNzvWn3KUmeTQZhK8XWSvuaUX9",
  "key19": "2VZNYg1VAY4rubk9pt82hKH37vMFRp4E995pARvQxd5uveBLfnmCC1qiEptvUDANv4QDAyKwLLbcgsAnU9VvTkmQ",
  "key20": "3gXrjGnQmGyoS5EvGgmWpJEivCBBv8hDBnnttedCR7HGnac9bjsdGU2qGuerF2rpAsx8ckhkGcQEuigWiY1nPHA2",
  "key21": "5UYMAn616cDgXhRvTt2H4AQJimeu7HoD7ukrmor1KUjJCbxm3uJ9uJE3zwsECVmBbWnDUYBibeLSFEWwqApZFsja",
  "key22": "3JYYQWq6jEYfY8RQQbr7JrauaqpgFYhxey3iSYvpMLz5BJNHxSK8J4F1BxdhyeaRhSAHJ1VtEAPcRRbf5eboArut",
  "key23": "2F6LwpSDAFPVY9r6rEe4wU3gd3tZVWHH6UDaghs9tK8rJXvnTp7Qmw2Gq3na1nJT5sEptB2tKrCq66FWqtt8hxqS",
  "key24": "4vYZGokbUrZFirAJ1Z81vKAXsRzrncY61r8dGNmEH5x8ApiNZXpFctrsEJCeYMmnLrpuUE7iktXzcx1BSt17Lsyz",
  "key25": "2ghW2TuSgWnprCpHMfBiZNn1g4gxfAfAP7GurNcjrkj7nQNWpwTiiyZisC9x51t4xwn6zHUh7ype8DbqGkpAwijR",
  "key26": "43Ds8nneGYyi7McZPQ9m29nZNNcJF2HEspDoXEwVbUTnfYaxmw46n1bAsfQfj47AFdXKNP13zT7okvFx2LxMjBbG",
  "key27": "33LKfzssAYo56CBJ1f2UZp45w5U8Brh6SKLe11FLCXL5CYJD8icy3MLHa29Hby5dzuXrs5n7Yko1QJEngbkJCNwQ",
  "key28": "5TJ691iPj6CUUcxXXg7sMP7XQEXLrGeBmihkzvd3FbwxArau3uPF8YEEbvTjmVjEkbw5UWbWBJGGDar9xhPVE1Aa",
  "key29": "3Dz3qX4M24issAASJEECwR26FjaiXATyziF19m4SGvDVocXAHbz3aBnBq82m2Ppm4hJeWopLBR4zoN1ggXetb2wa",
  "key30": "66mzaMyUXcpuKmW4gxSMWzpxvfsH7XEDW59UxTxP2EiZAhTDETHU2iNbSsweHfXc5qzip52YoRZY3MeuCCnwxPUh",
  "key31": "3qtSHHKPhHHgC7sZXivJBM7CTkaLBeHnBMGfT6xQGc7pDWm9agLPhWfDyuc77wzTPgHP6qspXtFNuqZ4UssvpR8x",
  "key32": "578hm9EHsgaBHF3f2qfZmefoXM7KuNpaYhCpJ6Yu1AyepxXh8D2g6XjiypWrd3tehibFVN3z16nxTstcKFAzk8Cu",
  "key33": "49UAmueRPqmYHrGTptWFYzPRpcCc9M61BPqLUq7pERkttuPxkZpkzcb8FuN59a2o2NpFoXDJ5vP6r3BpMu9oSXVi",
  "key34": "oXDKr5ax297mzMr9rCUMctmuvPN347meqvknnn1BejkeN8NzWYcEqWosW7SnKiS59yEm1izjMJg32C66cjrCfe2"
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
