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
    "46nk81NorkD1xMh9WyHX3jA1WEj3UxwoELiEQbuDMPwwWV4eoqbhEBGvLssQBdTvaPAWTH4d5Dvni9Qg5HcXz7Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sZiajFQ5SEMapxprDVjvUmEe1kZmDqpNWq1ENcyjFNnv32Fwt8m6vbvae2ZX4UEAVLWNiiq7gY1YaLZhxSDeNUt",
  "key1": "262o4x8GXHuwrkWrt2XMb8a2D21c8yLvkYNQz2hRhuvPGNWvNxGXdXygnUzS9z6TTKj8fmSG69nNXL7FER6Wxg2n",
  "key2": "rbfP9W1XYyTWrraM6nLcnKbvQmCf7kMRdkT3GYMugRncisz9fZknhC3hkKvDcEFdMWgtNjzUARgu5QPtmqezn4x",
  "key3": "4jvqSve33VTfwHqT9JxA9AGTdjfGXAVhc44yySFNo4MBeMenKeJWBdPCzk6y5j2pcZbiw66XNXvWpa7UT1Hq3U8D",
  "key4": "5bV8PK7NswLkP2JM2Te7XW9MjU4d3GvAuTVUapgD9RNTNxCLRfBZ4eZEeitz1YUWkRhaksS2RSWcq68UQRthRxAe",
  "key5": "2YaKWsodn8xZ5G2bkL2897kkdvL31M3WrMiwAMTLJNk2jmePA3i66PhxLukATGXfHhyMkevmJR4pUmUxeLa5RvdC",
  "key6": "2H6Lx64poGJfKMMsd6ad7jMGyh82EtYWdBRG1w3EixuTqXU4KY7wuZjz8n4AWrvrt3VfV9u1ns36pPuL2z5tm96G",
  "key7": "4LWfvGDjQQP9ao3PXkysp3c2BxgqyYHR8ABHVUcvZFcPuiijRs51VbtmUPRuULeRRRQYKC28E5UP8ZZ8k7N3KZ12",
  "key8": "NFY6AFFbKKF4pgzPu4hJFXqhC2yqL9WWajEyB4MGVDRMTUkv4gv3fUDDF2iLgzKHrcq3zhSMtwBxwPCtPv8x6Kr",
  "key9": "3KvWyChRAqDVvgrPUG8wh9xX5PAao5LEsJcw8eN7TQhAUPb74mUar6xfjdQG7RHeCdEywsYiegdm2YAfgHwdR5ka",
  "key10": "U6FpbL591z9uWBdUwrkxB2AksJrgAKHhJM9WPShuv7wbRgpfUzuwQeCP6Sb6CSJm6967SMGwTx1bdC7wHWbgQfL",
  "key11": "2HHYmnqZChPzhfrLjT3J5wFootLRYVBFXQjv3N3wZ8o2SCd4eS9rhDfkxUpoamufL1CWKLLEt24Wg8bXDhL1mTGa",
  "key12": "3ssFpWAeqmh6a5QwyjVjm9nrVtwWqY9LjAUQsLD9NsPnS4p7Qi7muo1sHzj8dZ2mx4ykVC1PmWj55xQF3DofSMqj",
  "key13": "5sKNmstF9MpnESMNfn9Vhb6gSdPkWfpLumPQuaGRHoNZCDSJW1gk4RSusf3VTJoWHMopxsXkR1p2kVum9N4QiDKx",
  "key14": "hmHqSTStPB79qgBQeM9Fi4HH4oWEuvSg3hFn1HADyU9RH2jfQAkhRJT5f6cU12wf4vsq9muNVFQrrpDMok4GDAB",
  "key15": "361o3HaC2NQWDRFAoEnkWMevNx1vKCdAhgHJcrZfeQbiKDCnM5dF3F4ZYEqAZ6vm3uyUJxMjisXRLUiVh5MFZ6vp",
  "key16": "67RL2oiyTbyTTf7kexuDmYXRbecc2HhFKR2QsPopMtR4LcYPySAjJLadxi2YcP5u4eV1MfxJvVTRAYfQRLHy125a",
  "key17": "3v5LCLfXgrj17aN6wVoTdLYuiYHDTMK6FpzxFFTqDTYNpKXzPARuXPAXeZvHA7nvj8XaDTpPyi1j6x5uvUqoqejN",
  "key18": "4QwART6HSYFgKGUxqUvtuBUv5QWbqS93FqLbXNPjD6XFuKpd9PdZckjdUHaSLvfcMU6z12RFsD3oYAjBLBb7vygm",
  "key19": "22amqkWERH3qum8LhaPoEMaMQNpXcwcPVwpYkiru2uubfTK3niBRh6kjky1MTMCe48kWCUpLgAXSNaaTuyAfbdPz",
  "key20": "3qaU84kHBgigkf61m1PwuJgwHPouuSsULEYxyd31ykE9ATq9Vefhcyv5AHBAdtoXoVd4hk9uiktDQt8vwzATs28g",
  "key21": "5JTwn3SiG9Qz1Y3c5geB73EYUckrhKYRi3Uhz8yupUhqD3JeV5Bhcz1XMfjVogGBRCDSudtFcinFxVpgsopuua66",
  "key22": "sgRyrb4iDYuiVNpAuJA4zU2ycAgqzVFSzWahNqcHvHGq3FRGUG26mwyK1th5qG5gJqXyxwSfybovt7CtVmTUKgv",
  "key23": "2HoF8KVLuPdPf2p66pbMpQEeuCv4fQiJ5np2B9a8BBPFhKgNu4SSybA97BNJYhPSTeRGUJhC827uqdxeVAxEfyCV",
  "key24": "kLXsUEoGQMsBWCem8siuxgN5Xbp9dmyQvRoby9JJSBEiuZuH1gf7XjZrdWCfJeNym5G1FxbQ1vqtrAR8QiKkqfU",
  "key25": "5ZKBDvMad63288rRnTo58Duv1t9of85Bn3f6AqzDC6rzMYCjAERmxEg1mByJkMHXoEnYUqzxodYr8bqLytceCqCC",
  "key26": "2UrjdjLEP4o8fenk3VPq2zXKW7dzsoZBr46Qyog8seNKhph6882ERH1xKyWiWuit4Tm1zuWTjh1yFrf1gbkXTWfE",
  "key27": "2SJNcvUkDMzHt2D1A552Pv7e25mUqoHdBSVaKkkFjcniSNBbZxRzpftw5vZiyEZr9gy5XFw8hXs5zujygHpBQphA",
  "key28": "2yoRQHqUj6oqpSX34ZabmUvvaFoPtBRKDSUD3aE4sHMXJuboSz2uLFcuXGJYaUWWcJ4o4BA7BQqYMiiLCNHz8CeY",
  "key29": "2p4dKcDoAExGfNB26E3L61BpgCAB2uH72VoPZkE9m2reDi6vfTwKDW3kYVXqfMsXKB4xqTJQ4PRUERw343GfUw51",
  "key30": "38XB8uXWpN4iWvwsWRm53H8cqkUCDCgtQjCsn83Joa8WNSv4L8aMrFdpBbpQNKFGxovwsgZSDT3tU4qTmtQKKken",
  "key31": "42WC8NheJj9aZEv1ZLqy7wy8dgTYNfE7Z9xseCSEwE3JMwB3LC4yTXXfz6A6r1J5qG8tF2P5SQ12cMc2vCaMB74V",
  "key32": "3xaCTH3gJa1Sgz4sDuWejeaYU1UoEc1fMgi8F4W1MxJ2pAPM5868NX32vFecqtPk4CYXEq2kCCudofHdJoTrY8XA",
  "key33": "38YLzniYAzo8G9EtcQWE5o3SEwEbxfwwkDwmRHcn69kqiESTvUZ5gAvmXcU6XLCvrkfEPn3VenqdJvmSp3ih1x1y",
  "key34": "56nUudYqo5fXp4eWU2bfa96w58tEqcfMkcDSjisBfrZKogeYMrS6JL6UYxFRGkv4J4SkDPX3NDP2iX2BAnFQCTLG",
  "key35": "4Fw3ntVcGvmg74a4owsfJAqUyQeZKhFK3ZnPNGXuEXCyYm8pVECnUmRoE1PeiAW6FJYY3dhs3uGs9rWasBihjH3X",
  "key36": "2VhhwCQz4oxgPX5n4DaawSzKAk6QZzy3Z4hP2h1ivAd9XNgK2GW5SPGEYqZKcf46iksYhVEntKaRBvefLnZ5sNv5",
  "key37": "5bUb5kGM45jWoS8sU8pddxdEzBD2HqzTVa5J34ZrAASrDkVNZmG5ypyJ1PLrzguJZpbdr54XCL8kDDCMhQG1auzR",
  "key38": "2t6jsdqJWxnog5UicQrBjZ4vUUiXZKTeap3VxGBXxWFfAcd2zRhkLBcpoEdX4sLiQNz5neNFJVmiTyfhVMKMYG25",
  "key39": "3GBurjHCLsJ7q5oXXXDR5dJQiQh1kYMwSmTYHrVew4tVpjCRMNPkG4NPssY6DCoCQXMovtMbz5kYgEMJMGSat3T3",
  "key40": "5PjKXZpQ82QsJGicRCzKjVCMuk2PyPFf6fKz1xmKFLDd27HPFcspU1haetWJVzZuVdoduXZ2RzPysUuHd98wH7eX",
  "key41": "raCDcB9qAjSG37YMRvG8SMHeCLwnQxdWqqEgUD1WdPBpvTj2YftUCTvZqoQ2tLHoP4QKYt2SXmuH3cQnM31RRNq",
  "key42": "5E7uCkQzFZAnHkknMdMdaav1QHWphh4siJyE4cYjtxdQ9DxrsR8mvwEzSscYwX1LimvFwVLXg85VyNkNnhCXizdg",
  "key43": "5XSAUWLaqZA34FwkkW9p2kaaw97VXbVusdqyvBzvBbkkyfPvKbUL4tVxYDmGkN9JeZeG246DjiAFRDvr3WuSCUET"
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
