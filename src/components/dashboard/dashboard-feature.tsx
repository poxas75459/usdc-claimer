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
    "5aRks77piju85GtoH2xorKFD2mMWRPtjxoSY3DPPtuddwGpdjdRhC47Tunn195kmyBnGcgCPGfWQotw1rsZv4HEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sZfTd3y3Qe3pdPHHMkks6eroDoW2gS8Nq86RD7Vqkvjik8cgFcVcfjpYPdYj4ZKFNbruCqitKexR9Ew4j5Tpoja",
  "key1": "GgpFeqe4BxwKYyvLek7DjX8HbBJ4Yz7hPYbmzSq82giuh9QWTSfWUzvJbWoHddWzMPERyCuy3qj7TNTfmdTkS9X",
  "key2": "5uhc478Vu2K3eAYuPqjPeAi1ZaaEYzUJeCEjrdcqkSD7J6uaQMGddLT8gAyJsFdrhQscFbJAevyKhrW8TPxzRjv4",
  "key3": "2huxXwjmdFZkUqeQ4ATYQbJdGjnjmZMadaBWKwyTwZzaUdzdq8W9G1dBUfqRUrjh1dh5bzJosN4Z5ADFNdxbMgTS",
  "key4": "5Z7Ftnbfqb9x56D8DrXnWisuj9t7w4wHSNm1283uiz4ndvJE5XPi1i6jRwaAcCCqrKzhC298XJ47JRdUfXF5sPK6",
  "key5": "4eMCc5BNgcwVEFv4z4GLGG9NZrjVcM8unTYkzLUnvjgjMo4PRkthC4Cde8D53545bxQyUvHaPF7BLgkE4p7NqwFN",
  "key6": "5rGdqN3rQtTiqEn9FVbETxKHzuoUeyNUu1A4Xu6yX1nwT8vDwPJUEw9Lu54owc7Cz9P8Q8TcfLo3u6Hvebge5uPE",
  "key7": "mk7nEfu2WMYvXsWJbQRknmiF8v4jZAEf62yA1uWJ3zCg7u4dByf8uUbYcSfmA3fAvWNfQcYVw8dqsHFaBdFzicd",
  "key8": "5odtzq2AAZ9vgeR1FUF2FhxjQPp1hS32JAEDPNoRkr4WCTpDaZ72vBASB33K8pi9xpXUybNzPg4iUU2p73XjSnUJ",
  "key9": "4HQVFRTd39T3dsuiEh8RMNxYDckXaJMweemXNznRunYbjDAHAYKtXHc9jFL6d5XWiAZwnZUwtms5Tfh54uJcVtMu",
  "key10": "4AiKHejnT2QojXoaLGuy2vDpiwMymHwEzeHJVDsAb5uvDjyVQg6pkUfifYCjcFLZaWDsxc1h7gQDiP5Cx3MEe6ou",
  "key11": "5Q97AwsyTjgZ7YaG2WSc8UFikt9vDT9yBf2Uhg1iFXjSGmanmTzPgxhVeRCE1PDYzxQNip262L6upgoPjAkXnkde",
  "key12": "3sZ6dgAcdkFiw2CCXASGpQ4iaLcUYVughzMPb9VWAT1wqcmvJrhJLiAY2BQChgEtwXSfiyAvvfDw19wwt8smhgcT",
  "key13": "23YAeZpdiSAYs6TtNs4HQifQiSrmdv8HMtSUfSQryzZC26qWS19rNNsnYWBtJSuAEtC8He67QaHKUpEYdgEQdnYM",
  "key14": "4dR7CEzzSRzoXML1RmZDh8V8rHBh8g7aBzLwpEq6q41zzh7XjTZ27Ao1KrME15XZyoXPVhwVo7JSDJ21ze27jKq6",
  "key15": "rtMsYrLMmTZUAk1h3vAsjHM2zMgqGdRTpyPgXYMHaXyLr5iUjA1FxXbNySSXmhspkrDK3LgM9YtswRALVWpndbm",
  "key16": "gtPRrcBE8pHXPdNpYocMigXBgYV7waLx5oG7skqzoCUhif9d5TbvErm1TxJqB1sMK1kEQRzvu5rnNmmF2ZyYUAU",
  "key17": "2gTjuf31PV93CnLLUUuhbk31ZnMZsmYVb8mdCuVdBsPxteqeUDkYQNtFTSPd3S75BqfZaRyWZUGF3udHLTxjLymh",
  "key18": "5p7MV7gyw6PAxNxHWfJEtNWbfqWr1Wcnok4T1dSHYByDCXU2Hc3Q1qCJgdreWPwbGCK186e62YxTQwnpyjeX7aMn",
  "key19": "3HEfPk9UCspqc4FSKE5qoBGxVE22uv269xaT3QeXcrC4gRPA8YBGhUgm7THCtVxsB4JidkJoLHR4sPfEbRbpEyjo",
  "key20": "3ntePpohxp7dXBo1bdDBgCCG6Mm6mSJYnqAJPqXSC48f1QotK4ieeJF3Bb5Rd6WkZJ9bkCrpn16qAY69iDPDFVZ4",
  "key21": "4V4Fag7RAikvPbbVDCL8KQ3YYybeJuTyaoy8DSJh4od2LrzP94PSgYnSd44Xc8maw2fJbdkatsAAsAjS9ydZ4uhx",
  "key22": "548NXaEc4xxHVb5psSiQ59pv8NgmwNgoRG3pRbHVSK76m3edYmxoTGWkYmjMCfPFY8XtNJFpnTZXNAKGQsZsbjfx",
  "key23": "2BMm5fHnJX45UW4duaVSjwsLSwXUCVnfkEatobKSxeKd1z2AVkBE9MPXuyAmc1EBduzRyuw8iTY6ybm5vUz8fkMt",
  "key24": "6dFxAy81BR1JNA5pvzqqe61LXXZk5tbo1iowMx32k4n61mWvh8eXSK52c5DRXLLxH3rPpsQ4Csdmz4w3rxmnxZ5",
  "key25": "2EPUFke7wSXXFUBSeBZrXdFcmn3sM4wVsPB7HRwNjfdqTWx3NsX4jjsFbCRzdcQfjmZksnMtuzmEwuNCLJtoZ6SU",
  "key26": "4ULEWoQASYmmssT5z2bZdiguPujFKrq9UAednPjn9AQbMkDhxV3ZVhjgwSBQ6pWH3jERm3F2cujkACFP2EG8FK76",
  "key27": "2PkeKYrgbsa6Yu2dnoKDZfBASyQxPGVSbDn7SDgyVH9QsazgoEbwVbnHWLy9rwQa9Ue7De1EL2ypYwGXigzxyi5H",
  "key28": "5Qfm5rzwsvuex8z5ZWdqZ42hpMzJsfhXHxeRiZh6gfbdexVC4gSJ2dKzhT8dS4MjHADPxmr2XinCK4CM8ZtdpKMX",
  "key29": "5JA3Vz12rwQ2xVcjcrp6fNCBboKA2BK486UZHSPeDCYEDqkXMQxC6xCqsMw4bnvPV2ySUtjfEMukUSTzaSXxeh6w",
  "key30": "4hWxwzCYbELb3rzQgJAMg5TGxS91xeosAb5KtqG8yL6TBRG3oiW2DdoQKjFoTkD8jGaBEPsj8TVpqt9mE9ruhqj9",
  "key31": "3femZKBswkLLjM6zGJr85s8U9bdALybW5WjhaLispB4xgsagFB2urMxHfQKbPeaX3uLzQkghNN484Bz3KgCWjPpX"
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
