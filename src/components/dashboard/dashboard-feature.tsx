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
    "4Vnw6jqzayV7s1WBcR9tcijg66WaE57DAVcrES8bJZDYHJqVjREdN8XscXUfesW9FNj4XZ1pbXDvgz7Sts8RQtUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMVSNZfGBjEXti3wi6j1uAYTTxPgveGwBwjvhZK2k489xLU32TftU31VhhTxgPLPmNZoNDYRFDVrLprYNHjQV5g",
  "key1": "5cSKRUsvoau1142HfJ5m6xQFniP2am7rMCG1ttobhCcz8wJygHBMrErJLcJpyhpm2ySVzjtYLWrFgYWJFXLK59fY",
  "key2": "3cjuihk9Q81d2rCrPg8LkPniiz2gP5B26SmQDzNyDhJyCCbRFTRXHwAtDQjPDk6W7wgfmrL6NVU9nhvYohx3Xz5P",
  "key3": "3VF1kT9CuwmQvEGAGpAegWnsNgtV7zmGrus7Ajn2hJLXmPGxN8MUQB2gXE1UKnW79ePJHBz4csyEp8RYJ2uFABKp",
  "key4": "2Sa3bE2qHzyW4HporWm2npujxTHk3TAPziQ8UCeGdsuqBXF9vkG7xrzZ78RsdnryF4PefBvqydAus5grBmsFGe17",
  "key5": "4nnkHVX4Q8LgDJojFq6UyusHxKnKD3wbbM8MXsPg9eLCFfwBHbzkHUZ1V5NZvfojkFJi8oC7xstWid2KX5Z2Ycat",
  "key6": "4cK9UyeyKgS66jcVevjJJn6LM15uJtDLU9DvKobyXUmbA6F4FaxhvKJFVGfBdXapVYuAGh5GThqUojXaz72Hfnpa",
  "key7": "2oaZKDrp7ucdGYXe2288hA3Z2QSiEs4WBKwjRMK2zmswiZAkuQmTuWP6vzSkW4FsFPtANBJ3bhfJ3fgBLE5XeZKU",
  "key8": "5re2RjyRRL4b1YYF8UwPBfHyoAE7P8hSgiRLPrYbXuquiED8m2QnDyjisA3X2P9wKq98VsFojrrSgg2b9y2imja6",
  "key9": "2jdKKATjNVvx7qqMShTBmAj3NmRXfBt9rgZW2W11ZgcFQ6aSZYZt8KuEqbL36CmGV8sRRQwaodRxT2ZsoEqCCZeU",
  "key10": "2sveP7WpUxGBNhwRXXTq2mZm67YbhSnkf7v9msrM8x29n3pzZPLoqgPiUmjT9CsTqWHfrHkw46ZZnXdVj518eNAD",
  "key11": "5qxX186wdycxLBdTqptysnCNPQftsfoZ6L9bhV15QNbo5eh8GJm43myxGk1Lf1na9LJmpTsq2Uk46FWKHkpDpvMn",
  "key12": "36k2HSVQYxgtHLhabumf6EZiERxrqiRJRq4SQ8HqYZar6GF16C5L6rVuy722vwnc6NHRpxBqQrroouAZw3iZ2awV",
  "key13": "4xpfjBd5YKupkLj9ZoDRkhgZM1eXXm2qmGNxgHyc7MPt6Zd9u7mJ44m2U8jZhwByvvWuf7sc3wRepdvw9ThpL1nh",
  "key14": "5DNuyHRsuXQznF9vM9GbxAyHfCEupLt6qZLfH3maCm4j6dY6vM8owiiEfKtjnrU9f4LqGDjJquj9ieBFSewHYsbD",
  "key15": "TV35W7cCdLAtHm7AEdRZBPd3QkL2mKnZr2hCPMGfsuf6yBsaLMdfXPQU5TcX7TxrtKLRmUf4tyRp5ZFf9PNAcUv",
  "key16": "3UWED8URRX1bSFp3SjLFP31hApQE1xVPC824YwuvFvYAdaSqdwsziMn8npT8fpkcSKVjKNDUXyprbsXVRf3LjVbC",
  "key17": "4u8YcvcfB7VE8wKeHxAgjb8dQKVn1J7KoQy7BdRi66mrtqDytBbwF9TxifR5aNu6fe6jChPKGtwhuFEBaSRAeYxZ",
  "key18": "2Ap657sUfCLeh5UAVeGG1636jDYgju3gSTNGF7JC792FR5m4Q9jwuQxbm6PfoMvnLNMLWGyySpGueABA6mPe4SNb",
  "key19": "ZDDEdGvY91aV1qTztBeRDzNgF6Wn47TcCT7aVbEVRpVrkj6set99daT33MBxxoudmRRmFadYosyLRGwmEkYnVYN",
  "key20": "3GBzp3Nnf1j2UZBjeMdUTNMDRQyEkH5wzxYrw1oizygdWzTZhcyUivqt8xKmKbyBB7bh6jchQQ2NX1pKjRrChqsi",
  "key21": "Kz4bE8vkqp9XUv97vTSLSq27oa9P8qAKPyWUoFQqr1pyePNVhnQttrzynEaJSTgtohxQaHmFZUBvEM3CwedzX2q",
  "key22": "2VpwtJQH3ouDY67xeYs3mgA3wYWePAZawbkH1iafSsB97i6u6q8Xqx1C3zzL2YJusuBvCSZhg9NBp4zE8YRBvw2B",
  "key23": "2YKoyzEK7kDyNLJQeYHqBYKkGkJBfBfXcxkjsjGkxGGeGx9crbDpML5PcDtPj9WVGGf6kSMobKbpLn4njGeCQuUZ",
  "key24": "T1sLTK958skiZVH3TdZgVco5i8HmTDggPqbM2S5QAoXdUo1X2BzxkP3KJC9wKnBkSqWxwm1U7w8Wp3enK8Nm6QF",
  "key25": "2DPhf1jWAcfWEtf9fpkJ8sqrGuGUBfFWSSWMMcwmVdjzhP7nxcYMC1rNdnhHg9FpsUR7toQWR8r1m98nUZyWLCoE",
  "key26": "2CFJSGURp4G8ymMg7H3tEAWYdtcrMWhF1janmj7WvndQog9wFeJPbZPrUR6sS1LdaWYqf5jKfNWyB4X42F2cjVHF",
  "key27": "4Uh4HwSmuQypWkYrqPNBkjtvYcYTvN8js37ZR9ptwDNHGwmspeCSbo7zt2UqEFa8HjRFHqQ5WXXqQVNAzPxEiXNr"
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
