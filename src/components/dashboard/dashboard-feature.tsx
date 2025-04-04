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
    "25vodzHrUPZNy61kZrVxmASjg4g5Eoj1ndHh7ffhQarharJzjkPBcQkRyWezzY7pVe7VbmAdG31CmoDrrvgdJChh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxeW9Z7nbpwsiaEKN3PCtWCRqkN2xnpS3hiCbxWfYkv7VWQwJYeUNb7G3pBUzobnHzwkRH6NMyvomanwq2YZ9bc",
  "key1": "EB4CcNeuUKsqEkReVpeMFEGYhnSPk9EPEAEHcF4d6JrGePGo8moe2iQCCjqCf7RyQh5pYHTkxKMsiepZphPBhT8",
  "key2": "2hPJ2j9nvqjsBfbkqKsicYZi35dMbEsWaaMov1cS9oHoqVgv3s5mddhGEc2ZvuXGgaG6KTmtCETdTdzn3cuByAp2",
  "key3": "4uSq6uPe9Aoqj38vtwW8ojVQHxaSWGW9mpdjP256uPGoenXg3M2kPYGHejkknW1VCfUB4SDRaZ6tMMfAYG9LTEGd",
  "key4": "4FfAK2fvU4bQugZfGiYubMxx1T9Hze3EzG3ARAAyPjr96mUE1gDBUX37jdHXFCWHcf7v6xjLDRQtqwWxFGiGvFuD",
  "key5": "4xvTwMubQQPqakSzxaRGtVKh65SaEtwQWrfx9r8V1QQobGpbm3NvDVvPaGHU5nyDfStoQtiucSpwVaEwfRUmWUr",
  "key6": "k4FZNRtTRzoo3Di72NctFei3r6fmEY634nC3YpeyKCTd4cbQynfEv2FS6bwZLSvZ9Krtr1jth2yRsTf9FLBZEHq",
  "key7": "3TDWpsF3DYbyAt8KYJw7VJdn5baBHf4MDneTbU1k5G2UnZdGuzRDG7Lj1Muh7DvEbn4ZHJ6NmXGkpPeds4KkiR7y",
  "key8": "2Fv2XtgMhZFwgoSfMwDkQfoRtYNhr9xvxemgKiPoZSdga7JDETRG2rPfAc7m3xesA1N3h9qBUG9ZnKSYKoMMwkHb",
  "key9": "3uFPK5uuYxE64NmV5TTvNNZj5iPzVfaSbhyJNQJaTQRCPXJZcxdcViL7AqhpuKcB651ZwVZtkhGk3xPmb6VNxEwy",
  "key10": "5QV2dHTXuWHbMJrDLf31msFUQczFZEdGm5pfi4SyddFragNQrVUDMZ8DB5zkAaAbLr1Uek6i1fzPLYqv1C4yyey2",
  "key11": "53LB8jZA8F6WnMdVFPHt7i6ys1ASNN6JCB1bvrY4B9MCnW9y6XnhwKENZyBFauRB7anB52HhKumESm3syuxaqNHe",
  "key12": "2kpAR9MfV2rsbsm8JEUAvqFW1Hma5B15rHqwwsKBQtVxR13aQAXcPJ1a3ZKDq6UKX5oK2cCGxDPF3TLnvqphH4dy",
  "key13": "5difZzXK8RsqiqUnGhC4JZr6uQrpoTAxfNsmXwQgvQGfEz1zU61GgqjtjLXZa6gjFbv2j4xmv6VsPU6TnZWHFRi3",
  "key14": "5wjBfKwSdXxuUcnu8RMBAYgCwFJcKPVdNGaiwA3LMTJ9Aa8fXjP8X1bSD5AGPpat6CqWtuy4vVsTsvTT9DDP78wK",
  "key15": "3GDXwG2NvuCHdJt9bwzexzgMS1FTTawn7GjonsAmgd681rXHsrgj7GEhKggyDEbCYwoNRruz9C1V5pqsbraVqvp7",
  "key16": "2GjQdx7QrW8bTSKS8Dqau5K3z4kUCyFEEi7UYaujut78S6GMZDK92Atn7vgN6fNmEzWVDPvAt5pqUMsuMyUN228i",
  "key17": "3SD5TxdPyPffdjTuZhfUapAUDMUURypSoMUEW4rDup3opijyLtCMpHCT2kMVNjBpLqguh4XjqAH5jcVo2eh2d69q",
  "key18": "vEzXRfu1XUUWBT2mQA92tNUw1ufpfghkwr1ZVohpPUVNmAmSmra6DPpTYM2r7ikfCPY77KKi9fXgNsZdpCVEpWX",
  "key19": "5ixngR9oKhj255XVUNKkCTKfPZm3seEi3sNLMRs8rwRryCgXDVXDrvuiRGZwfD3CBCpMbo6kZiVDcGyRzuDnt2Da",
  "key20": "5SrnGdegMSfEaWxTx9APetJ8BrgEjGtdsqaTaganbqMijGTfygyN1Nw4ZndRiatynvJDBmSCczKopWkbdsXcF4cP",
  "key21": "NbgjeGCYqkE3JoUCJFWvBddnDByesH383cPaazhKZQVfLrFiNHgreXfgL4gBbQ26Afjea52TB14wcrsMLTBLNx7",
  "key22": "3KUnmDHEzxGdBZXz9iEvdJULYpvfZF3t6zRePpEhRnxzqQFJ78t48ysbzRnUsGGqJtvj7FQX5AkUroAuTJBHhboo",
  "key23": "2bTbUsSMq1kThjWQVavC6VCkgitkudPvC1eiviopswwJoy9UU9AV7BveEmt4Fzn8kaMZ5qkkZ33CAtofs5GrfHvJ",
  "key24": "5rMn5HSUCjRewmQRCCDFqomQ5R7k1FLTMUQLhiTfMyqFYcCSMit31X3LuYDTiPS3e1eap7fFDpGBPSZDKZcfrg5T",
  "key25": "4U2FX2YMvdUT4hshTMZXhXGDPf1EEQksKn6aX3yqJxMtgKXJTgwk534GKppuHY4ksjK6WyGHCB7QNkSEgtoQSZRz",
  "key26": "kRHjyRNPWkFRnmXeLUm91VuGEKXEwhSX5E3Mpc1L14sh4GghU74ojcWy54YdbkwU53s77T7GvsRnBo9sicHc41L",
  "key27": "44Tfr7NeBnPMHywHwdZqbpo7QGd69FDFQnk7KosJdPTNGiCyzpg6HoWUGVHSPp6Me1HB7Ar2ff75Xqg8rnREqMuk",
  "key28": "2YchFsutJcqTDeepBjo9cppGxbAtkvBDshscJF4RNQnwxon5Yj9PBdysneW47zHr4svMv1kMCEDihfjdeRCQXfjy"
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
