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
    "3HtW2YhHsD5pWJHFm85FjZP2wyoorYfjzqve2ncm3EmEL6xDp2KAT9cbT9MUeehDSeW5YbwLXsJ2XjGpnyu8qYnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48eTfTFe641892Jep7aY7qYH63g7Uhuc8kM4HCZMd4hQZR6nmUi9u49gVnXZcehy84xA7NjfibxiKkSzLe5ixEnc",
  "key1": "3ny9os7a9v6yhTn5CV2x7EWigy9L7RgPCkteT7zAQJ9RXhR3EfyuN2qV9T5RMPMcRv3jd4DSdCVTjy42kc2FDRWG",
  "key2": "4XyjfyxV5LLMq2LAQWSVSx6jquK9JxbPtNTpFc6YLWLmSSEBzysEjUBMj7WPaxkJe1wLCGAbSRZawEeyXxpqJQPH",
  "key3": "51Pka9ZrjiTjLUNgSi6N1FqG9F6GvbDsK8iuBPYrRYW5X18MDwSpoYEVfrwCdbsWrmYCr74qpXaTqMh9B2GwESni",
  "key4": "4z6Cb8d9eXCST73M2qPiTwuCRUc58kZCNzteJFNuA5ZPpsC5zeJw56ApW6r5GzcgZvwpXh5xt6LZsDJU6njKVodh",
  "key5": "4YjbMaoiZxPe19QFhxFnG2HaGL28PvzMvS3ND8JqquqrXf1mv2eu2MeVz4ksYV9BHjbyG3s4z3EqLuh13pQNuDHu",
  "key6": "3W89ib6v9jHx4AYN2LF9TG1XcVvsui4uZVSRvgUSqi7WdCHatkd3EcQkUDE8cV1s56upMk6wccFw3DVreWJwLQbF",
  "key7": "55rfisXcNy98smdxNVyk47UhHo2bNxv2h5kX7gw6pNZjY3i4W98hwNovZHnKPHecBdSLFZyneEqKU3i5uozVdYEq",
  "key8": "3cBqpDrTdgVRHGY4TzQ3STxBbkYGkLV4k8it44dwuydMoQXzQaw7uQFU6htzyzZ4qgqm1SeEhKTTeLhULbWMrbjT",
  "key9": "yQYKnsn33rkcxr5XMqrAj4GAxL91yekT1AzjphESAFvtp7V4QboqcLT2PoY1x5sZePPm4Ep6Y7ykiYEJuaMZAbj",
  "key10": "wCVR84Po81bsL5Q6i7HFrebjGJ2i9C9TBtftoKan8HoYmYfdnbtCibodDd7kvgVYNMcu1tHQvM8bKKVR1ctNMC2",
  "key11": "puMcQLtLWfGwP2gZvnGtWLTcYj98DikcTFPQUt4RKhSNizdrGu7MVyvNjRP9LSSxTaPiNbTCqPZezxuAsPSZoTK",
  "key12": "z3dJVksu98Cnf8B5GzpJ6NYsEBtidPXYvBmBpFGYD37UAdWufrVjgE6CryGQkgS1vuEztHog8XXmcwTYhUEvEUr",
  "key13": "545CgcNUKHQuwTWJvjqKZVZULHZhTHzQCgbtsYqyLKwJWYPPaFb8RKyphWjAxcSuEsxsYyMmo4XN91vZsAtcP1zs",
  "key14": "5LqxH8vtCuamRCmeBB1b7R1RWkhzx7HVdDFVuhmTAsZL58rgZok7QLex8Q5CoDxsBHTzXi4L4uwCAiw6LbsEdazn",
  "key15": "5SEp3vHAvSvJaHdZnXqKcq1Wd8U7NRepFcVA68oFkYqSdaDRsH836i4hHLAvbitvP6tfk47LZ2ASFnk4ehEcULNf",
  "key16": "3wKBojBZjcnKtrYuwvDvCz1VgAbQz3b2BUtY8SmVYNpPKrC43nA89s62uDTQj7cnPzX4f64PHyns79CWe58cidZD",
  "key17": "BgUFd73wACtBb1JNnHC3unTKRSo2qmcBjeXZtQNQavf936dRgyuCS6922BRKfJokzfDJ58Mxrc1SbF4KgNtXu29",
  "key18": "qp8JS6xktmEvYj9yYa7CvEBYESjSzHPcXwJTZbry7m4MDCR5F2DerbPSmSPbfjYEyMp22BWFWp2j8sX77yZTLPJ",
  "key19": "5C6DcpQFBs7Ukducafqwtj6pUkBTtQjFh23E1ykNJQcVMWHms4r2Q9JUkgFmVZmW59Fins4y6xD8wH67r2j62df8",
  "key20": "2PCEDUyHLRm5PfudpdTWePnsX1U3HEmWd7mvMqmbJr5Qv1DhoLFX4goLtC5WAc9xb2an3mtPmnx9UkC79ds51U58",
  "key21": "ycXZ2LSaXCGy3x1vHHEJLFQsfqACyRuuzB6bC44C6uypkKbpkPqvmVfmPB5JDn5QW4GGELGvgRJecsNvp1vTC87",
  "key22": "cGthPHujt3BAVosV6FbgbdJiQZ8h8isinokptobqdbwrVV9XvT1iXBUNazeuqzp4Wod6zU955ct5tMst5QQ4o6A",
  "key23": "4j6cTs6BEhbNtUmFccebpDk3rPHse3Uxxkdo8519zbgXkLoWyoHbFRUFRGk6qxxT25rMduEwBcSus3Xb1uWyxkBA",
  "key24": "5L3nv879f7FHALXFiKm2f4KninNn8Bzt2v9GVqHvk5PQVwLqPdpXobZWjHtDGeM9ZGTeGTgVrqMwNR7Fd6oUp6ZJ"
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
