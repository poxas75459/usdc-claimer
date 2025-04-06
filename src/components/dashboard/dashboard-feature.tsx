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
    "39UJD9gVKqc26GkkJrXf6xKrbuak1qknCnfgYFNvLCKsTobYCvAaJDdf96LNH1Ej5qABW3SozYnduLMdrazGU1zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KubUv3x2z7zmxmgur7vmhRtpRHhTrn9yBJLoozwwe2PHf27MC5GzH4eEzJUvXt6xgboGSRFJNA4zfuWjVonTy7Z",
  "key1": "5X2xFZDgp9YyQVXuuA2v1diz9daCvqc7XFbWUEwTXooQNrnCkuhBeUHJ7hWZTBLooTTRqSvF9Tm8k1Dvazy4edqZ",
  "key2": "2DsbS7WJHnrnDtBLjjsTrJCJUJh7ZsUFYzkeVL4qD4wwLvyyqvkDWrZFDPto8XoHL69FnFcLaqMXKv1CkL6EGDh3",
  "key3": "3nWCS9i3CpuTb2Rc4qFgPvT4ojjvMhafybssk2erV3XdPNrz6GNxdzHbxfm1DpnLbq9PS3fcrnBJz54WQpfd3riG",
  "key4": "3vkzFkn9sa3VCheEbxAK24Lnu2axKjrx497eikuVBNEcFi184adoU4kEUCaJMDCz5bMZMHTRNJFqqKxTCyLsZfj4",
  "key5": "3x7a4CumYeU2DeFQ2Uo1xCsC4PZXixPXsCyxxbM4x6bRkEwz8SBHPVpXWD4CwLZ3Cq8JJG5RwsASLVmumQ81FhL9",
  "key6": "3VL5dGtg8f6EbA34qx98NPPADLFTwMiTTW9ydX7zHW3gvjFg9inTdSCMN9tktczyAmQsedGnMVEKpqT3hZvTSvk",
  "key7": "4rkzDxnjs1DAwunKvPTmSaRUf2RaoUcaeH6WzaoJtPZbFtKK5e62BW9bKnVD5mv3QS866gVDqGm1ZfD8beU1vWdu",
  "key8": "3KTrEkodk8wMcp9iAx2tV5AHqRUzMXv57eKHPs4euN7CLjLcRPeDkt6aC6gLwLKW9Ws7pcR4FEGrHHJSizb8xBQb",
  "key9": "ziiqM7iJtsJvJE5KW6iX3hJ322oWBsKvPQMDFUzV4YWs7dY8GvfrqJAGU1yxqSp55egjL9P5yS9VHtEbo8NCdV6",
  "key10": "c4BYmjCAASkDqBJJr9bMTVnFiNFgzoRt3512Hick2sSdVQj2q6Z5jyrhv47g5NzNkEePdmJNUrdyG6MSjouhGxy",
  "key11": "uEDxFdqzEpGLvhwxjXNaZdoW88jybWWLMjiFF773hdJUSAv1XX2a5Q3XLr9gqs1NrJror1PNEbuLQKRuuAm2eDf",
  "key12": "3GUXDzY9rgwsUcUgM6C2vNK1HRBaEGQFq4Ed6zo3Y6UaxMwqUPH6GbjyvYLno79mM2q8eTHywqky7d4RxBTeudKa",
  "key13": "YpexzLaQULajZh4TYgutwwQGoaaB87CxCrMdiZSS56nc5zjrDs7LaEakW9j44cMaaTHTrxjj8BGyXYWcfw5gZpT",
  "key14": "2XPikrX2mkkhrLqvZNPXLWSo56aCnKgKBFzkdsJPg7E4GRe1aKwp1kGxBDA2KmcbUVy5Y3SNs7ZVMBiWtj8MpVDB",
  "key15": "x58v3ZjBVZJmL6otkBMc6e8jMEa4MkQhrhLUPQ64J9QJrxUwwzkyYpTHMaEfjr5aBAjXY9Z3SxwrbN37R2TkKLX",
  "key16": "5n7BPe57ZxxYdXXCR5SPnsRr8ihEW6jhoWx1KtNeGYBPHzwKeT8sTjKRzptsAaHo2LDz9sMieKb1MeEKZQJsxMA8",
  "key17": "3MquT3wWk6oGCnvmxhUSfDKAUEb9EX2ug7LfXrZBYMovrq3US9Gx2JLyQdEwgD7oZqFiJzGnh8Gm3hHsgJSUNdYd",
  "key18": "3zQPmjEPg6a2z2fVpyNzpCFUP43F2K7GtTeb4nZ69F5w53xYo7HCHcaJk9fZAfCCGLvvkirWd6BJqa8tw5TcrDjx",
  "key19": "5oykYgAHoGwzdpcRWypXSjmABsCLuY4YF8eiEohagv8L6CKkFiKdxNK8M9GLZbcbZuGKuZ61jiK5BM3P6vosH9Vu",
  "key20": "5zRsz26CgVLHgetbhBgeEdWeGPPccTiAQU99n33ZGpWeJtyaxKrNygj4diC4Gy5faksp7saU6ps4tykmcJ3Zryav",
  "key21": "4jTm3HaiyZkdPMn1KS9KziBa5b97ZsNzB7ybhyBPdaXh4Me7CU3f78npHhbidS1oEbGTrMCgVVvXKn8YAK7ZAYrn",
  "key22": "2qJ8rU476C6UoooWDF9zcVy99B3qV19oHgPhxZHXWiaETQ6vJVfFxZwt7KRZQgDwdoQWDjc39FjGxGQWAVhWEASK",
  "key23": "5KtBeW8edNubifwb6LARpqjtJUbnbpgZLvuNvkf2JtjijQwWuy1L8vwqJD1e1wgNPKV1GMBXDztZu9Mu8KaiYp1i",
  "key24": "4A4ZveKGfW7EnVVdgk6nyEuhg8CYKs1MtvpsDyytkcvoYZhCzTXYyD94otauu23wHLpA2ffXHrmhG5Teh8CKAfnC",
  "key25": "2eMWuksGUoso4PDm9D2bTqWmD7mJma42ckv6TMvTVhRB2wvj3Zvu99opVdcUejGzuqwBzcNWzMkDDxRZ6Rc1SPCB",
  "key26": "2XNT4hmWF3KjxweoB7TFb7BnGcjAGBBHpSkFP4XBDLFhVKVfUU2pB9dUdeeDBhMcKwrXRyndRg93spDiz7HYoeKQ",
  "key27": "VjByi14MZkvc6Uo2GpKmCRG8acvDRkNrAjZuEmc3u2JrrSPLUb2aAHyc8aENPzvHQPRn5D3ToQscBrFJh3SMUWW",
  "key28": "2Qq6JaTgH1ViRksiJJpvVF2taxVJCLxQ5peophVhbFeqNHqdFnqSqRqFUWhvRdmseLQyt9VbJszDDCuMp66WnBt9",
  "key29": "5Nwr4WtpxZ7J37Cg3Hak6VnfzjHTATKBjCVtSS27QUAkmD5x1x8Cj7DddMNueuNT4AeBW5cTuruYbhXhUYZvwycu",
  "key30": "5R4cyYANSx6xv6BnU9NEGGQ4CAQUFRDnhkyLntHJAN5BWYQ1SLaN7vYWqYPukKzvohHwYjFZJeqLnpurr6SCVfMK"
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
