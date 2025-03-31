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
    "29VNUnTJg1c1Hn1WVhymahLjr4RdHHSmeNvx61Td4K5N3YykabKmzxfLk3HypFgsUWsgcg7ScjPNM5SJ24hLW3eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WEKwRUzc72pSWWRrnbrKDvrVGdda366PctstjAmV9xAZTSTf8fi7ygd9obyH1fGhwqGga8qzmENigPX941hqnZs",
  "key1": "65QmZwUuNGbcwoR9kFPh6vS8BdnAqmGgtN5Q3RuwjwrWFkucReRxgKju6JiGs6LayYaCU9JQfZpDa3faCtjzppZC",
  "key2": "4LkP4uquoVE1U2ND9PpcvKAGePkYJQuQSjgrXwHkBCWV9d5kSezyFqfczbrT3DHLwPyEzoM6UN6JQLPoqrCDCrtq",
  "key3": "3U4zcCKhgZ8YjBGngKz1rk56CRFGJh4NrGoEPANhUgVkNXdRNCduu9Amrx8x2j9gQnj2d6xbGNs4Cv6rUqM2wmD1",
  "key4": "5U7aSk3GfNq919MjbiH1EiqxKog3tVX4gLE4os56SL75ZuYtGkhLqWkmiFjFyKZqeBLmLQxJfjZWzCYkqUAL1ber",
  "key5": "4yGUcWBWRBT5KEwsiZSBjC3CmtESSpgdpSGBZaA3YQyhxPJtQBV6ktCemfp3jHNfxAc2nMC3acB85zmKorqFQ7BE",
  "key6": "3m1cSEm3uhrT7esSQtRvWPqWJAm3HdphW2viEcst75mdRZCXYC2poczyoaiGTbYRg1zrTCyvAU2uyRxK6689vw5j",
  "key7": "4jbkv66PXFf2C3GpBkH8wZrHDWkm8zexJCVPrTxbYtYUmr9yZ6BP5si3Kj9jza2UFyDswzeW6sabHXT3yGmeK17N",
  "key8": "GoAbQ1JS49oNirY7kNhLFzhfMssDBGPLhpLzFuzZQ2ExUF2MnpsRFC2oQVMDj6dEXkUgp5Vy7nVHVon6rLSRw3d",
  "key9": "2QAWyFR6xv2b9GfBCB9FFke61uwza87Msy49dYDktEbJqv6fRjrkpdk3P4YeMhZwASR84SU2MtchvAtsdTgchUXS",
  "key10": "56PuP29UB8Z2ztkP9xiPfGfxrCRRCNTcWP2i6jJkKhJ67C7eCMKz9z21uFsxNtUTAwzjCaTgvWN4Uo4Kwo8vYXnH",
  "key11": "5FcM33k818afyxfRw5YuoyxRfd4eLKKWqPKjvmSNxDbHq2C1PNsLdJBXgNWsYK1edLCGJqW8euSBiQ2MkBmHokBg",
  "key12": "2x7H9QKY2JkF6n4KwiH87hkxhfw58pZ8jFop6k5YapMMnAfUcmKsENQWBQHwbGPjzGiET5BuF4rXrCsBwUpdnvS6",
  "key13": "MG2VvYmhThMZ96Ni623e43hZkNZPNFYwwP3pwfdkK4miX8nvAho2CfHqsMVrv8w3VEZdusj9nShvvtRNzZXUNZA",
  "key14": "3uGrtspc7aPMwaG5cBesRhgBbBRqe44vuJWdvkb44k3Fe6butd5BvaoAhCtyc4qy79gsNEsP5iAtHgFfUhNF6YBo",
  "key15": "2sLfctHnGwocSrvT7BdkK37q1cET23pohUL8Zsusp3aQLrSJtCFpxQPQFBahyjkjtNSegiB3uqiFS4QxGvkNhDfW",
  "key16": "dDTVVEQGeDF64KRMNzHpRZDkfC7a1v8JZrp3NdQkL5gmJChQ9vkrVZNfo1xTyA6M9ucnevGzGBnutukffDyoqak",
  "key17": "3D3PGgXRJdvFNAwymH6xZe7fBaYPhda5s7nQ8VEpsfXCcKf48aGrAqUeCseQjU2vSvALud5mPFSBWAsj4RoYfu6J",
  "key18": "eVBHsC2Mc7dJXiEy43tbby1nTEEPRjErt8PZo2rWS226FMYpE4sARbCMdH2jKuRp9T9NXjUTyaR78ZUaEiwf7gQ",
  "key19": "4yEiLmf9vskKAPePXgbrvusZFzU3RuunBFCN5SbpTA2fqZiMbUy1ooFD68WytLtmyuB33jsFQUZLdwcsHj6RET86",
  "key20": "4gowQBmLMMZ1S3nzSCcXxmJsoKZEsfXHXoNy8ygUnc5gRsCxYn8hmXXiukjemcieHq1pFJ3pFZN8muVnTtE56X8S",
  "key21": "pESGrQ5pHveQaFLKd8Tw39XeJB17TVLcuTQNcjQV1Z2kB5hhFPXNiAgihuVDe1zEdRoBk6VaDpVov9i27qACPtD",
  "key22": "xkBegHoCWLEdtEQpWeP4H4FHwpvaNn2hUZGmbupzDegwaPAnwRWJq4q6XhrBdniN9YGWXgZe8ZFmK4FbCgWykw7",
  "key23": "4bezzWwRRmpm3Ltu12Wiia2J295Kadtpw5Wrqb9F8PAxGi9zCskLi56ysMCh3kzEekBEm2XvxCj6D2oDFJCR5Yi2",
  "key24": "9KMDZVHGLWgcTUzzDFxe8b4ZF8yKPjLi9bi8pcajzkL8kWhCU2fS38bTd1tXB1b7kMRy6xQ9kuPZsdzwbNADenr",
  "key25": "3Lo7JwHN6bzwpVjnzNibRiL4zqrLpUtb5Rx2JcymmdnzhVjn4Jb1r6zioYna8XfVwz74Xr1xS4uy51Eb4xbMg1Uh",
  "key26": "4LkPdxsmePTYLjWfFRsoFCkeUVfcpMiULSwPE6em55pJ3YhFxQNFNmhXPDErK5W8wpksyLpG2sD1dB3eBctjKKTY",
  "key27": "5eSk4GJspAevgTAnqodg6fbWSBTidZdJv9NNfQLHVKs4JHecaHwkJt85zD8whYP24uC9ccRRUDpfaF5mwGvuP1Jx",
  "key28": "5mCR6k7pt3AkxQ939CoojMZRCzte9u3EMe3y5CKjguZMTqow5QTfXnGC57RagbHy9mCFujePTjNjDamhjjw5bMp9",
  "key29": "e9Ha7WB6ArhvB8xAiRRMknKZNT79viuh8wUCDYiyJRqqcUS95wNd7NXtV5JoQLHx9RXkiro41Pz48NHTCHC65gQ",
  "key30": "3zvh2CSb66YwWMbaXBtUNtDczDJw169SXr92QUJB2PjvyGNa4GQVLxz2TNFMoQqq88qHuo6zu1C7BeFPQsigRR54",
  "key31": "5YDYLv4suixXziqtaWDTzsuJCB8rAqCEYF7wXgtQiMuwcmsVgCsUxL3oeg1My2TXyW7cNyU7fpQjpReaMoX22kTy",
  "key32": "2vCU7ECepeEv3bLL1Z3S2jHHGcpT8wavD6pUEEBM4QD44hkHcqSPStSeYdWjS5qLC5YbTBjNHLLBwRcsKemqVCH4",
  "key33": "5jMzuzcqjkyeFFzHKnuW33Gh3TcHHruWmSnjN5A2yyzeqqzRbajAyZWExkyU1RyynBYFSrd7oqhFxHPiDYE78Gy",
  "key34": "4LgUv7zuvGxRAEuuB3PVAfzqM81MNKiFn7FRpZLTLcZbJksfmdZzwkFbW6myLiUvpNCNybGg4Ssn3Byy7U6xtYJb",
  "key35": "u3kUKQrPcGiboQ3xeomr4iZd419YDi8JYjKg15HBgir4khDR2Qaha6SEaQLdogc3VpN5CAtyBWutm6r5t2y1CKR",
  "key36": "2XbQPaEZFcsSXgXpc6Zhy9mhYw8EMfwXVZKfpPeu6n7zbuMnqG5WvGnShAPE5tntiBG8H5A7KizEE2CKMeSvHiCr"
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
