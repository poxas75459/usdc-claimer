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
    "2msUqaUtctFAyA4DDoNzd1rX8DJzpdqurvdBefrHr7uX5Q9faa3MzZ9YGHVkrrEanJX2Xg2mARMEvb5XgTiCqycc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVG1Rgi5yoNWRhut7DGh83gPuStY1DWK7sWQReWAUTawCjrSAbm2RFtmyeG9r6qfJVSpJhcmZB9DJXZTpasWQNH",
  "key1": "5FqtkSksL1PovHz6n9W5KGKqsE4rxKpcAfWDWL2rZBPtjz4SEZ8HUMwdeuWjEFcsmpv43EnoLtdVAi3rMjmnvG6w",
  "key2": "2bYMKv3DkBuhrxYz6cED7s5JJFs9MqbxRtdtxHtYR1g6bTD8FX3MLGxRuWpKm9KJtG4xsBCC6nRPuyurm4QMszfN",
  "key3": "wBv8Bq4rqt5P1n2jBioLmi8vdYp8Usnuyd9RcY1EyheH6w5rvxZ5Jiyza8rDENdw7DjcujbsA9CifmQtFHfX9wW",
  "key4": "2PfY2mUQFkw1peyvobguhFuBCzNA6jxdUJ6Z9Nx1JzNonfLR6MLKzREVnZkGQ6Em5PvzS2jbo8Xg9rNrQDqfeqXt",
  "key5": "3G4vEyFwqgjKNdZLSKjNH3MzzeMTHbF97AfsGs6bPAyjEnBQHxRxUPAdqu9Z6jxP4NBwWHzqvcwTqfxfw12MRyCh",
  "key6": "53dPNtj4HvPtoS4Fc6zr2bU3v8Sa6MgpMteGZ5to6ZyTkZMQWQTrdLabsuBuAeEsA25E187ngKZ5BEwG27Hjujg7",
  "key7": "3AJsQpB9tzZDnM5WdhT4wnjdKnUbsRpxWG7eo19zdqduHE9S93QFgVeBnxjXw7sqtJVMkfonwJq3jn1yF1YPsuNA",
  "key8": "2No71D12fdXPQmEqfa27LxHJTrwaWMfJsH5VS8HFp7hw64v1WLZv9MQudsq7xG5rRT1BNsVJcTcpvzL3mfjVxXkL",
  "key9": "2i23fTnkha25Cto25WbL2FTMTb8BtDhqWBz9Rg6fVpByk4eQeGdLU5rHm4cxcJSEgnueJTaQvAfbXdZqv2qGS9he",
  "key10": "Vg3w7niyQ15L8mTVTJfxKucEzCgYisFZWG7LesnasvckQmhCnuLCEBV97TpDw84eJHQrCS3AUSTEJA9D9EX9dwY",
  "key11": "VzRpq8y4pCbtdXEq4hZBnMDHdUTXgTknoqias7jxZszDidJGuJXkEqA4UPypE27pKzLv6gi27QaUnhBao5nBFDW",
  "key12": "2TzjfZWLiiggKrEwzmzqnayU7P5NR8FGbWgZpkJ4upL5XLnxERR2tBZbLUJAxyYjWNbEErcS6DEGMPjEPPsbARAh",
  "key13": "412h68nZyuAYr86N2tFJdDZ3JispAkp1gL9Q5dsVLPuEMZTe9M5zRXt1KZtPhevv82xfSvprPJBzs73N4fjpWuct",
  "key14": "3eN3HAHxb4AZmcUZcag7cNjrxJCW3xymWDJxuv6B2RvbTT6YK1pMiALprXxr3Yp7Y9poP4R83DR4kUPCp3ktoH46",
  "key15": "Y5umECBWiCHMwfxQRwHCazUfQKvtUprAu4uwcXgn5FCkD1aFcvitauhReZaiPFuYCakq3w5n7gSy741TPXPhMZH",
  "key16": "37Rh6szfQivcMgneVXgYqrNxG5STxYSZ9CwVQpoTGU45RVtdvRAwNU9G78PVWHEQaJSJYLufVQsCmGZYG3qK6AvN",
  "key17": "6328SwY89d6uDnZM36SzqSYLMepPXGX3veFs59aytkdT3AUEE8sv6c8jzGbjir1739PtjojMciQsAnKBQaEhHmmM",
  "key18": "5HLE7tX1wnWUayP98pqSBh36CtxYjTEHn6hBggACnPMWqAgvjvS8unMkgxrPRynpongbnH2qEu95T3GupE35unAg",
  "key19": "2xiRtmQC7yrfzkqFV79xnMKVcefG8gCW3bakCpcRLsZw1kqQ2SfpheMppo1qfyRHEE61nLsMky5yhfWag4YhFbi",
  "key20": "4W1hZ4qSXLzvvKa4APNFnom79c4XsgbgirfhzJ4rQv4bLjfDcduYPaabofJRYGoFYqTNXLS9DFchoMKGmJEZQDCc",
  "key21": "5ZeSNy6WjZFmPuJ1oPyAtDsXnfgbAoVZE6FBvTnFqTQ5MJCiaNnHZya6Krm1fnTyamn5LpWjrjTHxEo5iVngpqwu",
  "key22": "3WqG9amCNTWPcFMJKpBVFqPBByBj5933PfSUkzxcgJPK5PB2UeZTHRCsDaDmm1SD1tDrashWHppXGjFTK7rrMWWF",
  "key23": "3qD92AWAYLbG3nKa8zjk6qw7YVTZCQ98f4zx6gn7hjxWm6vrTdahzyM7KkT5uw2jdZqXt13vEXNZxqb2hT4XhNpM",
  "key24": "2RivouA53YzDbBA2pXVjoxFf83uFF6bYWg1gNMNvdZdS8Apj4sevFUVtsjhkQBca4ENgGsUEYUiMoUcbkmqTVax4",
  "key25": "4s53B3n7n2L52F9KZtEvYpLMc62VcbZZMyRouxYDMAk4prt6STfgZBKDkjCKiF4a2CMdxPuDT1BAW8ZUCunhKQdt",
  "key26": "uCK41gM8dnDpS2uiQ5EJ2SLqqorDBvybAuGK8upqszAEzopff2iexxS6oQkNDBdJyu4P7uEtjYsNK4NL9Fh8Fsi",
  "key27": "5DgweQrNGUk6xbVm5xRTZduxgWg45hqaHSu2cgSxMRGHpyNRHbzZHktiWVSvvk2rNGnTiZQjnjAEK7BhYNC2g3XF",
  "key28": "5CbGMZHvWq6AtMenccSJqt44EqSCwuwKPFhpGPyHQsFJkBGdCya4CydxcVd3jJDUEp6XDzQgnsdqrPXeRHqvhkyb"
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
