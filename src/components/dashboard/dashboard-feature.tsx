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
    "3pQwCbyVVA429McjnT1NK9bEqoSHr9e9aag2WDxVnvJqw6xeBfaUjWy7XuXpSGiXRqzaKrRnLRFMA77AjKgvH19B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mG4U5b5n2kChQ8hNQzD3d7LjMdrs2ZdyRsNKJwtJ4EDDqQeQ5SVnVpsHLhfguFYz4dzBwUCemE4TWwuDdFfHuCX",
  "key1": "2eMCEvohGWVwQBFkAGgBzRCRJqU4kF5fzti64nzX14ZnRLnjvuRfKkdNedyziWwcngfvb2hB3eDEGrsqoKnVVCXq",
  "key2": "3EEFT4FHNLcxcmS9Lm5tAAEmpKH96NebKYKrPabtg9YWwMi2pSAktqesszjWysmVQfrW71QhrAbR2GfAx68rkan1",
  "key3": "4Vdmoi6qrfiq5ZiF1HUWgfEvqirzoJGSBbHMY7kHEVCYGXt1oYAxe3v21x9GN9JEGnQ8pfkdY4Nv7cdxs47jxAf",
  "key4": "fp371vTBqZjY7DGBFe3LYowpsgFL82MncwZnueWBjqV6WVMevNU5gN27sTt7tUE98FEuxGRanJruFH3L5Zw9AQA",
  "key5": "XVH333oE9SMFJYZASxBTc1nvzDFD4CqNN1tsexEHLjV6aQNGsNPvASwqxhjrSMgMdUiK8NS1FhEwN7EPDGWxDM7",
  "key6": "4BrgeN5nvjWTp4FfhNykpuAgYw3WLHxMg98R6iSuYrNQ56yDaneNipfbb4Axb1daGZTo3DAJTVTWLozHhSsmM2ti",
  "key7": "3mN4hpzUVDaggSRPwLZ7jtSqa2yycjU3t7JXE1Xam2g8Y8eVLPy3ZWfGKteAJkGSB5XRtLnRFpKnWjiyYvntrpef",
  "key8": "5Z6kLmL31PSpcTou3bPbjjuYhwnp92azp5DHQpSFbrjfCwpYuuHqSXtCEDRpDXZGXpdGCY5aQQoKuXg9HzqdSR1R",
  "key9": "4LtEPfQJi6BBXnojyr2cjSihX1BQ6jykfcLchVoj8mVAaNRNukNXe1DhKPprupm8t29qA28R4f3AeAp3fSjSvrf1",
  "key10": "5oYarHfMZyzny2BrQ3Vq68EkongUnjgJwYK7SnH9rs6ZEDML9TfmDBm7YnbYtUxN3nDVqGSAwnyznyFTLeE2i4KT",
  "key11": "DmSfTXwAyQ1xMyS1TYpLQJbcmPtq3a2mUKt3HMSMPRbQh8P1LFcifau7QrqGT5LRj2rJP2tyuejJUzrcpegQMsG",
  "key12": "sFt3ubrC4fkpXm2uocLrC35BFWkaZb9SKFYzhTPtCTkdHkQpWEpgY3iyv6Z9YTKT1pDhrnKp63CDz1RMFT2DMA9",
  "key13": "2GuZGmByTKJG8RPQP4g3zvhC8ujcin9GxmaCpEmR9JYxwETSZqSBYfMnyyGd3KivL3MSQukmJKk9GBPsiGbYJ1dZ",
  "key14": "5jAbMbTq1sQUzf2f26M4X1f1mfe6o15DwqWG9eM39JY6aXkqw1j8aj6Zuaainmiybzq6HKmKG6d9r46TPVkehGSM",
  "key15": "GELm4QSLcBUocaN17GHsrrQfbwExK9tMiBLwN561HojbyeecsX756aDfk6PNH4Pw4bTNTZ4JQg7P2T1BfWV9kTe",
  "key16": "43n5ymNyRggbMbKff3jF6TNdjFhXXHmcQWjAxmA9VBRQn33xauWfb9DPyvxRT9xQiEeqX33ZhxuR7vSH61o74koG",
  "key17": "dLD31eU2EZU5P2CswNDQQDp1S4Cxt92qnDDwyDXiocUzVQpbkSqtpn1YLzaJNreLvebrxBg7Upx3u5BvbPsAboK",
  "key18": "3iDZqp91hEa6MwwMFyuHTdwuLNBo9yMkpzC7Kf8FH5xpkq6zF1Vp3DC1exS7G6BPK7uco97dNrDiMJmYa4FxESb8",
  "key19": "gXGvAANxz6Me5kFoLAfGmu3ELhFoLHVLEz1UbLs3rRgpo6VBhzpaCiQ7A7sEMcdknqHBA5SHqDSHvuxRn1bU1wc",
  "key20": "TW6wciz55oysFfYmmUN8aV8xVcLmVRXbPdHfFQsHrkLPuDzNJQdySuKfQJRNMMMfTHmCbzKKPyJreY7wChTbP4m",
  "key21": "ntFUHgauDPJygmAWVTwYDo7VCFP58SbHHFFyLwfwJyVQ1diKQm1SfTLq4JhroTeZBGsW66EQeBgaaTjX2EP12sy",
  "key22": "2wEppipdfaSWScEwCEqn2d6M7ic417PGbVMB5z7heq2AzfntUFLePBFNT7HUsSEVevYgK2CJyR5rKLfNJx7ccStF",
  "key23": "3fZX3pCxQBmqS66bmAxe7cXXW3XKZGms6NwRuJyqLxJZiH4MzsjpngHifRYX12rZnnaa3dzExVbXA74NPzRdWfSx",
  "key24": "4bebTpC3FLAMoUfQRx1V6Gh54xGY2JHx3NaAJ2gxAcSC8oTMRNsZ7W85ATEA2KySn7kGiVNrjwzSza9cxexgEdSJ",
  "key25": "5jESsvuXxsAzLNFJRiYFfdVeUeykgprcpgJYW48rUD4JpDPefSL3H1o9W2Y7h1FneQC9ZkK9kJ3Qkb7XkLjyoVDf",
  "key26": "2ihzgXyN9dG47YgNT1VUn7GGugaQvRKs2Shqo3YizdMZFfwTf3uGGHeq2HFMmBpyD9yn8EGFJ1e9XvUdbmFEUGKB",
  "key27": "416eLof1dLd32HGSeMz1wBQ8JnXk2Me7EGFJdU6yu9DrBm2fpLjDCsKkHZjzm4TSrj4mybLCD1SVqD8ZtGZyzjpa",
  "key28": "5kxS3p3iq7kcjoSuHJ7xTxFE2wxNw6Du4LJhrXa2Q9bZr9G1Jn3YB9cJk7p4qTxF8HenBLPs7frBgh4Rt7Nj47iN",
  "key29": "zv5xmkDEweB2NbffEF98tSq7pwfj5Et5tRuChv7qc3MczYw3KhVuUGrJf4u16YKdMWn6FNivuV3skkzZvAXjUsj",
  "key30": "YJtnq3vKtqZkrZNQC1eJkfyV9Qgt2fPvycq7LGYtdtQ3MMDLnQRZVbJwTpKHLQcBCm3ekWhydk5wEfnXnibNeC4",
  "key31": "45GJSMnbzjSRNqhb96sqxZgVpzjPEkEd1qXyVSffoPzoq46ZcTeUXExsgD7cN2MUGkT2X6Rh2h7mXMtAKJsNKi57",
  "key32": "6GxuiQ8s4UPtCEw6eg9TK2zuJYKx28SarLt9bcrBxV355zEDQNJcV9rchu4MWerVpENsqbNjesRo7n8ozeobULY",
  "key33": "37nKk7dDs7HmvAW71gwGGHjbG6QnJsn2u3uCPY2ixwPXq1miEMQgZAhYPK67ouN3DTJTmbRHY218dMBb51vzXpSL",
  "key34": "vrTmLm24bpAbuqMJ66PU98dKJerpcPJ1cxMiLBfn8jksqJ1ffcipBQSajBWngHSPHibM4AyVx6dAYPf6MbfYF41",
  "key35": "2Z9YgfwmNPg6cvRppG1QoarzjJZyKD2woyuHbpJU6fyV9rYjokeyPWiDBsRnPt3ynZVmvkVKkEPSKM9bt7KShZ2H",
  "key36": "3pHh41gDXVtT53Xp5pMYVf842LZQ2RfP2icinRQURTnyUxdpSidEvmvq7vRP9UY8TLXa7JQmnK1g842hQh6ke3PP"
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
