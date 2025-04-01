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
    "3k1j8bBstJegW1enM6zWx6ponpUiVecbatbFdiVnFVnuXmR287dfyMB2GmUUBrK3e9AfLMoV47prafqBaxHx5jWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYurYGuhVzEYwXUdbPBXtvkrx52tdhqHTRxs9Grfncf6MYVoLvGvinurhL4VHk5d6ZhhUBMyBS3NfD7G6G7RpFo",
  "key1": "5YoAjBTehoM9t7kYbMiKCrqPZWLdLUkcfvvDknHGcatQuMVjNEqyDd4NcMjPZtnMozeKgKT74o6gmFdSEjXrpdY1",
  "key2": "4JBNPHsGLEwSjaNWuzWaNHydgpNxWeMd2hqPdB6k8DTX5TFmmqp8x5FsKtneaaNmF6dAP2UKQaLg764C8DV2Pwui",
  "key3": "4bGDYMW6s8JsuvHzmgjeuHQnLsD7XtyJogyPp5iUXAQe3NxTeUDs5n2mYwTGXRGXBWpQqtx7Z1bK41Ut7CQMa6a",
  "key4": "2SAw9iwMXxgu6sYhrtmkGuJujGQWAYidd94X4wasKdzECFcBZR17SJd4xap1A4N4Ecr9mHPfzC6gNtea8RTtVkqF",
  "key5": "5wYqgzdNGNaoHLYtvsTLFybShdYxsikJQiLSRYidDogVf2wnpFsVwGdNbATzvZP9gaVZoGDeWJG9XBvg9NBZoJ1i",
  "key6": "AK1NdctwYRH934t6gfkamp58Vm1TfunnPvsjQePwGbd1F1qVqEUVGyZpcBYpkvZeXGYDnJzKaxzjcfWC6S2Weyz",
  "key7": "je9tsSNrmSGUN56AAWSqvvxx2tTMwN7RMU35wUfKYNnD2b45TJ927pWvaQiFVGYfgeqVNageegrfBDWvAPqKXUB",
  "key8": "4iswCZ4MCt11aZQ5eAVxhtAKAKddLVFNDM9JqayFoejBipPpZ9MeqPgd5Rw4yeXLU14FxjYFBwakoASN4G79itg7",
  "key9": "4arVmBtEizMAA87g4qDiysZYeDBMe58BqgDbuRMJiPBxjgnLgNFjU8JPqNuAXvifc4qN7KGaw7DS3eKjcxyogEnh",
  "key10": "29wEx5muRSeQioixwvfphE1FsShFCGkbg6f9vfGob574JrTx7RMeLQ9C6BoD4YoTV2jZujizTsag6VMgWnqaFTyw",
  "key11": "aM1zN1a35sHCEM8wJLaZM3BfrbfyPYurraguoikFodnn2T8K4dgqHdZoba4gD9KB6D724mniFDaUfHcbnFgij7q",
  "key12": "gdBrtUMpSUdKpr1WwuCkQPLUTyCwCzpah1kJomEVTdsDWWfVNuwEUueZQfhejawtXWuHxNabN6moqqvmvoGVMdG",
  "key13": "4hJX6E2c5o4BeyhjagK4TBW1AvkHjLNNiA5MqEvLL4QgPJoWLyANrVfrdD997SfxcAWbbb85L9qN3n34mmpB5Vsu",
  "key14": "tcCH24V1kALp1thyxcGSscxwQo38WBKc8nYfwf6XSayG96HX5sPFPPLd3joJYJfcQSeb6gBLhCXP8HHs3DbcsDy",
  "key15": "5RRW2wFWUziioNVbsYDeVPK3RaBPUxzVN9M8nv6em2G4AV7QpZmAmbcRek7ohjygmsGmbTvpzVT8ATZqSiCMceZ9",
  "key16": "3LRDnECDVMkvMWG5y2drMAE5m1zdNyJPEHiNVevNAyjQJxt3jc9PmM8ooVg69Sjs5hSFJW2s7NX4TQenyMKuDnMg",
  "key17": "2nodeF1TivJJFuzJztnSjYFoUhee9F1U5FVR28wbs7YBb5rYmdSaRC8iWqs2FmeNjeYFvB9K5ssEVcnYvJdvgWdu",
  "key18": "5StnkitHhK9jgv75HJk73HhtHn6tgGmYQJmxv1XWKktZgr9RuoiEjiGrDYioqhmwEAPMBJLMfvR5WG2xcBZwTXB2",
  "key19": "32ztq5dcX6kLQpSxuur1s7SuCXHrm3KkCoY73iPvUxvnVpyPCb9MLMKiyt2yoSrbxdp4HqZeQoM2AaSeAhk86mAh",
  "key20": "36bRAZgWevi3ovr3Yj459sXSgmLRpHBiQviC4uSnEpQTQRrPdLWWtEgbUPYHxRpqrH8K4TmWLfyTxJvkq2oXcbas",
  "key21": "LbffMEEYWUfQXyyco9gwDNHZRdy75T73BjVW7PaEdhpHYGip3USWq6kJbJCpT9gJEjCSuCSFh4PAtL3L3ri7rcA",
  "key22": "pzPrRSKnh9aEJmXobpYHWocGofvbazEHnjGFTEh6YkSUKMvTkd9hejckPuqPekvunaGmak61SZiz3TprNNfghKD",
  "key23": "A2oUNzeHmECtoApy8hyoKcJWKwXg4YCo4SrHvNhyGJk8iHMgzUdiDkpjD3oVrRdAoYSvZcyp4XkKU2gPcVDXDoa",
  "key24": "4EpJEUwxxq6EKbMo2KJeFEeRimaJFmh1xRJiuTMuExxHca6aiYCwVwGmSa8DF8w9MFvEERbWraLssrCzhRoozWoM",
  "key25": "2VV1xCgrTi7jrDoiogUoH6bjbbYW6B2GU1Fk3uK2gcYz8KXZhLHJhdWBdAPPU4H3aMqoz9LutijEDfk7Xtchr81Z",
  "key26": "F63KMQLLx3Uo2Z3Fc3UGwk66ZufExhHTrrSyzBABsv3iArAKTvwDhCa2H5iYTorBhRmXVuEJHhxgzAQuUZCFnnp",
  "key27": "5rAfENfPd1UXgrXYD5DxuHWiHAZb2652tDdHkwvcvnotyK8yJudhPYVZYSgk6bs8fc25ZzvmsVFzc5UUSSVu8CQN",
  "key28": "2VWNNJVTwZioQfjGZ3EnV47NTEMNiVpUNX82L6CFPuo3VTbGnLGoWBuGJqC8jE2ZWq6TZT3WaP3NdTLAqaRGxYh8",
  "key29": "D7XBifyzYbGPcNTQhj646gWbsTPk4m2T85vLwnWpKWjbUEqo7m56WVkavHUVM8ePKScwBPW4Wodu83qJX6Bmwwc"
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
