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
    "51wGu2BaPuMeiDDo9Jhveppx9q7Sep6MdWk61hRQ9YAEUShSfejdnmsagnvFMsZXPN4btu9ipkFu2xyZbyEV4u9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nfhm19M4fvap1fYf8K4bpbZXpKkYWLMRkDztJGBrXpahnxjUju8RUgCntLk5xHjjQ7X6RLo92DTYf5g9pPD7sSz",
  "key1": "3E5F7epvpSSG572T2bJRKwjGwYxufK6rNVaqH6ZFPsSWCMvCifmpbixDKF6AWwR33Fr1cdCzZHDXZ4dVbDgskKJs",
  "key2": "2GYKN32rgQDfFuUvsdmgcwEcDZh6ssxBzf3KxzSdSg16xfSNUXBJuAyzUFrEhfJvus9yv6vrR6iLNEGhq5JXNG1C",
  "key3": "2V4Z9v6BSEjWjSAFzA5buVjr3KsneAySSWQ1tyFd7nZvMb9RV8e2sukcK22ZWC2HfF1rHdECuT7pAuwTuDJVoD9i",
  "key4": "2eoUBrMevrTn6tSr9XQ66trYdeGMoNvkHJiCP2dNHfMBVryV7fCdnriQrGZf4ZBFrTV6cyLSGP6CbGHTtEyMJzCL",
  "key5": "376zS6KH7iYTPaz32AFKuSpbt9xPPjfXJNXmXSafb3xZ44C2avj2EJdxT6StNwnKNU8yzrQaBDKcZj8UCF2J2gcR",
  "key6": "5m5whrWgrydjf8cyS5Svz9xAwDRKFGfnwSgJqdCCqwPvMcmsiKvuZGDW1mXqatC4jEHXauPbcgH8D5tdMqyz46cD",
  "key7": "SeHZPZPdDkNQECZNFiBFGXUiGLBr9ToHPfxrSRVH4MJnqXRgfpnrJVx6UJtuwzSevB29DHgn9t7tA8KqLHUoKPf",
  "key8": "55dRGsyYhcjiVSUUaPUfKNB3bNGW5wdUghrZ2siEGGYAdAoN5DfheTJEbYxMcZwznCJeH3MVddng1CuZE7Z6LhVM",
  "key9": "A4uoxEhcxyxecTe4ym6stBoRJMfUfPTG4QKUJX5YJAc85xXrvKfGRgTrHvfCPVMkHie4p6HdQ9MCPZG6pKP7kFt",
  "key10": "51L51VSUSGo9mBfSh7HSGcZccqTZyCGVbpKrtkb6fDRUyJadQRyNwNg1SQ7N3DVkrzVbz6zAgy3jUFVLNbMfTtjZ",
  "key11": "4q2Wb34cgDjSNAAj7wydTxyPzpCEpi1fBCvVFdepiUYpEAeAAz5o4aNjRrU5cSxCzu7tJtJeMYnXxQLyWkDr3EPb",
  "key12": "4aZu38wESvVENYoJ8atpUe3Kt1mkeSkPLoTfJEGKVzDVDbEfJsUqRHfiKdfEmsNHxhwo1FRaqamiFRGnRmKegWku",
  "key13": "2QxcPS23fWUbVXSyo5cqk5m96raapi51EVoeTMXNgjmuGMqew3HfAt6BWrZobo6URaPk2KctMmPBsQj1Gt5f5YXV",
  "key14": "2AepUZ2GcFqeviTW9uxmuqh5Qrh19kdEJndSKe4J6vFon3QYJKzu3mRDti61dU9HTRGrDGw5pnjafD4Win4RSfEH",
  "key15": "61RkCHufACS7FyVcZKxMd8WvNP9aRKH5J5KSPPDMMq6bP6DmALCLqrUR58jCZf1B6MBtzyK3Gso3bFxoQY61bjki",
  "key16": "4EtHo465qXYpAZxz1scQdSAW2qiPkWTZqzEtTFBtGNpsh71RbTHqtsgJnaBEbRDjmjFv2QPRCc624M9FMK2tpvRk",
  "key17": "2Z5hzxxjX2fzfMk1w7GcNp5LknEBSHvizjub18WnDZ27KqZTVMoXuhwPjrhnfUv8s2YMcVKcwHnRTmjV7DcS79a7",
  "key18": "3XS2fEytccunR5CrewfNtJCTHtcVr1tGH34h3jqBp1iNk6FwN6uby4AswXFJn11CYvNU3nk8ZcXfWqFnGdLdHzTL",
  "key19": "AG8SqZoukVgykU63KSPD31v8JDsuBUjVanavwQ4sWq2ZrxckRXrmc9kQpyJPKCcLevLn4hqxf4hgVG2HFqmgZH3",
  "key20": "3n2SvTo9UEukdSFvve1CZ2QNMqnG4vZYMVo1V7231HfUPNMvdGjzMzn75X4SQBxGSYepKZwo65EZApTTHBgJj5mJ",
  "key21": "4DjzikBpV9M9npwPdveSoZkcVFdBq1FkX2yNASYeHsrPZ6emdLQ1vDK5YvoPtCZncRPMhvE8WcuYz7pokg5aroFc",
  "key22": "4Z4vMm7NmFzZvEBtRxTLtv6DjYFfTkZCpDwubVxMYSuk6yyWyszGZRppRietQN7xmA1UyqDELPZwdPT2bSTME4Hy",
  "key23": "3tfT6c529vJRVfKMWiiBwf1Gmsc3xPDpkmXnNCUfna6N3UnYdtVkDAEiuxLdrTHsdN3WMNcwCumnKhExttYemLSq",
  "key24": "k5a7q5n8aBfBTgiBQxGCdJ3mpkmjBf57HNEtEUKHPvdiVCPv48W4aACyXxHyY4XHvkh5NKC7vJ2vagNbqVA6ohP",
  "key25": "5TH971DEn4tsPLcqi1WTXgjNvEaUe3wSeYzBU6masUG8Fs9dqihXvskxEsRinjrTg1ZAAXF6HoTLdg9a2Xv1JUsY"
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
