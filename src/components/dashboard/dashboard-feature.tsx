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
    "Hd7VGdgD69U8ibFP4fdEJ3bEWB7NLZXJUVTmF4xog1DVx7u5Mg5wWd4HNBTxq3vj3uS8ik3LAbddxMMpxU9jijR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9JBvmZch3fyc5jcfoJzJUbc8tDyDse5FvYzgJ24a5gPXLphd55BifwDMANQmFCtTfc2L2DZniArmsY6pWEXwxJ",
  "key1": "5wjjTgXrSXL176aSRKYF183tGEMLhmVqbvaG84quLLPLEyBTanTVxqw4X7WM4wcdfUAZuCLMdacrVGqjdyLA9aee",
  "key2": "4fuRNqFrxLeZdYZ9ZmPYec1ijMYPLWFpBs3EsuaiSnRmpD2ZvQWRs5beWXf17CL2PuGszqr51JPf44uezmZqixgb",
  "key3": "638v5m9vRpyut26SQX74fZnNfHqht5exbkDaqP8AhCvwqb9BFQXL5GZepNdYSBNNZuZi9bkBnVZmSmouuYDtzG1i",
  "key4": "Egrq9bZieMvB1jYZhDyE1QpstbGozihLMuWpxMCkSD3WS9j3Xc6PmNqvywfqu1sWG4W4zwfvSfzGjrEx1tJV5fH",
  "key5": "2ZPQJ78adWyPQtU9Yi4s5DDz7RgRQT7FagF8Yrr6g3j6jmSBCQGEZ8rPPcibozSJ9vEAcTCHxj5FaAYi9qs3rLmv",
  "key6": "4U894UFk9qQzrLABiwmE8FhJvkr8EQxo1p2p3WLjcqCouqBJVDD1oMdr2oigU4eE8eyR7JUTMWCYhQjoUDhjga2K",
  "key7": "56kB4QN2zeCZnRoXzsANAe4Z16n8vRtaxEjBYi3XjSGDpmdwGPW3dVs7kTj7sKEJNEqZs7GXSVaPurnHeShkmx7p",
  "key8": "3y72mvhatdUAGbw1Rfo7XKhCy754dngUtQQFtFZ1QXiyvFzzDRQKXd6ZnJdGyHSyX5C51ABmqgi2j2H9UqFPzKEY",
  "key9": "98emn4SDaqZ5bStQoLkQGNKuihFQuoH9ZVYBmy97dF2Nu9AYf7WJ1Su1Ef65CxAQ8Pi5byp3PXjrVb3gfrETt3h",
  "key10": "3m7buEHPC3uY9ffZd8PyWc7iYJXmVojuwqQjTtDoC7jHFZtaoit8hxAWQyXfYnr8fZyMtDEK9D82GPU7EMjnqHP2",
  "key11": "PBS3AszZBBYmUVevUgiMM2bfEsrjEcf9LWMYJQj9TXjgzBZ8gEDSApgcighYSmMCBcyeanbWTKnA1fLiG5t9HGU",
  "key12": "3SFTZc6ip9s4JhDd6XV4VvLJWPvVERL9FW2d9SJXudQPrignibLtTjKJiLSMyyQtNNyNdeUK35ePF6kuojDo5cY3",
  "key13": "D9dN4Hfqck2W25QJ3N7AQZsSkQCmFMQ141XEyt3HcATvkxqE8U9skp7Mqvc4WYk5j1Sczi6TuVFckTJiUJS7XVw",
  "key14": "2iFNhm8tQXWH4M9CV7Dqhd7QJAmeAQUuG64kwMQ5LoxmMVCNeh9jg8ewyyjFedxJuFteMkhVZPPGwETjqtPRRMAc",
  "key15": "4mGwcLjDiXJahWRGgraq15xHCAa9S2Q7oA2Pm5iG5q6yZsKV748q7WTkP3TqEU6rcJve8R5ory3pWshdvRgxphxa",
  "key16": "33HuCxH6h1zAvmpvC4ctVn7efZYjSSuVsCYibH9uonozVTiEedBVYzCZeJZtgEkSMUmAFVFaK2b89ksKtDq2ai1F",
  "key17": "2GVRjjFBrFxcqfTWDNVXNi8fhFbYz7XcxFsTubhumP6diVwHBFwC6mCVB9yV3DRfvqfV6JEK3GGSfNK8g15cWs5n",
  "key18": "5ewq4SjkaJ6ABkqpLyqJ5ZQQkKzM64RgqJ9yrwsHifpMexuyizWyFSZXfLEWzQkZG7HUfwKCXqdPmQ8HmssLX85t",
  "key19": "3KYRJhJxUQeeYbR5ptQp3YUjxZZuW3BxMG19erM4zmvoJ2ZSchy25WbseaiG9dGGHyaChiGU74ZkfmnYqGUfFCoM",
  "key20": "G5t5Tv3jjBTaGExtUivX7wnnKBBAzRD32zhdUG8cPVhevaXgvpBGwoEmHRUGspwT42TaEc9ky2WPypAATQgkQNX",
  "key21": "2DeZvRtza1w5t3g2kVanxVGiGCSarJGbyLNRCCPvjtTmuUWniUSybu8ABsnYmvpLTigyBKern6Q5espzwq63oNJM",
  "key22": "5cE4xHKzbf3r3zMQozvbbKwbVFcnp7xH3n3zf4zGgdTvi8ptLJcQR9KgRRFue6fZswtbMADuZ5UnWkC1YkNH6CzR",
  "key23": "3vgKKNnZeBnUipfeL77ihzKS1Z7PjvsVfqWjBSfAUb5SdhzyN35dW85jiFVznpciM3fPFvNKYHXki8ZxuHSx6diP",
  "key24": "H7sAVvaA5iBAa8p83bK85AP8KWNK5SnEVaPUudek122xPKwD1WkGJsDttrZFUrhXNcsHKdfwsaECGGvbgtQD5Rr",
  "key25": "4MMJ6mxESvi38X3jxw2c9UWwMzb8dhnQBYogdUuMVvs6sZXiety5mUbURmeMEyFk8u45ZVduWrhQNLaSRZJZEtbC",
  "key26": "3PzeYEk36cvB66BmD1VxU6zTacSFn4VFZ2eXPxbtiLWo6YM86GcYVhHUxuYuXAsXoFXibBcF33BPr4Z4vP1asKw7",
  "key27": "Gw7vQiam4W7yqAfzBvj6F6xaPxHym63bBp1DZJyn7AxJihJjywEY5dB1XXpdtyeDPQcy3KbMe31czBKQwtwztmy"
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
