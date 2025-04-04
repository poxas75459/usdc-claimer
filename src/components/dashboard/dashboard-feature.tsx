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
    "5JfCauBMHSZ7kxnLpt19G6nibDbhrJHzKX61qDo9AQ4m8wZpW4sZoJfm2aAfNVqPUwahHMW2trJhqYxZyLnerAxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nRVooc5XxySvUAzW5n5Ftq512X3bTGjwe9ry1QqHGPYx9KExhVvj6tKuENTbuEXfbJ1raofXXCffpn67JMSGDrT",
  "key1": "3fi1F4HXnPE59oMULghqrzxwG9hqzWxnUkvKjeS4pRgiQCQx6yuWZaeXZSJa29a2Zso6ZZCHZjMQgfeV4WpAkFrK",
  "key2": "5i768WZTRbhPuiuRE7oHR5W6vgKefUp66yy9WtfhEvTRrH9JxKRERWpReKwso9iZGbRAaLzt7RVmdGf8kEJFnJvV",
  "key3": "4F771bLFr1JDtQwMhZeofXkB489eXAZi5XV5JqnwjjpAeB8eUCHfqZWrRRtbKhSeaKL8tqNCEBwMG6CwRDihZB1b",
  "key4": "5CeUxKnhteEUMrxtYzFgLTxq2ukmTBgujkcNPZCAa2wHHmDdbpiwe3EY2DPJQmU1i42FGbxLZ2kzn5CqEFYHwkb4",
  "key5": "n8isFSL5SdY9XzfstH9PrRrdQSevHQwVy3ne63aXNAbMjuxmdGFXHVQTkSzf6LujzUV3H8Ev9f8hnHH4B4PFGbz",
  "key6": "3cjGQ3Nh3NGUa9xrCLvSjnXmkx2zboSySWkyBp5TCr8nAnek2DtRAHptQ4t4jkHye4pbVSW6jyDHcM1Akogke9oz",
  "key7": "3AHVs3jwaP1FhdY2Q3YM1p3yw4YdCdMj37qcqtEj1ne4dykLbG1JxQ7Uh8ejymEhdypHHAjC2oJesF3MTBCoRgoG",
  "key8": "5NpmCvryCF9BtK9niwYuscHxcr9vWk5JgDLLkKHX2vkdFeHUuJPVPsdr5UCyuU1fiEdtKyoJHg69JCVU4wMMGPC9",
  "key9": "5e4RHEakjq4DYFCN5ZHsFE55kVj7L8DHCKwRWkxTgTbMoSNUYKEi2pF2KkvJCbueapfpFqeLHi2q47EL4CoS61Ww",
  "key10": "3yvJFp3XqYtfkNmabS3Dsy5qhyAJQBsNqnnKWzdHKxTGL9zsLQ5r5QfPB83vDGSRtA2Z4pr3BCjz9ArfmMpK3PxS",
  "key11": "4Zx2DfU7A2q2KRJfoWF6HRP1AJe5LGDMn63AR6D1nzJQY33qT3DNb2rnqFccn2wK5iWueGbbjq6d9kciR2m19vX8",
  "key12": "5wdU2q1nTbngzZv5gPvWC3ML65DnPXLT9bU53QX6S3U4sSziGRNCzaCracPJPtPxRtUyg83N1eqXwSoy76AxcsEg",
  "key13": "3W6Cb2hxJPj8Xepg2Ds8w1bi5gZiUG36H42Mu5WUBX5s1H7H29m2BuGvLMdHM7jMRLdPJE2TPERGtkGGL2Ewn895",
  "key14": "24iyEZaL2dZKmTGQkQb6PEBP8ixLd1VkfNUd8R9JbAFSDoKG4PDoJpYtMZi5u2EY4SwEywmTSiibiQrdoG1GfV2M",
  "key15": "3c9qAWvy1LmvuM1ncBo9Kp8zAieMc1zHVgsU3mjpJzbxDMmqtRpXAm9tgXAhfa2PijAScNrqGCSXX1WdTmahZv5u",
  "key16": "5ToX32PUfFr9BMj4x9fyAtNN76aoPs5C4q2svrFLx7oKwmRVYTsCqggUBogypXyxZCP9skM15Vg8eMnhMrj6Dvgu",
  "key17": "3f38RKK6N8nhki9DfsQGXPk9T31DcuhbWoNBssn337q1XSwyXUdHdbJ93yczjAU5Jj95GPjLTt2o7q6QheJnvdpv",
  "key18": "3ZHTfABTEaFXRZyedVaZKb3RgjZakL2iNmnACwNkGMPz6zoiZooMpbJ7fATGqd3WumBE1Wq5NsZaYJCfproiiuTs",
  "key19": "46dMwNzBDMdBAKhnkaq3sAGGSKFJ54jZodR87hHkym7VV3AcDgrL2BjLeRpahX5tj6cZ1LpfFrxkZVUByRAYL5Zd",
  "key20": "2JYrfzSmNFm3txt2ww5iaJJdx4hDhSq4vgbpdDQ5pVDcQTNcLhcb2zJusyhBdLdbzcF3gJ9ua4pEhEyctLUCguWf",
  "key21": "3fB15rrm5Xvnd6s1oH69JAjPcpufQLMa329LoiVTrBThDYSLdRi3GAQKcH2nujFehP11yCqhoEo9u8nP3eT4SvrK",
  "key22": "3N4VPD5nXk99uVF4q6zoZdWPcrkofXXQf87AxSGEQDujCkBABLSayknwCFpNPVCcn8CQNYjHiJBedeqNBy6s3kHd",
  "key23": "2XNAEDAQ1EBs2yQiV65nc8o8eVyGV5F9E4UwUVUXU2RujNQ81e5i1ph9tpmCccoQ2EMcxzWXhWUTg9A91UyndTfo",
  "key24": "2xazYkBQ3dVT3ML37paABq55cuk5tenAmJ3CU8vTuGvSmxEwNCWyE6B63vgxD8hoXEET63zq1ePJZUEnvH67xZ49"
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
