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
    "31zUdVU2ZUiZe1qEsJHKt5MRmrCkne5DcDs7VLjqDpwFjp17LaS4djjQQjYcE525RTwbm26uMRaunGMfCR78YNRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34i5aRvQiJ2Mbc2vzcSjqsVzkFmcTzZTPRGthe8WW93Du9k1DMrWFneCqQizDE4kAsJUZ2PyS9sNcyAyVRNopT2x",
  "key1": "2PpxiKvHwcnCBdxHgf5NrTL41XbiPCJZUGoGgTp6gES2StTk9mvAJX3pYrSyzXhzjmNDfM57XtKXWhUywWLmnXhp",
  "key2": "2Xp9MoRWdwHtqewyiebuXjyTRj8rBYsipMgp3dvh6DJHkg1bYkfrizE5ymV8HayizeGrnPRfFFBpv1U7N23sAbyu",
  "key3": "4sr3pUiiWeqF4iN9NrEXbmXHai6nmKG2QJ84v3sEB2aLhmsVa77C9rLKnYNB85i9nXJuMvMvDWaKs38T1tyRNNrL",
  "key4": "4S1BJnmwpQy2Zinx7dPLqmt3ACqEA8dx1qk1CJFHBd42Bx4rYyUCtohg8p3nCpvTTYUU6sPHDpPW11g6Hbtje7eS",
  "key5": "2eZic8AN4oYanQKVqSc4XrCbv2mkdjBLddUBCjoiz7W7iLD3n6dje1P3Hp4N6cwwhbSWdQPii2rQ23Ns41kzs9XY",
  "key6": "zVCHpPh1ypcgb6csGUgSUt9kaxHK9HUNDB9FSrN7cVDp4UDaL7zVoWM26gkVEWg4LX9wueoABjAwMUQLyvxVWU8",
  "key7": "E9hJL31xMTEHfMYuUiaKaFwvX8bkYnu3BgyUTQ7Dm4hkSYUr11qRAYX6p8dRAQngK5UnyN8QCt6pQYvFUMEyFRV",
  "key8": "5zhaMJse3W69nvomkJstYwXe7RH7GUHAh7usDugnk8t4FHAgKXSG6KJRYExFbVdL8kdzSbnVUf3dAvYJnrB6Jwzc",
  "key9": "uzhM4MF9CdBEdRG4YLyCBNQ9MAbUyNaxh71WHSnFfa5FUdYSutCq6iQp3VfjRh54XZzKF5oRWxM9Z5LzKQPZjhH",
  "key10": "4MHqbCUWawKW1ZCi2Uf9NJnzBqAEZVMKvs6pPoZY77Eo81uoNcRCwBSHN4k7TP9asFqTPAyTo15Vb6RgfGYW2eQg",
  "key11": "VHkeaXHD4yHYKbLduGDd6yWjrtbkiqYCZ42BTnPhqmSy6kEgJeHeTrQQct184iJsNzJcjPBMF9GJ1RnEAANrQVL",
  "key12": "33JbxEa2bCYwdn15xbtkxzESWynEQQ2oPp4cUAvTny2RvRbR2hLaEjzRo8RVxQo6xD8cW9KhxrfEWMtsQPVZAQow",
  "key13": "2s7NTi65nQWgEhyBgTX6XTBqZ7CH2X9o7HmEWvkaTeCgfhreSXzep6fQWzPNMMViLmYnFyGmpmnayo18wEjBegWs",
  "key14": "2d53XotK8v96mNojtqzR9uVVkkKZuDqPBPM5V6CjiTHK7niruxKycbzCtXd7ej7rsAfstqujn1BZAqjAp9ELU4ge",
  "key15": "2cJRBzuiXruWhcY53Gt7QVnfeC6cad6inBJJjcyjH6g5S7EjNPLg7dn7HcFY6TLVCKT5GbBhK2QHCa4Yx9vfPGYi",
  "key16": "aM1tP8V6pXD2X43DTyGbMyaJzZA8ixukxPa5x9f8eywb3ba7VmVwjQTsLERzoxNhRJmbWhgvh5ags4mMdigXuKt",
  "key17": "M8foZeNuK1wzkr5LxCAWaJ3bEDqUHVVNaL2TnNVHmmv3shGo1WdiKxcFxvFkZ3JCTNsAZH2wVWwhdsGv3TWKcaY",
  "key18": "2ZK19f5z2QqgidMh1HTaRUHGjTeU9zqX1Uq9A6UpEwtQtwXXfCnZZkv5ZZxKwtfPVDq9AaUsTUvgCKDVgXPsfcUQ",
  "key19": "4ovoXNGyqLhtmq6ACAcy86VS7YFT5ceHUBNrXLM3yJydLgeqkB1jxnLYoqVjFcjBFWvvXw5VABedUMb2TCE5xJn8",
  "key20": "4qt2oSd3rtSwJFa5zXVnx66PxKQVXSc84FLevZQESnRm83fzeKAcgmkKP2KqwgkVNoAtVhJaY2XSshnq5yvuH5fN",
  "key21": "2pZ39iW8fRdku4vBXMbE1czMqZoyzgwY16V87HaKojcfDv84Ds2JuU5uogZADSekyuEfduTs4CrUAMnU6e6PseYr",
  "key22": "3qbVPYDHhHwf8dzg9N87p36WVzSz7KFD9YXHrD9uCL9E2ov5g1yTgdVxY5zs4SsEeSBwd3UyCSHPn5ZDvT2XkeyK",
  "key23": "37dDELB21q2mtM82m2ZHP6imtDt9C6JoipEorRES4dWehy8akK7rWfp3gfDPcxtFuCnU4MvUpTeKohtcft1g63tu",
  "key24": "5o4SjXWGQeyeGbTEVND8RPQAiF4UugBmH48zNAAsqish1ADGeSQxptgdVpRGGRaCTeL8oSSra8eHdvf7jUFfbTee",
  "key25": "2j3yAPxG5zAhXP6F22gio5FWa7kcKudJQGXFEp2oh1rKEq7wZ2AvUhXWr5EVVr6smxVJncjvWeLa3KQ3PuGKeR1X",
  "key26": "2R4VfuPGw23HKXTG43znEetees6mKQKgW5CB85TKH1zCcWAarFUvu7S8XJ7ocfvdxm27RMqF8x62qbPy2M258Gbw",
  "key27": "4D9Ne4ii7ijdK6mGYhohMFcyLQAefQFiTxf7kznzL8CSXUAh8jzkeaQFqJMozShs8RV71Cbwv4rWFoY6pJCtA7b5",
  "key28": "2CgkpyaRAbvBGWzVr9UojaGSKYA1UfYEpipb1Egz36faPBCVykPyY9NfjosGnqPoX9mazAu2EJ8u3sNtHjyGoWR9"
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
