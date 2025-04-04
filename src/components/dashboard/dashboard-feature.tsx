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
    "peAKGi53HDbphRAreJJZFyZxnnVTXZsJyxeJ3YFcmCiL1LnS5p1Jq8egdym37ngcM71NAfnMPTL7YWZxxUSfs4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QqTqqUHovLzhYRgX7jdLiJKeWXNrKDV23Ym3Np6aZo4nzTk7TcPJ55coiw6jQZ2dkLahCLPLhJRhft3nPYJREqC",
  "key1": "4QPzbeZdhHAZiqeUebVqyJsfG2aU4rZScFV8j64r4MmabwwWrcaWyzLhwZ8aiAVWUJAK4maedWhTnMQRL5FtHLrs",
  "key2": "64PW5mDBkJqQcv3N45gSRJeQQAHLNH1y2wp8RCoxtpqaouTCYiG13jjen92WCy1GfyDMYJD5Vb9vddaRKeuBh8J4",
  "key3": "3dKTXnSaXarrg8jRUbBHUZjpUHtc4z8mT6dVGqUYvnBcp3deFdjgMpfStx3Vfmezuuqjc2GRkWvLtasaGxxKBngm",
  "key4": "5VfN4QqbveHzXSfjZ9UnexPY4HWKCjgchYvc9MDWQQ1fBprvbM9pToJcNanbQo5b6gGMpNN89CPC1pFh8aVu7uvp",
  "key5": "zqbosbDjfmbKoDXyExHfzM4YWdUFQgwNJv23VEZjHnPtU5vvVm3WN3T4WaLGWaqvQ3dx3mgXZiVCnJcCZBVWXWi",
  "key6": "3tQ7w9Z3CJFoo977xYbb4eNyWTY2H8Pwqu3hsyKQd64V6jUZZhMUTWDL57sKsw96MruNSeoFFyGe1EFRMFMAcYem",
  "key7": "ARxrCDUFzaMEbjU1apvrbR1ZhVPWTs1VwJn279PyaWQwvGXGgDZLKvMYG3CwXAZmujXdo2TqGLEPjmg5JiFbjuc",
  "key8": "4oZ1VvjPFH1mX9MNwfxNHjAnt5WB5y29QPctSw5hJggHBr6odEkT1hX74m8nXgSf1JbUKkMLiJF1YbkvU6bALmA2",
  "key9": "5Lni5MgURt8GXeUgrDkuZK9yZxAq1V29d4UNvckGXyknQbSk413d8Wr1oJq8SWGkFyBuAJqDib3uR7wTKfGPHy1P",
  "key10": "4MV2vDY25yW4yRe5zhyZieLVdbMW9RVE4WhnP9Yrs6C4gqBjbhqzffAK8Zd7dqonR1NzuxRermwbgTiWJVK3QYRU",
  "key11": "M3QnaycdnyEimJAN8Jcby6zVF4QS4sdWi17oAndCVT3tFzPP6E9nH7Ctu9TZHvWS79GRvHTFQCniSCr2EEW13Lj",
  "key12": "5V5rmTPeycmxhyb7aHLicqadwNZs46W98gEU5bEjQdbrGy9nBmjHG1uk2MSp1QcmGDSxyb8Wxk4rTtTRacXPqu4u",
  "key13": "9zoRr9PrXc95aej8ZkUdjvRcYUgLE6kziLdcBFRXUf6G3csRdAJyTX78LkhR4jMUyCBg36LdYDgE43Lo7dNvh7U",
  "key14": "3XoHk7H9ehqG7gsHYc7MHRxQYdj7qGHB3bvZ9Vm7V85DEFJgoC7hPj8ZnEVW6fTuyXqLYmwzg2fLNYb82N18HTs7",
  "key15": "6x9H35gXfRSAJ5SwoVsfjxDw1xUKbSMA8dArEJAmZqSkYqEwbXS9HuPLJhXSW3U9KKMet75MatcxvEMeCSLfcFi",
  "key16": "4rhHMfaggbMrGnc6qVDBWqbDXycLRFp5SFhcfoxXwEGBVTdnH7PoNczYSBdxfZehWsP8boV8tXB86BTTQVsnehA4",
  "key17": "YzEDLxPesGsBLnUNeBTnAqgVaQuwupB5WUojPUhDwRHAik7apbN221gcqSZ21Wr92tyQ7yxewwEZDEyH7NRzYMC",
  "key18": "5T3rv7F727qPCH9o49opY7KpWhYRu2BMsdws5MVQgL9HHio1GhLiuP6kzmhLoka5WLTJbXeNB5WBFKFSDWCRrEne",
  "key19": "2rPfNevxz9niPcJJByJfmJ3rUXwJhSySa1GCkJhRbZkostQsMR3QCJDTBAzqJnzSNXpVvhfQ6uGBezY1CMCTP6j3",
  "key20": "L1CqatvsBU9HjipQmEqC13Y5x2Bkxp1SpRpcFwBGDutiZqxJSJrjkoRZTz1TUjPV2BV7LeeuAV1XhFMYyn4qa55",
  "key21": "4SiJmiLHxqZponVTHMsADor7R7jtS1hCZezKabFphSV747dD8ZSzSRGUjSvdtqQxabqjo3YzpzcNDin8Qzbz5VCV",
  "key22": "5J1BVZTNKpQxC8uSwoTtiuucfT2wAKCtJpKAqJ9UwjcT2f3tEYVQZ3xzDFjAKmQN5Lc1q3HUBL63yFbcGZhbqZ3h",
  "key23": "U6x7DTJ8TwoUHyhFbsEzAJ477oGShf5JZ2hY6RV19cXQnLUvVgaU8WS8uqeaBpFciWc5mmFcH9c7ajd7FggErtd",
  "key24": "3fhJD5ZEGh47C1HD2zrh5orJ6tvxNRh5tzaPChBbeKkLfEmADYcDstB7uLzJNDCdKQr72cNWqdofcrrA8dSMn2DL",
  "key25": "4ZvdA3bBxSNiPC3H8JJP4hsDuYVAmRkjtiENPvm2cNcHV2NwcignWBMQmDga8n5UrHusnPRLyHUNbZHNKT3yj6p4",
  "key26": "2cCQdW12pJBv5AJjqtXa7DMR8jgfcS1JDpyK9sDbVC5ZDkR3tMEsfoeCVzegtDCqRZiaabUDZw2F6rE9hoS3UwUM",
  "key27": "2pmNRLNyUSXu4pZKCh11ALKU4rvDzqubVFo5YKg4QTgtbPwktMpyXJ75wcmqQPXF32nJtiaCy2C87TDe3EQhc6Lw",
  "key28": "2ZfKn9WLKVeSXzxGibbZfW5VXU9iK9d3J1zGuVyrUnRyyjgzmisyZzU49WzgyUZayiqfXLU61yzgTNxMZAB7K2pe",
  "key29": "3nMiLtxvSQyY56aMQkcZSkvdi8BfiSW9hzW8uEJuVf5Pg1jYTa1rK3z4F2DTjnWKk3R7KwAxsEPktVnUdcBT2c8G",
  "key30": "4kXE5unQajgXGZ63Pa37k1x88xSmqb2PuKkmYyKfxcdQTj4oPS8CWpXgpJFoKtzh6zoRpErp8TAKLTqMuN787mRj",
  "key31": "5WMjgtoFuf1MprMbJiUgW6yy2YbACgP8Uq4JrW9tPjYnsy3M23cfp7dWmf4ugRG1KSiuwniPM1o9ojgAzjYUH2Ar",
  "key32": "oggXYZMsdG1RTJwAtoDXztoUBRBphoPAMh5tYXS67PP8bqR9ejDjsbKvA5ByT1CtBifRipwdkKrgeuk7t6UjhsT",
  "key33": "4QdZwTg8MuKV8ziFzRn3DmA6v7j6Bp8Xo6AxwvKzxefqSEiDAzeE92ERTG7wR95bYRWGBJx13sPyYzhrcDeka31T",
  "key34": "S6tFNhV6knSXwvW6if2UgS6S2XPpvyKZnut5hz3YWKm8BnBFnfPPikNQeHTqMQizukH9oQANJ1uTgVwWyiufUVF"
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
