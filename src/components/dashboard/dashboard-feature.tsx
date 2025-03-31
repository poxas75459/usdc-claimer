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
    "3P2h7DXRrvTW5UGyueN2ZUFDLTueaDfLw9XbS54t5fNCk7A1cr6jfNBTWzRva9tAvmB9jmf9vxjtLfjsKaGdU935"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31UvaY7tib8duhEbATpAtRTfB3yjQxDdZ9mZWaw6yMB3tvrR1qEPdf3fc4WU4dQ4HEB5a3aaUzRNq5wZ7px9Hvh4",
  "key1": "4KDjSHDX4p57TbUKjQBfLKG6NqE8tmcDCVc5MKdc5opg4w2jdHuyeSayxVSXoW2spcx1pSn4dnY3sMQf3BHYy284",
  "key2": "5DfhoL5VSPSp4Z7PoZBU3R1n248MSPQXF8D6S9TvXKfNxQtM89sx6BX91eiHZuA63FRsfEMsKxZbojEdLkwiwqt9",
  "key3": "xKezCxn71gz2aiTPWetqK8kz7X1i1SvMVFX5nhKhGGRdHP3kjrd6Ti1awhXKhogV1pMh79xKizCim7QySB2wyW6",
  "key4": "5vfdQfTUXW5GtiNPx7PujtmyJN6W5fZRN1NNPzaZDMNok7349pmzrPWzFq1aZtzHTEn6mVMCP4TUD1TWgMDLZURy",
  "key5": "39iSr14AcX5c8tvbs5XCaq5JVhp8mevgjXccWgGrWbUHsLvYbneYgKCeeJsn25RVkbSV9Rpg7RRB1RsyGeWWRQPs",
  "key6": "4XJiPhDEXsNHJ7LVM2jtb8tgv7nmPdm7xmJQVyeewZu3H8ZEqVm7uhTiZYue9FwEQuva88kXQ9BX34Ni54izfrHU",
  "key7": "4gm1PTYkUE6EXFjMLVDoeriTebm4FN8ZvZTfkvZNB5nHWgsZGeAVoe5HKh8UcgkB4vGeG4jKAfGqCDube7pQ3TUw",
  "key8": "2rY8ssAeawQoBgn6R7w5jv19FAMGLYPrSLaz4eFbu8JyNLAMcEa6MozkBFYE3Z4nUqbVuG8ooRht1QzbMXJzB7iJ",
  "key9": "3Ribqsu3uf3q3TQTPUC29R2aiAs1oak8LFkEvro6rbXzVhCXFLfzY5GRHL6YEo1zkMQPVBKQHiTqV4yPL54mEuRJ",
  "key10": "2vZCVPnddQbDpkQZe2jHTHakW7L9E2pmmBerorZZMFLGDc6KA3CYQ8Bt6sHbLTLWBMDN4te7WJVHJZQT92d87Dx4",
  "key11": "442y932tfbj1axbuh55NFN7cWrnX5ycjPddi3aWNYF7AjSMt1XziVVJtthy6KUx8oh3iKeP2jTbnKZgR2VMczfZd",
  "key12": "4AGnaBiABbamU5xnjxXznYgieB2cPzFdYCK1YfqwNjLbwgukdZhpaK7W7sPLwE74wCaYhkeyTLLTchkpkxHvoa7X",
  "key13": "2RfuLY6pRsRUiBvCjjMGfKxofqiLfz6c3pgC7Fj1RKnu55HR6JGstAFZpZi8iLkwCNLVS1e3JQzgFBcvdeNZo376",
  "key14": "smqxsk7niT1dzRB2ZBZ5SZKAVVsMSngzAbCwS4BgND62avZJBgpWhyzVf8GCs7ihDoGcDNC5pc3pATnnFAT8E1Q",
  "key15": "5THTAhPtKoLcqtZkFwtSFmNEc31fkexhZUPiJSxNqmF4JU3z61qAxYWTKLSCaUzc6YqMqAuc7hTcRH75a9z9Hu3Z",
  "key16": "3SYDjjg7x9PdzCFPUrFGLDNs31YJR6QWrendg5SPTL6U2UHVpj6f3QN9VjJUbQPbogPEV95xKT3wYwgk4vmd2kdY",
  "key17": "5Xqgq1BojedwCLBtAw5CQPN61GyM6cfG59yfvGUaFt9oajB9tBREK3QDi7UkBWGdjyeQsqNxkBTkY4ZfHibv5ZzP",
  "key18": "2Z7fqhUwxPuksmqvyxmtwXhgeJfWDLRe9pFSrQweaCUjvTrSxqNFnqnHJqvWStyTWd6FZs7bVXYJNsdvaucyiHuU",
  "key19": "3T1FvneFJFuQXwTiszp3daCjefXDqz4Gys7Y31T386L8AEyto9FAdLhzSt7XYN2thG7ZjeiX4s3CTH4i7W4xSsQ5",
  "key20": "2zwxvFBMFbxQ46mRXuoExBfKBMGFKR9yRaAyCKBmdYBoCtpVEU6WqawC82nJ4bwxGfPksYigY3SAH8saiB13DzTD",
  "key21": "4o8m3ybjP9bv1R8JsBzs6zvTVjE3JWiHwhmFj4NvdbX16tgESjJWPZGmXHHXsdS8AxznNSei1G4Z12f5rfAU72ww",
  "key22": "8wAZkW3KLnDCxcRAVUc9ush7weovvXym9M494QrcuDuxkQXGq9jJM2XZPExD7tq86dMDCp8sKL2dqhaMDWd94w3",
  "key23": "4D7wLz68w2Jvd1ZxDyoyXKVGFKPfc26PLseXkL2wbYdPtVaj9rhMWEs5QV9BJqhj7wGkCZLZUfXaLoaXk8U9Winc",
  "key24": "3tDq1PvuRJq9A6rCjgTngZJTmTkazfjzq3jTaxCJfACkNMS1K8qvdKQMBtZqz1VsREMTn19m8EM1Dj1i84CTueLc",
  "key25": "33ySifa2884MdZiejah4UsRyS2tJxFj3U2kXUfERSqvMeWy5ZrjTdWHT2FwpKNoq8a1sY8T1ZP1eXAAWMLzNSwA6",
  "key26": "4aYiGBP8ZAZw4rtht5LyLFs9s7eLzJqvWvEQByiiky5tEH5ikJryJDi6ykztM1Fbj19a4ZqXPEwEckE2bgV5J5SQ",
  "key27": "iMsJCjyumRyXYiypN6PsV4topwAgS92sX38X46J4WNbzjQz1pVqY5mqKxKtmG4eUa1Eg6moewKqJswFPEAF6YJt",
  "key28": "2ZFEKes7VrzUgum92jnAhBuCWp5NbVUqU261n6aBbLzN9Y2qkUU64cgQvMHt58TPo7TM8qnJvUo6qJ48xDqnEoWE",
  "key29": "35JBij8TU3Fcp8oiy9XWa23uEoh5aiWpjoHXJ5uRg358A3LhCZkRNoghgXpfz66brAuB6AeQnhcM7WX2yHJSiYfv",
  "key30": "5tEmah6CWTaJvCApYVbgkLhMooRcghPA52VpAeMWCGjHGL3TwPGrmBBUTYBUozNyGoVMKE3tnuHHJNz7DERWKNF3",
  "key31": "23om2WNTBCNYfKQCpXeu5m8nXpTxP3tEnjktwELZDpz1S9k4yEvKdw6YWtUjm7w2V3JtcoWaw848jXYB4kTaervZ",
  "key32": "NeQbX9TqatNSqKNXwmDCyzvzowJZ4gjz26EYRToXbT86Lh2wHbxQYdAc1jtcep9bHPDNmBrm7eBAk6ZYPBKmRMT",
  "key33": "5jYrdDsLfRVF2QkjE34vaJk1h3tN9NUmp91NXDXby7g5MJyst5Cy3xf8qTxQY8DJXrqvxbEiDQVt6S8djddrLoCn",
  "key34": "fshAKU13xkgEpdkBwu9uoSQd3SuxLv6xVivmqDygXGbukC6EZEvNHAuGQBnW3a8iEeFGoi6H27HFkmNzEz25wXq",
  "key35": "V14GES2tk2iiMUBpBgn5XwgsGzayvXtDgExeyj86MRVSnpRpSuLdbFazzYdfV2kNqYZdRZEQ66GrQsvP7NfU9cW",
  "key36": "5FEeiwfcX1kE6oQdifWJGJ7Dx9AELn7urUPXtkdLgufEDpmTf5aR2RMgHrYLixuSjETZi4XeSJ4nQdNXqCLkfcRh",
  "key37": "2n2PgjKfn1JPUvnDijgCQkpDLwGA48KExHJV3iy5ovJha8TUSShj5LrYLGDxNcrapUSB7R9kN7kFyZ7AAXCXtqV4",
  "key38": "5C5mzC1L2haXcc3HzVXBoRCXGPFgfrabpMgerXVPpa9eA5vSwW5PK6ZteXV6acQ36gVdL6YYn6TwbiY9uCkTWuDk",
  "key39": "d9HrXVubWnvHHktMFyKznSQVjaQ2T3LFWxgrBWwDRceRGRPH6rKwwkhicWUcQkwg49VLQuTdpxrQvcpTxZw92mW",
  "key40": "2nNiJLovCndHGVhNu4TP4PshxALiSYT8vumXCMqetMWpU4vXXmHxBszbKNjEiE38KMtTtBj5EnSUBr7dq1tQjoCu",
  "key41": "4himeVNmPwe2RAwmwNSPY1gQymPDJKXX5LXkBmPMdDUzp5564fPtdGKW2DNU1K82LxPYx8R6aKvYpekAixaghXnk",
  "key42": "H8EqGBucNsuqkn7vgRedprBdjKGewYj3Xz3tU74zJAKAutWnakujiRdj5vkJZFvehnSjjNMJ4uZ2tJsCG8WrJds",
  "key43": "4aPHDEgyQT6v2PFcUr9kmx7Z2a42pepUbbZUD4487ZMFEySGqm9rGmFFFSFAzu4rLQnRWHfuw69jTegKif6TYHJb",
  "key44": "56TRDQ275fPVpvVZjJrVf1RRezzej5DT96Cwx3gzkGtM4gTnvfctR6DB9T7KAtjcRYeh3K9RCiPw6X1Q5gBC6XPh",
  "key45": "4Zrj7ht7HCskczTCL7jgq5a41Q6XpX759tv45aSYHc64WJCexXp88FFJDa3NQ3oqaPxRjAPkGRT6PL8vKkPxiVbP",
  "key46": "TN4LGYTKrzVzLyedaxBJywJiXAxSFNuHJhaqZNw75qVp79krUjckBVSgQX6aKNraPm3KyeahEbGtFMcS9DNBsoc",
  "key47": "WBCuvJDSg64JY6fesZ1bLB8m1eCHSnYLJexipkZpC9Mp7hpHyXXSmUkmVHfCCFemTMrST1FPoSYEa4GtTp5Crxr",
  "key48": "5ChNWEcPAwBQDK34kEp82pRLFu12cgPwnpaq8R1MgKsHdf6d1mowpNkaB3zJEo3R4LdNatpS1V6dwQNnWaB7RCrL"
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
