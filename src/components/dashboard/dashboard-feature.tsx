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
    "4ZefW1FZBPbzEvMquo3bVTLwPH7pTKLPsQbE6dcxRBkgfgbcUuetQp2nUJRy5tPDhQndCAp6T1JTFSnExXh3Mqq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XuDXj7RLSvQMGCBmXtVmkCg22a2ENthYgMAfrVdkfr8X5iBRh7nLkT7Lv8MWZJSrtr7QXZ8yVWRHh8gwPxfiowY",
  "key1": "57aofmRcG9sJbUgPC9BtL1S8VPESF9v4Q1MYsrEeNzNMHSijR8d1tKj4D3pJgYk8ncwiA7zMj9bNwjk7fDSReRoN",
  "key2": "7mEuEeXFAYWp6AWQ3zF9ZAhL5Qbw7Ktqq3T8epJn181jS7Vg4Sj31mCR1AuZVrxgxKvx5xGu4dt4C4J9FBBZC6a",
  "key3": "5J3EJ6Du5UGnSoN1CPtcCRihwodUaxcgNxLT9X87vCF878EffawF95wseDoALowgMdo2Vrt2ZJ3mYwwg77hQZzTx",
  "key4": "24TPbLtSEzaM61TZcQKRPcXZh5mRw5vwsSPvTpbv6MRLDVsZVmkbhEEexfFx3bHfk2Qgku31RrJ3AoJcHuWjcTc8",
  "key5": "3qNT5Po4oi4Bja26x657GAZ2NZ2XzarHr672SvDy9qznTaefBgY8E1awu4yfJZSFDy3yhJAnyF1uS4Fa3og8CETC",
  "key6": "219JJyF6GtGcUVE5zwF8w5c8egSDN96ZgzecexDeaDcKbFYCCg6kaxczt1pzZZ5M7SvxDv39umcZoxWYTXYTBBfH",
  "key7": "o2osQ9GwsRnfGBL7fF3cowFjpKL4kVVU5AXMzqdQDAm6DibzaF1csAcSsasrxKY9gRmrnHdArZ88vs1Jwc6EJqj",
  "key8": "3XB4gpG7u941mA3kcxygYtYAULTrXjTKwGDV9iTfo6YsD8RbEa6ZRatvCzWYckFwKgPvxCZ9WDMnzEXaai8byYBc",
  "key9": "5VNu6BP8JdAPUdNrxzykhdVe8YUvKKRg74qRNwkSpppUPFxEYjDMYAFgywAbxXjDxniCL33W3eAESc5MaRwZA6N6",
  "key10": "5oLBdaNEweXTj2FMw17cR4Lzz1kKGtGRZbwRALUJYsm4utvAyMbSkvindj8gaDtpVT5nrg7dK8yrLunMHmp9AzJe",
  "key11": "kGiFQRCN8Ge8pjfbymFv7N1WMA72sceV9KTQ8H83QksQ2JBajwRf4fBST1eavgMQE1v2U2MwbNNENRjQYmsbaQ5",
  "key12": "49BMmXoqoeHXvzfP2CkbuvQYUnktXCsKYfiWUu8364AdQwWHo555J9nk2ysDZXk56Ed8KLRzgpSPMa3PvHuRmxzP",
  "key13": "xhtMeDG7zr8rsMTB3dKeEi5ToVLbLdC461hNoAzs4fv13qCeyG5kCEU1ygzTHum7BAgC5YgmLjvPm57cCJh2fto",
  "key14": "5JroLxdnKZSXbabDE4mynRPtfnoCJoVyygekDD4WwRXo8vAYdWyGnYkNFhSD3Ue6qgcmXFhQYJfZnzMwh9q6LDw9",
  "key15": "2Yin9YK47BM4HijkU12bDg1hM8PLqec47HF2x8ZLkPtRw2o23zUKAvHTMyvFV8PstcyaToDXciSSFkG9oBtTdoBJ",
  "key16": "jVPw8E4qVxXHMKbDpo1Co9VBrtTSxeVETVKYXRVmS8YxGukTGuCiHB1oY1eKEUMV7dw3cRr1sWqGu3PdpZCyqsr",
  "key17": "66mp27Zufrw8mt6MDBiJCfJ29RCEdGbDHHyF88392u9VyvzbCptJCMoRhCEJ1TzVDFRKdja2vVn2N6TsfTjQgnJh",
  "key18": "e4g8YVhaFzhYqSE117XtWbDGMUVdwj44E7auRiW3fM5gm3B3ANfZvXViT56mSwj3cwsUTLKPML1NT66xu8M2vyC",
  "key19": "2jpLMhFxhGQXJ9p3qgi1rv3KKKsrfNyqSFThY6sdCmF4PgQwA4fY3H45q2anVzfDJtj22jVdiKXRXM7QLCENEkTi",
  "key20": "5VFne8ieEf8q5gYMzzUx5kNN4DK12XtFGjCfzwnYxfbKngRUSMCF5V7hALRWS96Xh3Wd41FnY27pEnDLNwhNdn1",
  "key21": "4N42qzjazaNDaKbjQxgifP5rypU2uAT6cnuHjAjV6fAQLCmdeSUZZ9TCqmhsURQkJXX1LRye586Ei3Abxoc8TmMj",
  "key22": "2F6rMT2DmqZdXW8y9NPzzdRTAzKuVu3ytTgwiSJNfQkSWh7GTrfyV4ipFsZzcMNustYwwxK1iiFj7xHPhC2BsyDR",
  "key23": "4znZ8zj2kUZtesnn7PUzKETrAVEuFYt7zy697DVCo1T2c8gZYMd1QbP7rn7qAoGu9oBEU9UCE6XSzK75SnJ7bhQs",
  "key24": "2gRJZMJKM1ND9qwCEwFfPTQGVJEmz8e6Cxy85xNNrrWC9cHFY9XvTQ18SJ8Ho8Mh2bWPCdTDCwqsoKbWqZbuqDfQ",
  "key25": "4dZYn8Asip6q5htwkbDMCSmLZ1c8oiVvEtgXCHRUqdJaLmuk2wcCNYUTv2aHyewdV4VZuw1czcjLUHWaFJVEZkgk",
  "key26": "4s1PpVmFr5yXLwS2qnpca1GrnUyfZLq4gHpfyYNXN6QSu5PtwqTHPMsHUEGK61ZXP3p3pKmTF3ibSsacr6NPfc8",
  "key27": "4BAa1uv5GWKSPjUnjMdULjT5cgxGdNGo4d13w12fH9kvCk2AvRavEYWeNxoAJD1Y5XAPaNuTJLf2iinzVfseX3V9",
  "key28": "2JQTExDuh5Z2pmdVSgtUabsi3BvYEFSChrrZFnExZahiTZeoWuoZw1NnwwN3zmYFsRdSYNKfnvFiS9UZcriomFL7",
  "key29": "5et1YG4gKWeoP8jRQhna1J1FpTkKnotTsV5QYvt3W57HfhzLcCMooECjgWxwfqBdjYur6ugRPZoUoVB32hB92Jqp",
  "key30": "4Tf7MypAVkEBXCBChGQEWq9LG8wKKUH8dDxUGee3F9fdzgVb9TRXqcKFZXjFT5oDoR28XBtRXvPMap2eMbT1NWd3",
  "key31": "2LkTa8AmYwfHwmtXVv1D9jPpwFRzgRjRhmcgBRexwyCPmAvsNu2kzuKn3CiXcK4znWMmiyGmdgM6fS8yWYPAR2nv"
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
