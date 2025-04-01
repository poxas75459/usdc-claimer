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
    "4717wtjQJL4arKfCBmw8msfXAxvAuNbswwym11GXjNWk2uGVtWxDraUM6dJYrRUZfhtU2ThCrPfRQPhtwvc9QVye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tysQsZ8yUJySwv7YgePaacMjDzkz1vw4wD78pcNonvGyL4LUQetAkRxu1vp1mhDc2aywedFBmDhwpaSw5sa5pNG",
  "key1": "4UFY858K8i2mAGWoWjeqq3hHwgGYsmADMEERjWnMEi8GiwaG5WbHMxDHqRDgzLYxWyg1bXqwVccrRPeEMTHzwsVj",
  "key2": "3sL7zRGoDerXkqMm4isytaDrLc9WCiyXwReEedvdaDaxfFfU7rBn2UCkiynZ99vmDwn4Yy2JQUmri2zJmSkZRuya",
  "key3": "3bZbBTHQLj5iMf27mUMtZkkijdto8PM3WiCqugcvUnnZMHRnHEHeFXpiGUX7NzcNDhjhz4SKJwREPizjit3Z8DkY",
  "key4": "PFyv7GLkuR5p5PFFRi8gM5oKyQg3Cvdyx4Xf952Gtxq7k2sQwFBqPiUD6cGoU1sEQeC3yu4wuAJBbpwykxA4udm",
  "key5": "5JSPekXSo33fNRqseqJXfbcmr8pZ3niUeayekvbmt15HSbXuRQJAucBss96gSBF6BwvUmp1mokQoeV64akDX81zj",
  "key6": "3ZMYotLY8DZU65bsgUCvpdbD7sj5EzmAjxHJHv4AfsurtLEwXKoN7kNcNfUzqJiFD1jfBMr8Nfs37mKickFzRLgc",
  "key7": "4PToq3Uxy7C5AxFMjZSuqJrrnTwmQv7iNW1xRHMMeUGQumL6N9B2C4SCxA4My7SUndMCoaG8qXBfCGGqhJpZFRaZ",
  "key8": "G7YEGLsZfMMDgiqNryNwxowTSmhroFrw2a1JfU44LmK98S48czs8FE73bL1EwRBErAMjZRGPwkuWTtf4hHLK7rY",
  "key9": "2B5hp5fbJriXVSvAZoaDTZKMgom1Yve75qZ52QHT7aBphyCgrA4SG8tyCDTuXH8kr3M5pMceHygPJUwiVBbbS2MY",
  "key10": "4eVQkF2u4vV9tRXEXs45YRAGQxeEKr7j5rL44Tjbt3raVbMRzmsvSXHTSsf6JbFaNZU7ADi1xzHAscLwtSgvQEwQ",
  "key11": "dqNyNhFFRSA4eD9EXHswQPueYd7riguFXFsqaidRCwE3XzwdF4rULDAzZaawHJsogG1oCFvkQRETaj4Hw6kbWRX",
  "key12": "5AM3czEx9b8QhpS2HaqgmBdxMAnsRnZ9Y2yaSmc4KHaFjbeMRGRiAJ74iz6cBsAo6jiCGE5g5j7KsWn3uPGe6QpS",
  "key13": "ti6T2zoMsPXRiBmzyGf1HnCp6wVZzwudhmXM8qqcBnoacHFhFYmvfWhdsmnJ6s83jTohAjv84nmCZC8v34wSxdZ",
  "key14": "3CHa3JKfLUaUVTLz2ZHpXEw6VbhwskZxMBDGaA7mqPwCLvZPFx5AJeCXJLBv2j9d1TTZdXAZw3P26bgN1BySVgCZ",
  "key15": "5R6doCicv9eVoY3JuTeYfe44FaQkHTbuCjjoJLYdHqTWXwNzEBDa7b4QiXkusxgXjasXgyTs8Qkczov2xHTA16Mv",
  "key16": "2oTpedBTHETTWorhpPrHAukVzRtaU7WRkBjzdbYTcKirc2qZFMU7URYbGdB3oYfe8SWEcjqxAfBrbHzgeZiygPdk",
  "key17": "2tKa9z515w64kHCnNVknhGschEcRriDGdBYa5PhwWsyZtKxtdvLsGFQwL3NMLQGKcyxzikYP8zL331uZz4Lq8f8Z",
  "key18": "2QXtBfbDcgLKRGN2mgY5ZERH68xtSKKnXmCfSPtSJbWScU2Hj3ffbZJhuTTwLWy794yPmrnjmsfrS3Hx2YZN8AJR",
  "key19": "271uRQ7pAsfy8GF2WFZfgHHUuMLRWRi2XEbXp9sUVyip9yyQ7BfmUAtRbJG6hDc1UxgpmJCCqz8MB9qu2dXp1UUH",
  "key20": "tD7TXAeRqMNTdSeJ6iEMhkcDKHDJ6v52N6BoxxjK3tf1FN37RgHqcxrYRdVXXrf7t73xw1YsS1rkFeyGzvWG2us",
  "key21": "3cGbUi82VQGUgVDAQ5ACZwQQWTKvoaZPUv2XzhBLJg78uRkwSBWT8K2CUrfBW4AoV34kALP8YR1zVec2GbiRkD7u",
  "key22": "GGqsCVh3NtnNK1UR5b5h3k725SjqtScaC1wgdW89FL5S1SjACTsoXWJhV7N7rR5h3XwqNRWJDtDGREsVuBiuAHR",
  "key23": "2uixa1x657ijDS4SrtD2jCqJ4tGJ7ABy4mCjfvk39JKqh5vzAbJ7S4c3SHJTifSFB6HKtYb11gvvUvhVVgLTzBam",
  "key24": "5LcNoTpqyNyTWcDh3QGSuPaXiGWCnZduu2B3ZzL4WUibbczdFrCzdTLbXFRZAL9qBUuWQWKZ4eJYWP4ZCNt24xSH",
  "key25": "4nNmZQzi6UTYDe4HZFb2NVyk4LZVUfqneLMD78uZSrxboub1SmvvdCCiukbhEAfJyHkL5NBJNzX5susE4GtQpahE"
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
