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
    "62MfTrKBggq4ycSm1pjR6iDx5FcH9a2pFoJiMmk3UiLes127T8crTyV7jmKGGTyDEVjWDr7spAP37GSiNSrTTk3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N7vGj4M6dxe8KSFj5pStDED8EKmQPdv8pGUXQfmQQtHTcw7RypRpEtBF5TyKJZ2FEhDVhf4W5H7zfrVhFEq5Q5v",
  "key1": "HGtVcT4Styrc19Mr8w437QXtrchwd5DaDpeX2r1X5xzNnehR7rhaN27mZSsB5vw1WSfchmetSmuVdroU2s7FVM4",
  "key2": "3kSXMe4zZXUvysMpZ5ikbP3cXUUz9t74U4anhJXaK4P6LCsJdZmAcwPzgiYRRUTBJttGhyqh2MhW5s921fmiD9VT",
  "key3": "4LswaeJFZcxSgo7PQcpYu3xkzQRHS542MLXLtNHvZ1MPooSGWjjwbQbSG17uXM8fhLM2Tu2wjdAyeWNgXQ5M2Jr",
  "key4": "3CPuqh9h6Yxwg8oahK92x2TS6FFjKMPAvYWJEPYmXyH1aT7G1mJTjFiNvY71mtGAyb8G4UN8RhFB7NtPoq7S9SYY",
  "key5": "abgHejcMWbQXWZMuREePfn8qVF6221YDY9kn1hMZf2nmQ17H3TQKFPmXfzuq3qJGGwWaFfx5AeQoiREKPZySK1B",
  "key6": "jbpibBfQANEtrnU1f69sA3naM2wTwuxQ6GmRXo7XrxGGwpQ7Mca3jhdMWJjQG9RTiyKGiW2rttaoyoZZVv3bLfr",
  "key7": "bJHhuXUauBV7PDAqAXBFq5XaueHhgkCbL2XPepQi6cbyi8D7HXbeUDDMFTqf2dPTQxZ1AGjW8Fs3phKXCXsqA8W",
  "key8": "35TK5aXaqExVpwDU2GR7suySWEZ8JszrjRb4H4YimFX2c5uCfZPXXNqvosa11isK9sgjXPNVA75EgNVRnPkApRd9",
  "key9": "4aDNsNzZLTgvbF6FzqBAN59oGMvpCB8JBtrXT4Zq1HeFj3eQpNKXFJpU9wYXFN6aAkXmpzQsF8geYWZLkiDZMsQm",
  "key10": "3E1YHVyRVyesSdeH8QaDZfVFz7KEbMAu66QqsVLTSuPz3Zt2gfn4KKFJMJ3fJhC1H9b4ZEeVgRPoD3aY1enJhx1e",
  "key11": "4ZugTDVeB61exPFzHhjkG3YAVNKuVYWnGzpj3PWqSKbM7TyNppjqxSEWNtb9mbrGZAoKYYK9PzCGCUkYGimFnbBq",
  "key12": "2Q3EAPhb7LbQMC7VVbfpugFMXGrPMwsHP1h9PVSpv33Axbu1rDLv8urdZ4CnqJevSqjeZdzgep8CZCzXu4JacsnB",
  "key13": "4P5N5XatNfRGh465HYHiF5imSZj5rfcf7x2K2uziHEMtkySmU8Ecz5t2iMJfvgeRNdAzuwEK1Pv2XUvJVrXtyg2",
  "key14": "3pAEwu8gei2vwx21v87JBc8FwEbdkNQHm945SBojR6NAHeJKx5HyoExXMiuzZT4Aut5m5jZDirnXV345wqFMZj17",
  "key15": "3zCoXEAS8oSytuPFhQcqkGWEyhi7Kww5hddddW1iLbwJh55eodo5TMu4NpueikzdXrGKAjNcXRZKMdHaHyZB4UtQ",
  "key16": "pPEMo4VDKTChWXYegyHzskrsasEF7mbsTp8SwYHFKxQRyRv3xaJUDpJaYgtWavNfiFbzpcTN1DPG8miCAUM5fhU",
  "key17": "4oEnFoyfNWGzTtCogk5LXfDKfjPt7Zk5agZjuH6nsHuyJq2GRFFJaZHPRiAfmxrtKeQEkDbJgE3iQUKaKuBKjQNs",
  "key18": "2MoHxtq1UnFXXgChVEaDZYfmMYfuHGaQEYS8k5qtFMFSUuMwfhEnkgEeGQynnBe8SzddhyMvMQaszY6zdJRNtRUC",
  "key19": "26iqAGUksS9tHW5B2HQdwHJXFE3qhaMMQpwCXgGUz9sCi4twYXT4hAieZ49MyNeptpuMEbsdJ1BPCyqGVfegvhCt",
  "key20": "2RG7GrNAkkjKkoQ3H6p9gz8smHE6TYprb1sfmo9M3iREhqaph9uQHZ6tBzj7gLs7ZBbJ4a6ApdA15pgsSMQuY24B",
  "key21": "UbvPskW2sG36JoqQQenRGCxSq2BVNPVbipbvwkoGBTujyoFT3tRmrQZetwfP8u1VmhoNrVnyDihgV6J5D49git5",
  "key22": "3BREcNEjk1RaohgviHHfVCE6G1FGW7xhCkNW3wfnDsapAeia32xFnQqiqeFH7iUqmf523QMkbdyoyzGoJgXWQ9Q3",
  "key23": "4hLr5NV5wEQfZ4dxQB7QYjHtr4oTidLfdZetziwP8E2tLtwzvhZji1jNas9bs23ADWfD7NzVbeo96BoS5zaCfatt",
  "key24": "459MsfJQmAHARqyZArLDZcuKGFKX4hQLQg8bF34sVgW19AJcCkZGzVbd6d1zoqtxZhBtGuJe9Ha8GAygJUX8DH1h",
  "key25": "zxCwfk9pq6GHoKHLrgMqrNPGtKwpCANvsDmw8AVqYW3nadtpxpYd2g2ZLDbhGia2v9kZQzFwft3LRYAoZZGrwFq",
  "key26": "4YgN6RdmxuJBmPbeQB3r6kpS2AF1tAg2eLYMfV38yeSFTuysLCc4guJxr6CGbUdN1yY8HTQ8ngDkxJ3kCFi9hqZQ",
  "key27": "FX9kh8YTHaW6Q2PtwnVHsKmnGYuQc5CiL614rkMQWR7RJa2qqX13RQgyGyXyNTv5y6PMx7AaJrQye1ChfNcrxYn"
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
