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
    "3BqKS3e8N2atvCiirHjeT41JCTiNpVf8wAEn8CPN4toc6unMVsr8q5RUKR8hj6Zqw4pxiBAAZuDFs1qHrcePMBhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzeDy7k2ucg3yAyYQQmf6JeJDbqH6GcPjKiTWM5C2QxpYh3YpBZgy7e1xCZZVWeDXqojPAHzu3A9XkxbkWgNpEh",
  "key1": "5aMsPeSS8YgzoSj7skqvsoKCYgQUidfc3AtPo392S97DfgaSa2zTCrVqAcTddRswmW8LGJCCvnLsJWj9oyh7Zdre",
  "key2": "2WPXtfpeKjssMhw9pWc2DqFzZ1GspSTuzf5DtC3raVD5wzBNNmJSJdB4ihwrhxw7aYgjfnsUZWuT2j4io2wnm9gm",
  "key3": "np5oGuCnxAm9jA5UenqccuJHPa6P85JdPkTEmfqppwym1U8xPkLj5LNBXCAdRttACTiYun1K9TyGRJQEkc4UdAU",
  "key4": "53u7fADwySiQM6iX6StaKcMHfAMks4VeKHsYJxsjJjtKWFY8omsSLHgyK9y95Sh1jrQPbUys8oHS3gMbUdghhtn5",
  "key5": "2ZMm1KLs9aimVnkAAjvx59u95iobxYTmZs4V6oXFaXppv7N3YmG4WiD9c5jaeLKPDRiRruYLRXkJJG1aExdMf3oU",
  "key6": "2bS7Dha133Eta2bbKoqntyMxL7nK2UL5xP7JwGrDpfiDfZZWfWuLuxthZcW3zLyrvuturBv8CDQwzGZ9siNAMrfn",
  "key7": "WUds4eCejEroNfZ1LUv4MPeLGT2hapZE5btMULCLgomspvpXHUq1seMNYWGAZmJcbzj85ewpd5xN6Jkr3G582tr",
  "key8": "mFo1Z8kj5Ht8F9U9uTvBGixPKMBGCgDeQwNbFzCMofApJ9AfSK2YjtVmPHj3CsT6SQn84FS9SHkiaRvHp9Dq1ed",
  "key9": "4EEg5qude3bJrhRT94XdHdn7Cu3uFnQhaVqp9Wp3kW24bLNg5iXwSCYkLyPoqf6XyES4btJNFRSAZ4psocPQucN5",
  "key10": "28az9BHdZWY6zDVALENwvoS94uj79FDqcBNZsBvHbEoYGeKRUhtVnNJcqNtu6KGddqpJkzz5APimMYUPQpkm97kR",
  "key11": "3e1T4onqNSG5vm9VWeAEUfMqoTyMmDNXfsjdqRwns6axqg7RsFnXxwj9MwwBQHMyvMnbdnJLyC4SVovumoPhGBW2",
  "key12": "2BXY8bqBNue9hJyixkVXoAPEtLxd5umtjo3ZgJZXWqKeVhxYK3vZvy3ymBk4d6YJjJMyp6qnNY28Bm1jkVzPSXUD",
  "key13": "3niWygrwTwzK9kzQ4rRj3QAqKCGYu9x3nrc6ah3n3H3FjtFH4WmyKutQCvcKC1mnuCcQPxi1dbh12jPCPGPMtuZC",
  "key14": "3cjg6J3CbWmt6jpTHT8fHqFcwuhUUSHzE3TSchBJYBGX1CRLtmWAzkwTVTGmLkYXT9UrJT1RvyxouWKdCoei2Ec5",
  "key15": "3rLqMrjzyQW5grGoq2bKCshbnYV5gY6sxTqpkLvFVa8zSCQ7vQA41nLAyjmS5FkqbmudgqgakMU7EFmZnoeapuQc",
  "key16": "5XmJrh5EKu2AVHDQsvdRVmRUr3KoFbdGoHZN2aULQEzNGcfLA2YkhuxLMTPwFCMHhrys4RPBPb8ZVzcKQuMkktrx",
  "key17": "a6aNpnT2PRE792Jj3mTigUm2NMsv2AneFE4Ems2cR2rWKH5dcoMtGmmtYTQD4ct2oYYxF4Kv4Th48eV1QLSABzB",
  "key18": "2L2SJkdcrggQn1dgP5Pi4Nd8SZEmwLZG6Z1s5E71fU5vS9Q2gPNiAT9i1kpXLiDswXyejHLLHkbXL1Es1soDwyLb",
  "key19": "3Pn52AxtArkc8hCjxgYAsLnaV4VH74EXs4Ny8BVr4GoEgsXGPB2Zd8LDT2juvq2UwcaktwSXvSWJ8TjezexRwxnp",
  "key20": "PvVRjmuScgqBV5KVU6GC3rJHvKxCpYMFifrme4i9BoMktx2em9guGp2Hy8qvfKgMbQsQgBhR3oFSY6ffqgUBVTP",
  "key21": "5DpYbBx9WSxni5W9o6uYGHmP224uBFdo9sUT3CN6J37a2CFsP18n9PrZFiMSRYojCJDzNshX4deMsdejB1b99nyh",
  "key22": "2Brvmc8kQXZhNBGRsNSU8eyEP236g7R5vQk5MsZmeCvLYq4e6ZwrNMSWNZZeZhcoVtgb1yYC1LCawBMdy8zQDwe6",
  "key23": "3ApPKoWDpMaNxFS5HEkcsDYFUAY6Rv9M1R3L5guzz7ot8vcbocGLC2cE912efYELBSapThvNc1GnQUbEsNdv86Zh",
  "key24": "3uc7yvzwNFmdD5wSXpv7Sjs1i5ASfdkVMmpdRLbc3siNNHFBMsddW9UiHD2fDNpAPomSGmewjLUNAjRouqAe8LJb",
  "key25": "57gHEECs5Y6kkhw4sq3Zj6EXEouDs46q72jTAUj1A3d9vTbnagsR3kuJzeXZcFrwe2khgPbS9HvZVbciof2sFvnV",
  "key26": "32MoZngdxDt3YWUFCr16BN5MSUnsZxscd2TfsrdggDT39YvyH96dRmqYj2qqPXozrstdZBvntMW59Sxi2AKDNUZi",
  "key27": "rfJ8FS3sBnKMQLZBwggqNS32iF3YFeWdxQ7zLTkmJaq4WtUEEYquoYCfpp3N8SSA1gb8bafc6FEX2KSJL7TUhP8",
  "key28": "5ys3QViSZYJiQVtnfFhZGkznNBunUCZpA4PKeiJw4eLmmy2oQRr28NT2XMm9XcFtj3uGaDptaC4LaYDuRrKC982r",
  "key29": "fuQQz7kDGw7VvRuT8EsS2HDR6DCykt473ZmcNrFGaBo48cuAzeTmZAjyh7qs5C6wKHjzSAncUy8K8rpqfBKq33e",
  "key30": "2FTERjCBE4agQyQynjXmhVRiC6ZUb3vrkY28m3AoswA6fv264P3J9pDCvy1FGYeiTRUb2Mo2RHouHDbJvPaXriRo",
  "key31": "5CmgNh5zTeFatkTvoWCvo7zU8StC7EReWibgiTwuPCCEGBnnkob5rwvnHFU8mMw4Xnsmc3eu47rG9j6BYXmGCP43",
  "key32": "2sdDRHPZ7V7pmmMsWXh1QkRCRuX48mtGWLkZBqys8z1YugxDYvyM1z12Yh3JS72TAVowmAXpi2k8Dd8mhWhLPEjP",
  "key33": "4KJci8trXS4QdeAvHV9vBQ2HbWwjd52rwq3vpj8F21EVjSx3GMwbtce8WZX6z72idhqoPc6TnECcKmm2ixtnsgqu"
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
