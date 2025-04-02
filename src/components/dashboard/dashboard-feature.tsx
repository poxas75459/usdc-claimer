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
    "5revPvxgs1NZinDQ9m988nt7mMgqr8TABGbjEtPUSv97PsxCtEDmAuKVwk3jYXA5kWYGtzzLgijXZeHNREYsdaSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55yHiBcRiSrwsJNAvBHzAbzHGfJZzaA2A414woM3NEurdkH3put6BuG9MKnRDjL3SyoB9GEMiWqhUqTnt1kPcxZE",
  "key1": "5NvNWE7kCXXZFn3ZhPKxjERiEusZNGSVvVdLmGhMt7RLZPbgkBUTRXfNvJGELijgaAhh5zeKdR9YGiEV9ub61sWn",
  "key2": "2RVq5nKzK36uRzxGzUDdoU3RhqtjLfUEgAyNhujR6FFTaqZesdXDbXe3dJcH88hxVb9seBzUcdwjmukJ4cNKh1pj",
  "key3": "498WMZUmqFL2dvRg2NjxzVzQrMuUK5aHr3hLgCsU7qc9yX3STpN7beXmxCnj4AFhDj61HH2ViqsC91KEyd9yv3Fh",
  "key4": "4KkSndbERpef6AFYhjhpywGg1CjHyngZgN8L61KS9hdbSNj39GjBR1FZ6Hp1j7KzG4MhGHZyg61C8LEUiKGzaH2U",
  "key5": "5m7eD3xmnJz6YpdHKZxm9A87KgwU6Z539xYPn2NqcUfdnaoBu7n5NvkYbyPWCGMuLu3i9u5nKNV3kEfP4tvqhBp9",
  "key6": "4sKa4k6EW2LJoYsAy7eEctCzkV8FPHoUCaLcS7ZTPsTEXzRgAA3SMM5nve1P8gZAw4g2QKiTSpDJN2dKBNJeJ6Nj",
  "key7": "zPC2A7iLMVwKFwTySn51vriqjgVM9T4GVifA4RkZ1EQCDLLLivMtqMWmJxuoVNyMzXfc8bniAJSHBEoFxeRLYf7",
  "key8": "2b5JyJT2LJPmoKEUTxnf6af59JH8LkpQWU2TdBXE9LEhgKuvntUiQ8Y75peZ8phFR95QHsvVVzz1Ped2pryHmPvE",
  "key9": "2kbtFUwjuNkZsqeFP6LDvDY5Bwo31DQXcr47fo5Rt5nMZmQgdY4kKqyhfrEfuuCqkpUKusa1hn7PRf97pvYQhG5p",
  "key10": "4rnAoS9QkiNumvYH25MxqGh2mWjD8tZuVfrtDpJ13goG43ZgRdnR9RSxVCTyT5ib4FjmRDr5sMKUttDCkDwkhffS",
  "key11": "4L7V4hBLN4nzWVxeLT29qCFr9ijzjC3iZoXba9TPeFV9RbJDYANATLyyJXY9foSNQaxiMkh3NnpfyztRmjyPt23z",
  "key12": "5isA2CJ9rctUPYAwfdUV9g19BTiFBXLDFqzz4FFyXWkbPQ6PFvqXEdMfK3FR3iSvFXytw1K68hkBhThvYERWV3jt",
  "key13": "5QBUTeHKTFrQzvQykgcdGX2NUuVmDDxFWs55PUz2RVhiseaHYRQjFC1VdvbANVebZFbyUo53uVGwLhV8gTvLpzYS",
  "key14": "4TdyzY36UoLejyn19kLL4Zt3GpcB3iXV21G51gYPMjJjrB1M7ry38215JeXvqbyCu5vYAmGAnqkHdRS1JWhZPMaU",
  "key15": "5aEKdtQY8VVswNiyNTAeUPEGUb7Zr6YV8C1sxFVvpZddoXRDRwmMoQBDmx8451Wpy9nvSd7qRyMZf7D2ka5ywPBD",
  "key16": "2dKyR13jfBSS5QX8yxh9m27Jh7kyvSisTJHgDeCigPpdeeZnJ2Cw3dNM76DiYuxmPphjZWLq9DhTNQJrVqAcn9zo",
  "key17": "3gZuvy6Vn8qf6J7vgCTyeNEoNKiGPpmqAMQ53pi223N9wZz1KVnehtbWxMpDidMpw6Fgxa12Yu1iRk1sSgLnzmUq",
  "key18": "4JNL8vaRLgqxXqg8Qktqr4WHZTUcBp1ktxGDjP7rMaPwmWrmStiGffZceGtxrKUJ4p3DsiqPL76KaAj2aYoPBZ74",
  "key19": "27rNWDiJvYpSZRutf9s8NQBJ9DguvJ9uwoBYWbdydaMUbBGsVVDdRMaZJzXnWhfmBK7UosD8nGyosLkaHPfhFVso",
  "key20": "4UDVyZUnqMwKBxGePBNeUXVL1WQDS2N1MEixyX5HgFYxtz89hp8QgR9NyEMTPRqadqFnoziAQfU7EB1Yaco7jEdS",
  "key21": "45GjCCTB7orcMBbpFa3jHSo4QzGDavdP6M9NVpinLthw3y7rnzUQCbPkxFvKgwk5DpunpeRzX23XZ8ct8pNRrcph",
  "key22": "4Kma2gKeFuGyqbfSbwbvwrQTeH7i51mzwE6HTDEaqDkAp2psFMYVSc4tPyexFEKhngfZgFwJch6UK9rvASwEAJ2A",
  "key23": "4jXJ7YzKQQFpLxZovgMyQyiNTEVy6RzeiyaHpVUjeAdrromRe2AHUjQhZdqrSDAAasoYPCs2emDMK18HqS7ZM4J3",
  "key24": "4pAGkmeMS1Poav5icg2X4gABoeR6TJfwQvVamkPNNEJ5TJKj58PQepKcwfu2g9GeiyAj5cQknpFt9QnMkz27ptop",
  "key25": "3nYbY73se2HQQULsRySkKzpfaufEzP7qHQEdQhNEQNKKdd5xNKd6isZ6J4JNmKzwqaxMbfGkJcCKxpSGcnt7rzU2",
  "key26": "4a6867KTRNCCTkkiTkYE5uG8dTsPK3yiDteHNi1PUmDGCjk9cVP2eTqHbRXH6ou8ydFzcF1SW6yzdREdjTy7BJyg",
  "key27": "3YEBqyzpz2WjPvskc5GvBGvCACYTfqKvqbfVYZfCajeScZmB1rqNvxBRuv3kTQqtMCLn47Ct5zyQ3RaJ9v8brcq3",
  "key28": "2kgir9Qcc4DmKEZWWqdaroJk9Gom7W2P3q3b6kxemihAQjJLCNLmPBneo2h63EWzaYepGqSWWKUusJNcNXGkyE1Z",
  "key29": "5GCfaJvSbREoHD2M7deWwHzL6FwgzRWpc3PvqXcZ8oGWyurguuyJBpnpz9qbA3qSPc6WZaJzx8sZmhkntsCfU3ZH",
  "key30": "2AjXLsgVWBeQ8hd9gLhJ8sJgxEAvu2EicgFbDSmEZyGtwhuzMWWvATUzddXfxymrQhhaQcu7sm3tD95KjPrV3AQU",
  "key31": "5i8SEV5XGXV9YzBAj2Eon8VSSWdvA4p6L1kMVxjwT5WpgKN5rqFFMHTVTV7j2D9napoTVZrgi4XMHktzWUksnqUJ",
  "key32": "BPxnLdNtKGYT43g4CoHnVWSv7fei1KfAXDCmGyJEDkRmMdETXBxsX6Ky3dzK4mjHKNX9AXVFDKSPnhuVG5jwCQG"
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
