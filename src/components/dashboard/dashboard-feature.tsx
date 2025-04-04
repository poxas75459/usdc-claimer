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
    "38yePhovdrePKzCHGxLZAnhAwz8KeTEb7Et6FM3mhV21uHdL7xvrdYzf64Vcpv7g6wDvc7QCoYuJzx6aqTE6Rfwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35caYdUD9tXV4kbPou11htV8kULg7fAjTQMKXCwib2Ubn9gsz3kB4Rr61S51CtHa4ZQQgBzS8xsfQY41kyezgFp4",
  "key1": "3755C6iWck7FgBU6fo7Hz7TYnEiHn3ir8DfY8Le5CMgnQkUvJFqcRf4Bby5cLgMr2qCQMo2CuTTTB8TgRSbQ8Amf",
  "key2": "4tmJ9apapsyiyDhJahkF8XiN4wMpC7grwtNG72cayQsAQwtVvaS4CqnzF9m23si2N4MERtCKwvjivg5jmTvzEW8r",
  "key3": "4uSQR4m8Z2oan6ANKznf8CYdHGfetizruvBVhzQUWzq2hJFAKK17ybp3g8ZaSEy7ToQLzcgHbJeutzbFCQiiQhsS",
  "key4": "5N3Katikao4HJyLD6feHTFGYmjDUHaPXhxJ2zQK4C6qds4TfNS3BnZCfquwT6U4dZfD7v2BPmGPJqx8X6TLDEytz",
  "key5": "4mE6hHixxXvEr4R6kDQALfdDZ81Th9kmofzoy6Ms6MJhnhYNuZRncLEQ3PrPFGh7H31Ree4JHKrKDsqpSpX5Te4H",
  "key6": "4Au22ZHW78dqfSAkPmNzCn8cPft94P2BpqAwFrU2EAsnTfG3kbJUJwU2GWEHdSqfMgrtD82SncVd5W96rETeZ4tD",
  "key7": "2hgz8Sv7y1XwvxPUpFaGLYrhdytDgCzpaKbLoDyP1NJatfsoHuVP1EgSmMMTRpu8An2VwpxmK9zPyhKTmtPdh3jM",
  "key8": "5ZWpLw9XvEVVoHZTu1hkCtPV9nE7a8S6YhRSgnLupnYq4pHCyPBzfteHSnhXS8SNTEgjbrGgncY8vKMpoiZaLgSb",
  "key9": "3KFdyqygusjx1VqtuVp1ndyoAGZndTRDFwCZeSE5NboE1zjZuKjDxvKfRkDvnuut1pFBbsQS2xcWEUkBCcuCoieh",
  "key10": "5cMH5fQk4L27ViJLSiH1QmwEzRwC67xFE2VrNG9m7WymjUzUKxkXsyWdg1zHvM7zhq61bNan8TGJpQ46qN3x8LP2",
  "key11": "2sFbeVNhD4Xh5oNyWkvZsJkQVdKabaEu9bu1LDZnQTpbLQPPfrebQ1a3q13MWnMKA9gpDa372Ka16s2vmQ2Fss8N",
  "key12": "2FyWz6gkK4wRYw78iBqp69ti7hgfgfLM2aJZ4KxVEU78Ff1HWACQh4m2paR6kUYhHkgfp3h9YMoekAdTMMdhb7B7",
  "key13": "4xYWekrYMqPde5v4r6hB49cgECi4SSt2THeVonXywjBm3CQkzdfZSc9iQKGdN2rtfCbWRcyhDBDwARxHLPosJwud",
  "key14": "4kk2LVj9QNMCTNwFoxDBUHVMuCyxPyGF9zhtDuABfoNSN6hhoaNBv8dc1BuXFTtwcL8BVTwCZgvV4EngJYkdczJ6",
  "key15": "54CA6NBdM2GLsEEuc9FCpR8PJDya4SSPCTM2kRZMnUJRuUNfGnbVbAKxRBb7y9ASyri29gPwu4G3zHweGzyzrhSg",
  "key16": "2AkUbfQdzqfJ3VcHGyDXBip6qYmR1qRtxisrg5KTyTVTXegLDfATatXdYMbkwA9XEcTNWJZ3fquXYxLpTsZiPQd7",
  "key17": "2BZLxzHym1hcqxL1PiuoQfYcuy89LcPAJsonXo1uJrSghrS8kVVd5GH7L8R8RXzLvxGaSCk5XumQkca4ErzxxET8",
  "key18": "4enRvTzFBAUQ3N2u5H2awz6Eev3XAv4hn7Kgpjv7VjrvVw8KS1W3TDkfiDNQ3JMRiTBKpCqz66B4G8Q6J2Rim6Vv",
  "key19": "5x9Urif5ZYmNDRSzmZCawuoZUpDZBoiStEhNuefNwMAWFkEi3nnbVoYSdwH3YEExztyfW1yqi2o38HAvnc8JWQ8r",
  "key20": "2FvUncb2sMjrPsEkXZU3XQj2rEwCTw3RSCfkPEr73aN6KaCA7eHYBmevEAMG1xqNQAgL3yAahEAHxBazrUtAz1Nu",
  "key21": "3UpNey3ER7NK1VwkrNbYy6XA5KC8fBHPUMtiW2cmEK9BR5mu83o5bLzPRZuskUHVWZeEnykSgtxNNbFG2FNZ8uvb",
  "key22": "36ZzSFnRzGfeDdh8BVj7tFoGBaf4sCjXNxTZ7L26YjZuS1Jt4UHTMMooLB7VE4DSvEGxQ9Z9Gex2MtrdmWVVh56i",
  "key23": "2wbQ6CuoA36Js8HtUEmaZriSYAVuaSoybnfp14tcAg1ViyiWM8s2JFeuzM96CEYJy8QUDege28SJhoUBnquWkwNj",
  "key24": "ugbCdKBW9auiUk9tnnuzDsCEvSV4B4sycjm48f9xEc4kwByo7hHSJLR34mHMBMrwVnvGuzoemjVFApLtsysWvGA",
  "key25": "5mmfawvdbHZH5hS971GpesPq7db2nePq5YmBLsgXpcEb68ST5qXdL1Bj34DQuX1od5iFwNs4rY8hDNUjL4Z3tVms",
  "key26": "4FA5oW96HF2HCKTje4r8bXSUrwnegQVDxYNzVAwAzpRYiP3dwoWEofko3KhA2KfmRQvhJt4uXFia6VGWPJm54KMg",
  "key27": "2eFYof7HytS8T22X8YUD2q1on4XYCzLuzXPENZj2SLh2jnpLETuhAWFVtxF9YwarnMkcsAF2NLSWVc1p5gmFrdMu",
  "key28": "3f51abh4LajdyPHchdwrF96Hni96rjMvkFMxfFh45YxmxC6sC8KAWVYHGDxxCQj9ZjNtCXKthSGPNzqB8RNPeakc",
  "key29": "4G5jJSb9U4Bja5TBET9RYaCZv7Yh2RAzjt16bystMje6yLz4HKzv7Ng6aBMHZF5KJUXP7H6ecPgomUiqsK5PW3DX",
  "key30": "kYWFZByCAnFcgnSjMmmKywEeAnA5Hz6xoY6S487bCx2BNf7KUiixPQDrjfYkXt4EXd8ajRKquAv6hLskXcNBZBE",
  "key31": "gaPDjii7za9CUg8Gef7NmsivJL6QqrmnjCDqWcwwwnEDpFv5JtkFKSKW21q8ych24PKDPmA8BJaAZcikKhDZ89C",
  "key32": "5THrurJeJQnPDZhs3KjybADooTZfCFDJVW3gtUr2FAXegVZ4NWWnmUFtS5QvU7nh41w14WACTHUDcBg58a5jYDkC"
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
