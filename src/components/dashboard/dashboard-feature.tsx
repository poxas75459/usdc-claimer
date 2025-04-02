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
    "pikefb6gezyZGJKBCyafBSNtoqs7nQmKks2KrjsujYuDoEWErwS8FYaYVZn93HzhoCZrfzttACivvMbbuD3UCNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uHiNAcrLmqRccnezqmZQwBdLCHh8FzL3zG8kvPs9yCSi1WAr7UKXmEBXVLsx3ykXzLppDipdz1Uko5YsJpg5RW8",
  "key1": "vb5FbriPcZHuASTZZfMTsjq54HzRNoeCKWPR6U47qbfEGnBBhCtaU1kMjZtxsRF5b5tsmTr8id1T1vBjmazBpPP",
  "key2": "2FRdjkErGjQp4y7soPDGQ4GYcMf7MdmZbR5DTzs3pVr1wUSK4SSXmEav13ft6PtpdcwGNrfHsfx4FJ2WJhgmJQea",
  "key3": "4UVwvADKFt7myh81msahcA8TvyAkhVyQhPLQSfy2HfWgUxATPyLZpqX8WQ9XjcFKEL9MDHz4mkKyqhMYwHwrAqRu",
  "key4": "5ZBxzNbSuSeTdM5Da3YzJjs8sNk5nb4qXWQWARZchxbxHwYkL5yWYJbiYUWK4aXa4G52pkD9Qttsmh3tAkFUWAmd",
  "key5": "33AFwEi4FEEyJqiFVm9aDmdebuTsmMMLf49cCgkC9WarQhQJxunSi7XZfStPohPSGMawdStoHx8LCkag7idfGSJs",
  "key6": "3X53mTD2QR8h2DAp9UELnSvHW8iZZ3T3qLi26HtWhdQ4toitBLUDCpRFeUqF2kKuu77uE1ykywnEbAnurYYHNK75",
  "key7": "w48ZjxV4yNkfeuasxeojCLWVVsFKG74eWdwjCfocaoxiqnjtwF557tDmWKyg8nUjxsFJ6S5jKCi92Yc57vA2yZe",
  "key8": "3NyATRjpHnwL7dbzKGYFPACZZcR5UjRmyaBG2MSyJkNF4p7LLku5bejAdiGugkSsmRDxe8yue51rz4zeoZnHc5yW",
  "key9": "4dZqLL6wWRVRSDSRL7DHZNQ4tSumHBYTSZzxCVDmj1hNYWoewFa1egbP2dLwLKL7z2hKaXogvEKiqpyXEMNmPofd",
  "key10": "2ZHsMdtk7RV3dYRaH3YzB1SozDYmMGFoqGovaoenqLvCi3H2VstTbcRMze3FzKxttXV2oVazTuiaUqPtqL9vimWJ",
  "key11": "4VAhFCdo5V7w4zf8cb1g81KS63C5yYw1Be73o8jXUgmyftQAjk6m1cZJJQH9Van1n5VeewPMtKzUMtVuFThLAhSp",
  "key12": "4C8zDHSsmqJcELnuufkqMftBtUregcjiLM57MGS985G4c9YshL3eMzLXHxmn5VS1rPJFdsvT1FxxLgvZLCs7diok",
  "key13": "3a2VJsUq4C9skB5Pn3S3dgrzP1g6qoS1sh7JH8kZ9eu7c3AbDUBtuuxbeaA8KbjEvTCN4GA9TzjrepJekRBvS9hN",
  "key14": "4CrstKBFQKAEJpP82stncmXfeWBE4k8GNhgRRkLe1VTycK4anGBUsA2FFCbBKtqRq5CrZsDDdm6su6HVY3hjg2Qv",
  "key15": "35SXX1GaKJDt5MQXexKn48CuzVzzQzum2xeiRXqCiN7eukn9Q5x5M3dJKU6xLARsT7oaNRTUTMkuJ9zArFMiaLHR",
  "key16": "25p4WuTk6PoccBK6DvKN8ewJnmgnxGnARxTebAwNf4Rw9i44AxDgXFmFLw6oWHeiaUygEKAm2QcytH566MBhnJs6",
  "key17": "4yhHabpK9C2RY3fYMWqVzUsckANpBCZnviF8G7uES33T7dwGPFmHrkmhGLLFB6tMYKH3dMg4mBYoR8UVdUHagzbQ",
  "key18": "2z87353CRpDuQgdJGEcuacgSjien5XbHwppYwQzudhwuonMjj3tv1tAU4k8eUPfQ6TENhxyEAwA7jquCVm3HPnsW",
  "key19": "3TtGHqB9STJgNb3CvCQ9L7Zu7dQ9adTo2pWCquVWZdFQWumhXcAMLjQ9DjzbKQNYWT3DMLa9CapLxKbmCb4XokFi",
  "key20": "3cPdAk4rCADR9eE85m2B7kQxvPKGrfysPNpeoewZFQuHD2n3wYFDwtiFYsbvHsPYGntqfbtj5UfHiNt1YeaSfZDX",
  "key21": "49tzrC9x6VdqPj8dncTbVVkgec5kQ9tcgTR9WaK75Z8pajwc5KfxByEA8EC3DxiG7ndRLw2TiL67q2h9B5ppqByy",
  "key22": "5tESdzWU7RjEBtqtMRif25FkH8Ffxp5hMsC5eX1F2UogQeaKcDjcxuDgoXWkXNucwMdoJUmqi34K3osmBqFcF8bA",
  "key23": "5B8KLXNPSmjBqt6AiUN1xr4jHE4qWfvnD9Pgxif73zMq1eMoB4Z8XvRSvdH2wt5iaLGxHcZkqETDZycJnUK4jd8i",
  "key24": "GCW3jvQRWSbohUdXJUoysj8wP5uw4HiXRL8gUUr3JRB3CRzW2GpVDACKjhZR14tSACGmSKTsUupuKZN5aAXjEy8",
  "key25": "23MjXYv3z5T4vSTXP77iFZZ4HfNYWnDJjrzWVdbf98SqET9hoHEThJfrToZVGjVyBWe8XSNau4NModCcy7taz3i3",
  "key26": "4mZLrpYaQBDQBuZihvkVYHqGyMPPZzmApTzkpzjKq15WGqYqgHbRqBsVn67B9SLoDtcDjUyPeY3TCSF3p3u3HB96",
  "key27": "2Bwd77MteE9vEtTaBEYLPUf5P6iYGSwkyx9gzYGkbR4ucnygyAjaUEi8icmYePDmpNBMPAVieck9QUoZXfdQ8Wci",
  "key28": "Ji7XaajcWjR1e15Sx9SXBf6EfrYN3eVMAv1Wwzk6igak6dWBFFPPrtgFAxe83TnmiUQAiP4ADbmgaxxSrfTPNeH",
  "key29": "3Ky7ZmorynAhjfPfU5vw6J7dSBw3YqsDuzaPdMFbxNh3Pyf7KjFxYrdsBEPNKUQDEhFHUjjkbaMYvsLRyS4CvgzV",
  "key30": "4MhmMxEFZtaj84zvBVPePrQyr6mvavNaPVfwv5fcC2yDBoXx8rdXQJRny2vKEqv1xHxWtXujCjhRgdo1QqUncXvQ",
  "key31": "2e57ri2MA6L3gXTAzSf9Kbm1yeYwbzMNCJL2brfZLCPVtnXaukoBRxS6pmCzdtSVRFeJUNmHQuQJbN5SCrgSAJpj",
  "key32": "4WHsRSurFesXKrMEh5JEmFyZRXzMqmzrHUKUxJgHEytFWAU3aLkxhH2FjC4kMc6SABCk3UiydEgUKAphyhK5uY18",
  "key33": "54k4orps9JvPtPjw6rrbRHAvahrXphp6AvQiu7NXzxZewiAmubDq1ugjysCMYTzD32AbVYAHTCA9sF4jGnbJkm6z"
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
