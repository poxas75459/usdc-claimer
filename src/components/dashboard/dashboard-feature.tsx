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
    "5P8qWnXfzFv1HVLt1C6MnLvUVGFZavtcJrSF1dRGfMpTZNbWxkB34mYsx26bBviDEQxJHnpC8NcoxTwvHDhmZZjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kjx2b57gf7YxwCHVjzxgpDUkRDffes5EJC9bcc3dGdJAHuC9A1VCabjC9BX6ReMGYh7nMQaDff1SVEyjTQEm1Yi",
  "key1": "5GLSLarytuadUNNw6Rnb2bheU6dU9sV9uLhfkLveTf685K9sd8hTBEvpAScRnxQkpKaaJho3Ra147yrbfCCyj1N9",
  "key2": "4iz1MDSffwcXSjDUT9eousrafh3Y5UJ9R2xaReNbGWphHuhBqPfmJz1QbxBWeBLasAfE71oDgiHb1i5DHhuq2Jti",
  "key3": "4NrJvt6UmCeQ1gagXWkjKA148Z1BcbAMLA4Zhw7aFQaSQSgaViZsJ9VjZGKcEAUiULy7yYKX1bpMWC8BF7Cq34hp",
  "key4": "wD6gd7KPq6uJihU69w6iJMKnwiV9KmsceKWmobmgwvgT8rXnJEcv9uLwwwVnzwrZuoDHXLNsHJsgNSoWgesBYT8",
  "key5": "CeVSRjV4Y1Pp7qbVcfP2EbApavE3qGnwbH6ScSyLweDKBmu6qmVqyLWTQqXT92xm991sZVFERWpiw3Dr9qUuJSD",
  "key6": "2bMANco4183Sm9nSooPhAEXkwSktSkr7cvxL13MKjWBS7WZXKJW7tWXHsbUofq2wPeDNh6Z7FN1bvQiLzqDrvPoJ",
  "key7": "49y3nRsCrCzzjzLeuvRHTbiSrDJmnTmMDAU2rKeTnh94osFoy7w1Ww6MawrjzBUbdn6g68qvEtPYjNtSeMCbbriy",
  "key8": "3Fn9iP7dH3ReLpVKY4d3i6bQ8BuhvHLudLYo9x4AUiEL7F5vVXxLfsZD6dUaCXC95urXrMkALzqQgcnGaTQUWtqD",
  "key9": "5UXpdmJWeHH7bJAGviXRsuCheA9hCNmRSiBqm2cmLcoAhEJtRzEDjKPQwDKSdCRNnzrJ51nkRARmfthaSya6p38G",
  "key10": "3mBtrzhe87sAMASoLU9BzA6RCkNFe1NFdyxLGsfDhSxmCWis6EHcKNoRqYzzEU7GWidtAXe62gdUCziUuiXD8DA4",
  "key11": "2gcXfGsp3kp4vUxmWUH78fTdhbdqoSYtRdf5EFNjnqhaMf4k9RHv7WCXEd1vFpEzWH3mM1LVgpKPLecniAUSrY5E",
  "key12": "4tUkbuYyZGEM4aA9XUhhVWsSbnAnAadti7xfEmxvcdvaWQQ51rfFce8RRp2QqUS1vVg4G1HM3ir3RFtgrQWD7y9M",
  "key13": "536KyAiBPL1fcQgj21WEHSSZU1f1JJfjEWMSGvZFSgT4inAvC1wAJ7zR8fV3h9VmGxYnZFPvwerPeEEP5ZzTCiVr",
  "key14": "3M824c3gGq2jU9Vy8RhEHeuoSLGJctGovSMPFdoqomPvVmGXkHjNW6qPNjC6rmBtBqBnNJMRUk6E6hgNXYFyK8Qf",
  "key15": "2TXkQPAVJjVvq4ZMViXgatko8JR9kHEZ3ZyvyTbqiE6Y5myrGyDViqiob2huju2H2aQZzFJg3TYSesWN7aR452mS",
  "key16": "59xXX9DtJnFCCf67rDqXiKrWgzqvPAuHXwxZ7iZudP6ti55aCtWwPHRaz9U68VbuUZ1JiJE5gt3tCtjm2i5nmZ4K",
  "key17": "5r4inyoZKbPtQjM34wFB8vrfg5X58JDyUeUEFm11pCyajbDnpx7WN1WBuvPAiutBCwNmcL4CEDYn12x1CtjuQjQt",
  "key18": "3k4hsbtNJLCyhoXmeCfcGDoaoef21Kiiqk5cYEPut2wciD3vZVPkCdndtyM7MyJFtC5eMkSBwP2qfSGpsyhVwdjs",
  "key19": "4BdxJuaCqADHST7PGTEcVPvGUoxjr1bxcR1w68zZPTLqJAUj3CHgYqf7Ndi2HRjZmSevWHFinvewD6z9KdefsZm3",
  "key20": "EpbWCXvQiKD5iKvHCM8PXj58V5eqKZfpxSeei8DCGuGJz3MRc3DiN79z6xAnRfMv29QEq6MrXm59hioeU9PSooG",
  "key21": "4c9NfpB2e8QYEgURUSeMDE3rrb2nBmbx48TScfhmNCMVXPQQcitxFWndiAJSygqL6fui6dvaXZ4SJJ5bq4BJjGRQ",
  "key22": "37hftFEwhS1MRyHu36BU1jQRVW348HJjvEvmee4k1qz88AHxSguPTPhFhoqjfEwvKNY3vnot3ATZZ5AKFwKQB8i3",
  "key23": "3kuiWi6UfnRgbKRgC6WoF5s1QABxVyVRZLCgZQP7RmN7zmukLbQ37j6rqUUTameMb6aFpfR59xt1hjfto82nFvVC",
  "key24": "2qW6dbZvVbLgPTxiemG7xrvD71JaMRu8NubESww9MJRMZzfi7ie6KZmFwZtgKdVQTMy9UxubnraebDaNEtwtWrmm",
  "key25": "5arAMzdF1e3Qn2kikhM32kKC5oPfbp7ZETFuhFm1rPdubuv5egRfuHL6E8U5CkTZX5YVUQSLnJraeKzTHW7uCVLC",
  "key26": "4pUjLEj7fazbnuQvJj4eyoHKTobNXyet94ELFjV6kUCqynQZV5xkyQLm8LJAhvSqDQtP2PATEprRsXCiNCUafkAM",
  "key27": "Ua8rRQvWSy9aVeHDGeM6mdZsWurCvSt7hwTS45Fhpp6w5SXWHn9KgZe3PEpdgaWie82f3rq39K847fPemZJMNK4",
  "key28": "3kmG5anAcNtUsEw7zBph8j5Y7BeFJUSzZkxxXyZTRJTs7WFGeKWJPejouikp8s5GoTzxAGBZsBjrUzxsxEbNoRxg",
  "key29": "5haUozqsHrcU6k4GRemoHzMCHpTGD6YySVe3iwAoL1iaBTpRDfbw5DmnJ7T5Ez39QWXPZJxesCY4dHBgdaihpSDR",
  "key30": "41cAvLnNV4d5w45NU2akPdbBotXXh4zsSd6GtofavySzNq4tuXMtaE33vKGzd2HWeH46bgcFPHMUNzmYPzicLLsZ",
  "key31": "55A6xB4mHoihryZDERYNwiQaGFKfnEiT6PGteC5VD15A7ANw5cVwZzTehueR6D3jVn2K4STRVsnUHFcRNvsPyxev",
  "key32": "5LqduwN8gjo1mj6FtsHFfL7qKtfAtTAL1LuE8d98sn6A4jdKYhRM8BBXGjQE3fEmL2yLmf8q25M4XPQ5DHfK5BwX",
  "key33": "5EdSBWQ4tknW1toLApRwSsrY2YKZy1LJMnYAM9XdpXXSNRMJkRfdBw858ndjtveqrbP49a1WxAoJLTpKZLMZ4U8A",
  "key34": "48cd2y34TtSXSUVkosDbqTgKE1seazAWtzPzP2NkPNsb76UJgP7W6UZbGViUkBJau6R3zgpSFmX27zTZc9DofpNB",
  "key35": "3Hd1f57zLyeCoQuiLsgFdwUTa2LUq3eaCaoAUJk1B2HUavN7nEx8SHwZQynprRbaESktb3U7Gnws2nv2QDUo9iPh"
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
