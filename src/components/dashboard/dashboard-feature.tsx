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
    "4aC3LxcSj9trYaFjBbjYJAsT7X5vxoHMb62QBvnbCmJ7DsVLdqoa88YHv4c4X6keCZDRw8rM1EczthH7M7CTk3fL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eCpYsBRVNAqmWHEK6RW5sp5PPfn9s57pYQcA7aJkk9SDmHWKx4ZzmZP3DafBn2LknjMcmKqfwQXSypRPuZYTuRC",
  "key1": "2SR4X6udY4oUKPNHu7uxmQfENBkQjXn8CD1nx4RMdN5gBX4hyGYz7vyqebqEYW8syDkx1zNaHB4KJD2BeNBcxNXe",
  "key2": "5Xo33QwPwJ18exhe5irq27zaAEL5iYbRLMujVNyM2pRjvaPLAtVFJrWxrMMj8eBKZ2qd9RvKtCTCK9LtwhTp3UB9",
  "key3": "2evWeEnggD1MdtZVvvJ3N8YXnhaZ9BTyJRZ1BkgWcqSs4gx1zf3oG79mmVfKvJ59crUnMvd93C1ofeVpzYW4dnSh",
  "key4": "2Ft75WUh9qpgjJnGtQx8J3zhPPdsGPcnWtNgHZHANiTJ4ZCNsmP8mkDB3NGDmD9DKLbvw7oBzuAzLC9Y4aw9DcsA",
  "key5": "5wTurV8Zsu5bCg3aUDtqKqm5sv5wFPuF1g2TpxDKxjqrp3fEcrub5Z4tbaBcLc6bYotAWEutYyUYLSzNR7YUttaC",
  "key6": "5kJtWFMARytoxgdHt2bSMiythn2ubnz7czDJETC88xLYNB8ENkvyC7JdPgoPbKTPP8fYTBpwuS3RwRAaua7MMYX4",
  "key7": "2bjmUqpJ59sBDVJLfWbCeWcV4fBJjapxhCkzcTF1BJc7byQ8sfVRqxprYycQB8nYtMGQr2JRWbWzrzWeRh64Wgt5",
  "key8": "3jU7h7nXxQDpJs7ZQYEWgXqMAYqS6N7tnfesSuDr9EhsqMsEm9dwvVtVTzLdXWTkuVJPGXqK6ihmEPDDWKUERbow",
  "key9": "3C6mmGw5BJER6xCS4zb4ujdXPEWRNMVteLBdV6JZjjMj5cSbCxxszBinAejL3sXgThNikaFduYx8gL4BShTCfSpj",
  "key10": "53bCSWfnSfACufumEuXfMfYgG5YiL1TG8iKyhBHjwhAruG9FgK48ZL8GptX9XraZWuwtEC5zbMXNZbPcfQnDoVk6",
  "key11": "5raHCughP2WYCrUmTooxSSiCsUXwtMBPFQZiQBe7Evij8LKxoFzuy2HKZMqpyH9K6nZEB5TQRhmxiPrs1fGLHVag",
  "key12": "KA5f1Y6WbCRmtTzkEiAWACYTTRzpy1ZMNZzbPdzGDKMDW46T9sxbzKiACQYxYBDGJXwosL6sNjJtFAa4hFKEMSM",
  "key13": "2CWiu8BXEANvrrPjTPypagN8jGQrna1wdrzuXnTvKFzywo1ZwNKDWe68oKwJycnoteGj5vPeLwGrimBRUqqRSbtV",
  "key14": "3FwyqHuPqpsohj1NnhYiZC5oBZDdV6BNPRYbkfWCMnEf9P4Bk3BWHSJE5rmkR7bj2u6KpBgCGsQG2a231D7o28rV",
  "key15": "4Akf7Qy7a7KcAHTWdWr8RPiHfGjSa9ekmpXoB1VE6kEbH2xtBPmfzfnymusNpRFg6pc2yNSwnmqmhrEd4a5BGyPo",
  "key16": "2ZmBLF27wCf5nStgVUNvBkH7Frs7QNmZL9MtaRbdw4ncJWXvtACWDMmMHUywH5VMcPULMRdBcZpzZRkmtwngm2P9",
  "key17": "5GAUt4DF9BZtD94gxTah8PuQNjZNryfWyg54JHtGjxg2tyk4881Uaiv3DP1AgyVUW8L56e6j6Jw8mifk8xkYaUa9",
  "key18": "4kghmoL2rMjcvWKpjPLc2HWeDjs1VkRKMhCqXsHEYxJWAsBqCgRYyFXmoXkrJUPC6PjcBaTa71uwBT3qj1rFej4v",
  "key19": "5v34PSAuGWS2an2fY8bza7o2KVS9xLHyS9fv1LHubXxj4KMM7GVJqdmaonZ7P9WZNCWReAhMZpNiE1dvqbqvdEFP",
  "key20": "4eYEU49Tbxc7XpecqJEqxKMyo5cS9foJdHFopq37KnD8vZg34ueLyaD5vBsQCd72y48sTFxQAiHWoYG2vhaz32VG",
  "key21": "5wxYNHtfihm2ZtGgKSHdW5cvDLJCWqE7NXUcDNcpuPwFiS12VEmerq5CTcxX7uU4HU6ubjJbyF3yUyPkQDwV2XDM",
  "key22": "234pE6AH5oDM2zBq3Td2QvGcZLLmw9qJiJS2m3Vx1kq2aDjzmUoHBsbfR5gXSKj9d89kpodsD1d7ZpSA9vU1YZ5j",
  "key23": "4Qn7T3jQhcNHYmiNNmHSbfLvCWSf9VdDYMnmbXnoRrgk3cbx9RDU9ShQfHDv2Udv65DG5RgLBW9F5Td3Avv4UFQz",
  "key24": "65Ft49Bh4rztxnACRxFVXd81j9hXYNPKCD1fETctG2i37fSi2KN1HznZF1tkWmnQ1LDDZfr1UgHmK6LCKeCjszyq",
  "key25": "2PwY77bqbGBv6nr8Z8gX1uJU269GgsveebXrTtAwNBHuM7eEhUVrjQLgjkXrunWoYv2btXoDpKX4HfAqVbgZAWS1",
  "key26": "2mHin4jdUb1GUFLZefczVLv4igUWb4xk3ckUVrjuPw4yRap5hiDmACdiiUoXcbC2NbcGwe3pEsL8KU2DxvwrF92D",
  "key27": "5cdrqKc7zFQebvsNjhMURTogZQpr5b2B8CaZXJTjVcy4WssFDrK3xeFtc7tZTJcVo96mfaCnKdpcB7zfiBXgrpyR",
  "key28": "27RcQ4WmoMXgHNE9LABbi9k8TkUNSuA5Axx2oakHUP9xd67nJxCwrZNKCi6fS3cmyvXrgrEGJsLMnquuQm2sBfYV",
  "key29": "3cshsdRCoiksADkBeShhV8toB16Me8WuUCHe63w4mTLCnz31S4HWYWsXD4ZMfKGR2HZU1ByjchiBWJ2muRnwTh8E",
  "key30": "4iquKR1yYCgGVA4Eh4USxmhWhmzUnt8Rhqc6bXd49zkjCzvRLENiteae5DSX1Fs2DwsqsAqhppYMEdeCeWHvTSH1",
  "key31": "32aoZTypZpBWNAzkH4dFEEn9XHGePtpvXgUhL1mGUmARt5j5GZ9tbrruz7cX8QtdVrJQj17Jrj9VoQ3qynkmyC7p",
  "key32": "44xrFCPy2XqoxPRVngWZsg7vTkctTHmBgcYaDqYMzEVwevVfEdhj6ZEE4cvPMeC5fp4cneWRnqGZFrTa6JjKLai",
  "key33": "5sYhGfEwzm9FCwRkgTwi1eygh2nSgUvyv8wJzP3FoinrJEVdSoSMC66v1wAuSxxBCy7VMe2ACP79yjuthqXUb9k4"
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
