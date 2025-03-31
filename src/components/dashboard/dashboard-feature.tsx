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
    "fKJcKxSeTpPTTzoRwk8zAiNT564oH4E3SoL1GSbzx55CpkCmrBqU4RUWKrd117B4vegqJgceA621Zk7LCL9t72c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxLNS49g6cfJvHdps5RGf6NwxHn6GeL8BuzjUVB85ncZzRfN7LJxwcV5fmKn297fFDTDc41qmvKrPmSjWxSR2tY",
  "key1": "C1j8Nh3ouvUpkuqs4J9aEBcLEMqQRkDLxTJjW1NzQhLLzfqyCGT4iseVYVGGU6s5RvcNGpsi7ERArjEjUVWo29G",
  "key2": "4zCHUe4sNko5LGW1Y5FqkeyQjCLYPU9SiRuVXXV7hVbuzzSJjGS2cynHPJqCsv31YeqD4WsCvMb3yGL3zKrk5Mh",
  "key3": "ZPEMvmivCZkFCy56YuG8PQJyYyTwQGP3Fgk1tD6A3CzdfTyCNMJBGUAgX9vDXwNZXUYmXahsTGp76fmegx61UT1",
  "key4": "53rsGSbbPtC8q1tpw7aDeVUzzuWV1ErdhhUACR3fCgvNTb4NduoVScVp473JMdEAwMy1Zm6zZ81hsJ9YgoKPq9uT",
  "key5": "3wRMMD4bQnpTEcN9ydJ2fZazwswPhh6DyHgF1pbRTF6iTWFEeRsZp7Vn3UCAadmzuhKBAzZiP11WvyHCqGySudeq",
  "key6": "5sbjhWDq43cSw87giXhNrWouhS6okkjfr7NeMQTudrJu1dMWnEBdVAFvMVwYDtD678pt3DiDG4BYRND1Y6uuubQd",
  "key7": "5wMWjaD3gtuKKPSqqttnMpPTEdHCQ2GumVaoR2Z6qDY4auVoEjrP2mifgLTisyrVPND7ySBQBhV2crChX95EYb9Q",
  "key8": "MQ64sxmDDW5jnvEZ7h3dE5CNcDNmB7mMuguXuDkxPS4w9NBHuVvVnjQhEHZJAFNmPEvQf45zQU1z31nkJYJdXiW",
  "key9": "4mz349aXynM9nJau7zNAYt5NoV34kGjDuVJjfp3G5KYahi2UsGLge5pLcYECtXSSYRuLX6aFXJoeGDFoVrBjHq6f",
  "key10": "5zV3dJyFZeaGBKDQh9aB3566ugZNKTUFofDkC1jA4vuwwjdtmNkU2ddoxhvguFroz1yhj7UvSRd3irW3sJHWLxuJ",
  "key11": "5KhxHgqXywvpsPQCUUu5dvDPKv26EL826LsT6UozKMUmtm5DMnkre6TriJ1pLL2V8VcMb7aN71rfYD1HHgh7Z1SH",
  "key12": "fDQnscshyDwF5jo9gMx1E39gbM7zEWuktv93qEeRB8Y5auHXDFhkfjBVkzTforReKB7FkV6AFW5KPo7NzfwHYAz",
  "key13": "r9HDgmpSMX6BDB7oTezHm9gckcQ9mdaHa7tWXVdQ8B9stKhajTLgnsH7FXb7Ujsfeeo4CaoLzWmnTUzNYJSNNQE",
  "key14": "339F9iXkJvzhPqU8svJykXhxfTnRTjXK5f9ohZ9F4mqCmVPPY5KE8aBWSikKuov6joEKxLSAZnzEsidXrWVxwnPG",
  "key15": "hkwYe6ss6TNnx31iTH4QaN8qiyFAe8CyBEPohG7GDzrou8teVZiM6vZCSAUxM6yqteSpkCqyvLqdSEyscj2Tr2P",
  "key16": "53TRSTAkQynXLkf8AEvjM8zUFuRx3MmxkGuCba8KFtBh5XgHSbQ3QVpiocsP4kebzNcsBNf1AuCTWJ3frtY5hVu7",
  "key17": "3vFrYbzvPvsUqVHQX12w1ejvLRnExdhJGfSMXZZpQcsKUxFyPxrF4HGxPiEVqXzNCfi6ukvsqzedyVh976skL7u8",
  "key18": "4pDnY8Myo9hE5MonqH9rJtxZgGczeAY3VnKUuusUZNM6orNouwouaT2dsczhCsNR7UpSknaeAg52fqQbPNsEv9PR",
  "key19": "517kwra2VChk6G61TsXfKdGdhWDcTfnY4X3fYTsT1QyTfta6EchYAiJKm1gJ3PmfUfmdyPRMvX9Lu7hQX7GzRJct",
  "key20": "x5Tc5VYJ4i2SbmZAK33Eg8rkG1vryidXFBuvoUWufEoGjyRys5G3H44WgpeYW1tCr5N4iFZrCikmPRc4QbcNzeo",
  "key21": "xzJ2gee6Z8iA7LhbjLYdiYsbibLsKzi986t3ebBHS2TfdenYnubZKcHuijHwqCG99PDwDQJJ8sXhZspmb2oZ8zu",
  "key22": "4MHbwrX6QmafNVerP5b1DqmMUYLL2Vk75X6Ncd75hWfLALBytZ4fgXwKqgFuXFE2jGjNXE8fkA5GviLobHcrkKMe",
  "key23": "iYQB1ACQyuTdFjedNnvXFpepTLTmHrY51A3wuwh73DC5GhUAC37KdMXvUNXHGPasw93ZyMMMmmW89UZwbbwvy4U",
  "key24": "5ExaMqTGAZ7qL2wLiqcAqYRAm5nRvi1o7bdVLdtf8ZGoD31rzh62JjRNVupWu3vq3GEcuxP7q1xqC73XLibrdDqk",
  "key25": "5RBFQLva1ihr5U9S1RJBUMv9Js7N46Pf2eircsV5R9zfRs2amBoc1JRTtd3YdM7VRVzqXVBBW52rR2avK2Beh4Nj",
  "key26": "4aBy3TQAibBaisF6LbUnsRhs1DqcfrUcNg342vMEVqVzMYda95WernvrCrKSWj16P9YnUs4vWxcWhgepT46TTXGo",
  "key27": "5RJXyTA58xF6nZQ5RCEjhbsYrB55zWKZBvtcuaBJNPM7V3TCUDNoEZQXMu4R2yfPizVP5Cd1YkJNqkyhpVYgXDQc",
  "key28": "4QrXCdVtRAD22XWfjwamV9oVasdEVoHrC2DWpXSTS6sMrZHfQopC6dGewyp1hc5937hqAq2jpobBrpYVRrDq3t1y",
  "key29": "ujWjMb4pCSsg9SLqu8TP1Tvc3CUMEwmu2PwQXh6DHzhy9GjuxZUYki7Rp5eMQ1H729fZ5TW44FKsuvgW1s8gZD4",
  "key30": "2R3KJqrYJ6VeqJe8MYQ7ATu2KNodZunE4tsS2RitWMpxhjH2ZiQj9dhNMzSCwBZevsh9DGY6mpbS4y1XSeHmesrL",
  "key31": "3ChYfkdiUwhqU5gM4ieJ3HvwePHVDJ7R3YS2g7xYRwsgkjxBJ7BLpF73sQsUSLATNUqG73sP61f4dcTpDvH2pGgN",
  "key32": "3Z3nnzi5pXvrhnKYrjZeVir3TcTUMw4mHM3LjbWJJMLRroCkmfWau6U2Ve71LhDTYyn1BUeUTA914QXeMd6mZSJD",
  "key33": "L9NkbDppkyFxjazmtsW7CkyJXTNyfGAGEDeGX7RykaSpQvRtKpBTgfZBHMMeF3SNoTV2QwUG84BYzYaTsG1sdae",
  "key34": "3biAFqhg5NeX6dreMVYTaTiq486m6zDvPZxcpuxsY2pbGXbKEmY7DAyTXZZMRvEMuPbSVzHANscHPPLg2Ag3HxR9",
  "key35": "2XXr3GxgtuWbTuU48goTW3nVGYZsAMTJhijzksFFi1vGecLFEnkqshPS6Ko5ECgWnMRrxUqU5eeHEYd4oZkQM43V",
  "key36": "2Uveffagbgzwp2M7XUfvfpHo9Ee2YT8tp1u4cnAr28VnZF23Tzu1bHXyT5pFPiJS9mPJsE6M2e2mJahb357uwgAX",
  "key37": "3oQAFzkqsMi7k1k4QFSKPZJcYyPDhKhXEZH79bbvc5V78K35Gb5KHnLZqeAkSA26c6sT1Lcrmc2cwgJhkziHv9Sv",
  "key38": "P9HgQrspsvxc2zXgEjSzGJNJygcftAxPNLoPpCJKGVACLN5XoN2xJHYoKBsZeMhxv7ste54ivcF3XLp8jCupApz",
  "key39": "28SDYUiCsNr7rsVwioj4M2SuxfVmhD68mBQ8CM2XTVD4akC5dDsaJshsnDJ6Pmtvg2godXMdcY2guCdSF3hDpqhi",
  "key40": "3xyxpDnia7eS3cysu4RxMNS9fyas7PwEGZPoQXN6VULZVqCE8ggE2iZfbx3bYZA4vMMopa3vYNTb8g3NB7sGDJPx",
  "key41": "3nkm8A1AN9JQZTxppjgVgn2K1RzAytQi9iP3Zu8mMGEe68UpgLeuBffEao234sXhnqmcjHkrznRREZmAgtGvUSts"
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
