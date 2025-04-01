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
    "3AnfRBQLNffkKfMJqGK6pZCfNuj9QCDJ1Ez1UuVKyoY7tQ7Pk1rki4bxjnWwCpU7odZxLHcAsUYAyF3wD5TZ7kME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dVtKRpqcXCDmt66xCDRiXTVTiiTwMC3BsrEupXpbhkQn3sFC3mYTgWa9BeoABZNFxTB1AQ56YMHfsGuffrWUHoH",
  "key1": "2i8oBKQFbzyNGaV5ZeF1Dfh96jscmqJtUBjifQftd7rAuC7iQ1BkBSpQESjJNQBtShyQbaAUUWSPnQdq2tQvdLFH",
  "key2": "pTejPNumbtPxGTJXJZo7EdpGjCVnKaBFWkzF6BaP8VCPkLoZcKcRVrG7r1nPiLGkLGRbqLv65rqrvPUku44YhtJ",
  "key3": "5SkicEtn4rMdVzxp6GvVTDTLrMz1Zdpzhnm8Rzo1ZNr3UwwXNbcMnUHBgNYkkyYDLDNYw96z6F9G5b9uwhBFuw1M",
  "key4": "2sQKRtpvHobNsep5979TdP9GW6h79hqcNXT7qRqwCYV7KBufVq6Sh2MFrNTxDB8LwFEqrCX1ZLMMiqR8STiL8ngu",
  "key5": "4VhzefobSoGu39W7aHLx1rjbiPxrL9LboPGRvtabSPv5xSiHbz6FtHm7VrCEHLnzB2NUmM5kTAS5iiCnAbAg2bdQ",
  "key6": "4B95MbcXwZUZvomeY3vzYdrv4GWrtFvWgeWMUgjnNa9AGzySeTRaLtR9BoTGUSXyS4DXcaJjdYajAdeNP7dk6Kjh",
  "key7": "XUUVgwLW87w6Xt95yvtu8BVen2skpsLPQRyemV8RL7x1zR7Vjia6FgExMPoGtddEbKHSr2w9Fi2WjgvVAL1grbw",
  "key8": "48Q6BNdwhDkAJZUKGkc2c1v88qp9pQdEUkojdEaey7FAqZ2cqgXXgoLCMCRtzH3tQjQqVuAfqMrfSg8oTnPC1hyo",
  "key9": "2USDDcXQf5bpyQfPdKvLGCp2wvfA5wpaAkqfbdBo5i7NPKonNBE4Tf1enEwd1i8bRSsJBJzNiNCfV4PGwjUTLUEV",
  "key10": "4ibon1QexWFMLsQwnK7SHQ9DCVWFx2nSshTao9BkucxxyKXfXjoLT54Xt29h3WFQ4PJQR9q1gDhQBMN5iKGLcstr",
  "key11": "4Aac286pH1fT5QPBP12z8Qv8Cdsjs2oRBPv6qWyfwz2CxHFk7FpT3uzpsYZwJnFHwBkeZzzu3HoCAw9jcVbrcev9",
  "key12": "5dTqcL11Ldb1s8CQL9XEx1rkqRk9usM8QZs3P3VTTAn3A8niDXqaNKfqvDpWSy8Yn7T81xiK9jaP4eLYsQf41ECQ",
  "key13": "57AGjUSvtUY554rqyupf1ePaC8mfzgiAWdRSj8vsPEFYrbcrKaD9tGvfEdTcgdpynkATZCjfN55k13qfi3rhpHG",
  "key14": "4zEqp94kyYcdWd8ddyyz8xUGiyJmNNgBLJEqqgufsx25PinQJSUYRtsXFTH4681rHt6xfvuVC4BX3fAohvKELbfy",
  "key15": "3iFMPYPUTsoU8xiXk8gCYdrnRusjAq2UmX93ALtuBubtDf7NnTqPwEkg2UkFYLuwHSTr2k4dtRN4oM3C7pvBx5BZ",
  "key16": "2t68EgUqRe45NXa6EybPCuC7u8ufCW7cWzPi7JK1AWs2NKFGBW8taLy37DRoDeB42FGaLZRodPqt2HjH7iwTy4mj",
  "key17": "2hEcjyXZHt6NZ3wJHtnHfXezA8bogtoQeJZnhJS376K9NmgauNnCLo413x2cBRxoviZgp75o4NvESfmN5QeRpRoh",
  "key18": "61XZ3DfqVLd6GTKEzZbfvaZ8kFRiDY1JCvjxeW6jZKTadmV17KZNtfARELbMVL8R6FrM6QWPuf6aGqcMmvt9dWY1",
  "key19": "4b5pC1GwaD4ADjokoEwzXJBUwApB2T4eftdNinQDxMeMATwy1WccwcMo54ei5tdsKKM22r4Reqx14cizbiotFptZ",
  "key20": "2zBB7dKMa3q5V6isi7b9pb8E1o4vSFgMQSm7iLpH5UuQBJTvJ7XaMdfsv2bkcwW6jFjdD5a783E9wXbSzBMNKsSE",
  "key21": "1vZm1TTxUM3nEK9PewPbL1F3yegaRZqZKzj493SGrwV8bqmuQK4hgwqyLoTWpuktE9sYTA7QYYERavAzibARhK7",
  "key22": "43ZewjEvPnaxhHjEZumyeAyeKtUYxz6Bzf5XhZMWJEXFLTJMnaWexCPjB3WvrZZZ4d2dqRSpiPCV4o3N9NNC8GcZ",
  "key23": "3dt7LCk4MRjmHow5okvK3cZAWHz6bzfTZN2WkTEKtwUF32NsxNMZriTJ3FE6x7VcLhT2Ps3WtcFn2gx1Axm6rnsH",
  "key24": "4wa9zisH4PLMmwBa95VDYZhTPqopCrnFZT34Euh8qkAWqkfkdeAkfvzD4rgJeEivcBYHKfFAMNJFe6JDUJXrjf6B"
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
