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
    "2TmzJfL9wss2dAoPL1XkRmP6JyCgVS6oSXJibpvUkwvZX8QskCoib7ow3LDRXsd8osqJ7xUF7SGAGSPLFyCZCfuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v6zEayC59rjZchRTvLtzRTur8zDnmjLsvrkXTkeWPqctc4XdvsW68PqdAsvTRbv7jBgtmzyNMvosTcqatUDRour",
  "key1": "5993SWwR5PQ5TuSEVWVpLyRL8E9jfnrzzSShWPLnAGZCGWA35PFAkU8TMhidJMYhAeUf8tnaM5Gi3itvbJ4k8xWV",
  "key2": "3thNBCu2EhTSirqKF8MaZKhSyUNAhQSGgGzYYx3h7EB3Uhg962MqmL652XTUNXtCjNc7DJVfcf6WN8sapb5VCDN",
  "key3": "2H9C4KNW6M6ijLKVefKAfmXJVqNyA9SMDWa9NJ9qM7k4byM7cKW1gPEPBuZ7JTCi7RLbzLkXL9DYDgzokvxtSTBo",
  "key4": "5MQ9EbgCoHQmBB8g6g4r1GJjjmFVrxwu5njoWoc6e114pbMtK4dQCwxGzyiEp95zMjeCaJLUhfbU1oqvHiYGcfnV",
  "key5": "3MLR41eACPXKLrtHZ7XAENgZxmrtbNksode3QTpR63tN8PcqsfaubkkXEFSFpnKRjUpUzG6dByZjj9DJuDg78bHo",
  "key6": "49h4ZTY5ZCQuW5SdrAYWwT9a8tiaVL3ndrZTqrzEu9e8sVtPJJkaKrDiicDLqcrb7nHfDMooqZkyMnCdZQUkePLq",
  "key7": "rRzfvtpwNDm7JKKmCrV4nY1zQKDvAvPAvRmZBowazPwui2c9EUMT8BYFeiiybTnr3FGFsEJ5rYykeLAE5kyroSq",
  "key8": "4bVMHbeJh7JXGcijjZD2vkFRv1FmS6BehPfwU8TJkRdm5mRWNMRpgFuixbizFCYM59MYoLaotZUv4tgZAgrdr9YG",
  "key9": "4afqvKkFUYdZyjjZHWgYsYmYHBqXQrGEpEMATe6eGKA4ZZKjBJqHrpga1rZa7MX6iiVssq9df8ZJY8ejLocC9kFW",
  "key10": "Ur4ekuWhgkbi7AxxcctvSCAPjarUZ3evkkAmakGyHXm1cmqgjfxTykryaDMppLcgrn9kPTLMdBJdFmw1oPnWuWG",
  "key11": "4r7dVNdosNQgmFfSRVAoB9o8BDe5UkovYMKgJMQsS63Vsno1Bp739ZTPLqst4CpVY9rCw2tiTJpzSDaNZVvB8xkC",
  "key12": "5EywcXQK1TQhsw2UxgjcDvkfYmaCLwBCRi7jv9FiKe9cQN6oye1g9EnwYrzqXcPfvnm1bBKTZRHDnMVfuaoXfBZv",
  "key13": "3bwEweBf5zTEL8Ks3Wib4kejUqNUnBhTYyHYNz364mZasanUSU2XfvuAD2MfQDnRDPANBrtc5qjbHYg7rj6em3ZF",
  "key14": "dqFyXW4wfC1cX1gxQ4DKKeuLo5nkLL78Bjj9k7n8hLg7FiCP4sFoPNZg6GznUnDBWEvihRmhf6v54WmC94S95aK",
  "key15": "48s47j5rWUkP2886FStLMSwjcJwmWcXtuuRU9GmQq143BCn89HcyG2NZ9gfGtwibm8BA7QMb23qT4uMeuiTESwsN",
  "key16": "57n2UxgsotNYhJrwSc45idPvxaxbGhNdqY7YkepRRjVk7MB8zMjGuY3BqgYxtCp3GHWyBBnfTd5t9BwUQ79yNN2w",
  "key17": "Yi1Wc42hkz4WhjURbLHk2vy6B4CremJQKgT9KFQL57oCG8GGaN8BKEo8wAzbgv1ZjVCQ83cm4dv5cvpERyCrLjx",
  "key18": "2g4jjsz4gSDeBKin7E2JDMhHHDKgbm3677PQEKyjxNEWRLz3Dc9GCMFWzdizcoyhYo5hDqCXH2RXLzrQYyWjLFLL",
  "key19": "2EyS373znU7yfQE99L3VKgBGiByKHkiWjLJpKC9HEUSPjCaeTCAyZ5gYbMacj6RKaWyyUJCo29ACiKo3qLMiqdBn",
  "key20": "4sRC7555Z7eiLDVyDzg2sDzue1PR2A1VyE9dTBQ2Fhtj7ryapRo5briCfK6uYi96SdZ21kKCxNPem6jCwnvJEcY9",
  "key21": "67D9orpSuRuCpaPJ4kRkSHQWwfmYFRX38pXGh4itajLSEfhpdmdzhoEkqm2udRbdKQAm1e1PWFY36XezRh8BzgyX",
  "key22": "CYMNsghLaVXYHt31TuguaYAhpoVRAoD9qAAWkshD1D3GW4oL983tRhMHZhTDqXqTUQpoMyUT1kBp3T4yCxjKWBZ",
  "key23": "3gYRugD7qxLr3zuBoDkut4MeD8nLNHcWU52Hc86PMqGSZv9XzuNWMd3UWGLkEBbff3cd4LvrKEhEjeDJNfKk1pDC",
  "key24": "GKrHRjKWRipx4Z89Bencr4zc6TRKS6qQq48cqVtPiSZPCvrR9LBSsYhKvKfmhpyBEChcouLjEjs1EkRpvfqanaS",
  "key25": "Av7g6haqZKAKLqJNZ54TdzuTL3EGDoHFxutnikVRwea6J4xMEtecrzMpoX3A4wutHJhkrAYHNB9nEhKKiaZiTst"
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
