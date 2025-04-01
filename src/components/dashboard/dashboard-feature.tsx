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
    "3KAodF7gXyMhCZGugNwfCW4Q6bRVhPPb382wV8NwGJbrUeA11JrLK6XQtdrqbHH7LUy7nEX63VSo925FevDvxB1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZSY1RxUJzB8EBqyaWd776ZH9YjGgpebHWXEQWq1YSiTADuAHPSPvKL2CMVhEgquAzWPeeLwdWEVDh2vnboY1P5",
  "key1": "4WGTsdaNFCnyPwqozGq8SfzAA8FqY1KW6UXKjGsNBNAFktDXvedSdhbHrXFj6AcoRukP88f2KaLpWs9vmDoUgNez",
  "key2": "5BS21BXDdrJjzfLucz1FKQnC6F7RStdpWXWqujSyGFYkR9D9CCY7GnNamDcozNMM382QkfAJJKanWW9Rfrtjbz1W",
  "key3": "31A62hHTWum8VdquSRiGJDNaNPe5DM2rQhn4VtHTjZUkpDTK1va3i9WienwNoHcchdx9BSqhwhgXpoKkX35N8DPs",
  "key4": "52iDmyPntFaPsv4xW7aTeb5kHV9UrbjWgPuqwRUnpT3G2nZ2TTXAs9Pw2piemzPpryUhyxfqQgmcq4N2bDZWbo8P",
  "key5": "5VKDtbkHoaEysHGiVgpdpV8JDQLANS3hPm4XvvbbNEJXeUW9XjQ8EvKF6a1YuWSEsT8vzaVN2EfuCCreggwCEYic",
  "key6": "3E3BGKp9TQAjABzJAjTJJPsBmDv4tT3ptpH1UbNnQffkqJkKcpkW1VXSZbVNrqVYcdHc9BQi2XTWv9kiVqNRXBro",
  "key7": "51PunW375xcVQLBy37LF5dW4t4d4gghK8FtFfN6yofEhQNAiEX86aSnAb3DjM6pytgzrVqjmBaMW7HCTsfVPW53U",
  "key8": "4jGjJXuu7NrCo29MxZmRrgP2mz6ELiiUNGiCE4heFEY2v3pzxTkbRMMqA4Dxo1ARBajPuCVxTJV8s7u5ApSD5WFo",
  "key9": "2vvJ326FGZtrDpLXed54LuqkdtADVEG2dMNivdgCsMKEtWoSCjJvyfRFxqsZ5vwXKB8XsR2D7VKvsgzFBV1zk7U6",
  "key10": "5CKH53Z7bcD6yu9fevQHLLRMn78Qi8BHtqQX4vwqqKYFzSTqixYqpVPqbfYa2NbnVNvDBqePoYH8RAm74Dz69qZn",
  "key11": "3qEjL9sjtCbnuUJLVgbjfdTCqxhqvjqCK8f7bTZHJoP3edVAbyYAZKus2WB4nSLTZTAiszq61Ythr1NdVecJtF3s",
  "key12": "HDFHHHKaoiyJxbLuypVkUNHGRnnS6YktqKzD9GnNDJiipUvjPMfjB3Bife8V7GbDQLSQkbKFzfE82XvWjo1eSBa",
  "key13": "55BQG3fejJ8ranoRLkVpKsbWBZjDu1zu2CtNdR3D3KAmwbx1XMRqbTHB5MhiAicJt22dVgca2UkCJqTeaXZhq9EN",
  "key14": "5UoQp5vfdA6KtUqLA4Ph1Tz9M9ZTQHfAVfypsNnKsoAH9ApAowmuvarwTgusfNDs3HuRyg7iERuC38xht887RCN9",
  "key15": "53XH5RXvNPnfi2srcs6Gbgs9hhVhqnQYWhmYyVw7okSs2NPfVMDDi17HeyZ7h3qyLjSxQwojcgQVt7dGJujYpLcM",
  "key16": "4JFsgpFoaQrjLGke6wszLYw16oXnfrdKMkdnCKNf4PxXS7nZAo7kn9No819Ed7dQRdtEhCrdqibtmP5GEsRYZnFG",
  "key17": "2S93VtYQp9xEFGDvPSRkrvqUdtAeCiTr3UFVQtyBZicorfvsHNA7joFRSyQT3QWphDAk1UVDfQCxArTqnSNUqrjW",
  "key18": "2QTEpNwit3Yn9GJsV9RS6MXbia1V8NCFN8pEKSZ6tBLdJgocGJRMurUv4aDhYRfgL65y9j5RRqjZp5nBQG1qpEyK",
  "key19": "2qTUQX2fkn7qrz6uqqXFpVoAV1xox4KWysHCBc1Grm4jFZRahmoP8y2kZ5yp9trZzFjBVmo2YMJhwkZBNynEEng8",
  "key20": "5f46oYRL8sZX9zxRBPhpKELMwXb9a1Qu5cLAk3qdFPp1woHqx6FWa4ns7eQtEjvmzMnmNa2LmJNUahHp4qHxFDwn",
  "key21": "XpsigBkTJJmskAk6niYA2gn5pjqEBbQfvWPnMkq6GGuUmhkeMKSVjzc5bcvS1S5MAzqU1a4itY4FiVKMMn4W1DG",
  "key22": "3VY3dZDmpBPEavpVe2dUrWhfBGi4SzFPca2wRjTtjgGqhCxGaqdgidXg1CnySDJrH9pKZi156ZVdCqkB5mCrzTai",
  "key23": "3kG1WpvBGzRKQ87jBp2qCZTKtTT3e58ByUzfraxjVoZdv241eWFNv67FEG3fwpQjDztMh1Dsmx9TEkfudDYUzEpQ",
  "key24": "5gTYP97LHyF19QEqn7ChkvtJtqSiwXAqqAjfE8WYiTWu8RR8Xq7epBCLdZzjPVs1ak9euaSoZafrf7c5kFvWs3P4",
  "key25": "48GMFELDaZuADLZHx8zkVQPXDbetfQTmEpTFE9VryfBXQ43d6uez6WNEDin7MHSPcnDrVQBkZAYgUsC9wVbgCvLw",
  "key26": "53VY4f5gMeq6gRDN6BGnBqunSPL5seCXPJmYL18jg62Wf5MsyA2c6aqMJH74y8RyasnMwB4tVbhQfxx1ywLUkZM1",
  "key27": "ECNNGjApV84ySGfzmYzr8fySdaJPVWCxMKi8vpnYodWJA9DB8UrXvsdkrux9EHwtKExtrppdwYJA99Die9eCthH",
  "key28": "3ePAsGZCv1xvDa7qspnm4P8JY4NZcKDF8pEy5ewjXZYtBoxnWYwCTXeGkCJygYVAh4q9zABefCAXJwsPzmkPha2G",
  "key29": "2yE16dUTE9hCsW6GQwkTHwo9p7RKfZvvWnjtrzbojfCaAUt7xig9CEnddxgZLK3DTDhxBJnW5t4kAd94bMQ81nTQ",
  "key30": "Z3hbRH2d9uCLYT7UDB3aBPfwuKVkvS3XtfoHXB7w34H7c1Kb2Sh8RgMFLGnKC48ygvNnr1F8WGdSa32NqMDgHRp",
  "key31": "5XG1Cxn959ePhoLgRZS9fX5oQ8fpAmsByVGuoSEBUiA9V3X1bTyCyJm7evnvg3u9PkCQgCjC5kTLdpatuWkL7J5c",
  "key32": "4MrgKEiNgyqA9DmBddA9wyBTKMpJg4hmzxuVToaaVqWhDjAcrg9gMu85fMmdpL26z5pgzUyaG5GWZ819R4ZHXrmW",
  "key33": "2iNBJWQpJtVas7AZVa2934pmcmVNr1NC9JZbVb7zMH4eB4WCDG1u9h4UF7zs32qD22aF9dy87jHNk6XWtyPNBi6R",
  "key34": "38MeUSniNkvqK4aSoWKTC9iaS7tuZ3TjK1Pve2GLAwHkoftFj5LJfDQdNVvSHA2kRp5u89QCrcxWRoX4VoqkESao"
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
