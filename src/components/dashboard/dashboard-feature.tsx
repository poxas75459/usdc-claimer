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
    "62ty4MAXf1EQAQVfjHz3u7ew2PqjL7JsmK1Sj6VBxPsbXuHqnnGxDSUTkkieXvH3BVbu4PzXyQ4NcGa7EiQUfnwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZ2aqsLLUteptqmPChsVQHQ6WBm2Npf3fi7tajRFSjr7cmerZnuUMhRSmeGA5rbTYF1NgJkp2XiTcayQnoTnWdS",
  "key1": "2pN8C7XoMKpFUvCZdLnKtZS8Z1x9viUqogkjecBoWEUHpxW1nnViZw2UE7oQQScDxQUavx3PsmGkLyU12SGDtSsj",
  "key2": "q9rax3yTauo6YgZxaZTPDx11SxpEKEkLSPHX4Nct7nvykVHbg3vsXEBeY9ACAEW2XYSyR5G4a8eSPK2HHR9tNJK",
  "key3": "5kWGiJXfMgN1Y514YajQ7cW43uVizMQE5fAwFNybev1RLGZwTbH38K91toyE6HZwVvpcFhuzNUx8tePQ84pKgPG5",
  "key4": "3JfqqtKLQvZQQ9JWYJZsHU5UoSWqC7K5sN3uD9Ym53jzYWtkfcHSbbvXRxBZqwQcb76F8dNCiUTYgZbwFzGjqYuK",
  "key5": "576LqfWqg3s9cRi5BqAtP8ynhiyxhkevTfqoGPyvVJyg8xzKjo6Hor8DFDzk6usQG7aXXKFukbJjaetV9bC5UJGb",
  "key6": "5ierNk4BUC1n4yVMBRAFSwmBGgnBjvQ1k4829azwp2zynFALgmDbCDxRqm6nSqVGs9ihCBoy2bRRJfYCMKbf5tDL",
  "key7": "E22GQvvHSzqSUQysZTbQFrFkDeoLp94TxRGDvJf5c7HQ9AdoyVySNpZFeZjeQdsACinJKc3Gh4FDynu1ZtDhyE6",
  "key8": "3CALJRYkQSsYb89irkwNrUa1y8iNkWwmyAGRGrWmQ2c4XnBaWjAWoLApW33jrfXWU4e7oFePHMgXh3bhe9pizQhS",
  "key9": "4WPdTPxfJTfmP1PRQJVDdxinJgs3dWJwupVVgZdEYfRGVtEc87NU23e2AXgRy7gLdMUcaksirJ48GQhRCpNhVHNU",
  "key10": "64HDAxByQ1tXU8Dymm1TdZWmT9efcqz4BsUNyYFUMQmzAPsfmgWzYmtYbsHwJZWCpyGmsVpydKSSnKE6Dhp4NssW",
  "key11": "294h3TosWLsU73Rgw5zaEtiN3nHTLGcaDQUMDHSMWQttjbR1sy6Gt4qm926a1XWPaU9Vn7snJEbZ9i8SbRfrcdHC",
  "key12": "2gHZFpgohXMPEEiQPMQU8dzJLpXRQJGCQmfQsMEc29v3EUG2Go1z8UQwCJfAXg7pZkpPhbkdxvwjD53jG7dKxKRe",
  "key13": "5LUQnw4adMqXFBf5WxbiAYQ7gckW7TDmxjJNdad7WAx3BzhVAHVPTrci31WXjBrETu1jtQarTgp9Phm43JVDBdGC",
  "key14": "4pEkyRj8oRtbaDYCW6TxovyR2RLcEaCBDzJ3N96PpVvGr42DMfmAsNTcfowtLMwZnfSSw7Fj49RhZFCLjbmMjywH",
  "key15": "5NmEDTECTtF8ZU7927yrwZWVe5uvcP73rF2H51utwXzxtezNwK2guH5ZiRixVV5us4WWxVhaTnFgC4Lo9tzqzUeH",
  "key16": "2z8FgfpvCTZVEXCFYZTMTd54Zgw7m8cp7mZ5cQ2hqsGTSkE54UMPG66n83us99PRUDJ2Tg2aCjwLXZf6dDpZUgC",
  "key17": "2PY4b225yzFJP8kjgRyDGeV3CmihqmDpPXA1LdLzDajohcAkndY8F1DZprnVUfpKmwQeH8Y56H6GxA7H7EzCrLGq",
  "key18": "2XCjrRWJY5kocfVeAk5s8FYnvv5ztQD3oNLZeTT5k9qbyfS82ehkgxug6dQqLkmKnR7saKGqJbZZ8AzTFw6NuwxC",
  "key19": "629xWfPV4wdVMri9xL9rQADEUEG4yfv18PyvYWPiEoXBnp55PPiSTBaHdP2EvfBeiRmQgESReYjmkRAhbrRbAKH5",
  "key20": "5BwbrWvJU7CL3ZYnWLPBhVEsLq3vHAzwXDRuwiXKhR7HTf3HhYJUrYTTk3QDVdiJLErqraSogUfLhKgo69nyKjrQ",
  "key21": "5Xkng282AjGhbETWh5dqbCa4ZRjvKhLxC29T1JaPjrZY89EqabN7x7q1Vx4VpRjMDbHHg1asrLcobWQP7h4qFhw9",
  "key22": "4WvGVdRaRbhfPDt7xwizaSxz1fu2h3Pr79zpt7czKSuDMmeEZcrqEHZnfGzGAZdsJiW2AgsdwZXfECYj9H2uUF6R",
  "key23": "3uAjNwM2yvmbZGDFVdo7P3SdjSk3BPihBrj9RsCa7TeSBktsgz8tktg6jWAuGEWGhaMnKwXxk5qufJ8N28zwiczV",
  "key24": "4iVGPUozU1hPpofu9WhShAmokcEKJhBwvQor3wxaKATQQhKLTkxHui5iRffK2tze1AJd3QmFtKgwhsX6um11Soh3",
  "key25": "5h15MmqhSq1DpbECpbWGT74LcadDyx3TcyvxkZyqutboAdoauB6RUKxXGrKoUWGW3PzVC4gcXykxpCXbqcfvQVpp",
  "key26": "3TcEkZismaj6Sq87Q5SDME4SCjB7XGXaKPtR7BNY23EanTo9WgwKiDeFuqicJYsdAJa2jykTwbRmNP4rhMjhs5EX"
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
