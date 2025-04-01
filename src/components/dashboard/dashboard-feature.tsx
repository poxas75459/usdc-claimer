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
    "4heKGd2DAArgQFgBcgeiCvQuLAofGrTqYsK8VcKjkiu3PeMGPviKpD8U9kZuDz9gUXQEKyLh6xpBvKquSxpT5iQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qdw6m99oHHkaFBhemTsc86VgLwUjyY2ixzV7rHJLX6vdSgtNKQwjbUR6cfntL1rybD78q72tvGc5ebHNJGu9Yx7",
  "key1": "5EgBuF4pejETSMqcFzvDKLM8ugE7SVZBuJvTKCgKWxEmra7YbfLCgSwaqX3fPUWPYPyTNMcU41myFtwx4zEJu7dr",
  "key2": "r9fVEhPuxKe7z5gCf4bBCKaJzCF8CPhKXTmfYdidDSvvw1LS1FJZwHdxSev1MF4J3hnn3frwbxy37UJwa9ZNX75",
  "key3": "5nZHFwp9884taUFsqfce6htUuNLZjywsz9KfCKjLtqHvqKX5TkVipijh7g5emfp2jDSDTpkjfRfBgccvu52Dneh5",
  "key4": "5PKhLAcU2LoArP91NVTJk1mcBiUAMTAoCU9P6iqUnb42qxbnypZWjQezEnQuD5CfC8GPZA1jF11L3QLVnQKgjZd9",
  "key5": "ibb6Mq1MQS3Ui6EJpiGmiDiaQKreowNjAxDQhxMLL811kbzJxHPiV2AQrpAsQyBwMmpP66VE4WPg7uo1bjzWWYi",
  "key6": "2tb18THdAxP27CsEZs8uLg1ha6pn3rKyxGStt6erbRWtEeWbbdeqeMDd7NnnvWAfBz2NfVcFswUAHn9iQAKtcaw8",
  "key7": "2rkpUTqiyjjPfz9V3GrepQy4tidCfy9t81RmeY971AHhmsdTAM8XiUw6yxvTeqFxEJ4RGGAnKJhvgLKisn21WJB3",
  "key8": "uMfSiuRJt3nQV76iM5DEfTDhyQ8Rt3jah4TBxabbRuEKgpPQawiz9kTmLHC2pADBy7PTVTmePhJGAzwLmBDpu3A",
  "key9": "2AvvdAavNDKtqq5GbNqzsAPGomYLYiBS7qoLxtsz9GvJKs6hov9iGK41pRjYxB3fN2ps58qeBG3jzoxWZgdxY2h8",
  "key10": "2vqFqDHNjoJtz97PbpzwmfJx9FXLaCk7NB1TiqFXk7SPRiUGwo2GNJXoMSrudPjGKsjP1VKswnyEiLXXvusiiZhY",
  "key11": "4BtTrr45tJeVvdcAvb6BQbYcQtiETUg7fgUFcMiYgjCzGPr2ij4cknuTttg6SKt7MgdwYo8TWfUdzqBJczLhGNDE",
  "key12": "4qbCszh2FHaKFBwWnQR1UqQadH4CXnFWynKzZpRtDbzz4roUxxJtBaQEuvRrh4oQgKy9VTqDq7sohriqsa2t6kCp",
  "key13": "5DH5sth8XPceVzKgo7pDqw1J37kLDw5EUiyA4yszK99fhYVecTosBwbTMpS3sjcKfNTqBxkzJZ61hbFz9ZVqM7f5",
  "key14": "5ePdqEz5gtKTWMnKYbPJLoVMK2pMdGN1g2dUcxMcMCrYDwAKGwZ7cVDa3GSbZiwp68Fpu8Zbxe6BZTrTqJofSnPm",
  "key15": "PcS5WaY5C1ig1qjPFhyYisoZK8j7k8HfY2vt8vk86wJhbour3edXx5TiLyC7HfUehY7rJTWNcb6kHA21iTVoy5k",
  "key16": "2yvw8MQ3LhP1JufjeLWhFu6B2JRmy49wPfzJ1K4V4hwkSnCqmDLbJTQpnRCqbYpUdUYqQiPNgn2CnuUaAZ8kf3uF",
  "key17": "3eM32oME6XwW5sfTuCmLuFHeEuoiYxwBmaGgp4uJwyxfBkecZq7row9G6E1Per2QQW8LGFsa4ik6GeeerkH3Kea7",
  "key18": "5mscFbBctwy8rir3tpfxXz39WzSLXHKKSzbR6tdDbiy2UQBzu2vCKtPetzs7CBJBgQr3WQzJt2MtQRLg2EEvD6os",
  "key19": "36cCjtJvX19YHtXwe3gRW3XvpVSzW8KrN9QADiCJiVdihL9mR89vxih55aiVCayVQMsN6JagSKb9KKnq3HXp83H7",
  "key20": "25mtSGyi2Q6hV87bmiFRNZwyq1UBYTrV4jL9oZsSh8m4WFzstrC88FjNkaCYwsneG845YmJRjZ1RPmD99mFs3vY3",
  "key21": "4JoetXqJDkTPaSbJNjHZUdF8VrU5Pf7rRXNF7ZrxqW4a7wBgwshRrhb1ue7d4v79H6mLrvdcHuqunmXDG9Txqb68",
  "key22": "2XKYDNtmeCDTmVbQVAfnSNvEwZtqt9fiLoMmsckmhL949mgeuxSY42D8tvrE8DnRizPFTNd9aBbFLtBuNG4KLWDX",
  "key23": "NBwksm9mnMiR8nNHVxumU7EJsHKD9HxjmG11BKfhLAAQGZj2SkDxbnDfLdfUvdvPZhmi1yY5GBJydvSN9MiEaqn",
  "key24": "35z7cT2dg2qm6Uj3TEMcLeQVst9jEFR9XisBPjTKbTmdePYqa2cjwvhDGnGpo6XyTPa8WFVE9ct9hNx8deTTzvpW"
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
