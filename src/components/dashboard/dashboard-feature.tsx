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
    "4mKww2hP4Z1kgGSDs1uer5rq5KN7gUdQsHNciWuFCy3W7m9Kx8Rsrefaj4WnMPzg3reyiMWzTwMFSe64ATSinCj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55nTBVqoQje17oNVfMYuB3ek5BkBsrjHwsb5dFo7KEtWGNWzXyyChzYqWNNT5UwzhjfNNpvNC4XYtPzcyfSntTkG",
  "key1": "5H1G1TTf4U7hA7R59MiwzZbR3m8QAXdBBbj5q1dykdfiP3EWq88yv8tnURijXz1KWBWEzUkXBaTUNtLyqUzm37tC",
  "key2": "3QoMCMtM5iAbbYF2rhHQfbUiZY89zGWWMwrMpguFK8hQE9S9ECBxQZTZdLysR1FfjurVBQtKg69XBxV2vmAN3GV4",
  "key3": "cUSyYKon29LL7op319uT4sU5mCAnaGfsxhPFQRve3Ev81Po9fErHCbDj5kJn9Z5Bvd9773Fp2CWrThz8NxncDzz",
  "key4": "TKhxXo81JTLJtZcUhjdBGph2a7nzKCAXVst82BDxCTtWbf4atDcucKvEYXYiFxQQicjGUr7r6UQzgMxeFjwsPcA",
  "key5": "2oKZS7sivKyAu2YRpi5zJhqiMXck2VsRBDX93HLXZPpPdXh7WEkqxpE72FgdJcsxmKTbuzATHJ8jXFsaJDrjVhhx",
  "key6": "UcBUQ5Vd1Wyi5av9cN1Zt7qfRR7RSRwCe8hifMk3MQzQFqWtr38cYRwQTLBXspYyuMf3wJ4KHTDYEwFDiDBNU4k",
  "key7": "qYikH9F1zDnjGitvqodMfC6juphRVfmRZ6QV7RSGqPDY6bqWjbHyoyKTpvysCc8zP3tF2824BujQqAi1MY824An",
  "key8": "2rMbLAdxywgQ4wMM1YwMnr2MpiSA9pQKNBYZH4pVjs2YApHmiZruVmo9NK1vPdqawkmXUZbPm8iaEoTzkhgfNqH9",
  "key9": "2gWH4LcK56Cgi92ddjWoaji5JnCj4jT22q61PSvZ8F4iK9fTpBMwr1KHt5KadGDFf1JyYHrgs8DsAuSzpa3sHgd5",
  "key10": "2cUmnu5c6UrSBUvQrZhEudffBZdB7YQRuvFqVia8jWQ51ErheecdCaGVEiVztkuWfdxKDWxb5J48oGf6h9fe4cPy",
  "key11": "cze25yQEWcNfSUcvcoEYB8jw6jH3DS1SdWtgCg1SYRCAdEEQawDk7hs5GZAKzZPyZkqTSKjNuZT5FTMM8KY1b5L",
  "key12": "2rwri3a4u1wSrBCkgX4pwJzMh2QBzDLaAWDSv18BXyJkN6bDFMqinqyvHnry61ezMCxVgVgyQTCt6q9XgJqgJFzE",
  "key13": "XpkZ7BtR8E4vTE64ZdiYK6h8w6HCJkhGejfuTxrkMvdxn23imezMBJuA1Wd7bhPyak7jhJdZwsHoEvwP5BiJqHj",
  "key14": "4rgCVn2MAG4Tgz1gGsFv7npzLe23Ym4Bhpb8sJfzdETXcTezznVpJJjqCufcDk3v7MoJSwNWSc3gBFhoPN9fPJ2s",
  "key15": "DCQWqYqaED33n5bu2KXBp7CvMSEdsyx1uAnrNiFp8y9shLzF4rrKCzCAUeUff7XBKe2gQYUQBjEaDZEcCjj6Ksm",
  "key16": "36WcVKgZSkPcjuvC7AmP1wm6eFcJuus2tby23g1QWRE15PaohPWARJBQWmnSxS6z8cF3GYZn42autmYM7DC7PsyZ",
  "key17": "2Fcm1yPm2HPrBZybw8qEoitDrUpHTrTpX9K4yc4ackNjMKuLom9WQjgAv36VYCumo6AK6j675SgYkRgKGmCKNAM4",
  "key18": "DLAuuUuuLG6bhjdHKKo91W2buggVaxjhrtZv35HZPG27EpVDKAqPqk87KLFnyX2bWAdUhcHHjcqrQxezJF9eorx",
  "key19": "A3tah7hk4yi1y7eVb8YSkgwJ3whhs7wvd7NA3RBKAJ64ARBePpufBJsfdDcm2xLKDDLZqfNMPRCa2DsXR4sMrfC",
  "key20": "4xSyuS6v1YCHFLwMgf15tzoydxPHgw8pkzcaSy1t9Wu5QKXbT2fogYZ2U51WgzEzAqaEx2UKzSFq7m7QaQSPSyVY",
  "key21": "cZK3WGWBkkpnXLP2guF13r8gW8GRUWr332aTgtB3euDnYTZ22vLUuzjgvwpi4zSDAyqqFk2pouNHkth4A28dRdX",
  "key22": "2yJf5wmVDEi2ZJGBLuMRrZX7m7ik8D6ZikPht3NU4V56NU1KwJ4kB1FU8HQSYiuSzE3UXL3DLvyjRtcdREWR9akW",
  "key23": "4GPoRdGniS8h6SZaFUGb2EqkJPPHYEwCNMU2nw6c57tH43TtLV7awSYcheqV5Zp4pU5uqH7E1CewPYFkdUX5i6xq",
  "key24": "Lg4qWWcujkVboKweEAMe5ygtG56HPaQw9J2JoDRiyNh5uEs4qQoKM69ouK1iQFn3JZtkVcQhdq93sr2uqQd2pkJ",
  "key25": "3DGA3UG68RdSzS25vBShAEEt28axMqLWtvH4hbCLieJXzMvwZQmTynaff1xnSXBpKLDi73jaAUnMBaaGUW1wBPHY",
  "key26": "5Q7GVZLkFpAe2mGqND55iQoPxipS59sabhuUc3n4DMqxj8Dr6XBbnJwhFJYAQQ6KheDwAMD483ViNvqeKb31HW9k"
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
