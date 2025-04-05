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
    "42A4ZqjLVUqT49u9xYYYoGdWvSPTTQgFMShdG32Efxz6bF7GSijAATy1THssW2hUPau1X9nhfgw4LZVjv7JHocMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573anMGPNDoUPgtT7cZqzFhUtQhBYuvdWeXdwabfasDhf3nbEBsbTbfJaAUGmhbja3i5j3a83QGWNnUHFid1YqA6",
  "key1": "2GSW5LT2YNUA4C26hptMSfwqdAHiTdsnof8LvAoisVdjRorJ6iGhd92xcAJb8LaEV3VgdfSfTd44ZfvtTpvKsJUf",
  "key2": "62w5dvBnaaxqW8mM9D7j7714dLdyL6ZCUJ8r6yM2X2xsc5yGRLREWouQKv9pzp5MWbyPvxe3RXiXGmo6dgobJEek",
  "key3": "4jEfELsRWUWiV4pF8tu542zsJNkj7Wu1h7LKC7ugFRsf137yPhCTUBJDqTE3imt7UhnkkJUTBo9RmRnyvaftjVXh",
  "key4": "3TkYyY51Neyd7bf41hSaHFLSGXt5acr2u2EeN73FrWcU42k4fsMDE2s3QTAtoUZ5x9Jpv6iGHczzLsLg8J7tjgsH",
  "key5": "3mfe56or9z6mTbkm9adYqBXYnghDGrYZzWPT4P1xjPvFLpt8BmZiGcj5gtdMDXNmUVSYzYfk64rurhFrFFnwJk8e",
  "key6": "232nKvxWJ63vwcTRppcmiaWdJ43diXLv6FFXvKUAM3nRc9Q1mT1TVN5YYPZDbXo1uDFzYCZdk14ahxatwV9gvja3",
  "key7": "3uLyf6CBQpo2KthtGSexD8JzB93U28oTgPB4QmsJunHXP22n9vA7BSjyFE2sFAUgvsdw9m1jMvN8CSqWn9AtSEhK",
  "key8": "2jhLaiDBUW3fT7EX8b6BSN6S8ohfngijru93Qn85TWvsnVFyJn1oMURhrc3RYhNXqHr7miNg778UTJdAHNDADAXm",
  "key9": "5tsQ9N8qD2mBkHzYZx6WJH12Wfg5qG696s5J8AFSAcAAVc4QPJyQTd8tkEQijcMzPs8zYdLgJWNDnDCCe5Lh27Sq",
  "key10": "5J5CHQRJQVRYxqsT2dAczZyXv8zYsL9QdEejYxwigAE8RAvjSi5SUx3PuK3UD7aogbGDCffDktvj3zc551G9WsXv",
  "key11": "3NfgFbWSCtE6Uno2Pn6Waaoy6Qh3n6noGZQ7bKWaQf5nTow9zJWR4CYhD7T1yygpgxmtKqn7E4sgkTLbxFLQQqX8",
  "key12": "e7kfsmHWKi6NuwmgXuVsCfCMgsiSf1H82AtmvcFyZ3yJtz8S8idqUvXuHPRAgKXSxey6TnHyFFR7xn9tGnhbzgD",
  "key13": "3e9gsh3L7x1CikcbWZh3SH6eRisWiQREqqDnwFGmWHrNrbNab7Fw2JPXCbQTdK3j5AwJuSgq24TDMhiaq1zfiMX9",
  "key14": "d6hUQz8z23CMWc8eqDiD9Rn4UTjdPDwf6gMhUsVN1MuRPmc9jzPn2ifeJNBDfxdyM7do6hEyUFiVgHwN2QLvyNV",
  "key15": "2wBR5wL7CPp64bAEomQ13cjW9dFxURsdBJZEwi7oAeX7VzZJkb4GYYrXDZ7GiePm1xswnpzHt5U9RWFVdtnoULBE",
  "key16": "5AMWCP7a61txoxrXwydkBHKDwvff5S1QCkaVb4wkhSJSxXQqB1mAx4Ui57tp1DczxT5fBgH8w6ebf5Fimw9iURt3",
  "key17": "5Thj8ou8bqwVRpCpL4h4SY5ePHCZGuME3NWpjC3jqM9GHSiTiewLzuzFqBGzGw71SAAXTEfN7NuzWnZKLn1V4X1p",
  "key18": "38GbuMRZyWHThzaHnfpzUJE89gi681Qe8z4JDtgnhrxTBfgKpwpjqM8D4uPmAWL7eXAA9geYjZ9kbE1Jce73MjPk",
  "key19": "4FqC6NJSJg7v6JiWuWsLmTukCir2z8Ermrin3Xtk5hos856rvXJXj85AwQCT56F84EnyqGeTWofyX52B8LNRZVSH",
  "key20": "31NMMULvFMYfxtTksN8jnbaKuq3hwC2NcRNPqmfTU1yFBYFmhM6UYYc8fzZRQGpMYu2TRLG7pLQsiTSfv3g5qCxw",
  "key21": "5icSg4wyyNDS8xkZyGPmAADuXibTHYiBEjwqjSy8fY8yW3no4DnusRHBzRsfh16iA7c28UF66MGAFgoHsnqhuLMo",
  "key22": "3zLQyEjPurJz1VCA3e7gFvX6CsPTvgxejKh47cwv54BGWibfVz83jCC13TwrPHtTUSJuTq39VABMfBbvkaLNZGqF",
  "key23": "5nVAzpVtvjqYDS9BPtjDbs3hLrgJcpRK1QYq8u7qc4M9Yq14hGrwrRVGfuxtXG91VvoiPLBHWyufV4ahgN1n5TPB",
  "key24": "49yPpM57E2JnrGTBFvJASzMqmBehXoTiUQ9LBMbbwE4X3AJThj7WETqvTY9x4gREPwNaPetjK4Qo98T2UPGUw38Q",
  "key25": "4cVxthkjgjyYMuRKP8t5y7wXi4NtRAxDerCcQPN19vDA1YusJ9NYD3bAyDVPqW4iYUyGkxTsUTCGQZPMi2BNFKS8",
  "key26": "3aJztdaZWounnYKhyJdKyeY3hDvSZUP2QNrFmspcXFffFxXCMJHUkFWdjN5J5hd5xm9eeRTNoUDy37xsMQQEFybL",
  "key27": "3z59fGsU8fHWRsGsaTL1npgSZwcas67mwqhB9gdD4UcvCM7MyoerTAjFTAzjAH44PLbQaZnkr2S47f5KDP3WffpK",
  "key28": "3AVQrhmx6Ges5RywF6Ww1kR6SFedqXFfDaJzmU2R2Q8dGc8mzKn4creuKfWMEdLFmvucnnfusdEsz5ku8pL1eeR"
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
