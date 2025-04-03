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
    "3Q3FasETCYpLvUKqJTVH5uUo1qwpdx7gN1jgAyG9fXeCQrCqTabjENrinZ6zYYH9uY2DxZCtNYgk5QtHWpZhKUbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MjoChdnDGXPXPuQYm7YDZYnEkZq6GyJHD9cG2NB2UeWTcQ1abWLc2We7KAAhzATCkizYSMainSukpZSq2g5xCyY",
  "key1": "ee6CprwBkniVrdMK2dJbiczFTtZh5eKKjrKcgzvMjJSakNmuem7acX6hcJRJjYQaHPQuFr7wZwCFC38jScHtF7L",
  "key2": "2njM3cCGasS9AbhVc2KobUoeDKAkKYxdQHxce8zpCzhgzdknZWTYL6xE11TrGPPUmm5QdYfdeNNVL3n3MD5CYQ3F",
  "key3": "5mXiRHJMgGZ7sKCqp5pzkAkv5w8LvoFB24ebfa6ZK3fDNqh4FXm443G56wwP7ZgU4WhjEmbhb4DKPvDR94Ks6uyw",
  "key4": "3bDnMQ8U66YSkg9UzQy87DnYuGcW8tFAh7MJrmzhhzijYT1cuEwrLhLuacAAVeqspZkMjz68Kd9MHAVF197zVXfk",
  "key5": "Vrta8kWmauzzsa2TmNJhLvN58GV42LFV1EXbdUhaoguYEmj6bpPxeWT7fmsQ82F5p7HNByxKv1qUJuY2Afcdkdz",
  "key6": "2QXAtR8u3zg5Nb8QJCGxjVZnkkGj5Kp2kGGuZFNEU2VQPyZjJB2AEmtM4HgQ4kAyEBQwEXpi4JuP4YL6NBUTmPU1",
  "key7": "24EtjP6nLhoTD9vwGvxXfuHxe5HQWRpwkpVgnGFhVd8Xt8PeDxz1BiVybf7qbSKZhXwCgizZzBV7TLtVL9ScokM4",
  "key8": "1mAEbJXTc8SVN9yJjajLZCVSxvhGxyegfWbaTgWyL2GBwUvDL24dbj3Kf8zxLFs54baG1NxAe1kowbhg1QUb9LC",
  "key9": "5o68JJz3TXpsLmYh5HKBFm18A3cMEfFq4p2eZQXmtzA9SjbY1x7NSVDxstGQJcym3bPgPuexpq5nym8KCh98W5G5",
  "key10": "bLeZ2GCwNQCA2GseVKDADQo4mFvHYg9AwKqwScvJtBz1QKLqCpuomvuZ4iWDYmFLJvmBViKq43EmmrJoE8Zx6w9",
  "key11": "4FwViocHspbqC9CzNu1KTmpwaRnN9PPu5xx6VGFV3TZftLDvuz8K9n12zCBzDmgatPePL3CUBpFhN9rkjecC4gbU",
  "key12": "4LozqafN2cPTtgSJBJs4etiyCkxGycyjhu5KzdCwzQYgCf9mePZ2fJnYRWMsGYFyyvGa6UN6Jsx3TgQETNawaYsE",
  "key13": "3cxx5JvQ72w6fA2xmM8Fby2wb8hdqvS8Qz4VSuBm9Uf5begHtBCeoUEQEokzCPAnztg11V2VhgDW9sjUHqxcPXk9",
  "key14": "5d2toPqYDs3L87AYQ9Y6bkvyZpeaB4yBbwABFkPZ1phyyy81XEULaPPc5MhuG1q7wAzm1EqogWhfSqW6Nzm6wG6G",
  "key15": "3jmp9AkGovFPCtnCCRdwsjw3TS6XNPiFjTw7wzkcXkNi6NEUeY2rZoo5Y1koeSJzqm7rnhncq93qSL1HJ4NEX9d2",
  "key16": "4NnfJ49MHJh8VdXzvoAZxWNU1Jgm3ZX48Df8nAd1yLuUWoxKqMYaK9tKQHUNuF89XKc9Wq3uHNhwMLx6oxXsoqkx",
  "key17": "637VMjS3HVWSkYhTpwBvfnZUZZLUSLMxcn2VdkCs2zLAXwWrPW4yLrb1E5HFzgCh8iL95TT2wAQYyN9V2eB5SauT",
  "key18": "t3HrEw9Aarmsfn71VjjzVENxSRPEWY4KMxaoFmRc4J3kbXPwJnCGjwwpYqy4j4YymiqPaRhUnuuTh4uzaYZRL2n",
  "key19": "3YgdEgrNva7ZXBBuTN7otaV5nFGncxEsT7C9jDfAnE9zH6FUqC2aAmJvDqiHnUeKqvZmPh7XXedXbZh1BcYKbGT5",
  "key20": "3AhJfo1Dh6Hm6mKmBoSypF7yTtsiMSFonSzr91SAWDTmDqd6GYF2s6NgbYT4W7v7ZtLKx3SfXMv4pcnagdKJDzCb",
  "key21": "MQuafAzhaEhHDipJrKC46GWteG7VT9bXfL12X6Z9c9jpQVDUxcyrMZRgXVUBCs67q1pTsmLV2Rxv6VLx2T9W5wo",
  "key22": "4DpiDA8rxxYYZC877HkS69NfEgdXcNz4yN1G2CBd1GCJMeHw3DxsoxZwigWhTTCzw7oqEsxPGeUcDo6damGc2kgj",
  "key23": "2qntf731efUtRUYogEp77tq3DaVhhwEuScEZwuXjwNPHVsfSNGxUMAW8BMRB7zoVHdsqPrVoExNi5ZESYHPoUCn2",
  "key24": "3qkFWzPA6htphfvEE4ZJYjf5wdJypd12cWyoAu2DfRxacoc2SYbJNavbsQPjHc1ozbPdCuW8BmPTJgeeBpFGyM9Q",
  "key25": "2UayGqU87gPMqAELq2Pow8bzRpAHiFuqPTz3TQAk1V18EnVxyW2qr9ePMUqDEzHAp1DC8xBaTB8Y1qEEqBnrykmX",
  "key26": "4e8TWo8QAb7km48Hq6tZvDwz8qGPGtrtGXdPZYv6c2bsmf54sjKrnxr251urn7r95ALPL1LjsCFoaxyF7zou9M2y",
  "key27": "3SShz1cLg4aBoKVzadPvKXrfxSti9qi66BxXQo2BrwbrnoTSLPDGtFypNEtsCAgJDuUo2kjZveWvuHEWeiQrkz2",
  "key28": "fFK7EdotMq1569Y3EaDiJEn45jHLyZUwV4BvRb76GP7xxzALFK8CbADCBpbQdW4qqxRwdwyuhTqr1PiB9NMtsCA",
  "key29": "tLc7jcxDCWphsGQDuVtnfatuxSxLuQPDaKKQYaMxjC48N9cCEXqk8p5iF35y3n5pD6usqFiVHn1DDPZNYky7qE5",
  "key30": "361MQmUzFHVkyMS5HWAUfp1rfi7auDtUZjcANGqt1geaABj4r6k7rVqtk69S59PGnaXhLUXDUrcszEmiaGLJAZj",
  "key31": "5awrcRAQHqAXnnh9mGFo36yCuDoVsFUMF9FfxBdW7TspxygnVEG1BT9Z2ASa6pUSuhy1sFP2UkbW59ks341DxgtZ",
  "key32": "3kBj7kAfUnBhc6MbaUU6x9k8npgUPcha23AHPYHpTezbyFz7bdGLZ7Gb7sxSWhPMRWZq9nvmhZxMorQhgDDr1vfN",
  "key33": "JrAXbFQTgC6BTbw5A4ptVMTb8HXx3tHGFpbyu3foo15Yiyd9APXtu6WSCrXCCPUrnnriaMCi7EzMcGEcWoQru9B",
  "key34": "3HC3b7wRXgbryJA4kEMPCVFm5gCKFew9NaDXsdXxAgRp78QRgfimSPWdmELotqba7dR7drUYSG7Z6Jv8nb8zBnpj"
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
