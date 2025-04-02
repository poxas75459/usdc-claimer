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
    "26zTj69AeEWfhR1ZhyZiZJ5QBJ7Gk3XrkUetCjTvimbfdiVUREensDo1tRhdHWkAr6Dt66NEaQos6RVLRbkWt9DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBgS2cUtcRvMXY2WceDXnGAsALzXxLQrvc81TjWKLnQcZqnfS8PAFuSb8LeR94RSHgdHbpvTaco61BbVEqvCZ5",
  "key1": "2bST2wMyMVgk5NwuoSxgMHmu9es83jPNpagqQKRs7wNMe3ZKzRuZjPo88sB3YeNwuwYAoN158TMZeXXmpgViMnjF",
  "key2": "3n6XbEKHoEx8TR5GwGJv8fAUfH6Sm9CDt5gaUHtDauXRpjuvenUJTCLUaunKQP6Eg9KABBBQkt5Vyt8E2gZG3wrS",
  "key3": "HoUxysEzcYn28i9k6g4NnWT6B9RKPEV9U4p6Zz64oJdRYsZeWMXo5WXWVSSiqLjXW44eH1syFRq2oqhGUNKYs2g",
  "key4": "2qcsxLFjhs5mkoPuXNujZCdor7QYx1ypGRCosYwwLDqg7z5y5s7r7scmRnGYhG7wbGC9hgjd1aeAQLsaHziPCW3Y",
  "key5": "4CxjshbeYBHhZ6aTq7gw49NMmrvug5G4jMEhXrBHUCwa3hjBu8zMzpq9zKSgkJkw1odKBiE5Ag4JrHQxda4eRyGA",
  "key6": "4yxDEdt2UnE54M67VvDfNQpVuNbqxwuZa5kGgjwV5uGUuUziZ8BDsZcHN1LSRBtCuufvUsnKcPjvZo98TmK4KAiL",
  "key7": "51KVbeNykSuwNVMWgR8MjYk4b6Hc2VzfGstnZcpMCRnocceuGBL4PsScAbe99Te9iXkzhKDnoj3UPEcWFbRe3ass",
  "key8": "3aTMsx93tkF3CPbhvgc5cRjkn2Z7XdAxFW6jTtZB8EgSaWZKZY3L641LbqmaTiWJB4vJAzwT1a2j9QWw2BjmqTPT",
  "key9": "53Tt7MAqk717GBnfBeCLAWEnF2T993VbDLprPRa2GLMkpLbpQoKgR4fkRLqbFoz2ijm62s9EooC8BKvk1woLiju3",
  "key10": "4LnG9ZeSE3w57yMv5SZE6Jenx5D9ZhHEQBiRuKuQcV4DUksipU1Ey1tYbNVGqNtLh3grMKWmZjm4iyYDm3dPgMhJ",
  "key11": "3S8CF7iLKuJxivaaWygXGdXEXzNjLpmZA4Y4CCfPgermStwZF2FzSmVj54wXr2g6GXZ2fw4VbCPBF1KAXQUUbFYx",
  "key12": "HH43duEpqA3PTb81ZpVu7XA3X4i8KTgcNcQGNvh1tsoJtYAKufVh3Djk3uJrcv8ee5QPvvexbdVhDgVa4y8iNHj",
  "key13": "PTehuRYnUp3RgHD8PmUXW3D9iy2WENq2Laa19Gbz3r8u3Gbfr9ytWNxCuv1uRQGnb67vkBy2NuuMtoC6YP9Ghbh",
  "key14": "2xLHuNaE36aNLoXUGgTPTRVGwFi8DgZQkJaWvGKX6Nemi2L35RDkM89cwV9Lvm3GbabAHwauo1GL4hq28qPEgzti",
  "key15": "645NZ18JWLiMR8RBKP1XSvRteg5rKoiQG8vgoWYEyZUMyHuE9XubYzi43Gj2TdMmZEdtZTcrH8bw2jrPJYfherZv",
  "key16": "49VE5SYsGjKfZgEUV4mLB23T9jZrfpDCCFMcqk4iKzcMSNaNteVovDe8XuBBeTSqV9JHsNwWJJ57xmuo2sM3sqtb",
  "key17": "5rk1biyCegmAWiVrn24ydyqFhVPQRmhY563nRqmcvAp61aKB6jf7JnWMkiaVCzHH9p2fCKH7SuXB8zD1GTDWmPwa",
  "key18": "3siGU166HWZ39YMQarJ8QonontViBs7cbwNezLKq4bwKshxrmtiHy9oi5JEwc6gMA1u4voiFjn12UHmoEFi7nQ4U",
  "key19": "4F7R5eBhtMLSNB3HJFPREfZmLbUQrczmuKNLFEdKpqDM2bjjg2k9nWLeFPwpKxGktHPfzvEgJMiCUCQi5unwNNu8",
  "key20": "5BczH79G1wnVzeXxD1omvQs3heV9a23wUWMnsa8daodyRUfb9tELhpUo24jVTorSr17A24hoiEow18VJ1E3RePtq",
  "key21": "4cPMMXtEEBhCiouWEHzTHMh5vbXDtR7HMaCaXZquXYu6yu6avt5a6nFYSpBJT21qfhFuXogqS5XikA5GPPmBFYAD",
  "key22": "9ULywmA4NLnqzHdub3RoUSupi53mTtbmYghaDHhqdeWWHarTHxgG9wTFvUNKMWEaMk1GzHRzsSd9fBokvrQS6zr",
  "key23": "5vjL8ysGPk6A4YDWAjeXWKj9gcmp2AeeyFCV1PXSrB6wmwL2DkbTHT52d6CaxjnG2mLkyXPuzjHQTEaYkVECwrYA",
  "key24": "E4Xse1f1Rcs7VhHUFPkPD7jq5a6frEZJQqDB2LEqN8n5yNhwYXpQPBKC79BQp6UBopW4LJLtz1928NHAY2KBDwV",
  "key25": "39yVmaS2FWh6dNuMzm1d4u3TGgCUT9DH6AdKTeFcHNNTzjZ3fJzGmsYiNF7ouoUW4voyQnYUYSuES5TX9pqim13a"
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
