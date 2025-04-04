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
    "3we9Kj57YXABju6aYPaA18Gn46w2jYuouJkxT6z5XtYMxsRiRmw8C79hrWs3Fqxr1dsgET3vaqTK8unUsVW2pVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQHfBLNybYQ5oTVoJjReKLCHYbtyce5QTJccyqzRijLAH4iDgEa96tNwFyHhNckyoXf3dpDSYfAHMrtAc2JQMsH",
  "key1": "4faZ78xAMJWuF7yn6iFkbMV9HkwFn2Wy1z6SDhE5eas93p6MhtFt3KPhzwssvLzJDMY1kbGi8FMg6FN7DEK65eqe",
  "key2": "pqrn2NB98am2HCXQ5y9DL7qAUyzJnx9iRPWFzwD6VA7Vnp87HXofioSyvVr1Zdx15XXaXTqJVSaFeRotfDwMmbJ",
  "key3": "4mLxEovRjkqksRKF3yKCBowxuneyveQDXz8AFESH9n4gi5FZJxG9WmYRDUcFsFMHTcnZJhPa7Wjdc2Ty7iubn5mB",
  "key4": "24x4EYzesR4NRRGhJf9yR6JN4LLLcHrHZQaQ1HBchhEeYqVJyBfCSsoab93UNTeepgTLf4QKzVWS6rYTjumoSdSU",
  "key5": "3sUzSgg6aXhWEjmn8FyMQhUM6cbwEnmsD3ebpAYPK6PRTHwVKe44m7GGuEByJeoroW6qfBxcakymkEZR8J8PDK47",
  "key6": "63HaMt1KMu3yoTp1mujBL2db4AajDqmVNvEQ8YMPGeydKGt4c4HEuL6r2T8Q7quPDKzHsDW8CdNdei89q8fj34yt",
  "key7": "2SddnKKNjaYTDAid5uE7pZPwx7stHF6QKn7YKvQUdrteHEbE4iC8XTDQpd54nAza9SLttks7hDWtwaYBAv2EuEPM",
  "key8": "3bRfqvy5miW3yysxpCkf4XvMnYGywkp7T13APoKvx4gMa6zxie4yWNDN4uM9ePTrK1rGZAJjr9roYCfTvhvBKUdF",
  "key9": "2Bckb8ZHcZLTpEW9mdmgZ1FQ9hWmnnocpm36tqqMZz2bnuAiH6FRCetRPLzHk29ydHrLsPrYF4SZfLmsEyU7s7Fi",
  "key10": "4MBztLNZsqgWsu8h2i9PtpTiARkaXYTow87kBiSug2f6MvonWp9UJPqdnCTTvFvJmyib4pBeL5cbCjT47osQP7Jp",
  "key11": "C4xx3VvTF1x1BYP4GkGPtfjs8dwxYFSGayEDWx55QDM8YUKfhggg1MZdM5bMBWK5tLi6pCy5M6g4BNKgjQSMkjS",
  "key12": "s59zTpe5VH58ca7izSkYmFjdMCEzY2BEPhdCqusjxUBENny3FhkZsmk6N9fpy2pKHgbyDtoVjK4Qoi77ATWsLzb",
  "key13": "3R6byv5nATc7tWwu4jWWif7UwUDK2F1KuscJBxoDDYsagvEgpnhVQC6BCXXqZ98vosR5KW5fPFsyCbsJvmWZ7aZn",
  "key14": "aGRUZ1SoUo1314tLFg9VGszemfdFF4tcX2JEhgZQtFk6cG2LfqfxxsVnmxkvBjax1AWjSZCVytiWxFG6Wanua8A",
  "key15": "4Du4UznS1p1iyhrE1gC4Cg5PuaQjLK2eMS1UR18xoe2pWbPQfeh5TFuBNk2ZZoGamUkTSYQoyrnnk4eWLHFMJU6S",
  "key16": "5X77Zk6LVfdcuTqkuXyLYQeX13JAHUYGjgWhzfsZ19xWPM68Fo9NZ77Sfd6tGMa7qKj43qWLA5KoMoFhHp6FYNHc",
  "key17": "2evuMvMytGy3bAVPszuroah8GDnJQ3ptEVpSGRdYedwhjRz8QagiK5YiXSgSeu1BRD7tu9E2KDfiJC7pRS9yAyv8",
  "key18": "5RGcFV5KTGo8BJpHpd1wDHbxh6EPgx6njSCx5D8aaNUasyLWXL8fK5skLd2snMpAaCbYvG1q3vt1xYna1q9N8cP7",
  "key19": "2WmM2LxdYvMzhtfK8oiDHkUMNXGmU9G4ryZySe8Ani9NvcYNZ4C8XmsmjEfcuQtwk8HWYMjManXonqaxXqbxhWLx",
  "key20": "4mVidKU7mq6p9vGgi5NPLAtxdXbnUYV8hiMHZim5ZkxMDkSjAuPz5CgXGpAW6TEw8D8VogPRymkzZmu7wiMPJGNR",
  "key21": "5JAA1ULTrqVmLLnS744ppZH8Sjz1K2bwMSzpoJ2X4MokJNvrKCP5AurdcGhp74rTMy5H5dPpNxxUUAwpPAuCiDwA",
  "key22": "5suov7jL8GPbn5c3wYmLJ6ekwet5DsohNwgju4QXLb8N8EM6ckWH4Ene862od8a7se7qKbRiAe6qEmYWpmvv3XJH",
  "key23": "4bTdjFtfWQX4tWc8W7k8CkEbhp7zUZekoNLfxkQhcJ2u41hqXLiR3RqNiyviiwFbQThE15SPasDgS78fvpMdBpf9",
  "key24": "28oX3KkYjyEMFj99vX2bZHYx4gzqzJ2jTJ2Fyh4YLCb6eH4QNgL64oJuvKTfmrMpEuzA7R9bLjmq3Tqq63t3DYQE",
  "key25": "3x3UEU46PEzdcNdwtSdCAwyPA2ftyuqsfxngN9Pzn3GG8oAsxCyHwx7rwRNES5dbu79J9kpDtBYaLkBnxvjB23J1",
  "key26": "2VEp7zp6Se8cVrWHEGpZK6MrpNs38sXckdU6HYQSha3rw4SYQSoEcx8sXRc4VwTvQATu7iKAziSC3xehWrVUc5Ju"
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
