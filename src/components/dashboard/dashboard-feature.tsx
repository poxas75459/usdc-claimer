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
    "5LgmkPsuGTCEDRntiwJf9oDp85Mf24cr6djaApS462nvf5f5s1aER4mcSNUSibZBEwmUYHVR73iUPK7rHcDARAJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2omyK1v1ouviMLuWvLpQwXy8XQnnwtcJNS5kf4e23ahLE6xCgLNNEAJfB5X32iBG5qRJS78QFYeo2PzsyuPQNYnq",
  "key1": "MpPDdA96ZMto8fbfJ36uMmjKJKwbppgse2YBAc3m86k8eQ2JaM38KjKDkNfqFcoBpCdCCaXPGmQHppvJoiRN8E5",
  "key2": "5fsDswe3aeVXpzjrVp9uz1VeiWWDb3VmvuUdXanBPm2a9BZJpmQR8pkH4MxdFukmUZbA4nk1z6s1QHCusFxok6V3",
  "key3": "4XV4rrCRiPc52eRv4e8bMThoNwAhdrGrzaxNSdGfwWbzft7Qb4nj3QEbCi5qj3aQutSKk2P2ioTmhwNpdNDaTJoS",
  "key4": "qoHvkDqV3fWTXX6JZBgoAZtCFJSydumLfqEsjKbi4wT57NBrYmeUsmwDBCVExqcAJenacs9imJJAuh7ZqxsrUhP",
  "key5": "2FEzdGqa5br2m4j1NewSe6cNpDrnvajndAhek9pxHJSRtMyMoK6aweZnHsQV88yHAYnErDoKU1PDXWunC2NSJw5h",
  "key6": "4r9pAeEULN2Q8UrKkyxeBUR7VS7CuzukA7Ayuk48CiAKaNfsD1KsfHDKw7BN8Sj2wwUMdo8eE2gZrBEc6WN4xS9M",
  "key7": "5yenDfrydoBsEGvjno3NUPN8WFVvJYczND6dchieXFKyUdpLgXMa7MT9KnZGWLmoGfeVWxVmpJZXtb82J3ufZiwr",
  "key8": "5sjPykVKBKKz3fWURpaFANUtau13MjAEWsr2TfjWbbSUYKuWXHT6SX8t73ySzfPQPjDcZE9KPa1vEadsTzw82AoJ",
  "key9": "3FuM84sfUSBGhCpwD5zSJN2GN9vM7fp8Mub9iG6MyvwFxVP6H5geE9hQtmc5XZzXgi4TXC4UAtNYa2sCUxtRTJcC",
  "key10": "4BP69KWwyD5g1vH5r6MukWncwx3gofrR7Zra8iD6JE5MaPJ6XSNGL4SQBkchheqtKfZgHmZUpMXpSifi5JmBtm6V",
  "key11": "2H84c5hg58GkMNc6xK5dZ62dq5scEnzoroYTWopYejqXfoZoJc1xsoytD6fc1eYsFHEvSf1qXJGNCNd7MLYrzTRZ",
  "key12": "3u6Bum2qGkrMgWKgdqXejz6KHhFo42YghuTYV56rhqH5yJdXhK3DKbsK2AmpJ4i5i73P1Qru9amAwLKA94rwoxto",
  "key13": "4Cd1mcdmpmyMopAgZ9DtHPnLAyfEhHvRiRY4Srwv5FsZiYWnyzcwa7ihLhRi641dhC3dxezMq6MY1qoU7FykbbbH",
  "key14": "4W7nnMLhRm3ziMJRav5uYGzrobKrar9uv1oDheBJFm3LMqQUjMshC4M6t466qos9xxNL1p3uJXH7Ec2FWFy78ABU",
  "key15": "QWucNwPVeM56HK2ZcQoXFffiCsyRPpWrAazHNffGdpmCCDqomFtUGnLuepdt4kAX6yCho7FmJXhzeV9swXvoP1B",
  "key16": "AEWX7ViNXUMTYkY85E2RfxeLxwdoQUq4KYuYNd8mGYazz7W8dRQfmJj9jur5XpGTsYVfbny6V7KvMyAoEW79yhd",
  "key17": "61hC15nStKUkGVUmGkTcUfNvXFfMVKhbU2cPUhwPjTXk9iTmtuwiiUMmcaMoKDKrskhZHJJeZcTTfmL2WfWFj3CW",
  "key18": "4yZiJe861s3aJaQA9JeAV8kqeUTuBjob2jWWLcWVjL2GctYmK8Ja95pscr1ZR9DuZSt3TFk9eHG8WoH1ndZyQDXn",
  "key19": "2VyNVJUqnofKBDzDmM6XFgvenNaUpZ4s6mWc7Uv1PkoZUjc4QyVYD9Pn1CbztgJZFvvx26GJ54575Hcp1Cd863rn",
  "key20": "5cskhB68pwC8a62MQC3baizzVmk2HEc81YVuNCwKfG4oGrVM5tuiek1EiBFV3xX7QmmQ1DgfdmaczHooCRukHSzS",
  "key21": "214nqB4YtHPbeaSZTpoMqTTtyj4EZuEa2oCZenGGQYgJoDvx4JtGnXoYr2sP9QbGygBE12UFgAdj4irNYqWQERsE",
  "key22": "5QVw61gz41pWKqCFkWVWCsyFbBjc8XMRnTYL1oyRWMro1Sjiyv4RJDjE4j46Ng6w9wuaU1WjqCpv3quRfZ68kpZ5",
  "key23": "38SXiobfrHA1YR1TRUd9Px86543QJfNTp2G7BxarnGJxfSbPhLPoPRjzsvN1ugKgFe2P81hSUnrHqc8qWhAHQ1bC",
  "key24": "k7yqWWwYiouAWfCZbwaf3AnrUE43ZH7Bn99uiB7WMuRQRt8STF4pAjC1rVdMFbUUYPQxMCH4eoeiYfv8Q4ASqDP",
  "key25": "2ANqKhDP7YabQYLiY2ngarSgdYQ7qVtYdj2g9f2TYSPkx92ig9uMFZCjYUE3D9o3qJdoZMj8PdDCFgrQ1w8ppULp",
  "key26": "128JQZRnHCip1zZMWKhweGjuHqAtM8hMHp5SG7r7S1YdhgdmdzPxKFR956KBA76SH2WYEQJ3D5Sa2VqhZecnbjSK",
  "key27": "3RqNZFphNe6iLpNVJedXUz84bv2gUArHU5MUxVkJnDPkaUM6HhoNgf4eERqUwdU72UajhiXXgUTRUmzdosSpiDuv",
  "key28": "4QugeHkh8GWxkc9KusBBafssQ5GJ4dLNxd62hWNzKWA9q5pXg8V1Ae3T2dwnTRDXEv1Xc44XFH2cRRj9aPePd2SD",
  "key29": "64SDTA1Qx9gfQjoXnyc1GU9oNxtBZsbXfmK2arE3G9cGtaPpGmq7xK61FgKfoUA1fkXQTwdav8ZzWgMsAYgBDB1L",
  "key30": "3FZXD6q2xqMWvZKGLnDHQ6aNarfgUPR9oarvYFnkQJqHKMKy7L46cZPo2h6VgDyP5AoVVSm8niee65s9gqs4Db38",
  "key31": "N5i9q79jvNhbQq6AUVuSGKBhkfooXuZ7ojE8f2igCRvJ7F3fSkcgEL8g2viZbzraVZvCdMvzkyU5yeKWVHZtKGQ",
  "key32": "3cNH81DDXnXkEDRD2VhchttmbowZhnCzRYeV267Uq4Vj8EcRmxujMMHTgoNs4kADkqxLYWy3HiXgxYPEjPKPTtuM",
  "key33": "62Xor2zWg2MpakDaCa9P6ekHp1fvn76z4kvgcQkvKFP6teL5ASE8wnS91WgfV3seMyJhBjqkFXoW7j8AAnJNByqH",
  "key34": "5uqRF85KMkV8FQwNjiSw6NPurjqL1uHTqhSzyQRkfoVZbEtg2PRCai3Y7ATH6SYybf2te6nLRAGZ1SVcNHgwqbhc",
  "key35": "3E8K1HdqJrDd1kzCv6xWsGApoaEhvj1hKhaNijvwnZ19QCuZsjhq82y5xyEaiyGUmzmqks2HmyaqCLJVCLoWu4S",
  "key36": "38THA7A56hg3DPggxqqwPUw7jsJfCjwpeXfD5HzXAQEZhMK8frPZEpXUuTcKihTGrWJRJbL8fJBAKtEA8YFwGpJF",
  "key37": "45sHmR5ATn6sW3BwFHzfGGPV39GG17j2gY9kwKkzpN8DMikXLU3G93XKkHutNeL9jnc8uG2K2LqN7oVBKGWGMaf2",
  "key38": "uDdiCJq8fLFJq9vf4LGGTMdJUa8DsNVdgvknKLNcGnADPtnBrWcqWaeHuagxMXFMj2eMqnc9FEfPPpZvckantaZ",
  "key39": "2Wcx89ika4pA3y23MdCUXUkpwRGWFnpnZrSZ92GhUotWcVJ23APbB5FSJC9tuLrBVZWxLGYhKrjeQmJybewtMZ8",
  "key40": "X99NsPQnLTkw6zwSJm7ScqvcAQrPo5Vzo4RmCtSXnRZ4Wwjv4Uwc1V8PfPwWXJ1c8GuQY8JMoayPRanB5s3KRh7"
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
