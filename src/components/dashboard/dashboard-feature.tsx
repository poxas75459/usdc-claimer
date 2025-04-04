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
    "VA9PYAQpeKjepGuyV1w8Q9Xe2pFWBZAnkN2B99qa3LYw2zjdFfnqhmzRj6MBnn8mfWXznzDQZ5hUxBnYTFSHSAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WNKYEgaHmiPGs7oeTxJtqa5PtRka1pFU4rCcKKV8M7FaDgVF9n5L5NmbtUk3bBwVU6qCKuB9LKQGeiG2tGZXXJm",
  "key1": "5WVP37eVi5ws2uaNL1SXcWsmn7xEkEDPWK21ahiaxkdrZwDKPmJgUmL2ZhdniEtMPmQ9LqD3s15K2cFhKEXes75t",
  "key2": "3TYMWdkHfHctcuXUcCvywiWUutgMo5tiZXY2NtevkDQkvjSKdUkhswE8f2YGxut89zyW8Gf7iXYMX4sNpLaKP1zq",
  "key3": "43Gkcj6XFUbMYqNLNvzenxeeTHsyna8UGmzzEfUcbCWH7Syt4tF558NKejLD64byGj82rtv8J7fEnjNHEV7Xy7gg",
  "key4": "2gsu9v6peRR9E6BVoriNquu4R2GNZFQzkfMZ9DwGXeGFry4689GCkvVEnMBUXfJYJtXJphR96v9oynGcT95WQCep",
  "key5": "4WPydfjUzBmoZZxMhgDVadMhvD1RUBgLAReF1tGuDycPBsZDHvMYB3ad5zBF8TokG3ueJpSv3GkNFj1NTkJTUQUw",
  "key6": "5pStUrf5Zfrwevh9uuy17ddpn957H8xPv2DnDTDq8GvyrXqbnsNcFBJHkZqEq3v9a3EBMPR3oFiWs2V5Bkdr6ygr",
  "key7": "4JB62g5JCEZwiLfRsgCTi9Mv9yEtvoRrT8N3YCfh2nARgYLfKTANP3zuB5VrsRbtLJkVmype9hqoyfoLWjSvyzBW",
  "key8": "5Gb6rdcYbMXCBozreo65SytATtMFf53WUeosysncm66zCaTk8wq39FHT6DEuNJauUuUez83fd1SekiVaKKfFmJs",
  "key9": "2S1Aq4hqKsWUGvX4NeDJbnyndFQWQrCKVMXy6zYQkwKaz5b6SjWehkR8gBpxVVemYUBWmnCSZ8C2TVDuM6FX43nE",
  "key10": "3MwK1kHQq2AiVDCYDHoEM8ba9jLsx3zGEwY48EmRv86wHQ141oSPbiG19cFBqBLrhs52n5hcTfURPLmJSM6i6Fvv",
  "key11": "5g35Kv3mBEb7L27ZiCeZMAGKCE6Ma8cHYfR1umGzKzAQZP49DGJkbDgnRxza8zQJz6Y9fyHWbqE1oEch3KR9GhKa",
  "key12": "dwi9oyXJGWdem4erPakTdsaW5V386AyGoQ8Tc4rJMcAieojxBidfQLM7fFjHVXmWymWtKQytBTewweqqQTeG74o",
  "key13": "vKfmVv24hAAaHJAnx1fEMxJC1fGgFYrhxw7s83pB8eoRd7sqoJNKSRcxcm7VyPKq2AmnwH5eKSumLFbi1vf6Sru",
  "key14": "3Y8mQpZyZiwD1J8HQ1GfeMZLD8JXmbLANsLGGHzjomeGKB1zveNSMRGn7rFSQHYkXFausFyScnah9PAg54WTDKU3",
  "key15": "3irAkdGUe7Nd38q6D1eVPZ6WxGmzMj5Yc1orausfN5aL2GEcj8DSNdyyjvEbsD6TEH2CsZP1ibCKKih9jkV6UvZM",
  "key16": "VAVBUwLrzFAwPVDNuPS1yjG9K1kjcap2AWp91gN3vzzdeg9uVHcUcKRuBLHAJF1sJ3K8BfUTfYc7dLeRCwNLL1E",
  "key17": "5ZpP7xWdoMsa96Y4PkmaUPWnU7Vcy8EYZpYFVG43a4J7mAVQ4B4WmaTiuoZ81xPMucvmJ3QyNNSxrEb2XJqL9evL",
  "key18": "3B8HTQZHz11X4KgPqQJMvg2JXkYTMU3QW1xnVB73hWr2Nv9gRSKiAf4GV9WW6oW23qW6ZHgepyCWAL4C1spDJLaN",
  "key19": "3e4yhF8ptpZQKTcnTLn5mspgfmWP33wE5pupFQjF2VtKFpTZjy7No2SZuzz9afEiydN4bDsn2bHhaerzMGBTCiPd",
  "key20": "3Kk5yfrBoKq1Ge7PfC5M1ubfCLUP9bUydPFDLsQ1JPbtjEyq2uWEo95VuV7TKNrkmbmNnvdChYTeSiv1WCeMrL38",
  "key21": "2wj33HadQ6iSuis59q1HYxTg6KmPhroAdvR4H9UaHZn64KbR1JYWb9KKcqEGmEjDLLD3cv3wzELfkpaBkJrrGZJ8",
  "key22": "4NMaeHtenZkUzSRLo6Kgb9bAPerUJ16jZ16zdwnSXPWKDWmVRpHv9p34VhY8QeTGNB2thd6Lig2rS3zQrP9RcwYs",
  "key23": "5ifvesDxsdPkPyysZiKpVAdC3W3JE6PMLJ2uuVAoj4e5BrPkgSEco32eobHbXXBBzxPazBfrcYJTMaKfb9ccsJqW",
  "key24": "5LAG3N6eSpHfvaPBZyDpBP9Jd9742wYq4a7qFFEdqMzursehkNexWhzzJzyTBJcxBcYDQKq7baapivJqHWS1xA3r",
  "key25": "2jvYeHSp1MqBxqTV8JYwRG3wX9b5Tyz6qPhkqijgmWx6StcdPEbqZdkpVxyWQwNq85hda6GgS7v8WDDwQMdXmXib",
  "key26": "5AKJMWRdmLDiUsfDSffKYsdWgL35B4vvA6jEePxD8bG1Y6AQVrxhN5qhds4zP8Amw9zeA12XCbUhLTVoEEGoDT7S",
  "key27": "oWJxtsvwq87MkAB2ZaekftiaBz8EY8LgdZ4bmBWXBqiFYDQtd4pcDPDs9ZEUgCFBTMkYd9Dua5QuZK4GDG9V94A",
  "key28": "2XYj7yJc5rKK462wtN9K9Nvb6BiufpAAqihs6E9bYFZ5eyXvrnGjmTQ4LuvCz48r9nYaKxuUrMyP2FyHb3JMK13b",
  "key29": "4L91W5sLtpTNUMk23nWk3yhaz9z1QiyPj9ZE7iWLmpNaB5XyBS3fLB6TAHYi44a71uYNmoLKhxyLicRTVWNKTkDD",
  "key30": "3bcXvWkdu5LDwucvyWbrt5oLPg4RhCasnmzyd6CVKx276HDdXCMaEk7hQvmTCyYYbSm1F3XiN96yiMAUfPEjuc7J",
  "key31": "3ibxfUAingmUJNBAdjEUFVSz9tz3RPptaj66Z1PWteaPZmQsmxfbCZCQDmTU5otLd3MHiaBLqonqUksGuVriRzof"
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
