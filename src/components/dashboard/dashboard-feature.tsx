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
    "28nMww81xr3CKfrM3rBjDfkY8ypdE77ueDvtvdzP5Br57JK4cs3jmGuvNBJAjhLQdNHm3weuiNmXTfFAA5sLhkrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28saBqEgTGmWq58xdq1x9YMhJbez3P3g9s3nPFHhuuQXheGa2CJs2sygmHo9V4oweb1Cf8rjpvPbyyCR1T9o9Ap6",
  "key1": "4ZpjNMaqkT2zvEZEosmEGp4Fn9a3ZKdZuqc8MuETjD9PMbXqyZTscT4SxxizhgKEqkcJVian7J26gB6Yboqci4y9",
  "key2": "ia24c4RGNBcTsTjrJjTFZQ6myjrqGjBEH6J86op912KgkJGpdvY34CqXrdLr4C1YHsRMLLuhvgk3MWqxsRzpegJ",
  "key3": "5kEXn3ZjMrioTDtgFkrxRooYio1xZVaXefeaFU8QhCpwUsVXJFkEJK7BY5kz9f4EHqTsrTvRrGFPDqNQwBSTjktG",
  "key4": "23YTHVQkZTXwDXrWqoynHLmuwS8qVWWBpC8CtBpptH3Xsht5TS7tcoEX3h3cpptHhCJDf24QcgbWeNMzjrqrFSbh",
  "key5": "3cytPBVMeT8D2yaJJsLGdHUug8gZXjsVricRjaJ57e8xiPF2HxGFCQQ4Zbk96S3qmNY2gHeD6NvCz4J8ww1N8uGL",
  "key6": "4fP8z2AJYVvQVmrgaCEGNjvRcjCKvMePifAooBUWPAKQcnvFwYYsyyfRSq9bQMLzSLSzVfzcJxZdhr2jAFEWeYam",
  "key7": "4JWub8HDWuqRnTT5aA2gjFeYp6v66Fz7LpgoqPxKZWtsbsQirRmX2AANbvQYXAoWsimLG5rWrrSfk3DXCfYMjFCj",
  "key8": "2CxfRYsechoFD7Wbiptxv7BJMFXCSrppEnV4avTS3S8DoQFJeRnb4tPLbaT6kBikeWoyBPjVq7KfnngtoDD87rWt",
  "key9": "YmCnGLwnbEPojrjLLSNzrithVdPnYnD33kuwmCrW145sguCumJC6NzhvcdLTVMBRci9woxfrJ4b3dU9Yd98rzvf",
  "key10": "4rhFgw4fe1QHwrr4W12Vr3RKMe2zgEozCSGjCZQ43afWRG6u6MUMpwAcJHfiH5XqnHRkPjnjJhzCTYUp6tBU5z5q",
  "key11": "386HnVZ3DWoP5XaDhm9SfZ9Si5bpLCBehJ7xY4GqpBJumbSAC7UrZP8BtPgdn7YyXfBuAyRSgRXpzmJDcWEBunZN",
  "key12": "2Ar2LmwzAemsqeA4xXV2BHwuS9rCjYVUY9YDKSCXhCH422NJbqsydw1czc4evqdK4wQU7tjainCqfcU7Qj4cxKDb",
  "key13": "5wA5StsRNhvxJN1guikdgCaJ3fC6E6jpAYjXbqFTpov1G5HfNLk28Vh1NFoeNi567JZN1tHkif7NLmPyhXQbaHh7",
  "key14": "4LFMMmCbAkUiAdL9rMURkmaHzxbw7L3rHbwF1TvxTH2dRn6ensXtgM5cuEK2sYrXSDyoo5ZfmZYzceeDc8dNRoHa",
  "key15": "2NZY3XMsYKf67BjiyfCrvyyD4tXgDRurZkoVkAubg8GhXAVjvWHB8RsPfwjUrihXP4XeqZCjW4x5XzhZc67oHKDi",
  "key16": "F5Csnaq879iiHue7myEVHiwTu4Dc1Wd2bYEyKrDYJ2gyektZeR7UShydEWpVutCQ4NFmpKSC7zZH3BRgbaLjntW",
  "key17": "3L1eVyEigYVnD4kjNB5DNDjFhgUHLyBp3Lmz1V79wQEkhdFqeAunWHoQhjnxrGmQofmbNbYfPnMavB6gExBwmarR",
  "key18": "525dgUbHPCN3dSikphh4d9GgMnhArJ52ZRDjeKYuY96fchS9t5SYPsmvsnqEWJmD8E3GzsQ8FtxCybo7bLJqEMnq",
  "key19": "2vz8XkJhNmooJEcZEPA2ikzuyied8fkrVhi81GxoSg2F85bKnkzNzAeJF5yrbdkCDTBcZAHs24K7GSZmhjg84TPP",
  "key20": "5oPf6hTkkxDWz8K46aSW9tKYeLWxHX8QAqD1EnisL7jjNa1qxtjdv3eXHgb9Sth422MtE7Npwo4ZzUJ5oJCcrktk",
  "key21": "BVr7gd2JBfoqzGswqnJf8CdQXH93gZshN9JTx7DajwhPBvkbm9gZGZqiqXHt2eQ6L7JPpHV6nLZ1dkYLMMDPoSY",
  "key22": "592ySYeNh9N5g9oDiVzQPyVNRfGnKutw2KthVyZnj1dxg7Akvs7Bt9zuDbqwaMsnCkFGGLknP7ynLuyZhs1xrW3S",
  "key23": "2v1nZ1ZKMrb59PYKt2xmdUWhpkLnFeDddKrh3nEwkPjfNCNk7AhuDK1aPEH3WDHoGMsSNDsBT3nYbFGHvHGLb2VC",
  "key24": "4TBcrQuE7Mc3M861NxCTxgL9zQf3BgZKbnYcviCsL3eQXAiEAB6v8RXqSFUpFk3mpE9R3fNyhEWYBnKG9HLCqdgq",
  "key25": "ZNsHYxMn54EqG9TsEgZsLazD7mUge6gr79KRRr2xZ6EPuP7DoxaakiDHHzGvDyDW2wghympHvvm4kQYP1rSKSeG"
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
