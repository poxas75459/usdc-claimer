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
    "2Vs2KCnen79Y4o7uybGxWNf4TtUbtZtS9q1DYSfWx9FpLzPNUypQiDt86xQUPqmXFhfHVKQD8zfSMEMfx6ahp9T6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nXrCeR4aMm4ENEjMSttVj1F3QANWcDDNTh1tQKMh9yc2kGxvwd4hE1iGka6zKY5Lrreo588LPKDqa74baYqNspn",
  "key1": "3YgYouZ6QKytN36fRVFX41j9xgw3CsmMkdKmD3hYaVDSpj8YHzPxKjQzELLAkj7uNwg2ugAt4kLrzaMRGNRF6qND",
  "key2": "3JNziqpCM3xwWB7LrYkbvXozW4CP19BBUvsr9YNX9nkP2XeTKe4BrUUaNxV5RJrxtJdgEY5mZrXBwtWjpweApXAP",
  "key3": "2Ups2UH7TuxWSfucuEtj8p2PAaHYrDmkXMHxbE2CC12wRx5s2ddnCudMmzqmALTMHzxWzBN9Fc6JbWNqUkwzhHG",
  "key4": "2TqQK5w1JdPnD3wM2L8jf61nRVCuJ6Nzx8KrK7V5LvbaUrz8y62rnsCGYEEVSHoa3kwrijV41RcqkV1tDsjDHWoN",
  "key5": "5TF1YwWt5o5mdtakJGdrMdxWCSphjf5Vs1GULh7NKtfBxaWnXxsqec4rUkH7kbLGHPWu7t1ttoek1S2DeiqbA7mj",
  "key6": "4C7i6hp9MdBdPZztwy2YXAfXDqx71FyY8xu3mhZeksoSh69obaU47v3gqdSHu3wbMqCqFE7DtQtnGm35T7SjnHCC",
  "key7": "3qW4UKHm4UcStQUHw615v8aC8DCy2F3W1KNkqQoRCeYuDF5jJtFHaskDA2WYsYgYLyvcjuyJPRyrLNTnWBEgrFRC",
  "key8": "2n2FKW4ZwxSwyWxt6S6zgTyJDnuPgiKRP1Bs4qbtEXFYfy7dRKvpEGLH8uNv7wmtwownbEoKp4oZuuRFxFhd9ZRg",
  "key9": "3uCVryJbnLoH5uxZkEQuGeX6vy3xYpsHhpXxk3Gb64d2nou82YaLp8cCXn51Rgi3mFq3PrWDHSPFbtK7M5mBsypr",
  "key10": "nYLwVofLh9KtneYfjstDQFMVwQqm9xJkZyTATSs22HCQjRNdGLN2XCFSGVvUWCtrursTegophgXDGniRAxNnQzy",
  "key11": "4nQFX1eJhMVd9e4PWCTNt1rdfYoN4aA8QTmu8tF6jSjgt9XZDJsHMNkqTim26oxauzb6cegVJ2DtBYqzwdcNk2Fc",
  "key12": "29ufd4w13F8ct9ZKmuaqC47r7bQfdvfw5s9zLS38jLjGmWC41tG45Mnu75K3P7iXhwwdxNLAySmKHdaPv7MygTRe",
  "key13": "33wTdKZWRvFKD2XpNXv4yy5DpiDys7HiqKvr9tC2ySUAPHL89cAZY8CAwpKbkxubxggQ4di7ua47s9s2pGq2owTR",
  "key14": "4K3KxsS6y16mbujZFZvetGdthgaeZpqyoFedm7QaDGuCxRoTk5u7Ag8FjLAupNYQmeaxmUDoBRHN7TuGm3cLREHt",
  "key15": "4noWU8BfMiczW23sNCGSoRWd89rm8KVE5DLBCmyJhS9ribqRgQ33LiDGqStNXbneTTDjDHW7UfPSab6mvdD4Zypw",
  "key16": "2mRrXL1xhzRMV4SYJ3VL5zfmHCWE3tKgrxATW2aw54cfNFKJASAkaRWs21VnfxM5KxQ5UbwfX27tMggM8AFGgHKg",
  "key17": "2iV9KfRWyArZaStr534SxMWdjfJw6HP9fKvRMW3iZT7yuxuY9KtV4tF9u526NkaeUg2uH4LHx4hc5DQU4fUjuQF8",
  "key18": "2rcrg2pnndFKzkQADZcC4HAg8w4nsyq8sHmrrrnGfqYGY6zPPpWdSYppHpHbrn61zTxq6zNzCHYLc6xBWUekigFB",
  "key19": "3v6jgajXqn17Vhh5aoJCzQxjFTxyGktEFaMHwscVMTaHCLJbMLydEr81UbQVwWwayy6mdxKRC7jiDEV5tYEQqynd",
  "key20": "636wGn6Mmb5TDtUGVV7L7EgHa26Ffbes7fiWSjtbXi1dncADFuuv56tQqiWrMFm6Rp7jXG6cvRKSXnZErEsjejPo",
  "key21": "2F2Q9371km5Gg1WeD5ZFDEWSVKQxEtzHrsgCNcQx6172DAfmdMBd6rapMHRYbg2yuwehpfuiAWqjQvEcuz7c9UgY",
  "key22": "3gMVX4JUH4amdBxsmnyrUnYxSTvUbLJ2XCBVZGd7CD4YKADr9PBmdzqcVMKCFqowWDUQpNEeLDAMCQCBxnVmYQZZ",
  "key23": "4YkrNECucTntHfBLvEK16nszvX8aWgu5fF6jk41ZncicTAkG6fZEAamz1hws2no12WoexGTkJc6V5HHhsgQsJZTE",
  "key24": "4fzqmnSr4YL2GDbHfz96pdmQMJFCDzga4BYjb1R5oJbDTfAV8G1nUv3mZAMdCuoQzr6SvdGzimwTdAj8KR32cKKF",
  "key25": "2waeN4GW23dehSanx5YAJsNoEyQEGFuF9gMVjgDazLq3cA1SRpbzJkuTeiNZkZHuJU2z4zkDojYFxTjgpYbN5Ln1",
  "key26": "22izem1dsUMkY94AXdtsBAWLKP2HPNDJhzfTzRA2eecd3hqp46QBR4ddVTPZifWuQrgupXs82VZdud6Sv761Hogt",
  "key27": "2kDHFQPkacYYkL1Nf4Z8wdfbR1KBVAbfHttqvVFy77utf8MHKpkYGtkx8o4CkHn7wMFaU5uCFYQXQ5g59QcKRKRm",
  "key28": "6T27HaiGkGYRkjjA6aHQ93tVxAot8dYRMAy1EBnu7nLaFmWjgTm79uKa7bbUce9JdbUkcqstV5NtunA9hSGnXQR",
  "key29": "2yXdeeHsmovWbVc6FXxJrGQyBGXonhsErpvoRHM4S2ZkMuyx26MvR5LBR6dppoofkG7uzSm8kTfEciqgUR8vQJkn",
  "key30": "5FLGNS6XCoakQHtatq6QL64SmDUL6Cyzy1pge4JFjf2sAZj5WKD8zifjeDLh19tvWuKtH7UgKfz69ahM1Xdr8wFt",
  "key31": "5qQi7PFDr5j7pupdrj8HCVpR31gzqjQUnMPdGGoaAoxNUhyu7Z7D3QXmsgdC572SUNvbwdTJhvt57YnuJ4qLy1Vf",
  "key32": "3fkcy8bZoWcMSd1boxtqtyPgKJ5J79S52F11LdpnGa78zbgSdvLuLJH7TtbtZLMZ48rGNRvZ1DyiqSm5wZyK7sbX"
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
