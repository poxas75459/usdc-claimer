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
    "4WyGtFvHcULATLeCgsoAxQwA3Vqe6iwitPhSpA41KJBGfmVMyDz7mN9Xa1pHf1Tx6LnkghUt5SiM8cwtTAaW6E9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q2otYExpGXmvkeqrxAHwTcN5mtooy6X8wjNNdaWdoSUUoxNLyAoxiJDxP5iLLyKbX6cgUQzoaaQrbM91JYasgfc",
  "key1": "2aTHjvBrCmJZgGsydAv4pJ2YU9P86tRP6d7aTzj1qsLfca69hovA6abdV9uC6QEhsaWZEDSeAAmN74o2QFwdjcEC",
  "key2": "56XhV8ZKXXDmsjprmwkNpWadWSh3iwqKTTNhV4W3KbvgHSHrviCqZSokhq9mCCsJDj4VsRez9ndbdG4FrW3MVvTy",
  "key3": "63t3aeSWXSSvtTjrvmzxgnbTVFXBUgXMZB7344f2X95Csti8WX6yvqVUas87CdBLzkCm9Hq9oZZPgJVtv5tRFaSw",
  "key4": "25t1hx3K3q4FF5obYogx9uFeYHdNK1viNLzcfTsS4opSYwtjq8NWoUfScgmFT9gfZmueXBzZtydgs5vh8872cqhL",
  "key5": "37jgQ1mCgBLYjaYhgULEFztdMR1bUEfqJ6tkk1xupYcGAfUwb5BWNFfpgzh8gyjBThJXPFeXwyXFKqBRWdGzybS1",
  "key6": "4ZWTmfyLb8EY5vaKMrL3WVTHw7on3B17JSEzAMbHzyBiD3Kn2dgWBXT26uYn433P2Mm6QS1za5EZMFb9te3Chni7",
  "key7": "4FZw7SQ4XSRRmtSpQt2UQMLDWtQ3oUbGeL4W7DqruxDJCuViM6vvcyVqoEM6wJnDMUyvAtL6AhqNaqSBZS8jmAz",
  "key8": "4tm17afUPcbH461qZuZJfn1R4A6T3pUjDHqk8ogZ7aDaD8eJmkGRqzRKTXbfFFt3GboLQv35fMEo8edQ4Kr5ftVT",
  "key9": "2wYKeeb9G5Pa7ZAAGtLSsXf7gZvgBNg7tZwghZiztRdLPC5cQbiKRaJyfUU2r5YssbCPCchQdnytQJJQAszCEKQ6",
  "key10": "2oEhJig7vZQGcSntHKnjLD9z6uz3GLR4KgNhRStuTDcy5dskhGHjJhJBdtkAU4bwepoP8WXLgYx1ojTgzW4gcXt8",
  "key11": "msbzSMGgervdmwiJqC3LR5mvB7t1h173Jw95LM8P6gVabHnaVbFivn44xzCtwoiPb5F44dH2RrE9KiNG27VgEht",
  "key12": "ThftepkMULcUCKnrfzVnmpqPJqwSmS11XyGsCfqAGWBRbdHDH3BrZbXJR9c897a2xWtcsD6N8DvNJtmWooPiDMd",
  "key13": "5zDrixHhMpkM24j5BsphGjDytVZ44uehPS47LbH4zuSCx4bmmeYBzt3UrGyCuG5CgMHMUv7kBK3hFVnTgnne5LvX",
  "key14": "5earqEXTK4wYwGji2FW3BoTyfXfEXcELptVf4MyeAp9RmFmWZWEc31dwSdjwHmobxUhSCZXmoGQenM3GCZKUJ4DT",
  "key15": "5nk6g7Ev6S35AoeNUMrgAqYQNBA27VQdLZY2PmrmuoncA5Z4ot5KYggstBGGMyQrXZ8tm1f4d9P4pBuJbNKtuDRE",
  "key16": "bTVA24S8TSmzWHkMoG1MrDY3EmNXfQXv3EMn3MDK9PGf7rTyzXPfn2BjhiQwD8Apqsv76KHkFtFiAKNGzNRMPDo",
  "key17": "5NyCzEGw6VW859XH3VP8kJMHjPo9EePRpxUuF3c2NJdqzfK39D13AwvZEynCNgZphGtqBGw717syTHVUvjZmqqgR",
  "key18": "2apYsQH3CXGFi2D3evzxQ45zGhFhbzx2ZWwMcQjBdgGsReyr7mgSPZZhmni869M6zRtkPnBEimXvMaZdzAALaNzC",
  "key19": "4Bs2YP9Dx4z3BAALwV9gSuQvwPA8W68deq2ehuiREX1Xy56zWXKFr932Af74qSNfRRLA6w4JhANXTRPdEevjdsWz",
  "key20": "zYtp6ScFVcaDCoGhnu1eHkNxbs5TLtnVp4A1yEAHw13mFdYSfsEGFTEqYGvxQ7XSxR22H2VwoNmZzREVYyw8j4Y",
  "key21": "643sxbss6HVZQ1aTKZCHLVWa1Rz1uuRuQcW78rY6fhzG71wZT7X4wiyBy96qiZZookRz7pziErrNq3vEciREymtK",
  "key22": "3oQXAp3Fhz6fyRGqkqENNRfn7JdBx5oZxPDLHXEctNu5JtcoouzQHhR224xvrtujoVPheAnLgnBivPS3Qxr5yhjW",
  "key23": "nrNfvfKugLbQJ7bQctA4GpA2XtvXDLmTffWibU559HGFzmTuW5xQqu8LQmqNXZQiRSojoE8eMrPvi4ucFaknpBG",
  "key24": "Yd1AXU26pTLUUtqjn69EZLpJCuxwqHVtMU7hUckUBqh4oJr5GY4gNDGcPQFjGJ7ApFBjaDYX1gpsLCbMjv6hT1Z",
  "key25": "JSrxSivm2JQWFz1t7emh3LcTCt3hjRtDsjmL3Qr4E8Nde9y3Ux6hkQZckSDck3AcBJKT2PxjUC5oveP7YC21xR5",
  "key26": "3FCnAbk5UHeUuMFmuTnAxPZ191qTChZcAgtAendYPFqSaah9QuViESosUwAsXZRE6iK4iRmu7WoKSuH1i4AmbWrf"
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
