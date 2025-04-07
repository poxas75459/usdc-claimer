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
    "2ZCFDeoKmtQ3chesNZgU3uzQUKck7qdsDbNWbFayfoGWDsHmXdoWF5AhZ35sFZKwvCNpmzNGNPx722Du2MQPMTF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNC3jXsYAX83CWSuJDTuhzo5xEMxX5MDKvWzHEBNu4C6s17YFghiP1pAs7VYxC5pze635psXVLJRv7QSFePpLq4",
  "key1": "61FVSaA1qsGjEkuGPmC767sumeL3zfvNN5FbvQefjU8W5yYuzxJwcTHtrBvkNiuEBmakTFzRjEE1heVCcSyiMgKr",
  "key2": "jFx1zPGG9g6KCAx7eqBCNESvdKwd8r98cvBWTbnfyNgUdEeUcvSGg79PafTM2wYNPFVfxhvwR4YqvYFWcsuaySp",
  "key3": "3ZxFhiVQNwLb7FGHbW3U38mp5QAJ2YkRUVrC6GMmQ2TGmVdrxr6b3X6HJe8oyz9q5yLa3fRNuQkf8A1pS4Jf5FGj",
  "key4": "2dxSBwYGtCvHWzxbwUryUZBtNNwsEZGsaiNQkdGdVC1ShNkrZUrvYuSQ5ZW35AnRVe8HcN2iaWXYpMedVU2ELWZr",
  "key5": "5w5WzsRjfN2wPN5mVmPUM2gkUx1JrYALb8Ggce54DkJvr6WX79RHU6w7UcKu9gbhFGfqRaJJWwLyEVAaWevGuYbg",
  "key6": "pV9m6Qqa6oU6LrunmePcMCnD2bwrLDF2zGQpwWJKF4tsXjjQsfu13aJzcZjErAsGfvEcNhhkDP2h6gMfDg5pbPm",
  "key7": "43s5oyvTEGJYLNKyUGxKp5eRXpCxrMV4gMXLjh5TPB28712hRuKVWTNLhRpsvBLD7vqa21RznDBMNq5N1xMjbM9V",
  "key8": "2NTVwqjs6N4mAvvxjA3ww7vC7Pg2XaRYGWsTwXSbyqjsfF5Zk8rxPaEozUjKjEvcBgoJ3jUQPzhwis2MZVvwrSAX",
  "key9": "3qt47BmyiMT1NgzK3JCYHiZPCqL8BSHpY7gXCjZrBbs4SpNA84cJv1Nz2sSCyrgVHQN2kPw9PoxJ79zUvZvGfKNy",
  "key10": "4X1oFjK2JLzm1eUGpaawDugLnRn6SfQNxTXiWkbg6uPzw96pzZXbYoBvEs9JurXwKJ53uZkj7MUUzWp2dJX7HRKJ",
  "key11": "3McnAivAmw8Uex85z1XKMYfCtYqbvZ2cP48PEZc6Mah46Aa5n3LoT1Y3KtUBd5foXux6kTWoxHfRu7w9HhgtS9k7",
  "key12": "2oSENndPw6PnEMmJFhVmGErTjcuUi87bS755k2aXj2Sy9WdcSqiVQRCv87neDmwQPGPpnFYYctbQZAzHgwEg84XB",
  "key13": "4D1zkn9BfHp2hYFzwDR2XTZqXAY2uyPesjoMDboKPBd6aqoMzVwHdQhAaYZDiJafbunZTgTn4KJxiFaFRTCg8YSB",
  "key14": "2UdmKUwVcpzLLxdKdBnZPVFggTQipxk3EGUQSPmU9fmP5cpjcMGkGZafyvFC3h8vM3WWwZre6wXgStXJobagXoVp",
  "key15": "3R2rsAordkXFFUceFUGM2otPjhAJpVaAMwyqFyJvRwzsKZ2uxykxEQEgYMnw4rUDXCmaSLvBCE5zrUkHbqRkfCkw",
  "key16": "2ZZf5DktW8Mb8NXG61shCfuafcoRphexciFDDtvGNt63uvhk2yhuKqonARC9KRiCQf7hncFj6VtkjA222aajzRtt",
  "key17": "oFgxawvm8nJrAQmYTxGNFYKDwfTcneoHxJQH3i18JMExiKsAaNjicFaxYWSwefU5Sy26qPQzWbdi58eHbYhQWrt",
  "key18": "46GmWmKxzunVc4ejAfdkJ5pE7K5qvWjesnNHL4HqRNaGyNoZuD2KpYVDTomryDzeKTaANxtx1keFkMdz15QJpW6p",
  "key19": "3EgYE9pNmBZt2btbaHqyUXXz96ESzvCNHi1V2os9aAXKbbb4phacNhdhP1Z1kYW7NC6EC7JhsSoAhkQF8rsZEwAA",
  "key20": "5fcmCWUqYqxwDaa6PGfcz2p7Woq8Cuje7qzR1cgkCJKGzKwB59NPb3AwStVVkUPsaAvgxPaDaJmtTtpcNJkcDFnJ",
  "key21": "4joDLEgTausLw2XZ8GyBGN6T9xseor187GXDe3z5U7mfVJuTY8D6zDz13CesrgYKMQnuohrXYfwP4XJnkGBZHfLJ",
  "key22": "5FceakKV8wEQJ3mnDzcD6RuMexqRPvpSsaXjWmTpGQA6UCgf9FJP1rz6FiW1DyGLimD93GYe6iKMUsgfoN7fooAP",
  "key23": "4S2APndhs42a3rEULaMQgtR9Sos8dCRDPSn9ixuQ8mfpAb8ifKS6DyQLuZQgBDhu23zBQJfN8iLkiSePA3eKagm7",
  "key24": "4SG9R9riV12vQYBsx4MqBtdpiZHTAsYt6aYsksUH54Dszd1mZynw5k3QJTJ8fbTmQDk7ut3eZ1NzotAJXq2L2d3E",
  "key25": "459uivwtwzovfZDb3j4JPGsZgGTQdeH8PDxjjKKW32GEhZoNt8LGCym9BacttqKjaGwo7kexAg51gHUP9jPEngTy",
  "key26": "3UoumiKu2KXeADr5pMQgnB5TdZqXKyGQ3qQ5y4KyULtkjva2gfREainkHSTEeA2Sz6txER33ZEHPkwmTiNR2zfrv",
  "key27": "jgrP5AH1wmTviC82N1QmQgb6eGsPE2j6BPvE31DeoDjhv3TNvkZU9r2NwFM5NcUNssZjWBrszTgGNx5Fdesvazx",
  "key28": "4z6C8jZgpY5JS6uCw6WoTVFuCTrFQyAXNugkuEzBrweGJ9MHsjfSkKArshZ4JG47ETo24hGS3PCAL4DzVZLCKkfq",
  "key29": "5hQxY3APAWNaKpKrzm4TN8acmVsPxg3qPz5xWTtpB2gderN3CkV7zt9KDyhGd5ESZ7xKUFd62BeGzSfLHJM1PAS3",
  "key30": "KTmEctVZ4vvPhQwyAxSxMtccTQ9zbU9peVWdFJnG6g6J6ZoVRHAZxToSGS4yExKWRmpRtdMhmm5bAWRxVbtrjdo"
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
