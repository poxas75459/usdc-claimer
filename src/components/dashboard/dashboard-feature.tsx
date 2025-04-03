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
    "2DsDuCMAPj58BtATHLmneV2FhFjvCeuj1PS4qomVqf7qfRHhpGYKg8aYb1XJG6JTAgQN9RPgCQ3CZKP2AcTgixjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KPT83XkdrnVD15Mo7Pv3dxqiPsi8mqyeTY36qZgefHayie3T329uKYy6gfGWoVyUWibdaPycAheheNFEkxszxXM",
  "key1": "5LBK5FKYt21hU26zdgLpiS5ueQ71zMzxFMEroyheBfmVWFZcMZvci9jihvubZsone336FyeMuNSXn8CXV1gqmLKg",
  "key2": "5a3pRUXnqShuJnQtfHypYWQrxVLwEwdAtzFha3VZnYr7Z6LDf3MxJ7XKKVTeabk6sPNWe21AQe3apYdWHcQvYvwt",
  "key3": "2MVizNpsxoW48VSdVJ9whRVYN78qaH6XdSLjXbk7VEXiHMxoky9CN66Uxm6b9Evb6Utn7RJNdrJdTG5JrK8PtWqX",
  "key4": "5PMRDRYTpbRJrw3kTFhUR7VuJxqGC4RL3ihRYZUZ5623aYEeQvXHGGBdR9YGiSpEj8bGUALcYHBXZt1YG7QejDbk",
  "key5": "27SMedCkV723yAj8LoDWkWHP3v1hxSPAm3EvpN4pYcc5kcJQudfFLYhN7S9KQXxetbkXrvKttC3Xu7J1SKJygXEF",
  "key6": "3Ydt3fh7osa91WbWkpsb9K9rFSe2tMvzTpJPs9NsY5jXyp8AvYFUaw2RBjsimdZCb9gQcVB6GiPukbErDqFBwK2R",
  "key7": "5WY1VPtLCodjAxpEvUe8jXdvMN7KdvCiasGVqA23Mt7xk5SGcSQWFZmomPwxFEANyqfbw6N9PWFfg5o8R4Ux6fL9",
  "key8": "2N3mgdoJnzMBFm6MUPiisvLNvMT8TE9uNUnkmskJTyVvb4ic49tDDKHMGf7sv2Ky7mjB3bz1YZ5JyzJBVbfgdr5x",
  "key9": "2tJrBrL8evys3sdPe29aGpTzqJtigyJ9z6fEcHWKBYpbJW3u5UVvpB11H2YymCLEuebr2wGrftEyZkpsRQiQh8gz",
  "key10": "5dPsn7PCwqciYxWhPTzHkc3ZHaaLpFCK4QyGrf44HXDB5Vu3bMFtjaTqmKJtJfEtJrBd43xh71kyTseDK47w4FpP",
  "key11": "5V8Jgeo9Nm5DXujRhkzcHzraeH5cBrsmyWX3haZcMcQ8ir5SNd42utmc6bt51wHaAuM731q6ZJQqsNgNM7oh64zy",
  "key12": "brL72cRRGbQQaWDZP1hPuBoDKcW2HgjVB96AcgY3vFPEgcA7sg6UTAfreYt722mrBkexbyoFPR15ZuLW2hhYkzh",
  "key13": "2p4j3dfofKQ8DMfxLYQG5zqhP97KZC5yMKsTp51bbDsoNSSee8hXLM7sCBBAMaGbyHxkYkgcRdx9cXHvyxQXhTW5",
  "key14": "45KCsVFXgy8stwBbGwmT4EYCC1DicQWJd1WeT3w3S7N8aicdw7NSNnf9d7EaxNYFPcMGbFZbkUmbqp6kQp9hA9G",
  "key15": "3cHkrcKGhHjcSsMMEdk5mt7FQKYhKSKip6mVJqbo9VsbPmr3ddBxJBUKBEpEszVup1ak6RLWLnwJ7APBnGSSbsWs",
  "key16": "5Eu4dwUKUrR9yhhdSkq6MfaL6pr7rTnWgmbxmaPRfKCT3vLumFJjXR5TtKofs7j8jx9PmJVsek9gijhEydsBpbxs",
  "key17": "3uDiJ96Eb6DsezJcWyAcjDEuTkUs6qbSeLcdapzi64UHLbrKianedNCXnNAur2xeDJ2uib1LgGAVfThDTCqzC1Jz",
  "key18": "w9PKc9hsx2qCJ9LCrPrfjxwD2uwKtr7S8rexBNnMymYdxQ4wmo2apoc67GGZ6ioSuaWU2yhX59uxwT73EGxuQoa",
  "key19": "39U3ztsYkoGWSLu6sNVMkPCxJzfVnkFqPQhti8eQZYJxFApRDR2vGvisFdVXfDuJ3JqHSrqbGW4AxruE3ib76RVC",
  "key20": "azyAECNLVPM4Zg2JLrZoEkhtAmPb6Ee5Kqig5qGCps7bLp845ekDSUvwniSxvwc24JsmsAZBdbV6MiMrUJhmiVX",
  "key21": "5ap3zgVhn6f5PVjBtVHkgYSw9gwfTYjtz242G29tLXE4GH6Da2MrYBYH5CpFXdnBQeyUEqnm1DVRoAf7s7aG3v8c",
  "key22": "2eF9GTEB6EyLvRf4MEsJEuTBMu35YmhgporJfbD9kEXRnjNvnq9ZWR1zy6ax33cXQZTV8SwERnugMf6xAEUxkEZ2",
  "key23": "RQhCSZMX4fLAFZbttVUdpHmuqLnJmmknj2cp2y2rNCTJwowfVEcoTNM5fRzUCcDtaBzDh51ynzNc1Mn6cNbZB7N",
  "key24": "5ArsdB4zXW5tMtTDFMAMhCMubuSkvkTvGRbQQyFoPzyQHMKaMrmoHmfoMHLghZRBGtZCJsXRr191JMDDjHeg9YAW",
  "key25": "5uwg3HfRXgTteL4ZsojoisaeZK4cTMKZHHqQyMhFTjHLvCixQD6WiJUYCs3T4Hj64j3fn1iLSLjvNe2WoXGX9QYE",
  "key26": "wTmnqGdD2P1osua9BmYkv7uBNEzEm8SsWMZY7hLStZjMHXATo5P8kG2X2Qoeh7eAC7LXzZ6KgkJkHXhfEi45hAq",
  "key27": "5X6KkeEuou4nwjnecRguZyzxTN5BTijHZtRWCb5Mn2yfYxyHbFAJhxMCrv3HHBwxKc8Dq5RnMd6j8fR9a8b1irje",
  "key28": "4sGjSjRrfjqfic5i8EVoxeX2XFS6HTfKMiPwaB5bSXx45ehz4s9GsDsnwpGVDCv4P4DKKSDbLyLBGSxm2Jf4UVBJ",
  "key29": "as7aECFZf58F9WFMhkJ3jBWT1GSvboBgjQJtqUnhjhZx5rRQPokkk8uS5fMEfKo5Ns5KsbJMNWXhNa1UFgEZjHd",
  "key30": "2xbqsJyWTdpe4p3BJDP39LZnxUUZWf8hZ2H9MM3MWscru1fXLB5NeQDM4v788z2UYUHdfrMSEoC6imrutmfHYz5D",
  "key31": "wVUxdzmeFEKtyL5PWNew1jngRQQdJ6K1FGzpxKM2eCqD9o6iV9N8LjbHxofFPKKLgEahAxCYEUhayLTGFHvTu2y",
  "key32": "2Pqa1otKre9dDTuFw1SzPHyKr4NCtdd7YqZrf1VGEa7VcCeNgpPPiGzG3iXRcckwiqMbpb7BWbmHhauXdu4dpc9n"
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
