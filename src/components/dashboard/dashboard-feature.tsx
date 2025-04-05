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
    "5qARNY7Y5wyQkZZYaPTUHFDvfeNVPNisDV4Y2yX97W8wRaV4RFXeD4WWTzXixgdHpyHJhC2mbAWiy6VNECCTKAre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V3xffRKdgaeEnHYqizgo2DaPhGVPSzRhSLAbwP7zrM1ARJ5ZJDk3oC1PYohgXqesBhv1MmaUoeujeYzjMwUzNWu",
  "key1": "3DtRfqEQAYuTXcXXTNLL4VCu4X66zVTHfzXEiHQVkVL6irisBVaeFkZd1pjWMirwnCwGRvKm85GAMZYPL3Dpx1hK",
  "key2": "2CYfzRbt1HjPShzTMayNmuUKgYLgEszvX1oZ1wCn3QuyFNrqWc3h77ZBpwMX4qFmwiM3N5y2xVYMWT9UPyQ2xM67",
  "key3": "Qbqbf78NwRWijER8mgF5mqh7MAcRtkcz9vEc9ae2X73NGNo1b6EvQLXodym4pRQgLnXU4et8rHvnjLzaWd8KYn3",
  "key4": "3SXsG5ZtKEcehsTrBs2rjEQ7eamjuRx2QfSb9QEj2YBf8wVJzNzUy4TdnAERevHagiDzRMyudayvbaj6ocSeGdtX",
  "key5": "yAfMHPH697TamFfw1xghSvLrdhP6qSBTGypH9gkirbvUN3PZYYpmoy3STmBJNWmDjqrMNRZ5jW9fwTZCX1kpPUc",
  "key6": "5ermVhZWCvSHjSRdC2q3xdp6wRP21fQZtBwrywagSFYzYBzbpLdpR6zYFfL2FesiuUswQzb8Bg8273sYPse1oV84",
  "key7": "6R1WmyjSQ6ETrYdPRkqtvYKMKhtbF44D1HSssCzABmrSrr2gPfR5DfLRfivi1oQdPeG94PLUH6TtfUhkt7h24RE",
  "key8": "RE23QpYkyjLbBQzAK3Gjc8MFWuZJbH54rUnhxZkv3wspFAGEyJKREeUMPn699gTvFKuvNZRmqqwhAEiCt8pWG3V",
  "key9": "49BCK6kgMsjpQyj8vAEJhAwK1nUh75rdGzHZgTeCc7WqXb4iLBdvmMbS4evGbJZ9K7ZG9p7ZZvHYFjqJmysCxG1s",
  "key10": "43HbfzkFGmh417ZwDUmRPZvBRArR5jJkwuhMF5Laa6eDNPa9ETswniFEgds8qfozMyTMGCZ5S9JCUcXRhWLZvCAQ",
  "key11": "2ek2wGGLF8iNDPhUZfj8pPjV9HuGAXMoCpWQamH1EiQU5wTmGqU5fX6F4LscJwR9FyNWUudEBq6qh4S9tLZA33Rp",
  "key12": "2LGAvdHWHMUrgxCZ4XgsnycovEx8wKw8UmcC5bW1vkHn2CaktfQVhYJP81ECkvdYSQWpbH3PL3bG9U6NnvXEhePK",
  "key13": "62Jbru2uq9S2UXWmqRP9MyRXKKZSa74nEgVCYTKMW3q5iddVrKd666R18fdtjev5pQhi5sd3CbRa2d9ePFVbNVT6",
  "key14": "4G391cDvh9j85KiDBt2ws2yUBAqLcUwCqDjorDKbkUs2UgcqHDmA9CseyH35wdfkJFQHLkBevCdjmgFGxJCAT4Pc",
  "key15": "pEog2apQBdEFRSRBFRB79ZQ8GzLz886vimbj6cmXng1DscxiB3GLstHYuPRpYqR89fnCoxEgcasH4EhmG2uUgFA",
  "key16": "2KeczijBqzSeWsVQGZAECUYgbZ49Btnc6wQszdtHnPJgHj8zigka6A12DyJHwxspM4iwP4QuoTw7KkUycQc14YbH",
  "key17": "4AqbyATdCr3mdthQAk36QAtv8vKBH4FqbktqLZ9FAouAGRQMHmKm6Vf5RxAsQotPqV2JS6etJ5qJxTZnZoJnFZHc",
  "key18": "1v6qaTcxpNfL5QNB2Ti9xiLpEAaN9zmA9B3p3b2qrETYBxx9xmwdWcdRLy3uHvHbi5BSWEXuA21cijqpBzQckWa",
  "key19": "87rofnGvEzJhpPPTZnzPDfHTKjYXBbQPSdGAZLHhkaZYgRS3azgsUa2WjgDo93BM5sodhxvqBAiqZLQTCtAsa2L",
  "key20": "pfRnk6fouiYo6y9XHjGW9oeRv6VxQ77XF9aDAQeiPY2U8ABJznba1Dm7RR8qe4yjzUKQQAk8QQzfBVYAzKSqydt",
  "key21": "bWfAoZB451jkH88VmSByb4hHkU9EfEdCbGt62n6DjnTnySAMPrRqZPQJV2m4aZmGDQPDDuDzy3XViCBa3Yvumvi",
  "key22": "RxPfjtHwyfzLzB3ZVHQ38XcL1RjysH4rPg14z3uysxz6G38SyTKM9BhAyzs3QrGLh88KqdPPGxY5BGecSkVACK5",
  "key23": "2PGWdKoCeyBqaw5yjA4Kzg7B2Xht4zxTiDhpXtwZswSysswpTFb4RHAsoPNseakgJyCuCpUrrPc6yao5HU1q4X23",
  "key24": "47w2z229xtZ3MTQ2T8ReNEc331C1RDgiFraiXMzXBzvS5AVMArLPzYZSpPg4QTZdKpp5Rm14YzbRRuFZwB8eP7qy",
  "key25": "65Tgih42CaJon6GVEPXzGzVyyrnaXUDM8XaVBZjcGhKsgCVfL8J1rUFMaWzaxz3rYGnEka3kzGors1Wg6y9wnWhp",
  "key26": "4QND3jRiB3J1Aij76vWMxbQXZXBtBMo33bZgRnkKVhYqy1pWtZgVvZb6CZznXbf1cr4FRZBWU9iQpmHchM6NT2Sp",
  "key27": "27SNMcQeRifdRMsyMXAfXaN99Kj8Y1b9PzGQdZZza1zJJw6MkRD9ao6gzpeFfxw1KfTGpgvACSE3avVoU2geftq2",
  "key28": "48QfmNx8R5xY5tSaveaPJ3DnMk1vUkKFhEd5km3gJvGQVSSMgqP3fmbu8TtwKNXMLEGgYcFR89URnBnmFQPsy8HV"
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
