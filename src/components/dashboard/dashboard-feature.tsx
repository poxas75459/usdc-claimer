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
    "v6HpKVpTzb58hzrDF7UQjWXkFgeHuUQEGLX6uWKAtP14izawrbm78EUpR5joSDQTZgWuGGh6LGhhYK1qdUDY5Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3etfn1R2HFP9Ddnq68jfYLQh3PLkxLC2dGkBQoUgTcsfQb5tXP7HACpEULt1nCAaoFgMQZ1JaDoLdZZTvq45bqNZ",
  "key1": "AMZHWrNFiVLxBQGdj3KU7WqCqAV5vYrzcrrEaDM8GM4wNdAn9BpHC8z7W8XHz5gVhcSssuRpivh3cL9JSmb3h2S",
  "key2": "QEqFRGFQZzPsuBou3mKAqx9ksJpNEgQdkcDkPWxxfV79CmyiFqkzJWfcuYdNdQVFUbzqQskwQXpTUGzwHY9odex",
  "key3": "41QydFhMtKQ4oBWzdDaPKT6LwyZcEDaBBJYnAYttt5xvC7E8oVyruwR9s6NV8C99ZCVyXdyjBWsT5N3gAwXqKSHj",
  "key4": "5M84aQ8e7J2ho4bUoqbY625m5rP8CrooaCA4KGJKPML1fX9nem2DahoGrHJCdMpGgyXsf3SKd642yp4W2UjGYEkN",
  "key5": "LpUFW74nWRbZijj2txvbrYu4LbeA5JYfhFzWjvzjH6pfVB2m4wCB76wcwRCmE991q3yfsbJgLUv5RLMrQPg5si6",
  "key6": "2gsheBjM2LoPb72G7TXKjhtzmPdVD8EVsDpZaqzCc6jGccR7rzMEQ5G7stgDjbQnLeVZ3P5wkTbixzazn746FPsV",
  "key7": "pKiMT7idCmeAYQGJUhLkVzCtogHLvq5zELH1SdRjfVRd3LEqMKM6qVR4i9tyzaPbwWKfcU1q7RB9MESrwUS6SNu",
  "key8": "5ERpyZae9MtTgF3kq1BJLWtQRDCP3t2PsfDPnh1Xtcdm9DUooqkUxprvk2qccWEuYoaQZRhwTzDDxfreY2S1wi93",
  "key9": "26qMbkDSQVR5jQA376yzsTzH72AT1DuT9Aw6ioR8wXQbRtFh4ysKfy58x6R8iVxKgC5CEFQnKkzDa8eq57vUoNzF",
  "key10": "3y36w31NekApubzzbU7tQHmRMeVR1bvhMfoUYNa68kGH77ozXcQmRqiPLGprrM4Z2F78pJESvNqrrtBsm41LDJec",
  "key11": "WHb6esMErpKZYaK2hvekivQoLsiZzms7jgvW3qmCa7qJB3byvrxn5ZyHuVX2tBbYb59bkukWjSR68hmzw3JNv7W",
  "key12": "6637BkxnP5HnCjofb3kqUDwcFQVq3DVVRnhwer7vtZHWv7mAXJBs4bKST4Vfx7MH2sKPwsdrKF6mL5qs1RgY5fQh",
  "key13": "RbuWcwRCD2nbb9vgdotjWL58ojhovXgbqygFWXWwMKVnwrcSKPVHf96VUp6LaThRkDr5razhwpnEazAnwK8ZDAk",
  "key14": "5RcHYN1A7Ghi1bZwN5HqLhLbdowN1nt4JPLzxVkawHjLak78Tbyudmmu7nXJ7UJsBB7XyjqwdMKFUPTYJqp62oCL",
  "key15": "4vDjSLRCouQRymze3kWK3KWvQJzLobnERprdL8CaEuM6mZQjnF81AmjcwzHCo1XiztAA7vcXDALLFu4JPystoTYv",
  "key16": "5eDtcgPvE1VuUdem5fSUsHRvrWMoK3Ge7qvcKSPa92C7NiekSWvbqBYci59AKuYKZV1vCpPgbHQEsB8rjQTzHWZ1",
  "key17": "3oUrL4JtYTaLQyFeHnASfcTaf6qxmM112aqSKHoyerxQmntEoeaRmvogFXsKPZYvsgv8HyAgx4jcLPSjpzs9QZWB",
  "key18": "3wSSvkJKJWcoAEoUYHXphZebz4LcnvJoi52Zha7svuyfyex6VfnuJoxS4t3qsxXrH9m4WgEpkmw4P7C6k8hivJsu",
  "key19": "3ESqBeHoCNGgCUWPmZtbnUzUqRebRSn8NTAZKhahwJohuYRZuxDLrQJLWCEowbXip1DsfDy5vCoF3wsQzzCP7Cpi",
  "key20": "3aPPUX7zcaEvrrXdbeY3AQSynVqSN6bZEhZ6jZWBk44WVnYorfDcKYe3GZyGWEUnQeGytLcM6dXqFwNtErNkx2r3",
  "key21": "4jNjk1GwL9vT7q6JmaFoXShqYKr52Tgc6ozNrA7Bb5behzNigbxEXaCwDoCLeDka3ingaiLMUt3kvkHgMGDyF53d",
  "key22": "38QnhnAdKNF1Ds31FeZ9cFJraLKi7N8Rm8iLRRWmKd5BKpaMZ1AebsRaWWa6DL4Eq4Evi4G9TsEbNLgMVFBBpfGa",
  "key23": "4yzkkQjAEYVEEFHVApLtPwTcULTbgzaEdomBxeBsJguvM7hcZXZq2ZLJ4pdpURDsoV1Er1Ab7ZzQLoqkVDTPrySc",
  "key24": "PmiDpJxTkzcBBAoJCPEngB8zZ1SxD3gUqhEvXojy7Q7e8WruxeUFD5VrjTDP3TR5nnyRVXZcv9tqj7KmZUJq4Aa",
  "key25": "5Hi4sVB28siRxTzs233GMF41qBEN6KruuS3jy1cyvB1NZg1VxeVK3V3UVBLkn6LbuWtWBmZw1A5kUNi6UiFEUdPW",
  "key26": "56QWZoEJSeywiXiFhbVS2nxhXyG8SvMf8wHjyPvaK2qg66BT5GGHoqf8gwLtJeohVsQ9SkVGmRj64f22Ax5RtpLC",
  "key27": "4Pa7cxnsiJZoLjj8E1x8NtW1Vg7RPB5BAPtwTXDtCmzbCR4USN1JXgdWzZvZr3xJr7n5TSP21xq9bum27fqeYCKN",
  "key28": "2gHjVcy86SnyuRRzRouRAUXePrmjuJBYPNcdp6TsQJcubkokfGQVGjPucQyyXEpQpA81NZyN5gRjmm6SEVKPWsZC",
  "key29": "3RLQUDtLyx5kqrapgDoekDoYz1EtUhjQGPgg1Hs9dNBQptEgE9v8Tv8uAx2S35y8E7CxiQmG9hB9DxCWeGAhqzM7",
  "key30": "WbFWfJdEUrtFXUrop4kGov2jnUfCK59oChUpDe5B6BbFY5vNkkmp9FwTCwdJPFYcwYyazghSe2QshrRQj5YuZfC"
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
