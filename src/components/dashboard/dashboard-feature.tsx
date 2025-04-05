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
    "3YKRvgieFiC7FMaHrFGXBPiJfioXrno3Pbun8CWm66CPgwj5Hjc6ajGCde7CMHpP6VShCpLzF5mv2nMnV6Wzb3Sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43YMCZLuqEYBumxEVnbnjpHswtP1JpcnziQ6a1pQNo4WX5mkGoFUcmt6sTa1RpBS53WqnZmaWdrgUi7BKzhZFn27",
  "key1": "2t4dwrb8qd7xnp96DrAYzjcYE3YYaLQN7ziC4A5NLpEwYTPC39Kgpv8CvYzsp4pp3wXg7Cip86Ms6Q6whhgsJ5am",
  "key2": "31p7GUrxfDpGJFuveTTUPHE8MbqYFxq4P7uGAYYL92PJC7WVAUxzkZVnd85YBkpvXrUsUwWCExf6juBakkyEmY5i",
  "key3": "91XU4y3TwtmmVKvnczTF838fEm4KnrCZoepXLaP4Wv785TUDz6HekDnidGKRoB7Jqm3aWqHF1RBv8VMZDi5J5X2",
  "key4": "5mK3RTAvY6jdoGTdrtGSbPy4TyJhdG2wpBHULuWg3BmjVcehV2LZkcwjTn6hdqG6HuHcsPPcYVCWQtxdSXoURLvR",
  "key5": "5nT9AiGcaPqkH9N5NvZ5Rrm37hojrfmHuqvZSL6ToAnBcWpFd2QFXrMuF2mdCxdEQG3u9cT1Ewefpmr21DrX6b18",
  "key6": "5t4peWDyQ3BHyjxsqYZNxVwva3afg9x3Wq6LE4AjY3UhcoTCcwgqVMbjexfMNcPAusHUJAxBzNzeyc9sovMiG16h",
  "key7": "3VPEtJVbBnCHne61UgUZvtG6UcFTzXdAmyd3fBcCP1nKBHeZZ5pMviZUThCMXbcCKBWD3ZYevq3wSBW1aX59ZXf4",
  "key8": "5mErR1NmGdNnoVNYhQkzxgSQcXSNA5DhXfAqEjNWFw91Uhvkc142dVKZGa1K1qNA2nrbajuwUm3aziz1xWqWN1ii",
  "key9": "4zCrcEjChm1CD632GKDp7AbJoRx7nJyC7DaEpnCanU7FRocHQmjeYni5BeVhvpop8hyx7ov9x9RWvxrbsBGLPAAU",
  "key10": "4yrbSf3yzhqxhq2zpbJRr3RxzWSjxtUgsa8B2hqXzpzwYYJZdzdPrYpnmd6gUxPQcMq2v8CCs6kW8j86fDAwVknD",
  "key11": "4k5s47tjpH9XvbrFr3447Jbfdw9bd4mKXRqaxUG5pV7rFHidaY9tbo7HtWxWKKVdykMiuHnzfKaoFoihNJodKdZa",
  "key12": "2pBmZkZKB28qB3W9K35KSWrPeb2WU9mCeoeHUnvBMPxkP2j4FQTkG6QMyRqjyv4ntW3XeeHBjs8vnYJgwPpZ1yNJ",
  "key13": "2LPG6XVbh7oZ2DrfoZW8SzrbhtZXQ5GL9xGuBKNuMMbB7YsyRsNmEohko4p1tTArPKpVuWJXkqFdpf6e37DVPue1",
  "key14": "2pCbUqncKTDpmXUWiRtoroXy6dXvaJWDSshXScQDdeUm5iF9trPgHQUKsnjy7PSht4LGZop35pmhmCxuj6Y1xbfP",
  "key15": "34yYneKbhSzoudRJhFiZiei2bngZ6hi1WByVYkz8xK9NUEDMPGFWnizcWnMXLDvvaU6BSwMyKeUQXTetk9bkyMSP",
  "key16": "4rqSrtb1HyvpEBPdXz19qTe65Dk8i4723rdUsBiWNycLNFF22tWPXY5237eBb1m1wvqXHzk8637CBjRLaTqo9i74",
  "key17": "2ud8qFFMyShGSENnBYxbZ9TkMEvQBkiVGTS5qXQ8vVGsyFmrQRHQEx9AuQj1338dULNTw5wmwiDyYhKgVqoC4tZ9",
  "key18": "rgbRLT78cEUCmqUA6D2K1WVaciVchVpLDGefwwFSt7HKgnpWDaQL21jFqry6QJDuGfazANBfA5pHkd2fqqFzEZQ",
  "key19": "3MDsza63Aif7td7a8zTYZ3KuSzAoUVUJXRcDLzDWtNGqEsXNMTsdQGfuZ6Ch5uueV59XZ4hw2CySppsbfwd7etdY",
  "key20": "4MLRFrDGWaJ2Hvnf1NpQU9TWdsP4NmzJMFQxuA8zHGPSuZtK8czwbgVV5xvw7smmAc7QARvPjws5TpwwTSysuYdf",
  "key21": "58PDSaiRiTWCLTPDaM77bfGUx5t64N2XQFiwUtbdfCmKhBHUrtDs5gKtnYTiR3xFMGJKpdNX1ZCeebcbqAGCUtvh",
  "key22": "5x5V9ozSZxnSrnjA9TqTEwGDF4Tm4VEbT9BL8a8kRXDF4uEQnZATSUz6uGXCzH15TmhWoRGv5sAwuL2ZLAxz1494",
  "key23": "2kmLsGCgL4Qp8prQr1hno5aJTPqvtibx9GScvQyAg84u4vsHLGChugaQwjZFRXGVVCmZA9cbkfTc2kusdC3qEeEn",
  "key24": "4RStDoyRw7nYAfLFyYXGyd5aMZ9Mz3pqRQcSRw2pnJt5V7jExdqKxy7cmS6Qe3bKHH2XwYMa1KqCkRMmf9Ju1Lbq",
  "key25": "5dFeKJLutmRtfPcwkRqoxXSwR3cyNue6M2yQSYYnFDdLrQDAqFh7gmhU8yGtdpbR7BqcvhopMMCZUV24PsRBccZP"
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
