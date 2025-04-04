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
    "2BfqkigsAWtLWizEyzouwzTn64JaXuofUZb77KwQGXXLAebkVojRReTjgnrZZxTHWcGAamdhRtH4J3E39HboxPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iCtDwGfXfGyjiVHtJosPuajcL48xbtFDzrtk2H3fC7V1WDDmkguZ1C2hu6M4cQGVdhBwxpRbzjsBJxjxjZhdjX4",
  "key1": "51pA9kNeSfLCPdGk4TDXGPsayEFXzH7X6R2jtVvJob73GGgUAuJKom8dMgz6cySMXwnCHbCRbn9ThKaTuD4QmNRn",
  "key2": "4cnjwqLibiK5PgH6BMiDvTJvugKThDJjAZWucJMLEEX75Pnc65qowxXdwy47kbo9wqhazdgM3scPJ1QXT9ZgavkE",
  "key3": "54ncsbdD4ZNK7R7m4LVyKYrhe9oCT9LEzCkaT9q5LVh66Aom6pMCbuTALtMQuKQDQo4VP2vajn8KF6amkR9KpR9n",
  "key4": "PdZxxc1DPhyeGFt4kDfH4NYSdmDyBjgNyuDDtHSnXdxWcop8sctkLg8xdmXv7B2nW3TiJre3xvdQs1xSxGpsrj3",
  "key5": "KjEo38ABuCVvdhPiLB4m4VEoTzFH7QBDDGTtNHjib5sojiPh1Q8P1DpL33EHcDc8WoDKGgy8nqQtfNdbp3AoLyL",
  "key6": "fJmMcJQnowFTCyjPXf5NLJSV3G61AAMuwQGS9YC7vVeYnJ23QJkdyRB7aPWDjqqETWKnqQHmxyQFL3ex8vC1ToY",
  "key7": "4Ypz1T3mc1BJpzQhkCxgx1c982NwVHy3Lkp2QdScN51qRZKWdeu9tHMdMP5WDcbcSNvZaK4zbHqcFwm8BPbYbnC9",
  "key8": "3mLxKbTHCsMzx15NJ6tSCpPzV5KgEwvqrbf2tpit2wEAnFw8h3UPuFXpc91x636HYn8Go4Bp9E8PvbxKXNYULjSQ",
  "key9": "2YHmvaDWcWKP7FKiBUJnApffEbUETMFj6N16sm3xEWfXLmUbSx96QxziaJodTsPUZwG52TQ67u1JvssVaVzKzxvn",
  "key10": "ia4oUsCLS1FUhWT1yvPtemiGHbXQ4WGJQre9skFuXZsLSTmK5GUzdU9ynFQeSvBsatVbnkjMBLBimKujzoQCeRw",
  "key11": "Hhj3t6yM9C7YJCyf52pPmM88nmiy1ZA87WSXpT43cCZX8JvhQWhT4vRM77fo3tDRNWeMQH86TjhtnLe4hg43R4V",
  "key12": "3ukHMLBXRTjYs3H35Me87rQtZ6gCwt5dY76E16Hu5etT4tXsR6A1rMtfD6qCPVjNxhtieU9vArVWCXLnyi48ksrf",
  "key13": "4drsp52pEEoaKmMdrQGyxZbNp6N9jLUaAr4RSi9TbHuTByUYCrf2haQnVPVvGaMhJkmLQMAVKg32FN5Wy2CGa8f7",
  "key14": "rrFUAGyHymNFi8YJWAszwatyRTEBfWqYxhnesgaC1BQQ3pyKuVXs25JAV9ag1Vd2QnLvBVfHVM9QHUu3JSEUAga",
  "key15": "4i6wghdjoZW4h9uvW2F7P8zjBTvFpiGvmiaE7iF8EyzVTuHS5SabDCdNGEHQFtiULaT1E7pwTH1twnNwEwt7ByVu",
  "key16": "3Mvw5PYvRuARJs2cxCp16u97hv7cZP4ZmTbKD3EAn56Wgmf8vJV1SKqmHP7UiXXq1T6Wfk9ZJ9cQFRVGm4E16T26",
  "key17": "3vHWVt84gieZMJxMHDanRX95MGqXGxt48FCgHSdSRve8KfEeGK5BzvQPeA2peAhzH6cJSKL3Du8vSdBYRTFQMJ6S",
  "key18": "3wD6fezC7CgaV9d9hJSKJnTHqffpenuF69MxdPFPzB9nFF4iNaTJrcqEADH7ezxxFVUGL6WDV1q5BiRzkdERGkA3",
  "key19": "5tUY52etYxAevqFwvL2ui6cZQ4s8pbttZ8RHVH9VhqbzRLCdBs2X5cM8kEcVcPKEvsTwKyH3oqWdH3ywvBDnPCBb",
  "key20": "4DxNgQLXnhDt48Am4zc53PnVwWicQAgQG9ZmL9XfP9uBdQu17NqyZTEzhGiESU47q1jyxaoSQ7P3dk7Lp1tWqnRS",
  "key21": "3vsY6wJ22EpAqCBrHVAwPpcgrgcHeWVxeEYNSTGJSTFQPbYmnpzRPeif3thVGvengGwpVZb5eVG2k5PnR6wE8EAi",
  "key22": "5e78K7SAf24CSR8AccMfupMCcLfEdWjrs3Ah8zGf68vZcX9snkFhGAdncYYWrZSResiF27Gbodp3UqenFq2cdhgb",
  "key23": "3Wd6VqRB1o9RPEXtz4PynEU39jsFgTo6huTZmg6Spri5dwRwbJyh4qbtimPcBk32UNrNnCM6B9mGSLSPkH8fNWQd",
  "key24": "bEg231N3tYRJuL6JomWoUxjQkruKa6tMVzh7HX6ea2whYJLoZKdJurE69Mk7keV88kgnzxDeXvLYuj4BBw5Y39U"
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
