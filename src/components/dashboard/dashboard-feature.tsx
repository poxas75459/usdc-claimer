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
    "4WWkpSokigyFoCTLehNWPrptRz92XBLPWmGaEjki3hbNo8u1YnAhszLEpazEkzrnCqmQkgyHkmon6njJPhKPFRu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Q6p8Coc6edBJFDPDzHQ9161QDsiTDBVFAUTe6zBeW1TsKNYL5J9Koc3TQvbqow6fiCMMwzZNrFq6f1WJuoE8Jh",
  "key1": "47b89r7iZU4dz1vgrL3Ytv35FDUqvUUUaTjT6q76455HXqhyRCuv4ETJk7iRETePac2UbdURgwZi2Ba2Q5Lt8jTi",
  "key2": "46DCVGdk8uNSFdM1grMWdKrLiVnbTmvA7UQZ3q9BqSFiL5VzvVuz2cS9EM7iVF4BK4C7nqAou8AsCurVXe7FuP6z",
  "key3": "NxD8usTQBNPZKrA7ep3iSgz1SWqTVm7cQNHJCfBrRvrF4tieLWXFHeoyaoJjFzCaprYoD7Kzf4kmDotfqWycgMq",
  "key4": "5bh68ZhVA52AiRuqdmZAwJ8KENQR7XeZz4DcJFVH5ro7dj67LwHkKLGUmRoDUUxQ9oAwWwBSPR2PG84yJhsYrEAX",
  "key5": "32d8Jx6T2oMmAYcRHYURD6NA56mUGh8HgWSMGfG497b9zaDvAWyZXRGp2K22DNHv5psuaCK5Nj2MmW57VrFfzzQq",
  "key6": "4RthmbzMuVYcaUYnLEjPLfWnZf8nHF9senJF88FzBz8XkNvkTSRVXtSqDfSkJfeJVcpSFAWMLjYfgqNk5fSQ2Lf6",
  "key7": "3s3f64aTdZ1N2vWrGUjvdbGhUbsXP8oASBSGjPCE3iECLT1TZHs5XyWEh3NMAHkrLsx1uD8Y73B6jow11rJBCJgK",
  "key8": "26CecUsp5v6U8Y7Y4JFML8FRKjUaApbrVxb3eMmL7H4w79eBC6DxHgeHXDZbSowxDJZ9NTXgDBTjGAbrCvLJ48EY",
  "key9": "3htUJXPvTgczxjRLG5oZ3S28pckdxZzrAmugCEM7TdbkFY2z7pYVqZ1YnEuXfBPzZYnXSudHGaAYfE8ZuP1Vh6Hx",
  "key10": "32UrUbUrUkBPMtmFq1bmRqFib6TnBmf6uAZqhAPpmqq7YaocuxgoTRwH8cYQHMcWLRKNePM3jo9ufANATJQXepn3",
  "key11": "BvD5zQyvi8s4kHNMwVKPQeEQg1MG9aNtyL2dJsF5LEXZrqq91Z24WKSgR36teLxUgarSzqsJvacNSeP1KgaF3rJ",
  "key12": "3UbKoSvZ43QTnE7yBAjCKKPUyaoauhsD8rphPdr3mkvP4hnpCDU731zYuR5gWfq9iQGHPpL4k9aSgMsLGyeWjAMZ",
  "key13": "2nnNVJWY7MSP9omqi3TJ82n3STFCNoMFuvqiqbtTfkdrYDL7iDTbXwxxyUh9irbnmYQmWTRQffXoCdmgAj786JYq",
  "key14": "3Yki1r6fbwTqLqGBqEnNS2PDyrf1aY63Uzi4eg1nSFppDRZMfU7nbGNZNE56tDnXyJ1Vt8DXAzrcuHqML8LFouhf",
  "key15": "2E7pqjcFG4z81huSW9v1NEsmRk52y8quidn2ZVvG98VtaCfPhkRnPFRZnPNDL76pvdYp3o3zuGRmexQFPHvETCm4",
  "key16": "zRYkbUunviNpfue5nhW1RyibgHfx2dmzWnYB9zBurDsPuDgiF7Fq6j8XtpqVnYjj7DdQ9q2EMYHoUxGonNFMBoD",
  "key17": "458E8KWNmypqDswjzUwJNnXGsJ2xBTxXBmv2yhBkyGUFXJu5j9o8cac54y9meTEJQhSNnE2NvXnMEmTFm1NHtsmt",
  "key18": "5AAv7t5CCoiEHoTUkA9Tq8uA4MyHXZFfxQKVwPitrGaZ2xbC1mUtAEQhw3tCahyxk9j58zZwqugKx7HED1N5Zm9z",
  "key19": "3U9i67PtonbHYx4R5Nfbpb1tQLjDp925bsazKTYXZ2ZURbQ16T32N19jhKqmNKMqx1jfGkRb1LTm9wDxfrSgkrW6",
  "key20": "2jhVdkYaxtSn8ivPRknjsJEHqWrEGSN66ZhNd1FZJ4qGmv6GtVLGvPqzZYAy6ALaaydeEJb6BvPydonEazcy9AP8",
  "key21": "5JvFihKtc7vA8yGBNsw4911Na81ZpphMyUEYZ57ZWxbQSwgoVyh9p2xCob66yozQouNceTkt2aLUmvwKKKqyQCkH",
  "key22": "4XmHn1CvKzuQp8naobthrZpghexTfpv6YPoZrqbjnmsdGMUrVu2V4RE325hNzkGmYASHsz7UsswywbqnZbkix8Xc",
  "key23": "3SThnXH7Ec5qqsAoGZp1xFckw4TVmw8Zffxzy8e35vivcfE1DMuMMuTtHKHBv7byGyTZaFH73iv2RynmHxMQeLgc",
  "key24": "4Vn9eQopnNADHzrrbmnLMBj2nWEMqqL5v3HtdR1Y1GkQpkNw4LEFxrbuFhLQo2yTP8vMG5gBQgJJT52VtFoTMoJZ",
  "key25": "3Co7pe3K6iTUoTe3e3hrwfDyNCH8jrN3mwL2FWcmLuRAan7jcAxf7RFGobG5XLhdD92CW44LiQQ2K4MyJTT3yuDT",
  "key26": "5V3QShKW5Kd6M3iRjjcSp15EPmnoqBXYWaogvSLVG1AcjaQB6GKEHGAk8zNSo6JvzC3hUNqSbtnJTQLevQoE6CLv",
  "key27": "pVyrXTHPYF49WBMuFGgpaHhtfuPxuwuwZtzxuYnAnYJQAi4Zuy1MX6RzSRChiaYAwVUGxx6dfdK33aaSh69f77S"
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
