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
    "57TbRaBzHD43vy6WvAEVcmgQsjjtLV54XzzixK4PHsFdbic9zfmALTQT79aZarWLgWHoCw5AjBAYRKbtDYq8yHGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K917rgoTndxkMA1PykDaeGCjNRx1QuLnJxShTrw15Xizg16ZqkivdqFKgmfCR32NgaoDb6XBnixMU7bfqtEQ7Rn",
  "key1": "2RTP3EUQUmu3HpzyXq2fM2mzX2cL1mgkKQnqjQvHa6FLzqYyZKq4Dw1gv9PXcdvTdCCk5CypE99vQ3Cc8SnjPxBQ",
  "key2": "22AvydR7TUwZHWBmmDkwt7pBh2gz8r5wUst2YHBAdDqD6Fjxj2mPih8m5MJyvdja6NiEkN9VVUkXsVhhLo9V9Pfm",
  "key3": "5KQVY8FDDSnL7MqBRDTb7qiSAbPjpvRPcJBswn3zHPSocRfSxY6DVwG1UZEVyexyoNjfkS8a3ZzQ3EdTtByjaZg6",
  "key4": "5jqpcfFnZNaD6DrJmrxJBVpLSq2Uvoeukd44CTYzXJnb2WzJ9akSiq4PfPwKDKguVMcNVwfcz99kRgPkHbtNickK",
  "key5": "5xbL93ZDY6v7jyMNxcUHab3KFHEEzPppJbFTccBu4KxPDdgB992kDSU5cZUMusvWGVJ29E2m3qu3NF4jDipgDAeA",
  "key6": "5T7SVnrEKM4uccqYr6MRNZWeMFJq8BCPtXigBvbcxB8UgTZSBQ6jxF4jRhLDReshvuvUgeK9F5X3n3s69brT8ZFi",
  "key7": "3a3cSQYyESDpBGrzYtkVdUTeWk5zXujjVnBfrgNekVHzcs4jruavZT3d69aqjAv3ooomFk44bSG663ZLuK1xJ2sq",
  "key8": "SKXrsqbwNqRNfM5AJrP2GPsmVCbdcB3uBXwiKAHKfrufr4TgKmyRBGUfQA4i8uJ7Dbch3P4n7UYQfXFMAZk1QXx",
  "key9": "62aEg81hmHhwvijf3qo4n6jDDH3do1Z7bfmKcKMHso4k2VvdUZcf8XsXwDEVe14nvqXdN1zZucRtcfoBi3dC74vQ",
  "key10": "4jcUVCSjKc4zZrdjgjnMT8Lix31LrPAu6ikaXj1D611yg8u6a8qXpH9t3zdBq5kYkiDsajT64nJ5x4w2jbioAcuY",
  "key11": "4toRQsbjywmwdrzdX2tyvusVxZMvKWo4UuGMEG2U98ftW1dDd2voJY11oGcAPV4jDq8Acfkxn1TNqKKhUq5aTBF7",
  "key12": "4VPqbcvjh8p5HWLfhd8tEeV3x22ecvrCYSbxEt4aBySQ1PXakmrypvD7XBiW6XgBS8cBmRpfBD4KPUNmXgZmpiy2",
  "key13": "5rpF2kszZBHWNPrR9HzqvhxsZLXRgMeFURanhddbW6Vd6esTZN3ASRmpVTbypHdeZFmfytw3egtBL3j7amHe26JU",
  "key14": "3g54zKy3LUqoaSLKuYV6Y7BEizRRr1KpwH8MfuzFwk1cm88LqpmTWsoLQ4V364ptVTeAy173nVnsi4Cx3AWxXtDQ",
  "key15": "2HNqn9V42qTFYZaZb4bQxjFi5F8h4hd7dXwtv8i4HSDZYqvR77VW4MKzTY9Mc59pEc9MtSggykMg8Q1CSBn3sS41",
  "key16": "ciTv64MxHA2aDapjLonnTozS2WL6oRHX9fwpzpJCRdgQLRB8XDBcicCrCxSAgMAhb3t14me5qmxFNUPYwJvL8TX",
  "key17": "5ehuu8No221o5GW4cSzVZkLj8WQMiPL11y7nhYsW8SHejUzHH25h1zjGzF4HvtX5eQtmV4bCGYEXM9A7fshzi11P",
  "key18": "4iEcEoQWmpDt2Vmo74SeUdFgHJv68JLQmKVvFhqnmdGmZFmF4nMpmbemQMrT1MS5iVUXTKAtoHt6CHSyBJ4sHrSi",
  "key19": "2BEtdi4QKfLEPmU8KFAHuwdbYhE5raDjBNuAtx6V2zVthz8nfc7UFPXydR8Vu6Q6dfHhfbkixN1wMUrUizEYHu3a",
  "key20": "2b2d53WyegTvpzkxGtozPFDnsXDBagBThyCTZ9vCAFaUp6PDA5Nb6BQ6fCUnx4hTjCFf25AZfkqxcwNq8eg5naGM",
  "key21": "2EBsCoUF8n1gKjpFy5CEwTcCWCVRfrPTSELDde2SYag5XLRyQBYuJzTnittjoxBMtd25Cx3grGSB64mMeooY9XMT",
  "key22": "3CUqsie7oob79oMz6fMBPQyoy4KGhhTyGbEfXvZymofZj5SX4ke2SHWoEPHQQtDF7YrM3TuY94hvXNyzXTiXk2pt",
  "key23": "4tv4swvwwrpcVUs7YWdfTrdd4KFFaTvprbcoQbbL3LcFh7nwTaF1A34PbiwvAPypkqyjSdTSWD6gtZqHJJW6Rex",
  "key24": "8RheiUAycnM8ug9FdYkHhqHkUbu7PQ5YErqHGTgxG27r7dAPrwzTx3FbLTxoCXyrhRnHX4nrEY6JLcfUkQWMJ8X",
  "key25": "4tzPuxqm69bdf6kqas5hcb2NkGvFukm83RZKKVo14BSPgGGY6fVGdrabtrZjWy69rGuRahbobswEvmFvv1cyikgL",
  "key26": "48ArPMgUrQDZRKnVkMY9p574LPwSiBCmQKc9Qj5fWogeHgnXaMmMKEpm9qZhauTXhEixoiL63UJLzWcRhB7Rthsu",
  "key27": "3cRsfMB6JM5ofco5z2acrg4VoTmvzUMFQkcpwMrfcZwccTZr7BmaKvdCv4Nw66pcReyhWnwRDsmycxYcDSdyfp6R",
  "key28": "5WCC6cJHRMoWyAC8kbuqnDznv7XgfktUK27HXFZWwdk2MWJvmdzAm49GW3hkv7egmwEVvR1RGAqa64EyKd2nqoMo",
  "key29": "3XZteWfNvz2qDbsaupvDyxAZreShWWLdnXXWg75vYWHpQ14Xh4wtiW6S65KvYEZVcyLFTfJJgT7TRRg9SpTHcadf",
  "key30": "3Vt8ZhchNLcdTSG4vowq34qUq9acPaPoTjMFZNXzVTLAHuE2FYqgP1yNkgiVXyVCmCD7KAkzsFPiB3Hu5fh67A5i"
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
