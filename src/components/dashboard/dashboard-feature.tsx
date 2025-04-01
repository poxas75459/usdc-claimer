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
    "qFXBiA4mfsdMPewBnzvwgKEDdDge2CdE8dxMYuGscerqi1nw1QZdL5oKjxXBBVkYpGZmj4ZUSXV51wgKzwc3uSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wq1jkX9Q96f4nFisMHSygfi2TotCHHWmZsVjQj9nVZPbwxe3By3VsFq5fGzLC4y5Dd13Y1Q7mfF5FmEr9rGYaQH",
  "key1": "5wri1eQNrARr29UTsnKdrEUu9TtZ4i9cWPjpRf6MvdofPi7mzoiqoqxMaMfzooMuxP4XTXRhmTMmEDnDqTWp1Pad",
  "key2": "3aZpzUkTDb1WU7vLNr1LBQthaQ24BWsP8zrMiJS9k6fn4psEgFYdMrpmr8eac6q7YpkSGuoni44GgrxZHWRssGwC",
  "key3": "48nW4R1wScv51Jk2BfR9sdzYoPzKdoaEeoTSqcTYJynYpnAdUUeuoZBox7aspYApt23amz6vggQJcWi7yz94Wsr8",
  "key4": "5PibKvvRUpH7Kv2QdaEH7vUuvKFrcF9eusHsGjZoeQyNyMfkkfEGchfXSkgd6xp2TVZaeNjKQSz2mcnzqRS8VDkY",
  "key5": "43azErcm7spxKMzbC9djg81hUqyQxPDnNu6oxupArqUQbrc1J6ZNKMe8ov84zEsubin8Ztco6CBBBL1FJkaRTFLd",
  "key6": "2nQ99a9LXs4mZzwTPoio3w5sMhoxogHJba1dMMmhiY4FAjDJTCYkg8pFwBUDJP7HQ7goUPuJiLZjWMtg5vGsnzq3",
  "key7": "5KFmEZdjqv76nFv3uVMEFP1HJUVPBeypEwCq5BnheVVc77w8Ug6DNECUCiMifgxxCuTxh2yY6T7jcnj1Di4T5zgy",
  "key8": "7rbKzHgG5HZu2VaMLK2n1WBAXBwnBUdzGCvBETq8hiHTpm5X9nRo7LdeEzhMdxLzoLgzxRFtd84vvoLtLbYmZc7",
  "key9": "2uQpR6WtTuBwtytyv1c8gQdjjcBKos79khy74UMbmaep9e45zNYRE7iP5uFB4QP9VisEftevftd29sydrihxsqpN",
  "key10": "3JsCFiAPFcndSNez1unyPnEC8FqJ8bW5wVj4EABqKBdudfHEfLSDkGWHmqDJeZtbYnSpfj5NmkTgKCjADt9VpZMz",
  "key11": "5iRoMbMHhpvwc1Xg8v5zbFprjqHmKfB7AJcN6hE37AZuji4aaaYwckmNjGyHnLrwbLywewNxxrPbUAqoXkvicxx2",
  "key12": "2M2vsZWt1HoV2BHrrHs7iNj7BQ81MFdAA26zQ9itK7P7a7w2ESp4rcHcwDi13Dd4XPsD6iNeP1QptR1MRohXm1nf",
  "key13": "27iuS8vRARrCPzEdkh5CTTmzdLSV6EjVprzJAXcC4QkhwWNjXEq2TjmSRmXGJbPwsgVaVbJ6FkJC4RPUbpbFXfNF",
  "key14": "2YZsuxVdUnjK7cHArf7MWNZ8qgWuMiL6ypc26U7TYiZSUGpJ9jMNrCWE5WXao6zqAcifsUfqALdXkGrnXte3Gufu",
  "key15": "4jLLdHYn4yxThwaBZUAUdpoVMFXpLhZXxKWweyzjBG5xd2sfK1JbtPbVwP95rmxyfWLoLV3CJAQQ2P9ESNYyWkLn",
  "key16": "26GzZAgXtdYAc2ZxHN5gmzTCcjMueg2xVRCQAZcJprNoUHuJ41Mnjxd6ce7oYBTWy4JcBt3dJ94uRu6poiBW44W9",
  "key17": "uGubF7bydAXF3jnXJWFyKHVknq4GwB6hwuUWRYCmRX3kVjUrt52Uqen6RQtTjb69WwefTF2vwhS8nfYUPYbMCFM",
  "key18": "62ySgvRyJ1oUjMvyTEjsvWEdv5jYkgbSqYekmUrj7eP9QkrUgr54VGRoyY8LLEhNjjtSyKQKtq9Ttp4WP4Zei6Vg",
  "key19": "4VWJkmaixCVB1ukR64SfEuMTRSMgF4BRZPWxqhscahLqDXu7TB2FLq5Ac3LcnTtno4Vx2xvnRPF49kCdNrXWhdot",
  "key20": "2siWbN41EQ6RJZ2TtemocWWZ4xCYWRtyRMQUMDfeVPpbEkF8HBHVtoab5FUXtQNWEew8tE9MLf12kCkPWNhjaf62",
  "key21": "Kox6wqKFTnSD5kHXXpRrcgAWQLn6vaRRRMHwHY86jWyLBzbKH8XTVt7wUTbAkVnFa2KRuiiqiWXdy6qRnD9u9Zx",
  "key22": "5iQf7Whibvsyq21dnEt7n9JR14UVp2PhxBXZ2j6aw73JpnAoHpkmqKhrFFsmfxMgUx5DWRH64HKW1saxHBH4M8fg",
  "key23": "2Gx1eXmkqFWmCBd7ujyhdFLixXfcm16up7mNoJrPfDG7jGna27JeFmJeSrwycf5N88HiwGCqdwjT6veFcHN35Ujm",
  "key24": "5T3KcDxcGKwLhZqDCnnKtC9NJacsvzefbrdmxqzj4jtdMsAfHLp8AM5wiy3ojkGxxASERnUwpnkPmr23XFwVA4gE"
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
