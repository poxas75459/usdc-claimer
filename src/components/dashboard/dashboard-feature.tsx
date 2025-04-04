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
    "58QHXWfkUhQYN2qR9fP1bL6DBSw1xjasjnbZq8pnJBGA5KwBYdLF4HxaBtRikpo2ZhjqVf1QnBcwJdnJV7MURqjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uZPy2vDirftdopxNZhPYcppSVR1Ymx4owMT5hUYTANpKEf6gkc7h98M7q4ehexcrkyMdGaRvSQhf1J8kjHoRHD6",
  "key1": "3LHWxcuUcLPeockKgnBJwR34khVTkttVBQB8adtcvBjoSuYKG8pJq4PuoCaTJJFT117nK4Aa8wHFUCS6qvqR7hiM",
  "key2": "Rs4UHRhmsRE97iX3TM8X4VryxgG3ZSXiT4Zuy9x7prfdmgNGHAFhck6kfvG8cgucyNgeoCmq1jG2d4Q3ry7G7Kv",
  "key3": "cod2NJ52e2JiNDuQSTVPKQCS1PYcCiwH919q5kYT7vTj1mFZWP1dHPo54wcPujeFqph9DvkkkUdfRzHdqmyEjPz",
  "key4": "5QSncFJXWvvL7Jj8R4PioSAGMtaXgheBNYrQPnTbH1A73c6f6oZCcKEPqrFWuWNfCfRa7FV427kE1QXoiUbCs8bz",
  "key5": "msPZ1MfLzjHaCMzh2LnUo6finnzYUpAPHFXce4EP6vRXqZr8F4DYwt4SwudE7NTVj5bev7QafGbJHs2kwTnHHyu",
  "key6": "4zRLFPXx9hn7hbNKtPrC5gsrtBQofch5nfMDJsxzo9jkYHy7XkGnSGFSfy3aKq1hih1ffT8Q3sTjfyEAQ9UAV9CZ",
  "key7": "3WvQ96Lwt2XVRno2dm1kJ5VpMNWuMk1mbdmREXfVAhPgc9JRpJa1kieoLQcWB8uj2Me3eh1dGqJ5nenaRVgABm1Z",
  "key8": "2HiH8gLuG2jY7adfMg4GApvCv3s6w1sJ2aVjiYi1k8TbxcQksihWhRoq7bSXrPTFamD7pKo48v14zwWWQGUCCCWk",
  "key9": "4DpZ9pPpG1fKbJBjq5MYPMh2etvpef2xPc1224GXYpsFAgZk9rLp9FutJpR7a5xp2ThpaZyPDdLaGEtHB5Peovzx",
  "key10": "V4ciXv2VvevWgFxjuzFXuU7V72WG7Hau9GoW7LVf2rUv9vwwUyuh2XuFopZt8p62TxwMHC8cEKUTRF2Ywt9mb4t",
  "key11": "3NQsA75FfpahyshzWWRF5suTco7iJJPcx6EknJLZVzFfqL9LdSDfFEWQvXafpHnRanAADGipsqe5tn3ChPA6UEfc",
  "key12": "2wv3rguEGtT1YXAxdcd8H9Ez3Uz68XRSYNdwXYfRmHzpkNaMetaJAJQaroBSMqmwhyGEz5gNf2gHpxfpwbxReMwB",
  "key13": "52UJatR2SUusD6irDEE5QRtko3L9HrPj3mBKhWHpkcSjYsNm2wUH8estshAJmBrN87uVfaLNasgHUTZ7fbAXrLXz",
  "key14": "4bb9523svuSDPd1LxzMViL3gmnn2oAvCBRPNAP1wJSTy7MrNrD6bQetgHeuJwa2Ex6bSR2YtdUnFyuCYDfuGYhce",
  "key15": "5Uv5cDSCh9n5eSaAu1jSaFbJVhaebyhqoCdBvBi4mjPBfWuBftQKHnMarPu7nDraTFNb8Vy9fMB1TWcuPspaYNqE",
  "key16": "5xGSuR6o32Q9xQ8geqYk4Jaiy4tXwCAoxMw7ABKRuCnhtC9siqLf7GPh7JVtCSD9ZYXbuiGgfVX6Xa84LkpVxntV",
  "key17": "3MAb7FSLk2tWF7HjRijD5bo5YGQcJWR5Y3JkmEriebTpsyWbfGG989gbLuRyNheLCHn3pUhhwWuwzL7WTpg4RGRu",
  "key18": "5ZzwBSQkPr4EniTN98ZahpPZzwLuW3BmGSxEvMiZEjhMGSVBjrLSNF8aPRZCMbi9dBHJh7F42FZ4nvJC4gQBBqLr",
  "key19": "4faywcRWWB2LNyRgxUpX2CMveJkN85W5PNPgMexLos15oiUFLhC8pdthnTJpzSgyofshU46Gj7vEwZP7RBy47axC",
  "key20": "4uUJ9YQcvrKwj8fr4kFobrWmVfxecTBWWTAJ7ERRAcY6CXU9FMXsZLvyMXNUfrtResTKXKuYTjF1EWRQRLB1fs82",
  "key21": "5hYzEWr7EZi2WsYuyFL98Mxo8dsgfBVfWp1q1raz2RpohgnBGYN12JeiyPGeBnmqDTJNact4bRVsBQtv8M8Uny6f",
  "key22": "2wMq7gtbZ1hpQ11K3m5Kce4cfDXuVeesPsvyEABgAavD3yLjM6G6q34qnBKb8teRzW7RssddT2eNEKMprLq8aj1U",
  "key23": "vXuBT5W5EjQVh154ApmVPbUjtfMGCq9y6kFFCrtVFXek43aQX95Ybwt8xQWSsrLCdaAMaoddTsLMxcN4v1rsj6F",
  "key24": "2xFMB8WWrkSmN1pwaJeQ1S2rdxA9tkwrViQKpquZaSyZz6vM6qQzPKXr1xvS6mM7ncdtPSMPewGASefQoFxovNn3",
  "key25": "VjF1nEamSahzTQHuLk9kw6LLSv7g1DVmCV1qRXwcKRNkm9y1nh4CfeGtr8UkYtvQBgV6kHmQGHLJMRgELSvf4tj",
  "key26": "4WTRbpmmaVHjGUxf8k7NWFCdKy4vtoQjimiSR9Mk2SDqjCg9SVfDMtXJ1CNnPvKREuGe9pJSuwHxrN8P2bt7thWx",
  "key27": "5QHRYKzLkHJnadHvaTMy5hfYbRzoEm1H9ui4xdf1RJ9on9t8v9ShZKKsQM3fV2MWCEsDqbjfmdLtponNXeugXjdt",
  "key28": "4TpxpY2NfiBzNajpx9Z3H41BeqqfbXn43eaxcMn4mQi4YWupQMGEYwg8fFrQeM7ccwfXimfDwyHSBUVSgD7UCGmF"
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
