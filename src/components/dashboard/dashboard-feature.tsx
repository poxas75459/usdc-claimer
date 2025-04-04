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
    "4U6mrEFXC2Mvd55Pr4bqMHZmLtU8AoDKZDbrmhhf4DKWgG1JbiJa7VcSgsPdTMPoGNQgbdtQpd6A3CAXrFVZjzsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Y8sdeCtjTNSSz4ettY4KLxAee94kAcF7HRg5TCDb85RnLxqTCrY78nF3xDLtw42bfmtCZoLE7mFAQNFhMDLpqP",
  "key1": "dc2ZReafM5HhHsASuTUVt2f8Nz1SXHf2fDvsYsvpM9kZNowg4py1yPtsKfsK6oKyQw634JU8KCao9zBoDoFniQG",
  "key2": "4wi7Fdzyu3fwFcqNEcgMZhhRY1AwdfcU2zmQckpDuUKuWzS8tfxdHKsatHVMuoU25CTe4zMUrStnyphJKzTvQTJV",
  "key3": "i17YqFg9mtmjrjtgp2i9Zo4X6Ln7A74mSK2hsCQW7w2tSYnn7ca9ukdzGpXGto8LdSPJw9uq91Nf9bzMBLkfNKN",
  "key4": "3uucNK1Na29g8Rpzp6ogFVWWp1HvaYjp4JHUdgY4Xg7rbfpg2a6B8dJq2VdkiAo5uPWnfar6mgesCYi9ue3XLah5",
  "key5": "45FnauuNFAWn3hW1ELwCe1cUJrCYpfYauANu1GQCzpAvxjwDJffY17Y2CEkWis5gaM3woP1igtVwLkvxRidaeMgm",
  "key6": "N8Py2CagEVxVifq4GVF2ghsK2PpyxQBpSC2sucUpr4Fkh36ZJ1std5w1t3Hu5ZpBXuLwPVoDhjuTrtBtceAbFmr",
  "key7": "5u9SqZ2uQGYzFNaaZGSk3wvUn8174AVLvq7mgBmm8nFDcRDzVsE8GqC2Pfoxx6pDVBfSdm5Bsjm47VZsFzTyfTXZ",
  "key8": "4X5bkZdaSvD3zABZPVXGgJz9CZpGqwoCjoLhrQK6DRtRMParrLnjncaNAJntqLNLbmqJrPup2toD33JibN7P1EER",
  "key9": "5k98cYUswEqijQkuFBWH97NfshVM4PRQPKXLSgufZqBhdMquyLopQtX1DnZQtNeLaVVz8zQF3qMdw1Yv1zkLbdTT",
  "key10": "3SPjzcK3U3mieYff7ety6F285MJQWQBiJ7crAC6g3JxnLN9Dcv4PPDjykRegsDFDUoMEFCdEAwgE5MbwsL7VFENF",
  "key11": "5ipNJNNeDd2s8aPf7AfVCBUz6fwEoXwmQizyTTqFbk34HYHd5uzHTZKPBjdJWhTeRXv3u6hTHAGeE1cvJu8z2Wo9",
  "key12": "2HAQtu6zUbAeH4Jc3nGEpDn2rnbC4brtxiAyuEUUMAKTEFPFDGsDfFCzAJgRzZHCQhf2tVaxTkGSXgcjgazNoxDk",
  "key13": "3ww1sPVxB7DfrotC5NQy9cXbbnMJnMneJzqPDRMrVKjmEpgy3uq4EfWXbDfSKqsQuQ6JiLnB4HRG9RKKPn7AAhYK",
  "key14": "4bXq7m96cjmSEm8qS7Ap3SgmEvo6hxuLRT7Lx7xCGxMAmxfmh5wwkmTU1Sz69LfLP37Qw9HWMady59ec9u786PX6",
  "key15": "36FN6KVhMGpZkUkPNL7JQRYuMyT2nPtxcn9yzY2j636nwUz188rwLyB1r1TvBXCKTaoD63vQF4T5ZqprxMPNxME1",
  "key16": "5yjJnXrqhH6yB36QzVoeFoo27BL8o5ZMkcnmeQyFhfnjiRrPGkSdeh1LLqP1XUTyNdrcEFN6p7EcZNn52yNdSEhX",
  "key17": "2zE7Qr5UmEWMcTBfhRYoZaxPWGjXuuSw6sPEtSSGqDxJ6sysaZsD7THAzEPwqQR3Qkq9qM8FPuADxDvuT7bTT4yy",
  "key18": "4w8F1ac6ze6gzTHJobuMEJiPccCezgYepQm56KexCGbpTPM9a1FTTzHLjR2pnLbyN9chpw9ZxwQBrk5YwLGAN4mZ",
  "key19": "4aTURjdsW3kq6apnrsNFinKppbrUDJBMfR6HVSWd3etWP4TxfHMN5f27Vf5Miv2uK6RnRy5croPEKU2SfAwWgb3b",
  "key20": "5wLut4vvJTfuRbArud4cxgPmrnHcgmMBdXxbCEgqz2LKe37AF91UJbYmnQTu4JMxTkka3i5DXYqHDqKKfyuM9S1A",
  "key21": "4DKZmT1MpqEtpU49cjyXEMNH82Ppp4azvpB4ifX22V67tEXUsebGWAuk3o5SdVwXz2mVfcfrUbxcYTpEWApdR1LR",
  "key22": "47SSDQ62nFp2uvE3z7SWMPGT4ntk1YxU7CL5v7H54DoRoh25z5br1nPow1CM54DvZX2argzKhSN1GpJ7Ykb6ouX1",
  "key23": "3m4SBEnPmAB1x3YtcD8VTGzt7d3ek72tyLSZaqfpzjKhCskgesDadMWTMRapg1RmgXFkfLoc3PeYTd5rUB1YswCj",
  "key24": "5AaUqcwjBAiMA783UVd7uJWQopstZYD9sGCqYXe9LzcmvSxB1AzMErgUMCDfZMUxQahRbJTTjbpMktYsZLFqhNg2",
  "key25": "5h3BqNKR6nqd1itSZCPfPBNCf6JyUMCzWjv7eVvUcK6wcQXwRVEwYwPRGG7LXeYQuMofSKn8d9zVjy8LwQCT8R8x"
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
