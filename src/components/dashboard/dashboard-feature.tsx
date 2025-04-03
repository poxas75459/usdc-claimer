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
    "4eJ8Jg1sFBoCNURQE4MQ3JS5T7eVQAidY5Xy9TdqWNUvrmnykBJf6DTpDw6M6pqu8fJCFVvENSnxejpvMKEa5XdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pwBU2ZjczF7P5F1E1VGUGCnJhKjAUQd2TFWPQMFkK8sEDqJVFcNjabXsDLd5DwhAmE1cYLViwVzz1y4Y7gfytzp",
  "key1": "32JxxCkewms4PsTu2VhsWFMt1SUqBCNps8A8euGnaPhyDpskS2ywCSXHL4rhsfdbrHMXLWonpNHaDzLrxSq5TgrS",
  "key2": "4yx6K4dQqK2cETnQ2d5LQL1qzXdFaV678PkNBLuXveC6AKzZTBGkdzFgW5MxANFBdCbGUzpnURrjfohrjzNqKRSa",
  "key3": "3vDHckV1RvTEEwDb8zqqBgLWZ9HpeRKomaciVB1WXWJLZdhgxCZyQvxqUG8jJX66vT14VRye1tE1GyRiUHHWnRvD",
  "key4": "4e9W31mMYELbH3UZuwx8GwrMW7yTWfp6kwsEbvD5BLRFYCjT2Txm8qgi1Z7q3ejoqESEy1Yziha17xDeiP9aUzXe",
  "key5": "PuQT1pC1g7MsB5r8mDMfeFVoL9mixtrZVRdJ18tM2vvPiLrt2fTT92yBYbzCixTNKYrgj2TQLSkdeBYNSZHR44H",
  "key6": "5ycNj5gK8T1rsuXG2GiBcKzmbf2c162gvcpS51KXsHxMEYm5VWT4ts2jghVfdSosRGSwbhJR495xs7vfsdBbjrse",
  "key7": "2FCg3ZF1a69TvkqNbLR9WjGyQq39nHzat4nzJ2fw9DXn15b1r1fQiWv1QiVJbGNJZfLCJeQPJq68A2C8Shfv4w8A",
  "key8": "2Hnd2jWwcEo9w1K3EWm7gCbAbipbSXrfBGwcHChoaHbwbcm7XpS4TpPz2UqLNwDCV2L5AfdrR5R1bW7fBzvBpuCw",
  "key9": "4qQVuHHtj2o3XFfwDdV8MWByUwfJb7qHurtV1dTqYngEhfSWNHnW3878UkF6KaN25835BWFjJuDKM88xHN5bia1R",
  "key10": "4RjXJmPqFFcBVcA5npEyAFfFPHmXpviWK4eE6gHWFcDvskHh2BnTGskeozSghJrNozY8UZjHrv5JZKdv4H5M52iT",
  "key11": "DfRDFvgRb8iz6ByGmNh6cLrTbXdwoYFmuxMiPxi26SXhjXQif5ubxaEpxmrP2p4wt7Ro2MRWrSPjpTim7Pz1cW2",
  "key12": "2sm6viGAcQb5jyTjQeJ4wXJoBtXv8e2jEE9TvKUz2u8mENnTyUdEpCMEX1qeFqhuDD3wKmqAi5i15hiuDK8GynZC",
  "key13": "5FxFSNC3Npi3ydbJKJEykTsxy7mJBv5RRNu32hi78fBYLXcArqeXUvwscfgCCycVjKypheegQenNWcermVfZRqgv",
  "key14": "2MwjaM8DVXJc53AbYC1ah1ZeFSwDgdSH7ZRC3Pvo4a6rmvpZLFnB49bPRTwkA7XyGWHiFRETus74C2br8n8uBrSG",
  "key15": "2NyDN77U5vXt16vwde3Z2W22pw4pjCgrGbmwRqW8h7zMFSGV85muExia5GZyz5c3pjyiJLpVrFweg47aLxEF45yZ",
  "key16": "3KEydBJFNdcZf2BsSBW3GRT5rr7BtfRiWexT6KbAiUftToNd1pyBvcNbCmBPZs7unnQDGiW3Hefv7mCeVimNcFRA",
  "key17": "499feHAJVm5iV6w3REshBuaKKAhkmANzmrwhV2fT4Qa3ovdRT4MsDfVKGpp9wcN9WyFxAxjAWAJ3tQvzYvjbDcEm",
  "key18": "2X68nsBiMak3CwtFYxuf44WDByaJhfadKwiuBRMCi6odAZAoYP4nm3UHX9vPhkk1gcqR8TJGw6H8Cpq2ZQDbsQ75",
  "key19": "5JKuKPE238kyfM1CS2m39ns4A1WxtgMrGaYbEGMvcE18JxMud7cm7YwEFoEzjz3qKzCDftkTVUhpVPXXt8YpW7aq",
  "key20": "4Fmui7vpjLAkfDu223kpRG9UnjJgfbPdK3UzZiXAkP6vd7Ao3BKPDQszXLZqDB7eZVuws5jex3ne9EKBfUgXJguY",
  "key21": "3As5S4DxSh1tvdjh5CfXbAyzmfBXqfZdCXpLTGnv3Ewc1jwc5oHaP9uKyodeXzzGCPxY2ciMgkaEGJ6J6ncPaz7m",
  "key22": "5akjJy6R87PekCr3aekswdGcURJrai4Vdn9WkCuyXSu5bz98paYvN4S5sJ9uzMSsgJCr6oTm29gAmLdFusA2BuWU",
  "key23": "DCi3rM7LqXcT8JU5fu34CgND9ryw45d8PotdTR96jxrTsLxFTpvQf39fXLSo8wMtUFfDrz9TStweMfA5T965Zse",
  "key24": "4sGBFMy9PM4WPEQmfkxAxxvXgtcdB27GazAo2V2JmXR5SbXTEKLVanXwZMzh7pRW5K6qMP7T1cUQZSvP4qjafxiD",
  "key25": "X3B4tyspGzmiCTUBmP7uBRE6p3NYMZXku8kiPhW6BytED9Yg1KRLYKw8dh5BgcccP5sLwF1ge9hwoJJKPVZx64t",
  "key26": "4k84EdPBKMzVZg8WDd4r54nrDv38saPwgMdvjM8R1Df495aqsMVP2yJ8Q44z34Prq4fVuoXZUgGeCfMh3BTbCYTM",
  "key27": "hBytuyVCM7azJKJKBNJzrgFWXVWLtS8TA6xGFcJLuzGBMARUEa8ryFmxe87ByrFHR15rCpU3JyK7Kd1PkJMaraS",
  "key28": "3jutVwYK33NBHj4cAa2A87BE8iGKqYkGTcschNCi62HhScZX2EsExwj9PAx6gcEardb1q3EuYyk3NRUZ4PZMNfp2",
  "key29": "4FayMQZuiC5mUf27dQ9e2vGSvqf1Ais8nExWhVMDPPuehRMxMPAjV5ZyEkiWzQk89EQtX7wsyatc3MNYoSrKX1D",
  "key30": "3EXPBbMRNYnF3TuX8Cuxb7exTwLAEEbXLE71eec1mHvvSwcnwFAG4tkmH9xdNTbQPLoycUMhM4iWpXXyHZBwgA7x",
  "key31": "3HFzPjpWVDu3jK8sPxYPZYkBrdDDAAJeqz5z5TNgjVa4NPxiMTmx2kqfDAorCvZ1AdtTLjHoYXTNcFnGWgTneymS",
  "key32": "4bK9qz9FSFinj2ACuBz8CbrbGRbv7FKzgvLRrVnXfdsgSLZYmUdJhBU47bsPvq8AgRL3UU4VZYPwwAgmxRCcmmMq"
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
