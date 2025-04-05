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
    "4NBAijHpDfJp6jRMbG62AR5STxLcxkFuBb6bRvXMobtDxpNMdtRBC6nwRZrHZ8PToieBpoKXgS56qVjcvB1eLeKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqUdSKfbBgx7wR8Ajr6T9ZDzMqXSa5nQ4LxfSZkvU6833NGeTxEg9VGxLN5xZDRFL8NUy6ZNeKi2TLS2FH64q74",
  "key1": "3CUmp9FAjiiVnkro9kNH689uyr5geDjk2k83Lp86MXtRiRKC1TDmByPExvoUDoTpJ8JmN9Z7Sbmp2Vcagd5dowAa",
  "key2": "3xGwprAJjZT9ofs4KZ2FGVxrptzunhF1CHzoXHTokgVWoPNtih7WAhbj5nPSHzx5XRNiGEvYhPUmB1nK3q4pnXT9",
  "key3": "3QStxrd79QF4ne3zYDG2wyu9jm1MabUETg78g7FxcaLmURkyFXiBmb269eCYeQL4cDpkTSGHSpbydCa3k7NtwuvF",
  "key4": "5KtwKozwwsJy4pcpL9u4rah2TiHy4JLJj6GZJgxBtZu4oQMwdgz6CEvTKNW5m5aP4yjLqouNSKFcXaHZ9xk7q73t",
  "key5": "FSuvBtPcBF3gWCxRgp3NEes79R6du645sDDJLUNUrxrPmdCbcZ8DvMzwokcSp1YXyuhbC6XuPDSyrijaiHAEpE2",
  "key6": "Un7UXtfpQHWRbhb9AW1uqcZZbAdsQDGxQeaVxDrgA4WE7JevCEWKFqxyLqf23tZ1ypWEAgLbGe3uocEY1V2gnGq",
  "key7": "pDdTC1X91rrGViGYKcTgLABqAiC9yTmWmjxL11HqTQiCwQNWz2y3cDt6u8M5zh2sc8MPDzRAA6GfRLcvgvpy46n",
  "key8": "EoSAhu7EALBGNTDxVFXvwq8pph9GEAUMcsqf4ZvtJaFrcZ6NZ2iXvNxbq6hQ3kWAkUmrpmkBzowUZvNSnQXxN45",
  "key9": "4ikWYS1XxaKpE3hL3tmn9KEX7c5ftqqvE5BktxMjtQhJkftUDRkvCEkQz63BM3ear1WsMDztrj9kPnnMCCtcJbho",
  "key10": "2S16fbnu2x8ses29SKiRX4vqsUJDsq8CoGw7Bb3F8P759cH3YrFHTqMLPhTM7n61LzeJwDFEF7yZL1KugR1APLRj",
  "key11": "2eJMsM8Crg2f27zuGVpDD9KAhX8AG41fDZUHMnfrxUHpnRjst1cZJCvLChaFyZVb5aJGwYhCtMYkYF7Cnbkcu3Z8",
  "key12": "3pfgwKEzdBgx7QpwEju6YRDV6xHoQYfA2LM8UhZjqW3yTMTQSf8JNmDNNUz7B7cWxwqGoTCmknuprhJ2Ewt66WdS",
  "key13": "2UFoP8351QFDRCWiGWiWf9pHKwHEDhRHpE53jKAqxmcANCiHL6DZt7fAekoLAc2gKNJTW9LhzFXYt8yQDBvw3wd9",
  "key14": "iy81KHRyLSPSiihhjQhhrq2Pfijz612xeEuohwYVtRNqPit4TQCYSQykKX3n6FNex3BY1gA7XXuyyDCy9QDDNM7",
  "key15": "2gjBeMd6qVfuffSGqwMSSJu3VHiarJ1TbX2b2WTed2mzzCutASPqT73S8z9aXQ7Cmb55pPasfM49C1TzJLJErHG2",
  "key16": "5yrfn1tCN3BkupwQn4UF1g9u54s5wa3N993NZfFAHVxFvxEUfgWo17Ho395ULL5Zj3HAZVNdFAVss6jNx758aj4q",
  "key17": "28AQtxr6bxajzmrWFUvhVvSqUkfQydvQ17RxGAL1Dnkf3srifx27iiyTJRshXM73v5kNMKxajZmnyUihUf9d24Sd",
  "key18": "2KTbmH2QJ6YjVHrikXJaBH5p8MtRn4yMs5Jbia1LxEfKe2zuZ8Emky1YzPvK29prC1TMkvot4qAyQH2stbp4FoVP",
  "key19": "2rb7SXine6SgNeK18T1EUcmfPMK1M9shhdo16qRFape7m8PfhDKiA8gKrzyasgyatEvDrmGssn8temM53HB4v28e",
  "key20": "58cCkA84DFQtB1dASPXyajEDe5DCkRPuKgAcgSSjRrJTowQGfGPQf8cnPZTkgNyLMBpoC4nmZnhqMMPGGnw5VFhF",
  "key21": "3q7p2F997CFiH1SYKQwhSobC3V7pxAAABrhh7r99afeMjYSB1MWFndmmdySh3DqrjZxrrPrUTan84mqa27j4Ezm9",
  "key22": "MTCjL61K4hig5dFiqfybSqjSvdT9gpJu8tFa1j7KRB6HqZW5cLUEhNksoeFtXhJbiHTxjdBZ7JXbJdwWRNgKjXp",
  "key23": "YHtCQ52gyKmzAMdHWi5j6NrYLLHbHBDoKvTUdpmQjiKj1FJRweU8nQYHppimBJZyjEJF38ASq5Ty8ZhPDrrcX9n",
  "key24": "4bC622o8HgLoGqiHFPwhnjpwyiCDDDDUXuM4HKnXQz2jHtMTEPrwY92NSgpU9Hmh4Pso6Y23GhmvuVrJv1N1TXWd",
  "key25": "5dhokEj6xk7aeSqFxb6iHFaAsHCKzieTgkL6XQKxjKUPjUomJj49q5F4i8eJEbPeLy8GZtU3iToeD45DHEZ1zeNc",
  "key26": "22xD1Ln9NXorp9pNCDWD8eDKrzoxYeKxaPeHvGWFZLfv7K6aesn4noVAiE4XWizw5L68qyZaUQmbqSZcdWQejyRZ",
  "key27": "3mdKa1AojNtQfqq8N2HCKScQ782f9PuHBNJWsZ8xCKWsBhJ7NsRjRZQ7PDuyjSp58F9ASkSFeUyQGVmim1vmyy3K",
  "key28": "5BxtEaMGbJnkBahHvhxxc6inCBPk6sgBguUTbucKXiz5fijGUwRbaG9DdQvc6guTSkEqvUVhVWQznEf221MPcUFa"
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
