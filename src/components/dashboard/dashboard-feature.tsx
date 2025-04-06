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
    "4yQwxt74axcD32Nqwt62CxZKTvELWx2SiVg9cMvVQ2poStYTaftJ72nx2paD7kwHf4Z3FvhosfaEdCeptLLmRQEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EDeEnKhW4yQYsaFMYP1JWxzaJabjAs3KCPaJW18GGgNYoELqmYnJb18UTXjCyburRJjugvEahqkk3ePmH4CkjoW",
  "key1": "2h6hZepoXNpRWC2SpwjmcX3zYqQMWKEbhrCRzfk6HjTdwM2ZrGP1cSKQgPbHAkBvgPsGiSdHjmjG2G4qz4kEsyEo",
  "key2": "5cKc6FWa96UkzyksdCiamejfw4jvpZV5LgYp3eXTYCPCfgcPTdUsD3KgwFbzBBTTnobEAA6p1dBxTS1oqhutBA6w",
  "key3": "4Ly4JjCEfSCm9bM3VMyPKizkRJsjcxDyRJk9rMG3qnYznvs369WRmABX9o84fRdPnutDP85U8i7UmCWjFWcySQfv",
  "key4": "4kQxZiMoSm59cAKJnK14ceV8LmEge8CzAbwVjfdcqkcStdzcEF9cy8iQxhJuvKw8DTRhXb2HuTcpUq45n99gcP9b",
  "key5": "21SKKrbXdGWHjuBYgFTWXBRwzHRcToVjnP2e1HPhfgkJkboxgsrXCPVjibmETu8vyFXmGPbV5BqN39vLuamZrsD7",
  "key6": "4nNLrR1V1imCne63nja1VPxyeEq2pZa3YTm91zjBM95MS8U7EknxhFSF4tb7mB3Lx5q2jxcHjxQ3LPZhChF3JYCL",
  "key7": "2S1jNkdbA6xdtAJWyb4ZHYPLArTuVRyaowti8SUMgJa8BhKAWHXuVPiFSoBxvUAS5zgJjB6oPwtXKpCZVzs4K6kz",
  "key8": "5YLFrsuw5YjV6yRnZ2yGeYNrbQMqRTgjiFtB4vnFBKeTz7ZsyzT7gb6LiFFNcCSeJew8fhHHSjZMDjVG4FB4q9gi",
  "key9": "PH7BwSzmpdaJaGtRR4EcX1DYhExs4TyVcme5qQbnYqQJQcUZc1de5HHR5k7SpKQuFUX76m53q8SkXfd6wMgtfxL",
  "key10": "3zaPAe7SyRksVgraKyS4aXGUWoPpHwJ94qHmbtUgEbUJykEwjDKxe8m27vGs18g17GJDXuMa5EDtNNUPKDKqJvoC",
  "key11": "5NVvWmewL3rDiriyfx59JhDo8hiVZ1hp28q8rJsJLrSRtTYydiFqCJmqh1Qff1bV9RwwJ29DZfrGgipoenSeUJEd",
  "key12": "2JGc9gM7LiwFBovPupCcPH5jCJYYCmCdntVPQTFCuQMY6qkN2DsLPUHg9eJeT5QyiGnmzMb4pwdkfTTUpvPQprLq",
  "key13": "4EGQJBR58zS3QN8DKfHCavJV3xUEENupg9TbPP9UiSr1VkdeZcHhqR5D312Etqz5nLEBJm5eD38ATam3ytXK5X4S",
  "key14": "3wxeW1ttP9RH94fFEisxuXGrCejBqFdi5nzMeod8MCTx9EbEaBz5fHgBinULqeZpBsEtUTAD6V19ZzCrrDUsp7Qs",
  "key15": "FcHXWybYAm192ShDwvafvCbaF9GPgJHxWHWt8JqtAFtCPdWjwRjyvmq64TiQ4H62sLo4iZG7ioCRh5YJ7iZfShf",
  "key16": "4TYB2bAcp2JFFGuJuwGgNkXdgh3KjXe5MgUpVFVCiSZyJ9yjKXaGkMQoEuiNDJ7D4kreLGFb8w2YBpT43uRNbVHs",
  "key17": "JPk9aiWG9V7VyBBxwhPVETgSGsQUYCjamy8nYzYqNyxX4ZExe8ps5Qc4kVNYC3ZmseuJ83YCRMbDPYizDVkAn7Q",
  "key18": "fEzy98uMfxEK4r5igR9DcMFPwQ5tJiGyV1bsmFjEhvd6xNhMAErt9MsBiTRPuM1t5AKYQ2qrhggyRbnYtvGNF4g",
  "key19": "2XpftwBy9AXZEGXkiZnPptBXWELjEqaVEY9Nytx6D7dadgzFUkuFXqdSHsfQWbkqJNNNW4Dr28gpnQPg2tz1op7f",
  "key20": "3WBoKFoSRYVR65w3mTt5KCPTyNhdR3w2TAbX9Vo7K4UpwZ3rHo93g3KE7ZRGnBgGzBvBaKDLynb8o9f241ByUPiW",
  "key21": "2EYzHdnDTay5myTbGNEvmCKahpPRybykFPNhMn4xqGJfUNL3jG6CjWNb7ZoXvHf7QsQQvd7N4rVW7xHgSGya751Q",
  "key22": "3wYiSQhfCjoF6P3BHMGzTwubpp7R3kRhkkKgXUUS4rzf1RxV1yuSKSjDtqLLjQBdb2nyadU7C51ZiU2YEqZ2WFRr",
  "key23": "5k9R7wBtjyXctofGbRSqhyUXEoUFrBtHmqFemK8TvLuhVQouFaxS2fNC22ihzMSiwCLeBA8bo3Sx3Duq7jZL1uwJ",
  "key24": "4qhZxXTGx1B4NdVnpgr8Aes9H7vyFH7QG2NgxZEqa7M2yw2h9DsNCekGqbtGUr8HWxbQ5Eo4Mfuxj4yW2LeL6iaP",
  "key25": "2rksDtrRzPZUEMagi86EeyLXLY9BFrmGCuztugjeu9fzhmKRX1Qog5BsieZV9pUES5SESdAeZqT1iQuBQKqdfWfT",
  "key26": "aAqjiSRMnjPymp7vfZJ3CDuoEdUjuk5QqqU4hPGgYnt3XUA2gQ4zJvDxpcPGwVdaTNgm1bnEte9ZDE5TYzEzmeB",
  "key27": "3Jjsm671oh3MonfjG3bsius2gh457H7PBxQG9oyQK4X8osmsWrs4RbHTVqQt9w23yAYDKvB7AiMJ1xm4EezaYnt2",
  "key28": "3XrckPWWnZpqfA4r3TH9peC6L9h27XjHLAX3R4kNHjXnuuFxkH5YQzTEBLt48RcppsnyQrDX9JRGuAkdZauNxF4H",
  "key29": "3eeUfhq4Kkd4BFGii7drCZFFd18Vn2sjXu5c3SXckVjE2Mdksc7Jo3v7PtVVXyBPfxkPUyV1tMH6q8pUPQByJiqV",
  "key30": "4q4DowRcE43UHm851BZGGQCXs7WfNhMtnobGktkKaf813uLuNeE5WB7SSiv9MN6ervZ6N5jj1y8ub6EU65Txc8y5",
  "key31": "5Vriz1Kh4BP2Uk8oavaFWB59ajYZrfJKdDsnqzasAUdWtRNDUQBzhnCGHPuCfdgkCtDxcKJEotUZVVyFpXtbwRoE"
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
