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
    "rgySZwXxzBw1aSQbAZ5hxoarca3XY8Yqew8ap1sywrGWbE5oBDpps3qsmqtLyXktdYgWQ3v8Scduydnq35mzAKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KqYxoxNsNic4Pk3Xx2gyVPy6xayBFFc6izqMba1XjG5KJfMFtGdE4DRdh6Cs5TfqyKM6fpXSdaRq5framApX5Ka",
  "key1": "RMRnuBieJCLdNxF5gSYaQXnp2mXeyhLNoXqH6M8sQKbF6BSypgC7oknRpPypYsS1pQdH7ycDDkebpPu5NitYmcE",
  "key2": "3NDRScQgTcoQnZCXvpd332ftgQfwjCza99MwJ4oE321ezXRm7WdSvM5AdsWqcUMEfEYxdi3aUt3gtbvEp3pvZN18",
  "key3": "2bEv6xMSPaGjEmuYrq7y8jMMQ45gH8ewdQyrE5ffMhqEXqZKJaFE4KB91QLWPZs3wQ9kXpjU1eX85yq52GwX8NQz",
  "key4": "2Xn8GHqVGiMFwTcXP2CWxcbsxGvNNq49mi9EBcbCgsNAURNNxs6DnqnH5CMo5QMo7i5RTDiNCv2ZBY88ypE4GpNg",
  "key5": "4NycD9nAGPwsB5c4oaKSA9zGRDhmcFcDJxTFiKZ6HMg3tKa4PSDpLefhUraUgEQAgjXYaTiQFEuQuuASyLkcc7Rm",
  "key6": "5E95pYM7YkvHo9NUrJmq3PPkAAtVwSdeXpKTrqRtmnmD7s48W1wC8RXXDtX4RuDfWyJQGN3n5PwzzvC6qEkv4UgF",
  "key7": "3zeQKv5umi4qDhJuGhJxAFAJf5AJ9RYtv7jf1uqXiJ812mQ8XEAsWHSFj2MpcDXfEDnv3dc5gX4GG3faRv8tSdsr",
  "key8": "JWX3xGzFdJdkBmEdnQXpgKV8UcKh58x9AwDmxat4PTiCTqpuffmrbxWVh9dXqFhGkoErSMpDLZBeL9y24NUq4Nd",
  "key9": "62pwdmpzqq8KdpEgPp4b2eJzny9ZiXaFHqeBywUrRBXQKTNivLF4vad629kmbA8KxwT5qWuyaDNmkfMqzwVTwxx7",
  "key10": "3jauBpbKZ5nZCrCrBuDJE6hZJkDv3sjUhoMxhyymjvHFFc2PSx59vheWgxvLGFgecXqzihCxUahCAX2N1D6puuYk",
  "key11": "4iSHhYe7uK3AqZwEsB1nbPwjCBTNeiwbixBXQdP5KXJB1owp5BDW8yxfbjjEER3T9ibP7Zfeo6nvmiPSDiJmbkDD",
  "key12": "2Yk2kYfPycJqx9KXgeLiPxoNLTdD6fVdCJeUz2HrPrP1gvaCPrvf2qWqvFRc4qynr4AudpA5r4wknTuZZzqs3FQh",
  "key13": "2o87i6T5zrPVfGT2ojjWsSvMt4d2z6b2UaepiwtygWseJ54txBXz7Q5JdftD9oPXFwLfNmbyFRW27bSZdmFfj17p",
  "key14": "4dAhv3etzvMtfLDdH1E7wa66hFr5E1G8G4PQArXJ3UfxMGFLfKX2ZTbv2TmXfmNcCeRCpiWpyBJg3txYXXXyg3E6",
  "key15": "4EVWaVxim7fUaADREKbrgrvDjwPUsyHPf9JmZTpQBFB5BTCtKybZyBEx12Eo9FLAsqs5fepBdqkSeBhcbPwUSW3s",
  "key16": "2bLQFe2dm6fWgMaxvgkNvDUZrnUEwghvhuTzMoCaHouSuicg1uRWi2c3rakZarx8awdAt6kbnM1k3buuVYppY6BY",
  "key17": "TJBs9FkDG66dnM8PoxZgZk9X69jwQesXa5UCyPmoaQbVcMo98vUMyJr7DZ8YAYppremJbvswvGJP8xNsaSccMy4",
  "key18": "3jX1LDsX1QwKY1gTZ5mMxKep6T5LZS2MUqktt3iwNU9rEyn1v6w1JxyVDhPc1QzHJCY1aySjabXY3fGLLzZLnMLm",
  "key19": "2d7yqcUSCxwE5fwnJW4yJcD6SNCHZS7MXNvkBHWhZLjiQVNoYMX3CeKAAon45bFqVE4WjLKrpS9ER8ZkwYbrKu2s",
  "key20": "4Rs7Et7nuUPawtAUMQvemuhPkpK86x4pasRfkTi6jyZ7Gmoq2G95AEJwZ8CiBBYhk5VinBFHpYM4gMMHL6suF74q",
  "key21": "2MFkpjMLGwQFjixhNdVSg9rwRQ8dcHjoYGZDes7UoLrGEsfXXWxBChqLmPE8h2EAJN6m5KrQWoD8Zo7ybtasv6k3",
  "key22": "4n1FLRXMkoJdPdNmbuhUg9UY1SRESbDmgvf4WZKLNFuKBs7JkLb9f33dRGhz6g9mAGPNhQKtLmnc234VTBiNCbHV",
  "key23": "2Hhs2yuTgq5WgPfSvd69VynHNG4AF9uRosN15tA3BsVX878jrKdWUHvhT3TX72zk4YPe7iVstT6Z7gxojydiQmSc",
  "key24": "TKtsm2bNzANDjswce5LXAvyQ4b6bUZmBt6rgxUeVBgzbBnVoQePVekbXSENSrZNCMffKBhZtULtsvSE5WCjrzAJ",
  "key25": "2XL7tw3asuCNW78WJJpiiuPV8chedFEv2YkXYpadw8NsTLyQ3Lp3JLxCwqyA8gGs8GWqR21KzGbTyooMFXRQbQVC",
  "key26": "3NMGmS4uKhBGmQJ9qygfLaFpRGBY4cRjnN5RauvLBDVCcMbCK7ZRdwPwqWsUvhFUz26PD64Pt8SWS9UZ5twmc75",
  "key27": "2DjZS54GL8hiV1uHRD4qnsJc2PjMkNAPkMQVmeu5TnrJuvVh5XvpiA9uLd845gDN4T2rye4QthzfJ7Pycz8Bsm27",
  "key28": "r1ao24vwC8oGjuJrVGp1CumaMw9sX6ZXHVUMCnLpeteTRCzzz9Z3fuvuKB54DVBJWL2TEdgXxiJrz5vm6SpZTbD",
  "key29": "5pzygFrcf9ho6rb7PicTrG5RmRMbT8gQomzYrH7QsLyHr8WFDD7J54rUQrQQdkTmECMY4UFdpo3JBUFjnof5ryd2",
  "key30": "5tyWDa4KykkzghHaKSWRukHUN2HKJXV1hCANgiwAFHnBpkmHSDWZaQGtAHRYcWsMxKzqiHN8vr4bv75KAFVPiSuv",
  "key31": "dH43baciLa4kmgsje9VApnkuCDfMa2AE77o5RwL7U9T2Na4vZgsVeQVZfo9ygDcZetvPut2WRuseESk3wvCBe99"
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
