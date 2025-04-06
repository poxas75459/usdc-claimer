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
    "WLnTt8UE2PVV5KGEshLMtwXohLssgQu6oUpmqaQrpZU8CBMA4Xb8CqzcuyRZPHuANUEqAEhmCo6na8BVX3jH7hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQJrL3kBKUmAeMMjz4getHJNeXB5JjENACzMg7Gn24xjP1HPX547PSx9SDjLXNyLHFqALQ3z8x6cee3eikYV79S",
  "key1": "4jR3eydrAxvtxvQJT1GQy2qvyp36mLSMZYgYYBDccS94Esds8i4wt4m3HdsagsyFCEGCzAsbw54PNMiRkQZ5ZukZ",
  "key2": "km9ocuLBSnF1eyDXYrwPtWJddb7daaomwc6vZcN5ou1nYwPcTWyXgiBWc3wYzC7tUsj3ujjQ1SeYxx6rzumVGHJ",
  "key3": "2pvXr35bCtcZksqz28RtfNJZHJvor3FRtB8nMDXvHuwPfjHPrTqxS8gLvchNCPNCALaJsxCig4j1jmREg76f15mx",
  "key4": "2onrhobFZoBjCKn4P6QiCfW9BRfibaqTLYWucFnBcC8i248ju8sZoNMCqZGsC7Togf2RjUmk4EJuKh7obqR3RdUw",
  "key5": "36J9V1h7cXxFrHPMM7ee63qcp3M7zqKUjXshoEUkRYVKJuzGRESVyUMTvs51Gef7btiyGNB5fHDAkRMgyjoNsRsM",
  "key6": "4qU51eM32uidBEjgHo2wwx65XgoXRwUNjRdW7RiZggAa6GfazawJwKngYuSrBgT5PXJ3477oNF6Hx1dX1zKDfwNf",
  "key7": "2ksVQJuXppHAVZsK9HxUn3EdtQRV5z7fw3u578dYYZJXdPk8moTrJrhbJSaWZWKpmMUYBmt58iHWHmT1rY1rpAog",
  "key8": "uSbpFn6GoeahviaNrvfiAEhNJ6VYj1sMK21f6nKQFqpVPzN6DmfABAKMxtBjKN4dLiC4dCiP8ArB2DoNf5s6zEh",
  "key9": "66wV2nFyjYGgRWT6hbXTL1nLHUxyxtJYCHPfwJu4CRWGLqUjVKJKdKxg9MjTWbQqmwU8gbLxmmziUnqVt5ZYUrVj",
  "key10": "2zna6Roj4ZXLNp4TcAujUnDU3gMvgR4ac53vkkBfPLW575ayPVd8cDzYCCfSmNMzyvCErCZep6KdzAW6PjiKzaQM",
  "key11": "62uvNBNsSca95vK1kF2MCCo21Z29Bjt4yTvHA2cEhZ9QjkaJtQUaissaR5JHcktXsy5tpbgmaafUFtwMRDUDbCpV",
  "key12": "3SonV57PVwqc5mUAtQRiR79YAhY3nkFt8AHXW7K2xCSKDEm1a48KgoJTUQgysWSQE37zEwE9uPGcED2twfi2b7zg",
  "key13": "5f4KXDCtEwrfjsr7XPPGodZAbtwmJmL9JNCvy56Ts4WMvfKngJLf1JEnyGsHpgeiZQ2dxgxod6DgJZEe1u7SCfUR",
  "key14": "29Tdd7BJuUJDLhZfvTWAR5FSkUT5mVc1U1qxsFnmxtGU1NxYfjNVj4DcBLWhALyQFPj59MchKJgNNxZRA1w9A21g",
  "key15": "2DHuGcF2QEYrpUSsjU8rhu791eromgMhabF8qY2HgbhZhgAgsVUqWMGYEKvSgN6nveGVucAu3GW5ayw2hkozvBc3",
  "key16": "51i8Hhd59EnWTR3RzTS3tgvkPR6ALNpGUmvnSQ7C8uNMu7WhmP8PbKXRRFdcV3EGNPgjFFhLw869HcNdboRY9uzL",
  "key17": "4f5CEJAHo9RLNu2Ry2wU6jzNHcBiaTPB9QhnWTNqjajFqiyXGMZSyEPi7MPQjrZFogZEut33YVrDwuCv8ToLCKo",
  "key18": "3kcaNe2Viq662KSxuUfX5WKM4hn85b8G1DJxhngm35tjtcupmEPmChVTs45RensRSZdPhWLCwQ1F9U2zLnkELobF",
  "key19": "2HwiLEUbi56VQCsQfmpNPsRkbU6EmUhrXTXThCsG3G7ofSuxt1B8c5mDrp7vxRy4saNGwzFTvHGSHRxZb23zpMYa",
  "key20": "2VotYB4HrHKExfV8BREq2HAkxpGA4PbnpuRvqNZ1yzu83aachT7UKuCq8CkKNgy8PatPU6dPYiWh9yyeV6hTVYCM",
  "key21": "2RTpBhpCukRjuY2auoLNUoGWrCf2eun2vpbrkpAtBy9ERTvoEP4G4ArL85DFDn5o8bTN1LWYUUvUTu2BWgqAnD5f",
  "key22": "2GSeFmgGyCYBUbMTLqTRrm4VT1G8nk6pw9dWbWky2ur1ZAtEEoiL1FNfA8ghfeaJDFFETdgH6NDvz7FGJJ7N1pF2",
  "key23": "TNhaCseyLNsLZe45xRrzZHVgVCEqUphijDcL5aK1zr3hi7Hyvboj2viEHdAgydoME3ubZK4d89K1YNNnEqKZmtP",
  "key24": "2CTscqYgUHmxb9Vw3QLzktSsZ9or8EyhWwEJWe3yGNm2ZTT3Sb7dLnL44dMw2UuUVhMhdwwraNXqU2LEYVKZxdhF",
  "key25": "3DunJ5ykxfZ6ktKtwHpLFyuHxU95RVZ1BUsVaqdxaVSx914zB7mRxZxK1YnCUTeW1rXmpJtfmRPXUenLzMzoEqzM",
  "key26": "2duy3arVV2xZq1tiUenh9XPe3CuLFayS1zhJyyy7rkV8CCbdYk1R9FU5wTLApdfL3qKLyRSgUftYTbTej34ghbka",
  "key27": "3iFGuhQfguLmvY4TaLzZX6y9H4HVVzFV6A2x2X1vBXDopiVBSsgcbXw9zCaQP6BXvgEPn2QcbdidDiMw3nziV48G",
  "key28": "4Ra5ScpMPVE2roJCTY1UMG4Z6PtMgQRap3H8worqvCSyyhMRXiP6SmbTU3DNGN7CdeBKWaH5QKsEGr9yiStojKVm",
  "key29": "5rypFxumEdsE5Aqg4RdoqqTsrcvPvFgRMsNMAun3pppaewmNUmTbfHWjvLXXiPHNbCHrcJ4eHcCHBsZxCMmpFhZc",
  "key30": "2YvxGnCtESctRVjDJ3VRc9USj3oisSgCWM2zcKz6mCqpvyazFxHtF7hTuEXpMovF8xmQw9pBgQqNVZCxRs2Qr6qU",
  "key31": "BqAwRVneDDCb5p8tsXXsa4bUiGBKaPFL2fFLseSENqZnbJaMYkdZPNoYPXtYmkUvu9MfP8EJrkHQh3VW2Th6XhJ"
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
