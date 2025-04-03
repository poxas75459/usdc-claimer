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
    "2zwVNzgJkKmAoFZmnue5nC6MXyF6d5jEwkurShaYviX61fVj7RR2zGSVKeZ2aSXh27TChzVDgKX1e6xdBWkRuhEj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xh1G4Q1KDqjM5PYWmL9xa5mYV5svTJXWxFAgWmUY71cQeoR17mmrJ6SP5oDyiuLCcmikqVyBQJ2vb8ChoZtmrK",
  "key1": "2bwhpoCqw44P3WGtK8Ke9h2mEzPNq66AjhtX8S6AwSBuQeabPoFpDmo5jxpy54Q37qMbWZ4yB9xkb2TgzRQm96CN",
  "key2": "4xU4aF5Uspazk5D4R174UBN1CoqeSFLwRpG2fvsabMRK7kxRmK5SVh2kHAtoXB4kGerQEvxYf9BmsQaB6t5M4mEm",
  "key3": "2KkhUAQzKxEHg28pgug3JTSbYQDSkos6TRLZFLEAnD99D59mKqUv2zU6GRqE8Kx6uuh4EmS4cEkMbxZ2vgDCx9F1",
  "key4": "8jn32LzuC7H9tUDv1oS4Z76iUPHVmcEWWAWSzX6FrWevFAoVmU4HKY65FcS9ZGjWusqzb7vh51xDGSKmk3oUXao",
  "key5": "5mnyFi2M5W8i5tCH7Rj76TyGMEWFYKvgUoaUzQ21U2HucJsP1wc2rC9AEbwz629FX9yizBSAg24gtNmSxbqiLfso",
  "key6": "3kAL9DmTLNDYwBBAAnVaUVjoPaZrq4vGdo3kL9pwVhtHyqzH5XesAztU6UnwhAG82tYYiRBUpEgYQnAYSP2kdmv",
  "key7": "48psn9toEKXhKq8myJonkZu4nsewc8H5N8rMx5xAkVioJL4AC5aJbACNJGUcutYS5DdGerg2APBjbyC9Sr4srTzN",
  "key8": "5FzJ79tJVAMhjDb9odtaAwzKxJdzoy9b1LCrFfXCE3UpNQa8BJXm2zEcf5P1V8gkBmVeUwCuLi7E6zFNSKFJqCZY",
  "key9": "4LuTTAu2kSL1S5iT8YwBXFsKiyDtRwtRFiS8knBLzzHDoUFXZarVKiUXGNC6YfhUieATwFDJzGfG6GLY6W1bfsNM",
  "key10": "uuBmfk3GTqSmjisBisoRiHrUBzuNLYjLWR122oqsBmqs2B6rK6hDiWs3aRbhzMPi9CpAQj52Q3U74ihjT1WymRX",
  "key11": "2kNvXYvyqcs6f1HCo5S6qHSPnqL2vu2ECnA3dfwTcWokr21HjmXms1MJGzeVXGVYERVX3cAsPQnpHRQoGs5RaXwq",
  "key12": "44n3mMMrZPeRKQZuZ8mUtCmPAexNxG9kf62bdeeFFzReD4PFYy1iPMavsike2BHq3PeXgu1DcYC7dW6BiJv7t6Ge",
  "key13": "DrabtKfTYRXZWSL5meKWXLsNssebkhArC4YPyKz94UNNRxtttymK1dTw2UyFCqHvpJbLPxpPBy7TGAuWTjCuhDe",
  "key14": "3Tbkeh4GvnQ3pHm2cmgUnFLe9upVxR4LJREpJoGeDtAzBBKNq82su9vwG148hv5ngFQjRurpqkJM9TQZg8CdG4DY",
  "key15": "2MFp3FkQDyHtBybnuLVCu1z5sLAQmJsNhNoi6fUMWg1bm2guzxQeeCB43EojSuRt4xrDzjFdjMZzW5aLjfMLGbK9",
  "key16": "t5nRyfquzkzo38VGfrBizGB5nCV4vFDWTWSGcCcstQY4kBPgZxyc71jd2RuLazCkTqfdM3LbLJDXb9HnTt9Cpr4",
  "key17": "57fZPT2Cm7UmDAD4YyZ6Nn8j4g84dX3K7JxGopcTs4P4NeRbnUfUqUJbEp4NdmLwdcrYDAS8mbW3KVT4efpcfBQn",
  "key18": "juQ2EEmtFVC8a3amnBYYTUW8qeFkfadBn9QfKG8SfKMEjkR5Nx8NtLBEw5Mf4tmZXs9dC28BQcsvzxKh2kk2h9C",
  "key19": "2agnnARjCfDVbHh7wRGwv4MoUHo4yMeopuNRWBE9hGD1trfxCKdtDi7ERkGZyNew1zfFHyb8XRRx7t8FoS75yf3u",
  "key20": "SD8Vis6EXu6UQPfkXMW9ZWw1eCpGupJyFCPfh5tzUnip5iXP3d9QSQbwEG9GYxssP7ZzcQP79B3VAHJ7ifBwbjh",
  "key21": "5YicGA6Topuy56eWCLx11KcPiLakBDMFpgSi2b4RoCjsMGyBPYim2XKQ3sHnUicQvwf19PECe9NJpSbQyBMXdXq4",
  "key22": "4VxWVqrKh6kE8VdJ6f1QEf7kY9CymkPmPzdhUkfBg6gqfVihNa8uUWMRDzTJkCpEyXa4ZATM4bad8Bpbxcz5ttFL",
  "key23": "2kN3ro973qckTHL1aZpj7cDH8LQCcfjkqHQDc5woE3qA4CWMcaBwqtZo7Up1RXRnbpGLt4EoL5yaCcwdFdEDSYJ8",
  "key24": "45D2LeAmRBJQJxaJ9DWHtpEefbBbQYPXJ6h9VPm9n35DNRhvoFWvQNEzyKQXFez5aTS3WNqSKNptL9eX99x4dCZg",
  "key25": "3C3qiH6hD2W4aUpziBbXzGCEQVjEow4EsxEWqitPyfvX83DaTKwt7LMdoRkDapjifibhhhcBFCsoGaHaEZgJmbUK",
  "key26": "3zVTr4yxDSneAArdKfFD6RhKyX3CVGq1CRHneVaDFENt16LQdMzKeqmsCKHNAqoobMkv4r35YH9P2oyzegKCszNk",
  "key27": "5JwmpJxRzAtyNbUGCA26GxohjkdveZesBdWGPLdDEcewdndS6DR7WyqXsDuEzoTkHPd6VBb5DtgsiiDuiZASHjnW",
  "key28": "3oswN9eb5MazJKQ9odMavJFBKGoceaRvS7bHG75zUfYyJCy8Gq9Q1XzhjxmVQfmDgw2UnwJVDBZtzAFvtHXMN5RF",
  "key29": "2E1RkjAyXEmFLpsQZho94oF8iC4FSomtJ2sk7cx2iwfDmUaeX7QEvgM2SKcv7k7SNQuL7sp5sYfG9YSPFnPBPcEJ",
  "key30": "2CfivvbPHicbZ63kPRJ6q1LGenopSu1n8DSSj1Gexor1mjvkDQVB3XChnpHbrkRFm4BYeBBZketzfKZREh9qapx",
  "key31": "4i6Xm6Kpa4e98CKgvURjppFVZUwXm4Khd9ij3DWn3KspKXPmoJW11EQuuyhWn5AxNPnrhcqLWiEK5YnLbCKir1qW",
  "key32": "2TAKNDWJisHEJcDwLQnxXEzWowqooA5X2bP2fiYz1NEwiDk6bh8FHPAuJe9ybhiewqaWo2RDmPNnoQNiy3nQM5Gz",
  "key33": "4e11ZA8trVH39x5cjGW7kpoSAQzTG9dtcQv5bWk7brPAEhpj9Xa31H87gZJ5PyqiqiVroMAnjWnsXB1EQzxgrCvo",
  "key34": "TPW2KsfD3thFF83JQoVb51az8yxADaTdCTirSUPdr93e7s8twBVjAWVsZ4GcPYqtmKF3H5zCw3Yz6RSjeFNXbLC",
  "key35": "2LdUuaSgCKVyghpLN5cqXA6KHZwgFtDonKx3Gcwk8ddAtK96oELAU4LptkhpsZgdxbH4kWRHd6ETUxBmK55Qq2ru"
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
