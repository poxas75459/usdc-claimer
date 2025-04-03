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
    "4p8VnG8uaXVyvDrxqTriPV1DXAXCjP8HTWTE1dzWfptEQrvEW5j2CVXLwfFaf15mKif8QbuuRwSjke2337LfZ9na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DLftGKd8ryagtvd5LL5Y56Fixy4rMrpSWzGAUKbn3XPsU3W2THEzb988LCLMjq868knkd9A1pCSF8WXJAcj3zqb",
  "key1": "348NqG8AJuMeDq6FBvef3c1oq2jDx5JqjuksUAKuMsNwh3jo6gm8zETkBEFo4xGkUx9ppK9Mor2xQyA45oGNth3Z",
  "key2": "3E5LCha9QkZRGPscgR7H6go3Tp7rpHhfX5Ft8wf8fa81dCUdarim9vRTiJ3Z6MFW6T8X8AoKAUMvDxPqgudZs6DP",
  "key3": "4yambkPcSZ8EaeSMbG1AA7zE3EoEB2PkCAhs6fftUFypViYSrrnN8Ni3A9ZMZ1x1Nu1uo8U9o61dCNTShdTCXgHc",
  "key4": "5xkXHgBpz5nwaaWgitzirddxqJmRdCpC3MqCs8aG7CQX3EeGJHoVMPFw1RJ2bkVvRhMjsSPQArZusvt5H9s4QXrC",
  "key5": "2RPSMjCS4GoiufmkRKg6P77rz15V51YQasuemXLMWk9qaq8QnQ9cnQLZ8RdGqqPTFhC1ohcSfoKkce2Dy6ap65Cv",
  "key6": "2Saq72oPBXAdXtLJRt9VJWuHpLY1eadVXwxvhjHRMfLXpnwyCLxpVcWXnk16Q3gzjhD8VLJZUGtKWqKPD34SFnKb",
  "key7": "GPNDaCfCjjmAjpxi4Sn1aXTHngwc6GhNVbM2WyptrCL47V1R9odXXhP7qVjaTXAEQV6EfTJGRKbpxNbLecW2dTL",
  "key8": "5vM88LFtS6qxAiaoXagw2huUL1egtsFYM8csoYZCdJ5DdhHRHvDrCb5cxjPFVR7nCnqKhu75CnnkrwVrxuyag1eG",
  "key9": "2oC4YkL3hLvqz35Y1UTBnXkGefH9VZrhva9VJLLXFnbFRiAEZmh4WFWS6eJGG4CR1YySgUvLtUqbchvoidDXJSbb",
  "key10": "Bidk5wFbUNbDwGoHH1Lyi1Y2isyDKef3M6sEkaPbvL6QHbi2Wnmte8BjYHcP6mCuiBYRTnjevdHRKWthYuxpL7e",
  "key11": "5QQh5QP4Rv64gzh2T98mrxZWMtbzFs4s256rbwK94Z3ZnVCCjMJ2ZRY4rLzjs9rmqN9RBMjES5CXfNtefMBhApW4",
  "key12": "3H2DBo2x6J8XBXfL2wyc7qe9BsXcGZrJgu69fm8a9feHQ1n7GVUCEL26HqnJcxdpEffUWmKyBdfNbZRaaSAsT775",
  "key13": "3j2d4oJL2xf4XcrzhSAd755QAtss6hxyuV8FNzkPcjLZLUkBe4bFicSCbtJ7T6hBiViAYKR5vHUKNaPY1ZRuFJMs",
  "key14": "52BSWPAk5zbkBAKEx1KaCJPdTpzsv9YASTL3ojfniFvBfHBbwWXG6j2WomfJ1dDS42F1V65mGtArQdtjoEZy6PyH",
  "key15": "atm6SxoLCiVSuBQwqcieRSdbQ8RMPMCHSAbaGaf2s62oQe44U5GrPdv8LvyPZz5kNppXnXRW5Hgo2Bdo986tPsA",
  "key16": "ANdwNGdcXswALGXerhbEMy6z5rW1m33LgSCNk4jGSmqKUJum3x4dfoJSvBMzEQyPtcC52rdugcc5zjVFiU7AciF",
  "key17": "y79uih6YcsGroA7qyt3X6NhxzxmjhQGcfdZ36kPvJrJs9qq9Jn3pdEaTqUXtJvnXFdgbYbXJ2rLHGKbicKTzNY5",
  "key18": "4poDH95KStSEpJzYfWhJQ8gXvEhr7ZvhpUtzkkxXHdoRj64Kw7bdgFjjQXmgQcPhhou3ryT6ki4w59QmNHKNzUVN",
  "key19": "2pPnuwuEQgXpr5cAM16STC7nDADkfFFwVu1UjRB4xEQUp2BajWmcVfXShNL9WiXP6udWsDiEm7TPk4hfewKXZmLA",
  "key20": "4oicVDUtY4HQwwCqifxEJn3BLJxydNTmKfCaBfMdfYX2iBFbwaahCLggy9zEfTZ1vLoSpyx1nviEHNzNWdtjcgsV",
  "key21": "2JSQhyoNrBbuUUMkM7JHAGQkMLVk1LhUptBRErfvMYnhKGuPvS2YQEqBbXWmAvnWaJxDQPskg7ynhFHtyBjN9FwY",
  "key22": "46GPZigqFdvryxdWCbaPRs38vC1A4njNbvcbMnvucXb1F6ASHBGbPKLn91df8DZ7SMFDK725bPnhp6k3DmjNByse",
  "key23": "2U7Puv7pmQaFqzJ6E4qQuunLE4yK77PFZfmkneoQWGVne8vfV3mg3qzu8fVsFp8zwkHCh9tcnkJCrNwkhF3tANJd",
  "key24": "3B1RFk8VALBx7n75niz8p3Cb5HhMXvSKdxrYWRDyLhwzvTHFG2JM6aCv1u2EXkvvt8SwA3xhbHVyck3Y8UKeyY2L"
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
