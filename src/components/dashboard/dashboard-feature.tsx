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
    "2j2cvL723pHHE8Fi6kSD84M3LhnSJi1Tip2J5AtMtNJjeqPLe4qJZVJDNJG3qaKdLXJPwiP4ifqVrbn8WfTEqmae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29PzycJbSQ6GU5JgNffSqE4x9i7wdxYqXGhoZs5tFrbiuCN7WHTdGihunLCTpUW6y3Xs8rQbCJqrVeRZhH6iB7YR",
  "key1": "3Pzzcm3F7mepNmFSKkWbGyPo7m56btMpoLgCyNjfuPnCUrd4K4FoYywVpdGXUoNFwKps5HM5DU8nX8Cn39xM97Be",
  "key2": "2vnKRXwwpYNmaXi1e7yZGCeB9qF5xxHZRuwM1veeiJvXpq1F1LjNJt3cAJquv2RZDS2KLSim4vd7EC5HZcRpG54c",
  "key3": "qm3ysH5RficWeCgpFYBh4CL7ePfSTMHxSG81akZMLcqxgemBLsr3wmErddNBJm2Kw4uw1UuKYZjqcwffXLNe6tF",
  "key4": "4bJrqzHT2EhXTyZ5szcsSWjP14r7G8Po9kWErhhQ7d3W6JYhW2iUAiagQ2AW3PLtwDfp7mGb6PQoi3RkPavW3fNB",
  "key5": "pNRGRjFNWz8sdbuXJ1uctXiQD3zZtdQXF8issUobbsfU4re2Jdve1xgmqoXrri9t47oaiQM1Tv8H2jjwR5rjjuM",
  "key6": "3hcYhBrrzcEKvdhbsMyeQ73DGVjKZq48BqXcdfjRJ2URzJbRasqZLNsJs4iEGNCoEd3MYmmmmxXGoSDKQBASyEBb",
  "key7": "5ikCWyvhBGyh5szhmuUk4Yy9QRqSa1VEUgbT9WVHnsF8CNijtPU8kZnXftsjtfHTSgc6xHwHcYhocWdBkovVB5YT",
  "key8": "4QZemKcVamZfe3h7wXLLGSGLC94N5NvfVFZMNxifh15rLqW5cyHSSLs7hEnQNsfg1wtKryPCtpbVJxgVeykoPJUP",
  "key9": "3yPSKMAJeLgx5QPFebssCcPcxjp3sypX8cYfgNMzJz199SAkoyD1VffhGqN6L9LddC99jydESsFqQjEYLN2daFNS",
  "key10": "2ykkveggrseu1uRUyhzo87bNwmZvGBmH5ztD8B5xECDnaaAaM8hHgHGuS4poQunraLzGgx7xWg1WGQu6c8E6dBRc",
  "key11": "57Q3fFB1su2D3rjKrKBBzpC2avaNZ6bprbFTSKFCMhb5smMJBLQHucxQAQmae1CusDP3Stxd8PG9YHzF62yVYgwt",
  "key12": "3inf1RkGM9f8yPmkC3otqAJsqzRc4fN1TGd1rJZS3F5RKaBqhMNJeHFztgXuubzAtb5EM3GScxGraAtU1suQuY3w",
  "key13": "vy5x4jYBdgHhMCsDsWGepwPk23xjRY3fXsYCimX3njaY1v8kiodJUzRUdDhYqbDi2vFA2uGQLbsy5FKTTF2r6PS",
  "key14": "2qhDiWSzgrqQudS8crYZ7XPBA81AxuxYKGY8jonYstraApWU7aKukCobv2jKUY7qo6vBPjo9HS63pxPEVEKVLP7V",
  "key15": "3FLRvjK7X6EBBVpvrQBehiUCs31DsLZb65E9rMCGxmtNrN2Tfe2FBe4KBmSgxtFnWDXkB5ADdd6kFFsrCqahvMcb",
  "key16": "2c1g9bGoAGFS8BsVuuUQn1FqEtFbFSTMXWpsgHqq9znoXU2GQuy6hqjyEZdoo7sh6Msxa1oKcGRWCf9q8QpqMLx3",
  "key17": "4gTn1FBMSe77rFdAkkm2fuRq7PMPGhroW5YMoszoqkGcUw8nYfN6XYgmwkMXVL2vrUxpiz3HF3K7bZV5wVhAn9nd",
  "key18": "5qUbvgLPNiRqakFdxAwbpvb2gc8ogBju9LdSabGABQK7LNchAc5Eh1JcGeCMpkVeFDfz8oxb3KrSLYeBa6Lr2aCY",
  "key19": "iaEhYKen77FLMJQNHfdrs1KNA59gkd8GjB5wHCMzqNK1CjokeCK4qXvB7CYYCwfDQJueYtPLeZKjY36yqmUnd2j",
  "key20": "5qJ2V21bCN7cWFNvNP1Uyu2qiMWQACijk5DsYYgeD62TEuhn3s8bp3zbxox5QcNLrXJBJVutQwXiTvymFnbbsMhM",
  "key21": "5hzVBNvNbZdhvLWDbBkKyo8a169UQt7KXZxRr6ZTcJ7VHVPRYyFiXr9m5GLfMMoSDw9qDjgpRRzBh8nGDgZKru5v",
  "key22": "5LVMncfqdHJET83MqU5v2qeNnTmuEucwth7NwR6KhfSPcGb75SH3JFMVVqTqz2p13Yc8z1cFMMWmQCWa5X6JZ6w1",
  "key23": "5fpxvhV3G91emqpTRwJ3Xr4U2qk4QsXZnLLzG9ofyS2Em7f8reysJMnooj5KXy1cLzDMkBzVYznkJctS9GHGbBYz",
  "key24": "W54hYNHXXHbzscQNBBnZfAC3mufgVwzDx6fZFXn167AgTca6cjfF9tnyPzv1dC9HFJuHdFToekRVGFXLfJmj5Dk",
  "key25": "26LR263TN7LcRTGijcRRT35B7Gjndt9MP92Uc2wa64D6qyhyoSKBihnFmGesp3aQNqYkPL2fQL2GnqskCS7HygKA",
  "key26": "23ZHePb5YYYRaiWRMrtnwqBLtZgS5LzWyF9d9GiKm8dkzsNBvTFG6rTZBPu5kJHvaK1GGz3VhRqgFoGBuxMfsuEj"
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
