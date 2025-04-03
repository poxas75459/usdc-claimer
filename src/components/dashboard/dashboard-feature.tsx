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
    "4Hgy7FTDnUDRkjq5p2bjy9vsTZMSJNm7e8aJG8vzCxqhJNJcmTsXHDUkCi3v3LYLu7JVaJ6GhDCykSLnPdhGWFG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BU2S2C6UMurdTDcqo2N7mHHHFwwJqRXEwvA9yZNXG66QHGDggEnpTwAHZNDb3aDT2D1GuguazLNTQLa5fexzxaE",
  "key1": "3kpvxgJhtkcBGXUgv24EfEvxhASSo1fZ4Kb4Hssn2Ahpe4r3avMGeSna7woj5kbGKtYzhwNQ3MpNujdW2VndaMQS",
  "key2": "5p7Aut1Bn3kukpfmFwoMgMwQwCPn64rnofR252q6azGJqPQRJiQiJBFcHg6pos2kfHeBXb5cqjZoYwJmVdK2rKQU",
  "key3": "4iCnG2uymJDpegZYiTMqmxnZfLgwvMMVv1uEzvttC3RFCsr27m87EJdySB9aZ25zwN2LuCyrVLcNsxgL1Vv6Sn1y",
  "key4": "57rgJUMNgjmLzQWVyAtEsGG5WNAZUWFB7SBJg5bVa4MkeKmbKHmcyEvhedRXjRqEJMySC1wKucrqUgJc37gcR8Qr",
  "key5": "CodbyLDfVSLPhSGxHjjNehyrKaNfhbK9FFh3c3KkJcVHWAZD3NuJM4A9aEYNMER1fwLEFwr8wx3vjfju4dPPw3Q",
  "key6": "JsqcsAG9aa4ZMebF211aUh2fxMokZuXKubAR6K1i4xkTjv3d6pFX7ApLvWrbZquhEBxWghM24r4aAD6NZ4bBgJA",
  "key7": "4MZWLwGjRUrMyyFthAJxmf81Km1iUYg5HDxQ37nbkebAZsiDGyKRKQB1Cw4ihez3zAL7NiMv5qvoNCkBB2kZ6pNi",
  "key8": "4M9NytoXmnEF7HWc3ZFsBWQnZTz6jDpVPwMTRUHFei3VxuvPBGsYhVNrfkwKTkf3DFsiFy1krpkqBDuURuL9AfZN",
  "key9": "2JpDYUas8oBg3Rg4AydPd9vbggeMTjDjkCVmtSVWoUBcbB859CVeg9ypwXmAxs8mG1TG51ErhX8V9u5bVH9U6oT9",
  "key10": "3LtAY9XPX4HVmqe9NZQ9BBrSU8Mq42HMRvExyPvLmuTYbBG38J26GcRgTEzmmSF6aeYHuUmcXvHCV2XrWtnWQ4R1",
  "key11": "XBoqat6RRRhwZXQs4NyjkV32hfPimAaFPhPEBDzXgAioByiU2cUeZTQniDaNG5bpsekS3j87DbRfy49GxTJJ8yF",
  "key12": "5U35reSo36XagKsCx2n4665srrM4YMdNzDcJRKTxRF2mNQJecfb6CnX9K1i4JUbC6dUuzPyvzhvRk6HCsvUFvrPd",
  "key13": "5Sy85X6QaFemp9akMWEEgYYya6nKpHHVdaUNpu38gDSCuAzAjM651FYpBzbcvfqUZizeSvNi8n1tp2Zq1i9JketD",
  "key14": "jdSf31W7BMHwcbyTA2mku4MzMBATLoAzCkzgaKwtXanThEfZ2RTNaaKUoPe15cQ9wB1VmqnjgToqctvuKt5oofi",
  "key15": "3VZ2nBVrynBPzw89TeF6yhDRBXGHytrLp56TdVqJjbvRByHjw9i43XKUZwyuwGR9gGVuTrf7Mig24BCkGRMNS82y",
  "key16": "2zWkKJrCBmCw5y1UCWG4XyKb8X9mEcB1gXRXn5wkRqmaDHL5PGWHCJyz7Pxf5hyMPBd1zjtDC9xCNXhWNmWq9WPx",
  "key17": "5NCdhnifQ6MkJ5LzBtqwT6ogo3Q1gNLuHtKKLRjX2YuL6iaEVgCaWgDWWnKvemPEsxNBaow5sZE5eZCrKJXriYHB",
  "key18": "26gZrTQmdRdhJ6pyPnPWP24GRUGhFjazqrMgNfYjLoo2ikW2VYdfUuLNDEY4ob1DqQfjmPqpoakL5wdYffXSU7kk",
  "key19": "53pVPJRQaFBndv55ZZTfATTVazC9pKr8MFoUF1ySdWcY5smNbC4Z4F6W7MuV29SsC5PuY7557MxjjnqtboLtHYxK",
  "key20": "dNStxrKwVpah76P1GHuBMmBxVG6cqoWrA3N5oXN1APMhbiQSNbtY2VYtMQnWovFHHKLmASZHo41hCFddgcPFjJv",
  "key21": "MEYtGVYco8Sp2SNPunjqooNkfV8BYvSYo1q9MjeBwPhAputkDVHH5GLXAKzLxPCeJDWGSmU5mbk6EXdKAvkXwkb",
  "key22": "41R9sahf6N3oDMUhLa77pegff4UbGxyA77N6oBoy6BPnKTBVWTc7WVxAuVqbdRprCpkKw8NvWdwyLQbRcgZBKoLa",
  "key23": "2PymLPafuK9NdakhkvsSJZNpqtYDMXWc632hZ4GWQbwn54ZTRbBHLqvJj4m52BKm7uNey1KgkWug6noS8HB3sF7S",
  "key24": "5q6w67qfMzB65x1gPvp2ggEbNZXWxP1Ytg1LXYrnNJpNcncEZBEnvw5CGugySqSw9tZg3dZGEB55xDYUubmGrVE5",
  "key25": "5dRQo5YrbTSbhhyLnPwYJjkh1TvtHTHhj7BTos2NSWf6GHMwnefjaXjbr7inszgtA69eLPDhsdB2Qd4cq1sf6iwq",
  "key26": "hWdqZW3x2G6DX9CdCktraLUZXh7ZMGJSCJ2cfuXaWVtEEzQzEFv49pTrqArbpDqJFkmwtZX9wVqgVHEk1RKmGUW"
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
