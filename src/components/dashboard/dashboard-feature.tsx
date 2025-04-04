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
    "3iYZnXTmCJ7249XgJVnG2tn1odUa2ByCYnk27ewW7rZpFwcnGjJ2F1e1nnXem6RtqUwwh3QLJV14PT9yBaiTGZkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ps7WYh34QHGf24FMqBjcTmngTbqq6uetVJYBthdLspF8baXq5rjvPwh3aaZXUqE6mMx6bnh6nU4gqobGWryAkC3",
  "key1": "5GhQpoBMguiWY8jt8D2ieGuJC3BBbancrU5D7Dmn3Xi8vy33wRquZjRoGRXad4hKZqDvxPWUGyKSTXM7i6bF4WrX",
  "key2": "29RNP4wQ1tvCNusaDqMesCZeotcJFEXURzYnJWSdtCxABzx3S5AvTSmsUMxNQ3MyhrD9NnPDCXjYaN6xiji6NhfZ",
  "key3": "4mJSaBHv6TT65ndFZg5MwF3hCRzxBvwbQHUf9mFgxw3qkLQbr7PqWxDT4iN4eMwvx5nyk8MBbPB7LJhwV66n2wTP",
  "key4": "pxsQtcJ9xjWLGJJokdvE2VjRVsv3q85mrnXU5PNEeCVHZjJut7FMWN1k2EWgkuhHuh4GUf5QCTFYP6NURzQ3nrn",
  "key5": "4d3GYMyWRgiNXuoFTenyL4q5mtwhTapPYZLU6qWpJDLgiQEmafEauhFzBv1cUjExXUFDhW1wELgaDSZQZuw6bWVf",
  "key6": "2zRDQXPzUTcnhYeKVmyNpGNgZ1jAyx8SdrUYsyfpRcMaD9ovitpKoBVa1L5BuLckUc4VSTcKaySNwBxYJsBZ8hmR",
  "key7": "ewVcxg3SvW3o7vxXue4WReGSECeg4EFJiS9i5SUfML71chmRxnbP5fpiUhTfHsMPjbUR3Xt9G4rVKVqZ4TyPDLZ",
  "key8": "5jSge1GQr8jiDRnENeB4V2Sr3nHXkfkUqhcpC4xos25nT8Kyt2ccjU2b9RrVx3aWLs7XdW4tEf2YjcVc17gM9Z5A",
  "key9": "4vKXSRNyYmzxCTgCD4PCLdqUQMdsgsWKYkGSRGsw8D4YbSANY43TpUchHBsWXCEFaNjAuKx3FfiaJ8ZBbQgtZYc9",
  "key10": "4sZsKYQ8VyuTcA5mUWhZZ8W2e5jvLAQ3jEv1LDnVXrNuLz1fsZtLLGw7F1DSCYu6ujy38KgoodEBhTncpqrn7crM",
  "key11": "5wdKGDYEeeiCN6sVYDn6nhUjKkwPBZGvkcNkQC2wKFRx3cfaAkhy5g8eTZhyUXhbRR7fu4mXQyKVAPiU4rb53N9b",
  "key12": "4XegcoRhzj6DrFkfygXyarhjNcC5oT9qshXcp3JjzHRLHpkXvk5SDiLJT3mNXaw7cQQ2XVwgJrqWwVojBvmt44fm",
  "key13": "4XgBTfo5KzcXQsVkqra8yuWetF72RqQGTMvGmD6zQXDtoGg2CkddES1RG5TFjGuKFi4FxDbZfSgfaepPLsP2xiwj",
  "key14": "3uA2nin5976EsMrC6DMzzioZdQW3dSVpkN9Crr1ryj5sM45gkEKDwvxEke4w7G26PdghSwLaBj9JHmug2jXXr7j2",
  "key15": "53HsYpX2Qnn7f19gnq8zvwRNKyJvokwXAg45rD6qRR4vLNPGU2gKCTkFodwbZGPdxHuc43NZGDX2SzSf2mE5jSVU",
  "key16": "4k3HC1eTcJaMnUCsMUzAHZXPNsEAMtcHzX4cgdxYJHxssR2H7viNRgu5q7JpbFhxXXZrNy5Mta8M64KMmqvDAKf6",
  "key17": "3H9wiBkhgXjy7jyob2Ner89xXoCYHvbuKSHLb8ysoaU8Q74sMKEAKxP2WAAWySHxSnzmSoBvpuX9Ui3MAsMKF464",
  "key18": "2oq7sHGccnGJY35qjh5mssw5VnKGGkgFpvs8wib55NczM3nEuhGXaihr4JFxjzrVQHqHGfeKWENqNb2pv7es1QSj",
  "key19": "3P1eoAG7Auz77nNbERNi1cQCcGc3jcmp5W8pohupMABJpfuwBz78BSPHQ8Czakw8ZQ4w9ZDoSCPkhRAJZU9QBvxc",
  "key20": "4sbFXKYuhiuhEW6tujjzasMv1UnXP6uJS45nkvD96jAnrmo7fbL6y8PZb8pxxJaZmksNL2RYhGwLCKRpzVdd79RT",
  "key21": "58vDdsM7voGPzrCEVqbJCGKKdf3p9oH8H5tNQMddpjS48wUzXYCZt95Vds68mjmywT8DY1esZrgRyc9kvvnT2V4c",
  "key22": "4x5z2FVb4PHhYSFnEkQYTxQt6kAbJE4JQtawgPn7qWUko2youYaQn3aDLz3hifJ1VNSjWNLYMZPcABg7sCdfsnVq",
  "key23": "2jASTRnn2fWEZ6y9HM5R2dDHTN6mDQDeCnKvmHoAbuDgwaYMcB3iJEvtttZ3Myc8gm9oHZkfJztAHxyDYWZGNafT",
  "key24": "3XYry3HXLJicCB6NmAFnFSCBoEAAdPpA852DNn1ibw3Qk9aTAbWb97RMhRY3VXopMa5mxQAw779J9V3mFntvYd5d",
  "key25": "5Z6NSbTx6H4vPevCHhBL1oxTzz8tkxqUdr8tz1NxkyWamq5UgbV9xDwBKf5fmkvpPZbVqR4CDkYsE4DpinTUj3js",
  "key26": "3dmaELeetpfcj9W8dYc7dpdN9eNCLTTPzp7QtBqX9A3bYtrwaDzPTPJjgcGrN1ZS3ASRNdW52U7FXzwcPoqfyZYJ",
  "key27": "2mRamoYxHiTxwEC1AWMkQ9ReLRmQxxfQwYw9yoWvqAnswDNPWyzVsEbgWL6DMNsBmmYUQqe5e88CLDAGYRoDeepQ",
  "key28": "2jurWBgCrayWrs88SThaXCvT9765LDCJS7EptA286EiXbxA71serCkHfyhDPq253oxEVRBKSVC5ZRPN5hBNk6mT4",
  "key29": "47cmwgRqNdc5crKJ1HkmDYzLRpGsC86JFBKTrTJxH8w6oyMtR4hCggdBtcgLjCwdfAhUAEx1RU3h1d5t2rrjD8To",
  "key30": "35CkVviKXDLMp1H59vwsBLNwC31zeAsGKYj2gGSGDyPDTEQ2oXbommJ3gvGNiKL32h353L7U33kx5H9FEFMZzqcM",
  "key31": "dX23UnFRTzG2FSEQifar1aCxBDMYvRMvbsZpARyeD39W8Lpy4Vxx7gYjG6H3vodcKYqYYDv11qgjBdApcTjvznr",
  "key32": "4soKRqWxpxHZgwwZxBLaK3kjTsfLoRL4DYgNWt22EwmrmEs6XjTMNBZLm9WgnHrj3Sf2s62gfdHJynafXLKajc8D",
  "key33": "5m7rz1uUmpgJaU7qsgZwChjtXXB57U5yU3B4x71LdLZ5i3gvTDCXKdcofr3ZLQGg731Kg55qBaXETfN3LxcSapgs",
  "key34": "3T2Jn32XUHwyNovL73p6QGkmzZWpadT53MyN8ad3ReTwbREwuW9f8GhiMXiv6v86QeEbFMJg6svxecJ59CbLyfi6"
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
