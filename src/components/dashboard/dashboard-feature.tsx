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
    "s2SnwhscbeRqqWLyuYfrsw78bs3g99xUr8btrtLsomSnfu8dGTjHS6xX9p7hZ1T3XiSdEeMQZhhpku1FG8Uj3UR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oU89GDsxiNR79P3if7qsbdcMujTvgxycaNr2DA4k6ejPWXkV3jCL9m9wWpEzTdYriH49FZEfr2dKH1sahyLi2F",
  "key1": "5C7jzfgDdZrtdFaFpStNG9TP2UHafgbNUgMTBHnmTjQggu1dv9BjnkrgDUq3dju8zXn9sEB76Lpsi5rPHocDAEdc",
  "key2": "4VEN5ysd9rj5UdWhhXpjVMwxRMpJ2QwDPDTATeYrbxwA3ZNDYwPJ9QvvrRmhPmUFnDXT7g4eDyEfjSxThGG7MZmn",
  "key3": "aRBWh8UvERrxBG9N2nkwGZB5wnf3MQkMmLDYFbtZcJvc7UAxDmohfRwceTHuNRpQBDFqfKxtonnWEcEo9cafpRM",
  "key4": "4PLS1Pw3EKUt6uKCsf38A57J7jZjggDz5voRHkTrRmmpNrYaEhqbp531cjMZfEfWwp7ox43s7d3UpKAJEuZa3S35",
  "key5": "2Z86uYZUr7UBmyyf8pPAFEzUrkuJU5wxvhmRmbVZe8HZhNjRJ327f6H2QHpBN2i6ypXf83t1npxC7Rynmos1iCx1",
  "key6": "2qNYfUm5BLdSYFNgrk5kzaicDVnVSdXNaFynPTHBzseUBJqvia8AJua87pEhPYRCTxZATBwaisuSXL56Hs5rsbwy",
  "key7": "2MY69NDBDKdaCmVwynamhJHs5i8cKZPy68dvMmgFg3HFJh3NxQMViJMnFotiozQcNAWkCCE3yoT2TpeCTz2DRY7",
  "key8": "42B69hNyVtjpVrfPSvMi9rNSf5JnQJuMQ52ESxaxqcMFV53zu2Tb8QAT2FngC2cvKaGFmN42A5eXab4A4tWNUcfD",
  "key9": "3cAyLis1kZTHPFNWYu4sLs276cX4GobN1HE81btHd6qeSsJcGKiKCTP6ceLHoEpBbBTRu2VW3uin4XopnAmzcn1u",
  "key10": "5MMxYBruvDvzFPSTxNzPYerG48KN8ozZgbE468wfwS2cTTaNuTj6N1HnhUUzoLAGTy83GH1Qf29K1gmmfx46zcu2",
  "key11": "5LAjky9KwvsBNChqvJv37gPzGHnd7fyuTDKJ1ey42WxjH1tWF48cAqCSiUMpivY6YhaMiS5QdvH3KXvR9QubS2QA",
  "key12": "488UBQEy9tsLSQoY657bmgdrzLS4EsvkPUDrC5xACtY2tLABMqW2dYigQoo5sMmNC35eAfHfMcFzcfoVFTP1DkQS",
  "key13": "3D4MERyEHFBCxTFStLK8MPVoZcsjy5jXg3cAqUKYSwqnRoUrAsHfn9rPeh77j4TdFimiKsCkBgVexwEb1RZTy49n",
  "key14": "JfSohaXD4KaZqyPN8EZbFGPBuG4WYQZR3XXXggm33ZoeyXo3iTYZCrSEND6NaCno2Jc3dqUqwFmpvfsHhUmRCzy",
  "key15": "4r3s8hVotnnVSbwmUtTagg8HsQwUHFXnJgQvs3TY4zK71T6RxFnYFt8htmnF8CtGgoXNNEE5FgYmpUo8PCACuDSg",
  "key16": "5hYd7Dy8g8yudWE9geXSWjhn8RgUqivPEPtUXn6MVdrHpZowQbgepunAUJdUXDoYGxhmWF915LMcyXXnR4F5SPwa",
  "key17": "56z4pP3MgrH64ZP8erfSJ98aWJeUwvh9brMQcZWBDFGGzWN1srrkrmUSmzErLmbE9svGozdrRdG2TqeDq8Xr2QEB",
  "key18": "5t53AFxNrdjjMef8PmUeCJmck9a8Zp8FuMEKRJ2PfRihj1pSuXjbiWTrcMGMA6mhwkREzRqiJFrKMvkHV75JAHhU",
  "key19": "4t5An4VqEuzgFES9aVabEr4Q4fZiND2PwVAEV3fAdAXxg6R8C9PtjZX5E6At2JpyHdNscxvydn5rEa6pos2BBfeS",
  "key20": "23ungVCyRrCKowY27F3fHNy4yRmuMsMGqdAbK1LfLqmWqwtJL3hx2HWeRnzyC9cLAaHCHX3kGVHYX7v5xVnSF4BQ",
  "key21": "5i9qh9Zt5DFDPLvLBuDE6tCjVogkJmk6o8hvK3BiucdK2bHE9hJNxymuEZze6e7EgRzQvSrC7Z2ncK7DJt59rcp",
  "key22": "35fzrt1KyMBL36PxEk5YQc7VU6xoakepn9xV5ZvzuRYMRNZ3NyGyg8VVyyZVSkQH5RqXBVVf33G54pBucZasnZ9k",
  "key23": "245GqVdvPVvzv137kwV42uJQP9UZZ4dL1EhK2BRmd6YfE9ABUT6Kk36XCJhnoRK4Ag8qzGa43EBDtRRkGgbGr5hN",
  "key24": "3eYn9ACWRqoDjZhbai1DMiccM5wEALW3Ntqq9xeKK9oGa743fZgtAEgmwssyBkkRRyAg3DVkxx8gHcQqksDxAVS4",
  "key25": "26M3iUR7dJFnNh74zoznY1ihAia9i1e295hmksPU9W8ay69uZddNPQqaqgSL8xqP6ZjUoS2ULi3eSpmBqwvD6NWG",
  "key26": "DudmYqYdzYHYJmqtyWKL3pacPdVm9zgvtQUgfgCAY86Hn4QjAWr29jUAKpUJqS9KQMGwe9FJLXHYgGh1vMgV4tC",
  "key27": "3TGyrCboYtv2ka3sMMrDgCgpasp9kWs1r8D1gPfoUPH9RjdPnuVLqSKrWds7XWeqjLbzRufSyAp2uFcp9qdSPfJK"
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
