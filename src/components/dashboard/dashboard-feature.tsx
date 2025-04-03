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
    "3DitxcihNFFGnspx5PwyWTbxFTTwULfG7FeWnVE6a9B21pA1BvLRZXzsTFLdR7WcMf3pU9RLDboMLSvix4Mi9Pz6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MTgVqRsNEUkNkjG6B6TyZjDwmPbJ3jBqqfJPWoRHNBvVRE5ytWkDak4AJ7dFaD3EpvdUuQ9ECazXq7BsDQZgxX7",
  "key1": "PyktCXdfpHhYgM6BDWPcP4MHkGHUCMeaJ2WkpXJYo2XWaTT1Cnzkn8uDBH5wHUQ491HPxxgzax1pNKXK1LKFXYZ",
  "key2": "3pA8AUgHKqe9JFeYSXTuqmCmF9wi4LQvqyuMC4Dsp7ayTFymz1iJWDojmeZWhGZDik2gXNxhPpqtnJzqFrp1BHww",
  "key3": "3JkykMaSNJtsfhpGTpjLUFUsGzZKjLZMnUWnGedheD4MisJwD54yEexdkQhVfo8n1nJKGwuu3GRmGPN511caoQ3u",
  "key4": "4oM29KHBzh1DyF4ZgS1gkqHfc4bx8qh4sQaMUgTgPYou1ritDUfDpVQqTcYqAcVedYhJWVcWJanw2HfXWS1UnmY",
  "key5": "2XwSwsfazayXwSi1miSwfwNCHRBWfynC8yQf4D1rnbzhZdmyRTi7bg45r8J6CyXFgDbanxh73Db8CebuivNfF4B4",
  "key6": "2RCs4UbZAQFmwHzufpdQSjr44vHUWf7XtM8tthtY7qBgdFjoR2e21K2wPUEUQyjLjo4qCng8W3wi67UBzR2DhWfu",
  "key7": "3biXusitmc8JoU5eTibDe9fHVvCx5mmduseyfd4sVs8CAykmoG7fpDmtgfLRXSJCgtSPTAJ88TExkZFTwWDkWckn",
  "key8": "5H6jK4FTHc8zjwLGMe1z9c7NrJHTz1SWTrwrK15d1X3zvTcuj3rRRPpzc7SgoipwYWAj4of8sjmJH8rMXJkmk1Wi",
  "key9": "622xPyDEvSPckP1nR4t33FhVrwkhqXJmGEyjs4EnsmSWaXMErZPrzqU4UcLGXFeGBumBd49MsSgc3ifEG3ahnb9s",
  "key10": "4mnSrZJGe5P5DnEEBfD9cYb5sy8fvMjnSpQjxDp4w3T4ESGKctAcFB8Z7XTPCu8XCtbPbeNs65dEbqPC8ttRbY1B",
  "key11": "DvCW3zfribjeLoyirkMcG6Kq76WeTv4D6QxVLtPHQZd6ZvucGXsmxm6AjoxWH3MBSTVZq3XbxiQQpULLQUmcFQy",
  "key12": "5yqCUbqNSNVWJczMy3un9gwDCKhVtreBg2tNcAK2JfKDFbkaXU7EzsYiQjvStX2jaNkULP2P5riSsLisF8d9aB73",
  "key13": "3LX6XZcvbd8wb8P7ueFgek8SLbdNRC77Y9c8uJyEmtNBkTeH7PdUQNTXaJB3Hcx8RLPSvs96wNXauZrbR5HXcUsb",
  "key14": "58uJL981DDnNctbzugUnAsFHyKGpPxEJSJ7Pmw1E4Fk35x3kdinPJK5TFzkU7ArpWuv6xXq1Hzk1NXtufhw9Q8BT",
  "key15": "2NSqGVJcT5CiprTwBAuzhUDuPWSARDrs8uGXKzivMTux2QnJjRoJERPooniexc5oAxTmDwF5MtKmfZWK6WXLhXNm",
  "key16": "2eDgmfaAPFte5vgmLrjxyEXJyyDmnMmQa8AdEPT5RqJDgVaHYC1zXzXc7ABiW4YUDwiJhDvdvweQ7w64Uq9PKsPx",
  "key17": "4j3aXqz7dmGyWZ8C4LshGqfn5uxneCyhdVMoTPERuehvXRCRu4ZjM2sH4vx9pKSsM4Vs83yPMYASi5DqvwiVVeVx",
  "key18": "5pLKJFzadeyrwUGk6Xxxeiv4auip3s8FMrkEqmmmDYgfbrg3yVSyX4SanJ3pvgzKh2ee9Q9apBW7iSs6u4HSCnwr",
  "key19": "3uTMfmQWUsg7JR3XTA1pCVNQmEHpRSNAeZc7M3bM8givNR2Eqf9zTySJimSHjLqfqAgj1J9y7nmmh5rnwmZqaEHy",
  "key20": "Ei8rmAwjehbgP4uoJcMbmTkaGbezLDJNYnh8gevngADEikeyv7vNVHMNSmm55smqGBGNyTxo5XWJqa9JG7SkSys",
  "key21": "3v7fXwEqHoXGCouHpgsqF8wrzEQPw9DWjSHjCeZWNiT7B5DJc3v5LtfLwS9FzYVGgDAxLsdyWPCDbRftRJws2vjF",
  "key22": "5PjRQedPUMNoQMa73p7eSZzKamMbRXqq8jZdKzdScfCkNrnLWj7JGr4mvmLwG6kTuaWwpfvgjQP8mw2wVkviMm2k",
  "key23": "5U9FKGbtM7Xea7nfA3Tgyd7txsSKoFiquQ825rkKQkGs96RTKLxMbPvvVKYQ1PexHF9GdYeRYRSkjY8t2R12nGq6",
  "key24": "3fznZtPEwMKH79phNzWoAw2KXuuTUKCouRZNuixySt2Na73fgtGRdcvDByXW9dge4MpZhn5N1JtMYAVyb54LfG71",
  "key25": "2LLcPuKw7WjG8BFPRNTVgKTHEjxGpCWnRtVFNAeoWFKZgLCJoVALM8rGL6LMDatGbic5dhQYVzEixVUb79hMcpCt",
  "key26": "3CTjExXQ6ka6rWQswkQT9mFnfxbH2DBPfGsfDygbkHgaTgWu43czvSX6qAZrtgVwQdvfea5GDkdttTN2yR6tw9Uv",
  "key27": "5Nb2nxD78ogQZHqaiKjTgeaLYeRYk6mJjvLjTcc8QkRX8o4Eb275rMSWR3fo9g6iaED3UHfYo6AoJPsyXve4s7yk",
  "key28": "3HoYiHqPmEunStNwngVkzem9hkW28fKShk1SkeDVRG3qLBcw9p7o1uit284do5RmSSxV4HuU4omVkV6kMUkowbJY"
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
