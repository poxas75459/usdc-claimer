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
    "ukANA6WdWhjeZv2Viok9JARbAgujHvJMBdDX6ctHcRKmVZV9qYvy2UfXhQhxcn89FBA2auHqxMj1QE923AJHEaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y8HB8MAWaDkrYYYu9qqp9Re3e5uFet3L5oKh45vVwWsccuHb2EALo9oAKe3X1SE9GjdXao9pFkVxp4fzVdNwvYL",
  "key1": "LhB5mT7wgCuBMnYgziXjwqmv9qe9dSobwH5hAGxmhj395aM7wxvNC42wf9Rf7KAkZYB8cWubjK7Q7AJqPFtBgRp",
  "key2": "2yh6s5NdzszMeCjq7mBgRBPRdCfjF5UU18tyYrDu4fa3zTPs4cs21Uko1KhJAq5usd41dpNpybELHQyvVg1HmWbY",
  "key3": "44r1YTgJooycEiiAr7Sdp96HNgpFMty5UP2LLaWsaE3kizJPw2E649A31qZ5oCGP342gyXF7cAxaF6jf35GUmsro",
  "key4": "4RLb24Z8zkADX2N3pPABURmoj73GkuP4JonhNJgwgJVQaoeDHiAYtjna3ovqVm32LWKxrcivUvE4VE9NeeGDmmpa",
  "key5": "2jQ1CAE3Ft8Tsiey6NKvXR2EGVdrcqaRBqkGcwf2242pyxqrQi4XDm4nXdGgxukh81curNxg6RcqbewCDke6fKdn",
  "key6": "2wfMo69moKTkxLgcwMdK2bU7weSwcatAbqK5D615kBcmWDJbcm2PA23svDvosJGdaCFzYZSaNeK16xA4fdM9rUFe",
  "key7": "3tNXkJ8r8ww6w5yo2CfFzHrLNRajU22Zqbhjysx5pn3xk8jNHsYv6wsazHLFmCE4umSdAEDoAtRbEoYCpr5gpnZ2",
  "key8": "sxB9tfhjK6AgEDA45aCNV5Sbd3Fx26YDocHx1FsWDB28cBxDW2yb4owBKRrHhw7EQ34rSvDyr5ByVvRzd6PZVoB",
  "key9": "6NpmU1a43zeVRvAjBHKfYVYgYdbfQXTcJ1Rja3F7awgprG1aW6wGUwhXvgrqAqqth56KfVwqbiVqvU54wi5ibd4",
  "key10": "4GEK6pzX1LUfk3bdkK38nLRWLy9HiaNC64xPkoHgcqV2yHMXcB3t3pTPTuZTooprTkoZHYeBXgGBw9n7q7MhY1ux",
  "key11": "2SkdRVJBTHmzdTRuZ8sFuTN3kbYAseiNmKpNusjQWKQLeU4AMREmvBMWtsePUodVf9WT3WtdmqiVsBCUtarD5oFT",
  "key12": "YwB9Z2wM4dF3kufjonfvsT2mvBUjdQmo47qfP35VzZybSrN8h96nm5xDFRkD5hCCopsLwDbajs3cFt1au3qRXWV",
  "key13": "5xamovZc7cLbUPdfZvDVdh5zDf88gcVQe9qWmLLvGrgyyWdjbL4pW6QD3hSbd2nVDUpt1VAwjjqVGGbCvw6R33dM",
  "key14": "3yor9TTaMWq1EHuioV1puD9BGgJWsTBKbfGS766aFWqK9FvBt4nXTVXG4EUB8u6tzo8DQhHwnvYqds2zB1WzwMXn",
  "key15": "5UY6z44UB4grjgCXLL2q8m33cwomo1Kz4x8CEGMcK22mMwmbBVg6EWgGno3WoaGKmT7rB76Rthb2BfH6wxS8cCZh",
  "key16": "41oFqkF135LysViA4vU7CKDTYzWh4D645AYJkMGsk3Y54b4HDK6qAD17VcE2UTCVRYxhpGy225jA1vr9JAAE2txD",
  "key17": "5RcCXDf14TxbAn86MryespatAQMcttLBv9GLRYXLB8bt1ykYPPrMFmxJpbm9faMfaDFBFDU3oR5JZi5TMa5dSgxK",
  "key18": "5G3HeqkAhqLChGdFoobDTSXSGgdiJS4iwaKqrHswcNMbSQpCivNagB9jzURnmsmFBtdZTcbvAETvc7QMdQScrBDr",
  "key19": "4CmsdQ1DJ6nDSL56UYVFgUGYEjtXjw3xVsxok9kJ9BovKAuSJwGBa8WCm7w6nMGsZhmkeoeED41tL4w8UkAXgKAm",
  "key20": "4Yiiq5ev8FbL7BMrAUr9dKiDZscEaww8SYFueHaNsuf7yeMJZEvCUeNE1zgC8ytSdoYJ3gZzfaspPHRBF4Xt9eeX",
  "key21": "4sRZGzbnZnTnjWZ8GEkQBbmjJbkSL4B5c51jQGNwHxHuoPsEkAm9ZK2VvD5x1aZA94iiEPcgik3tJrCRQiva2Xoi",
  "key22": "2DuoLamWJRyQAkMdPWThEQoqQdiuSk1suyUjtaQGDDh7ut1UeaimgiAuxAqHYn4qiyVfhYjwDV3fV5ucADX5BAxh",
  "key23": "5YBYoLBY5FmD2QNC5yKYgWmRo7T9bYNuVmHL9oqqN1Jjx87Eta11p1vT7whoUNVjyUNazw4fX3j1ciQJ4QmvuaHZ",
  "key24": "5h7ZpaonBy9wtv8R1K7kyzKCUn2rSNEdztcy66pzXnnhpGA91Ub3D641JZWDT4P7b8SAUYUGF3d8ogfgmo9smCiQ"
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
