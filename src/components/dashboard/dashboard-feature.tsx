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
    "322UJ2XxkEhxxALid8GWRodF9mR9Ror5EYHLGWyFoR4Gai39pnrbsudqkh6v5WFPQ4vzAvWfiwWQhg47y4H2vmNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UFPjNaA12CoDRkCLsczXKMhWpZfRcs9dNSUbTXVDKgHYRQPCWJE6bYS7SrSvG28AvHPi1hSb7q5gWYcHnVfovK7",
  "key1": "3eVH2G9yDhBmEgcrHwyiMazPWRgGMNdgdxqWJs7QqVYcX4f1GRCSBnLzvtJh4BvpXxgkikREJ3Byjcs1a1jvGx2S",
  "key2": "d6RDKqhUrMXJdR1gm55M57Ff4bictHfo5Ej445wjRQt66y73T9YCN9jAu8oAKqQJxqYoX29BVAj8gT8BieXKYsE",
  "key3": "2ovbtd794bx5iGHx8bZtT695cayHpSkfQBRAZYeyHCfaidWk11MRq4wCbpnc44Sn1uuM4YdvsfJPwzDZNxrCU9ZZ",
  "key4": "5hQAxkwJKpWfihv7DgAnXNDkNNwSc9EPMJYb69LLhLLummyZhJ5WgC4Fhg12tshtPU4pcJNz5rUmT2zMrWZoe1ZK",
  "key5": "4XHk7TjSvr8h4VZspX6SRroZwoEGJEwvZPUV5HwPjiVD5thuJhr545Mo5RBhNvcmVdD7a1LvrmXcdreYH9kqsNFn",
  "key6": "21rBYNENuuqwEoVFuHMwnxvxMdXjQ7355Dkn5ZAa2sKuLZmZ5zARCxJmSZWLLxNKzrKV19Qggxo1SGJ1JqjgcYPz",
  "key7": "3hSWC7bNxG7aHRCaqfRuMoUGibMjuUTjMTqL1PaEvsvgAPPxP3yXmx22BETa98q3qhfzAuhygcCwTjyitT256u1W",
  "key8": "5iffrB3oWGdr3Tyga66qikDQUMGWd6W2NkwCrvqyR7omY9wW4SoZoAsUFzKesVGqzEn9WaAEm3syNokJm7kWRRWR",
  "key9": "idvsMdxEujzXdCJUdW4gDBxGgHYTnLsxJLGD33PLsEhJvLQ4gLt5LUtHwbBEteQqxHWFoKfMqVQeoD1nD1wiaqq",
  "key10": "3Y5RskjdLgzDYSDG7nTo8TAtVHrF2Aht8fWK3H9MG1YteoiYy61rfvgxrsyvyaK4qLrB81NkyWqcoTzS8JutRSRh",
  "key11": "4S2BWzmkVYBvKkyJV8JTxiGBv3ktjSJH7qAhaEQTYpEduF8RTmFijYw86ybAigTGL2ZsTC8FY7rB6SepErTd1gZd",
  "key12": "4vwcwCxDpbMjUGkXf9BnjFnnSFqs7xZodN3TEZY4aUxyeHKA9i7BNQEotY8Fin1BzP6aBsZcF4wGEJr5UXWposyE",
  "key13": "3RnZkce1BpX8mpyjwjA6Ujr2tgE8tPhQB36MJt7E9ha6j8B3jirrwDfXbTMpegSUebuJoJ4DQ2WDpB8nN23BHTYn",
  "key14": "2myPGAM7h8WK2L1hsXP5WNnJ47hZskcmGMdrAiRhubKjh7QiiSWETqPTWUasqnCgqMGoSfQV5Edp72GFwhPcCUzU",
  "key15": "5ysC8W2T69khW2xaUsgxv4AbBn6h2b31zv7xTyxidBfSxuKaAoYq8n1RXwwVeu94UhQ7a4ypFCM59ybN4hKnHb7y",
  "key16": "4iyv2UVcX3bL3rr4eDsD6SUyFdrM7AUWixtpR3zojb1QdmG9vDrTXAUvQ1JqDAxcDmRuXcDbB6fp8rK2FJ7bUWi1",
  "key17": "3EvnXEzs5LVLBuRmVAjgEBd5MQzgRt6Ybh3SWoSXFMEEyxZ4uTb19jcRWGTYsYaoLhsh6vihsJnYHvyuC8fmMr3F",
  "key18": "2AN8bDcDeiZqakVP3WUzUyYLfq6j6oGuHy1jhtotV4fftJfnt4nwEDvSpuPXetvQRdNUSXxQc2gDYJcUegpvSC85",
  "key19": "38Cnc4q9uR8Bt426zKSoFJKvCeko7LW8b7PKZ5nxJAaoxdQiLRk1TXte3kbpnmT1mLbtF3afz6o58o2PsQBjpaG8",
  "key20": "5LM2NhPmGopsLWzhjFdLTQwm66ZuiUupEf8Fv9VV553zXzGtL9ePUF2NyK3zTnYub4dg4EyZtZw76xtcehT2ecBE",
  "key21": "3MWngeWZpG4SMCrTt4MLojmD9bJt2ApbMBpw9LHYWGRufPXWHaJZEHEa9vPaAwwwV6bg5koRtinrLpcZzDEtMiFi",
  "key22": "r6ou6yMZeJh8wswjWWK8pMpZFLXhG5tP7W8o7W7c6qbGqqCcLys8zrDv1PBovpWsbJbL33bJz3c6hg62EVL93m1",
  "key23": "5srRrCJrB6WbqyTxqVp57QKMWgjsyFTk2AZWt6JYDd3NHCEarbm3yvFvxCSx6md5NtUKN42CLWS8T3m3FyDUQ6qG",
  "key24": "3xwLy4ZJhmVGCUBnjLEdQcT4pxqY8gLX6YETEH7WyDR8yDSfuTUev72uyzTWVn9iiDzCiwK8eYZNaBmbdhhEup47",
  "key25": "2Q2RLUi2S4coetPEbr3d2XwGVapGYDqFHn75PrderG4A17jqKxuDzbKh35Pp36eEcUHRmx6SGSrHRhHJSUBi2e6B",
  "key26": "3c6ioyYCruaBuWxBWjTn5pX9rKawAFCBwzEKDo4uE5KwM5ck1a6A9Twbe8t2AnTRAbxiZpLV71a6opht21NSLgz8",
  "key27": "3p9z9S644PzTUcDsyLSZxtm9vKoBQBu7zkoDuQjgY6162FJfoyhD7Pmy5J6BEGt7Jkbp5HPpbLDJFPYN7FmLx2rS",
  "key28": "22nyXQWcKFiXGkDfhCjkkre1w9TgPu8BDcwHgx8ib4AcuSStNR8YHHnGAwpDyZiZWyYtbJKb1RyVe4g8kCgBRP7B"
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
