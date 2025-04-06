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
    "FReBethRACkX9YpAYR8qbixicAbN8tcKtap6qifsdnbdzW9LRW2ESj6YXcuCW9MXbpbXE47bBAxW82KYEZivKoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561Nf86zhDjmPmu7e99ZenhJreEYZixWC4dztHeL5CCLNyU8KqYNa2sCKqxXSin3EksVvZsZnsXYEKS6NFwRjUKX",
  "key1": "3eoxYdE8cQKCgBs445yGEmFPQVC78pLYfMjr9CjgkdJQrrFSH4c13np3Qc8CAGfteK9VxiViiV84mF1ZUmpeMjwT",
  "key2": "4CovUwNVJj5o4YdV61xsE7jYoT8nakDc11HpXwnCbHy2ZT68BznsNF986H2ZLL2Wwx9ekf1ZP9ey7bTp2bChUeKL",
  "key3": "24C2WbMyHkjV3XzBhzXHtYF6eiohPHukfnDsBmmELxmNNUN6zE1Z2RkMpE3SdJoBp38n7Z9rZCe9nGZhtJPoETGe",
  "key4": "4agsRB3MfnMJHyFLE2oNXWAvdWr5Ma8pGJghEHnNSuGToQAxTHRHYVZtQqeV3c8hy1FEuFe8h7PczCSJJxwoZiVR",
  "key5": "2zZjvNxi9oAR9oiCvSi8Z2mkVMFQVu1qTu8QgFa2oNtTQcEDCsjeXBLHdNm3oBWsje9vKuzmtEa4jW3GNB2kQ6Rz",
  "key6": "65aYYgG24S78k6P57Qyp6TDG9rThmtmF5rd6YUbcs5QS5Wsp3yQT2hhTCKv5wmw6nxTRLNVe9G6z3rP4YC4np9fe",
  "key7": "vmGGJH4F5Wz1rHatvmMvddHAwUtKHyDGHhCA6QEhrNu8yv2AMip9gNthpoWnQnWXK2LbDoNY2Ht3CrTsR4sQF86",
  "key8": "JDYRGaMxvRUn5RYcUzu4N8MDcDBoodhG7EF4fR7EUJqcQAZFnYdBcW1XYE99fZ6qidYyqy4VPp3HoGRWN9DTSnP",
  "key9": "4aLjPPE5tcsXRAnwuhkrbbtfaYHvKPnJgpBo6TSGy3UDciWtYbFbfJ8yK1DQUuPW9PSHbB519zEvMs7QJhaKkpqw",
  "key10": "49QRpHQ1FDVkVtQD52223KVNs6SJeA1dJr4yMqu7voDH761qzjFYMXVERX1bsHwGkMCUtjFdbDCW52LwnJxRnQDo",
  "key11": "3PSHDQ3xVyDKd6taRVaRSqvbb9oFteFVDsFJn6vEtwqwVJ38uo3WnaszsnZZPFFDrXphemtom2mFvDNGy59UcB94",
  "key12": "fq5XSS55zSbg9vifKfWR3cc8si9XJ8BAc2VaiLpEiRQ9tWnsTCJyhUmffgi9gqspkpcN9cpqNiqD7MFxZLziqCz",
  "key13": "3QMDjuyM2cH7ZiUwF7dpvYnJjKHXs6jfDTcyai4NXECDuZqTWv3wxb82579uATkxzVrCAbpEdkv7VBGvZV3oSUNs",
  "key14": "48AESD3h6AYZK7UVrXJegZEeF9g6YcPssqDweE6saspuZGcdLX5v5X2f3HzYS3AmfaskGxArvpAzam1fgEtVYyRQ",
  "key15": "5xh22GntgcFv7JE67VVHej9erD115cbWLVzsaDXwhUKuv7Ktkgihgi3q6gbetjXF8B8eUMYtN12Ui2fjGctwsHia",
  "key16": "3GAeuuyFAyL81jLvNPotDHuLYqZf2hZqTqCGR7dyTGS7KjMZRfGZPm1VRGeCAvCBjFdx6sQipS1yz6uResbssHPH",
  "key17": "GgiYhpQPpLHvMp7YLXRGsZFjJVP9FzHRS8BmsF8mxzcAs4JixcEi1GyGD8Phu7HXvpgMC164twjNyxXK4Kf9EvX",
  "key18": "2ggGdJjnjpLeEW1w6rPRsGP9ntjcsgAS3h8xLVAcK53dEn3tGzhZPCNmyesso3b2Qer4kZXm2GZcMhSeySArg5MA",
  "key19": "5qfD1zAHKvMP7fmuxZ8VcVyxYwfFUrgTL6T4RaCzmBeZ8sPyPp9SpNohXiM4tbmPpeB44D8pRgz1eac7TmJsFSbM",
  "key20": "32kiykM1tcf4Pahjet1aHyANJ3HasWfbigu48yYafAKhHMSGP5WSdGCNEKYyTHkakvdFeoZwexNqpBMDS61v4WVx",
  "key21": "67bk66exqqx6tWuhZePQSQPyAozwoU6oqtxF4oN3DeiwEswLoSdd3cj83sKrWDHgaCN29rCGM5CnF9nkX4uvhMT",
  "key22": "4aShiLBX5URni1uamW7u9gjEJVnFNhoedoEag5bCtezsKPM6MLKApx2D6xNxnFCf8JQM8Fd7ADidovebQ1tbL44Q",
  "key23": "PuLEswJQjLMua259T4KqwoBUDWqX42wYGFvjH3FZqjQxupgv34asc4rHyDH1wX4B7nPkmzmQvwExkNbhrF71j3N",
  "key24": "oqycMdjDDvLsdTJvFz3WqoQ8uCjKTsZGspDmWRpFdhGHVE4cxqEYVYq59BYqjQJFV2yRGbnkbWG1icj4X8Xemj7"
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
